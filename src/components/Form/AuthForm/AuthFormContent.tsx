import green from '@mui/material/colors/green';
import grey from '@mui/material/colors/grey';
import red from '@mui/material/colors/red';
import Container from '@mui/material/Container';
import FormHelperText from '@mui/material/FormHelperText';
import Link from '@mui/material/Link';
import { FormikErrors, FormikTouched } from 'formik';
import { FormEvent, FocusEvent, ChangeEvent, FC } from 'react';
import { RouteNames } from '../../../types/Enums/RouteNames';
import FormTitle from '../Shared/FormTitle';
import StyledInput from '../Shared/StyledInput';
import SubmitButton from '../Shared/SubmitButton';
import RegisterLink from './RegisterLink';

export interface FormContentProps {
	handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
	handleBlur: (e: FocusEvent<HTMLInputElement>) => void;
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
	isSubmitting: boolean;
	errors: FormikErrors<{
		email?: string;
		password?: string;
		name?: string;
		confirmedPassword?: string;
	}>;
	touched: FormikTouched<{
		email?: string;
		password?: string;
		name?: string;
		confirmedPassword?: string;
	}>;
	values: {
		email?: string;
		password?: string;
		name?: string;
		confirmedPassword?: string;
	};
	clickHandler?: () => void;
}

const AuthFormContent: FC<FormContentProps> = ({
	handleSubmit,
	handleBlur,
	handleChange,
	isSubmitting,
	errors,
	touched,
	values,
}) => {
	const SubmitCondition =
		(touched.email && errors.email) || (touched.password && errors.password)
			? red[100]
			: touched.email && !errors.email && touched.password && !errors.password
			? green[100]
			: grey[100]
	;

	const FormHeightCondition =
		(errors.email && touched.email) || (errors.password && touched.password)
			? '60vh'
			: '55vh'
	;

	return (
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-around',
				alignItems: 'center',
				height: FormHeightCondition,
				width: '23vw',
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
				<FormTitle text='Вход в аккаунт' />
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
				<FormHelperText
					sx={{
						marginLeft: 24,
						marginTop: -2,
						marginBottom: 2,
					}}
				>
					<Link
						href={RouteNames.PASSWORD_CHANGE}
						sx={{
							color: 'grey',
							textDecoration: 'none',
							cursor: 'pointer',
						}}
					>
						Забыли пароль?
					</Link>
				</FormHelperText>
				<SubmitButton
					isSubmitting={isSubmitting}
					SubmitCondition={SubmitCondition}
					buttonText='Войти'
				/>
				<RegisterLink />
			</form>
		</Container>
	);
};

export default AuthFormContent;
