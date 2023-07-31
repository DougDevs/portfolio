import example1 from "../img/example1.jpg";
import example2 from "../img/example2.jpg";
import example3 from "../img/example3.jpg";

export const apiProducts = [
  {
    id: 1,
    img: example1,
    name: "Página na internet",
    tag: "Marketing",
    description:
      "Seja profissional, tenha uma página na internet com as informações da sua empresa.",
  },
  {
    id: 2,
    img: example2,
    name: "Site StarTup",
    tag: "Crescimento",
    description: "Se você presta serviços, tenha uma página na internet mostrando seus serviços.",
  },
  {
    id: 3,
    img: example3,
    name: "Portal na web",
    tag: "Ampliação",
    description: "Tenha um portal na internet mostrando todos os seus projetos e serviços através de varias páginas.",
  },
];

export const apiServices = [
  {
    id: 1,
    name:"Tiramos fotos profissionais",
    description: "Uma boa apresentação do seu negócio faz a diferença.",
  },
  {
    id: 2,
    name:"Desenvolvimento de sites",
    description: "Sua empresa moderna e profissional.",
  },
  {
    id: 3,
    name:"Tenha seu domínio prórprio",
    description: "credibilidade e performance.",
  }
  // {
  //   id: 4,
  //   name:"Planejamento estratégico",
  //   description: "Um plano completo com objetivos e prazos para sua empresa crescer.",
  // },
  // {
  //   id: 5,
  //   name:"Edição de vídeos",
  //   description: "O conteúdo em vídeo é produzido e editado por nós mesmos, diminuindo o custo e o prazo.",
  // },
  // {
  //   id: 6,
  //   name:"Social Listening",
  //   description: "Monitoramento das redes sociais com o SAC 3.0, para atender o seu cliente da melhor forma.",
  // },
];

export const apiPricing = [
  {
    id: 1,
    name: "Página na web",
    description: "Seja profissional, tenha uma página na internet com as informações da sua empresa.",
    item1: "moderno",
    item2: "Imagens",
    item3: "informações de contato",
  },
  {
    id: 2,
    name: "Site StarTup",
    description: "Se você presta serviços, tenha uma página na internet mostrando seus serviços",
    item1: "Site para sua empresa",
    item2: "Fotos profissionais",
    item3: "Contato",
  },
  {
    id: 3,
    name: "Portal na web",
    price: "700$",
    description: "Tenha um portal na internet mostrando todos os seus projetos e serviços através de varias páginas.",
    item1: "fotos profissionais",
    item2: "Relatórios de performance",
    item3: "Várias páginas",
  }
];