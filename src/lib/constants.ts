export const SITE_NAME = "Journey.kg";
export const SITE_URL = "https://journey.kg";
export const SITE_DESCRIPTION =
  "Хайкинг-клуб Кыргызстана — горы, озёра, каньоны. Честные маршруты с местными гидами.";

export const WHATSAPP_NUMBER = "996XXXXXXXXX";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const SOCIAL_LINKS = {
  telegram: "https://t.me/hikingclub_kg",
  instagram: "https://instagram.com/journey.kg",
  whatsapp: WHATSAPP_LINK,
} as const;

export const NAV_LINKS = [
  { label: "О нас", href: "#about" },
  { label: "Маршруты", href: "#tours" },
  { label: "Галерея", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакт", href: "#contact" },
] as const;

export const TOUR_DATA = [
  {
    id: 1,
    title: "Ала-Арча",
    duration: "1 день",
    price: "от 3 500 сом",
    image: "/images/ala-archa.png",
    description:
      "Национальный парк в 40 км от Бишкека. Идеально для однодневного трекинга с видами на ледники.",
  },
  {
    id: 2,
    title: "Иссык-Куль",
    duration: "2 дня",
    price: "от 8 500 сом",
    image: "/images/issyk-kul.png",
    description:
      "Второе по величине горное озеро мира. Тёплые пляжи, горячие источники и горные тропы.",
  },
  {
    id: 3,
    title: "Сон-Куль",
    duration: "2 дня",
    price: "от 9 500 сом",
    image: "/images/son-kul.png",
    description:
      "Высокогорное озеро на 3 016 м. Ночёвка в юрте, кочевая культура, нетронутая природа.",
  },
  {
    id: 4,
    title: "Каракол",
    duration: "3 дня",
    price: "от 14 000 сом",
    image: "/images/karakol.png",
    description:
      "Ущелья Джети-Огуз и Алтын-Арашан, горячие источники и еловые леса Тянь-Шаня.",
  },
  {
    id: 5,
    title: "Алай",
    duration: "5 дней",
    price: "от 25 000 сом",
    image: "/images/alay.png",
    description:
      "Алайская долина и Заалайский хребет. Пик Ленина, экспедиционный формат для подготовленных.",
  },
  {
    id: 6,
    title: "Индивидуальный тур",
    duration: "По запросу",
    price: "по запросу",
    image: "/images/custom.png",
    description:
      "Составим маршрут под ваши даты, уровень подготовки и интересы. Напишите нам!",
  },
] as const;

export const REVIEWS_DATA = [
  {
    id: 1,
    name: "Анна К.",
    country: "🇷🇺 Россия",
    stars: 5,
    text: "Невероятный поход на Сон-Куль! Гид Айбек знал каждый поворот тропы. Ночь в юрте под звёздами — незабываемо.",
    initials: "АК",
  },
  {
    id: 2,
    name: "Marco B.",
    country: "🇩🇪 Германия",
    stars: 5,
    text: "Best trekking experience in Central Asia. Professional guides, amazing landscapes. Will definitely come back for the Alay trek!",
    initials: "MB",
  },
  {
    id: 3,
    name: "Дмитрий Л.",
    country: "🇰🇿 Казахстан",
    stars: 5,
    text: "Брал тур на Каракол с семьёй. Всё продумано до мелочей: трансфер, питание, снаряжение. Дети в восторге!",
    initials: "ДЛ",
  },
  {
    id: 4,
    name: "Sophie M.",
    country: "🇫🇷 Франция",
    stars: 4,
    text: "Magnifique! Les montagnes du Kirghizistan sont incroyables. L'équipe de Journey est très professionnelle et accueillante.",
    initials: "SM",
  },
] as const;

export const FAQ_DATA = [
  {
    question: "Когда лучший сезон для походов?",
    answer:
      "Основной сезон — с июня по сентябрь. Июль-август — пик сезона с лучшей погодой. Весна (май) хороша для низкогорных маршрутов, а осень (сентябрь-октябрь) — для золотых красок и меньше людей.",
  },
  {
    question: "Нужна ли специальная физподготовка?",
    answer:
      "Зависит от маршрута. Ала-Арча и Иссык-Куль подходят для начинающих. Сон-Куль и Каракол требуют средней подготовки. Алай — для опытных. Мы всегда подберём маршрут под ваш уровень.",
  },
  {
    question: "Что включено в стоимость тура?",
    answer:
      "Трансфер из Бишкека, услуги гида, питание на маршруте, проживание (палатки/юрты), страховка. Личное снаряжение (рюкзак, ботинки) — своё или аренда за доп. плату.",
  },
  {
    question: "Можно ли с детьми?",
    answer:
      "Да! Ала-Арча и Иссык-Куль подходят для семей с детьми от 7 лет. На Сон-Куль берём детей от 10 лет. Мы адаптируем темп и маршрут для комфорта всей семьи.",
  },
  {
    question: "Как забронировать тур?",
    answer:
      "Напишите нам в WhatsApp или заполните форму на сайте. Мы ответим в течение 2 часов, подтвердим даты и пришлём подробную программу. Предоплата — 30%.",
  },
] as const;

export const TAPLINKS = [
  {
    label: "Telegram-канал",
    href: SOCIAL_LINKS.telegram,
    icon: "Send" as const,
  },
  {
    label: "Instagram",
    href: SOCIAL_LINKS.instagram,
    icon: "Camera" as const,
  },
  {
    label: "WhatsApp",
    href: SOCIAL_LINKS.whatsapp,
    icon: "MessageCircle" as const,
  },
  {
    label: "Расписание походов",
    href: SOCIAL_LINKS.telegram,
    icon: "Calendar" as const,
  },
  {
    label: "Маршруты и отчёты",
    href: SOCIAL_LINKS.instagram,
    icon: "Map" as const,
  },
] as const;
