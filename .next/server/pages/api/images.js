module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/api/images.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/api/images.ts":
/*!*********************************!*\
  !*** ./src/pages/api/images.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return handler; });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst {\n  query\n} = faunadb__WEBPACK_IMPORTED_MODULE_0___default.a;\nconst client = new faunadb__WEBPACK_IMPORTED_MODULE_0___default.a.Client({\n  secret: process.env.FAUNA_API_KEY\n});\nasync function handler(req, res) {\n  if (req.method === 'POST') {\n    const {\n      url,\n      title,\n      description\n    } = req.body;\n    return client.query(query.Create(query.Collection('images'), {\n      data: {\n        title,\n        description,\n        url\n      }\n    })).then(() => {\n      return res.status(201).json({\n        success: true\n      });\n    }).catch(err => res.status(501).json({\n      error: `Sorry something Happened! ${err.message}`\n    }));\n  }\n\n  if (req.method === 'GET') {\n    const {\n      after\n    } = req.query;\n\n    const queryOptions = _objectSpread({\n      size: 6\n    }, after && {\n      after: query.Ref(query.Collection('images'), after)\n    });\n\n    return client.query(query.Map(query.Paginate(query.Documents(query.Collection('images')), queryOptions), query.Lambda('X', query.Get(query.Var('X'))))).then(response => {\n      const formattedData = response.data.map(item => _objectSpread(_objectSpread({}, item.data), {}, {\n        ts: item.ts,\n        id: item.ref.id\n      }));\n      return res.json({\n        data: formattedData,\n        after: response.after ? response.after[0].id : null\n      });\n    }).catch(err => {\n      return res.status(400).json(err);\n    });\n  }\n\n  return res.status(405).json({\n    error: `Method '${req.method}' Not Allowed`\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL2ltYWdlcy50cz84YTE4Il0sIm5hbWVzIjpbInF1ZXJ5IiwiZmF1bmEiLCJjbGllbnQiLCJDbGllbnQiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiRkFVTkFfQVBJX0tFWSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ1cmwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYm9keSIsIkNyZWF0ZSIsIkNvbGxlY3Rpb24iLCJkYXRhIiwidGhlbiIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsIm1lc3NhZ2UiLCJhZnRlciIsInF1ZXJ5T3B0aW9ucyIsInNpemUiLCJSZWYiLCJNYXAiLCJQYWdpbmF0ZSIsIkRvY3VtZW50cyIsIkxhbWJkYSIsIkdldCIsIlZhciIsInJlc3BvbnNlIiwiZm9ybWF0dGVkRGF0YSIsIm1hcCIsIml0ZW0iLCJ0cyIsImlkIiwicmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFFQSxNQUFNO0FBQUVBO0FBQUYsSUFBWUMsOENBQWxCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLElBQUlELDhDQUFLLENBQUNFLE1BQVYsQ0FBaUI7QUFBRUMsUUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUM7QUFBdEIsQ0FBakIsQ0FBZjtBQW1CZSxlQUFlQyxPQUFmLENBQ2JDLEdBRGEsRUFFYkMsR0FGYSxFQUdFO0FBQ2YsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDekIsVUFBTTtBQUFFQyxTQUFGO0FBQU9DLFdBQVA7QUFBY0M7QUFBZCxRQUE4QkwsR0FBRyxDQUFDTSxJQUF4QztBQUVBLFdBQU9iLE1BQU0sQ0FDVkYsS0FESSxDQUVIQSxLQUFLLENBQUNnQixNQUFOLENBQWFoQixLQUFLLENBQUNpQixVQUFOLENBQWlCLFFBQWpCLENBQWIsRUFBeUM7QUFDdkNDLFVBQUksRUFBRTtBQUNKTCxhQURJO0FBRUpDLG1CQUZJO0FBR0pGO0FBSEk7QUFEaUMsS0FBekMsQ0FGRyxFQVVKTyxJQVZJLENBVUMsTUFBTTtBQUNWLGFBQU9ULEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BQXJCLENBQVA7QUFDRCxLQVpJLEVBYUpDLEtBYkksQ0FhRUMsR0FBRyxJQUNSZCxHQUFHLENBQ0FVLE1BREgsQ0FDVSxHQURWLEVBRUdDLElBRkgsQ0FFUTtBQUFFSSxXQUFLLEVBQUcsNkJBQTRCRCxHQUFHLENBQUNFLE9BQVE7QUFBbEQsS0FGUixDQWRHLENBQVA7QUFrQkQ7O0FBRUQsTUFBSWpCLEdBQUcsQ0FBQ0UsTUFBSixLQUFlLEtBQW5CLEVBQTBCO0FBQ3hCLFVBQU07QUFBRWdCO0FBQUYsUUFBWWxCLEdBQUcsQ0FBQ1QsS0FBdEI7O0FBRUEsVUFBTTRCLFlBQVk7QUFDaEJDLFVBQUksRUFBRTtBQURVLE9BRVpGLEtBQUssSUFBSTtBQUFFQSxXQUFLLEVBQUUzQixLQUFLLENBQUM4QixHQUFOLENBQVU5QixLQUFLLENBQUNpQixVQUFOLENBQWlCLFFBQWpCLENBQVYsRUFBc0NVLEtBQXRDO0FBQVQsS0FGRyxDQUFsQjs7QUFLQSxXQUFPekIsTUFBTSxDQUNWRixLQURJLENBRUhBLEtBQUssQ0FBQytCLEdBQU4sQ0FDRS9CLEtBQUssQ0FBQ2dDLFFBQU4sQ0FDRWhDLEtBQUssQ0FBQ2lDLFNBQU4sQ0FBZ0JqQyxLQUFLLENBQUNpQixVQUFOLENBQWlCLFFBQWpCLENBQWhCLENBREYsRUFFRVcsWUFGRixDQURGLEVBS0U1QixLQUFLLENBQUNrQyxNQUFOLENBQWEsR0FBYixFQUFrQmxDLEtBQUssQ0FBQ21DLEdBQU4sQ0FBVW5DLEtBQUssQ0FBQ29DLEdBQU4sQ0FBVSxHQUFWLENBQVYsQ0FBbEIsQ0FMRixDQUZHLEVBVUpqQixJQVZJLENBVUNrQixRQUFRLElBQUk7QUFDaEIsWUFBTUMsYUFBYSxHQUFHRCxRQUFRLENBQUNuQixJQUFULENBQWNxQixHQUFkLENBQWtCQyxJQUFJLG9DQUN2Q0EsSUFBSSxDQUFDdEIsSUFEa0M7QUFFMUN1QixVQUFFLEVBQUVELElBQUksQ0FBQ0MsRUFGaUM7QUFHMUNDLFVBQUUsRUFBRUYsSUFBSSxDQUFDRyxHQUFMLENBQVNEO0FBSDZCLFFBQXRCLENBQXRCO0FBTUEsYUFBT2hDLEdBQUcsQ0FBQ1csSUFBSixDQUFTO0FBQ2RILFlBQUksRUFBRW9CLGFBRFE7QUFFZFgsYUFBSyxFQUFFVSxRQUFRLENBQUNWLEtBQVQsR0FBaUJVLFFBQVEsQ0FBQ1YsS0FBVCxDQUFlLENBQWYsRUFBa0JlLEVBQW5DLEdBQXdDO0FBRmpDLE9BQVQsQ0FBUDtBQUlELEtBckJJLEVBc0JKbkIsS0F0QkksQ0FzQkVDLEdBQUcsSUFBSTtBQUNaLGFBQU9kLEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCRyxHQUFyQixDQUFQO0FBQ0QsS0F4QkksQ0FBUDtBQXlCRDs7QUFFRCxTQUFPZCxHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFSSxTQUFLLEVBQUcsV0FBVWhCLEdBQUcsQ0FBQ0UsTUFBTztBQUEvQixHQUFyQixDQUFQO0FBQ0QiLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2ltYWdlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBmYXVuYSBmcm9tICdmYXVuYWRiJztcblxuY29uc3QgeyBxdWVyeSB9ID0gZmF1bmE7XG5jb25zdCBjbGllbnQgPSBuZXcgZmF1bmEuQ2xpZW50KHsgc2VjcmV0OiBwcm9jZXNzLmVudi5GQVVOQV9BUElfS0VZIH0pO1xuXG5pbnRlcmZhY2UgSW1hZ2VzUXVlcnlSZXNwb25zZSB7XG4gIGFmdGVyPzoge1xuICAgIGlkOiBzdHJpbmc7XG4gIH07XG4gIGRhdGE6IHtcbiAgICBkYXRhOiB7XG4gICAgICB0aXRsZTogc3RyaW5nO1xuICAgICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICAgIHVybDogc3RyaW5nO1xuICAgIH07XG4gICAgdHM6IG51bWJlcjtcbiAgICByZWY6IHtcbiAgICAgIGlkOiBzdHJpbmc7XG4gICAgfTtcbiAgfVtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZVxuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICBjb25zdCB7IHVybCwgdGl0bGUsIGRlc2NyaXB0aW9uIH0gPSByZXEuYm9keTtcblxuICAgIHJldHVybiBjbGllbnRcbiAgICAgIC5xdWVyeShcbiAgICAgICAgcXVlcnkuQ3JlYXRlKHF1ZXJ5LkNvbGxlY3Rpb24oJ2ltYWdlcycpLCB7XG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHVybCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT5cbiAgICAgICAgcmVzXG4gICAgICAgICAgLnN0YXR1cyg1MDEpXG4gICAgICAgICAgLmpzb24oeyBlcnJvcjogYFNvcnJ5IHNvbWV0aGluZyBIYXBwZW5lZCEgJHtlcnIubWVzc2FnZX1gIH0pXG4gICAgICApO1xuICB9XG5cbiAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgY29uc3QgeyBhZnRlciB9ID0gcmVxLnF1ZXJ5O1xuXG4gICAgY29uc3QgcXVlcnlPcHRpb25zID0ge1xuICAgICAgc2l6ZTogNixcbiAgICAgIC4uLihhZnRlciAmJiB7IGFmdGVyOiBxdWVyeS5SZWYocXVlcnkuQ29sbGVjdGlvbignaW1hZ2VzJyksIGFmdGVyKSB9KSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGNsaWVudFxuICAgICAgLnF1ZXJ5PEltYWdlc1F1ZXJ5UmVzcG9uc2U+KFxuICAgICAgICBxdWVyeS5NYXAoXG4gICAgICAgICAgcXVlcnkuUGFnaW5hdGUoXG4gICAgICAgICAgICBxdWVyeS5Eb2N1bWVudHMocXVlcnkuQ29sbGVjdGlvbignaW1hZ2VzJykpLFxuICAgICAgICAgICAgcXVlcnlPcHRpb25zXG4gICAgICAgICAgKSxcbiAgICAgICAgICBxdWVyeS5MYW1iZGEoJ1gnLCBxdWVyeS5HZXQocXVlcnkuVmFyKCdYJykpKVxuICAgICAgICApXG4gICAgICApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZERhdGEgPSByZXNwb25zZS5kYXRhLm1hcChpdGVtID0+ICh7XG4gICAgICAgICAgLi4uaXRlbS5kYXRhLFxuICAgICAgICAgIHRzOiBpdGVtLnRzLFxuICAgICAgICAgIGlkOiBpdGVtLnJlZi5pZCxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHJldHVybiByZXMuanNvbih7XG4gICAgICAgICAgZGF0YTogZm9ybWF0dGVkRGF0YSxcbiAgICAgICAgICBhZnRlcjogcmVzcG9uc2UuYWZ0ZXIgPyByZXNwb25zZS5hZnRlclswXS5pZCA6IG51bGwsXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6IGBNZXRob2QgJyR7cmVxLm1ldGhvZH0nIE5vdCBBbGxvd2VkYCB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/api/images.ts\n");

/***/ }),

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"faunadb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYXVuYWRiXCI/OWIwYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmYXVuYWRiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmF1bmFkYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///faunadb\n");

/***/ })

/******/ });