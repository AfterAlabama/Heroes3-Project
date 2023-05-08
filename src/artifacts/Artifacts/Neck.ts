import { ArtifactPics } from "../../types/Enums/ArtifactPics";
import { ArtifactRarity } from "../../types/Enums/ArtifactRarity";
import { Artifact } from "../Artifact";

export const UndertakerAmulet = new Artifact(
  'Амулет гробовщика',
  ArtifactPics.UNDERTAKERAMULET as unknown as string,
  ArtifactRarity.TREASURE,
  'Неподалёку от только что вырытой могилы вы находите грязный амулет. При более близком рассмотрении вы обнаруживаете, что это магический Амулет Гробовщика, который давно был утерян.',
  2000,
  'Увеличивает эффективность навыка Некромантии на 5%'
)

export const CelestialNecklaceOfBliss = new Artifact(
  'Ожерелье Божественной благодати',
  ArtifactPics.CELESTIALNECKLACEBLISS as unknown as string,
  ArtifactRarity.RELIC,
  'Вы спасаете волшебницу из заколдованной могилы, за что она награждает вас изысканным ожерельем с бриллиантами.',
  12000,
  '+3 ко всем характеристикам'
)

export const CollarOfConjuring = new Artifact(
  'Магический ошейник',
  ArtifactPics.COLLAROFCONJURING as unknown as string,
  ArtifactRarity.TREASURE,
  'Вы находите стеклянный ящик, каким-то образом висящий в воздухе. Внутри вы видите золотой воротник. При прикосновении ящик открывается, и воротник летит к вам.',
  500,
  'Увеличивает продолжительность действия заклятий героя на 1 ход'
)

export const InterferenceGarniture = new Artifact(
  'Колье неприступности',
  ArtifactPics.INTERFERENCEGARNITURE as unknown as string,
  ArtifactRarity.MAJOR,
  'Вы становитесь свидетелем схватки паладина и некроманта. Некромант произнёс заклинание огненного заряда, которое повергло паладина на колени. Действуя быстро, вы уничтожили злодея перед финальным ударом. Благодарный паладин даёт вам доспех, который спас его.',
  2000,
  'Увеличивает эффективность навыка Сопротивление на 5%'
)

export const DragonTeethNecklace = new Artifact(
  'Ожерелье из зубов дракона',
  ArtifactPics.DRAGONTEETHNECKLACE as unknown as string,
  ArtifactRarity.MAJOR,
  'Вы встречаете старого шамана, который стоит на дороге и что-то кричит вам на непонятном языке. Неожиданно он исчезает в клубе дыма. Вы подходите ближе и обнаруживаете ожерелье из клыков дракона на месте, где он стоял.',
  6000,
  '+3 к знанию и силе магии'
)

export const OceanGuidanceNecklace = new Artifact(
  'Ожерелье морского провидения',
  ArtifactPics.OCEANGUIDANCENECKLACE as unknown as string,
  ArtifactRarity.MAJOR,
  'Вы освобождаете старого капитана, которого мучили огры. Он дарит вам ожерелье, которое поможет вам в морских путешествиях.',
  10000,
  'Увеличивает дальность передвижения героя по морю на 1000 очков'
)

export const SwiftnessNecklace = new Artifact(
  'Ожерелье стремительности',
  ArtifactPics.SWIFTNESSNECKLACE as unknown as string,
  ArtifactRarity.TREASURE,
  'При встрече с местным мудрецом вы рассказываете ему о цели вашего путешествия. Он открывает свой мешок и достаёт оттуда странное ожерелье, которое затем он передаёт вам.',
  5000,
  'Увеличивает скорость всех юнитов армии героя на 1 ед'
)

export const CouragePendant = new Artifact(
  'Брелок смелости',
  ArtifactPics.COURAGEPENDANT as unknown as string,
  ArtifactRarity.MAJOR,
  'Вы слышите крики о помощи и вскоре обнаруживаете водных фей, которые ради развлечения топят человека. В ярости, вы спасаете беднягу и хватаете одну из фей. Оказавшись вне воды, фея просит вас отпустить её и отдаёт вам волшебный амулет.',
  7000,
  'Увеличивает параметры боевого духа и удачи всех отрядов армии героя на 3 ед'
)

