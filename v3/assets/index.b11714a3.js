import{c as z,n as M,m as B,s as S,t as W,j as D,d as E,a as N}from"./use-translate.39547e32.js";import{w as T}from"./with-install.cc9696bc.js";import{c as U,r as P}from"./utils.39620306.js";import{z as _,C as R,x as L,e as o,D as p,r as G,o as O,a as I,w as F,B as e,d as V,F as H}from"./vue-libs.71fdcafc.js";import{B as j}from"./index.64adedce.js";import"./constant.4d85ecb9.js";import"./use-route.913efdd2.js";import"./index.5e447543.js";import"./index.b9a228ca.js";const[q,y]=z("circle");let J=0;const A=r=>Math.min(Math.max(+r,0),100);function K(r,s){const n=r?1:0;return`M ${s/2} ${s/2} m 0, -500 a 500, 500 0 1, ${n} 0, 1000 a 500, 500 0 1, ${n} 0, -1000`}var Q=_({name:q,props:{text:String,size:M,fill:B("none"),rate:S(100),speed:S(0),color:[String,Object],clockwise:W,layerColor:String,strokeWidth:S(40),strokeLinecap:String,startPosition:B("top"),currentRate:{type:Number,default:0}},emits:["update:currentRate"],setup(r,{emit:s,slots:n}){const m=`van-circle-${J++}`,f=R(()=>+r.strokeWidth+1e3),d=R(()=>K(r.clockwise,f.value)),x=R(()=>{const t={top:0,right:90,bottom:180,left:270}[r.startPosition];if(t)return{transform:`rotate(${t}deg)`}});L(()=>r.rate,l=>{let t;const u=Date.now(),a=r.currentRate,i=A(l),g=Math.abs((a-i)*1e3/+r.speed),k=()=>{const $=Date.now(),b=Math.min(($-u)/g,1)*(i-a)+a;s("update:currentRate",A(parseFloat(b.toFixed(1)))),(i>a?b<i:b>i)&&(t=P(k))};r.speed?(t&&U(t),t=P(k)):s("update:currentRate",i)},{immediate:!0});const C=()=>{const l=3140,{strokeWidth:t,currentRate:u,strokeLinecap:a}=r,i=l*u/100,g=E(r.color)?`url(#${m})`:r.color,k={stroke:g,strokeWidth:`${+t+1}px`,strokeLinecap:a,strokeDasharray:`${i}px ${l}px`};return o("path",{d:d.value,style:k,class:y("hover"),stroke:g},null)},v=()=>{const l={fill:r.fill,stroke:r.layerColor,strokeWidth:`${r.strokeWidth}px`};return o("path",{class:y("layer"),style:l,d:d.value},null)},h=()=>{const{color:l}=r;if(!E(l))return;const t=Object.keys(l).sort((u,a)=>parseFloat(u)-parseFloat(a)).map((u,a)=>o("stop",{key:a,offset:u,"stop-color":l[u]},null));return o("defs",null,[o("linearGradient",{id:m,x1:"100%",y1:"0%",x2:"0%",y2:"0%"},[t])])},w=()=>{if(n.default)return n.default();if(r.text)return o("div",{class:y("text")},[r.text])};return()=>o("div",{class:y(),style:D(r.size)},[o("svg",{viewBox:`0 0 ${f.value} ${f.value}`,style:x.value},[h(),v(),C()]),w()])}});const c=T(Q);const X={style:{"margin-top":"15px"}},ut=_({setup(r){const s=N({"zh-CN":{left:"\u5DE6\u4FA7",right:"\u53F3\u4FA7",bottom:"\u5E95\u90E8",gradient:"\u6E10\u53D8\u8272",customSize:"\u5927\u5C0F\u5B9A\u5236",customStyle:"\u6837\u5F0F\u5B9A\u5236",customColor:"\u989C\u8272\u5B9A\u5236",customWidth:"\u5BBD\u5EA6\u5B9A\u5236",startPosition:"\u8D77\u59CB\u4F4D\u7F6E",counterClockwise:"\u9006\u65F6\u9488"},"en-US":{left:"Left",right:"Right",bottom:"Bottom",gradient:"Gradient",customSize:"Custom Size",customStyle:"Custom Style",customColor:"Custom Color",customWidth:"Custom Width",startPosition:"Start Position",counterClockwise:"Counter Clockwise"}}),n=p(70),m=p(70),f=p(70),d=p(70),x=p(70),C={"0%":"#3fecff","100%":"#6149f6"},v=l=>Math.min(Math.max(l,0),100),h=()=>{n.value=v(n.value+20)},w=()=>{n.value=v(n.value-20)};return(l,t)=>{const u=G("demo-block");return O(),I(H,null,[o(u,{title:e(s)("basicUsage")},{default:F(()=>[o(e(c),{"current-rate":m.value,"onUpdate:current-rate":t[0]||(t[0]=a=>m.value=a),rate:n.value,speed:100,text:m.value.toFixed(0)+"%"},null,8,["current-rate","rate","text"])]),_:1},8,["title"]),o(u,{title:e(s)("customStyle")},{default:F(()=>[o(e(c),{"current-rate":d.value,"onUpdate:current-rate":t[1]||(t[1]=a=>d.value=a),rate:n.value,speed:100,"stroke-width":60,text:e(s)("customWidth")},null,8,["current-rate","rate","text"]),o(e(c),{"current-rate":d.value,"onUpdate:current-rate":t[2]||(t[2]=a=>d.value=a),color:"#ee0a24",rate:n.value,"layer-color":"#ebedf0",speed:100,text:e(s)("customColor")},null,8,["current-rate","rate","text"]),o(e(c),{"current-rate":f.value,"onUpdate:current-rate":t[3]||(t[3]=a=>f.value=a),rate:n.value,speed:100,color:C,text:e(s)("gradient")},null,8,["current-rate","rate","text"]),o(e(c),{"current-rate":x.value,"onUpdate:current-rate":t[4]||(t[4]=a=>x.value=a),color:"#07c160",rate:n.value,speed:100,clockwise:!1,text:e(s)("counterClockwise"),style:{"margin-top":"15px"}},null,8,["current-rate","rate","text"]),o(e(c),{"current-rate":x.value,"onUpdate:current-rate":t[5]||(t[5]=a=>x.value=a),color:"#7232dd",rate:n.value,speed:100,size:"120px",clockwise:!1,text:e(s)("customSize"),style:{"margin-top":"15px"}},null,8,["current-rate","rate","text"])]),_:1},8,["title"]),V("div",X,[o(e(j),{text:e(s)("add"),type:"primary",size:"small",onClick:h},null,8,["text"]),o(e(j),{text:e(s)("decrease"),type:"danger",size:"small",onClick:w},null,8,["text"])]),o(u,{title:e(s)("startPosition")},{default:F(()=>[o(e(c),{"current-rate":75,rate:n.value,text:e(s)("left"),"start-position":"left"},null,8,["rate","text"]),o(e(c),{"current-rate":75,rate:n.value,text:e(s)("right"),"start-position":"right"},null,8,["rate","text"]),o(e(c),{"current-rate":75,rate:n.value,text:e(s)("bottom"),"start-position":"bottom"},null,8,["rate","text"])]),_:1},8,["title"])],64)}}});export{ut as default};
