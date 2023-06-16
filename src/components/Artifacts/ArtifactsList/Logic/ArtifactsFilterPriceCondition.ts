import { Artifact } from '../../../../game/Artifacts/Artifact';

export const ArtifactsFilterPriceCondition = (finalArray: Artifact[], price: string) => {
	if (price && price !== 'Все') {
		if (price === 'Самая низкая') {
			finalArray = finalArray.sort((objA, objB) => objA.price - objB.price);
		}
		if (price === 'Самая высокая') {
			finalArray = finalArray.sort((objA, objB) => objB.price - objA.price);
		}
	}
	return finalArray
};
