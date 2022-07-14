<template>
  <div class="evolution_chart">
    <apexchart
      width="100%"
      height="250"
      type="line"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
module.exports = {
  name: "evolution_chart",
  components: {
    apexchart: VueApexCharts,
  },
  data: function () {
    return {
      chartOptions: {
        xaxis: {
          type: "category",
          labels: {
            formatter: function (val) {
              return moment(val).format('MM/DD/YYYY hh:mm');
            },
          },
        },
      },
      series: [
        {
          name: "Values",
          data: this.getValues(),
        },
      ],
    };
  },
  methods: {
    getDates() {
      const evolutions = this.$store.state.user[0].evolution;
      const evolutionsMap = new Map(
        evolutions.map((evolutions) => [
          String(evolutions.date),
          evolutions.value,
        ])
      );
      return Array.from(evolutionsMap.keys());
    },
    getValues() {
      const evolutions = this.$store.state.user[0].evolution;
      const evolutionsMap = new Map(
        evolutions.map((evolutions) => [evolutions.date, evolutions.value])
      );
      return Array.from(evolutionsMap, ([x, y]) => ({ x, y })).sort((a, b) => {
        return new Date(a.x) - new Date(b.x);
      });
    },
  },
};
</script>

<style scoped>
</style>