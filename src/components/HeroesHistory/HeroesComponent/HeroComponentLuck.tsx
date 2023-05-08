import { CenteredFlex } from "../../../styles/CenteredFlex";
import { useHeroComponentContext } from "./HeroComponent";
import HeroComponentSectionTitle from "./HeroComponentSectionTitle";
import HeroComponentStat from "./HeroComponentStat";
import { GiHorseshoe } from '@react-icons/all-files/gi/GiHorseshoe'
import { GiEagleEmblem } from '@react-icons/all-files/gi/GiEagleEmblem'

const HeroComponentLuck = () => {
  const { luck, morale } = useHeroComponentContext();
  
  return (
    <>
      <HeroComponentSectionTitle text="Удача и Мораль" />
      <CenteredFlex sx={{
        justifyContent:'space-around'
      }} >
        <HeroComponentStat icon={<GiHorseshoe size={50} style={{
          transform: 'rotate(180deg)'
        }} />} value={luck} />
        <HeroComponentStat icon={<GiEagleEmblem size={50} />} value={morale} />
      </CenteredFlex>
    </>
  )
}

export default HeroComponentLuck
