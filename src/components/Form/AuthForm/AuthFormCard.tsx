import { Formik } from 'formik';
import AuthFormContent from './AuthFormContent';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import { AuthValidationHandler } from '../../../helpers/FormValidation/AuthValidationHandler';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/ReduxHooks';
import { RouteNames } from '../../../types/Enums/RouteNames';
import { MainSlice } from '../../../store/Reducers/MainSlice';

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
		setSubmitting(false);
		navigate(RouteNames.DEFAULT);
	};
  
	return (
		<Card>
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
	);
};

export default AuthFormCard;