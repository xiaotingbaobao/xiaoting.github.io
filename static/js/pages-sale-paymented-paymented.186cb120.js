(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-sale-paymented-paymented"],{"079e":function(t,i,e){"use strict";var a=e("137d"),s=e.n(a);s.a},"137d":function(t,i,e){var a=e("e512");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=e("4f06").default;s("98b4bf7e",a,!0,{sourceMap:!1,shadowMode:!1})},3183:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=s(e("0c33"));function s(t){return t&&t.__esModule?t:{default:t}}var o={components:{uniIcon:a.default},data:function(){return{listData:[{name:"陈志列",imgsrc:"../../../static/homeimg/avatar.png",projectname:"文庭雅苑",newuptitle:"最新跟进 : ",newup:"2019/04/04  14:58 张三",appointment:"预约上门 : ",appointmenttime:"2019/04/08  13:30",lable:"足额缴费"},{name:"张巨峰",imgsrc:"../../../static/homeimg/avatar.png",projectname:"美景天城",newuptitle:"最新跟进 : ",newup:"2019/04/08  14:58 李四",appointment:"预约看店 : ",appointmenttime:"2019/04/08  13:30",lable:"缴费不足"},{name:"王继洲",imgsrc:"../../../static/homeimg/avatar.png",projectname:"田园牧歌",newuptitle:"最新跟进 : ",newup:"2019/04/04  14:58 张三",appointment:"预约上门 : ",appointmenttime:"2019/04/08  13:30",lable:"足额缴费"},{name:"陶冬",imgsrc:"../../../static/homeimg/avatar.png",projectname:"水木春城",newuptitle:"最新跟进 : ",newup:"2019/04/08  14:58 李四",appointment:"预约看店 : ",appointmenttime:"2019/04/08  13:30",lable:"缴费不足"},{name:"张鹏",imgsrc:"../../../static/homeimg/avatar.png",projectname:"百旺佳苑",newuptitle:"最新跟进 : ",newup:"2019/04/04  14:58 张三",appointment:"预约上门 : ",appointmenttime:"2019/04/08  13:30",lable:"足额缴费"},{name:"朱庄虹",imgsrc:"../../../static/homeimg/avatar.png",projectname:"嘉和人家",newuptitle:"最新跟进 : ",newup:"2019/04/04  14:58 张三",appointment:"预约上门 : ",appointmenttime:"2019/04/08  13:30",lable:"足额缴费"},{name:"宁山",imgsrc:"../../../static/homeimg/avatar.png",projectname:"小街俊景",newuptitle:"最新跟进 : ",newup:"2019/04/04  14:58 张三",appointment:"预约上门 : ",appointmenttime:"2019/04/08  13:30",lable:"足额缴费"}]}},methods:{goDetail:function(){uni.navigateTo({url:"/pages/sale/detail/detail"})}}};i.default=o},3245:function(t,i,e){"use strict";e.r(i);var a=e("b69a"),s=e("6d84");for(var o in s)"default"!==o&&function(t){e.d(i,t,function(){return s[t]})}(o);e("079e");var n=e("2877"),l=Object(n["a"])(s["default"],a["a"],a["b"],!1,null,"e94e4244",null);i["default"]=l.exports},"6d84":function(t,i,e){"use strict";e.r(i);var a=e("3183"),s=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);i["default"]=s.a},b69a:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"main"},[e("v-uni-view",{staticClass:"top-search"},[e("v-uni-view",{staticClass:"out"},[e("uni-icon",{staticClass:"top-icon",attrs:{size:"20",type:"search",color:"#333"}}),e("v-uni-input",{staticClass:"uni-input",attrs:{"confirm-type":"search",placeholder:"搜索销售人员/客户姓名/客户电话","placeholder-style":"width: 500upx"}})],1),e("v-uni-view",{staticClass:"time"},[e("v-uni-view",{staticClass:"time_title"},[t._v("时间")]),e("v-uni-view",{staticClass:"time_icon"},[e("v-uni-view",{staticClass:"iconfont icon-shangxiajiantou1"})],1)],1)],1),e("v-uni-view",{staticClass:"filter"},[e("v-uni-view",{staticClass:"filter_margin"},[e("v-uni-view",{staticClass:"flt-items"},[e("v-uni-view",{staticClass:"filter_text"},[t._v("所有产品")]),e("v-uni-view",{staticClass:"filter_icon"},[e("uni-icon",{staticClass:"filter_uniicon",staticStyle:{"font-size":"40upx"},attrs:{type:"arrowdown"}})],1)],1),e("v-uni-view",{staticClass:"flt-items"},[e("v-uni-view",{staticClass:"filter_text"},[t._v("跟进状态")]),e("v-uni-view",{staticClass:"filter_icon"},[e("uni-icon",{staticClass:"filter_uniicon",staticStyle:{"font-size":"40upx"},attrs:{type:"arrowdown"}})],1)],1),e("v-uni-view",{staticClass:"flt-items"},[e("v-uni-view",{staticClass:"filter_text"},[t._v("所有产品")]),e("v-uni-view",{staticClass:"filter_icon"},[e("uni-icon",{staticClass:"filter_uniicon",staticStyle:{"font-size":"40upx"},attrs:{type:"arrowdown"}})],1)],1)],1)],1),e("v-uni-scroll-view",{staticClass:"main-scroll",attrs:{"scroll-y":""}},[e("v-uni-view",{staticClass:"lists"},t._l(t.listData,function(i,a){return e("v-uni-view",{key:a,staticClass:"items",on:{click:function(i){i=t.$handleEvent(i),t.goDetail()}}},[e("v-uni-view",{staticClass:"list_items"},[e("v-uni-view",{staticClass:"top"},[e("v-uni-image",{attrs:{src:i.imgsrc,mode:"scaleToFill"}}),e("v-uni-text",{staticClass:"title"},[t._v(t._s(i.name))]),e("v-uni-text",{staticClass:"type"},[t._v(t._s(i.projectname))]),e("v-uni-text",{staticClass:"live"},[t._v("未激活")]),e("v-uni-view",{staticClass:"phone"},[e("v-uni-view",{staticClass:"iconfont icon-llcouponphone"})],1)],1),e("v-uni-view",{staticClass:"bottom"},[e("v-uni-view",{staticClass:"log"},[e("v-uni-view",{staticClass:"log_top"},[t._v("项目名称： "+t._s(i.newup))]),e("v-uni-view",{staticClass:"log_footer"},[e("v-uni-view",{staticClass:"log_footerl"},[e("v-uni-view",{staticClass:"logfoo_top"},[t._v("已缴费用：第一阶段(基础工程)")]),e("v-uni-view",{staticClass:"logfoo_footer"},[t._v(t._s(i.newuptitle)+t._s(i.newup))])],1),e("v-uni-view",{staticClass:"log_footerr"},[e("v-uni-view",{staticClass:"status"},[e("v-uni-view",{staticClass:"btn"},[t._v(t._s(i.lable))])],1)],1)],1)],1)],1)],1),e("v-uni-view",{staticClass:"xpadding"})],1)}),1)],1)],1)},s=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return s})},e512:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-e94e4244]{height:100%}.main[data-v-e94e4244]{height:100%}.main-scroll[data-v-e94e4244]{height:-webkit-calc(100% - %?167?%);height:calc(100% - %?167?%)}.top-search[data-v-e94e4244]{width:%?690?%;padding:%?20?% %?30?%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.top-search .out[data-v-e94e4244]{width:%?540?%;position:relative;-webkit-border-radius:%?10?%;border-radius:%?10?%;background-color:#f8f8f8}.top-search .out .top-icon[data-v-e94e4244]{position:absolute;left:%?19?%;top:-webkit-calc(50% - 10px);top:calc(50% - 10px);z-index:2}.top-search .out uni-input[data-v-e94e4244]{-webkit-border-radius:%?10?%;border-radius:%?10?%;width:%?440?%;height:%?60?%;line-height:%?60?%;font-size:%?24?%;padding-left:%?68?%;background-color:#f8f8f8;border:1px solid #f8f8f8;z-index:1}.top-search .time[data-v-e94e4244]{width:%?110?%;font-size:%?30?%;margin-left:%?30?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.top-search .time .time_title[data-v-e94e4244]{color:#666;font-size:%?24?%;margin-right:%?6?%}.top-search .time .time_icon[data-v-e94e4244]{color:#666}.top-search .time .time_icon .iconfont[data-v-e94e4244]{font-size:%?20?%}.filter[data-v-e94e4244]{border-top:1px solid #ccc;width:%?750?%;background-color:#f0f0f0;height:%?63?%}.filter .filter_margin[data-v-e94e4244]{height:%?63?%;line-height:%?63?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.filter .filter_margin .flt-items[data-v-e94e4244]{text-align:center;font-size:%?30?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.filter .filter_margin .flt-items .filter_icon .filter_uniicon[data-v-e94e4244]{margin-bottom:%?6?%}.lists .items[data-v-e94e4244]{width:100%}.lists .items .list_items[data-v-e94e4244]{margin:0 %?33?%;width:-webkit-calc(100% - %?66?%);width:calc(100% - %?66?%);background-color:#fff;overflow:hidden}.lists .items .list_items .top[data-v-e94e4244]{margin-top:%?36?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative}.lists .items .list_items .top uni-image[data-v-e94e4244]{width:%?88?%;height:%?88?%;margin-right:%?20?%}.lists .items .list_items .top .title[data-v-e94e4244]{font-size:%?36?%;margin-right:%?30?%}.lists .items .list_items .top .type[data-v-e94e4244]{font-size:%?26?%;color:#999}.lists .items .list_items .top .live[data-v-e94e4244]{font-size:%?26?%;color:#666;margin-left:%?100?%}.lists .items .list_items .top .phone[data-v-e94e4244]{position:absolute;right:0;top:-webkit-calc(50% - %?33?%);top:calc(50% - %?33?%);width:%?66?%;height:%?66?%;background-color:#1b82d1;-webkit-border-radius:50%;border-radius:50%;text-align:center;vertical-align:middle}.lists .items .list_items .top .phone .iconfont[data-v-e94e4244]{text-align:center;height:%?66?%;line-height:%?66?%;font-size:%?38?%;color:#fff}.lists .items .list_items .bottom[data-v-e94e4244]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;position:relative;margin-bottom:%?25?%}.lists .items .list_items .bottom .log[data-v-e94e4244]{width:%?570?%}.lists .items .list_items .bottom .log .log_top[data-v-e94e4244]{font-size:%?24?%;width:100%;color:#999;padding-top:%?4?%;margin-left:%?108?%;border-bottom:1px solid #f0f0f0;padding-bottom:%?30?%}.lists .items .list_items .bottom .log .log_footer[data-v-e94e4244]{font-size:%?24?%;color:#999;padding-top:%?30?%;padding-left:%?108?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%}.lists .items .list_items .bottom .log .log_footer .log_footerl[data-v-e94e4244]{width:%?500?%}.lists .items .list_items .bottom .log .log_footer .log_footerl .logfoo_footer[data-v-e94e4244]{padding-top:%?18?%}.lists .items .list_items .bottom .log .log_footer .log_footerr .status[data-v-e94e4244]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:%?150?%;margin-top:%?4?%}.lists .items .list_items .bottom .log .log_footer .log_footerr .status .btn[data-v-e94e4244]{width:%?150?%;height:%?60?%;line-height:%?60?%;border:1px solid #1b82d1;-webkit-border-radius:%?10?%;border-radius:%?10?%;font-size:%?30?%;text-align:center;color:#666}',""])}}]);