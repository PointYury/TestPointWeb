import{i as N,j as z,A as n,O as ge,az as bt,a4 as me,u as Se,k as ye,m as c,aA as mt,r as A,aB as St,w as M,ae as yt,af as Oe,aC as De,M as Ee,x as ht,v as _t,z as je,B as Ae,aD as wt,aE as qt,aF as Ct,aG as Pt,aH as kt,aI as xt,aJ as Fe,aK as be,aL as $e,aM as Rt,L as Ne,aN as He,aO as Tt,aP as H,at as Bt,ac as Z,a8 as Ot}from"./index-fb6b4c9f.js";import{Q as Ft}from"./QList-cc96bfb4.js";const $t=N({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:l,emit:r}){const v=z(),{proxy:{$q:o}}=v,g=s=>{r("click",s)};return()=>{if(e.props===void 0)return n("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:g},ge(l.default));let s,u;const d=v.vnode.key;if(d){if(s=e.props.colsMap[d],s===void 0)return}else s=e.props.col;if(s.sortable===!0){const a=s.align==="right"?"unshift":"push";u=bt(l.default,[]),u[a](n(me,{class:s.__iconClass,name:o.iconSet.table.arrowUp}))}else u=ge(l.default);const S={class:s.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:s.headerStyle,onClick:a=>{s.sortable===!0&&e.props.sort(s),g(a)}};return n("th",S,u)}}}),Lt=["horizontal","vertical","cell","none"],Mt=N({name:"QMarkupTable",props:{...Se,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>Lt.includes(e)}},setup(e,{slots:l}){const r=z(),v=ye(e,r.proxy.$q),o=c(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(v.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>n("div",{class:o.value},[n("table",{class:"q-table"},ge(l.default))])}});function Qe(e,l){return n("div",e,[n("table",{class:"q-table"},l)])}const Vt={list:Ft,table:Mt},Dt=["list","table","__qtable"],Et=N({name:"QVirtualScroll",props:{...mt,type:{type:String,default:"list",validator:e=>Dt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:l,attrs:r}){let v;const o=A(null),g=c(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:s,localResetVirtualScroll:u,padVirtualScroll:d,onVirtualScrollEvt:S}=St({virtualScrollLength:g,getVirtualScrollTarget:C,getVirtualScrollEl:q}),a=c(()=>{if(g.value===0)return[];const O=(F,x)=>({index:s.value.from+x,item:F});return e.itemsFn===void 0?e.items.slice(s.value.from,s.value.to).map(O):e.itemsFn(s.value.from,s.value.to-s.value.from).map(O)}),m=c(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),w=c(()=>e.scrollTarget!==void 0?{}:{tabindex:0});M(g,()=>{u()}),M(()=>e.scrollTarget,()=>{h(),_()});function q(){return o.value.$el||o.value}function C(){return v}function _(){v=yt(q(),e.scrollTarget),v.addEventListener("scroll",S,Oe.passive)}function h(){v!==void 0&&(v.removeEventListener("scroll",S,Oe.passive),v=void 0)}function B(){let O=d(e.type==="list"?"div":"tbody",a.value.map(l.default));return l.before!==void 0&&(O=l.before().concat(O)),Ae(l.after,O)}return De(()=>{u()}),Ee(()=>{_()}),ht(()=>{_()}),_t(()=>{h()}),je(()=>{h()}),()=>{if(l.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?Qe({ref:o,class:"q-table__middle "+m.value},B()):n(Vt[e.type],{...r,ref:o,class:[r.class,m.value],...w.value},B)}}}),jt={xs:2,sm:4,md:6,lg:10,xl:14};function Le(e,l,r){return{transform:l===!0?`translateX(${r.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}const At=N({name:"QLinearProgress",props:{...Se,...wt,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:l}){const{proxy:r}=z(),v=ye(e,r.$q),o=qt(e,jt),g=c(()=>e.indeterminate===!0||e.query===!0),s=c(()=>e.reverse!==e.query),u=c(()=>({...o.value!==null?o.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),d=c(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),S=c(()=>Le(e.buffer!==void 0?e.buffer:1,s.value,r.$q)),a=c(()=>`with${e.instantFeedback===!0?"out":""}-transition`),m=c(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${a.value} q-linear-progress__track--${v.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),w=c(()=>Le(g.value===!0?1:e.value,s.value,r.$q)),q=c(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${a.value} q-linear-progress__model--${g.value===!0?"in":""}determinate`),C=c(()=>({width:`${e.value*100}%`})),_=c(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${a.value}`);return()=>{const h=[n("div",{class:m.value,style:S.value}),n("div",{class:q.value,style:w.value})];return e.stripe===!0&&g.value===!1&&h.push(n("div",{class:_.value,style:C.value})),n("div",{class:d.value,style:u.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},Ae(l.default,h))}}}),Nt=n("div",{key:"svg",class:"q-checkbox__bg absolute"},[n("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[n("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),n("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]),fe=N({name:"QCheckbox",props:Ct,emits:Pt,setup(e){function l(r,v){const o=c(()=>(r.value===!0?e.checkedIcon:v.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>o.value!==null?[n("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[n(me,{class:"q-checkbox__icon",name:o.value})])]:[Nt]}return kt("checkbox",l)}});let Q=0;const Ht={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Qt=["update:fullscreen","fullscreen"];function zt(){const e=z(),{props:l,emit:r,proxy:v}=e;let o,g,s;const u=A(!1);xt(e)===!0&&M(()=>v.$route.fullPath,()=>{l.noRouteFullscreenExit!==!0&&a()}),M(()=>l.fullscreen,m=>{u.value!==m&&d()}),M(u,m=>{r("update:fullscreen",m),r("fullscreen",m)});function d(){u.value===!0?a():S()}function S(){u.value!==!0&&(u.value=!0,s=v.$el.parentNode,s.replaceChild(g,v.$el),document.body.appendChild(v.$el),Q++,Q===1&&document.body.classList.add("q-body--fullscreen-mixin"),o={handler:a},Fe.add(o))}function a(){u.value===!0&&(o!==void 0&&(Fe.remove(o),o=void 0),s.replaceChild(v.$el,g),u.value=!1,Q=Math.max(0,Q-1),Q===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),v.$el.scrollIntoView!==void 0&&setTimeout(()=>{v.$el.scrollIntoView()})))}return De(()=>{g=document.createElement("span")}),Ee(()=>{l.fullscreen===!0&&S()}),je(a),Object.assign(v,{toggleFullscreen:d,setFullscreen:S,exitFullscreen:a}),{inFullscreen:u,toggleFullscreen:d}}function It(e,l){return new Date(e)-new Date(l)}const pt={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Ut(e,l,r,v){const o=c(()=>{const{sortBy:u}=l.value;return u&&r.value.find(d=>d.name===u)||null}),g=c(()=>e.sortMethod!==void 0?e.sortMethod:(u,d,S)=>{const a=r.value.find(q=>q.name===d);if(a===void 0||a.field===void 0)return u;const m=S===!0?-1:1,w=typeof a.field=="function"?q=>a.field(q):q=>q[a.field];return u.sort((q,C)=>{let _=w(q),h=w(C);return _==null?-1*m:h==null?1*m:a.sort!==void 0?a.sort(_,h,q,C)*m:be(_)===!0&&be(h)===!0?(_-h)*m:$e(_)===!0&&$e(h)===!0?It(_,h)*m:typeof _=="boolean"&&typeof h=="boolean"?(_-h)*m:([_,h]=[_,h].map(B=>(B+"").toLocaleString().toLowerCase()),_<h?-1*m:_===h?0:m)})});function s(u){let d=e.columnSortOrder;if(Rt(u)===!0)u.sortOrder&&(d=u.sortOrder),u=u.name;else{const m=r.value.find(w=>w.name===u);m!==void 0&&m.sortOrder&&(d=m.sortOrder)}let{sortBy:S,descending:a}=l.value;S!==u?(S=u,a=d==="da"):e.binaryStateSort===!0?a=!a:a===!0?d==="ad"?S=null:a=!1:d==="ad"?a=!0:S=null,v({sortBy:S,descending:a,page:1})}return{columnToSort:o,computedSortMethod:g,sort:s}}const Kt={filter:[String,Object],filterMethod:Function};function Gt(e,l){const r=c(()=>e.filterMethod!==void 0?e.filterMethod:(v,o,g,s)=>{const u=o?o.toLowerCase():"";return v.filter(d=>g.some(S=>{const a=s(S,d)+"";return(a==="undefined"||a==="null"?"":a.toLowerCase()).indexOf(u)!==-1}))});return M(()=>e.filter,()=>{Ne(()=>{l({page:1},!0)})},{deep:!0}),{computedFilterMethod:r}}function Wt(e,l){for(const r in l)if(l[r]!==e[r])return!1;return!0}function Me(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const Jt={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function Xt(e,l){const{props:r,emit:v}=e,o=A(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:r.rowsPerPageOptions.length!==0?r.rowsPerPageOptions[0]:5},r.pagination)),g=c(()=>{const a=r["onUpdate:pagination"]!==void 0?{...o.value,...r.pagination}:o.value;return Me(a)}),s=c(()=>g.value.rowsNumber!==void 0);function u(a){d({pagination:a,filter:r.filter})}function d(a={}){Ne(()=>{v("request",{pagination:a.pagination||g.value,filter:a.filter||r.filter,getCellValue:l})})}function S(a,m){const w=Me({...g.value,...a});if(Wt(g.value,w)===!0){s.value===!0&&m===!0&&u(w);return}if(s.value===!0){u(w);return}r.pagination!==void 0&&r["onUpdate:pagination"]!==void 0?v("update:pagination",w):o.value=w}return{innerPagination:o,computedPagination:g,isServerSide:s,requestServerInteraction:d,setPagination:S}}function Yt(e,l,r,v,o,g){const{props:s,emit:u,proxy:{$q:d}}=e,S=c(()=>v.value===!0?r.value.rowsNumber||0:g.value),a=c(()=>{const{page:x,rowsPerPage:R}=r.value;return(x-1)*R}),m=c(()=>{const{page:x,rowsPerPage:R}=r.value;return x*R}),w=c(()=>r.value.page===1),q=c(()=>r.value.rowsPerPage===0?1:Math.max(1,Math.ceil(S.value/r.value.rowsPerPage))),C=c(()=>m.value===0?!0:r.value.page>=q.value),_=c(()=>(s.rowsPerPageOptions.includes(l.value.rowsPerPage)?s.rowsPerPageOptions:[l.value.rowsPerPage].concat(s.rowsPerPageOptions)).map(R=>({label:R===0?d.lang.table.allRows:""+R,value:R})));M(q,(x,R)=>{if(x===R)return;const I=r.value.page;x&&!I?o({page:1}):x<I&&o({page:x})});function h(){o({page:1})}function B(){const{page:x}=r.value;x>1&&o({page:x-1})}function O(){const{page:x,rowsPerPage:R}=r.value;m.value>0&&x*R<S.value&&o({page:x+1})}function F(){o({page:q.value})}return s["onUpdate:pagination"]!==void 0&&u("update:pagination",{...r.value}),{firstRowIndex:a,lastRowIndex:m,isFirstPage:w,isLastPage:C,pagesNumber:q,computedRowsPerPageOptions:_,computedRowsNumber:S,firstPage:h,prevPage:B,nextPage:O,lastPage:F}}const Zt={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},el=["update:selected","selection"];function tl(e,l,r,v){const o=c(()=>{const C={};return e.selected.map(v.value).forEach(_=>{C[_]=!0}),C}),g=c(()=>e.selection!=="none"),s=c(()=>e.selection==="single"),u=c(()=>e.selection==="multiple"),d=c(()=>r.value.length!==0&&r.value.every(C=>o.value[v.value(C)]===!0)),S=c(()=>d.value!==!0&&r.value.some(C=>o.value[v.value(C)]===!0)),a=c(()=>e.selected.length);function m(C){return o.value[C]===!0}function w(){l("update:selected",[])}function q(C,_,h,B){l("selection",{rows:_,added:h,keys:C,evt:B});const O=s.value===!0?h===!0?_:[]:h===!0?e.selected.concat(_):e.selected.filter(F=>C.includes(v.value(F))===!1);l("update:selected",O)}return{hasSelectionMode:g,singleSelection:s,multipleSelection:u,allRowsSelected:d,someRowsSelected:S,rowsSelectedNumber:a,isRowSelected:m,clearSelection:w,updateSelection:q}}function Ve(e){return Array.isArray(e)?e.slice():[]}const ll={expanded:Array},al=["update:expanded"];function nl(e,l){const r=A(Ve(e.expanded));M(()=>e.expanded,s=>{r.value=Ve(s)});function v(s){return r.value.includes(s)}function o(s){e.expanded!==void 0?l("update:expanded",s):r.value=s}function g(s,u){const d=r.value.slice(),S=d.indexOf(s);u===!0?S===-1&&(d.push(s),o(d)):S!==-1&&(d.splice(S,1),o(d))}return{isRowExpanded:v,setExpanded:o,updateExpanded:g}}const rl={visibleColumns:Array};function ol(e,l,r){const v=c(()=>{if(e.columns!==void 0)return e.columns;const u=e.rows[0];return u!==void 0?Object.keys(u).map(d=>({name:d,label:d.toUpperCase(),field:d,align:be(u[d])?"right":"left",sortable:!0})):[]}),o=c(()=>{const{sortBy:u,descending:d}=l.value;return(e.visibleColumns!==void 0?v.value.filter(a=>a.required===!0||e.visibleColumns.includes(a.name)===!0):v.value).map(a=>{const m=a.align||"right",w=`text-${m}`;return{...a,align:m,__iconClass:`q-table__sort-icon q-table__sort-icon--${m}`,__thClass:w+(a.headerClasses!==void 0?" "+a.headerClasses:"")+(a.sortable===!0?" sortable":"")+(a.name===u?` sorted ${d===!0?"sort-desc":""}`:""),__tdStyle:a.style!==void 0?typeof a.style!="function"?()=>a.style:a.style:()=>null,__tdClass:a.classes!==void 0?typeof a.classes!="function"?()=>w+" "+a.classes:q=>w+" "+a.classes(q):()=>w}})}),g=c(()=>{const u={};return o.value.forEach(d=>{u[d.name]=d}),u}),s=c(()=>e.tableColspan!==void 0?e.tableColspan:o.value.length+(r.value===!0?1:0));return{colList:v,computedCols:o,computedColsMap:g,computedColspan:s}}const ee="q-table__bottom row items-center",ze={};He.forEach(e=>{ze[e]={}});const ul=N({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...ze,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...Se,...Ht,...rl,...Kt,...Jt,...ll,...Zt,...pt},emits:["request","virtualScroll",...Qt,...al,...el],setup(e,{slots:l,emit:r}){const v=z(),{proxy:{$q:o}}=v,g=ye(e,o),{inFullscreen:s,toggleFullscreen:u}=zt(),d=c(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),S=A(null),a=A(null),m=c(()=>e.grid!==!0&&e.virtualScroll===!0),w=c(()=>" q-table__card"+(g.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),q=c(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":w.value)+(g.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(s.value===!0?" fullscreen scroll":"")),C=c(()=>q.value+(e.loading===!0?" q-table--loading":""));M(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+q.value,()=>{m.value===!0&&a.value!==null&&a.value.reset()});const{innerPagination:_,computedPagination:h,isServerSide:B,requestServerInteraction:O,setPagination:F}=Xt(v,E),{computedFilterMethod:x}=Gt(e,F),{isRowExpanded:R,setExpanded:I,updateExpanded:Ie}=nl(e,r),te=c(()=>{let t=e.rows;if(B.value===!0||t.length===0)return t;const{sortBy:i,descending:f}=h.value;return e.filter&&(t=x.value(t,e.filter,$.value,E)),We.value!==null&&(t=Je.value(e.rows===t?t.slice():t,i,f)),t}),he=c(()=>te.value.length),V=c(()=>{let t=te.value;if(B.value===!0)return t;const{rowsPerPage:i}=h.value;return i!==0&&(U.value===0&&e.rows!==t?t.length>K.value&&(t=t.slice(0,K.value)):t=t.slice(U.value,K.value)),t}),{hasSelectionMode:D,singleSelection:pe,multipleSelection:_e,allRowsSelected:Ue,someRowsSelected:we,rowsSelectedNumber:le,isRowSelected:ae,clearSelection:Ke,updateSelection:p}=tl(e,r,V,d),{colList:Ge,computedCols:$,computedColsMap:qe,computedColspan:Ce}=ol(e,h,D),{columnToSort:We,computedSortMethod:Je,sort:ne}=Ut(e,h,Ge,F),{firstRowIndex:U,lastRowIndex:K,isFirstPage:re,isLastPage:oe,pagesNumber:G,computedRowsPerPageOptions:Xe,computedRowsNumber:W,firstPage:ie,prevPage:se,nextPage:ue,lastPage:ce}=Yt(v,_,h,B,F,he),Ye=c(()=>V.value.length===0),Ze=c(()=>{const t={};return He.forEach(i=>{t[i]=e[i]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function et(){m.value===!0&&a.value.reset()}function tt(){if(e.grid===!0)return ft();const t=e.hideHeader!==!0?Te:null;if(m.value===!0){const f=l["top-row"],b=l["bottom-row"],y={default:k=>ke(k.item,l.body,k.index)};if(f!==void 0){const k=n("tbody",f({cols:$.value}));y.before=t===null?()=>k:()=>[t()].concat(k)}else t!==null&&(y.before=t);return b!==void 0&&(y.after=()=>n("tbody",b({cols:$.value}))),n(Et,{ref:a,class:e.tableClass,style:e.tableStyle,...Ze.value,scrollTarget:e.virtualScrollTarget,items:V.value,type:"__qtable",tableColspan:Ce.value,onVirtualScroll:at},y)}const i=[nt()];return t!==null&&i.unshift(t()),Qe({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},i)}function lt(t,i){if(a.value!==null){a.value.scrollTo(t,i);return}t=parseInt(t,10);const f=S.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(f!==null){const b=S.value.querySelector(".q-table__middle.scroll"),y=f.offsetTop-e.virtualScrollStickySizeStart,k=y<b.scrollTop?"decrease":"increase";b.scrollTop=y,r("virtualScroll",{index:t,from:0,to:_.value.rowsPerPage-1,direction:k})}}function at(t){r("virtualScroll",t)}function Pe(){return[n(At,{class:"q-table__linear-progress",color:e.color,dark:g.value,indeterminate:!0,trackColor:"transparent"})]}function ke(t,i,f){const b=d.value(t),y=ae(b);if(i!==void 0)return i(xe({key:b,row:t,pageIndex:f,__trClass:y?"selected":""}));const k=l["body-cell"],P=$.value.map(T=>{const X=l[`body-cell-${T.name}`],Y=X!==void 0?X:k;return Y!==void 0?Y(rt({key:b,row:t,pageIndex:f,col:T})):n("td",{class:T.__tdClass(t),style:T.__tdStyle(t)},E(T,t))});if(D.value===!0){const T=l["body-selection"],X=T!==void 0?T(ot({key:b,row:t,pageIndex:f})):[n(fe,{modelValue:y,color:e.color,dark:g.value,dense:e.dense,"onUpdate:modelValue":(Y,gt)=>{p([b],[t],Y,gt)}})];P.unshift(n("td",{class:"q-table--col-auto-width"},X))}const L={key:b,class:{selected:y}};return e.onRowClick!==void 0&&(L.class["cursor-pointer"]=!0,L.onClick=T=>{r("RowClick",T,t,f)}),e.onRowDblclick!==void 0&&(L.class["cursor-pointer"]=!0,L.onDblclick=T=>{r("RowDblclick",T,t,f)}),e.onRowContextmenu!==void 0&&(L.class["cursor-pointer"]=!0,L.onContextmenu=T=>{r("RowContextmenu",T,t,f)}),n("tr",L,P)}function nt(){const t=l.body,i=l["top-row"],f=l["bottom-row"];let b=V.value.map((y,k)=>ke(y,t,k));return i!==void 0&&(b=i({cols:$.value}).concat(b)),f!==void 0&&(b=b.concat(f({cols:$.value}))),n("tbody",b)}function xe(t){return de(t),t.cols=t.cols.map(i=>H({...i},"value",()=>E(i,t.row))),t}function rt(t){return de(t),H(t,"value",()=>E(t.col,t.row)),t}function ot(t){return de(t),t}function de(t){Object.assign(t,{cols:$.value,colsMap:qe.value,sort:ne,rowIndex:U.value+t.pageIndex,color:e.color,dark:g.value,dense:e.dense}),D.value===!0&&H(t,"selected",()=>ae(t.key),(i,f)=>{p([t.key],[t.row],i,f)}),H(t,"expand",()=>R(t.key),i=>{Ie(t.key,i)})}function E(t,i){const f=typeof t.field=="function"?t.field(i):i[t.field];return t.format!==void 0?t.format(f,i):f}const j=c(()=>({pagination:h.value,pagesNumber:G.value,isFirstPage:re.value,isLastPage:oe.value,firstPage:ie,prevPage:se,nextPage:ue,lastPage:ce,inFullscreen:s.value,toggleFullscreen:u}));function it(){const t=l.top,i=l["top-left"],f=l["top-right"],b=l["top-selection"],y=D.value===!0&&b!==void 0&&le.value>0,k="q-table__top relative-position row items-center";if(t!==void 0)return n("div",{class:k},[t(j.value)]);let P;if(y===!0?P=b(j.value).slice():(P=[],i!==void 0?P.push(n("div",{class:"q-table__control"},[i(j.value)])):e.title&&P.push(n("div",{class:"q-table__control"},[n("div",{class:["q-table__title",e.titleClass]},e.title)]))),f!==void 0&&(P.push(n("div",{class:"q-table__separator col"})),P.push(n("div",{class:"q-table__control"},[f(j.value)]))),P.length!==0)return n("div",{class:k},P)}const Re=c(()=>we.value===!0?null:Ue.value);function Te(){const t=st();return e.loading===!0&&l.loading===void 0&&t.push(n("tr",{class:"q-table__progress"},[n("th",{class:"relative-position",colspan:Ce.value},Pe())])),n("thead",t)}function st(){const t=l.header,i=l["header-cell"];if(t!==void 0)return t(ve({header:!0})).slice();const f=$.value.map(b=>{const y=l[`header-cell-${b.name}`],k=y!==void 0?y:i,P=ve({col:b});return k!==void 0?k(P):n($t,{key:b.name,props:P},()=>b.label)});if(pe.value===!0&&e.grid!==!0)f.unshift(n("th",{class:"q-table--col-auto-width"}," "));else if(_e.value===!0){const b=l["header-selection"],y=b!==void 0?b(ve({})):[n(fe,{color:e.color,modelValue:Re.value,dark:g.value,dense:e.dense,"onUpdate:modelValue":Be})];f.unshift(n("th",{class:"q-table--col-auto-width"},y))}return[n("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},f)]}function ve(t){return Object.assign(t,{cols:$.value,sort:ne,colsMap:qe.value,color:e.color,dark:g.value,dense:e.dense}),_e.value===!0&&H(t,"selected",()=>Re.value,Be),t}function Be(t){we.value===!0&&(t=!1),p(V.value.map(d.value),V.value,t)}const J=c(()=>{const t=[e.iconFirstPage||o.iconSet.table.firstPage,e.iconPrevPage||o.iconSet.table.prevPage,e.iconNextPage||o.iconSet.table.nextPage,e.iconLastPage||o.iconSet.table.lastPage];return o.lang.rtl===!0?t.reverse():t});function ut(){if(e.hideBottom===!0)return;if(Ye.value===!0){if(e.hideNoData===!0)return;const f=e.loading===!0?e.loadingLabel||o.lang.table.loading:e.filter?e.noResultsLabel||o.lang.table.noResults:e.noDataLabel||o.lang.table.noData,b=l["no-data"],y=b!==void 0?[b({message:f,icon:o.iconSet.table.warning,filter:e.filter})]:[n(me,{class:"q-table__bottom-nodata-icon",name:o.iconSet.table.warning}),f];return n("div",{class:ee+" q-table__bottom--nodata"},y)}const t=l.bottom;if(t!==void 0)return n("div",{class:ee},[t(j.value)]);const i=e.hideSelectedBanner!==!0&&D.value===!0&&le.value>0?[n("div",{class:"q-table__control"},[n("div",[(e.selectedRowsLabel||o.lang.table.selectedRecords)(le.value)])])]:[];if(e.hidePagination!==!0)return n("div",{class:ee+" justify-end"},dt(i));if(i.length!==0)return n("div",{class:ee},i)}function ct(t){F({page:1,rowsPerPage:t.value})}function dt(t){let i;const{rowsPerPage:f}=h.value,b=e.paginationLabel||o.lang.table.pagination,y=l.pagination,k=e.rowsPerPageOptions.length>1;if(t.push(n("div",{class:"q-table__separator col"})),k===!0&&t.push(n("div",{class:"q-table__control"},[n("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||o.lang.table.recordsPerPage]),n(Bt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:f,options:Xe.value,displayValue:f===0?o.lang.table.allRows:f,dark:g.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":ct})])),y!==void 0)i=y(j.value);else if(i=[n("span",f!==0?{class:"q-table__bottom-item"}:{},[f?b(U.value+1,Math.min(K.value,W.value),W.value):b(1,he.value,W.value)])],f!==0&&G.value>1){const P={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(P.size="sm"),G.value>2&&i.push(n(Z,{key:"pgFirst",...P,icon:J.value[0],disable:re.value,onClick:ie})),i.push(n(Z,{key:"pgPrev",...P,icon:J.value[1],disable:re.value,onClick:se}),n(Z,{key:"pgNext",...P,icon:J.value[2],disable:oe.value,onClick:ue})),G.value>2&&i.push(n(Z,{key:"pgLast",...P,icon:J.value[3],disable:oe.value,onClick:ce}))}return t.push(n("div",{class:"q-table__control"},i)),t}function vt(){const t=e.gridHeader===!0?[n("table",{class:"q-table"},[Te()])]:e.loading===!0&&l.loading===void 0?Pe():void 0;return n("div",{class:"q-table__middle"},t)}function ft(){const t=l.item!==void 0?l.item:i=>{const f=i.cols.map(y=>n("div",{class:"q-table__grid-item-row"},[n("div",{class:"q-table__grid-item-title"},[y.label]),n("div",{class:"q-table__grid-item-value"},[y.value])]));if(D.value===!0){const y=l["body-selection"],k=y!==void 0?y(i):[n(fe,{modelValue:i.selected,color:e.color,dark:g.value,dense:e.dense,"onUpdate:modelValue":(P,L)=>{p([i.key],[i.row],P,L)}})];f.unshift(n("div",{class:"q-table__grid-item-row"},k),n(Ot,{dark:g.value}))}const b={class:["q-table__grid-item-card"+w.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(b.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(b.onClick=y=>{r("RowClick",y,i.row,i.pageIndex)}),e.onRowDblclick!==void 0&&(b.onDblclick=y=>{r("RowDblclick",y,i.row,i.pageIndex)})),n("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(i.selected===!0?" q-table__grid-item--selected":"")},[n("div",b,f)])};return n("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},V.value.map((i,f)=>t(xe({key:d.value(i),row:i,pageIndex:f}))))}return Object.assign(v.proxy,{requestServerInteraction:O,setPagination:F,firstPage:ie,prevPage:se,nextPage:ue,lastPage:ce,isRowSelected:ae,clearSelection:Ke,isRowExpanded:R,setExpanded:I,sort:ne,resetVirtualScroll:et,scrollTo:lt,getCellValue:E}),Tt(v.proxy,{filteredSortedRows:()=>te.value,computedRows:()=>V.value,computedRowsNumber:()=>W.value}),()=>{const t=[it()],i={ref:S,class:C.value};return e.grid===!0?t.push(vt()):Object.assign(i,{class:[i.class,e.cardClass],style:e.cardStyle}),t.push(tt(),ut()),e.loading===!0&&l.loading!==void 0&&t.push(l.loading()),n("div",i,t)}}});export{ul as Q,$t as a};
