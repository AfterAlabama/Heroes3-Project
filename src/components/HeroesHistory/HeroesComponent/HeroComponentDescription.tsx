import Typography from "@mui/material/Typography";
import { useHeroComponentContext } from "./HeroComponent";
import IsLoading from "../../Common/IsLoading/IsLoading";
import ResumeSectionHeader from "../../Common/ResumeSectionHeader/ResumeSectionHeader";

const HeroComponentDescription = () => {
  const { description } = useHeroComponentContext()

  return (
    <>
      <ResumeSectionHeader text="Описание" />
      <IsLoading>
        <Typography sx={{
          cursor: 'default'
        }} mr={5} fontSize={20} >{description}</Typography>
      </IsLoading>
    </>
  )
}

export default HeroComponentDescription
