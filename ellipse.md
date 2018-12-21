
# Ellipse

?> Background：:point_right: [border-radius](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius)

Generally speaking, we use the `border-radius` to achieve the rounding effect more often, In fact, `border-radius` is able to specify its semi-major and semi-short axes separately, only need to use "/" to split. We can easily implement common graphics such as semicircles, semi-ellipses, quarter circles, and quarter circles through this property.

<vuep template="#ellipse_tlp"></vuep>

<script v-pre type="text/x-template" id="ellipse_tlp">
<style>
  main {
    width: 100%;
    padding: 60px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  div {
    width: 200px; height: 150px;
    background: #b4a078;
    margin-bottom: 30px;
  }
  .ellipse:nth-of-type(1) {
    width: 300px; height: 150px; 
    border-radius: 50% / 100% 100% 0 0;
  }
  .ellipse:nth-of-type(2) {
    width: 150px; height: 150px;
    border-radius: 100% 0 0 0;
  }
  .ellipse:nth-of-type(3) {
    border-radius: 50% / 100% 100% 0 0;
  }
  .ellipse:nth-of-type(4) {
    width: 100px;
    border-radius: 100% 0 0 0;
  }
  .ellipse:nth-of-type(5) {
    width: 300px;
    border-radius: 50% / 0 100%;
  }
  .ellipse:nth-of-type(6) {
    width: 300px;
    border-radius: 50% / 100% 0;
  }
</style>
<template>
  <main>
    <div class="ellipse"></div>
    <div class="ellipse"></div>
    <div class="ellipse"></div>
    <div class="ellipse"></div>
    <div class="ellipse"></div>
    <div class="ellipse"></div>
  </main>
</template>
<script>  
</script>
</script>

### Browser Support

<iframe
  width="100%"
  height="458px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=border-radius&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
