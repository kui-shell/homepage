(self.webpackChunkkui_shell=self.webpackChunkkui_shell||[]).push([[6690],{16690:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var s=n(67294),i=n(62308),a=n(51173);const d=(0,a.i18n)("plugin-client-common");class o extends s.PureComponent{constructor(e){super(e),this.state={expandedIdx:-1}}content(e){const t=this.state.expandedIdx!==e;return s.createElement(i.AccordionContent,{isHidden:t},!t&&this.props.content[e]())}render(){return s.createElement(i.Accordion,{asDefinitionList:!1,className:"kui--accordion "+(this.props.isWidthConstrained?"flex-fill":"")},this.props.names.map(((e,t)=>s.createElement("div",{key:t,className:"kui--accordion-item"},s.createElement(i.AccordionItem,null,s.createElement(i.AccordionToggle,{id:t.toString(),onClick:()=>{this.setState((e=>({expandedIdx:e.expandedIdx!==t?t:-1}))),a.eventBus.emitTabLayoutChange((0,a.getPrimaryTabId)(this.props.tab))},isExpanded:this.state.expandedIdx===t},this.state.expandedIdx!==t?d("Show X",e):d("Hide X",e)),this.content(t))))))}}}}]);