import { ArtifactPics } from '../../types/Enums/ArtifactPics';
import { ArtifactRarity } from '../../types/Enums/ArtifactRarity';
import { Artifact } from '../Artifact';

const AngelFeatherArrows = new Artifact(
	'Стрелы из ангельских перьев',
	ArtifactPics.ANGELFEATHERARROWS as unknown as string,
	ArtifactRarity.MAJOR,
	'Не мучаясь угрызениями совести по поводу судьбы ангела, чьи перья использованы для изготовления этих стрел, вы берёте их с собой и быстро покидаете это место.',
	6000,
	'Увеличивает эффективность навыка Стрельба на 15%'
);

const LegionArms = new Artifact(
	'Руки Легионера',
	ArtifactPics.LEGIONARMS as unknown as string,
	ArtifactRarity.MAJOR,
	'Обыскивая развалины, вы с удивлением обнаруживаете часть Статуи Легиона. Вы аккуратно смахиваете с неё пыль перед тем, как положить её в ваш мешок.',
	5000,
	'Увеличивает прирост юнитов 5-го уровня на 2 в неделю (при этом герой должен находиться в городе в последний день недели)'
);

const CourageBadge = new Artifact(
	'Медаль мужества',
	ArtifactPics.COURAGEBADGE as unknown as string,
	ArtifactRarity.TREASURE,
	'Вы спасаете маленького мальчика от стаи злобных волков и возвращаете его в поместье родителей. Благодарный отец награждает вас медалью — За Отвагу.',
	1000,
	'+1 к боевому духу'
);

const PerceptionBird = new Artifact(
	'Птица проницательности',
	ArtifactPics.PERCEPTIONBIRD as unknown as string,
	ArtifactRarity.TREASURE,
	'Старая ведьма, которая по всей видимости ожидала вашего появления, отдаёт вам маленькую статуэтку и уходит, не сказав ни слова.',
	1000,
	'Увеличивает эффективность навыка Зоркость на 5%'
);

const ElvenCherryWoodBow = new Artifact(
	'Лук из вишнёвого дерева эльфов',
	ArtifactPics.ELVENCHERRYWOODBOW as unknown as string,
	ArtifactRarity.TREASURE,
	'Случайная встреча с известным лучником заканчивается состязанием по борьбе на пальцах. На кон ставятся ваша лошадь и его лук. Вы побеждаете.',
	2000,
	'Увеличивает эффективность навыка Стрельба на 5%'
);

const UnicornsManeBowString = new Artifact(
	'Тетива из гривы единорога',
	ArtifactPics.UNICORNSMANEBOWSTRING as unknown as string,
	ArtifactRarity.MINOR,
	'Вы находите единорога, попавшего в западню. Пытаясь успокоить испуганное животное, вы освобождаете его, и оно мгновенно скрывается из виду. Вы замечаете, что на месте Единорога осталась отличная тетива для лука.',
	4000,
	'Увеличивает эффективность навыка Стрельба на 10%'
);

const ProphecyCards = new Artifact(
	'Карты пророчества',
	ArtifactPics.PROPHECYCARDS as unknown as string,
	ArtifactRarity.TREASURE,
	'Вы встречаете путешественника, который предлагает вам выбрать любую из странных карт, колоду которых он несёт с собой. Когда вы отказываетесь, он сам вытаскивает карту. Он смотрит на карту, затем с удивлением на вас и, бросив карты, исчезает. Вы собираете их.',
	1000,
	'+1 к удаче'
);

const ManaCharm = new Artifact(
	'Амулет маны',
	ArtifactPics.MANACHARM as unknown as string,
	ArtifactRarity.TREASURE,
	'Вы встречаете караван цыган, которые устроили пир. Подогретые спиртным, они подзывают вас и говорят: "Если ты сможешь станцевать Рама-Буту, то мы наградим тебя". Этот танец вам неизвестен, но вы всё равно пытаетесь что-то изобразить. Все падают со смеха, но за смелость вы получаете странный амулет.',
	500,
	'Дополнительно восстанавливает 1 очко магии в день'
);

const FortuneClover = new Artifact(
	'Клевер удачи',
	ArtifactPics.FORTUNECLOVER as unknown as string,
	ArtifactRarity.TREASURE,
	'Проходя по высохшему полю, вы с удивлением обнаруживаете четырёхлистный клевер, которого совсем не затронула засуха.',
	1000,
	'+1 к удаче'
);

