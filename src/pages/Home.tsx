import React from "react";
import logoimg from './../assets/images/logo.png';
const Home = () => {

	return (
		<div className="left-column">
        	<div className="infocontainer">
          		<img className="logo" src={logoimg} />
          		<div className="skillbubbles">
            		<div id="light" className="skillbubble">Web Design</div>
            		<div id="med"  className="skillbubble">Applicatoin Dev</div>
            		<div id="dark" className="skillbubble">Web Dev</div>
            		<div id="med" className="skillbubble">TypeScript</div>
            		<div id="light" className="skillbubble">Node</div>
            		<div id="dark" className="skillbubble">Google</div>
            		<div id="dark" className="skillbubble">Content Creation</div>
            		<div id="med" className="skillbubble">Responsive</div>
            		<div id="light" className="skillbubble">Efficient</div>
          		</div>
          		<button className="button skillbubble">Learn More</button>
        	</div>
        </div>
		);
}

export default Home