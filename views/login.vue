<template>
    <div id="login">
        <b-img fluid v-bind="mainProps" alt="fluid image" src="./assets/imgs/logo.png"></b-img>
        <b-form class="form" @submit.prevent="login">
            <b-form-group label="Username">
                <b-form-input aria-describedby="input-live-feedback" :state="validation" v-model="input.username" required></b-form-input>
            </b-form-group>
            <b-form-group label="Password">            
                <b-form-input type="password" aria-describedby="input-live-feedback" :state="validation" v-model="input.password" required></b-form-input>
            </b-form-group>
            <div>
                <b-button pill type="submit">Login</b-button>
                <span id="remember" tabindex="0">Forgotten password?</span> 
                <b-tooltip target="remember">Username: Salvatore Password: kymatio</b-tooltip>
                    <b-form-invalid-feedback :state="validation" id="input-live-feedback">
                            Incorrect user and password
                    </b-form-invalid-feedback>
            </div>
        </b-form>
    </div>
</template>

<script>
    module.exports = {
        name: 'login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                },
                fakeLogin: {
                    username: "Salvatore",
                    password: "kymatio"
                },
                mainProps: { width: 500, height: 300, class: 'm1' },
                validation: null,
            }
        },
        methods: {
            async login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.fakeLogin.username && 
                        this.input.password == this.fakeLogin.password) {
                        await this.$store.dispatch('getUser');
                        this.$router.replace({ name: "home" });
                    } else {
                        this.validation = false;
                    }
                }
            },
        }
    }
</script>

<style scoped>
#login {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    background-color: transparent;
    background-image: linear-gradient(
                                    to right,
                                    rgb(255, 255, 255),
                                    rgb(255, 255, 255),
                                    rgba(255, 255, 255, 0.952),
                                    rgba(255, 255, 255, 0.733),
                                    rgba(255, 255, 255, 0),
                                    rgb(255, 0, 0,0)
                                    ),
                                    url("../assets/imgs/background_home.jpg");
    background-repeat:no-repeat;
    background-attachment:fixed;
}
.form{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;          
}
button{
    color: white;
    background-color: #31ba4f;
    border: 0;
}
button:hover{
    color: white;
    background-color: #25913c;
    border: 0;
}
.form-control{
    background-color: #f3f6f9;
    border-color: #f3f6f9;
    color: #464e5f;
    transition: color .15s ease,background-color .15s ease,border-color .15s ease,box-shadow .15s ease;
}
span{
    color: #31ba4f;
}
</style>