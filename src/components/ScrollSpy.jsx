import React, { useEffect, useState } from "react";

const ScrollSpy = () => {
	const [ScrollSpy, setScrollSpy] = useState([]);
	useEffect(() => {
		let nodes = [];
		let sectionMain = document.querySelectorAll("section.sectionMain");
		for (var main of sectionMain) {
			let text = main.querySelector("h2").innerText;
			let node = { mainID: main.id, subsections: [], text };
			let subsections = main.querySelectorAll("section.subsection");
			for (var subsection of subsections) {
				text = subsection.querySelector("h4").innerText;
				console.log(subsection.id);
				node.subsections.push({ id: subsection.id, text });
			}
			if (node.text) {
				nodes.push(node);
			}
		}
		setScrollSpy(nodes);
		let body = document.querySelector("body");
		body.setAttribute("data-mdb-spy", "scroll");
		body.setAttribute("data-mdb-target", "#scrollspy1");
		body.setAttribute("data-mdb-offset", "0");
	}, []);
	if (!ScrollSpy) return <div>Loading...</div>;
	return (
		<>
			<div class='accordion' id='accordionExample'>
				{ScrollSpy &&
					ScrollSpy.map((section) => {
						return (
							<div class='accordion-item'>
								<h2 class='accordion-button mb-0 text-dark bg-light' style={{ color: "#4f4f4f" }} id='headingOne'>
									<a
										style={{ fontSize: "1.0rem", color: "#4f4f4f" }}
										className='py-2 mx-2 my-1 px-2 h-100 w-100'
										href={"#" + section.mainID}>
										{section.text}
									</a>

									{section.subsections.length > 0 && (
										<span
											type='button'
											data-mdb-target={"#collapse" + section.mainID}
											data-mdb-toggle='collapse'
											aria-expanded='true'
											aria-controls={"collapse" + section.mainID}
											className='ms-auto float-right material-icons border rounded-pill h-100 caret my-2 mx-2'>
											expand_more
										</span>
									)}
								</h2>
								{section.subsections.length > 0 && (
									<div
										id={"collapse" + section.mainID}
										class='accordion-collapse collapse show'
										aria-labelledby='headingOne'
										data-mdb-parent='#accordionExample'>
										<ul class='accordion-body p-0 mb-0 list-group list-group-flush'>
											{section.subsections.map((subsection) => {
												return (
													<li style={{ listStyle: "none" }} className='list-group-item ms-0 p-0'>
														<a
															className=' my-2 ms-4 px-2'
															style={{ display: "block", color: "#4f4f4f" }}
															href={"#" + subsection.id}>
															{subsection.text}
														</a>
													</li>
												);
											})}
										</ul>
									</div>
								)}
							</div>
						);
					})}
			</div>
		</>
	);
};

export default ScrollSpy;
