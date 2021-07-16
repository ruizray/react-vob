import React, { useEffect } from "react";
const LastUpdated = (props) => {
	var date = new Date();
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	return (
		<>
			{props.children}
			<p style={{ fontSize: 16, textAlign: "end" }}>
				{"Page last updated on " + months[date.getMonth()].toString() + " " + date.getDate() + " " + date.getFullYear()}
			</p>
		</>
	);
};

export default LastUpdated;
