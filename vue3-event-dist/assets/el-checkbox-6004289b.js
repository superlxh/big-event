import{bs as U,bt as A,b2 as Y,bu as Z,b0 as pe,aX as ge,b1 as xe,bv as Ce,bj as j,H as K,s as H,b8 as z,P as E,z as p,aD as G,w as _,$ as ee,a4 as ne,r as D,bd as w,ai as ye,aw as q,x as L,M as ae,y as T,o as C,c as le,b as te,h as J,G as x,e as u,ac as I,A as y,be as $,a5 as F,bw as N,F as O,a6 as Se,g as oe,al as se,a3 as P,C as ie,_ as M,B as Le,n as Be,v as we,O as Ee,ay as Ie,J as $e,N as ue}from"./index-3d212614.js";import{U as V}from"./el-input-0664a9f6.js";import{e as Fe,c as R,d as re,a as W,f as de}from"./_plugin-vue_export-helper-287f15d6.js";import{i as Ne}from"./isEqual-22af668a.js";import{j as be,m as Ve,n as ze}from"./el-message-b21aad48.js";function Ge(e){return e}function De(e,n,l){switch(l.length){case 0:return e.call(n);case 1:return e.call(n,l[0]);case 2:return e.call(n,l[0],l[1]);case 3:return e.call(n,l[0],l[1],l[2])}return e.apply(n,l)}var Pe=800,Te=16,Oe=Date.now;function Me(e){var n=0,l=0;return function(){var a=Oe(),t=Te-(a-l);if(l=a,t>0){if(++n>=Pe)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}function Re(e){return function(){return e}}var Ue=U?function(e,n){return U(e,"toString",{configurable:!0,enumerable:!1,value:Re(n),writable:!0})}:Ge;const Ae=Ue;var Ke=Me(Ae);const He=Ke;var X=Math.max;function qe(e,n,l){return n=X(n===void 0?e.length-1:n,0),function(){for(var a=arguments,t=-1,d=X(a.length-n,0),b=Array(d);++t<d;)b[t]=a[n+t];t=-1;for(var o=Array(n+1);++t<n;)o[t]=a[t];return o[n]=l(b),De(e,this,o)}}var Q=A?A.isConcatSpreadable:void 0;function Je(e){return Y(e)||be(e)||!!(Q&&e&&e[Q])}function ce(e,n,l,a,t){var d=-1,b=e.length;for(l||(l=Je),t||(t=[]);++d<b;){var o=e[d];n>0&&l(o)?n>1?ce(o,n-1,l,a,t):Ve(t,o):a||(t[t.length]=o)}return t}function We(e){var n=e==null?0:e.length;return n?ce(e,1):[]}function Xe(e){return He(qe(e,void 0,We),e+"")}function Qe(e,n){return e!=null&&n in Object(e)}function Ye(e,n,l){n=Z(n,e);for(var a=-1,t=n.length,d=!1;++a<t;){var b=pe(n[a]);if(!(d=e!=null&&l(e,b)))break;e=e[b]}return d||++a!=t?d:(t=e==null?0:e.length,!!t&&ze(t)&&ge(b,t)&&(Y(e)||be(e)))}function Ze(e,n){return e!=null&&Ye(e,n,Qe)}function je(e,n,l){for(var a=-1,t=n.length,d={};++a<t;){var b=n[a],o=xe(e,b);l(o,b)&&Ce(d,Z(b,e),o)}return d}function _e(e,n){return je(e,n,function(l,a){return Ze(e,a)})}var en=Xe(function(e,n){return e==null?{}:_e(e,n)});const nn=en,ve={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:j,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},me={[V]:e=>K(e)||H(e)||z(e),change:e=>K(e)||H(e)||z(e)},B=Symbol("checkboxGroupContextKey"),an=({model:e,isChecked:n})=>{const l=E(B,void 0),a=p(()=>{var d,b;const o=(d=l==null?void 0:l.max)==null?void 0:d.value,f=(b=l==null?void 0:l.min)==null?void 0:b.value;return!G(o)&&e.value.length>=o&&!n.value||!G(f)&&e.value.length<=f&&n.value});return{isDisabled:Fe(p(()=>(l==null?void 0:l.disabled.value)||a.value)),isLimitDisabled:a}},ln=(e,{model:n,isLimitExceeded:l,hasOwnLabel:a,isDisabled:t,isLabeledByFormItem:d})=>{const b=E(B,void 0),{formItem:o}=R(),{emit:f}=ne();function s(i){var v,m;return i===e.trueLabel||i===!0?(v=e.trueLabel)!=null?v:!0:(m=e.falseLabel)!=null?m:!1}function h(i,v){f("change",s(i),v)}function k(i){if(l.value)return;const v=i.target;f("change",s(v.checked),i)}async function S(i){l.value||!a.value&&!t.value&&d.value&&(i.composedPath().some(c=>c.tagName==="LABEL")||(n.value=s([!1,e.falseLabel].includes(n.value)),await ee(),h(n.value,i)))}const r=p(()=>(b==null?void 0:b.validateEvent)||e.validateEvent);return _(()=>e.modelValue,()=>{r.value&&(o==null||o.validate("change").catch(i=>re()))}),{handleChange:k,onClickRoot:S}},tn=e=>{const n=D(!1),{emit:l}=ne(),a=E(B,void 0),t=p(()=>G(a)===!1),d=D(!1);return{model:p({get(){var o,f;return t.value?(o=a==null?void 0:a.modelValue)==null?void 0:o.value:(f=e.modelValue)!=null?f:n.value},set(o){var f,s;t.value&&w(o)?(d.value=((f=a==null?void 0:a.max)==null?void 0:f.value)!==void 0&&o.length>(a==null?void 0:a.max.value),d.value===!1&&((s=a==null?void 0:a.changeEvent)==null||s.call(a,o))):(l(V,o),n.value=o)}}),isGroup:t,isLimitExceeded:d}},on=(e,n,{model:l})=>{const a=E(B,void 0),t=D(!1),d=p(()=>{const s=l.value;return z(s)?s:w(s)?ye(e.label)?s.map(q).some(h=>Ne(h,e.label)):s.map(q).includes(e.label):s!=null?s===e.trueLabel:!!s}),b=W(p(()=>{var s;return(s=a==null?void 0:a.size)==null?void 0:s.value}),{prop:!0}),o=W(p(()=>{var s;return(s=a==null?void 0:a.size)==null?void 0:s.value})),f=p(()=>!!(n.default||e.label));return{checkboxButtonSize:b,isChecked:d,isFocused:t,checkboxSize:o,hasOwnLabel:f}},sn=(e,{model:n})=>{function l(){w(n.value)&&!n.value.includes(e.label)?n.value.push(e.label):n.value=e.trueLabel||!0}e.checked&&l()},fe=(e,n)=>{const{formItem:l}=R(),{model:a,isGroup:t,isLimitExceeded:d}=tn(e),{isFocused:b,isChecked:o,checkboxButtonSize:f,checkboxSize:s,hasOwnLabel:h}=on(e,n,{model:a}),{isDisabled:k}=an({model:a,isChecked:o}),{inputId:S,isLabeledByFormItem:r}=de(e,{formItemContext:l,disableIdGeneration:h,disableIdManagement:t}),{handleChange:i,onClickRoot:v}=ln(e,{model:a,isLimitExceeded:d,hasOwnLabel:h,isDisabled:k,isLabeledByFormItem:r});return sn(e,{model:a}),{inputId:S,isLabeledByFormItem:r,isChecked:o,isDisabled:k,isFocused:b,checkboxButtonSize:f,checkboxSize:s,hasOwnLabel:h,model:a,handleChange:i,onClickRoot:v}},un=["tabindex","role","aria-checked"],rn=["id","aria-hidden","name","tabindex","disabled","true-value","false-value"],dn=["id","aria-hidden","disabled","value","name","tabindex"],bn=L({name:"ElCheckbox"}),cn=L({...bn,props:ve,emits:me,setup(e){const n=e,l=ae(),{inputId:a,isLabeledByFormItem:t,isChecked:d,isDisabled:b,isFocused:o,checkboxSize:f,hasOwnLabel:s,model:h,handleChange:k,onClickRoot:S}=fe(n,l),r=T("checkbox"),i=p(()=>[r.b(),r.m(f.value),r.is("disabled",b.value),r.is("bordered",n.border),r.is("checked",d.value)]),v=p(()=>[r.e("input"),r.is("disabled",b.value),r.is("checked",d.value),r.is("indeterminate",n.indeterminate),r.is("focus",o.value)]);return(m,c)=>(C(),le(ie(!u(s)&&u(t)?"span":"label"),{class:x(u(i)),"aria-controls":m.indeterminate?m.controls:null,onClick:u(S)},{default:te(()=>[J("span",{class:x(u(v)),tabindex:m.indeterminate?0:void 0,role:m.indeterminate?"checkbox":void 0,"aria-checked":m.indeterminate?"mixed":void 0},[m.trueLabel||m.falseLabel?I((C(),y("input",{key:0,id:u(a),"onUpdate:modelValue":c[0]||(c[0]=g=>$(h)?h.value=g:null),class:x(u(r).e("original")),type:"checkbox","aria-hidden":m.indeterminate?"true":"false",name:m.name,tabindex:m.tabindex,disabled:u(b),"true-value":m.trueLabel,"false-value":m.falseLabel,onChange:c[1]||(c[1]=(...g)=>u(k)&&u(k)(...g)),onFocus:c[2]||(c[2]=g=>o.value=!0),onBlur:c[3]||(c[3]=g=>o.value=!1),onClick:c[4]||(c[4]=F(()=>{},["stop"]))},null,42,rn)),[[N,u(h)]]):I((C(),y("input",{key:1,id:u(a),"onUpdate:modelValue":c[5]||(c[5]=g=>$(h)?h.value=g:null),class:x(u(r).e("original")),type:"checkbox","aria-hidden":m.indeterminate?"true":"false",disabled:u(b),value:m.label,name:m.name,tabindex:m.tabindex,onChange:c[6]||(c[6]=(...g)=>u(k)&&u(k)(...g)),onFocus:c[7]||(c[7]=g=>o.value=!0),onBlur:c[8]||(c[8]=g=>o.value=!1),onClick:c[9]||(c[9]=F(()=>{},["stop"]))},null,42,dn)),[[N,u(h)]]),J("span",{class:x(u(r).e("inner"))},null,2)],10,un),u(s)?(C(),y("span",{key:0,class:x(u(r).e("label"))},[O(m.$slots,"default"),m.$slots.default?P("v-if",!0):(C(),y(Se,{key:0},[oe(se(m.label),1)],64))],2)):P("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}});var vn=M(cn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const mn=["name","tabindex","disabled","true-value","false-value"],fn=["name","tabindex","disabled","value"],hn=L({name:"ElCheckboxButton"}),kn=L({...hn,props:ve,emits:me,setup(e){const n=e,l=ae(),{isFocused:a,isChecked:t,isDisabled:d,checkboxButtonSize:b,model:o,handleChange:f}=fe(n,l),s=E(B,void 0),h=T("checkbox"),k=p(()=>{var r,i,v,m;const c=(i=(r=s==null?void 0:s.fill)==null?void 0:r.value)!=null?i:"";return{backgroundColor:c,borderColor:c,color:(m=(v=s==null?void 0:s.textColor)==null?void 0:v.value)!=null?m:"",boxShadow:c?`-1px 0 0 0 ${c}`:void 0}}),S=p(()=>[h.b("button"),h.bm("button",b.value),h.is("disabled",d.value),h.is("checked",t.value),h.is("focus",a.value)]);return(r,i)=>(C(),y("label",{class:x(u(S))},[r.trueLabel||r.falseLabel?I((C(),y("input",{key:0,"onUpdate:modelValue":i[0]||(i[0]=v=>$(o)?o.value=v:null),class:x(u(h).be("button","original")),type:"checkbox",name:r.name,tabindex:r.tabindex,disabled:u(d),"true-value":r.trueLabel,"false-value":r.falseLabel,onChange:i[1]||(i[1]=(...v)=>u(f)&&u(f)(...v)),onFocus:i[2]||(i[2]=v=>a.value=!0),onBlur:i[3]||(i[3]=v=>a.value=!1),onClick:i[4]||(i[4]=F(()=>{},["stop"]))},null,42,mn)),[[N,u(o)]]):I((C(),y("input",{key:1,"onUpdate:modelValue":i[5]||(i[5]=v=>$(o)?o.value=v:null),class:x(u(h).be("button","original")),type:"checkbox",name:r.name,tabindex:r.tabindex,disabled:u(d),value:r.label,onChange:i[6]||(i[6]=(...v)=>u(f)&&u(f)(...v)),onFocus:i[7]||(i[7]=v=>a.value=!0),onBlur:i[8]||(i[8]=v=>a.value=!1),onClick:i[9]||(i[9]=F(()=>{},["stop"]))},null,42,fn)),[[N,u(o)]]),r.$slots.default||r.label?(C(),y("span",{key:2,class:x(u(h).be("button","inner")),style:Le(u(t)?u(k):void 0)},[O(r.$slots,"default",{},()=>[oe(se(r.label),1)])],6)):P("v-if",!0)],2))}});var he=M(kn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const pn=Be({modelValue:{type:we(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:j,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),gn={[V]:e=>w(e),change:e=>w(e)},xn=L({name:"ElCheckboxGroup"}),Cn=L({...xn,props:pn,emits:gn,setup(e,{emit:n}){const l=e,a=T("checkbox"),{formItem:t}=R(),{inputId:d,isLabeledByFormItem:b}=de(l,{formItemContext:t}),o=async s=>{n(V,s),await ee(),n("change",s)},f=p({get(){return l.modelValue},set(s){o(s)}});return Ee(B,{...nn(Ie(l),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:f,changeEvent:o}),_(()=>l.modelValue,()=>{l.validateEvent&&(t==null||t.validate("change").catch(s=>re()))}),(s,h)=>{var k;return C(),le(ie(s.tag),{id:u(d),class:x(u(a).b("group")),role:"group","aria-label":u(b)?void 0:s.label||"checkbox-group","aria-labelledby":u(b)?(k=u(t))==null?void 0:k.labelId:void 0},{default:te(()=>[O(s.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var ke=M(Cn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const En=$e(vn,{CheckboxButton:he,CheckboxGroup:ke});ue(he);ue(ke);export{En as E,ce as b,Ze as h,Ge as i,qe as o,He as s};