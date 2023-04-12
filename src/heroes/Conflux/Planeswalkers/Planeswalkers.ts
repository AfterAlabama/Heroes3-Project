import { PlaneswalkersDescription } from '../../../types/Enums/Descriptions/Conflux/PlaneswalkersDescription';
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
	[SecondarySkills.TACTICS, SecondarySkills.ESTATES],
	PlaneswalkersDescription.ERDAMON
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
	[SecondarySkills.OFFENSE],
	PlaneswalkersDescription.FIUR
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
	[SecondarySkills.BALLISTA, SecondarySkills.OFFENSE],
	PlaneswalkersDescription.IGNISSA
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
	[SecondarySkills.TACTICS],
	PlaneswalkersDescription.LACUS
);

export const Kalt = new Hero(
	'Кальт',
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
	[SecondarySkills.TACTICS, SecondarySkills.LEARNING],
	PlaneswalkersDescription.KALT
);

export const Monere = new Hero(
	'Монер',
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
	[SecondarySkills.OFFENSE, SecondarySkills.LOGISTICS],
	PlaneswalkersDescription.MONERE
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
	[SecondarySkills.OFFENSE, SecondarySkills.BALLISTA],
	PlaneswalkersDescription.PASIS
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
	[SecondarySkills.TACTICS, SecondarySkills.ESTATES],
	PlaneswalkersDescription.THUNAR
);
