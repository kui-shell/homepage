(self.webpackChunkkui_shell=self.webpackChunkkui_shell||[]).push([[4642],{63542:(n,t,e)=>{"use strict";e.d(t,{Z:()=>o});const o="github.com/kui-shell/plugin-kubectl/v1alpha1"},94642:(n,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>C});var o=e(19945);function i(n,t){return(0,o.lN)(n)||new RegExp(`\\s*helm ${t}\\s*$`).test(n.command)}function r(n){return(0,o.d1)(n,void 0,"helm")}var c=e(63542),u=e(61032);const{commandPrefix:a}=u.krew,l=a;var s=function(n,t,e,o){return new(e||(e=Promise))((function(i,r){function c(n){try{a(o.next(n))}catch(n){r(n)}}function u(n){try{a(o.throw(n))}catch(n){r(n)}}function a(n){var t;n.done?i(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(c,u)}a((o=o.apply(n,t||[])).next())}))};function h(n){return s(this,void 0,void 0,(function*(){if(i(n,"get"))return(0,o.t$)("helm",n);const{argvNoOptions:t}=n,e=t.indexOf("get")+1,u=t.length-1,a=e<u?t[e]:void 0,l=t[u],s=yield r(n);if(a)return s;const h=s.match(/REVISION:\s+(\S+)[\n\r]+RELEASED:\s+([^\n\r]+)[\n\r]+CHART:\s+(\S+)/);if(!h)return s;const f=h[1],m=h[2],v=Math.min(s.indexOf("USER-SUPPLIED VALUES"),s.indexOf("COMPUTED VALUES"));return{apiVersion:c.Z,kind:"HelmRelease",metadata:{name:l,generation:f,creationTimestamp:m},summary:{content:s.substring(0,v).trim(),contentType:"yaml"},isSimulacrum:!0,originatingCommand:n,isKubeResource:!0,kuiRawData:s,modes:[]}}))}var f=function(n,t,e,o){return new(e||(e=Promise))((function(i,r){function c(n){try{a(o.next(n))}catch(n){r(n)}}function u(n){try{a(o.throw(n))}catch(n){r(n)}}function a(n){var t;n.done?i(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(c,u)}a((o=o.apply(n,t||[])).next())}))};var m=function(n,t,e,o){return new(e||(e=Promise))((function(i,r){function c(n){try{a(o.next(n))}catch(n){r(n)}}function u(n){try{a(o.throw(n))}catch(n){r(n)}}function a(n){var t;n.done?i(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(c,u)}a((o=o.apply(n,t||[])).next())}))};function v(n){return m(this,void 0,void 0,(function*(){if((0,o.lN)(n))return(0,o.t$)("helm",n);const t=yield r(n),e=(0,o.hO)(t.split(/^(?=LAST SEEN|NAMESPACE|NAME\s+)/m));return 0===e[0].length||(0,o.xM)("helm","get",void 0,n,e[0])}))}var d=function(n,t,e,o){return new(e||(e=Promise))((function(i,r){function c(n){try{a(o.next(n))}catch(n){r(n)}}function u(n){try{a(o.throw(n))}catch(n){r(n)}}function a(n){var t;n.done?i(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(c,u)}a((o=o.apply(n,t||[])).next())}))};function p(n){return d(this,void 0,void 0,(function*(){if(i(n,"repo"))return(0,o.t$)("helm",n);const t=yield r(n),e=(0,o.hO)(t.split(/^(?=LAST SEEN|NAMESPACE|NAME\s+)/m));return(0,o.xM)("helm",void 0,void 0,n,e[0])}))}var y=function(n,t,e,o){return new(e||(e=Promise))((function(i,r){function c(n){try{a(o.next(n))}catch(n){r(n)}}function u(n){try{a(o.throw(n))}catch(n){r(n)}}function a(n){var t;n.done?i(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(c,u)}a((o=o.apply(n,t||[])).next())}))};function E(n){return y(this,void 0,void 0,(function*(){if(i(n,"search"))return(0,o.t$)("helm",n);const t=yield r(n),e=(0,o.hO)(t.split(/^(?=LAST SEEN|NAMESPACE|NAME\s+)/m));return(0,o.xM)("helm",void 0,void 0,n,e[0])}))}var w=e(11227),x=e.n(w),$=e(51173),g=function(n,t,e,o){return new(e||(e=Promise))((function(i,r){function c(n){try{a(o.next(n))}catch(n){r(n)}}function u(n){try{a(o.throw(n))}catch(n){r(n)}}function a(n){var t;n.done?i(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(c,u)}a((o=o.apply(n,t||[])).next())}))};const S=(0,$.i18n)("plugin-kubectl"),N=(0,$.i18n)("plugin-kubectl","helm"),A=x()("plugin-kubectl/helm/controller/helm/status");function b(n){return g(this,void 0,void 0,(function*(){if(i(n,"status"))return(0,o.t$)("helm",n);const t=n.argvNoOptions[n.argvNoOptions.indexOf("status")+1],e=yield r(n);try{return((n,t,e,o)=>g(void 0,void 0,void 0,(function*(){A("nested?",o.nested),A("command","kubectl"),A("verb","get");const[t]=e.split(/RESOURCES:|(?=NOTES:)/),i=(e.match(/^NAMESPACE:\s+(.*)$/m)||[])[1];A("namespace",i);const r=(e.match(/^REVISION:\s+(.*)$/m)||[])[1];A("revision",r);const c=[];if(A("resources",c),o.nested)return A("returning tables for nested call"),Promise.all(c.map((({kind:n,table:t})=>g(void 0,void 0,void 0,(function*(){const e=yield t;return e.title=n,e})))));{const o=e.match(/NOTES:\n([\s\S]+)?/),i=t.match(/LAST DEPLOYED: (.*)\nNAMESPACE: (.*)\nSTATUS: (.*)/),u=i?`### ${N("Last Deployed")}\n${i[1]}\n\n### ${N("Namespace")}\n${i[2]}\n\n### ${N("Revision")}\n${r}\n\n### ${S("status")}\n\`${i[3]}\`\n`:t,a="",l=o&&o[1],s={label:"Overview",items:[{mode:"status",label:S("status"),content:u,contentType:"text/markdown"}].concat(a?[{mode:"summary",label:S("summary"),content:a,contentType:"text/markdown"}]:[]).concat(l?[{mode:"notes",label:N("Notes"),content:`\`\`\`${l}\`\`\``,contentType:"text/markdown"}]:[])},h={label:"Resources",items:yield Promise.all(c.map((n=>g(void 0,void 0,void 0,(function*(){return{mode:n.kind,content:yield n.table}})))))};return{apiVersion:"kui-shell/v1",kind:"NavResponse",breadcrumbs:[{label:"helm"},{label:"release",command:"helm ls"},{label:n}],menus:[s,h]}}})))(t,0,e,n.execOptions)}catch(n){return console.error("error formatting status",n),e}}))}var P=function(n,t,e,o){return new(e||(e=Promise))((function(i,r){function c(n){try{a(o.next(n))}catch(n){r(n)}}function u(n){try{a(o.throw(n))}catch(n){r(n)}}function a(n){var t;n.done?i(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(c,u)}a((o=o.apply(n,t||[])).next())}))};const k=/^NAME:\s+([\w-]+)/;function O(n){return P(this,void 0,void 0,(function*(){if(i(n,"install"))return(0,o.t$)("helm",n);const t=yield r(n),e=t.match(k)[1];return n.REPL.qexec(`helm status ${n.REPL.encodeComponent(e)} ${(0,o.UU)(n)}`).catch((n=>(console.error("error in helm get for helm install",n),t)))}))}var M=function(n,t,e,o){return new(e||(e=Promise))((function(i,r){function c(n){try{a(o.next(n))}catch(n){r(n)}}function u(n){try{a(o.throw(n))}catch(n){r(n)}}function a(n){var t;n.done?i(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(c,u)}a((o=o.apply(n,t||[])).next())}))};function R(n){return M(this,void 0,void 0,(function*(){if(i(n,"history"))return(0,o.t$)("helm",n);const t=yield r(n),e=(0,o.hO)(t.split(/^(?=LAST SEEN|NAMESPACE|NAME\s+)/m));return(0,o.xM)("helm",void 0,void 0,n,e[0])}))}const T=n=>/^helm$/.test(n);var L=function(n,t,e,o){return new(e||(e=Promise))((function(i,r){function c(n){try{a(o.next(n))}catch(n){r(n)}}function u(n){try{a(o.throw(n))}catch(n){r(n)}}function a(n){var t;n.done?i(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(c,u)}a((o=o.apply(n,t||[])).next())}))};const C=n=>L(void 0,void 0,void 0,(function*(){(n=>{n.listen(`/${l}/helm/get`,h)})(n),(n=>{f(void 0,void 0,void 0,(function*(){n.listen(`/${l}/_helm`,o.g8,Object.assign({},o.pb,{requiresLocal:!0}))}))})(n),(n=>{n.listen(`/${l}/helm/list`,v),n.listen(`/${l}/helm/ls`,v)})(n),(n=>{n.listen(`/${l}/helm/repo/list`,p),n.listen(`/${l}/helm/repo/ls`,p)})(n),(n=>{n.listen(`/${l}/helm/search`,E)})(n),(n=>{n.listen(`/${l}/helm/status`,b)})(n),(n=>{n.listen(`/${l}/helm/install`,O)})(n),(n=>{n.listen(`/${l}/helm/history`,R)})(n),(n=>{(0,$.inBrowser)()&&!(0,$.hasProxy)()||n.catchall((n=>T(n[0])||n[0]===l&&T(n[1])),(n=>(0,o.lN)(n)||1===n.argv.length&&"helm"===n.argv[0]||2===n.argv.length&&"helm"===n.argv[1]&&n.argv[0]===l?(0,o.t$)("helm",n):r(n)),1)})(n)}))}}]);