// /deskStructure.js
import S from "@sanity/desk-tool/structure-builder";
import client from "part:@sanity/base/client";
import React, { useState, useEffect } from "react";
import { Col, Row , Container} from "reactstrap";
import { ContactCardProfile, ContactSideBar } from "../../src/components/ContactInformation";
import { ContentCard, ContentCardSubsection } from "../../src/components/ContentCard";
import "../../src/css/stylesReact.css";
// eslint-disable-next-line import/no-anonymous-default-export
export default () =>


	S.list({
		id: "root",
		title: "Content Editor",
		items: [
			S.listItem({
				title: "Pages",
				id: "pages",
				child: () =>
					S.list({
						title: "root",
						id: "path",
						items: [
							S.listItem({
								id: "government",
								title: "Government",
								child: (government) =>
									S.list({
										defaultLayout: "default",
										title: "/government",
										id: "government",

										items: [
											S.listItem({
												id: "agendas_minutes",
												title: "Agendas and Minutes",
												child: (agendas_minutes) => {
													console.log(government, agendas_minutes);
													var path = government + "/" + agendas_minutes + "/";
													console.log(path);
													return S.documentList({ title: "/agendas_minutes", id: "agendas_minutes" })
														.filter('_type == "page" && path match ["government", "/agendas_minutes/"]')
														.params({ type: "page", path })
														.initialValueTemplates([S.initialValueTemplateItem("governmentTemplate", { path })]);
												},
											}),

											S.documentListItem({
												title: "Elected Officals",
												id: "elected",
												schemaType: "page",
												child: (elected) => {
													console.log(government);
													var path = government + "/" + elected + "/";
													return S.document({
														title: "/government",
														schemaType: "page",
													}).initialValueTemplate("governmentTemplate", { path });
												},
											}),
										],
									}),
							}),
							S.listItem({
								id: "tester",
								title: "Government",
								child: (government) =>
									S.documentTypeList("page")
							}),
						],
					}),
			}),
			
			S.listItem({
				title: "Directory",
				id: "directory",
				child: () =>
					S.list({
						id: "departments",
						title: "Departments",
						items: [
							S.listItem({
								id: "policeEmployee",
								title: "Police",
								child: (department) =>
									S.documentList({ title: "Police", id: "policeDocumentList" })
										.filter('_type == "employee" && department == "Police"')
										.params({ department })
										.initialValueTemplates([S.initialValueTemplateItem("policeEmployee")]),
							}),
							S.listItem({
								title: "Fire",
								id: "fireEmployee",
								child: (department) =>
									S.documentList({ title: "Fire", id: "fireDocumentList" })
										.filter('_type == "employee" && department == "Fire"')
										.params({ type:"employee" , department:"Fire"  })
										.initialValueTemplates([S.initialValueTemplateItem("fireEmployee", {department:"Fire"})]),
							}),
							S.listItem({
								title: "Executive",
								id: "executiveEmployee",
								child: () =>
									S.documentList({ title: "Executive", id: "executiveDocumentList" })
										.filter('_type == "employee" && department == "Executive"')
								
										.initialValueTemplates([S.initialValueTemplateItem("executiveEmployee")]),
							}),
						],
					}),
			}),

			S.documentTypeListItem("navigation"),
		],
	});
