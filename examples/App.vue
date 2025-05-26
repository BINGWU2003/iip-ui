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

    <section class="section">
      <h2>Select 选择器</h2>
      <div class="demo-block">
        <div class="demo-row">
          <h3>基础用法</h3>
          <div style="width: 300px;">
            <iip-select v-model="selectValue1" placeholder="请选择" :options-source="options" />
          </div>
          <p>当前选中值: {{ selectValue1 }}</p>
        </div>

        <div class="demo-row">
          <h3>带描述信息</h3>
          <div style="width: 300px;">
            <iip-select v-model="selectValue2" placeholder="请选择" :options-source="optionsWithDesc" show-description />
          </div>
        </div>

        <div class="demo-row">
          <h3>多选模式</h3>
          <div style="width: 300px;">
            <iip-select v-model="selectValue3" multiple collapse-tags placeholder="请选择" :options-source="options" />
          </div>
          <p>当前选中值: {{ selectValue3 }}</p>
        </div>

        <div class="demo-row">
          <h3>可搜索</h3>
          <div style="width: 300px;">
            <iip-select v-model="selectValue4" filterable placeholder="请选择" :options-source="options" />
          </div>
        </div>

        <div class="demo-row">
          <h3>分页功能</h3>
          <div style="width: 300px;">
            <iip-select v-model="selectValue5" placeholder="请选择" :options-source="largeOptions" pagination
              :page-size="5" :total-count="largeOptions.length" @page-change="handlePageChange" />
          </div>
          <p>当前页: {{ currentPage }}</p>
        </div>

        <div class="demo-row">
          <h3>远程搜索</h3>
          <div style="width: 300px;">
            <iip-select v-model="selectValue6" filterable remote placeholder="请输入关键词" :loading="remoteLoading"
              :options-source="remoteOptions" :fetch-options="fetchRemoteOptions" @search="handleSearch" />
          </div>
          <p>搜索关键词: {{ searchKeyword }}</p>
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
    // Loading 相关
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

    // Select 相关
    const selectValue1 = ref('');
    const selectValue2 = ref('');
    const selectValue3 = ref([]);
    const selectValue4 = ref('');
    const selectValue5 = ref('');
    const selectValue6 = ref('');
    const currentPage = ref(1);
    const searchKeyword = ref('');
    const remoteLoading = ref(false);
    const remoteOptions = ref<{ value: string, label: string }[]>([]);

    // 基础选项
    const options = [
      { value: 'option1', label: '选项1' },
      { value: 'option2', label: '选项2' },
      { value: 'option3', label: '选项3' },
      { value: 'option4', label: '选项4' },
      { value: 'option5', label: '选项5' }
    ];

    // 带描述的选项
    const optionsWithDesc = [
      { value: 'option1', label: '选项1', description: '这是选项1的描述信息' },
      { value: 'option2', label: '选项2', description: '这是选项2的描述信息' },
      { value: 'option3', label: '选项3', description: '这是选项3的描述信息' },
      { value: 'option4', label: '选项4', description: '这是选项4的描述信息' },
      { value: 'option5', label: '选项5', description: '这是选项5的描述信息' }
    ];

    // 大量选项用于分页演示
    const largeOptions = Array.from({ length: 30 }, (_, index) => ({
      value: `option${index + 1}`,
      label: `选项${index + 1}`
    }));

    // 处理页码变化
    const handlePageChange = (page: number) => {
      currentPage.value = page;
      console.log('页码变化:', page);
    };

    // 处理搜索
    const handleSearch = (query: string) => {
      searchKeyword.value = query;
    };

    // 模拟远程搜索
    const fetchRemoteOptions = async (params: any) => {
      const { keyword } = params;
      remoteLoading.value = true;

      // 模拟异步请求
      return new Promise((resolve) => {
        setTimeout(() => {
          const filteredOptions = options.filter(item =>
            item.label.toLowerCase().includes(keyword.toLowerCase())
          );
          remoteOptions.value = filteredOptions;
          remoteLoading.value = false;
          resolve(filteredOptions);
        }, 1000);
      });
    };

    return {
      // Loading
      loading1,
      loading2,
      toggleLoading,
      openFullscreenLoading,
      handleConfirm,

      // Select
      selectValue1,
      selectValue2,
      selectValue3,
      selectValue4,
      selectValue5,
      selectValue6,
      options,
      optionsWithDesc,
      largeOptions,
      currentPage,
      handlePageChange,
      searchKeyword,
      handleSearch,
      remoteLoading,
      remoteOptions,
      fetchRemoteOptions
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

p {
  margin: 10px 0;
  font-size: 14px;
  color: var(--iip-text-color-secondary);
}
</style> 