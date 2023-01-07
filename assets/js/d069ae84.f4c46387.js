"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2367],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=p(n),d=a,c=g["".concat(l,".").concat(d)]||g[d]||m[d]||s;return n?r.createElement(c,o(o({ref:t},u),{},{components:n})):r.createElement(c,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4060:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var r=n(7462),a=n(3366),s=(n(7294),n(4137)),o=["components"],i={id:"angular-13+",title:"Angular >=13"},l=void 0,p={unversionedId:"guides/angular-13+",id:"version-11.0/guides/angular-13+",title:"Angular >=13",description:"Angular 13 introduces ESM package format for Angular packages. jest-preset-angular",source:"@site/versioned_docs/version-11.0/guides/angular-13+.md",sourceDirName:"guides",slug:"/guides/angular-13+",permalink:"/jest-preset-angular/docs/11.0/guides/angular-13+",draft:!1,editUrl:"https://github.com/thymikee/jest-preset-angular/edit/main/website/versioned_docs/version-11.0/guides/angular-13+.md",tags:[],version:"11.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1673115776,formattedLastUpdatedAt:"Jan 7, 2023",frontMatter:{id:"angular-13+",title:"Angular >=13"},sidebar:"version-11.0-docs",previous:{title:"Angular Ivy",permalink:"/jest-preset-angular/docs/11.0/guides/angular-ivy"},next:{title:"ESM Support",permalink:"/jest-preset-angular/docs/11.0/guides/esm-support"}},u={},m=[{value:"Migration steps from Angular &lt; 13",id:"migration-steps-from-angular--13",level:2},{value:"Using ES Modules",id:"using-es-modules",level:3},{value:"Potential issues with Angular 13 ESM package format and workaround",id:"potential-issues-with-angular-13-esm-package-format-and-workaround",level:2},{value:"<code>Cannot find modules</code> error when importing any deep paths from Angular ESM format packages",id:"cannot-find-modules-error-when-importing-any-deep-paths-from-angular-esm-format-packages",level:3},{value:"Usage with Angular libraries which are built with Angular CLI 13",id:"usage-with-angular-libraries-which-are-built-with-angular-cli-13",level:3}],g={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Angular 13")," introduces ESM package format for Angular packages. ",(0,s.kt)("inlineCode",{parentName:"p"},"jest-preset-angular"),"\ncurrently supports testing with Jest in ",(0,s.kt)("inlineCode",{parentName:"p"},"CommonJS")," mode with ",(0,s.kt)("strong",{parentName:"p"},"Angular 13")," using ",(0,s.kt)("a",{parentName:"p",href:"/jest-preset-angular/docs/11.0/getting-started/presets"},"default preset"),".\nJest ESM support with ",(0,s.kt)("strong",{parentName:"p"},"Angular 13")," is new and may have issues."),(0,s.kt)("p",null,"Starting from ",(0,s.kt)("strong",{parentName:"p"},"v11.0.0"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"jest-preset-angular")," introduces a few extra changes to be able to run Jest with ",(0,s.kt)("strong",{parentName:"p"},"Angular 13"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"ng-jest-resolver")," is introduced as a custom Jest resolver to resolve ",(0,s.kt)("inlineCode",{parentName:"p"},".mjs")," files.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"moduleFileExtensions")," is updated to include ",(0,s.kt)("inlineCode",{parentName:"p"},"mjs")," files as accepted module format.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"transformIgnorePatterns")," is added to inform Jest to transform ",(0,s.kt)("inlineCode",{parentName:"p"},".mjs")," files.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"transform")," is updated to include ",(0,s.kt)("inlineCode",{parentName:"p"},".mjs")," extension to transform to ",(0,s.kt)("inlineCode",{parentName:"p"},"CommonJS")," codes."))),(0,s.kt)("h2",{id:"migration-steps-from-angular--13"},"Migration steps from Angular < 13"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Upgrade the project to ",(0,s.kt)("strong",{parentName:"p"},"Angular 13")," following ",(0,s.kt)("a",{parentName:"p",href:"https://update.angular.io/"},"https://update.angular.io/"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"If one is using the default preset as following:"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  preset: 'jest-preset-angular',\n};\n")),(0,s.kt)("p",null,"there are no migration steps required"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If one is ",(0,s.kt)("strong",{parentName:"li"},"NOT")," having ",(0,s.kt)("inlineCode",{parentName:"li"},"preset: 'jest-preset-angular'")," in Jest config, the config needs to be updated with new values for\n",(0,s.kt)("inlineCode",{parentName:"li"},"resolver"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"transformIgnorePatterns")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"transform"),":")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // ...other options\n  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],\n  resolver: 'jest-preset-angular/build/resolvers/ng-jest-resolver.js',\n  transformIgnorePatterns: ['node_modules/(?!.*\\\\.mjs$)'],\n  transform: {\n    '^.+\\\\.(ts|js|mjs|html|svg)$': 'jest-preset-angular',\n  },\n};\n")),(0,s.kt)("h3",{id:"using-es-modules"},"Using ES Modules"),(0,s.kt)("p",null,"ES Modules support is new and may encounter issues. See ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/thymikee/jest-preset-angular/tree/main/examples/example-app-v13"},"example-app-v13")," for an example with tests that run using ESM, and using ESM + isolated."),(0,s.kt)("p",null,"Your ",(0,s.kt)("inlineCode",{parentName:"p"},"jest.config.js")," should be changed to something like:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { pathsToModuleNameMapper } = require('ts-jest/utils');\nconst { paths } = require('./tsconfig.json').compilerOptions;\n\n/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */\nmodule.exports = {\n  preset: 'jest-preset-angular/presets/defaults-esm',\n  globals: {\n    'ts-jest': {\n      useESM: true,\n      stringifyContentPathRegex: '\\\\.(html|svg)$',\n      tsconfig: '<rootDir>/tsconfig-esm.spec.json',\n    },\n  },\n  moduleNameMapper: {\n    ...pathsToModuleNameMapper(paths, { prefix: '<rootDir>' }),\n    tslib: 'tslib/tslib.es6.js',\n  },\n  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],\n};\n")),(0,s.kt)("p",null,"Before upgrading to ng13 and switching to ES Modules, your ",(0,s.kt)("inlineCode",{parentName:"p"},"setup-jest.ts")," file most likely uses the preset ",(0,s.kt)("inlineCode",{parentName:"p"},"setup-jest"),", like the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// setup-jest.ts\nimport 'jest-preset-angular/setup-jest';\nimport './jest-global-mocks';\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"jest-preset-angular/setup-jest")," file doesn't work with ESM, because it uses ",(0,s.kt)("inlineCode",{parentName:"p"},"require"),". For now you should skip using this file, and replace the contents of your ",(0,s.kt)("inlineCode",{parentName:"p"},"setup-jest.ts")," with:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// setup-jest.ts\nimport 'zone.js/fesm2015/zone-testing-bundle.min.js';\nimport './jest-global-mocks';\n\nimport { getTestBed } from '@angular/core/testing';\nimport { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';\n\ngetTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());\n")),(0,s.kt)("h2",{id:"potential-issues-with-angular-13-esm-package-format-and-workaround"},"Potential issues with Angular 13 ESM package format and workaround"),(0,s.kt)("h3",{id:"cannot-find-modules-error-when-importing-any-deep-paths-from-angular-esm-format-packages"},(0,s.kt)("inlineCode",{parentName:"h3"},"Cannot find modules")," error when importing any deep paths from Angular ESM format packages"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Angular 13 ESM package format makes Jest resolution not able to resolve the correct ",(0,s.kt)("inlineCode",{parentName:"li"},".mjs")," files. Even though we introduced\n",(0,s.kt)("inlineCode",{parentName:"li"},"ng-jest-resolver")," as a part of the preset, this resolver won't work for all scenarios. One might get Jest error like")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Cannot find module '@angular/common/locales/xx' from 'src/app/app.component.spec.ts'\n")),(0,s.kt)("p",null,"To fix this issue, one needs to add ",(0,s.kt)("inlineCode",{parentName:"p"},"mjs")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"moduleFileExtensions")," as following"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // ...other options\n  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],\n};\n")),(0,s.kt)("p",null,"If the issue still ",(0,s.kt)("strong",{parentName:"p"},"persists"),", you might need to configure ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/configuration#modulenamemapper-objectstring-string--arraystring"},"moduleNameMapper"),"\nor extend the behavior the default ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/thymikee/jest-preset-angular/blob/main/src/resolvers/ng-jest-resolver.ts"},"resolver")," of this preset."),(0,s.kt)("h3",{id:"usage-with-angular-libraries-which-are-built-with-angular-cli-13"},"Usage with Angular libraries which are built with Angular CLI 13"),(0,s.kt)("p",null,"Besides, the changes in Angular packages themselves, ",(0,s.kt)("strong",{parentName:"p"},"Angular")," libraries which are built with ",(0,s.kt)("strong",{parentName:"p"},"Angular CLI 13")," also introduce\nESM package format. Similar to Angular packages, Jest doesn't understand ",(0,s.kt)("inlineCode",{parentName:"p"},".mjs")," files which are in these new format\nlibraries in Jest ",(0,s.kt)("strong",{parentName:"p"},"CommonJS")," mode."),(0,s.kt)("p",null,"To fix this issue, one should modify ",(0,s.kt)("inlineCode",{parentName:"p"},"transformIgnorePatterns")," to be as following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // ...other options\n  transformIgnorePatterns: ['node_modules/(?!.*\\\\.mjs$)'],\n};\n")))}d.isMDXComponent=!0}}]);