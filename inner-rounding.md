
# Inner rounding

?> Background：:point_right: [box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow), [outline](https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline)

We know that `box-shadow` will stick to the `border-radius` rounded edges, but the stroke `outline` will not fit the rounded edge `border-radius`, we can combine them. Using `box-shadow` to fill the gap created by the stroke `outline` to perform the effect we want.

!>About setting the value of expansion radius? Assuming that the radius of the rounded `border-radius` is `r`, according to the Pythagorean theorem, the minimum value of the expansion radius should be equal to `(√2−1)r ~= 3.314`, and the maximum value cannot exceed the stroke width, which is `6px`.

<vuep template="#inner-rounding_tpl"></vuep>

<script v-pre type="text/x-template" id="inner-rounding_tpl">
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

### Browser Support

<iframe
  width="100%"
  height="436px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-boxshadow&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
