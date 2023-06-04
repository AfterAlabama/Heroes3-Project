import { AlchemistsDescription } from '../../../types/Enums/Descriptions/Tower/AlchemistsDescription';
import { Genders } from '../../../types/Enums/Genders';
import { HeroClasses } from '../../../types/Enums/HeroClasses';
import { HeroPics } from '../../../types/Enums/HeroPics';
import { Races } from '../../../types/Enums/Races';
import { SecondarySkills } from '../../../types/Enums/SecondarySkills';
import { Specialties } from '../../../types/Enums/Specialties';
import { Spells } from '../../../types/Enums/Spells';
import { Hero } from '../Hero';

export const Fafner = new Hero(
	'Фафнер',
	HeroClasses.ALCHEMIST,
	Genders.MALE,
	Races.GENIE,
	Specialties.NAGAS,
	HeroPics.FAFNER as unknown as string,
	1,
	1,
	2,
	2,
	0,
	0,
	20,
	Spells.HASTE,
	[SecondarySkills.SCOLAR, SecondarySkills.RESISTANCE],
	AlchemistsDescription.FAFNER
);

export const Iona = new Hero(
	'Иона',
	HeroClasses.ALCHEMIST,
	Genders.FEMALE,
	Races.GENIE,
	Specialties.GENIES,
	HeroPics.IONA as unknown as string,
	1,
	1,
	2,
	2,
	0,
	0,
	20,
	Spells.MAGIC_ARROW,
	[SecondarySkills.SCOLAR, SecondarySkills.INTELLIGENCE],
	AlchemistsDescription.IONA
);

export const Josephine = new Hero(
	'Жозефина',
	HeroClasses.ALCHEMIST,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.GOLEMS,
	HeroPics.JOSEPHINE as unknown as string,
	1,
	1,
	2,
	2,
	0,
	0,
	20,
	Spells.HASTE,
	[SecondarySkills.MYSTICISM, SecondarySkills.SORCERY],
	AlchemistsDescription.JOSEPHINE
);

export const Neela = new Hero(
	'Нила',
	HeroClasses.ALCHEMIST,
	Genders.FEMALE,
	Races.GENIE,
	Specialties.DEFENSE,
	HeroPics.NEELA as unknown as string,
	1,
	1,
	2,
	2,
	0,
	0,
	20,
	Spells.SHIELD,
	[SecondarySkills.SCOLAR, SecondarySkills.DEFENSE],
	AlchemistsDescription.NEELA
);

export const Piquedram = new Hero(
	'Пикедрам',
	HeroClasses.ALCHEMIST,
	Genders.MALE,
	Races.HUMAN,
	Specialties.GARGOYLES,
	HeroPics.PIQUEDRAM as unknown as string,
	1,
	1,
	2,
	2,
	0,
	0,
	20,
	Spells.SHIELD,
	[SecondarySkills.MYSTICISM, SecondarySkills.SCOUTING],
	AlchemistsDescription.PIQUEDRAM
);

export const Rissa = new Hero(
	'Рисса',
	HeroClasses.ALCHEMIST,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.MERCURY,
	HeroPics.RISSA as unknown as string,
	1,
	1,
	2,
	2,
	0,
	0,
	20,
	Spells.MAGIC_ARROW,
	[SecondarySkills.MYSTICISM, SecondarySkills.OFFENSE],
	AlchemistsDescription.RISSA
);

export const Thane = new Hero(
	'Тан',
	HeroClasses.ALCHEMIST,
	Genders.MALE,
	Races.GENIE,
	Specialties.GENIES,
	HeroPics.THANE as unknown as string,
	1,
	1,
	2,
	2,
	0,
	0,
	20,
	Spells.MAGIC_ARROW,
	[SecondarySkills.SCOLAR],
	AlchemistsDescription.THANE
);

export const Torosar = new Hero(
	'Торосар',
	HeroClasses.ALCHEMIST,
	Genders.MALE,
	Races.HUMAN,
	Specialties.BALLISTA,
	HeroPics.TOROSAR as unknown as string,
	1,
	1,
	2,
	2,
	0,
	0,
	20,
	Spells.MAGIC_ARROW,
	[SecondarySkills.MYSTICISM, SecondarySkills.TACTICS],
	AlchemistsDescription.TOROSAR
);
