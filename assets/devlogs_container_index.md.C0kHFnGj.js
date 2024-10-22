import{_ as s,h as a,o as n,ad as i}from"./chunks/framework.eQDZebM0.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"devlogs/container/index.md","filePath":"devlogs/container/index.md"}'),p={name:"devlogs/container/index.md"},e=i(`<h3 id="结构" tabindex="-1">结构 <a class="header-anchor" href="#结构" aria-label="Permalink to &quot;结构&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>container</span></span>
<span class="line"><span>├── __test__</span></span>
<span class="line"><span>│   └── container.test.tsx</span></span>
<span class="line"><span>├── components</span></span>
<span class="line"><span>│   ├── aside</span></span>
<span class="line"><span>│   │   └── index.vue</span></span>
<span class="line"><span>│   ├── footer</span></span>
<span class="line"><span>│   │   └── index.vue</span></span>
<span class="line"><span>│   ├── header</span></span>
<span class="line"><span>│   │   └── index.vue</span></span>
<span class="line"><span>│   └── main</span></span>
<span class="line"><span>│       └── index.vue</span></span>
<span class="line"><span>├── container.vue</span></span>
<span class="line"><span>├── index.ts</span></span>
<span class="line"><span>└── styles</span></span>
<span class="line"><span>    ├── aside.scss</span></span>
<span class="line"><span>    ├── footer.scss</span></span>
<span class="line"><span>    ├── header.scss</span></span>
<span class="line"><span>    ├── index.scss</span></span>
<span class="line"><span>    └── main.scss</span></span></code></pre></div><h3 id="采用flex布局" tabindex="-1">采用flex布局 <a class="header-anchor" href="#采用flex布局" aria-label="Permalink to &quot;采用flex布局&quot;">​</a></h3><ul><li><code>container</code> 包含 <code>aside</code>、<code>footer</code>、<code>header</code>、<code>main</code>等几个组件</li><li>所有的布局方式均采用<code>flex</code>布局</li></ul><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.ued-container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	box-sizing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">border-box</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	flex-basis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	flex-direction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">row</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	min-width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">	&amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.is-vertical</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		flex-direction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">column</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,5),l=[e];function t(h,k,d,c,r,o){return n(),a("div",null,l)}const y=s(p,[["render",t]]);export{g as __pageData,y as default};
