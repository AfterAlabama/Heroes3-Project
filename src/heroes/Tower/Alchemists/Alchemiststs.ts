import { Genders } from "../../../types/Enums/Genders";
import { HeroClasses } from "../../../types/Enums/HeroClasses";
import { HeroPics } from "../../../types/Enums/HeroPics";
import { Races } from "../../../types/Enums/Races";
import { SecondarySkills } from "../../../types/Enums/SecondarySkills";
import { Specialties } from "../../../types/Enums/Specialties";
import { Spells } from "../../../types/Enums/Spells";
import { Hero } from "../../Hero";

export const Fafner = new Hero(
	'Фафнер',
	HeroClasses.ALCHEMIST,
	Genders.MALE,
	Races.GENIE,
	Specialties.NAGAS,
	HeroPics.FAFNER,
	1,
	1,
	2,
	2,
	0,
	0,
	20,
	Spells.HASTE,
	[SecondarySkills.SCOLAR, SecondarySkills.RESISTANCE]
);

export const Iona = new Hero(
	'Иона',
	HeroClasses.ALCHEMIST,
	Genders.FEMALE,
	Races.GENIE,
	Specialties.GENIES,
	HeroPics.IONA,
	1,
	1,
	2,
	2,
	0,
	0,
	20,
	Spells.MAGIC_ARROW,
	[SecondarySkills.SCOLAR, SecondarySkills.INTELLIGENCE]
);

export const Josephine = new Hero(
	'Джозефина',
	HeroClasses.ALCHEMIST,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.GOLEMS,
	HeroPics.JOSEPHINE,
	1,
	1,
	2,
	2,
	0,
	0,
	20,
	Spells.HASTE,
	[SecondarySkills.MYSTICISM, SecondarySkills.SORCERY]
);

export const Neela = new Hero(
	'Ниила',
	HeroClasses.ALCHEMIST,
	Genders.FEMALE,
	Races.GENIE,
	Specialties.DEFENSE,
	HeroPics.NEELA,
	1,
	1,
	2,
	2,
	0,
	0,
	20,
	Spells.SHIELD,
	[SecondarySkills.SCOLAR, SecondarySkills.DEFENSE]
);

export const Piquedram = new Hero(
	'Пикадрам',
	HeroClasses.ALCHEMIST,
	Genders.MALE,
	Races.HUMAN,
	Specialties.GARGOYLES,
	HeroPics.PIQUEDRAM,
	1,
	1,
	2,
	2,
	0,
	0,
	20,
	Spells.SHIELD,
	[SecondarySkills.MYSTICISM, SecondarySkills.SCOUTING]
);

export const Rissa = new Hero(
	'Рисса',
	HeroClasses.ALCHEMIST,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.MERCURY,
	HeroPics.RISSA,
	1,
	1,
	2,
	2,
	0,
	0,
	20,
	Spells.MAGIC_ARROW,
	[SecondarySkills.MYSTICISM, SecondarySkills.OFFENSE]
);

export const Thane = new Hero(
	'Тейн',
	HeroClasses.ALCHEMIST,
	Genders.MALE,
	Races.GENIE,
	Specialties.GENIES,
	HeroPics.THANE,
	1,
	1,
	2,
	2,
	0,
	0,
	20,
	Spells.MAGIC_ARROW,
	[SecondarySkills.SCOLAR]
);

export const Torosar = new Hero(
	'Торосар',
	HeroClasses.ALCHEMIST,
	Genders.MALE,
	Races.HUMAN,
	Specialties.BALLISTA,
	HeroPics.TOROSAR,
	1,
	1,
	2,
	2,
	0,
	0,
	20,
	Spells.MAGIC_ARROW,
	[SecondarySkills.MYSTICISM, SecondarySkills.TACTICS]
);