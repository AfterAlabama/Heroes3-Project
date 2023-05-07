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
          m:'0 5vh',

        }} >{description}</Typography>
      </IsLoading>
    </>
  )
}

export default HeroComponentDescription
