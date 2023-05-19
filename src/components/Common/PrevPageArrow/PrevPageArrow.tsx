import { AiOutlineArrowLeft } from '@react-icons/all-files/ai/AiOutlineArrowLeft';
import { CenteredFlex } from '../../../styles/Flex';
import { useNavigate } from 'react-router-dom';

const PrevPageArrow = () => {
	const navigate = useNavigate();

	const arrowClickHandler = () => {
		navigate(-1);
	};

	return (
		<CenteredFlex
			component='article'
			sx={(theme) => ({
				border: 'solid 1px grey',
				cursor: 'pointer',
				borderRadius: '50%',
				height: '50px',
				width: '50px',
				position: 'fixed',
				top: '10%',
				left: '10%',
				color: theme.palette.primary.main,
				transition: 'all 0.5s ease',
				'&:hover': {
					backgroundColor: theme.palette.primary.main,
					color: 'white',
					transform: 'scale(1.2)',
					border: `solid 1px ${theme.palette.primary.main}`,
					boxShadow: `5px 5px 5px rgba(0,0,0,0.5)`,
				},
			})}
			onClick={arrowClickHandler}
		>
			<AiOutlineArrowLeft />
		</CenteredFlex>
	);
};

export default PrevPageArrow;
