import NavbarAuthContent from './NavbarAuthContent';
import { useAppSelector } from '../../hooks/ReduxHooks';
import NavbarUnauthContent from './NavbarUnauthContent';

const NavbarContent = () => {
	const { isAuth } = useAppSelector((state) => state.mainReducer);

	return (
		<>
		{
			isAuth ? 
			<NavbarAuthContent /> : <NavbarUnauthContent />
		}
		</>
	)
};

export default NavbarContent;
