<template>
  <div class="profile-information">
    <div class="title jose">Profile Information</div>
    <div class="head flexbox row">
      <div class="image">
        <img src="/images/mercy_daniels.jpg" alt="Profile Picture" />
        <div class="update">
          <span>UPDATE PHOTO</span>
        </div>
      </div>
      <div class="bio flexbox column jose">
        <div class="mobile flexbox row">
          <div class="item">
            <div class="top">FULL NAME</div>
            <div class="bottom">Mercy Daniels Olokor</div>
          </div>
          <div class="item exc">
            <div class="top">GENDER</div>
            <div class="bottom">Female</div>
          </div>
        </div>
        <div class="mobile flexbox row">
          <div class="item">
            <div class="top">EMAIL</div>
            <div class="bottom">divee789@gmail.com</div>
          </div>
          <div class="item exc">
            <div class="top">PHONE</div>
            <div class="bottom">07061630054</div>
          </div>
        </div>
        <div class="mobile flexbox row">
          <div class="item">
            <div class="top">DATE OF BIRTH</div>
            <div class="bottom">01-December-1999</div>
          </div>
          <div class="item exc">
            <div class="top">LOCATION</div>
            <div class="bottom">Canaanland,Ota</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.profile-information {
  box-sizing: border-box;
  border-bottom: 1px solid #a4a4a4;
  padding-bottom: 5rem;
  .title {
    margin-bottom: 3rem;
    font-size: 32px;
    color: #a4a4a4;
  }
  .head {
    @media screen and (max-width: $breakpoint-mobile) {
      flex-direction: column;
    }
    .image {
      position: relative;
      width: 35%;
      height: 40vh;
      @media screen and (max-width: $breakpoint-mobile) {
        width: 100%;
      }
      img {
        width: 90%;
        object-fit: cover;
        height: 100%;
        filter: grayscale(9);
      }
      .update {
        position: absolute;
        bottom: 0;
        color: #fff;
        text-align: center;
        width: 90%;
        padding: 1rem 0;
        background: rgba(226, 224, 224, 0.504);
        cursor: pointer;
        font-size: 13px;
        font-weight: bold;
        span {
          opacity: 0.9;
        }
      }
    }
    .bio {
      width: 55%;
      @media screen and (max-width: $breakpoint-mobile) {
        width: 100%;
        margin-top: 3rem;
      }
      .mobile {
        @media screen and (max-width: $breakpoint-mobile) {
          flex-direction:column;
          margin-bottom: 3rem;
        }
      }
      .item {
        width: 50%;
        @media screen and (max-width: $breakpoint-mobile) {
          width: 100%;
          margin-bottom: 2rem;
        }
        .top {
          margin-bottom: 1.5rem;
          color: #a4a4a4;
          font-size: 11px;
          font-family: "Josefin Sans", sans-serif;
          font-weight: bold;
        }
        .bottom {
          color: #193652;
          font-weight: bold;
          font-size: 17px;
        }
      }
      .exc {
        margin-left: 5rem;
        @media screen and (max-width: $breakpoint-mobile) {
          margin: 0;
        }
      }
    }
  }
}
</style>

