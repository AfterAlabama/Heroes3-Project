import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { SyntheticEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { MainSlice } from '../../../store/Reducers/MainSlice';
import { Alignments } from '../../../types/Enums/Alignments';
import AppBar from '@mui/material/AppBar';
import blue from '@mui/material/colors/blue';
import { Theme } from '@mui/material';

const HistoryMenuTabs = () => {
	const { heroesMenuTabValue } = useAppSelector((state) => state.mainReducer);
	const dispatch = useAppDispatch();
	const { changeHeroesMenuTabValue } = MainSlice.actions;

	const tabsChangeHandler = (_: SyntheticEvent, newValue: number) => {
		dispatch(changeHeroesMenuTabValue(newValue));
	};

	const getTabColor = (index: number, theme: Theme) => {
		const tabColors = [
			blue[800],
			theme.palette.success.light,
			blue[800],
			theme.palette.error.main,
			theme.palette.grey[800],
			theme.palette.warning.dark,
			theme.palette.warning.light,
			theme.palette.success.main,
			'orange',
		];

		return tabColors[index];
	};

	return (
		<AppBar
			position='static'
			sx={{
				backgroundColor: 'white',
				boxShadow: 'none',
				borderBottom: 'solid 0.5px rgba(0,0,0,0.2)',
			}}
		>
			<Tabs
				sx={{
					color: 'black',
				}}
				value={heroesMenuTabValue}
				onChange={tabsChangeHandler}
				variant='fullWidth'
			>
				{Object.values(Alignments).map((tab, index) => (
					<Tab
						key={index}
						label={tab}
						sx={(theme) => ({
							opacity: 0.8,
							fontSize: 18,
							'&:hover': {
								borderBottom:
									heroesMenuTabValue !== index
										? `solid 2px ${getTabColor(index, theme)}`
										: '',
							},
						})}
					/>
				))}
			</Tabs>
		</AppBar>
	);
};

export default HistoryMenuTabs;
