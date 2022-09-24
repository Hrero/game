/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/element/TimeText.ts":
/*!*********************************!*\
  !*** ./src/element/TimeText.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TimeText\": () => (/* binding */ TimeText)\n/* harmony export */ });\n/* harmony import */ var _eventConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../eventConfig */ \"./src/eventConfig.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar TimeText = /** @class */ (function (_super) {\n    __extends(TimeText, _super);\n    function TimeText() {\n        var _this = _super.call(this) || this;\n        _this.fillColor = \"#ff0000\";\n        _this.text = \"3\";\n        _this.x = 335;\n        _this.y = 880;\n        _this.size = 90;\n        _this.addEventListener(FYGE.Event.ADDED_TO_STAGE, _this.initTime);\n        return _this;\n    }\n    TimeText.prototype.initTime = function () {\n        var _this = this;\n        var timerVal = setInterval(function () {\n            _this.text = (Number(_this.text) - 1).toString();\n            if (!+_this.text) {\n                clearInterval(timerVal);\n                var testResult = new FYGE.TextField();\n                testResult.fillColor = \"#ff0000\";\n                testResult.text = \"游戏结束\";\n                testResult.size = 90;\n                testResult.x = -130;\n                testResult.y = 0;\n                _this.text = \"\";\n                _this.addChild(testResult);\n                _this.dispatchEvent(_eventConfig__WEBPACK_IMPORTED_MODULE_0__[\"default\"].GAME_OVER);\n            }\n        }, 1000);\n    };\n    TimeText.prototype.successText = function () {\n        var testResult = new FYGE.TextField();\n        testResult.fillColor = \"#ff0000\";\n        testResult.text = \"游戏成功\";\n        testResult.size = 90;\n        testResult.x = -130;\n        testResult.y = 0;\n        this.text = \"\";\n        this.removeAllChildren();\n        this.addChild(testResult);\n    };\n    return TimeText;\n}(FYGE.TextField));\n\n\n\n//# sourceURL=webpack:///./src/element/TimeText.ts?");

/***/ }),

/***/ "./src/element/board.ts":
/*!******************************!*\
  !*** ./src/element/board.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameconfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameconfig */ \"./src/gameconfig.ts\");\n/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./piece */ \"./src/element/piece.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\nvar Board = /** @class */ (function (_super) {\n    __extends(Board, _super);\n    function Board() {\n        var _this = _super.call(this) || this;\n        _this.x = 65;\n        _this.y = 50;\n        _this.beginFill(0xffffff, 1);\n        _this.drawRect(0, 0, _gameconfig__WEBPACK_IMPORTED_MODULE_0__.BOARD_SIZE, _gameconfig__WEBPACK_IMPORTED_MODULE_0__.BOARD_SIZE);\n        _this.endFill();\n        _this.addEventListener(FYGE.Event.ADDED_TO_STAGE, _this.initBoard);\n        return _this;\n    }\n    Board.prototype.initBoard = function () {\n        var _this = this;\n        _gameconfig__WEBPACK_IMPORTED_MODULE_0__.INIT_DATA.forEach(function (id, index) {\n            var fragment = _this.addChild(new _piece__WEBPACK_IMPORTED_MODULE_1__[\"default\"]());\n            var col = index % _gameconfig__WEBPACK_IMPORTED_MODULE_0__.GAME_SIZE;\n            var row = Math.floor(index / _gameconfig__WEBPACK_IMPORTED_MODULE_0__.GAME_SIZE);\n            fragment.id = id;\n            fragment.mineList = _this.pieceManager.mineList;\n            fragment.x = col * (_gameconfig__WEBPACK_IMPORTED_MODULE_0__.PIECE_SIZE + _gameconfig__WEBPACK_IMPORTED_MODULE_0__.GAP) + 1;\n            fragment.y = row * (_gameconfig__WEBPACK_IMPORTED_MODULE_0__.PIECE_SIZE + _gameconfig__WEBPACK_IMPORTED_MODULE_0__.GAP) + 1;\n            fragment.initMineNum();\n            _this.pieceManager.add(fragment);\n            _this.addChild(fragment);\n        });\n    };\n    return Board;\n}(FYGE.Graphics));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);\n\n\n//# sourceURL=webpack:///./src/element/board.ts?");

/***/ }),

