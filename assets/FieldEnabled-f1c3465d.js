import{k as s,m as l,G as r,p as d,x as t,aH as c,L as i,t as a}from"./index-bacf9f48.js";import{u}from"./action-796f7659.js";const m=a("div",{class:"text-weight-bold text-body1"},"Enabled",-1),p=a("p",null,"Whether the record is enabled and shows up on the Dashboard and in other lists.",-1),x=s({__name:"FieldEnabled",setup(_){const e=u();return(h,o)=>(l(),r(i,null,[m,p,d(c,{modelValue:t(e).record.enabled,"onUpdate:modelValue":o[0]||(o[0]=n=>t(e).record.enabled=n)},null,8,["modelValue"])],64))}});export{x as default};