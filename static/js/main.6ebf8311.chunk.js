(window.webpackJsonpcurrencyfair=window.webpackJsonpcurrencyfair||[]).push([[0],[,,function(e,n,t){e.exports={btn:"Button_btn__2P4zC",btn_spinner:"Button_btn_spinner__2QqSo",btn__outline:"Button_btn__outline__2NrRa",btn__disabled:"Button_btn__disabled__9f1yp",btnList:"Button_btnList__153Y3"}},,function(e,n,t){e.exports={body_hasModal:"Modal_body_hasModal__2bu0B",modal:"Modal_modal__1z7i3",fadeIn:"Modal_fadeIn__1hwE8",modal_BG:"Modal_modal_BG__-kWIB",fadeI_BG:"Modal_fadeI_BG__1xUQS"}},,function(e,n,t){e.exports={header:"Header_header__2GQ2w",header__small:"Header_header__small__2M3-A"}},function(e,n,t){e.exports={spinner:"Spinner_spinner__1Yt6Y",rotate:"Spinner_rotate__1_OR7",dash:"Spinner_dash__17UK9",spinner__lg:"Spinner_spinner__lg__32xr2",spinner__xs:"Spinner_spinner__xs__TLbf4",spinner__sm:"Spinner_spinner__sm__2lIA6",spinner__xl:"Spinner_spinner__xl__7ZaNf"}},,function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,n,t){e.exports=t(17)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(5),i=t.n(r),c=(t(15),t(9)),l=t.n(c),s=(t(16),t(3)),d=t.n(s),_=t(1),u=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window,o=Object(a.useRef)();Object(a.useEffect)(function(){o.current=n},[n]),Object(a.useEffect)(function(){if(t&&t.addEventListener){var n=function(e){return o.current(e)};return t.addEventListener(e,n),function(){t.removeEventListener(e,n)}}},[e,t])},m=window,f=function(){return{x:m.pageXOffset,y:m.pageYOffset}},p=t(6),b=t.n(p),v=function(){var e=function(){var e=Object(a.useState)(f()),n=Object(_.a)(e,2),t=n[0],o=n[1];return u("scroll",function(){o(f())},window),{position:t,positionX:t.x,positionY:t.y}}().positionY,n=e>100;return o.a.createElement("header",{className:d()(b.a.header,n&&b.a.header__small)},"The logo goes here - ",e)},E=t(4),h=t.n(E),w=function(e){var n=e.children,t=e.onDismiss,r=void 0===t?function(){}:t,c=function(e){var n=Object(a.useState)(!1),t=Object(_.a)(n,2),o=t[0],r=t[1];return u("keydown",function(n){var t=n.key,a=n.keyCode;t!==e&&a!==e||r(!0)},window),u("keyup",function(n){var t=n.key,a=n.keyCode;t!==e&&a!==e||r(!1)},window),o}(27);Object(a.useEffect)(function(){return document.body.classList.add(h.a.body_hasModal),function(){document.body.classList.remove(h.a.body_hasModal)}},[]),Object(a.useEffect)(function(){c&&l()},[c]);var l=function(){r()};return i.a.createPortal(o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:h.a.modal_BG}),o.a.createElement("div",{className:h.a.modal},o.a.createElement("div",{onClick:l},"close me"),n)),document.body)},g=t(7),y=t.n(g),x=function(e){var n=e.className,t=e.size;return o.a.createElement("div",{className:d()(y.a.spinner,y.a["spinner__".concat(t)],n)},o.a.createElement("svg",{viewBox:"0 0 66 66"},o.a.createElement("circle",{cx:"33",cy:"33",r:"30"})))},k=t(2),B=t.n(k),N=function(e){var n=e.caption,t=e.className,a=e.disabled,r=void 0!==a&&a,i=e.loading,c=void 0!==i&&i,l=e.form,s=e.onClick,_=e.outline,u=void 0!==_&&_,m=e.alt,f=void 0===m?n:m,p=e.type,b=void 0===p?"button":p,v=!r&&!c;return o.a.createElement("button",{className:d()(B.a.btn,u&&B.a.btn__outline,n&&B.a.btn__hasCaption,c&&B.a.btn__isLoading,r&&B.a.btn__disabled,t),type:b,"aria-label":f,form:l,onClick:s&&function(){v&&s()},disabled:r},n,c&&o.a.createElement(x,{className:B.a.btn_spinner}))};N.Group=function(e){var n=e.children,t=e.className;return o.a.createElement("div",{className:d()(B.a.btnList,t)},n)};var O=function(){var e=function(){var e=Object(a.useState)(!1),n=Object(_.a)(e,2),t=n[0],r=n[1],i=function(){return r(!1)};return{Modal:function(e){return t?o.a.createElement(w,Object.assign({onDismiss:i},e)):null},showModal:function(){return r(!0)},hiddeModal:i}}(),n=e.Modal,t=e.showModal;return o.a.createElement("div",{className:"App"},o.a.createElement(v,null),o.a.createElement(n,null,"I have some custom content"),o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:l.a,className:"App-logo",alt:"logo"}),o.a.createElement(N.Group,null,o.a.createElement(N,{caption:"Basic",onClick:t}),o.a.createElement(N,{caption:"Outline",outline:!0})),o.a.createElement(N,{caption:"Disabled",disabled:!0}),o.a.createElement(N,{caption:"Loading",loading:!0}),o.a.createElement(x,null),o.a.createElement(x,{size:"xs"}),o.a.createElement(x,{size:"sm"}),o.a.createElement(x,{size:"lg"}),o.a.createElement(x,{size:"xl"}),o.a.createElement("p",null,"Edit ",o.a.createElement("code",null,"src/App.tsx")," and save to reload."),o.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.6ebf8311.chunk.js.map