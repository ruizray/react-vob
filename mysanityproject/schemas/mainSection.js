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
					title: "Image",
					type: "image",
					options: {
						hotspot: true,
					},
				},
				{
					name: "mainSectionParagraph",
					title: "Paragraph",
					type: "paragraph",
				},
			],
		},

	],

	preview: {
		select: {
			title: "header",
			author: "author.name",
			media: "mainImage",
			type:"type",
			test: "mainComponent"
		},
		prepare(selection) {
			const { title, media } = selection;
			return Object.assign({}, selection, {
				title: title,
				media: media,
			});
		},
	},
};
