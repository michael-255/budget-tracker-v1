import{k as D,U as I,A as R,F as $,D as c,r as B,l as C,am as g,Y as V,m as t,n as f,w as y,x as e,G as a,p as l,L as A,M as S,z as w,I as s,t as _,H as U,J as F,Q as L,an as Q}from"./index-bacf9f48.js";import{Q as T}from"./QForm-14c08225.js";import{_ as q}from"./ErrorStates.vue_vue_type_script_setup_true_lang-1e8cae0f.js";import{_ as N}from"./ResponsivePage.vue_vue_type_script_setup_true_lang-f8d87b5c.js";import{u as j}from"./action-796f7659.js";import{u as M}from"./useDialogs-f3d10379.js";import{u as z}from"./useRouting-b671dcd6.js";import"./QSelect-53cc7671.js";import"./QItem-e511e66b.js";import"./QItemLabel-136efd93.js";import"./QMenu-cb80e48e.js";import"./selection-2d07121c.js";import"./ui-00afdb08.js";const G={key:0},H={key:0,class:"row justify-center q-my-sm"},J={key:1,class:"row justify-center q-my-sm"},K={class:"row justify-center"},O=_("span",{class:"text-caption q-ml-xs text-warning"}," Correct invalid entries and try again ",-1),le=D({__name:"EditView",setup(W){I({title:`${R} - Edit Record`});const{routeTable:r,routeId:b,goBack:k}=z(),{log:d}=$(),{confirmDialog:E}=M(),n=j(),m=c.getLabel(r,"singular"),v=c.getFieldComponents(r),u=B(!0);C(async()=>{try{n.table=r;const o=await c.getRecord(r,b);if(o)g(!0,n.record,o);else throw new Error("Record not found")}catch(o){d.error("Error loading edit view",o)}}),V(()=>{n.$reset()});async function h(){E("Update",`Update ${m} record?`,s.EDIT,"positive",async()=>{try{await c.putRecord(r,g(!0,{},n.record)),d.info("Record updated",{table:r,id:n.record.id}),k()}catch(o){d.error("Update failed",o)}})}return(o,i)=>(t(),f(N,{bannerIcon:e(s).EDIT,bannerTitle:`Edit ${e(m)}`},{default:y(()=>[e(m)&&e(v).length>0?(t(),a("div",G,[l(T,{onSubmit:h,onValidationError:i[0]||(i[0]=p=>u.value=!1),onValidationSuccess:i[1]||(i[1]=p=>u.value=!0)},{default:y(()=>[(t(!0),a(A,null,S(e(v),(p,x)=>(t(),a("div",{key:x,class:"q-mb-md"},[(t(),f(Q(p)))]))),128)),e(n).record.activated?(t(),a("div",J,[l(w,{disable:"",label:"Active",color:"warning",icon:e(s).LOCK},null,8,["icon"])])):(t(),a("div",H,[l(w,{label:"Update",type:"submit",color:"positive",icon:e(s).SAVE},null,8,["icon"])])),_("div",K,[U(_("div",null,[l(L,{name:e(s).WARN,color:"warning"},null,8,["name"]),O],512),[[F,!u.value]])])]),_:1})])):(t(),f(q,{key:1,error:"unknown"}))]),_:1},8,["bannerIcon","bannerTitle"]))}});export{le as default};