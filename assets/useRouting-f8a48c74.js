import{bM as A,bN as D,L as f,bO as R,R as a}from"./index-54cdbb61.js";function T(){const s=A(),o=D(),{log:e}=f(),c=Array.isArray(s.params.id)?s.params.id[0]:s.params.id,u=R.safeParse(c).success?c:void 0;function i(){try{o.push({name:a.DASHBOARD})}catch(r){e.error("Error accessing dashboard route",r)}}function g(){try{o.push({name:a.DATA_LOGS})}catch(r){e.error("Error accessing logs data route",r)}}function h(){try{o.push({name:a.DATA_RECORDS})}catch(r){e.error("Error accessing expenses data route",r)}}function d(){try{o.push({name:a.CREATE})}catch(r){e.error("Error accessing create route",r)}}function p(r){try{o.push({name:a.EDIT,params:{id:r}})}catch(t){e.error("Error accessing edit route",t)}}function m(){var r,t,n;try{(n=(t=(r=o==null?void 0:o.options)==null?void 0:r.history)==null?void 0:t.state)!=null&&n.back?o.back():o.push({name:a.DASHBOARD})}catch(E){e.error("Error accessing go back route",E)}}return{route:s,router:o,routeId:u,goToDashboard:i,goToLogsData:g,goToExpensesData:h,goToCreate:d,goToEdit:p,goBack:m}}export{T as u};