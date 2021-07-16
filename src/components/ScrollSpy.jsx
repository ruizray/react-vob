import React, { useEffect, useState } from "react";

const ScrollSpy = () => {
	const [ScrollSpy, setScrollSpy] = useState([]);
	useEffect(() => {
		let nodes = [];
		let sectionMain = document.querySelectorAll("section.sectionMain");

		for (var main of sectionMain) {
			let innerHTML = main.querySelector("h1").innerText;

			let node = { mainSection: main.id, subsections: [], innerHTML };
			let subsections = main.querySelectorAll("section.subsection");
			for (var subsection of subsections) {
				innerHTML = subsection.querySelector("h4").innerText;
				node.subsections.push({ id: subsection.id, innerHTML });
			}
			nodes.push(node);
		}
		console.log(nodes);
		setScrollSpy(nodes);
	}, []);

	const handleSubsections = (subsections) => {
		if (subsections.length <= 0) {
			return <></>;
		} else {
			return (
				<ul className='nav flex-column ps-3'>
					{subsections.map((subsection) => {
						return (
							<>
								<li key={"key2" + subsection.id} className='nav-item'>
									<a key={"key" + subsection.id} className='nav-link' href={"#" + subsection.id}>
										{subsection.innerHTML}
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
		<div id='scrollspy1' className='sticky-top'>
			<ul className='nav flex-column nav-pills menu-sidebar'>
				{ScrollSpy.map((section) => {
					return (
						<li key={"key3" + section.mainSection} className='nav-item'>
							<a key={"key4" +section.mainSection} className='nav-link' href={"#" + section.mainSection}>
								{section.innerHTML}
							</a>
							{handleSubsections(section.subsections)}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ScrollSpy;