/***/ "./src/element/piece.ts":
/*!******************************!*\
  !*** ./src/element/piece.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameconfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameconfig */ \"./src/gameconfig.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils.ts\");\n/* harmony import */ var _upEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upEvent */ \"./src/element/upEvent.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\n\n/**\n * 数字\n */\nvar TextNum = /** @class */ (function (_super) {\n    __extends(TextNum, _super);\n    function TextNum(num) {\n        var _this = _super.call(this) || this;\n        _this.fillColor = \"#ff0000\";\n        _this.text = num;\n        _this.x = 20;\n        _this.y = 18;\n        _this.size = 30;\n        return _this;\n    }\n    return TextNum;\n}(FYGE.TextField));\n/**\n * 底板\n */\nvar PieceGraphics = /** @class */ (function (_super) {\n    __extends(PieceGraphics, _super);\n    function PieceGraphics(x, y) {\n        var _this = _super.call(this) || this;\n        _this.x = x;\n        _this.y = y;\n        _this.beginFill(0xcccccc, 1);\n        _this.drawRect(0, 0, _gameconfig__WEBPACK_IMPORTED_MODULE_0__.PIECE_SIZE, _gameconfig__WEBPACK_IMPORTED_MODULE_0__.PIECE_SIZE);\n        _this.endFill();\n        return _this;\n    }\n    return PieceGraphics;\n}(FYGE.Graphics));\n/**\n * 地雷\n */\nvar Mine = /** @class */ (function (_super) {\n    __extends(Mine, _super);\n    function Mine() {\n        var _this = _super.call(this) || this;\n        _this.texture = FYGE.Texture.fromUrl(_gameconfig__WEBPACK_IMPORTED_MODULE_0__.minePic);\n        _this.x = 0;\n        _this.y = 0;\n        _this.width = _gameconfig__WEBPACK_IMPORTED_MODULE_0__.PIECE_SIZE;\n        _this.height = _gameconfig__WEBPACK_IMPORTED_MODULE_0__.PIECE_SIZE;\n        return _this;\n    }\n    return Mine;\n}(FYGE.Sprite));\n/**\n * 罩子\n */\nvar HoodGraphics = /** @class */ (function (_super) {\n    __extends(HoodGraphics, _super);\n    function HoodGraphics(x, y) {\n        var _this = _super.call(this) || this;\n        _this.x = x;\n        _this.y = y;\n        _this.beginFill(0x7fff00, 1);\n        _this.drawRect(0, 0, _gameconfig__WEBPACK_IMPORTED_MODULE_0__.PIECE_SIZE, _gameconfig__WEBPACK_IMPORTED_MODULE_0__.PIECE_SIZE);\n        _this.endFill();\n        return _this;\n    }\n    return HoodGraphics;\n}(FYGE.Graphics));\n/**\n * 方格\n */\nvar Piece = /** @class */ (function (_super) {\n    __extends(Piece, _super);\n    function Piece() {\n        var _this = _super.call(this) || this;\n        _this.pieceGraphics = new PieceGraphics(0, 0);\n        _this.hoodGraphics = new HoodGraphics(0, 0);\n        _this.lineStyle(2, 0xff0000);\n        _this.addChild(_this.pieceGraphics);\n        _this.addChild(_this.hoodGraphics);\n        _this.setChildIndex(_this.pieceGraphics, 0);\n        _this.setChildIndex(_this.hoodGraphics, 2);\n        return _this;\n    }\n    Object.defineProperty(Piece.prototype, \"id\", {\n        get: function () {\n            return this._id;\n        },\n        set: function (val) {\n            this._id = val;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Piece.prototype, \"mineList\", {\n        get: function () {\n            return this._mineList;\n        },\n        set: function (val) {\n            this._mineList = val;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Piece.prototype.initMineNum = function () {\n        var getMineList = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getFourWeekNumber)(this.id, _gameconfig__WEBPACK_IMPORTED_MODULE_0__.GAME_SIZE);\n        if (this._mineList.includes(this._id)) {\n            this.mine = new Mine();\n            this.addChild(this.mine);\n            this.setChildIndex(this.mine, 1);\n        }\n        else {\n            var mineNum = this._mineList.filter(function (item) {\n                return getMineList.includes(item);\n            }).length;\n            this.textNum = new TextNum(mineNum);\n            this.addChild(this.textNum);\n            this.setChildIndex(this.textNum, 1);\n        }\n    };\n    Piece.prototype.onMouseUp = function () {\n        this.removeChild(this.hoodGraphics);\n        var upEvent = new _upEvent__WEBPACK_IMPORTED_MODULE_2__.UpEvent(_upEvent__WEBPACK_IMPORTED_MODULE_2__.UpEvent.NAME);\n        this.dispatchEvent(upEvent, { id: this.id });\n    };\n    return Piece;\n}(FYGE.Graphics));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Piece);\n\n\n//# sourceURL=webpack:///./src/element/piece.ts?");

