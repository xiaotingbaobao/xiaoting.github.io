(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-management-finance-bookkeeping-addbook-addcdname-changecdname-changecdname"],{"029d":function(n,e,a){"use strict";a.r(e);var t=a("8630"),i=a.n(t);for(var c in t)"default"!==c&&function(n){a.d(e,n,(function(){return t[n]}))}(c);e["default"]=i.a},4467:function(n,e,a){var t=a("24fb");e=t(!1),e.push([n.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-3e1cf9ec]{background-color:#fafafa}.main[data-v-3e1cf9ec]{width:100%;height:%?110?%;line-height:%?110?%;background-color:#fff}.main uni-input[data-v-3e1cf9ec]{width:calc(100% - %?60?%);margin:0 %?30?%;height:%?110?%;line-height:%?110?%;font-size:%?30?%;color:#333}body.?%PAGE?%[data-v-3e1cf9ec]{background-color:#fafafa}',""]),n.exports=e},7284:function(n,e,a){"use strict";var t=a("93a4"),i=a.n(t);i.a},8630:function(n,e,a){"use strict";var t=a("ee27");a("ac1f"),a("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i,c=t(a("ed78")),r={components:{pageHeadGit:c.default},data:function(){return{name:"",iscompany:"",changeid:""}},onLoad:function(n){i=this,i.changeid=n.id,i.name=n.name,i.getuser((function(n){i.userinfo=n.data,i.userid=i.userinfo.userinfo.id,i.iscompany=i.userinfo.userinfo.role.split("|")[1]}))},methods:{addnamefunc:function(){i.name?i.post("api/finance/add_bank",{company_id:i.iscompany,bank:i.name,id:i.changeid},(function(n){if(1===n.code)console.log(n),uni.navigateBack();else{var e=n.msg.split("(",2);i.echo(e[0])}})):i.echo("账户类型不能为空~")}}};e.default=r},"93a4":function(n,e,a){var t=a("4467");"string"===typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);var i=a("4f06").default;i("ada41046",t,!0,{sourceMap:!1,shadowMode:!1})},c214:function(n,e,a){"use strict";a.r(e);var t=a("e1a9"),i=a("029d");for(var c in i)"default"!==c&&function(n){a.d(e,n,(function(){return i[n]}))}(c);a("7284");var r,o=a("f0c5"),d=Object(o["a"])(i["default"],t["b"],t["c"],!1,null,"3e1cf9ec",null,!1,t["a"],r);e["default"]=d.exports},e1a9:function(n,e,a){"use strict";var t={pageHeadGit:a("ed78").default},i=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("v-uni-view",[a("page-head-git",{attrs:{title:"修改账户名称"},on:{back:function(e){arguments[0]=e=n.$handleEvent(e),n.backfee.apply(void 0,arguments)},send:function(e){arguments[0]=e=n.$handleEvent(e),n.addnamefunc.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"main"},[a("v-uni-input",{staticClass:"input",attrs:{maxlength:"8",type:"text",placeholder:"最多8个字","placeholder-style":"color:#999;font-size:30upx;"},model:{value:n.name,callback:function(e){n.name=e},expression:"name"}})],1)],1)},c=[];a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return c})),a.d(e,"a",(function(){return t}))}}]);