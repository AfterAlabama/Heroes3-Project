import green from '@mui/material/colors/green';
import grey from '@mui/material/colors/grey';
import { forwardRef } from 'react';
import { FormContentProps } from '../AuthForm/AuthFormContent';
import FormTitle from '../Shared/FormTitle';
import StyledInput from '../Shared/StyledInput';
import red from '@mui/material/colors/red';
import { ColumnedFlex } from '../../../styles/ColumnedFlex';
import { EmailFormValues } from './PasswordChangeFormContent';
import FormButtons from '../Shared/FormButtons';

export const EmailForm = forwardRef<
	HTMLDivElement,
	FormContentProps<EmailFormValues>
>(
	(
		{
			values,
			errors,
			touched,
			handleChange,
			handleBlur,
			isSubmitting,
			clickHandler,
			handleSubmit,
		},
		ref
	) => {
		const submitCondition =
			touched.email && errors.email
				? red[100]
				: touched.email && !errors.email
				? green[100]
				: grey[100];
		const clickCondition =
			touched.email && !errors.email ? clickHandler : undefined;

		return (
			<form onSubmit={handleSubmit}>
				<ColumnedFlex ref={ref}>
					<FormTitle
						height={-5}
						text='Введите email'
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
					<FormButtons
						buttonText='Далее'
						isSubmitting={isSubmitting}
						submitCondition={submitCondition}
						clickHandler={clickCondition}
					/>
				</ColumnedFlex>
			</form>
		);
	}
);
