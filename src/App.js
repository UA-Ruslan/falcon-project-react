import './app.scss';

import { useToggle } from './hooks/useToggle'

import { hrefData } from './constants/href-data'

import ConnectingTheCurb from './components/sections/Connecting-the-curb/Connecting-the-curb';
import SecondSection from './components/second-section/Second-section';
import ThirdSection from './components/third-section/Third-section';
import ForthSection from './components/forth-section/Forth-section';
import FifthSection from './components/fifth-section/Fifth-section';
import SixSection from './components/six-section/Six-section';
import SevenSection from './components/seven-section/Seven-section';
import EightSection from './components/eigh-section/Eight-section';
import Footer from './components/footer/Footer';
import Dropdown from './components/dropdown/Dropdown';
import Header from './components/header/Header';

function App() {
	const { setToggle: setHeaderBtnHover, toggle: headerBtnHover } = useToggle(false);
	const { toggle: isDropdownActive, toggleFlip: setDropdownActive } = useToggle(false);

	return (
		<div className="app">
			<Header setDropdownActive={setDropdownActive} setHeaderBtnHover={setHeaderBtnHover} />
			<div className="main">
				<ConnectingTheCurb headerBtnHover={headerBtnHover} />
				<SecondSection hrefId={hrefData[0].id} />
				<ThirdSection />
				<ForthSection hrefId={hrefData[3].id} />
				<FifthSection />
				<SixSection />
				<SevenSection hrefId={hrefData[4].id} />
				<EightSection hrefId={hrefData[2].id} />
			</div>
			<Footer hrefData={hrefData} />
			<Dropdown isDropdownActive={isDropdownActive} setDropdownActive={setDropdownActive} />
		</div>
	);
}

export default App;
