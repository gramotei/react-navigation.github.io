(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{356:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(9),o=(t(0),t(504)),i={id:"navigation-events",title:"NavigationEvents reference",sidebar_label:"NavigationEvents"},c={id:"version-2.x/navigation-events",isDocsHomePage:!1,title:"NavigationEvents reference",description:"NavigationEvents is a React component providing a declarative API to subscribe to navigation events. It will subscribe to navigation events on mount, and unsubscribe on unmount.",source:"@site/versioned_docs/version-2.x/navigation-events.md",permalink:"/docs/2.x/navigation-events",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-2.x/navigation-events.md",version:"2.x",sidebar_label:"NavigationEvents",sidebar:"version-2.x-api",previous:{title:"withNavigationFocus",permalink:"/docs/2.x/with-navigation-focus"},latestVersionMainDocPermalink:"/docs/getting-started"},l=[{value:"Component props",id:"component-props",children:[]},{value:"Example",id:"example",children:[]}],s={rightToc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"NavigationEvents")," is a React component providing a declarative API to subscribe to navigation events. It will subscribe to navigation events on mount, and unsubscribe on unmount."),Object(o.b)("h3",{id:"component-props"},"Component props"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"navigation")," - navigation props (optional, defaults to reading from React context)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onWillFocus")," - event listener"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onDidFocus")," - event listener"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onWillBlur")," - event listener"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"onDidBlur")," - event listener")),Object(o.b)("p",null,"The event listener is the same as the imperative ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"navigation-prop.html#addlistener-subscribe-to-updates-to-navigation-lifecycle"}),Object(o.b)("inlineCode",{parentName:"a"},"navigation.addListener(...)"))," API."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"harmony",harmony:!0}),"import React from 'react';\nimport { View } from 'react-native';\nimport { NavigationEvents } from 'react-navigation';\n\nconst MyScreen = () => (\n  <View>\n    <NavigationEvents\n      onWillFocus={payload => console.log('will focus',payload)}\n      onDidFocus={payload => console.log('did focus',payload)}\n      onWillBlur={payload => console.log('will blur',payload)}\n      onDidBlur={payload => console.log('did blur',payload)}\n    />\n    {/* \n      Your view code\n    */}\n  </View>\n);\n\nexport default MyScreen;\n")))}p.isMDXComponent=!0},504:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return v}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,v=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return t?a.a.createElement(v,c(c({ref:n},s),{},{components:t})):a.a.createElement(v,c({ref:n},s))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);