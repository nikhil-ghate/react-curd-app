(this.webpackJsonpcurd=this.webpackJsonpcurd||[]).push([[0],{37:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),r=a.n(c),s=a(30),i=a.n(s),o=(a(37),a(4)),l=a(2);a(38);var u=function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"py-4",children:[Object(n.jsx)("h1",{children:"About Page"}),Object(n.jsx)("h5",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, necessitatibus maxime vel fugiat, quae veritatis natus iusto unde inventore neque ratione! Tenetur, qui? Sit odit quis, ad a officiis aut repudiandae amet, nam doloremque quaerat obcaecati, minima dignissimos enim consectetur!"})]})})};var m=function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"py-4",children:[Object(n.jsx)("h1",{children:"Contact Page"}),Object(n.jsx)("h6",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae voluptatibus praesentium itaque magnam mollitia dolore odio voluptatum nesciunt ea et suscipit, animi accusantium dolor, natus dignissimos minus provident! Voluptatum officia possimus omnis laudantium suscipit deleniti at ipsam ad, quis debitis. Nesciunt eius facere fugiat alias nisi? Totam nemo nam impedit velit rerum, quaerat, dignissimos cum, quo temporibus ducimus mollitia vel?"})]})})},j=a(5),b=a.n(j),d=a(10),h=a(12),p=a(11),x=a.n(p);var O=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),a=t[0],r=t[1];Object(c.useEffect)((function(){s()}),[]);var s=function(){var e=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("http://localhost:3004/users");case 2:t=e.sent,r(t.data.reverse());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(d.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.delete("http://localhost:3004/users/".concat(t));case 2:s();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"py-4",children:[Object(n.jsx)("h1",{children:"Home Page"}),Object(n.jsxs)("table",{className:"table border shadow",children:[Object(n.jsx)("thead",{className:"thead-dark",children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:"#"}),Object(n.jsx)("th",{scope:"col",children:"Name"}),Object(n.jsx)("th",{scope:"col",children:"Username"}),Object(n.jsx)("th",{scope:"col",children:"Email"}),Object(n.jsx)("th",{scope:"col",children:"Action"})]})}),Object(n.jsx)("tbody",{children:a.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",children:t+1}),Object(n.jsx)("td",{children:e.name}),Object(n.jsx)("td",{children:e.username}),Object(n.jsx)("td",{children:e.email}),Object(n.jsxs)("td",{children:[Object(n.jsx)(o.b,{className:"btn btn-primary mr-2",to:"/users/".concat(e.id),children:"View"}),Object(n.jsx)(o.b,{className:"btn btn-outline-primary mr-2",to:"/users/edit/".concat(e.id),children:"Edit"}),Object(n.jsx)(o.b,{className:"btn btn-danger mr-2",onClick:function(){return i(e.id)},children:"Delete"})]})]})}))})]})]})})};var f=function(){return Object(n.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:Object(n.jsxs)("div",{className:"container-fluid",children:[Object(n.jsx)(o.b,{className:"navbar-brand",to:"/",children:"React NavBar"}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse",children:Object(n.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(o.c,{className:"nav-link",exact:!0,to:"/",children:"Home"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(o.c,{className:"nav-link",exact:!0,to:"/about",children:"About"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(o.c,{className:"nav-link",exact:!0,to:"/contact",children:"Contact"})})]})}),Object(n.jsx)(o.b,{className:"btn btn-outline-light",to:"/users/add",children:"Add User"})]})})};var v=function(){return Object(n.jsx)("h1",{className:"display-1",children:"Page Not Found"})},g=a(14),N=a(15),y=function(){var e=Object(l.f)(),t=Object(c.useState)({name:"",username:"",email:"",phone:"",website:""}),a=Object(h.a)(t,2),r=a[0],s=a[1],i=function(e){s(Object(N.a)(Object(N.a)({},r),{},Object(g.a)({},e.target.name,e.target.value)))},o=r.name,u=r.username,m=r.email,j=r.phone,p=r.website,O=function(){var t=Object(d.a)(b.a.mark((function t(a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(a),t.next=3,x.a.post("http://localhost:3004/users",r);case 3:e.push("/");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"wx-75 mx-auto shadow p-5",children:[Object(n.jsx)("h2",{className:"text-center mb-4",children:"Add User"}),Object(n.jsxs)("form",{onSubmit:function(e){return O(e)},children:[Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter your Name",name:"name",value:o,onChange:function(e){return i(e)}})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter your Username",name:"username",value:u,onChange:function(e){return i(e)}})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter your Email address",name:"email",value:m,onChange:function(e){return i(e)}})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter your Phone number",name:"phone",value:j,onChange:function(e){return i(e)}})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter your Website Name",name:"website",value:p,onChange:function(e){return i(e)}})}),Object(n.jsx)("button",{className:"btn btn-primary btn-block",children:"Add User"})]})]})})},w=function(){var e=Object(l.f)(),t=Object(l.g)().id,a=Object(c.useState)({name:"",username:"",email:"",phone:"",website:""}),r=Object(h.a)(a,2),s=r[0],i=r[1],o=function(e){i(Object(N.a)(Object(N.a)({},s),{},Object(g.a)({},e.target.name,e.target.value)))},u=s.name,m=s.username,j=s.email,p=s.phone,O=s.website;Object(c.useEffect)((function(){v()}),[]);var f=function(){var a=Object(d.a)(b.a.mark((function a(n){return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(n),a.next=3,x.a.put("http://localhost:3004/users/".concat(t),s);case 3:e.push("/");case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),v=function(){var e=Object(d.a)(b.a.mark((function e(){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("http://localhost:3004/users/".concat(t));case 2:a=e.sent,i(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"wx-75 mx-auto shadow p-5",children:[Object(n.jsxs)("h2",{className:"text-center mb-4",children:["Edit ",u," User"]}),Object(n.jsxs)("form",{onSubmit:function(e){return f(e)},children:[Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter your Name",name:"name",value:u,onChange:function(e){return o(e)}})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter your Username",name:"username",value:m,onChange:function(e){return o(e)}})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter your Email address",name:"email",value:j,onChange:function(e){return o(e)}})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter your Phone number",name:"phone",value:p,onChange:function(e){return o(e)}})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter your Website Name",name:"website",value:O,onChange:function(e){return o(e)}})}),Object(n.jsx)("button",{className:"btn btn-warning btn-block",children:"Update User"})]})]})})},E=function(){var e=Object(c.useState)({name:"",username:"",email:"",phone:"",website:""}),t=Object(h.a)(e,2),a=t[0],r=t[1];Object(c.useEffect)((function(){i()}),[]);var s=Object(l.g)().id,i=function(){var e=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("http://localhost:3004/users/".concat(s));case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"container py-4",children:[Object(n.jsx)(o.b,{className:"btn btn-primary",to:"/",children:"Back to Home"}),Object(n.jsxs)("h1",{className:"display-4",children:["User Id:",s]}),Object(n.jsx)("hr",{}),Object(n.jsxs)("ul",{className:"list-group w-50",children:[Object(n.jsxs)("li",{className:"list-group-item",children:["name: ",a.name]}),Object(n.jsxs)("li",{className:"list-group-item",children:["username: ",a.username]}),Object(n.jsxs)("li",{className:"list-group-item",children:["email: ",a.email]}),Object(n.jsxs)("li",{className:"list-group-item",children:["phone: ",a.phone]}),Object(n.jsxs)("li",{className:"list-group-item",children:["website: ",a.website]})]})]})};var k=function(){return Object(n.jsxs)(o.a,{children:[Object(n.jsx)(f,{}),Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/",component:O}),Object(n.jsx)(l.a,{exact:!0,path:"/about",component:u}),Object(n.jsx)(l.a,{exact:!0,path:"/contact",component:m}),Object(n.jsx)(l.a,{exact:!0,path:"/users/add",component:y}),Object(n.jsx)(l.a,{exact:!0,path:"/users/edit/:id",component:w}),Object(n.jsx)(l.a,{exact:!0,path:"/users/:id",component:E}),Object(n.jsx)(l.a,{component:v})]})]})};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.b16e96d6.chunk.js.map