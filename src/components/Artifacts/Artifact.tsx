import { useParams } from 'react-router-dom';
import { ArtifactArray } from '../../artifacts/ArtifactArray';
import PrevPageArrow from '../Common/PrevPageArrow/PrevPageArrow';
import { CenteredFlex } from '../../styles/CenteredFlex';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Artifact = () => {
	const { name } = useParams();

	const artifact = ArtifactArray.flat().filter(
		(artifact) => artifact.name === name
	)[0];

	return (
		<CenteredFlex sx={{
      backgroundColor: '#f4f4f4',
      gap: 10,
      height: '100vh',
      flexDirection: 'column',
    }} >
			<PrevPageArrow />
			<Box component='img' src={artifact.pic} sx={{
        height: '300px',
        width: '300px',
        borderRadius: '50%'
      }} />
      <Box maxWidth={500} >
        <Box sx={{
          display: 'flex',
          gap: 2
        }}>
          <Typography sx={{
            fontSize: 20
          }} >Класс: </Typography>
          <Typography color='primary' sx={{
            fontSize: 20
          }}>{artifact.rarity}</Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          gap: 2
        }}>
          <Typography sx={{
            fontSize: 20
          }} >Тип: </Typography>
          <Typography color='primary' sx={{
            fontSize: 20
          }}>{artifact.type}</Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          gap: 2
        }}>
          <Typography sx={{
            fontSize: 20
          }} >Эффект: </Typography>
          <Typography color='primary' sx={{
            fontSize: 20
          }}>{artifact.effect}</Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          gap: 2
        }}>
          <Typography sx={{
            fontSize: 20
          }} >Цена: </Typography>
          <Typography color='primary' sx={{
            fontSize: 20
          }}>{artifact.price}</Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          gap: 2
        }}>
          <Typography sx={{
            fontSize: 20
          }} >Описание: </Typography>
          <Typography color='primary' sx={{
            fontSize: 20
          }}>{artifact.description}</Typography>
        </Box>
      </Box>
		</CenteredFlex>
	);
};

export default Artifact;
