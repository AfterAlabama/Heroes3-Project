import { AiOutlineArrowLeft } from 'react-icons/ai';
import { CenteredFlex } from '../../../styles/CenteredFlex';
import { useNavigate } from 'react-router-dom';

const PrevPageArrow = () => {
	const navigate = useNavigate();

	const arrowClickHandler = () => {
		navigate(-1);
	};

	return (
		<CenteredFlex
			sx={(theme) => ({
				border: 'solid 1px grey',
				cursor: 'pointer',
				borderRadius: '50%',
				height: '50px',
				width: '50px',
				position: 'absolute',
				top: '15%',
				left: '10%',
				color: theme.palette.primary.main,
			})}
			onClick={arrowClickHandler}
		>
			<AiOutlineArrowLeft />
		</CenteredFlex>
	);
};

export default PrevPageArrow;
