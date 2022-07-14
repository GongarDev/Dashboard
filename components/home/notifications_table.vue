<template>
  <div>
    <b-table
      :items="items"
      :fields="fields"
      responsive="sm"
      @row-selected="onRowSelected"
      @row-clicked="(item) => $set(item, '_showDetails', !item._showDetails)"
      :tbody-tr-class="rowClass"
      select-mode="single"
      selectable
    >
      <template #row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col>{{ row.item.text }}</b-col>
          </b-row>
        </b-card>
      </template>
      <template #cell(type)="row">
        <b v-if="!row.item.read">{{ row.item.type }}</b>
        <div v-else-if="row.item.type == 'new-coworker'" class="text-success">
          {{ row.item.type }}
        </div>
        <div
          v-else-if="row.item.type == 'password-renewal'"
          class="text-warning"
        >
          {{ row.item.type }}
        </div>
        <div v-else-if="row.item.type == 'email-breach'" class="text-danger">
          {{ row.item.type }}
        </div>
      </template>
      <template #cell(date)="row">
        <b v-if="!row.item.read">{{ row.item.date | formatDate }}</b>
        <div v-else>{{ row.item.date | formatDate }}</div>
      </template>
    </b-table>
  </div>
</template>

<script>
module.exports = {
  name: "notifications_table",
  data() {
    return {
      fields: [
        { key: "type", label: "Topic" },
        { key: "date", label: "Date" },
      ],
      items: this.$store.state.user[0].notifications,
      selected: [],
    };
  },
  methods: {
    rowClass(item, type) {
      if (!item || type !== "row") return;
      if (item.read === true) return "bg-light";
      if (item.type === "new-coworker") return "table-success";
      if (item.type === "password-renewal") return "table-warning";
      if (item.type === "email-breach") return "table-danger";
    },
    onRowSelected(item) {
      if (item[0]?.read != null) {
        item[0].read = true;
      }
    },
  },
};
</script>
<style scoped>
td:hover {
  cursor: pointer;
}
</style>