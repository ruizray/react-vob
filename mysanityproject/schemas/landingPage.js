/* eslint-disable import/no-anonymous-default-export */
export default {
	name: "landingPage",
	title: "Landing Page",
	type: "document",
	fields: [
		{
			name: "header",
			title: "Title",
			type: "string",
		},
        {
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "header",
				maxLength: 96,
				slugify: (input) => input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
			},
		},
		{
			name: "linkCards",
			title: "Link Cards",
			type: "array",
			of: [
				{ type: "linkCard" },
				
			],
		},

	],

	preview: {
		select: {
			title: "header",
			
		},
		prepare(selection) {
			const { title } = selection;
			return Object.assign({}, selection, {
				title: title,
			
			});
		},
	},
};
