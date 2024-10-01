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
			<div className="container">
				<Jumbotrom />
				<div className="container my-5">
					<div className="row">
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</div>
			</div>	
			<Footer />	
		</div>
	);
};

export default Home;