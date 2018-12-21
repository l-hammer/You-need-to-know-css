
# 闪烁效果

?> 背景知识：:point_right: [animation-direction](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-direction)

`animation-direction`属性接受的值共有四个，为了你能从视觉上直接理解其作用，我以下图一段从`#FFFFFF`变化到`#b4a078`并循环三次的动画为例，展示了这四个值各自对动画的作用效果。

<div align="center"><img src="static/animation-direction.jpeg" width="60%" align="center"/></div><br />

<vuep template="#blink"></vuep>

<script v-pre type="text/x-template" id="blink">
<style>
  main {
    width: 100%; height: 329px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .main p, .main span {
    width: 388px;
    padding: 3px 10px;
    border-radius: 5px;
    font-size: 14px;
  }
  p:nth-of-type(1) {
    background-color: #f4f4f5;
    color: #909399;
    animation: 1s blink-normal infinite step-end;
  }
  p:nth-of-type(2) {
    background-color: #fdf6ec;
    color: #e6a23c;
    animation: .5s blink-alternate infinite;
    animation-direction: alternate;
  }
  p:nth-of-type(3) {
    background: #fef0f0;
    color: #f56c6c;
    animation: .5s blink-alternate infinite;
    animation-direction: alternate-reverse;
  }
  @keyframes blink-normal {
    50% {
      color: transparent;
    }
  }
  @keyframes blink-alternate {
    to {
      color: transparent;
    }
  }
</style>
<template>
  <main class="main">
    <span>animation-direction: 默认<code>normal</code></span><p>info~</p>
    <span>animation-direction: 反向<code>alternate</code></span><p>warning~ warning~</p>
    <span>animation-direction: 反向交替<code>alternate-reverse</code></span><p>error~ error~ error~</p>
  </main>
</template>
<script>
</script>
</script>

> 一切的过度皆应该由动画来完成

### 浏览器支持

<iframe
  width="100%"
  height="436px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-animation&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
