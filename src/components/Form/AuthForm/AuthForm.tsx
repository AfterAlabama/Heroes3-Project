import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import authPic from '../../../assets/authPic.jpg';
import { Formik } from 'formik';
import BackgroundImage from '../../Common/BackgroundImage/BackgroundImage';
import AuthFormContent from './AuthFormContent';
import { FormValues } from '../RegisterForm/RegisterForm';


const AuthForm = () => {
	const ValidationHandler = (values: FormValues) => {
		const errors: FormValues = {};
		if (!values.email) {
			errors.email = 'Поле email обязательно';
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
			errors.email = 'Неверный Email';
		}
		if (!values.password) {
			errors.password = 'Поле с паролем обязательно';
		}
		return errors;
	};

	const SubmitHandler = (
		values: FormValues,
		{ setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
	) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			setSubmitting(false);
		}, 400);
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
						validate={ValidationHandler}
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
							<AuthFormContent
								handleSubmit={handleSubmit}
								handleBlur={handleBlur}
								handleChange={handleChange}
								isSubmitting={isSubmitting}
								errors={errors}
								touched={touched}
								values={values}
							/>
						)}
					</Formik>
				</CardContent>
			</Card>
		</Container>
	);
};

export default AuthForm;
