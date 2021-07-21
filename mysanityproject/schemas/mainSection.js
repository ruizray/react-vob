/* eslint-disable import/no-anonymous-default-export */
export default {
	name: "mainSection",
	title: "Main Section",
	type: "object",
	fields: [
		{
			name: "header",
			title: "Header",
			type: "string",
		},
		{
			name: "mainComponent",
			title: "Main Component",
			type: "array",
			of: [
				{ type: "subSection" },
				{ type: "CTA" },
				{
					name: "mainImage",
					title: "Main image",
					type: "image",
					options: {
						hotspot: true,
					},
				},
				{
					name: "mainSectionParagraph",
					title: "Main Section Paragraph",
					type: "paragraph",
				},
			],
		},

	],

	preview: {
		select: {
			title: "title",
			author: "author.name",
			media: "mainImage",
		},
		prepare(selection) {
			const { author } = selection;
			return Object.assign({}, selection, {
				subtitle: author && `by ${author}`,
			});
		},
	},
};
