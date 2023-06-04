import { KnightDescription } from '../../../types/Enums/Descriptions/Castle/KnightsDescription';
import { Genders } from '../../../types/Enums/Genders';
import { HeroClasses } from '../../../types/Enums/HeroClasses';
import { HeroPics } from '../../../types/Enums/HeroPics';
import { Races } from '../../../types/Enums/Races';
import { SecondarySkills } from '../../../types/Enums/SecondarySkills';
import { Specialties } from '../../../types/Enums/Specialties';
import { Hero } from '../Hero';

export const Orrin = new Hero(
	'Оррин',
	HeroClasses.KNIGHT,
	Genders.MALE,
	Races.HUMAN,
	Specialties.ARCHERY,
	HeroPics.ORRIN  as unknown as string,
	2,
	2,
	1,
	1,
	1,
	0,
	10,
	null,
	[SecondarySkills.ARCHERY, SecondarySkills.LEADERSHIP],
	KnightDescription.ORRIN
);

export const Valeska = new Hero(
	'Валеска',
	HeroClasses.KNIGHT,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.ARCHERS,
	HeroPics.VALESKA as unknown as string,
	2,
	2,
	1,
	1,
	1,
	0,
	10,
	null,
	[SecondarySkills.ARCHERY, SecondarySkills.LEADERSHIP],
	KnightDescription.VALESKA
);

export const Edric = new Hero(
	'Эдрик',
	HeroClasses.KNIGHT,
	Genders.MALE,
	Races.HUMAN,
	Specialties.GRIFFINS,
	HeroPics.EDRIC as unknown as string,
	2,
	2,
	1,
	1,
	1,
	0,
	10,
	null,
	[SecondarySkills.LEADERSHIP, SecondarySkills.DEFENSE],
	KnightDescription.EDRIC
);

export const Sylvia = new Hero(
	'Сильвия',
	HeroClasses.KNIGHT,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.NAVIGATION,
	HeroPics.SYLVIA as unknown as string,
	2,
	2,
	1,
	1,
	1,
	0,
	10,
	null,
	[SecondarySkills.LEADERSHIP, SecondarySkills.NAVIGATION],
	KnightDescription.SYLVIA
);

export const LordHaart = new Hero(
	'Лорд Хаарт',
	HeroClasses.KNIGHT,
	Genders.MALE,
	Races.HUMAN,
	Specialties.ESTATES,
	HeroPics.LORD_HAART as unknown as string,
	2,
	2,
	1,
	1,
	1,
	0,
	10,
	null,
	[SecondarySkills.LEADERSHIP, SecondarySkills.ESTATES],
	KnightDescription.LORD_HAART
);

export const Sorsha = new Hero(
	'Сорша',
	HeroClasses.KNIGHT,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.SWORDSMEN,
	HeroPics.SORSHA as unknown as string,
	2,
	2,
	1,
	1,
	1,
	0,
	10,
	null,
	[SecondarySkills.LEADERSHIP, SecondarySkills.OFFENSE],
	KnightDescription.SORSHA
);

export const Christian = new Hero(
	'Кристиан',
	HeroClasses.KNIGHT,
	Genders.MALE,
	Races.HUMAN,
	Specialties.BALLISTA,
	HeroPics.CHRISTIAN as unknown as string,
	3,
	2,
	1,
	1,
	1,
	0,
	10,
	null,
	[SecondarySkills.LEADERSHIP, SecondarySkills.BALLISTA],
	KnightDescription.CHRISTIAN
);

export const Tyris = new Hero(
	'Тирис',
	HeroClasses.KNIGHT,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.CAVALIERS,
	HeroPics.TYRIS as unknown as string,
	2,
	2,
	1,
	1,
	1,
	0,
	10,
	null,
	[SecondarySkills.LEADERSHIP, SecondarySkills.TACTICS],
	KnightDescription.TYRIS
);

export const Catherine = new Hero(
	'Катерина',
	HeroClasses.KNIGHT,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.SWORDSMEN,
	HeroPics.CATHERINE as unknown as string,
	2,
	2,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.LEADERSHIP, SecondarySkills.OFFENSE],
	KnightDescription.CATHERINE
);

export const Roland = new Hero(
	'Роланд',
	HeroClasses.KNIGHT,
	Genders.MALE,
	Races.HUMAN,
	Specialties.SWORDSMEN,
	HeroPics.ROLAND as unknown as string,
	2,
	2,
	1,
	1,
	1,
	0,
	10,
	null,
	[SecondarySkills.LEADERSHIP, SecondarySkills.DEFENSE],
	KnightDescription.ROLAND
);

export const SirMullich = new Hero(
	'Сэр Мюллих',
	HeroClasses.KNIGHT,
	Genders.MALE,
	Races.HUMAN,
	Specialties.SPEED,
	HeroPics.SIR_MULLICH as unknown as string,
	2,
	2,
	1,
	1,
	1,
	1,
	10,
	null,
	[SecondarySkills.LEADERSHIP],
	KnightDescription.SIR_MULLICH
);
