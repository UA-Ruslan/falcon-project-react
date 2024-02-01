import React from 'react';
import styles from './footer.module.scss';

import { staticData } from '../../static-data/static-data';

import sprite from '../../img/sprites/sprite.svg';

import { AnimationOnScroll } from 'react-animation-on-scroll';

const Footer = ({ hrefData }) => {
	return (
		<AnimationOnScroll animateIn="animate__zoomInDown">
			<div className="container">
				<footer id={hrefData[1].id} className={styles.footer}>
					<div className={styles.footer_main_content}>
						<div className={styles.footer__logo_wrapper}>
							<a className={styles.footer__logo_link} href="/">
								<svg className={styles.footer__logo}>
									<use xlinkHref={`${sprite}#footer_logo`} />
								</svg>
							</a>
						</div>

						<div className={styles.nav_address_wrapper}>
							<nav className={styles.nav}>
								<ul className={styles.nav_list}>
									{staticData.footerData.footerNavData.map((el, index) => {
										return (
											<li key={index} className={styles.nav_list__item}>
												<a className={styles.nav_list__item__link} href={el.href}>
													{el.linkTitle}
												</a>
											</li>
										);
									})}
								</ul>
							</nav>

							<address className={styles.address}>
								{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
								<a href="#" className={styles.address__our_team}>
									team@vade.ai
								</a>
								<ul className={styles.social_networks_list}>
									{staticData.footerData.footerSocialNetworksData.map((el, index) => {
										return (
											<li key={index} className={styles.social_network__list_item}>
												<a
													target="_blank"
													rel="noreferrer"
													href={el.link}
													className={styles.social_network__list_link}
												>
													<svg className={styles.social_network__list_icon}>
														<use xlinkHref={el.svgSprite} />
													</svg>
												</a>
											</li>
										);
									})}
								</ul>
								<span className={styles.physical_address}>16 W Martin St. Suite 1101, Raleigh, NC 27601</span>
							</address>
						</div>
					</div>

					<article className={styles.additional_info}>
						<span className={`${styles.additional_info__about_us} ${styles.additional_info__font_common}`}>
							© 2021 VADE Group Inc.
						</span>
						<hr className={styles.additional_info__line} />
						<div className={styles.additional_info__privacy_policy}>
							{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
							<a
								href="#"
								className={`${styles.additional_info__link} ${styles.additional_info__font_common}`}
							>
								privacy policy
							</a>
							{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
							<a
								href="#"
								className={`${styles.additional_info__link} ${styles.additional_info__font_common}`}
							>
								terms of use
							</a>
						</div>
					</article>
				</footer>
			</div>
		</AnimationOnScroll>
	);
};

export default Footer;
