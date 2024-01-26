import styles from './connecting-the-curb.module.scss';

import { useToggle } from '../../../hooks/useToggle';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import car_1 from '../../../img/sections/connecting-the-curb/car-1.webp';
import car_2 from '../../../img/sections/connecting-the-curb/car-2.webp';
import car_3 from '../../../img/sections/connecting-the-curb/car-3.webp';
import block from '../../../img/sections/connecting-the-curb/yellow-block.webp';
import block1 from '../../../img/sections/connecting-the-curb/yellow-block1.webp';

const ConnectingTheCurb = ({ headerBtnHover }) => {
	const { setToggle: setBookADemoBtnHover, toggle: bookADemoBtnHover } = useToggle(false);

	const mouseOverBookADemo = () => {
		setBookADemoBtnHover(true);
	};
	const mouseOutBookADemo = () => {
		setBookADemoBtnHover(false);
	};

	return (
		<div className="container">
			<section className={styles.section_connecting_the_curb}>
				<h1 className={styles.connecting_the_curb__title}>Connecting the curb to new insights</h1>

				<p className={styles.connecting_the_curb__text}>
					Real-time curb data for smart cities. Measure occupancy, analyze demand, and manage curb space with
					the right tools.
				</p>

				<AnimationOnScroll delay={300} initiallyVisible={true} animateIn="animate__shakeX">
					<button
						onMouseOver={mouseOverBookADemo}
						onMouseOut={mouseOutBookADemo}
						className={styles.btn_book_a_demo}
					>
						Book a demo
					</button>
				</AnimationOnScroll>
			</section>

			<article className={styles.animation_img_block}>
				<img
					className={
						!headerBtnHover
							? `${styles.car_top_left} ${styles.common_img_style}`
							: `${styles.car_top_left} ${styles.common_img_style} ${styles.car_top_left_active}`
					}
					src={car_1}
					alt="Yellow Car"
				/>
				<img
					className={
						!headerBtnHover
							? `${styles.car_bottom_middle} ${styles.common_img_style}`
							: `${styles.car_bottom_middle} ${styles.common_img_style} ${styles.car_bottom_middle_active}`
					}
					src={car_3}
					alt="Yellow Car"
				/>
				<img
					className={
						!bookADemoBtnHover
							? `${styles.car_bottom_right} ${styles.common_img_style}`
							: `${styles.car_bottom_right} ${styles.common_img_style} ${styles.car_bottom_right_active}`
					}
					src={car_2}
					alt="Yellow Car"
				/>
				<img
					className={
						!bookADemoBtnHover
							? `${styles.yellow_top_block}  ${styles.common_img_style}`
							: `${styles.yellow_top_block}  ${styles.common_img_style} ${styles.yellow_top_block_active}`
					}
					src={block}
					alt="Yellow Block"
				/>
				<img
					className={
						!bookADemoBtnHover
							? `${styles.yellow_bottom_block}  ${styles.common_img_style}`
							: `${styles.yellow_bottom_block}  ${styles.common_img_style} ${styles.yellow_bottom_block_active}`
					}
					src={block1}
					alt="Yellow Block"
				/>
			</article>
		</div>
	);
};

export default ConnectingTheCurb;
