(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"2vW9":function(e,t,n){"use strict";var a=n("Fcif"),r=n("dV/x"),o=n("mXGw"),i=(n("W0B4"),n("PDtE")),s=n("gbh0"),c=n("mxPc"),l=n("bJWG"),u=o.forwardRef((function(e,t){var n=e.classes,s=e.className,u=e.color,d=void 0===u?"primary":u,p=e.position,m=void 0===p?"fixed":p,f=Object(r.a)(e,["classes","className","color","position"]);return o.createElement(l.a,Object(a.a)({square:!0,component:"header",elevation:4,className:Object(i.a)(n.root,n["position".concat(Object(c.a)(m))],n["color".concat(Object(c.a)(d))],s,"fixed"===m&&"mui-fixed"),ref:t},f))}));t.a=Object(s.a)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static",transform:"translateZ(0)"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(u)},"60we":function(e,t,n){"use strict";var a=n("UrUy"),r=n.n(a),o=n("mXGw"),i=n.n(o),s=n("R82R"),c=n("bJWG"),l=n("q+kb"),u=n("Fcif"),d=n("dV/x"),p=(n("W0B4"),n("PDtE")),m=n("gbh0"),f=n("Rx6o"),b=o.forwardRef((function(e,t){var n=e.absolute,a=void 0!==n&&n,r=e.classes,i=e.className,s=e.component,c=void 0===s?"hr":s,l=e.flexItem,m=void 0!==l&&l,f=e.light,b=void 0!==f&&f,g=e.orientation,v=void 0===g?"horizontal":g,h=e.role,x=void 0===h?"hr"!==c?"separator":void 0:h,y=e.variant,w=void 0===y?"fullWidth":y,O=Object(d.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return o.createElement(c,Object(u.a)({className:Object(p.a)(r.root,i,"fullWidth"!==w&&r[w],a&&r.absolute,m&&r.flexItem,b&&r.light,"vertical"===v&&r.vertical),role:x,ref:t},O))})),g=Object(m.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(f.c)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(b),v=n("oQEK"),h=n("eiJB"),x=n.n(h),y=n("KoC1");n.d(t,"a",(function(){return k}));var w=i.a.createElement,O={createMessage:"mutation($text: String, $conversation: ConversationWhereUniqueInput) {\n    createMessage(\n      data: { text: $text, conversation: { connect: $conversation } }\n    ) {\n      id\n    }\n  }"},j=Object(s.a)((function(e){return{root:{padding:"1px 2px",display:"flex",alignItems:"center",width:"100%",borderRadius:8},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:8},divider:{height:21,margin:3}}}));function k(e){var t=e.conversation,n=j(),a=Object(o.useState)(),i=a[0],s=a[1],u=Object(o.useState)();u[0],u[1];function d(){var e,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!i){a.next=7;break}return a.next=3,r.a.awrap(Object(y.a)({body:{query:O.createMessage,variables:{text:i,conversation:t}}}));case 3:e=a.sent,n=e.data,console.log(n),s("");case 7:case"end":return a.stop()}}))}return w(c.a,{className:n.root,onKeyPress:function(e){return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if("Enter"!=e.key){t.next=3;break}return t.next=3,r.a.awrap(d());case 3:case"end":return t.stop()}}))}},w(l.a,{className:n.input,placeholder:"Nh\u1eadp tin nh\u1eafn",onChange:function(e){return s(e.target.value)},inputProps:{"aria-label":"Nh\u1eadp tin nh\u1eafn"},value:i||""}),w(g,{className:n.divider,orientation:"vertical"}),w(v.a,{onClick:function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.awrap(d());case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}))},color:"primary",className:n.iconButton},w(x.a,null)))}},"63Ad":function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"8NVm":function(e,t,n){"use strict";var a=n("Fcif"),r=n("dV/x"),o=n("mK0O"),i=n("mXGw"),s=(n("W0B4"),n("PDtE")),c=n("gbh0"),l=i.forwardRef((function(e,t){var n=e.classes,o=e.className,c=e.component,l=void 0===c?"div":c,u=e.disableGutters,d=void 0!==u&&u,p=e.variant,m=void 0===p?"regular":p,f=Object(r.a)(e,["classes","className","component","disableGutters","variant"]);return i.createElement(l,Object(a.a)({className:Object(s.a)(n.root,n[m],o,!d&&n.gutters),ref:t},f))}));t.a=Object(c.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:Object(o.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(l)},"8VmE":function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},"9as9":function(e,t,n){"use strict";n.r(t);var a=n("UrUy"),r=n.n(a),o=n("mXGw"),i=n.n(o),s=n("R82R"),c=n("2vW9"),l=n("I4Pu"),u=n("8NVm"),d=n("SMlj"),p=n("2W1i"),m=n.n(p),f=n("eUpb"),b=n("f+cz"),g=n("60we"),v=(n("6M0/"),n("OrM8")),h=n("bBV7"),x=n.n(h),y=i.a.createElement,w=Object(s.a)((function(e){return{text:{padding:e.spacing(2,2,0)},paper:{paddingBottom:50},list:{marginBottom:e.spacing(2)},subheader:{backgroundColor:e.palette.background.paper},appBar:{top:"auto",bottom:0,backgroundColor:"white",boxShadow:"none"},toolbar:{padding:13,boder:"none"},grow:{flexGrow:1},fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"}}})),O="query {\n    allAdmins: allUsers(where: { isAdmin: true }) {\n      id\n    }\n  }",j="query($user: UserWhereInput) {\n    allConversations(where: { members_some: $user }) {\n      id\n    }\n  }",k='query($conversation: ConversationWhereInput) {\n    allMessages(orderBy: "time_ASC", where: { conversation: $conversation }) {\n      seller {\n        isCustomer\n        isSupporter\n        isAdmin\n        email\n        id\n      }\n      id\n      text\n      time\n    }\n  }',C="mutation($members: [UserWhereUniqueInput]) {\n    createConversation(data: { members: { connect: $members } }) {\n      id\n    }\n  }";function S(e){var t=e.allConversations,n=e.allMessages,a=e.isAdmin,r=(e.isSupporter,w());return"true"==a&&x.a.push("/adminChat"),y(f.a,null,y(v.a,{href:"/"},"Quay l\u1ea1i"),y(i.a.Fragment,null,y(l.a,null),y(b.a,{allMessages:n,conversation:t[0],role:"isCustomer"}),y(c.a,{position:"fixed",className:r.appBar},y(u.a,{className:r.toolbar},y(g.a,{conversation:t[0]}),"}"))))}S.getInitialProps=function(e){var t,n,a,o,i,s,c,l,u,d,p,f,b;return r.a.async((function(g){for(;;)switch(g.prev=g.next){case 0:return t=e.res,n=e.client,a=e.id,e.email,o=e.isAdmin,i=e.isSupporter,e.isCustomer,g.prev=1,g.next=4,r.a.awrap(n.request(j,{user:{id:a}}));case 4:if(s=g.sent,!(c=s.allConversations).length){g.next=13;break}return g.next=9,r.a.awrap(n.request(k,{conversation:{id:c[0].id}}));case 9:l=g.sent,u=l.allMessages,g.next=23;break;case 13:return g.next=15,r.a.awrap(n.request(O));case 15:return d=g.sent,(p=d.allAdmins).push({id:a}),g.next=20,r.a.awrap(n.request(C,{members:p}));case 20:f=g.sent,b=f.createConversation,c.push(b);case 23:return g.abrupt("return",{allConversations:c,allMessages:u,isAdmin:o,isSupporter:i});case 26:g.prev=26,g.t0=g.catch(1),console.log(g.t0),m.a.remove("token"),n.request("mutation {\n      unauthenticateUser {\n        success\n      }\n    }"),t&&(t.writeHead(302,{Location:"/login"}),t.end());case 32:case"end":return g.stop()}}),null,null,[[1,26]])},t.default=Object(d.c)(S)},I4Pu:function(e,t,n){"use strict";var a=n("Fcif"),r=n("mXGw"),o=(n("W0B4"),n("gbh0")),i={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},s=function(e){return Object(a.a)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};t.a=Object(o.a)((function(e){return{"@global":{html:i,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:Object(a.a)({margin:0},s(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var t=e.children,n=void 0===t?null:t;return e.classes,r.createElement(r.Fragment,null,n)}))},R82R:function(e,t,n){"use strict";var a=n("Fcif"),r=n("Ns/9"),o=n("qSp0");t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(r.a)(e,Object(a.a)({defaultTheme:o.a},t))}},XJLb:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/customerChat",function(){return n("9as9")}])},c9Um:function(e,t,n){"use strict";var a=n("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=o.default.memo(o.default.forwardRef((function(t,n){return o.default.createElement(i.default,(0,r.default)({ref:n},t),e)})));0;return n.muiName=i.default.muiName,n};var r=a(n("8VmE")),o=a(n("mXGw")),i=a(n("iXm2"))},eUpb:function(e,t,n){"use strict";var a=n("mXGw"),r=n.n(a),o=n("5UIW"),i=n("BQn0"),s=r.a.createElement;t.a=function(e){return s(i.a,{style:{minHeight:"100vh",background:"url(/img/tuvilogic_bg.jpg)",backgroundRepeat:"true",backgroundPosition:"center"}},s(o.a,{maxWidth:"lg",style:{padding:8}},e.children))}},eiJB:function(e,t,n){"use strict";var a=n("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("mXGw")),o=(0,a(n("c9Um")).default)(r.default.createElement("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}),"Send");t.default=o},"f+cz":function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n("UrUy"),r=n.n(a),o=n("mXGw"),i=n.n(o),s=n("V2/N"),c=n("bJWG"),l=n("/ZiB"),u=n("BQn0"),d=n("KoC1"),p=i.a.createElement,m={allMessages:'query($conversation: ConversationWhereInput) {\n    allMessages(\n      orderBy: "time_ASC", \n      where: { conversation: $conversation },\n      first: 100) {\n      seller {\n        isCustomer\n        isSupporter\n        isAdmin\n        email\n        id\n      }\n      id\n      text\n      time\n    }\n  }'};function f(e){var t,n=e.conversation,a=e.role,i=Object(o.useState)([]),f=i[0],b=i[1],g=Object(o.useRef)(null);return Object(o.useEffect)((function(){return t=setInterval((function(){var e,t;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!n){a.next=6;break}return a.next=3,r.a.awrap(Object(d.a)({body:{query:m.allMessages,variables:{conversation:n}}}));case 3:e=a.sent,t=e.data.allMessages,b(t);case 6:case"end":return a.stop()}}))}),1e3),function(){clearInterval(t)}})),f.length?p(u.a,{style:{overflowY:"scroll",padding:8,maxHeight:"85vh"}},f.map((function(e){return p(s.a,{key:e.id,container:!0,spacing:1,justify:e.seller[a]?"flex-end":"flex-start"},p(s.a,{item:!0},p(c.a,{style:{padding:5,borderRadius:8}},p(l.a,null,e.text))))})),p("div",{ref:g})):p("div",{ref:g},"\u0110ang t\u1ea3i...")}},iXm2:function(e,t,n){"use strict";n.r(t);var a=n("VQdz");n.d(t,"default",(function(){return a.a}))},oQEK:function(e,t,n){"use strict";var a=n("Fcif"),r=n("dV/x"),o=n("mXGw"),i=(n("W0B4"),n("PDtE")),s=n("gbh0"),c=n("Rx6o"),l=n("x+AB"),u=n("mxPc"),d=o.forwardRef((function(e,t){var n=e.edge,s=void 0!==n&&n,c=e.children,d=e.classes,p=e.className,m=e.color,f=void 0===m?"default":m,b=e.disabled,g=void 0!==b&&b,v=e.disableFocusRipple,h=void 0!==v&&v,x=e.size,y=void 0===x?"medium":x,w=Object(r.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return o.createElement(l.a,Object(a.a)({className:Object(i.a)(d.root,p,"default"!==f&&d["color".concat(Object(u.a)(f))],g&&d.disabled,"small"===y&&d["size".concat(Object(u.a)(y))],{start:d.edgeStart,end:d.edgeEnd}[s]),centerRipple:!0,focusRipple:!h,disabled:g,ref:t},w),o.createElement("span",{className:d.label},c))}));t.a=Object(s.a)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(c.c)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(c.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(c.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(d)}},[["XJLb",0,1,2,3,5,4,8,6,7,9,10]]]);