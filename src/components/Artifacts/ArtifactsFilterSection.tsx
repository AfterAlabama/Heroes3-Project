import { CenteredFlex } from '../../styles/CenteredFlex';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { ArtifactRarity } from '../../types/Enums/ArtifactRarity';
import { ArtifactTypes } from '../../types/Enums/ArtifactTypes';
import ArtifactsFilterOpeningButton from './ArtifactsFilterOpeningButton';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHooks';
import { MainSlice } from '../../store/Reducers/MainSlice';

const ArtifactsFilterSection = () => {
	const { artifactsType, artifactsPrice, artifactsSlot } = useAppSelector(
		(state) => state.mainReducer
	);
	const dispatch = useAppDispatch();
	const { setArtifactsType, setArtifactsPrice, setArtifactsSlot } =
		MainSlice.actions;

	const typeChangehandler = (e: SelectChangeEvent) => {
		dispatch(setArtifactsType(e.target.value));
	};

	const slotChangehandler = (e: SelectChangeEvent) => {
		dispatch(setArtifactsSlot(e.target.value));
	};

  const priceChangeHandler = (e: SelectChangeEvent) => {
    dispatch(setArtifactsPrice(e.target.value));
  }

	return (
		<CenteredFlex
			sx={{
				flexDirection: 'column',
				gap: 2,
			}}
			mb={10}
		>
			<ArtifactsFilterOpeningButton />
			<CenteredFlex
				sx={(theme) => ({
					width: '500px',
					height: '200px',
					borderBottom: `1px solid ${theme.palette.primary.main}`,
					backgroundColor: '#f4f4f4',
					borderTop: `1px solid ${theme.palette.primary.main}`,
					gap: 8,
				})}
			>
				<FormControl
					sx={{
						width: '100px',
					}}
				>
					<InputLabel>Слот</InputLabel>
					<Select
						value={artifactsSlot}
						label='Слот'
						onChange={slotChangehandler}
					>
						<MenuItem value='Все'>Все</MenuItem>
						<MenuItem value={ArtifactTypes.NECK}>{ArtifactTypes.NECK}</MenuItem>
						<MenuItem value={ArtifactTypes.MAINHAND}>
							{ArtifactTypes.MAINHAND}
						</MenuItem>
						<MenuItem value={ArtifactTypes.OFFHAND}>
							{ArtifactTypes.OFFHAND}
						</MenuItem>
						<MenuItem value={ArtifactTypes.HEAD}>{ArtifactTypes.HEAD}</MenuItem>
						<MenuItem value={ArtifactTypes.HANDS}>
							{ArtifactTypes.HANDS}
						</MenuItem>
						<MenuItem value={ArtifactTypes.FEET}>{ArtifactTypes.FEET}</MenuItem>
						<MenuItem value={ArtifactTypes.CLOAKS}>
							{ArtifactTypes.CLOAKS}
						</MenuItem>
						<MenuItem value={ArtifactTypes.BODY}>{ArtifactTypes.BODY}</MenuItem>
						<MenuItem value={ArtifactTypes.ACCESSORIES}>
							{ArtifactTypes.ACCESSORIES}
						</MenuItem>
					</Select>
				</FormControl>
				<FormControl
					sx={{
						width: '100px',
					}}
				>
					<InputLabel id='type-label'>Тип</InputLabel>
					<Select
						labelId='type-label'
						label='Тип'
						value={artifactsType}
						onChange={typeChangehandler}
					>
						<MenuItem value='Все'>Все</MenuItem>
						<MenuItem value={ArtifactRarity.MINOR}>
							{ArtifactRarity.MINOR}
						</MenuItem>
						<MenuItem value={ArtifactRarity.TREASURE}>
							{ArtifactRarity.TREASURE}
						</MenuItem>
						<MenuItem value={ArtifactRarity.MAJOR}>
							{ArtifactRarity.MAJOR}
						</MenuItem>
						<MenuItem value={ArtifactRarity.RELIC}>
							{ArtifactRarity.RELIC}
						</MenuItem>
					</Select>
				</FormControl>
				<FormControl
					sx={{
						width: '100px',
					}}
				>
					<InputLabel>Цена</InputLabel>
					<Select label='Цена' value={artifactsPrice} onChange={priceChangeHandler}>
						<MenuItem value='Все' >Все</MenuItem>
						<MenuItem value='Less'>Самая низкая</MenuItem>
						<MenuItem value='Greater'>Самая высокая</MenuItem>
					</Select>
				</FormControl>
			</CenteredFlex>
		</CenteredFlex>
	);
};

export default ArtifactsFilterSection;
