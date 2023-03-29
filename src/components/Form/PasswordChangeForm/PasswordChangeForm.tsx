import Container from '@mui/material/Container';
import BackgroundImage from '../../Common/BackgroundImage/BackgroundImage';
import authPic from '../../../assets/authPic.jpg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Formik } from 'formik';
import { EmailForm } from './EmailForm';
import { PasswordValidationHandler } from '../../../helpers/FormValidation/PasswordValidationHandler';
import { useRef } from 'react';
import PasswordsForm from './PasswordsForm';
import gsap from 'gsap';

const PasswordChangeForm = () => {
	const emailRef = useRef<HTMLFormElement>({} as HTMLFormElement);
	const passwordRef = useRef<HTMLFormElement>({} as HTMLFormElement);

	const SubmitHandler = () => {
		const tl = gsap.timeline()
		tl.to(emailRef.current, {
			duration: 0.3,
			x: -500
		});

		tl.fromTo(
			passwordRef.current,
			{
				x: 500,
				y: -100
			},
			{
				duration: 0.3,
				display: 'flex',
				x: 0,
			}
		);
	};

	return (
		<Container
			sx={{
				height: '100vh',
				width: '100vw',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<BackgroundImage
				alt='authPic'
				src={authPic}
			/>
			<Card>
				<CardContent>
					<Formik
						initialValues={{ email: '', password: '' }}
						validate={PasswordValidationHandler}
						onSubmit={SubmitHandler}
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
									height: '53vh',
									width: '30vw',
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
									clickHandler={SubmitHandler}
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
		</Container>
	);
};

export default PasswordChangeForm;
