import React from "react";
import Task from "./task";






//create your first component
const Home = () => {
	return (
		<div className="container-fluid bg-dark" style={{height: "700px"}}>
			<Task/>
		</div>
	);
};

export default Home;
