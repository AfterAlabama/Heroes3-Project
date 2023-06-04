import { BeastmastersDescription } from '../../../types/Enums/Descriptions/Fortress/BeastmastersDescription';
import { Genders } from '../../../types/Enums/Genders';
import { HeroClasses } from '../../../types/Enums/HeroClasses';
import { HeroPics } from '../../../types/Enums/HeroPics';
import { Races } from '../../../types/Enums/Races';
import { SecondarySkills } from '../../../types/Enums/SecondarySkills';
import { Specialties } from '../../../types/Enums/Specialties';
import { Hero } from '../Hero';

export const Alkin = new Hero(
	'Алкин',
	HeroClasses.BEASTMASTER,
	Genders.MALE,
	Races.GNOLL,
	Specialties.GORGONS,
	HeroPics.ALKIN as unknown as string,
	0,
	4,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.DEFENSE, SecondarySkills.OFFENSE],
	BeastmastersDescription.ALKIN
);

export const Brogchild = new Hero(
	'Брохильд',
	HeroClasses.BEASTMASTER,
	Genders.MALE,
	Races.LIZARDMAN,
	Specialties.WYVERNS,
	HeroPics.BROGCHILD as unknown as string,
	0,
	4,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.DEFENSE, SecondarySkills.SCOUTING],
	BeastmastersDescription.BROGCHILD
);

export const Bron = new Hero(
	'Брон',
	HeroClasses.BEASTMASTER,
	Genders.MALE,
	Races.HUMAN,
	Specialties.BASILISKS,
	HeroPics.BRON as unknown as string,
	0,
	4,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.DEFENSE, SecondarySkills.RESISTANCE],
	BeastmastersDescription.BRON
);

export const Drakon = new Hero(
	'Дракон',
	HeroClasses.BEASTMASTER,
	Genders.MALE,
	Races.GNOLL,
	Specialties.GNOLLS,
	HeroPics.DRAKON as unknown as string,
	0,
	4,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.DEFENSE, SecondarySkills.LEADERSHIP],
	BeastmastersDescription.DRAKON
);

export const Gerwulf = new Hero(
	'Гервульф',
	HeroClasses.BEASTMASTER,
	Genders.MALE,
	Races.HUMAN,
	Specialties.BALLISTA,
	HeroPics.GERWULF as unknown as string,
	0,
	4,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.DEFENSE, SecondarySkills.BALLISTA],
	BeastmastersDescription.GERWULF
);

export const Korbac = new Hero(
	'Корбак',
	HeroClasses.BEASTMASTER,
	Genders.MALE,
	Races.LIZARDMAN,
	Specialties.SERPENT_FLIES,
	HeroPics.KORBAC as unknown as string,
	0,
	4,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.DEFENSE, SecondarySkills.PATH_FINDING],
	BeastmastersDescription.KORBAC
);

export const Tazar = new Hero(
	'Тазар',
	HeroClasses.BEASTMASTER,
	Genders.MALE,
	Races.HUMAN,
	Specialties.DEFENSE,
	HeroPics.TAZAR as unknown as string,
	0,
	4,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.DEFENSE],
	BeastmastersDescription.TAZAR
);

export const Wystan = new Hero(
	'Вистан',
	HeroClasses.BEASTMASTER,
	Genders.MALE,
	Races.LIZARDMAN,
	Specialties.LIZARDMEN,
	HeroPics.WYSTAN as unknown as string,
	0,
	4,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.DEFENSE, SecondarySkills.ARCHERY],
	BeastmastersDescription.WYSTAN
);
