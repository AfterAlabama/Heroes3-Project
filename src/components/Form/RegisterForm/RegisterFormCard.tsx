import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Formik } from 'formik';
import { RegValidationHandler } from '../../../helpers/FormValidation/RegValidationHandler';
import { useEffect, useRef } from 'react';
import { CreateCookie } from '../../../helpers/Cookie/CreateCookie';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/ReduxHooks';
import { MainSlice } from '../../../store/Reducers/MainSlice';
import RegisterFormContent from './RegisterFormContent';
import BackdropComponent from '../../Common/Backdrop/BackdropComponent';
import RegisterLoading from './RegisterLoading';
import RegisterSuccess from './RegisterSuccess';

export interface RegisterFormValues {
	email: string;
	name: string;
	password: string;
	confirmedPassword: string;
}

const RegisterFormCard = () => {
	
	const dispatch = useAppDispatch();
	const { changeIsAccountBeingCreated, changeIsAccountCreated } = MainSlice.actions;
	const timer1 = useRef<number>(undefined!);
	const timer2 = useRef<number>(undefined!);
	const timer3 = useRef<number>(undefined!);
	const navigate = useNavigate();

	const regSubmitHandler = (
		values: RegisterFormValues,
		{ setSubmitting }: {setSubmitting: (isSubmitting: boolean) => void}
	) => {
		dispatch(changeIsAccountBeingCreated(true));

		timer1.current = window.setTimeout(() => {
			dispatch(changeIsAccountBeingCreated(false));
			dispatch(changeIsAccountCreated(true));
		}, 2000);

		CreateCookie('name', values.name, 365);

		CreateCookie('email', values.email, 365);

		CreateCookie('password', values.password, 365);

		timer2.current = window.setTimeout(() => {
			setSubmitting(false);
		}, 4000);

		timer3.current = window.setTimeout(() => {
			navigate(-1);
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
		<Card>
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
								loadingComponent={
									<RegisterLoading />
								}
								successComponent={
									<RegisterSuccess />
								}
							/>
						</>
					)}
				</Formik>
			</CardContent>
		</Card>
	);
};

export default RegisterFormCard;
