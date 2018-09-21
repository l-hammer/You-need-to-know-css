
# 输入框完美居中

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
