/* eslint-disable import/no-anonymous-default-export */
export default {
	name: "navigation.link",
	type: "object",
	title: "Link",
	preview: {
		select: {
			title: "title",
			targetTitle: "target.title",
		},
		prepare: ({ title, targetTitle }) => ({
			title: title || targetTitle,
		}),
	},
	fields: [
		{
			type: "reference",
			name: "target",
			title: "Landing Page",
			to: [{ type: "page" }, {type:"landingPage"}],
			description: "No target page turns the item into a subheading.",
			// _weak: true // enable if you don't want reference integrity checks
		},
        {
			type: "string",
			name: "name",
			title: "Name",
			description: "Override title from the target page.",
		},
		{
			type: "string",
			name: "title",
			title: "Title",
			description: "Override title from the target page.",
		},
		{
			type: "array",
			name: "children",
			title: "Children",
            editModal: "fullscreen",
			of: [{ type: "navigation.link" }],
		},
	],
};