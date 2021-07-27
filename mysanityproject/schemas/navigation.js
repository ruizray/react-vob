/* eslint-disable import/no-anonymous-default-export */
export default {
	name: "navigation",
	title: "Navigation",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			type: "reference",
			name: "target",
			title: "Landing Page",
			to: [{ type: "landingPage" }],
			// _weak: true // enable if you don't want reference integrity checks
		},
		{
			type: "array",
			name: "sections",
			title: "Sections",
			editModal: "fullscreen",
			of: [{ type: "navigation.section" }],
		},
	],
};
