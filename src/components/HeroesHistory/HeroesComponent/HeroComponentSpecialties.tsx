import IsLoading from '../../Common/IsLoading/IsLoading';
import { useHeroComponentContext } from './HeroComponent';
import HeroComponentSectionTitle from './HeroComponentSectionTitle';

const HeroComponentSpecialties = () => {
	const { baseSpecialties } = useHeroComponentContext();

	return (
		<>
			<HeroComponentSectionTitle text='Навыки' />
			<ul style={{
        marginLeft: 50
      }} >
				{baseSpecialties.map((spec, index) => (
					<IsLoading key={index} >
						<li >{spec}</li>
					</IsLoading>
				))}
			</ul>
		</>
	);
};

export default HeroComponentSpecialties;
