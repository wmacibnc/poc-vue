import Home from './components/Home.vue';
import Cadastro from './components/Cadastro.vue';

export const routes = [
    { path: '', component: Home, titulo: 'Home' },
    { path: '/cadastro', component: Cadastro, titulo: 'Cadastro' }
];