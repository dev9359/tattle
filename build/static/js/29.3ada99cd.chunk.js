(this.webpackJsonptattle=this.webpackJsonptattle||[]).push([[29],{399:function(e,t,a){},470:function(e,t,a){"use strict";a.r(t);var n=a(26),o=a(2),c=a.n(o),l=a(35),r=a(10),s=a(14),i=a(92),u=(a(55),a(399),c.a.lazy((function(){return Promise.all([a.e(1),a.e(17)]).then(a.bind(null,409))}))),d=c.a.lazy((function(){return Promise.all([a.e(2),a.e(5),a.e(15)]).then(a.bind(null,411))})),m=c.a.lazy((function(){return Promise.all([a.e(1),a.e(2),a.e(3),a.e(7),a.e(12)]).then(a.bind(null,458))})),b=c.a.lazy((function(){return a.e(16).then(a.bind(null,446))}));t.default=function(e){var t=e.isRoomExist,a=Object(r.g)(),O=Object(l.b)(),j=Object(n.a)(O,1)[0].user,f=Object(r.h)().roomId,h=Object(o.useState)(""),v=Object(n.a)(h,2),E=v[0],p=v[1],S=Object(o.useState)(""),y=Object(n.a)(S,2),g=y[0],w=y[1],I=Object(o.useState)(""),_=Object(n.a)(I,2),N=_[0],z=_[1],B=Object(o.useState)(""),P=Object(n.a)(B,2),k=P[0],x=P[1],R=Object(o.useState)([]),C=Object(n.a)(R,2),J=C[0],L=C[1],F=Object(o.useState)([]),U=Object(n.a)(F,2),q=U[0],A=U[1],D=Object(o.useState)(!1),G=Object(n.a)(D,2),H=G[0],K=G[1],M=Object(o.useState)(!1),Q=Object(n.a)(M,2),T=Q[0],V=Q[1],W=Object(o.useState)(null),X=Object(n.a)(W,2),Y=X[0],Z=X[1];return Object(o.useEffect)((function(){if(f){s.b.collection("rooms").doc(f).onSnapshot((function(t){var a,n,o,c;w(null===(a=t.data())||void 0===a?void 0:a.name),z(null===(n=t.data())||void 0===n?void 0:n.createdBy),x(null===(o=t.data())||void 0===o?void 0:o.roomOwner),p(null===(c=t.data())||void 0===c?void 0:c.id),e(t.data())})),s.b.collection("rooms").doc(f).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){A(e.id),L(e.docs.map((function(e){return e.data()}))),K(!0)}));var e=function(e){var t=e.participants.filter((function(e){return e!==j.uid}));s.b.collection("users").doc(t[0]).onSnapshot((function(e){Z(e.data())}))};V(!1)}else V(!0),a.push("/")}),[f,a,j.uid]),c.a.createElement(c.a.Suspense,{fallback:c.a.createElement("p",null,"Loading")},c.a.createElement("div",{className:"chat"},f?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement(u,{roomCreatedBy:N,roomOwner:k,roomName:g,roomId:f,_roomId:E,messagesId:q,messages:J,db:s.b,chatUser:Y,history:a,isRoomExist:t})),c.a.createElement("div",{className:"chat__body"},H?c.a.createElement(d,{roomCreatedBy:N,roomOwner:k,roomId:f,messages:J,user:j,isRoomExist:t}):c.a.createElement("div",{className:"chat__body_loading"},c.a.createElement("div",null,c.a.createElement(i.a,null)))),c.a.createElement("div",null,c.a.createElement(m,{roomName:g,roomId:f,db:s.b,firebase:s.c,storage:s.e}))):c.a.createElement(b,{showLandingScreenPhoto:T})))}}}]);
//# sourceMappingURL=29.3ada99cd.chunk.js.map