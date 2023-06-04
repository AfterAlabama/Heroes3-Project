import green from '@mui/material/colors/green';
import grey from '@mui/material/colors/grey';
import { FormEvent, forwardRef, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateCookie } from '../../../helpers/Cookie/CreateCookie';
import { RouteNames } from '../../../types/Enums/RouteNames';
import FormTitle from '../Shared/FormTitle';
import StyledInput from '../Shared/StyledInput';
import SubmitButton from '../Shared/SubmitButton';
import red from '@mui/material/colors/red';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { MainSlice } from '../../../store/Reducers/MainSlice';
import { ColumnedFlex } from '../../../styles/Flex';
import { CookieNames } from '../../../types/Enums/CookieNames';
import { Formik, FormikErrors, FormikTouched } from 'formik';
import { PasswordFormValidationHandler } from '../../../helpers/FormValidation/PasswordChangeValidationHandler';

export interface PasswordFormValidationProps {
	password: string;
	confirmedPassword: string;
}

const PasswordsForm = forwardRef<HTMLDivElement>((_, ref) => {
	const navigate = useNavigate();
	const timer1 = useRef<number>(0);
	const dispatch = useAppDispatch();
	const { changeIsPasswordSnackbarOpen } = MainSlice.actions;

	const submitCondition = (
		touched: FormikTouched<PasswordFormValidationProps>,
		errors: FormikErrors<PasswordFormValidationProps>
	) => {
		if (
			(touched.password && errors.password) ||
			(touched.confirmedPassword && errors.confirmedPassword)
		)
			return red[100];
		if (
			touched.password &&
			!errors.password &&
			touched.confirmedPassword &&
			!errors.confirmedPassword
		)
			return green[100];
		return grey[100];
	};

	useEffect(() => {
		return () => {
			clearTimeout(timer1.current);
		};
	}, []);

	const passwordSubmitHandler = (
		values: PasswordFormValidationProps,
		{ setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
	) => {
		CreateCookie(CookieNames.PASSWORD, values.password, 365);
		setSubmitting(false);
		timer1.current = window.setTimeout(() => {
			dispatch(changeIsPasswordSnackbarOpen(true));
			navigate(RouteNames.AUTH_FORM);
		}, 500);
	};

	return (
		<Formik
			initialValues={{ password: '', confirmedPassword: '' }}
			validate={PasswordFormValidationHandler}
			onSubmit={passwordSubmitHandler}
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
				<ColumnedFlex
					component='form'
					onSubmit={handleSubmit as (e?: FormEvent<HTMLDivElement>) => void}
					ref={ref}
					sx={{
						display:'none'
					}}
				>
					<FormTitle
						height={-5}
						text='Смена Пароля'
					/>
					<StyledInput
						instance='password'
						isError={errors.password}
						isValue={values.password}
						isTouched={touched.password}
						handleBlur={handleBlur}
						handleChange={handleChange}
						labelText='Новый Пароль'
					/>
					<StyledInput
						instance='confirmedPassword'
						isError={errors.confirmedPassword}
						isValue={values.confirmedPassword}
						isTouched={touched.confirmedPassword}
						handleBlur={handleBlur}
						handleChange={handleChange}
						labelText='Подтвердите пароль'
					/>
					<SubmitButton
						isSubmitting={isSubmitting}
						SubmitCondition={submitCondition(touched, errors)}
						buttonText='Готово'
					/>
				</ColumnedFlex>
			)}
		</Formik>
	);
});

export default PasswordsForm;
