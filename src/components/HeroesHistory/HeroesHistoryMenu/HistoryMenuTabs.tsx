import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { SyntheticEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/ReduxHooks';
import { MainSlice } from '../../../store/Reducers/MainSlice';
import { Alignments } from '../../../types/Enums/Alignments';
import AppBar from '@mui/material/AppBar';
import blue from '@mui/material/colors/blue';
import { Theme } from '@mui/material';

function a11yProps(index: number) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`,
	};
}

const HistoryMenuTabs = () => {
	const { heroesMenuTabValue } = useAppSelector((state) => state.mainReducer);
	const dispatch = useAppDispatch();
	const { changeHeroesMenuTabValue } = MainSlice.actions;

	const handleChange = (_: SyntheticEvent, newValue: number) => {
		dispatch(changeHeroesMenuTabValue(newValue));
	};

	const getTabColor = (index: number, theme: Theme) => {
		if (index === 0) return blue[800];
		if (index === 1) return theme.palette.success.light;
		if (index === 2) return blue[800];
		if (index === 3) return theme.palette.error.main;
		if (index === 4) return theme.palette.grey[800];
		if (index === 5) return theme.palette.warning.dark;
		if (index === 6) return theme.palette.warning.light;
		if (index === 7) return theme.palette.success.main;
		return 'orange';
	};

	const tabsArray = Object.values(Alignments).map((tab, index) => (
		<Tab
			key={index}
			label={tab}
			{...a11yProps(index)}
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
	));

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
				onChange={handleChange}
				variant='fullWidth'
				aria-label='full width tabs example'
			>
				{tabsArray}
			</Tabs>
		</AppBar>
	);
};

export default HistoryMenuTabs;
