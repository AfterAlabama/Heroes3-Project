import green from '@mui/material/colors/green';
import grey from '@mui/material/colors/grey';
import red from '@mui/material/colors/red';
import { FormikErrors, FormikTouched } from 'formik';
import { FormEvent, FocusEvent, ChangeEvent, FC } from 'react';
import FormTitle from '../Shared/FormTitle';
import StyledInput from '../Shared/StyledInput';
import SubmitButton from '../Shared/SubmitButton';
import RegisterLink from './RegisterLink';
import { AuthFormValues } from './AuthFormCard';
import AuthFormHelperText from './AuthFormHelperText';
import { FormContentContainer } from '../../../styles/FormContentContainer';
import { ColumnedFlex } from '../../../styles/Flex';

export interface AuthFormCardContentProps<T extends object> {
	handleSubmit: (e?: FormEvent<HTMLDivElement>) => void;
	handleBlur: (e: FocusEvent<HTMLInputElement>) => void;
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
	isSubmitting: boolean;
	errors: FormikErrors<T>;
	touched: FormikTouched<T>;
	values: T
}

const AuthFormCardContent: FC<AuthFormCardContentProps<AuthFormValues>> = ({
	handleSubmit,
	handleBlur,
	handleChange,
	isSubmitting,
	errors,
	touched,
	values,
}) => {
	const submitCondition =
		(touched.email && errors.email) || (touched.password && errors.password)
			? red[100]
			: touched.email && !errors.email && touched.password && !errors.password
			? green[100]
			: grey[100]
	;

	const formHeightCondition =
		(errors.email && touched.email) || (errors.password && touched.password)
			? '60vh'
			: '55vh'
	;

	return (
		<FormContentContainer height={formHeightCondition}>
			<ColumnedFlex
				component='form'
				onSubmit={handleSubmit}
			>
				<FormTitle
					height={-5}
					text='Вход в аккаунт'
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
				<AuthFormHelperText />
				<SubmitButton
					isSubmitting={isSubmitting}
					SubmitCondition={submitCondition}
					buttonText='Войти'
				/>
				<RegisterLink />
			</ColumnedFlex>
		</FormContentContainer>
	);
};

export default AuthFormCardContent;
