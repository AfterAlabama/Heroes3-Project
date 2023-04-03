import { Genders } from "../../../types/Enums/Genders";
import { HeroClasses } from "../../../types/Enums/HeroClasses";
import { HeroPics } from "../../../types/Enums/HeroPics";
import { Races } from "../../../types/Enums/Races";
import { SecondarySkills } from "../../../types/Enums/SecondarySkills";
import { Specialties } from "../../../types/Enums/Specialties";
import { Hero } from "../../Hero";

export const Calh = new Hero(
	'Калх',
	HeroClasses.DEMONIAC,
	Genders.MALE,
	Races.DEMON,
	Specialties.GOGS,
	HeroPics.CALH,
	2,
	2,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.ARCHERY, SecondarySkills.SCOUTING]
);

export const Fiona = new Hero(
	'Фиона',
	HeroClasses.DEMONIAC,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.HELL_HOUNDS,
	HeroPics.FIONA,
	2,
	2,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.SCOUTING]
);

export const Ignatius = new Hero(
	'Игнатиус',
	HeroClasses.DEMONIAC,
	Genders.MALE,
	Races.HUMAN,
	Specialties.IMPS,
	HeroPics.IGNATIUS,
	2,
	2,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.TACTICS, SecondarySkills.RESISTANCE]
);

export const Marius = new Hero(
	'Мариус',
	HeroClasses.DEMONIAC,
	Genders.FEMALE,
	Races.DEMON,
	Specialties.DEMONS,
	HeroPics.MARIUS,
	2,
	2,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.DEFENSE]
);

export const Nymus = new Hero(
	'Нимус',
	HeroClasses.DEMONIAC,
	Genders.FEMALE,
	Races.DEMON,
	Specialties.PIT_FIENDS,
	HeroPics.NYMUS,
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

export const Octavia = new Hero(
	'Октавия',
	HeroClasses.DEMONIAC,
	Genders.FEMALE,
	Races.EFREET,
	Specialties.GOLD,
	HeroPics.OCTAVIA,
	2,
	2,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.SCOLAR, SecondarySkills.OFFENSE]
);

export const Pyre = new Hero(
	'Пайр',
	HeroClasses.DEMONIAC,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.BALLISTA,
	HeroPics.PYRE,
	2,
	2,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.LOGISTICS, SecondarySkills.BALLISTA]
);

export const Rashka = new Hero(
	'Рашка',
	HeroClasses.DEMONIAC,
	Genders.MALE,
	Races.EFREET,
	Specialties.EFREETS,
	HeroPics.RASHKA,
	2,
	2,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.LOGISTICS, SecondarySkills.WISDOM]
);