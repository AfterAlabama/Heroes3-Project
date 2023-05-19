import { ReactNode } from 'react';
import { ColumnedFlex } from '../../../../styles/Flex';
import HeroComponentStatIcon from './HeroComponentStatIcon';
import HeroComponentStatValue from './HeroComponentStatValue';

const HeroComponentStat = ({
	icon,
	value,
}: {
	icon: ReactNode;
	value: number;
}) => {
	return (
		<ColumnedFlex component='article' >
			<HeroComponentStatIcon icon={icon} />
			<HeroComponentStatValue value={value} />
		</ColumnedFlex>
	);
};

export default HeroComponentStat;
