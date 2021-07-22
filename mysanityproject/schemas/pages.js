/* eslint-disable import/no-anonymous-default-export */
export default {
	name: "page",
	title: "Page",
	type: "document",
	fieldsets: [
		{
			name: "rightColumn",
			title: "Right Column",
			description: "Contents of the right side",
			options: {
				collapsible: true, // Makes the whole fieldset collapsible
				collapsed: false, // Defines if the fieldset should be collapsed by default or not
				columns: 2, // Defines a grid for the fields and how many columns it should have
			},
		},
		{
			name: "middleColumn",
			title: "Middle Column",
			description: "Contents of the middle column",
			options: {
				collapsible: true, // Makes the whole fieldset collapsible
				collapsed: false, // Defines if the fieldset should be collapsed by default or not
				columns: 2, // Defines a grid for the fields and how many columns it should have
			},
		},
	],
	fields: [
		{
			name: "path",
			title: "Path",
			type: "string",
			readOnly: true,
		},
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
				slugify: (input) => input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
			},
		},
		{
			name: "mainComponents",
			title: "Main Components",
			type: "array",
			fieldset: "middleColumn",
			of: [{ type: "mainSection" }],
		},
		{
			name: "contacts",
			title: "Contacts",
			type: "array",
			fieldset: "rightColumn",
			of: [{ type: "reference", to: { type: "employee" } }],
		},
		{
			name: "publishedAt",
			title: "Published at",
			type: "datetime",
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
