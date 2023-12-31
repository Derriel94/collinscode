import { motion } from "framer-motion";
import Slider from './../components/Slider.tsx';
import { Link } from "react-router-dom";

interface HomeProps { 
	contactactive: boolean;
	handlecontactactive: () => void;
};

const Home = ({contactactive, handlecontactactive}:HomeProps) => {

	return (
		<motion.div 
			className="home"
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			transition={{ delay: 0, duration: 2.5}}
			>
	        	<div className="infocontainer">
	          		<motion.img 
	          		animate={{ scale: 1.3 }}
                	transition={{ bounce: .8, duration: 2 }}
	          		className="logo" src="./cc.png" />
	          			<motion.img 
	          		animate={{ scale: 2 }}
                	transition={{bounce: .8, duration: 2}}
	          		className="mobilelogo" src="./icon2.png" />
	          		<div className="skillbubbles">
	          		<motion.div
	          		initial={{opacity: 0}}
					animate={{opacity: 1}}
					transition={{ delay: .5, duration: 2.5}}>
	          			<motion.div
	          				initial={{opacity: 0, marginLeft: "20px"}}
							animate={{opacity: 1, marginLeft: 0}}
							transition={{ delay: 1.2, duration: 2.5}}>I am committed to delivering clean 
	          			and concise code.
	          			</motion.div>
	          			<motion.div
  							initial={{opacity: 0, marginLeft: "20px"}}
							animate={{opacity: 1, marginLeft: 0}}
							transition={{ delay: 1.8, duration: 2.5}}>
	          			My focus on precision and efficiency enables me to create 
	          			exceptional websites that elevate brands, optimize performance, 
	          			and captivate audiences.
	          			</motion.div> 
	          			<motion.div
	          				initial={{opacity: 0, marginLeft: "20px"}}
							animate={{opacity: 1, marginLeft: 0}}
							transition={{ delay: 2, duration: 2.5}}>Trust me for streamlined digital solutions 
	        	  		that make a lasting impact.
	        	  		</motion.div>
	        	  		</motion.div>
	          		</div>
	          		<Link to="/contact" className={`button skillbubble ${contactactive ? "active": "" } ` } onClick={handlecontactactive}>Learn More</Link>
	        </div>
	      	<Slider />
	     <motion.div id="info"
	     initial={{opacity: 0}}
		animate={{opacity: 1}}
		transition={{ delay: 1, duration: 3, repeat: Infinity}}>Slide For More!</motion.div>
		
        </motion.div>
		);
}

export default Home