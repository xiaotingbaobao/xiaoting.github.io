(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-setting-editinfo"],{"045e":function(e,t,n){"use strict";n.r(t);var a=n("dbba"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},"124e":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 项目场景相关 */.u-code-wrap[data-v-3f7be65c]{width:0;height:0;position:fixed;z-index:-1}',""]),e.exports=t},"1ceb":function(e,t,n){var a=n("124e");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("92203110",a,!0,{sourceMap:!1,shadowMode:!1})},"56e9":function(e,t,n){"use strict";var a=n("f66e"),i=n.n(a);i.a},"6dbc":function(e,t,n){"use strict";var a=n("4ea4");n("c975"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var i=a(n("1da1")),r={onLoad:function(){this.form={avatar:-1!=this.vuex_user.avatar.indexOf("base64")?"":this.vuex_user.avatar,username:this.vuex_user.username||"",nickname:this.vuex_user.nickname||"",bio:this.vuex_user.bio||"",email:this.vuex_user.email||"",eCode:"",mobile:this.vuex_user.mobile||"",mCode:""},this.avatar=this.vuex_user.avatar||""},onShow:function(){uni.$off("uAvatarCropper",this.tailor)},onReady:function(){this.$refs.uForm.setRules(this.rules)},data:function(){var e=this;return{labelPosition:"left",border:!1,codeTips:"",errorType:["message"],avatar:"",form:{avatar:"",username:"",nickname:"",bio:"",email:"",eCode:"",mobile:"",mCode:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:["change","blur"]}],nickname:[{required:!0,message:"请输入昵称",trigger:["change","blur"]}],email:[{required:!1,message:"请输入邮箱",trigger:["change","blur"]}],mobile:[{required:!1,message:"请输入手机号码",trigger:["change","blur"]}],mCode:[{validator:function(t,n,a){return e.vuex_user.mobile==e.form.mobile||!!n},message:"请填写短信验证码",trigger:["change","blur"]}]}}},methods:{codeChange:function(e){this.codeTips=e},getCode:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.$refs.uCode.canGetCode){e.next=14;break}if(n=!1,"email"!=t){e.next=8;break}return e.next=5,this.$api.getEmsSend({email:this.form.email,event:"changeemail"});case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,this.$api.getSmsSend({mobile:this.form.mobile,event:"changemobile"});case 10:n=e.sent;case 11:this.$u.toast(n.msg),e.next=15;break;case 14:this.$u.toast("倒计时结束后再发送");case 15:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),selectImage:function(){uni.$once("uAvatarCropper",this.tailor),this.$u.route({url:"/uview-ui/components/u-avatar-cropper/u-avatar-cropper",params:{destWidth:300,rectWidth:200,fileType:"jpg"}})},tailor:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$api.goUpload({filePath:t});case 3:n=e.sent,this.form.avatar=n.data.url,this.avatar=t,e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),this.$u.toast("上传失败！");case 12:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(t){return e.apply(this,arguments)}return t}(),submit:function(){var e=this;this.$refs.uForm.validate(function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(n){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n){t.next=18;break}return t.next=3,e.$api.getUserProfile(e.form);case 3:if(a=t.sent,a.code){t.next=7;break}return e.$u.toast(a.msg),t.abrupt("return");case 7:return t.next=9,e.$api.getUserIndex({id:e.vuex_user.id});case 9:if(i=t.sent,i.code){t.next=13;break}return e.$u.toast(a.msg),t.abrupt("return");case 13:e.$u.vuex("vuex_user",i.data.user),e.$u.vuex("vuex_isAdmin",i.data.isAdmin),e.$Router.back(1),t.next=19;break;case 18:case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}};t.default=r},"6f73":function(e,t,n){"use strict";var a=n("1ceb"),i=n.n(a);i.a},"8be7":function(e,t,n){"use strict";n.r(t);var a=n("6dbc"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},"98fa":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={faNavbar:n("4cfc").default,uForm:n("8e67").default,uFormItem:n("797b").default,uIcon:n("2e9b").default,uInput:n("28f7").default,uButton:n("0162").default,uVerificationCode:n("e51c").default,faTabbar:n("1a3a").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{},[n("fa-navbar",{attrs:{title:"修改资料"}}),n("v-uni-view",{staticClass:"u-p-30"},[n("u-form",{ref:"uForm",attrs:{model:e.form}},[n("u-form-item",{attrs:{"label-position":e.labelPosition,label:"修改头像：",prop:"avatar","label-width":"180"}},[e.avatar?n("v-uni-view",{staticClass:"u-list-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectImage.apply(void 0,arguments)}}},[n("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:e.avatar,mode:"aspectFit"}})],1):e._e(),e.avatar?e._e():n("v-uni-view",{staticClass:"u-list-item u-add-wrap",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectImage.apply(void 0,arguments)}}},[n("u-icon",{attrs:{name:"plus"}}),n("v-uni-view",{staticClass:"u-add-tips"},[e._v("选择图片")])],1)],1),n("u-form-item",{attrs:{label:"用户名：","label-width":"180",prop:"username"}},[n("u-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),n("u-form-item",{attrs:{label:"昵称：","label-width":"180",prop:"nickname"}},[n("u-input",{attrs:{placeholder:"请输入昵称"},model:{value:e.form.nickname,callback:function(t){e.$set(e.form,"nickname",t)},expression:"form.nickname"}})],1),n("u-form-item",{attrs:{label:"简介：","label-width":"180",prop:"bio"}},[n("u-input",{attrs:{placeholder:"请输入个人介绍"},model:{value:e.form.bio,callback:function(t){e.$set(e.form,"bio",t)},expression:"form.bio"}})],1),n("u-form-item",{attrs:{label:"邮箱：","label-width":"180",prop:"email"}},[n("u-input",{attrs:{placeholder:"请输入邮箱"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._e(),n("u-form-item",{attrs:{rightIconStyle:{color:"#888",fontSize:"32rpx"},"label-position":e.labelPosition,label:"手机号码：",prop:"mobile","label-width":"180"}},[n("u-input",{attrs:{border:e.border,placeholder:"请输入手机号",type:"number"},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1),e.form.mobile?n("u-form-item",{attrs:{"label-position":e.labelPosition,label:"短信验证码：",prop:"mCode","label-width":"180"}},[n("u-input",{attrs:{border:e.border,placeholder:"请输入短信验证码",type:"text"},model:{value:e.form.mCode,callback:function(t){e.$set(e.form,"mCode",t)},expression:"form.mCode"}}),n("u-button",{attrs:{slot:"right","hover-class":"none",type:"success","custom-style":{backgroundColor:e.theme.bgColor,color:e.theme.color},size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getCode("mobile")}},slot:"right"},[e._v(e._s(e.codeTips))])],1):e._e()],1),n("v-uni-view",{staticClass:"u-p-30 u-m-t-30"},[n("u-button",{attrs:{"hover-class":"none",type:"primary","custom-style":{backgroundColor:e.theme.bgColor,color:e.theme.color},shape:"circle"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v("提交")])],1),n("u-verification-code",{ref:"uCode",attrs:{seconds:"60"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.codeChange.apply(void 0,arguments)}}})],1),n("fa-tabbar")],1)},r=[]},"9b38":function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"u-code-wrap"})},r=[]},"9c3a":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 项目场景相关 */.u-add-wrap[data-v-176ba434]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;color:#606266;font-size:%?28?%}.u-list-item[data-v-176ba434]{width:%?200?%;height:%?200?%;overflow:hidden;margin:%?10?%;background:#f4f5f6;position:relative;border-radius:%?10?%;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.u-add-tips[data-v-176ba434]{margin-top:%?20?%;line-height:%?40?%}',""]),e.exports=t},d1f0:function(e,t,n){"use strict";n.r(t);var a=n("98fa"),i=n("8be7");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("56e9");var o,s=n("f0c5"),u=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"176ba434",null,!1,a["a"],o);t["default"]=u.exports},dbba:function(e,t,n){"use strict";n("a9e3"),n("ac1f"),n("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"u-verification-code",props:{seconds:{type:[String,Number],default:60},startText:{type:String,default:"获取验证码"},changeText:{type:String,default:"X秒重新获取"},endText:{type:String,default:"重新获取"},keepRunning:{type:Boolean,default:!1},uniqueKey:{type:String,default:""}},data:function(){return{secNum:this.seconds,timer:null,canGetCode:!0}},mounted:function(){this.checkKeepRunning()},watch:{seconds:{immediate:!0,handler:function(e){this.secNum=e}}},methods:{checkKeepRunning:function(){var e=Number(uni.getStorageSync(this.uniqueKey+"_$uCountDownTimestamp"));if(!e)return this.changeEvent(this.startText);var t=Math.floor(+new Date/1e3);this.keepRunning&&e&&e>t?(this.secNum=e-t,uni.removeStorageSync(this.uniqueKey+"_$uCountDownTimestamp"),this.start()):this.changeEvent(this.startText)},start:function(){var e=this;this.timer&&(clearInterval(this.timer),this.timer=null),this.$emit("start"),this.canGetCode=!1,this.changeEvent(this.changeText.replace(/x|X/,this.secNum)),this.setTimeToStorage(),this.timer=setInterval((function(){--e.secNum?e.changeEvent(e.changeText.replace(/x|X/,e.secNum)):(clearInterval(e.timer),e.timer=null,e.changeEvent(e.endText),e.secNum=e.seconds,e.$emit("end"),e.canGetCode=!0)}),1e3)},reset:function(){this.canGetCode=!0,clearInterval(this.timer),this.secNum=this.seconds,this.changeEvent(this.endText)},changeEvent:function(e){this.$emit("change",e)},setTimeToStorage:function(){if(this.keepRunning&&this.timer&&this.secNum>0&&this.secNum<=this.seconds){var e=Math.floor(+new Date/1e3);uni.setStorage({key:this.uniqueKey+"_$uCountDownTimestamp",data:e+Number(this.secNum)})}}},beforeDestroy:function(){this.setTimeToStorage(),clearTimeout(this.timer),this.timer=null}};t.default=a},e51c:function(e,t,n){"use strict";n.r(t);var a=n("9b38"),i=n("045e");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("6f73");var o,s=n("f0c5"),u=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"3f7be65c",null,!1,a["a"],o);t["default"]=u.exports},f66e:function(e,t,n){var a=n("9c3a");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("0fa47f18",a,!0,{sourceMap:!1,shadowMode:!1})}}]);