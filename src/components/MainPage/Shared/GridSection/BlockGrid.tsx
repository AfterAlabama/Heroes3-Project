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
import IsLoading from '../../../Common/IsLoading/IsLoading';

const BlockGrid = () => {
	const { isAuth } = useAppSelector((state) => state.mainReducer);
	const navigate = useNavigate();

	const blockClickhandler = (direction: string) => {
		navigate(direction);
		window.scrollTo(0,0)
	};

	const authBlockCondition = isAuth ? (
		<IsLoading>
			<Button onClick={() => blockClickhandler(RouteNames.HEROES_HISTORY)}>
				Смотреть
			</Button>
		</IsLoading>
	) : (
		<IsLoading>
			<LoginButton />
		</IsLoading>
	);

	return (
		<Grid
			container
			justifyContent='center'
			spacing={12}
			sx={{
				mb:35
			}}
		>
			<Grid item>
				<Block
					BlockIcon={
						<IsLoading>
							<AutoStoriesIcon
								sx={{
									color: 'orange',
									fontSize: 40,
								}}
							/>
						</IsLoading>
					}
					BlockTitle='Истории'
					BlockContent='Описание и жизненный путь всех героев в Heroes Might & Magic 3'
					BlockButton={authBlockCondition}
				/>
			</Grid>
			<Grid item>
				<Block
					BlockIcon={
						<IsLoading>
							<BuildIcon
								sx={{
									fontSize: 40,
									color: 'gray',
								}}
							/>
						</IsLoading>
					}
					BlockTitle='Характеристика'
					BlockContent='Описание Характеристик Всех Юнитов в герои 3'
					BlockButton={authBlockCondition}
				/>
			</Grid>
			<Grid item>
				<Block
					BlockIcon={
						<IsLoading>
							<CastleIcon
								sx={{
									color: blue[400],
									fontSize: 40,
								}}
							/>
						</IsLoading>
					}
					BlockTitle='Арена'
					BlockContent='Возможность травить армии друг на друга'
					BlockButton={authBlockCondition}
				/>
			</Grid>
		</Grid>
	);
};

export default BlockGrid;
