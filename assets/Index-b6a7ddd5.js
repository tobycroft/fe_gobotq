import{N as u}from"./Net-5e6218fb.js";import{_,a3 as v,J as l,Y as V,h as t,L as o,R as c,S as i,a0 as q,F as B,a4 as R,W as m,K as p,N as g}from"./index-bff9f6ce.js";import{V as k}from"./VContainer-d788410e.js";import{V as C}from"./VDataTable-8d76a0af.js";import{T as $}from"./topheader-595b1162.js";import{V as T}from"./VApp-249e678e.js";import{V as w,a as x}from"./VTabs-feaa2184.js";import"./VSelect-33fd3908.js";import"./VTextField-042e7002.js";import"./VInput-6ca638c6.js";import"./index-b538728d.js";import"./ssrBoot-fa8852c9.js";import"./VSelectionControl-108eab2d.js";import"./gobotq-1cdfb48b.js";const y={data(){return{headers:[{title:"机器人Q",value:"bot"},{title:"密码",value:"password"},{title:"服主QQ",value:"owner"},{title:"绑定密钥",value:"secret"},{title:"到期日期",value:"end_date"},{title:"申请日",value:"date"},{text:"操作",value:"actions",sortable:!1}],botRequests:[]}},methods:{addBotRequest(){console.log("添加机器人请求"),this.$router.push("/v1/index/botrequest/edit")},async getBotRequests(){var e=await new u("/v1/bot/request/list").Get({});e.isSuccess&&(this.botRequests=e.data)},async deleteBotRequest(e){var a=await new u("/v1/bot/request/del").PostFormData(e);v.SetAlert(a.echo),this.$router.go(0)}},mounted(){this.getBotRequests()}};function N(e,a,f,b,s,r){return l(),V(B,null,[t(k,null,{default:o(()=>[t(c,{onClick:r.addBotRequest,color:"primary"},{default:o(()=>[i("添加")]),_:1},8,["onClick"])]),_:1}),t(C,{headers:s.headers,items:s.botRequests,"items-per-page":5,class:"elevation-1"},{"item.actions":o(({item:n})=>[t(c,{onClick:d=>r.deleteBotRequest(n),color:"red",icon:""},{default:o(()=>[t(q,null,{default:o(()=>[i("mdi-delete")]),_:1})]),_:2},1032,["onClick"])]),_:1},8,["headers","items"])],64)}const A=_(y,[["render",N]]),F=R({components:{Topheader:$,BotRequest:A},computed:{},mounted(){},data:()=>({tab:""}),methods:{changetab(){}}});function Q(e,a,f,b,s,r){const n=m("Topheader"),d=m("BotRequest");return l(),p(T,null,{default:o(()=>[t(n),t(x,{modelValue:e.tab,"onUpdate:modelValue":a[0]||(a[0]=h=>e.tab=h),onClick:e.changetab,"fixed-tabs":"","bg-color":"indigo-darken-2"},{default:o(()=>[t(w,null,{default:o(()=>[i("添加我的机器人")]),_:1})]),_:1},8,["modelValue","onClick"]),e.tab===0?(l(),p(d,{key:0})):g("",!0)]),_:1})}const H=_(F,[["render",Q]]);export{H as default};
