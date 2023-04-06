import green from '@mui/material/colors/green';
import grey from '@mui/material/colors/grey';
import red from '@mui/material/colors/red';
import { FC } from 'react';
import { FormContentProps } from '../AuthForm/AuthFormContent';
import FormTitle from '../Shared/FormTitle';
import StyledInput from '../Shared/StyledInput';
import SubmitButton from '../Shared/SubmitButton';
import { RegisterFormValues } from './RegisterFormCard';
import { FormContentContainer } from '../../../styles/FormContentContainer';
import { ColumnedFlex } from '../../../styles/ColumnedFlex';

const RegisterFormContent: FC<FormContentProps<RegisterFormValues>> = ({
	handleSubmit,
	handleBlur,
	handleChange,
	isSubmitting,
	errors,
	touched,
	values,
}) => {
	const submitCondition =
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

	const formHeightCondition =
		(errors.email && touched.email) ||
		(errors.confirmedPassword && touched.confirmedPassword) ||
		(errors.name && touched.name) ||
		(errors.password && touched.password)
			? '75vh'
			: '67vh'
	;

	return (
		<FormContentContainer height={formHeightCondition} >
			<form onSubmit={handleSubmit}>
				<ColumnedFlex>
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
						SubmitCondition={submitCondition}
						buttonText='Создать'
					/>
				</ColumnedFlex>
			</form>
		</FormContentContainer>
	);
};

export default RegisterFormContent;
