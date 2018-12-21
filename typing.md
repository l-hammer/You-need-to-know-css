
# Typing

?> Background：:point_right: [animation](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation), [animation-timing-function](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-timing-function)

<vuep template="#typing_tlp"></vuep>

<script v-pre type="text/x-template" id="typing_tlp">
<style>
  main {
    width: 100%; height: 229px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    display: inline-block;
    width: 21ch;
    font: bold 200% Consolas, Monaco, monospace;   /*Monospaced font*/
    overflow: hidden;
    white-space: nowrap;
    font-weight: 500;
    border-right: 1px solid transparent;
    animation: typing 10s steps(21), caret .5s steps(1) infinite;
  }
  @keyframes typing{
    from {
        width: 0;
    }
  }
  @keyframes caret{
    50% { border-right-color: currentColor}
  }
</style>
<template>
  <main class="main">
    <span>You-need-to-know-css!</span>
  </main>
</template>
<script>
</script>
</script>

!> This method is only for **single line & equal width**

### Browser Support

<iframe
  width="100%"
  height="436px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-animation&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
