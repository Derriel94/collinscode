import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import App from "./../App.tsx";
import Contact from "./../pages/Contact.tsx";
import Content from "./../pages/Content.tsx";
import Home from "./../pages/Home.tsx";

const RouterNav = ({homeactive, contactactive, 
					handlehomeactive, handlecontactactive,
					contentactive, handlecontentactive}) => {

	return (
			<Routes className="donotshowroutes">
				<Route path="/" element={<Navigate to='home'/>} />
		      	<Route path="/contact" element={<Contact />} />
		      	<Route path="/content" element={<Content />} />
		      	<Route path="/home" element={<Home 
									          homeactive={homeactive} 
									          handlehomeactive={handlehomeactive} 
									          contactactive={contactactive}
									          handlecontactactive={handlecontactactive}/>}/>
	      	</Routes>
		);
};

export default RouterNav;
