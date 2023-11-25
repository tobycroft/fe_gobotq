import{p as D,ae as H,q as E,aB as J,y as L,z as R,aU as z,g as T,A as $,aE as Q,d as Y,C as r,e as ee,h as l,ai as C,am as B,l as ae,an as le,s as te,be as ne,x as se,aT as ie,bf as ce,aV as de,b as oe,D as ue,aX as re,ao as ve,E as fe,I as pe,bg as me,a as ke,bh as he,aW as ye,c as b,O as _,aZ as Ce,a_ as be,a0 as v,aR as f,P as Ve,F as x,a$ as G,i as ge}from"./index-611e515b.js";import{d as Ie}from"./index-5402ece9.js";const F=Symbol.for("vuetify:v-chip-group"),Pe=D({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:H},...E(),...J({selectedClass:"v-chip--selected"}),...L(),...R(),...z({variant:"tonal"})},"VChipGroup"),_e=T()({name:"VChipGroup",props:Pe(),emits:{"update:modelValue":e=>!0},setup(e,p){let{slots:c}=p;const{themeClasses:o}=$(e),{isSelected:t,select:m,next:k,prev:h,selected:y}=Q(e,F);return Y({VChip:{color:r(e,"color"),disabled:r(e,"disabled"),filter:r(e,"filter"),variant:r(e,"variant")}}),ee(()=>l(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},o.value,e.class],style:e.style},{default:()=>{var u;return[(u=c.default)==null?void 0:u.call(c,{isSelected:t,select:m,next:k,prev:h,selected:y.value})]}})),{}}}),Ae=D({activeClass:String,appendAvatar:String,appendIcon:C,closable:Boolean,closeIcon:{type:C,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:C,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:B(),onClickOnce:B(),...ae(),...E(),...le(),...te(),...ne(),...se(),...ie(),...ce(),...L({tag:"span"}),...R(),...z({variant:"tonal"})},"VChip"),xe=T()({name:"VChip",directives:{Ripple:de},props:Ae(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,p){let{attrs:c,emit:o,slots:t}=p;const{t:m}=oe(),{borderClasses:k}=ue(e),{colorClasses:h,colorStyles:y,variantClasses:u}=re(e),{densityClasses:w}=ve(e),{elevationClasses:O}=fe(e),{roundedClasses:M}=pe(e),{sizeClasses:q}=me(e),{themeClasses:K}=$(e),V=ke(e,"modelValue"),a=he(e,F,!1),s=ye(e,c),X=b(()=>e.link!==!1&&s.isLink.value),i=b(()=>!e.disabled&&e.link!==!1&&(!!a||e.link||s.isClickable.value)),j=b(()=>({"aria-label":m(e.closeLabel),onClick(n){n.stopPropagation(),V.value=!1,o("click:close",n)}}));function g(n){var d;o("click",n),i.value&&((d=s.navigate)==null||d.call(s,n),a==null||a.toggle())}function N(n){(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),g(n))}return()=>{const n=s.isLink.value?"a":e.tag,d=!!(e.appendIcon||e.appendAvatar),U=!!(d||t.append),W=!!(t.close||e.closable),I=!!(t.filter||e.filter)&&a,P=!!(e.prependIcon||e.prependAvatar),Z=!!(P||t.prepend),A=!a||a.isSelected.value;return V.value&&_(l(n,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":i.value,"v-chip--filter":I,"v-chip--pill":e.pill},K.value,k.value,A?h.value:void 0,w.value,O.value,M.value,q.value,u.value,a==null?void 0:a.selectedClass.value,e.class],style:[A?y.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:s.href.value,tabindex:i.value?0:void 0,onClick:g,onKeydown:i.value&&!X.value&&N},{default:()=>{var S;return[be(i.value,"v-chip"),I&&l(Ie,{key:"filter"},{default:()=>[_(l("div",{class:"v-chip__filter"},[t.filter?l(f,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},t.filter):l(v,{key:"filter-icon",icon:e.filterIcon},null)]),[[Ve,a.isSelected.value]])]}),Z&&l("div",{key:"prepend",class:"v-chip__prepend"},[t.prepend?l(f,{key:"prepend-defaults",disabled:!P,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},t.prepend):l(x,null,[e.prependIcon&&l(v,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&l(G,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),l("div",{class:"v-chip__content"},[((S=t.default)==null?void 0:S.call(t,{isSelected:a==null?void 0:a.isSelected.value,selectedClass:a==null?void 0:a.selectedClass.value,select:a==null?void 0:a.select,toggle:a==null?void 0:a.toggle,value:a==null?void 0:a.value.value,disabled:e.disabled}))??e.text]),U&&l("div",{key:"append",class:"v-chip__append"},[t.append?l(f,{key:"append-defaults",disabled:!d,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},t.append):l(x,null,[e.appendIcon&&l(v,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&l(G,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),W&&l("div",ge({key:"close",class:"v-chip__close"},j.value),[t.close?l(f,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},t.close):l(v,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Ce("ripple"),i.value&&e.ripple,null]])}}});export{xe as V,_e as a};
