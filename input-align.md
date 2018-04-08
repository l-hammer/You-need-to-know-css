
# 输入框完美居中

?> 背景知识：:point_right: [animation](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation), [animation-timing-function](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-timing-function)

<vuep template="#input-align"></vuep>

<script v-pre type="text/x-template" id="input-align">
<style>
  main {
    width: 100%; height: 229px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ::-webkit-input-placeholder {
    line-height: 1.375em;
  }
  input {
    outline: none;
    color: #666;
    font-size: .9em;
    padding: .5em;
    border-radius: .2em;
    border: 1px solid #e3e3e3;
    -webkit-appearance: none;
  }
  input:hover {
    border: 1px solid #b4a078;
  }
  input:focus {
    border: 1px solid #b4a078;
    box-shadow: 0 0 0 2px rgba(180, 160, 120, 0.2);
  }
</style>
<template>
  <main class="main">
    <input type="text" placeholder="请填写手机号或姓名">
  </main>
</template>
<script>
</script>
</script>

### 浏览器支持

<iframe src="https://caniuse.bitsofco.de/embed/index.html?feat=css-animation&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false" frameborder="0" width="100%" height="436px"></iframe>
