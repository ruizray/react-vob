/* eslint-disable import/no-anonymous-default-export */
// /deskStructure.js
import S from "@sanity/desk-tool/structure-builder";
import "../../src/css/stylesReact.css";
// eslint-disable-next-line import/no-anonymous-default-export

export default () => {
	return S.list({
		id: "root",
		title: "Content Editor",
		items: [
			S.listItem({
				title: "Pages",
				id: "pages",
				child: () => S.documentTypeList("page"),
			}),
			S.listItem({
				title: "Landing Pages",
				id: "landingPages",
				child: () => S.documentTypeList("landingPage"),
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
										.params({ type: "employee", department: "Fire" })
										.initialValueTemplates([S.initialValueTemplateItem("fireEmployee", { department: "Fire" })]),
							}),
							S.listItem({
								title: "Executive",
								id: "executiveEmployee",
								child: () =>
									S.documentList({ title: "Executive", id: "executiveDocumentList" })
										.filter('_type == "employee" && department == "Executive"')
										.params({ type: "employee", department: "Executive" })
										.initialValueTemplates([S.initialValueTemplateItem("executiveEmployee", { department: "Executive" })]),
							}),
							S.listItem({
								title: "Commissions",
								id: "commissionEmployee",
								child: () =>
									S.documentList({ title: "Commission", id: "commissionDocumentList" })
										.filter('_type == "employee" && department == "Commission"')
										.params({ type: "employee", department: "Commission" })
										.initialValueTemplates([S.initialValueTemplateItem("commissionEmployee", { department: "Commission" })]),
							}),
							S.listItem({
								title: "Human Resources",
								id: "humanResources",
								child: () =>
									S.documentList({ title: "Human Resources", id: "humanResourcesDocuments" })
										.filter('_type == "employee" && department == "Human Resources"')
										.params({ type: "employee", department: "Human Resources" })
										.initialValueTemplates([S.initialValueTemplateItem("humanResourcesEmployee", { department: "Human Resources" })]),
							}),
							S.listItem({
								title: "IT Department",
								id: "ITDepartment",
								child: () =>
									S.documentList({ title: "IT Department", id: "ITDepartmentDocuments" })
										.filter('_type == "employee" && department == "IT Department"')
										.params({ type: "employee", department: "IT Department" })
										.initialValueTemplates([S.initialValueTemplateItem("informationTechEmployee", { department: "IT Department" })]),
							}),
							S.listItem({
								title: "Public Services",
								id: "publicServices",
								child: () =>
									S.documentList({ title: "Public Services", id: "publicServicesDocuments" })
										.filter('_type == "employee" && department == "Public Services"')
										.params({ type: "employee", department: "Public Services" })
										.initialValueTemplates([S.initialValueTemplateItem("publicServicesEmployee", { department: "Public Services" })]),
							}),
							S.listItem({
								title: "Public Works",
								id: "publicWorks",
								child: () =>
									S.documentList({ title: "Public Works", id: "publicWorksDocuments" })
										.filter('_type == "employee" && department == "Public Works"')
										.params({ type: "employee", department: "Public Works" })
										.initialValueTemplates([S.initialValueTemplateItem("publicWorksEmployee", { department: "Public Works" })]),
							}),
							S.listItem({
								title: "Finance",
								id: "finance",
								child: () =>
									S.documentList({ title: "Finance", id: "financeDocuments" })
										.filter('_type == "employee" && department == "Finance"')
										.params({ type: "employee", department: "Finance" })
										.initialValueTemplates([S.initialValueTemplateItem("financeEmployee", { department: "Finance" })]),
							}),
						],
					}),
			}),

			S.documentTypeListItem("navigation"),
		],
	});
};
