import { HardDrive, Icon, KeyRound, List, Server,   } from "lucide-react";


export const examples = [
    {
        id: 1,
        method: 'ApiKey',
        verb: 'Get',
        description: 'Lista de series com api-key exposta',
        color: 'purple',
        Icon: KeyRound,
    },
    {
        id: 2,
        method: 'SSR',
        verb: 'Get',
        description: 'Listas de séries renderizadas no SSR',
        color: 'purple',
        Icon: Server,
    },
    {
        id: 3,
        method: 'Offline',
        verb: 'Get',
        description: 'Lista series consumida no SessionStorage',
        color: 'purple',
        Icon: HardDrive,
    },
];

export const crud = [
    {
        id:2,
        method: 'Read',
        verb: 'Get',
        description: 'Lista todas as series',
        color: 'green',
        Icon: List,
    },

]
