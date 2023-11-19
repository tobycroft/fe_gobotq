import{e as T}from"./index-d92b53cc.js";import{c as $,u as j,d as f}from"./VInput-bec78817.js";import{m as M,V}from"./VSelectionControl-ff83f286.js";import{p as q,g as E,a as g,ak as G,r as H,c as h,b0 as J,e as K,f as O,h as t,i as k,F as Q,a0 as W,al as X,j as Y}from"./index-2a22120d.js";const Z=q({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...$(),...M()},"VSwitch"),oe=E()({name:"VSwitch",inheritAttrs:!1,props:Z(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,C){let{attrs:w,slots:o}=C;const n=g(e,"indeterminate"),s=g(e,"modelValue"),{loaderClasses:y}=G(e),{isFocused:b,focus:S,blur:P}=j(e),v=H(),F=h(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),_=J(),x=h(()=>e.id||`switch-${_}`);function A(){n.value&&(n.value=!1)}function B(i){var u,r;i.stopPropagation(),i.preventDefault(),(r=(u=v.value)==null?void 0:u.input)==null||r.click()}return K(()=>{const[i,u]=O(w),r=f.filterProps(e),I=V.filterProps(e);return t(f,k({class:["v-switch",{"v-switch--inset":e.inset},{"v-switch--indeterminate":n.value},y.value,e.class]},i,r,{modelValue:s.value,"onUpdate:modelValue":d=>s.value=d,id:x.value,focused:b.value,style:e.style}),{...o,default:d=>{let{id:p,messagesId:U,isDisabled:z,isReadonly:D,isValid:L}=d;return t(V,k({ref:v},I,{modelValue:s.value,"onUpdate:modelValue":[l=>s.value=l,A],id:p.value,"aria-describedby":U.value,type:"checkbox","aria-checked":n.value?"mixed":void 0,disabled:z.value,readonly:D.value,onFocus:S,onBlur:P},u),{...o,default:l=>{let{backgroundColorClasses:c,backgroundColorStyles:a}=l;return t("div",{class:["v-switch__track",...c.value],style:a.value,onClick:B},null)},input:l=>{let{inputNode:c,icon:a,backgroundColorClasses:N,backgroundColorStyles:R}=l;return t(Q,null,[c,t("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":a||e.loading},e.inset?void 0:N.value],style:e.inset?void 0:R.value},[t(T,null,{default:()=>[e.loading?t(X,{name:"v-switch",active:!0,color:L.value===!1?void 0:F.value},{default:m=>o.loader?o.loader(m):t(Y,{active:m.isActive,color:m.color,indeterminate:!0,size:"16",width:"2"},null)}):a&&t(W,{key:a,icon:a,size:"x-small"},null)]})])])}})}})}),{}}});export{oe as V};
