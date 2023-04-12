import { DeathKnightsDescription } from "../../../types/Enums/Descriptions/Necropolis/DeathKnightsDescription";
import { Genders } from "../../../types/Enums/Genders";
import { HeroClasses } from "../../../types/Enums/HeroClasses";
import { HeroPics } from "../../../types/Enums/HeroPics";
import { Races } from "../../../types/Enums/Races";
import { SecondarySkills } from "../../../types/Enums/SecondarySkills";
import { Specialties } from "../../../types/Enums/Specialties";
import { Spells } from "../../../types/Enums/Spells";
import { Hero } from "../../Hero";

export const Charna = new Hero(
	'Чарна',
	HeroClasses.DEATH_KNIGHT,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.WIGHTS,
	HeroPics.CHARNA,
	1,
	2,
	2,
	1,
	0,
	0,
	10,
	Spells.MAGIC_ARROW,
	[SecondarySkills.NECROMANCY, SecondarySkills.TACTICS],
	DeathKnightsDescription.CHARNA
);

export const Clavius = new Hero(
	'Клавиус',
	HeroClasses.DEATH_KNIGHT,
	Genders.MALE,
	Races.HUMAN,
	Specialties.GOLD,
	HeroPics.CLAVIUS,
	1,
	2,
	2,
	1,
	0,
	0,
	10,
	Spells.MAGIC_ARROW,
	[SecondarySkills.NECROMANCY, SecondarySkills.OFFENSE],
	DeathKnightsDescription.CLAVIUS
);

export const Galthran = new Hero(
	'Галтран',
	HeroClasses.DEATH_KNIGHT,
	Genders.MALE,
	Races.VAMPIRE,
	Specialties.SKELETONS,
	HeroPics.GALTHRAN,
	1,
	2,
	2,
	1,
	0,
	0,
	10,
	Spells.SHIELD,
	[SecondarySkills.NECROMANCY, SecondarySkills.DEFENSE],
	DeathKnightsDescription.GALTHRAN
);

export const Isra = new Hero(
	'Исра',
	HeroClasses.DEATH_KNIGHT,
	Genders.FEMALE,
	Races.LICH,
	Specialties.NECROMANCY,
	HeroPics.ISRA,
	1,
	2,
	2,
	1,
	0,
	0,
	10,
	Spells.MAGIC_ARROW,
	[SecondarySkills.NECROMANCY],
	DeathKnightsDescription.ISRA
);

export const Moandor = new Hero(
	'Моандер',
	HeroClasses.DEATH_KNIGHT,
	Genders.MALE,
	Races.LICH,
	Specialties.Liches,
	HeroPics.MOANDOR,
	1,
	2,
	2,
	1,
	0,
	0,
	10,
	Spells.SLOW,
	[SecondarySkills.NECROMANCY, SecondarySkills.LEARNING],
	DeathKnightsDescription.MOANDOR
);

export const Straker = new Hero(
	'Стракер',
	HeroClasses.DEATH_KNIGHT,
	Genders.MALE,
	Races.HUMAN,
	Specialties.WALKING_DEAD,
	HeroPics.STRAKER,
	1,
	2,
	2,
	1,
	0,
	0,
	10,
	Spells.HASTE,
	[SecondarySkills.NECROMANCY, SecondarySkills.RESISTANCE],
	DeathKnightsDescription.STRAKER
);

export const Tamika = new Hero(
	'Тамика',
	HeroClasses.DEATH_KNIGHT,
	Genders.FEMALE,
	Races.VAMPIRE,
	Specialties.BLACK_KNIGHTS,
	HeroPics.TAMIKA,
	1,
	2,
	2,
	1,
	0,
	0,
	10,
	Spells.MAGIC_ARROW,
	[SecondarySkills.NECROMANCY, SecondarySkills.OFFENSE],
	DeathKnightsDescription.TAMIKA
);

export const Vokial = new Hero(
	'Вокиал',
	HeroClasses.DEATH_KNIGHT,
	Genders.MALE,
	Races.VAMPIRE,
	Specialties.VAMPIRES,
	HeroPics.VOKIAL,
	1,
	2,
	2,
	1,
	0,
	0,
	10,
	Spells.STONE_SKIN,
	[SecondarySkills.NECROMANCY, SecondarySkills.BALLISTA],
	DeathKnightsDescription.VOKIAL
);