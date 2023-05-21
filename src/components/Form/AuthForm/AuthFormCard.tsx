import { Formik } from 'formik';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import { AuthValidationHandler } from '../../../helpers/FormValidation/AuthValidationHandler';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { RouteNames } from '../../../types/Enums/RouteNames';
import { MainSlice } from '../../../store/Reducers/MainSlice';
import { CreateCookie } from '../../../helpers/Cookie/CreateCookie';
import { CookieNames } from '../../../types/Enums/CookieNames';
import AuthFormCardContent from './AuthFormCardContent';
import { FormEvent } from 'react';

export interface AuthFormValues {
	email: string;
	password: string;
}

const AuthFormCard = () => {
	const dispatch = useAppDispatch();
	const { changeAuth } = MainSlice.actions;
	const navigate = useNavigate();

	const submitHandler = (
		values: AuthFormValues,
		{ setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
	) => {
		dispatch(changeAuth(true));
		CreateCookie(CookieNames.ISLOGGED, 'Logged', 365);
		setSubmitting(false);
		navigate(RouteNames.DEFAULT);
	};

	return (
		<Card component='section' >
			<CardContent>
				<Formik
					initialValues={{ email: '', password: '' }}
					validate={AuthValidationHandler}
					onSubmit={submitHandler}
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
						<AuthFormCardContent
							handleSubmit={handleSubmit as (e?: FormEvent<HTMLDivElement>) => void}
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
	);
};

export default AuthFormCard;
