
# 全背景下等宽内容居中

?> 背景知识：:point_right: [calc()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/calc)

> 将元素左右padding设置为父元素宽度的50%减去等宽内容的一半即可，无需设置width～

<vuep template="#fluidFixed"></vuep>

<script v-pre type="text/x-template" id="fluidFixed">
<style>
  main{
    width: 100%;
  }
  h2.title {
    color: white;
    margin-top: 1em;
    margin-bottom: 1em;
  }
  header{
    background: #b4a078;
    color: white;
  }
  footer{
    background: rgba(180,160,120,.05);
  }
  .main > header,
  .main > section,
  .main > footer{
      padding: .1em calc(50% - 329px);
      text-align: justify;
      hyphens: auto;
  }
</style>
<template>
  <main class="main">
    <header>
      <h2 class="title">You-need-to-know-css-tricks</h2>
    </header>
    <section>
      <p>A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.</p>
    </section>
    <footer>
      <p>&copy; 2018 LHammer</p>
      <p>CSS Tricks need to know for web developer.</p>
    </footer>
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
  src="https://caniuse.bitsofco.de/embed/index.html?feat=calc&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
