(self.webpackChunkpersonal_blog=self.webpackChunkpersonal_blog||[]).push([[688],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,r){var n=r(9489),o=r(7067);function a(t,r,u){return o()?(e.exports=a=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.default=e.exports,e.exports.__esModule=!0),a.apply(null,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),u=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||u()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},6960:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(7294),o=r(977),a=r(4123),u=r(1274),s=r(1470),c=r(5719),l=r(7425),p=function(e){e.post;return null},i=["32px","16px","8px","4px"].map((function(e){return"rgba(0, 0, 0, 0.15) 0px "+e+" "+e+" 0px"})),f=function(e){var t,r,f,d=e.data.post;return(0,o.tZ)(s.Z,null,(0,o.tZ)(l.Z,{title:d.title,description:d.description?d.description:d.excerpt,image:d.banner?null===(t=d.banner)||void 0===t||null===(r=t.childImageSharp)||void 0===r||null===(f=r.resize)||void 0===f?void 0:f.src:void 0,pathname:d.slug,canonicalUrl:d.canonicalUrl}),(0,o.tZ)(a.X6,{as:"h1",variant:"styles.h1"},d.title),(0,o.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,o.tZ)("time",null,d.date),d.tags&&(0,o.tZ)(n.Fragment,null," — ",(0,o.tZ)(c.Z,{tags:d.tags})),d.timeToRead&&" — ",d.timeToRead&&(0,o.tZ)("span",null,d.timeToRead," min read")),(0,o.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],boxShadow:i.join(", ")},variant:"layout.content"}},(0,o.tZ)(u.MDXRenderer,null,d.body)),(0,o.tZ)(p,{post:d}))};var d=function(e){var t=Object.assign({},e);return n.createElement(f,t)}},5719:function(e,t,r){"use strict";var n=r(7294),o=r(4123),a=r(5444),u=r(6795),s=r(7229);t.Z=function(e){var t=e.tags,r=(0,u.Z)(),c=r.tagsPath,l=r.basePath;return n.createElement(n.Fragment,null,t.map((function(e,t){return n.createElement(n.Fragment,{key:e.slug},!!t&&", ",n.createElement(o.rU,{as:a.Link,to:(0,s.Z)("/"+l+"/"+c+"/"+e.slug)},e.name))})))}},1274:function(e,t,r){var n=r(1048);e.exports={MDXRenderer:n}},1048:function(e,t,r){var n=r(9100),o=r(319),a=r(9713),u=r(7316),s=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=r(7294),i=r(4983).mdx,f=r(3191).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=u(e,s),c=f(t),d=p.useMemo((function(){if(!r)return null;var e=l({React:p,mdx:i},c),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return p.createElement(d,l({},a))}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-a04719863dcc09e8901c.js.map