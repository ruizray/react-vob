// /deskStructure.js
import S from "@sanity/desk-tool/structure-builder";

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>
	S.list({id:"root", title:"Base"})
		.items([
			S.listItem({title:"Pages", id:"pages"})
				.child(
					S.list({title:"/path", id:"path"})
						.items([
							S.listItem({
								id: "government",
								title: "/government",
							}).child(
								S.list({ title: "/government/", id: "pages" }).items([
									S.listItem({
										id: "landingPage",
										title: "LandingPage",
									}).child(S.document().schemaType("page").documentId("governmentLandingPage")),
								])
							),
						])
				),
			S.listItem({ title: "Directory", id: "directory" }).child(
				S.list({ id: "departments", title: "Departments" }).items([
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
				])
			),

			// We also need to remove the new singletons from the main list
		]);
