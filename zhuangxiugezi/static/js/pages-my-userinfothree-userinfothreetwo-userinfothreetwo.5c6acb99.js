(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-userinfothree-userinfothreetwo-userinfothreetwo"],{"212d":function(t,e,n){"use strict";var i=n("39d7"),o=n.n(i);o.a},2342:function(t,e,n){"use strict";n.r(e);var i=n("3ecb"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"39d7":function(t,e,n){var i=n("9445");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("7362ad9c",i,!0,{sourceMap:!1,shadowMode:!1})},"3ecb":function(t,e,n){"use strict";var i;n("26e9"),n("d3b7"),n("ac1f"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{listtmp:[{name:"a"},{name:"a"},{name:"a"},{name:"a"},{name:"a"},{name:"a"},{name:"a"},{name:"a"},{name:"a"},{name:"a"},{name:"a"},{name:"a"},{name:"a"}],userinfodetail:{},textnum:10,clamp:2,flowtext:"这是一条跟进记录详细信息~",flowtextlength:0,flowlist:[],imagelist:[],flowrolelist:[{name:"设计",select:!1},{name:"拆砌墙",select:!1},{name:"水电",select:!1},{name:"泥木",select:!1},{name:"油漆",select:!1},{name:"安装",select:!1},{name:"软装",select:!1},{name:"完工",select:!1},{name:"入住",select:!1}],flowroleblock:!1,projectid:"",flowroletext:"只看",postData:{page:1,limit:100,type:"",order_id:"",executor:""},lostpostData:{order_id:"",whylost:"a",save:!1}}},onLoad:function(){i=this,uni.getStorage({key:"tmp_detail",success:function(t){console.log(t),i.userinfodetail=t.data.customer_info,i.projectid=t.data.id,i.postData.order_id=i.projectid,i.getFlowlist(),i.getuserinfotext()}})},methods:{backClick:function(){uni.switchTab({url:"/pages/my/my"})},toaddflowClick:function(){uni.navigateTo({url:"/pages/my/userinfo/addflow/addflow?id="+i.projectid})},toPay:function(){uni.navigateTo({url:"/pages/my/userinfo/pay/pay"})},tolook:function(){uni.navigateTo({url:"/pages/my/userinfo/userinfocontent/userinfocontent"})},swichrole:function(t){i.postData.order_id=i.projectid,"0"==t?(i.postData.type="11",i.flowroletext="设计",i.getFlowlist()):"1"==t?(i.postData.type="21",i.flowroletext="拆砌墙",i.getFlowlist()):"2"==t?(i.postData.type="22",i.flowroletext="水电",i.getFlowlist()):"3"==t?(i.postData.type="23",i.flowroletext="泥木",i.getFlowlist()):"4"==t?(i.postData.type="24",i.flowroletext="油漆",i.getFlowlist()):"5"==t?(i.postData.type="25",i.flowroletext="安装",i.getFlowlist()):"6"==t?(i.postData.type="26",i.flowroletext="软装",i.getFlowlist()):"7"==t?(i.postData.type="31",i.flowroletext="完工",i.getFlowlist()):"8"==t&&(i.postData.type="32",i.flowroletext="入住",i.getFlowlist()),i.flowroleblock=!i.flowroleblock},getuserinfotext:function(){},getFlowlist:function(){i.post("api/follow/index",i.postData,(function(t){if(1===t.code)console.log(t),i.flowlist=t.data.rows,console.log(i.flowlist),i.each(i.flowlist,(function(t,e){console.log(e),e.pics=e.pics.split(",").reverse()}));else{var e=t.msg.split("(",2);i.echo(e[0])}}))},toWorkhandover:function(){uni.navigateTo({url:"/pages/my/userinfo/workhandover/workhandover"})},toLose:function(){return new Promise((function(t){uni.showModal({content:"是否取消客户流失状态？",confirmColor:"#FF9933",success:function(t){i.lostpostData.order_id=i.projectid,i.post("api/project/order_lost",i.lostpostData,(function(t){if(console.log(t),1===t.code)i.echo("成功取消客户流失状态！"),setTimeout((function(){uni.switchTab({url:"/pages/my/my"})}),500);else{var e=t.msg.split("(",2);i.echo(e[0])}}))},fail:function(){t(!1)}})}))},toContract:function(){uni.navigateTo({url:"/pages/my/userinfotwo/lookcontract/lookcontract?id="+i.projectid})},textmoreClock:function(t){console.log(t.length),"2"==i.clamp?i.clamp=1e3:i.clamp="2"},flowblockclick:function(){i.flowroleblock=!i.flowroleblock}}};e.default=o},"5acb":function(t,e,n){"use strict";n.r(e);var i=n("d283"),o=n("2342");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("212d");var l,c=n("f0c5"),s=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"c8cbe080",null,!1,i["a"],l);e["default"]=s.exports},9445:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.top .status[data-v-c8cbe080]{width:100%;height:0;position:fixed;z-index:10;top:0}.top .nav-bar[data-v-c8cbe080]{width:%?750?%;height:%?570?%;display:-webkit-box;display:-webkit-flex;display:flex;position:fixed;overflow:hidden;top:0;z-index:10}.top .nav-bar .top[data-v-c8cbe080]{width:100%;height:%?570?%;position:relative;background-color:#fff}.top .nav-bar .top .top_top[data-v-c8cbe080]{width:100%;height:%?470?%;position:relative;background-image:-webkit-linear-gradient(left,#2466ad,#2b7ed1);background-image:linear-gradient(90deg,#2466ad,#2b7ed1)}.top .nav-bar .top .top_top .title[data-v-c8cbe080]{width:100%;height:%?90?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.top .nav-bar .top .top_top .title .titleleft[data-v-c8cbe080]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#fff;font-size:%?32?%;margin-left:%?30?%}.top .nav-bar .top .top_top .title .titleleft .titlelefticon[data-v-c8cbe080]{margin-right:%?2?%}.top .nav-bar .top .top_top .title .titleleft .titlelefticon .iconfont[data-v-c8cbe080]{font-size:%?44?%}.top .nav-bar .top .top_top .title .titleright[data-v-c8cbe080]{color:#fff;font-size:%?30?%;margin-right:%?30?%}.top .nav-bar .top .top_top .name[data-v-c8cbe080]{width:100%;height:%?50?%;font-size:%?36?%;font-weight:800;color:#333;margin-left:%?30?%}.top .nav-bar .top .top_top .number[data-v-c8cbe080]{width:100%;height:%?45?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?12?%;font-size:%?30?%;font-weight:400;color:#333;margin-left:%?30?%}.top .nav-bar .top .top_top .number .number_left[data-v-c8cbe080]{margin-right:%?12?%}.top .nav-bar .top .top_top .number .number_right .iconfont[data-v-c8cbe080]{font-size:%?36?%;color:#333}.top .nav-bar .top .top_top .map[data-v-c8cbe080]{width:100%;height:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?6?%;font-size:%?30?%;font-weight:400;color:#333;margin-left:%?30?%}.top .nav-bar .top .top_top .map .map_left[data-v-c8cbe080]{margin-right:%?40?%}.top .nav-bar .top .top_top .map .map_right .iconfont[data-v-c8cbe080]{font-size:%?36?%;color:#333}.top .nav-bar .top .top_top .top_content[data-v-c8cbe080]{width:calc(100% %?-60?%);height:%?90?%;margin:%?20?% %?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-justify-content:space-around;justify-content:space-around}.top .nav-bar .top .top_top .top_content .contentone[data-v-c8cbe080]{width:%?220?%;height:%?80?%;background:#fff;border-radius:%?40?%;position:relative}.top .nav-bar .top .top_top .top_content .contentone .contentname[data-v-c8cbe080]{width:%?220?%;height:%?80?%}.top .nav-bar .top .top_top .top_content .contentone .contentname .contentname_name[data-v-c8cbe080]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:%?38?%;margin-top:%?18?%;height:%?62?%;line-height:%?62?%}.top .nav-bar .top .top_top .top_content .contentone .contentname .contentname_name .contentname_left[data-v-c8cbe080]{font-size:%?36?%;color:#333;width:%?110?%;height:%?62?%;line-height:%?62?%;text-align:center;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.top .nav-bar .top .top_top .top_content .contentone .contentname .contentname_name .contentname_right[data-v-c8cbe080]{height:%?62?%;line-height:%?62?%}.top .nav-bar .top .top_top .top_content .contentone .contentname .contentname_name .contentname_right .iconfont[data-v-c8cbe080]{font-size:%?40?%}.top .nav-bar .top .top_top .top_content .contentone .green[data-v-c8cbe080]{position:absolute;z-index:10;top:%?-7?%;left:%?25?%;width:%?170?%;height:%?32?%}.top .nav-bar .top .top_top .top_content .contentone .green uni-image[data-v-c8cbe080]{display:block;width:100%;height:100%}.top .nav-bar .top .top_top .top_content .contenttwo[data-v-c8cbe080]{width:%?220?%;height:%?80?%;background:#fff;border-radius:%?40?%;position:relative}.top .nav-bar .top .top_top .top_content .contenttwo .contentname[data-v-c8cbe080]{width:%?220?%;height:%?80?%}.top .nav-bar .top .top_top .top_content .contenttwo .contentname .contentname_name[data-v-c8cbe080]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:%?38?%;margin-top:%?18?%;height:%?62?%;line-height:%?62?%}.top .nav-bar .top .top_top .top_content .contenttwo .contentname .contentname_name .contentname_left[data-v-c8cbe080]{font-size:%?36?%;color:#333;width:%?110?%;height:%?62?%;line-height:%?62?%;text-align:center;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.top .nav-bar .top .top_top .top_content .contenttwo .contentname .contentname_name .contentname_right .iconfont[data-v-c8cbe080]{font-size:%?40?%}.top .nav-bar .top .top_top .top_content .contenttwo .green[data-v-c8cbe080]{position:absolute;z-index:10;top:%?-7?%;left:%?25?%;width:%?170?%;height:%?32?%}.top .nav-bar .top .top_top .top_content .contenttwo .green uni-image[data-v-c8cbe080]{display:block;width:100%;height:100%}.top .nav-bar .top .top_top .top_content .contentthree[data-v-c8cbe080]{width:%?220?%;height:%?80?%;background:#fff;border-radius:%?40?%;position:relative}.top .nav-bar .top .top_top .top_content .contentthree .contentname[data-v-c8cbe080]{width:%?220?%;height:%?80?%}.top .nav-bar .top .top_top .top_content .contentthree .contentname .contentname_name[data-v-c8cbe080]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:%?38?%;margin-top:%?18?%;height:%?62?%;line-height:%?62?%;height:%?62?%;line-height:%?62?%;text-align:center}.top .nav-bar .top .top_top .top_content .contentthree .contentname .contentname_name .contentname_left[data-v-c8cbe080]{font-size:%?36?%;color:#333;width:%?110?%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.top .nav-bar .top .top_top .top_content .contentthree .contentname .contentname_name .contentname_right .iconfont[data-v-c8cbe080]{font-size:%?40?%}.top .nav-bar .top .top_top .top_content .contentthree .green[data-v-c8cbe080]{position:absolute;z-index:10;top:%?-7?%;left:%?25?%;width:%?170?%;height:%?32?%}.top .nav-bar .top .top_top .top_content .contentthree .green uni-image[data-v-c8cbe080]{display:block;width:100%;height:100%}.top .nav-bar .top .top_list[data-v-c8cbe080]{position:absolute;bottom:%?10?%;left:%?30?%;width:%?690?%;height:%?180?%;background-color:#fff;border-radius:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden}.top .nav-bar .top .top_list .list_li[data-v-c8cbe080]{width:%?138?%;height:%?180?%;background-color:#fff}.top .nav-bar .top .top_list .list_li .list_litop[data-v-c8cbe080]{margin-top:%?30?%;text-align:center;width:%?138?%;height:%?86?%}.top .nav-bar .top .top_list .list_li .list_litop .iconfont[data-v-c8cbe080]{font-size:%?80?%;color:#2468b1}.top .nav-bar .top .top_list .list_li .list_lifoo[data-v-c8cbe080]{width:%?138?%;height:%?50?%;line-height:%?50?%;padding-top:%?4?%;color:#666;font-size:%?30?%;text-align:center}.top .place[data-v-c8cbe080]{height:%?570?%}.content[data-v-c8cbe080]{width:100%;height:100%;background-color:#fff}.content .addflow[data-v-c8cbe080]{height:%?86?%;margin:0 %?30?%;width:calc(100% - %?60?%);border-bottom:1px solid #f1f1f1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.content .addflow .addflow_left[data-v-c8cbe080]{width:%?150?%;height:%?86?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative}.content .addflow .addflow_left .iconfont[data-v-c8cbe080]{color:#666;font-size:%?38?%;width:%?40?%}.content .addflow .addflow_left .addflow_lefttext[data-v-c8cbe080]{width:%?110?%;text-align:center;padding-left:%?10?%;font-size:%?32?%;margin-right:%?6?%}.content .addflow .addflow_left .flowroleblock[data-v-c8cbe080]{position:absolute;z-index:5;top:%?88?%;left:0;width:%?150?%;background-color:#fff;border-left:1px solid #f1f1f1;border-right:1px solid #f1f1f1}.content .addflow .addflow_left .flowroleblock .flowrole_li[data-v-c8cbe080]{width:%?150?%;height:%?80?%;border-bottom:1px solid #f1f1f1;font-size:%?30?%;color:#333;text-align:center;line-height:%?80?%}.content .addflow .addflow_right[data-v-c8cbe080]{margin-left:auto;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.content .addflow .addflow_right .addflow_rightone[data-v-c8cbe080]{font-size:%?30?%;color:#333;margin-right:%?10?%}.content .addflow .addflow_right .addflow_righttwo[data-v-c8cbe080]{font-size:%?30?%;color:#333;margin-right:%?6?%}.content .addflow .addflow_right .iconfont[data-v-c8cbe080]{font-size:%?36?%;color:#2468b1}.content .flowcontent[data-v-c8cbe080]{width:100%;position:relative}.content .flowcontent .flowcontent_right[data-v-c8cbe080]{width:calc(100% - %?60?%);margin:0 %?30?%;border-bottom:1px solid #f5f5f5}.content .flowcontent .flowcontent_right .flowcontent_righttop[data-v-c8cbe080]{display:-webkit-box;display:-webkit-flex;display:flex;margin-top:%?20?%}.content .flowcontent .flowcontent_right .flowcontent_righttop .iconfont[data-v-c8cbe080]{color:#999;margin-right:%?20?%;font-size:%?30?%}.content .flowcontent .flowcontent_right .flowcontent_righttop .flowcontent_righttoptext[data-v-c8cbe080]{color:#999;font-size:%?24?%}.content .flowcontent .flowcontent_right .flowcontent_rightcenter[data-v-c8cbe080]{color:#999;font-size:%?24?%;margin-top:%?10?%}.content .flowcontent .flowcontent_right .flowcontent_rightremark[data-v-c8cbe080]{color:#333;font-size:%?30?%;margin-top:%?10?%;position:relative}.content .flowcontent .flowcontent_right .flowcontent_rightremark .fr_text[data-v-c8cbe080]{-webkit-box-orient:vertical;text-overflow:ellipsis;overflow:hidden}.content .flowcontent .flowcontent_right .flowcontent_rightremark .more[data-v-c8cbe080]{width:%?44?%;text-align:right;background-color:#fff;position:absolute;right:%?-10?%;bottom:0;display:-webkit-box;display:-webkit-flex;display:flex}.content .flowcontent .flowcontent_right .flowcontent_rightremark .more .text[data-v-c8cbe080]{width:%?100?%;text-align:right;font-size:%?34?%}.content .flowcontent .flowcontent_right .flowcontent_rightremark .more .iconfont[data-v-c8cbe080]{margin-left:%?4?%;text-align:right;color:#2468b1;font-size:%?40?%}.content .flowcontent .flowcontent_right .scrollimg[data-v-c8cbe080]{width:%?690?%;margin:%?30?% %?30?% 0 0;white-space:nowrap}.content .flowcontent .flowcontent_right .scrollimg .flowcontent_rightimgimg[data-v-c8cbe080]{margin-right:%?8?%;background-color:#fff;border-radius:%?10?%;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;overflow:hidden;width:%?150?%;height:%?150?%}.content .flowcontent .flowcontent_right .scrollimg .flowcontent_rightimgimg uni-image[data-v-c8cbe080]{width:100%;height:100%}.content .flowcontent .flowcontent_right .flowcontent_rightnext[data-v-c8cbe080]{color:#999;font-size:%?24?%;margin-top:%?10?%;padding-bottom:%?20?%}.content .paddingline[data-v-c8cbe080]{width:100%;height:%?40?%;background-color:#f5f5f5;position:relative}.content .paddingline .paddinglineline[data-v-c8cbe080]{position:absolute;width:%?4?%;height:%?40?%;margin-left:%?48?%;background-color:#1b82d1}',""]),t.exports=e},d283:function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"main"},[n("v-uni-view",{staticClass:"top"},[n("v-uni-view",{staticClass:"status",staticStyle:{"{background":"#fff}"}}),n("v-uni-view",{staticClass:"nav-bar"},[n("v-uni-view",{staticClass:"top"},[n("v-uni-view",{staticClass:"top_top"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-view",{staticClass:"titleleft",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.backClick.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"titlelefticon"},[n("v-uni-view",{staticClass:"iconfont iconleft"})],1),n("v-uni-view",{staticClass:"titlelefttext"},[t._v("返回")])],1),n("v-uni-view",{staticClass:"titleright",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tolook.apply(void 0,arguments)}}},[t._v("查看资料")])],1),n("v-uni-view",{staticClass:"name"},[t._v(t._s(t.userinfodetail.nickname))]),n("v-uni-view",{staticClass:"number"},[n("v-uni-view",{staticClass:"number_left"},[t._v(t._s(t.userinfodetail.mobile))]),n("v-uni-view",{staticClass:"number_right"},[n("v-uni-view",{staticClass:"iconfont icondianhua"})],1)],1),n("v-uni-view",{staticClass:"map"},[n("v-uni-view",{staticClass:"map_left"},[t._v("保利时代3期")]),n("v-uni-view",{staticClass:"map_right"},[n("v-uni-view",{staticClass:"iconfont iconditu"})],1)],1),n("v-uni-view",{staticClass:"top_content"},[n("v-uni-view",{staticClass:"contentone"},[n("v-uni-view",{staticClass:"contentname"},[n("v-uni-view",{staticClass:"contentname_name"},[n("v-uni-view",{staticClass:"contentname_left"},[t._v("未设置")]),n("v-uni-view",{staticClass:"contentname_right"},[n("v-uni-view",{staticClass:"iconfont icondianhua"})],1)],1)],1),n("v-uni-view",{staticClass:"green"},[n("v-uni-image",{attrs:{src:"/static/img/green1.png",mode:"aspectFill"}})],1)],1),n("v-uni-view",{staticClass:"contenttwo"},[n("v-uni-view",{staticClass:"contentname"},[n("v-uni-view",{staticClass:"contentname_name"},[n("v-uni-view",{staticClass:"contentname_left"},[t._v("梁总")]),n("v-uni-view",{staticClass:"contentname_right"},[n("v-uni-view",{staticClass:"iconfont icondianhua"})],1)],1)],1),n("v-uni-view",{staticClass:"green"},[n("v-uni-image",{attrs:{src:"/static/img/green2.png",mode:"aspectFill"}})],1)],1),n("v-uni-view",{staticClass:"contentthree"},[n("v-uni-view",{staticClass:"contentname"},[n("v-uni-view",{staticClass:"contentname_name"},[n("v-uni-view",{staticClass:"contentname_left"},[t._v("雷总")]),n("v-uni-view",{staticClass:"contentname_right"},[n("v-uni-view",{staticClass:"iconfont icondianhua"})],1)],1)],1),n("v-uni-view",{staticClass:"green"},[n("v-uni-image",{attrs:{src:"/static/img/green3.png",mode:"aspectFill"}})],1)],1)],1),n("v-uni-view",{staticStyle:{width:"100%",height:"88upx"}})],1),n("v-uni-view",{staticStyle:{height:"100upx",width:"100%","background-color":"#f5f5f5"}}),n("v-uni-view",{staticClass:"top_foo"},[n("v-uni-view",{staticClass:"top_list"},[n("v-uni-view",{staticClass:"list_li",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toContract.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"list_litop"},[n("v-uni-view",{staticClass:"iconfont iconzhaoxiangji"})],1),n("v-uni-view",{staticClass:"list_lifoo"},[t._v("查看合同")])],1),n("v-uni-view",{staticClass:"list_li",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toLose.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"list_litop"},[n("v-uni-view",{staticClass:"iconfont iconxiugaigerentouxiang-"})],1),n("v-uni-view",{staticClass:"list_lifoo"},[t._v("取消流失")])],1),n("v-uni-view",{staticClass:"list_li",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toPay.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"list_litop"},[n("v-uni-view",{staticClass:"iconfont iconmoney"})],1),n("v-uni-view",{staticClass:"list_lifoo"},[t._v("金额缴费")])],1),n("v-uni-view",{staticClass:"list_li"},[n("v-uni-view",{staticClass:"list_litop"},[n("v-uni-view",{staticClass:"iconfont icontrefresh"})],1),n("v-uni-view",{staticClass:"list_lifoo"},[t._v("时间提醒")])],1),n("v-uni-view",{staticClass:"list_li",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toWorkhandover.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"list_litop"},[n("v-uni-view",{staticClass:"iconfont icontubiaozhizuomoban"})],1),n("v-uni-view",{staticClass:"list_lifoo"},[t._v("工作交接")])],1)],1)],1)],1)],1),n("v-uni-view",{staticClass:"place",staticStyle:{"{height":"448upx"}})],1),n("v-uni-view",{staticStyle:{height:"20upx",width:"100%","background-color":"#f5f5f5"}}),n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"addflow"},[n("v-uni-view",{staticClass:"addflow_left"},[n("v-uni-view",{staticClass:"addflow_lefttext",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.flowblockclick.apply(void 0,arguments)}}},[t._v(t._s(t.flowroletext))]),n("v-uni-view",{class:["iconfont",t.flowroleblock?"iconup":"icondown"],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.flowblockclick.apply(void 0,arguments)}}}),t.flowroleblock?n("v-uni-view",{staticClass:"flowroleblock"},t._l(t.flowrolelist,(function(e,i){return n("v-uni-view",{key:i,staticClass:"flowrole_li",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.swichrole(i)}}},[t._v(t._s(e.name))])})),1):t._e()],1),n("v-uni-view",{staticClass:"addflow_right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toaddflowClick.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"addflow_rightone"},[t._v("跟进记录")]),n("v-uni-view",{staticClass:"addflow_righttwo"},[t._v("添加")]),n("v-uni-view",{staticClass:"iconfont iconzengjia"})],1)],1),0==t.flowlist.length?n("v-uni-view",{staticClass:"xlistmargin"},[t._v("暂无跟进内容哦~")]):t._e(),t._l(t.flowlist,(function(e,i){return 0!==t.flowlist.length?n("v-uni-view",{key:i,staticClass:"flowcontent"},[n("v-uni-view",{staticClass:"flowcontent_right"},[n("v-uni-view",{staticClass:"flowcontent_righttop"},[n("v-uni-view",{staticClass:"flowcontent_righttoptext"},[t._v("2019/10/31 10:10")])],1),n("v-uni-view",{staticClass:"flowcontent_rightcenter"},[t._v("跟进人：吴婷婷")]),n("v-uni-view",{staticClass:"flowcontent_rightremark"},[n("v-uni-view",{staticClass:"fr_text",style:"-webkit-line-clamp:"+t.clamp+";"},[t._v(t._s(e.remarks))]),e.remarks.length>"47"?n("v-uni-view",{staticClass:"more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.textmoreClock(t.flowtext)}}},[n("v-uni-view",{class:["iconfont","2"==t.clamp?"icondown":"iconup"]})],1):t._e()],1),n("v-uni-scroll-view",{staticClass:"scrollimg",attrs:{"scroll-x":"true"}},t._l(e.pics,(function(t,e){return n("v-uni-view",{key:e,staticClass:"flowcontent_rightimgimg"},[n("v-uni-image",{attrs:{"lazy-load":!0,src:t,mode:"aspectFill"}})],1)})),1),n("v-uni-view",{staticClass:"flowcontent_rightnext"},[t._v("下次跟进时间： 2019/10/10 10:10")])],1)],1):t._e()}))],2)],1)],1)},a=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))}}]);