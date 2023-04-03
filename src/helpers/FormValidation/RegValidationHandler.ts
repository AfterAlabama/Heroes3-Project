import { FormValues } from '../../components/Form/RegisterForm/RegisterForm';
import { GetCookieValue } from '../Cookie/GetCookieValues';

export const RegValidationHandler = (values: FormValues): FormValues => {
	const errors: FormValues = {};
	if (values.name?.trim().length === 0) {
		errors.name = 'Поле с именем обязательно';
	}
	if (values.name && values.name === GetCookieValue('name')) {
		errors.name = 'Такое имя уже существует';
	}

	if (values.email?.trim().length === 0) {
		errors.email = 'Поле email обязательно';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email!)) {
		errors.email = 'Неверный Email';
	}
	if (values.email === GetCookieValue('email')) {
		errors.email = 'Аккаунт с таким email уже существует';
	}
	if (values.password?.trim().length === 0) {
		errors.password = 'Поле с паролем обязательно';
	}
	if (values.confirmedPassword?.trim().length === 0) {
		errors.confirmedPassword = 'Подтвердите пароль';
	}
	if (values.confirmedPassword !== values.password) {
		errors.confirmedPassword = 'Пароли не совпадают';
	}
	return errors;
};
