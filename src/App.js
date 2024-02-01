import './app.scss';

import { useToggle } from './hooks/useToggle';

import { staticData } from './static-data/static-data';

import ConnectingTheCurb from './components/sections/Connecting-the-curb/Connecting-the-curb';
import GetToKnow from './components/sections/get-to-know/Get-to-know';
import CollectData from './components/sections/collect-data/Collect-data'
import TrustedByLeaders from './components/sections/trusted-by-leaders/Trusted-by-leaders'
import CurbManagement from './components/sections/curb-management/Curb-management';
import PowerUp from './components/sections/power-up/Power-up';
import OurBlog from './components/sections/our-blog/Our-blog';
import EightSection from './components/sections/lets-find-out/Lets-find-out';
import Footer from './components/footer/Footer';
import Dropdown from './components/dropdown/Dropdown';
import Header from './components/header/Header';

function App() {
	const { setToggle: setHeaderBtnHover, toggle: headerBtnHover } = useToggle(false);
	const { toggle: isDropdownActive, toggleFlip: setDropdownActive } = useToggle(false);

	return (
		<div className="app">
			<Header setDropdownActive={setDropdownActive} setHeaderBtnHover={setHeaderBtnHover} />
			<main className="main">
				<ConnectingTheCurb headerBtnHover={headerBtnHover} />
				<GetToKnow hrefId={staticData.hrefData[0].id} />
				<CollectData />
				<TrustedByLeaders hrefId={staticData.hrefData[3].id} />
				<CurbManagement />
				<PowerUp />
				<OurBlog hrefId={staticData.hrefData[4].id} />
				<EightSection hrefId={staticData.hrefData[2].id} />
			</main>
			<Footer hrefData={staticData.hrefData} />
			<Dropdown isDropdownActive={isDropdownActive} setDropdownActive={setDropdownActive} />
		</div>
	);
}

export default App;
