import{r as m,ab as D,R as le,S as te,M as re,V as x,W as C,X as l,aq as I,Y as a,a4 as d,a5 as o,a6 as n,$ as g,ac as h,as as P,a9 as Y,ax as ie,at as se,au as oe,ar as j,ad as F,ao as i,ay as E,av as u}from"./index-3462b864.js";import{a as c,Q as ne}from"./QTable-b0888808.js";import{Q as L}from"./QTd-efd44b4b.js";import{Q as de}from"./QPage-e5639f0d.js";import{u as ue}from"./useCategories-5f796599.js";import"./QList-df2f454c.js";const K=m(),ce=()=>{const z=f=>{D().get(`v1/program/${f}/all`).then(k=>{K.value=k.data})},_=f=>D().put("/v1/program",f),b=f=>D().post("/v1/program/bonus-program",f,{headers:{"Content-Type":"multipart/form-data"}}),B=f=>D().put("/v1/program/change-status",f),A=f=>D().get(`/v1/location/${f}/location-lookups`);return{programs:K.value,addProgram:b,editProgram:_,getPrograms:z,changeStatus:B,getLocationLookups:A}},me={class:"q-mt-md"},fe={class:"full-width row wrap justify-between"},ge={class:"row"},Ee=le({__name:"ProgramsView",setup(z){const{programs:_,getPrograms:b,editProgram:B,addProgram:A,changeStatus:f,getLocationLookups:k}=ce(),{getCategoryLookups:R}=ue(),S=m(""),W=te(),p=m(""),V=m(""),v=m(),y=m(),q=m(null),N=m(null),T=m(null),w=m(["name","steps","limitCards","maxEarnBonusesPerDay","maxExchangeBonusesPerDay","maxEarnBonuses","isFirstIncluded","createdAt","status","actions"]),$=[{name:"id",label:"ID",field:"id",align:"center"},{name:"name",label:"FIRST NAME",field:"name",align:"center"},{name:"steps",label:"STEPS",field:"steps",align:"center"},{name:"limitCards",label:"LIMIT CARDS",field:"limitCards",align:"center"},{name:"maxEarnBonusesPerDay",label:"MAX EARN BONUSES PER DAY",field:"maxEarnBonusesPerDay",align:"center"},{name:"maxExchangeBonusesPerDay",label:"MAX EXCHANGE BONUSES PER DAY",field:"maxExchangeBonusesPerDay",align:"center"},{name:"maxEarnBonuses",label:"MAX EARN BONUSES",field:"maxEarnBonuses",align:"center"},{name:"isFirstIncluded",label:"FIRST INCLUDED",field:"isFirstIncluded",align:"center"},{name:"createdAt",label:"CREATED",field:"createdAt",align:"center"},{name:"status",label:"STATUS",field:"status",align:"center"},{name:"actions",label:"ACTIONS",field:"actions",align:"center"}],Q=m([]),O=m([]),M=(t,r=!1)=>{var e;if(T.value){let s,U;r?(s="DELETE",U=u.Deleted):(s=t.status==u.Active?"DEACTIVATE":"ACTIVATE",U=t.status==u.Active?u.Inactive:u.Active),V.value=`You are going to ${s} location ${t.name.toUpperCase()}. Are you sure?`,T.value.customHeader="change status",T.value.changeStatus=()=>{f({id:t.id,status:U}).then(()=>{var G;(G=T.value)==null||G.hideDialog(),b(p.value)})}}(e=T.value)==null||e.showDialog()},J=()=>{let t=[];v.value||t.push(k(p.value)),y.value||t.push(R()),t.length?Promise.all(t).then(r=>{v.value=r[0].data,y.value=r[1].data,X()}):X()},Z=t=>{let r=[];v.value||r.push(k(p.value)),y.value||r.push(R()),r.length?Promise.all(r).then(e=>{v.value=e[0].data,y.value=e[1].data,H(t)}):H(t)},X=()=>{var r;const t=new Date;Q.value=[{key:"image",value:["/src/assets/no_image.jpg",""],fieldType:i.IMAGE,rules:["required"]},{key:"icon",value:["/src/assets/water.gif",""],fieldType:i.ICON,rules:["required"]},{key:"name",label:"Name",value:"",fieldType:i.INPUT,rules:["required"]},{key:"description",label:"Description",value:"",fieldType:i.INPUT,rules:["required"]},{key:"steps",label:"Steps",value:"7",min:1,max:24,width:28,maxLength:2,hideClearButton:!0,fieldType:i.INPUT,rules:["required"]},{key:"limitCards",label:"Limit cards",value:"",width:28,min:0,max:1e5,hideClearButton:!0,fieldType:i.INPUT,rules:["required"]},{key:"maxEarnBonuses",label:"Max earn bonuses",value:"",min:1,max:100,width:36.5,hideClearButton:!0,fieldType:i.INPUT,rules:["required"]},{key:"maxEarnBonusesPerDay",label:"Max earn bonuses per day",value:"",min:1,max:100,width:47,hideClearButton:!0,fieldType:i.INPUT,rules:["required"]},{key:"maxExchangeBonusesPerDay",label:"Max exchange bonuses per day",value:"",min:1,max:100,width:48,hideClearButton:!0,fieldType:i.INPUT,rules:["required"]},{key:"periodStart",label:"Start date",width:25,value:E.formatDate(t,"DD-MM-YYYY"),fieldType:i.DATETIME,rules:["required"]},{key:"periodEnd",label:"End date",width:25,value:E.formatDate(E.addToDate(t,{months:1}),"DD-MM-YYYY"),fieldType:i.DATETIME,rules:["required"]},{key:"isFirstIncluded",label:"First step included",value:!1,width:42.5,hideClearButton:!0,fieldType:i.CHECKBOX,rules:["required"]},{key:"locationIds",label:"Locations",fieldType:i.SELECT,multiple:!0,value:[v.value[0].value],options:v.value},{key:"categoryId",label:"Categories",fieldType:i.SELECT,value:y.value[0].value,options:y.value}],(r=q.value)==null||r.showDialog()},H=t=>{var r;O.value=[{key:"image",value:[t.image,""],fieldType:i.IMAGE,rules:["required"]},{key:"icon",value:[t.icon,""],fieldType:i.ICON,rules:["required"]},{key:"name",label:"Name",value:t.name,fieldType:i.INPUT,rules:["required"]},{key:"description",label:"Description",value:t.description,fieldType:i.INPUT,rules:["required"]},{key:"steps",label:"Steps",value:t.steps,min:1,max:24,width:28,maxLength:2,hideClearButton:!0,fieldType:i.INPUT,rules:["required"]},{key:"limitCards",label:"Limit cards",value:t.limitCards,width:28,min:0,max:1e5,hideClearButton:!0,fieldType:i.INPUT,rules:["required"]},{key:"maxEarnBonuses",label:"Max earn bonuses",value:t.maxEarnBonuses,min:1,max:100,width:36.5,hideClearButton:!0,fieldType:i.INPUT,rules:["required"]},{key:"maxEarnBonusesPerDay",label:"Max earn bonuses per day",value:t.maxEarnBonusesPerDay,min:1,max:100,width:47,hideClearButton:!0,fieldType:i.INPUT,rules:["required"]},{key:"maxExchangeBonusesPerDay",label:"Max exchange bonuses per day",value:t.maxExchangeBonusesPerDay,min:1,max:100,width:48,hideClearButton:!0,fieldType:i.INPUT,rules:["required"]},{key:"periodStart",label:"Start date",width:25,value:E.formatDate(t.periodStart,"DD-MM-YYYY"),fieldType:i.DATETIME,rules:["required"]},{key:"periodEnd",label:"End date",width:25,value:E.formatDate(E.addToDate(t.periodEnd,{months:1}),"DD-MM-YYYY"),fieldType:i.DATETIME,rules:["required"]},{key:"isFirstIncluded",label:"First step included",value:t.isFirstIncluded,width:42.5,hideClearButton:!0,fieldType:i.CHECKBOX,rules:["required"]},{key:"locationIds",label:"Locations",fieldType:i.SELECT,multiple:!0,value:t.locationIds,options:v.value},{key:"categoryId",label:"Categories",fieldType:i.SELECT,value:t.categoryId,options:y.value},{key:"programId",value:t.id}],(r=N.value)==null||r.showDialog()},ee=t=>{const r=new FormData;t.forEach(e=>{if(e.value)if(e.key==="locationIds")for(let s=0;s<e.value.length;s++)r.append(`locationIds[${s}]`,e.value[s]);else Array.isArray(e.value)?r.append(e.key,e.value[1]):r.append(e.key,e.value)}),A(r).then(()=>{var e;(e=q.value)==null||e.hideDialog(),b(p.value)})},ae=t=>{const r=new FormData;t.forEach(e=>{if(e.value)if(e.key==="locationIds")for(let s=0;s<e.value.length;s++)r.append(`locationIds[${s}]`,e.value[s]);else Array.isArray(e.value)?r.append(e.key,e.value[1]):r.append(e.key,e.value)}),B(r).then(()=>{var e;(e=N.value)==null||e.hideDialog(),b(p.value)})};return re(()=>{var t;p.value=(t=W.currentRoute.value.params.locationId)==null?void 0:t.toString(),p.value!==""&&b(p.value)}),(t,r)=>(x(),C(de,{padding:""},{default:l(()=>[I("div",me,[a(ne,{flat:"",bordered:"",title:"Programs",rows:g(_),columns:$,"row-key":"id",filter:S.value,"visible-columns":w.value},{"header-cell-id":l(e=>[a(c,{props:e},{default:l(()=>[a(d,{name:"badge",size:"1.7em",color:"light-blue-14"}),o(" "+n(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-name":l(e=>[a(c,{props:e},{default:l(()=>[a(d,{name:"person",size:"1.5em",color:"light-blue-14"}),o(" "+n(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-steps":l(e=>[a(c,{props:e},{default:l(()=>[a(d,{name:"fitbit",size:"1.5em",color:"light-blue-14"}),o(" "+n(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-programType":l(e=>[a(c,{props:e},{default:l(()=>[a(d,{name:"fitbit",size:"1.5em",color:"light-blue-14"}),o(" "+n(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-limitCards":l(e=>[a(c,{props:e},{default:l(()=>[a(d,{name:"fitbit",size:"1.5em",color:"light-blue-14"}),o(" "+n(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-maxEarnBonusesPerDay":l(e=>[a(c,{props:e},{default:l(()=>[a(d,{name:"fitbit",size:"1.5em",color:"light-blue-14"}),o(" "+n(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-maxExchangeBonusesPerDay":l(e=>[a(c,{props:e},{default:l(()=>[a(d,{name:"fitbit",size:"1.5em",color:"light-blue-14"}),o(" "+n(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-maxEarnBonuses":l(e=>[a(c,{props:e},{default:l(()=>[a(d,{name:"fitbit",size:"1.5em",color:"light-blue-14"}),o(" "+n(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-isFirstIncluded":l(e=>[a(c,{props:e},{default:l(()=>[a(d,{name:"fitbit",size:"1.5em",color:"light-blue-14"}),o(" "+n(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-periodStart":l(e=>[a(c,{props:e},{default:l(()=>[a(d,{name:"event",size:"1.5em",color:"light-blue-14"}),o(" "+n(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-periodEnd":l(e=>[a(c,{props:e},{default:l(()=>[a(d,{name:"event",size:"1.5em",color:"light-blue-14"}),o(" "+n(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-createdAt":l(e=>[a(c,{props:e},{default:l(()=>[a(d,{name:"people",size:"1.5em",color:"light-blue-14"}),o(" "+n(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-status":l(e=>[a(c,{props:e},{default:l(()=>[a(d,{name:"account_circle",size:"1.5em",color:"light-blue-14"}),o(" "+n(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-actions":l(e=>[a(c,{props:e},{default:l(()=>[a(d,{name:"manage_accounts",size:"1.5em",color:"light-blue-14"}),o(" "+n(e.col.label),1)]),_:2},1032,["props"])]),"body-cell-status":l(e=>[a(L,{props:e},{default:l(()=>[e.value==g(u).Active?(x(),C(h,{key:0,size:"sm",style:{width:"93px"},color:"secondary",onClick:P(s=>M(e.row),["stop"])},{default:l(()=>[a(d,{center:"",name:"check"}),o(" "+n(g(u)[e.value]),1)]),_:2},1032,["onClick"])):Y("",!0),e.value==g(u).Inactive?(x(),C(h,{key:1,size:"sm",style:{width:"93px"},color:"deep-orange",onClick:P(s=>M(e.row),["stop"])},{default:l(()=>[a(d,{center:"",name:"close"}),o(" "+n(g(u)[e.value]),1)]),_:2},1032,["onClick"])):Y("",!0),e.value==g(u).Deleted?(x(),C(h,{key:2,style:{width:"93px"},size:"sm",color:"grey",disable:""},{default:l(()=>[a(d,{center:"",name:"delete"}),o(" "+n(g(u)[e.value]),1)]),_:2},1024)):Y("",!0)]),_:2},1032,["props"])]),"body-cell-isFirstIncluded":l(e=>[a(L,{props:e},{default:l(()=>[a(ie,{color:"primary","text-color":"white",square:"",outline:"",style:{width:"50px"}},{default:l(()=>[o(n(e.value?"YES":"NO"),1)]),_:2},1024)]),_:2},1032,["props"])]),"body-cell-actions":l(e=>[a(L,{props:e},{default:l(()=>[a(h,{class:"q-mr-sm",dense:"",flat:"",round:"",color:e.row.status==g(u).Deleted?"grey":"blue",icon:"edit",onClick:P(s=>Z(e.row),["stop"]),disable:e.row.status==g(u).Deleted},null,8,["color","onClick","disable"]),a(h,{class:"q-ml-sm",dense:"",flat:"",round:"",color:e.row.status==g(u).Deleted?"grey":"red",icon:"delete",onClick:P(s=>M(e.row,!0),["stop"]),disable:e.row.status==g(u).Deleted},null,8,["color","onClick","disable"])]),_:2},1032,["props"])]),top:l(e=>[I("div",fe,[I("div",null,[a(h,{label:"Add program",color:"primary",icon:"add_card",onClick:J})]),I("div",ge,[a(se,{modelValue:w.value,"onUpdate:modelValue":r[0]||(r[0]=s=>w.value=s),multiple:"",outlined:"",dense:"","options-dense":"","display-value":t.$q.lang.table.columns,"emit-value":"","map-options":"",options:$.slice(1),"option-value":"name","options-cover":"",style:{"min-width":"150px"},class:"q-mx-md"},null,8,["modelValue","display-value","options"]),a(oe,{dense:"",outlined:"",debounce:"300",modelValue:S.value,"onUpdate:modelValue":r[1]||(r[1]=s=>S.value=s),placeholder:"Search",class:"q-mx-md"},{append:l(()=>[a(d,{name:"search"})]),_:1},8,["modelValue"]),a(h,{flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen",onClick:e.toggleFullscreen,class:"q-mx-md"},null,8,["icon","onClick"])])])]),_:1},8,["rows","filter","visible-columns"])]),a(F,{ref_key:"dialogAddProgram",ref:q,icon:"add",header:"Add proogram",hideDialogButtons:""},{body:l(()=>[a(j,{fields:Q.value,onHandleSubmit:ee},null,8,["fields"])]),_:1},512),a(F,{ref_key:"dialogEditProgram",ref:N,icon:"edit",header:"Edit program",hideDialogButtons:""},{body:l(()=>[a(j,{fields:O.value,onHandleSubmit:ae},null,8,["fields"])]),_:1},512),a(F,{ref_key:"confirmationDialog",ref:T,icon:"build_circle","submit-title":"YES","cancel-title":"NO",width:"500"},{body:l(()=>[o(n(V.value),1)]),_:1},512)]),_:1}))}});export{Ee as default};
