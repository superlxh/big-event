import{u as V,r as m,o as k,c as w,b as l,d as e,f as y,g as U,bN as x,E as I}from"./index-3d212614.js";import{a as S,E as B}from"./el-col-26493748.js";import{E as C,a as K}from"./el-form-item-2c81f57d.js";import{E as N}from"./_plugin-vue_export-helper-287f15d6.js";import{E as R}from"./el-input-0664a9f6.js";import{_ as q}from"./PageContainer-c4fd5575.js";import"./el-message-b21aad48.js";const G={__name:"UserProfile",setup(F){const{user:{username:i,nickname:p,email:_,id:d},getUser:f}=V(),a=m({username:i,nickname:p,email:_,id:d}),u=m(),c={nickname:[{required:!0,message:"请输入用户昵称",trigger:"blur"},{pattern:/^\S{2,10}$/,message:"昵称必须是2-10位的非空字符串",trigger:"blur"}],email:[{required:!0,message:"请输入用户邮箱",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}]},s=async()=>{await u.value.validate(),await x(a.value),await f(),I.success("修改成功")};return(z,o)=>{const n=R,r=C,g=N,b=K,E=S,v=B;return k(),w(q,null,{default:l(()=>[e(v,null,{default:l(()=>[e(E,{span:12},{default:l(()=>[e(b,{model:a.value,rules:c,ref_key:"formRef",ref:u,"label-width":"100px",size:"large"},{default:l(()=>[e(r,{label:"登录名称"},{default:l(()=>[e(n,{modelValue:a.value.username,"onUpdate:modelValue":o[0]||(o[0]=t=>a.value.username=t),disabled:""},null,8,["modelValue"])]),_:1}),e(r,{label:"用户昵称",prop:"nickname"},{default:l(()=>[e(n,{modelValue:a.value.nickname,"onUpdate:modelValue":o[1]||(o[1]=t=>a.value.nickname=t)},null,8,["modelValue"])]),_:1}),e(r,{label:"用户邮箱",prop:"email",onKeyup:y(s,["enter"])},{default:l(()=>[e(n,{modelValue:a.value.email,"onUpdate:modelValue":o[2]||(o[2]=t=>a.value.email=t)},null,8,["modelValue"])]),_:1},8,["onKeyup"]),e(r,null,{default:l(()=>[e(g,{type:"primary",onClick:s},{default:l(()=>[U("提交修改")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})]),_:1})}}};export{G as default};
