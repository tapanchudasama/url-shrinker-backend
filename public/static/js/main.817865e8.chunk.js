(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{30:function(e,t,a){},57:function(e,t,a){e.exports=a(87)},87:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(9),l=a(11),c=a(10),u=a(12),o=a(0),s=a.n(o),i=a(19),m=a.n(i),h=a(24),p=(a(37),a(18)),f=a(20),b=a.n(f),d=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).handleUserURL=function(e){a.setState({fullURL:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),b.a.post("https://sheltered-shore-02498.herokuapp.com/api/shortURLs",{fullURL:a.state.fullURL}).then((function(e){return console.log(e.data)})).catch((function(e){console.log(e)})),alert("URL Submitted! Please refresh page to see!")},a.handleUserURL=a.handleUserURL.bind(Object(p.a)(a)),a.state={fullURL:"",ShortURL:""},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",{className:"display-3"},"Welcome to Shrinker!"),s.a.createElement("form",{className:"form-group",onSubmit:this.handleSubmit},s.a.createElement("label",null),s.a.createElement("input",{className:"form-control",type:"url",value:this.state.fullURL,onChange:this.handleUserURL,name:"fullURL",id:"fullURL",placeholder:"Enter URL to shrink"}),s.a.createElement("button",{className:"btn btn-primary",type:"submit",value:"Submit","aria-hidden":"true"},"Submit")))}}]),t}(s.a.Component),E=a(89);a(78).config();var j=function(e){return s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement("a",{href:e.url.full},e.url.full)),s.a.createElement("td",null,s.a.createElement("a",{href:e.url.full},"https://sheltered-shore-02498.herokuapp.com/api/",e.url.short)),s.a.createElement("td",null,e.url.clicks))},k=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={urls:[]},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("https://sheltered-shore-02498.herokuapp.com/api"),b.a.get("https://sheltered-shore-02498.herokuapp.com/api").then((function(t){e.setState({urls:t.data})})).catch((function(e){return console.log(e)})),this.setState({urls:[]})}},{key:"readUrls",value:function(){return this.state.urls.map((function(e,t){return s.a.createElement(j,{url:e,key:t})}))}},{key:"render",value:function(){return s.a.createElement(E.a,{striped:!0,responsive:!0,hover:!0},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Full URL"),s.a.createElement("th",null,"Shortened URL"),s.a.createElement("th",null,"Clicks"))),s.a.createElement("tbody",null,this.readUrls()))}}]),t}(s.a.Component),v=a(91),O=a(92),U=(a(30),a(93)),y=a(95),L=a(94),g=a(54),R=a(90),S=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(U.a,{bg:"dark",variant:"dark",expand:"lg"},s.a.createElement(U.a.Brand,{href:"#home"},"Shrinker!"),s.a.createElement(U.a.Toggle,{"aria-controls":"basic-navbar-nav"}),s.a.createElement(U.a.Collapse,{id:"basic-navbar-nav"},s.a.createElement(y.a,{className:"mr-auto"},s.a.createElement(y.a.Link,{href:"#home"},"Home"),s.a.createElement(y.a.Link,{href:"#link"},"Link")),s.a.createElement(L.a,{inline:!0},s.a.createElement(g.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),s.a.createElement(R.a,{variant:"outline-success"},"Search"))))}}]),t}(s.a.Component),C=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("footer",{className:"page-footer font-small blue"},s.a.createElement("div",{className:"footer-copyright text-center py-3"},"\xa9 2020 Copyright:",s.a.createElement(h.b,{to:"/"}," Shrinker.com")))}}]),t}(s.a.Component),N=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(h.a,null,s.a.createElement(S,null),s.a.createElement(v.a,null,s.a.createElement(O.a,null,s.a.createElement(d,null)),s.a.createElement(k,null)),s.a.createElement(C,null))}}]),t}(s.a.Component);m.a.render(s.a.createElement(N,null),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.817865e8.chunk.js.map