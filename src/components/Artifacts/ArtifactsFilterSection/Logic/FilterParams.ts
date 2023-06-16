import { AnyAction } from '@reduxjs/toolkit';
import { ArtifactTypes } from '../../../../types/Enums/ArtifactTypes';
import { ArtifactRarity } from '../../../../types/Enums/ArtifactRarity';

export const FilterParams = (
	setArtifactsType: (st: string) => AnyAction,
	setArtifactsPrice: (st: string) => AnyAction,
	setArtifactsSlot: (st: string) => AnyAction,
	artifactsType: string,
	artifactsPrice: string,
	artifactsSlot: string
) => {
	return [
		{
			label: 'Слот',
			value: artifactsSlot,
			stateFunc: setArtifactsSlot,
			items: ArtifactTypes,
		},
		{
			label: 'Тип',
			value: artifactsType,
			stateFunc: setArtifactsType,
			items: ArtifactRarity,
		},
		{
			label: 'Цена',
			value: artifactsPrice,
			stateFunc: setArtifactsPrice,
			items: ['Самая низкая', 'Самая высокая'],
		},
	];
};
