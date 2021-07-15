export function generateScrollSpy() {
	let nodes = [];
	let sectionMain = document.querySelectorAll("section.sectionMain");

	for (var main of sectionMain) {
		let innerHTML = main.querySelector("h1").innerText;

		let node = { mainSection: main.id, subsections: [], innerHTML };
		let subsections = main.querySelectorAll("section.subsection");
		for (var subsection of subsections) {
			innerHTML = subsection.querySelector("h3").innerText;
			node.subsections.push({ id: subsection.id, innerHTML });
		}
		nodes.push(node);
	}
	return nodes;
}
