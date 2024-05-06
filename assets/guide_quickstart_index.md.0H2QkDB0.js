import{M as s,h as e,o as a,ad as i}from"./chunks/framework.HFMR81iv.js";const g=JSON.parse('{"title":"搭建本地npm私服并发布组件库","description":"","frontmatter":{},"headers":[],"relativePath":"guide/quickstart/index.md","filePath":"guide/quickstart/index.md"}'),t={name:"guide/quickstart/index.md"},n=i(`<h1 id="搭建本地npm私服并发布组件库" tabindex="-1">搭建本地npm私服并发布组件库 <a class="header-anchor" href="#搭建本地npm私服并发布组件库" aria-label="Permalink to &quot;搭建本地npm私服并发布组件库&quot;">​</a></h1><h2 id="clone-组件库代码" tabindex="-1">clone 组件库代码 <a class="header-anchor" href="#clone-组件库代码" aria-label="Permalink to &quot;clone 组件库代码&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git@github.com:bin-K/ued-plus.git</span></span></code></pre></div><h2 id="进入组件库并执行依赖安装" tabindex="-1">进入组件库并执行依赖安装 <a class="header-anchor" href="#进入组件库并执行依赖安装" aria-label="Permalink to &quot;进入组件库并执行依赖安装&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ued-plus</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span></span></code></pre></div><h2 id="使用-nexus-搭建本地npm-私服" tabindex="-1">使用 nexus 搭建本地npm 私服 <a class="header-anchor" href="#使用-nexus-搭建本地npm-私服" aria-label="Permalink to &quot;使用 nexus 搭建本地npm 私服&quot;">​</a></h2><blockquote><p>主要参考：<br> 安装nexus: <code>https://juejin.cn/post/7244450987703304253</code><br> 配置nexus仓库：<code>https://www.cnblogs.com/54chensongxia/p/14930128.html</code><br> 发布本地依赖包到私服仓库：<code>https://blog.csdn.net/wjyyhhxit/article/details/103595333</code></p></blockquote><div class="caution custom-block github-alert"><p class="custom-block-title">踩坑</p><p>npm login 登录 <code>http://locahost:8081/repository/npm-hosted/</code> 时可能会出错<br> 因为此时localhost 可能为::1，此时ping localhost 返回的是::1而不是127.0.0.1<br> 因此将localhost 统一为127.0.0.1<br> 具体参考：<br> <code>https://github.com/node-fetch/node-fetch/issues/1624</code><br><code>https://superuser.com/questions/414050/why-is-there-a-difference-between-ping-localhost-and-ping-local-ip-address</code></p></div><h2 id="执行本地组件库打包和发布命令" tabindex="-1">执行本地组件库打包和发布命令 <a class="header-anchor" href="#执行本地组件库打包和发布命令" aria-label="Permalink to &quot;执行本地组件库打包和发布命令&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build:ued-plus</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> publish:ued-plus</span></span></code></pre></div>`,10),l=[n];function h(o,p,c,d,r,u){return a(),e("div",null,l)}const b=s(t,[["render",h]]);export{g as __pageData,b as default};
