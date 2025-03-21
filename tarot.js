class card {
  constructor(name, description, image) {
    this.name = name;
    this.description = description;
    this.image = image;
  }
}

let deck = [
  new card(
    "Туз Кубков",
    "Туз Кубков обозначает новые начинания, обычно в отношении любви, эмпатии, сострадания и счастья. Вы будете чувствовать себя счастливыми, позитивными и довольными собой. Сейчас отличное время для начала новых дружеских отношений и для того, чтобы выйти в свет и социализироваться.",
    "__ace-cups"
  ),
  new card(
    "Двойка Кубков",
    "Карта Двойка Кубков указывает на то, что все должно идти хорошо, и жизнь должна быть очень гармоничной. Это очень положительная карта. Хотя она обычно связана с единством и любовью в романтических отношениях, она также может символизировать гармонию и взаимное уважение и признательность в дружбе и партнерстве.",
    "__2cups"
  ),
  new card(
    "Тройка Кубков",
    "Тройка Кубков представляет празднования с друзьями и семьей, она также может указывать на свадьбы и крещения. Она часто подразумевает причины для празднования с другими людьми.",
    "__3cups"
  ),
  new card(
    "Четверка Кубков",
    "Четверка Кубков может олицетворять чувство скуки или неудовлетворенности, будьте внимательны, чтобы не упустить новые возможности или события, которые вы потом будете жалеть!",
    "__4cups"
  ),
  new card(
    "Пятерка Кубков",
    "Когда выпадает Пятерка Кубков, вы можете испытывать чувство разочарования, люди подводят вас или вы чувствуете предательство — ваш ум в данный момент затуманен.",
    "__5cups"
  ),
  new card(
    "Шестерка Кубков",
    "Шестерка Кубков указывает на что-то или кого-то из прошлого, старого друга или возрождение старых любовных отношений. Что бы это ни было, это принесет вам большое счастье и удовлетворение.",
    "__6cups"
  ),
  new card(
    "Семерка Кубков",
    "Эта карта представляет ситуацию, где вы чувствуете, что у вас много возможных выборов, вы можете почувствовать себя перегруженным и найти трудным принятие решения. Ваша фантазия уносит вас — выбирайте реально.",
    "__7cups"
  ),
  new card(
    "Восьмерка Кубков",
    "Слову 'покинутость' ассоциируется эта карта, она может символизировать отказ от чего-то через разочарование. Это держало вас назад долгое время и было сложно уйти. Наконец, вы на новом пути.",
    "__8cups"
  ),
  new card(
    "Девятка Кубков",
    "Известная как карта желаний, Девятка Кубков символизирует достижение, эмоциональное и материальное удовлетворение, изобилие и чувственные удовольствия! Вы будете чувствовать себя довольными.",
    "__9cups"
  ),
  new card(
    "Десятка Кубков",
    "Когда Десятка Кубков появляется, она представляет счастье в семейной жизни, обещание длительного успеха в отношениях — часто появляется, когда брак на подходе!",
    "__10cups"
  ),
  new card(
    "Туз Пентаклей",
    "Эта карта символизирует процветание и материальные приобретения, начало успешных предприятий — превосходное время для запуска нового бизнеса.",
    "__ace-pentacles"
  ),
  new card(
    "Двойка Пентаклей",
    "Двойка Пентаклей указывает на необходимость усилий для поддержания баланса в жизни, нужно заботиться о том, чтобы все текло гармонично.",
    "__2pentacles"
  ),
  new card(
    "Тройка Пентаклей",
    "Благодаря вашим усилиям начинает проявляться успех. Вы должны чувствовать себя достигшими определенного результата. Что бы это ни было, эта карта показывает первые этапы завершения.",
    "__3pentacles"
  ),
  new card(
    "Четверка Пентаклей",
    "Это указывает на сосредоточенность на целях и финансовых вопросах в это время и готовность работать усердно для их достижения.",
    "__4pentacles"
  ),
  new card(
    "Пятерка Пентаклей",
    "Внимательно следите за своими финансовыми делами — это не время отправляться в магазины. Указываются временные трудности.",
    "__5pentacles"
  ),
  new card(
    "Шестерка Пентаклей",
    "Шестерка Пентаклей показывает успешные материальные приобретения и возможность делиться с другими. Как только работа сделана, обязательно наслаждайтесь результатами.",
    "__6pentacles"
  ),
  new card(
    "Семерка Пентаклей",
    "Тяжелый труд и терпение будут вознаграждены, методически работая к своей цели, вы добьетесь успеха.",
    "__7pentacles"
  ),
  new card(
    "Восьмерка Пентаклей",
    "Восьмерка Пентаклей может символизировать обучение новому навыку или профессии. Возможно, предложение новой работы или новой должности.",
    "__8pentacles"
  ),
  new card(
    "Девятка Пентаклей",
    "Финансы должны улучшиться, чтобы позволить комфорт в вашей жизни, если вы усердно работали над своими целями, эта карта приносит награду за ваши усилия.",
    "__9pentacles"
  ),
  new card(
    "Десятка Пентаклей",
    "Стабильность дома и семьи часто указывается с этой картой, она показывает удовлетворение чувством устойчивости и материальной безопасности.",
    "__10pentacles"
  ),
  new card(
    "Туз Мечей",
    "Туз Мечей символизирует победу и триумф. С большой силой приходит большая мощь, у вас есть способность преодолеть все.",
    "__ace-swords"
  ),
  new card(
    "Двойка Мечей",
    "Эта карта символизирует тупиковую ситуацию, возможно, вам нужно принять решение, но вы не можете двигаться в ту или иную сторону из-за чувства замешательства. Попробуйте новый подход.",
    "__2swords"
  ),
  new card(
    "Тройка Мечей",
    "Бурные эмоции могут привести к спорам, если это эскалирует, это может привести к расставанию — но есть надежда на будущее.",
    "__3swords"
  ),
  new card(
    "Четверка Мечей",
    "Необходим отдых и восстановление после периода напряжения, стресса или борьбы. Требуется обновление. Возьмите немного времени, чтобы восполнить силы.",
    "__4swords"
  ),
  new card(
    "Пятерка Мечей",
    "Пятерка Мечей указывает на то, что кто-то может не быть честным с вами, у него может быть скрытый повестка дня. Что-то может быть потеряно несправедливым образом.",
    "__5swords"
  ),
  new card(
    "Шестерка Мечей",
    "Вы будете выходить из бурных вод. Если вы проходили через трудные времена, эта карта гарантирует, что дела улучшатся.",
    "__6swords"
  ),
  new card(
    "Семерка Мечей",
    "Ситуации могут не сложиться так, как вы планировали, указана кража, поэтому будьте внимательны и принимайте меры предосторожности. Что-то может быть взято из жадности.",
    "__7swords"
  ),
  new card(
    "Восьмерка Мечей",
    "Эта карта показывает, что вы можете чувствовать себя ограниченными, может быть страх, который препятствует вашему продвижению вперед.",
    "__8swords"
  ),
  new card(
    "Девятка Мечей",
    "Могут быть испытаны чувства страдания, разочарования и отчаяния — ваш страх может ослеплять вас, делая происходящее хуже, чем оно есть.",
    "__9swords"
  ),
  new card(
    "Десятка Мечей",
    "Может быть чувство потери из-за окончания трудной ситуации. Однако вместе с этим вы освобождаетесь и готовы к новому началу.",
    "__10swords"
  ),
  new card(
    "Туз Жезлов",
    "Эта карта символизирует семена идеи, которая вас очень воодушевляет! Новая работа или бизнес-проект или даже полностью новая форма жизни.",
    "__ace-wands"
  ),
  new card(
    "Двойка Жезлов",
    "Эта карта показывает движение в направлении ваших целей и амбиций. Как и со всеми новыми предприятиями, вам нужно сфокусироваться и приложить усилия.",
    "__2wands"
  ),
  new card(
    "Тройка Жезлов",
    "Ваши первоначальные цели были достигнуты, и хотя эти успехи были успешными, впереди еще много работы. Все движется в правильном направлении.",
    "__3wands"
  ),
  new card(
    "Четверка Жезлов",
    "После всех ваших тяжелых трудов вы чувствуете себя удовлетворенными и достигшими того, что сделали. Отмечаются каникулы, время отдыха и расслабления с семьей и друзьями.",
    "__4wands"
  ),
  new card(
    "Пятерка Жезлов",
    "Могут быть разногласия во мнениях и мелкие препирательства. Если это возникает вокруг вас, постарайтесь не вмешиваться — все пройдет.",
    "__5wands"
  ),
  new card(
    "Шестерка Жезлов",
    "Шестерка Жезлов символизирует то, что ваши усилия и достижения будут признаны другими. Может быть повышение в вашем направлении. Эта карта является вестником хороших новостей.",
    "__6wands"
  ),
  new card(
    "Семерка Жезлов",
    "Ваши идеи или убеждения могут быть поставлены под сомнение, вы можете почувствовать необходимость защищать себя — Оставайтесь спокойными, имейте уверенность и смелость постоять за себя.",
    "__7wands"
  ),
  new card(
    "Восьмерка Жезлов",
    "Эта карта радостная, если вы испытали задержки или неудачи. Будет внезапный всплеск возбуждения — это также может представлять путешествие.",
    "__8wands"
  ),
  new card(
    "Девятка Жезлов",
    "Вы можете почувствовать, что вся ваша энергия истощилась, вы можете почувствовать, что находитесь на грани отказа, но эта карта напоминает вам, что успех ближе, чем вы думаете, и у вас есть сила достичь его.",
    "__9wands"
  ),
  new card(
    "Десятка Жезлов",
    "Вы можете чувствовать себя перегруженными обязанностями или под давлением. Это может указывать на переработку и, следовательно, напоминание о необходимости баланса в жизни.",
    "__10wands"
  ),
  new card(
    "Колесница",
    "Карта триумфа, хотя не без усилий. Требуется самодисциплина, но если вы овладеете этим, победа будет достигнута.",
    "__chariot"
  ),
  new card(
    "Смерть",
    "Конец одного этапа жизни для освобождения места для нового. Большое изменение и преобразование. Эта карта может освободить нас от того, что больше не является полезным в наших жизнях.",
    "__death"
  ),
  new card(
    "Дьявол",
    "Ситуация может тянуть вас вниз, и вы чувствуете себя беспомощными изменить ее. Передозировка склонна приводить к расстройству, алчности или похоти, что может стать самоуничтожающим.",
    "__devil"
  ),
  new card(
    "Император",
    "Это знак финансовой стабильности, амбиций, власти и достижений. Это прекрасная карта для профессиональных дел. Вы находитесь в мощном положении.",
    "__emperor"
  ),
  new card(
    "Императрица",
    "Рост, процветание и плодовитость. Счастливые концы дел и обещают хорошие награды за работу и усилия. Может представлять беременность, рождение, прочные и счастливые отношения и брак.",
    "__empress"
  ),
  new card(
    "Шут",
    "Неожиданные возможности внезапно появятся, что может привести к желательным изменениям. Оставайтесь открытыми, так как это потребует необходимости сделать важный выбор — из ниоткуда.",
    "__fool"
  ),
  new card(
    "Повешенный",
    "Жизнь может быть в периоде приостановки, посмотрите на вещи с новой точки зрения. Иногда нам нужно отпустить, чтобы получить что-то более выгодное в долгосрочной перспективе.",
    "__hanged-man"
  ),
  new card(
    "Отшельник",
    "Осторожные мысли и размышления, отступление от внешнего мира для размышлений и поиска мудрости — все ответы внутри вас самих.",
    "__hermit"
  ),
  new card(
    "Иерофант",
    "Помощь от мудрого, доверенного человека, такого как наставник или учитель, обычно уважаемого кого-то. Это может представлять традиционные ценности и моральную этику или необходимость найти более глубокий смысл в жизни.",
    "__hierophant"
  ),
  new card(
    "Верховная Жрица",
    "Тайны и секреты — это указывает, что есть больше глубины в деле, чем вы видели до сих пор. Следуйте своей интуиции и доверяйте своим инстинктам.",
    "__high-priestess"
  ),
  new card(
    "Суд",
    "Как вы посеете, так и пожнете — усилия, которые вы вложили, теперь вознаграждаются. Общее чувство обновления, время быть счастливым с новыми началами.",
    "__judgement"
  ),
  new card(
    "Справедливость",
    "Карта баланса, хотя более рационального логического типа. Требуется сбалансированный ум для принятия хорошо сбалансированного решения.",
    "__justice"
  ),
  new card(
    "Звезда",
    "Карта надежды, чувство оптимизма и говорит нам иметь веру — лучшие времена впереди. Может принести исцеление после болезни. Эта карта всегда является желанным зрелищем в любой ситуации.",
    "__star"
  ),
  new card(
    "Сила",
    "Терпение и дипломатия в сочетании с мужеством достигнут требуемых результатов и принесут успех. У вас есть запас внутренней силы, которая предоставляет вам больше власти, чем вы осознаете.",
    "__strength"
  ),
  new card(
    "Солнце",
    "Счастье, успех и триумфы, превосходные отношения, счастливый брак, удовлетворение, процветание и хорошее здоровье. Эта карта благоприятствует любой ситуации.",
    "__sun"
  ),
  new card(
    "Умеренность",
    "Умеренность, терпение и способность компромисса. С гармонией и совместимостью она предлагает идеальный союз. Может произойти примирение.",
    "__temperance"
  ),
  new card(
    "Башня",
    "Дом, построенный на плохих основаниях, рухнет sooner или later. Эта карта представляет ситуации, которые были построены на иллюзиях и ложных убеждениях и теперь подходят к концу.",
    "__tower"
  ),
  new card(
    "Колесо Фортуны",
    "Карта судьбы — она приносит положительное изменение фортуны. Используйте это по максимуму, так как перемена всегда за углом.",
    "_wheel"
  ),
  new card(
    "Мир",
    "Мир приносит уверенность и успех, победу и триумф. Не успех за одну ночь, но достижение цели, к которой стабильно шли.",
    "__world"
  ),
  new card(
    "Влюбленные",
    "Гармония объединенных противоположностей — идеальный союз, выраженный через любовь.",
    "__lovers"
  ),
  new card(
    "Маг",
    "Эта карта информирует вас, что у вас есть все навыки и способности, необходимые для успешного завершения задачи. Иметь уверенность, что вы движетесь в правильном направлении.",
    "__magician"
  ),
  new card(
    "Луна",
    "Эмоции крайне заряжены, возможны обман или чувства неопределенности. Ваши чувства интуиции и инстинкта усилены — возьмите время, чтобы увидеть вещи более ясно.",
    "__moon"
  ),
  new card("", "", ""),
];

function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 71);
  return randomNumber;
}

document.getElementById("draw").onclick = function Draw() {
  let index = getRandomNumber(71);
  let currentCard = deck[index];

  document.getElementById("card-display").innerHTML =
    ' <img src="/tarot img/' +
    currentCard.image +
    '.jpg" width="200" height= "300"><h3>' +
    currentCard.name +
    "</h3><p>" +
    currentCard.description +
    "</p>";
};
