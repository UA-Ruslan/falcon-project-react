import { useState } from 'react';

export const useToggle = ({ initialToggle = false }) => {
	const [toggle, setToggle] = useState(initialToggle);

	const toggleOn = () => setToggle(true);
	const toggleOff = () => setToggle(false);
	const toggleFlip = () => setToggle((prevToggle) => !prevToggle);

	return {
		toggle,
		setToggle,
		toggleOn,
		toggleOff,
		toggleFlip,
	};
};
