import green from '@mui/material/colors/green';
import grey from '@mui/material/colors/grey';
import red from '@mui/material/colors/red';
import Container from '@mui/material/Container';
import { FC } from 'react';
import { FormContentProps } from '../AuthForm/AuthFormContent';
import FormTitle from '../Shared/FormTitle';
import StyledInput from '../Shared/StyledInput';
import SubmitButton from '../Shared/SubmitButton';

const RegisterFormContent: FC<FormContentProps> = ({
	handleSubmit,
	handleBlur,
	handleChange,
	isSubmitting,
	errors,
	touched,
	values,
}) => {
	const SubmitCondition =
		(touched.email && errors.email) ||
		(touched.password && errors.password) ||
		(touched.name && errors.name) ||
		(touched.confirmedPassword && errors.confirmedPassword)
			? red[100]
			: touched.email &&
			  !errors.email &&
			  touched.password &&
			  !errors.password &&
			  touched.name &&
			  !errors.name &&
			  touched.confirmedPassword &&
			  !errors.confirmedPassword
			? green[100]
			: grey[100]
	;

	return (
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-around',
				alignItems: 'center',
				height: '90vh',
				width: '30vw',
			}}
		>
			<form
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
				}}
				onSubmit={handleSubmit}
			>
				<FormTitle text='Регистрация' />
				<StyledInput
					instance='name'
					isError={errors.name}
					isValue={values.name}
					isTouched={touched.name}
					handleBlur={handleBlur}
					handleChange={handleChange}
					labelText='Имя'
				/>
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
					SubmitCondition={SubmitCondition}
					buttonText='Создать'
				/>
			</form>
		</Container>
	);
};

export default RegisterFormContent;
