import DropdownBtn from './dropdown-btn/Dropdown-btn';
import DropdownMenu from './dropdown-menu/Dropdown-menu';

import { useToggle } from '../../hooks/useToggle';

const Dropdown = ({ setDropdownActive, isDropdownActive }) => {
	const { toggle: firstBtnClick, toggleOn: setFirstBtnClick } = useToggle(false);

	return (
		<>
			<DropdownMenu isDropdownActive={isDropdownActive} setDropdownActive={setDropdownActive} />

			<DropdownBtn
				setFirstBtnClick={setFirstBtnClick}
				firstBtnClick={firstBtnClick}
				isDropdownActive={isDropdownActive}
				setDropdownActive={setDropdownActive}
			/>
		</>
	);
};

export default Dropdown;
