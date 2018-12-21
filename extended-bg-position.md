
# Background position

?> Background：:point_right: [background-position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position), [background-origin](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-origin), [calc](https://developer.mozilla.org/zh-CN/docs/Web/CSS/calc)

<!-- 这个没有什么好说的，我们可以在`background`简写属性增加`bottom right`定位值来提供回退。 -->

<vuep template="#extended-bg-position"></vuep>

<script v-pre type="text/x-template" id="extended-bg-position">
<style>
  main{
    width: 100%;
    padding: 80px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  div{
    width: 229px; height: 139px;
    margin: auto;
    color: #f4f0ea;
    padding: 16px 29px 28px 20px;
    background: #b4a078 url('static/player_logo@2x.png') no-repeat bottom right / 78px 21px;
  }
  div:nth-of-type(1){
    background-position: right 29px bottom 28px;
  }
  div:nth-of-type(2){
    background-origin: content-box;
    margin: 29px 0; /* Vertical alignment for the mobile */
  }
  div:nth-of-type(3){
    background-position: calc(100% - 29px) calc(100% - 28px);
  }
</style>
<template>
  <main>
    <div class="block1">background-position scheme</div>
    <div class="block2">background-origin scheme</div>
    <div class="block3">calc scheme</div>
  </main>
</template>
<script>  
</script>
</script>

### Browser Support

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
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-background-offsets&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
