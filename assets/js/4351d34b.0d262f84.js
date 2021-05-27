(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7021],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||l[d]||i;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4136:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return a},toc:function(){return u},default:function(){return p}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),s={id:"jsdom-version",title:"Configure other JSDOM versions"},a={unversionedId:"guides/jsdom-version",id:"guides/jsdom-version",isDocsHomePage:!1,title:"Configure other JSDOM versions",description:"Jest v26+ by default uses JSDOM 16 to support Node 10+.",source:"@site/docs/guides/jsdom-version.md",sourceDirName:"guides",slug:"/guides/jsdom-version",permalink:"/jest-preset-angular/docs/next/guides/jsdom-version",editUrl:"https://github.com/thymikee/jest-preset-angular/edit/master/website/docs/guides/jsdom-version.md",version:"current",frontMatter:{id:"jsdom-version",title:"Configure other JSDOM versions"},sidebar:"docs",previous:{title:"Testing CSS Styles",permalink:"/jest-preset-angular/docs/next/guides/testing-css-styles"},next:{title:"Using with Babel",permalink:"/jest-preset-angular/docs/next/guides/using-with-babel"}},u=[],c={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Jest")," v26+ by default uses ",(0,i.kt)("strong",{parentName:"p"},"JSDOM")," 16 to support Node 10+."),(0,i.kt)("p",null,"If you need a different JSDOM version than the one that ships with Jest, you can install a jsdom environment\npackage, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"jest-environment-jsdom-sixteen")," and edit your Jest config like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "testEnvironment": "jest-environment-jsdom-sixteen"\n}\n')),(0,i.kt)("p",null,"If you use JSDOM v11 or lower, you might have to mock ",(0,i.kt)("inlineCode",{parentName:"p"},"localStorage")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"sessionStorage")," on your own or using some third-party library by loading it in ",(0,i.kt)("inlineCode",{parentName:"p"},"setupFilesAfterEnv"),"."),(0,i.kt)("p",null,"Reference: ",(0,i.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/configuration.html#testenvironment-string"},"https://jestjs.io/docs/en/configuration.html#testenvironment-string"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jsdom/jsdom/blob/master/Changelog.md#1200"},"https://github.com/jsdom/jsdom/blob/master/Changelog.md#1200")))}p.isMDXComponent=!0}}]);