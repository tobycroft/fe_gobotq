import{N as u}from"./Net-78244874.js";import{_,a2 as v,J as l,U as q,h as t,L as o,Q as c,R as i,Z as V,F as B,a1 as R,W as m,K as p,N as k}from"./index-a7bd54ad.js";import{V as C}from"./VContainer-57175cd2.js";import{V as g,a as T,b as $}from"./VTabs-5a8689fd.js";import{T as w}from"./topheader-e4e108b1.js";import{V as x}from"./VApp-90fdec22.js";import"./VSelect-dbfad005.js";import"./VTextField-9066dd5e.js";import"./VInput-ff854556.js";import"./index-03cecdbf.js";import"./ssrBoot-a871c559.js";import"./VSelectionControl-a530dbdc.js";import"./VToolbar-73111ed9.js";import"./layout-f23ec632.js";const y={data(){return{headers:[{title:"机器人Q",value:"bot"},{title:"密码",value:"password"},{title:"服主QQ",value:"owner"},{title:"绑定密钥",value:"secret"},{title:"到期日期",value:"end_date"},{title:"申请日",value:"date"},{text:"操作",value:"actions",sortable:!1}],botRequests:[]}},methods:{addBotRequest(){console.log("添加机器人请求"),this.$router.push("/v1/index/botrequest/edit")},async getBotRequests(){var e=await new u("/v1/bot/request/list").Get({});e.isSuccess&&(this.botRequests=e.data)},async deleteBotRequest(e){var a=await new u("/v1/bot/request/delete").PostFormData(e);v.SetAlert(a.echo)}},mounted(){this.getBotRequests()}};function N(e,a,f,b,s,r){return l(),q(B,null,[t(C,null,{default:o(()=>[t(c,{onClick:r.addBotRequest,color:"primary"},{default:o(()=>[i("添加")]),_:1},8,["onClick"])]),_:1}),t(g,{headers:s.headers,items:s.botRequests,"items-per-page":5,class:"elevation-1"},{"item.actions":o(({item:n})=>[t(c,{onClick:d=>r.deleteBotRequest(n),color:"red",icon:""},{default:o(()=>[t(V,null,{default:o(()=>[i("mdi-delete")]),_:1})]),_:2},1032,["onClick"])]),_:1},8,["headers","items"])],64)}const Q=_(y,[["render",N]]),A=R({components:{Topheader:w,BotRequest:Q},computed:{},mounted(){},data:()=>({tab:""}),methods:{changetab(){}}});function F(e,a,f,b,s,r){const n=m("Topheader"),d=m("BotRequest");return l(),p(x,null,{default:o(()=>[t(n),t($,{modelValue:e.tab,"onUpdate:modelValue":a[0]||(a[0]=h=>e.tab=h),onClick:e.changetab,"fixed-tabs":"","bg-color":"indigo-darken-2"},{default:o(()=>[t(T,null,{default:o(()=>[i("添加我的机器人")]),_:1})]),_:1},8,["modelValue","onClick"]),e.tab===0?(l(),p(d,{key:0})):k("",!0)]),_:1})}const H=_(A,[["render",F]]);export{H as default};
