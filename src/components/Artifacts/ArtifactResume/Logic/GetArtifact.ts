import { Artifact } from '../../../../game/Artifacts/Artifact';
import { ArtifactArray } from '../../../../game/Artifacts/ArtifactArray';

//gets artifact resume depending on its name
export const GetArtifact = (name: string) => {
	return ArtifactArray.flat().find(
		(artifact) => artifact.name === name
	) as Required<Artifact>;
};
