import{p as f,m as i,z as d,g as m,b7 as V,u as N,c as h,bn as r,aT as b,h as P,bk as v}from"./index-ade3f5f3.js";const L=f({fluid:{type:Boolean,default:!1},...i(),...d()},"VContainer"),O=m()({name:"VContainer",props:L(),setup(e,s){let{slots:t}=s;const{rtlClasses:n}=V();return N(()=>h(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},n.value,e.class],style:e.style},t)),{}}}),g=(()=>r.reduce((e,s)=>(e[s]={type:[Boolean,String,Number],default:!1},e),{}))(),y=(()=>r.reduce((e,s)=>{const t="offset"+b(s);return e[t]={type:[String,Number],default:null},e},{}))(),C=(()=>r.reduce((e,s)=>{const t="order"+b(s);return e[t]={type:[String,Number],default:null},e},{}))(),u={col:Object.keys(g),offset:Object.keys(y),order:Object.keys(C)};function $(e,s,t){let n=e;if(!(t==null||t===!1)){if(s){const a=s.replace(e,"");n+=`-${a}`}return e==="col"&&(n="v-"+n),e==="col"&&(t===""||t===!0)||(n+=`-${t}`),n.toLowerCase()}}const j=["auto","start","end","center","baseline","stretch"],B=f({cols:{type:[Boolean,String,Number],default:!1},...g,offset:{type:[String,Number],default:null},...y,order:{type:[String,Number],default:null},...C,alignSelf:{type:String,default:null,validator:e=>j.includes(e)},...i(),...d()},"VCol"),w=m()({name:"VCol",props:B(),setup(e,s){let{slots:t}=s;const n=P(()=>{const a=[];let o;for(o in u)u[o].forEach(l=>{const S=e[l],c=$(o,l,S);c&&a.push(c)});const k=a.some(l=>l.startsWith("v-col-"));return a.push({"v-col":!k||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),a});return()=>{var a;return v(e.tag,{class:[n.value,e.class],style:e.style},(a=t.default)==null?void 0:a.call(t))}}});export{w as V,O as a};
