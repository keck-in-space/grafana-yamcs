/*! For license information please see module.js.LICENSE.txt */
define(["react","@grafana/ui","@grafana/data","@grafana/runtime"],(function(e,t,n,r){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=51)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t,n){var r=n(18),o=n(13),a=n(35),i=n(36),u=Object.prototype,c=u.hasOwnProperty,s=r((function(e,t){e=Object(e);var n=-1,r=t.length,s=r>2?t[2]:void 0;for(s&&a(t[0],t[1],s)&&(r=1);++n<r;)for(var l=t[n],f=i(l),p=-1,h=f.length;++p<h;){var d=f[p],v=e[d];(void 0===v||o(v,u[d])&&!c.call(e,d))&&(e[d]=l[d])}return e}));e.exports=s},function(e,t,n){var r=n(11),o=n(28),a=n(29),i=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):a(e)}},function(e,t,n){var r=n(12),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t){e.exports=function(e){return e}},function(e,t,n){var r=n(6),o=n(4);e.exports=function(e){if(!o(e))return!1;var t=r(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},function(e,t,n){var r=n(7).Symbol;e.exports=r},function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(27))},function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},function(e,t,n){var r=n(10),o=n(15);e.exports=function(e){return null!=e&&o(e.length)&&!r(e)}},function(e,t){e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},function(e,t){var n=/^(?:0|[1-9]\d*)$/;e.exports=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&n.test(e))&&e>-1&&e%1==0&&e<t}},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){var r=n(9),o=n(19),a=n(21);e.exports=function(e,t){return a(o(e,t,r),e+"")}},function(e,t,n){var r=n(20),o=Math.max;e.exports=function(e,t,n){return t=o(void 0===t?e.length-1:t,0),function(){for(var a=arguments,i=-1,u=o(a.length-t,0),c=Array(u);++i<u;)c[i]=a[t+i];i=-1;for(var s=Array(t+1);++i<t;)s[i]=a[i];return s[t]=n(c),r(e,this,s)}}},function(e,t){e.exports=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}},function(e,t,n){var r=n(22),o=n(34)(r);e.exports=o},function(e,t,n){var r=n(23),o=n(24),a=n(9),i=o?function(e,t){return o(e,"toString",{configurable:!0,enumerable:!1,value:r(t),writable:!0})}:a;e.exports=i},function(e,t){e.exports=function(e){return function(){return e}}},function(e,t,n){var r=n(25),o=function(){try{var e=r(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();e.exports=o},function(e,t,n){var r=n(26),o=n(33);e.exports=function(e,t){var n=o(e,t);return r(n)?n:void 0}},function(e,t,n){var r=n(10),o=n(30),a=n(4),i=n(32),u=/^\[object .+?Constructor\]$/,c=Function.prototype,s=Object.prototype,l=c.toString,f=s.hasOwnProperty,p=RegExp("^"+l.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!a(e)||o(e))&&(r(e)?p:u).test(i(e))}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){var r=n(11),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,u=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,u),n=e[u];try{e[u]=void 0;var r=!0}catch(e){}var o=i.call(e);return r&&(t?e[u]=n:delete e[u]),o}},function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},function(e,t,n){var r,o=n(31),a=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";e.exports=function(e){return!!a&&a in e}},function(e,t,n){var r=n(7)["__core-js_shared__"];e.exports=r},function(e,t){var n=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return n.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},function(e,t){e.exports=function(e,t){return null==e?void 0:e[t]}},function(e,t){var n=Date.now;e.exports=function(e){var t=0,r=0;return function(){var o=n(),a=16-(o-r);if(r=o,a>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}},function(e,t,n){var r=n(13),o=n(14),a=n(16),i=n(4);e.exports=function(e,t,n){if(!i(n))return!1;var u=typeof t;return!!("number"==u?o(n)&&a(t,n.length):"string"==u&&t in n)&&r(n[t],e)}},function(e,t,n){var r=n(37),o=n(48),a=n(14);e.exports=function(e){return a(e)?r(e,!0):o(e)}},function(e,t,n){var r=n(38),o=n(39),a=n(41),i=n(42),u=n(16),c=n(44),s=Object.prototype.hasOwnProperty;e.exports=function(e,t){var n=a(e),l=!n&&o(e),f=!n&&!l&&i(e),p=!n&&!l&&!f&&c(e),h=n||l||f||p,d=h?r(e.length,String):[],v=d.length;for(var y in e)!t&&!s.call(e,y)||h&&("length"==y||f&&("offset"==y||"parent"==y)||p&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||u(y,v))||d.push(y);return d}},function(e,t){e.exports=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}},function(e,t,n){var r=n(40),o=n(8),a=Object.prototype,i=a.hasOwnProperty,u=a.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(e){return o(e)&&i.call(e,"callee")&&!u.call(e,"callee")};e.exports=c},function(e,t,n){var r=n(6),o=n(8);e.exports=function(e){return o(e)&&"[object Arguments]"==r(e)}},function(e,t){var n=Array.isArray;e.exports=n},function(e,t,n){(function(e){var r=n(7),o=n(43),a=t&&!t.nodeType&&t,i=a&&"object"==typeof e&&e&&!e.nodeType&&e,u=i&&i.exports===a?r.Buffer:void 0,c=(u?u.isBuffer:void 0)||o;e.exports=c}).call(this,n(17)(e))},function(e,t){e.exports=function(){return!1}},function(e,t,n){var r=n(45),o=n(46),a=n(47),i=a&&a.isTypedArray,u=i?o(i):r;e.exports=u},function(e,t,n){var r=n(6),o=n(15),a=n(8),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,e.exports=function(e){return a(e)&&o(e.length)&&!!i[r(e)]}},function(e,t){e.exports=function(e){return function(t){return e(t)}}},function(e,t,n){(function(e){var r=n(12),o=t&&!t.nodeType&&t,a=o&&"object"==typeof e&&e&&!e.nodeType&&e,i=a&&a.exports===o&&r.process,u=function(){try{var e=a&&a.require&&a.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=u}).call(this,n(17)(e))},function(e,t,n){var r=n(4),o=n(49),a=n(50),i=Object.prototype.hasOwnProperty;e.exports=function(e){if(!r(e))return a(e);var t=o(e),n=[];for(var u in e)("constructor"!=u||!t&&i.call(e,u))&&n.push(u);return n}},function(e,t){var n=Object.prototype;e.exports=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||n)}},function(e,t){e.exports=function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t}},function(e,t,n){"use strict";n.r(t);var r=n(2),o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function a(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function u(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function u(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}c((r=r.apply(e,t||[])).next())}))}function c(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}function s(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}var l=n(5),f=n.n(l),p=n(3),h={param:"No Parameter",selectedPath:""},d=function(e){function t(t){var n=e.call(this,t)||this;return n.url=t.url,n}return a(t,e),t.prototype.query=function(e){return u(this,void 0,Promise,(function(){var t,n,o,a,i=this;return c(this,(function(l){switch(l.label){case 0:return t=e.range,n=e.maxDataPoints,o=t.from.valueOf(),a=t.to.valueOf(),[4,Promise.all(e.targets.map((function(e){return u(i,void 0,void 0,(function(){var t,i,u,l,d,v,y,m,b,g,j,w,x,O,P,C;return c(this,(function(c){switch(c.label){case 0:return t=f()(e,h),i=new r.MutableDataFrame({refId:t.refId,fields:[{name:"time",type:r.FieldType.time},{name:"value",type:r.FieldType.number,config:{displayName:t.param}}]}),"/samples",u=this.url+"/samples","No Parameter"===(l=t.param)?[2,i]:(d=this.timestampToYamcs(o),v=this.timestampToYamcs(a),y=u+"/"+l+"/samples?start="+d+"&stop="+v+"&count="+n,[4,Object(p.getBackendSrv)().datasourceRequest({url:y,method:"GET"})]);case 1:if(!(m=c.sent())||!m.data||!m.data.sample)return[2,i];b=m.data.sample;try{for(g=s(b),j=g.next();!j.done;j=g.next())w=j.value,x=this.yamcsToTimestamp(w.time),O=w.avg,i.add({time:x,value:O})}catch(e){P={error:e}}finally{try{j&&!j.done&&(C=g.return)&&C.call(g)}finally{if(P)throw P.error}}return[2,i]}}))}))})))];case 1:return[2,{data:l.sent()}]}}))}))},t.prototype.yamcsToTimestamp=function(e){return new Date(e).getTime()},t.prototype.timestampToYamcs=function(e){return new Date(e).toISOString()},t.prototype.testDatasource=function(){return u(this,void 0,void 0,(function(){var e;return c(this,(function(t){switch(t.label){case 0:return"/instance",e=this.url+"/instance",[4,Object(p.getBackendSrv)().datasourceRequest({url:e,method:"GET",auth:{}})];case 1:return t.sent(),[2,{status:"success",message:"Success"}]}}))}))},t}(r.DataSourceApi),v=n(0),y=n.n(v),m=n(1),b=m.LegacyForms.SecretFormField,g=m.LegacyForms.FormField,j=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onHostChange=function(e){var n=t.props,r=n.onOptionsChange,o=n.options,a=i(i({},o.jsonData),{host:e.target.value});r(i(i({},o),{jsonData:a}))},t.onInstanceChange=function(e){var n=t.props,r=n.onOptionsChange,o=n.options,a=i(i({},o.jsonData),{instance:e.target.value});r(i(i({},o),{jsonData:a}))},t.onUsernameChange=function(e){var n=t.props,r=n.onOptionsChange,o=n.options,a=i(i({},o.jsonData),{username:e.target.value});r(i(i({},o),{jsonData:a}))},t.onAPIKeyChange=function(e){var n=t.props,r=n.onOptionsChange,o=n.options;r(i(i({},o),{secureJsonData:{apiKey:e.target.value}}))},t.onPasswordChange=function(e){var n=t.props,r=n.onOptionsChange,o=n.options;r(i(i({},o),{secureJsonData:{password:e.target.value}}))},t.onResetAPIKey=function(){var e=t.props,n=e.onOptionsChange,r=e.options;n(i(i({},r),{secureJsonFields:i(i({},r.secureJsonFields),{apiKey:!1}),secureJsonData:i(i({},r.secureJsonData),{apiKey:""})}))},t.onResetPassword=function(){var e=t.props,n=e.onOptionsChange,r=e.options;n(i(i({},r),{secureJsonFields:i(i({},r.secureJsonFields),{password:!1}),secureJsonData:i(i({},r.secureJsonData),{password:""})}))},t}return a(t,e),t.prototype.render=function(){var e=this.props.options,t=e.jsonData,n=e.secureJsonFields,r=e.secureJsonData||{};return y.a.createElement("div",{className:"gf-form-group"},y.a.createElement("div",{className:"gf-form"},y.a.createElement(g,{label:"Host name",labelWidth:6,inputWidth:20,onChange:this.onHostChange,value:t.host||"",placeholder:"name of the yamcs host"})),y.a.createElement("div",{className:"gf-form"},y.a.createElement(g,{label:"Instance",labelWidth:6,inputWidth:20,onChange:this.onInstanceChange,value:t.instance||"",placeholder:"name of the Yamcs instance"})),y.a.createElement("div",{className:"gf-form"},y.a.createElement(g,{label:"Username",labelWidth:6,inputWidth:20,onChange:this.onUsernameChange,value:t.username||"",placeholder:"Yamcs username"})),y.a.createElement("div",{className:"gf-form"},y.a.createElement(b,{isConfigured:n&&n.password,onReset:this.onResetPassword,label:"Password",labelWidth:6,inputWidth:20,onChange:this.onPasswordChange,value:r.password||"",placeholder:"Yamcs password"})),y.a.createElement("div",{className:"gf-form-inline"},y.a.createElement("div",{className:"gf-form"},y.a.createElement(b,{isConfigured:n&&n.apiKey,value:r.apiKey||"",label:"API Key",placeholder:"secure json field (backend only)",labelWidth:6,inputWidth:20,onReset:this.onResetAPIKey,onChange:this.onAPIKeyChange}))))},t}(v.PureComponent),w=[{label:"profile 1",value:1},{label:"profile 2",value:2},{label:"profile 3",value:3}],x=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.key=0,t.components=[],t.previousRes=[],t.init=!0,t.loadAsyncOptions=function(e,n,r){return u(t,void 0,void 0,(function(){var t,o,a,i,u,s,l,f,h,d,v;return c(this,(function(c){switch(c.label){case 0:return console.log("CALLED WITH INPUT : ",r),t=e.slice(0,n).join("/"),o=this.props.datasource.url,i=o+(a="/param")+"?system=/"+t+"&pos=0&limit=1000",u=[],[4,Object(p.getBackendSrv)().datasourceRequest({url:i,method:"GET"})];case 1:if(!(s=c.sent()).data)return[2,new Promise((function(e){e(u)}))];console.log("RESP",s),null===(h=s.data.spaceSystems)||void 0===h||h.forEach((function(e){u.push({label:e,value:e.slice(1)+"/"})})),null===(d=s.data.parameters)||void 0===d||d.forEach((function(e){var t=e.name,n=e.qualifiedName;u.push({label:t,value:n.slice(1)})})),l=1e3,c.label=2;case 2:return l<s.data.totalSize?(i=o+a+"?system=/"+t+"?pos="+l+"&limit=1000",[4,Object(p.getBackendSrv)().datasourceRequest({url:i,method:"GET"})]):[3,5];case 3:if(!(f=c.sent()).data)return[3,5];null===(v=f.data.parameters)||void 0===v||v.forEach((function(e){var t=e.name,n=e.qualifiedName;u.push({label:t,value:n.slice(1)})})),c.label=4;case 4:return l+=1e3,[3,2];case 5:return r&&(u=u.filter((function(e){return e.label.toLowerCase().includes(r.toLowerCase())}))),[2,new Promise((function(e){e(u)}))]}}))}))},t.showRawValues=!0,t.handleButton=function(){return u(t,void 0,void 0,(function(){var e,t,n,r;return c(this,(function(o){return e=this.props,t=e.onChange,n=e.query,r=e.onRunQuery,t(i(i({},n),{selectedPath:n.selectedPath+"/Z"})),r(),[2]}))}))},t.handlePathChange=function(e){return u(t,void 0,void 0,(function(){var t,n,r,o,a,u;return c(this,(function(c){return this.init=!1,t=this.props,n=t.onChange,r=t.query,o=t.onRunQuery,a=e.value.endsWith("/"),u=a?"No Parameter":""+e.value,n(i(i({},r),{selectedPath:""+e.value,param:u})),o(),[2]}))}))},t.createComp=function(e,n,r){var o=e[n];return y.a.createElement(m.AsyncSelect,{key:t.key,autoFocus:!t.init&&r,openMenuOnFocus:!0,menuPlacement:"bottom",defaultOptions:!0,cacheOptions:!0,loadOptions:function(r){return console.log("load options called"),t.loadAsyncOptions(e,n,r)},value:{label:o,value:o+"/"},onChange:function(e){t.handlePathChange(e)}})},t}return a(t,e),t.prototype.render=function(){var e=this;console.log("-----",this.props.query.selectedPath,"------------");var t=f()(this.props.query,h).selectedPath.split("/");console.log("PREV RES : ",this.previousRes),console.log("RES : ",t);var n=0;for(n=0;n<Math.min(t.length,this.previousRes.length)&&t[n]===this.previousRes[n];n++);console.log("i : ",n),this.components=this.components.slice(0,n),console.log(this.components);for(var r=n;r<t.length;r++)this.components.push(this.createComp(t,r,r===n+1)),console.log(this.key),this.key=this.key+1;return console.log(this.components),this.previousRes=t,y.a.createElement("div",null,y.a.createElement("div",{className:"gf-form"},y.a.createElement(m.HorizontalGroup,null,y.a.createElement(m.InlineFormLabel,{width:5},"Parameter"),this.components,y.a.createElement(m.Button,{size:"sm",icon:"question-circle",onClick:function(){console.log("clicked"),e.handleButton()}},"Info"))),y.a.createElement("div",{className:"gf-form"},y.a.createElement(m.HorizontalGroup,null,y.a.createElement(m.InlineFormLabel,{width:5},"Profile"),y.a.createElement(m.Select,{width:10,options:w,placeholder:"default",onChange:function(e){return console.log(e)}}),y.a.createElement(m.Checkbox,{label:"show raw values",defaultChecked:this.showRawValues,onChange:function(t){e.showRawValues=!e.showRawValues,console.log(e.showRawValues)}}))))},t}(v.PureComponent);n.d(t,"plugin",(function(){return O}));var O=new r.DataSourcePlugin(d).setConfigEditor(j).setQueryEditor(x)}])}));
//# sourceMappingURL=module.js.map