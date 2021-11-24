import React from "react";
import { createRef, useState, useEffect } from "react";
import { Button } from "reactstrap";
import parserhtml from "prettier/parser-html";
import prettier from "prettier/standalone";

const GenerateHTML = (props) => {
	const header = `
    <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.css" rel="stylesheet" />
	<link href="https://ruizray.github.io/VOBStyles.css" rel="stylesheet"/>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    </head>`;

	const page = createRef();
	useEffect(() => {}, [page]);

	const handleToggle = () => {
		const temp = !toggled;
		var str = page.current.innerHTML;
		let withHeader = header + str;
		let formatted = prettier.format(withHeader, { useTabs: true, printWidth: 100, semi: false, parser: "html", plugins: [parserhtml] });
		setHTML(formatted);
		setToggled(temp);
	};

	const [HTML, setHTML] = useState();
	const [toggled, setToggled] = useState(false);

	return (
		<>
			<div ref={page}>{props.children}</div>{" "}
			<Button className='m-3' onClick={() => handleToggle()}>
				Generate HTML
			</Button>
			{toggled ? (
				<code>
					<p style={{ whiteSpace: "break-spaces", fontSize: "1rem" }}>{"\n" + HTML}</p>
				</code>
			) : (
				<p></p>
			)}
		</>
	);
};

export default GenerateHTML;
