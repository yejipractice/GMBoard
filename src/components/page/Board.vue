<template>
  <div class="main-box">
    <div class="title">GM Board</div>
    <div class="write-box">
      <div class="input-text-box">
        <textarea class="input-text" v-model="inputText"/>
        <button @click="clickUploadButton" class="upload-button">등록</button>
      </div>
      <img v-show="uploadedImg" class="uploaded-img" :src="uploadedImg" alt="image" />
      <label class="input-image-box">
        <div>사진 첨부</div>
        <input class="input-image" type="file" @change="uploadImage" />
        <div>+</div>
      </label>
    </div>
    <div class="scroll-box">
      <div class="post" v-for="(post, index) in posts" :key="index">
        <div class="post-image-box">
          <img class="post-image" :src="post.img" alt="image"/>
        </div>
        <div class="post-text">{{post.text}}</div>
        <div class="post-date">{{post.date}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {posts} from "@/assets/data";

export default {
  name: "BoardPage",
  data() {
    return {
      uploadedImg: "",
      allowedImgExts: ["png", "jpeg", "jpg"],
      inputText: "",
      posts
    }
  },
  methods: {
    uploadImage(event) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.uploadedImg = reader.result;
      };

      if (file) {
        const fileExtension = file.name.split(".").pop().toLowerCase();
        if (this.allowedImgExts.includes(fileExtension)) {
          reader.readAsDataURL(file);
        } else {
          alert(
              "허용되지 않는 확장자입니다. png, jpeg 파일만 업로드 가능합니다.",
          );
          event.target.value = "";
        }
      }
    },
    clickUploadButton() {
      alert(this.uploadedImg);
    }
  }
}
</script>

<style lang="scss" scoped>
.main-box {
  display: flex;
  flex-direction: column;
  padding: 3%;
}

.title {
  font-size: 24px;
  font-weight: bold;
}

.input-text-box {
  display: flex;
  width: 100%;
  margin: 2% 0;
}

.input-text {
  background-color: #eeefe0;
  height: 12vh;
  width: 87%;
  margin-right: 3%;
  border-radius: 10px;
  border-width: 0;
  padding: 2%
}

.upload-button {
  width: 10%;
  border-radius: 10px;
  border-width: 0;
  background-color: #262790;
  color: white;
  font-weight: bold;
  font-size: 16px;
}

.uploaded-img {
  width: 100%;
  margin-bottom: 2%;
}

.input-image-box {
  width: 96%;
  height: 5vh;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2%;
  font-size: 20px;
  background-color: #262790;
  color: white;
}

.input-image {
  display: none;
}

.scroll-box {
  margin: 2% 0;
  height: 30%;
  overflow-y: scroll;
  border-radius: 10px;
  background-color: #eeefe0;
}

.post {
  display: flex;
  margin-bottom: 1%;
  background-color: white;
  border-radius: 10px;
}

.post-image-box {
  width: 10%;
  height: 10vh;
  border-radius: 10px;
  margin-right: 2%;
  background-color: violet;
}

.post-image {
  width: 100%;
}

.post-text {
  margin-top: 15px;
  width: 90%;
}

.post-date {
  display: flex;
  padding-right: 4px;
}

</style>