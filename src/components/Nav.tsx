import React,{useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";



const Nav = ({homeactive, contactactive, 
			  handlehomeactive, handlecontactactive, 
			  contentactive, handlecontentactive}) => {
	
	const [displayMobileNav, setDisplayMobileNav] = useState<boolean>(false);
	const [menuName, setMenuName] = useState<string>('Menu');
	const switchMobileNav = () => {
    if (displayMobileNav == false) {
      setDisplayMobileNav(true)
    	} else {
      	setDisplayMobileNav(false)
    	}
  	}

  	const mobileNavVarient = {
  		initial: { opacity: 0, scale: 0, y: 0, transition: {
      	duration: 0.3,
      	delay: 0,
      	ease: "easeInOut"}},
  		animate: { opacity: 1, scale: 1, x: 0,  transition: {
      	duration: 0.3,
      	delay: 0,
      	ease: "easeInOut"}},
  		exit: { opacity: 0, scale: 0 ,  transition: {
									      	duration: 0.3,
									      	delay: 0,}}

  	};


	return (
		<div>
			<motion.button onClick={switchMobileNav} className="mobilenavbutton">MENU</motion.button>
			{displayMobileNav
			?
			<motion.div 
			className="mobilenav"
			initial="initial"
      		animate="animate"
      		exit="exit"
      		variants={mobileNavVarient}>
				<motion.div>
					<Link className={ `${homeactive ? "active" : ""} `} onClick={handlehomeactive} id="link"to="/">Home</Link>
				</motion.div>
				<motion.div>
					<Link className={ `${contactactive ? "active": "" } `} onClick={handlecontactactive} id="link"to="/contact">Contact</Link>
				</motion.div>
				<motion.div>
					<Link className={ `${contentactive ? "active": "" } `} onClick={handlecontentactive} id="link"to="/content">Content</Link>
				</motion.div>
			</motion.div>
			:
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
			}
		</div>
		);
};

export default Nav;