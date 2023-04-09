import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Formik } from 'formik';
import { PasswordValidationHandler } from '../../../helpers/FormValidation/PasswordValidationHandler';
import PasswordChangeFormContent from './PasswordChangeFormContent';

const PasswordChangeFormCard = () => {
	return (
		<Card>
			<CardContent>
				<Formik
					initialValues={{ email: '', password: '', confirmedPassword: '' }}
					validate={PasswordValidationHandler}
					onSubmit={() => {}}
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
						<PasswordChangeFormContent
							errors={errors}
							touched={touched}
							values={values}
							handleBlur={handleBlur}
							handleChange={handleChange}
							handleSubmit={handleSubmit}
							isSubmitting={isSubmitting}
						/>
					)}
				</Formik>
			</CardContent>
		</Card>
	);
};

export default PasswordChangeFormCard;
