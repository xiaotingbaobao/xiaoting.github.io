(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-information-information"],{"082c":function(i,t,n){"use strict";n.r(t);var a=n("ebb6"),e=n("c81d");for(var o in e)"default"!==o&&function(i){n.d(t,i,function(){return e[i]})}(o);n("6ac0");var r=n("2877"),s=Object(r["a"])(e["default"],a["a"],a["b"],!1,null,"a80279bc",null);t["default"]=s.exports},"6ac0":function(i,t,n){"use strict";var a=n("d4a1"),e=n.n(a);e.a},a08e:function(i,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{}},methods:{}};t.default=a},a0a9:function(i,t,n){t=i.exports=n("2350")(!1),t.push([i.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.information[data-v-a80279bc]{width:100%}.information .information_margin[data-v-a80279bc]{margin-left:%?30?%;margin-right:%?30?%;width:-webkit-calc(100% - %?60?%);width:calc(100% - %?60?%)}.information .information_margin .name[data-v-a80279bc]{height:%?86?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid #f3f3f3}.information .information_margin .name .name_l[data-v-a80279bc]{color:#333;font-size:%?30?%}.information .information_margin .name .name_r[data-v-a80279bc]{font-size:%?30?%;text-align:right;color:#999}.information .information_margin .email[data-v-a80279bc]{height:%?86?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid #f3f3f3}.information .information_margin .email .email_l[data-v-a80279bc]{color:#333;font-size:%?30?%}.information .information_margin .email .email_r[data-v-a80279bc]{font-size:%?30?%;text-align:right;color:#999}.information .information_margin .photo[data-v-a80279bc]{height:%?178?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid #f3f3f3}.information .information_margin .photo .photo_l[data-v-a80279bc]{color:#333;font-size:%?30?%}.information .information_margin .photo .photo_r[data-v-a80279bc]{width:%?128?%;height:%?128?%;-webkit-border-radius:50%;border-radius:50%}.information .information_margin .photo .photo_r uni-image[data-v-a80279bc]{width:%?128?%;height:%?128?%}',""])},c81d:function(i,t,n){"use strict";n.r(t);var a=n("a08e"),e=n.n(a);for(var o in a)"default"!==o&&function(i){n.d(t,i,function(){return a[i]})}(o);t["default"]=e.a},d4a1:function(i,t,n){var a=n("a0a9");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var e=n("4f06").default;e("a568b9fe",a,!0,{sourceMap:!1,shadowMode:!1})},ebb6:function(i,t,n){"use strict";var a=function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"information"},[n("v-uni-view",{staticClass:"information_margin"},[n("v-uni-view",{staticClass:"name"},[n("v-uni-view",{staticClass:"name_l"},[i._v("姓名")]),n("v-uni-view",{staticClass:"name_r"},[n("v-uni-input",{attrs:{placeholder:"请输入您的名字","placeholder-style":"color:#AAAAAA"}})],1)],1),n("v-uni-view",{staticClass:"email"},[n("v-uni-view",{staticClass:"email_l"},[i._v("邮箱")]),n("v-uni-view",{staticClass:"email_r"},[n("v-uni-input",{attrs:{placeholder:"请输入您的邮箱","placeholder-style":"color:#AAAAAA"}})],1)],1),n("v-uni-view",{staticClass:"photo"},[n("v-uni-view",{staticClass:"photo_l"},[i._v("头像")]),n("v-uni-view",{staticClass:"photo_r"},[n("v-uni-image",{attrs:{src:"../../static/homeimg/photo.png"}})],1)],1),n("v-uni-navigator",{attrs:{"hover-class":"none",url:"../addcompany/addcompany"}},[n("v-uni-view",{staticClass:"xsubmit footer"},[i._v("确定")])],1)],1)],1)],1)},e=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return e})}}]);