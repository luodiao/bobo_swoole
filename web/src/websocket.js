/**
 * websocket操作类
 *
 * @param {WebSocket} scoket  连接
 * @param {Object}    options 实例参数
 * @param {Object}    func    回调方法
 * @param {Number}    uid     当前登录用户
 * @param {Number}    status  连接状态 0=未连接 1=连接成功
 */
const _args = {
  socket: Object,
  options: Object,
  func: Object,
  uid: Number,
  status: Number
}

var debug = function (e) {
  if (_args.options.debug) {
    console.log('%c' + e, 'color:#41B883')
  }
}

/**
 * init
 *
 * @param {Vue} Vue vue实例
 * @param {Object} options 连接参数
 * {
 *    debug: true, // 是否开启debug调试
 *    connection: 'ws://0.0.0.0:9502', // 连接地址
 *    heartbeat: 5000 // 心跳间隔时间
 * }
 */
const install = function (Vue, options) {
  if (install.installed) return
  install.installed = true

  _args.options = options
  _args.status = 0

  /**
   * 每隔10秒重连
   */
  var reconnect = function () {
    setTimeout(() => {
      if (_args.status === 0) {
        debug('reconnect')
        Vue.prototype.$ws.connect(_args.func, _args.uid)
      }
    }, 10000)
  }

  Vue.prototype.$ws = {
    /**
     * 连接
     *
     * @param {Object} func 回调方法
     * @param {Number} uid  当前登录用户uid
     */
    connect: function (func, uid) {
      _args.func = func
      _args.uid = uid
      _args.socket = new WebSocket(_args.options.connection)

      _args.socket.onopen = function (evt) {
        debug('conected success')
        _args.status = 1
        if (typeof func.onopen === 'function') {
          func.onopen(evt)
        }

        // 发送心跳
        Vue.prototype.$ws.heartbeat(uid)
      }

      // 实例化 onmessage
      _args.socket.onmessage = function (evt) {
        debug('ws-server-return-data:' + evt.data)
        if (typeof func.onmessage === 'function') {
          func.onmessage(evt.data)
        }
      }

      // onclose
      _args.socket.onclose = function (evt) {
        debug('close')
        _args.status = 0
        reconnect()
        if (typeof func.onclose === 'function') {
          func.onclose(evt)
        }
      }

      // onerror
      _args.socket.onerror = function (evt, e) {
        debug('error:' + evt.data)
        if (typeof func.onerror === 'function') {
          func.onerror(evt, e)
        }
      }
    },

    /** 发送数据 */
    send: function (str) {
      debug('send:' + str)
      _args.socket.send(str)
    },

    /** 断开连接 */
    close: function () {
      debug('conected close')
      _args.socket.close()
    },

    /** 心跳 */
    heartbeat: function (uid) {
      setInterval(() => {
        this.send(JSON.stringify({type: 'heartbeat', uid: uid, data: 'ping', timestamp: (new Date()).valueOf()}))
      }, options.heartbeat)
    }
  }
}

export default {
  install
}
