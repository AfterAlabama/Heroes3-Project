import { Genders } from "../../../types/Enums/Genders";
import { HeroClasses } from "../../../types/Enums/HeroClasses";
import { HeroPics } from "../../../types/Enums/HeroPics";
import { Races } from "../../../types/Enums/Races";
import { SecondarySkills } from "../../../types/Enums/SecondarySkills";
import { Specialties } from "../../../types/Enums/Specialties";
import { Hero } from "../../Hero";

export const Ajit = new Hero(
	'Аджит',
	HeroClasses.OVERLORD,
	Genders.MALE,
	Races.HUMAN,
	Specialties.BEHOLDERS,
	HeroPics.AJIT,
	2,
	2,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.LEADERSHIP, SecondarySkills.RESISTANCE]
);

export const Arlach = new Hero(
	'Арлак',
	HeroClasses.OVERLORD,
	Genders.MALE,
	Races.TROGLODYTE,
	Specialties.BALLISTA,
	HeroPics.ARLACH,
	2,
	2,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.OFFENSE, SecondarySkills.BALLISTA]
);

export const Dace = new Hero(
	'Дейс',
	HeroClasses.OVERLORD,
	Genders.MALE,
	Races.MINOTAUR,
	Specialties.MINOTAURS,
	HeroPics.DACE,
	2,
	2,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.OFFENSE, SecondarySkills.TACTICS]
);

export const Damacon = new Hero(
	'Дамакон',
	HeroClasses.OVERLORD,
	Genders.MALE,
	Races.TROGLODYTE,
	Specialties.GOLD,
	HeroPics.DAMACON,
	2,
	2,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.OFFENSE]
);

export const Gunnar = new Hero(
	'Гунар',
	HeroClasses.OVERLORD,
	Genders.MALE,
	Races.MINOTAUR,
	Specialties.LOGISTICS,
	HeroPics.GUNNAR,
	2,
	2,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.TACTICS, SecondarySkills.LOGISTICS]
);

export const Lorelei = new Hero(
	'Лорелей',
	HeroClasses.OVERLORD,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.HARPIES,
	HeroPics.LORELEI,
	2,
	2,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.LEADERSHIP, SecondarySkills.SCOUTING]
);

export const Shakti = new Hero(
	'Шакти',
	HeroClasses.OVERLORD,
	Genders.MALE,
	Races.TROGLODYTE,
	Specialties.TROGLODYTES,
	HeroPics.SHAKTI,
	2,
	2,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.OFFENSE, SecondarySkills.TACTICS]
);

export const Synca = new Hero(
	'Синка',
	HeroClasses.OVERLORD,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.MANTICORES,
	HeroPics.SYNCA,
	2,
	2,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.LEADERSHIP, SecondarySkills.SCOLAR]
);