import React, { useEffect, useState } from 'react';
import { motion, Transition, Variants } from 'framer-motion';

	const TypewriterAnimation: React.FC = () => {
		const textVariants: Variants = {
		  hidden: { opacity: 0 },
		  visible: {
		    opacity: 1,
		    transition: {
		      delay: 0.5,
		      staggerChildren: 0.08,
		    },
		  },
		};

		const charVariants: Variants = {
		  hidden: { opacity: 0, y: 20 },
		  visible: {
		    opacity: 1,
		    y: 0,
		  },
		};

	  const text = 'We offer so many things like! '; // The text you want to animate
	  const [displayText, setDisplayText] = useState('');

	  useEffect	(()=> {
	  	let currentIndex = 0;
	  	text.split('').map((letter) => {
	  		setDisplayText(letter);
	  		console.log(displayText)
	  			return letter;
	  	});

	  },[text])

	  // useEffect(() => {
	  //   let currentIndex = 0;
	  //   const intervalId = setInterval(() => {
	  //     setDisplayText((prevText) => {
	  //     	console.log(prevText);
	  //     	return prevText + text[currentIndex]

	  //     });
	  //     currentIndex++;

	  //     if (currentIndex === text.length) {
	  //       clearInterval(intervalId);
	  //     }
	  //   }, 100);

	  //   return () => {
	  //     clearInterval(intervalId);
	  //   };
	  // }, [text]);

	  return (
	    <motion.div
	      variants={textVariants}
	      initial="hidden"
	      animate="visible"
    	>
	      {displayText}
	    </motion.div>
  );
};

export	default	TypewriterAnimation;


// .split('').map((char, index) => (
// 	        <motion.span key={index} variants={charVariants}>
// 	          {char}
// 	        </motion.span>
// 	      ))