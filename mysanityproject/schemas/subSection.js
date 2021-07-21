/* eslint-disable import/no-anonymous-default-export */
export default {
	name: "subSection",
	title: "Sub Section",
	type: "object",
	fields: [
		{
			name: "subHeader",
			title: "Sub Header",
			type: "string",
		},
		{
			name: "subComponents",
			title: "Sub Section Components",
			type: "array",
			of: [
				{ type: "CTA" },
				{
					name: "subImage",
					title: "Image",
					type: "image",
					options: {
						hotspot: true,
					},
				},
				{
					name: "subSectionParagraph",
					title: "Paragraph",
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
