import mainRoutes from './../modules/meetingRooms/router'
const Dashboard = () => import('./../views/Dashboard.vue')
export default [
    {
        path: '/dashboard',
        component: Dashboard,
        meta: {
            requiresAuth: true
        },
        children: [
        ...mainRoutes
        ]
    }
]