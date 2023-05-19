import { ReactNode } from 'react';
import IsLoading from '../../../Common/IsLoading/IsLoading';
import { CenteredFlex } from '../../../../styles/Flex';

const HeroComponentStatIcon = ({ icon }: { icon: ReactNode }) => {
	return (
		<IsLoading>
			<CenteredFlex
				sx={(theme) => ({
					width: '100px',
					height: '100px',
					borderRadius: '50%',
					boxShadow: `1px 1px 30px ${theme.palette.primary.main}`,
					transition: 'all 0.5s ease',
					'&:hover': {
						backgroundColor: theme.palette.primary.main,
						color: 'white',
						boxShadow: '10px 10px 10px rgba(0,0,0,0.5)',
						transform: 'scale(1.2)',
					},
				})}
			>
				{icon}
			</CenteredFlex>
		</IsLoading>
	);
};

export default HeroComponentStatIcon;
