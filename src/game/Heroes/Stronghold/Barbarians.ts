import { BarbariansDescription } from '../../../types/Enums/Descriptions/Stronghold/BarbariansDescription';
import { Genders } from '../../../types/Enums/Genders';
import { HeroClasses } from '../../../types/Enums/HeroClasses';
import { HeroPics } from '../../../types/Enums/HeroPics';
import { Races } from '../../../types/Enums/Races';
import { SecondarySkills } from '../../../types/Enums/SecondarySkills';
import { Specialties } from '../../../types/Enums/Specialties';
import { Hero } from '../Hero';

export const CragHack = new Hero(
	'Крэг Хак',
	HeroClasses.BARBARIAN,
	Genders.MALE,
	Races.HUMAN,
	Specialties.OFFENSE,
	HeroPics.CRAG_HACK as unknown as string,
	4,
	0,
	1,
	1,
	1,
	0,
	10,
	null,
	[SecondarySkills.OFFENSE],
	BarbariansDescription.CRAG_HACK
);

export const Gretchin = new Hero(
	'Гретхен',
	HeroClasses.BARBARIAN,
	Genders.FEMALE,
	Races.GOBLIN,
	Specialties.GOBLINS,
	HeroPics.GRETCHIN as unknown as string,
	4,
	0,
	1,
	1,
	1,
	0,
	10,
	null,
	[SecondarySkills.OFFENSE, SecondarySkills.PATH_FINDING],
	BarbariansDescription.GRETCHIN
);

export const Gurnisson = new Hero(
	'Гурниссон',
	HeroClasses.BARBARIAN,
	Genders.MALE,
	Races.GOBLIN,
	Specialties.BALLISTA,
	HeroPics.GURNISSON as unknown as string,
	4,
	0,
	1,
	1,
	1,
	0,
	10,
	null,
	[SecondarySkills.OFFENSE, SecondarySkills.BALLISTA],
	BarbariansDescription.GURNISSON
);

export const Jabarkas = new Hero(
	'Жабаркас',
	HeroClasses.BARBARIAN,
	Genders.MALE,
	Races.GOBLIN,
	Specialties.ORCS,
	HeroPics.JABARKAS as unknown as string,
	4,
	0,
	1,
	1,
	1,
	0,
	10,
	null,
	[SecondarySkills.OFFENSE, SecondarySkills.ARCHERY],
	BarbariansDescription.JABARKAS
);

export const Krellion = new Hero(
	'Креллион',
	HeroClasses.BARBARIAN,
	Genders.MALE,
	Races.OGRE,
	Specialties.OGRES,
	HeroPics.KRELLION as unknown as string,
	4,
	0,
	1,
	1,
	1,
	0,
	10,
	null,
	[SecondarySkills.OFFENSE, SecondarySkills.RESISTANCE],
	BarbariansDescription.KRELLION
);

export const Shiva = new Hero(
	'Шива',
	HeroClasses.BARBARIAN,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.ROCS,
	HeroPics.SHIVA as unknown as string,
	4,
	0,
	1,
	1,
	1,
	0,
	10,
	null,
	[SecondarySkills.OFFENSE, SecondarySkills.SCOUTING],
	BarbariansDescription.SHIVA
);

export const Tyraxor = new Hero(
	'Тираксор',
	HeroClasses.BARBARIAN,
	Genders.MALE,
	Races.GOBLIN,
	Specialties.WOLF_RIDERS,
	HeroPics.TYRAXOR as unknown as string,
	4,
	0,
	1,
	1,
	1,
	0,
	10,
	null,
	[SecondarySkills.OFFENSE, SecondarySkills.TACTICS],
	BarbariansDescription.TYRAXOR
);

export const Yog = new Hero(
	'Йог',
	HeroClasses.BARBARIAN,
	Genders.MALE,
	Races.HUMAN,
	Specialties.CYCLOPES,
	HeroPics.YOG as unknown as string,
	4,
	0,
	1,
	1,
	1,
	0,
	10,
	null,
	[SecondarySkills.OFFENSE, SecondarySkills.BALISTICS],
	BarbariansDescription.YOG
);
