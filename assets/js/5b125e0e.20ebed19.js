"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9960],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,d=c["".concat(l,".").concat(m)]||c[m]||g[m]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2709:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),i=["components"],s={id:"angular-13+",title:"Angular >=13"},l=void 0,p={unversionedId:"guides/angular-13+",id:"guides/angular-13+",isDocsHomePage:!1,title:"Angular >=13",description:"Angular 13 introduces ESM package format for Angular packages. jest-preset-angular",source:"@site/docs/guides/angular-13+.md",sourceDirName:"guides",slug:"/guides/angular-13+",permalink:"/jest-preset-angular/docs/next/guides/angular-13+",editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/docs/guides/angular-13+.md",tags:[],version:"current",frontMatter:{id:"angular-13+",title:"Angular >=13"},sidebar:"docs",previous:{title:"Angular Ivy",permalink:"/jest-preset-angular/docs/next/guides/angular-ivy"},next:{title:"ESM Support",permalink:"/jest-preset-angular/docs/next/guides/esm-support"}},u=[{value:"Migration steps from Angular &lt; 13",id:"migration-steps-from-angular--13",children:[],level:2}],g={toc:u};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Angular 13")," introduces ESM package format for Angular packages. ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular"),"\ncurrently supports testing with Jest in ",(0,o.kt)("inlineCode",{parentName:"p"},"CommonJS")," mode with ",(0,o.kt)("strong",{parentName:"p"},"Angular 13")," using ",(0,o.kt)("a",{parentName:"p",href:"https://thymikee.github.io/jest-preset-angular/docs/next/getting-started/presets"},"default preset"),".\nJest ESM support with ",(0,o.kt)("strong",{parentName:"p"},"Angular 13")," is being worked on and will come in the future releases."),(0,o.kt)("p",null,"Starting from ",(0,o.kt)("strong",{parentName:"p"},"11.0.0"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," introduces a few extra changes to be able to run Jest with ",(0,o.kt)("strong",{parentName:"p"},"Angular 13"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"ng-jest-resolver")," is introduced as a custom Jest resolver to resolve ",(0,o.kt)("inlineCode",{parentName:"p"},".mjs")," files.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"transformIgnorePatterns")," is added to inform Jest to transform ",(0,o.kt)("inlineCode",{parentName:"p"},".mjs")," files.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"transform")," is updated to include ",(0,o.kt)("inlineCode",{parentName:"p"},".mjs")," extension to transform to ",(0,o.kt)("inlineCode",{parentName:"p"},"CommonJS")," codes."))),(0,o.kt)("h2",{id:"migration-steps-from-angular--13"},"Migration steps from Angular < 13"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Upgrade the project to ",(0,o.kt)("strong",{parentName:"p"},"Angular 13")," following ",(0,o.kt)("a",{parentName:"p",href:"https://update.angular.io/"},"https://update.angular.io/"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If one is using the default preset as following:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  preset: 'jest-preset-angular',\n};\n")),(0,o.kt)("p",null,"there are no migration steps required"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If one is using custom Jest config options for ",(0,o.kt)("inlineCode",{parentName:"li"},"transformIgnorePatterns"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"transform")," and not using ",(0,o.kt)("inlineCode",{parentName:"li"},"preset: 'jest-preset-angular'"),",\nthere are a few changes needed to be added to the Jest config:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  resolver: 'jest-preset-angular/build/resolvers/ng-jest-resolver.js',\n  transformIgnorePatterns: ['node_modules/(?!@angular)'],\n  transform: {\n    '^.+\\\\.(ts|js|mjs|html|svg)$': 'jest-preset-angular',\n  },\n};\n")))}c.isMDXComponent=!0}}]);