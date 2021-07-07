import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ApiMixin from "./api";
import store from "./store/store";

createApp(App).use(store).use(router).mixin(ApiMixin).mount("#app");

window.Kakao.init("c9e7d39c2f17c1e170a99ee947079a72");
window.Kakao.isInitialized();
