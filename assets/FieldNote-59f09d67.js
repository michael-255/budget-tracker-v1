import{k as c,m as n,G as d,p as u,w as m,x as e,n as i,Q as p,I as x,O as _,bi as A,aJ as s,_ as f,L as h,t as l}from"./index-bacf9f48.js";import{u as N}from"./action-796f7659.js";const b=l("div",{class:"text-weight-bold text-body1"},"Note",-1),k=l("p",null,"Text note about the record that can be viewed on the Dashboard.",-1),w=c({__name:"FieldNote",setup(C){const t=N();return(E,o)=>(n(),d(h,null,[b,k,u(f,{modelValue:e(t).record.note,"onUpdate:modelValue":o[1]||(o[1]=r=>e(t).record.note=r),rules:[r=>e(A).safeParse(r).success||`Note cannot exceed ${e(s).MAX_TEXT_AREA} characters`],maxlength:e(s).MAX_TEXT_AREA,type:"textarea","lazy-rules":"",autogrow:"",counter:"",dense:"",outlined:"",color:"primary",onBlur:o[2]||(o[2]=r=>{var a;return e(t).record.note=(a=e(t).record.note)==null?void 0:a.trim()})},{append:m(()=>[e(t).record.note!==""?(n(),i(p,{key:0,name:e(x).CANCEL,onClick:o[0]||(o[0]=r=>e(t).record.note=""),class:"cursor-pointer"},null,8,["name"])):_("",!0)]),_:1},8,["modelValue","rules","maxlength"])],64))}});export{w as default};
