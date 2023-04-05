import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

const FooterRights = () => {
	return (
		<Box sx={{
      display: 'flex',
      alignItems:'center',
      justifyContent: 'space-between',
      marginLeft:23,
      marginRight:23,
    }} >
			<Typography
				sx={{
					color: 'white',
				}}
			>
				<>&copy;</> 2023 Hero Progeny. Все права сохранены.
			</Typography>
      <Box sx={{
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: 2
      }} >
        <TwitterIcon />
        <LinkedInIcon />
        <FacebookIcon />
        <GitHubIcon />
      </Box>
		</Box>
	);
};

export default FooterRights;
