import{S as k,i as y,s as $,k as c,a as x,e as h,l as b,m as q,x as m,b as u,n as d,f,D as v,p as _}from"../../chunks/index-c9f54b4d.js";import{p as C}from"../../chunks/stores-fbd32c10.js";import{b as S}from"../../chunks/paths-9b83c8fd.js";function w(p){let e,n,t,a,r;return{c(){e=c("p"),n=_("The page you requested does not exist. Please try again or navigate back to the "),t=c("a"),a=_("homepage"),r=_("."),b(t,"href",S+"/")},m(l,o){u(l,e,o),m(e,n),m(e,t),m(t,a),m(e,r)},p:d,d(l){l&&f(e)}}}function D(p){let e,n,t,a,r,l,o=p[0]==404&&w();return{c(){e=c("meta"),n=x(),t=c("h1"),a=c("span"),a.textContent=`${p[0]}`,r=x(),o&&o.c(),l=h(),b(e,"name","robots"),b(e,"content","noindex, nofollow"),q(a,"float","none"),b(a,"class","first-letter")},m(s,i){m(document.head,e),u(s,n,i),u(s,t,i),m(t,a),u(s,r,i),o&&o.m(s,i),u(s,l,i)},p(s,[i]){s[0]==404&&o.p(s,i)},i:d,o:d,d(s){f(e),s&&f(n),s&&f(t),s&&f(r),o&&o.d(s),s&&f(l)}}}function E(p,e,n){let t;return v(p,C,r=>n(1,t=r)),console.error("Original error:",t.error),[t.status==400?404:t.status]}class g extends k{constructor(e){super(),y(this,e,E,D,$,{})}}export{g as default};
