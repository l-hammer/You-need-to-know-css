
# 条纹背景

?> 背景知识：:point_right: [gradient](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient), [linear-gradient](https://developer.mozilla.org/zh-CN/docs/Web/CSS/linear-gradient), [radial-gradient](https://developer.mozilla.org/zh-CN/docs/Web/CSS/radial-gradient), [repeating-linear-gradient](https://developer.mozilla.org/zh-CN/docs/Web/CSS/repeating-linear-gradient)

<!-- 线性渐变`linear-gradient`是CSS3非常重要的一个模块，但在真实的开发中，我们并不常用，在这里，我举两个自己经常会用到的场景，分别是`进度条`和`不规则卡片`。 -->

## 进度条

<!-- !> 假设设计给了你这样一张图片，在你说完 **shit** 之后，你会怎么去做？`改图？` `NONONO~` -->

<div align="center"><img src="static/progress.jpg" width="600" align="center"/></div>

> Work overtime today.

<vuep template="#stripes-background-linear"></vuep>

<script v-pre type="text/x-template" id="stripes-background-linear">
<style>
  main {
    width: 100%;
    padding: 80px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around; 
  }
  .progress-outer {
    width: 60%; height: 12px;
    border-radius: 8px;
    overflow: hidden;
    position: relative; 
  }	
  .progress-enter {  
    height: inherit;
    background: rgba(180, 160, 120, .2); 
  }
  .progress-bg {
    width: 60%; height: inherit;
    border-radius: 6px; 
    background: repeating-linear-gradient(-45deg, #D9CFBB  25%, #C3B393 0, #C3B393 50%,
					#D9CFBB 0, #D9CFBB 75%, #C3B393 0);
    background-size: 16px 16px;
    animation: panoramic 20s linear infinite;
  }
  @keyframes panoramic{
    to {
      background-position: 200% 0;
    }
  }
</style>
<template>
  <main>
    <div class="progress-outer">  <!--更好的扩展-->
      <div class="progress-enter">
        <div class="progress-bg"></div>
      </div>
      <!-- <span>60%</span> -->
    </div>
  </main>
</template>
<script>  
</script>
</script>

## 不规则卡片

<!-- !> 假设设计又给了你这样一张图片，在你说完 **shit and fu*k** 之后，你又会怎么去做？ -->

<div align="center"><img src="static/coupon.jpeg" width="100%" align="center"/></div>

<!-- **Q:** 卡片划过的阴影暂先不考虑，你可能会说，这和条纹有毛关系啊？

**A:** 其实卡片顶部凹进来的弧形我们可以通过径向渐变`radial-gradient`来实现 -->

> Today's work is seriously overtime.

<vuep template="#stripes-background-radial"></vuep>

<script v-pre type="text/x-template" id="stripes-background-radial">
<style>
  main {
    width: 100%;
    padding: 80px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around; 
  }
  .coupon-card {
    width: 200px;
    height: 120px;
    background-image: radial-gradient(circle at 100px -8px, transparent 20px, #b4a078 21px);
  }
</style>
<template>
  <main>
    <div class="coupon-card"></div>
  </main>
</template>
<script>  
</script>
</script>

> 示例中为了实现:hover时有贴边的阴影，所以采用了`radial-gradient`。如果你有更好的办法，欢迎留言~

------

### 推荐

《CSS揭秘》作者[Lea Verou](http://lea.verou.me/about/)使用CSS3渐变实现的图案库[Patterns Gallery](http://verou.me/css3patterns/#)，还有它的SVG版本[SVG Patterns Gallery](https://philiprogers.com/svgpatterns/)，有兴趣的可以去研究一下作者的实现原理。

[Patterns Gallery](https://verou.me/css3patterns ':include :type=iframe width=100% height=429px')

### 浏览器支持

<iframe
  width="100%"
  height="436px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-gradients&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
