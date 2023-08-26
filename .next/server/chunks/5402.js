"use strict";
exports.id = 5402;
exports.ids = [5402];
exports.modules = {

/***/ 52775:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  V: () => (/* binding */ _t)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
var react_namespaceObject = /*#__PURE__*/__webpack_require__.t(react_, 2);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/match.js
var match = __webpack_require__(96872);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/render.js
var render = __webpack_require__(34645);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var use_sync_refs = __webpack_require__(16570);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/keyboard.js
var keyboard = __webpack_require__(27115);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/bugs.js
function r(n){let e=n.parentElement,l=null;for(;e&&!(e instanceof HTMLFieldSetElement);)e instanceof HTMLLegendElement&&(l=e),e=e.parentElement;let t=(e==null?void 0:e.getAttribute("disabled"))==="";return t&&i(l)?!1:t}function i(n){if(!n)return!1;let e=n.previousElementSibling;for(;e!==null;){if(e instanceof HTMLLegendElement)return!1;e=e.previousElementSibling}return!0}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-id.js
var use_id = __webpack_require__(3834);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var use_server_handoff_complete = __webpack_require__(27461);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/internal/hidden.js
var internal_hidden = __webpack_require__(74859);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/focus-management.js
var focus_management = __webpack_require__(6404);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-event.js
var use_event = __webpack_require__(78099);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var use_latest_value = __webpack_require__(40846);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-window-event.js
function use_window_event_s(e,r,n){let o=(0,use_latest_value/* useLatestValue */.E)(r);(0,react_.useEffect)(()=>{function t(i){o.current(i)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)},[e,n])}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var use_tab_direction_s=(r=>(r[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r))(use_tab_direction_s||{});function use_tab_direction_n(){let e=(0,react_.useRef)(0);return use_window_event_s("keydown",o=>{o.key==="Tab"&&(e.current=o.shiftKey?1:0)},!0),e}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var use_is_mounted = __webpack_require__(19032);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/owner.js
var owner = __webpack_require__(27515);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-owner.js
function use_owner_n(...e){return (0,react_.useMemo)(()=>(0,owner/* getOwnerDocument */.r)(...e),[...e])}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-event-listener.js
function E(n,e,a,t){let i=(0,use_latest_value/* useLatestValue */.E)(a);(0,react_.useEffect)(()=>{n=n!=null?n:window;function r(o){i.current(o)}return n.addEventListener(e,r,t),()=>n.removeEventListener(e,r,t)},[n,e,t])}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/micro-task.js
var micro_task = __webpack_require__(20940);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-watch.js
function m(u,t){let e=(0,react_.useRef)([]),r=(0,use_event/* useEvent */.z)(u);(0,react_.useEffect)(()=>{let o=[...e.current];for(let[n,a]of t.entries())if(e.current[n]!==a){let l=r(t,o);return e.current=t,l}},[r,...t])}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-disposables.js
var use_disposables = __webpack_require__(40566);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/document-ready.js
function t(n){function e(){document.readyState!=="loading"&&(n(),document.removeEventListener("DOMContentLoaded",e))}typeof window!="undefined"&&typeof document!="undefined"&&(document.addEventListener("DOMContentLoaded",e),e())}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-on-unmount.js
function c(t){let r=(0,use_event/* useEvent */.z)(t),e=(0,react_.useRef)(!1);(0,react_.useEffect)(()=>(e.current=!1,()=>{e.current=!0,(0,micro_task/* microTask */.Y)(()=>{e.current&&r()})}),[r])}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
function P(t){if(!t)return new Set;if(typeof t=="function")return new Set(t());let r=new Set;for(let e of t.current)e.current instanceof HTMLElement&&r.add(e.current);return r}let J="div";var h=(n=>(n[n.None=1]="None",n[n.InitialFocus=2]="InitialFocus",n[n.TabLock=4]="TabLock",n[n.FocusLock=8]="FocusLock",n[n.RestoreFocus=16]="RestoreFocus",n[n.All=30]="All",n))(h||{});function X(t,r){let e=(0,react_.useRef)(null),o=(0,use_sync_refs/* useSyncRefs */.T)(e,r),{initialFocus:u,containers:i,features:n=30,...l}=t;(0,use_server_handoff_complete/* useServerHandoffComplete */.H)()||(n=1);let m=use_owner_n(e);Y({ownerDocument:m},Boolean(n&16));let c=Z({ownerDocument:m,container:e,initialFocus:u},Boolean(n&2));$({ownerDocument:m,container:e,containers:i,previousActiveElement:c},Boolean(n&8));let v=use_tab_direction_n(),y=(0,use_event/* useEvent */.z)(s=>{let T=e.current;if(!T)return;(B=>B())(()=>{(0,match/* match */.E)(v.current,{[use_tab_direction_s.Forwards]:()=>{(0,focus_management/* focusIn */.jA)(T,focus_management/* Focus */.TO.First,{skipElements:[s.relatedTarget]})},[use_tab_direction_s.Backwards]:()=>{(0,focus_management/* focusIn */.jA)(T,focus_management/* Focus */.TO.Last,{skipElements:[s.relatedTarget]})}})})}),_=(0,use_disposables/* useDisposables */.G)(),b=(0,react_.useRef)(!1),j={ref:o,onKeyDown(s){s.key=="Tab"&&(b.current=!0,_.requestAnimationFrame(()=>{b.current=!1}))},onBlur(s){let T=P(i);e.current instanceof HTMLElement&&T.add(e.current);let d=s.relatedTarget;d instanceof HTMLElement&&d.dataset.headlessuiFocusGuard!=="true"&&(S(T,d)||(b.current?(0,focus_management/* focusIn */.jA)(e.current,(0,match/* match */.E)(v.current,{[use_tab_direction_s.Forwards]:()=>focus_management/* Focus */.TO.Next,[use_tab_direction_s.Backwards]:()=>focus_management/* Focus */.TO.Previous})|focus_management/* Focus */.TO.WrapAround,{relativeTo:s.target}):s.target instanceof HTMLElement&&(0,focus_management/* focusElement */.C5)(s.target)))}};return react_.createElement(react_.Fragment,null,Boolean(n&4)&&react_.createElement(internal_hidden/* Hidden */._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:y,features:internal_hidden/* Features */.A.Focusable}),(0,render/* render */.sY)({ourProps:j,theirProps:l,defaultTag:J,name:"FocusTrap"}),Boolean(n&4)&&react_.createElement(internal_hidden/* Hidden */._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:y,features:internal_hidden/* Features */.A.Focusable}))}let z=(0,render/* forwardRefWithAs */.yV)(X),focus_trap_ge=Object.assign(z,{features:h}),a=[];t(()=>{function t(r){r.target instanceof HTMLElement&&r.target!==document.body&&a[0]!==r.target&&(a.unshift(r.target),a=a.filter(e=>e!=null&&e.isConnected),a.splice(10))}window.addEventListener("click",t,{capture:!0}),window.addEventListener("mousedown",t,{capture:!0}),window.addEventListener("focus",t,{capture:!0}),document.body.addEventListener("click",t,{capture:!0}),document.body.addEventListener("mousedown",t,{capture:!0}),document.body.addEventListener("focus",t,{capture:!0})});function Q(t=!0){let r=(0,react_.useRef)(a.slice());return m(([e],[o])=>{o===!0&&e===!1&&(0,micro_task/* microTask */.Y)(()=>{r.current.splice(0)}),o===!1&&e===!0&&(r.current=a.slice())},[t,a,r]),(0,use_event/* useEvent */.z)(()=>{var e;return(e=r.current.find(o=>o!=null&&o.isConnected))!=null?e:null})}function Y({ownerDocument:t},r){let e=Q(r);m(()=>{r||(t==null?void 0:t.activeElement)===(t==null?void 0:t.body)&&(0,focus_management/* focusElement */.C5)(e())},[r]),c(()=>{r&&(0,focus_management/* focusElement */.C5)(e())})}function Z({ownerDocument:t,container:r,initialFocus:e},o){let u=(0,react_.useRef)(null),i=(0,use_is_mounted/* useIsMounted */.t)();return m(()=>{if(!o)return;let n=r.current;n&&(0,micro_task/* microTask */.Y)(()=>{if(!i.current)return;let l=t==null?void 0:t.activeElement;if(e!=null&&e.current){if((e==null?void 0:e.current)===l){u.current=l;return}}else if(n.contains(l)){u.current=l;return}e!=null&&e.current?(0,focus_management/* focusElement */.C5)(e.current):(0,focus_management/* focusIn */.jA)(n,focus_management/* Focus */.TO.First)===focus_management/* FocusResult */.fE.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),u.current=t==null?void 0:t.activeElement})},[o]),u}function $({ownerDocument:t,container:r,containers:e,previousActiveElement:o},u){let i=(0,use_is_mounted/* useIsMounted */.t)();E(t==null?void 0:t.defaultView,"focus",n=>{if(!u||!i.current)return;let l=P(e);r.current instanceof HTMLElement&&l.add(r.current);let m=o.current;if(!m)return;let c=n.target;c&&c instanceof HTMLElement?S(l,c)?(o.current=c,(0,focus_management/* focusElement */.C5)(c)):(n.preventDefault(),n.stopPropagation(),(0,focus_management/* focusElement */.C5)(m)):(0,focus_management/* focusElement */.C5)(o.current)},!0)}function S(t,r){for(let e of t)if(e.contains(r))return!0;return!1}

