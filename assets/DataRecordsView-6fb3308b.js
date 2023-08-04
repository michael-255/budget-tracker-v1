import{Q as k,a as _,b as x,c as F}from"./QTable-c8ad4f71.js";import{k as U,U as M,A as j,F as H,r as m,D as p,Y as z,m as c,n as f,w as a,p as s,G as E,M as S,L as V,K as g,x as o,V as Q,z as u,I as i,O as G,t as b,v as h,Q as q,_ as J,N as K,H as X,J as Y}from"./index-bacf9f48.js";import{Q as W}from"./QSelect-53cc7671.js";import{u as Z}from"./useRouting-b671dcd6.js";import{u as ee}from"./useDialogs-f3d10379.js";import"./QList-e156cec4.js";import"./QItem-e511e66b.js";import"./QItemLabel-136efd93.js";import"./QMenu-cb80e48e.js";import"./selection-2d07121c.js";import"./action-796f7659.js";import"./ErrorStates.vue_vue_type_script_setup_true_lang-1e8cae0f.js";import"./ui-00afdb08.js";const oe={class:"row justify-start full-width q-mb-md"},le={class:"col-10 text-h6 text-bold ellipsis"},te={class:"row justify-start full-width"},ae={class:"col-12"},Ce=U({__name:"DataRecordsView",setup(se){M({title:`${j} - Records Data Table`});const{log:v}=H(),{routeTable:r,goToEdit:I,goToCreate:B,goBack:L}=Z(),{confirmDialog:N,inspectDialog:R,chartsDialog:$}=ee(),C=m(""),d=m([]),y=m(p.getTableColumns(r)),T=m(y.value.filter(l=>!l.required)),D=m(T.value.map(l=>l.name)),w=p.liveDataTable(r).subscribe({next:l=>d.value=l,error:l=>v.error("Error fetching live records data",l)});z(()=>{w==null||w.unsubscribe()});async function A(l,t){N("Delete","Permanently delete this record? Please note that all child records are deleted when you delete a parent record.",i.DELETE,"negative",async()=>{try{await p.deleteRecord(l,t),v.info("Successfully deleted record",{table:l,id:t})}catch(e){v.error("Delete failed",e)}})}async function O(l,t){const e=await p.getRecord(l,t);e?R(e,l):v.error("Failed to find record",{table:l,id:t})}async function P(l,t){$(t,l)}return(l,t)=>(c(),f(F,{rows:d.value,columns:y.value,"visible-columns":D.value,"rows-per-page-options":[0],filter:C.value,"virtual-scroll":"",fullscreen:"","row-key":"id"},{header:a(e=>[s(_,{props:e},{default:a(()=>[(c(!0),E(V,null,S(e.cols,n=>X((c(),f(k,{key:n.name,props:e},{default:a(()=>[g(h(n.label),1)]),_:2},1032,["props"])),[[Y,n.name!=="hiddenId"]])),128)),s(k,{"auto-width":"",class:"text-left"},{default:a(()=>[g("Actions")]),_:1})]),_:2},1032,["props"])]),body:a(e=>[s(_,{props:e},{default:a(()=>[(c(!0),E(V,null,S(e.cols,n=>(c(),f(x,{key:n.name,props:e},{default:a(()=>[g(h(n.value),1)]),_:2},1032,["props"]))),128)),s(x,{"auto-width":""},{default:a(()=>[[o(Q).EXAMPLES,o(Q).TESTS].includes(o(r))?(c(),f(u,{key:0,flat:"",round:"",dense:"",class:"q-ml-xs",color:"accent",icon:o(i).CHARTS,onClick:n=>P(o(r),e.cols[0].value)},null,8,["icon","onClick"])):G("",!0),s(u,{flat:"",round:"",dense:"",class:"q-ml-xs",color:"primary",icon:o(i).INSPECT,onClick:n=>O(o(r),e.cols[0].value)},null,8,["icon","onClick"]),s(u,{flat:"",round:"",dense:"",class:"q-ml-xs",color:"orange-9",icon:o(i).EDIT,onClick:n=>o(I)(o(r),e.cols[0].value)},null,8,["icon","onClick"]),s(u,{flat:"",round:"",dense:"",class:"q-ml-xs",color:"negative",onClick:n=>A(o(r),e.cols[0].value),icon:o(i).DELETE},null,8,["onClick","icon"])]),_:2},1024)]),_:2},1032,["props"])]),top:a(()=>[b("div",oe,[b("div",le,h(o(p).getLabel(o(r),"plural")),1),s(u,{round:"",flat:"",class:"absolute-top-right q-mr-sm q-mt-sm",icon:o(i).CLOSE,onClick:t[0]||(t[0]=e=>o(L)())},null,8,["icon"])]),b("div",te,[b("div",ae,[s(J,{disable:!d.value.length,outlined:"",dense:"",clearable:"",debounce:"300",modelValue:C.value,"onUpdate:modelValue":t[3]||(t[3]=e=>C.value=e),placeholder:"Search"},{before:a(()=>[s(u,{color:"positive",class:"q-px-sm q-mr-xs",icon:o(i).ADD,onClick:t[1]||(t[1]=e=>o(B)(o(r)))},null,8,["icon"]),s(W,{modelValue:D.value,"onUpdate:modelValue":t[2]||(t[2]=e=>D.value=e),options:T.value,disable:!d.value.length,"bg-color":"primary",standout:"",multiple:"",dense:"","options-dense":"","emit-value":"","map-options":"","option-value":"name","display-value":""},{prepend:a(()=>[s(q,{color:"white",name:o(i).OPTIONS},null,8,["name"])]),_:1},8,["modelValue","options","disable"])]),append:a(()=>[s(q,{name:"search"})]),_:1},8,["disable","modelValue"])])])]),bottom:a(()=>[g(h(o(K)(d.value)),1)]),_:1},8,["rows","columns","visible-columns","filter"]))}});export{Ce as default};
