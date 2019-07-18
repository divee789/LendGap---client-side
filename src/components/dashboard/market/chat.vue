<template>
  <div class="chat-section">
    <div class="chat-icon">
      <i class="fas fa-comment-dots"></i>
      <div class="josebold">Start a conversation with Bimpe</div>
    </div>
    <div class="chat">
      <span class="spec">XX</span>
      <div class="text-box">
        <input type="text" placeholder="Type your message..." v-model="message" />
        <span class="far fa-smile-beam"></span>
        <span class="fas fa-paper-plane"></span>
      </div>
      <div class="check jose">
        <input type="checkbox" />Press Enter to Send
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.chat-section {
  height: 80vh;
  position: relative;
  background: #e0dede;
  .chat-icon {
    padding: 13% 0;
    margin: 0 auto;
    width: 25%;
    text-align: center;

    .fas {
      font-size: 54px;
      opacity: 0.7;
      color: #c3c3c3;
    }
    div {
      font-size: 11px;
      color: #c3c3c3;
      letter-spacing: 1px;
    }
  }
  .chat {
    width: 90%;
    position: absolute;
    box-sizing: border-box;
    bottom: 20px;
    right: -15%;
    .spec{
      margin-right: 10px;
    }
    .text-box {
      background: #fff;
      border: 1px solid #c3c3c3;
      border-radius: 5px;
      display: inline;
      position: relative;
      text-align: center;

      input {
        border: none;
        border-radius: 5px;
        padding: 1rem 1.5rem;
        height: 100%;
        width: 50%;
        &:focus {
          outline: none;
        }
      }
      .fa-smile-beam {
        position: absolute;
        top: -5px;
        right: 43px;
        opacity: 0.5;
        font-size: 18px;
      }
      .fa-paper-plane {
        position: absolute;
        top: -5px;
        right: 15px;
        opacity: 0.5;
        font-size: 18px;
        cursor:pointer;
      }
      span {
        padding: 0.5rem 0;
      }
    }
    .check{
      font-size:11px;
      text-align: center;
      color:#c3c3c3;
      opacity:1;
    }
  }
}
</style>

