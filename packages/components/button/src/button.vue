<template>
  <el-button
    :type="type"
    :size="size"
    :disabled="disabled"
    :loading="loading"
    :plain="plain"
    :round="round"
    :circle="circle"
    :link="link"
    :text="text"
    :bg="bg"
    :color="color"
    :autofocus="autofocus"
    @click="handleClick"
  >
    <slot></slot>
  </el-button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ElButton, ElMessageBox } from 'element-plus';

// 按钮类型
type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default' | 'text';
// 按钮尺寸
type ButtonSize = 'large' | 'default' | 'small';

export default defineComponent({
  name: 'IipButton',
  components: {
    ElButton
  },
  props: {
    // 继承 Element Plus Button 所有属性
    type: {
      type: String as PropType<ButtonType>,
      default: 'default'
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    link: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: false
    },
    bg: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    // 自定义扩展属性
    confirm: {
      type: Boolean,
      default: false
    },
    confirmTitle: {
      type: String,
      default: '提示'
    },
    confirmMessage: {
      type: String,
      default: '确认执行此操作吗？'
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    // 点击处理
    const handleClick = (e: MouseEvent) => {
      if (props.confirm) {
        ElMessageBox.confirm(
          props.confirmMessage,
          props.confirmTitle,
          {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }
        ).then(() => {
          emit('click', e);
        }).catch(() => {
          // 取消操作
        });
      } else {
        emit('click', e);
      }
    };

    return {
      handleClick
    };
  }
});
</script>

<style scoped>
/* 可以在此添加额外的样式 */
</style> 