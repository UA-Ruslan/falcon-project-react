import styles from './header.module.scss';

import sprite from '../../img/sprites/sprite.svg';

import Navbar from './navbar/Navbar';

const Header = ({ setHeaderBtnHover, setDropdownActive }) => {
	const onHoverHeaderBtn = () => {
		setHeaderBtnHover(true);
	};
	const outHoverHeaderBtn = () => {
		setHeaderBtnHover(false);
	};
	return (
		<header className={styles.header}>
			<div className="container">
				<div className={styles.header_content}>
					<div className={styles.logo_wrapper}>
						<a href="/" className={styles.logo_link}>
							<svg className={styles.logo_icon}>
								<use xlinkHref={`${sprite}#logo`} />
							</svg>
						</a>
					</div>
					<article className={styles.nav_wrapper}>
						<Navbar setDropdownActive={setDropdownActive} />

						<button
							onMouseEnter={onHoverHeaderBtn}
							onMouseLeave={outHoverHeaderBtn}
							className={styles.btn_book_a_demo}
							type="button"
						>
							book a demo
						</button>
					</article>
				</div>
			</div>
		</header>
	);
};

export default Header;
