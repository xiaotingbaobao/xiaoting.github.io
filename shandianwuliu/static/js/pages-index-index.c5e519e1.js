(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"29fe":function(t,e,o){"use strict";var i;o("99af"),o("ac1f"),o("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{title:"Hello",itemsTab:"one",nid:"",postData:{uid:"",time:"",sign:"",keyword:"",q_type:"1",pay_status:"1",order_status:"1",page:"1"},postDatatwo:{uid:"",time:"",sign:"",keyword:"",q_type:"2",pay_status:"1",page:"1"},getlist:[],golist:[],searchonetext:"",buttononeblock:!1,loadMoreTextone:"加载中...",showLoadMoreone:!1,loadMoreTexttwo:"加载中...",showLoadMoretwo:!1,pageone:1,pagetwo:1,issearchstatus:!1}},onLoad:function(){i=this,i.issearchstatus=!1,uni.getStorage({key:"userinfo",success:function(t){i.postData.uid=t.data.uid,i.postData.time=Date.parse(new Date),i.postData.sign="md5("+i.postData.uid+"202001016090901ka7g6dc0s309"+i.postData.time+")",i.postDatatwo.uid=t.data.uid,i.postDatatwo.time=Date.parse(new Date),i.postDatatwo.sign="md5("+i.postDatatwo.uid+"202001016090901ka7g6dc0s309"+i.postDatatwo.time+")",i.getListFunc(),i.goListFunc()},fail:function(){uni.reLaunch({url:"/pages/login/login"})}})},onReachBottom:function(){console.log("onReachBottom"),"one"==i.itemsTab?i.onbottomone():"two"==i.itemsTab&&i.onbottomtwo()},onPullDownRefresh:function(){i.pageone=1,i.pagetwo=1,i.issearchstatus=!1,i.buttononeblock=!1,i.showLoadMoreone=!1,i.showLoadMoretwo=!1,setTimeout((function(){i.getListFunc()}),200)},onShow:function(){},methods:{tgTab:function(t){i.$set(i,"pageone",1),i.$set(i,"pagetwo",1),i.$set(i,"itemsTab",t),i.$set(i,"searchonetext",""),i.$set(i,"buttononeblock",!1),i.$set(i,"issearchstatus",!1),"one"==i.itemsTab?i.getListFunc():i.goListFunc()},tolook:function(t){uni.navigateTo({url:"/pages/index/detail/detail?orderid="+t})},isnoneclick:function(){console.log("暂未")},searchoneInput:function(t){t.target.value.length>0?(console.log("有内容啦"),i.searchonetext=t.target.value,i.buttononeblock=!0):(i.$set(i,"issearchstatus",!1),i.listonetype="one",i.listtwotype="one",i.listthreetype="one",i.searchonetext="",i.buttononeblock=!1,"one"==i.itemsTab?(i.showLoadMoreone=!1,i.getListFunc()):"two"==i.itemsTab&&(i.showLoadMoretwo=!1,i.goListFunc()))},buttononeclick:function(){i.$set(i,"issearchstatus",!0),i.showLoadMoreone=!1,i.showLoadMoretwo=!1,"one"==i.itemsTab?(i.pageone=1,i.getlist=[],i.post("/order/list",{uid:i.postData.uid,time:i.postData.time,sign:i.postData.sign,keyword:i.searchonetext,q_type:"1",pay_status:"1",order_status:"1",page:"1"},(function(t){if(200===t.Code){var e=t.Result;i.statusgetfuc(e,"get")}else{var o=t.Msg.split("(",2);i.echo(o[0])}}))):"two"==i.itemsTab&&(i.pagetwo=1,i.golist=[],i.post("/order/list",{uid:i.postData.uid,time:i.postData.time,sign:i.postData.sign,keyword:i.searchonetext,q_type:"2",pay_status:"1",order_status:"1",page:"1"},(function(t){if(200===t.Code){var e=t.Result;i.statusgetfuc(e,"go")}else{var o=t.Msg.split("(",2);i.echo(o[0])}})))},statusgetfuc:function(t,e){console.log(t),0!==t.length?i.each(t,(function(t,e){"1"==e.order_status?e.isblock=!0:e.isblock=!1,"0"==e.ship_status?(e.shipstatustext="未发货",e.noclick="one"):"1"==e.ship_status?(e.shipstatustext="已揽件",e.noclick="one"):"2"==e.ship_status?(e.shipstatustext="运输中",e.noclick="two"):"3"==e.ship_status?(e.shipstatustext="已到达",e.noclick="three"):"4"==e.ship_status&&(e.shipstatustext="已签收",e.noclick="four")})):console.log("aa"),"get"==e?i.$set(i,"getlist",t):i.$set(i,"golist",t)},getListFunc:function(){i.$set(i,"getlist",""),i.post("/order/list",i.postData,(function(t){if(200===t.Code){var e=t.Result;i.statusgetfuc(e,"get"),uni.stopPullDownRefresh()}else{var o=t.Msg.split("(",2);i.echo(o[0])}}))},goListFunc:function(){i.$set(i,"golist",""),i.post("/order/list",i.postDatatwo,(function(t){if(200===t.Code){var e=t.Result;i.statusgetfuc(e,"go")}else{var o=t.Msg.split("(",2);i.echo(o[0])}}))},onbottomone:function(){if(console.log("aabottom"),console.log(i.buttononeblock),i.issearchstatus)if(!1===i.showLoadMoreone){if(1==i.showLoadMoreone)return;i.pageone=i.pageone+1,i.$set(i,"loadMoreTextone","正在加载..."),i.post("/order/list",{uid:i.postData.uid,time:Date.parse(new Date),sign:"md5("+i.postData.uid+"202001016090901ka7g6dc0s309"+i.postData.time+")",keyword:i.searchonetext,q_type:"1",pay_status:"1",order_status:"1",page:i.pageone},(function(t){if(200===t.Code){if(console.log(t),i.getlist.length>0)if(console.log("res.Result.length"+t.Result.length),t.Result.length>0){var e=t.Result;i.getlist=i.getlist.concat(e),i.statusgetfuc(i.getlist,"get")}else i.$set(i,"showLoadMoreone",!0),i.$set(i,"loadMoreTextone","已加载全部！");else i.getlist=list,i.statusgetfuc(tmplist,"get");console.log(i.getlist)}else{var o=t.Msg.split("(",2);i.echo(o[0])}}))}else i.$set(i,"loadMoreTextone","已加载全部！"),i.$set(i,"showLoadMoreone",!0);else if(console.log(i.showLoadMoreone),!1===i.showLoadMoreone){if(1==i.showLoadMoreone)return;i.pageone=i.pageone+1,i.$set(i,"loadMoreTextone","正在加载..."),i.post("/order/list",{uid:i.postData.uid,time:Date.parse(new Date),sign:"md5("+i.postData.uid+"202001016090901ka7g6dc0s309"+i.postData.time+")",keyword:"",q_type:"1",pay_status:"1",order_status:"1",page:i.pageone},(function(t){if(200===t.Code){if(console.log(t),i.getlist.length>0)if(console.log("res.Result.length"+t.Result.length),t.Result.length>0){var e=t.Result;i.getlist=i.getlist.concat(e),i.statusgetfuc(i.getlist,"get")}else i.$set(i,"showLoadMoreone",!0),i.$set(i,"loadMoreTextone","已加载全部！");else i.getlist=list,i.statusgetfuc(tmplist,"get");console.log(i.getlist)}else{var o=t.Msg.split("(",2);i.echo(o[0])}}))}else i.$set(i,"loadMoreTextone","已加载全部！"),i.$set(i,"showLoadMoreone",!0)},onbottomtwo:function(){if(console.log("bbbottom"),console.log(i.buttononeblock),console.log(i.issearchstatus),console.log(i.showLoadMoretwo),i.issearchstatus)if(!1===i.showLoadMoretwo){if(1==i.showLoadMoretwo)return;i.pagetwo=i.pagetwo+1,i.$set(i,"loadMoreTexttwo","正在加载..."),i.post("/order/list",{uid:i.postData.uid,time:Date.parse(new Date),sign:"md5("+i.postData.uid+"202001016090901ka7g6dc0s309"+i.postData.time+")",keyword:i.searchonetext,q_type:"2",pay_status:"1",order_status:"1",page:i.pagetwo},(function(t){if(200===t.Code){if(console.log(t),i.golist.length>0)if(console.log("res.Result.length"+t.Result.length),t.Result.length>0){var e=t.Result;i.golist=i.golist.concat(e),i.statusgetfuc(i.gotlist,"go")}else i.$set(i,"showLoadMoretwo",!0),i.$set(i,"loadMoreTexttwo","已加载全部！");else i.golist=list,i.statusgetfuc(tmplist,"go");console.log(i.gotlist)}else{var o=t.Msg.split("(",2);i.echo(o[0])}}))}else i.$set(i,"loadMoreTexttwo","已加载全部！"),i.$set(i,"showLoadMoretwo",!0);else if(!1===i.showLoadMoretwo){if(1==i.showLoadMoretwo)return;i.pagetwo=i.pagetwo+1,i.$set(i,"loadMoreTexttwo","正在加载..."),i.post("/order/list",{uid:i.postData.uid,time:Date.parse(new Date),sign:"md5("+i.postData.uid+"202001016090901ka7g6dc0s309"+i.postData.time+")",keyword:"",q_type:"2",pay_status:"1",order_status:"1",page:i.pagetwo},(function(t){if(200===t.Code)if(console.log(t),i.golist.length>0)if(console.log("res.Result.length"+t.Result.length),t.Result.length>0){var e=t.Result,o=i.golist.concat(e);i.statusgetfuc(o,"go")}else i.$set(i,"showLoadMoretwo",!0),i.$set(i,"loadMoreTexttwo","已加载全部！");else{var s=t.Result;i.statusgetfuc(s,"go")}else{var a=t.Msg.split("(",2);i.echo(a[0])}}))}else i.$set(i,"loadMoreTexttwo","已加载全部！"),i.$set(i,"showLoadMoretwo",!0)},shipone:function(t,e){console.log(e),"0"==e?i.post("/order/order_do",{uid:i.postData.uid,time:i.postData.time,sign:i.postData.sign,order_id:t,order_method:"order_collect"},(function(e){if(200===e.Code)console.log(e),i.post("/order/order_do",{uid:i.postData.uid,time:i.postData.time,sign:i.postData.sign,order_id:t,order_method:"order_deliver"},(function(t){if(200===t.Code)console.log(t),i.success("已发货！"),i.goListFunc();else{var e=t.Msg.split("(",2);i.echo(e[0])}}));else{var o=e.Msg.split("(",2);i.echo(o[0])}})):i.post("/order/order_do",{uid:i.postData.uid,time:i.postData.time,sign:i.postData.sign,order_id:t,order_method:"order_deliver"},(function(t){if(200===t.Code)console.log(t),i.success("已发货！"),i.goListFunc();else{var e=t.Msg.split("(",2);i.echo(e[0])}}))},shiptwo:function(t){i.post("/order/order_do",{uid:i.postData.uid,time:i.postData.time,sign:i.postData.sign,order_id:t,order_method:"order_arrive"},(function(t){if(200===t.Code)i.success("已到达！"),i.getListFunc();else{var e=t.Msg.split("(",2);i.echo(e[0])}}))},shipthree:function(t){i.post("/order/order_do",{uid:i.postData.uid,time:i.postData.time,sign:i.postData.sign,order_id:t,order_method:"order_sign"},(function(t){if(200===t.Code)i.success("已签收！"),i.getListFunc();else{var e=t.Msg.split("(",2);i.echo(e[0])}}))}}};e.default=s},"42f8":function(t,e,o){"use strict";o.r(e);var i=o("b92d"),s=o("b20c");for(var a in s)"default"!==a&&function(t){o.d(e,t,(function(){return s[t]}))}(a);o("ed99");var n,r=o("f0c5"),l=Object(r["a"])(s["default"],i["b"],i["c"],!1,null,"7e1edcad",null,!1,i["a"],n);e["default"]=l.exports},b20c:function(t,e,o){"use strict";o.r(e);var i=o("29fe"),s=o.n(i);for(var a in i)"default"!==a&&function(t){o.d(e,t,(function(){return i[t]}))}(a);e["default"]=s.a},b92d:function(t,e,o){"use strict";var i,s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"top"},[i("v-uni-view",{staticClass:"status",staticStyle:{"{background":"#fff}"}}),i("v-uni-view",{staticClass:"nav-bar"},[i("v-uni-view",{staticClass:"search"},[i("v-uni-view",{staticClass:"iconfont iconsousuo"})],1),i("v-uni-view",{staticClass:"code"},[i("v-uni-view",{staticClass:"iconfont iconsaomiao"})],1)],1),i("v-uni-view",{staticClass:"place",staticStyle:{"{height":"44upx"}})],1),i("v-uni-view",{staticClass:"main"},[i("v-uni-view",{staticClass:"bigtitle"},[t._v("快递查询")]),i("v-uni-view",{staticClass:"main_tab"},[i("v-uni-view",{class:["items","one"===t.itemsTab?"active":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tgTab("one")}}},[t._v("签收")]),i("v-uni-view",{class:["items","two"===t.itemsTab?"active":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tgTab("two")}}},[t._v("发走")])],1),i("v-uni-view",{staticClass:"onepadding"}),i("v-uni-view",{staticClass:"search_input"},[i("v-uni-view",{staticClass:"ssearch_input"},[i("v-uni-view",{staticClass:"iconfont iconsousuo search_icon"}),i("v-uni-input",{attrs:{value:t.searchonetext,placeholder:"输入关键字搜索列表中的订单","placeholder-style":"width: 450upx; color:#999999;font-size:28upx;"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.searchoneInput.apply(void 0,arguments)}}})],1),t.buttononeblock?i("v-uni-view",{staticClass:"xbutton",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.buttononeclick()}}},[t._v("确定")]):t._e()],1),i("v-uni-view",{staticClass:"onepadding"})],1),i("v-uni-view",{staticStyle:{width:"100%",height:"342upx"}}),"two"===t.itemsTab?i("v-uni-view",{staticClass:"order_listmargin"},[0==t.golist.length?i("v-uni-view",{staticClass:"xlistmargin"},[t._v("暂无发走快递！")]):t._e(),t._l(t.golist,(function(e,s){return 0!==t.golist.length?i("v-uni-view",{key:s},[i("v-uni-view",{staticClass:"order_list",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.tolook(e.order_id)}}},[i("v-uni-view",{staticClass:"order_left"},[i("v-uni-view",{staticClass:"ordertop"},[i("v-uni-view",{staticClass:"lefttitle"},[t._v("运单号"),i("v-uni-view",{staticClass:"w"})],1),i("v-uni-view",{staticClass:"rightnum"},[t._v(t._s(e.order_sn))])],1),i("v-uni-view",{staticClass:"ordertop"},[i("v-uni-view",{staticClass:"lefttitle"},[t._v("支付时间：")]),i("v-uni-view",{staticClass:"rightnum"},[t._v(t._s(e.pay_time))])],1),i("v-uni-view",{staticClass:"orderfoo"},[i("v-uni-view",{staticClass:"orderf_left"},[i("v-uni-view",{staticClass:"orderf_lefttop"},[t._v(t._s(e.province))]),i("v-uni-view",{staticClass:"orderf_leftfoo"},[t._v(t._s(e.name))])],1),i("v-uni-view",{staticClass:"orderf_cen"},[i("v-uni-view",{staticClass:"orderline"},[i("v-uni-image",{attrs:{src:o("c91f").replace(/^\./,"")}})],1),i("v-uni-view",{staticClass:"orderstatus"},[t._v(t._s(e.shipstatustext))])],1),i("v-uni-view",{staticClass:"orderf_right"},[i("v-uni-view",{staticClass:"orderf_lefttop"},[t._v(t._s(e.rec_province))]),i("v-uni-view",{staticClass:"orderf_leftfoo"},[t._v(t._s(e.rec_name))])],1)],1)],1),i("v-uni-view",{staticClass:"order_right"},["one"==e.noclick?i("v-uni-view",{staticClass:"orderbutton",on:{click:function(o){o.stopPropagation(),arguments[0]=o=t.$handleEvent(o),t.shipone(e.order_id,e.ship_status)}}},[t._v("发走")]):t._e(),"one"!==e.noclick?i("v-uni-view",{staticClass:"orderbutton active",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.isnoneclick()}}},[t._v("发走")]):t._e()],1)],1)],1):t._e()})),t.showLoadMoretwo?i("v-uni-view",{staticClass:"loading-text"},[t._v(t._s(t.loadMoreTexttwo))]):t._e()],2):t._e(),"one"===t.itemsTab?i("v-uni-view",{staticClass:"order_listmargin"},[0==t.getlist.length?i("v-uni-view",{staticClass:"xlistmargin"},[t._v("暂无签收快递！")]):t._e(),t._l(t.getlist,(function(e,s){return 0!==t.getlist.length?i("v-uni-view",{key:s},[i("v-uni-view",{staticClass:"order_list",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.tolook(e.order_id)}}},[i("v-uni-view",{staticClass:"order_left"},[i("v-uni-view",{staticClass:"ordertop"},[i("v-uni-view",{staticClass:"lefttitle"},[t._v("运单号"),i("v-uni-view",{staticClass:"w"})],1),i("v-uni-view",{staticClass:"rightnum"},[t._v(t._s(e.order_sn))])],1),i("v-uni-view",{staticClass:"ordertop"},[i("v-uni-view",{staticClass:"lefttitle"},[t._v("支付时间：")]),i("v-uni-view",{staticClass:"rightnum"},[t._v(t._s(e.pay_time))])],1),i("v-uni-view",{staticClass:"orderfoo"},[i("v-uni-view",{staticClass:"orderf_left"},[i("v-uni-view",{staticClass:"orderf_lefttop"},[t._v(t._s(e.province))]),i("v-uni-view",{staticClass:"orderf_leftfoo"},[t._v(t._s(e.name))])],1),i("v-uni-view",{staticClass:"orderf_cen"},[i("v-uni-view",{staticClass:"orderline"},[i("v-uni-image",{attrs:{src:o("c91f").replace(/^\./,"")}})],1),i("v-uni-view",{staticClass:"orderstatus"},[t._v(t._s(e.shipstatustext))])],1),i("v-uni-view",{staticClass:"orderf_right"},[i("v-uni-view",{staticClass:"orderf_lefttop"},[t._v(t._s(e.rec_province))]),i("v-uni-view",{staticClass:"orderf_leftfoo"},[t._v(t._s(e.rec_name))])],1)],1)],1),i("v-uni-view",{staticClass:"order_right"},["one"==e.noclick?i("v-uni-view",{staticClass:"orderbutton active",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.isnoneclick()}}},[t._v("到达")]):t._e(),"two"==e.noclick?i("v-uni-view",{staticClass:"orderbutton",on:{click:function(o){o.stopPropagation(),arguments[0]=o=t.$handleEvent(o),t.shiptwo(e.order_id)}}},[t._v("到达")]):t._e(),"three"==e.noclick?i("v-uni-view",{staticClass:"orderbutton",on:{click:function(o){o.stopPropagation(),arguments[0]=o=t.$handleEvent(o),t.shipthree(e.order_id)}}},[t._v("签收")]):t._e(),"four"==e.noclick?i("v-uni-view",{staticClass:"orderbutton active",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.isnoneclick()}}},[t._v("已签收")]):t._e()],1)],1)],1):t._e()})),t.showLoadMoreone?i("v-uni-view",{staticClass:"loading-text"},[t._v(t._s(t.loadMoreTextone))]):t._e()],2):t._e()],1)},a=[];o.d(e,"b",(function(){return s})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return i}))},c91f:function(t,e,o){t.exports=o.p+"static/img/hongxian.879018ea.png"},ebcc:function(t,e,o){var i=o("f34b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=o("4f06").default;s("2a19d5d1",i,!0,{sourceMap:!1,shadowMode:!1})},ed99:function(t,e,o){"use strict";var i=o("ebcc"),s=o.n(i);s.a},f34b:function(t,e,o){var i=o("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.top .status[data-v-7e1edcad]{width:100%;height:0;position:fixed;background-color:#fff;z-index:10;top:0}.top .nav-bar[data-v-7e1edcad]{padding-top:0;width:100%;height:%?88?%;line-height:%?88?%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;overflow:hidden;top:0;z-index:10}.top .nav-bar .search[data-v-7e1edcad]{position:fixed;right:%?120?%;top:0}.top .nav-bar .search .iconfont[data-v-7e1edcad]{font-size:%?50?%;color:#333}.top .nav-bar .code[data-v-7e1edcad]{position:fixed;right:%?30?%;top:%?2?%}.top .nav-bar .code .iconfont[data-v-7e1edcad]{font-size:%?44?%;color:#333}.top .place[data-v-7e1edcad]{height:%?88?%}uni-page-body[data-v-7e1edcad]{background-color:#f1f1f1}.main[data-v-7e1edcad]{width:100%;background-color:#fff;position:fixed;top:%?88?%;z-index:100;height:%?342?%}.main .bigtitle[data-v-7e1edcad]{background-color:#fff;font-size:%?70?%;font-weight:700;color:#333;padding-left:%?40?%;height:%?120?%;line-height:%?120?%}.main .main_tab[data-v-7e1edcad]{width:calc(100% - %?80?%);background-color:#fff;margin:%?30?% %?40?% 0 %?30?%;display:-webkit-box;display:-webkit-flex;display:flex}.main .main_tab .items[data-v-7e1edcad]{width:%?200?%;line-height:%?88?%;font-size:%?32?%;color:#666;text-align:center;position:relative}.main .main_tab .active[data-v-7e1edcad]{color:#b9303e}.main .main_tab .active[data-v-7e1edcad]:after{position:absolute;bottom:0;left:0;width:100%;height:%?5?%;content:"";background:#b9303e}.main .onepadding[data-v-7e1edcad]{width:100%;height:%?10?%}.main .search_input[data-v-7e1edcad]{width:100%;margin:%?10?% 0 0 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.main .search_input .ssearch_input[data-v-7e1edcad]{margin:0 %?40?%;height:%?74?%;width:calc(100% - %?80?%);border-radius:%?40?%;background-color:#f1f1f1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.main .search_input .ssearch_input .iconfont[data-v-7e1edcad]{font-size:%?45?%;color:#999;margin-left:%?30?%}.main .search_input .ssearch_input uni-input[data-v-7e1edcad]{width:calc(100% - %?80?%);height:%?88?%;color:#999;font-size:%?28?%;margin-left:%?18?%}.main .search_input .xbutton[data-v-7e1edcad]{height:%?74?%;line-height:%?74?%}.order_listmargin[data-v-7e1edcad]{margin-top:%?20?%;width:100%}.order_listmargin .order_list[data-v-7e1edcad]{width:%?720?%;height:%?270?%;margin:0 %?15?% %?20?% %?15?%;background-color:#fff;border-radius:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex}.order_listmargin .order_list .order_left[data-v-7e1edcad]{width:%?530?%;margin-left:%?40?%;margin-top:%?30?%}.order_listmargin .order_list .order_left .ordertop[data-v-7e1edcad]{width:100%;height:%?40?%;font-size:%?24?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.order_listmargin .order_list .order_left .ordertop .lefttitle[data-v-7e1edcad]{font-size:%?24?%;color:#999}.order_listmargin .order_list .order_left .ordertop .right_num[data-v-7e1edcad]{color:#333}.order_listmargin .order_list .order_left .orderfoo[data-v-7e1edcad]{width:100%;height:%?110?%;margin-top:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex}.order_listmargin .order_list .order_left .orderfoo .orderf_left[data-v-7e1edcad]{width:%?170?%;height:%?110?%}.order_listmargin .order_list .order_left .orderfoo .orderf_left .orderf_lefttop[data-v-7e1edcad]{font-size:%?32?%;color:#333}.order_listmargin .order_list .order_left .orderfoo .orderf_left .orderf_leftfoo[data-v-7e1edcad]{height:%?60?%;line-height:%?60?%;font-size:%?28?%;color:#999;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.order_listmargin .order_list .order_left .orderfoo .orderf_cen[data-v-7e1edcad]{height:%?110?%;width:%?190?%;overflow:hidden;margin-top:%?10?%}.order_listmargin .order_list .order_left .orderfoo .orderf_cen .orderline[data-v-7e1edcad]{width:%?170?%;height:%?20?%;margin-left:%?10?%;overflow:hidden}.order_listmargin .order_list .order_left .orderfoo .orderf_cen .orderline uni-image[data-v-7e1edcad]{display:block;width:100%;height:100%}.order_listmargin .order_list .order_left .orderfoo .orderf_cen .orderstatus[data-v-7e1edcad]{margin-top:%?20?%;font-size:%?28?%;color:#b9303e;text-align:center}.order_listmargin .order_list .order_left .orderfoo .orderf_right[data-v-7e1edcad]{width:%?170?%;height:%?110?%}.order_listmargin .order_list .order_left .orderfoo .orderf_right .orderf_lefttop[data-v-7e1edcad]{font-size:%?32?%;color:#333;text-align:center}.order_listmargin .order_list .order_left .orderfoo .orderf_right .orderf_leftfoo[data-v-7e1edcad]{height:%?60?%;line-height:%?60?%;text-align:center;font-size:%?28?%;color:#999;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.order_listmargin .order_list .order_right[data-v-7e1edcad]{width:%?150?%;height:%?280?%;border-left:1px solid #f1f1f1}.order_listmargin .order_list .order_right .orderbutton[data-v-7e1edcad]{width:%?100?%;height:%?48?%;border-radius:%?10?%;margin-top:%?116?%;margin-left:%?25?%;color:#fff;font-size:%?26?%;background-color:#e51a3d;line-height:%?48?%;text-align:center}.order_listmargin .order_list .order_right .active[data-v-7e1edcad]{background-color:#999}body.?%PAGE?%[data-v-7e1edcad]{background-color:#f1f1f1}',""]),t.exports=e}}]);