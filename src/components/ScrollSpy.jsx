import React, { useEffect, useState } from "react";

const ScrollSpy = () => {
	const [ScrollSpy, setScrollSpy] = useState([]);
	useEffect(() => {
		let nodes = [];
		let sectionMain = document.querySelectorAll("section.sectionMain");

		for (var main of sectionMain) {
			let text = main.querySelector("h1").innerText;

			let node = { mainID: main.id, subsections: [], text };
			let subsections = main.querySelectorAll("section.subsection");
			console.log(subsections)
			for (var subsection of subsections) {
				text = subsection.querySelector("h4").innerText;
				console.log(subsection.id)
				node.subsections.push({ id: subsection.id, text });
			}
			nodes.push(node);
		}
		console.log(nodes);
		setScrollSpy(nodes);

		let body = document.querySelector("body");
		body.setAttribute("data-mdb-spy", "scroll");
		body.setAttribute("data-mdb-target", "#scrollspy1");
		body.setAttribute("data-mdb-offset",'0');
	
	}, []);

	const handleSubsections = (subsections,key) => {
		if (subsections.length <= 0) {
			return <></>;
		} else {
			console.log(subsections, key)
			return (
				<ul key={"UL-" + key} className='nav flex-column ps-3'>
					{subsections.map((subsection) => {
						return (
							<>
								<li key={"LI-" + subsection.id} className='nav-item'>
									<a key={"A-" + subsection.id} className='nav-link scrollspy-level-2' href={"#" + subsection.id}>
										{subsection.text}
									</a>
								</li>
							</>
						);
					})}
				</ul>
			);
		}
	};


	return (
		<div id='scrollspy1' data-mdb-sticky-boundary="true" className='sticky-top pt-4'>
			<ul className='nav flex-column nav-pills menu-sidebar scrollspy mt-4'>
		
				{ScrollSpy.map((section) => {
					console.log(section)
					return (
						<li key={section.mainID} className='nav-item '>
							<a key={"Main" + section.mainID} className='nav-link scrollspy-level-1' href={"#" + section.mainID}>
								{section.text}
							</a>
							{handleSubsections(section.subsections, section.mainID)}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ScrollSpy;
