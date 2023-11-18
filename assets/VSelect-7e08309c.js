import{m as At,V as $e}from"./VTextField-ac966e24.js";import{p as R,q as ee,z as de,g as j,A as ve,au as qe,C as M,c as b,ab as se,e as W,h as u,ai as z,a as ie,as as fe,i as q,ae as We,az as xt,y as ue,aM as Se,aC as Bt,d as Xe,am as he,l as Pe,an as Ae,s as xe,aN as Tt,x as Be,aO as Ye,aP as Lt,aQ as Qe,b as Ze,D as Te,aR as Je,ao as Le,E as Oe,I as De,aS as Ot,aT as Dt,aU as et,O as ge,aV as tt,aW as nt,a0 as le,aX as Z,P as lt,F as J,aY as pe,a8 as me,av as K,a7 as ye,aZ as re,r as N,a_ as at,aq as it,a$ as ot,b0 as _t,b1 as Mt,U as st,m as _e,w as ae,u as Me,b2 as Ft,ap as Q,B as Rt,k as Ce,b3 as Et,b4 as ut,b5 as $t,b6 as Ne,V as Ge,b7 as rt,n as ct,aF as Ke,b8 as Nt,aD as dt,aB as Gt,a6 as Ue,b9 as vt,a9 as ke,ba as Kt,aE as ft,bb as Ut,aK as Ht,bc as jt,bd as zt,be as qt,S as Wt,af as Xt,bf as He}from"./index-7b18db42.js";import{b as Yt}from"./VInput-d9476373.js";import{c as Qt,d as Zt}from"./index-5ee1173a.js";import{u as Jt}from"./ssrBoot-3d60f2d3.js";import{m as en,V as je}from"./VSelectionControl-9aeb4273.js";const tn=R({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...ee(),...de()},"VDivider"),nn=j()({name:"VDivider",props:tn(),setup(e,i){let{attrs:t}=i;const{themeClasses:n}=ve(e),{textColorClasses:l,textColorStyles:a}=qe(M(e,"color")),s=b(()=>{const o={};return e.length&&(o[e.vertical?"maxHeight":"maxWidth"]=se(e.length)),e.thickness&&(o[e.vertical?"borderRightWidth":"borderTopWidth"]=se(e.thickness)),o});return W(()=>u("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},n.value,l.value,e.class],style:[s.value,a.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});const ln=R({indeterminate:Boolean,indeterminateIcon:{type:z,default:"$checkboxIndeterminate"},...en({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),an=j()({name:"VCheckboxBtn",props:ln(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,i){let{slots:t}=i;const n=ie(e,"indeterminate"),l=ie(e,"modelValue");function a(r){n.value&&(n.value=!1)}const s=b(()=>n.value?e.indeterminateIcon:e.falseIcon),o=b(()=>n.value?e.indeterminateIcon:e.trueIcon);return W(()=>{const r=fe(je.filterProps(e),["modelValue"]);return u(je,q(r,{modelValue:l.value,"onUpdate:modelValue":[h=>l.value=h,a],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:s.value,trueIcon:o.value,"aria-checked":n.value?"mixed":void 0}),t)}),{}}});const mt=Symbol.for("vuetify:v-chip-group"),on=R({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:We},...ee(),...xt({selectedClass:"v-chip--selected"}),...ue(),...de(),...Se({variant:"tonal"})},"VChipGroup");j()({name:"VChipGroup",props:on(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:t}=i;const{themeClasses:n}=ve(e),{isSelected:l,select:a,next:s,prev:o,selected:r}=Bt(e,mt);return Xe({VChip:{color:M(e,"color"),disabled:M(e,"disabled"),filter:M(e,"filter"),variant:M(e,"variant")}}),W(()=>u(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},n.value,e.class],style:e.style},{default:()=>{var h;return[(h=t.default)==null?void 0:h.call(t,{isSelected:l,select:a,next:s,prev:o,selected:r.value})]}})),{}}});const sn=R({activeClass:String,appendAvatar:String,appendIcon:z,closable:Boolean,closeIcon:{type:z,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:z,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:he(),onClickOnce:he(),...Pe(),...ee(),...Ae(),...xe(),...Tt(),...Be(),...Ye(),...Lt(),...ue({tag:"span"}),...de(),...Se({variant:"tonal"})},"VChip"),un=j()({name:"VChip",directives:{Ripple:Qe},props:sn(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,i){let{attrs:t,emit:n,slots:l}=i;const{t:a}=Ze(),{borderClasses:s}=Te(e),{colorClasses:o,colorStyles:r,variantClasses:h}=Je(e),{densityClasses:V}=Le(e),{elevationClasses:v}=Oe(e),{roundedClasses:c}=De(e),{sizeClasses:m}=Ot(e),{themeClasses:y}=ve(e),f=ie(e,"modelValue"),d=Dt(e,mt,!1),p=et(e,t),I=b(()=>e.link!==!1&&p.isLink.value),P=b(()=>!e.disabled&&e.link!==!1&&(!!d||e.link||p.isClickable.value)),F=b(()=>({"aria-label":a(e.closeLabel),onClick(A){A.stopPropagation(),f.value=!1,n("click:close",A)}}));function $(A){var D;n("click",A),P.value&&((D=p.navigate)==null||D.call(p,A),d==null||d.toggle())}function X(A){(A.key==="Enter"||A.key===" ")&&(A.preventDefault(),$(A))}return()=>{const A=p.isLink.value?"a":e.tag,D=!!(e.appendIcon||e.appendAvatar),T=!!(D||l.append),U=!!(l.close||e.closable),H=!!(l.filter||e.filter)&&d,te=!!(e.prependIcon||e.prependAvatar),oe=!!(te||l.prepend),Y=!d||d.isSelected.value;return f.value&&ge(u(A,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":P.value,"v-chip--filter":H,"v-chip--pill":e.pill},y.value,s.value,Y?o.value:void 0,V.value,v.value,c.value,m.value,h.value,d==null?void 0:d.selectedClass.value,e.class],style:[Y?r.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:p.href.value,tabindex:P.value?0:void 0,onClick:$,onKeydown:P.value&&!I.value&&X},{default:()=>{var G;return[nt(P.value,"v-chip"),H&&u(Qt,{key:"filter"},{default:()=>[ge(u("div",{class:"v-chip__filter"},[l.filter?u(Z,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},l.filter):u(le,{key:"filter-icon",icon:e.filterIcon},null)]),[[lt,d.isSelected.value]])]}),oe&&u("div",{key:"prepend",class:"v-chip__prepend"},[l.prepend?u(Z,{key:"prepend-defaults",disabled:!te,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},l.prepend):u(J,null,[e.prependIcon&&u(le,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&u(pe,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),u("div",{class:"v-chip__content"},[((G=l.default)==null?void 0:G.call(l,{isSelected:d==null?void 0:d.isSelected.value,selectedClass:d==null?void 0:d.selectedClass.value,select:d==null?void 0:d.select,toggle:d==null?void 0:d.toggle,value:d==null?void 0:d.value.value,disabled:e.disabled}))??e.text]),T&&u("div",{key:"append",class:"v-chip__append"},[l.append?u(Z,{key:"append-defaults",disabled:!D,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},l.append):u(J,null,[e.appendIcon&&u(le,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&u(pe,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),U&&u("div",q({key:"close",class:"v-chip__close"},F.value),[l.close?u(Z,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},l.close):u(le,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[tt("ripple"),P.value&&e.ripple,null]])}}});const Ie=Symbol.for("vuetify:list");function yt(){const e=me(Ie,{hasPrepend:K(!1),updateHasPrepend:()=>null}),i={hasPrepend:K(!1),updateHasPrepend:t=>{t&&(i.hasPrepend.value=t)}};return ye(Ie,i),e}function ht(){return me(Ie,null)}const rn={open:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(t){const a=new Set;a.add(i);let s=l.get(i);for(;s!=null;)a.add(s),s=l.get(s);return a}else return n.delete(i),n},select:()=>null},gt={open:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(t){let a=l.get(i);for(n.add(i);a!=null&&a!==i;)n.add(a),a=l.get(a);return n}else n.delete(i);return n},select:()=>null},cn={open:gt.open,select:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(!t)return n;const a=[];let s=l.get(i);for(;s!=null;)a.push(s),s=l.get(s);return new Set(a)}},Fe=e=>{const i={select:t=>{let{id:n,value:l,selected:a}=t;if(n=re(n),e&&!l){const s=Array.from(a.entries()).reduce((o,r)=>{let[h,V]=r;return V==="on"?[...o,h]:o},[]);if(s.length===1&&s[0]===n)return a}return a.set(n,l?"on":"off"),a},in:(t,n,l)=>{let a=new Map;for(const s of t||[])a=i.select({id:s,value:!0,selected:new Map(a),children:n,parents:l});return a},out:t=>{const n=[];for(const[l,a]of t.entries())a==="on"&&n.push(l);return n}};return i},pt=e=>{const i=Fe(e);return{select:n=>{let{selected:l,id:a,...s}=n;a=re(a);const o=l.has(a)?new Map([[a,l.get(a)]]):new Map;return i.select({...s,id:a,selected:o})},in:(n,l,a)=>{let s=new Map;return n!=null&&n.length&&(s=i.in(n.slice(0,1),l,a)),s},out:(n,l,a)=>i.out(n,l,a)}},dn=e=>{const i=Fe(e);return{select:n=>{let{id:l,selected:a,children:s,...o}=n;return l=re(l),s.has(l)?a:i.select({id:l,selected:a,children:s,...o})},in:i.in,out:i.out}},vn=e=>{const i=pt(e);return{select:n=>{let{id:l,selected:a,children:s,...o}=n;return l=re(l),s.has(l)?a:i.select({id:l,selected:a,children:s,...o})},in:i.in,out:i.out}},fn=e=>{const i={select:t=>{let{id:n,value:l,selected:a,children:s,parents:o}=t;n=re(n);const r=new Map(a),h=[n];for(;h.length;){const v=h.shift();a.set(v,l?"on":"off"),s.has(v)&&h.push(...s.get(v))}let V=o.get(n);for(;V;){const v=s.get(V),c=v.every(y=>a.get(y)==="on"),m=v.every(y=>!a.has(y)||a.get(y)==="off");a.set(V,c?"on":m?"off":"indeterminate"),V=o.get(V)}return e&&!l&&Array.from(a.entries()).reduce((c,m)=>{let[y,f]=m;return f==="on"?[...c,y]:c},[]).length===0?r:a},in:(t,n,l)=>{let a=new Map;for(const s of t||[])a=i.select({id:s,value:!0,selected:new Map(a),children:n,parents:l});return a},out:(t,n)=>{const l=[];for(const[a,s]of t.entries())s==="on"&&!n.has(a)&&l.push(a);return l}};return i},ce=Symbol.for("vuetify:nested"),bt={id:K(),root:{register:()=>null,unregister:()=>null,parents:N(new Map),children:N(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:N(new Set),selected:N(new Map),selectedValues:N([])}},mn=R({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),yn=e=>{let i=!1;const t=N(new Map),n=N(new Map),l=ie(e,"opened",e.opened,v=>new Set(v),v=>[...v.values()]),a=b(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return vn(e.mandatory);case"leaf":return dn(e.mandatory);case"independent":return Fe(e.mandatory);case"single-independent":return pt(e.mandatory);case"classic":default:return fn(e.mandatory)}}),s=b(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return cn;case"single":return rn;case"multiple":default:return gt}}),o=ie(e,"selected",e.selected,v=>a.value.in(v,t.value,n.value),v=>a.value.out(v,t.value,n.value));at(()=>{i=!0});function r(v){const c=[];let m=v;for(;m!=null;)c.unshift(m),m=n.value.get(m);return c}const h=it("nested"),V={id:K(),root:{opened:l,selected:o,selectedValues:b(()=>{const v=[];for(const[c,m]of o.value.entries())m==="on"&&v.push(c);return v}),register:(v,c,m)=>{c&&v!==c&&n.value.set(v,c),m&&t.value.set(v,[]),c!=null&&t.value.set(c,[...t.value.get(c)||[],v])},unregister:v=>{if(i)return;t.value.delete(v);const c=n.value.get(v);if(c){const m=t.value.get(c)??[];t.value.set(c,m.filter(y=>y!==v))}n.value.delete(v),l.value.delete(v)},open:(v,c,m)=>{h.emit("click:open",{id:v,value:c,path:r(v),event:m});const y=s.value.open({id:v,value:c,opened:new Set(l.value),children:t.value,parents:n.value,event:m});y&&(l.value=y)},openOnSelect:(v,c,m)=>{const y=s.value.select({id:v,value:c,selected:new Map(o.value),opened:new Set(l.value),children:t.value,parents:n.value,event:m});y&&(l.value=y)},select:(v,c,m)=>{h.emit("click:select",{id:v,value:c,path:r(v),event:m});const y=a.value.select({id:v,value:c,selected:new Map(o.value),children:t.value,parents:n.value,event:m});y&&(o.value=y),V.root.openOnSelect(v,c,m)},children:t,parents:n}};return ye(ce,V),V.root},St=(e,i)=>{const t=me(ce,bt),n=Symbol(ot()),l=b(()=>e.value!==void 0?e.value:n),a={...t,id:l,open:(s,o)=>t.root.open(l.value,s,o),openOnSelect:(s,o)=>t.root.openOnSelect(l.value,s,o),isOpen:b(()=>t.root.opened.value.has(l.value)),parent:b(()=>t.root.parents.value.get(l.value)),select:(s,o)=>t.root.select(l.value,s,o),isSelected:b(()=>t.root.selected.value.get(re(l.value))==="on"),isIndeterminate:b(()=>t.root.selected.value.get(l.value)==="indeterminate"),isLeaf:b(()=>!t.root.children.value.get(l.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(l.value,t.id.value,i),at(()=>{!t.isGroupActivator&&t.root.unregister(l.value)}),i&&ye(ce,a),a},hn=()=>{const e=me(ce,bt);ye(ce,{...e,isGroupActivator:!0})},gn=_t({name:"VListGroupActivator",setup(e,i){let{slots:t}=i;return hn(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),pn=R({activeColor:String,baseColor:String,color:String,collapseIcon:{type:z,default:"$collapse"},expandIcon:{type:z,default:"$expand"},prependIcon:z,appendIcon:z,fluid:Boolean,subgroup:Boolean,title:String,value:null,...ee(),...ue()},"VListGroup"),ze=j()({name:"VListGroup",props:pn(),setup(e,i){let{slots:t}=i;const{isOpen:n,open:l,id:a}=St(M(e,"value"),!0),s=b(()=>`v-list-group--id-${String(a.value)}`),o=ht(),{isBooted:r}=Jt();function h(m){l(!n.value,m)}const V=b(()=>({onClick:h,class:"v-list-group__header",id:s.value})),v=b(()=>n.value?e.collapseIcon:e.expandIcon),c=b(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&v.value,appendIcon:e.appendIcon||!e.subgroup&&v.value,title:e.title,value:e.value}}));return W(()=>u(e.tag,{class:["v-list-group",{"v-list-group--prepend":o==null?void 0:o.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&u(Z,{defaults:c.value},{default:()=>[u(gn,null,{default:()=>[t.activator({props:V.value,isOpen:n.value})]})]}),u(Mt,{transition:{component:Zt},disabled:!r.value},{default:()=>{var m;return[ge(u("div",{class:"v-list-group__items",role:"group","aria-labelledby":s.value},[(m=t.default)==null?void 0:m.call(t)]),[[lt,n.value]])]}})]})),{}}});const bn=st("v-list-item-subtitle"),Sn=st("v-list-item-title"),kn=R({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:z,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:z,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:he(),onClickOnce:he(),...Pe(),...ee(),...Ae(),..._e(),...xe(),...Be(),...Ye(),...ue(),...de(),...Se({variant:"text"})},"VListItem"),be=j()({name:"VListItem",directives:{Ripple:Qe},props:kn(),emits:{click:e=>!0},setup(e,i){let{attrs:t,slots:n,emit:l}=i;const a=et(e,t),s=b(()=>e.value===void 0?a.href.value:e.value),{select:o,isSelected:r,isIndeterminate:h,isGroupActivator:V,root:v,parent:c,openOnSelect:m}=St(s,!1),y=ht(),f=b(()=>{var C;return e.active!==!1&&(e.active||((C=a.isActive)==null?void 0:C.value)||r.value)}),d=b(()=>e.link!==!1&&a.isLink.value),p=b(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||e.value!=null&&!!y)),I=b(()=>e.rounded||e.nav),P=b(()=>e.color??e.activeColor),F=b(()=>({color:f.value?P.value??e.baseColor:e.baseColor,variant:e.variant}));ae(()=>{var C;return(C=a.isActive)==null?void 0:C.value},C=>{C&&c.value!=null&&v.open(c.value,!0),C&&m(C)},{immediate:!0});const{themeClasses:$}=ve(e),{borderClasses:X}=Te(e),{colorClasses:A,colorStyles:D,variantClasses:T}=Je(F),{densityClasses:U}=Le(e),{dimensionStyles:H}=Me(e),{elevationClasses:te}=Oe(e),{roundedClasses:oe}=De(I),Y=b(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),G=b(()=>({isActive:f.value,select:o,isSelected:r.value,isIndeterminate:h.value}));function g(C){var S;l("click",C),!(V||!p.value)&&((S=a.navigate)==null||S.call(a,C),e.value!=null&&o(!r.value,C))}function w(C){(C.key==="Enter"||C.key===" ")&&(C.preventDefault(),g(C))}return W(()=>{const C=d.value?"a":e.tag,S=n.title||e.title,x=n.subtitle||e.subtitle,k=!!(e.appendAvatar||e.appendIcon),B=!!(k||n.append),L=!!(e.prependAvatar||e.prependIcon),_=!!(L||n.prepend);return y==null||y.updateHasPrepend(_),e.activeColor&&Ft("active-color",["color","base-color"]),ge(u(C,{class:["v-list-item",{"v-list-item--active":f.value,"v-list-item--disabled":e.disabled,"v-list-item--link":p.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!_&&(y==null?void 0:y.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&f.value},$.value,X.value,A.value,U.value,te.value,Y.value,oe.value,T.value,e.class],style:[D.value,H.value,e.style],href:a.href.value,tabindex:p.value?y?-2:0:void 0,onClick:g,onKeydown:p.value&&!d.value&&w},{default:()=>{var E;return[nt(p.value||f.value,"v-list-item"),_&&u("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?u(Z,{key:"prepend-defaults",disabled:!L,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var O;return[(O=n.prepend)==null?void 0:O.call(n,G.value)]}}):u(J,null,[e.prependAvatar&&u(pe,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&u(le,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),u("div",{class:"v-list-item__spacer"},null)]),u("div",{class:"v-list-item__content","data-no-activator":""},[S&&u(Sn,{key:"title"},{default:()=>{var O;return[((O=n.title)==null?void 0:O.call(n,{title:e.title}))??e.title]}}),x&&u(bn,{key:"subtitle"},{default:()=>{var O;return[((O=n.subtitle)==null?void 0:O.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(E=n.default)==null?void 0:E.call(n,G.value)]),B&&u("div",{key:"append",class:"v-list-item__append"},[n.append?u(Z,{key:"append-defaults",disabled:!k,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var O;return[(O=n.append)==null?void 0:O.call(n,G.value)]}}):u(J,null,[e.appendIcon&&u(le,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&u(pe,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),u("div",{class:"v-list-item__spacer"},null)])]}}),[[tt("ripple"),p.value&&e.ripple]])}),{}}}),Vn=R({color:String,inset:Boolean,sticky:Boolean,title:String,...ee(),...ue()},"VListSubheader"),Cn=j()({name:"VListSubheader",props:Vn(),setup(e,i){let{slots:t}=i;const{textColorClasses:n,textColorStyles:l}=qe(M(e,"color"));return W(()=>{const a=!!(t.default||e.title);return u(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:l},e.style]},{default:()=>{var s;return[a&&u("div",{class:"v-list-subheader__text"},[((s=t.default)==null?void 0:s.call(t))??e.title])]}})}),{}}}),In=R({items:Array,returnObject:Boolean},"VListChildren"),kt=j()({name:"VListChildren",props:In(),setup(e,i){let{slots:t}=i;return yt(),()=>{var n,l;return((n=t.default)==null?void 0:n.call(t))??((l=e.items)==null?void 0:l.map(a=>{var c,m;let{children:s,props:o,type:r,raw:h}=a;if(r==="divider")return((c=t.divider)==null?void 0:c.call(t,{props:o}))??u(nn,o,null);if(r==="subheader")return((m=t.subheader)==null?void 0:m.call(t,{props:o}))??u(Cn,o,null);const V={subtitle:t.subtitle?y=>{var f;return(f=t.subtitle)==null?void 0:f.call(t,{...y,item:h})}:void 0,prepend:t.prepend?y=>{var f;return(f=t.prepend)==null?void 0:f.call(t,{...y,item:h})}:void 0,append:t.append?y=>{var f;return(f=t.append)==null?void 0:f.call(t,{...y,item:h})}:void 0,title:t.title?y=>{var f;return(f=t.title)==null?void 0:f.call(t,{...y,item:h})}:void 0},v=ze.filterProps(o);return s?u(ze,q({value:o==null?void 0:o.value},v),{activator:y=>{let{props:f}=y;const d={...o,...f,value:e.returnObject?h:o.value};return t.header?t.header({props:d}):u(be,d,V)},default:()=>u(kt,{items:s},t)}):t.item?t.item({props:o}):u(be,q(o,{value:e.returnObject?h:o.value}),V)}))}}}),Vt=R({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:We}},"list-items");function we(e,i){const t=Q(i,e.itemTitle,i),n=Q(i,e.itemValue,t),l=Q(i,e.itemChildren),a=e.itemProps===!0?typeof i=="object"&&i!=null&&!Array.isArray(i)?"children"in i?fe(i,["children"]):i:void 0:Q(i,e.itemProps),s={title:t,value:n,...a};return{title:String(s.title??""),value:s.value,props:s,children:Array.isArray(l)?Ct(e,l):void 0,raw:i}}function Ct(e,i){const t=[];for(const n of i)t.push(we(e,n));return t}function wn(e){const i=b(()=>Ct(e,e.items)),t=b(()=>i.value.some(a=>a.value===null));function n(a){return t.value||(a=a.filter(s=>s!==null)),a.map(s=>e.returnObject&&typeof s=="string"?we(e,s):i.value.find(o=>e.valueComparator(s,o.value))||we(e,s))}function l(a){return e.returnObject?a.map(s=>{let{raw:o}=s;return o}):a.map(s=>{let{value:o}=s;return o})}return{items:i,transformIn:n,transformOut:l}}function Pn(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function An(e,i){const t=Q(i,e.itemType,"item"),n=Pn(i)?i:Q(i,e.itemTitle),l=Q(i,e.itemValue,void 0),a=Q(i,e.itemChildren),s=e.itemProps===!0?fe(i,["children"]):Q(i,e.itemProps),o={title:n,value:l,...s};return{type:t,title:o.title,value:o.value,props:o,children:t==="item"&&a?It(e,a):void 0,raw:i}}function It(e,i){const t=[];for(const n of i)t.push(An(e,n));return t}function xn(e){return{items:b(()=>It(e,e.items))}}const Bn=R({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,...mn({selectStrategy:"single-leaf",openStrategy:"list"}),...Pe(),...ee(),...Ae(),..._e(),...xe(),itemType:{type:String,default:"type"},...Vt(),...Be(),...ue(),...de(),...Se({variant:"text"})},"VList"),Tn=j()({name:"VList",props:Bn(),emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,i){let{slots:t}=i;const{items:n}=xn(e),{themeClasses:l}=ve(e),{backgroundColorClasses:a,backgroundColorStyles:s}=Rt(M(e,"bgColor")),{borderClasses:o}=Te(e),{densityClasses:r}=Le(e),{dimensionStyles:h}=Me(e),{elevationClasses:V}=Oe(e),{roundedClasses:v}=De(e),{open:c,select:m}=yn(e),y=b(()=>e.lines?`v-list--${e.lines}-line`:void 0),f=M(e,"activeColor"),d=M(e,"baseColor"),p=M(e,"color");yt(),Xe({VListGroup:{activeColor:f,baseColor:d,color:p},VListItem:{activeClass:M(e,"activeClass"),activeColor:f,baseColor:d,color:p,density:M(e,"density"),disabled:M(e,"disabled"),lines:M(e,"lines"),nav:M(e,"nav"),slim:M(e,"slim"),variant:M(e,"variant")}});const I=K(!1),P=N();function F(T){I.value=!0}function $(T){I.value=!1}function X(T){var U;!I.value&&!(T.relatedTarget&&((U=P.value)!=null&&U.contains(T.relatedTarget)))&&D()}function A(T){if(P.value){if(T.key==="ArrowDown")D("next");else if(T.key==="ArrowUp")D("prev");else if(T.key==="Home")D("first");else if(T.key==="End")D("last");else return;T.preventDefault()}}function D(T){if(P.value)return Ce(P.value,T)}return W(()=>u(e.tag,{ref:P,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},l.value,a.value,o.value,r.value,V.value,y.value,v.value,e.class],style:[s.value,h.value,e.style],tabindex:e.disabled||I.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:F,onFocusout:$,onFocus:X,onKeydown:A},{default:()=>[u(kt,{items:n.value,returnObject:e.returnObject},t)]})),{open:c,select:m,focus:D}}});const Ln=R({id:String,...fe(Et({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:ut}}),["absolute"])},"VMenu"),On=j()({name:"VMenu",props:Ln(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:t}=i;const n=ie(e,"modelValue"),{scopeId:l}=$t(),a=ot(),s=b(()=>e.id||`v-menu-${a}`),o=N(),r=me(Ne,null),h=K(0);ye(Ne,{register(){++h.value},unregister(){--h.value},closeParents(){setTimeout(()=>{h.value||(n.value=!1,r==null||r.closeParents())},40)}});async function V(f){var I,P,F;const d=f.relatedTarget,p=f.target;await ct(),n.value&&d!==p&&((I=o.value)!=null&&I.contentEl)&&((P=o.value)!=null&&P.globalTop)&&![document,o.value.contentEl].includes(p)&&!o.value.contentEl.contains(p)&&((F=Ke(o.value.contentEl)[0])==null||F.focus())}ae(n,f=>{f?(r==null||r.register(),document.addEventListener("focusin",V,{once:!0})):(r==null||r.unregister(),document.removeEventListener("focusin",V))});function v(){r==null||r.closeParents()}function c(f){var d,p,I;e.disabled||f.key==="Tab"&&(Nt(Ke((d=o.value)==null?void 0:d.contentEl,!1),f.shiftKey?"prev":"next",F=>F.tabIndex>=0)||(n.value=!1,(I=(p=o.value)==null?void 0:p.activatorEl)==null||I.focus()))}function m(f){var p;if(e.disabled)return;const d=(p=o.value)==null?void 0:p.contentEl;d&&n.value?f.key==="ArrowDown"?(f.preventDefault(),Ce(d,"next")):f.key==="ArrowUp"&&(f.preventDefault(),Ce(d,"prev")):["ArrowDown","ArrowUp"].includes(f.key)&&(n.value=!0,f.preventDefault(),setTimeout(()=>setTimeout(()=>m(f))))}const y=b(()=>q({"aria-haspopup":"menu","aria-expanded":String(n.value),"aria-owns":s.value,onKeydown:m},e.activatorProps));return W(()=>{const f=Ge.filterProps(e);return u(Ge,q({ref:o,class:["v-menu",e.class],style:e.style},f,{modelValue:n.value,"onUpdate:modelValue":d=>n.value=d,absolute:!0,activatorProps:y.value,"onClick:outside":v,onKeydown:c},l),{activator:t.activator,default:function(){for(var d=arguments.length,p=new Array(d),I=0;I<d;I++)p[I]=arguments[I];return u(Z,{root:"VMenu"},{default:()=>{var P;return[(P=t.default)==null?void 0:P.call(t,...p)]}})}})}),rt({id:s,ΨopenChildren:h},o)}});const Dn=R({renderless:Boolean,...ee()},"VVirtualScrollItem"),_n=j()({name:"VVirtualScrollItem",inheritAttrs:!1,props:Dn(),emits:{"update:height":e=>!0},setup(e,i){let{attrs:t,emit:n,slots:l}=i;const{resizeRef:a,contentRect:s}=dt(void 0,"border");ae(()=>{var o;return(o=s.value)==null?void 0:o.height},o=>{o!=null&&n("update:height",o)}),W(()=>{var o,r;return e.renderless?u(J,null,[(o=l.default)==null?void 0:o.call(l,{itemRef:a})]):u("div",q({ref:a,class:["v-virtual-scroll__item",e.class],style:e.style},t),[(r=l.default)==null?void 0:r.call(l)])})}}),Mn=-1,Fn=1,Ve=100,Rn=R({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function En(e,i){const t=Gt(),n=K(0);Ue(()=>{n.value=parseFloat(e.itemHeight||0)});const l=K(0),a=K(Math.ceil((parseInt(e.height)||t.height.value)/(n.value||16))||1),s=K(0),o=K(0),r=N(),h=N();let V=0;const{resizeRef:v,contentRect:c}=dt();Ue(()=>{v.value=r.value});const m=b(()=>{var S;return r.value===document.documentElement?t.height.value:((S=c.value)==null?void 0:S.height)||parseInt(e.height)||0}),y=b(()=>!!(r.value&&h.value&&m.value&&n.value));let f=Array.from({length:i.value.length}),d=Array.from({length:i.value.length});const p=K(0);let I=-1;function P(S){return f[S]||n.value}const F=Kt(()=>{const S=performance.now();d[0]=0;const x=i.value.length;for(let k=1;k<=x-1;k++)d[k]=(d[k-1]||0)+P(k-1);p.value=Math.max(p.value,performance.now()-S)},p),$=ae(y,S=>{S&&($(),V=h.value.offsetTop,F.immediate(),G(),~I&&ct(()=>{ft&&window.requestAnimationFrame(()=>{w(I),I=-1})}))});ae(m,(S,x)=>{x&&G()}),vt(()=>{F.clear()});function X(S,x){const k=f[S],B=n.value;n.value=B?Math.min(n.value,x):x,(k!==x||B!==n.value)&&(f[S]=x,F())}function A(S){return S=ke(S,0,i.value.length-1),d[S]||0}function D(S){return $n(d,S)}let T=0,U=0,H=0;function te(){if(!r.value||!h.value)return;const S=r.value.scrollTop,x=performance.now();x-H>500?(U=Math.sign(S-T),V=h.value.offsetTop):U=S-T,T=S,H=x,G()}function oe(){!r.value||!h.value||(U=0,H=0,G())}let Y=-1;function G(){cancelAnimationFrame(Y),Y=requestAnimationFrame(g)}function g(){if(!r.value||!m.value)return;const S=T-V,x=Math.sign(U),k=Math.max(0,S-Ve),B=ke(D(k),0,i.value.length),L=S+m.value+Ve,_=ke(D(L)+1,B+1,i.value.length);if((x!==Mn||B<l.value)&&(x!==Fn||_>a.value)){const E=A(l.value)-A(B),O=A(_)-A(a.value);Math.max(E,O)>Ve?(l.value=B,a.value=_):(B<=0&&(l.value=B),_>=i.value.length&&(a.value=_))}s.value=A(l.value),o.value=A(i.value.length)-A(a.value)}function w(S){const x=A(S);!r.value||S&&!x?I=S:r.value.scrollTop=x}const C=b(()=>i.value.slice(l.value,a.value).map((S,x)=>({raw:S,index:x+l.value})));return ae(i,()=>{f=Array.from({length:i.value.length}),d=Array.from({length:i.value.length}),F.immediate(),G()},{deep:!0}),{containerRef:r,markerRef:h,computedItems:C,paddingTop:s,paddingBottom:o,scrollToIndex:w,handleScroll:te,handleScrollend:oe,handleItemResize:X}}function $n(e,i){let t=e.length-1,n=0,l=0,a=null,s=-1;if(e[t]<i)return t;for(;n<=t;)if(l=n+t>>1,a=e[l],a>i)t=l-1;else if(a<i)s=l,n=l+1;else return a===i?l:n;return s}const Nn=R({items:{type:Array,default:()=>[]},renderless:Boolean,...Rn(),...ee(),..._e()},"VVirtualScroll"),Gn=j()({name:"VVirtualScroll",props:Nn(),setup(e,i){let{slots:t}=i;const n=it("VVirtualScroll"),{dimensionStyles:l}=Me(e),{containerRef:a,markerRef:s,handleScroll:o,handleScrollend:r,handleItemResize:h,scrollToIndex:V,paddingTop:v,paddingBottom:c,computedItems:m}=En(e,M(e,"items"));return Ut(()=>e.renderless,()=>{function y(){var p,I;const d=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";a.value===document.documentElement?(document[d]("scroll",o,{passive:!0}),document[d]("scrollend",r)):((p=a.value)==null||p[d]("scroll",o,{passive:!0}),(I=a.value)==null||I[d]("scrollend",r))}Ht(()=>{a.value=jt(n.vnode.el,!0),y(!0)}),vt(y)}),W(()=>{const y=m.value.map(f=>u(_n,{key:f.index,renderless:e.renderless,"onUpdate:height":d=>h(f.index,d)},{default:d=>{var p;return(p=t.default)==null?void 0:p.call(t,{item:f.raw,index:f.index,...d})}}));return e.renderless?u(J,null,[u("div",{ref:s,class:"v-virtual-scroll__spacer",style:{paddingTop:se(v.value)}},null),y,u("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:se(c.value)}},null)]):u("div",{ref:a,class:["v-virtual-scroll",e.class],onScrollPassive:o,onScrollend:r,style:[l.value,e.style]},[u("div",{ref:s,class:"v-virtual-scroll__container",style:{paddingTop:se(v.value),paddingBottom:se(c.value)}},[y])])}),{scrollToIndex:V}}});function Kn(e,i){const t=K(!1);let n;function l(o){cancelAnimationFrame(n),t.value=!0,n=requestAnimationFrame(()=>{n=requestAnimationFrame(()=>{t.value=!1})})}async function a(){await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>{if(t.value){const r=ae(t,()=>{r(),o()})}else o()})}async function s(o){var V,v;if(o.key==="Tab"&&((V=i.value)==null||V.focus()),!["PageDown","PageUp","Home","End"].includes(o.key))return;const r=(v=e.value)==null?void 0:v.$el;if(!r)return;(o.key==="Home"||o.key==="End")&&r.scrollTo({top:o.key==="Home"?0:r.scrollHeight,behavior:"smooth"}),await a();const h=r.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(o.key==="PageDown"||o.key==="Home"){const c=r.getBoundingClientRect().top;for(const m of h)if(m.getBoundingClientRect().top>=c){m.focus();break}}else{const c=r.getBoundingClientRect().bottom;for(const m of[...h].reverse())if(m.getBoundingClientRect().bottom<=c){m.focus();break}}}return{onListScroll:l,onListKeydown:s}}const Un=R({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:z,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...Vt({itemChildren:!1})},"Select"),Hn=R({...Un(),...fe(At({modelValue:null,role:"button"}),["validationValue","dirty","appendInnerIcon"]),...zt({transition:{component:ut}})},"VSelect"),Qn=j()({name:"VSelect",props:Hn(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,i){let{slots:t}=i;const{t:n}=Ze(),l=N(),a=N(),s=N(),o=ie(e,"menu"),r=b({get:()=>o.value,set:g=>{var w;o.value&&!g&&((w=a.value)!=null&&w.ΨopenChildren)||(o.value=g)}}),{items:h,transformIn:V,transformOut:v}=wn(e),c=ie(e,"modelValue",[],g=>V(g===null?[null]:Xt(g)),g=>{const w=v(g);return e.multiple?w:w[0]??null}),m=Yt(),y=b(()=>c.value.map(g=>g.value)),f=K(!1),d=b(()=>r.value?e.closeText:e.openText);let p="",I;const P=b(()=>e.hideSelected?h.value.filter(g=>!c.value.some(w=>w===g)):h.value),F=b(()=>e.hideNoData&&!h.value.length||e.readonly||(m==null?void 0:m.isReadonly.value)),$=N(),{onListScroll:X,onListKeydown:A}=Kn($,l);function D(g){e.openOnClear&&(r.value=!0)}function T(){F.value||(r.value=!r.value)}function U(g){var k,B;if(!g.key||e.readonly||m!=null&&m.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(g.key)&&g.preventDefault(),["Enter","ArrowDown"," "].includes(g.key)&&(r.value=!0),["Escape","Tab"].includes(g.key)&&(r.value=!1),g.key==="Home"?(k=$.value)==null||k.focus("first"):g.key==="End"&&((B=$.value)==null||B.focus("last"));const w=1e3;function C(L){const _=L.key.length===1,E=!L.ctrlKey&&!L.metaKey&&!L.altKey;return _&&E}if(e.multiple||!C(g))return;const S=performance.now();S-I>w&&(p=""),p+=g.key.toLowerCase(),I=S;const x=h.value.find(L=>L.title.toLowerCase().startsWith(p));x!==void 0&&(c.value=[x])}function H(g){if(e.multiple){const w=c.value.findIndex(C=>e.valueComparator(C.value,g.value));if(w===-1)c.value=[...c.value,g];else{const C=[...c.value];C.splice(w,1),c.value=C}}else c.value=[g],r.value=!1}function te(g){var w;(w=$.value)!=null&&w.$el.contains(g.relatedTarget)||(r.value=!1)}function oe(){var g;f.value&&((g=l.value)==null||g.focus())}function Y(g){f.value=!0}function G(g){if(g==null)c.value=[];else if(He(l.value,":autofill")||He(l.value,":-webkit-autofill")){const w=h.value.find(C=>C.title===g);w&&H(w)}else l.value&&(l.value.value="")}return ae(r,()=>{if(!e.hideSelected&&r.value&&c.value.length){const g=P.value.findIndex(w=>c.value.some(C=>e.valueComparator(C.value,w.value)));ft&&window.requestAnimationFrame(()=>{var w;g>=0&&((w=s.value)==null||w.scrollToIndex(g))})}}),W(()=>{const g=!!(e.chips||t.chip),w=!!(!e.hideNoData||P.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),C=c.value.length>0,S=$e.filterProps(e),x=C||!f.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return u($e,q({ref:l},S,{modelValue:c.value.map(k=>k.props.value).join(", "),"onUpdate:modelValue":G,focused:f.value,"onUpdate:focused":k=>f.value=k,validationValue:c.externalValue,counterValue:c.value.length,dirty:C,class:["v-select",{"v-select--active-menu":r.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":c.value.length,"v-select--selection-slot":!!t.selection},e.class],style:e.style,inputmode:"none",placeholder:x,"onClick:clear":D,"onMousedown:control":T,onBlur:te,onKeydown:U,"aria-label":n(d.value),title:n(d.value)}),{...t,default:()=>u(J,null,[u(On,q({ref:a,modelValue:r.value,"onUpdate:modelValue":k=>r.value=k,activator:"parent",contentClass:"v-select__content",disabled:F.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:oe},e.menuProps),{default:()=>[w&&u(Tn,{ref:$,selected:y.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:k=>k.preventDefault(),onKeydown:A,onFocusin:Y,onScrollPassive:X,tabindex:"-1",color:e.itemColor??e.color},{default:()=>{var k,B,L;return[(k=t["prepend-item"])==null?void 0:k.call(t),!P.value.length&&!e.hideNoData&&(((B=t["no-data"])==null?void 0:B.call(t))??u(be,{title:n(e.noDataText)},null)),u(Gn,{ref:s,renderless:!0,items:P.value},{default:_=>{var Ee;let{item:E,index:O,itemRef:ne}=_;const Re=q(E.props,{ref:ne,key:O,onClick:()=>H(E)});return((Ee=t.item)==null?void 0:Ee.call(t,{item:E,index:O,props:Re}))??u(be,Re,{prepend:wt=>{let{isSelected:Pt}=wt;return u(J,null,[e.multiple&&!e.hideSelected?u(an,{key:E.value,modelValue:Pt,ripple:!1,tabindex:"-1"},null):void 0,E.props.prependIcon&&u(le,{icon:E.props.prependIcon},null)])}})}}),(L=t["append-item"])==null?void 0:L.call(t)]}})]}),c.value.map((k,B)=>{function L(ne){ne.stopPropagation(),ne.preventDefault(),H(k)}const _={"onClick:close":L,onMousedown(ne){ne.preventDefault(),ne.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},E=g?!!t.chip:!!t.selection,O=E?qt(g?t.chip({item:k,index:B,props:_}):t.selection({item:k,index:B})):void 0;if(!(E&&!O))return u("div",{key:k.value,class:"v-select__selection"},[g?t.chip?u(Z,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:k.title}}},{default:()=>[O]}):u(un,q({key:"chip",closable:e.closableChips,size:"small",text:k.title,disabled:k.props.disabled},_),null):O??u("span",{class:"v-select__selection-text"},[k.title,e.multiple&&B<c.value.length-1&&u("span",{class:"v-select__selection-comma"},[Wt(",")])])])})]),"append-inner":function(){var _;for(var k=arguments.length,B=new Array(k),L=0;L<k;L++)B[L]=arguments[L];return u(J,null,[(_=t["append-inner"])==null?void 0:_.call(t,...B),e.menuIcon?u(le,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),rt({isFocused:f,menu:r,select:H},l)}});export{Qn as V,an as a};
