import { render, screen } from '@testing-library/react';
import ArtifactsPagination from '../ArtifactsPagination';
import { Provider } from 'react-redux';
import { AppStore } from '../../../../store/store';
import { ArtifactArray } from '../../../../game/Artifacts/ArtifactArray';

describe('Artifacts Pagination', () => {
	test('Pagination returns a neccessary amount of pages', () => {
		Array(6)
			.fill(null)
			.map((_, index) => {
				const { unmount } = render(
					<Provider store={AppStore()}>
						<ArtifactsPagination
							finalArray={ArtifactArray.flat().slice(0, index * 20 + 20)}
						/>
					</Provider>
				);

				if (index === 0) {
					expect(
						screen.getByLabelText(`page ${index + 1}`)
					).toBeInTheDocument();
				} else {
					expect(
						screen.getByLabelText(`Go to page ${index + 1}`)
					).toBeInTheDocument();
				}

				unmount();
			});
	});
});
