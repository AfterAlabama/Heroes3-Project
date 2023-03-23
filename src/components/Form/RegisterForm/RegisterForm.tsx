import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';

interface RegForm {
	email?: string;
	name?: string;
	password?: string;
	confirmedPassword?: string;
}

const RegisterForm = () => {
	const [name, setName] = useState('');
  
	return (
		<Formik
			initialValues={{
				email: '',
				name: '',
				password: '',
				confirmedPassword: '',
			}}
			validate={(values) => {
				const errors: RegForm = {};
				if (!values.email) {
					errors.email = 'Required Email';
				}
				if (!values.password) {
					errors.password = 'Required Password';
				}
				if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
					errors.email = 'Incorrect Email';
				}
				if (values.confirmedPassword !== values.password) {
					errors.confirmedPassword = 'Passwords Must Match';
				}
				return errors;
			}}
			onSubmit={(values, { setSubmitting }) => {
        console.log(values)
        setSubmitting(false)
      }}
		>
			{({ isSubmitting }) => (
				<Form>
					<Field
						type='string'
						name='name'
					/>
					<ErrorMessage
						name='name'
						component='div'
					/>
					<Field
						type='email'
						name='email'
					/>
					<ErrorMessage
						name='email'
						component='div'
					/>
					<Field
						type='password'
						name='password'
					/>
					<ErrorMessage
						name='password'
						component='div'
					/>
					<Field
						type='confirmedPassword'
						name='confirmedPassword'
					/>
					<ErrorMessage
						name='confirmedPassword'
						component='div'
					/>
					<button
						type='submit'
						disabled={isSubmitting}
					>
						Submit
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default RegisterForm;
