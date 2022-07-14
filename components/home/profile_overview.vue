<template>
  <div>
    <b-card>
      <div class="cardAvatar mt-3">
        <b-avatar
          :text="textAvatar"
          :badge="notifications"
          badge-offset="-15px"
          badge-variant="danger"
          badge-top
          variant="success"
          size="6rem"
        >
          <template #badge>
            <b-button
              id="btnNotifications"
              v-b-modal.modal-scrollable
              class="rounded-circle"
              variant="danger"
              >{{ notifications }}</b-button
            >
            <b-tooltip
              v-if="notifications > 0"
              :show="notifications > 0"
              target="btnNotifications"
              placement="right"
            >
              You have a notifications!
            </b-tooltip>
            <b-tooltip v-else target="btnNotifications" placement="right">
              No pending notifications
            </b-tooltip>
          </template>
        </b-avatar>
        <h4>
          {{
            $store.state.user[0].first_name +
            " " +
            $store.state.user[0].last_name
          }}
        </h4>
      </div>
    </b-card>
    <notifications></notifications>
  </div>
</template>
<script>
module.exports = {
  name: "profile_overview",
  data() {
    return {
      textAvatar: "",
      show: false,
    };
  },
  mounted() {
    this.makeTextAvatar();
  },
  methods: {
    makeTextAvatar() {
      this.textAvatar =
        this.$store.state.user[0].first_name.charAt(0) +
        this.$store.state.user[0].last_name.charAt(0);
    },
  },
  computed: {
    notifications() {
      let count = 0;
      for (const notification of this.$store.state.user[0].notifications) {
        if (notification.read == false) {
          count++;
        }
      }
      return String(count);
    },
  },
  components: {
    notifications: httpVueLoader("./notifications.vue"),
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  white-space: nowrap;
}

.cardAvatar {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.b-avatar-badge:hover {
  cursor: pointer;
}
</style>