import React, { useEffect, useState } from 'react';

import styles from './get-to-know.module.scss';

import camera from '../../../img/sections/get-to-know/camera.webp';
import sun from '../../../img/sections/get-to-know/sun-ray.webp';
import record from '../../../img/sections/get-to-know/record.webp';

import sprite from '../../../img/sprites/sprite.svg';

import { AnimationOnScroll } from 'react-animation-on-scroll';

const GetToKnow = ({ hrefId }) => {
	const [isSunActive, setSunActive] = useState(false);
	const [isRecordActive, setRecordActive] = useState(false);

	const cartData = [
		{
			path: `${sprite}#wireless`,
			title: 'Fully wireless hardware',
			content:
				'We provide solar and cellular cameras that work anywhere, operate 24/7, and take under 10 minutes to install.',
		},
		{
			path: `${sprite}#real_time_data`,
			title: 'Real-time data',
			content:
				`Measure availability and compliance in real-time with our powerful and accurate computer vision pipeline.`,
		},
		{
			path: `${sprite}#full_service`,
			title: 'Full service subscription',
			content:
				'One subscription for the cameras, installation, maintenance, implementation, software, and support.',
		},
	];

	useEffect(() => {
		let intervalId;
		if (isSunActive) {
			intervalId = setInterval(() => {
				setRecordActive((prev) => !prev);
				setTimeout(() => {
					setRecordActive((prev) => !prev);
				}, 500);
			}, 1000);
		}
		return () => {
			clearInterval(intervalId);
		};
	});
	const sunActive = () => {
		setSunActive(true);
		setRecordActive(true);
	};
	const sunInactive = () => {
		setSunActive(false);
		setRecordActive(false);
	};
	return (
		<section id={hrefId} className={styles.section_get_to_know}>
			<div className={`${styles.container__get_to_know} container`}>
				<div className={styles.top_content_wrapper}>
					<article className={styles.get_to_know__left_block}>
						<h2 className={styles.get_to_know__title}>Get to know the curb better</h2>

						<p className={styles.get_to_know__text}>
							Vade replaces legacy parking infrastructure with wireless cameras, computer vision, and granular
							analytics. We make it easy for cities to monitor and manage curb space in real-time.
						</p>

						<AnimationOnScroll initiallyVisible={true} animateIn="animate__rubberBand">
							<button onMouseOver={sunActive} onMouseOut={sunInactive} className={styles.btn_more_about}>
								More about our technology
							</button>
						</AnimationOnScroll>
					</article>
					<article className={styles.get_to_know__right_block}>
							<img
								className={styles.get_to_know__camera_img}
								src={camera}
								width={642}
								height={414}
								alt="cameraImg"
							/>
						<div
							className={
								!isSunActive
									? styles.get_to_know__sun_wrapper
									: `${styles.get_to_know__sun_wrapper} ${styles.sun_wrapper__shadow}`
							}
						>
							<img
								className={
									!isSunActive ? styles.get_to_know__sun : `${styles.get_to_know__sun} ${styles.sun__active}`
								}
								src={sun}
								width={33}
								height={12}
								alt="sunImg"
							/>
						</div>
						<img
							className={
								!isRecordActive
									? styles.get_to_know__record
									: `${styles.get_to_know__record} ${styles.record_active}`
							}
							src={record}
							alt="recordImg"
						/>
					</article>
				</div>

				<div className={styles.bottom_content_wrapper}>
					{cartData.map((el, index) => {
						const isSecondItem = index === 1;
						return (
							<article key={index} className={styles.bottom_content__card_item}>
								<figure className={styles.card_item__icon_wrapper}>
									<svg className={styles.card_item__icon}>
										<use xlinkHref={el.path} />
									</svg>

									<figcaption className={styles.card_item__title}>{el.title}</figcaption>
								</figure>

								<p
									className={
										!isSecondItem
											? styles.card_item__text
											: `${styles.card_item__text} ${styles.card__second_item__text}`
									}
								>
									{el.content}
								</p>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default GetToKnow;