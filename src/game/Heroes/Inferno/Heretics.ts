import { HereticsDescription } from '../../../types/Enums/Descriptions/Inferno/HereticsDescription';
import { Genders } from '../../../types/Enums/Genders';
import { HeroClasses } from '../../../types/Enums/HeroClasses';
import { HeroPics } from '../../../types/Enums/HeroPics';
import { Races } from '../../../types/Enums/Races';
import { SecondarySkills } from '../../../types/Enums/SecondarySkills';
import { Specialties } from '../../../types/Enums/Specialties';
import { Spells } from '../../../types/Enums/Spells';
import { Hero } from '../Hero';

export const Ash = new Hero(
	'Пепел',
	HeroClasses.HERETIC,
	Genders.FEMALE,
	Races.DEMON,
	Specialties.BLOODLUST,
	HeroPics.ASH as unknown as string,
	1,
	1,
	2,
	1,
	1,
	0,
	10,
	Spells.BLOOD_LUST,
	[SecondarySkills.WISDOM, SecondarySkills.EAGLE_EYE],
	HereticsDescription.ASH
);

export const Axsis = new Hero(
	'Аксис',
	HeroClasses.HERETIC,
	Genders.MALE,
	Races.DEMON,
	Specialties.MYSTICISM,
	HeroPics.AXSIS as unknown as string,
	1,
	1,
	2,
	1,
	1,
	0,
	10,
	Spells.PROTECTION_FROM_AIR,
	[SecondarySkills.WISDOM, SecondarySkills.MYSTICISM],
	HereticsDescription.AXSIS
);

export const Ayden = new Hero(
	'Айден',
	HeroClasses.HERETIC,
	Genders.MALE,
	Races.HUMAN,
	Specialties.INTELLIGENCE,
	HeroPics.AYDEN as unknown as string,
	1,
	1,
	2,
	1,
	1,
	0,
	10,
	Spells.VIEW_EARTH,
	[SecondarySkills.WISDOM, SecondarySkills.INTELLIGENCE],
	HereticsDescription.AYDEN
);

export const Calid = new Hero(
	'Калид',
	HeroClasses.HERETIC,
	Genders.FEMALE,
	Races.DEMON,
	Specialties.SULFUR,
	HeroPics.CALID as unknown as string,
	1,
	1,
	2,
	1,
	1,
	0,
	10,
	Spells.HASTE,
	[SecondarySkills.WISDOM, SecondarySkills.LEARNING],
	HereticsDescription.CALID
);

export const Olema = new Hero(
	'Олема',
	HeroClasses.HERETIC,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.WEAKNESS,
	HeroPics.OLEMA as unknown as string,
	1,
	1,
	2,
	1,
	1,
	0,
	10,
	Spells.WEAKNESS,
	[SecondarySkills.WISDOM, SecondarySkills.BALISTICS],
	HereticsDescription.OLEMA
);

export const Xarfax = new Hero(
	'Ксарфакс',
	HeroClasses.HERETIC,
	Genders.MALE,
	Races.HUMAN,
	Specialties.FIREBALL,
	HeroPics.XARFAX as unknown as string,
	1,
	1,
	2,
	1,
	1,
	0,
	10,
	Spells.FIREBALL,
	[SecondarySkills.WISDOM, SecondarySkills.LEARNING],
	HereticsDescription.XARFAX
);

export const Xyron = new Hero(
	'Ксирон',
	HeroClasses.HERETIC,
	Genders.MALE,
	Races.EFREET,
	Specialties.INFERNO,
	HeroPics.XYRON as unknown as string,
	1,
	1,
	2,
	1,
	1,
	0,
	10,
	Spells.INFERNO,
	[SecondarySkills.WISDOM, SecondarySkills.SCOLAR],
	HereticsDescription.XYRON
);

export const Zydar = new Hero(
	'Зидар',
	HeroClasses.HERETIC,
	Genders.MALE,
	Races.EFREET,
	Specialties.SORCERY,
	HeroPics.ZYDAR as unknown as string,
	1,
	1,
	2,
	1,
	1,
	0,
	10,
	Spells.STONE_SKIN,
	[SecondarySkills.WISDOM, SecondarySkills.SORCERY],
	HereticsDescription.ZYDAR
);