// EXTERNAL MODULE: external "next/dist/compiled/react-dom/server-rendering-stub"
var server_rendering_stub_ = __webpack_require__(98704);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var use_iso_morphic_effect = __webpack_require__(35183);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/internal/portal-force-root.js
let e=(0,react_.createContext)(!1);function portal_force_root_l(){return (0,react_.useContext)(e)}function portal_force_root_P(o){return react_.createElement(e.Provider,{value:o.force},o.children)}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/env.js
var env = __webpack_require__(62402);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/portal/portal.js
function F(p){let l=portal_force_root_l(),n=(0,react_.useContext)(v),e=use_owner_n(p),[a,o]=(0,react_.useState)(()=>{if(!l&&n!==null||env/* env */.O.isServer)return null;let t=e==null?void 0:e.getElementById("headlessui-portal-root");if(t)return t;if(e===null)return null;let r=e.createElement("div");return r.setAttribute("id","headlessui-portal-root"),e.body.appendChild(r)});return (0,react_.useEffect)(()=>{a!==null&&(e!=null&&e.body.contains(a)||e==null||e.body.appendChild(a))},[a,e]),(0,react_.useEffect)(()=>{l||n!==null&&o(n.current)},[n,o,l]),a}let U=react_.Fragment;function N(p,l){let n=p,e=(0,react_.useRef)(null),a=(0,use_sync_refs/* useSyncRefs */.T)((0,use_sync_refs/* optionalRef */.h)(u=>{e.current=u}),l),o=use_owner_n(e),t=F(e),[r]=(0,react_.useState)(()=>{var u;return env/* env */.O.isServer?null:(u=o==null?void 0:o.createElement("div"))!=null?u:null}),i=(0,react_.useContext)(f),C=(0,use_server_handoff_complete/* useServerHandoffComplete */.H)();return (0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>{!t||!r||t.contains(r)||(r.setAttribute("data-headlessui-portal",""),t.appendChild(r))},[t,r]),(0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>{if(r&&i)return i.register(r)},[i,r]),c(()=>{var u;!t||!r||(r instanceof Node&&t.contains(r)&&t.removeChild(r),t.childNodes.length<=0&&((u=t.parentElement)==null||u.removeChild(t)))}),C?!t||!r?null:(0,server_rendering_stub_.createPortal)((0,render/* render */.sY)({ourProps:{ref:a},theirProps:n,defaultTag:U,name:"Portal"}),r):null}let portal_S=react_.Fragment,v=(0,react_.createContext)(null);function j(p,l){let{target:n,...e}=p,o={ref:(0,use_sync_refs/* useSyncRefs */.T)(l)};return react_.createElement(v.Provider,{value:n},(0,render/* render */.sY)({ourProps:o,theirProps:e,defaultTag:portal_S,name:"Popover.Group"}))}let f=(0,react_.createContext)(null);function portal_ae(){let p=(0,react_.useContext)(f),l=(0,react_.useRef)([]),n=(0,use_event/* useEvent */.z)(o=>(l.current.push(o),p&&p.register(o),()=>e(o))),e=(0,use_event/* useEvent */.z)(o=>{let t=l.current.indexOf(o);t!==-1&&l.current.splice(t,1),p&&p.unregister(o)}),a=(0,react_.useMemo)(()=>({register:n,unregister:e,portals:l}),[n,e,l]);return[l,(0,react_.useMemo)(()=>function({children:t}){return react_.createElement(f.Provider,{value:a},t)},[a])]}let D=(0,render/* forwardRefWithAs */.yV)(N),I=(0,render/* forwardRefWithAs */.yV)(j),portal_pe=Object.assign(D,{Group:I});

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/description/description.js
let d=(0,react_.createContext)(null);function description_f(){let r=(0,react_.useContext)(d);if(r===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,description_f),t}return r}function description_M(){let[r,t]=(0,react_.useState)([]);return[r.length>0?r.join(" "):void 0,(0,react_.useMemo)(()=>function(e){let i=(0,use_event/* useEvent */.z)(s=>(t(o=>[...o,s]),()=>t(o=>{let p=o.slice(),c=p.indexOf(s);return c!==-1&&p.splice(c,1),p}))),n=(0,react_.useMemo)(()=>({register:i,slot:e.slot,name:e.name,props:e.props}),[i,e.slot,e.name,e.props]);return react_.createElement(d.Provider,{value:n},e.children)},[t])]}let description_S="p";function description_h(r,t){let a=(0,use_id/* useId */.M)(),{id:e=`headlessui-description-${a}`,...i}=r,n=description_f(),s=(0,use_sync_refs/* useSyncRefs */.T)(t);(0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>n.register(e),[e,n.register]);let o={ref:s,...n.props,id:e};return (0,render/* render */.sY)({ourProps:o,theirProps:i,slot:n.slot||{},defaultTag:description_S,name:n.name||"Description"})}let y=(0,render/* forwardRefWithAs */.yV)(description_h),b=Object.assign(y,{});

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/internal/open-closed.js
var open_closed = __webpack_require__(99395);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/internal/stack-context.js
let stack_context_a=(0,react_.createContext)(()=>{});stack_context_a.displayName="StackContext";var stack_context_s=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(stack_context_s||{});function x(){return (0,react_.useContext)(stack_context_a)}function stack_context_M({children:i,onUpdate:r,type:e,element:n,enabled:u}){let l=x(),o=(0,use_event/* useEvent */.z)((...t)=>{r==null||r(...t),l(...t)});return (0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>{let t=u===void 0||u===!0;return t&&o(0,e,n),()=>{t&&o(1,e,n)}},[o,e,n,u]),react_.createElement(stack_context_a.Provider,{value:o},i)}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-document-event.js
function use_document_event_d(e,r,n){let o=(0,use_latest_value/* useLatestValue */.E)(r);(0,react_.useEffect)(()=>{function t(u){o.current(u)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function use_outside_click_h(s,m,a=!0){let i=(0,react_.useRef)(!1);(0,react_.useEffect)(()=>{requestAnimationFrame(()=>{i.current=a})},[a]);function c(e,r){if(!i.current||e.defaultPrevented)return;let t=r(e);if(t===null||!t.getRootNode().contains(t)||!t.isConnected)return;let E=function u(n){return typeof n=="function"?u(n()):Array.isArray(n)||n instanceof Set?n:[n]}(s);for(let u of E){if(u===null)continue;let n=u instanceof HTMLElement?u:u.current;if(n!=null&&n.contains(t)||e.composed&&e.composedPath().includes(n))return}return!(0,focus_management/* isFocusableElement */.sP)(t,focus_management/* FocusableMode */.tJ.Loose)&&t.tabIndex!==-1&&e.preventDefault(),m(e,t)}let o=(0,react_.useRef)(null);use_document_event_d("pointerdown",e=>{var r,t;i.current&&(o.current=((t=(r=e.composedPath)==null?void 0:r.call(e))==null?void 0:t[0])||e.target)},!0),use_document_event_d("mousedown",e=>{var r,t;i.current&&(o.current=((t=(r=e.composedPath)==null?void 0:r.call(e))==null?void 0:t[0])||e.target)},!0),use_document_event_d("click",e=>{o.current&&(c(e,()=>o.current),o.current=null)},!0),use_document_event_d("touchend",e=>c(e,()=>e.target instanceof HTMLElement?e.target:null),!0),use_window_event_s("blur",e=>c(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimClient.js
function useSyncExternalStoreShimClient_i(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const useSyncExternalStoreShimClient_d=typeof Object.is=="function"?Object.is:useSyncExternalStoreShimClient_i,{useState:u,useEffect:useSyncExternalStoreShimClient_h,useLayoutEffect:useSyncExternalStoreShimClient_f,useDebugValue:p}=react_namespaceObject;let useSyncExternalStoreShimClient_S=(/* unused pure expression or super */ null && (!1)),_=(/* unused pure expression or super */ null && (!1));function useSyncExternalStoreShimClient_y(e,t,c){const a=t(),[{inst:n},o]=u({inst:{value:a,getSnapshot:t}});return useSyncExternalStoreShimClient_f(()=>{n.value=a,n.getSnapshot=t,useSyncExternalStoreShimClient_r(n)&&o({inst:n})},[e,a,t]),useSyncExternalStoreShimClient_h(()=>(useSyncExternalStoreShimClient_r(n)&&o({inst:n}),e(()=>{useSyncExternalStoreShimClient_r(n)&&o({inst:n})})),[e]),p(a),a}function useSyncExternalStoreShimClient_r(e){const t=e.getSnapshot,c=e.value;try{const a=t();return!useSyncExternalStoreShimClient_d(c,a)}catch{return!0}}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimServer.js
function useSyncExternalStoreShimServer_t(r,e,n){return e()}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
const use_sync_external_store_shim_r=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",s=!use_sync_external_store_shim_r,use_sync_external_store_shim_c=s?useSyncExternalStoreShimServer_t:useSyncExternalStoreShimClient_y,use_sync_external_store_shim_a="useSyncExternalStore" in react_namespaceObject?(n=>n.useSyncExternalStore)(react_namespaceObject):use_sync_external_store_shim_c;

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-store.js
function use_store_S(t){return use_sync_external_store_shim_a(t.subscribe,t.getSnapshot,t.getSnapshot)}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/disposables.js
var disposables = __webpack_require__(226);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/store.js
function store_a(o,r){let t=o(),n=new Set;return{getSnapshot(){return t},subscribe(e){return n.add(e),()=>n.delete(e)},dispatch(e,...s){let i=r[e].call(t,...s);i&&(t=i,n.forEach(c=>c()))}}}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function adjust_scrollbar_padding_c(){let o;return{before({doc:e}){var l;let n=e.documentElement;o=((l=e.defaultView)!=null?l:window).innerWidth-n.clientWidth},after({doc:e,d:n}){let t=e.documentElement,l=t.clientWidth-t.offsetWidth,r=o-l;n.style(t,"paddingRight",`${r}px`)}}}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/platform.js
function platform_t(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function platform_i(){return/Android/gi.test(window.navigator.userAgent)}function n(){return platform_t()||platform_i()}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
function handle_ios_locking_p(){if(!platform_t())return{};let o;return{before(){o=window.pageYOffset},after({doc:r,d:l,meta:s}){function i(e){return s.containers.flatMap(t=>t()).some(t=>t.contains(e))}l.style(r.body,"marginTop",`-${o}px`),window.scrollTo(0,0);let n=null;l.addEventListener(r,"click",e=>{if(e.target instanceof HTMLElement)try{let t=e.target.closest("a");if(!t)return;let{hash:c}=new URL(t.href),a=r.querySelector(c);a&&!i(a)&&(n=a)}catch{}},!0),l.addEventListener(r,"touchmove",e=>{e.target instanceof HTMLElement&&!i(e.target)&&e.preventDefault()},{passive:!1}),l.add(()=>{window.scrollTo(0,window.pageYOffset+o),n&&n.isConnected&&(n.scrollIntoView({block:"nearest"}),n=null)})}}}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
function l(){return{before({doc:e,d:o}){o.style(e.documentElement,"overflow","hidden")}}}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
function overflow_store_m(e){let n={};for(let t of e)Object.assign(n,t(n));return n}let overflow_store_a=store_a(()=>new Map,{PUSH(e,n){var o;let t=(o=this.get(e))!=null?o:{doc:e,count:0,d:(0,disposables/* disposables */.k)(),meta:new Set};return t.count++,t.meta.add(n),this.set(e,t),this},POP(e,n){let t=this.get(e);return t&&(t.count--,t.meta.delete(n)),this},SCROLL_PREVENT({doc:e,d:n,meta:t}){let o={doc:e,d:n,meta:overflow_store_m(t)},c=[handle_ios_locking_p(),adjust_scrollbar_padding_c(),l()];c.forEach(({before:r})=>r==null?void 0:r(o)),c.forEach(({after:r})=>r==null?void 0:r(o))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});overflow_store_a.subscribe(()=>{let e=overflow_store_a.getSnapshot(),n=new Map;for(let[t]of e)n.set(t,t.documentElement.style.overflow);for(let t of e.values()){let o=n.get(t.doc)==="hidden",c=t.count!==0;(c&&!o||!c&&o)&&overflow_store_a.dispatch(t.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",t),t.count===0&&overflow_store_a.dispatch("TEARDOWN",t)}});

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
function use_document_overflow_p(e,r,n){let f=use_store_S(overflow_store_a),o=e?f.get(e):void 0,i=o?o.count>0:!1;return (0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>{if(!(!e||!r))return overflow_store_a.dispatch("PUSH",e,n),()=>overflow_store_a.dispatch("POP",e,n)},[r,e]),i}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-inert.js
let use_inert_u=new Map,use_inert_t=new Map;function use_inert_h(r,l=!0){(0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>{var o;if(!l)return;let e=typeof r=="function"?r():r.current;if(!e)return;function a(){var d;if(!e)return;let i=(d=use_inert_t.get(e))!=null?d:1;if(i===1?use_inert_t.delete(e):use_inert_t.set(e,i-1),i!==1)return;let n=use_inert_u.get(e);n&&(n["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",n["aria-hidden"]),e.inert=n.inert,use_inert_u.delete(e))}let f=(o=use_inert_t.get(e))!=null?o:0;return use_inert_t.set(e,f+1),f!==0||(use_inert_u.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),e.setAttribute("aria-hidden","true"),e.inert=!0),a},[r,l])}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-root-containers.js
function use_root_containers_p({defaultContainers:f=[],portals:o}={}){let t=(0,react_.useRef)(null),i=use_owner_n(t),u=(0,use_event/* useEvent */.z)(()=>{var r;let n=[];for(let e of f)e!==null&&(e instanceof HTMLElement?n.push(e):"current"in e&&e.current instanceof HTMLElement&&n.push(e.current));if(o!=null&&o.current)for(let e of o.current)n.push(e);for(let e of(r=i==null?void 0:i.querySelectorAll("html > *, body > *"))!=null?r:[])e!==document.body&&e!==document.head&&e instanceof HTMLElement&&e.id!=="headlessui-portal-root"&&(e.contains(t.current)||n.some(c=>e.contains(c))||n.push(e));return n});return{resolveContainers:u,contains:(0,use_event/* useEvent */.z)(n=>u().some(r=>r.contains(n))),mainTreeNodeRef:t,MainTreeNode:(0,react_.useMemo)(()=>function(){return react_.createElement(internal_hidden/* Hidden */._,{features:internal_hidden/* Features */.A.Hidden,ref:t})},[t])}}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/dialog/dialog.js
var _e=(o=>(o[o.Open=0]="Open",o[o.Closed=1]="Closed",o))(_e||{}),Ie=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(Ie||{});let Me={[0](t,e){return t.titleId===e.id?t:{...t,titleId:e.id}}},dialog_I=(0,react_.createContext)(null);dialog_I.displayName="DialogContext";function dialog_b(t){let e=(0,react_.useContext)(dialog_I);if(e===null){let o=new Error(`<${t} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,dialog_b),o}return e}function we(t,e,o=()=>[document.body]){use_document_overflow_p(t,e,i=>{var n;return{containers:[...(n=i.containers)!=null?n:[],o]}})}function Be(t,e){return (0,match/* match */.E)(e.type,Me,t,e)}let He="div",Ge=render/* Features */.AN.RenderStrategy|render/* Features */.AN.Static;function Ne(t,e){var X;let o=(0,use_id/* useId */.M)(),{id:i=`headlessui-dialog-${o}`,open:n,onClose:l,initialFocus:s,__demoMode:g=!1,...T}=t,[m,h]=(0,react_.useState)(0),a=(0,open_closed/* useOpenClosed */.oJ)();n===void 0&&a!==null&&(n=(a&open_closed/* State */.ZM.Open)===open_closed/* State */.ZM.Open);let D=(0,react_.useRef)(null),Q=(0,use_sync_refs/* useSyncRefs */.T)(D,e),f=use_owner_n(D),N=t.hasOwnProperty("open")||a!==null,U=t.hasOwnProperty("onClose");if(!N&&!U)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!N)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!U)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof n!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n}`);if(typeof l!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l}`);let p=n?0:1,[S,Z]=(0,react_.useReducer)(Be,{titleId:null,descriptionId:null,panelRef:(0,react_.createRef)()}),P=(0,use_event/* useEvent */.z)(()=>l(!1)),W=(0,use_event/* useEvent */.z)(r=>Z({type:0,id:r})),L=(0,use_server_handoff_complete/* useServerHandoffComplete */.H)()?g?!1:p===0:!1,F=m>1,Y=(0,react_.useContext)(dialog_I)!==null,[ee,te]=portal_ae(),{resolveContainers:M,mainTreeNodeRef:k,MainTreeNode:oe}=use_root_containers_p({portals:ee,defaultContainers:[(X=S.panelRef.current)!=null?X:D.current]}),re=F?"parent":"leaf",$=a!==null?(a&open_closed/* State */.ZM.Closing)===open_closed/* State */.ZM.Closing:!1,ne=(()=>Y||$?!1:L)(),le=(0,react_.useCallback)(()=>{var r,c;return(c=Array.from((r=f==null?void 0:f.querySelectorAll("body > *"))!=null?r:[]).find(d=>d.id==="headlessui-portal-root"?!1:d.contains(k.current)&&d instanceof HTMLElement))!=null?c:null},[k]);use_inert_h(le,ne);let ae=(()=>F?!0:L)(),ie=(0,react_.useCallback)(()=>{var r,c;return(c=Array.from((r=f==null?void 0:f.querySelectorAll("[data-headlessui-portal]"))!=null?r:[]).find(d=>d.contains(k.current)&&d instanceof HTMLElement))!=null?c:null},[k]);use_inert_h(ie,ae);let se=(()=>!(!L||F))();use_outside_click_h(M,P,se);let pe=(()=>!(F||p!==0))();E(f==null?void 0:f.defaultView,"keydown",r=>{pe&&(r.defaultPrevented||r.key===keyboard/* Keys */.R.Escape&&(r.preventDefault(),r.stopPropagation(),P()))});let de=(()=>!($||p!==0||Y))();we(f,de,M),(0,react_.useEffect)(()=>{if(p!==0||!D.current)return;let r=new ResizeObserver(c=>{for(let d of c){let x=d.target.getBoundingClientRect();x.x===0&&x.y===0&&x.width===0&&x.height===0&&P()}});return r.observe(D.current),()=>r.disconnect()},[p,D,P]);let[ue,fe]=description_M(),ge=(0,react_.useMemo)(()=>[{dialogState:p,close:P,setTitleId:W},S],[p,S,P,W]),J=(0,react_.useMemo)(()=>({open:p===0}),[p]),Te={ref:Q,id:i,role:"dialog","aria-modal":p===0?!0:void 0,"aria-labelledby":S.titleId,"aria-describedby":ue};return react_.createElement(stack_context_M,{type:"Dialog",enabled:p===0,element:D,onUpdate:(0,use_event/* useEvent */.z)((r,c)=>{c==="Dialog"&&(0,match/* match */.E)(r,{[stack_context_s.Add]:()=>h(d=>d+1),[stack_context_s.Remove]:()=>h(d=>d-1)})})},react_.createElement(portal_force_root_P,{force:!0},react_.createElement(portal_pe,null,react_.createElement(dialog_I.Provider,{value:ge},react_.createElement(portal_pe.Group,{target:D},react_.createElement(portal_force_root_P,{force:!1},react_.createElement(fe,{slot:J,name:"Dialog.Description"},react_.createElement(focus_trap_ge,{initialFocus:s,containers:M,features:L?(0,match/* match */.E)(re,{parent:focus_trap_ge.features.RestoreFocus,leaf:focus_trap_ge.features.All&~focus_trap_ge.features.FocusLock}):focus_trap_ge.features.None},react_.createElement(te,null,(0,render/* render */.sY)({ourProps:Te,theirProps:T,slot:J,defaultTag:He,features:Ge,visible:p===0,name:"Dialog"}))))))))),react_.createElement(oe,null))}let Ue="div";function We(t,e){let o=(0,use_id/* useId */.M)(),{id:i=`headlessui-dialog-overlay-${o}`,...n}=t,[{dialogState:l,close:s}]=dialog_b("Dialog.Overlay"),g=(0,use_sync_refs/* useSyncRefs */.T)(e),T=(0,use_event/* useEvent */.z)(a=>{if(a.target===a.currentTarget){if(r(a.currentTarget))return a.preventDefault();a.preventDefault(),a.stopPropagation(),s()}}),m=(0,react_.useMemo)(()=>({open:l===0}),[l]);return (0,render/* render */.sY)({ourProps:{ref:g,id:i,"aria-hidden":!0,onClick:T},theirProps:n,slot:m,defaultTag:Ue,name:"Dialog.Overlay"})}let Ye="div";function $e(t,e){let o=(0,use_id/* useId */.M)(),{id:i=`headlessui-dialog-backdrop-${o}`,...n}=t,[{dialogState:l},s]=dialog_b("Dialog.Backdrop"),g=(0,use_sync_refs/* useSyncRefs */.T)(e);(0,react_.useEffect)(()=>{if(s.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[s.panelRef]);let T=(0,react_.useMemo)(()=>({open:l===0}),[l]);return react_.createElement(portal_force_root_P,{force:!0},react_.createElement(portal_pe,null,(0,render/* render */.sY)({ourProps:{ref:g,id:i,"aria-hidden":!0},theirProps:n,slot:T,defaultTag:Ye,name:"Dialog.Backdrop"})))}let Je="div";function Xe(t,e){let o=(0,use_id/* useId */.M)(),{id:i=`headlessui-dialog-panel-${o}`,...n}=t,[{dialogState:l},s]=dialog_b("Dialog.Panel"),g=(0,use_sync_refs/* useSyncRefs */.T)(e,s.panelRef),T=(0,react_.useMemo)(()=>({open:l===0}),[l]),m=(0,use_event/* useEvent */.z)(a=>{a.stopPropagation()});return (0,render/* render */.sY)({ourProps:{ref:g,id:i,onClick:m},theirProps:n,slot:T,defaultTag:Je,name:"Dialog.Panel"})}let je="h2";function Ke(t,e){let o=(0,use_id/* useId */.M)(),{id:i=`headlessui-dialog-title-${o}`,...n}=t,[{dialogState:l,setTitleId:s}]=dialog_b("Dialog.Title"),g=(0,use_sync_refs/* useSyncRefs */.T)(e);(0,react_.useEffect)(()=>(s(i),()=>s(null)),[i,s]);let T=(0,react_.useMemo)(()=>({open:l===0}),[l]);return (0,render/* render */.sY)({ourProps:{ref:g,id:i},theirProps:n,slot:T,defaultTag:je,name:"Dialog.Title"})}let Ve=(0,render/* forwardRefWithAs */.yV)(Ne),qe=(0,render/* forwardRefWithAs */.yV)($e),ze=(0,render/* forwardRefWithAs */.yV)(Xe),Qe=(0,render/* forwardRefWithAs */.yV)(We),Ze=(0,render/* forwardRefWithAs */.yV)(Ke),_t=Object.assign(Ve,{Backdrop:qe,Panel:ze,Overlay:Qe,Title:Ze,Description:b});


/***/ }),

/***/ 82596:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  u: () => (/* binding */ $e)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/render.js
var render = __webpack_require__(34645);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/internal/open-closed.js
var open_closed = __webpack_require__(99395);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/match.js
var match = __webpack_require__(96872);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var use_is_mounted = __webpack_require__(19032);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var use_iso_morphic_effect = __webpack_require__(35183);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var use_latest_value = __webpack_require__(40846);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var use_server_handoff_complete = __webpack_require__(27461);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var use_sync_refs = __webpack_require__(16570);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/once.js
function once_l(r){let e={called:!1};return(...t)=>{if(!e.called)return e.called=!0,r(...t)}}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/disposables.js
var disposables = __webpack_require__(226);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/transitions/utils/transition.js
function d(t,...e){t&&e.length>0&&t.classList.add(...e)}function v(t,...e){t&&e.length>0&&t.classList.remove(...e)}function F(t,e){let n=(0,disposables/* disposables */.k)();if(!t)return n.dispose;let{transitionDuration:m,transitionDelay:o}=getComputedStyle(t),[u,p]=[m,o].map(a=>{let[r=0]=a.split(",").filter(Boolean).map(i=>i.includes("ms")?parseFloat(i):parseFloat(i)*1e3).sort((i,f)=>f-i);return r}),l=u+p;if(l!==0){n.group(r=>{r.setTimeout(()=>{e(),r.dispose()},l),r.addEventListener(t,"transitionrun",i=>{i.target===i.currentTarget&&r.dispose()})});let a=n.addEventListener(t,"transitionend",r=>{r.target===r.currentTarget&&(e(),a())})}else e();return n.add(()=>e()),n.dispose}function y(t,e,n,m){let o=n?"enter":"leave",u=(0,disposables/* disposables */.k)(),p=m!==void 0?once_l(m):()=>{};o==="enter"&&(t.removeAttribute("hidden"),t.style.display="");let l=(0,match/* match */.E)(o,{enter:()=>e.enter,leave:()=>e.leave}),a=(0,match/* match */.E)(o,{enter:()=>e.enterTo,leave:()=>e.leaveTo}),r=(0,match/* match */.E)(o,{enter:()=>e.enterFrom,leave:()=>e.leaveFrom});return v(t,...e.enter,...e.enterTo,...e.enterFrom,...e.leave,...e.leaveFrom,...e.leaveTo,...e.entered),d(t,...l,...r),u.nextFrame(()=>{v(t,...r),d(t,...a),F(t,()=>(v(t,...l),d(t,...e.entered),p()))}),u.dispose}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-disposables.js
var use_disposables = __webpack_require__(40566);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-transition.js
function use_transition_D({container:i,direction:t,classes:o,onStart:s,onStop:u}){let a=(0,use_is_mounted/* useIsMounted */.t)(),c=(0,use_disposables/* useDisposables */.G)(),r=(0,use_latest_value/* useLatestValue */.E)(t);(0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>{let e=(0,disposables/* disposables */.k)();c.add(e.dispose);let n=i.current;if(n&&r.current!=="idle"&&a.current)return e.dispose(),s.current(r.current),e.add(y(n,o.current,r.current==="enter",()=>{e.dispose(),u.current(r.current)})),e.dispose},[t])}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-event.js
var use_event = __webpack_require__(78099);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/class-names.js
var class_names = __webpack_require__(5943);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-flags.js
function c(a=0){let[l,r]=(0,react_.useState)(a),t=(0,use_is_mounted/* useIsMounted */.t)(),o=(0,react_.useCallback)(e=>{t.current&&r(u=>u|e)},[l,t]),m=(0,react_.useCallback)(e=>Boolean(l&e),[l]),s=(0,react_.useCallback)(e=>{t.current&&r(u=>u&~e)},[r,t]),g=(0,react_.useCallback)(e=>{t.current&&r(u=>u^e)},[r]);return{flags:l,addFlag:o,hasFlag:m,removeFlag:s,toggleFlag:g}}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/transitions/transition.js
function x(t=""){return t.split(" ").filter(n=>n.trim().length>1)}let I=(0,react_.createContext)(null);I.displayName="TransitionContext";var Ce=(r=>(r.Visible="visible",r.Hidden="hidden",r))(Ce||{});function Ee(){let t=(0,react_.useContext)(I);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}function be(){let t=(0,react_.useContext)(_);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}let _=(0,react_.createContext)(null);_.displayName="NestingContext";function M(t){return"children"in t?M(t.children):t.current.filter(({el:n})=>n.current!==null).filter(({state:n})=>n==="visible").length>0}function re(t,n){let r=(0,use_latest_value/* useLatestValue */.E)(t),o=(0,react_.useRef)([]),N=(0,use_is_mounted/* useIsMounted */.t)(),H=(0,use_disposables/* useDisposables */.G)(),p=(0,use_event/* useEvent */.z)((s,e=render/* RenderStrategy */.l4.Hidden)=>{let a=o.current.findIndex(({el:i})=>i===s);a!==-1&&((0,match/* match */.E)(e,{[render/* RenderStrategy */.l4.Unmount](){o.current.splice(a,1)},[render/* RenderStrategy */.l4.Hidden](){o.current[a].state="hidden"}}),H.microTask(()=>{var i;!M(o)&&N.current&&((i=r.current)==null||i.call(r))}))}),P=(0,use_event/* useEvent */.z)(s=>{let e=o.current.find(({el:a})=>a===s);return e?e.state!=="visible"&&(e.state="visible"):o.current.push({el:s,state:"visible"}),()=>p(s,render/* RenderStrategy */.l4.Unmount)}),h=(0,react_.useRef)([]),v=(0,react_.useRef)(Promise.resolve()),T=(0,react_.useRef)({enter:[],leave:[],idle:[]}),g=(0,use_event/* useEvent */.z)((s,e,a)=>{h.current.splice(0),n&&(n.chains.current[e]=n.chains.current[e].filter(([i])=>i!==s)),n==null||n.chains.current[e].push([s,new Promise(i=>{h.current.push(i)})]),n==null||n.chains.current[e].push([s,new Promise(i=>{Promise.all(T.current[e].map(([l,R])=>R)).then(()=>i())})]),e==="enter"?v.current=v.current.then(()=>n==null?void 0:n.wait.current).then(()=>a(e)):a(e)}),f=(0,use_event/* useEvent */.z)((s,e,a)=>{Promise.all(T.current[e].splice(0).map(([i,l])=>l)).then(()=>{var i;(i=h.current.shift())==null||i()}).then(()=>a(e))});return (0,react_.useMemo)(()=>({children:o,register:P,unregister:p,onStart:g,onStop:f,wait:v,chains:T}),[P,p,o,g,f,T,v])}function Se(){}let xe=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function ie(t){var r;let n={};for(let o of xe)n[o]=(r=t[o])!=null?r:Se;return n}function Pe(t){let n=(0,react_.useRef)(ie(t));return (0,react_.useEffect)(()=>{n.current=ie(t)},[t]),n}let Re="div",oe=render/* Features */.AN.RenderStrategy;function ye(t,n){let{beforeEnter:r,afterEnter:o,beforeLeave:N,afterLeave:H,enter:p,enterFrom:P,enterTo:h,entered:v,leave:T,leaveFrom:g,leaveTo:f,...s}=t,e=(0,react_.useRef)(null),a=(0,use_sync_refs/* useSyncRefs */.T)(e,n),i=s.unmount?render/* RenderStrategy */.l4.Unmount:render/* RenderStrategy */.l4.Hidden,{show:l,appear:R,initial:d}=Ee(),[u,U]=(0,react_.useState)(l?"visible":"hidden"),K=be(),{register:L,unregister:w}=K,j=(0,react_.useRef)(null);(0,react_.useEffect)(()=>L(e),[L,e]),(0,react_.useEffect)(()=>{if(i===render/* RenderStrategy */.l4.Hidden&&e.current){if(l&&u!=="visible"){U("visible");return}return (0,match/* match */.E)(u,{["hidden"]:()=>w(e),["visible"]:()=>L(e)})}},[u,e,L,w,l,i]);let k=(0,use_latest_value/* useLatestValue */.E)({enter:x(p),enterFrom:x(P),enterTo:x(h),entered:x(v),leave:x(T),leaveFrom:x(g),leaveTo:x(f)}),O=Pe({beforeEnter:r,afterEnter:o,beforeLeave:N,afterLeave:H}),G=(0,use_server_handoff_complete/* useServerHandoffComplete */.H)();(0,react_.useEffect)(()=>{if(G&&u==="visible"&&e.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[e,u,G]);let B=d&&!R,ae=(()=>!G||B||j.current===l?"idle":l?"enter":"leave")(),D=c(0),le=(0,use_event/* useEvent */.z)(C=>(0,match/* match */.E)(C,{enter:()=>{D.addFlag(open_closed/* State */.ZM.Opening),O.current.beforeEnter()},leave:()=>{D.addFlag(open_closed/* State */.ZM.Closing),O.current.beforeLeave()},idle:()=>{}})),ue=(0,use_event/* useEvent */.z)(C=>(0,match/* match */.E)(C,{enter:()=>{D.removeFlag(open_closed/* State */.ZM.Opening),O.current.afterEnter()},leave:()=>{D.removeFlag(open_closed/* State */.ZM.Closing),O.current.afterLeave()},idle:()=>{}})),V=re(()=>{U("hidden"),w(e)},K);use_transition_D({container:e,classes:k,direction:ae,onStart:(0,use_latest_value/* useLatestValue */.E)(C=>{V.onStart(e,C,le)}),onStop:(0,use_latest_value/* useLatestValue */.E)(C=>{V.onStop(e,C,ue),C==="leave"&&!M(V)&&(U("hidden"),w(e))})}),(0,react_.useEffect)(()=>{B&&(i===render/* RenderStrategy */.l4.Hidden?j.current=null:j.current=l)},[l,B,u]);let J=s,Te={ref:a};return R&&l&&d&&(J={...J,className:(0,class_names/* classNames */.A)(s.className,...k.current.enter,...k.current.enterFrom)}),react_.createElement(_.Provider,{value:V},react_.createElement(open_closed/* OpenClosedProvider */.up,{value:(0,match/* match */.E)(u,{["visible"]:open_closed/* State */.ZM.Open,["hidden"]:open_closed/* State */.ZM.Closed})|D.flags},(0,render/* render */.sY)({ourProps:Te,theirProps:J,defaultTag:Re,features:oe,visible:u==="visible",name:"Transition.Child"})))}function Ne(t,n){let{show:r,appear:o=!1,unmount:N,...H}=t,p=(0,react_.useRef)(null),P=(0,use_sync_refs/* useSyncRefs */.T)(p,n);(0,use_server_handoff_complete/* useServerHandoffComplete */.H)();let h=(0,open_closed/* useOpenClosed */.oJ)();if(r===void 0&&h!==null&&(r=(h&open_closed/* State */.ZM.Open)===open_closed/* State */.ZM.Open),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[v,T]=(0,react_.useState)(r?"visible":"hidden"),g=re(()=>{T("hidden")}),[f,s]=(0,react_.useState)(!0),e=(0,react_.useRef)([r]);(0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>{f!==!1&&e.current[e.current.length-1]!==r&&(e.current.push(r),s(!1))},[e,r]);let a=(0,react_.useMemo)(()=>({show:r,appear:o,initial:f}),[r,o,f]);(0,react_.useEffect)(()=>{if(r)T("visible");else if(!M(g))T("hidden");else{let d=p.current;if(!d)return;let u=d.getBoundingClientRect();u.x===0&&u.y===0&&u.width===0&&u.height===0&&T("hidden")}},[r,g]);let i={unmount:N},l=(0,use_event/* useEvent */.z)(()=>{var d;f&&s(!1),(d=t.beforeEnter)==null||d.call(t)}),R=(0,use_event/* useEvent */.z)(()=>{var d;f&&s(!1),(d=t.beforeLeave)==null||d.call(t)});return react_.createElement(_.Provider,{value:g},react_.createElement(I.Provider,{value:a},(0,render/* render */.sY)({ourProps:{...i,as:react_.Fragment,children:react_.createElement(se,{ref:P,...i,...H,beforeEnter:l,beforeLeave:R})},theirProps:{},defaultTag:react_.Fragment,features:oe,visible:v==="visible",name:"Transition"})))}function He(t,n){let r=(0,react_.useContext)(I)!==null,o=(0,open_closed/* useOpenClosed */.oJ)()!==null;return react_.createElement(react_.Fragment,null,!r&&o?react_.createElement(z,{ref:n,...t}):react_.createElement(se,{ref:n,...t}))}let z=(0,render/* forwardRefWithAs */.yV)(Ne),se=(0,render/* forwardRefWithAs */.yV)(ye),De=(0,render/* forwardRefWithAs */.yV)(He),$e=Object.assign(z,{Child:De,Root:z});


/***/ }),

/***/ 40566:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(226);
function p(){let[e]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__/* .disposables */ .k);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>()=>e.dispose(),[e]),e}


/***/ }),

/***/ 99395:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZM: () => (/* binding */ d),
/* harmony export */   oJ: () => (/* binding */ C),
/* harmony export */   up: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);n.displayName="OpenClosedContext";var d=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(d||{});function C(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(n)}function c({value:o,children:r}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(n.Provider,{value:o},r)}


/***/ }),

/***/ 226:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _micro_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20940);
function o(){let n=[],r={addEventListener(e,t,s,a){return e.addEventListener(t,s,a),r.add(()=>e.removeEventListener(t,s,a))},requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return r.add(()=>cancelAnimationFrame(t))},nextFrame(...e){return r.requestAnimationFrame(()=>r.requestAnimationFrame(...e))},setTimeout(...e){let t=setTimeout(...e);return r.add(()=>clearTimeout(t))},microTask(...e){let t={current:!0};return (0,_micro_task_js__WEBPACK_IMPORTED_MODULE_0__/* .microTask */ .Y)(()=>{t.current&&e[0]()}),r.add(()=>{t.current=!1})},style(e,t,s){let a=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:s}),this.add(()=>{Object.assign(e.style,{[t]:a})})},group(e){let t=o();return e(t),this.add(()=>t.dispose())},add(e){return n.push(e),()=>{let t=n.indexOf(e);if(t>=0)for(let s of n.splice(t,1))s()}},dispose(){for(let e of n.splice(0))e()}};return r}


/***/ })

};
;