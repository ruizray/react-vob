/* eslint-disable import/no-anonymous-default-export */

import T from "@sanity/base/initial-value-template-builder";


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
		parameters: [ {name:"department" , type:"string"}],

		value: (params) => ({
			department: params.department,
			
		}),
	
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
