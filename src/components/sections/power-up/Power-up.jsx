import styles from './power-up.module.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const SixSection = () => {
	return (
		<div className={`container ${styles.power_up_container}`}>
			<section className={styles.section_power_up}>
				<article className={styles.power_up__left_block}>
					<AnimationOnScroll animateIn="animate__fadeIn">
						<h2 className={styles.left_block__title}>Power up the future of cities</h2>
					</AnimationOnScroll>

					<AnimationOnScroll delay={100} animateIn="animate__fadeIn">
						<p className={styles.left_block__text}>
							We're building a new paradigm of urban mobility that understands and adapts to the world around
							it. We empower cities with dynamic tools to make streets safer, less congested, and more
							productive.
						</p>
					</AnimationOnScroll>
				</article>

				<article className={styles.power_up__right_block}>
					<AnimationOnScroll delay={200} animateIn="animate__fadeIn">
						<p className={styles.right_block__text}>
							Read more on how we’re improving transportation on our Impact page.
						</p>
					</AnimationOnScroll>

					<AnimationOnScroll animateIn="animate__rubberBand">
						<button className={styles.right_block__btn} type="button">
							Social impact
						</button>
					</AnimationOnScroll>
				</article>
			</section>
		</div>
	);
};

export default SixSection;
