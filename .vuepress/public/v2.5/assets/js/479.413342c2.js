(window.webpackJsonp=window.webpackJsonp||[]).push([[479],{737:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("Transforms an "),s("a",{attrs:{href:"https://www.w3.org/XML/",target:"_blank",rel:"noopener noreferrer"}},[t._v("XML"),s("OutboundLink")],1),t._v(" input using an "),s("a",{attrs:{href:"https://www.w3.org/TR/xpath/#section-Expressions",target:"_blank",rel:"noopener noreferrer"}},[t._v("XPath"),s("OutboundLink")],1),t._v(" expression.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("Given a retrieved XML")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),s("p",[t._v("A simple xpath query to fetch the Azimut value does not work as it does not address the namespace.")]),t._v(" "),s("p",[t._v("There are two ways to address the namespace.")]),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("The XPath")]),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("returns")]),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),s("p",[t._v("Now the resulting Number can also be used in the label to "),s("a",{attrs:{href:"https://docs.openhab.org/configuration/sitemaps.html#label-and-value-colors",target:"_blank",rel:"noopener noreferrer"}},[t._v("change the color"),s("OutboundLink")],1),t._v(" or in a rule as value for comparison.")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),s("p",[t._v("Please note: This profile is a one-way transformation, i.e. only values from a device towards the item are changed, the other direction is left untouched.")]),t._v(" "),t._m(23),t._v(" "),s("ul",[s("li",[t._v("An "),s("a",{attrs:{href:"https://www.w3schools.com/xml/xpath_intro.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("introduction"),s("OutboundLink")],1),t._v(" to XPath at W3School")]),t._v(" "),s("li",[t._v("An informative explanation of "),s("a",{attrs:{href:"https://qxf2.com/blog/common-xpath-mistakes/",target:"_blank",rel:"noopener noreferrer"}},[t._v("common mistakes"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("li",[t._v("Online validation tools like "),s("a",{attrs:{href:"https://www.freeformatter.com/xpath-tester.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("this"),s("OutboundLink")],1),t._v(" to check the syntax.")])]),t._v(" "),s("DocPreviousVersions"),t._v(" "),s("EditPageLink")],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"xpath-transformation-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xpath-transformation-service","aria-hidden":"true"}},[this._v("#")]),this._v(" XPath Transformation Service")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"basic-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Basic Example")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("Input XML")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("PTZStatus")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2.0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("AbsoluteHigh")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("elevation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("elevation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("azimuth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("450"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("azimuth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("absoluteZoom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("10"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("absoluteZoom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("AbsoluteHigh")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("PTZStatus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("The XPath "),a("code",[this._v("/PTZStatus/AbsoluteHigh/azimuth/text()")]),this._v(" returns the document")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("450\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"advanced-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Advanced Example")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Given a retrieved XML (e.g. from an HIK Vision device with the namespace "),a("code",[this._v('xmlns="http://www.hikvision.com/ver20/XMLSchema"')]),this._v("):")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("Input XML")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("PTZStatus")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2.0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("xmlns")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.hikvision.com/ver20/XMLSchema"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("AbsoluteHigh")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("elevation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("elevation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("azimuth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("450"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("azimuth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("absoluteZoom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("10"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("absoluteZoom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("AbsoluteHigh")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("PTZStatus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("Simple path which may not work in complex XML.")]),this._v(" "),a("li",[this._v("With full qualified path.")]),this._v(" "),a("li")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("code",[this._v("[name()='PTZStatus']/*[name()='AbsoluteHigh']/*[name()='azimuth']/")])]),this._v(" "),a("li",[a("code",[this._v("/*[local-name()='PTZStatus' and namespace-uri()='http://www.hikvision.com/ver20/XMLSchema']/*[local-name()='AbsoluteHigh' and namespace-uri()='http://www.hikvision.com/ver20/XMLSchema']/*[local-name()='azimuth' and namespace-uri()='http://www.hikvision.com/ver20/XMLSchema']")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("<azimuth>450</azimuth>\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"in-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#in-setup","aria-hidden":"true"}},[this._v("#")]),this._v(" In Setup")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v(".items")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-csv extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Temperature_xml")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"Temperature [XPATH(/*[name()='PTZStatus']/*[name()='AbsoluteHigh']/*[name()='azimuth']/):%s °C]\"")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Temperature")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Temperature [%.1f °C]"')]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v(".rules")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rules"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Convert XML to Item Type Number"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" Temperature_xml "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("changed")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// use the transformation service to retrieve the value")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Simple")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" mytest "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"XPATH"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(' "'),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*[name()='PTZStatus']\n                                     /*[name()='AbsoluteHigh']\n                                     /*[name()='azimuth']\n                                     /text()\", \n                                    Temperature_xml.state.toString )  \n    // Fully qualified\n    val mytest = transform(\"XPATH\", \"/*[local-name()='PTZStatus'    and namespace-uri()='http://www.hikvision.com/ver20/XMLSchema']\n                                     /*[local-name()='AbsoluteHigh' and namespace-uri()='http://www.hikvision.com/ver20/XMLSchema']\n                                     /*[local-name()='azimuth'      and namespace-uri()='http://www.hikvision.com/ver20/XMLSchema']\n                                     /text()\",\n                                    Temperature_xml.state.toString )\n\n    // post the new value to the Number Item\n    Temperature.postUpdate( newValue )\nend\n")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"usage-as-a-profile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-as-a-profile","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage as a Profile")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("The functionality of this "),s("code",[t._v("TransformationService")]),t._v(" can be used in a "),s("code",[t._v("Profile")]),t._v(" on an "),s("code",[t._v("ItemChannelLink")]),t._v(" too.\nTo do so, it can be configured in the "),s("code",[t._v(".items")]),t._v(" file as follows:")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("itemName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<channelUID>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("profile"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"transform:XPATH"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" function"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<xpath>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sourceFormat"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<valueFormat>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("The XPath expression to be executed has to be set in the "),s("code",[t._v("function")]),t._v(" parameter.\nThe parameter "),s("code",[t._v("sourceFormat")]),t._v(" is optional and can be used to format the input value "),s("strong",[t._v("before")]),t._v(" the transformation, i.e. "),s("code",[t._v("%.3f")]),t._v(".\nIf omitted the default is "),s("code",[t._v("%s")]),t._v(", so the input value will be put into the transformation without any format changes.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"further-reading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-reading","aria-hidden":"true"}},[this._v("#")]),this._v(" Further Reading")])}],!1,null,null,null);a.default=n.exports}}]);