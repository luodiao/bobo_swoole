<?php

namespace app\api\controller;

use app\common\controller\Api;
use app\common\model\UserFriends as UserFriendsModel;
use app\common\model\User as UserModel;
use think\Validate;

/**
 * 用户好友接口
 */
class Userfriends extends Api
{
    public function _initialize()
    {
        parent::_initialize();
    }

    /**
     * 添加好友
     *
     * @author gaox
     *
     * @param string $account 被添加人账号 (username、email、mobile)
     */
    public function add()
    {
        $account = $this->request->request('account');
        if (!$account) {
            $this->error(__('Invalid parameters'));
        }

        $field = Validate::is($account, 'email')
            ? 'email'
            : (Validate::regex($account, '/^1\d{10}$/') ? 'mobile' : 'username');

        $friend = UserModel::get([$field => $account]);
        if (!$friend) {
            $this->error('user does not exist');
        }

        $userFriend = UserFriendsModel::get(['user_id' => $this->auth->id, 'friend_id' => $friend->id]);
        if ($userFriend->status == 'pending' || $userFriend->status == 'pass') {
            $this->success('successful');
        }


        $m = new UserFriendsModel;
        $m->user_id   = $this->auth->id;
        $m->friend_id = $friend->id;
        $m->status    = 'pending';
        if ($m->save()) {
            $this->success('successful');
        } else {
            $this->error('failed');
        }
    }

    /**
     * 删除
     *
     * @author gaox
     *
     * @param int $id 被删除人id
     */
    public function remove()
    {
        $id = $this->request->request('id');
        if (!$id) {
            $this->error(__('Invalid parameters'));
        }

        if (UserFriendsModel::destroy(['user_id' => $this->auth->id, 'friend_id' => $id])) {
            $this->success('successful');
        } else {
            $this->error('failed');
        }
    }

    /**
     * 待处理 (被添加好友未处理)
     *
     * @author gaox
     */
    public function wait()
    {

    }

    /**
     * 好友列表
     *
     * @author gaox
     */
    public function list()
    {

    }
}
