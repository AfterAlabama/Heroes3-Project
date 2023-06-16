import { Artifact } from '../../../../game/Artifacts/Artifact';

export const ArtifactFilterSlotCondition = (finalArray: Artifact[], slot: string) => {
	if (slot && slot !== 'Все') {
		finalArray = finalArray.filter((artifact) => artifact.type === slot);
	}
	return finalArray
};
