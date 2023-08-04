import{g as ae,r as z,e as n,as as Xe,s as fe,at as Ze,h as k,c as Fe,au as et,a as Te,av as tt,aw as at,ax as lt,ay as nt,aj as ot,az as st,aA as Ce,aB as rt,aC as it,a3 as ut,ad as ct,af as de,aa as dt,a2 as vt,j as J,aD as mt,aE as ft,i as bt,d as pt,a4 as gt,k as ht,U as yt,A as ve,F as St,aF as kt,aG as q,D as A,S as B,Y as Ct,m as xe,n as _e,w as me,t as u,p as $,z as U,x as _,aH as Z,Q as xt,I as W,aI as _t,O as wt,aJ as Dt,$ as we,V as Lt}from"./index-bacf9f48.js";import{b as Ft}from"./QSelect-53cc7671.js";import{T as Tt}from"./TouchPan-0d902253.js";import{u as $t}from"./useDialogs-f3d10379.js";import{u as Et}from"./useDefaults-be4f5e0f.js";import{_ as Nt}from"./ResponsivePage.vue_vue_type_script_setup_true_lang-f8d87b5c.js";import{u as Mt}from"./useRouting-b671dcd6.js";import"./QItem-e511e66b.js";import"./QItemLabel-136efd93.js";import"./QMenu-cb80e48e.js";import"./selection-2d07121c.js";import"./action-796f7659.js";import"./ErrorStates.vue_vue_type_script_setup_true_lang-1e8cae0f.js";import"./ui-00afdb08.js";function Y(a,i,L,d){const e=[];return a.forEach(h=>{d(h)===!0?e.push(h):i.push({failedPropValidation:L,file:h})}),e}function te(a){a&&a.dataTransfer&&(a.dataTransfer.dropEffect="copy"),fe(a)}const It={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},Rt=["rejected"];function Ot({editable:a,dnd:i,getFileInput:L,addFilesToQueue:d}){const{props:e,emit:h,proxy:w}=ae(),p=z(null),E=n(()=>e.accept!==void 0?e.accept.split(",").map(r=>(r=r.trim(),r==="*"?"*/":(r.endsWith("/*")&&(r=r.slice(0,r.length-1)),r.toUpperCase()))):null),b=n(()=>parseInt(e.maxFiles,10)),C=n(()=>parseInt(e.maxTotalSize,10));function V(r){if(a.value)if(r!==Object(r)&&(r={target:null}),r.target!==null&&r.target.matches('input[type="file"]')===!0)r.clientX===0&&r.clientY===0&&Xe(r);else{const f=L();f&&f!==r.target&&f.click(r)}}function N(r){a.value&&r&&d(null,r)}function j(r,f,T,D){let s=Array.from(f||r.target.files);const l=[],o=()=>{l.length!==0&&h("rejected",l)};if(e.accept!==void 0&&E.value.indexOf("*/")===-1&&(s=Y(s,l,"accept",c=>E.value.some(x=>c.type.toUpperCase().startsWith(x)||c.name.toUpperCase().endsWith(x))),s.length===0))return o();if(e.maxFileSize!==void 0){const c=parseInt(e.maxFileSize,10);if(s=Y(s,l,"max-file-size",x=>x.size<=c),s.length===0)return o()}if(e.multiple!==!0&&s.length!==0&&(s=[s[0]]),s.forEach(c=>{c.__key=c.webkitRelativePath+c.lastModified+c.name+c.size}),D===!0){const c=T.map(x=>x.__key);s=Y(s,l,"duplicate",x=>c.includes(x.__key)===!1)}if(s.length===0)return o();if(e.maxTotalSize!==void 0){let c=D===!0?T.reduce((x,G)=>x+G.size,0):0;if(s=Y(s,l,"max-total-size",x=>(c+=x.size,c<=C.value)),s.length===0)return o()}if(typeof e.filter=="function"){const c=e.filter(s);s=Y(s,l,"filter",x=>c.includes(x))}if(e.maxFiles!==void 0){let c=D===!0?T.length:0;if(s=Y(s,l,"max-files",()=>(c++,c<=b.value)),s.length===0)return o()}if(o(),s.length!==0)return s}function F(r){te(r),i.value!==!0&&(i.value=!0)}function g(r){fe(r),(r.relatedTarget!==null||Ze.is.safari!==!0?r.relatedTarget!==p.value:document.elementsFromPoint(r.clientX,r.clientY).includes(p.value)===!1)===!0&&(i.value=!1)}function R(r){te(r);const f=r.dataTransfer.files;f.length!==0&&d(null,f),i.value=!1}function O(r){if(i.value===!0)return k("div",{ref:p,class:`q-${r}__dnd absolute-full`,onDragenter:te,onDragover:te,onDragleave:g,onDrop:R})}return Object.assign(w,{pickFiles:V,addFiles:N}),{pickFiles:V,addFiles:N,onDragover:F,onDragleave:g,processFiles:j,getDndNode:O,maxFilesNumber:b,maxTotalSizeNumber:C}}const qt=Fe({name:"QFile",inheritAttrs:!1,props:{...et,...Te,...It,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...tt,...Rt],setup(a,{slots:i,emit:L,attrs:d}){const{proxy:e}=ae(),h=at(),w=z(null),p=z(!1),E=lt(a),{pickFiles:b,onDragover:C,onDragleave:V,processFiles:N,getDndNode:j}=Ot({editable:h.editable,dnd:p,getFileInput:H,addFilesToQueue:ee}),F=nt(a),g=n(()=>Object(a.modelValue)===a.modelValue?"length"in a.modelValue?Array.from(a.modelValue):[a.modelValue]:[]),R=n(()=>Ce(g.value)),O=n(()=>g.value.map(v=>v.name).join(", ")),r=n(()=>rt(g.value.reduce((v,M)=>v+M.size,0))),f=n(()=>({totalSize:r.value,filesNumber:g.value.length,maxFiles:a.maxFiles})),T=n(()=>({tabindex:-1,type:"file",title:"",accept:a.accept,capture:a.capture,name:E.value,...d,id:h.targetUid.value,disabled:h.editable.value!==!0})),D=n(()=>"q-file q-field--auto-height"+(p.value===!0?" q-file--dnd":"")),s=n(()=>a.multiple===!0&&a.append===!0);function l(v){const M=g.value.slice();M.splice(v,1),c(M)}function o(v){const M=g.value.indexOf(v);M>-1&&l(M)}function c(v){L("update:modelValue",a.multiple===!0?v:v[0])}function x(v){v.keyCode===13&&it(v)}function G(v){(v.keyCode===13||v.keyCode===32)&&b(v)}function H(){return w.value}function ee(v,M){const P=N(v,M,g.value,s.value),X=H();X!=null&&(X.value=""),P!==void 0&&((a.multiple===!0?a.modelValue&&P.every(oe=>g.value.includes(oe)):a.modelValue===P[0])||c(s.value===!0?g.value.concat(P):P))}function Q(){return[k("input",{class:[a.inputClass,"q-file__filler"],style:a.inputStyle})]}function le(){if(i.file!==void 0)return g.value.length===0?Q():g.value.map((M,P)=>i.file({index:P,file:M,ref:this}));if(i.selected!==void 0)return g.value.length===0?Q():i.selected({files:g.value,ref:this});if(a.useChips===!0)return g.value.length===0?Q():g.value.map((M,P)=>k(Ft,{key:"file-"+P,removable:h.editable.value,dense:!0,textColor:a.color,tabindex:a.tabindex,onRemove:()=>{l(P)}},()=>k("span",{class:"ellipsis",textContent:M.name})));const v=a.displayValue!==void 0?a.displayValue:O.value;return v.length!==0?[k("div",{class:a.inputClass,style:a.inputStyle,textContent:v})]:Q()}function ne(){const v={ref:w,...T.value,...F.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:ee};return a.multiple===!0&&(v.multiple=!0),k("input",v)}return Object.assign(h,{fieldClass:D,emitValue:c,hasValue:R,inputRef:w,innerValue:g,floatingLabel:n(()=>R.value===!0||Ce(a.displayValue)),computedCounter:n(()=>{if(a.counterLabel!==void 0)return a.counterLabel(f.value);const v=a.maxFiles;return`${g.value.length}${v!==void 0?" / "+v:""} (${r.value})`}),getControlChild:()=>j("file"),getControl:()=>{const v={ref:h.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:a.tabindex};return h.editable.value===!0&&Object.assign(v,{onDragover:C,onDragleave:V,onKeydown:x,onKeyup:G}),k("div",v,[ne()].concat(le()))}}),Object.assign(e,{removeAtIndex:l,removeFile:o,getNativeElement:()=>w.value}),ot(e,"nativeEl",()=>w.value),st(h)}}),De="q-slider__marker-labels",At=a=>({value:a}),Vt=({marker:a})=>k("div",{key:a.value,style:a.style,class:a.classes},a.label),$e=[34,37,40,33,39,38],Bt={...vt,...Te,min:{type:Number,default:0},max:{type:Number,default:100},innerMin:Number,innerMax:Number,step:{type:Number,default:1,validator:a=>a>=0},snap:Boolean,vertical:Boolean,reverse:Boolean,hideSelection:Boolean,color:String,markerLabelsClass:String,label:Boolean,labelColor:String,labelTextColor:String,labelAlways:Boolean,switchLabelSide:Boolean,markers:[Boolean,Number],markerLabels:[Boolean,Array,Object,Function],switchMarkerLabelsSide:Boolean,trackImg:String,trackColor:String,innerTrackImg:String,innerTrackColor:String,selectionColor:String,selectionImg:String,thumbSize:{type:String,default:"20px"},trackSize:{type:String,default:"4px"},disable:Boolean,readonly:Boolean,dense:Boolean,tabindex:[String,Number],thumbColor:String,thumbPath:{type:String,default:"M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0"}},zt=["pan","update:modelValue","change"];function jt({updateValue:a,updatePosition:i,getDragging:L,formAttrs:d}){const{props:e,emit:h,slots:w,proxy:{$q:p}}=ae(),E=ut(e,p),b=bt(d),C=z(!1),V=z(!1),N=z(!1),j=z(!1),F=n(()=>e.vertical===!0?"--v":"--h"),g=n(()=>"-"+(e.switchLabelSide===!0?"switched":"standard")),R=n(()=>e.vertical===!0?e.reverse===!0:e.reverse!==(p.lang.rtl===!0)),O=n(()=>isNaN(e.innerMin)===!0||e.innerMin<e.min?e.min:e.innerMin),r=n(()=>isNaN(e.innerMax)===!0||e.innerMax>e.max?e.max:e.innerMax),f=n(()=>e.disable!==!0&&e.readonly!==!0&&O.value<r.value),T=n(()=>(String(e.step).trim().split(".")[1]||"").length),D=n(()=>e.step===0?1:e.step),s=n(()=>f.value===!0?e.tabindex||0:-1),l=n(()=>e.max-e.min),o=n(()=>r.value-O.value),c=n(()=>se(O.value)),x=n(()=>se(r.value)),G=n(()=>e.vertical===!0?R.value===!0?"bottom":"top":R.value===!0?"right":"left"),H=n(()=>e.vertical===!0?"height":"width"),ee=n(()=>e.vertical===!0?"width":"height"),Q=n(()=>e.vertical===!0?"vertical":"horizontal"),le=n(()=>{const t={role:"slider","aria-valuemin":O.value,"aria-valuemax":r.value,"aria-orientation":Q.value,"data-step":e.step};return e.disable===!0?t["aria-disabled"]="true":e.readonly===!0&&(t["aria-readonly"]="true"),t}),ne=n(()=>`q-slider q-slider${F.value} q-slider--${C.value===!0?"":"in"}active inline no-wrap `+(e.vertical===!0?"row":"column")+(e.disable===!0?" disabled":" q-slider--enabled"+(f.value===!0?" q-slider--editable":""))+(N.value==="both"?" q-slider--focus":"")+(e.label||e.labelAlways===!0?" q-slider--label":"")+(e.labelAlways===!0?" q-slider--label-always":"")+(E.value===!0?" q-slider--dark":"")+(e.dense===!0?" q-slider--dense q-slider--dense"+F.value:""));function v(t){const m="q-slider__"+t;return`${m} ${m}${F.value} ${m}${F.value}${g.value}`}function M(t){const m="q-slider__"+t;return`${m} ${m}${F.value}`}const P=n(()=>{const t=e.selectionColor||e.color;return"q-slider__selection absolute"+(t!==void 0?` text-${t}`:"")}),X=n(()=>M("markers")+" absolute overflow-hidden"),oe=n(()=>M("track-container")),Ee=n(()=>v("pin")),Ne=n(()=>v("label")),Me=n(()=>v("text-container")),Ie=n(()=>v("marker-labels-container")+(e.markerLabelsClass!==void 0?` ${e.markerLabelsClass}`:"")),Re=n(()=>"q-slider__track relative-position no-outline"+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),Oe=n(()=>{const t={[ee.value]:e.trackSize};return e.trackImg!==void 0&&(t.backgroundImage=`url(${e.trackImg}) !important`),t}),qe=n(()=>"q-slider__inner absolute"+(e.innerTrackColor!==void 0?` bg-${e.innerTrackColor}`:"")),be=n(()=>{const t={[G.value]:`${100*c.value}%`,[H.value]:`${100*(x.value-c.value)}%`};return e.innerTrackImg!==void 0&&(t.backgroundImage=`url(${e.innerTrackImg}) !important`),t});function Ae(t){const{min:m,max:y,step:S}=e;let I=m+t*(y-m);if(S>0){const K=(I-m)%S;I+=(Math.abs(K)>=S/2?(K<0?-1:1)*S:0)-K}return T.value>0&&(I=parseFloat(I.toFixed(T.value))),J(I,O.value,r.value)}function se(t){return l.value===0?0:(t-e.min)/l.value}function Ve(t,m){const y=mt(t),S=e.vertical===!0?J((y.top-m.top)/m.height,0,1):J((y.left-m.left)/m.width,0,1);return J(R.value===!0?1-S:S,c.value,x.value)}const pe=n(()=>ct(e.markers)===!0?e.markers:D.value),ge=n(()=>{const t=[],m=pe.value,y=e.max;let S=e.min;do t.push(S),S+=m;while(S<y);return t.push(y),t}),he=n(()=>{const t=` ${De}${F.value}-`;return De+`${t}${e.switchMarkerLabelsSide===!0?"switched":"standard"}${t}${R.value===!0?"rtl":"ltr"}`}),re=n(()=>e.markerLabels===!1?null:ze(e.markerLabels).map((t,m)=>({index:m,value:t.value,label:t.label||t.value,classes:he.value+(t.classes!==void 0?" "+t.classes:""),style:{...Se(t.value),...t.style||{}}}))),ye=n(()=>({markerList:re.value,markerMap:je.value,classes:he.value,getStyle:Se})),Be=n(()=>{if(o.value!==0){const t=100*pe.value/o.value;return{...be.value,backgroundSize:e.vertical===!0?`2px ${t}%`:`${t}% 2px`}}return null});function ze(t){if(t===!1)return null;if(t===!0)return ge.value.map(At);if(typeof t=="function")return ge.value.map(y=>{const S=t(y);return de(S)===!0?{...S,value:y}:{value:y,label:S}});const m=({value:y})=>y>=e.min&&y<=e.max;return Array.isArray(t)===!0?t.map(y=>de(y)===!0?y:{value:y}).filter(m):Object.keys(t).map(y=>{const S=t[y],I=Number(y);return de(S)===!0?{...S,value:I}:{value:I,label:S}}).filter(m)}function Se(t){return{[G.value]:`${100*(t-e.min)/l.value}%`}}const je=n(()=>{if(e.markerLabels===!1)return null;const t={};return re.value.forEach(m=>{t[m.value]=m}),t});function Pe(){if(w["marker-label-group"]!==void 0)return w["marker-label-group"](ye.value);const t=w["marker-label"]||Vt;return re.value.map(m=>t({marker:m,...ye.value}))}const Ue=n(()=>[[Tt,We,void 0,{[Q.value]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function We(t){t.isFinal===!0?(j.value!==void 0&&(i(t.evt),t.touch===!0&&a(!0),j.value=void 0,h("pan","end")),C.value=!1,N.value=!1):t.isFirst===!0?(j.value=L(t.evt),i(t.evt),a(),C.value=!0,h("pan","start")):(i(t.evt),a())}function ke(){N.value=!1}function Ge(t){i(t,L(t)),a(),V.value=!0,C.value=!0,document.addEventListener("mouseup",ie,!0)}function ie(){V.value=!1,C.value=!1,a(!0),ke(),document.removeEventListener("mouseup",ie,!0)}function Ke(t){i(t,L(t)),a(!0)}function Qe(t){$e.includes(t.keyCode)&&a(!0)}function Ye(t){if(e.vertical===!0)return null;const m=p.lang.rtl!==e.reverse?1-t:t;return{transform:`translateX(calc(${2*m-1} * ${e.thumbSize} / 2 + ${50-100*m}%))`}}function Je(t){const m=n(()=>V.value===!1&&(N.value===t.focusValue||N.value==="both")?" q-slider--focus":""),y=n(()=>`q-slider__thumb q-slider__thumb${F.value} q-slider__thumb${F.value}-${R.value===!0?"rtl":"ltr"} absolute non-selectable`+m.value+(t.thumbColor.value!==void 0?` text-${t.thumbColor.value}`:"")),S=n(()=>({width:e.thumbSize,height:e.thumbSize,[G.value]:`${100*t.ratio.value}%`,zIndex:N.value===t.focusValue?2:void 0})),I=n(()=>t.labelColor.value!==void 0?` text-${t.labelColor.value}`:""),K=n(()=>Ye(t.ratio.value)),ue=n(()=>"q-slider__text"+(t.labelTextColor.value!==void 0?` text-${t.labelTextColor.value}`:""));return()=>{const ce=[k("svg",{class:"q-slider__thumb-shape absolute-full",viewBox:"0 0 20 20","aria-hidden":"true"},[k("path",{d:e.thumbPath})]),k("div",{class:"q-slider__focus-ring fit"})];return(e.label===!0||e.labelAlways===!0)&&(ce.push(k("div",{class:Ee.value+" absolute fit no-pointer-events"+I.value},[k("div",{class:Ne.value,style:{minWidth:e.thumbSize}},[k("div",{class:Me.value,style:K.value},[k("span",{class:ue.value},t.label.value)])])])),e.name!==void 0&&e.disable!==!0&&b(ce,"push")),k("div",{class:y.value,style:S.value,...t.getNodeData()},ce)}}function He(t,m,y,S){const I=[];e.innerTrackColor!=="transparent"&&I.push(k("div",{key:"inner",class:qe.value,style:be.value})),e.selectionColor!=="transparent"&&I.push(k("div",{key:"selection",class:P.value,style:t.value})),e.markers!==!1&&I.push(k("div",{key:"marker",class:X.value,style:Be.value})),S(I);const K=[ft("div",{key:"trackC",class:oe.value,tabindex:m.value,...y.value},[k("div",{class:Re.value,style:Oe.value},I)],"slide",f.value,()=>Ue.value)];if(e.markerLabels!==!1){const ue=e.switchMarkerLabelsSide===!0?"unshift":"push";K[ue](k("div",{key:"markerL",class:Ie.value},Pe()))}return K}return dt(()=>{document.removeEventListener("mouseup",ie,!0)}),{state:{active:C,focus:N,preventFocus:V,dragging:j,editable:f,classes:ne,tabindex:s,attributes:le,step:D,decimals:T,trackLen:l,innerMin:O,innerMinRatio:c,innerMax:r,innerMaxRatio:x,positionProp:G,sizeProp:H,isReversed:R},methods:{onActivate:Ge,onMobileClick:Ke,onBlur:ke,onKeyup:Qe,getContent:He,getThumbRenderFn:Je,convertRatioToModel:Ae,convertModelToRatio:se,getDraggingRatio:Ve}}}const Pt=()=>({}),Ut=Fe({name:"QSlider",props:{...Bt,modelValue:{required:!0,default:null,validator:a=>typeof a=="number"||a===null},labelValue:[String,Number]},emits:zt,setup(a,{emit:i}){const{proxy:{$q:L}}=ae(),{state:d,methods:e}=jt({updateValue:F,updatePosition:R,getDragging:g,formAttrs:pt(a)}),h=z(null),w=z(0),p=z(0);function E(){p.value=a.modelValue===null?d.innerMin.value:J(a.modelValue,d.innerMin.value,d.innerMax.value)}gt(()=>`${a.modelValue}|${d.innerMin.value}|${d.innerMax.value}`,E),E();const b=n(()=>e.convertModelToRatio(p.value)),C=n(()=>d.active.value===!0?w.value:b.value),V=n(()=>{const f={[d.positionProp.value]:`${100*d.innerMinRatio.value}%`,[d.sizeProp.value]:`${100*(C.value-d.innerMinRatio.value)}%`};return a.selectionImg!==void 0&&(f.backgroundImage=`url(${a.selectionImg}) !important`),f}),N=e.getThumbRenderFn({focusValue:!0,getNodeData:Pt,ratio:C,label:n(()=>a.labelValue!==void 0?a.labelValue:p.value),thumbColor:n(()=>a.thumbColor||a.color),labelColor:n(()=>a.labelColor),labelTextColor:n(()=>a.labelTextColor)}),j=n(()=>d.editable.value!==!0?{}:L.platform.is.mobile===!0?{onClick:e.onMobileClick}:{onMousedown:e.onActivate,onFocus:O,onBlur:e.onBlur,onKeydown:r,onKeyup:e.onKeyup});function F(f){p.value!==a.modelValue&&i("update:modelValue",p.value),f===!0&&i("change",p.value)}function g(){return h.value.getBoundingClientRect()}function R(f,T=d.dragging.value){const D=e.getDraggingRatio(f,T);p.value=e.convertRatioToModel(D),w.value=a.snap!==!0||a.step===0?D:e.convertModelToRatio(p.value)}function O(){d.focus.value=!0}function r(f){if(!$e.includes(f.keyCode))return;fe(f);const T=([34,33].includes(f.keyCode)?10:1)*d.step.value,D=([34,37,40].includes(f.keyCode)?-1:1)*(d.isReversed.value===!0?-1:1)*(a.vertical===!0?-1:1)*T;p.value=J(parseFloat((p.value+D).toFixed(d.decimals.value)),d.innerMin.value,d.innerMax.value),F()}return()=>{const f=e.getContent(V,d.tabindex,j,T=>{T.push(N())});return k("div",{ref:h,class:d.classes.value+(a.modelValue===null?" q-slider--no-value":""),...d.attributes.value,"aria-valuenow":a.modelValue},f)}}});function Le(a){setTimeout(()=>{window.URL.revokeObjectURL(a.href)},1e4),a.remove()}function Wt(a,i,L={}){const{mimeType:d,byteOrderMark:e,encoding:h}=typeof L=="string"?{mimeType:L}:L,w=h!==void 0?new TextEncoder(h).encode([i]):i,p=e!==void 0?[e,w]:[w],E=new Blob(p,{type:d||"application/octet-stream"}),b=document.createElement("a");b.href=window.URL.createObjectURL(E),b.setAttribute("download",a),typeof b.download>"u"&&b.setAttribute("target","_blank"),b.classList.add("hidden"),b.style.position="fixed",document.body.appendChild(b);try{return b.click(),Le(b),!0}catch(C){return Le(b),C}}const Gt={class:"q-mb-xl"},Kt=u("p",{class:"text-h6"},"Options",-1),Qt={class:"q-mb-md"},Yt=u("p",null,"Reset your app Settings to the defaults without impacting any of your data.",-1),Jt={class:"q-mb-md"},Ht=u("p",null," Welcome overlay provides helpful instructions on basic app usage on the Dashboard page. ",-1),Xt={class:"q-mb-md"},Zt=u("p",null,"Show descriptions for records displayed on the Dashboard page.",-1),ea=u("p",null,"Dark mode allows you to switch between a light or dark theme for the app.",-1),ta={class:"q-mb-xl"},aa=u("p",{class:"text-h6"},"Defaults",-1),la=u("p",null,"Load default records into the database to get started using the app.",-1),na={class:"q-mb-md"},oa={class:"q-mb-xl"},sa=u("p",{class:"text-h6"},"Data Management",-1),ra={class:"q-mb-md"},ia=u("p",null," Import data into the database from a JSON file. The app expects the data in the file to be structured the same as the exported version. Logs are ignored during imports. ",-1),ua={class:"q-mb-md"},ca=u("p",null," Export your data as a JSON file. Do this on a regularly basis so you have a backup of your data. ",-1),da={class:"q-mb-xl"},va=u("p",{class:"text-h6"},"Logging",-1),ma={class:"q-mb-md"},fa=u("p",null,"View the app logs to troubleshoot issues.",-1),ba={class:"q-mb-md"},pa=u("p",null," Validate that the logging settings below are working as expected by generating some test logs. ",-1),ga={class:"q-mb-md"},ha=u("p",null,"Show Console Logs will display all log messages in the browser console.",-1),ya={class:"q-mb-md"},Sa=u("p",null,"Show Info Messages will display info level notifications.",-1),ka={class:"q-mb-md"},Ca=u("p",null," Change log retention duration below. Logs older than the selected time will be deleted. This functions retroactivley. Expired log processing occurs every time the app is loaded. ",-1),xa={class:"q-mx-lg"},_a={class:"q-mb-xl"},wa=u("p",{class:"text-h6 text-negative"},"DANGER ZONE",-1),Da=u("p",null," The following operations cannot be undone. Consider exporting your data before proceeding. ",-1),La={class:"q-mb-md"},Fa=u("p",null,"Delete the app logs from the database.",-1),Ta={class:"q-mb-md"},$a=u("p",null,"Permanently delete all data from the database.",-1),Ea={class:"q-mb-md"},Na=u("p",null,"Delete the underlining database and all of its data (requires website reload).",-1),Ka=ht({__name:"SettingsView",setup(a){yt({title:`${ve} - Settings`});const{log:i}=St(),{notify:L}=kt(),{confirmDialog:d}=$t(),{onDefaultExamples:e,onDefaultTests:h}=Et(),{goToLogsData:w}=Mt(),p=z([]),E=z(0),b=z(null),C=[q[q["One Week"]],q[q["One Month"]],q[q["Three Months"]],q[q["Six Months"]],q[q["One Year"]],q[q.Forever]],V=A.liveSettings().subscribe({next:s=>{var o;p.value=s;const l=(o=s.find(c=>c.key===B.LOG_RETENTION_DURATION))==null?void 0:o.value;E.value=C.findIndex(c=>c===q[l])},error:s=>{i.error("Error fetching live Settings",s)}});Ct(()=>{V.unsubscribe()});function N(){i.debug("This is a Debug Log",{name:"Debug"}),i.info("This is an Info Log",{name:"Info"}),i.warn("This is a Warning Log",{name:"Warning"}),i.error("This is an Error Log",{name:"Error"})}function j(s){var o,c;const l=((c=(o=s[0])==null?void 0:o.importFile)==null?void 0:c.name)||void 0;i.warn(`Cannot import"${l}`,s)}function F(){var s;d("Import",`Import backup data from ${(s=b==null?void 0:b.value)==null?void 0:s.name} and attempt to load records into the database from it?`,W.INFO,"info",async()=>{try{const l=JSON.parse(await b.value.text());if(i.silentDebug("backupData:",l),l.appName!==ve)throw new Error(`Cannot import data from the app ${l.appName}`);l[we.SETTINGS].length>0&&await Promise.all(l[we.SETTINGS].filter(o=>Object.values(B).includes(o.key)).map(async o=>await A.setSetting(o.key,o.value))),await Promise.all([Object.values(Lt).map(async o=>await A.importRecords(o,l[o]))]),b.value=null,i.info("Successfully imported available data")}catch(l){i.error("Error during import",l)}})}function g(){const s=ve.toLowerCase().split(" ").join("-"),l=new Date().toISOString().split("T")[0],o=`export-${s}-${l}.json`;d("Export",`Export all data into the file "${o}" as a backup?`,W.INFO,"info",async()=>{try{const c=await A.getBackupData();if(i.silentDebug("backupData:",c),Wt(o,JSON.stringify(c),{encoding:"UTF-8",mimeType:"application/json"})===!0)i.info("File downloaded successfully",{filename:o});else throw new Error("Browser denied file download")}catch(c){i.error("Export failed",c)}})}async function R(s){try{const l=C[s],o=q[l];await A.setSetting(B.LOG_RETENTION_DURATION,o),i.info("Updated log retention duration",{logDurationKey:l,logDuration:o,index:s})}catch(l){i.error("Log retention duration update failed",l)}}function O(){d("Reset Settings","Would you like to reset your app Settings to the defaults? This does not impact your data.",W.REFRESH,"primary",async()=>{try{await A.clearSettings(),i.info("Successfully reset settings")}catch(s){i.error("Error reseting settings",s)}})}function r(){d("Delete Logs","Permanetly delete all Logs from the database?",W.CLEAR,"negative",async()=>{try{await A.clearLogs(),i.info("Successfully deleted logs data")}catch(s){i.error("Error deleting Logs",s)}})}function f(){d("Delete All","Permanetly delete all data from the database?",W.CLEAR,"negative",async()=>{try{await A.clearAll(),i.info("All data successfully deleted")}catch(s){i.error("Error deleting all data",s)}})}function T(){d("Delete Database","Delete the underlining database? All data will be lost. You must reload the website after this action to reinitialize the database.",W.CLEAR,"negative",async()=>{try{await A.deleteDatabase(),L("Reload the website now",W.WARN,"warning")}catch(s){i.error("Database deletion failed",s)}})}function D(s){var l;return(l=p.value.find(o=>o.key===s))==null?void 0:l.value}return(s,l)=>(xe(),_e(Nt,{bannerIcon:_(W).SETTINGS,bannerTitle:"Settings"},{default:me(()=>[u("section",Gt,[Kt,u("div",Qt,[Yt,$(U,{label:"Reset Settings",color:"primary",onClick:l[0]||(l[0]=o=>O())})]),u("div",Jt,[Ht,$(Z,{label:"Show Welcome Overlay","model-value":D(_(B).WELCOME_OVERLAY),"onUpdate:modelValue":l[1]||(l[1]=o=>_(A).setSetting(_(B).WELCOME_OVERLAY,o))},null,8,["model-value"])]),u("div",Xt,[Zt,$(Z,{label:"Show Dashboard Descriptions","model-value":D(_(B).DASHBOARD_DESCRIPTIONS),"onUpdate:modelValue":l[2]||(l[2]=o=>_(A).setSetting(_(B).DASHBOARD_DESCRIPTIONS,o))},null,8,["model-value"])]),u("div",null,[ea,$(Z,{label:"Dark Mode","model-value":D(_(B).DARK_MODE),"onUpdate:modelValue":l[3]||(l[3]=o=>_(A).setSetting(_(B).DARK_MODE,o))},null,8,["model-value"])])]),u("section",ta,[aa,u("div",null,[la,u("div",na,[$(U,{label:"Examples",color:"primary",onClick:l[4]||(l[4]=o=>_(e)())})]),u("div",null,[$(U,{label:"Tests",color:"primary",onClick:l[5]||(l[5]=o=>_(h)())})])])]),u("section",oa,[sa,u("div",ra,[ia,$(qt,{modelValue:b.value,"onUpdate:modelValue":l[8]||(l[8]=o=>b.value=o),dense:"",outlined:"",counter:"","bottom-slots":"",label:"File Select","max-file-size":_(Dt).MAX_FILE_SIZE,accept:"application/json",onRejected:j},{before:me(()=>[$(U,{disable:!b.value,label:"Import",color:"primary",onClick:l[6]||(l[6]=o=>F())},null,8,["disable"])]),append:me(()=>[b.value?(xe(),_e(xt,{key:0,name:_(W).CLOSE,class:"cursor-pointer",onClick:l[7]||(l[7]=_t(o=>b.value=null,["stop"]))},null,8,["name"])):wt("",!0)]),_:1},8,["modelValue","max-file-size"])]),u("div",ua,[ca,$(U,{label:"Export",color:"primary",onClick:l[9]||(l[9]=o=>g())})])]),u("section",da,[va,u("div",ma,[fa,$(U,{label:"Access Logs",color:"primary",onClick:l[10]||(l[10]=o=>_(w)())})]),u("div",ba,[pa,$(U,{label:"Test Logger",color:"primary",onClick:l[11]||(l[11]=o=>N())})]),u("div",ga,[ha,$(Z,{label:"Show Console Logs","model-value":D(_(B).CONSOLE_LOGS),"onUpdate:modelValue":l[12]||(l[12]=o=>_(A).setSetting(_(B).CONSOLE_LOGS,o))},null,8,["model-value"])]),u("div",ya,[Sa,$(Z,{label:"Show Info Messages","model-value":D(_(B).INFO_MESSAGES),"onUpdate:modelValue":l[13]||(l[13]=o=>_(A).setSetting(_(B).INFO_MESSAGES,o))},null,8,["model-value"])]),u("div",ka,[Ca,u("div",xa,[$(Ut,{modelValue:E.value,"onUpdate:modelValue":l[14]||(l[14]=o=>E.value=o),"label-value":C[E.value],color:"primary",markers:"","label-always":"","switch-label-side":"",min:0,max:C.length-1,onChange:l[15]||(l[15]=o=>R(o))},null,8,["modelValue","label-value","max"])])])]),u("section",_a,[wa,Da,u("div",La,[Fa,$(U,{label:"Delete Logs",color:"negative",onClick:l[16]||(l[16]=o=>r())})]),u("div",Ta,[$a,$(U,{label:"Delete All Data",color:"negative",onClick:l[17]||(l[17]=o=>f())})]),u("div",Ea,[Na,$(U,{label:"Delete Database",color:"negative",onClick:l[18]||(l[18]=o=>T())})])])]),_:1},8,["bannerIcon"]))}});export{Ka as default};