import styles from './trusted-by-leaders.module.scss';

import { staticData } from '../../../static-data/static-data';

import { AnimationOnScroll } from 'react-animation-on-scroll';

const TrustedByLeaders = ({ hrefId }) => {
	return (
		<div className="container">
			<section id={hrefId} className={styles.section_trusted_by}>
				<h2 className={styles.trusted_by__title}>Trusted by leaders in urban transportation</h2>
				<p className={styles.trusted_by__top_text}>
					Transparency and quality are the basis of our work, and we've helped cities and vendors across the
					United States.
				</p>

				<p className={styles.trusted_by__bottom_text}>Here's who we've worked with</p>

				<ul className={styles.trusted_by__logo_list}>
					{staticData.trustByData.map((el, index) => {
						const delay = (index % 4) * 100;

						return (
							<li key={index} className={styles.trusted_by__logo_list__item}>
								<AnimationOnScroll delay={delay} animateIn="animate__wobble">
									<svg className={styles.trusted_by__logo__icon}>
										<use xlinkHref={el.path} />
									</svg>
								</AnimationOnScroll>
							</li>
						);
					})}
				</ul>
			</section>
		</div>
	);
};

export default TrustedByLeaders;
