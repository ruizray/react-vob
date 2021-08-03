/* eslint-disable import/no-anonymous-default-export */
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
			name: "cards",
			title: "Cards",
			type: "array",
			of: [
				{
					name: "linkCardsContainer",
					title: "linkCards",
					type: "object",
					fields: [
						{
							name: "linkCards",
							title: "Link Cards",
							type: "array",
							of: [{ type: "linkCard" }],
						},
					],
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
							author0: "contactCards.0.firstName", // <- contactCards.0 firstNs a reference to author, and the preview component will automatically resolve the reference and return the name
							author1: "contactCards.1.firstName",
							author2: "contactCards.2.firstName",
							author3: "contactCards.3.firstName",
						},
						prepare: ({ title, author0, author1, author2, author3 }) => {
							const ContactCards = [author0, author1, author2].filter(Boolean);
							const subtitle = ContactCards.length > 0 ? `${ContactCards.join(", ")}` : "";
							const hasMoreContactCards = Boolean(author3);
							return {
								title: "Contacts",
								subtitle: hasMoreContactCards ? `${subtitle}…` : subtitle,
							};
						},
					},
				},
			],
		},
		{
			name: "linkCards",
			title: "Link Cards",
			type: "array",
			of: [{ type: "linkCard" }],
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
