/* eslint-disable import/no-anonymous-default-export */

import T from "@sanity/base/initial-value-template-builder";
import { string } from "prop-types";

export default [
	...T.defaults(),

	T.template({
		id: "policeEmployee",
		title: "Police Employee",
		schemaType: "employee",
		value: {
			department: "Police",
		},
	}),

	T.template({
		id: "fireEmployee",
		title: "Fire Employee",
		schemaType: "employee",

		value: {
			department: "Fire",
		},
	}),

	T.template({
		id: "governmentTemplate",
		title: "Government Type",
		schemaType: "page",
		parameters: [{ name: "child", type: "string" }, {name:"path" , type:"string"}],

		value: (params) => ({
			path: params.path,
			
		}),
	}),
];
