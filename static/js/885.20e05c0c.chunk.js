"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[885],{885:function(n,t,e){e.r(t),e.d(t,{default:function(){return g}});var r=e(2791),a=e(9434),s=e(1413),c=e(887),i="ContactForm_contactForm__y0Rca",o="ContactForm_formButton__TN6Jq",u="ContactForm_contactInput__z6XOX",l=e(3871),m=e(6727),d=e(4695),f=e(3329),h=m.Ry({name:m.Z_().min(4).max(15).required(),number:m.Z_().min(5).max(18).required()}).required();function x(){var n,t,e=(0,c.cI)({resolver:(0,d.X)(h)}),r=e.register,m=e.handleSubmit,x=e.reset,_=e.formState.errors,p=(0,a.v9)((function(n){return n.contacts})).items,j=(0,a.I0)();return(0,f.jsx)("div",{children:(0,f.jsxs)("form",{className:i,onSubmit:m((function(n){if(p.find((function(t){return t.name.toLowerCase()===n.name.toLowerCase()})))return alert("".concat(n.name," is already in contacts")),void x();j((0,l.uK)(n)),x()})),children:[(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Contact name"}),(0,f.jsx)("input",(0,s.Z)({className:u,type:"text",placeholder:"Contact's name"},r("name",{required:!0}))),(0,f.jsx)("span",{children:null===(n=_.name)||void 0===n?void 0:n.message})]}),(0,f.jsxs)("label",{children:[(0,f.jsx)("span",{children:"Number"}),(0,f.jsx)("input",(0,s.Z)({className:u,type:"text",placeholder:"Contact's number"},r("number"))),(0,f.jsx)("span",{children:null===(t=_.number)||void 0===t?void 0:t.message})]}),(0,f.jsx)("button",{className:o,type:"submit",children:"Add"})]})})}var _=e(7689),p=e(473),j="ContactList_contactList__UFVCg",b="ContactList_contactListItem__3th7-",v="ContactList_deleteButton__3hT3n",C="ContactList_itemSpan__ZuNYO",N=function(n){var t=n.onRemoveContact,e=(0,a.v9)((function(n){return n.contacts})).contacts,r=(0,a.v9)((function(n){return n.filter})).filter,s=(0,a.v9)(p.Qb),c=""===r?e:e.filter((function(n){return n.name.toLowerCase().includes(r.toLowerCase())}));return(0,f.jsx)(f.Fragment,{children:s?(0,f.jsx)("ul",{className:j,children:c.length>0?c.map((function(n){var e=n.name,r=n.id,a=n.number;return(0,f.jsxs)("li",{className:b,name:e,id:r,number:a,children:[(0,f.jsxs)("span",{className:C,children:[e,":"]}),(0,f.jsx)("span",{className:C,children:a}),(0,f.jsx)("button",{className:v,type:"button",onClick:function(){return t(r)},children:"Delete"})]},r)})):(0,f.jsx)("li",{children:(0,f.jsx)("h2",{children:"Contact list is empty"})})}):(0,f.jsx)(_.Fg,{to:"/login",replace:!0})})},g=function(){var n=(0,a.I0)(),t=(0,a.v9)(p.Qb);return(0,r.useEffect)((function(){t&&n((0,l.K2)())}),[n,t]),(0,f.jsxs)(f.Fragment,{children:[t&&(0,f.jsx)(x,{}),(0,f.jsx)(N,{})]})}},473:function(n,t,e){e.d(t,{NH:function(){return a},Qb:function(){return s},dy:function(){return r}});var r=function(n){return n.auth.user},a=function(n){return n.auth.isLoading},s=function(n){return n.auth.isLoggedIn}}}]);
//# sourceMappingURL=885.20e05c0c.chunk.js.map