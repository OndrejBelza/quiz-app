(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{29:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);c(21),c(22),c(23),c(24);var n=c(0),r=c.n(n),s=c(7),a=c.n(s),i=c(10),j=c(4),l=c(3),o=(c(29),c(1)),d=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("p",{className:"p-text-center",children:"Made by Ondrej Belza"})})},u=c(15),b=function(e){var t=e.username,c=Object(o.jsx)(o.Fragment,{children:t&&Object(o.jsx)("span",{className:"p-mr-2",children:t})});return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(u.a,{className:"menu",start:Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(i.b,{to:"/",children:Object(o.jsx)("span",{className:"p-ml-2 p-text-bold ",children:"Quiz app"})})}),end:c})})},O=(c(31),function(e){var t=e.children,c=e.username;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"p-d-flex p-flex-column",style:{minHeight:"100vh"},children:[Object(o.jsx)("div",{children:Object(o.jsx)(b,{username:c})}),Object(o.jsxs)("div",{className:"content",children:[" ",t]}),Object(o.jsx)("div",{children:Object(o.jsx)(d,{})})]})})}),h=c(8),m=c(16),x=function(){var e=Object(l.f)();return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"p-grid p-justify-center",children:Object(o.jsx)("div",{className:"p-col-8",children:Object(o.jsx)("div",{className:"p-grid",children:["React"].map((function(t){var c=Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(h.a,{label:"Start quiz!",onClick:function(){return e("/quiz/"+t)}})});return Object(o.jsx)("div",{className:"p-col-3",children:Object(o.jsx)(m.a,{title:t,className:"p-m-2",footer:c})},t)}))})})})})},f=c(20),p=function(e){var t=e.loginHandler,c=Object(n.useState)(""),r=Object(j.a)(c,2),s=r[0],a=r[1];return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"p-grid p-dir-col p-align-center",children:[Object(o.jsx)("div",{className:"p-col-4",children:Object(o.jsx)("h4",{children:"Login"})}),Object(o.jsx)("div",{className:"p-col-4",children:Object(o.jsxs)("div",{className:"p-fluid p-align-start p-justify-start",children:[Object(o.jsxs)("div",{className:"p-field",children:[Object(o.jsx)("label",{htmlFor:"username",children:"Username"}),Object(o.jsx)(f.a,{id:"username",type:"text",value:s,onChange:function(e){return a(e.target.value)}})]}),Object(o.jsx)(h.a,{label:"Login",disabled:!s.length,onClick:function(){return t(s)}})]})})]})})},g=c(19),v=c(17),w=[{question:"Is react good framework?",answer:!0},{question:"Is react good framework?",answer:!0},{question:"Is react good framework?",answer:!0},{question:"Is react good framework?",answer:!0},{question:"Is react good framework?",answer:!0},{question:"Is react good framework?",answer:!0},{question:"Is react good framework?",answer:!0},{question:"Is react good framework?",answer:!0},{question:"Is react good framework?",answer:!0},{question:"Is react good framework?",answer:!0}],N=function(e){var t=[];switch(e){case"React":t=w;break;default:throw new Error("Invalid quiz name")}return console.log(t),t},k=c(18),q=c.n(k),I=function(){var e=Object(n.useState)({width:void 0,height:void 0}),t=Object(j.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){function e(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),c},F=function(){var e=Object(n.useState)(0),t=Object(j.a)(e,2),c=t[0],r=t[1],s=I(),a=s.width,i=s.height,d=Object(n.useState)([]),u=Object(j.a)(d,2),b=u[0],O=u[1],m=Object(n.useState)([]),x=Object(j.a)(m,2),f=x[0],p=x[1],w=Object(l.g)(),k=Object(l.f)();Object(n.useEffect)((function(){console.log(w),w.name||k("/"),O(N(w.name))}),[w,k]);for(var F=[],S=1;S<11;S++)F.push({label:""});var z=function(e){p((function(t){return[].concat(Object(g.a)(t),[e])})),r((function(e){return e+1}))},y=function(){for(var e=0,t=0;t<10;t++)b[t].answer===f[t]&&e++;return e};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"p-grid p-justify-center",children:Object(o.jsx)("div",{className:"p-col-8",children:Object(o.jsx)(v.a,{model:F,activeIndex:c,className:"p-mt-2"})})}),b&&b.length&&Object(o.jsx)(o.Fragment,{children:c<10?Object(o.jsxs)("div",{className:"p-grid p-dir-col p-align-center",children:[Object(o.jsxs)("div",{className:"p-col-8",children:[Object(o.jsxs)("h3",{className:"p-text-center",children:["Question ",c+1]}),Object(o.jsx)("p",{className:"p-text-center",children:b[c].question})]}),Object(o.jsxs)("div",{className:"p-col-8 p-d-flex p-jc-evenly",children:[Object(o.jsx)(h.a,{label:"true",onClick:function(){return z(!0)}}),Object(o.jsx)(h.a,{label:"false",onClick:function(){return z(!1)}})]})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{className:"p-text-center",children:"Your result"}),Object(o.jsxs)("p",{className:"p-text-center",children:[y(),"/10"]}),Object(o.jsx)("div",{className:"p-d-flex p-jc-center",children:Object(o.jsx)(h.a,{label:"Go back",onClick:function(){return k("/")}})}),y()>=7&&Object(o.jsx)(q.a,{width:a,height:i})]})})]})};var S=function(){var e=Object(n.useState)(),t=Object(j.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(!0),a=Object(j.a)(s,2),i=a[0],d=a[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("user");if(e){var t=JSON.parse(e);r(t)}d(!1)}),[r]),i?Object(o.jsx)(o.Fragment,{children:" loading... "}):Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(O,{username:null===c||void 0===c?void 0:c.username,children:c?Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{path:"/",element:Object(o.jsx)(x,{})}),Object(o.jsx)(l.a,{path:"/quiz/:name",element:Object(o.jsx)(F,{})})," ",Object(o.jsx)(l.a,{path:"*",element:Object(o.jsx)(x,{})})]}):Object(o.jsx)(l.c,{children:Object(o.jsx)(l.a,{path:"/",element:Object(o.jsx)(p,{loginHandler:function(e){localStorage.setItem("user",JSON.stringify({username:e})),r({username:e})}})})})})})},z=(c(32),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,34)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))});a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(i.a,{children:Object(o.jsx)(S,{})})}),document.getElementById("root")),z()}},[[33,1,2]]]);
//# sourceMappingURL=main.141dba33.chunk.js.map