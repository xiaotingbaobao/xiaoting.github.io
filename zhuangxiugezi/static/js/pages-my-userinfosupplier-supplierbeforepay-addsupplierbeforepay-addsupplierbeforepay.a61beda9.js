(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-userinfosupplier-supplierbeforepay-addsupplierbeforepay-addsupplierbeforepay"],{"36ba":function(t,e,o){"use strict";o.r(e);var i=o("3a2d"),n=o("fae7");for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);o("b939");var a,s=o("f0c5"),c=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"09710106",null,!1,i["a"],a);e["default"]=c.exports},"3a2d":function(t,e,o){"use strict";var i={pageHeadBack:o("9c7e").default},n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",[o("page-head-back",{attrs:{title:"新增缴费"}}),o("v-uni-view",{staticClass:"pay_footer"},[o("v-uni-view",{staticClass:"xmargin"},[o("v-uni-view",{staticClass:"footer_topli"},[o("v-uni-view",{staticClass:"footer_topli_title"},[t._v("缴费金额：")]),o("v-uni-view",{staticClass:"footer_topli_r"},[o("v-uni-input",{attrs:{type:"number",maxlength:"8",placeholder:"请输入缴费金额"},model:{value:t.postData["amount_real"],callback:function(e){t.$set(t.postData,"amount_real",e)},expression:"postData['amount_real']"}}),t._v("元")],1)],1),o("v-uni-view",{staticClass:"con_onec_foo"},[o("v-uni-view",{staticClass:"con_onecon_title"},[t._v("支付方式：")]),o("v-uni-view",{staticClass:"con_onecon_input"},[o("v-uni-view",{staticClass:"topli_r"},[o("v-uni-picker",{attrs:{value:t.product,range:t.products},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindProductChange.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.productstext))])],1)],1),o("v-uni-view",{staticClass:"iconfont icondown"})],1)],1),o("v-uni-view",{staticClass:"contract_title"},[t._v("上传凭证")]),o("v-uni-view",{staticClass:"contract_photomargin"},[o("v-uni-view",{staticClass:"uploadimg"},[o("v-uni-view",{staticClass:"uploadimgmargin"},[t._l(t.imageList,(function(e,i){return[o("v-uni-view",{key:i+"_0",staticClass:"uploadimg_li"},[o("v-uni-image",{staticClass:"uni-uploader__img",attrs:{"lazy-load":!0,mode:"aspectFill",src:e,"data-src":e},on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.previewImage(e)}}}),o("v-uni-view",{staticClass:"uploadimg_lidelete",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.imagedeleteclick(i)}}},[o("v-uni-image",{attrs:{src:"/static/img/delete.png"}})],1)],1)]})),o("v-uni-view",{staticClass:"imgicon"},[o("v-uni-view",{staticClass:"iconfont iconplus",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseImage.apply(void 0,arguments)}}})],1),o("v-uni-view",{staticClass:"uploadimgmargintip"},[t._v(t._s(t.imageList.length)+"/3")])],2)],1)],1),o("v-uni-view",{staticClass:"remarks"},[o("v-uni-view",{staticClass:"remarks_top"},[t._v("备注（选填）:")]),o("v-uni-view",{staticClass:"remarks_text"},[o("v-uni-textarea",{staticClass:"remarks_textarea",model:{value:t.postData["remarks"],callback:function(e){t.$set(t.postData,"remarks",e)},expression:"postData['remarks']"}})],1)],1)],1)],1),o("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.send.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"xfixed"},[t._v("确定")])],1)],1)},r=[];o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return r})),o.d(e,"a",(function(){return i}))},"8b584":function(t,e,o){var i=o("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.pay_footer[data-v-09710106]{width:100%}.pay_footer .footer_title[data-v-09710106]{border-bottom:1px solid #f1f1f1;height:%?88?%;line-height:%?88?%;text-align:center;color:#333;font-size:%?30?%;font-weight:550}.pay_footer .footer_topli[data-v-09710106]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:1px solid #f1f1f1;height:%?86?%}.pay_footer .footer_topli .footer_topli_title[data-v-09710106]{font-size:%?30?%;color:#333;width:%?180?%}.pay_footer .footer_topli .footer_topli_r[data-v-09710106]{width:%?510?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?30?%;color:#666}.pay_footer .footer_topli .footer_topli_r uni-input[data-v-09710106]{width:%?470?%;font-size:%?30?%;color:#666}.pay_footer .footer_topli .footer_custnum[data-v-09710106]{width:%?500?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?30?%;color:#333}.pay_footer .footer_topli .footer_custnum uni-input[data-v-09710106]{width:%?450?%}.pay_footer .footer_topli .footer_countnum[data-v-09710106]{width:%?500?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?30?%;color:#333}.pay_footer .footer_topli .footer_countnum uni-input[data-v-09710106]{width:%?450?%}.pay_footer .con_onec_foo[data-v-09710106]{width:100%;height:%?86?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:1px solid #f1f1f1}.pay_footer .con_onec_foo .con_onecon_title[data-v-09710106]{font-size:%?30?%;color:#333;width:%?180?%}.pay_footer .con_onec_foo .con_onecon_input[data-v-09710106]{width:%?510?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.pay_footer .con_onec_foo .con_onecon_input .topli_r[data-v-09710106]{font-size:%?30?%;color:#666;width:%?460?%;margin-right:%?10?%}.pay_footer .con_onec_foo .con_onecon_input .text[data-v-09710106]{width:%?430?%;font-size:%?30?%;color:#666}.pay_footer .con_onec_foo .con_onecon_input .iconfont[data-v-09710106]{font-size:%?40?%;color:#666}.pay_footer .footer_moneytype[data-v-09710106]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:1px solid #f1f1f1;width:100%;height:%?108?%}.pay_footer .footer_moneytype .footer_topli_title[data-v-09710106]{font-size:%?30?%;color:#333;width:%?180?%}.pay_footer .footer_moneytype .topli_moneytype[data-v-09710106]{font-size:%?30?%;color:#666;width:%?480?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.pay_footer .footer_moneytype .topli_moneytype .moneytype_select[data-v-09710106]{width:%?480?%}.pay_footer .pay_discount[data-v-09710106]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:1px solid #f1f1f1;height:%?88?%}.pay_footer .pay_discount .pay_discount_title[data-v-09710106]{font-size:%?30?%;color:#333;width:%?180?%}.pay_footer .pay_discount .pay_discount_select[data-v-09710106]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:%?30?%}.pay_footer .pay_discount .pay_discount_select .pay_discount_selectl[data-v-09710106]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:%?30?%}.pay_footer .pay_discount .pay_discount_select .pay_discount_selectl .pay_discount_selectl_r[data-v-09710106]{font-size:%?30?%;color:#333}.pay_footer .remarks .remarks_top[data-v-09710106]{margin-top:%?38?%;color:#666;font-size:%?30?%}.pay_footer .remarks .remarks_text[data-v-09710106]{margin-top:%?20?%;width:100%;height:%?265?%;background-color:#f1f1f1;border-radius:%?10?%}.pay_footer .remarks .remarks_text .remarks_textarea[data-v-09710106]{margin:0 %?10?%;width:calc(100% - %?20?%);height:100%;color:#666;font-size:%?30?%}.pay_footer .contract_title[data-v-09710106]{margin-top:%?30?%;color:#333;font-size:%?30?%;margin-bottom:%?30?%}.pay_footer .contract_photomargin[data-v-09710106]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:%?30?%;width:100%;-webkit-justify-content:space-around;justify-content:space-around}.pay_footer .contract_photomargin .contract_photo[data-v-09710106]{background-color:#fff;width:%?202?%;height:%?133?%}.pay_footer .contract_photomargin .contract_photo .contract_photoicon[data-v-09710106]{height:%?133?%;line-height:%?133?%;background-color:#f1f1f1;color:#999;font-size:%?62?%;text-align:center;border:1px dashed #f5f5f5}.pay_footer .contract_photomargin .contract_photo .image[data-v-09710106]{width:100%;height:100%}.uploadimg[data-v-09710106]{width:100%}.uploadimg .uploadimgmargin[data-v-09710106]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap}.uploadimg .uploadimgmargin .uploadimg_li[data-v-09710106]{position:relative;display:block;width:%?180?%;height:%?180?%;margin:%?20?%}.uploadimg .uploadimgmargin .uploadimg_li uni-image[data-v-09710106]{width:100%;height:100%}.uploadimg .uploadimgmargin .uploadimg_li .uploadimg_lidelete[data-v-09710106]{position:absolute;top:0;right:0;width:%?34?%;height:%?34?%;border-radius:%?10?%;overflow:hidden;background-color:#fff}.uploadimg .uploadimgmargin .uploadimg_li .uploadimg_lidelete uni-image[data-v-09710106]{display:block;width:100%;height:100%}.uploadimg .uploadimgmargin .uploadimg_li .uploadimg_lidelete .iconfont[data-v-09710106]{color:#ef5350;font-size:%?40?%}.uploadimg .uploadimgmargin .uploadimgmargintip[data-v-09710106]{position:absolute;bottom:%?-10?%;right:%?-10?%;color:#999;font-size:%?30?%}.uploadimg .imgicon[data-v-09710106]{width:%?180?%;height:%?180?%;border:1px dashed #999;display:block;margin:%?20?%}.uploadimg .imgicon .iconfont[data-v-09710106]{text-align:center;line-height:%?180?%;color:#999;font-size:%?70?%}',""]),t.exports=e},"96cf":function(t,e){!function(e){"use strict";var o,i=Object.prototype,n=i.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",s=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag",l="object"===typeof t,p=e.regeneratorRuntime;if(p)l&&(t.exports=p);else{p=e.regeneratorRuntime=l?t.exports:{},p.wrap=w;var u="suspendedStart",f="suspendedYield",d="executing",h="completed",g={},m={};m[a]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(F([])));y&&y!==i&&n.call(y,a)&&(m=y);var _=L.prototype=x.prototype=Object.create(m);k.prototype=_.constructor=L,L.constructor=k,L[c]=k.displayName="GeneratorFunction",p.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},p.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(_),t},p.awrap=function(t){return{__await:t}},C(D.prototype),D.prototype[s]=function(){return this},p.AsyncIterator=D,p.async=function(t,e,o,i){var n=new D(w(t,e,o,i));return p.isGeneratorFunction(e)?n:n.next().then((function(t){return t.done?t.value:n.next()}))},C(_),_[c]="Generator",_[a]=function(){return this},_.toString=function(){return"[object Generator]"},p.keys=function(t){var e=[];for(var o in t)e.push(o);return e.reverse(),function o(){while(e.length){var i=e.pop();if(i in t)return o.value=i,o.done=!1,o}return o.done=!0,o}},p.values=F,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=o,this.done=!1,this.delegate=null,this.method="next",this.arg=o,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=o)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(i,n){return s.type="throw",s.arg=t,e.next=i,n&&(e.method="next",e.arg=o),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var r=i;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=t,a.arg=e,r?(this.method="next",this.next=r.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),P(o),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc===t){var i=o.completion;if("throw"===i.type){var n=i.arg;P(o)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,i){return this.delegate={iterator:F(t),resultName:e,nextLoc:i},"next"===this.method&&(this.arg=o),g}}}function w(t,e,o,i){var n=e&&e.prototype instanceof x?e:x,r=Object.create(n.prototype),a=new O(i||[]);return r._invoke=E(t,o,a),r}function b(t,e,o){try{return{type:"normal",arg:t.call(e,o)}}catch(i){return{type:"throw",arg:i}}}function x(){}function k(){}function L(){}function C(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function D(t){function e(o,i,r,a){var s=b(t[o],t,i);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"===typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,r,a)}),(function(t){e("throw",t,r,a)})):Promise.resolve(l).then((function(t){c.value=t,r(c)}),(function(t){return e("throw",t,r,a)}))}a(s.arg)}var o;function i(t,i){function n(){return new Promise((function(o,n){e(t,i,o,n)}))}return o=o?o.then(n,n):n()}this._invoke=i}function E(t,e,o){var i=u;return function(n,r){if(i===d)throw new Error("Generator is already running");if(i===h){if("throw"===n)throw r;return I()}o.method=n,o.arg=r;while(1){var a=o.delegate;if(a){var s=j(a,o);if(s){if(s===g)continue;return s}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(i===u)throw i=h,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);i=d;var c=b(t,e,o);if("normal"===c.type){if(i=o.done?h:f,c.arg===g)continue;return{value:c.arg,done:o.done}}"throw"===c.type&&(i=h,o.method="throw",o.arg=c.arg)}}}function j(t,e){var i=t.iterator[e.method];if(i===o){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=o,j(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var n=b(i,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,g;var r=n.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=o),e.delegate=null,g):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function z(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(z,this),this.reset(!0)}function F(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,r=function e(){while(++i<t.length)if(n.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=o,e.done=!0,e};return r.next=r}}return{next:I}}function I(){return{value:o,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},b939:function(t,e,o){"use strict";var i=o("e03c"),n=o.n(i);n.a},c964:function(t,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return n}));o("d3b7"),o("e6cf");function i(t,e,o,i,n,r,a){try{var s=t[r](a),c=s.value}catch(l){return void o(l)}s.done?e(c):Promise.resolve(c).then(i,n)}function n(t){return function(){var e=this,o=arguments;return new Promise((function(n,r){var a=t.apply(e,o);function s(t){i(a,n,r,s,c,"next",t)}function c(t){i(a,n,r,s,c,"throw",t)}s(void 0)}))}}},e03c:function(t,e,o){var i=o("8b584");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=o("4f06").default;n("55409c4a",i,!0,{sourceMap:!1,shadowMode:!1})},f5a5:function(t,e,o){"use strict";var i=o("ee27");o("a15b"),o("a434"),o("ac1f"),o("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("96cf");var n,r=i(o("c964")),a=i(o("9c7e")),s={components:{pageHeadBack:a.default},data:function(){return{producttwo:0,productstwo:["1期","2期","3期","4期"],twoList:["微信支付","支付宝支付","银行卡支付","其他方式"],chevalue:!1,checkvalue:!1,imageSrclist:[],imageList:[],picslist:[],postData:{order_id:"",pay_type:"",pay_time:"",remarks:"",pics:"",amount_real:"",supplier_code:""},projectid:"",product:0,productstext:"请选择支付方式",products:["微信","支付宝","银行卡","其他"],userid:"",userinfo:{},peopletext:"",iscompany:""}},onLoad:function(t){n=this,n.projectid=t.id,n.getuser((function(t){console.log(t),n.userinfo=t.data,n.userid=n.userinfo.id,n.peopletext=n.userinfo.nickname,n.getsupplierrole()})),console.log(n.projectid)},methods:{getsupplierrole:function(){n.post("api/staff/supplier_list",{user_id:n.userid},(function(t){if(console.log(t),1===t.code)t.data.length>0?(n.postData.supplier_code=t.data[0].supplier,n.$set(n,"issupplierid",!0)):n.$set(n,"issupplierid",!1),console.log(n.issupplierid);else{var e=t.msg.split("(",2);n.echo(e[0])}}))},bindProductChange:function(t){n.product=t.target.value,n.productstext=n.products[n.product]},previewImage:function(t){uni.previewImage({urls:[t]})},bindProductChangetwo:function(t){n.producttwo=t.target.value},imagedeleteclick:function(t){n.imageList.splice(t,1),n.picslist.splice(t,1),n.$forceUpdate()},updateimg:function(t){console.log("***********************************"),console.log(t),uni.uploadFile({url:n.config.host+"api/common/upload?token="+n.userinfo.token,filePath:n.imageList[t],fileType:"image",name:"file",formData:{},success:function(e){var o;o=e.data;var i=JSON.parse(o);n.picslist.push(n.config.host+i.data.url),console.log(n.picslist),console.log("***********************************"),t++,t<n.imageList.length?(n.iscansend=!1,n.updateimg(t)):n.afterSend()},fail:function(t){uni.showModal({content:t.errMsg,showCancel:!1})}})},afterSend:function(){n.postData.order_id=n.projectid,n.postData.pay_type=n.productstext,n.postData.pay_time=Date.parse(new Date)/1e3,n.postData.amount_real?"请选择支付方式"==n.postData.pay_type?n.echo("请选择支付方式"):n.picslist.length>3?n.echo("图片不可超过3张！"):(console.log("图片长度"+n.picslist.length),n.postData.pics=n.picslist.join(","),console.log(n.postData),n.post("api/supplier/order_pay",n.postData,(function(t){if(1===t.code)n.echo("缴费成功"),setTimeout((function(){uni.navigateBack({delta:1})}),500);else{var e=t.msg.split("(",2);n.echo(e[0])}}))):n.echo("请填写缴费金额")},chooseImage:function(){var t=(0,r.default)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.picslist=[],!(this.imageList.length>=3)){t.next=8;break}return t.next=4,this.isFullImg();case 4:if(e=t.sent,console.log("是否继续?",e),e){t.next=8;break}return t.abrupt("return");case 8:uni.chooseImage({sizeType:["compressed"],count:3,success:function(t){n.each(t.tempFilePaths,(function(t,e){n.imgCompress(e,500,(function(t){n.imageList.push(t)}))}))}});case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),isFullImg:function(){n.echo("图片最多可上传3张哦~")},send:function(){if(n.postData.order_id=n.projectid,n.postData.pay_type=n.productstext,n.postData.pay_time=Date.parse(new Date)/1e3,n.postData.amount_real)if("请选择支付方式"==n.postData.pay_type)n.echo("请选择支付方式");else if("请选择"==n.postData.pay_time)n.echo("请选择缴费时间");else if(0==n.imageList.length)n.postData.pics=n.picslist.join(","),console.log(n.postData),n.post("api/supplier/order_pay",n.postData,(function(t){if(1===t.code)n.echo("缴费成功"),setTimeout((function(){uni.navigateBack({delta:1})}),500);else{var e=t.msg.split("(",2);n.echo(e[0])}}));else if(n.imageList.length>3)n.echo("图片不可超过3张！");else{uni.showLoading({title:"图片上传中..."});var t=0;n.updateimg(t)}else n.echo("请填写实际缴费金额")}}};e.default=s},fae7:function(t,e,o){"use strict";o.r(e);var i=o("f5a5"),n=o.n(i);for(var r in i)"default"!==r&&function(t){o.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a}}]);