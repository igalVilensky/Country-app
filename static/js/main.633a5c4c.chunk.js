(this["webpackJsonpcountry-app"]=this["webpackJsonpcountry-app"]||[]).push([[0],{20:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),s=n(13),r=n.n(s),i=n(3),o=n(0),u=function(){return Object(o.jsxs)("div",{className:"loading",children:[Object(o.jsx)("h1",{children:"\u23f3"}),Object(o.jsx)("h1",{className:"loading-txt",children:"Loading ..."})]})},l=(n(20),n(14)),j=n.n(l),b=function(e){var t=e.results,n=e.getCountry,c=t.map((function(e,t){console.log(e);var c=e.name,a=e.region,s=e.flag,r=e.capital,i=e.population,u=e.subregion,l=e.area,j=e.timezones,b=e.borders;return Object(o.jsxs)("div",{className:"result",children:["`",Object(o.jsx)("h1",{children:c}),Object(o.jsxs)("p",{children:[c," is a country located in ",a," (",u," subregion) and shares borders with:"," ",b.map((function(e,t){return Object(o.jsxs)("i",{className:"country-link",onClick:function(){return n("name",e)},children:["\xa0\xa0 ",e]},t)})),". ",Object(o.jsx)("br",{}),c,"'s capital city is ",r," and its area is ",l," km",Object(o.jsx)("sup",{children:"2"}),". The population of ",c," is ",i,". The timezone for ",c," is ",j]}),Object(o.jsx)("img",{src:s,alt:c,className:"flag"})," `"]},t)}));return Object(o.jsx)(a.a.Fragment,{children:c})};var d=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),r=Object(i.a)(s,2),l=r[0],d=r[1],h=Object(c.useState)(!0),p=Object(i.a)(h,2),O=p[0],m=p[1];Object(c.useEffect)((function(){setTimeout((function(){m(!1),console.log("hi")}),1e3)}),[]);var f=function(e,t){var n=encodeURIComponent(t),c="https://restcountries.eu/rest/v2/".concat(e,"/").concat(n);j()(c).then((function(e){var t=e.data;return d(t)})).catch((function(e){return console.log("Your had an ".concat(e))}))};return O?Object(o.jsx)(u,{}):Object(o.jsxs)("div",{className:"app__main",children:[Object(o.jsx)("h1",{className:"heading",children:"Countries Database App"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f("name",n),a("")},children:[Object(o.jsx)("input",{type:"text",value:n,onChange:function(e){a(e.target.value)},placeholder:"Please enter country name"}),Object(o.jsx)("button",{type:"submit",children:"Search"})]}),Object(o.jsx)(b,{results:l,getCountry:f})]})};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.633a5c4c.chunk.js.map