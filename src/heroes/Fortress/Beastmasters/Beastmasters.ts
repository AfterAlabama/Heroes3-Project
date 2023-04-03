import { Genders } from "../../../types/Enums/Genders";
import { HeroClasses } from "../../../types/Enums/HeroClasses";
import { HeroPics } from "../../../types/Enums/HeroPics";
import { Races } from "../../../types/Enums/Races";
import { SecondarySkills } from "../../../types/Enums/SecondarySkills";
import { Specialties } from "../../../types/Enums/Specialties";
import { Hero } from "../../Hero";

export const Alkin = new Hero(
	'Алкин',
	HeroClasses.BEASTMASTER,
	Genders.MALE,
	Races.GNOLL,
	Specialties.GORGONS,
	HeroPics.ALKIN,
	0,
	4,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.DEFENSE, SecondarySkills.OFFENSE]
);

export const Brogchild = new Hero(
	'Брогчайлд',
	HeroClasses.BEASTMASTER,
	Genders.MALE,
	Races.LIZARDMAN,
	Specialties.WYVERNS,
	HeroPics.BROGCHILD,
	0,
	4,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.DEFENSE, SecondarySkills.SCOUTING]
);

export const Bron = new Hero(
	'Брон',
	HeroClasses.BEASTMASTER,
	Genders.MALE,
	Races.HUMAN,
	Specialties.BASILISKS,
	HeroPics.BRON,
	0,
	4,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.DEFENSE, SecondarySkills.RESISTANCE]
);

export const Drakon = new Hero(
	'Дракон',
	HeroClasses.BEASTMASTER,
	Genders.MALE,
	Races.GNOLL,
	Specialties.GNOLLS,
	HeroPics.DRAKON,
	0,
	4,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.DEFENSE, SecondarySkills.LEADERSHIP]
);

export const Gerwulf = new Hero(
	'Гервульф',
	HeroClasses.BEASTMASTER,
	Genders.MALE,
	Races.HUMAN,
	Specialties.BALLISTA,
	HeroPics.GERWULF,
	0,
	4,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.DEFENSE, SecondarySkills.BALLISTA]
);

export const Korbac = new Hero(
	'Корбак',
	HeroClasses.BEASTMASTER,
	Genders.MALE,
	Races.LIZARDMAN,
	Specialties.SERPENT_FLIES,
	HeroPics.KORBAC,
	0,
	4,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.DEFENSE, SecondarySkills.PATH_FINDING]
);

export const Tazar = new Hero(
	'Тазар',
	HeroClasses.BEASTMASTER,
	Genders.MALE,
	Races.HUMAN,
	Specialties.DEFENSE,
	HeroPics.TAZAR,
	0,
	4,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.DEFENSE]
);

export const Wystan = new Hero(
	'Вистан',
	HeroClasses.BEASTMASTER,
	Genders.MALE,
	Races.LIZARDMAN,
	Specialties.LIZARDMEN,
	HeroPics.WYSTAN,
	0,
	4,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.DEFENSE, SecondarySkills.ARCHERY]
);