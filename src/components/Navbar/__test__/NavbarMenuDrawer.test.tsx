/* eslint-disable @typescript-eslint/no-unused-vars */
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { AppStore } from '../../../store/store';
import { MemoryRouter } from 'react-router-dom';
import NavbarMenuDrawer from '../NavbarMenuDrawer';
import { MainSlice } from '../../../store/Reducers/MainSlice';

describe('Navbar Menu Drawer', () => {
	test('Drawer opens and closes on state change', async () => {
		const store = AppStore();
		const { changeLeftDrawer } = MainSlice.actions;
		const clickHandler = jest.fn(
			(event: React.KeyboardEvent | React.MouseEvent) => {
				store.dispatch(changeLeftDrawer(false));
			}
		);
		const toggle = jest.fn((open: boolean) => clickHandler);

		store.dispatch(changeLeftDrawer(true));

		render(
			<Provider store={store}>
				<MemoryRouter>
					<NavbarMenuDrawer toggleDrawer={toggle} />
				</MemoryRouter>
			</Provider>
		);

		expect(screen.getAllByRole('presentation')[0]).not.toHaveAttribute(
			'aria-hidden'
		);

		await waitFor(() => store.dispatch(changeLeftDrawer(false)));

		expect(
			screen.getAllByRole('presentation', {
				hidden: true,
			})[0]
		).toHaveAttribute('aria-hidden');
	});

	test('Drawer box click handler works properly', async () => {
		const store = AppStore();
		const { changeLeftDrawer } = MainSlice.actions;

		const clickHandler = jest.fn(
			(event: React.KeyboardEvent | React.MouseEvent) => {
				store.dispatch(changeLeftDrawer(false));
			}
		);
		const toggle = jest.fn((open: boolean) => clickHandler);

		store.dispatch(changeLeftDrawer(true));

		render(
			<Provider store={store}>
				<MemoryRouter>
					<NavbarMenuDrawer toggleDrawer={toggle} />
				</MemoryRouter>
			</Provider>
		);

		expect(screen.getAllByRole('presentation')[0]).not.toHaveAttribute(
			'aria-hidden'
		);

		fireEvent.click(screen.getAllByRole('presentation')[1]);

		expect(
			screen.getAllByRole('presentation', {
				hidden: true,
			})[0]
		).toHaveAttribute('aria-hidden');

		expect(clickHandler.mock.calls).toHaveLength(1);
	});

	test('Drawer box keyDown handler works properly', async () => {
		const store = AppStore();
		const { changeLeftDrawer } = MainSlice.actions;

		const clickHandler = jest.fn(
			(event: React.KeyboardEvent | React.MouseEvent) => {
				store.dispatch(changeLeftDrawer(false));
			}
		);
		const toggle = jest.fn((open: boolean) => clickHandler);

		store.dispatch(changeLeftDrawer(true));

		render(
			<Provider store={store}>
				<MemoryRouter>
					<NavbarMenuDrawer toggleDrawer={toggle} />
				</MemoryRouter>
			</Provider>
		);

		expect(screen.getAllByRole('presentation')[0]).not.toHaveAttribute(
			'aria-hidden'
		);

		fireEvent.keyDown(screen.getAllByRole('presentation')[1]);

		expect(
			screen.getAllByRole('presentation', { hidden: true })[0]
		).toHaveAttribute('aria-hidden');

		expect(clickHandler.mock.calls).toHaveLength(1);
	});
});
