/* eslint-disable import/no-anonymous-default-export */
import React from "react";
export default {
	name: "employee",
	title: "Employee",
	type: "document",
	fields: [
		{
			name: "firstName",
			title: "First Name",
			type: "string",
			validation: (Rule) => Rule.required(),
		},
		{
			name: "lastName",
			title: "Last Name",
			type: "string",
		},
		{
			name: "id",
			title: "Id",
			type: "slug",
			description: "Need for collapsible components",
			options: {
				source: (doc)=> `${doc.lastName}-${doc.firstName}`,
				maxLength: 96,
				slugify: input => input
                         .toLowerCase()
                         .replace(/\s+/g, "-")
                         .slice(0, 200)
			},
		},
		{ name: "title", title: "Title", type: "string" },
		{
			name: "email",
			title: "Email",
			type: "string",
		},
		{
			name: "phone",
			title: "Phone Number",
			type: "string",
		},
		{
			name: "fax",
			title: "Fax",
			type: "string",
		},
		{
			name: "department",
			title: "Department",
			type: "string",
			options: {
				list: ["Police", "Fire", "Executive", "Public Works"],
			},
		},
		{
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		
		
		
	],

	preview: {
		select: {
			firstName: "firstName",
			lastName: "lastName",
			title: "title",
			media: "image",
		},
		prepare(selection) {
			const { firstName, lastName, title , media} = selection;
			return Object.assign({}, selection, {
				title: firstName && lastName && `${firstName} ${lastName} `,
                subtitle:  `${title}`,
				media:media ? media : <i class=" material-icons text-center" style={{verticalAlign:"middle", fontSize:"xxx-large"}}>person</i>
			});
		},
	},
};
