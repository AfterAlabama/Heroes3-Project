import green from '@mui/material/colors/green';
import grey from '@mui/material/colors/grey';
import { FormEvent, MutableRefObject, forwardRef } from 'react';
import FormTitle from '../Shared/FormTitle';
import StyledInput from '../Shared/StyledInput';
import red from '@mui/material/colors/red';
import FormButtons from '../Shared/FormButtons';
import { ColumnedFlex } from '../../../styles/Flex';
import { Formik, FormikErrors, FormikTouched } from 'formik';
import { EmailFormValidationHandler } from '../../../helpers/FormValidation/PasswordChangeValidationHandler';
import { gsap } from 'gsap';

export interface EmailFormValidationProps {
	email: string;
}

interface EmailFormProps {
	emailFormRef: MutableRefObject<HTMLDivElement>;
	passwordFormRef: MutableRefObject<HTMLDivElement>;
}

export const EmailForm = forwardRef<HTMLDivElement, EmailFormProps>(
	({ emailFormRef, passwordFormRef }, ref) => {
		const submitCondition = (
			touched: FormikTouched<EmailFormValidationProps>,
			errors: FormikErrors<EmailFormValidationProps>
		) => {
			if (touched.email && errors.email) return red[100];
			if (touched.email && !errors.email) return green[100];
			return grey[100];
		};

		const emailSubmitHandler = (
			values: EmailFormValidationProps,
			{ setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
		) => {
			setSubmitting(false);
			const tl = gsap.timeline();
			tl.to(emailFormRef.current, {
				duration: 0.3,
				x: -500,
			});

			tl.fromTo(
				passwordFormRef.current,
				{
					x: 500,
					y: -100,
				},
				{
					display: 'flex',
					duration: 0.3,
					x: 0,
				}
			);
		};

		return (
			<Formik
				initialValues={{ email: '' }}
				validate={EmailFormValidationHandler}
				onSubmit={emailSubmitHandler}
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
						ref={ref}
						component='form'
						onSubmit={handleSubmit as (e?: FormEvent<HTMLDivElement>) => void}
					>
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
							submitCondition={submitCondition(touched, errors)}
						/>
					</ColumnedFlex>
				)}
			</Formik>
		);
	}
);
