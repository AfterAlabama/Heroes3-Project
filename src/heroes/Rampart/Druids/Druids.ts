import { Genders } from "../../../types/Enums/Genders";
import { HeroClasses } from "../../../types/Enums/HeroClasses";
import { HeroPics } from "../../../types/Enums/HeroPics";
import { Races } from "../../../types/Enums/Races";
import { SecondarySkills } from "../../../types/Enums/SecondarySkills";
import { Specialties } from "../../../types/Enums/Specialties";
import { Spells } from "../../../types/Enums/Spells";
import { Hero } from "../../Hero";

export const Aeris = new Hero(
	'Эйрис',
	HeroClasses.DRUID,
	Genders.MALE,
	Races.ELF,
	Specialties.PEGASI,
	HeroPics.AERIS,
	0,
	2,
	1,
	2,
	0,
	0,
	20,
	Spells.PROTECTION_FROM_AIR,
	[SecondarySkills.WISDOM, SecondarySkills.SCOUTING]
);

export const Alagar = new Hero(
	'Алагар',
	HeroClasses.DRUID,
	Genders.MALE,
	Races.HUMAN,
	Specialties.ICE_BOLT,
	HeroPics.ALAGAR,
	0,
	2,
	1,
	2,
	0,
	0,
	20,
	Spells.ICE_BOLT,
	[SecondarySkills.WISDOM, SecondarySkills.SORCERY]
);

export const Coronius = new Hero(
	'Корониус',
	HeroClasses.DRUID,
	Genders.MALE,
	Races.HUMAN,
	Specialties.SLAYER,
	HeroPics.CORONIUS,
	0,
	2,
	1,
	2,
	0,
	0,
	20,
	Spells.SLAYER,
	[SecondarySkills.WISDOM, SecondarySkills.SCOLAR]
);

export const Elleshar = new Hero(
	'Эллешар',
	HeroClasses.DRUID,
	Genders.MALE,
	Races.ELF,
	Specialties.INTELLIGENCE,
	HeroPics.ELESHAR,
	0,
	2,
	1,
	2,
	0,
	0,
	20,
	Spells.CURSE,
	[SecondarySkills.WISDOM, SecondarySkills.INTELLIGENCE]
);

export const Gem = new Hero(
	'Джем',
	HeroClasses.DRUID,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.FIRST_AID,
	HeroPics.GEM,
	0,
	2,
	1,
	2,
	0,
	0,
	20,
	Spells.SUMMON_BOAT,
	[SecondarySkills.WISDOM, SecondarySkills.FIRST_AID]
);

export const Malcom = new Hero(
	'Мэлком',
	HeroClasses.DRUID,
	Genders.MALE,
	Races.DWARF,
	Specialties.EAGLE_EYE,
	HeroPics.MALCOM,
	0,
	2,
	1,
	2,
	0,
	0,
	20,
	Spells.MAGIC_ARROW,
	[SecondarySkills.WISDOM, SecondarySkills.EAGLE_EYE]
);

export const Melodia = new Hero(
	'Мэлоди',
	HeroClasses.DRUID,
	Genders.FEMALE,
	Races.ELF,
	Specialties.FORTUNE,
	HeroPics.MELODIA,
	0,
	2,
	1,
	2,
	0,
	0,
	20,
	Spells.FORTUNE,
	[SecondarySkills.WISDOM, SecondarySkills.LUCK]
);

export const Uland = new Hero(
	'Уланд',
	HeroClasses.DRUID,
	Genders.MALE,
	Races.DWARF,
	Specialties.CURE,
	HeroPics.ULAND,
	0,
	2,
	1,
	2,
	0,
	0,
	20,
	Spells.CURE,
	[SecondarySkills.WISDOM, SecondarySkills.BALISTICS]
);