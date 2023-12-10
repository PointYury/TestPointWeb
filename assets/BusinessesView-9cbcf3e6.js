import{r,ab as _,R as K,S as ee,M as le,V as k,W as C,X as a,Y as l,a8 as ae,Z as se,a4 as n,a5 as i,a6 as o,$ as m,ac as f,as as E,a9 as B,aq as T,at as te,au as ne,ar as M,ad as z,ao as b,ap as V,aw as x,av as u}from"./index-92261620.js";import{a as v,Q as ie}from"./QTable-9825e372.js";import{Q as $}from"./QTd-4358c050.js";import{Q as oe}from"./QPage-ed09eb60.js";import"./QList-e653785c.js";const H=r(),ue=()=>{const Q=d=>{_().get(`v1/business/${d}/all`).then(g=>{H.value=g.data})},A=d=>_().get(`v1/business/${d}/details`),p=d=>_().put("/v1/business",d),S=d=>_().post("/v1/business",d),w=d=>_().put("/v1/business/change-status",d);return{businesses:H.value,getBusinesses:Q,getBusinessDetails:A,editBusiness:p,addBusiness:S,changeStatus:w}},de=T("div",{class:"row q-mb-md"},[T("h5",null,"BUSINESSES")],-1),ce={key:0,class:"q-mt-md"},re={class:"full-width row wrap justify-between"},me={class:"row"},he=K({__name:"BusinessesView",setup(Q){const{businesses:A,getBusinesses:p,changeStatus:S,editBusiness:w,addBusiness:d}=ue(),g=r(""),U=ee(),Y=r(A),y=r(""),D=r(null),O=r(null),h=r(null),N=r([]),j=r([]),R=r(""),I=r(["name","description","createdAt","status","payDate","payedDays","creditDays","planName","actions"]),L=[{name:"id",label:"ID",field:"id",align:"center"},{name:"name",label:"NAME",field:"name",align:"center"},{name:"description",label:"DESCRIPTION",field:"description",align:"center"},{name:"payDate",label:"PAY DATE",field:"payDate",align:"center"},{name:"payedDays",label:"PAYED DAYS",field:"payedDays",align:"center"},{name:"creditDays",label:"CREDIT DAYS",field:"creditDays",align:"center"},{name:"planName",label:"PLAN NAME",field:"planName",align:"center"},{name:"createdAt",label:"CREATED",field:"createdAt",align:"center"},{name:"status",label:"STATUS",field:"status",align:"center"},{name:"actions",label:"ACTIONS",field:"actions",align:"center"}],W=s=>{const t={};s.forEach(e=>{t[e.key]=e.value}),y.value&&(t.ownerId=y.value,d(t).then(()=>{var e;(e=D.value)==null||e.hideDialog(),p(y.value)}))},X=s=>{const t={};s.forEach(e=>{t[e.key]=e.value}),w(t).then(()=>{var e;(e=D.value)==null||e.hideDialog(),p(y.value)})},Z=()=>{var s;N.value=[{key:"name",label:"Name",value:"",fieldType:b.INPUT,rules:["required"]},{key:"description",label:"Description",value:"",fieldType:b.INPUT,rules:["required"]},{key:"planType",label:"Plan type",options:V,hideClearButton:!0,value:V[0].value,fieldType:b.SELECT,rules:["required"]},{key:"payedDays",label:"Payed days",options:x,hideClearButton:!0,value:x[0].value,fieldType:b.SELECT,rules:["required"]}];debugger;(s=D.value)==null||s.showDialog()},G=s=>{var t;N.value=[{key:"businessId",value:s.id},{key:"name",label:"Name",value:s.name,fieldType:b.INPUT,rules:["required"]},{key:"description",label:"Description",value:s.description,fieldType:b.INPUT,rules:["required"]},{key:"planType",label:"Plan type",options:V,hideClearButton:!0,value:s.planType,fieldType:b.SELECT,rules:["required"]},{key:"payedDays",label:"Payed days",options:x,hideClearButton:!0,value:s.payedDays,fieldType:b.SELECT,rules:["required"]}],(t=D.value)==null||t.showDialog()},q=(s,t=!1)=>{var e;if(h.value){let c,P;t?(c="DELETE",P=u.Deleted):(c=s.status==u.Active?"DEACTIVATE":"ACTIVATE",P=s.status==u.Active?u.Inactive:u.Active),R.value=`You are going to ${c} business ${s.name.toUpperCase()}. Are you sure?`,h.value.customHeader="change status",h.value.changeStatus=()=>{S({id:s.id,status:P}).then(()=>{var F;(F=h.value)==null||F.hideDialog(),p(y.value)})}}(e=h.value)==null||e.showDialog()},J=(s,t)=>{t.id&&U.push({path:`/${t.id}/locations`})};return le(()=>{var s;y.value=(s=U.currentRoute.value.params.ownerId)==null?void 0:s.toString(),y.value!==""&&p(y.value)}),(s,t)=>(k(),C(oe,{padding:""},{default:a(()=>[de,l(ae,{color:"primary",spaced:"",size:"2px"}),Y.value?(k(),se("div",ce,[l(ie,{flat:"",bordered:"",rows:Y.value,columns:L,"row-key":"id",filter:g.value,"visible-columns":I.value,onRowClick:J},{"header-cell-id":a(e=>[l(v,{props:e},{default:a(()=>[l(n,{name:"badge",size:"1.7em",color:"light-blue-14"}),i(" "+o(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-name":a(e=>[l(v,{props:e},{default:a(()=>[l(n,{name:"person",size:"1.5em",color:"light-blue-14"}),i(" "+o(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-description":a(e=>[l(v,{props:e},{default:a(()=>[l(n,{name:"description",size:"1.5em",color:"light-blue-14"}),i(" "+o(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-payDate":a(e=>[l(v,{props:e},{default:a(()=>[l(n,{name:"event",size:"1.5em",color:"light-blue-14"}),i(" "+o(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-payedDays":a(e=>[l(v,{props:e},{default:a(()=>[l(n,{name:"payments",size:"1.5em",color:"light-blue-14"}),i(" "+o(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-creditDays":a(e=>[l(v,{props:e},{default:a(()=>[l(n,{name:"credit_card",size:"1.5em",color:"light-blue-14"}),i(" "+o(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-planName":a(e=>[l(v,{props:e},{default:a(()=>[l(n,{name:"list_alt",size:"1.5em",color:"light-blue-14"}),i(" "+o(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-createdAt":a(e=>[l(v,{props:e},{default:a(()=>[l(n,{name:"event",size:"1.5em",color:"light-blue-14"}),i(" "+o(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-status":a(e=>[l(v,{props:e},{default:a(()=>[l(n,{name:"account_circle",size:"1.5em",color:"light-blue-14"}),i(" "+o(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-actions":a(e=>[l(v,{props:e},{default:a(()=>[l(n,{name:"manage_accounts",size:"1.5em",color:"light-blue-14"}),i(" "+o(e.col.label),1)]),_:2},1032,["props"])]),"body-cell-planName":a(e=>[l($,{props:e},{default:a(()=>[l(n,{name:e.value?"done":"close",size:"1.5em",color:e.value?"light-green-14":"deep-orange-6"},null,8,["name","color"]),i(" "+o(e.value),1)]),_:2},1032,["props"])]),"body-cell-status":a(e=>[l($,{props:e},{default:a(()=>[e.value==m(u).Active?(k(),C(f,{key:0,size:"sm",style:{width:"93px"},color:"secondary",onClick:E(c=>q(e.row),["stop"])},{default:a(()=>[l(n,{center:"",name:"check"}),i(" "+o(m(u)[e.value]),1)]),_:2},1032,["onClick"])):B("",!0),e.value==m(u).Inactive?(k(),C(f,{key:1,size:"sm",style:{width:"93px"},color:"deep-orange",onClick:E(c=>q(e.row),["stop"])},{default:a(()=>[l(n,{center:"",name:"close"}),i(" "+o(m(u)[e.value]),1)]),_:2},1032,["onClick"])):B("",!0),e.value==m(u).Deleted?(k(),C(f,{key:2,style:{width:"93px"},size:"sm",color:"grey",disable:""},{default:a(()=>[l(n,{center:"",name:"delete"}),i(" "+o(m(u)[e.value]),1)]),_:2},1024)):B("",!0)]),_:2},1032,["props"])]),"body-cell-actions":a(e=>[l($,{props:e},{default:a(()=>[l(f,{class:"q-mr-sm",dense:"",flat:"",round:"",color:e.row.status==m(u).Deleted?"grey":"blue",icon:"edit",onClick:E(c=>G(e.row),["stop"]),disable:e.row.status==m(u).Deleted},null,8,["color","onClick","disable"]),l(f,{class:"q-ml-sm",dense:"",flat:"",round:"",color:e.row.status==m(u).Deleted?"grey":"red",icon:"delete",onClick:E(c=>q(e.row,!0),["stop"]),disable:e.row.status==m(u).Deleted},null,8,["color","onClick","disable"])]),_:2},1032,["props"])]),top:a(e=>[T("div",re,[T("div",null,[l(f,{label:"Add Business",icon:"domain",color:"primary",onClick:Z})]),T("div",me,[l(te,{modelValue:I.value,"onUpdate:modelValue":t[0]||(t[0]=c=>I.value=c),multiple:"",outlined:"",dense:"","options-dense":"","display-value":s.$q.lang.table.columns,"emit-value":"","map-options":"",options:L,"option-value":"name","options-cover":"",style:{"min-width":"150px"},class:"q-mx-md"},null,8,["modelValue","display-value"]),l(ne,{dense:"",outlined:"",debounce:"300",modelValue:g.value,"onUpdate:modelValue":t[1]||(t[1]=c=>g.value=c),placeholder:"Search",class:"q-mx-md"},{append:a(()=>[l(n,{name:"search"})]),_:1},8,["modelValue"]),l(f,{flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen",onClick:e.toggleFullscreen,class:"q-mx-md"},null,8,["icon","onClick"])])])]),_:1},8,["rows","filter","visible-columns"])])):B("",!0),l(z,{ref_key:"dialogAddBusiness",ref:D,header:"Add business",icon:"add",hideDialogButtons:""},{body:a(()=>[l(M,{fields:N.value,onHandleSubmit:W},null,8,["fields"])]),_:1},512),l(z,{ref_key:"dialogEditBusiness",ref:O,header:"Edit business",icon:"edit",hideDialogButtons:""},{body:a(()=>[l(M,{fields:j.value,onHandleSubmit:X},null,8,["fields"])]),_:1},512),l(z,{ref_key:"confirmationDialog",ref:h,icon:"build_circle","submit-title":"YES","cancel-title":"NO",width:"500"},{body:a(()=>[i(o(R.value),1)]),_:1},512)]),_:1}))}});export{he as default};
