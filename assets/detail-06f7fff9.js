import{N as j}from"./Net-98d68f1f.js";import{m as g}from"./moment-e40fa4dc.js";import{p as N,m as P,z as L,g as A,h as I,bk as T,bn as x,aT as B,_ as E,K as M,L as R,M as n,c as l,b1 as G,N as D,bo as H,S as s,a_ as i,bp as r,R as O}from"./index-ade3f5f3.js";import{V as U}from"./VApp-3ee7ef22.js";import{V as p,a as F}from"./VCol-cd23fb24.js";import"./layout-4237c8af.js";const d=["start","end","center"],C=["space-between","space-around","space-evenly"];function f(t,e){return x.reduce((o,u)=>{const a=t+B(u);return o[a]=e(),o},{})}const Y=[...d,"baseline","stretch"],V=t=>Y.includes(t),v=f("align",()=>({type:String,default:null,validator:V})),z=[...d,...C],k=t=>z.includes(t),b=f("justify",()=>({type:String,default:null,validator:k})),K=[...d,...C,"stretch"],w=t=>K.includes(t),S=f("alignContent",()=>({type:String,default:null,validator:w})),y={align:Object.keys(v),justify:Object.keys(b),alignContent:Object.keys(S)},Q={align:"align",justify:"justify",alignContent:"align-content"};function q(t,e,o){let u=Q[t];if(o!=null){if(e){const a=e.replace(t,"");u+=`-${a}`}return u+=`-${o}`,u.toLowerCase()}}const J=N({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:V},...v,justify:{type:String,default:null,validator:k},...b,alignContent:{type:String,default:null,validator:w},...S,...P(),...L()},"VRow"),W=A()({name:"VRow",props:J(),setup(t,e){let{slots:o}=e;const u=I(()=>{const a=[];let c;for(c in y)y[c].forEach(_=>{const h=t[_],m=q(c,_,h);m&&a.push(m)});return a.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),a});return()=>{var a;return T(t.tag,{class:["v-row",u.value,t.class],style:t.style},(a=o.default)==null?void 0:a.call(o))}}});const X={mounted(){this.getdata2()},data(){return{datalist:{}}},methods:{goBack(){this.$router.go(-1)},async getdata2(){var t=await new j("/v1/bot/info/get").PostFormData({self_id:this.$route.query.self_id});if(t.isSuccess){const e=t.data;e.active=e.active===1?"是":"否",e.end_date=g(e.end_date).format("Y-M-D HH:mm:ss"),e.date=g(e.date).format("Y-M-D HH:mm:ss"),e.comb=e.cname+`
`+e.self_id,this.datalist=e}}}};function Z(t,e,o,u,a,c){return M(),R(U,null,{default:n(()=>[l(F,null,{default:n(()=>[l(W,null,{default:n(()=>[l(p,{cols:"24",md:"6"},{default:n(()=>[l(G,{src:a.datalist.img,alt:"Image"},null,8,["src"])]),_:1}),l(p,{cols:"24",md:"6"},{default:n(()=>[l(D,null,{default:n(()=>[l(H,null,{default:n(()=>[s(i(a.datalist.cname),1)]),_:1}),l(r,null,{default:n(()=>[s("机器人类型: "+i(a.datalist.type),1)]),_:1}),l(r,null,{default:n(()=>[s("所有者: "+i(a.datalist.owner),1)]),_:1}),l(r,null,{default:n(()=>[s("过期日期: "+i(a.datalist.end_date),1)]),_:1}),l(r,null,{default:n(()=>[s("启用状态: "+i(a.datalist.active?"是":"否"),1)]),_:1}),l(r,null,{default:n(()=>[s("添加日期: "+i(a.datalist.date),1)]),_:1}),l(r,null,{default:n(()=>[s("机器人QQ: "+i(a.datalist.self_id),1)]),_:1}),l(r,null,{default:n(()=>[s("密钥: "+i(a.datalist.secret),1)]),_:1}),l(r,null,{default:n(()=>[s("密码: "+i(a.datalist.password),1)]),_:1}),l(r,null,{default:n(()=>[s("允许IP: "+i(a.datalist.allow_ip),1)]),_:1})]),_:1}),l(O,{onClick:c.goBack,color:"primary",block:"",class:"mt-4"},{default:n(()=>[s("返回")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})}const st=E(X,[["render",Z],["__scopeId","data-v-5641a061"]]);export{st as default};
