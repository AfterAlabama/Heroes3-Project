import Block from './Block';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BuildIcon from '@mui/icons-material/Build';
import CastleIcon from '@mui/icons-material/Castle';
import blue from '@mui/material/colors/blue';
import { RouteNames } from '../../../../types/Enums/RouteNames';
import IsLoading from '../../../Common/IsLoading/IsLoading';
import pic1 from '../../../../assets/heroesoverview.jpg';
import pic2 from '../../../../assets/heroesUnits.jpg';
import pic3 from '../../../../assets/heroesPhoenix.jpg';
import NavigationButton from '../../../Common/NavigationButton/NavigationButton';
import Stack from '@mui/material/Stack';
import { useGetStateVariables } from '../../../../hooks/useGetStateVariables';

const BlockStack = () => {
	const { isAuth } = useGetStateVariables();

	const icons = [
		<AutoStoriesIcon
			sx={{ color: 'orange', fontSize: 40 }}
			key={0}
		/>,
		<BuildIcon
			sx={{ color: 'gray', fontSize: 40 }}
			key={1}
		/>,
		<CastleIcon
			sx={{ color: blue[400], fontSize: 40 }}
			key={2}
		/>,
	];
	const titles = ['Истории', 'Характеристика', 'Арена'];
	const descriptions = [
		'Описание и жизненный путь всех героев в Heroes Might & Magic 3',
		'Описание Характеристик Всех Юнитов в герои 3',
		'Возможность травить армии друг на друга',
	];

	return (
		<Stack
			component='section'
			direction={'row'}
			justifyContent={'space-around'}
		>
			{icons.map((icon, index) => (
				<Block
					key={index}
					BlockIcon={<IsLoading>{icon}</IsLoading>}
					BlockTitle={titles[index]}
					BlockContent={descriptions[index]}
					BlockButton={
						isAuth ? (
							<NavigationButton
								buttonText='Смотреть'
								direction={RouteNames.HEROES_HISTORY}
								ButtonSxProp={{
									textDecoration: 'none',
									color: 'white',
									background: `linear-gradient(50deg, #1976d2 60%, transparent 100% ), url(${
										index === 0 ? pic1 : index === 1 ? pic2 : pic3
									})`,
									backgroundSize: '250%',
									backgroundPosition: 'left',
									padding: '15px 25px',
									fontSize: 20,
									borderRadius: '15px',
									marginTop: '15px',
									transition: 'all 0.5s ease',
									'&:hover': {
										transform: 'scale(1.2)',
										boxShadow: '10px 10px 10px rgba(0,0,0,0.5)',
										backgroundPosition: 'right',
									},
								}}
							/>
						) : (
							<NavigationButton
								buttonText='Войти'
								direction={RouteNames.AUTH_FORM}
								ButtonSxProp={{
									transition: 'all ease 0.5s',
									'&:hover': {
										transform: 'translateY(10px)',
										boxShadow: '5px 5px 10px rgba(0,0,0,0.5)',
									},
								}}
							/>
						)
					}
				/>
			))}
		</Stack>
	);
};

export default BlockStack;
