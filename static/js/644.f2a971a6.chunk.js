"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[644],{4644:function(e,n,a){a.r(n),a.d(n,{default:function(){return A}});var t=a(9439),o=a(2791),i=a(9434),r=a(2286),s=a(6052),c=a(3044),l=a(6151),u=a(4708),h=a(6199),d=a(4554),m=a(4693),f=a(890),x=a(1614),v=a(7107),j=a(7012),p=a(1686),b=a(6286),g=a(184),Z=function(){var e=(0,o.useState)(""),n=(0,t.Z)(e,2),a=n[0],Z=n[1],_=(0,o.useState)(""),y=(0,t.Z)(_,2),k=y[0],C=y[1],w=(0,i.v9)(r.Af),N=(0,i.v9)(r.c5),P=(0,i.I0)(),L=(0,i.v9)(r.Hz),S=function(e){var n=e.target,a=n.name,t=n.value;switch(a){case"name":Z(t);break;case"phone":C(t);break;default:return}},I=(0,v.Z)();return(0,g.jsx)(j.Z,{theme:I,children:(0,g.jsxs)(x.Z,{component:"main",maxWidth:"xs",children:[(0,g.jsx)(u.ZP,{}),(0,g.jsxs)(d.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,g.jsx)(c.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,g.jsx)(m.Z,{})}),(0,g.jsx)(f.Z,{component:"h1",variant:"h5",children:"Create a contact"}),(0,g.jsxs)(d.Z,{component:"form",onSubmit:function(e){e.preventDefault(),L.isLoggedIn||alert("Sign up to start creating your contact list or log in if you have your own account"),w.find((function(e){return e.name.toLowerCase()===a.toLowerCase()}))?alert('A contact with the name "'.concat(a,'" already exists!')):""!==a&&""!==k?(P((0,s.uK)({name:a,number:k})),Z(""),C(""),p.Notify.success("".concat(a," has added to you phonebook!"))):alert("Fill required fields, please!")},noValidate:!0,sx:{mt:1},children:[(0,g.jsx)(h.Z,{margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",onChange:S,value:a}),(0,g.jsx)(h.Z,{margin:"normal",required:!0,fullWidth:!0,label:"Phone",type:"phone",id:"phone",name:"phone",onChange:S,value:k}),(0,g.jsx)(l.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"adding"===N?(0,g.jsx)(b.no,{height:25}):"save"})]})]})]})})},_=a(4808),y=function(){var e=(0,i.I0)(),n=(0,i.v9)(r.AD);return(0,g.jsx)("div",{children:(0,g.jsx)(h.Z,{label:"Filter by name",margin:"normal",type:"filter",name:"filter",onChange:function(n){e((0,_.T)(n.target.value.trim()))},value:n})})},k="ContactList_contact__C1SpC",C=a(3400),w=a(503),N=a(3969),P=a(1020),L=function(){var e=(0,i.I0)(),n=(0,i.v9)(r.c5);(0,o.useEffect)((function(){e((0,s.yF)())}),[e]);var a=(0,i.v9)(r.Af),t=(0,i.v9)(r.Sb);return(0,g.jsxs)("ul",{children:["fetching"===n&&(0,g.jsx)(N.Z,{}),!a.isLoading&&t.map((function(a){return(0,g.jsxs)("li",{className:k,children:[(0,g.jsxs)(f.Z,{sx:{width:"300px"},children:[a.name,": ",a.number]}),n===a.id?(0,g.jsx)(P.Z,{size:32}):(0,g.jsx)(C.Z,{sx:{visibility:"none"},"aria-label":"delete",size:"small",onClick:function(){return n=a.id,t=a.name,e((0,s.GK)(n)),void p.Notify.info("".concat(t," is deleted from you phonebook succesfull!;)"));var n,t},children:(0,g.jsx)(w.Z,{})})]},a.id)}))]})},S="PhonebookPage_phonebook__oGhby",I="PhonebookPage_conactForm__NO-fq",q="PhonebookPage_contactsTitleLine__v7vlC";var A=function(){return(0,g.jsxs)("div",{className:S,children:[(0,g.jsx)("div",{className:I,children:(0,g.jsx)(Z,{})}),(0,g.jsxs)("div",{className:q,children:[(0,g.jsx)(y,{}),(0,g.jsx)(f.Z,{component:"h3",variant:"h5",children:"Contacts:"})]}),(0,g.jsx)(L,{})]})}}}]);
//# sourceMappingURL=644.f2a971a6.chunk.js.map