# HTMLshl
A lightweight HTML syntax highlighter

#### How to use
Add a module tag in your HTML:

```html
<script src="./HTMLshl.js" type="module"></script>
```

or import it in your `main.js` file;

```javascript
import {HTMLshl} from "./HTMLshl.js";
```

You can use HTMLshl in your JavaScript  code with:

```javascript
var highlightedHTML = HTMLshl.highlight("<html></html>");
```

Which returns:

```html
<pre><span class="tag">&lt;html&gt;</span><span class="tag">&lt;/html&gt;</span></pre>
```

Now you can add this highlighted HTML to your page and style it with CSS:

```css
.tag{
  color:red;
}
.attribute{
  color:white;
}
.property{
  color:green;
}
.comment{
  color:grey;
}
```

Reference:

In `<a href="#">link</a>` is

| part | class |
|-----:|------:|
| `<a ` | .tag |
 `href="` | .tag .attribute |
 `#` | .tag .attribute .property |
 `"` | .tag .attribute |
 `>` | .tag |
 `link` | no class |
 `</a>` | .tag |
