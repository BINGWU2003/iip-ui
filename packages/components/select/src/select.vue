<template>
  <el-select
    v-model="currentValue"
    :multiple="multiple"
    :disabled="disabled"
    :size="size"
    :clearable="clearable"
    :collapse-tags="collapseTags"
    :collapse-tags-tooltip="collapseTagsTooltip"
    :max-collapse-tags="maxCollapseTags"
    :placeholder="placeholder"
    :filterable="filterable"
    :allow-create="allowCreate"
    :filter-method="filterMethod"
    :remote="remote"
    :remote-method="remoteMethod"
    :loading="loading"
    :remote-show-suffix="remoteShowSuffix"
    :no-data-text="noDataText"
    :reserve-keyword="reserveKeyword"
    :default-first-option="defaultFirstOption"
    :teleported="teleported"
    :persistent="persistent"
    :automatic-dropdown="automaticDropdown"
    :clear-icon="clearIcon"
    :fit-input-width="fitInputWidth"
    :suffix-icon="suffixIcon"
    :tag-type="tagType"
    :validate-event="validateEvent"
    :placement="placement"
    :popper-class="popperClass"
    :popper-options="popperOptions"
    :effect="effect"
    :class="[customClass]"
    @change="handleChange"
    @visible-change="handleVisibleChange"
    @remove-tag="handleRemoveTag"
    @clear="handleClear"
    @blur="handleBlur"
    @focus="handleFocus"
  >
    <template v-if="$slots.prefix" #prefix>
      <slot name="prefix"></slot>
    </template>
    
    <template v-if="$slots.empty" #empty>
      <slot name="empty"></slot>
    </template>
    
    <template v-if="!optionsSource">
      <slot></slot>
    </template>
    
    <template v-else>
      <el-option
        v-for="item in displayOptions"
        :key="item[valueKey]"
        :label="item[labelKey]"
        :value="item[valueKey]"
        :disabled="item.disabled"
      >
        <slot name="option" :item="item">
          <div class="iip-select-option">
            <span>{{ item[labelKey] }}</span>
            <span v-if="showDescription && item.description" class="iip-select-option-desc">{{ item.description }}</span>
          </div>
        </slot>
      </el-option>
      
      <div v-if="pagination && totalCount > pageSize" class="iip-select-pagination">
        <el-pagination
          :current-page="currentPage"
          :page-size="pageSize"
          :total="totalCount"
          layout="prev, pager, next"
          @current-change="handlePageChange"
        />
      </div>
    </template>
  </el-select>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch, PropType, nextTick } from 'vue';
import { ElSelect, ElOption, ElPagination } from 'element-plus';
import type { SelectOptionItem } from './types';

