
# 切角效果

?> 背景知识：:point_right: [gradient](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient), [clip-path](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path)

<vuep template="#bevel-corners"></vuep>

<script v-pre type="text/x-template" id="bevel-corners">
<style>
  main{
    width: 100%;
    padding: 60px 0;
  }
  .bevel-corners{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  .bevel-corners > div{
    width: 249px;
    color: #FFF;
    padding: 1.2em 1.8em;
    hyphens: auto;
    text-align: justify;
    background: #b4a078;
  }
  .bevel-corners > p{
    width: 116px;;
  }
  .bevel-corners:nth-of-type(1) > div{
    background: linear-gradient(45deg, transparent 12px, #b4a078 13px) bottom left, 
                linear-gradient(135deg, transparent 12px, #b4a078 13px) top left, 
                linear-gradient(-135deg, transparent 12px, #b4a078 13px) top right, 
                linear-gradient(-45deg, transparent 12px, #b4a078 13px) bottom right;
    background-size: 51% 51%;
    background-repeat: no-repeat;
  }
  .bevel-corners:nth-of-type(2) > div{
    background: radial-gradient(circle at bottom left, transparent 15px, #b4a078 16px) bottom left, 
                radial-gradient(circle at top left, transparent 15px, #b4a078 16px) top left, 
                radial-gradient(circle at top right, transparent 15px, #b4a078 16px) top right, 
                radial-gradient(circle at bottom right, transparent 15px, #b4a078 16px) bottom right;
    background-size: 51% 51%;
    background-repeat: no-repeat;
  }
  .bevel-corners:nth-of-type(3) > div{
    padding: 0 9px;
    border: 18px solid transparent;
    border-image: 1 url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" fill="%23b4a078"><polygon points="0,1 1,0 2,0 3,1 3,2 2,3 1,3 0,2"/> </svg>');
    background-clip: padding-box;
  }
  .bevel-corners:nth-of-type(4) > div{
    clip-path: polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px);
    transition: 1s clip-path;
  }
  .bevel-corners:nth-of-type(4):hover > div{
    clip-path: polygon(0 0, 0 0, 100% 0, 100% 0, 100% 100%, 100% 100%, 0 100%, 0 100%);
  }
</style>
<template>
  <main>
    <div class="bevel-corners">
      <p>① linear-gradient</p>
      <div>A paragraph of filler text.La la la de dah de dah de dah de la.La la la de dah de dah de dah de la.La la la de dah de dah de dah de la.</div>
    </div>
    <div class="bevel-corners">
      <p>② radial-gradient</p>
      <div>A paragraph of filler text.La la la de dah de dah de dah de la.La la la de dah de dah de dah de la.La la la de dah de dah de dah de la.</div>
    </div>
    <div class="bevel-corners">
      <p>③ 内联SVG</p>
      <div>A paragraph of filler text.La la la de dah de dah de dah de la.La la la de dah de dah de dah de la.La la la de dah de dah de dah de la.</div>
    </div>
    <div class="bevel-corners">
      <p>④ clip-path</p>
      <div>A paragraph of filler text.La la la de dah de dah de dah de la.La la la de dah de dah de dah de la.La la la de dah de dah de dah de la.</div>
    </div>
  </main>
</template>
<script>  
</script>
</script>

### 浏览器支持

<iframe src="https://caniuse.bitsofco.de/embed/index.html?feat=css-gradients&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false" frameborder="0" width="100%" height="436px"></iframe>

<iframe src="https://caniuse.bitsofco.de/embed/index.html?feat=css-clip-path&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false" frameborder="0" width="100%" height="436px"></iframe>
