import React from 'react';
import Scroller from '../../components/Scroller';
import ContactButton from '../../components/ContactButton';
import Hero from '../../components/Hero/hero';
import SelectedWorks from '../../components/PortfolioSection/portfolioSection';
import ServicesSection from '../../components/Services/services';

function Home() {
	return (
		<div className="border-black dark:border-gray-500 border-x-2">
			<Hero />
			<Scroller />
			<SelectedWorks />
			<ServicesSection />
			<ContactButton />
		</div>
	);
}

export default Home;
