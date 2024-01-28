import styles from './trusted-by-leaders.module.scss';

import icon1 from '../../../img/sections/trusted-by-leaders/raleigh.webp';
import icon2 from '../../../img/sections/trusted-by-leaders/fdot.webp';
import icon3 from '../../../img/sections/trusted-by-leaders/us-davis.webp';
import icon4 from '../../../img/sections/trusted-by-leaders/city-of-aspen.webp';
import icon5 from '../../../img/sections/trusted-by-leaders/walker.webp';
import icon6 from '../../../img/sections/trusted-by-leaders/california.webp';
import icon7 from '../../../img/sections/trusted-by-leaders/premium-parking.webp';
import icon8 from '../../../img/sections/trusted-by-leaders/signature.webp';

import { AnimationOnScroll } from 'react-animation-on-scroll';

const TrustedByLeaders = ({ hrefId }) => {
	return (
		<section id={hrefId} className={styles.forthSectionWrapper}>
			
				<h2>
					Trusted by leaders in <br /> urban transportation
				</h2>

			<div className={styles.pWrapper1}>
				<p>
					Transparency and quality are the basis of our work, and we've helped <br />
					cities and vendors across the United States.
				</p>
			</div>
			<div className={styles.pWrapper2}>
				<p>Here's who we've worked with</p>
			</div>
			<div className={styles.iconWrapper}>
				<div className={styles.iconBlockWrapper}>
					<div className={styles.iconWrapper}>
						<AnimationOnScroll animateIn="animate__wobble">
							<img src={icon1} width="100%" height="100%" alt="icon" />
						</AnimationOnScroll>
					</div>
					<div className={styles.iconWrapper}>
						<AnimationOnScroll delay={100} animateIn="animate__wobble">
							<img src={icon2} width="100%" height="100%" alt="icon" />
						</AnimationOnScroll>
					</div>
					<div className={styles.iconWrapper}>
						<AnimationOnScroll delay={200} animateIn="animate__wobble">
							<img src={icon3} width="100%" height="100%" alt="icon" />
						</AnimationOnScroll>
					</div>
					<div className={styles.iconWrapper}>
						<AnimationOnScroll delay={300} animateIn="animate__wobble">
							<img src={icon4} width="100%" height="100%" alt="icon" />
						</AnimationOnScroll>
					</div>
				</div>
				<div className={styles.iconBlockWrapper}>
					<div className={styles.iconWrapper}>
						<AnimationOnScroll animateIn="animate__wobble">
							<img src={icon5} width="100%" height="100%" alt="icon" />
						</AnimationOnScroll>
					</div>
					<div className={styles.iconWrapper}>
						<AnimationOnScroll delay={100} animateIn="animate__wobble">
							<img src={icon6} width="100%" height="100%" alt="icon" />
						</AnimationOnScroll>
					</div>
					<div className={styles.iconWrapper}>
						<AnimationOnScroll delay={200} animateIn="animate__wobble">
							<img src={icon7} width="100%" height="100%" alt="icon" />
						</AnimationOnScroll>
					</div>
					<div className={styles.iconWrapper}>
						<AnimationOnScroll delay={300} animateIn="animate__wobble">
							<img src={icon8} width="100%" height="100%" alt="icon" />
						</AnimationOnScroll>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TrustedByLeaders;
