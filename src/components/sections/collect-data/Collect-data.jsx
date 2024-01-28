import styles from './collect-data.module.scss';

import collectDataImg from '../../../img/sections/collect-data/collect-data.webp';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const CollectData = () => {
	return (
		<AnimationOnScroll animateIn="animate__fadeIn">
			<div className="container">
				<section className={styles.section_collect_data}>
					<h2 className={styles.collect_data_title}>Collect, analyze, and visualize occupancy data</h2>

					<p className={styles.collect_data_text}>
						Visualize demand with dashboards for curb utilization and compliance.
					</p>

					<div className={styles.collect_data__img_wrapper}>
						<img
							className={styles.collect_data__img}
							src={collectDataImg}
							width="100%"
							height="auto"
							alt="Demonstration"
						/>
					</div>
				</section>
			</div>
		</AnimationOnScroll>
	);
};

export default CollectData;
