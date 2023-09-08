import{g as ae,r as A,e as E,aq as se,s as ne,ar as re,h as V,c as ue,as as de,a as ce,at as me,au as fe,av as ge,aw as pe,ah as ve,ax as be,ay as J,az as he,aA as ye,k as Se,K as _e,A as K,L as xe,aB as De,aC as y,D as S,S as D,N as Ee,m as Z,n as H,w as B,t as o,p as h,G as we,x as g,aD as Ce,V as Fe,z as N,aE as G,Q as Te,I as O,aF as ke,H as Le,aG as Oe,X as ee,Z as Ne}from"./index-9b97e97e.js";import{Q as Ae}from"./QChip-4d8a3e7a.js";import{Q as Ie}from"./QSlider-4d391866.js";import{c as Ve}from"./useDialogs-491ce17a.js";import{_ as Re}from"./ResponsivePage.vue_vue_type_script_setup_true_lang-8251d3ef.js";import{u as qe}from"./useRouting-dcd35d82.js";import"./TouchPan-f5b71a95.js";import"./selection-deeb66ef.js";import"./action-b6cae49d.js";import"./QItemSection-5a614a7a.js";import"./QList-4a0a2728.js";function $(a,i,w,p){const c=[];return a.forEach(f=>{p(f)===!0?c.push(f):i.push({failedPropValidation:w,file:f})}),c}function W(a){a&&a.dataTransfer&&(a.dataTransfer.dropEffect="copy"),ne(a)}const ze={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},$e=["rejected"];function je({editable:a,dnd:i,getFileInput:w,addFilesToQueue:p}){const{props:c,emit:f,proxy:v}=ae(),b=A(null),C=E(()=>c.accept!==void 0?c.accept.split(",").map(l=>(l=l.trim(),l==="*"?"*/":(l.endsWith("/*")&&(l=l.slice(0,l.length-1)),l.toUpperCase()))):null),d=E(()=>parseInt(c.maxFiles,10)),F=E(()=>parseInt(c.maxTotalSize,10));function R(l){if(a.value)if(l!==Object(l)&&(l={target:null}),l.target!==null&&l.target.matches('input[type="file"]')===!0)l.clientX===0&&l.clientY===0&&se(l);else{const _=w();_&&_!==l.target&&_.click(l)}}function q(l){a.value&&l&&p(null,l)}function j(l,_,I,T){let r=Array.from(_||l.target.files);const n=[],t=()=>{n.length!==0&&f("rejected",n)};if(c.accept!==void 0&&C.value.indexOf("*/")===-1&&(r=$(r,n,"accept",e=>C.value.some(u=>e.type.toUpperCase().startsWith(u)||e.name.toUpperCase().endsWith(u))),r.length===0))return t();if(c.maxFileSize!==void 0){const e=parseInt(c.maxFileSize,10);if(r=$(r,n,"max-file-size",u=>u.size<=e),r.length===0)return t()}if(c.multiple!==!0&&r.length!==0&&(r=[r[0]]),r.forEach(e=>{e.__key=e.webkitRelativePath+e.lastModified+e.name+e.size}),T===!0){const e=I.map(u=>u.__key);r=$(r,n,"duplicate",u=>e.includes(u.__key)===!1)}if(r.length===0)return t();if(c.maxTotalSize!==void 0){let e=T===!0?I.reduce((u,k)=>u+k.size,0):0;if(r=$(r,n,"max-total-size",u=>(e+=u.size,e<=F.value)),r.length===0)return t()}if(typeof c.filter=="function"){const e=c.filter(r);r=$(r,n,"filter",u=>e.includes(u))}if(c.maxFiles!==void 0){let e=T===!0?I.length:0;if(r=$(r,n,"max-files",()=>(e++,e<=d.value)),r.length===0)return t()}if(t(),r.length!==0)return r}function M(l){W(l),i.value!==!0&&(i.value=!0)}function m(l){ne(l),(l.relatedTarget!==null||re.is.safari!==!0?l.relatedTarget!==b.value:document.elementsFromPoint(l.clientX,l.clientY).includes(b.value)===!1)===!0&&(i.value=!1)}function z(l){W(l);const _=l.dataTransfer.files;_.length!==0&&p(null,_),i.value=!1}function U(l){if(i.value===!0)return V("div",{ref:b,class:`q-${l}__dnd absolute-full`,onDragenter:W,onDragover:W,onDragleave:m,onDrop:z})}return Object.assign(v,{pickFiles:R,addFiles:q}),{pickFiles:R,addFiles:q,onDragover:M,onDragleave:m,processFiles:j,getDndNode:U,maxFilesNumber:d,maxTotalSizeNumber:F}}const Me=ue({name:"QFile",inheritAttrs:!1,props:{...de,...ce,...ze,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...me,...$e],setup(a,{slots:i,emit:w,attrs:p}){const{proxy:c}=ae(),f=fe(),v=A(null),b=A(!1),C=ge(a),{pickFiles:d,onDragover:F,onDragleave:R,processFiles:q,getDndNode:j}=je({editable:f.editable,dnd:b,getFileInput:Y,addFilesToQueue:X}),M=pe(a),m=E(()=>Object(a.modelValue)===a.modelValue?"length"in a.modelValue?Array.from(a.modelValue):[a.modelValue]:[]),z=E(()=>J(m.value)),U=E(()=>m.value.map(s=>s.name).join(", ")),l=E(()=>he(m.value.reduce((s,x)=>s+x.size,0))),_=E(()=>({totalSize:l.value,filesNumber:m.value.length,maxFiles:a.maxFiles})),I=E(()=>({tabindex:-1,type:"file",title:"",accept:a.accept,capture:a.capture,name:C.value,...p,id:f.targetUid.value,disabled:f.editable.value!==!0})),T=E(()=>"q-file q-field--auto-height"+(b.value===!0?" q-file--dnd":"")),r=E(()=>a.multiple===!0&&a.append===!0);function n(s){const x=m.value.slice();x.splice(s,1),e(x)}function t(s){const x=m.value.indexOf(s);x>-1&&n(x)}function e(s){w("update:modelValue",a.multiple===!0?s:s[0])}function u(s){s.keyCode===13&&ye(s)}function k(s){(s.keyCode===13||s.keyCode===32)&&d(s)}function Y(){return v.value}function X(s,x){const L=q(s,x,m.value,r.value),Q=Y();Q!=null&&(Q.value=""),L!==void 0&&((a.multiple===!0?a.modelValue&&L.every(ie=>m.value.includes(ie)):a.modelValue===L[0])||e(r.value===!0?m.value.concat(L):L))}function P(){return[V("input",{class:[a.inputClass,"q-file__filler"],style:a.inputStyle})]}function le(){if(i.file!==void 0)return m.value.length===0?P():m.value.map((x,L)=>i.file({index:L,file:x,ref:this}));if(i.selected!==void 0)return m.value.length===0?P():i.selected({files:m.value,ref:this});if(a.useChips===!0)return m.value.length===0?P():m.value.map((x,L)=>V(Ae,{key:"file-"+L,removable:f.editable.value,dense:!0,textColor:a.color,tabindex:a.tabindex,onRemove:()=>{n(L)}},()=>V("span",{class:"ellipsis",textContent:x.name})));const s=a.displayValue!==void 0?a.displayValue:U.value;return s.length!==0?[V("div",{class:a.inputClass,style:a.inputStyle,textContent:s})]:P()}function oe(){const s={ref:v,...I.value,...M.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:X};return a.multiple===!0&&(s.multiple=!0),V("input",s)}return Object.assign(f,{fieldClass:T,emitValue:e,hasValue:z,inputRef:v,innerValue:m,floatingLabel:E(()=>z.value===!0||J(a.displayValue)),computedCounter:E(()=>{if(a.counterLabel!==void 0)return a.counterLabel(_.value);const s=a.maxFiles;return`${m.value.length}${s!==void 0?" / "+s:""} (${l.value})`}),getControlChild:()=>j("file"),getControl:()=>{const s={ref:f.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:a.tabindex};return f.editable.value===!0&&Object.assign(s,{onDragover:F,onDragleave:R,onKeydown:u,onKeyup:k}),V("div",s,[oe()].concat(le()))}}),Object.assign(c,{removeAtIndex:n,removeFile:t,getNativeElement:()=>v.value}),ve(c,"nativeEl",()=>v.value),be(f)}});function te(a){setTimeout(()=>{window.URL.revokeObjectURL(a.href)},1e4),a.remove()}function Ue(a,i,w={}){const{mimeType:p,byteOrderMark:c,encoding:f}=typeof w=="string"?{mimeType:w}:w,v=f!==void 0?new TextEncoder(f).encode([i]):i,b=c!==void 0?[c,v]:[v],C=new Blob(b,{type:p||"application/octet-stream"}),d=document.createElement("a");d.href=window.URL.createObjectURL(C),d.setAttribute("download",a),typeof d.download>"u"&&d.setAttribute("target","_blank"),d.classList.add("hidden"),d.style.position="fixed",document.body.appendChild(d);try{return d.click(),te(d),!0}catch(F){return te(d),F}}const Pe={class:"q-mb-xl"},Be=o("div",{class:"text-h6 q-mb-md"},"Monthly Budget Target",-1),Ge=o("p",null," Choose a dollar amount for your monthly budget that makes sense for your current financial goals. This is the amount you will be trying to stay under each month. ",-1),We={class:"q-mb-xl"},Qe=o("p",{class:"text-h6"},"Options",-1),Ke={class:"q-mb-md"},Ye=o("p",null,"Reset your app Settings to the defaults without impacting any of your data.",-1),Xe={class:"q-mb-md"},Je=o("p",null," Welcome overlay provides helpful instructions on basic app usage on the Dashboard page. ",-1),Ze=o("p",null,"Dark mode allows you to switch between a light or dark theme for the app.",-1),He={class:"q-mb-xl"},et=o("p",{class:"text-h6"},"Data Management",-1),tt={class:"q-mb-md"},at=o("p",null," Import data into the database from a JSON file. The app expects the data in the file to be structured the same as the exported version. Logs are ignored during imports. ",-1),nt={class:"q-mb-md"},lt=o("p",null," Export your data as a JSON file. Do this on a regularly basis so you have a backup of your data. ",-1),ot={class:"q-mb-xl"},it=o("p",{class:"text-h6"},"Logging",-1),st={class:"q-mb-md"},rt=o("p",null,"View the app logs to troubleshoot issues.",-1),ut={class:"q-mb-md"},dt=o("p",null," Validate that the logging settings below are working as expected by generating some test logs. ",-1),ct={class:"q-mb-md"},mt=o("p",null,"Show Console Logs will display all log messages in the browser console.",-1),ft={class:"q-mb-md"},gt=o("p",null,"Show Info Messages will display info level notifications.",-1),pt={class:"q-mb-md"},vt=o("p",null," Change log retention duration below. Logs older than the selected time will be deleted. This functions retroactivley. Expired log processing occurs every time the app is loaded. ",-1),bt={class:"q-mx-lg"},ht={class:"q-mb-xl"},yt=o("p",{class:"text-h6 text-negative"},"DANGER ZONE",-1),St=o("p",null," The following operations cannot be undone. Consider exporting your data before proceeding. ",-1),_t={class:"q-mb-md"},xt=o("p",null,"Delete the app logs from the database.",-1),Dt={class:"q-mb-md"},Et=o("p",null,"Permanently delete all data from the database.",-1),wt={class:"q-mb-md"},Ct=o("p",null,"Delete the underlining database and all of its data (requires website reload).",-1),zt=Se({__name:"SettingsView",setup(a){_e({title:`${K} - Settings`});const{log:i}=xe(),{notify:w}=De(),{confirmDialog:p}=Ve(),{goToLogsData:c}=qe(),f=A([]),v=A(null),b=A(void 0),C=A(0),d=A(null),F=[y[y["One Week"]],y[y["One Month"]],y[y["Three Months"]],y[y["Six Months"]],y[y["One Year"]],y[y.Forever]],R=S.liveSettings().subscribe({next:n=>{var e,u;f.value=n;const t=(e=n.find(k=>k.key===D.LOG_RETENTION_DURATION))==null?void 0:e.value;C.value=F.findIndex(k=>k===y[t]),b.value=(u=n.find(k=>k.key===D.BUDGET_TARGET))==null?void 0:u.value},error:n=>{i.error("Error fetching live Settings",n)}});Ee(()=>{R.unsubscribe()});function q(){i.debug("This is a Debug Log",{name:"Debug"}),i.info("This is an Info Log",{name:"Info"}),i.warn("This is a Warning Log",{name:"Warning"}),i.error("This is an Error Log",{name:"Error"})}function j(n){var e,u;const t=((u=(e=n[0])==null?void 0:e.importFile)==null?void 0:u.name)||void 0;i.warn(`Cannot import"${t}`,n)}function M(){var n;p("Import",`Import backup data from ${(n=d==null?void 0:d.value)==null?void 0:n.name} and attempt to load records into the database from it?`,O.INFO,"info",async()=>{try{const t=JSON.parse(await d.value.text());if(i.silentDebug("backupData:",t),t.appName!==K)throw new Error(`Cannot import data from the app ${t.appName}`);t[ee.SETTINGS].length>0&&await Promise.all(t[ee.SETTINGS].filter(e=>Object.values(D).includes(e.key)).map(async e=>await S.setSetting(e.key,e.value))),await S.importExpenses(t[Ne.EXPENSES]),d.value=null,i.info("Successfully imported available data")}catch(t){i.error("Error during import",t)}})}function m(){const n=K.toLowerCase().split(" ").join("-"),t=new Date().toISOString().split("T")[0],e=`export-${n}-${t}.json`;p("Export",`Export all data into the file "${e}" as a backup?`,O.INFO,"info",async()=>{try{const u=await S.getBackupData();if(i.silentDebug("backupData:",u),Ue(e,JSON.stringify(u),{encoding:"UTF-8",mimeType:"application/json"})===!0)i.info("File downloaded successfully",{filename:e});else throw new Error("Browser denied file download")}catch(u){i.error("Export failed",u)}})}async function z(n){try{const t=F[n],e=y[t];await S.setSetting(D.LOG_RETENTION_DURATION,e),i.info("Updated log retention duration",{logDurationKey:t,logDuration:e,index:n})}catch(t){i.error("Log retention duration update failed",t)}}function U(){p("Reset Settings","Would you like to reset your app Settings to the defaults? This does not impact your data.",O.REFRESH,"primary",async()=>{try{await S.clearSettings(),i.info("Successfully reset settings")}catch(n){i.error("Error reseting settings",n)}})}function l(){p("Delete Logs","Permanetly delete all Logs from the database?",O.CLEAR,"negative",async()=>{try{await S.clearLogs(),i.info("Successfully deleted logs data")}catch(n){i.error("Error deleting Logs",n)}})}function _(){p("Delete All","Permanetly delete all data from the database?",O.CLEAR,"negative",async()=>{try{await S.clearAll(),i.info("All data successfully deleted")}catch(n){i.error("Error deleting all data",n)}})}function I(){p("Delete Database","Delete the underlining database? All data will be lost. You must reload the website after this action to reinitialize the database.",O.CLEAR,"negative",async()=>{try{await S.deleteDatabase(),w("Reload the website now",O.WARN,"warning")}catch(n){i.error("Database deletion failed",n)}})}function T(n){var t;return(t=f.value.find(e=>e.key===n))==null?void 0:t.value}async function r(){var n;b.value||(b.value=void 0),(n=v==null?void 0:v.value)!=null&&n.validate()&&await S.setSetting(D.BUDGET_TARGET,b.value)}return(n,t)=>(Z(),H(Re,{bannerIcon:g(O).SETTINGS,bannerTitle:"Settings"},{default:B(()=>[o("section",Pe,[Be,Ge,h(Fe,{modelValue:b.value,"onUpdate:modelValue":[t[0]||(t[0]=e=>b.value=e),t[1]||(t[1]=e=>r())],modelModifiers:{number:!0},ref_key:"budgetInputRef",ref:v,rules:[e=>g(Ce).optional().safeParse(e).success||"Must be a positive integar"],hint:"Auto Saved",type:"number",step:"1",placeholder:"Dollar Amount",dense:"",outlined:"",color:"primary"},{before:B(()=>[we(" $ ")]),_:1},8,["modelValue","rules"])]),o("section",We,[Qe,o("div",Ke,[Ye,h(N,{label:"Reset Settings",color:"primary",onClick:t[2]||(t[2]=e=>U())})]),o("div",Xe,[Je,h(G,{label:"Show Welcome Overlay","model-value":T(g(D).WELCOME_OVERLAY),"onUpdate:modelValue":t[3]||(t[3]=e=>g(S).setSetting(g(D).WELCOME_OVERLAY,e))},null,8,["model-value"])]),o("div",null,[Ze,h(G,{label:"Dark Mode","model-value":T(g(D).DARK_MODE),"onUpdate:modelValue":t[4]||(t[4]=e=>g(S).setSetting(g(D).DARK_MODE,e))},null,8,["model-value"])])]),o("section",He,[et,o("div",tt,[at,h(Me,{modelValue:d.value,"onUpdate:modelValue":t[7]||(t[7]=e=>d.value=e),dense:"",outlined:"",counter:"","bottom-slots":"",label:"File Select","max-file-size":g(Oe).MAX_FILE_SIZE,accept:"application/json",onRejected:j},{before:B(()=>[h(N,{disable:!d.value,label:"Import",color:"primary",onClick:t[5]||(t[5]=e=>M())},null,8,["disable"])]),append:B(()=>[d.value?(Z(),H(Te,{key:0,name:g(O).CLOSE,class:"cursor-pointer",onClick:t[6]||(t[6]=ke(e=>d.value=null,["stop"]))},null,8,["name"])):Le("",!0)]),_:1},8,["modelValue","max-file-size"])]),o("div",nt,[lt,h(N,{label:"Export",color:"primary",onClick:t[8]||(t[8]=e=>m())})])]),o("section",ot,[it,o("div",st,[rt,h(N,{label:"Access Logs",color:"primary",onClick:t[9]||(t[9]=e=>g(c)())})]),o("div",ut,[dt,h(N,{label:"Test Logger",color:"primary",onClick:t[10]||(t[10]=e=>q())})]),o("div",ct,[mt,h(G,{label:"Show Console Logs","model-value":T(g(D).CONSOLE_LOGS),"onUpdate:modelValue":t[11]||(t[11]=e=>g(S).setSetting(g(D).CONSOLE_LOGS,e))},null,8,["model-value"])]),o("div",ft,[gt,h(G,{label:"Show Info Messages","model-value":T(g(D).INFO_MESSAGES),"onUpdate:modelValue":t[12]||(t[12]=e=>g(S).setSetting(g(D).INFO_MESSAGES,e))},null,8,["model-value"])]),o("div",pt,[vt,o("div",bt,[h(Ie,{modelValue:C.value,"onUpdate:modelValue":t[13]||(t[13]=e=>C.value=e),"label-value":F[C.value],color:"primary",markers:"","label-always":"","switch-label-side":"",min:0,max:F.length-1,onChange:t[14]||(t[14]=e=>z(e))},null,8,["modelValue","label-value","max"])])])]),o("section",ht,[yt,St,o("div",_t,[xt,h(N,{label:"Delete Logs",color:"negative",onClick:t[15]||(t[15]=e=>l())})]),o("div",Dt,[Et,h(N,{label:"Delete All Data",color:"negative",onClick:t[16]||(t[16]=e=>_())})]),o("div",wt,[Ct,h(N,{label:"Delete Database",color:"negative",onClick:t[17]||(t[17]=e=>I())})])])]),_:1},8,["bannerIcon"]))}});export{zt as default};
