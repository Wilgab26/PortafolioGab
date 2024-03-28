import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech,Github } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "https://www.youtube.com/channel/UCOm0FxMrCIE04CmM-gqR9pA",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/wilmer-gabriel-negron-velasquez-084ba9202/",
    },
    {
        id: 3,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/xxgdexx",
    },
    {
        id: 4,
        logo: <BookText size={30} strokeWidth={1} />,
        src: "#!",
    },
    // {
    //     id: 5,
    //     logo: <Twitch size={30} strokeWidth={1} />,
    //     src: "#!",
    // },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Analista Programador Ssr",
        subtitle: "Lite Software & Consulting SAC",
        description: "Desarrollo de software (ERP y CRM) utilizando la siguiente teconología:  • Genexus v17. (Maquetación para App Web) y Work With Plus 15. (para Diseño).   • Angular V13 en el frontend. (Consumo de Api-Rest para front-end)    • Dot. net core 6 y .Net Framework 5.6 (Creación de Api-Rest para backend)     • SQL Server 2019 (Manejo de base de Datos)  • AWS S3 , EC2. (Servicios de AWS para Archivos pesados)   • Html + Css + Js. (Creación de Plantillas Correos y modelamiento de pantallas)",
        date: "Ene 2022 ",
    },
    {
        id: 2,
        title: "Analista Programador Jr",
        subtitle: "HELPDESK CONSULTING SAC",
        description: "Desarrollar programas y código fuente, con los requerimientos asignados.mantener y optimizar la integridad de la base de datos asignada. Migrar sistema ERPdesde visual fox pro-9 a C# con .net framewrok 5.6. Creación de procedimientos almacenados, consultas Y triggers con SQL server 2019.",
        date: "May 2021",
    },
    // {
    //     id: 3,
    //     title: "Especialista en Desarrollo Frontend",
    //     subtitle: "CodeForge Solutions",
    //     description: "Como desarrollador frontend, tendrás la oportunidad de colaborar en proyectos diversos y desafiantes que te permitirán expandir tus habilidades y dejar tu huella en el mundo digital.",
    //     date: "Ago 2019",
    // },
    {
        id: 4,
        title: "Prácticas Profesionales - Trainee Programmer",
        subtitle: "Vellapietra S.A.C",
        description: "Desarrollo de Software para área de ATC y Almacenes con tecnologías:      • Posgressql (Manejo de base de datos).     • spring boot (Creación de Api rest en el backend).     • angular 13 (Consumo de Api rest en el front-end).        • aws s3 & bit bucket. (Manejo de archivos pesados).",        date: "Mar 2018",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 4,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 80,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 10,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 6,
        text: "Certificaciones y Diplomas en Desarrollo de Software",
        lineRight: false,
        lineRightMobile: false,
    },
];
//esta es mia

export const serviceData2 = [
    {
        iconUrl: "https://img.icons8.com/?size=100&id=71257&format=png",
        title: "Framework Angular v13 ",
        description: "Nivel Intermedio",
    },
    {
        iconUrl: "https://img.icons8.com/?size=100&id=1BC75jFEBED6&format=png",
        title: "NET Framework",
        description: "Nivel Intermedio",
    },
    {
        iconUrl: "https://img.icons8.com/?size=100&id=laYYF3dV0Iew&format=png",
        title: "Sql Server 2019",
        description: "Nivel Intermedio a Avanzado",
    },
    {
        iconUrl: "https://img.icons8.com/?size=100&id=90519&format=png",
        title: "Spring boot",
        description: "Nivel básico",
    },
    {
        iconUrl: "https://img.icons8.com/?size=100&id=62452&format=png",
        title: "Firebase",
        description: "Nivel Intermedio",
    },
    {
        iconUrl: "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png",
        title: "MySql",
        description: "Nivel Intermedio",
    },
    {
        iconUrl: "https://img.icons8.com/?size=100&id=o6OvAxG0nzTH&format=png",
        title: "Mongo DB",
        description: "Nivel Básico",
    },
    {
        iconUrl: "https://img.icons8.com/?size=256&id=20906&format=png",
        title: "Control de Versiones Git",
        description: "Nivel Intermedio",
    },
];


//
export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

//
export const dataPortfolio = [
    {
        id: 1,
        title: "CRM",
        image: "/proyectos/crm.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Aplicación para Ferreterias",
        image: "/proyectos/Herramienta3.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Sig Advanced - ERP",
        image: "/proyectos/erp5.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Global Win - Sector Financiero",
        image: "/proyectos/globalwin.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Global Factoring - Sector Financiero",
        image: "/proyectos/globalfac.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Sistema de Obras - Mineras",
        image: "/proyectos/sepobra.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Sistema Logístico ",
        image: "/proyectos/iesaobra.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "José Rodriguez",
        description:
            "Es un excelente profesional, una persona confiable y que siempre está en constante aprendijaze académico.",
        imageUrl: "/profile4.png",
    },
    {
        id: 2,
        name: "Rita Vella",
        description:
            "Sabe identificar los problemas rápidamente , y es excelente solucionandolos. Además es muy respetuoso y responsable.",
        imageUrl: "/profile4.png",
    },
    {
        id: 3,
        name: "Gerardo Cherre",
        description:
            "Es un muchacho curioso e innovador",
        imageUrl: "/profile4.png",
    },
    // {
    //     id: 4,
    //     name: "Laura Snow",
    //     description:
    //         "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
    //     imageUrl: "/profile4.png",
    // },
    // {
    //     id: 5,
    //     name: "Carlos Sánchez",
    //     description:
    //         "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
    //     imageUrl: "/profile5.png",
    // },
    // {
    //     id: 6,
    //     name: "Antonio Martínez",
    //     description:
    //         "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
    //     imageUrl: "/profile6.png",
    // },
];