const ValorCrest = new Artifact(
	'Знак отваги',
	ArtifactPics.VALORCREST as unknown as string,
	ArtifactRarity.TREASURE,
	'За освобождение окрестностей от злостного минотавра, который развлекался, пожирая рыцарей, вас награждают Знаком Отваги.',
	1000,
	'+1 к боевому духу'
);

const CognizanceEmblem = new Artifact(
	'Символ знания',
	ArtifactPics.COGNIZANCEEMBLEM as unknown as string,
	ArtifactRarity.MINOR,
	'Старая ведьма, которая по всей видимости ожидала вашего появления, отдаёт вам маленький талисман и уходит, не сказав ни слова.',
	3000,
	'Увеличивает эффективность навыка Зоркость на 15%'
);

const EndlessGoldBag = new Artifact(
	'Неиссякаемая сума золота',
	ArtifactPics.ENDLESSGOOLDBAG as unknown as string,
	ArtifactRarity.MAJOR,
	'Женщина из знатного рода, отставшая от своих спутников, просит вас помочь ей добраться до дома. В конце вашего путешествия она вручает вам мешок с золотом.',
	7500,
	'Ежедневно приносит в казну королевства 750 золотых'
);

const EndlessGoldPurse = new Artifact(
	'Неиссякаемая мошна золота',
	ArtifactPics.ENDLESSGOLDPURSE as unknown as string,
	ArtifactRarity.MAJOR,
	'Вы обнаруживаете лепрекона, радостно танцующего вокруг волшебного мешка. Увидев вас, ему ничего не остаётся кроме бегства. Вы забираете мешок.',
	5000,
	'Ежедневно приносит в казну королевства 500 золотых'
);

const EndlessGoldsack = new Artifact(
	'Неиссякаемый мешок золота',
	ArtifactPics.ENDLESSGOLDSACK as unknown as string,
	ArtifactRarity.RELIC,
	'Вы находите кожаный кошель, набитый золотом. Позже вы узнаёте, что он принадлежал великому королю-воителю, который мог превратить любой предмет в золото.',
	10000,
	'Ежедневно приносит в казну королевства 1000 золотых'
);

const EverpouringMercuryVial = new Artifact(
	'Неиссякаемая склянка ртути',
	ArtifactPics.EVERPOURINGMERCURYVIAL as unknown as string,
	ArtifactRarity.MAJOR,
	'При кратком осмотре башни волшебника, которую почему-то оставили без присмотра, вы находите колбу со ртутью, в которой всегда остаётся немного жидкости на дне. Понимая всю ценность этой вещи, вы забираете её с собой.',
	5000,
	'Ежедневно приносит в казну королевства 1 ед. ртути'
);

const GallantryGlyph = new Artifact(
	'Глиф доблести',
	ArtifactPics.GALLANTRYGLYPH as unknown as string,
	ArtifactRarity.TREASURE,
	'Вы спасаете принцессу близлежащего королевства от работорговцев, за что она награждает вас Гербом Доблести.',
	1000,
	'+1 к боевому духу'
);

const GoldenBow = new Artifact(
	'Золотой лук',
	ArtifactPics.GOLDENBOW as unknown as string,
	ArtifactRarity.MAJOR,
	'Случайная встреча с известным лучником заканчивается состязанием по борьбе на пальцах. На кон ставятся ваша лошадь и его лук. Вы победили.',
	8000,
	'Позволяет стрелковым отрядам героя вести огонь по цели без штрафов, расстояние и различные препятствия игнорируются'
);

const LegionHead = new Artifact(
	'Голова Легионера',
	ArtifactPics.LEGIONHEAD as unknown as string,
	ArtifactRarity.MAJOR,
	'Обыскивая развалины, вы с удивлением обнаруживаете часть Статуи Легиона. Вы аккуратно смахиваете с неё пыль перед тем, как положить её в ваш мешок.',
	5000,
	'Увеличивает прирост юнитов 6-го уровня на 1 в неделю (при этом герой должен находиться в городе в последний день недели)'
);

const EvilHourHourglass = new Artifact(
	'Песочные часы недоброго часа',
	ArtifactPics.EVILHOURHOURGLASS as unknown as string,
	ArtifactRarity.TREASURE,
	'За очередным поворотом дороги вы натыкаетесь на страшную картину — поле боя с останками воинов, пожираемых хищниками. Вы осматриваете вещи погибших и находите песочные часы.',
	2000,
	'Отнимает у героя и его противника на поле боя все бонусы удачи'
);

