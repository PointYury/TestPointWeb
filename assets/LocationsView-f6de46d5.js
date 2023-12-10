import{r as v,ab as A,R as se,S as ie,M as ne,V as D,W as P,X as t,ao as u,Y as a,a8 as de,Z as ce,a4 as c,a5 as i,a6 as r,$ as p,ac as f,as as N,a9 as q,aq as E,at as re,au as ue,ar as Z,ad as Y,av as n}from"./index-187fa26a.js";import{a as g,Q as me}from"./QTable-741cb8ea.js";import{Q as x}from"./QTd-f9936bc4.js";import{Q as ve}from"./QPage-50779b14.js";import"./QList-ede4acdb.js";const J=v(),pe=()=>{const j=m=>{A().get(`v1/location/${m}/all`).then(T=>{J.value=T.data})},z=m=>A().get(`v1/location/${m}/details`),k=m=>A().put("/v1/location",m),O=m=>A().post("/v1/location",m),U=m=>A().put("/v1/location/change-status",m);return{locations:J.value,getLocations:j,getLocationDetails:z,editLocation:k,addLocation:O,changeStatus:U}},fe=E("div",{class:"row q-mb-md"},[E("h5",null,"LOCATIONS")],-1),ge={key:0,class:"q-mt-md"},ye={class:"full-width row wrap justify-between"},be={class:"row"},Ae=se({__name:"LocationsView",setup(j){const{locations:z,getLocations:k,addLocation:O,editLocation:U,changeStatus:m}=pe(),T=v(""),$=ie(),F=v(z),h=v(""),H=v(""),V=v(null),L=v(null),C=v(null);let d;const B=v(["address","description","phone","createdAt","status","employees","programs","actions"]),G=[{name:"id",label:"ID",field:"id",align:"center"},{name:"address",label:"ADDRESS",field:"address",align:"center"},{name:"description",label:"DESCRIPTION",field:"description",align:"center"},{name:"phone",label:"PHONE",field:"phone",align:"center"},{name:"createdAt",label:"CREATED",field:"createdAt",align:"center"},{name:"employees",label:"EMPLOYEES",field:"employees",align:"center"},{name:"programs",label:"PROGRAMS",field:"programs",align:"center"},{name:"status",label:"STATUS",field:"status",align:"center"},{name:"actions",label:"ACTIONS",field:"actions",align:"center"}],W=v([{fieldType:u.LOCATION},{key:"locationId"},{key:"description",label:"Description",value:"",fieldType:u.INPUT,rules:["required"]},{key:"address",label:"Address",value:"",fieldType:u.INPUT,rules:["required"]},{key:"longitude",label:"Longitude",value:"",fieldType:u.INPUT,rules:["required"]},{key:"latitude",label:"Latitude",value:"",fieldType:u.INPUT,rules:["required"]},{key:"phone",label:"Phone",value:"",prefix:"+375",fieldType:u.INPUT,type:"tel",rules:["required","tel"]}]),Q=v([]),M=(l,o=!1)=>{var e;if(C.value){let s,y;o?(s="DELETE",y=n.Deleted):(s=l.status==n.Active?"DEACTIVATE":"ACTIVATE",y=l.status==n.Active?n.Inactive:n.Active),H.value=`You are going to ${s} location ${l.address.toUpperCase()}. Are you sure?`,C.value.customHeader="change status",C.value.changeStatus=()=>{m({id:l.id,status:y}).then(()=>{var b;(b=C.value)==null||b.hideDialog(),k(h.value)})}}(e=C.value)==null||e.showDialog()},K=()=>{var o;(o=V.value)==null||o.showDialog();var l=setInterval(()=>{document.getElementById("locationMap")&&(X(),clearInterval(l))},1)},ee=l=>{var e;Q.value=[{fieldType:u.LOCATION},{key:"locationId",value:l.id},{key:"description",label:"Description",value:l.description,fieldType:u.INPUT,rules:["required"]},{key:"address",label:"Address",value:l.address,fieldType:u.INPUT,rules:["required"]},{key:"longitude",label:"Longitude",value:l.longitude,fieldType:u.INPUT,rules:["required"]},{key:"latitude",label:"Latitude",value:l.latitude,fieldType:u.INPUT,rules:["required"]},{key:"phone",label:"Phone",value:l.phone,prefix:"+375",fieldType:u.INPUT,type:"tel",rules:["required","tel"]}],(e=L.value)==null||e.showDialog();var o=setInterval(()=>{document.getElementById("locationMap")&&(X(l),clearInterval(o))},1)},le=l=>{const o={};l.forEach(e=>{o[e.key]=e.value}),o.businessId=h.value,O(o).then(()=>{var e;(e=V.value)==null||e.hideDialog(),k(h.value)})},ae=l=>{const o={};l.forEach(e=>{o[e.key]=e.value}),U(o).then(()=>{var e;(e=L.value)==null||e.hideDialog(),k(h.value)})},te=l=>{l&&$.push({path:`/${l}/employees`})},oe=l=>{l&&$.push({path:`/${l}/programs`})};ne(()=>{var l;h.value=(l=$.currentRoute.value.params.businessId)==null?void 0:l.toString(),h.value!==""&&k(h.value)});let R;function X(l=void 0){const o=l!=null&&l.address?[l.longitude,l.latitude]:[53.902284,27.561831],e=new R.Map("locationMap",{center:o,zoom:l!=null&&l.address?18:10},{searchControlProvider:"yandex#search"});d=s(o),e.geoObjects.add(d),d.events.add("dragend",function(){y(d.geometry.getCoordinates())}),l!=null&&l.address?d.properties.set({iconCaption:l.address,balloonContent:l.address}):y(o),e.events.add("click",function(b){let I=b.get("coords");d?d.geometry.setCoordinates(I):(d=s(I),e.geoObjects.add(d),d.events.add("dragend",function(){y(d.geometry.getCoordinates())})),y(I)});function s(b){return new R.Placemark(b,{iconCaption:"поиск..."},{preset:"islands#violetDotIconWithCaption",draggable:!0})}function y(b){d.properties.set("iconCaption","поиск..."),R.geocode(b).then(function(I){var w=I.geoObjects.get(0);let S;const _=l?Q:W;w.properties._data.metaDataProperty.GeocoderMetaData.Address.country_code==="BY"?(_.value[3].value=w.getAddressLine(),_.value[4].value=w.geometry.getCoordinates()[0],_.value[5].value=w.geometry.getCoordinates()[1],S=_.value[2].value):(S="Use only BY locations",_.value[3].value="",_.value[4].value="",_.value[5].value=""),d.properties.set({iconCaption:S,balloonContent:S})})}}return(l,o)=>(D(),P(ve,{padding:""},{default:t(()=>[fe,a(de,{color:"primary",spaced:"",size:"2px"}),F.value?(D(),ce("div",ge,[a(me,{flat:"",bordered:"",title:"Locations",rows:F.value,columns:G,"row-key":"id",filter:T.value,"visible-columns":B.value},{"header-cell-id":t(e=>[a(g,{props:e},{default:t(()=>[a(c,{name:"badge",size:"1.7em",color:"light-blue-14"}),i(" "+r(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-address":t(e=>[a(g,{props:e},{default:t(()=>[a(c,{name:"home",size:"1.5em",color:"light-blue-14"}),i(" "+r(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-description":t(e=>[a(g,{props:e},{default:t(()=>[a(c,{name:"description",size:"1.5em",color:"light-blue-14"}),i(" "+r(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-phone":t(e=>[a(g,{props:e},{default:t(()=>[a(c,{name:"phone",size:"1.5em",color:"light-blue-14"}),i(" "+r(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-createdAt":t(e=>[a(g,{props:e},{default:t(()=>[a(c,{name:"event",size:"1.5em",color:"light-blue-14"}),i(" "+r(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-status":t(e=>[a(g,{props:e},{default:t(()=>[a(c,{name:"account_circle",size:"1.5em",color:"light-blue-14"}),i(" "+r(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-employees":t(e=>[a(g,{props:e},{default:t(()=>[a(c,{name:"groups",size:"1.5em",color:"light-blue-14"}),i(" "+r(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-programs":t(e=>[a(g,{props:e},{default:t(()=>[a(c,{name:"loyalty",size:"1.5em",color:"light-blue-14"}),i(" "+r(e.col.label),1)]),_:2},1032,["props"])]),"header-cell-actions":t(e=>[a(g,{props:e},{default:t(()=>[a(c,{name:"manage_accounts",size:"1.5em",color:"light-blue-14"}),i(" "+r(e.col.label),1)]),_:2},1032,["props"])]),"body-cell-status":t(e=>[a(x,{props:e},{default:t(()=>[e.value==p(n).Active?(D(),P(f,{key:0,size:"sm",style:{width:"93px"},color:"secondary",onClick:N(s=>M(e.row),["stop"])},{default:t(()=>[a(c,{center:"",name:"check"}),i(" "+r(p(n)[e.value]),1)]),_:2},1032,["onClick"])):q("",!0),e.value==p(n).Inactive?(D(),P(f,{key:1,size:"sm",style:{width:"93px"},color:"deep-orange",onClick:N(s=>M(e.row),["stop"])},{default:t(()=>[a(c,{center:"",name:"close"}),i(" "+r(p(n)[e.value]),1)]),_:2},1032,["onClick"])):q("",!0),e.value==p(n).Deleted?(D(),P(f,{key:2,style:{width:"93px"},size:"sm",color:"grey",disable:""},{default:t(()=>[a(c,{center:"",name:"delete"}),i(" "+r(p(n)[e.value]),1)]),_:2},1024)):q("",!0)]),_:2},1032,["props"])]),"body-cell-employees":t(e=>[a(x,{props:e},{default:t(()=>[a(f,{size:"sm",color:"teal",onClick:s=>te(e.row.id)},{default:t(()=>[i(" Show ")]),_:2},1032,["onClick"])]),_:2},1032,["props"])]),"body-cell-programs":t(e=>[a(x,{props:e},{default:t(()=>[a(f,{size:"sm",color:"teal",onClick:s=>oe(e.row.id)},{default:t(()=>[i(" Show ")]),_:2},1032,["onClick"])]),_:2},1032,["props"])]),"body-cell-actions":t(e=>[a(x,{props:e},{default:t(()=>[a(f,{class:"q-mr-sm",dense:"",flat:"",round:"",color:e.row.status==p(n).Deleted?"grey":"blue",icon:"edit",onClick:N(s=>ee(e.row),["stop"]),disable:e.row.status==p(n).Deleted},null,8,["color","onClick","disable"]),a(f,{class:"q-ml-sm",dense:"",flat:"",round:"",color:e.row.status==p(n).Deleted?"grey":"red",icon:"delete",onClick:N(s=>M(e.row,!0),["stop"]),disable:e.row.status==p(n).Deleted},null,8,["color","onClick","disable"])]),_:2},1032,["props"])]),top:t(e=>[E("div",ye,[E("div",null,[a(f,{label:"Add location",icon:"domain",color:"primary",onClick:K})]),E("div",be,[a(re,{modelValue:B.value,"onUpdate:modelValue":o[0]||(o[0]=s=>B.value=s),multiple:"",outlined:"",dense:"","options-dense":"","display-value":l.$q.lang.table.columns,"emit-value":"","map-options":"",options:G,"option-value":"name","options-cover":"",style:{"min-width":"150px"},class:"q-mx-md"},null,8,["modelValue","display-value"]),a(ue,{dense:"",outlined:"",debounce:"300",modelValue:T.value,"onUpdate:modelValue":o[1]||(o[1]=s=>T.value=s),placeholder:"Search",class:"q-mx-md"},{append:t(()=>[a(c,{name:"search"})]),_:1},8,["modelValue"]),a(f,{flat:"",round:"",dense:"",icon:e.inFullscreen?"fullscreen_exit":"fullscreen",onClick:e.toggleFullscreen,class:"q-mx-md"},null,8,["icon","onClick"])])])]),_:1},8,["rows","filter","visible-columns"])])):q("",!0),a(Y,{ref_key:"dialogAddLocation",ref:V,icon:"add",header:"Add location",hideDialogButtons:""},{body:t(()=>[a(Z,{fields:W.value,onHandleSubmit:le},null,8,["fields"])]),_:1},512),a(Y,{ref_key:"dialogEditLocation",ref:L,icon:"edit",header:"Edit location",hideDialogButtons:""},{body:t(()=>[a(Z,{fields:Q.value,onHandleSubmit:ae},null,8,["fields"])]),_:1},512),a(Y,{ref_key:"confirmationDialog",ref:C,icon:"build_circle","submit-title":"YES","cancel-title":"NO",width:"500"},{body:t(()=>[i(r(H.value),1)]),_:1},512)]),_:1}))}});export{Ae as default};
