(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-buy-buy"],{"1a83":function(e,t,i){"use strict";i.r(t);var a=i("7281"),d=i("86d3");for(var s in d)"default"!==s&&function(e){i.d(t,e,(function(){return d[e]}))}(s);i("59e5");var n,o=i("f0c5"),r=Object(o["a"])(d["default"],a["b"],a["c"],!1,null,"19fd0098",null,!1,a["a"],n);t["default"]=r.exports},"3ec5":function(e,t,i){"use strict";var a=i("ee27");i("ac1f"),i("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d,s=a(i("fc11")),n={data:function(){var e;return{isbuyblock:!1,istypeonenum:!0,istypetwonum:!0,istypethreenum:!1,istypefournum:!1,istypefivenum:!1,istypesixnum:!1,isweightonenum:!0,isweighttwonum:!1,isweightthreenum:!1,isweightfournum:!1,isweightfivenum:!1,isweightsixnum:!1,sendaddresslist:{},getaddresslist:{},goodlisttmp:[],goodweighttext:"请选择物品信息",postData:{weight:"",id:""},bottompricenum:"--",sendaddressishave:!1,getaddressishave:!1,orderdatanum:{ordercode:"",remark:""},orderdata:(e={uid:"",time:"",sign:"",order_sn:"",pay_qrcode:"",category_id:"",order_code:"",weight:"",address_id:"",country:"广东",province:"",city:"白云",address:"",mobile:"",rec_country:"广东",rec_province:"",rec_city:"白云",rec_address:"",rec_mobile:""},(0,s.default)(e,"address",""),(0,s.default)(e,"mobile",""),(0,s.default)(e,"name",""),(0,s.default)(e,"comment",""),(0,s.default)(e,"orderprice",""),e)}},onShow:function(){var e;d.goodweighttext="请选择物品信息",d.orderprice="",d.bottompricenum="--",d.orderdata=(e={uid:"",time:"",sign:"",order_sn:"",pay_qrcode:"",category_id:"",order_code:"",weight:"",address_id:"",country:"广东",province:"",city:"白云",address:"",mobile:"",rec_country:"广东",rec_province:"",rec_city:"白云",rec_address:"",rec_mobile:""},(0,s.default)(e,"address",""),(0,s.default)(e,"mobile",""),(0,s.default)(e,"name",""),(0,s.default)(e,"comment",""),(0,s.default)(e,"orderprice",""),e),d.$forceUpdate(),uni.getStorage({key:"userinfo",success:function(e){console.log(e.data.uid),d.orderdata.uid=e.data.uid,d.orderdata.time=Date.parse(new Date),d.orderdata.sign="md5("+d.orderdata.uid+"202001016090901ka7g6dc0s309"+d.orderdata.time+")"},fail:function(){uni.reLaunch({url:"/pages/login/login"})}}),uni.getStorage({key:"ordercodenum",success:function(e){d.orderdata.order_sn=e.data.ordercode,d.orderdata.remark=e.data.remark},fail:function(){console.log("wwwwwwwwwww")}}),uni.getStorage({key:"sendaddress",success:function(e){d.sendaddressishave=!0,d.sendaddresslist=e.data,d.orderdata.country=e.data.country,d.orderdata.province=e.data.province,d.orderdata.address=e.data.address,d.orderdata.mobile=e.data.mobile,d.orderdata.name=e.data.name},fail:function(){d.sendaddressishave=!1,console.log("wwwwwwwwwww")}}),uni.getStorage({key:"getaddress",success:function(e){d.getaddressishave=!0,d.getaddresslist=e.data,d.orderdata.rec_country=e.data.country,d.orderdata.rec_province=e.data.province,d.orderdata.rec_address=e.data.address,d.orderdata.rec_mobile=e.data.mobile,d.orderdata.rec_name=e.data.name},fail:function(){d.getaddressishave=!1,console.log("wwwwwwwwwww")}}),uni.getStorage({key:"goodweight",success:function(e){console.log(e.data),""==e.data.goodtext?d.goodweighttext=e.data.weightnum+"KG":d.goodweighttext=e.data.goodtext+" "+e.data.weightnum+"KG",d.postData.weight=e.data.weightnum,d.postData.id=e.data.id,d.orderdata.weight=e.data.weightnum,d.orderdata.category_id=e.data.id,d.getpricenum()},fail:function(){console.log("wwwwwwwwwww")}}),d.getaddressone()},onLoad:function(){d=this},methods:{toohtersorder:function(){uni.navigateTo({url:"nopayorder/nopayorder"})},getaddressone:function(){},getpricenum:function(){console.log(d.postData),d.post("/category/getprice",d.postData,(function(e){if(200===e.Code)console.log("1111111111111111111111111dd"),console.log(e),d.bottompricenum=e.Result.price,d.orderdata.orderprice=e.Result.price;else{var t=e.Msg.split("(",2);d.echo(t[0])}}))},buyblock:function(){d.orderdatanum.ordercode=d.orderdata.order_sn,d.orderdatanum.remark=d.orderdata.comment,uni.setStorage({key:"ordercodenum",data:d.orderdatanum,success:function(){uni.navigateTo({url:"/pages/buy/choosegood/choosegood"})}})},cancel:function(){d.$set(d,"isbuyblock",!1)},typeoneclick:function(e){"typeone"==e?d.$set(d,"istypeonenum",!d.istypeonenum):"typetwo"==e?d.$set(d,"istypetwonum",!d.istypetwonum):"typethree"==e?d.$set(d,"istypethreenum",!d.istypethreenum):"typefour"==e?d.$set(d,"istypefournum",!d.istypefournum):"typefive"==e?d.$set(d,"istypefivenum",!d.istypefivenum):"typesix"==e&&d.$set(d,"istypesixnum",!d.istypesixnum)},weightclick:function(e){d.$set(d,"isweightonenum",!1),d.$set(d,"isweighttwonum",!1),d.$set(d,"isweightthreenum",!1),d.$set(d,"isweightfournum",!1),d.$set(d,"isweightfivenum",!1),d.$set(d,"isweightsixnum",!1),"weightone"==e?d.$set(d,"isweightonenum",!0):"weighttwo"==e?d.$set(d,"isweighttwonum",!0):"weightthree"==e?d.$set(d,"isweightthreenum",!0):"weightfour"==e?d.$set(d,"isweightfournum",!0):"weightfive"==e?d.$set(d,"isweightfivenum",!0):"weightsix"==e&&d.$set(d,"isweightsixnum",!0)},gobuy:function(){0==d.sendaddressishave?d.echo("请输入寄件人信息"):0==d.getaddressishave?d.echo("请输入收件人信息"):""==d.orderdata.order_sn?d.echo("请输入快递单号"):""==d.orderdata.weight?d.echo("请选择物品信息及重量"):(console.log(d.orderdata),d.post("/order/add",d.orderdata,(function(e){200===e.Code?(console.log(e),uni.removeStorageSync("ordercodenum"),uni.removeStorageSync("sendaddress"),uni.removeStorageSync("getaddress"),uni.removeStorageSync("goodweight"),uni.navigateTo({url:"/pages/buy/pay/pay?orderid="+e.Result.order_id})):d.echo("订单号重复！")})))},addressone:function(){d.orderdatanum.ordercode=d.orderdata.order_sn,d.orderdatanum.remark=d.orderdata.comment,uni.setStorage({key:"ordercodenum",data:d.orderdatanum,success:function(){uni.navigateTo({url:"/pages/buy/sendaddress/sendaddress"})}})},addresstwo:function(){d.orderdatanum.ordercode=d.orderdata.order_sn,d.orderdatanum.remark=d.orderdata.comment,uni.setStorage({key:"ordercodenum",data:d.orderdatanum,success:function(){uni.navigateTo({url:"/pages/buy/getaddress/getaddress"})}})}}};t.default=n},"512b":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.top .status[data-v-19fd0098]{width:100%;height:0;position:fixed;background-color:#f1f1f1;z-index:10;top:0}.top .nav-bar[data-v-19fd0098]{padding-top:0;width:100%;height:%?88?%;line-height:%?88?%;background-color:#f1f1f1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;overflow:hidden;top:0;z-index:10}.top .nav-bar .topimg[data-v-19fd0098]{width:%?45?%;height:%?45?%;margin-left:%?33?%;overflow:hidden}.top .nav-bar .topimg uni-image[data-v-19fd0098]{width:100%;height:100%}.top .nav-bar .back[data-v-19fd0098]{height:%?88?%;position:absolute;left:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.top .nav-bar .back .iconfont[data-v-19fd0098]{font-size:%?40?%;color:#fff;line-height:%?90?%}.top .nav-bar .back .text[data-v-19fd0098]{font-size:%?32?%;color:#fff}.top .nav-bar .share[data-v-19fd0098]{height:%?88?%;line-height:%?88?%;position:absolute;right:%?30?%}.top .nav-bar .share .iconfont[data-v-19fd0098]{font-size:%?56?%;color:#333;line-height:%?90?%}.top .nav-bar .avatar[data-v-19fd0098]{width:%?45?%;height:%?45?%;line-height:%?45?%;border-radius:50%;position:absolute;right:%?30?%;top:%?22?%}.top .nav-bar .avatar uni-image[data-v-19fd0098]{display:block;width:%?45?%;height:%?45?%}.top .nav-bar .avatar .iconfont[data-v-19fd0098]{font-size:%?36?%;color:#fff}.top .nav-bar .title[data-v-19fd0098]{width:100%;height:%?88?%;line-height:%?88?%;font-size:%?38?%;color:#666;text-align:center;background-color:#f1f1f1}.top .nav-bar .stt[data-v-19fd0098]{line-height:%?110?%;font-size:%?30?%;color:#fff;position:absolute;right:%?30?%;top:0}.top .place[data-v-19fd0098]{height:%?88?%}uni-page-body[data-v-19fd0098]{background-color:#fdfdfd}.address[data-v-19fd0098]{width:%?720?%;height:%?260?%;background-color:#fff;border-radius:%?10?%;margin:0 %?15?%;box-shadow:0 0 %?10?% %?10?% #e1e1e1;display:-webkit-box;display:-webkit-flex;display:flex}.address .addressLeft[data-v-19fd0098]{width:%?95?%;height:%?260?%;overflow:hidden}.address .addressLeft .leftSend[data-v-19fd0098]{margin-top:%?36?%;margin-left:%?30?%;margin-bottom:%?20?%;width:%?40?%;height:%?40?%;border-radius:%?10?%;background-color:#343434;color:#fff;font-size:%?28?%;line-height:%?40?%;text-align:center}.address .addressLeft .leftLine[data-v-19fd0098]{width:%?48?%;height:%?60?%;border-right:1px dashed #ccc}.address .addressLeft .leftHave[data-v-19fd0098]{margin-top:%?20?%;margin-left:%?30?%;width:%?40?%;height:%?40?%;border-radius:%?10?%;background-color:#da1d31;color:#fff;font-size:%?28?%;line-height:%?40?%;text-align:center}.address .addressRight[data-v-19fd0098]{width:%?625?%}.address .addressRight .addressSend[data-v-19fd0098]{width:%?625?%;display:-webkit-box;display:-webkit-flex;display:flex}.address .addressRight .addressSend .addressSendLeft[data-v-19fd0098]{width:%?550?%;height:%?92?%}.address .addressRight .addressSend .addressSendLeft .addressSendLeftTop[data-v-19fd0098]{display:-webkit-box;display:-webkit-flex;display:flex;width:%?550?%}.address .addressRight .addressSend .addressSendLeft .addressSendLeftTop .sendName[data-v-19fd0098]{color:#333;font-size:%?28?%;width:%?250?%;height:%?40?%;line-height:%?40?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.address .addressRight .addressSend .addressSendLeft .addressSendLeftTop .sendMobile[data-v-19fd0098]{color:#666;font-size:%?24?%;width:%?250?%;height:%?40?%;line-height:%?40?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.address .addressRight .addressSend .addressSendLeft .addressSendLeftFoo[data-v-19fd0098]{width:%?550?%;height:%?40?%;line-height:%?50?%}.address .addressRight .addressSend .addressSendLeft .addressSendLeftFoo .sendText[data-v-19fd0098]{color:#666;font-size:%?24?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.address .addressRight .addressSend .addressSendLeftnone[data-v-19fd0098]{width:%?520?%;height:%?92?%;line-height:%?92?%;color:#999;font-size:%?30?%;margin-left:%?30?%}.address .addressRight .addressSend .addressSendRight[data-v-19fd0098]{width:%?75?%;height:%?92?%;line-height:%?92?%;text-align:center}.address .addressRight .addressSend .addressSendRight .iconfont[data-v-19fd0098]{font-size:%?40?%;color:#343434}.content[data-v-19fd0098]{width:%?720?%;height:%?286?%;background-color:#fff;border-radius:%?10?%;margin:%?30?% %?15?% 0 %?15?%;box-shadow:0 0 %?10?% #e1e1e1;border:1px solid #f1f1f1}.content .items[data-v-19fd0098]{width:%?660?%;margin:0 %?30?%;height:%?94?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:1px solid #f5f5f5}.content .items .title[data-v-19fd0098]{font-size:%?30?%;color:#999;width:%?155?%}.content .items .text[data-v-19fd0098]{font-size:%?30?%;color:#666;width:%?500?%}.content .items .text uni-input[data-v-19fd0098]{width:%?500?%;font-size:%?30?%}.content .itemscen[data-v-19fd0098]{width:%?660?%;margin:0 %?30?%;height:%?94?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-bottom:1px solid #f5f5f5}.content .itemscen .title[data-v-19fd0098]{font-size:%?30?%;color:#999;width:%?155?%}.content .itemscen .itemsright[data-v-19fd0098]{width:%?500?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.content .itemscen .itemsright .text[data-v-19fd0098]{font-size:%?30?%;color:#666;width:%?470?%;text-align:right}.content .itemscen .itemsright .text uni-input[data-v-19fd0098]{width:%?470?%;font-size:%?30?%}.content .itemscen .itemsright .iconfont[data-v-19fd0098]{font-size:%?40?%;color:#999}.fixed[data-v-19fd0098]{width:%?750?%;height:%?120?%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;position:fixed;bottom:50px;border-top:1px solid #f1f1f1;left:0}.fixed .fixed_left[data-v-19fd0098]{width:%?395?%;margin-left:%?30?%}.fixed .fixed_left .fixed_lefttop[data-v-19fd0098]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?60?%;line-height:%?60?%}.fixed .fixed_left .fixed_lefttop .flt_left[data-v-19fd0098]{font-size:%?30?%;color:#333;font-weight:700;margin-right:%?5?%}.fixed .fixed_left .fixed_lefttop .flt_right[data-v-19fd0098]{color:#da1d31;font-size:%?30?%}.fixed .fixed_left .fixed_leftfoo[data-v-19fd0098]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?60?%;line-height:%?40?%}.fixed .fixed_left .fixed_leftfoo .iconfont[data-v-19fd0098]{color:#da1d31;font-size:%?30?%;margin-right:%?8?%}.fixed .fixed_left .fixed_leftfoo .fixed_ltext[data-v-19fd0098]{font-size:%?22?%;color:#666}.fixed .fixed_right[data-v-19fd0098]{width:%?295?%;height:%?90?%;border-radius:%?10?%;background-color:#d9d9d9;font-size:%?36?%;color:#fff;text-align:center;line-height:%?90?%;margin-top:%?15?%}.buymarginmargin[data-v-19fd0098]{width:100%;height:100%}.buymarginmargin .buymargin[data-v-19fd0098]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:hsla(0,0%,94.5%,.6);z-index:99}.buymarginmargin .buyblock[data-v-19fd0098]{position:fixed;left:0;top:0;width:100%;height:calc(100% - 50px);z-index:999}.buymarginmargin .buyblock .buy[data-v-19fd0098]{position:fixed;left:0;bottom:50px;width:%?750?%;height:%?880?%;background-color:#fff;overflow:hidden}.buymarginmargin .buyblock .buy .cancelclick[data-v-19fd0098]{position:fixed;bottom:calc(%?860?% + 50px);right:0;width:%?110?%;height:%?120?%;background-color:#fff;border-top-left-radius:60%;text-align:center;line-height:%?110?%}.buymarginmargin .buyblock .buy .cancelclick .iconfont[data-v-19fd0098]{margin-left:%?20?%;color:#333;font-size:%?60?%}.buymarginmargin .buyblock .buy .cancelradio[data-v-19fd0098]{position:fixed;bottom:calc(%?880?% + 50px);right:%?80?%;width:50px;height:50px;line-height:100px;display:block;text-align:center;background-image:-webkit-radial-gradient(0 0,400px,transparent 50px,#fff %?80?%);background-image:radial-gradient(400px at 0 0,transparent 50px,#fff %?80?%)}.buymarginmargin .buyblock .buy .toptitle[data-v-19fd0098]{margin:%?35?% %?30?% %?30?% %?45?%;width:calc(100% - %?75?%);height:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.buymarginmargin .buyblock .buy .toptitle .toptitle_left[data-v-19fd0098]{display:-webkit-box;display:-webkit-flex;display:flex}.buymarginmargin .buyblock .buy .toptitle .toptitle_left .ttl_line[data-v-19fd0098]{width:%?8?%;height:%?40?%;background-color:#cf262c;margin-right:%?20?%}.buymarginmargin .buyblock .buy .toptitle .toptitle_left .ttl_text[data-v-19fd0098]{font-size:%?38?%;color:#333}.buymarginmargin .buyblock .buy .toptitle .toptitle_right[data-v-19fd0098]{display:-webkit-box;display:-webkit-flex;display:flex;height:%?40?%}.buymarginmargin .buyblock .buy .toptitle .toptitle_right .ttr_ltext[data-v-19fd0098]{font-size:%?24?%;color:#666;margin-top:%?16?%}.buymarginmargin .buyblock .buy .toptitle .toptitle_right .ttr_lright[data-v-19fd0098]{font-size:%?40?%;color:#da1d31}.buymarginmargin .buyblock .buy .titletype[data-v-19fd0098]{font-size:%?24?%;color:#999;height:%?30?%;margin-left:%?45?%}.buymarginmargin .buyblock .buy .typelist[data-v-19fd0098]{width:calc(100% - %?60?%);margin:0 %?30?%;overflow:hidden}.buymarginmargin .buyblock .buy .typelist .typelistmargin[data-v-19fd0098]{width:%?206?%;display:inline-block;margin-right:%?20?%}.buymarginmargin .buyblock .buy .typelist .typelistmargin .type_items[data-v-19fd0098]{margin-top:%?20?%;width:%?206?%;height:%?74?%;line-height:%?74?%;background-color:#fff;border-radius:%?40?%;color:#373a3f;display:-webkit-box;display:-webkit-flex;display:flex;border:1px solid #f1f1f1}.buymarginmargin .buyblock .buy .typelist .typelistmargin .type_items .iconfont[data-v-19fd0098]{width:%?40?%;font-size:%?30?%;color:#373a3f;margin-left:%?20?%;text-align:right}.buymarginmargin .buyblock .buy .typelist .typelistmargin .type_items .items_text[data-v-19fd0098]{width:%?120?%;font-size:%?26?%;color:#373a3f;text-align:center}.buymarginmargin .buyblock .buy .typelist .typelistmargin .typeactive[data-v-19fd0098]{width:%?210?%;height:%?78?%;line-height:%?78?%;border:0;background-color:#373a3f;border-radius:%?40?%;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex}.buymarginmargin .buyblock .buy .typelist .typelistmargin .typeactive .iconfont[data-v-19fd0098]{width:%?40?%;font-size:%?30?%;color:#fff;margin-left:%?20?%;text-align:right}.buymarginmargin .buyblock .buy .typelist .typelistmargin .typeactive .items_text[data-v-19fd0098]{width:%?120?%;font-size:%?26?%;color:#fff;text-align:center}.buymarginmargin .buyblock .buy .title_tip[data-v-19fd0098]{margin:%?50?% %?50?% 0 %?50?%;width:calc(100% - %?100?%);display:-webkit-box;display:-webkit-flex;display:flex;height:%?60?%;line-height:%?60?%;background-color:#fbfbfb;border-radius:%?10?%}.buymarginmargin .buyblock .buy .title_tip .ttip_red[data-v-19fd0098]{margin-left:%?24?%;margin-right:%?10?%;font-size:%?24?%;color:#cf262c}.buymarginmargin .buyblock .buy .title_tip .ttip_text[data-v-19fd0098]{font-size:%?24?%;color:#666}.buymarginmargin .buyblock .buy .weight_title[data-v-19fd0098]{margin-top:%?50?%;margin-left:%?45?%;color:#999;font-size:%?24?%}.buymarginmargin .buyblock .buy .weight_list[data-v-19fd0098]{width:calc(100% - %?60?%);margin:0 %?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-justify-content:space-around;justify-content:space-around}.buymarginmargin .buyblock .buy .weight_list .weight_items[data-v-19fd0098]{width:%?206?%;height:%?74?%;line-height:%?74?%;background-color:#fff;border-radius:%?40?%;border:1px solid #f1f1f1;font-size:%?26?%;color:#373a3f;text-align:center}.buymarginmargin .buyblock .buy .weight_list .weightactive[data-v-19fd0098]{width:%?210?%;height:%?78?%;line-height:%?78?%;border:0;background-color:#373a3f;border-radius:%?40?%;color:#fff;font-size:%?26?%;color:#fff;text-align:center}body.?%PAGE?%[data-v-19fd0098]{background-color:#fdfdfd}',""]),e.exports=t},"59e5":function(e,t,i){"use strict";var a=i("d2ee"),d=i.n(a);d.a},7281:function(e,t,i){"use strict";var a,d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"top"},[i("v-uni-view",{staticClass:"status",staticStyle:{"{background":"#fff}"}}),i("v-uni-view",{staticClass:"nav-bar"},[i("v-uni-text",{staticClass:"title"},[e._v("闪电物流")]),i("v-uni-view",{staticClass:"share",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toohtersorder()}}},[i("v-uni-view",{staticClass:"iconfont iconwenjian1"})],1)],1),i("v-uni-view",{staticClass:"place",staticStyle:{"{height":"44upx"}})],1),i("v-uni-view",{staticClass:"main"},[i("v-uni-view",{staticClass:"address"},[i("v-uni-view",{staticClass:"addressLeft"},[i("v-uni-view",{staticClass:"leftSend"},[e._v("寄")]),i("v-uni-view",{staticClass:"leftLine"}),i("v-uni-view",{staticClass:"leftHave"},[e._v("收")])],1),i("v-uni-view",{staticClass:"addressRight"},[i("v-uni-view",{staticClass:"addressSend",staticStyle:{"margin-top":"20upx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addressone()}}},[i("v-uni-view",[e.sendaddressishave?i("v-uni-view",{staticClass:"addressSendLeft"},[i("v-uni-view",{staticClass:"addressSendLeftTop"},[i("v-uni-view",{staticClass:"sendName"},[e._v(e._s(e.sendaddresslist.name))]),i("v-uni-view",{staticClass:"sendMobile"},[e._v(e._s(e.sendaddresslist.mobile))])],1),i("v-uni-view",{staticClass:"addressSendLeftFoo"},[i("v-uni-view",{staticClass:"sendText"},[e._v(e._s(e.sendaddresslist.address))])],1)],1):e._e(),0==e.sendaddressishave?i("v-uni-view",{staticClass:"addressSendLeftnone"},[e._v("寄件人信息")]):e._e()],1),i("v-uni-view",{staticClass:"addressSendRight"},[i("v-uni-view",{staticClass:"iconfont icondizhibu"})],1)],1),i("v-uni-view",{staticClass:"xline"}),i("v-uni-view",{staticClass:"addressSend",staticStyle:{"margin-top":"30upx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addresstwo()}}},[i("v-uni-view",[e.getaddressishave?i("v-uni-view",{staticClass:"addressSendLeft"},[i("v-uni-view",{staticClass:"addressSendLeftTop"},[i("v-uni-view",{staticClass:"sendName"},[e._v(e._s(e.getaddresslist.name))]),i("v-uni-view",{staticClass:"sendMobile"},[e._v(e._s(e.getaddresslist.mobile))])],1),i("v-uni-view",{staticClass:"addressSendLeftFoo"},[i("v-uni-view",{staticClass:"sendText"},[e._v(e._s(e.getaddresslist.address))])],1)],1):e._e(),0==e.getaddressishave?i("v-uni-view",{staticClass:"addressSendLeftnone"},[e._v("收件人信息")]):e._e()],1),i("v-uni-view",{staticClass:"addressSendRight"},[i("v-uni-view",{staticClass:"iconfont icondizhibu"})],1)],1)],1)],1),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"items"},[i("v-uni-view",{staticClass:"title"},[e._v("快递单号")]),i("v-uni-view",{staticClass:"text"},[i("v-uni-input",{attrs:{maxlength:"20",type:"number",placeholder:"请输入快递单号","placeholder-style":"width: 450upx; color:#666;font-size:30upx;"},model:{value:e.orderdata["order_sn"],callback:function(t){e.$set(e.orderdata,"order_sn",t)},expression:"orderdata['order_sn']"}})],1)],1),i("v-uni-view",{staticClass:"itemscen"},[i("v-uni-view",{staticClass:"title"},[e._v("物品信息")]),i("v-uni-view",{staticClass:"itemsright",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.buyblock.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"text"},[e._v(e._s(e.goodweighttext))]),i("v-uni-view",{staticClass:"iconfont iconjiantou2"})],1)],1),i("v-uni-view",{staticClass:"items"},[i("v-uni-view",{staticClass:"title"},[e._v("备注信息")]),i("v-uni-view",{staticClass:"text"},[i("v-uni-input",{attrs:{maxlength:"20",type:"text",placeholder:"请输入订单备注信息","placeholder-style":"width: 450upx; color:#666;font-size:30upx;"},model:{value:e.orderdata["comment"],callback:function(t){e.$set(e.orderdata,"comment",t)},expression:"orderdata['comment']"}})],1)],1)],1)],1),i("v-uni-view",{staticClass:"fixed"},[i("v-uni-view",{staticClass:"fixed_left"},[i("v-uni-view",{staticClass:"fixed_lefttop"},[i("v-uni-view",{staticClass:"flt_left"},[e._v("预估总价")]),i("v-uni-view",{staticClass:"flt_right"},[e._v("￥"+e._s(e.bottompricenum))])],1),i("v-uni-view",{staticClass:"fixed_leftfoo"},[i("v-uni-view",{staticClass:"iconfont iconcorrect1"}),i("v-uni-view",{staticClass:"fixed_ltext"},[e._v("已阅读"),i("v-uni-text",{staticStyle:{"text-decoration":"underline"}},[e._v("《快件运单契约条款》")])],1)],1)],1),i("v-uni-view",{staticClass:"fixed_right",staticStyle:{"background-color":"#da1d31"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.gobuy.apply(void 0,arguments)}}},[e._v("下单")])],1)],1)},s=[];i.d(t,"b",(function(){return d})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return a}))},"86d3":function(e,t,i){"use strict";i.r(t);var a=i("3ec5"),d=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,(function(){return a[e]}))}(s);t["default"]=d.a},d2ee:function(e,t,i){var a=i("512b");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var d=i("4f06").default;d("75ad8974",a,!0,{sourceMap:!1,shadowMode:!1})}}]);