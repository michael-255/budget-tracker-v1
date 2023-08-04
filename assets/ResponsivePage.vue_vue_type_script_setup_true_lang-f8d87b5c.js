import{g as Q,aW as P,aX as f,aY as T,e as l,a0 as O,h as x,c as V,r as S,a4 as q,aa as z,aQ as F,a5 as H,aZ as R,a_ as D,k as E,m as b,n as w,w as g,t as m,G as C,p as v,Q as K,K as L,v as j,O as A,B,q as N,a$ as U,z as W,x as X,I as Y}from"./index-bacf9f48.js";const G={position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,validator:e=>e.length===2},expand:Boolean};function Z(){const{props:e,proxy:{$q:a}}=Q(),s=P(T,f);if(s===f)return console.error("QPageSticky needs to be child of QLayout"),f;const r=l(()=>{const t=e.position;return{top:t.indexOf("top")>-1,right:t.indexOf("right")>-1,bottom:t.indexOf("bottom")>-1,left:t.indexOf("left")>-1,vertical:t==="top"||t==="bottom",horizontal:t==="left"||t==="right"}}),n=l(()=>s.header.offset),d=l(()=>s.right.offset),i=l(()=>s.footer.offset),o=l(()=>s.left.offset),h=l(()=>{let t=0,c=0;const u=r.value,$=a.lang.rtl===!0?-1:1;u.top===!0&&n.value!==0?c=`${n.value}px`:u.bottom===!0&&i.value!==0&&(c=`${-i.value}px`),u.left===!0&&o.value!==0?t=`${$*o.value}px`:u.right===!0&&d.value!==0&&(t=`${-$*d.value}px`);const p={transform:`translate(${t}, ${c})`};return e.offset&&(p.margin=`${e.offset[1]}px ${e.offset[0]}px`),u.vertical===!0?(o.value!==0&&(p[a.lang.rtl===!0?"right":"left"]=`${o.value}px`),d.value!==0&&(p[a.lang.rtl===!0?"left":"right"]=`${d.value}px`)):u.horizontal===!0&&(n.value!==0&&(p.top=`${n.value}px`),i.value!==0&&(p.bottom=`${i.value}px`)),p}),_=l(()=>`q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand===!0?"expand":"shrink"}`);function y(t){const c=O(t.default);return x("div",{class:_.value,style:h.value},e.expand===!0?c:[x("div",c)])}return{$layout:s,getStickyContent:y}}const J=V({name:"QPageScroller",props:{...G,scrollOffset:{type:Number,default:1e3},reverse:Boolean,duration:{type:Number,default:300},offset:{default:()=>[18,18]}},emits:["click"],setup(e,{slots:a,emit:s}){const{proxy:{$q:r}}=Q(),{$layout:n,getStickyContent:d}=Z(),i=S(null);let o;const h=l(()=>n.height.value-(n.isContainer.value===!0?n.containerHeight.value:r.screen.height));function _(){return e.reverse===!0?h.value-n.scroll.value.position>e.scrollOffset:n.scroll.value.position>e.scrollOffset}const y=S(_());function t(){const k=_();y.value!==k&&(y.value=k)}function c(){e.reverse===!0?o===void 0&&(o=q(h,t)):u()}q(n.scroll,t),q(()=>e.reverse,c);function u(){o!==void 0&&(o(),o=void 0)}function $(k){const I=H(n.isContainer.value===!0?i.value:n.rootRef.value);R(I,e.reverse===!0?n.height.value:0,e.duration),s("click",k)}function p(){return y.value===!0?x("div",{ref:i,class:"q-page-scroller",onClick:$},d(a)):null}return c(),z(u),()=>x(F,{name:"q-transition--fade"},p)}}),M=V({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:a}){const{proxy:{$q:s}}=Q(),r=P(T,f);if(r===f)return console.error("QPage needs to be a deep child of QLayout"),f;if(P(D,f)===f)return console.error("QPage needs to be child of QPageContainer"),f;const d=l(()=>{const o=(r.header.space===!0?r.header.size:0)+(r.footer.space===!0?r.footer.size:0);if(typeof e.styleFn=="function"){const h=r.isContainer.value===!0?r.containerHeight.value:s.screen.height;return e.styleFn(o,h)}return{minHeight:r.isContainer.value===!0?r.containerHeight.value-o+"px":s.screen.height===0?o!==0?`calc(100vh - ${o}px)`:"100vh":s.screen.height-o+"px"}}),i=l(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>x("main",{class:i.value,style:d.value},O(a.default))}}),ee={class:"row justify-center"},te={class:"col-md-8 col-sm-10 col-xs-12"},oe={key:0,class:"text-h5 text-bold q-mb-md q-mr-xs text-center"},ae=m("div",{class:"text-h6 q-mb-md"},"Page Error",-1),ne=m("div",null," The page was unable to load due to an error. Troubleshoot using the application Logs if the problem persists. ",-1),se={key:2},re=m("div",{class:"text-h6 q-mb-md"},"No Data Available",-1),le=m("div",null,"This item may not have any data to display on the this page.",-1),ie={key:3,class:"q-mb-xl"},ue=E({__name:"ResponsivePage",props:{bannerIcon:{},bannerTitle:{},showPageError:{type:Boolean},showPageNoData:{type:Boolean}},setup(e){return(a,s)=>(b(),w(M,{padding:"",class:"q-mx-sm"},{default:g(()=>[m("div",ee,[m("div",te,[a.bannerIcon&&a.bannerTitle?(b(),C("div",oe,[v(K,{class:"q-pb-xs q-pr-xs",name:a.bannerIcon},null,8,["name"]),L(" "+j(a.bannerTitle),1)])):A("",!0),a.showPageError?(b(),w(B,{key:1},{default:g(()=>[v(N,null,{default:g(()=>[ae,ne]),_:1})]),_:1})):a.showPageNoData?(b(),C("div",se,[v(B,{class:"q-mb-md"},{default:g(()=>[v(N,null,{default:g(()=>[re,le]),_:1})]),_:1})])):(b(),C("div",ie,[U(a.$slots,"default")]))])]),v(J,null,{default:g(()=>[v(W,{fab:"",icon:X(Y).UP,color:"accent"},null,8,["icon"])]),_:1})]),_:3}))}});export{ue as _};