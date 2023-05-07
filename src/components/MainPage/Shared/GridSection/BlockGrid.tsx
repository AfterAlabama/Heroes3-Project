import Grid from '@mui/material/Grid';
import Block from './Block';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BuildIcon from '@mui/icons-material/Build';
import CastleIcon from '@mui/icons-material/Castle';
import blue from '@mui/material/colors/blue';
import { useAppSelector } from '../../../../hooks/ReduxHooks';
import LoginButton from '../Common/LoginButton';
import { RouteNames } from '../../../../types/Enums/RouteNames';
import { Link as ReactRouterLink } from 'react-router-dom';
import IsLoading from '../../../Common/IsLoading/IsLoading';
import Link from '@mui/material/Link';
import pic1 from '../../../../assets/heroesoverview.jpg';
import pic2 from '../../../../assets/heroesUnits.jpg';
import pic3 from '../../../../assets/heroesPhoenix.jpg';

const BlockGrid = () => {
	const { isAuth } = useAppSelector((state) => state.mainReducer);

	const blockClickhandler = () => {
		window.scrollTo(0, 0);
	};

	const authBlockCondition = (index: number) => {
		if (isAuth) {
			return (
				<IsLoading>
					<Link
						component={ReactRouterLink}
						to={RouteNames.HEROES_HISTORY}
						onClick={blockClickhandler}
						sx={(theme) => ({
							textDecoration: 'none',
							color: 'white',
							background: `linear-gradient(50deg, ${theme.palette.primary.main} 60%, transparent 100% ), url(${index === 1 ? pic1 : index === 2 ? pic2 : pic3})`,
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
						})}
					>
						Смотреть
					</Link>
				</IsLoading>
			);
		} else {
			return (
				<IsLoading>
					<LoginButton />
				</IsLoading>
			);
		}
	};

	return (
		<Grid
			container
			justifyContent='center'
			spacing={12}
			sx={{
				mb: 35,
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
					BlockButton={() => authBlockCondition(1)}
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
					BlockButton={() => authBlockCondition(2)}
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
					BlockButton={() => authBlockCondition(3)}
				/>
			</Grid>
		</Grid>
	);
};

export default BlockGrid;
