(self.webpackChunkkui_shell=self.webpackChunkkui_shell||[]).push([[7510],{47510:(t,n,e)=>{"use strict";e.r(n),e.d(n,{preload:()=>u,plugin:()=>a});var i=e(26470),o=e(51173),r=e(18377),c=function(t,n,e,i){return new(e||(e=Promise))((function(o,r){function c(t){try{l(i.next(t))}catch(t){r(t)}}function s(t){try{l(i.throw(t))}catch(t){r(t)}}function l(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(c,s)}l((i=i.apply(t,n||[])).next())}))};function s(t,n,{toBeCompleted:e}){return c(this,void 0,void 0,(function*(){return(yield t.REPL.rexec(`fscomplete -- "${e}"`)).content}))}function l(t){return c(this,void 0,void 0,(function*(){const n=t.command.substring(t.command.indexOf("-- ")+"-- ".length).replace(/^"(.*)"$/,"$1"),e="/"===n.charAt(n.length-1),c=e?n:(0,i.dirname)(n);if(c)try{const s=(0,o.expandHomeDir)(c),l=yield(0,r.ls)({tab:t.tab,REPL:t.REPL,parsedOptions:{a:!0}},[s]),u=function(t,n,e,o){const r=(0,i.basename)(e)+(o?"/":""),c=r.startsWith("."),s=t.filter((t=>{const n=t.name;return(o||0===n.indexOf(r))&&!n.endsWith("~")&&"."!==n&&".."!==n&&(c||!n.startsWith("."))})),l=/\//.test(e);return s.map((t=>{const n=t.nameForDisplay,e=o?n:n.substring(r.length),c=l?(0,i.basename)(t.nameForDisplay):void 0;return t.dirent.isDirectory||t.dirent.isSymbolicLink?{completion:/\/$/.test(e)?e:`${e}/`,label:c?/\/$/.test(c)?c:`${c}/`:void 0}:{completion:e,addSpace:!0,label:c}}))}(yield l,0,n,e);return{mode:"raw",content:u&&0!==u.length?u:[]}}catch(t){throw console.error("tab completion vfs.ls error",t),t}}))}function u(){(0,o.registerTabCompletionEnumerator)(s,-100)}function a(t){t.listen("/fscomplete",l,{hidden:!0,requiresLocal:!0})}},18377:(t,n,e)=>{"use strict";e.d(n,{ls:()=>a,cp:()=>f,rm:()=>h,UK:()=>d,ot:()=>m,i$:()=>p,ZD:()=>v,h3:()=>y,iv:()=>b,sw:()=>w});var i=e(26470),o=e(51173),r=e(62062),c=e(7716),s=e(48764).Buffer,l=function(t,n,e,i){return new(e||(e=Promise))((function(o,r){function c(t){try{l(i.next(t))}catch(t){r(t)}}function s(t){try{l(i.throw(t))}catch(t){r(t)}}function l(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(c,s)}l((i=i.apply(t,n||[])).next())}))};function u(t){return l(this,void 0,void 0,(function*(){/[*/]$/.test(t)||(t+="/");const n=function(t){let n=0;for(let e=0;e<t.length;e++)"/"===t.charAt(e)&&n++;return n}(t);try{const o=yield(0,r.kU)(t);if(o)return(e=o.filter((t=>!t.isLocal)).map((t=>function(t,n){let e=0;for(let i=0;i<t.length;i++)if("/"===t.charAt(i)&&e++===n)return t.slice(0,i);return t}(t.mountPath,n))),e.filter(((t,n)=>e.indexOf(t)===n))).map((t=>({name:(0,i.basename)(t),nameForDisplay:(0,i.basename)(t),path:t,stats:{size:0,mtimeMs:0,uid:0,gid:0,mode:0},dirent:{isFile:!1,isDirectory:!0,isSymbolicLink:!1,isSpecial:!1,isExecutable:!1,permissions:"",username:""}})))}catch(t){throw console.error("tab completion vfs match mounts error",t),t}var e}))}function a(...t){return l(this,void 0,void 0,(function*(){const n=0===t[1].length?[c.env.PWD]:t[1].map(r.AG),e=(0,r.tH)(n,!0),i=Promise.all(e.map((({filepaths:n,mount:e})=>l(this,void 0,void 0,(function*(){try{return yield e.ls(t[0],n)}catch(t){if(404!==t.code)throw console.error(t),t}}))))).then(o.flatten),s=Promise.all(n.map(u)),a=(0,o.flatten)(yield s);if(0===e.length&&0===a.length){const t=new Error(`VFS not mounted: ${n}`);throw t.code=404,t}const f=(yield i).filter((t=>t));return 0===a.length?(f.length,f):a.concat(f).sort(((t,n)=>t.name.localeCompare(n.name)))}))}function f(t,n,e){return l(this,void 0,void 0,(function*(){const i=n.map((t=>(0,r.Xy)(t))),o=(0,r.Xy)(e);if(o.isLocal){const r=i.map(((t,e)=>t.isLocal?n[e]:void 0)).filter((t=>t)),c=i.map(((t,e)=>t.isLocal?void 0:{filepath:n[e],mount:t})).filter((t=>t)),s=0===r.length?[]:[o.cp(t,r,e,r.map((()=>!0)),!0,i,o)];if(c.length>0){const n=c[0].mount,r=o===n;s.push(n.cp(t,c.map((t=>t.filepath)),e,c.map((t=>t.mount===n)),r,i,o))}const l=yield Promise.all(s);return 1===l.length&&!0===l[0]||l.join(", ")}{const r=o,c=i.map((t=>t===r)),s=o===r;return r.cp(t,n,e,c,s,i,o)}}))}function h(...t){return l(this,void 0,void 0,(function*(){return(0,r.Xy)(t[1]).rm(t[0],t[1],t[2])}))}function d(...t){return l(this,void 0,void 0,(function*(){return(0,r.Xy)(t[1]).fstat(t[0],t[1],t[2],t[3])}))}function m(t,n,e,i){return l(this,void 0,void 0,(function*(){const o=(0,r.Xy)(t,void 0,!0);if(!o)throw new Error(`head: can not find ${t}`);if("bytes"===i)return o.fslice(t,n,e);{let i=n,r="";for(;;)try{const n=yield o.fslice(t,i,4e3);if(!n){console.error("bash-like fslice: no data read");break}{r=r.concat(n);const t=r.split("\n");if(t.length>=e){r=t.slice(0,e).join("\n");break}i=s.from(r).length}}catch(t){console.error(t);break}return r}}))}function p(...t){return l(this,void 0,void 0,(function*(){return(0,r.Xy)(t[1]).mkdir(t[0],t[1])}))}function v(...t){return l(this,void 0,void 0,(function*(){return(0,r.Xy)(t[1]).rmdir(t[0],t[1])}))}function y(...t){return l(this,void 0,void 0,(function*(){const n=(0,r.tH)(t[2],!1);if(0===n.length){const n=new Error(`VFS not mounted: ${t[2]}`);throw n.code=404,n}const e=(yield Promise.all(n.map((({filepaths:n,mount:e})=>e.grep(t[0],t[1],n))))).filter((t=>!0!==t));if(e.length>0){if(t[0].parsedOptions.c){return e.reduce(((t,n)=>t+n),0)}return(0,o.flatten)(e)}}))}function g(t){if(t)return t.reduce(((t,n)=>t?n?(t.body.splice(t.body.length-1,0,...n.body),t):void 0:n),void 0)}function b(...t){return l(this,void 0,void 0,(function*(){const n=(0,r.tH)(t[1],!0);if(0===n.length){const n=new Error(`VFS not mounted: ${t[1]}`);throw n.code=404,n}return g(yield Promise.all(n.map((({filepaths:n,mount:e})=>e.gzip(t[0],n)))))}))}function w(...t){return l(this,void 0,void 0,(function*(){const n=(0,r.tH)(t[1],!0);if(0===n.length){const n=new Error(`VFS not mounted: ${t[1]}`);throw n.code=404,n}return g(yield Promise.all(n.map((({filepaths:n,mount:e})=>e.gunzip(t[0],n)))))}))}},62062:(t,n,e)=>{"use strict";e.d(n,{LI:()=>p,AG:()=>v,kU:()=>y,Xy:()=>g,tH:()=>b});var i=e(11227),o=e.n(i),r=e(83859),c=e.n(r),s=e(26470),l=e(51173),u=function(t,n,e,i){return new(e||(e=Promise))((function(o,r){function c(t){try{l(i.next(t))}catch(t){r(t)}}function s(t){try{l(i.throw(t))}catch(t){r(t)}}function l(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(c,s)}l((i=i.apply(t,n||[])).next())}))};const a=o()("plugin-bash-like/fs/vfs"),f=[];function h(t,n){const e=t.mountPath.split(/\//).filter((t=>t)),i=n.mountPath.split(/\//).filter((t=>t));let o=0;const r=Math.min(e.length,i.length);for(;++o<r&&e[o]===i[o];);return 0===o||e.length===i.length?0:o===e.length?-1:i.length-e.length}function d(t){const n=f.findIndex((n=>n.mountPath===t.mountPath));n>=0?f.splice(n,1,t):(f.push(t),f.sort(h))}function m({REPL:t},n){return u(this,void 0,void 0,(function*(){const e=yield n(t),i=Array.isArray(e)?e:[e];yield Promise.all(i.map(d))}))}function p(t){return u(this,void 0,void 0,(function*(){if("function"!=typeof t)d(t);else{const n=(0,l.getCurrentTab)();if(n)m(n,t);else{let n=!1;l.eventBus.on("/tab/new",(e=>{n||(n=!0,m(e,t))}))}}}))}function v(t){return(0,s.isAbsolute)((0,l.expandHomeDir)(t))?t:(0,s.join)((0,l.cwd)(),t)}function y(t,n=!1){const e=(0,l.inBrowser)();t=v(t);return f.filter((i=>i.mountPath.startsWith(t)&&(!n||!e||i.isVirtual)))}function g(t,n=!1,e=!1){const i=(0,l.inBrowser)(),o=(t=v(t)).split(/\//),r=[];for(let t=1;t<o.length;t++)o[t]&&r.push("/"+o.slice(1,t+1).join("/"));let c;for(let t=0;t<f.length;t++){const e=f[t],{mountPath:o}=e;if(r.includes(o)&&(!n||!i||e.isVirtual)){c=e;break}}if(!c){if(e)for(let e=0;e<f.length;e++){const o=f[e];if(o.mountPath.startsWith(t)&&(!n||!i||o.isVirtual))return}c=f.find((t=>t.isLocal))}return a(`findMount ${t}->${c.mountPath}`),c}function b(t,n=!1){return 0===t.length?b([(0,l.cwd)()],n):t.map((t=>({filepaths:[c()(t)],mount:g(t,n)}))).filter((t=>void 0!==t.mount)).reduce(((t,n)=>(0===t.length||t[t.length-1].mount.mountPath!==n.mount.mountPath?t.push(n):t[t.length-1].filepaths.splice(t.length,0,...n.filepaths),t)),[])}}}]);