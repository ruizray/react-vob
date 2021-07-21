// /deskStructure.js
import S from "@sanity/desk-tool/structure-builder";

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
										title: "/government",
										id: "government",
										items: [
											S.documentListItem({
												title: "Landing Page",
												id: "governmentLandingPage",
												schemaType: "page",
												child: (test) => {
													console.log(government);

													return S.document({
														title: "/government",
														schemaType: "page",
													}).initialValueTemplate("governmentTemplate", { path: government });
												},
											}),
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
										.params({ department })
										.initialValueTemplates([S.initialValueTemplateItem("fireEmployee")]),
							}),
							S.listItem({
								title: "Executive",
								id: "executiveEmployee",
								child: (department) =>
									S.documentList({ title: "Executive", id: "executiveDocumentList" })
										.filter('_type == "employee" && department == "Executive"')
										.params({ department })
										.initialValueTemplates([S.initialValueTemplateItem("executiveEmployee")]),
							}),
						],
					}),
			}),
		],
	});
