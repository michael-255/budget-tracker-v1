import{c as q,h as w,g as j,aY as E,aZ as C,a_ as K,r as p,b2 as M,e as _,a2 as m,a8 as W,f as G,b3 as U,b4 as Y,b5 as Z,b6 as J,x as g,k as X,b7 as ee,m as x,n as O,w as v,p as s,b8 as te,aN as ae,b9 as oe,aQ as S,aP as ne,G as le,v as H,z as re,I as P,R as se,ba as ue,bb as ie,aS as ce,al as fe,Q as de,t as ve,bc as me}from"./index-54cdbb61.js";const pe=w("div",{class:"q-space"}),z=q({name:"QSpace",setup(){return()=>pe}}),he=q({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:n}){const{proxy:{$q:c}}=j(),t=E(K,C);if(t===C)return console.error("QFooter needs to be child of QLayout"),C;const l=p(parseInt(e.heightHint,10)),r=p(!0),f=p(M.value===!0||t.isContainer.value===!0?0:window.innerHeight),u=_(()=>e.reveal===!0||t.view.value.indexOf("F")>-1||c.platform.is.ios&&t.isContainer.value===!0),b=_(()=>t.isContainer.value===!0?t.containerHeight.value:f.value),h=_(()=>{if(e.modelValue!==!0)return 0;if(u.value===!0)return r.value===!0?l.value:0;const a=t.scroll.value.position+b.value+l.value-t.height.value;return a>0?a:0}),Q=_(()=>e.modelValue!==!0||u.value===!0&&r.value!==!0),F=_(()=>e.modelValue===!0&&Q.value===!0&&e.reveal===!0),D=_(()=>"q-footer q-layout__section--marginal "+(u.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(Q.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(u.value!==!0?" hidden":""):"")),T=_(()=>{const a=t.rows.value.bottom,i={};return a[0]==="l"&&t.left.space===!0&&(i[c.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),a[2]==="r"&&t.right.space===!0&&(i[c.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),i});function d(a,i){t.update("footer",a,i)}function y(a,i){a.value!==i&&(a.value=i)}function A({height:a}){y(l,a),d("size",a)}function N(){if(e.reveal!==!0)return;const{direction:a,position:i,inflectionPoint:k}=t.scroll.value;y(r,a==="up"||i-k<100||t.height.value-b.value-i-l.value<300)}function L(a){F.value===!0&&y(r,!0),n("focusin",a)}m(()=>e.modelValue,a=>{d("space",a),y(r,!0),t.animate()}),m(h,a=>{d("offset",a)}),m(()=>e.reveal,a=>{a===!1&&y(r,e.modelValue)}),m(r,a=>{t.animate(),n("reveal",a)}),m([l,t.scroll,t.height],N),m(()=>c.screen.height,a=>{t.isContainer.value!==!0&&y(f,a)});const V={};return t.instances.footer=V,e.modelValue===!0&&d("size",l.value),d("space",e.modelValue),d("offset",h.value),W(()=>{t.instances.footer===V&&(t.instances.footer=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const a=G(o.default,[w(U,{debounce:0,onResize:A})]);return e.elevated===!0&&a.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),w("footer",{class:D.value,style:T.value,onFocusin:L},a)}}});function B(e){return Z()?(J(e),!0):!1}function _e(e){return typeof e=="function"?e():g(e)}const I=typeof window<"u";function be(e,o=1e3,n={}){const{immediate:c=!0,immediateCallback:t=!1}=n;let l=null;const r=p(!1);function f(){l&&(clearInterval(l),l=null)}function u(){r.value=!1,f()}function b(){const h=_e(o);h<=0||(r.value=!0,t&&e(),f(),l=setInterval(e,h))}if(c&&I&&b(),Y(o)||typeof o=="function"){const h=m(o,()=>{r.value&&I&&b()});B(h)}return B(u),{isActive:r,pause:u,resume:b}}var ye=Object.defineProperty,R=Object.getOwnPropertySymbols,ge=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable,$=(e,o,n)=>o in e?ye(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,Ce=(e,o)=>{for(var n in o||(o={}))ge.call(o,n)&&$(e,n,o[n]);if(R)for(var n of R(o))we.call(o,n)&&$(e,n,o[n]);return e};function Qe(e=1e3,o={}){const{controls:n=!1,immediate:c=!0,callback:t}=o,l=p(0),r=()=>l.value+=1,f=()=>{l.value=0},u=be(t?()=>{r(),t(l.value)}:r,e,{immediate:c});return n?Ce({counter:l,reset:f},u):l}const Ve={class:"text-h6"},Oe=X({__name:"ActiveLayout",setup(e){const o=Qe(1e3),n=p(""),c=p(Date.now()),t=p("");return m(o,()=>{t.value=ee(Date.now()-c.value)||""}),(l,r)=>(x(),O(me,{view:"hHh LpR fFf"},{default:v(()=>[s(te,{elevated:"",class:ae(`bg-${g(oe)}`)},{default:v(()=>[s(S,null,{default:v(()=>[s(ne,{class:"q-ml-xs"},{default:v(()=>[le(H(n.value),1)]),_:1}),s(re,{flat:"",round:"",icon:g(P).BACK,to:{name:g(se).DASHBOARD}},null,8,["icon","to"])]),_:1})]),_:1},8,["class"]),s(ue,null,{default:v(()=>[s(g(ie),null,{default:v(({Component:f,route:u})=>[s(ce,{name:"global-fade",mode:"out-in"},{default:v(()=>[(x(),O(fe(f),{key:u.path}))]),_:2},1024)]),_:1})]),_:1}),s(he,{elevated:"",class:"bg-primary"},{default:v(()=>[s(S,null,{default:v(()=>[s(z),s(de,{name:g(P).STOPWATCH,size:"sm",class:"q-mr-sm"},null,8,["name"]),ve("div",Ve,H(t.value),1),s(z)]),_:1})]),_:1})]),_:1}))}});export{Oe as default};