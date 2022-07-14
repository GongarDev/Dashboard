const API_USER = "https://618404bd91d76c00172d1d23.mockapi.io/api/profile";
const API_CHAT = "https://618404bd91d76c00172d1d23.mockapi.io/api/chat";

let app;

function initVue() {

    //Views
    const Login = httpVueLoader("views/login.vue");
    const Home = httpVueLoader("views/home.vue");
    const About = httpVueLoader("views/about.vue");

    //Routers
    const router = new VueRouter({
        routes: [
            {path: "/login", name: "login", component: Login},
            {path: "/home", name: "home", component: Home},
            {path: "/about", name: "about", component: About},
      
        ],
    });

    //Store
    const store = new Vuex.Store({
        state: {
            user: null,
            chat: null
        },
        mutations: {
            SET_USER(state, user) {
                state.user = user
            },
            SET_CHAT(state, chat) {
                state.chat = chat
            }
        },
        actions: {
            async getUser({commit}) {
				await axios.get(API_USER).then((response) => {
                    commit('SET_USER', response.data);
				}).catch(() => {
                    commit('SET_USER', null);
                });
            },
            async getChat({commit}) {
				await axios.get(API_CHAT).then((response) => {
                    commit('SET_CHAT', response.data);
				}).catch(() => {
                    commit('SET_CHAT', null);
                });
            }
        },
    });

    app = new Vue({
        el: "#app",
        router,
        store,
        mixins: [dashboard],
        data() {
            return {};
        },
        created() {
            const savedUser = JSON.parse(window.localStorage.getItem("user"))
            if (savedUser?.length) {
                this.$store.state.user = savedUser;
                this.$router.replace({ name: "home" });
            }
        },
        computed: {
            isLogged(){
                if(this.$store.state.user == null){
                    this.$router.replace({ name: "login" });
                }else{
                    this.updateStorage();
                    this.$router.replace({ name: "home" });
                }
                return this.$store.state.user != null;
            }
        },
        methods: {
            updateStorage() {
                window.localStorage.setItem('user', JSON.stringify(this.$store.state.user))
            },
        },
        components: {
            leftmenu: httpVueLoader("./components/leftmenu.vue"),
            chatbot: httpVueLoader("./components/chatbot.vue"),
        }
    });
    //Format to date notifications
    Vue.filter('formatDate', function(value) {
        if (value) {
          return moment(String(value)).format('MM/DD/YYYY hh:mm')
        }
    });
}