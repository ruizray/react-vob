/* eslint-disable import/no-anonymous-default-export */
export default {
	name: "imageCarousel",
	title: "Image Carousel",
	type: "object",
	fields: [

		{
			name: "images",
			title: "Image Slides",
			type: "array",
			of: [
				{
					type: "object",
					name: "imageSlide",
					title: "Image",
					fields: [
						{
							name: "caption",
							title: "Caption",
							type: "string",
						},
						{
							name: "imageUrl",
							title: "Image URL",
							type: "string",
						},
					],
				},
			],
		},
	],

	preview: {
		select: {
			title: "buttonText",
			media: "mainImage",
		},
		prepare(selection) {
			const { title } = selection;
			return Object.assign({}, selection, {
				title: `${title}`,
				subtitle: "Call-to-Action",
			});
		},
	},
};
