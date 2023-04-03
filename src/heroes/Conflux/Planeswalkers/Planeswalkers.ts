import { Genders } from '../../../types/Enums/Genders';
import { HeroClasses } from '../../../types/Enums/HeroClasses';
import { HeroPics } from '../../../types/Enums/HeroPics';
import { Races } from '../../../types/Enums/Races';
import { SecondarySkills } from '../../../types/Enums/SecondarySkills';
import { Specialties } from '../../../types/Enums/Specialties';
import { Hero } from '../../Hero';

export const Erdamon = new Hero(
	'Эрдамон',
	HeroClasses.PLANESWALKER,
	Genders.MALE,
	Races.ELEMENTAL,
	Specialties.EARTH_ELEMENTALS,
	HeroPics.ERDAMON,
	3,
	1,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.TACTICS, SecondarySkills.ESTATES]
);

export const Fiur = new Hero(
	'Фьюр',
	HeroClasses.PLANESWALKER,
	Genders.MALE,
	Races.ELEMENTAL,
	Specialties.FIRE_ELEMENTALS,
	HeroPics.FIUR,
	3,
	1,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.OFFENSE]
);

export const Ignissa = new Hero(
	'Игнисса',
	HeroClasses.PLANESWALKER,
	Genders.FEMALE,
	Races.ELEMENTAL,
	Specialties.FIRE_ELEMENTALS,
	HeroPics.IGNISSA,
	3,
	1,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.BALLISTA, SecondarySkills.OFFENSE]
);

export const Lacus = new Hero(
	'Лакус',
	HeroClasses.PLANESWALKER,
	Genders.FEMALE,
	Races.ELEMENTAL,
	Specialties.WATER_ELEMENTALS,
	HeroPics.LACUS,
	3,
	1,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.TACTICS]
);

export const Kalt = new Hero(
	'Калт',
	HeroClasses.PLANESWALKER,
	Genders.FEMALE,
	Races.ELEMENTAL,
	Specialties.WATER_ELEMENTALS,
	HeroPics.KALT,
	3,
	1,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.TACTICS, SecondarySkills.LEARNING]
);

export const Monere = new Hero(
	'Монере',
	HeroClasses.PLANESWALKER,
	Genders.MALE,
	Races.ELEMENTAL,
	Specialties.PSYCHIC_ELEMENTALS,
	HeroPics.MONERE,
	3,
	1,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.OFFENSE, SecondarySkills.LOGISTICS]
);

export const Pasis = new Hero(
	'Пасис',
	HeroClasses.PLANESWALKER,
	Genders.FEMALE,
	Races.ELEMENTAL,
	Specialties.PSYCHIC_ELEMENTALS,
	HeroPics.PASIS,
	3,
	1,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.OFFENSE, SecondarySkills.BALLISTA]
);

export const Thunar = new Hero(
	'Тунар',
	HeroClasses.PLANESWALKER,
	Genders.FEMALE,
	Races.ELEMENTAL,
	Specialties.EARTH_ELEMENTALS,
	HeroPics.THUNAR,
	3,
	1,
	1,
	1,
	0,
	0,
	10,
	null,
	[SecondarySkills.TACTICS, SecondarySkills.ESTATES]
);
