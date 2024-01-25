import React from "react";
import icon1 from "../../img/forthSection/raleigh.webp"
import icon2 from "../../img/forthSection/f_d_o_t.webp"
import icon3 from "../../img/forthSection/us_davis.webp"
import icon4 from "../../img/forthSection/city_of_aspen.webp"
import icon5 from "../../img/forthSection/walker.webp"
import icon6 from "../../img/forthSection/california.webp"
import icon7 from "../../img/forthSection/premium_parking.webp"
import icon8 from "../../img/forthSection/signature.webp"
import style from "./forth-section.module.scss"
import {AnimationOnScroll} from 'react-animation-on-scroll';

const ForthSection = ({ hrefId }) => {
	return (
		<div id={hrefId} className={style.forthSectionWrapper}>
			<div className={style.titleWrapper}>
				<p>
					Trusted by leaders in <br /> urban transportation
				</p>
			</div>
			<div className={style.pWrapper1}>
				<p>
					Transparency and quality are the basis of our work, and we've helped <br />
					cities and vendors across the United States.
				</p>
			</div>
			<div className={style.pWrapper2}>
				<p>Here's who we've worked with</p>
			</div>
			<div className={style.iconWrapper}>
				<div className={style.iconBlockWrapper}>
					<div className={style.iconWrapper}>
						<AnimationOnScroll animateIn="animate__wobble">
							<img src={icon1} width="100%" height="100%" alt="icon" />
						</AnimationOnScroll>
					</div>
					<div className={style.iconWrapper}>
						<AnimationOnScroll delay={100} animateIn="animate__wobble">
							<img src={icon2} width="100%" height="100%" alt="icon" />
						</AnimationOnScroll>
					</div>
					<div className={style.iconWrapper}>
						<AnimationOnScroll delay={200} animateIn="animate__wobble">
							<img src={icon3} width="100%" height="100%" alt="icon" />
						</AnimationOnScroll>
					</div>
					<div className={style.iconWrapper}>
						<AnimationOnScroll delay={300} animateIn="animate__wobble">
							<img src={icon4} width="100%" height="100%" alt="icon" />
						</AnimationOnScroll>
					</div>
				</div>
				<div className={style.iconBlockWrapper}>
					<div className={style.iconWrapper}>
						<AnimationOnScroll animateIn="animate__wobble">
							<img src={icon5} width="100%" height="100%" alt="icon" />
						</AnimationOnScroll>
					</div>
					<div className={style.iconWrapper}>
						<AnimationOnScroll delay={100} animateIn="animate__wobble">
							<img src={icon6} width="100%" height="100%" alt="icon" />
						</AnimationOnScroll>
					</div>
					<div className={style.iconWrapper}>
						<AnimationOnScroll delay={200} animateIn="animate__wobble">
							<img src={icon7} width="100%" height="100%" alt="icon" />
						</AnimationOnScroll>
					</div>
					<div className={style.iconWrapper}>
						<AnimationOnScroll delay={300} animateIn="animate__wobble">
							<img src={icon8} width="100%" height="100%" alt="icon" />
						</AnimationOnScroll>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForthSection;