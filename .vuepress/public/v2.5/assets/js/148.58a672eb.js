(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{649:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("AddonLogo"),t._v(" "),a("p",[t._v("The Daikin binding allows you to control your Daikin air conditioning units with openHAB.\nIn order to do so, your Daikin air conditioning unit must have a BRP072A42 or BRP15B61 WiFi adapter installed.")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("Daikin air conditioning units with a BRP072A42 or BRP15B61 installed.\nThis may work with the older KRP series of wired adapters, but has not been tested with them.")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("This add-on will broadcast messages on your local network looking for Daikin air conditioning units and adding them to the queue of new items discovered.\nYou can also manually add a new item if you know the IP address.")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("The temperature channels have a precision of one half degree Celsius.\nFor the BRP072A42:")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("For the BRP15B61:")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("daikin.things:")]),t._v(" "),t._m(9),a("p",[t._v("daikin.items:")]),t._v(" "),t._m(10),a("p",[t._v("daikin.sitemap:")]),t._v(" "),t._m(11),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"daikin-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#daikin-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Daikin Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"supported-things"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"discovery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"thing-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("host - The hostname of the Daikin air conditioner. Typically you'd use an IP address such as "),s("code",[this._v("192.168.0.5")]),this._v(" for this field.")]),this._v(" "),s("li",[this._v("refresh - The frequency with which to refresh information from the Daikin air conditioner specified in seconds. Defaults to 60 seconds.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"channels"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Channel Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("power")]),t._v(" "),a("td",[t._v("Turns the power on/off for the air conditioning unit.")])]),t._v(" "),a("tr",[a("td",[t._v("settemp")]),t._v(" "),a("td",[t._v("The temperature set for the air conditioning unit.")])]),t._v(" "),a("tr",[a("td",[t._v("indoortemp")]),t._v(" "),a("td",[t._v("The indoor temperature as measured by the unit.")])]),t._v(" "),a("tr",[a("td",[t._v("outdoortemp")]),t._v(" "),a("td",[t._v("The outdoor temperature as measured by the external part of the air conditioning system. May not be available when unit is off.")])]),t._v(" "),a("tr",[a("td",[t._v("humidity")]),t._v(" "),a("td",[t._v("The indoor humidity as measured by the unit. This is not available on all units.")])]),t._v(" "),a("tr",[a("td",[t._v("mode")]),t._v(" "),a("td",[t._v("The mode set for the unit (AUTO, DEHUMIDIFIER, COLD, HEAT, FAN)")])]),t._v(" "),a("tr",[a("td",[t._v("fanspeed")]),t._v(" "),a("td",[t._v("The fan speed set for the unit (AUTO, SILENCE, LEVEL_1, LEVEL_2, LEVEL_3, LEVEL_4, LEVEL_5)")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Channel Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("power")]),t._v(" "),a("td",[t._v("Turns the power on/off for the air conditioning unit.")])]),t._v(" "),a("tr",[a("td",[t._v("settemp")]),t._v(" "),a("td",[t._v("The temperature set for the air conditioning unit.")])]),t._v(" "),a("tr",[a("td",[t._v("indoortemp")]),t._v(" "),a("td",[t._v("The indoor temperature as measured by the unit.")])]),t._v(" "),a("tr",[a("td",[t._v("outdoortemp")]),t._v(" "),a("td",[t._v("The outdoor temperature as measured by the external part of the air conditioning system. May not be available when unit is off.")])]),t._v(" "),a("tr",[a("td",[t._v("mode")]),t._v(" "),a("td",[t._v("The mode set for the unit (AUTO, DEHUMIDIFIER, COLD, HEAT, FAN)")])]),t._v(" "),a("tr",[a("td",[t._v("airbasefanspeed")]),t._v(" "),a("td",[t._v("The fan speed set for the unit (AUTO, LEVEL_1, LEVEL_2, LEVEL_3)")])]),t._v(" "),a("tr",[a("td",[t._v("zone1")]),t._v(" "),a("td",[t._v("Turns zone 1 on/off for the air conditioning unit (if a zoned controller is installed.")])]),t._v(" "),a("tr",[a("td",[t._v("zone2")]),t._v(" "),a("td",[t._v("Turns zone 2 on/off for the air conditioning unit.")])]),t._v(" "),a("tr",[a("td",[t._v("zone3")]),t._v(" "),a("td",[t._v("Turns zone 3 on/off for the air conditioning unit.")])]),t._v(" "),a("tr",[a("td",[t._v("zone4")]),t._v(" "),a("td",[t._v("Turns zone 4 on/off for the air conditioning unit.")])]),t._v(" "),a("tr",[a("td",[t._v("zone5")]),t._v(" "),a("td",[t._v("Turns zone 5 on/off for the air conditioning unit.")])]),t._v(" "),a("tr",[a("td",[t._v("zone6")]),t._v(" "),a("td",[t._v("Turns zone 6 on/off for the air conditioning unit.")])]),t._v(" "),a("tr",[a("td",[t._v("zone7")]),t._v(" "),a("td",[t._v("Turns zone 7 on/off for the air conditioning unit.")])]),t._v(" "),a("tr",[a("td",[t._v("zone8")]),t._v(" "),a("td",[t._v("Turns zone 8 on/off for the air conditioning unit.")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"full-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('daikin:ac_unit:living_room_ac [ host="192.168.0.5" ]\ndaikin:airbase_ac_unit:living_room_ac [ host="192.168.0.5" ]\n')])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DaikinACUnit_Power")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"daikin:ac_unit:living_room_ac:power"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Temperature")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DaikinACUnit_SetPoint")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"daikin:ac_unit:living_room_ac:setpoint"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DaikinACUnit_Mode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"daikin:ac_unit:living_room_ac:mode"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DaikinACUnit_Fan")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"daikin:ac_unit:living_room_ac:fanspeed"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Temperature")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DaikinACUnit_IndoorTemperature")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"daikin:ac_unit:living_room_ac:indoortemp"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Temperature")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DaikinACUnit_OutdoorTemperature")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"daikin:ac_unit:living_room_ac:outdoortemp"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n# Additional items "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("for")]),t._v(" BRP1B61\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DaikinACUnit_Zone1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"daikin:airbase_ac_unit:living_room_ac:zone1"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DaikinACUnit_Zone2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"daikin:airbase_ac_unit:living_room_ac:zone2"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DaikinACUnit_Zone3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"daikin:airbase_ac_unit:living_room_ac:zone3"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DaikinACUnit_Zone4")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"daikin:airbase_ac_unit:living_room_ac:zone4"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DaikinACUnit_Zone5")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"daikin:airbase_ac_unit:living_room_ac:zone5"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DaikinACUnit_Zone6")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"daikin:airbase_ac_unit:living_room_ac:zone6"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DaikinACUnit_Zone7")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"daikin:airbase_ac_unit:living_room_ac:zone7"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DaikinACUnit_Zone8")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"daikin:airbase_ac_unit:living_room_ac:zone8"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("DaikinACUnit_Power\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Setpoint")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("DaikinACUnit_SetPoint "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("visibility")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DaikinACUnit_Power"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("ON"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Selection")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("DaikinACUnit_Mode "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("mappings")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AUTO"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Auto"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DEHUMIDIFIER"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Dehumidifier"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"COLD"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Cold"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HEAT"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Heat"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FAN"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Fan"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("visibility")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DaikinACUnit_Power"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("ON"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Selection")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("DaikinACUnit_Fan "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("mappings")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AUTO"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Auto"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SILENCE"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Silence"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LEVEL_1"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Level 1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LEVEL_2"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Level 2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LEVEL_3"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Level 3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LEVEL_4"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Level 4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LEVEL_5"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Level 5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("visibility")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DaikinACUnit_Power"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("ON"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("DaikinACUnit_IndoorTemperature\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("DaikinACUnit_OutdoorTemperature\n# Additional items "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("for")]),t._v(" BRP15B61\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("DaikinACUnit_Zone1 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("visibility")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DaikinACUnit_Power"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("ON"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("DaikinACUnit_Zone2 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("visibility")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DaikinACUnit_Power"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("ON"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("DaikinACUnit_Zone3 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("visibility")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DaikinACUnit_Power"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("ON"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("DaikinACUnit_Zone4 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("visibility")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DaikinACUnit_Power"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("ON"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("DaikinACUnit_Zone5 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("visibility")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DaikinACUnit_Power"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("ON"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("DaikinACUnit_Zone6 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("visibility")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DaikinACUnit_Power"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("ON"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("DaikinACUnit_Zone7 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("visibility")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DaikinACUnit_Power"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("ON"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("DaikinACUnit_Zone8 "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("visibility")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("DaikinACUnit_Power"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("ON"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])])}],!1,null,null,null);s.default=e.exports}}]);