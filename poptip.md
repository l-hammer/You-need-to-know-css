
# 气泡提示

?> 背景知识：:point_right: [filter](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter), [radial-gradient](https://developer.mozilla.org/zh-CN/docs/Web/CSS/radial-gradient), [border-image](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-image)

<vuep template="#poptip"></vuep>

<script v-pre type="text/x-template" id="poptip">
<style>
  main {
    width: 100%;
    padding: 99px 69px;
    display: flex;
    flex-wrap: wrap;
  }
  .cell {
    width: calc(33.33333% - 8px); height: 52px;
    text-align: center;
    line-height: 52px;
    border-radius: 8px;
    background: rgba(180,160,120,.1);
    cursor: pointer;
    position: relative;
  }
  .cell.empty {
    background: transparent;
    cursor: default;
    pointer-events: none;
  }
  .cell:not(:nth-of-type(3n)) {
    margin-right: 12px;
    margin-bottom: 12px;
  }
  .cell:hover {
    color: #b4a078;
    font-weight: 900;
  }
  .cell[class*=poptip--]::before {
    content: '';
    position: absolute;
    width: 0; height: 0;
    border: 6px solid transparent;
  }
  .cell[class*=poptip--]::after {
    content: attr(aria-controls);
    position: absolute;
    background: #b4a078;
    font-size: 12px;
    font-weight: normal;
    color: white;
    line-height: 12px;
    padding: 6px 12px;
    white-space: nowrap;
  }
  .cell[class*=poptip--top]::before {
    border-top-color: #b4a078;
  }
  .cell[class*=poptip--right]::before {
    border-right-color: #b4a078;
  }
  .cell[class*=poptip--bottom]::before {
    border-bottom-color: #b4a078;
  }
  .cell[class*=poptip--left]::before {
    border-left-color: #b4a078;
  }
  .cell[class*=poptip--top]::before {
    top: -10px; left: calc(50% - 6px);
  }
  .cell[class*=poptip--top]::after {
    top: -33px; left: 50%;
    transform: translateX(-50%);
  }
  .cell[class*=poptip--bottom]::before {
    bottom: -10px; left: calc(50% - 6px);
  }
  .cell[class*=poptip--bottom]::after {
    bottom: -33px; left: 50%;
    transform: translateX(-50%);
  }
  .cell[class*=poptip--left]::before {
    left: -10px; top: calc(50% - 6px);
  }
  .cell[class*=poptip--left]::after {
    right: 100%; top: 50%;
    margin-right: 9px;
    transform: translateY(-50%);
  }
  .cell[class*=poptip--right]::before {
    right: -10px; top: calc(50% - 6px);
  }
  .cell[class*=poptip--right]::after {
    left: 100%; top: 50%;
    margin-left: 9px;
    transform: translateY(-50%);
  }
</style>
<template>
  <main>
    <div class="cell poptip--top-left" aria-controls="top-left">top-left</div>
    <div class="cell poptip--top" aria-controls="top">top</div>
    <div class="cell poptip--top-right" aria-controls="top-right">top-right</div>
    <div class="cell poptip--left" aria-controls="left">left</div>
    <div class="cell empty"></div>
    <div class="cell poptip--right" aria-controls="right">right</div>
    <div class="cell poptip--bottom-left" aria-controls="bottom-left">bottom-left</div>
    <div class="cell poptip--bottom" aria-controls="bottom">bottom</div>
    <div class="cell poptip--bottom-right" aria-controls="bottom-right">bottom-right</div>
  </main>
</template>
<script>  
</script>
</script>

### 浏览器支持

<iframe src="https://caniuse.bitsofco.de/embed/index.html?feat=css-filters&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false" frameborder="0" width="100%" height="458px"></iframe>

<iframe src="https://caniuse.bitsofco.de/embed/index.html?feat=css-gradients&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false" frameborder="0" width="100%" height="436px"></iframe>

<iframe src="https://caniuse.bitsofco.de/embed/index.html?feat=border-image&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false" frameborder="0" width="100%" height="436px"></iframe>
