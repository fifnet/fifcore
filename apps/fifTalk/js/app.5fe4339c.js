(()=>{"use strict";var t={14226:(t,e,a)=>{a(32474),a(50254);var r=a(86351),o=a(16422),n=a(21073);function s(t,e,a,r,o,s){const i=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(i)}var i=a(55034);async function d(t,e){return new Promise((a=>{var r=document.createElement("script");r.type="module",r.readyState?r.onreadystatechange=function(){"loaded"!=r.readyState&&"complete"!=r.readyState||(r.onreadystatechange=null,e&&(e(),a()))}:r.onload=function(){e&&(e(),a())},r.src=t,document.getElementsByTagName("head")[0].appendChild(r)}))}window.addEventListener("message",(t=>{console.log("got event:",t),console.log("event data:",t.data)}),!1);const c="http://127.0.0.1:4000";d(c+"/util/zzn.js",(()=>{ZZN.init({}),nblib.init({debug:!0,enable_write:!0,APIagent:c+"/getapi"})})),i.r.create(c).start();const l=(0,n.aZ)({name:"App",setup(){return{}}});var u=a(55152);const p=(0,u.Z)(l,[["render",s]]),h=p;var b=a(91105),f=a(40200);const y=[{path:"/",component:()=>Promise.all([a.e(736),a.e(755)]).then(a.bind(a,91755)),children:[{path:"",component:()=>Promise.all([a.e(736),a.e(557)]).then(a.bind(a,10557))}]},{path:"/board/:boardid",component:()=>Promise.all([a.e(736),a.e(755)]).then(a.bind(a,91755)),children:[{path:"",component:()=>Promise.all([a.e(736),a.e(557)]).then(a.bind(a,10557))}]},{path:"/post/:postid",component:()=>Promise.all([a.e(736),a.e(755)]).then(a.bind(a,91755)),children:[{path:"",component:()=>Promise.all([a.e(736),a.e(557)]).then(a.bind(a,10557))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([a.e(736),a.e(77)]).then(a.bind(a,40077))}],w=y,m=(0,b.BC)((function(){const t=f.r5,e=(0,f.p7)({scrollBehavior:()=>({left:0,top:0}),routes:w,history:t("")});return e}));async function g(t,e){const a="function"===typeof m?await m({}):m,r=t(h);return r.use(o.Z,e),{app:r,router:a}}var v=a(9966);const P={config:{},plugins:{Dialog:v.Z}},A="";async function B({app:t,router:e},a){let r=!1;const o=t=>{try{return e.resolve(t).href}catch(a){}return Object(t)===t?null:t},n=t=>{if(r=!0,"string"===typeof t&&/^https?:\/\//.test(t))return void(window.location.href=t);const e=o(t);null!==e&&(window.location.href=e,window.location.reload())},s=window.location.href.replace(window.location.origin,"");for(let d=0;!1===r&&d<a.length;d++)try{await a[d]({app:t,router:e,ssrContext:null,redirect:n,urlPath:s,publicPath:A})}catch(i){return i&&i.url?void n(i.url):void console.error("[Quasar] boot error:",i)}!0!==r&&(t.use(e),t.mount("#q-app"))}g(r.ri,P).then((t=>Promise.all([Promise.resolve().then(a.bind(a,53590))]).then((e=>{const a=e.map((t=>t.default)).filter((t=>"function"===typeof t));B(t,a)}))))},53590:(t,e,a)=>{a.r(e),a.d(e,{default:()=>n});var r=a(91105),o=a(57011);const n=(0,r.xr)((({app:t,router:e,store:a})=>{const r=sessionStorage.getItem("fifTalk");if(r){o.GL.token=r;var n=window.location.pathname;document.cookie("token="+r+";path="+n)}else{const t=document.cookie.split("; ").find((t=>t.startsWith("token="))).split("=")[1];o.GL.token=t}console.log("in init token=",r)}))},57011:(t,e,a)=>{a.d(e,{_E:()=>r,GL:()=>o,vc:()=>n});a(50254);const r={boardsList:"boards.10200.test",postPaid:"Post_Paid",postAdded:"Post_Added",boardPaid:"Board_Paid",boardAdded:"Board_Added",boardDeleted:"Board_Deleted",boardAskPassword:"Board_AskPassword",boardType:{hasPassword:"hasPassword"}};let o={token:null,node:"https://tnode.nbdomain.com",activeBoard:""},n={lastAccount:"",accounts:["nbdomain.b","1001.test","bloodchen.b"]}},55034:(t,e,a)=>{a.d(e,{r:()=>i});a(50254);var r=a(57011);a(4178);class o{constructor(t){this.url=t,console.log("API created at:",t);const e=this;i.inst().sub(r._E.postPaid,(t=>{e.dbAddPost(t)})),i.inst().sub(r._E.boardPaid,(t=>{e.dbCreateBoard(t)}))}async callDB(t,e,a=null){e=encodeURIComponent(e);let o=this.url+`/rundb?token=${r.GL.token}&filename=data.db&command=${t}&sql=${e}`;a&&(o+="&para="+encodeURIComponent(a.join("|^|^")));try{const t=await(await fetch(o)).text();return JSON.parse(t)}catch(n){return console.error(n),null}}async callServer(t,e){let a=this.url+"/"+t;e&&(a+="&data="+encodeURIComponent(e));try{const t=await(await fetch(a)).text();return JSON.parse(t)}catch(r){return console.error(r),null}}async getAvatar(t){const e=await this.callServer("avatar/"+t);return e&&0==e.code?e.url:null}async node_readKey(t){return await nblib.queryDomain(t)}async getLastPostOfBoard(t){let e="select * from posts where boardid=? order by time desc limit 1",a=[t];const r=await this.callDB("all",e,a);return r}async dbGetPosts({boardid:t,num:e=-1,skip:a=0,parent:r="0"}){let o="select * from posts where boardid = ? AND parent='0' limit ? offset ?",n=[t,e,a];"0"!=r&&(o="select * from posts where parent = ? limit ? offset ?",n=[r,e,a]);await this.dbGetBoard(t);const s=await this.callDB("all",o,n);console.log("Posts:",s);const i=await this.callDB("all","select parent,count(postid) as count from posts group by parent");console.log("post countObj:",i);for(const d of s)i.find((t=>{t.parent==d.postid&&(d.count=t.count)}));return s}async dbGetPost(t){const e="select * from posts where postid = ?",a=await this.callDB("all",e,[t]);if(a&&a[0]){async function e(t){const e="select * from posts where parent = ?",a=await this.callDB("all",e,[t]);return a}return a[0].children=await e.call(this,t),a[0]}return null}async dbGetBoard(t){const e="select * from boards where boardid = ?",a=await this.callDB("all",e,[t]),r=a[0];if(null!==r&&void 0!==r&&r.extra)try{const t=JSON.parse(r.extra);r.password=t.password}catch(o){}return a[0]}async dbGetAllBoards(){console.log("calling API:getAllBoards");const t="select * from boards",e=await this.callDB("all",t),a=await this.callDB("all","select boardid,count(boardid) as count from posts group by boardid");return e.forEach((t=>{try{t.extra=JSON.parse(t.extra)}catch(e){t.extra=null}a.find((e=>{e.boardid==t.boardid&&(t.count=e.count)}))})),e}async dbCreateBoard({boardid:t,title:e,owner:a,type:o,extra:n}){const s="INSERT INTO boards (boardid,title,owner,type,extra) VALUES (?,?,?,?,?)",d=await this.callDB("run",s,[t,e,a,o,JSON.stringify(n)]);return d.changes>0&&i.inst().fire(r._E.boardAdded,arguments[0]),d}async dbAddAccount(t){const e="INSERT INTO users (author) VALUES (?)",a=await this.callDB("run",e,[t]);return a}async dbDeleteBoard(t){const e="DELETE from posts where boardid = ? ",a=(await this.callDB("run",e,[t]),"DELETE from boards where boardid = ? "),o=await this.callDB("run",a,[t]);return o.changes>0&&i.inst().fire(r._E.boardDeleted,arguments[0]),o}async dbAddPost({boardid:t,title:e,author:a,content:o,time:n,postid:s,parent:d="0"}){let c=await this.dbAddAccount(a);if(!s||!t)return console.error("dbAddPost: No posdid or no boardid"),null;const l="INSERT INTO posts (boardid,title,author,content,time,postid,parent) VALUES (?,?,?,?,?,?,?)";return c=await this.callDB("run",l,[t,e,a,o,n,s,d]),c.changes>0&&i.inst().fire(r._E.postAdded,arguments[0]),c}}var n=a(14716);let s=null;class i{constructor(t){this.node="https://tnode.nbdomain.com",this.clients={},this.boards=[]}static create(t){return s?(console.error("syncer already created"),s):(s=new i(t),s.api=new o(t),s)}static inst(){return s}async dbGetPosts(){return this.api.dbGetPosts.apply(this.api,arguments)}async dbGetPost(t){return this.api.dbGetPost.apply(this.api,arguments)}async dbGetBoard(t){return this.api.dbGetBoard.apply(this.api,arguments)}async dbDeleteBoard(t){return this.api.dbDeleteBoard.apply(this.api,arguments)}async start(){}async addBoard(t){await this.fetchBoard(t)}async addPost({boardid:t,title:e,content:a}){}async preCreateBoard(t){const e=t.split(".");if(e.length<3)return{code:1,msg:t+" must be a subdomain. eg: abc.nbdomain.b"};let a=await this.api.node_readKey(e[1]+"."+e[2]);return a&&0==a[0].code?16!=a[0].obj.status?{code:3,msg:e[1]+"."+e[2]+" is not public"}:(a=await this.api.node_readKey(t),0===a.code?{code:4,msg:t+"exists. Please choose a new sub-domain"}:{code:0}):{code:2,msg:e[1]+"."+e[2]+" is not registered"}}async dbGetAllBoards(){return this.api.dbGetAllBoards.apply(this.api,arguments)}async _parseItem(t){const e=t.obj.value;let a=e.data;a.boardid=t.domain;const o=await this.dbGetBoard(a.boardid);switch(e.command){case"create":if(a.passHash&&(null===o||void 0===o||!o.password)){if(await this.fire(r._E.boardAskPassword,a),!a.password)return!1;a.extra={password:a.password}}await this.fire(r._E.boardPaid,a);break;case"newPost":if(!o)break;o.password&&(a.title=await n.Z.decryptData(a.title,o.password),a.content=await n.Z.decryptData(a.content,o.password)),a.postid=t.obj.txid,a.time>1e11&&(a.time=t.obj.ts),this.fire(r._E.postPaid,a);break;case"editPost":case"comment":}return!0}async refreshBoard(t){this.fetchBoard(t)}async fetchBoard(t){console.log("fetching board:",t);let e=await this.api.getLastPostOfBoard(t),a=t+"/all";e[0]&&(a+="?from="+e[0].time),e=await this.api.node_readKey(a),console.log(e);for(let r=0;r<e.length;r++)if(0==await this._parseItem(e[r]))break}async fetchNew(){let t=this.node+"/api/d/",e=null;this.boards.forEach((t=>{e+=t.name+","})),t+=e;const a=await(await fetch(t)).json();console.log(a),this.clients.forEach((t=>{t.notify(a)})),setTimeout(this.fetchNew.bind(this),1e4)}async fire(t,e){if(this.clients[t])for(const a of this.clients[t])await a(e)}sub(t,e){this.clients[t]||(this.clients[t]=[]),this.clients[t].push(e)}}},14716:(t,e,a)=>{a.d(e,{Z:()=>p});a(47003),a(33189),a(52782),a(94670),a(30891),a(6066),a(60551);const r=t=>btoa(String.fromCharCode.apply(null,t)),o=t=>Uint8Array.from(atob(t),(t=>t.charCodeAt(null))),n=new TextEncoder,s=new TextDecoder,i=t=>window.crypto.subtle.importKey("raw",n.encode(t),"PBKDF2",!1,["deriveKey"]),d=(t,e,a)=>window.crypto.subtle.deriveKey({name:"PBKDF2",salt:e,iterations:25e3,hash:"SHA-256"},t,{name:"AES-GCM",length:256},!1,a);async function c(t,e){try{const a=window.crypto.getRandomValues(new Uint8Array(16)),o=window.crypto.getRandomValues(new Uint8Array(12)),s=await i(e),c=await d(s,a,["encrypt"]),l=await window.crypto.subtle.encrypt({name:"AES-GCM",iv:o},c,n.encode(t)),u=new Uint8Array(l);let p=new Uint8Array(a.byteLength+o.byteLength+u.byteLength);p.set(a,0),p.set(o,a.byteLength),p.set(u,a.byteLength+o.byteLength);const h=r(p);return h}catch(a){return console.log(`Error - ${a}`),""}}async function l(t,e){try{const a=o(t),r=a.slice(0,16),n=a.slice(16,28),c=a.slice(28),l=await i(e),u=await d(l,r,["decrypt"]),p=await window.crypto.subtle.decrypt({name:"AES-GCM",iv:n},u,c);return s.decode(p)}catch(a){return console.log(`Error - ${a}`),""}}function u(t){for(var e="",a=new DataView(t),r=0;r<a.byteLength;r+=4){var o=a.getUint32(r),n=o.toString(16),s="00000000",i=(s+n).slice(-s.length);e+=i}return e}class p{static async encryptData(t,e){return await c(t,e)}static async decryptData(t,e){return await l(t,e)}static async sha256(t){var e=new TextEncoder("utf-8").encode(t);return u(await crypto.subtle.digest("SHA-256",e))}}}},e={};function a(r){var o=e[r];if(void 0!==o)return o.exports;var n=e[r]={exports:{}};return t[r].call(n.exports,n,n.exports,a),n.exports}a.m=t,(()=>{var t=[];a.O=(e,r,o,n)=>{if(!r){var s=1/0;for(l=0;l<t.length;l++){for(var[r,o,n]=t[l],i=!0,d=0;d<r.length;d++)(!1&n||s>=n)&&Object.keys(a.O).every((t=>a.O[t](r[d])))?r.splice(d--,1):(i=!1,n<s&&(s=n));if(i){t.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}n=n||0;for(var l=t.length;l>0&&t[l-1][2]>n;l--)t[l]=t[l-1];t[l]=[r,o,n]}})(),(()=>{a.n=t=>{var e=t&&t.__esModule?()=>t["default"]:()=>t;return a.d(e,{a:e}),e}})(),(()=>{a.d=(t,e)=>{for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}})(),(()=>{a.f={},a.e=t=>Promise.all(Object.keys(a.f).reduce(((e,r)=>(a.f[r](t,e),e)),[]))})(),(()=>{a.u=t=>"js/"+t+"."+{77:"ed64536c",557:"a14653d3",755:"dcfcf902"}[t]+".js"})(),(()=>{a.miniCssF=t=>"css/"+({143:"app",736:"vendor"}[t]||t)+"."+{143:"31d6cfe0",557:"fbafe6be",736:"fd733fb7"}[t]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()})(),(()=>{a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e)})(),(()=>{var t={},e="fifTalk:";a.l=(r,o,n,s)=>{if(t[r])t[r].push(o);else{var i,d;if(void 0!==n)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var u=c[l];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==e+n){i=u;break}}i||(d=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",e+n),i.src=r),t[r]=[o];var p=(e,a)=>{i.onerror=i.onload=null,clearTimeout(h);var o=t[r];if(delete t[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((t=>t(a))),e)return e(a)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),d&&document.head.appendChild(i)}}})(),(()=>{a.r=t=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}})(),(()=>{a.p=""})(),(()=>{var t=(t,e,a,r)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var n=n=>{if(o.onerror=o.onload=null,"load"===n.type)a();else{var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||e,d=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=s,d.request=i,o.parentNode.removeChild(o),r(d)}};return o.onerror=o.onload=n,o.href=e,document.head.appendChild(o),o},e=(t,e)=>{for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var o=a[r],n=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(n===t||n===e))return o}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){o=s[r],n=o.getAttribute("data-href");if(n===t||n===e)return o}},r=r=>new Promise(((o,n)=>{var s=a.miniCssF(r),i=a.p+s;if(e(s,i))return o();t(r,i,o,n)})),o={143:0};a.f.miniCss=(t,e)=>{var a={557:1};o[t]?e.push(o[t]):0!==o[t]&&a[t]&&e.push(o[t]=r(t).then((()=>{o[t]=0}),(e=>{throw delete o[t],e})))}})(),(()=>{var t={143:0};a.f.j=(e,r)=>{var o=a.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var n=new Promise(((a,r)=>o=t[e]=[a,r]));r.push(o[2]=n);var s=a.p+a.u(e),i=new Error,d=r=>{if(a.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",i.name="ChunkLoadError",i.type=n,i.request=s,o[1](i)}};a.l(s,d,"chunk-"+e,e)}},a.O.j=e=>0===t[e];var e=(e,r)=>{var o,n,[s,i,d]=r,c=0;if(s.some((e=>0!==t[e]))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(d)var l=d(a)}for(e&&e(r);c<s.length;c++)n=s[c],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(l)},r=self["webpackChunkfifTalk"]=self["webpackChunkfifTalk"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var r=a.O(void 0,[736],(()=>a(14226)));r=a.O(r)})();