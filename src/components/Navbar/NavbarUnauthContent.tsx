import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { RouteNames } from "../../types/Enums/RouteNames";

const NavbarUnauthContent = () => {
  return (
    <Button
			sx={{
				ml: 2,
				marginRight: 2,
			}}
			color='inherit'
		>
			<Link
				href={RouteNames.AUTH_FORM}
				color='inherit'
				underline='none'
			>
				Войти
			</Link>
		</Button>
  )
}

export default NavbarUnauthContent
