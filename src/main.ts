import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useVuelidate } from '@vuelidate/core';

const app = createApp(App);

app.use(store);
app.use(router);
app.use(useVuelidate);
app.mount('#app');

//createApp(App).use(store).use(router).mount("#app");