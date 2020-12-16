(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{41:function(n,t,e){"use strict";e.r(t);var r=e(1),c=e(0),o=e(18),i=e.n(o),a=e(3),u=e(2),s=e(7),b=e(17),f="token",j=function(n){localStorage.setItem(f,n)},d=function(){return localStorage.getItem(f)},l="https://student-json-api.lidemy.me",p=function(){var n=d();return fetch("".concat(l,"/me"),{headers:{authorization:"Bearer ".concat(n)}}).then((function(n){return n.json()}))},g=Object(b.b)({name:"posts",initialState:{isLoadingPost:!1,post:{},newPostResponse:null,limit:5,activePage:1,allPaginationsNumber:0},reducers:{setIsLoadingPost:function(n,t){n.isLoadingPost=t.payload},setPost:function(n,t){n.post=t.payload},clearPost:function(n){n.post={}},setPostResponse:function(n,t){n.newPostResponse=t.payload},clearPostResponse:function(n){n.newPostResponse=null},setActivePage:function(n,t){n.activePage=t.payload},setAllPaginationsNumber:function(n,t){n.allPaginationsNumber=t.payload}}}),O=g.actions,x=O.setIsLoadingPost,h=O.setPost,v=O.clearPost,m=O.setPostResponse,y=O.clearPostResponse,P=(O.setIsDelete,O.setActivePage),k=O.setAllPaginationsNumber,w=function(n){return function(t){return t(x(!0)),function(n){return fetch("".concat(l,"/posts/").concat(n)).then((function(n){return n.json()}))}(n).then((function(n){return t(h(n)),t(x(!1)),n})).catch((function(n){console.log(n)}))}},S=function(n,t){return function(e){e(x(!0)),function(n,t){var e=d();return fetch("".concat(l,"/posts"),{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer ".concat(e)},body:JSON.stringify({title:n,body:t})}).then((function(n){return n.json()}))}(n,t).then((function(n){e(m(n)),e(x(!1))})).catch((function(n){console.log(n)}))}},L=function(n,t,e){return function(r){(function(n,t,e){return fetch("".concat(l,"/posts/").concat(e),{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({title:n,body:t})}).then((function(n){return n.json()}))})(n,t,e).then((function(n){r(m(n))})).catch((function(n){console.log(n)}))}},R=function(n){return function(t){return function(n){return fetch("".concat(l,"/posts/").concat(n),{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(n){return n.json()}))}(n).then((function(n){return n}))}},z=function(n,t){return function(e){(function(n,t){return fetch("".concat(l,"/posts?_sort=createdAt&_order=desc&_limit=").concat(n,"&_page=").concat(t)).then((function(n){return n}))})(n,t).then((function(t){var r=t.headers.get("x-total-count");return e(k(Math.ceil(r/n))),t.json()})).then((function(n){e(h(n))})).catch((function(n){console.log(n)}))}},E=g.reducer,A=e(4),C=e(6);function N(){var n=Object(a.a)([""]);return N=function(){return n},n}function T(){var n=Object(a.a)(["\n  background: white;\n  border: 1px solid rgba(255, 0, 0, 0.6);\n  border-radius: 8px;\n  padding: 5px;\n  font-size: 16px;\n  color: rgba(255, 0, 0, 0.6);\n\n  &:hover {\n    color: rgba(255, 255, 255);\n    background: rgba(255, 0, 0, 0.6);\n    transition: all 0.2s;\n  }\n"]);return T=function(){return n},n}function F(){var n=Object(a.a)(["\n  text-decoration: none;\n  padding: 5px;\n  border: 1px solid rgba(0, 0, 255, 0.6);\n  border-radius: 8px;\n  color: rgba(0, 0, 255, 0.6);\n  margin-right: 5px;\n\n  &:hover{\n    color: rgba(255, 255, 255);\n    background: rgba(0, 0, 255, 0.6);\n    transition: all 0.2s;\n  }\n"]);return F=function(){return n},n}var I=Object(u.b)(s.b)(F()),M=u.b.button(T()),$=u.b.div(N());var _=function(n){var t=n.post,e=Object(A.b)(),c=Object(A.c)((function(n){return n.posts.limit})),o=Object(A.c)((function(n){return n.posts.activePage})),i=Object(C.f)();return Object(r.jsxs)($,{children:[Object(r.jsx)(I,{to:"/update-post/".concat(t.id),children:"\u66f4\u65b0"}),Object(r.jsx)(M,{onClick:function(){var n;n=t.id,e(R(n)).then((function(){e(z(c,o)),i.push("/")}))},children:"\u522a\u9664"})]})};function J(){var n=Object(a.a)([""]);return J=function(){return n},n}function U(){var n=Object(a.a)(["\n  font-size: 24px;\n  background: white;\n  border: none;\n  border-bottom: 1px solid black;\n  cursor: pointer;\n\n  & + & {\n    margin-left: 8px;\n  }\n\n  &:hover {\n    background: rgba(0, 0, 0, 0.6);\n    color: white;\n    border-radius: 8px;\n    transition: all 0.2s;\n  }\n\n  ","\n"]);return U=function(){return n},n}function D(){var n=Object(a.a)(["\n  text-align: center;\n  margin-top: 10px;\n"]);return D=function(){return n},n}function B(){var n=Object(a.a)(["\n  color: rgba(0, 0, 0, 0.8);\n"]);return B=function(){return n},n}function H(){var n=Object(a.a)(["\n  font-size: 24px;\n  color: #333;\n  text-decoration: none;\n"]);return H=function(){return n},n}function Z(){var n=Object(a.a)(["\n  border-bottom: 1px solid rgba(0, 12, 34, 0.2);\n  padding: 16px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n"]);return Z=function(){return n},n}function G(){var n=Object(a.a)(["\n  position: relative;\n  width: 80%;\n  margin: 0 auto;\n"]);return G=function(){return n},n}var q=u.b.div(G()),K=u.b.div(Z()),Q=Object(u.b)(s.b)(H()),V=u.b.div(B()),W=u.b.div(D()),X=u.b.button(U(),(function(n){return n.$active&&"\n    background: rgba(0, 0, 0, 0.2);\n    border-radius: 8px;\n    border: none;\n  "})),Y=u.b.div(J());function nn(n){var t=n.post,e=Object(A.c)((function(n){return n.users.user}));return Object(r.jsxs)(K,{children:[Object(r.jsx)(Q,{to:"/posts/".concat(t.id),children:t.title}),Object(r.jsxs)(Y,{children:[e&&Object(r.jsx)(_,{post:t}),Object(r.jsx)(V,{children:new Date(t.createdAt).toLocaleString()})]})]})}function tn(n){for(var t=n.allPaginationsNumber,e=n.activePage,c=n.handlePagePagination,o=[],i=1;i<=t;i++)o.push(i);return o.map((function(n){return Object(r.jsx)(X,{$active:e===n,onClick:function(){c(n)},children:n},n)}))}function en(){var n=Object(A.b)(),t=Object(A.c)((function(n){return n.posts.post})),e=Object(A.c)((function(n){return n.posts.limit})),o=Object(A.c)((function(n){return n.posts.activePage})),i=Object(A.c)((function(n){return n.posts.allPaginationsNumber}));return Object(c.useEffect)((function(){n(z(e,o))}),[n,o,e]),Object(r.jsxs)(q,{children:[t.length&&t.map((function(n){return Object(r.jsx)(nn,{post:n},n.id)})),Object(r.jsx)(W,{children:Object(r.jsx)(tn,{allPaginationsNumber:i,activePage:o,handlePagePagination:function(t){n(P(t))}})})]})}var rn=e(9),cn=Object(b.b)({name:"users",initialState:{isLoadingLogin:!1,user:null,registerResponse:null,errorMessage:null},reducers:{setIsLoadingLogin:function(n,t){n.isLoadingLogin=t.payload},setUser:function(n,t){n.user=t.payload},setRegisterResponse:function(n,t){n.registerResponse=t.payload},setErrorMessage:function(n,t){n.errorMessage=t.payload},clearUser:function(n){n.user=null}}}),on=cn.actions,an=on.setIsLoadingLogin,un=on.setUser,sn=(on.setRegisterResponse,on.setErrorMessage),bn=on.clearUser,fn=function(n,t,e){return function(r){(function(n,t,e){return fetch("".concat(l,"/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:n,username:t,password:e})}).then((function(n){return n.json()}))})(n,t,e).then((function(n){if(1!==n.ok)return r(sn(n.message));j(n.token),p().then((function(t){if(r(an(!0)),1!==t.ok)return r(an(!1)),r(sn(n.message));r(un(t.data)),r(an(!1))}))}))}},jn=function(n,t){return function(e){(function(n,t){return fetch("".concat(l,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:n,password:t})}).then((function(n){return n.json()}))})(n,t).then((function(n){if(1!==n.ok)return e(sn(n.message));j(n.token),p().then((function(n){if(e(an(!0)),1!==n.ok)return e(an(!1)),e(sn(n.message));e(un(n.data)),e(an(!1))}))}))}},dn=cn.reducer;function ln(){var n=Object(a.a)(["\n  padding: 10px;\n  background: rgba(0, 0, 255, 0.7);\n  color: rgba(255, 255, 255, 0.9);\n  cursor: pointer;\n\n  &:hover {\n    border-radius: 8px;\n    background: green;\n    transition: all 0.1s;\n  }\n"]);return ln=function(){return n},n}function pn(){var n=Object(a.a)(["\n  color: red;\n"]);return pn=function(){return n},n}var gn=u.b.div(pn()),On=u.b.button(ln());function xn(){var n=Object(c.useState)(""),t=Object(rn.a)(n,2),e=t[0],o=t[1],i=Object(c.useState)(""),a=Object(rn.a)(i,2),u=a[0],s=a[1],b=Object(C.f)(),f=Object(A.b)(),j=Object(A.c)((function(n){return n.users.errorMessage})),d=Object(A.c)((function(n){return n.users.user}));return Object(c.useEffect)((function(){d&&d.id&&b.push("/")})),Object(r.jsxs)("form",{onSubmit:function(n){n.preventDefault(),f(jn(e,u))},children:["username:"," ",Object(r.jsx)("input",{style:{marginRight:"8px"},value:e,onChange:function(n){o(n.target.value)}}),"password:"," ",Object(r.jsx)("input",{style:{marginRight:"8px"},type:"password",value:u,onChange:function(n){s(n.target.value)}}),Object(r.jsx)(On,{children:"\u767b\u5165"}),j&&Object(r.jsx)(gn,{children:j})]})}function hn(){var n=Object(a.a)(["\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  background: rgba(0, 0, 0, 0.6);\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 42px;\n"]);return hn=function(){return n},n}function vn(){var n=Object(a.a)([""]);return vn=function(){return n},n}function mn(){var n=Object(a.a)([""]);return mn=function(){return n},n}function yn(){var n=Object(a.a)(["\n  padding: 8px;\n"]);return yn=function(){return n},n}var Pn=u.b.div(yn()),kn=u.b.div(mn()),wn=u.b.div(vn()),Sn=u.b.div(hn());function Ln(n){var t=n.singlePost,e=n.isLoading,c=Object(A.c)((function(n){return n.users.user}));return Object(r.jsxs)(Pn,{children:[e&&Object(r.jsx)(Sn,{children:"Loading ..."}),c&&Object(r.jsx)(_,{post:t}),Object(r.jsx)(kn,{children:t.title}),Object(r.jsx)(wn,{children:t.body})]})}function Rn(){var n=Object(C.h)().id,t=Object(A.b)(),e=Object(A.c)((function(n){return n.posts.isLoadingPost})),o=Object(A.c)((function(n){return n.posts.post}));return Object(c.useEffect)((function(){t(w(n))}),[n,t]),Object(c.useEffect)((function(){return function(){t(v())}}),[t]),Object(r.jsx)(Ln,{singlePost:o,isLoading:e})}function zn(){var n=Object(a.a)(["\n  padding: 10px;\n  background: #333;\n  color: rgba(255, 255, 255, 0.9);\n  cursor: pointer;\n\n  &:hover {\n    border-radius: 8px;\n    background: green;\n    transition: all 0.1s;\n  }\n"]);return zn=function(){return n},n}function En(){var n=Object(a.a)(["\n  background: rgba(255, 0, 0, 0.8);\n  color: rgba(255, 255, 255, 0.9);\n  padding: 10px;\n  border-radius: 8px;\n"]);return En=function(){return n},n}function An(){var n=Object(a.a)(["\n  margin: 0px 8px;\n  padding: 8px;\n"]);return An=function(){return n},n}function Cn(){var n=Object(a.a)(["\n  text-align: center;\n"]);return Cn=function(){return n},n}function Nn(){var n=Object(a.a)(["\n  color: red;\n"]);return Nn=function(){return n},n}var Tn=u.b.div(Nn()),Fn=u.b.form(Cn()),In=u.b.input(An()),Mn=u.b.span(En()),$n=u.b.button(zn());function _n(){var n=Object(c.useState)(""),t=Object(rn.a)(n,2),e=t[0],o=t[1],i=Object(c.useState)(""),a=Object(rn.a)(i,2),u=a[0],s=a[1],b=Object(c.useState)(""),f=Object(rn.a)(b,2),j=f[0],d=f[1],l=Object(C.f)(),p=Object(A.b)(),g=Object(A.c)((function(n){return n.users.errorMessage})),O=Object(A.c)((function(n){return n.users.user}));return Object(c.useEffect)((function(){O&&O.id&&l.push("/")}),[O,l]),Object(r.jsxs)(Fn,{onSubmit:function(n){n.preventDefault(),p(fn(e,u,j))},children:[Object(r.jsx)(Mn,{children:"nickname:"}),Object(r.jsx)(In,{value:e,onChange:function(n){o(n.target.value)}}),Object(r.jsx)(Mn,{children:"username:"}),Object(r.jsx)(In,{value:u,onChange:function(n){s(n.target.value)}}),Object(r.jsx)(Mn,{children:"password:"}),Object(r.jsx)(In,{type:"password",value:j,onChange:function(n){d(n.target.value)}}),Object(r.jsx)($n,{children:"\u8a3b\u518a"}),g&&Object(r.jsx)(Tn,{children:g})]})}function Jn(){var n=Object(a.a)(["\n  position: absolute;\n  width: 100%;\n  border-radius: 8px;\n  left: 0px;\n  top: 0px;\n  opacity: 0.2;\n"]);return Jn=function(){return n},n}function Un(){var n=Object(a.a)(["\n  position: relative;\n  padding: 10px;\n  font-size: 24px;\n"]);return Un=function(){return n},n}function Dn(){var n=Object(a.a)([""]);return Dn=function(){return n},n}function Bn(){var n=Object(a.a)(["\n  text-align: center;\n  font-size: 32px;\n  font-weight: bold;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.5);\n  padding: 10px 0px;\n"]);return Bn=function(){return n},n}function Hn(){var n=Object(a.a)(["\n  margin: 0 auto;\n  width: 80%;\n"]);return Hn=function(){return n},n}var Zn=u.b.div(Hn()),Gn=u.b.div(Bn()),qn=u.b.div(Dn()),Kn=u.b.div(Un()),Qn=u.b.img(Jn());function Vn(){return Object(r.jsxs)(Zn,{children:[Object(r.jsx)(Gn,{children:"\u95dc\u65bc\u9019\u500b\u90e8\u843d\u683c"}),Object(r.jsx)(qn,{children:Object(r.jsxs)(Kn,{children:["\u9019\u662f\u4e00\u500b\u7df4\u7fd2\u5982\u4f55\u4f7f\u7528 React \u7684\u7c21\u6613\u90e8\u843d\u683c\uff0c\u6709\u7c21\u55ae\u7684\u767b\u5165\u529f\u80fd\uff0c\u8a3b\u518a\u529f\u80fd\uff0c\u767c\u8868\u6587\u7ae0\uff0c\u9996\u9801\u6587\u7ae0\u5217\u8868\uff0c\u9ede\u9032\u53bb\u80fd\u770b\u5230\u55ae\u7bc7\u6587\u7ae0\uff0c\u9996\u9801\u5206\u9801\u529f\u80fd\uff0c\u505a\u4e86\u9019\u4e9b\u624d\u767c\u73fe\u8001\u5e2b\u8aaa\u7684\u7d30\u7bc0\u5f88\u91cd\u8981\uff0c\u6709\u5404\u7a2e\u932f\u8aa4\u72c0\u6cc1\u8981\u6703\u61c2\u7684\u986f\u793a\u51fa\u4f86\uff0c\u4e0d\u904e\u6211\u90fd\u60f3\u4e0d\u592a\u5230...\u61c9\u8a72\u662f\u591a\u53bb\u5be6\u4f5c\u6216\u662f\u9047\u5230\u624d\u6703\u6ce8\u610f\u5230\uff0c\u4f46\u6709\u6642\u9047\u5230\u5c31\u4f86\u4e0d\u53ca\u4e86...\uff0c\u5229\u7528\u9019\u4e9b\u7df4\u7fd2\u85c9\u6b64\u4f86\u5b78\u7fd2 React \u57fa\u672c\u4f7f\u7528\u65b9\u6cd5\uff0c\u8001\u5e2b\u4e5f\u8aaa\u660e\u6703\u7528\u4e86\u9019\u4e9b\u518d\u53bb\u505a\u5ef6\u4f38\u76f8\u4fe1\u80fd\u61c9\u4ed8\u5927\u90e8\u5206\u5834\u9762\uff1f \u5728\u6b64\u4e5f\u611f\u8b1d Huli \u8001\u5e2b\u7684\u8010\u5fc3\u5730\u6559\u5c0e\u8b93\u6211\u5b78\u5230\u4e86\u5f88\u591a\u5f88\u591a\uff0c\u96e2\u6c42\u8077\u6642\u9593\u4e5f\u4e0d\u9060\u4e86\uff0c \u5e0c\u671b\u80fd\u5920\u4e00\u5207\u9806\u5229\uff5e",Object(r.jsx)(Qn,{src:"https://i.ibb.co/ZgbZ99y/IMG-1753.jpg"})]})})]})}function Wn(){var n=Object(a.a)(["\n  background: white;\n  padding: 8px;\n  cursor: pointer;\n  border-radius: 8px;\n\n  &:hover {\n    background: #548c00;\n    color: white;\n  }\n"]);return Wn=function(){return n},n}function Xn(){var n=Object(a.a)(["\n  width: 100%;\n  font-size: 18px;\n  padding: 5px;\n"]);return Xn=function(){return n},n}function Yn(){var n=Object(a.a)(["\n  padding: 8px;\n  border: none;\n  border-bottom: 1px solid black;\n  outline: none;\n  font-size: 18px;\n"]);return Yn=function(){return n},n}function nt(){var n=Object(a.a)(["\n  margin: 8px 0px;\n  font-size: 32px;\n"]);return nt=function(){return n},n}function tt(){var n=Object(a.a)([""]);return tt=function(){return n},n}function et(){var n=Object(a.a)(["\n  text-align: center;\n"]);return et=function(){return n},n}function rt(){var n=Object(a.a)(["\n  color: red;\n"]);return rt=function(){return n},n}var ct=u.b.div(rt()),ot=u.b.div(et()),it=u.b.form(tt()),at=u.b.div(nt()),ut=u.b.input(Yn()),st=u.b.textarea(Xn()),bt=u.b.button(Wn());function ft(){var n=Object(c.useState)(""),t=Object(rn.a)(n,2),e=t[0],o=t[1],i=Object(c.useState)(""),a=Object(rn.a)(i,2),u=a[0],s=a[1],b=Object(c.useState)(null),f=Object(rn.a)(b,2),j=f[0],d=f[1],l=Object(A.b)(),p=Object(C.f)(),g=Object(A.c)((function(n){return n.posts.newPostResponse})),O=Object(A.c)((function(n){return n.posts.isLoadingPost}));return Object(c.useEffect)((function(){if(g){if(0===g.ok)return d(g.message);p.push("/posts/".concat(g.id))}}),[g,p]),Object(c.useEffect)((function(){return function(){l(y())}})),Object(r.jsx)(ot,{children:Object(r.jsxs)(it,{onSubmit:function(){l(S(e,u))},children:[Object(r.jsx)(at,{children:Object(r.jsx)(ut,{placeholder:"Title",value:e,onChange:function(n){o(n.target.value)}})}),Object(r.jsx)(st,{rows:"10",value:u,onChange:function(n){s(n.target.value)}}),!O&&Object(r.jsx)(bt,{children:"\u767c\u5e03\u6587\u7ae0"}),j&&Object(r.jsx)(ct,{children:j})]})})}function jt(){var n=Object(a.a)(["\n  padding: 0px 20px;\n  background: white;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 24px;\n\n  &:hover {\n    background: #333;\n    color: white;\n  }\n"]);return jt=function(){return n},n}function dt(){var n=Object(a.a)([""]);return dt=function(){return n},n}function lt(){var n=Object(a.a)(["\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  background: rgba(0, 0, 0, 0.6);\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 42px;\n"]);return lt=function(){return n},n}function pt(){var n=Object(a.a)(["\n  width: 100%;\n  font-size: 18px;\n  padding: 5px;\n"]);return pt=function(){return n},n}function gt(){var n=Object(a.a)(["\n  margin: 8px 0px;\n  font-size: 32px;\n  padding: 8px;\n  border: none;\n  border-bottom: 1px solid black;\n  outline: none;\n  font-size: 18px;\n"]);return gt=function(){return n},n}function Ot(){var n=Object(a.a)(["\n  text-align: center;\n"]);return Ot=function(){return n},n}var xt=u.b.div(Ot()),ht=u.b.input(gt()),vt=u.b.textarea(pt()),mt=u.b.div(lt()),yt=u.b.form(dt()),Pt=u.b.button(jt());function kt(n){n.singlePost;var t=n.isLoading,e=n.title,c=n.setTitle,o=n.textArea,i=n.setTextArea,a=n.handleUpdateSubmit;return Object(r.jsxs)(xt,{children:[t&&Object(r.jsx)(mt,{children:"Loading ..."}),Object(r.jsxs)(yt,{onSubmit:a,children:[Object(r.jsx)(ht,{placeholder:"title",value:e,onChange:function(n){c(n.target.value)}}),Object(r.jsx)(vt,{value:o,rows:"10",onChange:function(n){i(n.target.value)}}),Object(r.jsx)(Pt,{children:"\u66f4\u65b0"})]})]})}function wt(){var n=Object(c.useState)(""),t=Object(rn.a)(n,2),e=t[0],o=t[1],i=Object(c.useState)(""),a=Object(rn.a)(i,2),u=a[0],s=a[1],b=Object(C.h)().id,f=Object(A.b)(),j=Object(C.f)(),d=Object(A.c)((function(n){return n.posts.isLoadingPost})),l=Object(A.c)((function(n){return n.posts.post})),p=Object(A.c)((function(n){return n.posts.newPostResponse}));return Object(c.useEffect)((function(){f(w(b)).then((function(n){o(n.title),s(n.body)}))}),[b,f]),Object(c.useEffect)((function(){p&&j.push("/posts/".concat(p.id))})),Object(c.useEffect)((function(){return function(){f(v()),f(y())}}),[f]),Object(r.jsx)(kt,{singlePost:l,isLoading:d,title:e,setTitle:o,textArea:u,setTextArea:s,handleUpdateSubmit:function(){f(L(e,u,b))}})}function St(){var n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n"]);return St=function(){return n},n}function Lt(){var n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  margin-left: 8px;\n  padding: 10px;\n  cursor: pointer;\n  color: black;\n  text-decoration: none;\n  background: rgba(255, 255, 255, 1);\n  border: none;\n  font-size: 16px;\n\n  &:hover {\n    color: red;\n  }\n"]);return Lt=function(){return n},n}function Rt(){var n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  margin-left: 8px;\n  padding: 10px;\n  cursor: pointer;\n  color: black;\n  text-decoration: none;\n\n  ","\n  &:hover {\n    color: red;\n  }\n"]);return Rt=function(){return n},n}function zt(){var n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n"]);return zt=function(){return n},n}function Et(){var n=Object(a.a)([""]);return Et=function(){return n},n}function At(){var n=Object(a.a)(["\n  height: 64px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 0px 32px;\n  background: rgba(255, 255, 255, 1);\n  z-index: 2;\n"]);return At=function(){return n},n}var Ct=u.b.div(At()),Nt=u.b.h1(Et()),Tt=u.b.div(zt()),Ft=Object(u.b)(s.b)(Rt(),(function(n){return n.$active&&"\n    background: rgba(0, 0, 0, 0.2);\n    border-radius: 8px;\n  "})),It=u.b.button(Lt()),Mt=u.b.div(St());var $t=function(){var n=Object(C.g)(),t=Object(A.b)(),e=Object(A.c)((function(n){return n.users.user})),c=Object(C.f)();return Object(r.jsxs)(Ct,{children:[Object(r.jsxs)(Mt,{children:[Object(r.jsx)(Nt,{children:"\u6211\u7684\u7b2c\u4e00\u500b\u90e8\u843d\u683c"}),Object(r.jsxs)(Tt,{children:[Object(r.jsx)(Ft,{to:"/",$active:"/"===n.pathname,children:"\u9996\u9801"}),Object(r.jsx)(Ft,{to:"/about",$active:"/about"===n.pathname,children:"\u95dc\u65bc\u9019\u500b\u90e8\u843d\u683c"}),e&&Object(r.jsx)(Ft,{to:"/new-post",$active:"/new-post"===n.pathname,children:" \u767c\u5e03\u6587\u7ae0 "})]})]}),Object(r.jsx)(Tt,{children:e?Object(r.jsx)(It,{onClick:function(){j(""),t(bn()),"/"!==n.pathname&&c.push("/")},children:"\u767b\u51fa"}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(Ft,{to:"/login",$active:"/login"===n.pathname,children:"\u767b\u5165"}),Object(r.jsx)(Ft,{to:"/register",$active:"/register"===n.pathname,children:"\u8a3b\u518a"})]})})]})};function _t(){var n=Object(a.a)(["\n  padding-top: 64px;\n"]);return _t=function(){return n},n}var Jt=u.b.div(_t());var Ut=function(){var n=Object(A.c)((function(n){return n.users.isLoadingLogin})),t=Object(A.b)();return Object(c.useEffect)((function(){""!==d()&&t((function(n){p().then((function(t){if(n(an(!0)),1!==t.ok)return n(an(!1)),n(sn(t.message));n(un(t.data)),n(an(!1))}))}))}),[t]),Object(r.jsx)(Jt,{children:Object(r.jsxs)(s.a,{children:[!n&&Object(r.jsx)($t,{}),Object(r.jsxs)(C.c,{children:[Object(r.jsx)(C.a,{exact:!0,path:"/",children:Object(r.jsx)(en,{})}),Object(r.jsx)(C.a,{path:"/login",children:Object(r.jsx)(xn,{})}),Object(r.jsx)(C.a,{path:"/posts/:id",children:Object(r.jsx)(Rn,{})}),Object(r.jsx)(C.a,{path:"/register",children:Object(r.jsx)(_n,{})}),Object(r.jsx)(C.a,{path:"/about",children:Object(r.jsx)(Vn,{})}),Object(r.jsx)(C.a,{path:"/new-post",children:Object(r.jsx)(ft,{})}),Object(r.jsx)(C.a,{path:"/update-post/:id",children:Object(r.jsx)(wt,{})})]})]})})},Dt=Object(b.a)({reducer:{posts:E,users:dn}});i.a.render(Object(r.jsx)(A.a,{store:Dt,children:Object(r.jsx)(u.a,{theme:{colors:{primary_green:"#00AA00",primary_red:"#FF0000",primary_white:"#FFFFFF"}},children:Object(r.jsx)(Ut,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.7edf5429.chunk.js.map