import { NecromancersDescription } from '../../../types/Enums/Descriptions/Necropolis/NecromancersDescription';
import { Genders } from '../../../types/Enums/Genders';
import { HeroClasses } from '../../../types/Enums/HeroClasses';
import { HeroPics } from '../../../types/Enums/HeroPics';
import { Races } from '../../../types/Enums/Races';
import { SecondarySkills } from '../../../types/Enums/SecondarySkills';
import { Specialties } from '../../../types/Enums/Specialties';
import { Spells } from '../../../types/Enums/Spells';
import { Hero } from '../Hero';

export const Aislinn = new Hero(
	'Эйслин',
	HeroClasses.NECROMANCER,
	Genders.FEMALE,
	Races.VAMPIRE,
	Specialties.METEOR_SHOWER,
	HeroPics.AISLINN as unknown as string,
	1,
	0,
	2,
	2,
	0,
	0,
	25,
	Spells.METEOR_SHOWER,
	[SecondarySkills.NECROMANCY, SecondarySkills.WISDOM],
	NecromancersDescription.AISLINN
);

export const Nagash = new Hero(
	'Нагаш',
	HeroClasses.NECROMANCER,
	Genders.MALE,
	Races.LICH,
	Specialties.GOLD,
	HeroPics.NAGASH as unknown as string,
	1,
	0,
	2,
	2,
	0,
	0,
	25,
	Spells.PROTECTION_FROM_AIR,
	[SecondarySkills.NECROMANCY, SecondarySkills.INTELLIGENCE],
	NecromancersDescription.NAGASH
);

export const Nimbus = new Hero(
	'Нимбус',
	HeroClasses.NECROMANCER,
	Genders.MALE,
	Races.HUMAN,
	Specialties.EAGLE_EYE,
	HeroPics.NIMBUS as unknown as string,
	1,
	0,
	2,
	2,
	0,
	0,
	25,
	Spells.SHIELD,
	[SecondarySkills.NECROMANCY, SecondarySkills.EAGLE_EYE],
	NecromancersDescription.NIMBUS
);

export const Sandro = new Hero(
	'Сандро',
	HeroClasses.NECROMANCER,
	Genders.MALE,
	Races.LICH,
	Specialties.SORCERY,
	HeroPics.SANDRO as unknown as string,
	1,
	0,
	2,
	2,
	0,
	0,
	25,
	Spells.SLOW,
	[SecondarySkills.NECROMANCY, SecondarySkills.SORCERY],
	NecromancersDescription.SANDRO
);

export const Septienna = new Hero(
	'Септинна',
	HeroClasses.NECROMANCER,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.DEATH_RIPPLE,
	HeroPics.SEPTIENNA as unknown as string,
	1,
	0,
	2,
	2,
	0,
	0,
	25,
	Spells.DEATH_RIPPLE,
	[SecondarySkills.NECROMANCY, SecondarySkills.SCOLAR],
	NecromancersDescription.SEPTIENNA
);

export const Thant = new Hero(
	'Тант',
	HeroClasses.NECROMANCER,
	Genders.MALE,
	Races.VAMPIRE,
	Specialties.ANIMATE_DEAD,
	HeroPics.THANT as unknown as string,
	1,
	0,
	2,
	2,
	0,
	0,
	25,
	Spells.ANIMATE_DEAD,
	[SecondarySkills.NECROMANCY, SecondarySkills.MYSTICISM],
	NecromancersDescription.THANT
);

export const Vidomina = new Hero(
	'Видомина',
	HeroClasses.NECROMANCER,
	Genders.FEMALE,
	Races.HUMAN,
	Specialties.NECROMANCY,
	HeroPics.VIDOMINA as unknown as string,
	1,
	0,
	2,
	2,
	0,
	0,
	25,
	Spells.CURSE,
	[SecondarySkills.NECROMANCY],
	NecromancersDescription.VIDOMINA
);

export const Xsi = new Hero(
	'Кси',
	HeroClasses.NECROMANCER,
	Genders.FEMALE,
	Races.LICH,
	Specialties.STONE_SKIN,
	HeroPics.XSI as unknown as string,
	1,
	0,
	2,
	2,
	0,
	0,
	25,
	Spells.STONE_SKIN,
	[SecondarySkills.NECROMANCY, SecondarySkills.LEARNING],
	NecromancersDescription.XSI
);
