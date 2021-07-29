/* eslint-disable import/no-anonymous-default-export */

export default {
	name: "page",
	title: "Page",
	type: "document",
	fields: [
		
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
			name: "scrollspy",
			title: "Scrollspy",
			type: "boolean",
		},
		{
			name: "mainComponents",
			title: "Main Components",
			type: "array",
			options: {
				editModal: "fullscreen",
			},
			of: [{ type: "paragraph" }],
		},
		{
			name: "contacts",
			title: "Contacts",
			type: "array",
			of: [{ type: "reference", to: { type: "employee" } }],
		},
		{
			name: "tags",
			title: "Path",
			type: "array",
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
			test: "title",
			subtitle: "slug.current",
		},
		prepare(selection) {
			const { test, subtitle } = selection;
			return {
				title:test,
				subtitle:subtitle && `${subtitle}`,
			}
		},
	},
};
