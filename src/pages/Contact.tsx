import { useState, useRef, ChangeEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";


const Contact = () => {
	const [name, setName] = useState<string>('Cool Client or Employer');
	const [email, setEmail] = useState<string>('cool@email.com');
	const [message, setMessage] = useState<string>(`cool web/app/content idea, set your price and we will talk. Potential employer?`);
	const form = useRef<HTMLInputElement>();

	const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    	setName(e.target.value);
  	}
  	const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    	setEmail(e.target.value);
  	}
  	const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    	setMessage(e.target.value);
  	}
  		
  	const handleSubmit = async (e) => {
  		e.preventDefault();
 		try {
 				//import.meta.env.
 			const data = await emailjs.sendForm(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID,form.current,import.meta.env.VITE_PUB_ID);
 			console.log('Success', data);
 			alert('Your message was sent and I will be in touch shortley')
 			location.reload();
 		} catch (error) {	
 			console.log('error', error);
 		}
 		
  	}

	return ( 
		<motion.div 
			className="contact"
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			transition={{ delay: 0, duration: 2.5}}>
			<motion.div className="contactpageleftside"
						initial={{x: -350}}
						animate={{x: 25}}
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
				<form onSubmit={handleSubmit} ref={form} className="contactform">
					<div className="contactname"><div>★</div> Leave A Message <div>★</div></div>
					<input placeholder={name} id="from_name" name="from_name" className="name"onChange={(e)=>handleNameChange(e)}/>
					<input placeholder={email} id="from_email" name="from_email" className="email"onChange={(e)=>handleEmailChange(e)}/>
					<textarea placeholder={message} name="message" id="message" className="message"onChange={(e)=>handleMessageChange(e)}/>					
					<input type="submit" value="Send" className="submit" />
				</form>
			</motion.div>
			<div className="mobilecontact">
				<h1>469.891.8404</h1>
				<h2>derrielcollins96@gmail.com</h2>
			</div>
		</motion.div>
		);

};

export default Contact;