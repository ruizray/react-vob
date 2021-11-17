import React from "react";
import { Card,  CardHeader } from "reactstrap";
const QuickLinks = ({ header, links }) => {
	return (
	
		<Card style={{ borderRadius: "0px" }} className={"shadow-0 border mx-auto my-4 quickLinksBox"}>
			<CardHeader tag="h3" className={"quickLinkHeader"}>{header} </CardHeader>
			<ul class='list-group list-group-flush'>
				{links &&
					links.map((link) => {
						return (
							<li class='list-group-item'>
								<a href={link.url}>{link.linkText}</a>
							</li>
						);
					})}
			</ul>
		</Card>
	);
};

export default QuickLinks;
