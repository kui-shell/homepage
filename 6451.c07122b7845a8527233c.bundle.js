(self.webpackChunkkui_shell=self.webpackChunkkui_shell||[]).push([[6451],{46451:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});var n=a(51173),l=function(e,t,a,n){return new(a||(a=Promise))((function(l,o){function s(e){try{i(n.next(e))}catch(e){o(e)}}function c(e){try{i(n.throw(e))}catch(e){o(e)}}function i(e){var t;e.done?l(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(s,c)}i((n=n.apply(e,t||[])).next())}))};const o={mode:"Logs",label:(0,n.i18n)("plugin-kubectl","tekton")("logs"),content:(e,t)=>l(void 0,void 0,void 0,(function*(){const[{items:a},{items:l}]=yield Promise.all([e.REPL.qexec(`kubectl get taskrun -l tekton.dev/pipelineRun=${t.metadata.name} -o json`),e.REPL.qexec(`kubectl get pods -n ${t.metadata.namespace} -l tekton.dev/pipelineRun=${t.metadata.name} -o json`)]);return{title:"Container Logs",body:(0,n.flatten)(l.map((e=>{const t=e.metadata.labels["tekton.dev/task"],n=a.find((e=>e.metadata.labels["tekton.dev/task"]===t));return e.spec.containers.map(((a,l)=>{const{containerID:o}=e.status.containerStatuses[l],s=n.status.steps.find((e=>e.terminated.containerID===o)),c=s&&s.terminated.reason;return{name:t,css:"slightly-deemphasize",onclick:`kubectl get task ${t} -o yaml`,attributes:[{key:"STEP",value:a.name},{key:"STATUS",value:c,tag:"badge"},{key:"ACTIONS",value:"View Logs",outerCSS:"clickable clickable-color",onclick:`kubectl logs ${e.metadata.name} ${a.name} -n ${e.metadata.namespace}`}]}}))}))),header:{name:"TASK",attributes:[{key:"STEP",value:"STEP"},{key:"STATUS",value:"STATUS"},{key:"ACTIONS",value:"ACTIONS"}]}}}))}}}]);