import{_ as h}from"./PageContainer-c4fd5575.js";import{u as y,r as p,o as r,c as E,b as a,d as t,A as u,e as i,g as d,bO as k,E as S,aP as b,bP as x,p as A,m as R,h as B}from"./index-3d212614.js";import{a as C,E as I}from"./el-col-26493748.js";import{_ as F,E as N}from"./_plugin-vue_export-helper-287f15d6.js";import{E as V}from"./el-progress-46a6491e.js";import"./el-message-b21aad48.js";import"./isEqual-22af668a.js";const z=""+new URL("avatar-db9fbf44.jpg",import.meta.url).href;const L=o=>(A("data-v-eae367af"),o=o(),R(),o),P=["src"],$={key:1,src:z,width:"278"},j=L(()=>B("br",null,null,-1)),q={__name:"UserAvatar",setup(o){const l=y(),c=p(),s=p(l.user.user_pic),f=n=>{const e=new FileReader;e.readAsDataURL(n.raw),e.onload=()=>{s.value=e.result}},m=async()=>{await k(s.value),await l.getUser(),S.success("更换成功")};return(n,e)=>{const v=V,_=N,g=C,w=I,U=h;return r(),E(U,{title:"更换头像"},{default:a(()=>[t(w,null,{default:a(()=>[t(g,{span:12},{default:a(()=>[t(v,{ref_key:"uploadRef",ref:c,class:"avatar-uploader","auto-upload":!1,"show-file-list":!1,"on-change":f},{default:a(()=>[s.value?(r(),u("img",{key:0,src:s.value,class:"avatar"},null,8,P)):(r(),u("img",$))]),_:1},512),j,t(_,{onClick:e[0]||(e[0]=D=>c.value.$el.querySelector("input").click()),type:"primary",icon:i(b),size:"large"},{default:a(()=>[d(" 选择图片 ")]),_:1},8,["icon"]),t(_,{onClick:m,type:"success",icon:i(x),size:"large"},{default:a(()=>[d(" 上传头像 ")]),_:1},8,["icon"])]),_:1})]),_:1})]),_:1})}}},Q=F(q,[["__scopeId","data-v-eae367af"]]);export{Q as default};