<?php

namespace app\api\controller;

use app\common\controller\Api;
use app\common\model\UserFriends as UserFriendsModel;
use app\common\model\User as UserModel;
use think\Validate;

/**
 * 用户好友接口
 */
class Friends extends Api
{
    protected $noNeedRight = '*';

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
        $account = $this->request->param('account');
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
        if ($userFriend && ($userFriend->status == 'pending' || $userFriend->status == 'pass')) {
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
     * 删除好友
     *
     * @author gaox
     *
     * @param int $id 被删除人id
     */
    public function remove()
    {
        $id = $this->request->param('id');
        if (!$id) {
            $this->error(__('Invalid parameters'));
        }

        if (UserFriendsModel::destroy(['user_id' => $this->auth->id, 'friend_id' => $id])
            && UserFriendsModel::destroy(['user_id' => $id, 'friend_id' => $this->auth->id])
        ) {
            $this->success('successful');
        } else {
            $this->error('failed');
        }
    }

    /**
     * 处理申请好友请求 (添加 or 删除)
     *
     * @author gaox
     *
     * @param int    $id     待处理id
     * @param string $action 操作 pass=通过 reject=拒绝
     */
    public function task()
    {
        $id     = $this->request->param('id');
        $action = $this->request->param('action');
        if (!$id || !$action) {
            $this->error(__('Invalid parameters'));
        }

        $m = UserFriendsModel::get($id);
        $m->status = $action;
        if (!$m->save()) {
            $this->error('failed');
        }

        if ($action == 'pass') {
            $friend = new UserFriendsModel;
            $friend->user_id   = $this->auth->id;
            $friend->friend_id = $m->user_id;
            $friend->status    = 'pass';
            $friend->save();
        }

        $this->success('successful');
    }

    /**
     * 好友列表
     *
     * @author gaox
     */
    public function list()
    {
        $list = (new UserFriendsModel)->join('bobo_user', 'bobo_user.id=bobo_user_friends.friend_id')
            ->where(['bobo_user_friends.user_id' => $this->auth->id, 'bobo_user_friends.status' => 'pass'])
            ->field('bobo_user_friends.id, bobo_user_friends.friend_id, bobo_user_friends.status, bobo_user.username, bobo_user.nickname, bobo_user.initial, bobo_user.avatar, bobo_user.gender, bobo_user.bio, bobo_user.birthday')
            ->order('bobo_user.initial ASC')
            ->limit(1000)
            ->select();

        $pending = (new UserFriendsModel)->join('bobo_user', 'bobo_user.id=bobo_user_friends.user_id')
            ->where(['bobo_user_friends.friend_id' => $this->auth->id, 'bobo_user_friends.status' => 'pending'])
            ->field('bobo_user_friends.id, bobo_user_friends.friend_id, bobo_user_friends.status, bobo_user.username, bobo_user.nickname, bobo_user.initial, bobo_user.avatar, bobo_user.gender, bobo_user.bio, bobo_user.birthday')
            ->order('bobo_user.initial ASC')
            ->limit(1000)
            ->select();

        $result = [
            'pending' => [],
            'list'    => []
        ];
        foreach ($list as &$value) {
            if ($value->avatar == '') {
                $value->avatar = letter_avatar($value->nickname);
            }

            $result['list'][] = $value;
        }
        unset($value);

        foreach ($pending as &$value) {
            if ($value->avatar == '') {
                $value->avatar = letter_avatar($value->nickname);
            }

            $result['pending'][] = $value;
        }
        unset($value);

        $this->success('successful', $result);
    }
}
