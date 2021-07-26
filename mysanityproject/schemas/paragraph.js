/* eslint-disable import/no-anonymous-default-export */
/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
import React from "react";
import { Link } from "react-router-dom";
const iconRender = (props) => {
	console.log(props);
	if (props.children.text === " ") {
		return <></>;
	} else {
		return (
			<>
				<i style={{ verticalAlign: "middle", fontSize: "inherit" }} className=' material-icons text-center'>
					{props.icon}
				</i>
				{props.text}
			</>
		);
	}
};

export default {
	title: "Paragraph",
	name: "paragraph",
	type: "object",
	fields: [
		{
			name: "header",
			title: "Header",
			type: "string",
		},
		{
			title: "Block Content",
			name: "blockContent",
			type: "array",
			editModal: "fullscreen",
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
								title: "Icon",
								value: "icon",
								blockEditor: {
									render: iconRender,
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
							{
								title: "Icon with Text",
								name: "iconWithText",
								type: "object",
								blockEditor: {
									render: iconRender,
								},
								fields: [
									{
										title: "icon",
										name: "icon",
										type: "string",
									},
									{
										title: "Text",
										name: "text",
										type: "text",
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
					type: "image",
					options: { hotspot: true },
				},
				{
					type: "CTA",
				},
				{
					type: "customImage",
				},
				{
					type: "subSection",
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
