(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{140:function(e,t,a){"use strict";a.r(t),a.d(t,"blogPostQuery",function(){return i});var n=a(0),c=a.n(n),r=a(159),A=a(153);t.default=function(e){var t=e.data.markdownRemark,a=t.html,n=t.frontmatter,i=n.date,l=n.title,g=n.author;return c.a.createElement(r.a,{article:c.a.createElement("div",{className:"post__wrapper"},c.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}}))},c.a.createElement(A.a,{title:l,keywords:["gatsby","application","react"]}),c.a.createElement("div",{className:"post-header"},c.a.createElement("div",{className:"post-title"},l),c.a.createElement("h3",null,g),c.a.createElement("h5",null,i)))};var i="2370138506"},147:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return u}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return s});var n=a(0),c=a.n(n),r=a(4),A=a.n(r),i=a(148),l=a.n(i);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var g=a(155),o=a.n(g);a.d(t,"PageRenderer",function(){return o.a});var m=a(33);a.d(t,"parsePath",function(){return m.a});var d=c.a.createContext({}),s=function(e){return c.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):c.a.createElement("div",null,"Loading (StaticQuery)")})};function u(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}s.propTypes={data:A.a.object,query:A.a.string.isRequired,render:A.a.func,children:A.a.func}},151:function(e,t,a){"use strict";var n=a(147),c=a(4),r=a.n(c),A=a(0),i=a.n(A),l=a(160),g=function(e){e.siteTitle;return i.a.createElement("header",{className:"header"},i.a.createElement("div",{className:"header-wrapper"},i.a.createElement("div",{className:"header-title"},i.a.createElement(n.Link,{to:"/"},"__WEBSDEV")),i.a.createElement("nav",null,i.a.createElement("ul",{className:"header-nav"},i.a.createElement(n.Link,{to:"/",style:{padding:"3px 0"},activeStyle:{borderBottom:"1px solid"}},"Blog"),i.a.createElement(n.Link,{to:"/about/",style:{padding:"3px 0"},activeStyle:{borderBottom:"1px solid"}},"About"),i.a.createElement(n.Link,{to:"/work/",style:{padding:"3px 0"},activeStyle:{borderBottom:"1px solid"}},"Work"),i.a.createElement(n.Link,{to:"/smash/",style:{padding:"3px 0"},activeStyle:{borderBottom:"1px solid"}},"Alter-Ego"))),i.a.createElement(l.a,null)))};g.propTypes={siteTitle:r.a.string},t.a=g},152:function(e,t,a){},153:function(e,t,a){"use strict";var n=a(167),c=a(0),r=a.n(c),A=a(4),i=a.n(A),l=a(173),g=a.n(l),o=a(147);function m(e){var t=e.description,a=e.lang,c=e.meta,A=e.keywords,i=e.title;return r.a.createElement(o.StaticQuery,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return r.a.createElement(g.a,{htmlAttributes:{lang:a},title:i,titleTemplate:e.site.siteMetadata.title+" | %s",meta:[{name:"description",content:n},{property:"og:title",content:i},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:n}].concat(A.length>0?{name:"keywords",content:A.join(", ")}:[]).concat(c)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=m;var d="1025518380"},155:function(e,t,a){var n;e.exports=(n=a(163))&&n.default||n},156:function(e){e.exports={data:{site:{siteMetadata:{title:"wbdv"}}}}},157:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI1MC4zMTMgMjUwLjMxMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjUwLjMxMyAyNTAuMzEzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGcgaWQ9IlNlYXJjaCI+Cgk8cGF0aCBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7IiBkPSJNMjQ0LjE4NiwyMTQuNjA0bC01NC4zNzktNTQuMzc4Yy0wLjI4OS0wLjI4OS0wLjYyOC0wLjQ5MS0wLjkzLTAuNzYgICBjMTAuNy0xNi4yMzEsMTYuOTQ1LTM1LjY2LDE2Ljk0NS01Ni41NTRDMjA1LjgyMiw0Ni4wNzUsMTU5Ljc0NywwLDEwMi45MTEsMFMwLDQ2LjA3NSwwLDEwMi45MTEgICBjMCw1Ni44MzUsNDYuMDc0LDEwMi45MTEsMTAyLjkxLDEwMi45MTFjMjAuODk1LDAsNDAuMzIzLTYuMjQ1LDU2LjU1NC0xNi45NDVjMC4yNjksMC4zMDEsMC40NywwLjY0LDAuNzU5LDAuOTI5bDU0LjM4LDU0LjM4ICAgYzguMTY5LDguMTY4LDIxLjQxMyw4LjE2OCwyOS41ODMsMEMyNTIuMzU0LDIzNi4wMTcsMjUyLjM1NCwyMjIuNzczLDI0NC4xODYsMjE0LjYwNHogTTEwMi45MTEsMTcwLjE0NiAgIGMtMzcuMTM0LDAtNjcuMjM2LTMwLjEwMi02Ny4yMzYtNjcuMjM1YzAtMzcuMTM0LDMwLjEwMy02Ny4yMzYsNjcuMjM2LTY3LjIzNmMzNy4xMzIsMCw2Ny4yMzUsMzAuMTAzLDY3LjIzNSw2Ny4yMzYgICBDMTcwLjE0NiwxNDAuMDQ0LDE0MC4wNDMsMTcwLjE0NiwxMDIuOTExLDE3MC4xNDZ6IiBmaWxsPSIjYThhOGE4Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="},158:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{fields:{slug:"/posts/magic-in-programming/"},frontmatter:{date:"2019-01-01",title:"Magic in programming",tags:["programming"]}}},{node:{fields:{slug:"/posts/a-usb-controller-py-and-pi/"},frontmatter:{date:"2018-12-31",title:"USB controllers, Py, and Pi",tags:["programming","ssbm"]}}}]}}}},159:function(e,t,a){"use strict";var n=a(156),c=a(0),r=a.n(c),A=a(4),i=a.n(A),l=a(147),g=a(151),o=a(157),m=a.n(o),d=function(){return r.a.createElement("div",{className:"blog-search"},r.a.createElement("form",{className:"blog-search__wrapper"},r.a.createElement("input",{type:"search",placeholder:"Search archives"}),r.a.createElement("button",{className:"blog-search__button"},r.a.createElement("img",{alt:"search-button",src:m.a,className:"svg-icon"}))))},s=a(158),u=function(e){var t=e.edges;return r.a.createElement("div",{className:"archive__container"},r.a.createElement("div",{className:"widget-title subtitle-border"},"Recent posts"),t.map(function(e,t){var a=e.node;return r.a.createElement("div",{className:"widget-link",key:t},r.a.createElement(l.Link,{to:a.fields.slug},a.frontmatter.title))}))},C=(a(73),function(e){var t=e.edges.reduce(function(e,t){return t.node.frontmatter.tags.forEach(function(t){e.indexOf(t)<0&&e.push(t)}),e},[]);return r.a.createElement("div",{className:"archive__container"},r.a.createElement("div",{className:"widget-title subtitle-border"},"Browse by tag"),t.map(function(e,t){return r.a.createElement("div",{className:"widget-link",key:t},r.a.createElement(l.Link,{to:"/tags/"+e},e))}))}),I=function(){return r.a.createElement(l.StaticQuery,{query:E,render:function(e){var t=e.allMarkdownRemark;return r.a.createElement("div",{className:"archives"},r.a.createElement(u,t),r.a.createElement(C,t))},data:s})},E="2952401111",M=function(){return r.a.createElement("div",{className:"blog-aside"},r.a.createElement(d,null),r.a.createElement(I,null))},b=(a(152),function(e){var t=e.children,a=e.article;return r.a.createElement(l.StaticQuery,{query:"290969763",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",{className:"main-content__wrapper"},t,r.a.createElement("main",{className:"main-content"},r.a.createElement("section",null,a),r.a.createElement("aside",null,r.a.createElement(M,null)))))},data:n})});b.propTypes={children:i.a.node,article:i.a.node.isRequired};t.a=b},160:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(164),A=a.n(r),i=a(165),l=a.n(i),g=a(166),o=a.n(g);t.a=function(){return c.a.createElement("div",{className:"social-icons"},c.a.createElement("div",{className:"social-icon__wrapper"},c.a.createElement("a",{href:"https://twitter.com/_websdev"},c.a.createElement("img",{src:l.a,alt:"Twitter"})),c.a.createElement("a",{href:"https://github.com/webermn15"},c.a.createElement("img",{src:A.a,alt:"Github"})),c.a.createElement("a",{href:"https://linkedin.com/in/michaelnweber"},c.a.createElement("img",{src:o.a,alt:"LinkedIn"}))))}},163:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),c=a.n(n),r=a(4),A=a.n(r),i=a(54),l=a(2),g=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return c.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};g.propTypes={location:A.a.shape({pathname:A.a.string.isRequired}).isRequired},t.default=g},164:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEE2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREPC9zdFJlZjppbnN0YW5jZUlEPgogICAgICAgICAgICA8c3RSZWY6ZG9jdW1lbnRJRD54bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREPC9zdFJlZjpkb2N1bWVudElEPgogICAgICAgICA8L3htcE1NOkRlcml2ZWRGcm9tPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOkU1MTc4QTJCOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREPC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOkU1MTc4QTJBOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBob3Rvc2hvcCBDUzYgKE1hY2ludG9zaCk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CkKYCfIAAAMrSURBVEgNnZXPS1VREMf1ldFCKjHBVNpYkSQhEfpWLdoZFBLUzjYFLZLAnVsp6A9o48JtRKvaVJtqJ0KbclWgES2iJC2jtHq++26f77yZ63km/RoYv3NmvvOdc4/3ntfclFie580sm7Gax4O1Wm2Y9UnyfXi705fBF3CelEqlh8RP4bDMS8S5YudtgAtaolKpDGVZdhvx7+oKY53LUxNHXHKDoUasjW5YmiAeo2kZNCPOcJmJJ6hclvDUMxaqxPUhRUCFnUwmDTlrif/WnRNt6plsGEJF5ybxq8FC9BO+GOs/objqCZ60pMnatBWUIXxMCDeJe/EL5OfwNXwen3FXrNycOOIiqh4z8tIqa4hNYXFHFQo/hNioFev1DtYH8VZ8p7ti5ToS3ijrQoOB0ixth1AmGOHVEnebN3QLRSD/gVC+2eaVcE6N0HpA06BvhLisAXrPd0DMVAT1Hi8Qm0kgYjDe78bXsE5QjwZJI5Mm8XATxzIjUXBdiN3FNVi720pIpcKCox5cvYWWtLU7faGyEJtlelUNYOy4ztjirzjOrVKedUpo9WlAmxhgJFed9M/Ajte8yaYSt2lAiOv8dGS7hf9pu7xPWtqw/QOXeMxUrzdIPFhDISVF7BzbHLno1Y0pypJ2/FhHBMa98pZlv6pgC17CfxmknNdanNuPxntyhZa0JTKRJj2+D+5T498Y3C6uwgehk2x2QgMGSHyxYp7fI37kxGd8jZeJj+J7Ng8i144fw68g/hzUzmV2EuBnUgPWh9CUE3Rcx/FbWssgrlAfF5Gljss+PHCcWnEhShgXP76nqWJTkA9TeQ3qup0GuiDqaVbwBdb2YwKmA05Qi92uE6tX34+GvAHq3xeB3R3gOQox/Yzv+Aj5vcVO/Cm81gnfbmBQu7deYbVaPe8c09aj21sCXoQgWyW+gZ/Cz+Kt3mBvjsfd8HTO2nHFUbfxpeAKzUgWryHxaRpeqUFGvAL0iAimR9TjNdHEewnYkzu30CyGQIgn6SG+hi9yrt/Azi0G6Ii+4u+oX8f3hzBxo7hN8D8U6+fGmvgAPoTb7bqJp9tTvyWHIk9c9EbuJ9zdmnF6GmrzAAAAAElFTkSuQmCC"},165:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAActpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgSW1hZ2VSZWFkeTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KKS7NPQAAAuNJREFUSA2tlrtrVFEQh3fzEKxEfHYKRkGLiCFqZ5FOtLEQxM74RwSUlFqJpaVNUqSyk3RWFhK0UYyNgliIryiSqHmv33f3/NabTYKFDnw7c+bMmTPnce/dZqMmrVart9lsrsVFexj7PJyBIwVU401hBj3NmKc6le4cbW/pSIOgQZiABfibGDMJg7XxvbErTWfHgT0KXyCyjrFW0O5uJ84xo0mM3c7ZMejBHoPICsYqmDyJ06euT2RsZGzTJDrotfLIEoaJtxMnXi6kkF+14M5KqsnocM/nSoDJrS7VF3dH6e8W4xUnVczVOROr95AUq+muPIPsr/e9ov0M6pU7eQqYTPXDOHNbkuw7vieQhK7qJyjz4Fnth11wFe7DFHyFiDmHrX48HvRisWfRA3CjtOvqblVZ1w8Bl+FTCcwqxnuI8yFS1qFZWY3GXnQPD9Bt9BV4CAugPPaHRDthR7H70COwz64CqnHaQKtV3I7M7FncNELB7odzcA2OFl8PdnXX0YfhPSj1GzjrYB2R3OfPOC6URFa3QeirVoqu+tBD8AGUnKP20qbBJdNu9ECxvYJWKm7jGlvnNijZ0pPYByrPH1+7yeBsUX17nN0bcdEotGe1QfC1XwV4sR+AYg63Ordv1oG+GSNWlqpcxQk7qDirsJkJs/+XcFXbaRc4Pit8bXCuqUmcWR3xIboDhxhkbB944El+DDs7kPOr56iu6TRjf0BmVs/DS3gBS7AIrmQVVsAkZ3FNwXHwbLKNWYU5zV1VlldFbsA3EtyDoSqg/ND27p+CW/ARFCcTRZ2VTDis2m+cvpgewR5YBh8gH6y38A5cUT8cBJ8DHyjFr585rN7KV8CxczDCSp+j28Ik9dd1VoJ7W7HSnJeV15+n0eT14OrXzZdYxAMWJ8s2mNS21zGXQjvbgtkaS3Lsdu6OQQ/2Vp9MkyQpZmfCrECfn8zrm5Jv5SDQD9B/+ehXh1yfxCtYa//z35bf8hRLIs/jehMAAAAASUVORK5CYII="},166:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEE2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOkUxQUJDNTQyMUM3RDExRTJCOTE0RjdFQ0QyRjU4NEFEPC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOkUxQUJDNTNGMUM3RDExRTJCOTE0RjdFQ0QyRjU4NEFEPC9zdFJlZjppbnN0YW5jZUlEPgogICAgICAgICAgICA8c3RSZWY6ZG9jdW1lbnRJRD54bXAuZGlkOkUxQUJDNTQwMUM3RDExRTJCOTE0RjdFQ0QyRjU4NEFEPC9zdFJlZjpkb2N1bWVudElEPgogICAgICAgICA8L3htcE1NOkRlcml2ZWRGcm9tPgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOkUxQUJDNTQxMUM3RDExRTJCOTE0RjdFQ0QyRjU4NEFEPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBob3Rvc2hvcCBDUzYgKE1hY2ludG9zaCk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CnxeePUAAAKGSURBVEgNpZQ/j4xRFIffMbtY/9aSSIREQqGR+AAqEXwCSonQaVmFQohep1dqKGgUtKLc8AVkBROJv8Vid2c8z33nN3nfMZE1TvK859x7zz3n3nPPTDUYDM7BMijrtfqvb2J8IMqFDp/lqqoOwgCUfq3KdxPfTmO8UdNY7uuZwEGCTwoW540Gj1/ZN8MoJ/a0n+EhvIcTcBKUaZJ42H7FBfreAlHfLOGMOBgcghegpK716B++ntrTKR/hmQb75zqdzhvMp46HEr+MN6Sbj7iLHUfcRfAVkli+MkZbRhOknLEdh4kHMEhdq6rain2dwLPot3AGzoOiXySBPNy4mKw1P6mLvuP0E7zRZjDgKqxBF7aA8glsCmUB9hSr9vfQRZIgme8zexe8zW64B4fhErwEfy+34DW4tgKeWM7CNdgHiVce1J5Y84PcYbEI9l54BXbXcSfRXW117dX+Mn8ZfoFSOq9VL9xzfXduBwN53Z2gzNAAS+DmBZgHq5CED/B5XjzrUrUfhIU8oD5eM2L9lVWCzcIV7MfwBC6Ct+yS2PdbgpE0u2M0OcHwFravgY5h3oD9ziEe6hFrefDiW1b4jJco83/T8yzOwfrQaQd629D+Q02TwPewwyL+bvIGmRvpaRKkEfJG6ubbjYJrTJNgPFir5q3oExI0nU2ecfMg4+XQp7mePSVXc8EJf5mRbxj+RXjir5lEf2nYmvrYnpEfMdS2qTVMotO0obantDvSileZf8dY36OgZM8B7Nusm8TOOgWK6/38F6WuresVt/oG4/P6Oxc9dB2pUTyz9CABXPAUIQEyVnuL+CfJ+DouxadngkVIEgNanpBAGatTGswi+jTXnXTOmIu/AfYRn9BU48AbAAAAAElFTkSuQmCC"},167:function(e){e.exports={data:{site:{siteMetadata:{title:"wbdv",description:"Michael Weber's personal website, portfolio, blog. Howdy folks.",author:"Michael"}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-template-js-49a26e82f84b87e6be99.js.map