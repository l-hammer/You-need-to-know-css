
### 自定义开关选择器

?> 背景知识：:point_right: [transition](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition), [伪元素](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Pseudo-classes_and_pseudo-elements#%E4%BC%AA%E5%85%83%E7%B4%A0)

同自定义复选框或自定义单选框类似，都是利用一个隐藏的`input(:checked)`元素 + 一个关联的`label`元素，通过`label`元素及其伪元素模拟switch选择器，通过`input`的`:checked`属性来模拟`switch`状态是否开启。

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
    width: 40px;
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
    content: '关';
    top: 4px;
    left: 22px;
    color: white;
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
    content: '开';
    left: 6px;
  }
  input[type="checkbox"]:active + label::after {
    width: 23px;
  }
  input[type="checkbox"]:checked + label::after {
    left: 21px;
  }
  input[type="checkbox"]:checked:active + label::after {
    left: 16px;
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
