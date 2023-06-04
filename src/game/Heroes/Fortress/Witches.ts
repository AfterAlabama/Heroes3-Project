import { WitchesDescription } from '../../../types/Enums/Descriptions/Fortress/WitchesDescription';
import { Genders } from '../../../types/Enums/Genders';
import { HeroClasses } from '../../../types/Enums/HeroClasses';
import { HeroPics } from '../../../types/Enums/HeroPics';
import { Races } from '../../../types/Enums/Races';
import { SecondarySkills } from '../../../types/Enums/SecondarySkills';
import { Specialties } from '../../../types/Enums/Specialties';
import { Spells } from '../../../types/Enums/Spells';
import { Hero } from '../Hero';

export const Andra = new Hero(
	'Андра',
	HeroClasses.WITCH,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.INTELLIGENCE,
	HeroPics.ANDRA as unknown as string,
	0,
	1,
	2,
	2,
	0,
	0,
	25,
	Spells.DISPEL,
	[SecondarySkills.WISDOM, SecondarySkills.INTELLIGENCE],
	WitchesDescription.ANDRA
);

export const Merist = new Hero(
	'Мерист',
	HeroClasses.WITCH,
	Genders.FEMALE,
	Races.GNOLL,
	Specialties.STONE_SKIN,
	HeroPics.MERIST as unknown as string,
	0,
	1,
	2,
	2,
	0,
	0,
	25,
	Spells.STONE_SKIN,
	[SecondarySkills.WISDOM, SecondarySkills.LEARNING],
	WitchesDescription.MERIST
);

export const Mirlanda = new Hero(
	'Мирланда',
	HeroClasses.WITCH,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.WEAKNESS,
	HeroPics.MIRLANDA as unknown as string,
	0,
	1,
	2,
	2,
	0,
	0,
	25,
	Spells.WEAKNESS,
	[SecondarySkills.WISDOM],
	WitchesDescription.MIRLANDA
);

export const Rosic = new Hero(
	'Розик',
	HeroClasses.WITCH,
	Genders.FEMALE,
	Races.GNOLL,
	Specialties.MYSTICISM,
	HeroPics.ROSIC as unknown as string,
	0,
	1,
	2,
	2,
	0,
	0,
	25,
	Spells.MAGIC_ARROW,
	[SecondarySkills.WISDOM, SecondarySkills.MYSTICISM],
	WitchesDescription.ROSIC
);

export const Styg = new Hero(
	'Стиг',
	HeroClasses.WITCH,
	Genders.FEMALE,
	Races.LIZARDMAN,
	Specialties.SORCERY,
	HeroPics.STYG as unknown as string,
	0,
	1,
	2,
	2,
	0,
	0,
	25,
	Spells.SHIELD,
	[SecondarySkills.WISDOM, SecondarySkills.SORCERY],
	WitchesDescription.STYG
);

export const Tiva = new Hero(
	'Тива',
	HeroClasses.WITCH,
	Genders.FEMALE,
	Races.GNOLL,
	Specialties.EAGLE_EYE,
	HeroPics.TIVA as unknown as string,
	0,
	1,
	2,
	2,
	0,
	0,
	25,
	Spells.STONE_SKIN,
	[SecondarySkills.WISDOM, SecondarySkills.EAGLE_EYE],
	WitchesDescription.TIVA
);

export const Verdish = new Hero(
	'Вердиш',
	HeroClasses.WITCH,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.FIRST_AID,
	HeroPics.VERDISH as unknown as string,
	0,
	1,
	2,
	2,
	0,
	0,
	25,
	Spells.PROTECTION_FROM_FIRE,
	[SecondarySkills.WISDOM, SecondarySkills.FIRST_AID],
	WitchesDescription.VERDISH
);

export const Voy = new Hero(
	'Вой',
	HeroClasses.WITCH,
	Genders.FEMALE,
	Races.LIZARDMAN,
	Specialties.NAVIGATION,
	HeroPics.VOY as unknown as string,
	0,
	1,
	2,
	2,
	0,
	0,
	25,
	Spells.SLOW,
	[SecondarySkills.WISDOM, SecondarySkills.NAVIGATION],
	WitchesDescription.VOY
);
