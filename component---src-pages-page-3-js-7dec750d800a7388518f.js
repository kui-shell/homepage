(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{168:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(173),l=a(181),c=a(176);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(c.a,{title:"Page three"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 3"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},172:function(e,t,a){var n;e.exports=(n=a(175))&&n.default||n},173:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(5),l=a.n(i),c=a(43),o=a.n(c);a.d(t,"a",function(){return o.a});a(172);var s=r.a.createContext({});function m(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,l=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,l&&i(l),!l&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(m,{data:t,query:a,render:n||i,staticQueryData:e})})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},174:function(e){e.exports={data:{site:{siteMetadata:{title:"Kui"}}}}},175:function(e,t,a){"use strict";a.r(t);a(44);var n=a(0),r=a.n(n),i=a(5),l=a.n(i),c=a(68),o=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=o},176:function(e,t,a){"use strict";var n=a(177),r=a(0),i=a.n(r),l=a(5),c=a.n(l),o=a(182),s=a.n(o);function m(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,c=e.title,o=n.data.site,m=t||o.siteMetadata.description,u={"@context":"http://schema.org","@type":"SoftwareApplication",name:c,description:m,alternateName:c,applicationCategory:"Tool",about:t,audience:{audienceType:"Developers"},author:o.siteMetadata.author,keywords:l,license:"https://github.com/IBM/kui/blob/master/LICENSE",operatingSystem:["OSX","Windows","Linux"],offers:[{description:"Free",price:0,priceCurrency:"USD"}],screenshot:"https://www.kui-shell.org/images/screenshot.jpg",image:"https://www.kui-shell.org/images/screenshot.jpg"};return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s",meta:[{name:"description",content:m},{property:"og:title",content:c},{property:"og:description",content:m},{property:"og:type",content:"website"},{property:"og:image",content:"https://www.kui-shell.org/images/screenshot.jpg"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:m},{property:"twitter:image:src",content:"https://www.kui-shell.org/images/screenshot.jpg"}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)},i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(u)))}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m},177:function(e){e.exports={data:{site:{siteMetadata:{title:"Kui",description:"Kui is an open-source, graphical terminal designed for developers.",author:"@IBMResearch"}}}}},181:function(e,t,a){"use strict";var n=a(174),r=a(0),i=a.n(r),l=a(5),c=a.n(l),o=a(173),s=function(){return i.a.createElement("a",{href:"/"},"Home")},m=function(){return i.a.createElement("a",{href:"https://github.com/IBM/kui",target:"_blank",rel:"noopener noreferrer"},"GitHub")},u=function(){return i.a.createElement("a",{href:"https://github.com/IBM/kui/wiki",target:"_blank",rel:"noopener noreferrer"},"Documentation")},d=function(){return i.a.createElement("header",{className:"kui-main-nav"},i.a.createElement("div",{className:"ibm-grid-container"},i.a.createElement("div",{className:"ibm-grid-col-lg-16-16 kui-nav-border"}),i.a.createElement("div",{className:"ibm-grid-col-lg-16-1 ibm-grid-col-md-8-1 ibm-grid-col-sm-4-1"},i.a.createElement("h1",null,"Kui_")),i.a.createElement("div",{className:"ibm-grid-col-lg-16-9 ibm-grid-col-md-8-2 ibm-grid-col-sm-4-0"}),i.a.createElement("div",{className:"ibm-grid-col-lg-16-6 ibm-grid-col-md-8-5 ibm-grid-col-sm-4-3"},i.a.createElement("button",{className:"icon-button mobile-menu"},i.a.createElement("img",{src:"ui/menu.svg",alt:"Menu"})),i.a.createElement("nav",null,i.a.createElement("ul",{className:"kui-link-list"},i.a.createElement("li",null,i.a.createElement(m,null)),i.a.createElement("li",null,i.a.createElement(u,null)))))))},p=function(){return i.a.createElement("footer",{className:"kui-footer"},i.a.createElement("div",{className:"ibm-grid-container"},i.a.createElement("div",{className:"ibm-grid-col-lg-16-12 ibm-grid-col-md-8-5"},i.a.createElement("ul",{className:"kui-link-list"},i.a.createElement("li",null,i.a.createElement(s,null)),i.a.createElement("li",null,i.a.createElement(m,null)),i.a.createElement("li",null,i.a.createElement(u,null))),i.a.createElement("small",{className:"copyright"},"2019")),i.a.createElement("div",{className:"ibm-grid-col-lg-16-4 ibm-grid-col-md-8-3 kui-madebyibm"},"Made for the world by IBM")))},g=(a(164),function(e){var t=e.children;return i.a.createElement(o.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("main",null,t),i.a.createElement(p,{siteTitle:e.site.siteMetadata.title}))},data:n})});g.propTypes={children:c.a.node.isRequired};t.a=g}}]);
//# sourceMappingURL=component---src-pages-page-3-js-7dec750d800a7388518f.js.map