<template>
	<div id="about">
        <b-card-group deck>
            <b-card-text>
                Realizado por Jesús González García
            </b-card-text>
            <b-card-text>
                <a class="linkedin" target="_blank" href="https://es.linkedin.com/in/gongardev">
                    <i class="fab fa-linkedin items"></i>
                </a>
                <a class="GitHub" target="_blank" href="https://github.com/GongarDev">
                    <i class="fab fa-github items"></i>
                </a>
                <a class="manfred" target="_blank" href="https://mnf.red/gongardev">
                    <i class="fab fa-medium items"></i>
                </a>
            </b-card-text>
            <b-card-text>
                Agradecimientos a  
                <a target="_blank" href="https://kymatio.com/">
                    Kymatio
                </a>
                y 
                <a target="_blank" href="https://www.getmanfred.com/">
                    Manfred
                </a>
            </b-card-text>
        </b-card-group>
	</div>
</template>
<script>
	module.exports = {
		name: 'about',
		data() {
			return {};
		},
	};
</script>
<style scoped>
#about{
	display: flex;
    justify-content: center;
    height: 100%;
	background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url("../assets/imgs/background_home.jpg");
	background-position:center center;
	background-attachment:fixed;
}

.card-deck {
    display: flex;
    justify-content:center;
    flex-direction: column;
    font-size: 1.0em;
    font-weight: bold;
    text-align: center;
}

.items {
    color: #000000;
    font-size: 20px;
    transition: 0.3s;
}

.items:hover {
    color: #31ba4f;
    cursor: pointer;
}
</style>