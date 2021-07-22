// /deskStructure.js
import S from "@sanity/desk-tool/structure-builder";

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>
	S.list({
		id: "root",
		title: "Content Editor",
		items: [
			S.documentTypeListItem("page"),
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
			S.listItem({
				title: "Navigation",
				id: "navigation",
				child: (department) =>
					S.documentList({ title: "Navigation Menus", id: "navMenus" })
						.filter('_type == "navigation"')
						.params({ department })
						.initialValueTemplates([S.initialValueTemplateItem("policeEmployee")]),
				// S.list({
				// 	id: "navMenus",
				// 	title: "Navigation Menus",
				// 	items: [
				// 		S.listItem({
				// 			id: "policeEmployee",
				// 			title: "Police",
				// 			child: (department) =>
				// 				S.documentList({ title: "Police", id: "policeDocumentList" })
				// 					.filter('_type == "employee" && department == "Police"')
				// 					.params({ department })
				// 					.initialValueTemplates([S.initialValueTemplateItem("policeEmployee")]),
				// 		}),
				// 		S.listItem({
				// 			title: "Fire",
				// 			id: "fireEmployee",
				// 			child: (department) =>
				// 				S.documentList({ title: "Fire", id: "fireDocumentList" })
				// 					.filter('_type == "employee" && department == "Fire"')
				// 					.params({ department })
				// 					.initialValueTemplates([S.initialValueTemplateItem("fireEmployee")]),
				// 		}),
				// 		S.listItem({
				// 			title: "Executive",
				// 			id: "executiveEmployee",
				// 			child: (department) =>
				// 				S.documentList({ title: "Executive", id: "executiveDocumentList" })
				// 					.filter('_type == "employee" && department == "Executive"')
				// 					.params({ department })
				// 					.initialValueTemplates([S.initialValueTemplateItem("executiveEmployee")]),
				// 		}),
				// 	],
				// }),
			}),
		],
	});
