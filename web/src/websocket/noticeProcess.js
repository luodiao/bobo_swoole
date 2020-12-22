/**
 * 消息处理
 */
import Cookie from 'js-cookie'

export default {
  _args: {},
  $ws: Object,
  _callback: Function,
  onopen (evt) {
    this.$ws.send(JSON.stringify({type: 'register', uid: this._args.uid}))
  },
  onmessage: function (response) {
    let rep = JSON.parse(response)
    if (rep.type === 'message') {
      let friendId = this._args.uid === rep.uid ? rep.to : rep.uid
      this.setHistory(friendId, rep)
    }

    this._callback(rep)
  },
  monitor: function (that, uid, _args) {
    this._args = _args
    this.$ws = that
    var _this = this
    that.connect({
      onopen: function (evt) {
        _this.onopen(evt)
      },
      onmessage: function (evt) {
        _this.onmessage(evt)
      }
    }, uid)
  },
  send: function (to, str, type) {
    if (!type) {
      type = 'message'
    }
    var sendMessage = {
      type: type,
      uid: this._args.uid,
      to: to,
      data: str,
      timestamp: (new Date()).valueOf()
    }
    this.$ws.send(JSON.stringify(sendMessage))

    if (type === 'message') {
      this.setHistory(to, sendMessage)
    }
  },
  setHistory: function (friendsId, message) {
    let history = typeof Cookie.get('messages-' + this._args.uid) === 'undefined' ? [] : Cookie.getJSON('messages-' + this._args.uid)
    if (typeof history[friendsId] === 'undefined') {
      history[friendsId] = []
    }

    history[String(friendsId)].push(message)
    Cookie.set('messages-' + this._args.uid, history, {expires: 30})
  },
  call: function (callback) {
    this._callback = callback
  }
}
