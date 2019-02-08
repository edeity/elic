(function(t){function e(e){for(var n,o,l=e[0],c=e[1],r=e[2],d=0,h=[];d<l.length;d++)o=l[d],a[o]&&h.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(h.length)h.shift()();return s.push.apply(s,r||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,l=1;l<i.length;l++){var c=i[l];0!==a[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},a={app:0},s=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/elic/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var r=0;r<l.length;r++)e(l[r]);var u=c;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0860":function(t,e,i){"use strict";var n=i("2ec2"),a=i.n(n);a.a},"102a":function(t,e,i){"use strict";var n=i("b84f"),a=i.n(n);a.a},1306:function(t,e,i){"use strict";var n=i("4b87"),a=i.n(n);a.a},"168c":function(t,e,i){},1812:function(t,e,i){},2352:function(t,e,i){"use strict";var n=i("af6b"),a=i.n(n);a.a},"2b37":function(t,e,i){"use strict";var n=i("4370"),a=i.n(n);a.a},"2ec2":function(t,e,i){},"31ac":function(t,e,i){},"32b5":function(t,e,i){"use strict";var n=i("ffd4"),a=i.n(n);a.a},"36de":function(t,e,i){},"38d5":function(t,e,i){"use strict";var n=i("7a1f"),a=i.n(n);a.a},"3ecc":function(t,e,i){},"3efd":function(t,e,i){},4370:function(t,e,i){},"467b":function(t,e,i){"use strict";var n=i("3efd"),a=i.n(n);a.a},"4b87":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var n=i("2b0e"),a=function(){var t=this,e=this,i=e.$createElement,n=e._self._c||i;return n("div",{attrs:{id:"app"}},[n("Nav",{attrs:{leftIcon:"icon-icon_list"},on:{leftClick:function(t){e.setNavDialog(!0)}}}),n("h3",[e._v("基础")]),n("div",[n("EdLine",{attrs:{label:"Button",item:"按钮"},on:{click:function(t){e.setButtonPanel(!0)}}}),n("EdLine",{attrs:{label:"Collapse",item:"手风琴"},on:{click:function(t){e.setAccordionPanel(!0)}}}),n("EdLine",{attrs:{label:"Dialog",item:"模态框"},on:{click:function(t){e.setDialogPanel(!0)}}}),n("EdLine",{attrs:{label:"Line",item:"列表"},on:{click:function(t){e.setLinePanel(!0)}}}),n("EdLine",{attrs:{label:"Page",item:"滑动窗口"},on:{click:function(t){e.setPagePanel(!0)}}}),n("EdLine",{attrs:{label:"Swipe",item:"轮播器"},on:{click:function(t){e.setSwipePanel(!0)}}}),n("EdLine",{attrs:{label:"Tabs",item:"页签"},on:{click:function(t){e.setTabPanel(!0)}}})],1),n("h3",[e._v("表单元素")]),n("div",[n("EdLine",{attrs:{label:"Input",item:"输入行"},on:{click:function(t){e.setInputPanel(!0)}}}),n("EdLine",{attrs:{label:"Form",item:"表单元素"},on:{click:function(t){e.setFormPanel(!0)}}})],1),n("Page",{attrs:{isFull:!1,isShow:e.isNavDialog,dir:"ltr"},on:{clickBg:function(t){e.setNavDialog(!1)}}},[n("template",{slot:"title"},[n("h2",[e._v("What's Elic")])]),n("template",{slot:"content"},[n("div",{staticClass:"elic-desc"},[n("p",[e._v("一个简洁的组件库")]),n("p",[e._v("包含最基本的组件")]),n("p",[e._v("参考Material Design原则")]),n("p",[e._v("采用黑白灰的色调")]),n("p",[e._v("这就是它的全部，希望你喜欢")]),n("p",{staticStyle:{"text-align":"right"}},[e._v("-- by edeity")])])]),n("template",{slot:"foot"},[n("EdLine",{attrs:{label:"See more on Github"},on:{click:function(t){e.openLink("https://github.com/edeity/elic",!0)}}})],1)],2),n("Page",{attrs:{isShow:e.isButtonPanel,isBuiltIn:!0,title:"按钮"},on:{back:function(){t.isButtonPanel=!1}}},[n("h3",[e._v("常规")]),n("Button",{attrs:{isShadow:""}},[e._v("Shadow")]),n("Button",[e._v("Simple")]),n("Button",{attrs:{isBlock:""}},[e._v("Block")]),n("h3",[e._v("按钮组")]),n("ButtonGroup",[n("Button",[e._v("Group 1")]),n("Button",[e._v("Group 2")]),n("Button",[e._v("Group 3")])],1)],1),n("Page",{attrs:{isShow:e.isAccordion,isBuiltIn:!0,title:"手风琴"},on:{back:function(t){e.setAccordionPanel(!1)}}},[n("Accordion",{attrs:{defaultActiveKey:"accordion2"}},[n("AccordionPane",{attrs:{title:"Five score years ago",id:"accordion1"}},[n("p",[e._v("Five score years ago, a great American, in whose symbolic shadow we stand today, signed the Emancipation Proclamation. This momentous decree came as a great beacon light of hope to millions of Negro slaves who had been seared in the flames of withering injustice. It came as a joyous daybreak to end the long night of bad captivity.")])]),n("AccordionPane",{attrs:{title:"But one hundred years later",id:"accordion2"}},[n("p",[e._v("But one hundred years later, the Negro still is not free. One hundred years later, the life of the Negro is still sadly crippled by the manacles of segregation and the chains of discrimination. One hundred years later, the Negro lives on a lonely island of poverty in the midst of a vast ocean of material prosperity. One hundred years later, the Negro is still languished in the corners of American society and finds himself an exile in his own land. So we’ve come here today to dramatize a shameful condition.")])]),n("AccordionPane",{attrs:{title:"I am not unmindful that",id:"accordion3"}},[n("p",[e._v("I am not unmindful that some of you have come here out of great trials and tribulations. Some of you have come fresh from narrow jail cells. Some of you have come from areas where your quest for freedom left you battered by the storms of persecution and staggered by the winds of police brutality. You have been the veterans of creative suffering. Continue to work with the faith that unearned suffering is redemptive.")])]),n("AccordionPane",{attrs:{title:"Go back to Mississippi",id:"accordion4"}},[n("p",[e._v("Go back to Mississippi, go back to Alabama, go back to South Carolina, go back to Georgia, go back to Louisiana, go back to the slums and ghettos of our northern cities, knowing that somehow this situation can and will be changed. Let us not wallow in the valley of despair.\n                    I say to you today, my friends, so even though we face the difficulties of today and tomorrow, I still have a dream. It is a dream deeply rooted in the American dream.")])])],1)],1),n("Page",{attrs:{isShow:e.isDialogPanel,isBuiltIn:!0,title:"模态框"},on:{back:function(){e.setDialogPanel(!1)}}},[n("EdLine",{attrs:{label:"Tips",item:"tips"},on:{click:function(t){e.openDialog("Say Hello !")}}}),n("EdLine",{attrs:{label:"alert",item:"alert"},on:{click:function(t){e.openDialog("Say Hello !","alert")}}}),n("EdLine",{attrs:{label:"Confirm",item:"confirm"},on:{click:function(t){e.openDialog("Are you sure ?","confirm")}}}),n("EdLine",{attrs:{label:"Toast",item:"toast"},on:{click:function(t){e.openDialog("Say Hello !","toast")}}}),n("EdLine",{attrs:{label:"Loading",item:"loading"},on:{click:e.openLoading}})],1),n("Page",{attrs:{isShow:e.isLinePanel,isBuiltIn:!0,title:"列表"},on:{back:function(){e.setLinePanel(!1)}}},[n("EdLine",{attrs:{label:"列表",item:"副标题",noRightIcon:""}}),n("EdLine",{attrs:{label:"列表",item:"副标题"}}),n("EdLine",{attrs:{label:"列表",item:"副标题",iconClass:"icon-icon_note"}}),n("EdLine",{attrs:{label:"列表"}},[n("div",{attrs:{slot:"item"},slot:"item"},[e._v("ITEM SLOT")])])],1),n("Page",{attrs:{isShow:e.isPagePanel,isBuiltIn:!0,title:"滑动窗口"},on:{back:function(){e.setPagePanel(!1)}}},[n("EdLine",{attrs:{label:"Page",item:"Bottom To Top"},on:{click:function(t){e.openPage("btt")}}}),n("EdLine",{attrs:{label:"Page",item:"Right to Left"},on:{click:function(t){e.openPage("rtl")}}}),n("EdLine",{attrs:{label:"Page",item:"Left to Right"},on:{click:function(t){e.openPage("ltr")}}}),n("EdLine",{attrs:{label:"Page",item:"Fix"},on:{click:function(t){e.openPage("btt",!0)}}}),n("Page",{attrs:{isFull:!1,isShow:e.isPage,isFit:e.isPageFit,dir:e.dialogDirection},on:{clickBg:e.hidePage}},[n("h2",{attrs:{slot:"title"},slot:"title"},[e._v("Hello Page")]),n("EdLine",{attrs:{label:"选项1"}}),n("EdLine",{attrs:{label:"选项2"}}),n("EdLine",{attrs:{label:"选项3"}})],1)],1),n("Page",{attrs:{isShow:e.isSwipePanel,isBuiltIn:!0,title:"轮播器"},on:{back:function(){e.setSwipePanel(!1)}}},[n("h3",[e._v("横向滚动")]),n("Swipe",e._l(e.items,function(t,i){return n("SwipeItem",{key:i},[n("div",{staticClass:"hor-text"},[e._v("Item Hor "+e._s(i))])])})),n("h3",[e._v("垂直滚动")]),n("Swipe",{attrs:{isVertical:!0}},e._l(e.items,function(t,i){return n("SwipeItem",{key:i},[n("div",{staticClass:"ver-text"},[e._v("Item Ver "+e._s(i))])])})),n("ButtonGroup",[n("Button",{on:{click:e.addItem}},[e._v("addItem")]),n("Button",{on:{click:e.removeItem}},[e._v("removeItem")])],1)],1),n("Page",{attrs:{isShow:e.isInputPanel,isBuiltIn:!0,title:"输入"},on:{back:function(){e.setInputPanel(!1)}}},[n("h3",[e._v("有标签")]),n("Input",{attrs:{label:"用户名",tips:"用户名"}}),n("Input",{attrs:{label:"密码",tips:"密码",type:"password"}}),n("h3",[e._v("无标签")]),n("Input",{attrs:{tips:"用户名"}}),n("h3",[e._v("浮动型")]),n("Input",{attrs:{tips:"用户名",isFloat:!0}})],1),n("Page",{attrs:{isShow:e.isTabPanel,isBuiltIn:!0,title:"页签"},on:{back:function(){e.setTabPanel(!1)}}},[n("Tabs",[n("TabPane",{attrs:{tab:"T1",id:"1"}},[n("div",{staticClass:"tab-pane-demo"},[e._v("T1")])]),n("TabPane",{attrs:{tab:"T2",id:"2"}},[n("div",{staticClass:"tab-pane-demo"},[e._v("T2")])]),n("TabPane",{attrs:{tab:"T3",id:"3"}},[n("div",{staticClass:"tab-pane-demo"},[e._v("T3")])])],1),n("Tabs",[n("TabPane",{attrs:{tab:"T1",id:"1"}},[n("div",{staticClass:"tab-pane-demo"},[e._v("T1")])]),n("TabPane",{attrs:{tab:"T2",id:"2"}},[n("div",{staticClass:"tab-pane-demo"},[e._v("T2")])]),n("TabPane",{attrs:{tab:"T3",id:"3"}},[n("div",{staticClass:"tab-pane-demo"},[e._v("T3")])]),n("TabPane",{attrs:{tab:"T4",id:"4"}},[n("div",{staticClass:"tab-pane-demo"},[e._v("T4")])]),n("TabPane",{attrs:{tab:"T5",id:"5"}},[n("div",{staticClass:"tab-pane-demo"},[e._v("T5")])]),n("TabPane",{attrs:{tab:"T6",id:"6"}},[n("div",{staticClass:"tab-pane-demo"},[e._v("T6")])]),n("TabPane",{attrs:{tab:"T7",id:"7"}},[n("div",{staticClass:"tab-pane-demo"},[e._v("T7")])]),n("TabPane",{attrs:{tab:"T8",id:"8"}},[n("div",{staticClass:"tab-pane-demo"},[e._v("T8")])])],1)],1),n("Page",{attrs:{isShow:e.isFormPanel,isBuiltIn:!0,title:"表单元素"},on:{back:function(t){e.setFormPanel(!1)}}},[n("EdLine",{attrs:{label:"开关"}},[n("EdSwitch",{attrs:{slot:"item"},slot:"item"})],1),n("EdLine",{attrs:{label:"开关【小】"}},[n("EdSwitch",{attrs:{slot:"item",isSmall:!0},slot:"item"})],1),n("EdLine",{attrs:{label:"评分"}},[n("Rate",{attrs:{slot:"item",rate:e.formRate},slot:"item"})],1),n("EdLine",{attrs:{label:"选项"}},[n("Select",{attrs:{slot:"item",defaultValue:e.formRate,options:[1,2,3,4.5,5]},on:{afterSelect:function(t){e.formRate=t}},slot:"item"})],1),n("EdLine",{attrs:{label:"选择[Radio]"}},[n("Radio",{attrs:{slot:"item",label:"Ratio"},slot:"item"})],1),n("EdLine",{attrs:{label:"选择[组]"}},[n("RadioGroup",{attrs:{slot:"item",isMulti:!1},slot:"item"},[n("Radio",{attrs:{label:"c1"}}),n("Radio",{attrs:{label:"c2"}}),n("Radio",{attrs:{label:"c3"}})],1)],1),n("EdLine",{attrs:{label:"选择[Checkbox]"}},[n("Radio",{attrs:{slot:"item",label:"Radio",type:"checkbox"},slot:"item"})],1),n("EdLine",{attrs:{label:"选择[单选]"}},[n("RadioGroup",{attrs:{slot:"item",isMulti:!1},slot:"item"},[n("Radio",{attrs:{label:"c1",type:"checkbox"}}),n("Radio",{attrs:{label:"c2",type:"checkbox"}}),n("Radio",{attrs:{label:"c3",type:"checkbox"}})],1)],1),n("EdLine",{attrs:{label:"选择[多选]"}},[n("RadioGroup",{attrs:{slot:"item",isMulti:!0},slot:"item"},[n("Radio",{attrs:{label:"c1",type:"checkbox"}}),n("Radio",{attrs:{label:"c2",type:"checkbox"}}),n("Radio",{attrs:{label:"c3",type:"checkbox"}})],1)],1)],1),n("Dialog",{attrs:{type:e.dialogType,isShow:e.isDialog,text:e.dialogText},on:{close:e.hideDialog,yes:e.sayYes,no:e.sayNo}})],1)},s=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("i",{staticClass:"iconfont waves",class:t.iconClass,on:{click:t.iconClick}})},l=[],c=(i("5d0f"),{name:"Icon",props:{iconClass:{type:String}},methods:{iconClick:function(){this.$emit("click")}}}),r=c,u=(i("b1cd"),i("2877")),d=Object(u["a"])(r,o,l,!1,null,"2d953fd0",null);d.options.__file="NavIcon.vue";var h=d.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",[i("div",{staticClass:"placeholder-nav"}),i("div",{staticClass:"real-nav"},[t.leftIcon?i("div",{staticClass:"left-icon-container"},[i("Icon",{attrs:{iconClass:t.leftIcon},on:{click:t.leftClick}})],1):t._e(),t._m(0),t.rightIconArray?i("div",{staticClass:"right-icon-container"},[i("ul",{staticClass:"nav-icon-list"},t._l(t.rightIconArray,function(t,e){return i("li",{key:e},[i("Icon",{attrs:{iconClass:t}})],1)}))]):t._e()])])},p=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title-container"},[i("h1",[t._v("Elic")])])}],v={name:"Nav",components:{Icon:h},props:{leftIcon:{type:String},rightIconArray:{type:Array}},methods:{leftClick:function(){this.$emit("leftClick")}}},m=v,b=(i("2b37"),Object(u["a"])(m,f,p,!1,null,"62155ec3",null));b.options.__file="Nav.vue";var g=b.exports,_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"line",on:{click:function(e){return e.preventDefault(),t.lineClick(e)}}},[i("div",{staticClass:"label-container"},[i("span",{staticClass:"label-title"},[t.iconClass?i("i",{staticClass:"iconfont",class:t.iconClass}):t._e(),t._v("\n            "+t._s(t.label)+"\n        ")])]),t.item?i("div",{staticClass:"item-container"},[i("span",{staticClass:"item-title",class:{"no-icon":t.noRightIcon}},[t._v(t._s(t.item))]),t.noRightIcon?t._e():i("i",{staticClass:"item-icon iconfont icon-icon_more_new"})]):i("div",{staticClass:"item-container no-item"},[t._t("item")],2)])},y=[],w={name:"EdLine",props:{label:{type:String},item:{type:String},noRightIcon:{type:Boolean},iconClass:{type:String}},methods:{lineClick:function(){this.$emit("click")}}},S=w,P=(i("61fe"),Object(u["a"])(S,_,y,!1,null,"0858a75a",null));P.options.__file="EdLine.vue";var k=P.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"input-container"},[t.label?i("div",{staticClass:"label"},[t._v(t._s(t.label))]):t._e(),"checkbox"===t.type?i("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"input",class:[{"has-label":t.label},{float:t.isFloat&&(t.isFocus||t.value)}],attrs:{placeholder:!t.isFloat&&t.tips,type:"checkbox"},domProps:{checked:Array.isArray(t.value)?t._i(t.value,null)>-1:t.value},on:{focus:t.focus,blur:t.blur,change:function(e){var i=t.value,n=e.target,a=!!n.checked;if(Array.isArray(i)){var s=null,o=t._i(i,s);n.checked?o<0&&(t.value=i.concat([s])):o>-1&&(t.value=i.slice(0,o).concat(i.slice(o+1)))}else t.value=a}}}):"radio"===t.type?i("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"input",class:[{"has-label":t.label},{float:t.isFloat&&(t.isFocus||t.value)}],attrs:{placeholder:!t.isFloat&&t.tips,type:"radio"},domProps:{checked:t._q(t.value,null)},on:{focus:t.focus,blur:t.blur,change:function(e){t.value=null}}}):i("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"input",class:[{"has-label":t.label},{float:t.isFloat&&(t.isFocus||t.value)}],attrs:{placeholder:!t.isFloat&&t.tips,type:t.type},domProps:{value:t.value},on:{focus:t.focus,blur:t.blur,input:function(e){e.target.composing||(t.value=e.target.value)}}}),t.isFloat?i("p",{staticClass:"float-tips",class:{float:t.value||t.isFocus}},[t._v(t._s(t.tips))]):t._e(),t.value?i("span",{staticClass:"clear-btn",on:{click:t.clearValue}}):t._e()])},C=[],I={name:"Input",data:function(){return{value:"",isFocus:""}},props:{label:{type:String},tips:{type:String},type:{type:String},isFloat:{type:Boolean}},methods:{clearValue:function(){this.value=""},focus:function(){this.isFocus=!0},blur:function(){this.isFocus=!1}}},T=I,E=(i("c136"),Object(u["a"])(T,x,C,!1,null,"450389af",null));E.options.__file="Input.vue";var $=E.exports,L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isRealShow?i("div",{ref:"page",staticClass:"eli-page"},[i("div",{staticClass:"page-bg",class:{"is-active":t.isActive},on:{click:function(e){return e.preventDefault(),t.clickBg(e)}}}),i("div",{ref:"container",staticClass:"page-container",class:[t.dir,{"is-active":t.isActive},{"is-full":t.isFull},{"is-fit":t.isFit}]},[t.hasHeader?i("div",{ref:"title",staticClass:"title"},[t.isBuiltIn?i("h2",{staticClass:"has-icon"},[i("Icon",{attrs:{iconClass:"icon-icon_back_new"},on:{click:t.back}}),i("span",[t._v(t._s(t.title))])],1):t._t("title")],2):t._e(),i("div",{ref:"content",staticClass:"content"},[t._t("content"),t._t("default")],2),t.hasFooter?i("div",{ref:"foot",staticClass:"foot"},[t._t("foot")],2):t._e()])]):t._e()},B=[],R=(i("7f7f"),{name:"Page",components:{Icon:h},data:function(){return{parentContainer:null,lockScroll:0,isBuiltInShow:!1,isRealShow:!1,isActive:!1,hasHeader:!0,hasFooter:!0}},props:{isShow:{type:Boolean,default:!1},isFit:{type:Boolean},isFull:{type:Boolean,default:!0},dir:{type:String,default:"rtl"},isBuiltIn:{type:Boolean,default:!1},title:{type:String}},watch:{isShow:function(t){this.animateState(t),!0===t?this.noScroll():this.enableScroll()}},mounted:function(){var t=this;window.addEventListener("resize",function(){t.calcContent()})},methods:{clickBg:function(){this.$emit("clickBg")},back:function(){this.isBuiltIn&&this.$emit("back")},calcContent:function(){var t=0,e=0,i=0;this.$refs.container&&(e=this.$refs.container.clientHeight,this.$slots.title&&(this.$refs.title?(t=this.$refs.title.clientHeight,this.hasHeader=!0):this.hasHeader=!1),this.$slots.foot&&(this.$refs.foot?(i=this.$refs.foot.clientHeight,this.hasFooter=!0):this.hasFooter=!1),this.$refs.content.style.height=e-t-i+"px")},animateState:function(t){var e=this;!0===t?(this.isRealShow=!0,setTimeout(function(){e.isActive=!0,e.calcContent()})):(this.isActive=!1,setTimeout(function(){e.isRealShow=!1},200))},noScroll:function(){var t=this;this.$nextTick(function(){t.parentContainer||(t.parentContainer=t.findParenContainer());var e=t.parentContainer;if("fixed"!==e.style.position){var i=window.scrollY,n=e.style;n&&(n.position="fixed",n.top="-".concat(i,"px"),n.left="0px",n.right="0px",n.bottom="0px"),t.lockScroll=i}})},enableScroll:function(){this.parentContainer&&(this.parentContainer.style.position="static"),this.lockScroll=0},findParenContainer:function(){var t=this.$parent;while(t){if("Page"===t.$options.name)return t.$el;t=t.$parent}return document.body}}}),A=R,O=(i("95af"),Object(u["a"])(A,L,B,!1,null,"9cfad666",null));O.options.__file="Page.vue";var D=O.exports,F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swipe",class:{"is-vertical":t.isVertical},style:"width: "+t.swipeWidth+"px; height: "+t.swipeHeight+"px;"},[i("div",{staticClass:"swipe-container",style:t.getContainerWidth()+" "+t.getContainerHeight()+" "+t.getActivePageStyle()},[t._t("default",null,{width:t.swipeWidth})],2),i("div",{staticClass:"swipe-counter-container"},t._l(t.pages,function(e,n){return i("div",{key:n,staticClass:"swipe-counter",class:{"is-active":n===t.activeIndex}})}))])},G=[],j=(i("ac6a"),i("c5f6"),{name:"Swipe",data:function(){return{swipeWidth:0,swipeHeight:0,activeIndex:0,position:0,pages:[],ready:!1}},props:{width:{Type:Number},height:{Type:Number},index:{Type:Number,default:0},isRepeat:{Type:Boolean},isVertical:{Type:Boolean}},mounted:function(){var t=this;this.activeIndex=this.index;var e=document.querySelector(".swipe"),i=e.parentNode;this.calcSize(i),window.addEventListener("resize",function(){t.calcSize(i)}),this.onTouch(e)},methods:{updated:function(){var t=document.querySelector(".swipe");if(t){var e=t.parentNode,i=[];this.$children.forEach(function(t){i.push(t.$el)}),this.pages=i,this.calcSize(e)}this.activeIndex=this.index,this.activeIndex>this.pages.length-1&&(this.activeIndex=this.pages.length-1)},prev:function(){this.activeIndex--,this.activeIndex<0&&(this.isRepeat?this.activeIndex=this.pages.length-1:this.endPrev())},next:function(){this.activeIndex++,this.activeIndex>=this.pages.length&&(this.isRepeat?this.activeIndex=0:this.endNext())},endPrev:function(){var t=this;this.activeIndex=-.5,setTimeout(function(){t.activeIndex=0},200)},endNext:function(){var t=this;this.activeIndex=this.pages.length-.5,setTimeout(function(){t.activeIndex=t.pages.length-1},200)},getWidth:function(){return this.swipeWidth},onTouch:function(){var t=this,e=50,i=-1,n=-1,a=-1,s=-1,o=this.$el;o.addEventListener("touchstart",function(t){i=t.touches[0].pageX,n=t.touches[0].pageY,a=-1,s=-1,t.preventDefault()}),o.addEventListener("touchmove",function(t){a=t.touches[0].pageX,s=t.touches[0].pageY,t.preventDefault()}),this.isVertical?o.addEventListener("touchend",function(i){var a=n-s,o=Math.abs(a);a>0&&o>e?t.next():a<0&&o>e&&t.prev(),i.preventDefault()}):o.addEventListener("touchend",function(n){var s=i-a,o=Math.abs(s);s>0&&o>e?t.next():s<0&&o>e&&t.prev(),n.preventDefault()})},calcSize:function(t){var e=this;this.$nextTick(function(){e.width?e.swipeWidth=e.width:e.swipeWidth=t.clientWidth,e.height?e.swipeHeight=e.height:e.swipeHeight=.6*e.swipeWidth,e.pages.forEach(function(t){t.style.width=e.swipeWidth+"px",t.style.height=e.swipeHeight+"px"})})},getContainerWidth:function(){return this.isVertical?"width: ".concat(this.swipeWidth,"px;"):"width: ".concat(this.swipeWidth*this.pages.length,"px;")},getContainerHeight:function(){return this.isVertical?"height: ".concat(this.swipeHeight*this.pages.length,"px;"):"height: ".concat(this.swipeHeight,"px;")},getActivePageStyle:function(){return this.isVertical?"transform: translate3d(0px, ".concat(this.activeIndex*this.swipeHeight*-1,"px, 0px);"):"transform: translate3d(".concat(this.activeIndex*this.swipeWidth*-1,"px, 0px, 0px);")}}}),H=j,N=(i("1306"),Object(u["a"])(H,F,G,!1,null,"0ad97126",null));N.options.__file="Swipe.vue";var W=N.exports,K=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swipe-page"},[t._t("default")],2)},M=[],V={name:"SwipeItem",data:function(){return{width:0}},mounted:function(){this.$parent.updated()},destroyed:function(){this.$parent.updated()}},z=V,Y=Object(u["a"])(z,K,M,!1,null,null,null);Y.options.__file="SwipeItem.vue";var q=Y.exports,J=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"waves",class:{block:t.isBlock,shadow:t.isShadow,pressed:t.isPressed},on:{click:t.click}},[t._t("default")],2)},X=[],U={name:"Button",data:function(){return{isPressed:!1}},props:{isBlock:Boolean,isShadow:Boolean,type:String},methods:{click:function(){var t=this;this.isPressed=!0,setTimeout(function(){t.isPressed=!1},250),this.href?window.location.href=this.href:this.$emit("click")}}},Q=U,Z=(i("38d5"),Object(u["a"])(Q,J,X,!1,null,"1ba736b2",null));Z.options.__file="Button.vue";var tt=Z.exports,et=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"btn-group"},[t._t("default")],2)},it=[],nt={name:"ButtonGroup"},at=nt,st=(i("8cec"),Object(u["a"])(at,et,it,!1,null,"4e0d88a2",null));st.options.__file="ButtonGroup.vue";var ot=st.exports,lt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isRealShow?i("div",{staticClass:"dialog"},[t.isSimple?t._e():i("div",{staticClass:"dialog-bg"}),i("div",{staticClass:"dialog-content animated",class:[t.type,{fadeIn:t.isIn&&t.isSimple,fadeOut:t.isOut&&t.isSimple},{bounceIn:t.isIn&&!t.isSimple,bounceOut:t.isOut&&!t.isSimple}]},[t.isSimple?t._e():i("i",{staticClass:"dialog-close-btn iconfont icon-icon_close_",on:{click:t.close}}),"load"===t.type?i("div",{staticClass:"spinner"},[i("div",{staticClass:"double-bounce1"}),i("div",{staticClass:"double-bounce2"})]):t._e(),i("span",{staticClass:"dialog-text"},[t._v(t._s(t.text))]),"alert"===t.type?i("div",{staticClass:"answer"},[i("a",{staticClass:"yes",on:{click:t.yes}},[t._v("OK")])]):t._e(),"confirm"===t.type?i("div",{staticClass:"answer"},[i("a",{staticClass:"no",on:{click:t.no}},[t._v("no")]),i("a",{staticClass:"yes",on:{click:t.yes}},[t._v("Yes")])]):t._e()])]):t._e()},ct=[],rt={name:"Dialog",data:function(){return{isRealShow:!1,isIn:!1,isOut:!1}},props:{isShow:{Type:Boolean},text:{Type:String},type:{Type:String}},computed:{isSimple:function(){return"toast"===this.type||"load"===this.type}},watch:{isShow:function(t){var e=this;!0===t?(this.isRealShow=!0,this.isIn=!0,setTimeout(function(){e.isIn=!1},500),"toast"===this.type&&setTimeout(function(){e.$emit("close")},1500)):(this.isOut=!0,setTimeout(function(){e.isOut=!1,e.isRealShow=!1},500))}},methods:{close:function(){this.$emit("close")},no:function(){this.$emit("no")},yes:function(){this.$emit("yes")}}},ut=rt,dt=(i("c521"),i("2352"),i("a61b"),Object(u["a"])(ut,lt,ct,!1,null,"637e4aa8",null));dt.options.__file="Dialog.vue";var ht=dt.exports,ft=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tabs"},[i("div",{ref:"nav",staticClass:"tab-nav w",class:[{"is-scroll":t.isScroll}]},[t.isScroll?i("i",{staticClass:"scroll-icon scroll-left waves iconfont icon-icon_more_new",class:{disabled:0===t.scrollIndex},on:{click:t.scrollLeft}}):t._e(),i("div",{ref:"navContent",staticClass:"tab-nav-content",style:t.getTransformStyle()},t._l(t.tabs,function(e,n){return i("span",{key:t.keys[n],staticClass:"tab",class:{"is-active":t.keys[n]===t.activeKey},on:{click:function(e){t.activePane(n)}}},[t._v(t._s(e))])})),t.isScroll?i("i",{staticClass:"scroll-icon scroll-right waves iconfont icon-icon_more_new",on:{click:t.scrollRight}}):t._e()]),t._t("default")],2)},pt=[],vt={name:"Tabs",data:function(){return{keys:[],tabs:[],activeKey:"",isScroll:!1,scrollIndex:0,scrollWidth:0,maxScrollIndex:0,navWidth:0,childWidth:0}},props:{defaultActiveKey:String},mounted:function(){this.defaultActiveKey&&(this.activeKey=this.defaultActiveKey)},methods:{calcSize:function(){var t=this.$refs.nav.clientWidth,e=0,i=this.$refs.navContent.childNodes;i&&i.forEach(function(t){8!==t.nodeType&&(e+=t.clientWidth)}),t<e&&(this.isScroll=!0,this.maxScrollIndex=Math.floor(e/t)),this.navWidth=t,this.childWidth=e},addTab:function(t,e){var i=this;-1===this.keys.indexOf(t)&&(this.keys.push(t),this.tabs.push(e),1!==this.keys.length||this.defaultActiveKey||(this.activeKey=t),this.$nextTick(function(){i.calcSize()}))},activePane:function(t){this.activeKey=this.keys[t]},getTransformStyle:function(){var t=50*this.scrollIndex;return t>this.navWidth&&(t=this.navWidth),"transform: translate3d(-".concat(t,"%, 0, 0)")},scrollLeft:function(){this.scrollIndex>0&&this.scrollIndex--},scrollRight:function(){this.scrollIndex++,this.scrollIndex>this.maxScrollIndex&&(this.scrollIndex=this.maxScrollIndex)}}},mt=vt,bt=(i("32b5"),Object(u["a"])(mt,ft,pt,!1,null,"e009b470",null));bt.options.__file="Tabs.vue";var gt=bt.exports,_t=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fade"}},[t.$parent.activeKey===t.id?i("div",{staticClass:"tab-pane"},[t._t("default")],2):t._e()])},yt=[],wt={name:"TabPane",props:{tab:{default:"String"},id:{default:"String",required:!0}},mounted:function(){this.$parent.addTab(this.id,this.tab)}},St=wt,Pt=(i("68b3"),Object(u["a"])(St,_t,yt,!1,null,"75faaf98",null));Pt.options.__file="TabPane.vue";var kt=Pt.exports,xt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"checkbox",class:{on:!0===t.value,"is-small":t.isSmall},on:{click:t.toggle}},[i("div",{staticClass:"handle",class:{on:!0===t.value}})])},Ct=[],It={name:"EdSwitch",data:function(){return{value:!1}},props:{defaultValue:{Type:Boolean},isSmall:{Type:Boolean}},mounted:function(){this.value=this.defaultValue},methods:{toggle:function(){this.value=!this.value,this.$emit("toggle",this.value)}}},Tt=It,Et=(i("467b"),Object(u["a"])(Tt,xt,Ct,!1,null,"712f34a0",null));Et.options.__file="EdSwitch.vue";var $t=Et.exports,Lt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"select"},[i("input",{ref:"input",staticClass:"select-value",domProps:{value:t.selectData},on:{blur:function(e){t.toggleSelectPanel(!1)},focus:function(e){t.toggleSelectPanel(!0)}}}),i("i",{staticClass:"select-btn iconfont icon-icon_down",class:{down:t.isSelect},on:{click:function(e){return e.preventDefault(),t.toggleFocusSelectPanel(e)}}}),i("ul",{ref:"selectPanel",staticClass:"select-panel",class:{down:t.isSelect},style:"height: "+(t.isSelect?t.downHeight:0)+"px"},t._l(t.options,function(e,n){return i("li",{key:n,staticClass:"select-option",class:{"is-active":t.selectData===e},on:{click:function(i){t.afterSelect(e)}}},[t._v(t._s(e.value?e.value:e)+"\n        ")])}))])},Bt=[],Rt={name:"Select",components:{Icon:h},data:function(){return{selectData:"",isSelect:!1,downHeight:0}},props:{options:{Type:Array},defaultValue:{}},created:function(){this.selectData=this.defaultValue},mounted:function(){var t=this.$refs.selectPanel.childNodes;if(t){var e=0;t.forEach(function(t){e+=t.clientHeight}),this.downHeight=e}},methods:{toggleFocusSelectPanel:function(){this.isSelect?this.$refs.input.blur():this.$refs.input.focus()},toggleSelectPanel:function(t){this.isSelect=t},afterSelect:function(t){this.selectData=t,this.isSelect=!1,this.$emit("afterSelect",t)}}},At=Rt,Ot=(i("93b6"),Object(u["a"])(At,Lt,Bt,!1,null,"7bc356c1",null));Ot.options.__file="Select.vue";var Dt=Ot.exports,Ft=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rate"},[i("i",{ref:"bgRate",staticClass:"rate-icon iconfont icon-icon_review_star"}),i("i",{ref:"realRate",staticClass:"rate-icon real-rate iconfont icon-icon_review_star",style:"width: "+t.rateWidth/5*t.rate+"px"})])},Gt=[],jt={name:"Rate",data:function(){return{rateWidth:0}},props:{rate:0},mounted:function(){var t=this;this.$nextTick(function(){t.rateWidth=t.$refs.bgRate.clientWidth})},methods:{afterSelect:function(t){this.$emit("afterRate",t)}}},Ht=jt,Nt=(i("89e7"),Object(u["a"])(Ht,Ft,Gt,!1,null,"300e7c56",null));Nt.options.__file="Rate.vue";var Wt=Nt.exports,Kt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"accordion"},[t._t("default")],2)},Mt=[],Vt={name:"Accordion",data:function(){return{keys:[],isOn:!1,activeKey:0}},props:{defaultActiveKey:String},mounted:function(){this.defaultActiveKey&&(this.activeKey=this.defaultActiveKey,this.isOn=!0)},methods:{addPane:function(t){-1===this.keys.indexOf(t)&&this.keys.push(t)},toggle:function(t){this.activeKey===t?this.isOn=!this.isOn:(this.activeKey=t,this.isOn=!0)}}},zt=Vt,Yt=(i("0860"),Object(u["a"])(zt,Kt,Mt,!1,null,"68c96b9e",null));Yt.options.__file="Accordion.vue";var qt=Yt.exports,Jt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"accordion-pane"},[i("div",{staticClass:"pane-title",class:{"is-active":t.isActive}},[t._v(t._s(t.title)+"\n        "),i("a",{staticClass:"icon-btn",class:{"is-active":t.isActive},on:{click:function(e){t.toggle(t.id)}}},[i("i",{staticClass:"pane-icon iconfont icon-icon_add_new"})])]),i("div",{staticClass:"pane-container",class:{"is-active":t.isActive},style:"height: "+(t.isActive?t.contentHeight:0)+"px"},[i("div",{ref:"content",staticClass:"pane-content"},[t._t("default")],2)])])},Xt=[],Ut={name:"AccordionPane",data:function(){return{contentHeight:""}},props:{id:{type:String,required:!0},title:{type:String}},computed:{isActive:function(){return this.$parent.activeKey===this.id&&this.$parent.isOn}},mounted:function(){this.$parent.addPane(this.id)},beforeUpdate:function(){var t=0,e=this.$refs.content;t=e.offsetHeight,this.contentHeight=t},methods:{toggle:function(t){this.$parent.toggle(t)}}},Qt=Ut,Zt=(i("cca8"),Object(u["a"])(Qt,Jt,Xt,!1,null,"74aac547",null));Zt.options.__file="AccordionPane.vue";var te=Zt.exports,ee=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"radio_container",class:{"is-active":t.checked},on:{click:function(e){return e.preventDefault(),t.toggle(e)}}},[i("span",{staticClass:"box",class:{radio:"radio"===t.type,check:"checkbox"===t.type,"is-active":t.checked}},[t.checked&&"radio"===t.type?i("span",{staticClass:"radio-active"}):t._e()]),t.label?i("span",{staticClass:"box-label",class:{"is-active":t.checked}},[t._v(t._s(t.label))]):t._e()])},ie=[],ne={name:"Radio",data:function(){return{model:"",_radioGroup:null}},props:{label:String,type:{default:"radio",validator:function(t){return-1!==["radio","checkbox"].indexOf(t)}}},computed:{checked:function(){return this.isGroup?this._radioGroup.isMulti?-1!==this._radioGroup.value.indexOf(this.label):this._radioGroup.value===this.label:this.model===this.label},isGroup:function(){var t=this.$parent;while(t){if("RadioGroup"===t.$options.name)return this._radioGroup=t,!0;t=t.$parent}return!1}},methods:{toggle:function(){if(this.isGroup){var t=this._radioGroup.value;if(this._radioGroup.isMulti){var e=t.indexOf(this.label);-1!==e?this._radioGroup.value.splice(e,1):this._radioGroup.value.push(this.label)}else t===this.label&&"checkbox"===this.type?this._radioGroup.value="":this._radioGroup.value=this.label}else this.model===this.label&&"checkbox"===this.type?this.model="":this.model=this.label}}},ae=ne,se=(i("102a"),Object(u["a"])(ae,ee,ie,!1,null,"d3d09e8e",null));se.options.__file="Radio.vue";var oe=se.exports,le=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"radio-group"},[t._t("default")],2)},ce=[],re={name:"RadioGroup",data:function(){return{value:null}},props:{isMulti:{type:Boolean,default:!0}},created:function(){this.isMulti?this.value=[]:this.value=""}},ue=re,de=(i("e46b"),Object(u["a"])(ue,le,ce,!1,null,"4117c0f5",null));de.options.__file="RadioGroup.vue";var he=de.exports,fe={log:function(t){console.log(t)}},pe=fe,ve={name:"app",components:{Icon:h,Nav:g,EdLine:k,Input:$,Page:D,Swipe:W,SwipeItem:q,Button:tt,ButtonGroup:ot,Dialog:ht,Tabs:gt,TabPane:kt,EdSwitch:$t,Select:Dt,Rate:Wt,Accordion:qt,AccordionPane:te,Radio:oe,RadioGroup:he},data:function(){return{isButtonPanel:!1,isInputPanel:!1,isPagePanel:!1,isLinePanel:!1,isDialogPanel:!1,isSwipePanel:!1,isTabPanel:!1,isFormPanel:!1,isAccordion:!1,isNavDialog:!1,isPage:!1,isPageFit:!1,isDialogFull:!1,dialogDirection:"btt",items:[{},{},{}],isDialog:!1,dialogType:!1,dialogText:"",formRate:3}},methods:{openLink:function(t,e){!0===e?window.open(t):window.location.href=t},setNavDialog:function(t){this.isNavDialog=t},setButtonPanel:function(t){this.isButtonPanel=t},setInputPanel:function(t){this.isInputPanel=t},setPagePanel:function(t){this.isPagePanel=t},setDialogPanel:function(t){this.isDialogPanel=t},setLinePanel:function(t){this.isLinePanel=t},setSwipePanel:function(t){this.isSwipePanel=t},setTabPanel:function(t){this.isTabPanel=t},setFormPanel:function(t){this.isFormPanel=t},setAccordionPanel:function(t){this.isAccordion=t},hidePage:function(){this.isPage=!1},openPage:function(t,e){this.dialogDirection=t,this.isPage=!0,this.isPageFit=e},addItem:function(){this.items.push({})},removeItem:function(){this.items.pop()},openDialog:function(t,e){this.dialogText=t,this.dialogType=e,this.isDialog=!0},openLoading:function(){var t=this;this.openDialog("Loading...","load"),setTimeout(function(){t.isDialog=!1},2e3)},hideDialog:function(){this.isDialog=!1},sayYes:function(){pe.log("yes!"),this.isDialog=!1},sayNo:function(){pe.log("no"),this.isDialog=!1}}},me=ve,be=(i("7c55"),Object(u["a"])(me,a,s,!1,null,null,null));be.options.__file="App.vue";var ge=be.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(ge)}}).$mount("#app")},"5d0f":function(t,e,i){},"61fe":function(t,e,i){"use strict";var n=i("c58f"),a=i.n(n);a.a},"66b3":function(t,e,i){},"68b3":function(t,e,i){"use strict";var n=i("31ac"),a=i.n(n);a.a},"7a1f":function(t,e,i){},"7c55":function(t,e,i){"use strict";var n=i("d3dd"),a=i.n(n);a.a},"89e7":function(t,e,i){"use strict";var n=i("cff6"),a=i.n(n);a.a},"8cec":function(t,e,i){"use strict";var n=i("1812"),a=i.n(n);a.a},"93b6":function(t,e,i){"use strict";var n=i("3ecc"),a=i.n(n);a.a},"95af":function(t,e,i){"use strict";var n=i("a0a5"),a=i.n(n);a.a},"9f68":function(t,e,i){},a0a5:function(t,e,i){},a61b:function(t,e,i){"use strict";var n=i("9f68"),a=i.n(n);a.a},af6b:function(t,e,i){},b1cd:function(t,e,i){"use strict";var n=i("66b3"),a=i.n(n);a.a},b84f:function(t,e,i){},c136:function(t,e,i){"use strict";var n=i("eec8"),a=i.n(n);a.a},c521:function(t,e,i){"use strict";var n=i("36de"),a=i.n(n);a.a},c58f:function(t,e,i){},cca8:function(t,e,i){"use strict";var n=i("cdf2"),a=i.n(n);a.a},cdf2:function(t,e,i){},cff6:function(t,e,i){},d3dd:function(t,e,i){},e46b:function(t,e,i){"use strict";var n=i("168c"),a=i.n(n);a.a},eec8:function(t,e,i){},ffd4:function(t,e,i){}});
//# sourceMappingURL=app.6354dd78.js.map