<template>
  <div class="chatbot">
    <b-collapse id="collapse">
      <div v-for="(question, index) in chatBot" :key="index">
        <b-card v-if="questionIndex == index">
          <div class="mb-2">{{ question.title }}</div>
          <div v-for="(answer, index) in question.answers" :key="index">
            <b-button
              v-if="index == 0"
              @click="getSuccessMessage(answer.value), (show = true)"
              block
              pill
              variant="outline-success"
              @keyup.caps-lock="keymonitor"
              >{{ answer.title }}</b-button
            >
            <b-button
              v-if="index == 1"
              @click="getSuccessMessage(answer.value), (show = true)"
              block
              pill
              variant="outline-success"
              @keyup.caps-lock="keymonitor"
              >{{ answer.title }}</b-button
            >
            <b-button
              v-if="index == 2"
              @click="getSuccessMessage(answer.value), (show = true)"
              block
              pill
              variant="outline-success"
              @keyup.caps-lock="keymonitor"
              >{{ answer.title }}</b-button
            >
            <b-button
              v-if="index == 3"
              @click="getSuccessMessage(answer.value), (show = true)"
              block
              pill
              variant="outline-success"
              v-on:keypress="openWithF4(demo)"
              >{{ answer.title }}</b-button
            >
          </div>
        </b-card>
      </div>
      <b-card class="info m-0 p-0" style="font-size: 0.7rem"
        >Use numeric keyboard: 1 to 4 descendent</b-card
      >
    </b-collapse>
    <b-img
      id="iconChatBot"
      v-b-toggle.collapse
      @click="showWindowsChat"
      fluid
      v-bind="mainProps"
      alt="fluid image"
      src="./assets/imgs/chatbot.png"
    ></b-img>
    <b-tooltip
      :show.sync="show"
      target="iconChatBot"
      placement="right"
      noninteractive
    >
      {{ successMesage }}
    </b-tooltip>
  </div>
</template>
<script>
module.exports = {
  name: "chatbot",
  data() {
    return {
      mainProps: { width: 100, height: 150, class: "m1" },
      chatBot: [],
      questionIndex: 0,
      show: false,
      successMesage: "Hi!",
    };
  },
  created() {
    this.getChat();
    window.addEventListener("keydown", (e) => {
      if (e.key == "4") {
        this.getSuccessMessage(3);
      } else if (e.key == "3") {
        this.getSuccessMessage(2);
      } else if (e.key == "2") {
        this.getSuccessMessage(1);
      } else if (e.key == "1") {
        this.getSuccessMessage(1);
      }
    });
  },
  methods: {
    async getChat() {
      await this.$store.dispatch("getChat");
    },
    showWindowsChat() {
      this.chatBot = this.$store.state.chat[0].questions;
      if (this.questionIndex == this.chatBot?.length) {
        this.successMesage = "Hi!";
        this.questionIndex = 0;
      }
    },
    getSuccessMessage(value) {
      show = true;
      if (this.chatBot[this.questionIndex].successMessages?.length) {
        console.log(
          this.chatBot[this.questionIndex].successMessages[value - 1].title
        );
        this.successMesage =
          this.chatBot[this.questionIndex]?.successMessages[value - 1].title;
      }
      this.questionIndex++;
    },
    openWithF4(callback) {
      document.addEventListener("keydown", function (e) {
        if (e.key === 100) {
          callback();
        }
      });
    },
    demo() {
      console.log("Hola mundo");
    },
  },
};
</script>
<style scoped>
.chatbot {
  bottom: 20px;
  cursor: pointer;
  display: block;
  position: fixed;
  left: 140px;
  z-index: 10;
  background: transparent !important;
}
.card-body {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.20rem;
  border-radius: 10px;
  width: 270px;
  text-align: center;
}
.collapse {
  border-radius: 10px;
}
.info .card-body{
    padding: 2px!important;
    text-align: center;
}
</style>