__d(function(e,t,n,u){"use strict";function r(e){return e?(Array.isArray(e)?e:[e]).map(function(e){return i(e)}):null}function i(e){if(!e)return null;var t=new Error(e.message);return t.key=e.key,t}var l=t(40),o=l.AsyncRocksDBStorage||l.AsyncSQLiteDBStorage||l.AsyncLocalStorage,s={_getRequests:[],_getKeys:[],_immediate:null,getItem:function(e,t){return new Promise(function(n,u){o.multiGet([e],function(e,i){var l=i&&i[0]&&i[0][1]?i[0][1]:null,o=r(e);t&&t(o&&o[0],l),o?u(o[0]):n(l)})})},setItem:function(e,t,n){return new Promise(function(u,i){o.multiSet([[e,t]],function(e){var t=r(e);n&&n(t&&t[0]),t?i(t[0]):u(null)})})},removeItem:function(e,t){return new Promise(function(n,u){o.multiRemove([e],function(e){var i=r(e);t&&t(i&&i[0]),i?u(i[0]):n(null)})})},mergeItem:function(e,t,n){return new Promise(function(u,i){o.multiMerge([[e,t]],function(e){var t=r(e);n&&n(t&&t[0]),t?i(t[0]):u(null)})})},clear:function(e){return new Promise(function(t,n){o.clear(function(u){e&&e(i(u)),u&&i(u)?n(i(u)):t(null)})})},getAllKeys:function(e){return new Promise(function(t,n){o.getAllKeys(function(u,r){e&&e(i(u),r),u?n(i(u)):t(r)})})},flushGetRequests:function(){var e=this._getRequests,t=this._getKeys;this._getRequests=[],this._getKeys=[],o.multiGet(t,function(t,n){var u={};n&&n.forEach(function(e){var t=babelHelpers.slicedToArray(e,2),n=t[0],r=t[1];return u[n]=r,r});for(var r=e.length,i=0;i<r;i++){var l=e[i],o=l.keys,s=o.map(function(e){return[e,u[e]]});l.callback&&l.callback(null,s),l.resolve&&l.resolve(s)}})},multiGet:function(e,t){var n=this;this._immediate||(this._immediate=setImmediate(function(){n._immediate=null,n.flushGetRequests()}));var u={keys:e,callback:t,keyIndex:this._getKeys.length,resolve:null,reject:null},r=new Promise(function(e,t){u.resolve=e,u.reject=t});return this._getRequests.push(u),e.forEach(function(e){n._getKeys.indexOf(e)===-1&&n._getKeys.push(e)}),r},multiSet:function(e,t){return new Promise(function(n,u){o.multiSet(e,function(e){var i=r(e);t&&t(i),i?u(i):n(null)})})},multiRemove:function(e,t){return new Promise(function(n,u){o.multiRemove(e,function(e){var i=r(e);t&&t(i),i?u(i):n(null)})})},multiMerge:function(e,t){return new Promise(function(n,u){o.multiMerge(e,function(e){var i=r(e);t&&t(i),i?u(i):n(null)})})}};o.multiMerge||(delete s.mergeItem,delete s.multiMerge),n.exports=s},359);