import{c as h,n as f,e as v,t as j,r as G}from"./use-translate.39547e32.js";import{w as P}from"./with-install.cc9696bc.js";import{u as p}from"./use-expose.877c018b.js";import{z as b,x as k,e as C,C as _,I as y}from"./vue-libs.71fdcafc.js";import{u as O}from"./useChildren.edf9a3d1.js";import{u as x}from"./index.a16d08bc.js";import{c as S,C as w}from"./Checker.a5655ec8.js";import{u as E}from"./useParent.e4fd6deb.js";const[V,$]=h("checkbox-group"),z={max:f,disabled:Boolean,direction:String,iconSize:f,checkedColor:String,modelValue:{type:Array,default:()=>[]}},g=Symbol(V);var Y=b({name:V,props:z,emits:["change","update:modelValue"],setup(a,{emit:l,slots:s}){const{children:o,linkChildren:i}=O(g),r=e=>l("update:modelValue",e),u=(e={})=>{typeof e=="boolean"&&(e={checked:e});const{checked:t,skipDisabled:d}=e,n=o.filter(c=>c.props.bindGroup?c.props.disabled&&d?c.checked.value:t!=null?t:!c.checked.value:!1).map(c=>c.name);r(n)};return k(()=>a.modelValue,e=>l("change",e)),p({toggleAll:u}),x(()=>a.modelValue),i({props:a,updateValue:r}),()=>{var e;return C("div",{class:$([a.direction])},[(e=s.default)==null?void 0:e.call(s)])}}});const[A,B]=h("checkbox"),I=v({},S,{bindGroup:j});var K=b({name:A,props:I,emits:["change","update:modelValue"],setup(a,{emit:l,slots:s}){const{parent:o}=E(g),i=e=>{const{name:t}=a,{max:d,modelValue:m}=o.props,n=m.slice();if(e)!(d&&n.length>=d)&&!n.includes(t)&&(n.push(t),a.bindGroup&&o.updateValue(n));else{const c=n.indexOf(t);c!==-1&&(n.splice(c,1),a.bindGroup&&o.updateValue(n))}},r=_(()=>o&&a.bindGroup?o.props.modelValue.indexOf(a.name)!==-1:!!a.modelValue),u=(e=!r.value)=>{o&&a.bindGroup?i(e):l("update:modelValue",e)};return k(()=>a.modelValue,e=>l("change",e)),p({toggle:u,props:a,checked:r}),x(()=>a.modelValue),()=>C(w,y({bem:B,role:"checkbox",parent:o,checked:r.value,onToggle:u},a),G(s,["default","icon"]))}});const q=P(K);export{q as C,Y as _};
