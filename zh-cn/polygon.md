
# 其他多边形

?> 背景知识：:point_right: [box-sizing](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing), [transform](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform)

> *{ box-sizing: border-box; }

<vuep template="#polygon"></vuep>

<script v-pre type="text/x-template" id="polygon">
<style>
  main {
    width: 100%;
    padding: 60px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  main > div.item {
    min-width: 199px; height: 200px;
    padding: 20px;
    border: 1px solid #f5f5f5;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  main > div.item:not(:nth-child(3n)):not(:last-child) {
    border-right-width:0;
  }
  main .item > div {
    box-sizing: content-box;
  }
  .trapezoid {
    width: 80px; height: 0;
    border: 40px solid #fff;
    border-top: 0 solid;
    border-bottom: 80px solid #b4a078;
  }
  .star-5-points {
    width: 0; height: 0;
    position: relative;
    margin: 50px 0;
    border: 80px solid rgba(0,0,0,0);
    border-top: 0 solid;
    border-bottom: 56px solid #b4a078;
    transform: rotateZ(35deg);
  }
  .star-5-points::before {
    content: "";
    width: 0; height: 0;
    position: absolute;
    top: -36px; left: -52px;
    border: 24px solid rgba(0,0,0,0);
    border-top: 0 solid;
    border-bottom: 64px solid #b4a078;
    transform: rotateZ(-35deg);
  }
  .star-5-points::after {
    content: "";
    width: 0; height: 0;
    position: absolute;
    top: 3px; left: -86px;
    border: 80px solid rgba(0,0,0,0);
    border-top: 0 solid;
    border-bottom: 56px solid #b4a078;
    transform: rotateZ(-70deg);
  }
  .ribbon {
    width: 0; height: 80px;
    border: 40px solid #b4a078;
    border-top: 0 solid;
    border-bottom: 28px solid rgba(0,0,0,0);
  }
  .diamond {
    width: 50px; height: 0;
    position: relative;
    margin: 20px 0 82px;
    border: 25px solid rgba(0,0,0,0);
    border-top-width: 0;
    border-bottom-color: #b4a078;
  }
  .diamond::after {
    content: "";
    width: 0; height: 0;
    position: absolute;
    top: 25px; left: -25px;
    border: 50px solid rgba(0,0,0,0);
    border-top: 70px solid #b4a078;
    border-bottom-width: 0;
  }
  .heart {
    content: "";
    display: block;
    width: 100px;
    min-height: 80px;
    position: relative;
    transform-origin: 50% 50% 0;
  }
  .heart:before {
    content: "";
    display: block;
    width: 50px; height: 80px;
    position: absolute;
    top: 0; left: 50px;
    border-radius: 50px 50px 0 0;
    background: #b4a078;
    transform: rotateZ(-45deg);
    transform-origin: 0 100% 0;
  }
  .heart:after {
    content: "";
    display: block;
    width: 50px; height: 80px;
    position: absolute;
    top: 0; left: 0;
    border-radius: 50px 50px 0 0;
    background: #b4a078;
    transform: rotateZ(45deg);
    transform-origin: 100% 100% 0;
  }
  .army-chevron {
    width: 200px; height: 60px;
    position: relative;
    margin: 0 0 6px;
    padding: 12px;
    text-align: center;
  }
  .army-chevron::before {
    content: "";
    width: 51%; height: 100%;
    position: absolute;
    top: 0; left: 0;
    background: #b4a078;
    transform: skewY(6deg);
  }
  .army-chevron::after {
    content: "";
    width: 50%; height: 100%;
    position: absolute;
    top: 0; right: 0;
    background: #b4a078;
    transform: skewY(-6deg);
  }
</style>
<template>
  <main>
    <div class="item"><div class="trapezoid"></div></div>
		<div class="item"><div class="star-5-points"></div></div>
		<div class="item"><div class="ribbon"></div></div>
		<div class="item"><div class="diamond"></div></div>
		<div class="item"><div class="heart"></div></div>
    <div class="item"><div class="army-chevron"></div></div>
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
