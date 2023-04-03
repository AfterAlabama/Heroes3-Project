import { Genders } from "../../../types/Enums/Genders";
import { HeroClasses } from "../../../types/Enums/HeroClasses";
import { HeroPics } from "../../../types/Enums/HeroPics";
import { Races } from "../../../types/Enums/Races";
import { SecondarySkills } from "../../../types/Enums/SecondarySkills";
import { Specialties } from "../../../types/Enums/Specialties";
import { Hero } from "../../Hero";

export const Orrin = new Hero(
	'Оррин',
	HeroClasses.KNIGHT,
	Genders.MALE,
	Races.HUMAN,
	Specialties.ARCHERY,
	HeroPics.ORRIN,
	2,
	2,
	1,
	1,
	1,
	0,
	10,
	null,
  [SecondarySkills.ARCHERY, SecondarySkills.LEADERSHIP]
);

export const Valeska = new Hero(
  'Валеска',
  HeroClasses.KNIGHT,
  Genders.FEMALE,
  Races.HUMAN,
  Specialties.ARCHERS,
  HeroPics.VALESKA,
  2,
  2,
  1,
  1,
  1,
  0,
  10,
  null,
  [SecondarySkills.ARCHERY, SecondarySkills.LEADERSHIP]
);

export const Edric = new Hero(
  'Эдрик',
  HeroClasses.KNIGHT,
  Genders.MALE,
  Races.HUMAN,
  Specialties.GRIFFINS,
  HeroPics.EDRIC,
  2,
  2,
  1,
  1,
  1,
  0,
  10,
  null,
  [SecondarySkills.LEADERSHIP, SecondarySkills.DEFENSE]
);

export const Sylvia = new Hero(
  'Сильвия',
  HeroClasses.KNIGHT,
  Genders.FEMALE,
  Races.HUMAN,
  Specialties.NAVIGATION,
  HeroPics.SYLVIA,
  2,
  2,
  1,
  1,
  1,
  0,
  10,
  null,
  [SecondarySkills.LEADERSHIP, SecondarySkills.NAVIGATION]
);

export const LordHaart = new Hero(
  'Лорд Хаарт',
  HeroClasses.KNIGHT,
  Genders.MALE,
  Races.HUMAN,
  Specialties.ESTATES,
  HeroPics.LORD_HAART,
  2,
  2,
  1,
  1,
  1,
  0,
  10,
  null,
  [SecondarySkills.LEADERSHIP, SecondarySkills.ESTATES]
);

export const Sorsha = new Hero(
  'Сорша',
  HeroClasses.KNIGHT,
  Genders.FEMALE,
  Races.HUMAN,
  Specialties.SWORDSMEN,
  HeroPics.SORSHA,
  2,
  2,
  1,
  1,
  1,
  0,
  10,
  null,
  [SecondarySkills.LEADERSHIP, SecondarySkills.OFFENSE]
);

export const Christian = new Hero(
  'Кристиан',
  HeroClasses.KNIGHT,
  Genders.MALE,
  Races.HUMAN,
  Specialties.BALLISTA,
  HeroPics.CHRISTIAN,
  3,
  2,
  1,
  1,
  1,
  0,
  10,
  null,
  [SecondarySkills.LEADERSHIP, SecondarySkills.BALLISTA]
);

export const Tyris = new Hero(
  'Турис',
  HeroClasses.KNIGHT,
  Genders.FEMALE,
  Races.HUMAN,
  Specialties.CAVALIERS,
  HeroPics.TYRIS,
  2,
  2,
  1,
  1,
  1,
  0,
  10,
  null,
  [SecondarySkills.LEADERSHIP, SecondarySkills.TACTICS]
);

export const Catherine = new Hero(
  'Катерина',
  HeroClasses.KNIGHT,
  Genders.FEMALE,
  Races.HUMAN,
  Specialties.SWORDSMEN,
  HeroPics.CATHERINE,
  2,
  2,
  1,
  1,
  0,
  0,
  10,
  null,
  [SecondarySkills.LEADERSHIP, SecondarySkills.OFFENSE]
);

export const Roland = new Hero(
  'Роланд',
  HeroClasses.KNIGHT,
  Genders.MALE,
  Races.HUMAN,
  Specialties.SWORDSMEN,
  HeroPics.ROLAND,
  2,
  2,
  1,
  1,
  1,
  0,
  10,
  null,
  [SecondarySkills.LEADERSHIP, SecondarySkills.DEFENSE]
);

export const SirMullich = new Hero(
  'Сэр Мюллих',
  HeroClasses.KNIGHT,
  Genders.MALE,
  Races.HUMAN,
  Specialties.SPEED,
  HeroPics.SIR_MULLICH,
  2,
  2,
  1,
  1,
  1,
  1,
  10,
  null,
  [SecondarySkills.LEADERSHIP]
);

