export type Language = "en" | "ru";

export interface TourItem {
  id: number;
  title: string;
  duration: string;
  price: string;
  image: string;
  description: string;
}

export interface ReviewItem {
  id: number;
  name: string;
  country: string;
  stars: number;
  text: string;
  initials: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface AdvantageItem {
  title: string;
  description: string;
}

export interface Translations {
  nav: {
    about: string;
    tours: string;
    reviews: string;
    faq: string;
    contact: string;
    cta: string;
    menuAria: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    desc1: string;
    desc2: string;
    ctaTours: string;
    ctaWhatsapp: string;
    counters: {
      routes: string;
      travelers: string;
      experience: string;
    };
  };
  whyUs: {
    badge: string;
    title: string;
    items: AdvantageItem[];
  };
  tours: {
    badge: string;
    title: string;
    subtitle: string;
    priceCustom: string;
    detailsBtn: string;
    list: TourItem[];
  };
  reviews: {
    badge: string;
    title: string;
    list: ReviewItem[];
  };
  links: {
    badge: string;
    title: string;
  };
  faq: {
    badge: string;
    title: string;
    list: FaqItem[];
  };
  contact: {
    badge: string;
    title: string;
    desc: string;
    whatsappTitle: string;
    whatsappSubtitle: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      contactLabel: string;
      contactPlaceholder: string;
      routeLabel: string;
      routePlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
    };
  };
  footer: {
    slogan1: string;
    slogan2: string;
    navTitle: string;
    socialTitle: string;
    rights: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: "About",
      tours: "Routes",
      reviews: "Reviews",
      faq: "FAQ",
      contact: "Contact",
      cta: "Book a Tour",
      menuAria: "Menu",
    },
    hero: {
      badge: "JEEP TOURS",
      titleLine1: "4×4 Tours",
      titleLine2: "around Kyrgyzstan",
      desc1: "Mountains, alpine lakes, canyons, nomadic yurt camps, wildlife, and off-road expeditions.",
      desc2: "Tailored approach — we create routes according to your desires and travel style.",
      ctaTours: "Explore Routes",
      ctaWhatsapp: "Message on WhatsApp",
      counters: {
        routes: "Routes",
        travelers: "Travelers",
        experience: "Years of Experience",
      },
    },
    whyUs: {
      badge: "WHY US",
      title: "Travel with Us",
      items: [
        {
          title: "10+ Years of Experience",
          description:
            "We know every trail. Our local guides possess deep expertise in navigating the rugged mountains of Kyrgyzstan.",
        },
        {
          title: "Tailored Approach",
          description:
            "We design custom itineraries adapted to your preferences and pace. Every journey is unique.",
        },
        {
          title: "Proven Routes",
          description:
            "Mountains, lakes, canyons, yurt camps, and pristine nature. Every route is thoroughly verified by our team.",
        },
      ],
    },
    tours: {
      badge: "DESTINATIONS",
      title: "Our Routes",
      subtitle:
        "Curated itineraries with optimized durations. Pricing is tailored on request based on dates, season, and group preferences.",
      priceCustom: "custom on request",
      detailsBtn: "Details",
      list: [
        {
          id: 1,
          title: "Ala-Archa",
          duration: "1 day",
          price: "custom",
          image: "/images/ala-archa.png",
          description:
            "A breathtaking national park just 40 km from Bishkek. Ideal for day trekking with panoramic glacier views.",
        },
        {
          id: 2,
          title: "Issyk-Kul",
          duration: "2 days",
          price: "custom",
          image: "/images/issyk-kul.png",
          description:
            "The world's second-largest alpine lake. Warm beaches, natural thermal hot springs, and dramatic mountain gorges.",
        },
        {
          id: 3,
          title: "Son-Kul",
          duration: "2 days",
          price: "custom",
          image: "/images/son-kul.png",
          description:
            "A high-altitude gem at 3,016 m. Authentic yurt stays, nomadic culture, and untouched starry skies.",
        },
        {
          id: 4,
          title: "Karakol",
          duration: "3 days",
          price: "custom",
          image: "/images/karakol.png",
          description:
            "Jeti-Oguz red rocks, Altyn-Arashan alpine gorge, healing thermal springs, and Tien Shan spruce forests.",
        },
        {
          id: 5,
          title: "Alay",
          duration: "5 days",
          price: "custom",
          image: "/images/alay.png",
          description:
            "The magnificent Alay Valley and Zaalaysky mountain range. Views of Lenin Peak in an expedition-grade adventure.",
        },
        {
          id: 6,
          title: "Custom Tour",
          duration: "On request",
          price: "custom",
          image: "/images/custom.png",
          description:
            "We will craft a personalized itinerary tailored to your dates, fitness level, and interests. Get in touch with us!",
        },
      ],
    },
    reviews: {
      badge: "REVIEWS",
      title: "What Travelers Say",
      list: [
        {
          id: 1,
          name: "Anna K.",
          country: "🇷🇺 Russia",
          stars: 5,
          text: "Incredible trek to Son-Kul! Our guide Aybek knew every twist of the trail. The night in a yurt under the stars was truly unforgettable.",
          initials: "AK",
        },
        {
          id: 2,
          name: "Marco B.",
          country: "🇩🇪 Germany",
          stars: 5,
          text: "Best trekking experience in Central Asia. Professional guides, amazing landscapes. Will definitely come back for the Alay trek!",
          initials: "MB",
        },
        {
          id: 3,
          name: "Dmitry L.",
          country: "🇰🇿 Kazakhstan",
          stars: 5,
          text: "Took the Karakol tour with my family. Everything was thought out to perfection: transfer, meals, gear. The kids were thrilled!",
          initials: "DL",
        },
        {
          id: 4,
          name: "Sophie M.",
          country: "🇫🇷 France",
          stars: 4,
          text: "Magnifique! Les montagnes du Kirghizistan sont incroyables. L'équipe de Journey est très professionnelle et accueillante.",
          initials: "SM",
        },
        {
          id: 5,
          name: "Torekhan & Almagul",
          country: "🇰🇿 Kazakhstan",
          stars: 5,
          text: "Dear Mirlan! We want to express our deepest gratitude for a wonderful trip! Thanks to you, we explored Bishkek, Issyk-Kul and stunning scenic spots. Mountains, fresh mountain air, and comfortable driving made this trip unforgettable. Highly recommended!",
          initials: "TA",
        },
      ],
    },
    links: {
      badge: "ONLINE",
      title: "Our Channels",
    },
    faq: {
      badge: "FAQ",
      title: "Frequently Asked Questions",
      list: [
        {
          question: "When is the best season for trekking?",
          answer:
            "The main season runs from June to September. July and August offer the best weather. Spring (May) is wonderful for low-altitude scenic routes, while autumn (September-October) features golden colors and fewer tourists.",
        },
        {
          question: "Do I need special physical fitness?",
          answer:
            "It depends on the route. Ala-Archa and Issyk-Kul are suitable for beginners. Son-Kul and Karakol require moderate fitness. Alay is for experienced adventurers. We always tailor the route to your level.",
        },
        {
          question: "What is included in the tour price?",
          answer:
            "Transfer from Bishkek, certified guide services, meals on the route, accommodation (tents/traditional yurts), insurance. Personal gear (backpack, boots) can be brought along or rented.",
        },
        {
          question: "Can we travel with children?",
          answer:
            "Yes! Ala-Archa and Issyk-Kul are great for families with kids aged 7+. Son-Kul welcomes kids aged 10+. We adjust the pacing and program to keep the whole family comfortable.",
        },
        {
          question: "How to book a tour?",
          answer:
            "Message us on WhatsApp or submit the form on our website. We will reply within 2 hours, confirm dates, and send the detailed itinerary. Deposit is 30%.",
        },
      ],
    },
    contact: {
      badge: "CONTACT",
      title: "Get in Touch",
      desc: "Write to us on WhatsApp or fill out the form — we will respond within 2 hours.",
      whatsappTitle: "Chat on WhatsApp",
      whatsappSubtitle: "Fast response",
      form: {
        nameLabel: "Name",
        namePlaceholder: "Your name",
        contactLabel: "Phone or Email",
        contactPlaceholder: "+996... or email",
        routeLabel: "Preferred Route",
        routePlaceholder: "Select a route",
        messageLabel: "Message (your preferences)",
        messagePlaceholder: "Tell us about your wishes, travel dates, group size...",
        submitBtn: "Send Request",
      },
    },
    footer: {
      slogan1: "4×4 jeep tours around Kyrgyzstan.",
      slogan2: "Mountains, alpine lakes, canyons.",
      navTitle: "Navigation",
      socialTitle: "Social Media",
      rights: "© 2025 Journey.kg. All rights reserved.",
    },
  },
  ru: {
    nav: {
      about: "О нас",
      tours: "Маршруты",
      reviews: "Отзывы",
      faq: "FAQ",
      contact: "Контакт",
      cta: "Записаться",
      menuAria: "Меню",
    },
    hero: {
      badge: "ДЖИП ТУРЫ",
      titleLine1: "4×4 Tours",
      titleLine2: "around Kyrgyzstan",
      desc1: "Горы, озёра, каньоны, юрточные лагеря, дикая природа, горные маршруты.",
      desc2: "Индивидуальный подход — разработаем маршруты под ваши желания и возможности.",
      ctaTours: "Смотреть маршруты",
      ctaWhatsapp: "Написать в WhatsApp",
      counters: {
        routes: "Маршрутов",
        travelers: "Участников",
        experience: "Лет опыта",
      },
    },
    whyUs: {
      badge: "ПОЧЕМУ МЫ",
      title: "Путешествуйте с нами",
      items: [
        {
          title: "10+ лет опыта",
          description:
            "Знаем каждый маршрут. Наши гиды — местные жители с многолетним опытом работы в горах Кыргызстана.",
        },
        {
          title: "Индивидуальный подход",
          description:
            "Разработаем маршрут под ваши желания и возможности. Каждый тур — уникальный.",
        },
        {
          title: "Проверенные маршруты",
          description:
            "Горы, озёра, каньоны, юрточные лагеря, дикая природа. Все маршруты проверены нашей командой.",
        },
      ],
    },
    tours: {
      badge: "КУДА ПОЕХАТЬ",
      title: "Наши маршруты",
      subtitle:
        "Готовые маршруты с проверенной длительностью. Стоимость — индивидуально по запросу, в зависимости от сезона и компоновки тура.",
      priceCustom: "индивидуально по запросу",
      detailsBtn: "Подробнее",
      list: [
        {
          id: 1,
          title: "Ала-Арча",
          duration: "1 день",
          price: "индивидуально",
          image: "/images/ala-archa.png",
          description:
            "Национальный парк в 40 км от Бишкека. Идеально для однодневного трекинга с видами на ледники.",
        },
        {
          id: 2,
          title: "Иссык-Куль",
          duration: "2 дня",
          price: "индивидуально",
          image: "/images/issyk-kul.png",
          description:
            "Второе по величине горное озеро мира. Тёплые пляжи, горячие источники и горные тропы.",
        },
        {
          id: 3,
          title: "Сон-Куль",
          duration: "2 дня",
          price: "индивидуально",
          image: "/images/son-kul.png",
          description:
            "Высокогорное озеро на 3 016 м. Ночёвка в юрте, кочевая культура, нетронутая природа.",
        },
        {
          id: 4,
          title: "Каракол",
          duration: "3 дня",
          price: "индивидуально",
          image: "/images/karakol.png",
          description:
            "Ущелья Джети-Огуз и Алтын-Арашан, горячие источники и еловые леса Тянь-Шаня.",
        },
        {
          id: 5,
          title: "Алай",
          duration: "5 дней",
          price: "индивидуально",
          image: "/images/alay.png",
          description:
            "Алайская долина и Заалайский хребет. Пик Ленина, экспедиционный формат для подготовленных.",
        },
        {
          id: 6,
          title: "Индивидуальный тур",
          duration: "По запросу",
          price: "индивидуально",
          image: "/images/custom.png",
          description:
            "Составим маршрут под ваши даты, уровень подготовки и интересы. Напишите нам!",
        },
      ],
    },
    reviews: {
      badge: "ОТЗЫВЫ",
      title: "Что говорят туристы",
      list: [
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
        {
          id: 5,
          name: "Торехан и Алмагуль",
          country: "🇰🇿 Казахстан",
          stars: 5,
          text: `Уважаемый Мирлан!\nОт всей души хотим поблагодарить Вас за прекрасное путешествие🔥 Благодаря Вам мы увидели Бишкек, Иссык‑Куль и множество удивительных мест с самой красивой стороны😍 Особенно запомнились горы, ущелья и тот свежий, чистый воздух — это было незабываемо✨.\nНа протяжении всего времени Вы были очень добры и внимательны, поездки на Вашем автомобиле проходили комфортно и спокойно. Мы рады, что выбрали именно Вас 👍\nСпасибо за Вашу доброжелательность, искреннюю заботу и старание показать нам всё самое интересное. Отдельно хочется отметить, что Вы всегда знали места, где можно вкусно пообедать — это добавило особого уюта нашему путешествию 😋.\nМы будем советовать Вас друзьям и знакомым, а если приедем повторно обязательно свяжемся с Вами ещё раз 👍\nС уважением и благодарностью,\nГости из Казахстана - Торехан и Алмагуль`,
          initials: "ТА",
        },
      ],
    },
    links: {
      badge: "МЫ В СЕТИ",
      title: "Наши ссылки",
    },
    faq: {
      badge: "ВОПРОСЫ",
      title: "Частые вопросы",
      list: [
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
      ],
    },
    contact: {
      badge: "КОНТАКТ",
      title: "Свяжитесь с нами",
      desc: "Напишите нам в WhatsApp или заполните форму — мы ответим в течение 2 часов.",
      whatsappTitle: "Написать в WhatsApp",
      whatsappSubtitle: "Быстрый ответ",
      form: {
        nameLabel: "Имя",
        namePlaceholder: "Ваше имя",
        contactLabel: "Телефон или Email",
        contactPlaceholder: "+996... или email",
        routeLabel: "Маршрут",
        routePlaceholder: "Выберите маршрут",
        messageLabel: "Сообщение (ваши предпочтения)",
        messagePlaceholder: "Расскажите о ваших пожеланиях...",
        submitBtn: "Отправить заявку",
      },
    },
    footer: {
      slogan1: "Джип туры по Кыргызстану.",
      slogan2: "Горы, озёра, каньоны.",
      navTitle: "Навигация",
      socialTitle: "Соцсети",
      rights: "© 2025 Journey.kg. Все права защищены.",
    },
  },
};
