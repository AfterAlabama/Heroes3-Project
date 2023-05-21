import { useParams } from 'react-router-dom';
import { ArtifactArray } from '../../../artifacts/ArtifactArray';
import PrevPageArrow from '../../Common/PrevPageArrow/PrevPageArrow';
import { ColumnedFlex } from '../../../styles/Flex';
import ArtifactsResumeTitle from './ArtifactsResumeTitle';
import ArtifactsResumeContent from './ArtifactsResumeContent';
import { createContext, useContext } from 'react';
import { Artifact } from '../../../artifacts/Artifact';
import { useCallOnloadAnimation } from '../../../hooks/useCallOnloadAnimation';

const ArtifactsResumeContext = createContext<Artifact>({} as Artifact);

export const useArtifactsResumeContext = () =>
	useContext(ArtifactsResumeContext);

const ArtifactsResume = () => {
	useCallOnloadAnimation()
	const { name } = useParams();

	const artifact = ArtifactArray.flat().filter(
		(artifact) => artifact.name === name
	)[0];

	return (
		<ColumnedFlex
			sx={{
				backgroundColor: '#f4f4f4',
				gap: 10,
			}}
		>
			<PrevPageArrow />
			<ArtifactsResumeContext.Provider value={artifact}>
				<ArtifactsResumeTitle />
				<ArtifactsResumeContent />
			</ArtifactsResumeContext.Provider>
		</ColumnedFlex>
	);
};

export default ArtifactsResume;
