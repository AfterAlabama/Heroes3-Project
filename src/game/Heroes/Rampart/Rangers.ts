import { RangersDescription } from '../../../types/Enums/Descriptions/Rampart/RangerDescription';
import { Genders } from '../../../types/Enums/Genders';
import { HeroClasses } from '../../../types/Enums/HeroClasses';
import { HeroPics } from '../../../types/Enums/HeroPics';
import { Races } from '../../../types/Enums/Races';
import { SecondarySkills } from '../../../types/Enums/SecondarySkills';
import { Specialties } from '../../../types/Enums/Specialties';
import { Hero } from '../Hero';

export const Clancy = new Hero(
	'Кленси',
	HeroClasses.RANGER,
	Genders.MALE,
	Races.DWARF,
	Specialties.UNICORNS,
	HeroPics.CLANCY as unknown as string,
	1,
	3,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.RESISTANCE, SecondarySkills.PATH_FINDING],
	RangersDescription.CLANCY
);

export const Ivor = new Hero(
	'Ивор',
	HeroClasses.RANGER,
	Genders.FEMALE,
	Races.ELF,
	Specialties.ELFS,
	HeroPics.IVOR as unknown as string,
	1,
	3,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.ARCHERY, SecondarySkills.OFFENSE],
	RangersDescription.IVOR
);

export const Jenova = new Hero(
	'Янова',
	HeroClasses.RANGER,
	Genders.FEMALE,
	Races.ELF,
	Specialties.GOLD,
	HeroPics.JENOVA as unknown as string,
	1,
	3,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.ARCHERY],
	RangersDescription.JENOVA
);

export const Kyrre = new Hero(
	'Киррь',
	HeroClasses.RANGER,
	Genders.FEMALE,
	Races.ELF,
	Specialties.LOGISTICS,
	HeroPics.KYRRE as unknown as string,
	1,
	3,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.ARCHERY, SecondarySkills.LOGISTICS],
	RangersDescription.KYRRE
);

export const Mephala = new Hero(
	'Мефала',
	HeroClasses.RANGER,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.DEFENSE,
	HeroPics.MEPHALA as unknown as string,
	1,
	3,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.LEADERSHIP, SecondarySkills.DEFENSE],
	RangersDescription.MEPHALA
);

export const Ryland = new Hero(
	'Риланд',
	HeroClasses.RANGER,
	Genders.MALE,
	Races.HUMAN,
	Specialties.DENDROIDS,
	HeroPics.RYLAND as unknown as string,
	1,
	3,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.LEADERSHIP, SecondarySkills.DIPLOMACY],
	RangersDescription.RYLAND
);

export const Thorgrim = new Hero(
	'Торгрим',
	HeroClasses.RANGER,
	Genders.MALE,
	Races.DWARF,
	Specialties.RESISTANCE,
	HeroPics.THORGRIM as unknown as string,
	1,
	3,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.RESISTANCE],
	RangersDescription.THORGRIM
);

export const Ufretin = new Hero(
	'Уфретин',
	HeroClasses.RANGER,
	Genders.MALE,
	Races.DWARF,
	Specialties.DWARVES,
	HeroPics.UFRETIN as unknown as string,
	1,
	3,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.LUCK, SecondarySkills.RESISTANCE],
	RangersDescription.UFRETIN
);
