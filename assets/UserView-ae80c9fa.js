import{R as b,ab as m,r as p,U as C,V as _,W as I,X as i,Y as u,ac as g,ad as V}from"./index-fb6b4c9f.js";import{Q as h}from"./QPage-a8b5e22d.js";import{a as k,b as D}from"./QLayout-db5120ea.js";let c;const B=new Uint8Array(16);function R(){if(!c&&(c=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!c))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return c(B)}const t=[];for(let e=0;e<256;++e)t.push((e+256).toString(16).slice(1));function Q(e,n=0){return(t[e[n+0]]+t[e[n+1]]+t[e[n+2]]+t[e[n+3]]+"-"+t[e[n+4]]+t[e[n+5]]+"-"+t[e[n+6]]+t[e[n+7]]+"-"+t[e[n+8]]+t[e[n+9]]+"-"+t[e[n+10]]+t[e[n+11]]+t[e[n+12]]+t[e[n+13]]+t[e[n+14]]+t[e[n+15]]).toLowerCase()}const S=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),y={randomUUID:S};function A(e,n,r){if(y.randomUUID&&!n&&!e)return y.randomUUID();e=e||{};const o=e.random||(e.rng||R)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,n){r=r||0;for(let a=0;a<16;++a)n[r+a]=o[a];return n}return Q(o)}const O=b({__name:"UserView",setup(e){const{isLoading:n,get:r}=m(),o=p(""),a=p(null),w=()=>{var l;a.value!==null&&((l=a.value)==null||l.showDialog())},v=()=>{r("v1/plan/all").then(l=>console.log(l))},U=l=>{console.log(A()),m().post("/v1/owner/new",{ownerName:l,externalOwnerId:"223E4567-E89B-12D3-A456-426655480000"})};return(l,d)=>{const x=C("BaseInput");return _(),I(k,null,{default:i(()=>[u(D,null,{default:i(()=>[u(h,{padding:""},{default:i(()=>[u(g,{color:"white","text-color":"black",label:"Add new user",onClick:w}),u(g,{color:"white","text-color":"black",label:"Get summary",onClick:v}),u(V,{ref_key:"dialogInstance",ref:a,header:"Add new owner","submit-title":"Create","cancel-title":"Cancel",onHandleHideDialog:d[1]||(d[1]=s=>o.value=""),onSubmit:d[2]||(d[2]=s=>U(o.value))},{body:i(()=>[u(x,{modelValue:o.value,"onUpdate:modelValue":d[0]||(d[0]=s=>o.value=s),label:"Owner name"},null,8,["modelValue"])]),_:1},512)]),_:1})]),_:1})]),_:1})}}});export{O as default};
