import React,{useState, useEffect} from 'react';
import { Link } from "react-router-dom";


const Nav = ({homeactive, contactactive, 
			  handlehomeactive, handlecontactactive, 
			  contentactive, handlecontentactive}) => {
	
	return (
		<div className="nav">
				<div>
					<Link className={ `${homeactive ? "active" : ""} `} onClick={handlehomeactive} id="link"to="/">Home</Link>
				</div>
				<div>
					<Link className={ `${contactactive ? "active": "" } `} onClick={handlecontactactive} id="link"to="/contact">Contact</Link>
				</div>
				<div>
					<Link className={ `${contentactive ? "active": "" } `} onClick={handlecontentactive} id="link"to="/content">Content</Link>
				</div>
			</div>
		);
};

export default Nav;