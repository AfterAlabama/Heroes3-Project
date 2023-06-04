import { ArtifactPics } from '../../../types/Enums/ArtifactPics';
import { ArtifactRarity } from '../../../types/Enums/ArtifactRarity';
import { ArtifactTypes } from '../../../types/Enums/ArtifactTypes';
import { Artifact } from '../Artifact';

const WonderArmor = new Artifact(
	'Магические доспехи',
	ArtifactPics.WONDERARMOR as unknown as string,
	ArtifactRarity.MINOR,
	'Шайка бродяг роется в вещах погибших воинов. После того, как вы спугнули их, вы обнаруживаете, что они не заметили грязные, но надёжные доспехи на одном из погибших.',
	4000,
	'+1 ко всем характеристикам',
	ArtifactTypes.BODY
);

const BrimstoneBreastplate = new Artifact(
	'Доспехи самородной серы',
	ArtifactPics.BRIMSTONEBREASTPLATE as unknown as string,
	ArtifactRarity.MAJOR,
	'Вы встречаете кузнеца, который плавит остатки старых доспехов и оружия, чтобы получить железо для новых изделий. Он узнаёт о вашем походе и отдаёт вам нагрудник, который не плавился, и, следовательно, не был ему нужен.',
	6000,
	'+5 к силе магии',
	ArtifactTypes.BODY
);

const PetrifiedWoodBreastplate = new Artifact(
	'Нагрудник из окаменелого дерева',
	ArtifactPics.PETRIFIEDWOODBREASTPLATE as unknown as string,
	ArtifactRarity.TREASURE,
	'Шайка мародеров копается среди останков воина. Разогнав их, вы замечаете, что они обронили странный нагрудник.',
	1000,
	'+1 к силе магии',
	ArtifactTypes.BODY
);

const DragonScaleArmor = new Artifact(
	'Доспех из чешуи дракона',
	ArtifactPics.DRAGONSCALEARMOR as unknown as string,
	ArtifactRarity.RELIC,
	'Вы встречаете старого оружейника, который утверждает, что должен вам за что-то отплатить. Вы соглашаетесь, и он, соединив вместе несколько чешуек дракона, отдаёт вам отличные доспехи.',
	8000,
	'+4 к атаке и защите',
	ArtifactTypes.BODY
);

const RibCage = new Artifact(
	'Рёбра',
	ArtifactPics.RIBCAGE as unknown as string,
	ArtifactRarity.MINOR,
	'Вы натыкаетесь на грудную клетку какого-то крупного животного. При более близком рассмотрении вы обнаруживаете, что это не просто кости, а доспехи.',
	3000,
	'+2 к силе магии',
	ArtifactTypes.BODY
);

const GreatBasilistScales = new Artifact(
	'Кольчуга великого василиска',
	ArtifactPics.GREATBASILISKSCALES as unknown as string,
	ArtifactRarity.MINOR,
	'Вы встречаете старого оружейника, который утверждает, что должен вам за что-то отплатить. Вы соглашаетесь, и он, соединив вместе несколько чешуек василиска, отдаёт вам отличные доспехи.',
	4000,
	'+3 к силе магии',
	ArtifactTypes.BODY
);

const TitansCuirass = new Artifact(
	'Кираса титана',
	ArtifactPics.TITANSCUIRASS as unknown as string,
	ArtifactRarity.RELIC,
	'Вас останавливает титан и требует 5000 золотых. Вы отказываетесь. Титан хватается за меч, который висит у него на поясе, однако вы успеваете проскочить у него между ног. Ваш манёвр настолько неожидан, что он спотыкается и падает... прямо на свой меч.',
	10000,
	'+10 к силе магии, но -2 к знанию',
	ArtifactTypes.BODY
);

const CyclopsKingTunic = new Artifact(
	'Туника короля циклопов',
	ArtifactPics.TUNICCYCLOPSKING as unknown as string,
	ArtifactRarity.MAJOR,
	'Вы застаёте циклопа, купающегося голышом, и, шутки ради, забираете его тунику. Позже вы узнаёте, что она волшебная.',
	5000,
	'+4 к силе магии',
	ArtifactTypes.BODY
);

export const BodyArtifacts = [
	WonderArmor,
	BrimstoneBreastplate,
	PetrifiedWoodBreastplate,
	DragonScaleArmor,
	RibCage,
	GreatBasilistScales,
	TitansCuirass,
	CyclopsKingTunic,
];
