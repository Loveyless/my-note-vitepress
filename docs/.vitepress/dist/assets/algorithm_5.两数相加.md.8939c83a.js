import{_ as s,o as n,c as a,a as l}from"./app.4a1eb62d.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u60F3\u6CD5","slug":"\u60F3\u6CD5","link":"#\u60F3\u6CD5","children":[]}],"relativePath":"algorithm/5.\u4E24\u6570\u76F8\u52A0.md","lastUpdated":null}'),p={name:"algorithm/5.\u4E24\u6570\u76F8\u52A0.md"},o=l(`<h2 id="\u60F3\u6CD5" tabindex="-1">\u60F3\u6CD5 <a class="header-anchor" href="#\u60F3\u6CD5" aria-hidden="true">#</a></h2><p><img src="https://cdn.jsdelivr.net/gh/Loveyless/img-clouding/img/20220923011155.png" alt=""></p><p>\u521D\u6B65\u89C9\u5F97\u9700\u8981\u64CD\u4F5C\u4E00\u4E0B\u6570\u7EC4 \u8F6C\u6570\u5B57 \u5728\u52A0\u4E00\u4E0B\u8F6C\u56DE\u53BB</p><p>\u9898\u76EE\u90FD\u4E0D\u592A\u61C2 <img src="https://cdn.jsdelivr.net/gh/Loveyless/img-clouding/img/20220923011617.png" alt=""> \u770B\u4E86\u4E00\u4E0B\u89E3\u6790 \u660E\u767D\u4E86</p><div class="language-go"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ListNode</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	Val  </span><span style="color:#C792EA;">int</span></span>
<span class="line"><span style="color:#A6ACCD;">	Next </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">ListNode</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">addTwoNumbers</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">l1 </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">ListNode</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> l2 </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">ListNode</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">ListNode </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">//\u8FD9\u6837\u5C31\u53EB\u94FE\u8868</span></span>
<span class="line"><span style="color:#A6ACCD;">	l1 </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> ListNode</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">ListNode</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">ListNode</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">ListNode</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil}}}}</span></span>
<span class="line"><span style="color:#A6ACCD;">	l2 </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> ListNode</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">ListNode</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">ListNode</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">ListNode</span><span style="color:#89DDFF;">{</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil}}}}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">addTwoNumbers</span><span style="color:#89DDFF;">(&amp;</span><span style="color:#A6ACCD;">l1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">l2</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,5),e=[o];function t(c,r,D,F,y,C){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
