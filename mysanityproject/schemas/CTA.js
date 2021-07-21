/* eslint-disable import/no-anonymous-default-export */
export default  {
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
			description:"Text that will be displayed inside the button",
			type: "string",
		},
		{ name: "title", title: "Title", type: "string" },
		{
			name: "email",
			title: "Email",
			type: "string",
		},
		{
			title: "Facebook",
			name: "facebook",
			type: "string",
		},
		{
			name: "department",
			title: "Department",
			type: "string",
			options: {
				list: ["Police", "Fire"],
			},
		},
		{
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		
	],

	preview: {
		select: {
			firstName: "firstName",
			lastName: "lastName",
			title: "title",
			media: "mainImage",
		},
		prepare(selection) {
			const { firstName, lastName, title } = selection;
			return Object.assign({}, selection, {
				title: `${firstName}`,
                subtitle:  "Call-to-Action"
			});
		},
	},
};
