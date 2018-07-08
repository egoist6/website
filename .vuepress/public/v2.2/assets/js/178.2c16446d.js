(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{416:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),e("p",[t._v("This is a binding for probably one of the simplest devices possible: A simple push button which short-cuts two pins on a serial port.")]),t._m(1),t._m(2),t._m(3),t._m(4),e("p",[t._v("The use case is simple: Connect any push button to pins 2 and 7 of an RS-232 interface as short-cutting those will signal that data is available.\nUsing the default toggle profile, this means that you can use this channel to toggle any Switch item through the button.")]),t._m(5),e("p",[t._v("demo.things:")]),t._m(6),e("p",[t._v("demo.items:")]),t._m(7),t._m(8),t._m(9),e("p",[t._v("demo.sitemap:")]),t._m(10),e("DocPreviousVersions"),e("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"serial-button-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serial-button-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Serial Button Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"supported-things"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The binding defines a single thing type called "),s("code",[this._v("button")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("A button requires the single configuration parameter "),s("code",[this._v("port")]),this._v(", which specifies the serial port that should be used.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("The only available channel is a "),e("code",[t._v("SYSTEM_RAWBUTTON")]),t._v(" channel called "),e("code",[t._v("button")]),t._v(", which emits "),e("code",[t._v("PRESSED")]),t._v(" events (no "),e("code",[t._v("RELEASED")]),t._v(" events though) whenever data is available on the serial port (which will be read and discarded).")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"full-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('serialbutton:button:mybutton "My Button" [ port="/dev/ttyS0" ]\n')])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("MyLight")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"serialbutton:button:mybutton:button"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("Note:")]),this._v(" This is a trigger channel, so you will most likely bind a second (state) channel to your item, which will control your physical light, so you might end up with the following, if you want to use your button with a Hue bulb:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("MyLight")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"hue:0210:1:bulb1:color,serialbutton:button:mybutton:button"')]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("sitemap")]),t._v(" demo "),e("span",{attrs:{class:"token constant"}},[t._v("label")]),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"Main Menu"')]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("Frame")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("item")]),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("MyLight "),e("span",{attrs:{class:"token constant"}},[t._v("label")]),e("span",{attrs:{class:"token operator"}},[t._v("=")]),e("span",{attrs:{class:"token string"}},[t._v('"My Light"')]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=n.exports}}]);