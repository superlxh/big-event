import{n as m,t as y,x as u,y as h,z as b,o as a,A as i,c as r,b as v,C,e as o,D as E,a3 as t,G as c,F as d,_,J as g}from"./index-3d212614.js";const B=m({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:y}}),w={click:l=>l instanceof MouseEvent},L=["href"],$=u({name:"ElLink"}),P=u({...$,props:B,emits:w,setup(l,{emit:p}){const s=l,n=h("link"),f=b(()=>[n.b(),n.m(s.type),n.is("disabled",s.disabled),n.is("underline",s.underline&&!s.disabled)]);function k(e){s.disabled||p("click",e)}return(e,z)=>(a(),i("a",{class:c(o(f)),href:e.disabled||!e.href?void 0:e.href,onClick:k},[e.icon?(a(),r(o(E),{key:0},{default:v(()=>[(a(),r(C(e.icon)))]),_:1})):t("v-if",!0),e.$slots.default?(a(),i("span",{key:1,class:c(o(n).e("inner"))},[d(e.$slots,"default")],2)):t("v-if",!0),e.$slots.icon?d(e.$slots,"icon",{key:2}):t("v-if",!0)],10,L))}});var S=_(P,[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]);const I=g(S);export{I as E};