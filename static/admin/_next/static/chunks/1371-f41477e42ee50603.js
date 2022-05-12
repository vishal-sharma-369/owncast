"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1371],{66192:function(e,n,r){r.d(n,{Z:function(){return h}});var t=r(34051),s=r.n(t),o=r(85893),a=r(52455),i=r(71577),c=r(21640),l=r(82911),u=r(84674),d=r(58827);function f(e,n,r,t,s,o,a){try{var i=e[o](a),c=i.value}catch(l){return void r(l)}i.done?n(c):Promise.resolve(c).then(t,s)}function m(e){return function(){var n=this,r=arguments;return new Promise((function(t,s){var o=e.apply(n,r);function a(e){f(o,t,s,a,i,"next",e)}function i(e){f(o,t,s,a,i,"throw",e)}a(void 0)}))}}function h(e){var n=e.user,r=e.isEnabled,t=e.label,f=e.onClick;function h(){return(h=m(s().mark((function e(n){var t,o,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.id,o={userId:t,enabled:!r},e.prev=2,e.next=5,(0,d.rQ)(d.NM,{data:o,method:"POST",auth:!0});case 5:return a=e.sent,e.abrupt("return",a.success);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:return e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}var p=r?"ban":"unban",x=r?(0,o.jsx)(c.Z,{style:{color:"var(--ant-error)"}}):(0,o.jsx)(l.Z,{style:{color:"var(--ant-warning)"}}),v=(0,o.jsxs)(o.Fragment,{children:["Are you sure you want to ",p," ",(0,o.jsx)("strong",{children:n.displayName}),r?" and remove their messages?":"?"]});return(0,o.jsx)(i.Z,{onClick:function(){a.Z.confirm({title:"Confirm ".concat(p),content:v,onCancel:function(){},onOk:function(){return new Promise((function(e,r){var t=function(e){return h.apply(this,arguments)}(n);t?setTimeout((function(){e(t),null===f||void 0===f||f()}),3e3):r()}))},okType:"danger",okText:r?"Absolutely":null,icon:x})},size:"small",icon:r?(0,o.jsx)(u.Z,{twoToneColor:"#ff4d4f"}):null,className:"block-user-button",children:t||p})}h.defaultProps={label:"",onClick:null}},85584:function(e,n,r){r.d(n,{Z:function(){return O}});var t=r(85893),s=r(67294),o=r(56266),a=r(52455),i=r(84485),c=r(25968),l=r(6226),u=r(27049),d=r(26713),f=r(85533),m=r(58091),h=r(96486),p=r(66192),x=r(34051),v=r.n(x),j=r(71577),b=r(21640),y=r(82911),g=r(84674),w=r(24478),Z=r(58827);function k(e,n,r,t,s,o,a){try{var i=e[o](a),c=i.value}catch(l){return void r(l)}i.done?n(c):Promise.resolve(c).then(t,s)}function C(e){return function(){var n=this,r=arguments;return new Promise((function(t,s){var o=e.apply(n,r);function a(e){k(o,t,s,a,i,"next",e)}function i(e){k(o,t,s,a,i,"throw",e)}a(void 0)}))}}function A(e){var n,r=e.user,s=e.onClick;function o(){return(o=C(v().mark((function e(n,r){var t,s,o;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.id,s={userId:t,isModerator:r},e.prev=2,e.next=5,(0,Z.rQ)(Z.jr,{data:s,method:"POST",auth:!0});case 5:return o=e.sent,e.abrupt("return",o.success);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:return e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}var i=null===(n=r.scopes)||void 0===n?void 0:n.includes("MODERATOR"),c=i?"remove moderator":"add moderator",l=i?(0,t.jsx)(b.Z,{style:{color:"var(--ant-error)"}}):(0,t.jsx)(y.Z,{style:{color:"var(--ant-warning)"}}),u=(0,t.jsxs)(t.Fragment,{children:["Are you sure you want to ",c," ",(0,t.jsx)("strong",{children:r.displayName}),"?"]});return(0,t.jsx)(j.Z,{onClick:function(){a.Z.confirm({title:"Confirm ".concat(c),content:u,onCancel:function(){},onOk:function(){return new Promise((function(e,n){var t=function(e,n){return o.apply(this,arguments)}(r,!i);t?setTimeout((function(){e(t),null===s||void 0===s||s()}),3e3):n()}))},okType:"danger",okText:i?"Yup!":null,icon:l})},size:"small",icon:i?(0,t.jsx)(g.Z,{twoToneColor:"#ff4d4f"}):(0,t.jsx)(w.Z,{twoToneColor:"#22bb44"}),className:"block-user-button",children:c})}A.defaultProps={onClick:null};var T=r(20643),N=r(2766);function P(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function D(e){return function(e){if(Array.isArray(e))return P(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return P(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return P(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e){var n=e.user,r=e.connectionInfo,x=e.children,v=(0,s.useState)(!1),j=v[0],b=v[1],y=function(){b(!1)},g=n.displayName,w=n.createdAt,Z=n.previousNames,k=n.nameChangedAt,C=n.disabledAt,P=r||{},O=P.connectedAt,S=P.messageCount,I=P.userAgent,E=null,M=Z&&D(Z);Z&&Z.length>1&&k&&(E=new Date(k),M.reverse());var F=new Date(w),U=(0,m.Z)(F,"PP pp"),z=E?(0,f.Z)(E):null;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.Z,{title:(0,t.jsxs)(t.Fragment,{children:["Created at: ",U,".",(0,t.jsx)("br",{})," Click for more info."]}),placement:"bottomLeft",children:(0,t.jsx)("button",{type:"button","aria-label":"Display more details about this user",className:"user-item-container",onClick:function(){b(!0)},children:x})}),(0,t.jsx)(a.Z,{destroyOnClose:!0,width:600,cancelText:"Close",okButtonProps:{style:{display:"none"}},title:"User details: ".concat(g),visible:j,onOk:y,onCancel:y,children:(0,t.jsxs)("div",{className:"user-details",children:[(0,t.jsx)(i.Z.Title,{level:4,children:g}),(0,t.jsxs)("p",{className:"created-at",children:["User created at ",U,"."]}),(0,t.jsxs)(c.Z,{gutter:16,children:[r&&(0,t.jsxs)(l.Z,{md:E?12:24,children:[(0,t.jsx)(i.Z.Title,{level:5,children:"This user is currently connected to Chat."}),(0,t.jsxs)("ul",{className:"connection-info",children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Active for:"})," ",(0,f.Z)(new Date(O))]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"Messages sent:"})," ",S]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("strong",{children:"User Agent:"}),(0,t.jsx)("br",{}),(0,N.AB)(I)]})]})]}),E&&(0,t.jsxs)(l.Z,{md:r?12:24,children:[(0,t.jsx)(i.Z.Title,{level:5,children:"This user is also seen as:"}),(0,t.jsx)("ul",{className:"previous-names-list",children:(0,h.uniq)(M).map((function(e,n){return(0,t.jsxs)("li",{className:0===n?"latest":"",children:[(0,t.jsx)("span",{className:"user-name-item",children:e}),0===n?" (Changed ".concat(z," ago)"):""]})}))})]})]}),(0,t.jsx)(u.Z,{}),(0,t.jsxs)(d.Z,{direction:"horizontal",children:[C?(0,t.jsxs)(t.Fragment,{children:["This user was banned on ",(0,t.jsx)("code",{children:(0,T.u)(C)}),".",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(p.Z,{label:"Unban this user",user:n,isEnabled:!1,onClick:y})]}):(0,t.jsx)(p.Z,{label:"Ban this user",user:n,isEnabled:!0,onClick:y}),(0,t.jsx)(A,{user:n,onClick:y})]})]})})]})}O.defaultProps={connectionInfo:null}},20643:function(e,n,r){r.d(n,{u:function(){return c},Z:function(){return l}});var t=r(85893),s=r(96003),o=r(58091),a=r(85584),i=r(66192);function c(e){return(0,o.Z)(new Date(e),"MMM d H:mma")}function l(e){var n=e.data,r=[{title:"Last Known Display Name",dataIndex:"displayName",key:"displayName",render:function(e,n){return(0,t.jsx)(a.Z,{user:n,children:(0,t.jsx)("span",{className:"display-name",children:e})})}},{title:"Created",dataIndex:"createdAt",key:"createdAt",render:function(e){return c(e)},sorter:function(e,n){return new Date(e.createdAt).getTime()-new Date(n.createdAt).getTime()},sortDirections:["descend","ascend"]},{title:"Disabled at",dataIndex:"disabledAt",key:"disabledAt",defaultSortOrder:"descend",render:function(e){return e?c(e):null},sorter:function(e,n){return new Date(e.disabledAt).getTime()-new Date(n.disabledAt).getTime()},sortDirections:["descend","ascend"]},{title:"",key:"block",className:"actions-col",render:function(e,n){return(0,t.jsx)(i.Z,{user:n,isEnabled:!n.disabledAt})}}];return(0,t.jsx)(s.Z,{pagination:{hideOnSinglePage:!0},className:"table-container",columns:r,dataSource:n,size:"small",rowKey:"id"})}}}]);