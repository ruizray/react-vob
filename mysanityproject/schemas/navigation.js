export default {
	name: "navigation",
	title: "Navigation",
	type: "document",
	fields: [
   
    {
			name: "contacts",
			title: "Contacts",
			type: "array",
			of: [{ type: "page",}],
		},
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "description",
			title: "Description",
			type: "text",
		},
	],
};
