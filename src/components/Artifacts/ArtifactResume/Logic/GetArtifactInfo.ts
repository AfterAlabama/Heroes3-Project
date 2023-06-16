
//get artifact info
export const GetArtifactInfo = (
	name: string,
	rarity: string,
	type: string,
	effect: string
) => {
	return [
		{
			label: 'Имя',
			value: name,
		},
		{
			label: 'Класс',
			value: rarity,
		},
		{
			label: 'Тип',
			value: type,
		},
		{
			label: 'Эффект',
			value: effect,
		},
	];
};
