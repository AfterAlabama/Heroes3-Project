import { render, screen } from '@testing-library/react';
import HistoryMenuAccordions from '../HistoryMenuAccordions';
import { AppStore } from '../../../../../store/store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

describe('History Menu Accordions', () => {
	test('Component shows related accordions', () => {
		const store = AppStore();
		[
			'Кристиан',
			'Кленси',
			'Фафнер',
			'Кэлх',
			'Чарна',
			'Крэг Хак',
			'Аджит',
			'Алкин',
			'Эрдамон',
		].forEach((name, index) => {
			const { unmount } = render(
				<Provider store={store}>
					<MemoryRouter>
						<HistoryMenuAccordions arrayIndex={index} />
					</MemoryRouter>
				</Provider>
			);
			expect(screen.getByText(name)).toBeInTheDocument();
			unmount();
		});
	});
});
