import Vue from "vue";
import Router from "vue-router";


import Login from "./pages/Login.vue";
import Home from "./pages/Home.vue"
import Cadastro from "./pages/Cadastro.vue"
import EsqueceuSenha from "./pages/EsqueceuSenha.vue";
import Perfil from "./pages/Perfil.vue"
import EnviarReveita from  './pages/EnviarReceita.vue'

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { name: "login", path: "/login", component: Login },
    { name: "home", path: "/", component: Home },
    { name: "cadastro", path: "/cadastro", component: Cadastro },
    { name: "esqueceu-senha", path: "/esqueceu-senha", component: EsqueceuSenha },
    { name: "enviar-receita", path: "/enviar-receita", component: EnviarReveita },
    { name: "perfil", path: "/perfil", component: Perfil },
    // { path: "/stocks", component: Stocks },
  ],
});
