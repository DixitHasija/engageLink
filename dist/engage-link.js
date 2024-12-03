(function(O){typeof define=="function"&&define.amd?define(O):O()})(function(){"use strict";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},kt=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=e[n++];t[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=e[n++],o=e[n++],s=e[n++],c=((i&7)<<18|(a&63)<<12|(o&63)<<6|s&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const a=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|o&63)}}return t.join("")},ye={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const a=e[i],o=i+1<e.length,s=o?e[i+1]:0,c=i+2<e.length,d=c?e[i+2]:0,l=a>>2,g=(a&3)<<4|s>>4;let _=(s&15)<<2|d>>6,m=d&63;c||(m=64,o||(_=64)),r.push(n[l],n[g],n[_],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(O(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):kt(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const a=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const d=i<e.length?n[e.charAt(i)]:64;++i;const g=i<e.length?n[e.charAt(i)]:64;if(++i,a==null||s==null||d==null||g==null)throw new Ot;const _=a<<2|s>>4;if(r.push(_),d!==64){const m=s<<4&240|d>>2;if(r.push(m),g!==64){const la=d<<6&192|g;r.push(la)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Ot extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Mt=function(e){const t=O(e);return ye.encodeByteArray(t,!0)},Ie=function(e){return Mt(e).replace(/\./g,"")},Rt=function(e){try{return ye.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=()=>Nt().__FIREBASE_DEFAULTS__,Bt=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Pt=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Rt(e[1]);return t&&JSON.parse(t)},Ft=()=>{try{return $t()||Bt()||Pt()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ve=()=>{var e;return(e=Ft())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function xt(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function z(){try{return typeof indexedDB=="object"}catch{return!1}}function K(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var a;t(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){t(n)}})}function Ee(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt="FirebaseError";class T extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=jt,Object.setPrototypeOf(this,T.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,M.prototype.create)}}class M{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,a=this.errors[t],o=a?Ht(a,r):"Error",s=`${this.serviceName}: ${o} (${i}).`;return new T(i,s,r)}}function Ht(e,t){return e.replace(Vt,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Vt=/\{\$([^}]+)}/g;function L(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const a=e[i],o=t[i];if(_e(a)&&_e(o)){if(!L(a,o))return!1}else if(a!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function _e(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=1e3,Wt=2,zt=4*60*60*1e3,Kt=.5;function Se(e,t=Ut,n=Wt){const r=t*Math.pow(n,e),i=Math.round(Kt*r*(Math.random()-.5)*2);return Math.min(zt,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e){return e&&e._delegate?e._delegate:e}class b{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Lt;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Yt(t))try{this.getOrInitializeService({instanceIdentifier:A})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(t=A){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=A){return this.instances.has(t)}getOptions(t=A){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,o]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(a);r===s&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;a.add(t),this.onInitCallbacks.set(i,a);const o=this.instances.get(i);return o&&t(o,i),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Gt(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=A){return this.component?this.component.multipleInstances?t:A:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gt(e){return e===A?void 0:e}function Yt(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new qt(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var u;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(u||(u={}));const Xt={debug:u.DEBUG,verbose:u.VERBOSE,info:u.INFO,warn:u.WARN,error:u.ERROR,silent:u.SILENT},Qt=u.INFO,Zt={[u.DEBUG]:"log",[u.VERBOSE]:"log",[u.INFO]:"info",[u.WARN]:"warn",[u.ERROR]:"error"},en=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Zt[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Te{constructor(t){this.name=t,this._logLevel=Qt,this._logHandler=en,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in u))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Xt[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,u.DEBUG,...t),this._logHandler(this,u.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,u.VERBOSE,...t),this._logHandler(this,u.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,u.INFO,...t),this._logHandler(this,u.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,u.WARN,...t),this._logHandler(this,u.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,u.ERROR,...t),this._logHandler(this,u.ERROR,...t)}}const tn=(e,t)=>t.some(n=>e instanceof n);let Ae,De;function nn(){return Ae||(Ae=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rn(){return De||(De=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ce=new WeakMap,q=new WeakMap,ke=new WeakMap,G=new WeakMap,Y=new WeakMap;function an(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",a),e.removeEventListener("error",o)},a=()=>{n(y(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",a),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Ce.set(n,e)}).catch(()=>{}),Y.set(t,e),t}function on(e){if(q.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",o),e.removeEventListener("abort",o)},a=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",a),e.addEventListener("error",o),e.addEventListener("abort",o)});q.set(e,t)}let J={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return q.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ke.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return y(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function sn(e){J=e(J)}function cn(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(X(this),t,...n);return ke.set(r,t.sort?t.sort():[t]),y(r)}:rn().includes(e)?function(...t){return e.apply(X(this),t),y(Ce.get(this))}:function(...t){return y(e.apply(X(this),t))}}function dn(e){return typeof e=="function"?cn(e):(e instanceof IDBTransaction&&on(e),tn(e,nn())?new Proxy(e,J):e)}function y(e){if(e instanceof IDBRequest)return an(e);if(G.has(e))return G.get(e);const t=dn(e);return t!==e&&(G.set(e,t),Y.set(t,e)),t}const X=e=>Y.get(e);function x(e,t,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const o=indexedDB.open(e,t),s=y(o);return r&&o.addEventListener("upgradeneeded",c=>{r(y(o.result),c.oldVersion,c.newVersion,y(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),s.then(c=>{a&&c.addEventListener("close",()=>a()),i&&c.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),s}function Q(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",r=>t(r.oldVersion,r)),y(n).then(()=>{})}const ln=["get","getKey","getAll","getAllKeys","count"],un=["put","add","delete","clear"],Z=new Map;function Oe(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Z.get(t))return Z.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=un.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ln.includes(n)))return;const a=async function(o,...s){const c=this.transaction(o,i?"readwrite":"readonly");let d=c.store;return r&&(d=d.index(s.shift())),(await Promise.all([d[n](...s),i&&c.done]))[0]};return Z.set(t,a),a}sn(e=>({...e,get:(t,n,r)=>Oe(t,n)||e.get(t,n,r),has:(t,n)=>!!Oe(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hn(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hn(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ee="@firebase/app",Me="0.10.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=new Te("@firebase/app"),pn="@firebase/app-compat",gn="@firebase/analytics-compat",mn="@firebase/analytics",bn="@firebase/app-check-compat",wn="@firebase/app-check",yn="@firebase/auth",In="@firebase/auth-compat",vn="@firebase/database",En="@firebase/data-connect",_n="@firebase/database-compat",Sn="@firebase/functions",Tn="@firebase/functions-compat",An="@firebase/installations",Dn="@firebase/installations-compat",Cn="@firebase/messaging",kn="@firebase/messaging-compat",On="@firebase/performance",Mn="@firebase/performance-compat",Rn="@firebase/remote-config",Nn="@firebase/remote-config-compat",$n="@firebase/storage",Bn="@firebase/storage-compat",Pn="@firebase/firestore",Fn="@firebase/vertexai",Ln="@firebase/firestore-compat",xn="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te="[DEFAULT]",jn={[ee]:"fire-core",[pn]:"fire-core-compat",[mn]:"fire-analytics",[gn]:"fire-analytics-compat",[wn]:"fire-app-check",[bn]:"fire-app-check-compat",[yn]:"fire-auth",[In]:"fire-auth-compat",[vn]:"fire-rtdb",[En]:"fire-data-connect",[_n]:"fire-rtdb-compat",[Sn]:"fire-fn",[Tn]:"fire-fn-compat",[An]:"fire-iid",[Dn]:"fire-iid-compat",[Cn]:"fire-fcm",[kn]:"fire-fcm-compat",[On]:"fire-perf",[Mn]:"fire-perf-compat",[Rn]:"fire-rc",[Nn]:"fire-rc-compat",[$n]:"fire-gcs",[Bn]:"fire-gcs-compat",[Pn]:"fire-fst",[Ln]:"fire-fst-compat",[Fn]:"fire-vertex","fire-js":"fire-js",[xn]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j=new Map,Hn=new Map,ne=new Map;function Re(e,t){try{e.container.addComponent(t)}catch(n){I.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function v(e){const t=e.name;if(ne.has(t))return I.debug(`There were multiple attempts to register component ${t}.`),!1;ne.set(t,e);for(const n of j.values())Re(n,e);for(const n of Hn.values())Re(n,e);return!0}function N(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},S=new M("app","Firebase",Vn);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new b("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw S.create("app-deleted",{appName:this._name})}}function Ne(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:te,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw S.create("bad-app-name",{appName:String(i)});if(n||(n=ve()),!n)throw S.create("no-options");const a=j.get(i);if(a){if(L(n,a.options)&&L(r,a.config))return a;throw S.create("duplicate-app",{appName:i})}const o=new Jt(i);for(const c of ne.values())o.addComponent(c);const s=new Un(n,r,o);return j.set(i,s),s}function $e(e=te){const t=j.get(e);if(!t&&e===te&&ve())return Ne();if(!t)throw S.create("no-app",{appName:e});return t}function w(e,t,n){var r;let i=(r=jn[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){const s=[`Unable to register library "${i}" with version "${t}":`];a&&s.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&o&&s.push("and"),o&&s.push(`version name "${t}" contains illegal characters (whitespace or "/")`),I.warn(s.join(" "));return}v(new b(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn="firebase-heartbeat-database",zn=1,$="firebase-heartbeat-store";let re=null;function Be(){return re||(re=x(Wn,zn,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore($)}catch(n){console.warn(n)}}}}).catch(e=>{throw S.create("idb-open",{originalErrorMessage:e.message})})),re}async function Kn(e){try{const n=(await Be()).transaction($),r=await n.objectStore($).get(Fe(e));return await n.done,r}catch(t){if(t instanceof T)I.warn(t.message);else{const n=S.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});I.warn(n.message)}}}async function Pe(e,t){try{const r=(await Be()).transaction($,"readwrite");await r.objectStore($).put(t,Fe(e)),await r.done}catch(n){if(n instanceof T)I.warn(n.message);else{const r=S.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});I.warn(r.message)}}}function Fe(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=1024,Gn=30*24*60*60*1e3;class Yn{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Xn(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Le();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(o=>o.date===a)?void 0:(this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const s=new Date(o.date).valueOf();return Date.now()-s<=Gn}),this._storage.overwrite(this._heartbeatsCache))}catch(r){I.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Le(),{heartbeatsToSend:r,unsentEntries:i}=Jn(this._heartbeatsCache.heartbeats),a=Ie(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(n){return I.warn(n),""}}}function Le(){return new Date().toISOString().substring(0,10)}function Jn(e,t=qn){const n=[];let r=e.slice();for(const i of e){const a=n.find(o=>o.agent===i.agent);if(a){if(a.dates.push(i.date),xe(n)>t){a.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),xe(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Xn{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return z()?K().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Kn(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pe(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pe(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function xe(e){return Ie(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(e){v(new b("platform-logger",t=>new fn(t),"PRIVATE")),v(new b("heartbeat",t=>new Yn(t),"PRIVATE")),w(ee,Me,e),w(ee,Me,"esm2017"),w("fire-js","")}Qn("");var Zn="firebase",er="11.0.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */w(Zn,er,"app");const je="@firebase/installations",ie="0.6.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=1e4,Ve=`w:${ie}`,Ue="FIS_v2",tr="https://firebaseinstallations.googleapis.com/v1",nr=60*60*1e3,rr="installations",ir="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},D=new M(rr,ir,ar);function We(e){return e instanceof T&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze({projectId:e}){return`${tr}/projects/${e}/installations`}function Ke(e){return{token:e.token,requestStatus:2,expiresIn:sr(e.expiresIn),creationTime:Date.now()}}async function qe(e,t){const r=(await t.json()).error;return D.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Ge({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function or(e,{refreshToken:t}){const n=Ge(e);return n.append("Authorization",cr(t)),n}async function Ye(e){const t=await e();return t.status>=500&&t.status<600?e():t}function sr(e){return Number(e.replace("s","000"))}function cr(e){return`${Ue} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dr({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=ze(e),i=Ge(e),a=t.getImmediate({optional:!0});if(a){const d=await a.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const o={fid:n,authVersion:Ue,appId:e.appId,sdkVersion:Ve},s={method:"POST",headers:i,body:JSON.stringify(o)},c=await Ye(()=>fetch(r,s));if(c.ok){const d=await c.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:Ke(d.authToken)}}else throw await qe("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=/^[cdef][\w-]{21}$/,ae="";function fr(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=hr(e);return ur.test(n)?n:ae}catch{return ae}}function hr(e){return lr(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe=new Map;function Qe(e,t){const n=H(e);Ze(n,t),pr(n,t)}function Ze(e,t){const n=Xe.get(e);if(n)for(const r of n)r(t)}function pr(e,t){const n=gr();n&&n.postMessage({key:e,fid:t}),mr()}let C=null;function gr(){return!C&&"BroadcastChannel"in self&&(C=new BroadcastChannel("[Firebase] FID Change"),C.onmessage=e=>{Ze(e.data.key,e.data.fid)}),C}function mr(){Xe.size===0&&C&&(C.close(),C=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br="firebase-installations-database",wr=1,k="firebase-installations-store";let oe=null;function se(){return oe||(oe=x(br,wr,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(k)}}})),oe}async function V(e,t){const n=H(e),i=(await se()).transaction(k,"readwrite"),a=i.objectStore(k),o=await a.get(n);return await a.put(t,n),await i.done,(!o||o.fid!==t.fid)&&Qe(e,t.fid),t}async function et(e){const t=H(e),r=(await se()).transaction(k,"readwrite");await r.objectStore(k).delete(t),await r.done}async function U(e,t){const n=H(e),i=(await se()).transaction(k,"readwrite"),a=i.objectStore(k),o=await a.get(n),s=t(o);return s===void 0?await a.delete(n):await a.put(s,n),await i.done,s&&(!o||o.fid!==s.fid)&&Qe(e,s.fid),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ce(e){let t;const n=await U(e.appConfig,r=>{const i=yr(r),a=Ir(e,i);return t=a.registrationPromise,a.installationEntry});return n.fid===ae?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function yr(e){const t=e||{fid:fr(),registrationStatus:0};return nt(t)}function Ir(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(D.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=vr(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Er(e)}:{installationEntry:t}}async function vr(e,t){try{const n=await dr(e,t);return V(e.appConfig,n)}catch(n){throw We(n)&&n.customData.serverCode===409?await et(e.appConfig):await V(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Er(e){let t=await tt(e.appConfig);for(;t.registrationStatus===1;)await Je(100),t=await tt(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ce(e);return r||n}return t}function tt(e){return U(e,t=>{if(!t)throw D.create("installation-not-found");return nt(t)})}function nt(e){return _r(e)?{fid:e.fid,registrationStatus:0}:e}function _r(e){return e.registrationStatus===1&&e.registrationTime+He<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sr({appConfig:e,heartbeatServiceProvider:t},n){const r=Tr(e,n),i=or(e,n),a=t.getImmediate({optional:!0});if(a){const d=await a.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const o={installation:{sdkVersion:Ve,appId:e.appId}},s={method:"POST",headers:i,body:JSON.stringify(o)},c=await Ye(()=>fetch(r,s));if(c.ok){const d=await c.json();return Ke(d)}else throw await qe("Generate Auth Token",c)}function Tr(e,{fid:t}){return`${ze(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function de(e,t=!1){let n;const r=await U(e.appConfig,a=>{if(!it(a))throw D.create("not-registered");const o=a.authToken;if(!t&&Cr(o))return a;if(o.requestStatus===1)return n=Ar(e,t),a;{if(!navigator.onLine)throw D.create("app-offline");const s=Or(a);return n=Dr(e,s),s}});return n?await n:r.authToken}async function Ar(e,t){let n=await rt(e.appConfig);for(;n.authToken.requestStatus===1;)await Je(100),n=await rt(e.appConfig);const r=n.authToken;return r.requestStatus===0?de(e,t):r}function rt(e){return U(e,t=>{if(!it(t))throw D.create("not-registered");const n=t.authToken;return Mr(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Dr(e,t){try{const n=await Sr(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await V(e.appConfig,r),n}catch(n){if(We(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await et(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await V(e.appConfig,r)}throw n}}function it(e){return e!==void 0&&e.registrationStatus===2}function Cr(e){return e.requestStatus===2&&!kr(e)}function kr(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+nr}function Or(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Mr(e){return e.requestStatus===1&&e.requestTime+He<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rr(e){const t=e,{installationEntry:n,registrationPromise:r}=await ce(t);return r?r.catch(console.error):de(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nr(e,t=!1){const n=e;return await $r(n),(await de(n,t)).token}async function $r(e){const{registrationPromise:t}=await ce(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(e){if(!e||!e.options)throw le("App Configuration");if(!e.name)throw le("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw le(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function le(e){return D.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="installations",Pr="installations-internal",Fr=e=>{const t=e.getProvider("app").getImmediate(),n=Br(t),r=N(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Lr=e=>{const t=e.getProvider("app").getImmediate(),n=N(t,at).getImmediate();return{getId:()=>Rr(n),getToken:i=>Nr(n,i)}};function xr(){v(new b(at,Fr,"PUBLIC")),v(new b(Pr,Lr,"PRIVATE"))}xr(),w(je,ie),w(je,ie,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W="analytics",jr="firebase_id",Hr="origin",Vr=60*1e3,Ur="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ue="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=new Te("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},p=new M("analytics","Analytics",Wr);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(e){if(!e.startsWith(ue)){const t=p.create("invalid-gtag-resource",{gtagURL:e});return h.warn(t.message),""}return e}function ot(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Kr(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function qr(e,t){const n=Kr("firebase-js-sdk-policy",{createScriptURL:zr}),r=document.createElement("script"),i=`${ue}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Gr(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Yr(e,t,n,r,i,a){const o=r[i];try{if(o)await t[o];else{const c=(await ot(n)).find(d=>d.measurementId===i);c&&await t[c.appId]}}catch(s){h.error(s)}e("config",i,a)}async function Jr(e,t,n,r,i){try{let a=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const s=await ot(n);for(const c of o){const d=s.find(g=>g.measurementId===c),l=d&&t[d.appId];if(l)a.push(l);else{a=[];break}}}a.length===0&&(a=Object.values(t)),await Promise.all(a),e("event",r,i||{})}catch(a){h.error(a)}}function Xr(e,t,n,r){async function i(a,...o){try{if(a==="event"){const[s,c]=o;await Jr(e,t,n,s,c)}else if(a==="config"){const[s,c]=o;await Yr(e,t,n,r,s,c)}else if(a==="consent"){const[s,c]=o;e("consent",s,c)}else if(a==="get"){const[s,c,d]=o;e("get",s,c,d)}else if(a==="set"){const[s]=o;e("set",s)}else e(a,...o)}catch(s){h.error(s)}}return i}function Qr(e,t,n,r,i){let a=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(a=window[i]),window[i]=Xr(a,e,t,n),{gtagCore:a,wrappedGtag:window[i]}}function Zr(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(ue)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=30,ti=1e3;class ni{constructor(t={},n=ti){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const st=new ni;function ri(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function ii(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:ri(r)},a=Ur.replace("{app-id}",n),o=await fetch(a,i);if(o.status!==200&&o.status!==304){let s="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(s=c.error.message)}catch{}throw p.create("config-fetch-failed",{httpStatus:o.status,responseMessage:s})}return o.json()}async function ai(e,t=st,n){const{appId:r,apiKey:i,measurementId:a}=e.options;if(!r)throw p.create("no-app-id");if(!i){if(a)return{measurementId:a,appId:r};throw p.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new ci;return setTimeout(async()=>{s.abort()},Vr),ct({appId:r,apiKey:i,measurementId:a},o,s,t)}async function ct(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=st){var a;const{appId:o,measurementId:s}=e;try{await oi(r,t)}catch(c){if(s)return h.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:s};throw c}try{const c=await ii(e);return i.deleteThrottleMetadata(o),c}catch(c){const d=c;if(!si(d)){if(i.deleteThrottleMetadata(o),s)return h.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:o,measurementId:s};throw c}const l=Number((a=d==null?void 0:d.customData)===null||a===void 0?void 0:a.httpStatus)===503?Se(n,i.intervalMillis,ei):Se(n,i.intervalMillis),g={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return i.setThrottleMetadata(o,g),h.debug(`Calling attemptFetch again in ${l} millis`),ct(e,g,r,i)}}function oi(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),a=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(a),r(p.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function si(e){if(!(e instanceof T)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class ci{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function di(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const a=await t,o=Object.assign(Object.assign({},r),{send_to:a});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(){if(z())try{await K()}catch(e){return h.warn(p.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return h.warn(p.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ui(e,t,n,r,i,a,o){var s;const c=ai(e);c.then(m=>{n[m.measurementId]=m.appId,e.options.measurementId&&m.measurementId!==e.options.measurementId&&h.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>h.error(m)),t.push(c);const d=li().then(m=>{if(m)return r.getId()}),[l,g]=await Promise.all([c,d]);Zr(a)||qr(a,l.measurementId),i("js",new Date);const _=(s=o==null?void 0:o.config)!==null&&s!==void 0?s:{};return _[Hr]="firebase",_.update=!0,g!=null&&(_[jr]=g),i("config",l.measurementId,_),l.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t){this.app=t}_delete(){return delete B[this.app.options.appId],Promise.resolve()}}let B={},dt=[];const lt={};let fe="dataLayer",hi="gtag",ut,ft,ht=!1;function pi(){const e=[];if(xt()&&e.push("This is a browser extension environment."),Ee()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=p.create("invalid-analytics-context",{errorInfo:t});h.warn(n.message)}}function gi(e,t,n){pi();const r=e.options.appId;if(!r)throw p.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)h.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw p.create("no-api-key");if(B[r]!=null)throw p.create("already-exists",{id:r});if(!ht){Gr(fe);const{wrappedGtag:a,gtagCore:o}=Qr(B,dt,lt,fe,hi);ft=a,ut=o,ht=!0}return B[r]=ui(e,dt,lt,t,ut,fe,n),new fi(e)}function mi(e=$e()){e=R(e);const t=N(e,W);return t.isInitialized()?t.getImmediate():bi(e)}function bi(e,t={}){const n=N(e,W);if(n.isInitialized()){const i=n.getImmediate();if(L(t,n.getOptions()))return i;throw p.create("already-initialized")}return n.initialize({options:t})}function wi(e,t,n,r){e=R(e),di(ft,B[e.app.options.appId],t,n,r).catch(i=>h.error(i))}const pt="@firebase/analytics",gt="0.10.9";function yi(){v(new b(W,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return gi(r,i,n)},"PUBLIC")),v(new b("analytics-internal",e,"PRIVATE")),w(pt,gt),w(pt,gt,"esm2017");function e(t){try{const n=t.getProvider(W).getImmediate();return{logEvent:(r,i,a)=>wi(n,r,i,a)}}catch(n){throw p.create("interop-component-reg-failed",{reason:n})}}}yi();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii="/firebase-messaging-sw.js",vi="/firebase-cloud-messaging-push-scope",mt="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Ei="https://fcmregistrations.googleapis.com/v1",bt="google.c.a.c_id",_i="google.c.a.c_l",Si="google.c.a.ts",Ti="google.c.a.e";var wt;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(wt||(wt={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var P;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(P||(P={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Ai(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let a=0;a<r.length;++a)i[a]=r.charCodeAt(a);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he="fcm_token_details_db",Di=5,yt="fcm_token_object_Store";async function Ci(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(a=>a.name).includes(he))return null;let t=null;return(await x(he,Di,{upgrade:async(r,i,a,o)=>{var s;if(i<2||!r.objectStoreNames.contains(yt))return;const c=o.objectStore(yt),d=await c.index("fcmSenderId").get(e);if(await c.clear(),!!d){if(i===2){const l=d;if(!l.auth||!l.p256dh||!l.endpoint)return;t={token:l.fcmToken,createTime:(s=l.createTime)!==null&&s!==void 0?s:Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:typeof l.vapidKey=="string"?l.vapidKey:E(l.vapidKey)}}}else if(i===3){const l=d;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:E(l.auth),p256dh:E(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:E(l.vapidKey)}}}else if(i===4){const l=d;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:E(l.auth),p256dh:E(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:E(l.vapidKey)}}}}}})).close(),await Q(he),await Q("fcm_vapid_details_db"),await Q("undefined"),ki(t)?t:null}function ki(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi="firebase-messaging-database",Mi=1,F="firebase-messaging-store";let pe=null;function It(){return pe||(pe=x(Oi,Mi,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(F)}}})),pe}async function Ri(e){const t=vt(e),r=await(await It()).transaction(F).objectStore(F).get(t);if(r)return r;{const i=await Ci(e.appConfig.senderId);if(i)return await ge(e,i),i}}async function ge(e,t){const n=vt(e),i=(await It()).transaction(F,"readwrite");return await i.objectStore(F).put(t,n),await i.done,t}function vt({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},f=new M("messaging","Messaging",Ni);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $i(e,t){const n=await be(e),r=Et(t),i={method:"POST",headers:n,body:JSON.stringify(r)};let a;try{a=await(await fetch(me(e.appConfig),i)).json()}catch(o){throw f.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(a.error){const o=a.error.message;throw f.create("token-subscribe-failed",{errorInfo:o})}if(!a.token)throw f.create("token-subscribe-no-token");return a.token}async function Bi(e,t){const n=await be(e),r=Et(t.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let a;try{a=await(await fetch(`${me(e.appConfig)}/${t.token}`,i)).json()}catch(o){throw f.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(a.error){const o=a.error.message;throw f.create("token-update-failed",{errorInfo:o})}if(!a.token)throw f.create("token-update-no-token");return a.token}async function Pi(e,t){const r={method:"DELETE",headers:await be(e)};try{const a=await(await fetch(`${me(e.appConfig)}/${t}`,r)).json();if(a.error){const o=a.error.message;throw f.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw f.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function me({projectId:e}){return`${Ei}/projects/${e}/registrations`}async function be({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Et({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:t,p256dh:e}};return r!==mt&&(i.web.applicationPubKey=r),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=7*24*60*60*1e3;async function Li(e){const t=await ji(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:E(t.getKey("auth")),p256dh:E(t.getKey("p256dh"))},r=await Ri(e.firebaseDependencies);if(r){if(Hi(r.subscriptionOptions,n))return Date.now()>=r.createTime+Fi?xi(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Pi(e.firebaseDependencies,r.token)}catch(i){console.warn(i)}return _t(e.firebaseDependencies,n)}else return _t(e.firebaseDependencies,n)}async function xi(e,t){try{const n=await Bi(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await ge(e.firebaseDependencies,r),n}catch(n){throw n}}async function _t(e,t){const r={token:await $i(e,t),createTime:Date.now(),subscriptionOptions:t};return await ge(e,r),r.token}async function ji(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Ai(t)})}function Hi(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,i=t.auth===e.auth,a=t.p256dh===e.p256dh;return n&&r&&i&&a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Vi(t,e),Ui(t,e),Wi(t,e),t}function Vi(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const i=t.notification.image;i&&(e.notification.image=i);const a=t.notification.icon;a&&(e.notification.icon=a)}function Ui(e,t){t.data&&(e.data=t.data)}function Wi(e,t){var n,r,i,a,o;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const s=(i=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(a=t.notification)===null||a===void 0?void 0:a.click_action;s&&(e.fcmOptions.link=s);const c=(o=t.fcmOptions)===null||o===void 0?void 0:o.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(e){return typeof e=="object"&&!!e&&bt in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(e){if(!e||!e.options)throw we("App Configuration Object");if(!e.name)throw we("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw we(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function we(e){return f.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=Ki(t);this.firebaseDependencies={app:t,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gi(e){try{e.swRegistration=await navigator.serviceWorker.register(Ii,{scope:vi}),e.swRegistration.update().catch(()=>{})}catch(t){throw f.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yi(e,t){if(!t&&!e.swRegistration&&await Gi(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw f.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ji(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=mt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tt(e,t){if(!navigator)throw f.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw f.create("permission-blocked");return await Ji(e,t==null?void 0:t.vapidKey),await Yi(e,t==null?void 0:t.serviceWorkerRegistration),Li(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xi(e,t,n){const r=Qi(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[bt],message_name:n[_i],message_time:n[Si],message_device_time:Math.floor(Date.now()/1e3)})}function Qi(e){switch(e){case P.NOTIFICATION_CLICKED:return"notification_open";case P.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zi(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===P.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(St(n)):e.onMessageHandler.next(St(n)));const r=n.data;zi(r)&&r[Ti]==="1"&&await Xi(e,n.messageType,r)}const At="@firebase/messaging",Dt="0.12.13";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=e=>{const t=new qi(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Zi(t,n)),t},ta=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>Tt(t,r)}};function na(){v(new b("messaging",ea,"PUBLIC")),v(new b("messaging-internal",ta,"PRIVATE")),w(At,Dt),w(At,Dt,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ra(){try{await K()}catch{return!1}return typeof window<"u"&&z()&&Ee()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(e,t){if(!navigator)throw f.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(e=$e()){return ra().then(t=>{if(!t)throw f.create("unsupported-browser")},t=>{throw f.create("indexed-db-unsupported")}),N(R(e),"messaging").getImmediate()}async function oa(e,t){return e=R(e),Tt(e,t)}function sa(e,t){return e=R(e),ia(e,t)}na();const Ct={apiKey:"AIzaSyCH7S8Nj23Lm9vS8svRZT_Ua8QVZ8bYgbY",authDomain:"test-push-wigzo.firebaseapp.com",projectId:"test-push-wigzo",storageBucket:"test-push-wigzo.firebasestorage.app",messagingSenderId:"833748812904",appId:"1:833748812904:web:55371396d146e8d7c967dd",measurementId:"G-7SQ52GWYRV",vapidKey:"BGDy-d_jQo6a-Ju4scmfMeCzoTVtjEI41p7_ZmmrO3JnGs73r_ghVhYEeiCh2wVv6zCJsnL7fpxV27c5RuzjWGE"},ca=async e=>{const t=Ne(Ct);mi(t);const n=aa();e=e||"/dist/firebase-messaging-sw.js",location.href==="https://srfstage0.wpengine.com/"&&(e="/dist/firebase-messaging-sw.js");const r=async()=>await navigator.serviceWorker.register(e,{});"serviceWorker"in navigator&&r().then(i=>{console.log("Service Worker registered with scope:",i.scope),oa(n,{vapidKey:Ct.vapidKey,serviceWorkerRegistration:i}).then(a=>{if(a){console.log(a);debugger;wigzo&&(wigzo==null||wigzo.registerWebPushHelperV2({token:a},"HTTPS"))}else{debugger;console.log("No registration token available. Request permission to generate one.")}}).catch(a=>{console.log("An error occurred while retrieving token. ",a)}),sa(n,a=>{const o=a.notification?a.notification:a.data,s=o.title,c={body:o.body,icon:o.icon,image:o.image};new Notification(s,c)})}).catch(i=>{console.error("Service Worker registration failed:",i)})},da=e=>{e=e||"/apps/wigzo/fcm_service_worker.js?orgtoken=ixsA_0VyS1GEmAJEW4j3pQ",ca(e)};window.wigzo_en={setupFirebase:da}});
