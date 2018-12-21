
# Stripe background

?> Background：:point_right: [gradient](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient), [linear-gradient](https://developer.mozilla.org/zh-CN/docs/Web/CSS/linear-gradient), [radial-gradient](https://developer.mozilla.org/zh-CN/docs/Web/CSS/radial-gradient), [repeating-linear-gradient](https://developer.mozilla.org/zh-CN/docs/Web/CSS/repeating-linear-gradient)

Linear gradient `linear-gradient` is a very important module of CSS3, but in real development, they are not commonly used. Here, I will give two scenarios that I often use, namely `progress bar` and ` Irregular card`

## progress bar

<!-- !> Assume you have one ui to implement from ux，after saying **shit**, what will you do? `change style？` `NONONO~` -->

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
    <div class="progress-outer">  <!--better extension-->
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

## Irregular card

<!-- !> Assume you got a design from ux again，after saying **shit and fu*k**, what's your next step? -->

<div align="center"><img src="static/coupon.jpeg" width="100%" align="center"/></div>

<!-- **Q:** The shadow that the card has crossed is not considered for this time. You might say that what does it has the fucking something with the stripes.

**A:** Actually, the curved shape of the top of the card can be achieved by the radial gradient `radial-gradient` -->

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

> In the example above, to achieve: a shadow of the welt effect added when hovering, so we apply the `radial-gradient`. If you have better propose, welcome to leave a message ~

------

### Recommendation

《CSS Secrets》author [Lea Verou](http://lea.verou.me/about/) uses the CSS3 gradient to implement the pattern library [Patterns Gallery](http://verou.me/css3patterns/#)，and its SVG version [SVG Patterns Gallery](https://philiprogers.com/svgpatterns/), if you are interested, it would be very helpful to research the author's implementation principle.

[Patterns Gallery](https://verou.me/css3patterns ':include :type=iframe width=100% height=429px')

### Browser Support

<iframe
  width="100%"
  height="436px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-gradients&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
