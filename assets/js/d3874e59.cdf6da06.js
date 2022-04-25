"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[374],{4167:function(e,n,t){t.r(n),t.d(n,{HomepageFeatures:function(){return b},default:function(){return E}});var a=t(7462),r=t(3366),l=t(7294),c=t(3905),o=["components"],s={toc:[{value:"Installation",id:"installation",children:[{value:"With Wally",id:"with-wally",children:[],level:3}],level:2}]};function i(e){var n=e.components,t=(0,r.Z)(e,o);return(0,c.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("div",{align:"center"},"An immutable data structure library for Roblox Luau.",(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://github.io/benbrimeyer/Freeze"},(0,c.kt)("strong",{parentName:"a"},"View docs ","\u2192"))),(0,c.kt)("p",null,"\u26a0\ufe0f Pre-release. Feel free to install, however expect things to shift around before v1.0.0 \u26a0\ufe0f")),(0,c.kt)("h2",{id:"installation"},"Installation"),(0,c.kt)("h3",{id:"with-wally"},"With Wally"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nFreeze = "duckarmor/freeze@0.0.1"\n')))}i.isMDXComponent=!0;var u=t(9960),d=t(2263),h=t(4814),m=t(6010),f="heroBanner_PAbV",p="buttons_2tNn";function b(){return null}function v(){var e=(0,d.Z)().siteConfig;return l.createElement("header",{className:(0,m.Z)("hero",f)},l.createElement("div",{className:"container"},l.createElement("h1",{className:"hero__title"},e.title),l.createElement("p",{className:"hero__subtitle"},e.tagline),l.createElement("div",{className:p},l.createElement(u.Z,{className:"button button--secondary button--lg",to:"/docs/intro"},"Get Started \u2192"))))}function E(){var e=(0,d.Z)(),n=e.siteConfig,t=e.tagline;return l.createElement(h.Z,{title:n.title,description:t},l.createElement(v,null),l.createElement("main",null,l.createElement(b,null),l.createElement("div",{className:"container"},l.createElement(i,null))))}},6979:function(e,n,t){var a=t(6775),r=t(2263),l=t(8084),c=t(4184),o=t.n(c),s=t(7294);n.Z=function(e){var n=(0,s.useRef)(!1),c=(0,s.useRef)(null),i=(0,a.k6)(),u=(0,r.Z)().siteConfig,d=(void 0===u?{}:u).baseUrl;(0,s.useEffect)((function(){var e=function(e){"s"!==e.key&&"/"!==e.key||c.current&&e.srcElement===document.body&&(e.preventDefault(),c.current.focus())};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[]);var h=(0,l.usePluginData)("docusaurus-lunr-search"),m=function(){n.current||(Promise.all([fetch(""+d+h.fileNames.searchDoc).then((function(e){return e.json()})),fetch(""+d+h.fileNames.lunrIndex).then((function(e){return e.json()})),Promise.all([t.e(878),t.e(245)]).then(t.bind(t,4130)),Promise.all([t.e(312),t.e(343)]).then(t.bind(t,3343))]).then((function(e){var n=e[0],t=e[1],a=e[2].default;0!==n.length&&function(e,n,t){new t({searchDocs:e,searchIndex:n,inputSelector:"#search_input_react",handleSelected:function(e,n,t){var a=d+t.url;document.createElement("a").href=a,i.push(a)}})}(n,t,a)})),n.current=!0)},f=(0,s.useCallback)((function(n){c.current.contains(n.target)||c.current.focus(),e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return s.createElement("div",{className:"navbar__search",key:"search-box"},s.createElement("span",{"aria-label":"expand searchbar",role:"button",className:o()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:f,onKeyDown:f,tabIndex:0}),s.createElement("input",{id:"search_input_react",type:"search",placeholder:"Press S to Search...","aria-label":"Search",className:o()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:m,onMouseOver:m,onFocus:f,onBlur:f,ref:c}))}}}]);