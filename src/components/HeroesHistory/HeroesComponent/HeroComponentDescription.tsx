import Typography from "@mui/material/Typography";
import { useHeroComponentContext } from "./HeroComponent";
import HeroComponentSectionTitle from "./HeroComponentSectionTitle";

const HeroComponentDescription = () => {
  const { description } = useHeroComponentContext()

  return (
    <>
      <HeroComponentSectionTitle text="Описание" />
      <Typography sx={{
        m:'0 5vh',

      }} >{description}</Typography>
    </>
  )
}

export default HeroComponentDescription
