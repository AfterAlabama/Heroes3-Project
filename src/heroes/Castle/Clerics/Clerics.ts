import { Genders } from "../../../types/Enums/Genders";
import { HeroClasses } from "../../../types/Enums/HeroClasses";
import { HeroPics } from "../../../types/Enums/HeroPics";
import { Races } from "../../../types/Enums/Races";
import { SecondarySkills } from "../../../types/Enums/SecondarySkills";
import { Specialties } from "../../../types/Enums/Specialties";
import { Spells } from "../../../types/Enums/Spells";
import { Hero } from "../../Hero";

export const Rion = new Hero(
  'Рион',
  HeroClasses.CLERIC,
  Genders.MALE,
  Races.HUMAN,
  Specialties.FIRST_AID,
  HeroPics.RION,
  1,
  0,
  2,
  2,
  0,
  0,
  20,
  Spells.STONE_SKIN,
  [SecondarySkills.WISDOM, SecondarySkills.FIRST_AID]
);

export const Adella = new Hero(
  'Аделла',
  HeroClasses.CLERIC,
  Genders.FEMALE,
  Races.HUMAN,
  Specialties.BLESS,
  HeroPics.ADELLA,
  1,
  0,
  2,
  2,
  1,
  0,
  20,
  Spells.BLESS,
  [SecondarySkills.WISDOM, SecondarySkills.DIPLOMACY]
);

export const Adelaide = new Hero(
  'Аделла',
  HeroClasses.CLERIC,
  Genders.FEMALE,
  Races.HUMAN,
  Specialties.BLESS,
  HeroPics.ADELAIDE,
  1,
  0,
  2,
  2,
  0,
  0,
  30,
  Spells.FROST_RING,
  [SecondarySkills.WISDOM]
);

export const Caitlin = new Hero(
  'Кейтлин',
  HeroClasses.CLERIC,
  Genders.FEMALE,
  Races.HUMAN,
  Specialties.GOLD,
  HeroPics.CAITLIN,
  1,
  0,
  2,
  2,
  0,
  0,
  25,
  Spells.CURE,
  [SecondarySkills.WISDOM, SecondarySkills.INTELLIGENCE]
);

export const Cuthbert = new Hero(
  'Катберт',
  HeroClasses.CLERIC,
  Genders.MALE,
  Races.HUMAN,
  Specialties.WEAKNESS,
  HeroPics.CUTHBERT,
  1,
  0,
  2,
  2,
  0,
  0,
  20,
  Spells.WEAKNESS,
  [SecondarySkills.WISDOM, SecondarySkills.ESTATES]
);

export const Ingham = new Hero(
  'Ингам',
  HeroClasses.CLERIC,
  Genders.MALE,
  Races.HUMAN,
  Specialties.MONKS,
  HeroPics.INGHAM,
  1,
  0,
  2,
  2,
  0,
  1,
  20,
  Spells.CURSE,
  [SecondarySkills.WISDOM, SecondarySkills.MYSTICISM]
);

export const Loynis = new Hero(
  'Лойнис',
  HeroClasses.CLERIC,
  Genders.MALE,
  Races.HUMAN,
  Specialties.PRAYER,
  HeroPics.LOYNIS,
  0,
  0,
  1,
  4,
  0,
  0,
  40,
  Spells.PRAYER,
  [SecondarySkills.WISDOM, SecondarySkills.LEARNING]
);

export const Sanya = new Hero(
  'Соня',
  HeroClasses.CLERIC,
  Genders.FEMALE,
  Races.HUMAN,
  Specialties.EAGLE_EYE,
  HeroPics.SANYA,
  1,
  0,
  2,
  2,
  0,
  0,
  20,
  Spells.DISPEL,
  [SecondarySkills.WISDOM, SecondarySkills.EAGLE_EYE]
);