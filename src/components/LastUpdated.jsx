import React, { useEffect, useState } from "react";
const LastUpdated = ({ children, lastUpdated }) => {
	const months = [" ", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	const [updated, setUpdated] = useState();
	useEffect(() => {
		if(lastUpdated){
			console.log("Last published", lastUpdated);
			var dateFormat = lastUpdated.split("T");
			dateFormat = dateFormat[0].split("-");
			setUpdated(months[dateFormat[1][1]] + " " + dateFormat[2] + " " + dateFormat[0]);
		}
		
	}, [lastUpdated]);

	return (
		<>
			{children}
			<p style={{ fontSize: 16, textAlign: "end" }}>{"Page last updated on " + updated}</p>
		</>
	);
};

export default LastUpdated;
