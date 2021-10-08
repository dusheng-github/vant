import{c as q,t as A,n as G,s as E,H as ue,p as re,C as R}from"./use-translate.39547e32.js";import{w as K}from"./with-install.cc9696bc.js";import{u as ve}from"./use-touch.30351383.js";import{u as U}from"./use-expose.877c018b.js";import{o as fe}from"./on-popup-reopen.d7054786.js";import{i as B,d as I}from"./utils.39620306.js";import{u as H}from"./index.92de2fdc.js";import{D as $,z as F,E as J,C as d,x as T,G as Q,P as de,N as he,O as me,e as C,q as we}from"./vue-libs.71fdcafc.js";import{u as ge}from"./useChildren.edf9a3d1.js";import{u as pe}from"./useParent.e4fd6deb.js";function be(){var t=$(B?window.innerWidth:0),v=$(B?window.innerHeight:0),r=()=>{t.value=window.innerWidth,v.value=window.innerHeight};return H("resize",r),H("orientationchange",r),{width:t,height:v}}function ye(){var t=$("visible"),v=()=>{B&&(t.value=document.hidden?"hidden":"visible")};return v(),H("visibilitychange",v),t}const[Z,M]=q("swipe"),Se={loop:A,width:G,height:G,vertical:Boolean,autoplay:E(0),duration:E(500),touchable:A,lazyRender:Boolean,initialSwipe:E(0),indicatorColor:String,showIndicators:A,stopPropagation:A},ee=Symbol(Z);var xe=F({name:Z,props:Se,emits:["change"],setup(t,{emit:v,slots:r}){const f=$(),e=J({rect:null,width:0,height:0,offset:0,active:0,swiping:!1}),c=ve(),z=be(),{children:h,linkChildren:O}=ge(ee),a=d(()=>h.length),l=d(()=>e[t.vertical?"height":"width"]),u=d(()=>t.vertical?c.deltaY.value:c.deltaX.value),m=d(()=>e.rect?(t.vertical?e.rect.height:e.rect.width)-l.value*a.value:0),D=d(()=>Math.ceil(Math.abs(m.value)/l.value)),b=d(()=>a.value*l.value),P=d(()=>(e.active+a.value)%a.value),W=d(()=>{const i=t.vertical?"vertical":"horizontal";return c.direction.value===i}),te=d(()=>{const i={transitionDuration:`${e.swiping?0:t.duration}ms`,transform:`translate${t.vertical?"Y":"X"}(${e.offset}px)`};if(l.value){const o=t.vertical?"height":"width",n=t.vertical?"width":"height";i[o]=`${b.value}px`,i[n]=t[n]?`${t[n]}px`:""}return i}),ie=i=>{const{active:o}=e;return i?t.loop?R(o+i,-1,a.value):R(o+i,0,D.value):o},Y=(i,o=0)=>{let n=i*l.value;t.loop||(n=Math.min(n,-m.value));let s=o-n;return t.loop||(s=R(s,m.value,0)),s},w=({pace:i=0,offset:o=0,emitChange:n})=>{if(a.value<=1)return;const{active:s}=e,g=ie(i),x=Y(g,o);if(t.loop){if(h[0]&&x!==m.value){const k=x<m.value;h[0].setOffset(k?b.value:0)}if(h[a.value-1]&&x!==0){const k=x>0;h[a.value-1].setOffset(k?-b.value:0)}}e.active=g,e.offset=x,n&&g!==s&&v("change",P.value)},j=()=>{e.swiping=!0,e.active<=-1?w({pace:a.value}):e.active>=a.value&&w({pace:-a.value})},ae=()=>{j(),c.reset(),I(()=>{e.swiping=!1,w({pace:-1,emitChange:!0})})},N=()=>{j(),c.reset(),I(()=>{e.swiping=!1,w({pace:1,emitChange:!0})})};let X;const y=()=>clearTimeout(X),S=()=>{y(),t.autoplay>0&&a.value>1&&(X=setTimeout(()=>{N(),S()},+t.autoplay))},p=(i=+t.initialSwipe)=>{var o,n;if(!!f.value){if(!ue(f)){const s={width:f.value.offsetWidth,height:f.value.offsetHeight};e.rect=s,e.width=+((o=t.width)!=null?o:s.width),e.height=+((n=t.height)!=null?n:s.height)}a.value&&(i=Math.min(a.value-1,i)),e.active=i,e.swiping=!0,e.offset=Y(i),h.forEach(s=>{s.setOffset(0)}),S()}},_=()=>p(e.active);let V;const ne=i=>{!t.touchable||(c.start(i),V=Date.now(),y(),j())},oe=i=>{t.touchable&&e.swiping&&(c.move(i),W.value&&(re(i,t.stopPropagation),w({offset:u.value})))},L=()=>{if(!t.touchable||!e.swiping)return;const i=Date.now()-V,o=u.value/i;if((Math.abs(o)>.25||Math.abs(u.value)>l.value/2)&&W.value){const s=t.vertical?c.offsetY.value:c.offsetX.value;let g=0;t.loop?g=s>0?u.value>0?-1:1:0:g=-Math[u.value>0?"ceil":"floor"](u.value/l.value),w({pace:g,emitChange:!0})}else u.value&&w({pace:0});e.swiping=!1,S()},se=(i,o={})=>{j(),c.reset(),I(()=>{let n;t.loop&&i===a.value?n=e.active===0?0:i:n=i%a.value,o.immediate?I(()=>{e.swiping=!1}):e.swiping=!1,w({pace:n-e.active,emitChange:!0})})},ce=(i,o)=>{const n=o===P.value,s=n?{backgroundColor:t.indicatorColor}:void 0;return C("i",{style:s,class:M("indicator",{active:n})},null)},le=()=>{if(r.indicator)return r.indicator({active:P.value});if(t.showIndicators&&a.value>1)return C("div",{class:M("indicators",{vertical:t.vertical})},[Array(a.value).fill("").map(ce)])};return U({prev:ae,next:N,state:e,resize:_,swipeTo:se}),O({size:l,props:t,count:a,activeIndicator:P}),T(()=>t.initialSwipe,i=>p(+i)),T(a,()=>p(e.active)),T(()=>t.autoplay,S),T([z.width,z.height],_),T(ye(),i=>{i==="visible"?S():y()}),Q(p),de(()=>p(e.active)),fe(()=>p(e.active)),he(y),me(y),()=>{var i;return C("div",{ref:f,class:M()},[C("div",{style:te.value,class:M("track",{vertical:t.vertical}),onTouchstart:ne,onTouchmove:oe,onTouchend:L,onTouchcancel:L},[(i=r.default)==null?void 0:i.call(r)]),le()])}}});const Re=K(xe),[Te,Ce]=q("swipe-item");var ze=F({name:Te,setup(t,{slots:v}){let r;const f=J({offset:0,inited:!1,mounted:!1}),{parent:e,index:c}=pe(ee);if(!e)return;const z=d(()=>{const a={},{vertical:l}=e.props;return e.size.value&&(a[l?"height":"width"]=`${e.size.value}px`),f.offset&&(a.transform=`translate${l?"Y":"X"}(${f.offset}px)`),a}),h=d(()=>{const{loop:a,lazyRender:l}=e.props;if(!l||r)return!0;if(!f.mounted)return!1;const u=e.activeIndicator.value,m=e.count.value-1,D=u===0&&a?m:u-1,b=u===m&&a?0:u+1;return r=c.value===u||c.value===D||c.value===b,r}),O=a=>{f.offset=a};return Q(()=>{we(()=>{f.mounted=!0})}),U({setOffset:O}),()=>{var a;return C("div",{class:Ce(),style:z.value},[h.value?(a=v.default)==null?void 0:a.call(v):null])}}});const Be=K(ze);export{Re as S,Be as a,be as u};
