import { ColumnedFlex } from '../../../styles/Flex';
import ArtifactsFilterOpeningButton from './ArtifactsFilterOpeningButton';
import { useRef } from 'react';
import ArtifactsFilters from './ArtifactsFilters';

const ArtifactsFilterSection = () => {
	const filtersRef = useRef<HTMLDivElement>({} as HTMLDivElement);

	return (
		<ColumnedFlex
			component='section'
			mb={10}
		>
			<ArtifactsFilterOpeningButton filtersRef={filtersRef} />
			<ArtifactsFilters ref={filtersRef} />
		</ColumnedFlex>
	);
};

export default ArtifactsFilterSection;
