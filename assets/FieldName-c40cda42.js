import{k as s,m,G as l,p as u,x as e,bh as d,aJ as o,_ as c,L as i,t as p}from"./index-bacf9f48.js";import{u as _}from"./action-796f7659.js";const N=p("div",{class:"text-weight-bold text-body1"},"Name",-1),b=s({__name:"FieldName",setup(x){const t=_();return(f,a)=>(m(),l(i,null,[N,u(c,{modelValue:e(t).record.name,"onUpdate:modelValue":a[0]||(a[0]=r=>e(t).record.name=r),rules:[r=>e(d).safeParse(r).success||`Name must be between ${e(o).MIN_NAME} and ${e(o).MAX_NAME} characters`],maxlength:e(o).MAX_NAME,type:"text","lazy-rules":"",counter:"",dense:"",outlined:"",color:"primary",onBlur:a[1]||(a[1]=r=>{var n;return e(t).record.name=(n=e(t).record.name)==null?void 0:n.trim()})},null,8,["modelValue","rules","maxlength"])],64))}});export{b as default};