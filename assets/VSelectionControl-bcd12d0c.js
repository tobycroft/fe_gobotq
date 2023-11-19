import{p as h,ai as w,ae as H,q as T,an as L,z as O,g as R,a as U,b0 as _,c as u,a7 as W,ba as J,d as K,C as n,e as $,h as d,aR as Q,ax as G,r as X,f as Y,i as D,O as Z,aW as p,F as ee,a0 as le,a8 as ae,ao as te,af as I,aw as oe,B as ne,bg as ue,n as ie}from"./index-0deaa98d.js";import{g as re}from"./VInput-3fbf9a7f.js";const q=Symbol.for("vuetify:selection-control-group"),E=h({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:w,trueIcon:w,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,modelValue:null,type:String,valueComparator:{type:Function,default:H},...T(),...L(),...O()},"SelectionControlGroup"),ce=h({...E({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");R()({name:"VSelectionControlGroup",props:ce(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:v}=i;const l=U(e,"modelValue"),t=_(),m=u(()=>e.id||`v-selection-control-group-${t}`),c=u(()=>e.name||m.value),a=new Set;return W(q,{modelValue:l,forceUpdate:()=>{a.forEach(o=>o())},onForceUpdate:o=>{a.add(o),J(()=>{a.delete(o)})}}),K({[e.defaultsTarget]:{color:n(e,"color"),disabled:n(e,"disabled"),density:n(e,"density"),error:n(e,"error"),inline:n(e,"inline"),modelValue:l,multiple:u(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:c,falseIcon:n(e,"falseIcon"),trueIcon:n(e,"trueIcon"),readonly:n(e,"readonly"),ripple:n(e,"ripple"),type:n(e,"type"),valueComparator:n(e,"valueComparator")}}),$(()=>{var o;return d("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(o=v.default)==null?void 0:o.call(v)])}),{}}});const se=h({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...T(),...E()},"VSelectionControl");function de(e){const i=ae(q,void 0),{densityClasses:v}=te(e),l=U(e,"modelValue"),t=u(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),m=u(()=>e.falseValue!==void 0?e.falseValue:!1),c=u(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),a=u({get(){const f=i?i.modelValue.value:l.value;return c.value?I(f).some(r=>e.valueComparator(r,t.value)):e.valueComparator(f,t.value)},set(f){if(e.readonly)return;const r=f?t.value:m.value;let s=r;c.value&&(s=f?[...I(l.value),r]:I(l.value).filter(C=>!e.valueComparator(C,t.value))),i?i.modelValue.value=s:l.value=s}}),{textColorClasses:o,textColorStyles:V}=oe(u(()=>{if(!(e.error||e.disabled))return a.value?e.color:e.baseColor})),{backgroundColorClasses:b,backgroundColorStyles:g}=ne(u(()=>a.value&&!e.error&&!e.disabled?e.color:void 0)),k=u(()=>a.value?e.trueIcon:e.falseIcon);return{group:i,densityClasses:v,trueValue:t,falseValue:m,model:a,textColorClasses:o,textColorStyles:V,backgroundColorClasses:b,backgroundColorStyles:g,icon:k}}const me=R()({name:"VSelectionControl",directives:{Ripple:Q},inheritAttrs:!1,props:se(),emits:{"update:modelValue":e=>!0},setup(e,i){let{attrs:v,slots:l}=i;const{group:t,densityClasses:m,icon:c,model:a,textColorClasses:o,textColorStyles:V,backgroundColorClasses:b,backgroundColorStyles:g,trueValue:k}=de(e),f=_(),r=u(()=>e.id||`input-${f}`),s=G(!1),C=G(!1),S=X();t==null||t.onForceUpdate(()=>{S.value&&(S.value.checked=a.value)});function x(y){s.value=!0,ue(y.target,":focus-visible")!==!1&&(C.value=!0)}function B(){s.value=!1,C.value=!1}function M(y){e.readonly&&t&&ie(()=>t.forceUpdate()),a.value=y.target.checked}return $(()=>{var A,P;const y=l.label?l.label({label:e.label,props:{for:r.value}}):e.label,[N,j]=Y(v),F=d("input",D({ref:S,checked:a.value,disabled:!!(e.readonly||e.disabled),id:r.value,onBlur:B,onFocus:x,onInput:M,"aria-disabled":!!(e.readonly||e.disabled),type:e.type,value:k.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},j),null);return d("div",D({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":s.value,"v-selection-control--focus-visible":C.value,"v-selection-control--inline":e.inline},m.value,e.class]},N,{style:e.style}),[d("div",{class:["v-selection-control__wrapper",o.value],style:V.value},[(A=l.default)==null?void 0:A.call(l,{backgroundColorClasses:b,backgroundColorStyles:g}),Z(d("div",{class:["v-selection-control__input"]},[((P=l.input)==null?void 0:P.call(l,{model:a,textColorClasses:o,textColorStyles:V,backgroundColorClasses:b,backgroundColorStyles:g,inputNode:F,icon:c.value,props:{onFocus:x,onBlur:B,id:r.value}}))??d(ee,null,[c.value&&d(le,{key:"icon",icon:c.value},null),F])]),[[p("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),y&&d(re,{for:r.value,clickable:!0,onClick:z=>z.stopPropagation()},{default:()=>[y]})])}),{isFocused:s,input:S}}});export{me as V,se as m};
