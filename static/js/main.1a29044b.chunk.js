(this["webpackJsonpppl-finder"]=this["webpackJsonpppl-finder"]||[]).push([[0],{130:function(e,n,t){"use strict";t.r(n);var i,c,a,r,s,o,l,u,d,j,b,f,x,O,p,h,v,g,m=t(0),y=t.n(m),C=t(26),k=t.n(C),w=t(36),z=t(11),L=t(132),E=t(8),R=t(9),U=R.a.div(i||(i=Object(E.a)(["\n  font-size: ",";\n  font-weight: ",";\n"])),(function(e){return e.size}),(function(e){return e.bold?"700":"400"})),F=t(2),M=function(e){var n=e.size,t=void 0===n?"14px":n,i=e.children,c=e.bold;return Object(F.jsx)(L.a,{component:"span",variant:"body2",children:Object(F.jsx)(U,{size:t,bold:c,children:i})})},S=t(22),A=t(159),D=function(e){var n=e.size,t=e.color,i=e.thickness,c=e.variant;return Object(F.jsx)(A.a,{size:n,color:t,thickness:i,variant:c})},V=t(166),T=t(160),I=R.a.div(c||(c=Object(E.a)([""]))),_=function(e){var n=e.isChecked,t=e.onChange,i=e.label,c=e.value;return Object(F.jsx)(I,{children:Object(F.jsx)(T.a,{control:Object(F.jsx)(V.a,{checked:n,onChange:function(){t&&t(c)},color:"primary"}),label:i})})},N=t(161),P=t(78),B=t.n(P),J=t(20),q=t(77),G="ADD_FILTER",H="REMOVE_FILTER",W="ADD_FAVORITE_USR",K="REMOVE_FAVORITE_USR",Q=R.a.div(a||(a=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),X=R.a.div(r||(r=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  width: 500px;\n  height: calc(100vh - 270px);\n  margin-block-start: 30px;\n  overflow-y: auto;\n"]))),Y=R.a.div(s||(s=Object(E.a)(["\n  margin-bottom: 25px;\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n"]))),Z=R.a.div(o||(o=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  max-height: 128px;\n  gap: 2px;\n  overflow: hidden;\n"]))),$=R.a.img(l||(l=Object(E.a)(["\n  border-radius: 45%;\n"]))),ee=R.a.div(u||(u=Object(E.a)(["\n  display: flex;\n  justify-content: center;\n"]))),ne=R.a.div(d||(d=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  opacity: ",";\n  transition: opacity 0.2s ease-in-out;\n"])),(function(e){return e.isVisible?1:0})),te=R.a.div(j||(j=Object(E.a)(["\n  display: flex;\n  justify-content: center;\n  & > * {\n    margin-inline-end: 8px;\n  }\n"]))),ie=function(e){var n,t=e.users,i=e.isLoading,c=e.pageNumber,a=e.setPage,r=e.hasMore,s=e.isFav,o=void 0!==s&&s,l=Object(m.useState)(),u=Object(S.a)(l,2),d=u[0],j=u[1],b=Object(m.useState)([]),f=Object(S.a)(b,2),x=f[0],O=f[1],p=Object(m.useState)([]),h=Object(S.a)(p,2),v=h[0],g=h[1],y=Object(J.c)((function(e){return e.filt.countrieLst})),C=Object(J.c)((function(e){return e.fav.fvrtUsrs})),k=Object(J.b)();Object(m.useEffect)((function(){g(y.length>0?t.filter((function(e){return y.includes(e.nat)})):t)}),[y,t]),Object(m.useEffect)((function(){O(y.length>0?C.filter((function(e){return y.includes(e.nat)})):C)}),[y,C]);var w=function(){j()},z=function(e){R(e)?k({type:H,payload:e}):k(function(e){return{type:G,payload:e}}(e))},L=function(e){var n,t=e.login.uuid;E(t)?k((n=e.login.uuid,{type:K,payload:n})):k({type:W,payload:e})},E=function(e){return C.some((function(n){return n.login.uuid===e}))},R=function(e){return!!y.includes(e)};return Object(F.jsxs)(Q,{children:[Object(F.jsxs)(te,{children:[Object(F.jsx)(_,{onChange:z,isChecked:y.includes("BR"),value:"BR",label:"Brazil"}),Object(F.jsx)(_,{onChange:z,isChecked:y.includes("AU"),value:"AU",label:"Australia"}),Object(F.jsx)(_,{onChange:z,isChecked:y.includes("CA"),value:"CA",label:"Canada"}),Object(F.jsx)(_,{onChange:z,isChecked:y.includes("DE"),value:"DE",label:"Germany"}),Object(F.jsx)(_,{onChange:z,isChecked:y.includes("FR"),value:"FR",label:"France"})]}),Object(F.jsxs)(X,{id:"scrollDIV",children:[Object(F.jsx)(q.a,{dataLength:v.length,next:function(){a(c+1)},hasMore:r,scrollableTarget:"scrollDIV",children:null===(n=o?x:v)||void 0===n?void 0:n.map((function(e,n){return Object(F.jsxs)(Y,{onMouseEnter:function(){return function(e){j(e)}(n)},onMouseLeave:w,children:[Object(F.jsx)($,{src:null===e||void 0===e?void 0:e.picture.large,alt:""}),Object(F.jsxs)(Z,{children:[Object(F.jsxs)(M,{size:"22px",bold:!0,children:[null===e||void 0===e?void 0:e.name.title," ",null===e||void 0===e?void 0:e.name.first," ",null===e||void 0===e?void 0:e.name.last]}),Object(F.jsx)(M,{size:"14px",children:null===e||void 0===e?void 0:e.email}),Object(F.jsxs)(M,{size:"14px",children:[null===e||void 0===e?void 0:e.location.street.number," ",null===e||void 0===e?void 0:e.location.street.name]}),Object(F.jsxs)(M,{size:"14px",children:[null===e||void 0===e?void 0:e.location.city," ",null===e||void 0===e?void 0:e.location.country]})]}),Object(F.jsx)(ne,{isVisible:n===d||E(e.login.uuid),children:Object(F.jsx)(N.a,{onClick:function(){return L(e)},children:Object(F.jsx)(B.a,{color:"error"})})})]},n)}))}),i&&Object(F.jsx)(ee,{children:Object(F.jsx)(D,{color:"primary",size:"45px",thickness:6,variant:"indeterminate"})})]})]})},ce=t(53),ae=t.n(ce),re=t(27),se=t(79),oe=t(80),le=t.n(oe),ue=R.a.div(b||(b=Object(E.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),de=R.a.div(f||(f=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-block-start: 100px;\n"]))),je=R.a.div(x||(x=Object(E.a)(["\n  display: flex;\n"]))),be=(R.a.div(O||(O=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  max-width: 400px;\n  width: 100%;\n"]))),function(){var e=function(){var e=Object(m.useState)([]),n=Object(S.a)(e,2),t=n[0],i=n[1],c=Object(m.useState)(!1),a=Object(S.a)(c,2),r=a[0],s=a[1],o=Object(m.useState)(!0),l=Object(S.a)(o,2),u=l[0],d=l[1],j=Object(m.useState)(1),b=Object(S.a)(j,2),f=b[0],x=b[1],O=Object(J.c)((function(e){return e.filt.countrieLst}));function p(e){return h.apply(this,arguments)}function h(){return(h=Object(se.a)(ae.a.mark((function e(n){var c,a;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),c=O?"&nat="+O.join(","):"",e.next=4,le.a.get("https://randomuser.me/api/?".concat(c,"&results=15&page=").concat(f));case 4:a=e.sent,s(!1),i(n?Object(re.a)(a.data.results):[].concat(Object(re.a)(t),Object(re.a)(a.data.results))),d(a.data.results.length>0);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(m.useEffect)((function(){p()}),[f]),{users:t,isLoading:r,pageNumber:f,hasMore:u,setPage:x,fetchUsers:p}}(),n=e.users,t=e.isLoading,i=e.pageNumber,c=e.hasMore,a=e.setPage,r=e.fetchUsers,s=Object(J.c)((function(e){return e.filt.countrieLst}));return Object(m.useEffect)((function(){r(!0)}),[s]),Object(F.jsx)(ue,{children:Object(F.jsxs)(de,{children:[Object(F.jsx)(je,{children:Object(F.jsx)(M,{size:"64px",bold:!0,children:"PplFinder"})}),Object(F.jsx)(ie,{users:n,isLoading:t,pageNumber:i,setPage:a,hasMore:c})]})})}),fe=R.a.div(p||(p=Object(E.a)(["\n  display: flex;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  box-sizing: border-box;\n"]))),xe=R.a.div(h||(h=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-block-start: 100px;\n"]))),Oe=R.a.div(v||(v=Object(E.a)(["\n  display: flex;\n"]))),pe=(R.a.div(g||(g=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  max-width: 400px;\n  width: 100%;\n"]))),function(){var e=Object(J.c)((function(e){return e.fav.fvrtUsrs}));return Object(F.jsx)(fe,{children:Object(F.jsxs)(xe,{children:[Object(F.jsx)(Oe,{children:Object(F.jsx)(M,{size:"64px",bold:!0,children:"Favorites"})}),Object(F.jsx)(ie,{users:e,isFav:!0})]})})}),he=t(86),ve=t(162),ge=t(163),me=function(e){var n=e.children,t={MuiTab:{root:{backgroundColor:"#303030"}}},i=y.a.useMemo((function(){return Object(he.a)({overrides:t,palette:{type:"dark",primary:{main:"#84ffff"},error:{main:"#f06292"}}})}),[]);return Object(F.jsxs)(ve.a,{theme:i,children:[Object(F.jsx)(ge.a,{}),n]})},ye=t(167),Ce=t(165),ke=t(164),we=function(){var e=Object(m.useState)(0),n=Object(S.a)(e,2),t=n[0],i=n[1];return Object(F.jsx)(ye.a,{position:"static",color:"transparent",style:{position:"fixed",top:0},children:Object(F.jsxs)(Ce.a,{value:t,onChange:function(e,n){i(n)},"aria-label":"Navigation",indicatorColor:"primary",textColor:"primary",children:[Object(F.jsx)(ke.a,{label:"Home",index:0,component:w.b,to:"/"}),Object(F.jsx)(ke.a,{label:"Favorites",index:1,component:w.b,to:"/favorites"})]})})},ze=function(){return Object(F.jsx)(me,{children:Object(F.jsxs)(w.a,{children:[Object(F.jsx)(we,{}),Object(F.jsxs)(z.c,{children:[Object(F.jsx)(z.a,{exact:!0,path:"/",component:be}),Object(F.jsx)(z.a,{exact:!0,path:"/favorites",component:pe})]})]})})},Le=t(23),Ee={countrieLst:[]},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case G:return{countrieLst:[].concat(Object(re.a)(e.countrieLst),[n.payload])};case H:return{countrieLst:e.countrieLst.filter((function(e){return e!==n.payload}))};default:return e}},Ue={fvrtUsrs:[]},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case W:return{fvrtUsrs:[].concat(Object(re.a)(e.fvrtUsrs),[n.payload])};case K:return{fvrtUsrs:e.fvrtUsrs.filter((function(e){return e.login.uuid!==n.payload}))};default:return e}},Me=t(47),Se=t(82),Ae={key:"root",storage:t.n(Se).a,whitelist:["fav"]},De=Object(Le.combineReducers)({filt:Re,fav:Fe}),Ve=Object(Me.a)(Ae,De),Te=t(83),Ie=t.n(Te),_e=t(84),Ne=Object(Le.createStore)(Ve,Object(_e.composeWithDevTools)(Object(Le.applyMiddleware)(Ie.a))),Pe=Object(Me.b)(Ne),Be=t(85);k.a.render(Object(F.jsx)(J.a,{store:Ne,children:Object(F.jsx)(Be.a,{persistor:Pe,children:Object(F.jsx)(ze,{})})}),document.querySelector("#root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.1a29044b.chunk.js.map