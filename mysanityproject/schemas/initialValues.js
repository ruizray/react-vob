/* eslint-disable import/no-anonymous-default-export */

import T from "@sanity/base/initial-value-template-builder";

export default [
	...T.defaults(),

	T.template({
		id: "policeEmployee",
		title: "Police Employee",
		schemaType: "employee",
		
		value: {
			department:"Police"
		}
	}),

	T.template({
		id: "fireEmployee",
		title: "Fire Employee",
		schemaType: "employee",
		
		value: {
			department:"Fire"
		}
	}),
];
