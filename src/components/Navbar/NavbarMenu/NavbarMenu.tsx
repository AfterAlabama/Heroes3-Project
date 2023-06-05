import NavbarMenuIcon from './NavbarMenuIcon';
import NavbarMenuDrawer from './NavbarMenuDrawer';
import { useGetStateVariables } from '../../../hooks/useGetStateVariables';

const NavbarMenu = () => {
	const { setLeftDrawer, dispatch } = useGetStateVariables();

	const toggleDrawer =
		(open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === 'keydown' &&
				((event as React.KeyboardEvent).key === 'Tab' ||
					(event as React.KeyboardEvent).key === 'Shift')
			) {
				return;
			}

			dispatch(setLeftDrawer(open));
		};

	return (
		<>
			<NavbarMenuIcon toggleDrawer={toggleDrawer} />
			<NavbarMenuDrawer toggleDrawer={toggleDrawer} />
		</>
	);
};

export default NavbarMenu;
