import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Formik } from 'formik';
import { useRef } from 'react';
import { PasswordValidationHandler } from '../../../helpers/FormValidation/PasswordValidationHandler';
import Container from '@mui/material/Container';
import { EmailForm } from './EmailForm';
import PasswordsForm from './PasswordsForm';
import { gsap } from 'gsap'

export interface EmailFormValues {
	email:string
}

export interface PasswordFormValues {
	password: string;
	confirmedPassword: string;
}

export interface PasswordChangeFormValues extends EmailFormValues, PasswordFormValues{}

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
						<Container
							sx={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								height: ((touched.password && errors.password) || (touched.confirmedPassword && errors.confirmedPassword)) ? '50vh' : '40vh',
								width: '20vw',
							}}
						>
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
						</Container>
					)}
				</Formik>
			</CardContent>
		</Card>
	);
};

export default PasswordChangeFormCard;
