import{c as Me,aV as Oe,a0 as ze,aW as Ee,g as Fe,a1 as He,be as We,aY as _e,aZ as te,a_ as Ue,r as q,e as i,aX as Pe,bf as Le,a2 as c,ae as fe,j as V,l as Ve,a8 as je,P as N,h as j,aI as ve,_ as Ge,bg as Ke,k as Ze,m as B,n as Q,w as u,p as o,b8 as Xe,aN as Ye,x as n,b9 as Je,aQ as $e,z as me,I as x,aP as ea,G as C,v as aa,A as ta,R as D,H as la,t as he,bh as oa,Q as H,bi as W,ai as ua,ba as na,bb as ra,aS as ia,al as sa,bc as da}from"./index-697a561b.js";import{a as _,Q as A}from"./QItemSection-3233eaab.js";import{Q as ca}from"./QList-a49a3bf2.js";import{T as le}from"./TouchPan-a6f2f6f7.js";import{u as fa}from"./ui-d545299a.js";import{u as va}from"./useRouting-39270058.js";import"./selection-1fbdf4e1.js";const Ae=150,ma=Me({name:"QDrawer",inheritAttrs:!1,props:{...Oe,...ze,side:{type:String,default:"left",validator:a=>["left","right"].includes(a)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:a=>["default","desktop","mobile"].includes(a),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Ee,"onLayout","miniState"],setup(a,{slots:R,emit:h,attrs:k}){const b=Fe(),{proxy:{$q:s}}=b,I=He(a,s),{preventBodyScroll:M}=Ke(),{registerTimeout:oe,removeTimeout:be}=We(),t=_e(Ue,te);if(t===te)return console.error("QDrawer needs to be child of QLayout"),te;let G,S=null,O;const d=q(a.behavior==="mobile"||a.behavior!=="desktop"&&t.totalWidth.value<=a.breakpoint),z=i(()=>a.mini===!0&&d.value!==!0),v=i(()=>z.value===!0?a.miniWidth:a.width),r=q(a.showIfAbove===!0&&d.value===!1?!0:a.modelValue===!0),ue=i(()=>a.persistent!==!0&&(d.value===!0||ge.value===!0));function ne(e,l){if(ye(),e!==!1&&t.animate(),m(0),d.value===!0){const f=t.instances[P.value];f!==void 0&&f.belowBreakpoint===!0&&f.hide(!1),w(1),t.isContainer.value!==!0&&M(!0)}else w(0),e!==!1&&$(!1);oe(()=>{e!==!1&&$(!0),l!==!0&&h("show",e)},Ae)}function re(e,l){we(),e!==!1&&t.animate(),w(0),m(T.value*v.value),ee(),l!==!0?oe(()=>{h("hide",e)},Ae):be()}const{show:K,hide:E}=Pe({showing:r,hideOnRouteChange:ue,handleShow:ne,handleHide:re}),{addToHistory:ye,removeFromHistory:we}=Le(r,E,ue),U={belowBreakpoint:d,hide:E},y=i(()=>a.side==="right"),T=i(()=>(s.lang.rtl===!0?-1:1)*(y.value===!0?1:-1)),ie=q(0),p=q(!1),Z=q(!1),se=q(v.value*T.value),P=i(()=>y.value===!0?"left":"right"),X=i(()=>r.value===!0&&d.value===!1&&a.overlay===!1?a.miniToOverlay===!0?a.miniWidth:v.value:0),Y=i(()=>a.overlay===!0||a.miniToOverlay===!0||t.view.value.indexOf(y.value?"R":"L")>-1||s.platform.is.ios===!0&&t.isContainer.value===!0),F=i(()=>a.overlay===!1&&r.value===!0&&d.value===!1),ge=i(()=>a.overlay===!0&&r.value===!0&&d.value===!1),Be=i(()=>"fullscreen q-drawer__backdrop"+(r.value===!1&&p.value===!1?" hidden":"")),Qe=i(()=>({backgroundColor:`rgba(0,0,0,${ie.value*.4})`})),de=i(()=>y.value===!0?t.rows.value.top[2]==="r":t.rows.value.top[0]==="l"),ke=i(()=>y.value===!0?t.rows.value.bottom[2]==="r":t.rows.value.bottom[0]==="l"),Ie=i(()=>{const e={};return t.header.space===!0&&de.value===!1&&(Y.value===!0?e.top=`${t.header.offset}px`:t.header.space===!0&&(e.top=`${t.header.size}px`)),t.footer.space===!0&&ke.value===!1&&(Y.value===!0?e.bottom=`${t.footer.offset}px`:t.footer.space===!0&&(e.bottom=`${t.footer.size}px`)),e}),Se=i(()=>{const e={width:`${v.value}px`,transform:`translateX(${se.value}px)`};return d.value===!0?e:Object.assign(e,Ie.value)}),xe=i(()=>"q-drawer__content fit "+(t.isContainer.value!==!0?"scroll":"overflow-auto")),Te=i(()=>`q-drawer q-drawer--${a.side}`+(Z.value===!0?" q-drawer--mini-animate":"")+(a.bordered===!0?" q-drawer--bordered":"")+(I.value===!0?" q-drawer--dark q-dark":"")+(p.value===!0?" no-transition":r.value===!0?"":" q-layout--prevent-focus")+(d.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${z.value===!0?"mini":"standard"}`+(Y.value===!0||F.value!==!0?" fixed":"")+(a.overlay===!0||a.miniToOverlay===!0?" q-drawer--on-top":"")+(de.value===!0?" q-drawer--top-padding":""))),pe=i(()=>{const e=s.lang.rtl===!0?a.side:P.value;return[[le,Ne,void 0,{[e]:!0,mouse:!0}]]}),qe=i(()=>{const e=s.lang.rtl===!0?P.value:a.side;return[[le,ce,void 0,{[e]:!0,mouse:!0}]]}),Ce=i(()=>{const e=s.lang.rtl===!0?P.value:a.side;return[[le,ce,void 0,{[e]:!0,mouse:!0,mouseAllDir:!0}]]});function J(){Re(d,a.behavior==="mobile"||a.behavior!=="desktop"&&t.totalWidth.value<=a.breakpoint)}c(d,e=>{e===!0?(G=r.value,r.value===!0&&E(!1)):a.overlay===!1&&a.behavior!=="mobile"&&G!==!1&&(r.value===!0?(m(0),w(0),ee()):K(!1))}),c(()=>a.side,(e,l)=>{t.instances[l]===U&&(t.instances[l]=void 0,t[l].space=!1,t[l].offset=0),t.instances[e]=U,t[e].size=v.value,t[e].space=F.value,t[e].offset=X.value}),c(t.totalWidth,()=>{(t.isContainer.value===!0||document.qScrollPrevented!==!0)&&J()}),c(()=>a.behavior+a.breakpoint,J),c(t.isContainer,e=>{r.value===!0&&M(e!==!0),e===!0&&J()}),c(t.scrollbarWidth,()=>{m(r.value===!0?0:void 0)}),c(X,e=>{g("offset",e)}),c(F,e=>{h("onLayout",e),g("space",e)}),c(y,()=>{m()}),c(v,e=>{m(),ae(a.miniToOverlay,e)}),c(()=>a.miniToOverlay,e=>{ae(e,v.value)}),c(()=>s.lang.rtl,()=>{m()}),c(()=>a.mini,()=>{a.noMiniAnimation||a.modelValue===!0&&(De(),t.animate())}),c(z,e=>{h("miniState",e)});function m(e){e===void 0?fe(()=>{e=r.value===!0?0:v.value,m(T.value*e)}):(t.isContainer.value===!0&&y.value===!0&&(d.value===!0||Math.abs(e)===v.value)&&(e+=T.value*t.scrollbarWidth.value),se.value=e)}function w(e){ie.value=e}function $(e){const l=e===!0?"remove":t.isContainer.value!==!0?"add":"";l!==""&&document.body.classList[l]("q-body--drawer-toggle")}function De(){S!==null&&clearTimeout(S),b.proxy&&b.proxy.$el&&b.proxy.$el.classList.add("q-drawer--mini-animate"),Z.value=!0,S=setTimeout(()=>{S=null,Z.value=!1,b&&b.proxy&&b.proxy.$el&&b.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ne(e){if(r.value!==!1)return;const l=v.value,f=V(e.distance.x,0,l);if(e.isFinal===!0){f>=Math.min(75,l)===!0?K():(t.animate(),w(0),m(T.value*l)),p.value=!1;return}m((s.lang.rtl===!0?y.value!==!0:y.value)?Math.max(l-f,0):Math.min(0,f-l)),w(V(f/l,0,1)),e.isFirst===!0&&(p.value=!0)}function ce(e){if(r.value!==!0)return;const l=v.value,f=e.direction===a.side,L=(s.lang.rtl===!0?f!==!0:f)?V(e.distance.x,0,l):0;if(e.isFinal===!0){Math.abs(L)<Math.min(75,l)===!0?(t.animate(),w(1),m(0)):E(),p.value=!1;return}m(T.value*L),w(V(1-L/l,0,1)),e.isFirst===!0&&(p.value=!0)}function ee(){M(!1),$(!0)}function g(e,l){t.update(a.side,e,l)}function Re(e,l){e.value!==l&&(e.value=l)}function ae(e,l){g("size",e===!0?a.miniWidth:l)}return t.instances[a.side]=U,ae(a.miniToOverlay,v.value),g("space",F.value),g("offset",X.value),a.showIfAbove===!0&&a.modelValue!==!0&&r.value===!0&&a["onUpdate:modelValue"]!==void 0&&h("update:modelValue",!0),Ve(()=>{h("onLayout",F.value),h("miniState",z.value),G=a.showIfAbove===!0;const e=()=>{(r.value===!0?ne:re)(!1,!0)};if(t.totalWidth.value!==0){fe(e);return}O=c(t.totalWidth,()=>{O(),O=void 0,r.value===!1&&a.showIfAbove===!0&&d.value===!1?K(!1):e()})}),je(()=>{O!==void 0&&O(),S!==null&&(clearTimeout(S),S=null),r.value===!0&&ee(),t.instances[a.side]===U&&(t.instances[a.side]=void 0,g("size",0),g("offset",0),g("space",!1))}),()=>{const e=[];d.value===!0&&(a.noSwipeOpen===!1&&e.push(N(j("div",{key:"open",class:`q-drawer__opener fixed-${a.side}`,"aria-hidden":"true"}),pe.value)),e.push(ve("div",{ref:"backdrop",class:Be.value,style:Qe.value,"aria-hidden":"true",onClick:E},void 0,"backdrop",a.noSwipeBackdrop!==!0&&r.value===!0,()=>Ce.value)));const l=z.value===!0&&R.mini!==void 0,f=[j("div",{...k,key:""+l,class:[xe.value,k.class]},l===!0?R.mini():Ge(R.default))];return a.elevated===!0&&r.value===!0&&f.push(j("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),e.push(ve("aside",{ref:"content",class:Te.value,style:Se.value},f,"contentclose",a.noSwipeClose!==!0&&d.value===!0,()=>qe.value)),j("div",{class:"q-drawer-container"},e)}}}),Aa="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAVoSURBVHhe7ZztTxxVFMafmZ19ZWlLIaUCLX2hFpHQtBWNqUl9q0mtsV+t8c+Qj37yY/0zjPqVaGNj1BpNjZECgaIpUlikstBSoaWw87K7M54zs4uY1A/u7GyD9/ySm9mZIcvc57n3nHPvBCAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAI/yu0yjEUn018pHuaN0gfD1LTqXl8vWb4qVwdhYXuhGsnNGg1fp2nQU86Xubg7w50N+xTMf6TUVvwPIy8e2KIP4citAGfTl7eQ4ePqV3wL9QLEm9z/ghcK0lPGcKAlI2mQ3O1f8e/c4Xae5cGhh4Ep7XBozUsH1Crr/g7A+4z9z0UoQyg0Z+mw8XgTEkuVjSombAzIEuNQ5CqcN9Zg5oJawAH1roH1x1E6P7XIwcIIRADnjANN0Cn38hNCGioFC4tW1bulLC2XK5cERpmAI/6xVsORq+YuPGFiT/zJZkJREMleHi/jJihwXM9bKyWoel12QnZ0URugEYa80i3TQ8l2yPR6VpMg7nhUXO37qtKpF1nsYsk+uy4jZHPC1hbcn2xYzFgabqEn4cLmPrexNo9mg2KTobIDGBB7YKHyW9NzI44MNc9uCW+ETSX8rC96WF5powxyguLM0UlTYh0BuQmbKz+UYZOcX93u46B15MYfDvjt4FzKbR101Qg2Iy5UQeORSFKMRMiMYBFtGh038sF4qeyGvpfTmH/kQSyLbrf2g8ZGHg1jeNnEkjv1tB6IIZYnBK0Yhsb0cwAMsCxXD/psqCZPTrSWR3lEp3zexFqPOo5Rxx4JoEXaEb0vpiCHkwIpYgsBBk0mllQTrrrlGTXlqnup+qHRd+CzGEzDH7pxaFHsdHPRGIAi5pu1rHvsIFS0UO5CEx+Y2Fu3KJkvK30rMR71cLOdiKbASxyz3NJtB81yABaAzjAbaqGuBz99bqF+4slvyryw07FCBWJzAAe1YkUJd+zafSdTSK9K1DZMYH8rRLGr1oYu1pAnsrPaj5QkUi7zSbwCO/qTWDwrQz6X0mhpVMPxKZ76ysupq5ZuHnNhMWrYgVNiL7LJDSP8HhSQ8exOE6ey+DU+TSFpqDk4dJzZb6EX36wKEzJOiAyeDZUQ83ep2JboYmTMVdMq3fKWM2rtyURmQEsNIefxwnK7wU48Xb0JNDZF6f1QXBeeEQ3xIDwsOj80iU34cAkUR9b6dCM4J/jRO1V6tB4wj8oRf0NIFF5xTv9o4Xp6zZGvzSxdLsIj8KPvzDbahoerZaRny762xX8nqC5NabcmqD+BpCALG62Nah2nIKHqe9sjH1VwPykg7u5Ipbnipi5wWWoicJDXqh52H/MQPNeMoDDk0JEFoKefj6Fjl7DT7xsyoO8i99+sjH5tY2b1HJjDuwN3qIm8Wmx1nM6qVwCZiIxoLoI63spjZPnAyOaWjS/FI3FufSk+5lgB7T/tRSepYooyAWVL1CISAxgWEwe0W2dBvrOpPyFWEtHzN9+4Kqnq5fWBG+kqRKK+zlBRfGZyAyowiUni2vQ6NeN4DO/lOfP/FK+GqJUJXIDqnB439UW8xMuT40sJVxlh/02GmYAz4Su4wmcejON0xdSfmjyF2SK0zADGI71+7oNtHZQ/BF8GmoAw6NeRv7fNNwA4Z+IAU+YsAZwcaPg+nWL0P0Pa8AGtVB/prnD4b6zBjUTyoBLA0MmHYaDMyUZrmhQM/XIAR9S4z9aVg3uM/c9FHWJ359MXNZpcVvvf1WgbeaOtrtOnDcwguv/GQ16olhqOjx7F7rr1WHLw38yaguap428c+J9KagFQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEYRvAX6iTymWf+tULAAAAAElFTkSuQmCC",ha={class:"row justify-center"},ba=he("img",{src:Aa},null,-1),xa=Ze({__name:"MenuLayout",setup(a){const{route:R,goBack:h}=va(),k=fa();return(b,s)=>(B(),Q(da,{view:"hHh LpR lff"},{default:u(()=>[o(Xe,{elevated:"",class:Ye(`bg-${n(Je)}`)},{default:u(()=>[o($e,null,{default:u(()=>[o(me,{flat:"",round:"",icon:n(x).MENU,onClick:s[0]||(s[0]=I=>n(k).drawer=!n(k).drawer)},null,8,["icon"]),o(ea,null,{default:u(()=>[C(aa(n(ta)),1)]),_:1}),n(R).name!==n(D).DASHBOARD?(B(),Q(me,{key:0,flat:"",round:"",icon:n(x).BACK,onClick:s[1]||(s[1]=I=>n(h)())},null,8,["icon"])):la("",!0)]),_:1})]),_:1},8,["class"]),o(ma,{modelValue:n(k).drawer,"onUpdate:modelValue":s[2]||(s[2]=I=>n(k).drawer=I),width:250,"show-if-above":"",bordered:"",side:"left"},{default:u(()=>[he("div",ha,[o(oa,{size:"96px",class:"q-my-md"},{default:u(()=>[ba]),_:1})]),o(ca,null,{default:u(()=>[N((B(),Q(_,{clickable:"",to:{name:n(D).DASHBOARD}},{default:u(()=>[o(A,{avatar:""},{default:u(()=>[o(H,{color:"primary",name:n(x).DASHBOARD},null,8,["name"])]),_:1}),o(A,null,{default:u(()=>[C("Dashboard")]),_:1})]),_:1},8,["to"])),[[W]]),o(ua,{spaced:"md",inset:""}),N((B(),Q(_,{clickable:"",to:{name:n(D).SETTINGS}},{default:u(()=>[o(A,{avatar:""},{default:u(()=>[o(H,{color:"primary",name:n(x).SETTINGS},null,8,["name"])]),_:1}),o(A,null,{default:u(()=>[C("Settings")]),_:1})]),_:1},8,["to"])),[[W]]),N((B(),Q(_,{clickable:"",to:{name:n(D).FAQ}},{default:u(()=>[o(A,{avatar:""},{default:u(()=>[o(H,{color:"primary",name:n(x).FAQ},null,8,["name"])]),_:1}),o(A,null,{default:u(()=>[C("FAQ")]),_:1})]),_:1},8,["to"])),[[W]]),N((B(),Q(_,{clickable:"",to:{name:n(D).ABOUT}},{default:u(()=>[o(A,{avatar:""},{default:u(()=>[o(H,{color:"primary",name:n(x).INFO},null,8,["name"])]),_:1}),o(A,null,{default:u(()=>[C("About")]),_:1})]),_:1},8,["to"])),[[W]]),N((B(),Q(_,{clickable:"","active-class":"text-warning",to:{name:n(D).DONATE}},{default:u(()=>[o(A,{avatar:""},{default:u(()=>[o(H,{color:"warning",name:n(x).DONATE},null,8,["name"])]),_:1}),o(A,null,{default:u(()=>[C("Donate")]),_:1})]),_:1},8,["to"])),[[W]])]),_:1})]),_:1},8,["modelValue"]),o(na,null,{default:u(()=>[o(n(ra),null,{default:u(({Component:I,route:M})=>[o(ia,{name:"global-fade",mode:"out-in"},{default:u(()=>[(B(),Q(sa(I),{key:M.path}))]),_:2},1024)]),_:1})]),_:1})]),_:1}))}});export{xa as default};