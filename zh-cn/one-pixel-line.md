
# 1px 线/边

?> 背景知识：:point_right: [box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow), [transform](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform), [@media](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media)

> `box-shadow` + `transform` 实现 1px 线条

<vuep template="#one-pixel-line"></vuep>

<script v-pre type="text/x-template" id="one-pixel-line">
<style>
  main {
    width: 100%;
    padding: 52px 29px;
    display: flex;
    justify-content: center;
  }
  span.one-pixel-line {
    width: 229px;
    position: relative;
  }
  span.one-pixel-line::after {
    content: '';
    width: 229px;
    position: absolute;
    bottom: 0; left: 0;
    box-shadow: 0 0 0 1px #b4a078;
    transform-origin: 0 bottom;
    transform: scaleY(.5) translateZ(0);
  }
  @media (min-resolution: 2dppx) {
    span.one-pixel-line.shadow::after {
      box-shadow: 0 0 0 .5px #b4a078;
    }
  }
  @media (min-resolution: 3dppx) {
    span.one-pixel-line.shadow::after {
      box-shadow: 0 0 0 .333333px #b4a078;
    }
  }
</style>
<template>
  <main class="main">
    <span class="one-pixel-line shadow"></span>
  </main>
</template>
<script>
</script>
</script>

> `border` + `伪元素` + `transform` 实现 1px 独立边框 :thumbsup:

<vuep template="#one-pixel-line-border"></vuep>

<script v-pre type="text/x-template" id="one-pixel-line-border">
<style>
  main {
    width: 100%;
    padding: 52px 29px;
    display: flex;
    justify-content: center;
  }
  span.one-pixel-line {
    display: block;
    width: 229px; height: 229px;
    position: relative;
  }
  span.one-pixel-line.right,
  span.one-pixel-line.bottom,
  span.one-pixel-line.left {
    margin-left: -229px;
  }
  span.one-pixel-line::before,
  span.one-pixel-line::after {
    content: "";
    display: block;
    position: absolute;
    transform-origin: 0 0;
  }
  /* top line */
  span.one-pixel-line.top::before {
    width: 100%;
    top: 0; left: 0;
    border-top: 1px solid #b4a078;
    transform-origin: 0 top;
  }
  @media (min-resolution: 2dppx) {
    span.one-pixel-line.top::before {
      width: 200%;
      transform: scale(.5) translateZ(0);
    }
  }
  @media (min-resolution: 3dppx) {
    span.one-pixel-line.top::before {
      width: 300%;
      transform: scale(.333333) translateZ(0);
    }
  }
  /* right line */
  span.one-pixel-line.right::after {
    height: 100%;
    top: 0; right: 0;
    border-right: 1px solid #b4a078;
    transform-origin: right 0;
  }
  @media (min-resolution: 2dppx) {
    span.one-pixel-line.right::after {
      height: 200%;
      transform: scale(.5) translateZ(0);
    }
  }
  @media (min-resolution: 3dppx) {
    span.one-pixel-line.right::after {
      height: 300%;
      transform: scale(.333333) translateZ(0);
    }
  }
  /* bottom line */
  span.one-pixel-line.bottom::after {
    width: 100%;
    bottom: 0; left: 0;
    border-bottom: 1px solid #b4a078;
    transform-origin: 0 bottom;
  }
  @media (min-resolution: 2dppx) {
    span.one-pixel-line.bottom::after {
      width: 200%;
      transform: scale(.5) translateZ(0);
    }
  }
  @media (min-resolution: 3dppx) {
    span.one-pixel-line.bottom::after {
      width: 300%;
      transform: scale(.333333) translateZ(0);
    }
  }
  /* left line */
  span.one-pixel-line.left::before {
    height: 100%;
    top: 0; left: 0;
    border-left: 1px solid #b4a078;
    transform-origin: 0 left;
  }
  @media (min-resolution: 2dppx) {
    span.one-pixel-line.left::before {s
      height: 200%;
      transform: scale(.5) translateZ(0);
    }
  }
  @media (min-resolution: 3dppx) {
    span.one-pixel-line.left::before {
      height: 300%;
      transform: scale(.333333) translateZ(0);
    }
  }
</style>
<template>
  <main class="main">
    <span class="one-pixel-line top"></span>
    <span class="one-pixel-line right"></span>
    <span class="one-pixel-line bottom"></span>
    <span class="one-pixel-line left"></span>
  </main>
</template>
<script>
</script>
</script>

### 浏览器支持

<iframe
  width="100%"
  height="432px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-media-resolution&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>

<iframe
  width="100%"
  height="409px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-boxshadow&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>

<iframe
  width="100%"
  height="453px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=transforms3d&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
