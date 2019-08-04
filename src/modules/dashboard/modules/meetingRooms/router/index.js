const Agendamento = () => import('./../views/Agendamento.vue')
const Room = () => import('./../views/Sala.vue')
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

    }
]