const InexhaustibleLumberCart = new Artifact(
	'Неиссякаемая подвода древесины',
	ArtifactPics.INEXHAUSTIBLELUMBERCART as unknown as string,
	ArtifactRarity.MINOR,
	'Вы остановились на привал и разожгли костёр. Подкладывая дрова из оказавшейся поблизости подводы, вы обнаруживаете, что они появляются там вновь и вновь. Вы забираете с собой эту полезную магическую вещь.',
	5000,
	'Ежедневно приносит в казну королевства 1 ед. древесины'
);

const InexhaustibleOreCart = new Artifact(
	'Неистощимая подвода с рудой',
	ArtifactPics.INEXHAUSTIBLEORECART as unknown as string,
	ArtifactRarity.MINOR,
	'Вы находите гоблинскую кузницу, в которой делают оружие для войны с людьми. Вы нападаете на их лагерь и завладеваете волшебной тачкой, в которой никогда не кончается руда.',
	5000,
	'Ежедневно приносит в казну королевства 1 ед. руды'
);

const LuckLadybird = new Artifact(
	'Голубка удачи',
	ArtifactPics.LUCKLADYBIRD as unknown as string,
	ArtifactRarity.TREASURE,
	'Старая ведьма, которая по всей видимости ожидала вашего появления, отдаёт вам маленькую статуэтку и уходит, не сказав ни слова.',
	1000,
	'+1 к удаче'
);

const LegionLegs = new Artifact(
	'Ноги Легионера',
	ArtifactPics.LEGIONLEGS as unknown as string,
	ArtifactRarity.TREASURE,
	'Обыскивая развалины, вы с удивлением обнаруживаете часть Статуи Легиона. Вы аккуратно смахиваете с неё пыль перед тем, как положить её в ваш мешок.',
	5000,
	'Увеличивает прирост юнитов 2-го уровня на 5 в неделю (при этом герой должен находиться в городе в последний день недели)'
);

const LegionLoins = new Artifact(
	'Поясница Легионера',
	ArtifactPics.LEGIONLOINS as unknown as string,
	ArtifactRarity.MINOR,
	'Обыскивая развалины, вы с удивлением обнаруживаете часть Статуи Легиона. Вы аккуратно смахиваете с неё пыль перед тем, как положить её в ваш мешок.',
	5000,
	'Увеличивает прирост юнитов 3-го уровня на 4 в неделю (при этом герой должен находиться в городе в последний день недели)'
);

const MysticManaOrb = new Artifact(
	'Волшебная сфера маны',
	ArtifactPics.MYSTICMANAORB as unknown as string,
	ArtifactRarity.TREASURE,
	'Вы встречаете караван цыган, которые устроили пир. Подогретые спиртным, они подзывают вас и говорят: "Если ты сможешь станцевать Рама-Буту, то мы наградим тебя". Этот танец вам неизвестен, но вы всё равно пытаетесь что-то изобразить. Все падают со смеха, но за смелость вы получаете странную сферу.',
	1500,
	'Дополнительно восстанавливает 3 очка магии в день'
);

const DrivingRainOrb = new Artifact(
	'Сфера проливного дождя',
	ArtifactPics.DRIVINGORBMAIN as unknown as string,
	ArtifactRarity.MAJOR,
	'Вы встречаете фокусника, который умоляет вас взять его с собой, чтобы быть в безопасности. Вы соглашаетесь, и он отдаёт вам в качестве оплаты таинственную Сферу Элементов.',
	6000,
	'Увеличивает разрушительную силу заклинаний Магии Воды на 50%'
);

const InhibitionOrb = new Artifact(
	'Сфера запрещения',
	ArtifactPics.INHIBITIONORB as unknown as string,
	ArtifactRarity.RELIC,
	'Вы помогаете крестьянину поймать убежавшую лошадь. В знак благодарности он дарит вам маленький шар. Как только вы дотрагиваетесь до него, вы ощущаете, что ваши магические силы покидают вас…',
	20000,
	'Полностью запрещает использование заклинаний на поле боя как самому герою, так и его противнику'
);

const SiltOrb = new Artifact(
	'Сфера илистого озера',
	ArtifactPics.STILTORB as unknown as string,
	ArtifactRarity.MAJOR,
	'Вы встречаете фокусника, который умоляет вас взять его с собой, чтобы быть в безопасности. Вы соглашаетесь, и он отдаёт вам в качестве оплаты таинственную Сферу Элементов.',
	6000,
	'Увеличивает разрушительную силу заклинаний Магии Земли на 50%'
);

