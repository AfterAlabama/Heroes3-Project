import Container from '@mui/material/Container';
import { Formik } from 'formik';
import BackgroundImage from '../../Common/BackgroundImage/BackgroundImage';
import regPic from '../../../assets/authPic.jpg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import RegisterFormContent from './RegisterFormContent';
import { RegValidationHandler } from '../../../helpers/FormValidation/RegValidationHandler';
import { useEffect, useRef, useState } from 'react';
import { CreateCookie } from '../../../helpers/Cookie/CreateCookie';
import { RouteNames } from '../../../types/Enums/RouteNames';
import { useNavigate } from 'react-router-dom';
import BackdropComponent from '../../Common/Backdrop/BackdropComponent';
import RegisterLoading from './RegisterLoading';
import RegisterSuccess from './RegisterSuccess';

export interface FormValues {
	email?: string;
	name?: string;
	password?: string;
	confirmedPassword?: string;
}

const RegisterForm = () => {
	const initValues = {
		email: '',
		name: '',
		password: '',
		confirmedPassword: '',
	};
	const [loading, setLoading] = useState<boolean>(false);
	const [success, setSuccess] = useState<boolean>(false);
	const timer1 = useRef<number>();
	const timer2 = useRef<number>();
	const timer3 = useRef<number>();
	const navigate = useNavigate();

	useEffect(() => {
		return () => {
			clearTimeout(timer1.current);
			clearTimeout(timer2.current);
			clearTimeout(timer3.current);
		};
	}, []);

	const RegSubmitHandler = (
		values: FormValues,
		{ setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
	) => {
		setLoading(true);
		timer1.current = window.setTimeout(() => {
			setLoading(false);
			setSuccess(true);
		}, 2000);
		CreateCookie('name', values.name as string, 365);
		CreateCookie('email', values.email as string, 365);
		CreateCookie('password', values.password as string, 365);
		timer2.current = window.setTimeout(() => {
			setSubmitting(false);
			setSuccess(false);
		}, 4000);
		timer3.current = window.setTimeout(() => {
			navigate(RouteNames.AUTH_FORM);
		}, 4000);
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
				alt='regPic'
				src={regPic}
			/>
			<Card>
				<CardContent>
					<Formik
						initialValues={initValues}
						validate={RegValidationHandler}
						onSubmit={RegSubmitHandler}
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
							<>
								<RegisterFormContent
									handleSubmit={handleSubmit}
									handleBlur={handleBlur}
									handleChange={handleChange}
									isSubmitting={isSubmitting}
									errors={errors}
									values={values}
									touched={touched}
								/>
								<BackdropComponent
									openCondition={isSubmitting}
									LoadingComponent={<RegisterLoading loading={loading} />}
									successComponent={<RegisterSuccess success={success} />}
								/>
							</>
						)}
					</Formik>
				</CardContent>
			</Card>
		</Container>
	);
};

export default RegisterForm;
