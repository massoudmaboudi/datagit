(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{118:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(22),r=t(123),m=t(21),i=t(126),o=t(124);var s=function(e){const{metadata:a}=e;return l.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},l.a.createElement("div",{className:"pagination-nav__item"},a.previous&&l.a.createElement(o.a,{className:"pagination-nav__link",to:a.previous.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"\u0642\u0628\u0644\u06cc"),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",a.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a.next&&l.a.createElement(o.a,{className:"pagination-nav__link",to:a.next.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"\u0628\u0639\u062f\u06cc"),l.a.createElement("div",{className:"pagination-nav__label"},a.next.title," \xbb"))))},d=t(245),E=t(189),g=t(181),p=t(122),u=t(82),v=t.n(u),b=t(130);a.default=function(e){const{siteConfig:a}=Object(m.default)(),{url:t}=a,{content:n}=e,{metadata:o,frontMatter:{image:u,keywords:_,hide_title:N,hide_table_of_contents:w}}=n,{description:f,title:k,permalink:h,editUrl:y,lastUpdatedAt:j,lastUpdatedBy:O}=o,{pluginId:x}=Object(b.useActivePlugin)({failfast:!0}),I=Object(b.useVersions)(x),A=Object(b.useActiveVersion)(x),F=I.length>1,U=Object(r.useTitleFormatter)(k),C=Object(i.a)(u,{absolute:!0});return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,null,l.a.createElement("title",null,U),l.a.createElement("meta",{property:"og:title",content:U}),f&&l.a.createElement("meta",{name:"description",content:f}),f&&l.a.createElement("meta",{property:"og:description",content:f}),_&&_.length&&l.a.createElement("meta",{name:"keywords",content:_.join(",")}),u&&l.a.createElement("meta",{property:"og:image",content:C}),u&&l.a.createElement("meta",{name:"twitter:image",content:C}),u&&l.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${k}`}),h&&l.a.createElement("meta",{property:"og:url",content:t+h}),h&&l.a.createElement("link",{rel:"canonical",href:t+h})),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:Object(p.a)("col",{[v.a.docItemCol]:!w})},l.a.createElement(d.a,null),l.a.createElement("div",{className:v.a.docItemContainer},l.a.createElement("article",null,F&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",A.label)),!N&&l.a.createElement("header",null,l.a.createElement("h1",{className:v.a.docTitle},k)),l.a.createElement("div",{className:"markdown"},l.a.createElement(n,null))),(y||j||O)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},y&&l.a.createElement("a",{href:y,target:"_blank",rel:"noreferrer noopener"},l.a.createElement(g.a,null),"Edit this page")),(j||O)&&l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,"Last updated"," ",j&&l.a.createElement(l.a.Fragment,null,"on"," ",l.a.createElement("time",{dateTime:new Date(1e3*j).toISOString(),className:v.a.docLastUpdatedAt},new Date(1e3*j).toLocaleDateString()),O&&" "),O&&l.a.createElement(l.a.Fragment,null,"by ",l.a.createElement("strong",null,O)),!1))))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(s,{metadata:o})))),!w&&n.toc&&l.a.createElement("div",{className:"col col--3"},l.a.createElement(E.a,{toc:n.toc}))))}}}]);