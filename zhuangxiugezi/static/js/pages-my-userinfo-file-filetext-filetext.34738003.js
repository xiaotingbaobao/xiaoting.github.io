(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-userinfo-file-filetext-filetext"],{"0937":function(e,i,t){"use strict";var o={uniPopup:t("8b29").default},n=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",[t("v-uni-view",{staticClass:"topmargin"},[t("v-uni-view",{staticClass:"status",staticStyle:{"{background":"#fff}"}}),t("v-uni-view",{staticClass:"nav-bar"},[e.menushow?e._e():t("v-uni-view",{staticClass:"back",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.backfee.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"iconfont iconleft"}),t("v-uni-view",{staticClass:"text"},[e._v("返回")])],1),e.menushow?t("v-uni-view",{staticClass:"back",staticStyle:{left:"30upx"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.cancelmenushow.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"text"},[e._v("取消")])],1):e._e(),t("v-uni-text",{staticClass:"title"},[e._v("客户资料")])],1),t("v-uni-view",{staticClass:"place",staticStyle:{"{height":"44upx"}})],1),t("v-uni-view",{staticClass:"mainmenumargin"},[t("v-uni-view",{staticClass:"mainmenu"},[t("v-uni-view",{staticClass:"xpadding"}),t("v-uni-view",{staticClass:"xxtabber"},[t("v-uni-view",{class:["items","one"===e.tab?"active":""],on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.tgTab("one")}}},[t("v-uni-text",[e._v("设计施工图")])],1),t("v-uni-view",{class:["items","two"===e.tab?"active":""],on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.tgTab("two")}}},[t("v-uni-text",[e._v("报价清单")])],1),t("v-uni-view",{class:["items","three"===e.tab?"active":""],on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.tgTab("three")}}},[t("v-uni-text",[e._v("重要资料")])],1)],1)],1)],1),t("v-uni-view",{staticStyle:{width:"100%",height:"130upx","background-color":"#fafafa"}}),t("v-uni-view",{staticClass:"main"},[0==e.filelistdata.length?t("v-uni-view",{staticClass:"xlistmargin"},[e._v("暂无文件！")]):e._e(),t("v-uni-view",{staticClass:"filelist"},[e._l(e.filelistdata,(function(i,o){return t("v-uni-view",{key:o,staticClass:"flowtwolistmargin",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.lookfile(i,o)},longpress:function(t){arguments[0]=t=e.$handleEvent(t),e.longclick(i,o)}}},[t("v-uni-view",{staticClass:"flowtwolist_li"},[t("v-uni-view",{staticClass:"flowtwolist_lileft"},[t("v-uni-view",{staticClass:"flowtwolist_lilefttop"},[i.imgstyle?e._e():t("v-uni-view",{staticClass:"iconone"},[t("v-uni-image",{attrs:{src:i.iconimg}})],1),i.imgstyle?t("v-uni-view",{staticClass:"iconimage"},[t("v-uni-image",{attrs:{src:i.s_pic}})],1):e._e()],1)],1),t("v-uni-view",{staticClass:"flowtwolist_liright"},[i.imgstyle?e._e():t("v-uni-view",{staticClass:"flowli_rightname"},[e._v(e._s(i.ofname))]),i.imgstyle?t("v-uni-view",{staticClass:"flowli_rightname"},[e._v(e._s(i.name))]):e._e(),t("v-uni-view",{staticClass:"flowli_rightfoo"},[t("v-uni-view",{staticClass:"flowli_rightfooleft"},[e._v(e._s(i.createtime))]),t("v-uni-view",{staticClass:"flowli_rightfooright"},[e._v(e._s(i.size))])],1)],1),e.menushow?t("v-uni-view",{staticClass:"irighttwo"},[t("v-uni-view",{class:["iconfont",i.ischeck?"iconxuanzhong":"iconxuanzhongyuandian"]})],1):e._e()],1),t("v-uni-view",{staticStyle:{height:"20upx",width:"100%"}})],1)})),e.filelistnum>10&&0!==e.filelistdata.length?t("v-uni-view",{staticClass:"loading-text"},[e._v(e._s(e.loadMoreTextone))]):e._e()],2)],1),t("l-file",{ref:"lFile",on:{"up-success":function(i){arguments[0]=i=e.$handleEvent(i),e.onSuccess.apply(void 0,arguments)}}}),"android"==e.phonetype?t("v-uni-view",{staticClass:"xfixedplace",staticStyle:{width:"100%",height:"220upx"}}):e._e(),e.menushow?t("v-uni-view",{staticClass:"menu_fixed"},[0==e.checknum||1==e.checknum?t("v-uni-view",{staticClass:"left",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.changename.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"iconfont iconi"}),t("v-uni-view",{staticClass:"text"},[e._v("重命名")])],1):e._e(),0==e.checknum||1==e.checknum?t("v-uni-view",{staticClass:"left",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.downLoad()}}},[t("v-uni-view",{staticClass:"iconfont iconxiazai1"}),t("v-uni-view",{staticClass:"text"},[e._v("下载")])],1):e._e(),t("v-uni-view",{staticClass:"left",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.deletefileitemsclick()}}},[t("v-uni-view",{staticClass:"iconfont iconshanchu1"}),t("v-uni-view",{staticClass:"text"},[e._v("删除")])],1)],1):e._e(),t("uni-popup",{ref:"dialogInput",attrs:{type:"dialog"},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.change.apply(void 0,arguments)}}},[t("uni-popup-dialog",{attrs:{mode:"input",title:"重命名",value:e.changeitemsname,placeholder:"请输入内容"},on:{confirm:function(i){arguments[0]=i=e.$handleEvent(i),e.dialogInputConfirm.apply(void 0,arguments)}}})],1),t("graceFullLoading",{attrs:{graceFullLoading:e.graceFullLoading,logoUrl:"/static/img/logoone.gif"}}),!e.menushow&&e.ismanager&&"android"==e.phonetype?t("v-uni-view",{staticClass:"filebutton"},[t("v-uni-view",{staticClass:"left",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.chooseFile.apply(void 0,arguments)}}},[e._v("上传文件"),t("v-uni-text",[e._v("(10M以内)")])],1),t("v-uni-view",{staticClass:"right",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.chooseFiletwo.apply(void 0,arguments)}}},[e._v("上传图片")])],1):e._e()],1)},a=[];t.d(i,"b",(function(){return n})),t.d(i,"c",(function(){return a})),t.d(i,"a",(function(){return o}))},"134b":function(e,i,t){"use strict";t.r(i);var o=t("0937"),n=t("1858");for(var a in n)"default"!==a&&function(e){t.d(i,e,(function(){return n[e]}))}(a);t("9dae");var l,s=t("f0c5"),c=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"5c70bbf7",null,!1,o["a"],l);i["default"]=c.exports},1858:function(e,i,t){"use strict";t.r(i);var o=t("5048"),n=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(i,e,(function(){return o[e]}))}(a);i["default"]=n.a},"4c33":function(e,i,t){var o=t("24fb");i=o(!1),i.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.topmargin .status[data-v-5c70bbf7]{width:100%;height:0;position:fixed;background-image:-webkit-linear-gradient(left,#2466ad,#2b7ed1);background-image:linear-gradient(90deg,#2466ad,#2b7ed1);z-index:10;top:0}.topmargin .nav-bar[data-v-5c70bbf7]{width:100%;height:%?88?%;line-height:%?88?%;background-image:-webkit-linear-gradient(left,#2466ad,#2b7ed1);background-image:linear-gradient(90deg,#2466ad,#2b7ed1);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;overflow:hidden;top:0;z-index:10\r\n  /* .back {\r\n\t\t\tmargin: 0 2px;\r\n\t\t\twidth: 27px;\r\n\t\t\theight: 30px;\r\n\t\t\tflex-shrink: 0;\r\n\t\t}\r\n\t\t.middle {\r\n\t\t\tcolor: white;\r\n\t\t\twidth: 80%;\r\n\t\t\theight: 44px;\r\n\t\t\tline-height: 44px;\r\n\t\t\tpadding: 0 10%;\r\n\t\t\tfont-size: 16px;\r\n\t\t\ttext-align: center;\r\n\t\t}\r\n\t\t.icon-btn {\r\n\t\t\tmargin: 0 2px;\r\n\t\t\twidth: 27px;\r\n\t\t\theight: 30px;\r\n\t\t\tflex-shrink: 0;\r\n\t\t\tdisplay: flex;\r\n\t\t\tjustify-content: flex-end;\r\n\t\t\t.iconfont {\r\n\t\t\t\tcolor: white;\r\n\t\t\t\twidth: 27px;\r\n\t\t\t\theight: 27px;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tfont-size: 21px;\r\n\t\t\t}\r\n\t\t} */}.topmargin .nav-bar .topimg[data-v-5c70bbf7]{width:%?45?%;height:%?45?%;margin-left:%?33?%;overflow:hidden}.topmargin .nav-bar .topimg uni-image[data-v-5c70bbf7]{width:100%;height:100%}.topmargin .nav-bar .back[data-v-5c70bbf7]{height:%?88?%;position:absolute;left:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.topmargin .nav-bar .back .iconfont[data-v-5c70bbf7]{font-size:%?40?%;color:#fff;line-height:%?90?%}.topmargin .nav-bar .back .text[data-v-5c70bbf7]{font-size:%?32?%;color:#fff}.topmargin .nav-bar .avatar[data-v-5c70bbf7]{height:%?45?%;line-height:%?45?%;border-radius:50%;position:absolute;right:%?30?%;top:%?22?%;color:#fff;font-size:%?32?%}.topmargin .nav-bar .avatar .avatar_text[data-v-5c70bbf7]{font-size:%?32?%;color:#fff}.topmargin .nav-bar .avatar .tipnum[data-v-5c70bbf7]{position:absolute;right:%?-2?%;top:%?-2?%;font-size:%?22?%;color:#fff;width:%?22?%;height:%?22?%;line-height:%?22?%;border-radius:50%;text-align:center;background-color:#ef261e}.topmargin .nav-bar .avatar .cloak[data-v-5c70bbf7]{display:block}.topmargin .nav-bar .avatar uni-image[data-v-5c70bbf7]{display:block;width:%?45?%;height:%?45?%}.topmargin .nav-bar .avatar .iconfont[data-v-5c70bbf7]{font-size:%?42?%;color:#fff}.topmargin .nav-bar .title[data-v-5c70bbf7]{width:100%;height:%?88?%;line-height:%?88?%;font-size:%?38?%;color:#fff;text-align:center;background-image:-webkit-linear-gradient(left,#2466ad,#2b7ed1);background-image:linear-gradient(90deg,#2466ad,#2b7ed1)}.topmargin .nav-bar .stt[data-v-5c70bbf7]{line-height:%?110?%;font-size:%?30?%;color:#fff;position:absolute;right:%?30?%;top:0}.topmargin .place[data-v-5c70bbf7]{height:%?88?%}uni-page-body[data-v-5c70bbf7]{background-color:#f9f9f9;height:100%}.main .filelist[data-v-5c70bbf7]{width:100%}.main .filelist .flowtwolistmargin .flowtwolist_li[data-v-5c70bbf7]{width:100%;height:%?168?%;border-top:1px solid #f1f1f1;border-bottom:1px solid #f1f1f1;display:-webkit-box;display:-webkit-flex;display:flex;background-color:#fff;position:relative}.main .filelist .flowtwolistmargin .flowtwolist_li .irighttwo[data-v-5c70bbf7]{position:absolute;right:%?30?%;top:%?20?%;font-size:%?30?%;margin-left:%?20?%}.main .filelist .flowtwolistmargin .flowtwolist_li .irighttwo .iconxuanzhong[data-v-5c70bbf7]{font-size:%?36?%;color:#2468b1}.main .filelist .flowtwolistmargin .flowtwolist_li .irighttwo .iconxuanzhongyuandian[data-v-5c70bbf7]{font-size:%?36?%;color:#999}.main .filelist .flowtwolistmargin .flowtwolist_li .flowtwolist_lileft[data-v-5c70bbf7]{margin:%?24?% 0;height:%?120?%;border-right:1px solid #f1f1f1;width:%?154?%}.main .filelist .flowtwolistmargin .flowtwolist_li .flowtwolist_lileft .flowtwolist_lilefttop .iconone[data-v-5c70bbf7]{margin-left:%?50?%;width:%?60?%;height:%?60?%;margin-top:%?30?%;border-radius:%?10?%;overflow:hidden}.main .filelist .flowtwolistmargin .flowtwolist_li .flowtwolist_lileft .flowtwolist_lilefttop .iconone uni-image[data-v-5c70bbf7]{width:100%;height:100%}.main .filelist .flowtwolistmargin .flowtwolist_li .flowtwolist_lileft .flowtwolist_lilefttop .iconimage[data-v-5c70bbf7]{margin-left:%?40?%;width:%?80?%;height:%?80?%;margin-top:%?20?%;border-radius:%?10?%;overflow:hidden}.main .filelist .flowtwolistmargin .flowtwolist_li .flowtwolist_lileft .flowtwolist_lilefttop .iconimage uni-image[data-v-5c70bbf7]{width:%?80?%;height:%?80?%}.main .filelist .flowtwolistmargin .flowtwolist_li .flowtwolist_lileft .flowtwolist_lileftfoo[data-v-5c70bbf7]{width:%?118?%;margin-top:%?10?%;height:%?40?%;line-height:%?40?%;margin-left:%?30?%;text-align:center;font-size:%?28?%;color:#666;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.main .filelist .flowtwolistmargin .flowtwolist_li .flowtwolist_liright[data-v-5c70bbf7]{width:%?560?%;margin-left:%?10?%;margin-right:%?30?%}.main .filelist .flowtwolistmargin .flowtwolist_li .flowtwolist_liright .flowli_rightname[data-v-5c70bbf7]{max-width:%?520?%;color:#666;font-size:%?30?%;margin-top:%?35?%;height:%?40?%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.main .filelist .flowtwolistmargin .flowtwolist_li .flowtwolist_liright .flowli_rightcen[data-v-5c70bbf7]{color:#666;font-size:%?26?%;height:%?54?%;line-height:%?54?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.main .filelist .flowtwolistmargin .flowtwolist_li .flowtwolist_liright .flowli_rightcen .fr_left[data-v-5c70bbf7]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-right:%?7?%}.main .filelist .flowtwolistmargin .flowtwolist_li .flowtwolist_liright .flowli_rightcen .fr_right[data-v-5c70bbf7]{text-align:right;color:#2468b1;font-size:%?26?%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.main .filelist .flowtwolistmargin .flowtwolist_li .flowtwolist_liright .flowli_rightfoo[data-v-5c70bbf7]{margin-top:%?20?%;height:%?30?%;line-height:%?30?%;width:100%;color:#666;font-size:%?26?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.main .filelist .flowtwolistmargin .flowtwolist_li .flowtwolist_liright .flowli_rightfoo .flowli_rightfooleft[data-v-5c70bbf7]{color:#999;font-size:%?24?%;min-width:%?200?%;margin-right:%?7?%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.main .filelist .flowtwolistmargin .flowtwolist_li .flowtwolist_liright .flowli_rightfoo .flowli_rightfooright[data-v-5c70bbf7]{max-width:%?355?%;color:#cdcdcd;font-size:%?24?%;text-align:right;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.main .filelist .flowtwolistmargin .flowtwolist_li .flowtwolist_liright .flowli_rightfoo .flowli_rightfoorighttwo[data-v-5c70bbf7]{color:#cdcdcd;font-size:%?24?%}.main .filelist .flowtwolistmargin .flowtwolist_li .redblock[data-v-5c70bbf7]{position:absolute;top:%?-10?%;right:%?20?%;text-align:center}.main .filelist .flowtwolistmargin .flowtwolist_li .redblock .iconfont[data-v-5c70bbf7]{color:#2468b1;font-size:%?70?%}.main .addfile[data-v-5c70bbf7]{width:%?690?%;height:%?400?%;margin:%?30?% %?30?% 0 %?30?%;background-color:#f4f5f5;border-radius:%?20?%;position:relative}.main .addfile .topicon[data-v-5c70bbf7]{position:absolute;left:%?285?%;top:%?120?%;width:%?120?%;height:%?120?%;text-align:center;line-height:%?120?%;border-radius:%?10?%;border:1px solid #999}.main .addfile .topicon .iconfont[data-v-5c70bbf7]{color:#999;font-size:%?50?%}.main .addfile .text[data-v-5c70bbf7]{padding-top:%?260?%;text-align:center;font-size:%?40?%;color:#999}.mainmenumargin[data-v-5c70bbf7]{position:fixed;top:%?88?%;z-index:10;background-color:#f9f9f9}.mainmenu[data-v-5c70bbf7]{width:100%;height:100%;background-color:#fafafa}.mainmenu .mtabber[data-v-5c70bbf7]{width:%?690?%;height:%?160?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fafafa;padding:0 %?30?% 0 %?30?%}.mainmenu .mtabber .items[data-v-5c70bbf7]{width:calc(100% / 2);height:%?160?%;font-size:%?34?%;color:#666;text-align:center;position:relative}.mainmenu .mtabber .items .mimage[data-v-5c70bbf7]{width:%?80?%;height:%?80?%;padding-top:%?10?%;padding-bottom:%?10?%;margin:0 auto}.mainmenu .mtabber .items .mimage uni-image[data-v-5c70bbf7]{width:100%;height:100%}.mainmenu .mtabber .items .mimage .iconfont[data-v-5c70bbf7]{font-size:%?86?%;color:#666}.mainmenu .mtabber .items uni-text[data-v-5c70bbf7]{height:%?60?%;font-size:%?30?%;color:#333}.mainmenu .mtabber .active .mimage .iconfont[data-v-5c70bbf7]{font-size:%?86?%;color:#2468b1}.mainmenu .mtabber .active uni-text[data-v-5c70bbf7]{height:%?60?%;font-size:%?30?%;color:#2468b1}.mainmenu .mtabber .active[data-v-5c70bbf7]:after{position:absolute;bottom:0;left:5%;width:90%;height:%?5?%;content:"";background:-webkit-linear-gradient(left,#2466ad,#2b7ed1);background:linear-gradient(90deg,#2466ad,#2b7ed1)}.fixed_add[data-v-5c70bbf7]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border:3px solid #999;position:fixed;bottom:%?40?%;width:%?120?%;height:%?120?%;line-height:%?120?%;z-index:100;border-radius:50%;margin-left:%?315?%}.fixed_add .iconfont[data-v-5c70bbf7]{font-size:%?80?%;color:#999;text-align:center}.fixed_add .text[data-v-5c70bbf7]{font-size:%?36?%;color:#fff}.menu_fixed[data-v-5c70bbf7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?100?%;background:-webkit-linear-gradient(left,#2466ad,#2b7ed1);background:linear-gradient(90deg,#2466ad,#2b7ed1);position:fixed;bottom:0;width:100%;-webkit-justify-content:space-around;justify-content:space-around;z-index:999!important}.menu_fixed .left[data-v-5c70bbf7]{width:100%;height:%?100?%;text-align:center}.menu_fixed .left .iconfont[data-v-5c70bbf7]{font-size:%?36?%;color:#fff;margin-top:%?10?%}.menu_fixed .left .text[data-v-5c70bbf7]{margin-top:%?2?%;font-size:%?24?%;color:#fff}.xxtabber[data-v-5c70bbf7]{width:%?690?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff;padding:0 %?30?% 0 %?30?%}.xxtabber .items[data-v-5c70bbf7]{width:calc(100% / 3);line-height:%?88?%;font-size:%?36?%;color:#666;text-align:center;position:relative}.xxtabber .active[data-v-5c70bbf7]{color:#2468b1}.xxtabber .active[data-v-5c70bbf7]:after{position:absolute;bottom:0;left:0;width:100%;height:%?5?%;content:"";background:-webkit-linear-gradient(left,#2466ad,#2b7ed1);background:linear-gradient(90deg,#2466ad,#2b7ed1)}.filebutton[data-v-5c70bbf7]{display:-webkit-box;display:-webkit-flex;display:flex;width:%?646?%;position:fixed;bottom:%?40?%;left:%?50?%;height:%?86?%;border:2px solid #2468b1;border-radius:%?30?%;background-color:#fff;overflow:hidden}.filebutton .left[data-v-5c70bbf7]{width:%?321?%;border-right:2px solid #2468b1;height:%?86?%;font-size:%?32?%;color:#2468b1;text-align:center;line-height:%?86?%}.filebutton .left uni-text[data-v-5c70bbf7]{font-size:%?24?%;color:#999}.filebutton .right[data-v-5c70bbf7]{width:%?321?%;height:%?86?%;font-size:%?32?%;color:#2468b1;text-align:center;line-height:%?86?%}.grace-full-loading[data-v-5c70bbf7]{width:100%;height:calc(100% - %?200?%);background:#fff;position:fixed;z-index:99;left:0;top:%?200?%}body.?%PAGE?%[data-v-5c70bbf7]{background-color:#f9f9f9}',""]),e.exports=i},5048:function(e,i,t){"use strict";var o=t("ee27");t("99af"),t("c975"),t("baa5"),t("a434"),t("b680"),t("d3b7"),t("ac1f"),t("1276"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,t("96cf");var n,a=o(t("c964")),l=o(t("c4fc")),s=o(t("92fa")),c=o(t("9fee")),f={components:{lFile:l.default,uniPopupDialog:s.default,graceFullLoading:c.default},data:function(){return{graceFullLoading:!0,projectid:"",filelistdata:[],imageSrc:"",userinfo:{},path:"",iscompany:"",changeshow:!1,ismanager:!1,tab:"one",menushow:!1,checknum:0,msgType:"success",changeitemsname:"",changefilenamedata:{},usertoken:"",loadMoreTextone:"加载中...",showLoadMoreone:!1,loadMoreTexttwo:"加载中...",showLoadMoretwo:!1,loadMoreTextthree:"加载中...",showLoadMorethree:!1,pageone:1,pagetwo:1,pagethree:1,limit:100,list:[],listtwo:[],canUploadFile:!0,canUploadFiletwo:!1,imageList:[],picslist:[],filelistnum:"",phonetype:""}},onUnload:function(){n.pageone=1,n.pagetwo=1,n.pagethree=1,n.filelistdata=[],n.loadMoreTextone="加载中...",n.loadMoreTexttwo="加载中...",n.loadMoreTextthree="加载中...",n.showLoadMoreone=!1,n.showLoadMoretwo=!1,n.showLoadMorethree=!1},onReachBottom:function(){console.log("onReachBottom"),n.onbottomone()},onPullDownRefresh:function(){n.graceFullLoading=!0,console.log("refresh"),n.pageone=1,n.pagetwo=1,n.pagethree=1,n.loadMoreTextone="加载中...",n.loadMoreTexttwo="加载中...",n.loadMoreTextthree="加载中...",n.showLoadMoreone=!1,n.showLoadMoretwo=!1,n.showLoadMorethree=!1,setTimeout((function(){n.getfilelist()}),200)},onLoad:function(e){n=this,n.projectid=e.id,"false"==e.role?n.ismanager=!1:"true"==e.role&&(n.ismanager=!0),"ios"==uni.getSystemInfoSync().platform?(n.isshowuploadH5(),n.$set(n,"phonetype","ios")):"android"==uni.getSystemInfoSync().platform&&n.$set(n,"phonetype","android"),n.getuser((function(e){console.log(e),n.userinfo=e.data,n.iscompany=n.userinfo.userinfo.role.split("|")[1]})),n.getuser((function(e){n.usertoken=e.data.token,console.log(n.usertoken),n.getfilelist()}))},methods:{updateimg:function(e){console.log("***********************************"),console.log(e),console.log(n.imageList.length),uni.uploadFile({url:n.config.host+"api/common/upload?token="+n.userinfo.token,filePath:n.imageList[e],fileType:"image",name:"file",formData:{},success:function(i){var t;t=i.data;var o=JSON.parse(t);n.picslist.push(o.data.url),e++,e<n.imageList.length?(console.log("还要传哦~"),n.updateimg(e)):(console.log("kkkkkkkkkkkkkkkkkkkkkkysc"),n.gitimagea())},fail:function(e){uni.showModal({content:e.errMsg,showCancel:!1})}})},gitimagea:function(){var e=0;n.gitimagepost(e)},gitimagepost:function(e){var i="";"one"==n.tab?i="CAD":"two"==n.tab?i="Office":"three"==n.tab&&(i="Files");var t=n.picslist[e],o=t.lastIndexOf("/"),a=t.substr(o+1);n.post("api/file/add",{user_id:n.userinfo.id,order_id:n.projectid,pathfile:n.picslist[e],name:a,company_id:n.iscompany,class:i},(function(i){1===i.code?(console.log(i),e++,e<n.picslist.length?(console.log("第几次上传~"+e),n.gitimagepost(e)):(console.log("都传完啦~~~~"),uni.hideLoading(),n.echo("上传成功~"),n.getfilelist(),uni.setStorage({key:"willUpdate",data:!0}))):(uni.showToast({title:"上传失败"}),console.log("ssssssssssssssssssssssssssssssssssssssb"),console.log(n.userinfo.id),console.log(n.projectid),console.log(n.iscompany),console.log(i.msg))}))},loopimage:function(){console.log(n.picslist.length),console.log(n.imageList.length),uni.showLoading({title:"图片上传中..."});var e=0;n.updateimg(e)},uploadSuccess:function(e,i){if(200==e.statusCode){var t=e.data,o=JSON.parse(t),a="";a=o.data.FILES.file.name;var l="";l=o.data.pathfile;var s="";"one"==n.tab?s="CAD":"two"==n.tab?s="Office":"three"==n.tab&&(s="Files"),n.post("api/file/add",{user_id:n.userinfo.id,order_id:n.projectid,pathfile:l,name:a,ofname:i,company_id:n.iscompany,class:s},(function(e){1===e.code?(console.log(e),n.graceFullLoading=!0,uni.hideLoading(),n.echo("上传成功~"),n.filelistdata=[],n.getfilelist(),uni.setStorage({key:"willUpdate",data:!0})):(uni.showToast({title:"上传失败"}),console.log("ssssssssssssssssssssssssssssssssssssssb"),console.log(n.userinfo.id),console.log(n.projectid),console.log(bb.data.pathfile),console.log(a),console.log(n.iscompany),console.log(e.msg))}))}else uni.showToast({title:"上传失败111",icon:"none"})},downLoad:function(e){var i;uni.showLoading({title:"下载中,请稍后"}),n.each(n.filelistdata,(function(e,t){t.ischeck&&(i=t.pathfile)})),console.log(i),uni.downloadFile({url:i,success:function(e){e.tempFilePath;console.log(e),uni.saveFile({tempFilePath:e.tempFilePath,success:function(e){console.log(e);var i=e.savedFilePath;uni.hideLoading(),n.echo("保存成功，路径为"+i)}})},fail:function(e){console.log(e),uni.hideLoading(),uni.showToast({title:"下载失败",icon:"none"})}})},getNowFormatDate:function(){var e=new Date,i="-",t=":",o=e.getMonth()+1,n=e.getDate();o>=1&&o<=9&&(o="0"+o),n>=0&&n<=9&&(n="0"+n);var a=e.getFullYear()+i+o+i+n+" "+e.getHours()+t+e.getMinutes()+t+e.getSeconds();return a},deleteItem:function(e){var i=this;uni.showModal({title:"提示",content:"确定要删除此项吗？",success:function(t){t.confirm&&(100!=i.list[e].process&&"undefined"!=typeof i.list[e].uploadTask&&i.list[e].uploadTask.abort(),i.list.splice(e,1),i.$forceUpdate(),i.$emit("update:attachmentList",i.list))}})},chooseFile:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:e.canUploadFile,!1;case 2:case"end":return i.stop()}}),i)})))()},chooseFiletwo:function(){n.imageList=[],n.picslist=[],console.log("aaa"),uni.chooseImage({sizeType:["compressed"],sourceType:["album"],count:5,success:function(e){n.each(e.tempFilePaths,(function(e,i){n.imgCompress(i,500,(function(e){n.imageList.push(e)}))})),console.log(n.imageList),console.log(n.imageList.length),n.loopimage()},fail:function(e){console.log(e)}})},isImg:function(e){var i=e.lastIndexOf("."),t=e.substr(i+1),o=-1!==["png","jpg","jpeg","bmp","gif","webp","svg","tiff"].indexOf(t.toLowerCase());return o},isshowuploadH5:function(){setTimeout((function(){var e=n.checkUrlFile();console.log(e),console.log("addddddddddddddddddd"),n.$refs.lFile.upload({url:e+"api/common/upfile?token="+n.userinfo.token,name:"file"})}),200)},dialogConfirm:function(e){this.$refs.popupMessage.open(),console.log("点击确认"),e()},dialogInputConfirm:function(e,i){uni.showLoading({title:"重命名中..."}),console.log(e),console.log(i),console.log(n.changefilenamedata);var t=i+"."+n.changefilenamedata.ext;n.post("api/file/add",{id:n.changefilenamedata.id,user_id:n.changefilenamedata.user_id,order_id:n.changefilenamedata.order_id,pathfile:n.changefilenamedata.pathfile,name:t,company_id:n.changefilenamedata.company_id,class:n.changefilenamedata.class},(function(i){1===i.code?(console.log(i),uni.hideLoading(),n.echo("重命名成功~"),n.$set(n,"menushow",!1),e(),n.getfilelist()):n.echo(i.msg)}))},dialogClose:function(e){this.msgType="info",this.message="点击了对话框的取消按钮",this.$refs.popupMessage.open(),e()},change:function(e){console.log("popup "+e.type+" 状态",e.show)},filedatadelete:function(){return new Promise((function(e,i){n.each(n.filelistdata,(function(i,t){t.ischeck&&n.post("api/file/del",{id:t.id},(function(i){1===i.code?(console.log(i),e("异步后执行1111111")):n.echo(i.msg)}))}))}))},deletefileitemsclick:function(){uni.showLoading({title:"文件删除中..."});var e=function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.filedatadelete();case 2:e.sent,uni.hideLoading(),n.echo("删除成功~"),n.getfilelist(),n.$set(n,"menushow",!1),n.$forceUpdate();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()},cancelmenushow:function(){n.$set(n,"menushow",!1),n.each(n.filelistdata,(function(e,i){i.ischeck=!1})),n.$forceUpdate()},sendmenushow:function(){n.$set(n,"menushow",!1),n.each(n.filelistdata,(function(e,i){i.ischeck=!1})),n.$forceUpdate(),n.getfilelist()},longclick:function(e,i){n.each(n.filelistdata,(function(e,i){i.ischeck=!1})),console.log("long"),n.$set(n,"menushow",!0),n.$set(n.filelistdata[i],"ischeck",!0)},tgTab:function(e){n.pageone=1,n.pagetwo=1,n.pagethree=1,n.loadMoreTextone="加载中...",n.loadMoreTexttwo="加载中...",n.loadMoreTextthree="加载中...",n.showLoadMoreone=!1,n.showLoadMoretwo=!1,n.showLoadMorethree=!1,n.each(n.filelistdata,(function(e,i){i.ischeck=!1})),n.$set(n,"menushow",!1),n.tab=e,n.graceFullLoading=!0,n.getfilelist()},changename:function(){n.each(n.filelistdata,(function(e,i){if(i.ischeck){var t=i.name,o=t.lastIndexOf(".");t=t.substring(0,o),n.changeitemsname=t,n.changefilenamedata=i,n.$forceUpdate()}})),console.log(n.changeitemsname),this.$refs.dialogInput.open()},deletefileclick:function(){n.$set(n,"changeshow",!0)},deletefile:function(e){console.log("sssssssc"),n.post("api/file/del",{id:e.id},(function(e){1===e.code?(console.log(e),n.echo("删除成功"),n.getfilelist(),uni.setStorage({key:"willUpdate",data:!0})):n.echo(e.msg)}))},canceldeleteclick:function(){n.$set(n,"changeshow",!1)},getfilelist:function(){var e;n.pageone=1,n.pagetwo=1,n.pagethree=1,n.loadMoreTextone="加载中...",n.loadMoreTexttwo="加载中...",n.loadMoreTextthree="加载中...",n.showLoadMoreone=!1,n.showLoadMoretwo=!1,n.showLoadMorethree=!1,"one"==n.tab?e="CAD":"two"==n.tab?e="Office":"three"==n.tab&&(e="Files"),console.log("gettmp");var i=n.checkUrlCdn();console.log(i),n.post("api/file/filelist",{order_id:n.projectid,page:1,limit:10,class:e},(function(e){1===e.code?(console.log(e),n.filelistdata=e.data.rows,n.filelistnum=e.data.total,setTimeout((function(){n.graceFullLoading=!1}),200),n.filelistdata&&n.looptmplist(n.filelistdata)):(console.log(e.msg),n.echo(e.msg))}))},onbottomone:function(){var e;if("one"==n.tab?e="CAD":"two"==n.tab?e="Office":"three"==n.tab&&(e="Files"),console.log(n.showLoadMoreone),!1===n.showLoadMoreone){if(1==n.showLoadMoreone)return;n.pageone=n.pageone+1,n.$set(n,"loadMoreTextone","正在加载..."),console.log("one buttom"),n.post("api/file/filelist",{order_id:n.projectid,page:n.pageone,limit:10,class:e},(function(e){if(1===e.code){if(n.filelistdata.length>0)if(console.log("res.data.rows.length"+e.data.rows.length),e.data.rows.length>0){var i=[];i=e.data.rows,n.looptmplist(i),n.filelistdata=n.filelistdata.concat(i)}else n.$set(n,"showLoadMoreone",!0),n.$set(n,"loadMoreTextone","已加载全部！");else n.filelistdata=e.data.rows,n.filelistdata&&n.looptmplist(n.filelistdata);console.log(n.filelistdata)}else{var t=e.msg.split("(",2);n.echo(t[0])}}))}else n.$set(n,"loadMoreTextone","已加载全部！"),n.$set(n,"showLoadMoreone",!0)},looptmplist:function(e){var i=n.checkUrlCdn();n.each(e,(function(e,t){t.s_pic=i+t.s_pic,t.pathfile=i+t.pathfile,t.createtime&&(t.createtime=n.timestampToTime(t.createtime)),t.size>0&&(t.size>1e3&&t.size<1048576?t.size>1e3?t.size=(t.size/1e3).toFixed(2)+"KB":t.size=t.size.toFixed(0)+"B":t.size<1e3?t.size=(t.size/1e3).toFixed(2)+"B":t.size=(t.size/1e6).toFixed(2)+"M"),t.ischeck=!1,"jpg"==t.ext||"png"==t.ext||"JPG"==t.ext||"PNG"==t.ext||"jpeg"==t.ext?(t.imgstyle=!0,t.icon="iconzhaoxiangji"):"xls"==t.ofname.split(".")[1]||"xlsx"==t.ofname.split(".")[1]?(t.icon="iconexl",t.iconimg="/static/img/file-x.png"):"docx"==t.ofname.split(".")[1]||"doc"==t.ofname.split(".")[1]?(t.icon="iconword",t.iconimg="/static/img/file-w.png"):"mp4"==t.ofname.split(".")[1]||"avi"==t.ofname.split(".")[1]||"AVI"==t.ofname.split(".")[1]||"mov"==t.ofname.split(".")[1]||"rmvb"==t.ofname.split(".")[1]||"rm"==t.ofname.split(".")[1]||"3GP"==t.ofname.split(".")[1]||"FLV"==t.ofname.split(".")[1]?(t.icon="iconshipin1",t.iconimg="/static/img/file-mp4.png"):"pdf"==t.ofname.split(".")[1]?(t.icon="iconPDF",t.iconimg="/static/img/file-pdf.png"):"mp3"==t.ofname.split(".")[1]||"amr"==t.ofname.split(".")[1]?(t.icon="iconyinpin",t.iconimg="/static/img/file-mp3.png"):"txt"==t.ofname.split(".")[1]?(t.icon="iconcaigoudan",t.iconimg="/static/img/file-t.png"):"cad"==t.ofname.split(".")[1]?(t.icon="iconcaigoudan",t.iconimg="/static/img/file-cad2.png"):"zip"==t.ofname.split(".")[1]?(t.icon="iconcaigoudan",t.iconimg="/static/img/file-zip.png"):(t.icon="iconwenjianziliao",t.iconimg="/static/img/file-yun1.png")}))},backfee:function(){uni.navigateBack({})},addfileclick:function(){var e=n.checkUrlFile();console.log(n.userinfo.token),console.log("addddddddddddddddddddddddddddddddddda"),console.log(n.$mp.page.$getAppWebview()),this.$refs.lFile.upload({url:e+"api/common/upfile?token="+n.userinfo.token,name:"file"})},onSuccess:function(e){var i=JSON.stringify(e);console.log(i),console.log(e.fileName);var t="";t=e.fileName;var o=e.data.id,a=JSON.parse(o);console.log(a.data.pathfile);var l="";"one"==n.tab?l="CAD":"two"==n.tab?l="Office":"three"==n.tab&&(l="Files"),n.post("api/file/add",{user_id:n.userinfo.id,order_id:n.projectid,pathfile:a.data.pathfile,name:t,company_id:n.iscompany,class:l},(function(e){1===e.code?(n.graceFullLoading=!0,n.getfilelist(),uni.setStorage({key:"willUpdate",data:!0})):(uni.showToast({title:"上传失败"}),console.log("ssssssssssssssssssssssssssssssssssssssb"),console.log(n.userinfo.id),console.log(n.projectid),console.log(a.data.pathfile),console.log(t),console.log(n.iscompany),console.log(e.msg))}))},lookfile:function(e,i){var t=this;if(console.log("aaaaaaaaaaaaaaaaaaaaaaa"+i),"ios"==n.phonetype)if(n.menushow)n.$set(n.filelistdata[i],"ischeck",!n.filelistdata[i].ischeck),n.checknum=0,n.each(n.filelistdata,(function(e,i){i.ischeck&&n.checknum++})),console.log(n.checknum),0==n.checknum&&(n.menushow=!1,n.each(n.filelistdata,(function(e,i){i.ischeck=!1}))),console.log(e.ischeck),n.$forceUpdate();else if("jpg"==e.ext||"png"==e.ext||"JPG"==e.ext||"PNG"==e.ext||"jpeg"==e.ext)uni.previewImage({urls:[e.pathfile]});else{uni.showLoading({title:"打开中..."}),uni.setTimeout((function(){uni.hideLoading()}),1e3);var o=e.pathfile;this.$refs.lFile.download(o).then((function(e){t.$refs.lFile.open(e)}))}else if(n.menushow)n.$set(n.filelistdata[i],"ischeck",!n.filelistdata[i].ischeck),n.checknum=0,n.each(n.filelistdata,(function(e,i){i.ischeck&&n.checknum++})),console.log(n.checknum),0==n.checknum&&(n.menushow=!1,n.each(n.filelistdata,(function(e,i){i.ischeck=!1}))),console.log(e.ischeck),n.$forceUpdate();else if("jpg"==e.ext||"png"==e.ext||"JPG"==e.ext||"PNG"==e.ext||"jpeg"==e.ext)uni.previewImage({urls:[e.pathfile]});else if("zip"==e.ext){uni.showLoading({title:"打开中..."});var a=e.pathfile;console.log(a),uni.downloadFile({url:a,success:function(e){e.tempFilePath;console.log(e),uni.saveFile({tempFilePath:e.tempFilePath,success:function(e){console.log(e);var i=e.savedFilePath;uni.hideLoading(),console.log(i);var t=e.savedFilePath,o="_doc/wanqing";console.log(t),console.log(o),uni.openDocument({filePath:t,success:function(e){console.log(o),console.log(e),uni.hideLoading()},fail:function(){uni.showToast({title:"暂不支持此类型",duration:2e3})}})}})},fail:function(e){console.log(e),uni.hideLoading(),uni.showToast({title:"下载失败",icon:"none"})}})}else uni.showLoading({title:"打开中..."}),console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkk"),setTimeout((function(){var i=e.pathfile;console.log(i),uni.downloadFile({url:i,success:function(i){console.log(i);i.tempFilePath;uni.saveFile({tempFilePath:i.tempFilePath,success:function(i){var t=i.savedFilePath;uni.hideLoading(),console.log(t),"dwg"==e.ofname.split(".")[1]&&n.echo("暂不支持打开此类型文件哦~"),uni.openDocument({filePath:t,success:function(e){console.log(e),uni.hideLoading()}})}})},fail:function(e){console.log(e),uni.hideLoading(),uni.showToast({title:"下载失败",icon:"none"})}})}),100)},downfile:function(){var e,i;uni.showLoading({title:"文件下载中..."}),n.each(n.filelistdata,(function(i,t){t.ischeck&&(e=t.pathfile)}));var t=e;n.$refs.lFile.download(t,"local").then((function(e){uni.hideLoading(),i=e,n.echo("存储位置为："+i)}))},onOpenDoc:function(){var e=this,i="https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg";this.$refs.lFile.download(i).then((function(i){e.$refs.lFile.open(i)}))},onDown:function(){var e=this,i="https://doc.wendoc.com/word/bde80cbcc2948a222a29694e150750c7759e81050-1.doc";this.$refs.lFile.download(i,"local").then((function(i){e.localPath=i}))}}};i.default=f},"84f5":function(e,i,t){var o=t("4c33");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=t("4f06").default;n("0ac1d38a",o,!0,{sourceMap:!1,shadowMode:!1})},"9dae":function(e,i,t){"use strict";var o=t("84f5"),n=t.n(o);n.a}}]);