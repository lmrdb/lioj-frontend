<template>
  <div id="addQuestionView"></div>
  <a-form :model="form" label-align="left">
    <a-form-item field="answer" label="答案">
      <MdEditor />
    </a-form-item>
    <a-form-item field="content" label="题目内容">
      <MdEditor />
    </a-form-item>
    <a-form-item field="title" label="标题">
      <a-input v-model="form.title" placeholder="输入标题" />
    </a-form-item>
    <a-form-item field="tags" label="标签">
      <a-input-tag v-model="form.tags" placeholder="输入标签" allow-clear />
    </a-form-item>
    <a-form-item label="题目限制" :content-flex="false" :merge-props="false">
      <a-space direction="vertical" style="min-width: 480px">
        <a-form-item field="judgeConfig.timeLimit" label="时间限制">
          <a-input-number
            v-model="form.judgeConfig.timeLimit"
            placeholder="请输入时间限制"
          />
        </a-form-item>
        <a-form-item field="judgeConfig.memoryLimit" label="内存限制">
          <a-input-number
            v-model="form.judgeConfig.memoryLimit"
            placeholder="请输入内存限制"
          />
        </a-form-item>
        <a-form-item field="judgeConfig.stackLimit" label="堆栈限制">
          <a-input-number
            v-model="form.judgeConfig.stackLimit"
            placeholder="请输入堆栈限制"
          />
        </a-form-item>
      </a-space>
    </a-form-item>
    <a-form-item
      label="测试用例配置"
      :content-flex="false"
      :merge-props="false"
    >
    </a-form-item>
    <a-space direction="vertical" fill style="margin: 0 auto">
      <a-form-item
        v-for="(judgeCaseItem, index) of form.judgeCase"
        :key="index"
        no-style
      >
        <a-space direction="vertical" style="min-width: 480px">
          <a-form-item
            :field="`form.judgeCase[${index}].input`"
            :label="`输入用例-${index}`"
            :key="index"
          >
            <a-input
              v-model="judgeCaseItem.input"
              placeholder="请输入测试输入用例"
            />
          </a-form-item>
          <a-form-item
            :field="`form.judgeCase[${index}].input`"
            :label="`输出用例-${index}`"
            :key="index"
          >
            <a-input
              v-model="judgeCaseItem.output"
              placeholder="请输入测试输出用例"
            />
          </a-form-item>
        </a-space>

        <a-button
          status="danger"
          @click="handleDelete(index)"
          :style="{ marginLeft: '10px' }"
          >删除
        </a-button>
      </a-form-item>
      <a-button
        @click="handleAdd"
        type="outline"
        status="success"
        style="max-width: 120px"
        >新增测试用例
      </a-button>
      <a-button type="primary" style="min-width: 200px; margin-top: 32px"
        >提交</a-button
      >
    </a-space>
  </a-form>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import MdEditor from "@/components/MdEditor.vue";

const form = reactive({
  answer: "答案",
  content: "内容",
  judgeCase: [
    {
      input: "1 2",
      output: "3 4",
    },
  ],
  judgeConfig: {
    memoryLimit: 1000,
    stackLimit: 1000,
    timeLimit: 1000,
  },
  tags: ["标签"],
  title: "题目",
});
/**
 * 新增测试用例
 */
const handleAdd = () => {
  form.judgeCase.push({
    input: "",
    output: "",
  });
};
/**
 * 删除测试用例
 * @param index
 */
const handleDelete = (index: number) => {
  form.judgeCase.splice(index, 1);
};
</script>

<style scoped>
#addQuestionView {
}
</style>
