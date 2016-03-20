(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/
/******/ 			script.src = __webpack_require__.p + "tf-" + ({}[chunkId]||chunkId) + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TableFilter = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _event = __webpack_require__(1);
	
	var _event2 = _interopRequireDefault(_event);
	
	var _dom = __webpack_require__(2);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _string = __webpack_require__(3);
	
	var _string2 = _interopRequireDefault(_string);
	
	var _types = __webpack_require__(4);
	
	var _types2 = _interopRequireDefault(_types);
	
	var _date = __webpack_require__(5);
	
	var _date2 = _interopRequireDefault(_date);
	
	var _helpers = __webpack_require__(6);
	
	var _helpers2 = _interopRequireDefault(_helpers);
	
	var _emitter = __webpack_require__(7);
	
	var _store = __webpack_require__(8);
	
	var _gridLayout = __webpack_require__(10);
	
	var _loader = __webpack_require__(12);
	
	var _highlightKeywords = __webpack_require__(13);
	
	var _popupFilter = __webpack_require__(14);
	
	var _dropdown = __webpack_require__(15);
	
	var _checkList = __webpack_require__(18);
	
	var _rowsCounter = __webpack_require__(19);
	
	var _statusBar = __webpack_require__(20);
	
	var _paging = __webpack_require__(21);
	
	var _clearButton = __webpack_require__(22);
	
	var _help = __webpack_require__(23);
	
	var _alternateRows = __webpack_require__(24);
	
	var _noResults = __webpack_require__(25);
	
	var _state = __webpack_require__(26);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// Features
	
	
	var global = window,
	    doc = global.document;
	
	var TableFilter = exports.TableFilter = function () {
	
	    /**
	     * TableFilter object constructor
	     * requires `table` or `id` arguments, `row` and `configuration` optional
	     * @param {DOMElement} table Table DOM element
	     * @param {String} id Table id
	     * @param {Number} row index indicating the 1st row
	     * @param {Object} configuration object
	     */
	
	    function TableFilter() {
	        var _this = this;
	
	        _classCallCheck(this, TableFilter);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        if (args.length === 0) {
	            return;
	        }
	
	        this.id = null;
	        this.version = '0.2.1';
	        this.year = new Date().getFullYear();
	        this.tbl = null;
	        this.startRow = null;
	        this.refRow = null;
	        this.headersRow = null;
	        this.cfg = {};
	        this.nbFilterableRows = null;
	        this.nbRows = null;
	        this.nbCells = null;
	        this._hasGrid = false;
	
	        // TODO: use for-of with babel plug-in
	        args.forEach(function (arg) {
	            // for (let arg of args) {
	            var argtype = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);
	            if (argtype === 'object' && arg && arg.nodeName === 'TABLE') {
	                _this.tbl = arg;
	                _this.id = arg.id || 'tf_' + new Date().getTime() + '_';
	            } else if (argtype === 'string') {
	                _this.id = arg;
	                _this.tbl = _dom2.default.id(arg);
	            } else if (argtype === 'number') {
	                _this.startRow = arg;
	            } else if (argtype === 'object') {
	                _this.cfg = arg;
	            }
	            // }
	        });
	
	        if (!this.tbl || this.tbl.nodeName != 'TABLE' || this.getRowsNb() === 0) {
	            throw new Error('Could not instantiate TableFilter: HTML table not found.');
	        }
	
	        // configuration object
	        var f = this.cfg;
	
	        this.emitter = new _emitter.Emitter();
	
	        //Start row et cols nb
	        this.refRow = this.startRow === null ? 2 : this.startRow + 1;
	        try {
	            this.nbCells = this.getCellsNb(this.refRow);
	        } catch (e) {
	            this.nbCells = this.getCellsNb(0);
	        }
	
	        //default script base path
	        this.basePath = f.base_path || 'tablefilter/';
	
	        /*** filter types ***/
	        this.fltTypeInp = 'input';
	        this.fltTypeSlc = 'select';
	        this.fltTypeMulti = 'multiple';
	        this.fltTypeCheckList = 'checklist';
	        this.fltTypeNone = 'none';
	
	        /*** filters' grid properties ***/
	
	        //enables/disables filter grid
	        this.fltGrid = f.grid === false ? false : true;
	
	        //enables/disables grid layout (fixed headers)
	        this.gridLayout = Boolean(f.grid_layout);
	
	        this.filtersRowIndex = isNaN(f.filters_row_index) ? 0 : f.filters_row_index;
	        this.headersRow = isNaN(f.headers_row_index) ? this.filtersRowIndex === 0 ? 1 : 0 : f.headers_row_index;
	
	        //defines tag of the cells containing filters (td/th)
	        this.fltCellTag = f.filters_cell_tag !== 'th' || f.filters_cell_tag !== 'td' ? 'td' : f.filters_cell_tag;
	
	        //stores filters ids
	        this.fltIds = [];
	        //stores filters DOM elements
	        this.fltElms = [];
	        //stores valid rows indexes (rows visible upon filtering)
	        this.validRowsIndex = [];
	        //stores filters row element
	        this.fltGridEl = null;
	        //container div for paging elements, reset btn etc.
	        this.infDiv = null;
	        //div for rows counter
	        this.lDiv = null;
	        //div for reset button and results per page select
	        this.rDiv = null;
	        //div for paging elements
	        this.mDiv = null;
	
	        //defines css class for div containing paging elements, rows counter etc
	        this.infDivCssClass = f.inf_div_css_class || 'inf';
	        //defines css class for left div
	        this.lDivCssClass = f.left_div_css_class || 'ldiv';
	        //defines css class for right div
	        this.rDivCssClass = f.right_div_css_class || 'rdiv';
	        //defines css class for mid div
	        this.mDivCssClass = f.middle_div_css_class || 'mdiv';
	        //table container div css class
	        this.contDivCssClass = f.content_div_css_class || 'cont';
	
	        /*** filters' grid appearance ***/
	        //stylesheet file
	        this.stylePath = f.style_path || this.basePath + 'style/';
	        this.stylesheet = f.stylesheet || this.stylePath + 'tablefilter.css';
	        this.stylesheetId = this.id + '_style';
	        //defines css class for filters row
	        this.fltsRowCssClass = f.flts_row_css_class || 'fltrow';
	        //enables/disables icons (paging, reset button)
	        this.enableIcons = f.enable_icons === false ? false : true;
	        //enables/disbles rows alternating bg colors
	        this.alternateRows = Boolean(f.alternate_rows);
	        //defines widths of columns
	        this.hasColWidths = _types2.default.isArray(f.col_widths);
	        this.colWidths = this.hasColWidths ? f.col_widths : null;
	        //defines css class for filters
	        this.fltCssClass = f.flt_css_class || 'flt';
	        //defines css class for multiple selects filters
	        this.fltMultiCssClass = f.flt_multi_css_class || 'flt_multi';
	        //defines css class for filters
	        this.fltSmallCssClass = f.flt_small_css_class || 'flt_s';
	        //defines css class for single-filter
	        this.singleFltCssClass = f.single_flt_css_class || 'single_flt';
	
	        /*** filters' grid behaviours ***/
	        //enables/disables enter key
	        this.enterKey = f.enter_key === false ? false : true;
	        //calls function before filtering starts
	        this.onBeforeFilter = _types2.default.isFn(f.on_before_filter) ? f.on_before_filter : null;
	        //calls function after filtering
	        this.onAfterFilter = _types2.default.isFn(f.on_after_filter) ? f.on_after_filter : null;
	        //enables/disables case sensitivity
	        this.caseSensitive = Boolean(f.case_sensitive);
	        //has exact match per column
	        this.hasExactMatchByCol = _types2.default.isArray(f.columns_exact_match);
	        this.exactMatchByCol = this.hasExactMatchByCol ? f.columns_exact_match : [];
	        //enables/disbles exact match for search
	        this.exactMatch = Boolean(f.exact_match);
	        //refreshes drop-down lists upon validation
	        this.linkedFilters = Boolean(f.linked_filters);
	        //wheter excluded options are disabled
	        this.disableExcludedOptions = Boolean(f.disable_excluded_options);
	        //stores active filter element
	        this.activeFlt = null;
	        //id of active filter
	        this.activeFilterId = null;
	        //enables always visible rows
	        this.hasVisibleRows = Boolean(f.rows_always_visible);
	        //array containing always visible rows
	        this.visibleRows = this.hasVisibleRows ? f.rows_always_visible : [];
	        //enables/disables external filters generation
	        this.isExternalFlt = Boolean(f.external_flt_grid);
	        //array containing ids of external elements containing filters
	        this.externalFltTgtIds = f.external_flt_grid_ids || [];
	        //stores filters elements if isExternalFlt is true
	        this.externalFltEls = [];
	        //delays any filtering process if loader true
	        this.execDelay = !isNaN(f.exec_delay) ? parseInt(f.exec_delay, 10) : 100;
	        //calls function when filters grid loaded
	        this.onFiltersLoaded = _types2.default.isFn(f.on_filters_loaded) ? f.on_filters_loaded : null;
	        //enables/disables single filter search
	        this.singleSearchFlt = Boolean(f.single_filter);
	        //calls function after row is validated
	        this.onRowValidated = _types2.default.isFn(f.on_row_validated) ? f.on_row_validated : null;
	        //array defining columns for customCellData event
	        this.customCellDataCols = f.custom_cell_data_cols ? f.custom_cell_data_cols : [];
	        //calls custom function for retrieving cell data
	        this.customCellData = _types2.default.isFn(f.custom_cell_data) ? f.custom_cell_data : null;
	        //input watermark text array
	        this.watermark = f.watermark || '';
	        this.isWatermarkArray = _types2.default.isArray(this.watermark);
	        //id of toolbar container element
	        this.toolBarTgtId = f.toolbar_target_id || null;
	        //enables/disables help div
	        this.help = _types2.default.isUndef(f.help_instructions) ? undefined : Boolean(f.help_instructions);
	        //popup filters
	        this.popupFilters = Boolean(f.popup_filters);
	        //active columns color
	        this.markActiveColumns = Boolean(f.mark_active_columns);
	        //defines css class for active column header
	        this.activeColumnsCssClass = f.active_columns_css_class || 'activeHeader';
	        //calls function before active column header is marked
	        this.onBeforeActiveColumn = _types2.default.isFn(f.on_before_active_column) ? f.on_before_active_column : null;
	        //calls function after active column header is marked
	        this.onAfterActiveColumn = _types2.default.isFn(f.on_after_active_column) ? f.on_after_active_column : null;
	
	        /*** select filter's customisation and behaviours ***/
	        //defines 1st option text
	        this.displayAllText = f.display_all_text || 'Clear';
	        //enables/disables empty option in combo-box filters
	        this.enableEmptyOption = Boolean(f.enable_empty_option);
	        //defines empty option text
	        this.emptyText = f.empty_text || '(Empty)';
	        //enables/disables non empty option in combo-box filters
	        this.enableNonEmptyOption = Boolean(f.enable_non_empty_option);
	        //defines empty option text
	        this.nonEmptyText = f.non_empty_text || '(Non empty)';
	        //enables/disables onChange event on combo-box
	        this.onSlcChange = f.on_change === false ? false : true;
	        //enables/disables select options sorting
	        this.sortSlc = f.sort_select === false ? false : true;
	        //enables/disables ascending numeric options sorting
	        this.isSortNumAsc = Boolean(f.sort_num_asc);
	        this.sortNumAsc = this.isSortNumAsc ? f.sort_num_asc : [];
	        //enables/disables descending numeric options sorting
	        this.isSortNumDesc = Boolean(f.sort_num_desc);
	        this.sortNumDesc = this.isSortNumDesc ? f.sort_num_desc : [];
	        //Select filters are populated on demand
	        this.loadFltOnDemand = Boolean(f.load_filters_on_demand);
	        this.hasCustomOptions = _types2.default.isObj(f.custom_options);
	        this.customOptions = f.custom_options;
	
	        /*** Filter operators ***/
	        this.rgxOperator = f.regexp_operator || 'rgx:';
	        this.emOperator = f.empty_operator || '[empty]';
	        this.nmOperator = f.nonempty_operator || '[nonempty]';
	        this.orOperator = f.or_operator || '||';
	        this.anOperator = f.and_operator || '&&';
	        this.grOperator = f.greater_operator || '>';
	        this.lwOperator = f.lower_operator || '<';
	        this.leOperator = f.lower_equal_operator || '<=';
	        this.geOperator = f.greater_equal_operator || '>=';
	        this.dfOperator = f.different_operator || '!';
	        this.lkOperator = f.like_operator || '*';
	        this.eqOperator = f.equal_operator || '=';
	        this.stOperator = f.start_with_operator || '{';
	        this.enOperator = f.end_with_operator || '}';
	        this.curExp = f.cur_exp || '^[¥£€$]';
	        this.separator = f.separator || ',';
	
	        /*** rows counter ***/
	        //show/hides rows counter
	        this.rowsCounter = Boolean(f.rows_counter);
	
	        /*** status bar ***/
	        //show/hides status bar
	        this.statusBar = Boolean(f.status_bar);
	
	        /*** loader ***/
	        //enables/disables loader/spinner indicator
	        this.loader = Boolean(f.loader);
	
	        /*** validation - reset buttons/links ***/
	        //show/hides filter's validation button
	        this.displayBtn = Boolean(f.btn);
	        //defines validation button text
	        this.btnText = f.btn_text || (!this.enableIcons ? 'Go' : '');
	        //defines css class for validation button
	        this.btnCssClass = f.btn_css_class || (!this.enableIcons ? 'btnflt' : 'btnflt_icon');
	        //show/hides reset link
	        this.btnReset = Boolean(f.btn_reset);
	        //defines css class for reset button
	        this.btnResetCssClass = f.btn_reset_css_class || 'reset';
	        //callback function before filters are cleared
	        this.onBeforeReset = _types2.default.isFn(f.on_before_reset) ? f.on_before_reset : null;
	        //callback function after filters are cleared
	        this.onAfterReset = _types2.default.isFn(f.on_after_reset) ? f.on_after_reset : null;
	
	        /*** paging ***/
	        //enables/disables table paging
	        this.paging = Boolean(f.paging);
	        this.nbVisibleRows = 0; //nb visible rows
	        this.nbHiddenRows = 0; //nb hidden rows
	
	        /*** autofilter on typing ***/
	        //enables/disables auto filtering, table is filtered when user stops
	        //typing
	        this.autoFilter = Boolean(f.auto_filter);
	        //onkeyup delay timer (msecs)
	        this.autoFilterDelay = !isNaN(f.auto_filter_delay) ? f.auto_filter_delay : 900;
	        //typing indicator
	        this.isUserTyping = null;
	        this.autoFilterTimer = null;
	
	        /*** keyword highlighting ***/
	        //enables/disables keyword highlighting
	        this.highlightKeywords = Boolean(f.highlight_keywords);
	
	        /*** No results feature ***/
	        this.noResults = _types2.default.isObj(f.no_results_message) || Boolean(f.no_results_message);
	
	        // stateful
	        this.state = _types2.default.isObj(f.state) || Boolean(f.state);
	
	        /*** data types ***/
	        //defines default date type (european DMY)
	        this.defaultDateType = f.default_date_type || 'DMY';
	        //defines default thousands separator
	        //US = ',' EU = '.'
	        this.thousandsSeparator = f.thousands_separator || ',';
	        //defines default decimal separator
	        //US & javascript = '.' EU = ','
	        this.decimalSeparator = f.decimal_separator || '.';
	        //enables number format per column
	        this.hasColNbFormat = _types2.default.isArray(f.col_number_format);
	        //array containing columns nb formats
	        this.colNbFormat = this.hasColNbFormat ? f.col_number_format : null;
	        //enables date type per column
	        this.hasColDateType = _types2.default.isArray(f.col_date_type);
	        //array containing columns date type
	        this.colDateType = this.hasColDateType ? f.col_date_type : null;
	
	        /*** ids prefixes ***/
	        //css class name added to table
	        this.prfxTf = 'TF';
	        //filters (inputs - selects)
	        this.prfxFlt = 'flt';
	        //validation button
	        this.prfxValButton = 'btn';
	        //container div for paging elements, rows counter etc.
	        this.prfxInfDiv = 'inf_';
	        //left div
	        this.prfxLDiv = 'ldiv_';
	        //right div
	        this.prfxRDiv = 'rdiv_';
	        //middle div
	        this.prfxMDiv = 'mdiv_';
	        //filter values cookie
	        this.prfxCookieFltsValues = 'tf_flts_';
	        //page nb cookie
	        this.prfxCookiePageNb = 'tf_pgnb_';
	        //page length cookie
	        this.prfxCookiePageLen = 'tf_pglen_';
	
	        /*** cookies ***/
	        //remembers filters values on page load
	        this.rememberGridValues = Boolean(f.remember_grid_values);
	        //remembers page nb on page load
	        this.rememberPageNb = this.paging && f.remember_page_number;
	        //remembers page length on page load
	        this.rememberPageLen = this.paging && f.remember_page_length;
	        this.hasPersistence = this.rememberGridValues || this.rememberPageNb || this.rememberPageLen;
	
	        /*** extensions ***/
	        //imports external script
	        this.extensions = f.extensions;
	        this.hasExtensions = _types2.default.isArray(this.extensions);
	
	        /*** themes ***/
	        this.enableDefaultTheme = Boolean(f.enable_default_theme);
	        //imports themes
	        this.hasThemes = this.enableDefaultTheme || _types2.default.isArray(f.themes);
	        this.themes = f.themes || [];
	        //themes path
	        this.themesPath = f.themes_path || this.stylePath + 'themes/';
	
	        // Features registry
	        this.Mod = {};
	
	        // Extensions registry
	        this.ExtRegistry = {};
	
	        /*** TF events ***/
	        this.Evt = {
	            // Detect <enter> key
	
	            detectKey: function detectKey(e) {
	                if (!this.enterKey) {
	                    return;
	                }
	                if (e) {
	                    var key = _event2.default.keyCode(e);
	                    if (key === 13) {
	                        this.filter();
	                        _event2.default.cancel(e);
	                        _event2.default.stop(e);
	                    } else {
	                        this.isUserTyping = true;
	                        global.clearInterval(this.autoFilterTimer);
	                        this.autoFilterTimer = null;
	                    }
	                }
	            },
	
	            // if auto-filter on, detect user is typing and filter columns
	            onKeyUp: function onKeyUp(e) {
	                if (!this.autoFilter) {
	                    return;
	                }
	                var key = _event2.default.keyCode(e);
	                this.isUserTyping = false;
	
	                function filter() {
	                    global.clearInterval(this.autoFilterTimer);
	                    this.autoFilterTimer = null;
	                    if (!this.isUserTyping) {
	                        this.filter();
	                        this.isUserTyping = null;
	                    }
	                }
	
	                if (key !== 13 && key !== 9 && key !== 27 && key !== 38 && key !== 40) {
	                    if (this.autoFilterTimer === null) {
	                        this.autoFilterTimer = global.setInterval(filter.bind(this), this.autoFilterDelay);
	                    }
	                } else {
	                    global.clearInterval(this.autoFilterTimer);
	                    this.autoFilterTimer = null;
	                }
	            },
	
	            // if auto-filter on, detect user is typing
	            onKeyDown: function onKeyDown() {
	                if (!this.autoFilter) {
	                    return;
	                }
	                this.isUserTyping = true;
	            },
	
	            // if auto-filter on, clear interval on filter blur
	            onInpBlur: function onInpBlur() {
	                if (this.autoFilter) {
	                    this.isUserTyping = false;
	                    global.clearInterval(this.autoFilterTimer);
	                }
	                this.emitter.emit('filter-blur', this);
	            },
	
	            // set focused text-box filter as active
	            onInpFocus: function onInpFocus(e) {
	                var elm = _event2.default.target(e);
	                this.activeFilterId = elm.getAttribute('id');
	                this.activeFlt = _dom2.default.id(this.activeFilterId);
	                this.emitter.emit('filter-focus', this);
	            }
	        };
	    }
	
	    /**
	     * Initialise features and layout
	     */
	
	
	    TableFilter.prototype.init = function init() {
	        var _this2 = this;
	
	        if (this._hasGrid) {
	            return;
	        }
	
	        var Mod = this.Mod;
	        var n = this.singleSearchFlt ? 1 : this.nbCells,
	            inpclass = void 0;
	
	        //loads stylesheet if not imported
	        this.import(this.stylesheetId, this.stylesheet, null, 'link');
	
	        //loads theme
	        if (this.hasThemes) {
	            this.loadThemes();
	        }
	
	        // Instantiate help feature and initialise only if set true
	        if (!Mod.help) {
	            Mod.help = new _help.Help(this);
	        }
	        if (this.help) {
	            Mod.help.init();
	        }
	
	        if (this.state) {
	            if (!Mod.state) {
	                Mod.state = new _state.State(this);
	            }
	            Mod.state.init();
	        }
	
	        if (this.hasPersistence) {
	            if (!Mod.store) {
	                Mod.store = new _store.Store(this);
	            }
	            Mod.store.init();
	        }
	
	        if (this.gridLayout) {
	            if (!Mod.gridLayout) {
	                Mod.gridLayout = new _gridLayout.GridLayout(this);
	            }
	            Mod.gridLayout.init();
	        }
	
	        if (this.loader) {
	            if (!Mod.loader) {
	                Mod.loader = new _loader.Loader(this);
	            }
	            Mod.loader.init();
	        }
	
	        if (this.highlightKeywords) {
	            Mod.highlightKeyword = new _highlightKeywords.HighlightKeyword(this);
	            Mod.highlightKeyword.init();
	        }
	
	        if (this.popupFilters) {
	            if (!Mod.popupFilter) {
	                Mod.popupFilter = new _popupFilter.PopupFilter(this);
	            }
	            Mod.popupFilter.init();
	        }
	
	        //filters grid is not generated
	        if (!this.fltGrid) {
	            this._initNoFilters();
	        } else {
	            var fltrow = this._insertFiltersRow();
	
	            this.nbFilterableRows = this.getRowsNb();
	            this.nbVisibleRows = this.nbFilterableRows;
	            this.nbRows = this.tbl.rows.length;
	
	            // Generate filters
	            for (var i = 0; i < n; i++) {
	                this.emitter.emit('before-filter-init', this, i);
	
	                var fltcell = _dom2.default.create(this.fltCellTag),
	                    col = this.getFilterType(i);
	
	                if (this.singleSearchFlt) {
	                    fltcell.colSpan = this.nbCells;
	                }
	                if (!this.gridLayout) {
	                    fltrow.appendChild(fltcell);
	                }
	                inpclass = i == n - 1 && this.displayBtn ? this.fltSmallCssClass : this.fltCssClass;
	
	                //only 1 input for single search
	                if (this.singleSearchFlt) {
	                    col = this.fltTypeInp;
	                    inpclass = this.singleFltCssClass;
	                }
	
	                //drop-down filters
	                if (col === this.fltTypeSlc || col === this.fltTypeMulti) {
	                    if (!Mod.dropdown) {
	                        Mod.dropdown = new _dropdown.Dropdown(this);
	                    }
	                    Mod.dropdown.init(i, this.isExternalFlt, fltcell);
	                }
	                // checklist
	                else if (col === this.fltTypeCheckList) {
	                        if (!Mod.checkList) {
	                            Mod.checkList = new _checkList.CheckList(this);
	                        }
	                        Mod.checkList.init(i, this.isExternalFlt, fltcell);
	                    } else {
	                        this._buildInputFilter(i, inpclass, fltcell);
	                    }
	
	                // this adds submit button
	                if (i == n - 1 && this.displayBtn) {
	                    this._buildSubmitButton(i, fltcell);
	                }
	
	                this.emitter.emit('after-filter-init', this, i);
	            }
	        } //if this.fltGrid
	
	        /* Features */
	        if (this.hasVisibleRows) {
	            this.emitter.on(['after-filtering'], function () {
	                return _this2.enforceVisibility();
	            });
	            this.enforceVisibility();
	        }
	        if (this.rowsCounter) {
	            Mod.rowsCounter = new _rowsCounter.RowsCounter(this);
	            Mod.rowsCounter.init();
	        }
	        if (this.statusBar) {
	            Mod.statusBar = new _statusBar.StatusBar(this);
	            Mod.statusBar.init();
	        }
	        if (this.paging) {
	            if (!Mod.paging) {
	                Mod.paging = new _paging.Paging(this);
	                Mod.paging.init();
	            } else {
	                Mod.paging.reset();
	            }
	        }
	        if (this.btnReset) {
	            Mod.clearButton = new _clearButton.ClearButton(this);
	            Mod.clearButton.init();
	        }
	
	        if (this.hasColWidths && !this.gridLayout) {
	            this.setColWidths();
	        }
	        if (this.alternateRows) {
	            Mod.alternateRows = new _alternateRows.AlternateRows(this);
	            Mod.alternateRows.init();
	        }
	        if (this.noResults) {
	            if (!Mod.noResults) {
	                Mod.noResults = new _noResults.NoResults(this);
	            }
	            Mod.noResults.init();
	        }
	
	        this._hasGrid = true;
	
	        if (this.hasPersistence) {
	            this.resetFilterValues();
	        }
	
	        //TF css class is added to table
	        if (!this.gridLayout) {
	            _dom2.default.addClass(this.tbl, this.prfxTf);
	        }
	
	        /* Loads extensions */
	        if (this.hasExtensions) {
	            this.initExtensions();
	        }
	
	        // Subscribe to events
	        if (this.markActiveColumns) {
	            this.emitter.on(['before-filtering'], function () {
	                return _this2.clearActiveColumns();
	            });
	            this.emitter.on(['cell-processed'], function (tf, colIndex) {
	                return _this2.markActiveColumn(colIndex);
	            });
	        }
	        if (this.linkedFilters) {
	            this.emitter.on(['after-filtering'], function () {
	                return _this2.linkFilters();
	            });
	        }
	
	        if (this.onFiltersLoaded) {
	            this.onFiltersLoaded.call(null, this);
	        }
	
	        this.initialized = true;
	        this.emitter.emit('initialized', this);
	    };
	
	    /**
	     * Insert filters row at initialization
	     */
	
	
	    TableFilter.prototype._insertFiltersRow = function _insertFiltersRow() {
	        if (this.gridLayout) {
	            return;
	        }
	        var fltrow = void 0;
	
	        var thead = _dom2.default.tag(this.tbl, 'thead');
	        if (thead.length > 0) {
	            fltrow = thead[0].insertRow(this.filtersRowIndex);
	        } else {
	            fltrow = this.tbl.insertRow(this.filtersRowIndex);
	        }
	
	        fltrow.className = this.fltsRowCssClass;
	
	        if (this.isExternalFlt) {
	            fltrow.style.display = 'none';
	        }
	
	        this.emitter.emit('filters-row-inserted', this, fltrow);
	        return fltrow;
	    };
	
	    /**
	     * Initialize filtersless table
	     */
	
	
	    TableFilter.prototype._initNoFilters = function _initNoFilters() {
	        if (this.fltGrid) {
	            return;
	        }
	        this.refRow = this.refRow > 0 ? this.refRow - 1 : 0;
	        this.nbFilterableRows = this.getRowsNb();
	        this.nbVisibleRows = this.nbFilterableRows;
	        this.nbRows = this.nbFilterableRows + this.refRow;
	    };
	
	    /**
	     * Build input filter type
	     * @param  {Number} colIndex      Column index
	     * @param  {String} cssClass      Css class applied to filter
	     * @param  {DOMElement} container Container DOM element
	     */
	
	
	    TableFilter.prototype._buildInputFilter = function _buildInputFilter(colIndex, cssClass, container) {
	        var col = this.getFilterType(colIndex);
	        var externalFltTgtId = this.isExternalFlt ? this.externalFltTgtIds[colIndex] : null;
	        var inptype = col === this.fltTypeInp ? 'text' : 'hidden';
	        var inp = _dom2.default.create(this.fltTypeInp, ['id', this.prfxFlt + colIndex + '_' + this.id], ['type', inptype], ['ct', colIndex]);
	
	        if (inptype !== 'hidden' && this.watermark) {
	            inp.setAttribute('placeholder', this.isWatermarkArray ? this.watermark[colIndex] || '' : this.watermark);
	        }
	        inp.className = cssClass || this.fltCssClass;
	        _event2.default.add(inp, 'focus', this.Evt.onInpFocus.bind(this));
	
	        //filter is appended in custom element
	        if (externalFltTgtId) {
	            _dom2.default.id(externalFltTgtId).appendChild(inp);
	            this.externalFltEls.push(inp);
	        } else {
	            container.appendChild(inp);
	        }
	
	        this.fltIds.push(inp.id);
	
	        _event2.default.add(inp, 'keypress', this.Evt.detectKey.bind(this));
	        _event2.default.add(inp, 'keydown', this.Evt.onKeyDown.bind(this));
	        _event2.default.add(inp, 'keyup', this.Evt.onKeyUp.bind(this));
	        _event2.default.add(inp, 'blur', this.Evt.onInpBlur.bind(this));
	    };
	
	    /**
	     * Build submit button
	     * @param  {Number} colIndex      Column index
	     * @param  {DOMElement} container Container DOM element
	     */
	
	
	    TableFilter.prototype._buildSubmitButton = function _buildSubmitButton(colIndex, container) {
	        var _this3 = this;
	
	        var externalFltTgtId = this.isExternalFlt ? this.externalFltTgtIds[colIndex] : null;
	        var btn = _dom2.default.create(this.fltTypeInp, ['id', this.prfxValButton + colIndex + '_' + this.id], ['type', 'button'], ['value', this.btnText]);
	        btn.className = this.btnCssClass;
	
	        //filter is appended in custom element
	        if (externalFltTgtId) {
	            _dom2.default.id(externalFltTgtId).appendChild(btn);
	        } else {
	            container.appendChild(btn);
	        }
	
	        _event2.default.add(btn, 'click', function () {
	            return _this3.filter();
	        });
	    };
	
	    /**
	     * Return a feature instance for a given name
	     * @param  {String} name Name of the feature
	     * @return {Object}
	     */
	
	
	    TableFilter.prototype.feature = function feature(name) {
	        return this.Mod[name];
	    };
	
	    /**
	     * Initialise all the extensions defined in the configuration object
	     */
	
	
	    TableFilter.prototype.initExtensions = function initExtensions() {
	        var exts = this.extensions;
	        // Set config's publicPath dynamically for Webpack...
	        __webpack_require__.p = this.basePath;
	
	        this.emitter.emit('before-loading-extensions', this);
	        for (var i = 0, len = exts.length; i < len; i++) {
	            var ext = exts[i];
	            if (!this.ExtRegistry[ext.name]) {
	                this.loadExtension(ext);
	            }
	        }
	        this.emitter.emit('after-loading-extensions', this);
	    };
	
	    /**
	     * Load an extension module
	     * @param  {Object} ext Extension config object
	     */
	
	
	    TableFilter.prototype.loadExtension = function loadExtension(ext) {
	        var _this4 = this;
	
	        if (!ext || !ext.name) {
	            return;
	        }
	
	        var name = ext.name;
	        var path = ext.path;
	        var modulePath = void 0;
	
	        if (name && path) {
	            modulePath = ext.path + name;
	        } else {
	            name = name.replace('.js', '');
	            modulePath = 'extensions/{}/{}'.replace(/{}/g, name);
	        }
	
	        // Require pattern for Webpack
	        __webpack_require__.e/* require */(1, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(28)("./" + modulePath)]; (function (mod) {
	            /* eslint-disable */
	            var inst = new mod.default(_this4, ext);
	            /* eslint-enable */
	            inst.init();
	            _this4.ExtRegistry[name] = inst;
	        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	    };
	
	    /**
	     * Get an extension instance
	     * @param  {String} name Name of the extension
	     * @return {Object}      Extension instance
	     */
	
	
	    TableFilter.prototype.extension = function extension(name) {
	        return this.ExtRegistry[name];
	    };
	
	    /**
	     * Check passed extension name exists
	     * @param  {String}  name Name of the extension
	     * @return {Boolean}
	     */
	
	
	    TableFilter.prototype.hasExtension = function hasExtension(name) {
	        return !_types2.default.isEmpty(this.ExtRegistry[name]);
	    };
	
	    /**
	     * Destroy all the extensions defined in the configuration object
	     */
	
	
	    TableFilter.prototype.destroyExtensions = function destroyExtensions() {
	        var exts = this.extensions;
	
	        for (var i = 0, len = exts.length; i < len; i++) {
	            var ext = exts[i];
	            var extInstance = this.ExtRegistry[ext.name];
	            if (extInstance) {
	                extInstance.destroy();
	                this.ExtRegistry[ext.name] = null;
	            }
	        }
	    };
	
	    /**
	     * Load themes defined in the configuration object
	     */
	
	
	    TableFilter.prototype.loadThemes = function loadThemes() {
	        var themes = this.themes;
	        this.emitter.emit('before-loading-themes', this);
	
	        //Default theme config
	        if (this.enableDefaultTheme) {
	            var defaultTheme = { name: 'default' };
	            this.themes.push(defaultTheme);
	        }
	        if (_types2.default.isArray(themes)) {
	            for (var i = 0, len = themes.length; i < len; i++) {
	                var theme = themes[i];
	                var name = theme.name;
	                var path = theme.path;
	                var styleId = this.prfxTf + name;
	                if (name && !path) {
	                    path = this.themesPath + name + '/' + name + '.css';
	                } else if (!name && theme.path) {
	                    name = 'theme{0}'.replace('{0}', i);
	                }
	
	                if (!this.isImported(path, 'link')) {
	                    this.import(styleId, path, null, 'link');
	                }
	            }
	        }
	
	        //Some elements need to be overriden for default theme
	        //Reset button
	        this.btnResetText = null;
	        this.btnResetHtml = '<input type="button" value="" class="' + this.btnResetCssClass + '" title="Clear filters" />';
	
	        //Paging buttons
	        this.btnPrevPageHtml = '<input type="button" value="" class="' + this.btnPageCssClass + ' previousPage" title="Previous page" />';
	        this.btnNextPageHtml = '<input type="button" value="" class="' + this.btnPageCssClass + ' nextPage" title="Next page" />';
	        this.btnFirstPageHtml = '<input type="button" value="" class="' + this.btnPageCssClass + ' firstPage" title="First page" />';
	        this.btnLastPageHtml = '<input type="button" value="" class="' + this.btnPageCssClass + ' lastPage" title="Last page" />';
	
	        //Loader
	        this.loader = true;
	        this.loaderHtml = '<div class="defaultLoader"></div>';
	        this.loaderText = null;
	
	        this.emitter.emit('after-loading-themes', this);
	    };
	
	    /**
	     * Return stylesheet DOM element for a given theme name
	     * @return {DOMElement} stylesheet element
	     */
	
	
	    TableFilter.prototype.getStylesheet = function getStylesheet() {
	        var name = arguments.length <= 0 || arguments[0] === undefined ? 'default' : arguments[0];
	
	        return _dom2.default.id(this.prfxTf + name);
	    };
	
	    /**
	     * Destroy filter grid
	     */
	
	
	    TableFilter.prototype.destroy = function destroy() {
	        var _this5 = this;
	
	        if (!this._hasGrid) {
	            return;
	        }
	        var rows = this.tbl.rows,
	            Mod = this.Mod,
	            emitter = this.emitter;
	
	        if (this.isExternalFlt && !this.popupFilters) {
	            this.removeExternalFlts();
	        }
	        if (this.infDiv) {
	            this.removeToolbar();
	        }
	        if (this.markActiveColumns) {
	            this.clearActiveColumns();
	            emitter.off(['before-filtering'], function () {
	                return _this5.clearActiveColumns();
	            });
	            emitter.off(['cell-processed'], function (tf, colIndex) {
	                return _this5.markActiveColumn(colIndex);
	            });
	        }
	        if (this.hasExtensions) {
	            this.destroyExtensions();
	        }
	
	        this.validateAllRows();
	
	        if (this.fltGrid && !this.gridLayout) {
	            this.fltGridEl = rows[this.filtersRowIndex];
	            this.tbl.deleteRow(this.filtersRowIndex);
	        }
	
	        // broadcast destroy event
	        emitter.emit('destroy', this);
	
	        // Destroy modules
	        // TODO: subcribe modules to destroy event instead
	        Object.keys(Mod).forEach(function (key) {
	            var feature = Mod[key];
	            if (feature && _types2.default.isFn(feature.destroy)) {
	                feature.destroy();
	            }
	        });
	
	        // unsubscribe to events
	        if (this.hasVisibleRows) {
	            emitter.off(['after-filtering'], function () {
	                return _this5.enforceVisibility();
	            });
	        }
	        if (this.linkedFilters) {
	            emitter.off(['after-filtering'], function () {
	                return _this5.linkFilters();
	            });
	        }
	
	        _dom2.default.removeClass(this.tbl, this.prfxTf);
	        this.nbHiddenRows = 0;
	        this.validRowsIndex = [];
	        this.fltIds = [];
	        this.activeFlt = null;
	        this._hasGrid = false;
	        this.initialized = false;
	    };
	
	    /**
	     * Generate container element for paging, reset button, rows counter etc.
	     */
	
	
	    TableFilter.prototype.setToolbar = function setToolbar() {
	        if (this.infDiv) {
	            return;
	        }
	
	        /*** container div ***/
	        var infdiv = _dom2.default.create('div', ['id', this.prfxInfDiv + this.id]);
	        infdiv.className = this.infDivCssClass;
	
	        //custom container
	        if (this.toolBarTgtId) {
	            _dom2.default.id(this.toolBarTgtId).appendChild(infdiv);
	        }
	        //grid-layout
	        else if (this.gridLayout) {
	                var gridLayout = this.Mod.gridLayout;
	                gridLayout.tblMainCont.appendChild(infdiv);
	                infdiv.className = gridLayout.gridInfDivCssClass;
	            }
	            //default location: just above the table
	            else {
	                    var cont = _dom2.default.create('caption');
	                    cont.appendChild(infdiv);
	                    this.tbl.insertBefore(cont, this.tbl.firstChild);
	                }
	        this.infDiv = _dom2.default.id(this.prfxInfDiv + this.id);
	
	        /*** left div containing rows # displayer ***/
	        var ldiv = _dom2.default.create('div', ['id', this.prfxLDiv + this.id]);
	        ldiv.className = this.lDivCssClass;
	        infdiv.appendChild(ldiv);
	        this.lDiv = _dom2.default.id(this.prfxLDiv + this.id);
	
	        /***    right div containing reset button
	                + nb results per page select    ***/
	        var rdiv = _dom2.default.create('div', ['id', this.prfxRDiv + this.id]);
	        rdiv.className = this.rDivCssClass;
	        infdiv.appendChild(rdiv);
	        this.rDiv = _dom2.default.id(this.prfxRDiv + this.id);
	
	        /*** mid div containing paging elements ***/
	        var mdiv = _dom2.default.create('div', ['id', this.prfxMDiv + this.id]);
	        mdiv.className = this.mDivCssClass;
	        infdiv.appendChild(mdiv);
	        this.mDiv = _dom2.default.id(this.prfxMDiv + this.id);
	
	        // emit help initialisation only if undefined
	        if (_types2.default.isUndef(this.help)) {
	            this.emitter.emit('init-help', this);
	        }
	    };
	
	    /**
	     * Remove toolbar container element
	     */
	
	
	    TableFilter.prototype.removeToolbar = function removeToolbar() {
	        if (!this.infDiv) {
	            return;
	        }
	        _dom2.default.remove(this.infDiv);
	        this.infDiv = null;
	
	        var tbl = this.tbl;
	        var captions = _dom2.default.tag(tbl, 'caption');
	        if (captions.length > 0) {
	            [].forEach.call(captions, function (elm) {
	                return tbl.removeChild(elm);
	            });
	        }
	    };
	
	    /**
	     * Remove all the external column filters
	     */
	
	
	    TableFilter.prototype.removeExternalFlts = function removeExternalFlts() {
	        if (!this.isExternalFlt) {
	            return;
	        }
	        var ids = this.externalFltTgtIds,
	            len = ids.length;
	        for (var ct = 0; ct < len; ct++) {
	            var externalFltTgtId = ids[ct],
	                externalFlt = _dom2.default.id(externalFltTgtId);
	            if (externalFlt) {
	                externalFlt.innerHTML = '';
	            }
	        }
	    };
	
	    /**
	     * Check if given column implements a filter with custom options
	     * @param  {Number}  colIndex Column's index
	     * @return {Boolean}
	     */
	
	
	    TableFilter.prototype.isCustomOptions = function isCustomOptions(colIndex) {
	        return this.hasCustomOptions && this.customOptions.cols.indexOf(colIndex) != -1;
	    };
	
	    /**
	     * Returns an array [[value0, value1 ...],[text0, text1 ...]] with the
	     * custom options values and texts
	     * @param  {Number} colIndex Column's index
	     * @return {Array}
	     */
	
	
	    TableFilter.prototype.getCustomOptions = function getCustomOptions(colIndex) {
	        if (_types2.default.isEmpty(colIndex) || !this.isCustomOptions(colIndex)) {
	            return;
	        }
	
	        var customOptions = this.customOptions;
	        var cols = customOptions.cols;
	        var optTxt = [],
	            optArray = [];
	        var index = cols.indexOf(colIndex);
	        var slcValues = customOptions.values[index];
	        var slcTexts = customOptions.texts[index];
	        var slcSort = customOptions.sorts[index];
	
	        for (var r = 0, len = slcValues.length; r < len; r++) {
	            optArray.push(slcValues[r]);
	            if (slcTexts[r]) {
	                optTxt.push(slcTexts[r]);
	            } else {
	                optTxt.push(slcValues[r]);
	            }
	        }
	        if (slcSort) {
	            optArray.sort();
	            optTxt.sort();
	        }
	        return [optArray, optTxt];
	    };
	
	    /**
	     * Reset persisted filter values
	     */
	
	
	    TableFilter.prototype.resetFilterValues = function resetFilterValues() {
	        var _this6 = this;
	
	        if (!this.rememberGridValues) {
	            return;
	        }
	
	        var storeValues = this.Mod.store.getFilterValues();
	        storeValues.forEach(function (val, idx) {
	            if (val !== ' ') {
	                _this6.setFilterValue(idx, val);
	            }
	        });
	        this.filter();
	    };
	
	    /**
	     * Filter the table by retrieving the data from each cell in every single
	     * row and comparing it to the search term for current column. A row is
	     * hidden when all the search terms are not found in inspected row.
	     */
	
	
	    TableFilter.prototype.filter = function filter() {
	        if (!this.fltGrid || !this._hasGrid) {
	            return;
	        }
	        //invoke onbefore callback
	        if (this.onBeforeFilter) {
	            this.onBeforeFilter.call(null, this);
	        }
	        this.emitter.emit('before-filtering', this);
	
	        var row = this.tbl.rows,
	            hiddenrows = 0;
	
	        this.validRowsIndex = [];
	        // search args re-init
	        var searchArgs = this.getFiltersValue();
	
	        var numCellData, nbFormat;
	        var re_le = new RegExp(this.leOperator),
	            re_ge = new RegExp(this.geOperator),
	            re_l = new RegExp(this.lwOperator),
	            re_g = new RegExp(this.grOperator),
	            re_d = new RegExp(this.dfOperator),
	            re_lk = new RegExp(_string2.default.rgxEsc(this.lkOperator)),
	            re_eq = new RegExp(this.eqOperator),
	            re_st = new RegExp(this.stOperator),
	            re_en = new RegExp(this.enOperator),
	
	        // re_an = new RegExp(this.anOperator),
	        // re_cr = new RegExp(this.curExp),
	        re_em = this.emOperator,
	            re_nm = this.nmOperator,
	            re_re = new RegExp(_string2.default.rgxEsc(this.rgxOperator));
	
	        //keyword highlighting
	        function highlight(str, ok, cell) {
	            /*jshint validthis:true */
	            if (this.highlightKeywords && ok) {
	                str = str.replace(re_lk, '');
	                str = str.replace(re_eq, '');
	                str = str.replace(re_st, '');
	                str = str.replace(re_en, '');
	                var w = str;
	                if (re_le.test(str) || re_ge.test(str) || re_l.test(str) || re_g.test(str) || re_d.test(str)) {
	                    w = _dom2.default.getText(cell);
	                }
	                if (w !== '') {
	                    this.emitter.emit('highlight-keyword', this, cell, w);
	                }
	            }
	        }
	
	        //looks for search argument in current row
	        function hasArg(sA, cellData, j) {
	            /*jshint validthis:true */
	            sA = _string2.default.matchCase(sA, this.caseSensitive);
	
	            var occurence = void 0,
	                removeNbFormat = _helpers2.default.removeNbFormat;
	
	            //Search arg operator tests
	            var hasLO = re_l.test(sA),
	                hasLE = re_le.test(sA),
	                hasGR = re_g.test(sA),
	                hasGE = re_ge.test(sA),
	                hasDF = re_d.test(sA),
	                hasEQ = re_eq.test(sA),
	                hasLK = re_lk.test(sA),
	
	            // hasAN = re_an.test(sA),
	            hasST = re_st.test(sA),
	                hasEN = re_en.test(sA),
	                hasEM = re_em === sA,
	                hasNM = re_nm === sA,
	                hasRE = re_re.test(sA);
	
	            //Search arg dates tests
	            var isLDate = hasLO && _date2.default.isValid(sA.replace(re_l, ''), dtType);
	            var isLEDate = hasLE && _date2.default.isValid(sA.replace(re_le, ''), dtType);
	            var isGDate = hasGR && _date2.default.isValid(sA.replace(re_g, ''), dtType);
	            var isGEDate = hasGE && _date2.default.isValid(sA.replace(re_ge, ''), dtType);
	            var isDFDate = hasDF && _date2.default.isValid(sA.replace(re_d, ''), dtType);
	            var isEQDate = hasEQ && _date2.default.isValid(sA.replace(re_eq, ''), dtType);
	
	            var dte1 = void 0,
	                dte2 = void 0;
	            //dates
	            if (_date2.default.isValid(cellData, dtType)) {
	                dte1 = _date2.default.format(cellData, dtType);
	                // lower date
	                if (isLDate) {
	                    dte2 = _date2.default.format(sA.replace(re_l, ''), dtType);
	                    occurence = dte1 < dte2;
	                }
	                // lower equal date
	                else if (isLEDate) {
	                        dte2 = _date2.default.format(sA.replace(re_le, ''), dtType);
	                        occurence = dte1 <= dte2;
	                    }
	                    // greater equal date
	                    else if (isGEDate) {
	                            dte2 = _date2.default.format(sA.replace(re_ge, ''), dtType);
	                            occurence = dte1 >= dte2;
	                        }
	                        // greater date
	                        else if (isGDate) {
	                                dte2 = _date2.default.format(sA.replace(re_g, ''), dtType);
	                                occurence = dte1 > dte2;
	                            }
	                            // different date
	                            else if (isDFDate) {
	                                    dte2 = _date2.default.format(sA.replace(re_d, ''), dtType);
	                                    occurence = dte1.toString() != dte2.toString();
	                                }
	                                // equal date
	                                else if (isEQDate) {
	                                        dte2 = _date2.default.format(sA.replace(re_eq, ''), dtType);
	                                        occurence = dte1.toString() == dte2.toString();
	                                    }
	                                    // searched keyword with * operator doesn't have to be a date
	                                    else if (re_lk.test(sA)) {
	                                            // like date
	                                            occurence = _string2.default.contains(sA.replace(re_lk, ''), cellData, false, this.caseSensitive);
	                                        } else if (_date2.default.isValid(sA, dtType)) {
	                                            dte2 = _date2.default.format(sA, dtType);
	                                            occurence = dte1.toString() === dte2.toString();
	                                        }
	                                        //empty
	                                        else if (hasEM) {
	                                                occurence = _string2.default.isEmpty(cellData);
	                                            }
	                                            //non-empty
	                                            else if (hasNM) {
	                                                    occurence = !_string2.default.isEmpty(cellData);
	                                                } else {
	                                                    occurence = _string2.default.contains(sA, cellData, this.isExactMatch(j), this.caseSensitive);
	                                                }
	            } else {
	                //first numbers need to be formated
	                if (this.hasColNbFormat && this.colNbFormat[j]) {
	                    numCellData = removeNbFormat(cellData, this.colNbFormat[j]);
	                    nbFormat = this.colNbFormat[j];
	                } else {
	                    if (this.thousandsSeparator === ',' && this.decimalSeparator === '.') {
	                        numCellData = removeNbFormat(cellData, 'us');
	                        nbFormat = 'us';
	                    } else {
	                        numCellData = removeNbFormat(cellData, 'eu');
	                        nbFormat = 'eu';
	                    }
	                }
	
	                // first checks if there is any operator (<,>,<=,>=,!,*,=,{,},
	                // rgx:)
	                // lower equal
	                if (hasLE) {
	                    occurence = numCellData <= removeNbFormat(sA.replace(re_le, ''), nbFormat);
	                }
	                //greater equal
	                else if (hasGE) {
	                        occurence = numCellData >= removeNbFormat(sA.replace(re_ge, ''), nbFormat);
	                    }
	                    //lower
	                    else if (hasLO) {
	                            occurence = numCellData < removeNbFormat(sA.replace(re_l, ''), nbFormat);
	                        }
	                        //greater
	                        else if (hasGR) {
	                                occurence = numCellData > removeNbFormat(sA.replace(re_g, ''), nbFormat);
	                            }
	                            //different
	                            else if (hasDF) {
	                                    occurence = _string2.default.contains(sA.replace(re_d, ''), cellData, false, this.caseSensitive) ? false : true;
	                                }
	                                //like
	                                else if (hasLK) {
	                                        occurence = _string2.default.contains(sA.replace(re_lk, ''), cellData, false, this.caseSensitive);
	                                    }
	                                    //equal
	                                    else if (hasEQ) {
	                                            occurence = _string2.default.contains(sA.replace(re_eq, ''), cellData, true, this.caseSensitive);
	                                        }
	                                        //starts with
	                                        else if (hasST) {
	                                                occurence = cellData.indexOf(sA.replace(re_st, '')) === 0 ? true : false;
	                                            }
	                                            //ends with
	                                            else if (hasEN) {
	                                                    var searchArg = sA.replace(re_en, '');
	                                                    occurence = cellData.lastIndexOf(searchArg, cellData.length - 1) === cellData.length - 1 - (searchArg.length - 1) && cellData.lastIndexOf(searchArg, cellData.length - 1) > -1 ? true : false;
	                                                }
	                                                //empty
	                                                else if (hasEM) {
	                                                        occurence = _string2.default.isEmpty(cellData);
	                                                    }
	                                                    //non-empty
	                                                    else if (hasNM) {
	                                                            occurence = !_string2.default.isEmpty(cellData);
	                                                        }
	                                                        //regexp
	                                                        else if (hasRE) {
	                                                                //in case regexp fires an exception
	                                                                try {
	                                                                    //operator is removed
	                                                                    var srchArg = sA.replace(re_re, '');
	                                                                    var rgx = new RegExp(srchArg);
	                                                                    occurence = rgx.test(cellData);
	                                                                } catch (e) {
	                                                                    occurence = false;
	                                                                }
	                                                            } else {
	                                                                occurence = _string2.default.contains(sA, cellData, this.isExactMatch(j), this.caseSensitive);
	                                                            }
	            } //else
	            return occurence;
	        } //fn
	
	        for (var k = this.refRow; k < this.nbRows; k++) {
	            // already filtered rows display re-init
	            row[k].style.display = '';
	
	            var cell = row[k].cells,
	                nchilds = cell.length;
	
	            // checks if row has exact cell #
	            if (nchilds !== this.nbCells) {
	                continue;
	            }
	
	            var occurence = [],
	                isRowValid = true,
	
	            //only for single filter search
	            singleFltRowValid = false;
	
	            // this loop retrieves cell data
	            for (var j = 0; j < nchilds; j++) {
	                //searched keyword
	                var sA = searchArgs[this.singleSearchFlt ? 0 : j];
	                var dtType = this.hasColDateType ? this.colDateType[j] : this.defaultDateType;
	
	                if (sA === '') {
	                    continue;
	                }
	
	                var cellData = _string2.default.matchCase(this.getCellData(cell[j]), this.caseSensitive);
	
	                //multiple search parameter operator ||
	                var sAOrSplit = sA.toString().split(this.orOperator),
	
	                //multiple search || parameter boolean
	                hasMultiOrSA = sAOrSplit.length > 1,
	
	                //multiple search parameter operator &&
	                sAAndSplit = sA.toString().split(this.anOperator),
	
	                //multiple search && parameter boolean
	                hasMultiAndSA = sAAndSplit.length > 1;
	
	                //detect operators or array query
	                if (_types2.default.isArray(sA) || hasMultiOrSA || hasMultiAndSA) {
	                    var cS = void 0,
	                        s = void 0,
	                        occur = false;
	                    if (_types2.default.isArray(sA)) {
	                        s = sA;
	                    } else {
	                        s = hasMultiOrSA ? sAOrSplit : sAAndSplit;
	                    }
	                    // TODO: improve clarity/readability of this block
	                    for (var w = 0, len = s.length; w < len; w++) {
	                        cS = _string2.default.trim(s[w]);
	                        occur = hasArg.call(this, cS, cellData, j);
	                        highlight.call(this, cS, occur, cell[j]);
	                        if (hasMultiOrSA && occur || hasMultiAndSA && !occur) {
	                            break;
	                        }
	                        if (_types2.default.isArray(sA) && occur) {
	                            break;
	                        }
	                    }
	                    occurence[j] = occur;
	                }
	                //single search parameter
	                else {
	                        occurence[j] = hasArg.call(this, _string2.default.trim(sA), cellData, j);
	                        highlight.call(this, sA, occurence[j], cell[j]);
	                    } //else single param
	
	                if (!occurence[j]) {
	                    isRowValid = false;
	                }
	                if (this.singleSearchFlt && occurence[j]) {
	                    singleFltRowValid = true;
	                }
	
	                this.emitter.emit('cell-processed', this, j, cell[j]);
	            } //for j
	
	            if (this.singleSearchFlt && singleFltRowValid) {
	                isRowValid = true;
	            }
	
	            if (!isRowValid) {
	                this.validateRow(k, false);
	                hiddenrows++;
	            } else {
	                this.validateRow(k, true);
	            }
	
	            this.emitter.emit('row-processed', this, k, this.validRowsIndex.length, isRowValid);
	        } // for k
	
	        this.nbVisibleRows = this.validRowsIndex.length;
	        this.nbHiddenRows = hiddenrows;
	
	        //invokes onafterfilter callback
	        if (this.onAfterFilter) {
	            this.onAfterFilter.call(null, this);
	        }
	
	        this.emitter.emit('after-filtering', this, searchArgs);
	    };
	
	    /**
	     * Return the data of a specified column
	     * @param  {Number} colIndex Column index
	     * @param  {Boolean} includeHeaders  Optional: include headers row
	     * @param  {Boolean} num     Optional: return unformatted number
	     * @param  {Array} exclude   Optional: list of row indexes to be excluded
	     * @return {Array}           Flat list of data for a column
	     */
	
	
	    TableFilter.prototype.getColValues = function getColValues(colIndex) {
	        var includeHeaders = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	        var num = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	        var exclude = arguments.length <= 3 || arguments[3] === undefined ? [] : arguments[3];
	
	        if (!this.fltGrid) {
	            return;
	        }
	        var row = this.tbl.rows,
	            colValues = [];
	
	        if (includeHeaders) {
	            colValues.push(this.getHeadersText()[colIndex]);
	        }
	
	        for (var i = this.refRow; i < this.nbRows; i++) {
	            var isExludedRow = false;
	            // checks if current row index appears in exclude array
	            if (exclude.length > 0) {
	                isExludedRow = exclude.indexOf(i) != -1;
	            }
	            var cell = row[i].cells,
	                nchilds = cell.length;
	
	            // checks if row has exact cell # and is not excluded
	            if (nchilds === this.nbCells && !isExludedRow) {
	                // this loop retrieves cell data
	                for (var j = 0; j < nchilds; j++) {
	                    if (j != colIndex || row[i].style.display !== '') {
	                        continue;
	                    }
	                    var cellData = this.getCellData(cell[j]),
	                        nbFormat = this.colNbFormat ? this.colNbFormat[colIndex] : null,
	                        data = num ? _helpers2.default.removeNbFormat(cellData, nbFormat) : cellData;
	                    colValues.push(data);
	                }
	            }
	        }
	        return colValues;
	    };
	
	    /**
	     * Return the filter's value of a specified column
	     * @param  {Number} index Column index
	     * @return {String}       Filter value
	     */
	
	
	    TableFilter.prototype.getFilterValue = function getFilterValue(index) {
	        if (!this.fltGrid) {
	            return;
	        }
	        var fltValue = '',
	            fltValues = [],
	            flt = this.getFilterElement(index);
	        if (!flt) {
	            return '';
	        }
	
	        var fltColType = this.getFilterType(index);
	        if (fltColType !== this.fltTypeMulti && fltColType !== this.fltTypeCheckList) {
	            fltValue = flt.value;
	        }
	        //mutiple select
	        else if (fltColType === this.fltTypeMulti) {
	                // TODO: extract a method in dropdown module from below
	                for (var j = 0, len = flt.options.length; j < len; j++) {
	                    if (flt.options[j].selected) {
	                        fltValues.push(flt.options[j].value);
	                    }
	                }
	                //return empty string if collection is empty
	                fltValue = fltValues.length > 0 ? fltValues : '';
	            }
	            //checklist
	            else if (fltColType === this.fltTypeCheckList) {
	                    // TODO: extract a method in checklist module from below
	                    if (flt.getAttribute('value') !== null) {
	                        fltValues = flt.getAttribute('value');
	                        //removes last operator ||
	                        fltValues = fltValues.substr(0, fltValues.length - 3);
	                        //convert || separated values into array
	                        fltValues = fltValues.split(' ' + this.orOperator + ' ');
	                    }
	                    //return empty string if collection is empty
	                    fltValue = fltValues.length > 0 ? fltValues : '';
	                }
	        //return an empty string if collection contains a single empty string
	        if (_types2.default.isArray(fltValue) && fltValue.length === 1 && fltValue[0] === '') {
	            fltValue = '';
	        }
	        return fltValue;
	    };
	
	    /**
	     * Return the filters' values
	     * @return {Array} List of filters' values
	     */
	
	
	    TableFilter.prototype.getFiltersValue = function getFiltersValue() {
	        if (!this.fltGrid) {
	            return;
	        }
	        var searchArgs = [];
	        for (var i = 0, len = this.fltIds.length; i < len; i++) {
	            var fltValue = this.getFilterValue(i);
	            if (_types2.default.isArray(fltValue)) {
	                searchArgs.push(fltValue);
	            } else {
	                searchArgs.push(_string2.default.trim(fltValue));
	            }
	        }
	        return searchArgs;
	    };
	
	    /**
	     * Return the ID of the filter of a specified column
	     * @param  {Number} index Column's index
	     * @return {String}       ID of the filter element
	     */
	
	
	    TableFilter.prototype.getFilterId = function getFilterId(index) {
	        if (!this.fltGrid) {
	            return;
	        }
	        return this.fltIds[index];
	    };
	
	    /**
	     * Return the list of ids of filters matching a specified type.
	     * Note: hidden filters are also returned
	     *
	     * @param  {String} type  Filter type string ('input', 'select', 'multiple',
	     *                        'checklist')
	     * @param  {Boolean} bool If true returns columns indexes instead of IDs
	     * @return {[type]}       List of element IDs or column indexes
	     */
	
	
	    TableFilter.prototype.getFiltersByType = function getFiltersByType(type, bool) {
	        if (!this.fltGrid) {
	            return;
	        }
	        var arr = [];
	        for (var i = 0, len = this.fltIds.length; i < len; i++) {
	            var fltType = this.getFilterType(i);
	            if (fltType === _string2.default.lower(type)) {
	                var a = bool ? i : this.fltIds[i];
	                arr.push(a);
	            }
	        }
	        return arr;
	    };
	
	    /**
	     * Return the filter's DOM element for a given column
	     * @param  {Number} index     Column's index
	     * @return {DOMElement}
	     */
	
	
	    TableFilter.prototype.getFilterElement = function getFilterElement(index) {
	        var fltId = this.fltIds[index];
	        return _dom2.default.id(fltId);
	    };
	
	    /**
	     * Return the number of cells for a given row index
	     * @param  {Number} rowIndex Index of the row
	     * @return {Number}          Number of cells
	     */
	
	
	    TableFilter.prototype.getCellsNb = function getCellsNb() {
	        var rowIndex = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	
	        var tr = this.tbl.rows[rowIndex];
	        return tr.cells.length;
	    };
	
	    /**
	     * Return the number of filterable rows starting from reference row if
	     * defined
	     * @param  {Boolean} includeHeaders Include the headers row
	     * @return {Number}                 Number of filterable rows
	     */
	
	
	    TableFilter.prototype.getRowsNb = function getRowsNb(includeHeaders) {
	        var s = _types2.default.isUndef(this.refRow) ? 0 : this.refRow,
	            ntrs = this.tbl.rows.length;
	        if (includeHeaders) {
	            s = 0;
	        }
	        return parseInt(ntrs - s, 10);
	    };
	
	    /**
	     * Return the data of a given cell
	     * @param  {DOMElement} cell Cell's DOM object
	     * @return {String}
	     */
	
	
	    TableFilter.prototype.getCellData = function getCellData(cell) {
	        var idx = cell.cellIndex;
	        //Check for customCellData callback
	        if (this.customCellData && this.customCellDataCols.indexOf(idx) != -1) {
	            return this.customCellData.call(null, this, cell, idx);
	        } else {
	            return _dom2.default.getText(cell);
	        }
	    };
	
	    /**
	     * Return the table data with following format:
	     * [
	     *     [rowIndex, [value0, value1...]],
	     *     [rowIndex, [value0, value1...]]
	     * ]
	     * @param  {Boolean} includeHeaders  Optional: include headers row
	     * @param  {Boolean} excludeHiddenCols  Optional: exclude hidden columns
	     * @return {Array}
	     *
	     * TODO: provide an API returning data in JSON format
	     */
	
	
	    TableFilter.prototype.getTableData = function getTableData() {
	        var includeHeaders = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	        var excludeHiddenCols = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	        var rows = this.tbl.rows;
	        var tblData = [];
	        if (includeHeaders) {
	            var headers = this.getHeadersText(excludeHiddenCols);
	            tblData.push([this.getHeadersRowIndex(), headers]);
	        }
	        for (var k = this.refRow; k < this.nbRows; k++) {
	            var rowData = [k, []];
	            var cells = rows[k].cells;
	            for (var j = 0, len = cells.length; j < len; j++) {
	                if (excludeHiddenCols && this.hasExtension('colsVisibility')) {
	                    if (this.extension('colsVisibility').isColHidden(j)) {
	                        continue;
	                    }
	                }
	                var cellData = this.getCellData(cells[j]);
	                rowData[1].push(cellData);
	            }
	            tblData.push(rowData);
	        }
	        return tblData;
	    };
	
	    /**
	     * Return the filtered data with following format:
	     * [
	     *     [rowIndex, [value0, value1...]],
	     *     [rowIndex, [value0, value1...]]
	     * ]
	     * @param  {Boolean} includeHeaders  Optional: include headers row
	     * @param  {Boolean} excludeHiddenCols  Optional: exclude hidden columns
	     * @return {Array}
	     *
	     * TODO: provide an API returning data in JSON format
	     */
	
	
	    TableFilter.prototype.getFilteredData = function getFilteredData() {
	        var includeHeaders = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	        var excludeHiddenCols = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	        if (!this.validRowsIndex) {
	            return [];
	        }
	        var rows = this.tbl.rows,
	            filteredData = [];
	        if (includeHeaders) {
	            var headers = this.getHeadersText(excludeHiddenCols);
	            filteredData.push([this.getHeadersRowIndex(), headers]);
	        }
	
	        var validRows = this.getValidRows(true);
	        for (var i = 0; i < validRows.length; i++) {
	            var rData = [this.validRowsIndex[i], []],
	                cells = rows[this.validRowsIndex[i]].cells;
	            for (var k = 0; k < cells.length; k++) {
	                if (excludeHiddenCols && this.hasExtension('colsVisibility')) {
	                    if (this.extension('colsVisibility').isColHidden(k)) {
	                        continue;
	                    }
	                }
	                var cellData = this.getCellData(cells[k]);
	                rData[1].push(cellData);
	            }
	            filteredData.push(rData);
	        }
	        return filteredData;
	    };
	
	    /**
	     * Return the filtered data for a given column index
	     * @param  {Number} colIndex Colmun's index
	     * @param  {Boolean} includeHeaders  Optional: include headers row
	     * @return {Array}           Flat list of values ['val0','val1','val2'...]
	     *
	     * TODO: provide an API returning data in JSON format
	     */
	
	
	    TableFilter.prototype.getFilteredDataCol = function getFilteredDataCol(colIndex) {
	        var includeHeaders = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	        if (_types2.default.isUndef(colIndex)) {
	            return [];
	        }
	        var data = this.getFilteredData(),
	            colData = [];
	        if (includeHeaders) {
	            colData.push(this.getHeadersText()[colIndex]);
	        }
	        for (var i = 0, len = data.length; i < len; i++) {
	            var r = data[i],
	
	            //cols values of current row
	            d = r[1],
	
	            //data of searched column
	            c = d[colIndex];
	            colData.push(c);
	        }
	        return colData;
	    };
	
	    /**
	     * Get the display value of a row
	     * @param  {RowElement} row DOM element of the row
	     * @return {String}     Usually 'none' or ''
	     */
	
	
	    TableFilter.prototype.getRowDisplay = function getRowDisplay(row) {
	        if (!_types2.default.isObj(row)) {
	            return null;
	        }
	        return row.style.display;
	    };
	
	    /**
	     * Validate/invalidate row by setting the 'validRow' attribute on the row
	     * @param  {Number}  rowIndex Index of the row
	     * @param  {Boolean} isValid
	     */
	
	
	    TableFilter.prototype.validateRow = function validateRow(rowIndex, isValid) {
	        var row = this.tbl.rows[rowIndex];
	        if (!row || typeof isValid !== 'boolean') {
	            return;
	        }
	
	        // always visible rows are valid
	        if (this.hasVisibleRows && this.visibleRows.indexOf(rowIndex) !== -1) {
	            isValid = true;
	        }
	
	        var displayFlag = isValid ? '' : 'none',
	            validFlag = isValid ? 'true' : 'false';
	        row.style.display = displayFlag;
	
	        if (this.paging) {
	            row.setAttribute('validRow', validFlag);
	        }
	
	        if (isValid) {
	            if (this.validRowsIndex.indexOf(rowIndex) === -1) {
	                this.validRowsIndex.push(rowIndex);
	            }
	
	            if (this.onRowValidated) {
	                this.onRowValidated.call(null, this, rowIndex);
	            }
	
	            this.emitter.emit('row-validated', this, rowIndex);
	        }
	    };
	
	    /**
	     * Validate all filterable rows
	     */
	
	
	    TableFilter.prototype.validateAllRows = function validateAllRows() {
	        if (!this._hasGrid) {
	            return;
	        }
	        this.validRowsIndex = [];
	        for (var k = this.refRow; k < this.nbFilterableRows; k++) {
	            this.validateRow(k, true);
	        }
	    };
	
	    /**
	     * Set search value to a given filter
	     * @param {Number} index     Column's index
	     * @param {String or Array} query  searcharg Search term
	     */
	
	
	    TableFilter.prototype.setFilterValue = function setFilterValue(index) {
	        var query = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
	
	        if (!this.fltGrid) {
	            return;
	        }
	        var slc = this.getFilterElement(index),
	            fltColType = this.getFilterType(index);
	
	        if (fltColType !== this.fltTypeMulti && fltColType != this.fltTypeCheckList) {
	            if (this.loadFltOnDemand && !this.initialized) {
	                this.emitter.emit('build-select-filter', this, index, this.linkedFilters, this.isExternalFlt);
	            }
	            slc.value = query;
	        }
	        //multiple selects
	        else if (fltColType === this.fltTypeMulti) {
	                var values = _types2.default.isArray(query) ? query : query.split(' ' + this.orOperator + ' ');
	
	                if (this.loadFltOnDemand && !this.initialized) {
	                    this.emitter.emit('build-select-filter', this, index, this.linkedFilters, this.isExternalFlt);
	                }
	
	                this.emitter.emit('select-options', this, index, values);
	            }
	            //checklist
	            else if (fltColType === this.fltTypeCheckList) {
	                    var values = [];
	                    if (this.loadFltOnDemand && !this.initialized) {
	                        this.emitter.emit('build-checklist-filter', this, index, this.isExternalFlt);
	                    }
	                    if (_types2.default.isArray(query)) {
	                        values = query;
	                    } else {
	                        query = _string2.default.matchCase(query, this.caseSensitive);
	                        values = query.split(' ' + this.orOperator + ' ');
	                    }
	
	                    this.emitter.emit('select-checklist-options', this, index, values);
	                }
	    };
	
	    /**
	     * Set them columns' widths as per configuration
	     * @param {Element} tbl DOM element
	     */
	
	
	    TableFilter.prototype.setColWidths = function setColWidths(tbl) {
	        if (!this.hasColWidths) {
	            return;
	        }
	        tbl = tbl || this.tbl;
	
	        setWidths.call(this);
	
	        function setWidths() {
	            var nbCols = this.nbCells;
	            var colWidths = this.colWidths;
	            var colTags = _dom2.default.tag(tbl, 'col');
	            var tblHasColTag = colTags.length > 0;
	            var frag = !tblHasColTag ? doc.createDocumentFragment() : null;
	            for (var k = 0; k < nbCols; k++) {
	                var col = void 0;
	                if (tblHasColTag) {
	                    col = colTags[k];
	                } else {
	                    col = _dom2.default.create('col', ['id', this.id + '_col_' + k]);
	                    frag.appendChild(col);
	                }
	                col.style.width = colWidths[k];
	            }
	            if (!tblHasColTag) {
	                tbl.insertBefore(frag, tbl.firstChild);
	            }
	        }
	    };
	
	    /**
	     * Makes defined rows always visible
	     */
	
	
	    TableFilter.prototype.enforceVisibility = function enforceVisibility() {
	        if (!this.hasVisibleRows) {
	            return;
	        }
	        for (var i = 0, len = this.visibleRows.length; i < len; i++) {
	            var row = this.visibleRows[i];
	            //row index cannot be > nrows
	            if (row <= this.nbRows) {
	                this.validateRow(row, true);
	            }
	        }
	    };
	
	    /**
	     * Clear all the filters' values
	     */
	
	
	    TableFilter.prototype.clearFilters = function clearFilters() {
	        if (!this.fltGrid) {
	            return;
	        }
	
	        this.emitter.emit('before-clearing-filters', this);
	
	        if (this.onBeforeReset) {
	            this.onBeforeReset.call(null, this, this.getFiltersValue());
	        }
	        for (var i = 0, len = this.fltIds.length; i < len; i++) {
	            this.setFilterValue(i, '');
	        }
	
	        this.filter();
	
	        if (this.onAfterReset) {
	            this.onAfterReset.call(null, this);
	        }
	        this.emitter.emit('after-clearing-filters', this);
	    };
	
	    /**
	     * Clears filtered columns visual indicator (background color)
	     */
	
	
	    TableFilter.prototype.clearActiveColumns = function clearActiveColumns() {
	        for (var i = 0, len = this.getCellsNb(this.headersRow); i < len; i++) {
	            _dom2.default.removeClass(this.getHeaderElement(i), this.activeColumnsCssClass);
	        }
	    };
	
	    /**
	     * Mark currently filtered column
	     * @param  {Number} colIndex Column index
	     */
	
	
	    TableFilter.prototype.markActiveColumn = function markActiveColumn(colIndex) {
	        var header = this.getHeaderElement(colIndex);
	        if (_dom2.default.hasClass(header, this.activeColumnsCssClass)) {
	            return;
	        }
	        if (this.onBeforeActiveColumn) {
	            this.onBeforeActiveColumn.call(null, this, colIndex);
	        }
	        _dom2.default.addClass(header, this.activeColumnsCssClass);
	        if (this.onAfterActiveColumn) {
	            this.onAfterActiveColumn.call(null, this, colIndex);
	        }
	    };
	
	    /**
	     * Refresh the filters subject to linking ('select', 'multiple',
	     * 'checklist' type)
	     */
	
	
	    TableFilter.prototype.linkFilters = function linkFilters() {
	        if (!this.linkedFilters || !this.activeFilterId) {
	            return;
	        }
	        var slcA1 = this.getFiltersByType(this.fltTypeSlc, true),
	            slcA2 = this.getFiltersByType(this.fltTypeMulti, true),
	            slcA3 = this.getFiltersByType(this.fltTypeCheckList, true),
	            slcIndex = slcA1.concat(slcA2);
	        slcIndex = slcIndex.concat(slcA3);
	
	        var activeFlt = this.activeFilterId.split('_')[0];
	        activeFlt = activeFlt.split(this.prfxFlt)[1];
	        var slcSelectedValue = void 0;
	        for (var i = 0, len = slcIndex.length; i < len; i++) {
	            var curSlc = _dom2.default.id(this.fltIds[slcIndex[i]]);
	            slcSelectedValue = this.getFilterValue(slcIndex[i]);
	
	            // Welcome to cyclomatic complexity hell :)
	            // TODO: simplify/refactor if statement
	            if (activeFlt !== slcIndex[i] || this.paging && slcA1.indexOf(slcIndex[i]) != -1 && activeFlt === slcIndex[i] || !this.paging && (slcA3.indexOf(slcIndex[i]) != -1 || slcA2.indexOf(slcIndex[i]) != -1) || slcSelectedValue === this.displayAllText) {
	
	                //1st option needs to be inserted
	                if (this.loadFltOnDemand) {
	                    var opt0 = _dom2.default.createOpt(this.displayAllText, '');
	                    curSlc.innerHTML = '';
	                    curSlc.appendChild(opt0);
	                }
	
	                if (slcA3.indexOf(slcIndex[i]) != -1) {
	                    this.emitter.emit('build-checklist-filter', this, slcIndex[i]);
	                } else {
	                    this.emitter.emit('build-select-filter', this, slcIndex[i], true);
	                }
	
	                this.setFilterValue(slcIndex[i], slcSelectedValue);
	            }
	        } // for i
	    };
	
	    /**
	     * Determines if passed filter column implements exact query match
	     * @param  {Number}  colIndex [description]
	     * @return {Boolean}          [description]
	     */
	
	
	    TableFilter.prototype.isExactMatch = function isExactMatch(colIndex) {
	        var fltType = this.getFilterType(colIndex);
	        return this.exactMatchByCol[colIndex] || this.exactMatch || fltType !== this.fltTypeInp;
	    };
	
	    /**
	     * Check if passed script or stylesheet is already imported
	     * @param  {String}  filePath Ressource path
	     * @param  {String}  type     Possible values: 'script' or 'link'
	     * @return {Boolean}
	     */
	
	
	    TableFilter.prototype.isImported = function isImported(filePath, type) {
	        var imported = false,
	            importType = !type ? 'script' : type,
	            attr = importType == 'script' ? 'src' : 'href',
	            files = _dom2.default.tag(doc, importType);
	        for (var i = 0, len = files.length; i < len; i++) {
	            if (files[i][attr] === undefined) {
	                continue;
	            }
	            if (files[i][attr].match(filePath)) {
	                imported = true;
	                break;
	            }
	        }
	        return imported;
	    };
	
	    /**
	     * Import script or stylesheet
	     * @param  {String}   fileId   Ressource ID
	     * @param  {String}   filePath Ressource path
	     * @param  {Function} callback Callback
	     * @param  {String}   type     Possible values: 'script' or 'link'
	     */
	
	
	    TableFilter.prototype.import = function _import(fileId, filePath, callback, type) {
	        var ftype = !type ? 'script' : type,
	            imported = this.isImported(filePath, ftype);
	        if (imported) {
	            return;
	        }
	        var o = this,
	            isLoaded = false,
	            file = void 0,
	            head = _dom2.default.tag(doc, 'head')[0];
	
	        if (_string2.default.lower(ftype) === 'link') {
	            file = _dom2.default.create('link', ['id', fileId], ['type', 'text/css'], ['rel', 'stylesheet'], ['href', filePath]);
	        } else {
	            file = _dom2.default.create('script', ['id', fileId], ['type', 'text/javascript'], ['src', filePath]);
	        }
	
	        //Browser <> IE onload event works only for scripts, not for stylesheets
	        file.onload = file.onreadystatechange = function () {
	            if (!isLoaded && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
	                isLoaded = true;
	                if (typeof callback === 'function') {
	                    callback.call(null, o);
	                }
	            }
	        };
	        file.onerror = function () {
	            throw new Error('TF script could not load: ' + filePath);
	        };
	        head.appendChild(file);
	    };
	
	    /**
	     * Check if table has filters grid
	     * @return {Boolean}
	     */
	
	
	    TableFilter.prototype.hasGrid = function hasGrid() {
	        return this._hasGrid;
	    };
	
	    /**
	     * Get list of filter IDs
	     * @return {[type]} [description]
	     */
	
	
	    TableFilter.prototype.getFiltersId = function getFiltersId() {
	        return this.fltIds || [];
	    };
	
	    /**
	     * Get filtered (valid) rows indexes
	     * @param  {Boolean} reCalc Force calculation of filtered rows list
	     * @return {Array}          List of row indexes
	     */
	
	
	    TableFilter.prototype.getValidRows = function getValidRows(reCalc) {
	        if (!reCalc) {
	            return this.validRowsIndex;
	        }
	
	        this.validRowsIndex = [];
	        for (var k = this.refRow; k < this.getRowsNb(true); k++) {
	            var r = this.tbl.rows[k];
	            if (!this.paging) {
	                if (this.getRowDisplay(r) !== 'none') {
	                    this.validRowsIndex.push(r.rowIndex);
	                }
	            } else {
	                if (r.getAttribute('validRow') === 'true' || r.getAttribute('validRow') === null) {
	                    this.validRowsIndex.push(r.rowIndex);
	                }
	            }
	        }
	        return this.validRowsIndex;
	    };
	
	    /**
	     * Get the index of the row containing the filters
	     * @return {Number}
	     */
	
	
	    TableFilter.prototype.getFiltersRowIndex = function getFiltersRowIndex() {
	        return this.filtersRowIndex;
	    };
	
	    /**
	     * Get the index of the headers row
	     * @return {Number}
	     */
	
	
	    TableFilter.prototype.getHeadersRowIndex = function getHeadersRowIndex() {
	        return this.headersRow;
	    };
	
	    /**
	     * Get the row index from where the filtering process start (1st filterable
	     * row)
	     * @return {Number}
	     */
	
	
	    TableFilter.prototype.getStartRowIndex = function getStartRowIndex() {
	        return this.refRow;
	    };
	
	    /**
	     * Get the index of the last row
	     * @return {Number}
	     */
	
	
	    TableFilter.prototype.getLastRowIndex = function getLastRowIndex() {
	        return this.nbRows - 1;
	    };
	
	    /**
	     * Get the header DOM element for a given column index
	     * @param  {Number} colIndex Column index
	     * @return {Object}
	     */
	
	
	    TableFilter.prototype.getHeaderElement = function getHeaderElement(colIndex) {
	        var table = this.gridLayout ? this.Mod.gridLayout.headTbl : this.tbl;
	        var tHead = _dom2.default.tag(table, 'thead');
	        var headersRow = this.headersRow;
	        var header = void 0;
	        for (var i = 0; i < this.nbCells; i++) {
	            if (i !== colIndex) {
	                continue;
	            }
	            if (tHead.length === 0) {
	                header = table.rows[headersRow].cells[i];
	            }
	            if (tHead.length === 1) {
	                header = tHead[0].rows[headersRow].cells[i];
	            }
	            break;
	        }
	        return header;
	    };
	
	    /**
	     * Return the list of headers' text
	     * @param  {Boolean} excludeHiddenCols  Optional: exclude hidden columns
	     * @return {Array} list of headers' text
	     */
	
	
	    TableFilter.prototype.getHeadersText = function getHeadersText() {
	        var excludeHiddenCols = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	
	        var headers = [];
	        for (var j = 0; j < this.nbCells; j++) {
	            if (excludeHiddenCols && this.hasExtension('colsVisibility')) {
	                if (this.extension('colsVisibility').isColHidden(j)) {
	                    continue;
	                }
	            }
	            var header = this.getHeaderElement(j);
	            var headerText = _dom2.default.getFirstTextNode(header);
	            headers.push(headerText);
	        }
	        return headers;
	    };
	
	    /**
	     * Return the filter type for a specified column
	     * @param  {Number} colIndex Column's index
	     * @return {String}
	     */
	
	
	    TableFilter.prototype.getFilterType = function getFilterType(colIndex) {
	        var colType = this.cfg['col_' + colIndex];
	        return !colType ? this.fltTypeInp : _string2.default.lower(colType);
	    };
	
	    /**
	     * Get the total number of filterable rows
	     * @return {Number}
	     */
	
	
	    TableFilter.prototype.getFilterableRowsNb = function getFilterableRowsNb() {
	        return this.getRowsNb(false);
	    };
	
	    /**
	     * Get the configuration object (literal object)
	     * @return {Object}
	     */
	
	
	    TableFilter.prototype.config = function config() {
	        return this.cfg;
	    };
	
	    return TableFilter;
	}();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * DOM event utilities
	 */
	
	exports.default = {
	    add: function add(obj, type, func, capture) {
	        if (obj.addEventListener) {
	            obj.addEventListener(type, func, capture);
	        } else if (obj.attachEvent) {
	            obj.attachEvent('on' + type, func);
	        } else {
	            obj['on' + type] = func;
	        }
	    },
	    remove: function remove(obj, type, func, capture) {
	        if (obj.detachEvent) {
	            obj.detachEvent('on' + type, func);
	        } else if (obj.removeEventListener) {
	            obj.removeEventListener(type, func, capture);
	        } else {
	            obj['on' + type] = null;
	        }
	    },
	    stop: function stop(evt) {
	        if (!evt) {
	            evt = window.event;
	        }
	        if (evt.stopPropagation) {
	            evt.stopPropagation();
	        } else {
	            evt.cancelBubble = true;
	        }
	    },
	    cancel: function cancel(evt) {
	        if (!evt) {
	            evt = window.event;
	        }
	        if (evt.preventDefault) {
	            evt.preventDefault();
	        } else {
	            evt.returnValue = false;
	        }
	    },
	    target: function target(evt) {
	        return evt && evt.target || window.event && window.event.srcElement;
	    },
	    keyCode: function keyCode(evt) {
	        return evt.charCode ? evt.charCode : evt.keyCode ? evt.keyCode : evt.which ? evt.which : 0;
	    }
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/**
	 * DOM utilities
	 */
	
	exports.default = {
	
	    /**
	     * Returns text + text of children of given node
	     * @param  {NodeElement} node
	     * @return {String}
	     */
	
	    getText: function getText(node) {
	        var s = node.textContent || node.innerText || node.innerHTML.replace(/<[^<>]+>/g, '');
	        s = s.replace(/^\s+/, '').replace(/\s+$/, '');
	        return s;
	    },
	
	
	    /**
	     * Returns the first text node contained in the supplied node
	     * @param  {NodeElement} node node
	     * @return {String}
	     */
	    getFirstTextNode: function getFirstTextNode(node) {
	        for (var i = 0; i < node.childNodes.length; i++) {
	            var n = node.childNodes[i];
	            if (n.nodeType === 3) {
	                return n.data;
	            }
	        }
	    },
	
	
	    /**
	     * Creates an html element with given collection of attributes
	     * @param  {String} tag a string of the html tag to create
	     * @param  {Array} an undetermined number of arrays containing the with 2
	     *                    items, the attribute name and its value ['id','myId']
	     * @return {Object}     created element
	     */
	    create: function create(tag) {
	        if (!tag || tag === '') {
	            return;
	        }
	
	        var el = document.createElement(tag),
	            args = arguments;
	
	        if (args.length > 1) {
	            for (var i = 0; i < args.length; i++) {
	                var argtype = _typeof(args[i]);
	                if (argtype.toLowerCase() === 'object' && args[i].length === 2) {
	                    el.setAttribute(args[i][0], args[i][1]);
	                }
	            }
	        }
	        return el;
	    },
	
	
	    /**
	     * Removes passed node from DOM
	     * @param  {DOMElement} node
	     * @return {DOMElement} old node reference
	     */
	    remove: function remove(node) {
	        return node.parentNode.removeChild(node);
	    },
	
	
	    /**
	     * Returns a text node with given text
	     * @param  {String} txt
	     * @return {Object}
	     */
	    text: function text(txt) {
	        return document.createTextNode(txt);
	    },
	    hasClass: function hasClass(ele, cls) {
	        if (!ele) {
	            return false;
	        }
	
	        if (supportsClassList()) {
	            return ele.classList.contains(cls);
	        }
	        return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
	    },
	    addClass: function addClass(ele, cls) {
	        if (!ele) {
	            return;
	        }
	
	        if (supportsClassList()) {
	            ele.classList.add(cls);
	            return;
	        }
	
	        if (ele.className === '') {
	            ele.className = cls;
	        } else if (!this.hasClass(ele, cls)) {
	            ele.className += ' ' + cls;
	        }
	    },
	    removeClass: function removeClass(ele, cls) {
	        if (!ele) {
	            return;
	        }
	
	        if (supportsClassList()) {
	            ele.classList.remove(cls);
	            return;
	        }
	        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)', 'g');
	        ele.className = ele.className.replace(reg, '');
	    },
	
	
	    /**
	     * Creates and returns an option element
	     * @param  {String}  text  option text
	     * @param  {String}  value option value
	     * @param  {Boolean} isSel whether option is selected
	     * @return {Object}        option element
	     */
	    createOpt: function createOpt(text, value, isSel) {
	        var isSelected = isSel ? true : false,
	            opt = isSelected ? this.create('option', ['value', value], ['selected', 'true']) : this.create('option', ['value', value]);
	        opt.appendChild(this.text(text));
	        return opt;
	    },
	
	
	    /**
	     * Creates and returns a checklist item
	     * @param  {Number} chkIndex  index of check item
	     * @param  {String} chkValue  check item value
	     * @param  {String} labelText check item label text
	     * @return {Object}           li DOM element
	     */
	    createCheckItem: function createCheckItem(chkIndex, chkValue, labelText) {
	        var li = this.create('li'),
	            label = this.create('label', ['for', chkIndex]),
	            check = this.create('input', ['id', chkIndex], ['name', chkIndex], ['type', 'checkbox'], ['value', chkValue]);
	        label.appendChild(check);
	        label.appendChild(this.text(labelText));
	        li.appendChild(label);
	        li.label = label;
	        li.check = check;
	        return li;
	    },
	    id: function id(key) {
	        return document.getElementById(key);
	    },
	    tag: function tag(o, tagname) {
	        return o.getElementsByTagName(tagname);
	    }
	};
	
	// HTML5 classList API
	
	function supportsClassList() {
	    return document.documentElement.classList;
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * String utilities
	 */
	
	exports.default = {
	    lower: function lower(text) {
	        return text.toLowerCase();
	    },
	    upper: function upper(text) {
	        return text.toUpperCase();
	    },
	    trim: function trim(text) {
	        if (text.trim) {
	            return text.trim();
	        }
	        return text.replace(/^\s*|\s*$/g, '');
	    },
	    isEmpty: function isEmpty(text) {
	        return this.trim(text) === '';
	    },
	    rgxEsc: function rgxEsc(text) {
	        var chars = /[-\/\\^$*+?.()|[\]{}]/g;
	        var escMatch = '\\$&';
	        return String(text).replace(chars, escMatch);
	    },
	    matchCase: function matchCase(text, caseSensitive) {
	        if (!caseSensitive) {
	            return this.lower(text);
	        }
	        return text;
	    },
	
	
	    /**
	     * Checks if passed data contains the searched term
	     * @param  {String} term           Searched term
	     * @param  {String} data           Data string
	     * @param  {Boolean} exactMatch    Exact match
	     * @param  {Boolean} caseSensitive Case sensitive
	     * @return {Boolean}
	     */
	    contains: function contains(term, data) {
	        var exactMatch = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	        var caseSensitive = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
	
	        // Improved by Cedric Wartel (cwl) automatic exact match for selects and
	        // special characters are now filtered
	        var regexp = void 0,
	            modifier = caseSensitive ? 'g' : 'gi';
	        if (exactMatch) {
	            regexp = new RegExp('(^\\s*)' + this.rgxEsc(term) + '(\\s*$)', modifier);
	        } else {
	            regexp = new RegExp(this.rgxEsc(term), modifier);
	        }
	        return regexp.test(data);
	    }
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/**
	 * Types utilities
	 */
	
	var UNDEFINED = void 0;
	
	exports.default = {
	    /**
	     * Check if argument is an object or a global object
	     * @param  {String or Object}  v
	     * @return {Boolean}
	     */
	
	    isObj: function isObj(v) {
	        var isO = false;
	        if (typeof v === 'string') {
	            if (window[v] && _typeof(window[v]) === 'object') {
	                isO = true;
	            }
	        } else {
	            if (v && (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object') {
	                isO = true;
	            }
	        }
	        return isO;
	    },
	
	
	    /**
	     * Check if argument is a function
	     * @param  {Function} fn
	     * @return {Boolean}
	     */
	    isFn: function isFn(fn) {
	        return fn && fn.constructor == Function;
	    },
	
	
	    /**
	     * Check if argument is an array
	     * @param  {Array}  obj
	     * @return {Boolean}
	     */
	    isArray: function isArray(obj) {
	        return obj && obj.constructor == Array;
	    },
	
	
	    /**
	     * Check argument is a string
	     * @param {String} val Value
	     * @returns {Boolean}
	     */
	    isString: function isString(val) {
	        return Object.prototype.toString.call(val) === '[object String]';
	    },
	
	
	    /**
	     * Determine if argument is undefined
	     * @param  {Any}  o
	     * @return {Boolean}
	     */
	    isUndef: function isUndef(o) {
	        return o === UNDEFINED;
	    },
	
	
	    /**
	     * Determine if argument is null
	     * @param  {Any}  o
	     * @return {Boolean}
	     */
	    isNull: function isNull(o) {
	        return o === null;
	    },
	
	
	    /**
	     * Determine if argument is empty (undefined, null or empty string)
	     * @param  {Any}  o
	     * @return {Boolean}
	     */
	    isEmpty: function isEmpty(o) {
	        return this.isUndef(o) || this.isNull(o) || o.length === 0;
	    }
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Date utilities
	 */
	
	exports.default = {
	    isValid: function isValid(dateStr, format) {
	        if (!format) {
	            format = 'DMY';
	        }
	        format = format.toUpperCase();
	        if (format.length != 3) {
	            if (format === 'DDMMMYYYY') {
	                var d = this.format(dateStr, format);
	                dateStr = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
	                format = 'DMY';
	            }
	        }
	        if (format.indexOf('M') === -1 || format.indexOf('D') === -1 || format.indexOf('Y') === -1) {
	            format = 'DMY';
	        }
	        var reg1 = void 0,
	            reg2 = void 0;
	        // If the year is first
	        if (format.substring(0, 1) === 'Y') {
	            reg1 = /^\d{2}(\-|\/|\.)\d{1,2}\1\d{1,2}$/;
	            reg2 = /^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/;
	        } else if (format.substring(1, 2) === 'Y') {
	            // If the year is second
	            reg1 = /^\d{1,2}(\-|\/|\.)\d{2}\1\d{1,2}$/;
	            reg2 = /^\d{1,2}(\-|\/|\.)\d{4}\1\d{1,2}$/;
	        } else {
	            // The year must be third
	            reg1 = /^\d{1,2}(\-|\/|\.)\d{1,2}\1\d{2}$/;
	            reg2 = /^\d{1,2}(\-|\/|\.)\d{1,2}\1\d{4}$/;
	        }
	        // If it doesn't conform to the right format (with either a 2 digit year
	        // or 4 digit year), fail
	        if (reg1.test(dateStr) === false && reg2.test(dateStr) === false) {
	            return false;
	        }
	        // Split into 3 parts based on what the divider was
	        var parts = dateStr.split(RegExp.$1);
	        var mm = void 0,
	            dd = void 0,
	            yy = void 0;
	        // Check to see if the 3 parts end up making a valid date
	        if (format.substring(0, 1) === 'M') {
	            mm = parts[0];
	        } else if (format.substring(1, 2) === 'M') {
	            mm = parts[1];
	        } else {
	            mm = parts[2];
	        }
	        if (format.substring(0, 1) === 'D') {
	            dd = parts[0];
	        } else if (format.substring(1, 2) === 'D') {
	            dd = parts[1];
	        } else {
	            dd = parts[2];
	        }
	        if (format.substring(0, 1) === 'Y') {
	            yy = parts[0];
	        } else if (format.substring(1, 2) === 'Y') {
	            yy = parts[1];
	        } else {
	            yy = parts[2];
	        }
	        if (parseInt(yy, 10) <= 50) {
	            yy = (parseInt(yy, 10) + 2000).toString();
	        }
	        if (parseInt(yy, 10) <= 99) {
	            yy = (parseInt(yy, 10) + 1900).toString();
	        }
	        var dt = new Date(parseInt(yy, 10), parseInt(mm, 10) - 1, parseInt(dd, 10), 0, 0, 0, 0);
	        if (parseInt(dd, 10) != dt.getDate()) {
	            return false;
	        }
	        if (parseInt(mm, 10) - 1 != dt.getMonth()) {
	            return false;
	        }
	        return true;
	    },
	    format: function format(dateStr, formatStr) {
	        if (!formatStr) {
	            formatStr = 'DMY';
	        }
	        if (!dateStr || dateStr === '') {
	            return new Date(1001, 0, 1);
	        }
	        var oDate = void 0;
	        var parts = void 0;
	
	        switch (formatStr.toUpperCase()) {
	            case 'DDMMMYYYY':
	                parts = dateStr.replace(/[- \/.]/g, ' ').split(' ');
	                oDate = new Date(y2kDate(parts[2]), mmm2mm(parts[1]) - 1, parts[0]);
	                break;
	            case 'DMY':
	                /* eslint-disable */
	                parts = dateStr.replace(/^(0?[1-9]|[12][0-9]|3[01])([- \/.])(0?[1-9]|1[012])([- \/.])((\d\d)?\d\d)$/, '$1 $3 $5').split(' ');
	                oDate = new Date(y2kDate(parts[2]), parts[1] - 1, parts[0]);
	                /* eslint-enable */
	                break;
	            case 'MDY':
	                /* eslint-disable */
	                parts = dateStr.replace(/^(0?[1-9]|1[012])([- \/.])(0?[1-9]|[12][0-9]|3[01])([- \/.])((\d\d)?\d\d)$/, '$1 $3 $5').split(' ');
	                oDate = new Date(y2kDate(parts[2]), parts[0] - 1, parts[1]);
	                /* eslint-enable */
	                break;
	            case 'YMD':
	                /* eslint-disable */
	                parts = dateStr.replace(/^((\d\d)?\d\d)([- \/.])(0?[1-9]|1[012])([- \/.])(0?[1-9]|[12][0-9]|3[01])$/, '$1 $4 $6').split(' ');
	                oDate = new Date(y2kDate(parts[0]), parts[1] - 1, parts[2]);
	                /* eslint-enable */
	                break;
	            default:
	                //in case format is not correct
	                /* eslint-disable */
	                parts = dateStr.replace(/^(0?[1-9]|[12][0-9]|3[01])([- \/.])(0?[1-9]|1[012])([- \/.])((\d\d)?\d\d)$/, '$1 $3 $5').split(' ');
	                oDate = new Date(y2kDate(parts[2]), parts[1] - 1, parts[0]);
	                /* eslint-enable */
	                break;
	        }
	        return oDate;
	    }
	};
	
	
	function y2kDate(yr) {
	    if (yr === undefined) {
	        return 0;
	    }
	    if (yr.length > 2) {
	        return yr;
	    }
	    var y = void 0;
	    //>50 belong to 1900
	    if (yr <= 99 && yr > 50) {
	        y = '19' + yr;
	    }
	    //<50 belong to 2000
	    if (yr < 50 || yr === '00') {
	        y = '20' + yr;
	    }
	    return y;
	}
	
	function mmm2mm(mmm) {
	    if (mmm === undefined) {
	        return 0;
	    }
	    var mondigit = void 0;
	    var MONTH_NAMES = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december', 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
	    for (var m_i = 0; m_i < MONTH_NAMES.length; m_i++) {
	        var month_name = MONTH_NAMES[m_i];
	        if (mmm.toLowerCase() === month_name) {
	            mondigit = m_i + 1;
	            break;
	        }
	    }
	    if (mondigit > 11 || mondigit < 23) {
	        mondigit = mondigit - 12;
	    }
	    if (mondigit < 1 || mondigit > 12) {
	        return 0;
	    }
	    return mondigit;
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _string = __webpack_require__(3);
	
	var _string2 = _interopRequireDefault(_string);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    removeNbFormat: function removeNbFormat(data, format) {
	        if (!data) {
	            return;
	        }
	        if (!format) {
	            format = 'us';
	        }
	        var n = data;
	        if (_string2.default.lower(format) === 'us') {
	            n = +n.replace(/[^\d\.-]/g, '');
	        } else {
	            n = +n.replace(/[^\d\,-]/g, '').replace(',', '.');
	        }
	        return n;
	    }
	}; /**
	    * Misc helpers
	    */

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Event emitter class
	 */
	
	var Emitter = exports.Emitter = function () {
	    function Emitter() {
	        _classCallCheck(this, Emitter);
	
	        /**
	         * Events object
	         * @type {Object}
	         */
	        this.events = {};
	    }
	
	    /**
	     * Subscribe to an event
	     * @param  {Array}   evts Collection of event names
	     * @param  {Function} fn  Function invoked when event is emitted
	     */
	
	
	    Emitter.prototype.on = function on(evts, fn) {
	        var _this = this;
	
	        evts.forEach(function (evt) {
	            _this.events[evt] = _this.events[evt] || [];
	            _this.events[evt].push(fn);
	        });
	    };
	
	    /**
	     * Unsubscribe to an event
	     * @param  {Array}   evts Collection of event names
	     * @param  {Function} fn  Function invoked when event is emitted
	     */
	
	
	    Emitter.prototype.off = function off(evts, fn) {
	        var _this2 = this;
	
	        evts.forEach(function (evt) {
	            if (evt in _this2.events) {
	                _this2.events[evt].splice(_this2.events[evt].indexOf(fn), 1);
	            }
	        });
	    };
	
	    /**
	     * Emit an event
	     * @param  {String} evt Event name followed by any other argument passed to
	     * the invoked function
	     */
	
	
	    Emitter.prototype.emit = function emit(evt /*, args...*/) {
	        if (evt in this.events) {
	            for (var i = 0; i < this.events[evt].length; i++) {
	                this.events[evt][i].apply(this, [].slice.call(arguments, 1));
	            }
	        }
	    };
	
	    return Emitter;
	}();

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Store = undefined;
	
	var _cookie = __webpack_require__(9);
	
	var _cookie2 = _interopRequireDefault(_cookie);
	
	var _types = __webpack_require__(4);
	
	var _types2 = _interopRequireDefault(_types);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Store = exports.Store = function () {
	
	    /**
	     * Store, persistence manager
	     * @param {Object} tf TableFilter instance
	     *
	     * TODO: use localStorage and fallback to cookie persistence
	     */
	
	    function Store(tf) {
	        _classCallCheck(this, Store);
	
	        var f = tf.config();
	
	        //cookie storing filter values
	        this.fltsValuesCookie = tf.prfxCookieFltsValues + tf.id;
	        //cookie storing page nb
	        this.pgNbCookie = tf.prfxCookiePageNb + tf.id;
	        //cookie storing page length
	        this.pgLenCookie = tf.prfxCookiePageLen + tf.id;
	
	        this.duration = !isNaN(f.set_cookie_duration) ? parseInt(f.set_cookie_duration, 10) : 100000;
	
	        this.tf = tf;
	        this.emitter = tf.emitter;
	    }
	
	    Store.prototype.init = function init() {
	        var _this = this;
	
	        this.emitter.on(['after-filtering'], function () {
	            return _this.saveFilterValues();
	        });
	        this.emitter.on(['after-clearing-filters'], function () {
	            return _this.clearCookies();
	        });
	        this.emitter.on(['after-page-change'], function (tf, index) {
	            return _this.savePageNb(index);
	        });
	        this.emitter.on(['after-page-length-change'], function (tf, index) {
	            return _this.savePageLength(index);
	        });
	    };
	
	    /**
	     * Store filters' values in cookie
	     */
	
	
	    Store.prototype.saveFilterValues = function saveFilterValues() {
	        var tf = this.tf;
	        var fltValues = [];
	
	        if (!tf.rememberGridValues) {
	            return;
	        }
	
	        //store filters' values
	        for (var i = 0; i < tf.fltIds.length; i++) {
	            var value = tf.getFilterValue(i);
	            //convert array to a || separated values
	            if (_types2.default.isArray(value)) {
	                var rgx = new RegExp(tf.separator, 'g');
	                value = value.toString().replace(rgx, ' ' + tf.orOperator + ' ');
	            }
	            if (value === '') {
	                value = ' ';
	            }
	            fltValues.push(value);
	        }
	
	        //write cookie
	        _cookie2.default.write(this.fltsValuesCookie, fltValues.join(tf.separator), this.duration);
	    };
	
	    /**
	     * Retrieve filters' values from cookie
	     * @return {Array}
	     */
	
	
	    Store.prototype.getFilterValues = function getFilterValues() {
	        var flts = _cookie2.default.read(this.fltsValuesCookie);
	        var rgx = new RegExp(this.tf.separator, 'g');
	        // filters' values array
	        return flts.split(rgx);
	    };
	
	    /**
	     * Store page number in cookie
	     * @param {Number} pageIndex page index to persist
	     */
	
	
	    Store.prototype.savePageNb = function savePageNb(pageIndex) {
	        if (!this.tf.rememberPageNb) {
	            return;
	        }
	        _cookie2.default.write(this.pgNbCookie, pageIndex, this.duration);
	    };
	
	    /**
	     * Retrieve page number from cookie
	     * @return {String}
	     */
	
	
	    Store.prototype.getPageNb = function getPageNb() {
	        return _cookie2.default.read(this.pgNbCookie);
	    };
	
	    /**
	     * Store page length in cookie
	     * @param {Number} index page length index to persist
	     */
	
	
	    Store.prototype.savePageLength = function savePageLength(index) {
	        if (!this.tf.rememberPageLen) {
	            return;
	        }
	        _cookie2.default.write(this.pgLenCookie, index, this.duration);
	    };
	
	    /**
	     * Retrieve page length from cookie
	     * @return {String}
	     */
	
	
	    Store.prototype.getPageLength = function getPageLength() {
	        return _cookie2.default.read(this.pgLenCookie);
	    };
	
	    /**
	     * Remove all cookies
	     */
	
	
	    Store.prototype.clearCookies = function clearCookies() {
	        _cookie2.default.remove(this.fltsValuesCookie);
	        _cookie2.default.remove(this.pgLenCookie);
	        _cookie2.default.remove(this.pgNbCookie);
	    };
	
	    Store.prototype.destroy = function destroy() {
	        var _this2 = this;
	
	        this.emitter.off(['after-filtering'], function () {
	            return _this2.saveFilterValues();
	        });
	        this.emitter.off(['after-clearing-filters'], function () {
	            return _this2.clearCookies();
	        });
	        this.emitter.off(['after-page-change'], function (tf, index) {
	            return _this2.savePageNb(index);
	        });
	        this.emitter.off(['after-page-length-change'], function (tf, index) {
	            return _this2.savePageLength(index);
	        });
	    };
	
	    return Store;
	}();

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Cookie utilities
	 */
	
	exports.default = {
	    write: function write(name, value, hours) {
	        var expire = '';
	        if (hours) {
	            expire = new Date(new Date().getTime() + hours * 3600000);
	            expire = '; expires=' + expire.toGMTString();
	        }
	        document.cookie = name + '=' + escape(value) + expire;
	    },
	    read: function read(name) {
	        var cookieValue = '',
	            search = name + '=';
	        if (document.cookie.length > 0) {
	            var cookie = document.cookie,
	                offset = cookie.indexOf(search);
	            if (offset !== -1) {
	                offset += search.length;
	                var end = cookie.indexOf(';', offset);
	                if (end === -1) {
	                    end = cookie.length;
	                }
	                cookieValue = unescape(cookie.substring(offset, end));
	            }
	        }
	        return cookieValue;
	    },
	    remove: function remove(name) {
	        this.write(name, '', -1);
	    },
	    valueToArray: function valueToArray(name, separator) {
	        if (!separator) {
	            separator = ',';
	        }
	        //reads the cookie
	        var val = this.read(name);
	        //creates an array with filters' values
	        var arr = val.split(separator);
	        return arr;
	    },
	    getValueByIndex: function getValueByIndex(name, index, separator) {
	        if (!separator) {
	            separator = ',';
	        }
	        //reads the cookie
	        var val = this.valueToArray(name, separator);
	        return val[index];
	    }
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.GridLayout = undefined;
	
	var _feature = __webpack_require__(11);
	
	var _dom = __webpack_require__(2);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _types = __webpack_require__(4);
	
	var _types2 = _interopRequireDefault(_types);
	
	var _event = __webpack_require__(1);
	
	var _event2 = _interopRequireDefault(_event);
	
	var _string = __webpack_require__(3);
	
	var _string2 = _interopRequireDefault(_string);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var GridLayout = exports.GridLayout = function (_Feature) {
	    _inherits(GridLayout, _Feature);
	
	    /**
	     * Grid layout, table with fixed headers
	     * @param {Object} tf TableFilter instance
	     */
	
	    function GridLayout(tf) {
	        _classCallCheck(this, GridLayout);
	
	        var _this = _possibleConstructorReturn(this, _Feature.call(this, tf, 'gridLayout'));
	
	        var f = _this.config;
	
	        //defines grid width
	        _this.gridWidth = f.grid_width || null;
	        //defines grid height
	        _this.gridHeight = f.grid_height || null;
	        //defines css class for main container
	        _this.gridMainContCssClass = f.grid_cont_css_class || 'grd_Cont';
	        //defines css class for div containing table
	        _this.gridContCssClass = f.grid_tbl_cont_css_class || 'grd_tblCont';
	        //defines css class for div containing headers' table
	        _this.gridHeadContCssClass = f.grid_tblHead_cont_css_class || 'grd_headTblCont';
	        //defines css class for div containing rows counter, paging etc.
	        _this.gridInfDivCssClass = f.grid_inf_grid_css_class || 'grd_inf';
	        //defines which row contains column headers
	        _this.gridHeadRowIndex = f.grid_headers_row_index || 0;
	        //array of headers row indexes to be placed in header table
	        _this.gridHeadRows = f.grid_headers_rows || [0];
	        //generate filters in table headers
	        _this.gridEnableFilters = f.grid_enable_default_filters !== undefined ? f.grid_enable_default_filters : true;
	        _this.noHeaders = Boolean(f.grid_no_headers);
	        //default col width
	        _this.gridDefaultColWidth = f.grid_default_col_width || '100px';
	
	        _this.gridColElms = [];
	
	        //div containing grid elements if grid_layout true
	        _this.prfxMainTblCont = 'gridCont_';
	        //div containing table if grid_layout true
	        _this.prfxTblCont = 'tblCont_';
	        //div containing headers table if grid_layout true
	        _this.prfxHeadTblCont = 'tblHeadCont_';
	        //headers' table if grid_layout true
	        _this.prfxHeadTbl = 'tblHead_';
	        //id of td containing the filter if grid_layout true
	        _this.prfxGridFltTd = '_td_';
	        //id of th containing column header if grid_layout true
	        _this.prfxGridTh = 'tblHeadTh_';
	
	        _this.sourceTblHtml = tf.tbl.outerHTML;
	
	        // filters flag at TF level
	        tf.fltGrid = _this.gridEnableFilters;
	        return _this;
	    }
	
	    /**
	     * Generates a grid with fixed headers
	     */
	
	
	    GridLayout.prototype.init = function init() {
	        var _this2 = this;
	
	        var tf = this.tf;
	        var f = this.config;
	        var tbl = tf.tbl;
	
	        if (this.initialized) {
	            return;
	        }
	
	        // Override reference rows indexes
	        tf.refRow = _types2.default.isNull(tf.startRow) ? 0 : tf.startRow;
	        tf.headersRow = 0;
	        tf.filtersRowIndex = 1;
	
	        tf.isExternalFlt = true;
	
	        // default width of 100px if column widths not set
	        if (!tf.hasColWidths) {
	            tf.colWidths = [];
	            for (var k = 0; k < tf.nbCells; k++) {
	                var colW = void 0,
	                    cell = tbl.rows[this.gridHeadRowIndex].cells[k];
	                if (cell.width !== '') {
	                    colW = cell.width;
	                } else if (cell.style.width !== '') {
	                    colW = parseInt(cell.style.width, 10);
	                } else {
	                    colW = this.gridDefaultColWidth;
	                }
	                tf.colWidths[k] = colW;
	            }
	            tf.hasColWidths = true;
	        }
	        tf.setColWidths();
	
	        var tblW = void 0; //initial table width
	        if (tbl.width !== '') {
	            tblW = tbl.width;
	        } else if (tbl.style.width !== '') {
	            tblW = parseInt(tbl.style.width, 10);
	        } else {
	            tblW = tbl.clientWidth;
	        }
	
	        //Main container: it will contain all the elements
	        this.tblMainCont = _dom2.default.create('div', ['id', this.prfxMainTblCont + tf.id]);
	        this.tblMainCont.className = this.gridMainContCssClass;
	        if (this.gridWidth) {
	            this.tblMainCont.style.width = this.gridWidth;
	        }
	        tbl.parentNode.insertBefore(this.tblMainCont, tbl);
	
	        //Table container: div wrapping content table
	        this.tblCont = _dom2.default.create('div', ['id', this.prfxTblCont + tf.id]);
	        this.tblCont.className = this.gridContCssClass;
	        if (this.gridWidth) {
	            if (this.gridWidth.indexOf('%') != -1) {
	                this.tblCont.style.width = '100%';
	            } else {
	                this.tblCont.style.width = this.gridWidth;
	            }
	        }
	        if (this.gridHeight) {
	            this.tblCont.style.height = this.gridHeight;
	        }
	        tbl.parentNode.insertBefore(this.tblCont, tbl);
	        var t = _dom2.default.remove(tbl);
	        this.tblCont.appendChild(t);
	
	        //In case table width is expressed in %
	        if (tbl.style.width === '') {
	            tbl.style.width = (_string2.default.contains('%', tblW) ? tbl.clientWidth : tblW) + 'px';
	        }
	
	        var d = _dom2.default.remove(this.tblCont);
	        this.tblMainCont.appendChild(d);
	
	        //Headers table container: div wrapping headers table
	        this.headTblCont = _dom2.default.create('div', ['id', this.prfxHeadTblCont + tf.id]);
	        this.headTblCont.className = this.gridHeadContCssClass;
	        if (this.gridWidth) {
	            if (this.gridWidth.indexOf('%') != -1) {
	                this.headTblCont.style.width = '100%';
	            } else {
	                this.headTblCont.style.width = this.gridWidth;
	            }
	        }
	
	        //Headers table
	        this.headTbl = _dom2.default.create('table', ['id', this.prfxHeadTbl + tf.id]);
	        var tH = _dom2.default.create('tHead');
	
	        //1st row should be headers row, ids are added if not set
	        //Those ids are used by the sort feature
	        var hRow = tbl.rows[this.gridHeadRowIndex];
	        var sortTriggers = [];
	        for (var n = 0; n < tf.nbCells; n++) {
	            var c = hRow.cells[n];
	            var thId = c.getAttribute('id');
	            if (!thId || thId === '') {
	                thId = this.prfxGridTh + n + '_' + tf.id;
	                c.setAttribute('id', thId);
	            }
	            sortTriggers.push(thId);
	        }
	
	        //Filters row is created
	        var filtersRow = _dom2.default.create('tr');
	        if (this.gridEnableFilters && tf.fltGrid) {
	            tf.externalFltTgtIds = [];
	            for (var j = 0; j < tf.nbCells; j++) {
	                var fltTdId = tf.prfxFlt + j + this.prfxGridFltTd + tf.id;
	                var cl = _dom2.default.create(tf.fltCellTag, ['id', fltTdId]);
	                filtersRow.appendChild(cl);
	                tf.externalFltTgtIds[j] = fltTdId;
	            }
	        }
	
	        //Headers row are moved from content table to headers table
	        if (!this.noHeaders) {
	            for (var i = 0; i < this.gridHeadRows.length; i++) {
	                var headRow = tbl.rows[this.gridHeadRows[0]];
	                tH.appendChild(headRow);
	            }
	        } else {
	            // Handle table with no headers, assuming here headers do not
	            // exist
	            tH.appendChild(_dom2.default.create('tr'));
	        }
	
	        this.headTbl.appendChild(tH);
	        if (tf.filtersRowIndex === 0) {
	            tH.insertBefore(filtersRow, hRow);
	        } else {
	            tH.appendChild(filtersRow);
	        }
	
	        this.headTblCont.appendChild(this.headTbl);
	        this.tblCont.parentNode.insertBefore(this.headTblCont, this.tblCont);
	
	        //THead needs to be removed in content table for sort feature
	        var thead = _dom2.default.tag(tbl, 'thead');
	        if (thead.length > 0) {
	            tbl.removeChild(thead[0]);
	        }
	
	        //Headers table style
	        this.headTbl.style.tableLayout = 'fixed';
	        tbl.style.tableLayout = 'fixed';
	        this.headTbl.cellPadding = tbl.cellPadding;
	        this.headTbl.cellSpacing = tbl.cellSpacing;
	        // this.headTbl.style.width = tbl.style.width;
	
	        //content table without headers needs col widths to be reset
	        tf.setColWidths(this.headTbl);
	
	        //Headers container width
	        // this.headTblCont.style.width = this.tblCont.clientWidth+'px';
	
	        tbl.style.width = '';
	        //
	        this.headTbl.style.width = tbl.clientWidth + 'px';
	        //
	
	        //scroll synchronisation
	        _event2.default.add(this.tblCont, 'scroll', function (evt) {
	            var elm = _event2.default.target(evt);
	            var scrollLeft = elm.scrollLeft;
	            _this2.headTblCont.scrollLeft = scrollLeft;
	            //New pointerX calc taking into account scrollLeft
	            // if(!o.isPointerXOverwritten){
	            //     try{
	            //         o.Evt.pointerX = function(evt){
	            //             let e = evt || global.event;
	            //             let bdScrollLeft = tf_StandardBody().scrollLeft +
	            //                 scrollLeft;
	            //             return (e.pageX + scrollLeft) ||
	            //                 (e.clientX + bdScrollLeft);
	            //         };
	            //         o.isPointerXOverwritten = true;
	            //     } catch(err) {
	            //         o.isPointerXOverwritten = false;
	            //     }
	            // }
	        });
	
	        //Configure sort extension if any
	        var sort = (f.extensions || []).filter(function (itm) {
	            return itm.name === 'sort';
	        });
	        if (sort.length === 1) {
	            sort[0].async_sort = true;
	            sort[0].trigger_ids = sortTriggers;
	        }
	
	        //Cols generation for all browsers excepted IE<=7
	        this.tblHasColTag = _dom2.default.tag(tbl, 'col').length > 0 ? true : false;
	
	        //Col elements are enough to keep column widths after sorting and
	        //filtering
	        var createColTags = function createColTags() {
	            for (var k = tf.nbCells - 1; k >= 0; k--) {
	                var col = _dom2.default.create('col', ['id', tf.id + '_col_' + k]);
	                tbl.insertBefore(col, tbl.firstChild);
	                col.style.width = tf.colWidths[k];
	                this.gridColElms[k] = col;
	            }
	            this.tblHasColTag = true;
	        };
	
	        if (!this.tblHasColTag) {
	            createColTags.call(this);
	        } else {
	            var cols = _dom2.default.tag(tbl, 'col');
	            for (var ii = 0; ii < tf.nbCells; ii++) {
	                cols[ii].setAttribute('id', tf.id + '_col_' + ii);
	                cols[ii].style.width = tf.colWidths[ii];
	                this.gridColElms.push(cols[ii]);
	            }
	        }
	
	        var afterColResizedFn = _types2.default.isFn(f.on_after_col_resized) ? f.on_after_col_resized : null;
	        f.on_after_col_resized = function (o, colIndex) {
	            if (!colIndex) {
	                return;
	            }
	            var w = o.crWColsRow.cells[colIndex].style.width;
	            var col = o.gridColElms[colIndex];
	            col.style.width = w;
	
	            var thCW = o.crWColsRow.cells[colIndex].clientWidth;
	            var tdCW = o.crWRowDataTbl.cells[colIndex].clientWidth;
	
	            if (thCW != tdCW) {
	                o.headTbl.style.width = tbl.clientWidth + 'px';
	            }
	
	            if (afterColResizedFn) {
	                afterColResizedFn.call(null, o, colIndex);
	            }
	        };
	
	        if (tf.popupFilters) {
	            filtersRow.style.display = 'none';
	        }
	
	        if (tbl.clientWidth !== this.headTbl.clientWidth) {
	            tbl.style.width = this.headTbl.clientWidth + 'px';
	        }
	
	        this.initialized = true;
	    };
	
	    /**
	     * Removes the grid layout
	     */
	
	
	    GridLayout.prototype.destroy = function destroy() {
	        var tf = this.tf;
	        var tbl = tf.tbl;
	
	        if (!this.initialized) {
	            return;
	        }
	        var t = _dom2.default.remove(tbl);
	        this.tblMainCont.parentNode.insertBefore(t, this.tblMainCont);
	        _dom2.default.remove(this.tblMainCont);
	
	        this.tblMainCont = null;
	        this.headTblCont = null;
	        this.headTbl = null;
	        this.tblCont = null;
	
	        tbl.outerHTML = this.sourceTblHtml;
	        //needed to keep reference of table element for future usage
	        this.tf.tbl = _dom2.default.id(tf.id);
	
	        this.initialized = false;
	    };
	
	    return GridLayout;
	}(_feature.Feature);

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NOTIMPLEMENTED = 'Not implemented.';
	
	var Feature = exports.Feature = function () {
	    function Feature(tf, feature) {
	        _classCallCheck(this, Feature);
	
	        this.tf = tf;
	        this.feature = feature;
	        this.enabled = Boolean(tf[feature]);
	        this.config = tf.config();
	        this.emitter = tf.emitter;
	        this.initialized = false;
	    }
	
	    Feature.prototype.init = function init() {
	        throw new Error(NOTIMPLEMENTED);
	    };
	
	    Feature.prototype.reset = function reset() {
	        this.enable();
	        this.init();
	    };
	
	    Feature.prototype.destroy = function destroy() {
	        throw new Error(NOTIMPLEMENTED);
	    };
	
	    Feature.prototype.enable = function enable() {
	        this.enabled = true;
	    };
	
	    Feature.prototype.disable = function disable() {
	        this.enabled = false;
	    };
	
	    Feature.prototype.isEnabled = function isEnabled() {
	        return this.enabled;
	    };
	
	    return Feature;
	}();

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Loader = undefined;
	
	var _feature = __webpack_require__(11);
	
	var _dom = __webpack_require__(2);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _types = __webpack_require__(4);
	
	var _types2 = _interopRequireDefault(_types);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var global = window;
	
	var Loader = exports.Loader = function (_Feature) {
	    _inherits(Loader, _Feature);
	
	    /**
	     * Loading message/spinner
	     * @param {Object} tf TableFilter instance
	     */
	
	    function Loader(tf) {
	        _classCallCheck(this, Loader);
	
	        // TableFilter configuration
	
	        var _this = _possibleConstructorReturn(this, _Feature.call(this, tf, 'loader'));
	
	        var f = _this.config;
	
	        //id of container element
	        _this.loaderTgtId = f.loader_target_id || null;
	        //div containing loader
	        _this.loaderDiv = null;
	        //defines loader text
	        _this.loaderText = f.loader_text || 'Loading...';
	        //defines loader innerHtml
	        _this.loaderHtml = f.loader_html || null;
	        //defines css class for loader div
	        _this.loaderCssClass = f.loader_css_class || 'loader';
	        //delay for hiding loader
	        _this.loaderCloseDelay = 250;
	        //callback function before loader is displayed
	        _this.onShowLoader = _types2.default.isFn(f.on_show_loader) ? f.on_show_loader : null;
	        //callback function after loader is closed
	        _this.onHideLoader = _types2.default.isFn(f.on_hide_loader) ? f.on_hide_loader : null;
	        //loader div
	        _this.prfxLoader = 'load_';
	        return _this;
	    }
	
	    Loader.prototype.init = function init() {
	        var _this2 = this;
	
	        if (this.initialized) {
	            return;
	        }
	
	        var tf = this.tf;
	        var emitter = this.emitter;
	
	        var containerDiv = _dom2.default.create('div', ['id', this.prfxLoader + tf.id]);
	        containerDiv.className = this.loaderCssClass;
	
	        var targetEl = !this.loaderTgtId ? tf.tbl.parentNode : _dom2.default.id(this.loaderTgtId);
	        if (!this.loaderTgtId) {
	            targetEl.insertBefore(containerDiv, tf.tbl);
	        } else {
	            targetEl.appendChild(containerDiv);
	        }
	        this.loaderDiv = containerDiv;
	        if (!this.loaderHtml) {
	            this.loaderDiv.appendChild(_dom2.default.text(this.loaderText));
	        } else {
	            this.loaderDiv.innerHTML = this.loaderHtml;
	        }
	
	        this.show('none');
	
	        // Subscribe to events
	        emitter.on(['before-filtering', 'before-populating-filter', 'before-page-change', 'before-clearing-filters', 'before-page-length-change', 'before-reset-page', 'before-reset-page-length', 'before-loading-extensions', 'before-loading-themes'], function () {
	            return _this2.show('');
	        });
	        emitter.on(['after-filtering', 'after-populating-filter', 'after-page-change', 'after-clearing-filters', 'after-page-length-change', 'after-reset-page', 'after-reset-page-length', 'after-loading-extensions', 'after-loading-themes'], function () {
	            return _this2.show('none');
	        });
	
	        this.initialized = true;
	    };
	
	    Loader.prototype.show = function show(p) {
	        var _this3 = this;
	
	        if (!this.isEnabled() /*|| this.loaderDiv.style.display === p*/) {
	                return;
	            }
	
	        var displayLoader = function displayLoader() {
	            if (!_this3.loaderDiv) {
	                return;
	            }
	            if (_this3.onShowLoader && p !== 'none') {
	                _this3.onShowLoader.call(null, _this3);
	            }
	            _this3.loaderDiv.style.display = p;
	            if (_this3.onHideLoader && p === 'none') {
	                _this3.onHideLoader.call(null, _this3);
	            }
	        };
	
	        var t = p === 'none' ? this.loaderCloseDelay : 1;
	        global.setTimeout(displayLoader, t);
	    };
	
	    Loader.prototype.destroy = function destroy() {
	        var _this4 = this;
	
	        if (!this.initialized) {
	            return;
	        }
	
	        var emitter = this.emitter;
	
	        _dom2.default.remove(this.loaderDiv);
	        this.loaderDiv = null;
	
	        // Unsubscribe to events
	        emitter.off(['before-filtering', 'before-populating-filter', 'before-page-change', 'before-clearing-filters', 'before-page-length-change', 'before-reset-page', 'before-reset-page-length', 'before-loading-extensions', 'before-loading-themes'], function () {
	            return _this4.show('');
	        });
	        emitter.off(['after-filtering', 'after-populating-filter', 'after-page-change', 'after-clearing-filters', 'after-page-length-change', 'after-reset-page', 'after-reset-page-length', 'after-loading-extensions', 'after-loading-themes'], function () {
	            return _this4.show('none');
	        });
	
	        this.initialized = false;
	    };
	
	    return Loader;
	}(_feature.Feature);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.HighlightKeyword = undefined;
	
	var _dom = __webpack_require__(2);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _string = __webpack_require__(3);
	
	var _string2 = _interopRequireDefault(_string);
	
	var _types = __webpack_require__(4);
	
	var _types2 = _interopRequireDefault(_types);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var HighlightKeyword = exports.HighlightKeyword = function () {
	
	    /**
	     * HighlightKeyword, highlight matched keyword
	     * @param {Object} tf TableFilter instance
	     */
	
	    function HighlightKeyword(tf) {
	        _classCallCheck(this, HighlightKeyword);
	
	        var f = tf.config();
	        //defines css class for highlighting
	        this.highlightCssClass = f.highlight_css_class || 'keyword';
	        this.highlightedNodes = [];
	
	        this.tf = tf;
	        this.emitter = tf.emitter;
	    }
	
	    HighlightKeyword.prototype.init = function init() {
	        var _this = this;
	
	        this.emitter.on(['before-filtering', 'destroy'], function () {
	            return _this.unhighlightAll();
	        });
	        this.emitter.on(['highlight-keyword'], function (tf, cell, word) {
	            return _this.highlight(cell, word, _this.highlightCssClass);
	        });
	    };
	
	    /**
	     * highlight occurences of searched term in passed node
	     * @param  {Node} node
	     * @param  {String} word     Searched term
	     * @param  {String} cssClass Css class name
	     */
	
	
	    HighlightKeyword.prototype.highlight = function highlight(node, word, cssClass) {
	        // Iterate into this nodes childNodes
	        if (node.hasChildNodes) {
	            var children = node.childNodes;
	            for (var i = 0; i < children.length; i++) {
	                this.highlight(children[i], word, cssClass);
	            }
	        }
	
	        if (node.nodeType === 3) {
	            var tempNodeVal = _string2.default.lower(node.nodeValue);
	            var tempWordVal = _string2.default.lower(word);
	            if (tempNodeVal.indexOf(tempWordVal) != -1) {
	                var pn = node.parentNode;
	                if (pn && pn.className != cssClass) {
	                    // word not highlighted yet
	                    var nv = node.nodeValue,
	                        ni = tempNodeVal.indexOf(tempWordVal),
	
	                    // Create a load of replacement nodes
	                    before = _dom2.default.text(nv.substr(0, ni)),
	                        docWordVal = nv.substr(ni, word.length),
	                        after = _dom2.default.text(nv.substr(ni + word.length)),
	                        hiwordtext = _dom2.default.text(docWordVal),
	                        hiword = _dom2.default.create('span');
	                    hiword.className = cssClass;
	                    hiword.appendChild(hiwordtext);
	                    pn.insertBefore(before, node);
	                    pn.insertBefore(hiword, node);
	                    pn.insertBefore(after, node);
	                    pn.removeChild(node);
	                    this.highlightedNodes.push(hiword.firstChild);
	                }
	            }
	        }
	    };
	
	    /**
	     * Removes highlight to nodes matching passed string
	     * @param  {String} word
	     * @param  {String} cssClass Css class to remove
	     */
	
	
	    HighlightKeyword.prototype.unhighlight = function unhighlight(word, cssClass) {
	        var arrRemove = [];
	        var highlightedNodes = this.highlightedNodes;
	        for (var i = 0; i < highlightedNodes.length; i++) {
	            var n = highlightedNodes[i];
	            if (!n) {
	                continue;
	            }
	            var tempNodeVal = _string2.default.lower(n.nodeValue),
	                tempWordVal = _string2.default.lower(word);
	            if (tempNodeVal.indexOf(tempWordVal) !== -1) {
	                var pn = n.parentNode;
	                if (pn && pn.className === cssClass) {
	                    var prevSib = pn.previousSibling,
	                        nextSib = pn.nextSibling;
	                    if (!prevSib || !nextSib) {
	                        continue;
	                    }
	                    nextSib.nodeValue = prevSib.nodeValue + n.nodeValue + nextSib.nodeValue;
	                    prevSib.nodeValue = '';
	                    n.nodeValue = '';
	                    arrRemove.push(i);
	                }
	            }
	        }
	        for (var k = 0; k < arrRemove.length; k++) {
	            highlightedNodes.splice(arrRemove[k], 1);
	        }
	    };
	
	    /**
	     * Clear all occurrences of highlighted nodes
	     */
	
	
	    HighlightKeyword.prototype.unhighlightAll = function unhighlightAll() {
	        var _this2 = this;
	
	        if (!this.tf.highlightKeywords) {
	            return;
	        }
	        // iterate filters values to unhighlight all values
	        this.tf.getFiltersValue().forEach(function (val) {
	            if (_types2.default.isArray(val)) {
	                val.forEach(function (item) {
	                    return _this2.unhighlight(item, _this2.highlightCssClass);
	                });
	            } else {
	                _this2.unhighlight(val, _this2.highlightCssClass);
	            }
	        });
	        this.highlightedNodes = [];
	    };
	
	    HighlightKeyword.prototype.destroy = function destroy() {
	        var _this3 = this;
	
	        this.emitter.off(['before-filtering', 'destroy'], function () {
	            return _this3.unhighlightAll();
	        });
	        this.emitter.off(['highlight-keyword'], function (tf, cell, word) {
	            return _this3.highlight(cell, word, _this3.highlightCssClass);
	        });
	    };
	
	    return HighlightKeyword;
	}();

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PopupFilter = undefined;
	
	var _feature = __webpack_require__(11);
	
	var _types = __webpack_require__(4);
	
	var _types2 = _interopRequireDefault(_types);
	
	var _dom = __webpack_require__(2);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _event = __webpack_require__(1);
	
	var _event2 = _interopRequireDefault(_event);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PopupFilter = exports.PopupFilter = function (_Feature) {
	    _inherits(PopupFilter, _Feature);
	
	    /**
	     * Pop-up filter component
	     * @param {Object} tf TableFilter instance
	     */
	
	    function PopupFilter(tf) {
	        _classCallCheck(this, PopupFilter);
	
	        // Configuration object
	
	        var _this = _possibleConstructorReturn(this, _Feature.call(this, tf, 'popupFilters'));
	
	        var f = _this.config;
	
	        // Enable external filters
	        tf.isExternalFlt = true;
	        tf.externalFltTgtIds = [];
	
	        //filter icon path
	        _this.popUpImgFlt = f.popup_filters_image || tf.themesPath + 'icn_filter.gif';
	        //active filter icon path
	        _this.popUpImgFltActive = f.popup_filters_image_active || tf.themesPath + 'icn_filterActive.gif';
	        _this.popUpImgFltHtml = f.popup_filters_image_html || '<img src="' + _this.popUpImgFlt + '" alt="Column filter" />';
	        //defines css class for popup div containing filter
	        _this.popUpDivCssClass = f.popup_div_css_class || 'popUpFilter';
	        //callback function before popup filtes is opened
	        _this.onBeforePopUpOpen = _types2.default.isFn(f.on_before_popup_filter_open) ? f.on_before_popup_filter_open : null;
	        //callback function after popup filtes is opened
	        _this.onAfterPopUpOpen = _types2.default.isFn(f.on_after_popup_filter_open) ? f.on_after_popup_filter_open : null;
	        //callback function before popup filtes is closed
	        _this.onBeforePopUpClose = _types2.default.isFn(f.on_before_popup_filter_close) ? f.on_before_popup_filter_close : null;
	        //callback function after popup filtes is closed
	        _this.onAfterPopUpClose = _types2.default.isFn(f.on_after_popup_filter_close) ? f.on_after_popup_filter_close : null;
	
	        //stores filters spans
	        _this.popUpFltSpans = [];
	        //stores filters icons
	        _this.popUpFltImgs = [];
	        //stores filters containers
	        _this.popUpFltElms = _this.popUpFltElmCache || [];
	        _this.popUpFltAdjustToContainer = true;
	
	        //id prefix for pop-up filter span
	        _this.prfxPopUpSpan = 'popUpSpan_';
	        //id prefix for pop-up div containing filter
	        _this.prfxPopUpDiv = 'popUpDiv_';
	        return _this;
	    }
	
	    PopupFilter.prototype.onClick = function onClick(e) {
	        var evt = e || global.event,
	            elm = evt.target.parentNode,
	            colIndex = parseInt(elm.getAttribute('ci'), 10);
	
	        this.closeAll(colIndex);
	        this.toggle(colIndex);
	
	        if (this.popUpFltAdjustToContainer) {
	            var popUpDiv = this.popUpFltElms[colIndex],
	                header = this.tf.getHeaderElement(colIndex),
	                headerWidth = header.clientWidth * 0.95;
	            popUpDiv.style.width = parseInt(headerWidth, 10) + 'px';
	        }
	        _event2.default.cancel(evt);
	        _event2.default.stop(evt);
	    };
	
	    /**
	     * Initialize DOM elements
	     */
	
	
	    PopupFilter.prototype.init = function init() {
	        var _this2 = this;
	
	        if (this.initialized) {
	            return;
	        }
	
	        var tf = this.tf;
	
	        // Override headers row index if no grouped headers
	        if (tf.headersRow <= 1) {
	            tf.headersRow = 0;
	        }
	
	        for (var i = 0; i < tf.nbCells; i++) {
	            if (tf.getFilterType(i) === tf.fltTypeNone) {
	                continue;
	            }
	            var popUpSpan = _dom2.default.create('span', ['id', this.prfxPopUpSpan + tf.id + '_' + i], ['ci', i]);
	            popUpSpan.innerHTML = this.popUpImgFltHtml;
	            var header = tf.getHeaderElement(i);
	            header.appendChild(popUpSpan);
	            _event2.default.add(popUpSpan, 'click', function (evt) {
	                _this2.onClick(evt);
	            });
	            this.popUpFltSpans[i] = popUpSpan;
	            this.popUpFltImgs[i] = popUpSpan.firstChild;
	        }
	
	        // subscribe to events
	        this.emitter.on(['before-filtering'], function () {
	            return _this2.buildIcons();
	        });
	        this.emitter.on(['after-filtering'], function () {
	            return _this2.closeAll();
	        });
	        this.emitter.on(['cell-processed'], function (tf, cellIndex) {
	            return _this2.buildIcon(cellIndex, true);
	        });
	        this.emitter.on(['filters-row-inserted'], function () {
	            return _this2.tf.headersRow++;
	        });
	        this.emitter.on(['before-filter-init'], function (tf, colIndex) {
	            return _this2.build(colIndex);
	        });
	
	        this.initialized = true;
	    };
	
	    /**
	     * Reset previously destroyed feature
	     */
	
	
	    PopupFilter.prototype.reset = function reset() {
	        this.enable();
	        this.init();
	        this.buildAll();
	    };
	
	    /**
	     * Build all pop-up filters elements
	     */
	
	
	    PopupFilter.prototype.buildAll = function buildAll() {
	        for (var i = 0; i < this.popUpFltElmCache.length; i++) {
	            this.build(i, this.popUpFltElmCache[i]);
	        }
	    };
	
	    /**
	     * Build a specified pop-up filter elements
	     * @param  {Number} colIndex Column index
	     * @param  {Object} div      Optional container DOM element
	     */
	
	
	    PopupFilter.prototype.build = function build(colIndex, div) {
	        var tf = this.tf;
	        var popUpDiv = !div ? _dom2.default.create('div', ['id', this.prfxPopUpDiv + tf.id + '_' + colIndex]) : div;
	        popUpDiv.className = this.popUpDivCssClass;
	        tf.externalFltTgtIds.push(popUpDiv.id);
	        var header = tf.getHeaderElement(colIndex);
	        header.insertBefore(popUpDiv, header.firstChild);
	        _event2.default.add(popUpDiv, 'click', function (evt) {
	            return _event2.default.stop(evt);
	        });
	        this.popUpFltElms[colIndex] = popUpDiv;
	    };
	
	    /**
	     * Toogle visibility of specified filter
	     * @param  {Number} colIndex Column index
	     */
	
	
	    PopupFilter.prototype.toggle = function toggle(colIndex) {
	        var tf = this.tf,
	            popUpFltElm = this.popUpFltElms[colIndex];
	
	        if (popUpFltElm.style.display === 'none' || popUpFltElm.style.display === '') {
	            if (this.onBeforePopUpOpen) {
	                this.onBeforePopUpOpen.call(null, this, this.popUpFltElms[colIndex], colIndex);
	            }
	            popUpFltElm.style.display = 'block';
	            if (tf.getFilterType(colIndex) === tf.fltTypeInp) {
	                var flt = tf.getFilterElement(colIndex);
	                if (flt) {
	                    flt.focus();
	                }
	            }
	            if (this.onAfterPopUpOpen) {
	                this.onAfterPopUpOpen.call(null, this, this.popUpFltElms[colIndex], colIndex);
	            }
	        } else {
	            if (this.onBeforePopUpClose) {
	                this.onBeforePopUpClose.call(null, this, this.popUpFltElms[colIndex], colIndex);
	            }
	            popUpFltElm.style.display = 'none';
	            if (this.onAfterPopUpClose) {
	                this.onAfterPopUpClose.call(null, this, this.popUpFltElms[colIndex], colIndex);
	            }
	        }
	    };
	
	    /**
	     * Close all filters excepted for the specified one if any
	     * @param  {Number} exceptIdx Column index of the filter to not close
	     */
	
	
	    PopupFilter.prototype.closeAll = function closeAll(exceptIdx) {
	        for (var i = 0; i < this.popUpFltElms.length; i++) {
	            if (i === exceptIdx) {
	                continue;
	            }
	            var popUpFltElm = this.popUpFltElms[i];
	            if (popUpFltElm) {
	                popUpFltElm.style.display = 'none';
	            }
	        }
	    };
	
	    /**
	     * Build all the icons representing the pop-up filters
	     */
	
	
	    PopupFilter.prototype.buildIcons = function buildIcons() {
	        for (var i = 0; i < this.popUpFltImgs.length; i++) {
	            this.buildIcon(i, false);
	        }
	    };
	
	    /**
	     * Apply specified icon state
	     * @param  {Number} colIndex Column index
	     * @param  {Boolean} active   Apply active state
	     */
	
	
	    PopupFilter.prototype.buildIcon = function buildIcon(colIndex, active) {
	        if (this.popUpFltImgs[colIndex]) {
	            this.popUpFltImgs[colIndex].src = active ? this.popUpImgFltActive : this.popUpImgFlt;
	        }
	    };
	
	    /**
	     * Remove pop-up filters
	     */
	
	
	    PopupFilter.prototype.destroy = function destroy() {
	        var _this3 = this;
	
	        if (!this.initialized) {
	            return;
	        }
	
	        this.popUpFltElmCache = [];
	        for (var i = 0; i < this.popUpFltElms.length; i++) {
	            var popUpFltElm = this.popUpFltElms[i],
	                popUpFltSpan = this.popUpFltSpans[i],
	                popUpFltImg = this.popUpFltImgs[i];
	            if (popUpFltElm) {
	                _dom2.default.remove(popUpFltElm);
	                this.popUpFltElmCache[i] = popUpFltElm;
	            }
	            popUpFltElm = null;
	            if (popUpFltSpan) {
	                _dom2.default.remove(popUpFltSpan);
	            }
	            popUpFltSpan = null;
	            if (popUpFltImg) {
	                _dom2.default.remove(popUpFltImg);
	            }
	            popUpFltImg = null;
	        }
	        this.popUpFltElms = [];
	        this.popUpFltSpans = [];
	        this.popUpFltImgs = [];
	
	        // unsubscribe to events
	        this.emitter.off(['before-filtering'], function () {
	            return _this3.buildIcons();
	        });
	        this.emitter.off(['after-filtering'], function () {
	            return _this3.closeAll();
	        });
	        this.emitter.off(['cell-processed'], function (tf, cellIndex) {
	            return _this3.buildIcon(cellIndex, true);
	        });
	        this.emitter.off(['filters-row-inserted'], function () {
	            return _this3.tf.headersRow++;
	        });
	        this.emitter.off(['before-filter-init'], function (tf, colIndex) {
	            return _this3.build(colIndex);
	        });
	
	        this.initialized = false;
	    };
	
	    return PopupFilter;
	}(_feature.Feature);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Dropdown = undefined;
	
	var _feature = __webpack_require__(11);
	
	var _dom = __webpack_require__(2);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _array = __webpack_require__(16);
	
	var _array2 = _interopRequireDefault(_array);
	
	var _string = __webpack_require__(3);
	
	var _string2 = _interopRequireDefault(_string);
	
	var _sort = __webpack_require__(17);
	
	var _sort2 = _interopRequireDefault(_sort);
	
	var _event = __webpack_require__(1);
	
	var _event2 = _interopRequireDefault(_event);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SORT_ERROR = 'Filter options for column {0} cannot be sorted in ' + '{1} manner.';
	
	var Dropdown = exports.Dropdown = function (_Feature) {
	    _inherits(Dropdown, _Feature);
	
	    /**
	     * Dropdown UI component
	     * @param {Object} tf TableFilter instance
	     */
	
	    function Dropdown(tf) {
	        _classCallCheck(this, Dropdown);
	
	        // Configuration object
	
	        var _this = _possibleConstructorReturn(this, _Feature.call(this, tf, 'dropdown'));
	
	        var f = tf.config();
	
	        _this.enableSlcResetFilter = f.enable_slc_reset_filter === false ? false : true;
	        //defines empty option text
	        _this.nonEmptyText = f.non_empty_text || '(Non empty)';
	        //IE only, tooltip text appearing on select before it is populated
	        _this.activateSlcTooltip = f.activate_slc_tooltip || 'Click to activate';
	        //tooltip text appearing on multiple select
	        _this.multipleSlcTooltip = f.multiple_slc_tooltip || 'Use Ctrl key for multiple selections';
	
	        _this.isCustom = null;
	        _this.opts = null;
	        _this.optsTxt = null;
	        _this.slcInnerHtml = null;
	        return _this;
	    }
	
	    Dropdown.prototype.onSlcFocus = function onSlcFocus(e) {
	        var elm = _event2.default.target(e);
	        var tf = this.tf;
	        tf.activeFilterId = elm.getAttribute('id');
	        tf.activeFlt = _dom2.default.id(tf.activeFilterId);
	        // select is populated when element has focus
	        if (tf.loadFltOnDemand && elm.getAttribute('filled') === '0') {
	            var ct = elm.getAttribute('ct');
	            this.build(ct);
	        }
	        this.emitter.emit('filter-focus', tf, this);
	    };
	
	    Dropdown.prototype.onSlcChange = function onSlcChange() {
	        if (this.tf.onSlcChange) {
	            this.tf.filter();
	        }
	    };
	
	    /**
	     * Initialize drop-down filter
	     * @param  {Number}     colIndex   Column index
	     * @param  {Boolean}    isExternal External filter flag
	     * @param  {DOMElement} container  Dom element containing the filter
	     */
	
	
	    Dropdown.prototype.init = function init(colIndex, isExternal, container) {
	        var _this2 = this;
	
	        var tf = this.tf;
	        var col = tf.getFilterType(colIndex);
	        var externalFltTgtId = isExternal ? tf.externalFltTgtIds[colIndex] : null;
	
	        var slc = _dom2.default.create(tf.fltTypeSlc, ['id', tf.prfxFlt + colIndex + '_' + tf.id], ['ct', colIndex], ['filled', '0']);
	
	        if (col === tf.fltTypeMulti) {
	            slc.multiple = tf.fltTypeMulti;
	            slc.title = this.multipleSlcTooltip;
	        }
	        slc.className = _string2.default.lower(col) === tf.fltTypeSlc ? tf.fltCssClass : tf.fltMultiCssClass;
	
	        //filter is appended in container element
	        if (externalFltTgtId) {
	            _dom2.default.id(externalFltTgtId).appendChild(slc);
	            tf.externalFltEls.push(slc);
	        } else {
	            container.appendChild(slc);
	        }
	
	        tf.fltIds.push(slc.id);
	
	        if (!tf.loadFltOnDemand) {
	            this.build(colIndex);
	        } else {
	            //1st option is created here since build isn't invoked
	            var opt0 = _dom2.default.createOpt(tf.displayAllText, '');
	            slc.appendChild(opt0);
	        }
	
	        _event2.default.add(slc, 'change', function () {
	            return _this2.onSlcChange();
	        });
	        _event2.default.add(slc, 'focus', function (e) {
	            return _this2.onSlcFocus(e);
	        });
	
	        this.emitter.on(['build-select-filter'], function (tf, colIndex, isLinked, isExternal) {
	            return _this2.build(colIndex, isLinked, isExternal);
	        });
	        this.emitter.on(['select-options'], function (tf, colIndex, values) {
	            return _this2.selectOptions(colIndex, values);
	        });
	
	        this.initialized = true;
	    };
	
	    /**
	     * Build drop-down filter UI
	     * @param  {Number}  colIndex    Column index
	     * @param  {Boolean} isLinked    Enable linked refresh behaviour
	     */
	
	
	    Dropdown.prototype.build = function build(colIndex) {
	        var isLinked = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	        var tf = this.tf;
	        colIndex = parseInt(colIndex, 10);
	
	        this.emitter.emit('before-populating-filter', tf, colIndex);
	
	        this.opts = [];
	        this.optsTxt = [];
	        this.slcInnerHtml = '';
	
	        var slcId = tf.fltIds[colIndex];
	        var slc = _dom2.default.id(slcId),
	            rows = tf.tbl.rows,
	            matchCase = tf.matchCase;
	
	        //custom select test
	        this.isCustom = tf.isCustomOptions(colIndex);
	
	        //custom selects text
	        var activeFlt = void 0;
	        if (isLinked && tf.activeFilterId) {
	            activeFlt = tf.activeFilterId.split('_')[0];
	            activeFlt = activeFlt.split(tf.prfxFlt)[1];
	        }
	
	        var excludedOpts = null,
	            filteredDataCol = null;
	        if (isLinked && tf.disableExcludedOptions) {
	            excludedOpts = [];
	            filteredDataCol = [];
	        }
	
	        for (var k = tf.refRow; k < tf.nbRows; k++) {
	            // always visible rows don't need to appear on selects as always
	            // valid
	            if (tf.hasVisibleRows && tf.visibleRows.indexOf(k) !== -1) {
	                continue;
	            }
	
	            var cell = rows[k].cells,
	                nchilds = cell.length;
	
	            // checks if row has exact cell #
	            if (nchilds !== tf.nbCells || this.isCustom) {
	                continue;
	            }
	
	            // this loop retrieves cell data
	            for (var j = 0; j < nchilds; j++) {
	                // WTF: cyclomatic complexity hell
	                if (colIndex === j && (!isLinked || isLinked && tf.disableExcludedOptions) || colIndex === j && isLinked && (rows[k].style.display === '' && !tf.paging || tf.paging && (!tf.validRowsIndex || tf.validRowsIndex && tf.validRowsIndex.indexOf(k) != -1) && (activeFlt === undefined || activeFlt === colIndex || activeFlt != colIndex && tf.validRowsIndex.indexOf(k) != -1))) {
	                    var cellData = tf.getCellData(cell[j]),
	
	                    //Vary Peter's patch
	                    cellString = _string2.default.matchCase(cellData, matchCase);
	
	                    // checks if celldata is already in array
	                    if (!_array2.default.has(this.opts, cellString, matchCase)) {
	                        this.opts.push(cellData);
	                    }
	
	                    if (isLinked && tf.disableExcludedOptions) {
	                        var filteredCol = filteredDataCol[j];
	                        if (!filteredCol) {
	                            filteredCol = tf.getFilteredDataCol(j);
	                        }
	                        if (!_array2.default.has(filteredCol, cellString, matchCase) && !_array2.default.has(excludedOpts, cellString, matchCase)) {
	                            excludedOpts.push(cellData);
	                        }
	                    }
	                } //if colIndex==j
	            } //for j
	        } //for k
	
	        //Retrieves custom values
	        if (this.isCustom) {
	            var customValues = tf.getCustomOptions(colIndex);
	            this.opts = customValues[0];
	            this.optsTxt = customValues[1];
	        }
	
	        if (tf.sortSlc && !this.isCustom) {
	            if (!matchCase) {
	                this.opts.sort(_sort2.default.ignoreCase);
	                if (excludedOpts) {
	                    excludedOpts.sort(_sort2.default.ignoreCase);
	                }
	            } else {
	                this.opts.sort();
	                if (excludedOpts) {
	                    excludedOpts.sort();
	                }
	            }
	        }
	
	        //asc sort
	        if (tf.sortNumAsc.indexOf(colIndex) != -1) {
	            try {
	                this.opts.sort(_sort2.default.numSortAsc);
	                if (excludedOpts) {
	                    excludedOpts.sort(_sort2.default.numSortAsc);
	                }
	                if (this.isCustom) {
	                    this.optsTxt.sort(_sort2.default.numSortAsc);
	                }
	            } catch (e) {
	                throw new Error(SORT_ERROR.replace('{0}', colIndex).replace('{1}', 'ascending'));
	            } //in case there are alphanumeric values
	        }
	        //desc sort
	        if (tf.sortNumDesc.indexOf(colIndex) != -1) {
	            try {
	                this.opts.sort(_sort2.default.numSortDesc);
	                if (excludedOpts) {
	                    excludedOpts.sort(_sort2.default.numSortDesc);
	                }
	                if (this.isCustom) {
	                    this.optsTxt.sort(_sort2.default.numSortDesc);
	                }
	            } catch (e) {
	                throw new Error(SORT_ERROR.replace('{0}', colIndex).replace('{1}', 'ascending'));
	            } //in case there are alphanumeric values
	        }
	
	        //populates drop-down
	        this.addOptions(colIndex, slc, isLinked, excludedOpts);
	
	        this.emitter.emit('after-populating-filter', tf, colIndex, slc);
	    };
	
	    /**
	     * Add drop-down options
	     * @param {Number} colIndex     Column index
	     * @param {Object} slc          Select Dom element
	     * @param {Boolean} isLinked    Enable linked refresh behaviour
	     * @param {Array} excludedOpts  Array of excluded options
	     */
	
	
	    Dropdown.prototype.addOptions = function addOptions(colIndex, slc, isLinked, excludedOpts) {
	        var tf = this.tf,
	            slcValue = slc.value;
	
	        slc.innerHTML = '';
	        slc = this.addFirstOption(slc);
	
	        for (var y = 0; y < this.opts.length; y++) {
	            if (this.opts[y] === '') {
	                continue;
	            }
	            var val = this.opts[y]; //option value
	            var lbl = this.isCustom ? this.optsTxt[y] : val; //option text
	            var isDisabled = false;
	            if (isLinked && tf.disableExcludedOptions && _array2.default.has(excludedOpts, _string2.default.matchCase(val, tf.matchCase), tf.matchCase)) {
	                isDisabled = true;
	            }
	
	            var opt = void 0;
	            //fill select on demand
	            if (tf.loadFltOnDemand && slcValue === this.opts[y] && tf.getFilterType(colIndex) === tf.fltTypeSlc) {
	                opt = _dom2.default.createOpt(lbl, val, true);
	            } else {
	                opt = _dom2.default.createOpt(lbl, val, false);
	            }
	            if (isDisabled) {
	                opt.disabled = true;
	            }
	            slc.appendChild(opt);
	        } // for y
	
	        slc.setAttribute('filled', '1');
	    };
	
	    /**
	     * Add drop-down header option
	     * @param {Object} slc Select DOM element
	     */
	
	
	    Dropdown.prototype.addFirstOption = function addFirstOption(slc) {
	        var tf = this.tf;
	
	        var opt0 = _dom2.default.createOpt(!this.enableSlcResetFilter ? '' : tf.displayAllText, '');
	        if (!this.enableSlcResetFilter) {
	            opt0.style.display = 'none';
	        }
	        slc.appendChild(opt0);
	        if (tf.enableEmptyOption) {
	            var opt1 = _dom2.default.createOpt(tf.emptyText, tf.emOperator);
	            slc.appendChild(opt1);
	        }
	        if (tf.enableNonEmptyOption) {
	            var opt2 = _dom2.default.createOpt(tf.nonEmptyText, tf.nmOperator);
	            slc.appendChild(opt2);
	        }
	        return slc;
	    };
	
	    /**
	     * Select filter options programmatically
	     * @param  {Number} colIndex Column index
	     * @param  {Array}  values   Array of option values to select
	     */
	
	
	    Dropdown.prototype.selectOptions = function selectOptions(colIndex) {
	        var values = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	
	        var tf = this.tf;
	        if (tf.getFilterType(colIndex) !== tf.fltTypeMulti || values.length === 0) {
	            return;
	        }
	        var slc = tf.getFilterElement(colIndex);
	        [].forEach.call(slc.options, function (option) {
	            // Empty value means clear all selections and first option is the
	            // clear all option
	            if (values[0] === '' || option.value === '') {
	                option.selected = false;
	            }
	
	            if (option.value !== '' && _array2.default.has(values, option.value, true)) {
	                option.selected = true;
	            } //if
	        });
	    };
	
	    Dropdown.prototype.destroy = function destroy() {
	        var _this3 = this;
	
	        this.emitter.off(['build-select-filter'], function (colIndex, isLinked, isExternal) {
	            return _this3.build(colIndex, isLinked, isExternal);
	        });
	        this.emitter.off(['select-options'], function (tf, colIndex, values) {
	            return _this3.selectOptions(colIndex, values);
	        });
	    };
	
	    return Dropdown;
	}(_feature.Feature);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _string = __webpack_require__(3);
	
	var _string2 = _interopRequireDefault(_string);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    has: function has(arr, val, caseSensitive) {
	        var sCase = caseSensitive === undefined ? false : caseSensitive;
	        for (var i = 0; i < arr.length; i++) {
	            if (_string2.default.matchCase(arr[i].toString(), sCase) == val) {
	                return true;
	            }
	        }
	        return false;
	    }
	}; /**
	    * Array utilities
	    */

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _string = __webpack_require__(3);
	
	var _string2 = _interopRequireDefault(_string);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    ignoreCase: function ignoreCase(a, b) {
	        var x = _string2.default.lower(a);
	        var y = _string2.default.lower(b);
	        return x < y ? -1 : x > y ? 1 : 0;
	    },
	    numSortAsc: function numSortAsc(a, b) {
	        return a - b;
	    },
	    numSortDesc: function numSortDesc(a, b) {
	        return b - a;
	    }
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.CheckList = undefined;
	
	var _feature = __webpack_require__(11);
	
	var _dom = __webpack_require__(2);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _array = __webpack_require__(16);
	
	var _array2 = _interopRequireDefault(_array);
	
	var _string = __webpack_require__(3);
	
	var _string2 = _interopRequireDefault(_string);
	
	var _sort = __webpack_require__(17);
	
	var _sort2 = _interopRequireDefault(_sort);
	
	var _event = __webpack_require__(1);
	
	var _event2 = _interopRequireDefault(_event);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SORT_ERROR = 'Filter options for column {0} cannot be sorted in ' + '{1} manner.';
	
	var CheckList = exports.CheckList = function (_Feature) {
	    _inherits(CheckList, _Feature);
	
	    /**
	     * Checklist UI component
	     * @param {Object} tf TableFilter instance
	     */
	
	    function CheckList(tf) {
	        _classCallCheck(this, CheckList);
	
	        // Configuration object
	
	        var _this = _possibleConstructorReturn(this, _Feature.call(this, tf, 'checkList'));
	
	        var f = tf.config();
	
	        _this.checkListDiv = []; //checklist container div
	        //defines css class for div containing checklist filter
	        _this.checkListDivCssClass = f.div_checklist_css_class || 'div_checklist';
	        //defines css class for checklist filters
	        _this.checkListCssClass = f.checklist_css_class || 'flt_checklist';
	        //defines css class for checklist item (li)
	        _this.checkListItemCssClass = f.checklist_item_css_class || 'flt_checklist_item';
	        //defines css class for selected checklist item (li)
	        _this.checkListSlcItemCssClass = f.checklist_selected_item_css_class || 'flt_checklist_slc_item';
	        //Load on demand text
	        _this.activateCheckListTxt = f.activate_checklist_text || 'Click to load filter data';
	        //defines css class for checklist filters
	        _this.checkListItemDisabledCssClass = f.checklist_item_disabled_css_class || 'flt_checklist_item_disabled';
	        _this.enableCheckListResetFilter = f.enable_checklist_reset_filter === false ? false : true;
	        //checklist filter container div
	        _this.prfxCheckListDiv = 'chkdiv_';
	
	        _this.isCustom = null;
	        _this.opts = null;
	        _this.optsTxt = null;
	        _this.excludedOpts = null;
	        return _this;
	    }
	
	    CheckList.prototype.onChange = function onChange(evt) {
	        var elm = evt.target;
	        var tf = this.tf;
	        tf.activeFilterId = elm.getAttribute('id');
	        tf.activeFlt = _dom2.default.id(tf.activeFilterId);
	        tf.filter();
	    };
	
	    CheckList.prototype.optionClick = function optionClick(evt) {
	        this.setCheckListValues(evt.target);
	        this.onChange(evt);
	    };
	
	    CheckList.prototype.onCheckListClick = function onCheckListClick(evt) {
	        var _this2 = this;
	
	        var elm = _event2.default.target(evt);
	        if (this.tf.loadFltOnDemand && elm.getAttribute('filled') === '0') {
	            var ct = elm.getAttribute('ct');
	            var div = this.checkListDiv[ct];
	            this.build(ct);
	            _event2.default.remove(div, 'click', function (evt) {
	                return _this2.onCheckListClick(evt);
	            });
	        }
	    };
	
	    /**
	     * Initialize checklist filter
	     * @param  {Number}     colIndex   Column index
	     * @param  {Boolean}    isExternal External filter flag
	     * @param  {DOMElement} container  Dom element containing the filter
	     */
	
	
	    CheckList.prototype.init = function init(colIndex, isExternal, container) {
	        var _this3 = this;
	
	        var tf = this.tf;
	        var externalFltTgtId = isExternal ? tf.externalFltTgtIds[colIndex] : null;
	
	        var divCont = _dom2.default.create('div', ['id', this.prfxCheckListDiv + colIndex + '_' + tf.id], ['ct', colIndex], ['filled', '0']);
	        divCont.className = this.checkListDivCssClass;
	
	        //filter is appended in desired element
	        if (externalFltTgtId) {
	            _dom2.default.id(externalFltTgtId).appendChild(divCont);
	            tf.externalFltEls.push(divCont);
	        } else {
	            container.appendChild(divCont);
	        }
	
	        this.checkListDiv[colIndex] = divCont;
	        tf.fltIds.push(tf.prfxFlt + colIndex + '_' + tf.id);
	
	        if (!tf.loadFltOnDemand) {
	            this.build(colIndex);
	        } else {
	            _event2.default.add(divCont, 'click', function (evt) {
	                return _this3.onCheckListClick(evt);
	            });
	            divCont.appendChild(_dom2.default.text(this.activateCheckListTxt));
	        }
	
	        this.emitter.on(['build-checklist-filter'], function (tf, colIndex, isExternal) {
	            return _this3.build(colIndex, isExternal);
	        });
	
	        this.emitter.on(['select-checklist-options'], function (tf, colIndex, values) {
	            return _this3.selectOptions(colIndex, values);
	        });
	
	        this.initialized = true;
	    };
	
	    /**
	     * Build checklist UI
	     * @param  {Number}  colIndex   Column index
	     */
	
	
	    CheckList.prototype.build = function build(colIndex) {
	        var _this4 = this;
	
	        var tf = this.tf;
	        colIndex = parseInt(colIndex, 10);
	
	        this.emitter.emit('before-populating-filter', tf, colIndex);
	
	        this.opts = [];
	        this.optsTxt = [];
	
	        var flt = this.checkListDiv[colIndex];
	        var ul = _dom2.default.create('ul', ['id', tf.fltIds[colIndex]], ['colIndex', colIndex]);
	        ul.className = this.checkListCssClass;
	        _event2.default.add(ul, 'change', function (evt) {
	            return _this4.onChange(evt);
	        });
	
	        var rows = tf.tbl.rows;
	        this.isCustom = tf.isCustomOptions(colIndex);
	
	        var activeFlt = void 0;
	        if (tf.linkedFilters && tf.activeFilterId) {
	            activeFlt = tf.activeFilterId.split('_')[0];
	            activeFlt = activeFlt.split(tf.prfxFlt)[1];
	        }
	
	        var filteredDataCol = [];
	        if (tf.linkedFilters && tf.disableExcludedOptions) {
	            this.excludedOpts = [];
	        }
	
	        flt.innerHTML = '';
	
	        for (var k = tf.refRow; k < tf.nbRows; k++) {
	            // always visible rows don't need to appear on selects as always
	            // valid
	            if (tf.hasVisibleRows && tf.visibleRows.indexOf(k) !== -1) {
	                continue;
	            }
	
	            var cells = rows[k].cells;
	            var ncells = cells.length;
	
	            // checks if row has exact cell #
	            if (ncells !== tf.nbCells || this.isCustom) {
	                continue;
	            }
	
	            // this loop retrieves cell data
	            for (var j = 0; j < ncells; j++) {
	                // WTF: cyclomatic complexity hell :)
	                if (colIndex === j && (!tf.linkedFilters || tf.linkedFilters && tf.disableExcludedOptions) || colIndex === j && tf.linkedFilters && (rows[k].style.display === '' && !tf.paging || tf.paging && (!activeFlt || activeFlt === colIndex || activeFlt != colIndex && tf.validRowsIndex.indexOf(k) != -1))) {
	
	                    var cellData = tf.getCellData(cells[j]);
	                    //Vary Peter's patch
	                    var cellString = _string2.default.matchCase(cellData, tf.matchCase);
	                    // checks if celldata is already in array
	                    if (!_array2.default.has(this.opts, cellString, tf.matchCase)) {
	                        this.opts.push(cellData);
	                    }
	                    var filteredCol = filteredDataCol[j];
	                    if (tf.linkedFilters && tf.disableExcludedOptions) {
	                        if (!filteredCol) {
	                            filteredCol = tf.getFilteredDataCol(j);
	                        }
	                        if (!_array2.default.has(filteredCol, cellString, tf.matchCase) && !_array2.default.has(this.excludedOpts, cellString, tf.matchCase)) {
	                            this.excludedOpts.push(cellData);
	                        }
	                    }
	                }
	            }
	        }
	
	        //Retrieves custom values
	        if (this.isCustom) {
	            var customValues = tf.getCustomOptions(colIndex);
	            this.opts = customValues[0];
	            this.optsTxt = customValues[1];
	        }
	
	        if (tf.sortSlc && !this.isCustom) {
	            if (!tf.matchCase) {
	                this.opts.sort(_sort2.default.ignoreCase);
	                if (this.excludedOpts) {
	                    this.excludedOpts.sort(_sort2.default.ignoreCase);
	                }
	            } else {
	                this.opts.sort();
	                if (this.excludedOpts) {
	                    this.excludedOpts.sort();
	                }
	            }
	        }
	        //asc sort
	        if (tf.sortNumAsc.indexOf(colIndex) != -1) {
	            try {
	                this.opts.sort(_sort2.default.numSortAsc);
	                if (this.excludedOpts) {
	                    this.excludedOpts.sort(_sort2.default.numSortAsc);
	                }
	                if (this.isCustom) {
	                    this.optsTxt.sort(_sort2.default.numSortAsc);
	                }
	            } catch (e) {
	                throw new Error(SORT_ERROR.replace('{0}', colIndex).replace('{1}', 'ascending'));
	            } //in case there are alphanumeric values
	        }
	        //desc sort
	        if (tf.sortNumDesc.indexOf(colIndex) != -1) {
	            try {
	                this.opts.sort(_sort2.default.numSortDesc);
	                if (this.excludedOpts) {
	                    this.excludedOpts.sort(_sort2.default.numSortDesc);
	                }
	                if (this.isCustom) {
	                    this.optsTxt.sort(_sort2.default.numSortDesc);
	                }
	            } catch (e) {
	                throw new Error(SORT_ERROR.replace('{0}', colIndex).replace('{1}', 'descending'));
	            } //in case there are alphanumeric values
	        }
	
	        this.addChecks(colIndex, ul);
	
	        if (tf.loadFltOnDemand) {
	            flt.innerHTML = '';
	        }
	        flt.appendChild(ul);
	        flt.setAttribute('filled', '1');
	
	        this.emitter.emit('after-populating-filter', tf, colIndex, flt);
	    };
	
	    /**
	     * Add checklist options
	     * @param {Number} colIndex  Column index
	     * @param {Object} ul        Ul element
	     */
	
	
	    CheckList.prototype.addChecks = function addChecks(colIndex, ul) {
	        var _this5 = this;
	
	        var tf = this.tf;
	        var chkCt = this.addTChecks(colIndex, ul);
	
	        for (var y = 0; y < this.opts.length; y++) {
	            var val = this.opts[y]; //item value
	            var lbl = this.isCustom ? this.optsTxt[y] : val; //item text
	            var li = _dom2.default.createCheckItem(tf.fltIds[colIndex] + '_' + (y + chkCt), val, lbl);
	            li.className = this.checkListItemCssClass;
	            if (tf.linkedFilters && tf.disableExcludedOptions && _array2.default.has(this.excludedOpts, _string2.default.matchCase(val, tf.matchCase), tf.matchCase)) {
	                _dom2.default.addClass(li, this.checkListItemDisabledCssClass);
	                li.check.disabled = true;
	                li.disabled = true;
	            } else {
	                _event2.default.add(li.check, 'click', function (evt) {
	                    return _this5.optionClick(evt);
	                });
	            }
	            ul.appendChild(li);
	
	            if (val === '') {
	                //item is hidden
	                li.style.display = 'none';
	            }
	        }
	    };
	
	    /**
	     * Add checklist header option
	     * @param {Number} colIndex Column index
	     * @param {Object} ul       Ul element
	     */
	
	
	    CheckList.prototype.addTChecks = function addTChecks(colIndex, ul) {
	        var _this6 = this;
	
	        var tf = this.tf;
	        var chkCt = 1;
	        var li0 = _dom2.default.createCheckItem(tf.fltIds[colIndex] + '_0', '', tf.displayAllText);
	        li0.className = this.checkListItemCssClass;
	        ul.appendChild(li0);
	
	        _event2.default.add(li0.check, 'click', function (evt) {
	            return _this6.optionClick(evt);
	        });
	
	        if (!this.enableCheckListResetFilter) {
	            li0.style.display = 'none';
	        }
	
	        if (tf.enableEmptyOption) {
	            var li1 = _dom2.default.createCheckItem(tf.fltIds[colIndex] + '_1', tf.emOperator, tf.emptyText);
	            li1.className = this.checkListItemCssClass;
	            ul.appendChild(li1);
	            _event2.default.add(li1.check, 'click', function (evt) {
	                return _this6.optionClick(evt);
	            });
	            chkCt++;
	        }
	
	        if (tf.enableNonEmptyOption) {
	            var li2 = _dom2.default.createCheckItem(tf.fltIds[colIndex] + '_2', tf.nmOperator, tf.nonEmptyText);
	            li2.className = this.checkListItemCssClass;
	            ul.appendChild(li2);
	            _event2.default.add(li2.check, 'click', function (evt) {
	                return _this6.optionClick(evt);
	            });
	            chkCt++;
	        }
	        return chkCt;
	    };
	
	    /**
	     * Store checked options in DOM element attribute
	     * @param {Object} o checklist option DOM element
	     */
	
	
	    CheckList.prototype.setCheckListValues = function setCheckListValues(o) {
	        if (!o) {
	            return;
	        }
	
	        var tf = this.tf;
	        var chkValue = o.value; //checked item value
	        var chkIndex = parseInt(o.id.split('_')[2], 10);
	        // TODO: provide helper to extract column index, ugly!
	        var colIdx = o.id.split('_')[0].replace(tf.prfxFlt, '');
	        var itemTag = 'LI';
	
	        var n = tf.getFilterElement(parseInt(colIdx, 10));
	        var li = n.childNodes[chkIndex];
	        var colIndex = n.getAttribute('colIndex');
	        var fltValue = n.getAttribute('value'); //filter value (ul tag)
	        var fltIndexes = n.getAttribute('indexes'); //selected items (ul tag)
	
	        if (o.checked) {
	            //show all item
	            if (chkValue === '') {
	                if (fltIndexes && fltIndexes !== '') {
	                    //items indexes
	                    var indSplit = fltIndexes.split(tf.separator);
	                    //checked items loop
	                    for (var u = 0; u < indSplit.length; u++) {
	                        //checked item
	                        var cChk = _dom2.default.id(tf.fltIds[colIndex] + '_' + indSplit[u]);
	                        if (cChk) {
	                            cChk.checked = false;
	                            _dom2.default.removeClass(n.childNodes[indSplit[u]], this.checkListSlcItemCssClass);
	                        }
	                    }
	                }
	                n.setAttribute('value', '');
	                n.setAttribute('indexes', '');
	            } else {
	                fltValue = fltValue ? fltValue : '';
	                chkValue = _string2.default.trim(fltValue + ' ' + chkValue + ' ' + tf.orOperator);
	                chkIndex = fltIndexes + chkIndex + tf.separator;
	                n.setAttribute('value', chkValue);
	                n.setAttribute('indexes', chkIndex);
	                //1st option unchecked
	                if (_dom2.default.id(tf.fltIds[colIndex] + '_0')) {
	                    _dom2.default.id(tf.fltIds[colIndex] + '_0').checked = false;
	                }
	            }
	
	            if (li.nodeName === itemTag) {
	                _dom2.default.removeClass(n.childNodes[0], this.checkListSlcItemCssClass);
	                _dom2.default.addClass(li, this.checkListSlcItemCssClass);
	            }
	        } else {
	            //removes values and indexes
	            if (chkValue !== '') {
	                var replaceValue = new RegExp(_string2.default.rgxEsc(chkValue + ' ' + tf.orOperator));
	                fltValue = fltValue.replace(replaceValue, '');
	                n.setAttribute('value', _string2.default.trim(fltValue));
	
	                var replaceIndex = new RegExp(_string2.default.rgxEsc(chkIndex + tf.separator));
	                fltIndexes = fltIndexes.replace(replaceIndex, '');
	                n.setAttribute('indexes', fltIndexes);
	            }
	            if (li.nodeName === itemTag) {
	                _dom2.default.removeClass(li, this.checkListSlcItemCssClass);
	            }
	        }
	    };
	
	    /**
	     * Select filter options programmatically
	     * @param  {Number} colIndex Column index
	     * @param  {Array}  values   Array of option values to select
	     */
	
	
	    CheckList.prototype.selectOptions = function selectOptions(colIndex) {
	        var values = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	
	        var tf = this.tf;
	        if (tf.getFilterType(colIndex) !== tf.fltTypeCheckList || values.length === 0) {
	            return;
	        }
	        var flt = tf.getFilterElement(colIndex);
	
	        var lisNb = _dom2.default.tag(flt, 'li').length;
	
	        flt.setAttribute('value', '');
	        flt.setAttribute('indexes', '');
	
	        for (var k = 0; k < lisNb; k++) {
	            var li = _dom2.default.tag(flt, 'li')[k],
	                lbl = _dom2.default.tag(li, 'label')[0],
	                chk = _dom2.default.tag(li, 'input')[0],
	                lblTxt = _string2.default.matchCase(_dom2.default.getText(lbl), tf.caseSensitive);
	            if (lblTxt !== '' && _array2.default.has(values, lblTxt, tf.caseSensitive)) {
	                chk.checked = true;
	                this.setCheckListValues(chk);
	            } else {
	                chk.checked = false;
	                this.setCheckListValues(chk);
	            }
	        }
	    };
	
	    CheckList.prototype.destroy = function destroy() {
	        var _this7 = this;
	
	        this.emitter.off(['build-checklist-filter'], function (tf, colIndex, isExternal) {
	            return _this7.build(colIndex, isExternal);
	        });
	        this.emitter.off(['select-checklist-options'], function (tf, colIndex, values) {
	            return _this7.selectOptions(colIndex, values);
	        });
	    };
	
	    return CheckList;
	}(_feature.Feature);

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RowsCounter = undefined;
	
	var _feature = __webpack_require__(11);
	
	var _dom = __webpack_require__(2);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _types = __webpack_require__(4);
	
	var _types2 = _interopRequireDefault(_types);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RowsCounter = exports.RowsCounter = function (_Feature) {
	    _inherits(RowsCounter, _Feature);
	
	    /**
	     * Rows counter
	     * @param {Object} tf TableFilter instance
	     */
	
	    function RowsCounter(tf) {
	        _classCallCheck(this, RowsCounter);
	
	        // TableFilter configuration
	
	        var _this = _possibleConstructorReturn(this, _Feature.call(this, tf, 'rowsCounter'));
	
	        var f = _this.config;
	
	        //id of custom container element
	        _this.rowsCounterTgtId = f.rows_counter_target_id || null;
	        //element containing tot nb rows
	        _this.rowsCounterDiv = null;
	        //element containing tot nb rows label
	        _this.rowsCounterSpan = null;
	        //defines rows counter text
	        _this.rowsCounterText = f.rows_counter_text || 'Rows: ';
	        _this.fromToTextSeparator = f.from_to_text_separator || '-';
	        _this.overText = f.over_text || ' / ';
	        //defines css class rows counter
	        _this.totRowsCssClass = f.tot_rows_css_class || 'tot';
	        //rows counter div
	        _this.prfxCounter = 'counter_';
	        //nb displayed rows label
	        _this.prfxTotRows = 'totrows_span_';
	        //label preceding nb rows label
	        _this.prfxTotRowsTxt = 'totRowsTextSpan_';
	        //callback raised before counter is refreshed
	        _this.onBeforeRefreshCounter = _types2.default.isFn(f.on_before_refresh_counter) ? f.on_before_refresh_counter : null;
	        //callback raised after counter is refreshed
	        _this.onAfterRefreshCounter = _types2.default.isFn(f.on_after_refresh_counter) ? f.on_after_refresh_counter : null;
	        return _this;
	    }
	
	    RowsCounter.prototype.init = function init() {
	        var _this2 = this;
	
	        if (this.initialized) {
	            return;
	        }
	
	        var tf = this.tf;
	
	        //rows counter container
	        var countDiv = _dom2.default.create('div', ['id', this.prfxCounter + tf.id]);
	        countDiv.className = this.totRowsCssClass;
	        //rows counter label
	        var countSpan = _dom2.default.create('span', ['id', this.prfxTotRows + tf.id]);
	        var countText = _dom2.default.create('span', ['id', this.prfxTotRowsTxt + tf.id]);
	        countText.appendChild(_dom2.default.text(this.rowsCounterText));
	
	        // counter is added to defined element
	        if (!this.rowsCounterTgtId) {
	            tf.setToolbar();
	        }
	        var targetEl = !this.rowsCounterTgtId ? tf.lDiv : _dom2.default.id(this.rowsCounterTgtId);
	
	        //default container: 'lDiv'
	        if (!this.rowsCounterTgtId) {
	            countDiv.appendChild(countText);
	            countDiv.appendChild(countSpan);
	            targetEl.appendChild(countDiv);
	        } else {
	            //custom container, no need to append statusDiv
	            targetEl.appendChild(countText);
	            targetEl.appendChild(countSpan);
	        }
	        this.rowsCounterDiv = countDiv;
	        this.rowsCounterSpan = countSpan;
	
	        // subscribe to events
	        this.emitter.on(['after-filtering', 'grouped-by-page'], function () {
	            return _this2.refresh(tf.nbVisibleRows);
	        });
	        this.emitter.on(['rows-changed'], function () {
	            return _this2.refresh();
	        });
	
	        this.initialized = true;
	        this.refresh();
	    };
	
	    RowsCounter.prototype.refresh = function refresh(p) {
	        if (!this.initialized || !this.isEnabled()) {
	            return;
	        }
	
	        var tf = this.tf;
	
	        if (this.onBeforeRefreshCounter) {
	            this.onBeforeRefreshCounter.call(null, tf, this.rowsCounterSpan);
	        }
	
	        var totTxt;
	        if (!tf.paging) {
	            if (p && p !== '') {
	                totTxt = p;
	            } else {
	                totTxt = tf.nbFilterableRows - tf.nbHiddenRows;
	            }
	        } else {
	            var paging = tf.feature('paging');
	            if (paging) {
	                //paging start row
	                var paging_start_row = parseInt(paging.startPagingRow, 10) + (tf.nbVisibleRows > 0 ? 1 : 0);
	                var paging_end_row = paging_start_row + paging.pagingLength - 1 <= tf.nbVisibleRows ? paging_start_row + paging.pagingLength - 1 : tf.nbVisibleRows;
	                totTxt = paging_start_row + this.fromToTextSeparator + paging_end_row + this.overText + tf.nbVisibleRows;
	            }
	        }
	
	        this.rowsCounterSpan.innerHTML = totTxt;
	        if (this.onAfterRefreshCounter) {
	            this.onAfterRefreshCounter.call(null, tf, this.rowsCounterSpan, totTxt);
	        }
	    };
	
	    RowsCounter.prototype.destroy = function destroy() {
	        var _this3 = this;
	
	        if (!this.initialized) {
	            return;
	        }
	
	        if (!this.rowsCounterTgtId && this.rowsCounterDiv) {
	            _dom2.default.remove(this.rowsCounterDiv);
	        } else {
	            _dom2.default.id(this.rowsCounterTgtId).innerHTML = '';
	        }
	        this.rowsCounterSpan = null;
	        this.rowsCounterDiv = null;
	
	        // unsubscribe to events
	        this.emitter.off(['after-filtering', 'grouped-by-page'], function () {
	            return _this3.refresh(tf.nbVisibleRows);
	        });
	        this.emitter.off(['rows-changed'], function () {
	            return _this3.refresh();
	        });
	
	        this.initialized = false;
	    };
	
	    return RowsCounter;
	}(_feature.Feature);

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.StatusBar = undefined;
	
	var _feature = __webpack_require__(11);
	
	var _dom = __webpack_require__(2);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _types = __webpack_require__(4);
	
	var _types2 = _interopRequireDefault(_types);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var global = window;
	
	var StatusBar = exports.StatusBar = function (_Feature) {
	    _inherits(StatusBar, _Feature);
	
	    /**
	     * Status bar UI component
	     * @param {Object} tf TableFilter instance
	     */
	
	    function StatusBar(tf) {
	        _classCallCheck(this, StatusBar);
	
	        // Configuration object
	
	        var _this = _possibleConstructorReturn(this, _Feature.call(this, tf, 'statusBar'));
	
	        var f = _this.config;
	
	        //id of custom container element
	        _this.statusBarTgtId = f.status_bar_target_id || null;
	        //element containing status bar label
	        _this.statusBarDiv = null;
	        //status bar
	        _this.statusBarSpan = null;
	        //status bar label
	        _this.statusBarSpanText = null;
	        //defines status bar text
	        _this.statusBarText = f.status_bar_text || '';
	        //defines css class status bar
	        _this.statusBarCssClass = f.status_bar_css_class || 'status';
	        //delay for status bar clearing
	        _this.statusBarCloseDelay = 250;
	
	        //calls function before message is displayed
	        _this.onBeforeShowMsg = _types2.default.isFn(f.on_before_show_msg) ? f.on_before_show_msg : null;
	        //calls function after message is displayed
	        _this.onAfterShowMsg = _types2.default.isFn(f.on_after_show_msg) ? f.on_after_show_msg : null;
	
	        //status messages
	        _this.msgFilter = f.msg_filter || 'Filtering data...';
	        //populating drop-downs
	        _this.msgPopulate = f.msg_populate || 'Populating filter...';
	        //populating drop-downs
	        _this.msgPopulateCheckList = f.msg_populate_checklist || 'Populating list...';
	        //changing paging page
	        _this.msgChangePage = f.msg_change_page || 'Collecting paging data...';
	        //clearing filters
	        _this.msgClear = f.msg_clear || 'Clearing filters...';
	        //changing nb results/page
	        _this.msgChangeResults = f.msg_change_results || 'Changing results per page...';
	        //re-setting page
	        _this.msgResetPage = f.msg_reset_page || 'Re-setting page...';
	        //re-setting page length
	        _this.msgResetPageLength = f.msg_reset_page_length || 'Re-setting page length...';
	        //table sorting
	        _this.msgSort = f.msg_sort || 'Sorting data...';
	        //extensions loading
	        _this.msgLoadExtensions = f.msg_load_extensions || 'Loading extensions...';
	        //themes loading
	        _this.msgLoadThemes = f.msg_load_themes || 'Loading theme(s)...';
	
	        // status bar div
	        _this.prfxStatus = 'status_';
	        // status bar label
	        _this.prfxStatusSpan = 'statusSpan_';
	        // text preceding status bar label
	        _this.prfxStatusTxt = 'statusText_';
	        return _this;
	    }
	
	    StatusBar.prototype.init = function init() {
	        var _this2 = this;
	
	        if (this.initialized) {
	            return;
	        }
	
	        var tf = this.tf;
	        var emitter = this.emitter;
	
	        //status bar container
	        var statusDiv = _dom2.default.create('div', ['id', this.prfxStatus + tf.id]);
	        statusDiv.className = this.statusBarCssClass;
	
	        //status bar label
	        var statusSpan = _dom2.default.create('span', ['id', this.prfxStatusSpan + tf.id]);
	        //preceding text
	        var statusSpanText = _dom2.default.create('span', ['id', this.prfxStatusTxt + tf.id]);
	        statusSpanText.appendChild(_dom2.default.text(this.statusBarText));
	
	        // target element container
	        if (!this.statusBarTgtId) {
	            tf.setToolbar();
	        }
	        var targetEl = !this.statusBarTgtId ? tf.lDiv : _dom2.default.id(this.statusBarTgtId);
	
	        //default container: 'lDiv'
	        if (!this.statusBarTgtId) {
	            statusDiv.appendChild(statusSpanText);
	            statusDiv.appendChild(statusSpan);
	            targetEl.appendChild(statusDiv);
	        } else {
	            // custom container, no need to append statusDiv
	            targetEl.appendChild(statusSpanText);
	            targetEl.appendChild(statusSpan);
	        }
	
	        this.statusBarDiv = statusDiv;
	        this.statusBarSpan = statusSpan;
	        this.statusBarSpanText = statusSpanText;
	
	        // Subscribe to events
	        emitter.on(['before-filtering'], function () {
	            return _this2.message(_this2.msgFilter);
	        });
	        emitter.on(['before-populating-filter'], function () {
	            return _this2.message(_this2.msgPopulate);
	        });
	        emitter.on(['before-page-change'], function () {
	            return _this2.message(_this2.msgChangePage);
	        });
	        emitter.on(['before-clearing-filters'], function () {
	            return _this2.message(_this2.msgClear);
	        });
	        emitter.on(['before-page-length-change'], function () {
	            return _this2.message(_this2.msgChangeResults);
	        });
	        emitter.on(['before-reset-page'], function () {
	            return _this2.message(_this2.msgResetPage);
	        });
	        emitter.on(['before-reset-page-length'], function () {
	            return _this2.message(_this2.msgResetPageLength);
	        });
	        emitter.on(['before-loading-extensions'], function () {
	            return _this2.message(_this2.msgLoadExtensions);
	        });
	        emitter.on(['before-loading-themes'], function () {
	            return _this2.message(_this2.msgLoadThemes);
	        });
	
	        emitter.on(['after-filtering', 'after-populating-filter', 'after-page-change', 'after-clearing-filters', 'after-page-length-change', 'after-reset-page', 'after-reset-page-length', 'after-loading-extensions', 'after-loading-themes'], function () {
	            return _this2.message('');
	        });
	
	        this.initialized = true;
	    };
	
	    StatusBar.prototype.message = function message() {
	        var _this3 = this;
	
	        var t = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	
	        if (!this.isEnabled()) {
	            return;
	        }
	
	        if (this.onBeforeShowMsg) {
	            this.onBeforeShowMsg.call(null, this.tf, t);
	        }
	
	        var d = t === '' ? this.statusBarCloseDelay : 1;
	        global.setTimeout(function () {
	            if (!_this3.initialized) {
	                return;
	            }
	            _this3.statusBarSpan.innerHTML = t;
	            if (_this3.onAfterShowMsg) {
	                _this3.onAfterShowMsg.call(null, _this3.tf, t);
	            }
	        }, d);
	    };
	
	    StatusBar.prototype.destroy = function destroy() {
	        var _this4 = this;
	
	        if (!this.initialized) {
	            return;
	        }
	
	        var emitter = this.emitter;
	
	        this.statusBarDiv.innerHTML = '';
	        if (!this.statusBarTgtId) {
	            _dom2.default.remove(this.statusBarDiv);
	        }
	        this.statusBarSpan = null;
	        this.statusBarSpanText = null;
	        this.statusBarDiv = null;
	
	        // Unsubscribe to events
	        emitter.off(['before-filtering'], function () {
	            return _this4.message(_this4.msgFilter);
	        });
	        emitter.off(['before-populating-filter'], function () {
	            return _this4.message(_this4.msgPopulate);
	        });
	        emitter.off(['before-page-change'], function () {
	            return _this4.message(_this4.msgChangePage);
	        });
	        emitter.off(['before-clearing-filters'], function () {
	            return _this4.message(_this4.msgClear);
	        });
	        emitter.off(['before-page-length-change'], function () {
	            return _this4.message(_this4.msgChangeResults);
	        });
	        emitter.off(['before-reset-page'], function () {
	            return _this4.message(_this4.msgResetPage);
	        });
	        emitter.off(['before-reset-page-length'], function () {
	            return _this4.message(_this4.msgResetPageLength);
	        });
	        emitter.off(['before-loading-extensions'], function () {
	            return _this4.message(_this4.msgLoadExtensions);
	        });
	        emitter.off(['before-loading-themes'], function () {
	            return _this4.message(_this4.msgLoadThemes);
	        });
	
	        emitter.off(['after-filtering', 'after-populating-filter', 'after-page-change', 'after-clearing-filters', 'after-page-length-change', 'after-reset-page', 'after-reset-page-length', 'after-loading-extensions', 'after-loading-themes'], function () {
	            return _this4.message('');
	        });
	
	        this.initialized = false;
	    };
	
	    return StatusBar;
	}(_feature.Feature);

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Paging = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _feature = __webpack_require__(11);
	
	var _dom = __webpack_require__(2);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _types = __webpack_require__(4);
	
	var _types2 = _interopRequireDefault(_types);
	
	var _string = __webpack_require__(3);
	
	var _string2 = _interopRequireDefault(_string);
	
	var _event = __webpack_require__(1);
	
	var _event2 = _interopRequireDefault(_event);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Paging = exports.Paging = function (_Feature) {
	    _inherits(Paging, _Feature);
	
	    /**
	     * Pagination component
	     * @param {Object} tf TableFilter instance
	     */
	
	    function Paging(tf) {
	        _classCallCheck(this, Paging);
	
	        // Configuration object
	
	        var _this = _possibleConstructorReturn(this, _Feature.call(this, tf, 'paging'));
	
	        var f = _this.config;
	
	        //css class for paging buttons (previous,next,etc.)
	        _this.btnPageCssClass = f.paging_btn_css_class || 'pgInp';
	        //stores paging select element
	        _this.pagingSlc = null;
	        //results per page select element
	        _this.resultsPerPageSlc = null;
	        //id of container element
	        _this.pagingTgtId = f.paging_target_id || null;
	        //defines table paging length
	        _this.pagingLength = !isNaN(f.paging_length) ? f.paging_length : 10;
	        //id of container element
	        _this.resultsPerPageTgtId = f.results_per_page_target_id || null;
	        //css class for paging select element
	        _this.pgSlcCssClass = f.paging_slc_css_class || 'pgSlc';
	        //css class for paging input element
	        _this.pgInpCssClass = f.paging_inp_css_class || 'pgNbInp';
	        //stores results per page text and values
	        _this.resultsPerPage = f.results_per_page || null;
	        //enables/disables results per page drop-down
	        _this.hasResultsPerPage = _types2.default.isArray(_this.resultsPerPage);
	        //defines css class for results per page select
	        _this.resultsSlcCssClass = f.results_slc_css_class || 'rspg';
	        //css class for label preceding results per page select
	        _this.resultsSpanCssClass = f.results_span_css_class || 'rspgSpan';
	        //1st row index of current page
	        _this.startPagingRow = 0;
	        //total nb of pages
	        _this.nbPages = 0;
	        //current page nb
	        _this.currentPageNb = 1;
	        //defines next page button text
	        _this.btnNextPageText = f.btn_next_page_text || '>';
	        //defines previous page button text
	        _this.btnPrevPageText = f.btn_prev_page_text || '<';
	        //defines last page button text
	        _this.btnLastPageText = f.btn_last_page_text || '>|';
	        //defines first page button text
	        _this.btnFirstPageText = f.btn_first_page_text || '|<';
	        //defines next page button html
	        _this.btnNextPageHtml = f.btn_next_page_html || (!tf.enableIcons ? null : '<input type="button" value="" class="' + _this.btnPageCssClass + ' nextPage" title="Next page" />');
	        //defines previous page button html
	        _this.btnPrevPageHtml = f.btn_prev_page_html || (!tf.enableIcons ? null : '<input type="button" value="" class="' + _this.btnPageCssClass + ' previousPage" title="Previous page" />');
	        //defines last page button html
	        _this.btnFirstPageHtml = f.btn_first_page_html || (!tf.enableIcons ? null : '<input type="button" value="" class="' + _this.btnPageCssClass + ' firstPage" title="First page" />');
	        //defines previous page button html
	        _this.btnLastPageHtml = f.btn_last_page_html || (!tf.enableIcons ? null : '<input type="button" value="" class="' + _this.btnPageCssClass + ' lastPage" title="Last page" />');
	        //defines text preceeding page selector drop-down
	        _this.pageText = f.page_text || ' Page ';
	        //defines text after page selector drop-down
	        _this.ofText = f.of_text || ' of ';
	        //css class for span containing tot nb of pages
	        _this.nbPgSpanCssClass = f.nb_pages_css_class || 'nbpg';
	        //enables/disables paging buttons
	        _this.hasPagingBtns = f.paging_btns === false ? false : true;
	        //defines previous page button html
	        _this.pageSelectorType = f.page_selector_type || tf.fltTypeSlc;
	        //calls function before page is changed
	        _this.onBeforeChangePage = _types2.default.isFn(f.on_before_change_page) ? f.on_before_change_page : null;
	        //calls function before page is changed
	        _this.onAfterChangePage = _types2.default.isFn(f.on_after_change_page) ? f.on_after_change_page : null;
	
	        //pages select
	        _this.prfxSlcPages = 'slcPages_';
	        //results per page select
	        _this.prfxSlcResults = 'slcResults_';
	        //label preciding results per page select
	        _this.prfxSlcResultsTxt = 'slcResultsTxt_';
	        //span containing next page button
	        _this.prfxBtnNextSpan = 'btnNextSpan_';
	        //span containing previous page button
	        _this.prfxBtnPrevSpan = 'btnPrevSpan_';
	        //span containing last page button
	        _this.prfxBtnLastSpan = 'btnLastSpan_';
	        //span containing first page button
	        _this.prfxBtnFirstSpan = 'btnFirstSpan_';
	        //next button
	        _this.prfxBtnNext = 'btnNext_';
	        //previous button
	        _this.prfxBtnPrev = 'btnPrev_';
	        //last button
	        _this.prfxBtnLast = 'btnLast_';
	        //first button
	        _this.prfxBtnFirst = 'btnFirst_';
	        //span for tot nb pages
	        _this.prfxPgSpan = 'pgspan_';
	        //span preceding pages select (contains 'Page')
	        _this.prfxPgBeforeSpan = 'pgbeforespan_';
	        //span following pages select (contains ' of ')
	        _this.prfxPgAfterSpan = 'pgafterspan_';
	
	        var start_row = tf.refRow;
	        var nrows = tf.nbRows;
	        //calculates page nb
	        _this.nbPages = Math.ceil((nrows - start_row) / _this.pagingLength);
	
	        //Paging elements events
	        var o = _this;
	        // Paging DOM events
	        _this.evt = {
	            slcIndex: function slcIndex() {
	                return o.pageSelectorType === tf.fltTypeSlc ? o.pagingSlc.options.selectedIndex : parseInt(o.pagingSlc.value, 10) - 1;
	            },
	            nbOpts: function nbOpts() {
	                return o.pageSelectorType === tf.fltTypeSlc ? parseInt(o.pagingSlc.options.length, 10) - 1 : o.nbPages - 1;
	            },
	            next: function next() {
	                var nextIndex = o.evt.slcIndex() < o.evt.nbOpts() ? o.evt.slcIndex() + 1 : 0;
	                o.changePage(nextIndex);
	            },
	            prev: function prev() {
	                var prevIndex = o.evt.slcIndex() > 0 ? o.evt.slcIndex() - 1 : o.evt.nbOpts();
	                o.changePage(prevIndex);
	            },
	            last: function last() {
	                o.changePage(o.evt.nbOpts());
	            },
	            first: function first() {
	                o.changePage(0);
	            },
	            _detectKey: function _detectKey(e) {
	                var key = _event2.default.keyCode(e);
	                if (key === 13) {
	                    if (tf.sorted) {
	                        tf.filter();
	                        o.changePage(o.evt.slcIndex());
	                    } else {
	                        o.changePage();
	                    }
	                    this.blur();
	                }
	            },
	
	            slcPagesChange: null,
	            nextEvt: null,
	            prevEvt: null,
	            lastEvt: null,
	            firstEvt: null
	        };
	        return _this;
	    }
	
	    /**
	     * Initialize DOM elements
	     */
	
	
	    Paging.prototype.init = function init() {
	        var _this2 = this;
	
	        var slcPages;
	        var tf = this.tf;
	        var evt = this.evt;
	
	        if (this.initialized) {
	            return;
	        }
	
	        // Check resultsPerPage is in expected format and initialise the
	        // results per page component
	        if (this.hasResultsPerPage) {
	            if (this.resultsPerPage.length < 2) {
	                this.hasResultsPerPage = false;
	            } else {
	                this.pagingLength = this.resultsPerPage[1][0];
	                this.setResultsPerPage();
	            }
	        }
	
	        evt.slcPagesChange = function (event) {
	            var slc = event.target;
	            _this2.changePage(slc.selectedIndex);
	        };
	
	        // Paging drop-down list selector
	        if (this.pageSelectorType === tf.fltTypeSlc) {
	            slcPages = _dom2.default.create(tf.fltTypeSlc, ['id', this.prfxSlcPages + tf.id]);
	            slcPages.className = this.pgSlcCssClass;
	            _event2.default.add(slcPages, 'change', evt.slcPagesChange);
	        }
	
	        // Paging input selector
	        if (this.pageSelectorType === tf.fltTypeInp) {
	            slcPages = _dom2.default.create(tf.fltTypeInp, ['id', this.prfxSlcPages + tf.id], ['value', this.currentPageNb]);
	            slcPages.className = this.pgInpCssClass;
	            _event2.default.add(slcPages, 'keypress', evt._detectKey);
	        }
	
	        // btns containers
	        var btnNextSpan = _dom2.default.create('span', ['id', this.prfxBtnNextSpan + tf.id]);
	        var btnPrevSpan = _dom2.default.create('span', ['id', this.prfxBtnPrevSpan + tf.id]);
	        var btnLastSpan = _dom2.default.create('span', ['id', this.prfxBtnLastSpan + tf.id]);
	        var btnFirstSpan = _dom2.default.create('span', ['id', this.prfxBtnFirstSpan + tf.id]);
	
	        if (this.hasPagingBtns) {
	            // Next button
	            if (!this.btnNextPageHtml) {
	                var btn_next = _dom2.default.create(tf.fltTypeInp, ['id', this.prfxBtnNext + tf.id], ['type', 'button'], ['value', this.btnNextPageText], ['title', 'Next']);
	                btn_next.className = this.btnPageCssClass;
	                _event2.default.add(btn_next, 'click', evt.next);
	                btnNextSpan.appendChild(btn_next);
	            } else {
	                btnNextSpan.innerHTML = this.btnNextPageHtml;
	                _event2.default.add(btnNextSpan, 'click', evt.next);
	            }
	            // Previous button
	            if (!this.btnPrevPageHtml) {
	                var btn_prev = _dom2.default.create(tf.fltTypeInp, ['id', this.prfxBtnPrev + tf.id], ['type', 'button'], ['value', this.btnPrevPageText], ['title', 'Previous']);
	                btn_prev.className = this.btnPageCssClass;
	                _event2.default.add(btn_prev, 'click', evt.prev);
	                btnPrevSpan.appendChild(btn_prev);
	            } else {
	                btnPrevSpan.innerHTML = this.btnPrevPageHtml;
	                _event2.default.add(btnPrevSpan, 'click', evt.prev);
	            }
	            // Last button
	            if (!this.btnLastPageHtml) {
	                var btn_last = _dom2.default.create(tf.fltTypeInp, ['id', this.prfxBtnLast + tf.id], ['type', 'button'], ['value', this.btnLastPageText], ['title', 'Last']);
	                btn_last.className = this.btnPageCssClass;
	                _event2.default.add(btn_last, 'click', evt.last);
	                btnLastSpan.appendChild(btn_last);
	            } else {
	                btnLastSpan.innerHTML = this.btnLastPageHtml;
	                _event2.default.add(btnLastSpan, 'click', evt.last);
	            }
	            // First button
	            if (!this.btnFirstPageHtml) {
	                var btn_first = _dom2.default.create(tf.fltTypeInp, ['id', this.prfxBtnFirst + tf.id], ['type', 'button'], ['value', this.btnFirstPageText], ['title', 'First']);
	                btn_first.className = this.btnPageCssClass;
	                _event2.default.add(btn_first, 'click', evt.first);
	                btnFirstSpan.appendChild(btn_first);
	            } else {
	                btnFirstSpan.innerHTML = this.btnFirstPageHtml;
	                _event2.default.add(btnFirstSpan, 'click', evt.first);
	            }
	        }
	
	        // paging elements (buttons+drop-down list) are added to defined element
	        if (!this.pagingTgtId) {
	            tf.setToolbar();
	        }
	        var targetEl = !this.pagingTgtId ? tf.mDiv : _dom2.default.id(this.pagingTgtId);
	        targetEl.appendChild(btnFirstSpan);
	        targetEl.appendChild(btnPrevSpan);
	
	        var pgBeforeSpan = _dom2.default.create('span', ['id', this.prfxPgBeforeSpan + tf.id]);
	        pgBeforeSpan.appendChild(_dom2.default.text(this.pageText));
	        pgBeforeSpan.className = this.nbPgSpanCssClass;
	        targetEl.appendChild(pgBeforeSpan);
	        targetEl.appendChild(slcPages);
	        var pgAfterSpan = _dom2.default.create('span', ['id', this.prfxPgAfterSpan + tf.id]);
	        pgAfterSpan.appendChild(_dom2.default.text(this.ofText));
	        pgAfterSpan.className = this.nbPgSpanCssClass;
	        targetEl.appendChild(pgAfterSpan);
	        var pgspan = _dom2.default.create('span', ['id', this.prfxPgSpan + tf.id]);
	        pgspan.className = this.nbPgSpanCssClass;
	        pgspan.appendChild(_dom2.default.text(' ' + this.nbPages + ' '));
	        targetEl.appendChild(pgspan);
	        targetEl.appendChild(btnNextSpan);
	        targetEl.appendChild(btnLastSpan);
	        this.pagingSlc = _dom2.default.id(this.prfxSlcPages + tf.id);
	
	        if (!tf.rememberGridValues) {
	            this.setPagingInfo();
	        }
	        if (!tf.fltGrid) {
	            tf.validateAllRows();
	            this.setPagingInfo(tf.validRowsIndex);
	        }
	
	        this.emitter.on(['after-filtering'], function () {
	            return _this2.resetPagingInfo();
	        });
	        this.emitter.on(['initialized'], function () {
	            return _this2.resetValues();
	        });
	        this.emitter.on(['change-page'], function (tf, pageNumber) {
	            return _this2.setPage(pageNumber);
	        });
	        this.emitter.on(['change-page-results'], function (tf, pageLength) {
	            return _this2.changeResultsPerPage(pageLength);
	        });
	
	        this.initialized = true;
	    };
	
	    /**
	     * Reset paging when filters are already instantiated
	     * @param {Boolean} filterTable Execute filtering once paging instanciated
	     */
	
	
	    Paging.prototype.reset = function reset() {
	        var filterTable = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	
	        var tf = this.tf;
	        if (this.isEnabled()) {
	            return;
	        }
	        this.enable();
	        this.init();
	
	        if (filterTable) {
	            tf.filter();
	        }
	    };
	
	    /**
	     * Reset paging info from scratch after a filtering process
	     */
	
	
	    Paging.prototype.resetPagingInfo = function resetPagingInfo() {
	        this.startPagingRow = 0;
	        this.currentPageNb = 1;
	        this.setPagingInfo(this.tf.validRowsIndex);
	    };
	
	    /**
	     * Calculate number of pages based on valid rows
	     * Refresh paging select according to number of pages
	     * @param {Array} validRows Collection of valid rows
	     */
	
	
	    Paging.prototype.setPagingInfo = function setPagingInfo(validRows) {
	        var tf = this.tf;
	        var mdiv = !this.pagingTgtId ? tf.mDiv : _dom2.default.id(this.pagingTgtId);
	        var pgspan = _dom2.default.id(this.prfxPgSpan + tf.id);
	
	        //store valid rows indexes
	        tf.validRowsIndex = validRows || tf.getValidRows(true);
	
	        //calculate nb of pages
	        this.nbPages = Math.ceil(tf.validRowsIndex.length / this.pagingLength);
	        //refresh page nb span
	        pgspan.innerHTML = this.nbPages;
	        //select clearing shortcut
	        if (this.pageSelectorType === tf.fltTypeSlc) {
	            this.pagingSlc.innerHTML = '';
	        }
	
	        if (this.nbPages > 0) {
	            mdiv.style.visibility = 'visible';
	            if (this.pageSelectorType === tf.fltTypeSlc) {
	                for (var z = 0; z < this.nbPages; z++) {
	                    var opt = _dom2.default.createOpt(z + 1, z * this.pagingLength, false);
	                    this.pagingSlc.options[z] = opt;
	                }
	            } else {
	                //input type
	                this.pagingSlc.value = this.currentPageNb;
	            }
	        } else {
	            /*** if no results paging select and buttons are hidden ***/
	            mdiv.style.visibility = 'hidden';
	        }
	        this.groupByPage(tf.validRowsIndex);
	    };
	
	    /**
	     * Group table rows by page and display valid rows
	     * @param  {Array} validRows Collection of valid rows
	     */
	
	
	    Paging.prototype.groupByPage = function groupByPage(validRows) {
	        var tf = this.tf;
	        var rows = tf.tbl.rows;
	        var startPagingRow = parseInt(this.startPagingRow, 10);
	        var endPagingRow = startPagingRow + parseInt(this.pagingLength, 10);
	
	        //store valid rows indexes
	        if (validRows) {
	            tf.validRowsIndex = validRows;
	        }
	
	        //this loop shows valid rows of current page
	        for (var h = 0, len = tf.validRowsIndex.length; h < len; h++) {
	            var validRowIdx = tf.validRowsIndex[h];
	            var r = rows[validRowIdx];
	            var isRowValid = r.getAttribute('validRow');
	            var rowDisplayed = false;
	
	            if (h >= startPagingRow && h < endPagingRow) {
	                if (_types2.default.isNull(isRowValid) || Boolean(isRowValid === 'true')) {
	                    r.style.display = '';
	                    rowDisplayed = true;
	                }
	            } else {
	                r.style.display = 'none';
	            }
	            this.emitter.emit('row-paged', tf, validRowIdx, h, rowDisplayed);
	        }
	
	        tf.nbVisibleRows = tf.validRowsIndex.length;
	
	        // broadcast grouping by page
	        this.emitter.emit('grouped-by-page', tf, this);
	    };
	
	    /**
	     * Return the current page number
	     * @return {Number} Page number
	     */
	
	
	    Paging.prototype.getPage = function getPage() {
	        return this.currentPageNb;
	    };
	
	    /**
	     * Show page based on passed param value (string or number):
	     * @param {String}/{Number} cmd possible string values: 'next',
	     *   'previous', 'last', 'first' or page number as per param
	     */
	
	
	    Paging.prototype.setPage = function setPage(cmd) {
	        var tf = this.tf;
	        if (!tf.hasGrid() || !this.isEnabled()) {
	            return;
	        }
	        var btnEvt = this.evt,
	            cmdtype = typeof cmd === 'undefined' ? 'undefined' : _typeof(cmd);
	        if (cmdtype === 'string') {
	            switch (_string2.default.lower(cmd)) {
	                case 'next':
	                    btnEvt.next();
	                    break;
	                case 'previous':
	                    btnEvt.prev();
	                    break;
	                case 'last':
	                    btnEvt.last();
	                    break;
	                case 'first':
	                    btnEvt.first();
	                    break;
	                default:
	                    btnEvt.next();
	                    break;
	            }
	        } else if (cmdtype === 'number') {
	            this.changePage(cmd - 1);
	        }
	    };
	
	    /**
	     * Generates UI elements for the number of results per page drop-down
	     */
	
	
	    Paging.prototype.setResultsPerPage = function setResultsPerPage() {
	        var _this3 = this;
	
	        var tf = this.tf;
	        var evt = this.evt;
	
	        if (this.resultsPerPageSlc || !this.resultsPerPage) {
	            return;
	        }
	
	        evt.slcResultsChange = function (ev) {
	            _this3.onChangeResultsPerPage();
	            ev.target.blur();
	        };
	
	        var slcR = _dom2.default.create(tf.fltTypeSlc, ['id', this.prfxSlcResults + tf.id]);
	        slcR.className = this.resultsSlcCssClass;
	        var slcRText = this.resultsPerPage[0],
	            slcROpts = this.resultsPerPage[1];
	        var slcRSpan = _dom2.default.create('span', ['id', this.prfxSlcResultsTxt + tf.id]);
	        slcRSpan.className = this.resultsSpanCssClass;
	
	        // results per page select is added to external element
	        if (!this.resultsPerPageTgtId) {
	            tf.setToolbar();
	        }
	        var targetEl = !this.resultsPerPageTgtId ? tf.rDiv : _dom2.default.id(this.resultsPerPageTgtId);
	        slcRSpan.appendChild(_dom2.default.text(slcRText));
	
	        var help = tf.feature('help');
	        if (help && help.btn) {
	            help.btn.parentNode.insertBefore(slcRSpan, help.btn);
	            help.btn.parentNode.insertBefore(slcR, help.btn);
	        } else {
	            targetEl.appendChild(slcRSpan);
	            targetEl.appendChild(slcR);
	        }
	
	        for (var r = 0; r < slcROpts.length; r++) {
	            var currOpt = new Option(slcROpts[r], slcROpts[r], false, false);
	            slcR.options[r] = currOpt;
	        }
	        _event2.default.add(slcR, 'change', evt.slcResultsChange);
	        this.resultsPerPageSlc = slcR;
	    };
	
	    /**
	     * Remove number of results per page UI elements
	     */
	
	
	    Paging.prototype.removeResultsPerPage = function removeResultsPerPage() {
	        var tf = this.tf;
	        if (!tf.hasGrid() || !this.resultsPerPageSlc || !this.resultsPerPage) {
	            return;
	        }
	        var slcR = this.resultsPerPageSlc,
	            slcRSpan = _dom2.default.id(this.prfxSlcResultsTxt + tf.id);
	        if (slcR) {
	            _dom2.default.remove(slcR);
	        }
	        if (slcRSpan) {
	            _dom2.default.remove(slcRSpan);
	        }
	        this.resultsPerPageSlc = null;
	    };
	
	    /**
	     * Change the page according to passed index
	     * @param  {Number} index Index of the page (0-n)
	     */
	
	
	    Paging.prototype.changePage = function changePage(index) {
	        var tf = this.tf;
	
	        if (!this.isEnabled()) {
	            return;
	        }
	
	        this.emitter.emit('before-page-change', tf, index + 1);
	
	        if (index === null) {
	            index = this.pageSelectorType === tf.fltTypeSlc ? this.pagingSlc.options.selectedIndex : this.pagingSlc.value - 1;
	        }
	        if (index >= 0 && index <= this.nbPages - 1) {
	            if (this.onBeforeChangePage) {
	                this.onBeforeChangePage.call(null, this, index + 1);
	            }
	            this.currentPageNb = parseInt(index, 10) + 1;
	            if (this.pageSelectorType === tf.fltTypeSlc) {
	                this.pagingSlc.options[index].selected = true;
	            } else {
	                this.pagingSlc.value = this.currentPageNb;
	            }
	
	            this.startPagingRow = this.pageSelectorType === tf.fltTypeSlc ? this.pagingSlc.value : index * this.pagingLength;
	
	            this.groupByPage();
	
	            if (this.onAfterChangePage) {
	                this.onAfterChangePage.call(null, this, index + 1);
	            }
	        }
	
	        this.emitter.emit('after-page-change', tf, index + 1);
	    };
	
	    Paging.prototype.changeResultsPerPage = function changeResultsPerPage(val) {
	        if (!this.isEnabled() || isNaN(val)) {
	            return;
	        }
	
	        this.resultsPerPageSlc.value = val;
	        this.onChangeResultsPerPage();
	    };
	
	    /**
	     * Change rows according to page results drop-down
	     */
	
	
	    Paging.prototype.onChangeResultsPerPage = function onChangeResultsPerPage() {
	        var tf = this.tf;
	
	        if (!this.isEnabled()) {
	            return;
	        }
	
	        this.emitter.emit('before-page-length-change', tf);
	
	        var slcR = this.resultsPerPageSlc;
	        var slcIndex = slcR.selectedIndex;
	        var slcPagesSelIndex = this.pageSelectorType === tf.fltTypeSlc ? this.pagingSlc.selectedIndex : parseInt(this.pagingSlc.value - 1, 10);
	        this.pagingLength = parseInt(slcR.options[slcIndex].value, 10);
	        this.startPagingRow = this.pagingLength * slcPagesSelIndex;
	
	        if (!isNaN(this.pagingLength)) {
	            if (this.startPagingRow >= tf.nbFilterableRows) {
	                this.startPagingRow = tf.nbFilterableRows - this.pagingLength;
	            }
	            this.setPagingInfo();
	
	            if (this.pageSelectorType === tf.fltTypeSlc) {
	                var slcIdx = this.pagingSlc.options.length - 1 <= slcPagesSelIndex ? this.pagingSlc.options.length - 1 : slcPagesSelIndex;
	                this.pagingSlc.options[slcIdx].selected = true;
	            }
	        }
	
	        this.emitter.emit('after-page-length-change', tf, this.pagingLength);
	    };
	
	    /**
	     * Re-set persisted pagination info
	     */
	
	
	    Paging.prototype.resetValues = function resetValues() {
	        var tf = this.tf;
	        if (tf.rememberPageLen) {
	            this.resetPageLength();
	        }
	        if (tf.rememberPageNb) {
	            this.resetPage();
	        }
	    };
	
	    /**
	     * Re-set page nb at page re-load
	     */
	
	
	    Paging.prototype.resetPage = function resetPage() {
	        var tf = this.tf;
	        if (!this.isEnabled()) {
	            return;
	        }
	        this.emitter.emit('before-reset-page', tf);
	        var pgNb = tf.feature('store').getPageNb();
	        if (pgNb !== '') {
	            this.changePage(pgNb - 1);
	        }
	        this.emitter.emit('after-reset-page', tf, pgNb);
	    };
	
	    /**
	     * Re-set page length value at page re-load
	     */
	
	
	    Paging.prototype.resetPageLength = function resetPageLength() {
	        var tf = this.tf;
	        if (!this.isEnabled()) {
	            return;
	        }
	        this.emitter.emit('before-reset-page-length', tf);
	        var pglenIndex = tf.feature('store').getPageLength();
	
	        if (pglenIndex !== '') {
	            this.resultsPerPageSlc.options[pglenIndex].selected = true;
	            this.changeResultsPerPage();
	        }
	        this.emitter.emit('after-reset-page-length', tf, pglenIndex);
	    };
	
	    /**
	     * Remove paging feature
	     */
	
	
	    Paging.prototype.destroy = function destroy() {
	        var _this4 = this;
	
	        var tf = this.tf;
	
	        if (!this.initialized) {
	            return;
	        }
	        // btns containers
	        var btnNextSpan = _dom2.default.id(this.prfxBtnNextSpan + tf.id);
	        var btnPrevSpan = _dom2.default.id(this.prfxBtnPrevSpan + tf.id);
	        var btnLastSpan = _dom2.default.id(this.prfxBtnLastSpan + tf.id);
	        var btnFirstSpan = _dom2.default.id(this.prfxBtnFirstSpan + tf.id);
	        //span containing 'Page' text
	        var pgBeforeSpan = _dom2.default.id(this.prfxPgBeforeSpan + tf.id);
	        //span containing 'of' text
	        var pgAfterSpan = _dom2.default.id(this.prfxPgAfterSpan + tf.id);
	        //span containing nb of pages
	        var pgspan = _dom2.default.id(this.prfxPgSpan + tf.id);
	
	        var evt = this.evt;
	
	        if (this.pagingSlc) {
	            if (this.pageSelectorType === tf.fltTypeSlc) {
	                _event2.default.remove(this.pagingSlc, 'change', evt.slcPagesChange);
	            } else if (this.pageSelectorType === tf.fltTypeInp) {
	                _event2.default.remove(this.pagingSlc, 'keypress', evt._detectKey);
	            }
	            _dom2.default.remove(this.pagingSlc);
	        }
	
	        if (btnNextSpan) {
	            _event2.default.remove(btnNextSpan, 'click', evt.next);
	            _dom2.default.remove(btnNextSpan);
	        }
	
	        if (btnPrevSpan) {
	            _event2.default.remove(btnPrevSpan, 'click', evt.prev);
	            _dom2.default.remove(btnPrevSpan);
	        }
	
	        if (btnLastSpan) {
	            _event2.default.remove(btnLastSpan, 'click', evt.last);
	            _dom2.default.remove(btnLastSpan);
	        }
	
	        if (btnFirstSpan) {
	            _event2.default.remove(btnFirstSpan, 'click', evt.first);
	            _dom2.default.remove(btnFirstSpan);
	        }
	
	        if (pgBeforeSpan) {
	            _dom2.default.remove(pgBeforeSpan);
	        }
	
	        if (pgAfterSpan) {
	            _dom2.default.remove(pgAfterSpan);
	        }
	
	        if (pgspan) {
	            _dom2.default.remove(pgspan);
	        }
	
	        if (this.hasResultsPerPage) {
	            this.removeResultsPerPage();
	        }
	
	        this.emitter.off(['after-filtering'], function () {
	            return _this4.resetPagingInfo();
	        });
	        this.emitter.off(['initialized'], function () {
	            return _this4.resetValues();
	        });
	        this.emitter.off(['change-page'], function (tf, pageNumber) {
	            return _this4.setPage(pageNumber);
	        });
	        this.emitter.off(['change-page-results'], function (tf, pageLength) {
	            return _this4.changeResultsPerPage(pageLength);
	        });
	
	        this.pagingSlc = null;
	        this.nbPages = 0;
	        this.disable();
	        this.initialized = false;
	    };
	
	    return Paging;
	}(_feature.Feature);

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ClearButton = undefined;
	
	var _feature = __webpack_require__(11);
	
	var _dom = __webpack_require__(2);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _event = __webpack_require__(1);
	
	var _event2 = _interopRequireDefault(_event);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ClearButton = exports.ClearButton = function (_Feature) {
	    _inherits(ClearButton, _Feature);
	
	    /**
	     * Clear button component
	     * @param {Object} tf TableFilter instance
	     */
	
	    function ClearButton(tf) {
	        _classCallCheck(this, ClearButton);
	
	        // Configuration object
	
	        var _this = _possibleConstructorReturn(this, _Feature.call(this, tf, 'btnReset'));
	
	        var f = _this.config;
	
	        //id of container element
	        _this.btnResetTgtId = f.btn_reset_target_id || null;
	        //reset button element
	        _this.btnResetEl = null;
	        //defines reset text
	        _this.btnResetText = f.btn_reset_text || 'Reset';
	        //defines reset button tooltip
	        _this.btnResetTooltip = f.btn_reset_tooltip || 'Clear filters';
	        //defines reset button innerHtml
	        _this.btnResetHtml = f.btn_reset_html || (!tf.enableIcons ? null : '<input type="button" value="" class="' + tf.btnResetCssClass + '" ' + 'title="' + _this.btnResetTooltip + '" />');
	        //span containing reset button
	        _this.prfxResetSpan = 'resetspan_';
	        return _this;
	    }
	
	    ClearButton.prototype.onClick = function onClick() {
	        if (!this.isEnabled()) {
	            return;
	        }
	        this.tf.clearFilters();
	    };
	
	    /**
	     * Build DOM elements
	     */
	
	
	    ClearButton.prototype.init = function init() {
	        var _this2 = this;
	
	        var tf = this.tf;
	
	        if (this.initialized) {
	            return;
	        }
	
	        var resetspan = _dom2.default.create('span', ['id', this.prfxResetSpan + tf.id]);
	
	        // reset button is added to defined element
	        if (!this.btnResetTgtId) {
	            tf.setToolbar();
	        }
	        var targetEl = !this.btnResetTgtId ? tf.rDiv : _dom2.default.id(this.btnResetTgtId);
	        targetEl.appendChild(resetspan);
	
	        if (!this.btnResetHtml) {
	            var fltreset = _dom2.default.create('a', ['href', 'javascript:void(0);']);
	            fltreset.className = tf.btnResetCssClass;
	            fltreset.appendChild(_dom2.default.text(this.btnResetText));
	            resetspan.appendChild(fltreset);
	            _event2.default.add(fltreset, 'click', function () {
	                _this2.onClick();
	            });
	        } else {
	            resetspan.innerHTML = this.btnResetHtml;
	            var resetEl = resetspan.firstChild;
	            _event2.default.add(resetEl, 'click', function () {
	                _this2.onClick();
	            });
	        }
	        this.btnResetEl = resetspan.firstChild;
	
	        this.initialized = true;
	    };
	
	    /**
	     * Remove clear button UI
	     */
	
	
	    ClearButton.prototype.destroy = function destroy() {
	        var tf = this.tf;
	
	        if (!this.initialized) {
	            return;
	        }
	
	        var resetspan = _dom2.default.id(this.prfxResetSpan + tf.id);
	        if (resetspan) {
	            _dom2.default.remove(resetspan);
	        }
	        this.btnResetEl = null;
	        this.initialized = false;
	    };
	
	    return ClearButton;
	}(_feature.Feature);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Help = undefined;
	
	var _feature = __webpack_require__(11);
	
	var _dom = __webpack_require__(2);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _event = __webpack_require__(1);
	
	var _event2 = _interopRequireDefault(_event);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var WIKI_URL = 'https://github.com/koalyptus/TableFilter/wiki/' + '4.-Filter-operators';
	var WEBSITE_URL = 'http://koalyptus.github.io/TableFilter/';
	
	var Help = exports.Help = function (_Feature) {
	    _inherits(Help, _Feature);
	
	    /**
	     * Help UI component
	     * @param {Object} tf TableFilter instance
	     */
	
	    function Help(tf) {
	        _classCallCheck(this, Help);
	
	        var _this = _possibleConstructorReturn(this, _Feature.call(this, tf, 'help'));
	
	        var f = _this.config;
	
	        //id of custom container element for instructions
	        _this.tgtId = f.help_instructions_target_id || null;
	        //id of custom container element for instructions
	        _this.contTgtId = f.help_instructions_container_target_id || null;
	        //defines help text
	        _this.instrText = f.help_instructions_text ? f.help_instructions_text : 'Use the filters above each column to filter and limit table ' + 'data. Advanced searches can be performed by using the following ' + 'operators: <br /><b>&lt;</b>, <b>&lt;=</b>, <b>&gt;</b>, ' + '<b>&gt;=</b>, <b>=</b>, <b>*</b>, <b>!</b>, <b>{</b>, <b>}</b>, ' + '<b>||</b>,<b>&amp;&amp;</b>, <b>[empty]</b>, <b>[nonempty]</b>, ' + '<b>rgx:</b><br/><a href="' + WIKI_URL + '" target="_blank">' + 'Learn more</a><hr/>';
	        //defines help innerHtml
	        _this.instrHtml = f.help_instructions_html || null;
	        //defines reset button text
	        _this.btnText = f.help_instructions_btn_text || '?';
	        //defines reset button innerHtml
	        _this.btnHtml = f.help_instructions_btn_html || null;
	        //defines css class for help button
	        _this.btnCssClass = f.help_instructions_btn_css_class || 'helpBtn';
	        //defines css class for help container
	        _this.contCssClass = f.help_instructions_container_css_class || 'helpCont';
	        //help button element
	        _this.btn = null;
	        //help content div
	        _this.cont = null;
	        _this.defaultHtml = '<div class="helpFooter"><h4>TableFilter ' + 'v' + tf.version + '</h4>' + '<a href="' + WEBSITE_URL + '" target="_blank">' + WEBSITE_URL + '</a>' + '<br/><span>&copy;2015-' + tf.year + ' Max Guglielmi</span>' + '<div align="center" style="margin-top:8px;">' + '<a href="javascript:void(0);" class="close">Close</a></div></div>';
	
	        //id prefix for help elements
	        _this.prfxHelpSpan = 'helpSpan_';
	        //id prefix for help elements
	        _this.prfxHelpDiv = 'helpDiv_';
	
	        _this.emitter.on(['init-help'], function () {
	            return _this.init();
	        });
	        return _this;
	    }
	
	    Help.prototype.init = function init() {
	        var _this2 = this;
	
	        if (this.initialized) {
	            return;
	        }
	
	        var tf = this.tf;
	
	        var helpspan = _dom2.default.create('span', ['id', this.prfxHelpSpan + tf.id]);
	        var helpdiv = _dom2.default.create('div', ['id', this.prfxHelpDiv + tf.id]);
	
	        //help button is added to defined element
	        if (!this.tgtId) {
	            tf.setToolbar();
	        }
	        var targetEl = !this.tgtId ? tf.rDiv : _dom2.default.id(this.tgtId);
	        targetEl.appendChild(helpspan);
	
	        var divContainer = !this.contTgtId ? helpspan : _dom2.default.id(this.contTgtId);
	
	        if (!this.btnHtml) {
	            divContainer.appendChild(helpdiv);
	            var helplink = _dom2.default.create('a', ['href', 'javascript:void(0);']);
	            helplink.className = this.btnCssClass;
	            helplink.appendChild(_dom2.default.text(this.btnText));
	            helpspan.appendChild(helplink);
	            _event2.default.add(helplink, 'click', function () {
	                _this2.toggle();
	            });
	        } else {
	            helpspan.innerHTML = this.btnHtml;
	            var helpEl = helpspan.firstChild;
	            _event2.default.add(helpEl, 'click', function () {
	                _this2.toggle();
	            });
	            divContainer.appendChild(helpdiv);
	        }
	
	        if (!this.instrHtml) {
	            helpdiv.innerHTML = this.instrText;
	            helpdiv.className = this.contCssClass;
	            _event2.default.add(helpdiv, 'dblclick', function () {
	                _this2.toggle();
	            });
	        } else {
	            if (this.contTgtId) {
	                divContainer.appendChild(helpdiv);
	            }
	            helpdiv.innerHTML = this.instrHtml;
	            if (!this.contTgtId) {
	                helpdiv.className = this.contCssClass;
	                _event2.default.add(helpdiv, 'dblclick', function () {
	                    _this2.toggle();
	                });
	            }
	        }
	        helpdiv.innerHTML += this.defaultHtml;
	        _event2.default.add(helpdiv, 'click', function () {
	            _this2.toggle();
	        });
	
	        this.cont = helpdiv;
	        this.btn = helpspan;
	        this.initialized = true;
	    };
	
	    /**
	     * Toggle help pop-up
	     */
	
	
	    Help.prototype.toggle = function toggle() {
	        // check only if explicitily set to false as in this case undefined
	        // signifies the help feature is enabled by default
	        if (this.enabled === false) {
	            return;
	        }
	        var divDisplay = this.cont.style.display;
	        if (divDisplay === '' || divDisplay === 'none') {
	            this.cont.style.display = 'inline';
	        } else {
	            this.cont.style.display = 'none';
	        }
	    };
	
	    /**
	     * Remove help UI
	     */
	
	
	    Help.prototype.destroy = function destroy() {
	        if (!this.initialized) {
	            return;
	        }
	        _dom2.default.remove(this.btn);
	        this.btn = null;
	        if (!this.cont) {
	            return;
	        }
	        _dom2.default.remove(this.cont);
	        this.cont = null;
	        this.initialized = false;
	    };
	
	    return Help;
	}(_feature.Feature);

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AlternateRows = undefined;
	
	var _feature = __webpack_require__(11);
	
	var _dom = __webpack_require__(2);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AlternateRows = exports.AlternateRows = function (_Feature) {
	    _inherits(AlternateRows, _Feature);
	
	    /**
	     * Alternating rows color
	     * @param {Object} tf TableFilter instance
	     */
	
	    function AlternateRows(tf) {
	        _classCallCheck(this, AlternateRows);
	
	        var _this = _possibleConstructorReturn(this, _Feature.call(this, tf, 'alternateRows'));
	
	        var config = _this.config;
	        //defines css class for even rows
	        _this.evenCss = config.even_row_css_class || 'even';
	        //defines css class for odd rows
	        _this.oddCss = config.odd_row_css_class || 'odd';
	        return _this;
	    }
	
	    /**
	     * Sets alternating rows color
	     */
	
	
	    AlternateRows.prototype.init = function init() {
	        var _this2 = this;
	
	        if (this.initialized) {
	            return;
	        }
	
	        this.processAll();
	
	        // Subscribe to events
	        this.emitter.on(['row-processed', 'row-paged'], function (tf, rowIndex, arrIndex, isValid) {
	            return _this2.processRow(rowIndex, arrIndex, isValid);
	        });
	        this.emitter.on(['column-sorted'], function () {
	            return _this2.processAll();
	        });
	
	        this.initialized = true;
	    };
	
	    AlternateRows.prototype.processAll = function processAll() {
	        if (!this.isEnabled()) {
	            return;
	        }
	        var tf = this.tf;
	        var validRowsIndex = tf.getValidRows(true);
	        var noValidRowsIndex = validRowsIndex.length === 0;
	        //1st index
	        var beginIndex = noValidRowsIndex ? tf.refRow : 0;
	        // nb indexes
	        var indexLen = noValidRowsIndex ? tf.nbFilterableRows + beginIndex : validRowsIndex.length;
	        var idx = 0;
	
	        //alternates bg color
	        for (var j = beginIndex; j < indexLen; j++) {
	            var rowIdx = noValidRowsIndex ? j : validRowsIndex[j];
	            this.setRowBg(rowIdx, idx);
	            idx++;
	        }
	    };
	
	    /**
	     * Set/remove row background based on row validation
	     * @param  {Number}  rowIdx  Row index
	     * @param  {Number}  arrIdx  Array index
	     * @param  {Boolean} isValid Valid row flag
	     */
	
	
	    AlternateRows.prototype.processRow = function processRow(rowIdx, arrIdx, isValid) {
	        if (isValid) {
	            this.setRowBg(rowIdx, arrIdx);
	        } else {
	            this.removeRowBg(rowIdx);
	        }
	    };
	
	    /**
	     * Sets row background color
	     * @param {Number} rowIdx Row index
	     * @param {Number} idx    Valid rows collection index needed to calculate bg
	     * color
	     */
	
	
	    AlternateRows.prototype.setRowBg = function setRowBg(rowIdx, idx) {
	        if (!this.isEnabled() || isNaN(rowIdx)) {
	            return;
	        }
	        var rows = this.tf.tbl.rows;
	        var i = isNaN(idx) ? rowIdx : idx;
	        this.removeRowBg(rowIdx);
	
	        _dom2.default.addClass(rows[rowIdx], i % 2 ? this.evenCss : this.oddCss);
	    };
	
	    /**
	     * Removes row background color
	     * @param  {Number} idx Row index
	     */
	
	
	    AlternateRows.prototype.removeRowBg = function removeRowBg(idx) {
	        if (isNaN(idx)) {
	            return;
	        }
	        var rows = this.tf.tbl.rows;
	        _dom2.default.removeClass(rows[idx], this.oddCss);
	        _dom2.default.removeClass(rows[idx], this.evenCss);
	    };
	
	    /**
	     * Removes all alternating backgrounds
	     */
	
	
	    AlternateRows.prototype.destroy = function destroy() {
	        var _this3 = this;
	
	        if (!this.initialized) {
	            return;
	        }
	        for (var i = 0; i < this.tf.nbRows; i++) {
	            this.removeRowBg(i);
	        }
	
	        // Unsubscribe to events
	        this.emitter.off(['row-processed', 'row-paged'], function (tf, rowIndex, arrIndex, isValid) {
	            return _this3.processRow(rowIndex, arrIndex, isValid);
	        });
	        this.emitter.off(['column-sorted'], function () {
	            return _this3.processAll();
	        });
	
	        this.initialized = false;
	    };
	
	    return AlternateRows;
	}(_feature.Feature);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NoResults = undefined;
	
	var _feature = __webpack_require__(11);
	
	var _dom = __webpack_require__(2);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _types = __webpack_require__(4);
	
	var _types2 = _interopRequireDefault(_types);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NoResults = exports.NoResults = function (_Feature) {
	    _inherits(NoResults, _Feature);
	
	    /**
	     * No results message UI component
	     * @param {Object} tf TableFilter instance
	     */
	
	    function NoResults(tf) {
	        _classCallCheck(this, NoResults);
	
	        //configuration object
	
	        var _this = _possibleConstructorReturn(this, _Feature.call(this, tf, 'noResults'));
	
	        var f = _this.config.no_results_message;
	
	        _this.content = f.content || 'No results';
	        _this.customContainer = f.custom_container || null;
	        _this.customContainerId = f.custom_container_id || null;
	        _this.isExternal = !_types2.default.isEmpty(_this.customContainer) || !_types2.default.isEmpty(_this.customContainerId);
	        _this.cssClass = f.css_class || 'no-results';
	
	        _this.cont = null;
	
	        //callback before message is displayed
	        _this.onBeforeShowMsg = _types2.default.isFn(f.on_before_show_msg) ? f.on_before_show_msg : null;
	        //callback after message is displayed
	        _this.onAfterShowMsg = _types2.default.isFn(f.on_after_show_msg) ? f.on_after_show_msg : null;
	        //callback before message is hidden
	        _this.onBeforeHideMsg = _types2.default.isFn(f.on_before_hide_msg) ? f.on_before_hide_msg : null;
	        //callback after message is hidden
	        _this.onAfterHideMsg = _types2.default.isFn(f.on_after_hide_msg) ? f.on_after_hide_msg : null;
	
	        _this.prfxNoResults = 'nores_';
	        return _this;
	    }
	
	    NoResults.prototype.init = function init() {
	        var _this2 = this;
	
	        if (this.initialized) {
	            return;
	        }
	        var tf = this.tf;
	        var target = this.customContainer || _dom2.default.id(this.customContainerId) || tf.tbl;
	
	        //container
	        var cont = _dom2.default.create('div', ['id', this.prfxNoResults + tf.id]);
	        cont.className = this.cssClass;
	        cont.innerHTML = this.content;
	
	        if (this.isExternal) {
	            target.appendChild(cont);
	        } else {
	            target.parentNode.insertBefore(cont, target.nextSibling);
	        }
	
	        this.cont = cont;
	
	        // subscribe to after-filtering event
	        this.emitter.on(['after-filtering'], function () {
	            return _this2.toggle();
	        });
	
	        this.initialized = true;
	        this.hide();
	    };
	
	    NoResults.prototype.toggle = function toggle() {
	        if (this.tf.nbVisibleRows > 0) {
	            this.hide();
	        } else {
	            this.show();
	        }
	    };
	
	    NoResults.prototype.show = function show() {
	        if (!this.initialized || !this.isEnabled()) {
	            return;
	        }
	
	        if (this.onBeforeShowMsg) {
	            this.onBeforeShowMsg.call(null, this.tf, this);
	        }
	
	        this.setWidth();
	        this.cont.style.display = 'block';
	
	        if (this.onAfterShowMsg) {
	            this.onAfterShowMsg.call(null, this.tf, this);
	        }
	    };
	
	    NoResults.prototype.hide = function hide() {
	        if (!this.initialized || !this.isEnabled()) {
	            return;
	        }
	
	        if (this.onBeforeHideMsg) {
	            this.onBeforeHideMsg.call(null, this.tf, this);
	        }
	
	        this.cont.style.display = 'none';
	
	        if (this.onBeforeHideMsg) {
	            this.onBeforeHideMsg.call(null, this.tf, this);
	        }
	    };
	
	    NoResults.prototype.setWidth = function setWidth() {
	        if (!this.initialized || this.isExternal || !this.isEnabled()) {
	            return;
	        }
	        if (this.tf.gridLayout) {
	            var gridLayout = this.tf.feature('gridLayout');
	            this.cont.style.width = gridLayout.tblCont.clientWidth + 'px';
	        } else {
	            this.cont.style.width = this.tf.tbl.clientWidth + 'px';
	        }
	    };
	
	    NoResults.prototype.destroy = function destroy() {
	        var _this3 = this;
	
	        if (!this.initialized) {
	            return;
	        }
	        _dom2.default.remove(this.cont);
	        this.cont = null;
	        // unsubscribe to after-filtering event
	        this.emitter.off(['after-filtering'], function () {
	            return _this3.toggle();
	        });
	
	        this.initialized = false;
	    };
	
	    return NoResults;
	}(_feature.Feature);

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.State = undefined;
	
	var _feature = __webpack_require__(11);
	
	var _hash = __webpack_require__(27);
	
	var _string = __webpack_require__(3);
	
	var _string2 = _interopRequireDefault(_string);
	
	var _types = __webpack_require__(4);
	
	var _types2 = _interopRequireDefault(_types);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Reflects the state of features to be persisted via hash, localStorage or
	 * cookie
	 *
	 * @export
	 * @class State
	 * @extends {Feature}
	 */
	
	var State = exports.State = function (_Feature) {
	    _inherits(State, _Feature);
	
	    /**
	     * Creates an instance of State
	     *
	     * @param {TableFilter} tf TableFilter instance
	     */
	
	    function State(tf) {
	        _classCallCheck(this, State);
	
	        var _this = _possibleConstructorReturn(this, _Feature.call(this, tf, 'state'));
	
	        var cfg = _this.config.state;
	
	        _this.enableHash = cfg.type && cfg.type.indexOf('hash') !== -1;
	        _this.persistFilters = cfg.filters === false ? false : true;
	        _this.persistPageNumber = Boolean(cfg.page_number);
	        _this.persistPageLength = Boolean(cfg.page_length);
	
	        _this.hash = null;
	        _this.pageNb = null;
	        _this.pageLength = null;
	
	        _this.state = {};
	        _this.prfxCol = 'col_';
	        _this.pageNbKey = 'page';
	        _this.pageLengthKey = 'page_length';
	        return _this;
	    }
	
	    /**
	     * Initializes the State object
	     */
	
	
	    State.prototype.init = function init() {
	        var _this2 = this;
	
	        if (this.initialized) {
	            return;
	        }
	
	        this.emitter.on(['after-filtering'], function () {
	            return _this2.update();
	        });
	        this.emitter.on(['after-page-change'], function (tf, pageNb) {
	            return _this2.updatePage(pageNb);
	        });
	        this.emitter.on(['after-page-length-change'], function (tf, index) {
	            return _this2.updatePageLength(index);
	        });
	
	        if (this.enableHash) {
	            this.hash = new _hash.Hash(this);
	            this.hash.init();
	        }
	        this.initialized = true;
	    };
	
	    /**
	     * Update state field based on current features state
	     */
	
	
	    State.prototype.update = function update() {
	        var _this3 = this;
	
	        if (!this.isEnabled()) {
	            return;
	        }
	        var tf = this.tf;
	
	        if (this.persistFilters) {
	            var filterValues = tf.getFiltersValue();
	
	            filterValues.forEach(function (val, idx) {
	                var key = '' + _this3.prfxCol + idx;
	
	                if (_types2.default.isString(val) && _string2.default.isEmpty(val)) {
	                    if (_this3.state.hasOwnProperty(key)) {
	                        _this3.state[key] = undefined;
	                    }
	                } else {
	                    _this3.state[key] = _this3.state[key] || {};
	                    _this3.state[key].flt = val;
	                }
	            });
	        }
	
	        if (this.persistPageNumber) {
	            if (_types2.default.isNull(this.pageNb)) {
	                this.state[this.pageNbKey] = undefined;
	            } else {
	                this.state[this.pageNbKey] = this.pageNb;
	            }
	        }
	
	        if (this.persistPageLength) {
	            if (_types2.default.isNull(this.pageLength)) {
	                this.state[this.pageLengthKey] = undefined;
	            } else {
	                this.state[this.pageLengthKey] = this.pageLength;
	            }
	        }
	
	        this.emitter.emit('state-changed', tf, this.state);
	    };
	
	    /**
	     * Refresh page number field on page number change
	     *
	     * @param pageNb Current page number
	     */
	
	
	    State.prototype.updatePage = function updatePage(pageNb) {
	        this.pageNb = pageNb;
	        this.update();
	    };
	
	    /**
	     * Refresh page length field on page length change
	     *
	     * @param pageLength Current page length value
	     */
	
	
	    State.prototype.updatePageLength = function updatePageLength(pageLength) {
	        this.pageLength = pageLength;
	        this.update();
	    };
	
	    /**
	     * Override state field
	     *
	     * @param state State object
	     */
	
	
	    State.prototype.override = function override(state) {
	        this.state = state;
	    };
	
	    /**
	     * Apply current features state
	     */
	
	
	    State.prototype.sync = function sync() {
	        var _this4 = this;
	
	        var state = this.state;
	        var tf = this.tf;
	
	        if (this.persistFilters) {
	            Object.keys(state).forEach(function (key) {
	                if (key.indexOf(_this4.prfxCol) !== -1) {
	                    var colIdx = parseInt(key.replace(_this4.prfxCol, ''), 10);
	                    var val = state[key].flt;
	                    tf.setFilterValue(colIdx, val);
	                }
	            });
	
	            tf.filter();
	        }
	
	        if (this.persistPageNumber) {
	            var pageNumber = state[this.pageNbKey];
	            this.emitter.emit('change-page', this.tf, pageNumber);
	        }
	
	        if (this.persistPageLength) {
	            var pageLength = state[this.pageLengthKey];
	            this.emitter.emit('change-page-results', this.tf, pageLength);
	        }
	    };
	
	    /**
	     * Destroy State instance
	     */
	
	
	    State.prototype.destroy = function destroy() {
	        var _this5 = this;
	
	        if (!this.initialized) {
	            return;
	        }
	
	        this.state = {};
	
	        this.emitter.off(['after-filtering'], function () {
	            return _this5.update();
	        });
	        this.emitter.off(['after-page-change'], function (tf, pageNb) {
	            return _this5.updatePage(pageNb);
	        });
	        this.emitter.off(['after-page-length-change'], function (tf, index) {
	            return _this5.updatePageLength(index);
	        });
	
	        if (this.enableHash) {
	            this.hash.destroy();
	            this.hash = null;
	        }
	
	        this.initialized = false;
	    };
	
	    return State;
	}(_feature.Feature);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Hash = exports.hasHashChange = undefined;
	
	var _event = __webpack_require__(1);
	
	var _event2 = _interopRequireDefault(_event);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var global = window;
	var JSON = global.JSON;
	var location = global.location;
	
	var hasHashChange = exports.hasHashChange = function hasHashChange() {
	    var docMode = global.documentMode;
	    return 'onhashchange' in global && (docMode === undefined || docMode > 7);
	};
	
	/**
	 * Manages the URL hash reflecting the features state to be persisted
	 *
	 * @export
	 * @class Hash
	 */
	
	var Hash = exports.Hash = function () {
	
	    /**
	     * Creates an instance of Hash
	     *
	     * @param {State} state Instance of State
	     */
	
	    function Hash(state) {
	        _classCallCheck(this, Hash);
	
	        this.state = state;
	        this.lastHash = null;
	        this.emitter = state.emitter;
	    }
	
	    /**
	     * Initializes the Hash object
	     */
	
	
	    Hash.prototype.init = function init() {
	        var _this = this;
	
	        if (!hasHashChange()) {
	            return;
	        }
	
	        this.lastHash = location.hash;
	
	        this.emitter.on(['state-changed'], function (tf, state) {
	            return _this.update(state);
	        });
	        this.emitter.on(['initialized'], function () {
	            return _this.sync();
	        });
	        _event2.default.add(global, 'hashchange', function () {
	            return _this.sync();
	        });
	    };
	
	    /**
	     * Updates the URL hash based on a state change
	     *
	     * @param {State} state Instance of State
	     */
	
	
	    Hash.prototype.update = function update(state) {
	        var hash = '#' + JSON.stringify(state);
	        // console.log(hash, this.lastHash, this.lastHash === hash);
	        if (this.lastHash === hash) {
	            return;
	        }
	
	        location.hash = hash;
	        this.lastHash = hash;
	    };
	
	    /**
	     * Converts a URL hash into a JSON object
	     *
	     * @param {String} hash URL hash fragment
	     * @returns {Object} JSON object
	     */
	
	
	    Hash.prototype.parse = function parse(hash) {
	        if (hash.indexOf('#') === -1) {
	            return null;
	        }
	        hash = hash.substr(1);
	        return JSON.parse(hash);
	    };
	
	    /**
	     * Applies current hash state to features
	     */
	
	
	    Hash.prototype.sync = function sync() {
	        var state = this.parse(location.hash);
	        if (!state) {
	            return;
	        }
	
	        // To prevent state to react to features changes, state is temporarily
	        // disabled
	        this.state.disable();
	        // State is overriden with hash state object
	        this.state.override(state);
	        // New hash state is applied to features
	        this.state.sync();
	        // State is re-enabled
	        this.state.enable();
	    };
	
	    /**
	     * Destroy Hash instance
	     */
	
	
	    Hash.prototype.destroy = function destroy() {
	        var _this2 = this;
	
	        this.state = null;
	        this.lastHash = null;
	        this.emitter = null;
	
	        this.emitter.off(['state-changed'], function (tf, state) {
	            return _this2.update(state);
	        });
	        this.emitter.off(['initialized'], function () {
	            return _this2.sync();
	        });
	        _event2.default.remove(global, 'hashchange', function () {
	            return _this2.sync();
	        });
	    };
	
	    return Hash;
	}();

/***/ }
/******/ ])
});
;
//# sourceMappingURL=tablefilter.js.map