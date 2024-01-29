import styles from './curb-management.module.scss';
import curb_management_logo from '../../../img/sections/curb-management/curb-management-logo.webp';

const CurbManagement = () => {
	return (
		<div className="container">
			<section className={styles.section_curb_management}>
				<h3 className={styles.curb_management__text_content}>
					<span className={styles.text_content__before_position}>C</span>urb management can help ensure that
					curb space is allocated more equitably, providing access to this limited resource to all street
					users, including our most vulnerable.”
				</h3>
				<figure className={styles.curb_management__logo_wrapper}>
					<img
						className={styles.curb_management__logo}
						src={curb_management_logo}
						width={138}
						height={138}
						alt="Municipal transportation agency logo"
					/>

					<figcaption className={styles.curb_management__logo_content}>
						<span className={styles.curb_management__logo_title}>San Francisco</span>
						<p className={styles.curb_management__logo_text}>Municipal Transportation Agency</p>
					</figcaption>
				</figure>
			</section>
		</div>
	);
};

export default CurbManagement;
