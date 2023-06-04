import { ArtifactPics } from '../../../types/Enums/ArtifactPics';
import { ArtifactRarity } from '../../../types/Enums/ArtifactRarity';
import { ArtifactTypes } from '../../../types/Enums/ArtifactTypes';
import { Artifact } from '../Artifact';

const Blackshard = new Artifact(
	'Блэкшард мёртвого рыцаря',
	ArtifactPics.Blackshard as unknown as string,
	ArtifactRarity.MINOR,
	'Вдова бывшего капитана гвардейцев вручает вам меч своего погибшего мужа, чтобы помочь вам разгромить противника.',
	3000,
	'+3 к атаке',
	ArtifactTypes.MAINHAND
);

const CentaurAxe = new Artifact(
	'Секира кентавра',
	ArtifactPics.CENTAURSAXE as unknown as string,
	ArtifactRarity.TREASURE,
	'Вы находите тяжёлую секиру, погружённую в землю по самую рукоять. После некоторых безуспешных попыток ваших воинов вы берётесь за рукоять и с лёгкостью вытаскиваете её из земли.',
	2000,
	'+2 к атаке',
	ArtifactTypes.MAINHAND
);

const GnollsFlail = new Artifact(
	' Кистень великого гнолла',
	ArtifactPics.GNOLLSFLAIL as unknown as string,
	ArtifactRarity.MINOR,
	'Неуклюжий гнолл зашиб себя собственным кистенём. Зная, что вы более опытны в обращении с этим оружием, вы незаметно берёте этот прекрасный кистень из рук погибшего.',
	4000,
	'+4 к аттаке',
	ArtifactTypes.MAINHAND
);

const OgresClub = new Artifact(
	'Карающая дубина огра',
	ArtifactPics.OGRESCLUB as unknown as string,
	ArtifactRarity.MAJOR,
	'В придорожной таверне к вам начинает приставать пьяный огр. Не желая причинить ему вреда, вы связываете его и забираете его огромную дубину, чтобы он не беспокоил окружающих.',
	5000,
	'+5 к аттаке',
	ArtifactTypes.MAINHAND
);

const RedDragon = new Artifact(
	'Языки пламени красного дракона',
	ArtifactPics.REDDRAGON as unknown as string,
	ArtifactRarity.MINOR,
	'Вы пробираетесь узкой тропой. Внезапно ближайший куст загорается ярким пламенем. Постепенно в огненном смерче проступают очертания прекрасной дамы, которая протягивает вам дивно сработанный меч.',
	4000,
	'+2 к аттаке',
	ArtifactTypes.MAINHAND
);

const SwordHellfire = new Artifact(
	'Меч адского пламени',
	ArtifactPics.SWORDHELLFIRE as unknown as string,
	ArtifactRarity.MAJOR,
	'Неожиданно начинается буря, молния бьёт в дерево и раскалывает его на куски. Внутри дерева вы обнаруживаете таинственный меч.',
	6000,
	'+6 к аттаке',
	ArtifactTypes.MAINHAND
);

const SowrdJudgement = new Artifact(
	'Меч правосудия',
	ArtifactPics.SWORDJUDGEMENT as unknown as string,
	ArtifactRarity.RELIC,
	'Вы оказываетесь на поле боя, на котором смертельно раненый паладин отбивается от нескольких зомби. Умирая, он отдаёт вам свой меч с просьбой закончить его дело. Когда вы берёте меч, он начинает гудеть, а ваш взор затмевает пелена. Придя в себя, вы обнаруживаете, что меч в крови, а все зомби изрублены в куски. Вы кладёте меч в ножны.',
	20000,
	'+5 к аттаке',
	ArtifactTypes.MAINHAND
);

const TitanGladius = new Artifact(
	'Гладиус титана',
	ArtifactPics.TITANGLADIUS as unknown as string,
	ArtifactRarity.RELIC,
	'На дороге вы встречаете Титана, и сразу видно, что он не в духе. Когда вы приближаетесь, Титан требует у вас пять тысяч золотых, грозя страшной смертью. Вы отказываетесь. Титан выхватывает из ножен огромный меч, однако вы успеваете проскочить у него между ног. Сбитый с толку вашей хитростью, он спотыкается и падает... прямо на свой меч.',
	10000,
	'+12 к аттаке, но -3 к защите',
	ArtifactTypes.MAINHAND
);

export const MainHandArtifacts = [
	Blackshard,
	CentaurAxe,
	GnollsFlail,
	OgresClub,
	RedDragon,
	SwordHellfire,
	SowrdJudgement,
	TitanGladius,
];
