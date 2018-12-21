
# 圆与椭圆

?> 背景知识：:point_right: [border-radius](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius)

通常我们一般使用`border-radius`来时实现圆角效果，其实`border-radius`是可以单独指定它的半长轴和半短轴，只需要用“/”分割即可。我们可以通过这个属性轻松实现半圆、半椭圆、四分之一圆及四分之一圆等常见的图形。

<vuep template="#ellipse"></vuep>

<script v-pre type="text/x-template" id="ellipse">
<style>
  main {
    width: 100%;
    padding: 60px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  div {
    width: 200px; height: 150px;
    background: #b4a078;
    margin-bottom: 30px;
  }
  .ellipse:nth-of-type(1) {
    width: 300px; height: 150px; 
    border-radius: 50% / 100% 100% 0 0;
  }
  .ellipse:nth-of-type(2) {
    width: 150px; height: 150px;
    border-radius: 100% 0 0 0;
  }
  .ellipse:nth-of-type(3) {
    border-radius: 50% / 100% 100% 0 0;
  }
  .ellipse:nth-of-type(4) {
    width: 100px;
    border-radius: 100% 0 0 0;
  }
  .ellipse:nth-of-type(5) {
    width: 300px;
    border-radius: 50% / 0 100%;
  }
  .ellipse:nth-of-type(6) {
    width: 300px;
    border-radius: 50% / 100% 0;
  }
</style>
<template>
  <main>
    <div class="ellipse"></div>
    <div class="ellipse"></div>
    <div class="ellipse"></div>
    <div class="ellipse"></div>
    <div class="ellipse"></div>
    <div class="ellipse"></div>
  </main>
</template>
<script>  
</script>
</script>

### 浏览器支持

<iframe
  width="100%"
  height="458px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=border-radius&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
