(this.webpackJsonp01_tictactoe_game=this.webpackJsonp01_tictactoe_game||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(7),i=c.n(r),s=(c(12),c(6)),a=c(2);var l=c(0);function o(e){var t=e.value,c=e.onClick,n=t?"squares ".concat(t):"squares";return Object(l.jsx)("button",{className:n,onClick:c,children:t})}function j(e){var t=e.squares,c=e.onClick;return Object(l.jsx)("div",{className:"board",children:t.map((function(e,t){return Object(l.jsx)(o,{value:e,onClick:function(){return c(t)}},t)}))})}var b=function(){var e=Object(n.useState)([Array(9).fill(null)]),t=Object(a.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)(0),o=Object(a.a)(i,2),b=o[0],u=o[1],d=Object(n.useState)(!0),O=Object(a.a)(d,2),h=O[0],x=O[1],f=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],c=0;c<t.length;c++){var n=Object(a.a)(t[c],3),r=n[0],i=n[1],s=n[2];if(e[r]&&e[r]===e[i]&&e[r]===e[s])return e[r]}return null}(c[b]),v=h?"X":"O";return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{style:{textAlign:"center"},children:"Tic Tac Toe"}),Object(l.jsxs)("div",{className:"grid-container",children:[Object(l.jsxs)("div",{className:"info-wrapper grid-item",children:[Object(l.jsx)("h3",{children:"History"}),c.map((function(e,t){var c=t?"Go to move #".concat(t):"Go to Start";return Object(l.jsx)("li",{children:Object(l.jsx)("button",{onClick:function(){return u(e=t),void x(e%2===0);var e},children:c})},t)}))]}),Object(l.jsx)("div",{className:"grid-item",children:Object(l.jsx)(j,{squares:c[b],onClick:function(e){var t=c.slice(0,b+1),n=t[b],i=Object(s.a)(n);f||i[e]||(i[e]=v,r([].concat(Object(s.a)(t),[i])),u(t.length),x(!h))}})}),Object(l.jsxs)("div",{className:"grid-item",children:[Object(l.jsx)("h3",{children:f?"Winner: "+f:c.length>9?"Game - Draw":"Next Player: "+v}),Object(l.jsx)("button",{className:"clear-btn",onClick:function(){r([Array(9).fill(null)]),u(0),x(!0)},children:"Clear"})]})]}),Object(l.jsxs)("footer",{style:{textAlign:"center"},children:[Object(l.jsx)("span",{style:{fontStyle:"bold"},children:"Inspired from Windows 11"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("span",{style:{fontStyle:"italic",fontSize:"10px"},children:"All Rights Reserved"})]})]})};i.a.render(Object(l.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f726f5d8.chunk.js.map