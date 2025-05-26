<template>
  <transition name="iip-loading-fade">
    <div
      v-show="visible"
      class="iip-loading-mask"
      :style="{ backgroundColor: background || '' }"
      :class="[customClass, { 'is-fullscreen': fullscreen }]"
    >
      <div class="iip-loading-spinner">
        <slot>
          <div class="circular">
            <svg viewBox="25 25 50 50" class="circular-icon">
              <circle cx="50" cy="50" r="20" fill="none" />
            </svg>
          </div>
        </slot>
        <p v-if="text" class="iip-loading-text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IipLoading',
  props: {
    text: {
      type: String,
      default: ''
    },
    fullscreen: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: false
    },
    customClass: {
      type: String,
      default: ''
    },
    background: {
      type: String,
      default: ''
    }
  }
});
</script>

<style lang="scss" scoped>
.iip-loading-mask {
  position: absolute;
  z-index: 2000;
  background-color: rgba(255, 255, 255, 0.9);
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: opacity 0.3s;

  &.is-fullscreen {
    position: fixed;
  }

  .iip-loading-spinner {
    top: 50%;
    margin-top: -25px;
    width: 100%;
    text-align: center;
    position: absolute;

    .circular {
      height: 42px;
      width: 42px;
      animation: loading-rotate 2s linear infinite;

      .circular-icon {
        width: 42px;
        height: 42px;
        animation: loading-dash 1.5s ease-in-out infinite;
        stroke-dasharray: 90, 150;
        stroke-dashoffset: 0;
        stroke-width: 2;
        stroke: #0078d4;
        stroke-linecap: round;
      }
    }

    .iip-loading-text {
      color: #0078d4;
      margin: 3px 0;
      font-size: 14px;
    }
  }
}

.iip-loading-fade-enter-active,
.iip-loading-fade-leave-active {
  transition: opacity 0.3s;
}

.iip-loading-fade-enter-from,
.iip-loading-fade-leave-to {
  opacity: 0;
}

/* 动画 */
@keyframes loading-rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
}
</style> 