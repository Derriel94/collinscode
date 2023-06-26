import { Route, Routes, Navigate } from "react-router-dom";
import Contact from "./../pages/Contact.tsx";
import Content from "./../pages/Content.tsx";
import Home from "./../pages/Home.tsx";

interface RouterProps { 
	contactactive: boolean;
	handlecontactactive: () => void;
};


const RouterNav = ({contactactive, 
					 handlecontactactive}: RouterProps) => {

	return (
			<Routes>
				<Route path="/" element={<Navigate to='home'/>} />
		      	<Route path="/contact" element={<Contact />} />
		      	<Route path="/content" element={<Content />} />
		      	<Route path="/home" element={<Home 
									          contactactive={contactactive}
									          handlecontactactive={handlecontactactive}/>}/>
	      	</Routes>
		);
};

export default RouterNav;
