import { FormikErrors, FormikTouched } from 'formik';
import { FormContentContainer } from '../../../styles/FormContentContainer';
import { EmailForm } from './EmailForm';
import PasswordsForm from './PasswordsForm';
import { ChangeEvent, FocusEvent, FC, FormEvent, useRef } from 'react';
import { gsap } from 'gsap';

export interface EmailFormValues {
	email: string;
}

export interface PasswordFormValues {
	password: string;
	confirmedPassword: string;
}

export interface PasswordChangeFormValues
	extends EmailFormValues,
		PasswordFormValues {}

interface PasswordChangeFormContentProps {
	touched: FormikTouched<PasswordChangeFormValues>;
	errors: FormikErrors<PasswordChangeFormValues>;
	values: PasswordChangeFormValues;
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleBlur: (e: FocusEvent<HTMLInputElement>) => void;
	handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
	isSubmitting: boolean;
}

const PasswordChangeFormContent: FC<PasswordChangeFormContentProps> = ({
	touched,
	errors,
	values,
	handleChange,
	handleBlur,
	handleSubmit,
	isSubmitting,
}) => {
	const emailRef = useRef<HTMLDivElement>({} as HTMLDivElement);
	const passwordRef = useRef<HTMLDivElement>({} as HTMLDivElement);

	const clickHandler = () => {
		const tl = gsap.timeline();
		tl.to(emailRef.current, {
			duration: 0.3,
			x: -500,
		});

		tl.fromTo(
			passwordRef.current,
			{
				x: 500,
				y: -100,
			},
			{
				display: 'flex',
				duration: 0.3,
				x: 0
			}
		);
	};

	const heightFormCondition = (
		touched: FormikTouched<PasswordFormValues>,
		errors: FormikErrors<PasswordFormValues>
	) => {
		if (
			(touched.password && errors.password) ||
			(touched.confirmedPassword && errors.confirmedPassword)
		) {
			return '50vh';
		} else return '40vh';
	};

	return (
		<FormContentContainer height={heightFormCondition(touched, errors)}>
			<EmailForm
				ref={emailRef}
				values={values}
				errors={errors}
				touched={touched}
				handleChange={handleChange}
				handleBlur={handleBlur}
				handleSubmit={handleSubmit}
				isSubmitting={isSubmitting}
				clickHandler={clickHandler}
			/>
			<PasswordsForm
				ref={passwordRef}
				values={values}
				errors={errors}
				touched={touched}
				handleChange={handleChange}
				handleBlur={handleBlur}
				handleSubmit={handleSubmit}
				isSubmitting={isSubmitting}
			/>
		</FormContentContainer>
	);
};

export default PasswordChangeFormContent;
