webpackJsonp([0],{"7QVd":function(t,e){},"7Ygd":function(t,e){},"9lXE":function(t,e){},"C86/":function(t,e){t.exports={"Sign in":"Sign in","Sign up":"Sign up","Welcome to the Bobo Chat web-client.":"Welcome to the Bobo Chat web-client.","Enter your username":"Enter your username","Enter your password":"Enter your password","Enter your confirm password":"Enter your confirm password","Don't have an account yet":"Don't have an account yet","Already have an account?":"Already have an account?",Chats:"Chats",Friends:"Friends",Profile:"Profile",Setting:"Setting","Search for messages or users...":"Search for messages or users...",Light:"Light",Dark:"Dark",VIP:"VIP",Themes:"Themes",Logout:"Logout",Online:"Online","Enter something...":"Enter something...",Language:"Language",Chinese:"Chinese",English:"English"}},I2RS:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"message-setting",props:{value:Object},methods:{goBack:function(){this.$emit("input",{})}}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Row",{staticClass:"message"},["{}"==JSON.stringify(t.value)?s("Row",{staticClass:"none"},[t._v("BoBo swoole")]):s("Row",[s("div",{staticClass:"header"},[s("div",{staticClass:"back"},[s("Icon",{staticClass:"search-icon",attrs:{type:"ios-arrow-back"},nativeOn:{click:function(e){return t.goBack(e)}}})],1),t._v(" "),s("List",{staticClass:"header-bar"},[s("ListItem",[s("ListItemMeta",[s("template",{slot:"avatar"},[s("Avatar",{staticClass:"avatar",attrs:{size:"large",icon:"ios-person",src:t.value.avatar}})],1),t._v(" "),s("template",{slot:"title"},[s("h6",{staticClass:"nick"},[t._v("\n                "+t._s(t.value.nick)+"\n              ")])]),t._v(" "),s("template",{slot:"description"},[s("p",{staticClass:"description"},[s("Badge",{attrs:{status:t.value.online?"success":"default"}}),t._v(t._s(t.$t("Online")))],1)])],2),t._v(" "),s("template",{slot:"action"},[s("li",[s("Icon",{staticClass:"search-icon",attrs:{type:"ios-search"}})],1)])],2)],1)],1),t._v(" "),s("div",{staticClass:"content"},[t._v("content")]),t._v(" "),s("div",{staticClass:"footer"},[s("div",{staticClass:"textarea-box"},[s("Input",{attrs:{size:"large",placeholder:t.$t("Enter something...")}},[s("span",{attrs:{slot:"append"},slot:"append"},[s("Icon",{attrs:{type:"md-happy",size:"25"}})],1),t._v(" "),s("span",{attrs:{slot:"append"},slot:"append"},[s("Icon",{attrs:{type:"ios-camera",size:"25"}})],1)])],1),t._v(" "),s("div",{staticClass:"send-box"},[s("Button",{attrs:{size:"large",icon:"ios-paper-plane",type:"primary",shape:"circle"}})],1)])])],1)},staticRenderFns:[]};var n=s("VU/8")(i,a,!1,function(t){s("XU81")},null,null);e.default=n.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},n=s("VU/8")({name:"App"},a,!1,null,null,null).exports,o=s("/ocq"),r={data:function(){return{actvieMenu:"message",loadSettingComponent:"message-setting",currentUser:{},initMessages:{items:[{id:1,dot:!0,online:!0,nick:"BoBo",avatar:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2070453827,1163403148&fm=26&gp=0.jpg",datetime:"11:10 pm",description:"This is description"},{id:2,dot:!1,online:!1,nick:"Louio",avatar:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1373560079,871367259&fm=26&gp=0.jpg",datetime:"05:10 am",description:"This is description, this is description."},{id:3,dot:!1,online:!0,nick:"Air jordan",avatar:"",datetime:"05:10 am",description:"This is description, this is description."},{id:4,dot:!1,online:!1,nick:"Aaron",avatar:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2271338977,1611087163&fm=26&gp=0.jpg",datetime:"05:10 am",description:"This is description, this is description."},{id:5,dot:!1,online:!1,nick:"Bart",avatar:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3157220405,301754405&fm=11&gp=0.jpg",datetime:"05:10 am",description:"This is description, this is description."},{id:6,dot:!1,online:!1,nick:"Caleb",avatar:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2438388894,880471568&fm=11&gp=0.jpg",datetime:"05:10 am",description:"This is description, this is description."},{id:7,dot:!1,online:!1,nick:"Dave",avatar:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=939193375,2877147297&fm=11&gp=0.jpg",datetime:"05:10 am",description:"This is description, this is description."},{id:8,dot:!1,online:!1,nick:"Egbert",avatar:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1101467379,169077944&fm=11&gp=0.jpg",datetime:"05:10 am",description:"This is description, this is description."},{id:9,dot:!1,online:!1,nick:"Fitzgerald",avatar:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=640295866,1857432489&fm=11&gp=0.jpg",datetime:"05:10 am",description:"This is description, this is description."},{id:10,dot:!1,online:!1,nick:"Gregary",avatar:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3600877798,4182679885&fm=11&gp=0.jpg",datetime:"05:10 am",description:"This is description, this is description."}]}}},computed:{activeMenuData:{get:function(){return this.actvieMenu},set:function(t){this.actvieMenu=t}},settingComponentData:function(){var t={};switch(this.actvieMenu){case"message":t=this.initMessages}return t}},components:{"message-view":s("Oym+").default,"address-view":s("zamv").default,"profile-view":s("tl2Y").default,"setting-view":s("q6Ot").default,"message-setting":s("I2RS").default},methods:{swtichMenu:function(t){this.activeMenuData=t}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Row",{staticClass:"home"},[s("Row",{staticClass:"left-col"},[s("div",{staticClass:"bar-icon logo"},[t._v("\n      Bo\n    ")]),t._v(" "),s("div",{staticClass:"bar-icon",class:{active:"message"==t.actvieMenu},on:{click:function(e){return t.swtichMenu("message")}}},[s("Icon",{attrs:{type:"ios-chatbubbles"}})],1),t._v(" "),s("div",{staticClass:"bar-icon",class:{active:"address"==t.actvieMenu},on:{click:function(e){return t.swtichMenu("address")}}},[s("Icon",{attrs:{type:"md-list-box"}})],1),t._v(" "),s("div",{staticClass:"bar-icon",class:{active:"profile"==t.actvieMenu},on:{click:function(e){return t.swtichMenu("profile")}}},[s("Icon",{attrs:{type:"md-person"}})],1),t._v(" "),s("div",{staticClass:"bar-icon",class:{active:"setting"==t.actvieMenu},on:{click:function(e){return t.swtichMenu("setting")}}},[s("Icon",{attrs:{type:"md-settings"}})],1)]),t._v(" "),s("Row",{staticClass:"center-col"},[s(t.actvieMenu+"-view",{tag:"component",attrs:{options:t.settingComponentData},model:{value:t.currentUser,callback:function(e){t.currentUser=e},expression:"currentUser"}})],1),t._v(" "),s("Row",{staticClass:"right-col",class:{"right-col-active":"{}"!=JSON.stringify(t.currentUser)}},[s(t.loadSettingComponent,{tag:"component",model:{value:t.currentUser,callback:function(e){t.currentUser=e},expression:"currentUser"}})],1)],1)},staticRenderFns:[]};var l=s("VU/8")(r,c,!1,function(t){s("sqEs")},null,null).exports,u=s("sgAt"),p={data:function(){return{init:{username:"",password:""},loading:!1,validCodeIsShow:!1}},components:{Vcode:s.n(u).a},methods:{showValideCodePanel:function(){this.validCodeIsShow=!0},login:function(){var t=this;this.loading=!0,setTimeout(function(){t.$router.push("/")},1e3)},success:function(){this.validCodeIsShow=!1,this.login()},close:function(){this.validCodeIsShow=!1}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Row",{staticClass:"login-card"},[s("h1",{staticClass:"font-title"},[t._v(t._s(t.$t("Sign in")))]),t._v(" "),s("p",[t._v(t._s(t.$t("Welcome to the Bobo Chat web-client.")))]),t._v(" "),s("Input",{staticClass:"text-input",attrs:{size:"large",placeholder:t.$t("Enter your username")},model:{value:t.init.username,callback:function(e){t.$set(t.init,"username",e)},expression:"init.username"}}),t._v(" "),s("Input",{staticClass:"text-input",attrs:{size:"large",placeholder:t.$t("Enter your password")},model:{value:t.init.password,callback:function(e){t.$set(t.init,"password",e)},expression:"init.password"}}),t._v(" "),s("Button",{attrs:{size:"large",type:"primary",loading:t.loading,long:""},on:{click:t.showValideCodePanel}},[t._v(t._s(t.$t("Sign in")))]),t._v(" "),s("p"),t._v(" "),s("p",[t._v(t._s(t.$t("Don't have an account yet"))+" "),s("router-link",{attrs:{to:"/register"}},[t._v(t._s(t.$t("Sign up")))])],1),t._v(" "),s("Vcode",{attrs:{show:t.validCodeIsShow},on:{success:t.success,close:t.close}})],1)},staticRenderFns:[]};var v=s("VU/8")(p,d,!1,function(t){s("q8Eg")},null,null).exports,m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Row",{staticClass:"login-card"},[s("h1",{staticClass:"font-title"},[t._v(t._s(t.$t("Sign up")))]),t._v(" "),s("p",[t._v(t._s(t.$t("Welcome to the Bobo Chat web-client.")))]),t._v(" "),s("Input",{staticClass:"text-input",attrs:{size:"large",placeholder:t.$t("Enter your username")}}),t._v(" "),s("Input",{staticClass:"text-input",attrs:{size:"large",type:"password",placeholder:t.$t("Enter your password")}}),t._v(" "),s("Input",{staticClass:"text-input",attrs:{size:"large",type:"password",placeholder:t.$t("Enter your confirm password")}}),t._v(" "),s("Button",{attrs:{size:"large",type:"primary",long:""}},[t._v(t._s(t.$t("Sign up")))]),t._v(" "),s("p"),t._v(" "),s("p",[t._v(t._s(t.$t("Already have an account?"))+" "),s("router-link",{attrs:{to:"/login"}},[t._v(t._s(t.$t("Sign in")))])],1)],1)},staticRenderFns:[]};var h=s("VU/8")({},m,!1,function(t){s("fVwo")},null,null).exports;i.default.use(o.a);var g=new o.a({routes:[{path:"/",name:"Index",component:l},{path:"/login",name:"Login",component:v},{path:"/register",name:"Register",component:h}]}),_=s("b3L9"),f=s.n(_),C=(s("7QVd"),s("TXmL"));i.default.config.productionTip=!1,i.default.use(f.a),i.default.use(C.a);var b=new C.a({locale:"en",messages:{zh:s("pdRm"),en:s("C86/")}});new i.default({el:"#app",router:g,i18n:b,components:{App:n},template:"<App/>"})},"Oym+":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"message-view",props:{value:Object,options:Object},methods:{changeUser:function(t){this.$emit("input",t)}}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Row",{staticClass:"component"},[s("h2",{staticClass:"font-title mb-6"},[t._v(t._s(t.$t("Chats")))]),t._v(" "),s("Input",{staticClass:"text-input mb-6",attrs:{size:"large",placeholder:t.$t("Search for messages or users..."),suffix:"ios-search"}}),t._v(" "),s("List",t._l(t.options.items,function(e,i){return s("ListItem",{key:i,staticClass:"list-item mb-6",nativeOn:{click:function(s){return t.changeUser(e)}}},[s("ListItemMeta",[s("template",{slot:"avatar"},[s("Badge",{attrs:{dot:e.dot}},[s("Avatar",{attrs:{size:"large",icon:"ios-person",src:e.avatar}})],1)],1),t._v(" "),s("template",{slot:"title"},[s("h6",{staticClass:"nick"},[t._v("\n            "+t._s(e.nick)+"\n            "),s("small",[t._v(t._s(e.datetime))])])]),t._v(" "),s("template",{slot:"description"},[s("p",{staticClass:"description"},[t._v(t._s(e.description))])])],2)],1)}),1)],1)},staticRenderFns:[]};var n=s("VU/8")(i,a,!1,function(t){s("7Ygd")},null,null);e.default=n.exports},XU81:function(t,e){},fVwo:function(t,e){},pdRm:function(t,e){t.exports={"Sign in":"登入","Sign up":"注册","Welcome to the Bobo Chat web-client.":"欢迎使用Bobo聊天客户端","Enter your username":"用户名","Enter your password":"密码","Enter your confirm password":"确认密码","Don't have an account yet":"还没有账户？","Already have an account?":"已经拥有账户？",Chats:"消息",Friends:"通讯录",Profile:"个人",Setting:"设置","Search for messages or users...":"搜索消息或者用户",Light:"普通",Dark:"深色",VIP:"VIP",Themes:"主题",Logout:"登出",Online:"在线","Enter something...":"输入点什么...",Language:"语言",Chinese:"中文",English:"英文"}},q6Ot:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"setting-view",data:function(){return{theme:"",language:"en"}},methods:{switchThemes:function(t){this.theme=t,window.document.documentElement.setAttribute("data-theme",t)},switchLanguage:function(t){this.language=t,this.$i18n.locale=t}},created:function(){this.theme=window.document.documentElement.getAttribute("data-theme")}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Row",{staticClass:"setting"},[s("h2",{staticClass:"font-title mb-6"},[t._v(t._s(t.$t("Setting")))]),t._v(" "),s("div",[t._v(t._s(t.$t("Themes")))]),t._v(" "),s("Row",{staticClass:"button-group mb-6"},[s("Col",{staticClass:"button",class:{active:"light"==t.theme},attrs:{span:8},nativeOn:{click:function(e){return t.switchThemes("light")}}},[t._v(t._s(t.$t("Light")))]),t._v(" "),s("Col",{staticClass:"button",class:{active:"dark"==t.theme},attrs:{span:8},nativeOn:{click:function(e){return t.switchThemes("dark")}}},[t._v(t._s(t.$t("Dark")))]),t._v(" "),s("Col",{staticClass:"button",class:{active:"vip"==t.theme},attrs:{span:8},nativeOn:{click:function(e){return t.switchThemes("vip")}}},[t._v(t._s(t.$t("VIP")))])],1),t._v(" "),s("div",[t._v(t._s(t.$t("Language")))]),t._v(" "),s("Row",{staticClass:"button-group mb-6"},[s("Col",{staticClass:"button",class:{active:"zh"==t.language},attrs:{span:12},nativeOn:{click:function(e){return t.switchLanguage("zh")}}},[t._v(t._s(t.$t("Chinese")))]),t._v(" "),s("Col",{staticClass:"button",class:{active:"en"==t.language},attrs:{span:12},nativeOn:{click:function(e){return t.switchLanguage("en")}}},[t._v(t._s(t.$t("English")))])],1)],1)},staticRenderFns:[]},n=s("VU/8")(i,a,!1,null,null,null);e.default=n.exports},q8Eg:function(t,e){},sqEs:function(t,e){},tl2Y:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Row",{staticClass:"component"},[s("h2",{staticClass:"font-title mb-6"},[t._v(t._s(t.$t("Profile")))]),t._v(" "),s("Card",{staticClass:"profile-box mb-6"},[s("div",{staticStyle:{"text-align":"center"}},[s("Avatar",{staticClass:"mb-6",attrs:{icon:"ios-person",size:"large"}}),t._v(" "),s("h3",{staticClass:"nick"},[t._v("Gurudin")]),t._v(" "),s("p",[t._v("Bootstrap is an open source toolkit for developing web with HTML.")])],1)]),t._v(" "),s("div",{staticClass:"footer-bottom"},[t._v("\n    "+t._s(t.$t("Logout"))+"\n    "),s("Icon",{attrs:{type:"md-log-out",size:"25"}})],1)],1)},staticRenderFns:[]},a=s("VU/8")({},i,!1,null,null,null);e.default=a.exports},zamv:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Row",{staticClass:"component"},[s("h2",{staticClass:"font-title mb-6"},[t._v(t._s(t.$t("Friends")))]),t._v(" "),s("Input",{staticClass:"text-input mb-6",attrs:{size:"large",placeholder:t.$t("Search for messages or users..."),suffix:"ios-search"}}),t._v(" "),s("Row",[s("div",{staticClass:"mb-6"},[t._v("A")]),t._v(" "),s("List",[s("ListItem",{staticClass:"list-item mb-6"},[s("ListItemMeta",[s("template",{slot:"avatar"},[s("Badge",{attrs:{dot:""}},[s("Avatar",{attrs:{size:"large",icon:"ios-person"}})],1)],1),t._v(" "),s("template",{slot:"title"},[s("h6",{staticClass:"nick"},[t._v("\n              Bootstrap Themes\n            ")])]),t._v(" "),s("template",{slot:"description"},[s("p",{staticClass:"description"},[t._v("This is description, this is description.")])])],2)],1),t._v(" "),s("ListItem",{staticClass:"list-item mb-6"},[s("ListItemMeta",[s("template",{slot:"avatar"},[s("Badge",[s("Avatar",{staticStyle:{"background-color":"#ff9900"},attrs:{size:"large"}},[t._v("U")])],1)],1),t._v(" "),s("template",{slot:"title"},[s("h6",{staticClass:"nick"},[t._v("\n              Bootstrap Themes\n            ")])]),t._v(" "),s("template",{slot:"description"},[s("p",{staticClass:"description"},[t._v("This is description, this is description.")])])],2)],1)],1)],1),t._v(" "),s("Row",[s("div",{staticClass:"mb-6"},[t._v("B")]),t._v(" "),s("List",[s("ListItem",{staticClass:"list-item mb-6"},[s("ListItemMeta",[s("template",{slot:"avatar"},[s("Badge",{attrs:{dot:""}},[s("Avatar",{attrs:{size:"large",icon:"ios-person"}})],1)],1),t._v(" "),s("template",{slot:"title"},[s("h6",{staticClass:"nick"},[t._v("\n              Bootstrap Themes\n            ")])]),t._v(" "),s("template",{slot:"description"},[s("p",{staticClass:"description"},[t._v("This is description, this is description.")])])],2)],1),t._v(" "),s("ListItem",{staticClass:"list-item mb-6"},[s("ListItemMeta",[s("template",{slot:"avatar"},[s("Badge",[s("Avatar",{staticStyle:{"background-color":"#ff9900"},attrs:{size:"large"}},[t._v("U")])],1)],1),t._v(" "),s("template",{slot:"title"},[s("h6",{staticClass:"nick"},[t._v("\n              Bootstrap Themes\n            ")])]),t._v(" "),s("template",{slot:"description"},[s("p",{staticClass:"description"},[t._v("This is description, this is description.")])])],2)],1),t._v(" "),s("ListItem",{staticClass:"list-item mb-6"},[s("ListItemMeta",[s("template",{slot:"avatar"},[s("Badge",[s("Avatar",{attrs:{src:"https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar",size:"large",icon:"ios-person"}})],1)],1),t._v(" "),s("template",{slot:"title"},[s("h6",{staticClass:"nick"},[t._v("\n              Bootstrap Themes\n            ")])]),t._v(" "),s("template",{slot:"description"},[s("p",{staticClass:"description"},[t._v("This is description, this is description.")])])],2)],1)],1)],1)],1)},staticRenderFns:[]};var a=s("VU/8")({name:"adderss-view"},i,!1,function(t){s("9lXE")},null,null);e.default=a.exports}},["NHnr"]);
//# sourceMappingURL=app.047df9c0e5f401d02172.js.map