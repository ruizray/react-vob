// /deskStructure.js
import S from "@sanity/desk-tool/structure-builder";
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
				S.documentTypeList("page")
			}),
			S.listItem({
				title: "Landing Pages",
				id: "landingPages",
				child: () =>
				S.documentTypeList("landingPage")
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
										.params({ type:"employee" , department:"Executive"  })
										.initialValueTemplates([S.initialValueTemplateItem("fireEmployee", {department:"Executive"})])
							}),
						],
					}),
			}),

			S.documentTypeListItem("navigation"),
		],
	});
