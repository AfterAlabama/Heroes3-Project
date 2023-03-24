import Button from '@mui/material/Button';
import green from '@mui/material/colors/green';
import grey from '@mui/material/colors/grey';
import red from '@mui/material/colors/red';
import { FormikErrors, FormikTouched } from 'formik';
import { FC } from 'react';

interface SubmitButtonProps {
	isSubmitting: boolean;
	errors: FormikErrors<{
		email: string;
		password: string;
		name: string;
		confirmedPassword: string;
	}>;
	touched: FormikTouched<{
		email: string;
		password: string;
		name: string;
		confirmedPassword: string;
	}>;
	buttonText: string;
}

const SubmitButton: FC<SubmitButtonProps> = ({
	isSubmitting,
	errors,
	touched,
	buttonText,
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
			: grey[100];

	return (
		<Button
			type='submit'
			disabled={isSubmitting}
			sx={{
				width: 100,
				height: 50,
				backgroundColor: SubmitCondition,
			}}
		>
			{buttonText}
		</Button>
	);
};

export default SubmitButton;
