# Custom radios

?> Background: :point_right: [transition](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition), [transform](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform)

<vuep template="#custom-radio"></vuep>

<script v-pre type="text/x-template" id="custom-radio">
<style>
  main {
    width: 100%;
    padding: 60px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    user-select: none;
    font: 14px / 1 Helvetica, sans-serif;
  }
  input[type="radio"] {
    position: absolute;
    clip: rect(0, 0, 0, 0);
  }
  input[type="radio"] + label {
    display: inline-block;
    height: 12px;
    line-height: 12px;
    /* 小写英文开头 */
    /* line-height: 10px; */
    cursor: pointer;
    position: relative;
    user-select: none;
  }
  input[type="radio"] + label:not(:nth-of-type(6)) {
    margin-top: 29px;
    margin-bottom: 29px;
  }
  input[type="radio"]:disabled + label {
    cursor: not-allowed;
    color: #999;
  }
  input[type="radio"] + label::before {
    content: "";
    display: inline-block;
    width: 10px; height: 10px;
    border-radius: 8px;
    vertical-align: top;
    margin-right: .2em;
    border: 1px solid #ccc;
    background-color: #fff;
    transition: border-color .2s ease-in-out, background-color .2s ease-in-out;
  }
  input[type="radio"]:not(:disabled) + label:hover::before {
    border-color: #b4a078;
  }
  input[type="radio"]:checked + label::before {
    border-color: #b4a078 !important;
    background-color: #b4a078;
  }
  input[type="radio"] + label::after {
    content: "";
    display: inline-block;
    width: 4px; height: 4px;
    background-color: #fff;
    border-radius: 4px;
    position: absolute;
    left: 4px; top: 50%;
    transform: translateY(-50%) scale(0);
    transition: transform .2s ease-in-out;
  }
  input[type="radio"]:checked + label::after {
    transform: translateY(-50%) scale(1);
    transition: transform .2s ease-in-out;
  }
  input[type="radio"]:disabled + label::before,
  input[type="radio"]:disabled.checked + label::before {
    background-color: #f2f2f2;
  }
  input[type="radio"]:disabled.checked + label::after {
    border-color: #ccc;
    background-color: #ccc;
    transform: translateY(-50%) scale(1);
  }
</style>
<template>
  <main>
    <input type="radio" id="radio0" name="radio">
    <label for="radio0">Vue</label>
    <input type="radio" id="radio1" name="radio" checked>
    <label for="radio1">React</label>
    <input type="radio" id="radio3" name="radio">
    <label for="radio3">Angular</label>
    <input type="radio" id="radio4" name="radio" disabled>
    <label for="radio4">disable</label>
    <input type="radio" id="radio5" name="radio" disabled class="checked">
    <label for="radio5">check disable</label>
  </main>
</template>
<script>  
</script>
</script>

> Greate user experience should always go first as a habit ~

### Browser Support

<iframe
  width="100%"
  height="493px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=transforms2d&amp;periods=future_2,future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>

<iframe
  width="100%"
  height="493px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-transitions&amp;periods=future_2,future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
