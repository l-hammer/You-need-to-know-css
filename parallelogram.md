
# Parallelograms

?> Background：:point_right: [transform](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform), [clip-path](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path)

<!-- In some cases, in order to avoid too many nesting of labels, it is much more convenient to use pseudo-elements to add backgrounds, borders, etc. to the elements. For example, in the picture below, you need to align the text to the left. When you cross the background, the padding of each background is the same as `padding`. This is

<div align="center" class="orderoptions"><img src="static/orderoptions.jpeg" width="100%" align="center"/></div> -->

<vuep template="#parallelogram"></vuep>

<script v-pre type="text/x-template" id="parallelogram">
<style>
  main{
    width: 100%;
    padding: 29px 0 0;
  }
  .diamond{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
  }
  .diamond > div{
    width: 150px;
    color: white;
    display: inherit;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .diamond:nth-of-type(1) > div{
    transform: skewX(-45deg);
    background: #b4a078;
  }
  .diamond:nth-of-type(1) > div > span{
    transform: skewX(45deg);
  }
  .diamond:nth-of-type(2) > div::before{
    content: "";
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    z-index: -1;
    transform: skewX(-45deg);
    background: #b4a078;
  }
  .diamond:nth-of-type(3) > div{
    width: 105px; height: 105px;
    border: 29px solid transparent;
    box-sizing: content-box;
  }
  .diamond:nth-of-type(3) > div::before{
    content: "";
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    z-index: -1;
    background: #b4a078;
    transform: rotate(45deg);
  }
  .diamond:nth-of-type(3){
    margin-bottom: 0;
    align-items: center;
    justify-content: space-around;
    border-bottom-color: transparent;
  }
  .diamond:nth-of-type(3) > img{
    width: 300px; height: 150px;
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    transition: 1s clip-path;
  }
  .diamond:nth-of-type(3) > img:hover{
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
</style>
<template>
  <main>
    <div class="diamond">
      <p>① nested element</p>
      <div><span>diamond</span></div>
    </div>
    <div class="diamond">
      <p>② pseudo element (recommended)</p>
      <div>diamond</div>
    </div>
    <div class="diamond">
      <div>diamond</div>
      <img src="static/dog2018.jpg" alt="">
    </div>
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
  src="https://caniuse.bitsofco.de/embed/index.html?feat=transforms2d&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>

<iframe
  width="100%"
  height="436px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-clip-path&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
