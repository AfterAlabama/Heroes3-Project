import Avatar from '@mui/material/Avatar';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { ChangeEvent, useRef } from 'react';
import Box from '@mui/material/Box';
import { useGetStateVariables } from '../../../hooks/useGetStateVariables';
import {
	ref,
	uploadBytes,
	getDownloadURL,
	list,
	deleteObject,
} from 'firebase/storage';
import { storage } from '../../../firebase/firebase';
import { useGetProfilePic } from '../../../hooks/useGetProfilePic';

const NavbarAvatar = () => {
	const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement);
	const { profilePicFile, setProfilePic, dispatch } = useGetStateVariables();
	useGetProfilePic()

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			const imgList = ref(storage, 'images');
			list(imgList).then((response) => {
				if (response.items.length > 0) {
					deleteObject(response.items[0]);
				}
			});
			const imgRef = ref(storage, `images/${e.target.files[0].name}`);
			uploadBytes(imgRef, e.target.files[0]).then(() => {
				getDownloadURL(imgRef).then((url) => {
					dispatch(setProfilePic(url));
				});
			});
		}
	};


	return (
		<Avatar
			onClick={() => inputRef.current.click()}
			alt='ProfilePic'
			sx={{
				ml: 2,
				mr: 2,
				'&:before': {
					transition: 'all ease-in-out 0.4s',
					content: "''",
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					position: 'absolute',
					cursor: 'pointer',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					backgroundColor: 'rgba(0,0,0,0.6)',
					opacity: 0,
				},
				transition: 'all ease-in-out 0.4s',
				'&:hover': {
					transform: 'scale(1.3)',
					'&:before': {
						opacity: 1,
					},
					'& > svg:nth-child(2)': {
						transition: 'all ease-in-out 0.4s',
						opacity: 1,
					},
				},
			}}
		>
			{profilePicFile ? (
				<Box
					component='img'
					src={profilePicFile}
					sx={{
						height: '100%',
						width: '100%',
					}}
				/>
			) : (
				<>
					<PermIdentityIcon />
				</>
			)}
			<AddAPhotoIcon
				sx={{
					opacity: 0,
					zIndex: 2,
					position: 'absolute',
					transition: 'all ease 0.4s',
					cursor: 'pointer',
				}}
			/>
			<Box
				component='input'
				type='file'
				ref={inputRef}
				display={'none'}
				onChange={(e) => changeHandler(e)}
			/>
		</Avatar>
	);
};

export default NavbarAvatar;
