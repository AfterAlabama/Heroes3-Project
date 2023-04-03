export const CreateCookie = (
	name: string,
	value: string | null,
	expirationDate: number | null
): void => {
	const date = new Date();
	date.setTime(
		date.getTime() +
			(expirationDate ? expirationDate : -1) * 24 * 60 * 60 * 1000
	);
	const expires = 'expires=' + date.toUTCString();
	document.cookie = `${name}=${value}; ${expires}; path=/`;
};
