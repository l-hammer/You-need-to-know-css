
# 无缝平滑效果

?> 背景知识：:point_right: [animation](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation)

<vuep template="#single-projection"></vuep>

<script v-pre type="text/x-template" id="single-projection">
<style>
  main {
    width: 100%; height: 329px;
    display: flex;
    background: url('./static/full-fire-cloud.jpg') repeat-x 0 center/auto 100%;
    animation: smooth 10s linear infinite;
    animation-play-state: running;
  }
  /* main:hover, main:focus {
    animation-play-state: running;
  } */
  @keyframes smooth {
    to {
      background-position: 1970px center;
    }
  }     
</style>
<template>
  <main class="main"></main>
</template>
<script>
</script>
</script>

!> 上图为两张左右对称的图片拼接而成，效果不是很完美，在开发中，只需使用一张左右可以无缝对接（类似360°全景图）的图片即可更完美。

### 浏览器支持

<iframe
  width="100%"
  height="436px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-animation&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
