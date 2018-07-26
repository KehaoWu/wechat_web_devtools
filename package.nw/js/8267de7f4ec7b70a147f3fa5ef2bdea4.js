'use strict';!function(require,directRequire){function a(a,b){function c(b,c){return'object'==f.getType(b)?'string'==f.getType(b.provider)?'string'==f.getType(b.version)?a.compileType!=j.plugin&&'dev'==b.version?void d.push(g.config.JSON_CONTENT_SHOULD_NOT_BE.format([`${c}.version`,'dev'])+'\n\u5982\u679C\u6B63\u5728\u5F00\u53D1\u63D2\u4EF6\uFF0C\u8BF7\u9009\u62E9\u63D2\u4EF6\u6A21\u5F0F'):a.compileType==j.plugin&&'dev'==b.version&&b.provider!=a.appid?void d.push(g.config.JSON_CONTENT_SHOULD_BE.format([`${c}.provider`,a.appid])):'dev'==b.version||/^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/.test(b.version)||void d.push(g.config.JSON_CONTENT_SHOULD_BE.format([`${c}.version`,'\u6570\u5B57.\u6570\u5B57.\u6570\u5B57'])):void d.push(g.config.JSON_CONTENT_SHOULD_BE.format([`${c}.version`,'string'])):void d.push(g.config.JSON_CONTENT_SHOULD_BE.format([`${c}.provider`,'string'])):void d.push(g.config.JSON_CONTENT_SHOULD_BE.format([`${c}`,'object']))}let d=[],e=b.plugins;if(!e)return d;if('object'!=f.getType(e))return d.push(g.config.JSON_CONTENT_SHOULD_BE.format(['plugins','object'])),d;let h={};for(let f in e){let a=e[f];c(a,`plugins.${f}`)&&(h[a.provider]?d.push(`plugins 中存在多个 provider:${a.provider}`):h[a.provider]={provider:a.provider,version:a.version,alias:f})}if(b.subPackages&&b.subPackages.forEach((a,b)=>{if(a.plugins)for(let f in a.plugins){let i=a.plugins[f];(e[f]&&d.push(g.config.JSON_PLUGIN_SHOULD_NOT_IN_SUBPACKAGE.format([`plugins ${f}`,`subPackages[${b}]`])),!!c(i,`subPackages[${b}].plugins.${f}`))&&(h[i.provider]?d.push(`subPackages[${b}].plugins['${f}'].provider 已存在`):h[i.provider]={provider:i.provider,version:i.version,alias:i})}}),0<d.length){let a=new Error(d.join('\n'));throw a.code=o.APP_JSON_CONTENT_ERR,a}}function b(a,b){let c='subPackages';b.subpackages&&(c='subpackages',b.subPackages=b.subpackages,delete b.subpackages);let h=b.pages||[],i=!1;if(b.subPackages){if('array'!=f.getType(b.subPackages)){let a=new Error(g.config.JSON_CONTENT_SHOULD_BE.format([c,'array']));throw a.code=o.APP_JSON_CONTENT_ERR,a}let j={},k={},l=[];if(b.subPackages.forEach((m,n)=>{if('string'!=f.getType(m.root))return void l.push(g.config.JSON_CONTENT_SHOULD_BE.format([`${c}[${n}].root`,'string']));m.root=d.posix.join(m.root,'/');let o=-1;if(b.subPackages.forEach((a,b)=>{if(b!=n&&a.root){let c=d.posix.join('/',m.root,'/'),e=d.posix.join('/',a.root,'/');0==c.indexOf(e)&&(o=b)}}),-1!=o)return void l.push(g.config.JSON_CONTENT_SHOULD_NOT_BE.format([`${c}[${n}].root`,`${c}[${o}].root 的子目录`]));if(h.forEach((a)=>{0==a.indexOf(m.root)&&l.push(g.config.JSON_PAGE_SHOULD_NOT_IN_SUBPACKAGE.format([`pages ${a}`,`${c}[${n}]`]))}),!e.existsSync(d.join(a,m.root)))return void l.push(g.config.JSON_CONTENT_SHOULD_BE.format([`${c}[${n}].root`,'\u76EE\u5F55']));let p=e.statSync(d.join(a,m.root));return p.isDirectory()?j[m.root]?void l.push(g.config.JSON_SUBPACKAGE_EXIST.format([`${c}[${n}].root`])):(j[m.root]=!0,'array'==f.getType(m.pages)?void m.pages.forEach((f)=>{let h=d.posix.join(m.root,f);return k[h]?void l.push(g.config.JSON_PAGES_REPEAT.format([`${c}[${n}]`,f])):void(k[h]=!0,!i&&h==b.entryPagePath&&(i=!0),!e.existsSync(d.join(a,`${h}\.wxml`))&&l.push(g.config.JSON_PAGE_WXML_NOT_EXISTS.format([`${c}[${n}]`,'pages',h])),!e.existsSync(d.join(a,`${h}\.js`))&&l.push(g.config.JSON_PAGE_JS_NOT_EXISTS.format([`${c}[${n}]`,'pages',h])))}):void l.push(g.config.JSON_CONTENT_SHOULD_BE.format([`${c}[${n}].pages`,'array']))):void l.push(g.config.JSON_CONTENT_SHOULD_BE.format([`${c}[${n}].root`,'\u76EE\u5F55']))}),0<l.length){let a=new Error(l.join('\n'));throw a.code=o.APP_JSON_CONTENT_ERR,a}}return i}async function c(c){let l=await k(c),p=l.srcPath,q=require('./6242f55dbdfe53c2f07b7a51568311f2.js'),r='app.json',s='',t=[];try{s=l.getFile(r)}catch(a){let b=new Error(g.config.FILE_NOT_FOUND.format(r));throw b.code=o.APP_JSON_READ_ERR,b.ext=a.toString(),b}let u={};try{u=JSON.parse(s)}catch(a){let b=m.parseJsonParseErr({data:s,error:a}),c=new Error(b);throw c.code=o.APP_JSON_PARSE_ERR,c}let v=c.compileType,w=u.pages||[];if('array'!=f.getType(w)||0===w.length){let a=new Error(g.config.ENTRANCE_NOT_FOUND.format(JSON.stringify(w)));throw a.code=o.APP_JSON_ENTRANCE_NOT_FOUND_ERR,a}let x=!u.entryPagePath,y={};for(let a,b=0;b<w.length;b++){if(a=w[b],y[a]){let b=new Error(g.config.JSON_PAGES_REPEAT.format([r,a]));throw b.code=o.APP_JSON_PAGES_ERR,b}if(y[a]=!0,x||a!=u.entryPagePath||(x=!0),!e.existsSync(d.join(p,`${w[b]}\.wxml`))){let b=new Error(g.config.JSON_PAGE_WXML_NOT_EXISTS.format([r,'pages',a]));throw b.code=o.APP_JSON_WXML_NOT_FOUND,b}if(!e.existsSync(d.join(p,`${w[b]}\.js`))){let b=new Error(g.config.JSON_PAGE_JS_NOT_EXISTS.format([r,'pages',a]));throw b.code=o.APP_JSON_JS_NOT_FOUND,b}}let z=u.tabBar;if(z){let a;if('array'!=f.getType(z.list))a=new Error(g.config.JSON_TABBAR_SHOULD_BE_LIST);else if(!z.list||z.list.length<q.setting.MinTabbarCount)a=new Error(g.config.JSON_TABBAR_AT_LEAST.format(q.setting.MinTabbarCount));else if(z.list.length>q.setting.MaxTabbarCount)a=new Error(g.config.JSON_TABBAR_AT_MOST.format(q.setting.MaxTabbarCount));else{t=[];for(var A=0;A<z.list.length;A++){let a=z.list[A];if(0>w.indexOf(a.pagePath)){t.push(`tabBar[${A}].pagePath "${a.pagePath}" 需在 pages 数组中`);continue}if('object'!=f.getType(a)){t.push(g.config.JSON_TABBAR_ITEM_OBJECT.format(A));continue}let b=a.pagePath;if(!b){t.push(g.config.JSON_TABBAR_PATH_EMPTY.format(A));continue}if('string'!=f.getType(b)){t.push(g.config.JSON_TABBAR_PATH_STRING.format(A));continue}2<=b.split('?').length&&t.push(g.config.JSON_TABBAR_PATH_NOT_CONTAIN.format([A,'?'])),2<=b.split('.').length&&t.push(g.config.JSON_TABBAR_PATH_NOT_CONTAIN.format([A,'.']));let c=[];if(a.iconPath){let b=d.join(p,a.iconPath);a.iconPath=d.relative(p,b),c.push({name:'iconPath',path:b})}if(a.selectedIconPath){let b=d.join(p,a.selectedIconPath);a.selectedIconPath=d.relative(p,b),c.push({name:'selectedIconPath',path:b})}c.forEach((a)=>{if(!e.existsSync(a.path))return t.push(g.config.JSON_TABBAR_ICON_NOT_FOUND.format([A,a.name]));let b=e.statSync(a.path);if(b.isDirectory())return t.push(g.config.JSON_TABBAR_ICON_NOT_DIR.format([A,a.name]));b.size>1024*q.setting.MaxTabbarIconSize&&t.push(g.config.JSON_TABBAR_ICON_MAX_SIZE.format([A,a.name,q.setting.MaxTabbarIconSize]));let c=d.extname(a.path);0>n.indexOf(c)&&t.push(g.config.JSON_TABBAR_ICON_EXT.format([A,a.name,n.join('\u3001')]))})}0<t.length&&(a=new Error(t.join('\n')))}if(a)throw a.code=o.APP_JSON_CONTENT_ERR,a}if(v==j.conversation||v==j.search){let a,b=u.widgets,h='';if(!b)a=new Error(g.config.JSON_WIDGETS_EMPTY.format('app.json'));else if('array'!=f.getType(b))a=new Error(g.config.JSON_WIDGETS_NOT_ARRAY.format('app.json'));else{let i=[];b.forEach((a,b)=>{if('object'!=f.getType(a))i.push(g.config.JSON_WIDGETS_ITEM_NOT_OBJECT.format(['app.json',b]));else if('conversation'!=a.type&&'search'!=a.type)i.push(g.config.JSON_WIDGETS_TYPE_INVALID.format(['app.json',b,'conversation\u3001search']));else if(!a.path||'string'!=f.getType(a.path))i.push(g.config.JSON_WIDGETS_PATH_NOT_FOUND.format(['app.json',b]));else if(!e.existsSync(d.join(p,a.path)))i.push(g.config.JSON_WIDGETS_PATH_NOT_FOUND.format(['app.json',b]));else{let c=e.statSync(d.join(p,a.path));c.isDirectory()?!e.existsSync(d.join(p,a.path,'widget.js'))&&i.push(g.config.JSON_WIDGETS_JS_NOT_FOUND.format(['app.json',b,'widget.js'])):i.push(g.config.JSON_WIDGETS_PATH_SHOULD_BE_DIR.format(['app.json',b]))}h||a.type!=c.compileType||(h=a.path)}),h||i.push(g.config.JSON_WIDGETS_TYPE_NOT_FOUND.format(['app.json',c.compileType])),0<i.length&&(a=new Error(i.join('\n')))}if(a)throw a.code=o.APP_JSON_CONTENT_ERR,a}let i=await h(c);if(i)for(let a in i)'extPages'!=a&&(u[a]='object'==f.getType(i[a])?Object.assign({},u[a]||{},i[a]):i[a]);let B=b(p,u);if(x=x||B,!x){let a=new Error(g.config.JSON_ENTRY_PAGE_PATH_NOT_FOUND.format(['pages\u3001subPackages','entryPagePath']));throw a.code=o.APP_JSON_PAGES_ERR,a}if(a(c,u),u.window&&(t=[],['enablePullDownRefresh'].forEach((a)=>{'undefined'!=typeof u.window[a]&&'boolean'!=typeof u.window[a]&&t.push(g.config.JSON_CONTENT_SHOULD_BE.format([a,'boolean']))}),u.window.backgroundColorTop&&(u.window.backgroundColor=u.window.backgroundColorTop)),0<t.length){let a=new Error(t.join('\n'));throw a.code=o.APP_JSON_CONTENT_ERR,a}return u}const d=require('path'),e=require('fs'),f=require('./84b183688a46c9e2626d3e6f83365e13.js'),g=require('./common/locales/index.js'),h=require('./551bb965e1f344281d555a429cd2140c.js'),j=require('./9fdd4ac31a05c27355910f0d74accd4c.js'),k=require('./162bf2ee28b76d3b3d95b685cede4146.js'),i=require('./2dfc6a3df6d6fc51266b293c8420e88b.js'),l=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),m=require('./6238a86bb7a55c11aa0f9eb335d0f34c.js'),n=['.png','.jpg','.jpeg'],o=require('./949d8235c744ced2a80121e4dba34c28.js');module.exports=async function(a){try{return await c(a)}catch(a){throw a.code||(a.code=o.APP_JSON_CONTENT_ERR),a}}}(require('lazyload'),require);