
# Blink

?> Background：:point_right: [animation-direction](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-direction)

The `animation-direction` Property has four values can be accepted. For the purpose of understanding its effect visiually and precisely, this document takes the example of the animation that changes from `#FFFFFF` to `#b4a078` and loop three times, which present the different effects of the different four values. See the following diagram.  
<div align="center"><img src="static/animation-direction.jpeg" width="60%" align="center"/></div><br />

<vuep template="#blink_tlp"></vuep>

<script v-pre type="text/x-template" id="blink_tlp">
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
    <span>animation-direction: default
    <code>normal</code></span><p>info~</p>
    <span>animation-direction: Reverse
    <code>alternate</code></span><p>warning~ warning~</p>
    <span>animation-direction: Reverse alternating
    <code>alternate-reverse</code></span><p>error~ error~ error~</p>
  </main>
</template>
<script>
</script>
</script>

> All the transitions should be animated.

### Browser Support

<iframe
  width="100%"
  height="436px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-animation&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
