import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import Typography from '@mui/material/Typography';
import { CenteredFlex, ColumnedFlex } from '../../styles/Flex';

const FooterCaption = () => {
	return (
		<ColumnedFlex
			sx={{
				alignItems: 'flex-start',
				maxWidth: '23%',
				gap: 1,
			}}
		>
			<CenteredFlex>
				<AutoFixHighIcon
					sx={{
						mr: 1,
					}}
				/>
				<Typography variant='h4'>Hero Progeny</Typography>
			</CenteredFlex>
			<Typography>
				Hero Progeny - это путеводитель по старым играм, с которым провести
				сводобное время - одно удовольствие.
			</Typography>
		</ColumnedFlex>
	);
};

export default FooterCaption;
