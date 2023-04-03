import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import Drawer from '@mui/material/Drawer';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../types/Enums/RouteNames';
import { MainSlice } from '../../store/Reducers/MainSlice';

const NavbarMenu = () => {
	const { isAuth, isLeftDrawerOpen } = useAppSelector(
		(state) => state.mainReducer
	);
	const dispatch = useAppDispatch();
	const { changeLeftDrawer } = MainSlice.actions;

	const navigate = useNavigate();

	const clickHandler = (destination: string) => {
		navigate(destination);
	};

	const toggleDrawer =
		(open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === 'keydown' &&
				((event as React.KeyboardEvent).key === 'Tab' ||
					(event as React.KeyboardEvent).key === 'Shift')
			) {
				return;
			}

			dispatch(changeLeftDrawer(open));
		};
	const DisabledCondition = isAuth ? false : true;

	const list = () => (
		<Box
			sx={{ width: 250 }}
			role='presentation'
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
		>
			<List>
				{['Истории', 'Starred', 'Send email', 'Drafts'].map((text) => (
					<ListItem
						key={text}
						disablePadding
					>
						<ListItemButton
							onClick={() => clickHandler(RouteNames.HEROES_HISTORY)}
						>
							<ListItemIcon>
								{text === 'Истории' && <AutoStoriesIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{['All mail', 'Trash', 'Spam'].map((text, index) => (
					<ListItem
						key={text}
						disablePadding
					>
						<ListItemButton>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<IconButton
			disabled={DisabledCondition}
			size='large'
			edge='start'
			color='inherit'
			aria-label='menu'
			sx={{ mr: 2 }}
		>
			<MenuIcon onClick={toggleDrawer(true)} />
			<Drawer
				anchor='left'
				open={isLeftDrawerOpen}
				onClose={toggleDrawer(false)}
			>
				{list()}
			</Drawer>
		</IconButton>
	);
};

export default NavbarMenu;
