
# 边框内圆角

?> 背景知识：:point_right: [box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow), [outline](https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline)

我们知道`box-shadow`是会紧贴`border-radius`圆角边的，但是，描边`outline`并不会与圆角边`border-radius`贴合，我们可以将两者组合，通过`box-shadow`去填补描边`outline`所产生的间隙来达到我们想要的效果。

!>关于扩张半径的取值？假设圆角`border-radius`的半径为`r`,根据勾股定理，扩张半径的最小值应等于`(√2−1)r ~= 3.314`，最大值不能超过描边宽度，即`6px`。

<vuep template="#inner-rounding"></vuep>

<script v-pre type="text/x-template" id="inner-rounding">
<style>
  main{
    width: 100%;
    padding: 60px 80px 80px;
  }
  div{
    width: 209px;
    margin: 29px auto;
    padding: 8px 16px;
    border-radius: 8px;
    background: #f4f0ea;
    outline: 6px solid #b4a078;
  }
  input{
    margin-left: calc(50% - 45px);
  }
  input:checked ~ div{
    box-shadow: 0 0 0 5px #b4a078;
  }
</style>
<template>
  <main>
    <input id="ck" type="checkbox" checked/>
    <label for="ck">box-shadow</label>
    <div>A paragraph of filler text. La la la de dah de dah de dah de la.</div>
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
