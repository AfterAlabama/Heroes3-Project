import { ArtifactArray } from '../../../game/Artifacts/ArtifactArray';
import { createContext, useContext } from 'react';
import ArtifactsBlocks from '../ArtifactBlock/ArtifactsBlocks';
import ArtifactsPagination from '../ArtifactsPagination/ArtifactsPagination';
import { useGetStateVariables } from '../../../hooks/useGetStateVariables';
import NoArtifactsFound from './NoArtifactsFound';
import { ArtifactFilterSlotCondition } from './Logic/ArtifactsFilterSlotCondition';
import { ArtifactFilterTypeCondition } from './Logic/ArtifactFilterTypeCondition';
import { ArtifactsFilterPriceCondition } from './Logic/ArtifactsFilterPriceCondition';
import { ArtifactsSearchInputCondition } from './Logic/ArtifactsSearchInputCondition';
import ArtifactsFound from './ArtifactsFound';

export interface ArtifactsBlockContextProps {
	src: string;
	name: string;
}

const ArtifactsBlockContext = createContext<ArtifactsBlockContextProps>(
	{} as ArtifactsBlockContextProps
);

export const useArtifactsBlockContext = () => useContext(ArtifactsBlockContext);

const ArtifactsList = () => {
	const { artifactsType, artifactsSlot, artifactsPrice, artifactsSearchQuery } =
		useGetStateVariables();

	let finalArray = ArtifactArray.flat();
	
	const getArtifacts = () => {
		finalArray = ArtifactFilterSlotCondition(finalArray, artifactsSlot);
		finalArray = ArtifactFilterTypeCondition(finalArray, artifactsType);
		finalArray = ArtifactsFilterPriceCondition(finalArray, artifactsPrice);
		finalArray = ArtifactsSearchInputCondition(
			finalArray,
			artifactsSearchQuery
		);

		if (finalArray.length >= 1) {
			return (
				<ArtifactsFound
					finalArray={finalArray}
					ArtifactsBlockContext={ArtifactsBlockContext}
				/>
			);
		}
		return <NoArtifactsFound />;
	};

	return (
		<>
			<ArtifactsBlocks getArtifacts={getArtifacts()} />
			<ArtifactsPagination finalArray={finalArray} />
		</>
	);
};

export default ArtifactsList;
