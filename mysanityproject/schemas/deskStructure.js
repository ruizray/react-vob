// /deskStructure.js
import S from "@sanity/desk-tool/structure-builder";
import policeEmployee from "./initalValueTemplates";
// eslint-disable-next-line import/no-anonymous-default-export
export default () =>
	S.list()
		.title("Base")
		.items([
			S.listItem()
				.title("Pages")
				.child(
					S.list()
						// Sets a title for our new list
						.title("Categories")
						// Add items to the array
						// Each will pull one of our new singletons
						.items([
							S.listItem({
								id: "government",
								title: "Government",
							}).child(
								S.list({ title: "Pages", id: "pages" }).items([
									S.listItem({
										id: "landingPage",
										title: "LandingPage",
                                        schemaType:"post"
									}).child(S.document({schemaType:"post"})),
								])
							),
						])
				),
			S.listItem()
				.title("Directory")
				.child(
					S.list({ id: "departments", title: "Departments" }).items([
						S.listItem({
							id: "policeEmployee",
							title: "Police Employee",
							schemaType: "employee",
							child: (department) =>
								S.documentList()
									.title("Police Employee")
									.filter('_type == "employee" && department == "Police"')
									.params({ department }),
						}),
						S.listItem()
							.title("Fire")
							.child((department) =>
								S.documentList().title("Posts").filter('_type == "employee" && department == "Fire"').params({ department })
							),
					])
				),
			// We also need to remove the new singletons from the main list
		]);
