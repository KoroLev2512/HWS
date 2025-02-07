interface ICarouselSlides {
    text: string;
    image: string;
    backgroundColor: string;
}

interface IExampleSlides {
    title: string;
    image: string;
    description: string;
    imageTitle: string;
    background: string;
}

export const carousel_slides: ICarouselSlides[] = [
    {
        text: 'Разработка сайтов, отражающих вашу уникальность и привлекающих клиентов',
        image: "/images/carousel/develop.svg",
        backgroundColor: 'linear-gradient(90deg, #134E5E 0%, #71B280 100%)',
    },
    {
        text: 'Создание мобильных приложений, переносящих ваш бизнес на новый уровень',
        image: "/images/carousel/mobile.svg",
        backgroundColor: 'var(--GR_OR, linear-gradient(90deg, rgba(255, 75, 31, 0.93) 0%, #FF9068 100%)',
    },
    {
        text: 'SMM стратегии, раскрывающие потенциал ваших социальных платформ',
        image: "/images/carousel/smm.svg",
        backgroundColor: 'var(--GR_DB, linear-gradient(90deg, #16222A 0%, #3A6073 100%)',
    },
    {
        text: 'Телеграм боты, упрощающие взаимодействие с вашей аудиторией',
        image: "/images/carousel/tg.svg",
        backgroundColor: 'var(--GR_TG, linear-gradient(90deg, #457FCA 0%, #5691C8 100%))',
    },
    {
        text: 'CRM системы для автоматизации и оптимизации ваших клиентских процессов',
        image: "/images/carousel/crm_systems.svg",
        backgroundColor: 'var(--GR_BL, linear-gradient(90deg, #000 0%, #434343 100%))',
    },
    {
        text: 'Полная бизнес упаковка, IT-поддержка и цифровой маркетинг',
        image: "/images/carousel/business.svg",
        backgroundColor: 'var(--GR_GR, linear-gradient(90deg, #29323C 0%, #485563 100%))',
    }
];

export const example_slides: IExampleSlides[] = [
    {
        title: 'Лендинг сайт',
        image: "/images/examples/landing.png",
        description: 'Создадим лендинг, который заставит вашу аудиторию действовать и поможет достичь ваших бизнес-целей',
        imageTitle: 'Лендинг сайт',
        background: 'linear-gradient(90deg, #134E5E 0%, #71B280 100%)',
    },
    {
        title: 'Сайт визитка',
        image: "/images/examples/landing.png",
        description: 'Представьте свой бренд с помощью изысканного и информативного сайта-визитки, который привлечет клиентов и подчеркнет вашу уникальность',
        imageTitle: 'Лендинг сайт',
        background: 'linear-gradient(90deg, #134E5E 0%, #71B280 100%)',
    },
    {
        title: 'Корпоративный сайт',
        image: "/images/examples/landing.png",
        description: 'Создадим лендинг, который заставит вашу аудиторию действовать и поможет достичь ваших бизнес-целей',
        imageTitle: 'Лендинг сайт',
        background: 'linear-gradient(90deg, #134E5E 0%, #71B280 100%)',
    },
    {
        title: 'Мобильное приложение',
        image: "/images/examples/landing.png",
        description: 'Создадим лендинг, который заставит вашу аудиторию действовать и поможет достичь ваших бизнес-целей',
        imageTitle: 'Лендинг сайт',
        background: 'linear-gradient(90deg, #134E5E 0%, #71B280 100%)',
    },
    {
        title: 'CRM система',
        image: "/images/examples/landing.png",
        description: 'Создадим лендинг, который заставит вашу аудиторию действовать и поможет достичь ваших бизнес-целей',
        imageTitle: 'Лендинг сайт',
        background: 'linear-gradient(90deg, #134E5E 0%, #71B280 100%)',
    },
    {
        title: 'Монтаж видео',
        image: "/images/examples/landing.png",
        description: 'Создадим лендинг, который заставит вашу аудиторию действовать и поможет достичь ваших бизнес-целей',
        imageTitle: 'Лендинг сайт',
        background: 'linear-gradient(90deg, #134E5E 0%, #71B280 100%)',
    },
    {
        title: 'Маркетинг',
        image: "/images/examples/landing.png",
        description: 'Создадим лендинг, который заставит вашу аудиторию действовать и поможет достичь ваших бизнес-целей',
        imageTitle: 'Лендинг сайт',
        background: 'linear-gradient(90deg, #134E5E 0%, #71B280 100%)',
    },
    {
        title: 'Логотипы',
        image: "/images/examples/landing.png",
        description: 'Создадим лендинг, который заставит вашу аудиторию действовать и поможет достичь ваших бизнес-целей',
        imageTitle: 'Лендинг сайт',
        background: 'linear-gradient(90deg, #134E5E 0%, #71B280 100%)',
    },
    {
        title: 'Рекламные креативы',
        image: "/images/examples/landing.png",
        description: 'Создадим лендинг, который заставит вашу аудиторию действовать и поможет достичь ваших бизнес-целей',
        imageTitle: 'Лендинг сайт',
        background: 'linear-gradient(90deg, #134E5E 0%, #71B280 100%)',
    },
    {
        title: 'CMS сайт',
        image: "/images/examples/landing.png",
        description: 'Создадим лендинг, который заставит вашу аудиторию действовать и поможет достичь ваших бизнес-целей',
        imageTitle: 'Лендинг сайт',
        background: 'linear-gradient(90deg, #134E5E 0%, #71B280 100%)',
    },
    {
        title: 'SMM',
        image: "/images/examples/landing.png",
        description: 'Создадим лендинг, который заставит вашу аудиторию действовать и поможет достичь ваших бизнес-целей',
        imageTitle: 'Лендинг сайт',
        background: 'linear-gradient(90deg, #134E5E 0%, #71B280 100%)',
    }
];

export class ExampleSlide {
}