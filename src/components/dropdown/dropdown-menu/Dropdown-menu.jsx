import Navbar from '../../navbar/Navbar';
import styles from './dropdown-menu.module.scss';

const DropdownMenu = ({ isDropdownActive, setDropdownActive }) => {
	return (
		<aside
			className={
				!isDropdownActive ? styles.dropdown_menu_wrapper : `${styles.dropdown_menu_wrapper} ${styles.active}`
			}
		>
			<Navbar setDropdownActive={setDropdownActive} />
		</aside>
	);
};

export default DropdownMenu;
