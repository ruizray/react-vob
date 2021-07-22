// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import paragraph from "./paragraph";
import navigation from "./navigation";
import pages from "./pages";
import mainSection from "./mainSection";
import employee from "./employee";
import subSection from "./subSection";
import CTA from "./CTA";
import navigationLink from "./navigationLink";
import navigationSection from "./navigationSection";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	// We name our schema
	name: "Content",
	list: { pages },
	// Then proceed to concatenate our document type
	// to the ones provided by any plugins that are installed
	title: "Test",
	types: schemaTypes.concat([
		// The following are document types which will appear
		// in the studio.
			subSection,
	
		CTA,
		pages,
		mainSection,
		employee,
		navigation,
		navigationLink,
		navigationSection,
		// When added to this list, object types can be used as
		// { type: 'typename' } in other document schemas
    
		paragraph,
		{
			title: "test",
			name: "greeting",
			type: "string",
		},
	]),
});
