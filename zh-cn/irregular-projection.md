
# 不规则投影

?> 背景知识：:point_right: [filter](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter), [radial-gradient](https://developer.mozilla.org/zh-CN/docs/Web/CSS/radial-gradient), [border-image](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-image)

<vuep template="#irregular-projection"></vuep>

<script v-pre type="text/x-template" id="irregular-projection">
<style>
  main {
    width: 100%;
    padding: 60px 0 30px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .projection {
    width: 228px; height: 180px;
    margin-bottom: 29px;
    background: #b4a078;
    position: relative;
  }
  .row1 > .projection:nth-of-type(1) {
    border-radius: 5px;
    filter: drop-shadow(2px 2px 2px rgba(180,160,120,.9));
  }
  .row1 > .projection:nth-of-type(1)::before{
    content: '';
    position: absolute;
    width: 0; height: 0;
    top: 65px; right: -20px;
    border: 22px solid transparent;
    border-left-color: #b4a078;
    border-right-width: 0;
  }
  .row1 > .projection:nth-of-type(2) {
    background: transparent;
    border: 6px dotted #b4a078;
    filter: drop-shadow(2px 2px 2px rgba(180,160,120,.9));
  }
  .row2 > .projection:nth-of-type(1) {
    background: radial-gradient(circle at bottom right, transparent 29px, #b4a078 30px) bottom right;
    filter: drop-shadow(2px 2px 2px rgba(180,160,120,.9));
  }
  .row2 > .projection:nth-of-type(2) {
    border: 29px dotted #b4a078;
    border-image: 1 url('data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" fill="%23b4a078"> <polygon points="0,0 0,0 3,0 3,0 3,2 2,3 0,3 0,3"/> </svg>');
    filter: drop-shadow(2px 2px 2px rgba(180,160,120,.9));
    background-clip: padding-box;
  }
</style>
<template>
  <main>
    <div class="row1">
      <div class="projection"></div>
      <div class="projection"></div>
    </div>
    <div class="row2">
      <div class="projection"></div>
      <div class="projection"></div>
    </div>
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
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-filters&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>

<iframe
  width="100%"
  height="436px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-gradients&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>

<iframe
  width="100%"
  height="436px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=border-image&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
