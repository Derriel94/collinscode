import { motion } from "framer-motion";
import { useRef, useEffect, useState} from "react";
import ProjectsList from "./../assets/ProjectsList.tsx";

export default function Slider() {
	const [width, setWidth] = useState<number>(0);
	const carousel = useRef<HTMLInputElement>(null);
	useEffect(()=>{
		setWidth(carousel.current!.scrollWidth - carousel.current!.offsetWidth);
	},[])
	return (	
		<motion.div ref={carousel} whileTap={{cursor: "grabbing"}} className="carousel">
			<motion.div 
			initial={{boxShadow: "0px 0px 30px 10px RGB(0,125,186)"}}
			animate={{boxShadow: "0px 0px 0px 5px RGB(0,125,186)"}}
			transition={{ type: "spring", bounce: .8, duration: 5, repeat: Infinity}}
			drag="x" dragConstraints={{right: 0, left: -width}} className="innercarousel">
				{ProjectsList.projects.map(project=>{
					return (
						<motion.div className="item">
							<motion.div
								transition={{delay: 0, duration: 1, type: "spring"}}
								whileHover={{ scale: 1.1, opacity: 1 }}
							>
							<motion.img id="img "src={project.imgUrl} key={`${project.id} ${project.projectName}`} alt="" />
							<div><a href={project.projectUrl} target="_blank" rel="noreferrer" className="projecttitle">{project.projectName}</a></div>
							</motion.div>
							
						</motion.div>
						);
				})}

			</motion.div>

		</motion.div>
	)
}