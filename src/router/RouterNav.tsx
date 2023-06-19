import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import App from "./../App.tsx";
import Contact from "./../pages/Contact.tsx";
import Home from "./../pages/Home.tsx";

const RouterNav = () => {

	return (
			<Routes className="donotshowroutes">
				<Route path="/" element={<Navigate to='home'/>} />
		      	<Route path="/contact" element={<Contact />} />
		      	<Route path="/home" element={<Home />}/>
	      	</Routes>
		);
};

export default RouterNav;
