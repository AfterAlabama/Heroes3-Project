import { useParams } from 'react-router-dom';
import PrevPageArrow from '../../Common/PrevPageArrow/PrevPageArrow';
import { ColumnedFlex } from '../../../styles/Flex';
import ArtifactsResumeTitle from './ArtifactsResumeTitle';
import ArtifactsResumeContent from './ArtifactsResumeContent';
import { createContext, useContext } from 'react';
import { Artifact } from '../../../game/Artifacts/Artifact';
import { useCallOnloadAnimation } from '../../../hooks/useCallOnloadAnimation';
import { GetArtifact } from './Logic/GetArtifact';

const ArtifactsResumeContext = createContext<Artifact>({} as Artifact);
export const useArtifactsResumeContext = () =>
	useContext(ArtifactsResumeContext);


const ArtifactsResume = () => {
	useCallOnloadAnimation();
	const { name } = useParams();

	return (
		<ColumnedFlex
			sx={{
				backgroundColor: '#f4f4f4',
				gap: 10,
			}}
		>
			<PrevPageArrow />
			<ArtifactsResumeContext.Provider value={GetArtifact(name as string)}>
				<ArtifactsResumeTitle />
				<ArtifactsResumeContent />
			</ArtifactsResumeContext.Provider>
		</ColumnedFlex>
	);
};

export default ArtifactsResume;
