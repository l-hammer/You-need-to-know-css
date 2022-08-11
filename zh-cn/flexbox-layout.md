# Flex 布局

?> 背景知识：:point_right: [flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex), [flex 布局的基本概念](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

Flex 布局的全称为 CSS Flexible Box Layout Module，是 W3C 提出的一种新型页面布局方案，第一个版本于 2009 年推出，到现在为止，W3C 一共发布了 12 个版本，[最新版本](https://www.w3.org/TR/css-flexbox-1/)于 20171019 推出，已经得到了所有主流浏览器的支持，所以请大胆的使用吧~

##### 历史版本:

> https://www.w3.org/TR/2016/CR-css-flexbox-1-20160526/<br/> > https://www.w3.org/TR/2016/CR-css-flexbox-1-20160301/<br/> > https://www.w3.org/TR/2015/WD-css-flexbox-1-20150514/<br/> > https://www.w3.org/TR/2014/WD-css-flexbox-1-20140925/<br/> > https://www.w3.org/TR/2014/WD-css-flexbox-1-20140325/<br/> > https://www.w3.org/TR/2012/CR-css3-flexbox-20120918/<br/> > https://www.w3.org/TR/2012/WD-css3-flexbox-20120612/<br/> > https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/<br/> > https://www.w3.org/TR/2011/WD-css3-flexbox-20111129/<br/> > https://www.w3.org/TR/2011/WD-css3-flexbox-20110322/<br/> > https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/

### Flexbox 原理演示

[A Visual Guide to CSS3 Flexbox Properties](https://lhammer.cn/Flexbox ":include :type=iframe width=100% height=791px")

> **感谢：**以上演示 Fork 自[xluos](https://github.com/xluos)的[Flexbox 演示站](https://xluos.github.io/demo/flexbox/)~

Flex 布局由容器`flex container`和项目`flex item`两部分组成，容器默认存在两根轴：水平的主轴`main axis`和垂直的交叉轴`cross axis`，项目默认以主轴排列。
Flex 属性包括容器属性和项目属性两部分，容器上可设置：`flex-direction`、`flex-wrap`、`flex-flow`、`justify-content`、`align-items`、`align-content`6 个属性，项目上同样可设置 6 个属性，分别为：`order`、`flex-grow`、`flex-shrink`、`flex-basis`、`flex`、`align-self`。示例如下：

### 容器属性

---

#### flex-direction 属性

**作用：**决定主轴的方向。

```css
flex-direction: row | row-reverse | column | column-reverse;
```

> - row：默认值，主轴为水平方向,表示从左向右排列
> - row-reverse：主轴为水平方向，从右向左排列
> - column：主轴为垂直方向，从上向下排列
> - column-reverse：主轴为垂直方向，从下向上排列

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
      <input 
        type="radio"
        :id="radio.id"
        :value="radio.value"
        v-model="flexDirection">
      <label :for="radio.id" @click="handleSelected(radio.id)">
        {{ radio.value }}
      </label>
    </span>
    <div class="container" :style="{ flexDirection }">
      <span
        class="item"
        v-for="$ in elements"
        :style="{ opacity: 1 - $ / 10 }">
      </span>
    </div>
  </main>
</template>
<script>
  export default {
    data() {
      return {
        elements: Array.from({ length: 5 }).map((v, i) => i + 1),
        radios: [
          { id: 'row', value: 'row' },
          { id: 'row-reverse', value: 'row-reverse' },
          { id: 'column', value: 'column' },
          { id: 'column-reverse', value: 'column-reverse' },
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

#### flex-wrap 属性

**作用：**决定项目在一条轴线排不下时如何换行。

```css
flex-wrap: nowrap | wrap | wrap-reverse;
```

> - nowrap：默认值，不换行
> - wrap：换行，第一行在上方
> - row-reverse：换行，第一行在下方

<vuep template="#flexWrap"></vuep>

<script v-pre type="text/x-template" id="flexWrap">
<style>
  main {
    width: 100%;
    padding: 52px 17px 52px 29px;
  }
  .container {
    display: flex;
    flex-wrap: nowrap;
  }
  .item {
    width: 20%; height: 29px;
    max-width: 155px;
    background: #b4a078;
    border-radius: 5px;
    margin: 12px;
    margin-left: 0;
  }
</style>
<template>
  <main>
    <span class="radio-wrap" v-for="radio in radios">
      <input
        type="radio"
        :id="radio.id"
        :value="radio.value"
        v-model="flexWrap">
      <label :for="radio.id" @click="handleSelected(radio.id)">
        {{ radio.value }}
      </label>
    </span>
    <div class="container" :style="{ flexWrap }">
      <span
        class="item"
        v-for="$ in elements"
        :style="{ opacity: 1 - $ / 10 }">
      </span>
    </div>
  </main>
</template>
<script>
  export default {
    data() {
      return {
        elements: Array.from({ length: 6 }).map((v, i) => i + 1),
        radios: [
          { id: 'nowrap', value: 'nowrap' },
          { id: 'wrap', value: 'wrap' },
          { id: 'wrap-reverse', value: 'wrap-reverse' },
        ],
        flexWrap: 'nowrap',
      }
    },
    methods: {
      handleSelected(dir) {
        this.flexWrap = dir;
      }
    }
  }
</script>
</script>

#### flex-flow 属性

**作用：**`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为 row nowrap。

```css
flex-flow: <flex-direction> || <flex-wrap>;
```

> - row nowrap：默认值，主轴为水平方向，不换行
> - `<flex-direction>`：同[flex-direction](/flexbox-layout?id=flex-direction%E5%B1%9E%E6%80%A7)
> - `<flex-wrap>`：同[flex-wrap](/flexbox-layout?id=flex-wrap%E5%B1%9E%E6%80%A7)

#### justify-content 属性

**作用：**定义项目在主轴上的对齐方式。

```css
justify-content: flex-start | flex-end | center | space-between | space-round |
  space-evenly;
```

> - flex-start：默认值，左对齐
> - flex-end：右对齐
> - center：居中
> - space-evenly：每个项目之间及两端的间隔都相等
> - space-around：每个项目两侧间隔相等
> - space-between：两端对齐，项目之间间隔相等

<vuep template="#justifyContent"></vuep>

<script v-pre type="text/x-template" id="justifyContent">
<style>
  main {
    width: 100%;
    padding: 52px 17px 52px 29px;
  }
  .container {
    display: flex;
    justify-content: flex-start;
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
      <input
        type="radio" 
        :id="'justifyContent' + radio.id" 
        :value="radio.value" 
        v-model="justifyContent">
      <label :for="'justifyContent' + radio.id" @click="handleSelected(radio.id)">
        {{ radio.value }}
      </label>
    </span>
    <div class="container" :style="{ justifyContent }">
      <span
        class="item"
        v-for="$ in elements"
        :style="{ opacity: 1 - $ / 10 }">
      </span>
    </div>
  </main>
</template>
<script>
  export default {
    data () {
      return {
        elements: Array.from({ length: 3 }).map((v, i) => i + 1),
        radios: [
          { id: 'flex-start', value: 'flex-start' },
          { id: 'flex-end', value: 'flex-end' },
          { id: 'center', value: 'center' },
          { id: 'space-evenly', value: 'space-evenly' },
          { id: 'space-around', value: 'space-around' },
          { id: 'space-between', value: 'space-between' },
        ],
        justifyContent: 'flex-start',
      }
    },
    methods: {
      handleSelected(dir) {
        this.justifyContent = dir;
      }
    }
  }
</script>
</script>

#### align-items 属性

**作用：**定义项目在交叉轴（默认方向从上到下）上的对齐方式。

```css
align-items: flex-start | flex-end | center | baseline | stretch;
```

> - flex-start：交叉轴的起点对齐
> - flex-end：交叉轴的终点对齐
> - center：交叉轴的中心对齐
> - baseline：项目第一行文字的基线对齐
> - stretch：默认值，项目未设置固定高度时，将占满整个容器

<vuep template="#alignItems"></vuep>

<script v-pre type="text/x-template" id="alignItems">
<style>
  main {
    width: 100%;
    padding: 52px 17px 52px 29px;
  }
  .container {
    display: flex;
    align-items: stretch;
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
      <input
        type="radio"
        :id="'alignItems' + radio.id"
        :value="radio.value"
        v-model="alignItems">
      <label :for="'alignItems' + radio.id" @click="handleSelected(radio.id)">
        {{ radio.value }}
      </label>
    </span>
    <div class="container" :style="{ alignItems }">
      <span
        class="item" 
        v-for="$ in elements" 
        :style="{ opacity: 1 - $ / 10, height: 29 * ($ * .6 + .4) + 'px' }">
      </span>
    </div>
  </main>
</template>
<script>
  export default {
    data () {
      return {
        elements: Array.from({ length: 5 }).map((v, i) => i + 1),
        radios: [
          { id: 'flex-start', value: 'flex-start' },
          { id: 'flex-end', value: 'flex-end' },
          { id: 'center', value: 'center' },
          { id: 'baseline', value: 'baseline' },
          { id: 'stretch', value: 'stretch' },
        ],
        alignItems: 'stretch',
      }
    },
    methods: {
      handleSelected(dir) {
        this.alignItems = dir;
      }
    }
  }
</script>
</script>

#### align-content 属性

**作用：**定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

```css
align-content: flex-start | flex-end | center | space-between | space-around |
  stretch;
```

> - flex-start：交叉轴的起点对齐
> - flex-end：交叉轴的终点对齐
> - center：交叉轴的中心对齐
> - space-between：与交叉轴两端对齐，轴线之间的间隔平均分布等
> - space-around：每根轴线两侧的间隔都相
> - stretch：默认值，轴线占满整个交叉轴

<vuep template="#alignContent"></vuep>

<script v-pre type="text/x-template" id="alignContent">
<style>
  main {
    width: 100%;
    padding: 52px 17px 52px 29px;
  }
  .container {
    height: 399px;
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
  }
  .item {
    width: 20%; height: 29px;
    max-width: 155px;
    background: #b4a078;
    border-radius: 5px;
    margin: 12px;
    margin-left: 0;
  }
</style>
<template>
  <main>
    <span class="radio-wrap" v-for="radio in radios">
      <input
        type="radio" 
        :id="'alignContent' + radio.id" 
        :value="radio.value" 
        v-model="alignContent">
      <label :for="'alignContent' + radio.id" @click="handleSelected(radio.id)">
        {{ radio.value }}
      </label>
    </span>
    <div class="container" :style="{ alignContent }">
      <span
        class="item"
        v-for="$ in elements"
        :style="{ opacity: 1 - ($ * .6) / 10 }">
      </span>
    </div>
  </main>
</template>
<script>
  export default {
    data () {
      return {
        elements: Array.from({ length: 15 }).map((v, i) => i + 1),
        radios: [
          { id: 'flex-start', value: 'flex-start' },
          { id: 'flex-end', value: 'flex-end' },
          { id: 'center', value: 'center' },
          { id: 'space-between', value: 'space-between' },
          { id: 'space-around', value: 'space-around' },
          { id: 'stretch', value: 'stretch' },
        ],
        alignContent: 'stretch',
      }
    },
    methods: {
      handleSelected(dir) {
        this.alignContent = dir;
      }
    }
  }
</script>
</script>

### 项目属性

---

#### order 属性

**作用：**定义项目的排列顺序。

```css
order: <number>;
```

> - `<number>`：值为整数，数值越小，排列越靠前，默认为 0

<vuep template="#order"></vuep>

<script v-pre type="text/x-template" id="order">
<style>
  main {
    width: 100%;
    padding: 52px 17px 52px 29px;
  }
  .container {
    display: flex;
  }
  .item {
    width: 20%; height: 29px;
    background: #b4a078;
    border-radius: 5px;
    margin: 12px;
    margin-left: 0;
    color: #f4f0ea;
    text-align: center;
    padding-top: 4px;
  }
</style>
<template>
  <main>
    <a @click="shuffle">👉🏿🔀: {{ res }}</a>
    <div class="container">
      <span
        class="item"
        v-for="$ in elements" 
        :style="{ order: $.order, opacity: 1 - $.id / 10 }">
        order: {{ $.order }}
      </span>
    </div>
  </main>
</template>
<script>
  export default {
    data() {
      return {
        elements: [
          { id: 1, order: 1 },
          { id: 2, order: 2 },
          { id: 3, order: 3 },
          { id: 4, order: 4 },
          { id: 5, order: 5 },
        ],
        res: 0,
      }
    },
    methods: {
      shuffle() {
        const i = Math.floor(Math.random() * 5);
        this.res = this.elements[i].order = Math.floor(Math.random() * 29);
      }
    }
  }
</script>
</script>

#### flex-grow 属性

**作用：**定义项目的伸缩比例，按照该比例给项目分配空间。

```css
flex-grow: <number>;
```

> - `<number>`：值为整数，数值越大，项目占据空间越大，默认为 0

<vuep template="#flexGrow"></vuep>

<script v-pre type="text/x-template" id="flexGrow">
<style>
  main {
    width: 100%;
    padding: 52px 17px 52px 29px;
  }
  .container {
    display: flex;
  }
  .item {
    height: 29px;
    background: #b4a078;
    border-radius: 5px;
    margin: 12px;
    margin-left: 0;
    color: #f4f0ea;
    text-align: center;
    padding-top: 4px;
  }
</style>
<template>
  <main>
    <a @click="shuffle">👉🏿🔀: {{ res }}</a>
    <div class="container">
      <span
        class="item"
        v-for="$ in elements"
        :style="{ flexGrow: $.flexGrow, opacity: 1 - $.id / 10 }">
        flexGrow: {{ $.flexGrow }}
      </span>
    </div>
  </main>
</template>
<script>
  export default {
    data() {
      return {
        elements: [
          { id: 1, flexGrow: 1 },
          { id: 2, flexGrow: 1 },
          { id: 3, flexGrow: 1 },
          { id: 4, flexGrow: 1 },
          { id: 5, flexGrow: 1 },
        ],
        res: 1,
      }
    },
    methods: {
      shuffle() {
        const i = Math.floor(Math.random() * 5);
        this.res = this.elements[i].flexGrow = Math.floor(Math.random() * 29);
      }
    }
  }
</script>
</script>

#### flex-shrink 属性

**作用：**定义项目的收缩比例，按照该比例给项目分配空间。

```css
flex-shrink: <number>;
```

> - `<number>`：值为整数，数值越大，项目占据空间越小，默认为 1

<vuep template="#flexShrink"></vuep>

<script v-pre type="text/x-template" id="flexShrink">
<style>
  main {
    width: 100%;
    padding: 52px 17px 52px 29px;
  }
  .container {
    display: flex;
  }
  .item {
    width: 50%; height: 29px;
    background: #b4a078;
    border-radius: 5px;
    margin: 12px;
    margin-left: 0;
    color: #f4f0ea;
    text-align: center;
    padding-top: 4px;
  }
</style>
<template>
  <main>
    <a @click="shuffle">👉🏿🔀: {{ res }}</a>
    <div class="container">
      <span
        class="item"
        v-for="$ in elements" 
        :style="{ flexShrink: $.flexShrink, opacity: 1 - $.id / 10 }">
        flexShrink: {{ $.flexShrink }}
      </span>
    </div>
  </main>
</template>
<script>
  export default {
    data () {
      return {
        elements: [
          { id: 1, flexShrink: 0 },
          { id: 2, flexShrink: 1 },
          { id: 3, flexShrink: 2 },
        ],
        res: 1,
      }
    },
    methods: {
      shuffle() {
        const i = Math.floor(Math.random() * 3);
        this.res = this.elements[i].flexShrink = Math.floor(Math.random() * 4);
      }
    }
  }
</script>
</script>

#### flex-basis 属性

**作用：**定义在分配多余空间之前，项目占据的主轴空间。浏览器根据这个属性，计算主轴是否有多余空间。

```css
flex-basis: <length> | auto;
```

> - `<length>`：默认为 auto，即项目的原始尺寸；也可设置和 width 或 height 属性一样的值（比如 329px），则项目将占据固定空间。

<vuep template="#flexBasis"></vuep>

<script v-pre type="text/x-template" id="flexBasis">
<style>
  main {
    width: 100%;
    padding: 52px 17px 52px 29px;
  }
  .container {
    display: flex;
  }
  .item {
    width: 30%; height: 29px;
    background: #b4a078;
    border-radius: 5px;
    margin: 12px;
    margin-left: 0;
    color: #f4f0ea;
    text-align: center;
    padding-top: 4px;
  }
</style>
<template>
  <main>
    <a @click="shuffle">👉🏿🔀: {{ res }}</a>
    <div class="container">
      <span
        class="item"
        v-for="$ in elements" 
        :style="{ flexBasis: $.flexBasis + 'px', opacity: 1 - $.id / 10 }">
        flexBasis: {{ $.flexBasis }}
      </span>
    </div>
  </main>
</template>
<script>
  export default {
    data () {
      return {
        elements: [
          { id: 1, flexBasis: 'auto' },
          { id: 2, flexBasis: 'auto' },
          { id: 3, flexBasis: 'auto' },
        ],
        res: 1,
      }
    },
    methods: {
      shuffle() {
        const i = Math.floor(Math.random() * 3);
        this.res = this.elements[i].flexBasis = 129 + Math.floor(Math.random() * 300);
      }
    }
  }
</script>
</script>

#### flex 属性 :thumbsup:

**作用：**是`flex-grow`,`flex-shrink`和`flex-basis`的简写，后两个属性可选。

```css
flex: none | [ < "flex-grow" > < "flex-shrink" >? || < "flex-basis" > ];
```

> - `0 1 auto`：默认值，不伸缩，如果容器空间不足则等比例收缩
> - `1 1 auto`：对应关键字`auto`，如果容器空间多余，则等比例分配多余空间空间；如果容器空间不足则等比例收缩
> - `0 0 auto`：对应关键字`none`，按项目原始大小分配空间

#### align-self 属性

**作用：**定义单个项目的对齐方式，可覆盖 align-items 属性。

```css
align-self: auto | flex-start | flex-end | center | baseline | stretch;
```

> - auto：默认值，继承父元素的`align-items`属性，如果没有父元素，则等同于 stretch
> - flex-start：交叉轴的起点对齐
> - flex-end：交叉轴的终点对齐
> - center：交叉轴的中心对齐
> - baseline：项目第一行文字的基线对齐
> - stretch：未设置固定高度是，将占满整个容器

<vuep template="#alignSelf"></vuep>

<script v-pre type="text/x-template" id="alignSelf">
<style>
  main {
    width: 100%;
    padding: 52px 17px 52px 29px;
  }
  .container {
    height: 129px;
    display: flex;
  }
  .item {
    width: 20%; min-height: 29px;
    text-align: center;
    background: #b4a078;
    border-radius: 5px;
    margin: 12px;
    margin-left: 0;
    color: #f4f0ea;
  }
</style>
<template>
  <main>
    <span class="radio-wrap" v-for="radio in radios">
      <input
        type="radio" 
        :id="'alignSelf' + radio.id" 
        :value="radio.value" 
        v-model="alignSelf">
      <label :for="'alignSelf' + radio.id" @click="handleSelected(radio.id)">
        {{radio.value}}
      </label>
    </span>
    <div class="container">
      <span
        class="item"
        v-for="$ in elements" 
        :style="{ 
          alignSelf: alignSelf,
          opacity: 1 - $ / 10,
          fontSize: 15 + 12 * $ + 'px'
        }"
        >{{$}}
      </span>
    </div>
  </main>
</template>
<script>
  export default {
    data () {
      return {
        elements: [3, 1, 5, 4, 2],
        radios: [
          { id: 'auto', value: 'auto' },
          { id: 'flex-start', value: 'flex-start' },
          { id: 'flex-end', value: 'flex-end' },
          { id: 'center', value: 'center' },
          { id: 'baseline', value: 'baseline' },
          { id: 'stretch', value: 'stretch' },
        ],
        alignSelf: 'auto',
      }
    },
    methods: {
      handleSelected(val) {
        this.alignSelf = val;
      }
    }
  }
</script>
</script>

### 浏览器支持

<iframe
  width="100%"
  height="436px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=flexbox&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
