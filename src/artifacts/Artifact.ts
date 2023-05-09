interface ArtifactProperties {
	name: string;
	pic: string;
	rarity: string;
	description: string;
	price: number;
	effect: string;
}

export class Artifact implements ArtifactProperties {
	constructor(
		public name: string,
		public pic: string,
		public rarity: string,
		public description: string,
		public price: number,
		public effect: string
	) {
		this.name = name;
		this.pic = pic;
		this.rarity = rarity;
		this.description = description;
		this.price = price;
		this.effect = effect;
	}
}
