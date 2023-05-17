import { useAppDispatch } from '../../../hooks/reduxHooks';
import { MainSlice } from '../../../store/Reducers/MainSlice';
import NavbarMenuIcon from './NavbarMenuIcon';
import NavbarMenuDrawer from './NavbarMenuDrawer';

const NavbarMenu = () => {
	const dispatch = useAppDispatch();
	const { changeLeftDrawer } = MainSlice.actions;

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