/***/ }),

/***/ "./src/element/upEvent.ts":
/*!********************************!*\
  !*** ./src/element/upEvent.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UpEvent\": () => (/* binding */ UpEvent)\n/* harmony export */ });\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n//hi\nvar UpEvent = /** @class */ (function (_super) {\n    __extends(UpEvent, _super);\n    function UpEvent(type) {\n        var _this = _super.call(this, type) || this;\n        _this._year = 0;\n        _this._month = 0;\n        _this._date = 0;\n        _this._where = \"\";\n        _this._todo = \"\";\n        return _this;\n    }\n    UpEvent.NAME = \"点击\";\n    return UpEvent;\n}(FYGE.Event));\n\n\n\n//# sourceURL=webpack:///./src/element/upEvent.ts?");

/***/ }),

/***/ "./src/eventConfig.ts":
/*!****************************!*\
  !*** ./src/eventConfig.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar EventConfig = /** @class */ (function (_super) {\n    __extends(EventConfig, _super);\n    function EventConfig() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    EventConfig.MOUSE_UP = 'MOUSE_UP';\n    EventConfig.GAME_OVER = 'GAME_OVER';\n    EventConfig.SUCCESS = 'SUCCESS';\n    return EventConfig;\n}(FYGE.Event));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventConfig);\n\n\n//# sourceURL=webpack:///./src/eventConfig.ts?");

/***/ }),

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _stage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stage */ \"./src/stage.ts\");\n/* harmony import */ var _element_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element/board */ \"./src/element/board.ts\");\n/* harmony import */ var _eventConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventConfig */ \"./src/eventConfig.ts\");\n/* harmony import */ var _pieceManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pieceManager */ \"./src/pieceManager.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\n/* harmony import */ var _gameconfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gameconfig */ \"./src/gameconfig.ts\");\n/* harmony import */ var _element_TimeText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./element/TimeText */ \"./src/element/TimeText.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\n\n\n\n\n\nvar Game = /** @class */ (function (_super) {\n    __extends(Game, _super);\n    function Game() {\n        var _this = _super.call(this) || this;\n        (0,_stage__WEBPACK_IMPORTED_MODULE_0__.getStage)().addChild(_this);\n        _this._createBoard();\n        _this._createTime();\n        return _this;\n    }\n    Game.prototype._createBoard = function () {\n        this.board = new _element_board__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        this.board.pieceManager = new _pieceManager__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n        this.board.pieceManager.mineList = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getRandomArrayElements)(_gameconfig__WEBPACK_IMPORTED_MODULE_5__.INIT_DATA, _gameconfig__WEBPACK_IMPORTED_MODULE_5__.MINEMAXNUM);\n        this.board.pieceManager.addEventListener(_eventConfig__WEBPACK_IMPORTED_MODULE_2__[\"default\"].GAME_OVER, this.gameOver, this);\n        this.board.pieceManager.addEventListener(_eventConfig__WEBPACK_IMPORTED_MODULE_2__[\"default\"].SUCCESS, this.success, this);\n        this.addChild(this.board);\n    };\n    Game.prototype._createTime = function () {\n        this.timeText = new _element_TimeText__WEBPACK_IMPORTED_MODULE_6__.TimeText();\n        this.timeText.addEventListener(_eventConfig__WEBPACK_IMPORTED_MODULE_2__[\"default\"].GAME_OVER, this.gameOver, this);\n        this.addChild(this.timeText);\n    };\n    Game.prototype.gameOver = function () {\n        this.board.mouseChildren = false;\n    };\n    Game.prototype.success = function () {\n        // 移除事件\n        this.board.mouseChildren = false;\n        // 移除盖板\n        this.board.children.forEach(function (element) {\n            element.removeChild(element.hoodGraphics);\n        });\n        // 成功文案\n        this.timeText.successText();\n    };\n    return Game;\n}(FYGE.Sprite));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n\n//# sourceURL=webpack:///./src/game.ts?");

/***/ }),

