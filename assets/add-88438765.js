import{T as h}from"./topheader-96e285c1.js";import{N as w}from"./Net-0fa0a321.js";import{U as v,_ as x,a3 as p,W as D,J as s,Y as i,h as o,L as l,F as c,S as u,Q as F,Z as C,R as y,K as m,N as f}from"./index-2a22120d.js";import{V as b}from"./VContainer-603af55f.js";import{V as S}from"./VForm-0222b79d.js";import{V as T}from"./VRow-c887d5e3.js";import{V as g}from"./VCol-3eb55dc8.js";import{V}from"./VTextField-aac2d917.js";import"./gobotq-1cdfb48b.js";import"./index-d92b53cc.js";import"./VInput-bec78817.js";const _=v("v-banner-text"),N={components:{Topheader:h},data(){return{valid:!0,show1:!1,formData:{secret:"",end_date:"",date:"",status:0,id:null,uid:null,bot:null,password:"",owner:null},fields:[{key:"secret",label:"绑定密钥，用于后续机器人上线后自动绑定",type:"password",rules:[]},{key:"month",label:"你想使用本平台几个月？",type:"tel",rules:[]},{key:"bot",label:"机器人QQ号，务必不要错避免无法上线",type:"text",rules:[]},{key:"password",label:"设定一个修改机器人相关信息的密码",type:"password",rules:[]}]}},methods:{updateFormData(a,r){},async submitForm(){console.log("提交表单",this.formData);var a=await new w("/v1/bot/request/add").PostFormData(this.formData);a.isSuccess?(p.SetAlert(a.echo),this.$router.go(-1)):p.SetAlert(a.echo)},back(){this.$router.go(-1)}},mounted(){}};function U(a,r,B,Q,t,d){const k=D("Topheader");return s(),i(c,null,[o(k),o(b,null,{default:l(()=>[o(_,null,{default:l(()=>[u("欢迎加入GobotQ平台，这里仅需要填写几个重要的参数，后续机器人在连入平台后将会自动启用")]),_:1}),o(_,null,{default:l(()=>[u("请不要忘记绑定密码，如果忘记你将无法绑定这个机器人，一般情况下机器人将会默认绑定到你的名下")]),_:1})]),_:1}),o(b,null,{default:l(()=>[o(S,{modelValue:t.valid,"onUpdate:modelValue":r[1]||(r[1]=e=>t.valid=e),ref:"form",onSubmit:F(d.submitForm,["prevent"]),class:"mt-6"},{default:l(()=>[o(T,null,{default:l(()=>[(s(!0),i(c,null,C(t.fields,e=>(s(),m(g,{key:e.key,cols:"12",md:"6"},{default:l(()=>[e.type!=="password"?(s(),m(V,{key:0,"hide-details":"false",label:e.label,type:e.type,modelValue:t.formData[e.key],"onUpdate:modelValue":n=>t.formData[e.key]=n,rules:e.rules},null,8,["label","type","modelValue","onUpdate:modelValue","rules"])):f("",!0),e.type==="password"?(s(),m(V,{key:1,"append-icon":t.show1?"mdi-eye":"mdi-eye-off","hide-details":"false",label:e.label,type:t.show1?"text":"password",modelValue:t.formData[e.key],"onUpdate:modelValue":n=>t.formData[e.key]=n,rules:e.rules,"onClick:append":r[0]||(r[0]=n=>t.show1=!t.show1)},null,8,["append-icon","label","type","modelValue","onUpdate:modelValue","rules"])):f("",!0)]),_:2},1024))),128))]),_:1}),o(y,{type:"submit",disabled:!t.valid,block:"",color:"primary",class:"mt-4"},{default:l(()=>[u("提交")]),_:1},8,["disabled"]),o(y,{block:"",color:"grey",class:"mt-4",onClick:d.back},{default:l(()=>[u("返回")]),_:1},8,["onClick"])]),_:1},8,["modelValue","onSubmit"])]),_:1})],64)}const Y=x(N,[["render",U]]);export{Y as default};
