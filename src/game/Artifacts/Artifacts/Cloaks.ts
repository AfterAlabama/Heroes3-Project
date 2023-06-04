import { ArtifactPics } from '../../../types/Enums/ArtifactPics';
import { ArtifactRarity } from '../../../types/Enums/ArtifactRarity';
import { ArtifactTypes } from '../../../types/Enums/ArtifactTypes';
import { Artifact } from '../Artifact';

const AmbassadorSash = new Artifact(
	'Лента посла',
	ArtifactPics.AMBASSADORSASH as unknown as string,
	ArtifactRarity.MAJOR,
	'Вы помогаете послу разобраться с поломкой его повозки. В знак благодарности он дарит вам ленту, обладающую магическими свойствами. При этом он говорит: "Она позволит вам доказать другим вашу точку зрения".',
	5000,
	'Уменьшает цену выкупа героя с армией при сдаче врагу',
	ArtifactTypes.CLOAKS
);

const AngelWings = new Artifact(
	'Крылья ангела',
	ArtifactPics.ANGELWINGS as unknown as string,
	ArtifactRarity.RELIC,
	'Не мучаясь угрызениями совести по поводу судьбы ангела, крылья которого вы нашли, вы берёте их с собой и быстро покидаете это место.',
	20000,
	'Позволяет герою со всей армией преодолевать любые преграды',
	ArtifactTypes.CLOAKS
);

const ConjuringCape = new Artifact(
	'Магическая накидка',
	ArtifactPics.CAPECONJURING as unknown as string,
	ArtifactRarity.TREASURE,
	'Вы находите стеклянный ящик, каким-то образом висящий в воздухе. Внутри вы видите аккуратно сложенный плащ. При прикосновении ящик открывается, и плащ летит к вам.',
	1500,
	'Увеличивает продолжительность действия заклятий героя на 3 хода',
	ArtifactTypes.CLOAKS
);

const VelocityCape = new Artifact(
	'Накидка скорости',
	ArtifactPics.CAPEVELOCITY as unknown as string,
	ArtifactRarity.MAJOR,
	'Во время вашей короткой остановки на постоялом дворе вы начинаете обмениваться рассказами и, случайно, вещами. Вскоре вы обнаруживаете, что в вашем новом мешке находится волшебный плащ.',
	10000,
	'Увеличивает скорость всех юнитов армии героя на 2 ед',
	ArtifactTypes.CLOAKS
);

const DragonWingTabard = new Artifact(
	'Плащ из крыльев дракона',
	ArtifactPics.DRAGONWINGTABARD as unknown as string,
	ArtifactRarity.MINOR,
	'За освобождение окрестностей от злобного дракона, который развлекался пожирая рыцарей, вас награждают плащом из крыльев дракона.',
	4000,
	'+2 к силе магии и знанию',
	ArtifactTypes.CLOAKS
);

const EverflowingCrystallCloak = new Artifact(
	'Плащ бесконечных кристаллов',
	ArtifactPics.EVERFLOWINGCRYSTALLCLOAK as unknown as string,
	ArtifactRarity.MAJOR,
	'Укрываясь от дождя в одной из пещер, вы находите россыпь кристаллов. При более близком рассмотрении вы обнаруживаете, что это плащ, покрытый кристаллами, которые вновь и вновь появляются на нём, если их оторвать от плаща. Вы берёте его с собой.',
	5000,
	'Ежедневно приносит в казну королевства один кристалл',
	ArtifactTypes.CLOAKS
);

const RecantersCloak = new Artifact(
	'Плащ отречения',
	ArtifactPics.RECANTERSCLOAK as unknown as string,
	ArtifactRarity.MAJOR,
	'Вы слышите крики о помощи и вскоре видите, как молодая женщина убегает от медведя. Вы мгновенно убиваете зверюгу, и благодарная волшебница создаёт магический плащ из его шкуры.',
	8000,
	'Запрещает как своему, так и вражескому героям на поле боя использовать заклинания 3-го уровня и выше',
	ArtifactTypes.CLOAKS
);

const CounterpoiseSurcoat = new Artifact(
	'Туника равновесия',
	ArtifactPics.SURCOATCOUNTERPOISE as unknown as string,
	ArtifactRarity.MAJOR,
	'Вы становитесь свидетелем схватки паладина и некроманта. Некромант произнёс заклинание огненного заряда, которое повергло паладина на колени. Действуя быстро, вы уничтожили злодея перед финальным ударом. Благодарный паладин даёт вам плащ, который спас его.',
	4000,
	'Увеличивает эффективность навыка Сопротивление на 10%',
	ArtifactTypes.CLOAKS
);

const VampiresCowl = new Artifact(
	'Мантия вампира',
	ArtifactPics.VAMPIRESCOWL as unknown as string,
	ArtifactRarity.MINOR,
	'Вы обнаружили дневное убежище вампира и с лёгкостью разделались с ним. Чтобы не быть голословным в своих рассказах, вы берёте его сутану.',
	4000,
	'Увеличивает эффективность навыка Некромантии на 10%',
	ArtifactTypes.CLOAKS
);

export const CloakArtifacts = [
	AmbassadorSash,
	AngelWings,
	ConjuringCape,
	VelocityCape,
	DragonWingTabard,
	EverflowingCrystallCloak,
	RecantersCloak,
	CounterpoiseSurcoat,
	VampiresCowl,
];