/***/ "./src/gameconfig.ts":
/*!***************************!*\
  !*** ./src/gameconfig.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PIC_URLS\": () => (/* binding */ PIC_URLS),\n/* harmony export */   \"GAME_SIZE\": () => (/* binding */ GAME_SIZE),\n/* harmony export */   \"BOARD_SIZE\": () => (/* binding */ BOARD_SIZE),\n/* harmony export */   \"PIECE_SIZE\": () => (/* binding */ PIECE_SIZE),\n/* harmony export */   \"minePic\": () => (/* binding */ minePic),\n/* harmony export */   \"GAP\": () => (/* binding */ GAP),\n/* harmony export */   \"MINEMAXNUM\": () => (/* binding */ MINEMAXNUM),\n/* harmony export */   \"INIT_DATA\": () => (/* binding */ INIT_DATA),\n/* harmony export */   \"TEXT_OUT\": () => (/* binding */ TEXT_OUT)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\n\nvar PIC_URLS = [];\nvar GAME_SIZE = 10;\nvar BOARD_SIZE = 622;\nvar PIECE_SIZE = 60;\n// export const minePic = 'http://file.haozengrun.com/1663853069381WechatIMG234.png'\nvar minePic = './image/WechatIMG234.png';\nvar GAP = 2;\nvar MINEMAXNUM = 10;\nvar INIT_DATA = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.fill)(GAME_SIZE * GAME_SIZE); // 数据为图片id，从0开始（图片索引）\nvar TEXT_OUT = \"59\";\n\n\n//# sourceURL=webpack:///./src/gameconfig.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stage */ \"./src/stage.ts\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.ts\");\n\n\nvar canvas = document.getElementById(\"canvas\");\ncanvas.width = document.body.clientWidth * 1;\ncanvas.height = document.body.clientHeight * 1;\nvar stage = new FYGE.Stage(canvas, 750, 1624, canvas.width, canvas.height, FYGE.RENDERER_TYPE.CANVAS, false, false);\n(0,_stage__WEBPACK_IMPORTED_MODULE_0__.setStage)(stage);\nvar mouseEvent = stage.onMouseEvent.bind(stage);\ncanvas.addEventListener(\"touchstart\", mouseEvent, false);\ncanvas.addEventListener('touchmove', mouseEvent, false);\ncanvas.addEventListener('touchend', mouseEvent, false);\nstage.addEventListener(FYGE.Event.INIT_STAGE, onInitStage, undefined);\nfunction onInitStage() {\n    new _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n}\n(function loop() {\n    FYGE.Tween.flush();\n    stage.flush();\n    requestAnimationFrame(loop);\n})();\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/pieceManager.ts":
/*!*****************************!*\
  !*** ./src/pieceManager.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _element_upEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element/upEvent */ \"./src/element/upEvent.ts\");\n/* harmony import */ var _gameconfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameconfig */ \"./src/gameconfig.ts\");\n/* harmony import */ var _eventConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventConfig */ \"./src/eventConfig.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\n\nvar PieceManager = /** @class */ (function (_super) {\n    __extends(PieceManager, _super);\n    function PieceManager() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        _this._upPieceList = [];\n        return _this;\n    }\n    // 初始化对象事件\n    PieceManager.prototype.add = function (item) {\n        item.once(FYGE.MouseEvent.MOUSE_UP, this.onMouseUp);\n        item.addEventListener(_element_upEvent__WEBPACK_IMPORTED_MODULE_0__.UpEvent.NAME, this._mouseUp, this);\n    };\n    Object.defineProperty(PieceManager.prototype, \"mineList\", {\n        get: function () {\n            return this._mineList;\n        },\n        set: function (val) {\n            this._mineList = val;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    PieceManager.prototype._mouseUp = function (e) {\n        var id = e.data.id;\n        // 游戏失败\n        if (this._mineList.includes(id)) {\n            console.log(11);\n            this.dispatchEvent(_eventConfig__WEBPACK_IMPORTED_MODULE_2__[\"default\"].GAME_OVER);\n            return;\n        }\n        this._upPieceList.push(id);\n        if (this._upPieceList.concat(this._mineList).sort().toString() === _gameconfig__WEBPACK_IMPORTED_MODULE_1__.INIT_DATA.sort().toString()) {\n            this.dispatchEvent(_eventConfig__WEBPACK_IMPORTED_MODULE_2__[\"default\"].SUCCESS);\n            return;\n        }\n    };\n    PieceManager.prototype.onMouseUp = function (event) {\n        var item = event.target;\n        item.onMouseUp();\n    };\n    return PieceManager;\n}(FYGE.EventDispatcher));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PieceManager);\n\n\n//# sourceURL=webpack:///./src/pieceManager.ts?");

