export const GetCookieValue = (name: string): string | null => {
	const decodedCookie = decodeURIComponent(document.cookie);
	let result = null;

	decodedCookie.split('; ').forEach((element) => {
		if (element.indexOf(name) === 0) {
			result = element.substring(name.length + 1);
		}
	});
	return result;
};
