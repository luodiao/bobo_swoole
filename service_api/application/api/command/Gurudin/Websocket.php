<?php

namespace app\api\command\Gurudin;

use think\console\Output;

/**
 * websocket处理类
 *
 * @author gaox
 *
 * 消息体
 * {
 *   'type': 'heartbeat', // 心跳
 *   'uid': 1 // 用户id
 * }
 * 
 * {
 *   'type': 'register', // 首次注册用户与连接关系
 *   'uid: 1 // 用户id
 * }
 * 
 * {
 *   'type': 'message', // 聊天消息
 *   'uid': 1, // 发送用户id
 *   'to': 2, // 接收用户id
 *   'data': '' // 消息体
 * }
 */
class Websocket
{
    private $ip;
    private $port;
    private $server;
    private $output;
    private $debug;
    private $u;

    /**
     * 构造函数
     *
     * @param string $ip     监控ip
     * @param string $port   监控端口
     * @param bool   $debug  是否开启调试
     * @param Output $output 控制台输出类
     */
    public function __construct(string $ip, int $port, bool $debug, Output $output) {
        $this->ip     = $ip;
        $this->port   = $port;
        $this->debug  = $debug;
        $this->output = $output;
        $this->createUserTable();
    }

    public function listen()
    {
        $this->server = new \Swoole\Websocket\Server($this->ip, $this->port);
        $this->server->on('open', [$this, 'connection']);
        $this->server->on('message', [$this, 'message']);
        $this->server->on('close', [$this, 'close']);
        $this->output->info("Build Successed!");
        $this->server->start();
    }

    /**
     * 监听WebSocket连接打开事件
     */
    public function connection($server, $req)
    {
        $this->output->info("connection open: {$req->fd}");
    }

    /**
     * 监听WebSocket发送消息事件
     */
    public function message($server, $frame)
    {
        $req = json_decode($frame->data, true);
        if ($req['type'] == 'register') {
            $this->u->set($req['uid'], ['fd' => $frame->fd]);
        }

        if ($req['type'] == 'message') {
            $this->send($this->u->get($req['to']), json_encode($req, JSON_UNESCAPED_UNICODE));
        }
        
        if ($this->debug) {
            $this->debug('连接用户:' . json_encode($this->allUsers()));
        }
        $this->debug($frame->data);
    }

    /**
     * 监听WebSocket连接关闭事件
     */
    public function close($server, $fd)
    {
        foreach ($this->u as $uid => $row) {
            if ($row['fd'] == $fd) {
                $this->u->del($uid);
                $this->output->info("connection close: uid=($uid} fd={$fd}");
                break;
            }
        }
    }

    /**
     * 发送消息给客户端事件
     */
    public function send($fd, string $msg)
    {
        $this->server->push($fd['fd'], $msg);
    }

    /**
     * 创建用户内存表
     */
    private function createUserTable()
    {
        $this->u = new \Swoole\Table(1024);
        $this->u->column('fd', \Swoole\Table::TYPE_INT);
        $this->u->create();
    }

    /**
     * 所有连接用户
     */
    private function allUsers()
    {
        $users = [];
        foreach ($this->u as $uid=>$row) {
            $users[] = ['fd' => $row['fd'], 'uid' => $uid];
        }

        return $users;
    }

    /**
     * debug输出
     */
    private function debug(string $str)
    {
        if ($this->debug) {
            $this->output->info($str);
        }
    }
}
