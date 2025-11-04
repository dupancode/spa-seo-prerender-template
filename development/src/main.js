import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";

const app = createApp(App);
app.use(router);
app.mount("#app");

router.isReady().then(() => {
  document.dispatchEvent(new Event("render-event"));
});
