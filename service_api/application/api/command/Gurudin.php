<?php

namespace app\api\command;

use think\Config;
use think\console\Command;
use think\console\Input;
use think\console\input\Option;
use think\console\Output;
use think\console\input\Argument;
use app\api\command\Gurudin\Websocket;

/**
 * websocket
 *
 * @author gaox
 */
class Gurudin extends Command
{
    protected function configure()
    {
        $site = Config::get('site');
        $this
            ->setName('gurudin')
            ->setDefinition([
                new Argument('args', Argument::OPTIONAL, ''),
            ])
            ->addOption('start', 'start', Option::VALUE_OPTIONAL, '开启监听', 'start')
            ->addOption('stop', 'stop', Option::VALUE_OPTIONAL, '终止监听', 'stop')
            ->setDescription('基于swoole的Websoket协议, 波波大法好');
    }

    protected function execute(Input $input, Output $output)
    {
        $args = $input->getArguments()['args'];

        switch ($args) {
            case 'start':
                $this->start($output);
                break;
            case 'stop':
                $this->stop($output);
                break;
            default:
                $output->warning('请输入正确命令：' . PHP_EOL . '    start = 开启服务' . PHP_EOL . '    stop = 终止服务');
                break;
        }
    }

    private function start(Output $output)
    {
        $ws = new Websocket('123.56.144.186', 9502, true, $output);
        $ws->listen();
    }

    private function stop(Output $output)
    {
        $output->info("终止监听");
    }
}
