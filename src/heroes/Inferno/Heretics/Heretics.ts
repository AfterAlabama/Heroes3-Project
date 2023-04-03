import { Genders } from "../../../types/Enums/Genders";
import { HeroClasses } from "../../../types/Enums/HeroClasses";
import { HeroPics } from "../../../types/Enums/HeroPics";
import { Races } from "../../../types/Enums/Races";
import { SecondarySkills } from "../../../types/Enums/SecondarySkills";
import { Specialties } from "../../../types/Enums/Specialties";
import { Spells } from "../../../types/Enums/Spells";
import { Hero } from "../../Hero";

export const Ash = new Hero(
	'Эш',
	HeroClasses.HERETIC,
	Genders.FEMALE,
	Races.DEMON,
	Specialties.BLOODLUST,
	HeroPics.ASH,
	1,
	1,
	2,
	1,
	1,
	0,
	10,
	Spells.BLOOD_LUST,
	[SecondarySkills.WISDOM, SecondarySkills.EAGLE_EYE]
);

export const Axsis = new Hero(
	'Аксис',
	HeroClasses.HERETIC,
	Genders.MALE,
	Races.DEMON,
	Specialties.MYSTICISM,
	HeroPics.AXSIS,
	1,
	1,
	2,
	1,
	1,
	0,
	10,
	Spells.PROTECTION_FROM_AIR,
	[SecondarySkills.WISDOM, SecondarySkills.MYSTICISM]
);

export const Ayden = new Hero(
	'Эйден',
	HeroClasses.HERETIC,
	Genders.MALE,
	Races.HUMAN,
	Specialties.INTELLIGENCE,
	HeroPics.AYDEN,
	1,
	1,
	2,
	1,
	1,
	0,
	10,
	Spells.VIEW_EARTH,
	[SecondarySkills.WISDOM, SecondarySkills.INTELLIGENCE]
);

export const Calid = new Hero(
	'Калид',
	HeroClasses.HERETIC,
	Genders.FEMALE,
	Races.DEMON,
	Specialties.SULFUR,
	HeroPics.CALID,
	1,
	1,
	2,
	1,
	1,
	0,
	10,
	Spells.HASTE,
	[SecondarySkills.WISDOM, SecondarySkills.LEARNING]
);

export const Olema = new Hero(
	'Олема',
	HeroClasses.HERETIC,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.WEAKNESS,
	HeroPics.OLEMA,
	1,
	1,
	2,
	1,
	1,
	0,
	10,
	Spells.WEAKNESS,
	[SecondarySkills.WISDOM, SecondarySkills.BALISTICS]
);

export const Xarfax = new Hero(
	'Ксарфакс',
	HeroClasses.HERETIC,
	Genders.MALE,
	Races.HUMAN,
	Specialties.FIREBALL,
	HeroPics.XARFAX,
	1,
	1,
	2,
	1,
	1,
	0,
	10,
	Spells.FIREBALL,
	[SecondarySkills.WISDOM, SecondarySkills.LEARNING]
);

export const Xyron = new Hero(
	'Ксурон',
	HeroClasses.HERETIC,
	Genders.MALE,
	Races.EFREET,
	Specialties.INFERNO,
	HeroPics.XYRON,
	1,
	1,
	2,
	1,
	1,
	0,
	10,
	Spells.INFERNO,
	[SecondarySkills.WISDOM, SecondarySkills.SCOLAR]
);
export const Zydar = new Hero(
	'Зидар',
	HeroClasses.HERETIC,
	Genders.MALE,
	Races.EFREET,
	Specialties.SORCERY,
	HeroPics.ZYDAR,
	1,
	1,
	2,
	1,
	1,
	0,
	10,
	Spells.STONE_SKIN,
	[SecondarySkills.WISDOM, SecondarySkills.SORCERY]
);