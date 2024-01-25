import React from "react";
import style from "./footer.module.scss";
import mainIcon from "../../img/footer/v_icon.webp"
import facebook from "../../img/footer/facebook.webp"
import instagram from "../../img/footer/instagram.webp"
import twitter from "../../img/footer/twitter.webp"
import inImg from "../../img/footer/in_icon.webp"
import {AnimationOnScroll} from 'react-animation-on-scroll';


const Footer = ({ hrefData }) => {
	return (
		<AnimationOnScroll animateIn="animate__zoomInDown">
			<div id={hrefData[1].id} className={style.footerWrapper}>
				<div className={style.mainBlockWrapper}>
					<div className={style.leftBlock}>
						<img src={mainIcon} alt="mainIcon" />
						<p>© 2021 VADE Group Inc.</p>
					</div>
					<div className={style.middleBlock}>
						<a className={style.linkStyle} href={`#${hrefData[0].id}`}>
							technology
						</a>
						<a className={style.linkStyle} href={`#${hrefData[2].id}`}>
							impact
						</a>
						<a className={style.linkStyle} href={`#${hrefData[3].id}`}>
							portfolio
						</a>
						<a className={style.linkStyle} href={`#${hrefData[4].id}`}>
							blog
						</a>
					</div>
					<div className={style.rightBlock}>
						<div className={style.hrefWrapper}>
							<a href="/">team@vade.ai</a>
						</div>
						<div className={style.imgWrapper}>
							<img src={facebook} width="100%" height="100%" alt="facebook" />
							<img src={instagram} width="100%" height="100%" alt="instagram" />
							<img src={twitter} width="100%" height="100%" alt="twitter" />
							<img src={inImg} width="100%" height="100%" alt="inImg" />
						</div>
						<div className={style.pWrapper1}>
							<p>
								16 W Martin St. Suite <br /> 1101, Raleigh, NC 27601
							</p>
						</div>
					</div>
				</div>

				<div className={style.bottomBlockWrapper}>
					<div className={style.bottomHrefWrapper}>
						{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
						<a href="#" className={style.linkStyle1}>
							privacy policy
						</a>
					</div>
					<div className={style.bottomHrefWrapper}>
						{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
						<a href="#" className={style.linkStyle1}>
							terms of use
						</a>
					</div>
				</div>
			</div>
		</AnimationOnScroll>
	);
};

export default Footer;