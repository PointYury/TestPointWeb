import{c as Ge,a as Y,n as Je,l as Ze,b as te,p as ce,d as ze,s as ve,e as ye,f as de,g as et,h as tt,i as Le,u as $e,r as z,j as xe,k as He,m as v,o as x,q as at,w as C,t as fe,v as lt,x as rt,y as Se,z as Qe,A as k,B as ot,Q as we,C as le,D as it,E as nt,F as ut,G as st,H as he,I as ct,J as vt,K as dt,L as Ce,M as ft,N as _e,O as ht,P as mt,R as bt,S as yt,T as pt,U as qe,V,W as ae,X as L,Y as $,Z as ke,_ as gt,$ as zt,a0 as Me,a1 as St,a2 as wt,a3 as Be,a4 as Ct,a5 as _t,a6 as qt,a7 as kt,a8 as Mt,a9 as Bt}from"./index-fb6b4c9f.js";import{Q as Tt}from"./QList-cc96bfb4.js";import{Q as Ot,a as Pt,b as Dt}from"./QLayout-db5120ea.js";const pe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},At=Object.keys(pe);pe.all=!0;function Te(t){const n={};for(const c of At)t[c]===!0&&(n[c]=!0);return Object.keys(n).length===0?pe:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}const Et=["INPUT","TEXTAREA"];function Oe(t,n){return n.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof n.handler=="function"&&Et.includes(t.target.nodeName.toUpperCase())===!1&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(n.uid)===-1)}function me(t,n,c){const g=ye(t);let e,r=g.left-n.event.x,u=g.top-n.event.y,a=Math.abs(r),h=Math.abs(u);const f=n.direction;f.horizontal===!0&&f.vertical!==!0?e=r<0?"left":"right":f.horizontal!==!0&&f.vertical===!0?e=u<0?"up":"down":f.up===!0&&u<0?(e="up",a>h&&(f.left===!0&&r<0?e="left":f.right===!0&&r>0&&(e="right"))):f.down===!0&&u>0?(e="down",a>h&&(f.left===!0&&r<0?e="left":f.right===!0&&r>0&&(e="right"))):f.left===!0&&r<0?(e="left",a<h&&(f.up===!0&&u<0?e="up":f.down===!0&&u>0&&(e="down"))):f.right===!0&&r>0&&(e="right",a<h&&(f.up===!0&&u<0?e="up":f.down===!0&&u>0&&(e="down")));let o=!1;if(e===void 0&&c===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};e=n.event.lastDir,o=!0,e==="left"||e==="right"?(g.left-=r,a=0,r=0):(g.top-=u,h=0,u=0)}return{synthetic:o,payload:{evt:t,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:g,direction:e,isFirst:n.event.isFirst,isFinal:c===!0,duration:Date.now()-n.event.time,distance:{x:a,y:h},offset:{x:r,y:u},delta:{x:g.left-n.event.lastX,y:g.top-n.event.lastY}}}}let Lt=0;const U=Ge({name:"touch-pan",beforeMount(t,{value:n,modifiers:c}){if(c.mouse!==!0&&Y.has.touch!==!0)return;function g(r,u){c.mouse===!0&&u===!0?et(r):(c.stop===!0&&ve(r),c.prevent===!0&&ze(r))}const e={uid:"qvtp_"+Lt++,handler:n,modifiers:c,direction:Te(c),noop:Je,mouseStart(r){Oe(r,e)&&Ze(r)&&(te(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(r,!0))},touchStart(r){if(Oe(r,e)){const u=r.target;te(e,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),e.start(r)}},start(r,u){if(Y.is.firefox===!0&&ce(t,!0),e.lastEvt=r,u===!0||c.stop===!0){if(e.direction.all!==!0&&(u!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const f=r.type.indexOf("mouse")>-1?new MouseEvent(r.type,r):new TouchEvent(r.type,r);r.defaultPrevented===!0&&ze(f),r.cancelBubble===!0&&ve(f),Object.assign(f,{qKeyEvent:r.qKeyEvent,qClickOutside:r.qClickOutside,qAnchorHandled:r.qAnchorHandled,qClonedBy:r.qClonedBy===void 0?[e.uid]:r.qClonedBy.concat(e.uid)}),e.initialEvent={target:r.target,event:f}}ve(r)}const{left:a,top:h}=ye(r);e.event={x:a,y:h,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:a,lastY:h}},move(r){if(e.event===void 0)return;const u=ye(r),a=u.left-e.event.x,h=u.top-e.event.y;if(a===0&&h===0)return;e.lastEvt=r;const f=e.event.mouse===!0,o=()=>{g(r,f);let w;c.preserveCursor!==!0&&c.preservecursor!==!0&&(w=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),f===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),tt(),e.styleCleanup=b=>{if(e.styleCleanup=void 0,w!==void 0&&(document.documentElement.style.cursor=w),document.body.classList.remove("non-selectable"),f===!0){const P=()=>{document.body.classList.remove("no-pointer-events--children")};b!==void 0?setTimeout(()=>{P(),b()},50):P()}else b!==void 0&&b()}};if(e.event.detected===!0){e.event.isFirst!==!0&&g(r,e.event.mouse);const{payload:w,synthetic:b}=me(r,e,!1);w!==void 0&&(e.handler(w)===!1?e.end(r):(e.styleCleanup===void 0&&e.event.isFirst===!0&&o(),e.event.lastX=w.position.left,e.event.lastY=w.position.top,e.event.lastDir=b===!0?void 0:w.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||f===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){o(),e.event.detected=!0,e.move(r);return}const S=Math.abs(a),y=Math.abs(h);S!==y&&(e.direction.horizontal===!0&&S>y||e.direction.vertical===!0&&S<y||e.direction.up===!0&&S<y&&h<0||e.direction.down===!0&&S<y&&h>0||e.direction.left===!0&&S>y&&a<0||e.direction.right===!0&&S>y&&a>0?(e.event.detected=!0,e.move(r)):e.end(r,!0))},end(r,u){if(e.event!==void 0){if(de(e,"temp"),Y.is.firefox===!0&&ce(t,!1),u===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(me(r===void 0?e.lastEvt:r,e).payload);const{payload:a}=me(r===void 0?e.lastEvt:r,e,!0),h=()=>{e.handler(a)};e.styleCleanup!==void 0?e.styleCleanup(h):h()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(t.__qtouchpan=e,c.mouse===!0){const r=c.mouseCapture===!0||c.mousecapture===!0?"Capture":"";te(e,"main",[[t,"mousedown","mouseStart",`passive${r}`]])}Y.has.touch===!0&&te(e,"main",[[t,"touchstart","touchStart",`passive${c.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,n){const c=t.__qtouchpan;c!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&c.end(),c.handler=n.value),c.direction=Te(n.modifiers))},beforeUnmount(t){const n=t.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),de(n,"main"),de(n,"temp"),Y.is.firefox===!0&&ce(t,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete t.__qtouchpan)}}),Pe=["vertical","horizontal"],be={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},De={prevent:!0,mouse:!0,mouseAllDir:!0},Ae=t=>t>=250?50:Math.ceil(t/5),$t=Le({name:"QScrollArea",props:{...$e,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(t,{slots:n,emit:c}){const g=z(!1),e=z(!1),r=z(!1),u={vertical:z(0),horizontal:z(0)},a={vertical:{ref:z(null),position:z(0),size:z(0)},horizontal:{ref:z(null),position:z(0),size:z(0)}},{proxy:h}=xe(),f=He(t,h.$q);let o=null,S;const y=z(null),w=v(()=>"q-scrollarea"+(f.value===!0?" q-scrollarea--dark":""));a.vertical.percentage=v(()=>{const i=a.vertical.size.value-u.vertical.value;if(i<=0)return 0;const s=x(a.vertical.position.value/i,0,1);return Math.round(s*1e4)/1e4}),a.vertical.thumbHidden=v(()=>(t.visible===null?r.value:t.visible)!==!0&&g.value===!1&&e.value===!1||a.vertical.size.value<=u.vertical.value+1),a.vertical.thumbStart=v(()=>a.vertical.percentage.value*(u.vertical.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=v(()=>Math.round(x(u.vertical.value*u.vertical.value/a.vertical.size.value,Ae(u.vertical.value),u.vertical.value))),a.vertical.style=v(()=>({...t.thumbStyle,...t.verticalThumbStyle,top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`})),a.vertical.thumbClass=v(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=v(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=v(()=>{const i=a.horizontal.size.value-u.horizontal.value;if(i<=0)return 0;const s=x(Math.abs(a.horizontal.position.value)/i,0,1);return Math.round(s*1e4)/1e4}),a.horizontal.thumbHidden=v(()=>(t.visible===null?r.value:t.visible)!==!0&&g.value===!1&&e.value===!1||a.horizontal.size.value<=u.horizontal.value+1),a.horizontal.thumbStart=v(()=>a.horizontal.percentage.value*(u.horizontal.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=v(()=>Math.round(x(u.horizontal.value*u.horizontal.value/a.horizontal.size.value,Ae(u.horizontal.value),u.horizontal.value))),a.horizontal.style=v(()=>({...t.thumbStyle,...t.horizontalThumbStyle,[h.$q.lang.rtl===!0?"right":"left"]:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`})),a.horizontal.thumbClass=v(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=v(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const b=v(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?t.contentStyle:t.contentActiveStyle),P=[[U,i=>{G(i,"vertical")},void 0,{vertical:!0,...De}]],_=[[U,i=>{G(i,"horizontal")},void 0,{horizontal:!0,...De}]];function p(){const i={};return Pe.forEach(s=>{const m=a[s];i[s+"Position"]=m.position.value,i[s+"Percentage"]=m.percentage.value,i[s+"Size"]=m.size.value,i[s+"ContainerSize"]=u[s].value}),i}const j=at(()=>{const i=p();i.ref=h,c("scroll",i)},0);function W(i,s,m){if(Pe.includes(i)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(i==="vertical"?Se:fe)(y.value,s,m)}function K({height:i,width:s}){let m=!1;u.vertical.value!==i&&(u.vertical.value=i,m=!0),u.horizontal.value!==s&&(u.horizontal.value=s,m=!0),m===!0&&O()}function N({position:i}){let s=!1;a.vertical.position.value!==i.top&&(a.vertical.position.value=i.top,s=!0),a.horizontal.position.value!==i.left&&(a.horizontal.position.value=i.left,s=!0),s===!0&&O()}function H({height:i,width:s}){a.horizontal.size.value!==s&&(a.horizontal.size.value=s,O()),a.vertical.size.value!==i&&(a.vertical.size.value=i,O())}function G(i,s){const m=a[s];if(i.isFirst===!0){if(m.thumbHidden.value===!0)return;S=m.position.value,e.value=!0}else if(e.value!==!0)return;i.isFinal===!0&&(e.value=!1);const M=be[s],R=u[s].value,re=(m.size.value-R)/(R-m.thumbSize.value),oe=i.distance[M.dist],Z=S+(i.direction===M.dir?1:-1)*oe*re;X(Z,s)}function J(i,s){const m=a[s];if(m.thumbHidden.value!==!0){const M=i[be[s].offset];if(M<m.thumbStart.value||M>m.thumbStart.value+m.thumbSize.value){const R=M-m.thumbSize.value/2;X(R/u[s].value*m.size.value,s)}m.ref.value!==null&&m.ref.value.dispatchEvent(new MouseEvent(i.type,i))}}function F(i){J(i,"vertical")}function T(i){J(i,"horizontal")}function O(){g.value=!0,o!==null&&clearTimeout(o),o=setTimeout(()=>{o=null,g.value=!1},t.delay),t.onScroll!==void 0&&j()}function X(i,s){y.value[be[s].scroll]=i}function D(){r.value=!0}function I(){r.value=!1}let Q=null;return C(()=>h.$q.lang.rtl,i=>{y.value!==null&&fe(y.value,Math.abs(a.horizontal.position.value)*(i===!0?-1:1))}),lt(()=>{Q={top:a.vertical.position.value,left:a.horizontal.position.value}}),rt(()=>{if(Q===null)return;const i=y.value;i!==null&&(fe(i,Q.left),Se(i,Q.top))}),Qe(j.cancel),Object.assign(h,{getScrollTarget:()=>y.value,getScroll:p,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:W,setScrollPercentage(i,s,m){W(i,s*(a[i].size.value-u[i].value)*(i==="horizontal"&&h.$q.lang.rtl===!0?-1:1),m)}}),()=>k("div",{class:w.value,onMouseenter:D,onMouseleave:I},[k("div",{ref:y,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:t.tabindex!==void 0?t.tabindex:void 0},[k("div",{class:"q-scrollarea__content absolute",style:b.value},ot(n.default,[k(we,{debounce:0,onResize:H})])),k(Ot,{axis:"both",onScroll:N})]),k(we,{debounce:0,onResize:K}),k("div",{class:a.vertical.barClass.value,style:[t.barStyle,t.verticalBarStyle],"aria-hidden":"true",onMousedown:F}),k("div",{class:a.horizontal.barClass.value,style:[t.barStyle,t.horizontalBarStyle],"aria-hidden":"true",onMousedown:T}),le(k("div",{ref:a.vertical.ref,class:a.vertical.thumbClass.value,style:a.vertical.style.value,"aria-hidden":"true"}),P),le(k("div",{ref:a.horizontal.ref,class:a.horizontal.thumbClass.value,style:a.horizontal.style.value,"aria-hidden":"true"}),_)])}}),Ee=150,xt=Le({name:"QDrawer",inheritAttrs:!1,props:{...it,...$e,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...nt,"onLayout","miniState"],setup(t,{slots:n,emit:c,attrs:g}){const e=xe(),{proxy:{$q:r}}=e,u=He(t,r),{preventBodyScroll:a}=mt(),{registerTimeout:h,removeTimeout:f}=ut(),o=st(ct,he);if(o===he)return console.error("QDrawer needs to be child of QLayout"),he;let S,y=null,w;const b=z(t.behavior==="mobile"||t.behavior!=="desktop"&&o.totalWidth.value<=t.breakpoint),P=v(()=>t.mini===!0&&b.value!==!0),_=v(()=>P.value===!0?t.miniWidth:t.width),p=z(t.showIfAbove===!0&&b.value===!1?!0:t.modelValue===!0),j=v(()=>t.persistent!==!0&&(b.value===!0||R.value===!0));function W(l,d){if(G(),l!==!1&&o.animate(),B(0),b.value===!0){const q=o.instances[i.value];q!==void 0&&q.belowBreakpoint===!0&&q.hide(!1),A(1),o.isContainer.value!==!0&&a(!0)}else A(0),l!==!1&&ne(!1);h(()=>{l!==!1&&ne(!0),d!==!0&&c("show",l)},Ee)}function K(l,d){J(),l!==!1&&o.animate(),A(0),B(O.value*_.value),ue(),d!==!0?h(()=>{c("hide",l)},Ee):f()}const{show:N,hide:H}=vt({showing:p,hideOnRouteChange:j,handleShow:W,handleHide:K}),{addToHistory:G,removeFromHistory:J}=dt(p,H,j),F={belowBreakpoint:b,hide:H},T=v(()=>t.side==="right"),O=v(()=>(r.lang.rtl===!0?-1:1)*(T.value===!0?1:-1)),X=z(0),D=z(!1),I=z(!1),Q=z(_.value*O.value),i=v(()=>T.value===!0?"left":"right"),s=v(()=>p.value===!0&&b.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:_.value:0),m=v(()=>t.overlay===!0||t.miniToOverlay===!0||o.view.value.indexOf(T.value?"R":"L")>-1||r.platform.is.ios===!0&&o.isContainer.value===!0),M=v(()=>t.overlay===!1&&p.value===!0&&b.value===!1),R=v(()=>t.overlay===!0&&p.value===!0&&b.value===!1),re=v(()=>"fullscreen q-drawer__backdrop"+(p.value===!1&&D.value===!1?" hidden":"")),oe=v(()=>({backgroundColor:`rgba(0,0,0,${X.value*.4})`})),Z=v(()=>T.value===!0?o.rows.value.top[2]==="r":o.rows.value.top[0]==="l"),Fe=v(()=>T.value===!0?o.rows.value.bottom[2]==="r":o.rows.value.bottom[0]==="l"),Re=v(()=>{const l={};return o.header.space===!0&&Z.value===!1&&(m.value===!0?l.top=`${o.header.offset}px`:o.header.space===!0&&(l.top=`${o.header.size}px`)),o.footer.space===!0&&Fe.value===!1&&(m.value===!0?l.bottom=`${o.footer.offset}px`:o.footer.space===!0&&(l.bottom=`${o.footer.size}px`)),l}),Ve=v(()=>{const l={width:`${_.value}px`,transform:`translateX(${Q.value}px)`};return b.value===!0?l:Object.assign(l,Re.value)}),je=v(()=>"q-drawer__content fit "+(o.isContainer.value!==!0?"scroll":"overflow-auto")),We=v(()=>`q-drawer q-drawer--${t.side}`+(I.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(D.value===!0?" no-transition":p.value===!0?"":" q-layout--prevent-focus")+(b.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${P.value===!0?"mini":"standard"}`+(m.value===!0||M.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(Z.value===!0?" q-drawer--top-padding":""))),Ne=v(()=>{const l=r.lang.rtl===!0?t.side:i.value;return[[U,Ue,void 0,{[l]:!0,mouse:!0}]]}),Xe=v(()=>{const l=r.lang.rtl===!0?i.value:t.side;return[[U,ge,void 0,{[l]:!0,mouse:!0}]]}),Ie=v(()=>{const l=r.lang.rtl===!0?i.value:t.side;return[[U,ge,void 0,{[l]:!0,mouse:!0,mouseAllDir:!0}]]});function ie(){Ke(b,t.behavior==="mobile"||t.behavior!=="desktop"&&o.totalWidth.value<=t.breakpoint)}C(b,l=>{l===!0?(S=p.value,p.value===!0&&H(!1)):t.overlay===!1&&t.behavior!=="mobile"&&S!==!1&&(p.value===!0?(B(0),A(0),ue()):N(!1))}),C(()=>t.side,(l,d)=>{o.instances[d]===F&&(o.instances[d]=void 0,o[d].space=!1,o[d].offset=0),o.instances[l]=F,o[l].size=_.value,o[l].space=M.value,o[l].offset=s.value}),C(o.totalWidth,()=>{(o.isContainer.value===!0||document.qScrollPrevented!==!0)&&ie()}),C(()=>t.behavior+t.breakpoint,ie),C(o.isContainer,l=>{p.value===!0&&a(l!==!0),l===!0&&ie()}),C(o.scrollbarWidth,()=>{B(p.value===!0?0:void 0)}),C(s,l=>{E("offset",l)}),C(M,l=>{c("onLayout",l),E("space",l)}),C(T,()=>{B()}),C(_,l=>{B(),se(t.miniToOverlay,l)}),C(()=>t.miniToOverlay,l=>{se(l,_.value)}),C(()=>r.lang.rtl,()=>{B()}),C(()=>t.mini,()=>{t.noMiniAnimation||t.modelValue===!0&&(Ye(),o.animate())}),C(P,l=>{c("miniState",l)});function B(l){l===void 0?Ce(()=>{l=p.value===!0?0:_.value,B(O.value*l)}):(o.isContainer.value===!0&&T.value===!0&&(b.value===!0||Math.abs(l)===_.value)&&(l+=O.value*o.scrollbarWidth.value),Q.value=l)}function A(l){X.value=l}function ne(l){const d=l===!0?"remove":o.isContainer.value!==!0?"add":"";d!==""&&document.body.classList[d]("q-body--drawer-toggle")}function Ye(){y!==null&&clearTimeout(y),e.proxy&&e.proxy.$el&&e.proxy.$el.classList.add("q-drawer--mini-animate"),I.value=!0,y=setTimeout(()=>{y=null,I.value=!1,e&&e.proxy&&e.proxy.$el&&e.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ue(l){if(p.value!==!1)return;const d=_.value,q=x(l.distance.x,0,d);if(l.isFinal===!0){q>=Math.min(75,d)===!0?N():(o.animate(),A(0),B(O.value*d)),D.value=!1;return}B((r.lang.rtl===!0?T.value!==!0:T.value)?Math.max(d-q,0):Math.min(0,q-d)),A(x(q/d,0,1)),l.isFirst===!0&&(D.value=!0)}function ge(l){if(p.value!==!0)return;const d=_.value,q=l.direction===t.side,ee=(r.lang.rtl===!0?q!==!0:q)?x(l.distance.x,0,d):0;if(l.isFinal===!0){Math.abs(ee)<Math.min(75,d)===!0?(o.animate(),A(1),B(0)):H(),D.value=!1;return}B(O.value*ee),A(x(1-ee/d,0,1)),l.isFirst===!0&&(D.value=!0)}function ue(){a(!1),ne(!0)}function E(l,d){o.update(t.side,l,d)}function Ke(l,d){l.value!==d&&(l.value=d)}function se(l,d){E("size",l===!0?t.miniWidth:d)}return o.instances[t.side]=F,se(t.miniToOverlay,_.value),E("space",M.value),E("offset",s.value),t.showIfAbove===!0&&t.modelValue!==!0&&p.value===!0&&t["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!0),ft(()=>{c("onLayout",M.value),c("miniState",P.value),S=t.showIfAbove===!0;const l=()=>{(p.value===!0?W:K)(!1,!0)};if(o.totalWidth.value!==0){Ce(l);return}w=C(o.totalWidth,()=>{w(),w=void 0,p.value===!1&&t.showIfAbove===!0&&b.value===!1?N(!1):l()})}),Qe(()=>{w!==void 0&&w(),y!==null&&(clearTimeout(y),y=null),p.value===!0&&ue(),o.instances[t.side]===F&&(o.instances[t.side]=void 0,E("size",0),E("offset",0),E("space",!1))}),()=>{const l=[];b.value===!0&&(t.noSwipeOpen===!1&&l.push(le(k("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),Ne.value)),l.push(_e("div",{ref:"backdrop",class:re.value,style:oe.value,"aria-hidden":"true",onClick:H},void 0,"backdrop",t.noSwipeBackdrop!==!0&&p.value===!0,()=>Ie.value)));const d=P.value===!0&&n.mini!==void 0,q=[k("div",{...g,key:""+d,class:[je.value,g.class]},d===!0?n.mini():ht(n.default))];return t.elevated===!0&&p.value===!0&&q.push(k("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(_e("aside",{ref:"content",class:We.value,style:Ve.value},q,"contentclose",t.noSwipeClose!==!0&&b.value===!0,()=>Xe.value)),k("div",{class:"q-drawer-container"},l)}}}),Vt=bt({__name:"BaseLayout",setup(t){const n=yt(),c=z(!1);pt("toggleLeftDrawer",{toggleLeftDrawer:()=>{c.value=!c.value}});const e=v(()=>n.currentRoute.value.name),r=u=>{u!==e.value&&n.replace({name:u})};return(u,a)=>{const h=qe("BaseHeader"),f=qe("router-view");return V(),ae(Pt,{view:"hHh lpR fff"},{default:L(()=>[$(h),$(xt,{"show-if-above":"",modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=o=>c.value=o),side:"left",elevated:""},{default:L(()=>[$($t,{class:"fit"},{default:L(()=>[$(Tt,null,{default:L(()=>[(V(!0),ke(Me,null,gt(zt(St),(o,S)=>(V(),ke(Me,{key:S},[le((V(),ae(wt,{clickable:"",active:o.name===e.value,onClick:y=>r(o.name)},{default:L(()=>[$(Be,{avatar:""},{default:L(()=>[$(Ct,{name:o.icon},null,8,["name"])]),_:2},1024),$(Be,null,{default:L(()=>[_t(qt(o.label),1)]),_:2},1024)]),_:2},1032,["active","onClick"])),[[kt]]),o.separator?(V(),ae(Mt,{key:"sep"+S})):Bt("",!0)],64))),128))]),_:1})]),_:1})]),_:1},8,["modelValue"]),$(Dt,null,{default:L(()=>[(V(),ae(f,{key:u.$route.fullPath}))]),_:1})]),_:1})}}});export{Vt as default};
