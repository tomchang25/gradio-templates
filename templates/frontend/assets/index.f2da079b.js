import{S as C,i as A,s as E,e as b,t as S,b as _,f as g,g as p,h as z,x as w,n as v,B as V,ad as ye,I as Me,M as K,l as P,y as Q,A as ve,a as N,C as F,d as L,Y as U,w as X,j as H,k as T,F as je,D as q,o as G,E as O,c as Z,m as J}from"./index.0224e6d0.js";import{E as He}from"./Image.6f2f94f2.js";import{c as Ce}from"./csv.27f5436c.js";import{d as Ae}from"./dsv.7fe76a93.js";import{E as Ee}from"./Model3D.c1b80a8d.js";var Se=Ae("	"),Te=Se.parseRows;function ze(r){let e,t;return{c(){e=b("div"),t=S(r[0]),_(e,"class","gr-sample-number")},m(l,n){g(l,e,n),p(e,t)},p(l,[n]){n&1&&z(t,l[0])},i:w,o:w,d(l){l&&v(e)}}}function De(r,e,t){let{value:l}=e;return r.$$set=n=>{"value"in n&&t(0,l=n.value)},[l]}class Le extends C{constructor(e){super(),A(this,e,De,ze,E,{value:0})}}function Ne(r){let e,t;return{c(){e=b("div"),t=S(r[0]),_(e,"class","gr-sample-dropdown")},m(l,n){g(l,e,n),p(e,t)},p(l,[n]){n&1&&z(t,l[0])},i:w,o:w,d(l){l&&v(e)}}}function Be(r,e,t){let{value:l}=e;return r.$$set=n=>{"value"in n&&t(0,l=n.value)},[l]}class Ie extends C{constructor(e){super(),A(this,e,Be,Ne,E,{value:0})}}function Re(r){let e,t=r[0].toLocaleString()+"",l;return{c(){e=b("div"),l=S(t),_(e,"class","gr-sample-checkbox")},m(n,s){g(n,e,s),p(e,l)},p(n,[s]){s&1&&t!==(t=n[0].toLocaleString()+"")&&z(l,t)},i:w,o:w,d(n){n&&v(e)}}}function Pe(r,e,t){let{value:l}=e;return r.$$set=n=>{"value"in n&&t(0,l=n.value)},[l]}class Fe extends C{constructor(e){super(),A(this,e,Pe,Re,E,{value:0})}}function Ve(r){let e,t=r[0].join(", ")+"",l;return{c(){e=b("div"),l=S(t),_(e,"class","gr-sample-checkboxgroup")},m(n,s){g(n,e,s),p(e,l)},p(n,[s]){s&1&&t!==(t=n[0].join(", ")+"")&&z(l,t)},i:w,o:w,d(n){n&&v(e)}}}function qe(r,e,t){let{value:l}=e;return r.$$set=n=>{"value"in n&&t(0,l=n.value)},[l]}class Oe extends C{constructor(e){super(),A(this,e,qe,Ve,E,{value:0})}}function We(r){let e,t;return{c(){e=b("div"),t=S(r[0]),_(e,"class","gr-sample-slider")},m(l,n){g(l,e,n),p(e,t)},p(l,[n]){n&1&&z(t,l[0])},i:w,o:w,d(l){l&&v(e)}}}function Ye(r,e,t){let{value:l}=e;return r.$$set=n=>{"value"in n&&t(0,l=n.value)},[l]}class Ge extends C{constructor(e){super(),A(this,e,Ye,We,E,{value:0})}}function Ze(r){let e,t;return{c(){e=b("div"),t=S(r[0]),_(e,"class","gr-sample-radio")},m(l,n){g(l,e,n),p(e,t)},p(l,[n]){n&1&&z(t,l[0])},i:w,o:w,d(l){l&&v(e)}}}function Je(r,e,t){let{value:l}=e;return r.$$set=n=>{"value"in n&&t(0,l=n.value)},[l]}class Ke extends C{constructor(e){super(),A(this,e,Je,Ze,E,{value:0})}}function Qe(r){let e,t;return{c(){e=b("div"),t=S(r[0]),_(e,"class","gr-sample-textbox")},m(l,n){g(l,e,n),p(e,t)},p(l,[n]){n&1&&z(t,l[0])},i:w,o:w,d(l){l&&v(e)}}}function Ue(r,e,t){let{value:l}=e;return r.$$set=n=>{"value"in n&&t(0,l=n.value)},[l]}class Xe extends C{constructor(e){super(),A(this,e,Ue,Qe,E,{value:0})}}function xe(r){let e,t;return{c(){e=b("div"),t=S(r[0]),_(e,"class","gr-sample-audio")},m(l,n){g(l,e,n),p(e,t)},p(l,[n]){n&1&&z(t,l[0])},i:w,o:w,d(l){l&&v(e)}}}function $e(r,e,t){let{value:l}=e;return r.$$set=n=>{"value"in n&&t(0,l=n.value)},[l]}class et extends C{constructor(e){super(),A(this,e,$e,xe,E,{value:0})}}function tt(r){let e,t,l,n;return{c(){e=b("video"),e.muted=!0,e.playsInline=!0,_(e,"class","gr-sample-video"),K(e.src,t=r[1]+r[0])||_(e,"src",t)},m(s,i){g(s,e,i),r[3](e),l||(n=[P(e,"mouseover",function(){Q(r[2].play)&&r[2].play.apply(this,arguments)}),P(e,"mouseout",function(){Q(r[2].pause)&&r[2].pause.apply(this,arguments)})],l=!0)},p(s,i){r=s,i&3&&!K(e.src,t=r[1]+r[0])&&_(e,"src",t)},d(s){s&&v(e),r[3](null),l=!1,ve(n)}}}function lt(r){let e;function t(s,i){return tt}let n=t()(r);return{c(){n.c(),e=V()},m(s,i){n.m(s,i),g(s,e,i)},p(s,[i]){n.p(s,i)},i:w,o:w,d(s){n.d(s),s&&v(e)}}}function nt(r,e,t){let{value:l}=e,{samples_dir:n}=e,s;ye(()=>{t(2,s.muted=!0,s),t(2,s.playsInline=!0,s),t(2,s.controls=!1,s),s.setAttribute("muted",""),s.play(),s.pause()});function i(o){Me[o?"unshift":"push"](()=>{s=o,t(2,s)})}return r.$$set=o=>{"value"in o&&t(0,l=o.value),"samples_dir"in o&&t(1,n=o.samples_dir)},[l,n,s,i]}class rt extends C{constructor(e){super(),A(this,e,nt,lt,E,{value:0,samples_dir:1})}}function it(r){let e,t;return{c(){e=b("div"),t=S(r[0]),_(e,"class","truncate")},m(l,n){g(l,e,n),p(e,t)},p(l,n){n&1&&z(t,l[0])},d(l){l&&v(e)}}}function st(r){let e,t=r[0].join(", ")+"",l;return{c(){e=b("div"),l=S(t),_(e,"class","truncate")},m(n,s){g(n,e,s),p(e,l)},p(n,s){s&1&&t!==(t=n[0].join(", ")+"")&&z(l,t)},d(n){n&&v(e)}}}function ot(r){let e,t;function l(i,o){return o&1&&(e=null),e==null&&(e=!!Array.isArray(i[0])),e?st:it}let n=l(r,-1),s=n(r);return{c(){s.c(),t=V()},m(i,o){s.m(i,o),g(i,t,o)},p(i,[o]){n===(n=l(i,o))&&s?s.p(i,o):(s.d(1),s=n(i),s&&(s.c(),s.m(t.parentNode,t)))},i:w,o:w,d(i){s.d(i),i&&v(t)}}}function ct(r,e,t){let{value:l}=e;return r.$$set=n=>{"value"in n&&t(0,l=n.value)},[l]}class at extends C{constructor(e){super(),A(this,e,ct,ot,E,{value:0})}}function x(r,e,t){const l=r.slice();return l[7]=e[t],l[9]=t,l}function $(r,e,t){const l=r.slice();return l[10]=e[t],l[12]=t,l}function ee(r){let e,t,l,n,s,i=r[3].slice(0,3),o=[];for(let a=0;a<i.length;a+=1)o[a]=ne(x(r,i,a));let c=r[0].length>3&&re(r);return{c(){e=b("div"),t=b("table");for(let a=0;a<o.length;a+=1)o[a].c();l=N(),c&&c.c(),_(t,"class","gr-sample-dataframe relative"),_(e,"class","gr-sample-dataframe")},m(a,f){g(a,e,f),p(e,t);for(let u=0;u<o.length;u+=1)o[u].m(t,null);p(t,l),c&&c.m(t,null),n||(s=[P(e,"mouseenter",r[5]),P(e,"mouseleave",r[6])],n=!0)},p(a,f){if(f&8){i=a[3].slice(0,3);let u;for(u=0;u<i.length;u+=1){const h=x(a,i,u);o[u]?o[u].p(h,f):(o[u]=ne(h),o[u].c(),o[u].m(t,l))}for(;u<o.length;u+=1)o[u].d(1);o.length=i.length}a[0].length>3?c?c.p(a,f):(c=re(a),c.c(),c.m(t,null)):c&&(c.d(1),c=null)},d(a){a&&v(e),F(o,a),c&&c.d(),n=!1,ve(s)}}}function te(r){let e,t=r[10]+"",l,n;return{c(){e=b("td"),l=S(t),_(e,"class",n="p-2 "+(r[9]<3?"border-b border-b-slate-300 dark:border-b-slate-700":"")+" "+(r[12]<3?"border-r border-r-slate-300 dark:border-r-slate-700 ":""))},m(s,i){g(s,e,i),p(e,l)},p(s,i){i&8&&t!==(t=s[10]+"")&&z(l,t)},d(s){s&&v(e)}}}function le(r){let e;return{c(){e=b("td"),e.textContent="\u2026",_(e,"class","p-2 border-r border-b border-r-slate-300 dark:border-r-slate-700 border-b-slate-300 dark:border-b-slate-700")},m(t,l){g(t,e,l)},d(t){t&&v(e)}}}function ne(r){let e,t,l=r[7].slice(0,3),n=[];for(let i=0;i<l.length;i+=1)n[i]=te($(r,l,i));let s=r[7].length>3&&le();return{c(){e=b("tr");for(let i=0;i<n.length;i+=1)n[i].c();t=N(),s&&s.c()},m(i,o){g(i,e,o);for(let c=0;c<n.length;c+=1)n[c].m(e,null);p(e,t),s&&s.m(e,null)},p(i,o){if(o&8){l=i[7].slice(0,3);let c;for(c=0;c<l.length;c+=1){const a=$(i,l,c);n[c]?n[c].p(a,o):(n[c]=te(a),n[c].c(),n[c].m(e,t))}for(;c<n.length;c+=1)n[c].d(1);n.length=l.length}i[7].length>3?s||(s=le(),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(i){i&&v(e),F(n,i),s&&s.d()}}}function re(r){let e;return{c(){e=b("div"),_(e,"class","absolute w-full h-[50%] bottom-0 bg-gradient-to-b from-[rgba(255,255,255,0)] dark:from-[rgba(0,0,0,0)] to-white"),L(e,"dark:to-gray-950",!r[2]),L(e,"dark:to-gray-800",r[2]),L(e,"to-gray-50",r[2])},m(t,l){g(t,e,l)},p(t,l){l&4&&L(e,"dark:to-gray-950",!t[2]),l&4&&L(e,"dark:to-gray-800",t[2]),l&4&&L(e,"to-gray-50",t[2])},d(t){t&&v(e)}}}function ut(r){let e,t=r[1]&&ee(r);return{c(){t&&t.c(),e=V()},m(l,n){t&&t.m(l,n),g(l,e,n)},p(l,[n]){l[1]?t?t.p(l,n):(t=ee(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:w,o:w,d(l){t&&t.d(l),l&&v(e)}}}function ft(r,e,t){let{value:l}=e,{samples_dir:n}=e,s=!1,i=l,o=Array.isArray(i);const c=()=>t(2,s=!0),a=()=>t(2,s=!1);return r.$$set=f=>{"value"in f&&t(0,l=f.value),"samples_dir"in f&&t(4,n=f.samples_dir)},r.$$.update=()=>{r.$$.dirty&19&&!o&&typeof l=="string"&&/\.[a-zA-Z]+$/.test(l)&&fetch(n+l).then(f=>f.text()).then(f=>{try{if(l.endsWith("csv")){const u=f.split(`
`).slice(0,4).map(h=>h.split(",").slice(0,4).join(",")).join(`
`);t(3,i=Ce(u))}else if(l.endsWith("tsv")){const u=f.split(`
`).slice(0,4).map(h=>h.split("	").slice(0,4).join("	")).join(`
`);t(3,i=Te(u))}else throw new Error("Incorrect format, only CSV and TSV files are supported");t(1,o=!0)}catch(u){console.error(u)}})},[l,o,s,i,n,c,a]}class dt extends C{constructor(e){super(),A(this,e,ft,ut,E,{value:0,samples_dir:4})}}function _t(r){let e;return{c(){e=b("div"),_(e,"class","w-10 h-10 border dark:border-slate-300"),U(e,"background-color",r[0])},m(t,l){g(t,e,l)},p(t,[l]){l&1&&U(e,"background-color",t[0])},i:w,o:w,d(t){t&&v(e)}}}function mt(r,e,t){let{value:l}=e;return r.$$set=n=>{"value"in n&&t(0,l=n.value)},[l]}class ht extends C{constructor(e){super(),A(this,e,mt,_t,E,{value:0})}}function gt(r){let e,t;return{c(){e=b("div"),t=S(r[0]),_(e,"class","truncate")},m(l,n){g(l,e,n),p(e,t)},p(l,[n]){n&1&&z(t,l[0])},i:w,o:w,d(l){l&&v(e)}}}function vt(r,e,t){let{value:l}=e;return r.$$set=n=>{"value"in n&&t(0,l=n.value)},[l]}class bt extends C{constructor(e){super(),A(this,e,vt,gt,E,{value:0})}}function pt(r){let e;return{c(){e=b("div"),_(e,"class","gr-sample-markdown")},m(t,l){g(t,e,l),e.innerHTML=r[0]},p(t,[l]){l&1&&(e.innerHTML=t[0])},i:w,o:w,d(t){t&&v(e)}}}function kt(r,e,t){let{value:l}=e;return r.$$set=n=>{"value"in n&&t(0,l=n.value)},[l]}class wt extends C{constructor(e){super(),A(this,e,kt,pt,E,{value:0})}}function yt(r){let e;return{c(){e=b("div"),_(e,"class","gr-sample-html")},m(t,l){g(t,e,l),e.innerHTML=r[0]},p(t,[l]){l&1&&(e.innerHTML=t[0])},i:w,o:w,d(t){t&&v(e)}}}function Mt(r,e,t){let{value:l}=e;return r.$$set=n=>{"value"in n&&t(0,l=n.value)},[l]}class jt extends C{constructor(e){super(),A(this,e,Mt,yt,E,{value:0})}}const R={dropdown:Ie,checkbox:Fe,checkboxgroup:Oe,number:Le,slider:Ge,radio:Ke,image:He,textbox:Xe,audio:et,video:rt,file:at,dataframe:dt,model3d:Ee,colorpicker:ht,timeseries:bt,markdown:wt,html:jt};function ie(r,e,t){const l=r.slice();return l[22]=e[t],l}function se(r,e,t){const l=r.slice();return l[25]=e[t],l[27]=t,l}function oe(r,e,t){const l=r.slice();return l[0]=e[t].value,l[29]=e[t].component,l[31]=t,l}function ce(r,e,t){const l=r.slice();return l[32]=e[t],l}function ae(r,e,t){const l=r.slice();return l[25]=e[t],l[27]=t,l}function Ht(r){let e,t,l,n,s,i,o,c=r[3],a=[];for(let d=0;d<c.length;d+=1)a[d]=ue(ce(r,c,d));let f=r[10],u=[];for(let d=0;d<f.length;d+=1)u[d]=_e(se(r,f,d));const h=d=>T(u[d],1,1,()=>{u[d]=null});return{c(){e=b("div"),t=b("table"),l=b("thead"),n=b("tr");for(let d=0;d<a.length;d+=1)a[d].c();s=N(),i=b("tbody");for(let d=0;d<u.length;d+=1)u[d].c();_(n,"class","border-b dark:border-gray-800 divide-x dark:divide-gray-800 shadow-sm"),_(t,"class","gr-samples-table"),_(e,"class","overflow-x-auto border table-auto rounded-lg w-full text-sm")},m(d,y){g(d,e,y),p(e,t),p(t,l),p(l,n);for(let m=0;m<a.length;m+=1)a[m].m(n,null);p(t,s),p(t,i);for(let m=0;m<u.length;m+=1)u[m].m(i,null);o=!0},p(d,y){if(y[0]&8){c=d[3];let m;for(m=0;m<c.length;m+=1){const j=ce(d,c,m);a[m]?a[m].p(j,y):(a[m]=ue(j),a[m].c(),a[m].m(n,null))}for(;m<a.length;m+=1)a[m].d(1);a.length=c.length}if(y[0]&7363){f=d[10];let m;for(m=0;m<f.length;m+=1){const j=se(d,f,m);u[m]?(u[m].p(j,y),H(u[m],1)):(u[m]=_e(j),u[m].c(),H(u[m],1),u[m].m(i,null))}for(q(),m=f.length;m<u.length;m+=1)h(m);O()}},i(d){if(!o){for(let y=0;y<f.length;y+=1)H(u[y]);o=!0}},o(d){u=u.filter(Boolean);for(let y=0;y<u.length;y+=1)T(u[y]);o=!1},d(d){d&&v(e),F(a,d),F(u,d)}}}function Ct(r){let e,t,l=r[8],n=[];for(let i=0;i<l.length;i+=1)n[i]=he(ae(r,l,i));const s=i=>T(n[i],1,1,()=>{n[i]=null});return{c(){e=b("div");for(let i=0;i<n.length;i+=1)n[i].c();_(e,"class","gr-samples-gallery")},m(i,o){g(i,e,o);for(let c=0;c<n.length;c+=1)n[c].m(e,null);t=!0},p(i,o){if(o[0]&7619){l=i[8];let c;for(c=0;c<l.length;c+=1){const a=ae(i,l,c);n[c]?(n[c].p(a,o),H(n[c],1)):(n[c]=he(a),n[c].c(),H(n[c],1),n[c].m(e,null))}for(q(),c=l.length;c<n.length;c+=1)s(c);O()}},i(i){if(!t){for(let o=0;o<l.length;o+=1)H(n[o]);t=!0}},o(i){n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)T(n[o]);t=!1},d(i){i&&v(e),F(n,i)}}}function ue(r){let e,t=r[32]+"",l,n;return{c(){e=b("th"),l=S(t),n=N(),_(e,"class","p-2 whitespace-nowrap min-w-lg text-left")},m(s,i){g(s,e,i),p(e,l),p(e,n)},p(s,i){i[0]&8&&t!==(t=s[32]+"")&&z(l,t)},d(s){s&&v(e)}}}function fe(r){let e,t,l;var n=r[29];function s(i){return{props:{value:i[0],samples_dir:i[12]}}}return n&&(t=new n(s(r))),{c(){e=b("td"),t&&Z(t.$$.fragment),_(e,"class","p-2")},m(i,o){g(i,e,o),t&&J(t,e,null),l=!0},p(i,o){const c={};if(o[0]&1024&&(c.value=i[0]),n!==(n=i[29])){if(t){q();const a=t;T(a.$$.fragment,1,0,()=>{G(a,1)}),O()}n?(t=new n(s(i)),Z(t.$$.fragment),H(t.$$.fragment,1),J(t,e,null)):t=null}else n&&t.$set(c)},i(i){l||(t&&H(t.$$.fragment,i),l=!0)},o(i){t&&T(t.$$.fragment,i),l=!1},d(i){i&&v(e),t&&G(t)}}}function de(r){let e,t,l=r[1][r[31]]!==void 0&&R[r[1][r[31]]]!==void 0&&fe(r);return{c(){l&&l.c(),e=V()},m(n,s){l&&l.m(n,s),g(n,e,s),t=!0},p(n,s){n[1][n[31]]!==void 0&&R[n[1][n[31]]]!==void 0?l?(l.p(n,s),s[0]&2&&H(l,1)):(l=fe(n),l.c(),H(l,1),l.m(e.parentNode,e)):l&&(q(),T(l,1,1,()=>{l=null}),O())},i(n){t||(H(l),t=!0)},o(n){T(l),t=!1},d(n){l&&l.d(n),n&&v(e)}}}function _e(r){let e,t,l,n,s,i=r[25],o=[];for(let f=0;f<i.length;f+=1)o[f]=de(oe(r,i,f));const c=f=>T(o[f],1,1,()=>{o[f]=null});function a(){return r[20](r[27])}return{c(){e=b("tr");for(let f=0;f<o.length;f+=1)o[f].c();t=N(),_(e,"class","group cursor-pointer odd:bg-gray-50 border-b dark:border-gray-800 divide-x dark:divide-gray-800 last:border-none hover:bg-orange-50 hover:divide-orange-100 dark:hover:bg-gray-700")},m(f,u){g(f,e,u);for(let h=0;h<o.length;h+=1)o[h].m(e,null);p(e,t),l=!0,n||(s=P(e,"click",a),n=!0)},p(f,u){if(r=f,u[0]&5122){i=r[25];let h;for(h=0;h<i.length;h+=1){const d=oe(r,i,h);o[h]?(o[h].p(d,u),H(o[h],1)):(o[h]=de(d),o[h].c(),H(o[h],1),o[h].m(e,t))}for(q(),h=i.length;h<o.length;h+=1)c(h);O()}},i(f){if(!l){for(let u=0;u<i.length;u+=1)H(o[u]);l=!0}},o(f){o=o.filter(Boolean);for(let u=0;u<o.length;u+=1)T(o[u]);l=!1},d(f){f&&v(e),F(o,f),n=!1,s()}}}function me(r){let e,t,l;var n=r[10][0][0].component;function s(i){return{props:{value:i[25][0],samples_dir:i[12]}}}return n&&(e=new n(s(r))),{c(){e&&Z(e.$$.fragment),t=V()},m(i,o){e&&J(e,i,o),g(i,t,o),l=!0},p(i,o){const c={};if(o[0]&256&&(c.value=i[25][0]),n!==(n=i[10][0][0].component)){if(e){q();const a=e;T(a.$$.fragment,1,0,()=>{G(a,1)}),O()}n?(e=new n(s(i)),Z(e.$$.fragment),H(e.$$.fragment,1),J(e,t.parentNode,t)):e=null}else n&&e.$set(c)},i(i){l||(e&&H(e.$$.fragment,i),l=!0)},o(i){e&&T(e.$$.fragment,i),l=!1},d(i){i&&v(t),e&&G(e,i)}}}function he(r){let e,t=Object.keys(R).includes(r[1][0])&&R[r[1][0]],l,n,s,i,o=t&&me(r);function c(){return r[19](r[27])}return{c(){e=b("button"),o&&o.c(),l=N(),_(e,"class","group rounded-lg")},m(a,f){g(a,e,f),o&&o.m(e,null),p(e,l),n=!0,s||(i=P(e,"click",c),s=!0)},p(a,f){r=a,f[0]&2&&(t=Object.keys(R).includes(r[1][0])&&R[r[1][0]]),t?o?(o.p(r,f),f[0]&2&&H(o,1)):(o=me(r),o.c(),H(o,1),o.m(e,l)):o&&(q(),T(o,1,1,()=>{o=null}),O())},i(a){n||(H(o),n=!0)},o(a){T(o),n=!1},d(a){a&&v(e),o&&o.d(),s=!1,i()}}}function At(r){let e,t,l=r[9],n=[];for(let s=0;s<l.length;s+=1)n[s]=ge(ie(r,l,s));return{c(){e=b("div"),t=S(`Pages:\r
		`);for(let s=0;s<n.length;s+=1)n[s].c();_(e,"class","flex gap-2 items-center justify-center text-sm")},m(s,i){g(s,e,i),p(e,t);for(let o=0;o<n.length;o+=1)n[o].m(e,null)},p(s,i){if(i[0]&640){l=s[9];let o;for(o=0;o<l.length;o+=1){const c=ie(s,l,o);n[o]?n[o].p(c,i):(n[o]=ge(c),n[o].c(),n[o].m(e,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=l.length}},d(s){s&&v(e),F(n,s)}}}function Et(r){let e,t=r[22]+1+"",l,n,s,i;function o(){return r[21](r[22])}return{c(){e=b("button"),l=S(t),n=N(),L(e,"font-bold",r[7]===r[22])},m(c,a){g(c,e,a),p(e,l),p(e,n),s||(i=P(e,"click",o),s=!0)},p(c,a){r=c,a[0]&512&&t!==(t=r[22]+1+"")&&z(l,t),a[0]&640&&L(e,"font-bold",r[7]===r[22])},d(c){c&&v(e),s=!1,i()}}}function St(r){let e;return{c(){e=b("div"),e.textContent="..."},m(t,l){g(t,e,l)},p:w,d(t){t&&v(e)}}}function ge(r){let e;function t(s,i){return s[22]===-1?St:Et}let l=t(r),n=l(r);return{c(){n.c(),e=V()},m(s,i){n.m(s,i),g(s,e,i)},p(s,i){l===(l=t(s))&&n?n.p(s,i):(n.d(1),n=l(s),n&&(n.c(),n.m(e.parentNode,e)))},d(s){n.d(s),s&&v(e)}}}function Tt(r){let e,t,l,n,s,i,o,c,a,f,u,h;const d=[Ct,Ht],y=[];function m(M,D){return M[13]?0:1}c=m(r),a=y[c]=d[c](r);let j=r[14]&&At(r);return{c(){e=b("div"),t=b("div"),l=X("svg"),n=X("path"),s=N(),i=S(r[2]),o=N(),a.c(),f=N(),j&&j.c(),u=V(),_(n,"fill","currentColor"),_(n,"d","M10 6h18v2H10zm0 18h18v2H10zm0-9h18v2H10zm-6 0h2v2H4zm0-9h2v2H4zm0 18h2v2H4z"),_(l,"xmlns","http://www.w3.org/2000/svg"),_(l,"xmlns:xlink","http://www.w3.org/1999/xlink"),_(l,"aria-hidden","true"),_(l,"role","img"),_(l,"class","mr-1"),_(l,"width","1em"),_(l,"height","1em"),_(l,"preserveAspectRatio","xMidYMid meet"),_(l,"viewBox","0 0 32 32"),_(t,"class","text-xs mb-2 flex items-center text-gray-500"),_(e,"id",r[4]),_(e,"class","mt-4 inline-block max-w-full text-gray-700 w-full"),L(e,"!hidden",!r[5])},m(M,D){g(M,e,D),p(e,t),p(t,l),p(l,n),p(t,s),p(t,i),p(e,o),y[c].m(e,null),g(M,f,D),j&&j.m(M,D),g(M,u,D),h=!0},p(M,D){(!h||D[0]&4)&&z(i,M[2]),a.p(M,D),(!h||D[0]&16)&&_(e,"id",M[4]),D[0]&32&&L(e,"!hidden",!M[5]),M[14]&&j.p(M,D)},i(M){h||(H(a),h=!0)},o(M){T(a),h=!1},d(M){M&&v(e),y[c].d(),M&&v(f),j&&j.d(M),M&&v(u)}}}function zt(r,e,t){let l,{components:n}=e,{label:s="Examples"}=e,{headers:i}=e,{samples:o}=e,{elem_id:c=""}=e,{visible:a=!0}=e,{value:f=null}=e,{root:u}=e,{root_url:h}=e,{samples_per_page:d=10}=e;const y=je();let m=(h??u)+"file=",j=0,M=i.length===1,D=o.length>d,W,Y,I=[];const be=k=>{t(0,f=k+j*d),y("click",f)},pe=k=>{t(0,f=k+j*d),y("click",f)},ke=k=>t(7,j=k);return r.$$set=k=>{"components"in k&&t(1,n=k.components),"label"in k&&t(2,s=k.label),"headers"in k&&t(3,i=k.headers),"samples"in k&&t(15,o=k.samples),"elem_id"in k&&t(4,c=k.elem_id),"visible"in k&&t(5,a=k.visible),"value"in k&&t(0,f=k.value),"root"in k&&t(16,u=k.root),"root_url"in k&&t(17,h=k.root_url),"samples_per_page"in k&&t(6,d=k.samples_per_page)},r.$$.update=()=>{r.$$.dirty[0]&295616&&(D?(t(9,I=[]),t(8,W=o.slice(j*d,(j+1)*d)),t(18,Y=Math.ceil(o.length/d)),[0,j,Y-1].forEach(k=>{for(let B=k-2;B<=k+2;B++)B>=0&&B<Y&&!I.includes(B)&&(I.length>0&&B-I[I.length-1]>1&&I.push(-1),I.push(B))})):t(8,W=o.slice())),r.$$.dirty[0]&258&&t(10,l=W.map(k=>k.map((B,we)=>({value:B,component:R[n[we]]}))))},[f,n,s,i,c,a,d,j,W,I,l,y,m,M,D,o,u,h,Y,be,pe,ke]}class Dt extends C{constructor(e){super(),A(this,e,zt,Tt,E,{components:1,label:2,headers:3,samples:15,elem_id:4,visible:5,value:0,root:16,root_url:17,samples_per_page:6},null,[-1,-1])}}var Pt=Dt;const Ft=["dynamic"],Vt=()=>({type:"number",description:"index of selected row",example_data:0});export{Pt as Component,Vt as document,Ft as modes};
//# sourceMappingURL=index.f2da079b.js.map
