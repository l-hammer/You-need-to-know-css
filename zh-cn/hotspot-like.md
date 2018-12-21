
# 其他多边形

?> 背景知识：:point_right: [box-sizing](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing), [transform](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform)

> *{ box-sizing: border-box; }

<vuep template="#hotspot-like"></vuep>

<script v-pre type="text/x-template" id="hotspot-like">
<style>
  main{
    width: 100%;
    padding: 60px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .like {
    width: 100px; height: 100px;
    background: url("https://cssanimation.rocks/images/posts/steps/heart.png") no-repeat;
    background-position: 0 0;
    cursor: pointer;
    transition: background-position 1s steps(28);
    transition-duration: 0s;
  }
  .like:active {
    transition-duration: 1s;
    background-position: -2800px 0;
  }
</style>
<template>
  <main>
    <div class="like"></div>
  </main>
</template>
<script>  
</script>
</script>

### 浏览器支持

<iframe
  width="100%"
  height="436px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css3-boxsizing&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>

<iframe
  width="100%"
  height="480px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=transforms3d&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
