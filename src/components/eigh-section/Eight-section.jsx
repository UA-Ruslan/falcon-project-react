import React, {useRef, useState} from "react";
import style from "./eight-section.module.scss";
import img from "../../img/eightSection/img.webp"
import {AnimationOnScroll} from 'react-animation-on-scroll';


const EightSection = ({ hrefId }) => {
	const [isData, setData] = useState(null);
	const formRef = useRef(null);
	const onSubmit = (e) => {
		e.preventDefault();
		const data = {
			name: e.target[0].value,
			email: e.target[1].value,
			company: e.target[2].value,
			position: e.target[3].value,
			txt1: e.target[4].value,
		};
		setData(data);
		formRef.current.reset();
	};
	return (
		<div id={hrefId} className={style.eightSectionWrapper}>
			<div className={style.leftBlockWrapper}>
				<img className={style.img1} src={img} alt="img" />
				<img className={style.img2} src={img} alt="img" />
				<img className={style.img3} src={img} alt="img" />
				<img className={style.img4} src={img} alt="img" />
				<div className={style.pWrapper1}>
					<p>
						Let’s find out how <br /> your curbs are used.
					</p>
				</div>
				<div className={style.pWrapper2}>
					<p>
						Connect with Vade and see what real-time <br /> curb data can do for your city.
					</p>
				</div>
			</div>
			<div className={style.formWrapper}>
				<form ref={formRef} onSubmit={onSubmit}>
					<AnimationOnScroll animateIn="animate__backInUp">
						<input
							required
							aria-describedby="field is required"
							id="name"
							placeholder="name"
							className={style.inputStyle}
							type="text"
						/>
					</AnimationOnScroll>
					<AnimationOnScroll delay={100} animateIn="animate__backInUp">
						<input
							required
							aria-describedby="field is required"
							id="email"
							placeholder="email"
							className={style.inputStyle}
							type="email"
						/>
					</AnimationOnScroll>
					<AnimationOnScroll delay={200} animateIn="animate__backInUp">
						<div className={style.inputWrapper}>
							<input
								required
								aria-describedby="field is required"
								id="company"
								placeholder="company"
								className={style.inputStyle}
								type="text"
							/>
							<input
								required
								aria-describedby="field is required"
								id="position"
								placeholder="position"
								className={style.inputStyle}
								type="text"
							/>
						</div>
					</AnimationOnScroll>
					<AnimationOnScroll delay={400} animateIn="animate__backInUp">
						<textarea
							required
							aria-describedby="field is required"
							placeholder="message"
							className={style.textareaStyle}
							name="message"
							id="txt1"
						></textarea>
					</AnimationOnScroll>
					<div className={style.btnWrapper}>
						<AnimationOnScroll animateIn="animate__rubberBand">
							<button>Get in touch</button>
						</AnimationOnScroll>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EightSection;