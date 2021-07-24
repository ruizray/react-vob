export default {
	name: "navigation",
	title: "Navigation",
	type: "document",
	fields: [

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
		{
			type: "array",
			name: "sections",
			title: "Sections",
			editModal: "fullscreen",
			of: [{ type: "navigation.section" }],
		},
	],
};
