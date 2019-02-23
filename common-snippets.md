
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
[hide] {
  display: none;
}
[disabled] {
  cursor: not-allowed;
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
