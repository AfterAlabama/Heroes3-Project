import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Formik, FormikErrors, FormikTouched } from 'formik';
import { useRef } from 'react';
import { PasswordValidationHandler } from '../../../helpers/FormValidation/PasswordValidationHandler';
import { EmailForm } from './EmailForm';
import PasswordsForm from './PasswordsForm';
import { gsap } from 'gsap';
import { FormContentContainer } from '../../../styles/FormContentContainer';

export interface EmailFormValues {
	email: string;
}

export interface PasswordFormValues {
	password: string;
	confirmedPassword: string;
}

export interface PasswordChangeFormValues extends  EmailFormValues, PasswordFormValues {}

const PasswordChangeFormCard = () => {
	const emailRef = useRef<HTMLDivElement>({} as HTMLDivElement);
	const passwordRef = useRef<HTMLDivElement>({} as HTMLDivElement);

	const clickHandler = () => {
		const tl = gsap.timeline();
		tl.to(emailRef.current, {
			duration: 0.3,
			x: -500,
		});

		tl.fromTo(
			passwordRef.current,
			{
				x: 500,
				y: -100,
			},
			{
				display: 'flex',
				duration: 0.3,
				x: 0,
			}
		);
	};

	const heightFormCondition = (
		touched: FormikTouched<PasswordFormValues>,
		errors: FormikErrors<PasswordFormValues>
	) => {
		if (
			(touched.password && errors.password) ||
			(touched.confirmedPassword && errors.confirmedPassword)
		) {
			return '50vh';
		} else return '40vh';
	};

	return (
		<Card>
			<CardContent>
				<Formik
					initialValues={{ email: '', password: '', confirmedPassword: '' }}
					validate={PasswordValidationHandler}
					onSubmit={clickHandler}
				>
					{({
						values,
						errors,
						touched,
						handleChange,
						handleBlur,
						handleSubmit,
						isSubmitting,
					}) => (
						<FormContentContainer height={heightFormCondition(touched, errors)}>
							<EmailForm
								ref={emailRef}
								values={values}
								errors={errors}
								touched={touched}
								handleChange={handleChange}
								handleBlur={handleBlur}
								handleSubmit={handleSubmit}
								isSubmitting={isSubmitting}
								clickHandler={clickHandler}
							/>
							<PasswordsForm
								ref={passwordRef}
								values={values}
								errors={errors}
								touched={touched}
								handleChange={handleChange}
								handleBlur={handleBlur}
								handleSubmit={handleSubmit}
								isSubmitting={isSubmitting}
							/>
						</FormContentContainer>
					)}
				</Formik>
			</CardContent>
		</Card>
	);
};

export default PasswordChangeFormCard;
