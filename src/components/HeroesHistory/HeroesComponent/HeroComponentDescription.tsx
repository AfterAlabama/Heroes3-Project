import Typography from "@mui/material/Typography";
import { useHeroComponentContext } from "./HeroComponent";
import HeroComponentSectionTitle from "./HeroComponentSectionTitle";
import IsLoading from "../../Common/IsLoading/IsLoading";

const HeroComponentDescription = () => {
  const { description } = useHeroComponentContext()

  return (
    <>
      <HeroComponentSectionTitle text="Описание" />
      <IsLoading>
        <Typography sx={{
          cursor: 'default'
        }} m={'0 5vh 0 5vh'} fontSize={20} >{description}</Typography>
      </IsLoading>
    </>
  )
}

export default HeroComponentDescription
