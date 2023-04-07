import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { SyntheticEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/ReduxHooks';
import { MainSlice } from '../../../store/Reducers/MainSlice';
import { Alignments } from '../../../types/Enums/Alignments';
import AppBar from '@mui/material/AppBar';
import blue from '@mui/material/colors/blue';

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

	const tabsArray = Object.values(Alignments).map((tab, index) => (
		<Tab
			key={index}
			label={tab}
			{...a11yProps(index)}
			sx={{
				opacity: 0.8,
				fontSize: 18,
				'&:hover': {
					borderBottom: heroesMenuTabValue !== index ? `solid 2px ${blue[400]}` : ''
				},

			}}
		/>
	));

	return (
		<AppBar position='static' sx={{
			backgroundColor: 'white',
			boxShadow: 'none',
			borderBottom: 'solid 0.5px rgba(0,0,0,0.2)'
		}} >
			<Tabs
			sx={{
				color: 'black'
			}}
				value={heroesMenuTabValue}
				onChange={handleChange}
				indicatorColor='primary'
				variant='fullWidth'
				aria-label='full width tabs example'
			>
				{tabsArray}
			</Tabs>
		</AppBar>
	);
};

export default HistoryMenuTabs;
