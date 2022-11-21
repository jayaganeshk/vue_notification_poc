import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueNativeNotification from "vue-native-notification";

Vue.config.productionTip = false;

Vue.use(VueNativeNotification, {
  // Automatic permission request before
  // showing notification (default: true)
  requestOnNotify: true,
});

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
