import MuiTypography, { TypographyProps } from '@mui/material/Typography';
import { FC } from 'react';
import { styled } from '@mui/material/styles';
import IsLoading from '../../../Common/IsLoading/IsLoading';
import { CenteredFlex } from '../../../../styles/Flex';

const Typography = styled((props: TypographyProps) => (
	<MuiTypography {...props} />
))(() => ({
	fontSize: 18,
}));

interface HeroComponentInfoBoxProps {
	stat: string;
	value: string;
}

const HeroComponentInfoBox: FC<HeroComponentInfoBoxProps> = ({
	stat,
	value,
}) => {
	return (
		<CenteredFlex
			component='article'
			sx={(theme) => ({
				justifyContent: 'space-between',
				m: '10px 50px 0 0',
				borderBottom: `solid ${theme.palette.primary.main} 3px`,
			})}
		>
			<IsLoading>
				<Typography>{stat}:</Typography>
			</IsLoading>
			<IsLoading>
				<Typography>{value}</Typography>
			</IsLoading>
		</CenteredFlex>
	);
};

export default HeroComponentInfoBox;
