import{P as y,C as A,M as b,S as B}from"./chunks/theme.G7hmk5xB.js";import{j as D,c as p,a,F as d,R as r,x as s,w as i,l as k,A as h,a6 as u,Q as F,o as l,f as g,t as o}from"./chunks/framework.BIedRrz2.js";const _=a("h1",{id:"button-按钮",tabindex:"-1"},[h("Button 按钮 "),a("a",{class:"header-anchor",href:"#button-按钮","aria-label":'Permalink to "Button 按钮"'},"​")],-1),q=a("p",null,"常用的操作按钮",-1),m=a("h2",{id:"基础用法",tabindex:"-1"},[h("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),v=a("p",null,"使用 type、plain、round 和 circle 来定义按钮的样式。",-1),f={class:"button-content button-basic"},x={class:"button-basic-defalut"},P={class:"button-basic-plain"},T={class:"button-basic-round"},S={class:"button-basic-circle"},I={class:"button-basic-circle"},w=u("",4),z={class:"button-content button-disabled"},V={class:"button-disabled-defalut"},N={class:"button-disabled-plain"},M=u("",2),R={class:"button-content button-link"},j={class:"button-link-defalut"},G={class:"button-link-link"},K=u("",3),O={class:"button-content button-size"},J={class:"button-size-show"},L={class:"button-size-show"},Q=u("",3),H={class:"button-content button-tag"},U={class:"button-tag-defalut"},W=u("",4),X={class:"button-content button-icon"},Y={class:"button-icon-defalut"},Z={class:"button-icon-defalut"},$=u("",5),ss={class:"button-content button-loading"},is={class:"button-loading-defalut"},as=a("h2",{id:"按钮组",tabindex:"-1"},[h("按钮组 "),a("a",{class:"header-anchor",href:"#按钮组","aria-label":'Permalink to "按钮组"'},"​")],-1),ts=a("p",null,"以按钮组的方式出现，常用于多项类似操作。",-1),ns=a("p",null,[h("使用 "),a("code",null,"<ued-button-group>"),h(" 对多个按钮分组。")],-1),hs=a("p",null,"使用 size type 可以设置按钮组内按钮的 size 和 type,优先级高于原按钮的 size 和 type",-1),ls={class:"button-content button-group"},ks={class:"button-group-defalut"},ps={class:"button-group-round"},Es={class:"button-group-cirle"},es={class:"button-group-icon"},ds=u("",13),Fs=JSON.parse('{"title":"Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"components/button/index.md","filePath":"components/button/index.md"}'),rs={name:"components/button/index.md"},bs=Object.assign(rs,{setup(gs){const E=D([{type:"",text:"默认按钮"},{type:"primary",text:"主要按钮"},{type:"success",text:"成功按钮"},{type:"warning",text:"警告按钮"},{type:"danger",text:"危险按钮"},{type:"info",text:"信息按钮"}]);return(ys,os)=>{const t=F("ued-button"),e=F("ued-icon"),c=F("ued-button-group"),C=F("Delete");return l(),p("div",null,[_,q,m,v,a("div",f,[a("div",x,[(l(!0),p(d,null,r(E.value,n=>(l(),g(t,{key:n.type,type:n.type},{default:i(()=>[h(o(n.text),1)]),_:2},1032,["type"]))),128))]),a("div",P,[(l(!0),p(d,null,r(E.value,n=>(l(),g(t,{key:n.type,type:n.type,plain:""},{default:i(()=>[h(o(n.text),1)]),_:2},1032,["type"]))),128))]),a("div",T,[(l(!0),p(d,null,r(E.value,n=>(l(),g(t,{key:n.type,type:n.type,round:""},{default:i(()=>[h(o(n.text),1)]),_:2},1032,["type"]))),128))]),a("div",S,[(l(!0),p(d,null,r(E.value,n=>(l(),g(t,{key:n.type,type:n.type,icon:k(y),circle:""},null,8,["type","icon"]))),128))]),a("div",I,[(l(!0),p(d,null,r(E.value,n=>(l(),g(t,{key:n.type,type:n.type,circle:""},{default:i(()=>[s(e,null,{default:i(()=>[s(k(y))]),_:1})]),_:2},1032,["type"]))),128))])]),w,a("div",z,[a("div",V,[(l(!0),p(d,null,r(E.value,n=>(l(),g(t,{key:n.type,type:n.type,disabled:""},{default:i(()=>[h(o(n.text),1)]),_:2},1032,["type"]))),128))]),a("div",N,[(l(!0),p(d,null,r(E.value,n=>(l(),g(t,{key:n.type,type:n.type,disabled:"",plain:""},{default:i(()=>[h(o(n.text),1)]),_:2},1032,["type"]))),128))])]),M,a("div",R,[a("div",j,[(l(!0),p(d,null,r(E.value,n=>(l(),g(t,{key:n.type,type:n.type,link:""},{default:i(()=>[h(o(n.text),1)]),_:2},1032,["type"]))),128))]),a("div",G,[(l(!0),p(d,null,r(E.value,n=>(l(),g(t,{key:n.type,type:n.type,link:"",disabled:""},{default:i(()=>[h(o(n.text),1)]),_:2},1032,["type"]))),128))])]),K,a("div",O,[a("div",J,[s(t,{size:"large"},{default:i(()=>[h("默认按钮")]),_:1}),s(t,null,{default:i(()=>[h("默认按钮")]),_:1}),s(t,{size:"small"},{default:i(()=>[h("默认按钮")]),_:1})]),a("div",L,[s(t,{size:"large",round:""},{default:i(()=>[h("默认按钮")]),_:1}),s(t,{round:""},{default:i(()=>[h("默认按钮")]),_:1}),s(t,{size:"small",round:""},{default:i(()=>[h("默认按钮")]),_:1})])]),Q,a("div",H,[a("div",U,[s(t,null,{default:i(()=>[h("默认按钮")]),_:1}),s(t,{tag:"div"},{default:i(()=>[h("div")]),_:1}),s(t,{class:"vp-raw",type:"primary",tag:"a",href:"https://github.com/bin-K/ued-plus",target:"_blank",rel:"noopener noreferrer"},{default:i(()=>[h(" a ")]),_:1})])]),W,a("div",X,[a("div",Y,[s(t,{type:"primary",icon:k(y)},{default:i(()=>[h(" 主要按钮 ")]),_:1},8,["icon"])]),a("div",Z,[s(t,{type:"primary"},{default:i(()=>[s(e,{class:"ued-icon--left"},{default:i(()=>[s(k(y))]),_:1}),h(" 主要按钮 ")]),_:1})])]),$,a("div",ss,[a("div",is,[s(t,{type:"primary",loading:""},{default:i(()=>[h("加载中")]),_:1}),s(t,{type:"primary",loading:"","loading-icon":k(y)},{default:i(()=>[h(" 加载中 ")]),_:1},8,["loading-icon"]),s(t,{type:"primary",loading:""},{icon:i(()=>[s(k(A))]),default:i(()=>[h(" 加载中 ")]),_:1})])]),as,ts,ns,hs,a("div",ls,[a("div",ks,[s(c,null,{default:i(()=>[s(t,{type:"primary",icon:k(b)},{default:i(()=>[h("主要按钮")]),_:1},8,["icon"]),s(t,{type:"primary"},{default:i(()=>[h(" 主要按钮"),s(e,{class:"ued-icon--right"},{default:i(()=>[s(k(y))]),_:1})]),_:1})]),_:1}),s(c,{size:"small"},{default:i(()=>[s(t,{type:"success",icon:k(b)},{default:i(()=>[h("成功按钮")]),_:1},8,["icon"]),s(t,{type:"success"},{default:i(()=>[h(" 成功按钮"),s(e,{class:"ued-icon--right"},{default:i(()=>[s(k(y))]),_:1})]),_:1})]),_:1})]),a("div",ps,[s(c,{type:"warning"},{default:i(()=>[s(t,{icon:k(b),round:""},{default:i(()=>[h(" 警告按钮 ")]),_:1},8,["icon"]),s(t,{round:""},{default:i(()=>[h(" 警告按钮"),s(e,{class:"ued-icon--right"},{default:i(()=>[s(k(y))]),_:1})]),_:1})]),_:1})]),a("div",Es,[s(c,{type:"danger"},{default:i(()=>[s(t,{icon:k(B),circle:""},null,8,["icon"]),s(t,null,{default:i(()=>[s(e,{name:"Message",circle:""})]),_:1}),s(t,{circle:""},{default:i(()=>[s(e,null,{default:i(()=>[s(C)]),_:1})]),_:1})]),_:1})]),a("div",es,[s(c,{type:"info"},{default:i(()=>[s(t,{icon:k(B)},null,8,["icon"]),s(t,null,{default:i(()=>[s(e,{name:"Message"})]),_:1}),s(t,null,{default:i(()=>[s(e,null,{default:i(()=>[s(C)]),_:1})]),_:1})]),_:1})])]),ds])}}});export{Fs as __pageData,bs as default};
