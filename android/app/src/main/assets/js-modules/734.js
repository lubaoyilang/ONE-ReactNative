__d(function(t,o,r,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function a(t){if(Array.isArray(t)){for(var o=0,r=Array(t.length);o<t.length;o++)r[o]=t[o];return r}return Array.from(t)}function i(t,o,r,e){switch("undefined"==typeof t?"undefined":u(t)){case"object":return"function"==typeof t[e]?t[e].apply(t,a(r)):t[e];case"function":return t(o);default:return t}}function c(t){var o=t.timestamp,r=t.duration;return function(t,e,n){var a=["action"];return a.push("%c"+String(t.type)),o&&a.push("%c@ "+e),r&&a.push("%c(in "+n.toFixed(2)+" ms)"),a.join(" ")}}function l(t,o){var r=o.logger,e=o.actionTransformer,n=o.titleFormatter,a=void 0===n?c(o):n,l=o.collapsed,u=o.colors,p=o.level,s=o.diff;t.forEach(function(n,c){var d=n.started,g=n.startedTime,h=n.action,m=n.prevState,v=n.error,S=n.took,b=n.nextState,w=t[c+1];w&&(b=w.prevState,S=w.started-d);var x=e(h),_="function"==typeof l?l(function(){return b},h,n):l,A=(0,f.formatTime)(g),j=u.title?"color: "+u.title(x)+";":"",T=["color: gray; font-weight: lighter;"];T.push(j),o.timestamp&&T.push("color: gray; font-weight: lighter;"),o.duration&&T.push("color: gray; font-weight: lighter;");var C=a(x,A,S);try{_?u.title?r.groupCollapsed.apply(r,["%c "+C].concat(T)):r.groupCollapsed(C):u.title?r.group.apply(r,["%c "+C].concat(T)):r.group(C)}catch(t){r.log(C)}var E=i(p,x,[m],"prevState"),F=i(p,x,[x],"action"),M=i(p,x,[v,m],"error"),k=i(p,x,[b],"nextState");E&&(u.prevState?r[E]("%c prev state","color: "+u.prevState(m)+"; font-weight: bold",m):r[E]("prev state",m)),F&&(u.action?r[F]("%c action    ","color: "+u.action(x)+"; font-weight: bold",x):r[F]("action    ",x)),v&&M&&(u.error?r[M]("%c error     ","color: "+u.error(v,m)+"; font-weight: bold;",v):r[M]("error     ",v)),k&&(u.nextState?r[k]("%c next state","color: "+u.nextState(b)+"; font-weight: bold",b):r[k]("next state",b)),s&&(0,y.default)(m,b,r,_);try{r.groupEnd()}catch(t){r.log("\u2014\u2014 log end \u2014\u2014")}})}Object.defineProperty(e,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof("function"==typeof Symbol?Symbol.iterator:"@@iterator")?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==("function"==typeof Symbol?Symbol.prototype:"@@prototype")?"symbol":typeof t};e.printBuffer=l;var f=o(735),p=o(736),y=n(p)},734);