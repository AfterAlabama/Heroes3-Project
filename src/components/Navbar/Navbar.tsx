import NavbarMenu from './NavbarMenu';
import NavbarLogo from './NavbarLogo';
import NavbarContent from './NavbarContent';
import { CenteredFlex } from '../../styles/Flex';
import NavbarComponent from '../Common/NavbarComponent/NavbarComponent';

const Navbar = () => {
	return (
		<NavbarComponent navbarSxProp={{ justifyContent: 'space-between' }}>
			<CenteredFlex
				justifyContent={'space-between'}
				width={'10%'}
			>
				<NavbarMenu />
				<NavbarLogo />
			</CenteredFlex>
			<NavbarContent />
		</NavbarComponent>
	);
};

export default Navbar;
