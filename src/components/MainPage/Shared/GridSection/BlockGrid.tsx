import Grid from '@mui/material/Grid';
import Block from './Block';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BuildIcon from '@mui/icons-material/Build';
import CastleIcon from '@mui/icons-material/Castle';
import blue from '@mui/material/colors/blue';
import { useAppSelector } from '../../../../hooks/ReduxHooks';
import Button from '@mui/material/Button';
import LoginButton from '../Common/LoginButton';
import { RouteNames } from '../../../../types/Enums/RouteNames';
import { useNavigate } from 'react-router-dom';

const BlockGrid = () => {
	const { isAuth } = useAppSelector((state) => state.mainReducer);
	const navigate = useNavigate();

	const BlockClickhandler = (direction: string) => {
		navigate(direction);
		window.scrollTo(0,0)
	};

	const AuthBlockCondition = isAuth ? (
		<Button onClick={() => BlockClickhandler(RouteNames.HEROES_HISTORY)}>
			Смотреть
		</Button>
	) : (
		<LoginButton />
	);

	return (
		<Grid
			container
			justifyContent='center'
			spacing={12}
		>
			<Grid item>
				<Block
					BlockIcon={
						<AutoStoriesIcon
							sx={{
								color: 'orange',
								fontSize: 40,
							}}
						/>
					}
					BlockTitle='Истории'
					BlockContent='Описание и жизненный путь всех героев в Heroes Might & Magic 3'
					BlockButtonOrInfo={AuthBlockCondition}
				/>
			</Grid>
			<Grid item>
				<Block
					BlockIcon={
						<BuildIcon
							sx={{
								fontSize: 40,
								color: 'gray',
							}}
						/>
					}
					BlockTitle='Характеристика'
					BlockContent='Описание Характеристик Всех Юнитов в герои 3'
					BlockButtonOrInfo={
						isAuth ? <Button>Характеристики</Button> : <LoginButton />
					}
				/>
			</Grid>
			<Grid item>
				<Block
					BlockIcon={
						<CastleIcon
							sx={{
								color: blue[400],
								fontSize: 40,
							}}
						/>
					}
					BlockTitle='Арена'
					BlockContent='Возможность травить армии друг на друга'
					BlockButtonOrInfo={isAuth ? <Button>Арена</Button> : <LoginButton />}
				/>
			</Grid>
		</Grid>
	);
};

export default BlockGrid;
