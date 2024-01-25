import React from "react";
import style from "./six-section.module.scss";
import {AnimationOnScroll} from 'react-animation-on-scroll';

const SixSection = () => {
    return (
			<div className={style.sixSectionWrapper}>
				<div className={style.leftBlockWrapper}>
					<div className={style.titleWrapper}>
						<AnimationOnScroll animateIn="animate__fadeIn">
							<p>
								Power up <br /> the future <br /> of cities
							</p>
						</AnimationOnScroll>
					</div>
					<div className={style.pWrapper1}>
						<AnimationOnScroll delay={100} animateIn="animate__fadeIn">
							<p>
								We're building a new paradigm of urban mobility <br /> that understands and adapts to the
								world around <br /> it. We empower cities with dynamic tools to make <br /> streets safer,
								less congested, and more <br /> productive.
							</p>
						</AnimationOnScroll>
					</div>
				</div>
				<div className={style.rightBlockWrapper}>
					<div className={style.pWrapper2}>
						<AnimationOnScroll delay={200} animateIn="animate__fadeIn">
							<p>
								Read more on how we’re <br /> improving transportation on <br /> our Impact page.
							</p>
						</AnimationOnScroll>
					</div>
					<div className={style.btnWrapper}>
						<AnimationOnScroll animateIn="animate__rubberBand">
							<button>Social impact</button>
						</AnimationOnScroll>
					</div>
				</div>
			</div>
		);
}

export default SixSection;