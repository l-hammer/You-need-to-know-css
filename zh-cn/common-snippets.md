
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
[hide] {
  display: none;
}
[disabled] {
  cursor: not-allowed;
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
