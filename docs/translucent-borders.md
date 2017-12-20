## 半透明边框

?> 背景知识：:point_right: [background-clip](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-clip)

默认情况下，背景的颜色会延伸至边框下层，这意味着我们设置的透明边框效果会被覆盖掉，在css3中，我们可以通过设置`background-clip:padding-box`来改变背景的默认行为，达到我们想要的效果。

<vuep template="#demo1"></vuep>

<script v-pre type="text/x-template" id="demo1">
<style>
  main{
    width: 100%;
    padding: 60px 80px 80px;
    background: #4fc08d;
  }
  div{
    padding: 12px;
    margin: 20px auto;
    background: white;
    background-clip: padding-box;
    border: 10px solid hsla(0, 0%, 100%, .5);
  }
  input:checked ~ div{
    background-clip: border-box;
  }
</style>
<template>
  <main>
    <input id="ck" type="checkbox" />
    <label for="ck">border-box(默认)</label>
    <div>A paragraph of filler text. La la la de dah de dah de dah de la.</div>
  </main>
</template>
<script>  
</script>
</script>
