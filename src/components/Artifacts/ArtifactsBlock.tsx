import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CenteredFlex } from "../../styles/CenteredFlex";

const ArtifactsBlock = ({src, name}: {src:string, name: string}) => {
  return (
    <CenteredFlex sx={{
      width: '150px',
      height: '150px',
      borderRadius: '5px',
      border: '2px solid blue',
      flexDirection:'column',
      gap:2
    }} >
      <Box component='img' src={src} sx={{
        height: '40%',
        width: '40%',
        borderRadius: '5px'
      }} />
      <Typography sx={{
        color: 'gray',
        fontSize: 12,
        textAlign: 'center'
      }} >{name}</Typography>
    </CenteredFlex>
  )
}

export default ArtifactsBlock
