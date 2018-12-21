
# 扩大可点击区域

?> 背景知识：:point_right: [box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow), [filter](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter)

<vuep template="#extend-hit-area"></vuep>

<script v-pre type="text/x-template" id="extend-hit-area">
<style>
  main {
    width: 100%;
    padding: 60px 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    user-select: none;
  }
  main > div {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  main > div:nth-of-type(4) {
    height: 81px;
    padding-top: 8px;
  }
  main > div > a.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 66px; height: 66px;
    color: #fff;
    font-weight: 600px;
    border-radius: 50%;
    cursor: pointer;
    border: 8px solid transparent;
    background: #b4a078 padding-box;
  }
  main > div > a.btn:active {
    background: rgba(180,160,120,.8) padding-box;
  }
  main > div > span {
    display: flex;
    justify-content: center;
    font-size: 13px;
    color: #999;
  }
  main > div:nth-of-type(2) a.btn {
    color: #b4a078;
    background: #FFF;
    box-shadow: 0 0 0 1px #b4a078 inset;
  }
  main > div:nth-of-type(2) a.btn:active {
    background: rgba(180,160,120,.1) padding-box;
  }
  main > div:nth-of-type(3) a.btn {
    box-shadow: 0 0 0 1px #b4a078 inset;
    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, .3))
  }
  main > div:nth-of-type(4) a.btn {
    position: relative;
    width: 50px; height: 50px;
    border: 0;
    background-clip: border-box;
    box-shadow: 1px 1px 2px rgba(0,0,0,.3);
  }
  main > div:nth-of-type(4) a.btn::before {
    content: "";
    position: absolute;
    top: -8px; right: -8px;
    bottom: -8px; left: -8px;
  }
  main > div:nth-of-type(5) a.btn {
    color: #b4a078;
    background-color: #FFF;
    box-shadow: 0 0 0 1px #b4a078 inset;
    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, .3));
  }
  main > div:nth-of-type(5) a.btn:active {
    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0));
  }
</style>
<template>
  <main>
    <div>
      <a class="btn">+</a><span>normal</span>
    </div>
    <div>
      <a class="btn">+</a><span>border</span>
    </div>
    <div>
      <a class="btn">+</a><span>shadow filter</span>
    </div>
    <div>
      <a class="btn">+</a><span>shadow :before</span>
    </div>
    <div>
      <a class="btn">+</a><span>border shadow</span>
    </div>
  </main>
</template>
<script>  
</script>
</script>

> 创造良好的用户体验应当养成一种习惯~

### 浏览器支持

<iframe
  width="100%"
  height="493px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-filters&amp;periods=future_2,future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>

<iframe
  width="100%"
  height="471px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-boxshadow&amp;periods=future_2,future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
