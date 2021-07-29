/* eslint-disable import/no-anonymous-default-export */
import React from "react";
export default {
	title: "Link Card",
	name: "linkCard",
	type: "object",

	fields: [
		{
			title: "Icon",
			name: "icon",
			type: "string",
		},
		{
			title: "Text",
			name: "text",
			type: "string",
		},
		{
			title: "Links",
			name: "links",
			type: "array",
			of: [
				{
					title: "Link",
					name: "link",
					type: "object",
					fields: [
						{
							title: "Text",
							name: "linkText",
							type: "string",
						},
						{
							title: "Link URL",
							name: "url",
							type: "url",
						},
					],
				},
			],
		},
		
	],
	preview: {
		select: {
			icon: "icon",
			text: "text",
		},
		prepare(selection) {
			const { icon, text } = selection;
			return Object.assign({}, selection, {
				title: text,
				media: icon && (
					<i class=' material-icons text-center' style={{ verticalAlign: "middle", fontSize: "xx-large" }}>
						{icon}
					</i>
				),
			});
		},
	},
};
