import blue from '@mui/material/colors/blue';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

interface FormTitleProps {
	text: string;
}

const FormTitle: FC<FormTitleProps> = ({ text }) => {
	return (
		<Typography
			sx={{
				cursor: 'default',
				color: blue[400],
				fontSize: 40,
				marginBottom: 3,
			}}
		>
			{text}
		</Typography>
	);
};

export default FormTitle;
