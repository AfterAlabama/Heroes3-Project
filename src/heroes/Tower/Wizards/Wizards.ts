import { Genders } from "../../../types/Enums/Genders";
import { HeroClasses } from "../../../types/Enums/HeroClasses";
import { HeroPics } from "../../../types/Enums/HeroPics";
import { Races } from "../../../types/Enums/Races";
import { SecondarySkills } from "../../../types/Enums/SecondarySkills";
import { Specialties } from "../../../types/Enums/Specialties";
import { Spells } from "../../../types/Enums/Spells";
import { Hero } from "../../Hero";

export const Aine = new Hero(
	'Эйнэ',
	HeroClasses.WIZARD,
	Genders.FEMALE,
	Races.GENIE,
	Specialties.GOLD,
	HeroPics.AINE,
	0,
	0,
	2,
	3,
	0,
	0,
	30,
	Spells.CURSE,
	[SecondarySkills.WISDOM, SecondarySkills.SCOLAR]
);

export const Astral = new Hero(
	'Астрал',
	HeroClasses.WIZARD,
	Genders.MALE,
	Races.HUMAN,
	Specialties.HYPNOTIZE,
	HeroPics.ASTRAL,
	0,
	0,
	2,
	3,
	0,
	0,
	30,
	Spells.HYPNOTIZE,
	[SecondarySkills.WISDOM]
);

export const Cyra = new Hero(
	'Кира',
	HeroClasses.WIZARD,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.HASTE,
	HeroPics.CYRA,
	0,
	0,
	2,
	3,
	0,
	0,
	30,
	Spells.HASTE,
	[SecondarySkills.WISDOM, SecondarySkills.DIPLOMACY]
);

export const Daremyth = new Hero(
	'Даремиф',
	HeroClasses.WIZARD,
	Genders.FEMALE,
	Races.GENIE,
	Specialties.FORTUNE,
	HeroPics.DAREMYTH,
	0,
	0,
	2,
	3,
	0,
	0,
	30,
	Spells.FORTUNE,
	[SecondarySkills.WISDOM, SecondarySkills.INTELLIGENCE]
);

export const Halon = new Hero(
	'Халон',
	HeroClasses.WIZARD,
	Genders.MALE,
	Races.GENIE,
	Specialties.MYSTICISM,
	HeroPics.HALON,
	0,
	0,
	2,
	3,
	0,
	0,
	30,
	Spells.STONE_SKIN,
	[SecondarySkills.WISDOM, SecondarySkills.MYSTICISM]
);

export const Serena = new Hero(
	'Серена',
	HeroClasses.WIZARD,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.EAGLE_EYE,
	HeroPics.SERENA,
	0,
	0,
	2,
	3,
	0,
	0,
	30,
	Spells.DISPEL,
	[SecondarySkills.WISDOM, SecondarySkills.EAGLE_EYE]
);

export const Solmyr = new Hero(
	'Солмир',
	HeroClasses.WIZARD,
	Genders.MALE,
	Races.GENIE,
	Specialties.CHAIN_LIGHTNING,
	HeroPics.SOLMYR,
	0,
	0,
	2,
	3,
	0,
	0,
	30,
	Spells.CHAIN_LIGHTNING,
	[SecondarySkills.WISDOM, SecondarySkills.SORCERY]
);

export const Theodorus = new Hero(
	'Теодорус',
	HeroClasses.WIZARD,
	Genders.MALE,
	Races.HUMAN,
	Specialties.MAGI,
	HeroPics.TEODORUS,
	0,
	0,
	2,
	3,
	0,
	0,
	30,
	Spells.SHIELD,
	[SecondarySkills.WISDOM, SecondarySkills.BALISTICS]
);