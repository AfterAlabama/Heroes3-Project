import { ArtifactPics } from '../../../types/Enums/ArtifactPics';
import { ArtifactRarity } from '../../../types/Enums/ArtifactRarity';
import { ArtifactTypes } from '../../../types/Enums/ArtifactTypes';
import { Artifact } from '../Artifact';

const BucklerGnollKing = new Artifact(
	'Щит короля гноллов',
	ArtifactPics.BUCKLERGNOLLKING as unknown as string,
	ArtifactRarity.MINOR,
	'Каменная статуя изображает воина, держащего щит. Когда вы берёте щит, статуя разваливается на куски.',
	4000,
	'+4 к защите',
	ArtifactTypes.OFFHAND
);

const DragonScaleShield = new Artifact(
	'Щит из чешуи дракона',
	ArtifactPics.DRAGONSCALESHIELD as unknown as string,
	ArtifactRarity.MAJOR,
	'Вы встречаете старого оружейника, который утверждает, что должен вам за что-то отплатить. Вы соглашаетесь, и он, соединив вместе несколько чешуек дракона, отдаёт вам отличный щит.',
	6000,
	'+3 к защите и атаке',
	ArtifactTypes.OFFHAND
);

const LionCourageShield = new Artifact(
	'Щит львиной храбрости',
	ArtifactPics.LIONCOURAGESHIELD as unknown as string,
	ArtifactRarity.RELIC,
	'Вы становитесь свидетелем схватки паладина и некроманта. Последний почти одолел паладина, но вы вмешались и поразили служителя зла. В знак благодарности паладин дарует вам щит, спасший его.',
	16000,
	'+4 ко всем характеристикам',
	ArtifactTypes.OFFHAND
);

const SentinelShield = new Artifact(
	'Щит часового',
	ArtifactPics.SENTINELSHIELD as unknown as string,
	ArtifactRarity.RELIC,
	'Вы находите большой ящик, который кажется сделанным из какого-то странного металла. Когда вы коснулись его, ящик открылся. Внутри вы находите блестящий щит.',
	10000,
	'+12 к защите, но -3 к атаке',
	ArtifactTypes.OFFHAND
);

const DamnedShield = new Artifact(
	'Щит проклятых',
	ArtifactPics.DAMNEDSHIELD as unknown as string,
	ArtifactRarity.MAJOR,
	'Поднявшись на небольшой холм, вы видите забавную картину. Маленькая фея волочит щит едва ли не с себя величиной. Давясь от хохота, вы спрашиваете: «Вам помочь?». Фея мрачно смотрит на вас и отвечает: «Думаешь, это очень смешно? Вот ты теперь его и тащи».',
	6000,
	'+6 к защите',
	ArtifactTypes.OFFHAND
);

const DwarvenLordsShield = new Artifact(
	'Щит короля гномов',
	ArtifactPics.SHIELDDWARVENLORD as unknown as string,
	ArtifactRarity.TREASURE,
	'Во время исследования одной из горных шахт вы находите и освобождаете группу гномов, попавших в ловушку. В знак благодарности предводитель гномов дарит вам отлично сработанный щит.',
	2000,
	'+2 к защите',
	ArtifactTypes.OFFHAND
);

const YawningDeadShield = new Artifact(
	'Щит тоскующих мертвецов',
	ArtifactPics.SHIELDYAWNINGDEAD as unknown as string,
	ArtifactRarity.MINOR,
	'Ваши солдаты находят мрачное святилище, посвящённое культу Смерти. Вы читаете молитву, из-за чего изображение щита над алтарём трескается. За осыпавшимся барельефом вы находите настоящий щит, который решаете забрать из этого недоброго места.',
	3000,
	'+3 к защите',
	ArtifactTypes.OFFHAND
);

const TargRampagingOgre = new Artifact(
	'Щит яростного огра',
	ArtifactPics.TARGRAMPAGINGOGRE as unknown as string,
	ArtifactRarity.MAJOR,
	'Вы переходите по мосту глубокий овраг. Неожиданно, на другой стороне моста появляется огромный, взбешённый огр, которого вам приходится убить. В качестве трофея вы берёте его щит.',
	5000,
	'+5 к защите',
	ArtifactTypes.OFFHAND
);

export const LeftHandArtifacts = [
	BucklerGnollKing,
	DragonScaleShield,
	LionCourageShield,
	SentinelShield,
	DamnedShield,
	DwarvenLordsShield,
	YawningDeadShield,
	TargRampagingOgre,
];
