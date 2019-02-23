
# 常用的 CSS 片段

### CSS 复位

```css
@import 'normalize.css';

html {
  box-sizing: border-box;
}
*:not(input) {
  border: 0;
  margin: 0;
  padding: 0;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
*[hide] {
  display: none;
}
*[disabled] {
  opacity: .5;
  pointer-events: none;
}
```

### 清除浮动

```css
element::after {
  content: "";
  display: block;
  clear: both;
}
```

### 文本截断

```css
element {
  display: inline-block;
  max-width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
```

### 隐藏文字

```css
element {
  font: 0/0 a;
  color: transparent;
  text-indent: -9999px;
}
```

### 元素居中

```css
element.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
element.justify-center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
element.align-center {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
```