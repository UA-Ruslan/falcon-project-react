import styles from './dropdown-btn.module.scss';

const DropdownBtn = ({ setDropdownActive, isDropdownActive, setFirstBtnClick, firstBtnClick }) => {

	const dropdownBtnAction = () => {
		setDropdownActive(!isDropdownActive);
		setFirstBtnClick();
	};

	const btnClasses = () => {
		switch (true) {
			case isDropdownActive:
				return `${styles.dropdown_btn} ${styles.dropdown_btn__active}`;
			case !firstBtnClick:
				return `${styles.dropdown_btn} ${styles.dropdown_btn__first_load}`;
			case firstBtnClick && !isDropdownActive:
				return `${styles.dropdown_btn} ${styles.dropdown_btn__inactive}`;
			default:
				return styles.dropdown_btn;
		}
	};

	return (
		<article className={styles.dropdown_btn_wrapper}>
			<button onClick={dropdownBtnAction} type="button" className={btnClasses()}>
				<span className={styles.btn_bottom_line}></span>
			</button>
		</article>
	);
};

export default DropdownBtn;
