import blue from '@mui/material/colors/blue';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import IsLoading from '../../Common/IsLoading/IsLoading';

interface FormTitleProps {
	text: string;
	height: number
}

const FormTitle: FC<FormTitleProps> = ({ text, height }) => {
	return (
		<IsLoading
			sx={() => ({
				mt: height,
				mb: 10,
			})}
		>
			<Typography
				variant='h3'
				sx={{
					color: blue[400],
					mb: 7,
					mt: -5,
				}}
			>
				{text}
			</Typography>
		</IsLoading>
	);
};

export default FormTitle;