const TempestuousFireOrb = new Artifact(
	'Сфера бушующего огня',
	ArtifactPics.TEMPESTUOUSFIREORB as unknown as string,
	ArtifactRarity.MAJOR,
	'Вы встречаете фокусника, который умоляет вас взять его с собой, чтобы быть в безопасности. Вы соглашаетесь, и он отдаёт вам в качестве оплаты таинственную Сферу Элементов.',
	6000,
	'Увеличивает разрушительную силу заклинаний Магии Огня на 50%'
);

const FirmamentOrb = new Artifact(
	'Сфера небесного свода',
	ArtifactPics.FIRMAMENTORB as unknown as string,
	ArtifactRarity.MAJOR,
	'Вы встречаете фокусника, который умоляет вас взять его с собой, чтобы быть в безопасности. Вы соглашаетесь, и он отдаёт вам в качестве оплаты таинственную Сферу Элементов.',
	6000,
	'Увеличивает разрушительную силу заклинаний Магии Воздуха на 50%'
);

const VulnerabilityOrb = new Artifact(
	'Сфера уязвимости',
	ArtifactPics.VULNERABILITYORB as unknown as string,
	ArtifactRarity.RELIC,
	'Вы встречаете своего старого друга — волшебника. Он дарит вам подарок: шар, позволяющий воздействовать на создания, которые обычно невосприимчивы к магии.',
	25000,
	'Нейтрализует естественное сопротивление магии всех юнитов на поле боя'
);

const WarShackles = new Artifact(
	'Оковы войны',
	ArtifactPics.WARSHACKLES as unknown as string,
	ArtifactRarity.MAJOR,
	'Во время исследования руин древнего города с крепостными стенами вы находите оружие, уничтожившее его — Оковы Войны.',
	5000,
	'Не позволяет героям — как подконтрольному, так и вражескому — сбежать с поля боя'
);

const Speculum = new Artifact(
	'Телескоп',
	ArtifactPics.SPECULUM as unknown as string,
	ArtifactRarity.TREASURE,
	'Торговец из далёких стран продаёт вам новое изобретение своего народа, помогающее при путешествиях. Оно позволяет зрительно приближать удалённые объекты. Он называет его... Телескоп.',
	1000,
	'Увеличивает радиус обзора героя на 1 клетку карты'
);

const PermanenceSphere = new Artifact(
	'Сфера постоянства',
	ArtifactPics.PERMANENCESPHERE as unknown as string,
	ArtifactRarity.MAJOR,
	'Вы встречаете своего старого друга — волшебника. Он дарит вам подарок: шар, позволяющий защитить ваших людей от воздействия заклинания "Снятие заклинаний".',
	7500,
	'Наделяет отряды армии героя невосприимчивостью к Снятию заклинаний'
);

const OppressionSpirit = new Artifact(
	'Дух уныния',
	ArtifactPics.OPPRESSIONSPIRIT as unknown as string,
	ArtifactRarity.TREASURE,
	'Во время исследования руин древнего города с крепостными стенами вы находите оружие, уничтожившее его — Дух Уныния.',
	2000,
	'Отнимает у героя и его противника на поле боя все бонусы боевого духа.'
);

const Spyglass = new Artifact(
	'Подзорная труба',
	ArtifactPics.SPYGLASS as unknown as string,
	ArtifactRarity.TREASURE,
	'Старик-изобретатель предлагает вам опробовать его последнюю разработку. Он называет его... Подзорная Труба.',
	1000,
	'Увеличивает радиус обзора героя на 1 клетку карты'
);

const StoicWatchman = new Artifact(
	'Стойкий часовой',
	ArtifactPics.STOICWATCHMAN as unknown as string,
	ArtifactRarity.TREASURE,
	'Старая ведьма, которая по всей видимости ожидала вашего появления, отдаёт вам маленькую статуэтку и уходит, не сказав ни слова.',
	2000,
	'Увеличивает эффективность навыка Зоркость на 10%'
);

const ManaTalisman = new Artifact(
	'Талисман маны',
	ArtifactPics.MANATALISMAN as unknown as string,
	ArtifactRarity.TREASURE,
	'Вы встречаете караван цыган, которые устроили пир. Подогретые спиртным, они подзывают вас и говорят: "Если ты сможешь станцевать Рама-Буту, то мы наградим тебя". Этот танец вам неизвестен, но вы всё равно пытаетесь что-то изобразить. Все падают со смеха, но за смелость вы получаете странный талисман.',
	1000,
	'Дополнительно восстанавливает 2 очка магии в день'
);

