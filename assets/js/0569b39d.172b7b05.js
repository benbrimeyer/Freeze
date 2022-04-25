"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[329],{2094:function(e,l,t){t.r(l),t.d(l,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return o},toc:function(){return s},default:function(){return m}});var a=t(7462),i=t(3366),n=(t(7294),t(3905)),r=["components"],u={sidebar_position:4},d="Migrating From Llama",o={unversionedId:"MigratingFromLlama",id:"MigratingFromLlama",isDocsHomePage:!1,title:"Migrating From Llama",description:"Freeze is, unfortunately, not a true drag-and-drop replacement for projects that currently use Llama.",source:"@site/docs/MigratingFromLlama.md",sourceDirName:".",slug:"/MigratingFromLlama",permalink:"/Freeze/docs/MigratingFromLlama",editUrl:"https://github.com/benbrimeyer/Freeze/edit/master/docs/MigratingFromLlama.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"Demonstration",permalink:"/Freeze/docs/Demonstration"}},s=[{value:"Llama",id:"llama",children:[{value:".equalObjects",id:"equalobjects",children:[],level:3},{value:".isEmpty",id:"isempty",children:[],level:3}],level:2},{value:".Dictionary",id:"dictionary",children:[{value:".copy",id:"copy",children:[],level:3},{value:".copyDeep",id:"copydeep",children:[],level:3},{value:".equals",id:"equals",children:[],level:3},{value:".equalsDeep",id:"equalsdeep",children:[],level:3},{value:".fromLists",id:"fromlists",children:[],level:3},{value:".mergeDeep",id:"mergedeep",children:[],level:3},{value:".removeKeys",id:"removekeys",children:[],level:3},{value:".removeValues",id:"removevalues",children:[],level:3},{value:".update",id:"update",children:[],level:3}],level:2},{value:"List",id:"list",children:[{value:".concatDeep",id:"concatdeep",children:[],level:3},{value:".copy",id:"copy-1",children:[],level:3},{value:".copyDeep",id:"copydeep-1",children:[],level:3},{value:".create",id:"create",children:[],level:3},{value:".equals",id:"equals-1",children:[],level:3},{value:".equalsDeep",id:"equalsdeep-1",children:[],level:3},{value:".find",id:"find",children:[],level:3},{value:".findLast",id:"findlast",children:[],level:3},{value:".findWhere",id:"findwhere",children:[],level:3},{value:".findWhereLast",id:"findwherelast",children:[],level:3},{value:".insert",id:"insert",children:[],level:3},{value:".removeIndices",id:"removeindices",children:[],level:3},{value:".removeValues",id:"removevalues-1",children:[],level:3},{value:".set",id:"set",children:[],level:3},{value:".slice",id:"slice",children:[],level:3},{value:".splice",id:"splice",children:[],level:3},{value:".toSet",id:"toset",children:[],level:3},{value:".update",id:"update-1",children:[],level:3},{value:".zipAll",id:"zipall",children:[],level:3}],level:2},{value:"Set",id:"set-1",children:[],level:2}],p={toc:s};function m(e){var l=e.components,t=(0,i.Z)(e,r);return(0,n.kt)("wrapper",(0,a.Z)({},p,t,{components:l,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"migrating-from-llama"},"Migrating From Llama"),(0,n.kt)("p",null,"Freeze is, unfortunately, not a true drag-and-drop replacement for projects that currently use ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/freddylist/llama"},"Llama"),".\nYou'll need to be aware of the following breaking changes."),(0,n.kt)("p",null,"Feel free to file an issue if you'd like to start a discussion on any items from this list."),(0,n.kt)("h1",{id:"deviations"},"Deviations"),(0,n.kt)("p",null,"The following is a list of breaking deviations between Freeze and Llama:"),(0,n.kt)("h2",{id:"llama"},"Llama"),(0,n.kt)("h3",{id:"equalobjects"},".equalObjects"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Not implemented. See Freeze's ",(0,n.kt)("inlineCode",{parentName:"li"},"equals")," instead.")),(0,n.kt)("h3",{id:"isempty"},".isEmpty"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Not implemented."),(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("inlineCode",{parentName:"li"},"Freeze.Map.isEmpty")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"Freeze.List.isEmpty")," instead.")),(0,n.kt)("h2",{id:"dictionary"},".Dictionary"),(0,n.kt)("h3",{id:"copy"},".copy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Not implemented. Use ",(0,n.kt)("inlineCode",{parentName:"li"},"table.clone")," instead.")),(0,n.kt)("h3",{id:"copydeep"},".copyDeep"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Not implemented. Reconsider if you really need this.")),(0,n.kt)("h3",{id:"equals"},".equals"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Freeze.Map.equals")," will perform value-equality instead of reference-equality"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Freeze.Map.equals")," only accepts two objects to compare between instead of varags arguments"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Freeze.Map.equals")," will treat nil and void as values, where ",(0,n.kt)("inlineCode",{parentName:"li"},"Freeze.Map.equals")," would ignore these arguments")),(0,n.kt)("h3",{id:"equalsdeep"},".equalsDeep"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Not implemented.")),(0,n.kt)("h3",{id:"fromlists"},".fromLists"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Not implemented."),(0,n.kt)("li",{parentName:"ul"},"Consider ",(0,n.kt)("inlineCode",{parentName:"li"},"Freeze.Map.of")," instead.")),(0,n.kt)("h3",{id:"mergedeep"},".mergeDeep"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Not implemented.")),(0,n.kt)("h3",{id:"removekeys"},".removeKeys"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Not implemented."),(0,n.kt)("li",{parentName:"ul"},"Consider ",(0,n.kt)("inlineCode",{parentName:"li"},"Freeze.Map.filter")," instead.")),(0,n.kt)("h3",{id:"removevalues"},".removeValues"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Not implemented."),(0,n.kt)("li",{parentName:"ul"},"Consider ",(0,n.kt)("inlineCode",{parentName:"li"},"Freeze.Map.filter")," instead.")),(0,n.kt)("h3",{id:"update"},".update"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Freeze.Map.update")," requires an updater function while Llama's was optional."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Freeze.Map.update"),"'s updater signature is ",(0,n.kt)("inlineCode",{parentName:"li"},"(Value) -> (Value)")," instead of Llama's ",(0,n.kt)("inlineCode",{parentName:"li"},"(Value, Key) -> (Value)"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Freeze.Map.update")," final argument is ",(0,n.kt)("inlineCode",{parentName:"li"},"notSetValue")," instead of a ",(0,n.kt)("inlineCode",{parentName:"li"},"callback")," function.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'-- Freeze\nFreeze.Map.update(dictionary, key, function(value)\n    return string.upper(value)\nend, "default value")\n\n-- Llama\nLlama.Dictionary.update(dictionary, key, function(value, key)\n    return string.upper(value)\nend, function(key)\n    return "default value"\nend)\n')),(0,n.kt)("h2",{id:"list"},"List"),(0,n.kt)("h3",{id:"concatdeep"},".concatDeep"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Not implemented.")),(0,n.kt)("h3",{id:"copy-1"},".copy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Not implemented. Consider ",(0,n.kt)("inlineCode",{parentName:"li"},"table.clone")," instead.")),(0,n.kt)("h3",{id:"copydeep-1"},".copyDeep"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Not implemented. Reconsider if you really need this.")),(0,n.kt)("h3",{id:"create"},".create"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Not implemented. Consider ",(0,n.kt)("inlineCode",{parentName:"li"},"table.create")," instead.")),(0,n.kt)("h3",{id:"equals-1"},".equals"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Freeze.List.equals")," will perform value-equality instead of reference-equality"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Freeze.List.equals")," only accepts two objects to compare between instead of varags arguments"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Freeze.List.equals")," will treat nil and void as values, where ",(0,n.kt)("inlineCode",{parentName:"li"},"Freeze.List.equals")," would ignore these arguments")),(0,n.kt)("h3",{id:"equalsdeep-1"},".equalsDeep"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Not implemented.")),(0,n.kt)("h3",{id:"find"},".find"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Freeze.List.find")," accepts a predicate instead of a value."),(0,n.kt)("li",{parentName:"ul"},"Consider ",(0,n.kt)("inlineCode",{parentName:"li"},"table.find")," if you want to use a static value.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'-- Freeze\nFreeze.List.find(list, function(value)\n    return value == "foo"\nend)\n\n-- Llama\nLlama.List.find(list, "foo")\n')),(0,n.kt)("h3",{id:"findlast"},".findLast"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Freeze.List.findLast")," accepts a predicate instead of a value.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'-- Freeze\nFreeze.List.findLast(list, function(value)\n    return value == "foo"\nend)\n\n-- Llama\nLlama.List.findLast(list, "foo")\n')),(0,n.kt)("h3",{id:"findwhere"},".findWhere"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Not implemented."),(0,n.kt)("li",{parentName:"ul"},"Equivalent to ",(0,n.kt)("inlineCode",{parentName:"li"},"Freeze.List.find"),".")),(0,n.kt)("h3",{id:"findwherelast"},".findWhereLast"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Not implemented."),(0,n.kt)("li",{parentName:"ul"},"Equivalent to ",(0,n.kt)("inlineCode",{parentName:"li"},"Freeze.List.findLast"),".")),(0,n.kt)("h3",{id:"insert"},".insert"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Allows index to be out of bounds. Will not throw.")),(0,n.kt)("h3",{id:"removeindices"},".removeIndices"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Not implemented."),(0,n.kt)("li",{parentName:"ul"},"Consider ",(0,n.kt)("inlineCode",{parentName:"li"},"Freeze.List.filter")," instead.")),(0,n.kt)("h3",{id:"removevalues-1"},".removeValues"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Not implemented."),(0,n.kt)("li",{parentName:"ul"},"Consider ",(0,n.kt)("inlineCode",{parentName:"li"},"Freeze.List.filter")," instead.")),(0,n.kt)("h3",{id:"set"},".set"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Allows index to be out of bounds. Will not throw.")),(0,n.kt)("h3",{id:"slice"},".slice"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Allows index to be out of bounds. Will not throw."),(0,n.kt)("li",{parentName:"ul"},"Using a negative number will slice from the end of the list.")),(0,n.kt)("h3",{id:"splice"},".splice"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Not implemented.")),(0,n.kt)("h3",{id:"toset"},".toSet"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Not implemented.")),(0,n.kt)("h3",{id:"update-1"},".update"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Freeze.List.update")," requires an updater function while Llama's was optional."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Freeze.List.update"),"'s updater signature is ",(0,n.kt)("inlineCode",{parentName:"li"},"(Value) -> (Value)")," instead of Llama's ",(0,n.kt)("inlineCode",{parentName:"li"},"(Value, Key) -> (Value)"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Freeze.List.update")," final argument is ",(0,n.kt)("inlineCode",{parentName:"li"},"notSetValue")," instead of a ",(0,n.kt)("inlineCode",{parentName:"li"},"callback")," function.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'-- Freeze\nFreeze.List.update(list, key, function(value)\n    return string.upper(value)\nend, "default value")\n\n-- Llama\nLlama.List.update(list, key, function(value, key)\n    return string.upper(value)\nend, function(key)\n    return "default value"\nend)\n')),(0,n.kt)("h3",{id:"zipall"},".zipAll"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Not implemented.")),(0,n.kt)("h2",{id:"set-1"},"Set"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Not implemented.")))}m.isMDXComponent=!0}}]);