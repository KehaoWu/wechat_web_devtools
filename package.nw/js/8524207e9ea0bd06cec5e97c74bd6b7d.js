'use strict';!function(require,directRequire){const a=require('react'),b=require('react-dom'),{Provider:c}=require('react-redux'),d=directRequire('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),e=require('./ff946754202ecf377034d29daac7c8d9.js'),f=require('./437e6043fc662374e4f1c2330516ac40.js'),g=require('./c41853777103289d939a4b1503784d4f.js'),h=require('./5451dfc4d939398d913dc724d952b02b.js'),i=require('./84b183688a46c9e2626d3e6f83365e13.js'),j=require('./da7c31daaf542cf1796023d8e344b98a.js'),k=require('./72653d4b93cdd7443296229431a7aa9a.js'),l=require('./60fdb5a14c198acde3823b610d29f71f.js'),m=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),n='darwin'===process.platform;let o=async()=>{let o=await i.getAvailablePort();global.proxyPort=o,f.startProxyServer({port:o,rule:g});let p=await i.getAvailablePort();if(global.messageCenterPort=p,e.start(p),n&&h.init(global.Win),!global.appConfig.isDev){function a(a,b){try{let c=b.filename,d=b.error.stack;k.error(`filename: ${c}, msg: ${d}`),j(a,'',`filename: ${c}, msg: ${d}`)}catch(a){}}process.on('uncaughtException',(a)=>{console.log(a)}),window.addEventListener('error',(b)=>{a('tool_error_nw',b)}),global.contentWindow.addEventListener('error',(b)=>{a('tool_error_web',b)})}else process.on('uncaughtException',(a)=>{console.log(a)});let q=global.userInfo,r=d.dispatch.bind(d);r({type:m.USER_UPDATE_INFO,userInfo:q}),Object.defineProperties(global,{userInfo:{get(){return q},set(a){q=a,r({type:m.USER_UPDATE_INFO,userInfo:q})}}});const s=require('./9ebfd1a4a241684455002e8c6d889fd7.js');s.init(),b.render(a.createElement(c,{store:d},a.createElement(l,null)),global.contentDocument.getElementById('container'))};'complete'===global.contentDocument.readyState?o():global.contentWindow.addEventListener('load',o)}(require('lazyload'),require);