# 自定义复选框

?> 背景知识：:point_right: [transition](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition), [transform](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform)

<vuep template="#custom-checkbox"></vuep>

<script v-pre type="text/x-template" id="custom-checkbox">
<style>
  main {
    width: 100%;
    padding: 60px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    user-select: none;
    font: 14px / 1 Helvetica, sans-serif;
  }
  input[type="checkbox"] {
    position: absolute;
    clip: rect(0, 0, 0, 0);
  }
  input[type="checkbox"] + label {
    cursor: pointer;
    position: relative;
    line-height: 12px;
    user-select: none;
  }
  input[type="checkbox"] + label:not(:nth-of-type(1)) {
    margin-top: 29px;
    margin-bottom: 29px;
  }
  input[type="checkbox"]:checked + label{
    color: #b4a078;
  }
  input[type="checkbox"]:disabled + label {
    cursor: not-allowed;
    color: #999;
  }
  input[type="checkbox"] + label::before{
    content: "";
    display: inline-block;
    width: 10px; height: 10px;
    border-radius: 2px;
    vertical-align: top;
    margin-right: .2em;
    border: 1px solid #ccc;
    background-color: #fff;
    transition: border-color .2s ease-in-out, background-color .2s ease-in-out;
  }
  input[type="checkbox"]:not(:disabled) + label:hover::before{
    border-color: #b4a078;
  }
  input[type="checkbox"] + label::after{
    content: "";
    display: inline-block;
    width: 3px; height: 7px;
    border: 1px solid #fff;
    border-top: 0;
    border-left: 0;
    position: absolute;
    left: 4px; top: 1px;
    transform: rotate(45deg) scale(0);
    transition: all .2s ease-in-out;
  }
  input[type="checkbox"]:checked + label::before{
    border-color: #b4a078 !important;
    background-color: #b4a078;
  }
  input[type="checkbox"]:checked + label::after{
    transform: rotate(45deg) scale(1);
    transition: all .2s ease-in-out;
  }
  input[type="checkbox"]:disabled + label::before,
  input[type="checkbox"]:disabled.checked + label::before{
    background-color: #f2f2f2;
  }
  input[type="checkbox"]:disabled.checked + label::after{
    border-color: #ccc;
    transform: rotate(45deg) scale(1);
  }
</style>
<template>
  <main>
    <input type="checkbox" id="awesome1" checked>
    <label for="awesome1">Awesome</label>
    <input type="checkbox" id="awesome11">
    <label for="awesome11">Iconfont</label>
    <input type="checkbox" id="awesome12">
    <label for="awesome12">Lhammer</label>
    <input type="checkbox" id="awesome2" disabled>
    <label for="awesome2">禁用</label>
    <input type="checkbox" id="awesome3" disabled class="checked">
    <label for="awesome3">选中禁用</label>
  </main>
</template>
<script>  
</script>
</script>

> 创造良好的用户体验应当养成一种习惯~

### 浏览器支持

<iframe
  width="100%"
  height="493px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=transforms2d&amp;periods=future_2,future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>

<iframe
  width="100%"
  height="493px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-transitions&amp;periods=future_2,future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
