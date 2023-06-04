import NavbarMenuIcon from './NavbarMenuIcon';
import NavbarMenuDrawer from './NavbarMenuDrawer';
import { useGetStateVariables } from '../../../hooks/useGetStateVariables';

const NavbarMenu = () => {
	const { changeLeftDrawer, dispatch } = useGetStateVariables();

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

	return (
		<>
			<NavbarMenuIcon toggleDrawer={toggleDrawer} />
			<NavbarMenuDrawer toggleDrawer={toggleDrawer} />
		</>
	);
};

export default NavbarMenu;
