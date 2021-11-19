(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{39:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"g",(function(){return ColorW})),__webpack_require__.d(__webpack_exports__,"c",(function(){return ColorP5})),__webpack_require__.d(__webpack_exports__,"b",(function(){return ColorP1})),__webpack_require__.d(__webpack_exports__,"d",(function(){return ColorP7})),__webpack_require__.d(__webpack_exports__,"e",(function(){return ColorS1})),__webpack_require__.d(__webpack_exports__,"f",(function(){return ColorS5})),__webpack_require__.d(__webpack_exports__,"a",(function(){return ColorGY7})),__webpack_require__.d(__webpack_exports__,"h",(function(){return FontFamily}));var ColorW="#fff",ColorP5="#2864f0",ColorP1="#ebf3ff",ColorP7="#285ac8",ColorS1="#f7f5f5",ColorS5="#d7d2d2",ColorGY7="#323232",FontFamily="'-apple-system', BlinkMacSystemFont, 'Helvetica Neue', 'ヒラギノ角ゴ ProN', Hiragino Kaku Gothic ProN, Arial, 'メイリオ', Meiryo, sans-serif"},489:function(module,exports,__webpack_require__){__webpack_require__(490),__webpack_require__(646),__webpack_require__(647),__webpack_require__(852),__webpack_require__(853),__webpack_require__(858),__webpack_require__(859),__webpack_require__(857),__webpack_require__(854),__webpack_require__(860),__webpack_require__(855),__webpack_require__(856),__webpack_require__(861),module.exports=__webpack_require__(849)},556:function(module,exports){},647:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(352)},849:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(352).configure)([__webpack_require__(850),__webpack_require__(851)],module,!1)}).call(this,__webpack_require__(206)(module))},850:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=850},851:function(module,exports,__webpack_require__){var map={"./components/stories/Button.stories.tsx":862,"./components/stories/Card.stories.tsx":863,"./components/stories/Container.stories.tsx":864,"./components/stories/Headline.stories.tsx":865,"./components/stories/Text.stories.tsx":866};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=851},861:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(873),esm=__webpack_require__(4),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},862:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ButtonPrimary",(function(){return Button_stories_ButtonPrimary})),__webpack_require__.d(__webpack_exports__,"ButtonSecondary",(function(){return Button_stories_ButtonSecondary}));var objectSpread2=__webpack_require__(48),react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(73),constants=__webpack_require__(39),Button_Button=function Button(_ref){var children=_ref.children,appearance=_ref.appearance,onClick=_ref.onClick;return react.createElement(_StyledButton,{onClick:onClick,$_css:"".concat(2.75,"rem"),$_css2:"".concat(5.5,"rem"),$_css3:"".concat(1.375,"rem"),$_css4:"1px solid ".concat("primary"===appearance?constants.c:constants.f),$_css5:"primary"===appearance?constants.c:constants.g,$_css6:"primary"===appearance?constants.g:constants.a,$_css7:constants.h,$_css8:"primary"===appearance?constants.d:constants.b,$_css9:"primary"===appearance?constants.d:constants.c,$_css10:"primary"===appearance?constants.g:constants.c},children)},_StyledButton=Object(styled_components_browser_esm.a)("button").withConfig({displayName:"Button___StyledButton",componentId:"sc-tmzz0d-0"})((function(p){return{height:p.$_css,minWidth:p.$_css2,borderRadius:p.$_css3,border:p.$_css4,backgroundColor:p.$_css5,color:p.$_css6,fontFamily:p.$_css7,fontSize:"1rem",fontWeight:"bold",padding:"0 1rem",transitionDuration:"0.4s",transitionProperty:"color, background-color, border-color","&:hover":{backgroundColor:p.$_css8,borderColor:p.$_css9,color:p.$_css10}}}));try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{appearance:{defaultValue:null,description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"src/components/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Components/Button",component:Button_Button};var Button_stories_ButtonPrimary=function ButtonPrimary(args){return react.createElement(Button_Button,args)};Button_stories_ButtonPrimary.args={children:"push me",appearance:"primary"};var Button_stories_ButtonSecondary=function ButtonSecondary(args){return react.createElement(Button_Button,args)};Button_stories_ButtonSecondary.args={children:"push me",appearance:"secondary"},Button_stories_ButtonPrimary.parameters=Object(objectSpread2.a)({storySource:{source:"(args: Parameters<typeof Button>[0]):JSX.Element => <Button {...args} />"}},Button_stories_ButtonPrimary.parameters),Button_stories_ButtonSecondary.parameters=Object(objectSpread2.a)({storySource:{source:"(args: Parameters<typeof Button>[0]):JSX.Element => <Button {...args} />"}},Button_stories_ButtonSecondary.parameters);try{Button_stories_ButtonPrimary.displayName="ButtonPrimary",Button_stories_ButtonPrimary.__docgenInfo={description:"",displayName:"ButtonPrimary",props:{appearance:{defaultValue:null,description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/stories/Button.stories.tsx#ButtonPrimary"]={docgenInfo:Button_stories_ButtonPrimary.__docgenInfo,name:"ButtonPrimary",path:"src/components/stories/Button.stories.tsx#ButtonPrimary"})}catch(__react_docgen_typescript_loader_error){}try{Button_stories_ButtonSecondary.displayName="ButtonSecondary",Button_stories_ButtonSecondary.__docgenInfo={description:"",displayName:"ButtonSecondary",props:{appearance:{defaultValue:null,description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/stories/Button.stories.tsx#ButtonSecondary"]={docgenInfo:Button_stories_ButtonSecondary.__docgenInfo,name:"ButtonSecondary",path:"src/components/stories/Button.stories.tsx#ButtonSecondary"})}catch(__react_docgen_typescript_loader_error){}},863:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"CardComponent",(function(){return Card_stories_CardComponent}));var objectSpread2=__webpack_require__(48),react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(73),constants=__webpack_require__(39),Card_Card=function Card(_ref){var children=_ref.children;return react.createElement(_StyledDiv,{$_css:constants.g},children)},_StyledDiv=Object(styled_components_browser_esm.a)("div").withConfig({displayName:"Card___StyledDiv",componentId:"sc-1ovrmyu-0"})((function(p){return{padding:"1rem",boxShadow:" 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2)",borderRadius:"0.5rem",background:p.$_css}}));try{Card_Card.displayName="Card",Card_Card.__docgenInfo={description:"",displayName:"Card",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card.tsx#Card"]={docgenInfo:Card_Card.__docgenInfo,name:"Card",path:"src/components/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Components/Card",component:Card_Card};var Card_stories_CardComponent=function CardComponent(args){return react.createElement(Card_Card,args)};Card_stories_CardComponent.args={children:"aaa"},Card_stories_CardComponent.parameters=Object(objectSpread2.a)({storySource:{source:"(args: Parameters<typeof Card>[0]):JSX.Element => <Card {...args} />"}},Card_stories_CardComponent.parameters);try{Card_stories_CardComponent.displayName="CardComponent",Card_stories_CardComponent.__docgenInfo={description:"",displayName:"CardComponent",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/stories/Card.stories.tsx#CardComponent"]={docgenInfo:Card_stories_CardComponent.__docgenInfo,name:"CardComponent",path:"src/components/stories/Card.stories.tsx#CardComponent"})}catch(__react_docgen_typescript_loader_error){}},864:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ContainerComponent",(function(){return Container_stories_ContainerComponent}));var objectSpread2=__webpack_require__(48),react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(73),constants=__webpack_require__(39),Container_Container=function Container(_ref){var children=_ref.children;return react.createElement(_StyledDiv,{$_css:constants.e},children)},_StyledDiv=Object(styled_components_browser_esm.a)("div").withConfig({displayName:"Container___StyledDiv",componentId:"sc-1phogvg-0"})((function(p){return{padding:"1rem",backgroundColor:p.$_css}}));try{Container_Container.displayName="Container",Container_Container.__docgenInfo={description:"",displayName:"Container",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Container.tsx#Container"]={docgenInfo:Container_Container.__docgenInfo,name:"Container",path:"src/components/Container.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Components/Container",component:Container_Container};var Container_stories_ContainerComponent=function ContainerComponent(args){return react.createElement(Container_Container,args)};Container_stories_ContainerComponent.args={children:"aaa"},Container_stories_ContainerComponent.parameters=Object(objectSpread2.a)({storySource:{source:"(args: Parameters<typeof Container>[0]):JSX.Element => <Container {...args} />"}},Container_stories_ContainerComponent.parameters);try{Container_stories_ContainerComponent.displayName="ContainerComponent",Container_stories_ContainerComponent.__docgenInfo={description:"",displayName:"ContainerComponent",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/stories/Container.stories.tsx#ContainerComponent"]={docgenInfo:Container_stories_ContainerComponent.__docgenInfo,name:"ContainerComponent",path:"src/components/stories/Container.stories.tsx#ContainerComponent"})}catch(__react_docgen_typescript_loader_error){}},865:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"H1",(function(){return Headline_stories_H1})),__webpack_require__.d(__webpack_exports__,"H2",(function(){return Headline_stories_H2})),__webpack_require__.d(__webpack_exports__,"H3",(function(){return Headline_stories_H3}));var objectSpread2=__webpack_require__(48),react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(73),constants=__webpack_require__(39),Headline_Headline=function Headline(_ref){var children=_ref.children,_ref$level=_ref.level,level=void 0===_ref$level?1:_ref$level,css={fontFamily:constants.h,color:constants.a,fontWeight:"bold",lineHeight:1.5};return 1===level?react.createElement(_StyledH,{$_css:css},children):2===level?react.createElement(_StyledH2,{$_css2:css},children):react.createElement(_StyledH3,{$_css3:css},children)},_StyledH=Object(styled_components_browser_esm.a)("h1").withConfig({displayName:"Headline___StyledH",componentId:"sc-37k10z-0"})((function(p){return Object(objectSpread2.a)(Object(objectSpread2.a)({},p.$_css),{},{fontSize:"3rem"})})),_StyledH2=Object(styled_components_browser_esm.a)("h2").withConfig({displayName:"Headline___StyledH2",componentId:"sc-37k10z-1"})((function(p){return Object(objectSpread2.a)(Object(objectSpread2.a)({},p.$_css2),{},{fontSize:"2rem"})})),_StyledH3=Object(styled_components_browser_esm.a)("h3").withConfig({displayName:"Headline___StyledH3",componentId:"sc-37k10z-2"})((function(p){return Object(objectSpread2.a)(Object(objectSpread2.a)({},p.$_css3),{},{fontSize:"1.5rem"})}));try{Headline_Headline.displayName="Headline",Headline_Headline.__docgenInfo={description:"",displayName:"Headline",props:{level:{defaultValue:{value:"1"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Headline.tsx#Headline"]={docgenInfo:Headline_Headline.__docgenInfo,name:"Headline",path:"src/components/Headline.tsx#Headline"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Components/Headline",component:Headline_Headline};var Headline_stories_H1=function H1(args){return react.createElement(Headline_Headline,args)};Headline_stories_H1.args={children:"H1",level:1};var Headline_stories_H2=function H2(args){return react.createElement(Headline_Headline,args)};Headline_stories_H2.args={children:"H2",level:2};var Headline_stories_H3=function H3(args){return react.createElement(Headline_Headline,args)};Headline_stories_H3.args={children:"H3",level:3},Headline_stories_H1.parameters=Object(objectSpread2.a)({storySource:{source:"(args: Parameters<typeof Headline>[0]):JSX.Element => <Headline {...args} />"}},Headline_stories_H1.parameters),Headline_stories_H2.parameters=Object(objectSpread2.a)({storySource:{source:"(args: Parameters<typeof Headline>[0]):JSX.Element => <Headline {...args} />"}},Headline_stories_H2.parameters),Headline_stories_H3.parameters=Object(objectSpread2.a)({storySource:{source:"(args: Parameters<typeof Headline>[0]):JSX.Element => <Headline {...args} />"}},Headline_stories_H3.parameters);try{Headline_stories_H1.displayName="H1",Headline_stories_H1.__docgenInfo={description:"",displayName:"H1",props:{level:{defaultValue:null,description:"",name:"level",required:!0,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/stories/Headline.stories.tsx#H1"]={docgenInfo:Headline_stories_H1.__docgenInfo,name:"H1",path:"src/components/stories/Headline.stories.tsx#H1"})}catch(__react_docgen_typescript_loader_error){}try{Headline_stories_H2.displayName="H2",Headline_stories_H2.__docgenInfo={description:"",displayName:"H2",props:{level:{defaultValue:null,description:"",name:"level",required:!0,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/stories/Headline.stories.tsx#H2"]={docgenInfo:Headline_stories_H2.__docgenInfo,name:"H2",path:"src/components/stories/Headline.stories.tsx#H2"})}catch(__react_docgen_typescript_loader_error){}try{Headline_stories_H3.displayName="H3",Headline_stories_H3.__docgenInfo={description:"",displayName:"H3",props:{level:{defaultValue:null,description:"",name:"level",required:!0,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/stories/Headline.stories.tsx#H3"]={docgenInfo:Headline_stories_H3.__docgenInfo,name:"H3",path:"src/components/stories/Headline.stories.tsx#H3"})}catch(__react_docgen_typescript_loader_error){}},866:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"TextComponent",(function(){return Text_stories_TextComponent}));var objectSpread2=__webpack_require__(48),react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(73),constants=__webpack_require__(39),Text_Text=function Text(_ref){var children=_ref.children;return react.createElement(_StyledSpan,{$_css:constants.h,$_css2:constants.a},children)},_StyledSpan=Object(styled_components_browser_esm.a)("span").withConfig({displayName:"Text___StyledSpan",componentId:"sc-1poxynp-0"})((function(p){return{fontFamily:p.$_css,lineHeight:1.5,color:p.$_css2}}));try{Text_Text.displayName="Text",Text_Text.__docgenInfo={description:"",displayName:"Text",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Text.tsx#Text"]={docgenInfo:Text_Text.__docgenInfo,name:"Text",path:"src/components/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Components/Text",component:Text_Text};var Text_stories_TextComponent=function TextComponent(args){return react.createElement(Text_Text,args)};Text_stories_TextComponent.args={children:"aaa"},Text_stories_TextComponent.parameters=Object(objectSpread2.a)({storySource:{source:"(args: Parameters<typeof Text>[0]):JSX.Element => <Text {...args} />"}},Text_stories_TextComponent.parameters);try{Text_stories_TextComponent.displayName="TextComponent",Text_stories_TextComponent.__docgenInfo={description:"",displayName:"TextComponent",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/stories/Text.stories.tsx#TextComponent"]={docgenInfo:Text_stories_TextComponent.__docgenInfo,name:"TextComponent",path:"src/components/stories/Text.stories.tsx#TextComponent"})}catch(__react_docgen_typescript_loader_error){}}},[[489,2,3]]]);