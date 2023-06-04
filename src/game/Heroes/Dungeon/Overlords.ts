import { OverlordsDescription } from '../../../types/Enums/Descriptions/Dungeon/OverlordsDescription';
import { Genders } from '../../../types/Enums/Genders';
import { HeroClasses } from '../../../types/Enums/HeroClasses';
import { HeroPics } from '../../../types/Enums/HeroPics';
import { Races } from '../../../types/Enums/Races';
import { SecondarySkills } from '../../../types/Enums/SecondarySkills';
import { Specialties } from '../../../types/Enums/Specialties';
import { Hero } from '../Hero';

export const Ajit = new Hero(
	'Аджит',
	HeroClasses.OVERLORD,
	Genders.MALE,
	Races.HUMAN,
	Specialties.BEHOLDERS,
	HeroPics.AJIT as unknown as string,
	2,
	2,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.LEADERSHIP, SecondarySkills.RESISTANCE],
	OverlordsDescription.AJIT
);

export const Arlach = new Hero(
	'Арлаш',
	HeroClasses.OVERLORD,
	Genders.MALE,
	Races.TROGLODYTE,
	Specialties.BALLISTA,
	HeroPics.ARLACH as unknown as string,
	2,
	2,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.OFFENSE, SecondarySkills.BALLISTA],
	OverlordsDescription.ARLACH
);

export const Dace = new Hero(
	'Дейс',
	HeroClasses.OVERLORD,
	Genders.MALE,
	Races.MINOTAUR,
	Specialties.MINOTAURS,
	HeroPics.DACE as unknown as string,
	2,
	2,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.OFFENSE, SecondarySkills.TACTICS],
	OverlordsDescription.DACE
);

export const Damacon = new Hero(
	'Дамакон',
	HeroClasses.OVERLORD,
	Genders.MALE,
	Races.TROGLODYTE,
	Specialties.GOLD,
	HeroPics.DAMACON as unknown as string,
	2,
	2,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.OFFENSE],
	OverlordsDescription.DAMACON
);

export const Gunnar = new Hero(
	'Гуннар',
	HeroClasses.OVERLORD,
	Genders.MALE,
	Races.MINOTAUR,
	Specialties.LOGISTICS,
	HeroPics.GUNNAR as unknown as string,
	2,
	2,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.TACTICS, SecondarySkills.LOGISTICS],
	OverlordsDescription.GUNNAR
);

export const Lorelei = new Hero(
	'Лорелей',
	HeroClasses.OVERLORD,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.HARPIES,
	HeroPics.LORELEI as unknown as string,
	2,
	2,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.LEADERSHIP, SecondarySkills.SCOUTING],
	OverlordsDescription.LORELEI
);

export const Shakti = new Hero(
	'Шакти',
	HeroClasses.OVERLORD,
	Genders.MALE,
	Races.TROGLODYTE,
	Specialties.TROGLODYTES,
	HeroPics.SHAKTI as unknown as string,
	2,
	2,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.OFFENSE, SecondarySkills.TACTICS],
	OverlordsDescription.SHAKTI
);

export const Synca = new Hero(
	'Синка',
	HeroClasses.OVERLORD,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.MANTICORES,
	HeroPics.SYNCA as unknown as string,
	2,
	2,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.LEADERSHIP, SecondarySkills.SCOLAR],
	OverlordsDescription.SYNCA
);
