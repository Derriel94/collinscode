import React,{useState, useEffect} from 'react';
import { Link } from "react-router-dom";


const Nav = () => {
	const [homeactive, setHomeActive] = useState<boolean>(true);
	const [contactactive, setContactActive] = useState<boolean>(false);

	const handlehomeactive =()=> {
			setContactActive(false);
			setHomeActive(true);
	}

	const handlecontactactive =()=> {
			setContactActive(true);
			setHomeActive(false);
	
	}
	useEffect(()=>{
		if (contactactive == true) {
			setHomeActive(false);
			setContactActive(true);
		}
		if (homeactive == true) {
			setHomeActive(true);
			setContactActive(false);
		}
		
	}, [contactactive, homeactive])
	return (
		<div className="nav">
				<div >
					<Link className={ `${homeactive ? "active" : ""} `} onClick={handlehomeactive} id="link"to="/">Home</Link>
				</div>
				<div>
					<Link className={ `${contactactive ? "active": "" } `} onClick={handlecontactactive} id="link"to="/contact">Contact</Link>
				</div>
			</div>
		);
};

export default Nav;