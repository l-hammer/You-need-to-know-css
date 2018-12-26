
# 弹性过度

?> 背景知识：:point_right: [animation](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation), [transition](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition)

一切的过度皆应该由动画来完成

> `animation`方案 :thumbsup:

<vuep template="#elastic-animation"></vuep>

<script v-pre type="text/x-template" id="elastic-animation">
<style>
  main {
    width: 100%; height: 229px;
    display: flex;
  }
  label {
    margin: auto;
  }
  input {
    display: block;
    width: 229px;
    padding: .8em;
    outline: none;
    border: 1px solid #e3e3e3;
    border-radius: 2px;
  }
  input:focus,
  input:hover {
    border-color: #b4a078;
  }
  input:not(:placeholder-shown) {
    border-color: #be4141;
    box-shadow: 0 0 0 2px rgba(255, 100, 97, 0.2);
  }
  input:not(:placeholder-shown) + .poptip {
    color: #be4141;
  }
  input:valid {
    border-color: #b4a078;
    box-shadow: 0 0 0 2px rgba(180, 160, 120, 0.2);
  }
  input:valid + .poptip {
    color: unset;
  }
  input:not(:focus) + .poptip {
    transform: scale(0);
    animation: elastic-dec .25s;
  }
  
  input:focus + .poptip {
    transform: scale(1);
    animation: elastic-grow .45s;
  }
  .poptip {
    display: inline-block;
    width: 236px;
    font-size: 13px;
    padding: .6em;
    background: #fafafa;
    position: relative;
    margin-left: -3px;
    margin-top: 3px;
    border-radius: 2px;
    filter: drop-shadow(0 0 1px rgba(0, 0, 0, .23456));
    transform-origin: 15px -6px;
  }
  .poptip::before {
    content: "";
    position: absolute;
    top: -6px; left: 10px;
    border: 9px solid transparent;
    border-bottom-color: #fafafa;
    border-top-width: 0;
  }
  @keyframes elastic-grow {
    from {
        transform: scale(0);
    }
    70% {
        transform: scale(1.1);
        animation-timing-function: cubic-bezier(.1, .25, .1, .25);
    }
  }
  @keyframes elastic-dec {
    from {
        transform: scale(1);
    }
    to {
        transform: scale(0);
        animation-timing-function: cubic-bezier(.25, .1, .25, .1);
    }
  }
</style>
<template>
  <main class="main">
    <label>
      <input
        required
        type="text"
        id="username"
        autocomplete="off"
        placeholder="请输入内容"
        pattern="^\w+$"/>
      <span class="poptip">仅支持字母、数字和下划线组合！!</span>
    </label>
  </main>
</template>
<script>  
</script>
</script>

> 三次贝塞尔`cubic-bezier` + `transition`方案

<vuep template="#elastic-transtion"></vuep>

<script v-pre type="text/x-template" id="elastic-transtion">
<style>
  main {
    width: 100%; height: 229px;
    display: flex;
  }
  label {
    margin: auto;
  }
  input {
    display: block;
    width: 229px;
    padding: .8em;
    outline: none;
    border: 1px solid #e3e3e3;
    border-radius: 2px;
  }
  input:focus,
  input:hover {
    border-color: #b4a078;
  }
  input:not(:placeholder-shown) {
    border-color: #be4141;
    box-shadow: 0 0 0 2px rgba(255, 100, 97, 0.2);
  }
  input:not(:placeholder-shown) + .poptip {
    color: #be4141;
  }
  input:valid {
    border-color: #b4a078;
    box-shadow: 0 0 0 2px rgba(180, 160, 120, 0.2);
  }
  input:valid + .poptip {
    color: unset;
  }
  input:not(:focus) + .poptip {
    transform: scale(0);
    transition: transform .25s cubic-bezier(.25, .1, .25, .1);
  }
  input:focus + .poptip {
    transform: scale(1);
    transition: transform .4s cubic-bezier(.29, .15, .5, 1.46);
  }
  .poptip {
    display: inline-block;
    width: 236px;
    font-size: 13px;
    padding: .6em;
    background: #fafafa;
    position: relative;
    margin-left: -3px;
    margin-top: 3px;
    border-radius: 2px;
    filter: drop-shadow(0 0 1px rgba(0, 0, 0, .23456));
    transform-origin: 15px -6px;
  }
  .poptip::before {
    content: "";
    position: absolute;
    top: -6px; left: 10px;
    border: 9px solid transparent;
    border-bottom-color: #fafafa;
    border-top-width: 0;
  }
</style>
<template>
  <main class="main">
    <label>
      <input
        required
        type="text"
        id="username"
        autocomplete="off"
        placeholder="请输入内容"
        pattern="^\w+$"/>
      <span class="poptip">仅支持字母、数字和下划线组合！!</span>
    </label>
  </main>
</template>
<script>  
</script>
</script>

三次贝塞尔曲线`cubic-bezier`主要是为`animation`生成速度曲线的函数，语法是`cubic-bezier(<x1>, <y1>, <x2>, <y2>)`，更多请参考：[Lea Verou](http://lea.verou.me/about/)的图形化工具[cubic-bezier](http://cubic-bezier.com/#)

### 浏览器支持

<iframe
  width="100%"
  height="458px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=transforms2d&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>

<iframe
  width="100%"
  height="436px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-animation&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
