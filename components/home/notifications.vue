<template>
  <div>
    <b-modal id="modal-scrollable" ok-only scrollable title="Notifications">
      <notifications_table></notifications_table>
    </b-modal>
  </div>
</template>

<script>
module.exports = {
  name: "notifications",
  data() {
    return {};
  },
  components: {
    notifications_table: httpVueLoader("./notifications_table.vue"),
  },
};
</script>

<style scoped>
</style>