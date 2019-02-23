
# Common CSS snippets

### CSS Reset

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

### Clearfix

```css
element::after {
  content: "";
  display: block;
  clear: both;
}
```

### Text truncate

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

### Text hide

```css
element {
  font: 0/0 a;
  color: transparent;
  text-indent: -9999px;
}
```

### Transform centering

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
