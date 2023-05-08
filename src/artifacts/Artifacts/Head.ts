import { ArtifactPics } from "../../types/Enums/ArtifactPics";
import { ArtifactRarity } from "../../types/Enums/ArtifactRarity";
import { Artifact } from "../Artifact";

export const DragonToothCrown = new Artifact(
  'Корона из зубов дракона',
  ArtifactPics.CROWNDRAGONTOOTH as unknown as string,
  ArtifactRarity.RELIC,
  'Во время охоты вы находите корону, каким-то образом висящую в воздухе. Подойдя ближе, вы замечаете надпись: "Разум есть сила, а магия — власть. Слушай меня — я не дам тебе пасть".',
  8000,
  '+4 к знанию и силе магии'
)

export const CrownSupremeMagi = new Artifact(
  'Корона верховного мага',
  ArtifactPics.CROWNSUPREMEMAGI as unknown as string,
  ArtifactRarity.MINOR,
  'Сумасшедший волшебник, терроризировавший всю округу, сегодня решил напасть на вас. Поняв, что вся его сила исходит от короны у него на голове, вы сбиваете её стрелой из лука и тем самым снимаете с него проклятье. В благодарность он позволяет вам оставить эту корону себе.',
  5000,
  '+4 к знанию'
)

export const HellstormHelmet = new Artifact(
  'Шлем сатанинской ярости',
  ArtifactPics.HELLSTORMHELMET as unknown as string,
  ArtifactRarity.MAJOR,
  'На вашу армию напало небольшое племя диких (и не особо умных) орков. Вы легко разделываетесь с ними, и оставшиеся в живых враги разбегаются. Среди трофеев вы находите шлем с рогом и берёте его с собой в качестве сувенира.',
  6000,
  '+5 к знанию'
)

export const ChaosHelmet = new Artifact(
  'Шлем Хаоса',
  ArtifactPics.CHAOSHELMET as unknown as string,
  ArtifactRarity.MINOR,
  'На вашу армию напало небольшое племя диких (и не особо умных) орков. Вы легко разделываетесь с ними, и оставшиеся в живых враги разбегаются. Среди трофеев вы находите шлем с рогом и берёте его с собой в качестве сувенира.',
  4000,
  '+3 к знанию'
)

export const HeavenlyEnlightenmentHelmet = new Artifact(
  'Шлем небесного просветления',
  ArtifactPics.HEAVENLYENLOIGHTENMENTHELM as unknown as string,
  ArtifactRarity.RELIC,
  'Вы замечаете какой-то светящийся предмет, выступающий из земли. Вы посылаете одного из ваших солдат осмотреть это место. Вскоре он возвращается с золотым шлемом в руках. Вы догадываетесь, что это золотой Шлем Божественного Просвещения.',
  24000,
  '+6 ко всем характеристикам'
)

export const AlabasterUnicorcHelm = new Artifact(
  'Шлем белого единорога',
  ArtifactPics.HELMALABASTERUNICORN as unknown as string,
  ArtifactRarity.TREASURE,
  'Путешествующий кузнец предлагает вам шлем с рогом единорога в обмен на провизию и воду, которых у него совсем не осталось. Вы соглашаетесь и позже узнаёте, что шлем наделён магической силой.',
  1000,
  '+1 к знанию'
)

export const SeaCaptainshat = new Artifact(
  'Шляпа морского капитана',
  ArtifactPics.SEACAPTAINSHAT as unknown as string,
  ArtifactRarity.RELIC,
  'Старый моряк рассказывает вам о волшебной шляпе, которая заставляла его команду работать сверх своих обычных возможностей. Затем он даёт вам потрёпанную карту, указывающую её местоположение. После долгих поисков вы находите её под ближайшим камнем.',
  15000,
  'Увеличивает дальность передвижения по морю на 500 очков, даёт заклинания вызова и затопления корабля, сохраняет армию во время прохождения водоворотов.'
)

export const SkullHelmet = new Artifact(
  'Шлем-череп',
  ArtifactPics.SKULLHELMET as unknown as string,
  ArtifactRarity.TREASURE,
  'Во время вашей короткой остановки на постоялом дворе вы начинаете обмениваться рассказами и, случайно, вещами. Вскоре вы обнаруживаете, что среди них есть и волшебные.',
  3000,
  '+ 2 к знанию'
)

export const SpellbindersHat = new Artifact(
  'Шляпа волшебника',
  ArtifactPics.SPELLBINDERSHAT as unknown as string,
  ArtifactRarity.RELIC,
  'Мимо вас проносится волшебник, удирающий от дракона. Волшебник открывает портал между мирами и прыгает в него, теряя при этом свою шляпу. Дракон следует за ним, после чего портал исчезает. Вы подбираете шляпу, смахиваете пыль и надеваете её.',
  30000,
  'Даёт герою все заклинания 5-го уровня. Походную магию можно использовать даже без книги заклинаний'
)

export const ThunderHelmet = new Artifact(
  'Шлем небесного грома',
  ArtifactPics.THUNDERHELMET as unknown as string,
  ArtifactRarity.RELIC,
  'Ваше внимание привлекает какой-то отблеск. Вы исследуете местность и под одним из кустов находите золотой шлем.',
  10000,
  '+10 к знанию, но -2 к силе магии'
)