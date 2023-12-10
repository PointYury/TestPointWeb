import{r,ab as g,R as G,S as J,M as K,V as E,W as _,X as a,aq as k,Y as l,a4 as n,a5 as d,a6 as u,$ as c,ac as p,as as T,a9 as V,at as Z,au as ee,ar as M,ad as $,ao as b,av as i}from"./index-d799c111.js";import{a as y,Q as le}from"./QTable-c8c84515.js";import{Q as H}from"./QTd-a6691587.js";import{Q as ae}from"./QPage-d65c8cd2.js";import"./QList-f0f2504e.js";const Y=r(),te=()=>{const P=m=>{g().get(`v1/employee/${m}/all`).then(w=>{Y.value=w.data})},C=m=>g().put("/v1/employee",m),v=m=>g().post("/v1/employee",m),A=m=>g().put("/v1/employee/change-status",m);return{employees:Y.value,addEmployee:v,editEmployee:C,getEmployees:P,changeStatus:A}},oe={class:"q-mt-md"},ie={class:"full-width row wrap justify-between"},se={class:"row"},me=G({__name:"EmployeesView",setup(P){const{employees:C,getEmployees:v,editEmployee:A,addEmployee:m,changeStatus:w}=te(),D=r(""),Q=J(),f=r(""),U=r(""),N=r(null),I=r(null),h=r(null),S=r(["firstName","phone","email","createdAt","status","actions"]),z=[{name:"id",label:"ID",field:"id",align:"center"},{name:"firstName",label:"FIRST NAME",field:"firstName",align:"center"},{name:"phone",label:"PHONE",field:"phone",align:"center"},{name:"email",label:"EMAIL",field:"email",align:"center"},{name:"createdAt",label:"CREATED",field:"createdAt",align:"center"},{name:"status",label:"STATUS",field:"status",align:"center"},{name:"actions",label:"ACTIONS",field:"actions",align:"center"}],F=r([]),R=r([]),q=(t,o=!1)=>{var e;if(h.value){let s,x;o?(s="DELETE",x=i.Deleted):(s=t.status==i.Active?"DEACTIVATE":"ACTIVATE",x=t.status==i.Active?i.Inactive:i.Active),U.value=`You are going to ${s} location ${t.firstName.toUpperCase()}. Are you sure?`,h.value.customHeader="change status",h.value.changeStatus=()=>{w({id:t.id,status:x}).then(()=>{var B;(B=h.value)==null||B.hideDialog(),v(f.value)})}}(e=h.value)==null||e.showDialog()},L=()=>{var t;F.value=[{key:"firstName",label:"First name",value:"",fieldType:b.INPUT,rules:["required"]},{key:"phone",label:"Phone",value:"",prefix:"+375",fieldType:b.INPUT,type:"tel",rules:["required","tel"]},{key:"email",label:"Email",value:"",fieldType:b.INPUT,type:"email",rules:["required"]}],(t=N.value)==null||t.showDialog()},O=t=>{var o;R.value=[{key:"employeeId",value:t.id},{key:"firstName",label:"First name",value:t.firstName,fieldType:b.INPUT,rules:["required"]},{key:"phone",label:"Phone",value:t.phone,prefix:"+375",fieldType:b.INPUT,type:"tel",rules:["required","tel"]},{key:"email",label:"Email",value:t.email,fieldType:b.INPUT,type:"email",rules:["required"]}],(o=I.value)==null||o.showDialog()},j=t=>{const o={};t.forEach(e=>{o[e.key]=e.value}),o.locationId=f.value,m(o).then(()=>{var e;(e=N.value)==null||e.hideDialog(),v(f.value)})},W=t=>{const o={};t.forEach(e=>{o[e.key]=e.value}),A(o).then(()=>{var e;(e=I.value)==null||e.hideDialog(),v(f.value)})},X=(t,o)=>{o.id&&Q.push({path:`${o.id}/businesses`})};return K(()=>{var t;f.value=(t=Q.currentRoute.value.params.locationId)==null?void 0:t.toString(),f.value!==""&&v(f.value)}),(t,o)=>(E(),_(ae,{padding:""},{default:a(()=>[k("div",oe,[l(le,{flat:"",bordered:"",title:"Employees",rows:c(C),columns:z,"row-key":"id",filter:D.value,"visible-columns":S.value,onRowClick:X},{"header-cell-id":a(e=>[l(y,{props:e},{default:a(()=>[l(n,{name:"badge",size:"1.7em",color:"light-blue-14"}),d(" "+u(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-firstName":a(e=>[l(y,{props:e},{default:a(()=>[l(n,{name:"person",size:"1.5em",color:"light-blue-14"}),d(" "+u(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-phone":a(e=>[l(y,{props:e},{default:a(()=>[l(n,{name:"phone_iphone",size:"1.5em",color:"light-blue-14"}),d(" "+u(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-email":a(e=>[l(y,{props:e},{default:a(()=>[l(n,{name:"email",size:"1.5em",color:"light-blue-14"}),d(" "+u(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-createdAt":a(e=>[l(y,{props:e},{default:a(()=>[l(n,{name:"people",size:"1.5em",color:"light-blue-14"}),d(" "+u(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-status":a(e=>[l(y,{props:e},{default:a(()=>[l(n,{name:"account_circle",size:"1.5em",color:"light-blue-14"}),d(" "+u(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-actions":a(e=>[l(y,{props:e},{default:a(()=>[l(n,{name:"manage_accounts",size:"1.5em",color:"light-blue-14"}),d(" "+u(e.col.label),1)]),_:2},1032,["props"])]),"body-cell-status":a(e=>[l(H,{props:e},{default:a(()=>[e.value==c(i).Active?(E(),_(p,{key:0,size:"sm",style:{width:"93px"},color:"secondary",onClick:T(s=>q(e.row),["stop"])},{default:a(()=>[l(n,{center:"",name:"check"}),d(" "+u(c(i)[e.value]),1)]),_:2},1032,["onClick"])):V("",!0),e.value==c(i).Inactive?(E(),_(p,{key:1,size:"sm",style:{width:"93px"},color:"deep-orange",onClick:T(s=>q(e.row),["stop"])},{default:a(()=>[l(n,{center:"",name:"close"}),d(" "+u(c(i)[e.value]),1)]),_:2},1032,["onClick"])):V("",!0),e.value==c(i).Deleted?(E(),_(p,{key:2,style:{width:"93px"},size:"sm",color:"grey",disable:""},{default:a(()=>[l(n,{center:"",name:"delete"}),d(" "+u(c(i)[e.value]),1)]),_:2},1024)):V("",!0)]),_:2},1032,["props"])]),"body-cell-actions":a(e=>[l(H,{props:e},{default:a(()=>[l(p,{class:"q-mr-sm",dense:"",flat:"",round:"",color:e.row.status==c(i).Deleted?"grey":"blue",icon:"edit",onClick:T(s=>O(e.row),["stop"]),disable:e.row.status==c(i).Deleted},null,8,["color","onClick","disable"]),l(p,{class:"q-ml-sm",dense:"",flat:"",round:"",color:e.row.status==c(i).Deleted?"grey":"red",icon:"delete",onClick:T(s=>q(e.row,!0),["stop"]),disable:e.row.status==c(i).Deleted},null,8,["color","onClick","disable"])]),_:2},1032,["props"])]),top:a(e=>[k("div",ie,[k("div",null,[l(p,{label:"Add new employee",icon:"person_add",outline:"",onClick:L})]),k("div",se,[l(Z,{modelValue:S.value,"onUpdate:modelValue":o[0]||(o[0]=s=>S.value=s),multiple:"",outlined:"",dense:"","options-dense":"","display-value":t.$q.lang.table.columns,"emit-value":"","map-options":"",options:z,"option-value":"name","options-cover":"",style:{"min-width":"150px"},class:"q-mx-md"},null,8,["modelValue","display-value"]),l(ee,{dense:"",outlined:"",debounce:"300",modelValue:D.value,"onUpdate:modelValue":o[1]||(o[1]=s=>D.value=s),placeholder:"Search",class:"q-mx-md"},{append:a(()=>[l(n,{name:"search"})]),_:1},8,["modelValue"]),l(p,{flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen",onClick:e.toggleFullscreen,class:"q-mx-md"},null,8,["icon","onClick"])])])]),_:1},8,["rows","filter","visible-columns"])]),l($,{ref_key:"dialogAddEmployee",ref:N,icon:"add",header:"Add employee",hideDialogButtons:""},{body:a(()=>[l(M,{fields:F.value,onHandleSubmit:j},null,8,["fields"])]),_:1},512),l($,{ref_key:"dialogEditEmployee",ref:I,icon:"edit",header:"Edit employee",hideDialogButtons:""},{body:a(()=>[l(M,{fields:R.value,onHandleSubmit:W},null,8,["fields"])]),_:1},512),l($,{ref_key:"confirmationDialog",ref:h,icon:"build_circle","submit-title":"YES","cancel-title":"NO",width:"500"},{body:a(()=>[d(u(U.value),1)]),_:1},512)]),_:1}))}});export{me as default};
