import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { forwardRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/ReduxHooks';
import { MainSlice } from '../../../store/Reducers/MainSlice';

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
	const { isRegistrationSnackbarOpen, isPasswordSnackbarOpen } = useAppSelector(
		(state) => state.mainReducer
	);
	const dispatch = useAppDispatch();
	const { changeIsPasswordSnackbarOpen, changeIsRegistrationSnackbarOpen } =
		MainSlice.actions
	;

	const handleClose = () => {
		if (isRegistrationSnackbarOpen) {
			dispatch(changeIsRegistrationSnackbarOpen(false));
		} else {
			dispatch(changeIsPasswordSnackbarOpen(false));
		}
	};

	const openCondition = isRegistrationSnackbarOpen
		? isRegistrationSnackbarOpen
		: isPasswordSnackbarOpen
	;

	const textCondition = isRegistrationSnackbarOpen ? 'Регистрация прошла успешно!' : 'Пароль был успешно изменён!';

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
