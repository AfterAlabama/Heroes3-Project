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
	return (
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-around',
				alignItems: 'center',
				height: '80vh',
				width: '30vw',
			}}
		>
			<FormTitle text='Регистрация' />
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
					errors={errors}
					touched={touched}
					buttonText='Создать'
				/>
			</form>
		</Container>
	);
};

export default RegisterFormContent;
