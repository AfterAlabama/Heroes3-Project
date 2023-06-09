import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Formik } from 'formik';
import { RegValidationHandler } from '../../../helpers/FormValidation/RegValidationHandler';
import { FormEvent, useEffect, useRef } from 'react';
import { CreateCookie } from '../../../helpers/Cookie/CreateCookie';
import { useNavigate } from 'react-router-dom';
import RegisterFormContent from './RegisterFormCardContent';
import BackdropComponent from '../../Common/Backdrop/BackdropComponent';
import RegisterLoading from './RegisterLoading';
import RegisterSuccess from './RegisterSuccess';
import { RouteNames } from '../../../types/Enums/RouteNames';
import { CookieNames } from '../../../types/Enums/CookieNames';
import { useGetStateVariables } from '../../../hooks/useGetStateVariables';

export interface RegisterFormValues {
	email: string;
	name: string;
	password: string;
	confirmedPassword: string;
}

const RegisterFormCard = () => {
	const {
		dispatch,
		setIsAccountBeingCreated,
		setIsAccountCreated,
		setIsRegistrationSnackbarOpen,
	} = useGetStateVariables();

	const timer1 = useRef<number>(0);
	const timer2 = useRef<number>(0);
	const timer3 = useRef<number>(0);
	const navigate = useNavigate();

	const regSubmitHandler = (
		values: RegisterFormValues,
		{ setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
	) => {
		dispatch(setIsAccountBeingCreated(true));

		timer1.current = window.setTimeout(() => {
			dispatch(setIsAccountBeingCreated(false));
			dispatch(setIsAccountCreated(true));
		}, 2000);

		CreateCookie(CookieNames.NAME, values.name, 365);

		CreateCookie(CookieNames.EMAIL, values.email, 365);

		CreateCookie(CookieNames.PASSWORD, values.password, 365);

		timer2.current = window.setTimeout(() => {
			setSubmitting(false);
			navigate(RouteNames.AUTH_FORM);
		}, 4000);

		timer3.current = window.setTimeout(() => {
			dispatch(setIsRegistrationSnackbarOpen(true));
		}, 4000);
	};

	useEffect(() => {
		return () => {
			clearTimeout(timer1.current);
			clearTimeout(timer2.current);
			clearTimeout(timer3.current);
		};
	}, []);

	return (
		<Card component='section'>
			<CardContent>
				<Formik
					initialValues={{
						email: '',
						name: '',
						password: '',
						confirmedPassword: '',
					}}
					validate={RegValidationHandler}
					onSubmit={regSubmitHandler}
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
								handleSubmit={
									handleSubmit as (e?: FormEvent<HTMLDivElement>) => void
								}
								handleBlur={handleBlur}
								handleChange={handleChange}
								isSubmitting={isSubmitting}
								errors={errors}
								values={values}
								touched={touched}
							/>
							<BackdropComponent
								openCondition={isSubmitting}
								loadingComponent={<RegisterLoading />}
								successComponent={<RegisterSuccess />}
							/>
						</>
					)}
				</Formik>
			</CardContent>
		</Card>
	);
};

export default RegisterFormCard;
