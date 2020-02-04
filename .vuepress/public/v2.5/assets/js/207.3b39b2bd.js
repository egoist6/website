(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{744:function(t,e,r){"use strict";r.r(e);var n=r(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("p",[r("a",{attrs:{href:"http://www.hdanywhere.co.uk",target:"_blank",rel:"noopener noreferrer"}},[t._v("HDanywhere"),r("OutboundLink")],1),t._v(" is a manufacturer of multiroom/distributed audio/video equipment. This binding supports their V3 of the Multiroom+ HDMI matrix running firmware V1.2(20131222). These matrices support the highest HD resolutions, including 1080p 3D & 4K, use a single Cat5e/6/7 wiring structure with reliable performance up to 100m, have IR passback to allow you to select and control what you watch from every room and are fully compatible with universal remote controls.")]),t._v(" "),r("p",[t._v("The matrixes can be controlled by either UDP/IP and/or Serial connections, but due to the lack of feedback on the actual state of the HDMI matrix when using those methods, this binding operates by controlling the built-in webserver of the matrix.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),r("p",[t._v("A binding configuration with multiple configuration parts would typically be used to control multiple output ports at the same time, e.g. have the switch together to the same HDMI source port.")]),t._v(" "),r("p",[t._v("Furthermore, in openhab.cfg the")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),r("p",[t._v("The format of the binding configuration is simple and looks like this:")]),t._v(" "),t._m(5),r("p",[t._v("Where:")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),r("p",[t._v("The HDanywhere matrix is very simple device. Since it is all about assigning a source HDMI port to an output port only Number Items are used/allowed to control the matrix. You feed it the source port number you want it to be connected to,e.g. updating the Item with a value of 2 will switch the defined output port to source port #2")]),t._v(" "),t._m(8),t._v(" "),r("p",[t._v("Here are a few examples of valid binding configuration strings, as defined in the items configuration file:")]),t._v(" "),t._m(9),r("DocPreviousVersions"),t._v(" "),r("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"hdanywhere-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hdanywhere-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" HDanywhere Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This binding can be configured in the file "),e("code",[this._v("services/hdanywhere.cfg")]),this._v(".")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("Property")]),t._v(" "),r("th",[t._v("Default")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("ports")]),t._v(" "),r("td",[t._v("4")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),r("td",[t._v("number of input ports/output ports if different from 4 (e.g. 8 for the 8x8 matrix)")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"item-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('hdanywhere="[<IP address>:<port number>:<polling interval>], [<IP address>:<port number>:<polling interval>], ..."\n')])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("code",[t._v("<IP address>")]),t._v(" corresponds with the IP address of the HDMI matrix")]),t._v(" "),r("li",[r("code",[t._v("<port number>")]),t._v(" corresponds with the output port number on the matrix")]),t._v(" "),r("li",[r("code",[t._v("<polling Interval>")]),t._v(" is the interval in seconds to poll state of the given port")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"hdanywhere-items"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hdanywhere-items","aria-hidden":"true"}},[this._v("#")]),this._v(" HDanywhere Items")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-dsl"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OutputPort1")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Output port 1 is currently connected to Source port [%d]"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" hdanywhere"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[192.168.0.88:1:15]"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OutputPorts1And2")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Output ports 1 and 2 are currently connected to Source port [%d]"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" hdanywhere"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[192.168.0.88:1:15],[192.168.0.88:2:15]"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.default=a.exports}}]);