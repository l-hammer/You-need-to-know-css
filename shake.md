
# Shake

?> Background：:point_right: [animation](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation)

> See [Baidu](https://www.baidu.com/s?wd=%E6%8A%96%E5%8A%A8&rsv_spt=1&rsv_iqid=0xe9f337870004f38a&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_sug3=11&rsv_sug1=15&rsv_sug7=101&rsv_sug2=0&inputT=3789&rsv_sug4=4507)

<vuep template="#shakeBaidu"></vuep>

<script v-pre type="text/x-template" id="shakeBaidu">
<style>
  main {
    width: 100%; height: 229px;
    display: flex;
  }
  main > span {
    background: #b4a078;
    color: white;
    margin: auto;
    padding: .3em 1em .5em;
    border-radius: 3px;
    box-shadow: 0 0 .5em #b4a078;
    animation: shake-baidu 2s ease 0s infinite;
    animation-play-state: paused;
  }
  .main:hover > span,
  .main > span:hover {
    animation-play-state: running;
  }
  @keyframes shake-baidu {
    from    { transform: rotate(0deg); }
    4%      { transform: rotate(5deg); }
    12.5%   { transform: rotate(-5deg); }
    21%     { transform: rotate(5deg); }
    29%     { transform: rotate(-5deg); }
    37.5%   { transform: rotate(5deg); }
    46%     { transform: rotate(-5deg); }
    50%,to  { transform: rotate(0deg); }
  }
</style>
<template>
  <main class="main">
    <span>You-need-to-know-css!</span>
  </main>
</template>
<script>
</script>
</script>

> See [CSShake](https://github.com/elrumordelaluz/csshake)

<vuep template="#CSShake"></vuep>

<script v-pre type="text/x-template" id="CSShake">
<style>
  main {
    width: 100%; height: 229px;
    display: flex;s
  }
  main > span {
    background: #b4a078;
    color: white;
    margin: auto;
    padding: .3em 1em .5em;
    border-radius: 3px;
    box-shadow: 0 0 .5em #b4a078;
    animation: shake .1s ease-in-out infinite;
    animation-play-state: paused;
  }
  .main:hover > span,
  .main > span:hover {
    animation-play-state: running;
  }
  @keyframes shake {
    2% { transform: translate(0.5px, 2.5px) rotate(1.5deg); }
    4% { transform: translate(0.5px, -1.5px) rotate(0.5deg); }
    6% { transform: translate(-0.5px, -1.5px) rotate(-0.5deg); }
    8% { transform: translate(2.5px, -0.5px) rotate(0.5deg); }
    10% { transform: translate(2.5px, 1.5px) rotate(0.5deg); }
    12% { transform: translate(2.5px, -0.5px) rotate(0.5deg); }
    14% { transform: translate(-1.5px, -1.5px) rotate(-0.5deg); }
    16% { transform: translate(-0.5px, 0.5px) rotate(0.5deg); }
    18% { transform: translate(-0.5px, 2.5px) rotate(1.5deg); }
    20% { transform: translate(2.5px, -1.5px) rotate(1.5deg); }
    22% { transform: translate(2.5px, -1.5px) rotate(0.5deg); }
    24% { transform: translate(0.5px, -1.5px) rotate(-0.5deg); }
    26% { transform: translate(-1.5px, 1.5px) rotate(0.5deg); }
    28% { transform: translate(-1.5px, -0.5px) rotate(1.5deg); }
    30% { transform: translate(-0.5px, -0.5px) rotate(1.5deg); }
    32% { transform: translate(-0.5px, -0.5px) rotate(-0.5deg); }
    34% { transform: translate(0.5px, -0.5px) rotate(0.5deg); }
    36% { transform: translate(-1.5px, 1.5px) rotate(1.5deg); }
    38% { transform: translate(2.5px, 1.5px) rotate(1.5deg); }
    40% { transform: translate(1.5px, -1.5px) rotate(0.5deg); }
    42% { transform: translate(1.5px, -1.5px) rotate(1.5deg); }
    44% { transform: translate(1.5px, 2.5px) rotate(1.5deg); }
    46% { transform: translate(1.5px, -1.5px) rotate(0.5deg); }
    48% { transform: translate(-0.5px, -1.5px) rotate(0.5deg); }
    50% { transform: translate(-1.5px, -1.5px) rotate(1.5deg); }
    52% { transform: translate(1.5px, -0.5px) rotate(1.5deg); }
    54% { transform: translate(-0.5px, -0.5px) rotate(0.5deg); }
    56% { transform: translate(2.5px, 0.5px) rotate(0.5deg); }
    58% { transform: translate(-0.5px, 0.5px) rotate(1.5deg); }
    60% { transform: translate(0.5px, 1.5px) rotate(-0.5deg); }
    62% { transform: translate(-0.5px, -1.5px) rotate(0.5deg); }
    64% { transform: translate(-0.5px, -1.5px) rotate(0.5deg); }
    66% { transform: translate(1.5px, -1.5px) rotate(-0.5deg); }
    68% { transform: translate(0.5px, 1.5px) rotate(-0.5deg); }
    70% { transform: translate(0.5px, 2.5px) rotate(-0.5deg); }
    72% { transform: translate(2.5px, -1.5px) rotate(1.5deg); }
    74% { transform: translate(-1.5px, -0.5px) rotate(0.5deg); }
    76% { transform: translate(-1.5px, -1.5px) rotate(1.5deg); }
    78% { transform: translate(0.5px, 0.5px) rotate(1.5deg); }
    80% { transform: translate(0.5px, -0.5px) rotate(1.5deg); }
    82% { transform: translate(-0.5px, -1.5px) rotate(1.5deg); }
    84% { transform: translate(2.5px, -0.5px) rotate(1.5deg); }
    86% { transform: translate(0.5px, 0.5px) rotate(-0.5deg); }
    88% { transform: translate(1.5px, 2.5px) rotate(-0.5deg); }
    90% { transform: translate(-1.5px, 2.5px) rotate(1.5deg); }
    92% { transform: translate(-0.5px, -1.5px) rotate(-0.5deg); }
    94% { transform: translate(1.5px, -0.5px) rotate(0.5deg); }
    96% { transform: translate(-1.5px, 2.5px) rotate(1.5deg); }
    98% { transform: translate(2.5px, 2.5px) rotate(0.5deg); }
    0%, 100% { transform: translate(0, 0) rotate(0); } 
  }
</style>
<template>
  <main class="main">
    <span>You-need-to-know-css!</span>
  </main>
</template>
<script>
</script>
</script>

### Browser Suport

<iframe
  width="100%"
  height="436px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-animation&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
