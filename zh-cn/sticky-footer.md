
# 绝对底部（Sticky Footer）

?> 背景知识：:point_right: [calc()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/calc), [flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)

### 什么是“Sticky Footer”

所谓 `Sticky Footer` 是指一种网页效果，如果页面内容不足够长时，页脚紧贴在视口的最底部；如果内容足够长时，页脚紧跟在内容的下方。效果大致如图所示：

<div align="center"><img src="static/sticky-footer.jpeg" width="100%" align="center"/></div>

> 利用计算函数 `calc()` 计算（视窗高度 - 页头高度 - 页脚高度）赋予内容区最小高度

<vuep template="#sticky-calc"></vuep>

<script v-pre type="text/x-template" id="sticky-calc">
<style>
  main{
    width: 100%; height: 392px;
  }
  section input:checked ~ p{ 
    display: none
  }
  .main > header,
  .main > section,
  .main > footer{
    padding: .1em calc(50% - 329px);
    text-align: justify;
    hyphens: auto;
  }
  header{
    text-align: center;
  }
  section {
    box-sizing: border-box;
    min-height: calc(100% - 59px - 107px);
  }
  footer{
    color: white;
    background: #747e7f;
  }
</style>
<template>
  <main class="main">
    <header>
      <h1>Site Header</h1>
    </header>
    <section>
      <input id="con-1" type="checkbox" checked/>
      <label for="con-1"><b>Toggle contents</b></label>
      <p>A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.</p>
      <p>A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text.</p>
      <p>A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.</p>
    </section>
    <footer>
      <p>© 2018 LHammer</p>
      <p>CSS Tricks need to know for web developer.</p>
    </footer>
  </main>
</template>
<script>  
</script>
</script>

> Flexbox `display: flex`:thumbsup:

<vuep template="#sticky-flex"></vuep>

<script v-pre type="text/x-template" id="sticky-flex">
<style>
  main{
    width: 100%; height: 392px;
    display: flex;
    flex-direction: column;
  }
  section input:checked ~ p{ 
    display: none
  }
  .main > header,
  .main > section,
  .main > footer{
    padding: .1em calc(50% - 329px);
    text-align: justify;
    hyphens: auto;
  }
  header{
    text-align: center;
  }
  section {
    flex: 1;
  }
  footer{
    color: white;
    background: #747e7f;
  }
</style>
<template>
  <main class="main">
    <header>
      <h1>Site Header</h1>
    </header>
    <section>
      <input id="con-2" type="checkbox" />
      <label for="con-2"><b>Toggle contents</b></label>
      <p>A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.</p>
      <p>A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text.</p>
      <p>A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.A paragraph of filler text. La la la de dah de dah de dah de la.</p>
    </section>
    <footer>
      <p>© 2018 LHammer</p>
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

<iframe
  width="100%"
  height="480px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=flexbox&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
