/* eslint-disable import/no-anonymous-default-export */
export default {
	name: "CTA",
	title: "Call-To-Action",
	type: "object",
	fields: [
		{
			name: "CTAbody",
			title: "Body Text",
			type: "string",
		},
		{
			name: "buttonText",
			title: "Button Text",
			description: "Text that will be displayed inside the button",
			type: "string",
		},
		{
			title: "Button Link",
			name: "buttonLink",
			type: "url",
			validation: (Rule) =>
				Rule.uri({
					scheme: ["http", "https", "mailto", "tel"],
				}),
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
