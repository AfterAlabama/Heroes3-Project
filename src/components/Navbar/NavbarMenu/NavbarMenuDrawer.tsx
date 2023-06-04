import Drawer from '@mui/material/Drawer';
import { KeyboardEvent, MouseEvent } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { GiSteeltoeBoots } from '@react-icons/all-files/gi/GiSteeltoeBoots';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../../types/Enums/RouteNames';
import { NavbarMenuItems } from '../../../types/Enums/NavbarMenuItems';
import MenuList from '../../Common/MenuList/MenuList';
import { useGetStateVariables } from '../../../hooks/useGetStateVariables';

const NavbarMenuDrawer = ({
	toggleDrawer,
}: {
	toggleDrawer: (open: boolean) => (event: KeyboardEvent | MouseEvent) => void;
}) => {
	const { isLeftDrawerOpen } = useGetStateVariables();
	const navigate = useNavigate();

	const navbarListItemClickHandler = (listItem: string) => {
		if (listItem === NavbarMenuItems.HISTORY) {
			navigate(RouteNames.HEROES_HISTORY);
		} else if (listItem === NavbarMenuItems.ARTIFACTS) {
			navigate(RouteNames.ARTIFACTS);
		}
	};

	const listItemIconCondition = (listItem: string) => {
		if (listItem === NavbarMenuItems.HISTORY) return <AutoStoriesIcon />;

		return <GiSteeltoeBoots size={25} />;
	};

	return (
		<Drawer
			anchor='left'
			open={isLeftDrawerOpen}
			onClose={toggleDrawer(false)}
		>
			<Box
				sx={{ width: 250 }}
				role='presentation'
				onClick={toggleDrawer(false)}
				onKeyDown={toggleDrawer(false)}
			>
				<MenuList
					listItems={['Истории', 'Артефакты', 'Юниты', 'Арена']}
					listItemButtonClickHandler={navbarListItemClickHandler}
					listItemIconCondition={listItemIconCondition}
				/>
				<Divider />
				<MenuList
					listItems={['All mail', 'Trash', 'Spam']}
					listItemButtonClickHandler={navbarListItemClickHandler}
					listItemIconCondition={listItemIconCondition}
				/>
			</Box>
		</Drawer>
	);
};

export default NavbarMenuDrawer;
