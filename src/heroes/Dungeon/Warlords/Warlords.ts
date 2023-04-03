import { Genders } from "../../../types/Enums/Genders";
import { HeroClasses } from "../../../types/Enums/HeroClasses";
import { HeroPics } from "../../../types/Enums/HeroPics";
import { Races } from "../../../types/Enums/Races";
import { SecondarySkills } from "../../../types/Enums/SecondarySkills";
import { Specialties } from "../../../types/Enums/Specialties";
import { Spells } from "../../../types/Enums/Spells";
import { Hero } from "../../Hero";


export const Alamar = new Hero(
	'Аламар',
	HeroClasses.WARLOCK,
	Genders.MALE,
	Races.HUMAN,
	Specialties.RESURRECTION,
	HeroPics.ALAMAR,
	0,
	0,
	3,
	2,
	0,
	0,
	20,
	Spells.RESURRECTION,
	[SecondarySkills.WISDOM, SecondarySkills.SCOLAR]
);

export const Darkstorn = new Hero(
	'Даркстоун',
	HeroClasses.WARLOCK,
	Genders.MALE,
	Races.MINOTAUR,
	Specialties.STONE_SKIN,
	HeroPics.DARKSTORN,
	0,
	0,
	3,
	2,
	0,
	0,
	20,
	Spells.STONE_SKIN,
	[SecondarySkills.WISDOM, SecondarySkills.LEARNING]
);

export const Deemer = new Hero(
	'Дамир',
	HeroClasses.WARLOCK,
	Genders.MALE,
	Races.MINOTAUR,
	Specialties.METEOR_SHOWER,
	HeroPics.DEEMER,
	0,
	0,
	3,
	2,
	0,
	0,
	20,
	Spells.METEOR_SHOWER,
	[SecondarySkills.SCOUTING, SecondarySkills.WISDOM]
);

export const Geon = new Hero(
	'Геон',
	HeroClasses.WARLOCK,
	Genders.MALE,
	Races.TROGLODYTE,
	Specialties.EAGLE_EYE,
	HeroPics.GEON,
	0,
	0,
	3,
	2,
	0,
	0,
	20,
	Spells.SLOW,
	[SecondarySkills.WISDOM, SecondarySkills.EAGLE_EYE]
);

export const Jaegar = new Hero(
	'Джаггер',
	HeroClasses.WARLOCK,
	Genders.MALE,
	Races.TROGLODYTE,
	Specialties.MYSTICISM,
	HeroPics.JAEGAR,
	0,
	0,
	3,
	2,
	0,
	0,
	20,
	Spells.SHIELD,
	[SecondarySkills.WISDOM, SecondarySkills.MYSTICISM]
);

export const Jeddite = new Hero(
	'Джедит',
	HeroClasses.WARLOCK,
	Genders.MALE,
	Races.HUMAN,
	Specialties.RESURRECTION,
	HeroPics.JEDDITE,
	0,
	0,
	3,
	2,
	0,
	0,
	20,
	Spells.RESURRECTION,
	[SecondarySkills.WISDOM]
);

export const Malekith = new Hero(
	'Малекит',
	HeroClasses.WARLOCK,
	Genders.MALE,
	Races.MINOTAUR,
	Specialties.SORCERY,
	HeroPics.MALEKITH,
	0,
	0,
	3,
	2,
	0,
	0,
	20,
	Spells.BLOOD_LUST,
	[SecondarySkills.WISDOM, SecondarySkills.SORCERY]
);

export const Sephinroth = new Hero(
	'Сефинрот',
	HeroClasses.WARLOCK,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.CRYSTAL,
	HeroPics.SEPHINROTH,
	0,
	0,
	3,
	2,
	0,
	0,
	20,
	Spells.PROTECTION_FROM_AIR,
	[SecondarySkills.WISDOM, SecondarySkills.INTELLIGENCE]
);