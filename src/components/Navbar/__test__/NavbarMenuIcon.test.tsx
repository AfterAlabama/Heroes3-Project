import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import NavbarMenuIcon from '../NavbarMenuIcon';
import { Provider } from 'react-redux';
import { AppStore } from '../../../store/store';
import { MainSlice } from '../../../store/Reducers/MainSlice';
import React from 'react';
describe('Navbar Menu Icon', () => {
	const toggleDrawer = jest.fn();
	const { changeAuth } = MainSlice.actions;

	afterEach(() => {
		jest.clearAllMocks();
	});

	test('Icon becomes enabled if user is authorized', async () => {
		const store = AppStore();

		render(
			<Provider store={store}>
				<NavbarMenuIcon toggleDrawer={toggleDrawer} />
			</Provider>
		);

		await waitFor(() => store.dispatch(changeAuth(true)));

		const iconButton = screen.getByLabelText('menu');

		expect(iconButton).toBeEnabled();
	});

	test('Icon becomes disabled if user is not authorized', async () => {
		const store = AppStore();
		store.dispatch(changeAuth(true));

		render(
			<Provider store={store}>
				<NavbarMenuIcon toggleDrawer={toggleDrawer} />
			</Provider>
		);

		await waitFor(() => store.dispatch(changeAuth(false)));

		const iconButton = screen.getByLabelText(/menu/i);

		expect(iconButton).toBeDisabled();
	});

	test('Icon button click handler works properly', () => {
		const clickHandler = jest.fn(
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			(event: React.KeyboardEvent | React.MouseEvent) => {}
		);
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const toggleDrawer = jest.fn((open: boolean) => {
			return clickHandler;
		});

		const store = AppStore();
		store.dispatch(changeAuth(true));

		render(
			<Provider store={store}>
				<NavbarMenuIcon toggleDrawer={toggleDrawer} />
			</Provider>
		);

		const iconButton = screen.getByLabelText(/menu/i);

		expect(clickHandler.mock.calls).toHaveLength(0);

		fireEvent.click(iconButton);
		expect(clickHandler.mock.calls).toHaveLength(1);
		expect(toggleDrawer).toBeCalledWith(true);

		fireEvent.click(iconButton);
		expect(clickHandler.mock.calls).toHaveLength(2);
		expect(toggleDrawer).toBeCalledWith(true);
	});
});
