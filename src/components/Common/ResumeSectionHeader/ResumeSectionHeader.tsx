import Typography from '@mui/material/Typography';
import { SxProps, Theme } from '@mui/material/styles';
import { FC } from 'react';
import { GetSxProp } from '../../../helpers/GetSxProp/GetSxProp';

interface ResumeSectionHeaderProps {
  //header text
  text:string;
  //header props
  sx?: SxProps<Theme> 
}

//creates customizable resume header
const ResumeSectionHeader: FC<ResumeSectionHeaderProps> = ({ text, sx = [] }) => {
  const defaultStyle = {
    borderBottom: `solid 10px #1976d2`,
    fontSize: 35,
    pb: 1,
    borderRadius: '0 0 0 20px',
    m: '40px 0',
    cursor: 'default',
  };

	return (
		<Typography
			variant='h2'
			sx={{
        ...defaultStyle, ...GetSxProp(sx)
      }}
		>
			{text}
		</Typography>
	);
};

export default ResumeSectionHeader;
