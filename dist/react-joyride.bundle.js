!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React")):"function"==typeof define&&define.amd?define(["React"],t):"object"==typeof exports?exports.Joyride=t(require("React")):e.Joyride=t(e.React)}("undefined"!=typeof self?self:this,function(e){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=3)}([function(t,o){t.exports=e},function(e,t,o){e.exports=o(4)()},function(e,t,o){"use strict";t.e=function(e){var t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,o,n){return t+t+o+o+n+n}),o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return o?{r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)}:null},o.d(t,"a",function(){return n}),t.b=function(){var e=document,t=e.body,o=e.documentElement;return Math.max(t.scrollHeight,t.offsetHeight,o.clientHeight,o.scrollHeight,o.offsetHeight)},t.d=function(){var e=document.scrollingElement;if(!e)return["ie","firefox"].indexOf(n)>-1?document.documentElement:document.body;return e},t.f=function(e){var t=e.type,o=void 0===t?"joyride":t,n=e.msg,i=e.warn,r=void 0!==i&&i,s=e.debug,a=void 0!==s&&s,l=r?console.warn||console.error:console.log;a&&(console.log("%c"+o,"color: #760bc5; font-weight: bold; font-size: 12px;"),n&&(Array.isArray(n)?l.apply(console,n):l.apply(console,[n])))},t.g=function(e){if(e.dataset&&e.dataset.reactid)return console.warn("Deprecation warning: React 15.0 removed reactid. Update your code."),'[data-reactid="'+e.dataset.reactid+'"]';if(e.dataset&&(console.error("Unsupported error: React 15.0+ doesn’t write reactid to the DOM anymore, please use a plain class in your step.",e),e.className))return"."+e.className.replace(" ",".");return e},t.c=function(e,t){var o=e.getBoundingClientRect();if(!t)return o;var n=t.getBoundingClientRect(),i=n.top>0?o.top-n.top:o.top,r=n.left>0?o.left-n.left:o.left,s=n.right>0?n.right-o.right:o.right,a=n.bottom>0?n.bottom-o.bottom:o.bottom;return{top:i,left:r,right:s,bottom:a,x:r,y:i,width:o.width,height:o.height}};var n=function(){if("undefined"==typeof window)return"node";var e=Boolean(window.opera)||navigator.userAgent.indexOf(" OPR/")>=0,t="undefined"!=typeof InstallTrigger,o=!!window.chrome&&!!window.chrome.webstore,n=(Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0||!o)&&!e&&void 0!==window.webkitAudioContext,i=Boolean(document.documentMode);return e?"opera":t?"firefox":o?"chrome":n?"safari":i?"ie":""}()},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(0),i=o.n(n),r=o(1),s=(o.n(r),o(8)),a=o.n(s),l=o(12),c=o.n(l),u=o(2),p=o(13),d=o(14),h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},y=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}();var g={action:"",index:0,isRunning:!1,isTourSkipped:!1,shouldRedraw:!0,shouldRenderTooltip:!1,shouldRun:!1,standaloneData:!1,xPos:-1e3,yPos:-1e3},b={STEP_BEFORE:"step:before",BEACON_BEFORE:"beacon:before",BEACON_TRIGGER:"beacon:trigger",TOOLTIP_BEFORE:"tooltip:before",STEP_AFTER:"step:after",STANDALONE_BEFORE:"standalone:before",STANDALONE_AFTER:"standalone:after",OVERLAY:"overlay:click",HOLE:"hole:click",FINISHED:"finished",TARGET_NOT_FOUND:"error:target_not_found"},m="top",v=290,w=!1,k=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.handleKeyboardNavigation=function(e){var t=o.state,n=t.index,i=t.shouldRenderTooltip,r=o.props.steps,s=window.Event?e.which:e.keyCode,a=void 0;i&&(-1!==[32,38,40].indexOf(s)&&e.preventDefault(),27===s?o.toggleTooltip({show:!1,index:n+1,action:"esc"}):-1!==[13,32].indexOf(s)&&(a=Boolean(r[n+1]),o.toggleTooltip({show:a,index:n+1,action:"next"})))},o.handleClickStandaloneTrigger=function(e){e.preventDefault();var t=o.state,n=t.isRunning,i=t.standaloneData,r=e.currentTarget.dataset.tooltip;-1!==["mouseenter","mouseleave"].indexOf(e.type)&&w||r&&(r=JSON.parse(r),i&&i.selector===r.selector?document.querySelector(".joyride-tooltip__close").click():o.setState({isRunning:!1,shouldRenderTooltip:!1,shouldRun:n,standaloneData:r,xPos:-1e3,yPos:-1e3}))},o.handleClickBeacon=function(e){e.preventDefault();var t=o.state.index,n=o.props.steps;o.triggerCallback({action:e.type,index:t,type:b.BEACON_TRIGGER,step:n[t]}),o.toggleTooltip({show:!0,index:t,action:"beacon:"+e.type})},o.handleClickTooltip=function(e){var t=o.state,n=t.index,i=t.shouldRun,r=o.props,s=r.steps,a=r.type,l=-1!==e.currentTarget.className.indexOf("joyride-")&&-1!==["A","BUTTON"].indexOf(e.currentTarget.tagName)?e.currentTarget:e.target,c=l.dataset.type;if("string"==typeof l.className&&l.className.startsWith("joyride-")){e.preventDefault(),e.stopPropagation();var u=document.querySelector(".joyride-tooltip"),p=n+("back"===c?-1:1);if("skip"===c&&(o.setState({isTourSkipped:!0}),p=s.length+1),u.classList.contains("joyride-tooltip--standalone"))o.setState({isRunning:i,shouldRedraw:!0,shouldRun:!1,standaloneData:!1});else if(c){var d=-1!==["continuous","guided"].indexOf(a)&&!(-1!==["close","skip"].indexOf(c))&&Boolean(s[p]);o.toggleTooltip({show:d,index:p,action:c})}"joyride-overlay"===e.target.className&&o.triggerCallback({action:"click",type:b.OVERLAY,step:s[n]}),e.target.classList.contains("joyride-hole")&&o.triggerCallback({action:"click",type:b.HOLE,step:s[n]})}},o.handleRenderTooltip=function(){o.calcPlacement()},o.state=f({},g),o.listeners={tooltips:{}},o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.a.Component),y(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,o=t.autoStart,n=t.keyboardNavigation,i=t.resizeDebounce,r=t.resizeDebounceDelay,s=t.run,a=t.steps,l=t.type;Object(u.f)({type:"joyride:initialized",msg:[this.props],debug:this.props.debug});var c=this.checkStepsValidity(a);if(a&&c&&s&&this.start(o),i){var p=void 0;this.listeners.resize=function(){clearTimeout(p),p=setTimeout(function(){p=null,e.calcPlacement()},r)}}else this.listeners.resize=function(){e.calcPlacement()};window.addEventListener("resize",this.listeners.resize),n&&"continuous"===l&&(this.listeners.keyboard=this.handleKeyboardNavigation,document.body.addEventListener("keydown",this.listeners.keyboard)),window.addEventListener("touchstart",function e(){w=!0,window.removeEventListener("touchstart",e)},!1)}},{key:"componentWillReceiveProps",value:function(e){Object(u.f)({type:"joyride:willReceiveProps",msg:[e],debug:e.debug});var t=this.state,o=t.isRunning,n=t.shouldRun,i=t.standaloneData,r=this.props,s=r.keyboardNavigation,a=r.run,l=r.steps,c=r.stepIndex,p=e.steps!==l,d=e.stepIndex!==c&&e.stepIndex!==this.state.index,h=e.run!==a,f=!1,y=!1;if(p&&this.checkStepsValidity(e.steps)&&(e.steps&&e.steps.length?!l.length&&e.run&&(f=!0):this.reset()),h&&(a&&!e.run?(this.stop(),y=!0):!a&&e.run?f=!0:o||!n||i||(f=!0)),d){var g=e.steps[e.stepIndex]&&e.autoStart;h&&f?this.start(e.autoStart,e.steps,e.stepIndex):e.run&&!o?this.start(e.autoStart,e.steps,e.stepIndex):y||this.toggleTooltip({show:g,index:e.stepIndex,steps:e.steps,action:"jump"})}else f&&this.start(e.autoStart,e.steps);!this.listeners.keyboard&&(!s&&e.keyboardNavigation||s)&&"continuous"===e.type?(this.listeners.keyboard=this.handleKeyboardNavigation,document.body.addEventListener("keydown",this.listeners.keyboard)):!this.listeners.keyboard||!s||e.keyboardNavigation&&"continuous"===e.type||(document.body.removeEventListener("keydown",this.listeners.keyboard),delete this.listeners.keyboard)}},{key:"componentWillUpdate",value:function(e,t){var o=this.state,n=o.index,i=o.isRunning,r=o.shouldRenderTooltip,s=o.standaloneData,a=this.props.steps,l=e.steps,c=a[n],u=l[t.index],p=Boolean(this.getStepTargetElement(u));!s&&t.standaloneData?this.triggerCallback({type:b.STANDALONE_BEFORE,step:t.standaloneData}):s&&!t.standaloneData&&this.triggerCallback({type:b.STANDALONE_AFTER,step:s}),"start"!==t.action||t.isRunning||u&&!p&&(console.warn("Target not mounted",u,t.action),this.triggerCallback({action:"start",index:t.index,type:b.TARGET_NOT_FOUND,step:u})),!i&&t.isRunning&&0===t.index&&(this.triggerCallback({action:"start",index:t.index,type:b.STEP_BEFORE,step:u}),t.shouldRenderTooltip||this.triggerCallback({action:"start",index:t.index,type:b.BEACON_BEFORE,step:u})),i&&t.index!==n&&(this.triggerCallback({action:t.action,index:n,type:b.STEP_AFTER,step:c}),u&&!p?(console.warn("Target not mounted",u,t.action),this.triggerCallback({action:t.action,index:t.index,type:b.TARGET_NOT_FOUND,step:u})):u&&t.index&&this.triggerCallback({action:t.action,index:t.index,type:b.STEP_BEFORE,step:u})),!t.isRunning||r===t.shouldRenderTooltip&&t.index===n||(t.shouldRenderTooltip?this.triggerCallback({action:t.action||(0===t.index?"autostart":""),index:t.index,type:b.TOOLTIP_BEFORE,step:u}):this.triggerCallback({action:t.action,index:t.index,type:b.BEACON_BEFORE,step:u})),t.isRunning||!l.length||n===t.index||u||this.triggerCallback({action:t.action,type:b.FINISHED,steps:l,isTourSkipped:t.isTourSkipped})}},{key:"componentDidUpdate",value:function(e,t){var o=this.state,n=o.index,i=o.shouldRedraw,r=o.isRunning,s=o.shouldRun,l=o.standaloneData,c=this.props,p=c.scrollToFirstStep,d=c.scrollToSteps,h=c.steps,f=h[n],y=this.getScrollTop(),g=(p||n>0||t.index>n)&&f&&!f.isFixed;i&&f&&this.calcPlacement(),r&&d&&g&&y>=0&&a.a.top(Object(u.d)(),this.getScrollTop()),h.length&&!r&&s&&!l&&this.start()}},{key:"componentWillUnmount",value:function(){var e=this;window.removeEventListener("resize",this.listeners.resize),this.listeners.keyboard&&document.body.removeEventListener("keydown",this.listeners.keyboard),Object.keys(this.listeners.tooltips).length&&Object.keys(this.listeners.tooltips).map(function(t){return{el:document.querySelector(t),event:e.listeners.tooltips[t].event,cb:e.listeners.tooltips[t].cb,key:t}}).filter(function(e){return!!e.el}).forEach(function(t){var o=t.el,n=t.event,i=t.cb,r=t.key;o.removeEventListener(n,i),delete e.listeners.tooltips[r]})}},{key:"start",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props.steps,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.state.index,n=Boolean(this.getStepTargetElement(t[o])),i=!0===e&&n;Object(u.f)({type:"joyride:start",msg:["autorun:",!0===e],debug:this.props.debug}),this.setState({action:"start",index:o,isRunning:Boolean(t.length)&&n,shouldRenderTooltip:i,shouldRun:!t.length})}},{key:"stop",value:function(){Object(u.f)({type:"joyride:stop",debug:this.props.debug}),this.setState({isRunning:!1,shouldRenderTooltip:!1})}},{key:"next",value:function(){var e=this.state,t=e.index,o=e.shouldRenderTooltip,n=this.props.steps,i=t+1,r=Boolean(n[i])&&o;Object(u.f)({type:"joyride:next",msg:["new index:",i],debug:this.props.debug}),this.toggleTooltip({show:r,index:i,action:"next"})}},{key:"back",value:function(){var e=this.state,t=e.index,o=e.shouldRenderTooltip,n=this.props.steps,i=t-1,r=Boolean(n[i])&&o;Object(u.f)({type:"joyride:back",msg:["new index:",i],debug:this.props.debug}),this.toggleTooltip({show:r,index:i,action:"next"})}},{key:"reset",value:function(e){var t=this.state,o=t.index,n=t.isRunning,i=!0===e,r=f({},g,{isRunning:i,shouldRenderTooltip:this.props.autoStart});Object(u.f)({type:"joyride:reset",msg:["restart:",i],debug:this.props.debug}),i&&n===i&&0===o&&this.forceUpdate(),this.setState(r)}},{key:"getProgress",value:function(){var e=this.state.index,t=this.props.steps;return Object(u.f)({type:"joyride:getProgress",msg:["steps:",t],debug:this.props.debug}),{index:e,percentageComplete:parseFloat((e/t.length*100).toFixed(2).replace(".00","")),step:t[e]}}},{key:"addTooltip",value:function(e){if(this.checkStepValidity(e)){Object(u.f)({type:"joyride:addTooltip",msg:["data:",e],debug:this.props.debug});var t=e.trigger||Object(u.g)(e.selector),o=document.querySelector(t);if(o)o.setAttribute("data-tooltip",JSON.stringify(e)),"hover"===(e.event||"click")&&(this.listeners.tooltips[t+"mouseenter"]={event:"mouseenter",cb:this.handleClickStandaloneTrigger},this.listeners.tooltips[t+"mouseleave"]={event:"mouseleave",cb:this.handleClickStandaloneTrigger},o.addEventListener("mouseenter",this.listeners.tooltips[t+"mouseenter"].cb),o.addEventListener("mouseleave",this.listeners.tooltips[t+"mouseleave"].cb)),this.listeners.tooltips[t+"click"]={event:"click",cb:this.handleClickStandaloneTrigger},o.addEventListener("click",this.listeners.tooltips[t+"click"].cb)}else Object(u.f)({type:"joyride:addTooltip:FAIL",msg:["data:",e],debug:this.props.debug})}},{key:"parseSteps",value:function(e){return console.warn("joyride.parseSteps() is deprecated.  It is no longer necessary to parse steps before providing them to Joyride"),e}},{key:"checkStepValidity",value:function(e){var t=this;if(!e||"object"!==(void 0===e?"undefined":h(e))||Array.isArray(e))return Object(u.f)({type:"joyride:checkStepValidity",msg:"Did not provide a step object.",warn:!0,debug:this.props.debug}),!1;return["selector"].every(function(o){var n=Boolean(e[o]);return n||Object(u.f)({type:"joyride:checkStepValidity",msg:["Provided a step without the required "+o+" property.","Step:",e],warn:!0,debug:t.props.debug}),n})}},{key:"checkStepsValidity",value:function(e){return Array.isArray(e)||"object"!==(void 0===e?"undefined":h(e))?e.length>0&&e.every(this.checkStepValidity):this.checkStepValidity(e)}},{key:"getStepTargetElement",value:function(e){if(!this.checkStepValidity(e))return null;var t=document.querySelector(Object(u.g)(e.selector));return t||(Object(u.f)({type:"joyride:getStepTargetElement",msg:"Target not rendered. For best results only add steps after they are mounted.",warn:!0,debug:this.props.debug}),null)}},{key:"getElementDimensions",value:function(){var e=this.state,t=e.shouldRenderTooltip,o=!!e.standaloneData||t,n=document.querySelector(o?".joyride-tooltip":".joyride-beacon"),i=0,r=0;if(n){var s=window.getComputedStyle(n);i=n.clientHeight+parseInt(s.marginTop||0,10)+parseInt(s.marginBottom||0,10),r=n.clientWidth+parseInt(s.marginLeft||0,10)+parseInt(s.marginRight||0,10)}return{height:i,width:r}}},{key:"getScrollTop",value:function(){var e=this.state,t=e.index,o=e.yPos,n=this.props,i=n.offsetParentSelector,r=n.scrollOffset,s=n.steps[t],a=this.getStepTargetElement(s),l=document.querySelector(Object(u.g)(i));if(!a)return 0;var c=Object(u.c)(a,l).top+(window.pageYOffset||document.documentElement.scrollTop),p=this.calcPosition(s),d=0;return/^top/.test(p)?d=Math.floor(o-r):/^bottom|^left|^right/.test(p)&&(d=Math.floor(c-r)),d}},{key:"triggerCallback",value:function(e){var t=this.props.callback;"function"==typeof t&&(Object(u.f)({type:"joyride:triggerCallback",msg:[e],debug:this.props.debug}),t(e))}},{key:"toggleTooltip",value:function(e){var t=e.show,o=e.index,n=void 0===o?this.state.index:o,i=e.action,r=e.steps,s=(void 0===r?this.props.steps:r)[n],a=Boolean(this.getStepTargetElement(s));this.setState({action:i,index:n,isRunning:!(!s||!a)&&this.state.isRunning,shouldRedraw:!t||!a,shouldRenderTooltip:t&&a,xPos:-1e3,yPos:-1e3})}},{key:"calcPlacement",value:function(){var e=this.state,t=e.index,o=e.isRunning,n=e.standaloneData,i=e.shouldRenderTooltip,r=this.props,s=r.offsetParentSelector,a=r.steps,l=r.tooltipOffset,p=n||a[t]||{},d=!!n||i,h=this.getStepTargetElement(p),f=document.querySelector(Object(u.g)(s));if(Object(u.f)({type:"joyride:calcPlacement"+this.getRenderStage(),msg:["step:",p],debug:this.props.debug}),h){var y={x:-1e3,y:-1e3};if(p&&(n||o&&a[t])){var g=c.a.get(p,"style.beacon.offsetX")||0,b=c.a.get(p,"style.beacon.offsetY")||0,m=this.calcPosition(p),v=Object(u.d)().getBoundingClientRect(),w=!0===p.isFixed?0:v.top,k=this.getElementDimensions(),x=Object(u.c)(h,f);/^left/.test(m)?y.x=x.left-(d?k.width+l:k.width/2+g):/^right/.test(m)?y.x=x.left+x.width-(d?-l:k.width/2-g):y.x=x.left+(x.width/2-k.width/2),/^top/.test(m)?y.y=x.top-w-(d?k.height+l:k.height/2+b):/^bottom/.test(m)?y.y=x.top-w+(x.height-(d?-l:k.height/2-b)):y.y=x.top-w,/^bottom|^top/.test(m)&&(/left/.test(m)?y.x=x.left-(d?l:k.width/2):/right/.test(m)&&(y.x=x.left+(x.width-(d?k.width-l:k.width/2)))),this.setState({shouldRedraw:!1,xPos:this.preventWindowOverflow(Math.ceil(y.x),"x",k.width,k.height),yPos:this.preventWindowOverflow(Math.ceil(y.y),"y",k.width,k.height)})}}}},{key:"calcPosition",value:function(e){var t=this.props,o=t.offsetParentSelector,n=t.tooltipOffset,i=Object(u.d)(),r=i.getBoundingClientRect(),s=this.getStepTargetElement(e),a=document.querySelector(Object(u.g)(o)),l=Object(u.c)(s,a),c=this.getElementDimensions(),p=c.height,d=c.width,h=void 0===d?v:d,f=e.position||m;return/^left/.test(f)&&l.left-(h+n)<0?f="top":/^right/.test(f)&&l.left+l.width+(h+n)>r.width&&(f="bottom"),/^top/.test(f)&&(l.top+i.scrollTop-(p+n)<0||e.isFixed&&l.top-p<0)?f="bottom":/^bottom/.test(f)&&(l.top+i.scrollTop+(p+n)>Object(u.b)()||e.isFixed&&l.top+l.height+p>r.height)&&(f="top"),f}},{key:"getRenderStage",value:function(){var e=this.state,t=e.shouldRedraw,o=e.xPos;return t?":redraw":o<0?":pre-render":""}},{key:"preventWindowOverflow",value:function(e,t,o,n){var i=window.innerWidth,r=Object(u.b)(),s=e;return"x"===t?e+o>=i?s=i-o-15:e<15&&(s=15):"y"===t&&(e+n>=r?s=r-n-15:e<15&&(s=15)),s}},{key:"createComponent",value:function(){var e=this.state,t=e.index,o=e.shouldRedraw,n=e.shouldRenderTooltip,r=e.standaloneData,s=e.xPos,a=e.yPos,l=this.props,c=l.disableOverlay,h=l.holePadding,y=l.locale,g=l.offsetParentSelector,b=l.showBackButton,m=l.showOverlay,v=l.showSkipButton,w=l.showStepsProgress,k=l.steps,x=l.type,O=r||k[t],T=f({},O),j=this.getStepTargetElement(T),E=void 0,R=T&&T.allowClicksThruHole||this.props.allowClicksThruHole,S=!r&&m,C={primary:y.close};if(Object(u.f)({type:"joyride:createComponent"+this.getRenderStage(),msg:["component:",n||r?"Tooltip":"Beacon","animate:",s>-1&&!o,"step:",T],debug:this.props.debug,warn:!j}),!j)return!1;if(n||r){var P=this.calcPosition(T);if(!r){if(-1!==["continuous","guided"].indexOf(x)){if(C.primary=y.last,k[t+1])if(w){var _=y.next;"string"==typeof y.next&&(_=i.a.createElement("span",null,y.next)),C.primary=i.a.createElement("span",null,_," ",i.a.createElement("span",null,t+1+"/"+k.length))}else C.primary=y.next;b&&t>0&&(C.secondary=y.back)}v&&(C.skip=y.skip)}E=i.a.createElement(d.a,{allowClicksThruHole:R,animate:s>-1&&!o,buttons:C,disableOverlay:c,holePadding:h,offsetParentSelector:g,position:P,selector:Object(u.g)(T.selector),showOverlay:S,step:T,standalone:Boolean(r),target:j,type:x,xPos:s,yPos:a,onClick:this.handleClickTooltip,onRender:this.handleRenderTooltip})}else E=i.a.createElement(p.a,{step:T,xPos:s,yPos:a,onTrigger:this.handleClickBeacon,eventType:T.type||"click"});return E}},{key:"render",value:function(){var e=this.state,t=e.index,o=e.isRunning,n=e.standaloneData,r=this.props.steps,s=Boolean(r[t]),a=void 0,l=void 0;return o&&s?Object(u.f)({type:"joyride:render"+this.getRenderStage(),msg:["step:",r[t]],debug:this.props.debug}):!o&&n&&Object(u.f)({type:"joyride:render",msg:["tooltip:",n],debug:this.props.debug}),n?l=this.createComponent():o&&s&&(a=this.createComponent()),i.a.createElement("div",{className:"joyride"},a,l)}}]),t}();k.defaultProps={allowClicksThruHole:!1,autoStart:!1,debug:!1,disableOverlay:!1,holePadding:5,keyboardNavigation:!0,locale:{back:"Back",close:"Close",last:"Last",next:"Next",skip:"Skip"},offsetParentSelector:"body",resizeDebounce:!1,resizeDebounceDelay:200,run:!1,scrollOffset:20,scrollToFirstStep:!1,scrollToSteps:!0,showBackButton:!0,showOverlay:!0,showSkipButton:!1,showStepsProgress:!1,stepIndex:0,steps:[],tooltipOffset:15,type:"single"},t.default=k},function(e,t,o){"use strict";var n=o(5),i=o(6),r=o(7);e.exports=function(){function e(e,t,o,n,s,a){a!==r&&i(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var o={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return o.checkPropTypes=n,o.PropTypes=o,o}},function(e,t,o){"use strict";function n(e){return function(){return e}}var i=function(){};i.thatReturns=n,i.thatReturnsFalse=n(!1),i.thatReturnsTrue=n(!0),i.thatReturnsNull=n(null),i.thatReturnsThis=function(){return this},i.thatReturnsArgument=function(e){return e},e.exports=i},function(e,t,o){"use strict";var n=function(e){};e.exports=function(e,t,o,i,r,s,a,l){if(n(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[o,i,r,s,a,l],p=0;(c=new Error(t.replace(/%s/g,function(){return u[p++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}}},function(e,t,o){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,o){var n=o(9);function i(e,t,o,i,s){var a=+new Date,l=t[e],c=!1,u=r,p=350;if("function"==typeof i?s=i:(u=(i=i||{}).ease||u,p=i.duration||p,s=s||function(){}),l===o)return s(new Error("Element already at target scroll position"),t[e]);return n(function i(r){if(c)return s(new Error("Scroll cancelled"),t[e]);var d=+new Date,h=Math.min(1,(d-a)/p),f=u(h);t[e]=f*(o-l)+l,n(h<1?i:function(){s(null,t[e])})}),function(){c=!0}}function r(e){return.5*(1-Math.cos(Math.PI*e))}e.exports={top:function(e,t,o,n){return i("scrollTop",e,t,o,n)},left:function(e,t,o,n){return i("scrollLeft",e,t,o,n)}}},function(e,t,o){var n=o(10),i=n.requestAnimationFrame||n.webkitRequestAnimationFrame||n.mozRequestAnimationFrame||function(e){var t=+new Date,o=Math.max(0,16-(t-r)),n=setTimeout(e,o);return r=t,n},r=+new Date;var s=n.cancelAnimationFrame||n.webkitCancelAnimationFrame||n.mozCancelAnimationFrame||clearTimeout;Function.prototype.bind&&(i=i.bind(n),s=s.bind(n)),(e.exports=i).cancel=s},function(e,t,o){(function(t){var o;o="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},e.exports=o}).call(t,o(11))},function(e,t){var o;o=function(){return this}();try{o=o||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(o=window)}e.exports=o},function(e,t,o){"use strict";e.exports={set:function(e,t,o){if(e&&"object"==typeof e){if("string"==typeof t&&""!==t){var n=t.split(".");return n.reduce(function(e,t,i){return e[t]=e[t]||{},n.length==i+1&&(e[t]=o),e[t]},e)}return"number"==typeof t?(e[t]=o,e[t]):e}return e},get:function(e,t){if(e&&"object"==typeof e){if("string"==typeof t&&""!==t){var o=t.split(".");return o.reduce(function(e,t){return e&&e[t]},e)}return"number"==typeof t?e[t]:e}return e},has:function(e,t,o){if(o=o||{},e&&"object"==typeof e){if("string"==typeof t&&""!==t){var n=t.split(".");return n.reduce(function(e,t,n,i){return n==i.length-1?o.own?!(!e||!e.hasOwnProperty(t)):!!(null!==e&&"object"==typeof e&&t in e):e&&e[t]},e)}return"number"==typeof t&&t in e}return!1},hasOwn:function(e,t,o){return this.has(e,t,o||{own:!0})},isIn:function(e,t,o,n){if(n=n||{},e&&"object"==typeof e){if("string"==typeof t&&""!==t){var i,r=t.split("."),s=!1;return i=!!r.reduce(function(e,t){return s=s||e===o||!!e&&e[t]===o,e&&e[t]},e),n.validPath?s&&i:s}return!1}return!1}}},function(e,t,o){"use strict";var n=o(0),i=o.n(n),r=o(1),s=(o.n(r),o(2)),a=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}();var l=!1;"undefined"!=typeof window&&(l="ontouchstart"in window||navigator.msMaxTouchPoints);var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.a.Component),a(t,[{key:"render",value:function(){var e=this.props,t=e.eventType,o=e.onTrigger,n=e.step,r=e.xPos,a=e.yPos,c={beacon:{left:r,position:!0===n.isFixed?"fixed":"absolute",top:a},inner:{},outer:{}},u=n.style||{},p=void 0;return u.beacon&&("string"==typeof u.beacon?(p=Object(s.e)(u.beacon),c.inner.backgroundColor=u.beacon,c.outer={backgroundColor:"rgba("+p.r+", "+p.g+", "+p.b+", 0.2)",borderColor:u.beacon}):(u.beacon.inner&&(c.inner.backgroundColor=u.beacon.inner),u.beacon.outer&&(p=Object(s.e)(u.beacon.outer),c.outer={backgroundColor:"rgba("+p.r+", "+p.g+", "+p.b+", 0.4)",borderColor:u.beacon.outer}))),i.a.createElement("button",{className:"joyride-beacon",style:c.beacon,onClick:"click"===t||l?o:null,onMouseEnter:"hover"!==t||l?null:o},i.a.createElement("span",{className:"joyride-beacon__inner",style:c.inner}),i.a.createElement("span",{className:"joyride-beacon__outer",style:c.outer}))}}]),t}();c.defaultProps={xPos:-1e3,yPos:-1e3},t.a=c},function(e,t,o){"use strict";var n=o(0),i=o.n(n),r=o(1),s=(o.n(r),o(2)),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}();var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.handleMouseMove=function(e){var t=e||window.e,n=o.state.styles.hole,i="fixed"===n.position?t.clientY:t.pageY,r="fixed"===n.position?t.clientX:t.pageX,s=i>=n.top&&i<=n.top+n.height,a=r>=n.left&&r<=n.left+n.width&&s;a&&!o.state.mouseOverHole&&o.setState({mouseOverHole:!0}),!a&&o.state.mouseOverHole&&o.setState({mouseOverHole:!1})},o.state={},o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.a.Component),l(t,[{key:"componentWillMount",value:function(){var e=this.setOpts(),t=this.setStyles(this.props.step.style,e,this.props);this.setState({styles:t,opts:e})}},{key:"componentDidMount",value:function(){var e=this.props,t=e.allowClicksThruHole,o=e.onRender,n=e.showOverlay;this.forceUpdate(),o(),n&&t&&document.addEventListener("mousemove",this.handleMouseMove,!1)}},{key:"componentWillReceiveProps",value:function(e){var t=e.allowClicksThruHole,o=e.animate,n=e.standalone,i=e.step,r=e.holePadding,s=e.position,a=e.xPos,l=e.yPos,c=e.showOverlay,u=this.props,p=u.allowClicksThruHole,d=u.animate,h=u.standalone,f=u.step,y=u.holePadding,g=u.position,b=u.xPos,m=u.yPos,v=u.showOverlay;if(o!==d||n!==h||i!==f||r!==y||s!==g||a!==b||l!==m){var w=this.setOpts(e),k=this.setStyles(e.step.style,w,e);this.setState({styles:k,opts:w})}c!==v&&(c&&t?document.addEventListener("mousemove",this.handleMouseMove,!1):document.removeEventListener("mousemove",this.handleMouseMove,!1)),t!==p&&(t?document.addEventListener("mousemove",this.handleMouseMove,!1):document.removeEventListener("mousemove",this.handleMouseMove,!1))}},{key:"componentDidUpdate",value:function(e){var t=this.props,o=t.onRender,n=t.selector;e.selector!==n&&(this.forceUpdate(),o())}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousemove",this.handleMouseMove,!1)}},{key:"getArrowPosition",value:function(e){var t=e;return window.innerWidth<480?e<8?t=8:e>92&&(t=92):window.innerWidth<1024?e<6?t=6:e>94&&(t=94):e<5?t=5:e>95&&(t=95),t}},{key:"generateArrow",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.location=e.location||"top",e.color=e.color||"#f04",e.color=e.color.replace("#","%23"),e.width=e.width||36,e.height=e.width/2,e.scale=e.width/16,e.rotate="0";var t=e.height,o=e.rotate,n=e.width;return"bottom"===e.location?o="180 8 4":"left"===e.location?(t=e.width,n=e.height,o="270 8 8"):"right"===e.location&&(t=e.width,n=e.height,o="90 4 4"),"data:image/svg+xml,%3Csvg%20width%3D%22"+n+"%22%20height%3D%22"+t+"%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpolygon%20points%3D%220%2C%200%208%2C%208%2016%2C0%22%20fill%3D%22"+e.color+"%22%20transform%3D%22scale%28"+e.scale+"%29%20rotate%28"+o+"%29%22%3E%3C%2Fpolygon%3E%3C%2Fsvg%3E"}},{key:"setStyles",value:function(e,t,o){var n=o.holePadding,i=o.step,r=o.xPos,s=o.yPos,l=!0===i.isFixed,c={arrow:{left:t.arrowPosition},buttons:{},header:{},main:{},footer:{},hole:{},tooltip:{position:l?"fixed":"absolute",top:Math.round(s),left:Math.round(r)}};return c.hole={top:Math.round(t.rect.top-(l?0:document.body.getBoundingClientRect().top)-n),left:Math.round(t.rect.left-n),width:Math.round(t.rect.width+2*n),height:Math.round(t.rect.height+2*n)},l&&(c.hole.position="fixed"),c.buttons={back:{},close:{},primary:{},skip:{}},e&&(e.backgroundColor&&(c.arrow.backgroundImage='url("'+this.generateArrow({location:t.positonBaseClass,color:e.backgroundColor})+'")',c.tooltip.backgroundColor=e.backgroundColor),e.borderRadius&&(c.tooltip.borderRadius=e.borderRadius),e.color&&(c.buttons.primary.color=e.color,c.buttons.close.color=e.color,c.buttons.skip.color=e.color,c.header.color=e.color,c.tooltip.color=e.color,e.mainColor&&e.mainColor===e.color&&(c.buttons.primary.color=e.backgroundColor)),e.mainColor&&(c.buttons.primary.backgroundColor=e.mainColor,c.buttons.back.color=e.mainColor,c.header.borderColor=e.mainColor),e.textAlign&&(c.tooltip.textAlign=e.textAlign),e.width&&(c.tooltip.width=e.width),e.header&&(c.header=a({},c.header,e.header)),e.main&&(c.main=a({},c.main,e.main)),e.footer&&(c.footer=a({},c.footer,e.footer)),e.back&&(c.buttons.back=a({},c.buttons.back,e.back)),e.arrow&&(c.arrow=a({},c.arrow,e.arrow)),e.button&&(c.buttons.primary=a({},c.buttons.primary,e.button)),e.close&&(c.buttons.close=a({},c.buttons.close,e.close)),e.skip&&(c.buttons.skip=a({},c.buttons.skip,e.skip)),e.hole&&(c.hole=a({},e.hole,c.hole))),c}},{key:"setOpts",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,t=e.animate,o=e.offsetParentSelector,n=e.position,i=e.standalone,r=e.target,a=e.xPos,l=document.querySelector(Object(s.g)(o)),c=document.querySelector(".joyride-tooltip"),u={classes:["joyride-tooltip"],rect:Object(s.c)(r,l),positionClass:n};return u.positonBaseClass=u.positionClass.match(/-/)?u.positionClass.split("-")[0]:u.positionClass,(/^bottom$/.test(u.positionClass)||/^top$/.test(u.positionClass))&&a>-1&&(u.tooltip={width:450},c&&(u.tooltip=Object(s.c)(c,l)),u.targetMiddle=u.rect.left+u.rect.width/2,u.arrowPosition=((u.targetMiddle-a)/u.tooltip.width*100).toFixed(2),u.arrowPosition=this.getArrowPosition(u.arrowPosition)+"%"),i&&u.classes.push("joyride-tooltip--standalone"),u.positonBaseClass!==u.positionClass&&u.classes.push(u.positonBaseClass),u.classes.push(u.positionClass),t&&u.classes.push("joyride-tooltip--animate"),u}},{key:"render",value:function(){var e=this.props,t=e.buttons,o=e.disableOverlay,n=e.onClick,r=e.selector,a=e.showOverlay,l=e.step,c=e.target,u=e.type;if(c){var p=this.state,d=p.opts,h=p.styles,f={};if(l.title&&(f.header=i.a.createElement("div",{className:"joyride-tooltip__header",style:h.header},l.title)),t.skip&&(f.skip=i.a.createElement("button",{className:"joyride-tooltip__button joyride-tooltip__button--skip",style:h.buttons.skip,"data-type":"skip",onClick:n},t.skip)),l.text&&"string"!=typeof l.text?f.main=i.a.createElement("div",{className:"joyride-tooltip__main",style:h.main},l.text):f.main=i.a.createElement("div",{className:"joyride-tooltip__main",style:h.main,dangerouslySetInnerHTML:{__html:l.text||""}}),t.secondary&&(f.secondary=i.a.createElement("button",{className:"joyride-tooltip__button joyride-tooltip__button--secondary",style:h.buttons.back,"data-type":"back",onClick:n},t.secondary)),"hover"===l.event&&(h.buttons.close.opacity=0),f.tooltipComponent=i.a.createElement("div",{className:d.classes.join(" "),style:h.tooltip,"data-target":r},i.a.createElement("div",{className:"joyride-tooltip__triangle joyride-tooltip__triangle-"+d.positionClass,style:h.arrow}),i.a.createElement("button",{className:"joyride-tooltip__close"+(f.header?" joyride-tooltip__close--header":""),style:h.buttons.close,"data-type":"close",onClick:n}),f.header,f.main,i.a.createElement("div",{className:"joyride-tooltip__footer",style:h.footer},f.skip,f.secondary,i.a.createElement("button",{className:"joyride-tooltip__button joyride-tooltip__button--primary",style:h.buttons.primary,"data-type":-1!==["single","casual"].indexOf(u)?"close":"next",onClick:n},t.primary))),a&&(f.hole=i.a.createElement("div",{className:"joyride-hole "+s.a,style:h.hole,onClick:function(){}})),!a)return f.tooltipComponent;var y={cursor:o?"default":"pointer",height:document.body.clientHeight,pointerEvents:this.state.mouseOverHole?"none":"auto"};return i.a.createElement("div",{className:"joyride-overlay",style:y,"data-type":"close",onClick:o?void 0:n},f.hole,f.tooltipComponent)}}}]),t}();c.defaultProps={buttons:{primary:"Close"},step:{},xPos:-1e3,yPos:-1e3},t.a=c}])});