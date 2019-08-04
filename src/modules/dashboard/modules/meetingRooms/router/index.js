const Agendamento = () => import('./../views/Agendamento.vue')
const Room = () => import('./../views/Sala.vue')
const Novo = () => import('./../views/Novo.vue')
export default [
    {
        path: 'agendamento',
        component: Agendamento,
        meta: {
            requiresAuth: true
        },
        alias: ['home', '']

    },
    {
        path: 'sala',
        meta: {
            requiresAuth: true
        },
        component: Room,
        alias: ['rooms', '']

    },
    {
        path: 'novo',
        meta: {
            requiresAuth: true
        },
        component: Novo,
    }
]