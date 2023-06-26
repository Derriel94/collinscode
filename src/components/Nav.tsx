import {useState} from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface NavProps {
  homeactive: boolean;
  contactactive: boolean;
  handlehomeactive: () => void;
  handlecontactactive: () => void;
  contentactive: boolean;
  handlecontentactive: () => void;
}

const Nav = ({
  homeactive,
  contactactive,
  handlehomeactive,
  handlecontactactive,
  contentactive,
  handlecontentactive,
}: NavProps) => {
	
	const [displayMobileNav, setDisplayMobileNav] = useState<boolean>(false);
	const [menuName, setMenuName] = useState<string>('Menu');
	const switchMobileNav = () => {
    if (displayMobileNav == false) {
      setDisplayMobileNav(true)
      setMenuName(`Close`)
    	} else {
      	setDisplayMobileNav(false)
      	setMenuName("Menu")
    	}
  	}


	return (
		<div>
			<motion.button onClick={switchMobileNav} className="mobilenavbutton">{menuName}</motion.button>
			{displayMobileNav
			?
			<motion.div 
			className="mobilenav">
				<motion.div
					initial={{x:-90,}}
      		animate={{x: 0}}
      		exit={{x: -90}}
      		transition={{delay: .3, duration: .5}}>
					<Link className={ `${homeactive ? "active" : ""} `} onClick={handlehomeactive} id="link"to="/">Home</Link>
				</motion.div>
				<motion.div
					initial={{x:-90}}
      		animate={{x: 0}}
      		exit={{x: -90}}
      		transition={{delay: .5, duration: .5}}>
					<Link className={ `${contactactive ? "active": "" } `} onClick={handlecontactactive} id="link"to="/contact">Contact</Link>
				</motion.div>
				<motion.div
				  initial={{x:-90}}
      		animate={{x: 0}}
      		exit={{x: -90}}
      		transition={{delay: .7, duration: .5}}>
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