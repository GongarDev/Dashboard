<template>
  <div>
    <b-navbar
      class="leftmenu"
    >
      <b-navbar-nav vertical class="h-100">
        <div class="d-flex flex-column justify-content-between">
          <div>
            <b-img
              fluid
              v-bind="mainProps"
              alt="fluid image"
              src="./assets/imgs/logo.png"
            ></b-img>
            <router-link
              class="routerLink"
              to="/home"
            >
              <b-nav-item active href="home">
                <span class="items">Home</span>
              </b-nav-item>
            </router-link>
            <router-link
              class="routerLink"
              to="/about"
            >
              <b-nav-item href="about">
                <span class="items">About</span>
              </b-nav-item>
            </router-link>
          </div>
          <div>
            <router-link class="routerLink mb-0" to="/" @click.native="logout">
              <b-nav-item href="logout">
                <span class="items">Sign Out</span>
              </b-nav-item>
            </router-link>
          </div>
        </div>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
module.exports = {
  name: "leftmenu",
  data() {
    return {
      mainProps: { width: 125, height: 75, class: "m1" },
    };
  },
  methods: {
    logout() {
      this.$store.state.user = null;
      this.$root.updateStorage();
    },
  },
};
</script>
<style scoped>
.leftmenu {
  display: flex;
  position: fixed;
  left: 0px;
  top: 0px;
  bottom: 0px;
  height: 100%;
  color: #31ba4f;
  background: white !important;
  padding: 0;
}

.items {
  color: #31ba4f;
  margin: 2px;
  padding: 5px 5px;
  text-align: center;
  font-size: 22px;
  margin: 5px 3px;
  transition: 0.3s;
  border-radius: 3px;
  text-decoration: none;
}

.items:hover {
  color: white;
  background-color: #31ba4f;
  cursor: pointer;
}

.routerLink {
  text-decoration: none;
  background: white;
}

span {
  margin: 2px;
  background: white;
}
</style>