export const DeathPendant = new Artifact(
  'Кулон смерти',
  ArtifactPics.DEATHPENDANT as unknown as string,
  ArtifactRarity.TREASURE,
  'После недолгой, но жестокой битвы с некромантом вы завладеваете его волшебным амулетом. Позже вы узнаёте, что он позволяет вам защитить ваших солдат-мертвецов от заклинаний, которые направлены на них.',
  2500,
  'Отряды армии героя невосприимчивы к заклинанию Уничтожить нечисть'
)

export const DispassionPendant = new Artifact(
  'Амулет бесстрастия',
  ArtifactPics.DISPASSIONPENDANT as unknown as string,
  ArtifactRarity.TREASURE,
  'Вы слышите звуки боя и вскоре видите сражающихся — варвара и восьмиглавую гидру. Ваше своевременное вмешательство склоняет чашу весов в пользу человека, за что он награждает вас кулоном, который помогал ему подготовиться к сражению.',
  1000,
  'Отряды армии героя невосприимчивы к заклинанию Берсерк'
)

export const FreeWillPendant = new Artifact(
  'Брелок свободной воли',
  ArtifactPics.FREEWILLPENDANT as unknown as string,
  ArtifactRarity.TREASURE,
  'Вы встречаете небольшой караван. Выиграв у одного из торговцев борьбе на пальцах, вы завладеваете его волшебным амулетом. Бывший владелец говорит вам, что он помогает противостоять гипнозу.',
  1000,
  'Отряды армии героя невосприимчивы к заклинанию Гипноз'
)

export const HolinessPendant = new Artifact(
  'Священный брелок',
  ArtifactPics.HOLINESSPENDANT as unknown as string,
  ArtifactRarity.TREASURE,
  'В своих путешествиях вы находите маленькую избушку отшельника. Поражённый вашей смелостью он благословляет вас и даёт вам амулет, защищающий от проклятий.',
  1000,
  'Отряды армии героя невосприимчивы к заклинанию Проклятие'
)

export const LifePendant = new Artifact(
  'Брелок жизни',
  ArtifactPics.LIFEPENDANT as unknown as string,
  ArtifactRarity.TREASURE,
  'Сильная буря срывает растительность со скрытого входа в гробницу. Вы обнаруживаете, что её уже разграбили, однако при этом воры не заметили спрятанную золотую цепь.',
  2500,
  'Отряды армии героя невосприимчивы к заклинанию Волна Смерти'
)

export const NegativityPendant = new Artifact(
  'Брелок отрицательности',
  ArtifactPics.NEGATIVITYPENDANT as unknown as string,
  ArtifactRarity.MAJOR,
  'Вы находите остатки небольшой избушки, которая была явно разрушена ударом молнии. При более близком осмотре вы находите амулет, который слегка дрожит в вашей руке.',
  5000,
  'Отряды армии героя невосприимчивы к заклинаниям Удар молнии и Цепная молния'
)

export const TotalRecallPendant = new Artifact(
  'Брелок абсолютной памяти',
  ArtifactPics.TOTALRECALLPENDANT as unknown as string,
  ArtifactRarity.TREASURE,
  'Неподалёку от остатков сожженной ведьмы вы находите прекрасный амулет. Вы осторожно подбираете его и кладёте в свой мешок.',
  3000,
  'Отряды армии героя невосприимчивы к заклинанию Забывчивость'
)

export const SecondSightPendant = new Artifact(
  'Брелок ясновидения',
  ArtifactPics.SECONDSIGHTPENDANT as unknown as string,
  ArtifactRarity.MAJOR,
  'Вы находите умирающей старую, слепую женщину и помогаете ей спокойно отойти в мир иной, обещая также похоронить её. В знак благодарности она отдаёт вам кулон, позволяющий видеть с закрытыми глазами.',
  5000,
  'Отряды армии героя невосприимчивы к заклинанию Слепота'
)

export const StatesmanMedal = new Artifact(
  'Медаль чиновника',
  ArtifactPics.MEDALSTATESMAN as unknown as string,
  ArtifactRarity.MAJOR,
  'Вы помогаете послу разобраться с поломкой его повозки. В знак благодарности он дарит вам медаль, обладающую магическими свойствами. При этом он говорит: "Она позволит вам доказать другим вашу точку зрения".',
  5000,
  'Уменьшает цену выкупа героя с армией при сдаче врагу'
)