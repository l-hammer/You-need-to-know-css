
# Multiple borders

?> Background：:point_right: [box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow), [outline](https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline),[outline-offset](https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline-offset)

It is believed that many people have used `box-shadow` widely, it can be used to add various shadow effects to the elements. Conversely, it is brought back to our mind only when we need to implement shadows. Actually, `box-shadow` also accepts the fourth argument serve as shadow expansion radius. When we want to set the expansion radius only, zero offset, zero blur, its effect is actually equivalent to a solid line "**border**".

`box-shadow` can only simulate solid border effects. In some cases, we may need to generate a dashed border effect. We can use the stroke `outline` similar to `border` and the corresponding stroke offset `outline-offset` to achieve.

<vuep template="#multiple-borders_tpl"></vuep>

<script v-pre type="text/x-template" id="multiple-borders_tpl">
<style>
  main{
    width: 100%;
    padding: 0 10vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
  div:nth-of-type(1) {
    width: 60px; height: 60px;
    border-radius: 50%;
    background: #fafafa;
    margin: 105px 29px;
    box-shadow: 0 0 0 10px #E8E2D6, 0 0 0 20px #E1D9C9,  
                0 0 0 30px #D9CFBB, 0 0 0 40px #D2C6AE,  
                0 0 0 50px #CABCA0, 0 0 0 60px #C3B393,
                0 0 0 70px #BBA985, 0 0 0 80px #B4A078;
  }
  div:nth-of-type(2){
    width: 200px; height: 120px;
    background: #efebe9;
    border: 5px solid #B4A078;
    outline: #B4A078 dashed 1px;
    outline-offset: -10px;
    margin-bottom: 20px;
  }
</style>
<template>
  <main>
    <div></div>
    <div></div>
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
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-boxshadow&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>