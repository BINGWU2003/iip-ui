<template>
  <div class="app-container">
    <h1>IIP-UI 组件示例</h1>
    
    <section class="section">
      <h2>Button 按钮</h2>
      <div class="demo-block">
        <div class="demo-row">
          <h3>基础按钮</h3>
          <iip-button>默认按钮</iip-button>
          <iip-button type="primary">主要按钮</iip-button>
          <iip-button type="success">成功按钮</iip-button>
          <iip-button type="warning">警告按钮</iip-button>
          <iip-button type="danger">危险按钮</iip-button>
          <iip-button type="info">信息按钮</iip-button>
        </div>

        <div class="demo-row">
          <h3>朴素按钮</h3>
          <iip-button plain>朴素按钮</iip-button>
          <iip-button type="primary" plain>主要按钮</iip-button>
          <iip-button type="success" plain>成功按钮</iip-button>
          <iip-button type="warning" plain>警告按钮</iip-button>
          <iip-button type="danger" plain>危险按钮</iip-button>
          <iip-button type="info" plain>信息按钮</iip-button>
        </div>

        <div class="demo-row">
          <h3>圆角按钮</h3>
          <iip-button round>圆角按钮</iip-button>
          <iip-button type="primary" round>主要按钮</iip-button>
          <iip-button type="success" round>成功按钮</iip-button>
          <iip-button type="warning" round>警告按钮</iip-button>
          <iip-button type="danger" round>危险按钮</iip-button>
          <iip-button type="info" round>信息按钮</iip-button>
        </div>

        <div class="demo-row">
          <h3>禁用状态</h3>
          <iip-button disabled>禁用按钮</iip-button>
          <iip-button type="primary" disabled>主要按钮</iip-button>
          <iip-button type="success" disabled>成功按钮</iip-button>
          <iip-button type="warning" disabled>警告按钮</iip-button>
          <iip-button type="danger" disabled>危险按钮</iip-button>
          <iip-button type="info" disabled>信息按钮</iip-button>
        </div>

        <div class="demo-row">
          <h3>文字按钮</h3>
          <iip-button text>文字按钮</iip-button>
          <iip-button type="primary" text>主要按钮</iip-button>
          <iip-button type="success" text>成功按钮</iip-button>
          <iip-button type="warning" text>警告按钮</iip-button>
          <iip-button type="danger" text>危险按钮</iip-button>
          <iip-button type="info" text>信息按钮</iip-button>
        </div>

        <div class="demo-row">
          <h3>不同尺寸</h3>
          <iip-button size="large">大型按钮</iip-button>
          <iip-button>默认按钮</iip-button>
          <iip-button size="small">小型按钮</iip-button>
        </div>

        <div class="demo-row">
          <h3>加载中</h3>
          <iip-button loading>加载中</iip-button>
          <iip-button type="primary" loading>加载中</iip-button>
        </div>

        <div class="demo-row">
          <h3>确认按钮 (自定义扩展功能)</h3>
          <iip-button confirm @click="handleConfirm">点击确认</iip-button>
          <iip-button type="danger" confirm confirmMessage="确定要删除吗？" @click="handleConfirm">删除</iip-button>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>Loading 加载</h2>
      <div class="demo-block">
        <div class="demo-row">
          <h3>基础用法</h3>
          <div class="loading-container" v-loading="loading1">
            <p>这里是内容区域</p>
          </div>
          <iip-button type="primary" @click="toggleLoading('loading1')">切换 Loading 状态</iip-button>
        </div>

        <div class="demo-row">
          <h3>自定义文本</h3>
          <div class="loading-container" v-loading="loading2" element-loading-text="加载中，请稍候...">
            <p>这里是内容区域</p>
          </div>
          <iip-button type="primary" @click="toggleLoading('loading2')">切换 Loading 状态</iip-button>
        </div>

        <div class="demo-row">
          <h3>服务方式调用</h3>
          <iip-button type="primary" @click="openFullscreenLoading">打开全屏 Loading</iip-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { IipLoading } from '../packages';

export default defineComponent({
  name: 'App',
  setup() {
    const loading1 = ref(false);
    const loading2 = ref(false);

    const toggleLoading = (name: string) => {
      if (name === 'loading1') {
        loading1.value = !loading1.value;
      } else if (name === 'loading2') {
        loading2.value = !loading2.value;
      }
    };

    const openFullscreenLoading = () => {
      const loading = IipLoading.service({
        text: '全屏加载中...'
      });

      setTimeout(() => {
        loading.close();
      }, 3000);
    };

    const handleConfirm = () => {
      console.log('操作已确认');
    };

    return {
      loading1,
      loading2,
      toggleLoading,
      openFullscreenLoading,
      handleConfirm
    };
  }
});
</script>

<style scoped>
.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.section {
  margin-bottom: 40px;
}

h1 {
  font-size: 28px;
  margin-bottom: 30px;
  color: var(--iip-text-color-primary);
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--iip-border-color-light);
  color: var(--iip-text-color-primary);
}

h3 {
  font-size: 16px;
  margin-bottom: 10px;
  color: var(--iip-text-color-secondary);
}

.demo-block {
  border: 1px solid var(--iip-border-color-light);
  border-radius: 4px;
  padding: 20px;
  background-color: var(--iip-background-color);
}

.demo-row {
  margin-bottom: 20px;
}

.demo-row:last-child {
  margin-bottom: 0;
}

.demo-row .iip-button {
  margin-right: 10px;
  margin-bottom: 10px;
}

.loading-container {
  width: 100%;
  height: 100px;
  border: 1px solid var(--iip-border-color);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}
</style> 