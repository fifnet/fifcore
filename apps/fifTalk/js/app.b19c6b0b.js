(()=>{"use strict";var t={67075:(t,e,r)=>{r(32474),r(50254);var a=r(86351),o=r(16422),n=r(21073);function s(t,e,r,a,o,s){const i=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(i)}var i=r(55034);async function d(t,e){return new Promise((r=>{var a=document.createElement("script");a.type="module",a.readyState?a.onreadystatechange=function(){"loaded"!=a.readyState&&"complete"!=a.readyState||(a.onreadystatechange=null,e&&(e(),r()))}:a.onload=function(){e&&(e(),r())},a.src=t,document.getElementsByTagName("head")[0].appendChild(a)}))}const c="http://127.0.0.1:4000";d(c+"/util/zzn.js",(()=>{ZZN.init({}),nblib.init({debug:!0,enable_write:!0,APIagent:c+"/getapi"})})),i.r.create(c).start();const l=(0,n.aZ)({name:"App",setup(){return{}}});var u=r(55152);const p=(0,u.Z)(l,[["render",s]]),h=p;var b=r(91105),f=r(40200);const y=[{path:"/",component:()=>Promise.all([r.e(736),r.e(755)]).then(r.bind(r,91755)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(557)]).then(r.bind(r,10557))}]},{path:"/board/:boardid",component:()=>Promise.all([r.e(736),r.e(755)]).then(r.bind(r,91755)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(557)]).then(r.bind(r,10557))}]},{path:"/post/:postid",component:()=>Promise.all([r.e(736),r.e(755)]).then(r.bind(r,91755)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(557)]).then(r.bind(r,10557))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(77)]).then(r.bind(r,40077))}],w=y,m=(0,b.BC)((function(){const t=f.r5,e=(0,f.p7)({scrollBehavior:()=>({left:0,top:0}),routes:w,history:t("")});return e}));async function g(t,e){const r="function"===typeof m?await m({}):m,a=t(h);return a.use(o.Z,e),{app:a,router:r}}var v=r(9966);const P={config:{},plugins:{Dialog:v.Z}},A="";async function B({app:t,router:e},r){let a=!1;const o=t=>{try{return e.resolve(t).href}catch(r){}return Object(t)===t?null:t},n=t=>{if(a=!0,"string"===typeof t&&/^https?:\/\//.test(t))return void(window.location.href=t);const e=o(t);null!==e&&(window.location.href=e,window.location.reload())},s=window.location.href.replace(window.location.origin,"");for(let d=0;!1===a&&d<r.length;d++)try{await r[d]({app:t,router:e,ssrContext:null,redirect:n,urlPath:s,publicPath:A})}catch(i){return i&&i.url?void n(i.url):void console.error("[Quasar] boot error:",i)}!0!==a&&(t.use(e),t.mount("#q-app"))}g(a.ri,P).then((t=>Promise.all([Promise.resolve().then(r.bind(r,53590))]).then((e=>{const r=e.map((t=>t.default)).filter((t=>"function"===typeof t));B(t,r)}))))},53590:(t,e,r)=>{r.r(e),r.d(e,{default:()=>n});var a=r(91105),o=r(57011);const n=(0,a.xr)((({app:t,router:e,store:r})=>{const a=sessionStorage.getItem("fifTalk");o.GL.token=a,console.log("in init token=",a),sessionStorage.setItem("fifTalk",null)}))},57011:(t,e,r)=>{r.d(e,{_E:()=>a,GL:()=>o,vc:()=>n});r(50254);const a={boardsList:"boards.10200.test",postPaid:"Post_Paid",postAdded:"Post_Added",boardPaid:"Board_Paid",boardAdded:"Board_Added",boardDeleted:"Board_Deleted",boardAskPassword:"Board_AskPassword",boardType:{hasPassword:"hasPassword"}};let o={token:null,node:"https://tnode.nbdomain.com",activeBoard:""},n={lastAccount:"",accounts:["nbdomain.b","1001.test","bloodchen.b"]}},55034:(t,e,r)=>{r.d(e,{r:()=>i});r(50254);var a=r(57011);r(4178);class o{constructor(t){this.url=t,this.url="http://127.0.0.1:4000",console.log("API created at:",t);const e=this;i.inst().sub(a._E.postPaid,(t=>{e.dbAddPost(t)})),i.inst().sub(a._E.boardPaid,(t=>{e.dbCreateBoard(t)}))}async callDB(t,e,r=null){e=encodeURIComponent(e);let o=this.url+`/rundb?token=${a.GL.token}&filename=data.db&command=${t}&sql=${e}`;r&&(o+="&para="+encodeURIComponent(r.join("|^|^")));try{const t=await(await fetch(o)).text();return JSON.parse(t)}catch(n){return console.error(n),null}}async callServer(t,e){let r=this.url+"/"+t;e&&(r+="&data="+encodeURIComponent(e));try{const t=await(await fetch(r)).text();return JSON.parse(t)}catch(a){return console.error(a),null}}async getAvatar(t){const e=await this.callServer("avatar/"+t);return e&&0==e.code?e.url:null}async node_readKey(t){return await nblib.queryDomain(t)}async getLastPostOfBoard(t){let e="select * from posts where boardid=? order by time desc limit 1",r=[t];const a=await this.callDB("all",e,r);return a}async dbGetPosts({boardid:t,num:e=-1,skip:r=0,parent:a="0"}){let o="select * from posts where boardid = ? AND parent='0' limit ? offset ?",n=[t,e,r];"0"!=a&&(o="select * from posts where parent = ? limit ? offset ?",n=[a,e,r]);await this.dbGetBoard(t);const s=await this.callDB("all",o,n);console.log("Posts:",s);const i=await this.callDB("all","select parent,count(postid) as count from posts group by parent");console.log("post countObj:",i);for(const d of s)i.find((t=>{t.parent==d.postid&&(d.count=t.count)}));return s}async dbGetPost(t){const e="select * from posts where postid = ?",r=await this.callDB("all",e,[t]);if(r&&r[0]){async function e(t){const e="select * from posts where parent = ?",r=await this.callDB("all",e,[t]);return r}return r[0].children=await e.call(this,t),r[0]}return null}async dbGetBoard(t){const e="select * from boards where boardid = ?",r=await this.callDB("all",e,[t]),a=r[0];if(null!==a&&void 0!==a&&a.extra)try{const t=JSON.parse(a.extra);a.password=t.password}catch(o){}return r[0]}async dbGetAllBoards(){console.log("calling API:getAllBoards");const t="select * from boards",e=await this.callDB("all",t),r=await this.callDB("all","select boardid,count(boardid) as count from posts group by boardid");return e.forEach((t=>{try{t.extra=JSON.parse(t.extra)}catch(e){t.extra=null}r.find((e=>{e.boardid==t.boardid&&(t.count=e.count)}))})),e}async dbCreateBoard({boardid:t,title:e,owner:r,type:o,extra:n}){const s="INSERT INTO boards (boardid,title,owner,type,extra) VALUES (?,?,?,?,?)",d=await this.callDB("run",s,[t,e,r,o,JSON.stringify(n)]);return d.changes>0&&i.inst().fire(a._E.boardAdded,arguments[0]),d}async dbAddAccount(t){const e="INSERT INTO users (author) VALUES (?)",r=await this.callDB("run",e,[t]);return r}async dbDeleteBoard(t){const e="DELETE from posts where boardid = ? ",r=(await this.callDB("run",e,[t]),"DELETE from boards where boardid = ? "),o=await this.callDB("run",r,[t]);return o.changes>0&&i.inst().fire(a._E.boardDeleted,arguments[0]),o}async dbAddPost({boardid:t,title:e,author:r,content:o,time:n,postid:s,parent:d="0"}){let c=await this.dbAddAccount(r);await this.dbGetBoard(t);if(!s||!t)return console.error("dbAddPost: No posdid or no boardid"),null;const l="INSERT INTO posts (boardid,title,author,content,time,postid,parent) VALUES (?,?,?,?,?,?,?)";return c=await this.callDB("run",l,[t,e,r,o,n,s,d]),c.changes>0&&i.inst().fire(a._E.postAdded,arguments[0]),c}}var n=r(14716);let s=null;class i{constructor(t){this.node="https://tnode.nbdomain.com",this.clients={},this.boards=[]}static create(t){return s?(console.error("syncer already created"),s):(s=new i(t),s.api=new o(t),s)}static inst(){return s}async dbGetPosts(){return this.api.dbGetPosts.apply(this.api,arguments)}async dbGetPost(t){return this.api.dbGetPost.apply(this.api,arguments)}async dbGetBoard(t){return this.api.dbGetBoard.apply(this.api,arguments)}async dbDeleteBoard(t){return this.api.dbDeleteBoard.apply(this.api,arguments)}async start(){}async addBoard(t){await this.fetchBoard(t)}async addPost({boardid:t,title:e,content:r}){}async preCreateBoard(t){const e=t.split(".");if(e.length<3)return{code:1,msg:t+" must be a subdomain. eg: abc.nbdomain.b"};let r=await this.api.node_readKey(e[1]+"."+e[2]);return r&&0==r[0].code?16!=r[0].obj.status?{code:3,msg:e[1]+"."+e[2]+" is not public"}:(r=await this.api.node_readKey(t),0===r.code?{code:4,msg:t+"exists. Please choose a new sub-domain"}:{code:0}):{code:2,msg:e[1]+"."+e[2]+" is not registered"}}async dbGetAllBoards(){return this.api.dbGetAllBoards.apply(this.api,arguments)}async _parseItem(t){const e=t.obj.value;let r=e.data;r.boardid=t.domain;const o=await this.dbGetBoard(r.boardid);switch(e.command){case"create":if(r.passHash&&(null===o||void 0===o||!o.password)){if(await this.fire(a._E.boardAskPassword,r),!r.password)return!1;r.extra={password:r.password}}await this.fire(a._E.boardPaid,r);break;case"newPost":if(!o)break;o.password&&(r.title=await n.Z.decryptData(r.title,o.password),r.content=await n.Z.decryptData(r.content,o.password)),r.postid=t.obj.txid,this.fire(a._E.postPaid,r);break;case"editPost":case"comment":}return!0}async refreshBoard(t){this.fetchBoard(t)}async fetchBoard(t){console.log("fetching board:",t);let e=await this.api.getLastPostOfBoard(t),r=t+"/all";e[0]&&(r+="?from="+e[0].time),e=await this.api.node_readKey(r),console.log(e);for(let a=0;a<e.length;a++)if(0==await this._parseItem(e[a]))break}async fetchNew(){let t=this.node+"/api/d/",e=null;this.boards.forEach((t=>{e+=t.name+","})),t+=e;const r=await(await fetch(t)).json();console.log(r),this.clients.forEach((t=>{t.notify(r)})),setTimeout(this.fetchNew.bind(this),1e4)}async fire(t,e){if(this.clients[t])for(const r of this.clients[t])await r(e)}sub(t,e){this.clients[t]||(this.clients[t]=[]),this.clients[t].push(e)}}},14716:(t,e,r)=>{r.d(e,{Z:()=>p});r(47003),r(33189),r(52782),r(94670),r(30891),r(6066),r(60551);const a=t=>btoa(String.fromCharCode.apply(null,t)),o=t=>Uint8Array.from(atob(t),(t=>t.charCodeAt(null))),n=new TextEncoder,s=new TextDecoder,i=t=>window.crypto.subtle.importKey("raw",n.encode(t),"PBKDF2",!1,["deriveKey"]),d=(t,e,r)=>window.crypto.subtle.deriveKey({name:"PBKDF2",salt:e,iterations:25e3,hash:"SHA-256"},t,{name:"AES-GCM",length:256},!1,r);async function c(t,e){try{const r=window.crypto.getRandomValues(new Uint8Array(16)),o=window.crypto.getRandomValues(new Uint8Array(12)),s=await i(e),c=await d(s,r,["encrypt"]),l=await window.crypto.subtle.encrypt({name:"AES-GCM",iv:o},c,n.encode(t)),u=new Uint8Array(l);let p=new Uint8Array(r.byteLength+o.byteLength+u.byteLength);p.set(r,0),p.set(o,r.byteLength),p.set(u,r.byteLength+o.byteLength);const h=a(p);return h}catch(r){return console.log(`Error - ${r}`),""}}async function l(t,e){try{const r=o(t),a=r.slice(0,16),n=r.slice(16,28),c=r.slice(28),l=await i(e),u=await d(l,a,["decrypt"]),p=await window.crypto.subtle.decrypt({name:"AES-GCM",iv:n},u,c);return s.decode(p)}catch(r){return console.log(`Error - ${r}`),""}}function u(t){for(var e="",r=new DataView(t),a=0;a<r.byteLength;a+=4){var o=r.getUint32(a),n=o.toString(16),s="00000000",i=(s+n).slice(-s.length);e+=i}return e}class p{static async encryptData(t,e){return await c(t,e)}static async decryptData(t,e){return await l(t,e)}static async sha256(t){var e=new TextEncoder("utf-8").encode(t);return u(await crypto.subtle.digest("SHA-256",e))}}}},e={};function r(a){var o=e[a];if(void 0!==o)return o.exports;var n=e[a]={exports:{}};return t[a].call(n.exports,n,n.exports,r),n.exports}r.m=t,(()=>{var t=[];r.O=(e,a,o,n)=>{if(!a){var s=1/0;for(l=0;l<t.length;l++){for(var[a,o,n]=t[l],i=!0,d=0;d<a.length;d++)(!1&n||s>=n)&&Object.keys(r.O).every((t=>r.O[t](a[d])))?a.splice(d--,1):(i=!1,n<s&&(s=n));if(i){t.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}n=n||0;for(var l=t.length;l>0&&t[l-1][2]>n;l--)t[l]=t[l-1];t[l]=[a,o,n]}})(),(()=>{r.n=t=>{var e=t&&t.__esModule?()=>t["default"]:()=>t;return r.d(e,{a:e}),e}})(),(()=>{r.d=(t,e)=>{for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}})(),(()=>{r.f={},r.e=t=>Promise.all(Object.keys(r.f).reduce(((e,a)=>(r.f[a](t,e),e)),[]))})(),(()=>{r.u=t=>"js/"+t+"."+{77:"79890d35",557:"1da7051b",755:"80326bfc"}[t]+".js"})(),(()=>{r.miniCssF=t=>"css/"+({143:"app",736:"vendor"}[t]||t)+"."+{143:"31d6cfe0",557:"fbafe6be",736:"fd733fb7"}[t]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()})(),(()=>{r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e)})(),(()=>{var t={},e="firsttalk:";r.l=(a,o,n,s)=>{if(t[a])t[a].push(o);else{var i,d;if(void 0!==n)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var u=c[l];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==e+n){i=u;break}}i||(d=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",e+n),i.src=a),t[a]=[o];var p=(e,r)=>{i.onerror=i.onload=null,clearTimeout(h);var o=t[a];if(delete t[a],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((t=>t(r))),e)return e(r)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),d&&document.head.appendChild(i)}}})(),(()=>{r.r=t=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}})(),(()=>{r.p=""})(),(()=>{var t=(t,e,r,a)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var n=n=>{if(o.onerror=o.onload=null,"load"===n.type)r();else{var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||e,d=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=s,d.request=i,o.parentNode.removeChild(o),a(d)}};return o.onerror=o.onload=n,o.href=e,document.head.appendChild(o),o},e=(t,e)=>{for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var o=r[a],n=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(n===t||n===e))return o}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){o=s[a],n=o.getAttribute("data-href");if(n===t||n===e)return o}},a=a=>new Promise(((o,n)=>{var s=r.miniCssF(a),i=r.p+s;if(e(s,i))return o();t(a,i,o,n)})),o={143:0};r.f.miniCss=(t,e)=>{var r={557:1};o[t]?e.push(o[t]):0!==o[t]&&r[t]&&e.push(o[t]=a(t).then((()=>{o[t]=0}),(e=>{throw delete o[t],e})))}})(),(()=>{var t={143:0};r.f.j=(e,a)=>{var o=r.o(t,e)?t[e]:void 0;if(0!==o)if(o)a.push(o[2]);else{var n=new Promise(((r,a)=>o=t[e]=[r,a]));a.push(o[2]=n);var s=r.p+r.u(e),i=new Error,d=a=>{if(r.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var n=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",i.name="ChunkLoadError",i.type=n,i.request=s,o[1](i)}};r.l(s,d,"chunk-"+e,e)}},r.O.j=e=>0===t[e];var e=(e,a)=>{var o,n,[s,i,d]=a,c=0;if(s.some((e=>0!==t[e]))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(d)var l=d(r)}for(e&&e(a);c<s.length;c++)n=s[c],r.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return r.O(l)},a=self["webpackChunkfirsttalk"]=self["webpackChunkfirsttalk"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))})();var a=r.O(void 0,[736],(()=>r(67075)));a=r.O(a)})();