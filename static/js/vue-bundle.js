webpackJsonp([1],{104:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0)},[n("text",{ref:"text",staticClass:"animation-text",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0)},[t._v("Weex Animation")]),t._v(" "),"Web"===t.platform?n("select-animation",{staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0),attrs:{animations:t.animations},on:{change:function(e){return t.setAnimation(e.target.value)}}}):n("text",{staticClass:"button",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0),on:{click:t.pickAnimation}},[t._v("Select Animation")])],1)},staticRenderFns:[]}},45:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(46),a=n(47),s=n.n(a),i=n(48),o=(n.n(i),n(49)),c=n.n(o);s.a.init(r.a),new r.a({el:"#app",render:function(t){return t(c.a)}})},49:function(t,e,n){n(50);var r=n(27)(n(53),n(104),"data-v-349a3ee6",null);t.exports=r.exports},50:function(t,e,n){var r=n(51);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(26)("105645ae",r,!0)},51:function(t,e,n){e=t.exports=n(25)(),e.push([t.i,".wrap[data-v-349a3ee6]{padding-top:30px}.animation-text[data-v-349a3ee6]{color:#f35626;text-align:center;margin-top:50px;margin-bottom:100px;opacity:0}.button[data-v-349a3ee6]{width:500px;line-height:60px;background-color:#f35626;color:#fff;align-self:center;text-align:center;border-radius:10px}",""])},53:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(28),a=n.n(r),s=n(29),i=n.n(s),o=n(87),c=n.n(o),u=n(91),l=n.n(u),p=n(96),f=weex.requireModule("modal"),m=weex.requireModule("picker");e.default={name:"weex-animation",components:{SelectAnimation:l.a},data:function(){return{animations:c()(p).filter(function(t){return"transition"!==t}),platform:weex.config.env.platform}},mounted:function(){var t=this;setTimeout(function(){p.fadeIn(t.$refs.text)},500)},methods:{pickAnimation:function(){var t=this;m.pick({index:0,items:this.animations},function(e){if("success"===e.result){var n=e.data;t.setAnimation(t.animations[n])}})},setAnimation:function(t){var e=this;return i()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p[t](e.$refs.text);case 2:return n.next=4,p.transition(e.$refs.text,{styles:{opacity:1,transform:"scale(1)"},duration:1e-4,delay:300});case 4:console.log(t),f.toast({message:t,duration:.3});case 6:case"end":return n.stop()}},n,e)}))()}}}},91:function(t,e,n){n(92);var r=n(27)(n(94),n(95),"data-v-27ba2ed4",null);t.exports=r.exports},92:function(t,e,n){var r=n(93);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(26)("23c033f2",r,!0)},93:function(t,e,n){e=t.exports=n(25)(),e.push([t.i,".wrap[data-v-27ba2ed4]{width:500px;align-self:center}.select-title[data-v-27ba2ed4]{margin-bottom:40px}",""])},94:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"select-animation",props:{animations:Array}}},95:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0)},[n("text",{staticClass:"select-title",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0)},[t._v("select animations:")]),t._v(" "),n("select",{staticStyle:t.$processStyle({height:"20px"}),style:t.$processStyle(void 0),on:{change:function(e){return t.$emit("change",e)}}},t._l(t.animations,function(e){return n("option",{key:e,staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0),domProps:{value:e}},[t._v(t._s(e))])}))])},staticRenderFns:[]}},96:function(t,e,n){"use strict";function r(t,e){return t?new f.a(function(n){m.transition(t,l()({duration:400,timingFunction:"ease",delay:0},e),n)}):f.a.resolve()}function a(t,e){return new f.a(function(n,r){m.transition(t,{duration:1e-4,styles:e}),setTimeout(function(){n()},1e-4)})}Object.defineProperty(e,"__esModule",{value:!0}),e.transition=r,n.d(e,"fadeOut",function(){return y}),n.d(e,"fadeIn",function(){return d}),n.d(e,"zoomOut",function(){return x}),n.d(e,"zoomOutDown",function(){return v}),n.d(e,"zoomIn",function(){return h}),n.d(e,"zoomInDown",function(){return b}),n.d(e,"zoomInLeft",function(){return w}),n.d(e,"zoomInRight",function(){return g}),n.d(e,"zoomInUp",function(){return S}),n.d(e,"flash",function(){return k}),n.d(e,"pulse",function(){return $}),n.d(e,"shake",function(){return _});var s=n(28),i=n.n(s),o=n(29),c=n.n(o),u=n(97),l=n.n(u),p=n(30),f=n.n(p),m=weex.requireModule("animation"),y=function(){var t=c()(i.a.mark(function t(e,n){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(e,{opacity:1});case 2:return t.abrupt("return",r(e,l()({styles:{opacity:0}},n)));case 3:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),d=function(){var t=c()(i.a.mark(function t(e,n){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(e,{opacity:0});case 2:return t.abrupt("return",r(e,l()({styles:{opacity:1}},n)));case 3:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),x=function(){var t=c()(i.a.mark(function t(e,n){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(e,{opacity:1,transform:"scale(1)"});case 2:return t.abrupt("return",r(e,l()({styles:{opacity:0,transform:"scale(0)"}},n)));case 3:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),v=function(){var t=c()(i.a.mark(function t(e,n){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r(e,{styles:{opacity:1,transform:"scale(0.475) translateY(-60px)"},timingFunction:"cubic-bezier(0.550, 0.055, 0.675, 0.190)"});case 2:return t.next=4,r(e,{styles:{opacity:0,transform:"scale(.1) translateY(2000px)",transformOrigin:"center bottom"},timingFunction:"cubic-bezier(0.175, 0.885, 0.320, 1)"});case 4:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),h=function(){var t=c()(i.a.mark(function t(e,n){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(e,{opacity:0,transform:"scale(0)"});case 2:return t.abrupt("return",r(e,l()({styles:{opacity:1,transform:"scale(1)"}},n)));case 3:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),b=function(){var t=c()(i.a.mark(function t(e,n){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(e,{opacity:0,transform:"scale(0.1) translateY(-1000px)"});case 2:return t.next=4,r(e,{styles:{opacity:1,transform:"scale(0.475) translateY(60px)"},timingFunction:"cubic-bezier(0.550, 0.055, 0.675, 0.190)"});case 4:return t.next=6,r(e,{styles:{transform:"scale(1) translateY(0px)"},timingFunction:"cubic-bezier(0.175, 0.885, 0.320, 1)"});case 6:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),w=function(){var t=c()(i.a.mark(function t(e,n){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(e,{opacity:0,transform:"scale(0.1) translateX(-1000px)"});case 2:return t.next=4,r(e,{styles:{opacity:1,transform:"scale(0.475) translateX(10px)"},timingFunction:"cubic-bezier(0.550, 0.055, 0.675, 0.190)"});case 4:return t.next=6,r(e,{styles:{transform:"scale(1) translateX(0px)"},timingFunction:"cubic-bezier(0.175, 0.885, 0.320, 1)"});case 6:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),g=function(){var t=c()(i.a.mark(function t(e,n){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(e,{opacity:0,transform:"scale(0.1) translateX(1000px)"});case 2:return t.next=4,r(e,{styles:{opacity:1,transform:"scale(0.475) translateX(-10px)"},timingFunction:"cubic-bezier(0.550, 0.055, 0.675, 0.190)"});case 4:return t.next=6,r(e,{styles:{transform:"scale(1) translateX(0px)"},timingFunction:"cubic-bezier(0.175, 0.885, 0.320, 1)"});case 6:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),S=function(){var t=c()(i.a.mark(function t(e,n){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(e,{opacity:0,transform:"scale(0.1) translateY(1000px)"});case 2:return t.next=4,r(e,{styles:{opacity:1,transform:"scale(0.475) translateX(-10px)"},timingFunction:"cubic-bezier(0.550, 0.055, 0.675, 0.190)"});case 4:return t.next=6,r(e,{styles:{transform:"scale(1) translateX(0px)"},timingFunction:"cubic-bezier(0.175, 0.885, 0.320, 1)"});case 6:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),k=function(){var t=c()(i.a.mark(function t(e,n){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r(e,{styles:{opacity:0},duration:100});case 2:return t.next=4,r(e,{styles:{opacity:1},duration:100});case 4:return t.next=6,r(e,{styles:{opacity:0},duration:100});case 6:return t.next=8,r(e,{styles:{opacity:1},duration:100});case 8:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),$=function(){var t=c()(i.a.mark(function t(e,n){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(e,{transform:"scale(1)"});case 2:return t.next=4,r(e,{styles:{transform:"scale(1.05)"}});case 4:return t.abrupt("return",r(e,{styles:{transform:"scale(1)"}}));case 5:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),_=function(){var t=c()(i.a.mark(function t(e,n){var s;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(e,{transform:"translateX(0)"});case 2:s=0;case 3:if(!(s<10)){t.next=9;break}return t.next=6,r(e,{styles:{transform:"translateX("+(s%2?10:-10)+"px)"},duration:100});case 6:s++,t.next=3;break;case 9:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()}},[45]);