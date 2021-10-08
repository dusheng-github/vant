import{A as g,a as r,b as l}from"./index.975c4ad5.js";import{c as j,e as k,n as I,u as A,a as h}from"./use-translate.39547e32.js";import{w as y}from"./with-install.cc9696bc.js";import{r as E,u as F}from"./use-route.913efdd2.js";import{B as D,I as w}from"./index.5e447543.js";import{u as v}from"./useParent.e4fd6deb.js";import{z as f,e as n,A as P,r as S,o as N,a as T,w as c,B as t,F as z}from"./vue-libs.71fdcafc.js";import{T as b}from"./function-call.025b6196.js";import"./useChildren.edf9a3d1.js";import"./use-expose.877c018b.js";import"./index.64adedce.js";import"./constant.4d85ecb9.js";import"./index.b9a228ca.js";import"./mount-component.a2b5841e.js";import"./index.760aa272.js";import"./interceptor.33314343.js";import"./use-touch.30351383.js";import"./index.92de2fdc.js";import"./utils.39620306.js";import"./index.c1e8d10d.js";import"./use-lazy-render.3dcfda58.js";import"./on-popup-reopen.d7054786.js";import"./index.0ff7945f.js";function O(u){return typeof u=="function"||Object.prototype.toString.call(u)==="[object Object]"&&!P(u)}const[R,m]=j("action-bar-icon");var U=f({name:R,props:k({},E,{dot:Boolean,text:String,icon:String,color:String,badge:I,iconClass:A,iconPrefix:String}),setup(u,{slots:o}){const a=F();v(g);const s=()=>{const{dot:d,badge:x,icon:i,color:B,iconClass:C,iconPrefix:_}=u;if(o.icon){let p;return n(D,{dot:d,content:x,class:m("icon")},O(p=o.icon())?p:{default:()=>[p]})}return n(w,{tag:"div",dot:d,name:i,badge:x,color:B,class:[m("icon"),C],classPrefix:_},null)};return()=>n("div",{role:"button",class:m(),tabindex:0,onClick:a},[s(),o.default?o.default():u.text])}});const e=y(U);const rt=f({setup(u){const o=h({"zh-CN":{icon1:"\u5BA2\u670D",icon2:"\u8D2D\u7269\u8F66",icon3:"\u5E97\u94FA",button1:"\u52A0\u5165\u8D2D\u7269\u8F66",button2:"\u7ACB\u5373\u8D2D\u4E70",iconBadge:"\u5FBD\u6807\u63D0\u793A",collected:"\u5DF2\u6536\u85CF",clickIcon:"\u70B9\u51FB\u56FE\u6807",clickButton:"\u70B9\u51FB\u6309\u94AE",customIconColor:"\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272",customButtonColor:"\u81EA\u5B9A\u4E49\u6309\u94AE\u989C\u8272"},"en-US":{icon1:"Icon1",icon2:"Icon2",icon3:"Icon3",button1:"Button",button2:"Button",iconBadge:"Icon Badge",collected:"Collected",clickIcon:"Click Icon",clickButton:"Click Button",customIconColor:"Custom Icon Color",customButtonColor:"Custom Button Color"}}),a=()=>b(o("clickIcon")),s=()=>b(o("clickButton"));return(d,x)=>{const i=S("demo-block");return N(),T(z,null,[n(i,{title:t(o)("basicUsage")},{default:c(()=>[n(t(r),null,{default:c(()=>[n(t(e),{icon:"chat-o",text:t(o)("icon1"),onClick:a},null,8,["text"]),n(t(e),{icon:"cart-o",text:t(o)("icon2"),onClick:a},null,8,["text"]),n(t(e),{icon:"shop-o",text:t(o)("icon3"),onClick:a},null,8,["text"]),n(t(l),{type:"danger",text:t(o)("button2"),onClick:s},null,8,["text"])]),_:1})]),_:1},8,["title"]),n(i,{title:t(o)("iconBadge")},{default:c(()=>[n(t(r),null,{default:c(()=>[n(t(e),{icon:"chat-o",dot:"",text:t(o)("icon1")},null,8,["text"]),n(t(e),{icon:"cart-o",badge:"5",text:t(o)("icon2")},null,8,["text"]),n(t(e),{icon:"shop-o",badge:"12",text:t(o)("icon3")},null,8,["text"]),n(t(l),{type:"warning",text:t(o)("button1")},null,8,["text"]),n(t(l),{type:"danger",text:t(o)("button2")},null,8,["text"])]),_:1})]),_:1},8,["title"]),n(i,{title:t(o)("customIconColor")},{default:c(()=>[n(t(r),null,{default:c(()=>[n(t(e),{icon:"chat-o",text:t(o)("icon1"),color:"#ee0a24"},null,8,["text"]),n(t(e),{icon:"cart-o",text:t(o)("icon2")},null,8,["text"]),n(t(e),{icon:"star",text:t(o)("collected"),color:"#ff5000"},null,8,["text"]),n(t(l),{type:"warning",text:t(o)("button1")},null,8,["text"]),n(t(l),{type:"danger",text:t(o)("button2")},null,8,["text"])]),_:1})]),_:1},8,["title"]),n(i,{title:t(o)("customButtonColor")},{default:c(()=>[n(t(r),null,{default:c(()=>[n(t(e),{icon:"chat-o",text:t(o)("icon1")},null,8,["text"]),n(t(e),{icon:"cart-o",text:t(o)("icon2")},null,8,["text"]),n(t(l),{color:"#be99ff",type:"warning",text:t(o)("button1")},null,8,["text"]),n(t(l),{color:"#7232dd",type:"danger",text:t(o)("button2")},null,8,["text"])]),_:1})]),_:1},8,["title"])],64)}}});export{rt as default};
