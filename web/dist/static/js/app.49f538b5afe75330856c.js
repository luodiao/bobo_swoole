webpackJsonp([1],{0:function(t,e){},"7QVd":function(t,e){},"7Ygd":function(t,e){},"8HfP":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("n5Qe");e.default={state:{friendsPending:[],friendsList:[]},mutations:{friendsList:function(t,e){t.friendsPending=e.pending,t.friendsList=e.list}},actions:{friendsAdd:function(t,e){t.commit;return n.a.friendsAdd(e)},friendsTask:function(t,e){t.commit;return n.a.friendsTask(e)},friendsList:function(t){var e=t.commit;n.a.friendsList().then(function(t){return t.body}).then(function(t){e("friendsList",t.data)})}}}},"8zg2":function(t,e){},BvrK:function(t,e){},"C86/":function(t,e){t.exports={"Setup succeeded":"Setup succeeded","Setup failed":"Setup failed","Sign in":"Sign in","Sign up":"Sign up","Welcome to the Bobo Chat web-client.":"Welcome to the Bobo Chat web-client.","Enter your username":"Enter your username","Enter your password":"Enter your password","Enter your confirm password":"Enter your confirm password","Don't have an account yet":"Don't have an account yet","Already have an account?":"Already have an account?",Chats:"Chats",Friends:"Friends",Profile:"Profile",Setting:"Setting","Search for messages or users...":"Search for messages or users...",Light:"Light",Dark:"Dark",VIP:"VIP",Themes:"Themes",Logout:"Logout",Online:"Online","Enter something...":"Enter something...",Language:"Language",Chinese:"Chinese",English:"English",Save:"Save",Cancel:"Cancel","The username cannot be empty":"The username cannot be empty","The password cannot be empty":"The password cannot be empty","The confirm password cannot be empty":"The confirm password cannot be empty","The two passwords do not match":"The two passwords do not match","The length is between {0} and {1} characters":"The length is between {0} and {1} characters","Absolutely empty.":"Absolutely empty.","Not set.":"Not set.",Username:"Username",Mobile:"Mobile",Gender:"Gender",Birthday:"Birthday",Email:"Email","The email format is incorrect":"The email format is incorrect",Unknown:"Unknown",Male:"Male",Female:"Female","Search for users...":"Search for users...","Search result":"Search result",Pass:"Pass",Reject:"Reject","Add friends":"Add friends",Notifications:"Notifications","No friends":"No friends"}},I2RS:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"message-setting",props:{value:Object},methods:{goBack:function(){this.$emit("input",{})}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Row",{staticClass:"message"},["{}"==JSON.stringify(t.value)?s("Row",{staticClass:"none"},[t._v("BoBo swoole")]):s("Row",[s("div",{staticClass:"header"},[s("div",{staticClass:"back"},[s("Icon",{staticClass:"search-icon",attrs:{type:"ios-arrow-back"},nativeOn:{click:function(e){return t.goBack(e)}}})],1),t._v(" "),s("List",{staticClass:"header-bar"},[s("ListItem",[s("ListItemMeta",[s("template",{slot:"avatar"},[s("Avatar",{staticClass:"avatar",attrs:{size:"large",icon:"ios-person",src:t.value.avatar}})],1),t._v(" "),s("template",{slot:"title"},[s("h6",{staticClass:"nick"},[t._v("\n                "+t._s(t.value.nick)+"\n              ")])]),t._v(" "),s("template",{slot:"description"},[s("p",{staticClass:"description"},[s("Badge",{attrs:{status:t.value.online?"success":"default"}}),t._v(t._s(t.$t("Online")))],1)])],2),t._v(" "),s("template",{slot:"action"},[s("li",[s("Icon",{staticClass:"search-icon",attrs:{type:"ios-search"}})],1)])],2)],1)],1),t._v(" "),s("div",{staticClass:"content"},[t._v("content")]),t._v(" "),s("div",{staticClass:"footer"},[s("div",{staticClass:"textarea-box"},[s("Input",{attrs:{size:"large",placeholder:t.$t("Enter something...")}},[s("span",{attrs:{slot:"append"},slot:"append"},[s("Icon",{attrs:{type:"md-happy",size:"25"}})],1),t._v(" "),s("span",{attrs:{slot:"append"},slot:"append"},[s("Icon",{attrs:{type:"ios-camera",size:"25"}})],1)])],1),t._v(" "),s("div",{staticClass:"send-box"},[s("Button",{attrs:{size:"large",icon:"ios-paper-plane",type:"primary",shape:"circle"}})],1)])])],1)},staticRenderFns:[]};var a=s("VU/8")(n,i,!1,function(t){s("XU81")},null,null);e.default=a.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},a=s("VU/8")({name:"App"},i,!1,null,null,null).exports,r=s("/ocq"),o=s("Dd8w"),c=s.n(o),l=s("NYxO"),u={data:function(){return{actvieMenu:"message",loadSettingComponent:"message-setting",currentUser:{},initMessages:{items:[{id:1,dot:!0,online:!0,nick:"BoBo",avatar:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2070453827,1163403148&fm=26&gp=0.jpg",datetime:"11:10 pm",description:"This is description"},{id:2,dot:!1,online:!1,nick:"Louio",avatar:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1373560079,871367259&fm=26&gp=0.jpg",datetime:"05:10 am",description:"This is description, this is description."},{id:3,dot:!1,online:!0,nick:"Air jordan",avatar:"",datetime:"05:10 am",description:"This is description, this is description."},{id:4,dot:!1,online:!1,nick:"Aaron",avatar:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2271338977,1611087163&fm=26&gp=0.jpg",datetime:"05:10 am",description:"This is description, this is description."},{id:5,dot:!1,online:!1,nick:"Bart",avatar:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3157220405,301754405&fm=11&gp=0.jpg",datetime:"05:10 am",description:"This is description, this is description."},{id:6,dot:!1,online:!1,nick:"Caleb",avatar:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2438388894,880471568&fm=11&gp=0.jpg",datetime:"05:10 am",description:"This is description, this is description."},{id:7,dot:!1,online:!1,nick:"Dave",avatar:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=939193375,2877147297&fm=11&gp=0.jpg",datetime:"05:10 am",description:"This is description, this is description."},{id:8,dot:!1,online:!1,nick:"Egbert",avatar:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1101467379,169077944&fm=11&gp=0.jpg",datetime:"05:10 am",description:"This is description, this is description."},{id:9,dot:!1,online:!1,nick:"Fitzgerald",avatar:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=640295866,1857432489&fm=11&gp=0.jpg",datetime:"05:10 am",description:"This is description, this is description."},{id:10,dot:!1,online:!1,nick:"Gregary",avatar:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3600877798,4182679885&fm=11&gp=0.jpg",datetime:"05:10 am",description:"This is description, this is description."}]}}},computed:c()({},Object(l.c)({user:function(t){return t.sign.user},firendsPending:function(t){return t.friends.friendsPending}}),{activeMenuData:{get:function(){return this.actvieMenu},set:function(t){this.actvieMenu=t}},settingComponentData:function(){var t={};switch(this.actvieMenu){case"message":t=this.initMessages}return t}}),components:{"message-view":s("Oym+").default,"address-view":s("zamv").default,"profile-view":s("tl2Y").default,"setting-view":s("q6Ot").default,"message-setting":s("I2RS").default},methods:c()({},Object(l.b)(["friendsList"]),{swtichMenu:function(t){this.activeMenuData=t}}),created:function(){this.friendsList()}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Row",{staticClass:"home"},[s("Row",{staticClass:"left-col"},[s("div",{staticClass:"bar-icon logo"},[t._v("\n      Bo\n    ")]),t._v(" "),s("div",{staticClass:"bar-icon",class:{active:"message"==t.actvieMenu},on:{click:function(e){return t.swtichMenu("message")}}},[s("Icon",{attrs:{type:"ios-chatbubbles"}})],1),t._v(" "),s("div",{staticClass:"bar-icon",class:{active:"address"==t.actvieMenu},on:{click:function(e){return t.swtichMenu("address")}}},[s("Badge",{attrs:{dot:t.firendsPending.length>0}},[s("Icon",{attrs:{type:"md-list-box"}})],1)],1),t._v(" "),s("div",{staticClass:"bar-icon",class:{active:"profile"==t.actvieMenu},on:{click:function(e){return t.swtichMenu("profile")}}},[s("Icon",{attrs:{type:"md-person"}})],1),t._v(" "),s("div",{staticClass:"bar-icon",class:{active:"setting"==t.actvieMenu},on:{click:function(e){return t.swtichMenu("setting")}}},[s("Icon",{attrs:{type:"md-settings"}})],1)]),t._v(" "),s("Row",{staticClass:"center-col"},[s(t.actvieMenu+"-view",{tag:"component",attrs:{options:t.settingComponentData},model:{value:t.currentUser,callback:function(e){t.currentUser=e},expression:"currentUser"}})],1),t._v(" "),s("Row",{staticClass:"right-col",class:{"right-col-active":"{}"!=JSON.stringify(t.currentUser)}},[s(t.loadSettingComponent,{tag:"component",model:{value:t.currentUser,callback:function(e){t.currentUser=e},expression:"currentUser"}})],1)],1)},staticRenderFns:[]};var h=s("VU/8")(u,d,!1,function(t){s("sHXI")},null,null).exports,m=s("sgAt"),p=s.n(m),f=s("lbHh"),g=s.n(f),v=s("n5Qe"),_={data:function(){return{init:{account:"",password:""},loading:!1,validCodeIsShow:!1}},components:{Vcode:p.a},methods:c()({},Object(l.b)(["signIn","setUser"]),{showValideCodePanel:function(){this.validCodeIsShow=!0},login:function(){var t=this;this.loading=!0,this.signIn(this.init).then(function(t){return t.body}).then(function(e){if(0===e.code)return t.$Message.error(e.msg),t.loading=!1,!1;t.$Message.success(e.msg),t.setUser(e.data.userinfo),g.a.set("user",e.data.userinfo,{expires:7}),v.a.setResource(e.data.userinfo),setTimeout(function(){window.location.reload()},1e3)})},success:function(){this.validCodeIsShow=!1,this.login()},close:function(){this.validCodeIsShow=!1}})},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Row",{staticClass:"login-card"},[s("h1",{staticClass:"font-title"},[t._v(t._s(t.$t("Sign in")))]),t._v(" "),s("p",[t._v(t._s(t.$t("Welcome to the Bobo Chat web-client.")))]),t._v(" "),s("Form",[s("FormItem",[s("Input",{staticClass:"text-input",attrs:{size:"large",placeholder:t.$t("Enter your username")},model:{value:t.init.account,callback:function(e){t.$set(t.init,"account",e)},expression:"init.account"}})],1),t._v(" "),s("FormItem",[s("Input",{staticClass:"text-input",attrs:{type:"password",size:"large",placeholder:t.$t("Enter your password")},model:{value:t.init.password,callback:function(e){t.$set(t.init,"password",e)},expression:"init.password"}})],1),t._v(" "),s("FormItem",[s("Button",{attrs:{size:"large",type:"primary",loading:t.loading,long:""},on:{click:t.showValideCodePanel}},[t._v(t._s(t.$t("Sign in")))])],1)],1),t._v(" "),s("p"),t._v(" "),s("p",[t._v(t._s(t.$t("Don't have an account yet"))+" "),s("router-link",{attrs:{to:"/register"}},[t._v(t._s(t.$t("Sign up")))])],1),t._v(" "),s("Vcode",{attrs:{show:t.validCodeIsShow},on:{success:t.success,close:t.close}})],1)},staticRenderFns:[]};var j=s("VU/8")(_,b,!1,function(t){s("tyhU")},null,null).exports,y={data:function(){return{model:{username:"",password:"",confirmPassword:""},rules:{username:[{required:!0,min:5,max:20,message:this.$t("The length is between {0} and {1} characters",["5","20"]),trigger:"change"}],password:[{required:!0,message:this.$t("The password cannot be empty"),trigger:"change"}],confirmPassword:[{required:!0,message:this.$t("The confirm password cannot be empty"),trigger:"change"}]},loading:!1}},methods:c()({},Object(l.b)(["signUp"]),{handleSubmit:function(t){var e=this,s=!0;return this.$refs[t].validate(function(t){t||(s=!1)}),!!s&&(this.model.password!==this.model.confirmPassword?(this.$Message.warning(this.$t("The two passwords do not match")),!1):(this.loading=!0,void this.signUp(this.model).then(function(t){return t.body}).then(function(t){if(0===t.code)return e.$Message.error(t.msg),e.loading=!1,!1;e.$Message.success(t.msg),setTimeout(function(){e.loading=!1,e.$router.push("/login")},1e3)})))}})},w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Row",{staticClass:"login-card"},[s("h1",{staticClass:"font-title"},[t._v(t._s(t.$t("Sign up")))]),t._v(" "),s("p",[t._v(t._s(t.$t("Welcome to the Bobo Chat web-client.")))]),t._v(" "),s("Form",{ref:"validate",attrs:{model:t.model,rules:t.rules}},[s("FormItem",{attrs:{prop:"username"}},[s("Input",{staticClass:"text-input",attrs:{size:"large",placeholder:t.$t("Enter your username")},model:{value:t.model.username,callback:function(e){t.$set(t.model,"username","string"==typeof e?e.trim():e)},expression:"model.username"}})],1),t._v(" "),s("FormItem",{attrs:{prop:"password"}},[s("Input",{staticClass:"text-input",attrs:{size:"large",type:"password",placeholder:t.$t("Enter your password")},model:{value:t.model.password,callback:function(e){t.$set(t.model,"password","string"==typeof e?e.trim():e)},expression:"model.password"}})],1),t._v(" "),s("FormItem",{attrs:{prop:"confirmPassword"}},[s("Input",{staticClass:"text-input",attrs:{size:"large",type:"password",placeholder:t.$t("Enter your confirm password")},model:{value:t.model.confirmPassword,callback:function(e){t.$set(t.model,"confirmPassword","string"==typeof e?e.trim():e)},expression:"model.confirmPassword"}})],1),t._v(" "),s("FormItem",[s("Button",{attrs:{size:"large",type:"primary",long:"",loading:t.loading},on:{click:function(e){return t.handleSubmit("validate")}}},[t._v(t._s(t.$t("Sign up")))])],1)],1),t._v(" "),s("p"),t._v(" "),s("p",[t._v(t._s(t.$t("Already have an account?"))+" "),s("router-link",{attrs:{to:"/login"}},[t._v(t._s(t.$t("Sign in")))])],1)],1)},staticRenderFns:[]};var k=s("VU/8")(y,w,!1,function(t){s("BvrK")},null,null).exports;n.default.use(r.a);var C=new r.a({routes:[{path:"/",name:"Index",component:h},{path:"/login",name:"Login",component:j},{path:"/register",name:"Register",component:k}]}),$=s("b3L9"),x=s.n($),F=(s("7QVd"),s("TXmL")),S=s("PJh5"),z=s.n(S);n.default.use(l.a);var I=new l.a.Store({modules:{sign:s("qCpC").default,friends:s("8HfP").default}});n.default.config.productionTip=!1,n.default.prototype.moment=z.a,n.default.use(x.a),n.default.use(F.a),C.beforeEach(function(t,e,s){void 0===g.a.get("user")&&"/login"!==t.path&&"/register"!==t.path?s({name:"Login"}):void 0===g.a.get("user")||"/login"!==t.path&&"/register"!==t.path?s():s({name:"Index"})}),I.state.sign.user=g.a.getJSON("user"),v.a.setResource(g.a.getJSON("user")),window.document.documentElement.setAttribute("data-theme",void 0!==g.a.get("data-theme")?g.a.get("data-theme"):"light");var M=new F.a({locale:void 0!==g.a.get("language")?g.a.get("language"):"en",messages:{zh:s("pdRm"),en:s("C86/")}});new n.default({el:"#app",router:C,store:I,i18n:M,components:{App:a},template:"<App/>"})},"Oym+":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"message-view",props:{value:Object,options:Object},methods:{changeUser:function(t){this.$emit("input",t)}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Row",{staticClass:"component"},[s("h2",{staticClass:"font-title mb-6"},[t._v(t._s(t.$t("Chats")))]),t._v(" "),s("Input",{staticClass:"text-input mb-6",attrs:{size:"large",placeholder:t.$t("Search for messages or users..."),suffix:"ios-search"}}),t._v(" "),s("List",t._l(t.options.items,function(e,n){return s("ListItem",{key:n,staticClass:"list-item mb-6",nativeOn:{click:function(s){return t.changeUser(e)}}},[s("ListItemMeta",[s("template",{slot:"avatar"},[s("Badge",{attrs:{dot:e.dot}},[s("Avatar",{attrs:{size:"large",icon:"ios-person",src:e.avatar}})],1)],1),t._v(" "),s("template",{slot:"title"},[s("h6",{staticClass:"nick"},[t._v("\n            "+t._s(e.nick)+"\n            "),s("small",[t._v(t._s(e.datetime))])])]),t._v(" "),s("template",{slot:"description"},[s("p",{staticClass:"description"},[t._v(t._s(e.description))])])],2)],1)}),1)],1)},staticRenderFns:[]};var a=s("VU/8")(n,i,!1,function(t){s("7Ygd")},null,null);e.default=a.exports},XU81:function(t,e){},n5Qe:function(t,e,s){"use strict";var n=s("7+uW"),i=s("8+8L");n.default.use(i.a);var a="http://swoole.luoio.com/api";e.a={setResource:function(t){n.default.http.interceptors.push(function(e,s){e.headers.set("Accept","application/json"),t&&(e.headers.set("Token",t.token),e.headers.set("Authorization","Bearer "+t.token))})},signIn:function(t){return n.default.resource(a+"/user/login").get(t)},signUp:function(t){return n.default.resource(a+"/user/register").get(t)},logout:function(){return n.default.resource(a+"/user/logout").get()},setProfile:function(t){return n.default.resource(a+"/user/profile").save(t)},findUser:function(t){return n.default.resource(a+"/user/find").get(t)},friendsAdd:function(t){return n.default.resource(a+"/friends/add").save(t)},friendsTask:function(t){return n.default.resource(a+"/friends/task").save(t)},friendsList:function(){return n.default.resource(a+"/friends/list").save()}}},pdRm:function(t,e){t.exports={"Setup succeeded":"设置成功","Setup failed":"设置失败","Sign in":"登入","Sign up":"注册","Welcome to the Bobo Chat web-client.":"欢迎使用Bobo聊天客户端","Enter your username":"用户名","Enter your password":"密码","Enter your confirm password":"确认密码","Don't have an account yet":"还没有账户？","Already have an account?":"已经拥有账户？",Chats:"消息",Friends:"通讯录",Profile:"个人",Setting:"设置","Search for messages or users...":"搜索消息或者用户",Light:"普通",Dark:"深色",VIP:"VIP",Themes:"主题",Logout:"登出",Online:"在线","Enter something...":"输入点什么...",Language:"语言",Chinese:"中文",English:"英文",Save:"保存",Cancel:"取消","The username cannot be empty":"用户名不能为空","The password cannot be empty":"密码不能为空","The confirm password cannot be empty":"确认密码不能为空","The two passwords do not match":"两次密码不一致","The length is between {0} and {1} characters":"长度在{0}到{1}个字符之间","Absolutely empty.":"这家伙很懒，什么都没有留下。","Not set.":"未设置",Username:"用户名",Mobile:"手机号",Gender:"性别",Birthday:"生日",Email:"邮箱","The email format is incorrect":"邮箱格式不正确",Unknown:"保密",Male:"男",Female:"女","Search for users...":"搜索用户...","Search result":"搜索结果",Pass:"通过",Reject:"拒绝","Add friends":"添加友好",Notifications:"消息通知","No friends":"暂无好友"}},q6Ot:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("Dd8w"),i=s.n(n),a=s("lbHh"),r=s.n(a),o=s("NYxO"),c={name:"setting-view",data:function(){return{theme:"",language:""}},methods:i()({},Object(o.b)(["logout"]),{switchThemes:function(t){this.theme=t,window.document.documentElement.setAttribute("data-theme",t),r.a.set("data-theme",t,{expires:7})},switchLanguage:function(t){this.language=t,this.$i18n.locale=t,r.a.set("language",t,{expires:7})},logoutAction:function(){var t=this;this.logout().then(function(t){return t.body}).then(function(e){0===e&&t.$Message.error(e.msg),r.a.remove("user"),t.$router.push("/login")})}}),created:function(){this.theme=window.document.documentElement.getAttribute("data-theme"),this.language=this.$i18n.locale}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Row",{staticClass:"setting"},[s("h2",{staticClass:"font-title mb-6"},[t._v(t._s(t.$t("Setting")))]),t._v(" "),s("div",[t._v(t._s(t.$t("Themes")))]),t._v(" "),s("Row",{staticClass:"button-group mb-6"},[s("Col",{staticClass:"button",class:{active:"light"==t.theme},attrs:{span:8},nativeOn:{click:function(e){return t.switchThemes("light")}}},[t._v(t._s(t.$t("Light")))]),t._v(" "),s("Col",{staticClass:"button",class:{active:"dark"==t.theme},attrs:{span:8},nativeOn:{click:function(e){return t.switchThemes("dark")}}},[t._v(t._s(t.$t("Dark")))]),t._v(" "),s("Col",{staticClass:"button",class:{active:"vip"==t.theme},attrs:{span:8},nativeOn:{click:function(e){return t.switchThemes("vip")}}},[t._v(t._s(t.$t("VIP")))])],1),t._v(" "),s("div",[t._v(t._s(t.$t("Language")))]),t._v(" "),s("Row",{staticClass:"button-group mb-6"},[s("Col",{staticClass:"button",class:{active:"zh"==t.language},attrs:{span:12},nativeOn:{click:function(e){return t.switchLanguage("zh")}}},[t._v(t._s(t.$t("Chinese")))]),t._v(" "),s("Col",{staticClass:"button",class:{active:"en"==t.language},attrs:{span:12},nativeOn:{click:function(e){return t.switchLanguage("en")}}},[t._v(t._s(t.$t("English")))])],1),t._v(" "),s("div",{staticClass:"footer-bottom",on:{click:t.logoutAction}},[t._v("\n    "+t._s(t.$t("Logout"))+"\n    "),s("Icon",{attrs:{type:"md-log-out",size:"25"}})],1)],1)},staticRenderFns:[]},u=s("VU/8")(c,l,!1,null,null,null);e.default=u.exports},qCpC:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("n5Qe");e.default={state:{user:{}},mutations:{setUser:function(t,e){t.user=e}},actions:{setUser:function(t,e){(0,t.commit)("setUser",e)},setProfile:function(t,e){t.commit;return n.a.setProfile(e)},signIn:function(t,e){t.commit;return n.a.signIn(e)},signUp:function(t,e){t.commit;return n.a.signUp(e)},logout:function(t){t.commit;return n.a.logout()},findUser:function(t,e){t.commit;return n.a.findUser(e)}}}},sHXI:function(t,e){},tl2Y:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("Dd8w"),i=s.n(n),a=s("lbHh"),r=s.n(a),o=s("NYxO"),c={name:"profile-view",data:function(){return{modal:!1,modalLoading:!1,currentFiled:"",currentValue:""}},computed:i()({},Object(o.c)({user:function(t){return t.sign.user}}),{genderText:function(){switch(this.user.gender){case 0:return this.$t("Unknown");case 1:return this.$t("Male");case 2:return this.$t("Female");default:return this.$t("Not set.")}}}),methods:i()({},Object(o.b)(["setProfile"]),{showModal:function(t){this.currentFiled=t,this.currentValue=this.user[t],this.modal=!0},cancelModal:function(){this.currentFiled="",this.currentValue="",this.modal=!1},saveProfile:function(){var t=this;if("email"===this.currentFiled){if(!/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/.test(this.currentValue))return this.$Message.warning(this.$t("The email format is incorrect")),!1;this.user.email=this.currentValue}"birthday"===this.currentFiled&&(this.user.birthday=""===this.currentValue?"":this.moment(this.currentValue).format("YYYY-MM-DD")),"gender"===this.currentFiled&&(this.user.gender=this.currentValue),"bio"===this.currentFiled&&(this.user.bio=this.currentValue),this.modalLoading=!0;var e={nickname:this.user.nickname,bio:this.user.bio,gender:this.user.gender,email:this.user.email,birthday:this.user.birthday};-1===this.user.avatar.indexOf("data:")&&(e.avatar=this.user.avatar),this.setProfile(e).then(function(t){return t.body}).then(function(e){if(t.modalLoading=!1,0===e.code)return t.$Message.error(e.msg),!1;r.a.set("user",t.user,{expires:7}),t.$Message.success(t.$t("Setup succeeded")),t.modal=!1})}})},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Row",{staticClass:"component"},[s("h2",{staticClass:"font-title mb-6"},[t._v(t._s(t.$t("Profile")))]),t._v(" "),s("Card",{staticClass:"profile-box mb-6"},[s("div",{staticStyle:{"text-align":"center"}},[s("Avatar",{staticClass:"mb-6",attrs:{icon:"ios-person",src:t.user.avatar,size:"large"}}),t._v(" "),s("h3",{staticClass:"nick"},[t._v(t._s(t.user.nickname))]),t._v(" "),s("p",{staticClass:"text-decoration pointer",on:{click:function(e){return t.showModal("bio")}}},[t._v(t._s(t.user.bio?t.user.bio:t.$t("Absolutely empty.")))])],1)]),t._v(" "),s("Card",{staticClass:"profile-box mb-6",attrs:{padding:0,bordered:!1,"dis-hover":""}},[s("CellGroup",[s("Cell",{attrs:{title:t.$t("Username"),label:t.user.username,disabled:""}},[s("template",{slot:"extra"},[s("Icon",{attrs:{type:"ios-contact-outline",size:"18"}})],1)],2),t._v(" "),s("Cell",{attrs:{title:t.$t("Mobile"),label:t.user.mobile?t.user.mobile:t.$t("Not set."),disabled:""}},[s("template",{slot:"extra"},[s("Icon",{attrs:{type:"ios-phone-portrait",size:"18"}})],1)],2),t._v(" "),s("Cell",{attrs:{title:t.$t("Email"),label:t.user.email?t.user.email:t.$t("Not set.")},nativeOn:{click:function(e){return t.showModal("email")}}},[s("template",{slot:"extra"},[s("Icon",{attrs:{type:"ios-mail-outline",size:"18"}})],1)],2),t._v(" "),s("Cell",{attrs:{title:t.$t("Gender"),label:t.genderText},nativeOn:{click:function(e){return t.showModal("gender")}}},[s("template",{slot:"extra"},[s("Icon",{attrs:{type:"ios-transgender",size:"18"}})],1)],2),t._v(" "),s("Cell",{attrs:{title:t.$t("Birthday"),label:t.user.birthday?t.user.birthday:t.$t("Not set.")},nativeOn:{click:function(e){return t.showModal("birthday")}}},[s("template",{slot:"extra"},[s("Icon",{attrs:{type:"ios-calendar-outline",size:"18"}})],1)],2)],1)],1),t._v(" "),s("Modal",{attrs:{title:t.$t("Setting")},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},["bio"==t.currentFiled?s("Input",{staticClass:"text-input",attrs:{size:"large",placeholder:t.$t("Absolutely empty.")},model:{value:t.currentValue,callback:function(e){t.currentValue="string"==typeof e?e.trim():e},expression:"currentValue"}}):t._e(),t._v(" "),"birthday"==t.currentFiled?s("DatePicker",{staticClass:"text-input",staticStyle:{width:"100%"},attrs:{size:"large",type:"date",placeholder:t.$t("Birthday")},model:{value:t.currentValue,callback:function(e){t.currentValue="string"==typeof e?e.trim():e},expression:"currentValue"}}):t._e(),t._v(" "),"email"==t.currentFiled?s("Input",{staticClass:"text-input",attrs:{type:"email",size:"large",placeholder:t.$t("Email")},model:{value:t.currentValue,callback:function(e){t.currentValue="string"==typeof e?e.trim():e},expression:"currentValue"}}):t._e(),t._v(" "),"gender"==t.currentFiled?s("Select",{staticClass:"text-select",staticStyle:{width:"100%"},attrs:{size:"large",placeholder:t.$t("Gender")},model:{value:t.currentValue,callback:function(e){t.currentValue=t._n(e)},expression:"currentValue"}},[s("Option",{key:0,attrs:{value:0}},[t._v(t._s(t.$t("Unknown")))]),t._v(" "),s("Option",{key:1,attrs:{value:1}},[t._v(t._s(t.$t("Male")))]),t._v(" "),s("Option",{key:2,attrs:{value:2}},[t._v(t._s(t.$t("Female")))])],1):t._e(),t._v(" "),s("template",{slot:"footer"},[s("Button",{attrs:{type:"text"},on:{click:t.cancelModal}},[t._v(t._s(t.$t("Cancel")))]),t._v(" "),s("Button",{attrs:{type:"primary",loading:t.modalLoading},on:{click:t.saveProfile}},[t._v(t._s(t.$t("Save")))])],1)],2)],1)},staticRenderFns:[]},u=s("VU/8")(c,l,!1,null,null,null);e.default=u.exports},tyhU:function(t,e){},uslO:function(t,e,s){var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn-bd":"1C9R","./bn-bd.js":"1C9R","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-in":"yJfC","./en-in.js":"yJfC","./en-nz":"dyB6","./en-nz.js":"dyB6","./en-sg":"NYST","./en-sg.js":"NYST","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-mx":"USNP","./es-mx.js":"USNP","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fil":"rMbQ","./fil.js":"rMbQ","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-deva":"VGQH","./gom-deva.js":"VGQH","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./oc-lnc":"KOFO","./oc-lnc.js":"KOFO","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tk":"+WRH","./tk.js":"+WRH","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-mo":"+WA1","./zh-mo.js":"+WA1","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function i(t){return s(a(t))}function a(t){var e=n[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}i.keys=function(){return Object.keys(n)},i.resolve=a,t.exports=i,i.id="uslO"},zamv:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("Dd8w"),i=s.n(n),a=s("NYxO"),r={name:"adderss-view",data:function(){return{search:{friendKey:"",friendLoading:!1,addFriendLoading:!1,result:{}}}},computed:i()({},Object(a.c)({friendsList:function(t){return t.friends.friendsList},friendsPending:function(t){return t.friends.friendsPending}}),{friendsIndexes:function(){var t={A:[],B:[],C:[],D:[],E:[],F:[],G:[],H:[],I:[],J:[],K:[],L:[],M:[],N:[],O:[],P:[],Q:[],R:[],S:[],T:[],U:[],V:[],W:[],X:[],Y:[],Z:[],"#":[]};return this.friendsList.forEach(function(e){t[e.initial]?t[e.initial].push(e):t["#"].push(e)}),t}}),methods:i()({},Object(a.b)(["findUser","friendsAdd","friendsTask"]),{init:function(){this.search={friendKey:"",friendLoading:!1,addFriendLoading:!1,result:{}}},searchFriend:function(){var t=this;if(""===this.search.friendKey)return!1;this.search.friendLoading=!0,this.findUser({account:this.search.friendKey}).then(function(t){return t.body}).then(function(e){if(t.search.friendLoading=!1,0===e.code)return t.$Message.warning(e.msg),!1;t.search.result=e.data})},addFriends:function(){var t=this;this.$set(this.search,"addFriendLoading",!0),this.friendsAdd({account:this.search.result.username}).then(function(t){return t.body}).then(function(e){if(t.$set(t.search,"addFriendLoading",!1),0===e.code)return t.$Message.error(e.msg),!1;t.init(),t.$Message.success(e.msg)})},auditFriends:function(t,e,s){var n=this;this.friendsTask({id:e.id,action:t}).then(function(t){return t.body}).then(function(i){return 0===i.code?(n.$Message.error(i.msg),!1):"reject"===t?(n.friendsPending.splice(s,1),n.$Message.success(n.$t("Setup succeeded")),!1):"pass"===t?(n.friendsList.push(e),n.friendsPending.splice(s,1),n.$Message.success(n.$t("Setup succeeded")),!1):void 0})}}),created:function(){this.init()}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Row",{staticClass:"component"},[s("h2",{staticClass:"font-title mb-6"},[t._v(t._s(t.$t("Friends")))]),t._v(" "),s("Input",{staticClass:"text-input mb-6",attrs:{size:"large",placeholder:t.$t("Search for users...")},on:{"on-enter":t.searchFriend},model:{value:t.search.friendKey,callback:function(e){t.$set(t.search,"friendKey","string"==typeof e?e.trim():e)},expression:"search.friendKey"}},[s("template",{slot:"append"},[s("Button",{attrs:{type:"primary",loading:t.search.friendLoading,icon:"ios-search"},nativeOn:{click:function(e){return t.searchFriend(e)}}})],1)],2),t._v(" "),"{}"!=JSON.stringify(t.search.result)?s("Row",[s("div",{staticClass:"mb-6"},[s("Icon",{attrs:{type:"md-person-add"}}),t._v(" "+t._s(t.$t("Search result")))],1),t._v(" "),s("List",[s("ListItem",{staticClass:"list-item mb-6"},[s("ListItemMeta",[s("template",{slot:"avatar"},[s("Avatar",{attrs:{size:"large",src:t.search.result.avatar,icon:"ios-person"}})],1),t._v(" "),s("template",{slot:"title"},[s("h6",{staticClass:"nick"},[t._v("\n              "+t._s(t.search.result.nickname)+"\n            ")])]),t._v(" "),s("template",{slot:"description"},[s("p",{staticClass:"description"},[t._v(t._s(t.search.result.bio?t.search.result.bio:t.$t("Absolutely empty.")))])])],2),t._v(" "),s("template",{slot:"action"},[s("li",[s("Button",{staticClass:"text-success",attrs:{type:"text",loading:t.search.addFriendLoading},nativeOn:{click:function(e){return t.addFriends(e)}}},[t._v(t._s(t.$t("Add friends")))])],1)])],2)],1)],1):t._e(),t._v(" "),t.friendsPending.length>0?s("Row",[s("div",{staticClass:"mb-6"},[s("Icon",{attrs:{type:"md-notifications-outline"}}),t._v(" "+t._s(t.$t("Notifications")))],1),t._v(" "),s("List",t._l(t.friendsPending,function(e,n){return s("ListItem",{key:n,staticClass:"list-item mb-6"},[s("ListItemMeta",[s("template",{slot:"avatar"},[s("Avatar",{attrs:{size:"large",src:e.avatar,icon:"ios-person"}})],1),t._v(" "),s("template",{slot:"title"},[s("h6",{staticClass:"nick"},[t._v("\n              "+t._s(e.nickname)+"\n            ")])]),t._v(" "),s("template",{slot:"description"},[s("p",{staticClass:"description"},[t._v(t._s(t.search.result.bio?t.search.result.bio:t.$t("Absolutely empty.")))])])],2),t._v(" "),s("template",{slot:"action"},[s("li",[s("a",{staticClass:"text-success",on:{click:function(s){return t.auditFriends("pass",e,n)}}},[t._v(t._s(t.$t("Pass")))])]),t._v(" "),s("li",[s("a",{staticClass:"text-danger",on:{click:function(s){return t.auditFriends("reject",e,n)}}},[t._v(t._s(t.$t("Reject")))])])])],2)}),1)],1):t._e(),t._v(" "),0==t.friendsList.length?s("Row",{staticClass:"none"},[t._v(t._s(t.$t("No friends")))]):t._e(),t._v(" "),t._l(t.friendsIndexes,function(e,n){return e.length>0?s("Row",{key:n},[s("div",{staticClass:"mb-6"},[t._v("A")]),t._v(" "),s("List",t._l(e,function(e,n){return s("ListItem",{key:n,staticClass:"list-item mb-6"},[s("ListItemMeta",[s("template",{slot:"avatar"},[s("Badge",[s("Avatar",{attrs:{size:"large",src:e.avatar,icon:"ios-person"}})],1)],1),t._v(" "),s("template",{slot:"title"},[s("h6",{staticClass:"nick"},[t._v("\n              "+t._s(e.nickname)+"\n            ")])]),t._v(" "),s("template",{slot:"description"},[s("p",{staticClass:"description"},[t._v(t._s(e.bio?e.bio:t.$t("Absolutely empty.")))])])],2)],1)}),1)],1):t._e()})],2)},staticRenderFns:[]};var c=s("VU/8")(r,o,!1,function(t){s("8zg2")},null,null);e.default=c.exports}},["NHnr"]);
//# sourceMappingURL=app.49f538b5afe75330856c.js.map