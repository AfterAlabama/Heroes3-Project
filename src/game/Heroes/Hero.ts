export interface HeroCharsType {
	name: string;
	heroClass: string;
	gender: string;
	race: string;
	specialization: string;
	pic: string;
	attack: number;
	defense: number;
	power: number;
	knowledge: number;
	morale: number;
	luck: number;
	initialSpellPoints: number;
	initialSpells: string | null;
	baseSpecialties: string[]
}

export class Hero implements HeroCharsType {
	constructor(
		public name: string,
		public heroClass: string,
		public gender: string,
		public race: string,
		public specialization: string,
		public pic: string,
		public attack: number,
		public defense: number,
		public power: number,
		public knowledge: number,
		public morale: number,
		public luck: number,
		public initialSpellPoints: number,
		public initialSpells: string | null,
		public baseSpecialties: string[],
		public description: string
	) {
		this.name = name;
		this.specialization = specialization;
		this.pic = pic;
		this.attack = attack;
		this.defense = defense;
		this.power = power;
		this.knowledge = knowledge;
		this.heroClass = heroClass;
		this.morale = morale;
		this.luck = luck;
		this.initialSpellPoints = initialSpellPoints;
		this.initialSpells = initialSpells;
		this.race = race;
		this.gender = gender;
		this.baseSpecialties = baseSpecialties;
		this.description = description
	}
}
