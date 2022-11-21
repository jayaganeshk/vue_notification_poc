<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="text-center">Vue Native Notification POC</div>
    </v-app-bar>

    <v-main>
      <VueNotification />
    </v-main>
  </v-app>
</template>

<script>
import VueNotification from "./components/VueNotification";

export default {
  name: "App",
  data() {
    return {
      showAndroid: false,
      showios: false,
    };
  },
  components: {
    VueNotification,
  },

  mounted() {
    Notification.requestPermission();
    console.log(Notification.permission);
    // this.$notification.requestPermission().then(console.log);
  },
};
</script>
