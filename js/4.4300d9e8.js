(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"0a1e":function(t,e,a){},8716:function(t,e,a){"use strict";var r=a("0a1e"),n=a.n(r);n.a},a4b2:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{staticClass:"main",class:{"blur-layout":t.blurLayout},attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),a("q-toolbar-title",[t._v("\n        "+t._s(t.productName)+"\n      ")]),a("div",[t._v("Quasar v"+t._s(t.$q.version))])],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-2"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{attrs:{header:""}},[t._v("Essential Links")]),a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://quasar.dev"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"school"}})],1),a("q-item-section",[a("q-item-label",[t._v("Docs")]),a("q-item-label",{attrs:{caption:""}},[t._v("quasar.dev")])],1)],1),a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://github.quasar.dev"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"code"}})],1),a("q-item-section",[a("q-item-label",[t._v("Github")]),a("q-item-label",{attrs:{caption:""}},[t._v("github.com/quasarframework")])],1)],1),a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://chat.quasar.dev"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"chat"}})],1),a("q-item-section",[a("q-item-label",[t._v("Discord Chat Channel")]),a("q-item-label",{attrs:{caption:""}},[t._v("chat.quasar.dev")])],1)],1),a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://forum.quasar.dev"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"record_voice_over"}})],1),a("q-item-section",[a("q-item-label",[t._v("Forum")]),a("q-item-label",{attrs:{caption:""}},[t._v("forum.quasar.dev")])],1)],1),a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://twitter.quasar.dev"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"rss_feed"}})],1),a("q-item-section",[a("q-item-label",[t._v("Twitter")]),a("q-item-label",{attrs:{caption:""}},[t._v("@quasarframework")])],1)],1),a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://facebook.quasar.dev"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"public"}})],1),a("q-item-section",[a("q-item-label",[t._v("Facebook")]),a("q-item-label",{attrs:{caption:""}},[t._v("@QuasarFramework")])],1)],1),a("q-item",{attrs:{clickable:""},on:{click:function(e){return t.logoutUser()}}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"power_settings_new"}})],1),a("q-item-section",[a("q-item-label",[t._v("Logout")])],1)],1)],1)],1),a("q-page-container",[a("router-view",{on:{setBlur:t.setBlur}})],1)],1)},n=[],o=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("9523")),i=a.n(o),s=a("2f62");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){i()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var u={name:"UserLayout",computed:l(l({},Object(s["c"])("user",["currentUser"])),{},{productName:function(){return window.sessionStorage.productName}}),created:function(){console.log("FIREBASE AUTH USER uid",this.$store.state.auth.uid)},data:function(){return{leftDrawerOpen:!1,blurLayout:!1}},methods:l(l({},Object(s["b"])("auth",["logoutUser"])),{},{setBlur:function(){this.blurLayout=!this.blurLayout}})},b=u,m=(a("8716"),a("2877")),q=a("4d5a"),v=a("e359"),f=a("65c6"),p=a("9c40"),d=a("6ac5"),h=a("9404"),w=a("1c1c"),g=a("0170"),_=a("66e5"),O=a("4074"),k=a("0016"),y=a("09e3"),j=a("eebe"),Q=a.n(j),D=Object(m["a"])(b,r,n,!1,null,"26f95d71",null);e["default"]=D.exports;Q()(D,"components",{QLayout:q["a"],QHeader:v["a"],QToolbar:f["a"],QBtn:p["a"],QToolbarTitle:d["a"],QDrawer:h["a"],QList:w["a"],QItemLabel:g["a"],QItem:_["a"],QItemSection:O["a"],QIcon:k["a"],QPageContainer:y["a"]})}}]);