
# 毛玻璃效果

?> 背景知识：:point_right: [hsla/rgba](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value)

<vuep template="#demo1"></vuep>

<script v-pre type="text/x-template" id="demo1">
<style>
  main{
    width: 100%;
    margin: auto;
    padding: 59px 29px;
    border-radius: .3em;
    text-shadow: 0 1px 1px hsla(0, 0%, 100%, .3); 
    box-shadow: 0 0 0 1px hsla(0, 0%, 100%, .3) inset, 0 .3em 1em rgba(0, 0, 0, 0.12);
    font: 150%/1.6 Baskerville, Palatino, serif;
  }
  main, main > div::before {
    background: url("./static/city-night.jpg") fixed 0 / cover;
  }
  main > div::before{
    content: "";
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0; 
    z-index: -1; 
    filter: blur(10px);
    margin: -30px;
  }
  main > div{
    font-style: italic;
    color: #000;
    padding: 30px;
    hyphens: auto;
    background: hsla(0,0%,100%,.5);
    overflow: hidden;
    position: relative;
  }
  main > div cite{
    font-style: normal;
  }
</style>
<template>
  <main class="main">
    <div>
      “The only way to get rid of a temptation is to yield to it. Resist it, and your soul grows sick with longing for the things it has forbidden to itself, with desire for what its monstrous laws have made monstrous and unlawful.”
      <footer>——
        <cite>Oscar Wilde, The Picture of Dorian Gray</cite>
      </footer>
    </div>
  </main>
</template>
<script>  
</script>
</script>

### 浏览器支持

<iframe src="https://caniuse.bitsofco.de/embed/index.html?feat=css3-colors&amp;periods=future_2,future_1,current,past_1,past_2,past_3&amp;accessible-colours=false" frameborder="0" width="100%" height="493px"></iframe>

<iframe src="https://caniuse.bitsofco.de/embed/index.html?feat=css-filters&amp;periods=future_2,future_1,current,past_1,past_2,past_3&amp;accessible-colours=false" frameborder="0" width="100%" height="458px"></iframe>
