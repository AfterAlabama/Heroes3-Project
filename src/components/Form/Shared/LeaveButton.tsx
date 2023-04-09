import Button from '@mui/material/Button';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import IsLoading from '../../Common/IsLoading/IsLoading';

interface LeaveButtonProps {
  margin?: number
}

const LeaveButton: FC<LeaveButtonProps> = ({ margin }) => {
	const navigate = useNavigate();

	const clickHandler = () => {
		navigate(-1);
	};

	return (
    <IsLoading sx={() => ({
      mb: margin
    })} >
      <Button
        onClick={clickHandler}
        sx={{
          backgroundColor: '#f4f4f4',
          width: 100,
        }}
      >
        Назад
      </Button>
    </IsLoading>
	);
};

export default LeaveButton;
