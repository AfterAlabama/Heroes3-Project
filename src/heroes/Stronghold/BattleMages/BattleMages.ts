import { BattleMagesDescription } from "../../../types/Enums/Descriptions/Stronghold/BattleMagesDescription";
import { Genders } from "../../../types/Enums/Genders";
import { HeroClasses } from "../../../types/Enums/HeroClasses";
import { HeroPics } from "../../../types/Enums/HeroPics";
import { Races } from "../../../types/Enums/Races";
import { SecondarySkills } from "../../../types/Enums/SecondarySkills";
import { Specialties } from "../../../types/Enums/Specialties";
import { Spells } from "../../../types/Enums/Spells";
import { Hero } from "../../Hero";

export const Dessa = new Hero(
	'Десса',
	HeroClasses.BATTLE_MAGE,
	Genders.MALE,
	Races.OGRE,
	Specialties.LOGISTICS,
	HeroPics.DESSA,
	2,
	1,
	1,
	1,
	1,
	0,
	10,
	Spells.STONE_SKIN,
	[SecondarySkills.WISDOM, SecondarySkills.LOGISTICS],
	BattleMagesDescription.DESSA
);

export const Gird = new Hero(
	'Гирд',
	HeroClasses.BATTLE_MAGE,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.SORCERY,
	HeroPics.GIRD,
	2,
	1,
	1,
	1,
	1,
	0,
	10,
	Spells.BLOOD_LUST,
	[SecondarySkills.WISDOM, SecondarySkills.SORCERY],
	BattleMagesDescription.GIRD
);

export const Gundula = new Hero(
	'Гундула',
	HeroClasses.BATTLE_MAGE,
	Genders.FEMALE,
	Races.OGRE,
	Specialties.OFFENSE,
	HeroPics.GUNDULA,
	2,
	1,
	1,
	1,
	1,
	0,
	10,
	Spells.SLOW,
	[SecondarySkills.WISDOM, SecondarySkills.OFFENSE],
	BattleMagesDescription.GUNDULA
);

export const Oris = new Hero(
	'Орис',
	HeroClasses.BATTLE_MAGE,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.EAGLE_EYE,
	HeroPics.ORIS,
	2,
	1,
	1,
	1,
	1,
	0,
	10,
	Spells.PROTECTION_FROM_AIR,
	[SecondarySkills.WISDOM, SecondarySkills.EAGLE_EYE],
	BattleMagesDescription.ORIS
);

export const Saurug = new Hero(
	'Соруг',
	HeroClasses.BATTLE_MAGE,
	Genders.MALE,
	Races.OGRE,
	Specialties.GEMS,
	HeroPics.SAURUG,
	2,
	1,
	1,
	1,
	1,
	0,
	10,
	Spells.BLOOD_LUST,
	[SecondarySkills.WISDOM, SecondarySkills.RESISTANCE],
	BattleMagesDescription.SAURUG
);

export const Terek = new Hero(
	'Терек',
	HeroClasses.BATTLE_MAGE,
	Genders.MALE,
	Races.HUMAN,
	Specialties.HASTE,
	HeroPics.TEREK,
	2,
	1,
	1,
	1,
	1,
	0,
	10,
	Spells.HASTE,
	[SecondarySkills.WISDOM, SecondarySkills.TACTICS],
	BattleMagesDescription.TEREK
);

export const Vey = new Hero(
	'Вей',
	HeroClasses.BATTLE_MAGE,
	Genders.MALE,
	Races.HUMAN,
	Specialties.OGRES,
	HeroPics.VEY,
	2,
	1,
	1,
	1,
	1,
	0,
	10,
	Spells.MAGIC_ARROW,
	[SecondarySkills.WISDOM, SecondarySkills.LEADERSHIP],
	BattleMagesDescription.VEY
);

export const Zubin = new Hero(
	'Зубин',
	HeroClasses.BATTLE_MAGE,
	Genders.MALE,
	Races.GOBLIN,
	Specialties.PRECISION,
	HeroPics.ZUBIN,
	2,
	1,
	1,
	1,
	1,
	0,
	10,
	Spells.PRECISION,
	[SecondarySkills.WISDOM, SecondarySkills.BALLISTA],
	BattleMagesDescription.ZUBIN
);