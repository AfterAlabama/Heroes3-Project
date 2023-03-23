import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import authPic from '../../../assets/authPic.jpg';
import { Formik } from 'formik';
import {
	Button,
	Typography,
} from '@mui/material';
import green from '@mui/material/colors/green';
import grey from '@mui/material/colors/grey';
import red from '@mui/material/colors/red';
import BackgroundImage from '../../Common/BackgroundImage/BackgroundImage';
import Link from '@mui/material/Link';
import { RouteNames } from '../../../types/Enums/RouteNames';
import FormTitle from '../Shared/FormTitle';
import StyledInput from '../Shared/StyledInput';

interface AuthError {
	email?: string;
	password?: string;
}

const AuthForm = () => {
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
						validate={(values) => {
							const errors: AuthError = {};
							if (!values.email) {
								errors.email = 'Поле email обязательно';
							} else if (
								!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
							) {
								errors.email = 'Неверный Email';
							}
							if (!values.password) {
								errors.password = 'Поле с паролем обязательно';
							}
							return errors;
						}}
						onSubmit={(values, { setSubmitting }) => {
							setTimeout(() => {
								alert(JSON.stringify(values, null, 2));
								setSubmitting(false);
							}, 400);
						}}
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
									justifyContent: 'space-around',
									alignItems: 'center',
									height: '50vh',
									width: '30vw',
								}}
							>
								<FormTitle text='Вход в аккаунт' />
								<form
									style={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										flexDirection: 'column',
									}}
									onSubmit={handleSubmit}
								>
									<StyledInput
										instance='email'
										isError={errors.email}
										isValue={values.email}
										isTouched={touched.email}
										handleBlur={handleBlur}
										handleChange={handleChange}
										labelText='Email Адрес'
									/>
									<StyledInput
										instance='password'
										isError={errors.password}
										isValue={values.password}
										isTouched={touched.password}
										handleBlur={handleBlur}
										handleChange={handleChange}
										labelText='Пароль'
									/>
									<Button
										type='submit'
										disabled={isSubmitting}
										sx={{
											width: 100,
											height: 50,
											backgroundColor:
												(touched.email && errors.email) ||
												(touched.password && errors.password)
													? red[100]
													: touched.email &&
													  !errors.email &&
													  touched.password &&
													  !errors.password
													? green[100]
													: grey[100],
										}}
									>
										Войти
									</Button>
									<Typography
										sx={{
											marginTop: 3,
											color: 'gray',
										}}
									>
										Ещё нет аккаунта?{' '}
										<Link
											href={RouteNames.REGISTER_FORM}
											sx={{
												cursor: 'pointer',
											}}
										>
											Зарегистрироваться
										</Link>{' '}
									</Typography>
								</form>
							</Container>
						)}
					</Formik>
				</CardContent>
			</Card>
		</Container>
	);
};

export default AuthForm;
