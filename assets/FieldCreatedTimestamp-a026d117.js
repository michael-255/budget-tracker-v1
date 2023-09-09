import{e as d,bx as z,by as Vt,c as ot,a as mt,a0 as ht,g as it,a1 as yt,d as gt,r as T,ad as St,bz as ct,bA as _t,bB as Yt,bC as et,a2 as ie,bD as Ae,ae as lt,h as r,aS as xe,_ as bt,i as wt,z as F,ah as Ot,C as pt,aH as Tt,an as jt,P as Ie,bE as At,bF as It,bG as Ft,bq as Bt,k as $t,l as Pt,D as Et,bH as je,m as Nt,F as Kt,p as U,w as fe,x as tt,I as at,t as ut,V as Lt,J as Rt}from"./index-54cdbb61.js";import{u as zt,a as Qt,Q as Ut}from"./QMenu-24dc43c6.js";import{T as Wt}from"./TouchPan-e12fe5e5.js";import{u as Jt}from"./useRouting-f8a48c74.js";import{u as Gt}from"./action-dd1e0109.js";import"./selection-1cdd424c.js";function Xt(){const t=new Map;return{getCache:function(g,q){return t[g]===void 0?t[g]=q:t[g]},getCacheWithFn:function(g,q){return t[g]===void 0?t[g]=q():t[g]}}}const Zt=["gregorian","persian"],kt={modelValue:{required:!0},mask:{type:String},locale:Object,calendar:{type:String,validator:t=>Zt.includes(t),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},qt=["update:modelValue"];function ee(t){return t.year+"/"+z(t.month)+"/"+z(t.day)}function Dt(t,g){const q=d(()=>t.disable!==!0&&t.readonly!==!0),S=d(()=>q.value===!0?0:-1),x=d(()=>{const w=[];return t.color!==void 0&&w.push(`bg-${t.color}`),t.textColor!==void 0&&w.push(`text-${t.textColor}`),w.join(" ")});function B(){return t.locale!==void 0?{...g.lang.date,...t.locale}:g.lang.date}function _(w){const N=new Date,O=w===!0?null:0;if(t.calendar==="persian"){const M=Vt(N);return{year:M.jy,month:M.jm,day:M.jd}}return{year:N.getFullYear(),month:N.getMonth()+1,day:N.getDate(),hour:O,minute:O,second:O,millisecond:O}}return{editable:q,tabindex:S,headerClass:x,getLocale:B,getCurrentDate:_}}const me=20,ea=["Calendar","Years","Months"],dt=t=>ea.includes(t),nt=t=>/^-?[\d]+\/[0-1]\d$/.test(t),Ce=" — ";function oe(t){return t.year+"/"+z(t.month)}const ta=ot({name:"QDate",props:{...kt,...mt,...ht,multiple:Boolean,range:Boolean,title:String,subtitle:String,mask:{default:"YYYY/MM/DD"},defaultYearMonth:{type:String,validator:nt},yearsInMonthView:Boolean,events:[Array,Function],eventColor:[String,Function],emitImmediately:Boolean,options:[Array,Function],navigationMinYearMonth:{type:String,validator:nt},navigationMaxYearMonth:{type:String,validator:nt},noUnset:Boolean,firstDayOfWeek:[String,Number],todayBtn:Boolean,minimal:Boolean,defaultView:{type:String,default:"Calendar",validator:dt}},emits:[...qt,"rangeStart","rangeEnd","navigation"],setup(t,{slots:g,emit:q}){const{proxy:S}=it(),{$q:x}=S,B=yt(t,x),{getCache:_}=Xt(),{tabindex:w,headerClass:N,getLocale:O,getCurrentDate:M}=Dt(t,x);let p;const te=gt(t),ae=wt(te),ne=T(null),D=T(ze()),C=T(O()),Fe=d(()=>ze()),he=d(()=>O()),f=d(()=>M()),u=T(l(D.value,C.value)),k=T(t.defaultView),Be=x.lang.rtl===!0?"right":"left",le=T(Be.value),$=T(Be.value),Me=u.value.year,re=T(Me-Me%me-(Me<0?me:0)),P=T(null),se=d(()=>{const e=t.landscape===!0?"landscape":"portrait";return`q-date q-date--${e} q-date--${e}-${t.minimal===!0?"minimal":"standard"}`+(B.value===!0?" q-date--dark q-dark":"")+(t.bordered===!0?" q-date--bordered":"")+(t.square===!0?" q-date--square no-border-radius":"")+(t.flat===!0?" q-date--flat no-shadow":"")+(t.disable===!0?" disabled":t.readonly===!0?" q-date--readonly":"")}),Q=d(()=>t.color||"primary"),W=d(()=>t.textColor||"white"),E=d(()=>t.emitImmediately===!0&&t.multiple!==!0&&t.range!==!0),X=d(()=>Array.isArray(t.modelValue)===!0?t.modelValue:t.modelValue!==null&&t.modelValue!==void 0?[t.modelValue]:[]),I=d(()=>X.value.filter(e=>typeof e=="string").map(e=>pe(e,D.value,C.value)).filter(e=>e.dateHash!==null&&e.day!==null&&e.month!==null&&e.year!==null)),J=d(()=>{const e=a=>pe(a,D.value,C.value);return X.value.filter(a=>St(a)===!0&&a.from!==void 0&&a.to!==void 0).map(a=>({from:e(a.from),to:e(a.to)})).filter(a=>a.from.dateHash!==null&&a.to.dateHash!==null&&a.from.dateHash<a.to.dateHash)}),ye=d(()=>t.calendar!=="persian"?e=>new Date(e.year,e.month-1,e.day):e=>{const a=ct(e.year,e.month,e.day);return new Date(a.gy,a.gm-1,a.gd)}),He=d(()=>t.calendar==="persian"?ee:(e,a,n)=>_t(new Date(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond),a===void 0?D.value:a,n===void 0?C.value:n,e.year,e.timezoneOffset)),ue=d(()=>I.value.length+J.value.reduce((e,a)=>e+1+Yt(ye.value(a.to),ye.value(a.from)),0)),ce=d(()=>{if(t.title!==void 0&&t.title!==null&&t.title.length!==0)return t.title;if(P.value!==null){const n=P.value.init,s=ye.value(n);return C.value.daysShort[s.getDay()]+", "+C.value.monthsShort[n.month-1]+" "+n.day+Ce+"?"}if(ue.value===0)return Ce;if(ue.value>1)return`${ue.value} ${C.value.pluralDay}`;const e=I.value[0],a=ye.value(e);return isNaN(a.valueOf())===!0?Ce:C.value.headerTitle!==void 0?C.value.headerTitle(a,e):C.value.daysShort[a.getDay()]+", "+C.value.monthsShort[e.month-1]+" "+e.day}),$e=d(()=>I.value.concat(J.value.map(a=>a.from)).sort((a,n)=>a.year-n.year||a.month-n.month)[0]),Ve=d(()=>I.value.concat(J.value.map(a=>a.to)).sort((a,n)=>n.year-a.year||n.month-a.month)[0]),Pe=d(()=>{if(t.subtitle!==void 0&&t.subtitle!==null&&t.subtitle.length!==0)return t.subtitle;if(ue.value===0)return Ce;if(ue.value>1){const e=$e.value,a=Ve.value,n=C.value.monthsShort;return n[e.month-1]+(e.year!==a.year?" "+e.year+Ce+n[a.month-1]+" ":e.month!==a.month?Ce+n[a.month-1]:"")+" "+a.year}return I.value[0].year}),ge=d(()=>{const e=[x.iconSet.datetime.arrowLeft,x.iconSet.datetime.arrowRight];return x.lang.rtl===!0?e.reverse():e}),_e=d(()=>t.firstDayOfWeek!==void 0?Number(t.firstDayOfWeek):C.value.firstDayOfWeek),Se=d(()=>{const e=C.value.daysShort,a=_e.value;return a>0?e.slice(a,7).concat(e.slice(0,a)):e}),G=d(()=>{const e=u.value;return t.calendar!=="persian"?new Date(e.year,e.month,0).getDate():et(e.year,e.month)}),Ee=d(()=>typeof t.eventColor=="function"?t.eventColor:()=>t.eventColor),j=d(()=>{if(t.navigationMinYearMonth===void 0)return null;const e=t.navigationMinYearMonth.split("/");return{year:parseInt(e[0],10),month:parseInt(e[1],10)}}),A=d(()=>{if(t.navigationMaxYearMonth===void 0)return null;const e=t.navigationMaxYearMonth.split("/");return{year:parseInt(e[0],10),month:parseInt(e[1],10)}}),Ye=d(()=>{const e={month:{prev:!0,next:!0},year:{prev:!0,next:!0}};return j.value!==null&&j.value.year>=u.value.year&&(e.year.prev=!1,j.value.year===u.value.year&&j.value.month>=u.value.month&&(e.month.prev=!1)),A.value!==null&&A.value.year<=u.value.year&&(e.year.next=!1,A.value.year===u.value.year&&A.value.month<=u.value.month&&(e.month.next=!1)),e}),be=d(()=>{const e={};return I.value.forEach(a=>{const n=oe(a);e[n]===void 0&&(e[n]=[]),e[n].push(a.day)}),e}),Ne=d(()=>{const e={};return J.value.forEach(a=>{const n=oe(a.from),s=oe(a.to);if(e[n]===void 0&&(e[n]=[]),e[n].push({from:a.from.day,to:n===s?a.to.day:void 0,range:a}),n<s){let i;const{year:b,month:c}=a.from,m=c<12?{year:b,month:c+1}:{year:b+1,month:1};for(;(i=oe(m))<=s;)e[i]===void 0&&(e[i]=[]),e[i].push({from:void 0,to:i===s?a.to.day:void 0,range:a}),m.month++,m.month>12&&(m.year++,m.month=1)}}),e}),de=d(()=>{if(P.value===null)return;const{init:e,initHash:a,final:n,finalHash:s}=P.value,[i,b]=a<=s?[e,n]:[n,e],c=oe(i),m=oe(b);if(c!==K.value&&m!==K.value)return;const H={};return c===K.value?(H.from=i.day,H.includeFrom=!0):H.from=1,m===K.value?(H.to=b.day,H.includeTo=!0):H.to=G.value,H}),K=d(()=>oe(u.value)),We=d(()=>{const e={};if(t.options===void 0){for(let n=1;n<=G.value;n++)e[n]=!0;return e}const a=typeof t.options=="function"?t.options:n=>t.options.includes(n);for(let n=1;n<=G.value;n++){const s=K.value+"/"+z(n);e[n]=a(s)}return e}),Je=d(()=>{const e={};if(t.events===void 0)for(let a=1;a<=G.value;a++)e[a]=!1;else{const a=typeof t.events=="function"?t.events:n=>t.events.includes(n);for(let n=1;n<=G.value;n++){const s=K.value+"/"+z(n);e[n]=a(s)===!0&&Ee.value(s)}}return e}),we=d(()=>{let e,a;const{year:n,month:s}=u.value;if(t.calendar!=="persian")e=new Date(n,s-1,1),a=new Date(n,s-1,0).getDate();else{const i=ct(n,s,1);e=new Date(i.gy,i.gm-1,i.gd);let b=s-1,c=n;b===0&&(b=12,c--),a=et(c,b)}return{days:e.getDay()-_e.value-1,endDay:a}}),ve=d(()=>{const e=[],{days:a,endDay:n}=we.value,s=a<0?a+7:a;if(s<6)for(let c=n-s;c<=n;c++)e.push({i:c,fill:!0});const i=e.length;for(let c=1;c<=G.value;c++){const m={i:c,event:Je.value[c],classes:[]};We.value[c]===!0&&(m.in=!0,m.flat=!0),e.push(m)}if(be.value[K.value]!==void 0&&be.value[K.value].forEach(c=>{const m=i+c-1;Object.assign(e[m],{selected:!0,unelevated:!0,flat:!1,color:Q.value,textColor:W.value})}),Ne.value[K.value]!==void 0&&Ne.value[K.value].forEach(c=>{if(c.from!==void 0){const m=i+c.from-1,H=i+(c.to||G.value)-1;for(let Te=m;Te<=H;Te++)Object.assign(e[Te],{range:c.range,unelevated:!0,color:Q.value,textColor:W.value});Object.assign(e[m],{rangeFrom:!0,flat:!1}),c.to!==void 0&&Object.assign(e[H],{rangeTo:!0,flat:!1})}else if(c.to!==void 0){const m=i+c.to-1;for(let H=i;H<=m;H++)Object.assign(e[H],{range:c.range,unelevated:!0,color:Q.value,textColor:W.value});Object.assign(e[m],{flat:!1,rangeTo:!0})}else{const m=i+G.value-1;for(let H=i;H<=m;H++)Object.assign(e[H],{range:c.range,unelevated:!0,color:Q.value,textColor:W.value})}}),de.value!==void 0){const c=i+de.value.from-1,m=i+de.value.to-1;for(let H=c;H<=m;H++)e[H].color=Q.value,e[H].editRange=!0;de.value.includeFrom===!0&&(e[c].editRangeFrom=!0),de.value.includeTo===!0&&(e[m].editRangeTo=!0)}u.value.year===f.value.year&&u.value.month===f.value.month&&(e[i+f.value.day-1].today=!0);const b=e.length%7;if(b>0){const c=7-b;for(let m=1;m<=c;m++)e.push({i:m,fill:!0})}return e.forEach(c=>{let m="q-date__calendar-item ";c.fill===!0?m+="q-date__calendar-item--fill":(m+=`q-date__calendar-item--${c.in===!0?"in":"out"}`,c.range!==void 0&&(m+=` q-date__range${c.rangeTo===!0?"-to":c.rangeFrom===!0?"-from":""}`),c.editRange===!0&&(m+=` q-date__edit-range${c.editRangeFrom===!0?"-from":""}${c.editRangeTo===!0?"-to":""}`),(c.range!==void 0||c.editRange===!0)&&(m+=` text-${c.color}`)),c.classes=m}),e}),ke=d(()=>t.disable===!0?{"aria-disabled":"true"}:t.readonly===!0?{"aria-readonly":"true"}:{});ie(()=>t.modelValue,e=>{if(p===e)p=0;else{const a=l(D.value,C.value);L(a.year,a.month,a)}}),ie(k,()=>{ne.value!==null&&S.$el.contains(document.activeElement)===!0&&ne.value.focus()}),ie(()=>u.value.year+"|"+u.value.month,()=>{q("navigation",{year:u.value.year,month:u.value.month})}),ie(Fe,e=>{st(e,C.value,"mask"),D.value=e}),ie(he,e=>{st(D.value,e,"locale"),C.value=e});function Ke(){const e=f.value,a=be.value[oe(e)];(a===void 0||a.includes(e.day)===!1)&&Ge(e),Z(e.year,e.month)}function Le(e){dt(e)===!0&&(k.value=e)}function Re(e,a){["month","year"].includes(e)&&(e==="month"?v:h)(a===!0?-1:1)}function Z(e,a){k.value="Calendar",L(e,a)}function Oe(e,a){if(t.range===!1||!e){P.value=null;return}const n=Object.assign({...u.value},e),s=a!==void 0?Object.assign({...u.value},a):n;P.value={init:n,initHash:ee(n),final:s,finalHash:ee(s)},Z(n.year,n.month)}function ze(){return t.calendar==="persian"?"YYYY/MM/DD":t.mask}function pe(e,a,n){return Ae(e,a,n,t.calendar,{hour:0,minute:0,second:0,millisecond:0})}function l(e,a){const n=Array.isArray(t.modelValue)===!0?t.modelValue:t.modelValue?[t.modelValue]:[];if(n.length===0)return o();const s=n[n.length-1],i=pe(s.from!==void 0?s.from:s,e,a);return i.dateHash===null?o():i}function o(){let e,a;if(t.defaultYearMonth!==void 0){const n=t.defaultYearMonth.split("/");e=parseInt(n[0],10),a=parseInt(n[1],10)}else{const n=f.value!==void 0?f.value:M();e=n.year,a=n.month}return{year:e,month:a,day:1,hour:0,minute:0,second:0,millisecond:0,dateHash:e+"/"+z(a)+"/01"}}function v(e){let a=u.value.year,n=Number(u.value.month)+e;n===13?(n=1,a++):n===0&&(n=12,a--),L(a,n),E.value===!0&&qe("month")}function h(e){const a=Number(u.value.year)+e;L(a,u.value.month),E.value===!0&&qe("year")}function V(e){L(e,u.value.month),k.value=t.defaultView==="Years"?"Months":"Calendar",E.value===!0&&qe("year")}function R(e){L(u.value.year,e),k.value="Calendar",E.value===!0&&qe("month")}function y(e,a){const n=be.value[a];(n!==void 0&&n.includes(e.day)===!0?Xe:Ge)(e)}function Y(e){return{year:e.year,month:e.month,day:e.day}}function L(e,a,n){if(j.value!==null&&e<=j.value.year&&(e=j.value.year,a<j.value.month&&(a=j.value.month)),A.value!==null&&e>=A.value.year&&(e=A.value.year,a>A.value.month&&(a=A.value.month)),n!==void 0){const{hour:i,minute:b,second:c,millisecond:m,timezoneOffset:H,timeHash:Te}=n;Object.assign(u.value,{hour:i,minute:b,second:c,millisecond:m,timezoneOffset:H,timeHash:Te})}const s=e+"/"+z(a)+"/01";s!==u.value.dateHash&&(le.value=u.value.dateHash<s==(x.lang.rtl!==!0)?"left":"right",e!==u.value.year&&($.value=le.value),lt(()=>{re.value=e-e%me-(e<0?me:0),Object.assign(u.value,{year:e,month:a,day:1,dateHash:s})}))}function Qe(e,a,n){const s=e!==null&&e.length===1&&t.multiple===!1?e[0]:e;p=s;const{reason:i,details:b}=rt(a,n);q("update:modelValue",s,i,b)}function qe(e){const a=I.value[0]!==void 0&&I.value[0].dateHash!==null?{...I.value[0]}:{...u.value};lt(()=>{a.year=u.value.year,a.month=u.value.month;const n=t.calendar!=="persian"?new Date(a.year,a.month,0).getDate():et(a.year,a.month);a.day=Math.min(Math.max(1,a.day),n);const s=De(a);p=s;const{details:i}=rt("",a);q("update:modelValue",s,e,i)})}function rt(e,a){return a.from!==void 0?{reason:`${e}-range`,details:{...Y(a.target),from:Y(a.from),to:Y(a.to)}}:{reason:`${e}-day`,details:Y(a)}}function De(e,a,n){return e.from!==void 0?{from:He.value(e.from,a,n),to:He.value(e.to,a,n)}:He.value(e,a,n)}function Ge(e){let a;if(t.multiple===!0)if(e.from!==void 0){const n=ee(e.from),s=ee(e.to),i=I.value.filter(c=>c.dateHash<n||c.dateHash>s),b=J.value.filter(({from:c,to:m})=>m.dateHash<n||c.dateHash>s);a=i.concat(b).concat(e).map(c=>De(c))}else{const n=X.value.slice();n.push(De(e)),a=n}else a=De(e);Qe(a,"add",e)}function Xe(e){if(t.noUnset===!0)return;let a=null;if(t.multiple===!0&&Array.isArray(t.modelValue)===!0){const n=De(e);e.from!==void 0?a=t.modelValue.filter(s=>s.from!==void 0?s.from!==n.from&&s.to!==n.to:!0):a=t.modelValue.filter(s=>s!==n),a.length===0&&(a=null)}Qe(a,"remove",e)}function st(e,a,n){const s=I.value.concat(J.value).map(i=>De(i,e,a)).filter(i=>i.from!==void 0?i.from.dateHash!==null&&i.to.dateHash!==null:i.dateHash!==null);q("update:modelValue",(t.multiple===!0?s:s[0])||null,n)}function Ct(){if(t.minimal!==!0)return r("div",{class:"q-date__header "+N.value},[r("div",{class:"relative-position"},[r(xe,{name:"q-transition--fade"},()=>r("div",{key:"h-yr-"+Pe.value,class:"q-date__header-subtitle q-date__header-link "+(k.value==="Years"?"q-date__header-link--active":"cursor-pointer"),tabindex:w.value,..._("vY",{onClick(){k.value="Years"},onKeyup(e){e.keyCode===13&&(k.value="Years")}})},[Pe.value]))]),r("div",{class:"q-date__header-title relative-position flex no-wrap"},[r("div",{class:"relative-position col"},[r(xe,{name:"q-transition--fade"},()=>r("div",{key:"h-sub"+ce.value,class:"q-date__header-title-label q-date__header-link "+(k.value==="Calendar"?"q-date__header-link--active":"cursor-pointer"),tabindex:w.value,..._("vC",{onClick(){k.value="Calendar"},onKeyup(e){e.keyCode===13&&(k.value="Calendar")}})},[ce.value]))]),t.todayBtn===!0?r(F,{class:"q-date__header-today self-start",icon:x.iconSet.datetime.today,flat:!0,size:"sm",round:!0,tabindex:w.value,onClick:Ke}):null])])}function Ze({label:e,type:a,key:n,dir:s,goTo:i,boundaries:b,cls:c}){return[r("div",{class:"row items-center q-date__arrow"},[r(F,{round:!0,dense:!0,size:"sm",flat:!0,icon:ge.value[0],tabindex:w.value,disable:b.prev===!1,..._("go-#"+a,{onClick(){i(-1)}})})]),r("div",{class:"relative-position overflow-hidden flex flex-center"+c},[r(xe,{name:"q-transition--jump-"+s},()=>r("div",{key:n},[r(F,{flat:!0,dense:!0,noCaps:!0,label:e,tabindex:w.value,..._("view#"+a,{onClick:()=>{k.value=a}})})]))]),r("div",{class:"row items-center q-date__arrow"},[r(F,{round:!0,dense:!0,size:"sm",flat:!0,icon:ge.value[1],tabindex:w.value,disable:b.next===!1,..._("go+#"+a,{onClick(){i(1)}})})])]}const xt={Calendar:()=>[r("div",{key:"calendar-view",class:"q-date__view q-date__calendar"},[r("div",{class:"q-date__navigation row items-center no-wrap"},Ze({label:C.value.months[u.value.month-1],type:"Months",key:u.value.month,dir:le.value,goTo:v,boundaries:Ye.value.month,cls:" col"}).concat(Ze({label:u.value.year,type:"Years",key:u.value.year,dir:$.value,goTo:h,boundaries:Ye.value.year,cls:""}))),r("div",{class:"q-date__calendar-weekdays row items-center no-wrap"},Se.value.map(e=>r("div",{class:"q-date__calendar-item"},[r("div",e)]))),r("div",{class:"q-date__calendar-days-container relative-position overflow-hidden"},[r(xe,{name:"q-transition--slide-"+le.value},()=>r("div",{key:K.value,class:"q-date__calendar-days fit"},ve.value.map(e=>r("div",{class:e.classes},[e.in===!0?r(F,{class:e.today===!0?"q-date__today":"",dense:!0,flat:e.flat,unelevated:e.unelevated,color:e.color,textColor:e.textColor,label:e.i,tabindex:w.value,..._("day#"+e.i,{onClick:()=>{Mt(e.i)},onMouseover:()=>{Ht(e.i)}})},e.event!==!1?()=>r("div",{class:"q-date__event bg-"+e.event}):null):r("div",""+e.i)]))))])])],Months(){const e=u.value.year===f.value.year,a=s=>j.value!==null&&u.value.year===j.value.year&&j.value.month>s||A.value!==null&&u.value.year===A.value.year&&A.value.month<s,n=C.value.monthsShort.map((s,i)=>{const b=u.value.month===i+1;return r("div",{class:"q-date__months-item flex flex-center"},[r(F,{class:e===!0&&f.value.month===i+1?"q-date__today":null,flat:b!==!0,label:s,unelevated:b,color:b===!0?Q.value:null,textColor:b===!0?W.value:null,tabindex:w.value,disable:a(i+1),..._("month#"+i,{onClick:()=>{R(i+1)}})})])});return t.yearsInMonthView===!0&&n.unshift(r("div",{class:"row no-wrap full-width"},[Ze({label:u.value.year,type:"Years",key:u.value.year,dir:$.value,goTo:h,boundaries:Ye.value.year,cls:" col"})])),r("div",{key:"months-view",class:"q-date__view q-date__months flex flex-center"},n)},Years(){const e=re.value,a=e+me,n=[],s=i=>j.value!==null&&j.value.year>i||A.value!==null&&A.value.year<i;for(let i=e;i<=a;i++){const b=u.value.year===i;n.push(r("div",{class:"q-date__years-item flex flex-center"},[r(F,{key:"yr"+i,class:f.value.year===i?"q-date__today":null,flat:!b,label:i,dense:!0,unelevated:b,color:b===!0?Q.value:null,textColor:b===!0?W.value:null,tabindex:w.value,disable:s(i),..._("yr#"+i,{onClick:()=>{V(i)}})})]))}return r("div",{class:"q-date__view q-date__years flex flex-center"},[r("div",{class:"col-auto"},[r(F,{round:!0,dense:!0,flat:!0,icon:ge.value[0],tabindex:w.value,disable:s(e),..._("y-",{onClick:()=>{re.value-=me}})})]),r("div",{class:"q-date__years-content col self-stretch row items-center"},n),r("div",{class:"col-auto"},[r(F,{round:!0,dense:!0,flat:!0,icon:ge.value[1],tabindex:w.value,disable:s(a),..._("y+",{onClick:()=>{re.value+=me}})})])])}};function Mt(e){const a={...u.value,day:e};if(t.range===!1){y(a,K.value);return}if(P.value===null){const n=ve.value.find(i=>i.fill!==!0&&i.i===e);if(t.noUnset!==!0&&n.range!==void 0){Xe({target:a,from:n.range.from,to:n.range.to});return}if(n.selected===!0){Xe(a);return}const s=ee(a);P.value={init:a,initHash:s,final:a,finalHash:s},q("rangeStart",Y(a))}else{const n=P.value.initHash,s=ee(a),i=n<=s?{from:P.value.init,to:a}:{from:a,to:P.value.init};P.value=null,Ge(n===s?a:{target:a,...i}),q("rangeEnd",{from:Y(i.from),to:Y(i.to)})}}function Ht(e){if(P.value!==null){const a={...u.value,day:e};Object.assign(P.value,{final:a,finalHash:ee(a)})}}return Object.assign(S,{setToday:Ke,setView:Le,offsetCalendar:Re,setCalendarTo:Z,setEditingRange:Oe}),()=>{const e=[r("div",{class:"q-date__content col relative-position"},[r(xe,{name:"q-transition--fade"},xt[k.value])])],a=bt(g.default);return a!==void 0&&e.push(r("div",{class:"q-date__actions"},a)),t.name!==void 0&&t.disable!==!0&&ae(e,"push"),r("div",{class:se.value,...ke.value},[Ct(),r("div",{ref:ne,class:"q-date__main col column",tabindex:-1},e)])}}}),vt=ot({name:"QPopupProxy",props:{...zt,breakpoint:{type:[String,Number],default:450}},emits:["show","hide"],setup(t,{slots:g,emit:q,attrs:S}){const{proxy:x}=it(),{$q:B}=x,_=T(!1),w=T(null),N=d(()=>parseInt(t.breakpoint,10)),{canShow:O}=Qt({showing:_});function M(){return B.screen.width<N.value||B.screen.height<N.value?"dialog":"menu"}const p=T(M()),te=d(()=>p.value==="menu"?{maxHeight:"99vh"}:{});ie(()=>M(),D=>{_.value!==!0&&(p.value=D)});function ae(D){_.value=!0,q("show",D)}function ne(D){_.value=!1,p.value=M(),q("hide",D)}return Object.assign(x,{show(D){O(D)===!0&&w.value.show(D)},hide(D){w.value.hide(D)},toggle(D){w.value.toggle(D)}}),Ot(x,"currentComponent",()=>({type:p.value,ref:w.value})),()=>{const D={ref:w,...te.value,...S,onShow:ae,onHide:ne};let C;return p.value==="dialog"?C=pt:(C=Ut,Object.assign(D,{target:t.target,contextMenu:t.contextMenu,noParentEvent:!0,separateClosePopup:!0})),r(C,D,g.default)}}});function aa(t,g){if(t.hour!==null){if(t.minute===null)return"minute";if(g===!0&&t.second===null)return"second"}return"hour"}function na(){const t=new Date;return{hour:t.getHours(),minute:t.getMinutes(),second:t.getSeconds(),millisecond:t.getMilliseconds()}}const la=ot({name:"QTime",props:{...ht,...mt,...kt,mask:{default:null},format24h:{type:Boolean,default:null},defaultDate:{type:String,validator:t=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(t)},options:Function,hourOptions:Array,minuteOptions:Array,secondOptions:Array,withSeconds:Boolean,nowBtn:Boolean},emits:qt,setup(t,{slots:g,emit:q}){const S=it(),{$q:x}=S.proxy,B=yt(t,x),{tabindex:_,headerClass:w,getLocale:N,getCurrentDate:O}=Dt(t,x),M=gt(t),p=wt(M);let te,ae;const ne=T(null),D=d(()=>Pe()),C=d(()=>N()),Fe=d(()=>ge()),he=Ae(t.modelValue,D.value,C.value,t.calendar,Fe.value),f=T(aa(he)),u=T(he),k=T(he.hour===null||he.hour<12),Be=d(()=>`q-time q-time--${t.landscape===!0?"landscape":"portrait"}`+(B.value===!0?" q-time--dark q-dark":"")+(t.disable===!0?" disabled":t.readonly===!0?" q-time--readonly":"")+(t.bordered===!0?" q-time--bordered":"")+(t.square===!0?" q-time--square no-border-radius":"")+(t.flat===!0?" q-time--flat no-shadow":"")),le=d(()=>{const l=u.value;return{hour:l.hour===null?"--":$.value===!0?z(l.hour):String(k.value===!0?l.hour===0?12:l.hour:l.hour>12?l.hour-12:l.hour),minute:l.minute===null?"--":z(l.minute),second:l.second===null?"--":z(l.second)}}),$=d(()=>t.format24h!==null?t.format24h:x.lang.date.format24h),Me=d(()=>{const l=f.value==="hour",o=l===!0?12:60,v=u.value[f.value];let V=`rotate(${Math.round(v*(360/o))-180}deg) translateX(-50%)`;return l===!0&&$.value===!0&&u.value.hour>=12&&(V+=" scale(.7)"),{transform:V}}),re=d(()=>u.value.hour!==null),P=d(()=>re.value===!0&&u.value.minute!==null),se=d(()=>t.hourOptions!==void 0?l=>t.hourOptions.includes(l):t.options!==void 0?l=>t.options(l,null,null):null),Q=d(()=>t.minuteOptions!==void 0?l=>t.minuteOptions.includes(l):t.options!==void 0?l=>t.options(u.value.hour,l,null):null),W=d(()=>t.secondOptions!==void 0?l=>t.secondOptions.includes(l):t.options!==void 0?l=>t.options(u.value.hour,u.value.minute,l):null),E=d(()=>{if(se.value===null)return null;const l=ce(0,11,se.value),o=ce(12,11,se.value);return{am:l,pm:o,values:l.values.concat(o.values)}}),X=d(()=>Q.value!==null?ce(0,59,Q.value):null),I=d(()=>W.value!==null?ce(0,59,W.value):null),J=d(()=>{switch(f.value){case"hour":return E.value;case"minute":return X.value;case"second":return I.value}}),ye=d(()=>{let l,o,v=0,h=1;const V=J.value!==null?J.value.values:void 0;f.value==="hour"?$.value===!0?(l=0,o=23):(l=0,o=11,k.value===!1&&(v=12)):(l=0,o=55,h=5);const R=[];for(let y=l,Y=l;y<=o;y+=h,Y++){const L=y+v,Qe=V!==void 0&&V.includes(L)===!1,qe=f.value==="hour"&&y===0?$.value===!0?"00":"12":y;R.push({val:L,index:Y,disable:Qe,label:qe})}return R}),He=d(()=>[[Wt,G,void 0,{stop:!0,prevent:!0,mouse:!0}]]);ie(()=>t.modelValue,l=>{const o=Ae(l,D.value,C.value,t.calendar,Fe.value);(o.dateHash!==u.value.dateHash||o.timeHash!==u.value.timeHash)&&(u.value=o,o.hour===null?f.value="hour":k.value=o.hour<12)}),ie([D,C],()=>{lt(()=>{Oe()})});function ue(){const l={...O(),...na()};Oe(l),Object.assign(u.value,l),f.value="hour"}function ce(l,o,v){const h=Array.apply(null,{length:o+1}).map((V,R)=>{const y=R+l;return{index:y,val:v(y)===!0}}).filter(V=>V.val===!0).map(V=>V.index);return{min:h[0],max:h[h.length-1],values:h,threshold:o+1}}function $e(l,o,v){const h=Math.abs(l-o);return Math.min(h,v-h)}function Ve(l,{min:o,max:v,values:h,threshold:V}){if(l===o)return o;if(l<o||l>v)return $e(l,o,V)<=$e(l,v,V)?o:v;const R=h.findIndex(L=>l<=L),y=h[R-1],Y=h[R];return l-y<=Y-l?y:Y}function Pe(){return t.calendar!=="persian"&&t.mask!==null?t.mask:`HH:mm${t.withSeconds===!0?":ss":""}`}function ge(){if(typeof t.defaultDate!="string"){const l=O(!0);return l.dateHash=ee(l),l}return Ae(t.defaultDate,"YYYY/MM/DD",void 0,t.calendar)}function _e(){return jt(S)===!0||J.value!==null&&(J.value.values.length===0||f.value==="hour"&&$.value!==!0&&E.value[k.value===!0?"am":"pm"].values.length===0)}function Se(){const l=ne.value,{top:o,left:v,width:h}=l.getBoundingClientRect(),V=h/2;return{top:o+V,left:v+V,dist:V*.7}}function G(l){if(_e()!==!0){if(l.isFirst===!0){te=Se(),ae=j(l.evt,te);return}ae=j(l.evt,te,ae),l.isFinal===!0&&(te=!1,ae=null,Ee())}}function Ee(){f.value==="hour"?f.value="minute":t.withSeconds&&f.value==="minute"&&(f.value="second")}function j(l,o,v){const h=Tt(l),V=Math.abs(h.top-o.top),R=Math.sqrt(Math.pow(Math.abs(h.top-o.top),2)+Math.pow(Math.abs(h.left-o.left),2));let y,Y=Math.asin(V/R)*(180/Math.PI);if(h.top<o.top?Y=o.left<h.left?90-Y:270+Y:Y=o.left<h.left?Y+90:270-Y,f.value==="hour"){if(y=Y/30,E.value!==null){const L=$.value!==!0?k.value===!0:E.value.am.values.length!==0&&E.value.pm.values.length!==0?R>=o.dist:E.value.am.values.length!==0;y=Ve(y+(L===!0?0:12),E.value[L===!0?"am":"pm"])}else y=Math.round(y),$.value===!0?R<o.dist?y<12&&(y+=12):y===12&&(y=0):k.value===!0&&y===12?y=0:k.value===!1&&y!==12&&(y+=12);$.value===!0&&(k.value=y<12)}else y=Math.round(Y/6)%60,f.value==="minute"&&X.value!==null?y=Ve(y,X.value):f.value==="second"&&I.value!==null&&(y=Ve(y,I.value));return v!==y&&Ke[f.value](y),y}const A={hour(){f.value="hour"},minute(){f.value="minute"},second(){f.value="second"}};function Ye(l){l.keyCode===13&&Le()}function be(l){l.keyCode===13&&Re()}function Ne(l){_e()!==!0&&(x.platform.is.desktop!==!0&&j(l,Se()),Ee())}function de(l){_e()!==!0&&j(l,Se())}function K(l){if(l.keyCode===13)f.value="hour";else if([37,39].includes(l.keyCode)){const o=l.keyCode===37?-1:1;if(E.value!==null){const v=$.value===!0?E.value.values:E.value[k.value===!0?"am":"pm"].values;if(v.length===0)return;if(u.value.hour===null)we(v[0]);else{const h=(v.length+v.indexOf(u.value.hour)+o)%v.length;we(v[h])}}else{const v=$.value===!0?24:12,h=$.value!==!0&&k.value===!1?12:0,V=u.value.hour===null?-o:u.value.hour;we(h+(24+V+o)%v)}}}function We(l){if(l.keyCode===13)f.value="minute";else if([37,39].includes(l.keyCode)){const o=l.keyCode===37?-1:1;if(X.value!==null){const v=X.value.values;if(v.length===0)return;if(u.value.minute===null)ve(v[0]);else{const h=(v.length+v.indexOf(u.value.minute)+o)%v.length;ve(v[h])}}else{const v=u.value.minute===null?-o:u.value.minute;ve((60+v+o)%60)}}}function Je(l){if(l.keyCode===13)f.value="second";else if([37,39].includes(l.keyCode)){const o=l.keyCode===37?-1:1;if(I.value!==null){const v=I.value.values;if(v.length===0)return;if(u.value.seconds===null)ke(v[0]);else{const h=(v.length+v.indexOf(u.value.second)+o)%v.length;ke(v[h])}}else{const v=u.value.second===null?-o:u.value.second;ke((60+v+o)%60)}}}function we(l){u.value.hour!==l&&(u.value.hour=l,Z())}function ve(l){u.value.minute!==l&&(u.value.minute=l,Z())}function ke(l){u.value.second!==l&&(u.value.second=l,Z())}const Ke={hour:we,minute:ve,second:ke};function Le(){k.value===!1&&(k.value=!0,u.value.hour!==null&&(u.value.hour-=12,Z()))}function Re(){k.value===!0&&(k.value=!1,u.value.hour!==null&&(u.value.hour+=12,Z()))}function Z(){if(se.value!==null&&se.value(u.value.hour)!==!0){u.value=Ae(),f.value="hour";return}if(Q.value!==null&&Q.value(u.value.minute)!==!0){u.value.minute=null,u.value.second=null,f.value="minute";return}if(t.withSeconds===!0&&W.value!==null&&W.value(u.value.second)!==!0){u.value.second=null,f.value="second";return}u.value.hour===null||u.value.minute===null||t.withSeconds===!0&&u.value.second===null||Oe()}function Oe(l){const o=Object.assign({...u.value},l),v=t.calendar==="persian"?z(o.hour)+":"+z(o.minute)+(t.withSeconds===!0?":"+z(o.second):""):_t(new Date(o.year,o.month===null?null:o.month-1,o.day,o.hour,o.minute,o.second,o.millisecond),D.value,C.value,o.year,o.timezoneOffset);o.changed=v!==t.modelValue,q("update:modelValue",v,o)}function ze(){const l=[r("div",{class:"q-time__link "+(f.value==="hour"?"q-time__link--active":"cursor-pointer"),tabindex:_.value,onClick:A.hour,onKeyup:K},le.value.hour),r("div",":"),r("div",re.value===!0?{class:"q-time__link "+(f.value==="minute"?"q-time__link--active":"cursor-pointer"),tabindex:_.value,onKeyup:We,onClick:A.minute}:{class:"q-time__link"},le.value.minute)];t.withSeconds===!0&&l.push(r("div",":"),r("div",P.value===!0?{class:"q-time__link "+(f.value==="second"?"q-time__link--active":"cursor-pointer"),tabindex:_.value,onKeyup:Je,onClick:A.second}:{class:"q-time__link"},le.value.second));const o=[r("div",{class:"q-time__header-label row items-center no-wrap",dir:"ltr"},l)];return $.value===!1&&o.push(r("div",{class:"q-time__header-ampm column items-between no-wrap"},[r("div",{class:"q-time__link "+(k.value===!0?"q-time__link--active":"cursor-pointer"),tabindex:_.value,onClick:Le,onKeyup:Ye},"AM"),r("div",{class:"q-time__link "+(k.value!==!0?"q-time__link--active":"cursor-pointer"),tabindex:_.value,onClick:Re,onKeyup:be},"PM")])),r("div",{class:"q-time__header flex flex-center no-wrap "+w.value},o)}function pe(){const l=u.value[f.value];return r("div",{class:"q-time__content col relative-position"},[r(xe,{name:"q-transition--scale"},()=>r("div",{key:"clock"+f.value,class:"q-time__container-parent absolute-full"},[r("div",{ref:ne,class:"q-time__container-child fit overflow-hidden"},[Ie(r("div",{class:"q-time__clock cursor-pointer non-selectable",onClick:Ne,onMousedown:de},[r("div",{class:"q-time__clock-circle fit"},[r("div",{class:"q-time__clock-pointer"+(u.value[f.value]===null?" hidden":t.color!==void 0?` text-${t.color}`:""),style:Me.value}),ye.value.map(o=>r("div",{class:`q-time__clock-position row flex-center q-time__clock-pos-${o.index}`+(o.val===l?" q-time__clock-position--active "+w.value:o.disable===!0?" q-time__clock-position--disable":"")},[r("span",o.label)]))])]),He.value)])])),t.nowBtn===!0?r(F,{class:"q-time__now-button absolute",icon:x.iconSet.datetime.now,unelevated:!0,size:"sm",round:!0,color:t.color,textColor:t.textColor,tabindex:_.value,onClick:ue}):null])}return S.proxy.setNow=ue,()=>{const l=[pe()],o=bt(g.default);return o!==void 0&&l.push(r("div",{class:"q-time__actions"},o)),t.name!==void 0&&t.disable!==!0&&p(l,"push"),r("div",{class:Be.value,tabindex:-1},[ze(),r("div",{class:"q-time__main col overflow-auto"},l)])}}});function ft(t){if(t===!1)return 0;if(t===!0||t===void 0)return 1;const g=parseInt(t,10);return isNaN(g)?0:g}const Ue=At({name:"close-popup",beforeMount(t,{value:g}){const q={depth:ft(g),handler(S){q.depth!==0&&setTimeout(()=>{const x=It(t);x!==void 0&&Ft(x,S,q.depth)})},handlerKey(S){Bt(S,13)===!0&&q.handler(S)}};t.__qclosepopup=q,t.addEventListener("click",q.handler),t.addEventListener("keyup",q.handlerKey)},updated(t,{value:g,oldValue:q}){g!==q&&(t.__qclosepopup.depth=ft(g))},beforeUnmount(t){const g=t.__qclosepopup;t.removeEventListener("click",g.handler),t.removeEventListener("keyup",g.handlerKey),delete t.__qclosepopup}}),ua=ut("div",{class:"text-weight-bold text-body1"},"Created Date",-1),oa={class:"row items-center justify-end q-gutter-sm"},ia={class:"row items-center justify-end q-gutter-sm"},ma=$t({__name:"FieldCreatedTimestamp",setup(t){const{routeId:g}=Jt(),q=Gt(),S=T(void 0),x=T(""),B=T(""),_=T("");Pt(async()=>{var O;g?S.value=((O=await Et.getExpense(g))==null?void 0:O.createdTimestamp)??Date.now():S.value=Date.now(),B.value=je.formatDate(S.value,"ddd MMM DD YYYY"),_.value=je.formatDate(S.value,"HH:mm:00"),w(S.value)});function w(O=Date.now()){q.record.createdTimestamp=O,x.value=je.formatDate(O,"ddd, YYYY MMM Do, h:mm A")}function N(){B.value=B.value?B.value:je.formatDate(Date.now(),"ddd MMM DD YYYY"),_.value=_.value?_.value:je.formatDate(Date.now(),"HH:mm:00");const O=new Date(`${B.value} ${_.value}`).getTime();w(O)}return(O,M)=>(Nt(),Kt(Rt,null,[ua,U(Lt,{modelValue:x.value,"onUpdate:modelValue":M[5]||(M[5]=p=>x.value=p),dense:"",outlined:"",disable:"",color:"primary",hint:"Auto formatted"},{after:fe(()=>[U(F,{icon:tt(at).CALENDAR_DATE,color:"primary",class:"q-px-sm"},{default:fe(()=>[U(vt,null,{default:fe(()=>[U(ta,{modelValue:B.value,"onUpdate:modelValue":M[1]||(M[1]=p=>B.value=p),mask:"ddd MMM DD YYYY"},{default:fe(()=>[ut("div",oa,[Ie(U(F,{label:"Cancel",flat:""},null,512),[[Ue]]),Ie(U(F,{label:"OK",color:"primary",flat:"",onClick:M[0]||(M[0]=p=>N())},null,512),[[Ue]])])]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["icon"]),U(F,{icon:tt(at).CLOCK,color:"primary",class:"q-ml-sm q-px-sm"},{default:fe(()=>[U(vt,null,{default:fe(()=>[U(la,{modelValue:_.value,"onUpdate:modelValue":M[3]||(M[3]=p=>_.value=p),mask:"HH:mm:00","now-btn":""},{default:fe(()=>[ut("div",ia,[Ie(U(F,{label:"Cancel",flat:""},null,512),[[Ue]]),Ie(U(F,{label:"OK",color:"primary",flat:"",onClick:M[2]||(M[2]=p=>N())},null,512),[[Ue]])])]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["icon"]),U(F,{icon:tt(at).CALENDAR_CHECK,color:"positive",class:"q-ml-sm q-px-sm",onClick:M[4]||(M[4]=p=>w())},null,8,["icon"])]),_:1},8,["modelValue"])],64))}});export{ma as default};
