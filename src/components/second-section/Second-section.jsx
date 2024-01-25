import React, {useEffect, useState} from "react"
import style from "./second-section.module.scss"
import cameraImg from "../../img/secondSection/camera.webp"
import sunImg from "../../img/secondSection/sun_ray_2.webp"
import recordImg from "../../img/secondSection/record.webp"
import iconImg1 from "../../img/secondSection/icon_1.webp"
import iconImg2 from "../../img/secondSection/icon_2.webp"
import iconImg3 from "../../img/secondSection/icon_3.webp"
import {AnimationOnScroll} from 'react-animation-on-scroll';


const SecondSection = ({ hrefId }) => {
	const [isSunActive, setSunActive] = useState(false);
	const [isRecordActive, setRecordActive] = useState(false);

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
		<div id={hrefId} className={style.secondSectionWrapper}>
			<div className={style.cameraBtnWrapper}>
				<div className={style.getToNowWrapper}>
					<div className={style.title}>
						<p>
							Get to know the <br /> curb better
						</p>
					</div>
					<div className={style.txtWrapper}>
						<p>
							Vade replaces legacy parking infrastructure with wireless cameras, <br /> computer vision, and
							granular analytics. We make it easy for cities <br /> to monitor and manage curb space in
							real-time.
						</p>
					</div>
					<div className={style.btnWrapper}>
						<AnimationOnScroll initiallyVisible={true} animateIn="animate__rubberBand">
							<button onMouseOver={sunActive} onMouseOut={sunInactive}>
								More about our technology
							</button>
						</AnimationOnScroll>
					</div>
				</div>
				<div className={style.cameraWrapper}>
					<img className={style.cameraImg} src={cameraImg} width="100%" height="100%" alt="cameraImg" />
					<div className={isSunActive ? style.sunWrapper + ' ' + style.sunShadow : style.sunWrapper}>
						<img
							className={isSunActive ? style.sunImg + ' ' + style.sunActive : style.sunImg}
							src={sunImg}
							alt="sunImg"
						/>
					</div>
					<img
						className={isRecordActive ? style.recordImg + ' ' + style.recordActive : style.recordImg}
						src={recordImg}
						alt="recordImg"
					/>
				</div>
			</div>
			<div className={style.contentWrapper}>
				<AnimationOnScroll animateIn="animate__bounceInUp">
					<div className={style.contentItem}>
						<div className={style.iconWrapper}>
							<img src={iconImg1} alt="iconImg1" />
						</div>
						<div className={style.pWrapper1}>
							<p>Fully wireless hardware</p>
						</div>
						<div className={style.pWrapper2}>
							<p>
								We provide solar and cellular cameras <br /> that work anywhere, operate 24/7, and <br /> take
								under 10 minutes to install.
							</p>
						</div>
					</div>
				</AnimationOnScroll>
				<AnimationOnScroll delay={200} animateIn="animate__bounceInUp">
					<div className={style.contentItem}>
						<div className={style.iconWrapper}>
							<img src={iconImg2} alt="iconImg2" />
						</div>
						<div className={style.pWrapper1}>
							<p>Real-time data</p>
						</div>
						<div className={style.pWrapper2}>
							<p>
								Measure availability and compliance in <br /> real-time with our powerful and <br /> accurate
								computer vision pipeline.
							</p>
						</div>
					</div>
				</AnimationOnScroll>
				<AnimationOnScroll delay={400} animateIn="animate__bounceInUp">
					<div className={style.contentItem}>
						<div className={style.iconWrapper}>
							<img src={iconImg3} alt="iconImg3" />
						</div>
						<div className={style.pWrapper1}>
							<p>Full service subscription</p>
						</div>
						<div className={style.pWrapper2}>
							<p>
								One subscription for the cameras, <br /> installation, maintenance, <br /> implementation,
								software, and support.
							</p>
						</div>
					</div>
				</AnimationOnScroll>
			</div>
		</div>
	);
};

export default SecondSection;