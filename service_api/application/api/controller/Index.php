<?php

namespace app\api\controller;

use app\common\controller\Api;

/**
 * 首页接口
 */
class Index extends Api
{
    protected $noNeedLogin = ['*'];
    protected $noNeedRight = ['*'];

    /**
     * 首页
     *
     */
    public function index()
    {
        $this->error('非法请求',['msg'=>md5(time()).rand(1000,9999)]);
    }

    public function user(){
        echo url('/index/index');
    }
}
