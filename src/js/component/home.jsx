import React from "react";
import { Nav } from '../component/nav.jsx';
import { Jumbotrom } from '../component/jumbotrom.jsx';
import { Card } from '../component/card.jsx';
import { Footer } from '../component/footer.jsx';

//create your first component
const Home = () => {
	return (
		<div>
			<Nav />
			<div className="container-fluid">
				<Jumbotrom />
				<div className="containerCards">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>	
			<Footer />	
		</div>
	);
};

export default Home;
