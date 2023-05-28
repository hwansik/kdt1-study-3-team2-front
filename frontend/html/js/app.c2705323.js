(function(){"use strict";var t={2597:function(t,e,n){var r=n(144),o=n(998),a=n(704),s=n(5658),i=n(4324),c=n(5495),u=n(3059),l=n(3687),f=function(){var t=this,e=t._self._c;return e(o.Z,[e(a.Z,{attrs:{app:"",color:"primary",dark:""}},[e("div",{staticClass:"d-flex align-center"},[e(c.Z,{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),e(c.Z,{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),e(l.Z),e(s.Z,{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[e("span",{staticClass:"mr-2"},[t._v("Latest Release")]),e(i.Z,[t._v("mdi-open-in-new")])],1)],1),e(u.Z,[e("router-view")],1)],1)},d=[],m={name:"App",data:()=>({})},h=m,p=n(1001),v=(0,p.Z)(h,f,d,!1,null,null,null),g=v.exports,b=n(8345),y=n(2118),_=function(){var t=this,e=t._self._c;return e(y.Z,[e("div",[e("nav",[e("router-link",{attrs:{to:"/product-account-register-page"}},[t._v("회원 가입")]),t._v(" | ")],1)])])},w=[],Z=n(266),P=n(1713),k=function(){var t=this,e=t._self._c;return e(y.Z,[e(P.Z,{staticClass:"text-center"},[e(Z.Z,{attrs:{cols:"12"}},[e(c.Z,{staticClass:"my-3",attrs:{src:n(9574),contain:"",height:"200"}})],1),e(Z.Z,{staticClass:"mb-4"},[e("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),e("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),e("br"),t._v("please join our online "),e("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),e(Z.Z,{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),e(P.Z,{attrs:{justify:"center"}},t._l(t.whatsNext,(function(n,r){return e("a",{key:r,staticClass:"subheading mx-3",attrs:{href:n.href,target:"_blank"}},[t._v(" "+t._s(n.text)+" ")])})),0)],1),e(Z.Z,{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),e(P.Z,{attrs:{justify:"center"}},t._l(t.importantLinks,(function(n,r){return e("a",{key:r,staticClass:"subheading mx-3",attrs:{href:n.href,target:"_blank"}},[t._v(" "+t._s(n.text)+" ")])})),0)],1),e(Z.Z,{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),e(P.Z,{attrs:{justify:"center"}},t._l(t.ecosystem,(function(n,r){return e("a",{key:r,staticClass:"subheading mx-3",attrs:{href:n.href,target:"_blank"}},[t._v(" "+t._s(n.text)+" ")])})),0)],1)],1)],1)},x=[],C={name:"HelloWorld",data:()=>({ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]})},j=C,E=(0,p.Z)(j,k,x,!1,null,null,null),A=E.exports,S={name:"Home",components:{HelloWorld:A}},T=S,O=(0,p.Z)(T,_,w,!1,null,null,null),R=O.exports,L=function(){var t=this,e=t._self._c;return e("div",[e("br"),e("product-account-register-form",{attrs:{align:"center"},on:{submit:t.onSubmit}}),e("br")],1)},N=[],q=n(5125),M=n(8631),F=function(){var t=this,e=t._self._c;return e("div",[e(s.Z,{attrs:{outlined:"",color:"cyan"},on:{click:t.readyToCreateAccount}},[t._v("회원 가입 준비 버튼")]),t.isPressedButton?e("div",[e("br"),e(q.Z,{ref:"form",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[e("table",[e("tr",[e("td",[t._v(" 이메일 ")]),e("td",[e(M.Z,{attrs:{rules:t.email_rule,label:"이메일 입력"},model:{value:t.accountEmail,callback:function(e){t.accountEmail=e},expression:"accountEmail"}})],1),e("td",[e(s.Z,{attrs:{text:"",large:"",color:"grey",disabled:!1},on:{click:t.checkEmail}},[t._v(" 중복 확인 ")])],1)]),e("tr",[e("td",[t._v(" 비밀번호 ")]),e("td",[e(M.Z,{attrs:{label:"비밀번호 입력",type:"password"},model:{value:t.accountPassword,callback:function(e){t.accountPassword=e},expression:"accountPassword"}})],1)]),e("tr",[e("td",[t._v("비밀번호 확인")]),e("td",[e(M.Z,{attrs:{label:"비밀번호 확인",type:"password",rules:[t.passwordCheck]},model:{value:t.passwordConfirm,callback:function(e){t.passwordConfirm=e},expression:"passwordConfirm"}})],1)])]),e("div",[e(s.Z,{attrs:{outlined:"",color:"cyan",type:"submit",disabled:!t.isFormValid()}},[t._v("회원 가입")]),e("br"),e("br"),e("router-link",{attrs:{to:{name:"Home"}}},[t._v(" 돌아가기 ")])],1)])],1):t._e()],1)},I=[],z=n(629);var V={name:"ProductAccountRegisterForm",data(){return{accountEmail:"",accountPassword:"123456",isPressedButton:!1,passwordConfirm:"",emailPass:!1,email_rule:[t=>!!t||"이메일을 입력해주세요.",t=>{const e=t.replace(/(\s*)/g,""),n=/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;return n.test(e)||"올바른 이메일 형식으로 입력해주세요!"}]}},methods:{...(0,z.nv)("accountModule",["requestSpringToCheckEmail"]),onSubmit(){if(this.$refs.form.validate()){const{accountEmail:t,accountPassword:e}=this;this.$emit("submit",{accountEmail:t,accountPassword:e})}else alert("올바른 정보를 입력하세요!");this.emailPass||alert("이메일 중복 확인을 해주세요!")},readyToCreateAccount(){this.isPressedButton=!0,alert("계정 등록 준비")},async checkEmail(){const t=this.accountEmail.match(/^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);if(this.emailPass=!1,t){const{accountEmail:t}=this;console.log("before actions - email: "+t),this.emailPass=await this.requestSpringToCheckEmail({accountEmail:t})}},isFormValid(){return this.emailPass&&!0===this.email_rule[1](this.accountEmail)}},computed:{passwordCheck(){return()=>this.accountPassword===this.passwordConfirm||"비밀번호가 일치하지 않습니다."}}},B=V,$=(0,p.Z)(B,F,I,!1,null,"2e2ae07a",null),D=$.exports;const U="accountModule";var H={components:{ProductAccountRegisterForm:D},name:"ProductAccountRegisterPage",data(){return{}},methods:{...(0,z.nv)(U,["requestCreateAccountToSpring"]),async onSubmit(t){const e=await this.requestCreateAccountToSpring(t);console.log("account: "+JSON.stringify(e))}}},W=H,Q=(0,p.Z)(W,L,N,!1,null,null,null),G=Q.exports;r.ZP.use(b.ZP);const J=[{path:"/product-account-register-page",name:"ProductAccountRegisterPage",component:G}];var K=J;r.ZP.use(b.ZP);const X=[{path:"/",name:"home",component:R},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,1272))},...K],Y=new b.ZP({mode:"history",base:"/",routes:X});var tt=Y;const et="REQUEST_BOARD_LIST_TO_SPRING",nt="REQUEST_BOARD_TO_SPRING";var rt={[et](t,e){t.boards=e},[nt](t,e){t.board=e}},ot=n(6154);const at={mode:"production",api:{MAIN_API_URL:"next-page-server:7777"}};var st=at;const it=ot.Z.create({baseURL:st.api.MAIN_API_URL,timeout:2500});var ct=it,ut={requestSpringToCheckEmail({},t){const{accountEmail:e}=t;return console.log("email: "+e),ct.get(`/account/check-email/${e}`).then((t=>t.data?(alert("사용 가능한 이메일 입니다."),!0):(alert("중복된 이메일 입니다."),!1))).catch((t=>{alert("문제 발생 ! ")}))},requestCreateAccountToSpring({},t){const{accountEmail:e,accountPassword:n}=t;return ct.post("/account/regist",{accountEmail:e,accountPassword:n}).then((t=>(alert("계정 등록 성공!"),t))).catch((t=>{alert("문제 발생!")}))}},lt={};r.ZP.use(z.ZP);const ft={namespaced:!0,state:lt,actions:ut,mutations:rt};var dt=ft;r.ZP.use(z.ZP);const mt=new z.ZP.Store({modules:{accountModule:dt}});var ht=mt,pt=n(8864);r.ZP.use(pt.Z);var vt=new pt.Z({});r.ZP.config.productionTip=!1,new r.ZP({router:tt,store:ht,vuetify:vt,render:t=>t(g)}).$mount("#app")},9574:function(t,e,n){t.exports=n.p+"img/logo.4d6033c9.svg"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var s=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],a=t[l][2];for(var i=!0,c=0;c<r.length;c++)(!1&a||s>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(i=!1,a<s&&(s=a));if(i){t.splice(l--,1);var u=o();void 0!==u&&(e=u)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[r,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about.100a4962.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="frontend1:";n.l=function(r,o,a,s){if(t[r])t[r].push(o);else{var i,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var f=u[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+a){i=f;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",e+a),i.src=r),t[r]=[o];var d=function(e,n){i.onerror=i.onload=null,clearTimeout(m);var o=t[r];if(delete t[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=a);var s=n.p+n.u(e),i=new Error,c=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;i.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",i.name="ChunkLoadError",i.type=a,i.request=s,o[1](i)}};n.l(s,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,s=r[0],i=r[1],c=r[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(c)var l=c(n)}for(e&&e(r);u<s.length;u++)a=s[u],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},r=self["webpackChunkfrontend1"]=self["webpackChunkfrontend1"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2597)}));r=n.O(r)})();
//# sourceMappingURL=app.c2705323.js.map