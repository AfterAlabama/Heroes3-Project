import { AuthFormValues } from '../../components/Form/AuthForm/AuthFormCard';
import { GetCookieValue } from '../Cookie/GetCookieValues';

export const AuthValidationHandler = (values: AuthFormValues): AuthFormValues => {
	const errors: Partial<AuthFormValues> = {};

	if (values.email.trim().length === 0) {
		errors.email = 'Поле email обязательно';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		errors.email = 'Неверный Email';
	} else if (values.email !== GetCookieValue('email')) {
		errors.email = 'Аккаунта с данным email не существует';
	}

	if (values.password.trim().length === 0) {
		errors.password = 'Поле с паролем обязательно';
	}
	if (values.password !== GetCookieValue('password')) {
		errors.password = 'Неверный Пароль';
	}
	return errors as AuthFormValues ;
};
