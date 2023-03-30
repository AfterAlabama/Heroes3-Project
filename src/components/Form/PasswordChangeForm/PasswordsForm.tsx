import Button from '@mui/material/Button';
import green from '@mui/material/colors/green';
import grey from '@mui/material/colors/grey';
import { forwardRef, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateCookie } from '../../../helpers/Cookie/CreateCookie';
import { RouteNames } from '../../../types/Enums/RouteNames';
import { FormContentProps } from '../AuthForm/AuthFormContent';
import FormTitle from '../Shared/FormTitle';
import StyledInput from '../Shared/StyledInput';

const PasswordsForm = forwardRef<HTMLFormElement, FormContentProps>(
	(
		{ values, errors, touched, handleChange, handleBlur },
		ref
	) => {
		const navigate = useNavigate();
		const timer1 = useRef<number>(undefined!)

		const submitHandler = () => {
			CreateCookie('password', values.password as string, 365);
			timer1.current = window.setTimeout(() => {
				navigate(RouteNames.AUTH_FORM);
			}, 500)
		};

		useEffect(() => {
			return () => {
				clearTimeout(timer1.current)
			}
		}, [])

		return (
			<form
				ref={ref}
				style={{
					display: 'none',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
				}}
				onSubmit={submitHandler}
			>
				<FormTitle text='Смена Пароля' />
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
				<Button
					disabled={((errors.password || !touched.password) || (errors.confirmedPassword || !touched.confirmedPassword)) ? true : false}
					sx={{
						fontSize: 20,
						backgroundColor: ((touched.password && !errors.password) && (touched.confirmedPassword && !errors.confirmedPassword)) ? green[100] : grey[100]
					}}
					onClick={submitHandler}
				>
					Готово
				</Button>
			</form>
		);
	}
);

export default PasswordsForm;
