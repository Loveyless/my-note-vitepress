import{_ as s,o as n,c as a,a as p}from"./app.4eb0a464.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u524D\u7F6E\u77E5\u8BC6","slug":"\u524D\u7F6E\u77E5\u8BC6","link":"#\u524D\u7F6E\u77E5\u8BC6","children":[]},{"level":2,"title":"\u6808\uFF08Stack\uFF09\u2014\u2014\u53EA\u7528 pop \u548C push \u5B8C\u6210\u589E\u5220\u7684\u201C\u6570\u7EC4\u201D","slug":"\u6808\uFF08stack\uFF09\u2014\u2014\u53EA\u7528-pop-\u548C-push-\u5B8C\u6210\u589E\u5220\u7684\u201C\u6570\u7EC4\u201D","link":"#\u6808\uFF08stack\uFF09\u2014\u2014\u53EA\u7528-pop-\u548C-push-\u5B8C\u6210\u589E\u5220\u7684\u201C\u6570\u7EC4\u201D","children":[]},{"level":2,"title":"\u961F\u5217\uFF08Queue\uFF09\u2014\u2014\u53EA\u7528 push \u548C shift \u5B8C\u6210\u589E\u5220\u7684\u201C\u6570\u7EC4\u201D","slug":"\u961F\u5217\uFF08queue\uFF09\u2014\u2014\u53EA\u7528-push-\u548C-shift-\u5B8C\u6210\u589E\u5220\u7684\u201C\u6570\u7EC4\u201D","link":"#\u961F\u5217\uFF08queue\uFF09\u2014\u2014\u53EA\u7528-push-\u548C-shift-\u5B8C\u6210\u589E\u5220\u7684\u201C\u6570\u7EC4\u201D","children":[]},{"level":2,"title":"\u94FE\u8868","slug":"\u94FE\u8868","link":"#\u94FE\u8868","children":[]}],"relativePath":"algorithm/\u6570\u636E\u7ED3\u6784/1.\u6808\u961F\u5217\u94FE\u8868.md","lastUpdated":null}'),l={name:"algorithm/\u6570\u636E\u7ED3\u6784/1.\u6808\u961F\u5217\u94FE\u8868.md"},e=p(`<h2 id="\u524D\u7F6E\u77E5\u8BC6" tabindex="-1">\u524D\u7F6E\u77E5\u8BC6 <a class="header-anchor" href="#\u524D\u7F6E\u77E5\u8BC6" aria-hidden="true">#</a></h2><p>\u5728 JavaScript \u4E2D\uFF0C\u6808\u548C\u961F\u5217\u7684\u5B9E\u73B0\u4E00\u822C\u90FD\u8981\u4F9D\u8D56\u4E8E\u6570\u7EC4\uFF0C\u53EF\u4EE5\u628A\u6808\u548C\u961F\u5217\u90FD\u770B\u4F5C\u662F\u201C\u7279\u522B\u7684\u6570\u7EC4\u201D\u3002</p><p>\u4E24\u8005\u7684\u533A\u522B\u5728\u4E8E\uFF0C\u5B83\u4EEC\u5404\u81EA\u5BF9\u6570\u7EC4\u7684\u589E\u5220\u64CD\u4F5C\u6709\u7740\u4E0D\u4E00\u6837\u7684\u9650\u5236\u3002</p><p><strong>\u6570\u7EC4\u7684\u65B9\u6CD5</strong></p><p>\u6DFB\u52A0\u5143\u7D20\u65B9\u6CD5</p><ul><li><p>unshift \u65B9\u6CD5-\u6DFB\u52A0\u5143\u7D20\u5230\u6570\u7EC4\u7684\u5934\u90E8</p></li><li><p>push \u65B9\u6CD5-\u6DFB\u52A0\u5143\u7D20\u5230\u6570\u7EC4\u7684\u5C3E\u90E8</p></li><li><p>splice \u65B9\u6CD5-\u6DFB\u52A0\u5143\u7D20\u5230\u6570\u7EC4\u7684\u4EFB\u4F55\u4F4D\u7F6E(\u7B2C\u4E09\u4E2A\u53C2\u6570)</p></li></ul><p>\u5220\u9664\u5143\u7D20\u65B9\u6CD5</p><ul><li><p>shift \u65B9\u6CD5-\u5220\u9664\u6570\u7EC4\u5934\u90E8\u7684\u5143\u7D20</p></li><li><p>pop \u65B9\u6CD5-\u5220\u9664\u6570\u7EC4\u5C3E\u90E8\u7684\u5143\u7D20</p></li><li><p>splice \u65B9\u6CD5-\u5220\u9664\u6570\u7EC4\u4EFB\u610F\u4F4D\u7F6E\u7684\u5143\u7D20</p></li></ul><h2 id="\u6808\uFF08stack\uFF09\u2014\u2014\u53EA\u7528-pop-\u548C-push-\u5B8C\u6210\u589E\u5220\u7684\u201C\u6570\u7EC4\u201D" tabindex="-1">\u6808\uFF08Stack\uFF09\u2014\u2014\u53EA\u7528 pop \u548C push \u5B8C\u6210\u589E\u5220\u7684\u201C\u6570\u7EC4\u201D <a class="header-anchor" href="#\u6808\uFF08stack\uFF09\u2014\u2014\u53EA\u7528-pop-\u548C-push-\u5B8C\u6210\u589E\u5220\u7684\u201C\u6570\u7EC4\u201D" aria-hidden="true">#</a></h2><p>\u6808\u662F\u4E00\u79CD\u540E\u8FDB\u5148\u51FA(LIFO\uFF0CLast In First Out)\u7684\u6570\u636E\u7ED3\u6784\u3002</p><ul><li>\u53EA\u5141\u8BB8\u4ECE\u5C3E\u90E8\u6DFB\u52A0\u5143\u7D20</li><li>\u53EA\u5141\u8BB8\u4ECE\u5C3E\u90E8\u53D6\u51FA\u5143\u7D20</li></ul><p>\u5BF9\u5E94\u5230\u6570\u7EC4\u7684\u65B9\u6CD5\uFF0C\u521A\u597D\u5C31\u662F push \u548C pop\u3002\u56E0\u6B64\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8BA4\u4E3A\u5728 JavaScript \u4E2D\uFF0C\u6808\u5C31\u662F\u9650\u5236\u53EA\u80FD\u7528 push \u6765\u6DFB\u52A0\u5143\u7D20\uFF0C\u540C\u65F6\u53EA\u80FD\u7528 pop \u6765\u79FB\u9664\u5143\u7D20\u7684\u4E00\u79CD\u7279\u6B8A\u7684\u6570\u7EC4\u3002</p><h2 id="\u961F\u5217\uFF08queue\uFF09\u2014\u2014\u53EA\u7528-push-\u548C-shift-\u5B8C\u6210\u589E\u5220\u7684\u201C\u6570\u7EC4\u201D" tabindex="-1">\u961F\u5217\uFF08Queue\uFF09\u2014\u2014\u53EA\u7528 push \u548C shift \u5B8C\u6210\u589E\u5220\u7684\u201C\u6570\u7EC4\u201D <a class="header-anchor" href="#\u961F\u5217\uFF08queue\uFF09\u2014\u2014\u53EA\u7528-push-\u548C-shift-\u5B8C\u6210\u589E\u5220\u7684\u201C\u6570\u7EC4\u201D" aria-hidden="true">#</a></h2><p>\u961F\u5217\u662F\u4E00\u79CD\u5148\u8FDB\u5148\u51FA\uFF08FIFO\uFF0CFirst In First Out\uFF09\u7684\u6570\u636E\u7ED3\u6784\u3002</p><ul><li>\u53EA\u5141\u8BB8\u4ECE\u5C3E\u90E8\u6DFB\u52A0\u5143\u7D20</li><li>\u53EA\u5141\u8BB8\u4ECE\u5934\u90E8\u79FB\u9664\u5143\u7D20</li></ul><p>\u4E5F\u5C31\u662F\u8BF4\u6574\u4E2A\u8FC7\u7A0B\u53EA\u6D89\u53CA\u4E86\u6570\u7EC4\u7684 push \u548C shift \u65B9\u6CD5\u3002</p><h2 id="\u94FE\u8868" tabindex="-1">\u94FE\u8868 <a class="header-anchor" href="#\u94FE\u8868" aria-hidden="true">#</a></h2><p>\u94FE\u8868\u548C\u6570\u7EC4\u76F8\u4F3C\uFF0C\u5B83\u4EEC\u90FD\u662F\u6709\u5E8F\u7684\u5217\u8868\u3001\u90FD\u662F\u7EBF\u6027\u7ED3\u6784\uFF08\u6709\u4E14\u4EC5\u6709\u4E00\u4E2A\u524D\u9A71\u3001\u6709\u4E14\u4EC5\u6709\u4E00\u4E2A\u540E\u7EE7\uFF09\u3002\u4E0D\u540C\u70B9\u5728\u4E8E\uFF0C\u94FE\u8868\u4E2D\uFF0C\u6570\u636E\u5355\u4F4D\u7684\u540D\u79F0\u53EB\u505A\u201C\u7ED3\u70B9\u201D\uFF0C\u800C\u7ED3\u70B9\u548C\u7ED3\u70B9\u7684\u5206\u5E03\uFF0C\u5728\u5185\u5B58\u4E2D\u53EF\u4EE5\u662F<strong>\u79BB\u6563</strong>\u7684\u3002</p><p>\u94FE\u8868\u7684<strong>\u6BCF\u4E2A\u8282\u70B9\u7684 next \u94FE\u63A5\u7740\u4E0B\u4E00\u4E2A\u8282\u70B9\u7684\u5730\u5740\u3002</strong></p><p><strong>\u94FE\u8868\u7684\u6DFB\u52A0</strong></p><ol><li><p>\u628A\u65B0\u8282\u70B9\u7684 next \u7B49\u4E8E\u524D\u7F6E\u8282\u70B9\u7684 next(\u4E5F\u5C31\u662F\u540E\u7F6E\u8282\u70B9)</p></li><li><p>\u518D\u628A\u524D\u7F6E\u8282\u70B9\u7684 next \u7B49\u4E8E\u65B0\u8282\u70B9</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;">// \u76EE\u524D\u662F\u7684\u94FE\u8868\u662F node1 - node2 \u5728\u4E2D\u95F4\u63D2\u5165\u4E00\u4E2Anode3</span></span>
<span class="line"><span style="color:#676E95;">// \u521B\u5EFA\u4E00\u4E2A\u65B0\u8282\u70B9</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> node3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ListNode</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// \u628Anode3\u7684 next \u6307\u9488\u6307\u5411 node2\uFF08\u5373 node1.next\uFF09</span></span>
<span class="line"><span style="color:#A6ACCD;">node3</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> node1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// \u628Anode1\u7684 next \u6307\u9488\u6307\u5411 node3</span></span>
<span class="line"><span style="color:#A6ACCD;">node1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> node3</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div></li></ol><p><strong>\u94FE\u8868\u7684\u5220\u9664</strong></p><ol><li><p>\u524D\u7F6E\u8282\u70B9\u7684 next \u7B49\u4E8E \u524D\u7F6E\u8282\u70B9\u7684 next.next(\u76F4\u63A5\u8DF3\u8FC7\u8981\u5220\u9664\u7684\u8282\u70B9 \u76F4\u63A5\u6307\u5411\u540E\u7F6E\u8282\u70B9)</p><div class="language-java"><button class="copy"></button><span class="lang">java</span><pre><code><span class="line"><span style="color:#676E95;">// \u5F53\u524D\u6709node1 - node3 - node2</span></span>
<span class="line"><span style="color:#A6ACCD;">\u76F4\u63A5 node1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> node1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6216\u8005 node1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> node3</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span></span>
<span class="line"></span></code></pre></div></li></ol>`,23),o=[e];function t(c,r,i,d,h,u){return n(),a("div",null,o)}const A=s(l,[["render",t]]);export{y as __pageData,A as default};
