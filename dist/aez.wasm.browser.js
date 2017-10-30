(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.aez_wasm = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Module = function(Module) {
  Module = Module || {};
  var Module = Module;

var b;b||(b=eval("(function() { try { return Module || {} } catch(e) { return {} } })()"));var k={},m;for(m in b)b.hasOwnProperty(m)&&(k[m]=b[m]);var p=!1,r=!1,t=!1,u=!1;
if(b.ENVIRONMENT)if("WEB"===b.ENVIRONMENT)p=!0;else if("WORKER"===b.ENVIRONMENT)r=!0;else if("NODE"===b.ENVIRONMENT)t=!0;else if("SHELL"===b.ENVIRONMENT)u=!0;else throw Error("The provided Module['ENVIRONMENT'] value is not valid. It must be one of: WEB|WORKER|NODE|SHELL.");else p="object"===typeof window,r="function"===typeof importScripts,t="object"===typeof process&&"function"===typeof require&&!p&&!r,u=!p&&!t&&!r;
"function"!==typeof b.locateFile&&(b.scriptDirectory||(t?b.scriptDirectory=__dirname+"/":p&&!document.currentScript.src.S("blob:")?b.scriptDirectory=document.currentScript.src.split("/").slice(0,-1).join("/")+"/":b.scriptDirectory=r?self.location.href.split("/").slice(0,-1).join("/")+"/":""),b.memoryInitializerPrefixURL||(b.memoryInitializerPrefixURL=b.scriptDirectory),b.pthreadMainPrefixURL||(b.pthreadMainPrefixURL=b.scriptDirectory),b.cdInitializerPrefixURL||(b.cdInitializerPrefixURL=b.scriptDirectory),
b.filePackagePrefixURL||(b.filePackagePrefixURL=b.scriptDirectory));
if(t){b.print||(b.print=console.log);b.printErr||(b.printErr=console.warn);var v,w;b.read=function(a,c){var d;v||(v=require("fs"));w||(w=require("path"));a=w.normalize(a);d=v.readFileSync(a);return c?d:d.toString()};b.readBinary=function(a){a=b.read(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a};b.load=function(a){aa(read(a))};b.thisProgram||(b.thisProgram=1<process.argv.length?process.argv[1].replace(/\\/g,"/"):"unknown-program");b.arguments=process.argv.slice(2);process.on("uncaughtException",
function(a){if(!(a instanceof x))throw a;});b.inspect=function(){return"[Emscripten Module object]"}}else if(u)b.print||(b.print=print),"undefined"!=typeof printErr&&(b.printErr=printErr),b.read="undefined"!=typeof read?function(a){return read(a)}:function(){throw"no read() available";},b.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?b.arguments=scriptArgs:"undefined"!=
typeof arguments&&(b.arguments=arguments),"function"===typeof quit&&(b.quit=function(a){quit(a)}),eval("if (typeof gc === 'function' && gc.toString().indexOf('[native code]') > 0) var gc = undefined");else if(p||r)b.read=function(a){var c=new XMLHttpRequest;c.open("GET",a,!1);c.send(null);return c.responseText},r&&(b.readBinary=function(a){var c=new XMLHttpRequest;c.open("GET",a,!1);c.responseType="arraybuffer";c.send(null);return new Uint8Array(c.response)}),b.readAsync=function(a,c,d){var e=new XMLHttpRequest;
e.open("GET",a,!0);e.responseType="arraybuffer";e.onload=function(){200==e.status||0==e.status&&e.response?c(e.response):d()};e.onerror=d;e.send(null)},"undefined"!=typeof arguments&&(b.arguments=arguments),"undefined"!==typeof console?(b.print||(b.print=function(a){console.log(a)}),b.printErr||(b.printErr=function(a){console.warn(a)})):b.print||(b.print=function(){}),r&&(b.load=importScripts),"undefined"===typeof b.setWindowTitle&&(b.setWindowTitle=function(a){document.title=a});else throw Error("Unknown runtime environment. Where are we?");
function aa(a){eval.call(null,a)}!b.load&&b.read&&(b.load=function(a){aa(b.read(a))});b.print||(b.print=function(){});b.printErr||(b.printErr=b.print);b.arguments||(b.arguments=[]);b.thisProgram||(b.thisProgram="./this.program");b.quit||(b.quit=function(a,c){throw c;});b.print=b.print;b.c=b.printErr;b.preRun=[];b.postRun=[];for(m in k)k.hasOwnProperty(m)&&(b[m]=k[m]);
var k=void 0,z={w:function(a){return tempRet0=a},t:function(){return tempRet0},B:function(){return y},A:function(a){y=a},k:function(a){switch(a){case "i1":case "i8":return 1;case "i16":return 2;case "i32":return 4;case "i64":return 8;case "float":return 4;case "double":return 8;default:return"*"===a[a.length-1]?z.e:"i"===a[0]?(a=parseInt(a.substr(1)),assert(0===a%8),a/8):0}},s:function(a){return Math.max(z.k(a),z.e)},C:16,R:function(a,c){"double"===c||"i64"===c?a&7&&(assert(4===(a&7)),a+=4):assert(0===
(a&3));return a},L:function(a,c,d){return d||"i64"!=a&&"double"!=a?a?Math.min(c||(a?z.s(a):0),z.e):Math.min(c,8):8},g:function(a,c,d){return d&&d.length?b["dynCall_"+a].apply(null,[c].concat(d)):b["dynCall_"+a].call(null,c)},b:[],n:function(a){for(var c=0;c<z.b.length;c++)if(!z.b[c])return z.b[c]=a,2*(1+c);throw"Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.";},v:function(a){z.b[(a-2)/2]=null},a:function(a){z.a.i||(z.a.i={});z.a.i[a]||(z.a.i[a]=1,b.c(a))},
h:{},N:function(a,c){if(a){assert(c);z.h[c]||(z.h[c]={});var d=z.h[c];d[a]||(d[a]=1===c.length?function(){return z.g(c,a)}:2===c.length?function(d){return z.g(c,a,[d])}:function(){return z.g(c,a,Array.prototype.slice.call(arguments))});return d[a]}},M:function(){throw"You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work";},l:function(a){var c=y;y=y+a|0;y=y+15&-16;return c},m:function(a){var c=A;A=A+a|0;A=A+15&-16;return c},r:function(a){var c=
B[C>>2];a=(c+a+15|0)&-16;B[C>>2]=a;if(a=a>=E)F(),a=!0;return a?(B[C>>2]=c,0):c},j:function(a,c){return Math.ceil(a/(c?c:16))*(c?c:16)},Q:function(a,c,d){return d?+(a>>>0)+4294967296*+(c>>>0):+(a>>>0)+4294967296*+(c|0)},d:1024,e:4,D:0};z.addFunction=z.n;z.removeFunction=z.v;var G=0;function assert(a,c){a||H("Assertion failed: "+c)}
function ba(a){var c;c="i32";"*"===c.charAt(c.length-1)&&(c="i32");switch(c){case "i1":return I[a>>0];case "i8":return I[a>>0];case "i16":return J[a>>1];case "i32":return B[a>>2];case "i64":return B[a>>2];case "float":return L[a>>2];case "double":return M[a>>3];default:H("invalid type for getValue: "+c)}return null}
function N(a,c,d){var e,h,g;"number"===typeof a?(h=!0,g=a):(h=!1,g=a.length);var f="string"===typeof c?c:null,l;4==d?l=e:l=["function"===typeof O?O:z.m,z.l,z.m,z.r][void 0===d?2:d](Math.max(g,f?1:c.length));if(h){e=l;assert(0==(l&3));for(a=l+(g&-4);e<a;e+=4)B[e>>2]=0;for(a=l+g;e<a;)I[e++>>0]=0;return l}if("i8"===f)return a.subarray||a.slice?P.set(a,l):P.set(new Uint8Array(a),l),l;e=0;for(var q,K;e<g;){var n=a[e];"function"===typeof n&&(n=z.O(n));d=f||c[e];if(0===d)e++;else{"i64"==d&&(d="i32");h=l+
e;var D=d,D=D||"i8";"*"===D.charAt(D.length-1)&&(D="i32");switch(D){case "i1":I[h>>0]=n;break;case "i8":I[h>>0]=n;break;case "i16":J[h>>1]=n;break;case "i32":B[h>>2]=n;break;case "i64":tempI64=[n>>>0,(tempDouble=n,1<=+ca(tempDouble)?0<tempDouble?(da(+ea(tempDouble/4294967296),4294967295)|0)>>>0:~~+fa((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)];B[h>>2]=tempI64[0];B[h+4>>2]=tempI64[1];break;case "float":L[h>>2]=n;break;case "double":M[h>>3]=n;break;default:H("invalid type for setValue: "+D)}K!==
d&&(q=z.k(d),K=d);e+=q}}return l}function ga(a){var c;if(0===c||!a)return"";for(var d=0,e,h=0;;){e=P[a+h>>0];d|=e;if(0==e&&!c)break;h++;if(c&&h==c)break}c||(c=h);e="";if(128>d){for(;0<c;)d=String.fromCharCode.apply(String,P.subarray(a,a+Math.min(c,1024))),e=e?e+d:d,a+=1024,c-=1024;return e}return b.UTF8ToString(a)}"undefined"!==typeof TextDecoder&&new TextDecoder("utf8");
function ha(a,c,d,e){if(0<e){e=d+e-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);55296<=g&&57343>=g&&(g=65536+((g&1023)<<10)|a.charCodeAt(++h)&1023);if(127>=g){if(d>=e)break;c[d++]=g}else{if(2047>=g){if(d+1>=e)break;c[d++]=192|g>>6}else{if(65535>=g){if(d+2>=e)break;c[d++]=224|g>>12}else{if(2097151>=g){if(d+3>=e)break;c[d++]=240|g>>18}else{if(67108863>=g){if(d+4>=e)break;c[d++]=248|g>>24}else{if(d+5>=e)break;c[d++]=252|g>>30;c[d++]=128|g>>24&63}c[d++]=128|g>>18&63}c[d++]=128|g>>12&63}c[d++]=
128|g>>6&63}c[d++]=128|g&63}}c[d]=0}}function ia(a){for(var c=0,d=0;d<a.length;++d){var e=a.charCodeAt(d);55296<=e&&57343>=e&&(e=65536+((e&1023)<<10)|a.charCodeAt(++d)&1023);127>=e?++c:c=2047>=e?c+2:65535>=e?c+3:2097151>=e?c+4:67108863>=e?c+5:c+6}return c}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");
function ja(a){return a.replace(/__Z[\w\d_]+/g,function(a){var d;a:{var e=b.___cxa_demangle||b.__cxa_demangle;if(e)try{var h=a.substr(1),g=ia(h)+1,f=O(g);ha(h,P,f,g);var l=O(4),q=e(f,0,0,l);if(0===ba(l)&&q){d=ga(q);break a}}catch(K){}finally{f&&Q(f),l&&Q(l),q&&Q(q)}else z.a("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");d=a}return a===d?a:a+" ["+d+"]"})}
function ka(){var a;a:{a=Error();if(!a.stack){try{throw Error(0);}catch(c){a=c}if(!a.stack){a="(no stack trace available)";break a}}a=a.stack.toString()}b.extraStackTrace&&(a+="\n"+b.extraStackTrace());return ja(a)}var buffer,I,P,J,la,B,ma,L,M;
function na(){b.HEAP8=I=new Int8Array(buffer);b.HEAP16=J=new Int16Array(buffer);b.HEAP32=B=new Int32Array(buffer);b.HEAPU8=P=new Uint8Array(buffer);b.HEAPU16=la=new Uint16Array(buffer);b.HEAPU32=ma=new Uint32Array(buffer);b.HEAPF32=L=new Float32Array(buffer);b.HEAPF64=M=new Float64Array(buffer)}var R,A,S,y,T,U,C;R=A=S=y=T=U=C=0;
function F(){H("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+E+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}var oa=b.TOTAL_STACK||5242880,E=b.TOTAL_MEMORY||16777216;E<oa&&b.c("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+E+"! (TOTAL_STACK="+oa+")");
b.buffer?buffer=b.buffer:"object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(b.wasmMemory=new WebAssembly.Memory({initial:E/65536,maximum:E/65536}),buffer=b.wasmMemory.buffer):buffer=new ArrayBuffer(E);na();B[0]=1668509029;J[1]=25459;if(115!==P[2]||99!==P[3])throw"Runtime error: expected the system to be little-endian!";b.HEAP=void 0;b.buffer=buffer;b.HEAP8=I;b.HEAP16=J;b.HEAP32=B;b.HEAPU8=P;b.HEAPU16=la;b.HEAPU32=ma;b.HEAPF32=L;b.HEAPF64=M;
function V(a){for(;0<a.length;){var c=a.shift();if("function"==typeof c)c();else{var d=c.K;"number"===typeof d?void 0===c.f?b.dynCall_v(d):b.dynCall_vi(d,c.f):d(void 0===c.f?null:c.f)}}}var pa=[],qa=[],ra=[],sa=[],ta=[],W=!1;function ua(){var a=b.preRun.shift();pa.unshift(a)}Math.imul&&-5===Math.imul(4294967295,5)||(Math.imul=function(a,c){var d=a&65535,e=c&65535;return d*e+((a>>>16)*e+d*(c>>>16)<<16)|0});Math.P=Math.imul;
if(!Math.fround){var va=new Float32Array(1);Math.fround=function(a){va[0]=a;return va[0]}}Math.J=Math.fround;Math.clz32||(Math.clz32=function(a){a=a>>>0;for(var c=0;32>c;c++)if(a&1<<31-c)return c;return 32});Math.H=Math.clz32;Math.trunc||(Math.trunc=function(a){return 0>a?Math.ceil(a):Math.floor(a)});Math.trunc=Math.trunc;var ca=Math.abs,fa=Math.ceil,ea=Math.floor,da=Math.min,X=0,wa=null,Y=null;function xa(){X++;b.monitorRunDependencies&&b.monitorRunDependencies(X)}
function ya(){X--;b.monitorRunDependencies&&b.monitorRunDependencies(X);if(0==X&&(null!==wa&&(clearInterval(wa),wa=null),Y)){var a=Y;Y=null;a()}}b.preloadedImages={};b.preloadedAudios={};var Z=null;
(function(){function a(a){var c=b.usingWasm?65536:16777216;0<a%c&&(a+=c-a%c);var c=b.buffer,d=c.byteLength;if(b.usingWasm)try{return-1!==b.wasmMemory.grow((a-d)/65536)?b.buffer=b.wasmMemory.buffer:null}catch(e){return null}else return q.__growWasmMemory((a-d)/65536),b.buffer!==c?b.buffer:null}function c(){try{if(b.wasmBinary)return new Uint8Array(b.wasmBinary);if(b.readBinary)return b.readBinary(g);throw"on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)";
}catch(a){H(a)}}function d(){return b.wasmBinary||!p&&!r||"function"!==typeof fetch?new Promise(function(a){a(c())}):fetch(g,{q:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+g+"'";return a.arrayBuffer()}).catch(function(){return c()})}function e(a,c){function e(a){q=a.exports;if(q.memory){a=q.memory;var c=b.buffer;a.byteLength<c.byteLength&&b.printErr("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");
var c=new Int8Array(c),d=new Int8Array(a);Z||c.set(d.subarray(b.STATIC_BASE,b.STATIC_BASE+b.STATIC_BUMP),b.STATIC_BASE);d.set(c);b.buffer=buffer=a;na()}b.asm=q;b.usingWasm=!0;ya()}function h(a){e(a.instance)}function f(a){d().then(function(a){return WebAssembly.instantiate(a,l)}).then(a).catch(function(a){b.printErr("failed to asynchronously prepare wasm: "+a);H(a)})}if("object"!==typeof WebAssembly)return b.printErr("no native wasm support detected"),!1;if(!(b.wasmMemory instanceof WebAssembly.Memory))return b.printErr("no native wasm Memory in use"),
!1;c.memory=b.wasmMemory;l.global={NaN:NaN,Infinity:Infinity};l["global.Math"]=a.Math;l.env=c;xa();if(b.instantiateWasm)try{return b.instantiateWasm(l,e)}catch(n){return b.printErr("Module.instantiateWasm callback failed with error: "+n),!1}b.wasmBinary||"function"!==typeof WebAssembly.u||0===g.indexOf("data:")?f(h):WebAssembly.u(fetch(g,{q:"same-origin"}),l).then(h).catch(function(a){b.printErr("wasm streaming compile failed: "+a);b.printErr("falling back to ArrayBuffer instantiation");f(h)});return{}}
b.wasmJSMethod=b.wasmJSMethod||"native-wasm";var h=b.wasmTextFile||"aez.wast",g=b.wasmBinaryFile||"aez.wasm",f=b.asmjsCodeFile||"aez.temp.asm.js";"function"===typeof b.locateFile?(h=b.locateFile(h),g=b.locateFile(g),f=b.locateFile(f)):(h=b.scriptDirectory+h,g=b.scriptDirectory+g,f=b.scriptDirectory+f);var l={global:null,env:null,asm2wasm:{"f64-rem":function(a,c){return a%c},"f64-to-int":function(a){return a|0},"i32s-div":function(a,c){return(a|0)/(c|0)|0},"i32u-div":function(a,c){return(a>>>0)/(c>>>
0)>>>0},"i32s-rem":function(a,c){return(a|0)%(c|0)|0},"i32u-rem":function(a,c){return(a>>>0)%(c>>>0)>>>0},"debugger":function(){debugger}},parent:b},q=null;b.asmPreload=b.asm;var K=b.reallocBuffer;b.reallocBuffer=function(c){return"asmjs"===n?K(c):a(c)};var n="";b.asm=function(a,c){if(!c.table){var d=b.wasmTableSize;void 0===d&&(d=1024);var h=b.wasmMaxTableSize;c.table="object"===typeof WebAssembly&&"function"===typeof WebAssembly.Table?void 0!==h?new WebAssembly.Table({initial:d,maximum:h,element:"anyfunc"}):
new WebAssembly.Table({initial:d,element:"anyfunc"}):Array(d);b.wasmTable=c.table}c.memoryBase||(c.memoryBase=b.STATIC_BASE);c.tableBase||(c.tableBase=0);(d=e(a,c))||H("no binaryen method succeeded. consider enabling more options, like interpreting, if you want that: https://github.com/kripken/emscripten/wiki/WebAssembly#binaryen-methods");return d}})();R=z.d;A=R+7216;qa.push();Z=null;b.STATIC_BASE=R;b.STATIC_BUMP=7216;var za=A;A+=16;C=N(1,"i32",2);S=y=z.j(A);T=S+oa;U=z.j(T);B[C>>2]=U;
function Aa(a){var c=Array(ia(a)+1);ha(a,c,0,c.length);return c}b.wasmTableSize=0;b.wasmMaxTableSize=0;b.o={Math:Math,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array,NaN:NaN,Infinity:Infinity};
b.p={abort:H,assert:assert,enlargeMemory:function(){F()},getTotalMemory:function(){return E},abortOnCannotGrowMemory:F,___setErrNo:function(a){b.___errno_location&&(B[b.___errno_location()>>2]=a);return a},_emscripten_memcpy_big:function(a,c,d){P.set(P.subarray(c,c+d),a);return a},DYNAMICTOP_PTR:C,tempDoublePtr:za,ABORT:G,STACKTOP:y,STACK_MAX:T};var Ba=b.asm(b.o,b.p,buffer);b.asm=Ba;var O=b._malloc=function(){return b.asm._malloc.apply(null,arguments)};
b.getTempRet0=function(){return b.asm.getTempRet0.apply(null,arguments)};b._aez_decrypt=function(){return b.asm._aez_decrypt.apply(null,arguments)};var Q=b._free=function(){return b.asm._free.apply(null,arguments)};b.runPostSets=function(){return b.asm.runPostSets.apply(null,arguments)};b.setTempRet0=function(){return b.asm.setTempRet0.apply(null,arguments)};b.establishStackSpace=function(){return b.asm.establishStackSpace.apply(null,arguments)};
b._aez_encrypt=function(){return b.asm._aez_encrypt.apply(null,arguments)};b._memset=function(){return b.asm._memset.apply(null,arguments)};b._sbrk=function(){return b.asm._sbrk.apply(null,arguments)};b._emscripten_get_global_libc=function(){return b.asm._emscripten_get_global_libc.apply(null,arguments)};b._memcpy=function(){return b.asm._memcpy.apply(null,arguments)};b.stackAlloc=function(){return b.asm.stackAlloc.apply(null,arguments)};b.setThrew=function(){return b.asm.setThrew.apply(null,arguments)};
b.stackRestore=function(){return b.asm.stackRestore.apply(null,arguments)};b.stackSave=function(){return b.asm.stackSave.apply(null,arguments)};z.l=b.stackAlloc;z.B=b.stackSave;z.A=b.stackRestore;z.I=b.establishStackSpace;z.w=b.setTempRet0;z.t=b.getTempRet0;b.asm=Ba;
if(Z)if("function"===typeof b.locateFile?Z=b.locateFile(Z):b.memoryInitializerPrefixURL&&(Z=b.memoryInitializerPrefixURL+Z),t||u){var Ca=b.readBinary(Z);P.set(Ca,z.d)}else{var Ea=function(){b.readAsync(Z,Da,function(){throw"could not load memory initializer "+Z;})};xa();var Da=function(a){a.byteLength&&(a=new Uint8Array(a));P.set(a,z.d);b.memoryInitializerRequest&&delete b.memoryInitializerRequest.response;ya()};if(b.memoryInitializerRequest){var Fa=function(){var a=b.memoryInitializerRequest,c=a.response;
200!==a.status&&0!==a.status?(console.warn("a problem seems to have happened with Module.memoryInitializerRequest, status: "+a.status+", retrying "+Z),Ea()):Da(c)};b.memoryInitializerRequest.response?setTimeout(Fa,0):b.memoryInitializerRequest.addEventListener("load",Fa)}else Ea()}b.then=function(a){if(b.calledRun)a(b);else{var c=b.onRuntimeInitialized;b.onRuntimeInitialized=function(){c&&c();a(b)}}return b};
function x(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}x.prototype=Error();x.prototype.constructor=x;var Ga=null,Y=function Ha(){b.calledRun||Ia();b.calledRun||(Y=Ha)};
b.callMain=b.G=function(a){function c(){for(var a=0;3>a;a++)e.push(0)}a=a||[];W||(W=!0,V(qa));var d=a.length+1,e=[N(Aa(b.thisProgram),"i8",0)];c();for(var h=0;h<d-1;h+=1)e.push(N(Aa(a[h]),"i8",0)),c();e.push(0);e=N(e,"i32",0);try{var g=b._main(d,e,0);Ja(g,!0)}catch(f){f instanceof x||("SimulateInfiniteLoop"==f?b.noExitRuntime=!0:((a=f)&&"object"===typeof f&&f.stack&&(a=[f,f.stack]),b.c("exception thrown: "+a),b.quit(1,f)))}finally{}};
function Ia(a){function c(){if(!b.calledRun&&(b.calledRun=!0,!G)){W||(W=!0,V(qa));V(ra);if(b.onRuntimeInitialized)b.onRuntimeInitialized();b._main&&Ka&&b.callMain(a);if(b.postRun)for("function"==typeof b.postRun&&(b.postRun=[b.postRun]);b.postRun.length;){var c=b.postRun.shift();ta.unshift(c)}V(ta)}}a=a||b.arguments;null===Ga&&(Ga=Date.now());if(!(0<X)){if(b.preRun)for("function"==typeof b.preRun&&(b.preRun=[b.preRun]);b.preRun.length;)ua();V(pa);0<X||b.calledRun||(b.setStatus?(b.setStatus("Running..."),
setTimeout(function(){setTimeout(function(){b.setStatus("")},1);c()},1)):c())}}b.run=b.run=Ia;function Ja(a,c){if(!c||!b.noExitRuntime){if(!b.noExitRuntime&&(G=!0,y=void 0,V(sa),b.onExit))b.onExit(a);t&&process.exit(a);b.quit(a,new x(a))}}b.exit=b.exit=Ja;var La=[];
function H(a){if(b.onAbort)b.onAbort(a);void 0!==a?(b.print(a),b.c(a),a=JSON.stringify(a)):a="";G=!0;var c="abort("+a+") at "+ka()+"\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.";La&&La.forEach(function(d){c=d(c,a)});throw c;}b.abort=b.abort=H;if(b.preInit)for("function"==typeof b.preInit&&(b.preInit=[b.preInit]);0<b.preInit.length;)b.preInit.pop()();var Ka=!0;b.noInitialRun&&(Ka=!1);b.noExitRuntime=!0;Ia();
(function(){function a(a){if(a&&a.buffer instanceof ArrayBuffer)a=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);else if("string"===typeof a){for(var c=a.length,d=new Uint8Array(c+1),e=0;e<c;++e)d[e]=a.charCodeAt(e);return d}return a}function c(d,g){var f;f=new Number(d);f.length=g;f.get=function(a){a=a||Uint8Array;return(new a(buffer,f,g/a.BYTES_PER_ELEMENT)).slice()};f.dereference=function(a){a=a||4;return c(f.get(Uint32Array)[0],a)};f.set=function(c){c=a(c);if(c.length>g)throw RangeError("invalid array length");
P.set(c,f)};f.free=function(){Q(f);e.splice(e.indexOf(f),1)};e.push(f);return f}function d(d,e){var f;e=a(e);0===d&&(d=e.length);f=c(O(d),d);void 0!==e?(f.set(e),e.length<d&&P.fill(0,f+e.length,f+d)):P.fill(0,f,f+d);return f}var e=[];b.createPointer=c;b.allocatePointer=function(a){a&&(a=Uint32Array.F(a));return d(4,a)};b.allocateBytes=d;b.freeBytes=function(){for(var a=0,c=e.length;a<c;++a)Q(e[a]);e=[]}})();

  return Module;
};
if (typeof module === "object" && module.exports) {
  module['exports'] = Module;
};

},{"fs":undefined,"path":undefined}],2:[function(require,module,exports){
// Generated by LiveScript 1.5.0
/**
 * @package   aez.wasm
 * @author    Nazar Mokrynskyi <nazar@mokrynskyi.com>
 * @copyright Copyright (c) 2017, Nazar Mokrynskyi
 * @license   MIT License, see license.txt
 */
(function(){
  var lib, allocate;
  lib = require('../aez')();
  module.exports = {
    ready: lib.then,
    encrypt: encrypt,
    decrypt: decrypt
  };
  allocate = lib.allocateBytes;
  /**
   * @param {Uint8Array} data
   *
   * @return {!Array}
   */
  function allocate_if_not_empty(data){
    if (data && data.length) {
      return [data.length, allocate(0, data)];
    } else {
      return [0, null];
    }
  }
  /**
   * @param {Uint8Array}	plaintext				Arbitrary size plaintext
   * @param {Uint8Array}	ad						Arbitrary size associated data
   * @param {Uint8Array}	nonce					Arbitrary size nonce
   * @param {!Uint8Array}	key						Arbitrary size key
   * @param {number}		ciphertext_expansion	How much longer ciphertext must be comparing to plaintext (read AEZ paper for details)
   *
   * @return {!Uint8Array} Ciphertext
   *
   * @throws {Error}
   */
  function encrypt(plaintext, ad, nonce, key, ciphertext_expansion){
    var ref$, plaintext_length, ad_length, nonce_length, ciphertext;
    ref$ = allocate_if_not_empty(plaintext), plaintext_length = ref$[0], plaintext = ref$[1];
    ref$ = allocate_if_not_empty(ad), ad_length = ref$[0], ad = ref$[1];
    ref$ = allocate_if_not_empty(nonce), nonce_length = ref$[0], nonce = ref$[1];
    key = allocate(0, key);
    if (plaintext_length + ciphertext_expansion === 0) {
      throw new Error("Can't encrypt empty plaintext without ciphertext expansion");
    }
    ciphertext = allocate(plaintext_length + ciphertext_expansion);
    lib._aez_encrypt(ciphertext, plaintext, plaintext_length, ad, ad_length, nonce, nonce_length, key, key.length, ciphertext_expansion);
    ciphertext = ciphertext.get();
    lib.freeBytes();
    return ciphertext;
  }
  /**
   * @param {!Uint8Array}	ciphertext				Ciphertext
   * @param {Uint8Array}	ad						Arbitrary size associated data
   * @param {Uint8Array}	nonce					Arbitrary size nonce
   * @param {!Uint8Array}	key						Arbitrary size key
   * @param {number}		ciphertext_expansion	How much shorter plaintext must be comparing to ciphertext (read AEZ paper for details)
   *
   * @return {!Uint8Array} Plaintext
   *
   * @throws {Error}
   */
  function decrypt(ciphertext, ad, nonce, key, ciphertext_expansion){
    var ref$, ciphertext_length, ad_length, nonce_length, plaintext, result;
    ref$ = allocate_if_not_empty(ciphertext), ciphertext_length = ref$[0], ciphertext = ref$[1];
    ref$ = allocate_if_not_empty(ad), ad_length = ref$[0], ad = ref$[1];
    ref$ = allocate_if_not_empty(nonce), nonce_length = ref$[0], nonce = ref$[1];
    key = allocate(0, key);
    if (ciphertext_length - ciphertext_expansion > 0) {
      plaintext = allocate(ciphertext_length - ciphertext_expansion);
    } else {
      plaintext = null;
    }
    result = lib._aez_decrypt(plaintext, ciphertext, ciphertext_length, ad, ad_length, nonce, nonce_length, key, key.length, ciphertext_expansion);
    if (result !== 0) {
      lib.freeBytes();
      throw new Error('Decryption failed');
    }
    if (plaintext) {
      plaintext = plaintext.get();
      lib.freeBytes();
      return plaintext;
    } else {
      lib.freeBytes();
      return new Uint8Array(0);
    }
  }
}).call(this);

},{"../aez":1}]},{},[2])(2)
});