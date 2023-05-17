import NavbarAuthContent from '../NavbarAuthContent/NavbarAuthContent';
import { useAppSelector } from '../../../hooks/reduxHooks';
import NavbarUnauthContent from '../NavbarUnauthContent/NavbarUnauthContent';

const NavbarContent = () => {
	const { isAuth } = useAppSelector((state) => state.mainReducer);

	return <>{isAuth ? <NavbarAuthContent /> : <NavbarUnauthContent />}</>;
};

export default NavbarContent;
