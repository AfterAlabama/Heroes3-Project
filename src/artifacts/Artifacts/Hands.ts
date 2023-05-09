import { ArtifactPics } from '../../types/Enums/ArtifactPics';
import { ArtifactRarity } from '../../types/Enums/ArtifactRarity';
import { Artifact } from '../Artifact';

const DiplomatsRing = new Artifact(
	'Кольцо дипломата',
	ArtifactPics.DIPLOMATSRING as unknown as string,
	ArtifactRarity.MAJOR,
	'Вы помогаете послу разобраться с поломкой его повозки. В знак благодарности он дарит вам кольцо, обладающее магическими свойствами. При этом он говорит: "Оно позволит вам доказать другим вашу точку зрения".',
	5000,
	'Уменьшает цену выкупа героя с армией при сдаче врагу'
);

const EquastrianGloves = new Artifact(
	'Перчатки всадника',
	ArtifactPics.EQUASTRIANGLOVES as unknown as string,
	ArtifactRarity.MINOR,
	'Во время вашей короткой остановки на постоялом дворе вы начинаете обмениваться рассказами и, случайно, вещами. Вскоре вы обнаруживаете, что среди них есть волшебные перчатки.',
	3000,
	'Увеличивают дальность передвижения героя по суше на 300 очков '
);

const EverslokingSulfurRing = new Artifact(
	'Вечное кольцо серы',
	ArtifactPics.EVERSMOKINGSULFURRING as unknown as string,
	ArtifactRarity.MAJOR,
	'Вы посещаете алхимика, который, узнав о вашем походе, желает примкнуть к вам. Ваш новый подчинённый вручает вам кольцо серы, чтобы помочь вам в войне.',
	5000,
	'Ежедневно приносит в казну королевства 1 ед. серы'
);

const quietDragonEye = new Artifact(
	'Неподвижный глаз дракона',
	ArtifactPics.QUIETDRAGONEYE as unknown as string,
	ArtifactRarity.TREASURE,
	'В одной из ветхих избушек вы обнаруживаете скелет давно умершей ведьмы. При более детальном рассмотрении вы обнаруживаете кольцо с глазом дракона.',
	2000,
	'+1 к атаке и защите'
);

const ConjuringRing = new Artifact(
	'Магическое кольцо',
	ArtifactPics.CONJURINGRING as unknown as string,
	ArtifactRarity.TREASURE,
	'Вы находите небольшое дерево, которое чем-то похоже на колдуна Бримстона, на одном из ветвей которого вы видите кольцо. Обрывки одежды наводят вас на мысль, что это и есть Бримстон, только заколдованный. Вы берёте кольцо с собой.',
	1000,
	'Увеличивает продолжительность действия заклятий героя на 2 хода'
);

const InfiniteGemsRing = new Artifact(
	'Кольцо драгоценных камней',
	ArtifactPics.INFINITEGEMSRING as unknown as string,
	ArtifactRarity.MAJOR,
	'Вы слышите крик о помощи и вскоре обнаруживаете кентавра, попавшего в ловушку. В знак благодарности за освобождение он дарит вам мешочек, в котором вы находите изумительное кольцо с бриллиантами.',
	5000,
	'Ежедневно приносит в казну королевства один самоцвет'
);

const LifeRing = new Artifact(
	'Кольцо жизни',
	ArtifactPics.LIFERING as unknown as string,
	ArtifactRarity.MINOR,
	'На привале вы замечаете, как рысь пытается добраться до гнезда вороны на дереве. Не задумываясь, вы сами взбираетесь на дерево и прогоняете хищника. Между тем в самом гнезде вы находите несколько блестящих камешков и кольцо.',
	5000,
	'Увеличивает показатель здоровья всех юнитов армии героя на 1 ед'
);

const WayfarerRing = new Artifact(
	'Кольцо странника',
	ArtifactPics.WAYFARERRING as unknown as string,
	ArtifactRarity.MAJOR,
	'При встрече с местным мудрецом вы рассказываете ему о цели вашего путешествия. Он открывает свой мешок и достаёт оттуда странное кольцо, которое затем передаёт вам.',
	5000,
	'Увеличивает показатель скорости всех отрядов армии героя на 1 ед'
);

const VitalityRing = new Artifact(
	'Кольцо жизненной силы',
	ArtifactPics.VITALITYRING as unknown as string,
	ArtifactRarity.TREASURE,
	'На привале вы замечаете, как рысь пытается добраться до гнезда вороны на дереве. Не задумываясь, вы сами взбираетесь на дерево и прогоняете хищника. Между тем в самом гнезде вы находите несколько блестящих камешков и кольцо.',
	5000,
	'Увеличивает показатель здоровья всех юнитов армии героя на 1 ед'
);

const StillDragonEye = new Artifact(
	'Застывший глаз дракона',
	ArtifactPics.STILLDRAGONEYE as unknown as string,
	ArtifactRarity.TREASURE,
	'В одной из ветхих избушек вы обнаруживаете скелет давно умершей ведьмы. При более детальном рассмотрении вы обнаруживаете кольцо с глазом дракона.',
	2000,
	'+1 к боевому духу и удаче'
);

export const HandsArtifacts = [
	DiplomatsRing,
	EquastrianGloves,
	EverslokingSulfurRing,
	quietDragonEye,
	ConjuringRing,
	InfiniteGemsRing,
	LifeRing,
	WayfarerRing,
	VitalityRing,
	StillDragonEye,
];
