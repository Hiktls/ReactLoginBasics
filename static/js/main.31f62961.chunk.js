(this["webpackJsonplogin-basics"]=this["webpackJsonplogin-basics"]||[]).push([[0],{31:function(e,t,n){},41:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(25),s=n.n(c),o=n(2),l=(n(31),n(1)),u=function(){var e=Object(o.f)(),t=Object(a.useCallback)((function(){return e.push("/signup")}),[e]),n=Object(a.useCallback)((function(){return e.push("/login")}),[e]),i=Object(a.useCallback)((function(){return e.push("/")}),[e]);return Object(l.jsxs)("div",{className:"navigation",children:[Object(l.jsx)("button",{className:"navigation login",onClick:n,children:"Login"}),Object(l.jsx)("button",{className:"navigation signup",onClick:t,children:"Signup"}),Object(l.jsx)("button",{className:"navigation home",onClick:i,children:"Home"})]})};var r=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(u,{})})},j=(n(41),n(14)),b=n(9),d=n(11),g=n.n(d),p=(n(60),function(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(""),s=Object(b.a)(c,2),o=s[0],u=s[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"title",children:"Sign Up!"}),Object(l.jsx)("input",{value:n,onChange:function(e){i(e.target.value)},className:"input email",type:"email"}),Object(l.jsx)("input",{value:o,onChange:function(e){u(e.target.value)},className:"input password",type:"password"}),Object(l.jsx)("button",{onClick:function(){/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(n)?g.a.post("http://ec2-18-184-216-192.eu-central-1.compute.amazonaws.com/server/signup",{email:n,password:o}).then((function(e){"Registiration Successful"===e.data?alert("You are registered!"):"Registiration Failed"===e.data&&alert("You failed registiration")})):alert("Wrong Email address!")},className:"signup-button",children:"Sign Up!"})]})}),O=(n(61),function(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(""),s=Object(b.a)(c,2),o=s[0],u=s[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"title",children:"Login"}),Object(l.jsx)("input",{value:n,onChange:function(e){i(e.target.value)},className:"input email",type:"email"}),Object(l.jsx)("input",{value:o,onChange:function(e){u(e.target.value)},className:"input password",type:"password"}),Object(l.jsx)("button",{onClick:function(){/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(n)?g.a.post("http://ec2-18-184-216-192.eu-central-1.compute.amazonaws.com/server/login",{email:n,password:o}).then((function(e){"Logged in"===e.data?alert("You are logged in!!"):"Failed"===e.data&&alert("You failed logging in!")})):alert("Wrong Email address!")},className:"login-button",children:"Login"})]})});s.a.render(Object(l.jsxs)(j.a,{children:[Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(r,{})}),Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/signup",children:Object(l.jsx)(p,{})}),Object(l.jsx)(o.a,{path:"/login",children:Object(l.jsx)(O,{})})]})]}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.31f62961.chunk.js.map