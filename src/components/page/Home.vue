<template>
  <div class="main-box">
    <div class="img-box">
      <img class="ment-img" :src="mentImg" alt="ment" />
      <img class="cha-img" :src="chaImg" alt="character">
    </div>
    <div class="project-title">GM board</div>
    <button class="go-button" @click="clickButton">go!</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  data() {
    return {
      mentImg: require("@/assets/ment.png"),
      chaImg: require("@/assets/character.jpg")
    }
  },
  methods: {
    clickButton() {
      this.$router.push("/board");
    }
  }
}
</script>

<style lang="scss" scoped>
.main-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5%;
  height: 100vh;
}


.img-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
  width: 80%;
}

.cha-img {
  width: 80%;
}

.project-title {
  font-weight: bold;
  font-size: 40px;
}

.go-button {
  width: 40%;
  height: 5%;
  font-size: 20px;
  font-weight: bold;
  border-width: 0;
  border-radius: 10px;
  margin-top: 5%;
  color: white;
  background-color: #262790
}
</style>