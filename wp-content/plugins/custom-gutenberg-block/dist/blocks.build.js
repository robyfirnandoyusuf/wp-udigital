/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_blocks__ = __webpack_require__(/*! @wordpress/blocks */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_blocks___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_blocks__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_block_editor__ = __webpack_require__(/*! @wordpress/block-editor */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_block_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__wordpress_block_editor__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_components__ = __webpack_require__(/*! @wordpress/components */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wordpress_components__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_css__ = __webpack_require__(/*! ./style.css */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_css__);\n\n\n\n\n\nObject(__WEBPACK_IMPORTED_MODULE_0__wordpress_blocks__[\"registerBlockType\"])('custom-gutenberg-blocks/image-content', {\n    title: 'Image & Content',\n    icon: 'format-image',\n    category: 'layout',\n    attributes: {\n        content: {\n            type: 'array',\n            source: 'children',\n            selector: 'p'\n        },\n        imageUrl: {\n            type: 'string',\n            source: 'attribute',\n            selector: 'img',\n            attribute: 'src'\n        },\n        fontSize: {\n            type: 'number',\n            default: 16 // Default font size\n        },\n        textColor: {\n            type: 'string',\n            default: '#000000' // Default text color\n        }\n    },\n\n    edit: function edit(props) {\n        var _props$attributes = props.attributes,\n            content = _props$attributes.content,\n            imageUrl = _props$attributes.imageUrl,\n            fontSize = _props$attributes.fontSize,\n            textColor = _props$attributes.textColor,\n            setAttributes = props.setAttributes,\n            className = props.className;\n\n\n        var onSelectImage = function onSelectImage(media) {\n            setAttributes({ imageUrl: media.url });\n        };\n\n        var onChangeContent = function onChangeContent(newContent) {\n            setAttributes({ content: newContent });\n        };\n\n        return wp.element.createElement(\n            'div',\n            null,\n            wp.element.createElement(\n                __WEBPACK_IMPORTED_MODULE_1__wordpress_block_editor__[\"InspectorControls\"],\n                null,\n                wp.element.createElement(\n                    __WEBPACK_IMPORTED_MODULE_2__wordpress_components__[\"PanelBody\"],\n                    { title: 'Text Settings' },\n                    wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__wordpress_components__[\"RangeControl\"], {\n                        label: 'Font Size',\n                        value: fontSize,\n                        onChange: function onChange(newSize) {\n                            return setAttributes({ fontSize: newSize });\n                        },\n                        min: 10,\n                        max: 100\n                    }),\n                    wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__wordpress_components__[\"ColorPicker\"], {\n                        color: textColor,\n                        onChangeComplete: function onChangeComplete(newColor) {\n                            return setAttributes({ textColor: newColor.hex });\n                        },\n                        disableAlpha: true\n                    })\n                )\n            ),\n            wp.element.createElement(\n                'div',\n                { className: className, style: { display: 'flex', alignItems: 'center' } },\n                wp.element.createElement(\n                    'div',\n                    { style: { flex: '1' } },\n                    wp.element.createElement(\n                        __WEBPACK_IMPORTED_MODULE_1__wordpress_block_editor__[\"MediaUploadCheck\"],\n                        null,\n                        wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__wordpress_block_editor__[\"MediaUpload\"], {\n                            onSelect: onSelectImage,\n                            allowedTypes: ['image'],\n                            value: imageUrl,\n                            render: function render(_ref) {\n                                var open = _ref.open;\n                                return wp.element.createElement(\n                                    __WEBPACK_IMPORTED_MODULE_2__wordpress_components__[\"Button\"],\n                                    { onClick: open, className: 'button button-large' },\n                                    !imageUrl ? 'Upload Image' : 'Change Image'\n                                );\n                            }\n                        })\n                    ),\n                    imageUrl && wp.element.createElement('img', { src: imageUrl, alt: 'Uploaded Image', style: { maxWidth: '50%', marginRight: '20px' } })\n                ),\n                wp.element.createElement(\n                    'div',\n                    { style: { flex: '2' } },\n                    wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__wordpress_block_editor__[\"RichText\"], {\n                        tagName: 'p',\n                        placeholder: 'Add your content',\n                        value: content,\n                        onChange: onChangeContent,\n                        style: { fontSize: fontSize + 'px', color: textColor }\n                    })\n                )\n            )\n        );\n    },\n    save: function save(props) {\n        var _props$attributes2 = props.attributes,\n            content = _props$attributes2.content,\n            imageUrl = _props$attributes2.imageUrl,\n            fontSize = _props$attributes2.fontSize,\n            textColor = _props$attributes2.textColor;\n\n\n        return wp.element.createElement(\n            'div',\n            { className: 'row-meet', style: { display: 'flex' } },\n            imageUrl && wp.element.createElement('img', { src: imageUrl, alt: 'Uploaded Image', style: { maxWidth: '50%', marginRight: '20px' } }),\n            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__wordpress_block_editor__[\"RichText\"].Content, {\n                tagName: 'p',\n                value: content,\n                style: { fontSize: fontSize + 'px', color: textColor }\n            })\n        );\n    }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gZnJvbSAnQHdvcmRwcmVzcy9ibG9ja3MnO1xuaW1wb3J0IHsgUmljaFRleHQsIE1lZGlhVXBsb2FkLCBNZWRpYVVwbG9hZENoZWNrLCBJbnNwZWN0b3JDb250cm9scyB9IGZyb20gJ0B3b3JkcHJlc3MvYmxvY2stZWRpdG9yJztcbmltcG9ydCB7IEJ1dHRvbiwgUGFuZWxCb2R5LCBSYW5nZUNvbnRyb2wsIENvbG9yUGlja2VyIH0gZnJvbSAnQHdvcmRwcmVzcy9jb21wb25lbnRzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnY3VzdG9tLWd1dGVuYmVyZy1ibG9ja3MvaW1hZ2UtY29udGVudCcsIHtcbiAgICB0aXRsZTogJ0ltYWdlICYgQ29udGVudCcsXG4gICAgaWNvbjogJ2Zvcm1hdC1pbWFnZScsXG4gICAgY2F0ZWdvcnk6ICdsYXlvdXQnLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICAgIHNvdXJjZTogJ2NoaWxkcmVuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiAncCdcbiAgICAgICAgfSxcbiAgICAgICAgaW1hZ2VVcmw6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgc291cmNlOiAnYXR0cmlidXRlJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnaW1nJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZTogJ3NyYydcbiAgICAgICAgfSxcbiAgICAgICAgZm9udFNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgZGVmYXVsdDogMTYgLy8gRGVmYXVsdCBmb250IHNpemVcbiAgICAgICAgfSxcbiAgICAgICAgdGV4dENvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICcjMDAwMDAwJyAvLyBEZWZhdWx0IHRleHQgY29sb3JcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG4gICAgICAgIHZhciBfcHJvcHMkYXR0cmlidXRlcyA9IHByb3BzLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgICBjb250ZW50ID0gX3Byb3BzJGF0dHJpYnV0ZXMuY29udGVudCxcbiAgICAgICAgICAgIGltYWdlVXJsID0gX3Byb3BzJGF0dHJpYnV0ZXMuaW1hZ2VVcmwsXG4gICAgICAgICAgICBmb250U2l6ZSA9IF9wcm9wcyRhdHRyaWJ1dGVzLmZvbnRTaXplLFxuICAgICAgICAgICAgdGV4dENvbG9yID0gX3Byb3BzJGF0dHJpYnV0ZXMudGV4dENvbG9yLFxuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyA9IHByb3BzLnNldEF0dHJpYnV0ZXMsXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWU7XG5cblxuICAgICAgICB2YXIgb25TZWxlY3RJbWFnZSA9IGZ1bmN0aW9uIG9uU2VsZWN0SW1hZ2UobWVkaWEpIHtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoeyBpbWFnZVVybDogbWVkaWEudXJsIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBvbkNoYW5nZUNvbnRlbnQgPSBmdW5jdGlvbiBvbkNoYW5nZUNvbnRlbnQobmV3Q29udGVudCkge1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyh7IGNvbnRlbnQ6IG5ld0NvbnRlbnQgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBJbnNwZWN0b3JDb250cm9scyxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgUGFuZWxCb2R5LFxuICAgICAgICAgICAgICAgICAgICB7IHRpdGxlOiAnVGV4dCBTZXR0aW5ncycgfSxcbiAgICAgICAgICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJhbmdlQ29udHJvbCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdGb250IFNpemUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZvbnRTaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKG5ld1NpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7IGZvbnRTaXplOiBuZXdTaXplIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbjogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg6IDEwMFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KENvbG9yUGlja2VyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGV4dENvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VDb21wbGV0ZTogZnVuY3Rpb24gb25DaGFuZ2VDb21wbGV0ZShuZXdDb2xvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgdGV4dENvbG9yOiBuZXdDb2xvci5oZXggfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUFscGhhOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogY2xhc3NOYW1lLCBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH0gfSxcbiAgICAgICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IHN0eWxlOiB7IGZsZXg6ICcxJyB9IH0sXG4gICAgICAgICAgICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIE1lZGlhVXBsb2FkQ2hlY2ssXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KE1lZGlhVXBsb2FkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q6IG9uU2VsZWN0SW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsb3dlZFR5cGVzOiBbJ2ltYWdlJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGltYWdlVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKF9yZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wZW4gPSBfcmVmLm9wZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCdXR0b24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG9uQ2xpY2s6IG9wZW4sIGNsYXNzTmFtZTogJ2J1dHRvbiBidXR0b24tbGFyZ2UnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaW1hZ2VVcmwgPyAnVXBsb2FkIEltYWdlJyA6ICdDaGFuZ2UgSW1hZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmwgJiYgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdpbWcnLCB7IHNyYzogaW1hZ2VVcmwsIGFsdDogJ1VwbG9hZGVkIEltYWdlJywgc3R5bGU6IHsgbWF4V2lkdGg6ICc1MCUnLCBtYXJnaW5SaWdodDogJzIwcHgnIH0gfSlcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHsgc3R5bGU6IHsgZmxleDogJzInIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdOYW1lOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0FkZCB5b3VyIGNvbnRlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogb25DaGFuZ2VDb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgZm9udFNpemU6IGZvbnRTaXplICsgJ3B4JywgY29sb3I6IHRleHRDb2xvciB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0sXG4gICAgc2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuICAgICAgICB2YXIgX3Byb3BzJGF0dHJpYnV0ZXMyID0gcHJvcHMuYXR0cmlidXRlcyxcbiAgICAgICAgICAgIGNvbnRlbnQgPSBfcHJvcHMkYXR0cmlidXRlczIuY29udGVudCxcbiAgICAgICAgICAgIGltYWdlVXJsID0gX3Byb3BzJGF0dHJpYnV0ZXMyLmltYWdlVXJsLFxuICAgICAgICAgICAgZm9udFNpemUgPSBfcHJvcHMkYXR0cmlidXRlczIuZm9udFNpemUsXG4gICAgICAgICAgICB0ZXh0Q29sb3IgPSBfcHJvcHMkYXR0cmlidXRlczIudGV4dENvbG9yO1xuXG5cbiAgICAgICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdyb3ctbWVldCcsIHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JyB9IH0sXG4gICAgICAgICAgICBpbWFnZVVybCAmJiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycsIHsgc3JjOiBpbWFnZVVybCwgYWx0OiAnVXBsb2FkZWQgSW1hZ2UnLCBzdHlsZTogeyBtYXhXaWR0aDogJzUwJScsIG1hcmdpblJpZ2h0OiAnMjBweCcgfSB9KSxcbiAgICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dC5Db250ZW50LCB7XG4gICAgICAgICAgICAgICAgdGFnTmFtZTogJ3AnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBjb250ZW50LFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7IGZvbnRTaXplOiBmb250U2l6ZSArICdweCcsIGNvbG9yOiB0ZXh0Q29sb3IgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!****************************!*\
  !*** external "wp.blocks" ***!
  \****************************/
/*! dynamic exports provided */
/*! exports used: registerBlockType */
/***/ (function(module, exports) {

module.exports = wp.blocks;

/***/ }),
/* 3 */
/*!*********************************!*\
  !*** external "wp.blockEditor" ***!
  \*********************************/
/*! dynamic exports provided */
/*! exports used: InspectorControls, MediaUpload, MediaUploadCheck, RichText */
/***/ (function(module, exports) {

module.exports = wp.blockEditor;

/***/ }),
/* 4 */
/*!********************************!*\
  !*** external "wp.components" ***!
  \********************************/
/*! dynamic exports provided */
/*! exports used: Button, ColorPicker, PanelBody, RangeControl */
/***/ (function(module, exports) {

module.exports = wp.components;

/***/ }),
/* 5 */
/*!*****************************!*\
  !*** ./src/block/style.css ***!
  \*****************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5jc3M/MjZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrL3N0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ })
/******/ ]);