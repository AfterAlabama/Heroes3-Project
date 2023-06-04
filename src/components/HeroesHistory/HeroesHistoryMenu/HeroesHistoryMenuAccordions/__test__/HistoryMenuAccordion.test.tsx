import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { AppStore } from '../../../../../store/store';
import { MemoryRouter } from 'react-router-dom';
import HistoryMenuAccordion from '../HistoryMenuAccordion';
import { Christian } from '../../../../../game/Heroes/Castle/Knights';
import { MainSlice } from '../../../../../store/Reducers/MainSlice';

describe('History menu Accordion', () => {
	test('Accordion is expanded depending on state', async () => {
		const store = AppStore();
		const { toggleAccordion } = MainSlice.actions;
		store.dispatch(toggleAccordion('panel2'));
		render(
			<Provider store={store}>
				<MemoryRouter>
					<HistoryMenuAccordion
						panelNumber='panel1'
						hero={Christian}
						heroDescription={Christian.description}
						heroName={Christian.name}
						heroPic={Christian.pic}
						heroSpec={Christian.heroClass}
					/>
				</MemoryRouter>
			</Provider>
		);

		expect(screen.getByRole('button')).toHaveAttribute(
			'aria-expanded',
			'false'
		);

		await waitFor(() => store.dispatch(toggleAccordion('panel1')));

		expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
	});

	test('Accordion mouseEnter handler changes the state properly', () => {
		const store = AppStore();
		const { toggleAccordion } = MainSlice.actions;
		store.dispatch(toggleAccordion('panel2'));
		render(
			<Provider store={store}>
				<MemoryRouter>
					<HistoryMenuAccordion
						panelNumber='panel1'
						hero={Christian}
						heroDescription={Christian.description}
						heroName={Christian.name}
						heroPic={Christian.pic}
						heroSpec={Christian.heroClass}
					/>
				</MemoryRouter>
			</Provider>
		);

		expect(screen.getByRole('button')).toHaveAttribute(
			'aria-expanded',
			'false'
		);

		fireEvent.mouseEnter(screen.getByRole('button'));

		expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
	});

	test('Accordion mouseLeave handler changes the state properly', () => {
		const store = AppStore();
		const { toggleAccordion } = MainSlice.actions;
		store.dispatch(toggleAccordion('panel2'));
		render(
			<Provider store={store}>
				<MemoryRouter>
					<HistoryMenuAccordion
						panelNumber='panel1'
						hero={Christian}
						heroDescription={Christian.description}
						heroName={Christian.name}
						heroPic={Christian.pic}
						heroSpec={Christian.heroClass}
					/>
				</MemoryRouter>
			</Provider>
		);

		expect(screen.getByRole('button')).toHaveAttribute(
			'aria-expanded',
			'false'
		);

		fireEvent.mouseEnter(screen.getByRole('button'));

		expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');

		fireEvent.mouseLeave(screen.getByRole('button'));

		expect(screen.getByRole('button')).toHaveAttribute(
			'aria-expanded',
			'false'
		);
	});
});
