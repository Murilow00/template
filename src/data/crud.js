import { KeyRound, Server } from "lucide-react";


export const examples = [
    {
        id:1,
        method: 'ApiKey',
        verb: 'Get',
        description: 'Lista de series com api-key exposta',
        color: 'purple',
        Icon: KeyRound,
    },
    {
        id:2,
        method: 'SSR',
        verb: 'Get',
        description: 'Listas de séries renderizadas no SSR',
        color: 'purple',
        Icon: Server
    }
];

export const crud = [
    {
        id:1,
        method: 'ApiKey',
        verb: 'Get',
        description: 'Lista de series com api-key exposta',
        color: 'purple',
        Icon: KeyRound,
    }
]