(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-sale-book-sign-sign"],{"27f8":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"main"},[e("v-uni-scroll-view",{staticClass:"main-scroll",attrs:{"scroll-y":""}},[e("v-uni-view",{staticClass:"basic row"},[e("v-uni-view",{staticClass:"items"},[e("v-uni-text",{staticClass:"label"},[t._v("客户姓名：")]),e("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入客户姓名"}})],1),e("v-uni-view",{staticClass:"items"},[e("v-uni-text",{staticClass:"label"},[t._v("客户手机：")]),e("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入客户手机"}})],1),e("v-uni-view",{staticClass:"items"},[e("v-uni-text",{staticClass:"label"},[t._v("客户性别：")]),e("v-uni-radio-group",{staticClass:"radioes"},[e("v-uni-view",{staticClass:"rad-item"},[e("v-uni-radio",{attrs:{value:"1"}}),t._v("男")],1),e("v-uni-view",{staticClass:"rad-item"},[e("v-uni-radio",{attrs:{value:"2"}}),t._v("女")],1)],1)],1),e("v-uni-view",{staticClass:"items"},[e("v-uni-text",{staticClass:"label"},[t._v("产品类型：")]),e("v-uni-view",{staticClass:"pickers"},[e("v-uni-picker",{attrs:{value:t.product,range:t.products},on:{change:function(i){i=t.$handleEvent(i),t.bindProductChange(i)}}},[e("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.products[t.product]))])],1)],1)],1),e("v-uni-view",{staticClass:"items"},[e("v-uni-text",{staticClass:"label"},[t._v("预计拍摄时间：")]),e("v-uni-view",{staticClass:"pickers"},[e("v-uni-picker",{attrs:{mode:"date",value:t.date},on:{change:function(i){i=t.$handleEvent(i),t.bindDateChange(i)}}},[e("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.date))])],1)],1)],1)],1),e("v-uni-view",{staticClass:"tg row",on:{click:function(i){i=t.$handleEvent(i),t.tgOthers()}}},[e("v-uni-text",{staticClass:"title"},[t._v("其他选填项")]),e("v-uni-text",[t._v("^")])],1),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showOthers,expression:"showOthers"}],staticClass:"others row"},[e("v-uni-view",{staticClass:"items"},[e("v-uni-text",{staticClass:"label"},[t._v("客户住址：")]),e("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入客户住址"}})],1),e("v-uni-view",{staticClass:"items"},[e("v-uni-text",{staticClass:"label"},[t._v("客户身份：")]),e("v-uni-view",{staticClass:"pickers"},[e("v-uni-picker",{attrs:{value:t.identity,range:t.identities},on:{change:function(i){i=t.$handleEvent(i),t.bindIdentityChange(i)}}},[e("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.identities[t.identity]))])],1)],1)],1),e("v-uni-view",{staticClass:"items"},[e("v-uni-text",{staticClass:"label"},[t._v("其他联系人：")]),e("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入其他联系人"}})],1),e("v-uni-view",{staticClass:"items"},[e("v-uni-text",{staticClass:"label"},[t._v("其他联系方式：")]),e("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入其他联系方式"}})],1),e("v-uni-view",{staticClass:"items"},[e("v-uni-text",{staticClass:"label"},[t._v("客户来源：")]),e("v-uni-view",{staticClass:"pickers"},[e("v-uni-picker",{attrs:{value:t.job,range:t.jobs},on:{change:function(i){i=t.$handleEvent(i),t.bindJobChange(i)}}},[e("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.jobs[t.job]))])],1)],1)],1),e("v-uni-view",{staticClass:"items"},[e("v-uni-text",{staticClass:"label"},[t._v("客户职业：")]),e("v-uni-view",{staticClass:"pickers"},[e("v-uni-picker",{attrs:{value:t.from,range:t.froms},on:{change:function(i){i=t.$handleEvent(i),t.bindFromChange(i)}}},[e("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.froms[t.from]))])],1)],1)],1),e("v-uni-view",{staticClass:"items other-text"},[e("v-uni-text",{staticClass:"label"},[t._v("其他说明：")]),e("v-uni-textarea",{staticClass:"textarea",attrs:{"auto-height":"",placeholder:"其他说明..."}})],1)],1)],1),e("v-uni-view",{staticClass:"bot-btn"},[e("v-uni-view",{staticClass:"btns left"},[e("v-uni-text",[t._v("预约看店")])],1),e("v-uni-view",{staticClass:"btns left"},[e("v-uni-text",[t._v("客户缴费")])],1),e("v-uni-view",{staticClass:"btns right"},[e("v-uni-text",[t._v("完成登记")])],1)],1)],1)},s=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return s})},"3ad9":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(),s={data:function(){return{product:0,products:["请选择","婚纱摄影","亲子摄影","毕业照"],identity:0,identities:["请选择","父母","伴侣","子女","亲戚","其它"],job:0,jobs:["请选择","职员","老板"],from:0,froms:["请选择","朋友介绍","官网","广告"],date:a,showOthers:!0}},methods:{bindProductChange:function(t){this.product=t.target.value},bindDateChange:function(t){this.date=t.target.value},bindJobChange:function(t){this.job=t.target.value},bindIdentityChange:function(t){this.identity=t.target.value},bindFromChange:function(t){this.from=t.target.value},tgOthers:function(){this.showOthers=!this.showOthers}},computed:{startDate:function(){return n("start")},endDate:function(){return n("end")}}};function n(){!(arguments.length>0&&void 0!==arguments[0])||arguments[0];var t=new Date,i=t.getFullYear(),e=t.getMonth()+1,a=t.getDate();return e=e>9?e:"0"+e,a=a>9?a:"0"+a,"".concat(i,"-").concat(e,"-").concat(a)}i.default=s},"449b":function(t,i,e){"use strict";var a=e("fa1e"),s=e.n(a);s.a},"554a":function(t,i,e){"use strict";e.r(i);var a=e("3ad9"),s=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,function(){return a[t]})}(n);i["default"]=s.a},"76a1":function(t,i,e){"use strict";e.r(i);var a=e("27f8"),s=e("554a");for(var n in s)"default"!==n&&function(t){e.d(i,t,function(){return s[t]})}(n);e("449b");var c=e("2877"),l=Object(c["a"])(s["default"],a["a"],a["b"],!1,null,"3b1ce8c7",null);i["default"]=l.exports},b885:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,"body[data-v-3b1ce8c7]{background-color:#f8f8f8}.main[data-v-3b1ce8c7],uni-page-body[data-v-3b1ce8c7]{height:100%}.row[data-v-3b1ce8c7]{width:%?690?%;padding:0 %?30?%;background-color:#fff;margin-bottom:%?30?%}.main-scroll[data-v-3b1ce8c7]{height:-webkit-calc(100% - %?84?%);height:calc(100% - %?84?%)}.row .items[data-v-3b1ce8c7]{width:100%;border-bottom:1px solid #f8f8f8;display:table}.row .items[data-v-3b1ce8c7]:last-child{border-bottom:none}.row .items .label[data-v-3b1ce8c7]{font-size:%?30?%;line-height:%?90?%;display:table-cell}.row .items .pickers[data-v-3b1ce8c7],.row .items .radioes[data-v-3b1ce8c7],.row .items .uni-input[data-v-3b1ce8c7]{font-size:%?30?%;line-height:%?90?%;text-align:right;display:table-cell}.row .items .radioes .rad-item[data-v-3b1ce8c7]{display:inline-block;margin-left:%?50?%}.row .items .pickers .uni-input[data-v-3b1ce8c7]{display:inline-block;width:100%;text-align:right}.tg[data-v-3b1ce8c7]{height:%?90?%;line-height:%?90?%;text-align:center}.tg .title[data-v-3b1ce8c7]{font-size:%?30?%;padding-right:%?10?%}.row .other-text[data-v-3b1ce8c7]{display:block;padding-bottom:%?30?%}.row .other-text .label[data-v-3b1ce8c7]{width:100%;display:inline-block}.row .other-text .textarea[data-v-3b1ce8c7]{width:100%;min-height:%?120?%;font-size:%?30?%}.bot-btn[data-v-3b1ce8c7]{position:fixed;bottom:0;left:0;width:%?750?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.bot-btn .btns[data-v-3b1ce8c7]{width:-webkit-calc(100%/3);width:calc(100% / 3);height:%?84?%;font-size:%?36?%;line-height:%?84?%;text-align:center;color:#fff}.bot-btn .btns.left[data-v-3b1ce8c7]{color:#2aa0f7;background-color:#e9f6ff}.bot-btn .btns.right[data-v-3b1ce8c7]{background-color:#2aa0f7}",""])},fa1e:function(t,i,e){var a=e("b885");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("55d933c0",a,!0,{sourceMap:!1,shadowMode:!1})}}]);