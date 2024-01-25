import styles from './navbar.module.scss';
import { hrefData } from '../../../constants/href-data';
const Navbar = ({ setDropdownActive }) => {
	const hrefList = hrefData.map((el) => {
		const closeDropdown = () => {
			setDropdownActive(false);
		}
		return (
			<li onClick={closeDropdown} key={el.id} className={styles.navbar_list__item}>
				<a href={`#${el.id}`} className={styles.navbar_list__link}>
					{el.title}
				</a>
			</li>
		);
	});
	return <ul className={styles.navbar_list}>{hrefList}</ul>;
};

export default Navbar;
