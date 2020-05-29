(function(e){function t(t){for(var n,a,i=t[0],c=t[1],s=t[2],f=0,l=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&l.push(u[a][0]),u[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(l.length)l.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==u[i]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={3:0},u={3:0},o=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{1:"72899545",2:"44cee7b3",4:"4300d9e8",5:"9aad502d",6:"42488ff5",7:"a65f5d78",8:"20c8b46d",9:"06d63c5d",10:"a6505dc7"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={1:1,4:1,5:1,6:1,7:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{1:"8d533dd5",2:"31d6cfe0",4:"63258172",5:"c97a576d",6:"aff08e71",7:"1280b987",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0"}[e]+".css",u=c.p+n,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===n||f===u))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],f=s.getAttribute("data-href");if(f===n||f===u)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||u,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],p.parentNode.removeChild(p),r(o)},p.href=u;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var n=u[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=u[e]=[t,r]}));t.push(n[2]=o);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=i(e);var l=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(p);var r=u[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,r[1](l)}u[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=f;o.push([0,0]),r()})({0:function(e,t,r){e.exports=r("2f39")},"0047":function(e,t,r){},"2f39":function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"someGetter",(function(){return T}));var a={};r.r(a),r.d(a,"setAuthState",(function(){return N}));var u={};r.r(u),r.d(u,"addUserToUsersCollection",(function(){return M})),r.d(u,"createNewUser",(function(){return W})),r.d(u,"loginUser",(function(){return q})),r.d(u,"logoutUser",(function(){return F})),r.d(u,"routeUserToAuth",(function(){return z}));var o={};r.r(o),r.d(o,"currentUser",(function(){return K})),r.d(o,"editUserDialog",(function(){return H}));var i={};r.r(i),r.d(i,"setCurrentUserData",(function(){return Q})),r.d(i,"setEditUserDialog",(function(){return X}));var c={};r.r(c),r.d(c,"firestore",(function(){return ee})),r.d(c,"userRef",(function(){return te})),r.d(c,"storageRef",(function(){return re}));var s={};r.r(s),r.d(s,"getCurrentUser",(function(){return ne})),r.d(s,"updateUserData",(function(){return ae}));var f={};r.r(f),r.d(f,"auth",(function(){return ge})),r.d(f,"ensureAuthIsInitialized",(function(){return we})),r.d(f,"fBInit",(function(){return ye})),r.d(f,"isAuthenticated",(function(){return Oe})),r.d(f,"logoutUser",(function(){return Pe})),r.d(f,"handleOnAuthStateChanged",(function(){return Ee})),r.d(f,"routerBeforeEach",(function(){return xe}));var l={};r.r(l),r.d(l,"createUserWithEmail",(function(){return je})),r.d(l,"logoutUser",(function(){return ke})),r.d(l,"loginWithEmail",(function(){return Ue}));var p=r("a34a"),d=r.n(p),h=(r("a481"),r("96cf"),r("c973")),b=r.n(h),m=(r("7d6e"),r("e54f"),r("985d"),r("0047"),r("2b0e")),v=r("1f91"),g=r("42d2"),w=r("b05d"),y=r("f508"),O=r("2a19");m["a"].use(w["a"],{config:{},lang:v["a"],iconSet:g["a"],plugins:{Loading:y["a"],Notify:O["a"]}});var P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"q-app"}},[r("router-view")],1)},E=[],x={name:"App"},j=x,k=r("2877"),U=Object(k["a"])(j,P,E,!1,null,null,null),A=U.exports,S=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("9523")),D=r.n(S),R=r("2f62"),_=r("3317"),C={isAuthenticated:!1,isReady:!1};function T(){}function N(e,t){e.isAuthenticated=t.isAuthenticated,e.isReady=t.isReady,e.uid=t.uid}var I=r("970b"),L=r.n(I);function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){D()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var $=function e(t){var r=this;return L()(this,e),D()(this,"id",""),D()(this,"backgroundPhoto",""),D()(this,"email",""),D()(this,"fullName",""),D()(this,"mobile",""),D()(this,"profilePhoto",""),Object.keys(t).forEach((function(e,n){r[e]=t[e]})),V({},this)},M=function(){var e=b()(d.a.mark((function e(t,r){var n,a;return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.email,a=new $({email:n}),e.abrupt("return",r.set(a));case 2:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),W=function(){var e=b()(d.a.mark((function e(t,r){var n,a,u,o,i,c;return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.dispatch,t.commit,n=this.$fb,a=r.email,u=r.password,e.next=5,n.createUserWithEmail(a,u);case 5:return o=e.sent,i=o.user.uid,c=n.userRef("users",i),e.abrupt("return",M({email:a},c));case 9:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}(),q=function(){var e=b()(d.a.mark((function e(t,r){var n,a,u;return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=this.$fb,a=r.email,u=r.password,e.abrupt("return",n.loginWithEmail(a,u));case 4:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}(),F=function(){var e=b()(d.a.mark((function e(t,r){var n;return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=this.$fb,e.next=4,n.logoutUser();case 4:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}();function z(){this.$router.push({path:"/auth/login"})}var G={namespaced:!0,getters:n,mutations:a,actions:u,state:C},J={currentUser:null,editUserDialog:!1},K=function(e){var t=e.currentUser;return t},H=function(e){var t=e.editUserDialog;return t},Q=function(e,t){e.currentUser=t},X=function(e,t){e.editUserDialog=t},Y=r("59ca"),Z=r.n(Y),ee=(r("ea7b"),r("e71f"),r("588e"),function(){return Z.a.firestore()}),te=function(e,t){return ee().collection(e).doc(t)},re=function(e){return Z.a.storage().ref(e)},ne=Object(_["a"])((function(e,t){var r=e.bindFirestoreRef;return r("currentUser",te("users",t))})),ae=function(){var e=b()(d.a.mark((function e(t,r){return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.state,e.abrupt("return",te("users",r.id).update(r));case 2:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),ue={namespaced:!0,getters:o,mutations:i,actions:s,state:J};function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ie(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(r),!0).forEach((function(t){D()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}m["a"].use(R["a"]);var ce=function(){var e=new R["a"].Store({modules:{auth:G,user:ue},mutations:ie({},_["b"]),strict:!1});return e},se=r("8c4f"),fe=[{path:"/",component:function(){return Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"77c7"))},children:[{path:"",component:function(){return Promise.all([r.e(0),r.e(10)]).then(r.bind(null,"8b24"))}}]},{path:"/auth",component:function(){return Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"77c7"))},children:[{path:"forgotPassword",name:"ForgotPassword",component:function(){return Promise.all([r.e(0),r.e(5)]).then(r.bind(null,"1613"))}},{path:"login",name:"Login",component:function(){return Promise.all([r.e(0),r.e(1)]).then(r.bind(null,"21f3"))}},{path:"register",name:"Register",component:function(){return Promise.all([r.e(0),r.e(1)]).then(r.bind(null,"21f3"))}}]},{path:"/user",component:function(){return Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"a4b2"))},children:[{path:"profile",name:"UserProfile",component:function(){return Promise.all([r.e(0),r.e(6)]).then(r.bind(null,"cdd0"))},meta:{requiresAuth:!0}}]}];fe.push({path:"*",component:function(){return Promise.all([r.e(0),r.e(8)]).then(r.bind(null,"e51e"))}});var le=fe;m["a"].use(se["a"]);var pe=function(){var e=new se["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:le,mode:"hash",base:""});return e},de=function(){return he.apply(this,arguments)};function he(){return he=b()(d.a.mark((function e(){var t,r,n;return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof ce){e.next=6;break}return e.next=3,ce({Vue:m["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=ce;case 7:if(t=e.t0,"function"!==typeof pe){e.next=14;break}return e.next=11,pe({Vue:m["a"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=pe;case 15:return r=e.t1,t.$router=r,n={router:r,store:t,render:function(e){return e(A)}},n.el="#q-app",e.abrupt("return",{app:n,store:t,router:r});case 20:case"end":return e.stop()}}),e)}))),he.apply(this,arguments)}var be=r("9483");Object(be["a"])("service-worker.js",{ready:function(){},registered:function(){},cached:function(){},updatefound:function(){},updated:function(){},offline:function(){},error:function(){}});var me=r("bc3a"),ve=r.n(me);m["a"].prototype.$axios=ve.a;r("f751"),r("551c");var ge=function(){return Z.a.auth()},we=function(){var e=b()(d.a.mark((function e(t){return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.state.auth.isReady){e.next=2;break}return e.abrupt("return",!0);case 2:return e.abrupt("return",new Promise((function(e,t){var r=Z.a.auth().onAuthStateChanged((function(t){e(),r()}),(function(){t(new Error("Looks like there is a problem with the firebase service. Please try again later"))}))})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ye=function(e){return Z.a.initializeApp(e)},Oe=function(e){return e.state.auth.isAuthenticated},Pe=function(){return ge().signOut()},Ee=function(){var e=b()(d.a.mark((function e(t,r){var n;return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=Oe(t),t.commit("auth/setAuthState",{isAuthenticated:null!==r,isReady:!0,uid:r?r.uid:""}),!t.state.auth.isAuthenticated){e.next=5;break}return e.next=5,t.dispatch("user/getCurrentUser",r.uid);case 5:!r&&n&&t.dispatch("auth/routeUserToAuth");case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),xe=function(){var e=b()(d.a.mark((function e(t,r){return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.beforeEach(function(){var e=b()(d.a.mark((function e(t,n,a){return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,we(r);case 3:t.matched.some((function(e){return e.meta.requiresAuth}))?Oe(r)?a():a("/auth/login"):"/auth/register"===t.path&&Oe(r)||"/auth/login"===t.path&&Oe(r)?a("/user"):a(),e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),O["a"].create({message:"".concat(e.t0),color:"negative"});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,r,n){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),je=function(){var e=b()(d.a.mark((function e(t,r){return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Z.a.auth().createUserWithEmailAndPassword(t,r));case 1:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),ke=function(){return Z.a.auth().signOut()},Ue=function(e,t){return Z.a.auth().signInWithEmailAndPassword(e,t)},Ae=Object.assign({},f,l,c),Se=function(e){var t=e.router,r=e.store,n=e.Vue,a=Object({NODE_ENV:"production",CLIENT:!0,SERVER:!1,DEV:!1,PROD:!0,MODE:"pwa",VUE_ROUTER_MODE:"hash",VUE_ROUTER_BASE:"",APP_URL:"undefined",SERVICE_WORKER_FILE:"service-worker.js"}).FIREBASE_CONFIG;Ae.fBInit(a),Ae.auth().onAuthStateChanged((function(e){Ae.handleOnAuthStateChanged(r,e)}),(function(e){console.error(e)})),Ae.routerBeforeEach(t,r),n.prototype.$fb=Ae,r.$fb=Ae};function De(){return Re.apply(this,arguments)}function Re(){return Re=b()(d.a.mark((function e(){var t,r,n,a,u,o,i,c,s;return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,de();case 2:t=e.sent,r=t.app,n=t.store,a=t.router,u=!0,o=function(e){u=!1,window.location.href=e},i=window.location.href.replace(window.location.origin,""),c=[void 0,Se],s=0;case 11:if(!(!0===u&&s<c.length)){e.next=29;break}if("function"===typeof c[s]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,c[s]({app:r,router:a,store:n,Vue:m["a"],ssrContext:null,redirect:o,urlPath:i});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:s++,e.next=11;break;case 29:if(!1!==u){e.next=31;break}return e.abrupt("return");case 31:new m["a"](r);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),Re.apply(this,arguments)}/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&r.e(0).then(r.t.bind(null,"a0db",7)),De()}});