import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import authPic from '../../../assets/authPic.jpg';
import { Formik } from 'formik';
import BackgroundImage from '../../Common/BackgroundImage/BackgroundImage';
import AuthFormContent from './AuthFormContent';
import { FormValues } from '../RegisterForm/RegisterForm';
import { AuthValidationHandler } from '../../../helpers/FormValidation/AuthValidationHandler';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { MainSlice } from '../../../store/Reducers/MainSlice';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../../types/Enums/RouteNames';

const AuthForm = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const SubmitHandler = (
		values: FormValues,
		{ setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
	) => {
		dispatch(MainSlice.actions.changeAuth(true))
		setSubmitting(false)
		navigate(RouteNames.DEFAULT)
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
						validate={AuthValidationHandler}
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
