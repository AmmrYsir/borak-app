import { createRouter, createMemoryHistory } from 'vue-router';
import LoginForm from './components/LoginForm.vue';
import Dashboard from './components/Dashboard.vue';

const routes = [
	{ path: '/dashboard', component: Dashboard },
	{ path: '/login', component: LoginForm },
	{ path: '/', redirect: '/dashboard' },
]

const router = createRouter({
	history: createMemoryHistory(),
	routes,
})

export default router;
