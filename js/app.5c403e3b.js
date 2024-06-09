(function(){"use strict";var t={7763:function(t,o,e){var n=e(2856),r=function(){var t=this,o=t._self._c;return o("div",{attrs:{id:"app"}},[o("b-navbar",{staticClass:"bg-dark d-flex flex-column flex-md-row justify-content-between px-md-5",attrs:{variant:"faded",type:"light"}},[o("b-navbar-brand",{attrs:{href:"#"}},[o("img",{attrs:{src:t.logo,alt:"Tienda 32 Bits",width:"100"}})]),o("b-nav-text",[o("h2",{staticClass:"text-white"},[o("b-icon",{attrs:{icon:"controller"}}),t._v(" "),o("span",[t._v(" Inventario de Juegos ")])],1)])],1),o("b-container",{staticClass:"bg-white border rounded-4 mt-4 p-4 shadow-custom"},[o("b-row",[o("b-col",{staticClass:"mb-4 mb-md-0",attrs:{cols:"12",md:"6"}},[o("p",{staticClass:"text-uppercase fs-3 fw-bold"},[t._v("Total Juegos: "),o("span",{staticClass:"bg-dark px-3 py-1 rounded-pill text-white"},[t._v(t._s(t.totalJuegos))])])]),o("b-col",{attrs:{cols:"12",md:"6"}},[o("p",{staticClass:"text-uppercase fs-3 fw-bold"},[t._v("Total Stock: "),o("span",{staticClass:"bg-dark px-3 py-1 rounded-pill text-white"},[t._v(t._s(t.totalStock))])])])],1)],1),o("b-container",{staticClass:"bg-white border rounded-4 mt-4 p-4 shadow-custom"},[o("b-row",[o("b-col",[o("table",{staticClass:"table table-striped table-hover"},[o("thead",[o("tr",[o("th",[t._v("#")]),o("th",[t._v("Código")]),o("th",[t._v("Nombre")]),o("th",[t._v("Stock")]),o("th",{staticClass:"d-none d-md-table-cell"},[t._v("Precio")]),t._v(" "),o("th",[t._v("Acciones")])])]),o("tbody",t._l(t.juegos,(function(e){return o("tr",{key:e.codigo},[o("td",{style:{backgroundColor:e.color,width:"5px"}}),o("td",[t._v(t._s(e.codigo))]),o("td",[t._v(t._s(e.nombre))]),o("td",[t._v(t._s(e.stock))]),o("td",{staticClass:"d-none d-md-table-cell"},[t._v(t._s(t.formatPrice(e.precio)))]),t._v(" "),o("td",{staticClass:"d-flex flex-row justify-content-center"},[o("b-button",{staticClass:"me-1 p-1 p-md-2",attrs:{variant:"primary"},on:{click:function(o){return t.aumentarStock(e.codigo)}}},[o("b-icon",{attrs:{icon:"plus"}})],1),o("b-button",{staticClass:"p-1 p-md-2",attrs:{variant:"warning"},on:{click:function(o){return t.disminuirStock(e.codigo)}}},[o("b-icon",{attrs:{icon:"dash"}})],1)],1)])})),0)])])],1)],1)],1)},s=[],a=e(1910),i=e.p+"img/logo.63de56ff.png",c={name:"App",data(){return{logo:i}},computed:{...(0,a.aH)({juegos:t=>t.juegos}),...(0,a.L8)(["totalStock","totalJuegos"])},mounted(){this.$store.dispatch("getInventario")},methods:{formatPrice(t){return new Intl.NumberFormat("es-CL",{style:"currency",currency:"CLP"}).format(t)},...(0,a.i0)(["aumentarStock","disminuirStock"])}},u=c,l=e(1656),d=(0,l.A)(u,r,s,!1,null,null,null),f=d.exports,b=e(417);n["default"].use(a.Ay);var p=new a.Ay.Store({state:{juegos:[]},getters:{totalStock(t){return t.juegos.reduce(((t,o)=>t+parseInt(o.stock,10)),0)},totalJuegos(t){return t.juegos.length}},mutations:{setJuegos(t,o){t.juegos=o},aumentarStock(t,o){const e=t.juegos.find((t=>t.codigo===o));e&&e.stock++},disminuirStock(t,o){const e=t.juegos.find((t=>t.codigo===o));e&&e.stock>0&&e.stock--}},actions:{async getInventario(t){try{let o=location.origin,e="/32bits-vue2-frontend-user/";const n=await b.A.get(`${o}${e}juegos.json`);t.commit("setJuegos",n.data)}catch(o){console.error("Error:",o)}},aumentarStock(t,o){t.commit("aumentarStock",o)},disminuirStock(t,o){t.commit("disminuirStock",o)}},modules:{}}),v=e(1501),g=e(7673);e(9313);n["default"].config.productionTip=!1,n["default"].use(v.vGs),n["default"].use(g.YS),new n["default"]({store:p,render:t=>t(f)}).$mount("#app")}},o={};function e(n){var r=o[n];if(void 0!==r)return r.exports;var s=o[n]={exports:{}};return t[n].call(s.exports,s,s.exports,e),s.exports}e.m=t,function(){var t=[];e.O=function(o,n,r,s){if(!n){var a=1/0;for(l=0;l<t.length;l++){n=t[l][0],r=t[l][1],s=t[l][2];for(var i=!0,c=0;c<n.length;c++)(!1&s||a>=s)&&Object.keys(e.O).every((function(t){return e.O[t](n[c])}))?n.splice(c--,1):(i=!1,s<a&&(a=s));if(i){t.splice(l--,1);var u=r();void 0!==u&&(o=u)}}return o}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[n,r,s]}}(),function(){e.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(o,{a:o}),o}}(),function(){e.d=function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/32bits-vue2-frontend-user/"}(),function(){var t={524:0};e.O.j=function(o){return 0===t[o]};var o=function(o,n){var r,s,a=n[0],i=n[1],c=n[2],u=0;if(a.some((function(o){return 0!==t[o]}))){for(r in i)e.o(i,r)&&(e.m[r]=i[r]);if(c)var l=c(e)}for(o&&o(n);u<a.length;u++)s=a[u],e.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return e.O(l)},n=self["webpackChunk_32bits_vue2_frontend_user"]=self["webpackChunk_32bits_vue2_frontend_user"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=e.O(void 0,[504],(function(){return e(7763)}));n=e.O(n)})();
//# sourceMappingURL=app.5c403e3b.js.map