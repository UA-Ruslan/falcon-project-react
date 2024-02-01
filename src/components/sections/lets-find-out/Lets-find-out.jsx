import styles from './let`s-find-out.module.scss';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { AnimationOnScroll } from 'react-animation-on-scroll';

const SignupSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, 'At least 2 characters')
		.max(30, '30 characters maximum')
		.required('Required field'),
	email: Yup.string().email('Invalid email').required('Required field'),
	company: Yup.string()
		.min(2, 'At least 2 characters')
		.max(50, '50 characters maximum')
		.required('Required field'),
	position: Yup.string()
		.min(2, 'At least 2 characters')
		.max(50, '50 characters maximum')
		.required('Required field'),
	message: Yup.string()
		.min(10, 'At least 10 characters')
		.max(500, '500 characters maximum')
		.required('Required field'),
});

const LetsFindOut = ({ hrefId }) => {
	return (
		<div className={`container ${styles.container_lets_find_out}`}>
			<section id={hrefId} className={styles.section_lets_find_out}>
				<article className={styles.lets_find_out__content}>
					<h2 className={styles.lets_find_out__title}>Let’s find out how your curbs are used.</h2>
					<p className={styles.lets_find_out__text}>
						Connect with Vade and see what real-time curb data can do for your city.
					</p>
				</article>

				<Formik
					initialValues={{
						name: '',
						email: '',
						company: '',
						position: '',
						message: '',
					}}
					validationSchema={SignupSchema}
					onSubmit={(values, actions) => {
						setTimeout(() => {
							alert('Success!');
							actions.resetForm();
							actions.setSubmitting(false);
						}, 1000);
					}}
				>
					{({ errors, touched, isSubmitting }) => (
						<Form noValidate className={styles.lets_find_out__form}>
							<AnimationOnScroll style={{ width: '100%' }} animateIn="animate__backInUp">
								<Field
									name="name"
									className={
										touched.name && errors.name
											? `${styles.input} ${styles.form__input_border_error}`
											: styles.input
									}
									placeholder="name"
								/>
								{errors.name && touched.name ? (
									<span className={styles.form__input_text_error}>{errors.name}</span>
								) : null}
							</AnimationOnScroll>
							<AnimationOnScroll style={{ width: '100%' }} delay={100} animateIn="animate__backInUp">
								<Field
									name="email"
									type="email"
									className={
										touched.email && errors.email
											? `${styles.input} ${styles.form__input_border_error}`
											: styles.input
									}
									placeholder="email"
								/>
								{errors.email && touched.email ? (
									<span className={styles.form__input_text_error}>{errors.email}</span>
								) : null}
							</AnimationOnScroll>
							<AnimationOnScroll style={{ width: '100%' }} delay={200} animateIn="animate__backInUp">
								<div className={styles.form__company_position_wrapper}>
									<Field
										name="company"
										className={
											touched.company && errors.company
												? `${styles.input} ${styles.form__input_border_error}`
												: styles.input
										}
										placeholder="company"
									/>
									{errors.company && touched.company ? (
										<span className={styles.form__input_text_error}>{errors.company}</span>
									) : null}
									<Field
										name="position"
										className={
											touched.position && errors.position
												? `${styles.input} ${styles.form__input_border_error}`
												: styles.input
										}
										placeholder="position"
									/>
									{errors.position && touched.position ? (
										<span className={`${styles.form__input_text_error} ${styles.form__input_position_error}`}>
											{errors.position}
										</span>
									) : null}
								</div>
							</AnimationOnScroll>
							<AnimationOnScroll style={{ width: '100%' }} delay={400} animateIn="animate__backInUp">
								<Field
									name="message"
									placeholder="message"
									component="textarea"
									className={
										touched.message && errors.message
											? `${styles.input} ${styles.form__textarea} ${styles.form__input_border_error}`
											: `${styles.input} ${styles.form__textarea}`
									}
								/>
								{errors.message && touched.message ? (
									<span className={`${styles.form__input_text_error} ${styles.form__textarea_text_error}`}>
										{errors.message}
									</span>
								) : null}
							</AnimationOnScroll>
							<AnimationOnScroll animateIn="animate__rubberBand">
								<button className={styles.form__get_in_touch_btn} type="submit">
									Get in touch
								</button>
							</AnimationOnScroll>
							<div className={styles.form__preloader_wrapper}>
								{isSubmitting ? (
									<div className={styles.form__preloader}>
										<div></div>
										<div></div>
										<div></div>
										<div></div>
									</div>
								) : (
									''
								)}
							</div>
						</Form>
					)}
				</Formik>
			</section>
		</div>
	);
};

export default LetsFindOut;
