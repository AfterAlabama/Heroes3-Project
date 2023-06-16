import { Context } from 'react';
import { Artifact } from '../../../game/Artifacts/Artifact';
import ArtifactsBlock from '../ArtifactBlock/ArtifactsBlock';
import { ArtifactsBlockContextProps } from './ArtifactsList';
import { useGetStateVariables } from '../../../hooks/useGetStateVariables';

const ArtifactsFound = ({
	finalArray,
	ArtifactsBlockContext,
}: {
	finalArray: Artifact[];
	ArtifactsBlockContext: Context<ArtifactsBlockContextProps>;
}) => {
	const { artifactsPage } = useGetStateVariables();
	return (
		<>
			{finalArray
				.slice((artifactsPage - 1) * 20, (artifactsPage - 1) * 20 + 20)
				.map((artifact, index) => (
					<ArtifactsBlockContext.Provider
						key={index}
						value={{ src: artifact.pic, name: artifact.name }}
					>
						<ArtifactsBlock />
					</ArtifactsBlockContext.Provider>
				))}
		</>
	);
};

export default ArtifactsFound;
