

function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');
var reactFontawesome = require('@fortawesome/react-fontawesome');
var react = require('react');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var i18n = {
	"en-EN": {
		show: "Show",
		showing: "Showing",
		entries: "Entries",
		search: "Search",
		previous: "Previous",
		next: "Next",
		dataEmpty: "Database is empty",
		noResult: "No matching records found",
		to: "to",
		of: "of",
		element: "entries",
		filterdFrom: "filtered from",
		totalElements: "total entries"
	},
	"fr-FR": {
		show: "Afficher",
		showing: "Affichage de",
		entries: "Entrées",
		search: "Recherche",
		previous: "Précédent",
		next: "Suivant",
		dataEmpty: "La base de données est vide",
		noResult: "Aucun résultats trouvé",
		to: "à",
		of: "des",
		element: "éléments",
		filterdFrom: "filtré par",
		totalElements: "éléments au total"
	}
};
var jsonTranslate = {
	i18n: i18n
};

___$insertStyle(".table-data {\n  font-size: 0.7rem;\n  color: var(--secondary-color) !important;\n  width: 100%;\n  font-family: Arial, Helvetica, sans-serif;\n}\n.table-data input, .table-data select {\n  border: 1px solid rgba(128, 128, 128, 0.3);\n  border-radius: 5px;\n  color: var(--secondary-color);\n  padding: 3px 5px;\n}\n.table-data input:focus, .table-data select:focus {\n  outline-color: var(--primary-color);\n}\n.table-data__empty {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 30px;\n  align-items: center;\n  width: 100%;\n  margin-top: 50px;\n}\n.table-data__empty i {\n  opacity: 0.5;\n}\n.table-data__container {\n  overflow: auto;\n  max-height: 490px;\n  max-width: 100%;\n  width: 100%;\n}\n.table-data__filter {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-bottom: 15px;\n  font-weight: bold;\n}\n.table-data__filter__count label, .table-data__filter__search {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.table-data__table {\n  margin-bottom: 0;\n  max-width: none;\n  width: 100%;\n}\n.table-data__table__header {\n  font-size: 0.82rem;\n  line-height: 2rem;\n  font-weight: bold;\n  position: sticky;\n  top: 0;\n  background-color: white !important;\n  z-index: 3;\n}\n.table-data__table__header__legend {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  color: var(--primary-color) !important;\n  cursor: pointer;\n}\n.table-data__table__header__legend__controls {\n  display: flex;\n  flex-direction: column;\n}\n.table-data__table__header__legend__controls i {\n  line-height: 5px;\n  opacity: 0.3;\n  cursor: pointer;\n  transition: opacity 0.15s ease-in-out;\n}\n.table-data__table__header__legend__controls i:hover {\n  opacity: 1;\n}\n.table-data__table__header__legend__controls i.active {\n  color: var(--primary-color);\n  opacity: 1;\n}\n.table-data__table__header td {\n  white-space: nowrap;\n}\n.table-data__table td {\n  padding: 5px 10px;\n  text-align: center;\n  vertical-align: middle;\n}\n.table-data__table td.no-result {\n  font-size: 1rem;\n  font-weight: bold;\n}\n.table-data__table .table-white {\n  background-color: white;\n}\n.table-data__table .table-color {\n  position: relative;\n  background-color: white;\n}\n.table-data__table .table-color::after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  background-color: var(--primary-color) !important;\n  opacity: 0.12;\n  z-index: 1;\n}\n.table-data__infos {\n  margin-top: 10px;\n}\n.table-data__pagination {\n  padding: 20px;\n  padding-bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  font-weight: bold;\n  min-height: 40px;\n}\n.table-data__pagination__controler {\n  cursor: pointer;\n  display: block;\n  user-select: none;\n}\n.table-data__pagination__controler.disable {\n  pointer-events: none;\n  opacity: 0.3;\n}\n.table-data__pagination__pages {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  margin: 0;\n  padding: 0;\n}\n.table-data__pagination__pages li {\n  position: relative;\n  display: block;\n  height: 20px;\n  width: 20px;\n  text-align: center;\n  line-height: 20px;\n  border: 1px solid;\n  border-radius: 50%;\n  cursor: pointer;\n  user-select: none;\n  transition: all 0.15s ease-in-out;\n}\n.table-data__pagination__pages li:hover {\n  color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n.table-data__pagination__pages li.current {\n  pointer-events: none;\n  border-color: var(--primary-color);\n  background-color: var(--primary-color);\n  color: white;\n}");

