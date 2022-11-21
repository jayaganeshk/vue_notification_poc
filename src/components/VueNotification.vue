<template>
  <div class="text-center">
    <v-btn
      elevation="2"
      @click="notify"
      class="ma-2"
      :disabled="sendNotification"
      >Start Notification</v-btn
    >
    <v-btn
      elevation="2"
      @click="stop"
      class="ma-2"
      :disabled="!sendNotification"
      >Stop Notification</v-btn
    >

    <v-btn elevation="2" @click="clearMsgs" class="ma-2">clear messages</v-btn>
    <v-card v-for="(item, i) in items" :key="i" class="ma-4">
      <v-list-item>
        {{ item.message }}
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "VueNotification",
  data: function () {
    return {
      sendNotification: false,
      items: [],
      intervalID: null,
      delayTime: 10000,
    };
  },
  methods: {
    sendMessage(body) {
      new Notification("A new message", {
        body: body,
        icon: "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aWNvbnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      });
    },
    notify() {
      this.sendNotification = true;
      // set interval for 1 minute
      this.intervalID = setInterval(() => {
        let body = `notifying at ${new Date().toLocaleString()}`;
        this.items.push({
          message: body,
        });
        this.sendMessage(body);
      }, this.delayTime);
    },
    stop() {
      this.sendNotification = false;
      // clear interval
      clearInterval(this.intervalID);
    },
    clearMsgs() {
      this.items = [];
    },
    updateDelay() {
      this.stop();
      this.notify();
    },
  },
};
</script>

<style></style>
