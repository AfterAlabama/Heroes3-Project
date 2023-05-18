import green from '@mui/material/colors/green';
import grey from '@mui/material/colors/grey';
import { FormEvent, forwardRef, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateCookie } from '../../../helpers/Cookie/CreateCookie';
import { RouteNames } from '../../../types/Enums/RouteNames';
import { FormContentProps } from '../AuthForm/AuthFormContent';
import FormTitle from '../Shared/FormTitle';
import StyledInput from '../Shared/StyledInput';
import SubmitButton from '../Shared/SubmitButton';
import red from '@mui/material/colors/red';
import { PasswordFormValues } from './PasswordChangeFormContent';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { MainSlice } from '../../../store/Reducers/MainSlice';
import { CenteredFlex } from '../../../styles/Flex';
import { CookieNames } from '../../../types/Enums/CookieNames';

const PasswordsForm = forwardRef<
	HTMLDivElement,
	FormContentProps<PasswordFormValues>
>(
	(
		{ values, errors, touched, handleChange, handleBlur, isSubmitting },
		ref
	) => {
		const navigate = useNavigate();
		const timer1 = useRef<number>(undefined!);
		const dispatch = useAppDispatch();
		const { changeIsPasswordSnackbarOpen } = MainSlice.actions;

		const submitCondition =
			(touched.password && errors.password) ||
			(touched.confirmedPassword && errors.confirmedPassword)
				? red[100]
				: touched.password &&
				  !errors.password &&
				  touched.confirmedPassword &&
				  !errors.confirmedPassword
				? green[100]
				: grey[100];
		const submitHandler = (e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			CreateCookie(CookieNames.PASSWORD, values.password, 365);
			timer1.current = window.setTimeout(() => {
				navigate(RouteNames.AUTH_FORM);
				dispatch(changeIsPasswordSnackbarOpen(true));
			}, 500);
		};

		useEffect(() => {
			return () => {
				clearTimeout(timer1.current);
			};
		}, []);

		return (
			<form onSubmit={submitHandler}>
				<CenteredFlex
					ref={ref}
					sx={{
						flexDirection: 'column',
						display: 'none',
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
						SubmitCondition={submitCondition}
						buttonText='Готово'
					/>
				</CenteredFlex>
			</form>
		);
	}
);

export default PasswordsForm;
