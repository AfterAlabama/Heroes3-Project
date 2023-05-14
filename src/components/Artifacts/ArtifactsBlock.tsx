import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CenteredFlex } from '../../styles/Flex';
import { Link as ReactRouterLink } from 'react-router-dom';
import { RouteNames } from '../../types/Enums/RouteNames';
import Link from '@mui/material/Link';

const ArtifactsBlock = ({ src, name }: { src: string; name: string }) => {
	return (
		<Link
			component={ReactRouterLink}
			to={`${RouteNames.ARTIFACTS}/${name}`}
			sx={{
				textDecoration: 'none',
			}}
		>
			<CenteredFlex
				sx={(theme) => ({
					width: '150px',
					height: '150px',
					borderRadius: '5px',
					border: '2px solid blue',
					flexDirection: 'column',
					gap: 1,
					cursor: 'pointer',
					color: 'grey',
					boxShadow: '5px 5px 15px rgba(0,0,0,0.5)',
					transition: 'all 0.5s ease',
					'&:hover': {
						transform: 'scale(1.2)',
						boxShadow: '10px 10px 10px rgba(0,0,0,0.5)',
						backgroundColor: theme.palette.primary.main,
						borderRadius: '50%',
						color: 'white',
						border: `2px solid ${theme.palette.primary.main}`,
						'& > img': {
							borderRadius: '50%',
						},
					},
				})}
			>
				<Box
					component='img'
					src={src}
					sx={{
						height: '40%',
						width: '40%',
						borderRadius: '15px',
						transition: 'all 0.5s ease',
					}}
				/>
				<Typography
					sx={{
						fontSize: 12,
						textAlign: 'center',
						margin: '0 15px',
					}}
				>
					{name}
				</Typography>
			</CenteredFlex>
		</Link>
	);
};

export default ArtifactsBlock;
