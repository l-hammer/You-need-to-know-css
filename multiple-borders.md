## 多重边框

?> 背景知识：:point_right: [box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow), [outline](https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline),[outline-offset](https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline-offset)

`box-shadow`相信很多人都已经用透了，可用来给元素添加各种阴影效果，反过来，也只有我们需要实现阴影时才会想起它，其实，`box-shadow`还接受第四个参数作为阴影扩张半径，当我们只设置扩张半径时，零偏移，零模糊，产生的效果其实相当于一条实线“**边框**”。

`box-shadow`只能模拟实线边框效果，某些情况下，我们可能需要生成虚线的边框效果，我们可以通过类似于`border`的描边`outline`和对应的描边偏移`outline-offset`来实现。
<vuep template="#demo1"></vuep>

<script v-pre type="text/x-template" id="demo1">
<style>
  main{
    width: 100%;
    min-height: 459px;
    padding: 20px 10vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
  div:nth-of-type(1) {
    width: 60px; height: 60px;
    border-radius: 50%;
    background: #fafafa;
    box-shadow: 0 0 0 10px #efebe9, 0 0 0 20px #d7ccc8, 
                0 0 0 30px #bcaaa4, 0 0 0 40px #a1887f,  
                0 0 0 50px #8d6e63, 0 0 0 60px #795548,  
                0 0 0 70px #6d4c41, 0 0 0 80px #5d4037;
  }
  div:nth-of-type(2){
    width: 200px; height: 120px;
    background: #efebe9;
    border: 5px solid #4e342e;
    outline: #4e342e dashed 1px;
    outline-offset: -10px;
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

### 浏览器支持

<iframe src="//caniuse.bitsofco.de/embed/index.html?feat=css-boxshadow&amp;periods=future_2,future_1,current,past_1,past_2,past_3" frameborder="0" width="100%" height="496px"></iframe>