
# 1px线条

?> 背景知识：:point_right: [box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow), [transform](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform)

<vuep template="#one-pixel-line"></vuep>

<script v-pre type="text/x-template" id="one-pixel-line">
<style>
  main {
    width: 100%;
  }
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
  div > h5 {
    width: 229px;
  }
  div > span {
    width: 229px;
    position: relative;
  }
  div > span::after {
    content: '';
    width: 229px;
    position: absolute;
    bottom: 0; left: 0;
  }
  div:nth-of-type(1) span::after {
    box-shadow: 0 0 0 1px;
    transform: scaleY(.5) translateZ(0);
  }
  div:nth-of-type(1) span::after {
    /* @media (min-resolution: 2dppx) {
      box-shadow: 0 0 0 .5px;
    }
    @media (min-resolution: 3dppx) {
      box-shadow: 0 0 0 .333333px;
    } */
  }
  @media (min-resolution: 2dppx) {
    main > div.one-pixel-line:nth-of-type(1) span::after {
      box-shadow: 0 0 0 .5px;
    }
  }
  @media (min-resolution: 3dppx) {
    main > div.one-pixel-line:nth-of-type(1) span::after {
      box-shadow: 0 0 0 .333333px;
    }
  }
</style>
<template>
  <main class="main">
    <div class="one-pixel-line">
      <h5>1️⃣ box-shadow</h5>
      <span></span>
    </div>
  </main>
</template>
<script>
</script>
</script>

### 浏览器支持

<iframe src="https://caniuse.bitsofco.de/embed/index.html?feat=css-boxshadow&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false" frameborder="0" width="100%" height="409px"></iframe>

<iframe src="https://caniuse.bitsofco.de/embed/index.html?feat=transforms3d&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false" frameborder="0" width="100%" height="453px"></iframe>