const AirMagicTome = new Artifact(
	'Книга магии Воздуха',
	ArtifactPics.AIRMAGICTOME as unknown as string,
	ArtifactRarity.RELIC,
	'Вы встречаете фокусника, который умоляет вас взять его с собой, чтобы быть в безопасности. Вы соглашаетесь, и он отдаёт вам в качестве оплаты копию Книги Элементов.',
	20000,
	'Добавляет все заклинания Магии Воздуха в книгу героя'
);

const EarthMagicTome = new Artifact(
	'Книга магии Земли',
	ArtifactPics.EARTHMAGICTOME as unknown as string,
	ArtifactRarity.RELIC,
	'Вы встречаете фокусника, который умоляет вас взять его с собой, чтобы быть в безопасности. Вы соглашаетесь, и он отдаёт вам в качестве оплаты копию Книги Элементов.',
	20000,
	'Добавляет все заклинания Магии Земли в книгу героя'
);

const FireMagicTome = new Artifact(
	'Книга магии Огня',
	ArtifactPics.FIREMAGICTOME as unknown as string,
	ArtifactRarity.RELIC,
	'Вы встречаете фокусника, который умоляет вас взять его с собой, чтобы быть в безопасности. Вы соглашаетесь, и он отдаёт вам в качестве оплаты копию Книги Элементов.',
	20000,
	'Добавляет все заклинания Магии Огня в книгу героя'
);

const WaterMagicTome = new Artifact(
	'Книга магии Воды',
	ArtifactPics.WATERMAGICTOME as unknown as string,
	ArtifactRarity.RELIC,
	'Вы встречаете фокусника, который умоляет вас взять его с собой, чтобы быть в безопасности. Вы соглашаетесь, и он отдаёт вам в качестве оплаты копию Книги Элементов.',
	20000,
	'Добавляет все заклинания Магии Воды в книгу героя.'
);

const LegionTorso = new Artifact(
	'Торс Легионера',
	ArtifactPics.LEGIONTORSO as unknown as string,
	ArtifactRarity.MINOR,
	'Обыскивая развалины, вы с удивлением обнаруживаете часть Статуи Легиона. Вы аккуратно смахиваете с неё пыль перед тем, как положить её в ваш мешок.',
	5000,
	'Увеличивает прирост юнитов 4-го уровня на 3 в неделю (при этом герой должен находиться в городе в последний день недели)'
);

const LifeBloodVial = new Artifact(
	'Склянка жизненной силы',
	ArtifactPics.LIFEBLOODVIAL as unknown as string,
	ArtifactRarity.MAJOR,
	'В гуще деревьев вы находите таинственную усыпальницу. В воздухе над алтарём висит чаша, в которой якобы находится кровь жизни. Вы аккуратно забираете её, стараясь не привлекать к себе дополнительного внимания.',
	10000,
	'Увеличивает показатель здоровья всех юнитов армии героя на 2 ед'
);

export const AccessoriesArtifacts = [
	AngelFeatherArrows,
	LegionArms,
	CourageBadge,
	PerceptionBird,
	ElvenCherryWoodBow,
	UnicornsManeBowString,
	ProphecyCards,
	ManaCharm,
	FortuneClover,
	ValorCrest,
	CognizanceEmblem,
	EndlessGoldBag,
	EndlessGoldPurse,
	EndlessGoldsack,
	EverpouringMercuryVial,
	GallantryGlyph,
	GoldenBow,
	LegionHead,
	EvilHourHourglass,
	InexhaustibleLumberCart,
	InexhaustibleOreCart,
	LuckLadybird,
	LegionLegs,
	LegionLoins,
	MysticManaOrb,
	DrivingRainOrb,
	InhibitionOrb,
	SiltOrb,
	TempestuousFireOrb,
	FirmamentOrb,
	VulnerabilityOrb,
	WarShackles,
	Speculum,
	PermanenceSphere,
	OppressionSpirit,
	Spyglass,
	StoicWatchman,
	ManaTalisman,
	AirMagicTome,
	EarthMagicTome,
	FireMagicTome,
	WaterMagicTome,
	LegionTorso,
	LifeBloodVial,
];