/***/ }),

/***/ "./src/stage.ts":
/*!**********************!*\
  !*** ./src/stage.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setStage\": () => (/* binding */ setStage),\n/* harmony export */   \"getStage\": () => (/* binding */ getStage)\n/* harmony export */ });\nvar _stage;\nfunction setStage(stage) { _stage = stage; }\nfunction getStage() { return _stage; }\n\n\n//# sourceURL=webpack:///./src/stage.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"swap\": () => (/* binding */ swap),\n/* harmony export */   \"swapElement\": () => (/* binding */ swapElement),\n/* harmony export */   \"equalTo\": () => (/* binding */ equalTo),\n/* harmony export */   \"getIndex\": () => (/* binding */ getIndex),\n/* harmony export */   \"fill\": () => (/* binding */ fill),\n/* harmony export */   \"shuffle\": () => (/* binding */ shuffle),\n/* harmony export */   \"getRandomArrayElements\": () => (/* binding */ getRandomArrayElements),\n/* harmony export */   \"getFourWeekNumber\": () => (/* binding */ getFourWeekNumber)\n/* harmony export */ });\n//数组元素交换\nvar swap = function (index1, index2, list) {\n    var ele1 = list[index1];\n    var ele2 = list[index2];\n    list[index1] = ele2;\n    list[index2] = ele1;\n    return list;\n};\nvar swapElement = function (ele1, ele2, list) {\n    var index1 = list.indexOf(ele1);\n    var index2 = list.indexOf(ele2);\n    list[index1] = ele2;\n    list[index2] = ele1;\n    return list;\n};\n//判断数组是否相等\nvar equalTo = function (array1, array2) {\n    if (array1.length != array2.length)\n        return false;\n    var len = array1.length || array2.length;\n    for (var i = 0; i < len; i++) {\n        var a = array1[i];\n        var b = array2[i];\n        if (a != b)\n            return false;\n    }\n    return true;\n};\nvar getIndex = function (row, col, maxCol) {\n    var index;\n    index = row * maxCol + col;\n    return index;\n};\nvar fill = function (size) {\n    var list = [];\n    for (var i = 0; i < size; i++) {\n        list.push(i + 1);\n    }\n    return list;\n};\nvar shuffle = function (array) {\n    var m = array.length, t, i;\n    while (m) {\n        i = Math.floor(Math.random() * m--);\n        t = array[m];\n        array[m] = array[i];\n        array[i] = t;\n    }\n    return array;\n};\nvar getRandomArrayElements = function (arr, count) {\n    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;\n    while (i-- > min) {\n        index = Math.floor((i + 1) * Math.random());\n        temp = shuffled[index];\n        shuffled[index] = shuffled[i];\n        shuffled[i] = temp;\n    }\n    return shuffled.slice(min);\n};\nvar getFourWeekNumber = function (id, lineNum) {\n    // [1,2,3,4,5,6,7,8,9,10]\n    // [11,12,13,14,15,16,17,18,19,20]\n    // 左上\n    var zs = id - lineNum - 1;\n    var s = id - lineNum;\n    var ys = id - lineNum + 1;\n    var z = id - 1;\n    var y = id + 1;\n    var zx = id + lineNum - 1;\n    var x = id + lineNum;\n    var yx = id + lineNum + 1;\n    var getCol = function (id, lineNum) {\n        return id % lineNum === 0 ? lineNum : id % lineNum;\n    };\n    var getRow = function (id, lineNum) {\n        return id === lineNum ? 1 : Math.floor(id / lineNum) + 1 > lineNum ? lineNum : Math.floor(id / lineNum) + 1;\n    };\n    // 第一列\n    if (getCol(id, lineNum) === 1) {\n        zs = z = zx = null;\n    }\n    // 最后一列\n    if (getCol(id, lineNum) === lineNum) {\n        ys = y = yx = null;\n    }\n    // 第一行\n    if (getRow(id, lineNum) === 1) {\n        zs = s = ys = null;\n    }\n    // 最后一行\n    if (getRow(id, lineNum) === lineNum) {\n        zx = x = yx = null;\n        if (zx > id) {\n            console.log(111);\n            zx = null;\n            x = null;\n        }\n    }\n    return [zs, s, ys, z, y, zx, x, yx];\n};\n\n\n//# sourceURL=webpack:///./src/utils.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;