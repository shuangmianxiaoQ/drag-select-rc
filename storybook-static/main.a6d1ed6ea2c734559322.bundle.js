(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{271:function(module,exports,__webpack_require__){__webpack_require__(272),__webpack_require__(418),module.exports=__webpack_require__(419)},336:function(module,exports){},419:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(268);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(609)],module)}.call(this,__webpack_require__(420)(module))},609:function(module,exports,__webpack_require__){var map={"./stories/index.stories.js":629};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=609},628:function(module,exports,__webpack_require__){},629:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(16),__webpack_require__(610),__webpack_require__(56);var slicedToArray=__webpack_require__(41),react=__webpack_require__(2),react_default=__webpack_require__.n(react),dist=__webpack_require__(269),clone=(__webpack_require__(39),__webpack_require__(270)),clone_default=__webpack_require__.n(clone),eventToCellLocation=function(e){var target;if(e.touches){var touch=e.touches[0];target=document.elementFromPoint(touch.clientX,touch.clientY)}else for(target=e.target;"TD"!==target.tagName;)target=target.parentNode;return{row:target.parentNode.rowIndex,column:target.cellIndex}},useEventListener=function(eventName,handler){var element=2<arguments.length&&void 0!==arguments[2]?arguments[2]:window,option=3<arguments.length&&void 0!==arguments[3]&&arguments[3],savedHandler=Object(react.useRef)(handler);Object(react.useEffect)((function(){savedHandler.current=handler}),[handler]),Object(react.useEffect)((function(){if(element&&element.addEventListener){var eventListener=function(event){return savedHandler.current(event)};return element.addEventListener(eventName,eventListener,option),function(){element.removeEventListener(eventName,eventListener,option)}}}),[eventName,element,option])},DragSelect=function(props){var _useState=Object(react.useState)(!1),_useState2=Object(slicedToArray.a)(_useState,2),selectionStarted=_useState2[0],setSelectionStarted=_useState2[1],_useState3=Object(react.useState)(0),_useState4=Object(slicedToArray.a)(_useState3,2),startRow=_useState4[0],setStartRow=_useState4[1],_useState5=Object(react.useState)(0),_useState6=Object(slicedToArray.a)(_useState5,2),startColumn=_useState6[0],setStartColumn=_useState6[1],_useState7=Object(react.useState)(0),_useState8=Object(slicedToArray.a)(_useState7,2),endRow=_useState8[0],setEndRow=_useState8[1],_useState9=Object(react.useState)(0),_useState10=Object(slicedToArray.a)(_useState9,2),endColumn=_useState10[0],setEndColumn=_useState10[1],_useState11=Object(react.useState)(!1),_useState12=Object(slicedToArray.a)(_useState11,2),addMode=_useState12[0],setAddMode=_useState12[1],value=props.value,onChange=props.onChange,handleTouchEndWindow=function(e){var isLeftClick=0===e.button,isTouch="mousedown"!==e.type;if(selectionStarted&&(isLeftClick||isTouch)){for(var target=clone_default()(value),minRow=Math.min(startRow,endRow),maxRow=Math.max(startRow,endRow),row=minRow;row<=maxRow;row++)for(var minColumn=Math.min(startColumn,endColumn),maxColumn=Math.max(startColumn,endColumn),column=minColumn;column<=maxColumn;column++)target[row][column]=addMode;setSelectionStarted(!1),onChange(target)}},handleTouchStartCell=function(e){var isLeftClick=0===e.button,isTouch="mousedown"!==e.type;if(!selectionStarted&&(isLeftClick||isTouch)){e.preventDefault();var _eventToCellLocation=eventToCellLocation(e),row=_eventToCellLocation.row,column=_eventToCellLocation.column;setSelectionStarted(!0),setStartRow(row),setStartColumn(column),setEndRow(row),setEndColumn(column),setAddMode(!value[row][column])}},handleTouchMoveCell=function(e){if(selectionStarted){e.preventDefault();var _eventToCellLocation2=eventToCellLocation(e),row=_eventToCellLocation2.row,column=_eventToCellLocation2.column;endRow===row&&endColumn===column||(setEndRow(row),setEndColumn(column))}};return useEventListener("mouseup",handleTouchEndWindow),useEventListener("touchend",handleTouchEndWindow),react_default.a.createElement("table",{className:"table-drag-select"},react_default.a.createElement("tbody",null,function renderRows(){return react_default.a.Children.map(props.children,(function(tr,i){return react_default.a.createElement("tr",Object.assign({key:i},tr.props),react_default.a.Children.map(tr.props.children,(function(cell,j){return react_default.a.createElement(Cell,Object.assign({key:"".concat(j,"_CELL"),onTouchStart:handleTouchStartCell,onTouchMove:handleTouchMoveCell,selected:props.value[i][j]},cell.props,{selecting:(row=i,column=j,minRow=Math.min(startRow,endRow),maxRow=Math.max(startRow,endRow),minColumn=Math.min(startColumn,endColumn),maxColumn=Math.max(startColumn,endColumn),selectionStarted&&row>=minRow&&row<=maxRow&&column>=minColumn&&column<=maxColumn?1:0)}),cell.props.children);var row,column,minRow,maxRow,minColumn,maxColumn})))}))}()))};DragSelect.displayName="DragSelect";var _ref=react_default.a.createElement("span",null," "),Cell=function(props){var tdRef=Object(react.useRef)(),_props$className=props.className,className=void 0===_props$className?"":_props$className,disabled=props.disabled,selecting=props.selecting,selected=props.selected,onTouchStart=props.onTouchStart,onTouchMove=props.onTouchMove;disabled?className+=" cell-disabled":(className+=" cell-enabled",selected&&(className+=" cell-selected"),selecting&&(className+=" cell-being-selected"));var handleTouchStart=function(e){disabled||onTouchStart(e)},handleTouchMove=function(e){disabled||onTouchMove(e)};return useEventListener("touchstart",handleTouchStart,tdRef.current,{passive:!1}),useEventListener("touchend",handleTouchMove,tdRef.current,{passive:!1}),react_default.a.createElement("td",Object.assign({ref:tdRef,className:className,onMouseDown:handleTouchStart,onMouseMove:handleTouchMove},props),props.children||_ref)};Cell.displayName="Cell",DragSelect.__docgenInfo={description:"",methods:[],displayName:"DragSelect"};var src_DragSelect=DragSelect;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/DragSelect/index.tsx"]={name:"DragSelect",docgenInfo:DragSelect.__docgenInfo,path:"src/DragSelect/index.tsx"});__webpack_require__(628);__webpack_require__.d(__webpack_exports__,"index",(function(){return index_stories_index}));var WEEK_S=["一","二","三","四","五","六","日"],index_stories_ref=(__webpack_exports__.default={title:"DragSelect",component:src_DragSelect},react_default.a.createElement("td",{disabled:!0},"星期/时段")),index_stories_index=function(){var _useState=Object(react.useState)(initCellsFunc()),_useState2=Object(slicedToArray.a)(_useState,2),cells=_useState2[0],setCells=_useState2[1];return react_default.a.createElement(src_DragSelect,{value:cells,onChange:function changeDrag(val){Object(dist.action)("draged!"),setCells(val)}},react_default.a.createElement("tr",null,index_stories_ref,Array(24).fill(null).map((function(item,index){return react_default.a.createElement("td",{disabled:!0,key:index},"".concat(index,"-").concat(index+1))}))),Array(7).fill(null).map((function(item,index){return react_default.a.createElement("tr",{key:"".concat(index,"__TR")},react_default.a.createElement("td",{disabled:!0},WEEK_S[index]),Array(24).fill(null).map((function(ele,idx){return react_default.a.createElement("td",{key:idx})})))})))};index_stories_index.displayName="index";var initCellsFunc=function(){for(var arr=Array(8),i=0;i<arr.length;i++)arr[i]=Array(25).fill(!0);return arr};index_stories_index.__docgenInfo={description:"",methods:[],displayName:"index"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/index.stories.js"]={name:"index",docgenInfo:index_stories_index.__docgenInfo,path:"src/stories/index.stories.js"})}},[[271,1,2]]]);
//# sourceMappingURL=main.a6d1ed6ea2c734559322.bundle.js.map