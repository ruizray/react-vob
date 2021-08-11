/* eslint-disable import/no-anonymous-default-export */
import React from "react";
const renderKBD = (props) => <kbd>{props.children}</kbd>;

export default {
	name: "page",
	title: "Page",
	type: "document",
	fieldsets: [
		{ name: "leftColumn", title: "Left Column" },
		{ name: "mainColumn", title: "Middle Column" },
		{ name: "rightColumn", title: "Right Column" },
	],
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
			fieldset: "leftColumn",
		},
		{
			title: "Block Content",
			name: "leftColumnBlock",
			type: "array",
			options: {
				editModal: "fullscreen",
			},
			fieldset: "leftColumn",
			of: [
				{
					title: "Block",
					type: "block",
					// Styles let you set what your user can mark up blocks with. These
					// correspond with HTML tags, but you can set any title or value
					// you want and decide how you want to deal with it where you want to
					// use your content.
					styles: [{ title: "Normal", value: "normal" }],
					lists: [{ title: "Bullet", value: "bullet" }],
					// Marks let you mark up inline text in the block editor.
					marks: {
						// Decorators usually describe a single property – e.g. a typographic
						// preference or highlighting by editors.
						decorators: [
							{ title: "Strong", value: "strong" },
							{ title: "Emphasis", value: "em" },
							{
								title: "Code",
								value: "kbd",
								blockEditor: {
									render: renderKBD,
								},
							},
						],
						// Annotations can be any object structure – e.g. a link or a footnote.
						annotations: [
							{
								title: "URL",
								name: "link",
								type: "object",
								fields: [
									{
										title: "URL",
										name: "href",
										type: "url",
									},
								],
							},
						],
					},
				},
				// You can add additional types here. Note that you can't use
				// primitive types such as 'string' and 'number' in the same array
				// as a block type.

				{
					name: "codeBlock",
					title: "Code Block",
					type: "code",
					options: {
						language: "html",
						
							editModal: "fullscreen",
						
					},
				},
				{
					name: "profile",
					title: "Profile",
					type: "object",
					options: {
						editModal: "fullscreen",
					},
					fields: [
						{ name: "imageAlt", title: "Image Alt Text", type: "string" },
						{ name: "imageLink", title: "Image Link", type: "string" },
						{ name: "header", title: "Header", type: "string" },
						{ name: "subtext", title: "Subtext", type: "string" },
						{
							name: "keyValuePairs",
							title: "Key/Value Pairs",
							type: "array",
							of: [
								{
									name: "keyValuePair",
									title: "Key Value Pair",
									type: "object",
									fields: [
										{ name: "key", title: "Key", type: "string" },
										{ name: "value", title: "Value", type: "string" },
									],
								},
							],
						},
					],
				},
			],
		},
		{
			name: "mainComponents",
			title: "Main Components",
			type: "array",
			fieldset: "mainColumn",
			options: {
				editModal: "fullscreen",
			},
			of: [{ type: "paragraph" }],
		},
		{
			name: "contacts",
			title: "Contacts",
			type: "array",
			fieldset: "rightColumn",
			of: [
				{ type: "reference", to: { type: "employee" } },
				{
					name: "employeeList",
					title: "Employee List",
					type: "object",
					fields: [
						{
							name: "employees",
							title: "Employees",
							type: "array",
							of: [{ type: "reference", to: { type: "employee" } }],
						},
					],
				},
			],
		},
		{
			name: "membersList",
			title: "Members List",
			type: "array",
			fieldset: "rightColumn",
			of: [
				{
					name: "member",
					title: "Member",
					type: "object",
					fields: [{ name: "memberName", title: "Member Name", type: "string" }],
				},
			],
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
				title: test,
				subtitle: subtitle && `${subtitle}`,
			};
		},
	},
};
