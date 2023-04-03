import { Genders } from "../../../types/Enums/Genders";
import { HeroClasses } from "../../../types/Enums/HeroClasses";
import { HeroPics } from "../../../types/Enums/HeroPics";
import { Races } from "../../../types/Enums/Races";
import { SecondarySkills } from "../../../types/Enums/SecondarySkills";
import { Specialties } from "../../../types/Enums/Specialties";
import { Spells } from "../../../types/Enums/Spells";
import { Hero } from "../../Hero";


export const Aenain = new Hero(
  'Энейн',
  HeroClasses.ELEMENTALIST,
  Genders.MALE,
  Races.GENIE,
  Specialties.DISRUPTING_RAY,
  HeroPics.AENAIN,
  0,
  0,
  3,
  3,
  0,
  0,
  30,
  Spells.DISRUPTING_RAY,
  [SecondarySkills.WISDOM, SecondarySkills.AIR_MAGIC]
);

export const Brissa = new Hero(
  'Брисса',
  HeroClasses.ELEMENTALIST,
  Genders.FEMALE,
  Races.GENIE,
  Specialties.HASTE,
  HeroPics.BRISSA,
  0,
  0,
  3,
  3,
  0,
  0,
  30,
  Spells.HASTE,
  [SecondarySkills.WISDOM, SecondarySkills.AIR_MAGIC]
);

export const Ciele = new Hero(
  'Циель',
  HeroClasses.ELEMENTALIST,
  Genders.FEMALE,
  Races.ELF,
  Specialties.MAGIC_ARROW,
  HeroPics.CIELE,
  0,
  0,
  3,
  3,
  0,
  0,
  30,
  Spells.MAGIC_ARROW,
  [SecondarySkills.WISDOM, SecondarySkills.WATER_MAGIC]
);

export const Gelare = new Hero(
  'Гелар',
  HeroClasses.ELEMENTALIST,
  Genders.MALE,
  Races.ELF,
  Specialties.GOLD,
  HeroPics.GELARE,
  0,
  0,
  3,
  3,
  0,
  0,
  30,
  Spells.DISPEL,
  [SecondarySkills.WISDOM, SecondarySkills.WATER_MAGIC]
);

export const Grindan = new Hero(
  'Гриндан',
  HeroClasses.ELEMENTALIST,
  Genders.MALE,
  Races.DWARF,
  Specialties.GOLD,
  HeroPics.GRINDAN,
  0,
  0,
  3,
  3,
  0,
  0,
  30,
  Spells.SLOW,
  [SecondarySkills.WISDOM, SecondarySkills.EARTH_MAGIC]
);

export const Inteus = new Hero(
  'Интеус',
  HeroClasses.ELEMENTALIST,
  Genders.MALE,
  Races.HUMAN,
  Specialties.BLOODLUST,
  HeroPics.INTEUS,
  0,
  0,
  3,
  3,
  0,
  0,
  30,
  Spells.BLOOD_LUST,
  [SecondarySkills.WISDOM, SecondarySkills.FIRE_MAGIC]
);

export const Labetha = new Hero(
  'Лабета',
  HeroClasses.ELEMENTALIST,
  Genders.FEMALE,
  Races.HUMAN,
  Specialties.STONE_SKIN,
  HeroPics.LABETHA,
  0,
  0,
  3,
  3,
  0,
  0,
  30,
  Spells.STONE_SKIN,
  [SecondarySkills.WISDOM, SecondarySkills.EARTH_MAGIC]
);

export const Luna = new Hero(
  'Луна',
  HeroClasses.ELEMENTALIST,
  Genders.FEMALE,
  Races.HUMAN,
  Specialties.FIRE_WALL,
  HeroPics.LUNA,
  0,
  0,
  3,
  3,
  0,
  0,
  30,
  Spells.FIRE_WALL,
  [SecondarySkills.WISDOM, SecondarySkills.FIRE_MAGIC]
);