import sanityClient from "@sanity/client"
export default sanityClient({
    projectId: "mtk3vpz2",
    dataset: "production",
    useCdn:true,
})