exports.TablDataFilterSortType = void 0;
(function (TablDataFilterSortType) {
    TablDataFilterSortType[TablDataFilterSortType["asc"] = 0] = "asc";
    TablDataFilterSortType[TablDataFilterSortType["desc"] = 1] = "desc";
    TablDataFilterSortType[TablDataFilterSortType["none"] = 2] = "none";
})(exports.TablDataFilterSortType || (exports.TablDataFilterSortType = {}));
var TableData = function (_a) {
    var listObjectsData = _a.listObjectsData, listLegend = _a.listLegend, _b = _a.lang, lang = _b === void 0 ? 'en-EN' : _b, _c = _a.color, color = _c === void 0 ? 'grey' : _c, textColor = _a.textColor, className = _a.className;
    var i18n = new Map(Object.entries(jsonTranslate.i18n));
    var translate = i18n.get(lang) ? new Map(Object.entries(i18n.get(lang))) : new Map(Object.entries(i18n.get('fr-FR')));
    var defaultEntrieCountValue = 10;
    var _d = react.useState([]), filterListObjectsData = _d[0], setFilterListObjectsData = _d[1];
    var _e = react.useState(), arraySortSelected = _e[0], setArraySortSelected = _e[1];
    var _f = react.useState(defaultEntrieCountValue), entriesCount = _f[0], setEntriesCount = _f[1];
    var _g = react.useState(1), currentPage = _g[0], setCurrentPage = _g[1];
    var _h = react.useState(1), nbrPages = _h[0], setNbrPages = _h[1];
    var searchInput = react.useRef(null);
    react.useEffect(function () {
        setFilterListObjectsData(listObjectsData);
    }, [listObjectsData]);
    react.useEffect(function () {
        var newNbrPages = Math.ceil(filterListObjectsData.length / entriesCount);
        if (newNbrPages === 0)
            newNbrPages = 1;
        setNbrPages(newNbrPages);
        if (currentPage > newNbrPages)
            setCurrentPage(newNbrPages);
    }, [filterListObjectsData, entriesCount, currentPage]);
    var filterTableSort = function (filterObject, dataListObject) {
        var objectEntryLabel = listLegend[filterObject.index].entry;
        switch (filterObject.filter) {
            case exports.TablDataFilterSortType.asc:
                var filterTabSortDesc = dataListObject.sort(function (a, b) {
                    // Convert data type for sort filter
                    var valueA = typeof (a[objectEntryLabel]) === 'string' ? a[objectEntryLabel].toLowerCase().replace(' ', '') : a[objectEntryLabel];
                    var valueB = typeof (b[objectEntryLabel]) === 'string' ? b[objectEntryLabel].toLowerCase().replace(' ', '') : b[objectEntryLabel];
                    if (valueA < valueB)
                        return -1;
                    return 0;
                });
                return filterTabSortDesc;
            case exports.TablDataFilterSortType.desc:
                var filterTabSortAsc = dataListObject.sort(function (a, b) {
                    // Convert data type for sort filter        
                    var valueA = typeof (a[objectEntryLabel]) === 'string' ? a[objectEntryLabel].toLowerCase().replace(' ', '') : a[objectEntryLabel];
                    var valueB = typeof (b[objectEntryLabel]) === 'string' ? b[objectEntryLabel].toLowerCase().replace(' ', '') : b[objectEntryLabel];
                    if (valueA > valueB)
                        return -1;
                    return 0;
                });
                return filterTabSortAsc;
        }
    };
    var filterTableSearch = function (value) {
        var keywords = value.split(' ');
        var resultTabSearch = [];
        keywords = keywords.map(function (value) { return value.toLowerCase(); });
        keywords.forEach(function (word) {
            var wordResultTabSearch = [];
            listObjectsData.forEach(function (objectData) {
                var values = Object.values(objectData); // Extact Object values
                values = values.map(function (value) {
                    var convertValueToString = '';
                    if (typeof (value) === 'number')
                        convertValueToString = value.toString(); // Convert number to string
                    if (typeof (value) === 'string')
                        convertValueToString = value.toLowerCase(); // Keep String value
                    if (value instanceof Date)
                        convertValueToString = value.toLocaleDateString(lang, { year: 'numeric', month: '2-digit', day: '2-digit' });
                    return convertValueToString;
                });
                values.forEach(function (value) {
                    if (word.length > 0 && value.includes(word) && !wordResultTabSearch.includes(objectData)) {
                        wordResultTabSearch.push(objectData);
                        return;
                    }
                });
            });
            resultTabSearch = resultTabSearch.concat(wordResultTabSearch);
        });
        if (keywords.length > 0 && resultTabSearch.length > 0) {
            return resultTabSearch;
        }
        else if (keywords.length > 0 && keywords[0] === '') {
            return listObjectsData;
        }
        else {
            return [];
        }
    };
    var handleChangeSearch = function (e) {
        var newFilterTab = filterTableSearch(e.currentTarget.value);
        setFilterListObjectsData(newFilterTab);
    };
    var handleChangeEntries = function (e) {
        var newNbrEntriesCount = parseInt(e.currentTarget.value);
        setEntriesCount(newNbrEntriesCount);
    };
    var handleChangeSort = function (filterObject) {
        var newFilterTab = filterTableSort(filterObject, filterListObjectsData);
        setFilterListObjectsData(newFilterTab);
        setArraySortSelected(filterObject);
    };
    var generateTableHeader = function () {
        return (jsxRuntime.jsx("thead", __assign({ className: "table-data__table__header" }, { children: jsxRuntime.jsx("tr", { children: listLegend.map(function (item, index) { return (jsxRuntime.jsx("td", { children: jsxRuntime.jsxs("div", __assign({ className: "table-data__table__header__legend" }, { children: [jsxRuntime.jsx("span", __assign({ onClick: function () { return handleChangeSort({
                                    index: index,
                                    filter: (arraySortSelected === null || arraySortSelected === void 0 ? void 0 : arraySortSelected.filter) === exports.TablDataFilterSortType.asc ?
                                        exports.TablDataFilterSortType.desc : exports.TablDataFilterSortType.asc
                                }); } }, { children: item.label })), jsxRuntime.jsxs("div", __assign({ className: 'table-data__table__header__legend__controls' }, { children: [jsxRuntime.jsx("i", __assign({ className: "".concat((arraySortSelected === null || arraySortSelected === void 0 ? void 0 : arraySortSelected.index) === index && arraySortSelected.filter === exports.TablDataFilterSortType.asc ? 'active' : '') }, { children: jsxRuntime.jsx(reactFontawesome.FontAwesomeIcon, { "data-testid": 'asc-controller', onClick: function () { return handleChangeSort({ index: index, filter: exports.TablDataFilterSortType.asc }); }, icon: freeSolidSvgIcons.faCaretUp, fontSize: '10px' }) })), jsxRuntime.jsx("i", __assign({ className: "".concat((arraySortSelected === null || arraySortSelected === void 0 ? void 0 : arraySortSelected.index) === index && arraySortSelected.filter === exports.TablDataFilterSortType.desc ? 'active' : '') }, { children: jsxRuntime.jsx(reactFontawesome.FontAwesomeIcon, { "data-testid": 'desc-controller', onClick: function () { return handleChangeSort({ index: index, filter: exports.TablDataFilterSortType.desc }); }, icon: freeSolidSvgIcons.faCaretDown, fontSize: '10px' }) }))] }))] })) }, item.entry)); }) }) })));
    };
    var generateTableBody = function () {
        var startEntries = (currentPage - 1) * entriesCount;
        var endEntries = ((currentPage - 1) * entriesCount) + entriesCount;
        var filterTabFilterWithEntriesCount = filterListObjectsData.slice(startEntries, endEntries);
        return (jsxRuntime.jsx("tbody", { children: filterListObjectsData.length > 0 ? (filterTabFilterWithEntriesCount.map(function (data, index) { return (generateLineEmployee(index, data)); })) : (jsxRuntime.jsx("tr", { children: jsxRuntime.jsx("td", __assign({ colSpan: Object.entries(listObjectsData[0]).length, className: "no-result" }, { children: translate.get('noResult') })) })) }));
    };
    var generateLineEmployee = function (key, data) {
        var dataMapFromObject = Array.from(new Map(Object.entries(data)));
        // Order data from legend agencement
        var dataMapOrder = dataMapFromObject.map(function (_elmnt, index) {
            return dataMapFromObject.find(function (item) { return item[0] === listLegend[index].entry; });
        });
        return (jsxRuntime.jsx("tr", __assign({ className: "".concat(key % 2 ? 'table-white' : 'table-color') }, { children: dataMapOrder.map(function (item, index) { return (jsxRuntime.jsx("td", __assign({ "data-testid": "data-".concat(index, "-line") }, { children: item[1] instanceof Date ? item[1].toLocaleDateString(lang, { year: 'numeric', month: '2-digit', day: '2-digit' }) : item[1] }), index)); }) }), key));
    };
    var generatePagination = function () {
        var pages = [];
        var _loop_1 = function (index) {
            pages.push(jsxRuntime.jsx("li", __assign({ "data-testid": 'select-page', className: index === currentPage ? 'current' : '', onClick: function () { return setCurrentPage(index); } }, { children: index }), 'page-' + index));
        };
        for (var index = 1; index <= nbrPages; index++) {
            _loop_1(index);
        }
        return (jsxRuntime.jsxs(react.Fragment, { children: [jsxRuntime.jsx("div", __assign({ "data-testid": 'previous', className: "table-data__pagination__controler ".concat(currentPage <= 1 ? ' disable' : ''), onClick: function () { return setCurrentPage(currentPage - 1); } }, { children: translate.get('previous') })), jsxRuntime.jsx("ul", __assign({ className: 'table-data__pagination__pages' }, { children: pages })), jsxRuntime.jsx("div", __assign({ "data-testid": 'next', className: "table-data__pagination__controler ".concat(currentPage >= nbrPages ? ' disable' : ''), onClick: function () { return setCurrentPage(currentPage + 1); } }, { children: translate.get('next') }))] }));
    };
    return (jsxRuntime.jsx("div", __assign({ "data-testid": 'table-data', className: "".concat(className, " table-data"), style: {
            '--primary-color': color,
            '--secondary-color': textColor !== null && textColor !== void 0 ? textColor : color
        } }, { children: listObjectsData.length > 0 ? (jsxRuntime.jsxs("div", { children: [jsxRuntime.jsxs("div", __assign({ className: 'table-data__filter' }, { children: [jsxRuntime.jsx("div", __assign({ className: 'table-data__filter__count' }, { children: jsxRuntime.jsxs("label", { children: [translate.get('show'), jsxRuntime.jsxs("select", __assign({ "data-testid": "select-entries", value: entriesCount, onChange: handleChangeEntries, name: "show-entries" }, { children: [jsxRuntime.jsx("option", __assign({ value: defaultEntrieCountValue }, { children: defaultEntrieCountValue })), jsxRuntime.jsx("option", __assign({ value: defaultEntrieCountValue * 2.5 }, { children: defaultEntrieCountValue * 2.5 })), jsxRuntime.jsx("option", __assign({ value: defaultEntrieCountValue * 5 }, { children: defaultEntrieCountValue * 5 })), jsxRuntime.jsx("option", __assign({ "data-testid": "select-option", value: defaultEntrieCountValue * 10 }, { children: defaultEntrieCountValue * 10 }))] })), translate.get('entries')] }) })), jsxRuntime.jsxs("div", __assign({ className: 'table-data__filter__search' }, { children: [jsxRuntime.jsx("label", { children: translate.get('search') }), jsxRuntime.jsx("input", { "data-testid": "search", name: "search", ref: searchInput, onChange: handleChangeSearch })] }))] })), jsxRuntime.jsx("div", __assign({ className: 'table-data__container' }, { children: jsxRuntime.jsxs("table", __assign({ className: 'table-data__table' }, { children: [generateTableHeader(), generateTableBody()] })) })), jsxRuntime.jsxs("div", __assign({ className: 'table-data__infos' }, { children: [translate.get('showing') + ' '
                            + ((currentPage - 1) * entriesCount + 1)
                            + ' ' + translate.get('to') + ' ' + (((currentPage - 1) * entriesCount) + entriesCount)
                            + ' ' + translate.get('of') + ' ' + filterListObjectsData.length
                            + ' ' + translate.get('element') + ' ', searchInput && searchInput.current && searchInput.current.value.length > 0 ? (' ( ' + translate.get('filterdFrom') + ' ' + listObjectsData.length + ' ' + translate.get('totalElements') + ' )') : null] })), jsxRuntime.jsx("div", __assign({ className: 'table-data__pagination' }, { children: nbrPages > 1 ? generatePagination() : null }))] })) : (jsxRuntime.jsxs("div", __assign({ className: "table-data__empty" }, { children: [jsxRuntime.jsx("i", { children: jsxRuntime.jsx(reactFontawesome.FontAwesomeIcon, { icon: freeSolidSvgIcons.faDatabase, fontSize: '80px' }) }), jsxRuntime.jsx("h3", { children: translate.get('dataEmpty') })] }))) })));
};

exports["default"] = TableData;
//# sourceMappingURL=index.js.map
