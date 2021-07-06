import React from "react";
import { createRef, useState, useEffect } from "react";
import { Button } from "reactstrap";

const GenerateHTML = (props) => {
	const header = `
    <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.css" rel="stylesheet" />
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Web site created using create-react-app" />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <title>React App</title>
    </head>`;

	const page = createRef();
	useEffect(() => {


		addNewlines(page.current.innerHTML);
	}, [page]);
	const handleToggle = () => {
	
		const temp = !toggled;
		setToggled(temp);
	};

	const [HTML, setHTML] = useState();
	const [toggled, setToggled] = useState(false);

	const addNewlines = (str) => {
		let tabs = 0;
		var total = "";
		const regex2 = /(<.*?>)|([^<]*)/gm;
		const array = str.split(regex2);

		var filtered = array.filter((el) => {
			if (el !== undefined && el !== "") {
				return true;
			}
			return false;
		});

		filtered.forEach((str, index) => {
			str = str.trim();
			if (str[1] === "/") {
				tabs--;
				const temp = "\t".repeat(tabs) + str + "\n";

				total = total + temp;
			} else {
				if (!str.includes("<")) {
					const temp = "\t".repeat(tabs) + str + "\n";
					total = total + temp;
				} else {
					const temp = "\t".repeat(tabs) + str + "\n";
					tabs++;
					total = total + temp;
				}
			}
		});

		console.log(total);
		setHTML(total);
	};


	return (
		<>
			{" "}
			<div ref={page}>{props.children}</div>{" "}
			<Button className='m-3' onClick={() => handleToggle()}>
				Generate HTML
			</Button>
			{toggled ? (
				<p style={{ whiteSpace: "break-spaces" }}>
					{header}

					{"\n" + HTML}
				</p>
			) : (
				<p></p>
			)}
		</>
	);
};

export default GenerateHTML;
