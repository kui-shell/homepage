(self.webpackChunkkui_shell=self.webpackChunkkui_shell||[]).push([[1095,6737],{35227:(e,t,n)=>{"use strict";function o(e){const t=e.find((e=>"Succeeded"===e.type));return t&&(!0===t.status||!1!==t.status&&/true/i.test(t.status))}n.d(t,{Z:()=>o})},64930:(e,t,n)=>{"use strict";n.d(t,{h:()=>i,A:()=>s});var o=function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function a(e){try{c(o.next(e))}catch(e){s(e)}}function r(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}c((o=o.apply(e,t||[])).next())}))};function i(e,t){return e.REPL.qexec(`kubectl get Pipeline ${t.spec.pipelineRef.name} -o json`).catch((e=>{if(404!==e.code)throw e}))}function s(e){return o(this,void 0,void 0,(function*(){return(yield e.REPL.qexec("kubectl get Task -o json")).items}))}},66009:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});var o=n(51173),i=n(19945),s=n(83580),a=n(64930),r=n(55287),c=function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function a(e){try{c(o.next(e))}catch(e){s(e)}}function r(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}c((o=o.apply(e,t||[])).next())}))};const d={mode:"flow",label:(0,o.i18n)("plugin-kubectl","tekton")("flow"),content:(e,t)=>c(void 0,void 0,void 0,(function*(){if((0,i.Ib)(t)){if((0,r.BC)(t)){const[n,o]=yield Promise.all([(0,a.h)(e,t),(0,a.A)(e)]);return{content:(yield(0,s.Z)(e,[n].concat(o),t)).content}}if((0,r.eU)(t)){const n=yield(0,a.A)(e);return{content:(yield(0,s.Z)(e,[t].concat(n))).content}}return{content:(yield(0,s.Z)(e,[t])).content}}return{content:t.content}})),defaultMode:!0}},55287:(e,t,n)=>{"use strict";n.d(t,{N2:()=>i,eU:()=>s,BC:()=>a});const o=/tekton.dev/;function i(e){return e&&o.test(e.apiVersion)&&"Task"===e.kind}function s(e){const t=e;return t&&o.test(t.apiVersion)&&void 0!==t.spec&&"Pipeline"===t.kind&&void 0!==t.spec.tasks}function a(e){const t=e;return o.test(t.apiVersion)&&void 0!==t.spec&&"PipelineRun"===t.kind&&void 0!==t.spec.serviceAccount&&void 0!==t.spec.pipelineRef}},91095:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>R});var o=n(11227),i=n.n(o),s=n(19945),a=function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function a(e){try{c(o.next(e))}catch(e){s(e)}}function r(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}c((o=o.apply(e,t||[])).next())}))};const r=i()("plugins/tekton/lib/read"),c=/PipelineResource|Pipeline|Task/,d=e=>a(void 0,void 0,void 0,(function*(){const{safeLoadAll:t}=yield n.e(3320).then(n.t.bind(n,93320,23));return t(yield e).filter((e=>c.test(e.kind)))})),u=(e,t)=>a(void 0,void 0,void 0,(function*(){const n=yield(0,s.LG)(e.REPL,t);if(1===n.length&&n[0])return n[0];throw new Error(`Failed to fetch ${t}`)})),l=(e,t,n,o)=>a(void 0,void 0,void 0,(function*(){if(o){const t=yield d(u(e,o));return n?t.find((e=>"Task"===e.kind&&e.metadata.name===n)):t.filter((e=>"Task"===e.kind))}if(n)return e.REPL.pexec(`kubectl get Task ${e.REPL.encodeComponent(n)}`);{const n=(yield e.REPL.pexec(`kubectl get Pipeline ${e.REPL.encodeComponent(t)}`).catch((e=>(r("got error fetching pipeline",e),{spec:{tasks:[]}})))).spec.tasks.reduce(((e,t)=>(e[t.taskRef.name]=!0,e)),{});return r("referencedTasks",n),e.REPL.qexec("kubectl get Task",void 0,void 0,{filter:e=>e.filter((e=>n[e.name]))})}}));var p=function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function a(e){try{c(o.next(e))}catch(e){s(e)}}function r(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}c((o=o.apply(e,t||[])).next())}))};const f={command:"step",strict:"step",required:[{name:"pipelineName",docs:"Name of the enclosing pipeline"},{name:"taskName",docs:"Name of the enclosing task"},{name:"stepName",docs:"Name of the step"}],optional:[{name:"--file",alias:"-f",docs:"Path to resource specification"}]},m=({tab:e,argvNoOptions:t,parsedOptions:n})=>p(void 0,void 0,void 0,(function*(){const o=t[t.indexOf("step")+1],i=t[t.indexOf("step")+2],s=t[t.indexOf("step")+3],a=yield l(e,o,i,n.f);if(a){const e=a.spec.steps&&a.spec.steps.find((e=>e.name===s));if(e)return{type:"custom",isEntity:!0,prettyType:"step",name:s,packageName:i,contentType:"yaml",content:e};{const e=new Error("step not found");throw e.code=404,e}}{const e=new Error("task not found");throw e.code=404,e}}));var h=function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function a(e){try{c(o.next(e))}catch(e){s(e)}}function r(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}c((o=o.apply(e,t||[])).next())}))};const v=e=>({command:e,strict:e,required:[{name:"pipelineName",docs:"Name of the pipeline"}],optional:[{name:"taskName",docs:"Name of the task",positional:!0},{name:"--file",alias:"-f",docs:"Path to resource specification"}]}),g=e=>({tab:t,argvNoOptions:n,parsedOptions:o})=>h(void 0,void 0,void 0,(function*(){const i=n[n.indexOf(e)+1],s=n[n.indexOf(e)+2],a=yield l(t,i,s,o.f);if(a)return s?{type:"custom",isEntity:!0,prettyType:"task",name:s,packageName:i,contentType:"yaml",content:a}:a;{const e=new Error("task not found");throw e.code=404,e}})),k=e=>{e.listen("/tekton/get/task",g("task"),{usage:v("task")}),e.listen("/tekton/get/tasks",g("tasks"),{usage:v("tasks")})};var y=n(83580),w=function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function a(e){try{c(o.next(e))}catch(e){s(e)}}function r(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}c((o=o.apply(e,t||[])).next())}))};const T={command:"flow",strict:"flow",docs:"Preview a Tekton pipeline",required:[{name:"pipeline.yml",file:!0,docs:"path to a pipeline description file"}]},P=e=>{e.listen("/tekton/flow",(({argvNoOptions:e,tab:t})=>w(void 0,void 0,void 0,(function*(){const n=e[e.indexOf("flow")+1],o=yield u(t,n),i=yield d(o);return(0,y.Z)(t,i,undefined,o,n)}))),{usage:T})};var x=function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function a(e){try{c(o.next(e))}catch(e){s(e)}}function r(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}c((o=o.apply(e,t||[])).next())}))};const R=e=>x(void 0,void 0,void 0,(function*(){return Promise.all([(t=e,void t.listen("/tekton/get/step",m,{usage:f})),k(e),P(e)]);var t}))},83580:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var o=n(11227),i=n.n(o),s=n(26470),a=n(51173),r=n(19945),c=function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function a(e){try{c(o.next(e))}catch(e){s(e)}}function r(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}c((o=o.apply(e,t||[])).next())}))};const d={mode:"Run Config",content:(e,t)=>c(void 0,void 0,void 0,(function*(){if(!(0,r.Ib)(t)){const{safeDump:e}=yield n.e(3320).then(n.t.bind(n,93320,23)),o=t.model.filter((e=>"PipelineRun"===e.kind||"TaskRun"===e.kind)),i=1===o.length&&o[0];return Object.assign({type:"custom",isEntity:!0,contentType:"yaml",resource:i||o,content:e(i||o)},i||{})}}))};var u=n(66009),l=n(35227),p=n(55287),f=function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function a(e){try{c(o.next(e))}catch(e){s(e)}}function r(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}c((o=o.apply(e,t||[])).next())}))};const m=i()("plugins/tekton/lib/tekton2graph"),h=(e,t)=>`__step__${e.name}__${t.name}`;function v(e,t,n,{singletonSource:o,singletonTarget:i,hasRuns:s}){m("addEdge",t.id,n.id),t.ports||(t.ports=[]),n.ports||(n.ports=[]);const a=`${n.id}-`+(i?"pTargetSingleton":`p${n.ports.length}`);n.ports.find((e=>e.id===a))||n.ports.push({id:a});const r=`${t.id}-`+(o?"pSourceSingleton":`p${t.ports.length}`);t.ports.find((e=>e.id===r))||t.ports.push({id:r}),e.edges.push({id:`${t.id}-${n.id}`,source:t.id,sourcePort:r,target:n.id,targetPort:a,visited:s?!(!t.visited||!n.visited):void 0}),n.nParents++,t.nChildren++}function g(e,t,n){return f(this,void 0,void 0,(function*(){m("jsons",e);const o=(e=>{const t=e.find((e=>"Pipeline"===e.kind));if((0,p.eU)(t))return t;{const t=e.filter((e=>"Task"===e.kind));if(0===t.length)throw new Error("No pipeline defined, and no Tasks defined");return{apiVersion:"tekton.dev/v1alpha1",kind:"Pipeline",metadata:{name:"pipeline"},originatingCommand:void 0,isKubeResource:!0,spec:{tasks:t.map((e=>({name:e.metadata.name,taskRef:{name:e.metadata.name}})))}}}})(e);m("pipeline",o);const i=e.filter((e=>"Task"===e.kind)).reduce(((e,t)=>(e[t.metadata.name]=t,e)),{}),s=o.spec.tasks.reduce(((e,t)=>(e[t.name]=i[t.taskRef.name],e)),{}),r=o.spec.tasks.reduce(((e,t)=>(e[t.name]=t,e)),{}),c=n&&n.status.taskRuns,d=n&&[{start:new Date(n.status.startTime).getTime(),duration:0,response:{success:!0}}]||[],u=n&&n.status.completionTime&&[{start:new Date(n.status.completionTime).getTime(),duration:0,response:{success:(0,l.Z)(n.status.conditions)}}]||[],f={id:"root",label:"root",edges:[],children:[],nChildren:0,nParents:0,runs:c&&Object.keys(c).reduce(((e,t)=>{const n=c[t],o=n.pipelineTaskName,i=s[o];if(i){const t=new Date(n.status.startTime).getTime();i.visitedIdx=e.length,e.push({start:t,duration:n.status.completionTime?new Date(n.status.completionTime).getTime()-t:0,response:{success:(0,l.Z)(n.status.conditions)}}),n.status.steps.forEach((t=>{const n=new Date(t.terminated.startedAt).getTime(),o=new Date(t.terminated.finishedAt).getTime(),s="Error"!==t.terminated.reason,a=i.spec.steps.find((e=>e.name===t.name));a&&(a.visitedIdx=e.length,e.push({start:n,duration:o-n,response:{success:s}}))}))}return e}),d.concat(u)),properties:{maxLabelLength:24,fontSize:"4px"}},g={id:"Entry",label:"start",type:"Entry",width:18,height:18,nChildren:0,nParents:0,visited:n&&[0],properties:{title:"The flow starts here",fontSize:"4.5px"}},k={id:"Exit",label:"end",type:"Exit",width:18,height:18,nChildren:0,nParents:0,visited:n&&[1],properties:{title:"The flow ends here",fontSize:"4.5px"}},y=o.spec.tasks.reduce(((e,n)=>{const s=i[n.taskRef.name];m("TaskRef",n.name,s);const r=t?`-f ${(0,a.encodeComponent)(t)}`:"";let d;if(s&&s.spec.steps&&s.spec.steps.length>0){const t=`${(s.spec.inputs&&s.spec.inputs.resources||[]).map((e=>`<span class='color-base0A'>${e.type}</span>:${e.name}`)).join(", ")}`,i=`(${(s.spec.inputs&&s.spec.inputs.params||[]).map((e=>e.name)).join(", ")})`,u=((e="root",{visited:t,children:n,tooltip:o,tooltipColor:i,type:s,onclick:a}={children:[]})=>({id:e,label:e,onclick:a,children:n,visited:t,edges:[],nParents:0,nChildren:0,type:s,tooltip:o,tooltipColor:i}))(n.name,{type:"Tekton Task",tooltip:`<table><tr><td><strong>Resources</strong></td><td>${t}</td></tr><tr><td><strong>Params</strong></td><td>${i}</td></tr></table>`,tooltipColor:"0C",onclick:`tekton get task ${(0,a.encodeComponent)(o.metadata.name)} ${(0,a.encodeComponent)(s.metadata.name)} ${r}`,visited:void 0!==s.visitedIdx?[s.visitedIdx]:void 0,children:s.spec.steps.map((t=>{const i={id:h(n,t),label:t.name,width:3.25*t.name.length,height:13,nChildren:0,nParents:0,deployed:!0,visited:void 0!==t.visitedIdx?[t.visitedIdx]:void 0,type:"Tekton Step",tooltip:`<strong>Image</strong>: ${t.image}`,tooltipColor:"0E",onclick:`tekton get step ${(0,a.encodeComponent)(o.metadata.name)} ${(0,a.encodeComponent)(s.metadata.name)} ${(0,a.encodeComponent)(t.name)} ${r}`};return e[i.id]=i,i}))});u.children.slice(1).reduce(((e,t)=>(v(u,e,t,{hasRuns:void 0!==c}),t)),u.children[0]),d=u}else d={id:n.name,label:n.name,width:3.25*n.name.length,height:13,nChildren:0,nParents:0,type:"Tekton Task",tooltip:"test"};return e[n.name]=d,f.children.push(d),e}),{}),w=(e,t,n={hasRuns:void 0!==c})=>{const o=(e=>{const t=r[e.id],n=s[e.id];return n&&y[h(t,n.spec.steps[n.spec.steps.length-1])]})(e),i=(e=>{const t=r[e.id],n=s[e.id];return n&&y[h(t,n.spec.steps[0])]})(t);o&&i?(v(f,o,i,{singletonSource:!0,singletonTarget:!0,hasRuns:void 0!==c}),e.nChildren++,t.nParents++):!o&&i?(v(f,e,i,{singletonSource:n.singletonSource||!1,singletonTarget:!0,hasRuns:void 0!==c}),t.nParents++):o&&!i?(v(f,o,t,{singletonSource:!0,singletonTarget:n.singletonTarget||!1,hasRuns:void 0!==c}),e.nChildren++):v(f,e,t,Object.assign({},n,{hasRuns:void 0!==c}))},T=(e,t)=>{const n=y[e],o=y[t.name];n?w(n,o):console.error("parent not found",t)};return o.spec.tasks.forEach((e=>{if(e.runAfter&&e.runAfter.forEach((t=>{T(t,e)})),e.resources){const t=t=>{t&&t.forEach((t=>{t.from&&t.from.forEach((t=>{T(t,e)}))}))};t(e.resources.inputs),t(e.resources.outputs)}})),f.children.filter((e=>0===e.nParents)).forEach((e=>w(g,e,{singletonSource:!0,hasRuns:void 0!==f.runs}))),f.children.filter((e=>0===e.nChildren)).forEach((e=>w(e,k,{singletonTarget:!0,hasRuns:void 0!==f.runs}))),f.children.push(g),f.children.push(k),f}))}var k=function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function a(e){try{c(o.next(e))}catch(e){s(e)}}function r(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}c((o=o.apply(e,t||[])).next())}))};const y=i()("plugins/tekton/view/flow"),w=(e,t,o,i="",c)=>k(void 0,void 0,void 0,(function*(){const[l]=yield Promise.all([g(t,c,o)]);y("graph",l);const{graph2doms:p,zoomToFitButtons:f}=yield Promise.all([n.e(460),n.e(4002),n.e(3078)]).then(n.bind(n,86634)),m=document.createElement("div");m.classList.add("padding-content"),m.style.flex="1",m.style.display="flex";const{controller:h}=yield p(e,l,m,l.runs,{layoutOptions:{"elk.separateConnectedComponents":!1,"elk.spacing.nodeNode":10,"elk.padding":"[top=10,left=7.5,bottom=10,right=7.5]",hierarchyHandling:"INCLUDE_CHILDREN"}});y("content",m);const v=[u.default,d,{mode:"Raw",content:i,contentType:"yaml"}],k=["Tekton"];o||(t.find((e=>"PipelineRun"===e.kind||"TaskRun"===e.kind))?k.push({title:"Runnable",css:r.VR.Green}):k.push({title:"Not Runnable",css:r.VR.Yellow}));const w=o&&o.status&&o.status.startTime&&new Date(o.status.startTime),T=o&&o.status&&o.status.completionTime&&new Date(o.status.completionTime),P=w&&T&&T.getTime()-w.getTime();return{isFromFlowCommand:!0,metadata:{name:c?(0,s.basename)(c):t[0].metadata.name},packageName:c&&(0,s.dirname)(c),prettyType:o?"PipelineRun":"Pipeline",duration:P,badges:k,presentation:a.Presentation.FixedSize,content:m,model:t,modes:v.concat(f(h,{visibleWhenShowing:u.default.mode}))}}))}}]);