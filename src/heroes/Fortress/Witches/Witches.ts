import { Genders } from "../../../types/Enums/Genders";
import { HeroClasses } from "../../../types/Enums/HeroClasses";
import { HeroPics } from "../../../types/Enums/HeroPics";
import { Races } from "../../../types/Enums/Races";
import { SecondarySkills } from "../../../types/Enums/SecondarySkills";
import { Specialties } from "../../../types/Enums/Specialties";
import { Spells } from "../../../types/Enums/Spells";
import { Hero } from "../../Hero";


export const Andra = new Hero(
	'Андра',
	HeroClasses.WITCH,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.INTELLIGENCE,
	HeroPics.ANDRA,
	0,
	1,
	2,
	2,
	0,
	0,
	25,
	Spells.DISPEL,
	[SecondarySkills.WISDOM, SecondarySkills.INTELLIGENCE]
);

export const Merist = new Hero(
	'Мерист',
	HeroClasses.WITCH,
	Genders.FEMALE,
	Races.GNOLL,
	Specialties.STONE_SKIN,
	HeroPics.MERIST,
	0,
	1,
	2,
	2,
	0,
	0,
	25,
	Spells.STONE_SKIN,
	[SecondarySkills.WISDOM, SecondarySkills.LEARNING]
);

export const Mirlanda = new Hero(
	'Мирланда',
	HeroClasses.WITCH,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.WEAKNESS,
	HeroPics.MIRLANDA,
	0,
	1,
	2,
	2,
	0,
	0,
	25,
	Spells.WEAKNESS,
	[SecondarySkills.WISDOM]
);

export const Rosic = new Hero(
	'Розик',
	HeroClasses.WITCH,
	Genders.FEMALE,
	Races.GNOLL,
	Specialties.MYSTICISM,
	HeroPics.ROSIC,
	0,
	1,
	2,
	2,
	0,
	0,
	25,
	Spells.MAGIC_ARROW,
	[SecondarySkills.WISDOM, SecondarySkills.MYSTICISM]
);

export const Styg = new Hero(
	'Стиг',
	HeroClasses.WITCH,
	Genders.FEMALE,
	Races.LIZARDMAN,
	Specialties.SORCERY,
	HeroPics.STYG,
	0,
	1,
	2,
	2,
	0,
	0,
	25,
	Spells.SHIELD,
	[SecondarySkills.WISDOM, SecondarySkills.SORCERY]
);

export const Tiva = new Hero(
	'Тива',
	HeroClasses.WITCH,
	Genders.FEMALE,
	Races.GNOLL,
	Specialties.EAGLE_EYE,
	HeroPics.TIVA,
	0,
	1,
	2,
	2,
	0,
	0,
	25,
	Spells.STONE_SKIN,
	[SecondarySkills.WISDOM, SecondarySkills.EAGLE_EYE]
);

export const Verdish = new Hero(
	'Вердиш',
	HeroClasses.WITCH,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.FIRST_AID,
	HeroPics.VERDISH,
	0,
	1,
	2,
	2,
	0,
	0,
	25,
	Spells.PROTECTION_FROM_FIRE,
	[SecondarySkills.WISDOM, SecondarySkills.FIRST_AID]
);

export const Voy = new Hero(
	'Вой',
	HeroClasses.WITCH,
	Genders.FEMALE,
	Races.LIZARDMAN,
	Specialties.NAVIGATION,
	HeroPics.VOY,
	0,
	1,
	2,
	2,
	0,
	0,
	25,
	Spells.SLOW,
	[SecondarySkills.WISDOM, SecondarySkills.NAVIGATION]
);