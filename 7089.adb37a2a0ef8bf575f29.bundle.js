(self.webpackChunkkui_shell=self.webpackChunkkui_shell||[]).push([[7089],{7089:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>c});var o=t(9034),a=t(7716),u=function(n,e,t,o){return new(t||(t=Promise))((function(a,u){function c(n){try{i(o.next(n))}catch(n){u(n)}}function r(n){try{i(o.throw(n))}catch(n){u(n)}}function i(n){var e;n.done?a(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(c,r)}i((o=o.apply(n,e||[])).next())}))};function c(n){return u(this,void 0,void 0,(function*(){const{commandToPlugin:e,flat:t,usage:u,docs:c}=(0,o.prescanModel)(),r=[];if(!!!t.find((({route:e})=>e===n))){const e=new Error(`Plugin ${n} is not installed`);throw e.code=404,e}for(const t in e){const o=e[t];n&&o===n&&r.push(t)}function i(n,e=n.split("/"),t=2,o=`/${e[1]}`,a=u[o]){if(a){if(e.length-t==0)return a.usage;if(a.children){const u=`${o}/${e[t]}`;return i(n,e,t+1,u,a.children[u])}}}return r.sort(((n,e)=>-n.localeCompare(e))),{header:{name:"command",attributes:[{value:"About"}]},body:r.map((n=>({command:n,usage:i(n),name:n.replace(/^\//,"").replace(/\//g," ")}))).filter((n=>!n.usage||!n.usage.synonymFor&&!n.usage.children)).map((({command:n,name:e})=>({type:"command",name:a.env.KUI_BIN_PREFIX_FOR_COMMANDS?`${a.env.KUI_BIN_PREFIX_FOR_COMMANDS} ${e}`:e,attributes:[{key:"about",value:c[n]}],onclick:e})))}}))}}}]);