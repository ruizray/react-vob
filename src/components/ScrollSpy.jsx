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
			for (var subsection of subsections) {
				text = subsection.querySelector("h4").innerText;
				console.log(subsection.id);
				node.subsections.push({ id: subsection.id, text });
			}
			nodes.push(node);
		}
		setScrollSpy(nodes);
		let body = document.querySelector("body");
		body.setAttribute("data-mdb-spy", "scroll");
		body.setAttribute("data-mdb-target", "#scrollspy1");
		body.setAttribute("data-mdb-offset", "0");
	}, []);
	if (!ScrollSpy) return <div>Loading...</div>;
	return (
		<div id='scrollspy1' data-mdb-sticky-boundary='true' className='sticky-top pt-4'>
			<ul className='nav flex-column nav-pills menu-sidebar scrollspy mt-4'>
				{ScrollSpy &&
					ScrollSpy.map((section) => {
						return (
							<li key={section.mainID} className='nav-item '>
								<a className='nav-link scrollspy-level-1' href={"#" + section.mainID}>
									{section.text}
								</a>
								{section.subsections.length > 0 && (
									<ul className='nav flex-column ps-3'>
										{section.subsections.map((subsection) => {
											return (
												<li key={"LI-" + subsection.id} className='nav-item'>
													<a className='nav-link scrollspy-level-2' href={"#" + subsection.id}>
														{subsection.text}
													</a>
												</li>
											);
										})}
									</ul>
								)}
							</li>
						);
					})}
			</ul>
		</div>
	);
};

export default ScrollSpy;
