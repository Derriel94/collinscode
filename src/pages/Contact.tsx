import { useState, ChangeEvent } from "react";
import { motion } from "framer-motion";


const Contact = () => {
	const [name, setName] = useState<string>('Cool Client or Employer');
	const [email, setEmail] = useState<string>('cool@email.com');
	const [message, setMessage] = useState<string>(`cool web/app/content idea, set your price and we will talk. Potential employer?`);

	const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    	setName(e.target.value);
  	}
  	const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    	setEmail(e.target.value);
  	}
  	const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    	setMessage(e.target.value);
  	}
  	const handleSubmit = () => {
 
  	}

	return ( 
		<motion.div 
			className="contact"
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			transition={{ delay: 0, duration: 2.5}}>
			<motion.div className="contactpageleftside"
						initial={{x: -350}}
						animate={{x: 100}}
						transition={{ delay: 0, duration: 2.5, type: "spring", bounce: .8}}>
			<motion.video 
				initial={{scale: 1}}
				animate={{scale: 1.2}}
			   	transition={{          // Animation transition settings
			         duration: 1,
			         repeat: Infinity,      // Repeat the animation indefinitely
			         repeatType: 'reverse',
			         bounce: 1  // Reverse the animation on each repeat
			        }}				
			    id="video"
				autoPlay 
				loop
				muted 
				src="dud.mp4">
			</motion.video>
			</motion.div>
			<motion.div className="contactpagerightside"
						initial={{x: 350}}
						animate={{x: 0}}
						transition={{ delay: 0, duration: 2.5, type: "spring", bounce: .8}}>
				<div className="contactform">
					<div className="contactname"><div>★</div> Leave A Message <div>★</div></div>
					<input placeholder={name} className="name"onChange={(e)=>handleNameChange(e)}/>
					<input placeholder={email} className="email"onChange={(e)=>handleEmailChange(e)}/>
					<textarea placeholder={message} className="message"onChange={(e)=>handleMessageChange(e)}/>					
					<input type="submit" value="submit" onClick={handleSubmit} className="submit" />
				</div>
			</motion.div>
			<div className="mobilecontact">
				<h1>469.891.8404</h1>
				<h2>derrielcollins96@gmail.com</h2>
			</div>
		</motion.div>
		);

};

export default Contact;