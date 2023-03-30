import Typography from '@mui/material/Typography';
import Navbar from '../Navbar/Navbar';
import HeroPic from '../../assets/heroes-3-hdtcm21186796.0.0.png';
import Box from '@mui/material/Box';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import blue from '@mui/material/colors/blue';
import Link from '@mui/material/Link';
import { RouteNames } from '../../types/Enums/RouteNames';
import Button from '@mui/material/Button';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BuildIcon from '@mui/icons-material/Build';
import CastleIcon from '@mui/icons-material/Castle';
import { useNavigate } from 'react-router-dom';

const UnAuthMainPage = () => {
	const navigate = useNavigate();
	const clickHandler = () => {
		navigate(RouteNames.AUTH_FORM);
	};

	return (
		<>
			<Navbar />
			<main
				style={{
					height: '100vh',
					width: '100%',
					display: 'flex',
					justifyContent: 'space-around',
					alignItems: 'center',
					position: 'relative',
					overflow: 'hidden',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						width: '30%',
					}}
				>
					<Typography
						sx={{
							fontSize: 14,
							color: 'grey',
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<AcUnitIcon /> Абсолютно бесплатное пользование
					</Typography>
					<Typography
						sx={{
							fontSize: 70,
						}}
					>
						Война Позабытых{' '}
						<span
							style={{
								background: `linear-gradient( to right, black, ${blue[600]})`,
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
							}}
						>
							Поколений
						</span>
					</Typography>
					<Typography
						sx={{
							marginTop: 1,
						}}
					>
						<Link href={RouteNames.AUTH_FORM}>Войдите</Link> в аккаунт и узнайте
						все о великом противостоянии наций Эрафии, продлившемся тысячелетия
					</Typography>
					<Button
						onClick={clickHandler}
						sx={{
							marginTop: 4,
							color: 'white',
							backgroundColor: blue[500],
							'&:hover': {
								backgroundColor: blue[200],
							},
						}}
					>
						Войти в аккаунт
					</Button>
				</Box>
				<img
					alt='HeroPic'
					src={HeroPic}
					style={{
						width: '50%',
						height: '50%',
					}}
				/>
				<div
					style={{
						position: 'absolute',
						left: '65vw',
						top: '-20vh',
					}}
				>
					<div
						style={{
							width: '120vh',
							height: '120vh',
							backgroundColor: blue[100],
							opacity: 0.3,
							position: 'absolute',
							borderRadius: '50%',
							zIndex: -1,
						}}
					/>
				</div>
			</main>
			<section
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-around',
          margin: '0 4vw'
				}}
			>
				<Box
					sx={{
						height: '100%',
						width: '100%',
            padding: 10,
            margin: '0 1vw',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
            boxShadow: '0 0 5px 5px rgba(51,51,255,0.1)',
            '&:hover': {
              boxShadow: '0 0 10px 5px rgba(51,51,255,0.1)'
            }
					}}
				>
					<AutoStoriesIcon
						sx={{
							color: 'orange',
							fontSize: 40,
						}}
					/>
					<Typography
						sx={{
							fontSize: 30,
						}}
					>
						Истории
					</Typography>
					<Typography
						sx={{
							color: 'gray',
							width: '40%',
							textAlign: 'center',
						}}
					>
						Жизненные истории всех героев в герои 3
					</Typography>
					<Button
						onClick={clickHandler}
						sx={{
							marginTop: 2,
							color: 'white',
							backgroundColor: blue[500],
							'&:hover': {
								backgroundColor: blue[200],
							},
						}}
					>
						Войдите чтобы смотреть
					</Button>
				</Box>
				<Box
					sx={{
						height: '100%',
						width: '100%',
						display: 'flex',
            padding:10,
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						margin: '0 1vw',
            boxShadow: '0 0 5px 5px rgba(51,51,255,0.1)',
            '&:hover': {
              boxShadow: '0 0 10px 5px rgba(51,51,255,0.1)'
            }
					}}
				>
					<BuildIcon
						sx={{
							fontSize: 40,
							color: 'gray',
						}}
					/>
					<Typography
						sx={{
							fontSize: 30,
							textAlign: 'center',
						}}
					>
						Характеристика
					</Typography>
					<Typography
						sx={{
							color: 'gray',
							width: '40%',
							textAlign: 'center',
						}}
					>
						Описание Характеристик Всех Юнитов в герои 3
					</Typography>
					<Button
						onClick={clickHandler}
						sx={{
							marginTop: 2,
							color: 'white',
							backgroundColor: blue[500],
							'&:hover': {
								backgroundColor: blue[200],
							},
						}}
					>
						Войдите чтобы смотреть
					</Button>
				</Box>
				<Box
					sx={{
						height: '100%',
						width: '100%',
            padding: 10,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						margin: '0 1vw',
            boxShadow: '0 0 5px 5px rgba(51,51,255,0.1)',
            '&:hover': {
              boxShadow: '0 0 10px 5px rgba(51,51,255,0.1)'
            }
					}}
				>
					<CastleIcon
						sx={{
							color: blue[400],
							fontSize: 40,
						}}
					/>
					<Typography
						sx={{
							fontSize: 30,
							textAlign: 'center',
						}}
					>
						Арена
					</Typography>
					<Typography
						sx={{
							color: 'gray',
							width: '40%',
							textAlign: 'center',
						}}
					>
						Возможность травить армии друг на друга
					</Typography>
					<Button
						onClick={clickHandler}
						sx={{
							marginTop: 2,
							color: 'white',
							backgroundColor: blue[500],
							'&:hover': {
								backgroundColor: blue[200],
							},
						}}
					>
						Войдите чтобы смотреть
					</Button>
				</Box>
			</section>
			<footer style={{
        height: '10vh',
        marginTop: '30vh',
        backgroundColor: blue[800],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 20
      }}>Hero progeny Inc. 2023</footer>
		</>
	);
};

export default UnAuthMainPage;
