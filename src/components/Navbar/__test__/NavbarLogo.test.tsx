import { fireEvent, render, screen } from '@testing-library/react';
import NavbarLogo from '../NavbarLogo';
import { MemoryRouter } from 'react-router-dom';
import { RouteNames } from '../../../types/Enums/RouteNames';
import { Provider } from 'react-redux';
import { AppStore } from '../../../store/store';

describe('Navbar Logo Link', () => {
	test('Link works when not on the main page', () => {
		render(
			<Provider store={AppStore()}>
				<MemoryRouter initialEntries={[RouteNames.HEROES_HISTORY]}>
					<NavbarLogo />
				</MemoryRouter>
			</Provider>
		);

		const link = screen.getByRole('link', {
			name: /heroprogeny/i,
		});

		expect(link).toHaveStyle({
			color: 'white',
			cursor: 'pointer',
		});

		fireEvent.click(link);

		expect(link).toHaveStyle({
			color: '#bdbdbd',
			cursor: 'default',
		});
	});

	test("Link doesn't work when on the main page", () => {
		render(
			<Provider store={AppStore()}>
				<MemoryRouter>
					<NavbarLogo />
				</MemoryRouter>
			</Provider>
		);

		const link = screen.getByRole('link', {
			name: /heroprogeny/i,
		});

		expect(link).toHaveStyle({
			color: '#bdbdbd',
			cursor: 'default',
		});

		fireEvent.click(link);

		expect(link).toHaveStyle({
			color: '#bdbdbd',
			cursor: 'default',
		});
	});
});
