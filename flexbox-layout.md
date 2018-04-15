# Flex 布局

?> 背景知识：:point_right: [flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex), [flex 布局的基本概念](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

Flex布局的全称为CSS Flexible Box Layout Module，是W3C提出的一种新型页面布局方案，第一个版本于2009年推出，到现在为止，W3C一共发布了12个版本，[最新版本](https://www.w3.org/TR/css-flexbox-1/)于20171019推出，已经得到了所有主流浏览器的支持，所以请大胆的使用吧~

##### 历史版本:
> https://www.w3.org/TR/2016/CR-css-flexbox-1-20160526/<br/>
https://www.w3.org/TR/2016/CR-css-flexbox-1-20160301/<br/>
https://www.w3.org/TR/2015/WD-css-flexbox-1-20150514/<br/>
https://www.w3.org/TR/2014/WD-css-flexbox-1-20140925/<br/>
https://www.w3.org/TR/2014/WD-css-flexbox-1-20140325/<br/>
https://www.w3.org/TR/2012/CR-css3-flexbox-20120918/<br/>
https://www.w3.org/TR/2012/WD-css3-flexbox-20120612/<br/>
https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/<br/>
https://www.w3.org/TR/2011/WD-css3-flexbox-20111129/<br/>
https://www.w3.org/TR/2011/WD-css3-flexbox-20110322/<br/>
https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/

### Flexbox 原理演示

[A Visual Guide to CSS3 Flexbox Properties](https://l-hammer.github.io/Flexbox/ ':include :type=iframe width=100% height=791px')

> **感谢：**以上演示Fork自[xluos](https://github.com/xluos)的[Flexbox演示站](https://xluos.github.io/demo/flexbox/)~

Flex布局由容器`flex container`和项目`flex item`两部分组成，容器默认存在两根轴：水平的主轴`main axis`和垂直的交叉轴`cross axis`，项目默认以主轴排列。
Flex属性包括容器属性和项目属性两部分，容器上可设置：`flex-direction`、`flex-wrap`、`flex-flow`、`justify-content`、`align-items`、`align-content`6个属性，项目上同样可设置6个属性，分别为：`order`、`flex-grow`、`flex-shrink`、`flex-basis`、`flex`、`align-self`。用法如下示例所示：

#### flex-direction属性

**作用：**决定主轴的方向。

```css
flex-direction: row | row-reverse | column | column-reverse;
```
> * row             默认值，主轴为水平方向,表示从左向右排列
> * row-reverse     主轴为水平方向，从右向左排列
> * column          主轴为垂直方向，从上向下排列
> * column-reverse  主轴为垂直方向，从下向上排列

<vuep template="#flexDirection"></vuep>

<script v-pre type="text/x-template" id="flexDirection">
<style>
  main {
    width: 100%;
    padding: 52px 17px 52px 29px;
  }
  .container {
    display: flex;
    flex-direction: row;
  }
  .item {
    width: 20%; height: 29px;
    background: #b4a078;
    border-radius: 5px;
    margin: 12px;
    margin-left: 0;
  }
</style>
<template>
  <main>
    <span class="radio-wrap" v-for="radio in radios">
      <input type="radio" :id="radio.id" :value="radio.value" v-model="flexDirection">
      <label :for="radio.id" @click="handleSelected(radio.id)">{{radio.value}}</label>
    </span>
    <div class="container" :style="{ flexDirection: flexDirection}">
      <span class="item" v-for="$ in elements" :style="{ opacity: 1 - $ / 10 }"></span>
    </div>
  </main>
</template>
<script>
  module.exports = {
    data () {
      return {
        elements: Array.from({length: 5}).map((v, i) => i + 1),
        radios: [
          {id: 'row', value: 'row'},
          {id: 'row-reverse', value: 'row-reverse'},
          {id: 'column', value: 'column'},
          {id: 'column-reverse', value: 'column-reverse'},
        ],
        flexDirection: 'row',
      }
    },
    methods: {
      handleSelected(dir) {
        this.flexDirection = dir;
      }
    }
  }
</script>
</script>

### 浏览器支持

<iframe src="https://caniuse.bitsofco.de/embed/index.html?feat=flexbox&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false" frameborder="0" width="100%" height="436px"></iframe>
