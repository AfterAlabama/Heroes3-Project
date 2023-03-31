import Button from '@mui/material/Button';
import green from '@mui/material/colors/green';
import grey from '@mui/material/colors/grey';
import { forwardRef } from 'react';
import { FormContentProps } from '../AuthForm/AuthFormContent';
import FormTitle from '../Shared/FormTitle';
import StyledInput from '../Shared/StyledInput';

export const EmailForm = forwardRef<HTMLFormElement, FormContentProps>(
	(
		{
			values,
			errors,
			touched,
			handleChange,
			handleBlur,
			handleSubmit,
			clickHandler,
		},
		ref
	) => {

		const DisabledCondition = errors.email || !touched.email ? true : false;

		const BackgroundColorCondition = touched.email && !errors.email ? green[100] : grey[100];

		return (
			<form
				ref={ref}
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
				}}
				onSubmit={handleSubmit}
			>
				<FormTitle text='Введите email' />
				<StyledInput
					instance='email'
					isError={errors.email}
					isValue={values.email}
					isTouched={touched.email}
					handleBlur={handleBlur}
					handleChange={handleChange}
					labelText='Email Адрес'
				/>
				<Button
					disabled={DisabledCondition}
					sx={{
						fontSize: 20,
						backgroundColor: BackgroundColorCondition
					}}
					onClick={clickHandler}
				>
					Далее
				</Button>
			</form>
		);
	}
);
