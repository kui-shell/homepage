(self.webpackChunkkui_shell=self.webpackChunkkui_shell||[]).push([[2857],{32857:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>i});var o=s(67294),r=s(62308);class i extends o.PureComponent{constructor(t){super(t),this._onClose=this.onClose.bind(this),this.state=i.getDerivedStateFromProps(t)}static getDerivedStateFromProps(t,e){return e&&t===e.props?e:{props:t,isClosed:!1}}onClose(){this.props.onCloseButtonClick&&this.props.onCloseButtonClick(),this.setState({isClosed:!0})}render(){return this.state.isClosed?o.createElement(o.Fragment,null):o.createElement(r.Alert,{id:this.props.id||"",className:"kui--toolbar-alert "+(this.props.className||""),"data-type":this.props.alert.type,title:this.props.alert.title,actionClose:!this.props.hideCloseButton&&o.createElement(r.AlertActionCloseButton,{onClose:this._onClose}),timeout:this.props.timeout,onTimeout:this._onClose,isInline:!this.props.isGlobal,variant:"error"===this.props.alert.type?"danger":this.props.alert.type},o.createElement(o.Fragment,null,this.props.alert.body||"",this.props.children))}}}}]);