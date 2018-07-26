'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('react'),b=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),c=require('./9c906d27ca74e18d0deaaa231e71fdfa.js'),d=require('./a8c87029da0fa06e986298d447ab0fe2.js'),e=require('./875171e7b864aa58d026d4fa0999fbd1.js'),f=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),g=require('classnames'),h=require('./eb1fe4da47d7ed10884f8b039b058c5b.js'),{connect:i}=require('react-redux');class j extends a.Component{constructor(a){super(a),this.state={show:a.show,currentCheck:{},currentSelect:{}}}componentDidMount(){this.props.userActions.checkAccountStatus()}onCheck(a){const b=_extends({},this.state.currentCheck);b[a]?delete b[a]:b[a]=!0,this.setState({currentCheck:b})}onClose(){this.setState({show:!1}),this.props.setAdditionLogin({show:!1})}onConfirm(){if(0<Object.keys(this.state.currentCheck).length){let{appid:a,projectname:b,projectpath:c}=this.props.project;for(const d in c=encodeURIComponent(c),this.state.currentCheck){const e=this.props.accountMap[d];h.openMiniProgram({appid:a,projectname:b,projectpath:c,options:{simple:!0,userInfo:e}})}}this.onClose()}onAddClick(a){a.stopPropagation();let b=this.refs.container.getBoundingClientRect();this.props.setAdditionLogin({show:!0,left:b.right+10,top:b.top})}onSelectClick(a,b){b.stopPropagation();let c=this.state.currentSelect;b.metaKey||b.ctrlKey?c[a]=!c[a]:c={[a]:!0},this.setState({currentSelect:c})}onRemoveClick(){let a=Object.keys(this.state.currentSelect);0<=a.length&&this.props.userActions.removeAccount(a)}onAnimationOut(){this.props.setMultiAccountBox({show:!1})}renderUserList(){let b=[],c=[];if(0==Object.keys(this.props.accountMap).length)return a.createElement('div',{className:'account-box-bd'},a.createElement('div',{className:'account-box-empty-desc'},'\u6682\u65E0\u53EF\u7528\u6D4B\u8BD5\u53F7\uFF0C',a.createElement('a',{onClick:this.onAddClick.bind(this)},'\u6DFB\u52A0')));for(const d in this.props.accountMap){const e=this.props.accountMap[d];e.loginStatus===f.LOGIN_STATUS.EXPIRED?c.push(a.createElement('div',{className:g({"account-box-account":!0,"account-box-account-selected":this.state.currentSelect[d]}),onClick:this.onSelectClick.bind(this,d),key:d},a.createElement('div',{className:'account-box-account-avatar'},a.createElement('img',{src:e.headUrl,alt:''})),a.createElement('div',{className:'account-box-account-content'},a.createElement('h3',{className:'account-box-account-name'},e.nickName)),a.createElement('div',{className:'account-box-account-ext',onClick:this.onAddClick.bind(this)},a.createElement('a',null,'\u91CD\u65B0\u767B\u5F55')))):b.push(a.createElement('div',{className:g({"account-box-account":!0,"account-box-account-selected":this.state.currentSelect[d]}),onClick:this.onSelectClick.bind(this,d),key:d},a.createElement('div',{className:'account-box-account-avatar'},a.createElement('img',{src:e.headUrl,alt:''})),a.createElement('div',{className:'account-box-account-content'},a.createElement('h3',{className:'account-box-account-name'},e.nickName)),a.createElement('div',{className:'account-box-account-ext',onClick:this.onCheck.bind(this,d)},a.createElement('label',{htmlFor:'',className:'ui-checkbox'},a.createElement('input',{type:'checkbox'}),a.createElement('i',{className:g({"ui-icon-checkbox":!0,"ui-icon-checkbox-o":this.state.currentCheck[e.openid]})})))))}return a.createElement('div',{className:'account-box-bd'},b,0<c.length?a.createElement('div',{className:'account-box-account-title'},'\u767B\u5F55\u6001\u5DF2\u5931\u6548'):null,c)}render(){return a.createElement(e,{show:this.state.show,style:{width:300,marginLeft:-150},inClassName:'ui-animate-pull-down ui-dialog account-box-dialog',outClassName:'ui-animate-pull-up ui-dialog account-box-dialog',onAnimationOut:this.onAnimationOut.bind(this)},a.createElement('div',{className:'ui-dialog-bd',ref:'container'},a.createElement('p',null,'\u9009\u62E9\u4F60\u8981\u767B\u5F55\u7684\u6D4B\u8BD5\u53F7\uFF0C\u7528\u4E8E\u591A\u5E10\u53F7\u8C03\u8BD5'),a.createElement('div',{className:'account-box'},a.createElement('div',{className:'account-box-hd'},a.createElement('h3',{className:'account-box-title'},'\u6D4B\u8BD5\u5E10\u53F7'),a.createElement('span',{className:'account-box-ext'},'\u767B\u5F55')),this.renderUserList(),a.createElement('div',{className:'account-box-ft'},a.createElement('a',{className:'account-box-action',onClick:this.onAddClick.bind(this)},a.createElement('i',{className:'ui-icon-plus'})),a.createElement('a',{className:g({"account-box-action":!0,"account-box-action-disabled":0>=Object.keys(this.state.currentSelect).length}),onClick:this.onRemoveClick.bind(this)},a.createElement('i',{className:'ui-icon-minus'}))))),a.createElement('div',{className:'ui-dialog-ft'},a.createElement('div',{className:'ui-dialog-action'},a.createElement('button',{className:'ui-button ui-button-default',onClick:this.onClose.bind(this)},'\u53D6\u6D88'),a.createElement('button',{className:'ui-button ui-button-primary',onClick:this.onConfirm.bind(this)},'\u786E\u5B9A'))))}}module.exports=i((a)=>{let b=a.user||{},c=b.accountMap||{};return c[b.openid]&&(c=_extends({},c),delete c[b.openid]),{project:a.project.current,accountMap:c,show:a.window.multiAccountBox&&a.window.multiAccountBox.show}},(a)=>{return{userActions:b.bindActionCreators(c,a),setAdditionLogin:b.bindActionCreators(d.setAdditionLogin,a),setMultiAccountBox:b.bindActionCreators(d.setMultiAccountBox,a)}})(j)}(require('lazyload'),require);