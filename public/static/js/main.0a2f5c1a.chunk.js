(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{30:function(e,t,a){},57:function(e,t,a){e.exports=a(87)},87:function(e,t,a){"use strict";a.r(t);var n=a(8),l=a(9),r=a(11),c=a(10),u=a(12),o=a(0),i=a.n(o),s=a(19),m=a.n(s),h=a(24),f=(a(37),a(18)),b=a(20),p=a.n(b),E=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).handleUserURL=function(e){a.setState({fullURL:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),p.a.post("http://localhost:5000/api/shortURLs",{fullURL:a.state.fullURL}).then((function(e){return console.log(e.data)})).catch((function(e){console.log(e)})),alert("URL Submitted! Please refresh page to see!")},a.handleUserURL=a.handleUserURL.bind(Object(f.a)(a)),a.state={fullURL:"",ShortURL:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",{className:"display-3"},"Welcome to Shrinker!"),i.a.createElement("form",{className:"form-group",onSubmit:this.handleSubmit},i.a.createElement("label",null),i.a.createElement("input",{className:"form-control",type:"url",value:this.state.fullURL,onChange:this.handleUserURL,name:"fullURL",id:"fullURL",placeholder:"Enter URL to shrink"}),i.a.createElement("button",{className:"btn btn-primary",type:"submit",value:"Submit","aria-hidden":"true"},"Submit")))}}]),t}(i.a.Component),d=a(89);a(78).config();var j=function(e){return i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("a",{href:e.url.full},e.url.full)),i.a.createElement("td",null,i.a.createElement("a",{href:e.url.full},"http://localhost:5000/api/",e.url.short)),i.a.createElement("td",null,e.url.clicks))},v=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={urls:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("http://localhost:5000/api"),p.a.get("http://localhost:5000/api").then((function(t){e.setState({urls:t.data})})).catch((function(e){return console.log(e)}))}},{key:"readUrls",value:function(){return this.state.urls.map((function(e,t){return i.a.createElement(j,{url:e,key:t})}))}},{key:"render",value:function(){return i.a.createElement(d.a,{striped:!0,responsive:!0,hover:!0},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Full URL"),i.a.createElement("th",null,"Shortened URL"),i.a.createElement("th",null,"Clicks"))),i.a.createElement("tbody",null,this.readUrls()))}}]),t}(i.a.Component),O=a(91),U=a(92),k=(a(30),a(93)),y=a(95),L=a(94),g=a(54),R=a(90),S=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(k.a,{bg:"dark",variant:"dark",expand:"lg"},i.a.createElement(k.a.Brand,{href:"#home"},"Shrinker!"),i.a.createElement(k.a.Toggle,{"aria-controls":"basic-navbar-nav"}),i.a.createElement(k.a.Collapse,{id:"basic-navbar-nav"},i.a.createElement(y.a,{className:"mr-auto"},i.a.createElement(y.a.Link,{href:"#home"},"Home"),i.a.createElement(y.a.Link,{href:"#link"},"Link")),i.a.createElement(L.a,{inline:!0},i.a.createElement(g.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),i.a.createElement(R.a,{variant:"outline-success"},"Search"))))}}]),t}(i.a.Component),C=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("footer",{className:"page-footer font-small blue"},i.a.createElement("div",{className:"footer-copyright text-center py-3"},"\xa9 2020 Copyright:",i.a.createElement(h.b,{to:"/"}," Shrinker.com")))}}]),t}(i.a.Component),N=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(h.a,null,i.a.createElement(S,null),i.a.createElement(O.a,null,i.a.createElement(U.a,null,i.a.createElement(E,null)),i.a.createElement(v,null)),i.a.createElement(C,null))}}]),t}(i.a.Component);m.a.render(i.a.createElement(N,null),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.0a2f5c1a.chunk.js.map