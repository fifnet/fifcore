"use strict";(self["webpackChunkhome"]=self["webpackChunkhome"]||[]).push([[762],{9762:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ae});var o=n(3673);const l=(0,o.Uk)(" Quasar App ");function a(e,t,n,a,u,c){const r=(0,o.up)("q-btn"),s=(0,o.up)("q-toolbar-title"),i=(0,o.up)("NodeList"),p=(0,o.up)("FloatButton"),d=(0,o.up)("q-toolbar"),m=(0,o.up)("q-route-tab"),f=(0,o.up)("q-tabs"),w=(0,o.up)("q-header"),k=(0,o.up)("LeftPane"),b=(0,o.up)("q-drawer"),g=(0,o.up)("router-view"),W=(0,o.up)("q-page-container"),_=(0,o.up)("q-layout");return(0,o.wg)(),(0,o.j4)(_,{view:"lHh lpR lFf"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{bordered:"",class:"text-grey",style:{"background-color":"rgb(238,242,245)"},"height-hint":"98"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Wm)(r,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),(0,o.Wm)(s,null,{default:(0,o.w5)((()=>[l])),_:1}),(0,o.Wm)(i),(0,o.Wm)(p)])),_:1}),(0,o.Wm)(f,{align:"left"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{to:"/page1",label:"Page One"}),(0,o.Wm)(m,{to:"/page2",label:"Page Two"}),(0,o.Wm)(m,{to:"/page3",label:"Page Three"})])),_:1})])),_:1}),(0,o.Wm)(b,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":t[0]||(t[0]=t=>e.leftDrawerOpen=t),"show-if-above":"",bordered:""},{default:(0,o.w5)((()=>[(0,o.Wm)(k)])),_:1},8,["modelValue"]),(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[(0,o.Wm)(g)])),_:1})])),_:1})}const u={class:"fullscreen text-white",style:{"background-color":"rgb(31, 36, 40)"}},c={class:"text-h5 text-white q-ma-md q-pt-md"},r=(0,o.Uk)("Hello fifnet"),s=(0,o._)("div",{class:"",style:{"background-color":"rgb(44, 49, 60)"}},"SiteList",-1);function i(e,t,n,l,a,i){const p=(0,o.up)("q-icon"),d=(0,o.up)("Apps");return(0,o.wg)(),(0,o.iD)("div",u,[(0,o._)("div",c,[(0,o.Wm)(p,{name:"font_download",class:"text-pink text-h3"}),r]),s,(0,o.Wm)(d)])}var p=n(2323);const d=(0,o.Uk)("List of Apps "),m=["onClick"];function f(e,t,n,l,a,u){return(0,o.wg)(),(0,o.iD)("div",null,[d,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.lsApps,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.token},[(0,o._)("button",{onClick:t=>l.openApp(e)},(0,p.zw)(e.name),9,m)])))),128))])}var w=n(1959);const k={name:"Apps",setup(){const e=(0,w.iH)({});async function t(){const t=await(await fetch(location.origin+"/apps")).json();e.value=t,console.log(t)}function n(e){const t=location.origin+"/"+e.name+"/"+(e.meta.start?e.meta.start:"")+"/?token="+e.token;return console.log(e),t}function o(e){sessionStorage.setItem(e.name,e.token),window.open(n(e),e.name)}return t(),{lsApps:e,getAppURL:n,openApp:o}}};var b=n(4260);const g=(0,b.Z)(k,[["render",f]]),W=g,_={name:"LeftPane",components:{Apps:W},setup(){return{}}};var v=n(4554),Z=n(7518),h=n.n(Z);const q=(0,b.Z)(_,[["render",i]]),C=q;h()(_,"components",{QIcon:v.Z});const Q={class:"q-pa-md"},L=(0,o.Uk)("Photos"),y=(0,o.Uk)("Videos"),D=(0,o.Uk)("Articles");function A(e,t,n,l,a,u){const c=(0,o.up)("q-item-label"),r=(0,o.up)("q-item-section"),s=(0,o.up)("q-item"),i=(0,o.up)("q-list"),p=(0,o.up)("q-btn-dropdown"),d=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.iD)("div",Q,[(0,o.Wm)(p,{rounded:"",unelevated:"",color:"white","text-color":"black",label:"NODES: 5"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,null,{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(s,{clickable:"",onClick:l.onItemClick},{default:(0,o.w5)((()=>[(0,o.Wm)(r,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[L])),_:1})])),_:1})])),_:1},8,["onClick"]),[[d]]),(0,o.wy)((0,o.Wm)(s,{clickable:"",onClick:l.onItemClick},{default:(0,o.w5)((()=>[(0,o.Wm)(r,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[y])),_:1})])),_:1})])),_:1},8,["onClick"]),[[d]]),(0,o.wy)((0,o.Wm)(s,{clickable:"",onClick:l.onItemClick},{default:(0,o.w5)((()=>[(0,o.Wm)(r,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[D])),_:1})])),_:1})])),_:1},8,["onClick"]),[[d]])])),_:1})])),_:1})])}const I={name:"NodeList",setup(){return{onMainClick(){},onItemClick(){}}}};var x=n(4446),P=n(7011),U=n(3414),T=n(2035),H=n(2350),B=n(677);const O=(0,b.Z)(I,[["render",A]]),F=O;h()(I,"components",{QBtnDropdown:x.Z,QList:P.Z,QItem:U.Z,QItemSection:T.Z,QItemLabel:H.Z}),h()(I,"directives",{ClosePopup:B.Z});const N={class:"flip-card"},S={class:"flip-card-inner"},V={class:"flip-card-front"},z={class:"flip-card-back"};function M(e,t,n,l,a,u){const c=(0,o.up)("q-icon");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",N,[(0,o._)("div",S,[(0,o._)("div",V,[(0,o.Wm)(c,{name:"looks_one",style:{"background-color":"#bbb","font-size":"48px"}})]),(0,o._)("div",z,[(0,o.Wm)(c,{name:"menu",style:{"font-size":"48px"}})])])])])}const R={name:"FloatButton",setup(){return{}}},j=(0,b.Z)(R,[["render",M],["__scopeId","data-v-7d4cff40"]]),E=j;h()(R,"components",{QIcon:v.Z});const K=(0,o.aZ)({name:"MainLayout",components:{LeftPane:C,NodeList:F,FloatButton:E},setup(){const e=(0,w.iH)(!1);return{leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}});var Y=n(3066),G=n(3812),J=n(9570),X=n(9784),$=n(3747),ee=n(2496),te=n(208),ne=n(9526),oe=n(2652);const le=(0,b.Z)(K,[["render",a]]),ae=le;h()(K,"components",{QLayout:Y.Z,QHeader:G.Z,QToolbar:J.Z,QBtn:X.Z,QToolbarTitle:$.Z,QTabs:ee.Z,QRouteTab:te.Z,QDrawer:ne.Z,QPageContainer:oe.Z})}}]);