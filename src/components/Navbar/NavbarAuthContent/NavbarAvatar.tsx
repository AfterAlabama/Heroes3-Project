import Avatar from '@mui/material/Avatar';
import { useRef } from 'react';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const NavbarAvatar = () => {
	const picRef = useRef<SVGSVGElement>({} as SVGSVGElement);
	const avatarMouseEnterHandler = () => {
		picRef.current.style.display = 'flex';
	};
	const avatarMouseLeaveHandler = () => {
		picRef.current.style.display = 'none';
	};

	return (
		<Avatar
			alt='ProfilePic'
			onMouseEnter={avatarMouseEnterHandler}
			onMouseLeave={avatarMouseLeaveHandler}
			sx={{
				ml: 2,
				mr: 2,
				cursor: 'pointer',
				transition: 'all ease-in-out 0.4s',
				'&:hover': {
					transform: 'scale(1.3)',
					'&:before': {
						content: "''",
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						backgroundColor: 'rgba(0,0,0,0.6)',
					},
				},
			}}
		>
			<PermIdentityIcon />
			<AddAPhotoIcon
				ref={picRef}
				sx={{ display: 'none', zIndex: 2, position: 'absolute' }}
			/>
		</Avatar>
	);
};

export default NavbarAvatar;
