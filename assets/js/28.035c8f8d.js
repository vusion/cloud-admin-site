(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{232:function(s,t,a){"use strict";a.r(t);var e=a(4),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#样式","aria-hidden":"true"}},[s._v("#")]),s._v(" 样式")]),s._v(" "),a("h2",{attrs:{id:"css-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-modules","aria-hidden":"true"}},[s._v("#")]),s._v(" CSS Modules")]),s._v(" "),a("p",[s._v("在样式开发过程中，有两个问题比较突出：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("全局污染 —— "),a("code",[s._v("CSS")]),s._v(" 文件中的选择器是全局生效的，不同文件中的同名选择器，根据 "),a("code",[s._v("build")]),s._v(" 后生成文件中的先后顺序，后面的样式会将前面的覆盖；")])]),s._v(" "),a("li",[a("p",[s._v("选择器复杂 —— 为了避免上面的问题，我们在编写样式的时候不得不小心翼翼，类名里会带上限制范围的标示，变得越来越长，多人开发时还很容易导致命名风格混乱，一个元素上使用的选择器个数也可能越来越多，最终导致难以维护。")])])]),s._v(" "),a("p",[s._v("同时为了解决上述问题，社区也提出了很多方案。在这里采用的是 "),a("a",{attrs:{href:"https://github.com/css-modules/css-modules",target:"_blank",rel:"noopener noreferrer"}},[s._v("CSS Modules"),a("OutboundLink")],1),s._v(" 和 "),a("a",{attrs:{href:"https://github.com/postcss/postcss",target:"_blank",rel:"noopener noreferrer"}},[s._v("PostCss"),a("OutboundLink")],1),s._v(" 配合方案。")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 编译前 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 编译后 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item_2qBngsv9")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("只要加上 "),a("code",[s._v("<style module>")]),s._v(" 这样 "),a("code",[s._v("css")]),s._v(" 就只会作用在当前组件内了。在使用的时候，引用方式 "),a("code",[s._v(':class="$style.side"')]),s._v(" 或 "),a("code",[s._v(':class="[$style.side"]')])]),s._v(" "),a("h2",{attrs:{id:"更改浏览器默认样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更改浏览器默认样式","aria-hidden":"true"}},[s._v("#")]),s._v(" 更改浏览器默认样式")]),s._v(" "),a("p",[s._v("很多时候，我们需要重置浏览器样式，需要在所有 "),a("code",[s._v("css")]),s._v(" 脚本之前引入。通过在 "),a("code",[s._v("vusion.config.js")]),s._v(" 定义 "),a("code",[s._v('baseCSSPath: "src/global/styles/index.css"')]),s._v("，再修改相关 "),a("code",[s._v("css")]),s._v(" 配置， 即可重置浏览器样式。")]),s._v(" "),a("h2",{attrs:{id:"更改组件库主题样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更改组件库主题样式","aria-hidden":"true"}},[s._v("#")]),s._v(" 更改组件库主题样式")]),s._v(" "),a("p",[s._v("通过在 "),a("code",[s._v("vusion.config.js")]),s._v(" 定义 "),a("code",[s._v('globalCSSPath: "src/global/styles/theme.css"')]),s._v("，再修改相关变量配置，即可更改组件库主题样式。")]),s._v(" "),a("h2",{attrs:{id:"修改组件库的样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改组件库的样式","aria-hidden":"true"}},[s._v("#")]),s._v(" 修改组件库的样式")]),s._v(" "),a("p",[s._v("由于组件库也是采用 "),a("code",[s._v("Css Modules")]),s._v(" 的方案，故一般情况下较难修改组件库的样式，这里采用了一种较为繁琐的方案。在 "),a("code",[s._v("src/global/components/cloud-ui")]),s._v(" 中，创建相关文件，在 "),a("code",[s._v("cloud-ui")]),s._v(" 组件库引入后，再引入此组件。")]),s._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" IIcon "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cloud-ui.vusion'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'i-icon'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" IIcon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("style")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cloud-ui.vusion/src/components/i-icon.vue/module.css'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v('.root[name="notice"]:before')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" inherit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("vertical-align")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" middle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("icon-font")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("./assets/notice.svg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])])]),a("h2",{attrs:{id:"业务全局-css-变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#业务全局-css-变量","aria-hidden":"true"}},[s._v("#")]),s._v(" 业务全局 CSS 变量")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("src/global/styles/theme.css")]),s._v(" 此文件定义即可。会随着 "),a("code",[s._v("globalCSSPath")]),s._v(" 一起注入到每个 css 文件中。")]),s._v(" "),a("h2",{attrs:{id:"browserslist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#browserslist","aria-hidden":"true"}},[s._v("#")]),s._v(" browserslist")]),s._v(" "),a("p",[s._v("通过配置 "),a("code",[s._v(".browserslistrc")]),s._v("，可以设置项目的浏览器兼容")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("> 1%\nlast 2 versions\nie >= 10\n")])])]),a("ul",[a("li",[s._v("> 1% 兼容全球使用率大于 1%的浏览器")]),s._v(" "),a("li",[s._v("last 2 versions 兼容每个浏览器的最近两个版本")]),s._v(" "),a("li",[s._v("ie >= 10 兼容 ie10 及以上")])]),s._v(" "),a("p",[s._v("具体可见 "),a("a",{attrs:{href:"https://github.com/browserslist/browserslist",target:"_blank",rel:"noopener noreferrer"}},[s._v("browserslist"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);