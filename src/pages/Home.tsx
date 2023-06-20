import React from "react";
import { motion } from "framer-motion";
import logoimg from './../assets/images/logo.png';
import Slider from './../components/Slider.tsx';
import { Link } from "react-router-dom";
const Home = ({contactactive, handlecontactactive}) => {

	return (
		<motion.div 
			className="home"
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			transition={{ delay: 0, duration: 2.5}}
			>
			<div className="left-column">
	        	<div className="infocontainer">
	          		<motion.img 
	          		animate={{ scale: 1.3 }}
                	transition={{ type: "spring",bounce: .8, duration: 5, repeat: Infinity }}
	          		className="logo" src={logoimg} />
	          		<div className="skillbubbles">
	          			<div>
	            		<div id="light" className="skillbubble">Web Design</div>
	            		<div id="med"  className="skillbubble">Applicatoin Dev</div>
	            		<div id="dark" className="skillbubble">Web Dev</div>
	            		</div>
	            		<div>
	            		<div id="med" className="skillbubble">TypeScript</div>
	            		<div id="light" className="skillbubble">Node</div>
	            		<div id="dark" className="skillbubble">Google</div>
	            		</div>
	            		<div>
	            		<div id="dark" className="skillbubble">Content</div>
	            		<div id="med" className="skillbubble">Responsive</div>
	            		<div id="light" className="skillbubble">Efficient</div>
	          			</div>
	          		</div>
	          		<Link to="/contact" className={`button skillbubble ${contactactive ? "active": "" } ` } onClick={handlecontactactive}>Learn More</Link>
	        	</div>
	        </div>
	      	<Slider />
        </motion.div>
		);
}

export default Home