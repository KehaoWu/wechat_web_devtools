'use strict';!function(require,directRequire){function a(){let a=b(),c=m.lastVersion}function b(a){return a=a||global.appVersion,a+='',a=a.replace(/\./g,''),parseInt(a)}function c(a,b){if(!a&&!b)return 0;if(!a)return-1;if(!b)return 1;const c=/\d+/g,d=a.match(c),e=b.match(c);if(!d)return 1;if(!e)return-1;const f=d.map((a)=>parseInt(a)),g=e.map((a)=>parseInt(a)),h=d.length>e.length?e.length:d.length;for(let c=0;c<h;c++){if(f[c]<g[c])return-1;if(f[c]>g[c])return 1}return f.length===g.length?0:f.length<g.length?-1:1}function d(){let a=nw.App.getDataPath(),b=k.join(a,'Secure Preferences'),c=i.readFileSync(b,'utf8'),d=JSON.parse(c),{extensions:e}=d,{settings:f}=e,g=chrome.runtime.id,h=f[g];h.events=[],h.filtered_events={},i.writeFileSync(b+'_temp',JSON.stringify(d));let j=require('./d28a711224425b00101635efe1034c99.js'),l=k.join(o.WeappLog,`fixpreferences.log`);i.writeFileSync(b,JSON.stringify(d));let m=r.spawn(j.getFixpreferencesPath(),[b,`${b}_temp`,l,300],{stdio:'ignore',detached:!0});m.unref()}function e(){q&&d(),nw.App.quit()}function f(a){try{if(a=k.resolve(a),!i.existsSync(a))return;let b=i.statSync(a);if(b.isDirectory()){let b=i.readdirSync(a);if(0<b.length)for(let c=0,d=b.length;c<d;c++)f(k.join(a,b[c]));i.rmdirSync(a)}else i.unlinkSync(a)}catch(a){}}function g(a,b){try{if(a=k.resolve(a),b=k.resolve(b),!i.existsSync(a))return;if(i.existsSync(b)){let c=i.statSync(b),d=i.statSync(a);if(d.isDirectory()&&c.isDirectory()){let c=i.readdirSync(a);for(let d=0,e=c.length;d<e;d++)g(k.join(a,c[d]),k.join(b,c[d]));return void i.rmdirSync(a)}c.isDirectory()&&rmdirSync(b)}i.renameSync(a,b)}catch(a){}}function h(a){if(a=k.resolve(a),i.existsSync(a)){let b=i.statSync(a);if(b.isDirectory())return;i.unlinkSync(a)}h(k.dirname(a)),i.mkdirSync(a)}function j(a,b){try{if(a=k.resolve(a),b=k.resolve(b),!i.existsSync(a))return;let c=i.statSync(a);if(c.isDirectory()){h(b);let c=i.readdirSync(a);for(let d=0,e=c.length;d<e;d++)j(k.join(a,c[d]),k.join(b,c[d]))}else{if(i.existsSync(b)){let a=i.statSync(b);if(a.isDirectory()){let a=k.dirname(b),c=k.join(a,''+Math.random());for(;i.existsSync(c)||c==b;)c=k.join(a,''+Math.random());i.renameSync(b,c)}}h(k.dirname(b)),i.copyFileSync(a,b)}}catch(a){}}const i=require('fs'),k=require('path'),l=require('http'),m=require('./84858de8a097c9cf84ff2c2e3d86e2a9.js'),n=require('./72653d4b93cdd7443296229431a7aa9a.js'),o=require('./92320c1386e6db6a6f2556736a9bc280.js'),p=require('./f171257bbcaef547a3cf27266ccb0db2.js'),q='darwin'===process.platform,r=require('child_process'),s=require('./8baad0631295efb1130774c37d944951.js');var t=9973;module.exports={getAvailablePort:async function(){return s.findFreePort('127.0.0.1')},getType:function(a){return Object.prototype.toString.call(a).toLowerCase().split(' ')[1].replace(']','')},getAppConfig:function(){return{isDev:!!process.execPath.match('nw.exe')||!!process.execPath.match('nwjs.app')||!!process.execPath.match('nwjs.exe'),isBeta:!0===nw.App.manifest.beta,isGamma:!0===nw.App.manifest.gamma}},checkUpdateApp:async function(){return new Promise((c,d)=>{let f=global.appVersion,g=o.WeappApplication;if(a(),m.forceUpdateVersion){let a=m.forceUpdateVersion;m.removeForceUpdateVersion();let h=b(a),j=b(f),l='';if(j<h)l=`当前${f}版本太旧，请正在新版本${a}...`;else if(j>h)l=`当前版本${f}存在问题, 回退至版本${a}...`;else return c();const n=q?'darwin':'x64'===process.arch?'x64':'ia32';let o=`${n}_${a.replace(/\./g,'')}.${q?'dmg':'exe'}`,p=k.join(g,o);if(i.existsSync(p)){let a=global.contentDocument.querySelector('#container');a.innerHTML=`<div class="app-up-data" style="text-align:center;margin-top: 50%; font-size: 16px;padding:20px;">${l}</div>`;let b=q?'open':o,c=q?[o]:[];try{let d=r.spawn(b,c,{detached:!0,cwd:g});d.on('close',(b)=>{0!==b&&(a.innerHTML='<div class="app-up-data" style="text-align:center;margin-top: 50%;font-size: 16px; padding:20px;">\u66F4\u65B0\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u542F\u52A8</div>'),setTimeout(()=>{e()},2e3)})}catch(a){setTimeout(()=>{nw.Shell.openItem(k.join(g,o)),setTimeout(()=>{e()},2e3)},200)}return d()}}c()})},openInspectWin:function(){nw.Window.open('about:blank',{show:!1,width:799,height:799},(a)=>{a.maximize(),a.window.location='chrome://inspect/#devices',a.show()})},getVersionNum:b,compareLibVersion:function(a,b){return c(a,b)},compareSemVer:c,quit:e,rmSync:f,mvSync:g,cpSync:j,mkdirSync:h,getQuery:function(a=''){a=a.replace(/^\?/,'');let b=a.split('&'),c={};for(let d,e=0,f=b.length;e<f;e++)d=(b[e]||'').split('='),c[d[0]]=decodeURIComponent(d[1]);return c}}}(require('lazyload'),require);