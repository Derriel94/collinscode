import React,{ useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import images from "./../components/Images.tsx";

const Content = () => {

	const [largeImg, setLargeImg] = useState("")<string>;
	const [title, setTitle] = useState(" ")<string>;
	const [start, setStart] = useState(false)<boolean>;
	let text = `  Content  Creation`;
	const displayImage = (imgsrc):void => {
		setLargeImg(imgsrc);
		setStart(true);
	}

	useEffect(()=>{
		if (start) {

		}
			let charIndex = 0;
			
			const typingTimeInterval = setInterval(() => {

				setTitle(((prevLetter) => {
				return prevLetter + text.charAt(charIndex)
				}));
				charIndex++;

				if (charIndex === text.length) {
					clearInterval(typingTimeInterval);
				}
			}, 200)

			return () => {
				clearInterval(typingTimeInterval);
			}
	
	
	},[])
	return (
			<div className="content">
				<motion.div className="contentpuzzle">
					{images.map((image, index)=> {
						return <motion.div
							onClick={()=>displayImage(images[index])}
							whileTap={{rotate: "360deg"}}
							transition={{}}
							key={index}
							className="imagebackground">
									<motion.img 
									src={image} 
									initial={{opacity: 0}}
									animate={{opacity: 1}}
									transition={{ delay: 0, duration: 1.5}}
									whileHover={{ scale: 1.2, x: "15px",y: "15px"}}
									/>
								</motion.div>
					})}
				</motion.div>
				<AnimatePresence>
				<motion.div
				initial={{ opacity: 0 }}
        		animate={{ opacity: 1 }}
        		exit={{ opacity: 0 }} 
				style={{color: "black"}} id="typewriter" className="typewriter">{title}</motion.div>
				</AnimatePresence>
				<motion.div 
				initial={{x:"-500px"}}
				animate={{x:0}}
				transition={{ delay: 0, duration: 1.5}}
				className="largeImage">
					{largeImg ? <motion.img src={`./${largeImg}`} /> : <motion.img src="./icon.png" />}
				</motion.div>
			</div>
		);
};

export default Content;

