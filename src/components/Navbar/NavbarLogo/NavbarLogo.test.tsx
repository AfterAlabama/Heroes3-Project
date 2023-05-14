import { MemoryRouter } from 'react-router-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import { TestIds } from '../../../types/Enums/TestIds';
import UnAuthMainPage from '../../MainPage/UnAuthMainPage/UnAuthMainPage';
import { Provider } from 'react-redux';
import { AppStore } from '../../../store/store';
import Navbar from '../Navbar';

describe('Navbar Logo test', () => {
	test('Link stops working when on the main page', () => {
		render(
      <Provider store={AppStore()} >
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>
		);
		const link = screen.getByTestId(TestIds.NAVBARLOGOLINK);

		expect(link).toHaveStyle({
			cursor: 'default',
			color: '#bdbdbd',
		});
	});

	test('Link works when not on the main page', () => {
		render(
			<Provider store={AppStore()}>
				<MemoryRouter>
					<Navbar />
					<UnAuthMainPage />
				</MemoryRouter>
			</Provider>
		);
		const link = screen.getByTestId(TestIds.NAVBARLOGOLINK);
		const authLink = screen.getAllByTestId(TestIds.AUTHLINK);

		fireEvent.click(authLink[0]);

		expect(link).toHaveStyle({
			color: 'white',
			cursor: 'pointer',
		});
	});
});
