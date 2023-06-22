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
			<motion.div drag="x" dragConstraints={{right: 0, left: -width}} className="innercarousel">
				{ProjectsList.projects.map(project=>{
					return (
						<motion.div className="item">
							<motion.div
								transition={{delay: 0, duration: 1, type: "spring"}}
								whileHover={{ scale: 1.3, opacity: 1 }}
							>
							<img id="img "src={project.imgUrl} key={`${project.id} ${project.projectName}`} alt="" />
							<a href={project.projectUrl} target="_blank" rel="noreferrer" className="projecttitle">{project.projectName}</a>
							</motion.div>
							
						</motion.div>
						);
				})}
			</motion.div>
		</motion.div>
	)
}