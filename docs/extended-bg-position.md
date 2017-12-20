## 背景定位

?> 背景知识：:point_right: [background-position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-position), [background-origin](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-origin), [calc](https://developer.mozilla.org/zh-CN/docs/Web/CSS/calc)



<vuep template="#demo1"></vuep>

<script v-pre type="text/x-template" id="demo1">
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
    background: #b4a078 url('_images/player_logo@2x.png') no-repeat bottom right / 78px 21px;
  }
  div:nth-of-type(1){
    background-position: right 29px bottom 28px;
  }
  div:nth-of-type(2){
    background-origin: content-box;
  }
  div:nth-of-type(3){
    background-position: calc(100% - 29px) calc(100% - 28px);
  }
</style>
<template>
  <main>
    <div class="block1">background-position方案</div>
    <div class="block2">background-origin方案</div>
    <div class="block3">calc方案</div>
  </main>
</template>
<script>  
</script>
</script>
