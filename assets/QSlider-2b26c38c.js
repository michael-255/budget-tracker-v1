import{g as ae,a1 as _e,r as y,e as t,ab as Re,ad as E,a8 as Fe,a0 as Ie,a as Ne,j as L,aH as ze,h as c,aI as Ae,i as Pe,c as Ve,d as De,a2 as je,s as Ee}from"./index-697a561b.js";import{T as Ke}from"./TouchPan-a6f2f6f7.js";const ee="q-slider__marker-labels",Oe=l=>({value:l}),Qe=({marker:l})=>c("div",{key:l.value,style:l.style,class:l.classes},l.label),te=[34,37,40,33,39,38],He={...Ie,...Ne,min:{type:Number,default:0},max:{type:Number,default:100},innerMin:Number,innerMax:Number,step:{type:Number,default:1,validator:l=>l>=0},snap:Boolean,vertical:Boolean,reverse:Boolean,hideSelection:Boolean,color:String,markerLabelsClass:String,label:Boolean,labelColor:String,labelTextColor:String,labelAlways:Boolean,switchLabelSide:Boolean,markers:[Boolean,Number],markerLabels:[Boolean,Array,Object,Function],switchMarkerLabelsSide:Boolean,trackImg:String,trackColor:String,innerTrackImg:String,innerTrackColor:String,selectionColor:String,selectionImg:String,thumbSize:{type:String,default:"20px"},trackSize:{type:String,default:"4px"},disable:Boolean,readonly:Boolean,dense:Boolean,tabindex:[String,Number],thumbColor:String,thumbPath:{type:String,default:"M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0"}},Ue=["pan","update:modelValue","change"];function We({updateValue:l,updatePosition:k,getDragging:q,formAttrs:s}){const{props:e,emit:w,slots:S,proxy:{$q:v}}=ae(),B=_e(e,v),I=Pe(s),m=y(!1),$=y(!1),b=y(!1),M=y(!1),d=t(()=>e.vertical===!0?"--v":"--h"),N=t(()=>"-"+(e.switchLabelSide===!0?"switched":"standard")),p=t(()=>e.vertical===!0?e.reverse===!0:e.reverse!==(v.lang.rtl===!0)),g=t(()=>isNaN(e.innerMin)===!0||e.innerMin<e.min?e.min:e.innerMin),C=t(()=>isNaN(e.innerMax)===!0||e.innerMax>e.max?e.max:e.innerMax),u=t(()=>e.disable!==!0&&e.readonly!==!0&&g.value<C.value),f=t(()=>(String(e.step).trim().split(".")[1]||"").length),x=t(()=>e.step===0?1:e.step),le=t(()=>u.value===!0?e.tabindex||0:-1),T=t(()=>e.max-e.min),K=t(()=>C.value-g.value),_=t(()=>A(g.value)),z=t(()=>A(C.value)),R=t(()=>e.vertical===!0?p.value===!0?"bottom":"top":p.value===!0?"right":"left"),O=t(()=>e.vertical===!0?"height":"width"),re=t(()=>e.vertical===!0?"width":"height"),Q=t(()=>e.vertical===!0?"vertical":"horizontal"),ne=t(()=>{const a={role:"slider","aria-valuemin":g.value,"aria-valuemax":C.value,"aria-orientation":Q.value,"data-step":e.step};return e.disable===!0?a["aria-disabled"]="true":e.readonly===!0&&(a["aria-readonly"]="true"),a}),se=t(()=>`q-slider q-slider${d.value} q-slider--${m.value===!0?"":"in"}active inline no-wrap `+(e.vertical===!0?"row":"column")+(e.disable===!0?" disabled":" q-slider--enabled"+(u.value===!0?" q-slider--editable":""))+(b.value==="both"?" q-slider--focus":"")+(e.label||e.labelAlways===!0?" q-slider--label":"")+(e.labelAlways===!0?" q-slider--label-always":"")+(B.value===!0?" q-slider--dark":"")+(e.dense===!0?" q-slider--dense q-slider--dense"+d.value:""));function F(a){const r="q-slider__"+a;return`${r} ${r}${d.value} ${r}${d.value}${N.value}`}function H(a){const r="q-slider__"+a;return`${r} ${r}${d.value}`}const oe=t(()=>{const a=e.selectionColor||e.color;return"q-slider__selection absolute"+(a!==void 0?` text-${a}`:"")}),ue=t(()=>H("markers")+" absolute overflow-hidden"),ie=t(()=>H("track-container")),ce=t(()=>F("pin")),ve=t(()=>F("label")),de=t(()=>F("text-container")),me=t(()=>F("marker-labels-container")+(e.markerLabelsClass!==void 0?` ${e.markerLabelsClass}`:"")),be=t(()=>"q-slider__track relative-position no-outline"+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),fe=t(()=>{const a={[re.value]:e.trackSize};return e.trackImg!==void 0&&(a.backgroundImage=`url(${e.trackImg}) !important`),a}),ke=t(()=>"q-slider__inner absolute"+(e.innerTrackColor!==void 0?` bg-${e.innerTrackColor}`:"")),U=t(()=>{const a={[R.value]:`${100*_.value}%`,[O.value]:`${100*(z.value-_.value)}%`};return e.innerTrackImg!==void 0&&(a.backgroundImage=`url(${e.innerTrackImg}) !important`),a});function pe(a){const{min:r,max:n,step:o}=e;let i=r+a*(n-r);if(o>0){const h=(i-r)%o;i+=(Math.abs(h)>=o/2?(h<0?-1:1)*o:0)-h}return f.value>0&&(i=parseFloat(i.toFixed(f.value))),L(i,g.value,C.value)}function A(a){return T.value===0?0:(a-e.min)/T.value}function ge(a,r){const n=ze(a),o=e.vertical===!0?L((n.top-r.top)/r.height,0,1):L((n.left-r.left)/r.width,0,1);return L(p.value===!0?1-o:o,_.value,z.value)}const W=t(()=>Re(e.markers)===!0?e.markers:x.value),X=t(()=>{const a=[],r=W.value,n=e.max;let o=e.min;do a.push(o),o+=r;while(o<n);return a.push(n),a}),G=t(()=>{const a=` ${ee}${d.value}-`;return ee+`${a}${e.switchMarkerLabelsSide===!0?"switched":"standard"}${a}${p.value===!0?"rtl":"ltr"}`}),P=t(()=>e.markerLabels===!1?null:he(e.markerLabels).map((a,r)=>({index:r,value:a.value,label:a.label||a.value,classes:G.value+(a.classes!==void 0?" "+a.classes:""),style:{...Y(a.value),...a.style||{}}}))),J=t(()=>({markerList:P.value,markerMap:xe.value,classes:G.value,getStyle:Y})),Ce=t(()=>{if(K.value!==0){const a=100*W.value/K.value;return{...U.value,backgroundSize:e.vertical===!0?`2px ${a}%`:`${a}% 2px`}}return null});function he(a){if(a===!1)return null;if(a===!0)return X.value.map(Oe);if(typeof a=="function")return X.value.map(n=>{const o=a(n);return E(o)===!0?{...o,value:n}:{value:n,label:o}});const r=({value:n})=>n>=e.min&&n<=e.max;return Array.isArray(a)===!0?a.map(n=>E(n)===!0?n:{value:n}).filter(r):Object.keys(a).map(n=>{const o=a[n],i=Number(n);return E(o)===!0?{...o,value:i}:{value:i,label:o}}).filter(r)}function Y(a){return{[R.value]:`${100*(a-e.min)/T.value}%`}}const xe=t(()=>{if(e.markerLabels===!1)return null;const a={};return P.value.forEach(r=>{a[r.value]=r}),a});function ye(){if(S["marker-label-group"]!==void 0)return S["marker-label-group"](J.value);const a=S["marker-label"]||Qe;return P.value.map(r=>a({marker:r,...J.value}))}const Se=t(()=>[[Ke,$e,void 0,{[Q.value]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function $e(a){a.isFinal===!0?(M.value!==void 0&&(k(a.evt),a.touch===!0&&l(!0),M.value=void 0,w("pan","end")),m.value=!1,b.value=!1):a.isFirst===!0?(M.value=q(a.evt),k(a.evt),l(),m.value=!0,w("pan","start")):(k(a.evt),l())}function Z(){b.value=!1}function Me(a){k(a,q(a)),l(),$.value=!0,m.value=!0,document.addEventListener("mouseup",V,!0)}function V(){$.value=!1,m.value=!1,l(!0),Z(),document.removeEventListener("mouseup",V,!0)}function Le(a){k(a,q(a)),l(!0)}function qe(a){te.includes(a.keyCode)&&l(!0)}function we(a){if(e.vertical===!0)return null;const r=v.lang.rtl!==e.reverse?1-a:a;return{transform:`translateX(calc(${2*r-1} * ${e.thumbSize} / 2 + ${50-100*r}%))`}}function Be(a){const r=t(()=>$.value===!1&&(b.value===a.focusValue||b.value==="both")?" q-slider--focus":""),n=t(()=>`q-slider__thumb q-slider__thumb${d.value} q-slider__thumb${d.value}-${p.value===!0?"rtl":"ltr"} absolute non-selectable`+r.value+(a.thumbColor.value!==void 0?` text-${a.thumbColor.value}`:"")),o=t(()=>({width:e.thumbSize,height:e.thumbSize,[R.value]:`${100*a.ratio.value}%`,zIndex:b.value===a.focusValue?2:void 0})),i=t(()=>a.labelColor.value!==void 0?` text-${a.labelColor.value}`:""),h=t(()=>we(a.ratio.value)),D=t(()=>"q-slider__text"+(a.labelTextColor.value!==void 0?` text-${a.labelTextColor.value}`:""));return()=>{const j=[c("svg",{class:"q-slider__thumb-shape absolute-full",viewBox:"0 0 20 20","aria-hidden":"true"},[c("path",{d:e.thumbPath})]),c("div",{class:"q-slider__focus-ring fit"})];return(e.label===!0||e.labelAlways===!0)&&(j.push(c("div",{class:ce.value+" absolute fit no-pointer-events"+i.value},[c("div",{class:ve.value,style:{minWidth:e.thumbSize}},[c("div",{class:de.value,style:h.value},[c("span",{class:D.value},a.label.value)])])])),e.name!==void 0&&e.disable!==!0&&I(j,"push")),c("div",{class:n.value,style:o.value,...a.getNodeData()},j)}}function Te(a,r,n,o){const i=[];e.innerTrackColor!=="transparent"&&i.push(c("div",{key:"inner",class:ke.value,style:U.value})),e.selectionColor!=="transparent"&&i.push(c("div",{key:"selection",class:oe.value,style:a.value})),e.markers!==!1&&i.push(c("div",{key:"marker",class:ue.value,style:Ce.value})),o(i);const h=[Ae("div",{key:"trackC",class:ie.value,tabindex:r.value,...n.value},[c("div",{class:be.value,style:fe.value},i)],"slide",u.value,()=>Se.value)];if(e.markerLabels!==!1){const D=e.switchMarkerLabelsSide===!0?"unshift":"push";h[D](c("div",{key:"markerL",class:me.value},ye()))}return h}return Fe(()=>{document.removeEventListener("mouseup",V,!0)}),{state:{active:m,focus:b,preventFocus:$,dragging:M,editable:u,classes:se,tabindex:le,attributes:ne,step:x,decimals:f,trackLen:T,innerMin:g,innerMinRatio:_,innerMax:C,innerMaxRatio:z,positionProp:R,sizeProp:O,isReversed:p},methods:{onActivate:Me,onMobileClick:Le,onBlur:Z,onKeyup:qe,getContent:Te,getThumbRenderFn:Be,convertRatioToModel:pe,convertModelToRatio:A,getDraggingRatio:ge}}}const Xe=()=>({}),Ye=Ve({name:"QSlider",props:{...He,modelValue:{required:!0,default:null,validator:l=>typeof l=="number"||l===null},labelValue:[String,Number]},emits:Ue,setup(l,{emit:k}){const{proxy:{$q:q}}=ae(),{state:s,methods:e}=We({updateValue:d,updatePosition:p,getDragging:N,formAttrs:De(l)}),w=y(null),S=y(0),v=y(0);function B(){v.value=l.modelValue===null?s.innerMin.value:L(l.modelValue,s.innerMin.value,s.innerMax.value)}je(()=>`${l.modelValue}|${s.innerMin.value}|${s.innerMax.value}`,B),B();const I=t(()=>e.convertModelToRatio(v.value)),m=t(()=>s.active.value===!0?S.value:I.value),$=t(()=>{const u={[s.positionProp.value]:`${100*s.innerMinRatio.value}%`,[s.sizeProp.value]:`${100*(m.value-s.innerMinRatio.value)}%`};return l.selectionImg!==void 0&&(u.backgroundImage=`url(${l.selectionImg}) !important`),u}),b=e.getThumbRenderFn({focusValue:!0,getNodeData:Xe,ratio:m,label:t(()=>l.labelValue!==void 0?l.labelValue:v.value),thumbColor:t(()=>l.thumbColor||l.color),labelColor:t(()=>l.labelColor),labelTextColor:t(()=>l.labelTextColor)}),M=t(()=>s.editable.value!==!0?{}:q.platform.is.mobile===!0?{onClick:e.onMobileClick}:{onMousedown:e.onActivate,onFocus:g,onBlur:e.onBlur,onKeydown:C,onKeyup:e.onKeyup});function d(u){v.value!==l.modelValue&&k("update:modelValue",v.value),u===!0&&k("change",v.value)}function N(){return w.value.getBoundingClientRect()}function p(u,f=s.dragging.value){const x=e.getDraggingRatio(u,f);v.value=e.convertRatioToModel(x),S.value=l.snap!==!0||l.step===0?x:e.convertModelToRatio(v.value)}function g(){s.focus.value=!0}function C(u){if(!te.includes(u.keyCode))return;Ee(u);const f=([34,33].includes(u.keyCode)?10:1)*s.step.value,x=([34,37,40].includes(u.keyCode)?-1:1)*(s.isReversed.value===!0?-1:1)*(l.vertical===!0?-1:1)*f;v.value=L(parseFloat((v.value+x).toFixed(s.decimals.value)),s.innerMin.value,s.innerMax.value),d()}return()=>{const u=e.getContent($,s.tabindex,M,f=>{f.push(b())});return c("div",{ref:w,class:s.classes.value+(l.modelValue===null?" q-slider--no-value":""),...s.attributes.value,"aria-valuenow":l.modelValue},u)}}});export{Ye as Q};