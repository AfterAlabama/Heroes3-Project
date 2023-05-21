import { EmailFormValidationProps } from '../../components/Form/PasswordChangeForm/EmailForm';
import { PasswordFormValidationProps } from '../../components/Form/PasswordChangeForm/PasswordsForm';
import { GetCookieValue } from '../Cookie/GetCookieValues';

export const PasswordFormValidationHandler = (
	values: PasswordFormValidationProps
) => {
	const errors: Partial<PasswordFormValidationProps> = {};

	if (values.password.trim().length === 0) {
		errors.password = 'Поле с паролем обязательно';
	}
	if(values.password === GetCookieValue('password')){
		errors.password = 'Старый и новый пароли совпадают'
	}

	if (values.confirmedPassword.trim().length === 0) {
		errors.confirmedPassword = 'Подтвердите пароль';
	} else if (values.confirmedPassword !== values.password) {
		errors.confirmedPassword = 'Пароли не совпадают';
	}
	return errors as PasswordFormValidationProps ;
};

export const EmailFormValidationHandler = (values: EmailFormValidationProps) => {
	const errors: Partial<EmailFormValidationProps> = {};

	if (values.email.trim().length === 0) {
		errors.email = 'Поле email обязательно';
	} else if (
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ||
		values.email !== GetCookieValue('email')
	) {
		errors.email = 'Неверный Email';
	}
	return errors as EmailFormValidationProps
}
