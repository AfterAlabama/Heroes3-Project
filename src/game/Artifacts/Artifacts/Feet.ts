import { ArtifactPics } from '../../../types/Enums/ArtifactPics';
import { ArtifactRarity } from '../../../types/Enums/ArtifactRarity';
import { ArtifactTypes } from '../../../types/Enums/ArtifactTypes';
import { Artifact } from '../Artifact';

const LevitationBoots = new Artifact(
	'Сапоги левитации',
	ArtifactPics.LEVITATIONBOOTS as unknown as string,
	ArtifactRarity.RELIC,
	'При встрече с местным мудрецом вы рассказываете ему о цели вашего путешествия. Он открывает свой сундук и достаёт оттуда пару странных ботинок, которые он затем передаёт вам.',
	10000,
	'Позволяют преодолевать водные преграды',
	ArtifactTypes.FEET
);

const PolarityBoots = new Artifact(
	'Башмаки полярности',
	ArtifactPics.POLARITYBOOTS as unknown as string,
	ArtifactRarity.MAJOR,
	'Вы помогаете торговцу-кочевнику избавиться от нападок гоблинов. В знак благодарности он дарит вам пару искусно сделанных сапог из очень мягкой кожи. При более близком рассмотрении вы обнаруживаете, что на них нанесены древние руны.',
	6000,
	'Увеличивают эффективность навыка Сопротивление на 15%',
	ArtifactTypes.FEET
);

const SpeedBoots = new Artifact(
	'Сапоги-скороходы',
	ArtifactPics.SPEEDBOOTS as unknown as string,
	ArtifactRarity.MINOR,
	'При встрече с местным мудрецом вы рассказываете ему о цели вашего путешествия. Он открывает свой сундук и достаёт оттуда пару странных ботинок, которые он затем передаёт вам.',
	6000,
	'Увеличивают дальность передвижения героя по суше на 600 очков',
	ArtifactTypes.FEET
);

const DeadmansBoots = new Artifact(
	'Башмаки мертвеца',
	ArtifactPics.DEADMANSBOOTS as unknown as string,
	ArtifactRarity.MAJOR,
	'Вы находите пару изящно украшенных сапог. Помянув добрым словом неизвестного покровителя, вы забираете сапоги с собой.',
	6000,
	'Увеличивают эффективность навыка Некромантии на 15%',
	ArtifactTypes.FEET
);

const DragonBoneGreaves = new Artifact(
	'Поножи из кости дракона',
	ArtifactPics.DRAGONBONESGREAVES as unknown as string,
	ArtifactRarity.TREASURE,
	'Вы натыкаетесь на кости какого-то крупного животного, скорее всего — дракона. При более близком рассмотрении вы обнаруживаете, что это не просто кости, а наголенники.',
	2000,
	'+1 к силе магии и знанию',
	ArtifactTypes.FEET
);

const SaintSndals = new Artifact(
	'Сандалии святого',
	ArtifactPics.SANDALSSAINT as unknown as string,
	ArtifactRarity.RELIC,
	'Вы помогаете торговцу-кочевнику избавиться от нападок гоблинов. В знак благодарности он дарит вам пару искусно сделанных сандалий из очень мягкой кожи. При более близком рассмотрении вы обнаруживаете, что на них нанесены древние руны.',
	8000,
	'+2 ко всем характеристикам',
	ArtifactTypes.FEET
);

export const FeetArtifacts = [
	LevitationBoots,
	PolarityBoots,
	SpeedBoots,
	DeadmansBoots,
	DragonBoneGreaves,
	SaintSndals,
];
