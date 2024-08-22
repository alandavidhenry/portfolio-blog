---
layout: layouts/post.njk
title: Using focus-visible
featuredImage: /images/uploads/focus-visible.gif
date: 2024-07-30T16:32:00.000Z
description: focus-visible lets you show focus styles only when they are needed, using the same heuristic that the browser uses to decide whether to show the default focus indicator
---

Focus visible has been working across major browsers since March 2022. You can see [which browsers and versions are compatible here](https://caniuse.com/?search=%3Afocus-visible).

Hide focus styles if they're not needed, for example,
when an element receives focus via the mouse:

<pre><code>:focus:not(:focus-visible) {
  outline: 0;
}
</code></pre>

Show focus styles on keyboard focus:

<pre><code>:focus-visible {
  outline: 3px solid blue;
}
</code></pre>
