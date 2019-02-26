
### Custom switch selector

?> Background: :point_right: [transition](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition), [Pseudo-elements](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Pseudo-classes_and_pseudo-elements#%E4%BC%AA%E5%85%83%E7%B4%A0)

Similar to custom checkboxes or custom radio buttons, they use a hidden `input(:checked)` element + an associated `label` element to simulate the switch selector with the `label` element and its pseudo-elements. Use the `:checked` property of `input` to simulate whether the `switch` state is enabled.

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
    font: 12px / 1 Helvetica, sans-serif;
  }
  label {
    position: relative;
    width: 48px;
    height: 20px;
    background: lightgrey;
    border-radius: 10px;
    cursor: pointer;
    transition: background .3s;
  }
  label[disabled] {
    cursor: not-allowed;
    opacity: .5;
  }
  label::before,
  label::after {
    transition: all .3s;
    position: absolute;
  }
  label::before {
    content: 'OFF';
    top: 4px;
    left: 21px;
    color: white;
    transform: scale(.7);
    font-weight: 700;
  }
  label::after {
    content: '';
    top: 1px;
    left: 1px;
    width: 18px;
    height: 18px;
    border-radius: 9px;
    background: white;
  }
  input[type="checkbox"]:checked + label {
    background: #b4a078;
  }
  input[type="checkbox"]:checked + label::before {
    content: 'ON';
    left: 6px;
  }
  input[type="checkbox"]:active + label::after {
    width: 23px;
  }
  input[type="checkbox"]:checked + label::after {
    left: 29px;
  }
  input[type="checkbox"]:checked:active + label::after {
    left: 24px;
  }
</style>
<template>
  <main>
    <input type="checkbox" id="switch" checked hidden>
    <label for="switch"></label>
    <input type="checkbox" id="switch-disabled" disabled hidden>
    <label for="switch-disabled" disabled></label>
    <input type="checkbox" id="switch-checked-disabled" checked disabled hidden>
    <label for="switch-checked-disabled" disabled></label>
  </main>
</template>
<script>
</script>
</script>

### 浏览器支持

<iframe
  width="100%"
  height="493px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=transforms2d&amp;periods=future_2,future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
