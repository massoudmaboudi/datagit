(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{112:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return b})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return i}));var o=t(3),r=t(8),a=(t(0),t(121)),b=(t(123),{id:"for_while",title:"\u062d\u0644\u0642\u0647 \u0647\u0627\u06cc \u062a\u06a9\u0631\u0627\u0631",sidebar_label:"\u062d\u0644\u0642\u0647 \u0647\u0627\u06cc \u062a\u06a9\u0631\u0627\u0631",hide_title:!1,hide_table_of_contents:!1,description:"\u062d\u0644\u0642\u0647 \u0647\u0627\u06cc \u062a\u06a9\u0631\u0627\u0631|\u062f\u06cc\u062a\u0627\u06af\u06cc\u062a",keywords:["\u0622\u0645\u0648\u0632\u0634 \u0645\u0642\u062f\u0645\u0627\u062a\u06cc Anaconda","\u0622\u0645\u0648\u0632\u0634 Anaconda","\u0646\u0635\u0628 Anaconda","\u0622\u0645\u0648\u0632\u0634 \u0646\u0635\u0628 Anaconda","\u0646\u0635\u0628 Anaconda \u062f\u0631 \u0648\u06cc\u0646\u062f\u0648\u0632","\u0646\u0635\u0628 Anaconda \u062f\u0631 \u0644\u06cc\u0646\u0648\u06a9\u0633","\u0646\u0635\u0628 Anaconda \u062f\u0631 \u0645\u06a9","\u0622\u0645\u0648\u0632\u0634 \u0645\u0642\u062f\u0645\u0627\u062a\u06cc \u0622\u0646\u0627\u06a9\u0648\u0646\u062f\u0627","\u0622\u0645\u0648\u0632\u0634 \u0622\u0646\u0627\u06a9\u0648\u0646\u062f\u0627","\u0646\u0635\u0628 \u0622\u0646\u0627\u06a9\u0648\u0646\u062f\u0627","\u0622\u0645\u0648\u0632\u0634 \u0646\u0635\u0628 \u0622\u0646\u0627\u06a9\u0648\u0646\u062f\u0627","\u0646\u0635\u0628 \u0622\u0646\u0627\u06a9\u0648\u0646\u062f\u0627 \u062f\u0631 \u0648\u06cc\u0646\u062f\u0648\u0632","\u0646\u0635\u0628 \u0622\u0646\u0627\u06a9\u0648\u0646\u062f\u0627 \u062f\u0631 \u0644\u06cc\u0646\u0648\u06a9\u0633","\u0646\u0635\u0628 \u0622\u0646\u0627\u06a9\u0648\u0646\u062f\u0627 \u062f\u0631 \u0645\u06a9"],image:"/img/python/python-logo.svg"}),l={unversionedId:"python/beginner/flow_control/for_while",id:"python/beginner/flow_control/for_while",isDocsHomePage:!1,title:"\u062d\u0644\u0642\u0647 \u0647\u0627\u06cc \u062a\u06a9\u0631\u0627\u0631",description:"\u062d\u0644\u0642\u0647 \u0647\u0627\u06cc \u062a\u06a9\u0631\u0627\u0631|\u062f\u06cc\u062a\u0627\u06af\u06cc\u062a",source:"@site/docs/python/beginner/flow_control/for_while.md",slug:"/python/beginner/flow_control/for_while",permalink:"/docs/python/beginner/flow_control/for_while",version:"current",sidebar_label:"\u062d\u0644\u0642\u0647 \u0647\u0627\u06cc \u062a\u06a9\u0631\u0627\u0631",sidebar:"python",previous:{title:"\u062f\u06cc\u06a9\u0634\u0646\u0631\u06cc",permalink:"/docs/python/beginner/data_types/dictionary"},next:{title:"\u0639\u0628\u0627\u0631\u0627\u062a \u0645\u0646\u0637\u0642\u06cc",permalink:"/docs/python/beginner/flow_control/if_else"}},c=[{value:"<strong>\u062d\u0644\u0642\u0647 while</strong>",id:"\u062d\u0644\u0642\u0647-while",children:[]},{value:"<strong>\u062d\u0644\u0642\u0647 for</strong>",id:"\u062d\u0644\u0642\u0647-for",children:[]}],p={toc:c};function i(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u062d\u0644\u0642\u0647-while"},Object(a.b)("strong",{parentName:"h2"},"\u062d\u0644\u0642\u0647 while")),Object(a.b)("p",null,"\u0634\u0627\u06cc\u062f \u0628\u0631\u0627\u06cc \u0634\u0645\u0627 \u0647\u0645 \u067e\u06cc\u0634 \u0627\u0648\u0645\u062f\u0647 \u0628\u0627\u0634\u0647 \u06a9\u0647 \u0628\u062e\u0648\u0627\u06cc\u0646 \u06cc\u0647 \u06a9\u0627\u0631 \u062a\u06a9\u0631\u0627\u0631\u06cc \u0631\u0648 \u0627\u0646\u062c\u0627\u0645 \u0628\u062f\u06cc\u0646 \u0648 \u0628\u0647 \u0627\u06cc\u0646 \u0641\u06a9\u0631 \u06a9\u0646\u06cc\u0646 \u06a9\u0647 \u0686\u0637\u0648\u0631 \u0645\u06cc\u0634\u0647 \u0627\u0648\u0646 \u0631\u0648 \u0628\u0647 \u0635\u0648\u0631\u062a \u0627\u062a\u0648\u0645\u0627\u062a\u06cc\u06a9 \u0627\u0646\u062c\u0627\u0645 \u062f\u0627\u062f. \u0627\u0644\u0628\u062a\u0647 \u06a9\u0647 \u062c\u0647\u0627\u0646 \u0648\u0627\u0642\u0639\u06cc \u0628\u0627 \u062c\u0647\u0627\u0646\u06cc \u06a9\u0627\u0645\u067e\u06cc\u0648\u062a\u0631\u0647\u0627 \u062a\u0641\u0627\u0648\u062a\u06cc \u062f\u0627\u0631\u0647. \u0648\u0644\u06cc \u0641\u0631\u0636 \u06a9\u0646\u06cc\u062f \u0628\u062e\u0648\u0627\u06cc\u062f \u062a\u0648\u06cc \u0628\u06cc \u0645\u0639\u0646\u06cc \u062a\u0631\u06cc\u0646 \u06a9\u0627\u0631\u060c \u0627\u0639\u062f\u0627\u062f 1 \u062a\u0627 100 \u0631\u0648 \u067e\u0631\u06cc\u0646\u062a \u06a9\u0646\u06cc\u0646. \u0627\u06cc\u0646\u06a9\u0647 \u0628\u0634\u06cc\u0646\u06cc\u062f \u0648 100 \u062a\u0627 \u062f\u0633\u062a\u0648\u0631 ",Object(a.b)("strong",{parentName:"p"},"print"),' \u0628\u0646\u0648\u06cc\u0633\u06cc\u0646 \u06a9\u0647 \u0642\u0637\u0639\u0627 \u06a9\u0627\u0631 \u0639\u0627\u0642\u0644\u0627\u0646\u0647 \u0627\u06cc \u0646\u06cc\u0633\u062a. \u0628\u0631\u0627\u06cc \u0647\u0645\u06cc\u0646 \u0645\u06cc\u062a\u0648\u0646\u06cc\u0645 \u0627\u0632 \u0627\u0628\u0632\u0627\u0631\u06cc \u0628\u0647 \u0627\u0633\u0645 "\u062d\u0644\u0642\u0647 \u062a\u06a9\u0631\u0627\u0631" \u062a\u0648\u06cc \u0647\u0645\u0647 \u06cc \u0632\u0628\u0627\u0646 \u0647\u0627\u06cc \u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u06cc\u0633\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u06cc\u0645. \u067e\u0627\u06cc\u062a\u0648\u0646 \u0647\u0645 \u062f\u0648\u062a\u0627 \u062d\u0644\u0642\u0647 \u0628\u0633\u06cc\u0627\u0631 \u0645\u0639\u0631\u0648\u0641 \u062f\u0627\u0631\u0647 \u0628\u0647 \u0627\u0633\u0645 ',Object(a.b)("strong",{parentName:"p"},"for")," \u0648 ",Object(a.b)("strong",{parentName:"p"},"while")," (\u0627\u06a9\u062b\u0631 \u0632\u0628\u0627\u0646 \u0647\u0627 \u0628\u0647 \u0647\u0645\u06cc\u0646 \u0627\u0633\u0645 \u0647\u0633\u062a\u0646). \u0627\u06cc\u0646 \u062f\u0648\u062a\u0627 \u062d\u0644\u0642\u0647 \u0639\u0645\u0644\u0627 \u06a9\u0627\u0631 \u06cc\u06a9\u0633\u0627\u0646\u06cc \u0631\u0648 \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc\u062f\u0646 \u0648 \u06cc\u06a9\u0633\u0631\u06cc \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a \u062c\u0632\u0626\u06cc \u062f\u0627\u0631\u0646. \u067e\u0633 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u0648\u0646\u0647\u0627 \u0646\u0633\u0628\u062a\u0627 \u0628\u0647 \u0633\u0644\u06cc\u0642\u0647 \u0634\u0645\u0627 \u0628\u0633\u062a\u06af\u06cc \u062f\u0627\u0631\u0647. \u0627\u0644\u0628\u062a\u0647 \u06cc\u0647 \u0633\u0631\u06cc \u0622\u062f\u0645\u0627 \u0645\u06cc\u06af\u0646 \u06a9\u0647 \u062d\u0644\u0642\u0647 for \u0633\u0631\u06cc\u0639 \u062a\u0631\u0647 \u0648\u0644\u06cc \u062e\u0628 \u0628\u0639\u0636\u06cc\u0627\u0645 \u062e\u0644\u0627\u0641\u0634\u0648 \u062b\u0627\u0628\u062a \u06a9\u0631\u062f\u0646 \u067e\u0633 \u0646\u06af\u0631\u0627\u0646 \u0646\u0628\u0627\u0634\u06cc\u0646 :)."),Object(a.b)("p",null,"\u06a9\u0644\u0627 \u0627\u06cc\u062f\u0647 \u0627\u0635\u0644\u06cc \u062d\u0644\u0642\u0647 ",Object(a.b)("strong",{parentName:"p"},"while")," \u0627\u06cc\u0646\u0647:"),Object(a.b)("p",null,"\u062a\u0627 \u0648\u0642\u062a\u06cc \u0634\u0631\u0637 \u062c\u0644\u0648\u06cc ",Object(a.b)("strong",{parentName:"p"},"while")," \u062f\u0631\u0633\u062a\u0647\u060c \u06a9\u062f\u0647\u0627\u06cc \u0628\u0639\u062f \u0627\u0648\u0646 \u0631\u0648 \u0627\u062c\u0631\u0627 \u06a9\u0646 (\u0628\u0647 \u0647\u0645\u06cc\u0646 \u0631\u0627\u062d\u062a\u06cc)."),Object(a.b)("p",null,"\u06a9\u062f \u0632\u06cc\u0631 \u0631\u0648 \u062f\u0631 \u0646\u0638\u0631 \u0628\u06af\u06cc\u0631\u06cc\u062f:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"shomare = 1\n\nwhile shomare < 10:\n  print(shomare)\n  shomare = shomare + 1\n")),Object(a.b)("p",null,"\u0627\u0648\u0644 \u0627\u0632 \u0647\u0645\u0647 \u06cc\u06a9 \u0645\u062a\u063a\u06cc\u0631 \u062a\u0639\u0631\u06cc\u0641 \u0645\u06cc\u06a9\u0646\u06cc\u0645 \u0648 \u0639\u062f\u062f 1 \u0631\u0648 \u0645\u06cc\u0630\u0627\u0631\u06cc\u0645 \u062a\u0648\u0634. \u0628\u0639\u062f\u0634 \u0645\u06cc\u06af\u06cc\u0645 \u062a\u0627 \u0648\u0642\u062a\u06cc \u0645\u0642\u062f\u0627\u0631 \u0627\u06cc\u0646 \u0645\u062a\u063a\u06cc\u0631 (\u06a9\u0647 \u0627\u0648\u0644\u0634 1 \u0647\u0633\u062a) \u06a9\u0645\u062a\u0631 \u0627\u0632 10 \u0628\u0648\u062f\u060c \u0627\u0648\u0646 \u0645\u0642\u062f\u0627\u0631 \u0631\u0648 \u067e\u0631\u06cc\u0646\u062a \u06a9\u0646. \u0628\u0639\u062f\u0634 \u0647\u0645 \u06cc\u06a9\u06cc \u0628\u0647 \u0627\u0648\u0646 \u0645\u0642\u062f\u0627\u0631 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646. \u0628\u0639\u062f\u0634 \u062f\u0648\u0628\u0627\u0631\u0647 \u0628\u0631\u06af\u0631\u062f \u0628\u0627\u0644\u0627 \u0648 \u0686\u06a9 \u06a9\u0646 \u0628\u0628\u06cc\u0646 \u0645\u0642\u062f\u0627\u0631 \u06a9\u0645\u062a\u0631 \u0627\u0632 10 \u0647\u0633\u062a \u06cc\u0627 \u0646\u0647\u060c \u0627\u06af\u0631 \u0628\u0648\u062f\u060c \u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u06cc\u0646 \u06a9\u0627\u0631 \u0631\u0648 \u0627\u0646\u062c\u0627\u0645 \u0628\u062f\u0647. \u062d\u0627\u0644\u0627 \u0641\u0631\u0636 \u06a9\u0646\u06cc\u0646 ",Object(a.b)("strong",{parentName:"p"},"shomare = 9"),"  \u0634\u062f. \u0645\u06cc\u0627\u062f \u0686\u06a9 \u0645\u06cc\u06a9\u0646\u0647 \u0645\u06cc\u0628\u06cc\u0646\u0647 9 \u0627\u0632 10 \u06a9\u0648\u0686\u06cc\u06a9\u062a\u0631\u0647\u060c \u067e\u0633 \u0686\u0627\u067e\u0634 \u0645\u06cc\u06a9\u0646\u0647 \u0648 \u06cc\u06a9\u06cc \u0628\u0647\u0634 \u0627\u0636\u0627\u0641\u0647 \u0645\u06cc\u06a9\u0646\u0647. \u062f\u0648\u0628\u0627\u0631\u0647 \u0645\u06cc\u0631\u0647 \u0628\u0627\u0644\u0627. \u0686\u06a9 \u0645\u06cc\u06a9\u0646\u0647 \u0645\u06cc\u0628\u06cc\u0646\u0647 \u06a9\u0647 10 \u0627\u0632 10 \u06a9\u0648\u0686\u06cc\u06a9\u062a\u0631 \u0646\u06cc\u0633\u062a. \u067e\u0633 \u06a9\u062f\u0647\u0627\u06cc \u0632\u06cc\u0631 while \u0631\u0648 \u062f\u06cc\u06af\u0647 \u0627\u062c\u0631\u0627 \u0646\u0645\u06cc\u06a9\u0646\u0647 \u0648 \u0627\u0635\u0637\u0644\u0627\u062d\u0627 \u0645\u06cc\u06af\u0646 \u0627\u0632 \u062d\u0644\u0642\u0647 \u062e\u0627\u0631\u062c \u0645\u06cc\u0634\u06cc\u0645. \u06a9\u062f \u0631\u0648 \u0627\u062c\u0631\u0627 \u06a9\u0646\u06cc\u0646 \u062d\u062a\u0645\u0627 \u062a\u0627 \u0645\u062a\u0648\u062c\u0647 \u062f\u0627\u0633\u062a\u0627\u0646 \u0628\u0634\u06cc\u0646."),Object(a.b)("p",null,"\u062e\u0628\u060c \u0628\u0647 \u0627\u0648\u0646 \u062f\u0648 \u062e\u0637 \u0632\u06cc\u0631 ",Object(a.b)("strong",{parentName:"p"},"while")," \u0645\u06cc\u06af\u0646 \u0628\u0644\u0648\u06a9 \u06a9\u062f (",Object(a.b)("strong",{parentName:"p"},"Code Block"),")."),Object(a.b)("p",null,"\u06cc\u0647 \u0686\u06cc\u0632 \u062c\u0627\u0644\u0628\u06cc \u0647\u0645 \u0628\u06af\u0645 \u0627\u06cc\u0646\u06a9\u0647 \u0628\u0647 \u0627\u06cc\u0646 \u06a9\u062f\u06cc \u06a9\u0647 \u0627\u0644\u0627\u0646 \u0646\u0648\u0634\u062a\u06cc\u0645\u060c \u0645\u06cc\u06af\u0646 \u0634\u0645\u0627\u0631\u0646\u062f\u0647. \u06cc\u0639\u0646\u06cc \u0627\u0632 \u06cc\u0647 \u0639\u062f\u062f\u06cc \u0634\u0631\u0648\u0639 \u0645\u06cc\u06a9\u0646\u0647 \u0628\u0647 \u0634\u0645\u0631\u062f\u0646 \u062a\u0627 \u06cc\u0647 \u0639\u062f\u062f \u062f\u06cc\u06af\u0647."),Object(a.b)("p",null," \u062a\u0645\u0631\u06cc\u0646 \u06a9\u0646\u06cc\u0646 \u0628\u0628\u06cc\u0646\u06cc\u0646 \u0645\u06cc\u062a\u0648\u0646\u06cc\u0646 \u0634\u0645\u0627\u0631\u0646\u062f\u0647 \u0627\u06cc \u0628\u0633\u0627\u0632\u06cc\u0646 \u06a9\u0647 \u0627\u06cc\u0646\u0637\u0648\u0631\u06cc \u0632\u06cc\u0627\u062f \u0628\u0634\u0647:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"1\u060c 3\u060c 5\u060c 7\u060c 9\u060c 11\u060c 13\u060c 15\u060c 17\u060c 19\n")),Object(a.b)("h2",{id:"\u062d\u0644\u0642\u0647-for"},Object(a.b)("strong",{parentName:"h2"},"\u062d\u0644\u0642\u0647 for")),Object(a.b)("p",null,"\u062d\u0644\u0642\u0647 \u062f\u0648\u0645 \u0627\u0633\u0645\u0634 ",Object(a.b)("strong",{parentName:"p"},"for")," \u0647\u0633\u062a. \u06cc\u0647 \u062a\u0639\u0631\u06cc\u0641 \u0633\u062e\u062a \u0627\u0632\u0634 \u0645\u06cc\u06af\u0645 \u0648 \u0645\u062b\u0627\u0644\u06cc \u0645\u06cc\u0632\u0646\u0645 \u06a9\u0647 \u0631\u0648\u0634\u0646 \u062a\u0631 \u0628\u0634\u06cc\u0646."),Object(a.b)("p",null,"\u0628\u0647 \u0627\u0632\u0627\u06cc \u06cc\u06a9 \u0686\u06cc\u0632\u06cc \u062a\u0648\u06cc \u06cc\u06a9 \u0686\u06cc\u0632 \u062f\u06cc\u06af\u0647\u060c \u06a9\u0627\u0631\u0647\u0627\u06cc \u0632\u06cc\u0631 \u0631\u0648 \u0627\u0646\u062c\u0627\u0645 \u0628\u062f\u0647."),Object(a.b)("p",null,"\u062d\u0627\u0644\u0627 \u0627\u06cc\u0646 \u06cc\u0639\u0646\u06cc \u0686\u06cc\u061f \u0645\u062b\u0644\u0627 \u0632\u06cc\u0631 \u0646\u0634\u0648\u0646 \u0645\u06cc\u062f\u0647 \u0642\u0636\u06cc\u0647 \u0631\u0648:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"for yechizi in chize_dovom:\n\n  ein_karharo_anjam_bde\n")),Object(a.b)("p",null,"\u0627\u0644\u0628\u062a\u0647 \u0648\u0627\u0642\u0639\u0627 \u0645\u062b\u0627\u0644 \u062e\u0648\u0628\u06cc \u0646\u0628\u0648\u062f \u0641\u0642\u0637 \u062e\u0648\u0627\u0633\u062a\u0645 \u062a\u0639\u0631\u06cc\u0641\u0645 \u062e\u0627\u0644\u06cc \u0627\u0632 \u0628\u0631\u0646\u0627\u0645\u0647 \u0646\u0648\u06cc\u0633\u06cc \u0646\u0628\u0627\u0634\u0647 :)."),Object(a.b)("p",null,"\u0648\u0644\u06cc \u0645\u062b\u0627\u0644 \u0632\u06cc\u0631 \u0648\u0627\u0642\u0639\u0627 \u062f\u06cc\u06af\u0647 \u0645\u062b\u0627\u0644 \u062e\u0648\u0628\u06cc\u0647:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'esm = "massoud"\n\nfor harf in esm:\n  print(harf)\n')),Object(a.b)("p",null,"\u0645\u062b\u0627\u0644 \u0628\u0627\u0644\u0627 \u0631\u0648 \u06a9\u0647 \u0627\u062c\u0631\u0627 \u06a9\u0646\u06cc\u062f \u0645\u06cc\u0628\u06cc\u0646\u06cc\u062f \u06a9\u0647 \u062d\u0631\u0648\u0641 \u0627\u0633\u0645 \u0645\u0646 \u0631\u0648 \u06a9\u0647 \u062a\u0648\u06cc \u0645\u062a\u063a\u06cc\u0631 ",Object(a.b)("strong",{parentName:"p"},"esm")," \u0647\u0633\u062a \u0628\u0647 \u062a\u0631\u062a\u06cc\u0628 \u0686\u0627\u067e \u0645\u06cc\u06a9\u0646\u0647. \u062d\u0627\u0644\u0627 \u0641\u0631\u0636 \u06a9\u0646\u06cc\u062f \u06cc\u06a9 \u0627\u0633\u0645 \u062f\u06cc\u06af\u0647 \u0628\u0646\u0648\u06cc\u0633\u06cc\u0645. \u0628\u0647 \u062c\u0627\u06cc ",Object(a.b)("strong",{parentName:"p"},"massoud"),"\u060c \u0627\u0633\u0645 \u062e\u0648\u062f\u062a\u0648\u0646 \u0631\u0648 \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f (\u062a\u0631\u062c\u06cc\u062d\u0627 \u0628\u0647 \u0627\u0646\u06af\u0644\u06cc\u0633\u06cc). \u0627\u06af\u0631 \u062f\u0631\u0633\u062a \u0646\u0648\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc\u0646 \u0645\u06cc\u062a\u0648\u0646\u06cc\u062f \u062d\u0631\u0648\u0641 \u0627\u0633\u0645 \u062e\u0648\u062f\u062a\u0648\u0646 \u0631\u0648 \u0628\u0628\u06cc\u0646\u06cc\u062f. \u0648\u0644\u06cc \u0627\u06af\u0631 \u0628\u062e\u0648\u0627\u06cc\u0645 \u06cc\u0647 \u0628\u0631\u0646\u0627\u0645\u0647 \u0628\u0646\u0648\u06cc\u0633\u06cc\u0645 \u06a9\u0647 \u0647\u0631 \u0627\u0633\u0645\u06cc \u0628\u0647\u0634 \u0645\u06cc\u062f\u06cc\u0645\u060c \u062d\u0631\u0648\u0641\u0634 \u0631\u0648 \u0686\u0627\u067e \u06a9\u0646\u0647\u060c \u0686\u0637\u0648\u0631 \u0628\u0646\u0648\u06cc\u0633\u06cc\u0645\u061f \u0646\u0645\u06cc\u0634\u0647 \u06a9\u0647 \u062a\u0645\u0627\u0645 \u0627\u0633\u0645 \u0647\u0627\u06cc \u062f\u0646\u06cc\u0627 \u0631\u0648 \u062a\u0648\u06cc \u0628\u0631\u0646\u0627\u0645\u0645\u0648\u0646 \u0628\u0646\u0648\u06cc\u0633\u06cc\u0645 \u06a9\u0647! \u0627\u06cc\u0646\u062c\u0627\u0633\u062a \u06a9\u0647 \u0628\u0627\u06cc\u062f \u0627\u06cc\u0646 \u0633\u0648\u0627\u0644 \u0631\u0648 \u0627\u0632 \u062e\u0648\u062f\u0645\u0648\u0646 \u06a9\u0646\u06cc\u0645 \u0648 \u062c\u0648\u0627\u0628\u0634 \u06a9\u0645\u06a9 \u0645\u06cc\u06a9\u0646\u0647 \u0628\u0647 \u062c\u0648\u0627\u0628 \u062f\u0627\u062f\u0646 \u0628\u0647 \u0627\u06cc\u0646 \u0633\u0648\u0627\u0644\u0645\u0648\u0646 :"),Object(a.b)("p",null,"\u0686\u0631\u0627 \u0627\u0635\u0644\u0627 \u0627\u0632 for \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u06a9\u0646\u06cc\u0645\u061f \u0627\u06cc\u0646 \u062d\u0644\u0642\u0647 \u0632\u0645\u0627\u0646\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u0634\u0647 \u06a9\u0647 \u0628\u062e\u0648\u0627\u06cc\u0645 \u06cc\u06a9 \u0633\u0631\u06cc \u06a9\u0627\u0631 \u0645\u062d\u062f\u0648\u062f \u06a9\u0646\u06cc\u0645. \u06cc\u0627 \u0645\u062b\u0644\u0627 \u0646\u062f\u0648\u0646\u06cc\u0645 \u0686\u0646\u062f \u0628\u0627\u0631 \u0642\u0631\u0627\u0631\u0647 \u0627\u06cc\u0646 \u06a9\u0627\u0631 \u0627\u0646\u062c\u0627\u0645 \u0628\u0634\u0647 \u0648 \u062a\u0639\u062f\u0627\u062f \u062a\u06a9\u0631\u0627\u0631\u0645\u0648\u0646 \u0631\u0648 \u0646\u062f\u0648\u0646\u06cc\u0645 (\u0645\u062b\u0644 \u0645\u062b\u0627\u0644 \u0627\u0633\u0645 \u0648 \u0627\u06cc\u0646\u0627). \u0686\u0648\u0646 \u0647\u0631 \u0627\u0633\u0645\u06cc \u0628\u0646\u0648\u06cc\u0633\u06cc\u0645\u060c \u0627\u0648\u0644 \u0645\u06cc\u0630\u0627\u0631\u0647 \u062a\u0648\u06cc \u0645\u062a\u063a\u06cc\u0631 ",Object(a.b)("strong",{parentName:"p"},"esm"),"\u060c \u0628\u0639\u062f\u0634 \u0645\u06cc\u0630\u0627\u0631\u0647 \u062a\u0648\u06cc \u062d\u0644\u0642\u0647 ",Object(a.b)("strong",{parentName:"p"},"for")," \u0648 \u0686\u0627\u067e\u0634 \u0645\u06cc\u06a9\u0646\u0647!"),Object(a.b)("p",null,"\u06cc\u0647 \u0645\u062b\u0627\u0644 \u062f\u06cc\u06af\u0647 \u0647\u0645 \u0628\u0632\u0646\u06cc\u0645 (\u0628\u0631\u0627\u06cc \u0641\u0647\u0645\u06cc\u062f\u0646 \u0645\u0641\u0647\u0648\u0645 \u0644\u06cc\u0633\u062a \u0628\u0627\u06cc\u062f \u062f\u0631\u0633 \u0644\u06cc\u0633\u062a \u062f\u0631 \u067e\u0627\u06cc\u062a\u0648\u0646 \u0631\u0648 \u0628\u062e\u0648\u0646\u06cc\u062f):"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"list = [1,5,6,6,2,1,5,2,1,4]\n\nfor x in list:\n  print(x)\n")),Object(a.b)("p",null,"\u06cc\u06a9 \u0645\u062b\u0627\u0644 \u062f\u06cc\u06af\u0647 \u0647\u0645 \u0628\u0647 \u0627\u0633\u0645 ",Object(a.b)("strong",{parentName:"p"},"generator")," \u0628\u06af\u06cc\u0645 \u06a9\u0647 \u0627\u0633\u0645\u0634 \u062e\u06cc\u0644\u06cc \u0642\u0634\u0646\u06af\u0647:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"for x in range(1,11):\n  print(x)\n")),Object(a.b)("p",null,"\u0627\u06cc\u0646 \u062a\u0627\u0628\u0639 \u0645\u06cc\u0634\u0647 \u06af\u0641\u062a \u062a\u0642\u0631\u06cc\u0628\u0627 \u0645\u062b\u0644 \u062a\u0627\u0628\u0639 \u0634\u0645\u0627\u0631\u0646\u062f\u0647 \u0647\u0633\u062a\u0634 \u0648\u0644\u06cc \u062e\u0628 \u06cc\u06a9\u0645 \u0633\u0631\u06cc\u0639\u062a\u0631 \u0648 \u0628\u0647\u062a\u0631!"))}i.isMDXComponent=!0}}]);