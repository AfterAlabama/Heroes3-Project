import Pagination from '@mui/material/Pagination';
import { heroesArray } from '../../../../game/Heroes/HeroesArray';
import { ChangeEvent } from 'react';
import { useGetStateVariables } from '../../../../hooks/useGetStateVariables';

const HistoryMenuPagination = ({ arrayIndex }: { arrayIndex: number }) => {
	const { setHeroesPage, heroesPage, dispatch } = useGetStateVariables();

	const pageChangeHandler = (event: ChangeEvent<unknown>, value: number) => {
		dispatch(setHeroesPage(value));
	};

	return (
		<Pagination
			count={Math.ceil(heroesArray[arrayIndex].length / 8)}
			size='large'
			color='primary'
			page={heroesPage}
			onChange={pageChangeHandler}
			sx={{
				color: 'white',
				backgroundColor: 'rgba(255, 255, 255, 0.8)',
				width: '20%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				zIndex: 1,
				p: 2,
				borderRadius: '50%',
				mb: 5,
				ml: 25,
			}}
		/>
	);
};

export default HistoryMenuPagination;
