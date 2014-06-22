(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 AngularJS v1.2.12
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(v,k,t){'use strict';k.module("ngAnimate",["ng"]).factory("$$animateReflow",["$window","$timeout",function(k,B){var d=k.requestAnimationFrame||k.webkitRequestAnimationFrame||function(d){return B(d,10,!1)},q=k.cancelAnimationFrame||k.webkitCancelAnimationFrame||function(d){return B.cancel(d)};return function(p){var k=d(p);return function(){q(k)}}}]).config(["$provide","$animateProvider",function(R,B){function d(d){for(var k=0;k<d.length;k++){var p=d[k];if(p.nodeType==X)return p}}var q=k.noop,
p=k.forEach,$=B.$$selectors,X=1,l="$$ngAnimateState",K="ng-animate",m={running:!0};R.decorator("$animate",["$delegate","$injector","$sniffer","$rootElement","$timeout","$rootScope","$document",function(C,v,t,H,y,w,N){function I(a){if(a){var g=[],e={};a=a.substr(1).split(".");(t.transitions||t.animations)&&a.push("");for(var c=0;c<a.length;c++){var f=a[c],d=$[f];d&&!e[f]&&(g.push(v.get(d)),e[f]=!0)}return g}}function r(a,g,e,c,f,k,m){function t(a){n();if(!0===a)z();else{if(a=e.data(l))a.done=z,e.data(l,
a);C(D,"after",z)}}function C(c,d,f){"after"==d?r():E();var k=d+"End";p(c,function(b,aa){var h=function(){a:{var b=d+"Complete",a=c[aa];a[b]=!0;(a[k]||q)();for(a=0;a<c.length;a++)if(!c[a][b])break a;f()}};"before"!=d||"enter"!=a&&"move"!=a?b[d]?b[k]=u?b[d](e,g,h):b[d](e,h):h():h()})}function w(c){e.triggerHandler("$animate:"+c,{event:a,className:g})}function E(){y(function(){w("before")},0,!1)}function r(){y(function(){w("after")},0,!1)}function v(){y(function(){w("close");m&&m()},0,!1)}function n(){n.hasBeenRun||
(n.hasBeenRun=!0,k())}function z(){if(!z.hasBeenRun){z.hasBeenRun=!0;var a=e.data(l);a&&(u?A(e):(a.closeAnimationTimeout=y(function(){A(e)},0,!1),e.data(l,a)));v()}}var s,x,G=d(e);G&&(s=G.className,x=s+" "+g);if(G&&L(x)){x=(" "+x).replace(/\s+/g,".");c||(c=f?f.parent():e.parent());x=I(x);var u="addClass"==a||"removeClass"==a;f=e.data(l)||{};if(ba(e,c)||0===x.length)n(),E(),r(),z();else{var D=[];u&&(f.disabled||f.running&&f.structural)||p(x,function(c){if(!c.allowCancel||c.allowCancel(e,a,g)){var d=
c[a];"leave"==a?(c=d,d=null):c=c["before"+a.charAt(0).toUpperCase()+a.substr(1)];D.push({before:c,after:d})}});0===D.length?(n(),E(),r(),v()):(c=" "+s+" ",f.running&&(y.cancel(f.closeAnimationTimeout),A(e),J(f.animations),x=(s=u&&!f.structural)&&f.className==g&&a!=f.event,f.beforeComplete||x?(f.done||q)(!0):s&&(c="removeClass"==f.event?c.replace(" "+f.className+" "," "):c+f.className+" ")),s=" "+g+" ","addClass"==a&&0<=c.indexOf(s)||"removeClass"==a&&-1==c.indexOf(s)?(n(),E(),r(),v()):(e.addClass(K),
e.data(l,{running:!0,event:a,className:g,structural:!u,animations:D,done:t}),C(D,"before",t)))}}else n(),E(),r(),z()}function Q(a){a=d(a);p(a.querySelectorAll("."+K),function(a){a=k.element(a);var e=a.data(l);e&&(J(e.animations),A(a))})}function J(a){p(a,function(a){a.beforeComplete||(a.beforeEnd||q)(!0);a.afterComplete||(a.afterEnd||q)(!0)})}function A(a){d(a)==d(H)?m.disabled||(m.running=!1,m.structural=!1):(a.removeClass(K),a.removeData(l))}function ba(a,g){if(m.disabled)return!0;if(d(a)==d(H))return m.disabled||
m.running;do{if(0===g.length)break;var e=d(g)==d(H),c=e?m:g.data(l),c=c&&(!!c.disabled||!!c.running);if(e||c)return c;if(e)break}while(g=g.parent());return!0}H.data(l,m);w.$$postDigest(function(){w.$$postDigest(function(){m.running=!1})});var M=B.classNameFilter(),L=M?function(a){return M.test(a)}:function(){return!0};return{enter:function(a,d,e,c){this.enabled(!1,a);C.enter(a,d,e);w.$$postDigest(function(){r("enter","ng-enter",a,d,e,q,c)})},leave:function(a,d){Q(a);this.enabled(!1,a);w.$$postDigest(function(){r("leave",
"ng-leave",a,null,null,function(){C.leave(a)},d)})},move:function(a,d,e,c){Q(a);this.enabled(!1,a);C.move(a,d,e);w.$$postDigest(function(){r("move","ng-move",a,d,e,q,c)})},addClass:function(a,d,e){r("addClass",d,a,null,null,function(){C.addClass(a,d)},e)},removeClass:function(a,d,e){r("removeClass",d,a,null,null,function(){C.removeClass(a,d)},e)},enabled:function(a,d){switch(arguments.length){case 2:if(a)A(d);else{var e=d.data(l)||{};e.disabled=!0;d.data(l,e)}break;case 1:m.disabled=!a;break;default:a=
!m.disabled}return!!a}}}]);B.register("",["$window","$sniffer","$timeout","$$animateReflow",function(m,l,B,H){function y(b,a){O&&O();U.push(a);var h=d(b);b=k.element(h);V.push(b);var h=b.data(n),c=h.stagger,c=h.itemIndex*(Math.max(c.animationDelay,c.transitionDelay)||0);P=Math.max(P,(c+(h.maxDelay+h.maxDuration)*s)*x);h.animationCount=G;O=H(function(){p(U,function(b){b()});var b=[],a=G;p(V,function(a){b.push(a)});B(function(){w(b,a);b=null},P,!1);U=[];V=[];O=null;u={};P=0;G++})}function w(b,a){p(b,
function(b){(b=b.data(n))&&b.animationCount==a&&(b.closeAnimationFn||q)()})}function N(b,a){var h=a?u[a]:null;if(!h){var d=0,c=0,e=0,k=0,g,n,l,r;p(b,function(b){if(b.nodeType==X){b=m.getComputedStyle(b)||{};l=b[f+Y];d=Math.max(I(l),d);r=b[f+W];g=b[f+E];c=Math.max(I(g),c);n=b[F+E];k=Math.max(I(n),k);var a=I(b[F+Y]);0<a&&(a*=parseInt(b[F+R],10)||1);e=Math.max(a,e)}});h={total:0,transitionPropertyStyle:r,transitionDurationStyle:l,transitionDelayStyle:g,transitionDelay:c,transitionDuration:d,animationDelayStyle:n,
animationDelay:k,animationDuration:e};a&&(u[a]=h)}return h}function I(b){var a=0;b=k.isString(b)?b.split(/\s*,\s*/):[];p(b,function(b){a=Math.max(parseFloat(b)||0,a)});return a}function r(b){var a=b.parent(),h=a.data(Z);h||(a.data(Z,++D),h=D);return h+"-"+d(b).className}function Q(b,a,h){var c=r(b),e=c+" "+a,k={},g=u[e]?++u[e].total:0;if(0<g){var l=a+"-stagger",k=c+" "+l;(c=!u[k])&&b.addClass(l);k=N(b,k);c&&b.removeClass(l)}h=h||function(b){return b()};b.addClass(a);h=h(function(){return N(b,e)});
l=Math.max(h.transitionDelay,h.animationDelay);c=Math.max(h.transitionDuration,h.animationDuration);if(0===c)return b.removeClass(a),!1;var m="";0<h.transitionDuration?d(b).style[f+W]="none":d(b).style[F]="none 0s";p(a.split(" "),function(b,a){m+=(0<a?" ":"")+b+"-active"});b.data(n,{className:a,activeClassName:m,maxDuration:c,maxDelay:l,classes:a+" "+m,timings:h,stagger:k,itemIndex:g});return!0}function J(b){var a=f+W;b=d(b);b.style[a]&&0<b.style[a].length&&(b.style[a]="")}function A(b){var a=F;b=
d(b);b.style[a]&&0<b.style[a].length&&(b.style[a]="")}function K(b,a,h){function e(c){b.off(v,k);b.removeClass(r);c=b;c.removeClass(a);c.removeData(n);c=d(b);for(var h in s)c.style.removeProperty(s[h])}function k(b){b.stopPropagation();var a=b.originalEvent||b;b=a.$manualTimeStamp||a.timeStamp||Date.now();a=parseFloat(a.elapsedTime.toFixed(z));Math.max(b-w,0)>=u&&a>=p&&h()}var f=b.data(n),g=d(b);if(-1!=g.className.indexOf(a)&&f){var l=f.timings,m=f.stagger,p=f.maxDuration,r=f.activeClassName,u=Math.max(l.transitionDelay,
l.animationDelay)*x,w=Date.now(),v=T+" "+S,t=f.itemIndex,q="",s=[];if(0<l.transitionDuration){var y=l.transitionPropertyStyle;-1==y.indexOf("all")&&(q+=c+"transition-property: "+y+";",q+=c+"transition-duration: "+l.transitionDurationStyle+";",s.push(c+"transition-property"),s.push(c+"transition-duration"))}0<t&&(0<m.transitionDelay&&0===m.transitionDuration&&(q+=c+"transition-delay: "+M(l.transitionDelayStyle,m.transitionDelay,t)+"; ",s.push(c+"transition-delay")),0<m.animationDelay&&0===m.animationDuration&&
(q+=c+"animation-delay: "+M(l.animationDelayStyle,m.animationDelay,t)+"; ",s.push(c+"animation-delay")));0<s.length&&(l=g.getAttribute("style")||"",g.setAttribute("style",l+" "+q));b.on(v,k);b.addClass(r);f.closeAnimationFn=function(){e();h()};return e}h()}function M(b,a,c){var d="";p(b.split(","),function(b,e){d+=(0<e?",":"")+(c*a+parseInt(b,10))+"s"});return d}function L(b,a,c){if(Q(b,a,c))return function(c){c&&(b.removeClass(a),b.removeData(n))}}function a(a,c,d){if(a.data(n))return K(a,c,d);a.removeClass(c);
a.removeData(n);d()}function g(b,c,d){var e=L(b,c);if(e){var f=e;y(b,function(){J(b);A(b);f=a(b,c,d)});return function(a){(f||q)(a)}}d()}function e(a,c){var d="";a=k.isArray(a)?a:a.split(/\s+/);p(a,function(a,b){a&&0<a.length&&(d+=(0<b?" ":"")+a+c)});return d}var c="",f,S,F,T;v.ontransitionend===t&&v.onwebkittransitionend!==t?(c="-webkit-",f="WebkitTransition",S="webkitTransitionEnd transitionend"):(f="transition",S="transitionend");v.onanimationend===t&&v.onwebkitanimationend!==t?(c="-webkit-",F=
"WebkitAnimation",T="webkitAnimationEnd animationend"):(F="animation",T="animationend");var Y="Duration",W="Property",E="Delay",R="IterationCount",Z="$$ngAnimateKey",n="$$ngAnimateCSS3Data",z=3,s=1.5,x=1E3,G=0,u={},D=0,U=[],V=[],O,P=0;return{allowCancel:function(a,c,h){var f=(a.data(n)||{}).classes;if(!f||0<=["enter","leave","move"].indexOf(c))return!0;var l=a.parent(),g=k.element(d(a).cloneNode());g.attr("style","position:absolute; top:-9999px; left:-9999px");g.removeAttr("id");g.empty();p(f.split(" "),
function(a){g.removeClass(a)});g.addClass(e(h,"addClass"==c?"-add":"-remove"));l.append(g);a=N(g);g.remove();return 0<Math.max(a.transitionDuration,a.animationDuration)},enter:function(a,c){return g(a,"ng-enter",c)},leave:function(a,c){return g(a,"ng-leave",c)},move:function(a,c){return g(a,"ng-move",c)},beforeAddClass:function(a,c,d){var f=L(a,e(c,"-add"),function(d){a.addClass(c);d=d();a.removeClass(c);return d});if(f)return y(a,function(){J(a);A(a);d()}),f;d()},addClass:function(b,c,d){return a(b,
e(c,"-add"),d)},beforeRemoveClass:function(a,c,d){var f=L(a,e(c,"-remove"),function(d){var e=a.attr("class");a.removeClass(c);d=d();a.attr("class",e);return d});if(f)return y(a,function(){J(a);A(a);d()}),f;d()},removeClass:function(b,c,d){return a(b,e(c,"-remove"),d)}}}])}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map
},{}],2:[function(require,module,exports){
require('./lib/angular.min.js');

module.exports = angular;

},{"./lib/angular.min.js":3}],3:[function(require,module,exports){
/*
 AngularJS v1.2.16
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(O,U,s){'use strict';function t(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.16/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function ab(b){if(null==b||Ca(b))return!1;
var a=b.length;return 1===b.nodeType&&a?!0:w(b)||M(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function q(b,a,c){var d;if(b)if(P(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(b.forEach&&b.forEach!==q)b.forEach(a,c);else if(ab(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Qb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Sc(b,
a,c){for(var d=Qb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Rb(b){return function(a,c){b(c,a)}}function bb(){for(var b=ka.length,a;b;){b--;a=ka[b].charCodeAt(0);if(57==a)return ka[b]="A",ka.join("");if(90==a)ka[b]="0";else return ka[b]=String.fromCharCode(a+1),ka.join("")}ka.unshift("0");return ka.join("")}function Sb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function D(b){var a=b.$$hashKey;q(arguments,function(a){a!==b&&q(a,function(a,c){b[c]=a})});Sb(b,a);return b}function Y(b){return parseInt(b,
10)}function Tb(b,a){return D(new (D(function(){},{prototype:b})),a)}function C(){}function Da(b){return b}function aa(b){return function(){return b}}function E(b){return"undefined"===typeof b}function B(b){return"undefined"!==typeof b}function X(b){return null!=b&&"object"===typeof b}function w(b){return"string"===typeof b}function vb(b){return"number"===typeof b}function Na(b){return"[object Date]"===wa.call(b)}function M(b){return"[object Array]"===wa.call(b)}function P(b){return"function"===typeof b}
function cb(b){return"[object RegExp]"===wa.call(b)}function Ca(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Tc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Uc(b,a,c){var d=[];q(b,function(b,g,f){d.push(a.call(c,b,g,f))});return d}function db(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Oa(b,a){var c=db(b,a);0<=c&&b.splice(c,1);return a}function ba(b,a){if(Ca(b)||b&&b.$evalAsync&&b.$watch)throw Pa("cpws");
if(a){if(b===a)throw Pa("cpi");if(M(b))for(var c=a.length=0;c<b.length;c++)a.push(ba(b[c]));else{c=a.$$hashKey;q(a,function(b,c){delete a[c]});for(var d in b)a[d]=ba(b[d]);Sb(a,c)}}else(a=b)&&(M(b)?a=ba(b,[]):Na(b)?a=new Date(b.getTime()):cb(b)?a=RegExp(b.source):X(b)&&(a=ba(b,{})));return a}function Ub(b,a){a=a||{};for(var c in b)!b.hasOwnProperty(c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(a[c]=b[c]);return a}function xa(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;
var c=typeof b,d;if(c==typeof a&&"object"==c)if(M(b)){if(!M(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!xa(b[d],a[d]))return!1;return!0}}else{if(Na(b))return Na(a)&&b.getTime()==a.getTime();if(cb(b)&&cb(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||Ca(b)||Ca(a)||M(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!P(b[d])){if(!xa(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!P(a[d]))return!1;
return!0}return!1}function Vb(){return U.securityPolicy&&U.securityPolicy.isActive||U.querySelector&&!(!U.querySelector("[ng-csp]")&&!U.querySelector("[data-ng-csp]"))}function eb(b,a){var c=2<arguments.length?ya.call(arguments,2):[];return!P(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(ya.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Vc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=
s:Ca(a)?c="$WINDOW":a&&U===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function qa(b,a){return"undefined"===typeof b?s:JSON.stringify(b,Vc,a?"  ":null)}function Wb(b){return w(b)?JSON.parse(b):b}function Qa(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=K(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;return b}function ha(b){b=y(b).clone();try{b.empty()}catch(a){}var c=y("<div>").append(b).html();try{return 3===b[0].nodeType?K(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,
function(a,b){return"<"+K(b)})}catch(d){return K(c)}}function Xb(b){try{return decodeURIComponent(b)}catch(a){}}function Yb(b){var a={},c,d;q((b||"").split("&"),function(b){b&&(c=b.split("="),d=Xb(c[0]),B(d)&&(b=B(c[1])?Xb(c[1]):!0,a[d]?M(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Zb(b){var a=[];q(b,function(b,d){M(b)?q(b,function(b){a.push(za(d,!0)+(!0===b?"":"="+za(b,!0)))}):a.push(za(d,!0)+(!0===b?"":"="+za(b,!0)))});return a.length?a.join("&"):""}function wb(b){return za(b,
!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function za(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Wc(b,a){function c(a){a&&d.push(a)}var d=[b],e,g,f=["ng:app","ng-app","x-ng-app","data-ng-app"],h=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;q(f,function(a){f[a]=!0;c(U.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(q(b.querySelectorAll("."+a),c),q(b.querySelectorAll("."+
a+"\\:"),c),q(b.querySelectorAll("["+a+"]"),c))});q(d,function(a){if(!e){var b=h.exec(" "+a.className+" ");b?(e=a,g=(b[2]||"").replace(/\s+/g,",")):q(a.attributes,function(b){!e&&f[b.name]&&(e=a,g=b.value)})}});e&&a(e,g?[g]:[])}function $b(b,a){var c=function(){b=y(b);if(b.injector()){var c=b[0]===U?"document":ha(b);throw Pa("btstrpd",c);}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=ac(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",
function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(O&&!d.test(O.name))return c();O.name=O.name.replace(d,"");Ea.resumeBootstrap=function(b){q(b,function(b){a.push(b)});c()}}function fb(b,a){a=a||"_";return b.replace(Xc,function(b,d){return(d?a:"")+b.toLowerCase()})}function xb(b,a,c){if(!b)throw Pa("areq",a||"?",c||"required");return b}function Ra(b,a,c){c&&M(b)&&(b=b[b.length-1]);xb(P(b),a,"not a function, got "+(b&&"object"==typeof b?
b.constructor.name||"Object":typeof b));return b}function Aa(b,a){if("hasOwnProperty"===b)throw Pa("badname",a);}function bc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,g=a.length,f=0;f<g;f++)d=a[f],b&&(b=(e=b)[d]);return!c&&P(b)?eb(e,b):b}function yb(b){var a=b[0];b=b[b.length-1];if(a===b)return y(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return y(c)}function Yc(b){var a=t("$injector"),c=t("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||t;return b.module||
(b.module=function(){var b={};return function(e,g,f){if("hasOwnProperty"===e)throw c("badname","module");g&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return n}}if(!g)throw a("nomod",e);var c=[],d=[],m=b("$injector","invoke"),n={_invokeQueue:c,_runBlocks:d,requires:g,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide",
"constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:m,run:function(a){d.push(a);return this}};f&&m(f);return n}())}}())}function Zc(b){D(b,{bootstrap:$b,copy:ba,extend:D,equals:xa,element:y,forEach:q,injector:ac,noop:C,bind:eb,toJson:qa,fromJson:Wb,identity:Da,isUndefined:E,isDefined:B,isString:w,isFunction:P,isObject:X,isNumber:vb,isElement:Tc,isArray:M,
version:$c,isDate:Na,lowercase:K,uppercase:Fa,callbacks:{counter:0},$$minErr:t,$$csp:Vb});Sa=Yc(O);try{Sa("ngLocale")}catch(a){Sa("ngLocale",[]).provider("$locale",ad)}Sa("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:bd});a.provider("$compile",cc).directive({a:cd,input:dc,textarea:dc,form:dd,script:ed,select:fd,style:gd,option:hd,ngBind:id,ngBindHtml:jd,ngBindTemplate:kd,ngClass:ld,ngClassEven:md,ngClassOdd:nd,ngCloak:od,ngController:pd,ngForm:qd,ngHide:rd,ngIf:sd,ngInclude:td,
ngInit:ud,ngNonBindable:vd,ngPluralize:wd,ngRepeat:xd,ngShow:yd,ngStyle:zd,ngSwitch:Ad,ngSwitchWhen:Bd,ngSwitchDefault:Cd,ngOptions:Dd,ngTransclude:Ed,ngModel:Fd,ngList:Gd,ngChange:Hd,required:ec,ngRequired:ec,ngValue:Id}).directive({ngInclude:Jd}).directive(zb).directive(fc);a.provider({$anchorScroll:Kd,$animate:Ld,$browser:Md,$cacheFactory:Nd,$controller:Od,$document:Pd,$exceptionHandler:Qd,$filter:gc,$interpolate:Rd,$interval:Sd,$http:Td,$httpBackend:Ud,$location:Vd,$log:Wd,$parse:Xd,$rootScope:Yd,
$q:Zd,$sce:$d,$sceDelegate:ae,$sniffer:be,$templateCache:ce,$timeout:de,$window:ee,$$rAF:fe,$$asyncCallback:ge})}])}function Ta(b){return b.replace(he,function(a,b,d,e){return e?d.toUpperCase():d}).replace(ie,"Moz$1")}function Ab(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:[this],l=a,k,m,n,p,r,z;if(!d||null!=b)for(;e.length;)for(k=e.shift(),m=0,n=k.length;m<n;m++)for(p=y(k[m]),l?p.triggerHandler("$destroy"):l=!l,r=0,p=(z=p.children()).length;r<p;r++)e.push(Ga(z[r]));return g.apply(this,arguments)}
var g=Ga.fn[b],g=g.$original||g;e.$original=g;Ga.fn[b]=e}function N(b){if(b instanceof N)return b;w(b)&&(b=ca(b));if(!(this instanceof N)){if(w(b)&&"<"!=b.charAt(0))throw Bb("nosel");return new N(b)}if(w(b)){var a=b;b=U;var c;if(c=je.exec(a))b=[b.createElement(c[1])];else{var d=b,e;b=d.createDocumentFragment();c=[];if(Cb.test(a)){d=b.appendChild(d.createElement("div"));e=(ke.exec(a)||["",""])[1].toLowerCase();e=ea[e]||ea._default;d.innerHTML="<div>&#160;</div>"+e[1]+a.replace(le,"<$1></$2>")+e[2];
d.removeChild(d.firstChild);for(a=e[0];a--;)d=d.lastChild;a=0;for(e=d.childNodes.length;a<e;++a)c.push(d.childNodes[a]);d=b.firstChild;d.textContent=""}else c.push(d.createTextNode(a));b.textContent="";b.innerHTML="";b=c}Db(this,b);y(U.createDocumentFragment()).append(this)}else Db(this,b)}function Eb(b){return b.cloneNode(!0)}function Ha(b){hc(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Ha(b[a])}function ic(b,a,c,d){if(B(d))throw Bb("offargs");var e=la(b,"events");la(b,"handle")&&(E(a)?q(e,
function(a,c){Fb(b,c,a);delete e[c]}):q(a.split(" "),function(a){E(c)?(Fb(b,a,e[a]),delete e[a]):Oa(e[a]||[],c)}))}function hc(b,a){var c=b[gb],d=Ua[c];d&&(a?delete Ua[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),ic(b)),delete Ua[c],b[gb]=s))}function la(b,a,c){var d=b[gb],d=Ua[d||-1];if(B(c))d||(b[gb]=d=++me,d=Ua[d]={}),d[a]=c;else return d&&d[a]}function jc(b,a,c){var d=la(b,"data"),e=B(c),g=!e&&B(a),f=g&&!X(a);d||f||la(b,"data",d={});if(e)d[a]=c;else if(g){if(f)return d&&d[a];
D(d,a)}else return d}function Gb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function hb(b,a){a&&b.setAttribute&&q(a.split(" "),function(a){b.setAttribute("class",ca((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+ca(a)+" "," ")))})}function ib(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(a.split(" "),function(a){a=ca(a);-1===c.indexOf(" "+a+" ")&&
(c+=a+" ")});b.setAttribute("class",ca(c))}}function Db(b,a){if(a){a=a.nodeName||!B(a.length)||Ca(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function kc(b,a){return jb(b,"$"+(a||"ngController")+"Controller")}function jb(b,a,c){b=y(b);9==b[0].nodeType&&(b=b.find("html"));for(a=M(a)?a:[a];b.length;){for(var d=b[0],e=0,g=a.length;e<g;e++)if((c=b.data(a[e]))!==s)return c;b=y(d.parentNode||11===d.nodeType&&d.host)}}function lc(b){for(var a=0,c=b.childNodes;a<c.length;a++)Ha(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}
function mc(b,a){var c=kb[a.toLowerCase()];return c&&nc[b.nodeName]&&c}function ne(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||U);if(E(c.defaultPrevented)){var g=c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;g.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var f=Ub(a[e||
c.type]||[]);q(f,function(a){a.call(b,c)});8>=S?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Ia(b){var a=typeof b,c;"object"==a&&null!==b?"function"==typeof(c=b.$$hashKey)?c=b.$$hashKey():c===s&&(c=b.$$hashKey=bb()):c=b;return a+":"+c}function Va(b){q(b,this.put,this)}function oc(b){var a,c;"function"==typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(oe,
""),c=c.match(pe),q(c[1].split(qe),function(b){b.replace(re,function(b,c,d){a.push(d)})})),b.$inject=a):M(b)?(c=b.length-1,Ra(b[c],"fn"),a=b.slice(0,c)):Ra(b,"fn",!0);return a}function ac(b){function a(a){return function(b,c){if(X(b))q(b,Rb(a));else return a(b,c)}}function c(a,b){Aa(a,"service");if(P(b)||M(b))b=n.instantiate(b);if(!b.$get)throw Wa("pget",a);return m[a+h]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,g,h;q(a,function(a){if(!k.get(a)){k.put(a,!0);try{if(w(a))for(c=
Sa(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,g=0,h=d.length;g<h;g++){var f=d[g],l=n.get(f[0]);l[f[1]].apply(l,f[2])}else P(a)?b.push(n.invoke(a)):M(a)?b.push(n.invoke(a)):Ra(a,"module")}catch(m){throw M(a)&&(a=a[a.length-1]),m.message&&(m.stack&&-1==m.stack.indexOf(m.message))&&(m=m.message+"\n"+m.stack),Wa("modulerr",a,m.stack||m.message||m);}}});return b}function g(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===f)throw Wa("cdep",l.join(" <- "));return a[d]}try{return l.unshift(d),
a[d]=f,a[d]=b(d)}catch(e){throw a[d]===f&&delete a[d],e;}finally{l.shift()}}function d(a,b,e){var g=[],h=oc(a),f,l,k;l=0;for(f=h.length;l<f;l++){k=h[l];if("string"!==typeof k)throw Wa("itkn",k);g.push(e&&e.hasOwnProperty(k)?e[k]:c(k))}a.$inject||(a=a[f]);return a.apply(b,g)}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(M(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return X(e)||P(e)?e:c},get:c,annotate:oc,has:function(b){return m.hasOwnProperty(b+h)||a.hasOwnProperty(b)}}}
var f={},h="Provider",l=[],k=new Va,m={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,aa(b))}),constant:a(function(a,b){Aa(a,"constant");m[a]=b;p[a]=b}),decorator:function(a,b){var c=n.get(a+h),d=c.$get;c.$get=function(){var a=r.invoke(d,c);return r.invoke(b,null,{$delegate:a})}}}},n=m.$injector=g(m,function(){throw Wa("unpr",l.join(" <- "));}),p={},r=p.$injector=g(p,function(a){a=n.get(a+
h);return r.invoke(a.$get,a)});q(e(b),function(a){r.invoke(a||C)});return r}function Kd(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;q(a,function(a){b||"a"!==K(a.nodeName)||(b=a)});return b}function g(){var b=c.hash(),d;b?(d=f.getElementById(b))?d.scrollIntoView():(d=e(f.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var f=a.document;b&&d.$watch(function(){return c.hash()},
function(){d.$evalAsync(g)});return g}]}function ge(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function se(b,a,c,d){function e(a){try{a.apply(null,ya.call(arguments,1))}finally{if(z--,0===z)for(;u.length;)try{u.pop()()}catch(b){c.error(b)}}}function g(a,b){(function T(){q(F,function(a){a()});v=b(T,a)})()}function f(){x=null;J!=h.url()&&(J=h.url(),q(ma,function(a){a(h.url())}))}var h=this,l=a[0],k=b.location,m=b.history,
n=b.setTimeout,p=b.clearTimeout,r={};h.isMock=!1;var z=0,u=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){z++};h.notifyWhenNoOutstandingRequests=function(a){q(F,function(a){a()});0===z?a():u.push(a)};var F=[],v;h.addPollFn=function(a){E(v)&&g(100,n);F.push(a);return a};var J=k.href,A=a.find("base"),x=null;h.url=function(a,c){k!==b.location&&(k=b.location);m!==b.history&&(m=b.history);if(a){if(J!=a)return J=a,d.history?c?m.replaceState(null,"",a):(m.pushState(null,"",
a),A.attr("href",A.attr("href"))):(x=a,c?k.replace(a):k.href=a),h}else return x||k.href.replace(/%27/g,"'")};var ma=[],L=!1;h.onUrlChange=function(a){if(!L){if(d.history)y(b).on("popstate",f);if(d.hashchange)y(b).on("hashchange",f);else h.addPollFn(f);L=!0}ma.push(a);return a};h.baseHref=function(){var a=A.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var Q={},da="",H=h.baseHref();h.cookies=function(a,b){var d,e,g,h;if(a)b===s?l.cookie=escape(a)+"=;path="+H+";expires=Thu, 01 Jan 1970 00:00:00 GMT":
w(b)&&(d=(l.cookie=escape(a)+"="+escape(b)+";path="+H).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(l.cookie!==da)for(da=l.cookie,d=da.split("; "),Q={},g=0;g<d.length;g++)e=d[g],h=e.indexOf("="),0<h&&(a=unescape(e.substring(0,h)),Q[a]===s&&(Q[a]=unescape(e.substring(h+1))));return Q}};h.defer=function(a,b){var c;z++;c=n(function(){delete r[c];e(a)},b||0);r[c]=!0;return c};h.defer.cancel=function(a){return r[a]?(delete r[a],
p(a),e(C),!0):!1}}function Md(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new se(b,d,a,c)}]}function Nd(){this.$get=function(){function b(b,d){function e(a){a!=n&&(p?p==a&&(p=a.n):p=a,g(a.n,a.p),g(a,n),n=a,n.n=null)}function g(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw t("$cacheFactory")("iid",b);var f=0,h=D({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,m={},n=null,p=null;return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});
e(c)}if(!E(b))return a in l||f++,l[a]=b,f>k&&this.remove(p.key),b},get:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;b==n&&(n=b.p);b==p&&(p=b.n);g(b.n,b.p);delete m[a]}delete l[a];f--},removeAll:function(){l={};f=0;m={};n=p=null},destroy:function(){m=h=l=null;delete a[b]},info:function(){return D({},h,{size:f})}}}var a={};b.info=function(){var b={};q(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};
return b}}function ce(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function cc(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,g=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,f=/^(on[a-z]+|formaction)$/;this.directive=function l(a,e){Aa(a,"directive");w(a)?(xb(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];q(c[a],function(c,g){try{var f=b.invoke(c);P(f)?f={compile:aa(f)}:!f.compile&&f.link&&(f.compile=
aa(f.link));f.priority=f.priority||0;f.index=g;f.name=f.name||a;f.require=f.require||f.controller&&f.name;f.restrict=f.restrict||"A";e.push(f)}catch(l){d(l)}});return e}])),c[a].push(e)):q(a,Rb(l));return this};this.aHrefSanitizationWhitelist=function(b){return B(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return B(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate",
"$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,m,n,p,r,z,u,F,v,J,A){function x(a,b,c,d,e){a instanceof y||(a=y(a));q(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=y(b).wrap("<span></span>").parent()[0])});var g=L(a,b,a,c,d,e);ma(a,"ng-scope");return function(b,c,d){xb(b,"scope");var e=c?Ja.clone.call(a):a;q(d,function(a,b){e.data("$"+b+"Controller",a)});d=0;for(var f=e.length;d<f;d++){var l=
e[d].nodeType;1!==l&&9!==l||e.eq(d).data("$scope",b)}c&&c(e,b);g&&g(b,e,e);return e}}function ma(a,b){try{a.addClass(b)}catch(c){}}function L(a,b,c,d,e,g){function f(a,c,d,e){var g,k,m,r,n,p,z;g=c.length;var I=Array(g);for(n=0;n<g;n++)I[n]=c[n];z=n=0;for(p=l.length;n<p;z++)k=I[z],c=l[n++],g=l[n++],m=y(k),c?(c.scope?(r=a.$new(),m.data("$scope",r)):r=a,(m=c.transclude)||!e&&b?c(g,r,k,d,Q(a,m||b)):c(g,r,k,d,e)):g&&g(a,k.childNodes,s,e)}for(var l=[],k,m,r,n,p=0;p<a.length;p++)k=new Hb,m=da(a[p],[],k,
0===p?d:s,e),(g=m.length?ia(m,a[p],k,b,c,null,[],[],g):null)&&g.scope&&ma(y(a[p]),"ng-scope"),k=g&&g.terminal||!(r=a[p].childNodes)||!r.length?null:L(r,g?g.transclude:b),l.push(g,k),n=n||g||k,g=null;return n?f:null}function Q(a,b){return function(c,d,e){var g=!1;c||(c=a.$new(),g=c.$$transcluded=!0);d=b(c,d,e);if(g)d.on("$destroy",eb(c,c.$destroy));return d}}function da(a,b,c,d,f){var k=c.$attr,l;switch(a.nodeType){case 1:T(b,na(Ka(a).toLowerCase()),"E",d,f);var m,r,n;l=a.attributes;for(var p=0,z=
l&&l.length;p<z;p++){var u=!1,F=!1;m=l[p];if(!S||8<=S||m.specified){r=m.name;n=na(r);W.test(n)&&(r=fb(n.substr(6),"-"));var J=n.replace(/(Start|End)$/,"");n===J+"Start"&&(u=r,F=r.substr(0,r.length-5)+"end",r=r.substr(0,r.length-6));n=na(r.toLowerCase());k[n]=r;c[n]=m=ca(m.value);mc(a,n)&&(c[n]=!0);N(a,b,m,n);T(b,n,"A",d,f,u,F)}}a=a.className;if(w(a)&&""!==a)for(;l=g.exec(a);)n=na(l[2]),T(b,n,"C",d,f)&&(c[n]=ca(l[3])),a=a.substr(l.index+l[0].length);break;case 3:t(b,a.nodeValue);break;case 8:try{if(l=
e.exec(a.nodeValue))n=na(l[1]),T(b,n,"M",d,f)&&(c[n]=ca(l[2]))}catch(x){}}b.sort(E);return b}function H(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ja("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return y(d)}function R(a,b,c){return function(d,e,g,f,l){e=H(e[0],b,c);return a(d,e,g,f,l)}}function ia(a,c,d,e,g,f,l,n,p){function u(a,b,c,d){if(a){c&&(a=R(a,c,d));a.require=G.require;if(Q===
G||G.$$isolateScope)a=qc(a,{isolateScope:!0});l.push(a)}if(b){c&&(b=R(b,c,d));b.require=G.require;if(Q===G||G.$$isolateScope)b=qc(b,{isolateScope:!0});n.push(b)}}function F(a,b,c){var d,e="data",g=!1;if(w(a)){for(;"^"==(d=a.charAt(0))||"?"==d;)a=a.substr(1),"^"==d&&(e="inheritedData"),g=g||"?"==d;d=null;c&&"data"===e&&(d=c[a]);d=d||b[e]("$"+a+"Controller");if(!d&&!g)throw ja("ctreq",a,t);}else M(a)&&(d=[],q(a,function(a){d.push(F(a,b,c))}));return d}function J(a,e,g,f,p){function u(a,b){var c;2>arguments.length&&
(b=a,a=s);D&&(c=lb);return p(a,b,c)}var I,x,v,A,R,H,lb={},da;I=c===g?d:Ub(d,new Hb(y(g),d.$attr));x=I.$$element;if(Q){var T=/^\s*([@=&])(\??)\s*(\w*)\s*$/;f=y(g);H=e.$new(!0);ia&&ia===Q.$$originalDirective?f.data("$isolateScope",H):f.data("$isolateScopeNoTemplate",H);ma(f,"ng-isolate-scope");q(Q.scope,function(a,c){var d=a.match(T)||[],g=d[3]||c,f="?"==d[2],d=d[1],l,m,n,p;H.$$isolateBindings[c]=d+g;switch(d){case "@":I.$observe(g,function(a){H[c]=a});I.$$observers[g].$$scope=e;I[g]&&(H[c]=b(I[g])(e));
break;case "=":if(f&&!I[g])break;m=r(I[g]);p=m.literal?xa:function(a,b){return a===b};n=m.assign||function(){l=H[c]=m(e);throw ja("nonassign",I[g],Q.name);};l=H[c]=m(e);H.$watch(function(){var a=m(e);p(a,H[c])||(p(a,l)?n(e,a=H[c]):H[c]=a);return l=a},null,m.literal);break;case "&":m=r(I[g]);H[c]=function(a){return m(e,a)};break;default:throw ja("iscp",Q.name,c,a);}})}da=p&&u;L&&q(L,function(a){var b={$scope:a===Q||a.$$isolateScope?H:e,$element:x,$attrs:I,$transclude:da},c;R=a.controller;"@"==R&&(R=
I[a.name]);c=z(R,b);lb[a.name]=c;D||x.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});f=0;for(v=l.length;f<v;f++)try{A=l[f],A(A.isolateScope?H:e,x,I,A.require&&F(A.require,x,lb),da)}catch(G){m(G,ha(x))}f=e;Q&&(Q.template||null===Q.templateUrl)&&(f=H);a&&a(f,g.childNodes,s,p);for(f=n.length-1;0<=f;f--)try{A=n[f],A(A.isolateScope?H:e,x,I,A.require&&F(A.require,x,lb),da)}catch(B){m(B,ha(x))}}p=p||{};for(var v=-Number.MAX_VALUE,A,L=p.controllerDirectives,Q=p.newIsolateScopeDirective,
ia=p.templateDirective,T=p.nonTlbTranscludeDirective,E=!1,D=p.hasElementTranscludeDirective,Z=d.$$element=y(c),G,t,V,Xa=e,O,N=0,S=a.length;N<S;N++){G=a[N];var ra=G.$$start,W=G.$$end;ra&&(Z=H(c,ra,W));V=s;if(v>G.priority)break;if(V=G.scope)A=A||G,G.templateUrl||(K("new/isolated scope",Q,G,Z),X(V)&&(Q=G));t=G.name;!G.templateUrl&&G.controller&&(V=G.controller,L=L||{},K("'"+t+"' controller",L[t],G,Z),L[t]=G);if(V=G.transclude)E=!0,G.$$tlb||(K("transclusion",T,G,Z),T=G),"element"==V?(D=!0,v=G.priority,
V=H(c,ra,W),Z=d.$$element=y(U.createComment(" "+t+": "+d[t]+" ")),c=Z[0],mb(g,y(ya.call(V,0)),c),Xa=x(V,e,v,f&&f.name,{nonTlbTranscludeDirective:T})):(V=y(Eb(c)).contents(),Z.empty(),Xa=x(V,e));if(G.template)if(K("template",ia,G,Z),ia=G,V=P(G.template)?G.template(Z,d):G.template,V=Y(V),G.replace){f=G;V=Cb.test(V)?y(V):[];c=V[0];if(1!=V.length||1!==c.nodeType)throw ja("tplrt",t,"");mb(g,Z,c);S={$attr:{}};V=da(c,[],S);var $=a.splice(N+1,a.length-(N+1));Q&&pc(V);a=a.concat(V).concat($);B(d,S);S=a.length}else Z.html(V);
if(G.templateUrl)K("template",ia,G,Z),ia=G,G.replace&&(f=G),J=C(a.splice(N,a.length-N),Z,d,g,Xa,l,n,{controllerDirectives:L,newIsolateScopeDirective:Q,templateDirective:ia,nonTlbTranscludeDirective:T}),S=a.length;else if(G.compile)try{O=G.compile(Z,d,Xa),P(O)?u(null,O,ra,W):O&&u(O.pre,O.post,ra,W)}catch(aa){m(aa,ha(Z))}G.terminal&&(J.terminal=!0,v=Math.max(v,G.priority))}J.scope=A&&!0===A.scope;J.transclude=E&&Xa;p.hasElementTranscludeDirective=D;return J}function pc(a){for(var b=0,c=a.length;b<c;b++)a[b]=
Tb(a[b],{$$isolateScope:!0})}function T(b,e,g,f,k,n,r){if(e===k)return null;k=null;if(c.hasOwnProperty(e)){var p;e=a.get(e+d);for(var z=0,u=e.length;z<u;z++)try{p=e[z],(f===s||f>p.priority)&&-1!=p.restrict.indexOf(g)&&(n&&(p=Tb(p,{$$start:n,$$end:r})),b.push(p),k=p)}catch(F){m(F)}}return k}function B(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,g){"class"==g?(ma(e,b),a["class"]=(a["class"]?
a["class"]+" ":"")+b):"style"==g?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==g.charAt(0)||a.hasOwnProperty(g)||(a[g]=b,d[g]=c[g])})}function C(a,b,c,d,e,g,f,l){var k=[],m,r,z=b[0],u=a.shift(),F=D({},u,{templateUrl:null,transclude:null,replace:null,$$originalDirective:u}),x=P(u.templateUrl)?u.templateUrl(b,c):u.templateUrl;b.empty();n.get(v.getTrustedResourceUrl(x),{cache:p}).success(function(n){var p,J;n=Y(n);if(u.replace){n=Cb.test(n)?y(n):[];p=n[0];if(1!=n.length||
1!==p.nodeType)throw ja("tplrt",u.name,x);n={$attr:{}};mb(d,b,p);var v=da(p,[],n);X(u.scope)&&pc(v);a=v.concat(a);B(c,n)}else p=z,b.html(n);a.unshift(F);m=ia(a,p,c,e,b,u,g,f,l);q(d,function(a,c){a==p&&(d[c]=b[0])});for(r=L(b[0].childNodes,e);k.length;){n=k.shift();J=k.shift();var A=k.shift(),R=k.shift(),v=b[0];if(J!==z){var H=J.className;l.hasElementTranscludeDirective&&u.replace||(v=Eb(p));mb(A,y(J),v);ma(y(v),H)}J=m.transclude?Q(n,m.transclude):R;m(r,n,v,d,J)}k=null}).error(function(a,b,c,d){throw ja("tpload",
d.url);});return function(a,b,c,d,e){k?(k.push(b),k.push(c),k.push(d),k.push(e)):m(r,b,c,d,e)}}function E(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function K(a,b,c,d){if(b)throw ja("multidir",b.name,c.name,a,ha(d));}function t(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:aa(function(a,b){var c=b.parent(),e=c.data("$binding")||[];e.push(d);ma(c.data("$binding",e),"ng-binding");a.$watch(d,function(a){b[0].nodeValue=a})})})}function O(a,b){if("srcdoc"==
b)return v.HTML;var c=Ka(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return v.RESOURCE_URL}function N(a,c,d,e){var g=b(d,!0);if(g){if("multiple"===e&&"SELECT"===Ka(a))throw ja("selmulti",ha(a));c.push({priority:100,compile:function(){return{pre:function(c,d,l){d=l.$$observers||(l.$$observers={});if(f.test(e))throw ja("nodomevents");if(g=b(l[e],!0,O(a,e)))l[e]=g(c),(d[e]||(d[e]=[])).$$inter=!0,(l.$$observers&&l.$$observers[e].$$scope||c).$watch(g,function(a,b){"class"===
e&&a!=b?l.$updateClass(a,b):l.$set(e,a)})}}}})}}function mb(a,b,c){var d=b[0],e=b.length,g=d.parentNode,f,l;if(a)for(f=0,l=a.length;f<l;f++)if(a[f]==d){a[f++]=c;l=f+e-1;for(var k=a.length;f<k;f++,l++)l<k?a[f]=a[l]:delete a[f];a.length-=e-1;break}g&&g.replaceChild(c,d);a=U.createDocumentFragment();a.appendChild(d);c[y.expando]=d[y.expando];d=1;for(e=b.length;d<e;d++)g=b[d],y(g).remove(),a.appendChild(g),delete b[d];b[0]=c;b.length=1}function qc(a,b){return D(function(){return a.apply(null,arguments)},
a,b)}var Hb=function(a,b){this.$$element=a;this.$attr=b||{}};Hb.prototype={$normalize:na,$addClass:function(a){a&&0<a.length&&J.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&J.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=rc(a,b),d=rc(b,a);0===c.length?J.removeClass(this.$$element,d):0===d.length?J.addClass(this.$$element,c):J.setClass(this.$$element,c,d)},$set:function(a,b,c,d){var e=mc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=
d:(d=this.$attr[a])||(this.$attr[a]=d=fb(a,"-"));e=Ka(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=b=A(b,"src"===a);!1!==c&&(null===b||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b));(c=this.$$observers)&&q(c[a],function(a){try{a(b)}catch(c){m(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);u.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var Z=b.startSymbol(),ra=b.endSymbol(),Y="{{"==Z||"}}"==ra?
Da:function(a){return a.replace(/\{\{/g,Z).replace(/}}/g,ra)},W=/^ngAttr[A-Z]/;return x}]}function na(b){return Ta(b.replace(te,""))}function rc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),g=0;a:for(;g<d.length;g++){for(var f=d[g],h=0;h<e.length;h++)if(f==e[h])continue a;c+=(0<c.length?" ":"")+f}return c}function Od(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){Aa(a,"controller");X(a)?D(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,g){var f,
h,l;w(e)&&(f=e.match(a),h=f[1],l=f[3],e=b.hasOwnProperty(h)?b[h]:bc(g.$scope,h,!0)||bc(d,h,!0),Ra(e,h,!0));f=c.instantiate(e,g);if(l){if(!g||"object"!=typeof g.$scope)throw t("$controller")("noscp",h||e.name,l);g.$scope[l]=f}return f}}]}function Pd(){this.$get=["$window",function(b){return y(b.document)}]}function Qd(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function sc(b){var a={},c,d,e;if(!b)return a;q(b.split("\n"),function(b){e=b.indexOf(":");c=K(ca(b.substr(0,
e)));d=ca(b.substr(e+1));c&&(a[c]=a[c]?a[c]+(", "+d):d)});return a}function tc(b){var a=X(b)?b:s;return function(c){a||(a=sc(b));return c?a[K(c)]||null:a}}function uc(b,a,c){if(P(c))return c(b,a);q(c,function(c){b=c(b,a)});return b}function Td(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){w(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=Wb(d)));return d}],transformRequest:[function(a){return X(a)&&
"[object File]"!==wa.call(a)&&"[object Blob]"!==wa.call(a)?qa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ba(d),put:ba(d),patch:ba(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},g=this.interceptors=[],f=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,p){function r(a){function c(a){var b=D({},a,{data:uc(a.data,a.headers,d.transformResponse)});return 200<=a.status&&300>a.status?
b:n.reject(b)}var d={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},g=function(a){function b(a){var c;q(a,function(b,d){P(b)&&(c=b(),null!=c?a[d]=c:delete a[d])})}var c=e.headers,d=D({},a.headers),g,f,c=D({},c.common,c[K(a.method)]);b(c);b(d);a:for(g in c){a=K(g);for(f in d)if(K(f)===a)continue a;d[g]=c[g]}return d}(a);D(d,a);d.headers=g;d.method=Fa(d.method);(a=Ib(d.url)?b.cookies()[d.xsrfCookieName||e.xsrfCookieName]:s)&&(g[d.xsrfHeaderName||e.xsrfHeaderName]=
a);var f=[function(a){g=a.headers;var b=uc(a.data,tc(g),a.transformRequest);E(a.data)&&q(g,function(a,b){"content-type"===K(b)&&delete g[b]});E(a.withCredentials)&&!E(e.withCredentials)&&(a.withCredentials=e.withCredentials);return z(a,b,g).then(c,c)},s],h=n.when(d);for(q(v,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var k=f.shift(),h=h.then(a,k)}h.success=function(a){h.then(function(b){a(b.data,
b.status,b.headers,d)});return h};h.error=function(a){h.then(null,function(b){a(b.data,b.status,b.headers,d)});return h};return h}function z(b,c,g){function f(a,b,c,e){v&&(200<=a&&300>a?v.put(s,[a,b,sc(c),e]):v.remove(s));l(b,a,c,e);d.$$phase||d.$apply()}function l(a,c,d,e){c=Math.max(c,0);(200<=c&&300>c?p.resolve:p.reject)({data:a,status:c,headers:tc(d),config:b,statusText:e})}function k(){var a=db(r.pendingRequests,b);-1!==a&&r.pendingRequests.splice(a,1)}var p=n.defer(),z=p.promise,v,q,s=u(b.url,
b.params);r.pendingRequests.push(b);z.then(k,k);(b.cache||e.cache)&&(!1!==b.cache&&"GET"==b.method)&&(v=X(b.cache)?b.cache:X(e.cache)?e.cache:F);if(v)if(q=v.get(s),B(q)){if(q.then)return q.then(k,k),q;M(q)?l(q[1],q[0],ba(q[2]),q[3]):l(q,200,{},"OK")}else v.put(s,z);E(q)&&a(b.method,s,c,f,g,b.timeout,b.withCredentials,b.responseType);return z}function u(a,b){if(!b)return a;var c=[];Sc(b,function(a,b){null===a||E(a)||(M(a)||(a=[a]),q(a,function(a){X(a)&&(a=qa(a));c.push(za(b)+"="+za(a))}))});0<c.length&&
(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var F=c("$http"),v=[];q(g,function(a){v.unshift(w(a)?p.get(a):p.invoke(a))});q(f,function(a,b){var c=w(a)?p.get(a):p.invoke(a);v.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});r.pendingRequests=[];(function(a){q(arguments,function(a){r[a]=function(b,c){return r(D(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){r[a]=function(b,c,d){return r(D(d||
{},{method:a,url:b,data:c}))}})})("post","put");r.defaults=e;return r}]}function ue(b){if(8>=S&&(!b.match(/^(get|post|head|put|delete|options)$/i)||!O.XMLHttpRequest))return new O.ActiveXObject("Microsoft.XMLHTTP");if(O.XMLHttpRequest)return new O.XMLHttpRequest;throw t("$httpBackend")("noxhr");}function Ud(){this.$get=["$browser","$window","$document",function(b,a,c){return ve(b,ue,b.defer,a.angular.callbacks,c[0])}]}function ve(b,a,c,d,e){function g(a,b){var c=e.createElement("script"),d=function(){c.onreadystatechange=
c.onload=c.onerror=null;e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;S&&8>=S?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&d()}:c.onload=c.onerror=function(){d()};e.body.appendChild(c);return d}var f=-1;return function(e,l,k,m,n,p,r,z){function u(){v=f;A&&A();x&&x.abort()}function F(a,d,e,g,f){L&&c.cancel(L);A=x=null;0===d&&(d=e?200:"file"==sa(l).protocol?404:0);a(1223===d?204:d,e,g,f||"");b.$$completeOutstandingRequest(C)}var v;b.$$incOutstandingRequestCount();
l=l||b.url();if("jsonp"==K(e)){var J="_"+(d.counter++).toString(36);d[J]=function(a){d[J].data=a};var A=g(l.replace("JSON_CALLBACK","angular.callbacks."+J),function(){d[J].data?F(m,200,d[J].data):F(m,v||-2);d[J]=Ea.noop})}else{var x=a(e);x.open(e,l,!0);q(n,function(a,b){B(a)&&x.setRequestHeader(b,a)});x.onreadystatechange=function(){if(x&&4==x.readyState){var a=null,b=null;v!==f&&(a=x.getAllResponseHeaders(),b="response"in x?x.response:x.responseText);F(m,v||x.status,b,a,x.statusText||"")}};r&&(x.withCredentials=
!0);if(z)try{x.responseType=z}catch(s){if("json"!==z)throw s;}x.send(k||null)}if(0<p)var L=c(u,p);else p&&p.then&&p.then(u)}}function Rd(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function g(g,k,m){for(var n,p,r=0,z=[],u=g.length,F=!1,v=[];r<u;)-1!=(n=g.indexOf(b,r))&&-1!=(p=g.indexOf(a,n+f))?(r!=n&&z.push(g.substring(r,n)),z.push(r=c(F=g.substring(n+f,p))),
r.exp=F,r=p+h,F=!0):(r!=u&&z.push(g.substring(r)),r=u);(u=z.length)||(z.push(""),u=1);if(m&&1<z.length)throw vc("noconcat",g);if(!k||F)return v.length=u,r=function(a){try{for(var b=0,c=u,f;b<c;b++)"function"==typeof(f=z[b])&&(f=f(a),f=m?e.getTrusted(m,f):e.valueOf(f),null===f||E(f)?f="":"string"!=typeof f&&(f=qa(f))),v[b]=f;return v.join("")}catch(h){a=vc("interr",g,h.toString()),d(a)}},r.exp=g,r.parts=z,r}var f=b.length,h=a.length;g.startSymbol=function(){return b};g.endSymbol=function(){return a};
return g}]}function Sd(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,f,h,l){var k=a.setInterval,m=a.clearInterval,n=c.defer(),p=n.promise,r=0,z=B(l)&&!l;h=B(h)?h:0;p.then(null,null,d);p.$$intervalId=k(function(){n.notify(r++);0<h&&r>=h&&(n.resolve(r),m(p.$$intervalId),delete e[p.$$intervalId]);z||b.$apply()},f);e[p.$$intervalId]=n;return p}var e={};d.cancel=function(a){return a&&a.$$intervalId in e?(e[a.$$intervalId].reject("canceled"),clearInterval(a.$$intervalId),delete e[a.$$intervalId],
!0):!1};return d}]}function ad(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function wc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=wb(b[a]);return b.join("/")}function xc(b,a,c){b=sa(b,c);a.$$protocol=
b.protocol;a.$$host=b.hostname;a.$$port=Y(b.port)||we[b.protocol]||null}function yc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=sa(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=Yb(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function oa(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ya(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Jb(b){return b.substr(0,
Ya(b).lastIndexOf("/")+1)}function zc(b,a){this.$$html5=!0;a=a||"";var c=Jb(b);xc(b,this,b);this.$$parse=function(a){var e=oa(c,a);if(!w(e))throw Kb("ipthprfx",a,c);yc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Zb(this.$$search),b=this.$$hash?"#"+wb(this.$$hash):"";this.$$url=wc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;if((e=oa(b,d))!==s)return d=e,(e=oa(a,e))!==s?c+(oa("/",e)||e):b+d;if((e=oa(c,
d))!==s)return c+e;if(c==d+"/")return c}}function Lb(b,a){var c=Jb(b);xc(b,this,b);this.$$parse=function(d){var e=oa(b,d)||oa(c,d),e="#"==e.charAt(0)?oa(a,e):this.$$html5?e:"";if(!w(e))throw Kb("ihshprfx",d,a);yc(e,this,b);d=this.$$path;var g=/^\/?.*?:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));g.exec(e)||(d=(e=g.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Zb(this.$$search),e=this.$$hash?"#"+wb(this.$$hash):"";this.$$url=wc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=
b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(Ya(b)==Ya(a))return a}}function Ac(b,a){this.$$html5=!0;Lb.apply(this,arguments);var c=Jb(b);this.$$rewrite=function(d){var e;if(b==Ya(d))return d;if(e=oa(c,d))return b+a+e;if(c===d+"/")return c}}function nb(b){return function(){return this[b]}}function Bc(b,a){return function(c){if(E(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Vd(){var b="",a=!1;this.hashPrefix=function(a){return B(a)?(b=a,this):b};this.html5Mode=
function(b){return B(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,g){function f(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),a)}var h,l=d.baseHref(),k=d.url();a?(l=k.substring(0,k.indexOf("/",k.indexOf("//")+2))+(l||"/"),e=e.history?zc:Ac):(l=Ya(k),e=Lb);h=new e(l,"#"+b);h.$$parse(h.$$rewrite(k));g.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=y(a.target);"a"!==K(b[0].nodeName);)if(b[0]===g[0]||!(b=b.parent())[0])return;
var e=b.prop("href");X(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=sa(e.animVal).href);var f=h.$$rewrite(e);e&&(!b.attr("target")&&f&&!a.isDefaultPrevented())&&(a.preventDefault(),f!=d.url()&&(h.$$parse(f),c.$apply(),O.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=k&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(h.$$parse(b),d.url(b)):f(b)}),c.$$phase||
c.$digest())});var m=0;c.$watch(function(){var a=d.url(),b=h.$$replace;m&&a==h.absUrl()||(m++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),b),f(a))}));h.$$replace=!1;return m});return h}]}function Wd(){var b=!0,a=this;this.debugEnabled=function(a){return B(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:
a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||C;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=[];q(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function fa(b,a){if("constructor"===b)throw Ba("isecfld",a);return b}function Za(b,
a){if(b){if(b.constructor===b)throw Ba("isecfn",a);if(b.document&&b.location&&b.alert&&b.setInterval)throw Ba("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw Ba("isecdom",a);}return b}function ob(b,a,c,d,e){e=e||{};a=a.split(".");for(var g,f=0;1<a.length;f++){g=fa(a.shift(),d);var h=b[g];h||(h={},b[g]=h);b=h;b.then&&e.unwrapPromises&&(ta(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===s&&(b.$$v={}),b=b.$$v)}g=fa(a.shift(),d);return b[g]=c}function Cc(b,
a,c,d,e,g,f){fa(b,g);fa(a,g);fa(c,g);fa(d,g);fa(e,g);return f.unwrapPromises?function(f,l){var k=l&&l.hasOwnProperty(b)?l:f,m;if(null==k)return k;(k=k[b])&&k.then&&(ta(g),"$$v"in k||(m=k,m.$$v=s,m.then(function(a){m.$$v=a})),k=k.$$v);if(!a)return k;if(null==k)return s;(k=k[a])&&k.then&&(ta(g),"$$v"in k||(m=k,m.$$v=s,m.then(function(a){m.$$v=a})),k=k.$$v);if(!c)return k;if(null==k)return s;(k=k[c])&&k.then&&(ta(g),"$$v"in k||(m=k,m.$$v=s,m.then(function(a){m.$$v=a})),k=k.$$v);if(!d)return k;if(null==
k)return s;(k=k[d])&&k.then&&(ta(g),"$$v"in k||(m=k,m.$$v=s,m.then(function(a){m.$$v=a})),k=k.$$v);if(!e)return k;if(null==k)return s;(k=k[e])&&k.then&&(ta(g),"$$v"in k||(m=k,m.$$v=s,m.then(function(a){m.$$v=a})),k=k.$$v);return k}:function(g,f){var k=f&&f.hasOwnProperty(b)?f:g;if(null==k)return k;k=k[b];if(!a)return k;if(null==k)return s;k=k[a];if(!c)return k;if(null==k)return s;k=k[c];if(!d)return k;if(null==k)return s;k=k[d];return e?null==k?s:k=k[e]:k}}function xe(b,a){fa(b,a);return function(a,
d){return null==a?s:(d&&d.hasOwnProperty(b)?d:a)[b]}}function ye(b,a,c){fa(b,c);fa(a,c);return function(c,e){if(null==c)return s;c=(e&&e.hasOwnProperty(b)?e:c)[b];return null==c?s:c[a]}}function Dc(b,a,c){if(Mb.hasOwnProperty(b))return Mb[b];var d=b.split("."),e=d.length,g;if(a.unwrapPromises||1!==e)if(a.unwrapPromises||2!==e)if(a.csp)g=6>e?Cc(d[0],d[1],d[2],d[3],d[4],c,a):function(b,g){var f=0,h;do h=Cc(d[f++],d[f++],d[f++],d[f++],d[f++],c,a)(b,g),g=s,b=h;while(f<e);return h};else{var f="var p;\n";
q(d,function(b,d){fa(b,c);f+="if(s == null) return undefined;\ns="+(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':"")});var f=f+"return s;",h=new Function("s","k","pw",f);h.toString=aa(f);g=a.unwrapPromises?function(a,b){return h(a,b,ta)}:h}else g=ye(d[0],d[1],c);else g=xe(d[0],c);"hasOwnProperty"!==
b&&(Mb[b]=g);return g}function Xd(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=function(b){return B(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=function(b){return B(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(c,d,e){a.csp=d.csp;ta=function(b){a.logPromiseWarnings&&!Ec.hasOwnProperty(b)&&(Ec[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};
return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];e=new Nb(a);e=(new $a(e,c,a)).parse(d,!1);"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return C}}}]}function Zd(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return ze(function(a){b.$evalAsync(a)},a)}]}function ze(b,a){function c(a){return a}function d(a){return f(a)}var e=function(){var f=[],k,m;return m={resolve:function(a){if(f){var c=f;f=s;k=g(a);c.length&&b(function(){for(var a,
b=0,d=c.length;b<d;b++)a=c[b],k.then(a[0],a[1],a[2])})}},reject:function(a){m.resolve(h(a))},notify:function(a){if(f){var c=f;f.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,g,h){var m=e(),u=function(d){try{m.resolve((P(b)?b:c)(d))}catch(e){m.reject(e),a(e)}},F=function(b){try{m.resolve((P(g)?g:d)(b))}catch(c){m.reject(c),a(c)}},v=function(b){try{m.notify((P(h)?h:c)(b))}catch(d){a(d)}};f?f.push([u,F,v]):k.then(u,F,v);return m.promise},"catch":function(a){return this.then(null,
a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,g){var f=null;try{f=(a||c)()}catch(h){return b(h,!1)}return f&&P(f.then)?f.then(function(){return b(e,g)},function(a){return b(a,!1)}):b(e,g)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},g=function(a){return a&&P(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},f=function(a){var b=e();b.reject(a);return b.promise},h=function(c){return{then:function(g,
f){var h=e();b(function(){try{h.resolve((P(f)?f:d)(c))}catch(b){h.reject(b),a(b)}});return h.promise}}};return{defer:e,reject:f,when:function(h,k,m,n){var p=e(),r,z=function(b){try{return(P(k)?k:c)(b)}catch(d){return a(d),f(d)}},u=function(b){try{return(P(m)?m:d)(b)}catch(c){return a(c),f(c)}},F=function(b){try{return(P(n)?n:c)(b)}catch(d){a(d)}};b(function(){g(h).then(function(a){r||(r=!0,p.resolve(g(a).then(z,u,F)))},function(a){r||(r=!0,p.resolve(u(a)))},function(a){r||p.notify(F(a))})});return p.promise},
all:function(a){var b=e(),c=0,d=M(a)?[]:{};q(a,function(a,e){c++;g(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function fe(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,g=e?
function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};g.supported=e;return g}]}function Yd(){var b=10,a=t("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,g,f){function h(){this.$id=bb();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;
this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={}}function l(b){if(p.$$phase)throw a("inprog",p.$$phase);p.$$phase=b}function k(a,b){var c=g(a);Ra(c,b);return c}function m(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}h.prototype={constructor:h,$new:function(a){a?(a=new h,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=
this.$$postDigestQueue):(a=function(){},a.prototype=this,a=new a,a.$id=bb());a["this"]=a;a.$$listeners={};a.$$listenerCount={};a.$parent=this;a.$$watchers=a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=k(a,"watch"),g=this.$$watchers,f={fn:b,last:n,get:e,exp:a,eq:!!d};c=null;if(!P(b)){var h=k(b||C,"listener");f.fn=function(a,
b,c){h(c)}}if("string"==typeof a&&e.constant){var l=f.fn;f.fn=function(a,b,c){l.call(this,a,b,c);Oa(g,f)}}g||(g=this.$$watchers=[]);g.unshift(f);return function(){Oa(g,f);c=null}},$watchCollection:function(a,b){var c=this,d,e,f,h=1<b.length,l=0,k=g(a),m=[],n={},p=!0,q=0;return this.$watch(function(){d=k(c);var a,b;if(X(d))if(ab(d))for(e!==m&&(e=m,q=e.length=0,l++),a=d.length,q!==a&&(l++,e.length=q=a),b=0;b<a;b++)e[b]!==e[b]&&d[b]!==d[b]||e[b]===d[b]||(l++,e[b]=d[b]);else{e!==n&&(e=n={},q=0,l++);a=
0;for(b in d)d.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?e[b]!==d[b]&&(l++,e[b]=d[b]):(q++,e[b]=d[b],l++));if(q>a)for(b in l++,e)e.hasOwnProperty(b)&&!d.hasOwnProperty(b)&&(q--,delete e[b])}else e!==d&&(e=d,l++);return l},function(){p?(p=!1,b(d,d,c)):b(d,f,c);if(h)if(X(d))if(ab(d)){f=Array(d.length);for(var a=0;a<d.length;a++)f[a]=d[a]}else for(a in f={},d)Fc.call(d,a)&&(f[a]=d[a]);else f=d})},$digest:function(){var d,g,f,h,k=this.$$asyncQueue,m=this.$$postDigestQueue,q,x,s=b,L,Q=[],y,H,R;l("$digest");
c=null;do{x=!1;for(L=this;k.length;){try{R=k.shift(),R.scope.$eval(R.expression)}catch(B){p.$$phase=null,e(B)}c=null}a:do{if(h=L.$$watchers)for(q=h.length;q--;)try{if(d=h[q])if((g=d.get(L))!==(f=d.last)&&!(d.eq?xa(g,f):"number"==typeof g&&"number"==typeof f&&isNaN(g)&&isNaN(f)))x=!0,c=d,d.last=d.eq?ba(g):g,d.fn(g,f===n?g:f,L),5>s&&(y=4-s,Q[y]||(Q[y]=[]),H=P(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,H+="; newVal: "+qa(g)+"; oldVal: "+qa(f),Q[y].push(H));else if(d===c){x=!1;break a}}catch(w){p.$$phase=
null,e(w)}if(!(h=L.$$childHead||L!==this&&L.$$nextSibling))for(;L!==this&&!(h=L.$$nextSibling);)L=L.$parent}while(L=h);if((x||k.length)&&!s--)throw p.$$phase=null,a("infdig",b,qa(Q));}while(x||k.length);for(p.$$phase=null;m.length;)try{m.shift()()}catch(T){e(T)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==p&&(q(this.$$listenerCount,eb(null,m,this)),a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&
(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null,this.$$listeners={},this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[],this.$destroy=this.$digest=this.$apply=C,this.$on=this.$watch=function(){return C})}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a){p.$$phase||
p.$$asyncQueue.length||f.defer(function(){p.$$asyncQueue.length&&p.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return l("$apply"),this.$eval(a)}catch(b){e(b)}finally{p.$$phase=null;try{p.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);
var e=this;return function(){c[db(c,b)]=null;m(e,1,a)}},$emit:function(a,b){var c=[],d,g=this,f=!1,h={name:a,targetScope:g,stopPropagation:function(){f=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},l=[h].concat(ya.call(arguments,1)),k,m;do{d=g.$$listeners[a]||c;h.currentScope=g;k=0;for(m=d.length;k<m;k++)if(d[k])try{d[k].apply(null,l)}catch(n){e(n)}else d.splice(k,1),k--,m--;if(f)break;g=g.$parent}while(g);return h},$broadcast:function(a,b){for(var c=this,d=this,g={name:a,
targetScope:this,preventDefault:function(){g.defaultPrevented=!0},defaultPrevented:!1},f=[g].concat(ya.call(arguments,1)),h,k;c=d;){g.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,f)}catch(l){e(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}return g}};var p=new h;return p}]}function bd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*(https?|ftp|file):|data:image\//;
this.aHrefSanitizationWhitelist=function(a){return B(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return B(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,g;if(!S||8<=S)if(g=sa(c).href,""!==g&&!g.match(e))return"unsafe:"+g;return c}}}function Ae(b){if("self"===b)return b;if(w(b)){if(-1<b.indexOf("***"))throw ua("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+
b+"$")}if(cb(b))return RegExp("^"+b.source+"$");throw ua("imatcher");}function Gc(b){var a=[];B(b)&&q(b,function(b){a.push(Ae(b))});return a}function ae(){this.SCE_CONTEXTS=ga;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Gc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Gc(b));return a};this.$get=["$injector",function(c){function d(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=
function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw ua("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var g=d(),f={};f[ga.HTML]=d(g);f[ga.CSS]=d(g);f[ga.URL]=d(g);f[ga.JS]=d(g);f[ga.RESOURCE_URL]=d(f[ga.URL]);return{trustAs:function(a,b){var c=f.hasOwnProperty(a)?f[a]:null;if(!c)throw ua("icontext",a,b);if(null===b||b===s||""===b)return b;if("string"!==typeof b)throw ua("itype",a);return new c(b)},
getTrusted:function(c,d){if(null===d||d===s||""===d)return d;var g=f.hasOwnProperty(c)?f[c]:null;if(g&&d instanceof g)return d.$$unwrapTrustedValue();if(c===ga.RESOURCE_URL){var g=sa(d.toString()),m,n,p=!1;m=0;for(n=b.length;m<n;m++)if("self"===b[m]?Ib(g):b[m].exec(g.href)){p=!0;break}if(p)for(m=0,n=a.length;m<n;m++)if("self"===a[m]?Ib(g):a[m].exec(g.href)){p=!1;break}if(p)return d;throw ua("insecurl",d.toString());}if(c===ga.HTML)return e(d);throw ua("unsafe");},valueOf:function(a){return a instanceof
g?a.$$unwrapTrustedValue():a}}}]}function $d(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw ua("iequirks");var e=ba(ga);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Da);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,
d(a,c))}};var g=e.parseAs,f=e.getTrusted,h=e.trustAs;q(ga,function(a,b){var c=K(b);e[Ta("parse_as_"+c)]=function(b){return g(a,b)};e[Ta("get_trusted_"+c)]=function(b){return f(a,b)};e[Ta("trust_as_"+c)]=function(b){return h(a,b)}});return e}]}function be(){this.$get=["$window","$document",function(b,a){var c={},d=Y((/android (\d+)/.exec(K((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),g=a[0]||{},f=g.documentMode,h,l=/^(Moz|webkit|O|ms)(?=[A-Z])/,k=g.body&&g.body.style,
m=!1,n=!1;if(k){for(var p in k)if(m=l.exec(p)){h=m[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in k&&"webkit");m=!!("transition"in k||h+"Transition"in k);n=!!("animation"in k||h+"Animation"in k);!d||m&&n||(m=w(g.body.style.webkitTransition),n=w(g.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!f||7<f),hasEvent:function(a){if("input"==a&&9==S)return!1;if(E(c[a])){var b=g.createElement("div");c[a]="on"+
a in b}return c[a]},csp:Vb(),vendorPrefix:h,transitions:m,animations:n,android:d,msie:S,msieDocumentMode:f}}]}function de(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,h,l){var k=c.defer(),m=k.promise,n=B(l)&&!l;h=a.defer(function(){try{k.resolve(e())}catch(a){k.reject(a),d(a)}finally{delete g[m.$$timeoutId]}n||b.$apply()},h);m.$$timeoutId=h;g[h]=k;return m}var g={};e.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),
delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function sa(b,a){var c=b;S&&(W.setAttribute("href",c),c=W.href);W.setAttribute("href",c);return{href:W.href,protocol:W.protocol?W.protocol.replace(/:$/,""):"",host:W.host,search:W.search?W.search.replace(/^\?/,""):"",hash:W.hash?W.hash.replace(/^#/,""):"",hostname:W.hostname,port:W.port,pathname:"/"===W.pathname.charAt(0)?W.pathname:"/"+W.pathname}}function Ib(b){b=w(b)?sa(b):b;return b.protocol===Hc.protocol&&b.host===Hc.host}
function ee(){this.$get=aa(O)}function gc(b){function a(d,e){if(X(d)){var g={};q(d,function(b,c){g[c]=a(c,b)});return g}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Ic);a("date",Jc);a("filter",Be);a("json",Ce);a("limitTo",De);a("lowercase",Ee);a("number",Kc);a("orderBy",Lc);a("uppercase",Fe)}function Be(){return function(b,a,c){if(!M(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;
return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Ea.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&Fc.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var g=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!g(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,
b);default:for(var d in a)if("$"!==d.charAt(0)&&g(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(g(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var f in a)(function(b){"undefined"!=typeof a[b]&&e.push(function(c){return g("$"==b?c:c&&c[b],a[b])})})(f);break;case "function":e.push(a);break;default:return b}d=[];for(f=0;f<b.length;f++){var h=b[f];e.check(h)&&d.push(h)}return d}}function Ic(b){var a=
b.NUMBER_FORMATS;return function(b,d){E(d)&&(d=a.CURRENCY_SYM);return Mc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Kc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Mc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Mc(b,a,c,d,e){if(null==b||!isFinite(b)||X(b))return"";var g=0>b;b=Math.abs(b);var f=b+"",h="",l=[],k=!1;if(-1!==f.indexOf("e")){var m=f.match(/([\d\.]+)e(-?)(\d+)/);m&&"-"==m[2]&&m[3]>e+1?f="0":(h=f,k=!0)}if(k)0<e&&(-1<b&&1>b)&&(h=b.toFixed(e));
else{f=(f.split(Nc)[1]||"").length;E(e)&&(e=Math.min(Math.max(a.minFrac,f),a.maxFrac));f=Math.pow(10,e);b=Math.round(b*f)/f;b=(""+b).split(Nc);f=b[0];b=b[1]||"";var m=0,n=a.lgSize,p=a.gSize;if(f.length>=n+p)for(m=f.length-n,k=0;k<m;k++)0===(m-k)%p&&0!==k&&(h+=c),h+=f.charAt(k);for(k=m;k<f.length;k++)0===(f.length-k)%n&&0!==k&&(h+=c),h+=f.charAt(k);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,e))}l.push(g?a.negPre:a.posPre);l.push(h);l.push(g?a.negSuf:a.posSuf);return l.join("")}function Ob(b,
a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Ob(e,a,d)}}function pb(b,a){return function(c,d){var e=c["get"+b](),g=Fa(a?"SHORT"+b:b);return d[g][e]}}function Jc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var g=0,f=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(g=Y(b[9]+b[10]),f=Y(b[9]+b[11]));
h.call(a,Y(b[1]),Y(b[2])-1,Y(b[3]));g=Y(b[4]||0)-g;f=Y(b[5]||0)-f;h=Y(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,g,f,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var g="",f=[],h,l;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;w(c)&&(c=Ge.test(c)?Y(c):a(c));vb(c)&&(c=new Date(c));if(!Na(c))return c;for(;e;)(l=He.exec(e))?(f=f.concat(ya.call(l,1)),e=f.pop()):(f.push(e),e=null);q(f,function(a){h=
Ie[a];g+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Ce(){return function(b){return qa(b,!0)}}function De(){return function(b,a){if(!M(b)&&!w(b))return b;a=Y(a);if(w(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Lc(b){return function(a,c,d){function e(a,b){return Qa(b)?function(b,c){return a(c,b)}:a}
function g(a,b){var c=typeof a,d=typeof b;return c==d?("string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!M(a)||!c)return a;c=M(c)?c:[c];c=Uc(c,function(a){var c=!1,d=a||Da;if(w(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a);if(d.constant){var f=d();return e(function(a,b){return g(a[f],b[f])},c)}}return e(function(a,b){return g(d(a),d(b))},c)});for(var f=[],h=0;h<a.length;h++)f.push(a[h]);return f.sort(e(function(a,b){for(var d=
0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function va(b){P(b)&&(b={link:b});b.restrict=b.restrict||"AC";return aa(b)}function Oc(b,a,c,d){function e(a,c){c=c?"-"+fb(c,"-"):"";d.removeClass(b,(a?qb:rb)+c);d.addClass(b,(a?rb:qb)+c)}var g=this,f=b.parent().controller("form")||sb,h=0,l=g.$error={},k=[];g.$name=a.name||a.ngForm;g.$dirty=!1;g.$pristine=!0;g.$valid=!0;g.$invalid=!1;f.$addControl(g);b.addClass(La);e(!0);g.$addControl=function(a){Aa(a.$name,"input");k.push(a);a.$name&&
(g[a.$name]=a)};g.$removeControl=function(a){a.$name&&g[a.$name]===a&&delete g[a.$name];q(l,function(b,c){g.$setValidity(c,!0,a)});Oa(k,a)};g.$setValidity=function(a,b,c){var d=l[a];if(b)d&&(Oa(d,c),d.length||(h--,h||(e(b),g.$valid=!0,g.$invalid=!1),l[a]=!1,e(!0,a),f.$setValidity(a,!0,g)));else{h||e(b);if(d){if(-1!=db(d,c))return}else l[a]=d=[],h++,e(!1,a),f.$setValidity(a,!1,g);d.push(c);g.$valid=!1;g.$invalid=!0}};g.$setDirty=function(){d.removeClass(b,La);d.addClass(b,tb);g.$dirty=!0;g.$pristine=
!1;f.$setDirty()};g.$setPristine=function(){d.removeClass(b,tb);d.addClass(b,La);g.$dirty=!1;g.$pristine=!0;q(k,function(a){a.$setPristine()})}}function pa(b,a,c,d){b.$setValidity(a,c);return c?d:s}function Je(b,a,c){var d=c.prop("validity");X(d)&&b.$parsers.push(function(c){if(b.$error[a]||!(d.badInput||d.customError||d.typeMismatch)||d.valueMissing)return c;b.$setValidity(a,!1)})}function ub(b,a,c,d,e,g){var f=a.prop("validity");if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});
a.on("compositionend",function(){h=!1;l()})}var l=function(){if(!h){var e=a.val();Qa(c.ngTrim||"T")&&(e=ca(e));if(d.$viewValue!==e||f&&""===e&&!f.valueMissing)b.$$phase?d.$setViewValue(e):b.$apply(function(){d.$setViewValue(e)})}};if(e.hasEvent("input"))a.on("input",l);else{var k,m=function(){k||(k=g.defer(function(){l();k=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||m()});if(e.hasEvent("paste"))a.on("paste cut",m)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?
"":d.$viewValue)};var n=c.ngPattern;n&&((e=n.match(/^\/(.*)\/([gim]*)$/))?(n=RegExp(e[1],e[2]),e=function(a){return pa(d,"pattern",d.$isEmpty(a)||n.test(a),a)}):e=function(c){var e=b.$eval(n);if(!e||!e.test)throw t("ngPattern")("noregexp",n,e,ha(a));return pa(d,"pattern",d.$isEmpty(c)||e.test(c),c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var p=Y(c.ngMinlength);e=function(a){return pa(d,"minlength",d.$isEmpty(a)||a.length>=p,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var r=
Y(c.ngMaxlength);e=function(a){return pa(d,"maxlength",d.$isEmpty(a)||a.length<=r,a)};d.$parsers.push(e);d.$formatters.push(e)}}function Pb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){if(!M(a)){if(w(a))return a.split(" ");if(X(a)){var b=[];q(a,function(a,c){a&&b.push(c)});return b}}return a}return{restrict:"AC",link:function(g,f,h){function l(a,b){var c=
f.data("$classCounts")||{},d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});f.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||g.$index%2===a){var k=e(b||[]);if(!m){var r=l(k,1);h.$addClass(r)}else if(!xa(b,m)){var q=e(m),r=d(k,q),k=d(q,k),k=l(k,-1),r=l(r,1);0===r.length?c.removeClass(f,k):0===k.length?c.addClass(f,r):c.setClass(f,r,k)}}m=ba(b)}var m;g.$watch(h[b],k,!0);h.$observe("class",function(a){k(g.$eval(h[b]))});"ngClass"!==b&&g.$watch("$index",
function(c,d){var f=c&1;if(f!==d&1){var k=e(g.$eval(h[b]));f===a?(f=l(k,1),h.$addClass(f)):(f=l(k,-1),h.$removeClass(f))}})}}}]}var K=function(b){return w(b)?b.toLowerCase():b},Fc=Object.prototype.hasOwnProperty,Fa=function(b){return w(b)?b.toUpperCase():b},S,y,Ga,ya=[].slice,Ke=[].push,wa=Object.prototype.toString,Pa=t("ng"),Ea=O.angular||(O.angular={}),Sa,Ka,ka=["0","0","0"];S=Y((/msie (\d+)/.exec(K(navigator.userAgent))||[])[1]);isNaN(S)&&(S=Y((/trident\/.*; rv:(\d+)/.exec(K(navigator.userAgent))||
[])[1]));C.$inject=[];Da.$inject=[];var ca=function(){return String.prototype.trim?function(b){return w(b)?b.trim():b}:function(b){return w(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();Ka=9>S?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?Fa(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Xc=/[A-Z]/g,$c={full:"1.2.16",major:1,minor:2,dot:16,codeName:"badger-enumeration"},Ua=N.cache={},gb=N.expando="ng-"+(new Date).getTime(),
me=1,Pc=O.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},Fb=O.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)};N._data=function(b){return this.cache[b[this.expando]]||{}};var he=/([\:\-\_]+(.))/g,ie=/^moz([A-Z])/,Bb=t("jqLite"),je=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Cb=/<|&#?\w+;/,ke=/<([\w:]+)/,le=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ea=
{option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ea.optgroup=ea.option;ea.tbody=ea.tfoot=ea.colgroup=ea.caption=ea.thead;ea.th=ea.td;var Ja=N.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===U.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),N(O).on("load",a))},toString:function(){var b=
[];q(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?y(this[b]):y(this[this.length+b])},length:0,push:Ke,sort:[].sort,splice:[].splice},kb={};q("multiple selected checked disabled readOnly required open".split(" "),function(b){kb[K(b)]=b});var nc={};q("input select option textarea button form details".split(" "),function(b){nc[Fa(b)]=!0});q({data:jc,inheritedData:jb,scope:function(b){return y(b).data("$scope")||jb(b.parentNode||b,["$isolateScope","$scope"])},
isolateScope:function(b){return y(b).data("$isolateScope")||y(b).data("$isolateScopeNoTemplate")},controller:kc,injector:function(b){return jb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Gb,css:function(b,a,c){a=Ta(a);if(B(c))b.style[a]=c;else{var d;8>=S&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=S&&(d=""===d?s:d);return d}},attr:function(b,a,c){var d=K(a);if(kb[d])if(B(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));
else return b[a]||(b.attributes.getNamedItem(a)||C).specified?d:s;else if(B(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?s:b},prop:function(b,a,c){if(B(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(E(d))return e?b[e]:"";b[e]=d}var a=[];9>S?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(E(a)){if("SELECT"===Ka(b)&&b.multiple){var c=[];q(b.options,function(a){a.selected&&
c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(E(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Ha(d[c]);b.innerHTML=a},empty:lc},function(b,a){N.prototype[a]=function(a,d){var e,g;if(b!==lc&&(2==b.length&&b!==Gb&&b!==kc?a:d)===s){if(X(a)){for(e=0;e<this.length;e++)if(b===jc)b(this[e],a);else for(g in a)b(this[e],g,a[g]);return this}e=b.$dv;g=e===s?Math.min(this.length,1):this.length;for(var f=0;f<g;f++){var h=b(this[f],a,d);e=
e?e+h:h}return e}for(e=0;e<this.length;e++)b(this[e],a,d);return this}});q({removeData:hc,dealoc:Ha,on:function a(c,d,e,g){if(B(g))throw Bb("onargs");var f=la(c,"events"),h=la(c,"handle");f||la(c,"events",f={});h||la(c,"handle",h=ne(c,f));q(d.split(" "),function(d){var g=f[d];if(!g){if("mouseenter"==d||"mouseleave"==d){var m=U.body.contains||U.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):
a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};f[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||m(this,c))||h(a,d)})}else Pc(c,d,h),f[d]=[];g=f[d]}g.push(e)})},off:ic,one:function(a,c,d){a=y(a);a.on(c,function g(){a.off(c,d);a.off(c,g)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Ha(a);q(new N(c),function(c){d?e.insertBefore(c,d.nextSibling):
e.replaceChild(c,a);d=c})},children:function(a){var c=[];q(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){q(new N(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;q(new N(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=y(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Ha(a);
var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;q(new N(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:ib,removeClass:hb,toggleClass:function(a,c,d){c&&q(c.split(" "),function(c){var g=d;E(g)&&(g=!Gb(a,c));(g?ib:hb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?
a.getElementsByTagName(c):[]},clone:Eb,triggerHandler:function(a,c,d){c=(la(a,"events")||{})[c];d=d||[];var e=[{preventDefault:C,stopPropagation:C}];q(c,function(c){c.apply(a,e.concat(d))})}},function(a,c){N.prototype[c]=function(c,e,g){for(var f,h=0;h<this.length;h++)E(f)?(f=a(this[h],c,e,g),B(f)&&(f=y(f))):Db(f,a(this[h],c,e,g));return B(f)?f:this};N.prototype.bind=N.prototype.on;N.prototype.unbind=N.prototype.off});Va.prototype={put:function(a,c){this[Ia(a)]=c},get:function(a){return this[Ia(a)]},
remove:function(a){var c=this[a=Ia(a)];delete this[a];return c}};var pe=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,qe=/,/,re=/^\s*(_?)(\S+?)\1\s*$/,oe=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Wa=t("$injector"),Le=t("$animate"),Ld=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Le("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?
a:null);return this.$$classNameFilter};this.$get=["$timeout","$$asyncCallback",function(a,d){return{enter:function(a,c,f,h){f?f.after(a):(c&&c[0]||(c=f.parent()),c.append(a));h&&d(h)},leave:function(a,c){a.remove();c&&d(c)},move:function(a,c,d,h){this.enter(a,c,d,h)},addClass:function(a,c,f){c=w(c)?c:M(c)?c.join(" "):"";q(a,function(a){ib(a,c)});f&&d(f)},removeClass:function(a,c,f){c=w(c)?c:M(c)?c.join(" "):"";q(a,function(a){hb(a,c)});f&&d(f)},setClass:function(a,c,f,h){q(a,function(a){ib(a,c);hb(a,
f)});h&&d(h)},enabled:C}}]}],ja=t("$compile");cc.$inject=["$provide","$$sanitizeUriProvider"];var te=/^(x[\:\-_]|data[\:\-_])/i,vc=t("$interpolate"),Me=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,we={http:80,https:443,ftp:21},Kb=t("$location");Ac.prototype=Lb.prototype=zc.prototype={$$html5:!1,$$replace:!1,absUrl:nb("$$absUrl"),url:function(a,c){if(E(a))return this.$$url;var d=Me.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:nb("$$protocol"),
host:nb("$$host"),port:nb("$$port"),path:Bc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(w(a))this.$$search=Yb(a);else if(X(a))this.$$search=a;else throw Kb("isrcharg");break;default:E(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Bc("$$hash",Da),replace:function(){this.$$replace=!0;return this}};var Ba=t("$parse"),Ec={},ta,Ma={"null":function(){return null},"true":function(){return!0},
"false":function(){return!1},undefined:C,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return B(d)?B(e)?d+e:d:B(e)?e:s},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(B(d)?d:0)-(B(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":C,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,
c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Ne={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},
Nb=function(a){this.options=a};Nb.prototype={constructor:Nb,lex:function(a){this.text=a;this.index=0;this.ch=s;this.lastCh=":";this.tokens=[];var c;for(a=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent(),this.was("{,")&&("{"===a[0]&&(c=this.tokens[this.tokens.length-1]))&&(c.json=-1===c.text.indexOf("."));
else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch,json:this.was(":[,")&&this.is("{[")||this.is("}]:,")}),this.is("{[")&&a.unshift(this.ch),this.is("}]")&&a.shift(),this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{var d=this.ch+this.peek(),e=d+this.peek(2),g=Ma[this.ch],f=Ma[d],h=Ma[e];h?(this.tokens.push({index:this.index,text:e,fn:h}),this.index+=3):f?(this.tokens.push({index:this.index,text:d,fn:f}),this.index+=2):g?(this.tokens.push({index:this.index,
text:this.ch,fn:g,json:this.was("[,:")&&this.is("+-")}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===
a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=B(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw Ba("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=K(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=
d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,json:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,g,f,h;this.index<this.text.length;){h=this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;
this.index++}if(e)for(g=this.index;g<this.text.length;){h=this.text.charAt(g);if("("===h){f=c.substr(e-d+1);c=c.substr(0,e-d);this.index=g;break}if(this.isWhitespace(h))g++;else break}d={index:d,text:c};if(Ma.hasOwnProperty(c))d.fn=Ma[c],d.json=Ma[c];else{var l=Dc(c,this.options,this.text);d.fn=D(function(a,c){return l(a,c)},{assign:function(d,e){return ob(d,c,e,a.text,a.options)}})}this.tokens.push(d);f&&(this.tokens.push({index:e,text:".",json:!1}),this.tokens.push({index:e+1,text:f,json:!1}))},
readString:function(a){var c=this.index;this.index++;for(var d="",e=a,g=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),e=e+f;if(g)"u"===f?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d=(g=Ne[f])?d+g:d+f,g=!1;else if("\\"===f)g=!0;else{if(f===a){this.index++;this.tokens.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});return}d+=
f}this.index++}this.throwError("Unterminated quote",c)}};var $a=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};$a.ZERO=D(function(){return 0},{constant:!0});$a.prototype={constructor:$a,parse:function(a,c){this.text=a;this.json=c;this.tokens=this.lexer.lex(a);c&&(this.assignment=this.logicalOR,this.functionCall=this.fieldAccess=this.objectIndex=this.filterChain=function(){this.throwError("is not valid json",{text:a,index:0})});var d=c?this.primary():this.statements();0!==this.tokens.length&&
this.throwError("is an unexpected token",this.tokens[0]);d.literal=!!d.literal;d.constant=!!d.constant;return d},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.json&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?
(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw Ba("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw Ba("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var g=this.tokens[0],f=g.text;if(f===a||f===c||f===d||f===e||!(a||c||d||e))return g}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,
e))?(this.json&&!a.json&&this.throwError("is not valid json",a),this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return D(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return D(function(e,g){return a(e,g)?c(e,g):d(e,g)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return D(function(e,g){return c(e,g,a,d)},{constant:a.constant&&d.constant})},
statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,g=0;g<a.length;g++){var f=a[g];f&&(e=f(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());else{var e=
function(a,e,h){h=[h];for(var l=0;l<d.length;l++)h.push(d[l](a,e));return c.apply(a,h)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,g){return a.assign(d,c(d,g),g)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.ternary();
if(d=this.expect(":"))return this.ternaryFn(a,c,this.ternary());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},
relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn($a.ZERO,a.fn,
this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Dc(d,this.options,this.text);return D(function(c,d,h){return e(h||a(c,d))},{assign:function(e,f,h){return ob(a(e,h),d,f,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return D(function(e,g){var f=a(e,g),h=d(e,g),l;if(!f)return s;(f=Za(f[h],c.text))&&(f.then&&c.options.unwrapPromises)&&(l=f,"$$v"in f||(l.$$v=s,l.then(function(a){l.$$v=
a})),f=f.$$v);return f},{assign:function(e,g,f){var h=d(e,f);return Za(a(e,f),c.text)[h]=g}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(g,f){for(var h=[],l=c?c(g,f):g,k=0;k<d.length;k++)h.push(d[k](g,f));k=a(g,f,l)||C;Za(l,e.text);Za(k,e.text);h=k.apply?k.apply(l,h):k(h[0],h[1],h[2],h[3],h[4]);return Za(h,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;
var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return D(function(c,d){for(var f=[],h=0;h<a.length;h++)f.push(a[h](c,d));return f},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return D(function(c,d){for(var e={},l=0;l<
a.length;l++){var k=a[l];e[k.key]=k.value(c,d)}return e},{literal:!0,constant:c})}};var Mb={},ua=t("$sce"),ga={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},W=U.createElement("a"),Hc=sa(O.location.href,!0);gc.$inject=["$provide"];Ic.$inject=["$locale"];Kc.$inject=["$locale"];var Nc=".",Ie={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:pb("Month"),MMM:pb("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",
1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:pb("Day"),EEE:pb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Ob(Math[0<a?"floor":"ceil"](a/60),2)+Ob(Math.abs(a%60),2))}},He=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,Ge=/^\-?\d+$/;Jc.$inject=["$locale"];var Ee=aa(K),Fe=aa(Fa);Lc.$inject=
["$parse"];var cd=aa({restrict:"E",compile:function(a,c){8>=S&&(c.href||c.name||c.$set("href",""),a.append(U.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var g="[object SVGAnimatedString]"===wa.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(g)||a.preventDefault()})}}}),zb={};q(kb,function(a,c){if("multiple"!=a){var d=na("ng-"+c);zb[d]=function(){return{priority:100,link:function(a,g,f){a.$watch(f[d],function(a){f.$set(c,!!a)})}}}}});q(["src",
"srcset","href"],function(a){var c=na("ng-"+a);zb[c]=function(){return{priority:99,link:function(d,e,g){var f=a,h=a;"href"===a&&"[object SVGAnimatedString]"===wa.call(e.prop("href"))&&(h="xlinkHref",g.$attr[h]="xlink:href",f=null);g.$observe(c,function(a){a&&(g.$set(h,a),S&&f&&e.prop(f,g[h]))})}}}});var sb={$addControl:C,$removeControl:C,$setValidity:C,$setDirty:C,$setPristine:C};Oc.$inject=["$element","$attrs","$scope","$animate"];var Qc=function(a){return["$timeout",function(c){return{name:"form",
restrict:a?"EAC":"E",controller:Oc,compile:function(){return{pre:function(a,e,g,f){if(!g.action){var h=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};Pc(e[0],"submit",h);e.on("$destroy",function(){c(function(){Fb(e[0],"submit",h)},0,!1)})}var l=e.parent().controller("form"),k=g.name||g.ngForm;k&&ob(a,k,f,k);if(l)e.on("$destroy",function(){l.$removeControl(f);k&&ob(a,k,s,k);D(f,sb)})}}}}}]},dd=Qc(),qd=Qc(!0),Oe=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
Pe=/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i,Qe=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Rc={text:ub,number:function(a,c,d,e,g,f){ub(a,c,d,e,g,f);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||Qe.test(a))return e.$setValidity("number",!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return s});Je(e,"number",c);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return pa(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),
e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return pa(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return pa(e,"number",e.$isEmpty(a)||vb(a),a)})},url:function(a,c,d,e,g,f){ub(a,c,d,e,g,f);a=function(a){return pa(e,"url",e.$isEmpty(a)||Oe.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,g,f){ub(a,c,d,e,g,f);a=function(a){return pa(e,"email",e.$isEmpty(a)||Pe.test(a),a)};e.$formatters.push(a);
e.$parsers.push(a)},radio:function(a,c,d,e){E(d.name)&&c.attr("name",bb());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var g=d.ngTrueValue,f=d.ngFalseValue;w(g)||(g=!0);w(f)||(f=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==g};
e.$formatters.push(function(a){return a===g});e.$parsers.push(function(a){return a?g:f})},hidden:C,button:C,submit:C,reset:C,file:C},dc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",link:function(d,e,g,f){f&&(Rc[K(g.type)]||Rc.text)(d,e,g,f,c,a)}}}],rb="ng-valid",qb="ng-invalid",La="ng-pristine",tb="ng-dirty",Re=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate",function(a,c,d,e,g,f){function h(a,c){c=c?"-"+fb(c,"-"):"";f.removeClass(e,(a?qb:rb)+c);
f.addClass(e,(a?rb:qb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var l=g(d.ngModel),k=l.assign;if(!k)throw t("ngModel")("nonassign",d.ngModel,ha(e));this.$render=C;this.$isEmpty=function(a){return E(a)||""===a||null===a||a!==a};var m=e.inheritedData("$formController")||sb,n=0,p=this.$error={};e.addClass(La);h(!0);this.$setValidity=function(a,c){p[a]!==
!c&&(c?(p[a]&&n--,n||(h(!0),this.$valid=!0,this.$invalid=!1)):(h(!1),this.$invalid=!0,this.$valid=!1,n++),p[a]=!c,h(c,a),m.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=!0;f.removeClass(e,tb);f.addClass(e,La)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,f.removeClass(e,La),f.addClass(e,tb),m.$setDirty());q(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,k(a,d),q(this.$viewChangeListeners,
function(a){try{a()}catch(d){c(d)}}))};var r=this;a.$watch(function(){var c=l(a);if(r.$modelValue!==c){var d=r.$formatters,e=d.length;for(r.$modelValue=c;e--;)c=d[e](c);r.$viewValue!==c&&(r.$viewValue=c,r.$render())}return c})}],Fd=function(){return{require:["ngModel","^?form"],controller:Re,link:function(a,c,d,e){var g=e[0],f=e[1]||sb;f.$addControl(g);a.$on("$destroy",function(){f.$removeControl(g)})}}},Hd=aa({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),
ec=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var g=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(g);e.$parsers.unshift(g);d.$observe("required",function(){g(e.$viewValue)})}}}},Gd=function(){return{require:"ngModel",link:function(a,c,d,e){var g=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!E(a)){var c=[];a&&q(a.split(g),function(a){a&&
c.push(ca(a))});return c}});e.$formatters.push(function(a){return M(a)?a.join(", "):s});e.$isEmpty=function(a){return!a||!a.length}}}},Se=/^(true|false|\d+)$/,Id=function(){return{priority:100,compile:function(a,c){return Se.test(c.ngValue)?function(a,c,g){g.$set("value",a.$eval(g.ngValue))}:function(a,c,g){a.$watch(g.ngValue,function(a){g.$set("value",a)})}}}},id=va(function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==s?"":a)})}),kd=["$interpolate",
function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],jd=["$sce","$parse",function(a,c){return function(d,e,g){e.addClass("ng-binding").data("$binding",g.ngBindHtml);var f=c(g.ngBindHtml);d.$watch(function(){return(f(d)||"").toString()},function(c){e.html(a.getTrustedHtml(f(d))||"")})}}],ld=Pb("",!0),nd=Pb("Odd",0),md=Pb("Even",1),od=va({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),
pd=[function(){return{scope:!0,controller:"@",priority:500}}],fc={};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=na("ng-"+a);fc[c]=["$parse",function(d){return{compile:function(e,g){var f=d(g[c]);return function(c,d,e){d.on(K(a),function(a){c.$apply(function(){f(c,{$event:a})})})}}}}]});var sd=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",
$$tlb:!0,link:function(c,d,e,g,f){var h,l,k;c.$watch(e.ngIf,function(g){Qa(g)?l||(l=c.$new(),f(l,function(c){c[c.length++]=U.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)})):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=yb(h.clone),a.leave(k,function(){k=null}),h=null))})}}}],td=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,g){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Ea.noop,compile:function(f,
h){var l=h.ngInclude||h.src,k=h.onload||"",m=h.autoscroll;return function(f,h,q,s,u){var F=0,v,y,A,x=function(){y&&(y.remove(),y=null);v&&(v.$destroy(),v=null);A&&(e.leave(A,function(){y=null}),y=A,A=null)};f.$watch(g.parseAsResourceUrl(l),function(g){var l=function(){!B(m)||m&&!f.$eval(m)||d()},q=++F;g?(a.get(g,{cache:c}).success(function(a){if(q===F){var c=f.$new();s.template=a;a=u(c,function(a){x();e.enter(a,null,h,l)});v=c;A=a;v.$emit("$includeContentLoaded");f.$eval(k)}}).error(function(){q===
F&&x()}),f.$emit("$includeContentRequested")):(x(),s.template=null)})}}}}],Jd=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,g){d.html(g.template);a(d.contents())(c)}}}],ud=va({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),vd=va({terminal:!0,priority:1E3}),wd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,g,f){var h=f.count,l=f.$attr.when&&g.attr(f.$attr.when),k=f.offset||
0,m=e.$eval(l)||{},n={},p=c.startSymbol(),r=c.endSymbol(),s=/^when(Minus)?(.+)$/;q(f,function(a,c){s.test(c)&&(m[K(c.replace("when","").replace("Minus","-"))]=g.attr(f.$attr[c]))});q(m,function(a,e){n[e]=c(a.replace(d,p+h+"-"+k+r))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in m||(c=a.pluralCat(c-k));return n[c](e,g,!0)},function(a){g.text(a)})}}}],xd=["$parse","$animate",function(a,c){var d=t("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,
link:function(e,g,f,h,l){var k=f.ngRepeat,m=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),n,p,r,s,u,F,v={$id:Ia};if(!m)throw d("iexp",k);f=m[1];h=m[2];(m=m[3])?(n=a(m),p=function(a,c,d){F&&(v[F]=a);v[u]=c;v.$index=d;return n(e,v)}):(r=function(a,c){return Ia(c)},s=function(a){return a});m=f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!m)throw d("iidexp",f);u=m[3]||m[1];F=m[2];var B={};e.$watchCollection(h,function(a){var f,h,m=g[0],n,v={},H,R,w,C,T,t,
E=[];if(ab(a))T=a,n=p||r;else{n=p||s;T=[];for(w in a)a.hasOwnProperty(w)&&"$"!=w.charAt(0)&&T.push(w);T.sort()}H=T.length;h=E.length=T.length;for(f=0;f<h;f++)if(w=a===T?f:T[f],C=a[w],C=n(w,C,f),Aa(C,"`track by` id"),B.hasOwnProperty(C))t=B[C],delete B[C],v[C]=t,E[f]=t;else{if(v.hasOwnProperty(C))throw q(E,function(a){a&&a.scope&&(B[a.id]=a)}),d("dupes",k,C);E[f]={id:C};v[C]=!1}for(w in B)B.hasOwnProperty(w)&&(t=B[w],f=yb(t.clone),c.leave(f),q(f,function(a){a.$$NG_REMOVED=!0}),t.scope.$destroy());
f=0;for(h=T.length;f<h;f++){w=a===T?f:T[f];C=a[w];t=E[f];E[f-1]&&(m=E[f-1].clone[E[f-1].clone.length-1]);if(t.scope){R=t.scope;n=m;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);t.clone[0]!=n&&c.move(yb(t.clone),null,y(m));m=t.clone[t.clone.length-1]}else R=e.$new();R[u]=C;F&&(R[F]=w);R.$index=f;R.$first=0===f;R.$last=f===H-1;R.$middle=!(R.$first||R.$last);R.$odd=!(R.$even=0===(f&1));t.scope||l(R,function(a){a[a.length++]=U.createComment(" end ngRepeat: "+k+" ");c.enter(a,null,y(m));m=a;t.scope=R;t.clone=
a;v[t.id]=t})}B=v})}}}],yd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Qa(c)?"removeClass":"addClass"](d,"ng-hide")})}}],rd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Qa(c)?"addClass":"removeClass"](d,"ng-hide")})}}],zd=va(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Ad=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases=
{}}],link:function(c,d,e,g){var f,h,l,k=[];c.$watch(e.ngSwitch||e.on,function(d){var n,p=k.length;if(0<p){if(l){for(n=0;n<p;n++)l[n].remove();l=null}l=[];for(n=0;n<p;n++){var r=h[n];k[n].$destroy();l[n]=r;a.leave(r,function(){l.splice(n,1);0===l.length&&(l=null)})}}h=[];k=[];if(f=g.cases["!"+d]||g.cases["?"])c.$eval(e.change),q(f,function(d){var e=c.$new();k.push(e);d.transclude(e,function(c){var e=d.element;h.push(c);a.enter(c,e.parent(),e)})})})}}}],Bd=va({transclude:"element",priority:800,require:"^ngSwitch",
link:function(a,c,d,e,g){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:g,element:c})}}),Cd=va({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,g){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:g,element:c})}}),Ed=va({link:function(a,c,d,e,g){if(!g)throw t("ngTransclude")("orphan",ha(c));g(function(a){c.empty();c.append(a)})}}),ed=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,
d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Te=t("ngOptions"),Dd=aa({terminal:!0}),fd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:C};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var l=this,k={},m=e,n;l.databound=
d.ngModel;l.init=function(a,c,d){m=a;n=d};l.addOption=function(c){Aa(c,'"option value"');k[c]=!0;m.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};l.removeOption=function(a){this.hasOption(a)&&(delete k[a],m.$viewValue==a&&this.renderUnknownOption(a))};l.renderUnknownOption=function(c){c="? "+Ia(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};l.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){l.renderUnknownOption=C})}],link:function(e,f,h,l){function k(a,
c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(A.parent()&&A.remove(),c.val(a),""===a&&w.prop("selected",!0)):E(a)&&w?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){A.parent()&&A.remove();d.$setViewValue(c.val())})})}function m(a,c,d){var e;d.$render=function(){var a=new Va(d.$viewValue);q(c.find("option"),function(c){c.selected=B(a.get(c.value))})};a.$watch(function(){xa(e,d.$viewValue)||(e=ba(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=
[];q(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function h(){var a={"":[]},c=[""],d,k,s,t,z;t=g.$modelValue;z=y(e)||[];var E=n?Qb(z):z,F,I,A;I={};s=!1;var D,H;if(r)if(w&&M(t))for(s=new Va([]),A=0;A<t.length;A++)I[m]=t[A],s.put(w(e,I),t[A]);else s=new Va(t);for(A=0;F=E.length,A<F;A++){k=A;if(n){k=E[A];if("$"===k.charAt(0))continue;I[n]=k}I[m]=z[k];d=p(e,I)||"";(k=a[d])||(k=a[d]=[],c.push(d));r?d=B(s.remove(w?w(e,I):q(e,I))):(w?(d={},d[m]=t,d=
w(e,d)===w(e,I)):d=t===q(e,I),s=s||d);D=l(e,I);D=B(D)?D:"";k.push({id:w?w(e,I):n?E[A]:A,label:D,selected:d})}r||(u||null===t?a[""].unshift({id:"",label:"",selected:!s}):s||a[""].unshift({id:"?",label:"",selected:!0}));I=0;for(E=c.length;I<E;I++){d=c[I];k=a[d];x.length<=I?(t={element:C.clone().attr("label",d),label:k.label},z=[t],x.push(z),f.append(t.element)):(z=x[I],t=z[0],t.label!=d&&t.element.attr("label",t.label=d));D=null;A=0;for(F=k.length;A<F;A++)s=k[A],(d=z[A+1])?(D=d.element,d.label!==s.label&&
D.text(d.label=s.label),d.id!==s.id&&D.val(d.id=s.id),d.selected!==s.selected&&D.prop("selected",d.selected=s.selected)):(""===s.id&&u?H=u:(H=v.clone()).val(s.id).attr("selected",s.selected).text(s.label),z.push({element:H,label:s.label,id:s.id,selected:s.selected}),D?D.after(H):t.element.append(H),D=H);for(A++;z.length>A;)z.pop().element.remove()}for(;x.length>I;)x.pop()[0].element.remove()}var k;if(!(k=t.match(d)))throw Te("iexp",t,ha(f));var l=c(k[2]||k[1]),m=k[4]||k[6],n=k[5],p=c(k[3]||""),q=
c(k[2]?k[1]:m),y=c(k[7]),w=k[8]?c(k[8]):null,x=[[{element:f,label:""}]];u&&(a(u)(e),u.removeClass("ng-scope"),u.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=y(e)||[],d={},h,k,l,p,t,v,u;if(r)for(k=[],p=0,v=x.length;p<v;p++)for(a=x[p],l=1,t=a.length;l<t;l++){if((h=a[l].element)[0].selected){h=h.val();n&&(d[n]=h);if(w)for(u=0;u<c.length&&(d[m]=c[u],w(e,d)!=h);u++);else d[m]=c[h];k.push(q(e,d))}}else{h=f.val();if("?"==h)k=s;else if(""===h)k=null;else if(w)for(u=0;u<c.length;u++){if(d[m]=
c[u],w(e,d)==h){k=q(e,d);break}}else d[m]=c[h],n&&(d[n]=h),k=q(e,d);1<x[0].length&&x[0][1].id!==h&&(x[0][1].selected=!1)}g.$setViewValue(k)})});g.$render=h;e.$watch(h)}if(l[1]){var p=l[0];l=l[1];var r=h.multiple,t=h.ngOptions,u=!1,w,v=y(U.createElement("option")),C=y(U.createElement("optgroup")),A=v.clone();h=0;for(var x=f.children(),D=x.length;h<D;h++)if(""===x[h].value){w=u=x.eq(h);break}p.init(l,u,A);r&&(l.$isEmpty=function(a){return!a||0===a.length});t?n(e,f,l):r?m(e,f,l):k(e,f,l,p)}}}}],hd=["$interpolate",
function(a){var c={addOption:C,removeOption:C};return{restrict:"E",priority:100,compile:function(d,e){if(E(e.value)){var g=a(d.text(),!0);g||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),m=k.data("$selectController")||k.parent().data("$selectController");m&&m.databound?d.prop("selected",!1):m=c;g?a.$watch(g,function(a,c){e.$set("value",a);a!==c&&m.removeOption(c);m.addOption(a)}):m.addOption(e.value);d.on("$destroy",function(){m.removeOption(e.value)})}}}}],gd=aa({restrict:"E",
terminal:!0});O.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):((Ga=O.jQuery)?(y=Ga,D(Ga.fn,{scope:Ja.scope,isolateScope:Ja.isolateScope,controller:Ja.controller,injector:Ja.injector,inheritedData:Ja.inheritedData}),Ab("remove",!0,!0,!1),Ab("empty",!1,!1,!1),Ab("html",!1,!1,!0)):y=N,Ea.element=y,Zc(Ea),y(U).ready(function(){Wc(U,$b)}))})(window,document);!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}</style>');
//# sourceMappingURL=angular.min.js.map

},{}],4:[function(require,module,exports){
(function (global){
//! moment.js
//! version : 2.7.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

(function (undefined) {

    /************************************
        Constants
    ************************************/

    var moment,
        VERSION = "2.7.0",
        // the global-scope this is NOT the global object in Node.js
        globalScope = typeof global !== 'undefined' ? global : this,
        oldGlobalMoment,
        round = Math.round,
        i,

        YEAR = 0,
        MONTH = 1,
        DATE = 2,
        HOUR = 3,
        MINUTE = 4,
        SECOND = 5,
        MILLISECOND = 6,

        // internal storage for language config files
        languages = {},

        // moment internal properties
        momentProperties = {
            _isAMomentObject: null,
            _i : null,
            _f : null,
            _l : null,
            _strict : null,
            _tzm : null,
            _isUTC : null,
            _offset : null,  // optional. Combine with _isUTC
            _pf : null,
            _lang : null  // optional
        },

        // check for nodeJS
        hasModule = (typeof module !== 'undefined' && module.exports),

        // ASP.NET json date format regex
        aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,
        aspNetTimeSpanJsonRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,

        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
        isoDurationRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,

        // format tokens
        formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,

        // parsing token regexes
        parseTokenOneOrTwoDigits = /\d\d?/, // 0 - 99
        parseTokenOneToThreeDigits = /\d{1,3}/, // 0 - 999
        parseTokenOneToFourDigits = /\d{1,4}/, // 0 - 9999
        parseTokenOneToSixDigits = /[+\-]?\d{1,6}/, // -999,999 - 999,999
        parseTokenDigits = /\d+/, // nonzero number of digits
        parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, // any word (or two) characters or numbers including two/three word month in arabic.
        parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
        parseTokenT = /T/i, // T (ISO separator)
        parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
        parseTokenOrdinal = /\d{1,2}/,

        //strict parsing regexes
        parseTokenOneDigit = /\d/, // 0 - 9
        parseTokenTwoDigits = /\d\d/, // 00 - 99
        parseTokenThreeDigits = /\d{3}/, // 000 - 999
        parseTokenFourDigits = /\d{4}/, // 0000 - 9999
        parseTokenSixDigits = /[+-]?\d{6}/, // -999,999 - 999,999
        parseTokenSignedNumber = /[+-]?\d+/, // -inf - inf

        // iso 8601 regex
        // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
        isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,

        isoFormat = 'YYYY-MM-DDTHH:mm:ssZ',

        isoDates = [
            ['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/],
            ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/],
            ['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/],
            ['GGGG-[W]WW', /\d{4}-W\d{2}/],
            ['YYYY-DDD', /\d{4}-\d{3}/]
        ],

        // iso time formats and regexes
        isoTimes = [
            ['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/],
            ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
            ['HH:mm', /(T| )\d\d:\d\d/],
            ['HH', /(T| )\d\d/]
        ],

        // timezone chunker "+10:00" > ["10", "00"] or "-1530" > ["-15", "30"]
        parseTimezoneChunker = /([\+\-]|\d\d)/gi,

        // getter and setter names
        proxyGettersAndSetters = 'Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),
        unitMillisecondFactors = {
            'Milliseconds' : 1,
            'Seconds' : 1e3,
            'Minutes' : 6e4,
            'Hours' : 36e5,
            'Days' : 864e5,
            'Months' : 2592e6,
            'Years' : 31536e6
        },

        unitAliases = {
            ms : 'millisecond',
            s : 'second',
            m : 'minute',
            h : 'hour',
            d : 'day',
            D : 'date',
            w : 'week',
            W : 'isoWeek',
            M : 'month',
            Q : 'quarter',
            y : 'year',
            DDD : 'dayOfYear',
            e : 'weekday',
            E : 'isoWeekday',
            gg: 'weekYear',
            GG: 'isoWeekYear'
        },

        camelFunctions = {
            dayofyear : 'dayOfYear',
            isoweekday : 'isoWeekday',
            isoweek : 'isoWeek',
            weekyear : 'weekYear',
            isoweekyear : 'isoWeekYear'
        },

        // format function strings
        formatFunctions = {},

        // default relative time thresholds
        relativeTimeThresholds = {
          s: 45,   //seconds to minutes
          m: 45,   //minutes to hours
          h: 22,   //hours to days
          dd: 25,  //days to month (month == 1)
          dm: 45,  //days to months (months > 1)
          dy: 345  //days to year
        },

        // tokens to ordinalize and pad
        ordinalizeTokens = 'DDD w W M D d'.split(' '),
        paddedTokens = 'M D H h m s w W'.split(' '),

        formatTokenFunctions = {
            M    : function () {
                return this.month() + 1;
            },
            MMM  : function (format) {
                return this.lang().monthsShort(this, format);
            },
            MMMM : function (format) {
                return this.lang().months(this, format);
            },
            D    : function () {
                return this.date();
            },
            DDD  : function () {
                return this.dayOfYear();
            },
            d    : function () {
                return this.day();
            },
            dd   : function (format) {
                return this.lang().weekdaysMin(this, format);
            },
            ddd  : function (format) {
                return this.lang().weekdaysShort(this, format);
            },
            dddd : function (format) {
                return this.lang().weekdays(this, format);
            },
            w    : function () {
                return this.week();
            },
            W    : function () {
                return this.isoWeek();
            },
            YY   : function () {
                return leftZeroFill(this.year() % 100, 2);
            },
            YYYY : function () {
                return leftZeroFill(this.year(), 4);
            },
            YYYYY : function () {
                return leftZeroFill(this.year(), 5);
            },
            YYYYYY : function () {
                var y = this.year(), sign = y >= 0 ? '+' : '-';
                return sign + leftZeroFill(Math.abs(y), 6);
            },
            gg   : function () {
                return leftZeroFill(this.weekYear() % 100, 2);
            },
            gggg : function () {
                return leftZeroFill(this.weekYear(), 4);
            },
            ggggg : function () {
                return leftZeroFill(this.weekYear(), 5);
            },
            GG   : function () {
                return leftZeroFill(this.isoWeekYear() % 100, 2);
            },
            GGGG : function () {
                return leftZeroFill(this.isoWeekYear(), 4);
            },
            GGGGG : function () {
                return leftZeroFill(this.isoWeekYear(), 5);
            },
            e : function () {
                return this.weekday();
            },
            E : function () {
                return this.isoWeekday();
            },
            a    : function () {
                return this.lang().meridiem(this.hours(), this.minutes(), true);
            },
            A    : function () {
                return this.lang().meridiem(this.hours(), this.minutes(), false);
            },
            H    : function () {
                return this.hours();
            },
            h    : function () {
                return this.hours() % 12 || 12;
            },
            m    : function () {
                return this.minutes();
            },
            s    : function () {
                return this.seconds();
            },
            S    : function () {
                return toInt(this.milliseconds() / 100);
            },
            SS   : function () {
                return leftZeroFill(toInt(this.milliseconds() / 10), 2);
            },
            SSS  : function () {
                return leftZeroFill(this.milliseconds(), 3);
            },
            SSSS : function () {
                return leftZeroFill(this.milliseconds(), 3);
            },
            Z    : function () {
                var a = -this.zone(),
                    b = "+";
                if (a < 0) {
                    a = -a;
                    b = "-";
                }
                return b + leftZeroFill(toInt(a / 60), 2) + ":" + leftZeroFill(toInt(a) % 60, 2);
            },
            ZZ   : function () {
                var a = -this.zone(),
                    b = "+";
                if (a < 0) {
                    a = -a;
                    b = "-";
                }
                return b + leftZeroFill(toInt(a / 60), 2) + leftZeroFill(toInt(a) % 60, 2);
            },
            z : function () {
                return this.zoneAbbr();
            },
            zz : function () {
                return this.zoneName();
            },
            X    : function () {
                return this.unix();
            },
            Q : function () {
                return this.quarter();
            }
        },

        lists = ['months', 'monthsShort', 'weekdays', 'weekdaysShort', 'weekdaysMin'];

    // Pick the first defined of two or three arguments. dfl comes from
    // default.
    function dfl(a, b, c) {
        switch (arguments.length) {
            case 2: return a != null ? a : b;
            case 3: return a != null ? a : b != null ? b : c;
            default: throw new Error("Implement me");
        }
    }

    function defaultParsingFlags() {
        // We need to deep clone this object, and es5 standard is not very
        // helpful.
        return {
            empty : false,
            unusedTokens : [],
            unusedInput : [],
            overflow : -2,
            charsLeftOver : 0,
            nullInput : false,
            invalidMonth : null,
            invalidFormat : false,
            userInvalidated : false,
            iso: false
        };
    }

    function deprecate(msg, fn) {
        var firstTime = true;
        function printMsg() {
            if (moment.suppressDeprecationWarnings === false &&
                    typeof console !== 'undefined' && console.warn) {
                console.warn("Deprecation warning: " + msg);
            }
        }
        return extend(function () {
            if (firstTime) {
                printMsg();
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    function padToken(func, count) {
        return function (a) {
            return leftZeroFill(func.call(this, a), count);
        };
    }
    function ordinalizeToken(func, period) {
        return function (a) {
            return this.lang().ordinal(func.call(this, a), period);
        };
    }

    while (ordinalizeTokens.length) {
        i = ordinalizeTokens.pop();
        formatTokenFunctions[i + 'o'] = ordinalizeToken(formatTokenFunctions[i], i);
    }
    while (paddedTokens.length) {
        i = paddedTokens.pop();
        formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2);
    }
    formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);


    /************************************
        Constructors
    ************************************/

    function Language() {

    }

    // Moment prototype object
    function Moment(config) {
        checkOverflow(config);
        extend(this, config);
    }

    // Duration Constructor
    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 36e5; // 1000 * 60 * 60
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._bubble();
    }

    /************************************
        Helpers
    ************************************/


    function extend(a, b) {
        for (var i in b) {
            if (b.hasOwnProperty(i)) {
                a[i] = b[i];
            }
        }

        if (b.hasOwnProperty("toString")) {
            a.toString = b.toString;
        }

        if (b.hasOwnProperty("valueOf")) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function cloneMoment(m) {
        var result = {}, i;
        for (i in m) {
            if (m.hasOwnProperty(i) && momentProperties.hasOwnProperty(i)) {
                result[i] = m[i];
            }
        }

        return result;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    }

    // left zero fill a number
    // see http://jsperf.com/left-zero-filling for performance comparison
    function leftZeroFill(number, targetLength, forceSign) {
        var output = '' + Math.abs(number),
            sign = number >= 0;

        while (output.length < targetLength) {
            output = '0' + output;
        }
        return (sign ? (forceSign ? '+' : '') : '-') + output;
    }

    // helper function for _.addTime and _.subtractTime
    function addOrSubtractDurationFromMoment(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = duration._days,
            months = duration._months;
        updateOffset = updateOffset == null ? true : updateOffset;

        if (milliseconds) {
            mom._d.setTime(+mom._d + milliseconds * isAdding);
        }
        if (days) {
            rawSetter(mom, 'Date', rawGetter(mom, 'Date') + days * isAdding);
        }
        if (months) {
            rawMonthSetter(mom, rawGetter(mom, 'Month') + months * isAdding);
        }
        if (updateOffset) {
            moment.updateOffset(mom, days || months);
        }
    }

    // check if is an array
    function isArray(input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    }

    function isDate(input) {
        return  Object.prototype.toString.call(input) === '[object Date]' ||
                input instanceof Date;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function normalizeUnits(units) {
        if (units) {
            var lowered = units.toLowerCase().replace(/(.)s$/, '$1');
            units = unitAliases[units] || camelFunctions[lowered] || lowered;
        }
        return units;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (inputObject.hasOwnProperty(prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    function makeList(field) {
        var count, setter;

        if (field.indexOf('week') === 0) {
            count = 7;
            setter = 'day';
        }
        else if (field.indexOf('month') === 0) {
            count = 12;
            setter = 'month';
        }
        else {
            return;
        }

        moment[field] = function (format, index) {
            var i, getter,
                method = moment.fn._lang[field],
                results = [];

            if (typeof format === 'number') {
                index = format;
                format = undefined;
            }

            getter = function (i) {
                var m = moment().utc().set(setter, i);
                return method.call(moment.fn._lang, m, format || '');
            };

            if (index != null) {
                return getter(index);
            }
            else {
                for (i = 0; i < count; i++) {
                    results.push(getter(i));
                }
                return results;
            }
        };
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            if (coercedNumber >= 0) {
                value = Math.floor(coercedNumber);
            } else {
                value = Math.ceil(coercedNumber);
            }
        }

        return value;
    }

    function daysInMonth(year, month) {
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }

    function weeksInYear(year, dow, doy) {
        return weekOfYear(moment([year, 11, 31 + dow - doy]), dow, doy).week;
    }

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    function checkOverflow(m) {
        var overflow;
        if (m._a && m._pf.overflow === -2) {
            overflow =
                m._a[MONTH] < 0 || m._a[MONTH] > 11 ? MONTH :
                m._a[DATE] < 1 || m._a[DATE] > daysInMonth(m._a[YEAR], m._a[MONTH]) ? DATE :
                m._a[HOUR] < 0 || m._a[HOUR] > 23 ? HOUR :
                m._a[MINUTE] < 0 || m._a[MINUTE] > 59 ? MINUTE :
                m._a[SECOND] < 0 || m._a[SECOND] > 59 ? SECOND :
                m._a[MILLISECOND] < 0 || m._a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (m._pf._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }

            m._pf.overflow = overflow;
        }
    }

    function isValid(m) {
        if (m._isValid == null) {
            m._isValid = !isNaN(m._d.getTime()) &&
                m._pf.overflow < 0 &&
                !m._pf.empty &&
                !m._pf.invalidMonth &&
                !m._pf.nullInput &&
                !m._pf.invalidFormat &&
                !m._pf.userInvalidated;

            if (m._strict) {
                m._isValid = m._isValid &&
                    m._pf.charsLeftOver === 0 &&
                    m._pf.unusedTokens.length === 0;
            }
        }
        return m._isValid;
    }

    function normalizeLanguage(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function makeAs(input, model) {
        return model._isUTC ? moment(input).zone(model._offset || 0) :
            moment(input).local();
    }

    /************************************
        Languages
    ************************************/


    extend(Language.prototype, {

        set : function (config) {
            var prop, i;
            for (i in config) {
                prop = config[i];
                if (typeof prop === 'function') {
                    this[i] = prop;
                } else {
                    this['_' + i] = prop;
                }
            }
        },

        _months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months : function (m) {
            return this._months[m.month()];
        },

        _monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort : function (m) {
            return this._monthsShort[m.month()];
        },

        monthsParse : function (monthName) {
            var i, mom, regex;

            if (!this._monthsParse) {
                this._monthsParse = [];
            }

            for (i = 0; i < 12; i++) {
                // make the regex if we don't have it already
                if (!this._monthsParse[i]) {
                    mom = moment.utc([2000, i]);
                    regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                    this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (this._monthsParse[i].test(monthName)) {
                    return i;
                }
            }
        },

        _weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays : function (m) {
            return this._weekdays[m.day()];
        },

        _weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort : function (m) {
            return this._weekdaysShort[m.day()];
        },

        _weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin : function (m) {
            return this._weekdaysMin[m.day()];
        },

        weekdaysParse : function (weekdayName) {
            var i, mom, regex;

            if (!this._weekdaysParse) {
                this._weekdaysParse = [];
            }

            for (i = 0; i < 7; i++) {
                // make the regex if we don't have it already
                if (!this._weekdaysParse[i]) {
                    mom = moment([2000, 1]).day(i);
                    regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                    this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (this._weekdaysParse[i].test(weekdayName)) {
                    return i;
                }
            }
        },

        _longDateFormat : {
            LT : "h:mm A",
            L : "MM/DD/YYYY",
            LL : "MMMM D YYYY",
            LLL : "MMMM D YYYY LT",
            LLLL : "dddd, MMMM D YYYY LT"
        },
        longDateFormat : function (key) {
            var output = this._longDateFormat[key];
            if (!output && this._longDateFormat[key.toUpperCase()]) {
                output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (val) {
                    return val.slice(1);
                });
                this._longDateFormat[key] = output;
            }
            return output;
        },

        isPM : function (input) {
            // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
            // Using charAt should be more compatible.
            return ((input + '').toLowerCase().charAt(0) === 'p');
        },

        _meridiemParse : /[ap]\.?m?\.?/i,
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'pm' : 'PM';
            } else {
                return isLower ? 'am' : 'AM';
            }
        },

        _calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        calendar : function (key, mom) {
            var output = this._calendar[key];
            return typeof output === 'function' ? output.apply(mom) : output;
        },

        _relativeTime : {
            future : "in %s",
            past : "%s ago",
            s : "a few seconds",
            m : "a minute",
            mm : "%d minutes",
            h : "an hour",
            hh : "%d hours",
            d : "a day",
            dd : "%d days",
            M : "a month",
            MM : "%d months",
            y : "a year",
            yy : "%d years"
        },
        relativeTime : function (number, withoutSuffix, string, isFuture) {
            var output = this._relativeTime[string];
            return (typeof output === 'function') ?
                output(number, withoutSuffix, string, isFuture) :
                output.replace(/%d/i, number);
        },
        pastFuture : function (diff, output) {
            var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
            return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
        },

        ordinal : function (number) {
            return this._ordinal.replace("%d", number);
        },
        _ordinal : "%d",

        preparse : function (string) {
            return string;
        },

        postformat : function (string) {
            return string;
        },

        week : function (mom) {
            return weekOfYear(mom, this._week.dow, this._week.doy).week;
        },

        _week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        },

        _invalidDate: 'Invalid date',
        invalidDate: function () {
            return this._invalidDate;
        }
    });

    // Loads a language definition into the `languages` cache.  The function
    // takes a key and optionally values.  If not in the browser and no values
    // are provided, it will load the language file module.  As a convenience,
    // this function also returns the language values.
    function loadLang(key, values) {
        values.abbr = key;
        if (!languages[key]) {
            languages[key] = new Language();
        }
        languages[key].set(values);
        return languages[key];
    }

    // Remove a language from the `languages` cache. Mostly useful in tests.
    function unloadLang(key) {
        delete languages[key];
    }

    // Determines which language definition to use and returns it.
    //
    // With no parameters, it will return the global language.  If you
    // pass in a language key, such as 'en', it will return the
    // definition for 'en', so long as 'en' has already been loaded using
    // moment.lang.
    function getLangDefinition(key) {
        var i = 0, j, lang, next, split,
            get = function (k) {
                if (!languages[k] && hasModule) {
                    try {
                        require('./lang/' + k);
                    } catch (e) { }
                }
                return languages[k];
            };

        if (!key) {
            return moment.fn._lang;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            lang = get(key);
            if (lang) {
                return lang;
            }
            key = [key];
        }

        //pick the language from the array
        //try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
        //substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
        while (i < key.length) {
            split = normalizeLanguage(key[i]).split('-');
            j = split.length;
            next = normalizeLanguage(key[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                lang = get(split.slice(0, j).join('-'));
                if (lang) {
                    return lang;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return moment.fn._lang;
    }

    /************************************
        Formatting
    ************************************/


    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, "");
        }
        return input.replace(/\\/g, "");
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = "";
            for (i = 0; i < length; i++) {
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {

        if (!m.isValid()) {
            return m.lang().invalidDate();
        }

        format = expandFormat(format, m.lang());

        if (!formatFunctions[format]) {
            formatFunctions[format] = makeFormatFunction(format);
        }

        return formatFunctions[format](m);
    }

    function expandFormat(format, lang) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return lang.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }


    /************************************
        Parsing
    ************************************/


    // get the regex to find the next token
    function getParseRegexForToken(token, config) {
        var a, strict = config._strict;
        switch (token) {
        case 'Q':
            return parseTokenOneDigit;
        case 'DDDD':
            return parseTokenThreeDigits;
        case 'YYYY':
        case 'GGGG':
        case 'gggg':
            return strict ? parseTokenFourDigits : parseTokenOneToFourDigits;
        case 'Y':
        case 'G':
        case 'g':
            return parseTokenSignedNumber;
        case 'YYYYYY':
        case 'YYYYY':
        case 'GGGGG':
        case 'ggggg':
            return strict ? parseTokenSixDigits : parseTokenOneToSixDigits;
        case 'S':
            if (strict) { return parseTokenOneDigit; }
            /* falls through */
        case 'SS':
            if (strict) { return parseTokenTwoDigits; }
            /* falls through */
        case 'SSS':
            if (strict) { return parseTokenThreeDigits; }
            /* falls through */
        case 'DDD':
            return parseTokenOneToThreeDigits;
        case 'MMM':
        case 'MMMM':
        case 'dd':
        case 'ddd':
        case 'dddd':
            return parseTokenWord;
        case 'a':
        case 'A':
            return getLangDefinition(config._l)._meridiemParse;
        case 'X':
            return parseTokenTimestampMs;
        case 'Z':
        case 'ZZ':
            return parseTokenTimezone;
        case 'T':
            return parseTokenT;
        case 'SSSS':
            return parseTokenDigits;
        case 'MM':
        case 'DD':
        case 'YY':
        case 'GG':
        case 'gg':
        case 'HH':
        case 'hh':
        case 'mm':
        case 'ss':
        case 'ww':
        case 'WW':
            return strict ? parseTokenTwoDigits : parseTokenOneOrTwoDigits;
        case 'M':
        case 'D':
        case 'd':
        case 'H':
        case 'h':
        case 'm':
        case 's':
        case 'w':
        case 'W':
        case 'e':
        case 'E':
            return parseTokenOneOrTwoDigits;
        case 'Do':
            return parseTokenOrdinal;
        default :
            a = new RegExp(regexpEscape(unescapeFormat(token.replace('\\', '')), "i"));
            return a;
        }
    }

    function timezoneMinutesFromString(string) {
        string = string || "";
        var possibleTzMatches = (string.match(parseTokenTimezone) || []),
            tzChunk = possibleTzMatches[possibleTzMatches.length - 1] || [],
            parts = (tzChunk + '').match(parseTimezoneChunker) || ['-', 0, 0],
            minutes = +(parts[1] * 60) + toInt(parts[2]);

        return parts[0] === '+' ? -minutes : minutes;
    }

    // function to convert string input to date
    function addTimeToArrayFromToken(token, input, config) {
        var a, datePartArray = config._a;

        switch (token) {
        // QUARTER
        case 'Q':
            if (input != null) {
                datePartArray[MONTH] = (toInt(input) - 1) * 3;
            }
            break;
        // MONTH
        case 'M' : // fall through to MM
        case 'MM' :
            if (input != null) {
                datePartArray[MONTH] = toInt(input) - 1;
            }
            break;
        case 'MMM' : // fall through to MMMM
        case 'MMMM' :
            a = getLangDefinition(config._l).monthsParse(input);
            // if we didn't find a month name, mark the date as invalid.
            if (a != null) {
                datePartArray[MONTH] = a;
            } else {
                config._pf.invalidMonth = input;
            }
            break;
        // DAY OF MONTH
        case 'D' : // fall through to DD
        case 'DD' :
            if (input != null) {
                datePartArray[DATE] = toInt(input);
            }
            break;
        case 'Do' :
            if (input != null) {
                datePartArray[DATE] = toInt(parseInt(input, 10));
            }
            break;
        // DAY OF YEAR
        case 'DDD' : // fall through to DDDD
        case 'DDDD' :
            if (input != null) {
                config._dayOfYear = toInt(input);
            }

            break;
        // YEAR
        case 'YY' :
            datePartArray[YEAR] = moment.parseTwoDigitYear(input);
            break;
        case 'YYYY' :
        case 'YYYYY' :
        case 'YYYYYY' :
            datePartArray[YEAR] = toInt(input);
            break;
        // AM / PM
        case 'a' : // fall through to A
        case 'A' :
            config._isPm = getLangDefinition(config._l).isPM(input);
            break;
        // 24 HOUR
        case 'H' : // fall through to hh
        case 'HH' : // fall through to hh
        case 'h' : // fall through to hh
        case 'hh' :
            datePartArray[HOUR] = toInt(input);
            break;
        // MINUTE
        case 'm' : // fall through to mm
        case 'mm' :
            datePartArray[MINUTE] = toInt(input);
            break;
        // SECOND
        case 's' : // fall through to ss
        case 'ss' :
            datePartArray[SECOND] = toInt(input);
            break;
        // MILLISECOND
        case 'S' :
        case 'SS' :
        case 'SSS' :
        case 'SSSS' :
            datePartArray[MILLISECOND] = toInt(('0.' + input) * 1000);
            break;
        // UNIX TIMESTAMP WITH MS
        case 'X':
            config._d = new Date(parseFloat(input) * 1000);
            break;
        // TIMEZONE
        case 'Z' : // fall through to ZZ
        case 'ZZ' :
            config._useUTC = true;
            config._tzm = timezoneMinutesFromString(input);
            break;
        // WEEKDAY - human
        case 'dd':
        case 'ddd':
        case 'dddd':
            a = getLangDefinition(config._l).weekdaysParse(input);
            // if we didn't get a weekday name, mark the date as invalid
            if (a != null) {
                config._w = config._w || {};
                config._w['d'] = a;
            } else {
                config._pf.invalidWeekday = input;
            }
            break;
        // WEEK, WEEK DAY - numeric
        case 'w':
        case 'ww':
        case 'W':
        case 'WW':
        case 'd':
        case 'e':
        case 'E':
            token = token.substr(0, 1);
            /* falls through */
        case 'gggg':
        case 'GGGG':
        case 'GGGGG':
            token = token.substr(0, 2);
            if (input) {
                config._w = config._w || {};
                config._w[token] = toInt(input);
            }
            break;
        case 'gg':
        case 'GG':
            config._w = config._w || {};
            config._w[token] = moment.parseTwoDigitYear(input);
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, lang;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = dfl(w.GG, config._a[YEAR], weekOfYear(moment(), 1, 4).year);
            week = dfl(w.W, 1);
            weekday = dfl(w.E, 1);
        } else {
            lang = getLangDefinition(config._l);
            dow = lang._week.dow;
            doy = lang._week.doy;

            weekYear = dfl(w.gg, config._a[YEAR], weekOfYear(moment(), dow, doy).year);
            week = dfl(w.w, 1);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < dow) {
                    ++week;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
            } else {
                // default to begining of week
                weekday = dow;
            }
        }
        temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);

        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function dateFromConfig(config) {
        var i, date, input = [], currentDate, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear) {
            yearToUse = dfl(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse)) {
                config._pf._overflowDayOfYear = true;
            }

            date = makeUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        config._d = (config._useUTC ? makeUTCDate : makeDate).apply(null, input);
        // Apply timezone offset from input. The actual zone can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() + config._tzm);
        }
    }

    function dateFromObject(config) {
        var normalizedInput;

        if (config._d) {
            return;
        }

        normalizedInput = normalizeObjectUnits(config._i);
        config._a = [
            normalizedInput.year,
            normalizedInput.month,
            normalizedInput.day,
            normalizedInput.hour,
            normalizedInput.minute,
            normalizedInput.second,
            normalizedInput.millisecond
        ];

        dateFromConfig(config);
    }

    function currentDateArray(config) {
        var now = new Date();
        if (config._useUTC) {
            return [
                now.getUTCFullYear(),
                now.getUTCMonth(),
                now.getUTCDate()
            ];
        } else {
            return [now.getFullYear(), now.getMonth(), now.getDate()];
        }
    }

    // date from string and format string
    function makeDateFromStringAndFormat(config) {

        if (config._f === moment.ISO_8601) {
            parseISO(config);
            return;
        }

        config._a = [];
        config._pf.empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var lang = getLangDefinition(config._l),
            string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, lang).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    config._pf.unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    config._pf.empty = false;
                }
                else {
                    config._pf.unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                config._pf.unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        config._pf.charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            config._pf.unusedInput.push(string);
        }

        // handle am pm
        if (config._isPm && config._a[HOUR] < 12) {
            config._a[HOUR] += 12;
        }
        // if is 12 am, change hours to 0
        if (config._isPm === false && config._a[HOUR] === 12) {
            config._a[HOUR] = 0;
        }

        dateFromConfig(config);
        checkOverflow(config);
    }

    function unescapeFormat(s) {
        return s.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        });
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function regexpEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    // date from string and array of format strings
    function makeDateFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            config._pf.invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = extend({}, config);
            tempConfig._pf = defaultParsingFlags();
            tempConfig._f = config._f[i];
            makeDateFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += tempConfig._pf.charsLeftOver;

            //or tokens
            currentScore += tempConfig._pf.unusedTokens.length * 10;

            tempConfig._pf.score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    // date from iso format
    function parseISO(config) {
        var i, l,
            string = config._i,
            match = isoRegex.exec(string);

        if (match) {
            config._pf.iso = true;
            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(string)) {
                    // match[5] should be "T" or undefined
                    config._f = isoDates[i][0] + (match[6] || " ");
                    break;
                }
            }
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(string)) {
                    config._f += isoTimes[i][0];
                    break;
                }
            }
            if (string.match(parseTokenTimezone)) {
                config._f += "Z";
            }
            makeDateFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function makeDateFromString(config) {
        parseISO(config);
        if (config._isValid === false) {
            delete config._isValid;
            moment.createFromInputFallback(config);
        }
    }

    function makeDateFromInput(config) {
        var input = config._i,
            matched = aspNetJsonRegex.exec(input);

        if (input === undefined) {
            config._d = new Date();
        } else if (matched) {
            config._d = new Date(+matched[1]);
        } else if (typeof input === 'string') {
            makeDateFromString(config);
        } else if (isArray(input)) {
            config._a = input.slice(0);
            dateFromConfig(config);
        } else if (isDate(input)) {
            config._d = new Date(+input);
        } else if (typeof(input) === 'object') {
            dateFromObject(config);
        } else if (typeof(input) === 'number') {
            // from milliseconds
            config._d = new Date(input);
        } else {
            moment.createFromInputFallback(config);
        }
    }

    function makeDate(y, m, d, h, M, s, ms) {
        //can't just apply() to create a date:
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y, m, d, h, M, s, ms);

        //the date constructor doesn't accept years < 1970
        if (y < 1970) {
            date.setFullYear(y);
        }
        return date;
    }

    function makeUTCDate(y) {
        var date = new Date(Date.UTC.apply(null, arguments));
        if (y < 1970) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    function parseWeekday(input, language) {
        if (typeof input === 'string') {
            if (!isNaN(input)) {
                input = parseInt(input, 10);
            }
            else {
                input = language.weekdaysParse(input);
                if (typeof input !== 'number') {
                    return null;
                }
            }
        }
        return input;
    }

    /************************************
        Relative Time
    ************************************/


    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, lang) {
        return lang.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime(milliseconds, withoutSuffix, lang) {
        var seconds = round(Math.abs(milliseconds) / 1000),
            minutes = round(seconds / 60),
            hours = round(minutes / 60),
            days = round(hours / 24),
            years = round(days / 365),
            args = seconds < relativeTimeThresholds.s  && ['s', seconds] ||
                minutes === 1 && ['m'] ||
                minutes < relativeTimeThresholds.m && ['mm', minutes] ||
                hours === 1 && ['h'] ||
                hours < relativeTimeThresholds.h && ['hh', hours] ||
                days === 1 && ['d'] ||
                days <= relativeTimeThresholds.dd && ['dd', days] ||
                days <= relativeTimeThresholds.dm && ['M'] ||
                days < relativeTimeThresholds.dy && ['MM', round(days / 30)] ||
                years === 1 && ['y'] || ['yy', years];
        args[2] = withoutSuffix;
        args[3] = milliseconds > 0;
        args[4] = lang;
        return substituteTimeAgo.apply({}, args);
    }


    /************************************
        Week of Year
    ************************************/


    // firstDayOfWeek       0 = sun, 6 = sat
    //                      the day of the week that starts the week
    //                      (usually sunday or monday)
    // firstDayOfWeekOfYear 0 = sun, 6 = sat
    //                      the first week is the week that contains the first
    //                      of this day of the week
    //                      (eg. ISO weeks use thursday (4))
    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
        var end = firstDayOfWeekOfYear - firstDayOfWeek,
            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
            adjustedMoment;


        if (daysToDayOfWeek > end) {
            daysToDayOfWeek -= 7;
        }

        if (daysToDayOfWeek < end - 7) {
            daysToDayOfWeek += 7;
        }

        adjustedMoment = moment(mom).add('d', daysToDayOfWeek);
        return {
            week: Math.ceil(adjustedMoment.dayOfYear() / 7),
            year: adjustedMoment.year()
        };
    }

    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
        var d = makeUTCDate(year, 0, 1).getUTCDay(), daysToAdd, dayOfYear;

        d = d === 0 ? 7 : d;
        weekday = weekday != null ? weekday : firstDayOfWeek;
        daysToAdd = firstDayOfWeek - d + (d > firstDayOfWeekOfYear ? 7 : 0) - (d < firstDayOfWeek ? 7 : 0);
        dayOfYear = 7 * (week - 1) + (weekday - firstDayOfWeek) + daysToAdd + 1;

        return {
            year: dayOfYear > 0 ? year : year - 1,
            dayOfYear: dayOfYear > 0 ?  dayOfYear : daysInYear(year - 1) + dayOfYear
        };
    }

    /************************************
        Top Level Functions
    ************************************/

    function makeMoment(config) {
        var input = config._i,
            format = config._f;

        if (input === null || (format === undefined && input === '')) {
            return moment.invalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = getLangDefinition().preparse(input);
        }

        if (moment.isMoment(input)) {
            config = cloneMoment(input);

            config._d = new Date(+input._d);
        } else if (format) {
            if (isArray(format)) {
                makeDateFromStringAndArray(config);
            } else {
                makeDateFromStringAndFormat(config);
            }
        } else {
            makeDateFromInput(config);
        }

        return new Moment(config);
    }

    moment = function (input, format, lang, strict) {
        var c;

        if (typeof(lang) === "boolean") {
            strict = lang;
            lang = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c = {};
        c._isAMomentObject = true;
        c._i = input;
        c._f = format;
        c._l = lang;
        c._strict = strict;
        c._isUTC = false;
        c._pf = defaultParsingFlags();

        return makeMoment(c);
    };

    moment.suppressDeprecationWarnings = false;

    moment.createFromInputFallback = deprecate(
            "moment construction falls back to js Date. This is " +
            "discouraged and will be removed in upcoming major " +
            "release. Please refer to " +
            "https://github.com/moment/moment/issues/1407 for more info.",
            function (config) {
        config._d = new Date(config._i);
    });

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return moment();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    moment.min = function () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    };

    moment.max = function () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    };

    // creating with utc
    moment.utc = function (input, format, lang, strict) {
        var c;

        if (typeof(lang) === "boolean") {
            strict = lang;
            lang = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c = {};
        c._isAMomentObject = true;
        c._useUTC = true;
        c._isUTC = true;
        c._l = lang;
        c._i = input;
        c._f = format;
        c._strict = strict;
        c._pf = defaultParsingFlags();

        return makeMoment(c).utc();
    };

    // creating with unix timestamp (in seconds)
    moment.unix = function (input) {
        return moment(input * 1000);
    };

    // duration
    moment.duration = function (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            parseIso;

        if (moment.isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months
            };
        } else if (typeof input === 'number') {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetTimeSpanJsonRegex.exec(input))) {
            sign = (match[1] === "-") ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(match[MILLISECOND]) * sign
            };
        } else if (!!(match = isoDurationRegex.exec(input))) {
            sign = (match[1] === "-") ? -1 : 1;
            parseIso = function (inp) {
                // We'd normally use ~~inp for this, but unfortunately it also
                // converts floats to ints.
                // inp may be undefined, so careful calling replace on it.
                var res = inp && parseFloat(inp.replace(',', '.'));
                // apply sign while we're at it
                return (isNaN(res) ? 0 : res) * sign;
            };
            duration = {
                y: parseIso(match[2]),
                M: parseIso(match[3]),
                d: parseIso(match[4]),
                h: parseIso(match[5]),
                m: parseIso(match[6]),
                s: parseIso(match[7]),
                w: parseIso(match[8])
            };
        }

        ret = new Duration(duration);

        if (moment.isDuration(input) && input.hasOwnProperty('_lang')) {
            ret._lang = input._lang;
        }

        return ret;
    };

    // version number
    moment.version = VERSION;

    // default format
    moment.defaultFormat = isoFormat;

    // constant that refers to the ISO standard
    moment.ISO_8601 = function () {};

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    moment.momentProperties = momentProperties;

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    moment.updateOffset = function () {};

    // This function allows you to set a threshold for relative time strings
    moment.relativeTimeThreshold = function(threshold, limit) {
      if (relativeTimeThresholds[threshold] === undefined) {
        return false;
      }
      relativeTimeThresholds[threshold] = limit;
      return true;
    };

    // This function will load languages and then set the global language.  If
    // no arguments are passed in, it will simply return the current global
    // language key.
    moment.lang = function (key, values) {
        var r;
        if (!key) {
            return moment.fn._lang._abbr;
        }
        if (values) {
            loadLang(normalizeLanguage(key), values);
        } else if (values === null) {
            unloadLang(key);
            key = 'en';
        } else if (!languages[key]) {
            getLangDefinition(key);
        }
        r = moment.duration.fn._lang = moment.fn._lang = getLangDefinition(key);
        return r._abbr;
    };

    // returns language data
    moment.langData = function (key) {
        if (key && key._lang && key._lang._abbr) {
            key = key._lang._abbr;
        }
        return getLangDefinition(key);
    };

    // compare moment object
    moment.isMoment = function (obj) {
        return obj instanceof Moment ||
            (obj != null &&  obj.hasOwnProperty('_isAMomentObject'));
    };

    // for typechecking Duration objects
    moment.isDuration = function (obj) {
        return obj instanceof Duration;
    };

    for (i = lists.length - 1; i >= 0; --i) {
        makeList(lists[i]);
    }

    moment.normalizeUnits = function (units) {
        return normalizeUnits(units);
    };

    moment.invalid = function (flags) {
        var m = moment.utc(NaN);
        if (flags != null) {
            extend(m._pf, flags);
        }
        else {
            m._pf.userInvalidated = true;
        }

        return m;
    };

    moment.parseZone = function () {
        return moment.apply(null, arguments).parseZone();
    };

    moment.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    /************************************
        Moment Prototype
    ************************************/


    extend(moment.fn = Moment.prototype, {

        clone : function () {
            return moment(this);
        },

        valueOf : function () {
            return +this._d + ((this._offset || 0) * 60000);
        },

        unix : function () {
            return Math.floor(+this / 1000);
        },

        toString : function () {
            return this.clone().lang('en').format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        },

        toDate : function () {
            return this._offset ? new Date(+this) : this._d;
        },

        toISOString : function () {
            var m = moment(this).utc();
            if (0 < m.year() && m.year() <= 9999) {
                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            } else {
                return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            }
        },

        toArray : function () {
            var m = this;
            return [
                m.year(),
                m.month(),
                m.date(),
                m.hours(),
                m.minutes(),
                m.seconds(),
                m.milliseconds()
            ];
        },

        isValid : function () {
            return isValid(this);
        },

        isDSTShifted : function () {

            if (this._a) {
                return this.isValid() && compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray()) > 0;
            }

            return false;
        },

        parsingFlags : function () {
            return extend({}, this._pf);
        },

        invalidAt: function () {
            return this._pf.overflow;
        },

        utc : function () {
            return this.zone(0);
        },

        local : function () {
            this.zone(0);
            this._isUTC = false;
            return this;
        },

        format : function (inputString) {
            var output = formatMoment(this, inputString || moment.defaultFormat);
            return this.lang().postformat(output);
        },

        add : function (input, val) {
            var dur;
            // switch args to support add('s', 1) and add(1, 's')
            if (typeof input === 'string' && typeof val === 'string') {
                dur = moment.duration(isNaN(+val) ? +input : +val, isNaN(+val) ? val : input);
            } else if (typeof input === 'string') {
                dur = moment.duration(+val, input);
            } else {
                dur = moment.duration(input, val);
            }
            addOrSubtractDurationFromMoment(this, dur, 1);
            return this;
        },

        subtract : function (input, val) {
            var dur;
            // switch args to support subtract('s', 1) and subtract(1, 's')
            if (typeof input === 'string' && typeof val === 'string') {
                dur = moment.duration(isNaN(+val) ? +input : +val, isNaN(+val) ? val : input);
            } else if (typeof input === 'string') {
                dur = moment.duration(+val, input);
            } else {
                dur = moment.duration(input, val);
            }
            addOrSubtractDurationFromMoment(this, dur, -1);
            return this;
        },

        diff : function (input, units, asFloat) {
            var that = makeAs(input, this),
                zoneDiff = (this.zone() - that.zone()) * 6e4,
                diff, output;

            units = normalizeUnits(units);

            if (units === 'year' || units === 'month') {
                // average number of days in the months in the given dates
                diff = (this.daysInMonth() + that.daysInMonth()) * 432e5; // 24 * 60 * 60 * 1000 / 2
                // difference in months
                output = ((this.year() - that.year()) * 12) + (this.month() - that.month());
                // adjust by taking difference in days, average number of days
                // and dst in the given months.
                output += ((this - moment(this).startOf('month')) -
                        (that - moment(that).startOf('month'))) / diff;
                // same as above but with zones, to negate all dst
                output -= ((this.zone() - moment(this).startOf('month').zone()) -
                        (that.zone() - moment(that).startOf('month').zone())) * 6e4 / diff;
                if (units === 'year') {
                    output = output / 12;
                }
            } else {
                diff = (this - that);
                output = units === 'second' ? diff / 1e3 : // 1000
                    units === 'minute' ? diff / 6e4 : // 1000 * 60
                    units === 'hour' ? diff / 36e5 : // 1000 * 60 * 60
                    units === 'day' ? (diff - zoneDiff) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
                    units === 'week' ? (diff - zoneDiff) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
                    diff;
            }
            return asFloat ? output : absRound(output);
        },

        from : function (time, withoutSuffix) {
            return moment.duration(this.diff(time)).lang(this.lang()._abbr).humanize(!withoutSuffix);
        },

        fromNow : function (withoutSuffix) {
            return this.from(moment(), withoutSuffix);
        },

        calendar : function (time) {
            // We want to compare the start of today, vs this.
            // Getting start-of-today depends on whether we're zone'd or not.
            var now = time || moment(),
                sod = makeAs(now, this).startOf('day'),
                diff = this.diff(sod, 'days', true),
                format = diff < -6 ? 'sameElse' :
                    diff < -1 ? 'lastWeek' :
                    diff < 0 ? 'lastDay' :
                    diff < 1 ? 'sameDay' :
                    diff < 2 ? 'nextDay' :
                    diff < 7 ? 'nextWeek' : 'sameElse';
            return this.format(this.lang().calendar(format, this));
        },

        isLeapYear : function () {
            return isLeapYear(this.year());
        },

        isDST : function () {
            return (this.zone() < this.clone().month(0).zone() ||
                this.zone() < this.clone().month(5).zone());
        },

        day : function (input) {
            var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            if (input != null) {
                input = parseWeekday(input, this.lang());
                return this.add({ d : input - day });
            } else {
                return day;
            }
        },

        month : makeAccessor('Month', true),

        startOf: function (units) {
            units = normalizeUnits(units);
            // the following switch intentionally omits break keywords
            // to utilize falling through the cases.
            switch (units) {
            case 'year':
                this.month(0);
                /* falls through */
            case 'quarter':
            case 'month':
                this.date(1);
                /* falls through */
            case 'week':
            case 'isoWeek':
            case 'day':
                this.hours(0);
                /* falls through */
            case 'hour':
                this.minutes(0);
                /* falls through */
            case 'minute':
                this.seconds(0);
                /* falls through */
            case 'second':
                this.milliseconds(0);
                /* falls through */
            }

            // weeks are a special case
            if (units === 'week') {
                this.weekday(0);
            } else if (units === 'isoWeek') {
                this.isoWeekday(1);
            }

            // quarters are also special
            if (units === 'quarter') {
                this.month(Math.floor(this.month() / 3) * 3);
            }

            return this;
        },

        endOf: function (units) {
            units = normalizeUnits(units);
            return this.startOf(units).add((units === 'isoWeek' ? 'week' : units), 1).subtract('ms', 1);
        },

        isAfter: function (input, units) {
            units = typeof units !== 'undefined' ? units : 'millisecond';
            return +this.clone().startOf(units) > +moment(input).startOf(units);
        },

        isBefore: function (input, units) {
            units = typeof units !== 'undefined' ? units : 'millisecond';
            return +this.clone().startOf(units) < +moment(input).startOf(units);
        },

        isSame: function (input, units) {
            units = units || 'ms';
            return +this.clone().startOf(units) === +makeAs(input, this).startOf(units);
        },

        min: deprecate(
                 "moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",
                 function (other) {
                     other = moment.apply(null, arguments);
                     return other < this ? this : other;
                 }
         ),

        max: deprecate(
                "moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",
                function (other) {
                    other = moment.apply(null, arguments);
                    return other > this ? this : other;
                }
        ),

        // keepTime = true means only change the timezone, without affecting
        // the local hour. So 5:31:26 +0300 --[zone(2, true)]--> 5:31:26 +0200
        // It is possible that 5:31:26 doesn't exist int zone +0200, so we
        // adjust the time as needed, to be valid.
        //
        // Keeping the time actually adds/subtracts (one hour)
        // from the actual represented time. That is why we call updateOffset
        // a second time. In case it wants us to change the offset again
        // _changeInProgress == true case, then we have to adjust, because
        // there is no such time in the given timezone.
        zone : function (input, keepTime) {
            var offset = this._offset || 0;
            if (input != null) {
                if (typeof input === "string") {
                    input = timezoneMinutesFromString(input);
                }
                if (Math.abs(input) < 16) {
                    input = input * 60;
                }
                this._offset = input;
                this._isUTC = true;
                if (offset !== input) {
                    if (!keepTime || this._changeInProgress) {
                        addOrSubtractDurationFromMoment(this,
                                moment.duration(offset - input, 'm'), 1, false);
                    } else if (!this._changeInProgress) {
                        this._changeInProgress = true;
                        moment.updateOffset(this, true);
                        this._changeInProgress = null;
                    }
                }
            } else {
                return this._isUTC ? offset : this._d.getTimezoneOffset();
            }
            return this;
        },

        zoneAbbr : function () {
            return this._isUTC ? "UTC" : "";
        },

        zoneName : function () {
            return this._isUTC ? "Coordinated Universal Time" : "";
        },

        parseZone : function () {
            if (this._tzm) {
                this.zone(this._tzm);
            } else if (typeof this._i === 'string') {
                this.zone(this._i);
            }
            return this;
        },

        hasAlignedHourOffset : function (input) {
            if (!input) {
                input = 0;
            }
            else {
                input = moment(input).zone();
            }

            return (this.zone() - input) % 60 === 0;
        },

        daysInMonth : function () {
            return daysInMonth(this.year(), this.month());
        },

        dayOfYear : function (input) {
            var dayOfYear = round((moment(this).startOf('day') - moment(this).startOf('year')) / 864e5) + 1;
            return input == null ? dayOfYear : this.add("d", (input - dayOfYear));
        },

        quarter : function (input) {
            return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
        },

        weekYear : function (input) {
            var year = weekOfYear(this, this.lang()._week.dow, this.lang()._week.doy).year;
            return input == null ? year : this.add("y", (input - year));
        },

        isoWeekYear : function (input) {
            var year = weekOfYear(this, 1, 4).year;
            return input == null ? year : this.add("y", (input - year));
        },

        week : function (input) {
            var week = this.lang().week(this);
            return input == null ? week : this.add("d", (input - week) * 7);
        },

        isoWeek : function (input) {
            var week = weekOfYear(this, 1, 4).week;
            return input == null ? week : this.add("d", (input - week) * 7);
        },

        weekday : function (input) {
            var weekday = (this.day() + 7 - this.lang()._week.dow) % 7;
            return input == null ? weekday : this.add("d", input - weekday);
        },

        isoWeekday : function (input) {
            // behaves the same as moment#day except
            // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
            // as a setter, sunday should belong to the previous week.
            return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
        },

        isoWeeksInYear : function () {
            return weeksInYear(this.year(), 1, 4);
        },

        weeksInYear : function () {
            var weekInfo = this._lang._week;
            return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
        },

        get : function (units) {
            units = normalizeUnits(units);
            return this[units]();
        },

        set : function (units, value) {
            units = normalizeUnits(units);
            if (typeof this[units] === 'function') {
                this[units](value);
            }
            return this;
        },

        // If passed a language key, it will set the language for this
        // instance.  Otherwise, it will return the language configuration
        // variables for this instance.
        lang : function (key) {
            if (key === undefined) {
                return this._lang;
            } else {
                this._lang = getLangDefinition(key);
                return this;
            }
        }
    });

    function rawMonthSetter(mom, value) {
        var dayOfMonth;

        // TODO: Move this out of here!
        if (typeof value === 'string') {
            value = mom.lang().monthsParse(value);
            // TODO: Another silent failure?
            if (typeof value !== 'number') {
                return mom;
            }
        }

        dayOfMonth = Math.min(mom.date(),
                daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function rawGetter(mom, unit) {
        return mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]();
    }

    function rawSetter(mom, unit, value) {
        if (unit === 'Month') {
            return rawMonthSetter(mom, value);
        } else {
            return mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }

    function makeAccessor(unit, keepTime) {
        return function (value) {
            if (value != null) {
                rawSetter(this, unit, value);
                moment.updateOffset(this, keepTime);
                return this;
            } else {
                return rawGetter(this, unit);
            }
        };
    }

    moment.fn.millisecond = moment.fn.milliseconds = makeAccessor('Milliseconds', false);
    moment.fn.second = moment.fn.seconds = makeAccessor('Seconds', false);
    moment.fn.minute = moment.fn.minutes = makeAccessor('Minutes', false);
    // Setting the hour should keep the time, because the user explicitly
    // specified which hour he wants. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    moment.fn.hour = moment.fn.hours = makeAccessor('Hours', true);
    // moment.fn.month is defined separately
    moment.fn.date = makeAccessor('Date', true);
    moment.fn.dates = deprecate("dates accessor is deprecated. Use date instead.", makeAccessor('Date', true));
    moment.fn.year = makeAccessor('FullYear', true);
    moment.fn.years = deprecate("years accessor is deprecated. Use year instead.", makeAccessor('FullYear', true));

    // add plural methods
    moment.fn.days = moment.fn.day;
    moment.fn.months = moment.fn.month;
    moment.fn.weeks = moment.fn.week;
    moment.fn.isoWeeks = moment.fn.isoWeek;
    moment.fn.quarters = moment.fn.quarter;

    // add aliased format methods
    moment.fn.toJSON = moment.fn.toISOString;

    /************************************
        Duration Prototype
    ************************************/


    extend(moment.duration.fn = Duration.prototype, {

        _bubble : function () {
            var milliseconds = this._milliseconds,
                days = this._days,
                months = this._months,
                data = this._data,
                seconds, minutes, hours, years;

            // The following code bubbles up values, see the tests for
            // examples of what that means.
            data.milliseconds = milliseconds % 1000;

            seconds = absRound(milliseconds / 1000);
            data.seconds = seconds % 60;

            minutes = absRound(seconds / 60);
            data.minutes = minutes % 60;

            hours = absRound(minutes / 60);
            data.hours = hours % 24;

            days += absRound(hours / 24);
            data.days = days % 30;

            months += absRound(days / 30);
            data.months = months % 12;

            years = absRound(months / 12);
            data.years = years;
        },

        weeks : function () {
            return absRound(this.days() / 7);
        },

        valueOf : function () {
            return this._milliseconds +
              this._days * 864e5 +
              (this._months % 12) * 2592e6 +
              toInt(this._months / 12) * 31536e6;
        },

        humanize : function (withSuffix) {
            var difference = +this,
                output = relativeTime(difference, !withSuffix, this.lang());

            if (withSuffix) {
                output = this.lang().pastFuture(difference, output);
            }

            return this.lang().postformat(output);
        },

        add : function (input, val) {
            // supports only 2.0-style add(1, 's') or add(moment)
            var dur = moment.duration(input, val);

            this._milliseconds += dur._milliseconds;
            this._days += dur._days;
            this._months += dur._months;

            this._bubble();

            return this;
        },

        subtract : function (input, val) {
            var dur = moment.duration(input, val);

            this._milliseconds -= dur._milliseconds;
            this._days -= dur._days;
            this._months -= dur._months;

            this._bubble();

            return this;
        },

        get : function (units) {
            units = normalizeUnits(units);
            return this[units.toLowerCase() + 's']();
        },

        as : function (units) {
            units = normalizeUnits(units);
            return this['as' + units.charAt(0).toUpperCase() + units.slice(1) + 's']();
        },

        lang : moment.fn.lang,

        toIsoString : function () {
            // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
            var years = Math.abs(this.years()),
                months = Math.abs(this.months()),
                days = Math.abs(this.days()),
                hours = Math.abs(this.hours()),
                minutes = Math.abs(this.minutes()),
                seconds = Math.abs(this.seconds() + this.milliseconds() / 1000);

            if (!this.asSeconds()) {
                // this is the same as C#'s (Noda) and python (isodate)...
                // but not other JS (goog.date)
                return 'P0D';
            }

            return (this.asSeconds() < 0 ? '-' : '') +
                'P' +
                (years ? years + 'Y' : '') +
                (months ? months + 'M' : '') +
                (days ? days + 'D' : '') +
                ((hours || minutes || seconds) ? 'T' : '') +
                (hours ? hours + 'H' : '') +
                (minutes ? minutes + 'M' : '') +
                (seconds ? seconds + 'S' : '');
        }
    });

    function makeDurationGetter(name) {
        moment.duration.fn[name] = function () {
            return this._data[name];
        };
    }

    function makeDurationAsGetter(name, factor) {
        moment.duration.fn['as' + name] = function () {
            return +this / factor;
        };
    }

    for (i in unitMillisecondFactors) {
        if (unitMillisecondFactors.hasOwnProperty(i)) {
            makeDurationAsGetter(i, unitMillisecondFactors[i]);
            makeDurationGetter(i.toLowerCase());
        }
    }

    makeDurationAsGetter('Weeks', 6048e5);
    moment.duration.fn.asMonths = function () {
        return (+this - this.years() * 31536e6) / 2592e6 + this.years() * 12;
    };


    /************************************
        Default Lang
    ************************************/


    // Set default language, other languages will inherit from English.
    moment.lang('en', {
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    /* EMBED_LANGUAGES */

    /************************************
        Exposing Moment
    ************************************/

    function makeGlobal(shouldDeprecate) {
        /*global ender:false */
        if (typeof ender !== 'undefined') {
            return;
        }
        oldGlobalMoment = globalScope.moment;
        if (shouldDeprecate) {
            globalScope.moment = deprecate(
                    "Accessing Moment through the global scope is " +
                    "deprecated, and will be removed in an upcoming " +
                    "release.",
                    moment);
        } else {
            globalScope.moment = moment;
        }
    }

    // CommonJS module is defined
    if (hasModule) {
        module.exports = moment;
    } else if (typeof define === "function" && define.amd) {
        define("moment", function (require, exports, module) {
            if (module.config && module.config() && module.config().noGlobal === true) {
                // release the global variable
                globalScope.moment = oldGlobalMoment;
            }

            return moment;
        });
        makeGlobal(true);
    } else {
        makeGlobal();
    }
}).call(this);

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],5:[function(require,module,exports){
var angular = require('angular')
  , ngAnimate = require('angular-animate')
  , moment = require('moment')
  , clock = require('./directives/clock.js')
  , weather = require('./directives/weather.js')
  , sidebar = require('./directives/sidebar.js')
  , stocks = require('./directives/stocks.js')
  , AppCtrl = require('./controllers/AppController.js')
  , weatherService = require('./services/weatherService.js')
  , stockService = require('./services/stockService.js')
  , stockForm = require('./directives/stockForm.js')
  , storageService = require('./services/storageService.js')

var app = angular.module('app',
  [
    'ngAnimate',
    clock.name,
    weather.name,
    sidebar.name,
    stocks.name,
    AppCtrl.name,
    weatherService.name,
    stockService.name,
    stockForm.name,
    storageService.name
  ]
)
.run(function ($rootScope) {
    $rootScope.moment = moment;
 });
},{"./controllers/AppController.js":6,"./directives/clock.js":7,"./directives/sidebar.js":8,"./directives/stockForm.js":9,"./directives/stocks.js":10,"./directives/weather.js":11,"./services/stockService.js":12,"./services/storageService.js":13,"./services/weatherService.js":14,"angular":2,"angular-animate":1,"moment":4}],6:[function(require,module,exports){
var angular = require('angular');

module.exports = angular.module('app.AppCtrl', [])
  .controller('AppCtrl',['stockService', 'weatherService', 'storageService', function(stockService, weatherService, storageService) {
  
    var that=this;

    storageService.getItem('location');

    this.location = storageService.getItem('location') || 'santa clara,ca';
    this.units = 'imperial';
    this.coord = {lon:-121.96, lat:37.36}
    this.stocks = [];

    this.tickerList = storageService.getItem('tickerList') || [];

    if (this.tickerList.length) {
      this.stocks = storageService.getItem('stocks') || stockService.getStocks(this.tickerList).then(function(response){that.stocks=response.data;saveStocks();});
    }
    
    function saveStocks() {
      storageService.setItem('stocks', that.stocks, 1000000);
    }

    function saveTickers() {
      storageService.setItem('tickerList', that.tickerList);
    }

    this.addStock = function(stock) {
      that.stocks.push(stock);
      saveStocks();
      that.tickerList.push(stock.e+':'+stock.t);
      saveTickers();
    }

    this.removeStockByIndex = function(index) {
      that.stocks.splice(index, 1);
      that.tickerList.splice(index, 1);
      saveStocks();
      savetickers();

    }

    this.setWeatherLocation = function(location) {

    }

  }])
},{"angular":2}],7:[function(require,module,exports){
var angular = require('angular');

module.exports = angular.module('app.clock', [])
  .directive('clock', ['$interval', '$timeout', 'dateFilter', '$animate', function ($interval, $timeout, dateFilter, $animate) {
    return {
      restrict: 'EC',
      link: link,
      scope: {},
      templateUrl: 'templates/clock.html'
    }

    function link(scope, element, attrs) {

      element.addClass('ng-hide');
      function updateTime() {
        $animate.removeClass(element, 'ng-hide');
        var now = new Date();
        scope.date = dateFilter(now, 'EEEE, MMMM d');
        scope.year = now.getFullYear();
        scope.time = dateFilter(now, 'h:mm');
        scope.ampm = dateFilter(now, 'a');
      }

      function startClock() {
        updateTime();
        $interval(updateTime, 60000);
      }

      updateTime();
      $timeout(startClock,60100-Date.now()%60000);

    }
  }])
},{"angular":2}],8:[function(require,module,exports){
var angular = require('angular');

module.exports = angular.module('app.sidebar', [])
  
  .directive('sidebar', ['$animate', 'stockService', function ($animate, stockService) {

    return {
      restrict: 'EC',
      link: link,
      templateUrl: 'templates/sidebar.html',
      controller: function($scope) {
          var panes = $scope.panes = [];

          $scope.select = function(pane) {
            angular.forEach(panes, function(pane) {
              pane.selected = false;
            });
            pane.selected = true;
          };

          this.addPane = function(pane) {
            if (panes.length === 0) {
              $scope.select(pane);
            }
            panes.push(pane);
          };
        }
    }

    function link(scope, element, attrs) {

      scope.toggleOpen = function() {
        attrs.$set('open', !attrs.open);
      }

      scope.removeStock = function(index) {
        scope.app.removeStockByIndex(index);
      }

    }

  }])

  .directive('sidebarTab', function() {

    return {
      require: '^sidebar',
      restrict: 'C',
      scope: {
        title:'@'
      },
      link: function(scope, element, attrs, tabsCtrl) {
        element.addClass('ng-hide');
        tabsCtrl.addPane(scope);
        scope.$watch('selected', function(selectedVal) {
          selectedVal?
            element.removeClass('ng-hide') : element.addClass('ng-hide');
        })
      }
    }

  })
},{"angular":2}],9:[function(require,module,exports){
var angular = require('angular');

module.exports = angular.module('app.stockForm', [])
  .directive('stockForm', ['$animate','stockService', function ($animate, stockService) {

    return {
      restrict: 'EC',
      link: link,
      require: '^?form',
      templateUrl: 'templates/stockForm.html'
    }

    function link(scope, element, attrs, ctrl) {

      scope.actionMessage = 'GO';
      scope.loading = false;

      ctrl.$setValidity('stock', false);
      ctrl.$setValidity('tickerInput', false);


      scope.checkStock = function () {
        if (!scope.stockToAdd) {
          console.log(scope.tickerInput)
          scope.loading = true;
          stockService.checkStock(scope.tickerInput).then(handleStock);
          scope.actionMessage = 'ADD';
          ctrl.$setValidity('tickerInput', true);
        }
        else {
          scope.app.addStock(scope.stockToAdd);
          delete scope.tickerInput;
          clearState();
        }

      }

      scope.changed = function () {
        clearState();
      }

      function clearState() {
        delete scope.stockToAdd;
        scope.actionMessage = 'GO';
        ctrl.$setValidity('stock', false);
      }

      function handleStock(response) {
        stock = response.data[0];
        scope.loading = false;
        console.log(stock);
        scope.stockToAdd = stock;
        scope.tickerInput = stock.e + ':' + stock.t;
      }

    }
  }])
},{"angular":2}],10:[function(require,module,exports){
var angular = require('angular');

module.exports = angular.module('app.stocks', [])
  .directive('stocks', ['stockService', '$animate', function (stockService, $animate) {
  
    return {
      restrict: 'E',
      templateUrl: 'templates/stocks.html'
    }

  }])
},{"angular":2}],11:[function(require,module,exports){
var angular = require('angular');

module.exports = angular.module('app.weather', [])
  .directive('weather', ['weatherService', 'storageService', '$animate', function (weatherService, storageService, $animate) {
  
    return {
      restrict: 'E',
      link: link,
      templateUrl: 'templates/weather.html'
    }

    function link(scope, element, attrs) {
      
      element.addClass('ng-hide');
      
      // $watchGroup in ng 1.3



      scope.$watch('app.location', function (val,oldVal) {
        console.log('asdfaksdfasdfsfsdfs',val,oldVal);
      });

      scope.$watch('[app.location,app.units]', function (value,oldValue) {
        element.addClass('ng-hide');
        
          console.log('asdfasdf',oldValue,value);
        
        weatherService.getWeather(scope.app.location,scope.app.units).then(updateWeather);
        console.log('watch mcgee!');
        storageService.setItem('location',scope.app.location);

      },true);
      
      function updateWeather(data) {
        scope.currentTemp = data.main.temp.toPrecision(2);
        scope.loTemp = data.main.temp_min.toPrecision(2);
        scope.hiTemp = data.main.temp_max.toPrecision(2);
        scope.description = data.weather[0].description;
        scope.app.coord = data.coord;
        
        $animate.removeClass(element, 'ng-hide');

        return data;

      }
      
    }

  }])
},{"angular":2}],12:[function(require,module,exports){
var angular = require('angular');

module.exports = angular.module('app.stockService', [])
  .service('stockService', ['$http', 'storageService', function ($http, storageService) {

    function stockQuery(query) {

      var options = {
        transformResponse: function (data, headersGetter) {
          return JSON.parse(data.substring(3));
        }
      }

      return $http.get('http://www.google.com/finance/info?infotype=infoquoteall&q='+query, options);
    }

    return {

      getStocks: function(tickerList) {
        if (tickerList.length) {
          return stockQuery(tickerList.join(','));
        }
      },
      checkStock: function(ticker) {
        return stockQuery(ticker);
      }

    }

  }])
},{"angular":2}],13:[function(require,module,exports){
var angular = require('angular');

module.exports = angular.module('app.storageService', [])
  .service('storageService', ['$q', function ($q) {

    return {

      getItem: function(key) {
        console.log('getitem',key);
        var obj = localStorage.getItem(key);

        if (!obj) {
          return;
        }

        obj = JSON.parse(obj);
        console.log('OBJ',obj);

        if ( Date.now() > obj.expires ) { //false if expires undefined
          return;
        }
        else {
          return JSON.parse(obj.data);
        }
      },
      setItem: function(key, value, ttl) {
        console.log('saveitem',key,value,ttl);

        var expires;

        if (ttl) {
          expires = ttl + Date.now();
        }

        var obj = {
          data: JSON.stringify(value),
          expires: expires
        }
        localStorage.setItem(key, JSON.stringify(obj));
      }


    }

  }])
},{"angular":2}],14:[function(require,module,exports){
var angular = require('angular');

module.exports = angular.module('app.weatherService', [])
  .service('weatherService', ['$http', '$q', function ($http, $q) {
    return {
      getWeather: function(query, units) {

        var deferred = $q.defer();

        var options = {
          method: 'GET',
          url:'http://api.openweathermap.org/data/2.5/weather',
          params:{q:query,units:units},
          transformResponse: function(data) {
            data = JSON.parse(data);
            data.query = query;
            data.units = units;
            data.time = Date.now();

            return data;
          }
        }

        try {
          var cachedWeather = JSON.parse(localStorage.weather);

          if (cachedWeather.query === query && cachedWeather.units === units && (Date.now() - cachedWeather.time) < 1000000) {
            deferred.resolve(cachedWeather);
            return deferred.promise;
          }

        } catch(e) {
          console.log(e);
        }

        console.log('Loading new weather');
        
        $http(options).success(function(data){
          //HTTP status codes not used in openweathermap API, instead in returned JSON
          if (data.cod !== 200) {
            deferred.reject(data.message);
          }
          else {
            deferred.resolve(data);
            localStorage.weather = JSON.stringify(data);

          }

        });

        return deferred.promise;

      }
    }
  }])
},{"angular":2}]},{},[5])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvcnRzYW8vRGV2ZWxvcG1lbnQvbmV3dGFiL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvcnRzYW8vRGV2ZWxvcG1lbnQvbmV3dGFiL25vZGVfbW9kdWxlcy9hbmd1bGFyLWFuaW1hdGUvYW5ndWxhci1hbmltYXRlLm1pbi5qcyIsIi9Vc2Vycy9ydHNhby9EZXZlbG9wbWVudC9uZXd0YWIvbm9kZV9tb2R1bGVzL2FuZ3VsYXIvaW5kZXgtYnJvd3NlcmlmeS5qcyIsIi9Vc2Vycy9ydHNhby9EZXZlbG9wbWVudC9uZXd0YWIvbm9kZV9tb2R1bGVzL2FuZ3VsYXIvbGliL2FuZ3VsYXIubWluLmpzIiwiL1VzZXJzL3J0c2FvL0RldmVsb3BtZW50L25ld3RhYi9ub2RlX21vZHVsZXMvbW9tZW50L21vbWVudC5qcyIsIi9Vc2Vycy9ydHNhby9EZXZlbG9wbWVudC9uZXd0YWIvc3JjL25ld3RhYi9hcHAuanMiLCIvVXNlcnMvcnRzYW8vRGV2ZWxvcG1lbnQvbmV3dGFiL3NyYy9uZXd0YWIvY29udHJvbGxlcnMvQXBwQ29udHJvbGxlci5qcyIsIi9Vc2Vycy9ydHNhby9EZXZlbG9wbWVudC9uZXd0YWIvc3JjL25ld3RhYi9kaXJlY3RpdmVzL2Nsb2NrLmpzIiwiL1VzZXJzL3J0c2FvL0RldmVsb3BtZW50L25ld3RhYi9zcmMvbmV3dGFiL2RpcmVjdGl2ZXMvc2lkZWJhci5qcyIsIi9Vc2Vycy9ydHNhby9EZXZlbG9wbWVudC9uZXd0YWIvc3JjL25ld3RhYi9kaXJlY3RpdmVzL3N0b2NrRm9ybS5qcyIsIi9Vc2Vycy9ydHNhby9EZXZlbG9wbWVudC9uZXd0YWIvc3JjL25ld3RhYi9kaXJlY3RpdmVzL3N0b2Nrcy5qcyIsIi9Vc2Vycy9ydHNhby9EZXZlbG9wbWVudC9uZXd0YWIvc3JjL25ld3RhYi9kaXJlY3RpdmVzL3dlYXRoZXIuanMiLCIvVXNlcnMvcnRzYW8vRGV2ZWxvcG1lbnQvbmV3dGFiL3NyYy9uZXd0YWIvc2VydmljZXMvc3RvY2tTZXJ2aWNlLmpzIiwiL1VzZXJzL3J0c2FvL0RldmVsb3BtZW50L25ld3RhYi9zcmMvbmV3dGFiL3NlcnZpY2VzL3N0b3JhZ2VTZXJ2aWNlLmpzIiwiL1VzZXJzL3J0c2FvL0RldmVsb3BtZW50L25ld3RhYi9zcmMvbmV3dGFiL3NlcnZpY2VzL3dlYXRoZXJTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcGpGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKlxyXG4gQW5ndWxhckpTIHYxLjIuMTJcclxuIChjKSAyMDEwLTIwMTQgR29vZ2xlLCBJbmMuIGh0dHA6Ly9hbmd1bGFyanMub3JnXHJcbiBMaWNlbnNlOiBNSVRcclxuKi9cclxuKGZ1bmN0aW9uKHYsayx0KXsndXNlIHN0cmljdCc7ay5tb2R1bGUoXCJuZ0FuaW1hdGVcIixbXCJuZ1wiXSkuZmFjdG9yeShcIiQkYW5pbWF0ZVJlZmxvd1wiLFtcIiR3aW5kb3dcIixcIiR0aW1lb3V0XCIsZnVuY3Rpb24oayxCKXt2YXIgZD1rLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8ay53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGZ1bmN0aW9uKGQpe3JldHVybiBCKGQsMTAsITEpfSxxPWsuY2FuY2VsQW5pbWF0aW9uRnJhbWV8fGsud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWV8fGZ1bmN0aW9uKGQpe3JldHVybiBCLmNhbmNlbChkKX07cmV0dXJuIGZ1bmN0aW9uKHApe3ZhciBrPWQocCk7cmV0dXJuIGZ1bmN0aW9uKCl7cShrKX19fV0pLmNvbmZpZyhbXCIkcHJvdmlkZVwiLFwiJGFuaW1hdGVQcm92aWRlclwiLGZ1bmN0aW9uKFIsQil7ZnVuY3Rpb24gZChkKXtmb3IodmFyIGs9MDtrPGQubGVuZ3RoO2srKyl7dmFyIHA9ZFtrXTtpZihwLm5vZGVUeXBlPT1YKXJldHVybiBwfX12YXIgcT1rLm5vb3AsXHJcbnA9ay5mb3JFYWNoLCQ9Qi4kJHNlbGVjdG9ycyxYPTEsbD1cIiQkbmdBbmltYXRlU3RhdGVcIixLPVwibmctYW5pbWF0ZVwiLG09e3J1bm5pbmc6ITB9O1IuZGVjb3JhdG9yKFwiJGFuaW1hdGVcIixbXCIkZGVsZWdhdGVcIixcIiRpbmplY3RvclwiLFwiJHNuaWZmZXJcIixcIiRyb290RWxlbWVudFwiLFwiJHRpbWVvdXRcIixcIiRyb290U2NvcGVcIixcIiRkb2N1bWVudFwiLGZ1bmN0aW9uKEMsdix0LEgseSx3LE4pe2Z1bmN0aW9uIEkoYSl7aWYoYSl7dmFyIGc9W10sZT17fTthPWEuc3Vic3RyKDEpLnNwbGl0KFwiLlwiKTsodC50cmFuc2l0aW9uc3x8dC5hbmltYXRpb25zKSYmYS5wdXNoKFwiXCIpO2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKXt2YXIgZj1hW2NdLGQ9JFtmXTtkJiYhZVtmXSYmKGcucHVzaCh2LmdldChkKSksZVtmXT0hMCl9cmV0dXJuIGd9fWZ1bmN0aW9uIHIoYSxnLGUsYyxmLGssbSl7ZnVuY3Rpb24gdChhKXtuKCk7aWYoITA9PT1hKXooKTtlbHNle2lmKGE9ZS5kYXRhKGwpKWEuZG9uZT16LGUuZGF0YShsLFxyXG5hKTtDKEQsXCJhZnRlclwiLHopfX1mdW5jdGlvbiBDKGMsZCxmKXtcImFmdGVyXCI9PWQ/cigpOkUoKTt2YXIgaz1kK1wiRW5kXCI7cChjLGZ1bmN0aW9uKGIsYWEpe3ZhciBoPWZ1bmN0aW9uKCl7YTp7dmFyIGI9ZCtcIkNvbXBsZXRlXCIsYT1jW2FhXTthW2JdPSEwOyhhW2tdfHxxKSgpO2ZvcihhPTA7YTxjLmxlbmd0aDthKyspaWYoIWNbYV1bYl0pYnJlYWsgYTtmKCl9fTtcImJlZm9yZVwiIT1kfHxcImVudGVyXCIhPWEmJlwibW92ZVwiIT1hP2JbZF0/YltrXT11P2JbZF0oZSxnLGgpOmJbZF0oZSxoKTpoKCk6aCgpfSl9ZnVuY3Rpb24gdyhjKXtlLnRyaWdnZXJIYW5kbGVyKFwiJGFuaW1hdGU6XCIrYyx7ZXZlbnQ6YSxjbGFzc05hbWU6Z30pfWZ1bmN0aW9uIEUoKXt5KGZ1bmN0aW9uKCl7dyhcImJlZm9yZVwiKX0sMCwhMSl9ZnVuY3Rpb24gcigpe3koZnVuY3Rpb24oKXt3KFwiYWZ0ZXJcIil9LDAsITEpfWZ1bmN0aW9uIHYoKXt5KGZ1bmN0aW9uKCl7dyhcImNsb3NlXCIpO20mJm0oKX0sMCwhMSl9ZnVuY3Rpb24gbigpe24uaGFzQmVlblJ1bnx8XHJcbihuLmhhc0JlZW5SdW49ITAsaygpKX1mdW5jdGlvbiB6KCl7aWYoIXouaGFzQmVlblJ1bil7ei5oYXNCZWVuUnVuPSEwO3ZhciBhPWUuZGF0YShsKTthJiYodT9BKGUpOihhLmNsb3NlQW5pbWF0aW9uVGltZW91dD15KGZ1bmN0aW9uKCl7QShlKX0sMCwhMSksZS5kYXRhKGwsYSkpKTt2KCl9fXZhciBzLHgsRz1kKGUpO0cmJihzPUcuY2xhc3NOYW1lLHg9cytcIiBcIitnKTtpZihHJiZMKHgpKXt4PShcIiBcIit4KS5yZXBsYWNlKC9cXHMrL2csXCIuXCIpO2N8fChjPWY/Zi5wYXJlbnQoKTplLnBhcmVudCgpKTt4PUkoeCk7dmFyIHU9XCJhZGRDbGFzc1wiPT1hfHxcInJlbW92ZUNsYXNzXCI9PWE7Zj1lLmRhdGEobCl8fHt9O2lmKGJhKGUsYyl8fDA9PT14Lmxlbmd0aCluKCksRSgpLHIoKSx6KCk7ZWxzZXt2YXIgRD1bXTt1JiYoZi5kaXNhYmxlZHx8Zi5ydW5uaW5nJiZmLnN0cnVjdHVyYWwpfHxwKHgsZnVuY3Rpb24oYyl7aWYoIWMuYWxsb3dDYW5jZWx8fGMuYWxsb3dDYW5jZWwoZSxhLGcpKXt2YXIgZD1cclxuY1thXTtcImxlYXZlXCI9PWE/KGM9ZCxkPW51bGwpOmM9Y1tcImJlZm9yZVwiK2EuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrYS5zdWJzdHIoMSldO0QucHVzaCh7YmVmb3JlOmMsYWZ0ZXI6ZH0pfX0pOzA9PT1ELmxlbmd0aD8obigpLEUoKSxyKCksdigpKTooYz1cIiBcIitzK1wiIFwiLGYucnVubmluZyYmKHkuY2FuY2VsKGYuY2xvc2VBbmltYXRpb25UaW1lb3V0KSxBKGUpLEooZi5hbmltYXRpb25zKSx4PShzPXUmJiFmLnN0cnVjdHVyYWwpJiZmLmNsYXNzTmFtZT09ZyYmYSE9Zi5ldmVudCxmLmJlZm9yZUNvbXBsZXRlfHx4PyhmLmRvbmV8fHEpKCEwKTpzJiYoYz1cInJlbW92ZUNsYXNzXCI9PWYuZXZlbnQ/Yy5yZXBsYWNlKFwiIFwiK2YuY2xhc3NOYW1lK1wiIFwiLFwiIFwiKTpjK2YuY2xhc3NOYW1lK1wiIFwiKSkscz1cIiBcIitnK1wiIFwiLFwiYWRkQ2xhc3NcIj09YSYmMDw9Yy5pbmRleE9mKHMpfHxcInJlbW92ZUNsYXNzXCI9PWEmJi0xPT1jLmluZGV4T2Yocyk/KG4oKSxFKCkscigpLHYoKSk6KGUuYWRkQ2xhc3MoSyksXHJcbmUuZGF0YShsLHtydW5uaW5nOiEwLGV2ZW50OmEsY2xhc3NOYW1lOmcsc3RydWN0dXJhbDohdSxhbmltYXRpb25zOkQsZG9uZTp0fSksQyhELFwiYmVmb3JlXCIsdCkpKX19ZWxzZSBuKCksRSgpLHIoKSx6KCl9ZnVuY3Rpb24gUShhKXthPWQoYSk7cChhLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrSyksZnVuY3Rpb24oYSl7YT1rLmVsZW1lbnQoYSk7dmFyIGU9YS5kYXRhKGwpO2UmJihKKGUuYW5pbWF0aW9ucyksQShhKSl9KX1mdW5jdGlvbiBKKGEpe3AoYSxmdW5jdGlvbihhKXthLmJlZm9yZUNvbXBsZXRlfHwoYS5iZWZvcmVFbmR8fHEpKCEwKTthLmFmdGVyQ29tcGxldGV8fChhLmFmdGVyRW5kfHxxKSghMCl9KX1mdW5jdGlvbiBBKGEpe2QoYSk9PWQoSCk/bS5kaXNhYmxlZHx8KG0ucnVubmluZz0hMSxtLnN0cnVjdHVyYWw9ITEpOihhLnJlbW92ZUNsYXNzKEspLGEucmVtb3ZlRGF0YShsKSl9ZnVuY3Rpb24gYmEoYSxnKXtpZihtLmRpc2FibGVkKXJldHVybiEwO2lmKGQoYSk9PWQoSCkpcmV0dXJuIG0uZGlzYWJsZWR8fFxyXG5tLnJ1bm5pbmc7ZG97aWYoMD09PWcubGVuZ3RoKWJyZWFrO3ZhciBlPWQoZyk9PWQoSCksYz1lP206Zy5kYXRhKGwpLGM9YyYmKCEhYy5kaXNhYmxlZHx8ISFjLnJ1bm5pbmcpO2lmKGV8fGMpcmV0dXJuIGM7aWYoZSlicmVha313aGlsZShnPWcucGFyZW50KCkpO3JldHVybiEwfUguZGF0YShsLG0pO3cuJCRwb3N0RGlnZXN0KGZ1bmN0aW9uKCl7dy4kJHBvc3REaWdlc3QoZnVuY3Rpb24oKXttLnJ1bm5pbmc9ITF9KX0pO3ZhciBNPUIuY2xhc3NOYW1lRmlsdGVyKCksTD1NP2Z1bmN0aW9uKGEpe3JldHVybiBNLnRlc3QoYSl9OmZ1bmN0aW9uKCl7cmV0dXJuITB9O3JldHVybntlbnRlcjpmdW5jdGlvbihhLGQsZSxjKXt0aGlzLmVuYWJsZWQoITEsYSk7Qy5lbnRlcihhLGQsZSk7dy4kJHBvc3REaWdlc3QoZnVuY3Rpb24oKXtyKFwiZW50ZXJcIixcIm5nLWVudGVyXCIsYSxkLGUscSxjKX0pfSxsZWF2ZTpmdW5jdGlvbihhLGQpe1EoYSk7dGhpcy5lbmFibGVkKCExLGEpO3cuJCRwb3N0RGlnZXN0KGZ1bmN0aW9uKCl7cihcImxlYXZlXCIsXHJcblwibmctbGVhdmVcIixhLG51bGwsbnVsbCxmdW5jdGlvbigpe0MubGVhdmUoYSl9LGQpfSl9LG1vdmU6ZnVuY3Rpb24oYSxkLGUsYyl7UShhKTt0aGlzLmVuYWJsZWQoITEsYSk7Qy5tb3ZlKGEsZCxlKTt3LiQkcG9zdERpZ2VzdChmdW5jdGlvbigpe3IoXCJtb3ZlXCIsXCJuZy1tb3ZlXCIsYSxkLGUscSxjKX0pfSxhZGRDbGFzczpmdW5jdGlvbihhLGQsZSl7cihcImFkZENsYXNzXCIsZCxhLG51bGwsbnVsbCxmdW5jdGlvbigpe0MuYWRkQ2xhc3MoYSxkKX0sZSl9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGEsZCxlKXtyKFwicmVtb3ZlQ2xhc3NcIixkLGEsbnVsbCxudWxsLGZ1bmN0aW9uKCl7Qy5yZW1vdmVDbGFzcyhhLGQpfSxlKX0sZW5hYmxlZDpmdW5jdGlvbihhLGQpe3N3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtjYXNlIDI6aWYoYSlBKGQpO2Vsc2V7dmFyIGU9ZC5kYXRhKGwpfHx7fTtlLmRpc2FibGVkPSEwO2QuZGF0YShsLGUpfWJyZWFrO2Nhc2UgMTptLmRpc2FibGVkPSFhO2JyZWFrO2RlZmF1bHQ6YT1cclxuIW0uZGlzYWJsZWR9cmV0dXJuISFhfX19XSk7Qi5yZWdpc3RlcihcIlwiLFtcIiR3aW5kb3dcIixcIiRzbmlmZmVyXCIsXCIkdGltZW91dFwiLFwiJCRhbmltYXRlUmVmbG93XCIsZnVuY3Rpb24obSxsLEIsSCl7ZnVuY3Rpb24geShiLGEpe08mJk8oKTtVLnB1c2goYSk7dmFyIGg9ZChiKTtiPWsuZWxlbWVudChoKTtWLnB1c2goYik7dmFyIGg9Yi5kYXRhKG4pLGM9aC5zdGFnZ2VyLGM9aC5pdGVtSW5kZXgqKE1hdGgubWF4KGMuYW5pbWF0aW9uRGVsYXksYy50cmFuc2l0aW9uRGVsYXkpfHwwKTtQPU1hdGgubWF4KFAsKGMrKGgubWF4RGVsYXkraC5tYXhEdXJhdGlvbikqcykqeCk7aC5hbmltYXRpb25Db3VudD1HO089SChmdW5jdGlvbigpe3AoVSxmdW5jdGlvbihiKXtiKCl9KTt2YXIgYj1bXSxhPUc7cChWLGZ1bmN0aW9uKGEpe2IucHVzaChhKX0pO0IoZnVuY3Rpb24oKXt3KGIsYSk7Yj1udWxsfSxQLCExKTtVPVtdO1Y9W107Tz1udWxsO3U9e307UD0wO0crK30pfWZ1bmN0aW9uIHcoYixhKXtwKGIsXHJcbmZ1bmN0aW9uKGIpeyhiPWIuZGF0YShuKSkmJmIuYW5pbWF0aW9uQ291bnQ9PWEmJihiLmNsb3NlQW5pbWF0aW9uRm58fHEpKCl9KX1mdW5jdGlvbiBOKGIsYSl7dmFyIGg9YT91W2FdOm51bGw7aWYoIWgpe3ZhciBkPTAsYz0wLGU9MCxrPTAsZyxuLGwscjtwKGIsZnVuY3Rpb24oYil7aWYoYi5ub2RlVHlwZT09WCl7Yj1tLmdldENvbXB1dGVkU3R5bGUoYil8fHt9O2w9YltmK1ldO2Q9TWF0aC5tYXgoSShsKSxkKTtyPWJbZitXXTtnPWJbZitFXTtjPU1hdGgubWF4KEkoZyksYyk7bj1iW0YrRV07az1NYXRoLm1heChJKG4pLGspO3ZhciBhPUkoYltGK1ldKTswPGEmJihhKj1wYXJzZUludChiW0YrUl0sMTApfHwxKTtlPU1hdGgubWF4KGEsZSl9fSk7aD17dG90YWw6MCx0cmFuc2l0aW9uUHJvcGVydHlTdHlsZTpyLHRyYW5zaXRpb25EdXJhdGlvblN0eWxlOmwsdHJhbnNpdGlvbkRlbGF5U3R5bGU6Zyx0cmFuc2l0aW9uRGVsYXk6Yyx0cmFuc2l0aW9uRHVyYXRpb246ZCxhbmltYXRpb25EZWxheVN0eWxlOm4sXHJcbmFuaW1hdGlvbkRlbGF5OmssYW5pbWF0aW9uRHVyYXRpb246ZX07YSYmKHVbYV09aCl9cmV0dXJuIGh9ZnVuY3Rpb24gSShiKXt2YXIgYT0wO2I9ay5pc1N0cmluZyhiKT9iLnNwbGl0KC9cXHMqLFxccyovKTpbXTtwKGIsZnVuY3Rpb24oYil7YT1NYXRoLm1heChwYXJzZUZsb2F0KGIpfHwwLGEpfSk7cmV0dXJuIGF9ZnVuY3Rpb24gcihiKXt2YXIgYT1iLnBhcmVudCgpLGg9YS5kYXRhKFopO2h8fChhLmRhdGEoWiwrK0QpLGg9RCk7cmV0dXJuIGgrXCItXCIrZChiKS5jbGFzc05hbWV9ZnVuY3Rpb24gUShiLGEsaCl7dmFyIGM9cihiKSxlPWMrXCIgXCIrYSxrPXt9LGc9dVtlXT8rK3VbZV0udG90YWw6MDtpZigwPGcpe3ZhciBsPWErXCItc3RhZ2dlclwiLGs9YytcIiBcIitsOyhjPSF1W2tdKSYmYi5hZGRDbGFzcyhsKTtrPU4oYixrKTtjJiZiLnJlbW92ZUNsYXNzKGwpfWg9aHx8ZnVuY3Rpb24oYil7cmV0dXJuIGIoKX07Yi5hZGRDbGFzcyhhKTtoPWgoZnVuY3Rpb24oKXtyZXR1cm4gTihiLGUpfSk7XHJcbmw9TWF0aC5tYXgoaC50cmFuc2l0aW9uRGVsYXksaC5hbmltYXRpb25EZWxheSk7Yz1NYXRoLm1heChoLnRyYW5zaXRpb25EdXJhdGlvbixoLmFuaW1hdGlvbkR1cmF0aW9uKTtpZigwPT09YylyZXR1cm4gYi5yZW1vdmVDbGFzcyhhKSwhMTt2YXIgbT1cIlwiOzA8aC50cmFuc2l0aW9uRHVyYXRpb24/ZChiKS5zdHlsZVtmK1ddPVwibm9uZVwiOmQoYikuc3R5bGVbRl09XCJub25lIDBzXCI7cChhLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihiLGEpe20rPSgwPGE/XCIgXCI6XCJcIikrYitcIi1hY3RpdmVcIn0pO2IuZGF0YShuLHtjbGFzc05hbWU6YSxhY3RpdmVDbGFzc05hbWU6bSxtYXhEdXJhdGlvbjpjLG1heERlbGF5OmwsY2xhc3NlczphK1wiIFwiK20sdGltaW5nczpoLHN0YWdnZXI6ayxpdGVtSW5kZXg6Z30pO3JldHVybiEwfWZ1bmN0aW9uIEooYil7dmFyIGE9ZitXO2I9ZChiKTtiLnN0eWxlW2FdJiYwPGIuc3R5bGVbYV0ubGVuZ3RoJiYoYi5zdHlsZVthXT1cIlwiKX1mdW5jdGlvbiBBKGIpe3ZhciBhPUY7Yj1cclxuZChiKTtiLnN0eWxlW2FdJiYwPGIuc3R5bGVbYV0ubGVuZ3RoJiYoYi5zdHlsZVthXT1cIlwiKX1mdW5jdGlvbiBLKGIsYSxoKXtmdW5jdGlvbiBlKGMpe2Iub2ZmKHYsayk7Yi5yZW1vdmVDbGFzcyhyKTtjPWI7Yy5yZW1vdmVDbGFzcyhhKTtjLnJlbW92ZURhdGEobik7Yz1kKGIpO2Zvcih2YXIgaCBpbiBzKWMuc3R5bGUucmVtb3ZlUHJvcGVydHkoc1toXSl9ZnVuY3Rpb24gayhiKXtiLnN0b3BQcm9wYWdhdGlvbigpO3ZhciBhPWIub3JpZ2luYWxFdmVudHx8YjtiPWEuJG1hbnVhbFRpbWVTdGFtcHx8YS50aW1lU3RhbXB8fERhdGUubm93KCk7YT1wYXJzZUZsb2F0KGEuZWxhcHNlZFRpbWUudG9GaXhlZCh6KSk7TWF0aC5tYXgoYi13LDApPj11JiZhPj1wJiZoKCl9dmFyIGY9Yi5kYXRhKG4pLGc9ZChiKTtpZigtMSE9Zy5jbGFzc05hbWUuaW5kZXhPZihhKSYmZil7dmFyIGw9Zi50aW1pbmdzLG09Zi5zdGFnZ2VyLHA9Zi5tYXhEdXJhdGlvbixyPWYuYWN0aXZlQ2xhc3NOYW1lLHU9TWF0aC5tYXgobC50cmFuc2l0aW9uRGVsYXksXHJcbmwuYW5pbWF0aW9uRGVsYXkpKngsdz1EYXRlLm5vdygpLHY9VCtcIiBcIitTLHQ9Zi5pdGVtSW5kZXgscT1cIlwiLHM9W107aWYoMDxsLnRyYW5zaXRpb25EdXJhdGlvbil7dmFyIHk9bC50cmFuc2l0aW9uUHJvcGVydHlTdHlsZTstMT09eS5pbmRleE9mKFwiYWxsXCIpJiYocSs9YytcInRyYW5zaXRpb24tcHJvcGVydHk6IFwiK3krXCI7XCIscSs9YytcInRyYW5zaXRpb24tZHVyYXRpb246IFwiK2wudHJhbnNpdGlvbkR1cmF0aW9uU3R5bGUrXCI7XCIscy5wdXNoKGMrXCJ0cmFuc2l0aW9uLXByb3BlcnR5XCIpLHMucHVzaChjK1widHJhbnNpdGlvbi1kdXJhdGlvblwiKSl9MDx0JiYoMDxtLnRyYW5zaXRpb25EZWxheSYmMD09PW0udHJhbnNpdGlvbkR1cmF0aW9uJiYocSs9YytcInRyYW5zaXRpb24tZGVsYXk6IFwiK00obC50cmFuc2l0aW9uRGVsYXlTdHlsZSxtLnRyYW5zaXRpb25EZWxheSx0KStcIjsgXCIscy5wdXNoKGMrXCJ0cmFuc2l0aW9uLWRlbGF5XCIpKSwwPG0uYW5pbWF0aW9uRGVsYXkmJjA9PT1tLmFuaW1hdGlvbkR1cmF0aW9uJiZcclxuKHErPWMrXCJhbmltYXRpb24tZGVsYXk6IFwiK00obC5hbmltYXRpb25EZWxheVN0eWxlLG0uYW5pbWF0aW9uRGVsYXksdCkrXCI7IFwiLHMucHVzaChjK1wiYW5pbWF0aW9uLWRlbGF5XCIpKSk7MDxzLmxlbmd0aCYmKGw9Zy5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKXx8XCJcIixnLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsbCtcIiBcIitxKSk7Yi5vbih2LGspO2IuYWRkQ2xhc3Mocik7Zi5jbG9zZUFuaW1hdGlvbkZuPWZ1bmN0aW9uKCl7ZSgpO2goKX07cmV0dXJuIGV9aCgpfWZ1bmN0aW9uIE0oYixhLGMpe3ZhciBkPVwiXCI7cChiLnNwbGl0KFwiLFwiKSxmdW5jdGlvbihiLGUpe2QrPSgwPGU/XCIsXCI6XCJcIikrKGMqYStwYXJzZUludChiLDEwKSkrXCJzXCJ9KTtyZXR1cm4gZH1mdW5jdGlvbiBMKGIsYSxjKXtpZihRKGIsYSxjKSlyZXR1cm4gZnVuY3Rpb24oYyl7YyYmKGIucmVtb3ZlQ2xhc3MoYSksYi5yZW1vdmVEYXRhKG4pKX19ZnVuY3Rpb24gYShhLGMsZCl7aWYoYS5kYXRhKG4pKXJldHVybiBLKGEsYyxkKTthLnJlbW92ZUNsYXNzKGMpO1xyXG5hLnJlbW92ZURhdGEobik7ZCgpfWZ1bmN0aW9uIGcoYixjLGQpe3ZhciBlPUwoYixjKTtpZihlKXt2YXIgZj1lO3koYixmdW5jdGlvbigpe0ooYik7QShiKTtmPWEoYixjLGQpfSk7cmV0dXJuIGZ1bmN0aW9uKGEpeyhmfHxxKShhKX19ZCgpfWZ1bmN0aW9uIGUoYSxjKXt2YXIgZD1cIlwiO2E9ay5pc0FycmF5KGEpP2E6YS5zcGxpdCgvXFxzKy8pO3AoYSxmdW5jdGlvbihhLGIpe2EmJjA8YS5sZW5ndGgmJihkKz0oMDxiP1wiIFwiOlwiXCIpK2ErYyl9KTtyZXR1cm4gZH12YXIgYz1cIlwiLGYsUyxGLFQ7di5vbnRyYW5zaXRpb25lbmQ9PT10JiZ2Lm9ud2Via2l0dHJhbnNpdGlvbmVuZCE9PXQ/KGM9XCItd2Via2l0LVwiLGY9XCJXZWJraXRUcmFuc2l0aW9uXCIsUz1cIndlYmtpdFRyYW5zaXRpb25FbmQgdHJhbnNpdGlvbmVuZFwiKTooZj1cInRyYW5zaXRpb25cIixTPVwidHJhbnNpdGlvbmVuZFwiKTt2Lm9uYW5pbWF0aW9uZW5kPT09dCYmdi5vbndlYmtpdGFuaW1hdGlvbmVuZCE9PXQ/KGM9XCItd2Via2l0LVwiLEY9XHJcblwiV2Via2l0QW5pbWF0aW9uXCIsVD1cIndlYmtpdEFuaW1hdGlvbkVuZCBhbmltYXRpb25lbmRcIik6KEY9XCJhbmltYXRpb25cIixUPVwiYW5pbWF0aW9uZW5kXCIpO3ZhciBZPVwiRHVyYXRpb25cIixXPVwiUHJvcGVydHlcIixFPVwiRGVsYXlcIixSPVwiSXRlcmF0aW9uQ291bnRcIixaPVwiJCRuZ0FuaW1hdGVLZXlcIixuPVwiJCRuZ0FuaW1hdGVDU1MzRGF0YVwiLHo9MyxzPTEuNSx4PTFFMyxHPTAsdT17fSxEPTAsVT1bXSxWPVtdLE8sUD0wO3JldHVybnthbGxvd0NhbmNlbDpmdW5jdGlvbihhLGMsaCl7dmFyIGY9KGEuZGF0YShuKXx8e30pLmNsYXNzZXM7aWYoIWZ8fDA8PVtcImVudGVyXCIsXCJsZWF2ZVwiLFwibW92ZVwiXS5pbmRleE9mKGMpKXJldHVybiEwO3ZhciBsPWEucGFyZW50KCksZz1rLmVsZW1lbnQoZChhKS5jbG9uZU5vZGUoKSk7Zy5hdHRyKFwic3R5bGVcIixcInBvc2l0aW9uOmFic29sdXRlOyB0b3A6LTk5OTlweDsgbGVmdDotOTk5OXB4XCIpO2cucmVtb3ZlQXR0cihcImlkXCIpO2cuZW1wdHkoKTtwKGYuc3BsaXQoXCIgXCIpLFxyXG5mdW5jdGlvbihhKXtnLnJlbW92ZUNsYXNzKGEpfSk7Zy5hZGRDbGFzcyhlKGgsXCJhZGRDbGFzc1wiPT1jP1wiLWFkZFwiOlwiLXJlbW92ZVwiKSk7bC5hcHBlbmQoZyk7YT1OKGcpO2cucmVtb3ZlKCk7cmV0dXJuIDA8TWF0aC5tYXgoYS50cmFuc2l0aW9uRHVyYXRpb24sYS5hbmltYXRpb25EdXJhdGlvbil9LGVudGVyOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIGcoYSxcIm5nLWVudGVyXCIsYyl9LGxlYXZlOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIGcoYSxcIm5nLWxlYXZlXCIsYyl9LG1vdmU6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gZyhhLFwibmctbW92ZVwiLGMpfSxiZWZvcmVBZGRDbGFzczpmdW5jdGlvbihhLGMsZCl7dmFyIGY9TChhLGUoYyxcIi1hZGRcIiksZnVuY3Rpb24oZCl7YS5hZGRDbGFzcyhjKTtkPWQoKTthLnJlbW92ZUNsYXNzKGMpO3JldHVybiBkfSk7aWYoZilyZXR1cm4geShhLGZ1bmN0aW9uKCl7SihhKTtBKGEpO2QoKX0pLGY7ZCgpfSxhZGRDbGFzczpmdW5jdGlvbihiLGMsZCl7cmV0dXJuIGEoYixcclxuZShjLFwiLWFkZFwiKSxkKX0sYmVmb3JlUmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oYSxjLGQpe3ZhciBmPUwoYSxlKGMsXCItcmVtb3ZlXCIpLGZ1bmN0aW9uKGQpe3ZhciBlPWEuYXR0cihcImNsYXNzXCIpO2EucmVtb3ZlQ2xhc3MoYyk7ZD1kKCk7YS5hdHRyKFwiY2xhc3NcIixlKTtyZXR1cm4gZH0pO2lmKGYpcmV0dXJuIHkoYSxmdW5jdGlvbigpe0ooYSk7QShhKTtkKCl9KSxmO2QoKX0scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oYixjLGQpe3JldHVybiBhKGIsZShjLFwiLXJlbW92ZVwiKSxkKX19fV0pfV0pfSkod2luZG93LHdpbmRvdy5hbmd1bGFyKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YW5ndWxhci1hbmltYXRlLm1pbi5qcy5tYXAiLCJyZXF1aXJlKCcuL2xpYi9hbmd1bGFyLm1pbi5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXI7XG4iLCIvKlxuIEFuZ3VsYXJKUyB2MS4yLjE2XG4gKGMpIDIwMTAtMjAxNCBHb29nbGUsIEluYy4gaHR0cDovL2FuZ3VsYXJqcy5vcmdcbiBMaWNlbnNlOiBNSVRcbiovXG4oZnVuY3Rpb24oTyxVLHMpeyd1c2Ugc3RyaWN0JztmdW5jdGlvbiB0KGIpe3JldHVybiBmdW5jdGlvbigpe3ZhciBhPWFyZ3VtZW50c1swXSxjLGE9XCJbXCIrKGI/YitcIjpcIjpcIlwiKSthK1wiXSBodHRwOi8vZXJyb3JzLmFuZ3VsYXJqcy5vcmcvMS4yLjE2L1wiKyhiP2IrXCIvXCI6XCJcIikrYTtmb3IoYz0xO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspYT1hKygxPT1jP1wiP1wiOlwiJlwiKStcInBcIisoYy0xKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQoXCJmdW5jdGlvblwiPT10eXBlb2YgYXJndW1lbnRzW2NdP2FyZ3VtZW50c1tjXS50b1N0cmluZygpLnJlcGxhY2UoLyBcXHtbXFxzXFxTXSokLyxcIlwiKTpcInVuZGVmaW5lZFwiPT10eXBlb2YgYXJndW1lbnRzW2NdP1widW5kZWZpbmVkXCI6XCJzdHJpbmdcIiE9dHlwZW9mIGFyZ3VtZW50c1tjXT9KU09OLnN0cmluZ2lmeShhcmd1bWVudHNbY10pOmFyZ3VtZW50c1tjXSk7cmV0dXJuIEVycm9yKGEpfX1mdW5jdGlvbiBhYihiKXtpZihudWxsPT1ifHxDYShiKSlyZXR1cm4hMTtcbnZhciBhPWIubGVuZ3RoO3JldHVybiAxPT09Yi5ub2RlVHlwZSYmYT8hMDp3KGIpfHxNKGIpfHwwPT09YXx8XCJudW1iZXJcIj09PXR5cGVvZiBhJiYwPGEmJmEtMSBpbiBifWZ1bmN0aW9uIHEoYixhLGMpe3ZhciBkO2lmKGIpaWYoUChiKSlmb3IoZCBpbiBiKVwicHJvdG90eXBlXCI9PWR8fChcImxlbmd0aFwiPT1kfHxcIm5hbWVcIj09ZHx8Yi5oYXNPd25Qcm9wZXJ0eSYmIWIuaGFzT3duUHJvcGVydHkoZCkpfHxhLmNhbGwoYyxiW2RdLGQpO2Vsc2UgaWYoYi5mb3JFYWNoJiZiLmZvckVhY2ghPT1xKWIuZm9yRWFjaChhLGMpO2Vsc2UgaWYoYWIoYikpZm9yKGQ9MDtkPGIubGVuZ3RoO2QrKylhLmNhbGwoYyxiW2RdLGQpO2Vsc2UgZm9yKGQgaW4gYiliLmhhc093blByb3BlcnR5KGQpJiZhLmNhbGwoYyxiW2RdLGQpO3JldHVybiBifWZ1bmN0aW9uIFFiKGIpe3ZhciBhPVtdLGM7Zm9yKGMgaW4gYiliLmhhc093blByb3BlcnR5KGMpJiZhLnB1c2goYyk7cmV0dXJuIGEuc29ydCgpfWZ1bmN0aW9uIFNjKGIsXG5hLGMpe2Zvcih2YXIgZD1RYihiKSxlPTA7ZTxkLmxlbmd0aDtlKyspYS5jYWxsKGMsYltkW2VdXSxkW2VdKTtyZXR1cm4gZH1mdW5jdGlvbiBSYihiKXtyZXR1cm4gZnVuY3Rpb24oYSxjKXtiKGMsYSl9fWZ1bmN0aW9uIGJiKCl7Zm9yKHZhciBiPWthLmxlbmd0aCxhO2I7KXtiLS07YT1rYVtiXS5jaGFyQ29kZUF0KDApO2lmKDU3PT1hKXJldHVybiBrYVtiXT1cIkFcIixrYS5qb2luKFwiXCIpO2lmKDkwPT1hKWthW2JdPVwiMFwiO2Vsc2UgcmV0dXJuIGthW2JdPVN0cmluZy5mcm9tQ2hhckNvZGUoYSsxKSxrYS5qb2luKFwiXCIpfWthLnVuc2hpZnQoXCIwXCIpO3JldHVybiBrYS5qb2luKFwiXCIpfWZ1bmN0aW9uIFNiKGIsYSl7YT9iLiQkaGFzaEtleT1hOmRlbGV0ZSBiLiQkaGFzaEtleX1mdW5jdGlvbiBEKGIpe3ZhciBhPWIuJCRoYXNoS2V5O3EoYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2EhPT1iJiZxKGEsZnVuY3Rpb24oYSxjKXtiW2NdPWF9KX0pO1NiKGIsYSk7cmV0dXJuIGJ9ZnVuY3Rpb24gWShiKXtyZXR1cm4gcGFyc2VJbnQoYixcbjEwKX1mdW5jdGlvbiBUYihiLGEpe3JldHVybiBEKG5ldyAoRChmdW5jdGlvbigpe30se3Byb3RvdHlwZTpifSkpLGEpfWZ1bmN0aW9uIEMoKXt9ZnVuY3Rpb24gRGEoYil7cmV0dXJuIGJ9ZnVuY3Rpb24gYWEoYil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGJ9fWZ1bmN0aW9uIEUoYil7cmV0dXJuXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBifWZ1bmN0aW9uIEIoYil7cmV0dXJuXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBifWZ1bmN0aW9uIFgoYil7cmV0dXJuIG51bGwhPWImJlwib2JqZWN0XCI9PT10eXBlb2YgYn1mdW5jdGlvbiB3KGIpe3JldHVyblwic3RyaW5nXCI9PT10eXBlb2YgYn1mdW5jdGlvbiB2YihiKXtyZXR1cm5cIm51bWJlclwiPT09dHlwZW9mIGJ9ZnVuY3Rpb24gTmEoYil7cmV0dXJuXCJbb2JqZWN0IERhdGVdXCI9PT13YS5jYWxsKGIpfWZ1bmN0aW9uIE0oYil7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT09d2EuY2FsbChiKX1mdW5jdGlvbiBQKGIpe3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBifVxuZnVuY3Rpb24gY2IoYil7cmV0dXJuXCJbb2JqZWN0IFJlZ0V4cF1cIj09PXdhLmNhbGwoYil9ZnVuY3Rpb24gQ2EoYil7cmV0dXJuIGImJmIuZG9jdW1lbnQmJmIubG9jYXRpb24mJmIuYWxlcnQmJmIuc2V0SW50ZXJ2YWx9ZnVuY3Rpb24gVGMoYil7cmV0dXJuISghYnx8IShiLm5vZGVOYW1lfHxiLnByb3AmJmIuYXR0ciYmYi5maW5kKSl9ZnVuY3Rpb24gVWMoYixhLGMpe3ZhciBkPVtdO3EoYixmdW5jdGlvbihiLGcsZil7ZC5wdXNoKGEuY2FsbChjLGIsZyxmKSl9KTtyZXR1cm4gZH1mdW5jdGlvbiBkYihiLGEpe2lmKGIuaW5kZXhPZilyZXR1cm4gYi5pbmRleE9mKGEpO2Zvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKWlmKGE9PT1iW2NdKXJldHVybiBjO3JldHVybi0xfWZ1bmN0aW9uIE9hKGIsYSl7dmFyIGM9ZGIoYixhKTswPD1jJiZiLnNwbGljZShjLDEpO3JldHVybiBhfWZ1bmN0aW9uIGJhKGIsYSl7aWYoQ2EoYil8fGImJmIuJGV2YWxBc3luYyYmYi4kd2F0Y2gpdGhyb3cgUGEoXCJjcHdzXCIpO1xuaWYoYSl7aWYoYj09PWEpdGhyb3cgUGEoXCJjcGlcIik7aWYoTShiKSlmb3IodmFyIGM9YS5sZW5ndGg9MDtjPGIubGVuZ3RoO2MrKylhLnB1c2goYmEoYltjXSkpO2Vsc2V7Yz1hLiQkaGFzaEtleTtxKGEsZnVuY3Rpb24oYixjKXtkZWxldGUgYVtjXX0pO2Zvcih2YXIgZCBpbiBiKWFbZF09YmEoYltkXSk7U2IoYSxjKX19ZWxzZShhPWIpJiYoTShiKT9hPWJhKGIsW10pOk5hKGIpP2E9bmV3IERhdGUoYi5nZXRUaW1lKCkpOmNiKGIpP2E9UmVnRXhwKGIuc291cmNlKTpYKGIpJiYoYT1iYShiLHt9KSkpO3JldHVybiBhfWZ1bmN0aW9uIFViKGIsYSl7YT1hfHx7fTtmb3IodmFyIGMgaW4gYikhYi5oYXNPd25Qcm9wZXJ0eShjKXx8XCIkXCI9PT1jLmNoYXJBdCgwKSYmXCIkXCI9PT1jLmNoYXJBdCgxKXx8KGFbY109YltjXSk7cmV0dXJuIGF9ZnVuY3Rpb24geGEoYixhKXtpZihiPT09YSlyZXR1cm4hMDtpZihudWxsPT09Ynx8bnVsbD09PWEpcmV0dXJuITE7aWYoYiE9PWImJmEhPT1hKXJldHVybiEwO1xudmFyIGM9dHlwZW9mIGIsZDtpZihjPT10eXBlb2YgYSYmXCJvYmplY3RcIj09YylpZihNKGIpKXtpZighTShhKSlyZXR1cm4hMTtpZigoYz1iLmxlbmd0aCk9PWEubGVuZ3RoKXtmb3IoZD0wO2Q8YztkKyspaWYoIXhhKGJbZF0sYVtkXSkpcmV0dXJuITE7cmV0dXJuITB9fWVsc2V7aWYoTmEoYikpcmV0dXJuIE5hKGEpJiZiLmdldFRpbWUoKT09YS5nZXRUaW1lKCk7aWYoY2IoYikmJmNiKGEpKXJldHVybiBiLnRvU3RyaW5nKCk9PWEudG9TdHJpbmcoKTtpZihiJiZiLiRldmFsQXN5bmMmJmIuJHdhdGNofHxhJiZhLiRldmFsQXN5bmMmJmEuJHdhdGNofHxDYShiKXx8Q2EoYSl8fE0oYSkpcmV0dXJuITE7Yz17fTtmb3IoZCBpbiBiKWlmKFwiJFwiIT09ZC5jaGFyQXQoMCkmJiFQKGJbZF0pKXtpZigheGEoYltkXSxhW2RdKSlyZXR1cm4hMTtjW2RdPSEwfWZvcihkIGluIGEpaWYoIWMuaGFzT3duUHJvcGVydHkoZCkmJlwiJFwiIT09ZC5jaGFyQXQoMCkmJmFbZF0hPT1zJiYhUChhW2RdKSlyZXR1cm4hMTtcbnJldHVybiEwfXJldHVybiExfWZ1bmN0aW9uIFZiKCl7cmV0dXJuIFUuc2VjdXJpdHlQb2xpY3kmJlUuc2VjdXJpdHlQb2xpY3kuaXNBY3RpdmV8fFUucXVlcnlTZWxlY3RvciYmISghVS5xdWVyeVNlbGVjdG9yKFwiW25nLWNzcF1cIikmJiFVLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZy1jc3BdXCIpKX1mdW5jdGlvbiBlYihiLGEpe3ZhciBjPTI8YXJndW1lbnRzLmxlbmd0aD95YS5jYWxsKGFyZ3VtZW50cywyKTpbXTtyZXR1cm4hUChhKXx8YSBpbnN0YW5jZW9mIFJlZ0V4cD9hOmMubGVuZ3RoP2Z1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/YS5hcHBseShiLGMuY29uY2F0KHlhLmNhbGwoYXJndW1lbnRzLDApKSk6YS5hcHBseShiLGMpfTpmdW5jdGlvbigpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoP2EuYXBwbHkoYixhcmd1bWVudHMpOmEuY2FsbChiKX19ZnVuY3Rpb24gVmMoYixhKXt2YXIgYz1hO1wic3RyaW5nXCI9PT10eXBlb2YgYiYmXCIkXCI9PT1iLmNoYXJBdCgwKT9jPVxuczpDYShhKT9jPVwiJFdJTkRPV1wiOmEmJlU9PT1hP2M9XCIkRE9DVU1FTlRcIjphJiYoYS4kZXZhbEFzeW5jJiZhLiR3YXRjaCkmJihjPVwiJFNDT1BFXCIpO3JldHVybiBjfWZ1bmN0aW9uIHFhKGIsYSl7cmV0dXJuXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBiP3M6SlNPTi5zdHJpbmdpZnkoYixWYyxhP1wiICBcIjpudWxsKX1mdW5jdGlvbiBXYihiKXtyZXR1cm4gdyhiKT9KU09OLnBhcnNlKGIpOmJ9ZnVuY3Rpb24gUWEoYil7XCJmdW5jdGlvblwiPT09dHlwZW9mIGI/Yj0hMDpiJiYwIT09Yi5sZW5ndGg/KGI9SyhcIlwiK2IpLGI9IShcImZcIj09Ynx8XCIwXCI9PWJ8fFwiZmFsc2VcIj09Ynx8XCJub1wiPT1ifHxcIm5cIj09Ynx8XCJbXVwiPT1iKSk6Yj0hMTtyZXR1cm4gYn1mdW5jdGlvbiBoYShiKXtiPXkoYikuY2xvbmUoKTt0cnl7Yi5lbXB0eSgpfWNhdGNoKGEpe312YXIgYz15KFwiPGRpdj5cIikuYXBwZW5kKGIpLmh0bWwoKTt0cnl7cmV0dXJuIDM9PT1iWzBdLm5vZGVUeXBlP0soYyk6Yy5tYXRjaCgvXig8W14+XSs+KS8pWzFdLnJlcGxhY2UoL148KFtcXHdcXC1dKykvLFxuZnVuY3Rpb24oYSxiKXtyZXR1cm5cIjxcIitLKGIpfSl9Y2F0Y2goZCl7cmV0dXJuIEsoYyl9fWZ1bmN0aW9uIFhiKGIpe3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGIpfWNhdGNoKGEpe319ZnVuY3Rpb24gWWIoYil7dmFyIGE9e30sYyxkO3EoKGJ8fFwiXCIpLnNwbGl0KFwiJlwiKSxmdW5jdGlvbihiKXtiJiYoYz1iLnNwbGl0KFwiPVwiKSxkPVhiKGNbMF0pLEIoZCkmJihiPUIoY1sxXSk/WGIoY1sxXSk6ITAsYVtkXT9NKGFbZF0pP2FbZF0ucHVzaChiKTphW2RdPVthW2RdLGJdOmFbZF09YikpfSk7cmV0dXJuIGF9ZnVuY3Rpb24gWmIoYil7dmFyIGE9W107cShiLGZ1bmN0aW9uKGIsZCl7TShiKT9xKGIsZnVuY3Rpb24oYil7YS5wdXNoKHphKGQsITApKyghMD09PWI/XCJcIjpcIj1cIit6YShiLCEwKSkpfSk6YS5wdXNoKHphKGQsITApKyghMD09PWI/XCJcIjpcIj1cIit6YShiLCEwKSkpfSk7cmV0dXJuIGEubGVuZ3RoP2Euam9pbihcIiZcIik6XCJcIn1mdW5jdGlvbiB3YihiKXtyZXR1cm4gemEoYixcbiEwKS5yZXBsYWNlKC8lMjYvZ2ksXCImXCIpLnJlcGxhY2UoLyUzRC9naSxcIj1cIikucmVwbGFjZSgvJTJCL2dpLFwiK1wiKX1mdW5jdGlvbiB6YShiLGEpe3JldHVybiBlbmNvZGVVUklDb21wb25lbnQoYikucmVwbGFjZSgvJTQwL2dpLFwiQFwiKS5yZXBsYWNlKC8lM0EvZ2ksXCI6XCIpLnJlcGxhY2UoLyUyNC9nLFwiJFwiKS5yZXBsYWNlKC8lMkMvZ2ksXCIsXCIpLnJlcGxhY2UoLyUyMC9nLGE/XCIlMjBcIjpcIitcIil9ZnVuY3Rpb24gV2MoYixhKXtmdW5jdGlvbiBjKGEpe2EmJmQucHVzaChhKX12YXIgZD1bYl0sZSxnLGY9W1wibmc6YXBwXCIsXCJuZy1hcHBcIixcIngtbmctYXBwXCIsXCJkYXRhLW5nLWFwcFwiXSxoPS9cXHNuZ1s6XFwtXWFwcCg6XFxzKihbXFx3XFxkX10rKTs/KT9cXHMvO3EoZixmdW5jdGlvbihhKXtmW2FdPSEwO2MoVS5nZXRFbGVtZW50QnlJZChhKSk7YT1hLnJlcGxhY2UoXCI6XCIsXCJcXFxcOlwiKTtiLnF1ZXJ5U2VsZWN0b3JBbGwmJihxKGIucXVlcnlTZWxlY3RvckFsbChcIi5cIithKSxjKSxxKGIucXVlcnlTZWxlY3RvckFsbChcIi5cIitcbmErXCJcXFxcOlwiKSxjKSxxKGIucXVlcnlTZWxlY3RvckFsbChcIltcIithK1wiXVwiKSxjKSl9KTtxKGQsZnVuY3Rpb24oYSl7aWYoIWUpe3ZhciBiPWguZXhlYyhcIiBcIithLmNsYXNzTmFtZStcIiBcIik7Yj8oZT1hLGc9KGJbMl18fFwiXCIpLnJlcGxhY2UoL1xccysvZyxcIixcIikpOnEoYS5hdHRyaWJ1dGVzLGZ1bmN0aW9uKGIpeyFlJiZmW2IubmFtZV0mJihlPWEsZz1iLnZhbHVlKX0pfX0pO2UmJmEoZSxnP1tnXTpbXSl9ZnVuY3Rpb24gJGIoYixhKXt2YXIgYz1mdW5jdGlvbigpe2I9eShiKTtpZihiLmluamVjdG9yKCkpe3ZhciBjPWJbMF09PT1VP1wiZG9jdW1lbnRcIjpoYShiKTt0aHJvdyBQYShcImJ0c3RycGRcIixjKTt9YT1hfHxbXTthLnVuc2hpZnQoW1wiJHByb3ZpZGVcIixmdW5jdGlvbihhKXthLnZhbHVlKFwiJHJvb3RFbGVtZW50XCIsYil9XSk7YS51bnNoaWZ0KFwibmdcIik7Yz1hYyhhKTtjLmludm9rZShbXCIkcm9vdFNjb3BlXCIsXCIkcm9vdEVsZW1lbnRcIixcIiRjb21waWxlXCIsXCIkaW5qZWN0b3JcIixcIiRhbmltYXRlXCIsXG5mdW5jdGlvbihhLGIsYyxkLGUpe2EuJGFwcGx5KGZ1bmN0aW9uKCl7Yi5kYXRhKFwiJGluamVjdG9yXCIsZCk7YyhiKShhKX0pfV0pO3JldHVybiBjfSxkPS9eTkdfREVGRVJfQk9PVFNUUkFQIS87aWYoTyYmIWQudGVzdChPLm5hbWUpKXJldHVybiBjKCk7Ty5uYW1lPU8ubmFtZS5yZXBsYWNlKGQsXCJcIik7RWEucmVzdW1lQm9vdHN0cmFwPWZ1bmN0aW9uKGIpe3EoYixmdW5jdGlvbihiKXthLnB1c2goYil9KTtjKCl9fWZ1bmN0aW9uIGZiKGIsYSl7YT1hfHxcIl9cIjtyZXR1cm4gYi5yZXBsYWNlKFhjLGZ1bmN0aW9uKGIsZCl7cmV0dXJuKGQ/YTpcIlwiKStiLnRvTG93ZXJDYXNlKCl9KX1mdW5jdGlvbiB4YihiLGEsYyl7aWYoIWIpdGhyb3cgUGEoXCJhcmVxXCIsYXx8XCI/XCIsY3x8XCJyZXF1aXJlZFwiKTtyZXR1cm4gYn1mdW5jdGlvbiBSYShiLGEsYyl7YyYmTShiKSYmKGI9YltiLmxlbmd0aC0xXSk7eGIoUChiKSxhLFwibm90IGEgZnVuY3Rpb24sIGdvdCBcIisoYiYmXCJvYmplY3RcIj09dHlwZW9mIGI/XG5iLmNvbnN0cnVjdG9yLm5hbWV8fFwiT2JqZWN0XCI6dHlwZW9mIGIpKTtyZXR1cm4gYn1mdW5jdGlvbiBBYShiLGEpe2lmKFwiaGFzT3duUHJvcGVydHlcIj09PWIpdGhyb3cgUGEoXCJiYWRuYW1lXCIsYSk7fWZ1bmN0aW9uIGJjKGIsYSxjKXtpZighYSlyZXR1cm4gYjthPWEuc3BsaXQoXCIuXCIpO2Zvcih2YXIgZCxlPWIsZz1hLmxlbmd0aCxmPTA7ZjxnO2YrKylkPWFbZl0sYiYmKGI9KGU9YilbZF0pO3JldHVybiFjJiZQKGIpP2ViKGUsYik6Yn1mdW5jdGlvbiB5YihiKXt2YXIgYT1iWzBdO2I9YltiLmxlbmd0aC0xXTtpZihhPT09YilyZXR1cm4geShhKTt2YXIgYz1bYV07ZG97YT1hLm5leHRTaWJsaW5nO2lmKCFhKWJyZWFrO2MucHVzaChhKX13aGlsZShhIT09Yik7cmV0dXJuIHkoYyl9ZnVuY3Rpb24gWWMoYil7dmFyIGE9dChcIiRpbmplY3RvclwiKSxjPXQoXCJuZ1wiKTtiPWIuYW5ndWxhcnx8KGIuYW5ndWxhcj17fSk7Yi4kJG1pbkVycj1iLiQkbWluRXJyfHx0O3JldHVybiBiLm1vZHVsZXx8XG4oYi5tb2R1bGU9ZnVuY3Rpb24oKXt2YXIgYj17fTtyZXR1cm4gZnVuY3Rpb24oZSxnLGYpe2lmKFwiaGFzT3duUHJvcGVydHlcIj09PWUpdGhyb3cgYyhcImJhZG5hbWVcIixcIm1vZHVsZVwiKTtnJiZiLmhhc093blByb3BlcnR5KGUpJiYoYltlXT1udWxsKTtyZXR1cm4gYltlXXx8KGJbZV09ZnVuY3Rpb24oKXtmdW5jdGlvbiBiKGEsZCxlKXtyZXR1cm4gZnVuY3Rpb24oKXtjW2V8fFwicHVzaFwiXShbYSxkLGFyZ3VtZW50c10pO3JldHVybiBufX1pZighZyl0aHJvdyBhKFwibm9tb2RcIixlKTt2YXIgYz1bXSxkPVtdLG09YihcIiRpbmplY3RvclwiLFwiaW52b2tlXCIpLG49e19pbnZva2VRdWV1ZTpjLF9ydW5CbG9ja3M6ZCxyZXF1aXJlczpnLG5hbWU6ZSxwcm92aWRlcjpiKFwiJHByb3ZpZGVcIixcInByb3ZpZGVyXCIpLGZhY3Rvcnk6YihcIiRwcm92aWRlXCIsXCJmYWN0b3J5XCIpLHNlcnZpY2U6YihcIiRwcm92aWRlXCIsXCJzZXJ2aWNlXCIpLHZhbHVlOmIoXCIkcHJvdmlkZVwiLFwidmFsdWVcIiksY29uc3RhbnQ6YihcIiRwcm92aWRlXCIsXG5cImNvbnN0YW50XCIsXCJ1bnNoaWZ0XCIpLGFuaW1hdGlvbjpiKFwiJGFuaW1hdGVQcm92aWRlclwiLFwicmVnaXN0ZXJcIiksZmlsdGVyOmIoXCIkZmlsdGVyUHJvdmlkZXJcIixcInJlZ2lzdGVyXCIpLGNvbnRyb2xsZXI6YihcIiRjb250cm9sbGVyUHJvdmlkZXJcIixcInJlZ2lzdGVyXCIpLGRpcmVjdGl2ZTpiKFwiJGNvbXBpbGVQcm92aWRlclwiLFwiZGlyZWN0aXZlXCIpLGNvbmZpZzptLHJ1bjpmdW5jdGlvbihhKXtkLnB1c2goYSk7cmV0dXJuIHRoaXN9fTtmJiZtKGYpO3JldHVybiBufSgpKX19KCkpfWZ1bmN0aW9uIFpjKGIpe0QoYix7Ym9vdHN0cmFwOiRiLGNvcHk6YmEsZXh0ZW5kOkQsZXF1YWxzOnhhLGVsZW1lbnQ6eSxmb3JFYWNoOnEsaW5qZWN0b3I6YWMsbm9vcDpDLGJpbmQ6ZWIsdG9Kc29uOnFhLGZyb21Kc29uOldiLGlkZW50aXR5OkRhLGlzVW5kZWZpbmVkOkUsaXNEZWZpbmVkOkIsaXNTdHJpbmc6dyxpc0Z1bmN0aW9uOlAsaXNPYmplY3Q6WCxpc051bWJlcjp2Yixpc0VsZW1lbnQ6VGMsaXNBcnJheTpNLFxudmVyc2lvbjokYyxpc0RhdGU6TmEsbG93ZXJjYXNlOkssdXBwZXJjYXNlOkZhLGNhbGxiYWNrczp7Y291bnRlcjowfSwkJG1pbkVycjp0LCQkY3NwOlZifSk7U2E9WWMoTyk7dHJ5e1NhKFwibmdMb2NhbGVcIil9Y2F0Y2goYSl7U2EoXCJuZ0xvY2FsZVwiLFtdKS5wcm92aWRlcihcIiRsb2NhbGVcIixhZCl9U2EoXCJuZ1wiLFtcIm5nTG9jYWxlXCJdLFtcIiRwcm92aWRlXCIsZnVuY3Rpb24oYSl7YS5wcm92aWRlcih7JCRzYW5pdGl6ZVVyaTpiZH0pO2EucHJvdmlkZXIoXCIkY29tcGlsZVwiLGNjKS5kaXJlY3RpdmUoe2E6Y2QsaW5wdXQ6ZGMsdGV4dGFyZWE6ZGMsZm9ybTpkZCxzY3JpcHQ6ZWQsc2VsZWN0OmZkLHN0eWxlOmdkLG9wdGlvbjpoZCxuZ0JpbmQ6aWQsbmdCaW5kSHRtbDpqZCxuZ0JpbmRUZW1wbGF0ZTprZCxuZ0NsYXNzOmxkLG5nQ2xhc3NFdmVuOm1kLG5nQ2xhc3NPZGQ6bmQsbmdDbG9hazpvZCxuZ0NvbnRyb2xsZXI6cGQsbmdGb3JtOnFkLG5nSGlkZTpyZCxuZ0lmOnNkLG5nSW5jbHVkZTp0ZCxcbm5nSW5pdDp1ZCxuZ05vbkJpbmRhYmxlOnZkLG5nUGx1cmFsaXplOndkLG5nUmVwZWF0OnhkLG5nU2hvdzp5ZCxuZ1N0eWxlOnpkLG5nU3dpdGNoOkFkLG5nU3dpdGNoV2hlbjpCZCxuZ1N3aXRjaERlZmF1bHQ6Q2QsbmdPcHRpb25zOkRkLG5nVHJhbnNjbHVkZTpFZCxuZ01vZGVsOkZkLG5nTGlzdDpHZCxuZ0NoYW5nZTpIZCxyZXF1aXJlZDplYyxuZ1JlcXVpcmVkOmVjLG5nVmFsdWU6SWR9KS5kaXJlY3RpdmUoe25nSW5jbHVkZTpKZH0pLmRpcmVjdGl2ZSh6YikuZGlyZWN0aXZlKGZjKTthLnByb3ZpZGVyKHskYW5jaG9yU2Nyb2xsOktkLCRhbmltYXRlOkxkLCRicm93c2VyOk1kLCRjYWNoZUZhY3Rvcnk6TmQsJGNvbnRyb2xsZXI6T2QsJGRvY3VtZW50OlBkLCRleGNlcHRpb25IYW5kbGVyOlFkLCRmaWx0ZXI6Z2MsJGludGVycG9sYXRlOlJkLCRpbnRlcnZhbDpTZCwkaHR0cDpUZCwkaHR0cEJhY2tlbmQ6VWQsJGxvY2F0aW9uOlZkLCRsb2c6V2QsJHBhcnNlOlhkLCRyb290U2NvcGU6WWQsXG4kcTpaZCwkc2NlOiRkLCRzY2VEZWxlZ2F0ZTphZSwkc25pZmZlcjpiZSwkdGVtcGxhdGVDYWNoZTpjZSwkdGltZW91dDpkZSwkd2luZG93OmVlLCQkckFGOmZlLCQkYXN5bmNDYWxsYmFjazpnZX0pfV0pfWZ1bmN0aW9uIFRhKGIpe3JldHVybiBiLnJlcGxhY2UoaGUsZnVuY3Rpb24oYSxiLGQsZSl7cmV0dXJuIGU/ZC50b1VwcGVyQ2FzZSgpOmR9KS5yZXBsYWNlKGllLFwiTW96JDFcIil9ZnVuY3Rpb24gQWIoYixhLGMsZCl7ZnVuY3Rpb24gZShiKXt2YXIgZT1jJiZiP1t0aGlzLmZpbHRlcihiKV06W3RoaXNdLGw9YSxrLG0sbixwLHIsejtpZighZHx8bnVsbCE9Yilmb3IoO2UubGVuZ3RoOylmb3Ioaz1lLnNoaWZ0KCksbT0wLG49ay5sZW5ndGg7bTxuO20rKylmb3IocD15KGtbbV0pLGw/cC50cmlnZ2VySGFuZGxlcihcIiRkZXN0cm95XCIpOmw9IWwscj0wLHA9KHo9cC5jaGlsZHJlbigpKS5sZW5ndGg7cjxwO3IrKyllLnB1c2goR2EoeltyXSkpO3JldHVybiBnLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1cbnZhciBnPUdhLmZuW2JdLGc9Zy4kb3JpZ2luYWx8fGc7ZS4kb3JpZ2luYWw9ZztHYS5mbltiXT1lfWZ1bmN0aW9uIE4oYil7aWYoYiBpbnN0YW5jZW9mIE4pcmV0dXJuIGI7dyhiKSYmKGI9Y2EoYikpO2lmKCEodGhpcyBpbnN0YW5jZW9mIE4pKXtpZih3KGIpJiZcIjxcIiE9Yi5jaGFyQXQoMCkpdGhyb3cgQmIoXCJub3NlbFwiKTtyZXR1cm4gbmV3IE4oYil9aWYodyhiKSl7dmFyIGE9YjtiPVU7dmFyIGM7aWYoYz1qZS5leGVjKGEpKWI9W2IuY3JlYXRlRWxlbWVudChjWzFdKV07ZWxzZXt2YXIgZD1iLGU7Yj1kLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtjPVtdO2lmKENiLnRlc3QoYSkpe2Q9Yi5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO2U9KGtlLmV4ZWMoYSl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpO2U9ZWFbZV18fGVhLl9kZWZhdWx0O2QuaW5uZXJIVE1MPVwiPGRpdj4mIzE2MDs8L2Rpdj5cIitlWzFdK2EucmVwbGFjZShsZSxcIjwkMT48LyQyPlwiKStlWzJdO1xuZC5yZW1vdmVDaGlsZChkLmZpcnN0Q2hpbGQpO2ZvcihhPWVbMF07YS0tOylkPWQubGFzdENoaWxkO2E9MDtmb3IoZT1kLmNoaWxkTm9kZXMubGVuZ3RoO2E8ZTsrK2EpYy5wdXNoKGQuY2hpbGROb2Rlc1thXSk7ZD1iLmZpcnN0Q2hpbGQ7ZC50ZXh0Q29udGVudD1cIlwifWVsc2UgYy5wdXNoKGQuY3JlYXRlVGV4dE5vZGUoYSkpO2IudGV4dENvbnRlbnQ9XCJcIjtiLmlubmVySFRNTD1cIlwiO2I9Y31EYih0aGlzLGIpO3koVS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkpLmFwcGVuZCh0aGlzKX1lbHNlIERiKHRoaXMsYil9ZnVuY3Rpb24gRWIoYil7cmV0dXJuIGIuY2xvbmVOb2RlKCEwKX1mdW5jdGlvbiBIYShiKXtoYyhiKTt2YXIgYT0wO2ZvcihiPWIuY2hpbGROb2Rlc3x8W107YTxiLmxlbmd0aDthKyspSGEoYlthXSl9ZnVuY3Rpb24gaWMoYixhLGMsZCl7aWYoQihkKSl0aHJvdyBCYihcIm9mZmFyZ3NcIik7dmFyIGU9bGEoYixcImV2ZW50c1wiKTtsYShiLFwiaGFuZGxlXCIpJiYoRShhKT9xKGUsXG5mdW5jdGlvbihhLGMpe0ZiKGIsYyxhKTtkZWxldGUgZVtjXX0pOnEoYS5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSl7RShjKT8oRmIoYixhLGVbYV0pLGRlbGV0ZSBlW2FdKTpPYShlW2FdfHxbXSxjKX0pKX1mdW5jdGlvbiBoYyhiLGEpe3ZhciBjPWJbZ2JdLGQ9VWFbY107ZCYmKGE/ZGVsZXRlIFVhW2NdLmRhdGFbYV06KGQuaGFuZGxlJiYoZC5ldmVudHMuJGRlc3Ryb3kmJmQuaGFuZGxlKHt9LFwiJGRlc3Ryb3lcIiksaWMoYikpLGRlbGV0ZSBVYVtjXSxiW2diXT1zKSl9ZnVuY3Rpb24gbGEoYixhLGMpe3ZhciBkPWJbZ2JdLGQ9VWFbZHx8LTFdO2lmKEIoYykpZHx8KGJbZ2JdPWQ9KyttZSxkPVVhW2RdPXt9KSxkW2FdPWM7ZWxzZSByZXR1cm4gZCYmZFthXX1mdW5jdGlvbiBqYyhiLGEsYyl7dmFyIGQ9bGEoYixcImRhdGFcIiksZT1CKGMpLGc9IWUmJkIoYSksZj1nJiYhWChhKTtkfHxmfHxsYShiLFwiZGF0YVwiLGQ9e30pO2lmKGUpZFthXT1jO2Vsc2UgaWYoZyl7aWYoZilyZXR1cm4gZCYmZFthXTtcbkQoZCxhKX1lbHNlIHJldHVybiBkfWZ1bmN0aW9uIEdiKGIsYSl7cmV0dXJuIGIuZ2V0QXR0cmlidXRlPy0xPChcIiBcIisoYi5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIikrXCIgXCIpLnJlcGxhY2UoL1tcXG5cXHRdL2csXCIgXCIpLmluZGV4T2YoXCIgXCIrYStcIiBcIik6ITF9ZnVuY3Rpb24gaGIoYixhKXthJiZiLnNldEF0dHJpYnV0ZSYmcShhLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhKXtiLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsY2EoKFwiIFwiKyhiLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKStcIiBcIikucmVwbGFjZSgvW1xcblxcdF0vZyxcIiBcIikucmVwbGFjZShcIiBcIitjYShhKStcIiBcIixcIiBcIikpKX0pfWZ1bmN0aW9uIGliKGIsYSl7aWYoYSYmYi5zZXRBdHRyaWJ1dGUpe3ZhciBjPShcIiBcIisoYi5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIikrXCIgXCIpLnJlcGxhY2UoL1tcXG5cXHRdL2csXCIgXCIpO3EoYS5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSl7YT1jYShhKTstMT09PWMuaW5kZXhPZihcIiBcIithK1wiIFwiKSYmXG4oYys9YStcIiBcIil9KTtiLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsY2EoYykpfX1mdW5jdGlvbiBEYihiLGEpe2lmKGEpe2E9YS5ub2RlTmFtZXx8IUIoYS5sZW5ndGgpfHxDYShhKT9bYV06YTtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKyliLnB1c2goYVtjXSl9fWZ1bmN0aW9uIGtjKGIsYSl7cmV0dXJuIGpiKGIsXCIkXCIrKGF8fFwibmdDb250cm9sbGVyXCIpK1wiQ29udHJvbGxlclwiKX1mdW5jdGlvbiBqYihiLGEsYyl7Yj15KGIpOzk9PWJbMF0ubm9kZVR5cGUmJihiPWIuZmluZChcImh0bWxcIikpO2ZvcihhPU0oYSk/YTpbYV07Yi5sZW5ndGg7KXtmb3IodmFyIGQ9YlswXSxlPTAsZz1hLmxlbmd0aDtlPGc7ZSsrKWlmKChjPWIuZGF0YShhW2VdKSkhPT1zKXJldHVybiBjO2I9eShkLnBhcmVudE5vZGV8fDExPT09ZC5ub2RlVHlwZSYmZC5ob3N0KX19ZnVuY3Rpb24gbGMoYil7Zm9yKHZhciBhPTAsYz1iLmNoaWxkTm9kZXM7YTxjLmxlbmd0aDthKyspSGEoY1thXSk7Zm9yKDtiLmZpcnN0Q2hpbGQ7KWIucmVtb3ZlQ2hpbGQoYi5maXJzdENoaWxkKX1cbmZ1bmN0aW9uIG1jKGIsYSl7dmFyIGM9a2JbYS50b0xvd2VyQ2FzZSgpXTtyZXR1cm4gYyYmbmNbYi5ub2RlTmFtZV0mJmN9ZnVuY3Rpb24gbmUoYixhKXt2YXIgYz1mdW5jdGlvbihjLGUpe2MucHJldmVudERlZmF1bHR8fChjLnByZXZlbnREZWZhdWx0PWZ1bmN0aW9uKCl7Yy5yZXR1cm5WYWx1ZT0hMX0pO2Muc3RvcFByb3BhZ2F0aW9ufHwoYy5zdG9wUHJvcGFnYXRpb249ZnVuY3Rpb24oKXtjLmNhbmNlbEJ1YmJsZT0hMH0pO2MudGFyZ2V0fHwoYy50YXJnZXQ9Yy5zcmNFbGVtZW50fHxVKTtpZihFKGMuZGVmYXVsdFByZXZlbnRlZCkpe3ZhciBnPWMucHJldmVudERlZmF1bHQ7Yy5wcmV2ZW50RGVmYXVsdD1mdW5jdGlvbigpe2MuZGVmYXVsdFByZXZlbnRlZD0hMDtnLmNhbGwoYyl9O2MuZGVmYXVsdFByZXZlbnRlZD0hMX1jLmlzRGVmYXVsdFByZXZlbnRlZD1mdW5jdGlvbigpe3JldHVybiBjLmRlZmF1bHRQcmV2ZW50ZWR8fCExPT09Yy5yZXR1cm5WYWx1ZX07dmFyIGY9VWIoYVtlfHxcbmMudHlwZV18fFtdKTtxKGYsZnVuY3Rpb24oYSl7YS5jYWxsKGIsYyl9KTs4Pj1TPyhjLnByZXZlbnREZWZhdWx0PW51bGwsYy5zdG9wUHJvcGFnYXRpb249bnVsbCxjLmlzRGVmYXVsdFByZXZlbnRlZD1udWxsKTooZGVsZXRlIGMucHJldmVudERlZmF1bHQsZGVsZXRlIGMuc3RvcFByb3BhZ2F0aW9uLGRlbGV0ZSBjLmlzRGVmYXVsdFByZXZlbnRlZCl9O2MuZWxlbT1iO3JldHVybiBjfWZ1bmN0aW9uIElhKGIpe3ZhciBhPXR5cGVvZiBiLGM7XCJvYmplY3RcIj09YSYmbnVsbCE9PWI/XCJmdW5jdGlvblwiPT10eXBlb2YoYz1iLiQkaGFzaEtleSk/Yz1iLiQkaGFzaEtleSgpOmM9PT1zJiYoYz1iLiQkaGFzaEtleT1iYigpKTpjPWI7cmV0dXJuIGErXCI6XCIrY31mdW5jdGlvbiBWYShiKXtxKGIsdGhpcy5wdXQsdGhpcyl9ZnVuY3Rpb24gb2MoYil7dmFyIGEsYztcImZ1bmN0aW9uXCI9PXR5cGVvZiBiPyhhPWIuJGluamVjdCl8fChhPVtdLGIubGVuZ3RoJiYoYz1iLnRvU3RyaW5nKCkucmVwbGFjZShvZSxcblwiXCIpLGM9Yy5tYXRjaChwZSkscShjWzFdLnNwbGl0KHFlKSxmdW5jdGlvbihiKXtiLnJlcGxhY2UocmUsZnVuY3Rpb24oYixjLGQpe2EucHVzaChkKX0pfSkpLGIuJGluamVjdD1hKTpNKGIpPyhjPWIubGVuZ3RoLTEsUmEoYltjXSxcImZuXCIpLGE9Yi5zbGljZSgwLGMpKTpSYShiLFwiZm5cIiwhMCk7cmV0dXJuIGF9ZnVuY3Rpb24gYWMoYil7ZnVuY3Rpb24gYShhKXtyZXR1cm4gZnVuY3Rpb24oYixjKXtpZihYKGIpKXEoYixSYihhKSk7ZWxzZSByZXR1cm4gYShiLGMpfX1mdW5jdGlvbiBjKGEsYil7QWEoYSxcInNlcnZpY2VcIik7aWYoUChiKXx8TShiKSliPW4uaW5zdGFudGlhdGUoYik7aWYoIWIuJGdldCl0aHJvdyBXYShcInBnZXRcIixhKTtyZXR1cm4gbVthK2hdPWJ9ZnVuY3Rpb24gZChhLGIpe3JldHVybiBjKGEseyRnZXQ6Yn0pfWZ1bmN0aW9uIGUoYSl7dmFyIGI9W10sYyxkLGcsaDtxKGEsZnVuY3Rpb24oYSl7aWYoIWsuZ2V0KGEpKXtrLnB1dChhLCEwKTt0cnl7aWYodyhhKSlmb3IoYz1cblNhKGEpLGI9Yi5jb25jYXQoZShjLnJlcXVpcmVzKSkuY29uY2F0KGMuX3J1bkJsb2NrcyksZD1jLl9pbnZva2VRdWV1ZSxnPTAsaD1kLmxlbmd0aDtnPGg7ZysrKXt2YXIgZj1kW2ddLGw9bi5nZXQoZlswXSk7bFtmWzFdXS5hcHBseShsLGZbMl0pfWVsc2UgUChhKT9iLnB1c2gobi5pbnZva2UoYSkpOk0oYSk/Yi5wdXNoKG4uaW52b2tlKGEpKTpSYShhLFwibW9kdWxlXCIpfWNhdGNoKG0pe3Rocm93IE0oYSkmJihhPWFbYS5sZW5ndGgtMV0pLG0ubWVzc2FnZSYmKG0uc3RhY2smJi0xPT1tLnN0YWNrLmluZGV4T2YobS5tZXNzYWdlKSkmJihtPW0ubWVzc2FnZStcIlxcblwiK20uc3RhY2spLFdhKFwibW9kdWxlcnJcIixhLG0uc3RhY2t8fG0ubWVzc2FnZXx8bSk7fX19KTtyZXR1cm4gYn1mdW5jdGlvbiBnKGEsYil7ZnVuY3Rpb24gYyhkKXtpZihhLmhhc093blByb3BlcnR5KGQpKXtpZihhW2RdPT09Zil0aHJvdyBXYShcImNkZXBcIixsLmpvaW4oXCIgPC0gXCIpKTtyZXR1cm4gYVtkXX10cnl7cmV0dXJuIGwudW5zaGlmdChkKSxcbmFbZF09ZixhW2RdPWIoZCl9Y2F0Y2goZSl7dGhyb3cgYVtkXT09PWYmJmRlbGV0ZSBhW2RdLGU7fWZpbmFsbHl7bC5zaGlmdCgpfX1mdW5jdGlvbiBkKGEsYixlKXt2YXIgZz1bXSxoPW9jKGEpLGYsbCxrO2w9MDtmb3IoZj1oLmxlbmd0aDtsPGY7bCsrKXtrPWhbbF07aWYoXCJzdHJpbmdcIiE9PXR5cGVvZiBrKXRocm93IFdhKFwiaXRrblwiLGspO2cucHVzaChlJiZlLmhhc093blByb3BlcnR5KGspP2Vba106YyhrKSl9YS4kaW5qZWN0fHwoYT1hW2ZdKTtyZXR1cm4gYS5hcHBseShiLGcpfXJldHVybntpbnZva2U6ZCxpbnN0YW50aWF0ZTpmdW5jdGlvbihhLGIpe3ZhciBjPWZ1bmN0aW9uKCl7fSxlO2MucHJvdG90eXBlPShNKGEpP2FbYS5sZW5ndGgtMV06YSkucHJvdG90eXBlO2M9bmV3IGM7ZT1kKGEsYyxiKTtyZXR1cm4gWChlKXx8UChlKT9lOmN9LGdldDpjLGFubm90YXRlOm9jLGhhczpmdW5jdGlvbihiKXtyZXR1cm4gbS5oYXNPd25Qcm9wZXJ0eShiK2gpfHxhLmhhc093blByb3BlcnR5KGIpfX19XG52YXIgZj17fSxoPVwiUHJvdmlkZXJcIixsPVtdLGs9bmV3IFZhLG09eyRwcm92aWRlOntwcm92aWRlcjphKGMpLGZhY3Rvcnk6YShkKSxzZXJ2aWNlOmEoZnVuY3Rpb24oYSxiKXtyZXR1cm4gZChhLFtcIiRpbmplY3RvclwiLGZ1bmN0aW9uKGEpe3JldHVybiBhLmluc3RhbnRpYXRlKGIpfV0pfSksdmFsdWU6YShmdW5jdGlvbihhLGIpe3JldHVybiBkKGEsYWEoYikpfSksY29uc3RhbnQ6YShmdW5jdGlvbihhLGIpe0FhKGEsXCJjb25zdGFudFwiKTttW2FdPWI7cFthXT1ifSksZGVjb3JhdG9yOmZ1bmN0aW9uKGEsYil7dmFyIGM9bi5nZXQoYStoKSxkPWMuJGdldDtjLiRnZXQ9ZnVuY3Rpb24oKXt2YXIgYT1yLmludm9rZShkLGMpO3JldHVybiByLmludm9rZShiLG51bGwseyRkZWxlZ2F0ZTphfSl9fX19LG49bS4kaW5qZWN0b3I9ZyhtLGZ1bmN0aW9uKCl7dGhyb3cgV2EoXCJ1bnByXCIsbC5qb2luKFwiIDwtIFwiKSk7fSkscD17fSxyPXAuJGluamVjdG9yPWcocCxmdW5jdGlvbihhKXthPW4uZ2V0KGErXG5oKTtyZXR1cm4gci5pbnZva2UoYS4kZ2V0LGEpfSk7cShlKGIpLGZ1bmN0aW9uKGEpe3IuaW52b2tlKGF8fEMpfSk7cmV0dXJuIHJ9ZnVuY3Rpb24gS2QoKXt2YXIgYj0hMDt0aGlzLmRpc2FibGVBdXRvU2Nyb2xsaW5nPWZ1bmN0aW9uKCl7Yj0hMX07dGhpcy4kZ2V0PVtcIiR3aW5kb3dcIixcIiRsb2NhdGlvblwiLFwiJHJvb3RTY29wZVwiLGZ1bmN0aW9uKGEsYyxkKXtmdW5jdGlvbiBlKGEpe3ZhciBiPW51bGw7cShhLGZ1bmN0aW9uKGEpe2J8fFwiYVwiIT09SyhhLm5vZGVOYW1lKXx8KGI9YSl9KTtyZXR1cm4gYn1mdW5jdGlvbiBnKCl7dmFyIGI9Yy5oYXNoKCksZDtiPyhkPWYuZ2V0RWxlbWVudEJ5SWQoYikpP2Quc2Nyb2xsSW50b1ZpZXcoKTooZD1lKGYuZ2V0RWxlbWVudHNCeU5hbWUoYikpKT9kLnNjcm9sbEludG9WaWV3KCk6XCJ0b3BcIj09PWImJmEuc2Nyb2xsVG8oMCwwKTphLnNjcm9sbFRvKDAsMCl9dmFyIGY9YS5kb2N1bWVudDtiJiZkLiR3YXRjaChmdW5jdGlvbigpe3JldHVybiBjLmhhc2goKX0sXG5mdW5jdGlvbigpe2QuJGV2YWxBc3luYyhnKX0pO3JldHVybiBnfV19ZnVuY3Rpb24gZ2UoKXt0aGlzLiRnZXQ9W1wiJCRyQUZcIixcIiR0aW1lb3V0XCIsZnVuY3Rpb24oYixhKXtyZXR1cm4gYi5zdXBwb3J0ZWQ/ZnVuY3Rpb24oYSl7cmV0dXJuIGIoYSl9OmZ1bmN0aW9uKGIpe3JldHVybiBhKGIsMCwhMSl9fV19ZnVuY3Rpb24gc2UoYixhLGMsZCl7ZnVuY3Rpb24gZShhKXt0cnl7YS5hcHBseShudWxsLHlhLmNhbGwoYXJndW1lbnRzLDEpKX1maW5hbGx5e2lmKHotLSwwPT09eilmb3IoO3UubGVuZ3RoOyl0cnl7dS5wb3AoKSgpfWNhdGNoKGIpe2MuZXJyb3IoYil9fX1mdW5jdGlvbiBnKGEsYil7KGZ1bmN0aW9uIFQoKXtxKEYsZnVuY3Rpb24oYSl7YSgpfSk7dj1iKFQsYSl9KSgpfWZ1bmN0aW9uIGYoKXt4PW51bGw7SiE9aC51cmwoKSYmKEo9aC51cmwoKSxxKG1hLGZ1bmN0aW9uKGEpe2EoaC51cmwoKSl9KSl9dmFyIGg9dGhpcyxsPWFbMF0saz1iLmxvY2F0aW9uLG09Yi5oaXN0b3J5LFxubj1iLnNldFRpbWVvdXQscD1iLmNsZWFyVGltZW91dCxyPXt9O2guaXNNb2NrPSExO3ZhciB6PTAsdT1bXTtoLiQkY29tcGxldGVPdXRzdGFuZGluZ1JlcXVlc3Q9ZTtoLiQkaW5jT3V0c3RhbmRpbmdSZXF1ZXN0Q291bnQ9ZnVuY3Rpb24oKXt6Kyt9O2gubm90aWZ5V2hlbk5vT3V0c3RhbmRpbmdSZXF1ZXN0cz1mdW5jdGlvbihhKXtxKEYsZnVuY3Rpb24oYSl7YSgpfSk7MD09PXo/YSgpOnUucHVzaChhKX07dmFyIEY9W10sdjtoLmFkZFBvbGxGbj1mdW5jdGlvbihhKXtFKHYpJiZnKDEwMCxuKTtGLnB1c2goYSk7cmV0dXJuIGF9O3ZhciBKPWsuaHJlZixBPWEuZmluZChcImJhc2VcIikseD1udWxsO2gudXJsPWZ1bmN0aW9uKGEsYyl7ayE9PWIubG9jYXRpb24mJihrPWIubG9jYXRpb24pO20hPT1iLmhpc3RvcnkmJihtPWIuaGlzdG9yeSk7aWYoYSl7aWYoSiE9YSlyZXR1cm4gSj1hLGQuaGlzdG9yeT9jP20ucmVwbGFjZVN0YXRlKG51bGwsXCJcIixhKToobS5wdXNoU3RhdGUobnVsbCxcIlwiLFxuYSksQS5hdHRyKFwiaHJlZlwiLEEuYXR0cihcImhyZWZcIikpKTooeD1hLGM/ay5yZXBsYWNlKGEpOmsuaHJlZj1hKSxofWVsc2UgcmV0dXJuIHh8fGsuaHJlZi5yZXBsYWNlKC8lMjcvZyxcIidcIil9O3ZhciBtYT1bXSxMPSExO2gub25VcmxDaGFuZ2U9ZnVuY3Rpb24oYSl7aWYoIUwpe2lmKGQuaGlzdG9yeSl5KGIpLm9uKFwicG9wc3RhdGVcIixmKTtpZihkLmhhc2hjaGFuZ2UpeShiKS5vbihcImhhc2hjaGFuZ2VcIixmKTtlbHNlIGguYWRkUG9sbEZuKGYpO0w9ITB9bWEucHVzaChhKTtyZXR1cm4gYX07aC5iYXNlSHJlZj1mdW5jdGlvbigpe3ZhciBhPUEuYXR0cihcImhyZWZcIik7cmV0dXJuIGE/YS5yZXBsYWNlKC9eKGh0dHBzP1xcOik/XFwvXFwvW15cXC9dKi8sXCJcIik6XCJcIn07dmFyIFE9e30sZGE9XCJcIixIPWguYmFzZUhyZWYoKTtoLmNvb2tpZXM9ZnVuY3Rpb24oYSxiKXt2YXIgZCxlLGcsaDtpZihhKWI9PT1zP2wuY29va2llPWVzY2FwZShhKStcIj07cGF0aD1cIitIK1wiO2V4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBHTVRcIjpcbncoYikmJihkPShsLmNvb2tpZT1lc2NhcGUoYSkrXCI9XCIrZXNjYXBlKGIpK1wiO3BhdGg9XCIrSCkubGVuZ3RoKzEsNDA5NjxkJiZjLndhcm4oXCJDb29raWUgJ1wiK2ErXCInIHBvc3NpYmx5IG5vdCBzZXQgb3Igb3ZlcmZsb3dlZCBiZWNhdXNlIGl0IHdhcyB0b28gbGFyZ2UgKFwiK2QrXCIgPiA0MDk2IGJ5dGVzKSFcIikpO2Vsc2V7aWYobC5jb29raWUhPT1kYSlmb3IoZGE9bC5jb29raWUsZD1kYS5zcGxpdChcIjsgXCIpLFE9e30sZz0wO2c8ZC5sZW5ndGg7ZysrKWU9ZFtnXSxoPWUuaW5kZXhPZihcIj1cIiksMDxoJiYoYT11bmVzY2FwZShlLnN1YnN0cmluZygwLGgpKSxRW2FdPT09cyYmKFFbYV09dW5lc2NhcGUoZS5zdWJzdHJpbmcoaCsxKSkpKTtyZXR1cm4gUX19O2guZGVmZXI9ZnVuY3Rpb24oYSxiKXt2YXIgYzt6Kys7Yz1uKGZ1bmN0aW9uKCl7ZGVsZXRlIHJbY107ZShhKX0sYnx8MCk7cltjXT0hMDtyZXR1cm4gY307aC5kZWZlci5jYW5jZWw9ZnVuY3Rpb24oYSl7cmV0dXJuIHJbYV0/KGRlbGV0ZSByW2FdLFxucChhKSxlKEMpLCEwKTohMX19ZnVuY3Rpb24gTWQoKXt0aGlzLiRnZXQ9W1wiJHdpbmRvd1wiLFwiJGxvZ1wiLFwiJHNuaWZmZXJcIixcIiRkb2N1bWVudFwiLGZ1bmN0aW9uKGIsYSxjLGQpe3JldHVybiBuZXcgc2UoYixkLGEsYyl9XX1mdW5jdGlvbiBOZCgpe3RoaXMuJGdldD1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixkKXtmdW5jdGlvbiBlKGEpe2EhPW4mJihwP3A9PWEmJihwPWEubik6cD1hLGcoYS5uLGEucCksZyhhLG4pLG49YSxuLm49bnVsbCl9ZnVuY3Rpb24gZyhhLGIpe2EhPWImJihhJiYoYS5wPWIpLGImJihiLm49YSkpfWlmKGIgaW4gYSl0aHJvdyB0KFwiJGNhY2hlRmFjdG9yeVwiKShcImlpZFwiLGIpO3ZhciBmPTAsaD1EKHt9LGQse2lkOmJ9KSxsPXt9LGs9ZCYmZC5jYXBhY2l0eXx8TnVtYmVyLk1BWF9WQUxVRSxtPXt9LG49bnVsbCxwPW51bGw7cmV0dXJuIGFbYl09e3B1dDpmdW5jdGlvbihhLGIpe2lmKGs8TnVtYmVyLk1BWF9WQUxVRSl7dmFyIGM9bVthXXx8KG1bYV09e2tleTphfSk7XG5lKGMpfWlmKCFFKGIpKXJldHVybiBhIGluIGx8fGYrKyxsW2FdPWIsZj5rJiZ0aGlzLnJlbW92ZShwLmtleSksYn0sZ2V0OmZ1bmN0aW9uKGEpe2lmKGs8TnVtYmVyLk1BWF9WQUxVRSl7dmFyIGI9bVthXTtpZighYilyZXR1cm47ZShiKX1yZXR1cm4gbFthXX0scmVtb3ZlOmZ1bmN0aW9uKGEpe2lmKGs8TnVtYmVyLk1BWF9WQUxVRSl7dmFyIGI9bVthXTtpZighYilyZXR1cm47Yj09biYmKG49Yi5wKTtiPT1wJiYocD1iLm4pO2coYi5uLGIucCk7ZGVsZXRlIG1bYV19ZGVsZXRlIGxbYV07Zi0tfSxyZW1vdmVBbGw6ZnVuY3Rpb24oKXtsPXt9O2Y9MDttPXt9O249cD1udWxsfSxkZXN0cm95OmZ1bmN0aW9uKCl7bT1oPWw9bnVsbDtkZWxldGUgYVtiXX0saW5mbzpmdW5jdGlvbigpe3JldHVybiBEKHt9LGgse3NpemU6Zn0pfX19dmFyIGE9e307Yi5pbmZvPWZ1bmN0aW9uKCl7dmFyIGI9e307cShhLGZ1bmN0aW9uKGEsZSl7YltlXT1hLmluZm8oKX0pO3JldHVybiBifTtiLmdldD1mdW5jdGlvbihiKXtyZXR1cm4gYVtiXX07XG5yZXR1cm4gYn19ZnVuY3Rpb24gY2UoKXt0aGlzLiRnZXQ9W1wiJGNhY2hlRmFjdG9yeVwiLGZ1bmN0aW9uKGIpe3JldHVybiBiKFwidGVtcGxhdGVzXCIpfV19ZnVuY3Rpb24gY2MoYixhKXt2YXIgYz17fSxkPVwiRGlyZWN0aXZlXCIsZT0vXlxccypkaXJlY3RpdmVcXDpcXHMqKFtcXGRcXHdcXC1fXSspXFxzKyguKikkLyxnPS8oKFtcXGRcXHdcXC1fXSspKD86XFw6KFteO10rKSk/Oz8pLyxmPS9eKG9uW2Etel0rfGZvcm1hY3Rpb24pJC87dGhpcy5kaXJlY3RpdmU9ZnVuY3Rpb24gbChhLGUpe0FhKGEsXCJkaXJlY3RpdmVcIik7dyhhKT8oeGIoZSxcImRpcmVjdGl2ZUZhY3RvcnlcIiksYy5oYXNPd25Qcm9wZXJ0eShhKXx8KGNbYV09W10sYi5mYWN0b3J5KGErZCxbXCIkaW5qZWN0b3JcIixcIiRleGNlcHRpb25IYW5kbGVyXCIsZnVuY3Rpb24oYixkKXt2YXIgZT1bXTtxKGNbYV0sZnVuY3Rpb24oYyxnKXt0cnl7dmFyIGY9Yi5pbnZva2UoYyk7UChmKT9mPXtjb21waWxlOmFhKGYpfTohZi5jb21waWxlJiZmLmxpbmsmJihmLmNvbXBpbGU9XG5hYShmLmxpbmspKTtmLnByaW9yaXR5PWYucHJpb3JpdHl8fDA7Zi5pbmRleD1nO2YubmFtZT1mLm5hbWV8fGE7Zi5yZXF1aXJlPWYucmVxdWlyZXx8Zi5jb250cm9sbGVyJiZmLm5hbWU7Zi5yZXN0cmljdD1mLnJlc3RyaWN0fHxcIkFcIjtlLnB1c2goZil9Y2F0Y2gobCl7ZChsKX19KTtyZXR1cm4gZX1dKSksY1thXS5wdXNoKGUpKTpxKGEsUmIobCkpO3JldHVybiB0aGlzfTt0aGlzLmFIcmVmU2FuaXRpemF0aW9uV2hpdGVsaXN0PWZ1bmN0aW9uKGIpe3JldHVybiBCKGIpPyhhLmFIcmVmU2FuaXRpemF0aW9uV2hpdGVsaXN0KGIpLHRoaXMpOmEuYUhyZWZTYW5pdGl6YXRpb25XaGl0ZWxpc3QoKX07dGhpcy5pbWdTcmNTYW5pdGl6YXRpb25XaGl0ZWxpc3Q9ZnVuY3Rpb24oYil7cmV0dXJuIEIoYik/KGEuaW1nU3JjU2FuaXRpemF0aW9uV2hpdGVsaXN0KGIpLHRoaXMpOmEuaW1nU3JjU2FuaXRpemF0aW9uV2hpdGVsaXN0KCl9O3RoaXMuJGdldD1bXCIkaW5qZWN0b3JcIixcIiRpbnRlcnBvbGF0ZVwiLFxuXCIkZXhjZXB0aW9uSGFuZGxlclwiLFwiJGh0dHBcIixcIiR0ZW1wbGF0ZUNhY2hlXCIsXCIkcGFyc2VcIixcIiRjb250cm9sbGVyXCIsXCIkcm9vdFNjb3BlXCIsXCIkZG9jdW1lbnRcIixcIiRzY2VcIixcIiRhbmltYXRlXCIsXCIkJHNhbml0aXplVXJpXCIsZnVuY3Rpb24oYSxiLG0sbixwLHIseix1LEYsdixKLEEpe2Z1bmN0aW9uIHgoYSxiLGMsZCxlKXthIGluc3RhbmNlb2YgeXx8KGE9eShhKSk7cShhLGZ1bmN0aW9uKGIsYyl7Mz09Yi5ub2RlVHlwZSYmYi5ub2RlVmFsdWUubWF0Y2goL1xcUysvKSYmKGFbY109eShiKS53cmFwKFwiPHNwYW4+PC9zcGFuPlwiKS5wYXJlbnQoKVswXSl9KTt2YXIgZz1MKGEsYixhLGMsZCxlKTttYShhLFwibmctc2NvcGVcIik7cmV0dXJuIGZ1bmN0aW9uKGIsYyxkKXt4YihiLFwic2NvcGVcIik7dmFyIGU9Yz9KYS5jbG9uZS5jYWxsKGEpOmE7cShkLGZ1bmN0aW9uKGEsYil7ZS5kYXRhKFwiJFwiK2IrXCJDb250cm9sbGVyXCIsYSl9KTtkPTA7Zm9yKHZhciBmPWUubGVuZ3RoO2Q8ZjtkKyspe3ZhciBsPVxuZVtkXS5ub2RlVHlwZTsxIT09bCYmOSE9PWx8fGUuZXEoZCkuZGF0YShcIiRzY29wZVwiLGIpfWMmJmMoZSxiKTtnJiZnKGIsZSxlKTtyZXR1cm4gZX19ZnVuY3Rpb24gbWEoYSxiKXt0cnl7YS5hZGRDbGFzcyhiKX1jYXRjaChjKXt9fWZ1bmN0aW9uIEwoYSxiLGMsZCxlLGcpe2Z1bmN0aW9uIGYoYSxjLGQsZSl7dmFyIGcsayxtLHIsbixwLHo7Zz1jLmxlbmd0aDt2YXIgST1BcnJheShnKTtmb3Iobj0wO248ZztuKyspSVtuXT1jW25dO3o9bj0wO2ZvcihwPWwubGVuZ3RoO248cDt6Kyspaz1JW3pdLGM9bFtuKytdLGc9bFtuKytdLG09eShrKSxjPyhjLnNjb3BlPyhyPWEuJG5ldygpLG0uZGF0YShcIiRzY29wZVwiLHIpKTpyPWEsKG09Yy50cmFuc2NsdWRlKXx8IWUmJmI/YyhnLHIsayxkLFEoYSxtfHxiKSk6YyhnLHIsayxkLGUpKTpnJiZnKGEsay5jaGlsZE5vZGVzLHMsZSl9Zm9yKHZhciBsPVtdLGssbSxyLG4scD0wO3A8YS5sZW5ndGg7cCsrKWs9bmV3IEhiLG09ZGEoYVtwXSxbXSxrLFxuMD09PXA/ZDpzLGUpLChnPW0ubGVuZ3RoP2lhKG0sYVtwXSxrLGIsYyxudWxsLFtdLFtdLGcpOm51bGwpJiZnLnNjb3BlJiZtYSh5KGFbcF0pLFwibmctc2NvcGVcIiksaz1nJiZnLnRlcm1pbmFsfHwhKHI9YVtwXS5jaGlsZE5vZGVzKXx8IXIubGVuZ3RoP251bGw6TChyLGc/Zy50cmFuc2NsdWRlOmIpLGwucHVzaChnLGspLG49bnx8Z3x8ayxnPW51bGw7cmV0dXJuIG4/ZjpudWxsfWZ1bmN0aW9uIFEoYSxiKXtyZXR1cm4gZnVuY3Rpb24oYyxkLGUpe3ZhciBnPSExO2N8fChjPWEuJG5ldygpLGc9Yy4kJHRyYW5zY2x1ZGVkPSEwKTtkPWIoYyxkLGUpO2lmKGcpZC5vbihcIiRkZXN0cm95XCIsZWIoYyxjLiRkZXN0cm95KSk7cmV0dXJuIGR9fWZ1bmN0aW9uIGRhKGEsYixjLGQsZil7dmFyIGs9Yy4kYXR0cixsO3N3aXRjaChhLm5vZGVUeXBlKXtjYXNlIDE6VChiLG5hKEthKGEpLnRvTG93ZXJDYXNlKCkpLFwiRVwiLGQsZik7dmFyIG0scixuO2w9YS5hdHRyaWJ1dGVzO2Zvcih2YXIgcD0wLHo9XG5sJiZsLmxlbmd0aDtwPHo7cCsrKXt2YXIgdT0hMSxGPSExO209bFtwXTtpZighU3x8ODw9U3x8bS5zcGVjaWZpZWQpe3I9bS5uYW1lO249bmEocik7Vy50ZXN0KG4pJiYocj1mYihuLnN1YnN0cig2KSxcIi1cIikpO3ZhciBKPW4ucmVwbGFjZSgvKFN0YXJ0fEVuZCkkLyxcIlwiKTtuPT09SitcIlN0YXJ0XCImJih1PXIsRj1yLnN1YnN0cigwLHIubGVuZ3RoLTUpK1wiZW5kXCIscj1yLnN1YnN0cigwLHIubGVuZ3RoLTYpKTtuPW5hKHIudG9Mb3dlckNhc2UoKSk7a1tuXT1yO2Nbbl09bT1jYShtLnZhbHVlKTttYyhhLG4pJiYoY1tuXT0hMCk7TihhLGIsbSxuKTtUKGIsbixcIkFcIixkLGYsdSxGKX19YT1hLmNsYXNzTmFtZTtpZih3KGEpJiZcIlwiIT09YSlmb3IoO2w9Zy5leGVjKGEpOyluPW5hKGxbMl0pLFQoYixuLFwiQ1wiLGQsZikmJihjW25dPWNhKGxbM10pKSxhPWEuc3Vic3RyKGwuaW5kZXgrbFswXS5sZW5ndGgpO2JyZWFrO2Nhc2UgMzp0KGIsYS5ub2RlVmFsdWUpO2JyZWFrO2Nhc2UgODp0cnl7aWYobD1cbmUuZXhlYyhhLm5vZGVWYWx1ZSkpbj1uYShsWzFdKSxUKGIsbixcIk1cIixkLGYpJiYoY1tuXT1jYShsWzJdKSl9Y2F0Y2goeCl7fX1iLnNvcnQoRSk7cmV0dXJuIGJ9ZnVuY3Rpb24gSChhLGIsYyl7dmFyIGQ9W10sZT0wO2lmKGImJmEuaGFzQXR0cmlidXRlJiZhLmhhc0F0dHJpYnV0ZShiKSl7ZG97aWYoIWEpdGhyb3cgamEoXCJ1dGVyZGlyXCIsYixjKTsxPT1hLm5vZGVUeXBlJiYoYS5oYXNBdHRyaWJ1dGUoYikmJmUrKyxhLmhhc0F0dHJpYnV0ZShjKSYmZS0tKTtkLnB1c2goYSk7YT1hLm5leHRTaWJsaW5nfXdoaWxlKDA8ZSl9ZWxzZSBkLnB1c2goYSk7cmV0dXJuIHkoZCl9ZnVuY3Rpb24gUihhLGIsYyl7cmV0dXJuIGZ1bmN0aW9uKGQsZSxnLGYsbCl7ZT1IKGVbMF0sYixjKTtyZXR1cm4gYShkLGUsZyxmLGwpfX1mdW5jdGlvbiBpYShhLGMsZCxlLGcsZixsLG4scCl7ZnVuY3Rpb24gdShhLGIsYyxkKXtpZihhKXtjJiYoYT1SKGEsYyxkKSk7YS5yZXF1aXJlPUcucmVxdWlyZTtpZihRPT09XG5HfHxHLiQkaXNvbGF0ZVNjb3BlKWE9cWMoYSx7aXNvbGF0ZVNjb3BlOiEwfSk7bC5wdXNoKGEpfWlmKGIpe2MmJihiPVIoYixjLGQpKTtiLnJlcXVpcmU9Ry5yZXF1aXJlO2lmKFE9PT1HfHxHLiQkaXNvbGF0ZVNjb3BlKWI9cWMoYix7aXNvbGF0ZVNjb3BlOiEwfSk7bi5wdXNoKGIpfX1mdW5jdGlvbiBGKGEsYixjKXt2YXIgZCxlPVwiZGF0YVwiLGc9ITE7aWYodyhhKSl7Zm9yKDtcIl5cIj09KGQ9YS5jaGFyQXQoMCkpfHxcIj9cIj09ZDspYT1hLnN1YnN0cigxKSxcIl5cIj09ZCYmKGU9XCJpbmhlcml0ZWREYXRhXCIpLGc9Z3x8XCI/XCI9PWQ7ZD1udWxsO2MmJlwiZGF0YVwiPT09ZSYmKGQ9Y1thXSk7ZD1kfHxiW2VdKFwiJFwiK2ErXCJDb250cm9sbGVyXCIpO2lmKCFkJiYhZyl0aHJvdyBqYShcImN0cmVxXCIsYSx0KTt9ZWxzZSBNKGEpJiYoZD1bXSxxKGEsZnVuY3Rpb24oYSl7ZC5wdXNoKEYoYSxiLGMpKX0pKTtyZXR1cm4gZH1mdW5jdGlvbiBKKGEsZSxnLGYscCl7ZnVuY3Rpb24gdShhLGIpe3ZhciBjOzI+YXJndW1lbnRzLmxlbmd0aCYmXG4oYj1hLGE9cyk7RCYmKGM9bGIpO3JldHVybiBwKGEsYixjKX12YXIgSSx4LHYsQSxSLEgsbGI9e30sZGE7ST1jPT09Zz9kOlViKGQsbmV3IEhiKHkoZyksZC4kYXR0cikpO3g9SS4kJGVsZW1lbnQ7aWYoUSl7dmFyIFQ9L15cXHMqKFtAPSZdKShcXD8/KVxccyooXFx3KilcXHMqJC87Zj15KGcpO0g9ZS4kbmV3KCEwKTtpYSYmaWE9PT1RLiQkb3JpZ2luYWxEaXJlY3RpdmU/Zi5kYXRhKFwiJGlzb2xhdGVTY29wZVwiLEgpOmYuZGF0YShcIiRpc29sYXRlU2NvcGVOb1RlbXBsYXRlXCIsSCk7bWEoZixcIm5nLWlzb2xhdGUtc2NvcGVcIik7cShRLnNjb3BlLGZ1bmN0aW9uKGEsYyl7dmFyIGQ9YS5tYXRjaChUKXx8W10sZz1kWzNdfHxjLGY9XCI/XCI9PWRbMl0sZD1kWzFdLGwsbSxuLHA7SC4kJGlzb2xhdGVCaW5kaW5nc1tjXT1kK2c7c3dpdGNoKGQpe2Nhc2UgXCJAXCI6SS4kb2JzZXJ2ZShnLGZ1bmN0aW9uKGEpe0hbY109YX0pO0kuJCRvYnNlcnZlcnNbZ10uJCRzY29wZT1lO0lbZ10mJihIW2NdPWIoSVtnXSkoZSkpO1xuYnJlYWs7Y2FzZSBcIj1cIjppZihmJiYhSVtnXSlicmVhazttPXIoSVtnXSk7cD1tLmxpdGVyYWw/eGE6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT09PWJ9O249bS5hc3NpZ258fGZ1bmN0aW9uKCl7bD1IW2NdPW0oZSk7dGhyb3cgamEoXCJub25hc3NpZ25cIixJW2ddLFEubmFtZSk7fTtsPUhbY109bShlKTtILiR3YXRjaChmdW5jdGlvbigpe3ZhciBhPW0oZSk7cChhLEhbY10pfHwocChhLGwpP24oZSxhPUhbY10pOkhbY109YSk7cmV0dXJuIGw9YX0sbnVsbCxtLmxpdGVyYWwpO2JyZWFrO2Nhc2UgXCImXCI6bT1yKElbZ10pO0hbY109ZnVuY3Rpb24oYSl7cmV0dXJuIG0oZSxhKX07YnJlYWs7ZGVmYXVsdDp0aHJvdyBqYShcImlzY3BcIixRLm5hbWUsYyxhKTt9fSl9ZGE9cCYmdTtMJiZxKEwsZnVuY3Rpb24oYSl7dmFyIGI9eyRzY29wZTphPT09UXx8YS4kJGlzb2xhdGVTY29wZT9IOmUsJGVsZW1lbnQ6eCwkYXR0cnM6SSwkdHJhbnNjbHVkZTpkYX0sYztSPWEuY29udHJvbGxlcjtcIkBcIj09UiYmKFI9XG5JW2EubmFtZV0pO2M9eihSLGIpO2xiW2EubmFtZV09YztEfHx4LmRhdGEoXCIkXCIrYS5uYW1lK1wiQ29udHJvbGxlclwiLGMpO2EuY29udHJvbGxlckFzJiYoYi4kc2NvcGVbYS5jb250cm9sbGVyQXNdPWMpfSk7Zj0wO2Zvcih2PWwubGVuZ3RoO2Y8djtmKyspdHJ5e0E9bFtmXSxBKEEuaXNvbGF0ZVNjb3BlP0g6ZSx4LEksQS5yZXF1aXJlJiZGKEEucmVxdWlyZSx4LGxiKSxkYSl9Y2F0Y2goRyl7bShHLGhhKHgpKX1mPWU7USYmKFEudGVtcGxhdGV8fG51bGw9PT1RLnRlbXBsYXRlVXJsKSYmKGY9SCk7YSYmYShmLGcuY2hpbGROb2RlcyxzLHApO2ZvcihmPW4ubGVuZ3RoLTE7MDw9ZjtmLS0pdHJ5e0E9bltmXSxBKEEuaXNvbGF0ZVNjb3BlP0g6ZSx4LEksQS5yZXF1aXJlJiZGKEEucmVxdWlyZSx4LGxiKSxkYSl9Y2F0Y2goQil7bShCLGhhKHgpKX19cD1wfHx7fTtmb3IodmFyIHY9LU51bWJlci5NQVhfVkFMVUUsQSxMPXAuY29udHJvbGxlckRpcmVjdGl2ZXMsUT1wLm5ld0lzb2xhdGVTY29wZURpcmVjdGl2ZSxcbmlhPXAudGVtcGxhdGVEaXJlY3RpdmUsVD1wLm5vblRsYlRyYW5zY2x1ZGVEaXJlY3RpdmUsRT0hMSxEPXAuaGFzRWxlbWVudFRyYW5zY2x1ZGVEaXJlY3RpdmUsWj1kLiQkZWxlbWVudD15KGMpLEcsdCxWLFhhPWUsTyxOPTAsUz1hLmxlbmd0aDtOPFM7TisrKXtHPWFbTl07dmFyIHJhPUcuJCRzdGFydCxXPUcuJCRlbmQ7cmEmJihaPUgoYyxyYSxXKSk7Vj1zO2lmKHY+Ry5wcmlvcml0eSlicmVhaztpZihWPUcuc2NvcGUpQT1BfHxHLEcudGVtcGxhdGVVcmx8fChLKFwibmV3L2lzb2xhdGVkIHNjb3BlXCIsUSxHLFopLFgoVikmJihRPUcpKTt0PUcubmFtZTshRy50ZW1wbGF0ZVVybCYmRy5jb250cm9sbGVyJiYoVj1HLmNvbnRyb2xsZXIsTD1MfHx7fSxLKFwiJ1wiK3QrXCInIGNvbnRyb2xsZXJcIixMW3RdLEcsWiksTFt0XT1HKTtpZihWPUcudHJhbnNjbHVkZSlFPSEwLEcuJCR0bGJ8fChLKFwidHJhbnNjbHVzaW9uXCIsVCxHLFopLFQ9RyksXCJlbGVtZW50XCI9PVY/KEQ9ITAsdj1HLnByaW9yaXR5LFxuVj1IKGMscmEsVyksWj1kLiQkZWxlbWVudD15KFUuY3JlYXRlQ29tbWVudChcIiBcIit0K1wiOiBcIitkW3RdK1wiIFwiKSksYz1aWzBdLG1iKGcseSh5YS5jYWxsKFYsMCkpLGMpLFhhPXgoVixlLHYsZiYmZi5uYW1lLHtub25UbGJUcmFuc2NsdWRlRGlyZWN0aXZlOlR9KSk6KFY9eShFYihjKSkuY29udGVudHMoKSxaLmVtcHR5KCksWGE9eChWLGUpKTtpZihHLnRlbXBsYXRlKWlmKEsoXCJ0ZW1wbGF0ZVwiLGlhLEcsWiksaWE9RyxWPVAoRy50ZW1wbGF0ZSk/Ry50ZW1wbGF0ZShaLGQpOkcudGVtcGxhdGUsVj1ZKFYpLEcucmVwbGFjZSl7Zj1HO1Y9Q2IudGVzdChWKT95KFYpOltdO2M9VlswXTtpZigxIT1WLmxlbmd0aHx8MSE9PWMubm9kZVR5cGUpdGhyb3cgamEoXCJ0cGxydFwiLHQsXCJcIik7bWIoZyxaLGMpO1M9eyRhdHRyOnt9fTtWPWRhKGMsW10sUyk7dmFyICQ9YS5zcGxpY2UoTisxLGEubGVuZ3RoLShOKzEpKTtRJiZwYyhWKTthPWEuY29uY2F0KFYpLmNvbmNhdCgkKTtCKGQsUyk7Uz1hLmxlbmd0aH1lbHNlIFouaHRtbChWKTtcbmlmKEcudGVtcGxhdGVVcmwpSyhcInRlbXBsYXRlXCIsaWEsRyxaKSxpYT1HLEcucmVwbGFjZSYmKGY9RyksSj1DKGEuc3BsaWNlKE4sYS5sZW5ndGgtTiksWixkLGcsWGEsbCxuLHtjb250cm9sbGVyRGlyZWN0aXZlczpMLG5ld0lzb2xhdGVTY29wZURpcmVjdGl2ZTpRLHRlbXBsYXRlRGlyZWN0aXZlOmlhLG5vblRsYlRyYW5zY2x1ZGVEaXJlY3RpdmU6VH0pLFM9YS5sZW5ndGg7ZWxzZSBpZihHLmNvbXBpbGUpdHJ5e089Ry5jb21waWxlKFosZCxYYSksUChPKT91KG51bGwsTyxyYSxXKTpPJiZ1KE8ucHJlLE8ucG9zdCxyYSxXKX1jYXRjaChhYSl7bShhYSxoYShaKSl9Ry50ZXJtaW5hbCYmKEoudGVybWluYWw9ITAsdj1NYXRoLm1heCh2LEcucHJpb3JpdHkpKX1KLnNjb3BlPUEmJiEwPT09QS5zY29wZTtKLnRyYW5zY2x1ZGU9RSYmWGE7cC5oYXNFbGVtZW50VHJhbnNjbHVkZURpcmVjdGl2ZT1EO3JldHVybiBKfWZ1bmN0aW9uIHBjKGEpe2Zvcih2YXIgYj0wLGM9YS5sZW5ndGg7YjxjO2IrKylhW2JdPVxuVGIoYVtiXSx7JCRpc29sYXRlU2NvcGU6ITB9KX1mdW5jdGlvbiBUKGIsZSxnLGYsayxuLHIpe2lmKGU9PT1rKXJldHVybiBudWxsO2s9bnVsbDtpZihjLmhhc093blByb3BlcnR5KGUpKXt2YXIgcDtlPWEuZ2V0KGUrZCk7Zm9yKHZhciB6PTAsdT1lLmxlbmd0aDt6PHU7eisrKXRyeXtwPWVbel0sKGY9PT1zfHxmPnAucHJpb3JpdHkpJiYtMSE9cC5yZXN0cmljdC5pbmRleE9mKGcpJiYobiYmKHA9VGIocCx7JCRzdGFydDpuLCQkZW5kOnJ9KSksYi5wdXNoKHApLGs9cCl9Y2F0Y2goRil7bShGKX19cmV0dXJuIGt9ZnVuY3Rpb24gQihhLGIpe3ZhciBjPWIuJGF0dHIsZD1hLiRhdHRyLGU9YS4kJGVsZW1lbnQ7cShhLGZ1bmN0aW9uKGQsZSl7XCIkXCIhPWUuY2hhckF0KDApJiYoYltlXSYmKGQrPShcInN0eWxlXCI9PT1lP1wiO1wiOlwiIFwiKStiW2VdKSxhLiRzZXQoZSxkLCEwLGNbZV0pKX0pO3EoYixmdW5jdGlvbihiLGcpe1wiY2xhc3NcIj09Zz8obWEoZSxiKSxhW1wiY2xhc3NcIl09KGFbXCJjbGFzc1wiXT9cbmFbXCJjbGFzc1wiXStcIiBcIjpcIlwiKStiKTpcInN0eWxlXCI9PWc/KGUuYXR0cihcInN0eWxlXCIsZS5hdHRyKFwic3R5bGVcIikrXCI7XCIrYiksYS5zdHlsZT0oYS5zdHlsZT9hLnN0eWxlK1wiO1wiOlwiXCIpK2IpOlwiJFwiPT1nLmNoYXJBdCgwKXx8YS5oYXNPd25Qcm9wZXJ0eShnKXx8KGFbZ109YixkW2ddPWNbZ10pfSl9ZnVuY3Rpb24gQyhhLGIsYyxkLGUsZyxmLGwpe3ZhciBrPVtdLG0scix6PWJbMF0sdT1hLnNoaWZ0KCksRj1EKHt9LHUse3RlbXBsYXRlVXJsOm51bGwsdHJhbnNjbHVkZTpudWxsLHJlcGxhY2U6bnVsbCwkJG9yaWdpbmFsRGlyZWN0aXZlOnV9KSx4PVAodS50ZW1wbGF0ZVVybCk/dS50ZW1wbGF0ZVVybChiLGMpOnUudGVtcGxhdGVVcmw7Yi5lbXB0eSgpO24uZ2V0KHYuZ2V0VHJ1c3RlZFJlc291cmNlVXJsKHgpLHtjYWNoZTpwfSkuc3VjY2VzcyhmdW5jdGlvbihuKXt2YXIgcCxKO249WShuKTtpZih1LnJlcGxhY2Upe249Q2IudGVzdChuKT95KG4pOltdO3A9blswXTtpZigxIT1uLmxlbmd0aHx8XG4xIT09cC5ub2RlVHlwZSl0aHJvdyBqYShcInRwbHJ0XCIsdS5uYW1lLHgpO249eyRhdHRyOnt9fTttYihkLGIscCk7dmFyIHY9ZGEocCxbXSxuKTtYKHUuc2NvcGUpJiZwYyh2KTthPXYuY29uY2F0KGEpO0IoYyxuKX1lbHNlIHA9eixiLmh0bWwobik7YS51bnNoaWZ0KEYpO209aWEoYSxwLGMsZSxiLHUsZyxmLGwpO3EoZCxmdW5jdGlvbihhLGMpe2E9PXAmJihkW2NdPWJbMF0pfSk7Zm9yKHI9TChiWzBdLmNoaWxkTm9kZXMsZSk7ay5sZW5ndGg7KXtuPWsuc2hpZnQoKTtKPWsuc2hpZnQoKTt2YXIgQT1rLnNoaWZ0KCksUj1rLnNoaWZ0KCksdj1iWzBdO2lmKEohPT16KXt2YXIgSD1KLmNsYXNzTmFtZTtsLmhhc0VsZW1lbnRUcmFuc2NsdWRlRGlyZWN0aXZlJiZ1LnJlcGxhY2V8fCh2PUViKHApKTttYihBLHkoSiksdik7bWEoeSh2KSxIKX1KPW0udHJhbnNjbHVkZT9RKG4sbS50cmFuc2NsdWRlKTpSO20ocixuLHYsZCxKKX1rPW51bGx9KS5lcnJvcihmdW5jdGlvbihhLGIsYyxkKXt0aHJvdyBqYShcInRwbG9hZFwiLFxuZC51cmwpO30pO3JldHVybiBmdW5jdGlvbihhLGIsYyxkLGUpe2s/KGsucHVzaChiKSxrLnB1c2goYyksay5wdXNoKGQpLGsucHVzaChlKSk6bShyLGIsYyxkLGUpfX1mdW5jdGlvbiBFKGEsYil7dmFyIGM9Yi5wcmlvcml0eS1hLnByaW9yaXR5O3JldHVybiAwIT09Yz9jOmEubmFtZSE9PWIubmFtZT9hLm5hbWU8Yi5uYW1lPy0xOjE6YS5pbmRleC1iLmluZGV4fWZ1bmN0aW9uIEsoYSxiLGMsZCl7aWYoYil0aHJvdyBqYShcIm11bHRpZGlyXCIsYi5uYW1lLGMubmFtZSxhLGhhKGQpKTt9ZnVuY3Rpb24gdChhLGMpe3ZhciBkPWIoYywhMCk7ZCYmYS5wdXNoKHtwcmlvcml0eTowLGNvbXBpbGU6YWEoZnVuY3Rpb24oYSxiKXt2YXIgYz1iLnBhcmVudCgpLGU9Yy5kYXRhKFwiJGJpbmRpbmdcIil8fFtdO2UucHVzaChkKTttYShjLmRhdGEoXCIkYmluZGluZ1wiLGUpLFwibmctYmluZGluZ1wiKTthLiR3YXRjaChkLGZ1bmN0aW9uKGEpe2JbMF0ubm9kZVZhbHVlPWF9KX0pfSl9ZnVuY3Rpb24gTyhhLGIpe2lmKFwic3JjZG9jXCI9PVxuYilyZXR1cm4gdi5IVE1MO3ZhciBjPUthKGEpO2lmKFwieGxpbmtIcmVmXCI9PWJ8fFwiRk9STVwiPT1jJiZcImFjdGlvblwiPT1ifHxcIklNR1wiIT1jJiYoXCJzcmNcIj09Ynx8XCJuZ1NyY1wiPT1iKSlyZXR1cm4gdi5SRVNPVVJDRV9VUkx9ZnVuY3Rpb24gTihhLGMsZCxlKXt2YXIgZz1iKGQsITApO2lmKGcpe2lmKFwibXVsdGlwbGVcIj09PWUmJlwiU0VMRUNUXCI9PT1LYShhKSl0aHJvdyBqYShcInNlbG11bHRpXCIsaGEoYSkpO2MucHVzaCh7cHJpb3JpdHk6MTAwLGNvbXBpbGU6ZnVuY3Rpb24oKXtyZXR1cm57cHJlOmZ1bmN0aW9uKGMsZCxsKXtkPWwuJCRvYnNlcnZlcnN8fChsLiQkb2JzZXJ2ZXJzPXt9KTtpZihmLnRlc3QoZSkpdGhyb3cgamEoXCJub2RvbWV2ZW50c1wiKTtpZihnPWIobFtlXSwhMCxPKGEsZSkpKWxbZV09ZyhjKSwoZFtlXXx8KGRbZV09W10pKS4kJGludGVyPSEwLChsLiQkb2JzZXJ2ZXJzJiZsLiQkb2JzZXJ2ZXJzW2VdLiQkc2NvcGV8fGMpLiR3YXRjaChnLGZ1bmN0aW9uKGEsYil7XCJjbGFzc1wiPT09XG5lJiZhIT1iP2wuJHVwZGF0ZUNsYXNzKGEsYik6bC4kc2V0KGUsYSl9KX19fX0pfX1mdW5jdGlvbiBtYihhLGIsYyl7dmFyIGQ9YlswXSxlPWIubGVuZ3RoLGc9ZC5wYXJlbnROb2RlLGYsbDtpZihhKWZvcihmPTAsbD1hLmxlbmd0aDtmPGw7ZisrKWlmKGFbZl09PWQpe2FbZisrXT1jO2w9ZitlLTE7Zm9yKHZhciBrPWEubGVuZ3RoO2Y8aztmKyssbCsrKWw8az9hW2ZdPWFbbF06ZGVsZXRlIGFbZl07YS5sZW5ndGgtPWUtMTticmVha31nJiZnLnJlcGxhY2VDaGlsZChjLGQpO2E9VS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7YS5hcHBlbmRDaGlsZChkKTtjW3kuZXhwYW5kb109ZFt5LmV4cGFuZG9dO2Q9MTtmb3IoZT1iLmxlbmd0aDtkPGU7ZCsrKWc9YltkXSx5KGcpLnJlbW92ZSgpLGEuYXBwZW5kQ2hpbGQoZyksZGVsZXRlIGJbZF07YlswXT1jO2IubGVuZ3RoPTF9ZnVuY3Rpb24gcWMoYSxiKXtyZXR1cm4gRChmdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KG51bGwsYXJndW1lbnRzKX0sXG5hLGIpfXZhciBIYj1mdW5jdGlvbihhLGIpe3RoaXMuJCRlbGVtZW50PWE7dGhpcy4kYXR0cj1ifHx7fX07SGIucHJvdG90eXBlPXskbm9ybWFsaXplOm5hLCRhZGRDbGFzczpmdW5jdGlvbihhKXthJiYwPGEubGVuZ3RoJiZKLmFkZENsYXNzKHRoaXMuJCRlbGVtZW50LGEpfSwkcmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oYSl7YSYmMDxhLmxlbmd0aCYmSi5yZW1vdmVDbGFzcyh0aGlzLiQkZWxlbWVudCxhKX0sJHVwZGF0ZUNsYXNzOmZ1bmN0aW9uKGEsYil7dmFyIGM9cmMoYSxiKSxkPXJjKGIsYSk7MD09PWMubGVuZ3RoP0oucmVtb3ZlQ2xhc3ModGhpcy4kJGVsZW1lbnQsZCk6MD09PWQubGVuZ3RoP0ouYWRkQ2xhc3ModGhpcy4kJGVsZW1lbnQsYyk6Si5zZXRDbGFzcyh0aGlzLiQkZWxlbWVudCxjLGQpfSwkc2V0OmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPW1jKHRoaXMuJCRlbGVtZW50WzBdLGEpO2UmJih0aGlzLiQkZWxlbWVudC5wcm9wKGEsYiksZD1lKTt0aGlzW2FdPWI7ZD90aGlzLiRhdHRyW2FdPVxuZDooZD10aGlzLiRhdHRyW2FdKXx8KHRoaXMuJGF0dHJbYV09ZD1mYihhLFwiLVwiKSk7ZT1LYSh0aGlzLiQkZWxlbWVudCk7aWYoXCJBXCI9PT1lJiZcImhyZWZcIj09PWF8fFwiSU1HXCI9PT1lJiZcInNyY1wiPT09YSl0aGlzW2FdPWI9QShiLFwic3JjXCI9PT1hKTshMSE9PWMmJihudWxsPT09Ynx8Yj09PXM/dGhpcy4kJGVsZW1lbnQucmVtb3ZlQXR0cihkKTp0aGlzLiQkZWxlbWVudC5hdHRyKGQsYikpOyhjPXRoaXMuJCRvYnNlcnZlcnMpJiZxKGNbYV0sZnVuY3Rpb24oYSl7dHJ5e2EoYil9Y2F0Y2goYyl7bShjKX19KX0sJG9ic2VydmU6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLGQ9Yy4kJG9ic2VydmVyc3x8KGMuJCRvYnNlcnZlcnM9e30pLGU9ZFthXXx8KGRbYV09W10pO2UucHVzaChiKTt1LiRldmFsQXN5bmMoZnVuY3Rpb24oKXtlLiQkaW50ZXJ8fGIoY1thXSl9KTtyZXR1cm4gYn19O3ZhciBaPWIuc3RhcnRTeW1ib2woKSxyYT1iLmVuZFN5bWJvbCgpLFk9XCJ7e1wiPT1afHxcIn19XCI9PXJhP1xuRGE6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZSgvXFx7XFx7L2csWikucmVwbGFjZSgvfX0vZyxyYSl9LFc9L15uZ0F0dHJbQS1aXS87cmV0dXJuIHh9XX1mdW5jdGlvbiBuYShiKXtyZXR1cm4gVGEoYi5yZXBsYWNlKHRlLFwiXCIpKX1mdW5jdGlvbiByYyhiLGEpe3ZhciBjPVwiXCIsZD1iLnNwbGl0KC9cXHMrLyksZT1hLnNwbGl0KC9cXHMrLyksZz0wO2E6Zm9yKDtnPGQubGVuZ3RoO2crKyl7Zm9yKHZhciBmPWRbZ10saD0wO2g8ZS5sZW5ndGg7aCsrKWlmKGY9PWVbaF0pY29udGludWUgYTtjKz0oMDxjLmxlbmd0aD9cIiBcIjpcIlwiKStmfXJldHVybiBjfWZ1bmN0aW9uIE9kKCl7dmFyIGI9e30sYT0vXihcXFMrKShcXHMrYXNcXHMrKFxcdyspKT8kLzt0aGlzLnJlZ2lzdGVyPWZ1bmN0aW9uKGEsZCl7QWEoYSxcImNvbnRyb2xsZXJcIik7WChhKT9EKGIsYSk6YlthXT1kfTt0aGlzLiRnZXQ9W1wiJGluamVjdG9yXCIsXCIkd2luZG93XCIsZnVuY3Rpb24oYyxkKXtyZXR1cm4gZnVuY3Rpb24oZSxnKXt2YXIgZixcbmgsbDt3KGUpJiYoZj1lLm1hdGNoKGEpLGg9ZlsxXSxsPWZbM10sZT1iLmhhc093blByb3BlcnR5KGgpP2JbaF06YmMoZy4kc2NvcGUsaCwhMCl8fGJjKGQsaCwhMCksUmEoZSxoLCEwKSk7Zj1jLmluc3RhbnRpYXRlKGUsZyk7aWYobCl7aWYoIWd8fFwib2JqZWN0XCIhPXR5cGVvZiBnLiRzY29wZSl0aHJvdyB0KFwiJGNvbnRyb2xsZXJcIikoXCJub3NjcFwiLGh8fGUubmFtZSxsKTtnLiRzY29wZVtsXT1mfXJldHVybiBmfX1dfWZ1bmN0aW9uIFBkKCl7dGhpcy4kZ2V0PVtcIiR3aW5kb3dcIixmdW5jdGlvbihiKXtyZXR1cm4geShiLmRvY3VtZW50KX1dfWZ1bmN0aW9uIFFkKCl7dGhpcy4kZ2V0PVtcIiRsb2dcIixmdW5jdGlvbihiKXtyZXR1cm4gZnVuY3Rpb24oYSxjKXtiLmVycm9yLmFwcGx5KGIsYXJndW1lbnRzKX19XX1mdW5jdGlvbiBzYyhiKXt2YXIgYT17fSxjLGQsZTtpZighYilyZXR1cm4gYTtxKGIuc3BsaXQoXCJcXG5cIiksZnVuY3Rpb24oYil7ZT1iLmluZGV4T2YoXCI6XCIpO2M9SyhjYShiLnN1YnN0cigwLFxuZSkpKTtkPWNhKGIuc3Vic3RyKGUrMSkpO2MmJihhW2NdPWFbY10/YVtjXSsoXCIsIFwiK2QpOmQpfSk7cmV0dXJuIGF9ZnVuY3Rpb24gdGMoYil7dmFyIGE9WChiKT9iOnM7cmV0dXJuIGZ1bmN0aW9uKGMpe2F8fChhPXNjKGIpKTtyZXR1cm4gYz9hW0soYyldfHxudWxsOmF9fWZ1bmN0aW9uIHVjKGIsYSxjKXtpZihQKGMpKXJldHVybiBjKGIsYSk7cShjLGZ1bmN0aW9uKGMpe2I9YyhiLGEpfSk7cmV0dXJuIGJ9ZnVuY3Rpb24gVGQoKXt2YXIgYj0vXlxccyooXFxbfFxce1teXFx7XSkvLGE9L1tcXH1cXF1dXFxzKiQvLGM9L15cXClcXF1cXH0nLD9cXG4vLGQ9e1wiQ29udGVudC1UeXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLThcIn0sZT10aGlzLmRlZmF1bHRzPXt0cmFuc2Zvcm1SZXNwb25zZTpbZnVuY3Rpb24oZCl7dyhkKSYmKGQ9ZC5yZXBsYWNlKGMsXCJcIiksYi50ZXN0KGQpJiZhLnRlc3QoZCkmJihkPVdiKGQpKSk7cmV0dXJuIGR9XSx0cmFuc2Zvcm1SZXF1ZXN0OltmdW5jdGlvbihhKXtyZXR1cm4gWChhKSYmXG5cIltvYmplY3QgRmlsZV1cIiE9PXdhLmNhbGwoYSkmJlwiW29iamVjdCBCbG9iXVwiIT09d2EuY2FsbChhKT9xYShhKTphfV0saGVhZGVyczp7Y29tbW9uOntBY2NlcHQ6XCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLypcIn0scG9zdDpiYShkKSxwdXQ6YmEoZCkscGF0Y2g6YmEoZCl9LHhzcmZDb29raWVOYW1lOlwiWFNSRi1UT0tFTlwiLHhzcmZIZWFkZXJOYW1lOlwiWC1YU1JGLVRPS0VOXCJ9LGc9dGhpcy5pbnRlcmNlcHRvcnM9W10sZj10aGlzLnJlc3BvbnNlSW50ZXJjZXB0b3JzPVtdO3RoaXMuJGdldD1bXCIkaHR0cEJhY2tlbmRcIixcIiRicm93c2VyXCIsXCIkY2FjaGVGYWN0b3J5XCIsXCIkcm9vdFNjb3BlXCIsXCIkcVwiLFwiJGluamVjdG9yXCIsZnVuY3Rpb24oYSxiLGMsZCxuLHApe2Z1bmN0aW9uIHIoYSl7ZnVuY3Rpb24gYyhhKXt2YXIgYj1EKHt9LGEse2RhdGE6dWMoYS5kYXRhLGEuaGVhZGVycyxkLnRyYW5zZm9ybVJlc3BvbnNlKX0pO3JldHVybiAyMDA8PWEuc3RhdHVzJiYzMDA+YS5zdGF0dXM/XG5iOm4ucmVqZWN0KGIpfXZhciBkPXttZXRob2Q6XCJnZXRcIix0cmFuc2Zvcm1SZXF1ZXN0OmUudHJhbnNmb3JtUmVxdWVzdCx0cmFuc2Zvcm1SZXNwb25zZTplLnRyYW5zZm9ybVJlc3BvbnNlfSxnPWZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYSl7dmFyIGM7cShhLGZ1bmN0aW9uKGIsZCl7UChiKSYmKGM9YigpLG51bGwhPWM/YVtkXT1jOmRlbGV0ZSBhW2RdKX0pfXZhciBjPWUuaGVhZGVycyxkPUQoe30sYS5oZWFkZXJzKSxnLGYsYz1EKHt9LGMuY29tbW9uLGNbSyhhLm1ldGhvZCldKTtiKGMpO2IoZCk7YTpmb3IoZyBpbiBjKXthPUsoZyk7Zm9yKGYgaW4gZClpZihLKGYpPT09YSljb250aW51ZSBhO2RbZ109Y1tnXX1yZXR1cm4gZH0oYSk7RChkLGEpO2QuaGVhZGVycz1nO2QubWV0aG9kPUZhKGQubWV0aG9kKTsoYT1JYihkLnVybCk/Yi5jb29raWVzKClbZC54c3JmQ29va2llTmFtZXx8ZS54c3JmQ29va2llTmFtZV06cykmJihnW2QueHNyZkhlYWRlck5hbWV8fGUueHNyZkhlYWRlck5hbWVdPVxuYSk7dmFyIGY9W2Z1bmN0aW9uKGEpe2c9YS5oZWFkZXJzO3ZhciBiPXVjKGEuZGF0YSx0YyhnKSxhLnRyYW5zZm9ybVJlcXVlc3QpO0UoYS5kYXRhKSYmcShnLGZ1bmN0aW9uKGEsYil7XCJjb250ZW50LXR5cGVcIj09PUsoYikmJmRlbGV0ZSBnW2JdfSk7RShhLndpdGhDcmVkZW50aWFscykmJiFFKGUud2l0aENyZWRlbnRpYWxzKSYmKGEud2l0aENyZWRlbnRpYWxzPWUud2l0aENyZWRlbnRpYWxzKTtyZXR1cm4geihhLGIsZykudGhlbihjLGMpfSxzXSxoPW4ud2hlbihkKTtmb3IocSh2LGZ1bmN0aW9uKGEpeyhhLnJlcXVlc3R8fGEucmVxdWVzdEVycm9yKSYmZi51bnNoaWZ0KGEucmVxdWVzdCxhLnJlcXVlc3RFcnJvcik7KGEucmVzcG9uc2V8fGEucmVzcG9uc2VFcnJvcikmJmYucHVzaChhLnJlc3BvbnNlLGEucmVzcG9uc2VFcnJvcil9KTtmLmxlbmd0aDspe2E9Zi5zaGlmdCgpO3ZhciBrPWYuc2hpZnQoKSxoPWgudGhlbihhLGspfWguc3VjY2Vzcz1mdW5jdGlvbihhKXtoLnRoZW4oZnVuY3Rpb24oYil7YShiLmRhdGEsXG5iLnN0YXR1cyxiLmhlYWRlcnMsZCl9KTtyZXR1cm4gaH07aC5lcnJvcj1mdW5jdGlvbihhKXtoLnRoZW4obnVsbCxmdW5jdGlvbihiKXthKGIuZGF0YSxiLnN0YXR1cyxiLmhlYWRlcnMsZCl9KTtyZXR1cm4gaH07cmV0dXJuIGh9ZnVuY3Rpb24geihiLGMsZyl7ZnVuY3Rpb24gZihhLGIsYyxlKXt2JiYoMjAwPD1hJiYzMDA+YT92LnB1dChzLFthLGIsc2MoYyksZV0pOnYucmVtb3ZlKHMpKTtsKGIsYSxjLGUpO2QuJCRwaGFzZXx8ZC4kYXBwbHkoKX1mdW5jdGlvbiBsKGEsYyxkLGUpe2M9TWF0aC5tYXgoYywwKTsoMjAwPD1jJiYzMDA+Yz9wLnJlc29sdmU6cC5yZWplY3QpKHtkYXRhOmEsc3RhdHVzOmMsaGVhZGVyczp0YyhkKSxjb25maWc6YixzdGF0dXNUZXh0OmV9KX1mdW5jdGlvbiBrKCl7dmFyIGE9ZGIoci5wZW5kaW5nUmVxdWVzdHMsYik7LTEhPT1hJiZyLnBlbmRpbmdSZXF1ZXN0cy5zcGxpY2UoYSwxKX12YXIgcD1uLmRlZmVyKCksej1wLnByb21pc2UsdixxLHM9dShiLnVybCxcbmIucGFyYW1zKTtyLnBlbmRpbmdSZXF1ZXN0cy5wdXNoKGIpO3oudGhlbihrLGspOyhiLmNhY2hlfHxlLmNhY2hlKSYmKCExIT09Yi5jYWNoZSYmXCJHRVRcIj09Yi5tZXRob2QpJiYodj1YKGIuY2FjaGUpP2IuY2FjaGU6WChlLmNhY2hlKT9lLmNhY2hlOkYpO2lmKHYpaWYocT12LmdldChzKSxCKHEpKXtpZihxLnRoZW4pcmV0dXJuIHEudGhlbihrLGspLHE7TShxKT9sKHFbMV0scVswXSxiYShxWzJdKSxxWzNdKTpsKHEsMjAwLHt9LFwiT0tcIil9ZWxzZSB2LnB1dChzLHopO0UocSkmJmEoYi5tZXRob2QscyxjLGYsZyxiLnRpbWVvdXQsYi53aXRoQ3JlZGVudGlhbHMsYi5yZXNwb25zZVR5cGUpO3JldHVybiB6fWZ1bmN0aW9uIHUoYSxiKXtpZighYilyZXR1cm4gYTt2YXIgYz1bXTtTYyhiLGZ1bmN0aW9uKGEsYil7bnVsbD09PWF8fEUoYSl8fChNKGEpfHwoYT1bYV0pLHEoYSxmdW5jdGlvbihhKXtYKGEpJiYoYT1xYShhKSk7Yy5wdXNoKHphKGIpK1wiPVwiK3phKGEpKX0pKX0pOzA8Yy5sZW5ndGgmJlxuKGErPSgtMT09YS5pbmRleE9mKFwiP1wiKT9cIj9cIjpcIiZcIikrYy5qb2luKFwiJlwiKSk7cmV0dXJuIGF9dmFyIEY9YyhcIiRodHRwXCIpLHY9W107cShnLGZ1bmN0aW9uKGEpe3YudW5zaGlmdCh3KGEpP3AuZ2V0KGEpOnAuaW52b2tlKGEpKX0pO3EoZixmdW5jdGlvbihhLGIpe3ZhciBjPXcoYSk/cC5nZXQoYSk6cC5pbnZva2UoYSk7di5zcGxpY2UoYiwwLHtyZXNwb25zZTpmdW5jdGlvbihhKXtyZXR1cm4gYyhuLndoZW4oYSkpfSxyZXNwb25zZUVycm9yOmZ1bmN0aW9uKGEpe3JldHVybiBjKG4ucmVqZWN0KGEpKX19KX0pO3IucGVuZGluZ1JlcXVlc3RzPVtdOyhmdW5jdGlvbihhKXtxKGFyZ3VtZW50cyxmdW5jdGlvbihhKXtyW2FdPWZ1bmN0aW9uKGIsYyl7cmV0dXJuIHIoRChjfHx7fSx7bWV0aG9kOmEsdXJsOmJ9KSl9fSl9KShcImdldFwiLFwiZGVsZXRlXCIsXCJoZWFkXCIsXCJqc29ucFwiKTsoZnVuY3Rpb24oYSl7cShhcmd1bWVudHMsZnVuY3Rpb24oYSl7clthXT1mdW5jdGlvbihiLGMsZCl7cmV0dXJuIHIoRChkfHxcbnt9LHttZXRob2Q6YSx1cmw6YixkYXRhOmN9KSl9fSl9KShcInBvc3RcIixcInB1dFwiKTtyLmRlZmF1bHRzPWU7cmV0dXJuIHJ9XX1mdW5jdGlvbiB1ZShiKXtpZig4Pj1TJiYoIWIubWF0Y2goL14oZ2V0fHBvc3R8aGVhZHxwdXR8ZGVsZXRlfG9wdGlvbnMpJC9pKXx8IU8uWE1MSHR0cFJlcXVlc3QpKXJldHVybiBuZXcgTy5BY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTEhUVFBcIik7aWYoTy5YTUxIdHRwUmVxdWVzdClyZXR1cm4gbmV3IE8uWE1MSHR0cFJlcXVlc3Q7dGhyb3cgdChcIiRodHRwQmFja2VuZFwiKShcIm5veGhyXCIpO31mdW5jdGlvbiBVZCgpe3RoaXMuJGdldD1bXCIkYnJvd3NlclwiLFwiJHdpbmRvd1wiLFwiJGRvY3VtZW50XCIsZnVuY3Rpb24oYixhLGMpe3JldHVybiB2ZShiLHVlLGIuZGVmZXIsYS5hbmd1bGFyLmNhbGxiYWNrcyxjWzBdKX1dfWZ1bmN0aW9uIHZlKGIsYSxjLGQsZSl7ZnVuY3Rpb24gZyhhLGIpe3ZhciBjPWUuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSxkPWZ1bmN0aW9uKCl7Yy5vbnJlYWR5c3RhdGVjaGFuZ2U9XG5jLm9ubG9hZD1jLm9uZXJyb3I9bnVsbDtlLmJvZHkucmVtb3ZlQ2hpbGQoYyk7YiYmYigpfTtjLnR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIjtjLnNyYz1hO1MmJjg+PVM/Yy5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXsvbG9hZGVkfGNvbXBsZXRlLy50ZXN0KGMucmVhZHlTdGF0ZSkmJmQoKX06Yy5vbmxvYWQ9Yy5vbmVycm9yPWZ1bmN0aW9uKCl7ZCgpfTtlLmJvZHkuYXBwZW5kQ2hpbGQoYyk7cmV0dXJuIGR9dmFyIGY9LTE7cmV0dXJuIGZ1bmN0aW9uKGUsbCxrLG0sbixwLHIseil7ZnVuY3Rpb24gdSgpe3Y9ZjtBJiZBKCk7eCYmeC5hYm9ydCgpfWZ1bmN0aW9uIEYoYSxkLGUsZyxmKXtMJiZjLmNhbmNlbChMKTtBPXg9bnVsbDswPT09ZCYmKGQ9ZT8yMDA6XCJmaWxlXCI9PXNhKGwpLnByb3RvY29sPzQwNDowKTthKDEyMjM9PT1kPzIwNDpkLGUsZyxmfHxcIlwiKTtiLiQkY29tcGxldGVPdXRzdGFuZGluZ1JlcXVlc3QoQyl9dmFyIHY7Yi4kJGluY091dHN0YW5kaW5nUmVxdWVzdENvdW50KCk7XG5sPWx8fGIudXJsKCk7aWYoXCJqc29ucFwiPT1LKGUpKXt2YXIgSj1cIl9cIisoZC5jb3VudGVyKyspLnRvU3RyaW5nKDM2KTtkW0pdPWZ1bmN0aW9uKGEpe2RbSl0uZGF0YT1hfTt2YXIgQT1nKGwucmVwbGFjZShcIkpTT05fQ0FMTEJBQ0tcIixcImFuZ3VsYXIuY2FsbGJhY2tzLlwiK0opLGZ1bmN0aW9uKCl7ZFtKXS5kYXRhP0YobSwyMDAsZFtKXS5kYXRhKTpGKG0sdnx8LTIpO2RbSl09RWEubm9vcH0pfWVsc2V7dmFyIHg9YShlKTt4Lm9wZW4oZSxsLCEwKTtxKG4sZnVuY3Rpb24oYSxiKXtCKGEpJiZ4LnNldFJlcXVlc3RIZWFkZXIoYixhKX0pO3gub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7aWYoeCYmND09eC5yZWFkeVN0YXRlKXt2YXIgYT1udWxsLGI9bnVsbDt2IT09ZiYmKGE9eC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSxiPVwicmVzcG9uc2VcImluIHg/eC5yZXNwb25zZTp4LnJlc3BvbnNlVGV4dCk7RihtLHZ8fHguc3RhdHVzLGIsYSx4LnN0YXR1c1RleHR8fFwiXCIpfX07ciYmKHgud2l0aENyZWRlbnRpYWxzPVxuITApO2lmKHopdHJ5e3gucmVzcG9uc2VUeXBlPXp9Y2F0Y2gocyl7aWYoXCJqc29uXCIhPT16KXRocm93IHM7fXguc2VuZChrfHxudWxsKX1pZigwPHApdmFyIEw9Yyh1LHApO2Vsc2UgcCYmcC50aGVuJiZwLnRoZW4odSl9fWZ1bmN0aW9uIFJkKCl7dmFyIGI9XCJ7e1wiLGE9XCJ9fVwiO3RoaXMuc3RhcnRTeW1ib2w9ZnVuY3Rpb24oYSl7cmV0dXJuIGE/KGI9YSx0aGlzKTpifTt0aGlzLmVuZFN5bWJvbD1mdW5jdGlvbihiKXtyZXR1cm4gYj8oYT1iLHRoaXMpOmF9O3RoaXMuJGdldD1bXCIkcGFyc2VcIixcIiRleGNlcHRpb25IYW5kbGVyXCIsXCIkc2NlXCIsZnVuY3Rpb24oYyxkLGUpe2Z1bmN0aW9uIGcoZyxrLG0pe2Zvcih2YXIgbixwLHI9MCx6PVtdLHU9Zy5sZW5ndGgsRj0hMSx2PVtdO3I8dTspLTEhPShuPWcuaW5kZXhPZihiLHIpKSYmLTEhPShwPWcuaW5kZXhPZihhLG4rZikpPyhyIT1uJiZ6LnB1c2goZy5zdWJzdHJpbmcocixuKSksei5wdXNoKHI9YyhGPWcuc3Vic3RyaW5nKG4rZixwKSkpLFxuci5leHA9RixyPXAraCxGPSEwKToociE9dSYmei5wdXNoKGcuc3Vic3RyaW5nKHIpKSxyPXUpOyh1PXoubGVuZ3RoKXx8KHoucHVzaChcIlwiKSx1PTEpO2lmKG0mJjE8ei5sZW5ndGgpdGhyb3cgdmMoXCJub2NvbmNhdFwiLGcpO2lmKCFrfHxGKXJldHVybiB2Lmxlbmd0aD11LHI9ZnVuY3Rpb24oYSl7dHJ5e2Zvcih2YXIgYj0wLGM9dSxmO2I8YztiKyspXCJmdW5jdGlvblwiPT10eXBlb2YoZj16W2JdKSYmKGY9ZihhKSxmPW0/ZS5nZXRUcnVzdGVkKG0sZik6ZS52YWx1ZU9mKGYpLG51bGw9PT1mfHxFKGYpP2Y9XCJcIjpcInN0cmluZ1wiIT10eXBlb2YgZiYmKGY9cWEoZikpKSx2W2JdPWY7cmV0dXJuIHYuam9pbihcIlwiKX1jYXRjaChoKXthPXZjKFwiaW50ZXJyXCIsZyxoLnRvU3RyaW5nKCkpLGQoYSl9fSxyLmV4cD1nLHIucGFydHM9eixyfXZhciBmPWIubGVuZ3RoLGg9YS5sZW5ndGg7Zy5zdGFydFN5bWJvbD1mdW5jdGlvbigpe3JldHVybiBifTtnLmVuZFN5bWJvbD1mdW5jdGlvbigpe3JldHVybiBhfTtcbnJldHVybiBnfV19ZnVuY3Rpb24gU2QoKXt0aGlzLiRnZXQ9W1wiJHJvb3RTY29wZVwiLFwiJHdpbmRvd1wiLFwiJHFcIixmdW5jdGlvbihiLGEsYyl7ZnVuY3Rpb24gZChkLGYsaCxsKXt2YXIgaz1hLnNldEludGVydmFsLG09YS5jbGVhckludGVydmFsLG49Yy5kZWZlcigpLHA9bi5wcm9taXNlLHI9MCx6PUIobCkmJiFsO2g9QihoKT9oOjA7cC50aGVuKG51bGwsbnVsbCxkKTtwLiQkaW50ZXJ2YWxJZD1rKGZ1bmN0aW9uKCl7bi5ub3RpZnkocisrKTswPGgmJnI+PWgmJihuLnJlc29sdmUociksbShwLiQkaW50ZXJ2YWxJZCksZGVsZXRlIGVbcC4kJGludGVydmFsSWRdKTt6fHxiLiRhcHBseSgpfSxmKTtlW3AuJCRpbnRlcnZhbElkXT1uO3JldHVybiBwfXZhciBlPXt9O2QuY2FuY2VsPWZ1bmN0aW9uKGEpe3JldHVybiBhJiZhLiQkaW50ZXJ2YWxJZCBpbiBlPyhlW2EuJCRpbnRlcnZhbElkXS5yZWplY3QoXCJjYW5jZWxlZFwiKSxjbGVhckludGVydmFsKGEuJCRpbnRlcnZhbElkKSxkZWxldGUgZVthLiQkaW50ZXJ2YWxJZF0sXG4hMCk6ITF9O3JldHVybiBkfV19ZnVuY3Rpb24gYWQoKXt0aGlzLiRnZXQ9ZnVuY3Rpb24oKXtyZXR1cm57aWQ6XCJlbi11c1wiLE5VTUJFUl9GT1JNQVRTOntERUNJTUFMX1NFUDpcIi5cIixHUk9VUF9TRVA6XCIsXCIsUEFUVEVSTlM6W3ttaW5JbnQ6MSxtaW5GcmFjOjAsbWF4RnJhYzozLHBvc1ByZTpcIlwiLHBvc1N1ZjpcIlwiLG5lZ1ByZTpcIi1cIixuZWdTdWY6XCJcIixnU2l6ZTozLGxnU2l6ZTozfSx7bWluSW50OjEsbWluRnJhYzoyLG1heEZyYWM6Mixwb3NQcmU6XCJcXHUwMGE0XCIscG9zU3VmOlwiXCIsbmVnUHJlOlwiKFxcdTAwYTRcIixuZWdTdWY6XCIpXCIsZ1NpemU6MyxsZ1NpemU6M31dLENVUlJFTkNZX1NZTTpcIiRcIn0sREFURVRJTUVfRk9STUFUUzp7TU9OVEg6XCJKYW51YXJ5IEZlYnJ1YXJ5IE1hcmNoIEFwcmlsIE1heSBKdW5lIEp1bHkgQXVndXN0IFNlcHRlbWJlciBPY3RvYmVyIE5vdmVtYmVyIERlY2VtYmVyXCIuc3BsaXQoXCIgXCIpLFNIT1JUTU9OVEg6XCJKYW4gRmViIE1hciBBcHIgTWF5IEp1biBKdWwgQXVnIFNlcCBPY3QgTm92IERlY1wiLnNwbGl0KFwiIFwiKSxcbkRBWTpcIlN1bmRheSBNb25kYXkgVHVlc2RheSBXZWRuZXNkYXkgVGh1cnNkYXkgRnJpZGF5IFNhdHVyZGF5XCIuc3BsaXQoXCIgXCIpLFNIT1JUREFZOlwiU3VuIE1vbiBUdWUgV2VkIFRodSBGcmkgU2F0XCIuc3BsaXQoXCIgXCIpLEFNUE1TOltcIkFNXCIsXCJQTVwiXSxtZWRpdW06XCJNTU0gZCwgeSBoOm1tOnNzIGFcIixcInNob3J0XCI6XCJNL2QveXkgaDptbSBhXCIsZnVsbERhdGU6XCJFRUVFLCBNTU1NIGQsIHlcIixsb25nRGF0ZTpcIk1NTU0gZCwgeVwiLG1lZGl1bURhdGU6XCJNTU0gZCwgeVwiLHNob3J0RGF0ZTpcIk0vZC95eVwiLG1lZGl1bVRpbWU6XCJoOm1tOnNzIGFcIixzaG9ydFRpbWU6XCJoOm1tIGFcIn0scGx1cmFsQ2F0OmZ1bmN0aW9uKGIpe3JldHVybiAxPT09Yj9cIm9uZVwiOlwib3RoZXJcIn19fX1mdW5jdGlvbiB3YyhiKXtiPWIuc3BsaXQoXCIvXCIpO2Zvcih2YXIgYT1iLmxlbmd0aDthLS07KWJbYV09d2IoYlthXSk7cmV0dXJuIGIuam9pbihcIi9cIil9ZnVuY3Rpb24geGMoYixhLGMpe2I9c2EoYixjKTthLiQkcHJvdG9jb2w9XG5iLnByb3RvY29sO2EuJCRob3N0PWIuaG9zdG5hbWU7YS4kJHBvcnQ9WShiLnBvcnQpfHx3ZVtiLnByb3RvY29sXXx8bnVsbH1mdW5jdGlvbiB5YyhiLGEsYyl7dmFyIGQ9XCIvXCIhPT1iLmNoYXJBdCgwKTtkJiYoYj1cIi9cIitiKTtiPXNhKGIsYyk7YS4kJHBhdGg9ZGVjb2RlVVJJQ29tcG9uZW50KGQmJlwiL1wiPT09Yi5wYXRobmFtZS5jaGFyQXQoMCk/Yi5wYXRobmFtZS5zdWJzdHJpbmcoMSk6Yi5wYXRobmFtZSk7YS4kJHNlYXJjaD1ZYihiLnNlYXJjaCk7YS4kJGhhc2g9ZGVjb2RlVVJJQ29tcG9uZW50KGIuaGFzaCk7YS4kJHBhdGgmJlwiL1wiIT1hLiQkcGF0aC5jaGFyQXQoMCkmJihhLiQkcGF0aD1cIi9cIithLiQkcGF0aCl9ZnVuY3Rpb24gb2EoYixhKXtpZigwPT09YS5pbmRleE9mKGIpKXJldHVybiBhLnN1YnN0cihiLmxlbmd0aCl9ZnVuY3Rpb24gWWEoYil7dmFyIGE9Yi5pbmRleE9mKFwiI1wiKTtyZXR1cm4tMT09YT9iOmIuc3Vic3RyKDAsYSl9ZnVuY3Rpb24gSmIoYil7cmV0dXJuIGIuc3Vic3RyKDAsXG5ZYShiKS5sYXN0SW5kZXhPZihcIi9cIikrMSl9ZnVuY3Rpb24gemMoYixhKXt0aGlzLiQkaHRtbDU9ITA7YT1hfHxcIlwiO3ZhciBjPUpiKGIpO3hjKGIsdGhpcyxiKTt0aGlzLiQkcGFyc2U9ZnVuY3Rpb24oYSl7dmFyIGU9b2EoYyxhKTtpZighdyhlKSl0aHJvdyBLYihcImlwdGhwcmZ4XCIsYSxjKTt5YyhlLHRoaXMsYik7dGhpcy4kJHBhdGh8fCh0aGlzLiQkcGF0aD1cIi9cIik7dGhpcy4kJGNvbXBvc2UoKX07dGhpcy4kJGNvbXBvc2U9ZnVuY3Rpb24oKXt2YXIgYT1aYih0aGlzLiQkc2VhcmNoKSxiPXRoaXMuJCRoYXNoP1wiI1wiK3diKHRoaXMuJCRoYXNoKTpcIlwiO3RoaXMuJCR1cmw9d2ModGhpcy4kJHBhdGgpKyhhP1wiP1wiK2E6XCJcIikrYjt0aGlzLiQkYWJzVXJsPWMrdGhpcy4kJHVybC5zdWJzdHIoMSl9O3RoaXMuJCRyZXdyaXRlPWZ1bmN0aW9uKGQpe3ZhciBlO2lmKChlPW9hKGIsZCkpIT09cylyZXR1cm4gZD1lLChlPW9hKGEsZSkpIT09cz9jKyhvYShcIi9cIixlKXx8ZSk6YitkO2lmKChlPW9hKGMsXG5kKSkhPT1zKXJldHVybiBjK2U7aWYoYz09ZCtcIi9cIilyZXR1cm4gY319ZnVuY3Rpb24gTGIoYixhKXt2YXIgYz1KYihiKTt4YyhiLHRoaXMsYik7dGhpcy4kJHBhcnNlPWZ1bmN0aW9uKGQpe3ZhciBlPW9hKGIsZCl8fG9hKGMsZCksZT1cIiNcIj09ZS5jaGFyQXQoMCk/b2EoYSxlKTp0aGlzLiQkaHRtbDU/ZTpcIlwiO2lmKCF3KGUpKXRocm93IEtiKFwiaWhzaHByZnhcIixkLGEpO3ljKGUsdGhpcyxiKTtkPXRoaXMuJCRwYXRoO3ZhciBnPS9eXFwvPy4qPzooXFwvLiopLzswPT09ZS5pbmRleE9mKGIpJiYoZT1lLnJlcGxhY2UoYixcIlwiKSk7Zy5leGVjKGUpfHwoZD0oZT1nLmV4ZWMoZCkpP2VbMV06ZCk7dGhpcy4kJHBhdGg9ZDt0aGlzLiQkY29tcG9zZSgpfTt0aGlzLiQkY29tcG9zZT1mdW5jdGlvbigpe3ZhciBjPVpiKHRoaXMuJCRzZWFyY2gpLGU9dGhpcy4kJGhhc2g/XCIjXCIrd2IodGhpcy4kJGhhc2gpOlwiXCI7dGhpcy4kJHVybD13Yyh0aGlzLiQkcGF0aCkrKGM/XCI/XCIrYzpcIlwiKStlO3RoaXMuJCRhYnNVcmw9XG5iKyh0aGlzLiQkdXJsP2ErdGhpcy4kJHVybDpcIlwiKX07dGhpcy4kJHJld3JpdGU9ZnVuY3Rpb24oYSl7aWYoWWEoYik9PVlhKGEpKXJldHVybiBhfX1mdW5jdGlvbiBBYyhiLGEpe3RoaXMuJCRodG1sNT0hMDtMYi5hcHBseSh0aGlzLGFyZ3VtZW50cyk7dmFyIGM9SmIoYik7dGhpcy4kJHJld3JpdGU9ZnVuY3Rpb24oZCl7dmFyIGU7aWYoYj09WWEoZCkpcmV0dXJuIGQ7aWYoZT1vYShjLGQpKXJldHVybiBiK2ErZTtpZihjPT09ZCtcIi9cIilyZXR1cm4gY319ZnVuY3Rpb24gbmIoYil7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbYl19fWZ1bmN0aW9uIEJjKGIsYSl7cmV0dXJuIGZ1bmN0aW9uKGMpe2lmKEUoYykpcmV0dXJuIHRoaXNbYl07dGhpc1tiXT1hKGMpO3RoaXMuJCRjb21wb3NlKCk7cmV0dXJuIHRoaXN9fWZ1bmN0aW9uIFZkKCl7dmFyIGI9XCJcIixhPSExO3RoaXMuaGFzaFByZWZpeD1mdW5jdGlvbihhKXtyZXR1cm4gQihhKT8oYj1hLHRoaXMpOmJ9O3RoaXMuaHRtbDVNb2RlPVxuZnVuY3Rpb24oYil7cmV0dXJuIEIoYik/KGE9Yix0aGlzKTphfTt0aGlzLiRnZXQ9W1wiJHJvb3RTY29wZVwiLFwiJGJyb3dzZXJcIixcIiRzbmlmZmVyXCIsXCIkcm9vdEVsZW1lbnRcIixmdW5jdGlvbihjLGQsZSxnKXtmdW5jdGlvbiBmKGEpe2MuJGJyb2FkY2FzdChcIiRsb2NhdGlvbkNoYW5nZVN1Y2Nlc3NcIixoLmFic1VybCgpLGEpfXZhciBoLGw9ZC5iYXNlSHJlZigpLGs9ZC51cmwoKTthPyhsPWsuc3Vic3RyaW5nKDAsay5pbmRleE9mKFwiL1wiLGsuaW5kZXhPZihcIi8vXCIpKzIpKSsobHx8XCIvXCIpLGU9ZS5oaXN0b3J5P3pjOkFjKToobD1ZYShrKSxlPUxiKTtoPW5ldyBlKGwsXCIjXCIrYik7aC4kJHBhcnNlKGguJCRyZXdyaXRlKGspKTtnLm9uKFwiY2xpY2tcIixmdW5jdGlvbihhKXtpZighYS5jdHJsS2V5JiYhYS5tZXRhS2V5JiYyIT1hLndoaWNoKXtmb3IodmFyIGI9eShhLnRhcmdldCk7XCJhXCIhPT1LKGJbMF0ubm9kZU5hbWUpOylpZihiWzBdPT09Z1swXXx8IShiPWIucGFyZW50KCkpWzBdKXJldHVybjtcbnZhciBlPWIucHJvcChcImhyZWZcIik7WChlKSYmXCJbb2JqZWN0IFNWR0FuaW1hdGVkU3RyaW5nXVwiPT09ZS50b1N0cmluZygpJiYoZT1zYShlLmFuaW1WYWwpLmhyZWYpO3ZhciBmPWguJCRyZXdyaXRlKGUpO2UmJighYi5hdHRyKFwidGFyZ2V0XCIpJiZmJiYhYS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkmJihhLnByZXZlbnREZWZhdWx0KCksZiE9ZC51cmwoKSYmKGguJCRwYXJzZShmKSxjLiRhcHBseSgpLE8uYW5ndWxhcltcImZmLTY4NDIwOC1wcmV2ZW50RGVmYXVsdFwiXT0hMCkpfX0pO2guYWJzVXJsKCkhPWsmJmQudXJsKGguYWJzVXJsKCksITApO2Qub25VcmxDaGFuZ2UoZnVuY3Rpb24oYSl7aC5hYnNVcmwoKSE9YSYmKGMuJGV2YWxBc3luYyhmdW5jdGlvbigpe3ZhciBiPWguYWJzVXJsKCk7aC4kJHBhcnNlKGEpO2MuJGJyb2FkY2FzdChcIiRsb2NhdGlvbkNoYW5nZVN0YXJ0XCIsYSxiKS5kZWZhdWx0UHJldmVudGVkPyhoLiQkcGFyc2UoYiksZC51cmwoYikpOmYoYil9KSxjLiQkcGhhc2V8fFxuYy4kZGlnZXN0KCkpfSk7dmFyIG09MDtjLiR3YXRjaChmdW5jdGlvbigpe3ZhciBhPWQudXJsKCksYj1oLiQkcmVwbGFjZTttJiZhPT1oLmFic1VybCgpfHwobSsrLGMuJGV2YWxBc3luYyhmdW5jdGlvbigpe2MuJGJyb2FkY2FzdChcIiRsb2NhdGlvbkNoYW5nZVN0YXJ0XCIsaC5hYnNVcmwoKSxhKS5kZWZhdWx0UHJldmVudGVkP2guJCRwYXJzZShhKTooZC51cmwoaC5hYnNVcmwoKSxiKSxmKGEpKX0pKTtoLiQkcmVwbGFjZT0hMTtyZXR1cm4gbX0pO3JldHVybiBofV19ZnVuY3Rpb24gV2QoKXt2YXIgYj0hMCxhPXRoaXM7dGhpcy5kZWJ1Z0VuYWJsZWQ9ZnVuY3Rpb24oYSl7cmV0dXJuIEIoYSk/KGI9YSx0aGlzKTpifTt0aGlzLiRnZXQ9W1wiJHdpbmRvd1wiLGZ1bmN0aW9uKGMpe2Z1bmN0aW9uIGQoYSl7YSBpbnN0YW5jZW9mIEVycm9yJiYoYS5zdGFjaz9hPWEubWVzc2FnZSYmLTE9PT1hLnN0YWNrLmluZGV4T2YoYS5tZXNzYWdlKT9cIkVycm9yOiBcIithLm1lc3NhZ2UrXCJcXG5cIithLnN0YWNrOlxuYS5zdGFjazphLnNvdXJjZVVSTCYmKGE9YS5tZXNzYWdlK1wiXFxuXCIrYS5zb3VyY2VVUkwrXCI6XCIrYS5saW5lKSk7cmV0dXJuIGF9ZnVuY3Rpb24gZShhKXt2YXIgYj1jLmNvbnNvbGV8fHt9LGU9YlthXXx8Yi5sb2d8fEM7YT0hMTt0cnl7YT0hIWUuYXBwbHl9Y2F0Y2gobCl7fXJldHVybiBhP2Z1bmN0aW9uKCl7dmFyIGE9W107cShhcmd1bWVudHMsZnVuY3Rpb24oYil7YS5wdXNoKGQoYikpfSk7cmV0dXJuIGUuYXBwbHkoYixhKX06ZnVuY3Rpb24oYSxiKXtlKGEsbnVsbD09Yj9cIlwiOmIpfX1yZXR1cm57bG9nOmUoXCJsb2dcIiksaW5mbzplKFwiaW5mb1wiKSx3YXJuOmUoXCJ3YXJuXCIpLGVycm9yOmUoXCJlcnJvclwiKSxkZWJ1ZzpmdW5jdGlvbigpe3ZhciBjPWUoXCJkZWJ1Z1wiKTtyZXR1cm4gZnVuY3Rpb24oKXtiJiZjLmFwcGx5KGEsYXJndW1lbnRzKX19KCl9fV19ZnVuY3Rpb24gZmEoYixhKXtpZihcImNvbnN0cnVjdG9yXCI9PT1iKXRocm93IEJhKFwiaXNlY2ZsZFwiLGEpO3JldHVybiBifWZ1bmN0aW9uIFphKGIsXG5hKXtpZihiKXtpZihiLmNvbnN0cnVjdG9yPT09Yil0aHJvdyBCYShcImlzZWNmblwiLGEpO2lmKGIuZG9jdW1lbnQmJmIubG9jYXRpb24mJmIuYWxlcnQmJmIuc2V0SW50ZXJ2YWwpdGhyb3cgQmEoXCJpc2Vjd2luZG93XCIsYSk7aWYoYi5jaGlsZHJlbiYmKGIubm9kZU5hbWV8fGIucHJvcCYmYi5hdHRyJiZiLmZpbmQpKXRocm93IEJhKFwiaXNlY2RvbVwiLGEpO31yZXR1cm4gYn1mdW5jdGlvbiBvYihiLGEsYyxkLGUpe2U9ZXx8e307YT1hLnNwbGl0KFwiLlwiKTtmb3IodmFyIGcsZj0wOzE8YS5sZW5ndGg7ZisrKXtnPWZhKGEuc2hpZnQoKSxkKTt2YXIgaD1iW2ddO2h8fChoPXt9LGJbZ109aCk7Yj1oO2IudGhlbiYmZS51bndyYXBQcm9taXNlcyYmKHRhKGQpLFwiJCR2XCJpbiBifHxmdW5jdGlvbihhKXthLnRoZW4oZnVuY3Rpb24oYil7YS4kJHY9Yn0pfShiKSxiLiQkdj09PXMmJihiLiQkdj17fSksYj1iLiQkdil9Zz1mYShhLnNoaWZ0KCksZCk7cmV0dXJuIGJbZ109Y31mdW5jdGlvbiBDYyhiLFxuYSxjLGQsZSxnLGYpe2ZhKGIsZyk7ZmEoYSxnKTtmYShjLGcpO2ZhKGQsZyk7ZmEoZSxnKTtyZXR1cm4gZi51bndyYXBQcm9taXNlcz9mdW5jdGlvbihmLGwpe3ZhciBrPWwmJmwuaGFzT3duUHJvcGVydHkoYik/bDpmLG07aWYobnVsbD09aylyZXR1cm4gazsoaz1rW2JdKSYmay50aGVuJiYodGEoZyksXCIkJHZcImluIGt8fChtPWssbS4kJHY9cyxtLnRoZW4oZnVuY3Rpb24oYSl7bS4kJHY9YX0pKSxrPWsuJCR2KTtpZighYSlyZXR1cm4gaztpZihudWxsPT1rKXJldHVybiBzOyhrPWtbYV0pJiZrLnRoZW4mJih0YShnKSxcIiQkdlwiaW4ga3x8KG09ayxtLiQkdj1zLG0udGhlbihmdW5jdGlvbihhKXttLiQkdj1hfSkpLGs9ay4kJHYpO2lmKCFjKXJldHVybiBrO2lmKG51bGw9PWspcmV0dXJuIHM7KGs9a1tjXSkmJmsudGhlbiYmKHRhKGcpLFwiJCR2XCJpbiBrfHwobT1rLG0uJCR2PXMsbS50aGVuKGZ1bmN0aW9uKGEpe20uJCR2PWF9KSksaz1rLiQkdik7aWYoIWQpcmV0dXJuIGs7aWYobnVsbD09XG5rKXJldHVybiBzOyhrPWtbZF0pJiZrLnRoZW4mJih0YShnKSxcIiQkdlwiaW4ga3x8KG09ayxtLiQkdj1zLG0udGhlbihmdW5jdGlvbihhKXttLiQkdj1hfSkpLGs9ay4kJHYpO2lmKCFlKXJldHVybiBrO2lmKG51bGw9PWspcmV0dXJuIHM7KGs9a1tlXSkmJmsudGhlbiYmKHRhKGcpLFwiJCR2XCJpbiBrfHwobT1rLG0uJCR2PXMsbS50aGVuKGZ1bmN0aW9uKGEpe20uJCR2PWF9KSksaz1rLiQkdik7cmV0dXJuIGt9OmZ1bmN0aW9uKGcsZil7dmFyIGs9ZiYmZi5oYXNPd25Qcm9wZXJ0eShiKT9mOmc7aWYobnVsbD09aylyZXR1cm4gaztrPWtbYl07aWYoIWEpcmV0dXJuIGs7aWYobnVsbD09aylyZXR1cm4gcztrPWtbYV07aWYoIWMpcmV0dXJuIGs7aWYobnVsbD09aylyZXR1cm4gcztrPWtbY107aWYoIWQpcmV0dXJuIGs7aWYobnVsbD09aylyZXR1cm4gcztrPWtbZF07cmV0dXJuIGU/bnVsbD09az9zOms9a1tlXTprfX1mdW5jdGlvbiB4ZShiLGEpe2ZhKGIsYSk7cmV0dXJuIGZ1bmN0aW9uKGEsXG5kKXtyZXR1cm4gbnVsbD09YT9zOihkJiZkLmhhc093blByb3BlcnR5KGIpP2Q6YSlbYl19fWZ1bmN0aW9uIHllKGIsYSxjKXtmYShiLGMpO2ZhKGEsYyk7cmV0dXJuIGZ1bmN0aW9uKGMsZSl7aWYobnVsbD09YylyZXR1cm4gcztjPShlJiZlLmhhc093blByb3BlcnR5KGIpP2U6YylbYl07cmV0dXJuIG51bGw9PWM/czpjW2FdfX1mdW5jdGlvbiBEYyhiLGEsYyl7aWYoTWIuaGFzT3duUHJvcGVydHkoYikpcmV0dXJuIE1iW2JdO3ZhciBkPWIuc3BsaXQoXCIuXCIpLGU9ZC5sZW5ndGgsZztpZihhLnVud3JhcFByb21pc2VzfHwxIT09ZSlpZihhLnVud3JhcFByb21pc2VzfHwyIT09ZSlpZihhLmNzcClnPTY+ZT9DYyhkWzBdLGRbMV0sZFsyXSxkWzNdLGRbNF0sYyxhKTpmdW5jdGlvbihiLGcpe3ZhciBmPTAsaDtkbyBoPUNjKGRbZisrXSxkW2YrK10sZFtmKytdLGRbZisrXSxkW2YrK10sYyxhKShiLGcpLGc9cyxiPWg7d2hpbGUoZjxlKTtyZXR1cm4gaH07ZWxzZXt2YXIgZj1cInZhciBwO1xcblwiO1xucShkLGZ1bmN0aW9uKGIsZCl7ZmEoYixjKTtmKz1cImlmKHMgPT0gbnVsbCkgcmV0dXJuIHVuZGVmaW5lZDtcXG5zPVwiKyhkP1wic1wiOicoKGsmJmsuaGFzT3duUHJvcGVydHkoXCInK2IrJ1wiKSk/azpzKScpKydbXCInK2IrJ1wiXTtcXG4nKyhhLnVud3JhcFByb21pc2VzPydpZiAocyAmJiBzLnRoZW4pIHtcXG4gcHcoXCInK2MucmVwbGFjZSgvKFtcIlxcclxcbl0pL2csXCJcXFxcJDFcIikrJ1wiKTtcXG4gaWYgKCEoXCIkJHZcIiBpbiBzKSkge1xcbiBwPXM7XFxuIHAuJCR2ID0gdW5kZWZpbmVkO1xcbiBwLnRoZW4oZnVuY3Rpb24odikge3AuJCR2PXY7fSk7XFxufVxcbiBzPXMuJCR2XFxufVxcbic6XCJcIil9KTt2YXIgZj1mK1wicmV0dXJuIHM7XCIsaD1uZXcgRnVuY3Rpb24oXCJzXCIsXCJrXCIsXCJwd1wiLGYpO2gudG9TdHJpbmc9YWEoZik7Zz1hLnVud3JhcFByb21pc2VzP2Z1bmN0aW9uKGEsYil7cmV0dXJuIGgoYSxiLHRhKX06aH1lbHNlIGc9eWUoZFswXSxkWzFdLGMpO2Vsc2UgZz14ZShkWzBdLGMpO1wiaGFzT3duUHJvcGVydHlcIiE9PVxuYiYmKE1iW2JdPWcpO3JldHVybiBnfWZ1bmN0aW9uIFhkKCl7dmFyIGI9e30sYT17Y3NwOiExLHVud3JhcFByb21pc2VzOiExLGxvZ1Byb21pc2VXYXJuaW5nczohMH07dGhpcy51bndyYXBQcm9taXNlcz1mdW5jdGlvbihiKXtyZXR1cm4gQihiKT8oYS51bndyYXBQcm9taXNlcz0hIWIsdGhpcyk6YS51bndyYXBQcm9taXNlc307dGhpcy5sb2dQcm9taXNlV2FybmluZ3M9ZnVuY3Rpb24oYil7cmV0dXJuIEIoYik/KGEubG9nUHJvbWlzZVdhcm5pbmdzPWIsdGhpcyk6YS5sb2dQcm9taXNlV2FybmluZ3N9O3RoaXMuJGdldD1bXCIkZmlsdGVyXCIsXCIkc25pZmZlclwiLFwiJGxvZ1wiLGZ1bmN0aW9uKGMsZCxlKXthLmNzcD1kLmNzcDt0YT1mdW5jdGlvbihiKXthLmxvZ1Byb21pc2VXYXJuaW5ncyYmIUVjLmhhc093blByb3BlcnR5KGIpJiYoRWNbYl09ITAsZS53YXJuKFwiWyRwYXJzZV0gUHJvbWlzZSBmb3VuZCBpbiB0aGUgZXhwcmVzc2lvbiBgXCIrYitcImAuIEF1dG9tYXRpYyB1bndyYXBwaW5nIG9mIHByb21pc2VzIGluIEFuZ3VsYXIgZXhwcmVzc2lvbnMgaXMgZGVwcmVjYXRlZC5cIikpfTtcbnJldHVybiBmdW5jdGlvbihkKXt2YXIgZTtzd2l0Y2godHlwZW9mIGQpe2Nhc2UgXCJzdHJpbmdcIjppZihiLmhhc093blByb3BlcnR5KGQpKXJldHVybiBiW2RdO2U9bmV3IE5iKGEpO2U9KG5ldyAkYShlLGMsYSkpLnBhcnNlKGQsITEpO1wiaGFzT3duUHJvcGVydHlcIiE9PWQmJihiW2RdPWUpO3JldHVybiBlO2Nhc2UgXCJmdW5jdGlvblwiOnJldHVybiBkO2RlZmF1bHQ6cmV0dXJuIEN9fX1dfWZ1bmN0aW9uIFpkKCl7dGhpcy4kZ2V0PVtcIiRyb290U2NvcGVcIixcIiRleGNlcHRpb25IYW5kbGVyXCIsZnVuY3Rpb24oYixhKXtyZXR1cm4gemUoZnVuY3Rpb24oYSl7Yi4kZXZhbEFzeW5jKGEpfSxhKX1dfWZ1bmN0aW9uIHplKGIsYSl7ZnVuY3Rpb24gYyhhKXtyZXR1cm4gYX1mdW5jdGlvbiBkKGEpe3JldHVybiBmKGEpfXZhciBlPWZ1bmN0aW9uKCl7dmFyIGY9W10sayxtO3JldHVybiBtPXtyZXNvbHZlOmZ1bmN0aW9uKGEpe2lmKGYpe3ZhciBjPWY7Zj1zO2s9ZyhhKTtjLmxlbmd0aCYmYihmdW5jdGlvbigpe2Zvcih2YXIgYSxcbmI9MCxkPWMubGVuZ3RoO2I8ZDtiKyspYT1jW2JdLGsudGhlbihhWzBdLGFbMV0sYVsyXSl9KX19LHJlamVjdDpmdW5jdGlvbihhKXttLnJlc29sdmUoaChhKSl9LG5vdGlmeTpmdW5jdGlvbihhKXtpZihmKXt2YXIgYz1mO2YubGVuZ3RoJiZiKGZ1bmN0aW9uKCl7Zm9yKHZhciBiLGQ9MCxlPWMubGVuZ3RoO2Q8ZTtkKyspYj1jW2RdLGJbMl0oYSl9KX19LHByb21pc2U6e3RoZW46ZnVuY3Rpb24oYixnLGgpe3ZhciBtPWUoKSx1PWZ1bmN0aW9uKGQpe3RyeXttLnJlc29sdmUoKFAoYik/YjpjKShkKSl9Y2F0Y2goZSl7bS5yZWplY3QoZSksYShlKX19LEY9ZnVuY3Rpb24oYil7dHJ5e20ucmVzb2x2ZSgoUChnKT9nOmQpKGIpKX1jYXRjaChjKXttLnJlamVjdChjKSxhKGMpfX0sdj1mdW5jdGlvbihiKXt0cnl7bS5ub3RpZnkoKFAoaCk/aDpjKShiKSl9Y2F0Y2goZCl7YShkKX19O2Y/Zi5wdXNoKFt1LEYsdl0pOmsudGhlbih1LEYsdik7cmV0dXJuIG0ucHJvbWlzZX0sXCJjYXRjaFwiOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnRoZW4obnVsbCxcbmEpfSxcImZpbmFsbHlcIjpmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEsYyl7dmFyIGQ9ZSgpO2M/ZC5yZXNvbHZlKGEpOmQucmVqZWN0KGEpO3JldHVybiBkLnByb21pc2V9ZnVuY3Rpb24gZChlLGcpe3ZhciBmPW51bGw7dHJ5e2Y9KGF8fGMpKCl9Y2F0Y2goaCl7cmV0dXJuIGIoaCwhMSl9cmV0dXJuIGYmJlAoZi50aGVuKT9mLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gYihlLGcpfSxmdW5jdGlvbihhKXtyZXR1cm4gYihhLCExKX0pOmIoZSxnKX1yZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKGEpe3JldHVybiBkKGEsITApfSxmdW5jdGlvbihhKXtyZXR1cm4gZChhLCExKX0pfX19fSxnPWZ1bmN0aW9uKGEpe3JldHVybiBhJiZQKGEudGhlbik/YTp7dGhlbjpmdW5jdGlvbihjKXt2YXIgZD1lKCk7YihmdW5jdGlvbigpe2QucmVzb2x2ZShjKGEpKX0pO3JldHVybiBkLnByb21pc2V9fX0sZj1mdW5jdGlvbihhKXt2YXIgYj1lKCk7Yi5yZWplY3QoYSk7cmV0dXJuIGIucHJvbWlzZX0saD1mdW5jdGlvbihjKXtyZXR1cm57dGhlbjpmdW5jdGlvbihnLFxuZil7dmFyIGg9ZSgpO2IoZnVuY3Rpb24oKXt0cnl7aC5yZXNvbHZlKChQKGYpP2Y6ZCkoYykpfWNhdGNoKGIpe2gucmVqZWN0KGIpLGEoYil9fSk7cmV0dXJuIGgucHJvbWlzZX19fTtyZXR1cm57ZGVmZXI6ZSxyZWplY3Q6Zix3aGVuOmZ1bmN0aW9uKGgsayxtLG4pe3ZhciBwPWUoKSxyLHo9ZnVuY3Rpb24oYil7dHJ5e3JldHVybihQKGspP2s6YykoYil9Y2F0Y2goZCl7cmV0dXJuIGEoZCksZihkKX19LHU9ZnVuY3Rpb24oYil7dHJ5e3JldHVybihQKG0pP206ZCkoYil9Y2F0Y2goYyl7cmV0dXJuIGEoYyksZihjKX19LEY9ZnVuY3Rpb24oYil7dHJ5e3JldHVybihQKG4pP246YykoYil9Y2F0Y2goZCl7YShkKX19O2IoZnVuY3Rpb24oKXtnKGgpLnRoZW4oZnVuY3Rpb24oYSl7cnx8KHI9ITAscC5yZXNvbHZlKGcoYSkudGhlbih6LHUsRikpKX0sZnVuY3Rpb24oYSl7cnx8KHI9ITAscC5yZXNvbHZlKHUoYSkpKX0sZnVuY3Rpb24oYSl7cnx8cC5ub3RpZnkoRihhKSl9KX0pO3JldHVybiBwLnByb21pc2V9LFxuYWxsOmZ1bmN0aW9uKGEpe3ZhciBiPWUoKSxjPTAsZD1NKGEpP1tdOnt9O3EoYSxmdW5jdGlvbihhLGUpe2MrKztnKGEpLnRoZW4oZnVuY3Rpb24oYSl7ZC5oYXNPd25Qcm9wZXJ0eShlKXx8KGRbZV09YSwtLWN8fGIucmVzb2x2ZShkKSl9LGZ1bmN0aW9uKGEpe2QuaGFzT3duUHJvcGVydHkoZSl8fGIucmVqZWN0KGEpfSl9KTswPT09YyYmYi5yZXNvbHZlKGQpO3JldHVybiBiLnByb21pc2V9fX1mdW5jdGlvbiBmZSgpe3RoaXMuJGdldD1bXCIkd2luZG93XCIsXCIkdGltZW91dFwiLGZ1bmN0aW9uKGIsYSl7dmFyIGM9Yi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGIud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxiLm1velJlcXVlc3RBbmltYXRpb25GcmFtZSxkPWIuY2FuY2VsQW5pbWF0aW9uRnJhbWV8fGIud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWV8fGIubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWV8fGIud2Via2l0Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lLGU9ISFjLGc9ZT9cbmZ1bmN0aW9uKGEpe3ZhciBiPWMoYSk7cmV0dXJuIGZ1bmN0aW9uKCl7ZChiKX19OmZ1bmN0aW9uKGIpe3ZhciBjPWEoYiwxNi42NiwhMSk7cmV0dXJuIGZ1bmN0aW9uKCl7YS5jYW5jZWwoYyl9fTtnLnN1cHBvcnRlZD1lO3JldHVybiBnfV19ZnVuY3Rpb24gWWQoKXt2YXIgYj0xMCxhPXQoXCIkcm9vdFNjb3BlXCIpLGM9bnVsbDt0aGlzLmRpZ2VzdFR0bD1mdW5jdGlvbihhKXthcmd1bWVudHMubGVuZ3RoJiYoYj1hKTtyZXR1cm4gYn07dGhpcy4kZ2V0PVtcIiRpbmplY3RvclwiLFwiJGV4Y2VwdGlvbkhhbmRsZXJcIixcIiRwYXJzZVwiLFwiJGJyb3dzZXJcIixmdW5jdGlvbihkLGUsZyxmKXtmdW5jdGlvbiBoKCl7dGhpcy4kaWQ9YmIoKTt0aGlzLiQkcGhhc2U9dGhpcy4kcGFyZW50PXRoaXMuJCR3YXRjaGVycz10aGlzLiQkbmV4dFNpYmxpbmc9dGhpcy4kJHByZXZTaWJsaW5nPXRoaXMuJCRjaGlsZEhlYWQ9dGhpcy4kJGNoaWxkVGFpbD1udWxsO3RoaXNbXCJ0aGlzXCJdPXRoaXMuJHJvb3Q9dGhpcztcbnRoaXMuJCRkZXN0cm95ZWQ9ITE7dGhpcy4kJGFzeW5jUXVldWU9W107dGhpcy4kJHBvc3REaWdlc3RRdWV1ZT1bXTt0aGlzLiQkbGlzdGVuZXJzPXt9O3RoaXMuJCRsaXN0ZW5lckNvdW50PXt9O3RoaXMuJCRpc29sYXRlQmluZGluZ3M9e319ZnVuY3Rpb24gbChiKXtpZihwLiQkcGhhc2UpdGhyb3cgYShcImlucHJvZ1wiLHAuJCRwaGFzZSk7cC4kJHBoYXNlPWJ9ZnVuY3Rpb24gayhhLGIpe3ZhciBjPWcoYSk7UmEoYyxiKTtyZXR1cm4gY31mdW5jdGlvbiBtKGEsYixjKXtkbyBhLiQkbGlzdGVuZXJDb3VudFtjXS09YiwwPT09YS4kJGxpc3RlbmVyQ291bnRbY10mJmRlbGV0ZSBhLiQkbGlzdGVuZXJDb3VudFtjXTt3aGlsZShhPWEuJHBhcmVudCl9ZnVuY3Rpb24gbigpe31oLnByb3RvdHlwZT17Y29uc3RydWN0b3I6aCwkbmV3OmZ1bmN0aW9uKGEpe2E/KGE9bmV3IGgsYS4kcm9vdD10aGlzLiRyb290LGEuJCRhc3luY1F1ZXVlPXRoaXMuJCRhc3luY1F1ZXVlLGEuJCRwb3N0RGlnZXN0UXVldWU9XG50aGlzLiQkcG9zdERpZ2VzdFF1ZXVlKTooYT1mdW5jdGlvbigpe30sYS5wcm90b3R5cGU9dGhpcyxhPW5ldyBhLGEuJGlkPWJiKCkpO2FbXCJ0aGlzXCJdPWE7YS4kJGxpc3RlbmVycz17fTthLiQkbGlzdGVuZXJDb3VudD17fTthLiRwYXJlbnQ9dGhpczthLiQkd2F0Y2hlcnM9YS4kJG5leHRTaWJsaW5nPWEuJCRjaGlsZEhlYWQ9YS4kJGNoaWxkVGFpbD1udWxsO2EuJCRwcmV2U2libGluZz10aGlzLiQkY2hpbGRUYWlsO3RoaXMuJCRjaGlsZEhlYWQ/dGhpcy4kJGNoaWxkVGFpbD10aGlzLiQkY2hpbGRUYWlsLiQkbmV4dFNpYmxpbmc9YTp0aGlzLiQkY2hpbGRIZWFkPXRoaXMuJCRjaGlsZFRhaWw9YTtyZXR1cm4gYX0sJHdhdGNoOmZ1bmN0aW9uKGEsYixkKXt2YXIgZT1rKGEsXCJ3YXRjaFwiKSxnPXRoaXMuJCR3YXRjaGVycyxmPXtmbjpiLGxhc3Q6bixnZXQ6ZSxleHA6YSxlcTohIWR9O2M9bnVsbDtpZighUChiKSl7dmFyIGg9ayhifHxDLFwibGlzdGVuZXJcIik7Zi5mbj1mdW5jdGlvbihhLFxuYixjKXtoKGMpfX1pZihcInN0cmluZ1wiPT10eXBlb2YgYSYmZS5jb25zdGFudCl7dmFyIGw9Zi5mbjtmLmZuPWZ1bmN0aW9uKGEsYixjKXtsLmNhbGwodGhpcyxhLGIsYyk7T2EoZyxmKX19Z3x8KGc9dGhpcy4kJHdhdGNoZXJzPVtdKTtnLnVuc2hpZnQoZik7cmV0dXJuIGZ1bmN0aW9uKCl7T2EoZyxmKTtjPW51bGx9fSwkd2F0Y2hDb2xsZWN0aW9uOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcyxkLGUsZixoPTE8Yi5sZW5ndGgsbD0wLGs9ZyhhKSxtPVtdLG49e30scD0hMCxxPTA7cmV0dXJuIHRoaXMuJHdhdGNoKGZ1bmN0aW9uKCl7ZD1rKGMpO3ZhciBhLGI7aWYoWChkKSlpZihhYihkKSlmb3IoZSE9PW0mJihlPW0scT1lLmxlbmd0aD0wLGwrKyksYT1kLmxlbmd0aCxxIT09YSYmKGwrKyxlLmxlbmd0aD1xPWEpLGI9MDtiPGE7YisrKWVbYl0hPT1lW2JdJiZkW2JdIT09ZFtiXXx8ZVtiXT09PWRbYl18fChsKyssZVtiXT1kW2JdKTtlbHNle2UhPT1uJiYoZT1uPXt9LHE9MCxsKyspO2E9XG4wO2ZvcihiIGluIGQpZC5oYXNPd25Qcm9wZXJ0eShiKSYmKGErKyxlLmhhc093blByb3BlcnR5KGIpP2VbYl0hPT1kW2JdJiYobCsrLGVbYl09ZFtiXSk6KHErKyxlW2JdPWRbYl0sbCsrKSk7aWYocT5hKWZvcihiIGluIGwrKyxlKWUuaGFzT3duUHJvcGVydHkoYikmJiFkLmhhc093blByb3BlcnR5KGIpJiYocS0tLGRlbGV0ZSBlW2JdKX1lbHNlIGUhPT1kJiYoZT1kLGwrKyk7cmV0dXJuIGx9LGZ1bmN0aW9uKCl7cD8ocD0hMSxiKGQsZCxjKSk6YihkLGYsYyk7aWYoaClpZihYKGQpKWlmKGFiKGQpKXtmPUFycmF5KGQubGVuZ3RoKTtmb3IodmFyIGE9MDthPGQubGVuZ3RoO2ErKylmW2FdPWRbYV19ZWxzZSBmb3IoYSBpbiBmPXt9LGQpRmMuY2FsbChkLGEpJiYoZlthXT1kW2FdKTtlbHNlIGY9ZH0pfSwkZGlnZXN0OmZ1bmN0aW9uKCl7dmFyIGQsZyxmLGgsaz10aGlzLiQkYXN5bmNRdWV1ZSxtPXRoaXMuJCRwb3N0RGlnZXN0UXVldWUscSx4LHM9YixMLFE9W10seSxILFI7bChcIiRkaWdlc3RcIik7XG5jPW51bGw7ZG97eD0hMTtmb3IoTD10aGlzO2subGVuZ3RoOyl7dHJ5e1I9ay5zaGlmdCgpLFIuc2NvcGUuJGV2YWwoUi5leHByZXNzaW9uKX1jYXRjaChCKXtwLiQkcGhhc2U9bnVsbCxlKEIpfWM9bnVsbH1hOmRve2lmKGg9TC4kJHdhdGNoZXJzKWZvcihxPWgubGVuZ3RoO3EtLTspdHJ5e2lmKGQ9aFtxXSlpZigoZz1kLmdldChMKSkhPT0oZj1kLmxhc3QpJiYhKGQuZXE/eGEoZyxmKTpcIm51bWJlclwiPT10eXBlb2YgZyYmXCJudW1iZXJcIj09dHlwZW9mIGYmJmlzTmFOKGcpJiZpc05hTihmKSkpeD0hMCxjPWQsZC5sYXN0PWQuZXE/YmEoZyk6ZyxkLmZuKGcsZj09PW4/ZzpmLEwpLDU+cyYmKHk9NC1zLFFbeV18fChRW3ldPVtdKSxIPVAoZC5leHApP1wiZm46IFwiKyhkLmV4cC5uYW1lfHxkLmV4cC50b1N0cmluZygpKTpkLmV4cCxIKz1cIjsgbmV3VmFsOiBcIitxYShnKStcIjsgb2xkVmFsOiBcIitxYShmKSxRW3ldLnB1c2goSCkpO2Vsc2UgaWYoZD09PWMpe3g9ITE7YnJlYWsgYX19Y2F0Y2godyl7cC4kJHBoYXNlPVxubnVsbCxlKHcpfWlmKCEoaD1MLiQkY2hpbGRIZWFkfHxMIT09dGhpcyYmTC4kJG5leHRTaWJsaW5nKSlmb3IoO0whPT10aGlzJiYhKGg9TC4kJG5leHRTaWJsaW5nKTspTD1MLiRwYXJlbnR9d2hpbGUoTD1oKTtpZigoeHx8ay5sZW5ndGgpJiYhcy0tKXRocm93IHAuJCRwaGFzZT1udWxsLGEoXCJpbmZkaWdcIixiLHFhKFEpKTt9d2hpbGUoeHx8ay5sZW5ndGgpO2ZvcihwLiQkcGhhc2U9bnVsbDttLmxlbmd0aDspdHJ5e20uc2hpZnQoKSgpfWNhdGNoKFQpe2UoVCl9fSwkZGVzdHJveTpmdW5jdGlvbigpe2lmKCF0aGlzLiQkZGVzdHJveWVkKXt2YXIgYT10aGlzLiRwYXJlbnQ7dGhpcy4kYnJvYWRjYXN0KFwiJGRlc3Ryb3lcIik7dGhpcy4kJGRlc3Ryb3llZD0hMDt0aGlzIT09cCYmKHEodGhpcy4kJGxpc3RlbmVyQ291bnQsZWIobnVsbCxtLHRoaXMpKSxhLiQkY2hpbGRIZWFkPT10aGlzJiYoYS4kJGNoaWxkSGVhZD10aGlzLiQkbmV4dFNpYmxpbmcpLGEuJCRjaGlsZFRhaWw9PXRoaXMmJlxuKGEuJCRjaGlsZFRhaWw9dGhpcy4kJHByZXZTaWJsaW5nKSx0aGlzLiQkcHJldlNpYmxpbmcmJih0aGlzLiQkcHJldlNpYmxpbmcuJCRuZXh0U2libGluZz10aGlzLiQkbmV4dFNpYmxpbmcpLHRoaXMuJCRuZXh0U2libGluZyYmKHRoaXMuJCRuZXh0U2libGluZy4kJHByZXZTaWJsaW5nPXRoaXMuJCRwcmV2U2libGluZyksdGhpcy4kcGFyZW50PXRoaXMuJCRuZXh0U2libGluZz10aGlzLiQkcHJldlNpYmxpbmc9dGhpcy4kJGNoaWxkSGVhZD10aGlzLiQkY2hpbGRUYWlsPXRoaXMuJHJvb3Q9bnVsbCx0aGlzLiQkbGlzdGVuZXJzPXt9LHRoaXMuJCR3YXRjaGVycz10aGlzLiQkYXN5bmNRdWV1ZT10aGlzLiQkcG9zdERpZ2VzdFF1ZXVlPVtdLHRoaXMuJGRlc3Ryb3k9dGhpcy4kZGlnZXN0PXRoaXMuJGFwcGx5PUMsdGhpcy4kb249dGhpcy4kd2F0Y2g9ZnVuY3Rpb24oKXtyZXR1cm4gQ30pfX0sJGV2YWw6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gZyhhKSh0aGlzLGIpfSwkZXZhbEFzeW5jOmZ1bmN0aW9uKGEpe3AuJCRwaGFzZXx8XG5wLiQkYXN5bmNRdWV1ZS5sZW5ndGh8fGYuZGVmZXIoZnVuY3Rpb24oKXtwLiQkYXN5bmNRdWV1ZS5sZW5ndGgmJnAuJGRpZ2VzdCgpfSk7dGhpcy4kJGFzeW5jUXVldWUucHVzaCh7c2NvcGU6dGhpcyxleHByZXNzaW9uOmF9KX0sJCRwb3N0RGlnZXN0OmZ1bmN0aW9uKGEpe3RoaXMuJCRwb3N0RGlnZXN0UXVldWUucHVzaChhKX0sJGFwcGx5OmZ1bmN0aW9uKGEpe3RyeXtyZXR1cm4gbChcIiRhcHBseVwiKSx0aGlzLiRldmFsKGEpfWNhdGNoKGIpe2UoYil9ZmluYWxseXtwLiQkcGhhc2U9bnVsbDt0cnl7cC4kZGlnZXN0KCl9Y2F0Y2goYyl7dGhyb3cgZShjKSxjO319fSwkb246ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLiQkbGlzdGVuZXJzW2FdO2N8fCh0aGlzLiQkbGlzdGVuZXJzW2FdPWM9W10pO2MucHVzaChiKTt2YXIgZD10aGlzO2RvIGQuJCRsaXN0ZW5lckNvdW50W2FdfHwoZC4kJGxpc3RlbmVyQ291bnRbYV09MCksZC4kJGxpc3RlbmVyQ291bnRbYV0rKzt3aGlsZShkPWQuJHBhcmVudCk7XG52YXIgZT10aGlzO3JldHVybiBmdW5jdGlvbigpe2NbZGIoYyxiKV09bnVsbDttKGUsMSxhKX19LCRlbWl0OmZ1bmN0aW9uKGEsYil7dmFyIGM9W10sZCxnPXRoaXMsZj0hMSxoPXtuYW1lOmEsdGFyZ2V0U2NvcGU6ZyxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXtmPSEwfSxwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe2guZGVmYXVsdFByZXZlbnRlZD0hMH0sZGVmYXVsdFByZXZlbnRlZDohMX0sbD1baF0uY29uY2F0KHlhLmNhbGwoYXJndW1lbnRzLDEpKSxrLG07ZG97ZD1nLiQkbGlzdGVuZXJzW2FdfHxjO2guY3VycmVudFNjb3BlPWc7az0wO2ZvcihtPWQubGVuZ3RoO2s8bTtrKyspaWYoZFtrXSl0cnl7ZFtrXS5hcHBseShudWxsLGwpfWNhdGNoKG4pe2Uobil9ZWxzZSBkLnNwbGljZShrLDEpLGstLSxtLS07aWYoZilicmVhaztnPWcuJHBhcmVudH13aGlsZShnKTtyZXR1cm4gaH0sJGJyb2FkY2FzdDpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz10aGlzLGQ9dGhpcyxnPXtuYW1lOmEsXG50YXJnZXRTY29wZTp0aGlzLHByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7Zy5kZWZhdWx0UHJldmVudGVkPSEwfSxkZWZhdWx0UHJldmVudGVkOiExfSxmPVtnXS5jb25jYXQoeWEuY2FsbChhcmd1bWVudHMsMSkpLGgsaztjPWQ7KXtnLmN1cnJlbnRTY29wZT1jO2Q9Yy4kJGxpc3RlbmVyc1thXXx8W107aD0wO2ZvcihrPWQubGVuZ3RoO2g8aztoKyspaWYoZFtoXSl0cnl7ZFtoXS5hcHBseShudWxsLGYpfWNhdGNoKGwpe2UobCl9ZWxzZSBkLnNwbGljZShoLDEpLGgtLSxrLS07aWYoIShkPWMuJCRsaXN0ZW5lckNvdW50W2FdJiZjLiQkY2hpbGRIZWFkfHxjIT09dGhpcyYmYy4kJG5leHRTaWJsaW5nKSlmb3IoO2MhPT10aGlzJiYhKGQ9Yy4kJG5leHRTaWJsaW5nKTspYz1jLiRwYXJlbnR9cmV0dXJuIGd9fTt2YXIgcD1uZXcgaDtyZXR1cm4gcH1dfWZ1bmN0aW9uIGJkKCl7dmFyIGI9L15cXHMqKGh0dHBzP3xmdHB8bWFpbHRvfHRlbHxmaWxlKTovLGE9L15cXHMqKGh0dHBzP3xmdHB8ZmlsZSk6fGRhdGE6aW1hZ2VcXC8vO1xudGhpcy5hSHJlZlNhbml0aXphdGlvbldoaXRlbGlzdD1mdW5jdGlvbihhKXtyZXR1cm4gQihhKT8oYj1hLHRoaXMpOmJ9O3RoaXMuaW1nU3JjU2FuaXRpemF0aW9uV2hpdGVsaXN0PWZ1bmN0aW9uKGIpe3JldHVybiBCKGIpPyhhPWIsdGhpcyk6YX07dGhpcy4kZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGMsZCl7dmFyIGU9ZD9hOmIsZztpZighU3x8ODw9UylpZihnPXNhKGMpLmhyZWYsXCJcIiE9PWcmJiFnLm1hdGNoKGUpKXJldHVyblwidW5zYWZlOlwiK2c7cmV0dXJuIGN9fX1mdW5jdGlvbiBBZShiKXtpZihcInNlbGZcIj09PWIpcmV0dXJuIGI7aWYodyhiKSl7aWYoLTE8Yi5pbmRleE9mKFwiKioqXCIpKXRocm93IHVhKFwiaXdjYXJkXCIsYik7Yj1iLnJlcGxhY2UoLyhbLSgpXFxbXFxde30rPyouJFxcXnwsOiM8IVxcXFxdKS9nLFwiXFxcXCQxXCIpLnJlcGxhY2UoL1xceDA4L2csXCJcXFxceDA4XCIpLnJlcGxhY2UoXCJcXFxcKlxcXFwqXCIsXCIuKlwiKS5yZXBsYWNlKFwiXFxcXCpcIixcIlteOi8uPyY7XSpcIik7cmV0dXJuIFJlZ0V4cChcIl5cIitcbmIrXCIkXCIpfWlmKGNiKGIpKXJldHVybiBSZWdFeHAoXCJeXCIrYi5zb3VyY2UrXCIkXCIpO3Rocm93IHVhKFwiaW1hdGNoZXJcIik7fWZ1bmN0aW9uIEdjKGIpe3ZhciBhPVtdO0IoYikmJnEoYixmdW5jdGlvbihiKXthLnB1c2goQWUoYikpfSk7cmV0dXJuIGF9ZnVuY3Rpb24gYWUoKXt0aGlzLlNDRV9DT05URVhUUz1nYTt2YXIgYj1bXCJzZWxmXCJdLGE9W107dGhpcy5yZXNvdXJjZVVybFdoaXRlbGlzdD1mdW5jdGlvbihhKXthcmd1bWVudHMubGVuZ3RoJiYoYj1HYyhhKSk7cmV0dXJuIGJ9O3RoaXMucmVzb3VyY2VVcmxCbGFja2xpc3Q9ZnVuY3Rpb24oYil7YXJndW1lbnRzLmxlbmd0aCYmKGE9R2MoYikpO3JldHVybiBhfTt0aGlzLiRnZXQ9W1wiJGluamVjdG9yXCIsZnVuY3Rpb24oYyl7ZnVuY3Rpb24gZChhKXt2YXIgYj1mdW5jdGlvbihhKXt0aGlzLiQkdW53cmFwVHJ1c3RlZFZhbHVlPWZ1bmN0aW9uKCl7cmV0dXJuIGF9fTthJiYoYi5wcm90b3R5cGU9bmV3IGEpO2IucHJvdG90eXBlLnZhbHVlT2Y9XG5mdW5jdGlvbigpe3JldHVybiB0aGlzLiQkdW53cmFwVHJ1c3RlZFZhbHVlKCl9O2IucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJCR1bndyYXBUcnVzdGVkVmFsdWUoKS50b1N0cmluZygpfTtyZXR1cm4gYn12YXIgZT1mdW5jdGlvbihhKXt0aHJvdyB1YShcInVuc2FmZVwiKTt9O2MuaGFzKFwiJHNhbml0aXplXCIpJiYoZT1jLmdldChcIiRzYW5pdGl6ZVwiKSk7dmFyIGc9ZCgpLGY9e307ZltnYS5IVE1MXT1kKGcpO2ZbZ2EuQ1NTXT1kKGcpO2ZbZ2EuVVJMXT1kKGcpO2ZbZ2EuSlNdPWQoZyk7ZltnYS5SRVNPVVJDRV9VUkxdPWQoZltnYS5VUkxdKTtyZXR1cm57dHJ1c3RBczpmdW5jdGlvbihhLGIpe3ZhciBjPWYuaGFzT3duUHJvcGVydHkoYSk/ZlthXTpudWxsO2lmKCFjKXRocm93IHVhKFwiaWNvbnRleHRcIixhLGIpO2lmKG51bGw9PT1ifHxiPT09c3x8XCJcIj09PWIpcmV0dXJuIGI7aWYoXCJzdHJpbmdcIiE9PXR5cGVvZiBiKXRocm93IHVhKFwiaXR5cGVcIixhKTtyZXR1cm4gbmV3IGMoYil9LFxuZ2V0VHJ1c3RlZDpmdW5jdGlvbihjLGQpe2lmKG51bGw9PT1kfHxkPT09c3x8XCJcIj09PWQpcmV0dXJuIGQ7dmFyIGc9Zi5oYXNPd25Qcm9wZXJ0eShjKT9mW2NdOm51bGw7aWYoZyYmZCBpbnN0YW5jZW9mIGcpcmV0dXJuIGQuJCR1bndyYXBUcnVzdGVkVmFsdWUoKTtpZihjPT09Z2EuUkVTT1VSQ0VfVVJMKXt2YXIgZz1zYShkLnRvU3RyaW5nKCkpLG0sbixwPSExO209MDtmb3Iobj1iLmxlbmd0aDttPG47bSsrKWlmKFwic2VsZlwiPT09YlttXT9JYihnKTpiW21dLmV4ZWMoZy5ocmVmKSl7cD0hMDticmVha31pZihwKWZvcihtPTAsbj1hLmxlbmd0aDttPG47bSsrKWlmKFwic2VsZlwiPT09YVttXT9JYihnKTphW21dLmV4ZWMoZy5ocmVmKSl7cD0hMTticmVha31pZihwKXJldHVybiBkO3Rocm93IHVhKFwiaW5zZWN1cmxcIixkLnRvU3RyaW5nKCkpO31pZihjPT09Z2EuSFRNTClyZXR1cm4gZShkKTt0aHJvdyB1YShcInVuc2FmZVwiKTt9LHZhbHVlT2Y6ZnVuY3Rpb24oYSl7cmV0dXJuIGEgaW5zdGFuY2VvZlxuZz9hLiQkdW53cmFwVHJ1c3RlZFZhbHVlKCk6YX19fV19ZnVuY3Rpb24gJGQoKXt2YXIgYj0hMDt0aGlzLmVuYWJsZWQ9ZnVuY3Rpb24oYSl7YXJndW1lbnRzLmxlbmd0aCYmKGI9ISFhKTtyZXR1cm4gYn07dGhpcy4kZ2V0PVtcIiRwYXJzZVwiLFwiJHNuaWZmZXJcIixcIiRzY2VEZWxlZ2F0ZVwiLGZ1bmN0aW9uKGEsYyxkKXtpZihiJiZjLm1zaWUmJjg+Yy5tc2llRG9jdW1lbnRNb2RlKXRocm93IHVhKFwiaWVxdWlya3NcIik7dmFyIGU9YmEoZ2EpO2UuaXNFbmFibGVkPWZ1bmN0aW9uKCl7cmV0dXJuIGJ9O2UudHJ1c3RBcz1kLnRydXN0QXM7ZS5nZXRUcnVzdGVkPWQuZ2V0VHJ1c3RlZDtlLnZhbHVlT2Y9ZC52YWx1ZU9mO2J8fChlLnRydXN0QXM9ZS5nZXRUcnVzdGVkPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGJ9LGUudmFsdWVPZj1EYSk7ZS5wYXJzZUFzPWZ1bmN0aW9uKGIsYyl7dmFyIGQ9YShjKTtyZXR1cm4gZC5saXRlcmFsJiZkLmNvbnN0YW50P2Q6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gZS5nZXRUcnVzdGVkKGIsXG5kKGEsYykpfX07dmFyIGc9ZS5wYXJzZUFzLGY9ZS5nZXRUcnVzdGVkLGg9ZS50cnVzdEFzO3EoZ2EsZnVuY3Rpb24oYSxiKXt2YXIgYz1LKGIpO2VbVGEoXCJwYXJzZV9hc19cIitjKV09ZnVuY3Rpb24oYil7cmV0dXJuIGcoYSxiKX07ZVtUYShcImdldF90cnVzdGVkX1wiK2MpXT1mdW5jdGlvbihiKXtyZXR1cm4gZihhLGIpfTtlW1RhKFwidHJ1c3RfYXNfXCIrYyldPWZ1bmN0aW9uKGIpe3JldHVybiBoKGEsYil9fSk7cmV0dXJuIGV9XX1mdW5jdGlvbiBiZSgpe3RoaXMuJGdldD1bXCIkd2luZG93XCIsXCIkZG9jdW1lbnRcIixmdW5jdGlvbihiLGEpe3ZhciBjPXt9LGQ9WSgoL2FuZHJvaWQgKFxcZCspLy5leGVjKEsoKGIubmF2aWdhdG9yfHx7fSkudXNlckFnZW50KSl8fFtdKVsxXSksZT0vQm94ZWUvaS50ZXN0KChiLm5hdmlnYXRvcnx8e30pLnVzZXJBZ2VudCksZz1hWzBdfHx7fSxmPWcuZG9jdW1lbnRNb2RlLGgsbD0vXihNb3p8d2Via2l0fE98bXMpKD89W0EtWl0pLyxrPWcuYm9keSYmZy5ib2R5LnN0eWxlLFxubT0hMSxuPSExO2lmKGspe2Zvcih2YXIgcCBpbiBrKWlmKG09bC5leGVjKHApKXtoPW1bMF07aD1oLnN1YnN0cigwLDEpLnRvVXBwZXJDYXNlKCkraC5zdWJzdHIoMSk7YnJlYWt9aHx8KGg9XCJXZWJraXRPcGFjaXR5XCJpbiBrJiZcIndlYmtpdFwiKTttPSEhKFwidHJhbnNpdGlvblwiaW4ga3x8aCtcIlRyYW5zaXRpb25cImluIGspO249ISEoXCJhbmltYXRpb25cImluIGt8fGgrXCJBbmltYXRpb25cImluIGspOyFkfHxtJiZufHwobT13KGcuYm9keS5zdHlsZS53ZWJraXRUcmFuc2l0aW9uKSxuPXcoZy5ib2R5LnN0eWxlLndlYmtpdEFuaW1hdGlvbikpfXJldHVybntoaXN0b3J5OiEoIWIuaGlzdG9yeXx8IWIuaGlzdG9yeS5wdXNoU3RhdGV8fDQ+ZHx8ZSksaGFzaGNoYW5nZTpcIm9uaGFzaGNoYW5nZVwiaW4gYiYmKCFmfHw3PGYpLGhhc0V2ZW50OmZ1bmN0aW9uKGEpe2lmKFwiaW5wdXRcIj09YSYmOT09UylyZXR1cm4hMTtpZihFKGNbYV0pKXt2YXIgYj1nLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Y1thXT1cIm9uXCIrXG5hIGluIGJ9cmV0dXJuIGNbYV19LGNzcDpWYigpLHZlbmRvclByZWZpeDpoLHRyYW5zaXRpb25zOm0sYW5pbWF0aW9uczpuLGFuZHJvaWQ6ZCxtc2llOlMsbXNpZURvY3VtZW50TW9kZTpmfX1dfWZ1bmN0aW9uIGRlKCl7dGhpcy4kZ2V0PVtcIiRyb290U2NvcGVcIixcIiRicm93c2VyXCIsXCIkcVwiLFwiJGV4Y2VwdGlvbkhhbmRsZXJcIixmdW5jdGlvbihiLGEsYyxkKXtmdW5jdGlvbiBlKGUsaCxsKXt2YXIgaz1jLmRlZmVyKCksbT1rLnByb21pc2Usbj1CKGwpJiYhbDtoPWEuZGVmZXIoZnVuY3Rpb24oKXt0cnl7ay5yZXNvbHZlKGUoKSl9Y2F0Y2goYSl7ay5yZWplY3QoYSksZChhKX1maW5hbGx5e2RlbGV0ZSBnW20uJCR0aW1lb3V0SWRdfW58fGIuJGFwcGx5KCl9LGgpO20uJCR0aW1lb3V0SWQ9aDtnW2hdPWs7cmV0dXJuIG19dmFyIGc9e307ZS5jYW5jZWw9ZnVuY3Rpb24oYil7cmV0dXJuIGImJmIuJCR0aW1lb3V0SWQgaW4gZz8oZ1tiLiQkdGltZW91dElkXS5yZWplY3QoXCJjYW5jZWxlZFwiKSxcbmRlbGV0ZSBnW2IuJCR0aW1lb3V0SWRdLGEuZGVmZXIuY2FuY2VsKGIuJCR0aW1lb3V0SWQpKTohMX07cmV0dXJuIGV9XX1mdW5jdGlvbiBzYShiLGEpe3ZhciBjPWI7UyYmKFcuc2V0QXR0cmlidXRlKFwiaHJlZlwiLGMpLGM9Vy5ocmVmKTtXLnNldEF0dHJpYnV0ZShcImhyZWZcIixjKTtyZXR1cm57aHJlZjpXLmhyZWYscHJvdG9jb2w6Vy5wcm90b2NvbD9XLnByb3RvY29sLnJlcGxhY2UoLzokLyxcIlwiKTpcIlwiLGhvc3Q6Vy5ob3N0LHNlYXJjaDpXLnNlYXJjaD9XLnNlYXJjaC5yZXBsYWNlKC9eXFw/LyxcIlwiKTpcIlwiLGhhc2g6Vy5oYXNoP1cuaGFzaC5yZXBsYWNlKC9eIy8sXCJcIik6XCJcIixob3N0bmFtZTpXLmhvc3RuYW1lLHBvcnQ6Vy5wb3J0LHBhdGhuYW1lOlwiL1wiPT09Vy5wYXRobmFtZS5jaGFyQXQoMCk/Vy5wYXRobmFtZTpcIi9cIitXLnBhdGhuYW1lfX1mdW5jdGlvbiBJYihiKXtiPXcoYik/c2EoYik6YjtyZXR1cm4gYi5wcm90b2NvbD09PUhjLnByb3RvY29sJiZiLmhvc3Q9PT1IYy5ob3N0fVxuZnVuY3Rpb24gZWUoKXt0aGlzLiRnZXQ9YWEoTyl9ZnVuY3Rpb24gZ2MoYil7ZnVuY3Rpb24gYShkLGUpe2lmKFgoZCkpe3ZhciBnPXt9O3EoZCxmdW5jdGlvbihiLGMpe2dbY109YShjLGIpfSk7cmV0dXJuIGd9cmV0dXJuIGIuZmFjdG9yeShkK2MsZSl9dmFyIGM9XCJGaWx0ZXJcIjt0aGlzLnJlZ2lzdGVyPWE7dGhpcy4kZ2V0PVtcIiRpbmplY3RvclwiLGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm4gYS5nZXQoYitjKX19XTthKFwiY3VycmVuY3lcIixJYyk7YShcImRhdGVcIixKYyk7YShcImZpbHRlclwiLEJlKTthKFwianNvblwiLENlKTthKFwibGltaXRUb1wiLERlKTthKFwibG93ZXJjYXNlXCIsRWUpO2EoXCJudW1iZXJcIixLYyk7YShcIm9yZGVyQnlcIixMYyk7YShcInVwcGVyY2FzZVwiLEZlKX1mdW5jdGlvbiBCZSgpe3JldHVybiBmdW5jdGlvbihiLGEsYyl7aWYoIU0oYikpcmV0dXJuIGI7dmFyIGQ9dHlwZW9mIGMsZT1bXTtlLmNoZWNrPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYj0wO2I8ZS5sZW5ndGg7YisrKWlmKCFlW2JdKGEpKXJldHVybiExO1xucmV0dXJuITB9O1wiZnVuY3Rpb25cIiE9PWQmJihjPVwiYm9vbGVhblwiPT09ZCYmYz9mdW5jdGlvbihhLGIpe3JldHVybiBFYS5lcXVhbHMoYSxiKX06ZnVuY3Rpb24oYSxiKXtpZihhJiZiJiZcIm9iamVjdFwiPT09dHlwZW9mIGEmJlwib2JqZWN0XCI9PT10eXBlb2YgYil7Zm9yKHZhciBkIGluIGEpaWYoXCIkXCIhPT1kLmNoYXJBdCgwKSYmRmMuY2FsbChhLGQpJiZjKGFbZF0sYltkXSkpcmV0dXJuITA7cmV0dXJuITF9Yj0oXCJcIitiKS50b0xvd2VyQ2FzZSgpO3JldHVybi0xPChcIlwiK2EpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihiKX0pO3ZhciBnPWZ1bmN0aW9uKGEsYil7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGImJlwiIVwiPT09Yi5jaGFyQXQoMCkpcmV0dXJuIWcoYSxiLnN1YnN0cigxKSk7c3dpdGNoKHR5cGVvZiBhKXtjYXNlIFwiYm9vbGVhblwiOmNhc2UgXCJudW1iZXJcIjpjYXNlIFwic3RyaW5nXCI6cmV0dXJuIGMoYSxiKTtjYXNlIFwib2JqZWN0XCI6c3dpdGNoKHR5cGVvZiBiKXtjYXNlIFwib2JqZWN0XCI6cmV0dXJuIGMoYSxcbmIpO2RlZmF1bHQ6Zm9yKHZhciBkIGluIGEpaWYoXCIkXCIhPT1kLmNoYXJBdCgwKSYmZyhhW2RdLGIpKXJldHVybiEwfXJldHVybiExO2Nhc2UgXCJhcnJheVwiOmZvcihkPTA7ZDxhLmxlbmd0aDtkKyspaWYoZyhhW2RdLGIpKXJldHVybiEwO3JldHVybiExO2RlZmF1bHQ6cmV0dXJuITF9fTtzd2l0Y2godHlwZW9mIGEpe2Nhc2UgXCJib29sZWFuXCI6Y2FzZSBcIm51bWJlclwiOmNhc2UgXCJzdHJpbmdcIjphPXskOmF9O2Nhc2UgXCJvYmplY3RcIjpmb3IodmFyIGYgaW4gYSkoZnVuY3Rpb24oYil7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGFbYl0mJmUucHVzaChmdW5jdGlvbihjKXtyZXR1cm4gZyhcIiRcIj09Yj9jOmMmJmNbYl0sYVtiXSl9KX0pKGYpO2JyZWFrO2Nhc2UgXCJmdW5jdGlvblwiOmUucHVzaChhKTticmVhaztkZWZhdWx0OnJldHVybiBifWQ9W107Zm9yKGY9MDtmPGIubGVuZ3RoO2YrKyl7dmFyIGg9YltmXTtlLmNoZWNrKGgpJiZkLnB1c2goaCl9cmV0dXJuIGR9fWZ1bmN0aW9uIEljKGIpe3ZhciBhPVxuYi5OVU1CRVJfRk9STUFUUztyZXR1cm4gZnVuY3Rpb24oYixkKXtFKGQpJiYoZD1hLkNVUlJFTkNZX1NZTSk7cmV0dXJuIE1jKGIsYS5QQVRURVJOU1sxXSxhLkdST1VQX1NFUCxhLkRFQ0lNQUxfU0VQLDIpLnJlcGxhY2UoL1xcdTAwQTQvZyxkKX19ZnVuY3Rpb24gS2MoYil7dmFyIGE9Yi5OVU1CRVJfRk9STUFUUztyZXR1cm4gZnVuY3Rpb24oYixkKXtyZXR1cm4gTWMoYixhLlBBVFRFUk5TWzBdLGEuR1JPVVBfU0VQLGEuREVDSU1BTF9TRVAsZCl9fWZ1bmN0aW9uIE1jKGIsYSxjLGQsZSl7aWYobnVsbD09Ynx8IWlzRmluaXRlKGIpfHxYKGIpKXJldHVyblwiXCI7dmFyIGc9MD5iO2I9TWF0aC5hYnMoYik7dmFyIGY9YitcIlwiLGg9XCJcIixsPVtdLGs9ITE7aWYoLTEhPT1mLmluZGV4T2YoXCJlXCIpKXt2YXIgbT1mLm1hdGNoKC8oW1xcZFxcLl0rKWUoLT8pKFxcZCspLyk7bSYmXCItXCI9PW1bMl0mJm1bM10+ZSsxP2Y9XCIwXCI6KGg9ZixrPSEwKX1pZihrKTA8ZSYmKC0xPGImJjE+YikmJihoPWIudG9GaXhlZChlKSk7XG5lbHNle2Y9KGYuc3BsaXQoTmMpWzFdfHxcIlwiKS5sZW5ndGg7RShlKSYmKGU9TWF0aC5taW4oTWF0aC5tYXgoYS5taW5GcmFjLGYpLGEubWF4RnJhYykpO2Y9TWF0aC5wb3coMTAsZSk7Yj1NYXRoLnJvdW5kKGIqZikvZjtiPShcIlwiK2IpLnNwbGl0KE5jKTtmPWJbMF07Yj1iWzFdfHxcIlwiO3ZhciBtPTAsbj1hLmxnU2l6ZSxwPWEuZ1NpemU7aWYoZi5sZW5ndGg+PW4rcClmb3IobT1mLmxlbmd0aC1uLGs9MDtrPG07aysrKTA9PT0obS1rKSVwJiYwIT09ayYmKGgrPWMpLGgrPWYuY2hhckF0KGspO2ZvcihrPW07azxmLmxlbmd0aDtrKyspMD09PShmLmxlbmd0aC1rKSVuJiYwIT09ayYmKGgrPWMpLGgrPWYuY2hhckF0KGspO2Zvcig7Yi5sZW5ndGg8ZTspYis9XCIwXCI7ZSYmXCIwXCIhPT1lJiYoaCs9ZCtiLnN1YnN0cigwLGUpKX1sLnB1c2goZz9hLm5lZ1ByZTphLnBvc1ByZSk7bC5wdXNoKGgpO2wucHVzaChnP2EubmVnU3VmOmEucG9zU3VmKTtyZXR1cm4gbC5qb2luKFwiXCIpfWZ1bmN0aW9uIE9iKGIsXG5hLGMpe3ZhciBkPVwiXCI7MD5iJiYoZD1cIi1cIixiPS1iKTtmb3IoYj1cIlwiK2I7Yi5sZW5ndGg8YTspYj1cIjBcIitiO2MmJihiPWIuc3Vic3RyKGIubGVuZ3RoLWEpKTtyZXR1cm4gZCtifWZ1bmN0aW9uICQoYixhLGMsZCl7Yz1jfHwwO3JldHVybiBmdW5jdGlvbihlKXtlPWVbXCJnZXRcIitiXSgpO2lmKDA8Y3x8ZT4tYyllKz1jOzA9PT1lJiYtMTI9PWMmJihlPTEyKTtyZXR1cm4gT2IoZSxhLGQpfX1mdW5jdGlvbiBwYihiLGEpe3JldHVybiBmdW5jdGlvbihjLGQpe3ZhciBlPWNbXCJnZXRcIitiXSgpLGc9RmEoYT9cIlNIT1JUXCIrYjpiKTtyZXR1cm4gZFtnXVtlXX19ZnVuY3Rpb24gSmMoYil7ZnVuY3Rpb24gYShhKXt2YXIgYjtpZihiPWEubWF0Y2goYykpe2E9bmV3IERhdGUoMCk7dmFyIGc9MCxmPTAsaD1iWzhdP2Euc2V0VVRDRnVsbFllYXI6YS5zZXRGdWxsWWVhcixsPWJbOF0/YS5zZXRVVENIb3VyczphLnNldEhvdXJzO2JbOV0mJihnPVkoYls5XStiWzEwXSksZj1ZKGJbOV0rYlsxMV0pKTtcbmguY2FsbChhLFkoYlsxXSksWShiWzJdKS0xLFkoYlszXSkpO2c9WShiWzRdfHwwKS1nO2Y9WShiWzVdfHwwKS1mO2g9WShiWzZdfHwwKTtiPU1hdGgucm91bmQoMUUzKnBhcnNlRmxvYXQoXCIwLlwiKyhiWzddfHwwKSkpO2wuY2FsbChhLGcsZixoLGIpfXJldHVybiBhfXZhciBjPS9eKFxcZHs0fSktPyhcXGRcXGQpLT8oXFxkXFxkKSg/OlQoXFxkXFxkKSg/Ojo/KFxcZFxcZCkoPzo6PyhcXGRcXGQpKD86XFwuKFxcZCspKT8pPyk/KFp8KFsrLV0pKFxcZFxcZCk6PyhcXGRcXGQpKT8pPyQvO3JldHVybiBmdW5jdGlvbihjLGUpe3ZhciBnPVwiXCIsZj1bXSxoLGw7ZT1lfHxcIm1lZGl1bURhdGVcIjtlPWIuREFURVRJTUVfRk9STUFUU1tlXXx8ZTt3KGMpJiYoYz1HZS50ZXN0KGMpP1koYyk6YShjKSk7dmIoYykmJihjPW5ldyBEYXRlKGMpKTtpZighTmEoYykpcmV0dXJuIGM7Zm9yKDtlOykobD1IZS5leGVjKGUpKT8oZj1mLmNvbmNhdCh5YS5jYWxsKGwsMSkpLGU9Zi5wb3AoKSk6KGYucHVzaChlKSxlPW51bGwpO3EoZixmdW5jdGlvbihhKXtoPVxuSWVbYV07Zys9aD9oKGMsYi5EQVRFVElNRV9GT1JNQVRTKTphLnJlcGxhY2UoLyheJ3wnJCkvZyxcIlwiKS5yZXBsYWNlKC8nJy9nLFwiJ1wiKX0pO3JldHVybiBnfX1mdW5jdGlvbiBDZSgpe3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm4gcWEoYiwhMCl9fWZ1bmN0aW9uIERlKCl7cmV0dXJuIGZ1bmN0aW9uKGIsYSl7aWYoIU0oYikmJiF3KGIpKXJldHVybiBiO2E9WShhKTtpZih3KGIpKXJldHVybiBhPzA8PWE/Yi5zbGljZSgwLGEpOmIuc2xpY2UoYSxiLmxlbmd0aCk6XCJcIjt2YXIgYz1bXSxkLGU7YT5iLmxlbmd0aD9hPWIubGVuZ3RoOmE8LWIubGVuZ3RoJiYoYT0tYi5sZW5ndGgpOzA8YT8oZD0wLGU9YSk6KGQ9Yi5sZW5ndGgrYSxlPWIubGVuZ3RoKTtmb3IoO2Q8ZTtkKyspYy5wdXNoKGJbZF0pO3JldHVybiBjfX1mdW5jdGlvbiBMYyhiKXtyZXR1cm4gZnVuY3Rpb24oYSxjLGQpe2Z1bmN0aW9uIGUoYSxiKXtyZXR1cm4gUWEoYik/ZnVuY3Rpb24oYixjKXtyZXR1cm4gYShjLGIpfTphfVxuZnVuY3Rpb24gZyhhLGIpe3ZhciBjPXR5cGVvZiBhLGQ9dHlwZW9mIGI7cmV0dXJuIGM9PWQ/KFwic3RyaW5nXCI9PWMmJihhPWEudG9Mb3dlckNhc2UoKSxiPWIudG9Mb3dlckNhc2UoKSksYT09PWI/MDphPGI/LTE6MSk6YzxkPy0xOjF9aWYoIU0oYSl8fCFjKXJldHVybiBhO2M9TShjKT9jOltjXTtjPVVjKGMsZnVuY3Rpb24oYSl7dmFyIGM9ITEsZD1hfHxEYTtpZih3KGEpKXtpZihcIitcIj09YS5jaGFyQXQoMCl8fFwiLVwiPT1hLmNoYXJBdCgwKSljPVwiLVwiPT1hLmNoYXJBdCgwKSxhPWEuc3Vic3RyaW5nKDEpO2Q9YihhKTtpZihkLmNvbnN0YW50KXt2YXIgZj1kKCk7cmV0dXJuIGUoZnVuY3Rpb24oYSxiKXtyZXR1cm4gZyhhW2ZdLGJbZl0pfSxjKX19cmV0dXJuIGUoZnVuY3Rpb24oYSxiKXtyZXR1cm4gZyhkKGEpLGQoYikpfSxjKX0pO2Zvcih2YXIgZj1bXSxoPTA7aDxhLmxlbmd0aDtoKyspZi5wdXNoKGFbaF0pO3JldHVybiBmLnNvcnQoZShmdW5jdGlvbihhLGIpe2Zvcih2YXIgZD1cbjA7ZDxjLmxlbmd0aDtkKyspe3ZhciBlPWNbZF0oYSxiKTtpZigwIT09ZSlyZXR1cm4gZX1yZXR1cm4gMH0sZCkpfX1mdW5jdGlvbiB2YShiKXtQKGIpJiYoYj17bGluazpifSk7Yi5yZXN0cmljdD1iLnJlc3RyaWN0fHxcIkFDXCI7cmV0dXJuIGFhKGIpfWZ1bmN0aW9uIE9jKGIsYSxjLGQpe2Z1bmN0aW9uIGUoYSxjKXtjPWM/XCItXCIrZmIoYyxcIi1cIik6XCJcIjtkLnJlbW92ZUNsYXNzKGIsKGE/cWI6cmIpK2MpO2QuYWRkQ2xhc3MoYiwoYT9yYjpxYikrYyl9dmFyIGc9dGhpcyxmPWIucGFyZW50KCkuY29udHJvbGxlcihcImZvcm1cIil8fHNiLGg9MCxsPWcuJGVycm9yPXt9LGs9W107Zy4kbmFtZT1hLm5hbWV8fGEubmdGb3JtO2cuJGRpcnR5PSExO2cuJHByaXN0aW5lPSEwO2cuJHZhbGlkPSEwO2cuJGludmFsaWQ9ITE7Zi4kYWRkQ29udHJvbChnKTtiLmFkZENsYXNzKExhKTtlKCEwKTtnLiRhZGRDb250cm9sPWZ1bmN0aW9uKGEpe0FhKGEuJG5hbWUsXCJpbnB1dFwiKTtrLnB1c2goYSk7YS4kbmFtZSYmXG4oZ1thLiRuYW1lXT1hKX07Zy4kcmVtb3ZlQ29udHJvbD1mdW5jdGlvbihhKXthLiRuYW1lJiZnW2EuJG5hbWVdPT09YSYmZGVsZXRlIGdbYS4kbmFtZV07cShsLGZ1bmN0aW9uKGIsYyl7Zy4kc2V0VmFsaWRpdHkoYywhMCxhKX0pO09hKGssYSl9O2cuJHNldFZhbGlkaXR5PWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1sW2FdO2lmKGIpZCYmKE9hKGQsYyksZC5sZW5ndGh8fChoLS0saHx8KGUoYiksZy4kdmFsaWQ9ITAsZy4kaW52YWxpZD0hMSksbFthXT0hMSxlKCEwLGEpLGYuJHNldFZhbGlkaXR5KGEsITAsZykpKTtlbHNle2h8fGUoYik7aWYoZCl7aWYoLTEhPWRiKGQsYykpcmV0dXJufWVsc2UgbFthXT1kPVtdLGgrKyxlKCExLGEpLGYuJHNldFZhbGlkaXR5KGEsITEsZyk7ZC5wdXNoKGMpO2cuJHZhbGlkPSExO2cuJGludmFsaWQ9ITB9fTtnLiRzZXREaXJ0eT1mdW5jdGlvbigpe2QucmVtb3ZlQ2xhc3MoYixMYSk7ZC5hZGRDbGFzcyhiLHRiKTtnLiRkaXJ0eT0hMDtnLiRwcmlzdGluZT1cbiExO2YuJHNldERpcnR5KCl9O2cuJHNldFByaXN0aW5lPWZ1bmN0aW9uKCl7ZC5yZW1vdmVDbGFzcyhiLHRiKTtkLmFkZENsYXNzKGIsTGEpO2cuJGRpcnR5PSExO2cuJHByaXN0aW5lPSEwO3EoayxmdW5jdGlvbihhKXthLiRzZXRQcmlzdGluZSgpfSl9fWZ1bmN0aW9uIHBhKGIsYSxjLGQpe2IuJHNldFZhbGlkaXR5KGEsYyk7cmV0dXJuIGM/ZDpzfWZ1bmN0aW9uIEplKGIsYSxjKXt2YXIgZD1jLnByb3AoXCJ2YWxpZGl0eVwiKTtYKGQpJiZiLiRwYXJzZXJzLnB1c2goZnVuY3Rpb24oYyl7aWYoYi4kZXJyb3JbYV18fCEoZC5iYWRJbnB1dHx8ZC5jdXN0b21FcnJvcnx8ZC50eXBlTWlzbWF0Y2gpfHxkLnZhbHVlTWlzc2luZylyZXR1cm4gYztiLiRzZXRWYWxpZGl0eShhLCExKX0pfWZ1bmN0aW9uIHViKGIsYSxjLGQsZSxnKXt2YXIgZj1hLnByb3AoXCJ2YWxpZGl0eVwiKTtpZighZS5hbmRyb2lkKXt2YXIgaD0hMTthLm9uKFwiY29tcG9zaXRpb25zdGFydFwiLGZ1bmN0aW9uKGEpe2g9ITB9KTtcbmEub24oXCJjb21wb3NpdGlvbmVuZFwiLGZ1bmN0aW9uKCl7aD0hMTtsKCl9KX12YXIgbD1mdW5jdGlvbigpe2lmKCFoKXt2YXIgZT1hLnZhbCgpO1FhKGMubmdUcmltfHxcIlRcIikmJihlPWNhKGUpKTtpZihkLiR2aWV3VmFsdWUhPT1lfHxmJiZcIlwiPT09ZSYmIWYudmFsdWVNaXNzaW5nKWIuJCRwaGFzZT9kLiRzZXRWaWV3VmFsdWUoZSk6Yi4kYXBwbHkoZnVuY3Rpb24oKXtkLiRzZXRWaWV3VmFsdWUoZSl9KX19O2lmKGUuaGFzRXZlbnQoXCJpbnB1dFwiKSlhLm9uKFwiaW5wdXRcIixsKTtlbHNle3ZhciBrLG09ZnVuY3Rpb24oKXtrfHwoaz1nLmRlZmVyKGZ1bmN0aW9uKCl7bCgpO2s9bnVsbH0pKX07YS5vbihcImtleWRvd25cIixmdW5jdGlvbihhKXthPWEua2V5Q29kZTs5MT09PWF8fCgxNTxhJiYxOT5hfHwzNzw9YSYmNDA+PWEpfHxtKCl9KTtpZihlLmhhc0V2ZW50KFwicGFzdGVcIikpYS5vbihcInBhc3RlIGN1dFwiLG0pfWEub24oXCJjaGFuZ2VcIixsKTtkLiRyZW5kZXI9ZnVuY3Rpb24oKXthLnZhbChkLiRpc0VtcHR5KGQuJHZpZXdWYWx1ZSk/XG5cIlwiOmQuJHZpZXdWYWx1ZSl9O3ZhciBuPWMubmdQYXR0ZXJuO24mJigoZT1uLm1hdGNoKC9eXFwvKC4qKVxcLyhbZ2ltXSopJC8pKT8obj1SZWdFeHAoZVsxXSxlWzJdKSxlPWZ1bmN0aW9uKGEpe3JldHVybiBwYShkLFwicGF0dGVyblwiLGQuJGlzRW1wdHkoYSl8fG4udGVzdChhKSxhKX0pOmU9ZnVuY3Rpb24oYyl7dmFyIGU9Yi4kZXZhbChuKTtpZighZXx8IWUudGVzdCl0aHJvdyB0KFwibmdQYXR0ZXJuXCIpKFwibm9yZWdleHBcIixuLGUsaGEoYSkpO3JldHVybiBwYShkLFwicGF0dGVyblwiLGQuJGlzRW1wdHkoYyl8fGUudGVzdChjKSxjKX0sZC4kZm9ybWF0dGVycy5wdXNoKGUpLGQuJHBhcnNlcnMucHVzaChlKSk7aWYoYy5uZ01pbmxlbmd0aCl7dmFyIHA9WShjLm5nTWlubGVuZ3RoKTtlPWZ1bmN0aW9uKGEpe3JldHVybiBwYShkLFwibWlubGVuZ3RoXCIsZC4kaXNFbXB0eShhKXx8YS5sZW5ndGg+PXAsYSl9O2QuJHBhcnNlcnMucHVzaChlKTtkLiRmb3JtYXR0ZXJzLnB1c2goZSl9aWYoYy5uZ01heGxlbmd0aCl7dmFyIHI9XG5ZKGMubmdNYXhsZW5ndGgpO2U9ZnVuY3Rpb24oYSl7cmV0dXJuIHBhKGQsXCJtYXhsZW5ndGhcIixkLiRpc0VtcHR5KGEpfHxhLmxlbmd0aDw9cixhKX07ZC4kcGFyc2Vycy5wdXNoKGUpO2QuJGZvcm1hdHRlcnMucHVzaChlKX19ZnVuY3Rpb24gUGIoYixhKXtiPVwibmdDbGFzc1wiK2I7cmV0dXJuW1wiJGFuaW1hdGVcIixmdW5jdGlvbihjKXtmdW5jdGlvbiBkKGEsYil7dmFyIGM9W10sZD0wO2E6Zm9yKDtkPGEubGVuZ3RoO2QrKyl7Zm9yKHZhciBlPWFbZF0sbT0wO208Yi5sZW5ndGg7bSsrKWlmKGU9PWJbbV0pY29udGludWUgYTtjLnB1c2goZSl9cmV0dXJuIGN9ZnVuY3Rpb24gZShhKXtpZighTShhKSl7aWYodyhhKSlyZXR1cm4gYS5zcGxpdChcIiBcIik7aWYoWChhKSl7dmFyIGI9W107cShhLGZ1bmN0aW9uKGEsYyl7YSYmYi5wdXNoKGMpfSk7cmV0dXJuIGJ9fXJldHVybiBhfXJldHVybntyZXN0cmljdDpcIkFDXCIsbGluazpmdW5jdGlvbihnLGYsaCl7ZnVuY3Rpb24gbChhLGIpe3ZhciBjPVxuZi5kYXRhKFwiJGNsYXNzQ291bnRzXCIpfHx7fSxkPVtdO3EoYSxmdW5jdGlvbihhKXtpZigwPGJ8fGNbYV0pY1thXT0oY1thXXx8MCkrYixjW2FdPT09KygwPGIpJiZkLnB1c2goYSl9KTtmLmRhdGEoXCIkY2xhc3NDb3VudHNcIixjKTtyZXR1cm4gZC5qb2luKFwiIFwiKX1mdW5jdGlvbiBrKGIpe2lmKCEwPT09YXx8Zy4kaW5kZXglMj09PWEpe3ZhciBrPWUoYnx8W10pO2lmKCFtKXt2YXIgcj1sKGssMSk7aC4kYWRkQ2xhc3Mocil9ZWxzZSBpZigheGEoYixtKSl7dmFyIHE9ZShtKSxyPWQoayxxKSxrPWQocSxrKSxrPWwoaywtMSkscj1sKHIsMSk7MD09PXIubGVuZ3RoP2MucmVtb3ZlQ2xhc3MoZixrKTowPT09ay5sZW5ndGg/Yy5hZGRDbGFzcyhmLHIpOmMuc2V0Q2xhc3MoZixyLGspfX1tPWJhKGIpfXZhciBtO2cuJHdhdGNoKGhbYl0saywhMCk7aC4kb2JzZXJ2ZShcImNsYXNzXCIsZnVuY3Rpb24oYSl7ayhnLiRldmFsKGhbYl0pKX0pO1wibmdDbGFzc1wiIT09YiYmZy4kd2F0Y2goXCIkaW5kZXhcIixcbmZ1bmN0aW9uKGMsZCl7dmFyIGY9YyYxO2lmKGYhPT1kJjEpe3ZhciBrPWUoZy4kZXZhbChoW2JdKSk7Zj09PWE/KGY9bChrLDEpLGguJGFkZENsYXNzKGYpKTooZj1sKGssLTEpLGguJHJlbW92ZUNsYXNzKGYpKX19KX19fV19dmFyIEs9ZnVuY3Rpb24oYil7cmV0dXJuIHcoYik/Yi50b0xvd2VyQ2FzZSgpOmJ9LEZjPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksRmE9ZnVuY3Rpb24oYil7cmV0dXJuIHcoYik/Yi50b1VwcGVyQ2FzZSgpOmJ9LFMseSxHYSx5YT1bXS5zbGljZSxLZT1bXS5wdXNoLHdhPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsUGE9dChcIm5nXCIpLEVhPU8uYW5ndWxhcnx8KE8uYW5ndWxhcj17fSksU2EsS2Esa2E9W1wiMFwiLFwiMFwiLFwiMFwiXTtTPVkoKC9tc2llIChcXGQrKS8uZXhlYyhLKG5hdmlnYXRvci51c2VyQWdlbnQpKXx8W10pWzFdKTtpc05hTihTKSYmKFM9WSgoL3RyaWRlbnRcXC8uKjsgcnY6KFxcZCspLy5leGVjKEsobmF2aWdhdG9yLnVzZXJBZ2VudCkpfHxcbltdKVsxXSkpO0MuJGluamVjdD1bXTtEYS4kaW5qZWN0PVtdO3ZhciBjYT1mdW5jdGlvbigpe3JldHVybiBTdHJpbmcucHJvdG90eXBlLnRyaW0/ZnVuY3Rpb24oYil7cmV0dXJuIHcoYik/Yi50cmltKCk6Yn06ZnVuY3Rpb24oYil7cmV0dXJuIHcoYik/Yi5yZXBsYWNlKC9eXFxzXFxzKi8sXCJcIikucmVwbGFjZSgvXFxzXFxzKiQvLFwiXCIpOmJ9fSgpO0thPTk+Uz9mdW5jdGlvbihiKXtiPWIubm9kZU5hbWU/YjpiWzBdO3JldHVybiBiLnNjb3BlTmFtZSYmXCJIVE1MXCIhPWIuc2NvcGVOYW1lP0ZhKGIuc2NvcGVOYW1lK1wiOlwiK2Iubm9kZU5hbWUpOmIubm9kZU5hbWV9OmZ1bmN0aW9uKGIpe3JldHVybiBiLm5vZGVOYW1lP2Iubm9kZU5hbWU6YlswXS5ub2RlTmFtZX07dmFyIFhjPS9bQS1aXS9nLCRjPXtmdWxsOlwiMS4yLjE2XCIsbWFqb3I6MSxtaW5vcjoyLGRvdDoxNixjb2RlTmFtZTpcImJhZGdlci1lbnVtZXJhdGlvblwifSxVYT1OLmNhY2hlPXt9LGdiPU4uZXhwYW5kbz1cIm5nLVwiKyhuZXcgRGF0ZSkuZ2V0VGltZSgpLFxubWU9MSxQYz1PLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXI/ZnVuY3Rpb24oYixhLGMpe2IuYWRkRXZlbnRMaXN0ZW5lcihhLGMsITEpfTpmdW5jdGlvbihiLGEsYyl7Yi5hdHRhY2hFdmVudChcIm9uXCIrYSxjKX0sRmI9Ty5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyP2Z1bmN0aW9uKGIsYSxjKXtiLnJlbW92ZUV2ZW50TGlzdGVuZXIoYSxjLCExKX06ZnVuY3Rpb24oYixhLGMpe2IuZGV0YWNoRXZlbnQoXCJvblwiK2EsYyl9O04uX2RhdGE9ZnVuY3Rpb24oYil7cmV0dXJuIHRoaXMuY2FjaGVbYlt0aGlzLmV4cGFuZG9dXXx8e319O3ZhciBoZT0vKFtcXDpcXC1cXF9dKyguKSkvZyxpZT0vXm1veihbQS1aXSkvLEJiPXQoXCJqcUxpdGVcIiksamU9L148KFxcdyspXFxzKlxcLz8+KD86PFxcL1xcMT58KSQvLENiPS88fCYjP1xcdys7LyxrZT0vPChbXFx3Ol0rKS8sbGU9LzwoPyFhcmVhfGJyfGNvbHxlbWJlZHxocnxpbWd8aW5wdXR8bGlua3xtZXRhfHBhcmFtKSgoW1xcdzpdKylbXj5dKilcXC8+L2dpLGVhPVxue29wdGlvbjpbMSwnPHNlbGVjdCBtdWx0aXBsZT1cIm11bHRpcGxlXCI+JyxcIjwvc2VsZWN0PlwiXSx0aGVhZDpbMSxcIjx0YWJsZT5cIixcIjwvdGFibGU+XCJdLGNvbDpbMixcIjx0YWJsZT48Y29sZ3JvdXA+XCIsXCI8L2NvbGdyb3VwPjwvdGFibGU+XCJdLHRyOlsyLFwiPHRhYmxlPjx0Ym9keT5cIixcIjwvdGJvZHk+PC90YWJsZT5cIl0sdGQ6WzMsXCI8dGFibGU+PHRib2R5Pjx0cj5cIixcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiXSxfZGVmYXVsdDpbMCxcIlwiLFwiXCJdfTtlYS5vcHRncm91cD1lYS5vcHRpb247ZWEudGJvZHk9ZWEudGZvb3Q9ZWEuY29sZ3JvdXA9ZWEuY2FwdGlvbj1lYS50aGVhZDtlYS50aD1lYS50ZDt2YXIgSmE9Ti5wcm90b3R5cGU9e3JlYWR5OmZ1bmN0aW9uKGIpe2Z1bmN0aW9uIGEoKXtjfHwoYz0hMCxiKCkpfXZhciBjPSExO1wiY29tcGxldGVcIj09PVUucmVhZHlTdGF0ZT9zZXRUaW1lb3V0KGEpOih0aGlzLm9uKFwiRE9NQ29udGVudExvYWRlZFwiLGEpLE4oTykub24oXCJsb2FkXCIsYSkpfSx0b1N0cmluZzpmdW5jdGlvbigpe3ZhciBiPVxuW107cSh0aGlzLGZ1bmN0aW9uKGEpe2IucHVzaChcIlwiK2EpfSk7cmV0dXJuXCJbXCIrYi5qb2luKFwiLCBcIikrXCJdXCJ9LGVxOmZ1bmN0aW9uKGIpe3JldHVybiAwPD1iP3kodGhpc1tiXSk6eSh0aGlzW3RoaXMubGVuZ3RoK2JdKX0sbGVuZ3RoOjAscHVzaDpLZSxzb3J0OltdLnNvcnQsc3BsaWNlOltdLnNwbGljZX0sa2I9e307cShcIm11bHRpcGxlIHNlbGVjdGVkIGNoZWNrZWQgZGlzYWJsZWQgcmVhZE9ubHkgcmVxdWlyZWQgb3BlblwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihiKXtrYltLKGIpXT1ifSk7dmFyIG5jPXt9O3EoXCJpbnB1dCBzZWxlY3Qgb3B0aW9uIHRleHRhcmVhIGJ1dHRvbiBmb3JtIGRldGFpbHNcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYil7bmNbRmEoYildPSEwfSk7cSh7ZGF0YTpqYyxpbmhlcml0ZWREYXRhOmpiLHNjb3BlOmZ1bmN0aW9uKGIpe3JldHVybiB5KGIpLmRhdGEoXCIkc2NvcGVcIil8fGpiKGIucGFyZW50Tm9kZXx8YixbXCIkaXNvbGF0ZVNjb3BlXCIsXCIkc2NvcGVcIl0pfSxcbmlzb2xhdGVTY29wZTpmdW5jdGlvbihiKXtyZXR1cm4geShiKS5kYXRhKFwiJGlzb2xhdGVTY29wZVwiKXx8eShiKS5kYXRhKFwiJGlzb2xhdGVTY29wZU5vVGVtcGxhdGVcIil9LGNvbnRyb2xsZXI6a2MsaW5qZWN0b3I6ZnVuY3Rpb24oYil7cmV0dXJuIGpiKGIsXCIkaW5qZWN0b3JcIil9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYixhKXtiLnJlbW92ZUF0dHJpYnV0ZShhKX0saGFzQ2xhc3M6R2IsY3NzOmZ1bmN0aW9uKGIsYSxjKXthPVRhKGEpO2lmKEIoYykpYi5zdHlsZVthXT1jO2Vsc2V7dmFyIGQ7OD49UyYmKGQ9Yi5jdXJyZW50U3R5bGUmJmIuY3VycmVudFN0eWxlW2FdLFwiXCI9PT1kJiYoZD1cImF1dG9cIikpO2Q9ZHx8Yi5zdHlsZVthXTs4Pj1TJiYoZD1cIlwiPT09ZD9zOmQpO3JldHVybiBkfX0sYXR0cjpmdW5jdGlvbihiLGEsYyl7dmFyIGQ9SyhhKTtpZihrYltkXSlpZihCKGMpKWM/KGJbYV09ITAsYi5zZXRBdHRyaWJ1dGUoYSxkKSk6KGJbYV09ITEsYi5yZW1vdmVBdHRyaWJ1dGUoZCkpO1xuZWxzZSByZXR1cm4gYlthXXx8KGIuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW0oYSl8fEMpLnNwZWNpZmllZD9kOnM7ZWxzZSBpZihCKGMpKWIuc2V0QXR0cmlidXRlKGEsYyk7ZWxzZSBpZihiLmdldEF0dHJpYnV0ZSlyZXR1cm4gYj1iLmdldEF0dHJpYnV0ZShhLDIpLG51bGw9PT1iP3M6Yn0scHJvcDpmdW5jdGlvbihiLGEsYyl7aWYoQihjKSliW2FdPWM7ZWxzZSByZXR1cm4gYlthXX0sdGV4dDpmdW5jdGlvbigpe2Z1bmN0aW9uIGIoYixkKXt2YXIgZT1hW2Iubm9kZVR5cGVdO2lmKEUoZCkpcmV0dXJuIGU/YltlXTpcIlwiO2JbZV09ZH12YXIgYT1bXTs5PlM/KGFbMV09XCJpbm5lclRleHRcIixhWzNdPVwibm9kZVZhbHVlXCIpOmFbMV09YVszXT1cInRleHRDb250ZW50XCI7Yi4kZHY9XCJcIjtyZXR1cm4gYn0oKSx2YWw6ZnVuY3Rpb24oYixhKXtpZihFKGEpKXtpZihcIlNFTEVDVFwiPT09S2EoYikmJmIubXVsdGlwbGUpe3ZhciBjPVtdO3EoYi5vcHRpb25zLGZ1bmN0aW9uKGEpe2Euc2VsZWN0ZWQmJlxuYy5wdXNoKGEudmFsdWV8fGEudGV4dCl9KTtyZXR1cm4gMD09PWMubGVuZ3RoP251bGw6Y31yZXR1cm4gYi52YWx1ZX1iLnZhbHVlPWF9LGh0bWw6ZnVuY3Rpb24oYixhKXtpZihFKGEpKXJldHVybiBiLmlubmVySFRNTDtmb3IodmFyIGM9MCxkPWIuY2hpbGROb2RlcztjPGQubGVuZ3RoO2MrKylIYShkW2NdKTtiLmlubmVySFRNTD1hfSxlbXB0eTpsY30sZnVuY3Rpb24oYixhKXtOLnByb3RvdHlwZVthXT1mdW5jdGlvbihhLGQpe3ZhciBlLGc7aWYoYiE9PWxjJiYoMj09Yi5sZW5ndGgmJmIhPT1HYiYmYiE9PWtjP2E6ZCk9PT1zKXtpZihYKGEpKXtmb3IoZT0wO2U8dGhpcy5sZW5ndGg7ZSsrKWlmKGI9PT1qYyliKHRoaXNbZV0sYSk7ZWxzZSBmb3IoZyBpbiBhKWIodGhpc1tlXSxnLGFbZ10pO3JldHVybiB0aGlzfWU9Yi4kZHY7Zz1lPT09cz9NYXRoLm1pbih0aGlzLmxlbmd0aCwxKTp0aGlzLmxlbmd0aDtmb3IodmFyIGY9MDtmPGc7ZisrKXt2YXIgaD1iKHRoaXNbZl0sYSxkKTtlPVxuZT9lK2g6aH1yZXR1cm4gZX1mb3IoZT0wO2U8dGhpcy5sZW5ndGg7ZSsrKWIodGhpc1tlXSxhLGQpO3JldHVybiB0aGlzfX0pO3Eoe3JlbW92ZURhdGE6aGMsZGVhbG9jOkhhLG9uOmZ1bmN0aW9uIGEoYyxkLGUsZyl7aWYoQihnKSl0aHJvdyBCYihcIm9uYXJnc1wiKTt2YXIgZj1sYShjLFwiZXZlbnRzXCIpLGg9bGEoYyxcImhhbmRsZVwiKTtmfHxsYShjLFwiZXZlbnRzXCIsZj17fSk7aHx8bGEoYyxcImhhbmRsZVwiLGg9bmUoYyxmKSk7cShkLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihkKXt2YXIgZz1mW2RdO2lmKCFnKXtpZihcIm1vdXNlZW50ZXJcIj09ZHx8XCJtb3VzZWxlYXZlXCI9PWQpe3ZhciBtPVUuYm9keS5jb250YWluc3x8VS5ib2R5LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uP2Z1bmN0aW9uKGEsYyl7dmFyIGQ9OT09PWEubm9kZVR5cGU/YS5kb2N1bWVudEVsZW1lbnQ6YSxlPWMmJmMucGFyZW50Tm9kZTtyZXR1cm4gYT09PWV8fCEhKGUmJjE9PT1lLm5vZGVUeXBlJiYoZC5jb250YWlucz9kLmNvbnRhaW5zKGUpOlxuYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiYmYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlKSYxNikpfTpmdW5jdGlvbihhLGMpe2lmKGMpZm9yKDtjPWMucGFyZW50Tm9kZTspaWYoYz09PWEpcmV0dXJuITA7cmV0dXJuITF9O2ZbZF09W107YShjLHttb3VzZWxlYXZlOlwibW91c2VvdXRcIixtb3VzZWVudGVyOlwibW91c2VvdmVyXCJ9W2RdLGZ1bmN0aW9uKGEpe3ZhciBjPWEucmVsYXRlZFRhcmdldDtjJiYoYz09PXRoaXN8fG0odGhpcyxjKSl8fGgoYSxkKX0pfWVsc2UgUGMoYyxkLGgpLGZbZF09W107Zz1mW2RdfWcucHVzaChlKX0pfSxvZmY6aWMsb25lOmZ1bmN0aW9uKGEsYyxkKXthPXkoYSk7YS5vbihjLGZ1bmN0aW9uIGcoKXthLm9mZihjLGQpO2Eub2ZmKGMsZyl9KTthLm9uKGMsZCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKGEsYyl7dmFyIGQsZT1hLnBhcmVudE5vZGU7SGEoYSk7cShuZXcgTihjKSxmdW5jdGlvbihjKXtkP2UuaW5zZXJ0QmVmb3JlKGMsZC5uZXh0U2libGluZyk6XG5lLnJlcGxhY2VDaGlsZChjLGEpO2Q9Y30pfSxjaGlsZHJlbjpmdW5jdGlvbihhKXt2YXIgYz1bXTtxKGEuY2hpbGROb2RlcyxmdW5jdGlvbihhKXsxPT09YS5ub2RlVHlwZSYmYy5wdXNoKGEpfSk7cmV0dXJuIGN9LGNvbnRlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiBhLmNvbnRlbnREb2N1bWVudHx8YS5jaGlsZE5vZGVzfHxbXX0sYXBwZW5kOmZ1bmN0aW9uKGEsYyl7cShuZXcgTihjKSxmdW5jdGlvbihjKXsxIT09YS5ub2RlVHlwZSYmMTEhPT1hLm5vZGVUeXBlfHxhLmFwcGVuZENoaWxkKGMpfSl9LHByZXBlbmQ6ZnVuY3Rpb24oYSxjKXtpZigxPT09YS5ub2RlVHlwZSl7dmFyIGQ9YS5maXJzdENoaWxkO3EobmV3IE4oYyksZnVuY3Rpb24oYyl7YS5pbnNlcnRCZWZvcmUoYyxkKX0pfX0sd3JhcDpmdW5jdGlvbihhLGMpe2M9eShjKVswXTt2YXIgZD1hLnBhcmVudE5vZGU7ZCYmZC5yZXBsYWNlQ2hpbGQoYyxhKTtjLmFwcGVuZENoaWxkKGEpfSxyZW1vdmU6ZnVuY3Rpb24oYSl7SGEoYSk7XG52YXIgYz1hLnBhcmVudE5vZGU7YyYmYy5yZW1vdmVDaGlsZChhKX0sYWZ0ZXI6ZnVuY3Rpb24oYSxjKXt2YXIgZD1hLGU9YS5wYXJlbnROb2RlO3EobmV3IE4oYyksZnVuY3Rpb24oYSl7ZS5pbnNlcnRCZWZvcmUoYSxkLm5leHRTaWJsaW5nKTtkPWF9KX0sYWRkQ2xhc3M6aWIscmVtb3ZlQ2xhc3M6aGIsdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24oYSxjLGQpe2MmJnEoYy5zcGxpdChcIiBcIiksZnVuY3Rpb24oYyl7dmFyIGc9ZDtFKGcpJiYoZz0hR2IoYSxjKSk7KGc/aWI6aGIpKGEsYyl9KX0scGFyZW50OmZ1bmN0aW9uKGEpe3JldHVybihhPWEucGFyZW50Tm9kZSkmJjExIT09YS5ub2RlVHlwZT9hOm51bGx9LG5leHQ6ZnVuY3Rpb24oYSl7aWYoYS5uZXh0RWxlbWVudFNpYmxpbmcpcmV0dXJuIGEubmV4dEVsZW1lbnRTaWJsaW5nO2ZvcihhPWEubmV4dFNpYmxpbmc7bnVsbCE9YSYmMSE9PWEubm9kZVR5cGU7KWE9YS5uZXh0U2libGluZztyZXR1cm4gYX0sZmluZDpmdW5jdGlvbihhLGMpe3JldHVybiBhLmdldEVsZW1lbnRzQnlUYWdOYW1lP1xuYS5nZXRFbGVtZW50c0J5VGFnTmFtZShjKTpbXX0sY2xvbmU6RWIsdHJpZ2dlckhhbmRsZXI6ZnVuY3Rpb24oYSxjLGQpe2M9KGxhKGEsXCJldmVudHNcIil8fHt9KVtjXTtkPWR8fFtdO3ZhciBlPVt7cHJldmVudERlZmF1bHQ6QyxzdG9wUHJvcGFnYXRpb246Q31dO3EoYyxmdW5jdGlvbihjKXtjLmFwcGx5KGEsZS5jb25jYXQoZCkpfSl9fSxmdW5jdGlvbihhLGMpe04ucHJvdG90eXBlW2NdPWZ1bmN0aW9uKGMsZSxnKXtmb3IodmFyIGYsaD0wO2g8dGhpcy5sZW5ndGg7aCsrKUUoZik/KGY9YSh0aGlzW2hdLGMsZSxnKSxCKGYpJiYoZj15KGYpKSk6RGIoZixhKHRoaXNbaF0sYyxlLGcpKTtyZXR1cm4gQihmKT9mOnRoaXN9O04ucHJvdG90eXBlLmJpbmQ9Ti5wcm90b3R5cGUub247Ti5wcm90b3R5cGUudW5iaW5kPU4ucHJvdG90eXBlLm9mZn0pO1ZhLnByb3RvdHlwZT17cHV0OmZ1bmN0aW9uKGEsYyl7dGhpc1tJYShhKV09Y30sZ2V0OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzW0lhKGEpXX0sXG5yZW1vdmU6ZnVuY3Rpb24oYSl7dmFyIGM9dGhpc1thPUlhKGEpXTtkZWxldGUgdGhpc1thXTtyZXR1cm4gY319O3ZhciBwZT0vXmZ1bmN0aW9uXFxzKlteXFwoXSpcXChcXHMqKFteXFwpXSopXFwpL20scWU9LywvLHJlPS9eXFxzKihfPykoXFxTKz8pXFwxXFxzKiQvLG9lPS8oKFxcL1xcLy4qJCl8KFxcL1xcKltcXHNcXFNdKj9cXCpcXC8pKS9tZyxXYT10KFwiJGluamVjdG9yXCIpLExlPXQoXCIkYW5pbWF0ZVwiKSxMZD1bXCIkcHJvdmlkZVwiLGZ1bmN0aW9uKGEpe3RoaXMuJCRzZWxlY3RvcnM9e307dGhpcy5yZWdpc3Rlcj1mdW5jdGlvbihjLGQpe3ZhciBlPWMrXCItYW5pbWF0aW9uXCI7aWYoYyYmXCIuXCIhPWMuY2hhckF0KDApKXRocm93IExlKFwibm90Y3NlbFwiLGMpO3RoaXMuJCRzZWxlY3RvcnNbYy5zdWJzdHIoMSldPWU7YS5mYWN0b3J5KGUsZCl9O3RoaXMuY2xhc3NOYW1lRmlsdGVyPWZ1bmN0aW9uKGEpezE9PT1hcmd1bWVudHMubGVuZ3RoJiYodGhpcy4kJGNsYXNzTmFtZUZpbHRlcj1hIGluc3RhbmNlb2YgUmVnRXhwP1xuYTpudWxsKTtyZXR1cm4gdGhpcy4kJGNsYXNzTmFtZUZpbHRlcn07dGhpcy4kZ2V0PVtcIiR0aW1lb3V0XCIsXCIkJGFzeW5jQ2FsbGJhY2tcIixmdW5jdGlvbihhLGQpe3JldHVybntlbnRlcjpmdW5jdGlvbihhLGMsZixoKXtmP2YuYWZ0ZXIoYSk6KGMmJmNbMF18fChjPWYucGFyZW50KCkpLGMuYXBwZW5kKGEpKTtoJiZkKGgpfSxsZWF2ZTpmdW5jdGlvbihhLGMpe2EucmVtb3ZlKCk7YyYmZChjKX0sbW92ZTpmdW5jdGlvbihhLGMsZCxoKXt0aGlzLmVudGVyKGEsYyxkLGgpfSxhZGRDbGFzczpmdW5jdGlvbihhLGMsZil7Yz13KGMpP2M6TShjKT9jLmpvaW4oXCIgXCIpOlwiXCI7cShhLGZ1bmN0aW9uKGEpe2liKGEsYyl9KTtmJiZkKGYpfSxyZW1vdmVDbGFzczpmdW5jdGlvbihhLGMsZil7Yz13KGMpP2M6TShjKT9jLmpvaW4oXCIgXCIpOlwiXCI7cShhLGZ1bmN0aW9uKGEpe2hiKGEsYyl9KTtmJiZkKGYpfSxzZXRDbGFzczpmdW5jdGlvbihhLGMsZixoKXtxKGEsZnVuY3Rpb24oYSl7aWIoYSxjKTtoYihhLFxuZil9KTtoJiZkKGgpfSxlbmFibGVkOkN9fV19XSxqYT10KFwiJGNvbXBpbGVcIik7Y2MuJGluamVjdD1bXCIkcHJvdmlkZVwiLFwiJCRzYW5pdGl6ZVVyaVByb3ZpZGVyXCJdO3ZhciB0ZT0vXih4W1xcOlxcLV9dfGRhdGFbXFw6XFwtX10pL2ksdmM9dChcIiRpbnRlcnBvbGF0ZVwiKSxNZT0vXihbXlxcPyNdKikoXFw/KFteI10qKSk/KCMoLiopKT8kLyx3ZT17aHR0cDo4MCxodHRwczo0NDMsZnRwOjIxfSxLYj10KFwiJGxvY2F0aW9uXCIpO0FjLnByb3RvdHlwZT1MYi5wcm90b3R5cGU9emMucHJvdG90eXBlPXskJGh0bWw1OiExLCQkcmVwbGFjZTohMSxhYnNVcmw6bmIoXCIkJGFic1VybFwiKSx1cmw6ZnVuY3Rpb24oYSxjKXtpZihFKGEpKXJldHVybiB0aGlzLiQkdXJsO3ZhciBkPU1lLmV4ZWMoYSk7ZFsxXSYmdGhpcy5wYXRoKGRlY29kZVVSSUNvbXBvbmVudChkWzFdKSk7KGRbMl18fGRbMV0pJiZ0aGlzLnNlYXJjaChkWzNdfHxcIlwiKTt0aGlzLmhhc2goZFs1XXx8XCJcIixjKTtyZXR1cm4gdGhpc30scHJvdG9jb2w6bmIoXCIkJHByb3RvY29sXCIpLFxuaG9zdDpuYihcIiQkaG9zdFwiKSxwb3J0Om5iKFwiJCRwb3J0XCIpLHBhdGg6QmMoXCIkJHBhdGhcIixmdW5jdGlvbihhKXtyZXR1cm5cIi9cIj09YS5jaGFyQXQoMCk/YTpcIi9cIithfSksc2VhcmNoOmZ1bmN0aW9uKGEsYyl7c3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe2Nhc2UgMDpyZXR1cm4gdGhpcy4kJHNlYXJjaDtjYXNlIDE6aWYodyhhKSl0aGlzLiQkc2VhcmNoPVliKGEpO2Vsc2UgaWYoWChhKSl0aGlzLiQkc2VhcmNoPWE7ZWxzZSB0aHJvdyBLYihcImlzcmNoYXJnXCIpO2JyZWFrO2RlZmF1bHQ6RShjKXx8bnVsbD09PWM/ZGVsZXRlIHRoaXMuJCRzZWFyY2hbYV06dGhpcy4kJHNlYXJjaFthXT1jfXRoaXMuJCRjb21wb3NlKCk7cmV0dXJuIHRoaXN9LGhhc2g6QmMoXCIkJGhhc2hcIixEYSkscmVwbGFjZTpmdW5jdGlvbigpe3RoaXMuJCRyZXBsYWNlPSEwO3JldHVybiB0aGlzfX07dmFyIEJhPXQoXCIkcGFyc2VcIiksRWM9e30sdGEsTWE9e1wibnVsbFwiOmZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9LFwidHJ1ZVwiOmZ1bmN0aW9uKCl7cmV0dXJuITB9LFxuXCJmYWxzZVwiOmZ1bmN0aW9uKCl7cmV0dXJuITF9LHVuZGVmaW5lZDpDLFwiK1wiOmZ1bmN0aW9uKGEsYyxkLGUpe2Q9ZChhLGMpO2U9ZShhLGMpO3JldHVybiBCKGQpP0IoZSk/ZCtlOmQ6QihlKT9lOnN9LFwiLVwiOmZ1bmN0aW9uKGEsYyxkLGUpe2Q9ZChhLGMpO2U9ZShhLGMpO3JldHVybihCKGQpP2Q6MCktKEIoZSk/ZTowKX0sXCIqXCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKSplKGEsYyl9LFwiL1wiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYykvZShhLGMpfSxcIiVcIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpJWUoYSxjKX0sXCJeXCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKV5lKGEsYyl9LFwiPVwiOkMsXCI9PT1cIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpPT09ZShhLGMpfSxcIiE9PVwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYykhPT1lKGEsYyl9LFwiPT1cIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpPT1lKGEsXG5jKX0sXCIhPVwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYykhPWUoYSxjKX0sXCI8XCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKTxlKGEsYyl9LFwiPlwiOmZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBkKGEsYyk+ZShhLGMpfSxcIjw9XCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKTw9ZShhLGMpfSxcIj49XCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKT49ZShhLGMpfSxcIiYmXCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKSYmZShhLGMpfSxcInx8XCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGQoYSxjKXx8ZShhLGMpfSxcIiZcIjpmdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gZChhLGMpJmUoYSxjKX0sXCJ8XCI6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIGUoYSxjKShhLGMsZChhLGMpKX0sXCIhXCI6ZnVuY3Rpb24oYSxjLGQpe3JldHVybiFkKGEsYyl9fSxOZT17bjpcIlxcblwiLGY6XCJcXGZcIixyOlwiXFxyXCIsdDpcIlxcdFwiLHY6XCJcXHZcIixcIidcIjpcIidcIiwnXCInOidcIid9LFxuTmI9ZnVuY3Rpb24oYSl7dGhpcy5vcHRpb25zPWF9O05iLnByb3RvdHlwZT17Y29uc3RydWN0b3I6TmIsbGV4OmZ1bmN0aW9uKGEpe3RoaXMudGV4dD1hO3RoaXMuaW5kZXg9MDt0aGlzLmNoPXM7dGhpcy5sYXN0Q2g9XCI6XCI7dGhpcy50b2tlbnM9W107dmFyIGM7Zm9yKGE9W107dGhpcy5pbmRleDx0aGlzLnRleHQubGVuZ3RoOyl7dGhpcy5jaD10aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO2lmKHRoaXMuaXMoXCJcXFwiJ1wiKSl0aGlzLnJlYWRTdHJpbmcodGhpcy5jaCk7ZWxzZSBpZih0aGlzLmlzTnVtYmVyKHRoaXMuY2gpfHx0aGlzLmlzKFwiLlwiKSYmdGhpcy5pc051bWJlcih0aGlzLnBlZWsoKSkpdGhpcy5yZWFkTnVtYmVyKCk7ZWxzZSBpZih0aGlzLmlzSWRlbnQodGhpcy5jaCkpdGhpcy5yZWFkSWRlbnQoKSx0aGlzLndhcyhcInssXCIpJiYoXCJ7XCI9PT1hWzBdJiYoYz10aGlzLnRva2Vuc1t0aGlzLnRva2Vucy5sZW5ndGgtMV0pKSYmKGMuanNvbj0tMT09PWMudGV4dC5pbmRleE9mKFwiLlwiKSk7XG5lbHNlIGlmKHRoaXMuaXMoXCIoKXt9W10uLDs6P1wiKSl0aGlzLnRva2Vucy5wdXNoKHtpbmRleDp0aGlzLmluZGV4LHRleHQ6dGhpcy5jaCxqc29uOnRoaXMud2FzKFwiOlssXCIpJiZ0aGlzLmlzKFwie1tcIil8fHRoaXMuaXMoXCJ9XTosXCIpfSksdGhpcy5pcyhcIntbXCIpJiZhLnVuc2hpZnQodGhpcy5jaCksdGhpcy5pcyhcIn1dXCIpJiZhLnNoaWZ0KCksdGhpcy5pbmRleCsrO2Vsc2UgaWYodGhpcy5pc1doaXRlc3BhY2UodGhpcy5jaCkpe3RoaXMuaW5kZXgrKztjb250aW51ZX1lbHNle3ZhciBkPXRoaXMuY2grdGhpcy5wZWVrKCksZT1kK3RoaXMucGVlaygyKSxnPU1hW3RoaXMuY2hdLGY9TWFbZF0saD1NYVtlXTtoPyh0aGlzLnRva2Vucy5wdXNoKHtpbmRleDp0aGlzLmluZGV4LHRleHQ6ZSxmbjpofSksdGhpcy5pbmRleCs9Myk6Zj8odGhpcy50b2tlbnMucHVzaCh7aW5kZXg6dGhpcy5pbmRleCx0ZXh0OmQsZm46Zn0pLHRoaXMuaW5kZXgrPTIpOmc/KHRoaXMudG9rZW5zLnB1c2goe2luZGV4OnRoaXMuaW5kZXgsXG50ZXh0OnRoaXMuY2gsZm46Zyxqc29uOnRoaXMud2FzKFwiWyw6XCIpJiZ0aGlzLmlzKFwiKy1cIil9KSx0aGlzLmluZGV4Kz0xKTp0aGlzLnRocm93RXJyb3IoXCJVbmV4cGVjdGVkIG5leHQgY2hhcmFjdGVyIFwiLHRoaXMuaW5kZXgsdGhpcy5pbmRleCsxKX10aGlzLmxhc3RDaD10aGlzLmNofXJldHVybiB0aGlzLnRva2Vuc30saXM6ZnVuY3Rpb24oYSl7cmV0dXJuLTEhPT1hLmluZGV4T2YodGhpcy5jaCl9LHdhczpmdW5jdGlvbihhKXtyZXR1cm4tMSE9PWEuaW5kZXhPZih0aGlzLmxhc3RDaCl9LHBlZWs6ZnVuY3Rpb24oYSl7YT1hfHwxO3JldHVybiB0aGlzLmluZGV4K2E8dGhpcy50ZXh0Lmxlbmd0aD90aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgrYSk6ITF9LGlzTnVtYmVyOmZ1bmN0aW9uKGEpe3JldHVyblwiMFwiPD1hJiZcIjlcIj49YX0saXNXaGl0ZXNwYWNlOmZ1bmN0aW9uKGEpe3JldHVyblwiIFwiPT09YXx8XCJcXHJcIj09PWF8fFwiXFx0XCI9PT1hfHxcIlxcblwiPT09YXx8XCJcXHZcIj09PWF8fFwiXFx1MDBhMFwiPT09XG5hfSxpc0lkZW50OmZ1bmN0aW9uKGEpe3JldHVyblwiYVwiPD1hJiZcInpcIj49YXx8XCJBXCI8PWEmJlwiWlwiPj1hfHxcIl9cIj09PWF8fFwiJFwiPT09YX0saXNFeHBPcGVyYXRvcjpmdW5jdGlvbihhKXtyZXR1cm5cIi1cIj09PWF8fFwiK1wiPT09YXx8dGhpcy5pc051bWJlcihhKX0sdGhyb3dFcnJvcjpmdW5jdGlvbihhLGMsZCl7ZD1kfHx0aGlzLmluZGV4O2M9QihjKT9cInMgXCIrYytcIi1cIit0aGlzLmluZGV4K1wiIFtcIit0aGlzLnRleHQuc3Vic3RyaW5nKGMsZCkrXCJdXCI6XCIgXCIrZDt0aHJvdyBCYShcImxleGVyclwiLGEsYyx0aGlzLnRleHQpO30scmVhZE51bWJlcjpmdW5jdGlvbigpe2Zvcih2YXIgYT1cIlwiLGM9dGhpcy5pbmRleDt0aGlzLmluZGV4PHRoaXMudGV4dC5sZW5ndGg7KXt2YXIgZD1LKHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCkpO2lmKFwiLlwiPT1kfHx0aGlzLmlzTnVtYmVyKGQpKWErPWQ7ZWxzZXt2YXIgZT10aGlzLnBlZWsoKTtpZihcImVcIj09ZCYmdGhpcy5pc0V4cE9wZXJhdG9yKGUpKWErPVxuZDtlbHNlIGlmKHRoaXMuaXNFeHBPcGVyYXRvcihkKSYmZSYmdGhpcy5pc051bWJlcihlKSYmXCJlXCI9PWEuY2hhckF0KGEubGVuZ3RoLTEpKWErPWQ7ZWxzZSBpZighdGhpcy5pc0V4cE9wZXJhdG9yKGQpfHxlJiZ0aGlzLmlzTnVtYmVyKGUpfHxcImVcIiE9YS5jaGFyQXQoYS5sZW5ndGgtMSkpYnJlYWs7ZWxzZSB0aGlzLnRocm93RXJyb3IoXCJJbnZhbGlkIGV4cG9uZW50XCIpfXRoaXMuaW5kZXgrK31hKj0xO3RoaXMudG9rZW5zLnB1c2goe2luZGV4OmMsdGV4dDphLGpzb246ITAsZm46ZnVuY3Rpb24oKXtyZXR1cm4gYX19KX0scmVhZElkZW50OmZ1bmN0aW9uKCl7Zm9yKHZhciBhPXRoaXMsYz1cIlwiLGQ9dGhpcy5pbmRleCxlLGcsZixoO3RoaXMuaW5kZXg8dGhpcy50ZXh0Lmxlbmd0aDspe2g9dGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtpZihcIi5cIj09PWh8fHRoaXMuaXNJZGVudChoKXx8dGhpcy5pc051bWJlcihoKSlcIi5cIj09PWgmJihlPXRoaXMuaW5kZXgpLGMrPWg7ZWxzZSBicmVhaztcbnRoaXMuaW5kZXgrK31pZihlKWZvcihnPXRoaXMuaW5kZXg7Zzx0aGlzLnRleHQubGVuZ3RoOyl7aD10aGlzLnRleHQuY2hhckF0KGcpO2lmKFwiKFwiPT09aCl7Zj1jLnN1YnN0cihlLWQrMSk7Yz1jLnN1YnN0cigwLGUtZCk7dGhpcy5pbmRleD1nO2JyZWFrfWlmKHRoaXMuaXNXaGl0ZXNwYWNlKGgpKWcrKztlbHNlIGJyZWFrfWQ9e2luZGV4OmQsdGV4dDpjfTtpZihNYS5oYXNPd25Qcm9wZXJ0eShjKSlkLmZuPU1hW2NdLGQuanNvbj1NYVtjXTtlbHNle3ZhciBsPURjKGMsdGhpcy5vcHRpb25zLHRoaXMudGV4dCk7ZC5mbj1EKGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGwoYSxjKX0se2Fzc2lnbjpmdW5jdGlvbihkLGUpe3JldHVybiBvYihkLGMsZSxhLnRleHQsYS5vcHRpb25zKX19KX10aGlzLnRva2Vucy5wdXNoKGQpO2YmJih0aGlzLnRva2Vucy5wdXNoKHtpbmRleDplLHRleHQ6XCIuXCIsanNvbjohMX0pLHRoaXMudG9rZW5zLnB1c2goe2luZGV4OmUrMSx0ZXh0OmYsanNvbjohMX0pKX0sXG5yZWFkU3RyaW5nOmZ1bmN0aW9uKGEpe3ZhciBjPXRoaXMuaW5kZXg7dGhpcy5pbmRleCsrO2Zvcih2YXIgZD1cIlwiLGU9YSxnPSExO3RoaXMuaW5kZXg8dGhpcy50ZXh0Lmxlbmd0aDspe3ZhciBmPXRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCksZT1lK2Y7aWYoZylcInVcIj09PWY/KGY9dGhpcy50ZXh0LnN1YnN0cmluZyh0aGlzLmluZGV4KzEsdGhpcy5pbmRleCs1KSxmLm1hdGNoKC9bXFxkYS1mXXs0fS9pKXx8dGhpcy50aHJvd0Vycm9yKFwiSW52YWxpZCB1bmljb2RlIGVzY2FwZSBbXFxcXHVcIitmK1wiXVwiKSx0aGlzLmluZGV4Kz00LGQrPVN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoZiwxNikpKTpkPShnPU5lW2ZdKT9kK2c6ZCtmLGc9ITE7ZWxzZSBpZihcIlxcXFxcIj09PWYpZz0hMDtlbHNle2lmKGY9PT1hKXt0aGlzLmluZGV4Kys7dGhpcy50b2tlbnMucHVzaCh7aW5kZXg6Yyx0ZXh0OmUsc3RyaW5nOmQsanNvbjohMCxmbjpmdW5jdGlvbigpe3JldHVybiBkfX0pO3JldHVybn1kKz1cbmZ9dGhpcy5pbmRleCsrfXRoaXMudGhyb3dFcnJvcihcIlVudGVybWluYXRlZCBxdW90ZVwiLGMpfX07dmFyICRhPWZ1bmN0aW9uKGEsYyxkKXt0aGlzLmxleGVyPWE7dGhpcy4kZmlsdGVyPWM7dGhpcy5vcHRpb25zPWR9OyRhLlpFUk89RChmdW5jdGlvbigpe3JldHVybiAwfSx7Y29uc3RhbnQ6ITB9KTskYS5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOiRhLHBhcnNlOmZ1bmN0aW9uKGEsYyl7dGhpcy50ZXh0PWE7dGhpcy5qc29uPWM7dGhpcy50b2tlbnM9dGhpcy5sZXhlci5sZXgoYSk7YyYmKHRoaXMuYXNzaWdubWVudD10aGlzLmxvZ2ljYWxPUix0aGlzLmZ1bmN0aW9uQ2FsbD10aGlzLmZpZWxkQWNjZXNzPXRoaXMub2JqZWN0SW5kZXg9dGhpcy5maWx0ZXJDaGFpbj1mdW5jdGlvbigpe3RoaXMudGhyb3dFcnJvcihcImlzIG5vdCB2YWxpZCBqc29uXCIse3RleHQ6YSxpbmRleDowfSl9KTt2YXIgZD1jP3RoaXMucHJpbWFyeSgpOnRoaXMuc3RhdGVtZW50cygpOzAhPT10aGlzLnRva2Vucy5sZW5ndGgmJlxudGhpcy50aHJvd0Vycm9yKFwiaXMgYW4gdW5leHBlY3RlZCB0b2tlblwiLHRoaXMudG9rZW5zWzBdKTtkLmxpdGVyYWw9ISFkLmxpdGVyYWw7ZC5jb25zdGFudD0hIWQuY29uc3RhbnQ7cmV0dXJuIGR9LHByaW1hcnk6ZnVuY3Rpb24oKXt2YXIgYTtpZih0aGlzLmV4cGVjdChcIihcIikpYT10aGlzLmZpbHRlckNoYWluKCksdGhpcy5jb25zdW1lKFwiKVwiKTtlbHNlIGlmKHRoaXMuZXhwZWN0KFwiW1wiKSlhPXRoaXMuYXJyYXlEZWNsYXJhdGlvbigpO2Vsc2UgaWYodGhpcy5leHBlY3QoXCJ7XCIpKWE9dGhpcy5vYmplY3QoKTtlbHNle3ZhciBjPXRoaXMuZXhwZWN0KCk7KGE9Yy5mbil8fHRoaXMudGhyb3dFcnJvcihcIm5vdCBhIHByaW1hcnkgZXhwcmVzc2lvblwiLGMpO2MuanNvbiYmKGEuY29uc3RhbnQ9ITAsYS5saXRlcmFsPSEwKX1mb3IodmFyIGQ7Yz10aGlzLmV4cGVjdChcIihcIixcIltcIixcIi5cIik7KVwiKFwiPT09Yy50ZXh0PyhhPXRoaXMuZnVuY3Rpb25DYWxsKGEsZCksZD1udWxsKTpcIltcIj09PWMudGV4dD9cbihkPWEsYT10aGlzLm9iamVjdEluZGV4KGEpKTpcIi5cIj09PWMudGV4dD8oZD1hLGE9dGhpcy5maWVsZEFjY2VzcyhhKSk6dGhpcy50aHJvd0Vycm9yKFwiSU1QT1NTSUJMRVwiKTtyZXR1cm4gYX0sdGhyb3dFcnJvcjpmdW5jdGlvbihhLGMpe3Rocm93IEJhKFwic3ludGF4XCIsYy50ZXh0LGEsYy5pbmRleCsxLHRoaXMudGV4dCx0aGlzLnRleHQuc3Vic3RyaW5nKGMuaW5kZXgpKTt9LHBlZWtUb2tlbjpmdW5jdGlvbigpe2lmKDA9PT10aGlzLnRva2Vucy5sZW5ndGgpdGhyb3cgQmEoXCJ1ZW9lXCIsdGhpcy50ZXh0KTtyZXR1cm4gdGhpcy50b2tlbnNbMF19LHBlZWs6ZnVuY3Rpb24oYSxjLGQsZSl7aWYoMDx0aGlzLnRva2Vucy5sZW5ndGgpe3ZhciBnPXRoaXMudG9rZW5zWzBdLGY9Zy50ZXh0O2lmKGY9PT1hfHxmPT09Y3x8Zj09PWR8fGY9PT1lfHwhKGF8fGN8fGR8fGUpKXJldHVybiBnfXJldHVybiExfSxleHBlY3Q6ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuKGE9dGhpcy5wZWVrKGEsYyxkLFxuZSkpPyh0aGlzLmpzb24mJiFhLmpzb24mJnRoaXMudGhyb3dFcnJvcihcImlzIG5vdCB2YWxpZCBqc29uXCIsYSksdGhpcy50b2tlbnMuc2hpZnQoKSxhKTohMX0sY29uc3VtZTpmdW5jdGlvbihhKXt0aGlzLmV4cGVjdChhKXx8dGhpcy50aHJvd0Vycm9yKFwiaXMgdW5leHBlY3RlZCwgZXhwZWN0aW5nIFtcIithK1wiXVwiLHRoaXMucGVlaygpKX0sdW5hcnlGbjpmdW5jdGlvbihhLGMpe3JldHVybiBEKGZ1bmN0aW9uKGQsZSl7cmV0dXJuIGEoZCxlLGMpfSx7Y29uc3RhbnQ6Yy5jb25zdGFudH0pfSx0ZXJuYXJ5Rm46ZnVuY3Rpb24oYSxjLGQpe3JldHVybiBEKGZ1bmN0aW9uKGUsZyl7cmV0dXJuIGEoZSxnKT9jKGUsZyk6ZChlLGcpfSx7Y29uc3RhbnQ6YS5jb25zdGFudCYmYy5jb25zdGFudCYmZC5jb25zdGFudH0pfSxiaW5hcnlGbjpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIEQoZnVuY3Rpb24oZSxnKXtyZXR1cm4gYyhlLGcsYSxkKX0se2NvbnN0YW50OmEuY29uc3RhbnQmJmQuY29uc3RhbnR9KX0sXG5zdGF0ZW1lbnRzOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPVtdOzspaWYoMDx0aGlzLnRva2Vucy5sZW5ndGgmJiF0aGlzLnBlZWsoXCJ9XCIsXCIpXCIsXCI7XCIsXCJdXCIpJiZhLnB1c2godGhpcy5maWx0ZXJDaGFpbigpKSwhdGhpcy5leHBlY3QoXCI7XCIpKXJldHVybiAxPT09YS5sZW5ndGg/YVswXTpmdW5jdGlvbihjLGQpe2Zvcih2YXIgZSxnPTA7ZzxhLmxlbmd0aDtnKyspe3ZhciBmPWFbZ107ZiYmKGU9ZihjLGQpKX1yZXR1cm4gZX19LGZpbHRlckNoYWluOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPXRoaXMuZXhwcmVzc2lvbigpLGM7OylpZihjPXRoaXMuZXhwZWN0KFwifFwiKSlhPXRoaXMuYmluYXJ5Rm4oYSxjLmZuLHRoaXMuZmlsdGVyKCkpO2Vsc2UgcmV0dXJuIGF9LGZpbHRlcjpmdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzLmV4cGVjdCgpLGM9dGhpcy4kZmlsdGVyKGEudGV4dCksZD1bXTs7KWlmKGE9dGhpcy5leHBlY3QoXCI6XCIpKWQucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7ZWxzZXt2YXIgZT1cbmZ1bmN0aW9uKGEsZSxoKXtoPVtoXTtmb3IodmFyIGw9MDtsPGQubGVuZ3RoO2wrKyloLnB1c2goZFtsXShhLGUpKTtyZXR1cm4gYy5hcHBseShhLGgpfTtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gZX19fSxleHByZXNzaW9uOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYXNzaWdubWVudCgpfSxhc3NpZ25tZW50OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy50ZXJuYXJ5KCksYyxkO3JldHVybihkPXRoaXMuZXhwZWN0KFwiPVwiKSk/KGEuYXNzaWdufHx0aGlzLnRocm93RXJyb3IoXCJpbXBsaWVzIGFzc2lnbm1lbnQgYnV0IFtcIit0aGlzLnRleHQuc3Vic3RyaW5nKDAsZC5pbmRleCkrXCJdIGNhbiBub3QgYmUgYXNzaWduZWQgdG9cIixkKSxjPXRoaXMudGVybmFyeSgpLGZ1bmN0aW9uKGQsZyl7cmV0dXJuIGEuYXNzaWduKGQsYyhkLGcpLGcpfSk6YX0sdGVybmFyeTpmdW5jdGlvbigpe3ZhciBhPXRoaXMubG9naWNhbE9SKCksYyxkO2lmKHRoaXMuZXhwZWN0KFwiP1wiKSl7Yz10aGlzLnRlcm5hcnkoKTtcbmlmKGQ9dGhpcy5leHBlY3QoXCI6XCIpKXJldHVybiB0aGlzLnRlcm5hcnlGbihhLGMsdGhpcy50ZXJuYXJ5KCkpO3RoaXMudGhyb3dFcnJvcihcImV4cGVjdGVkIDpcIixkKX1lbHNlIHJldHVybiBhfSxsb2dpY2FsT1I6ZnVuY3Rpb24oKXtmb3IodmFyIGE9dGhpcy5sb2dpY2FsQU5EKCksYzs7KWlmKGM9dGhpcy5leHBlY3QoXCJ8fFwiKSlhPXRoaXMuYmluYXJ5Rm4oYSxjLmZuLHRoaXMubG9naWNhbEFORCgpKTtlbHNlIHJldHVybiBhfSxsb2dpY2FsQU5EOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5lcXVhbGl0eSgpLGM7aWYoYz10aGlzLmV4cGVjdChcIiYmXCIpKWE9dGhpcy5iaW5hcnlGbihhLGMuZm4sdGhpcy5sb2dpY2FsQU5EKCkpO3JldHVybiBhfSxlcXVhbGl0eTpmdW5jdGlvbigpe3ZhciBhPXRoaXMucmVsYXRpb25hbCgpLGM7aWYoYz10aGlzLmV4cGVjdChcIj09XCIsXCIhPVwiLFwiPT09XCIsXCIhPT1cIikpYT10aGlzLmJpbmFyeUZuKGEsYy5mbix0aGlzLmVxdWFsaXR5KCkpO3JldHVybiBhfSxcbnJlbGF0aW9uYWw6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmFkZGl0aXZlKCksYztpZihjPXRoaXMuZXhwZWN0KFwiPFwiLFwiPlwiLFwiPD1cIixcIj49XCIpKWE9dGhpcy5iaW5hcnlGbihhLGMuZm4sdGhpcy5yZWxhdGlvbmFsKCkpO3JldHVybiBhfSxhZGRpdGl2ZTpmdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzLm11bHRpcGxpY2F0aXZlKCksYztjPXRoaXMuZXhwZWN0KFwiK1wiLFwiLVwiKTspYT10aGlzLmJpbmFyeUZuKGEsYy5mbix0aGlzLm11bHRpcGxpY2F0aXZlKCkpO3JldHVybiBhfSxtdWx0aXBsaWNhdGl2ZTpmdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzLnVuYXJ5KCksYztjPXRoaXMuZXhwZWN0KFwiKlwiLFwiL1wiLFwiJVwiKTspYT10aGlzLmJpbmFyeUZuKGEsYy5mbix0aGlzLnVuYXJ5KCkpO3JldHVybiBhfSx1bmFyeTpmdW5jdGlvbigpe3ZhciBhO3JldHVybiB0aGlzLmV4cGVjdChcIitcIik/dGhpcy5wcmltYXJ5KCk6KGE9dGhpcy5leHBlY3QoXCItXCIpKT90aGlzLmJpbmFyeUZuKCRhLlpFUk8sYS5mbixcbnRoaXMudW5hcnkoKSk6KGE9dGhpcy5leHBlY3QoXCIhXCIpKT90aGlzLnVuYXJ5Rm4oYS5mbix0aGlzLnVuYXJ5KCkpOnRoaXMucHJpbWFyeSgpfSxmaWVsZEFjY2VzczpmdW5jdGlvbihhKXt2YXIgYz10aGlzLGQ9dGhpcy5leHBlY3QoKS50ZXh0LGU9RGMoZCx0aGlzLm9wdGlvbnMsdGhpcy50ZXh0KTtyZXR1cm4gRChmdW5jdGlvbihjLGQsaCl7cmV0dXJuIGUoaHx8YShjLGQpKX0se2Fzc2lnbjpmdW5jdGlvbihlLGYsaCl7cmV0dXJuIG9iKGEoZSxoKSxkLGYsYy50ZXh0LGMub3B0aW9ucyl9fSl9LG9iamVjdEluZGV4OmZ1bmN0aW9uKGEpe3ZhciBjPXRoaXMsZD10aGlzLmV4cHJlc3Npb24oKTt0aGlzLmNvbnN1bWUoXCJdXCIpO3JldHVybiBEKGZ1bmN0aW9uKGUsZyl7dmFyIGY9YShlLGcpLGg9ZChlLGcpLGw7aWYoIWYpcmV0dXJuIHM7KGY9WmEoZltoXSxjLnRleHQpKSYmKGYudGhlbiYmYy5vcHRpb25zLnVud3JhcFByb21pc2VzKSYmKGw9ZixcIiQkdlwiaW4gZnx8KGwuJCR2PXMsbC50aGVuKGZ1bmN0aW9uKGEpe2wuJCR2PVxuYX0pKSxmPWYuJCR2KTtyZXR1cm4gZn0se2Fzc2lnbjpmdW5jdGlvbihlLGcsZil7dmFyIGg9ZChlLGYpO3JldHVybiBaYShhKGUsZiksYy50ZXh0KVtoXT1nfX0pfSxmdW5jdGlvbkNhbGw6ZnVuY3Rpb24oYSxjKXt2YXIgZD1bXTtpZihcIilcIiE9PXRoaXMucGVla1Rva2VuKCkudGV4dCl7ZG8gZC5wdXNoKHRoaXMuZXhwcmVzc2lvbigpKTt3aGlsZSh0aGlzLmV4cGVjdChcIixcIikpfXRoaXMuY29uc3VtZShcIilcIik7dmFyIGU9dGhpcztyZXR1cm4gZnVuY3Rpb24oZyxmKXtmb3IodmFyIGg9W10sbD1jP2MoZyxmKTpnLGs9MDtrPGQubGVuZ3RoO2srKyloLnB1c2goZFtrXShnLGYpKTtrPWEoZyxmLGwpfHxDO1phKGwsZS50ZXh0KTtaYShrLGUudGV4dCk7aD1rLmFwcGx5P2suYXBwbHkobCxoKTprKGhbMF0saFsxXSxoWzJdLGhbM10saFs0XSk7cmV0dXJuIFphKGgsZS50ZXh0KX19LGFycmF5RGVjbGFyYXRpb246ZnVuY3Rpb24oKXt2YXIgYT1bXSxjPSEwO2lmKFwiXVwiIT09dGhpcy5wZWVrVG9rZW4oKS50ZXh0KXtkb3tpZih0aGlzLnBlZWsoXCJdXCIpKWJyZWFrO1xudmFyIGQ9dGhpcy5leHByZXNzaW9uKCk7YS5wdXNoKGQpO2QuY29uc3RhbnR8fChjPSExKX13aGlsZSh0aGlzLmV4cGVjdChcIixcIikpfXRoaXMuY29uc3VtZShcIl1cIik7cmV0dXJuIEQoZnVuY3Rpb24oYyxkKXtmb3IodmFyIGY9W10saD0wO2g8YS5sZW5ndGg7aCsrKWYucHVzaChhW2hdKGMsZCkpO3JldHVybiBmfSx7bGl0ZXJhbDohMCxjb25zdGFudDpjfSl9LG9iamVjdDpmdW5jdGlvbigpe3ZhciBhPVtdLGM9ITA7aWYoXCJ9XCIhPT10aGlzLnBlZWtUb2tlbigpLnRleHQpe2Rve2lmKHRoaXMucGVlayhcIn1cIikpYnJlYWs7dmFyIGQ9dGhpcy5leHBlY3QoKSxkPWQuc3RyaW5nfHxkLnRleHQ7dGhpcy5jb25zdW1lKFwiOlwiKTt2YXIgZT10aGlzLmV4cHJlc3Npb24oKTthLnB1c2goe2tleTpkLHZhbHVlOmV9KTtlLmNvbnN0YW50fHwoYz0hMSl9d2hpbGUodGhpcy5leHBlY3QoXCIsXCIpKX10aGlzLmNvbnN1bWUoXCJ9XCIpO3JldHVybiBEKGZ1bmN0aW9uKGMsZCl7Zm9yKHZhciBlPXt9LGw9MDtsPFxuYS5sZW5ndGg7bCsrKXt2YXIgaz1hW2xdO2Vbay5rZXldPWsudmFsdWUoYyxkKX1yZXR1cm4gZX0se2xpdGVyYWw6ITAsY29uc3RhbnQ6Y30pfX07dmFyIE1iPXt9LHVhPXQoXCIkc2NlXCIpLGdhPXtIVE1MOlwiaHRtbFwiLENTUzpcImNzc1wiLFVSTDpcInVybFwiLFJFU09VUkNFX1VSTDpcInJlc291cmNlVXJsXCIsSlM6XCJqc1wifSxXPVUuY3JlYXRlRWxlbWVudChcImFcIiksSGM9c2EoTy5sb2NhdGlvbi5ocmVmLCEwKTtnYy4kaW5qZWN0PVtcIiRwcm92aWRlXCJdO0ljLiRpbmplY3Q9W1wiJGxvY2FsZVwiXTtLYy4kaW5qZWN0PVtcIiRsb2NhbGVcIl07dmFyIE5jPVwiLlwiLEllPXt5eXl5OiQoXCJGdWxsWWVhclwiLDQpLHl5OiQoXCJGdWxsWWVhclwiLDIsMCwhMCkseTokKFwiRnVsbFllYXJcIiwxKSxNTU1NOnBiKFwiTW9udGhcIiksTU1NOnBiKFwiTW9udGhcIiwhMCksTU06JChcIk1vbnRoXCIsMiwxKSxNOiQoXCJNb250aFwiLDEsMSksZGQ6JChcIkRhdGVcIiwyKSxkOiQoXCJEYXRlXCIsMSksSEg6JChcIkhvdXJzXCIsMiksSDokKFwiSG91cnNcIixcbjEpLGhoOiQoXCJIb3Vyc1wiLDIsLTEyKSxoOiQoXCJIb3Vyc1wiLDEsLTEyKSxtbTokKFwiTWludXRlc1wiLDIpLG06JChcIk1pbnV0ZXNcIiwxKSxzczokKFwiU2Vjb25kc1wiLDIpLHM6JChcIlNlY29uZHNcIiwxKSxzc3M6JChcIk1pbGxpc2Vjb25kc1wiLDMpLEVFRUU6cGIoXCJEYXlcIiksRUVFOnBiKFwiRGF5XCIsITApLGE6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gMTI+YS5nZXRIb3VycygpP2MuQU1QTVNbMF06Yy5BTVBNU1sxXX0sWjpmdW5jdGlvbihhKXthPS0xKmEuZ2V0VGltZXpvbmVPZmZzZXQoKTtyZXR1cm4gYT0oMDw9YT9cIitcIjpcIlwiKSsoT2IoTWF0aFswPGE/XCJmbG9vclwiOlwiY2VpbFwiXShhLzYwKSwyKStPYihNYXRoLmFicyhhJTYwKSwyKSl9fSxIZT0vKCg/OlteeU1kSGhtc2FaRSddKyl8KD86Jyg/OlteJ118JycpKicpfCg/OkUrfHkrfE0rfGQrfEgrfGgrfG0rfHMrfGF8WikpKC4qKS8sR2U9L15cXC0/XFxkKyQvO0pjLiRpbmplY3Q9W1wiJGxvY2FsZVwiXTt2YXIgRWU9YWEoSyksRmU9YWEoRmEpO0xjLiRpbmplY3Q9XG5bXCIkcGFyc2VcIl07dmFyIGNkPWFhKHtyZXN0cmljdDpcIkVcIixjb21waWxlOmZ1bmN0aW9uKGEsYyl7OD49UyYmKGMuaHJlZnx8Yy5uYW1lfHxjLiRzZXQoXCJocmVmXCIsXCJcIiksYS5hcHBlbmQoVS5jcmVhdGVDb21tZW50KFwiSUUgZml4XCIpKSk7aWYoIWMuaHJlZiYmIWMueGxpbmtIcmVmJiYhYy5uYW1lKXJldHVybiBmdW5jdGlvbihhLGMpe3ZhciBnPVwiW29iamVjdCBTVkdBbmltYXRlZFN0cmluZ11cIj09PXdhLmNhbGwoYy5wcm9wKFwiaHJlZlwiKSk/XCJ4bGluazpocmVmXCI6XCJocmVmXCI7Yy5vbihcImNsaWNrXCIsZnVuY3Rpb24oYSl7Yy5hdHRyKGcpfHxhLnByZXZlbnREZWZhdWx0KCl9KX19fSksemI9e307cShrYixmdW5jdGlvbihhLGMpe2lmKFwibXVsdGlwbGVcIiE9YSl7dmFyIGQ9bmEoXCJuZy1cIitjKTt6YltkXT1mdW5jdGlvbigpe3JldHVybntwcmlvcml0eToxMDAsbGluazpmdW5jdGlvbihhLGcsZil7YS4kd2F0Y2goZltkXSxmdW5jdGlvbihhKXtmLiRzZXQoYywhIWEpfSl9fX19fSk7cShbXCJzcmNcIixcblwic3Jjc2V0XCIsXCJocmVmXCJdLGZ1bmN0aW9uKGEpe3ZhciBjPW5hKFwibmctXCIrYSk7emJbY109ZnVuY3Rpb24oKXtyZXR1cm57cHJpb3JpdHk6OTksbGluazpmdW5jdGlvbihkLGUsZyl7dmFyIGY9YSxoPWE7XCJocmVmXCI9PT1hJiZcIltvYmplY3QgU1ZHQW5pbWF0ZWRTdHJpbmddXCI9PT13YS5jYWxsKGUucHJvcChcImhyZWZcIikpJiYoaD1cInhsaW5rSHJlZlwiLGcuJGF0dHJbaF09XCJ4bGluazpocmVmXCIsZj1udWxsKTtnLiRvYnNlcnZlKGMsZnVuY3Rpb24oYSl7YSYmKGcuJHNldChoLGEpLFMmJmYmJmUucHJvcChmLGdbaF0pKX0pfX19fSk7dmFyIHNiPXskYWRkQ29udHJvbDpDLCRyZW1vdmVDb250cm9sOkMsJHNldFZhbGlkaXR5OkMsJHNldERpcnR5OkMsJHNldFByaXN0aW5lOkN9O09jLiRpbmplY3Q9W1wiJGVsZW1lbnRcIixcIiRhdHRyc1wiLFwiJHNjb3BlXCIsXCIkYW5pbWF0ZVwiXTt2YXIgUWM9ZnVuY3Rpb24oYSl7cmV0dXJuW1wiJHRpbWVvdXRcIixmdW5jdGlvbihjKXtyZXR1cm57bmFtZTpcImZvcm1cIixcbnJlc3RyaWN0OmE/XCJFQUNcIjpcIkVcIixjb250cm9sbGVyOk9jLGNvbXBpbGU6ZnVuY3Rpb24oKXtyZXR1cm57cHJlOmZ1bmN0aW9uKGEsZSxnLGYpe2lmKCFnLmFjdGlvbil7dmFyIGg9ZnVuY3Rpb24oYSl7YS5wcmV2ZW50RGVmYXVsdD9hLnByZXZlbnREZWZhdWx0KCk6YS5yZXR1cm5WYWx1ZT0hMX07UGMoZVswXSxcInN1Ym1pdFwiLGgpO2Uub24oXCIkZGVzdHJveVwiLGZ1bmN0aW9uKCl7YyhmdW5jdGlvbigpe0ZiKGVbMF0sXCJzdWJtaXRcIixoKX0sMCwhMSl9KX12YXIgbD1lLnBhcmVudCgpLmNvbnRyb2xsZXIoXCJmb3JtXCIpLGs9Zy5uYW1lfHxnLm5nRm9ybTtrJiZvYihhLGssZixrKTtpZihsKWUub24oXCIkZGVzdHJveVwiLGZ1bmN0aW9uKCl7bC4kcmVtb3ZlQ29udHJvbChmKTtrJiZvYihhLGsscyxrKTtEKGYsc2IpfSl9fX19fV19LGRkPVFjKCkscWQ9UWMoITApLE9lPS9eKGZ0cHxodHRwfGh0dHBzKTpcXC9cXC8oXFx3Kzp7MCwxfVxcdypAKT8oXFxTKykoOlswLTldKyk/KFxcL3xcXC8oW1xcdyMhOi4/Kz0mJUAhXFwtXFwvXSkpPyQvLFxuUGU9L15bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+Li1dK0BbYS16MC05LV0rKFxcLlthLXowLTktXSspKiQvaSxRZT0vXlxccyooXFwtfFxcKyk/KFxcZCt8KFxcZCooXFwuXFxkKikpKVxccyokLyxSYz17dGV4dDp1YixudW1iZXI6ZnVuY3Rpb24oYSxjLGQsZSxnLGYpe3ViKGEsYyxkLGUsZyxmKTtlLiRwYXJzZXJzLnB1c2goZnVuY3Rpb24oYSl7dmFyIGM9ZS4kaXNFbXB0eShhKTtpZihjfHxRZS50ZXN0KGEpKXJldHVybiBlLiRzZXRWYWxpZGl0eShcIm51bWJlclwiLCEwKSxcIlwiPT09YT9udWxsOmM/YTpwYXJzZUZsb2F0KGEpO2UuJHNldFZhbGlkaXR5KFwibnVtYmVyXCIsITEpO3JldHVybiBzfSk7SmUoZSxcIm51bWJlclwiLGMpO2UuJGZvcm1hdHRlcnMucHVzaChmdW5jdGlvbihhKXtyZXR1cm4gZS4kaXNFbXB0eShhKT9cIlwiOlwiXCIrYX0pO2QubWluJiYoYT1mdW5jdGlvbihhKXt2YXIgYz1wYXJzZUZsb2F0KGQubWluKTtyZXR1cm4gcGEoZSxcIm1pblwiLGUuJGlzRW1wdHkoYSl8fGE+PWMsYSl9LGUuJHBhcnNlcnMucHVzaChhKSxcbmUuJGZvcm1hdHRlcnMucHVzaChhKSk7ZC5tYXgmJihhPWZ1bmN0aW9uKGEpe3ZhciBjPXBhcnNlRmxvYXQoZC5tYXgpO3JldHVybiBwYShlLFwibWF4XCIsZS4kaXNFbXB0eShhKXx8YTw9YyxhKX0sZS4kcGFyc2Vycy5wdXNoKGEpLGUuJGZvcm1hdHRlcnMucHVzaChhKSk7ZS4kZm9ybWF0dGVycy5wdXNoKGZ1bmN0aW9uKGEpe3JldHVybiBwYShlLFwibnVtYmVyXCIsZS4kaXNFbXB0eShhKXx8dmIoYSksYSl9KX0sdXJsOmZ1bmN0aW9uKGEsYyxkLGUsZyxmKXt1YihhLGMsZCxlLGcsZik7YT1mdW5jdGlvbihhKXtyZXR1cm4gcGEoZSxcInVybFwiLGUuJGlzRW1wdHkoYSl8fE9lLnRlc3QoYSksYSl9O2UuJGZvcm1hdHRlcnMucHVzaChhKTtlLiRwYXJzZXJzLnB1c2goYSl9LGVtYWlsOmZ1bmN0aW9uKGEsYyxkLGUsZyxmKXt1YihhLGMsZCxlLGcsZik7YT1mdW5jdGlvbihhKXtyZXR1cm4gcGEoZSxcImVtYWlsXCIsZS4kaXNFbXB0eShhKXx8UGUudGVzdChhKSxhKX07ZS4kZm9ybWF0dGVycy5wdXNoKGEpO1xuZS4kcGFyc2Vycy5wdXNoKGEpfSxyYWRpbzpmdW5jdGlvbihhLGMsZCxlKXtFKGQubmFtZSkmJmMuYXR0cihcIm5hbWVcIixiYigpKTtjLm9uKFwiY2xpY2tcIixmdW5jdGlvbigpe2NbMF0uY2hlY2tlZCYmYS4kYXBwbHkoZnVuY3Rpb24oKXtlLiRzZXRWaWV3VmFsdWUoZC52YWx1ZSl9KX0pO2UuJHJlbmRlcj1mdW5jdGlvbigpe2NbMF0uY2hlY2tlZD1kLnZhbHVlPT1lLiR2aWV3VmFsdWV9O2QuJG9ic2VydmUoXCJ2YWx1ZVwiLGUuJHJlbmRlcil9LGNoZWNrYm94OmZ1bmN0aW9uKGEsYyxkLGUpe3ZhciBnPWQubmdUcnVlVmFsdWUsZj1kLm5nRmFsc2VWYWx1ZTt3KGcpfHwoZz0hMCk7dyhmKXx8KGY9ITEpO2Mub24oXCJjbGlja1wiLGZ1bmN0aW9uKCl7YS4kYXBwbHkoZnVuY3Rpb24oKXtlLiRzZXRWaWV3VmFsdWUoY1swXS5jaGVja2VkKX0pfSk7ZS4kcmVuZGVyPWZ1bmN0aW9uKCl7Y1swXS5jaGVja2VkPWUuJHZpZXdWYWx1ZX07ZS4kaXNFbXB0eT1mdW5jdGlvbihhKXtyZXR1cm4gYSE9PWd9O1xuZS4kZm9ybWF0dGVycy5wdXNoKGZ1bmN0aW9uKGEpe3JldHVybiBhPT09Z30pO2UuJHBhcnNlcnMucHVzaChmdW5jdGlvbihhKXtyZXR1cm4gYT9nOmZ9KX0saGlkZGVuOkMsYnV0dG9uOkMsc3VibWl0OkMscmVzZXQ6QyxmaWxlOkN9LGRjPVtcIiRicm93c2VyXCIsXCIkc25pZmZlclwiLGZ1bmN0aW9uKGEsYyl7cmV0dXJue3Jlc3RyaWN0OlwiRVwiLHJlcXVpcmU6XCI/bmdNb2RlbFwiLGxpbms6ZnVuY3Rpb24oZCxlLGcsZil7ZiYmKFJjW0soZy50eXBlKV18fFJjLnRleHQpKGQsZSxnLGYsYyxhKX19fV0scmI9XCJuZy12YWxpZFwiLHFiPVwibmctaW52YWxpZFwiLExhPVwibmctcHJpc3RpbmVcIix0Yj1cIm5nLWRpcnR5XCIsUmU9W1wiJHNjb3BlXCIsXCIkZXhjZXB0aW9uSGFuZGxlclwiLFwiJGF0dHJzXCIsXCIkZWxlbWVudFwiLFwiJHBhcnNlXCIsXCIkYW5pbWF0ZVwiLGZ1bmN0aW9uKGEsYyxkLGUsZyxmKXtmdW5jdGlvbiBoKGEsYyl7Yz1jP1wiLVwiK2ZiKGMsXCItXCIpOlwiXCI7Zi5yZW1vdmVDbGFzcyhlLChhP3FiOnJiKStjKTtcbmYuYWRkQ2xhc3MoZSwoYT9yYjpxYikrYyl9dGhpcy4kbW9kZWxWYWx1ZT10aGlzLiR2aWV3VmFsdWU9TnVtYmVyLk5hTjt0aGlzLiRwYXJzZXJzPVtdO3RoaXMuJGZvcm1hdHRlcnM9W107dGhpcy4kdmlld0NoYW5nZUxpc3RlbmVycz1bXTt0aGlzLiRwcmlzdGluZT0hMDt0aGlzLiRkaXJ0eT0hMTt0aGlzLiR2YWxpZD0hMDt0aGlzLiRpbnZhbGlkPSExO3RoaXMuJG5hbWU9ZC5uYW1lO3ZhciBsPWcoZC5uZ01vZGVsKSxrPWwuYXNzaWduO2lmKCFrKXRocm93IHQoXCJuZ01vZGVsXCIpKFwibm9uYXNzaWduXCIsZC5uZ01vZGVsLGhhKGUpKTt0aGlzLiRyZW5kZXI9Qzt0aGlzLiRpc0VtcHR5PWZ1bmN0aW9uKGEpe3JldHVybiBFKGEpfHxcIlwiPT09YXx8bnVsbD09PWF8fGEhPT1hfTt2YXIgbT1lLmluaGVyaXRlZERhdGEoXCIkZm9ybUNvbnRyb2xsZXJcIil8fHNiLG49MCxwPXRoaXMuJGVycm9yPXt9O2UuYWRkQ2xhc3MoTGEpO2goITApO3RoaXMuJHNldFZhbGlkaXR5PWZ1bmN0aW9uKGEsYyl7cFthXSE9PVxuIWMmJihjPyhwW2FdJiZuLS0sbnx8KGgoITApLHRoaXMuJHZhbGlkPSEwLHRoaXMuJGludmFsaWQ9ITEpKTooaCghMSksdGhpcy4kaW52YWxpZD0hMCx0aGlzLiR2YWxpZD0hMSxuKyspLHBbYV09IWMsaChjLGEpLG0uJHNldFZhbGlkaXR5KGEsYyx0aGlzKSl9O3RoaXMuJHNldFByaXN0aW5lPWZ1bmN0aW9uKCl7dGhpcy4kZGlydHk9ITE7dGhpcy4kcHJpc3RpbmU9ITA7Zi5yZW1vdmVDbGFzcyhlLHRiKTtmLmFkZENsYXNzKGUsTGEpfTt0aGlzLiRzZXRWaWV3VmFsdWU9ZnVuY3Rpb24oZCl7dGhpcy4kdmlld1ZhbHVlPWQ7dGhpcy4kcHJpc3RpbmUmJih0aGlzLiRkaXJ0eT0hMCx0aGlzLiRwcmlzdGluZT0hMSxmLnJlbW92ZUNsYXNzKGUsTGEpLGYuYWRkQ2xhc3MoZSx0YiksbS4kc2V0RGlydHkoKSk7cSh0aGlzLiRwYXJzZXJzLGZ1bmN0aW9uKGEpe2Q9YShkKX0pO3RoaXMuJG1vZGVsVmFsdWUhPT1kJiYodGhpcy4kbW9kZWxWYWx1ZT1kLGsoYSxkKSxxKHRoaXMuJHZpZXdDaGFuZ2VMaXN0ZW5lcnMsXG5mdW5jdGlvbihhKXt0cnl7YSgpfWNhdGNoKGQpe2MoZCl9fSkpfTt2YXIgcj10aGlzO2EuJHdhdGNoKGZ1bmN0aW9uKCl7dmFyIGM9bChhKTtpZihyLiRtb2RlbFZhbHVlIT09Yyl7dmFyIGQ9ci4kZm9ybWF0dGVycyxlPWQubGVuZ3RoO2ZvcihyLiRtb2RlbFZhbHVlPWM7ZS0tOyljPWRbZV0oYyk7ci4kdmlld1ZhbHVlIT09YyYmKHIuJHZpZXdWYWx1ZT1jLHIuJHJlbmRlcigpKX1yZXR1cm4gY30pfV0sRmQ9ZnVuY3Rpb24oKXtyZXR1cm57cmVxdWlyZTpbXCJuZ01vZGVsXCIsXCJeP2Zvcm1cIl0sY29udHJvbGxlcjpSZSxsaW5rOmZ1bmN0aW9uKGEsYyxkLGUpe3ZhciBnPWVbMF0sZj1lWzFdfHxzYjtmLiRhZGRDb250cm9sKGcpO2EuJG9uKFwiJGRlc3Ryb3lcIixmdW5jdGlvbigpe2YuJHJlbW92ZUNvbnRyb2woZyl9KX19fSxIZD1hYSh7cmVxdWlyZTpcIm5nTW9kZWxcIixsaW5rOmZ1bmN0aW9uKGEsYyxkLGUpe2UuJHZpZXdDaGFuZ2VMaXN0ZW5lcnMucHVzaChmdW5jdGlvbigpe2EuJGV2YWwoZC5uZ0NoYW5nZSl9KX19KSxcbmVjPWZ1bmN0aW9uKCl7cmV0dXJue3JlcXVpcmU6XCI/bmdNb2RlbFwiLGxpbms6ZnVuY3Rpb24oYSxjLGQsZSl7aWYoZSl7ZC5yZXF1aXJlZD0hMDt2YXIgZz1mdW5jdGlvbihhKXtpZihkLnJlcXVpcmVkJiZlLiRpc0VtcHR5KGEpKWUuJHNldFZhbGlkaXR5KFwicmVxdWlyZWRcIiwhMSk7ZWxzZSByZXR1cm4gZS4kc2V0VmFsaWRpdHkoXCJyZXF1aXJlZFwiLCEwKSxhfTtlLiRmb3JtYXR0ZXJzLnB1c2goZyk7ZS4kcGFyc2Vycy51bnNoaWZ0KGcpO2QuJG9ic2VydmUoXCJyZXF1aXJlZFwiLGZ1bmN0aW9uKCl7ZyhlLiR2aWV3VmFsdWUpfSl9fX19LEdkPWZ1bmN0aW9uKCl7cmV0dXJue3JlcXVpcmU6XCJuZ01vZGVsXCIsbGluazpmdW5jdGlvbihhLGMsZCxlKXt2YXIgZz0oYT0vXFwvKC4qKVxcLy8uZXhlYyhkLm5nTGlzdCkpJiZSZWdFeHAoYVsxXSl8fGQubmdMaXN0fHxcIixcIjtlLiRwYXJzZXJzLnB1c2goZnVuY3Rpb24oYSl7aWYoIUUoYSkpe3ZhciBjPVtdO2EmJnEoYS5zcGxpdChnKSxmdW5jdGlvbihhKXthJiZcbmMucHVzaChjYShhKSl9KTtyZXR1cm4gY319KTtlLiRmb3JtYXR0ZXJzLnB1c2goZnVuY3Rpb24oYSl7cmV0dXJuIE0oYSk/YS5qb2luKFwiLCBcIik6c30pO2UuJGlzRW1wdHk9ZnVuY3Rpb24oYSl7cmV0dXJuIWF8fCFhLmxlbmd0aH19fX0sU2U9L14odHJ1ZXxmYWxzZXxcXGQrKSQvLElkPWZ1bmN0aW9uKCl7cmV0dXJue3ByaW9yaXR5OjEwMCxjb21waWxlOmZ1bmN0aW9uKGEsYyl7cmV0dXJuIFNlLnRlc3QoYy5uZ1ZhbHVlKT9mdW5jdGlvbihhLGMsZyl7Zy4kc2V0KFwidmFsdWVcIixhLiRldmFsKGcubmdWYWx1ZSkpfTpmdW5jdGlvbihhLGMsZyl7YS4kd2F0Y2goZy5uZ1ZhbHVlLGZ1bmN0aW9uKGEpe2cuJHNldChcInZhbHVlXCIsYSl9KX19fX0saWQ9dmEoZnVuY3Rpb24oYSxjLGQpe2MuYWRkQ2xhc3MoXCJuZy1iaW5kaW5nXCIpLmRhdGEoXCIkYmluZGluZ1wiLGQubmdCaW5kKTthLiR3YXRjaChkLm5nQmluZCxmdW5jdGlvbihhKXtjLnRleHQoYT09cz9cIlwiOmEpfSl9KSxrZD1bXCIkaW50ZXJwb2xhdGVcIixcbmZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihjLGQsZSl7Yz1hKGQuYXR0cihlLiRhdHRyLm5nQmluZFRlbXBsYXRlKSk7ZC5hZGRDbGFzcyhcIm5nLWJpbmRpbmdcIikuZGF0YShcIiRiaW5kaW5nXCIsYyk7ZS4kb2JzZXJ2ZShcIm5nQmluZFRlbXBsYXRlXCIsZnVuY3Rpb24oYSl7ZC50ZXh0KGEpfSl9fV0samQ9W1wiJHNjZVwiLFwiJHBhcnNlXCIsZnVuY3Rpb24oYSxjKXtyZXR1cm4gZnVuY3Rpb24oZCxlLGcpe2UuYWRkQ2xhc3MoXCJuZy1iaW5kaW5nXCIpLmRhdGEoXCIkYmluZGluZ1wiLGcubmdCaW5kSHRtbCk7dmFyIGY9YyhnLm5nQmluZEh0bWwpO2QuJHdhdGNoKGZ1bmN0aW9uKCl7cmV0dXJuKGYoZCl8fFwiXCIpLnRvU3RyaW5nKCl9LGZ1bmN0aW9uKGMpe2UuaHRtbChhLmdldFRydXN0ZWRIdG1sKGYoZCkpfHxcIlwiKX0pfX1dLGxkPVBiKFwiXCIsITApLG5kPVBiKFwiT2RkXCIsMCksbWQ9UGIoXCJFdmVuXCIsMSksb2Q9dmEoe2NvbXBpbGU6ZnVuY3Rpb24oYSxjKXtjLiRzZXQoXCJuZ0Nsb2FrXCIscyk7YS5yZW1vdmVDbGFzcyhcIm5nLWNsb2FrXCIpfX0pLFxucGQ9W2Z1bmN0aW9uKCl7cmV0dXJue3Njb3BlOiEwLGNvbnRyb2xsZXI6XCJAXCIscHJpb3JpdHk6NTAwfX1dLGZjPXt9O3EoXCJjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2V1cCBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2Vtb3ZlIG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBrZXlkb3duIGtleXVwIGtleXByZXNzIHN1Ym1pdCBmb2N1cyBibHVyIGNvcHkgY3V0IHBhc3RlXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEpe3ZhciBjPW5hKFwibmctXCIrYSk7ZmNbY109W1wiJHBhcnNlXCIsZnVuY3Rpb24oZCl7cmV0dXJue2NvbXBpbGU6ZnVuY3Rpb24oZSxnKXt2YXIgZj1kKGdbY10pO3JldHVybiBmdW5jdGlvbihjLGQsZSl7ZC5vbihLKGEpLGZ1bmN0aW9uKGEpe2MuJGFwcGx5KGZ1bmN0aW9uKCl7ZihjLHskZXZlbnQ6YX0pfSl9KX19fX1dfSk7dmFyIHNkPVtcIiRhbmltYXRlXCIsZnVuY3Rpb24oYSl7cmV0dXJue3RyYW5zY2x1ZGU6XCJlbGVtZW50XCIscHJpb3JpdHk6NjAwLHRlcm1pbmFsOiEwLHJlc3RyaWN0OlwiQVwiLFxuJCR0bGI6ITAsbGluazpmdW5jdGlvbihjLGQsZSxnLGYpe3ZhciBoLGwsaztjLiR3YXRjaChlLm5nSWYsZnVuY3Rpb24oZyl7UWEoZyk/bHx8KGw9Yy4kbmV3KCksZihsLGZ1bmN0aW9uKGMpe2NbYy5sZW5ndGgrK109VS5jcmVhdGVDb21tZW50KFwiIGVuZCBuZ0lmOiBcIitlLm5nSWYrXCIgXCIpO2g9e2Nsb25lOmN9O2EuZW50ZXIoYyxkLnBhcmVudCgpLGQpfSkpOihrJiYoay5yZW1vdmUoKSxrPW51bGwpLGwmJihsLiRkZXN0cm95KCksbD1udWxsKSxoJiYoaz15YihoLmNsb25lKSxhLmxlYXZlKGssZnVuY3Rpb24oKXtrPW51bGx9KSxoPW51bGwpKX0pfX19XSx0ZD1bXCIkaHR0cFwiLFwiJHRlbXBsYXRlQ2FjaGVcIixcIiRhbmNob3JTY3JvbGxcIixcIiRhbmltYXRlXCIsXCIkc2NlXCIsZnVuY3Rpb24oYSxjLGQsZSxnKXtyZXR1cm57cmVzdHJpY3Q6XCJFQ0FcIixwcmlvcml0eTo0MDAsdGVybWluYWw6ITAsdHJhbnNjbHVkZTpcImVsZW1lbnRcIixjb250cm9sbGVyOkVhLm5vb3AsY29tcGlsZTpmdW5jdGlvbihmLFxuaCl7dmFyIGw9aC5uZ0luY2x1ZGV8fGguc3JjLGs9aC5vbmxvYWR8fFwiXCIsbT1oLmF1dG9zY3JvbGw7cmV0dXJuIGZ1bmN0aW9uKGYsaCxxLHMsdSl7dmFyIEY9MCx2LHksQSx4PWZ1bmN0aW9uKCl7eSYmKHkucmVtb3ZlKCkseT1udWxsKTt2JiYodi4kZGVzdHJveSgpLHY9bnVsbCk7QSYmKGUubGVhdmUoQSxmdW5jdGlvbigpe3k9bnVsbH0pLHk9QSxBPW51bGwpfTtmLiR3YXRjaChnLnBhcnNlQXNSZXNvdXJjZVVybChsKSxmdW5jdGlvbihnKXt2YXIgbD1mdW5jdGlvbigpeyFCKG0pfHxtJiYhZi4kZXZhbChtKXx8ZCgpfSxxPSsrRjtnPyhhLmdldChnLHtjYWNoZTpjfSkuc3VjY2VzcyhmdW5jdGlvbihhKXtpZihxPT09Ril7dmFyIGM9Zi4kbmV3KCk7cy50ZW1wbGF0ZT1hO2E9dShjLGZ1bmN0aW9uKGEpe3goKTtlLmVudGVyKGEsbnVsbCxoLGwpfSk7dj1jO0E9YTt2LiRlbWl0KFwiJGluY2x1ZGVDb250ZW50TG9hZGVkXCIpO2YuJGV2YWwoayl9fSkuZXJyb3IoZnVuY3Rpb24oKXtxPT09XG5GJiZ4KCl9KSxmLiRlbWl0KFwiJGluY2x1ZGVDb250ZW50UmVxdWVzdGVkXCIpKTooeCgpLHMudGVtcGxhdGU9bnVsbCl9KX19fX1dLEpkPVtcIiRjb21waWxlXCIsZnVuY3Rpb24oYSl7cmV0dXJue3Jlc3RyaWN0OlwiRUNBXCIscHJpb3JpdHk6LTQwMCxyZXF1aXJlOlwibmdJbmNsdWRlXCIsbGluazpmdW5jdGlvbihjLGQsZSxnKXtkLmh0bWwoZy50ZW1wbGF0ZSk7YShkLmNvbnRlbnRzKCkpKGMpfX19XSx1ZD12YSh7cHJpb3JpdHk6NDUwLGNvbXBpbGU6ZnVuY3Rpb24oKXtyZXR1cm57cHJlOmZ1bmN0aW9uKGEsYyxkKXthLiRldmFsKGQubmdJbml0KX19fX0pLHZkPXZhKHt0ZXJtaW5hbDohMCxwcmlvcml0eToxRTN9KSx3ZD1bXCIkbG9jYWxlXCIsXCIkaW50ZXJwb2xhdGVcIixmdW5jdGlvbihhLGMpe3ZhciBkPS97fS9nO3JldHVybntyZXN0cmljdDpcIkVBXCIsbGluazpmdW5jdGlvbihlLGcsZil7dmFyIGg9Zi5jb3VudCxsPWYuJGF0dHIud2hlbiYmZy5hdHRyKGYuJGF0dHIud2hlbiksaz1mLm9mZnNldHx8XG4wLG09ZS4kZXZhbChsKXx8e30sbj17fSxwPWMuc3RhcnRTeW1ib2woKSxyPWMuZW5kU3ltYm9sKCkscz0vXndoZW4oTWludXMpPyguKykkLztxKGYsZnVuY3Rpb24oYSxjKXtzLnRlc3QoYykmJihtW0soYy5yZXBsYWNlKFwid2hlblwiLFwiXCIpLnJlcGxhY2UoXCJNaW51c1wiLFwiLVwiKSldPWcuYXR0cihmLiRhdHRyW2NdKSl9KTtxKG0sZnVuY3Rpb24oYSxlKXtuW2VdPWMoYS5yZXBsYWNlKGQscCtoK1wiLVwiK2srcikpfSk7ZS4kd2F0Y2goZnVuY3Rpb24oKXt2YXIgYz1wYXJzZUZsb2F0KGUuJGV2YWwoaCkpO2lmKGlzTmFOKGMpKXJldHVyblwiXCI7YyBpbiBtfHwoYz1hLnBsdXJhbENhdChjLWspKTtyZXR1cm4gbltjXShlLGcsITApfSxmdW5jdGlvbihhKXtnLnRleHQoYSl9KX19fV0seGQ9W1wiJHBhcnNlXCIsXCIkYW5pbWF0ZVwiLGZ1bmN0aW9uKGEsYyl7dmFyIGQ9dChcIm5nUmVwZWF0XCIpO3JldHVybnt0cmFuc2NsdWRlOlwiZWxlbWVudFwiLHByaW9yaXR5OjFFMyx0ZXJtaW5hbDohMCwkJHRsYjohMCxcbmxpbms6ZnVuY3Rpb24oZSxnLGYsaCxsKXt2YXIgaz1mLm5nUmVwZWF0LG09ay5tYXRjaCgvXlxccyooW1xcc1xcU10rPylcXHMraW5cXHMrKFtcXHNcXFNdKz8pKD86XFxzK3RyYWNrXFxzK2J5XFxzKyhbXFxzXFxTXSs/KSk/XFxzKiQvKSxuLHAscixzLHUsRix2PXskaWQ6SWF9O2lmKCFtKXRocm93IGQoXCJpZXhwXCIsayk7Zj1tWzFdO2g9bVsyXTsobT1tWzNdKT8obj1hKG0pLHA9ZnVuY3Rpb24oYSxjLGQpe0YmJih2W0ZdPWEpO3ZbdV09Yzt2LiRpbmRleD1kO3JldHVybiBuKGUsdil9KToocj1mdW5jdGlvbihhLGMpe3JldHVybiBJYShjKX0scz1mdW5jdGlvbihhKXtyZXR1cm4gYX0pO209Zi5tYXRjaCgvXig/OihbXFwkXFx3XSspfFxcKChbXFwkXFx3XSspXFxzKixcXHMqKFtcXCRcXHddKylcXCkpJC8pO2lmKCFtKXRocm93IGQoXCJpaWRleHBcIixmKTt1PW1bM118fG1bMV07Rj1tWzJdO3ZhciBCPXt9O2UuJHdhdGNoQ29sbGVjdGlvbihoLGZ1bmN0aW9uKGEpe3ZhciBmLGgsbT1nWzBdLG4sdj17fSxILFIsdyxDLFQsdCxcbkU9W107aWYoYWIoYSkpVD1hLG49cHx8cjtlbHNle249cHx8cztUPVtdO2Zvcih3IGluIGEpYS5oYXNPd25Qcm9wZXJ0eSh3KSYmXCIkXCIhPXcuY2hhckF0KDApJiZULnB1c2godyk7VC5zb3J0KCl9SD1ULmxlbmd0aDtoPUUubGVuZ3RoPVQubGVuZ3RoO2ZvcihmPTA7ZjxoO2YrKylpZih3PWE9PT1UP2Y6VFtmXSxDPWFbd10sQz1uKHcsQyxmKSxBYShDLFwiYHRyYWNrIGJ5YCBpZFwiKSxCLmhhc093blByb3BlcnR5KEMpKXQ9QltDXSxkZWxldGUgQltDXSx2W0NdPXQsRVtmXT10O2Vsc2V7aWYodi5oYXNPd25Qcm9wZXJ0eShDKSl0aHJvdyBxKEUsZnVuY3Rpb24oYSl7YSYmYS5zY29wZSYmKEJbYS5pZF09YSl9KSxkKFwiZHVwZXNcIixrLEMpO0VbZl09e2lkOkN9O3ZbQ109ITF9Zm9yKHcgaW4gQilCLmhhc093blByb3BlcnR5KHcpJiYodD1CW3ddLGY9eWIodC5jbG9uZSksYy5sZWF2ZShmKSxxKGYsZnVuY3Rpb24oYSl7YS4kJE5HX1JFTU9WRUQ9ITB9KSx0LnNjb3BlLiRkZXN0cm95KCkpO1xuZj0wO2ZvcihoPVQubGVuZ3RoO2Y8aDtmKyspe3c9YT09PVQ/ZjpUW2ZdO0M9YVt3XTt0PUVbZl07RVtmLTFdJiYobT1FW2YtMV0uY2xvbmVbRVtmLTFdLmNsb25lLmxlbmd0aC0xXSk7aWYodC5zY29wZSl7Uj10LnNjb3BlO249bTtkbyBuPW4ubmV4dFNpYmxpbmc7d2hpbGUobiYmbi4kJE5HX1JFTU9WRUQpO3QuY2xvbmVbMF0hPW4mJmMubW92ZSh5Yih0LmNsb25lKSxudWxsLHkobSkpO209dC5jbG9uZVt0LmNsb25lLmxlbmd0aC0xXX1lbHNlIFI9ZS4kbmV3KCk7Ult1XT1DO0YmJihSW0ZdPXcpO1IuJGluZGV4PWY7Ui4kZmlyc3Q9MD09PWY7Ui4kbGFzdD1mPT09SC0xO1IuJG1pZGRsZT0hKFIuJGZpcnN0fHxSLiRsYXN0KTtSLiRvZGQ9IShSLiRldmVuPTA9PT0oZiYxKSk7dC5zY29wZXx8bChSLGZ1bmN0aW9uKGEpe2FbYS5sZW5ndGgrK109VS5jcmVhdGVDb21tZW50KFwiIGVuZCBuZ1JlcGVhdDogXCIraytcIiBcIik7Yy5lbnRlcihhLG51bGwseShtKSk7bT1hO3Quc2NvcGU9Ujt0LmNsb25lPVxuYTt2W3QuaWRdPXR9KX1CPXZ9KX19fV0seWQ9W1wiJGFuaW1hdGVcIixmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oYyxkLGUpe2MuJHdhdGNoKGUubmdTaG93LGZ1bmN0aW9uKGMpe2FbUWEoYyk/XCJyZW1vdmVDbGFzc1wiOlwiYWRkQ2xhc3NcIl0oZCxcIm5nLWhpZGVcIil9KX19XSxyZD1bXCIkYW5pbWF0ZVwiLGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihjLGQsZSl7Yy4kd2F0Y2goZS5uZ0hpZGUsZnVuY3Rpb24oYyl7YVtRYShjKT9cImFkZENsYXNzXCI6XCJyZW1vdmVDbGFzc1wiXShkLFwibmctaGlkZVwiKX0pfX1dLHpkPXZhKGZ1bmN0aW9uKGEsYyxkKXthLiR3YXRjaChkLm5nU3R5bGUsZnVuY3Rpb24oYSxkKXtkJiZhIT09ZCYmcShkLGZ1bmN0aW9uKGEsZCl7Yy5jc3MoZCxcIlwiKX0pO2EmJmMuY3NzKGEpfSwhMCl9KSxBZD1bXCIkYW5pbWF0ZVwiLGZ1bmN0aW9uKGEpe3JldHVybntyZXN0cmljdDpcIkVBXCIscmVxdWlyZTpcIm5nU3dpdGNoXCIsY29udHJvbGxlcjpbXCIkc2NvcGVcIixmdW5jdGlvbigpe3RoaXMuY2FzZXM9XG57fX1dLGxpbms6ZnVuY3Rpb24oYyxkLGUsZyl7dmFyIGYsaCxsLGs9W107Yy4kd2F0Y2goZS5uZ1N3aXRjaHx8ZS5vbixmdW5jdGlvbihkKXt2YXIgbixwPWsubGVuZ3RoO2lmKDA8cCl7aWYobCl7Zm9yKG49MDtuPHA7bisrKWxbbl0ucmVtb3ZlKCk7bD1udWxsfWw9W107Zm9yKG49MDtuPHA7bisrKXt2YXIgcj1oW25dO2tbbl0uJGRlc3Ryb3koKTtsW25dPXI7YS5sZWF2ZShyLGZ1bmN0aW9uKCl7bC5zcGxpY2UobiwxKTswPT09bC5sZW5ndGgmJihsPW51bGwpfSl9fWg9W107az1bXTtpZihmPWcuY2FzZXNbXCIhXCIrZF18fGcuY2FzZXNbXCI/XCJdKWMuJGV2YWwoZS5jaGFuZ2UpLHEoZixmdW5jdGlvbihkKXt2YXIgZT1jLiRuZXcoKTtrLnB1c2goZSk7ZC50cmFuc2NsdWRlKGUsZnVuY3Rpb24oYyl7dmFyIGU9ZC5lbGVtZW50O2gucHVzaChjKTthLmVudGVyKGMsZS5wYXJlbnQoKSxlKX0pfSl9KX19fV0sQmQ9dmEoe3RyYW5zY2x1ZGU6XCJlbGVtZW50XCIscHJpb3JpdHk6ODAwLHJlcXVpcmU6XCJebmdTd2l0Y2hcIixcbmxpbms6ZnVuY3Rpb24oYSxjLGQsZSxnKXtlLmNhc2VzW1wiIVwiK2QubmdTd2l0Y2hXaGVuXT1lLmNhc2VzW1wiIVwiK2QubmdTd2l0Y2hXaGVuXXx8W107ZS5jYXNlc1tcIiFcIitkLm5nU3dpdGNoV2hlbl0ucHVzaCh7dHJhbnNjbHVkZTpnLGVsZW1lbnQ6Y30pfX0pLENkPXZhKHt0cmFuc2NsdWRlOlwiZWxlbWVudFwiLHByaW9yaXR5OjgwMCxyZXF1aXJlOlwiXm5nU3dpdGNoXCIsbGluazpmdW5jdGlvbihhLGMsZCxlLGcpe2UuY2FzZXNbXCI/XCJdPWUuY2FzZXNbXCI/XCJdfHxbXTtlLmNhc2VzW1wiP1wiXS5wdXNoKHt0cmFuc2NsdWRlOmcsZWxlbWVudDpjfSl9fSksRWQ9dmEoe2xpbms6ZnVuY3Rpb24oYSxjLGQsZSxnKXtpZighZyl0aHJvdyB0KFwibmdUcmFuc2NsdWRlXCIpKFwib3JwaGFuXCIsaGEoYykpO2coZnVuY3Rpb24oYSl7Yy5lbXB0eSgpO2MuYXBwZW5kKGEpfSl9fSksZWQ9W1wiJHRlbXBsYXRlQ2FjaGVcIixmdW5jdGlvbihhKXtyZXR1cm57cmVzdHJpY3Q6XCJFXCIsdGVybWluYWw6ITAsY29tcGlsZTpmdW5jdGlvbihjLFxuZCl7XCJ0ZXh0L25nLXRlbXBsYXRlXCI9PWQudHlwZSYmYS5wdXQoZC5pZCxjWzBdLnRleHQpfX19XSxUZT10KFwibmdPcHRpb25zXCIpLERkPWFhKHt0ZXJtaW5hbDohMH0pLGZkPVtcIiRjb21waWxlXCIsXCIkcGFyc2VcIixmdW5jdGlvbihhLGMpe3ZhciBkPS9eXFxzKihbXFxzXFxTXSs/KSg/Olxccythc1xccysoW1xcc1xcU10rPykpPyg/Olxccytncm91cFxccytieVxccysoW1xcc1xcU10rPykpP1xccytmb3JcXHMrKD86KFtcXCRcXHddW1xcJFxcd10qKXwoPzpcXChcXHMqKFtcXCRcXHddW1xcJFxcd10qKVxccyosXFxzKihbXFwkXFx3XVtcXCRcXHddKilcXHMqXFwpKSlcXHMraW5cXHMrKFtcXHNcXFNdKz8pKD86XFxzK3RyYWNrXFxzK2J5XFxzKyhbXFxzXFxTXSs/KSk/JC8sZT17JHNldFZpZXdWYWx1ZTpDfTtyZXR1cm57cmVzdHJpY3Q6XCJFXCIscmVxdWlyZTpbXCJzZWxlY3RcIixcIj9uZ01vZGVsXCJdLGNvbnRyb2xsZXI6W1wiJGVsZW1lbnRcIixcIiRzY29wZVwiLFwiJGF0dHJzXCIsZnVuY3Rpb24oYSxjLGQpe3ZhciBsPXRoaXMsaz17fSxtPWUsbjtsLmRhdGFib3VuZD1cbmQubmdNb2RlbDtsLmluaXQ9ZnVuY3Rpb24oYSxjLGQpe209YTtuPWR9O2wuYWRkT3B0aW9uPWZ1bmN0aW9uKGMpe0FhKGMsJ1wib3B0aW9uIHZhbHVlXCInKTtrW2NdPSEwO20uJHZpZXdWYWx1ZT09YyYmKGEudmFsKGMpLG4ucGFyZW50KCkmJm4ucmVtb3ZlKCkpfTtsLnJlbW92ZU9wdGlvbj1mdW5jdGlvbihhKXt0aGlzLmhhc09wdGlvbihhKSYmKGRlbGV0ZSBrW2FdLG0uJHZpZXdWYWx1ZT09YSYmdGhpcy5yZW5kZXJVbmtub3duT3B0aW9uKGEpKX07bC5yZW5kZXJVbmtub3duT3B0aW9uPWZ1bmN0aW9uKGMpe2M9XCI/IFwiK0lhKGMpK1wiID9cIjtuLnZhbChjKTthLnByZXBlbmQobik7YS52YWwoYyk7bi5wcm9wKFwic2VsZWN0ZWRcIiwhMCl9O2wuaGFzT3B0aW9uPWZ1bmN0aW9uKGEpe3JldHVybiBrLmhhc093blByb3BlcnR5KGEpfTtjLiRvbihcIiRkZXN0cm95XCIsZnVuY3Rpb24oKXtsLnJlbmRlclVua25vd25PcHRpb249Q30pfV0sbGluazpmdW5jdGlvbihlLGYsaCxsKXtmdW5jdGlvbiBrKGEsXG5jLGQsZSl7ZC4kcmVuZGVyPWZ1bmN0aW9uKCl7dmFyIGE9ZC4kdmlld1ZhbHVlO2UuaGFzT3B0aW9uKGEpPyhBLnBhcmVudCgpJiZBLnJlbW92ZSgpLGMudmFsKGEpLFwiXCI9PT1hJiZ3LnByb3AoXCJzZWxlY3RlZFwiLCEwKSk6RShhKSYmdz9jLnZhbChcIlwiKTplLnJlbmRlclVua25vd25PcHRpb24oYSl9O2Mub24oXCJjaGFuZ2VcIixmdW5jdGlvbigpe2EuJGFwcGx5KGZ1bmN0aW9uKCl7QS5wYXJlbnQoKSYmQS5yZW1vdmUoKTtkLiRzZXRWaWV3VmFsdWUoYy52YWwoKSl9KX0pfWZ1bmN0aW9uIG0oYSxjLGQpe3ZhciBlO2QuJHJlbmRlcj1mdW5jdGlvbigpe3ZhciBhPW5ldyBWYShkLiR2aWV3VmFsdWUpO3EoYy5maW5kKFwib3B0aW9uXCIpLGZ1bmN0aW9uKGMpe2Muc2VsZWN0ZWQ9QihhLmdldChjLnZhbHVlKSl9KX07YS4kd2F0Y2goZnVuY3Rpb24oKXt4YShlLGQuJHZpZXdWYWx1ZSl8fChlPWJhKGQuJHZpZXdWYWx1ZSksZC4kcmVuZGVyKCkpfSk7Yy5vbihcImNoYW5nZVwiLGZ1bmN0aW9uKCl7YS4kYXBwbHkoZnVuY3Rpb24oKXt2YXIgYT1cbltdO3EoYy5maW5kKFwib3B0aW9uXCIpLGZ1bmN0aW9uKGMpe2Muc2VsZWN0ZWQmJmEucHVzaChjLnZhbHVlKX0pO2QuJHNldFZpZXdWYWx1ZShhKX0pfSl9ZnVuY3Rpb24gbihlLGYsZyl7ZnVuY3Rpb24gaCgpe3ZhciBhPXtcIlwiOltdfSxjPVtcIlwiXSxkLGsscyx0LHo7dD1nLiRtb2RlbFZhbHVlO3o9eShlKXx8W107dmFyIEU9bj9RYih6KTp6LEYsSSxBO0k9e307cz0hMTt2YXIgRCxIO2lmKHIpaWYodyYmTSh0KSlmb3Iocz1uZXcgVmEoW10pLEE9MDtBPHQubGVuZ3RoO0ErKylJW21dPXRbQV0scy5wdXQodyhlLEkpLHRbQV0pO2Vsc2Ugcz1uZXcgVmEodCk7Zm9yKEE9MDtGPUUubGVuZ3RoLEE8RjtBKyspe2s9QTtpZihuKXtrPUVbQV07aWYoXCIkXCI9PT1rLmNoYXJBdCgwKSljb250aW51ZTtJW25dPWt9SVttXT16W2tdO2Q9cChlLEkpfHxcIlwiOyhrPWFbZF0pfHwoaz1hW2RdPVtdLGMucHVzaChkKSk7cj9kPUIocy5yZW1vdmUodz93KGUsSSk6cShlLEkpKSk6KHc/KGQ9e30sZFttXT10LGQ9XG53KGUsZCk9PT13KGUsSSkpOmQ9dD09PXEoZSxJKSxzPXN8fGQpO0Q9bChlLEkpO0Q9QihEKT9EOlwiXCI7ay5wdXNoKHtpZDp3P3coZSxJKTpuP0VbQV06QSxsYWJlbDpELHNlbGVjdGVkOmR9KX1yfHwodXx8bnVsbD09PXQ/YVtcIlwiXS51bnNoaWZ0KHtpZDpcIlwiLGxhYmVsOlwiXCIsc2VsZWN0ZWQ6IXN9KTpzfHxhW1wiXCJdLnVuc2hpZnQoe2lkOlwiP1wiLGxhYmVsOlwiXCIsc2VsZWN0ZWQ6ITB9KSk7ST0wO2ZvcihFPWMubGVuZ3RoO0k8RTtJKyspe2Q9Y1tJXTtrPWFbZF07eC5sZW5ndGg8PUk/KHQ9e2VsZW1lbnQ6Qy5jbG9uZSgpLmF0dHIoXCJsYWJlbFwiLGQpLGxhYmVsOmsubGFiZWx9LHo9W3RdLHgucHVzaCh6KSxmLmFwcGVuZCh0LmVsZW1lbnQpKTooej14W0ldLHQ9elswXSx0LmxhYmVsIT1kJiZ0LmVsZW1lbnQuYXR0cihcImxhYmVsXCIsdC5sYWJlbD1kKSk7RD1udWxsO0E9MDtmb3IoRj1rLmxlbmd0aDtBPEY7QSsrKXM9a1tBXSwoZD16W0ErMV0pPyhEPWQuZWxlbWVudCxkLmxhYmVsIT09cy5sYWJlbCYmXG5ELnRleHQoZC5sYWJlbD1zLmxhYmVsKSxkLmlkIT09cy5pZCYmRC52YWwoZC5pZD1zLmlkKSxkLnNlbGVjdGVkIT09cy5zZWxlY3RlZCYmRC5wcm9wKFwic2VsZWN0ZWRcIixkLnNlbGVjdGVkPXMuc2VsZWN0ZWQpKTooXCJcIj09PXMuaWQmJnU/SD11OihIPXYuY2xvbmUoKSkudmFsKHMuaWQpLmF0dHIoXCJzZWxlY3RlZFwiLHMuc2VsZWN0ZWQpLnRleHQocy5sYWJlbCksei5wdXNoKHtlbGVtZW50OkgsbGFiZWw6cy5sYWJlbCxpZDpzLmlkLHNlbGVjdGVkOnMuc2VsZWN0ZWR9KSxEP0QuYWZ0ZXIoSCk6dC5lbGVtZW50LmFwcGVuZChIKSxEPUgpO2ZvcihBKys7ei5sZW5ndGg+QTspei5wb3AoKS5lbGVtZW50LnJlbW92ZSgpfWZvcig7eC5sZW5ndGg+STspeC5wb3AoKVswXS5lbGVtZW50LnJlbW92ZSgpfXZhciBrO2lmKCEoaz10Lm1hdGNoKGQpKSl0aHJvdyBUZShcImlleHBcIix0LGhhKGYpKTt2YXIgbD1jKGtbMl18fGtbMV0pLG09a1s0XXx8a1s2XSxuPWtbNV0scD1jKGtbM118fFwiXCIpLHE9XG5jKGtbMl0/a1sxXTptKSx5PWMoa1s3XSksdz1rWzhdP2Moa1s4XSk6bnVsbCx4PVtbe2VsZW1lbnQ6ZixsYWJlbDpcIlwifV1dO3UmJihhKHUpKGUpLHUucmVtb3ZlQ2xhc3MoXCJuZy1zY29wZVwiKSx1LnJlbW92ZSgpKTtmLmVtcHR5KCk7Zi5vbihcImNoYW5nZVwiLGZ1bmN0aW9uKCl7ZS4kYXBwbHkoZnVuY3Rpb24oKXt2YXIgYSxjPXkoZSl8fFtdLGQ9e30saCxrLGwscCx0LHYsdTtpZihyKWZvcihrPVtdLHA9MCx2PXgubGVuZ3RoO3A8djtwKyspZm9yKGE9eFtwXSxsPTEsdD1hLmxlbmd0aDtsPHQ7bCsrKXtpZigoaD1hW2xdLmVsZW1lbnQpWzBdLnNlbGVjdGVkKXtoPWgudmFsKCk7biYmKGRbbl09aCk7aWYodylmb3IodT0wO3U8Yy5sZW5ndGgmJihkW21dPWNbdV0sdyhlLGQpIT1oKTt1KyspO2Vsc2UgZFttXT1jW2hdO2sucHVzaChxKGUsZCkpfX1lbHNle2g9Zi52YWwoKTtpZihcIj9cIj09aClrPXM7ZWxzZSBpZihcIlwiPT09aClrPW51bGw7ZWxzZSBpZih3KWZvcih1PTA7dTxjLmxlbmd0aDt1Kyspe2lmKGRbbV09XG5jW3VdLHcoZSxkKT09aCl7az1xKGUsZCk7YnJlYWt9fWVsc2UgZFttXT1jW2hdLG4mJihkW25dPWgpLGs9cShlLGQpOzE8eFswXS5sZW5ndGgmJnhbMF1bMV0uaWQhPT1oJiYoeFswXVsxXS5zZWxlY3RlZD0hMSl9Zy4kc2V0Vmlld1ZhbHVlKGspfSl9KTtnLiRyZW5kZXI9aDtlLiR3YXRjaChoKX1pZihsWzFdKXt2YXIgcD1sWzBdO2w9bFsxXTt2YXIgcj1oLm11bHRpcGxlLHQ9aC5uZ09wdGlvbnMsdT0hMSx3LHY9eShVLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikpLEM9eShVLmNyZWF0ZUVsZW1lbnQoXCJvcHRncm91cFwiKSksQT12LmNsb25lKCk7aD0wO2Zvcih2YXIgeD1mLmNoaWxkcmVuKCksRD14Lmxlbmd0aDtoPEQ7aCsrKWlmKFwiXCI9PT14W2hdLnZhbHVlKXt3PXU9eC5lcShoKTticmVha31wLmluaXQobCx1LEEpO3ImJihsLiRpc0VtcHR5PWZ1bmN0aW9uKGEpe3JldHVybiFhfHwwPT09YS5sZW5ndGh9KTt0P24oZSxmLGwpOnI/bShlLGYsbCk6ayhlLGYsbCxwKX19fX1dLGhkPVtcIiRpbnRlcnBvbGF0ZVwiLFxuZnVuY3Rpb24oYSl7dmFyIGM9e2FkZE9wdGlvbjpDLHJlbW92ZU9wdGlvbjpDfTtyZXR1cm57cmVzdHJpY3Q6XCJFXCIscHJpb3JpdHk6MTAwLGNvbXBpbGU6ZnVuY3Rpb24oZCxlKXtpZihFKGUudmFsdWUpKXt2YXIgZz1hKGQudGV4dCgpLCEwKTtnfHxlLiRzZXQoXCJ2YWx1ZVwiLGQudGV4dCgpKX1yZXR1cm4gZnVuY3Rpb24oYSxkLGUpe3ZhciBrPWQucGFyZW50KCksbT1rLmRhdGEoXCIkc2VsZWN0Q29udHJvbGxlclwiKXx8ay5wYXJlbnQoKS5kYXRhKFwiJHNlbGVjdENvbnRyb2xsZXJcIik7bSYmbS5kYXRhYm91bmQ/ZC5wcm9wKFwic2VsZWN0ZWRcIiwhMSk6bT1jO2c/YS4kd2F0Y2goZyxmdW5jdGlvbihhLGMpe2UuJHNldChcInZhbHVlXCIsYSk7YSE9PWMmJm0ucmVtb3ZlT3B0aW9uKGMpO20uYWRkT3B0aW9uKGEpfSk6bS5hZGRPcHRpb24oZS52YWx1ZSk7ZC5vbihcIiRkZXN0cm95XCIsZnVuY3Rpb24oKXttLnJlbW92ZU9wdGlvbihlLnZhbHVlKX0pfX19fV0sZ2Q9YWEoe3Jlc3RyaWN0OlwiRVwiLFxudGVybWluYWw6ITB9KTtPLmFuZ3VsYXIuYm9vdHN0cmFwP2NvbnNvbGUubG9nKFwiV0FSTklORzogVHJpZWQgdG8gbG9hZCBhbmd1bGFyIG1vcmUgdGhhbiBvbmNlLlwiKTooKEdhPU8ualF1ZXJ5KT8oeT1HYSxEKEdhLmZuLHtzY29wZTpKYS5zY29wZSxpc29sYXRlU2NvcGU6SmEuaXNvbGF0ZVNjb3BlLGNvbnRyb2xsZXI6SmEuY29udHJvbGxlcixpbmplY3RvcjpKYS5pbmplY3Rvcixpbmhlcml0ZWREYXRhOkphLmluaGVyaXRlZERhdGF9KSxBYihcInJlbW92ZVwiLCEwLCEwLCExKSxBYihcImVtcHR5XCIsITEsITEsITEpLEFiKFwiaHRtbFwiLCExLCExLCEwKSk6eT1OLEVhLmVsZW1lbnQ9eSxaYyhFYSkseShVKS5yZWFkeShmdW5jdGlvbigpe1djKFUsJGIpfSkpfSkod2luZG93LGRvY3VtZW50KTshYW5ndWxhci4kJGNzcCgpJiZhbmd1bGFyLmVsZW1lbnQoZG9jdW1lbnQpLmZpbmQoXCJoZWFkXCIpLnByZXBlbmQoJzxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj5AY2hhcnNldCBcIlVURi04XCI7W25nXFxcXDpjbG9ha10sW25nLWNsb2FrXSxbZGF0YS1uZy1jbG9ha10sW3gtbmctY2xvYWtdLC5uZy1jbG9haywueC1uZy1jbG9haywubmctaGlkZXtkaXNwbGF5Om5vbmUgIWltcG9ydGFudDt9bmdcXFxcOmZvcm17ZGlzcGxheTpibG9jazt9Lm5nLWFuaW1hdGUtYmxvY2stdHJhbnNpdGlvbnN7dHJhbnNpdGlvbjowcyBhbGwhaW1wb3J0YW50Oy13ZWJraXQtdHJhbnNpdGlvbjowcyBhbGwhaW1wb3J0YW50O308L3N0eWxlPicpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YW5ndWxhci5taW4uanMubWFwXG4iLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG4vLyEgbW9tZW50LmpzXG4vLyEgdmVyc2lvbiA6IDIuNy4wXG4vLyEgYXV0aG9ycyA6IFRpbSBXb29kLCBJc2tyZW4gQ2hlcm5ldiwgTW9tZW50LmpzIGNvbnRyaWJ1dG9yc1xuLy8hIGxpY2Vuc2UgOiBNSVRcbi8vISBtb21lbnRqcy5jb21cblxuKGZ1bmN0aW9uICh1bmRlZmluZWQpIHtcblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgQ29uc3RhbnRzXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgdmFyIG1vbWVudCxcbiAgICAgICAgVkVSU0lPTiA9IFwiMi43LjBcIixcbiAgICAgICAgLy8gdGhlIGdsb2JhbC1zY29wZSB0aGlzIGlzIE5PVCB0aGUgZ2xvYmFsIG9iamVjdCBpbiBOb2RlLmpzXG4gICAgICAgIGdsb2JhbFNjb3BlID0gdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB0aGlzLFxuICAgICAgICBvbGRHbG9iYWxNb21lbnQsXG4gICAgICAgIHJvdW5kID0gTWF0aC5yb3VuZCxcbiAgICAgICAgaSxcblxuICAgICAgICBZRUFSID0gMCxcbiAgICAgICAgTU9OVEggPSAxLFxuICAgICAgICBEQVRFID0gMixcbiAgICAgICAgSE9VUiA9IDMsXG4gICAgICAgIE1JTlVURSA9IDQsXG4gICAgICAgIFNFQ09ORCA9IDUsXG4gICAgICAgIE1JTExJU0VDT05EID0gNixcblxuICAgICAgICAvLyBpbnRlcm5hbCBzdG9yYWdlIGZvciBsYW5ndWFnZSBjb25maWcgZmlsZXNcbiAgICAgICAgbGFuZ3VhZ2VzID0ge30sXG5cbiAgICAgICAgLy8gbW9tZW50IGludGVybmFsIHByb3BlcnRpZXNcbiAgICAgICAgbW9tZW50UHJvcGVydGllcyA9IHtcbiAgICAgICAgICAgIF9pc0FNb21lbnRPYmplY3Q6IG51bGwsXG4gICAgICAgICAgICBfaSA6IG51bGwsXG4gICAgICAgICAgICBfZiA6IG51bGwsXG4gICAgICAgICAgICBfbCA6IG51bGwsXG4gICAgICAgICAgICBfc3RyaWN0IDogbnVsbCxcbiAgICAgICAgICAgIF90em0gOiBudWxsLFxuICAgICAgICAgICAgX2lzVVRDIDogbnVsbCxcbiAgICAgICAgICAgIF9vZmZzZXQgOiBudWxsLCAgLy8gb3B0aW9uYWwuIENvbWJpbmUgd2l0aCBfaXNVVENcbiAgICAgICAgICAgIF9wZiA6IG51bGwsXG4gICAgICAgICAgICBfbGFuZyA6IG51bGwgIC8vIG9wdGlvbmFsXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gY2hlY2sgZm9yIG5vZGVKU1xuICAgICAgICBoYXNNb2R1bGUgPSAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpLFxuXG4gICAgICAgIC8vIEFTUC5ORVQganNvbiBkYXRlIGZvcm1hdCByZWdleFxuICAgICAgICBhc3BOZXRKc29uUmVnZXggPSAvXlxcLz9EYXRlXFwoKFxcLT9cXGQrKS9pLFxuICAgICAgICBhc3BOZXRUaW1lU3Bhbkpzb25SZWdleCA9IC8oXFwtKT8oPzooXFxkKilcXC4pPyhcXGQrKVxcOihcXGQrKSg/OlxcOihcXGQrKVxcLj8oXFxkezN9KT8pPy8sXG5cbiAgICAgICAgLy8gZnJvbSBodHRwOi8vZG9jcy5jbG9zdXJlLWxpYnJhcnkuZ29vZ2xlY29kZS5jb20vZ2l0L2Nsb3N1cmVfZ29vZ19kYXRlX2RhdGUuanMuc291cmNlLmh0bWxcbiAgICAgICAgLy8gc29tZXdoYXQgbW9yZSBpbiBsaW5lIHdpdGggNC40LjMuMiAyMDA0IHNwZWMsIGJ1dCBhbGxvd3MgZGVjaW1hbCBhbnl3aGVyZVxuICAgICAgICBpc29EdXJhdGlvblJlZ2V4ID0gL14oLSk/UCg/Oig/OihbMC05LC5dKilZKT8oPzooWzAtOSwuXSopTSk/KD86KFswLTksLl0qKUQpPyg/OlQoPzooWzAtOSwuXSopSCk/KD86KFswLTksLl0qKU0pPyg/OihbMC05LC5dKilTKT8pP3woWzAtOSwuXSopVykkLyxcblxuICAgICAgICAvLyBmb3JtYXQgdG9rZW5zXG4gICAgICAgIGZvcm1hdHRpbmdUb2tlbnMgPSAvKFxcW1teXFxbXSpcXF0pfChcXFxcKT8oTW98TU0/TT9NP3xEb3xERERvfEREP0Q/RD98ZGRkP2Q/fGRvP3x3W298d10/fFdbb3xXXT98UXxZWVlZWVl8WVlZWVl8WVlZWXxZWXxnZyhnZ2c/KT98R0coR0dHPyk/fGV8RXxhfEF8aGg/fEhIP3xtbT98c3M/fFN7MSw0fXxYfHp6P3xaWj98LikvZyxcbiAgICAgICAgbG9jYWxGb3JtYXR0aW5nVG9rZW5zID0gLyhcXFtbXlxcW10qXFxdKXwoXFxcXCk/KExUfExMP0w/TD98bHsxLDR9KS9nLFxuXG4gICAgICAgIC8vIHBhcnNpbmcgdG9rZW4gcmVnZXhlc1xuICAgICAgICBwYXJzZVRva2VuT25lT3JUd29EaWdpdHMgPSAvXFxkXFxkPy8sIC8vIDAgLSA5OVxuICAgICAgICBwYXJzZVRva2VuT25lVG9UaHJlZURpZ2l0cyA9IC9cXGR7MSwzfS8sIC8vIDAgLSA5OTlcbiAgICAgICAgcGFyc2VUb2tlbk9uZVRvRm91ckRpZ2l0cyA9IC9cXGR7MSw0fS8sIC8vIDAgLSA5OTk5XG4gICAgICAgIHBhcnNlVG9rZW5PbmVUb1NpeERpZ2l0cyA9IC9bK1xcLV0/XFxkezEsNn0vLCAvLyAtOTk5LDk5OSAtIDk5OSw5OTlcbiAgICAgICAgcGFyc2VUb2tlbkRpZ2l0cyA9IC9cXGQrLywgLy8gbm9uemVybyBudW1iZXIgb2YgZGlnaXRzXG4gICAgICAgIHBhcnNlVG9rZW5Xb3JkID0gL1swLTldKlsnYS16XFx1MDBBMC1cXHUwNUZGXFx1MDcwMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSt8W1xcdTA2MDAtXFx1MDZGRlxcL10rKFxccyo/W1xcdTA2MDAtXFx1MDZGRl0rKXsxLDJ9L2ksIC8vIGFueSB3b3JkIChvciB0d28pIGNoYXJhY3RlcnMgb3IgbnVtYmVycyBpbmNsdWRpbmcgdHdvL3RocmVlIHdvcmQgbW9udGggaW4gYXJhYmljLlxuICAgICAgICBwYXJzZVRva2VuVGltZXpvbmUgPSAvWnxbXFwrXFwtXVxcZFxcZDo/XFxkXFxkL2dpLCAvLyArMDA6MDAgLTAwOjAwICswMDAwIC0wMDAwIG9yIFpcbiAgICAgICAgcGFyc2VUb2tlblQgPSAvVC9pLCAvLyBUIChJU08gc2VwYXJhdG9yKVxuICAgICAgICBwYXJzZVRva2VuVGltZXN0YW1wTXMgPSAvW1xcK1xcLV0/XFxkKyhcXC5cXGR7MSwzfSk/LywgLy8gMTIzNDU2Nzg5IDEyMzQ1Njc4OS4xMjNcbiAgICAgICAgcGFyc2VUb2tlbk9yZGluYWwgPSAvXFxkezEsMn0vLFxuXG4gICAgICAgIC8vc3RyaWN0IHBhcnNpbmcgcmVnZXhlc1xuICAgICAgICBwYXJzZVRva2VuT25lRGlnaXQgPSAvXFxkLywgLy8gMCAtIDlcbiAgICAgICAgcGFyc2VUb2tlblR3b0RpZ2l0cyA9IC9cXGRcXGQvLCAvLyAwMCAtIDk5XG4gICAgICAgIHBhcnNlVG9rZW5UaHJlZURpZ2l0cyA9IC9cXGR7M30vLCAvLyAwMDAgLSA5OTlcbiAgICAgICAgcGFyc2VUb2tlbkZvdXJEaWdpdHMgPSAvXFxkezR9LywgLy8gMDAwMCAtIDk5OTlcbiAgICAgICAgcGFyc2VUb2tlblNpeERpZ2l0cyA9IC9bKy1dP1xcZHs2fS8sIC8vIC05OTksOTk5IC0gOTk5LDk5OVxuICAgICAgICBwYXJzZVRva2VuU2lnbmVkTnVtYmVyID0gL1srLV0/XFxkKy8sIC8vIC1pbmYgLSBpbmZcblxuICAgICAgICAvLyBpc28gODYwMSByZWdleFxuICAgICAgICAvLyAwMDAwLTAwLTAwIDAwMDAtVzAwIG9yIDAwMDAtVzAwLTAgKyBUICsgMDAgb3IgMDA6MDAgb3IgMDA6MDA6MDAgb3IgMDA6MDA6MDAuMDAwICsgKzAwOjAwIG9yICswMDAwIG9yICswMClcbiAgICAgICAgaXNvUmVnZXggPSAvXlxccyooPzpbKy1dXFxkezZ9fFxcZHs0fSktKD86KFxcZFxcZC1cXGRcXGQpfChXXFxkXFxkJCl8KFdcXGRcXGQtXFxkKXwoXFxkXFxkXFxkKSkoKFR8ICkoXFxkXFxkKDpcXGRcXGQoOlxcZFxcZChcXC5cXGQrKT8pPyk/KT8oW1xcK1xcLV1cXGRcXGQoPzo6P1xcZFxcZCk/fFxccypaKT8pPyQvLFxuXG4gICAgICAgIGlzb0Zvcm1hdCA9ICdZWVlZLU1NLUREVEhIOm1tOnNzWicsXG5cbiAgICAgICAgaXNvRGF0ZXMgPSBbXG4gICAgICAgICAgICBbJ1lZWVlZWS1NTS1ERCcsIC9bKy1dXFxkezZ9LVxcZHsyfS1cXGR7Mn0vXSxcbiAgICAgICAgICAgIFsnWVlZWS1NTS1ERCcsIC9cXGR7NH0tXFxkezJ9LVxcZHsyfS9dLFxuICAgICAgICAgICAgWydHR0dHLVtXXVdXLUUnLCAvXFxkezR9LVdcXGR7Mn0tXFxkL10sXG4gICAgICAgICAgICBbJ0dHR0ctW1ddV1cnLCAvXFxkezR9LVdcXGR7Mn0vXSxcbiAgICAgICAgICAgIFsnWVlZWS1EREQnLCAvXFxkezR9LVxcZHszfS9dXG4gICAgICAgIF0sXG5cbiAgICAgICAgLy8gaXNvIHRpbWUgZm9ybWF0cyBhbmQgcmVnZXhlc1xuICAgICAgICBpc29UaW1lcyA9IFtcbiAgICAgICAgICAgIFsnSEg6bW06c3MuU1NTUycsIC8oVHwgKVxcZFxcZDpcXGRcXGQ6XFxkXFxkXFwuXFxkKy9dLFxuICAgICAgICAgICAgWydISDptbTpzcycsIC8oVHwgKVxcZFxcZDpcXGRcXGQ6XFxkXFxkL10sXG4gICAgICAgICAgICBbJ0hIOm1tJywgLyhUfCApXFxkXFxkOlxcZFxcZC9dLFxuICAgICAgICAgICAgWydISCcsIC8oVHwgKVxcZFxcZC9dXG4gICAgICAgIF0sXG5cbiAgICAgICAgLy8gdGltZXpvbmUgY2h1bmtlciBcIisxMDowMFwiID4gW1wiMTBcIiwgXCIwMFwiXSBvciBcIi0xNTMwXCIgPiBbXCItMTVcIiwgXCIzMFwiXVxuICAgICAgICBwYXJzZVRpbWV6b25lQ2h1bmtlciA9IC8oW1xcK1xcLV18XFxkXFxkKS9naSxcblxuICAgICAgICAvLyBnZXR0ZXIgYW5kIHNldHRlciBuYW1lc1xuICAgICAgICBwcm94eUdldHRlcnNBbmRTZXR0ZXJzID0gJ0RhdGV8SG91cnN8TWludXRlc3xTZWNvbmRzfE1pbGxpc2Vjb25kcycuc3BsaXQoJ3wnKSxcbiAgICAgICAgdW5pdE1pbGxpc2Vjb25kRmFjdG9ycyA9IHtcbiAgICAgICAgICAgICdNaWxsaXNlY29uZHMnIDogMSxcbiAgICAgICAgICAgICdTZWNvbmRzJyA6IDFlMyxcbiAgICAgICAgICAgICdNaW51dGVzJyA6IDZlNCxcbiAgICAgICAgICAgICdIb3VycycgOiAzNmU1LFxuICAgICAgICAgICAgJ0RheXMnIDogODY0ZTUsXG4gICAgICAgICAgICAnTW9udGhzJyA6IDI1OTJlNixcbiAgICAgICAgICAgICdZZWFycycgOiAzMTUzNmU2XG4gICAgICAgIH0sXG5cbiAgICAgICAgdW5pdEFsaWFzZXMgPSB7XG4gICAgICAgICAgICBtcyA6ICdtaWxsaXNlY29uZCcsXG4gICAgICAgICAgICBzIDogJ3NlY29uZCcsXG4gICAgICAgICAgICBtIDogJ21pbnV0ZScsXG4gICAgICAgICAgICBoIDogJ2hvdXInLFxuICAgICAgICAgICAgZCA6ICdkYXknLFxuICAgICAgICAgICAgRCA6ICdkYXRlJyxcbiAgICAgICAgICAgIHcgOiAnd2VlaycsXG4gICAgICAgICAgICBXIDogJ2lzb1dlZWsnLFxuICAgICAgICAgICAgTSA6ICdtb250aCcsXG4gICAgICAgICAgICBRIDogJ3F1YXJ0ZXInLFxuICAgICAgICAgICAgeSA6ICd5ZWFyJyxcbiAgICAgICAgICAgIERERCA6ICdkYXlPZlllYXInLFxuICAgICAgICAgICAgZSA6ICd3ZWVrZGF5JyxcbiAgICAgICAgICAgIEUgOiAnaXNvV2Vla2RheScsXG4gICAgICAgICAgICBnZzogJ3dlZWtZZWFyJyxcbiAgICAgICAgICAgIEdHOiAnaXNvV2Vla1llYXInXG4gICAgICAgIH0sXG5cbiAgICAgICAgY2FtZWxGdW5jdGlvbnMgPSB7XG4gICAgICAgICAgICBkYXlvZnllYXIgOiAnZGF5T2ZZZWFyJyxcbiAgICAgICAgICAgIGlzb3dlZWtkYXkgOiAnaXNvV2Vla2RheScsXG4gICAgICAgICAgICBpc293ZWVrIDogJ2lzb1dlZWsnLFxuICAgICAgICAgICAgd2Vla3llYXIgOiAnd2Vla1llYXInLFxuICAgICAgICAgICAgaXNvd2Vla3llYXIgOiAnaXNvV2Vla1llYXInXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gZm9ybWF0IGZ1bmN0aW9uIHN0cmluZ3NcbiAgICAgICAgZm9ybWF0RnVuY3Rpb25zID0ge30sXG5cbiAgICAgICAgLy8gZGVmYXVsdCByZWxhdGl2ZSB0aW1lIHRocmVzaG9sZHNcbiAgICAgICAgcmVsYXRpdmVUaW1lVGhyZXNob2xkcyA9IHtcbiAgICAgICAgICBzOiA0NSwgICAvL3NlY29uZHMgdG8gbWludXRlc1xuICAgICAgICAgIG06IDQ1LCAgIC8vbWludXRlcyB0byBob3Vyc1xuICAgICAgICAgIGg6IDIyLCAgIC8vaG91cnMgdG8gZGF5c1xuICAgICAgICAgIGRkOiAyNSwgIC8vZGF5cyB0byBtb250aCAobW9udGggPT0gMSlcbiAgICAgICAgICBkbTogNDUsICAvL2RheXMgdG8gbW9udGhzIChtb250aHMgPiAxKVxuICAgICAgICAgIGR5OiAzNDUgIC8vZGF5cyB0byB5ZWFyXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gdG9rZW5zIHRvIG9yZGluYWxpemUgYW5kIHBhZFxuICAgICAgICBvcmRpbmFsaXplVG9rZW5zID0gJ0RERCB3IFcgTSBEIGQnLnNwbGl0KCcgJyksXG4gICAgICAgIHBhZGRlZFRva2VucyA9ICdNIEQgSCBoIG0gcyB3IFcnLnNwbGl0KCcgJyksXG5cbiAgICAgICAgZm9ybWF0VG9rZW5GdW5jdGlvbnMgPSB7XG4gICAgICAgICAgICBNICAgIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1vbnRoKCkgKyAxO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIE1NTSAgOiBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGFuZygpLm1vbnRoc1Nob3J0KHRoaXMsIGZvcm1hdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgTU1NTSA6IGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sYW5nKCkubW9udGhzKHRoaXMsIGZvcm1hdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgRCAgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgREREICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXlPZlllYXIoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkICAgIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRheSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRkICAgOiBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGFuZygpLndlZWtkYXlzTWluKHRoaXMsIGZvcm1hdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGRkICA6IGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sYW5nKCkud2Vla2RheXNTaG9ydCh0aGlzLCBmb3JtYXQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRkZGQgOiBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGFuZygpLndlZWtkYXlzKHRoaXMsIGZvcm1hdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdyAgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53ZWVrKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgVyAgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pc29XZWVrKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgWVkgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVmdFplcm9GaWxsKHRoaXMueWVhcigpICUgMTAwLCAyKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBZWVlZIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0WmVyb0ZpbGwodGhpcy55ZWFyKCksIDQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFlZWVlZIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0WmVyb0ZpbGwodGhpcy55ZWFyKCksIDUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFlZWVlZWSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgeSA9IHRoaXMueWVhcigpLCBzaWduID0geSA+PSAwID8gJysnIDogJy0nO1xuICAgICAgICAgICAgICAgIHJldHVybiBzaWduICsgbGVmdFplcm9GaWxsKE1hdGguYWJzKHkpLCA2KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZyAgIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0WmVyb0ZpbGwodGhpcy53ZWVrWWVhcigpICUgMTAwLCAyKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZ2dnIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0WmVyb0ZpbGwodGhpcy53ZWVrWWVhcigpLCA0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZ2dnZyA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVmdFplcm9GaWxsKHRoaXMud2Vla1llYXIoKSwgNSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgR0cgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVmdFplcm9GaWxsKHRoaXMuaXNvV2Vla1llYXIoKSAlIDEwMCwgMik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgR0dHRyA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVmdFplcm9GaWxsKHRoaXMuaXNvV2Vla1llYXIoKSwgNCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgR0dHR0cgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlZnRaZXJvRmlsbCh0aGlzLmlzb1dlZWtZZWFyKCksIDUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGUgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2Vla2RheSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEUgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNvV2Vla2RheSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGEgICAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGFuZygpLm1lcmlkaWVtKHRoaXMuaG91cnMoKSwgdGhpcy5taW51dGVzKCksIHRydWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEEgICAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGFuZygpLm1lcmlkaWVtKHRoaXMuaG91cnMoKSwgdGhpcy5taW51dGVzKCksIGZhbHNlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBIICAgIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhvdXJzKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaCAgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ob3VycygpICUgMTIgfHwgMTI7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbSAgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5taW51dGVzKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcyAgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWNvbmRzKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUyAgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9JbnQodGhpcy5taWxsaXNlY29uZHMoKSAvIDEwMCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgU1MgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGVmdFplcm9GaWxsKHRvSW50KHRoaXMubWlsbGlzZWNvbmRzKCkgLyAxMCksIDIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFNTUyAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxlZnRaZXJvRmlsbCh0aGlzLm1pbGxpc2Vjb25kcygpLCAzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBTU1NTIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0WmVyb0ZpbGwodGhpcy5taWxsaXNlY29uZHMoKSwgMyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgWiAgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IC10aGlzLnpvbmUoKSxcbiAgICAgICAgICAgICAgICAgICAgYiA9IFwiK1wiO1xuICAgICAgICAgICAgICAgIGlmIChhIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBhID0gLWE7XG4gICAgICAgICAgICAgICAgICAgIGIgPSBcIi1cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGIgKyBsZWZ0WmVyb0ZpbGwodG9JbnQoYSAvIDYwKSwgMikgKyBcIjpcIiArIGxlZnRaZXJvRmlsbCh0b0ludChhKSAlIDYwLCAyKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBaWiAgIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBhID0gLXRoaXMuem9uZSgpLFxuICAgICAgICAgICAgICAgICAgICBiID0gXCIrXCI7XG4gICAgICAgICAgICAgICAgaWYgKGEgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGEgPSAtYTtcbiAgICAgICAgICAgICAgICAgICAgYiA9IFwiLVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYiArIGxlZnRaZXJvRmlsbCh0b0ludChhIC8gNjApLCAyKSArIGxlZnRaZXJvRmlsbCh0b0ludChhKSAlIDYwLCAyKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB6IDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnpvbmVBYmJyKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgenogOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuem9uZU5hbWUoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBYICAgIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVuaXgoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBRIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnF1YXJ0ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBsaXN0cyA9IFsnbW9udGhzJywgJ21vbnRoc1Nob3J0JywgJ3dlZWtkYXlzJywgJ3dlZWtkYXlzU2hvcnQnLCAnd2Vla2RheXNNaW4nXTtcblxuICAgIC8vIFBpY2sgdGhlIGZpcnN0IGRlZmluZWQgb2YgdHdvIG9yIHRocmVlIGFyZ3VtZW50cy4gZGZsIGNvbWVzIGZyb21cbiAgICAvLyBkZWZhdWx0LlxuICAgIGZ1bmN0aW9uIGRmbChhLCBiLCBjKSB7XG4gICAgICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gYSAhPSBudWxsID8gYSA6IGI7XG4gICAgICAgICAgICBjYXNlIDM6IHJldHVybiBhICE9IG51bGwgPyBhIDogYiAhPSBudWxsID8gYiA6IGM7XG4gICAgICAgICAgICBkZWZhdWx0OiB0aHJvdyBuZXcgRXJyb3IoXCJJbXBsZW1lbnQgbWVcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWZhdWx0UGFyc2luZ0ZsYWdzKCkge1xuICAgICAgICAvLyBXZSBuZWVkIHRvIGRlZXAgY2xvbmUgdGhpcyBvYmplY3QsIGFuZCBlczUgc3RhbmRhcmQgaXMgbm90IHZlcnlcbiAgICAgICAgLy8gaGVscGZ1bC5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVtcHR5IDogZmFsc2UsXG4gICAgICAgICAgICB1bnVzZWRUb2tlbnMgOiBbXSxcbiAgICAgICAgICAgIHVudXNlZElucHV0IDogW10sXG4gICAgICAgICAgICBvdmVyZmxvdyA6IC0yLFxuICAgICAgICAgICAgY2hhcnNMZWZ0T3ZlciA6IDAsXG4gICAgICAgICAgICBudWxsSW5wdXQgOiBmYWxzZSxcbiAgICAgICAgICAgIGludmFsaWRNb250aCA6IG51bGwsXG4gICAgICAgICAgICBpbnZhbGlkRm9ybWF0IDogZmFsc2UsXG4gICAgICAgICAgICB1c2VySW52YWxpZGF0ZWQgOiBmYWxzZSxcbiAgICAgICAgICAgIGlzbzogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZXByZWNhdGUobXNnLCBmbikge1xuICAgICAgICB2YXIgZmlyc3RUaW1lID0gdHJ1ZTtcbiAgICAgICAgZnVuY3Rpb24gcHJpbnRNc2coKSB7XG4gICAgICAgICAgICBpZiAobW9tZW50LnN1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5ncyA9PT0gZmFsc2UgJiZcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIGNvbnNvbGUud2Fybikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkRlcHJlY2F0aW9uIHdhcm5pbmc6IFwiICsgbXNnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXh0ZW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChmaXJzdFRpbWUpIHtcbiAgICAgICAgICAgICAgICBwcmludE1zZygpO1xuICAgICAgICAgICAgICAgIGZpcnN0VGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sIGZuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYWRUb2tlbihmdW5jLCBjb3VudCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgIHJldHVybiBsZWZ0WmVyb0ZpbGwoZnVuYy5jYWxsKHRoaXMsIGEpLCBjb3VudCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9yZGluYWxpemVUb2tlbihmdW5jLCBwZXJpb2QpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sYW5nKCkub3JkaW5hbChmdW5jLmNhbGwodGhpcywgYSksIHBlcmlvZCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgd2hpbGUgKG9yZGluYWxpemVUb2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIGkgPSBvcmRpbmFsaXplVG9rZW5zLnBvcCgpO1xuICAgICAgICBmb3JtYXRUb2tlbkZ1bmN0aW9uc1tpICsgJ28nXSA9IG9yZGluYWxpemVUb2tlbihmb3JtYXRUb2tlbkZ1bmN0aW9uc1tpXSwgaSk7XG4gICAgfVxuICAgIHdoaWxlIChwYWRkZWRUb2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIGkgPSBwYWRkZWRUb2tlbnMucG9wKCk7XG4gICAgICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zW2kgKyBpXSA9IHBhZFRva2VuKGZvcm1hdFRva2VuRnVuY3Rpb25zW2ldLCAyKTtcbiAgICB9XG4gICAgZm9ybWF0VG9rZW5GdW5jdGlvbnMuRERERCA9IHBhZFRva2VuKGZvcm1hdFRva2VuRnVuY3Rpb25zLkRERCwgMyk7XG5cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgQ29uc3RydWN0b3JzXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgZnVuY3Rpb24gTGFuZ3VhZ2UoKSB7XG5cbiAgICB9XG5cbiAgICAvLyBNb21lbnQgcHJvdG90eXBlIG9iamVjdFxuICAgIGZ1bmN0aW9uIE1vbWVudChjb25maWcpIHtcbiAgICAgICAgY2hlY2tPdmVyZmxvdyhjb25maWcpO1xuICAgICAgICBleHRlbmQodGhpcywgY29uZmlnKTtcbiAgICB9XG5cbiAgICAvLyBEdXJhdGlvbiBDb25zdHJ1Y3RvclxuICAgIGZ1bmN0aW9uIER1cmF0aW9uKGR1cmF0aW9uKSB7XG4gICAgICAgIHZhciBub3JtYWxpemVkSW5wdXQgPSBub3JtYWxpemVPYmplY3RVbml0cyhkdXJhdGlvbiksXG4gICAgICAgICAgICB5ZWFycyA9IG5vcm1hbGl6ZWRJbnB1dC55ZWFyIHx8IDAsXG4gICAgICAgICAgICBxdWFydGVycyA9IG5vcm1hbGl6ZWRJbnB1dC5xdWFydGVyIHx8IDAsXG4gICAgICAgICAgICBtb250aHMgPSBub3JtYWxpemVkSW5wdXQubW9udGggfHwgMCxcbiAgICAgICAgICAgIHdlZWtzID0gbm9ybWFsaXplZElucHV0LndlZWsgfHwgMCxcbiAgICAgICAgICAgIGRheXMgPSBub3JtYWxpemVkSW5wdXQuZGF5IHx8IDAsXG4gICAgICAgICAgICBob3VycyA9IG5vcm1hbGl6ZWRJbnB1dC5ob3VyIHx8IDAsXG4gICAgICAgICAgICBtaW51dGVzID0gbm9ybWFsaXplZElucHV0Lm1pbnV0ZSB8fCAwLFxuICAgICAgICAgICAgc2Vjb25kcyA9IG5vcm1hbGl6ZWRJbnB1dC5zZWNvbmQgfHwgMCxcbiAgICAgICAgICAgIG1pbGxpc2Vjb25kcyA9IG5vcm1hbGl6ZWRJbnB1dC5taWxsaXNlY29uZCB8fCAwO1xuXG4gICAgICAgIC8vIHJlcHJlc2VudGF0aW9uIGZvciBkYXRlQWRkUmVtb3ZlXG4gICAgICAgIHRoaXMuX21pbGxpc2Vjb25kcyA9ICttaWxsaXNlY29uZHMgK1xuICAgICAgICAgICAgc2Vjb25kcyAqIDFlMyArIC8vIDEwMDBcbiAgICAgICAgICAgIG1pbnV0ZXMgKiA2ZTQgKyAvLyAxMDAwICogNjBcbiAgICAgICAgICAgIGhvdXJzICogMzZlNTsgLy8gMTAwMCAqIDYwICogNjBcbiAgICAgICAgLy8gQmVjYXVzZSBvZiBkYXRlQWRkUmVtb3ZlIHRyZWF0cyAyNCBob3VycyBhcyBkaWZmZXJlbnQgZnJvbSBhXG4gICAgICAgIC8vIGRheSB3aGVuIHdvcmtpbmcgYXJvdW5kIERTVCwgd2UgbmVlZCB0byBzdG9yZSB0aGVtIHNlcGFyYXRlbHlcbiAgICAgICAgdGhpcy5fZGF5cyA9ICtkYXlzICtcbiAgICAgICAgICAgIHdlZWtzICogNztcbiAgICAgICAgLy8gSXQgaXMgaW1wb3NzaWJsZSB0cmFuc2xhdGUgbW9udGhzIGludG8gZGF5cyB3aXRob3V0IGtub3dpbmdcbiAgICAgICAgLy8gd2hpY2ggbW9udGhzIHlvdSBhcmUgYXJlIHRhbGtpbmcgYWJvdXQsIHNvIHdlIGhhdmUgdG8gc3RvcmVcbiAgICAgICAgLy8gaXQgc2VwYXJhdGVseS5cbiAgICAgICAgdGhpcy5fbW9udGhzID0gK21vbnRocyArXG4gICAgICAgICAgICBxdWFydGVycyAqIDMgK1xuICAgICAgICAgICAgeWVhcnMgKiAxMjtcblxuICAgICAgICB0aGlzLl9kYXRhID0ge307XG5cbiAgICAgICAgdGhpcy5fYnViYmxlKCk7XG4gICAgfVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICBIZWxwZXJzXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cbiAgICBmdW5jdGlvbiBleHRlbmQoYSwgYikge1xuICAgICAgICBmb3IgKHZhciBpIGluIGIpIHtcbiAgICAgICAgICAgIGlmIChiLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgYVtpXSA9IGJbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYi5oYXNPd25Qcm9wZXJ0eShcInRvU3RyaW5nXCIpKSB7XG4gICAgICAgICAgICBhLnRvU3RyaW5nID0gYi50b1N0cmluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiLmhhc093blByb3BlcnR5KFwidmFsdWVPZlwiKSkge1xuICAgICAgICAgICAgYS52YWx1ZU9mID0gYi52YWx1ZU9mO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvbmVNb21lbnQobSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0ge30sIGk7XG4gICAgICAgIGZvciAoaSBpbiBtKSB7XG4gICAgICAgICAgICBpZiAobS5oYXNPd25Qcm9wZXJ0eShpKSAmJiBtb21lbnRQcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2ldID0gbVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWJzUm91bmQobnVtYmVyKSB7XG4gICAgICAgIGlmIChudW1iZXIgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5jZWlsKG51bWJlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihudW1iZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbGVmdCB6ZXJvIGZpbGwgYSBudW1iZXJcbiAgICAvLyBzZWUgaHR0cDovL2pzcGVyZi5jb20vbGVmdC16ZXJvLWZpbGxpbmcgZm9yIHBlcmZvcm1hbmNlIGNvbXBhcmlzb25cbiAgICBmdW5jdGlvbiBsZWZ0WmVyb0ZpbGwobnVtYmVyLCB0YXJnZXRMZW5ndGgsIGZvcmNlU2lnbikge1xuICAgICAgICB2YXIgb3V0cHV0ID0gJycgKyBNYXRoLmFicyhudW1iZXIpLFxuICAgICAgICAgICAgc2lnbiA9IG51bWJlciA+PSAwO1xuXG4gICAgICAgIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgICAgICAgICBvdXRwdXQgPSAnMCcgKyBvdXRwdXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChzaWduID8gKGZvcmNlU2lnbiA/ICcrJyA6ICcnKSA6ICctJykgKyBvdXRwdXQ7XG4gICAgfVxuXG4gICAgLy8gaGVscGVyIGZ1bmN0aW9uIGZvciBfLmFkZFRpbWUgYW5kIF8uc3VidHJhY3RUaW1lXG4gICAgZnVuY3Rpb24gYWRkT3JTdWJ0cmFjdER1cmF0aW9uRnJvbU1vbWVudChtb20sIGR1cmF0aW9uLCBpc0FkZGluZywgdXBkYXRlT2Zmc2V0KSB7XG4gICAgICAgIHZhciBtaWxsaXNlY29uZHMgPSBkdXJhdGlvbi5fbWlsbGlzZWNvbmRzLFxuICAgICAgICAgICAgZGF5cyA9IGR1cmF0aW9uLl9kYXlzLFxuICAgICAgICAgICAgbW9udGhzID0gZHVyYXRpb24uX21vbnRocztcbiAgICAgICAgdXBkYXRlT2Zmc2V0ID0gdXBkYXRlT2Zmc2V0ID09IG51bGwgPyB0cnVlIDogdXBkYXRlT2Zmc2V0O1xuXG4gICAgICAgIGlmIChtaWxsaXNlY29uZHMpIHtcbiAgICAgICAgICAgIG1vbS5fZC5zZXRUaW1lKCttb20uX2QgKyBtaWxsaXNlY29uZHMgKiBpc0FkZGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRheXMpIHtcbiAgICAgICAgICAgIHJhd1NldHRlcihtb20sICdEYXRlJywgcmF3R2V0dGVyKG1vbSwgJ0RhdGUnKSArIGRheXMgKiBpc0FkZGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1vbnRocykge1xuICAgICAgICAgICAgcmF3TW9udGhTZXR0ZXIobW9tLCByYXdHZXR0ZXIobW9tLCAnTW9udGgnKSArIG1vbnRocyAqIGlzQWRkaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodXBkYXRlT2Zmc2V0KSB7XG4gICAgICAgICAgICBtb21lbnQudXBkYXRlT2Zmc2V0KG1vbSwgZGF5cyB8fCBtb250aHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgaWYgaXMgYW4gYXJyYXlcbiAgICBmdW5jdGlvbiBpc0FycmF5KGlucHV0KSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzRGF0ZShpbnB1dCkge1xuICAgICAgICByZXR1cm4gIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IERhdGVdJyB8fFxuICAgICAgICAgICAgICAgIGlucHV0IGluc3RhbmNlb2YgRGF0ZTtcbiAgICB9XG5cbiAgICAvLyBjb21wYXJlIHR3byBhcnJheXMsIHJldHVybiB0aGUgbnVtYmVyIG9mIGRpZmZlcmVuY2VzXG4gICAgZnVuY3Rpb24gY29tcGFyZUFycmF5cyhhcnJheTEsIGFycmF5MiwgZG9udENvbnZlcnQpIHtcbiAgICAgICAgdmFyIGxlbiA9IE1hdGgubWluKGFycmF5MS5sZW5ndGgsIGFycmF5Mi5sZW5ndGgpLFxuICAgICAgICAgICAgbGVuZ3RoRGlmZiA9IE1hdGguYWJzKGFycmF5MS5sZW5ndGggLSBhcnJheTIubGVuZ3RoKSxcbiAgICAgICAgICAgIGRpZmZzID0gMCxcbiAgICAgICAgICAgIGk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKChkb250Q29udmVydCAmJiBhcnJheTFbaV0gIT09IGFycmF5MltpXSkgfHxcbiAgICAgICAgICAgICAgICAoIWRvbnRDb252ZXJ0ICYmIHRvSW50KGFycmF5MVtpXSkgIT09IHRvSW50KGFycmF5MltpXSkpKSB7XG4gICAgICAgICAgICAgICAgZGlmZnMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGlmZnMgKyBsZW5ndGhEaWZmO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZVVuaXRzKHVuaXRzKSB7XG4gICAgICAgIGlmICh1bml0cykge1xuICAgICAgICAgICAgdmFyIGxvd2VyZWQgPSB1bml0cy50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyguKXMkLywgJyQxJyk7XG4gICAgICAgICAgICB1bml0cyA9IHVuaXRBbGlhc2VzW3VuaXRzXSB8fCBjYW1lbEZ1bmN0aW9uc1tsb3dlcmVkXSB8fCBsb3dlcmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bml0cztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBub3JtYWxpemVPYmplY3RVbml0cyhpbnB1dE9iamVjdCkge1xuICAgICAgICB2YXIgbm9ybWFsaXplZElucHV0ID0ge30sXG4gICAgICAgICAgICBub3JtYWxpemVkUHJvcCxcbiAgICAgICAgICAgIHByb3A7XG5cbiAgICAgICAgZm9yIChwcm9wIGluIGlucHV0T2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoaW5wdXRPYmplY3QuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgICAgICBub3JtYWxpemVkUHJvcCA9IG5vcm1hbGl6ZVVuaXRzKHByb3ApO1xuICAgICAgICAgICAgICAgIGlmIChub3JtYWxpemVkUHJvcCkge1xuICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVkSW5wdXRbbm9ybWFsaXplZFByb3BdID0gaW5wdXRPYmplY3RbcHJvcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vcm1hbGl6ZWRJbnB1dDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlTGlzdChmaWVsZCkge1xuICAgICAgICB2YXIgY291bnQsIHNldHRlcjtcblxuICAgICAgICBpZiAoZmllbGQuaW5kZXhPZignd2VlaycpID09PSAwKSB7XG4gICAgICAgICAgICBjb3VudCA9IDc7XG4gICAgICAgICAgICBzZXR0ZXIgPSAnZGF5JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmaWVsZC5pbmRleE9mKCdtb250aCcpID09PSAwKSB7XG4gICAgICAgICAgICBjb3VudCA9IDEyO1xuICAgICAgICAgICAgc2V0dGVyID0gJ21vbnRoJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG1vbWVudFtmaWVsZF0gPSBmdW5jdGlvbiAoZm9ybWF0LCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIGksIGdldHRlcixcbiAgICAgICAgICAgICAgICBtZXRob2QgPSBtb21lbnQuZm4uX2xhbmdbZmllbGRdLFxuICAgICAgICAgICAgICAgIHJlc3VsdHMgPSBbXTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBmb3JtYXQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBmb3JtYXQ7XG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBnZXR0ZXIgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgIHZhciBtID0gbW9tZW50KCkudXRjKCkuc2V0KHNldHRlciwgaSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGhvZC5jYWxsKG1vbWVudC5mbi5fbGFuZywgbSwgZm9ybWF0IHx8ICcnKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChpbmRleCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldHRlcihpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goZ2V0dGVyKGkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9JbnQoYXJndW1lbnRGb3JDb2VyY2lvbikge1xuICAgICAgICB2YXIgY29lcmNlZE51bWJlciA9ICthcmd1bWVudEZvckNvZXJjaW9uLFxuICAgICAgICAgICAgdmFsdWUgPSAwO1xuXG4gICAgICAgIGlmIChjb2VyY2VkTnVtYmVyICE9PSAwICYmIGlzRmluaXRlKGNvZXJjZWROdW1iZXIpKSB7XG4gICAgICAgICAgICBpZiAoY29lcmNlZE51bWJlciA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLmZsb29yKGNvZXJjZWROdW1iZXIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGguY2VpbChjb2VyY2VkTnVtYmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkYXlzSW5Nb250aCh5ZWFyLCBtb250aCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoRGF0ZS5VVEMoeWVhciwgbW9udGggKyAxLCAwKSkuZ2V0VVRDRGF0ZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdlZWtzSW5ZZWFyKHllYXIsIGRvdywgZG95KSB7XG4gICAgICAgIHJldHVybiB3ZWVrT2ZZZWFyKG1vbWVudChbeWVhciwgMTEsIDMxICsgZG93IC0gZG95XSksIGRvdywgZG95KS53ZWVrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRheXNJblllYXIoeWVhcikge1xuICAgICAgICByZXR1cm4gaXNMZWFwWWVhcih5ZWFyKSA/IDM2NiA6IDM2NTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0xlYXBZZWFyKHllYXIpIHtcbiAgICAgICAgcmV0dXJuICh5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwKSB8fCB5ZWFyICUgNDAwID09PSAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrT3ZlcmZsb3cobSkge1xuICAgICAgICB2YXIgb3ZlcmZsb3c7XG4gICAgICAgIGlmIChtLl9hICYmIG0uX3BmLm92ZXJmbG93ID09PSAtMikge1xuICAgICAgICAgICAgb3ZlcmZsb3cgPVxuICAgICAgICAgICAgICAgIG0uX2FbTU9OVEhdIDwgMCB8fCBtLl9hW01PTlRIXSA+IDExID8gTU9OVEggOlxuICAgICAgICAgICAgICAgIG0uX2FbREFURV0gPCAxIHx8IG0uX2FbREFURV0gPiBkYXlzSW5Nb250aChtLl9hW1lFQVJdLCBtLl9hW01PTlRIXSkgPyBEQVRFIDpcbiAgICAgICAgICAgICAgICBtLl9hW0hPVVJdIDwgMCB8fCBtLl9hW0hPVVJdID4gMjMgPyBIT1VSIDpcbiAgICAgICAgICAgICAgICBtLl9hW01JTlVURV0gPCAwIHx8IG0uX2FbTUlOVVRFXSA+IDU5ID8gTUlOVVRFIDpcbiAgICAgICAgICAgICAgICBtLl9hW1NFQ09ORF0gPCAwIHx8IG0uX2FbU0VDT05EXSA+IDU5ID8gU0VDT05EIDpcbiAgICAgICAgICAgICAgICBtLl9hW01JTExJU0VDT05EXSA8IDAgfHwgbS5fYVtNSUxMSVNFQ09ORF0gPiA5OTkgPyBNSUxMSVNFQ09ORCA6XG4gICAgICAgICAgICAgICAgLTE7XG5cbiAgICAgICAgICAgIGlmIChtLl9wZi5fb3ZlcmZsb3dEYXlPZlllYXIgJiYgKG92ZXJmbG93IDwgWUVBUiB8fCBvdmVyZmxvdyA+IERBVEUpKSB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cgPSBEQVRFO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtLl9wZi5vdmVyZmxvdyA9IG92ZXJmbG93O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNWYWxpZChtKSB7XG4gICAgICAgIGlmIChtLl9pc1ZhbGlkID09IG51bGwpIHtcbiAgICAgICAgICAgIG0uX2lzVmFsaWQgPSAhaXNOYU4obS5fZC5nZXRUaW1lKCkpICYmXG4gICAgICAgICAgICAgICAgbS5fcGYub3ZlcmZsb3cgPCAwICYmXG4gICAgICAgICAgICAgICAgIW0uX3BmLmVtcHR5ICYmXG4gICAgICAgICAgICAgICAgIW0uX3BmLmludmFsaWRNb250aCAmJlxuICAgICAgICAgICAgICAgICFtLl9wZi5udWxsSW5wdXQgJiZcbiAgICAgICAgICAgICAgICAhbS5fcGYuaW52YWxpZEZvcm1hdCAmJlxuICAgICAgICAgICAgICAgICFtLl9wZi51c2VySW52YWxpZGF0ZWQ7XG5cbiAgICAgICAgICAgIGlmIChtLl9zdHJpY3QpIHtcbiAgICAgICAgICAgICAgICBtLl9pc1ZhbGlkID0gbS5faXNWYWxpZCAmJlxuICAgICAgICAgICAgICAgICAgICBtLl9wZi5jaGFyc0xlZnRPdmVyID09PSAwICYmXG4gICAgICAgICAgICAgICAgICAgIG0uX3BmLnVudXNlZFRva2Vucy5sZW5ndGggPT09IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG0uX2lzVmFsaWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplTGFuZ3VhZ2Uoa2V5KSB7XG4gICAgICAgIHJldHVybiBrZXkgPyBrZXkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKCdfJywgJy0nKSA6IGtleTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYSBtb21lbnQgZnJvbSBpbnB1dCwgdGhhdCBpcyBsb2NhbC91dGMvem9uZSBlcXVpdmFsZW50IHRvIG1vZGVsLlxuICAgIGZ1bmN0aW9uIG1ha2VBcyhpbnB1dCwgbW9kZWwpIHtcbiAgICAgICAgcmV0dXJuIG1vZGVsLl9pc1VUQyA/IG1vbWVudChpbnB1dCkuem9uZShtb2RlbC5fb2Zmc2V0IHx8IDApIDpcbiAgICAgICAgICAgIG1vbWVudChpbnB1dCkubG9jYWwoKTtcbiAgICB9XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgIExhbmd1YWdlc1xuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXG4gICAgZXh0ZW5kKExhbmd1YWdlLnByb3RvdHlwZSwge1xuXG4gICAgICAgIHNldCA6IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgICAgIHZhciBwcm9wLCBpO1xuICAgICAgICAgICAgZm9yIChpIGluIGNvbmZpZykge1xuICAgICAgICAgICAgICAgIHByb3AgPSBjb25maWdbaV07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbaV0gPSBwcm9wO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbJ18nICsgaV0gPSBwcm9wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBfbW9udGhzIDogXCJKYW51YXJ5X0ZlYnJ1YXJ5X01hcmNoX0FwcmlsX01heV9KdW5lX0p1bHlfQXVndXN0X1NlcHRlbWJlcl9PY3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyXCIuc3BsaXQoXCJfXCIpLFxuICAgICAgICBtb250aHMgOiBmdW5jdGlvbiAobSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1ttLm1vbnRoKCldO1xuICAgICAgICB9LFxuXG4gICAgICAgIF9tb250aHNTaG9ydCA6IFwiSmFuX0ZlYl9NYXJfQXByX01heV9KdW5fSnVsX0F1Z19TZXBfT2N0X05vdl9EZWNcIi5zcGxpdChcIl9cIiksXG4gICAgICAgIG1vbnRoc1Nob3J0IDogZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb250aHNTaG9ydFttLm1vbnRoKCldO1xuICAgICAgICB9LFxuXG4gICAgICAgIG1vbnRoc1BhcnNlIDogZnVuY3Rpb24gKG1vbnRoTmFtZSkge1xuICAgICAgICAgICAgdmFyIGksIG1vbSwgcmVnZXg7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5fbW9udGhzUGFyc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tb250aHNQYXJzZSA9IFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fbW9udGhzUGFyc2VbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgbW9tID0gbW9tZW50LnV0YyhbMjAwMCwgaV0pO1xuICAgICAgICAgICAgICAgICAgICByZWdleCA9ICdeJyArIHRoaXMubW9udGhzKG1vbSwgJycpICsgJ3xeJyArIHRoaXMubW9udGhzU2hvcnQobW9tLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21vbnRoc1BhcnNlW2ldID0gbmV3IFJlZ0V4cChyZWdleC5yZXBsYWNlKCcuJywgJycpLCAnaScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyB0ZXN0IHRoZSByZWdleFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9tb250aHNQYXJzZVtpXS50ZXN0KG1vbnRoTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIF93ZWVrZGF5cyA6IFwiU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXlcIi5zcGxpdChcIl9cIiksXG4gICAgICAgIHdlZWtkYXlzIDogZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1ttLmRheSgpXTtcbiAgICAgICAgfSxcblxuICAgICAgICBfd2Vla2RheXNTaG9ydCA6IFwiU3VuX01vbl9UdWVfV2VkX1RodV9GcmlfU2F0XCIuc3BsaXQoXCJfXCIpLFxuICAgICAgICB3ZWVrZGF5c1Nob3J0IDogZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1Nob3J0W20uZGF5KCldO1xuICAgICAgICB9LFxuXG4gICAgICAgIF93ZWVrZGF5c01pbiA6IFwiU3VfTW9fVHVfV2VfVGhfRnJfU2FcIi5zcGxpdChcIl9cIiksXG4gICAgICAgIHdlZWtkYXlzTWluIDogZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c01pblttLmRheSgpXTtcbiAgICAgICAgfSxcblxuICAgICAgICB3ZWVrZGF5c1BhcnNlIDogZnVuY3Rpb24gKHdlZWtkYXlOYW1lKSB7XG4gICAgICAgICAgICB2YXIgaSwgbW9tLCByZWdleDtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLl93ZWVrZGF5c1BhcnNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZSA9IFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gbWFrZSB0aGUgcmVnZXggaWYgd2UgZG9uJ3QgaGF2ZSBpdCBhbHJlYWR5XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl93ZWVrZGF5c1BhcnNlW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vbSA9IG1vbWVudChbMjAwMCwgMV0pLmRheShpKTtcbiAgICAgICAgICAgICAgICAgICAgcmVnZXggPSAnXicgKyB0aGlzLndlZWtkYXlzKG1vbSwgJycpICsgJ3xeJyArIHRoaXMud2Vla2RheXNTaG9ydChtb20sICcnKSArICd8XicgKyB0aGlzLndlZWtkYXlzTWluKG1vbSwgJycpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl93ZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cChyZWdleC5yZXBsYWNlKCcuJywgJycpLCAnaScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyB0ZXN0IHRoZSByZWdleFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBfbG9uZ0RhdGVGb3JtYXQgOiB7XG4gICAgICAgICAgICBMVCA6IFwiaDptbSBBXCIsXG4gICAgICAgICAgICBMIDogXCJNTS9ERC9ZWVlZXCIsXG4gICAgICAgICAgICBMTCA6IFwiTU1NTSBEIFlZWVlcIixcbiAgICAgICAgICAgIExMTCA6IFwiTU1NTSBEIFlZWVkgTFRcIixcbiAgICAgICAgICAgIExMTEwgOiBcImRkZGQsIE1NTU0gRCBZWVlZIExUXCJcbiAgICAgICAgfSxcbiAgICAgICAgbG9uZ0RhdGVGb3JtYXQgOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICB2YXIgb3V0cHV0ID0gdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5XTtcbiAgICAgICAgICAgIGlmICghb3V0cHV0ICYmIHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleS50b1VwcGVyQ2FzZSgpXSkge1xuICAgICAgICAgICAgICAgIG91dHB1dCA9IHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleS50b1VwcGVyQ2FzZSgpXS5yZXBsYWNlKC9NTU1NfE1NfEREfGRkZGQvZywgZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleV0gPSBvdXRwdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9LFxuXG4gICAgICAgIGlzUE0gOiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgICAgIC8vIElFOCBRdWlya3MgTW9kZSAmIElFNyBTdGFuZGFyZHMgTW9kZSBkbyBub3QgYWxsb3cgYWNjZXNzaW5nIHN0cmluZ3MgbGlrZSBhcnJheXNcbiAgICAgICAgICAgIC8vIFVzaW5nIGNoYXJBdCBzaG91bGQgYmUgbW9yZSBjb21wYXRpYmxlLlxuICAgICAgICAgICAgcmV0dXJuICgoaW5wdXQgKyAnJykudG9Mb3dlckNhc2UoKS5jaGFyQXQoMCkgPT09ICdwJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX21lcmlkaWVtUGFyc2UgOiAvW2FwXVxcLj9tP1xcLj8vaSxcbiAgICAgICAgbWVyaWRpZW0gOiBmdW5jdGlvbiAoaG91cnMsIG1pbnV0ZXMsIGlzTG93ZXIpIHtcbiAgICAgICAgICAgIGlmIChob3VycyA+IDExKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzTG93ZXIgPyAncG0nIDogJ1BNJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzTG93ZXIgPyAnYW0nIDogJ0FNJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBfY2FsZW5kYXIgOiB7XG4gICAgICAgICAgICBzYW1lRGF5IDogJ1tUb2RheSBhdF0gTFQnLFxuICAgICAgICAgICAgbmV4dERheSA6ICdbVG9tb3Jyb3cgYXRdIExUJyxcbiAgICAgICAgICAgIG5leHRXZWVrIDogJ2RkZGQgW2F0XSBMVCcsXG4gICAgICAgICAgICBsYXN0RGF5IDogJ1tZZXN0ZXJkYXkgYXRdIExUJyxcbiAgICAgICAgICAgIGxhc3RXZWVrIDogJ1tMYXN0XSBkZGRkIFthdF0gTFQnLFxuICAgICAgICAgICAgc2FtZUVsc2UgOiAnTCdcbiAgICAgICAgfSxcbiAgICAgICAgY2FsZW5kYXIgOiBmdW5jdGlvbiAoa2V5LCBtb20pIHtcbiAgICAgICAgICAgIHZhciBvdXRwdXQgPSB0aGlzLl9jYWxlbmRhcltrZXldO1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBvdXRwdXQgPT09ICdmdW5jdGlvbicgPyBvdXRwdXQuYXBwbHkobW9tKSA6IG91dHB1dDtcbiAgICAgICAgfSxcblxuICAgICAgICBfcmVsYXRpdmVUaW1lIDoge1xuICAgICAgICAgICAgZnV0dXJlIDogXCJpbiAlc1wiLFxuICAgICAgICAgICAgcGFzdCA6IFwiJXMgYWdvXCIsXG4gICAgICAgICAgICBzIDogXCJhIGZldyBzZWNvbmRzXCIsXG4gICAgICAgICAgICBtIDogXCJhIG1pbnV0ZVwiLFxuICAgICAgICAgICAgbW0gOiBcIiVkIG1pbnV0ZXNcIixcbiAgICAgICAgICAgIGggOiBcImFuIGhvdXJcIixcbiAgICAgICAgICAgIGhoIDogXCIlZCBob3Vyc1wiLFxuICAgICAgICAgICAgZCA6IFwiYSBkYXlcIixcbiAgICAgICAgICAgIGRkIDogXCIlZCBkYXlzXCIsXG4gICAgICAgICAgICBNIDogXCJhIG1vbnRoXCIsXG4gICAgICAgICAgICBNTSA6IFwiJWQgbW9udGhzXCIsXG4gICAgICAgICAgICB5IDogXCJhIHllYXJcIixcbiAgICAgICAgICAgIHl5IDogXCIlZCB5ZWFyc1wiXG4gICAgICAgIH0sXG4gICAgICAgIHJlbGF0aXZlVGltZSA6IGZ1bmN0aW9uIChudW1iZXIsIHdpdGhvdXRTdWZmaXgsIHN0cmluZywgaXNGdXR1cmUpIHtcbiAgICAgICAgICAgIHZhciBvdXRwdXQgPSB0aGlzLl9yZWxhdGl2ZVRpbWVbc3RyaW5nXTtcbiAgICAgICAgICAgIHJldHVybiAodHlwZW9mIG91dHB1dCA9PT0gJ2Z1bmN0aW9uJykgP1xuICAgICAgICAgICAgICAgIG91dHB1dChudW1iZXIsIHdpdGhvdXRTdWZmaXgsIHN0cmluZywgaXNGdXR1cmUpIDpcbiAgICAgICAgICAgICAgICBvdXRwdXQucmVwbGFjZSgvJWQvaSwgbnVtYmVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgcGFzdEZ1dHVyZSA6IGZ1bmN0aW9uIChkaWZmLCBvdXRwdXQpIHtcbiAgICAgICAgICAgIHZhciBmb3JtYXQgPSB0aGlzLl9yZWxhdGl2ZVRpbWVbZGlmZiA+IDAgPyAnZnV0dXJlJyA6ICdwYXN0J107XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGZvcm1hdCA9PT0gJ2Z1bmN0aW9uJyA/IGZvcm1hdChvdXRwdXQpIDogZm9ybWF0LnJlcGxhY2UoLyVzL2ksIG91dHB1dCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb3JkaW5hbCA6IGZ1bmN0aW9uIChudW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9vcmRpbmFsLnJlcGxhY2UoXCIlZFwiLCBudW1iZXIpO1xuICAgICAgICB9LFxuICAgICAgICBfb3JkaW5hbCA6IFwiJWRcIixcblxuICAgICAgICBwcmVwYXJzZSA6IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcG9zdGZvcm1hdCA6IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgd2VlayA6IGZ1bmN0aW9uIChtb20pIHtcbiAgICAgICAgICAgIHJldHVybiB3ZWVrT2ZZZWFyKG1vbSwgdGhpcy5fd2Vlay5kb3csIHRoaXMuX3dlZWsuZG95KS53ZWVrO1xuICAgICAgICB9LFxuXG4gICAgICAgIF93ZWVrIDoge1xuICAgICAgICAgICAgZG93IDogMCwgLy8gU3VuZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXG4gICAgICAgICAgICBkb3kgOiA2ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgICAgIH0sXG5cbiAgICAgICAgX2ludmFsaWREYXRlOiAnSW52YWxpZCBkYXRlJyxcbiAgICAgICAgaW52YWxpZERhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnZhbGlkRGF0ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gTG9hZHMgYSBsYW5ndWFnZSBkZWZpbml0aW9uIGludG8gdGhlIGBsYW5ndWFnZXNgIGNhY2hlLiAgVGhlIGZ1bmN0aW9uXG4gICAgLy8gdGFrZXMgYSBrZXkgYW5kIG9wdGlvbmFsbHkgdmFsdWVzLiAgSWYgbm90IGluIHRoZSBicm93c2VyIGFuZCBubyB2YWx1ZXNcbiAgICAvLyBhcmUgcHJvdmlkZWQsIGl0IHdpbGwgbG9hZCB0aGUgbGFuZ3VhZ2UgZmlsZSBtb2R1bGUuICBBcyBhIGNvbnZlbmllbmNlLFxuICAgIC8vIHRoaXMgZnVuY3Rpb24gYWxzbyByZXR1cm5zIHRoZSBsYW5ndWFnZSB2YWx1ZXMuXG4gICAgZnVuY3Rpb24gbG9hZExhbmcoa2V5LCB2YWx1ZXMpIHtcbiAgICAgICAgdmFsdWVzLmFiYnIgPSBrZXk7XG4gICAgICAgIGlmICghbGFuZ3VhZ2VzW2tleV0pIHtcbiAgICAgICAgICAgIGxhbmd1YWdlc1trZXldID0gbmV3IExhbmd1YWdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGFuZ3VhZ2VzW2tleV0uc2V0KHZhbHVlcyk7XG4gICAgICAgIHJldHVybiBsYW5ndWFnZXNba2V5XTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgYSBsYW5ndWFnZSBmcm9tIHRoZSBgbGFuZ3VhZ2VzYCBjYWNoZS4gTW9zdGx5IHVzZWZ1bCBpbiB0ZXN0cy5cbiAgICBmdW5jdGlvbiB1bmxvYWRMYW5nKGtleSkge1xuICAgICAgICBkZWxldGUgbGFuZ3VhZ2VzW2tleV07XG4gICAgfVxuXG4gICAgLy8gRGV0ZXJtaW5lcyB3aGljaCBsYW5ndWFnZSBkZWZpbml0aW9uIHRvIHVzZSBhbmQgcmV0dXJucyBpdC5cbiAgICAvL1xuICAgIC8vIFdpdGggbm8gcGFyYW1ldGVycywgaXQgd2lsbCByZXR1cm4gdGhlIGdsb2JhbCBsYW5ndWFnZS4gIElmIHlvdVxuICAgIC8vIHBhc3MgaW4gYSBsYW5ndWFnZSBrZXksIHN1Y2ggYXMgJ2VuJywgaXQgd2lsbCByZXR1cm4gdGhlXG4gICAgLy8gZGVmaW5pdGlvbiBmb3IgJ2VuJywgc28gbG9uZyBhcyAnZW4nIGhhcyBhbHJlYWR5IGJlZW4gbG9hZGVkIHVzaW5nXG4gICAgLy8gbW9tZW50LmxhbmcuXG4gICAgZnVuY3Rpb24gZ2V0TGFuZ0RlZmluaXRpb24oa2V5KSB7XG4gICAgICAgIHZhciBpID0gMCwgaiwgbGFuZywgbmV4dCwgc3BsaXQsXG4gICAgICAgICAgICBnZXQgPSBmdW5jdGlvbiAoaykge1xuICAgICAgICAgICAgICAgIGlmICghbGFuZ3VhZ2VzW2tdICYmIGhhc01vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZSgnLi9sYW5nLycgKyBrKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkgeyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBsYW5ndWFnZXNba107XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gbW9tZW50LmZuLl9sYW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc0FycmF5KGtleSkpIHtcbiAgICAgICAgICAgIC8vc2hvcnQtY2lyY3VpdCBldmVyeXRoaW5nIGVsc2VcbiAgICAgICAgICAgIGxhbmcgPSBnZXQoa2V5KTtcbiAgICAgICAgICAgIGlmIChsYW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxhbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrZXkgPSBba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vcGljayB0aGUgbGFuZ3VhZ2UgZnJvbSB0aGUgYXJyYXlcbiAgICAgICAgLy90cnkgWydlbi1hdScsICdlbi1nYiddIGFzICdlbi1hdScsICdlbi1nYicsICdlbicsIGFzIGluIG1vdmUgdGhyb3VnaCB0aGUgbGlzdCB0cnlpbmcgZWFjaFxuICAgICAgICAvL3N1YnN0cmluZyBmcm9tIG1vc3Qgc3BlY2lmaWMgdG8gbGVhc3QsIGJ1dCBtb3ZlIHRvIHRoZSBuZXh0IGFycmF5IGl0ZW0gaWYgaXQncyBhIG1vcmUgc3BlY2lmaWMgdmFyaWFudCB0aGFuIHRoZSBjdXJyZW50IHJvb3RcbiAgICAgICAgd2hpbGUgKGkgPCBrZXkubGVuZ3RoKSB7XG4gICAgICAgICAgICBzcGxpdCA9IG5vcm1hbGl6ZUxhbmd1YWdlKGtleVtpXSkuc3BsaXQoJy0nKTtcbiAgICAgICAgICAgIGogPSBzcGxpdC5sZW5ndGg7XG4gICAgICAgICAgICBuZXh0ID0gbm9ybWFsaXplTGFuZ3VhZ2Uoa2V5W2kgKyAxXSk7XG4gICAgICAgICAgICBuZXh0ID0gbmV4dCA/IG5leHQuc3BsaXQoJy0nKSA6IG51bGw7XG4gICAgICAgICAgICB3aGlsZSAoaiA+IDApIHtcbiAgICAgICAgICAgICAgICBsYW5nID0gZ2V0KHNwbGl0LnNsaWNlKDAsIGopLmpvaW4oJy0nKSk7XG4gICAgICAgICAgICAgICAgaWYgKGxhbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxhbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChuZXh0ICYmIG5leHQubGVuZ3RoID49IGogJiYgY29tcGFyZUFycmF5cyhzcGxpdCwgbmV4dCwgdHJ1ZSkgPj0gaiAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy90aGUgbmV4dCBhcnJheSBpdGVtIGlzIGJldHRlciB0aGFuIGEgc2hhbGxvd2VyIHN1YnN0cmluZyBvZiB0aGlzIG9uZVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgai0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb21lbnQuZm4uX2xhbmc7XG4gICAgfVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICBGb3JtYXR0aW5nXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cbiAgICBmdW5jdGlvbiByZW1vdmVGb3JtYXR0aW5nVG9rZW5zKGlucHV0KSB7XG4gICAgICAgIGlmIChpbnB1dC5tYXRjaCgvXFxbW1xcc1xcU10vKSkge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL15cXFt8XFxdJC9nLCBcIlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5wdXQucmVwbGFjZSgvXFxcXC9nLCBcIlwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlRm9ybWF0RnVuY3Rpb24oZm9ybWF0KSB7XG4gICAgICAgIHZhciBhcnJheSA9IGZvcm1hdC5tYXRjaChmb3JtYXR0aW5nVG9rZW5zKSwgaSwgbGVuZ3RoO1xuXG4gICAgICAgIGZvciAoaSA9IDAsIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZm9ybWF0VG9rZW5GdW5jdGlvbnNbYXJyYXlbaV1dKSB7XG4gICAgICAgICAgICAgICAgYXJyYXlbaV0gPSBmb3JtYXRUb2tlbkZ1bmN0aW9uc1thcnJheVtpXV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFycmF5W2ldID0gcmVtb3ZlRm9ybWF0dGluZ1Rva2VucyhhcnJheVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG1vbSkge1xuICAgICAgICAgICAgdmFyIG91dHB1dCA9IFwiXCI7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQgKz0gYXJyYXlbaV0gaW5zdGFuY2VvZiBGdW5jdGlvbiA/IGFycmF5W2ldLmNhbGwobW9tLCBmb3JtYXQpIDogYXJyYXlbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIGZvcm1hdCBkYXRlIHVzaW5nIG5hdGl2ZSBkYXRlIG9iamVjdFxuICAgIGZ1bmN0aW9uIGZvcm1hdE1vbWVudChtLCBmb3JtYXQpIHtcblxuICAgICAgICBpZiAoIW0uaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gbS5sYW5nKCkuaW52YWxpZERhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm1hdCA9IGV4cGFuZEZvcm1hdChmb3JtYXQsIG0ubGFuZygpKTtcblxuICAgICAgICBpZiAoIWZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdKSB7XG4gICAgICAgICAgICBmb3JtYXRGdW5jdGlvbnNbZm9ybWF0XSA9IG1ha2VGb3JtYXRGdW5jdGlvbihmb3JtYXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdKG0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4cGFuZEZvcm1hdChmb3JtYXQsIGxhbmcpIHtcbiAgICAgICAgdmFyIGkgPSA1O1xuXG4gICAgICAgIGZ1bmN0aW9uIHJlcGxhY2VMb25nRGF0ZUZvcm1hdFRva2VucyhpbnB1dCkge1xuICAgICAgICAgICAgcmV0dXJuIGxhbmcubG9uZ0RhdGVGb3JtYXQoaW5wdXQpIHx8IGlucHV0O1xuICAgICAgICB9XG5cbiAgICAgICAgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLmxhc3RJbmRleCA9IDA7XG4gICAgICAgIHdoaWxlIChpID49IDAgJiYgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLnRlc3QoZm9ybWF0KSkge1xuICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UobG9jYWxGb3JtYXR0aW5nVG9rZW5zLCByZXBsYWNlTG9uZ0RhdGVGb3JtYXRUb2tlbnMpO1xuICAgICAgICAgICAgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLmxhc3RJbmRleCA9IDA7XG4gICAgICAgICAgICBpIC09IDE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm9ybWF0O1xuICAgIH1cblxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICBQYXJzaW5nXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cbiAgICAvLyBnZXQgdGhlIHJlZ2V4IHRvIGZpbmQgdGhlIG5leHQgdG9rZW5cbiAgICBmdW5jdGlvbiBnZXRQYXJzZVJlZ2V4Rm9yVG9rZW4odG9rZW4sIGNvbmZpZykge1xuICAgICAgICB2YXIgYSwgc3RyaWN0ID0gY29uZmlnLl9zdHJpY3Q7XG4gICAgICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgICAgY2FzZSAnUSc6XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VUb2tlbk9uZURpZ2l0O1xuICAgICAgICBjYXNlICdEREREJzpcbiAgICAgICAgICAgIHJldHVybiBwYXJzZVRva2VuVGhyZWVEaWdpdHM7XG4gICAgICAgIGNhc2UgJ1lZWVknOlxuICAgICAgICBjYXNlICdHR0dHJzpcbiAgICAgICAgY2FzZSAnZ2dnZyc6XG4gICAgICAgICAgICByZXR1cm4gc3RyaWN0ID8gcGFyc2VUb2tlbkZvdXJEaWdpdHMgOiBwYXJzZVRva2VuT25lVG9Gb3VyRGlnaXRzO1xuICAgICAgICBjYXNlICdZJzpcbiAgICAgICAgY2FzZSAnRyc6XG4gICAgICAgIGNhc2UgJ2cnOlxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlVG9rZW5TaWduZWROdW1iZXI7XG4gICAgICAgIGNhc2UgJ1lZWVlZWSc6XG4gICAgICAgIGNhc2UgJ1lZWVlZJzpcbiAgICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICBjYXNlICdnZ2dnZyc6XG4gICAgICAgICAgICByZXR1cm4gc3RyaWN0ID8gcGFyc2VUb2tlblNpeERpZ2l0cyA6IHBhcnNlVG9rZW5PbmVUb1NpeERpZ2l0cztcbiAgICAgICAgY2FzZSAnUyc6XG4gICAgICAgICAgICBpZiAoc3RyaWN0KSB7IHJldHVybiBwYXJzZVRva2VuT25lRGlnaXQ7IH1cbiAgICAgICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgICAgY2FzZSAnU1MnOlxuICAgICAgICAgICAgaWYgKHN0cmljdCkgeyByZXR1cm4gcGFyc2VUb2tlblR3b0RpZ2l0czsgfVxuICAgICAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgICBjYXNlICdTU1MnOlxuICAgICAgICAgICAgaWYgKHN0cmljdCkgeyByZXR1cm4gcGFyc2VUb2tlblRocmVlRGlnaXRzOyB9XG4gICAgICAgICAgICAvKiBmYWxscyB0aHJvdWdoICovXG4gICAgICAgIGNhc2UgJ0RERCc6XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VUb2tlbk9uZVRvVGhyZWVEaWdpdHM7XG4gICAgICAgIGNhc2UgJ01NTSc6XG4gICAgICAgIGNhc2UgJ01NTU0nOlxuICAgICAgICBjYXNlICdkZCc6XG4gICAgICAgIGNhc2UgJ2RkZCc6XG4gICAgICAgIGNhc2UgJ2RkZGQnOlxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlVG9rZW5Xb3JkO1xuICAgICAgICBjYXNlICdhJzpcbiAgICAgICAgY2FzZSAnQSc6XG4gICAgICAgICAgICByZXR1cm4gZ2V0TGFuZ0RlZmluaXRpb24oY29uZmlnLl9sKS5fbWVyaWRpZW1QYXJzZTtcbiAgICAgICAgY2FzZSAnWCc6XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VUb2tlblRpbWVzdGFtcE1zO1xuICAgICAgICBjYXNlICdaJzpcbiAgICAgICAgY2FzZSAnWlonOlxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlVG9rZW5UaW1lem9uZTtcbiAgICAgICAgY2FzZSAnVCc6XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VUb2tlblQ7XG4gICAgICAgIGNhc2UgJ1NTU1MnOlxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlVG9rZW5EaWdpdHM7XG4gICAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgY2FzZSAnREQnOlxuICAgICAgICBjYXNlICdZWSc6XG4gICAgICAgIGNhc2UgJ0dHJzpcbiAgICAgICAgY2FzZSAnZ2cnOlxuICAgICAgICBjYXNlICdISCc6XG4gICAgICAgIGNhc2UgJ2hoJzpcbiAgICAgICAgY2FzZSAnbW0nOlxuICAgICAgICBjYXNlICdzcyc6XG4gICAgICAgIGNhc2UgJ3d3JzpcbiAgICAgICAgY2FzZSAnV1cnOlxuICAgICAgICAgICAgcmV0dXJuIHN0cmljdCA/IHBhcnNlVG9rZW5Ud29EaWdpdHMgOiBwYXJzZVRva2VuT25lT3JUd29EaWdpdHM7XG4gICAgICAgIGNhc2UgJ00nOlxuICAgICAgICBjYXNlICdEJzpcbiAgICAgICAgY2FzZSAnZCc6XG4gICAgICAgIGNhc2UgJ0gnOlxuICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgY2FzZSAnbSc6XG4gICAgICAgIGNhc2UgJ3MnOlxuICAgICAgICBjYXNlICd3JzpcbiAgICAgICAgY2FzZSAnVyc6XG4gICAgICAgIGNhc2UgJ2UnOlxuICAgICAgICBjYXNlICdFJzpcbiAgICAgICAgICAgIHJldHVybiBwYXJzZVRva2VuT25lT3JUd29EaWdpdHM7XG4gICAgICAgIGNhc2UgJ0RvJzpcbiAgICAgICAgICAgIHJldHVybiBwYXJzZVRva2VuT3JkaW5hbDtcbiAgICAgICAgZGVmYXVsdCA6XG4gICAgICAgICAgICBhID0gbmV3IFJlZ0V4cChyZWdleHBFc2NhcGUodW5lc2NhcGVGb3JtYXQodG9rZW4ucmVwbGFjZSgnXFxcXCcsICcnKSksIFwiaVwiKSk7XG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRpbWV6b25lTWludXRlc0Zyb21TdHJpbmcoc3RyaW5nKSB7XG4gICAgICAgIHN0cmluZyA9IHN0cmluZyB8fCBcIlwiO1xuICAgICAgICB2YXIgcG9zc2libGVUek1hdGNoZXMgPSAoc3RyaW5nLm1hdGNoKHBhcnNlVG9rZW5UaW1lem9uZSkgfHwgW10pLFxuICAgICAgICAgICAgdHpDaHVuayA9IHBvc3NpYmxlVHpNYXRjaGVzW3Bvc3NpYmxlVHpNYXRjaGVzLmxlbmd0aCAtIDFdIHx8IFtdLFxuICAgICAgICAgICAgcGFydHMgPSAodHpDaHVuayArICcnKS5tYXRjaChwYXJzZVRpbWV6b25lQ2h1bmtlcikgfHwgWyctJywgMCwgMF0sXG4gICAgICAgICAgICBtaW51dGVzID0gKyhwYXJ0c1sxXSAqIDYwKSArIHRvSW50KHBhcnRzWzJdKTtcblxuICAgICAgICByZXR1cm4gcGFydHNbMF0gPT09ICcrJyA/IC1taW51dGVzIDogbWludXRlcztcbiAgICB9XG5cbiAgICAvLyBmdW5jdGlvbiB0byBjb252ZXJ0IHN0cmluZyBpbnB1dCB0byBkYXRlXG4gICAgZnVuY3Rpb24gYWRkVGltZVRvQXJyYXlGcm9tVG9rZW4odG9rZW4sIGlucHV0LCBjb25maWcpIHtcbiAgICAgICAgdmFyIGEsIGRhdGVQYXJ0QXJyYXkgPSBjb25maWcuX2E7XG5cbiAgICAgICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgICAvLyBRVUFSVEVSXG4gICAgICAgIGNhc2UgJ1EnOlxuICAgICAgICAgICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkYXRlUGFydEFycmF5W01PTlRIXSA9ICh0b0ludChpbnB1dCkgLSAxKSAqIDM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gTU9OVEhcbiAgICAgICAgY2FzZSAnTScgOiAvLyBmYWxsIHRocm91Z2ggdG8gTU1cbiAgICAgICAgY2FzZSAnTU0nIDpcbiAgICAgICAgICAgIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZGF0ZVBhcnRBcnJheVtNT05USF0gPSB0b0ludChpbnB1dCkgLSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ01NTScgOiAvLyBmYWxsIHRocm91Z2ggdG8gTU1NTVxuICAgICAgICBjYXNlICdNTU1NJyA6XG4gICAgICAgICAgICBhID0gZ2V0TGFuZ0RlZmluaXRpb24oY29uZmlnLl9sKS5tb250aHNQYXJzZShpbnB1dCk7XG4gICAgICAgICAgICAvLyBpZiB3ZSBkaWRuJ3QgZmluZCBhIG1vbnRoIG5hbWUsIG1hcmsgdGhlIGRhdGUgYXMgaW52YWxpZC5cbiAgICAgICAgICAgIGlmIChhICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkYXRlUGFydEFycmF5W01PTlRIXSA9IGE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5fcGYuaW52YWxpZE1vbnRoID0gaW5wdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gREFZIE9GIE1PTlRIXG4gICAgICAgIGNhc2UgJ0QnIDogLy8gZmFsbCB0aHJvdWdoIHRvIEREXG4gICAgICAgIGNhc2UgJ0REJyA6XG4gICAgICAgICAgICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRhdGVQYXJ0QXJyYXlbREFURV0gPSB0b0ludChpbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnRG8nIDpcbiAgICAgICAgICAgIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZGF0ZVBhcnRBcnJheVtEQVRFXSA9IHRvSW50KHBhcnNlSW50KGlucHV0LCAxMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vIERBWSBPRiBZRUFSXG4gICAgICAgIGNhc2UgJ0RERCcgOiAvLyBmYWxsIHRocm91Z2ggdG8gRERERFxuICAgICAgICBjYXNlICdEREREJyA6XG4gICAgICAgICAgICBpZiAoaW5wdXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5fZGF5T2ZZZWFyID0gdG9JbnQoaW5wdXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gWUVBUlxuICAgICAgICBjYXNlICdZWScgOlxuICAgICAgICAgICAgZGF0ZVBhcnRBcnJheVtZRUFSXSA9IG1vbWVudC5wYXJzZVR3b0RpZ2l0WWVhcihpbnB1dCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnWVlZWScgOlxuICAgICAgICBjYXNlICdZWVlZWScgOlxuICAgICAgICBjYXNlICdZWVlZWVknIDpcbiAgICAgICAgICAgIGRhdGVQYXJ0QXJyYXlbWUVBUl0gPSB0b0ludChpbnB1dCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gQU0gLyBQTVxuICAgICAgICBjYXNlICdhJyA6IC8vIGZhbGwgdGhyb3VnaCB0byBBXG4gICAgICAgIGNhc2UgJ0EnIDpcbiAgICAgICAgICAgIGNvbmZpZy5faXNQbSA9IGdldExhbmdEZWZpbml0aW9uKGNvbmZpZy5fbCkuaXNQTShpbnB1dCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gMjQgSE9VUlxuICAgICAgICBjYXNlICdIJyA6IC8vIGZhbGwgdGhyb3VnaCB0byBoaFxuICAgICAgICBjYXNlICdISCcgOiAvLyBmYWxsIHRocm91Z2ggdG8gaGhcbiAgICAgICAgY2FzZSAnaCcgOiAvLyBmYWxsIHRocm91Z2ggdG8gaGhcbiAgICAgICAgY2FzZSAnaGgnIDpcbiAgICAgICAgICAgIGRhdGVQYXJ0QXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gTUlOVVRFXG4gICAgICAgIGNhc2UgJ20nIDogLy8gZmFsbCB0aHJvdWdoIHRvIG1tXG4gICAgICAgIGNhc2UgJ21tJyA6XG4gICAgICAgICAgICBkYXRlUGFydEFycmF5W01JTlVURV0gPSB0b0ludChpbnB1dCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gU0VDT05EXG4gICAgICAgIGNhc2UgJ3MnIDogLy8gZmFsbCB0aHJvdWdoIHRvIHNzXG4gICAgICAgIGNhc2UgJ3NzJyA6XG4gICAgICAgICAgICBkYXRlUGFydEFycmF5W1NFQ09ORF0gPSB0b0ludChpbnB1dCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gTUlMTElTRUNPTkRcbiAgICAgICAgY2FzZSAnUycgOlxuICAgICAgICBjYXNlICdTUycgOlxuICAgICAgICBjYXNlICdTU1MnIDpcbiAgICAgICAgY2FzZSAnU1NTUycgOlxuICAgICAgICAgICAgZGF0ZVBhcnRBcnJheVtNSUxMSVNFQ09ORF0gPSB0b0ludCgoJzAuJyArIGlucHV0KSAqIDEwMDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vIFVOSVggVElNRVNUQU1QIFdJVEggTVNcbiAgICAgICAgY2FzZSAnWCc6XG4gICAgICAgICAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShwYXJzZUZsb2F0KGlucHV0KSAqIDEwMDApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vIFRJTUVaT05FXG4gICAgICAgIGNhc2UgJ1onIDogLy8gZmFsbCB0aHJvdWdoIHRvIFpaXG4gICAgICAgIGNhc2UgJ1paJyA6XG4gICAgICAgICAgICBjb25maWcuX3VzZVVUQyA9IHRydWU7XG4gICAgICAgICAgICBjb25maWcuX3R6bSA9IHRpbWV6b25lTWludXRlc0Zyb21TdHJpbmcoaW5wdXQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vIFdFRUtEQVkgLSBodW1hblxuICAgICAgICBjYXNlICdkZCc6XG4gICAgICAgIGNhc2UgJ2RkZCc6XG4gICAgICAgIGNhc2UgJ2RkZGQnOlxuICAgICAgICAgICAgYSA9IGdldExhbmdEZWZpbml0aW9uKGNvbmZpZy5fbCkud2Vla2RheXNQYXJzZShpbnB1dCk7XG4gICAgICAgICAgICAvLyBpZiB3ZSBkaWRuJ3QgZ2V0IGEgd2Vla2RheSBuYW1lLCBtYXJrIHRoZSBkYXRlIGFzIGludmFsaWRcbiAgICAgICAgICAgIGlmIChhICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25maWcuX3cgPSBjb25maWcuX3cgfHwge307XG4gICAgICAgICAgICAgICAgY29uZmlnLl93WydkJ10gPSBhO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25maWcuX3BmLmludmFsaWRXZWVrZGF5ID0gaW5wdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gV0VFSywgV0VFSyBEQVkgLSBudW1lcmljXG4gICAgICAgIGNhc2UgJ3cnOlxuICAgICAgICBjYXNlICd3dyc6XG4gICAgICAgIGNhc2UgJ1cnOlxuICAgICAgICBjYXNlICdXVyc6XG4gICAgICAgIGNhc2UgJ2QnOlxuICAgICAgICBjYXNlICdlJzpcbiAgICAgICAgY2FzZSAnRSc6XG4gICAgICAgICAgICB0b2tlbiA9IHRva2VuLnN1YnN0cigwLCAxKTtcbiAgICAgICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgICAgY2FzZSAnZ2dnZyc6XG4gICAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgICBjYXNlICdHR0dHRyc6XG4gICAgICAgICAgICB0b2tlbiA9IHRva2VuLnN1YnN0cigwLCAyKTtcbiAgICAgICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5fdyA9IGNvbmZpZy5fdyB8fCB7fTtcbiAgICAgICAgICAgICAgICBjb25maWcuX3dbdG9rZW5dID0gdG9JbnQoaW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2dnJzpcbiAgICAgICAgY2FzZSAnR0cnOlxuICAgICAgICAgICAgY29uZmlnLl93ID0gY29uZmlnLl93IHx8IHt9O1xuICAgICAgICAgICAgY29uZmlnLl93W3Rva2VuXSA9IG1vbWVudC5wYXJzZVR3b0RpZ2l0WWVhcihpbnB1dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkYXlPZlllYXJGcm9tV2Vla0luZm8oY29uZmlnKSB7XG4gICAgICAgIHZhciB3LCB3ZWVrWWVhciwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3ksIHRlbXAsIGxhbmc7XG5cbiAgICAgICAgdyA9IGNvbmZpZy5fdztcbiAgICAgICAgaWYgKHcuR0cgIT0gbnVsbCB8fCB3LlcgIT0gbnVsbCB8fCB3LkUgIT0gbnVsbCkge1xuICAgICAgICAgICAgZG93ID0gMTtcbiAgICAgICAgICAgIGRveSA9IDQ7XG5cbiAgICAgICAgICAgIC8vIFRPRE86IFdlIG5lZWQgdG8gdGFrZSB0aGUgY3VycmVudCBpc29XZWVrWWVhciwgYnV0IHRoYXQgZGVwZW5kcyBvblxuICAgICAgICAgICAgLy8gaG93IHdlIGludGVycHJldCBub3cgKGxvY2FsLCB1dGMsIGZpeGVkIG9mZnNldCkuIFNvIGNyZWF0ZVxuICAgICAgICAgICAgLy8gYSBub3cgdmVyc2lvbiBvZiBjdXJyZW50IGNvbmZpZyAodGFrZSBsb2NhbC91dGMvb2Zmc2V0IGZsYWdzLCBhbmRcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBub3cpLlxuICAgICAgICAgICAgd2Vla1llYXIgPSBkZmwody5HRywgY29uZmlnLl9hW1lFQVJdLCB3ZWVrT2ZZZWFyKG1vbWVudCgpLCAxLCA0KS55ZWFyKTtcbiAgICAgICAgICAgIHdlZWsgPSBkZmwody5XLCAxKTtcbiAgICAgICAgICAgIHdlZWtkYXkgPSBkZmwody5FLCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxhbmcgPSBnZXRMYW5nRGVmaW5pdGlvbihjb25maWcuX2wpO1xuICAgICAgICAgICAgZG93ID0gbGFuZy5fd2Vlay5kb3c7XG4gICAgICAgICAgICBkb3kgPSBsYW5nLl93ZWVrLmRveTtcblxuICAgICAgICAgICAgd2Vla1llYXIgPSBkZmwody5nZywgY29uZmlnLl9hW1lFQVJdLCB3ZWVrT2ZZZWFyKG1vbWVudCgpLCBkb3csIGRveSkueWVhcik7XG4gICAgICAgICAgICB3ZWVrID0gZGZsKHcudywgMSk7XG5cbiAgICAgICAgICAgIGlmICh3LmQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIHdlZWtkYXkgLS0gbG93IGRheSBudW1iZXJzIGFyZSBjb25zaWRlcmVkIG5leHQgd2Vla1xuICAgICAgICAgICAgICAgIHdlZWtkYXkgPSB3LmQ7XG4gICAgICAgICAgICAgICAgaWYgKHdlZWtkYXkgPCBkb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgKyt3ZWVrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAody5lICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBsb2NhbCB3ZWVrZGF5IC0tIGNvdW50aW5nIHN0YXJ0cyBmcm9tIGJlZ2luaW5nIG9mIHdlZWtcbiAgICAgICAgICAgICAgICB3ZWVrZGF5ID0gdy5lICsgZG93O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBkZWZhdWx0IHRvIGJlZ2luaW5nIG9mIHdlZWtcbiAgICAgICAgICAgICAgICB3ZWVrZGF5ID0gZG93O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRlbXAgPSBkYXlPZlllYXJGcm9tV2Vla3Mod2Vla1llYXIsIHdlZWssIHdlZWtkYXksIGRveSwgZG93KTtcblxuICAgICAgICBjb25maWcuX2FbWUVBUl0gPSB0ZW1wLnllYXI7XG4gICAgICAgIGNvbmZpZy5fZGF5T2ZZZWFyID0gdGVtcC5kYXlPZlllYXI7XG4gICAgfVxuXG4gICAgLy8gY29udmVydCBhbiBhcnJheSB0byBhIGRhdGUuXG4gICAgLy8gdGhlIGFycmF5IHNob3VsZCBtaXJyb3IgdGhlIHBhcmFtZXRlcnMgYmVsb3dcbiAgICAvLyBub3RlOiBhbGwgdmFsdWVzIHBhc3QgdGhlIHllYXIgYXJlIG9wdGlvbmFsIGFuZCB3aWxsIGRlZmF1bHQgdG8gdGhlIGxvd2VzdCBwb3NzaWJsZSB2YWx1ZS5cbiAgICAvLyBbeWVhciwgbW9udGgsIGRheSAsIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZF1cbiAgICBmdW5jdGlvbiBkYXRlRnJvbUNvbmZpZyhjb25maWcpIHtcbiAgICAgICAgdmFyIGksIGRhdGUsIGlucHV0ID0gW10sIGN1cnJlbnREYXRlLCB5ZWFyVG9Vc2U7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5fZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudERhdGUgPSBjdXJyZW50RGF0ZUFycmF5KGNvbmZpZyk7XG5cbiAgICAgICAgLy9jb21wdXRlIGRheSBvZiB0aGUgeWVhciBmcm9tIHdlZWtzIGFuZCB3ZWVrZGF5c1xuICAgICAgICBpZiAoY29uZmlnLl93ICYmIGNvbmZpZy5fYVtEQVRFXSA9PSBudWxsICYmIGNvbmZpZy5fYVtNT05USF0gPT0gbnVsbCkge1xuICAgICAgICAgICAgZGF5T2ZZZWFyRnJvbVdlZWtJbmZvKGNvbmZpZyk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2lmIHRoZSBkYXkgb2YgdGhlIHllYXIgaXMgc2V0LCBmaWd1cmUgb3V0IHdoYXQgaXQgaXNcbiAgICAgICAgaWYgKGNvbmZpZy5fZGF5T2ZZZWFyKSB7XG4gICAgICAgICAgICB5ZWFyVG9Vc2UgPSBkZmwoY29uZmlnLl9hW1lFQVJdLCBjdXJyZW50RGF0ZVtZRUFSXSk7XG5cbiAgICAgICAgICAgIGlmIChjb25maWcuX2RheU9mWWVhciA+IGRheXNJblllYXIoeWVhclRvVXNlKSkge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5fcGYuX292ZXJmbG93RGF5T2ZZZWFyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGF0ZSA9IG1ha2VVVENEYXRlKHllYXJUb1VzZSwgMCwgY29uZmlnLl9kYXlPZlllYXIpO1xuICAgICAgICAgICAgY29uZmlnLl9hW01PTlRIXSA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICAgICAgICAgIGNvbmZpZy5fYVtEQVRFXSA9IGRhdGUuZ2V0VVRDRGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGVmYXVsdCB0byBjdXJyZW50IGRhdGUuXG4gICAgICAgIC8vICogaWYgbm8geWVhciwgbW9udGgsIGRheSBvZiBtb250aCBhcmUgZ2l2ZW4sIGRlZmF1bHQgdG8gdG9kYXlcbiAgICAgICAgLy8gKiBpZiBkYXkgb2YgbW9udGggaXMgZ2l2ZW4sIGRlZmF1bHQgbW9udGggYW5kIHllYXJcbiAgICAgICAgLy8gKiBpZiBtb250aCBpcyBnaXZlbiwgZGVmYXVsdCBvbmx5IHllYXJcbiAgICAgICAgLy8gKiBpZiB5ZWFyIGlzIGdpdmVuLCBkb24ndCBkZWZhdWx0IGFueXRoaW5nXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCAzICYmIGNvbmZpZy5fYVtpXSA9PSBudWxsOyArK2kpIHtcbiAgICAgICAgICAgIGNvbmZpZy5fYVtpXSA9IGlucHV0W2ldID0gY3VycmVudERhdGVbaV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBaZXJvIG91dCB3aGF0ZXZlciB3YXMgbm90IGRlZmF1bHRlZCwgaW5jbHVkaW5nIHRpbWVcbiAgICAgICAgZm9yICg7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgICAgIGNvbmZpZy5fYVtpXSA9IGlucHV0W2ldID0gKGNvbmZpZy5fYVtpXSA9PSBudWxsKSA/IChpID09PSAyID8gMSA6IDApIDogY29uZmlnLl9hW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uZmlnLl9kID0gKGNvbmZpZy5fdXNlVVRDID8gbWFrZVVUQ0RhdGUgOiBtYWtlRGF0ZSkuYXBwbHkobnVsbCwgaW5wdXQpO1xuICAgICAgICAvLyBBcHBseSB0aW1lem9uZSBvZmZzZXQgZnJvbSBpbnB1dC4gVGhlIGFjdHVhbCB6b25lIGNhbiBiZSBjaGFuZ2VkXG4gICAgICAgIC8vIHdpdGggcGFyc2Vab25lLlxuICAgICAgICBpZiAoY29uZmlnLl90em0gIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uZmlnLl9kLnNldFVUQ01pbnV0ZXMoY29uZmlnLl9kLmdldFVUQ01pbnV0ZXMoKSArIGNvbmZpZy5fdHptKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRhdGVGcm9tT2JqZWN0KGNvbmZpZykge1xuICAgICAgICB2YXIgbm9ybWFsaXplZElucHV0O1xuXG4gICAgICAgIGlmIChjb25maWcuX2QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG5vcm1hbGl6ZWRJbnB1dCA9IG5vcm1hbGl6ZU9iamVjdFVuaXRzKGNvbmZpZy5faSk7XG4gICAgICAgIGNvbmZpZy5fYSA9IFtcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRJbnB1dC55ZWFyLFxuICAgICAgICAgICAgbm9ybWFsaXplZElucHV0Lm1vbnRoLFxuICAgICAgICAgICAgbm9ybWFsaXplZElucHV0LmRheSxcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRJbnB1dC5ob3VyLFxuICAgICAgICAgICAgbm9ybWFsaXplZElucHV0Lm1pbnV0ZSxcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRJbnB1dC5zZWNvbmQsXG4gICAgICAgICAgICBub3JtYWxpemVkSW5wdXQubWlsbGlzZWNvbmRcbiAgICAgICAgXTtcblxuICAgICAgICBkYXRlRnJvbUNvbmZpZyhjb25maWcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGN1cnJlbnREYXRlQXJyYXkoY29uZmlnKSB7XG4gICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBpZiAoY29uZmlnLl91c2VVVEMpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgbm93LmdldFVUQ0Z1bGxZZWFyKCksXG4gICAgICAgICAgICAgICAgbm93LmdldFVUQ01vbnRoKCksXG4gICAgICAgICAgICAgICAgbm93LmdldFVUQ0RhdGUoKVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbbm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCBub3cuZ2V0RGF0ZSgpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGRhdGUgZnJvbSBzdHJpbmcgYW5kIGZvcm1hdCBzdHJpbmdcbiAgICBmdW5jdGlvbiBtYWtlRGF0ZUZyb21TdHJpbmdBbmRGb3JtYXQoY29uZmlnKSB7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5fZiA9PT0gbW9tZW50LklTT184NjAxKSB7XG4gICAgICAgICAgICBwYXJzZUlTTyhjb25maWcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uZmlnLl9hID0gW107XG4gICAgICAgIGNvbmZpZy5fcGYuZW1wdHkgPSB0cnVlO1xuXG4gICAgICAgIC8vIFRoaXMgYXJyYXkgaXMgdXNlZCB0byBtYWtlIGEgRGF0ZSwgZWl0aGVyIHdpdGggYG5ldyBEYXRlYCBvciBgRGF0ZS5VVENgXG4gICAgICAgIHZhciBsYW5nID0gZ2V0TGFuZ0RlZmluaXRpb24oY29uZmlnLl9sKSxcbiAgICAgICAgICAgIHN0cmluZyA9ICcnICsgY29uZmlnLl9pLFxuICAgICAgICAgICAgaSwgcGFyc2VkSW5wdXQsIHRva2VucywgdG9rZW4sIHNraXBwZWQsXG4gICAgICAgICAgICBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoLFxuICAgICAgICAgICAgdG90YWxQYXJzZWRJbnB1dExlbmd0aCA9IDA7XG5cbiAgICAgICAgdG9rZW5zID0gZXhwYW5kRm9ybWF0KGNvbmZpZy5fZiwgbGFuZykubWF0Y2goZm9ybWF0dGluZ1Rva2VucykgfHwgW107XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBwYXJzZWRJbnB1dCA9IChzdHJpbmcubWF0Y2goZ2V0UGFyc2VSZWdleEZvclRva2VuKHRva2VuLCBjb25maWcpKSB8fCBbXSlbMF07XG4gICAgICAgICAgICBpZiAocGFyc2VkSW5wdXQpIHtcbiAgICAgICAgICAgICAgICBza2lwcGVkID0gc3RyaW5nLnN1YnN0cigwLCBzdHJpbmcuaW5kZXhPZihwYXJzZWRJbnB1dCkpO1xuICAgICAgICAgICAgICAgIGlmIChza2lwcGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLl9wZi51bnVzZWRJbnB1dC5wdXNoKHNraXBwZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmcuc2xpY2Uoc3RyaW5nLmluZGV4T2YocGFyc2VkSW5wdXQpICsgcGFyc2VkSW5wdXQubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB0b3RhbFBhcnNlZElucHV0TGVuZ3RoICs9IHBhcnNlZElucHV0Lmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGRvbid0IHBhcnNlIGlmIGl0J3Mgbm90IGEga25vd24gdG9rZW5cbiAgICAgICAgICAgIGlmIChmb3JtYXRUb2tlbkZ1bmN0aW9uc1t0b2tlbl0pIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkSW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLl9wZi5lbXB0eSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLl9wZi51bnVzZWRUb2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFkZFRpbWVUb0FycmF5RnJvbVRva2VuKHRva2VuLCBwYXJzZWRJbnB1dCwgY29uZmlnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbmZpZy5fc3RyaWN0ICYmICFwYXJzZWRJbnB1dCkge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5fcGYudW51c2VkVG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIHJlbWFpbmluZyB1bnBhcnNlZCBpbnB1dCBsZW5ndGggdG8gdGhlIHN0cmluZ1xuICAgICAgICBjb25maWcuX3BmLmNoYXJzTGVmdE92ZXIgPSBzdHJpbmdMZW5ndGggLSB0b3RhbFBhcnNlZElucHV0TGVuZ3RoO1xuICAgICAgICBpZiAoc3RyaW5nLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbmZpZy5fcGYudW51c2VkSW5wdXQucHVzaChzdHJpbmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaGFuZGxlIGFtIHBtXG4gICAgICAgIGlmIChjb25maWcuX2lzUG0gJiYgY29uZmlnLl9hW0hPVVJdIDwgMTIpIHtcbiAgICAgICAgICAgIGNvbmZpZy5fYVtIT1VSXSArPSAxMjtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBpcyAxMiBhbSwgY2hhbmdlIGhvdXJzIHRvIDBcbiAgICAgICAgaWYgKGNvbmZpZy5faXNQbSA9PT0gZmFsc2UgJiYgY29uZmlnLl9hW0hPVVJdID09PSAxMikge1xuICAgICAgICAgICAgY29uZmlnLl9hW0hPVVJdID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGVGcm9tQ29uZmlnKGNvbmZpZyk7XG4gICAgICAgIGNoZWNrT3ZlcmZsb3coY29uZmlnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bmVzY2FwZUZvcm1hdChzKSB7XG4gICAgICAgIHJldHVybiBzLnJlcGxhY2UoL1xcXFwoXFxbKXxcXFxcKFxcXSl8XFxbKFteXFxdXFxbXSopXFxdfFxcXFwoLikvZywgZnVuY3Rpb24gKG1hdGNoZWQsIHAxLCBwMiwgcDMsIHA0KSB7XG4gICAgICAgICAgICByZXR1cm4gcDEgfHwgcDIgfHwgcDMgfHwgcDQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIENvZGUgZnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM1NjE0OTMvaXMtdGhlcmUtYS1yZWdleHAtZXNjYXBlLWZ1bmN0aW9uLWluLWphdmFzY3JpcHRcbiAgICBmdW5jdGlvbiByZWdleHBFc2NhcGUocykge1xuICAgICAgICByZXR1cm4gcy5yZXBsYWNlKC9bLVxcL1xcXFxeJCorPy4oKXxbXFxde31dL2csICdcXFxcJCYnKTtcbiAgICB9XG5cbiAgICAvLyBkYXRlIGZyb20gc3RyaW5nIGFuZCBhcnJheSBvZiBmb3JtYXQgc3RyaW5nc1xuICAgIGZ1bmN0aW9uIG1ha2VEYXRlRnJvbVN0cmluZ0FuZEFycmF5KGNvbmZpZykge1xuICAgICAgICB2YXIgdGVtcENvbmZpZyxcbiAgICAgICAgICAgIGJlc3RNb21lbnQsXG5cbiAgICAgICAgICAgIHNjb3JlVG9CZWF0LFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGN1cnJlbnRTY29yZTtcblxuICAgICAgICBpZiAoY29uZmlnLl9mLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uZmlnLl9wZi5pbnZhbGlkRm9ybWF0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKE5hTik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY29uZmlnLl9mLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjdXJyZW50U2NvcmUgPSAwO1xuICAgICAgICAgICAgdGVtcENvbmZpZyA9IGV4dGVuZCh7fSwgY29uZmlnKTtcbiAgICAgICAgICAgIHRlbXBDb25maWcuX3BmID0gZGVmYXVsdFBhcnNpbmdGbGFncygpO1xuICAgICAgICAgICAgdGVtcENvbmZpZy5fZiA9IGNvbmZpZy5fZltpXTtcbiAgICAgICAgICAgIG1ha2VEYXRlRnJvbVN0cmluZ0FuZEZvcm1hdCh0ZW1wQ29uZmlnKTtcblxuICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKHRlbXBDb25maWcpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIGFueSBpbnB1dCB0aGF0IHdhcyBub3QgcGFyc2VkIGFkZCBhIHBlbmFsdHkgZm9yIHRoYXQgZm9ybWF0XG4gICAgICAgICAgICBjdXJyZW50U2NvcmUgKz0gdGVtcENvbmZpZy5fcGYuY2hhcnNMZWZ0T3ZlcjtcblxuICAgICAgICAgICAgLy9vciB0b2tlbnNcbiAgICAgICAgICAgIGN1cnJlbnRTY29yZSArPSB0ZW1wQ29uZmlnLl9wZi51bnVzZWRUb2tlbnMubGVuZ3RoICogMTA7XG5cbiAgICAgICAgICAgIHRlbXBDb25maWcuX3BmLnNjb3JlID0gY3VycmVudFNjb3JlO1xuXG4gICAgICAgICAgICBpZiAoc2NvcmVUb0JlYXQgPT0gbnVsbCB8fCBjdXJyZW50U2NvcmUgPCBzY29yZVRvQmVhdCkge1xuICAgICAgICAgICAgICAgIHNjb3JlVG9CZWF0ID0gY3VycmVudFNjb3JlO1xuICAgICAgICAgICAgICAgIGJlc3RNb21lbnQgPSB0ZW1wQ29uZmlnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZXh0ZW5kKGNvbmZpZywgYmVzdE1vbWVudCB8fCB0ZW1wQ29uZmlnKTtcbiAgICB9XG5cbiAgICAvLyBkYXRlIGZyb20gaXNvIGZvcm1hdFxuICAgIGZ1bmN0aW9uIHBhcnNlSVNPKGNvbmZpZykge1xuICAgICAgICB2YXIgaSwgbCxcbiAgICAgICAgICAgIHN0cmluZyA9IGNvbmZpZy5faSxcbiAgICAgICAgICAgIG1hdGNoID0gaXNvUmVnZXguZXhlYyhzdHJpbmcpO1xuXG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgY29uZmlnLl9wZi5pc28gPSB0cnVlO1xuICAgICAgICAgICAgZm9yIChpID0gMCwgbCA9IGlzb0RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpc29EYXRlc1tpXVsxXS5leGVjKHN0cmluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbWF0Y2hbNV0gc2hvdWxkIGJlIFwiVFwiIG9yIHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICBjb25maWcuX2YgPSBpc29EYXRlc1tpXVswXSArIChtYXRjaFs2XSB8fCBcIiBcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoaSA9IDAsIGwgPSBpc29UaW1lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNvVGltZXNbaV1bMV0uZXhlYyhzdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5fZiArPSBpc29UaW1lc1tpXVswXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0cmluZy5tYXRjaChwYXJzZVRva2VuVGltZXpvbmUpKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLl9mICs9IFwiWlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWFrZURhdGVGcm9tU3RyaW5nQW5kRm9ybWF0KGNvbmZpZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGRhdGUgZnJvbSBpc28gZm9ybWF0IG9yIGZhbGxiYWNrXG4gICAgZnVuY3Rpb24gbWFrZURhdGVGcm9tU3RyaW5nKGNvbmZpZykge1xuICAgICAgICBwYXJzZUlTTyhjb25maWcpO1xuICAgICAgICBpZiAoY29uZmlnLl9pc1ZhbGlkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5faXNWYWxpZDtcbiAgICAgICAgICAgIG1vbWVudC5jcmVhdGVGcm9tSW5wdXRGYWxsYmFjayhjb25maWcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZURhdGVGcm9tSW5wdXQoY29uZmlnKSB7XG4gICAgICAgIHZhciBpbnB1dCA9IGNvbmZpZy5faSxcbiAgICAgICAgICAgIG1hdGNoZWQgPSBhc3BOZXRKc29uUmVnZXguZXhlYyhpbnB1dCk7XG5cbiAgICAgICAgaWYgKGlucHV0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAobWF0Y2hlZCkge1xuICAgICAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoK21hdGNoZWRbMV0pO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIG1ha2VEYXRlRnJvbVN0cmluZyhjb25maWcpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICAgICAgICBjb25maWcuX2EgPSBpbnB1dC5zbGljZSgwKTtcbiAgICAgICAgICAgIGRhdGVGcm9tQ29uZmlnKGNvbmZpZyk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNEYXRlKGlucHV0KSkge1xuICAgICAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoK2lucHV0KTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YoaW5wdXQpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgZGF0ZUZyb21PYmplY3QoY29uZmlnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YoaW5wdXQpID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgLy8gZnJvbSBtaWxsaXNlY29uZHNcbiAgICAgICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKGlucHV0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vbWVudC5jcmVhdGVGcm9tSW5wdXRGYWxsYmFjayhjb25maWcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZURhdGUoeSwgbSwgZCwgaCwgTSwgcywgbXMpIHtcbiAgICAgICAgLy9jYW4ndCBqdXN0IGFwcGx5KCkgdG8gY3JlYXRlIGEgZGF0ZTpcbiAgICAgICAgLy9odHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE4MTM0OC9pbnN0YW50aWF0aW5nLWEtamF2YXNjcmlwdC1vYmplY3QtYnktY2FsbGluZy1wcm90b3R5cGUtY29uc3RydWN0b3ItYXBwbHlcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSh5LCBtLCBkLCBoLCBNLCBzLCBtcyk7XG5cbiAgICAgICAgLy90aGUgZGF0ZSBjb25zdHJ1Y3RvciBkb2Vzbid0IGFjY2VwdCB5ZWFycyA8IDE5NzBcbiAgICAgICAgaWYgKHkgPCAxOTcwKSB7XG4gICAgICAgICAgICBkYXRlLnNldEZ1bGxZZWFyKHkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VVVENEYXRlKHkpIHtcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQy5hcHBseShudWxsLCBhcmd1bWVudHMpKTtcbiAgICAgICAgaWYgKHkgPCAxOTcwKSB7XG4gICAgICAgICAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNlV2Vla2RheShpbnB1dCwgbGFuZ3VhZ2UpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmICghaXNOYU4oaW5wdXQpKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSBwYXJzZUludChpbnB1dCwgMTApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSBsYW5ndWFnZS53ZWVrZGF5c1BhcnNlKGlucHV0KTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGlucHV0ICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgUmVsYXRpdmUgVGltZVxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXG4gICAgLy8gaGVscGVyIGZ1bmN0aW9uIGZvciBtb21lbnQuZm4uZnJvbSwgbW9tZW50LmZuLmZyb21Ob3csIGFuZCBtb21lbnQuZHVyYXRpb24uZm4uaHVtYW5pemVcbiAgICBmdW5jdGlvbiBzdWJzdGl0dXRlVGltZUFnbyhzdHJpbmcsIG51bWJlciwgd2l0aG91dFN1ZmZpeCwgaXNGdXR1cmUsIGxhbmcpIHtcbiAgICAgICAgcmV0dXJuIGxhbmcucmVsYXRpdmVUaW1lKG51bWJlciB8fCAxLCAhIXdpdGhvdXRTdWZmaXgsIHN0cmluZywgaXNGdXR1cmUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbGF0aXZlVGltZShtaWxsaXNlY29uZHMsIHdpdGhvdXRTdWZmaXgsIGxhbmcpIHtcbiAgICAgICAgdmFyIHNlY29uZHMgPSByb3VuZChNYXRoLmFicyhtaWxsaXNlY29uZHMpIC8gMTAwMCksXG4gICAgICAgICAgICBtaW51dGVzID0gcm91bmQoc2Vjb25kcyAvIDYwKSxcbiAgICAgICAgICAgIGhvdXJzID0gcm91bmQobWludXRlcyAvIDYwKSxcbiAgICAgICAgICAgIGRheXMgPSByb3VuZChob3VycyAvIDI0KSxcbiAgICAgICAgICAgIHllYXJzID0gcm91bmQoZGF5cyAvIDM2NSksXG4gICAgICAgICAgICBhcmdzID0gc2Vjb25kcyA8IHJlbGF0aXZlVGltZVRocmVzaG9sZHMucyAgJiYgWydzJywgc2Vjb25kc10gfHxcbiAgICAgICAgICAgICAgICBtaW51dGVzID09PSAxICYmIFsnbSddIHx8XG4gICAgICAgICAgICAgICAgbWludXRlcyA8IHJlbGF0aXZlVGltZVRocmVzaG9sZHMubSAmJiBbJ21tJywgbWludXRlc10gfHxcbiAgICAgICAgICAgICAgICBob3VycyA9PT0gMSAmJiBbJ2gnXSB8fFxuICAgICAgICAgICAgICAgIGhvdXJzIDwgcmVsYXRpdmVUaW1lVGhyZXNob2xkcy5oICYmIFsnaGgnLCBob3Vyc10gfHxcbiAgICAgICAgICAgICAgICBkYXlzID09PSAxICYmIFsnZCddIHx8XG4gICAgICAgICAgICAgICAgZGF5cyA8PSByZWxhdGl2ZVRpbWVUaHJlc2hvbGRzLmRkICYmIFsnZGQnLCBkYXlzXSB8fFxuICAgICAgICAgICAgICAgIGRheXMgPD0gcmVsYXRpdmVUaW1lVGhyZXNob2xkcy5kbSAmJiBbJ00nXSB8fFxuICAgICAgICAgICAgICAgIGRheXMgPCByZWxhdGl2ZVRpbWVUaHJlc2hvbGRzLmR5ICYmIFsnTU0nLCByb3VuZChkYXlzIC8gMzApXSB8fFxuICAgICAgICAgICAgICAgIHllYXJzID09PSAxICYmIFsneSddIHx8IFsneXknLCB5ZWFyc107XG4gICAgICAgIGFyZ3NbMl0gPSB3aXRob3V0U3VmZml4O1xuICAgICAgICBhcmdzWzNdID0gbWlsbGlzZWNvbmRzID4gMDtcbiAgICAgICAgYXJnc1s0XSA9IGxhbmc7XG4gICAgICAgIHJldHVybiBzdWJzdGl0dXRlVGltZUFnby5hcHBseSh7fSwgYXJncyk7XG4gICAgfVxuXG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgIFdlZWsgb2YgWWVhclxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXG4gICAgLy8gZmlyc3REYXlPZldlZWsgICAgICAgMCA9IHN1biwgNiA9IHNhdFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgIHRoZSBkYXkgb2YgdGhlIHdlZWsgdGhhdCBzdGFydHMgdGhlIHdlZWtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAodXN1YWxseSBzdW5kYXkgb3IgbW9uZGF5KVxuICAgIC8vIGZpcnN0RGF5T2ZXZWVrT2ZZZWFyIDAgPSBzdW4sIDYgPSBzYXRcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICB0aGUgZmlyc3Qgd2VlayBpcyB0aGUgd2VlayB0aGF0IGNvbnRhaW5zIHRoZSBmaXJzdFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgIG9mIHRoaXMgZGF5IG9mIHRoZSB3ZWVrXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgKGVnLiBJU08gd2Vla3MgdXNlIHRodXJzZGF5ICg0KSlcbiAgICBmdW5jdGlvbiB3ZWVrT2ZZZWFyKG1vbSwgZmlyc3REYXlPZldlZWssIGZpcnN0RGF5T2ZXZWVrT2ZZZWFyKSB7XG4gICAgICAgIHZhciBlbmQgPSBmaXJzdERheU9mV2Vla09mWWVhciAtIGZpcnN0RGF5T2ZXZWVrLFxuICAgICAgICAgICAgZGF5c1RvRGF5T2ZXZWVrID0gZmlyc3REYXlPZldlZWtPZlllYXIgLSBtb20uZGF5KCksXG4gICAgICAgICAgICBhZGp1c3RlZE1vbWVudDtcblxuXG4gICAgICAgIGlmIChkYXlzVG9EYXlPZldlZWsgPiBlbmQpIHtcbiAgICAgICAgICAgIGRheXNUb0RheU9mV2VlayAtPSA3O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRheXNUb0RheU9mV2VlayA8IGVuZCAtIDcpIHtcbiAgICAgICAgICAgIGRheXNUb0RheU9mV2VlayArPSA3O1xuICAgICAgICB9XG5cbiAgICAgICAgYWRqdXN0ZWRNb21lbnQgPSBtb21lbnQobW9tKS5hZGQoJ2QnLCBkYXlzVG9EYXlPZldlZWspO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2VlazogTWF0aC5jZWlsKGFkanVzdGVkTW9tZW50LmRheU9mWWVhcigpIC8gNyksXG4gICAgICAgICAgICB5ZWFyOiBhZGp1c3RlZE1vbWVudC55ZWFyKClcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvL2h0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZSNDYWxjdWxhdGluZ19hX2RhdGVfZ2l2ZW5fdGhlX3llYXIuMkNfd2Vla19udW1iZXJfYW5kX3dlZWtkYXlcbiAgICBmdW5jdGlvbiBkYXlPZlllYXJGcm9tV2Vla3MoeWVhciwgd2Vlaywgd2Vla2RheSwgZmlyc3REYXlPZldlZWtPZlllYXIsIGZpcnN0RGF5T2ZXZWVrKSB7XG4gICAgICAgIHZhciBkID0gbWFrZVVUQ0RhdGUoeWVhciwgMCwgMSkuZ2V0VVRDRGF5KCksIGRheXNUb0FkZCwgZGF5T2ZZZWFyO1xuXG4gICAgICAgIGQgPSBkID09PSAwID8gNyA6IGQ7XG4gICAgICAgIHdlZWtkYXkgPSB3ZWVrZGF5ICE9IG51bGwgPyB3ZWVrZGF5IDogZmlyc3REYXlPZldlZWs7XG4gICAgICAgIGRheXNUb0FkZCA9IGZpcnN0RGF5T2ZXZWVrIC0gZCArIChkID4gZmlyc3REYXlPZldlZWtPZlllYXIgPyA3IDogMCkgLSAoZCA8IGZpcnN0RGF5T2ZXZWVrID8gNyA6IDApO1xuICAgICAgICBkYXlPZlllYXIgPSA3ICogKHdlZWsgLSAxKSArICh3ZWVrZGF5IC0gZmlyc3REYXlPZldlZWspICsgZGF5c1RvQWRkICsgMTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeWVhcjogZGF5T2ZZZWFyID4gMCA/IHllYXIgOiB5ZWFyIC0gMSxcbiAgICAgICAgICAgIGRheU9mWWVhcjogZGF5T2ZZZWFyID4gMCA/ICBkYXlPZlllYXIgOiBkYXlzSW5ZZWFyKHllYXIgLSAxKSArIGRheU9mWWVhclxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgVG9wIExldmVsIEZ1bmN0aW9uc1xuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgIGZ1bmN0aW9uIG1ha2VNb21lbnQoY29uZmlnKSB7XG4gICAgICAgIHZhciBpbnB1dCA9IGNvbmZpZy5faSxcbiAgICAgICAgICAgIGZvcm1hdCA9IGNvbmZpZy5fZjtcblxuICAgICAgICBpZiAoaW5wdXQgPT09IG51bGwgfHwgKGZvcm1hdCA9PT0gdW5kZWZpbmVkICYmIGlucHV0ID09PSAnJykpIHtcbiAgICAgICAgICAgIHJldHVybiBtb21lbnQuaW52YWxpZCh7bnVsbElucHV0OiB0cnVlfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uZmlnLl9pID0gaW5wdXQgPSBnZXRMYW5nRGVmaW5pdGlvbigpLnByZXBhcnNlKGlucHV0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtb21lbnQuaXNNb21lbnQoaW5wdXQpKSB7XG4gICAgICAgICAgICBjb25maWcgPSBjbG9uZU1vbWVudChpbnB1dCk7XG5cbiAgICAgICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKCtpbnB1dC5fZCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZm9ybWF0KSB7XG4gICAgICAgICAgICBpZiAoaXNBcnJheShmb3JtYXQpKSB7XG4gICAgICAgICAgICAgICAgbWFrZURhdGVGcm9tU3RyaW5nQW5kQXJyYXkoY29uZmlnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWFrZURhdGVGcm9tU3RyaW5nQW5kRm9ybWF0KGNvbmZpZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYWtlRGF0ZUZyb21JbnB1dChjb25maWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBNb21lbnQoY29uZmlnKTtcbiAgICB9XG5cbiAgICBtb21lbnQgPSBmdW5jdGlvbiAoaW5wdXQsIGZvcm1hdCwgbGFuZywgc3RyaWN0KSB7XG4gICAgICAgIHZhciBjO1xuXG4gICAgICAgIGlmICh0eXBlb2YobGFuZykgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICBzdHJpY3QgPSBsYW5nO1xuICAgICAgICAgICAgbGFuZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICAvLyBvYmplY3QgY29uc3RydWN0aW9uIG11c3QgYmUgZG9uZSB0aGlzIHdheS5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvaXNzdWVzLzE0MjNcbiAgICAgICAgYyA9IHt9O1xuICAgICAgICBjLl9pc0FNb21lbnRPYmplY3QgPSB0cnVlO1xuICAgICAgICBjLl9pID0gaW5wdXQ7XG4gICAgICAgIGMuX2YgPSBmb3JtYXQ7XG4gICAgICAgIGMuX2wgPSBsYW5nO1xuICAgICAgICBjLl9zdHJpY3QgPSBzdHJpY3Q7XG4gICAgICAgIGMuX2lzVVRDID0gZmFsc2U7XG4gICAgICAgIGMuX3BmID0gZGVmYXVsdFBhcnNpbmdGbGFncygpO1xuXG4gICAgICAgIHJldHVybiBtYWtlTW9tZW50KGMpO1xuICAgIH07XG5cbiAgICBtb21lbnQuc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmdzID0gZmFsc2U7XG5cbiAgICBtb21lbnQuY3JlYXRlRnJvbUlucHV0RmFsbGJhY2sgPSBkZXByZWNhdGUoXG4gICAgICAgICAgICBcIm1vbWVudCBjb25zdHJ1Y3Rpb24gZmFsbHMgYmFjayB0byBqcyBEYXRlLiBUaGlzIGlzIFwiICtcbiAgICAgICAgICAgIFwiZGlzY291cmFnZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB1cGNvbWluZyBtYWpvciBcIiArXG4gICAgICAgICAgICBcInJlbGVhc2UuIFBsZWFzZSByZWZlciB0byBcIiArXG4gICAgICAgICAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8xNDA3IGZvciBtb3JlIGluZm8uXCIsXG4gICAgICAgICAgICBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKGNvbmZpZy5faSk7XG4gICAgfSk7XG5cbiAgICAvLyBQaWNrIGEgbW9tZW50IG0gZnJvbSBtb21lbnRzIHNvIHRoYXQgbVtmbl0ob3RoZXIpIGlzIHRydWUgZm9yIGFsbFxuICAgIC8vIG90aGVyLiBUaGlzIHJlbGllcyBvbiB0aGUgZnVuY3Rpb24gZm4gdG8gYmUgdHJhbnNpdGl2ZS5cbiAgICAvL1xuICAgIC8vIG1vbWVudHMgc2hvdWxkIGVpdGhlciBiZSBhbiBhcnJheSBvZiBtb21lbnQgb2JqZWN0cyBvciBhbiBhcnJheSwgd2hvc2VcbiAgICAvLyBmaXJzdCBlbGVtZW50IGlzIGFuIGFycmF5IG9mIG1vbWVudCBvYmplY3RzLlxuICAgIGZ1bmN0aW9uIHBpY2tCeShmbiwgbW9tZW50cykge1xuICAgICAgICB2YXIgcmVzLCBpO1xuICAgICAgICBpZiAobW9tZW50cy5sZW5ndGggPT09IDEgJiYgaXNBcnJheShtb21lbnRzWzBdKSkge1xuICAgICAgICAgICAgbW9tZW50cyA9IG1vbWVudHNbMF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFtb21lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG1vbWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIHJlcyA9IG1vbWVudHNbMF07XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCBtb21lbnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAobW9tZW50c1tpXVtmbl0ocmVzKSkge1xuICAgICAgICAgICAgICAgIHJlcyA9IG1vbWVudHNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBtb21lbnQubWluID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcblxuICAgICAgICByZXR1cm4gcGlja0J5KCdpc0JlZm9yZScsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBtb21lbnQubWF4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcblxuICAgICAgICByZXR1cm4gcGlja0J5KCdpc0FmdGVyJywgYXJncyk7XG4gICAgfTtcblxuICAgIC8vIGNyZWF0aW5nIHdpdGggdXRjXG4gICAgbW9tZW50LnV0YyA9IGZ1bmN0aW9uIChpbnB1dCwgZm9ybWF0LCBsYW5nLCBzdHJpY3QpIHtcbiAgICAgICAgdmFyIGM7XG5cbiAgICAgICAgaWYgKHR5cGVvZihsYW5nKSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIHN0cmljdCA9IGxhbmc7XG4gICAgICAgICAgICBsYW5nID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIC8vIG9iamVjdCBjb25zdHJ1Y3Rpb24gbXVzdCBiZSBkb25lIHRoaXMgd2F5LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMTQyM1xuICAgICAgICBjID0ge307XG4gICAgICAgIGMuX2lzQU1vbWVudE9iamVjdCA9IHRydWU7XG4gICAgICAgIGMuX3VzZVVUQyA9IHRydWU7XG4gICAgICAgIGMuX2lzVVRDID0gdHJ1ZTtcbiAgICAgICAgYy5fbCA9IGxhbmc7XG4gICAgICAgIGMuX2kgPSBpbnB1dDtcbiAgICAgICAgYy5fZiA9IGZvcm1hdDtcbiAgICAgICAgYy5fc3RyaWN0ID0gc3RyaWN0O1xuICAgICAgICBjLl9wZiA9IGRlZmF1bHRQYXJzaW5nRmxhZ3MoKTtcblxuICAgICAgICByZXR1cm4gbWFrZU1vbWVudChjKS51dGMoKTtcbiAgICB9O1xuXG4gICAgLy8gY3JlYXRpbmcgd2l0aCB1bml4IHRpbWVzdGFtcCAoaW4gc2Vjb25kcylcbiAgICBtb21lbnQudW5peCA9IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICByZXR1cm4gbW9tZW50KGlucHV0ICogMTAwMCk7XG4gICAgfTtcblxuICAgIC8vIGR1cmF0aW9uXG4gICAgbW9tZW50LmR1cmF0aW9uID0gZnVuY3Rpb24gKGlucHV0LCBrZXkpIHtcbiAgICAgICAgdmFyIGR1cmF0aW9uID0gaW5wdXQsXG4gICAgICAgICAgICAvLyBtYXRjaGluZyBhZ2FpbnN0IHJlZ2V4cCBpcyBleHBlbnNpdmUsIGRvIGl0IG9uIGRlbWFuZFxuICAgICAgICAgICAgbWF0Y2ggPSBudWxsLFxuICAgICAgICAgICAgc2lnbixcbiAgICAgICAgICAgIHJldCxcbiAgICAgICAgICAgIHBhcnNlSXNvO1xuXG4gICAgICAgIGlmIChtb21lbnQuaXNEdXJhdGlvbihpbnB1dCkpIHtcbiAgICAgICAgICAgIGR1cmF0aW9uID0ge1xuICAgICAgICAgICAgICAgIG1zOiBpbnB1dC5fbWlsbGlzZWNvbmRzLFxuICAgICAgICAgICAgICAgIGQ6IGlucHV0Ll9kYXlzLFxuICAgICAgICAgICAgICAgIE06IGlucHV0Ll9tb250aHNcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGlucHV0ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZHVyYXRpb24gPSB7fTtcbiAgICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbltrZXldID0gaW5wdXQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uLm1pbGxpc2Vjb25kcyA9IGlucHV0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCEhKG1hdGNoID0gYXNwTmV0VGltZVNwYW5Kc29uUmVnZXguZXhlYyhpbnB1dCkpKSB7XG4gICAgICAgICAgICBzaWduID0gKG1hdGNoWzFdID09PSBcIi1cIikgPyAtMSA6IDE7XG4gICAgICAgICAgICBkdXJhdGlvbiA9IHtcbiAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgIGQ6IHRvSW50KG1hdGNoW0RBVEVdKSAqIHNpZ24sXG4gICAgICAgICAgICAgICAgaDogdG9JbnQobWF0Y2hbSE9VUl0pICogc2lnbixcbiAgICAgICAgICAgICAgICBtOiB0b0ludChtYXRjaFtNSU5VVEVdKSAqIHNpZ24sXG4gICAgICAgICAgICAgICAgczogdG9JbnQobWF0Y2hbU0VDT05EXSkgKiBzaWduLFxuICAgICAgICAgICAgICAgIG1zOiB0b0ludChtYXRjaFtNSUxMSVNFQ09ORF0pICogc2lnblxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmICghIShtYXRjaCA9IGlzb0R1cmF0aW9uUmVnZXguZXhlYyhpbnB1dCkpKSB7XG4gICAgICAgICAgICBzaWduID0gKG1hdGNoWzFdID09PSBcIi1cIikgPyAtMSA6IDE7XG4gICAgICAgICAgICBwYXJzZUlzbyA9IGZ1bmN0aW9uIChpbnApIHtcbiAgICAgICAgICAgICAgICAvLyBXZSdkIG5vcm1hbGx5IHVzZSB+fmlucCBmb3IgdGhpcywgYnV0IHVuZm9ydHVuYXRlbHkgaXQgYWxzb1xuICAgICAgICAgICAgICAgIC8vIGNvbnZlcnRzIGZsb2F0cyB0byBpbnRzLlxuICAgICAgICAgICAgICAgIC8vIGlucCBtYXkgYmUgdW5kZWZpbmVkLCBzbyBjYXJlZnVsIGNhbGxpbmcgcmVwbGFjZSBvbiBpdC5cbiAgICAgICAgICAgICAgICB2YXIgcmVzID0gaW5wICYmIHBhcnNlRmxvYXQoaW5wLnJlcGxhY2UoJywnLCAnLicpKTtcbiAgICAgICAgICAgICAgICAvLyBhcHBseSBzaWduIHdoaWxlIHdlJ3JlIGF0IGl0XG4gICAgICAgICAgICAgICAgcmV0dXJuIChpc05hTihyZXMpID8gMCA6IHJlcykgKiBzaWduO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGR1cmF0aW9uID0ge1xuICAgICAgICAgICAgICAgIHk6IHBhcnNlSXNvKG1hdGNoWzJdKSxcbiAgICAgICAgICAgICAgICBNOiBwYXJzZUlzbyhtYXRjaFszXSksXG4gICAgICAgICAgICAgICAgZDogcGFyc2VJc28obWF0Y2hbNF0pLFxuICAgICAgICAgICAgICAgIGg6IHBhcnNlSXNvKG1hdGNoWzVdKSxcbiAgICAgICAgICAgICAgICBtOiBwYXJzZUlzbyhtYXRjaFs2XSksXG4gICAgICAgICAgICAgICAgczogcGFyc2VJc28obWF0Y2hbN10pLFxuICAgICAgICAgICAgICAgIHc6IHBhcnNlSXNvKG1hdGNoWzhdKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldCA9IG5ldyBEdXJhdGlvbihkdXJhdGlvbik7XG5cbiAgICAgICAgaWYgKG1vbWVudC5pc0R1cmF0aW9uKGlucHV0KSAmJiBpbnB1dC5oYXNPd25Qcm9wZXJ0eSgnX2xhbmcnKSkge1xuICAgICAgICAgICAgcmV0Ll9sYW5nID0gaW5wdXQuX2xhbmc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH07XG5cbiAgICAvLyB2ZXJzaW9uIG51bWJlclxuICAgIG1vbWVudC52ZXJzaW9uID0gVkVSU0lPTjtcblxuICAgIC8vIGRlZmF1bHQgZm9ybWF0XG4gICAgbW9tZW50LmRlZmF1bHRGb3JtYXQgPSBpc29Gb3JtYXQ7XG5cbiAgICAvLyBjb25zdGFudCB0aGF0IHJlZmVycyB0byB0aGUgSVNPIHN0YW5kYXJkXG4gICAgbW9tZW50LklTT184NjAxID0gZnVuY3Rpb24gKCkge307XG5cbiAgICAvLyBQbHVnaW5zIHRoYXQgYWRkIHByb3BlcnRpZXMgc2hvdWxkIGFsc28gYWRkIHRoZSBrZXkgaGVyZSAobnVsbCB2YWx1ZSksXG4gICAgLy8gc28gd2UgY2FuIHByb3Blcmx5IGNsb25lIG91cnNlbHZlcy5cbiAgICBtb21lbnQubW9tZW50UHJvcGVydGllcyA9IG1vbWVudFByb3BlcnRpZXM7XG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIHdoZW5ldmVyIGEgbW9tZW50IGlzIG11dGF0ZWQuXG4gICAgLy8gSXQgaXMgaW50ZW5kZWQgdG8ga2VlcCB0aGUgb2Zmc2V0IGluIHN5bmMgd2l0aCB0aGUgdGltZXpvbmUuXG4gICAgbW9tZW50LnVwZGF0ZU9mZnNldCA9IGZ1bmN0aW9uICgpIHt9O1xuXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIHNldCBhIHRocmVzaG9sZCBmb3IgcmVsYXRpdmUgdGltZSBzdHJpbmdzXG4gICAgbW9tZW50LnJlbGF0aXZlVGltZVRocmVzaG9sZCA9IGZ1bmN0aW9uKHRocmVzaG9sZCwgbGltaXQpIHtcbiAgICAgIGlmIChyZWxhdGl2ZVRpbWVUaHJlc2hvbGRzW3RocmVzaG9sZF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZWxhdGl2ZVRpbWVUaHJlc2hvbGRzW3RocmVzaG9sZF0gPSBsaW1pdDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgbG9hZCBsYW5ndWFnZXMgYW5kIHRoZW4gc2V0IHRoZSBnbG9iYWwgbGFuZ3VhZ2UuICBJZlxuICAgIC8vIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkIGluLCBpdCB3aWxsIHNpbXBseSByZXR1cm4gdGhlIGN1cnJlbnQgZ2xvYmFsXG4gICAgLy8gbGFuZ3VhZ2Uga2V5LlxuICAgIG1vbWVudC5sYW5nID0gZnVuY3Rpb24gKGtleSwgdmFsdWVzKSB7XG4gICAgICAgIHZhciByO1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuIG1vbWVudC5mbi5fbGFuZy5fYWJicjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWVzKSB7XG4gICAgICAgICAgICBsb2FkTGFuZyhub3JtYWxpemVMYW5ndWFnZShrZXkpLCB2YWx1ZXMpO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdW5sb2FkTGFuZyhrZXkpO1xuICAgICAgICAgICAga2V5ID0gJ2VuJztcbiAgICAgICAgfSBlbHNlIGlmICghbGFuZ3VhZ2VzW2tleV0pIHtcbiAgICAgICAgICAgIGdldExhbmdEZWZpbml0aW9uKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgciA9IG1vbWVudC5kdXJhdGlvbi5mbi5fbGFuZyA9IG1vbWVudC5mbi5fbGFuZyA9IGdldExhbmdEZWZpbml0aW9uKGtleSk7XG4gICAgICAgIHJldHVybiByLl9hYmJyO1xuICAgIH07XG5cbiAgICAvLyByZXR1cm5zIGxhbmd1YWdlIGRhdGFcbiAgICBtb21lbnQubGFuZ0RhdGEgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmIChrZXkgJiYga2V5Ll9sYW5nICYmIGtleS5fbGFuZy5fYWJicikge1xuICAgICAgICAgICAga2V5ID0ga2V5Ll9sYW5nLl9hYmJyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnZXRMYW5nRGVmaW5pdGlvbihrZXkpO1xuICAgIH07XG5cbiAgICAvLyBjb21wYXJlIG1vbWVudCBvYmplY3RcbiAgICBtb21lbnQuaXNNb21lbnQgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBNb21lbnQgfHxcbiAgICAgICAgICAgIChvYmogIT0gbnVsbCAmJiAgb2JqLmhhc093blByb3BlcnR5KCdfaXNBTW9tZW50T2JqZWN0JykpO1xuICAgIH07XG5cbiAgICAvLyBmb3IgdHlwZWNoZWNraW5nIER1cmF0aW9uIG9iamVjdHNcbiAgICBtb21lbnQuaXNEdXJhdGlvbiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIER1cmF0aW9uO1xuICAgIH07XG5cbiAgICBmb3IgKGkgPSBsaXN0cy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICBtYWtlTGlzdChsaXN0c1tpXSk7XG4gICAgfVxuXG4gICAgbW9tZW50Lm5vcm1hbGl6ZVVuaXRzID0gZnVuY3Rpb24gKHVuaXRzKSB7XG4gICAgICAgIHJldHVybiBub3JtYWxpemVVbml0cyh1bml0cyk7XG4gICAgfTtcblxuICAgIG1vbWVudC5pbnZhbGlkID0gZnVuY3Rpb24gKGZsYWdzKSB7XG4gICAgICAgIHZhciBtID0gbW9tZW50LnV0YyhOYU4pO1xuICAgICAgICBpZiAoZmxhZ3MgIT0gbnVsbCkge1xuICAgICAgICAgICAgZXh0ZW5kKG0uX3BmLCBmbGFncyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtLl9wZi51c2VySW52YWxpZGF0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG07XG4gICAgfTtcblxuICAgIG1vbWVudC5wYXJzZVpvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBtb21lbnQuYXBwbHkobnVsbCwgYXJndW1lbnRzKS5wYXJzZVpvbmUoKTtcbiAgICB9O1xuXG4gICAgbW9tZW50LnBhcnNlVHdvRGlnaXRZZWFyID0gZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICAgIHJldHVybiB0b0ludChpbnB1dCkgKyAodG9JbnQoaW5wdXQpID4gNjggPyAxOTAwIDogMjAwMCk7XG4gICAgfTtcblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgTW9tZW50IFByb3RvdHlwZVxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXG4gICAgZXh0ZW5kKG1vbWVudC5mbiA9IE1vbWVudC5wcm90b3R5cGUsIHtcblxuICAgICAgICBjbG9uZSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBtb21lbnQodGhpcyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdmFsdWVPZiA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiArdGhpcy5fZCArICgodGhpcy5fb2Zmc2V0IHx8IDApICogNjAwMDApO1xuICAgICAgICB9LFxuXG4gICAgICAgIHVuaXggOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigrdGhpcyAvIDEwMDApO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRvU3RyaW5nIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5sYW5nKCdlbicpLmZvcm1hdChcImRkZCBNTU0gREQgWVlZWSBISDptbTpzcyBbR01UXVpaXCIpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRvRGF0ZSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9vZmZzZXQgPyBuZXcgRGF0ZSgrdGhpcykgOiB0aGlzLl9kO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRvSVNPU3RyaW5nIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG0gPSBtb21lbnQodGhpcykudXRjKCk7XG4gICAgICAgICAgICBpZiAoMCA8IG0ueWVhcigpICYmIG0ueWVhcigpIDw9IDk5OTkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9ybWF0TW9tZW50KG0sICdZWVlZLU1NLUREW1RdSEg6bW06c3MuU1NTW1pdJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmb3JtYXRNb21lbnQobSwgJ1lZWVlZWS1NTS1ERFtUXUhIOm1tOnNzLlNTU1taXScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHRvQXJyYXkgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbSA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIG0ueWVhcigpLFxuICAgICAgICAgICAgICAgIG0ubW9udGgoKSxcbiAgICAgICAgICAgICAgICBtLmRhdGUoKSxcbiAgICAgICAgICAgICAgICBtLmhvdXJzKCksXG4gICAgICAgICAgICAgICAgbS5taW51dGVzKCksXG4gICAgICAgICAgICAgICAgbS5zZWNvbmRzKCksXG4gICAgICAgICAgICAgICAgbS5taWxsaXNlY29uZHMoKVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfSxcblxuICAgICAgICBpc1ZhbGlkIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGlzVmFsaWQodGhpcyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaXNEU1RTaGlmdGVkIDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fYSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQoKSAmJiBjb21wYXJlQXJyYXlzKHRoaXMuX2EsICh0aGlzLl9pc1VUQyA/IG1vbWVudC51dGModGhpcy5fYSkgOiBtb21lbnQodGhpcy5fYSkpLnRvQXJyYXkoKSkgPiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGFyc2luZ0ZsYWdzIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGV4dGVuZCh7fSwgdGhpcy5fcGYpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGludmFsaWRBdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BmLm92ZXJmbG93O1xuICAgICAgICB9LFxuXG4gICAgICAgIHV0YyA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnpvbmUoMCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbG9jYWwgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnpvbmUoMCk7XG4gICAgICAgICAgICB0aGlzLl9pc1VUQyA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZm9ybWF0IDogZnVuY3Rpb24gKGlucHV0U3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgb3V0cHV0ID0gZm9ybWF0TW9tZW50KHRoaXMsIGlucHV0U3RyaW5nIHx8IG1vbWVudC5kZWZhdWx0Rm9ybWF0KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxhbmcoKS5wb3N0Zm9ybWF0KG91dHB1dCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkIDogZnVuY3Rpb24gKGlucHV0LCB2YWwpIHtcbiAgICAgICAgICAgIHZhciBkdXI7XG4gICAgICAgICAgICAvLyBzd2l0Y2ggYXJncyB0byBzdXBwb3J0IGFkZCgncycsIDEpIGFuZCBhZGQoMSwgJ3MnKVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBkdXIgPSBtb21lbnQuZHVyYXRpb24oaXNOYU4oK3ZhbCkgPyAraW5wdXQgOiArdmFsLCBpc05hTigrdmFsKSA/IHZhbCA6IGlucHV0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGR1ciA9IG1vbWVudC5kdXJhdGlvbigrdmFsLCBpbnB1dCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGR1ciA9IG1vbWVudC5kdXJhdGlvbihpbnB1dCwgdmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFkZE9yU3VidHJhY3REdXJhdGlvbkZyb21Nb21lbnQodGhpcywgZHVyLCAxKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIHN1YnRyYWN0IDogZnVuY3Rpb24gKGlucHV0LCB2YWwpIHtcbiAgICAgICAgICAgIHZhciBkdXI7XG4gICAgICAgICAgICAvLyBzd2l0Y2ggYXJncyB0byBzdXBwb3J0IHN1YnRyYWN0KCdzJywgMSkgYW5kIHN1YnRyYWN0KDEsICdzJylcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnICYmIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgZHVyID0gbW9tZW50LmR1cmF0aW9uKGlzTmFOKCt2YWwpID8gK2lucHV0IDogK3ZhbCwgaXNOYU4oK3ZhbCkgPyB2YWwgOiBpbnB1dCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBkdXIgPSBtb21lbnQuZHVyYXRpb24oK3ZhbCwgaW5wdXQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkdXIgPSBtb21lbnQuZHVyYXRpb24oaW5wdXQsIHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZGRPclN1YnRyYWN0RHVyYXRpb25Gcm9tTW9tZW50KHRoaXMsIGR1ciwgLTEpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGlmZiA6IGZ1bmN0aW9uIChpbnB1dCwgdW5pdHMsIGFzRmxvYXQpIHtcbiAgICAgICAgICAgIHZhciB0aGF0ID0gbWFrZUFzKGlucHV0LCB0aGlzKSxcbiAgICAgICAgICAgICAgICB6b25lRGlmZiA9ICh0aGlzLnpvbmUoKSAtIHRoYXQuem9uZSgpKSAqIDZlNCxcbiAgICAgICAgICAgICAgICBkaWZmLCBvdXRwdXQ7XG5cbiAgICAgICAgICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuXG4gICAgICAgICAgICBpZiAodW5pdHMgPT09ICd5ZWFyJyB8fCB1bml0cyA9PT0gJ21vbnRoJykge1xuICAgICAgICAgICAgICAgIC8vIGF2ZXJhZ2UgbnVtYmVyIG9mIGRheXMgaW4gdGhlIG1vbnRocyBpbiB0aGUgZ2l2ZW4gZGF0ZXNcbiAgICAgICAgICAgICAgICBkaWZmID0gKHRoaXMuZGF5c0luTW9udGgoKSArIHRoYXQuZGF5c0luTW9udGgoKSkgKiA0MzJlNTsgLy8gMjQgKiA2MCAqIDYwICogMTAwMCAvIDJcbiAgICAgICAgICAgICAgICAvLyBkaWZmZXJlbmNlIGluIG1vbnRoc1xuICAgICAgICAgICAgICAgIG91dHB1dCA9ICgodGhpcy55ZWFyKCkgLSB0aGF0LnllYXIoKSkgKiAxMikgKyAodGhpcy5tb250aCgpIC0gdGhhdC5tb250aCgpKTtcbiAgICAgICAgICAgICAgICAvLyBhZGp1c3QgYnkgdGFraW5nIGRpZmZlcmVuY2UgaW4gZGF5cywgYXZlcmFnZSBudW1iZXIgb2YgZGF5c1xuICAgICAgICAgICAgICAgIC8vIGFuZCBkc3QgaW4gdGhlIGdpdmVuIG1vbnRocy5cbiAgICAgICAgICAgICAgICBvdXRwdXQgKz0gKCh0aGlzIC0gbW9tZW50KHRoaXMpLnN0YXJ0T2YoJ21vbnRoJykpIC1cbiAgICAgICAgICAgICAgICAgICAgICAgICh0aGF0IC0gbW9tZW50KHRoYXQpLnN0YXJ0T2YoJ21vbnRoJykpKSAvIGRpZmY7XG4gICAgICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2l0aCB6b25lcywgdG8gbmVnYXRlIGFsbCBkc3RcbiAgICAgICAgICAgICAgICBvdXRwdXQgLT0gKCh0aGlzLnpvbmUoKSAtIG1vbWVudCh0aGlzKS5zdGFydE9mKCdtb250aCcpLnpvbmUoKSkgLVxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoYXQuem9uZSgpIC0gbW9tZW50KHRoYXQpLnN0YXJ0T2YoJ21vbnRoJykuem9uZSgpKSkgKiA2ZTQgLyBkaWZmO1xuICAgICAgICAgICAgICAgIGlmICh1bml0cyA9PT0gJ3llYXInKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dCAvIDEyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlmZiA9ICh0aGlzIC0gdGhhdCk7XG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gdW5pdHMgPT09ICdzZWNvbmQnID8gZGlmZiAvIDFlMyA6IC8vIDEwMDBcbiAgICAgICAgICAgICAgICAgICAgdW5pdHMgPT09ICdtaW51dGUnID8gZGlmZiAvIDZlNCA6IC8vIDEwMDAgKiA2MFxuICAgICAgICAgICAgICAgICAgICB1bml0cyA9PT0gJ2hvdXInID8gZGlmZiAvIDM2ZTUgOiAvLyAxMDAwICogNjAgKiA2MFxuICAgICAgICAgICAgICAgICAgICB1bml0cyA9PT0gJ2RheScgPyAoZGlmZiAtIHpvbmVEaWZmKSAvIDg2NGU1IDogLy8gMTAwMCAqIDYwICogNjAgKiAyNCwgbmVnYXRlIGRzdFxuICAgICAgICAgICAgICAgICAgICB1bml0cyA9PT0gJ3dlZWsnID8gKGRpZmYgLSB6b25lRGlmZikgLyA2MDQ4ZTUgOiAvLyAxMDAwICogNjAgKiA2MCAqIDI0ICogNywgbmVnYXRlIGRzdFxuICAgICAgICAgICAgICAgICAgICBkaWZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFzRmxvYXQgPyBvdXRwdXQgOiBhYnNSb3VuZChvdXRwdXQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGZyb20gOiBmdW5jdGlvbiAodGltZSwgd2l0aG91dFN1ZmZpeCkge1xuICAgICAgICAgICAgcmV0dXJuIG1vbWVudC5kdXJhdGlvbih0aGlzLmRpZmYodGltZSkpLmxhbmcodGhpcy5sYW5nKCkuX2FiYnIpLmh1bWFuaXplKCF3aXRob3V0U3VmZml4KTtcbiAgICAgICAgfSxcblxuICAgICAgICBmcm9tTm93IDogZnVuY3Rpb24gKHdpdGhvdXRTdWZmaXgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZyb20obW9tZW50KCksIHdpdGhvdXRTdWZmaXgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNhbGVuZGFyIDogZnVuY3Rpb24gKHRpbWUpIHtcbiAgICAgICAgICAgIC8vIFdlIHdhbnQgdG8gY29tcGFyZSB0aGUgc3RhcnQgb2YgdG9kYXksIHZzIHRoaXMuXG4gICAgICAgICAgICAvLyBHZXR0aW5nIHN0YXJ0LW9mLXRvZGF5IGRlcGVuZHMgb24gd2hldGhlciB3ZSdyZSB6b25lJ2Qgb3Igbm90LlxuICAgICAgICAgICAgdmFyIG5vdyA9IHRpbWUgfHwgbW9tZW50KCksXG4gICAgICAgICAgICAgICAgc29kID0gbWFrZUFzKG5vdywgdGhpcykuc3RhcnRPZignZGF5JyksXG4gICAgICAgICAgICAgICAgZGlmZiA9IHRoaXMuZGlmZihzb2QsICdkYXlzJywgdHJ1ZSksXG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gZGlmZiA8IC02ID8gJ3NhbWVFbHNlJyA6XG4gICAgICAgICAgICAgICAgICAgIGRpZmYgPCAtMSA/ICdsYXN0V2VlaycgOlxuICAgICAgICAgICAgICAgICAgICBkaWZmIDwgMCA/ICdsYXN0RGF5JyA6XG4gICAgICAgICAgICAgICAgICAgIGRpZmYgPCAxID8gJ3NhbWVEYXknIDpcbiAgICAgICAgICAgICAgICAgICAgZGlmZiA8IDIgPyAnbmV4dERheScgOlxuICAgICAgICAgICAgICAgICAgICBkaWZmIDwgNyA/ICduZXh0V2VlaycgOiAnc2FtZUVsc2UnO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0KHRoaXMubGFuZygpLmNhbGVuZGFyKGZvcm1hdCwgdGhpcykpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGlzTGVhcFllYXIgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNMZWFwWWVhcih0aGlzLnllYXIoKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaXNEU1QgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuem9uZSgpIDwgdGhpcy5jbG9uZSgpLm1vbnRoKDApLnpvbmUoKSB8fFxuICAgICAgICAgICAgICAgIHRoaXMuem9uZSgpIDwgdGhpcy5jbG9uZSgpLm1vbnRoKDUpLnpvbmUoKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF5IDogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICAgICAgICB2YXIgZGF5ID0gdGhpcy5faXNVVEMgPyB0aGlzLl9kLmdldFVUQ0RheSgpIDogdGhpcy5fZC5nZXREYXkoKTtcbiAgICAgICAgICAgIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSBwYXJzZVdlZWtkYXkoaW5wdXQsIHRoaXMubGFuZygpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hZGQoeyBkIDogaW5wdXQgLSBkYXkgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbW9udGggOiBtYWtlQWNjZXNzb3IoJ01vbnRoJywgdHJ1ZSksXG5cbiAgICAgICAgc3RhcnRPZjogZnVuY3Rpb24gKHVuaXRzKSB7XG4gICAgICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcbiAgICAgICAgICAgIC8vIHRoZSBmb2xsb3dpbmcgc3dpdGNoIGludGVudGlvbmFsbHkgb21pdHMgYnJlYWsga2V5d29yZHNcbiAgICAgICAgICAgIC8vIHRvIHV0aWxpemUgZmFsbGluZyB0aHJvdWdoIHRoZSBjYXNlcy5cbiAgICAgICAgICAgIHN3aXRjaCAodW5pdHMpIHtcbiAgICAgICAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAgICAgICAgIHRoaXMubW9udGgoMCk7XG4gICAgICAgICAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgICAgICAgY2FzZSAncXVhcnRlcic6XG4gICAgICAgICAgICBjYXNlICdtb250aCc6XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlKDEpO1xuICAgICAgICAgICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgICAgICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgICAgICAgY2FzZSAnaXNvV2Vlayc6XG4gICAgICAgICAgICBjYXNlICdkYXknOlxuICAgICAgICAgICAgICAgIHRoaXMuaG91cnMoMCk7XG4gICAgICAgICAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgICAgICAgY2FzZSAnaG91cic6XG4gICAgICAgICAgICAgICAgdGhpcy5taW51dGVzKDApO1xuICAgICAgICAgICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgICAgICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5zZWNvbmRzKDApO1xuICAgICAgICAgICAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgICAgICAgICAgdGhpcy5taWxsaXNlY29uZHMoMCk7XG4gICAgICAgICAgICAgICAgLyogZmFsbHMgdGhyb3VnaCAqL1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB3ZWVrcyBhcmUgYSBzcGVjaWFsIGNhc2VcbiAgICAgICAgICAgIGlmICh1bml0cyA9PT0gJ3dlZWsnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53ZWVrZGF5KDApO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh1bml0cyA9PT0gJ2lzb1dlZWsnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc29XZWVrZGF5KDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBxdWFydGVycyBhcmUgYWxzbyBzcGVjaWFsXG4gICAgICAgICAgICBpZiAodW5pdHMgPT09ICdxdWFydGVyJykge1xuICAgICAgICAgICAgICAgIHRoaXMubW9udGgoTWF0aC5mbG9vcih0aGlzLm1vbnRoKCkgLyAzKSAqIDMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICBlbmRPZjogZnVuY3Rpb24gKHVuaXRzKSB7XG4gICAgICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXJ0T2YodW5pdHMpLmFkZCgodW5pdHMgPT09ICdpc29XZWVrJyA/ICd3ZWVrJyA6IHVuaXRzKSwgMSkuc3VidHJhY3QoJ21zJywgMSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaXNBZnRlcjogZnVuY3Rpb24gKGlucHV0LCB1bml0cykge1xuICAgICAgICAgICAgdW5pdHMgPSB0eXBlb2YgdW5pdHMgIT09ICd1bmRlZmluZWQnID8gdW5pdHMgOiAnbWlsbGlzZWNvbmQnO1xuICAgICAgICAgICAgcmV0dXJuICt0aGlzLmNsb25lKCkuc3RhcnRPZih1bml0cykgPiArbW9tZW50KGlucHV0KS5zdGFydE9mKHVuaXRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICBpc0JlZm9yZTogZnVuY3Rpb24gKGlucHV0LCB1bml0cykge1xuICAgICAgICAgICAgdW5pdHMgPSB0eXBlb2YgdW5pdHMgIT09ICd1bmRlZmluZWQnID8gdW5pdHMgOiAnbWlsbGlzZWNvbmQnO1xuICAgICAgICAgICAgcmV0dXJuICt0aGlzLmNsb25lKCkuc3RhcnRPZih1bml0cykgPCArbW9tZW50KGlucHV0KS5zdGFydE9mKHVuaXRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICBpc1NhbWU6IGZ1bmN0aW9uIChpbnB1dCwgdW5pdHMpIHtcbiAgICAgICAgICAgIHVuaXRzID0gdW5pdHMgfHwgJ21zJztcbiAgICAgICAgICAgIHJldHVybiArdGhpcy5jbG9uZSgpLnN0YXJ0T2YodW5pdHMpID09PSArbWFrZUFzKGlucHV0LCB0aGlzKS5zdGFydE9mKHVuaXRzKTtcbiAgICAgICAgfSxcblxuICAgICAgICBtaW46IGRlcHJlY2F0ZShcbiAgICAgICAgICAgICAgICAgXCJtb21lbnQoKS5taW4gaXMgZGVwcmVjYXRlZCwgdXNlIG1vbWVudC5taW4gaW5zdGVhZC4gaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvaXNzdWVzLzE1NDhcIixcbiAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICBvdGhlciA9IG1vbWVudC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG90aGVyIDwgdGhpcyA/IHRoaXMgOiBvdGhlcjtcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgKSxcblxuICAgICAgICBtYXg6IGRlcHJlY2F0ZShcbiAgICAgICAgICAgICAgICBcIm1vbWVudCgpLm1heCBpcyBkZXByZWNhdGVkLCB1c2UgbW9tZW50Lm1heCBpbnN0ZWFkLiBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMTU0OFwiLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChvdGhlcikge1xuICAgICAgICAgICAgICAgICAgICBvdGhlciA9IG1vbWVudC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3RoZXIgPiB0aGlzID8gdGhpcyA6IG90aGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgKSxcblxuICAgICAgICAvLyBrZWVwVGltZSA9IHRydWUgbWVhbnMgb25seSBjaGFuZ2UgdGhlIHRpbWV6b25lLCB3aXRob3V0IGFmZmVjdGluZ1xuICAgICAgICAvLyB0aGUgbG9jYWwgaG91ci4gU28gNTozMToyNiArMDMwMCAtLVt6b25lKDIsIHRydWUpXS0tPiA1OjMxOjI2ICswMjAwXG4gICAgICAgIC8vIEl0IGlzIHBvc3NpYmxlIHRoYXQgNTozMToyNiBkb2Vzbid0IGV4aXN0IGludCB6b25lICswMjAwLCBzbyB3ZVxuICAgICAgICAvLyBhZGp1c3QgdGhlIHRpbWUgYXMgbmVlZGVkLCB0byBiZSB2YWxpZC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gS2VlcGluZyB0aGUgdGltZSBhY3R1YWxseSBhZGRzL3N1YnRyYWN0cyAob25lIGhvdXIpXG4gICAgICAgIC8vIGZyb20gdGhlIGFjdHVhbCByZXByZXNlbnRlZCB0aW1lLiBUaGF0IGlzIHdoeSB3ZSBjYWxsIHVwZGF0ZU9mZnNldFxuICAgICAgICAvLyBhIHNlY29uZCB0aW1lLiBJbiBjYXNlIGl0IHdhbnRzIHVzIHRvIGNoYW5nZSB0aGUgb2Zmc2V0IGFnYWluXG4gICAgICAgIC8vIF9jaGFuZ2VJblByb2dyZXNzID09IHRydWUgY2FzZSwgdGhlbiB3ZSBoYXZlIHRvIGFkanVzdCwgYmVjYXVzZVxuICAgICAgICAvLyB0aGVyZSBpcyBubyBzdWNoIHRpbWUgaW4gdGhlIGdpdmVuIHRpbWV6b25lLlxuICAgICAgICB6b25lIDogZnVuY3Rpb24gKGlucHV0LCBrZWVwVGltZSkge1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IHRoaXMuX29mZnNldCB8fCAwO1xuICAgICAgICAgICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGlucHV0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0ID0gdGltZXpvbmVNaW51dGVzRnJvbVN0cmluZyhpbnB1dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhpbnB1dCkgPCAxNikge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dCA9IGlucHV0ICogNjA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX29mZnNldCA9IGlucHV0O1xuICAgICAgICAgICAgICAgIHRoaXMuX2lzVVRDID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0ICE9PSBpbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWtlZXBUaW1lIHx8IHRoaXMuX2NoYW5nZUluUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZE9yU3VidHJhY3REdXJhdGlvbkZyb21Nb21lbnQodGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9tZW50LmR1cmF0aW9uKG9mZnNldCAtIGlucHV0LCAnbScpLCAxLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX2NoYW5nZUluUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoYW5nZUluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9tZW50LnVwZGF0ZU9mZnNldCh0aGlzLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoYW5nZUluUHJvZ3Jlc3MgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faXNVVEMgPyBvZmZzZXQgOiB0aGlzLl9kLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICB6b25lQWJiciA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc1VUQyA/IFwiVVRDXCIgOiBcIlwiO1xuICAgICAgICB9LFxuXG4gICAgICAgIHpvbmVOYW1lIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzVVRDID8gXCJDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZVwiIDogXCJcIjtcbiAgICAgICAgfSxcblxuICAgICAgICBwYXJzZVpvbmUgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fdHptKSB7XG4gICAgICAgICAgICAgICAgdGhpcy56b25lKHRoaXMuX3R6bSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0aGlzLl9pID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHRoaXMuem9uZSh0aGlzLl9pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhhc0FsaWduZWRIb3VyT2Zmc2V0IDogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICAgICAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSBtb21lbnQoaW5wdXQpLnpvbmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuICh0aGlzLnpvbmUoKSAtIGlucHV0KSAlIDYwID09PSAwO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRheXNJbk1vbnRoIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGRheXNJbk1vbnRoKHRoaXMueWVhcigpLCB0aGlzLm1vbnRoKCkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRheU9mWWVhciA6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICAgICAgdmFyIGRheU9mWWVhciA9IHJvdW5kKChtb21lbnQodGhpcykuc3RhcnRPZignZGF5JykgLSBtb21lbnQodGhpcykuc3RhcnRPZigneWVhcicpKSAvIDg2NGU1KSArIDE7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IGRheU9mWWVhciA6IHRoaXMuYWRkKFwiZFwiLCAoaW5wdXQgLSBkYXlPZlllYXIpKTtcbiAgICAgICAgfSxcblxuICAgICAgICBxdWFydGVyIDogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IE1hdGguY2VpbCgodGhpcy5tb250aCgpICsgMSkgLyAzKSA6IHRoaXMubW9udGgoKGlucHV0IC0gMSkgKiAzICsgdGhpcy5tb250aCgpICUgMyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgd2Vla1llYXIgOiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgICAgIHZhciB5ZWFyID0gd2Vla09mWWVhcih0aGlzLCB0aGlzLmxhbmcoKS5fd2Vlay5kb3csIHRoaXMubGFuZygpLl93ZWVrLmRveSkueWVhcjtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dCA9PSBudWxsID8geWVhciA6IHRoaXMuYWRkKFwieVwiLCAoaW5wdXQgLSB5ZWFyKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaXNvV2Vla1llYXIgOiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgICAgIHZhciB5ZWFyID0gd2Vla09mWWVhcih0aGlzLCAxLCA0KS55ZWFyO1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyB5ZWFyIDogdGhpcy5hZGQoXCJ5XCIsIChpbnB1dCAtIHllYXIpKTtcbiAgICAgICAgfSxcblxuICAgICAgICB3ZWVrIDogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICAgICAgICB2YXIgd2VlayA9IHRoaXMubGFuZygpLndlZWsodGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IHdlZWsgOiB0aGlzLmFkZChcImRcIiwgKGlucHV0IC0gd2VlaykgKiA3KTtcbiAgICAgICAgfSxcblxuICAgICAgICBpc29XZWVrIDogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICAgICAgICB2YXIgd2VlayA9IHdlZWtPZlllYXIodGhpcywgMSwgNCkud2VlaztcbiAgICAgICAgICAgIHJldHVybiBpbnB1dCA9PSBudWxsID8gd2VlayA6IHRoaXMuYWRkKFwiZFwiLCAoaW5wdXQgLSB3ZWVrKSAqIDcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHdlZWtkYXkgOiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICAgICAgICAgIHZhciB3ZWVrZGF5ID0gKHRoaXMuZGF5KCkgKyA3IC0gdGhpcy5sYW5nKCkuX3dlZWsuZG93KSAlIDc7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IHdlZWtkYXkgOiB0aGlzLmFkZChcImRcIiwgaW5wdXQgLSB3ZWVrZGF5KTtcbiAgICAgICAgfSxcblxuICAgICAgICBpc29XZWVrZGF5IDogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICAgICAgICAvLyBiZWhhdmVzIHRoZSBzYW1lIGFzIG1vbWVudCNkYXkgZXhjZXB0XG4gICAgICAgICAgICAvLyBhcyBhIGdldHRlciwgcmV0dXJucyA3IGluc3RlYWQgb2YgMCAoMS03IHJhbmdlIGluc3RlYWQgb2YgMC02KVxuICAgICAgICAgICAgLy8gYXMgYSBzZXR0ZXIsIHN1bmRheSBzaG91bGQgYmVsb25nIHRvIHRoZSBwcmV2aW91cyB3ZWVrLlxuICAgICAgICAgICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyB0aGlzLmRheSgpIHx8IDcgOiB0aGlzLmRheSh0aGlzLmRheSgpICUgNyA/IGlucHV0IDogaW5wdXQgLSA3KTtcbiAgICAgICAgfSxcblxuICAgICAgICBpc29XZWVrc0luWWVhciA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB3ZWVrc0luWWVhcih0aGlzLnllYXIoKSwgMSwgNCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgd2Vla3NJblllYXIgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgd2Vla0luZm8gPSB0aGlzLl9sYW5nLl93ZWVrO1xuICAgICAgICAgICAgcmV0dXJuIHdlZWtzSW5ZZWFyKHRoaXMueWVhcigpLCB3ZWVrSW5mby5kb3csIHdlZWtJbmZvLmRveSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IDogZnVuY3Rpb24gKHVuaXRzKSB7XG4gICAgICAgICAgICB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKHVuaXRzKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW3VuaXRzXSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldCA6IGZ1bmN0aW9uICh1bml0cywgdmFsdWUpIHtcbiAgICAgICAgICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW3VuaXRzXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRoaXNbdW5pdHNdKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIElmIHBhc3NlZCBhIGxhbmd1YWdlIGtleSwgaXQgd2lsbCBzZXQgdGhlIGxhbmd1YWdlIGZvciB0aGlzXG4gICAgICAgIC8vIGluc3RhbmNlLiAgT3RoZXJ3aXNlLCBpdCB3aWxsIHJldHVybiB0aGUgbGFuZ3VhZ2UgY29uZmlndXJhdGlvblxuICAgICAgICAvLyB2YXJpYWJsZXMgZm9yIHRoaXMgaW5zdGFuY2UuXG4gICAgICAgIGxhbmcgOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbGFuZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbGFuZyA9IGdldExhbmdEZWZpbml0aW9uKGtleSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHJhd01vbnRoU2V0dGVyKG1vbSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIGRheU9mTW9udGg7XG5cbiAgICAgICAgLy8gVE9ETzogTW92ZSB0aGlzIG91dCBvZiBoZXJlIVxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFsdWUgPSBtb20ubGFuZygpLm1vbnRoc1BhcnNlKHZhbHVlKTtcbiAgICAgICAgICAgIC8vIFRPRE86IEFub3RoZXIgc2lsZW50IGZhaWx1cmU/XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBtb207XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkYXlPZk1vbnRoID0gTWF0aC5taW4obW9tLmRhdGUoKSxcbiAgICAgICAgICAgICAgICBkYXlzSW5Nb250aChtb20ueWVhcigpLCB2YWx1ZSkpO1xuICAgICAgICBtb20uX2RbJ3NldCcgKyAobW9tLl9pc1VUQyA/ICdVVEMnIDogJycpICsgJ01vbnRoJ10odmFsdWUsIGRheU9mTW9udGgpO1xuICAgICAgICByZXR1cm4gbW9tO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJhd0dldHRlcihtb20sIHVuaXQpIHtcbiAgICAgICAgcmV0dXJuIG1vbS5fZFsnZ2V0JyArIChtb20uX2lzVVRDID8gJ1VUQycgOiAnJykgKyB1bml0XSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJhd1NldHRlcihtb20sIHVuaXQsIHZhbHVlKSB7XG4gICAgICAgIGlmICh1bml0ID09PSAnTW9udGgnKSB7XG4gICAgICAgICAgICByZXR1cm4gcmF3TW9udGhTZXR0ZXIobW9tLCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbW9tLl9kWydzZXQnICsgKG1vbS5faXNVVEMgPyAnVVRDJyA6ICcnKSArIHVuaXRdKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VBY2Nlc3Nvcih1bml0LCBrZWVwVGltZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJhd1NldHRlcih0aGlzLCB1bml0LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgbW9tZW50LnVwZGF0ZU9mZnNldCh0aGlzLCBrZWVwVGltZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiByYXdHZXR0ZXIodGhpcywgdW5pdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgbW9tZW50LmZuLm1pbGxpc2Vjb25kID0gbW9tZW50LmZuLm1pbGxpc2Vjb25kcyA9IG1ha2VBY2Nlc3NvcignTWlsbGlzZWNvbmRzJywgZmFsc2UpO1xuICAgIG1vbWVudC5mbi5zZWNvbmQgPSBtb21lbnQuZm4uc2Vjb25kcyA9IG1ha2VBY2Nlc3NvcignU2Vjb25kcycsIGZhbHNlKTtcbiAgICBtb21lbnQuZm4ubWludXRlID0gbW9tZW50LmZuLm1pbnV0ZXMgPSBtYWtlQWNjZXNzb3IoJ01pbnV0ZXMnLCBmYWxzZSk7XG4gICAgLy8gU2V0dGluZyB0aGUgaG91ciBzaG91bGQga2VlcCB0aGUgdGltZSwgYmVjYXVzZSB0aGUgdXNlciBleHBsaWNpdGx5XG4gICAgLy8gc3BlY2lmaWVkIHdoaWNoIGhvdXIgaGUgd2FudHMuIFNvIHRyeWluZyB0byBtYWludGFpbiB0aGUgc2FtZSBob3VyIChpblxuICAgIC8vIGEgbmV3IHRpbWV6b25lKSBtYWtlcyBzZW5zZS4gQWRkaW5nL3N1YnRyYWN0aW5nIGhvdXJzIGRvZXMgbm90IGZvbGxvd1xuICAgIC8vIHRoaXMgcnVsZS5cbiAgICBtb21lbnQuZm4uaG91ciA9IG1vbWVudC5mbi5ob3VycyA9IG1ha2VBY2Nlc3NvcignSG91cnMnLCB0cnVlKTtcbiAgICAvLyBtb21lbnQuZm4ubW9udGggaXMgZGVmaW5lZCBzZXBhcmF0ZWx5XG4gICAgbW9tZW50LmZuLmRhdGUgPSBtYWtlQWNjZXNzb3IoJ0RhdGUnLCB0cnVlKTtcbiAgICBtb21lbnQuZm4uZGF0ZXMgPSBkZXByZWNhdGUoXCJkYXRlcyBhY2Nlc3NvciBpcyBkZXByZWNhdGVkLiBVc2UgZGF0ZSBpbnN0ZWFkLlwiLCBtYWtlQWNjZXNzb3IoJ0RhdGUnLCB0cnVlKSk7XG4gICAgbW9tZW50LmZuLnllYXIgPSBtYWtlQWNjZXNzb3IoJ0Z1bGxZZWFyJywgdHJ1ZSk7XG4gICAgbW9tZW50LmZuLnllYXJzID0gZGVwcmVjYXRlKFwieWVhcnMgYWNjZXNzb3IgaXMgZGVwcmVjYXRlZC4gVXNlIHllYXIgaW5zdGVhZC5cIiwgbWFrZUFjY2Vzc29yKCdGdWxsWWVhcicsIHRydWUpKTtcblxuICAgIC8vIGFkZCBwbHVyYWwgbWV0aG9kc1xuICAgIG1vbWVudC5mbi5kYXlzID0gbW9tZW50LmZuLmRheTtcbiAgICBtb21lbnQuZm4ubW9udGhzID0gbW9tZW50LmZuLm1vbnRoO1xuICAgIG1vbWVudC5mbi53ZWVrcyA9IG1vbWVudC5mbi53ZWVrO1xuICAgIG1vbWVudC5mbi5pc29XZWVrcyA9IG1vbWVudC5mbi5pc29XZWVrO1xuICAgIG1vbWVudC5mbi5xdWFydGVycyA9IG1vbWVudC5mbi5xdWFydGVyO1xuXG4gICAgLy8gYWRkIGFsaWFzZWQgZm9ybWF0IG1ldGhvZHNcbiAgICBtb21lbnQuZm4udG9KU09OID0gbW9tZW50LmZuLnRvSVNPU3RyaW5nO1xuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICBEdXJhdGlvbiBQcm90b3R5cGVcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblxuICAgIGV4dGVuZChtb21lbnQuZHVyYXRpb24uZm4gPSBEdXJhdGlvbi5wcm90b3R5cGUsIHtcblxuICAgICAgICBfYnViYmxlIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1pbGxpc2Vjb25kcyA9IHRoaXMuX21pbGxpc2Vjb25kcyxcbiAgICAgICAgICAgICAgICBkYXlzID0gdGhpcy5fZGF5cyxcbiAgICAgICAgICAgICAgICBtb250aHMgPSB0aGlzLl9tb250aHMsXG4gICAgICAgICAgICAgICAgZGF0YSA9IHRoaXMuX2RhdGEsXG4gICAgICAgICAgICAgICAgc2Vjb25kcywgbWludXRlcywgaG91cnMsIHllYXJzO1xuXG4gICAgICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGNvZGUgYnViYmxlcyB1cCB2YWx1ZXMsIHNlZSB0aGUgdGVzdHMgZm9yXG4gICAgICAgICAgICAvLyBleGFtcGxlcyBvZiB3aGF0IHRoYXQgbWVhbnMuXG4gICAgICAgICAgICBkYXRhLm1pbGxpc2Vjb25kcyA9IG1pbGxpc2Vjb25kcyAlIDEwMDA7XG5cbiAgICAgICAgICAgIHNlY29uZHMgPSBhYnNSb3VuZChtaWxsaXNlY29uZHMgLyAxMDAwKTtcbiAgICAgICAgICAgIGRhdGEuc2Vjb25kcyA9IHNlY29uZHMgJSA2MDtcblxuICAgICAgICAgICAgbWludXRlcyA9IGFic1JvdW5kKHNlY29uZHMgLyA2MCk7XG4gICAgICAgICAgICBkYXRhLm1pbnV0ZXMgPSBtaW51dGVzICUgNjA7XG5cbiAgICAgICAgICAgIGhvdXJzID0gYWJzUm91bmQobWludXRlcyAvIDYwKTtcbiAgICAgICAgICAgIGRhdGEuaG91cnMgPSBob3VycyAlIDI0O1xuXG4gICAgICAgICAgICBkYXlzICs9IGFic1JvdW5kKGhvdXJzIC8gMjQpO1xuICAgICAgICAgICAgZGF0YS5kYXlzID0gZGF5cyAlIDMwO1xuXG4gICAgICAgICAgICBtb250aHMgKz0gYWJzUm91bmQoZGF5cyAvIDMwKTtcbiAgICAgICAgICAgIGRhdGEubW9udGhzID0gbW9udGhzICUgMTI7XG5cbiAgICAgICAgICAgIHllYXJzID0gYWJzUm91bmQobW9udGhzIC8gMTIpO1xuICAgICAgICAgICAgZGF0YS55ZWFycyA9IHllYXJzO1xuICAgICAgICB9LFxuXG4gICAgICAgIHdlZWtzIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGFic1JvdW5kKHRoaXMuZGF5cygpIC8gNyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdmFsdWVPZiA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9taWxsaXNlY29uZHMgK1xuICAgICAgICAgICAgICB0aGlzLl9kYXlzICogODY0ZTUgK1xuICAgICAgICAgICAgICAodGhpcy5fbW9udGhzICUgMTIpICogMjU5MmU2ICtcbiAgICAgICAgICAgICAgdG9JbnQodGhpcy5fbW9udGhzIC8gMTIpICogMzE1MzZlNjtcbiAgICAgICAgfSxcblxuICAgICAgICBodW1hbml6ZSA6IGZ1bmN0aW9uICh3aXRoU3VmZml4KSB7XG4gICAgICAgICAgICB2YXIgZGlmZmVyZW5jZSA9ICt0aGlzLFxuICAgICAgICAgICAgICAgIG91dHB1dCA9IHJlbGF0aXZlVGltZShkaWZmZXJlbmNlLCAhd2l0aFN1ZmZpeCwgdGhpcy5sYW5nKCkpO1xuXG4gICAgICAgICAgICBpZiAod2l0aFN1ZmZpeCkge1xuICAgICAgICAgICAgICAgIG91dHB1dCA9IHRoaXMubGFuZygpLnBhc3RGdXR1cmUoZGlmZmVyZW5jZSwgb3V0cHV0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGFuZygpLnBvc3Rmb3JtYXQob3V0cHV0KTtcbiAgICAgICAgfSxcblxuICAgICAgICBhZGQgOiBmdW5jdGlvbiAoaW5wdXQsIHZhbCkge1xuICAgICAgICAgICAgLy8gc3VwcG9ydHMgb25seSAyLjAtc3R5bGUgYWRkKDEsICdzJykgb3IgYWRkKG1vbWVudClcbiAgICAgICAgICAgIHZhciBkdXIgPSBtb21lbnQuZHVyYXRpb24oaW5wdXQsIHZhbCk7XG5cbiAgICAgICAgICAgIHRoaXMuX21pbGxpc2Vjb25kcyArPSBkdXIuX21pbGxpc2Vjb25kcztcbiAgICAgICAgICAgIHRoaXMuX2RheXMgKz0gZHVyLl9kYXlzO1xuICAgICAgICAgICAgdGhpcy5fbW9udGhzICs9IGR1ci5fbW9udGhzO1xuXG4gICAgICAgICAgICB0aGlzLl9idWJibGUoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc3VidHJhY3QgOiBmdW5jdGlvbiAoaW5wdXQsIHZhbCkge1xuICAgICAgICAgICAgdmFyIGR1ciA9IG1vbWVudC5kdXJhdGlvbihpbnB1dCwgdmFsKTtcblxuICAgICAgICAgICAgdGhpcy5fbWlsbGlzZWNvbmRzIC09IGR1ci5fbWlsbGlzZWNvbmRzO1xuICAgICAgICAgICAgdGhpcy5fZGF5cyAtPSBkdXIuX2RheXM7XG4gICAgICAgICAgICB0aGlzLl9tb250aHMgLT0gZHVyLl9tb250aHM7XG5cbiAgICAgICAgICAgIHRoaXMuX2J1YmJsZSgpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgOiBmdW5jdGlvbiAodW5pdHMpIHtcbiAgICAgICAgICAgIHVuaXRzID0gbm9ybWFsaXplVW5pdHModW5pdHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbdW5pdHMudG9Mb3dlckNhc2UoKSArICdzJ10oKTtcbiAgICAgICAgfSxcblxuICAgICAgICBhcyA6IGZ1bmN0aW9uICh1bml0cykge1xuICAgICAgICAgICAgdW5pdHMgPSBub3JtYWxpemVVbml0cyh1bml0cyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1snYXMnICsgdW5pdHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB1bml0cy5zbGljZSgxKSArICdzJ10oKTtcbiAgICAgICAgfSxcblxuICAgICAgICBsYW5nIDogbW9tZW50LmZuLmxhbmcsXG5cbiAgICAgICAgdG9Jc29TdHJpbmcgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBpbnNwaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vZG9yZGlsbGUvbW9tZW50LWlzb2R1cmF0aW9uL2Jsb2IvbWFzdGVyL21vbWVudC5pc29kdXJhdGlvbi5qc1xuICAgICAgICAgICAgdmFyIHllYXJzID0gTWF0aC5hYnModGhpcy55ZWFycygpKSxcbiAgICAgICAgICAgICAgICBtb250aHMgPSBNYXRoLmFicyh0aGlzLm1vbnRocygpKSxcbiAgICAgICAgICAgICAgICBkYXlzID0gTWF0aC5hYnModGhpcy5kYXlzKCkpLFxuICAgICAgICAgICAgICAgIGhvdXJzID0gTWF0aC5hYnModGhpcy5ob3VycygpKSxcbiAgICAgICAgICAgICAgICBtaW51dGVzID0gTWF0aC5hYnModGhpcy5taW51dGVzKCkpLFxuICAgICAgICAgICAgICAgIHNlY29uZHMgPSBNYXRoLmFicyh0aGlzLnNlY29uZHMoKSArIHRoaXMubWlsbGlzZWNvbmRzKCkgLyAxMDAwKTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmFzU2Vjb25kcygpKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyB0aGUgc2FtZSBhcyBDIydzIChOb2RhKSBhbmQgcHl0aG9uIChpc29kYXRlKS4uLlxuICAgICAgICAgICAgICAgIC8vIGJ1dCBub3Qgb3RoZXIgSlMgKGdvb2cuZGF0ZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1AwRCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAodGhpcy5hc1NlY29uZHMoKSA8IDAgPyAnLScgOiAnJykgK1xuICAgICAgICAgICAgICAgICdQJyArXG4gICAgICAgICAgICAgICAgKHllYXJzID8geWVhcnMgKyAnWScgOiAnJykgK1xuICAgICAgICAgICAgICAgIChtb250aHMgPyBtb250aHMgKyAnTScgOiAnJykgK1xuICAgICAgICAgICAgICAgIChkYXlzID8gZGF5cyArICdEJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgKChob3VycyB8fCBtaW51dGVzIHx8IHNlY29uZHMpID8gJ1QnIDogJycpICtcbiAgICAgICAgICAgICAgICAoaG91cnMgPyBob3VycyArICdIJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgKG1pbnV0ZXMgPyBtaW51dGVzICsgJ00nIDogJycpICtcbiAgICAgICAgICAgICAgICAoc2Vjb25kcyA/IHNlY29uZHMgKyAnUycgOiAnJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIG1ha2VEdXJhdGlvbkdldHRlcihuYW1lKSB7XG4gICAgICAgIG1vbWVudC5kdXJhdGlvbi5mbltuYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kYXRhW25hbWVdO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VEdXJhdGlvbkFzR2V0dGVyKG5hbWUsIGZhY3Rvcikge1xuICAgICAgICBtb21lbnQuZHVyYXRpb24uZm5bJ2FzJyArIG5hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICt0aGlzIC8gZmFjdG9yO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZvciAoaSBpbiB1bml0TWlsbGlzZWNvbmRGYWN0b3JzKSB7XG4gICAgICAgIGlmICh1bml0TWlsbGlzZWNvbmRGYWN0b3JzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICBtYWtlRHVyYXRpb25Bc0dldHRlcihpLCB1bml0TWlsbGlzZWNvbmRGYWN0b3JzW2ldKTtcbiAgICAgICAgICAgIG1ha2VEdXJhdGlvbkdldHRlcihpLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWFrZUR1cmF0aW9uQXNHZXR0ZXIoJ1dlZWtzJywgNjA0OGU1KTtcbiAgICBtb21lbnQuZHVyYXRpb24uZm4uYXNNb250aHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoK3RoaXMgLSB0aGlzLnllYXJzKCkgKiAzMTUzNmU2KSAvIDI1OTJlNiArIHRoaXMueWVhcnMoKSAqIDEyO1xuICAgIH07XG5cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgRGVmYXVsdCBMYW5nXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cbiAgICAvLyBTZXQgZGVmYXVsdCBsYW5ndWFnZSwgb3RoZXIgbGFuZ3VhZ2VzIHdpbGwgaW5oZXJpdCBmcm9tIEVuZ2xpc2guXG4gICAgbW9tZW50LmxhbmcoJ2VuJywge1xuICAgICAgICBvcmRpbmFsIDogZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICAgICAgdmFyIGIgPSBudW1iZXIgJSAxMCxcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSAodG9JbnQobnVtYmVyICUgMTAwIC8gMTApID09PSAxKSA/ICd0aCcgOlxuICAgICAgICAgICAgICAgIChiID09PSAxKSA/ICdzdCcgOlxuICAgICAgICAgICAgICAgIChiID09PSAyKSA/ICduZCcgOlxuICAgICAgICAgICAgICAgIChiID09PSAzKSA/ICdyZCcgOiAndGgnO1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlciArIG91dHB1dDtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyogRU1CRURfTEFOR1VBR0VTICovXG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgIEV4cG9zaW5nIE1vbWVudFxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgIGZ1bmN0aW9uIG1ha2VHbG9iYWwoc2hvdWxkRGVwcmVjYXRlKSB7XG4gICAgICAgIC8qZ2xvYmFsIGVuZGVyOmZhbHNlICovXG4gICAgICAgIGlmICh0eXBlb2YgZW5kZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgb2xkR2xvYmFsTW9tZW50ID0gZ2xvYmFsU2NvcGUubW9tZW50O1xuICAgICAgICBpZiAoc2hvdWxkRGVwcmVjYXRlKSB7XG4gICAgICAgICAgICBnbG9iYWxTY29wZS5tb21lbnQgPSBkZXByZWNhdGUoXG4gICAgICAgICAgICAgICAgICAgIFwiQWNjZXNzaW5nIE1vbWVudCB0aHJvdWdoIHRoZSBnbG9iYWwgc2NvcGUgaXMgXCIgK1xuICAgICAgICAgICAgICAgICAgICBcImRlcHJlY2F0ZWQsIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gYW4gdXBjb21pbmcgXCIgK1xuICAgICAgICAgICAgICAgICAgICBcInJlbGVhc2UuXCIsXG4gICAgICAgICAgICAgICAgICAgIG1vbWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWxTY29wZS5tb21lbnQgPSBtb21lbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDb21tb25KUyBtb2R1bGUgaXMgZGVmaW5lZFxuICAgIGlmIChoYXNNb2R1bGUpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBtb21lbnQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoXCJtb21lbnRcIiwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIG1vZHVsZSkge1xuICAgICAgICAgICAgaWYgKG1vZHVsZS5jb25maWcgJiYgbW9kdWxlLmNvbmZpZygpICYmIG1vZHVsZS5jb25maWcoKS5ub0dsb2JhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIC8vIHJlbGVhc2UgdGhlIGdsb2JhbCB2YXJpYWJsZVxuICAgICAgICAgICAgICAgIGdsb2JhbFNjb3BlLm1vbWVudCA9IG9sZEdsb2JhbE1vbWVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG1vbWVudDtcbiAgICAgICAgfSk7XG4gICAgICAgIG1ha2VHbG9iYWwodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWFrZUdsb2JhbCgpO1xuICAgIH1cbn0pLmNhbGwodGhpcyk7XG5cbn0pLmNhbGwodGhpcyx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pIiwidmFyIGFuZ3VsYXIgPSByZXF1aXJlKCdhbmd1bGFyJylcbiAgLCBuZ0FuaW1hdGUgPSByZXF1aXJlKCdhbmd1bGFyLWFuaW1hdGUnKVxuICAsIG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpXG4gICwgY2xvY2sgPSByZXF1aXJlKCcuL2RpcmVjdGl2ZXMvY2xvY2suanMnKVxuICAsIHdlYXRoZXIgPSByZXF1aXJlKCcuL2RpcmVjdGl2ZXMvd2VhdGhlci5qcycpXG4gICwgc2lkZWJhciA9IHJlcXVpcmUoJy4vZGlyZWN0aXZlcy9zaWRlYmFyLmpzJylcbiAgLCBzdG9ja3MgPSByZXF1aXJlKCcuL2RpcmVjdGl2ZXMvc3RvY2tzLmpzJylcbiAgLCBBcHBDdHJsID0gcmVxdWlyZSgnLi9jb250cm9sbGVycy9BcHBDb250cm9sbGVyLmpzJylcbiAgLCB3ZWF0aGVyU2VydmljZSA9IHJlcXVpcmUoJy4vc2VydmljZXMvd2VhdGhlclNlcnZpY2UuanMnKVxuICAsIHN0b2NrU2VydmljZSA9IHJlcXVpcmUoJy4vc2VydmljZXMvc3RvY2tTZXJ2aWNlLmpzJylcbiAgLCBzdG9ja0Zvcm0gPSByZXF1aXJlKCcuL2RpcmVjdGl2ZXMvc3RvY2tGb3JtLmpzJylcbiAgLCBzdG9yYWdlU2VydmljZSA9IHJlcXVpcmUoJy4vc2VydmljZXMvc3RvcmFnZVNlcnZpY2UuanMnKVxuXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsXG4gIFtcbiAgICAnbmdBbmltYXRlJyxcbiAgICBjbG9jay5uYW1lLFxuICAgIHdlYXRoZXIubmFtZSxcbiAgICBzaWRlYmFyLm5hbWUsXG4gICAgc3RvY2tzLm5hbWUsXG4gICAgQXBwQ3RybC5uYW1lLFxuICAgIHdlYXRoZXJTZXJ2aWNlLm5hbWUsXG4gICAgc3RvY2tTZXJ2aWNlLm5hbWUsXG4gICAgc3RvY2tGb3JtLm5hbWUsXG4gICAgc3RvcmFnZVNlcnZpY2UubmFtZVxuICBdXG4pXG4ucnVuKGZ1bmN0aW9uICgkcm9vdFNjb3BlKSB7XG4gICAgJHJvb3RTY29wZS5tb21lbnQgPSBtb21lbnQ7XG4gfSk7IiwidmFyIGFuZ3VsYXIgPSByZXF1aXJlKCdhbmd1bGFyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5BcHBDdHJsJywgW10pXG4gIC5jb250cm9sbGVyKCdBcHBDdHJsJyxbJ3N0b2NrU2VydmljZScsICd3ZWF0aGVyU2VydmljZScsICdzdG9yYWdlU2VydmljZScsIGZ1bmN0aW9uKHN0b2NrU2VydmljZSwgd2VhdGhlclNlcnZpY2UsIHN0b3JhZ2VTZXJ2aWNlKSB7XG4gIFxuICAgIHZhciB0aGF0PXRoaXM7XG5cbiAgICBzdG9yYWdlU2VydmljZS5nZXRJdGVtKCdsb2NhdGlvbicpO1xuXG4gICAgdGhpcy5sb2NhdGlvbiA9IHN0b3JhZ2VTZXJ2aWNlLmdldEl0ZW0oJ2xvY2F0aW9uJykgfHwgJ3NhbnRhIGNsYXJhLGNhJztcbiAgICB0aGlzLnVuaXRzID0gJ2ltcGVyaWFsJztcbiAgICB0aGlzLmNvb3JkID0ge2xvbjotMTIxLjk2LCBsYXQ6MzcuMzZ9XG4gICAgdGhpcy5zdG9ja3MgPSBbXTtcblxuICAgIHRoaXMudGlja2VyTGlzdCA9IHN0b3JhZ2VTZXJ2aWNlLmdldEl0ZW0oJ3RpY2tlckxpc3QnKSB8fCBbXTtcblxuICAgIGlmICh0aGlzLnRpY2tlckxpc3QubGVuZ3RoKSB7XG4gICAgICB0aGlzLnN0b2NrcyA9IHN0b3JhZ2VTZXJ2aWNlLmdldEl0ZW0oJ3N0b2NrcycpIHx8IHN0b2NrU2VydmljZS5nZXRTdG9ja3ModGhpcy50aWNrZXJMaXN0KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXt0aGF0LnN0b2Nrcz1yZXNwb25zZS5kYXRhO3NhdmVTdG9ja3MoKTt9KTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gc2F2ZVN0b2NrcygpIHtcbiAgICAgIHN0b3JhZ2VTZXJ2aWNlLnNldEl0ZW0oJ3N0b2NrcycsIHRoYXQuc3RvY2tzLCAxMDAwMDAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzYXZlVGlja2VycygpIHtcbiAgICAgIHN0b3JhZ2VTZXJ2aWNlLnNldEl0ZW0oJ3RpY2tlckxpc3QnLCB0aGF0LnRpY2tlckxpc3QpO1xuICAgIH1cblxuICAgIHRoaXMuYWRkU3RvY2sgPSBmdW5jdGlvbihzdG9jaykge1xuICAgICAgdGhhdC5zdG9ja3MucHVzaChzdG9jayk7XG4gICAgICBzYXZlU3RvY2tzKCk7XG4gICAgICB0aGF0LnRpY2tlckxpc3QucHVzaChzdG9jay5lKyc6JytzdG9jay50KTtcbiAgICAgIHNhdmVUaWNrZXJzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmVTdG9ja0J5SW5kZXggPSBmdW5jdGlvbihpbmRleCkge1xuICAgICAgdGhhdC5zdG9ja3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHRoYXQudGlja2VyTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgc2F2ZVN0b2NrcygpO1xuICAgICAgc2F2ZXRpY2tlcnMoKTtcblxuICAgIH1cblxuICAgIHRoaXMuc2V0V2VhdGhlckxvY2F0aW9uID0gZnVuY3Rpb24obG9jYXRpb24pIHtcblxuICAgIH1cblxuICB9XSkiLCJ2YXIgYW5ndWxhciA9IHJlcXVpcmUoJ2FuZ3VsYXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLmNsb2NrJywgW10pXG4gIC5kaXJlY3RpdmUoJ2Nsb2NrJywgWyckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnLCAnZGF0ZUZpbHRlcicsICckYW5pbWF0ZScsIGZ1bmN0aW9uICgkaW50ZXJ2YWwsICR0aW1lb3V0LCBkYXRlRmlsdGVyLCAkYW5pbWF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0VDJyxcbiAgICAgIGxpbms6IGxpbmssXG4gICAgICBzY29wZToge30sXG4gICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9jbG9jay5odG1sJ1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG5cbiAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoJ25nLWhpZGUnKTtcbiAgICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbWUoKSB7XG4gICAgICAgICRhbmltYXRlLnJlbW92ZUNsYXNzKGVsZW1lbnQsICduZy1oaWRlJyk7XG4gICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBzY29wZS5kYXRlID0gZGF0ZUZpbHRlcihub3csICdFRUVFLCBNTU1NIGQnKTtcbiAgICAgICAgc2NvcGUueWVhciA9IG5vdy5nZXRGdWxsWWVhcigpO1xuICAgICAgICBzY29wZS50aW1lID0gZGF0ZUZpbHRlcihub3csICdoOm1tJyk7XG4gICAgICAgIHNjb3BlLmFtcG0gPSBkYXRlRmlsdGVyKG5vdywgJ2EnKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gc3RhcnRDbG9jaygpIHtcbiAgICAgICAgdXBkYXRlVGltZSgpO1xuICAgICAgICAkaW50ZXJ2YWwodXBkYXRlVGltZSwgNjAwMDApO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGVUaW1lKCk7XG4gICAgICAkdGltZW91dChzdGFydENsb2NrLDYwMTAwLURhdGUubm93KCklNjAwMDApO1xuXG4gICAgfVxuICB9XSkiLCJ2YXIgYW5ndWxhciA9IHJlcXVpcmUoJ2FuZ3VsYXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLnNpZGViYXInLCBbXSlcbiAgXG4gIC5kaXJlY3RpdmUoJ3NpZGViYXInLCBbJyRhbmltYXRlJywgJ3N0b2NrU2VydmljZScsIGZ1bmN0aW9uICgkYW5pbWF0ZSwgc3RvY2tTZXJ2aWNlKSB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdFQycsXG4gICAgICBsaW5rOiBsaW5rLFxuICAgICAgdGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZXMvc2lkZWJhci5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICAgICAgIHZhciBwYW5lcyA9ICRzY29wZS5wYW5lcyA9IFtdO1xuXG4gICAgICAgICAgJHNjb3BlLnNlbGVjdCA9IGZ1bmN0aW9uKHBhbmUpIHtcbiAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChwYW5lcywgZnVuY3Rpb24ocGFuZSkge1xuICAgICAgICAgICAgICBwYW5lLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHBhbmUuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICB0aGlzLmFkZFBhbmUgPSBmdW5jdGlvbihwYW5lKSB7XG4gICAgICAgICAgICBpZiAocGFuZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICRzY29wZS5zZWxlY3QocGFuZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYW5lcy5wdXNoKHBhbmUpO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuXG4gICAgICBzY29wZS50b2dnbGVPcGVuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGF0dHJzLiRzZXQoJ29wZW4nLCAhYXR0cnMub3Blbik7XG4gICAgICB9XG5cbiAgICAgIHNjb3BlLnJlbW92ZVN0b2NrID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgc2NvcGUuYXBwLnJlbW92ZVN0b2NrQnlJbmRleChpbmRleCk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgfV0pXG5cbiAgLmRpcmVjdGl2ZSgnc2lkZWJhclRhYicsIGZ1bmN0aW9uKCkge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlcXVpcmU6ICdec2lkZWJhcicsXG4gICAgICByZXN0cmljdDogJ0MnLFxuICAgICAgc2NvcGU6IHtcbiAgICAgICAgdGl0bGU6J0AnXG4gICAgICB9LFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCB0YWJzQ3RybCkge1xuICAgICAgICBlbGVtZW50LmFkZENsYXNzKCduZy1oaWRlJyk7XG4gICAgICAgIHRhYnNDdHJsLmFkZFBhbmUoc2NvcGUpO1xuICAgICAgICBzY29wZS4kd2F0Y2goJ3NlbGVjdGVkJywgZnVuY3Rpb24oc2VsZWN0ZWRWYWwpIHtcbiAgICAgICAgICBzZWxlY3RlZFZhbD9cbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ25nLWhpZGUnKSA6IGVsZW1lbnQuYWRkQ2xhc3MoJ25nLWhpZGUnKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgfSkiLCJ2YXIgYW5ndWxhciA9IHJlcXVpcmUoJ2FuZ3VsYXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLnN0b2NrRm9ybScsIFtdKVxuICAuZGlyZWN0aXZlKCdzdG9ja0Zvcm0nLCBbJyRhbmltYXRlJywnc3RvY2tTZXJ2aWNlJywgZnVuY3Rpb24gKCRhbmltYXRlLCBzdG9ja1NlcnZpY2UpIHtcblxuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0VDJyxcbiAgICAgIGxpbms6IGxpbmssXG4gICAgICByZXF1aXJlOiAnXj9mb3JtJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3N0b2NrRm9ybS5odG1sJ1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdHJsKSB7XG5cbiAgICAgIHNjb3BlLmFjdGlvbk1lc3NhZ2UgPSAnR08nO1xuICAgICAgc2NvcGUubG9hZGluZyA9IGZhbHNlO1xuXG4gICAgICBjdHJsLiRzZXRWYWxpZGl0eSgnc3RvY2snLCBmYWxzZSk7XG4gICAgICBjdHJsLiRzZXRWYWxpZGl0eSgndGlja2VySW5wdXQnLCBmYWxzZSk7XG5cblxuICAgICAgc2NvcGUuY2hlY2tTdG9jayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFzY29wZS5zdG9ja1RvQWRkKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coc2NvcGUudGlja2VySW5wdXQpXG4gICAgICAgICAgc2NvcGUubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgc3RvY2tTZXJ2aWNlLmNoZWNrU3RvY2soc2NvcGUudGlja2VySW5wdXQpLnRoZW4oaGFuZGxlU3RvY2spO1xuICAgICAgICAgIHNjb3BlLmFjdGlvbk1lc3NhZ2UgPSAnQUREJztcbiAgICAgICAgICBjdHJsLiRzZXRWYWxpZGl0eSgndGlja2VySW5wdXQnLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzY29wZS5hcHAuYWRkU3RvY2soc2NvcGUuc3RvY2tUb0FkZCk7XG4gICAgICAgICAgZGVsZXRlIHNjb3BlLnRpY2tlcklucHV0O1xuICAgICAgICAgIGNsZWFyU3RhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIHNjb3BlLmNoYW5nZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFyU3RhdGUoKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gY2xlYXJTdGF0ZSgpIHtcbiAgICAgICAgZGVsZXRlIHNjb3BlLnN0b2NrVG9BZGQ7XG4gICAgICAgIHNjb3BlLmFjdGlvbk1lc3NhZ2UgPSAnR08nO1xuICAgICAgICBjdHJsLiRzZXRWYWxpZGl0eSgnc3RvY2snLCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGhhbmRsZVN0b2NrKHJlc3BvbnNlKSB7XG4gICAgICAgIHN0b2NrID0gcmVzcG9uc2UuZGF0YVswXTtcbiAgICAgICAgc2NvcGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBjb25zb2xlLmxvZyhzdG9jayk7XG4gICAgICAgIHNjb3BlLnN0b2NrVG9BZGQgPSBzdG9jaztcbiAgICAgICAgc2NvcGUudGlja2VySW5wdXQgPSBzdG9jay5lICsgJzonICsgc3RvY2sudDtcbiAgICAgIH1cblxuICAgIH1cbiAgfV0pIiwidmFyIGFuZ3VsYXIgPSByZXF1aXJlKCdhbmd1bGFyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5zdG9ja3MnLCBbXSlcbiAgLmRpcmVjdGl2ZSgnc3RvY2tzJywgWydzdG9ja1NlcnZpY2UnLCAnJGFuaW1hdGUnLCBmdW5jdGlvbiAoc3RvY2tTZXJ2aWNlLCAkYW5pbWF0ZSkge1xuICBcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL3N0b2Nrcy5odG1sJ1xuICAgIH1cblxuICB9XSkiLCJ2YXIgYW5ndWxhciA9IHJlcXVpcmUoJ2FuZ3VsYXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnYXBwLndlYXRoZXInLCBbXSlcbiAgLmRpcmVjdGl2ZSgnd2VhdGhlcicsIFsnd2VhdGhlclNlcnZpY2UnLCAnc3RvcmFnZVNlcnZpY2UnLCAnJGFuaW1hdGUnLCBmdW5jdGlvbiAod2VhdGhlclNlcnZpY2UsIHN0b3JhZ2VTZXJ2aWNlLCAkYW5pbWF0ZSkge1xuICBcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgIGxpbms6IGxpbmssXG4gICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy93ZWF0aGVyLmh0bWwnXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgIFxuICAgICAgZWxlbWVudC5hZGRDbGFzcygnbmctaGlkZScpO1xuICAgICAgXG4gICAgICAvLyAkd2F0Y2hHcm91cCBpbiBuZyAxLjNcblxuXG5cbiAgICAgIHNjb3BlLiR3YXRjaCgnYXBwLmxvY2F0aW9uJywgZnVuY3Rpb24gKHZhbCxvbGRWYWwpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2FzZGZha3NkZmFzZGZzZnNkZnMnLHZhbCxvbGRWYWwpO1xuICAgICAgfSk7XG5cbiAgICAgIHNjb3BlLiR3YXRjaCgnW2FwcC5sb2NhdGlvbixhcHAudW5pdHNdJywgZnVuY3Rpb24gKHZhbHVlLG9sZFZhbHVlKSB7XG4gICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoJ25nLWhpZGUnKTtcbiAgICAgICAgXG4gICAgICAgICAgY29uc29sZS5sb2coJ2FzZGZhc2RmJyxvbGRWYWx1ZSx2YWx1ZSk7XG4gICAgICAgIFxuICAgICAgICB3ZWF0aGVyU2VydmljZS5nZXRXZWF0aGVyKHNjb3BlLmFwcC5sb2NhdGlvbixzY29wZS5hcHAudW5pdHMpLnRoZW4odXBkYXRlV2VhdGhlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKCd3YXRjaCBtY2dlZSEnKTtcbiAgICAgICAgc3RvcmFnZVNlcnZpY2Uuc2V0SXRlbSgnbG9jYXRpb24nLHNjb3BlLmFwcC5sb2NhdGlvbik7XG5cbiAgICAgIH0sdHJ1ZSk7XG4gICAgICBcbiAgICAgIGZ1bmN0aW9uIHVwZGF0ZVdlYXRoZXIoZGF0YSkge1xuICAgICAgICBzY29wZS5jdXJyZW50VGVtcCA9IGRhdGEubWFpbi50ZW1wLnRvUHJlY2lzaW9uKDIpO1xuICAgICAgICBzY29wZS5sb1RlbXAgPSBkYXRhLm1haW4udGVtcF9taW4udG9QcmVjaXNpb24oMik7XG4gICAgICAgIHNjb3BlLmhpVGVtcCA9IGRhdGEubWFpbi50ZW1wX21heC50b1ByZWNpc2lvbigyKTtcbiAgICAgICAgc2NvcGUuZGVzY3JpcHRpb24gPSBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgICAgIHNjb3BlLmFwcC5jb29yZCA9IGRhdGEuY29vcmQ7XG4gICAgICAgIFxuICAgICAgICAkYW5pbWF0ZS5yZW1vdmVDbGFzcyhlbGVtZW50LCAnbmctaGlkZScpO1xuXG4gICAgICAgIHJldHVybiBkYXRhO1xuXG4gICAgICB9XG4gICAgICBcbiAgICB9XG5cbiAgfV0pIiwidmFyIGFuZ3VsYXIgPSByZXF1aXJlKCdhbmd1bGFyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5zdG9ja1NlcnZpY2UnLCBbXSlcbiAgLnNlcnZpY2UoJ3N0b2NrU2VydmljZScsIFsnJGh0dHAnLCAnc3RvcmFnZVNlcnZpY2UnLCBmdW5jdGlvbiAoJGh0dHAsIHN0b3JhZ2VTZXJ2aWNlKSB7XG5cbiAgICBmdW5jdGlvbiBzdG9ja1F1ZXJ5KHF1ZXJ5KSB7XG5cbiAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICB0cmFuc2Zvcm1SZXNwb25zZTogZnVuY3Rpb24gKGRhdGEsIGhlYWRlcnNHZXR0ZXIpIHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhLnN1YnN0cmluZygzKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuICRodHRwLmdldCgnaHR0cDovL3d3dy5nb29nbGUuY29tL2ZpbmFuY2UvaW5mbz9pbmZvdHlwZT1pbmZvcXVvdGVhbGwmcT0nK3F1ZXJ5LCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuXG4gICAgICBnZXRTdG9ja3M6IGZ1bmN0aW9uKHRpY2tlckxpc3QpIHtcbiAgICAgICAgaWYgKHRpY2tlckxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHN0b2NrUXVlcnkodGlja2VyTGlzdC5qb2luKCcsJykpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY2hlY2tTdG9jazogZnVuY3Rpb24odGlja2VyKSB7XG4gICAgICAgIHJldHVybiBzdG9ja1F1ZXJ5KHRpY2tlcik7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgfV0pIiwidmFyIGFuZ3VsYXIgPSByZXF1aXJlKCdhbmd1bGFyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2FwcC5zdG9yYWdlU2VydmljZScsIFtdKVxuICAuc2VydmljZSgnc3RvcmFnZVNlcnZpY2UnLCBbJyRxJywgZnVuY3Rpb24gKCRxKSB7XG5cbiAgICByZXR1cm4ge1xuXG4gICAgICBnZXRJdGVtOiBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2dldGl0ZW0nLGtleSk7XG4gICAgICAgIHZhciBvYmogPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuXG4gICAgICAgIGlmICghb2JqKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgb2JqID0gSlNPTi5wYXJzZShvYmopO1xuICAgICAgICBjb25zb2xlLmxvZygnT0JKJyxvYmopO1xuXG4gICAgICAgIGlmICggRGF0ZS5ub3coKSA+IG9iai5leHBpcmVzICkgeyAvL2ZhbHNlIGlmIGV4cGlyZXMgdW5kZWZpbmVkXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKG9iai5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNldEl0ZW06IGZ1bmN0aW9uKGtleSwgdmFsdWUsIHR0bCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc2F2ZWl0ZW0nLGtleSx2YWx1ZSx0dGwpO1xuXG4gICAgICAgIHZhciBleHBpcmVzO1xuXG4gICAgICAgIGlmICh0dGwpIHtcbiAgICAgICAgICBleHBpcmVzID0gdHRsICsgRGF0ZS5ub3coKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvYmogPSB7XG4gICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkodmFsdWUpLFxuICAgICAgICAgIGV4cGlyZXM6IGV4cGlyZXNcbiAgICAgICAgfVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KG9iaikpO1xuICAgICAgfVxuXG5cbiAgICB9XG5cbiAgfV0pIiwidmFyIGFuZ3VsYXIgPSByZXF1aXJlKCdhbmd1bGFyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ2FwcC53ZWF0aGVyU2VydmljZScsIFtdKVxuICAuc2VydmljZSgnd2VhdGhlclNlcnZpY2UnLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xuICAgIHJldHVybiB7XG4gICAgICBnZXRXZWF0aGVyOiBmdW5jdGlvbihxdWVyeSwgdW5pdHMpIHtcblxuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgdXJsOidodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyJyxcbiAgICAgICAgICBwYXJhbXM6e3E6cXVlcnksdW5pdHM6dW5pdHN9LFxuICAgICAgICAgIHRyYW5zZm9ybVJlc3BvbnNlOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgICAgIGRhdGEucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgICAgIGRhdGEudW5pdHMgPSB1bml0cztcbiAgICAgICAgICAgIGRhdGEudGltZSA9IERhdGUubm93KCk7XG5cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIGNhY2hlZFdlYXRoZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS53ZWF0aGVyKTtcblxuICAgICAgICAgIGlmIChjYWNoZWRXZWF0aGVyLnF1ZXJ5ID09PSBxdWVyeSAmJiBjYWNoZWRXZWF0aGVyLnVuaXRzID09PSB1bml0cyAmJiAoRGF0ZS5ub3coKSAtIGNhY2hlZFdlYXRoZXIudGltZSkgPCAxMDAwMDAwKSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGNhY2hlZFdlYXRoZXIpO1xuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coJ0xvYWRpbmcgbmV3IHdlYXRoZXInKTtcbiAgICAgICAgXG4gICAgICAgICRodHRwKG9wdGlvbnMpLnN1Y2Nlc3MoZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgLy9IVFRQIHN0YXR1cyBjb2RlcyBub3QgdXNlZCBpbiBvcGVud2VhdGhlcm1hcCBBUEksIGluc3RlYWQgaW4gcmV0dXJuZWQgSlNPTlxuICAgICAgICAgIGlmIChkYXRhLmNvZCAhPT0gMjAwKSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLndlYXRoZXIgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblxuICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcblxuICAgICAgfVxuICAgIH1cbiAgfV0pIl19
