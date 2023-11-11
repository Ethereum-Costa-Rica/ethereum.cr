export type Session = {
  title: string;
  room?: string;
  schedule: string;
  speaker?: string;
  description?: string;
};

export type Event = {
  group: string;
  groupSchedule: string;
  sessions: Array<Session>;
};

export const EVENTS: Array<Event> = [
  {
    group: "Entrada y Logistica",
    groupSchedule: "9:00 am - 10:00 am",
    sessions: [
      {
        title: "Bienvenida a Ethereum Costa Rica Day",
        schedule: "9:00 am - 9:30 am",
      },
    ],
  },
  {
    group: "Bienvenida",
    groupSchedule: "9:00 am - 10:00 am",
    sessions: [
      {
        title: "Bienvenida a Ethereum Costa Rica Day",
        room: "Sala 1",
        schedule: "9:30 am - 10:00 am",
        speaker: "Otto Mora",
        description:
          "Bienvenida y presentación por parte de Otto Mora y espacio para Texas Tech.",
      },
    ],
  },
  {
    group: "Exhibiciones",
    groupSchedule: "10:00 am - 10:30 am",
    sessions: [
      {
        title: "Open Showroom",
        room: "Sala 4",
        schedule: "10:00 am - 10:30 am",
        speaker: "",
        description: "",
      },
    ],
  },
  {
    group: "Bloque 1",
    groupSchedule: "10:30 am - 11:00 am",
    sessions: [
      {
        title: "Deployment of Venus Protocol on Ethereum Mainnet",
        room: "Sala 1",
        schedule: "10:30 am - 11:00 am",
        speaker: "Brad Harrison",
        description: "",
      },
      {
        title: "Intro a web3: descarga tu primera billetera",
        room: "Sala 2",
        schedule: "10:30 am - 11:15 am",
        speaker: "Kevin Barquero",
        description: "",
      },
      {
        title: "From Code to Contract: Mastering Solidity Basics",
        room: "Sala 3",
        schedule: "10:30 am - 11:15 am",
        speaker: "Igor Yalovoy",
        description: "",
      },
    ],
  },
  {
    group: "Bloque 2",
    groupSchedule: "11:00 am - 11:30 am",
    sessions: [
      {
        title: "El empleo en web3 y los emprendimientos",
        room: "Sala 1",
        schedule: "11:00 am - 11:30 am",
        speaker: "Pedro Rey Puma",
        description: "",
      },
    ],
  },
  {
    group: "Bloque 3",
    groupSchedule: "11:30 am - 12:00 pm",
    sessions: [
      {
        title: "Using NFTs to Build Community",
        room: "Sala 1",
        schedule: "11:30 am - 12:00 pm",
        speaker: "Perchy",
        description: "",
      },
      {
        title: "Escalando Ethereum con Roll Ups y Tecnologías de Segunda Capa",
        room: "Sala 2",
        schedule: "11:30 am - 12:00 pm",
        speaker: "Alberto Galán",
        description: "",
      },
      {
        title: "Crea tu propio token en 45min",
        room: "Sala 3",
        schedule: "11:30 am - 12:00 pm",
        speaker: "Justin Castillo",
        description: "",
      },
    ],
  },
  {
    group: "Almuerzo",
    groupSchedule: "12:00 pm - 1:00 pm",
    sessions: [
      {
        title: "Almuerzo",
        room: "Piso 3",
        schedule: "12:00 pm - 1:00 pm",
        speaker: "",
        description: "El almuerzo se servirá en el piso 3",
      },
    ],
  },
  {
    group: "Bloque 4",
    groupSchedule: "1:00 pm - 1:30 pm",
    sessions: [
      {
        title:
          "Web3 para las masas: confluencia de AA, zk-Starks y onchain worlds",
        room: "Sala 1",
        schedule: "1:00 pm - 1:30 pm",
        speaker: "Ranulfo",
        description: "",
      },
      {
        title: "Organizaciones Evolucionarias - un vistazo al futuro hoy",
        room: "Sala 2",
        schedule: "1:00 pm - 1:30 pm",
        speaker: "Jaff Sandi ",
        description: "",
      },
      {
        title:
          "Abriendo puertas: las oportunidades para un desarrollador en el mundo de blockchain",
        room: "Sala 3",
        schedule: "1:00 pm - 1:30 pm",
        speaker: "Daniel Bejarano",
        description: "",
      },
    ],
  },
  {
    group: "Bloque 5",
    groupSchedule: "1:30 pm - 2:00 pm",
    sessions: [
      {
        title: "Dónde estamos y para dónde vamos: Regulación en Costa Rica",
        room: "Sala 1",
        schedule: "1:30 pm - 2:00 pm",
        speaker: "Jose Miguel Zamora",
        description: "",
      },
      {
        title:
          "Consenso Inteligente: El Futuro de las DAOs Impulsado por la IA",
        room: "Sala 2",
        schedule: "1:30 pm - 2:00 pm",
        speaker: "Gabriel Carranza",
        description: "",
      },
      {
        title:
          "Developer onboarding: herramientas para el desarrollo en Ethereum y L2s",
        room: "Sala 3",
        schedule: "1:30 pm - 2:00 pm",
        speaker: "Gabriel Carranza",
        description: "",
      },
    ],
  },
  {
    group: "Bloque 6",
    groupSchedule: "2:00 pm - 2:30 pm",
    sessions: [
      {
        title: "Negocios Colaborativos y ReFi: el experimento de CofiBlocks",
        room: "Sala 1",
        schedule: "2:00 pm - 2:30 pm",
        speaker: "Karla Cordoba",
        description: "",
      },
      {
        title: "El Futuro de la Venta de Entradas de Eventos con NFTs",
        room: "Sala 2",
        schedule: "2:00 pm - 2:30 pm",
        speaker: "Robert Ramirez",
        description: "",
      },
      {
        title:
          "Blockchain y Pruebas de Conocimiento Cero (ZKP): Una combinación perfecta para garantizar la privacidad y la transparencia",
        room: "Sala 3",
        schedule: "2:00 pm - 2:30 pm",
        speaker: "Andres Obando y Hugo Villalta",
        description: "",
      },
    ],
  },
  {
    group: "Coffee break",
    groupSchedule: "2:30 pm - 3:00 pm",
    sessions: [
      {
        title: "Coffee Break",
        room: "Piso 3",
        schedule: "2:30 pm - 3:00 pm",
        speaker: "",
        description:
          "Break para disfrutar de un delicioso café y aprovechar para hacer networking",
      },
    ],
  },
  {
    group: "Bloque 7",
    groupSchedule: "3:00 pm - 3:30 pm",
    sessions: [
      {
        title: "Intro a Identidad Autosoberana y Credenciales Verificables",
        room: "Sala 1",
        schedule: "3:00 pm - 3:30 pm",
        speaker: "Otto Mora",
        description: "",
      },
      {
        title:
          "Notariado Digital: un nuevo paradigma con Blockchain. Casos de uso reales",
        room: "Sala 2",
        schedule: "3:00 pm - 3:30 pm",
        speaker: "Fabricio Espinoza",
        description: "",
      },
      {
        title: "Pruebas criptográficas de autenticidad usando TLSNotary",
        room: "Sala 3",
        schedule: "3:00 pm - 3:45 pm",
        speaker: "Rafael Campos",
        description: "",
      },
    ],
  },
  {
    group: "Bloque 8",
    groupSchedule: "3:30 pm - 4:00 pm",
    sessions: [
      {
        title: "<Por anunciar>",
        room: "Sala 1",
        schedule: "3:00 pm - 3:30 pm",
        speaker: "Mario Hernandez ",
        description: "",
      },
      {
        title: "Tikuna: AI aplicada a la detección de ataques en el Blockchain",
        room: "Sala 2",
        schedule: "3:00 pm - 3:30 pm",
        speaker: "Francis Gomez",
        description: "",
      },
    ],
  },
  {
    group: "Panel de discusión",
    groupSchedule: "4:00 pm - 4:30 pm",
    sessions: [
      {
        title: "Panel de discusión",
        room: "Sala 1",
        schedule: "4:00 pm - 4:30 pm",
        speaker: "Francis Sanchinelli, Fernando Quiros, Ilan Melendez",
        description:
          "Moderador: Otto Mora. Temas: La oportunidad para CR y Latam, Oportunidades de formación para ser un ciudadano web3",
      },
    ],
  },
  {
    group: "Cierre",
    groupSchedule: "4:00 pm - 4:45 pm",
    sessions: [
      {
        title: "Ceremonia de CIERRE",
        room: "Sala 1",
        schedule: "4:30 pm - 4:45 pm",
      },
    ],
  },
];
