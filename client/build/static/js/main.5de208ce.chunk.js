(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},109:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a.n(l),i=(a(101),a(25)),o=a(30),s=(a(102),a(3)),m=a.n(s),u=(a(47),function(e){var t=e.to,a=e.name;return r.a.createElement(i.c,{exact:!0,className:"nav-button",activeClassName:"nav-button--active",to:t},a)}),g=a(10),d=a(179),f=a(79),E=a.n(f),p=a(167),b=function(){var e=r.a.useState(!1),t=Object(g.a)(e,2),a=t[0],n=t[1],l=function(e){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&n(e)}};return r.a.createElement("div",{className:"toggle-button"},r.a.createElement("button",{onClick:l(!0)},r.a.createElement(E.a,null)),r.a.createElement(d.a,{anchor:"left",open:a,onClose:l(!1),onOpen:l(!0),onClick:l(!1)},r.a.createElement("div",{className:"side-nav-menu-container",role:"presentation",onClick:l(!1),onKeyDown:l(!1)},r.a.createElement("ul",{className:"menu-nav"},r.a.createElement("li",null,r.a.createElement(i.b,{to:"/"},r.a.createElement("h3",null,"Dashboard"))),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/links"},r.a.createElement("h3",null,"Links"))),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/news"},r.a.createElement("h3",null,"News")))),r.a.createElement(p.a,{variant:"contained",onClick:l(!1)},"Close"))))},k=function(e){return""+e},h=function(){return r.a.createElement("div",{className:"nav-left-side"},r.a.createElement(b,null),r.a.createElement("img",{alt:"Logo",src:k("/media/misc/circle.png")}),r.a.createElement(u,{to:"/",name:"Home"}))},v=function(){return r.a.createElement("div",{className:"nav-right-buttons"},r.a.createElement(u,{to:"/links",name:"Links"}),r.a.createElement(u,{to:"/news",name:"News"}))},y=function(){return r.a.createElement("nav",{className:"header-container"},r.a.createElement(h,null),r.a.createElement(v,null))},j=function(e){return r.a.createElement("div",{className:"layout-container"},r.a.createElement(y,null),r.a.createElement("div",{className:"main-container"},e.children),r.a.createElement("footer",{className:"footer-container"}))};j.PropsType={childern:m.a.func};var N=j,O=a(173),S=(a(60),function(e){var t=e.name,a=e.url,n=e.imgSrc;return r.a.createElement("div",{className:"link-container"},r.a.createElement("a",{href:"https://".concat(a),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",{className:"link-button-style"},r.a.createElement("img",{key:Date.now(),src:"http://localhost:5000/"+n,className:"img-style",alt:"Missing"}),r.a.createElement("span",null,t))))});S.PropsType={name:m.a.string,url:m.a.string,imgSrc:m.a.string};var w=S,C=a(32),L=a(29),x=a(172),T=a(177),D=a(82),F=a.n(D),I=a(174),P=a(175),z=a(182),A=a(81),M=a.n(A),B=function(e){var t=e.link,a=e.index,l=e.setLink,c=e.errors,i=e.clearError,o=e.setErrors,s=r.a.useRef(null),m=Object(n.useState)(null),u=Object(g.a)(m,2),d=u[0],f=u[1],E=function(e){switch(e.target.id){case"edit-name-link":l(a,"name",e.target.value),i(a,"name");break;case"edit-url-link":l(a,"url",e.target.value),i(a,"url");break;case"upload-button":var t=e.target.files[0];if(void 0!==t&&null!==t){var n=URL.createObjectURL(e.target.files[0]),r=function(e){var t="";return e.size>2097152&&(t="Invaild : File too large to upload. The maximum size is 2MB"),"image/png"!==e.type&&"image/jpg"!==e.type&&"image/jpeg"!==e.type&&(t="Only .png, .jpg and .jpeg format allowed!"),t}(t);if(f(n),l(a,"file",t),""!==r){var s=c;s.file=r,o((function(e){return Object(L.a)({},e,Object(C.a)({},"link"+a,s))}))}else i(a,"image")}}};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Link Number ",a," "),r.a.createElement(T.a,{id:"edit-name-link",label:"Link ".concat(a," Name"),value:t.name,onChange:function(e){return E(e)}}),c.name?r.a.createElement("div",{className:"invalid-feedback"},c.name):"",r.a.createElement(T.a,{id:"edit-url-link",label:"Link ".concat(a," URL"),value:t.url,onChange:function(e){return E(e)}}),c.url?r.a.createElement("div",{className:"invalid-feedback"},c.url):"",r.a.createElement("div",{className:"edit-page-photo-container"},r.a.createElement("input",{type:"file",id:"upload-button",onChange:function(e){return E(e)},style:{display:"none"},ref:s}),r.a.createElement(x.a,{color:"primary","aria-label":"upload picture",component:"span",onClick:function(){s.current.click()}},"Select Image ",r.a.createElement(M.a,null)),r.a.createElement("img",{id:"edit-image-link",src:d||k("http://localhost:5000/".concat(t.imgsrc)),className:"img-style",alt:"Missing",onChange:function(e){return E(e)}})),c.file?r.a.createElement("div",{className:"invalid-feedback"},c.file):"",r.a.createElement(O.a,null))};B.PropsType={link:m.a.object,index:m.a.number,setLink:m.a.setLink,errors:m.a.object,clearError:m.a.func,setErrors:m.a.func};var J=B,R=a(180),_=a(178),K=(a(109),function(e){return r.a.createElement(_.a,Object.assign({elevation:6,variant:"filled"},e))}),U=function(e){var t=e.alert,a=e.setAlert,n=function(){a((function(e){return Object(L.a)({},e,{open:!1})}))};return r.a.createElement("div",{className:"alert-message"},r.a.createElement(R.a,{open:t.open,autoHideDuration:4e3,onClose:n,anchorOrigin:{horizontal:"center",vertical:"top"}},r.a.createElement(K,{onClose:n,severity:"error"===t.type?"error":"success"},t.message)))};U.PropsTypes={alert:m.a.object,setAlert:m.a.func};var q=U,W=function(e){return void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length},Y=a(38),H=a.n(Y),V=function(e){var t=e.title,a=e.links,l=e.categoryNumber,c=e.id,i=e.setSubmitForm,o=r.a.useState(!1),s=Object(g.a)(o,2),m=s[0],u=s[1],d=Object(n.useState)({}),f=Object(g.a)(d,2),E=f[0],b=f[1],k=Object(n.useState)(""),h=Object(g.a)(k,2),v=h[0],y=h[1],j=Object(n.useState)({}),N=Object(g.a)(j,2),O=N[0],S=N[1],w=Object(n.useState)({type:"",message:"",open:!1}),D=Object(g.a)(w,2),A=D[0],M=D[1];Object(n.useEffect)((function(){m&&(b({link1:{},link2:{},link3:{},link4:{},link5:{}}),y(t),S({link1:{name:a.link1.name,imgsrc:a.link1.imgsrc,url:a.link1.url},link2:{name:a.link2.name,imgsrc:a.link2.imgsrc,url:a.link2.url},link3:{name:a.link3.name,imgsrc:a.link3.imgsrc,url:a.link3.url},link4:{name:a.link4.name,imgsrc:a.link4.imgsrc,url:a.link4.url},link5:{name:a.link5.name,imgsrc:a.link5.imgsrc,url:a.link5.url}}))}),[m,t,a]);var B=function(e){return function(t){u(e)}},R=function(e,t,a){var n=O["link"+e];n[t]=a,S((function(t){return Object(L.a)({},t,Object(C.a)({},"link"+e,n))}))},_=function(e,t){var a=E["link"+e];switch(t){case"name":delete a.name;break;case"url":delete a.url;break;case"image":delete a.file}b(Object(L.a)({},E,Object(C.a)({},"link"+e,Object(L.a)({},a))))},K=function(e){e.preventDefault();var t=new FormData;t.set("title",v),t.set("_id",c),Object.keys(O).forEach((function(e,a){O[e].file&&t.append("images",O[e].file,"link"+(a+1)+".png"),t.append("link"+(a+1),JSON.stringify({name:O[e].name,url:O[e].url,imgsrc:O[e].imgsrc}))})),W(E.link1)&&W(E.link2)&&W(E.link3)&&W(E.link4)&&W(E.link5)?function(e,t){return H.a.post("http://localhost:5000/api/category/update/"+e,t)}(l,t).then((function(e){200===e.status&&(i((function(e){return!e})),M({open:!0,type:"success",message:"Update success"}),u(!1))})).catch((function(e){b(e.response.data),M({open:!0,type:"error",message:"Error update category"})})):M({open:!0,type:"error",message:"Please fix the highlighted errors before submit"})},U=r.a.createElement("div",{className:"link-page-edit-page-container"},r.a.createElement("form",{className:"edit-page-form-style",onSubmit:function(e){return K(e)}},r.a.createElement(T.a,{required:!0,id:"standard-required",label:"Title",value:v,onChange:function(e){return function(e){e.target.value.length<24&&y(e.target.value)}(e)}}),Object.keys(O).map((function(e,t){return r.a.createElement(J,{key:"link-edit".concat(t),link:O[e],setLink:R,index:t+1,errors:E[e],clearError:_})})),r.a.createElement(p.a,{size:"small",type:"submit",variant:"contained",color:"primary"},"Submit"),r.a.createElement(p.a,{size:"medium",onClick:B(!1),variant:"contained",color:"secondary"},"Close")));return r.a.createElement("div",{className:"link-page-edit-button-container"},r.a.createElement(x.a,{onClick:B(!0),className:"link-page-edit-button"},r.a.createElement(F.a,null)),r.a.createElement(I.a,{open:m,onClose:function(){return u(!1)},scroll:"paper","aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description"},r.a.createElement(z.a,{id:"dialog-title"},"Edit Category"),r.a.createElement(P.a,null,U)),r.a.createElement(q,{alert:A,setAlert:M}))},$=function(e){var t=e.urls,a=e.title,l=e.categoryNumber,c=e.id,i=e.setAlert,o=Object(n.useState)(!1),s=Object(g.a)(o,2),m=s[0],u=s[1],d=Object(n.useState)(a),f=Object(g.a)(d,2),E=f[0],p=f[1],b=Object(n.useState)(t),k=Object(g.a)(b,2),h=k[0],v=k[1];Object(n.useEffect)((function(){(function(e){return H.a.get("http://localhost:5000/api/category/"+e)})(c).then((function(e){p(e.data.title),v(e.data.categorylinks)})).catch((function(e){i({open:!0,type:"error",message:e})}))}),[m,c,i]);var y=Object.keys(h).map((function(e,t){return r.a.createElement(w,{key:"link".concat(t),name:h[e].name,url:h[e].url,imgSrc:h[e].imgsrc})}));return r.a.createElement("div",{className:"links-container"},r.a.createElement(V,{title:E,links:h,categoryNumber:l,id:c,setSubmitForm:u}),r.a.createElement("h2",null,E),r.a.createElement(O.a,{orientation:"horizontal"}),r.a.createElement("div",{className:"links-buttons-container"},y))};$.PropsTypes={urls:m.a.object,title:m.a.string,categoryNumber:m.a.number,id:m.a.string,setAlert:m.a.func};var G=$,Q=function(){var e=Object(n.useState)([]),t=Object(g.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)({type:"",message:"",open:!1}),i=Object(g.a)(c,2),o=i[0],s=i[1];return Object(n.useEffect)((function(){H.a.get("http://localhost:5000/api/category/all").then((function(e){l(e.data)})).catch((function(e){s({open:!0,type:"error",message:"Can't fetch from the server"})}))}),[]),r.a.createElement("div",{className:"links-display-container"},r.a.createElement(q,{alert:o,setAlert:s}),r.a.createElement("h1",null,"SITES LINKS"),r.a.createElement("img",{src:k("/media/misc/worldImage.png"),alt:"World Map",className:"links-title-image"}),r.a.createElement("div",{className:"link-catagory-container"},0===a.length?"":a.map((function(e,t){return r.a.createElement(G,{key:t,urls:e.categorylinks,title:e.title,id:e._id,categoryNumber:t+1,setAlert:s})}))))},X=a(176),Z=function(e){var t=e.article,a=e.loading;return r.a.createElement("div",{className:"article-container"},r.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("div",{className:"article-content-container"},a?r.a.createElement(X.a,{size:80}):r.a.createElement("img",{src:t.urlToImage?t.urlToImage:"/media/misc/not_available.png",alt:""}),r.a.createElement("div",null,r.a.createElement("p",null,t.title.substring(0,50)),r.a.createElement("span",null,t.source.name)))))};Z.PropsTypes={article:m.a.object,loading:m.a.bool};var ee=Z,te=a(130),ae=a(181),ne=a(83),re=a.n(ne),le=function(e){var t=Object(n.useState)("Corona"),a=Object(g.a)(t,2),l=a[0],c=a[1];return r.a.createElement(te.a,{className:"search-container"},r.a.createElement(ae.a,{className:"text-box",placeholder:"Search News by keywords",inputProps:{"aria-label":"Search News by keywords"},onChange:function(e){return function(e){c(e.target.value)}(e)},onKeyPress:function(t){return function(t){"Enter"===t.key&&e.onSearch(t,l)}(t)}}),r.a.createElement(O.a,{orientation:"vertical",flexItem:!0}),r.a.createElement(x.a,{className:"search-icon","aria-label":"search",onClick:function(t){return e.onSearch(t,l)}},r.a.createElement(re.a,null)))},ce=function(e){var t=new Date,a="".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate());return H.a.get("http://newsapi.org/v2/everything?q=".concat(e,"&from=").concat(a,"sortBy=popularity&apiKey=9004100c7c244cb4aa12b6d74c177f0e"))},ie=(a(127),function(){var e=Object(n.useState)([]),t=Object(g.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),i=Object(g.a)(c,2),o=i[0],s=i[1],m=Object(n.useState)("Powered By NewsApi"),u=Object(g.a)(m,2),d=u[0],f=u[1];return r.a.createElement("div",{className:"news-page-container"},r.a.createElement("div",{id:"news-page-header"}),r.a.createElement(le,{onSearch:function(e,t){e.preventDefault(),""!==t&&(s(!0),function(e){ce(e).then((function(t){0===t.data.articles.length?(f("No results for this keyword"),l([])):""!==e&&JSON.stringify(a)!==JSON.stringify(t.data.articles.slice(0,10))&&l(t.data.articles),s(!1)})).catch((function(e){console.log(e),f("Fetch News Failed")}))}(t))}}),0===a.length?r.a.createElement("h4",{style:{marginLeft:"auto",marginRight:"auto",fontFamily:"georgia"}},d):"",0!==a.length?r.a.createElement("div",{className:"articles-container"},a.map((function(e,t){return r.a.createElement(ee,{key:t,article:e,setLoading:s,loading:o})}))):r.a.createElement("div",{className:"articles-container hide"}))}),oe=function(e){var t=e.src,a=e.to,n=e.alt,l=e.target;return r.a.createElement(i.b,{to:a,target:l},r.a.createElement("div",{id:"main-image-container"},r.a.createElement("img",{src:t,alt:n})))};oe.PropsTypes={src:m.a.string,to:m.a.string,alt:m.a.string,target:m.a.string};var se=oe,me=function(){return r.a.createElement("div",{className:"main-page-links-container"},r.a.createElement(se,{src:k("/media/icons/linksIcon.png"),to:"/links",alt:"Links"}),r.a.createElement("h2",null,"Links List"),r.a.createElement(O.a,null),r.a.createElement(se,{src:k("/media/icons/newsIcon.png"),to:"/news",alt:"News"}),r.a.createElement("h2",null,"Search For News"))},ue=(a(128),function(){var e=Object(n.useState)([]),t=Object(g.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!0),i=Object(g.a)(c,2),o=i[0],s=i[1];return Object(n.useEffect)((function(){var e=new Date;"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDay()),"".concat(e.getFullYear(),"-").concat(e.getMonth()-2,"-").concat(e.getDay());ce("Corona").then((function(e){s(!1),l(e.data.articles)})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement("div",{className:"main-page-container"},r.a.createElement("h1",null,"Corona Virus Latest Articles"),r.a.createElement(O.a,{orientation:"horizontal",variant:"middle"}),r.a.createElement("img",{id:"main-page-image-header",src:k("/media/misc/coronaVirusImage.png"),alt:"Missing"}),0!==a.length?r.a.createElement("div",{className:"articles-container"},a.map((function(e,t){return r.a.createElement(ee,{key:t,article:e,setLoading:s,loading:o})}))):r.a.createElement("div",{className:"articles-container hide"}),r.a.createElement(O.a,{orientation:"horizontal",variant:"middle"}),r.a.createElement(me,null))});var ge=function(){return r.a.createElement(i.a,null,r.a.createElement(N,null,r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/",component:ue}),r.a.createElement(o.b,{exact:!0,path:"/links",component:Q}),r.a.createElement(o.b,{exact:!0,path:"/news",component:ie}),r.a.createElement(o.b,{path:"/*"},r.a.createElement(o.a,{to:"/"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},47:function(e,t,a){},60:function(e,t,a){},96:function(e,t,a){e.exports=a(129)}},[[96,1,2]]]);
//# sourceMappingURL=main.5de208ce.chunk.js.map