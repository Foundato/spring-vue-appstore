(function(t){function e(e){for(var r,s,o=e[0],l=e[1],c=e[2],u=0,d=[];u<o.length;u++)s=o[u],n[s]&&d.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},i=[];function s(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"dbb13d8f"}[t]+".js"}function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise(function(e,r){a=n[t]=[e,r]});e.push(a[2]=r);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=s(t),i=function(e){l.onerror=l.onload=null,clearTimeout(c);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+r+": "+i+")");s.type=r,s.request=i,a[1](s)}n[t]=void 0}};var c=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"8f43":function(t,e,a){t.exports=a.p+"img/hm_logo.dc220168.jpeg"},cd49:function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=a("bb71");a("da64");r["default"].use(n["a"],{iconfont:"md",theme:{background:"#BCFFFF",primary:"#3f51b5",secondary:"#03a9f4",accent:"#009688"}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("TopToolbar"),a("v-container",{staticStyle:{padding:"0px"},attrs:{"align-start":"",fluid:""}},[a("router-view")],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-toolbar",[r("v-img",{staticStyle:{"background-position":"left center !important"},attrs:{alt:"HM-Logo",src:a("8f43"),height:"100%",width:"10px"}}),r("v-spacer"),r("v-btn",{attrs:{flat:"",href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank"}},[r("span",{staticClass:"mr-2"},[t._v(t._s(t.getUser().name))])]),r("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[r("v-toolbar-side-icon",t._g({},a))]}}])},[r("v-list",[r("v-list-tile",[r("router-link",{attrs:{to:{name:"home"},tag:"button"}},[r("v-btn",{attrs:{flat:""}},[r("v-icon",{attrs:{left:""}},[t._v("house")]),t._v("\n                        all apps\n                    ")],1)],1)],1),r("v-list-tile",[r("router-link",{attrs:{to:{name:"register"},tag:"button"}},[r("v-btn",{attrs:{flat:""}},[r("v-icon",{attrs:{left:""}},[t._v("add")]),t._v("\n                        register\n                    ")],1)],1)],1),r("v-list-tile",[r("router-link",{attrs:{to:{name:"userlogin"},tag:"button"}},[r("v-btn",{attrs:{flat:""}},[r("v-icon",{attrs:{left:""}},[t._v("face")]),t._v("\n                        Login\n                    ")],1)],1)],1),r("v-list-tile",[r("v-btn",{attrs:{flat:"",href:"http://fr-11-apps.herokuapp.com/swagger-ui.html",target:"_blank"}},[r("v-icon",{attrs:{left:""}},[t._v("assignment")]),t._v("\n                    swagger UI\n                ")],1)],1),r("v-list-tile",[r("v-btn",{attrs:{flat:"",href:"http://localhost:8080/swagger-ui.html",target:"_blank"}},[r("v-icon",{attrs:{left:""}},[t._v("assignment")]),t._v("\n                    swagger UI local\n                ")],1)],1)],1)],1)],1)},l=[],c=a("cebc"),u=a("2f62"),p={name:"TopToolbar",methods:Object(c["a"])({},Object(u["b"])(["getUser"]))},d=p,v=a("2877"),f=a("6544"),m=a.n(f),g=a("8336"),b=a("132d"),h=a("adda"),_=a("8860"),x=a("ba95"),y=a("e449"),V=a("9910"),w=a("71d9"),k=a("706c"),T=Object(v["a"])(d,o,l,!1,null,null,null),j=T.exports;m()(T,{VBtn:g["a"],VIcon:b["a"],VImg:h["a"],VList:_["a"],VListTile:x["a"],VMenu:y["a"],VSpacer:V["a"],VToolbar:w["a"],VToolbarSideIcon:k["a"]});var S=a("8c4f"),O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs2:"",lg2:""}},[a("Navigation")],1),a("v-flex",{attrs:{xs10:"",lg10:""}},[a("AllApps")],1)],1)},C=[],M=a("d225"),L=a("308d"),R=a("6bb5"),U=a("4e2b"),P=a("9ab4"),A=a("60a3"),F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.applist,function(e){return a("v-flex",{key:e.title,attrs:{xs12:"",sm6:"",md6:"",lg4:""}},[a("router-link",{attrs:{to:t.getDetailUrl(e.id)}},[a("small-card",{attrs:{app:e}})],1)],1)}),1)],1)},$=[],E=(a("6762"),a("2fdb"),a("75fc")),N=a("bc3a"),I=a.n(N),q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"white--text",staticStyle:{margin:"15Px"},attrs:{hover:"",color:"primary"}},[a("v-layout",{staticStyle:{margin:"inherit"},attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card-title",{attrs:{"primary-title":""}},[a("v-avatar",[a("v-img",{attrs:{src:t.logoUrl,alt:"test"}})],1),a("v-spacer"),a("div",{staticClass:"headline"},[t._v(t._s(t.app.title))]),a("v-spacer")],1)],1)],1),a("v-layout",{staticStyle:{margin:"inherit"},attrs:{row:""}},[a("v-flex",{attrs:{xs5:""}},[t.app.description.length<200?a("div",[t._v(t._s(t.app.description))]):t._e(),t.app.description.length>=200?a("div",[t._v(t._s(t.app.description.substring(0,110)+"..."))]):t._e()]),a("v-flex",{attrs:{xs2:""}}),a("v-flex",{attrs:{xs5:""}},[a("v-layout",{attrs:{"justify-end":"",row:""}},[a("v-spacer"),a("v-img",{attrs:{src:t.logoUrl,height:"125px","max-width":"200px",contain:""}})],1)],1)],1),a("v-layout",{staticStyle:{margin:"inherit"},attrs:{row:""}},[a("v-flex",{attrs:{xs5:""}},[a("div",[t._v("Tags: "+t._s(t.niceList(t.app.tags)))])]),a("v-flex",{attrs:{xs2:""}}),a("v-flex",{attrs:{xs5:""}},[a("div",{staticStyle:{"text-align":"right"}},[a("v-icon",[t._v(t._s(Math.round(t.app.rating)>=1?"star":"star_border"))]),a("v-icon",[t._v(t._s(Math.round(t.app.rating)>=2?"star":"star_border"))]),a("v-icon",[t._v(t._s(Math.round(t.app.rating)>=3?"star":"star_border"))]),a("v-icon",[t._v(t._s(Math.round(t.app.rating)>=4?"star":"star_border"))]),a("v-icon",[t._v(t._s(Math.round(t.app.rating)>=5?"star":"star_border"))])],1)])],1),a("v-layout",{staticStyle:{margin:"inherit"},attrs:{row:""}},[a("v-flex",{attrs:{xs5:""}},[a("v-btn",{staticClass:"black--text",attrs:{color:"secondary",round:""}},[t._v("\n                More Info\n            ")])],1),a("v-flex",{attrs:{xs2:""}}),a("v-flex",{attrs:{xs5:""}},[a("div",{staticStyle:{"text-align":"right"}},[a("v-btn",{staticClass:"black--text",attrs:{color:"secondary",round:""}},[t._v("\n                    Go to Site\n                ")])],1)])],1)],1)},B=[],D={name:"SmallCard",props:{app:{type:Object,default:{}}},methods:{niceList:function(t,e,a){if(!t||0==t.length)return"";var r=t.slice(0),n=r.pop();return e=e||", ",a=a||", ",r.join(e)+a+n}},computed:{logoUrl:function(){return"https://fr-11-apps.herokuapp.com/api/apps/"+this.app.id+"/logo"}}},z=D,H=a("8212"),J=a("b0af"),G=a("12b2"),K=a("0e8f"),Q=a("a722"),W=Object(v["a"])(z,q,B,!1,null,"0c2f6305",null),X=W.exports;m()(W,{VAvatar:H["a"],VBtn:g["a"],VCard:J["a"],VCardTitle:G["a"],VFlex:K["a"],VIcon:b["a"],VImg:h["a"],VLayout:Q["a"],VSpacer:V["a"]}),I.a.defaults.baseURL="https://fr-11-apps.herokuapp.com";var Y={components:{SmallCard:X},data:function(){return{apps:[]}},mounted:function(){var t=this;I.a.get("/api/apps").then(function(e){var a;(a=t.apps).push.apply(a,Object(E["a"])(e.data))}).catch(function(t){console.error("api error:"+t)})},methods:Object(c["a"])({},Object(u["b"])(["getSearch","getTags","getMinimumRating"]),{getDetailUrl:function(t){return"/detail/"+t}}),computed:{applist:function(){var t=this;return this.apps.filter(function(e){return e.title.includes(t.getSearch())}).filter(function(e){return Math.round(e.rating)>=t.getMinimumRating()}).filter(function(e){return 0==t.getTags().length||t.getTags().some(function(t){return e.tags.includes(t)})})}}},Z=Y,tt=a("a523"),et=Object(v["a"])(Z,F,$,!1,null,null,null),at=et.exports;m()(et,{VContainer:tt["a"],VFlex:K["a"],VLayout:Q["a"]});var rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-navigation-drawer",{attrs:{"mini-variant":t.mini,"hide-overlay":"",stateless:"",absolute:""},on:{"update:miniVariant":function(e){t.mini=e},"update:mini-variant":function(e){t.mini=e}},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-toolbar",{staticClass:"transparent",attrs:{flat:""}},[a("v-list",{staticClass:"pa-0"},[a("v-list-tile",[a("v-list-tile-action",[t.mini?a("div",[a("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.mini=!t.mini}}},[a("v-icon",[t._v("chevron_right")])],1)],1):t._e()]),a("v-list-tile-content",[a("v-list-tile-title",[t._v("HM APPS")])],1),a("v-list-tile-action",[a("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.mini=!t.mini}}},[a("v-icon",[t._v("chevron_left")])],1)],1)],1)],1)],1),a("v-list",{staticClass:"pt-0"},[a("v-list-tile",[a("v-list-tile-action",[a("v-icon",[t._v("search")])],1),a("v-list-tile-content",[a("v-text-field",{attrs:{label:"search App","single-line":""},on:{keyup:function(e){return t.setSearch(t.filter)}},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)],1),a("v-list-tile",[a("v-list-tile-action",[a("v-icon",[t._v("list")])],1),a("v-list-tile-content",[a("v-select",{attrs:{items:t.allTags,chips:"",label:"Tags",multiple:""},on:{input:function(e){return t.setTags(t.selectedTags)}},model:{value:t.selectedTags,callback:function(e){t.selectedTags=e},expression:"selectedTags"}})],1)],1),a("v-list-tile",[a("v-list-tile-content",[a("v-layout",{attrs:{row:""}},[a("div",{staticStyle:{"text-align":"center"}},[a("v-btn",{attrs:{icon:"",small:"",depressed:""},on:{click:function(e){return t.setMinimumRating(1)}}},[a("v-icon",{attrs:{"x-small":""}},[t._v(t._s(t.getMinimumRating()>=1?"star":"star_border"))])],1),a("v-btn",{attrs:{icon:"",small:"",depressed:""},on:{click:function(e){return t.setMinimumRating(2)}}},[a("v-icon",{attrs:{"x-small":""}},[t._v(t._s(t.getMinimumRating()>=2?"star":"star_border"))])],1),a("v-btn",{attrs:{icon:"",small:"",depressed:""},on:{click:function(e){return t.setMinimumRating(3)}}},[a("v-icon",{attrs:{"x-small":""}},[t._v(t._s(t.getMinimumRating()>=3?"star":"star_border"))])],1),a("v-btn",{attrs:{icon:"",small:"",depressed:""},on:{click:function(e){return t.setMinimumRating(4)}}},[a("v-icon",{attrs:{"x-small":""}},[t._v(t._s(t.getMinimumRating()>=4?"star":"star_border"))])],1),a("v-btn",{attrs:{icon:"",small:"",depressed:""},on:{click:function(e){return t.setMinimumRating(5)}}},[a("v-icon",{attrs:{"x-small":""}},[t._v(t._s(t.getMinimumRating()>=5?"star":"star_border"))])],1)],1)])],1)],1),a("v-list-tile",[a("v-list-tile-content",[a("v-btn",{attrs:{large:"",round:""}},[a("v-icon",[t._v("add_circle")]),t._v("\n                        Share your App\n                    ")],1)],1)],1)],1)],1)],1)},nt=[];I.a.defaults.baseURL="https://fr-11-apps.herokuapp.com";var it={name:"Navigation.vue",data:function(){return{filter:"",drawer:!0,mini:!0,allTags:["test","ball","trump"],selectedTags:[],items:[{title:"Menu 1"},{title:"Menu 2"}]}},mounted:function(){var t=this;I.a.get("/api/tags").then(function(e){var a;(a=t.allTags).push.apply(a,Object(E["a"])(e.data))}).catch(function(t){console.error("api error:"+t)}),this.setTags([])},methods:Object(c["a"])({},Object(u["c"])(["setSearch","setTags","setMinimumRating"]),Object(u["b"])(["getSearch","getTags","getMinimumRating"]))},st=it,ot=a("40fe"),lt=a("5d23"),ct=a("f774"),ut=a("b56d"),pt=a("2677"),dt=Object(v["a"])(st,rt,nt,!1,null,"7fe2aaa1",null),vt=dt.exports;m()(dt,{VBtn:g["a"],VContainer:tt["a"],VIcon:b["a"],VLayout:Q["a"],VList:_["a"],VListTile:x["a"],VListTileAction:ot["a"],VListTileContent:lt["a"],VListTileTitle:lt["b"],VNavigationDrawer:ct["a"],VSelect:ut["a"],VTextField:pt["a"],VToolbar:w["a"]});var ft=function(t){function e(){return Object(M["a"])(this,e),Object(L["a"])(this,Object(R["a"])(e).apply(this,arguments))}return Object(U["a"])(e,t),e}(A["b"]);ft=P["a"]([Object(A["a"])({components:{AllApps:at,Navigation:vt}})],ft);var mt=ft,gt=mt,bt=Object(v["a"])(gt,O,C,!1,null,null,null),ht=bt.exports;m()(bt,{VFlex:K["a"],VLayout:Q["a"]});var _t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-card",{staticStyle:{margin:"15Px"},attrs:{elvation:"12"}},[a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-text-field",{attrs:{label:"Name","prepend-icon":"person",type:"text",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-text-field",{attrs:{label:"password",type:"password","prepend-icon":"lock",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("v-card-actions",[a("v-spacer"),a("router-link",{attrs:{to:{name:"home"},tag:"button"}},[a("v-btn",{attrs:{color:"success"},on:{click:t.submit}},[t._v(" submit\n                        ")])],1),a("v-spacer")],1)],1)],1)],1)],1)],1)},xt=[];a("7f7f");I.a.defaults.baseURL="https://fr-11-apps.herokuapp.com";var yt={name:"Login",data:function(){return{name:"",password:""}},methods:Object(c["a"])({},Object(u["c"])(["setUser"]),{submit:function(){var t=this;I.a.post("/api/login",{username:this.name,password:this.password}).then(function(e){t.setUser(e.data)}).catch(function(t){console.error(t)})}})},Vt=yt,wt=a("99d9"),kt=a("4bd4"),Tt=Object(v["a"])(Vt,_t,xt,!1,null,"49882dd7",null),jt=Tt.exports;m()(Tt,{VBtn:g["a"],VCard:J["a"],VCardActions:wt["a"],VCardText:wt["b"],VContainer:tt["a"],VForm:kt["a"],VLayout:Q["a"],VSpacer:V["a"],VTextField:pt["a"]});var St=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-card",{staticStyle:{margin:"15Px"},attrs:{elvation:"12"}},[a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""}},[a("v-text-field",{attrs:{label:"Name","prepend-icon":"person",type:"text",required:""},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}}),a("v-text-field",{attrs:{label:"Email","prepend-icon":"email",type:"text",required:""},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}),a("v-text-field",{attrs:{label:"password",type:"password","prepend-icon":"lock",required:""},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),a("v-card-actions",[a("v-spacer"),a("router-link",{attrs:{to:{name:"home"},tag:"button"}},[a("v-btn",{attrs:{color:"success"},on:{click:t.submit}},[t._v(" submit\n                        ")])],1),a("v-spacer")],1)],1)],1)],1)],1)],1)},Ot=[];I.a.defaults.baseURL="https://fr-11-apps.herokuapp.com";var Ct={name:"Register",data:function(){return{user:{name:"",password:"",email:""}}},methods:Object(c["a"])({},Object(u["c"])(["setUser"]),{submit:function(){I.a.post("/api/users",{name:this.user.name,email:this.user.email,password:this.user.password}).then(function(t){}).catch(function(t){console.error(t)})}})},Mt=Ct,Lt=Object(v["a"])(Mt,St,Ot,!1,null,"217cf5ee",null),Rt=Lt.exports;m()(Lt,{VBtn:g["a"],VCard:J["a"],VCardActions:wt["a"],VCardText:wt["b"],VContainer:tt["a"],VForm:kt["a"],VLayout:Q["a"],VSpacer:V["a"],VTextField:pt["a"]});var Ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",[a("v-card",{staticClass:"white--text",staticStyle:{margin:"15Px"},attrs:{color:"primary","min-width":"100%","min-height":"25%"}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{lg4:""}},[a("v-card-title",[t._v("\n                        "+t._s(t.card.title)+"\n                    ")])],1),a("v-flex",{attrs:{lg4:""}},[a("v-card-text",[t._v("\n                        "+t._s(t.card.description)+"\n                    ")])],1),a("v-flex",{attrs:{lg4:""}},[a("v-img",{attrs:{alt:t.card.screenshots[0]}})],1)],1)],1)],1)},Pt=[];a("c5f6");I.a.defaults.baseURL="https://fr-11-apps.herokuapp.com";var At={name:"DetailedCardView",components:{SmallCard:X},data:function(){return{card:{title:String,description:String,views:Number,screenshots:[],tags:[],rating:Number}}},props:{id:String},computed:{idNumber:function(){return Number(this.id)}},methods:Object(c["a"])({},Object(u["b"])(["getUser"])),created:function(){var t=this;console.log("create Card for ID: "+this.idNumber),I.a.get("/api/apps/"+this.idNumber).then(function(t){console.log("show app & prepare Fields of Card\n"+t)}).catch(function(e){t.card={title:"default",description:"default description",views:999,screenshots:[],tags:[],rating:1}})}},Ft=At,$t=Object(v["a"])(Ft,Ut,Pt,!1,null,"3dc4052e",null),Et=$t.exports;m()($t,{VCard:J["a"],VCardText:wt["b"],VCardTitle:G["a"],VFlex:K["a"],VImg:h["a"],VLayout:Q["a"]}),r["default"].use(S["a"]);var Nt=new S["a"]({mode:"history",routes:[{path:"/userlogin",name:"userlogin",component:jt},{path:"/register",name:"register",component:Rt},{path:"/",name:"home",component:ht},{path:"/detailed/:id",name:"detailedcardview",component:Et,props:!0},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),It={name:"App",router:Nt,components:{TopToolbar:j},data:function(){return{items:[{title:"Menu 1"},{title:"Menu 2"}]}}},qt=It,Bt=a("7496"),Dt=Object(v["a"])(qt,i,s,!1,null,null,null),zt=Dt.exports;m()(Dt,{VApp:Bt["a"],VContainer:tt["a"]});a("386d");r["default"].use(u["a"]);var Ht=new u["a"].Store({state:{search:"",tags:[""],minimumRating:0,user:{id:0,email:"mail",name:"default",token:"default"}},getters:{getUser:function(t){return t.user},getSearch:function(t){return t.search},getTags:function(t){return t.tags},getMinimumRating:function(t){return t.minimumRating}},mutations:{setUser:function(t,e){t.user=e},setSearch:function(t,e){t.search=e},setTags:function(t,e){t.tags=e},setMinimumRating:function(t,e){t.minimumRating=e}},actions:{}});r["default"].config.productionTip=!1,new r["default"]({router:Nt,store:Ht,render:function(t){return t(zt)}}).$mount("#app")}});
//# sourceMappingURL=app.d52c41b4.js.map