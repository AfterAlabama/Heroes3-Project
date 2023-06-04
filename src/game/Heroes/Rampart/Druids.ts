import { DruidsDescription } from '../../../types/Enums/Descriptions/Rampart/DruidsDescription';
import { Genders } from '../../../types/Enums/Genders';
import { HeroClasses } from '../../../types/Enums/HeroClasses';
import { HeroPics } from '../../../types/Enums/HeroPics';
import { Races } from '../../../types/Enums/Races';
import { SecondarySkills } from '../../../types/Enums/SecondarySkills';
import { Specialties } from '../../../types/Enums/Specialties';
import { Spells } from '../../../types/Enums/Spells';
import { Hero } from '../Hero';

export const Aeris = new Hero(
	'Аэрис',
	HeroClasses.DRUID,
	Genders.MALE,
	Races.ELF,
	Specialties.PEGASI,
	HeroPics.AERIS as unknown as string,
	0,
	2,
	1,
	2,
	0,
	0,
	20,
	Spells.PROTECTION_FROM_AIR,
	[SecondarySkills.WISDOM, SecondarySkills.SCOUTING],
	DruidsDescription.AERIS
);

export const Alagar = new Hero(
	'Алагар',
	HeroClasses.DRUID,
	Genders.MALE,
	Races.HUMAN,
	Specialties.ICE_BOLT,
	HeroPics.ALAGAR as unknown as string,
	0,
	2,
	1,
	2,
	0,
	0,
	20,
	Spells.ICE_BOLT,
	[SecondarySkills.WISDOM, SecondarySkills.SORCERY],
	DruidsDescription.ALAGAR
);

export const Coronius = new Hero(
	'Короний',
	HeroClasses.DRUID,
	Genders.MALE,
	Races.HUMAN,
	Specialties.SLAYER,
	HeroPics.CORONIUS as unknown as string,
	0,
	2,
	1,
	2,
	0,
	0,
	20,
	Spells.SLAYER,
	[SecondarySkills.WISDOM, SecondarySkills.SCOLAR],
	DruidsDescription.CORONIUS
);

export const Elleshar = new Hero(
	'Эльшар',
	HeroClasses.DRUID,
	Genders.MALE,
	Races.ELF,
	Specialties.INTELLIGENCE,
	HeroPics.ELESHAR as unknown as string,
	0,
	2,
	1,
	2,
	0,
	0,
	20,
	Spells.CURSE,
	[SecondarySkills.WISDOM, SecondarySkills.INTELLIGENCE],
	DruidsDescription.ELESHAR
);

export const Gem = new Hero(
	'Джем',
	HeroClasses.DRUID,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.FIRST_AID,
	HeroPics.GEM as unknown as string,
	0,
	2,
	1,
	2,
	0,
	0,
	20,
	Spells.SUMMON_BOAT,
	[SecondarySkills.WISDOM, SecondarySkills.FIRST_AID],
	DruidsDescription.GEM
);

export const Malcom = new Hero(
	'Мэлком',
	HeroClasses.DRUID,
	Genders.MALE,
	Races.DWARF,
	Specialties.EAGLE_EYE,
	HeroPics.MALCOM as unknown as string,
	0,
	2,
	1,
	2,
	0,
	0,
	20,
	Spells.MAGIC_ARROW,
	[SecondarySkills.WISDOM, SecondarySkills.EAGLE_EYE],
	DruidsDescription.MALCOM
);

export const Melodia = new Hero(
	'Мелодия',
	HeroClasses.DRUID,
	Genders.FEMALE,
	Races.ELF,
	Specialties.FORTUNE,
	HeroPics.MELODIA as unknown as string,
	0,
	2,
	1,
	2,
	0,
	0,
	20,
	Spells.FORTUNE,
	[SecondarySkills.WISDOM, SecondarySkills.LUCK],
	DruidsDescription.MELODIA
);

export const Uland = new Hero(
	'Уланд',
	HeroClasses.DRUID,
	Genders.MALE,
	Races.DWARF,
	Specialties.CURE,
	HeroPics.ULAND as unknown as string,
	0,
	2,
	1,
	2,
	0,
	0,
	20,
	Spells.CURE,
	[SecondarySkills.WISDOM, SecondarySkills.BALISTICS],
	DruidsDescription.ULAND
);
