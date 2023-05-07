import { CenteredFlex } from "../../../styles/CenteredFlex";
import { useHeroComponentContext } from "./HeroComponent";
import HeroComponentSectionTitle from "./HeroComponentSectionTitle";
import HeroComponentStat from "./HeroComponentStat";
import { GiHorseshoe, GiEagleEmblem } from 'react-icons/gi'

const HeroComponentLuck = () => {
  const { luck, morale } = useHeroComponentContext();
  
  return (
    <>
      <HeroComponentSectionTitle text="Удача и Мораль" />
      <CenteredFlex sx={{
        justifyContent:'space-around'
      }} >
        <HeroComponentStat icon={<GiHorseshoe size={60} style={{
          transform: 'rotate(180deg)'
        }} />} value={luck} />
        <HeroComponentStat icon={<GiEagleEmblem size={60} />} value={morale} />
      </CenteredFlex>
    </>
  )
}

export default HeroComponentLuck
