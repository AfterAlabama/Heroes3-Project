import { Artifact } from '../../../../game/Artifacts/Artifact';

export const ArtifactsSearchInputCondition = (finalArray: Artifact[], searchQuery: string) => {
	if (searchQuery) {
		finalArray = finalArray.filter((artifact) =>
			artifact.name.toLowerCase().includes(searchQuery.toLowerCase())
		);
	}
  return finalArray
};
