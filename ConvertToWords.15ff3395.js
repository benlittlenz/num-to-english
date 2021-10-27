parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KJnj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.numberWordMapping=void 0,exports.numberWordMapping=[{number:1e6,value:"Million"},{number:1e3,value:"Thousand"},{number:100,value:"Hundred"},{number:90,value:"Ninety"},{number:80,value:"Eighty"},{number:70,value:"Seventy"},{number:60,value:"Sixty"},{number:50,value:"Fifty"},{number:40,value:"Forty"},{number:30,value:"Thirty"},{number:20,value:"Twenty"},{number:19,value:"Nineteen"},{number:18,value:"Eighteen"},{number:17,value:"Seventeen"},{number:16,value:"Sixteen"},{number:15,value:"Fifteen"},{number:14,value:"Fourteen"},{number:13,value:"Thirteen"},{number:12,value:"Twelve"},{number:11,value:"Eleven"},{number:10,value:"Ten"},{number:9,value:"Nine"},{number:8,value:"Eight"},{number:7,value:"Seven"},{number:6,value:"Six"},{number:5,value:"Five"},{number:4,value:"Four"},{number:3,value:"Three"},{number:2,value:"Two"},{number:1,value:"One"},{number:0,value:"Zero"}];
},{}],"vj23":[function(require,module,exports) {
"use strict";function e(e){return Number(Number(e).toFixed(2))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.toFixed=void 0,exports.toFixed=e;
},{}],"l2xe":[function(require,module,exports) {
"use strict";function e(e){return Number(e)===e&&e%1!=0}Object.defineProperty(exports,"__esModule",{value:!0}),exports.isFloat=void 0,exports.isFloat=e;
},{}],"E7Wx":[function(require,module,exports) {
"use strict";var e=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),t=this&&this.__exportStar||function(t,r){for(var i in t)"default"===i||Object.prototype.hasOwnProperty.call(r,i)||e(r,t,i)};Object.defineProperty(exports,"__esModule",{value:!0}),t(require("./numberWordMappings"),exports),t(require("./toFixed"),exports),t(require("./isFloat"),exports);
},{"./numberWordMappings":"KJnj","./toFixed":"vj23","./isFloat":"l2xe"}],"Qst1":[function(require,module,exports) {
"use strict";var e=this&&this.__spreadArray||function(e,r){for(var n=0,t=r.length,u=e.length;n<t;n++,u++)e[u]=r[n];return e};Object.defineProperty(exports,"__esModule",{value:!0}),exports.convertNumToCurrency=void 0;var r=require("./lib");function n(n){console.log("convertNumToWords NUMBER ",n);var u=String(r.toFixed(n)).split("."),o=e([],t(Number(u[0])));return 1===Number(u[0])?o.push("Dollar"):o.push("Dollars"),r.isFloat(n)&&(o.push("and"),o.push.apply(o,t(Number(u[1]))),o.push("Cents")),o.join(" ")}function t(n){var u=[],o=r.numberWordMapping.find(function(e){return Number(n)>=e.number}),s=o.value,l=Math.floor(n/o.number),i=n%o.number;if(1===l){if(Number(o.number)%10==0){console.log("IS POWER OF 10");var a=Number(String(n)[0]);1===a&&(console.log("firstNumber",a),u.push.apply(u,t(a)))}u.push(s)}else u.push.apply(u,e(e([],t(l)),[s]));return i>0&&u.push.apply(u,t(i)),u}document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("convertBtn"),r=document.getElementById("resultContainer");e.addEventListener("click",function(){var e=document.getElementById("converInput"),t=n(Number(e.value));r.textContent=t})}),exports.convertNumToCurrency=n;
},{"./lib":"E7Wx"}]},{},["Qst1"], null)
//# sourceMappingURL=ConvertToWords.15ff3395.js.map