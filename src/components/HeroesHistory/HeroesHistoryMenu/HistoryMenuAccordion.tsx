import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordionSummary, {
	AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useAppDispatch, useAppSelector } from '../../../hooks/ReduxHooks';
import { MainSlice } from '../../../store/Reducers/MainSlice';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import blue from '@mui/material/colors/blue';


const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion elevation={24} disableGutters {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
	width: '40%',
	'&:hover':{
		boxShadow: ` 0px 4px 18px 3px ${blue[100]}`,
	},
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const HistoryMenuAccordion = ({ panelNumber, hero }: { panelNumber: string, hero:string }) => {
	const dispatch = useAppDispatch();
  const { toggleAccordion } = MainSlice.actions;
  const { isAccordionExpended } = useAppSelector(state => state.mainReducer)

	const mouseEnterHandler = () => {
		dispatch(toggleAccordion(panelNumber));
	};

	const mouseLeaveHandler = () => {
		dispatch(toggleAccordion(false));
	};

	return (
		<Accordion
			expanded={isAccordionExpended === panelNumber}
			onMouseEnter={mouseEnterHandler}
			onMouseLeave={mouseLeaveHandler}
		>
			<AccordionSummary
				aria-controls={`${panelNumber}d-content`}
				id={`${panelNumber}d-header`}
			>
				<Typography>Collapsible Group Item {hero}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
					malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
					dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
					lacus ex, sit amet blandit leo lobortis eget.
				</Typography>
			</AccordionDetails>
		</Accordion>
	);
};

export default HistoryMenuAccordion;
