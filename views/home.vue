<template>
	<div id="home">
		<div class="mt-3 ml-3">
			<b-card>
				<div>
					<profile_overview></profile_overview>
				</div>
			</b-card>
		</div>
		<div class="m-3 w-100">
		    <b-card class="mb-3 mr-3">
				<div>
					<h4>Evolution</h4>
					<evolution_chart></evolution_chart>
				</div>
        	</b-card>
			<b-card class="mr-3">
				<div>
					<h4>Timeline</h4>
					<timeline_chart></timeline_chart>
				</div>
			</b-card>
		</div>
	</div>
</template>
<script>
	module.exports = {
		name: 'home',
		data() {
			return {};
		},
		components: {
			profile_overview: httpVueLoader("../components/home/profile_overview.vue"),
			evolution_chart: httpVueLoader("../components/home/evolution_chart.vue"),
			timeline_chart: httpVueLoader("../components/home/timeline_chart.vue"),
		},
		mounted() {
			if(this.$store.state.user == null){
				this.$router.replace({ name: "login" });
			}
			this.getAlerts();
		},
		methods: {
			getAlerts(){
				var alerts = this.$store.state.user[0].alerts;
				for (const alert of alerts) {
					this.toast('b-toaster-top-right', alert.type, alert.text);
				}
			},
			toast(toaster, variant, text) {
            this.$bvToast.toast(text, {
                title: variant.toUpperCase(),
                toaster: toaster,
                solid: true,
				variant: variant,
                appendToast: false
            })
          } 
  		},
	};
</script>
<style scoped>
#home{
	height: 100%;
	display: flex;
	background-color: transparent;
	background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url("../assets/imgs/background_home.jpg");
	background-position:center center;
	background-attachment:fixed;
	background-repeat: repeat;
}
</style>