<template>
  <div class="login">
    <div class="login__logo">
      <img src="./assets/logo.png" />
    </div>
    <div class="login__checkbox">
      <input class="login__checkbox-input" id="checkbox" v-model="checkbox" type="checkbox" name="checkbox" />
      <label class="login__checkbox-label" for="checkbox">
        <span class="login__checkbox-label-text"
          >Я прочитал и согласен с&nbsp;
          <a href="#">условиями пользованиями&nbsp;</a>
          и&nbsp;
          <a href="#">политикой конфиденциальности</a>
        </span>
      </label>
    </div>
    <a class="login__button" :class="getClassName" href="/auth/google">
      <i class="fab fa-google"></i>
      <span>Google</span>
    </a>
    <a class="login__button login__button--disabled" :class="getClassName" href="/auth/telegram">
      <i class="fab fa-telegram-plane"></i>
      <span>Telegram</span>
    </a>
  </div>
</template>

<script>

export default {
  name: 'app',
  data: () => ({
    checkbox: false
  }),
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler);
  },
  mounted() {
    this.resizeHandler();
  },
  methods: {
    resizeHandler() {
      if (window.innerHeight === this.oldHeight) return;
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      this.oldHeight = window.innerHeight;
    }
  },
  computed: {
    getClassName() {
      return {
        'login__button--disagree': !this.checkbox
      };
    }
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

* {
  box-sizing: border-box;
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
  letter-spacing: 0.5px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;

  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background: linear-gradient(to right, #f8880f, #ed5314);
  }
}

body {
  font-size: 18px;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #141414;
  margin: 0;
  padding: 0;
}

button {
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.primary-button {
  width: 100%;
  padding: 16px 0;
  background-color: #f8880f;
  border: none;
  border-radius: 6px;
  font-size: 22px;
  font-weight: 500;
  cursor: pointer;
  color: #fff;
}

.content {
  margin: 80px 0;
  padding: 12px;
}

.login {
  height: calc((var(--vh, 1vh) * 100));
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__logo {
    width: 256px;
    height: 256px;

    img {
      width: 100%;
    }
  }

  &__checkbox {
    display: flex;
    align-items: center;

    &-input {
      position: absolute;
      z-index: -1;
      opacity: 0;

      &:checked {
        & + .login__checkbox-label::before {
          border-color: #ff6800;
          background-color: #ff6800;
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
        }
      }
    }

    &-label {
      margin: 24px 0;
      display: inline-flex;
      align-items: center;
      user-select: none;

      &::before {
        content: "";
        display: inline-block;
        width: 24px;
        height: 24px;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid #adb5bd;
        border-radius: 6px;
        margin-right: 12px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
      }

      &-text {
        color: #fff;

        a {
          font-weight: 500;
          color: #ff6800;
        }
      }
    }
  }

  &__button {
    width: 100%;
    display: flex;
    justify-content: center;
    border-radius: 6px;
    margin-top: 12px;
    color: #fff;
    padding: 12px;
    background-color: #ff6800;
    transition: background-color 0.3s ease, opacity 0.3s ease;

    &--disabled,
    &--disagree {
      background-color: #aaa;
      pointer-events: none;
    }

    &--disagree {
      background-color: #ccc;
    }

    span {
      text-transform: uppercase;
      font-weight: 500;
      margin-left: 12px;
    }
  }
}
</style>
