import Typography from "@mui/material/Typography";
import { ColumnedFlex } from "../../../styles/Flex";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingPage = () => {
  return (
    <ColumnedFlex sx={{
      width:' 100vw',
      height: '100vh',
      gap:5
    }} >
      <Typography color='primary' fontSize={50} >Подождите...</Typography>
      <CircularProgress size={30} />
    </ColumnedFlex>
  )
}

export default LoadingPage
