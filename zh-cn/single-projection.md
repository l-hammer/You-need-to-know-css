
# 常见投影

?> 背景知识：:point_right: [box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow)

<vuep template="#single-projection"></vuep>

<script v-pre type="text/x-template" id="single-projection">
<style>
  main {
    width: 100%;
    padding: 20px 0 0 0;
  }
  .projection {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
  }
  .projection > div {
    width: 180px; height: 120px;
    background: rgba(180,160,120,.2);
  }
  .projection:not(:first-child:last-child) > div {
    border: 2px solid transparent;
    background-clip: content-box;
  }
  .projection:last-child {
    margin-bottom: 0;
    border-bottom: 0;
  }
  .projection:nth-of-type(1) > div {
    margin-left: -6px;
    box-shadow: 0 0 6px rgba(180,160,120,.8);
  }
  .projection:nth-of-type(2) > div {
    border-bottom: 0;
    box-shadow: 0px 6px 5px -5px rgba(180,160,120,.6);
  }
  .projection:nth-of-type(3) > div {
    border-right: 0;
    border-bottom: 0;
    box-shadow: 5px 5px 5px -4px rgba(180,160,120,.6);
  }
  .projection:nth-of-type(4) > div {
    border-right: 0;
    border-left: 0;
    box-shadow: 6px 0 5px -5px rgba(180,160,120,.6), -6px 0 5px -5px rgba(180,160,120,.6);
  }
  .projection:nth-of-type(5) > div {
    box-shadow: 0 0 0 1px rgba(180,160,120,.6);
  }
</style>
<template>
  <main>
    <div class="projection">
      <p>① 无偏移投影</p>
      <div></div>
    </div>
    <div class="projection">
      <p>② 单侧投影</p>
      <div></div>
    </div>
    <div class="projection">
      <p>③ 邻边投影</p>
      <div></div>
    </div>
    <div class="projection">
      <p>④ 两侧投影</p>
      <div></div>
    </div>
    <div class="projection">
      <p>⑤ 1px投影</p>
      <div></div>
    </div>
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
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-boxshadow&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
