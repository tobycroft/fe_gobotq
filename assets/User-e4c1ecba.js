import{T as b}from"./topheader-9e8e9a52.js";import{T as D,N as y}from"./Net-b88d1075.js";import{h as x}from"./moment-fbc5633a.js";import{_,J as l,K as p,L as e,h as t,M as u,as as M,S as r,X as n,a2 as c,at as N,R as B,T as h,W as m,Y,N as $,F as w}from"./index-153bc6a9.js";import{V as f}from"./VRow-9387810d.js";import{V as i}from"./VCol-a2a349f2.js";import{a as A,V as S}from"./VTabs-bc627fcd.js";import"./gobotq-1cdfb48b.js";import"./index-d82e4606.js";const q={data(){return{formData:{}}},methods:{logout(){D.Api_clear_uidAndToken(),this.$router.push("/user/login")},async fetchData(){const o=await new y("/v1/user/info/get").Get();if(o.isSuccess){const a=o.data;a.date=x(a.date).format("YYYY-MM-DD HH:mm:ss"),this.formData=o.data}else console.error(o.echo)}},mounted(){this.fetchData()}},v=h("strong",null,"QQ号码：",-1),F=h("strong",null,"加入时间：",-1);function H(o,a,V,T,s,d){return l(),p(f,{justify:"center"},{default:e(()=>[t(i,{cols:"12"},{default:e(()=>[t(u,null,{default:e(()=>[t(M,null,{default:e(()=>[r("个人信息")]),_:1}),t(n,null,{default:e(()=>[t(f,null,{default:e(()=>[t(i,{cols:"12"},{default:e(()=>[t(u,null,{default:e(()=>[t(n,null,{default:e(()=>[v,r(" "+c(s.formData.qq),1)]),_:1}),t(n,null,{default:e(()=>[F,r(" "+c(s.formData.date),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(N,null,{default:e(()=>[t(B,{onClick:d.logout,color:"primary"},{default:e(()=>[r("退出")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})}const Q=_(q,[["render",H]]),R={components:{My:Q,Topheader:b},data(){return{tab:0}},methods:{},mounted(){}};function U(o,a,V,T,s,d){const k=m("Topheader"),C=m("My");return l(),Y(w,null,[t(k),t(A,{modelValue:s.tab,"onUpdate:modelValue":a[0]||(a[0]=g=>s.tab=g),onClick:o.changetab,"fixed-tabs":"","bg-color":"indigo-darken-2"},{default:e(()=>[t(S,null,{default:e(()=>[r("我的信息")]),_:1})]),_:1},8,["modelValue","onClick"]),s.tab===0?(l(),p(C,{key:0})):$("",!0)],64)}const I=_(R,[["render",U]]);export{I as default};
