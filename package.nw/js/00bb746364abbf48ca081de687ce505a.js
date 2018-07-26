'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('react'),b=require('redux'),c=require('./1fcc6bd55b687d154a4247e57fe3011d.js'),d=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),e=require('./a8c87029da0fa06e986298d447ab0fe2.js'),f=require('./2f0aa63ae61d48294b5e9927ab57e1a4.js'),g=require('./f0466135fc8b3a662084784e5f4ac792.js'),h=require('./72653d4b93cdd7443296229431a7aa9a.js'),i=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),j=require('./53ec6a2d71bd5a4846662679c61fe819.js'),k=require('./875171e7b864aa58d026d4fa0999fbd1.js'),l=require('./9fdd4ac31a05c27355910f0d74accd4c.js'),m=require('./36688fe47ad93626b56c53b4ef316573.js'),n=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),o=require('./common/locales/index.js'),p=require('./3bfffbe88b3d923921f851c0697974fe.js'),{connect:q}=require('react-redux');class r extends a.Component{constructor(a){super(a),this.state={saveBtnTitle:'\u4E0A\u4F20',show:a.show,desc:a.desc,version:a.version,pluginVersionHasBeenEditedManually:!1,pluginUpdateType:n.SEM_VER_UPDATE_TYPE.PATCH,pluginLatestVersion:'',pluginRecommendedVersion:'1.0.0'},this.pluginInit(),this.lock=!1}componentDidMount(){this.props.setMask(!0),this.props.checkUploadStatus()}componentWillUnmount(){this.props.setMask(!1)}componentWillReceiveProps(a){let b={};a.show!=this.props.show&&(b.show=a.show),a.version!=this.props.version&&(b.version=a.version),a.desc!=this.props.desc&&(b.desc=a.desc),this.setState(b)}pluginInit(){try{const{MAJOR:a,MINOR:b,PATCH:c}=n.SEM_VER_UPDATE_TYPE,d=()=>{return!this.state.pluginVersionHasBeenEditedManually},e=(d,e)=>{try{if(!d)return d;const f=d.split('.');switch(e){case c:{return f[2]?(f[2]=(parseInt(f[2])+1).toString(),f.join('.')):f}case b:{return f[1]?(f[1]=(parseInt(f[1])+1).toString(),f[2]='0',f.join('.')):f}case a:{return f[0]?(f[0]=(parseInt(f[0])+1).toString(),f[1]='0',f[2]='0',f.join('.')):f}default:return d;}}catch(a){return h.error(`getVersionRecommendation encountered error: ${a}`),d}},f=(a)=>{return()=>{if(this.state.pluginUpdateType!==a){const b=e(this.state.pluginLatestVersion,a),c={pluginRecommendedVersion:b,pluginUpdateType:a};d()&&(c.version=b),this.setState(c)}}};this.pluginUpdateTypes=[{type:a,wording:o.config.SEM_VER_MAJOR,handler:f(a),checked:()=>this.state.pluginUpdateType===a},{type:b,wording:o.config.SEM_VER_MINOR,handler:f(b),checked:()=>this.state.pluginUpdateType===b},{type:c,wording:o.config.SEM_VER_PATCH,handler:f(c),checked:()=>this.state.pluginUpdateType===c}];try{if(this.props.project.pluginInfo&&this.props.project.pluginInfo.length){let a=this.props.project.pluginInfo.find((a)=>a.appid===this.props.project.appid);if(a&&a.latest&&a.latest.version){this.state.pluginLatestVersion=a.latest.version;for(const b of this.pluginUpdateTypes)b.type===this.state.pluginUpdateType&&(this.state.pluginRecommendedVersion=e(a.latest.version,b.type),this.state.version=this.state.pluginRecommendedVersion)}}}catch(a){}p.getLatestPluginInfo(null,{includeSelf:!0,withDependencies:!1}).then((a)=>{if(a&&a[0]&&a[0].latest&&a[0].latest.version){const b=[...(this.props.project.pluginInfo||[])],c=b.findIndex((b)=>b.appid===a[0].appid);if(-1<c?b[c]=a[0]:b.push(a[0]),this.props.setPluginInfo(b),this.setState({pluginLatestVersion:a[0].latest.version}),!this.state.pluginVersionHasBeenEditedManually)for(const b of this.pluginUpdateTypes)if(b.type===this.state.pluginUpdateType){const c=e(a[0].latest.version,b.type);this.setState({pluginRecommendedVersion:c,version:c},()=>{b.handler()})}}}).catch(()=>{})}catch(a){h.error(`plugin init error: ${a}`)}}onClose(){this.lock=!1,m.abort(),this.setState({saveBtnTitle:'\u4E0A\u4F20'}),this.setState({show:!1})}onConfirm(){if(this.lock)return;if(!this.state.version)return this.setState({versionError:!0}),void this.refs.versionInput.focus();if(l.plugin==this.props.project.compileType&&!/^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/.test(this.state.version))return this.refs.versionInput.focus(),void this.setState({versionError:!0});let a=this.state.desc;a||(a=this.getPlaceHolder()),this.lock=!0,this.setState({saveBtnTitle:'\u4E0A\u4F20\u4E2D',versionError:!1});let b=[],c=[];setTimeout(async()=>{let d=this.props,e=d.project;if(e.setting&&e.setting.scriptsEnable&&e.scripts&&e.scripts.beforeUpload){d.consoleActions.clear(),d.consoleActions.log('\u6B63\u5728\u6267\u884C\u81EA\u5B9A\u4E49\u4E0A\u4F20\u524D\u547D\u4EE4...');try{await m.run({command:e.scripts.beforeUpload,options:{cwd:e.projectpath,shell:!0},stderr:d.consoleActions.error,stdout:d.consoleActions.log})}catch(a){return d.consoleActions.error('\u6267\u884C\u81EA\u5B9A\u4E49\u9884\u89C8\u524D\u9884\u5904\u7406\u547D\u4EE4\u5931\u8D25'),void(this.lock=!1)}}g({test:!1,version:this.state.version,desc:a,onFilesIgnored(a){b=a},onFilesMissing:(a=[])=>{c=a}}).then((a)=>{this.onUploadEnd(b,c),this.props.setPkgSize({upload:a.wxpkg_size,uploadSubpackages:a.subpackage_info,lastUploadTime:+new Date}),this.props.saveUploadInfo({desc:this.state.desc,version:this.state.version})}).catch((a)=>{this.lock=!1,h.error(`upload ${a}`),this.setState({show:!1}),this.props.setConfirmInfo({show:!0,showCancel:!1,content:`上传错误，原因：${a}`})})})}getPlaceHolder(){let a=new Date;return`${this.props.nickName} 在 ${a.toLocaleDateString()} ${a.toLocaleTimeString()} 提交上传`}onUploadEnd(a,b){this.lock=!1,this.setState({show:!1},async()=>{if(a&&0<a.length){const b=a.map((a)=>'\n\xB7 '+a).join('');await this.props.setConfirmInfoAsync({show:!0,showCancel:!1,content:`以下文件体积超过 500KB，已经跳过压缩以及 ES6 转 ES5 处理，如在该文件有使用到 ES6 特性，请使用其它工具转换成 ES5 或压缩，否则可能会在低版本设备上运行有风险：${b}`})}if(b&&0<b.length){const a=b.map((a)=>'\n\xB7 '+a).join('');this.props.setConfirmInfo({show:!0,showCancel:!1,content:`以下文件没有被打包上传：${a}`})}}),this.props.showSuccessTip('\u4E0A\u4F20\u4EE3\u7801\u6210\u529F')}onInputChange(a){let b=a.currentTarget,c=b.dataset,d=c.name;this.setState({[d]:b.value})}onVersionChange(a){let b=a.target.value;b=this.props.project.compileType==l.plugin?b.replace(/[^0-9\.]/g,''):b.replace(/[^0-9a-zA-Z\.]/g,''),this.setState({version:b,pluginVersionHasBeenEditedManually:!0})}onTipsCallback(a){a?this.props.setUploadInfo({status:2}):this.props.setUploadInfo({show:!1,status:0})}getExtraPreComponents(){const b=[];if(this.props.project.compileType==l.plugin&&this.props.project.pluginInfo&&this.props.project.pluginInfo.length){let c=this.props.project.pluginInfo.find((a)=>a.appid===this.props.project.appid);if(c&&c.latest&&c.latest.version){b.push(a.createElement('div',{className:'ui-form-item ui-form-item-inline',key:'pluginLatestVersion'},a.createElement('label',{className:'ui-form-label'},'\u6700\u65B0\u7248\u672C\u53F7'),a.createElement('div',{className:'ui-form-controls'},a.createElement('p',null,c.latest.version))));const d=this.pluginUpdateTypes.map((b)=>{const c=b.checked()?'ui-icon-radio-o':'ui-icon-radio';return a.createElement('label',{className:'ui-radio',key:b.type,onClick:b.handler},a.createElement('input',{type:'radio'}),a.createElement('i',{className:c}),a.createElement('span',{className:'ui-radio-text'},b.wording))});b.push(a.createElement('div',{className:'ui-form-item ui-form-item-inline',key:'pluginUpdateType'},a.createElement('label',{className:'ui-form-label'},'\u66F4\u65B0\u7C7B\u578B'),a.createElement('div',{className:'ui-form-controls'},a.createElement('div',{className:'ui-flex'},d))))}}return b}getExtraPostComponents(){return[]}jumpPluginSemVerDoc(){nw.Shell.openExternal(`https://developers.weixin.qq.com/miniprogram/dev/framework/plugin/development.html`)}onAnimationOut(){this.props.setUploadInfo({show:!1,status:0})}render(){let b=this.props;if(1==b.status)return a.createElement(j,{show:!0,content:this.props.wording,showConfirm:!0,showCancel:!0,callback:this.onTipsCallback.bind(this)});return 2==b.status?a.createElement(k,{show:this.state.show,style:{width:600,marginLeft:-300},inClassName:'ui-animate-pull-down ui-dialog',outClassName:'ui-animate-pull-up ui-dialog',onAnimationOut:this.onAnimationOut.bind(this)},a.createElement('div',{className:'ui-dialog-bd'},a.createElement('div',{className:'ui-form'},this.getExtraPreComponents(),a.createElement('div',{className:'ui-form-item ui-form-item-inline'},a.createElement('label',{className:'ui-form-label'},'\u7248\u672C\u53F7'),a.createElement('div',{className:'ui-form-controls'},a.createElement('div',{className:'ui-input-box'},a.createElement('input',{type:'text',ref:'versionInput',value:this.state.version,placeholder:`${this.state.pluginRecommendedVersion}（推荐）`,maxLength:10,"data-name":'version',onChange:this.onVersionChange.bind(this),className:'ui-input'})),a.createElement('p',{className:'ui-form-tips',style:{color:this.state.versionError?'red':'#888888'}},b.project.compileType==l.plugin?a.createElement('span',null,'\u6570\u5B57.\u6570\u5B57.\u6570\u5B57 \u683C\u5F0F\uFF0C\u6BCF\u4E2A\u6570\u5B57\u6700\u5927\u4E3A 999\u3002\u5982 1.0.0\u3002',a.createElement('a',{onClick:this.jumpPluginSemVerDoc.bind(this)},'\u4E86\u89E3\u66F4\u591A')):'\u4EC5\u9650\u5B57\u6BCD\u3001\u6570\u5B57\u3001.'))),a.createElement('div',{className:'ui-form-item ui-form-item-inline'},a.createElement('label',{className:'ui-form-label'},'\u9879\u76EE\u5907\u6CE8'),a.createElement('div',{className:'ui-form-controls'},a.createElement('div',{className:'ui-input-box'},a.createElement('input',{type:'text',ref:'descInput',value:this.state.desc,maxLength:100,"data-name":'desc',onChange:this.onInputChange.bind(this),placeholder:this.getPlaceHolder(),className:'ui-input'})))),this.getExtraPostComponents())),a.createElement('div',{className:'ui-dialog-ft'},a.createElement('div',{className:'ui-dialog-action'},a.createElement('button',{className:'ui-button ui-button-default',onClick:this.onClose.bind(this)},'\u53D6\u6D88'),a.createElement('button',{className:'ui-button ui-button-primary',onClick:this.onConfirm.bind(this)},this.state.saveBtnTitle)))):null}}module.exports=q((a)=>{let b=a.info.uploadInfo,c=a.project.current,d=c.uploadInfo;return _extends({},b,d,{project:c,nickName:a.user.nickName})},(a)=>{const b=i.bindActionCreators(c.setConfirmInfo,a);return{showSuccessTip:i.bindActionCreators(c.showSuccessTip,a),setUploadInfo:i.bindActionCreators(c.setUploadInfo,a),checkUploadStatus:i.bindActionCreators(d.checkUploadStatus,a),setPkgSize:i.bindActionCreators(d.setPkgSize,a),setMask:i.bindActionCreators(e.setMask,a),setConfirmInfo:i.bindActionCreators(c.setConfirmInfo,a),setConfirmInfoAsync(a){return new Promise((c)=>{b(_extends({},a,{callback(a){c(a)}}))})},setPluginInfo:i.bindActionCreators(d.setPluginInfo,a),saveUploadInfo:i.bindActionCreators(d.saveUploadInfo,a),consoleActions:i.bindActionCreators(f,a)}})(r)}(require('lazyload'),require);