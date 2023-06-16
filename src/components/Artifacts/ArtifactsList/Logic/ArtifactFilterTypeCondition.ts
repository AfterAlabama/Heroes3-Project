import { Artifact } from '../../../../game/Artifacts/Artifact';

export const ArtifactFilterTypeCondition = (
	finalArray: Artifact[],
	type: string
) => {
	if (type && type !== 'Все') {
		finalArray = finalArray.filter((artifact) => artifact.rarity === type);
	}
	return finalArray;
};
