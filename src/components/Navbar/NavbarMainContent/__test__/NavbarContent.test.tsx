import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppStore } from '../../../../store/store';
import { Provider } from 'react-redux';
import NavbarContent from '../NavbarContent';
import { MainSlice } from '../../../../store/Reducers/MainSlice';

describe('Navbar Content', () => {
	test('NavbarAuthContent is displayed', () => {
		const store = AppStore();
		const { changeAuth } = MainSlice.actions;
		store.dispatch(changeAuth(true));

		render(
			<Provider store={store}>
				<MemoryRouter>
					<NavbarContent />
				</MemoryRouter>
			</Provider>
		);

		expect(
			screen.getByRole('button', {
				name: /выйти/i,
			})
		).toBeInTheDocument();

		expect(
			screen.queryByRole('button', {
				name: /войти/i,
			})
		).toBeNull();
	});

	test('NavbarUnauthContent is displayed', () => {
		const store = AppStore();

		render(
			<Provider store={store}>
				<MemoryRouter>
					<NavbarContent />
				</MemoryRouter>
			</Provider>
		);

		expect(
			screen.getByRole('link', {
				name: /войти/i,
			})
		).toBeInTheDocument();

		expect(
			screen.queryByRole('button', {
				name: /выйти/i,
			})
		).toBeNull();
	});
});
