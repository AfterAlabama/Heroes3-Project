import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import Typography from '@mui/material/Typography';
import { CenteredFlex, ColumnedFlex } from '../../styles/Flex';
import IsLoading from '../Common/IsLoading/IsLoading';

const FooterCaption = () => {
	return (
		<ColumnedFlex
			component='article'
			sx={{
				alignItems: 'flex-start',
				maxWidth: '23%',
				gap: 1,
			}}
		>
			<CenteredFlex>
				<IsLoading>
					<AutoFixHighIcon
						sx={{
							mr: 1,
						}}
					/>
				</IsLoading>
				<IsLoading>
					<Typography variant='h4'>Hero Progeny</Typography>
				</IsLoading>
			</CenteredFlex>
			<IsLoading>
				<Typography>
					Hero Progeny - это путеводитель по старым играм, с которым провести
					сводобное время - одно удовольствие.
				</Typography>
			</IsLoading>
		</ColumnedFlex>
	);
};

export default FooterCaption;
