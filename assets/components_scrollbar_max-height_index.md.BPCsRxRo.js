import{_ as E,h as i,k as s,B as t,w as n,ad as r,Z as p,o as e,I as h,F as b,$ as v,m as g,R as y,S as o}from"./chunks/framework.eQDZebM0.js";const I=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/scrollbar/max-height/index.md","filePath":"components/scrollbar/max-height/index.md"}'),F={name:"components/scrollbar/max-height/index.md"},d=a=>(y("data-v-fae81fb9"),a=a(),o(),a),c=d(()=>s("h2",{id:"最大高度",tabindex:"-1"},[h("最大高度 "),s("a",{class:"header-anchor",href:"#最大高度","aria-label":'Permalink to "最大高度"'},"​")],-1)),C=d(()=>s("p",null,"当元素高度超过最大高度，才会显示滚动条。",-1)),u={class:"common-content scrollbar-content scrollbar-max-height"},B=r(`<details class="details custom-block" data-v-fae81fb9><summary data-v-fae81fb9>显示代码</summary><div class="language-vue vp-adaptive-theme" data-v-fae81fb9><button title="Copy Code" class="copy" data-v-fae81fb9></button><span class="lang" data-v-fae81fb9>vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-fae81fb9><code data-v-fae81fb9><span class="line" data-v-fae81fb9><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-fae81fb9>template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>&gt;</span></span>
<span class="line" data-v-fae81fb9><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-fae81fb9>div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-fae81fb9> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fae81fb9>&quot;scrollbar-content scrollbar-max-height&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>&gt;</span></span>
<span class="line" data-v-fae81fb9><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-fae81fb9>ued-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9> @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-fae81fb9>click</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fae81fb9>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fae81fb9>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>&gt;添加&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-fae81fb9>ued-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>&gt;</span></span>
<span class="line" data-v-fae81fb9><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-fae81fb9>ued-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9> @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-fae81fb9>click</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fae81fb9>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>onDelete</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fae81fb9>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>&gt;删除&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-fae81fb9>ued-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>&gt;</span></span>
<span class="line" data-v-fae81fb9><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-fae81fb9>ued-scrollbar</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-fae81fb9> max-height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fae81fb9>&quot;400px&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>&gt;</span></span>
<span class="line" data-v-fae81fb9><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>			&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-fae81fb9>p</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-fae81fb9> v-for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fae81fb9>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>item </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-fae81fb9>in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9> count</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fae81fb9>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-fae81fb9>key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fae81fb9>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>item</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fae81fb9>&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-fae81fb9> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fae81fb9>&quot;scrollbar-demo-item&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>&gt;</span></span>
<span class="line" data-v-fae81fb9><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>				{{ item }}</span></span>
<span class="line" data-v-fae81fb9><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>			&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-fae81fb9>p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>&gt;</span></span>
<span class="line" data-v-fae81fb9><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>		&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-fae81fb9>ued-scrollbar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>&gt;</span></span>
<span class="line" data-v-fae81fb9><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>	&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-fae81fb9>div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>&gt;</span></span>
<span class="line" data-v-fae81fb9><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-fae81fb9>template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>&gt;</span></span>
<span class="line" data-v-fae81fb9></span>
<span class="line" data-v-fae81fb9><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-fae81fb9>script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-fae81fb9> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fae81fb9>&quot;ts&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-fae81fb9> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>&gt;</span></span>
<span class="line" data-v-fae81fb9><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-fae81fb9>import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9> { ref } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-fae81fb9>from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fae81fb9> &#39;vue&#39;</span></span>
<span class="line" data-v-fae81fb9><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-fae81fb9>const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-fae81fb9> count</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-fae81fb9> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-fae81fb9> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-fae81fb9>3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>)</span></span>
<span class="line" data-v-fae81fb9></span>
<span class="line" data-v-fae81fb9><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-fae81fb9>const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-fae81fb9> add</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-fae81fb9> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-fae81fb9>=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9> {</span></span>
<span class="line" data-v-fae81fb9><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>	count.value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-fae81fb9>++</span></span>
<span class="line" data-v-fae81fb9><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>}</span></span>
<span class="line" data-v-fae81fb9><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-fae81fb9>const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-fae81fb9> onDelete</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-fae81fb9> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-fae81fb9>=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9> {</span></span>
<span class="line" data-v-fae81fb9><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-fae81fb9>	if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9> (count.value </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-fae81fb9>&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-fae81fb9> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>) {</span></span>
<span class="line" data-v-fae81fb9><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>		count.value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-fae81fb9>--</span></span>
<span class="line" data-v-fae81fb9><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>	}</span></span>
<span class="line" data-v-fae81fb9><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>}</span></span>
<span class="line" data-v-fae81fb9><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-fae81fb9>script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>&gt;</span></span>
<span class="line" data-v-fae81fb9></span>
<span class="line" data-v-fae81fb9><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-fae81fb9>style</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-fae81fb9> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-fae81fb9>&quot;scss&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-fae81fb9> scoped</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>&gt;</span></span>
<span class="line" data-v-fae81fb9><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-fae81fb9>.scrollbar-demo-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9> {</span></span>
<span class="line" data-v-fae81fb9><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-fae81fb9>	display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-fae81fb9>flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>;</span></span>
<span class="line" data-v-fae81fb9><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-fae81fb9>	align-items</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-fae81fb9>center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>;</span></span>
<span class="line" data-v-fae81fb9><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-fae81fb9>	justify-content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-fae81fb9>center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>;</span></span>
<span class="line" data-v-fae81fb9><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-fae81fb9>	height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-fae81fb9>50</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-fae81fb9>px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>;</span></span>
<span class="line" data-v-fae81fb9><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-fae81fb9>	margin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-fae81fb9>10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-fae81fb9>px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>;</span></span>
<span class="line" data-v-fae81fb9><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-fae81fb9>	text-align</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-fae81fb9>center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>;</span></span>
<span class="line" data-v-fae81fb9><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-fae81fb9>	border-radius</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-fae81fb9>4</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-fae81fb9>px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>;</span></span>
<span class="line" data-v-fae81fb9><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-fae81fb9>	background</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-fae81fb9>var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-fae81fb9>--ued-color-primary-light-9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>);</span></span>
<span class="line" data-v-fae81fb9><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-fae81fb9>	color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-fae81fb9>var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-fae81fb9>--ued-color-primary</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>);</span></span>
<span class="line" data-v-fae81fb9><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>}</span></span>
<span class="line" data-v-fae81fb9><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;" data-v-fae81fb9>style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-fae81fb9>&gt;</span></span></code></pre></div></details>`,1);function m(a,D,A,_,x,q){const k=p("ued-button"),f=p("ued-scrollbar");return e(),i("div",null,[c,C,s("div",u,[t(k,{onClick:a.add},{default:n(()=>[h("添加")]),_:1},8,["onClick"]),t(k,{onClick:a.onDelete},{default:n(()=>[h("删除")]),_:1},8,["onClick"]),t(f,{"max-height":"400px"},{default:n(()=>[(e(!0),i(b,null,v(a.count,l=>(e(),i("p",{key:l,class:"scrollbar-demo-item"},g(l),1))),128))]),_:1})]),B])}const T=E(F,[["render",m],["__scopeId","data-v-fae81fb9"]]);export{I as __pageData,T as default};