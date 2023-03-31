import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { ChangeEvent, FC } from 'react';

interface StyledInputProps {
	instance: string;
	isError: string | undefined;
	isValue: string | undefined;
	isTouched: boolean | undefined;
	handleBlur: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
	labelText: string;
}

const StyledInput: FC<StyledInputProps> = ({
	isError,
	handleChange,
	isValue,
	isTouched,
	handleBlur,
	labelText,
	instance,
}) => {
	const ColorCondition = isError ? 'error' : 'primary';

	const ErrorPopupCondition = isError && isTouched && (
		<FormHelperText
			sx={{
				color: 'red',
			}}
		>
			{isError}
		</FormHelperText>
	);

	return (
		<FormControl
			sx={{
				marginBottom: 8,
			}}
		>
			<InputLabel
				color={ColorCondition}
				sx={{
					fontSize: 20,
				}}
			>
				{labelText}
			</InputLabel>
			<Input
				type={instance}
				name={instance}
				onChange={handleChange}
				onBlur={handleBlur}
				value={isValue}
				color={ColorCondition}
			/>
			{ErrorPopupCondition}
		</FormControl>
	);
};

export default StyledInput;
