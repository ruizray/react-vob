/* eslint-disable import/no-anonymous-default-export */
import React from "react";
const renderKBD = (props) => <kbd>{props.children}</kbd>;
export default {
	name: "landingPage",
	title: "Landing Page",
	type: "document",
	fields: [
		{
			name: "header",
			title: "Title",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "header",
				maxLength: 96,
				slugify: (input) => input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
			},
		},
		{
			title: "Description",
			name: "description",
			type: "array",
			options: {
				editModal: "fullscreen",
			},

			of: [
				{
					title: "Block",
					type: "block",

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
				{
					name: "linkGroupContainer",
					title: "Link Groups",
					type: "object",
					fields: [
						{
							name: "linkGroups",
							title: "Link Groups",
							type: "array",
							of: [
								{
									name: "linkGroup",
									title: "Link Group",
									type: "object",
									fields: [
										{ name: "groupName", title: "Group Name", type: "string" },
										{
											name: "link",
											type: "array",
											of: [
												{
													type: "object",
													name: "link",
													fields: [
														
														{ name: "linkText", type: "string", title: "Link text" },{ name: "linkUrl", title: "Link Url", type: "string" },
													],
												},
											],
										},
									],
								},
							],
						},
					],
					preview: {
						select: {
							linkCard0: "linkGroups.0.groupName", // <- contactCards.0 firstNs a reference to author, and the preview component will automatically resolve the reference and return the name
							linkCard1: "linkGroups.1.groupName",
							linkCard2: "linkGroups.2.groupName",
							linkCard3: "linkGroups.3.groupName",
						},
						prepare: ({ linkCard0, linkCard1, linkCard2, linkCard3 }) => {
							const linkCards = [linkCard0, linkCard1, linkCard2].filter(Boolean);
							console.log(linkCard0);
							var subtitleTest;

							subtitleTest = linkCards.length > 0 ? `${linkCards.join(", ")}` : "";

							const hasMoreLinkCards = Boolean(linkCard3);
							return {
								title: "Link Cards",
								subtitle: hasMoreLinkCards ? `${subtitleTest}…` : subtitleTest,
							};
						},
					},
				},
				{
					name: "linkCardsContainer",
					title: "Link Cards",
					type: "object",
					fields: [
						{
							name: "linkCards",
							title: "Link Cards",
							type: "array",
							of: [{ type: "linkCard" }],
						},
					],
					preview: {
						select: {
							linkCard0: "linkCards.0.text", // <- contactCards.0 firstNs a reference to author, and the preview component will automatically resolve the reference and return the name
							linkCard1: "linkCards.1.text",
							linkCard2: "linkCards.2.text",
							linkCard3: "linkCards.3.text",
						},
						prepare: ({ linkCard0, linkCard1, linkCard2, linkCard3 }) => {
							const linkCards = [linkCard0, linkCard1, linkCard2].filter(Boolean);
							console.log(linkCard0);
							var subtitleTest;

							subtitleTest = linkCards.length > 0 ? `${linkCards.join(", ")}` : "";

							const hasMoreLinkCards = Boolean(linkCard3);
							return {
								title: "Link Cards",
								subtitle: hasMoreLinkCards ? `${subtitleTest}…` : subtitleTest,
							};
						},
					},
				},
				{
					name: "contactCardsContainer",
					title: "Contact Cards",
					type: "object",
					fields: [
						{
							title: "Contact Cards",
							name: "contactCards",
							type: "array",
							of: [
								{
									type: "reference",
									to: [{ type: "employee" }],
								},
							],
						},
					],
					preview: {
						select: {
							contactCard0: "contactCards.0.firstName", // <- contactCards.0 firstNs a reference to author, and the preview component will automatically resolve the reference and return the name
							contactCard1: "contactCards.1.firstName",
							contactCard2: "contactCards.2.firstName",
							contactCard3: "contactCards.3.firstName",
						},
						prepare: ({ title, contactCard0, contactCard1, contactCard2, contactCard3, linkCard0, linkCard1, linkCard2, linkCard3 }) => {
							const ContactCards = [contactCard0, contactCard1, contactCard2].filter(Boolean);
							const linkCards = [linkCard0, linkCard1, linkCard2].filter(Boolean);
							var subtitleTest;
							if (ContactCards) {
								subtitleTest = ContactCards.length > 0 ? `${ContactCards.join(", ")}` : "";
							} else {
								subtitleTest = linkCards.length > 0 ? `${linkCards.join(", ")}` : "";
							}

							return {
								title: "Contacts",
								subtitle: subtitleTest,
							};
						},
					},
				},
			],
		},
		
		
	],

	preview: {
		select: {
			title: "header",
		},
		prepare(selection) {
			const { title } = selection;
			return Object.assign({}, selection, {
				title: title,
			});
		},
	},
};
