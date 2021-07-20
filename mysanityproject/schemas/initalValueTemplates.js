import T from "@sanity/base/initial-value-template-builder";
import { employee } from "./employee";
export default [
	...T.defaults(),

	T.template({
        id: 'policeEmployee',
        title: 'Police Employee',
        schemaType: 'employee',
       
        value: {
            department : 'police',
        }
	}),
];
