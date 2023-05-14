import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconsRow from '../Common/IconsRow/IconsRow';
import IsLoading from '../Common/IsLoading/IsLoading';

const FooterIcons = () => {
	const iconArray = [
		<TwitterIcon key={0} />,
		<LinkedInIcon key={1} />,
		<FacebookIcon key={2} />,
		<GitHubIcon key={3} />,
	];

	return (
		<IconsRow>
			{iconArray.map((icon, index) => (
				<IsLoading key={index}>{icon}</IsLoading>
			))}
		</IconsRow>
	);
};

export default FooterIcons;