export default defineComponent({
  name: 'IipSelect',
  components: {
    ElSelect,
    ElOption,
    ElPagination
  },
  props: {
    // 继承 Element Plus Select 的属性
    modelValue: {
      type: [String, Number, Boolean, Object, Array],
      default: ''
    },
    multiple: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default'
    },
    clearable: {
      type: Boolean,
      default: true
    },
    collapseTags: {
      type: Boolean,
      default: false
    },
    collapseTagsTooltip: {
      type: Boolean,
      default: false
    },
    maxCollapseTags: {
      type: Number,
      default: 1
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    filterable: {
      type: Boolean,
      default: false
    },
    allowCreate: {
      type: Boolean,
      default: false
    },
    filterMethod: {
      type: Function,
      default: null
    },
    remote: {
      type: Boolean,
      default: false
    },
    remoteMethod: {
      type: Function,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    remoteShowSuffix: {
      type: Boolean,
      default: false
    },
    noDataText: {
      type: String,
      default: '无数据'
    },
    reserveKeyword: {
      type: Boolean,
      default: true
    },
    defaultFirstOption: {
      type: Boolean,
      default: false
    },
    teleported: {
      type: Boolean,
      default: true
    },
    persistent: {
      type: Boolean,
      default: true
    },
    automaticDropdown: {
      type: Boolean,
      default: false
    },
    clearIcon: {
      type: [String, Object],
      default: 'CircleClose'
    },
    fitInputWidth: {
      type: Boolean,
      default: false
    },
    suffixIcon: {
      type: [String, Object],
      default: 'ArrowDown'
    },
    tagType: {
      type: String,
      default: 'info'
    },
    validateEvent: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'bottom-start'
    },
    popperClass: {
      type: String,
      default: ''
    },
    popperOptions: {
      type: Object,
      default: () => ({})
    },
    effect: {
      type: String,
      default: 'light'
    },
    
    // 自定义扩展属性
    customClass: {
      type: String,
      default: ''
    },
    // 数据源
    optionsSource: {
      type: Array as PropType<SelectOptionItem[]>,
      default: null
    },
    // 值字段
    valueKey: {
      type: String,
      default: 'value'
    },
    // 标签字段
    labelKey: {
      type: String,
      default: 'label'
    },
    // 是否显示描述信息
    showDescription: {
      type: Boolean,
      default: false
    },
    // 是否开启分页
    pagination: {
      type: Boolean,
      default: false
    },
    // 页大小
    pageSize: {
      type: Number,
      default: 10
    },
    // 总条数
    totalCount: {
      type: Number,
      default: 0
    },
    // 当前页
    page: {
      type: Number,
      default: 1
    },
    // 默认选中第一项
    selectFirstByDefault: {
      type: Boolean,
      default: false
    },
    // 是否自动加载远程数据
    autoLoad: {
      type: Boolean,
      default: true
    },
    // 远程加载方法
    fetchOptions: {
      type: Function,
      default: null
    }
  },
  emits: [
    'update:modelValue',
    'change',
    'visible-change',
    'remove-tag',
    'clear',
    'blur',
    'focus',
    'page-change',
    'search',
    'fetch-success',
    'fetch-error'
  ],
  setup(props, { emit, slots }) {
    const currentValue = ref(props.modelValue);
    const currentPage = ref(props.page);
    const searchKeyword = ref('');
    const isInitialized = ref(false);
    
    // 计算显示的选项
    const displayOptions = computed(() => {
      if (!props.optionsSource) return [];
      
      let options = [...props.optionsSource];
      
      // 如果开启分页，则进行分页处理
      if (props.pagination) {
        const start = (currentPage.value - 1) * props.pageSize;
        const end = start + props.pageSize;
        return options.slice(start, end);
      }
      
      return options;
    });
    
    // 监听 modelValue 变化
    watch(
      () => props.modelValue,
      (newVal) => {
        currentValue.value = newVal;
      }
    );
    
    // 处理值变化
    const handleChange = (val: any) => {
      emit('update:modelValue', val);
      emit('change', val);
    };
    
    // 处理下拉框显示状态变化
    const handleVisibleChange = (visible: boolean) => {
      emit('visible-change', visible);
      
      // 当下拉框打开且启用了自动加载，且有远程加载方法时，加载数据
      if (visible && props.autoLoad && props.fetchOptions && !isInitialized.value) {
        loadRemoteOptions();
        isInitialized.value = true;
      }
    };
    
    // 处理移除标签
    const handleRemoveTag = (tag: any) => {
      emit('remove-tag', tag);
    };
    
    // 处理清空
    const handleClear = () => {
      emit('clear');
    };
    
    // 处理失焦
    const handleBlur = (event: Event) => {
      emit('blur', event);
    };
    
    // 处理聚焦
    const handleFocus = (event: Event) => {
      emit('focus', event);
    };
    
    // 处理页码变化
    const handlePageChange = (page: number) => {
      currentPage.value = page;
      emit('page-change', page);
      
      // 如果有远程加载方法，则重新加载数据
      if (props.fetchOptions) {
        loadRemoteOptions(searchKeyword.value, page);
      }
    };
    
    // 自定义过滤方法
    const filterMethod = (query: string) => {
      if (props.filterMethod) {
        return props.filterMethod(query);
      }
      
      searchKeyword.value = query;
      emit('search', query);
      
      // 如果有远程加载方法，则重新加载数据
      if (props.remote && props.fetchOptions) {
        loadRemoteOptions(query, currentPage.value);
      }
      
      return true;
    };
    
    // 远程加载方法
    const remoteMethod = (query: string) => {
      if (props.remoteMethod) {
        return props.remoteMethod(query);
      }
      
      searchKeyword.value = query;
      emit('search', query);
      
      // 如果有远程加载方法，则重新加载数据
      if (props.fetchOptions) {
        loadRemoteOptions(query, currentPage.value);
      }
    };
    
    // 加载远程数据
    const loadRemoteOptions = async (keyword = '', page = 1) => {
      if (!props.fetchOptions) return;
      
      try {
        const params = {
          keyword,
          page,
          pageSize: props.pageSize
        };
        
        const result = await props.fetchOptions(params);
        emit('fetch-success', result);
      } catch (error) {
        emit('fetch-error', error);
      }
    };
    
    // 初始化时，如果设置了自动加载且有远程加载方法，则加载数据
    if (props.autoLoad && props.fetchOptions) {
      nextTick(() => {
        loadRemoteOptions('', currentPage.value);
        isInitialized.value = true;
      });
    }
    
    // 如果设置了默认选中第一项，且有选项，且当前值为空，则选中第一项
    watch(
      () => displayOptions.value,
      (newOptions) => {
        if (
          props.selectFirstByDefault &&
          newOptions.length > 0 &&
          (!currentValue.value || (Array.isArray(currentValue.value) && currentValue.value.length === 0))
        ) {
          const firstValue = newOptions[0][props.valueKey];
          currentValue.value = props.multiple ? [firstValue] : firstValue;
          handleChange(currentValue.value);
        }
      },
      { immediate: true }
    );
    
    return {
      currentValue,
      currentPage,
      displayOptions,
      handleChange,
      handleVisibleChange,
      handleRemoveTag,
      handleClear,
      handleBlur,
      handleFocus,
      handlePageChange,
      filterMethod,
      remoteMethod
    };
  }
});
</script>

<style lang="scss" scoped>
.iip-select-option {
  display: flex;
  flex-direction: column;
  
  .iip-select-option-desc {
    font-size: 12px;
    color: #999;
    margin-top: 4px;
  }
}

.iip-select-pagination {
  padding: 8px 0;
  text-align: center;
  border-top: 1px solid #eee;
}
</style> 