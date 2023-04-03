import { Genders } from "../../../types/Enums/Genders";
import { HeroClasses } from "../../../types/Enums/HeroClasses";
import { HeroPics } from "../../../types/Enums/HeroPics";
import { Races } from "../../../types/Enums/Races";
import { SecondarySkills } from "../../../types/Enums/SecondarySkills";
import { Specialties } from "../../../types/Enums/Specialties";
import { Hero } from "../../Hero";

export const CragHack = new Hero(
	'Крэг Хэк',
	HeroClasses.BARBARIAN,
	Genders.MALE,
	Races.HUMAN,
	Specialties.OFFENSE,
	HeroPics.CRAG_HACK,
	4,
	0,
	1,
	1,
	1,
	0,
	10,
	null,
	[SecondarySkills.OFFENSE]
);

export const Gretchin = new Hero(
	'Гретчин',
	HeroClasses.BARBARIAN,
	Genders.FEMALE,
	Races.GOBLIN,
	Specialties.GOBLINS,
	HeroPics.GRETCHIN,
	4,
	0,
	1,
	1,
	1,
	0,
	10,
	null,
	[SecondarySkills.OFFENSE, SecondarySkills.PATH_FINDING]
);

export const Gurnisson = new Hero(
	'Гурниссон',
	HeroClasses.BARBARIAN,
	Genders.MALE,
	Races.GOBLIN,
	Specialties.BALLISTA,
	HeroPics.GURNISSON,
	4,
	0,
	1,
	1,
	1,
	0,
	10,
	null,
	[SecondarySkills.OFFENSE, SecondarySkills.BALLISTA]
);

export const Jabarkas = new Hero(
	'Джабаркас',
	HeroClasses.BARBARIAN,
	Genders.MALE,
	Races.GOBLIN,
	Specialties.ORCS,
	HeroPics.JABARKAS,
	4,
	0,
	1,
	1,
	1,
	0,
	10,
	null,
	[SecondarySkills.OFFENSE, SecondarySkills.ARCHERY]
);

export const Krellion = new Hero(
	'Крелион',
	HeroClasses.BARBARIAN,
	Genders.MALE,
	Races.OGRE,
	Specialties.OGRES,
	HeroPics.KRELLION,
	4,
	0,
	1,
	1,
	1,
	0,
	10,
	null,
	[SecondarySkills.OFFENSE, SecondarySkills.RESISTANCE]
);

export const Shiva = new Hero(
	'Шива',
	HeroClasses.BARBARIAN,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.ROCS,
	HeroPics.SHIVA,
	4,
	0,
	1,
	1,
	1,
	0,
	10,
	null,
	[SecondarySkills.OFFENSE, SecondarySkills.SCOUTING]
);

export const Tyraxor = new Hero(
	'Тираксор',
	HeroClasses.BARBARIAN,
	Genders.MALE,
	Races.GOBLIN,
	Specialties.WOLF_RIDERS,
	HeroPics.TYRAXOR,
	4,
	0,
	1,
	1,
	1,
	0,
	10,
	null,
	[SecondarySkills.OFFENSE, SecondarySkills.TACTICS]
);

export const Yog = new Hero(
	'Йог',
	HeroClasses.BARBARIAN,
	Genders.MALE,
	Races.HUMAN,
	Specialties.CYCLOPES,
	HeroPics.YOG,
	4,
	0,
	1,
	1,
	1,
	0,
	10,
	null,
	[SecondarySkills.OFFENSE, SecondarySkills.BALISTICS]
);

