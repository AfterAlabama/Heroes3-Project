import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { EmailForm } from './EmailForm';
import PasswordsForm from './PasswordsForm';
import { useRef } from 'react';
import { FormContentContainer } from '../../../styles/FormContentContainer';

const PasswordChangeFormCard = () => {
	const [emailFormRef, passwordFormRef] = Array(2)
		.fill(null)
		.map(() => useRef<HTMLDivElement>({} as HTMLDivElement));

	return (
		<Card component='section'>
			<CardContent>
				<FormContentContainer height='50vh' >
					<EmailForm
						ref={emailFormRef}
						emailFormRef={emailFormRef}
						passwordFormRef={passwordFormRef}
					/>
					<PasswordsForm ref={passwordFormRef} />
				</FormContentContainer>
			</CardContent>
		</Card>
	);
};

export default PasswordChangeFormCard;
