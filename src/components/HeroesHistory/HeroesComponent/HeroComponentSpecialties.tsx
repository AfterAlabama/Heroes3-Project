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
					<li key={index}>{spec}</li>
				))}
			</ul>
		</>
	);
};

export default HeroComponentSpecialties;
