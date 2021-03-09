(function(t){function e(e){for(var s,o,r=e[0],l=e[1],c=e[2],u=0,m=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={index:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("9e0e")},"0f48":function(t,e,a){},"33e9":function(t,e,a){},"3fee":function(t,e,a){"use strict";a("5f7b")},"5f7b":function(t,e,a){},"78e6":function(t,e,a){"use strict";a("33e9")},"9d0a":function(t,e,a){"use strict";a("0f48")},"9e0e":function(t,e,a){"use strict";a.r(e);a("b19f"),a("ab8b"),a("4989");var s=a("2b0e"),i=a("bc3a"),n=a.n(i),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app d-flex flex-column justify-content-between"},[a("div",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("div",{staticClass:"container"},[a("a",{staticClass:"navbar-brand",attrs:{href:"https://github.com/andig/evcc"}},[a("fa-icon",{staticClass:"text-primary mr-2",attrs:{icon:"leaf"}}),t._v("evcc")],1),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavAltMarkup"}},[a("div",{staticClass:"navbar-nav"},[a("router-link",{staticClass:"nav-item nav-link pb-1",attrs:{to:"/"}},[t._v("Laden")]),a("router-link",{staticClass:"nav-item nav-link pb-1",attrs:{to:"/config"}},[t._v("Konfiguration")]),a("a",{staticClass:"nav-item nav-link pb-1",attrs:{href:"https://github.com/andig/evcc/discussions",target:"_blank"}},[t._v("Community Support")])],1)])])]),a("router-view")],1),a("Footer",{attrs:{version:t.version}})],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],l=a("ad3d"),c=a("ecee"),d=a("a206"),u=a("9e52"),m=a("8475"),v=a("39f0"),p=a("8718"),h=a("7c8d"),f=a("c6b3"),g=a("8668"),b=a("a14b"),C=a("c074"),_=a("8560"),y=a("bf13"),w=a("af2b"),S=a("f303"),x=a("7116"),k=a("fdca"),D=a("91fb"),M=a("184c"),T=a("ba01");c["c"].add(d["faArrowDown"],u["faArrowUp"],m["faBatteryEmpty"],v["faBatteryFull"],p["faBatteryHalf"],h["faBatteryQuarter"],f["faBatteryThreeQuarters"],g["faChevronDown"],b["faChevronUp"],C["a"],_["faExclamationTriangle"],y["faLeaf"],w["faSun"],S["faTemperatureHigh"],x["faTemperatureLow"],k["faThermometerHalf"],D["faHeart"],M["faGift"],T["faBox"]),s["a"].component("fa-icon",l["a"]);var P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"py-3 py-md-5 mt-3 mt-md-5 border-top"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("Version",t._b({},"Version",t.version,!1))],1),a("div",{staticClass:"col-6 text-right"},[a("small",{staticClass:"text-black"},[a("a",{staticClass:"link",attrs:{href:"https://github.com/sponsors/andig",target:"_blank"}},[a("fa-icon",{staticClass:"icon mr-1",attrs:{icon:"heart"}}),a("span",{staticClass:"d-none d-sm-inline"},[t._v("Projekt")]),t._v(" unterstützen ")],1)])])])])])},N=[],L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("small",{staticClass:"text-black"},[t.newVersionAvailable?a("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.showModal(e)}}},[a("fa-icon",{staticClass:"icon mr-1",attrs:{icon:"gift"}}),t._v("Update"),a("span",{staticClass:"d-none d-sm-inline"},[t._v(" verfügbar")]),t._v(": "+t._s(t.available)+" ")],1):a("a",{attrs:{href:t.releaseNotesUrl(t.installed),target:"_blank"}},[t._v(" Version "+t._s(t.installed)+" ")])]),a("transition",{attrs:{name:"fade"}},[t.modalActive?a("div",{staticClass:"dialog",attrs:{id:"updateModal",tabindex:"-1",role:"dialog"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered modal-dialog-scrollable",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h4",{staticClass:"modal-title font-weight-bold"},[t._v("Update verfügbar")]),a("button",{staticClass:"close",attrs:{type:"button",disabled:t.updateStarted},on:{click:t.closeModal}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("div",{staticClass:"modal-body"},[t.updateStarted?a("div",[a("p",[t._v("Nach der Aktualisierung wird evcc neu gestartet.")]),a("div",{staticClass:"progress my-3"},[a("div",{staticClass:"progress-bar progress-bar-striped progress-bar-animated",style:{width:t.uploadProgress+"%"},attrs:{role:"progressbar"}})]),a("p",[t._v(t._s(t.updateStatus)+t._s(t.uploadMessage))])]):a("div",[a("p",[a("small",[t._v("Aktuell installierte Version: "+t._s(t.installed))])]),t.releaseNotes?a("div",{domProps:{innerHTML:t._s(t.releaseNotes)}}):a("p",[t._v(" Keine Releasenotes verfügbar. Mehr Informationen zur neuen Version findest du "),a("a",{attrs:{href:t.releaseNotesUrl(t.available)}},[t._v("hier")]),t._v(". ")])])]),a("div",{staticClass:"modal-footer d-flex justify-content-between"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button",disabled:t.updateStarted},on:{click:t.closeModal}},[t._v(" Abbrechen ")]),a("div",[t.hasUpdater?a("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:t.updateStarted},on:{click:t.update}},[t.updateStarted?a("span",[a("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}),t._v(" Akualisieren ")]):a("span",[t._v("Jetzt aktualisieren")])]):a("a",{staticClass:"btn btn-primary",attrs:{href:t.releaseNotesUrl(t.available)}},[t._v(" Download ")])])])])])]):t._e()])],1)},E=[],V={name:"Version",props:{installed:String,available:String,releaseNotes:String,hasUpdater:Boolean,uploadMessage:String,uploadProgress:Number},data:function(){return{modalActive:!1,updateStarted:!1,updateStatus:""}},methods:{showModal:function(){this.modalActive=!0},closeModal:function(){this.modalActive=!1},update:async function(){try{await n.a.post("update"),this.updateStatus="Aktualisierung gestartet: ",this.updateStarted=!0}catch(t){this.updateStatus="Aktualisierung nicht möglich: "+t}},releaseNotesUrl:function(t){return"https://github.com/andig/evcc/releases/tag/"+t}},computed:{newVersionAvailable:function(){return this.available&&"[[.Version]]"!=this.installed&&"0.0.1-alpha"!=this.installed&&this.available!=this.installed}}},B=V,A=(a("9d0a"),a("2877")),j=Object(A["a"])(B,L,E,!1,null,"a6ded36e",null),O=j.exports,U={name:"Footer",components:{Version:O},props:{version:Object}},z=U,$=(a("3fee"),Object(A["a"])(z,P,N,!1,null,"b6dbe422",null)),I=$.exports;function W(t,e,a){const i=e.shift();t[i]||s["a"].set(t,i,{}),e.length?W(t[i],e,a):a&&"object"===typeof a&&!Array.isArray(a)?t[i]={...t[i],...a}:t[i]=a}const H={state:{loadpoints:[]},update:function(t){Object.keys(t).forEach((function(e){"function"===typeof window.toasts[e]?window.toasts[e]({message:t[e]}):W(H.state,e.split("."),t[e])}))}};var K=H,R={name:"App",components:{Footer:I},data:function(){return{compact:!1,store:this.$root.$data.store,installedVersion:window.evcc.version}},methods:{connect:function(){const t=window.location,e="https:"==t.protocol?"wss:":"ws:",a=e+"//"+t.hostname+(t.port?":"+t.port:"")+t.pathname+"ws",s=new WebSocket(a),i=this;s.onerror=function(){s.close()},s.onclose=function(){window.setTimeout(i.connect,1e3)},s.onmessage=function(t){try{var e=JSON.parse(t.data);K.update(e)}catch(a){window.toasts.error(a,t.data)}}}},computed:{version:function(){return{installed:this.installedVersion,available:this.store.state.availableVersion,releaseNotes:this.store.state.releaseNotes,hasUpdater:this.store.state.hasUpdater,uploadMessage:this.store.state.uploadMessage,uploadProgress:this.store.state.uploadProgress}}},created:function(){const t=new URLSearchParams(window.location.search);this.compact=t.get("compact"),this.connect()}},F=R,Z=(a("78e6"),Object(A["a"])(F,o,r,!1,null,"2052a870",null)),J=Z.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{position:"absolute",top:"4rem",right:"0.5rem"},attrs:{"aria-atomic":"true"}},t._l(t.items,(function(t){return a("ToastMessage",{key:t.id,attrs:{item:t,id:"message-id-"+t.id}})})),1)},q=[],Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"toast",attrs:{"data-delay":"10000","data-autohide":!0}},[a("div",{staticClass:"toast-header"},["warn"!=t.item.type?a("strong",{staticClass:"mr-auto"},[a("fa-icon",{staticClass:"text-danger",attrs:{icon:"exclamation-triangle"}}),t._v(" Error")],1):t._e(),"warn"==t.item.type?a("strong",{staticClass:"mr-auto"},[a("fa-icon",{staticClass:"text-warning",attrs:{icon:"exclamation-triangle"}}),t._v(" Warning")],1):t._e(),t.item.status?a("small",[t._v("HTTP "+t._s(t.item.status))]):t._e(),t._m(0)]),a("div",{staticClass:"toast-body"},[t._v(t._s(t.item.message))])])},X=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"ml-2 mb-1 close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],Y=a("1157"),tt=a.n(Y),et={name:"ToastMessage",props:["item"],mounted:function(){const t="#message-id-"+this.item.id;tt()(t).toast("show"),tt()(t).on("hidden.bs.toast",function(){window.toasts.remove(this.item)}.bind(this))}},at=et,st=Object(A["a"])(at,Q,X,!1,null,null,null),it=st.exports,nt={name:"Toasts",components:{ToastMessage:it},props:{items:Object}},ot=nt,rt=Object(A["a"])(ot,G,q,!1,null,null,null),lt=rt.exports,ct=a("8c4f"),dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t.configured?a("Site",t._b({},"Site",t.state,!1)):a("div",[a("div",{staticClass:"row py-5"},[a("div",{staticClass:"col12"},[a("p",{staticClass:"h1 pt-5 pb-2 border-bottom"},[t._v("Willkommen bei evcc")]),a("p",{staticClass:"lead pt-2"},[a("b",[t._v("evcc")]),t._v(" ist dient zur flexiblen Ladesteuerung von Elektrofahrzeugen. ")]),a("p",{staticClass:"pt-2"},[t._v(" Es sieht aus, als wäre Dein "),a("b",[t._v("evcc")]),t._v(" noch nicht konfiguriert. Um "),a("b",[t._v("evcc")]),t._v(" zu konfigurieren sind die folgenden Schritte notwendig: ")]),a("ol",{staticClass:"pt-2"},[a("li",[t._v(" Erzeugen einer Konfigurationsdatei mit Namen "),a("code",[t._v("evcc.yaml")]),t._v(". Die Standardkonfiguration "),a("code",[t._v("evcc.dist.yaml")]),t._v(" kann dafür als Vorlage dienen ("),a("a",{attrs:{href:"https://github.com/andig/evcc/blob/master/evcc.dist.yaml"}},[t._v("Download")]),t._v("). ")]),a("li",[t._v("Konfiguration der Wallbox als "),a("code",[t._v("chargers")]),t._v(".")]),a("li",[t._v(" Konfiguration des EVU Zählers und evtl. weiterer Zähler unter "),a("code",[t._v("meters")]),t._v(". ")]),a("li",[t._v(" Konfiguration des Netzanschlusses unter "),a("code",[t._v("site")]),t._v(". In einer Site wird der Netzanschluss mit dem konfigurierten EVU Zähler ("),a("code",[t._v("meter")]),t._v(") verbunden. ")]),a("li",[t._v(" Konfiguration eines Ladepunktes unter "),a("code",[t._v("loadpoints")]),t._v(". In einem Ladepunkt wird die konfigurierte Wallbox ("),a("code",[t._v("charger")]),t._v(") mit dem Ladepunkt verbunden. ")]),a("li",[t._v(" Start von "),a("b",[t._v("evcc")]),t._v(" mit der neu erstellten Konfiguration: "),a("code",[t._v("evcc -c evcc.yaml")])])]),a("p",[t._v("Minimale Beispielkonfiguration für "),a("b",[t._v("evcc")]),t._v(":")]),a("p",[a("code",[a("pre",{staticClass:"mx-3"},[t._v("                uri: localhost:7070 # Adresse für UI\n                interval: 10s # Regelintervall\n                meters:\n                - name: evu-zähler\n                type: ... # Detailkonfiguration des EVU Zählers\n                - name: ladezähler\n                type: ... # Detailkonfiguration des Ladezählers (optional)\n                chargers:\n                - name: wallbox\n                type: ... # Detailkonfiguration der Wallbox\n                site:\n                  title: Home\n                  meters:\n                  grid: evu-zähler # EVU Zähler\n                loadpoints:\n                - title: Ladepunkt # ui display name\n                  charger: wallbox # charger\n                  meters:\n                    charge: ladezähler # Ladezählers (optional)\n              ")])])]),a("p",[t._v(" Viel Spass mit "),a("b",[t._v("evcc")]),t._v("! Bei Problemen kannst Du uns auf "),a("a",{attrs:{href:"https://github.com/andig/evcc/issues"}},[t._v("GitHub")]),t._v(" erreichen. ")])])])])],1)},ut=[],mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"d-none d-md-flex col-12 col-md-4 mt-md-4 align-items-end"},[a("p",{staticClass:"h1"},[t._v(t._s(t.title||"Home"))])]),t.multi?a("div",{staticClass:"col-12 col-md-8 mt-md-4"},[a("SiteDetails",t._b({},"SiteDetails",t.details,!1))],1):t._e()]),a("div",{staticClass:"row d-none d-md-flex border-bottom"}),t.multi?t._e():a("div",{staticClass:"row"},[a("div",{staticClass:"d-none d-md-block col-md-4"}),a("div",{staticClass:"col-12 col-md-8"},[a("SiteDetails",t._b({},"SiteDetails",t.details,!1))],1)]),t._l(t.loadpoints,(function(e,s){return a("Loadpoint",t._b({key:s,attrs:{id:s,multi:t.multi,pvConfigured:t.pvConfigured}},"Loadpoint",e,!1))}))],2)},vt=[],pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[t.gridConfigured?a("div",{staticClass:"col-6 col-md-3 mt-3"},[t.gridPower>0?a("div",{staticClass:"mb-2 value"},[t._v(" Bezug "),a("fa-icon",{staticClass:"text-primary",attrs:{icon:"arrow-down"}})],1):a("div",{staticClass:"mb-2 value"},[t._v(" Einspeisung "),a("fa-icon",{staticClass:"text-primary",attrs:{icon:"arrow-up"}})],1),a("h2",{staticClass:"value"},[t._v(" "+t._s(t.fmt(t.gridPower))+" "),a("small",{staticClass:"text-muted"},[t._v(t._s(t.fmtUnit(t.gridPower))+"W")])])]):t._e(),t.pvConfigured?a("div",{staticClass:"col-6 col-md-3 mt-3"},[a("div",{staticClass:"mb-2 value"},[t._v(" Erzeugung "),a("fa-icon",{class:{"text-primary":t.pvPower>0,"text-muted":t.pvPower<=0},attrs:{icon:"sun"}})],1),a("h2",{staticClass:"value"},[t._v(" "+t._s(t.fmt(t.pvPower))+" "),a("small",{staticClass:"text-muted"},[t._v(t._s(t.fmtUnit(t.pvPower))+"W")])])]):t._e(),t.batteryConfigured?a("div",{staticClass:"d-md-block col-6 col-md-3 mt-3"},[a("div",{staticClass:"mb-2 value"},[t._v(" Batterie "),a("fa-icon",{staticClass:"text-primary",attrs:{icon:t.batteryIcon}})],1),a("h2",{staticClass:"value"},[t._v(" "+t._s(t.fmt(t.batteryPower))+" "),a("small",{staticClass:"text-muted"},[t._v(t._s(t.fmtUnit(t.batteryPower))+"W")]),a("small",{staticClass:"text-muted"},[t._v("/")]),t._v(" "+t._s(t.batterySoC)+" "),a("small",{staticClass:"text-muted"},[t._v("%")])])]):t._e()])},ht=[],ft={data:function(){return{fmtLimit:100,fmtDigits:1}},methods:{round:function(t,e){var a=10**e;return(Math.round(t*a)/a).toFixed(e)},fmt:function(t){return void 0===t||null===t?0:(t=Math.abs(t),t>=this.fmtLimit?this.round(t/1e3,this.fmtDigits):this.round(t,0))},fmtUnit:function(t){return Math.abs(t)>=this.fmtLimit?"k":""},fmtDuration:function(t){if(t<=0||null==t)return"—";var e="0"+t%60,a="0"+Math.floor(t/60)%60,s=""+Math.floor(t/3600);return s.length<2&&(s="0"+s),s+":"+a.substr(-2)+":"+e.substr(-2)},fmtShortDuration:function(t){if(t<=0||null==t)return"—";var e,a=Math.floor(t/60)%60,s=Math.floor(t/3600);if(s>=1)a="0"+a,e=s+":"+a.substr(-2);else{var i="0"+t%60;e=a+":"+i.substr(-2)}return e},fmtShortDurationUnit:function(t){if(t<=0||null==t)return"";var e=Math.floor(t/3600);return e>=1?"h":"m"}}};const gt=20,bt=["battery-empty","battery-quarter","battery-half","battery-three-quarters","battery-full"];var Ct={name:"SiteDetails",props:{gridConfigured:Boolean,gridPower:Number,pvConfigured:Boolean,pvPower:Number,batteryConfigured:Boolean,batteryPower:Number,batterySoC:Number},data:function(){return{iconIdx:0}},mixins:[ft],computed:{batteryIcon:function(){return Math.abs(this.batteryPower)<gt?this.batterySoC<30?bt[0]:this.batterySoC<50?bt[1]:this.batterySoC<70?bt[2]:this.batterySoC<90?bt[3]:bt[4]:bt[this.iconIdx]}},mounted:function(){window.setInterval(()=>{this.batteryPower>gt?--this.iconIdx<0&&(this.iconIdx=bt.length-1):this.batteryPower<gt&&++this.iconIdx>=bt.length&&(this.iconIdx=0)},1e3)}},_t=Ct,yt=Object(A["a"])(_t,pt,ht,!1,null,null,null),wt=yt.exports,St=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.multi?a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-4 d-md-flex mt-3 mt-md-5 align-items-end"},[a("span",{staticClass:"h1 align-bottom"},[t._v(t._s(t.title||"Ladepunkt"))])]),a("div",{staticClass:"col-12 col-md-8 d-none d-md-block mt-3 mt-md-5"},[a("LoadpointDetails",t._b({},"LoadpointDetails",t.details,!1))],1),a("div",{staticClass:"col-12 d-md-none"},[a("div",{staticClass:"row mt-3 pb-3 bg-light"},[a("div",{staticClass:"col-12 mt-3"},[a("Mode",{staticClass:"w-100",attrs:{mode:t.mode,pvConfigured:t.pvConfigured},on:{updated:t.setTargetMode}})],1),t.hasTargetSoC?a("div",{staticClass:"col-12 mt-3"},[a("Soc",{staticClass:"w-100",attrs:{soc:t.targetSoC,levels:t.socLevels},on:{updated:t.setTargetSoC}})],1):t._e()])])]):t._e(),t.multi?t._e():a("div",{staticClass:"row d-none d-md-flex mt-5 py-3 pb-4 text-center bg-light"},[a("div",{staticClass:"mt-3",class:{"col-md-6":t.hasTargetSoC,"col-md-12":!t.hasTargetSoC}},[a("Mode",{attrs:{mode:t.mode,pvConfigured:t.pvConfigured,caption:!0},on:{updated:t.setTargetMode}})],1),t.hasTargetSoC?a("div",{staticClass:"col-md-6 mt-3"},[a("Soc",{attrs:{soc:t.targetSoC,levels:t.socLevels,caption:!0},on:{updated:t.setTargetSoC}})],1):t._e()]),t.multi?t._e():a("div",{staticClass:"row d-md-none mt-2 pb-3 bg-light"},[a("div",{staticClass:"col-12 mt-3"},[a("Mode",{staticClass:"w-100",attrs:{mode:t.mode,pvConfigured:t.pvConfigured},on:{updated:t.setTargetMode}})],1),t.hasTargetSoC?a("div",{staticClass:"col-12 mt-3"},[a("Soc",{staticClass:"w-100",attrs:{soc:t.targetSoC,levels:t.socLevels},on:{updated:t.setTargetSoC}})],1):t._e()]),t.multi?t._e():a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-4 d-none d-md-flex mt-3 mt-md-5"},[a("span",{staticClass:"h1"},[t._v(t._s(t.title||"Ladepunkt"))])]),t.remoteDisabled?a("div",{staticClass:"col-12 col-md-8 d-flex d-md-flex mt-3 mt-md-5 pt-3"},[a("h5",{staticClass:"w-100"},["soft"==t.remoteDisabled?a("span",{staticClass:"badge badge-warning w-100"},[t._v(" "+t._s(t.remoteDisabledSource)+": Adaptives PV-Laden deaktiviert ")]):t._e(),"hard"==t.remoteDisabled?a("span",{staticClass:"badge badge-danger w-100"},[t._v(" "+t._s(t.remoteDisabledSource)+": Deaktiviert ")]):t._e()])]):t._e()]),a("div",{staticClass:"row border-bottom d-none d-md-block"}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-4 mt-3 mb-3 mb-md-0"},[a("Vehicle",t._b({},"Vehicle",t.vehicle,!1))],1),t.multi?a("div",{staticClass:"col-12 col-md-4 d-none d-md-block mt-3"},[a("div",{staticClass:"mb-2"},[t._v("Modus")]),a("Mode",{staticClass:"btn-group-sm",attrs:{mode:t.mode,pvConfigured:t.pvConfigured},on:{updated:t.setTargetMode}})],1):t._e(),t.multi&&t.hasTargetSoC?a("div",{staticClass:"col-12 col-md-4 d-none d-md-block mt-3"},[a("div",{staticClass:"mb-2"},[t._v("Ladeziel")]),a("Soc",{staticClass:"btn-group-sm",attrs:{soc:t.targetSoC,levels:t.socLevels},on:{updated:t.setTargetSoC}})],1):t._e(),t.multi?t._e():a("div",{staticClass:"col-md-8 d-none d-md-block"},[a("LoadpointDetails",t._b({},"LoadpointDetails",t.details,!1))],1),a("div",{staticClass:"col-12 d-md-none"},[a("LoadpointDetails",t._b({},"LoadpointDetails",t.details,!1))],1)])])},xt=[],kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"btn-group btn-group-toggle bg-white shadow-none"},[t.caption?a("label",{staticClass:"btn btn-outline-primary disabled caption font-weight-bold"},[t._v(" Ladeziel ")]):t._e(),t._l(t.levelsOrDefault,(function(e,s){return a("label",{key:s,staticClass:"btn btn-outline-primary",class:{active:t.soc==e,first:!t.caption&&0==s},attrs:{level:e,id:s}},[a("input",{attrs:{type:"radio"},domProps:{value:e},on:{click:function(a){return t.setTargetSoC(e)}}}),t._v(t._s(e)+"% ")])}))],2)},Dt=[],Mt={name:"Soc",props:{soc:Number,caption:Boolean,levels:Array},computed:{levelsOrDefault:function(){return null==this.levels||0==this.levels.length?[]:this.levels}},methods:{setTargetSoC:function(t){this.$emit("updated",t)}}},Tt=Mt,Pt=Object(A["a"])(Tt,kt,Dt,!1,null,null,null),Nt=Pt.exports,Lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"btn-group btn-group-toggle bg-white shadow-none"},[t.caption?a("label",{staticClass:"btn btn-outline-primary value disabled caption font-weight-bold"},[t._v(" Modus ")]):t._e(),a("label",{staticClass:"btn btn-outline-primary",class:{active:"off"==t.mode,first:!t.caption}},[a("input",{attrs:{type:"radio",value:"off"},on:{click:function(e){return t.setTargetMode("off")}}}),t._v("Stop ")]),a("label",{staticClass:"btn btn-outline-primary",class:{active:"now"==t.mode}},[a("input",{attrs:{type:"radio",value:"now"},on:{click:function(e){return t.setTargetMode("now")}}}),t._v("Sofort ")]),t.pvConfigured?a("label",{staticClass:"btn btn-outline-primary",class:{active:"minpv"==t.mode}},[a("input",{attrs:{type:"radio",value:"minpv"},on:{click:function(e){return t.setTargetMode("minpv")}}}),a("span",{staticClass:"d-inline d-lg-none"},[t._v("Min")]),a("span",{staticClass:"d-none d-lg-inline"},[t._v("Min + PV")])]):t._e(),t.pvConfigured?a("label",{staticClass:"btn btn-outline-primary",class:{active:"pv"==t.mode}},[a("input",{attrs:{type:"radio",value:"pv"},on:{click:function(e){return t.setTargetMode("pv")}}}),a("span",{staticClass:"d-inline d-md-none"},[t._v("PV")]),a("span",{staticClass:"d-none d-md-inline"},[t._v("Nur PV")])]):t._e()])},Et=[],Vt={name:"Mode",props:{mode:String,pvConfigured:Boolean,caption:Boolean},methods:{setTargetMode:function(t){this.$emit("updated",t)}}},Bt=Vt,At=Object(A["a"])(Bt,Lt,Et,!1,null,null,null),jt=At.exports,Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"mb-2"},[t._v(t._s(t.socTitle||"Fahrzeug"))]),a("div",{staticClass:"progress",staticStyle:{height:"24px","font-size":"100%","margin-top":"16px"}},[a("div",{staticClass:"progress-bar",class:{"progress-bar-striped":t.charging,"progress-bar-animated":t.charging,"bg-light":!t.connected,"text-secondary":!t.connected,"bg-warning":t.connected&&t.minSoCActive},style:{width:t.socChargeDisplayWidth+"%"},attrs:{role:"progressbar"}},[t._v(" "+t._s(t.socChargeDisplayValue)+" ")]),t.minSoCActive&&t.socChargeDisplayWidth<100?a("div",{staticClass:"progress-bar",class:{"progress-bar-striped":t.charging,"progress-bar-animated":t.charging,"bg-warning":!0,"bg-muted":!0},style:{width:t.minSoCRemainingDisplayWidth+"%"},attrs:{role:"progressbar"}}):t._e()])])},Ut=[],zt={name:"Vehicle",props:{socTitle:String,connected:Boolean,charging:Boolean,hasVehicle:Boolean,socCharge:Number,minSoC:Number},computed:{socChargeDisplayWidth:function(){return this.hasVehicle&&this.socCharge>=0?this.socCharge:100},socChargeDisplayValue:function(){if(!this.hasVehicle||this.socCharge<0){let t="getrennt";return this.charging?t="laden":this.connected&&(t="verbunden"),t}let t=this.socCharge;return t>=10&&(t+="%"),t},minSoCActive:function(){return this.minSoC>0&&this.socCharge<this.minSoC},minSoCRemainingDisplayWidth:function(){return this.minSoC-this.socCharge}}},$t=zt,It=Object(A["a"])($t,Ot,Ut,!1,null,null,null),Wt=It.exports,Ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 col-md-3 mt-3"},[a("div",{staticClass:"mb-2 value"},[t._v(" Leistung "),t.socTimerActive?a("fa-icon",{staticClass:"text-primary ml-1",attrs:{icon:"clock"}}):t.socTimerSet?a("fa-icon",{staticClass:"text-secondary ml-1",attrs:{icon:"clock"}}):t._e(),"heating"==t.climater?a("fa-icon",{staticClass:"text-primary ml-1",attrs:{icon:"temperature-low"}}):t._e(),"cooling"==t.climater?a("fa-icon",{staticClass:"text-primary ml-1",attrs:{icon:"temperature-high"}}):t._e(),"on"==t.climater?a("fa-icon",{staticClass:"text-primary ml-1",attrs:{icon:"thermometer-half"}}):t._e()],1),a("h2",{staticClass:"value"},[t._v(" "+t._s(t.fmt(t.chargePower))+" "),a("small",{staticClass:"text-muted"},[t._v(t._s(t.fmtUnit(t.chargePower))+"W")])])]),a("div",{staticClass:"col-6 col-md-3 mt-3"},[a("div",{staticClass:"mb-2 value"},[t._v("Geladen")]),a("h2",{staticClass:"value"},[t._v(" "+t._s(t.fmt(t.chargedEnergy))+" "),a("small",{staticClass:"text-muted"},[t._v(t._s(t.fmtUnit(t.chargedEnergy))+"Wh")])])]),t.range>=0?a("div",{staticClass:"col-6 col-md-3 mt-3"},[a("div",{staticClass:"mb-2 value"},[t._v("Reichweite")]),a("h2",{staticClass:"value"},[t._v(" "+t._s(Math.round(t.range))+" "),a("small",{staticClass:"text-muted"},[t._v("km")])])]):a("div",{staticClass:"col-6 col-md-3 mt-3"},[a("div",{staticClass:"mb-2 value"},[t._v("Dauer")]),a("h2",{staticClass:"value"},[t._v(" "+t._s(t.fmtShortDuration(t.chargeDuration))+" "),a("small",{staticClass:"text-muted"},[t._v(t._s(t.fmtShortDurationUnit(t.chargeDuration)))])])]),t.hasVehicle?a("div",{staticClass:"col-6 col-md-3 mt-3"},[a("div",{staticClass:"mb-2 value"},[t._v("Restzeit")]),a("h2",{staticClass:"value"},[t._v(" "+t._s(t.fmtShortDuration(t.chargeEstimate))+" "),a("small",{staticClass:"text-muted"},[t._v(t._s(t.fmtShortDurationUnit(t.chargeEstimate)))])])]):t._e()])},Kt=[],Rt={name:"LoadpointDetails",props:{chargedEnergy:Number,chargeDuration:Number,chargeEstimate:Number,chargePower:Number,climater:String,hasVehicle:Boolean,range:Number,socTimerActive:Boolean,socTimerSet:Boolean},mixins:[ft]},Ft=Rt,Zt=Object(A["a"])(Ft,Ht,Kt,!1,null,null,null),Jt=Zt.exports,Gt={methods:{collectProps:function(t){let e={};for(var a in t.props)e[a]=this[a];return e}}},qt={name:"Loadpoint",props:{id:Number,multi:Boolean,pvConfigured:Boolean,title:String,mode:String,targetSoC:Number,socLevels:Array,remoteDisabled:Boolean,remoteDisabledSource:String,chargeDuration:Number,charging:Boolean,connected:Boolean,socTitle:String,socCharge:Number,minSoC:Number,socTimerSet:Boolean,socTimerActive:Boolean,chargePower:Number,chargedEnergy:Number,hasVehicle:Boolean,climater:String,range:Number,chargeEstimate:Number},components:{LoadpointDetails:Jt,Soc:Nt,Mode:jt,Vehicle:Wt},mixins:[ft,Gt],data:function(){return{tickerHandle:null,chargeDurationDisplayed:null}},computed:{details:function(){return this.collectProps(Jt)},vehicle:function(){return this.collectProps(Wt)},hasTargetSoC:function(){return null!=this.socLevels&&this.socLevels.length>0}},watch:{chargeDuration:function(){window.clearInterval(this.tickerHandle),this.charging&&this.chargeDuration>=0&&(this.chargeDurationDisplayed=this.chargeDuration,this.tickerHandle=window.setInterval(function(){this.chargeDurationDisplayed+=1}.bind(this),1e3))}},methods:{api:function(t){return"loadpoints/"+this.id+"/"+t},setTargetMode:function(t){n.a.post(this.api("mode")+"/"+t).then(function(t){this.mode=t.data.mode}.bind(this)).catch(window.toasts.error)},setTargetSoC:function(t){n.a.post(this.api("targetsoc")+"/"+t).then(function(t){this.targetSoC=t.data.targetSoC}.bind(this)).catch(window.toasts.error)}},destroyed:function(){window.clearInterval(this.tickerHandle)}},Qt=qt,Xt=Object(A["a"])(Qt,St,xt,!1,null,null,null),Yt=Xt.exports,te={name:"Site",props:{title:String,loadpoints:Array,gridConfigured:Boolean,gridPower:Number,pvConfigured:Boolean,pvPower:Number,batteryConfigured:Boolean,batteryPower:Number,batterySoC:Number},components:{SiteDetails:wt,Loadpoint:Yt},mixins:[ft,Gt],computed:{details:function(){return this.collectProps(wt)},multi:function(){return this.loadpoints.length>1}}},ee=te,ae=Object(A["a"])(ee,mt,vt,!1,null,null,null),se=ae.exports,ie={name:"Main",components:{Site:se},data:function(){return this.$root.$data.store},computed:{configured:function(){const t=window.evcc.configured;return t==window.evcc.configured||!isNaN(parseInt(t))&&parseInt(t)>0}}},ne=ie,oe=Object(A["a"])(ne,dt,ut,!1,null,null,null),re=oe.exports,le=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row mt-4 border-bottom"},[a("div",{staticClass:"col-12"},[a("p",{staticClass:"h1"},[t._v(t._s(t.title||"Home"))])])]),a("div",{staticClass:"row h5"},[a("div",{staticClass:"col-md-4"}),a("div",{staticClass:"col-6 col-md-2 py-3"},[t._v(" Netzzähler: "),t.gridConfigured?a("span",{staticClass:"text-primary"},[t._v("✓")]):a("span",{staticClass:"text-primary"},[t._v("—")])]),a("div",{staticClass:"col-6 col-md-2 py-3"},[t._v(" PV Zähler: "),t.pvConfigured?a("span",{staticClass:"text-primary"},[t._v("✓")]):a("span",{staticClass:"text-primary"},[t._v("—")])]),a("div",{staticClass:"col-6 col-md-2 py-3"},[t._v(" Batteriezähler: "),t.batteryConfigured?a("span",{staticClass:"text-primary"},[t._v("✓")]):a("span",{staticClass:"text-primary"},[t._v("—")])])]),t._l(t.loadpoints,(function(e,s){return a("div",{key:s,attrs:{loadpoint:e,id:"loadpoint-"+s}},[a("div",{staticClass:"row mt-4 border-bottom"},[a("div",{staticClass:"col-12"},[a("p",{staticClass:"h1"},[t._v(t._s(e.title||"Ladepunkt"))])])]),a("div",{staticClass:"row h5"},[a("div",{staticClass:"col-md-4"}),a("div",{staticClass:"col-6 col-md-2 py-3"},[t._v(" Ladezähler: "),e.chargeConfigured?a("span",{staticClass:"text-primary"},[t._v("✓")]):a("span",{staticClass:"text-primary"},[t._v("—")])]),a("div",{staticClass:"col-6 col-md-2 py-3"},[t._v(" Phasen: "),a("span",{staticClass:"text-primary"},[t._v(t._s(e.phases)+"p")])]),a("div",{staticClass:"col-6 col-md-2 py-3"},[t._v(" Min. Strom: "),a("span",{staticClass:"text-primary"},[t._v(t._s(e.minCurrent)+"A")])]),a("div",{staticClass:"col-6 col-md-2 py-3"},[t._v(" Max. Strom: "),a("span",{staticClass:"text-primary"},[t._v(t._s(e.maxCurrent)+"A")])])]),a("div",{staticClass:"row h5"},[a("div",{staticClass:"col-md-4"}),a("div",{staticClass:"col-md-8 h2"},[t._m(0,!0),a("div",{staticClass:"row h5"},[a("div",{staticClass:"col-6 py-3"},[t._v(" Modell: "),a("span",{staticClass:"text-primary"},[t._v(t._s(e.socTitle||"—"))])]),a("div",{staticClass:"col-6 py-3"},[t._v(" Kapazität: "),a("span",{staticClass:"text-primary"},[t._v(t._s(e.socCapacity)+"kWh")])])])])])])}))],2)},ce=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row py-3 h2 border-bottom"},[a("div",{staticClass:"col-12"},[t._v("Fahrzeug")])])}],de={name:"Config",data:function(){return this.$root.$data.store.state}},ue=de,me=Object(A["a"])(ue,le,ce,!1,null,null,null),ve=me.exports;s["a"].use(ct["a"]);const pe=[{path:"/",component:re},{path:"/config",component:ve}];var he=new ct["a"]({routes:pe,linkExactActiveClass:"active"});const fe=window.location;n.a.defaults.baseURL=fe.protocol+"//"+fe.hostname+(fe.port?":"+fe.port:"")+fe.pathname+"api",n.a.defaults.headers.post["Content-Type"]="application/json",window.toasts=new s["a"]({el:"#toasts",render:function(t){return t(lt,{props:{items:this.items,count:this.count}})},data:{items:{},count:0},name:"ToastsRoot",methods:{raise:function(t){let e=!1;Object.keys(this.items).forEach((function(a){let s=this.items[a];s.type==t.type&&s.message==t.message&&(e=!0)}),this),e||(t.id=this.count++,s["a"].set(this.items,t.id,t))},error:function(t){t.type="error",this.raise(t)},warn:function(t){t.type="warn",this.raise(t)},remove:function(t){s["a"].delete(this.items,t.id)}}}),new s["a"]({el:"#app",router:he,data:{store:K},render:t=>t(J)}),window.setInterval((function(){n.a.get("health").catch((function(t){t.message="Server unavailable",window.toasts.error(t)}))}),5e3)},b19f:function(t,e,a){}});
//# sourceMappingURL=index.dd84c2d8.js.map