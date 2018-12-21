
# 环形文字

?> 背景知识：:point_right: [SVG](https://developer.mozilla.org/zh-CN/docs/Web/SVG), [transition](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition)

<vuep template="#circular-text"></vuep>

<script v-pre type="text/x-template" id="circular-text">
<style>
  main {
    width: 289px; height: 289px;
    margin: 80px auto;
    font-size: 12px;
  }
  main svg {
    overflow: visible;
    animation: circular-text-rotate 5s linear paused infinite;
  }
  main svg:hover {
    animation-play-state: running;
  }
  main path {
    fill: none;
  }
  main text {
    fill: #b4a078;
  }
  @keyframes circular-text-rotate {
    to {
      transform: rotate(1turn);
    }
  }
</style>
<template>
  <main>
    <svg viewBox="0 0 100 100">
        <path d="M 0,50 a 50,50 0 1,1 0,1 z" id="circle" />
        <text>
          <textPath xlink:href="#circle">
            You-need-to-know-css-tricks-You-need-to-know-css-tricks-You-
          </textPath>
        </text>
    </svg>
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
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-transitions&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
