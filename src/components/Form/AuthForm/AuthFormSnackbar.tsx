import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { forwardRef } from 'react';
import { useGetStateVariables } from '../../../hooks/useGetStateVariables';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
	props,
	ref
) {
	return (
		<MuiAlert
			elevation={6}
			ref={ref}
			variant='filled'
			{...props}
		/>
	);
});

const AuthFormSnackbar = () => {
	const {
		isRegistrationSnackbarOpen,
		isPasswordSnackbarOpen,
		dispatch,
		setIsPasswordSnackbarOpen,
		setIsRegistrationSnackbarOpen,
	} = useGetStateVariables();

	const handleClose = () => {
		if (isRegistrationSnackbarOpen) {
			dispatch(setIsRegistrationSnackbarOpen(false));
		} else {
			dispatch(setIsPasswordSnackbarOpen(false));
		}
	};

	const openCondition = isRegistrationSnackbarOpen
		? isRegistrationSnackbarOpen
		: isPasswordSnackbarOpen;
	const textCondition = isRegistrationSnackbarOpen
		? 'Регистрация прошла успешно!'
		: 'Пароль был успешно изменён!';

	return (
		<Snackbar
			anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
			open={openCondition}
			autoHideDuration={6000}
			onClose={handleClose}
		>
			<Alert
				severity='success'
				sx={{ width: '100%' }}
			>
				{textCondition}
			</Alert>
		</Snackbar>
	);
};

export default AuthFormSnackbar;
