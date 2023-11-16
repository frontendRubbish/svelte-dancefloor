var ve=Object.defineProperty;var xe=(e,t,n)=>t in e?ve(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Q=(e,t,n)=>(xe(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function $(){}function ue(e){return e()}function le(){return Object.create(null)}function D(e){e.forEach(ue)}function de(e){return typeof e=="function"}function ee(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Pe(e){return Object.keys(e).length===0}function y(e,t){e.appendChild(t)}function W(e,t,n){e.insertBefore(t,n||null)}function R(e){e.parentNode&&e.parentNode.removeChild(e)}function he(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function ge(e){return document.createElement(e)}function k(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function me(e){return document.createTextNode(e)}function F(){return me(" ")}function Me(){return me("")}function l(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function je(e){return Array.from(e.childNodes)}function U(e,t,n,o){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,o?"important":"")}let C;function I(e){C=e}function pe(){if(!C)throw new Error("Function called outside component initialization");return C}function _e(e){pe().$$.on_mount.push(e)}function be(e){pe().$$.after_update.push(e)}const O=[],re=[];let S=[];const se=[],$e=Promise.resolve();let Y=!1;function Ee(){Y||(Y=!0,$e.then(we))}function Z(e){S.push(e)}const X=new Set;let A=0;function we(){if(A!==0)return;const e=C;do{try{for(;A<O.length;){const t=O[A];A++,I(t),Ae(t.$$)}}catch(t){throw O.length=0,A=0,t}for(I(null),O.length=0,A=0;re.length;)re.pop()();for(let t=0;t<S.length;t+=1){const n=S[t];X.has(n)||(X.add(n),n())}S.length=0}while(O.length);for(;se.length;)se.pop()();Y=!1,X.clear(),I(e)}function Ae(e){if(e.fragment!==null){e.update(),D(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Z)}}function Oe(e){const t=[],n=[];S.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),S=t}const J=new Set;let j;function ye(){j={r:0,c:[],p:j}}function ke(){j.r||D(j.c),j=j.p}function x(e,t){e&&e.i&&(J.delete(e),e.i(t))}function P(e,t,n,o){if(e&&e.o){if(J.has(e))return;J.add(e),j.c.push(()=>{J.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function K(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function B(e){e&&e.c()}function L(e,t,n){const{fragment:o,after_update:r}=e.$$;o&&o.m(t,n),Z(()=>{const s=e.$$.on_mount.map(ue).filter(de);e.$$.on_destroy?e.$$.on_destroy.push(...s):D(s),e.$$.on_mount=[]}),r.forEach(Z)}function N(e,t){const n=e.$$;n.fragment!==null&&(Oe(n.after_update),D(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Le(e,t){e.$$.dirty[0]===-1&&(O.push(e),Ee(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function te(e,t,n,o,r,s,i,f=[-1]){const c=C;I(e);const d=e.$$={fragment:null,ctx:[],props:s,update:$,not_equal:r,bound:le(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:le(),dirty:f,skip_bound:!1,root:t.target||c.$$.root};i&&i(d.root);let m=!1;if(d.ctx=n?n(e,t.props||{},(g,u,..._)=>{const a=_.length?_[0]:u;return d.ctx&&r(d.ctx[g],d.ctx[g]=a)&&(!d.skip_bound&&d.bound[g]&&d.bound[g](a),m&&Le(e,g)),u}):[],d.update(),m=!0,D(d.before_update),d.fragment=o?o(d.ctx):!1,t.target){if(t.hydrate){const g=je(t.target);d.fragment&&d.fragment.l(g),g.forEach(R)}else d.fragment&&d.fragment.c();t.intro&&x(e.$$.fragment),L(e,t.target,t.anchor),we()}I(c)}class ne{constructor(){Q(this,"$$");Q(this,"$$set")}$destroy(){N(this,1),this.$destroy=$}$on(t,n){if(!de(n))return $;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!Pe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ne="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ne);function Se(e){let t,n,o,r,s,i,f,c,d,m,g,u,_,a,h;return{c(){t=k("svg"),n=k("ellipse"),o=k("g"),r=k("ellipse"),s=k("ellipse"),i=k("circle"),f=k("circle"),c=k("circle"),m=k("ellipse"),u=k("ellipse"),a=k("circle"),h=k("circle"),l(n,"cx","80"),l(n,"cy","198"),l(n,"rx","46"),l(n,"ry","54"),l(n,"fill","#ff69b4"),l(n,"stroke","black"),l(n,"stroke-width","3"),l(r,"cx","60"),l(r,"cy","50"),l(r,"rx","16"),l(r,"ry","40"),l(r,"fill","#ff69b4"),l(r,"stroke","black"),l(r,"stroke-width","3"),l(s,"cx","100"),l(s,"cy","50"),l(s,"rx","16"),l(s,"ry","40"),l(s,"fill","#ff69b4"),l(s,"stroke","black"),l(s,"stroke-width","3"),l(i,"cx","80"),l(i,"cy","110"),l(i,"r","40"),l(i,"stroke","black"),l(i,"stroke-width","3"),l(i,"fill","#ff69b4"),l(f,"cx","70"),l(f,"cy","100"),l(f,"r","8"),l(f,"stroke","black"),l(f,"stroke-width","3"),l(f,"fill","black"),l(c,"cx","90"),l(c,"cy","100"),l(c,"r","8"),l(c,"stroke","black"),l(c,"stroke-width","3"),l(c,"fill","black"),l(o,"transform",d="translate(0, "+e[2].head.current+" )"),l(m,"cx","52"),l(m,"cy","186"),l(m,"rx","16"),l(m,"ry","30"),l(m,"fill","#ff69b4"),l(m,"stroke","black"),l(m,"stroke-width","3"),l(m,"transform",g="rotate("+e[2].rotation.current+" 52,167)"),l(u,"cx","108"),l(u,"cy","186"),l(u,"rx","16"),l(u,"ry","30"),l(u,"fill","#ff69b4"),l(u,"stroke","black"),l(u,"stroke-width","3"),l(u,"transform",_="rotate(-"+e[2].rotation.current+" 108,167)"),l(a,"cx","60"),l(a,"cy","244"),l(a,"r","16"),l(a,"stroke","black"),l(a,"stroke-width","3"),l(a,"fill","#ff69b4"),l(h,"cx","100"),l(h,"cy","244"),l(h,"r","16"),l(h,"stroke","black"),l(h,"stroke-width","3"),l(h,"fill","#ff69b4"),l(t,"xmlns","http://www.w3.org/2000/svg"),l(t,"xmlns:xlink","http://www.w3.org/1999/xlink"),l(t,"class","dancer svelte-1gasqrl"),l(t,"height","300"),l(t,"width","160"),U(t,"left",e[1]+"px"),U(t,"bottom",e[0]+e[2].jump.current+"px")},m(p,v){W(p,t,v),y(t,n),y(t,o),y(o,r),y(o,s),y(o,i),y(o,f),y(o,c),y(t,m),y(t,u),y(t,a),y(t,h)},p(p,[v]){v&4&&d!==(d="translate(0, "+p[2].head.current+" )")&&l(o,"transform",d),v&4&&g!==(g="rotate("+p[2].rotation.current+" 52,167)")&&l(m,"transform",g),v&4&&_!==(_="rotate(-"+p[2].rotation.current+" 108,167)")&&l(u,"transform",_),v&2&&U(t,"left",p[1]+"px"),v&5&&U(t,"bottom",p[0]+p[2].jump.current+"px")},i:$,o:$,d(p){p&&R(t)}}}function Ve(e,t,n){let{tick:o}=t,{beat:r}=t,{jumping:s}=t,{bottomPos:i}=t,{leftPos:f}=t;const c=[90,180];let d=0,m=0,g=0,u=!1,_=!1,a=!1,h={head:{current:0,target:0},jump:{current:0,target:0},rotation:{current:0,target:0}};function p(w,b,E){let V={...h},oe=V[w],M=oe.current;const G=oe.target;let H=Math.abs(G-M);M<G?M=M+b*H:M>G&&(M=M-b*H),V[w].current=M,E&&H<.1&&(V[w].target=V[w].target==0?40:0),n(2,h={...V})}function v(){s&&u?p("jump",.6,!0):(p("rotation",.4,!1),p("head",.4,!1))}function q(){let w=h.rotation.target;const b=Math.floor(Math.random()*c.length),E=c[b];d++,s?(g++,u=g>=m):(u=!1,g=0),d==2?(c.splice(b,1),c.push(w),d=0,n(2,h.rotation.target=E,h),n(2,h.head.target=0,h)):n(2,h.head.target=10,h)}return _e(()=>{m=Math.floor(Math.random()*5+1),_=r,a=o}),be(()=>{_!==r&&(q(),_=r),a!==o&&(v(),a=o)}),e.$$set=w=>{"tick"in w&&n(3,o=w.tick),"beat"in w&&n(4,r=w.beat),"jumping"in w&&n(5,s=w.jumping),"bottomPos"in w&&n(0,i=w.bottomPos),"leftPos"in w&&n(1,f=w.leftPos)},[i,f,h,o,r,s]}class Be extends ne{constructor(t){super(),te(this,t,Ve,Se,ee,{tick:3,beat:4,jumping:5,bottomPos:0,leftPos:1})}}function Ie(e){let t,n,o,r,s,i;return{c(){t=ge("div"),n=k("svg"),o=k("polygon"),l(o,"fill",e[3]),l(o,"height","100%"),l(o,"width","100%"),l(o,"points",r="20,0 "+e[4]+",100 "+e[5]+",100"),l(n,"xmlns","http://www.w3.org/2000/svg"),l(n,"xmlns:xlink","http://www.w3.org/1999/xlink"),l(n,"height","100%"),l(n,"preserveAspectRatio","none"),l(n,"width","100%"),l(t,"class",s="spot "+(e[0]?"":"spot--hidden")+" svelte-1xsciwx"),l(t,"style",i=(e[1]=="left"?"left:":"right:")+e[2]+"px")},m(f,c){W(f,t,c),y(t,n),y(n,o)},p(f,[c]){c&8&&l(o,"fill",f[3]),c&48&&r!==(r="20,0 "+f[4]+",100 "+f[5]+",100")&&l(o,"points",r),c&1&&s!==(s="spot "+(f[0]?"":"spot--hidden")+" svelte-1xsciwx")&&l(t,"class",s),c&6&&i!==(i=(f[1]=="left"?"left:":"right:")+f[2]+"px")&&l(t,"style",i)},i:$,o:$,d(f){f&&R(t)}}}let Ce=!1;function De(e,t,n){let{beat:o}=t,{dancing:r}=t,{position:s}=t,{distance:i}=t,f=0,c="rgba( 0, 255, 0, 0.4)",d=0,m=160,g=["rgba( 255, 0, 0, 0.4)","rgba( 0, 0, 255, 0.4)"];function u(){let _=c,a=Math.floor(Math.random()*g.length),h=g[a],p=20+Math.floor(Math.random()*200);f++,f==2&&(g.splice(a,1),g.push(_),f=0,n(3,c=h),n(4,d=p),n(5,m=p+240))}return be(()=>{Ce!==o&&u()}),e.$$set=_=>{"beat"in _&&n(6,o=_.beat),"dancing"in _&&n(0,r=_.dancing),"position"in _&&n(1,s=_.position),"distance"in _&&n(2,i=_.distance)},[r,s,i,c,d,m,o]}class T extends ne{constructor(t){super(),te(this,t,De,Ie,ee,{beat:6,dancing:0,position:1,distance:2})}}function ie(e,t,n){const o=e.slice();return o[4]=t[n],o}function fe(e,t,n){const o=e.slice();return o[7]=t[n],o}function ce(e){let t,n;return t=new Be({props:{tick:e[0],beat:e[1],jumping:qe,bottomPos:e[7].bottomPos,leftPos:e[7].leftPos}}),{c(){B(t.$$.fragment)},m(o,r){L(t,o,r),n=!0},p(o,r){const s={};r&1&&(s.tick=o[0]),r&2&&(s.beat=o[1]),r&4&&(s.bottomPos=o[7].bottomPos),r&4&&(s.leftPos=o[7].leftPos),t.$set(s)},i(o){n||(x(t.$$.fragment,o),n=!0)},o(o){P(t.$$.fragment,o),n=!1},d(o){N(t,o)}}}function ae(e){let t,n,o=K(e[4]),r=[];for(let i=0;i<o.length;i+=1)r[i]=ce(fe(e,o,i));const s=i=>P(r[i],1,1,()=>{r[i]=null});return{c(){for(let i=0;i<r.length;i+=1)r[i].c();t=Me()},m(i,f){for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(i,f);W(i,t,f),n=!0},p(i,f){if(f&7){o=K(i[4]);let c;for(c=0;c<o.length;c+=1){const d=fe(i,o,c);r[c]?(r[c].p(d,f),x(r[c],1)):(r[c]=ce(d),r[c].c(),x(r[c],1),r[c].m(t.parentNode,t))}for(ye(),c=o.length;c<r.length;c+=1)s(c);ke()}},i(i){if(!n){for(let f=0;f<o.length;f+=1)x(r[f]);n=!0}},o(i){r=r.filter(Boolean);for(let f=0;f<r.length;f+=1)P(r[f]);n=!1},d(i){i&&R(t),he(r,i)}}}function Re(e){let t,n,o,r,s,i,f,c,d,m,g=K(e[2]),u=[];for(let a=0;a<g.length;a+=1)u[a]=ae(ie(e,g,a));const _=a=>P(u[a],1,1,()=>{u[a]=null});return o=new T({props:{beat:e[1],dancing:z,position:"left",distance:60}}),s=new T({props:{beat:e[1],dancing:z,position:"left",distance:340}}),f=new T({props:{beat:e[1],dancing:z,position:"right",distance:60}}),d=new T({props:{beat:e[1],dancing:z,position:"right",distance:340}}),{c(){t=ge("div");for(let a=0;a<u.length;a+=1)u[a].c();n=F(),B(o.$$.fragment),r=F(),B(s.$$.fragment),i=F(),B(f.$$.fragment),c=F(),B(d.$$.fragment),l(t,"class","dancefloor  svelte-6xf6jo")},m(a,h){W(a,t,h);for(let p=0;p<u.length;p+=1)u[p]&&u[p].m(t,null);y(t,n),L(o,t,null),y(t,r),L(s,t,null),y(t,i),L(f,t,null),y(t,c),L(d,t,null),m=!0},p(a,[h]){if(h&7){g=K(a[2]);let b;for(b=0;b<g.length;b+=1){const E=ie(a,g,b);u[b]?(u[b].p(E,h),x(u[b],1)):(u[b]=ae(E),u[b].c(),x(u[b],1),u[b].m(t,n))}for(ye(),b=g.length;b<u.length;b+=1)_(b);ke()}const p={};h&2&&(p.beat=a[1]),o.$set(p);const v={};h&2&&(v.beat=a[1]),s.$set(v);const q={};h&2&&(q.beat=a[1]),f.$set(q);const w={};h&2&&(w.beat=a[1]),d.$set(w)},i(a){if(!m){for(let h=0;h<g.length;h+=1)x(u[h]);x(o.$$.fragment,a),x(s.$$.fragment,a),x(f.$$.fragment,a),x(d.$$.fragment,a),m=!0}},o(a){u=u.filter(Boolean);for(let h=0;h<u.length;h+=1)P(u[h]);P(o.$$.fragment,a),P(s.$$.fragment,a),P(f.$$.fragment,a),P(d.$$.fragment,a),m=!1},d(a){a&&R(t),he(u,a),N(o),N(s),N(f),N(d)}}}let z=!1,qe=!1;function Fe(){const e=window.innerWidth/100,t=[];for(let n=0;n<3;n++){let o=[];for(let r=0;r<e;r++)o.push({leftPos:r*86+Math.floor(Math.random()*(30+0)-0),bottomPos:(3-n)*70+Math.floor(Math.random()*(10+10))-60});t.push(o)}return t}function Ue(e,t,n){let o=!1,r=!1,s=[];return _e(()=>{let i=()=>{requestAnimationFrame(i)},f=()=>{requestAnimationFrame(f)};n(2,s=Fe()),f(),i()}),[o,r,s]}class Te extends ne{constructor(t){super(),te(this,t,Ue,Re,ee,{})}}new Te({target:document.getElementById("app")});
