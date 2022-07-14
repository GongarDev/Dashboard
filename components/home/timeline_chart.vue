<template>
  <div id="chart">
    <apexchart
      type="scatter"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
module.exports = {
  name: "timeline_chart",
  components: {
    apexchart: VueApexCharts,
  },
  mounted() {
    this.getData();
  },
  data: function () {
    return {
      iconSeries: [],
      colorSeries: [],
      dataSeries: [],
      series: [],
      chartOptions: {
        chart: {
          height: 350,
          type: "scatter",
          animations: {
            enabled: false,
          },
          zoom: {
            enabled: true,
          },
          toolbar: {
            show: true,
          },
        },
        colors: ["#056BF6", "#D2376A"],
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          tickAmount: 0,
        },
        markers: {
          size: 20,
        },
        fill: {
          type: "image",
          opacity: 1,
          image: {
            src: [
              "./assets/imgs/cybersecurity.png",
              "./assets/imgs/phishing.png",
            ],
            width: 40,
            height: 40,
          },
        },
        legend: {
          labels: {
            useSeriesColors: true,
          },
          markers: {
            customHTML: [
              function () {
                return "";
              },
              function () {
                return "";
              },
            ],
          },
        },
      },
    };
  },
  methods: {
    getData() {
      const timeline = this.$store.state.user[0].timeline;
      for (const item of timeline) {
        if (item.type == "cybersecurity") {
          this.iconSeries.push("./assets/imgs/cybersecurity.png");
          this.colorSeries.push("#056BF6");
        } else if (item.type == "phishing") {
          this.iconSeries.push("./assets/imgs/phishing.png");
          this.colorSeries.push("#D2376A");
        }
        this.dataSeries.push({
          name: item.title,
          data: [
            [
              moment(String(item.startDate)).format("MM/DD/YYYY hh:mm"),
              item.progress != null ? item.progress : 0,
            ],
          ],
        });
      }
      this.series = this.dataSeries;
      this.chartOptions.colors = this.colorSeries;
      this.chartOptions.fill.image.src = this.iconSeries;
    },
  },
};
</script>
<style scoped>
</style>