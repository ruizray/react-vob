/* eslint-disable import/no-anonymous-default-export */
export default {
	name: "employee",
	title: "Employee",
	type: "document",
	fields: [
		{
			name: "firstName",
			title: "First Name",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "lastName",
			title: "Last Name",
			type: "string",
		},
		{ name: "title", title: "Title", type: "string" },
		{
			name: "email",
			title: "Email",
			type: "string",
		},
		{
			name: "fax",
			title: "Fax",
			type: "string",
		},
		{
			name: "department",
			title: "Department",
			type: "string",
			options: {
				list: ["Police", "Fire", "Executive", "Public Works"],
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
				title: `${firstName} ${lastName} `,
                subtitle:  `${title}`
			});
		},
	},
};
