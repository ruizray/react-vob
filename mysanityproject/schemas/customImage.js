/* eslint-disable import/no-anonymous-default-export */
export default {
	name: "customImage",
	title: "Image",
	type: "object",
	fields: [
		{
			name: "altText",
			title: "Alt Text",

			type: "string",
		},
		{
			title: "Image Url",
			name: "imageURL",
			type: "url",
			validation: (Rule) =>
				Rule.uri({
					scheme: ["http", "https", "mailto", "tel"],
				}),
		},
		{
			name: "styleAttributes",
			title: "Style Attributes",
			type: "array",
			of: [
				{
					type: "object",
					name: "style",
					title: "Style",
					fields: [
						{
							name: "attribute",
							title: "Attribute",

							type: "string",
						},
                        {
							name: "value",
							title: "Value",
							type: "string",
						},
					],
				},
			],
		},
	],

	preview: {
		select: {
			title: "buttonText",
			media: "mainImage",
		},
		prepare(selection) {
			const { title } = selection;
			return Object.assign({}, selection, {
				title: `${title}`,
				subtitle: "Call-to-Action",
			});
		},
	},
};
