import { render, screen } from '@testing-library/react';
import NavbarCaption from '../NavbarCaption';
import { CreateCookie } from '../../../../helpers/Cookie/CreateCookie';
import { GetCookieValue } from '../../../../helpers/Cookie/GetCookieValues';

describe('Navbar Caption', () => {
	test("Caption show the user's name", () => {
		CreateCookie('name', 'My name', 365);

		render(<NavbarCaption />);

		expect(screen.getByText(/привет/i)).toHaveTextContent(
			`Привет, ${GetCookieValue('name')}`
		);

		CreateCookie('name', 'Your name', 365);

		render(<NavbarCaption />);

		expect(screen.getAllByText(/привет/i)[1]).toHaveTextContent(
			`Привет, ${GetCookieValue('name')}`
		);
	});
});
