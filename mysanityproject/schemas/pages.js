/* eslint-disable import/no-anonymous-default-export */
export default {
	name: "page",
	title: "Page",
	type: "document",
	fields: [
		{
			name:"path",
			title:"Path",
			type:'string',
			readOnly:true
		
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
				source: (doc) => `${doc.path}${doc.title}`,
				maxLength: 96,
				slugify: input => input
                         .toLowerCase()
                         .replace(/\s+/g, "-")
                         .slice(0, 200)
			},
		},
        {
			name: "mainComponents",
			title: "Main Components",
			type: "array",
			of: [{type:"mainSection"}],
		},
		{
			name: "contacts",
			title: "Contacts",
			type: "array",
			of: [{ type: "reference", to: { type: "employee" } }],
		},
		{
			name: "publishedAt",
			title: "Published at",
			type: "datetime",
		},
		{
			name: "body",
			title: "Body",
			type: "paragraph",
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
