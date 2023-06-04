import NavbarAuthContent from '../NavbarAuthContent/NavbarAuthContent';
import NavbarUnauthContent from '../NavbarUnauthContent';
import { useGetStateVariables } from '../../../hooks/useGetStateVariables';

const NavbarContent = () => {
	const { isAuth } = useGetStateVariables();

	return <>{isAuth ? <NavbarAuthContent /> : <NavbarUnauthContent />}</>;
};

export default NavbarContent;
