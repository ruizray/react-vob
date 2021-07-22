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
			description: "Provide a description of the link",
		},
		{
			name: "buttonText",
			title: "Button Text",
			description: "Text that will be displayed inside the button",
			type: "string",
		},
		{ name: "CTAlink", title: "Link", description: "Where the link will redirect to", type: "string" },
	],

	preview: {
		select: {
			buttonText:"buttonText",
			title: "title",
			media: "mainImage",
		},
		prepare(selection) {
			const { firstName, buttonText } = selection;
			return Object.assign({}, selection, {
				title: buttonText,
				subtitle: "Call-to-Action",
			});
		},
	},
};
