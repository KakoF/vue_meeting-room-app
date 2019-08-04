const Agendamento = () => import('./../views/Agendamento.vue')

export default [
    {
        path: 'agendamento',
        component: Agendamento,
        meta: {
            requiresAuth: true
        },
        alias: ['home', '']

    }
]