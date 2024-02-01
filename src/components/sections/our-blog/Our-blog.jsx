import styles from './our-blog.module.scss';

import { staticData } from '../../../static-data/static-data';

import { AnimationOnScroll } from 'react-animation-on-scroll';

const SevenSection = ({ hrefId }) => {
	return (
		<div className='container'>
			<section id={hrefId} className={styles.section_our_blog}>
				<h4 className={styles.our_blog__title}>Our blog posts</h4>

				<ul className={styles.our_blog__card_list}>
					{staticData.ourBlogData.map((el, index) => {
						return (
							<li key={index} className={styles.card_list__item}>
								<figure className={styles.our_blog__card_content}>
									<img className={styles.card_content__photo} src={el.imgPath} alt="Our blog photos" />
									<figcaption className={styles.card_content__info}>
										<h4 className={styles.card_content__info__title}>{el.title}</h4>
										<span className={styles.card_content__info__date}>{el.date}</span>
									</figcaption>
								</figure>
							</li>
						);
					})}
				</ul>

				<AnimationOnScroll animateIn="animate__rubberBand">
					<button className={styles.our_blog__btn} type="button">
						Read all posts
					</button>
				</AnimationOnScroll>
			</section>
		</div>
	);
};

export default SevenSection;
