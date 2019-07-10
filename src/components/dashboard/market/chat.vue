<template>
  <div class="chat-section">
    <div class="chat-icon">
      <i class="fas fa-comment-dots"></i>
      <div class="josebold">Start a conversation with Bimpe</div>
    </div>
    <div class="chat">
      <span></span>
      <span class="text-box">
        <input type="text" placeholder="Type your message..." v-model="message" />
        <span>
          <i class="far fa-smile-beam"></i>
        </span>
        <span>XX</span>
      </span> <div>
      <input type="checkbox" />Press Enter to Send
    </div>
    </div>
   
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.chat-section {
  height: 60vh;
  position: relative;
  .chat-icon {
    margin: 15% auto;
    width: 25%;
    text-align: center;

    .fas {
      font-size: 48px;
      opacity: 0.7;
      color: #c3c3c3;
    }
    div {
      font-size: 11px;
      color: #c3c3c3;
    }
  }
  .chat {
      margin: 0 auto;
      text-align: center;
    .text-box {
      background: #fff;
      border: 1px solid #c3c3c3;
      border-radius: 5px;
      input {
        border-left: none;
        border-right: none;
        padding: 0.5rem 1rem;
        height: 100%;
      }
      span{
          padding: 0.5rem 0;
      }
    }
  }
}
</style>

