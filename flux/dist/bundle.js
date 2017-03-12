/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var flux_1 = __webpack_require__(15);
var stores_1 = __webpack_require__(9);
var ListView = __webpack_require__(12);
var InputView = __webpack_require__(11);
//define the dispatcher
var ResistanceDispatcher = new flux_1.Dispatcher();
exports.ResistanceDispatcher = ResistanceDispatcher;
//stores
var protesterStore = new stores_1.ResistanceStore();
var protestStore = new stores_1.ResistanceStore();
var movementStore = new stores_1.ResistanceStore();
var store = new stores_1.ResistanceStore();
//list views
var protesterListView = new ListView.ProtesterListView(protesterStore);
var protestListView = new ListView.ProtestListView(protestStore);
var movementListView = new ListView.MovementListView(movementStore);
var otherListView = new ListView.OtherListView(store);
// input views
// create new object views
var protesterInputView = new InputView.NewProtesterInputView("protestersContainer");
var protestInputView = new InputView.NewProtestInputView("protestsContainer");
var movementrInputView = new InputView.MovementInputView("movementsContainer");
// append object views
var addProtesterToProtestInputView = new InputView.AddProtesterToProtestInputView("protesterToProtestContainer");
var addProtestToMovementInputView = new InputView.AddProtestToMovementInputView("protestToMovementContainer");
// querying views
var getProtestersInProtestInputView = new InputView.GetProtestersInProtestInputView("getProtestersAtProtestContainer");
var getProtestersNearLocationInputView = new InputView.GetProtestersNearLocationInputView("getProtestersNearLocationContainer");
// modifying views
var modifyProtestInputView = new InputView.ModifyProtestInputView("modifyOldNameContainer");


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.1.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2016-09-22T22:30Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.1.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			resolve.call( undefined, value );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.call( undefined, value );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

function manipulationTarget( elem, content ) {
	if ( jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE <=9 only
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var val,
		valueIsBorderBox = true,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Support: IE <=11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	if ( elem.getClientRects().length ) {
		val = elem.getBoundingClientRect()[ name ];
	}

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				style[ name ] = value;
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function raf() {
	if ( timerId ) {
		window.requestAnimationFrame( raf );
		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off or if document is hidden
	if ( jQuery.fx.off || document.hidden ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.requestAnimationFrame ?
			window.requestAnimationFrame( raf ) :
			window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	if ( window.cancelAnimationFrame ) {
		window.cancelAnimationFrame( timerId );
	} else {
		window.clearInterval( timerId );
	}

	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( jQuery.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win, rect, doc,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		// Make sure element is not hidden (display: none)
		if ( rect.width || rect.height ) {
			doc = elem.ownerDocument;
			win = getWindow( doc );
			docElem = doc.documentElement;

			return {
				top: rect.top + win.pageYOffset - docElem.clientTop,
				left: rect.left + win.pageXOffset - docElem.clientLeft
			};
		}

		// Return zeros for disconnected and hidden elements (gh-2310)
		return rect;
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.parseJSON = JSON.parse;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}





return jQuery;
} );


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
// Action object
var Action = (function () {
    function Action(actionType, data) {
        this.actionType = actionType;
        this.data = data;
    }
    return Action;
}());
exports.Action = Action;
var ResistanceAction = (function () {
    function ResistanceAction() {
    }
    // add new protester
    ResistanceAction.addNewProtester = function (name, email, zip) {
        var action = new Action(ResistanceAction.ADD_NEW_PROTESTER, { name: name, email: email, zip: zip });
        index_1.ResistanceDispatcher.dispatch(action);
    };
    // add new protester
    ResistanceAction.addNewProtest = function (name, dateTime, zip) {
        var action = new Action(ResistanceAction.ADD_NEW_PROTEST, { name: name, dateTime: dateTime, zip: zip });
        index_1.ResistanceDispatcher.dispatch(action);
    };
    // add new protester
    ResistanceAction.addNewMovement = function (name) {
        var action = new Action(ResistanceAction.ADD_NEW_MOVEMENT, { name: name });
        index_1.ResistanceDispatcher.dispatch(action);
    };
    // add new protester
    ResistanceAction.modifyProtest = function (oldProtestName, newProtestName, newProtestTime) {
        var action = new Action(ResistanceAction.MODIFY_PROTEST, { oldProtestName: oldProtestName, newProtestName: newProtestName, newProtestTime: newProtestTime });
        index_1.ResistanceDispatcher.dispatch(action);
    };
    // add new protester
    ResistanceAction.addProtestToMovement = function (movementName, protestName) {
        var action = new Action(ResistanceAction.ADD_PROTEST_TO_MOVEMENT, { movementName: movementName, protestName: protestName });
        index_1.ResistanceDispatcher.dispatch(action);
    };
    // add new protester
    ResistanceAction.addProtesterToProtest = function (protestName, protesterName) {
        var action = new Action(ResistanceAction.ADD_PROTESTER_TO_PROTEST, { protestName: protestName, protesterName: protesterName });
        index_1.ResistanceDispatcher.dispatch(action);
    };
    // add new protester
    ResistanceAction.getProtestProtesters = function (protestName) {
        var action = new Action(ResistanceAction.GET_PROTESTS_MEMBERS, { protestName: protestName });
        index_1.ResistanceDispatcher.dispatch(action);
    };
    // get protester near something
    ResistanceAction.getProtestersNearLocation = function (location, radius) {
        var action;
        if (isNaN(parseInt(location))) {
            action = new Action(ResistanceAction.GET_PROTESTERS_NEAR_PROTEST, { protestName: location, radius: radius });
        }
        else {
            action = new Action(ResistanceAction.GET_PROTESTS_NEAR_LOCATION, { zipcode: location, radius: radius });
        }
        index_1.ResistanceDispatcher.dispatch(action);
    };
    return ResistanceAction;
}());
//type constants
ResistanceAction.ADD_NEW_PROTESTER = 'add_new_protester';
ResistanceAction.ADD_NEW_PROTEST = 'add_new_protest';
ResistanceAction.ADD_NEW_MOVEMENT = 'add_new_movement';
ResistanceAction.MODIFY_PROTEST = 'modify_protest';
ResistanceAction.ADD_PROTEST_TO_MOVEMENT = 'add_protest_to_movement';
ResistanceAction.ADD_PROTESTER_TO_PROTEST = 'add_protester_to_protest';
ResistanceAction.GET_PROTESTS_MEMBERS = 'get_protest_members';
ResistanceAction.GET_PROTESTERS_NEAR_PROTEST = 'get_protesters_near_protest';
ResistanceAction.GET_PROTESTS_NEAR_LOCATION = 'get_protests_near_location';
exports.ResistanceAction = ResistanceAction;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var zipcodeMap = __webpack_require__(5);
var geolib = __webpack_require__(17);
var ZcLocation = (function () {
    function ZcLocation(zipcode) {
        this.zipcode = zipcode;
    }
    // Deteremines whether or not this falls with the desired radius.
    ZcLocation.prototype.isWithinRadius = function (zipcode, radius) {
        var distance = geolib.getDistance(zipcodeMap[this.zipcode], zipcodeMap[zipcode]);
        var distanceInMiles = distance * 0.000621371;
        return distanceInMiles <= radius;
    };
    ZcLocation.prototype.getZipCode = function () {
        return this.zipcode;
    };
    return ZcLocation;
}());
exports.ZcLocation = ZcLocation;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {
	"10001": [
		40.750634,
		-73.997176
	],
	"10002": [
		40.715777,
		-73.986207
	],
	"10003": [
		40.731829,
		-73.989181
	],
	"10004": [
		40.688874,
		-74.018213
	],
	"10005": [
		40.706004,
		-74.008785
	],
	"10006": [
		40.709579,
		-74.012952
	],
	"10007": [
		40.713858,
		-74.007771
	],
	"10009": [
		40.726402,
		-73.978635
	],
	"10010": [
		40.739104,
		-73.982455
	],
	"10011": [
		40.742042,
		-74.000622
	],
	"10012": [
		40.725581,
		-73.998078
	],
	"10013": [
		40.720103,
		-74.004901
	],
	"10014": [
		40.734012,
		-74.006746
	],
	"10016": [
		40.745221,
		-73.978294
	],
	"10017": [
		40.752359,
		-73.972489
	],
	"10018": [
		40.755332,
		-73.993139
	],
	"10019": [
		40.765823,
		-73.987179
	],
	"10020": [
		40.758236,
		-73.978833
	],
	"10021": [
		40.769225,
		-73.958741
	],
	"10022": [
		40.75863,
		-73.967949
	],
	"10023": [
		40.775916,
		-73.982602
	],
	"10024": [
		40.798452,
		-73.974414
	],
	"10025": [
		40.798601,
		-73.966622
	],
	"10026": [
		40.802381,
		-73.952681
	],
	"10027": [
		40.811407,
		-73.95306
	],
	"10028": [
		40.776442,
		-73.953513
	],
	"10029": [
		40.791763,
		-73.94397
	],
	"10030": [
		40.818267,
		-73.942856
	],
	"10031": [
		40.825288,
		-73.950045
	],
	"10032": [
		40.838792,
		-73.94283
	],
	"10033": [
		40.850482,
		-73.934051
	],
	"10034": [
		40.867076,
		-73.924312
	],
	"10035": [
		40.795458,
		-73.92957
	],
	"10036": [
		40.759255,
		-73.989828
	],
	"10037": [
		40.81296,
		-73.937376
	],
	"10038": [
		40.709308,
		-74.002564
	],
	"10039": [
		40.830869,
		-73.936216
	],
	"10040": [
		40.858314,
		-73.930494
	],
	"10044": [
		40.761907,
		-73.949967
	],
	"10065": [
		40.764628,
		-73.963144
	],
	"10069": [
		40.77596,
		-73.990341
	],
	"10075": [
		40.773363,
		-73.956222
	],
	"10103": [
		40.76078,
		-73.97767
	],
	"10110": [
		40.754499,
		-73.982256
	],
	"10111": [
		40.759114,
		-73.977596
	],
	"10112": [
		40.759167,
		-73.979668
	],
	"10115": [
		40.810852,
		-73.963744
	],
	"10119": [
		40.75031,
		-73.992979
	],
	"10128": [
		40.781428,
		-73.95001
	],
	"10152": [
		40.758404,
		-73.972031
	],
	"10153": [
		40.763622,
		-73.972439
	],
	"10154": [
		40.757779,
		-73.972487
	],
	"10162": [
		40.769308,
		-73.949924
	],
	"10165": [
		40.752131,
		-73.978722
	],
	"10167": [
		40.754648,
		-73.974771
	],
	"10168": [
		40.751448,
		-73.977103
	],
	"10169": [
		40.754391,
		-73.976098
	],
	"10170": [
		40.752625,
		-73.975877
	],
	"10171": [
		40.755899,
		-73.973858
	],
	"10172": [
		40.755273,
		-73.974315
	],
	"10173": [
		40.754131,
		-73.979364
	],
	"10174": [
		40.751441,
		-73.975003
	],
	"10177": [
		40.755139,
		-73.975934
	],
	"10199": [
		40.751383,
		-73.997152
	],
	"10271": [
		40.708236,
		-74.010541
	],
	"10278": [
		40.715138,
		-74.003717
	],
	"10279": [
		40.712626,
		-74.008669
	],
	"10280": [
		40.709073,
		-74.016423
	],
	"10282": [
		40.716921,
		-74.015066
	],
	"10301": [
		40.627505,
		-74.094377
	],
	"10302": [
		40.630716,
		-74.137729
	],
	"10303": [
		40.629885,
		-74.17413
	],
	"10304": [
		40.608497,
		-74.093239
	],
	"10305": [
		40.596691,
		-74.074866
	],
	"10306": [
		40.571768,
		-74.12595
	],
	"10307": [
		40.509183,
		-74.237785
	],
	"10308": [
		40.551884,
		-74.147646
	],
	"10309": [
		40.531346,
		-74.219857
	],
	"10310": [
		40.632648,
		-74.116148
	],
	"10311": [
		40.605231,
		-74.179534
	],
	"10312": [
		40.545237,
		-74.180443
	],
	"10314": [
		40.599263,
		-74.165748
	],
	"10451": [
		40.820454,
		-73.925066
	],
	"10452": [
		40.837391,
		-73.923438
	],
	"10453": [
		40.85282,
		-73.91231
	],
	"10454": [
		40.805492,
		-73.916604
	],
	"10455": [
		40.814713,
		-73.90859
	],
	"10456": [
		40.829886,
		-73.908121
	],
	"10457": [
		40.847162,
		-73.898663
	],
	"10458": [
		40.862529,
		-73.888159
	],
	"10459": [
		40.825856,
		-73.892941
	],
	"10460": [
		40.841736,
		-73.879598
	],
	"10461": [
		40.847396,
		-73.840578
	],
	"10462": [
		40.843267,
		-73.860417
	],
	"10463": [
		40.880678,
		-73.90654
	],
	"10464": [
		40.869594,
		-73.795848
	],
	"10465": [
		40.823277,
		-73.825602
	],
	"10466": [
		40.890964,
		-73.846239
	],
	"10467": [
		40.869953,
		-73.865765
	],
	"10468": [
		40.86894,
		-73.899995
	],
	"10469": [
		40.868609,
		-73.848138
	],
	"10470": [
		40.889526,
		-73.872586
	],
	"10471": [
		40.898788,
		-73.90313
	],
	"10472": [
		40.829556,
		-73.86931
	],
	"10473": [
		40.81869,
		-73.858474
	],
	"10474": [
		40.810618,
		-73.884474
	],
	"10475": [
		40.875169,
		-73.823815
	],
	"10501": [
		41.295608,
		-73.75849
	],
	"10502": [
		41.011602,
		-73.841433
	],
	"10503": [
		41.026556,
		-73.87531
	],
	"10504": [
		41.128468,
		-73.707521
	],
	"10505": [
		41.34209,
		-73.745449
	],
	"10506": [
		41.190401,
		-73.639139
	],
	"10507": [
		41.227896,
		-73.686047
	],
	"10509": [
		41.410855,
		-73.59434
	],
	"10510": [
		41.139472,
		-73.835704
	],
	"10511": [
		41.265428,
		-73.943192
	],
	"10512": [
		41.457619,
		-73.724608
	],
	"10514": [
		41.172111,
		-73.769227
	],
	"10516": [
		41.461974,
		-73.874908
	],
	"10517": [
		41.298243,
		-73.861993
	],
	"10518": [
		41.266143,
		-73.588296
	],
	"10519": [
		41.352346,
		-73.652662
	],
	"10520": [
		41.226478,
		-73.867787
	],
	"10522": [
		41.009698,
		-73.863305
	],
	"10523": [
		41.059341,
		-73.819457
	],
	"10524": [
		41.375325,
		-73.926217
	],
	"10526": [
		41.288102,
		-73.668835
	],
	"10527": [
		41.321183,
		-73.769878
	],
	"10528": [
		40.975049,
		-73.724925
	],
	"10530": [
		41.023712,
		-73.81281
	],
	"10532": [
		41.099152,
		-73.800103
	],
	"10533": [
		41.036927,
		-73.854864
	],
	"10535": [
		41.335169,
		-73.793919
	],
	"10536": [
		41.269098,
		-73.688694
	],
	"10537": [
		41.33974,
		-73.882349
	],
	"10538": [
		40.937752,
		-73.756473
	],
	"10541": [
		41.381113,
		-73.751935
	],
	"10543": [
		40.952693,
		-73.73604
	],
	"10545": [
		41.178591,
		-73.83545
	],
	"10546": [
		41.195609,
		-73.801126
	],
	"10547": [
		41.313334,
		-73.846039
	],
	"10548": [
		41.245696,
		-73.932977
	],
	"10549": [
		41.200584,
		-73.723465
	],
	"10550": [
		40.905448,
		-73.835253
	],
	"10552": [
		40.92446,
		-73.826115
	],
	"10553": [
		40.908584,
		-73.821652
	],
	"10560": [
		41.340527,
		-73.597609
	],
	"10562": [
		41.19448,
		-73.825254
	],
	"10566": [
		41.289483,
		-73.916847
	],
	"10567": [
		41.2896,
		-73.897001
	],
	"10570": [
		41.130067,
		-73.78667
	],
	"10573": [
		41.015857,
		-73.677404
	],
	"10576": [
		41.221577,
		-73.572332
	],
	"10577": [
		41.038367,
		-73.711114
	],
	"10578": [
		41.320276,
		-73.678991
	],
	"10579": [
		41.395364,
		-73.839053
	],
	"10580": [
		40.979049,
		-73.693202
	],
	"10583": [
		40.988682,
		-73.789204
	],
	"10588": [
		41.336623,
		-73.820007
	],
	"10589": [
		41.334143,
		-73.714634
	],
	"10590": [
		41.255269,
		-73.539404
	],
	"10591": [
		41.090097,
		-73.841014
	],
	"10594": [
		41.113425,
		-73.774292
	],
	"10595": [
		41.085897,
		-73.782645
	],
	"10596": [
		41.256258,
		-73.959177
	],
	"10597": [
		41.293021,
		-73.596568
	],
	"10598": [
		41.288223,
		-73.792203
	],
	"10601": [
		41.032947,
		-73.765064
	],
	"10603": [
		41.0544,
		-73.779287
	],
	"10604": [
		41.071512,
		-73.747093
	],
	"10605": [
		41.010566,
		-73.745129
	],
	"10606": [
		41.020572,
		-73.775846
	],
	"10607": [
		41.039089,
		-73.811368
	],
	"10701": [
		40.945417,
		-73.880475
	],
	"10703": [
		40.959837,
		-73.8803
	],
	"10704": [
		40.919729,
		-73.862651
	],
	"10705": [
		40.919705,
		-73.889928
	],
	"10706": [
		40.989821,
		-73.867552
	],
	"10707": [
		40.960533,
		-73.822732
	],
	"10708": [
		40.938267,
		-73.829922
	],
	"10709": [
		40.954635,
		-73.808184
	],
	"10710": [
		40.967157,
		-73.846339
	],
	"10801": [
		40.91757,
		-73.784858
	],
	"10803": [
		40.900458,
		-73.807138
	],
	"10804": [
		40.946841,
		-73.788051
	],
	"10805": [
		40.897721,
		-73.779258
	],
	"10901": [
		41.140772,
		-74.104976
	],
	"10910": [
		41.28157,
		-74.137958
	],
	"10911": [
		41.319158,
		-74.008159
	],
	"10913": [
		41.068872,
		-73.956016
	],
	"10914": [
		41.417717,
		-74.200026
	],
	"10915": [
		41.545359,
		-74.359321
	],
	"10916": [
		41.442343,
		-74.250577
	],
	"10917": [
		41.319679,
		-74.117639
	],
	"10918": [
		41.344192,
		-74.262177
	],
	"10919": [
		41.525959,
		-74.387618
	],
	"10920": [
		41.156495,
		-73.938239
	],
	"10921": [
		41.332065,
		-74.363422
	],
	"10922": [
		41.33276,
		-73.996452
	],
	"10923": [
		41.203121,
		-74.002263
	],
	"10924": [
		41.381005,
		-74.352471
	],
	"10925": [
		41.197706,
		-74.315243
	],
	"10926": [
		41.301845,
		-74.119757
	],
	"10927": [
		41.191052,
		-73.967562
	],
	"10928": [
		41.34897,
		-73.998495
	],
	"10930": [
		41.366224,
		-74.121236
	],
	"10931": [
		41.148792,
		-74.162522
	],
	"10932": [
		41.48216,
		-74.464285
	],
	"10933": [
		41.368021,
		-74.512999
	],
	"10940": [
		41.446544,
		-74.478741
	],
	"10941": [
		41.487318,
		-74.344437
	],
	"10950": [
		41.317346,
		-74.199881
	],
	"10952": [
		41.111118,
		-74.07854
	],
	"10953": [
		41.404964,
		-74.077432
	],
	"10954": [
		41.098819,
		-74.013262
	],
	"10956": [
		41.157191,
		-73.993416
	],
	"10958": [
		41.371913,
		-74.432479
	],
	"10960": [
		41.091826,
		-73.925798
	],
	"10962": [
		41.050066,
		-73.958585
	],
	"10963": [
		41.463529,
		-74.543423
	],
	"10964": [
		41.016347,
		-73.914324
	],
	"10965": [
		41.061561,
		-74.007832
	],
	"10968": [
		41.037017,
		-73.921259
	],
	"10969": [
		41.294859,
		-74.488006
	],
	"10970": [
		41.180177,
		-74.102175
	],
	"10973": [
		41.380516,
		-74.480462
	],
	"10974": [
		41.168058,
		-74.178013
	],
	"10975": [
		41.267079,
		-74.172263
	],
	"10976": [
		41.02296,
		-73.928488
	],
	"10977": [
		41.11892,
		-74.048158
	],
	"10979": [
		41.182489,
		-74.31551
	],
	"10980": [
		41.238822,
		-74.050163
	],
	"10983": [
		41.031088,
		-73.947703
	],
	"10984": [
		41.202903,
		-74.022265
	],
	"10985": [
		41.583519,
		-74.373188
	],
	"10986": [
		41.285235,
		-73.99871
	],
	"10987": [
		41.186927,
		-74.23735
	],
	"10988": [
		41.302081,
		-74.548556
	],
	"10989": [
		41.122955,
		-73.938031
	],
	"10990": [
		41.267448,
		-74.364011
	],
	"10992": [
		41.426089,
		-74.164664
	],
	"10993": [
		41.209896,
		-73.973842
	],
	"10994": [
		41.098072,
		-73.972649
	],
	"10996": [
		41.3937,
		-73.972175
	],
	"10998": [
		41.324076,
		-74.541179
	],
	"11001": [
		40.723317,
		-73.704949
	],
	"11003": [
		40.699176,
		-73.706166
	],
	"11004": [
		40.746208,
		-73.711485
	],
	"11005": [
		40.756638,
		-73.714222
	],
	"11010": [
		40.700587,
		-73.675018
	],
	"11020": [
		40.771442,
		-73.714819
	],
	"11021": [
		40.784319,
		-73.731488
	],
	"11023": [
		40.798909,
		-73.733653
	],
	"11024": [
		40.816251,
		-73.742872
	],
	"11030": [
		40.793409,
		-73.688549
	],
	"11040": [
		40.745347,
		-73.680292
	],
	"11042": [
		40.758545,
		-73.697204
	],
	"11050": [
		40.8399,
		-73.693124
	],
	"11096": [
		40.621346,
		-73.75699
	],
	"11101": [
		40.74756,
		-73.938942
	],
	"11102": [
		40.772884,
		-73.926295
	],
	"11103": [
		40.762576,
		-73.913458
	],
	"11104": [
		40.744647,
		-73.920203
	],
	"11105": [
		40.778971,
		-73.90625
	],
	"11106": [
		40.762211,
		-73.931528
	],
	"11109": [
		40.745968,
		-73.957526
	],
	"11201": [
		40.6937,
		-73.989859
	],
	"11203": [
		40.64959,
		-73.934374
	],
	"11204": [
		40.618779,
		-73.984826
	],
	"11205": [
		40.694664,
		-73.966246
	],
	"11206": [
		40.701954,
		-73.942358
	],
	"11207": [
		40.670755,
		-73.894209
	],
	"11208": [
		40.668564,
		-73.87099
	],
	"11209": [
		40.622012,
		-74.030141
	],
	"11210": [
		40.628144,
		-73.946323
	],
	"11211": [
		40.712597,
		-73.953098
	],
	"11212": [
		40.662932,
		-73.913019
	],
	"11213": [
		40.671079,
		-73.936342
	],
	"11214": [
		40.599148,
		-73.99609
	],
	"11215": [
		40.662688,
		-73.98674
	],
	"11216": [
		40.680769,
		-73.949313
	],
	"11217": [
		40.682306,
		-73.978099
	],
	"11218": [
		40.643477,
		-73.976042
	],
	"11219": [
		40.632667,
		-73.996669
	],
	"11220": [
		40.641087,
		-74.016552
	],
	"11221": [
		40.69134,
		-73.927879
	],
	"11222": [
		40.72779,
		-73.947605
	],
	"11223": [
		40.597143,
		-73.973426
	],
	"11224": [
		40.577372,
		-73.988706
	],
	"11225": [
		40.663046,
		-73.954219
	],
	"11226": [
		40.646448,
		-73.956649
	],
	"11228": [
		40.616699,
		-74.013065
	],
	"11229": [
		40.601293,
		-73.944493
	],
	"11230": [
		40.622164,
		-73.965105
	],
	"11231": [
		40.677916,
		-74.005154
	],
	"11232": [
		40.657708,
		-74.004377
	],
	"11233": [
		40.678302,
		-73.919936
	],
	"11234": [
		40.606436,
		-73.909725
	],
	"11235": [
		40.583949,
		-73.949096
	],
	"11236": [
		40.639413,
		-73.900664
	],
	"11237": [
		40.70416,
		-73.921139
	],
	"11238": [
		40.679169,
		-73.9638
	],
	"11239": [
		40.647735,
		-73.879477
	],
	"11351": [
		40.780753,
		-73.825434
	],
	"11354": [
		40.768213,
		-73.827392
	],
	"11355": [
		40.751463,
		-73.820996
	],
	"11356": [
		40.784923,
		-73.841548
	],
	"11357": [
		40.785129,
		-73.810037
	],
	"11358": [
		40.760471,
		-73.796373
	],
	"11359": [
		40.791605,
		-73.776724
	],
	"11360": [
		40.780348,
		-73.781548
	],
	"11361": [
		40.764191,
		-73.772775
	],
	"11362": [
		40.756632,
		-73.735333
	],
	"11363": [
		40.772348,
		-73.746292
	],
	"11364": [
		40.745294,
		-73.760583
	],
	"11365": [
		40.739634,
		-73.79449
	],
	"11366": [
		40.728157,
		-73.785017
	],
	"11367": [
		40.730145,
		-73.82703
	],
	"11368": [
		40.749737,
		-73.853045
	],
	"11369": [
		40.763445,
		-73.872334
	],
	"11370": [
		40.765393,
		-73.893191
	],
	"11371": [
		40.774411,
		-73.873272
	],
	"11372": [
		40.751675,
		-73.883666
	],
	"11373": [
		40.738843,
		-73.878539
	],
	"11374": [
		40.726467,
		-73.861515
	],
	"11375": [
		40.720963,
		-73.84614
	],
	"11377": [
		40.74482,
		-73.905161
	],
	"11378": [
		40.724744,
		-73.909639
	],
	"11379": [
		40.716753,
		-73.879598
	],
	"11385": [
		40.700647,
		-73.889423
	],
	"11411": [
		40.694025,
		-73.736223
	],
	"11412": [
		40.698095,
		-73.758987
	],
	"11413": [
		40.671529,
		-73.752479
	],
	"11414": [
		40.657604,
		-73.844804
	],
	"11415": [
		40.7079,
		-73.828291
	],
	"11416": [
		40.684625,
		-73.849582
	],
	"11417": [
		40.676434,
		-73.844467
	],
	"11418": [
		40.700209,
		-73.836031
	],
	"11419": [
		40.688638,
		-73.822942
	],
	"11420": [
		40.673563,
		-73.817829
	],
	"11421": [
		40.69406,
		-73.858626
	],
	"11422": [
		40.660065,
		-73.736012
	],
	"11423": [
		40.715622,
		-73.768483
	],
	"11424": [
		40.714296,
		-73.827292
	],
	"11425": [
		40.607688,
		-74.023949
	],
	"11426": [
		40.736462,
		-73.722359
	],
	"11427": [
		40.730918,
		-73.745621
	],
	"11428": [
		40.721008,
		-73.742257
	],
	"11429": [
		40.709781,
		-73.738733
	],
	"11430": [
		40.646809,
		-73.786169
	],
	"11432": [
		40.715359,
		-73.793072
	],
	"11433": [
		40.698165,
		-73.786892
	],
	"11434": [
		40.676808,
		-73.776425
	],
	"11435": [
		40.701229,
		-73.80964
	],
	"11436": [
		40.675818,
		-73.796661
	],
	"11451": [
		40.70119,
		-73.795943
	],
	"11501": [
		40.746286,
		-73.638905
	],
	"11507": [
		40.770847,
		-73.65226
	],
	"11509": [
		40.587963,
		-73.728528
	],
	"11510": [
		40.650127,
		-73.607709
	],
	"11514": [
		40.749892,
		-73.612477
	],
	"11516": [
		40.625787,
		-73.726685
	],
	"11518": [
		40.637472,
		-73.666807
	],
	"11520": [
		40.649401,
		-73.582951
	],
	"11530": [
		40.726854,
		-73.637009
	],
	"11542": [
		40.872605,
		-73.628622
	],
	"11545": [
		40.826321,
		-73.589365
	],
	"11547": [
		40.83367,
		-73.642687
	],
	"11548": [
		40.812868,
		-73.627405
	],
	"11549": [
		40.717289,
		-73.602775
	],
	"11550": [
		40.701475,
		-73.621108
	],
	"11552": [
		40.692979,
		-73.652416
	],
	"11553": [
		40.706743,
		-73.592044
	],
	"11554": [
		40.720115,
		-73.558861
	],
	"11556": [
		40.719678,
		-73.58386
	],
	"11557": [
		40.637176,
		-73.691976
	],
	"11558": [
		40.605357,
		-73.649046
	],
	"11559": [
		40.603733,
		-73.717352
	],
	"11560": [
		40.880757,
		-73.588724
	],
	"11561": [
		40.589081,
		-73.648178
	],
	"11563": [
		40.657253,
		-73.673718
	],
	"11565": [
		40.675061,
		-73.671667
	],
	"11566": [
		40.663194,
		-73.554014
	],
	"11568": [
		40.786929,
		-73.59649
	],
	"11569": [
		40.589785,
		-73.582303
	],
	"11570": [
		40.666066,
		-73.638409
	],
	"11572": [
		40.631772,
		-73.636624
	],
	"11575": [
		40.680422,
		-73.584877
	],
	"11576": [
		40.798032,
		-73.647275
	],
	"11577": [
		40.783264,
		-73.638877
	],
	"11579": [
		40.844016,
		-73.644006
	],
	"11580": [
		40.6749,
		-73.702154
	],
	"11581": [
		40.651028,
		-73.715325
	],
	"11590": [
		40.755182,
		-73.574338
	],
	"11596": [
		40.759667,
		-73.642309
	],
	"11598": [
		40.630935,
		-73.712339
	],
	"11691": [
		40.601261,
		-73.761646
	],
	"11692": [
		40.594154,
		-73.791986
	],
	"11693": [
		40.590916,
		-73.809715
	],
	"11694": [
		40.57827,
		-73.844762
	],
	"11697": [
		40.552684,
		-73.924526
	],
	"11701": [
		40.681433,
		-73.410099
	],
	"11702": [
		40.650697,
		-73.262218
	],
	"11703": [
		40.732671,
		-73.32501
	],
	"11704": [
		40.717504,
		-73.358203
	],
	"11705": [
		40.745255,
		-73.054836
	],
	"11706": [
		40.722537,
		-73.252183
	],
	"11709": [
		40.906313,
		-73.558244
	],
	"11710": [
		40.671972,
		-73.531972
	],
	"11713": [
		40.776087,
		-72.942806
	],
	"11714": [
		40.742563,
		-73.486073
	],
	"11715": [
		40.750968,
		-73.034924
	],
	"11716": [
		40.776692,
		-73.134854
	],
	"11717": [
		40.783805,
		-73.252263
	],
	"11718": [
		40.716435,
		-73.261514
	],
	"11719": [
		40.782152,
		-72.912098
	],
	"11720": [
		40.870331,
		-73.082113
	],
	"11721": [
		40.902425,
		-73.371427
	],
	"11722": [
		40.783056,
		-73.194911
	],
	"11724": [
		40.864221,
		-73.456381
	],
	"11725": [
		40.840492,
		-73.280815
	],
	"11726": [
		40.67879,
		-73.395727
	],
	"11727": [
		40.882067,
		-73.004019
	],
	"11729": [
		40.761136,
		-73.32526
	],
	"11730": [
		40.717339,
		-73.17023
	],
	"11731": [
		40.862633,
		-73.31693
	],
	"11732": [
		40.844738,
		-73.536885
	],
	"11733": [
		40.940235,
		-73.11278
	],
	"11735": [
		40.732747,
		-73.432789
	],
	"11738": [
		40.83821,
		-73.038185
	],
	"11739": [
		40.735995,
		-73.160805
	],
	"11740": [
		40.865398,
		-73.361296
	],
	"11741": [
		40.794894,
		-73.070326
	],
	"11742": [
		40.810074,
		-73.041409
	],
	"11743": [
		40.883411,
		-73.423556
	],
	"11746": [
		40.814268,
		-73.362276
	],
	"11747": [
		40.784369,
		-73.408541
	],
	"11749": [
		40.806747,
		-73.170894
	],
	"11751": [
		40.730486,
		-73.213924
	],
	"11752": [
		40.757114,
		-73.174012
	],
	"11753": [
		40.789713,
		-73.539899
	],
	"11754": [
		40.885566,
		-73.249901
	],
	"11755": [
		40.857817,
		-73.116844
	],
	"11756": [
		40.724512,
		-73.516326
	],
	"11757": [
		40.68901,
		-73.373328
	],
	"11758": [
		40.668934,
		-73.458448
	],
	"11762": [
		40.682744,
		-73.446664
	],
	"11763": [
		40.826582,
		-72.98405
	],
	"11764": [
		40.92986,
		-72.973063
	],
	"11765": [
		40.882186,
		-73.558941
	],
	"11766": [
		40.939219,
		-73.018666
	],
	"11767": [
		40.842949,
		-73.145216
	],
	"11768": [
		40.923631,
		-73.339309
	],
	"11769": [
		40.734589,
		-73.125012
	],
	"11770": [
		40.645867,
		-73.156498
	],
	"11771": [
		40.872799,
		-73.52502
	],
	"11772": [
		40.76178,
		-72.987407
	],
	"11776": [
		40.913604,
		-73.046385
	],
	"11777": [
		40.956068,
		-73.066659
	],
	"11778": [
		40.948046,
		-72.937093
	],
	"11779": [
		40.812958,
		-73.11449
	],
	"11780": [
		40.909287,
		-73.174729
	],
	"11782": [
		40.738088,
		-73.08167
	],
	"11783": [
		40.677612,
		-73.490014
	],
	"11784": [
		40.868939,
		-73.041245
	],
	"11786": [
		40.950485,
		-72.886658
	],
	"11787": [
		40.852924,
		-73.21126
	],
	"11788": [
		40.818088,
		-73.213209
	],
	"11789": [
		40.962028,
		-72.971008
	],
	"11790": [
		40.905957,
		-73.127374
	],
	"11791": [
		40.828288,
		-73.505922
	],
	"11792": [
		40.955033,
		-72.825569
	],
	"11793": [
		40.651288,
		-73.514726
	],
	"11794": [
		40.913615,
		-73.125246
	],
	"11795": [
		40.709005,
		-73.296337
	],
	"11796": [
		40.731247,
		-73.099419
	],
	"11797": [
		40.820208,
		-73.47245
	],
	"11798": [
		40.752599,
		-73.378743
	],
	"11801": [
		40.762304,
		-73.524452
	],
	"11803": [
		40.7817,
		-73.473035
	],
	"11804": [
		40.75901,
		-73.457384
	],
	"11901": [
		40.925812,
		-72.64617
	],
	"11930": [
		40.989988,
		-72.099587
	],
	"11931": [
		40.934271,
		-72.612394
	],
	"11932": [
		40.934313,
		-72.306615
	],
	"11933": [
		40.942231,
		-72.765594
	],
	"11934": [
		40.798359,
		-72.794297
	],
	"11935": [
		41.021223,
		-72.486958
	],
	"11937": [
		41.013013,
		-72.168912
	],
	"11939": [
		41.123116,
		-72.31535
	],
	"11940": [
		40.81317,
		-72.752004
	],
	"11941": [
		40.83016,
		-72.729761
	],
	"11942": [
		40.850303,
		-72.581827
	],
	"11944": [
		41.10403,
		-72.371541
	],
	"11946": [
		40.87027,
		-72.521704
	],
	"11947": [
		40.950659,
		-72.571053
	],
	"11948": [
		40.960725,
		-72.54988
	],
	"11949": [
		40.866503,
		-72.804643
	],
	"11950": [
		40.808032,
		-72.84701
	],
	"11951": [
		40.763164,
		-72.830344
	],
	"11952": [
		41.001648,
		-72.547599
	],
	"11953": [
		40.892507,
		-72.951176
	],
	"11954": [
		41.047533,
		-71.946386
	],
	"11955": [
		40.809133,
		-72.816101
	],
	"11956": [
		40.969049,
		-72.462175
	],
	"11957": [
		41.192201,
		-72.148968
	],
	"11958": [
		41.039067,
		-72.464419
	],
	"11959": [
		40.822586,
		-72.601345
	],
	"11960": [
		40.810615,
		-72.706062
	],
	"11961": [
		40.905139,
		-72.888349
	],
	"11962": [
		40.930895,
		-72.268719
	],
	"11963": [
		40.993155,
		-72.319664
	],
	"11964": [
		41.055827,
		-72.319034
	],
	"11965": [
		41.096081,
		-72.2884
	],
	"11967": [
		40.794778,
		-72.875477
	],
	"11968": [
		40.905923,
		-72.415661
	],
	"11970": [
		40.938952,
		-72.577539
	],
	"11971": [
		41.064037,
		-72.430926
	],
	"11972": [
		40.847825,
		-72.702889
	],
	"11973": [
		40.86772,
		-72.882721
	],
	"11975": [
		40.941107,
		-72.244466
	],
	"11976": [
		40.922393,
		-72.350704
	],
	"11977": [
		40.828388,
		-72.679194
	],
	"11978": [
		40.826323,
		-72.649008
	],
	"11980": [
		40.831296,
		-72.923154
	],
	"12007": [
		42.455665,
		-73.927143
	],
	"12008": [
		42.853488,
		-73.906535
	],
	"12009": [
		42.697723,
		-74.03535
	],
	"12010": [
		42.937632,
		-74.173325
	],
	"12015": [
		42.294057,
		-73.825116
	],
	"12017": [
		42.32111,
		-73.455997
	],
	"12018": [
		42.628833,
		-73.520771
	],
	"12019": [
		42.934351,
		-73.881808
	],
	"12020": [
		43.001589,
		-73.868123
	],
	"12022": [
		42.656951,
		-73.333879
	],
	"12023": [
		42.598558,
		-74.183022
	],
	"12024": [
		42.476788,
		-73.533278
	],
	"12025": [
		43.083346,
		-74.138092
	],
	"12027": [
		42.935415,
		-73.907815
	],
	"12028": [
		42.934442,
		-73.442269
	],
	"12029": [
		42.41595,
		-73.424961
	],
	"12031": [
		42.766038,
		-74.451615
	],
	"12032": [
		43.124008,
		-74.52507
	],
	"12033": [
		42.543138,
		-73.705499
	],
	"12035": [
		42.730427,
		-74.359221
	],
	"12036": [
		42.541514,
		-74.673053
	],
	"12037": [
		42.344725,
		-73.567126
	],
	"12040": [
		42.63735,
		-73.350721
	],
	"12041": [
		42.577943,
		-73.95266
	],
	"12042": [
		42.416518,
		-73.938206
	],
	"12043": [
		42.69397,
		-74.530506
	],
	"12045": [
		42.482555,
		-73.800532
	],
	"12046": [
		42.507517,
		-73.925621
	],
	"12047": [
		42.784054,
		-73.726219
	],
	"12051": [
		42.345522,
		-73.842543
	],
	"12052": [
		42.75447,
		-73.478427
	],
	"12053": [
		42.757544,
		-74.190867
	],
	"12054": [
		42.608547,
		-73.864416
	],
	"12056": [
		42.764785,
		-74.09515
	],
	"12057": [
		42.968892,
		-73.346287
	],
	"12058": [
		42.34442,
		-73.917635
	],
	"12059": [
		42.619223,
		-74.060881
	],
	"12060": [
		42.410631,
		-73.505286
	],
	"12061": [
		42.599312,
		-73.657175
	],
	"12062": [
		42.538976,
		-73.504976
	],
	"12063": [
		42.568163,
		-73.638051
	],
	"12064": [
		42.614166,
		-74.655719
	],
	"12065": [
		42.852284,
		-73.785597
	],
	"12066": [
		42.790105,
		-74.352762
	],
	"12067": [
		42.557461,
		-73.920294
	],
	"12068": [
		42.956069,
		-74.401829
	],
	"12069": [
		42.946036,
		-74.279938
	],
	"12070": [
		42.986058,
		-74.263032
	],
	"12071": [
		42.552657,
		-74.422661
	],
	"12072": [
		42.884893,
		-74.356737
	],
	"12074": [
		43.054217,
		-74.030006
	],
	"12075": [
		42.299922,
		-73.633627
	],
	"12076": [
		42.410272,
		-74.395734
	],
	"12077": [
		42.588163,
		-73.777694
	],
	"12078": [
		43.134351,
		-74.339632
	],
	"12083": [
		42.424859,
		-74.026509
	],
	"12084": [
		42.704669,
		-73.899364
	],
	"12085": [
		42.703313,
		-73.963261
	],
	"12086": [
		43.009005,
		-74.086332
	],
	"12087": [
		42.43225,
		-73.892894
	],
	"12089": [
		42.867493,
		-73.312753
	],
	"12090": [
		42.876802,
		-73.351525
	],
	"12092": [
		42.696079,
		-74.378715
	],
	"12093": [
		42.497791,
		-74.628105
	],
	"12094": [
		42.899423,
		-73.490058
	],
	"12095": [
		43.024817,
		-74.403815
	],
	"12106": [
		42.389554,
		-73.710951
	],
	"12108": [
		43.573248,
		-74.451487
	],
	"12110": [
		42.750573,
		-73.776138
	],
	"12115": [
		42.477301,
		-73.5767
	],
	"12116": [
		42.538795,
		-74.911164
	],
	"12117": [
		43.167143,
		-74.261237
	],
	"12118": [
		42.909313,
		-73.713071
	],
	"12120": [
		42.449724,
		-74.148844
	],
	"12121": [
		42.839897,
		-73.607392
	],
	"12122": [
		42.54202,
		-74.326145
	],
	"12123": [
		42.547343,
		-73.598306
	],
	"12124": [
		42.453111,
		-73.797581
	],
	"12125": [
		42.484748,
		-73.399844
	],
	"12130": [
		42.442223,
		-73.65938
	],
	"12131": [
		42.453371,
		-74.463913
	],
	"12132": [
		42.470521,
		-73.630031
	],
	"12134": [
		43.269201,
		-74.228185
	],
	"12136": [
		42.420119,
		-73.565108
	],
	"12137": [
		42.860334,
		-74.133072
	],
	"12138": [
		42.748836,
		-73.370379
	],
	"12139": [
		43.500221,
		-74.579544
	],
	"12140": [
		42.696684,
		-73.540064
	],
	"12143": [
		42.489818,
		-73.855238
	],
	"12144": [
		42.627836,
		-73.717842
	],
	"12147": [
		42.518611,
		-74.15884
	],
	"12148": [
		42.827793,
		-73.848164
	],
	"12149": [
		42.616654,
		-74.563446
	],
	"12150": [
		42.880523,
		-74.052689
	],
	"12151": [
		42.922697,
		-73.787225
	],
	"12153": [
		42.629923,
		-73.473341
	],
	"12154": [
		42.93746,
		-73.605775
	],
	"12155": [
		42.596357,
		-74.827655
	],
	"12156": [
		42.483504,
		-73.747254
	],
	"12157": [
		42.669798,
		-74.286077
	],
	"12158": [
		42.542158,
		-73.822091
	],
	"12159": [
		42.651428,
		-73.885894
	],
	"12160": [
		42.761621,
		-74.383152
	],
	"12161": [
		42.534769,
		-73.854863
	],
	"12164": [
		43.578133,
		-74.359045
	],
	"12165": [
		42.306136,
		-73.504114
	],
	"12166": [
		42.833587,
		-74.445509
	],
	"12167": [
		42.424942,
		-74.578036
	],
	"12168": [
		42.560862,
		-73.380714
	],
	"12169": [
		42.592887,
		-73.448036
	],
	"12170": [
		43.001956,
		-73.667271
	],
	"12172": [
		42.288764,
		-73.739212
	],
	"12173": [
		42.380013,
		-73.75966
	],
	"12174": [
		42.353449,
		-73.728436
	],
	"12175": [
		42.544369,
		-74.55622
	],
	"12176": [
		42.382017,
		-73.980862
	],
	"12177": [
		42.950952,
		-74.28726
	],
	"12180": [
		42.748588,
		-73.599536
	],
	"12182": [
		42.799699,
		-73.630864
	],
	"12183": [
		42.74787,
		-73.692595
	],
	"12184": [
		42.419893,
		-73.653359
	],
	"12185": [
		42.862521,
		-73.554112
	],
	"12186": [
		42.633164,
		-73.977188
	],
	"12187": [
		42.61884,
		-74.463554
	],
	"12188": [
		42.821216,
		-73.695525
	],
	"12189": [
		42.736342,
		-73.717521
	],
	"12190": [
		43.475631,
		-74.28541
	],
	"12192": [
		42.409035,
		-73.827677
	],
	"12193": [
		42.52276,
		-74.043268
	],
	"12194": [
		42.528462,
		-74.447631
	],
	"12195": [
		42.482789,
		-73.475088
	],
	"12196": [
		42.631786,
		-73.613946
	],
	"12197": [
		42.609999,
		-74.724749
	],
	"12198": [
		42.672768,
		-73.633574
	],
	"12202": [
		42.635575,
		-73.759658
	],
	"12203": [
		42.681048,
		-73.84698
	],
	"12204": [
		42.691517,
		-73.73375
	],
	"12205": [
		42.718785,
		-73.82924
	],
	"12206": [
		42.674481,
		-73.782648
	],
	"12207": [
		42.658398,
		-73.745952
	],
	"12208": [
		42.653031,
		-73.809978
	],
	"12209": [
		42.638686,
		-73.790469
	],
	"12210": [
		42.659502,
		-73.756237
	],
	"12211": [
		42.703095,
		-73.763706
	],
	"12222": [
		42.685261,
		-73.82323
	],
	"12302": [
		42.878182,
		-73.982505
	],
	"12303": [
		42.740387,
		-73.905398
	],
	"12304": [
		42.77469,
		-73.898297
	],
	"12305": [
		42.812011,
		-73.950342
	],
	"12306": [
		42.805429,
		-74.044227
	],
	"12307": [
		42.804981,
		-73.932822
	],
	"12308": [
		42.82098,
		-73.91967
	],
	"12309": [
		42.79983,
		-73.864972
	],
	"12401": [
		41.987541,
		-74.010273
	],
	"12404": [
		41.818958,
		-74.236082
	],
	"12405": [
		42.317909,
		-74.085995
	],
	"12406": [
		42.079943,
		-74.524093
	],
	"12407": [
		42.317638,
		-74.358152
	],
	"12409": [
		42.040569,
		-74.181139
	],
	"12410": [
		42.066096,
		-74.424732
	],
	"12411": [
		41.876019,
		-74.044802
	],
	"12412": [
		42.012732,
		-74.279585
	],
	"12413": [
		42.313984,
		-74.02216
	],
	"12414": [
		42.232019,
		-73.913867
	],
	"12416": [
		42.10304,
		-74.281552
	],
	"12417": [
		41.906422,
		-73.990723
	],
	"12418": [
		42.358758,
		-74.16168
	],
	"12419": [
		41.860252,
		-74.102007
	],
	"12420": [
		41.672466,
		-74.371559
	],
	"12421": [
		42.250044,
		-74.546139
	],
	"12422": [
		42.391829,
		-74.213288
	],
	"12423": [
		42.379218,
		-74.109746
	],
	"12424": [
		42.247617,
		-74.115847
	],
	"12427": [
		42.134238,
		-74.136736
	],
	"12428": [
		41.746872,
		-74.466183
	],
	"12429": [
		41.833329,
		-73.985378
	],
	"12430": [
		42.19548,
		-74.503394
	],
	"12431": [
		42.362023,
		-74.023533
	],
	"12432": [
		42.044379,
		-73.94443
	],
	"12433": [
		42.000641,
		-74.156576
	],
	"12434": [
		42.36364,
		-74.502385
	],
	"12435": [
		41.7308,
		-74.51336
	],
	"12436": [
		42.195759,
		-74.077821
	],
	"12438": [
		42.204899,
		-74.601006
	],
	"12439": [
		42.277817,
		-74.21039
	],
	"12440": [
		41.781151,
		-74.172877
	],
	"12441": [
		42.134425,
		-74.509212
	],
	"12442": [
		42.182072,
		-74.221534
	],
	"12443": [
		41.934991,
		-74.084925
	],
	"12444": [
		42.264233,
		-74.29752
	],
	"12446": [
		41.809571,
		-74.326443
	],
	"12448": [
		42.086646,
		-74.16066
	],
	"12449": [
		41.992378,
		-73.993774
	],
	"12450": [
		42.133247,
		-74.244279
	],
	"12451": [
		42.304893,
		-73.948176
	],
	"12452": [
		42.252385,
		-74.364938
	],
	"12453": [
		42.093389,
		-73.936281
	],
	"12454": [
		42.28697,
		-74.149542
	],
	"12455": [
		42.140733,
		-74.659478
	],
	"12456": [
		42.032705,
		-73.997133
	],
	"12457": [
		42.044071,
		-74.252501
	],
	"12458": [
		41.822918,
		-74.43208
	],
	"12459": [
		42.240382,
		-74.678893
	],
	"12460": [
		42.415615,
		-74.14759
	],
	"12461": [
		41.904961,
		-74.267998
	],
	"12463": [
		42.205514,
		-74.020422
	],
	"12464": [
		42.023541,
		-74.367292
	],
	"12465": [
		42.157153,
		-74.460016
	],
	"12466": [
		41.904345,
		-73.979025
	],
	"12468": [
		42.300462,
		-74.423763
	],
	"12469": [
		42.448595,
		-74.246097
	],
	"12470": [
		42.299624,
		-74.093387
	],
	"12471": [
		41.843871,
		-74.041344
	],
	"12472": [
		41.84709,
		-74.079545
	],
	"12473": [
		42.258166,
		-74.041007
	],
	"12474": [
		42.323835,
		-74.582994
	],
	"12475": [
		42.015237,
		-74.015432
	],
	"12477": [
		42.092591,
		-73.98811
	],
	"12480": [
		42.135381,
		-74.391274
	],
	"12481": [
		41.987348,
		-74.228435
	],
	"12482": [
		42.268143,
		-73.955446
	],
	"12483": [
		41.672235,
		-74.421901
	],
	"12484": [
		41.861918,
		-74.176528
	],
	"12485": [
		42.205023,
		-74.144201
	],
	"12486": [
		41.832417,
		-74.063984
	],
	"12487": [
		41.869399,
		-73.998805
	],
	"12489": [
		41.750485,
		-74.358293
	],
	"12490": [
		42.122854,
		-73.924476
	],
	"12491": [
		41.965192,
		-74.141459
	],
	"12492": [
		42.184926,
		-74.335763
	],
	"12493": [
		41.785665,
		-73.974132
	],
	"12494": [
		41.956598,
		-74.292894
	],
	"12495": [
		42.084923,
		-74.24068
	],
	"12496": [
		42.337294,
		-74.269692
	],
	"12498": [
		42.045663,
		-74.109618
	],
	"12501": [
		41.862964,
		-73.573517
	],
	"12502": [
		42.086568,
		-73.664724
	],
	"12503": [
		42.035959,
		-73.580146
	],
	"12504": [
		42.035298,
		-73.913144
	],
	"12507": [
		42.009241,
		-73.917141
	],
	"12508": [
		41.495996,
		-73.953632
	],
	"12512": [
		41.548499,
		-73.968402
	],
	"12513": [
		42.219307,
		-73.720481
	],
	"12514": [
		41.877409,
		-73.764423
	],
	"12515": [
		41.684774,
		-74.06484
	],
	"12516": [
		42.109096,
		-73.561332
	],
	"12517": [
		42.114296,
		-73.507454
	],
	"12518": [
		41.416157,
		-74.043064
	],
	"12520": [
		41.428017,
		-73.996195
	],
	"12521": [
		42.171335,
		-73.650487
	],
	"12522": [
		41.719979,
		-73.598384
	],
	"12523": [
		42.08687,
		-73.759509
	],
	"12524": [
		41.528785,
		-73.888317
	],
	"12525": [
		41.691564,
		-74.188272
	],
	"12526": [
		42.122234,
		-73.858769
	],
	"12527": [
		41.519428,
		-73.935669
	],
	"12528": [
		41.722069,
		-74.009471
	],
	"12529": [
		42.198626,
		-73.542777
	],
	"12530": [
		42.207459,
		-73.687752
	],
	"12531": [
		41.540556,
		-73.671671
	],
	"12533": [
		41.559772,
		-73.787099
	],
	"12534": [
		42.217345,
		-73.752256
	],
	"12538": [
		41.79223,
		-73.893767
	],
	"12540": [
		41.671202,
		-73.724891
	],
	"12542": [
		41.613876,
		-74.015014
	],
	"12543": [
		41.49552,
		-74.173104
	],
	"12545": [
		41.782904,
		-73.669402
	],
	"12546": [
		41.948,
		-73.523349
	],
	"12547": [
		41.660687,
		-73.986567
	],
	"12548": [
		41.658064,
		-74.102416
	],
	"12549": [
		41.528031,
		-74.259365
	],
	"12550": [
		41.539574,
		-74.057223
	],
	"12553": [
		41.455714,
		-74.074901
	],
	"12561": [
		41.759307,
		-74.096058
	],
	"12563": [
		41.499189,
		-73.587226
	],
	"12564": [
		41.582614,
		-73.582577
	],
	"12565": [
		42.247128,
		-73.647638
	],
	"12566": [
		41.633519,
		-74.319661
	],
	"12567": [
		41.986194,
		-73.642216
	],
	"12569": [
		41.734556,
		-73.792835
	],
	"12570": [
		41.626251,
		-73.675608
	],
	"12571": [
		42.002775,
		-73.809608
	],
	"12572": [
		41.924885,
		-73.863664
	],
	"12574": [
		41.917688,
		-73.945658
	],
	"12575": [
		41.466705,
		-74.178871
	],
	"12577": [
		41.42404,
		-74.122142
	],
	"12578": [
		41.80912,
		-73.795854
	],
	"12580": [
		41.863651,
		-73.871536
	],
	"12581": [
		41.901615,
		-73.700592
	],
	"12582": [
		41.544301,
		-73.738452
	],
	"12583": [
		42.063367,
		-73.868652
	],
	"12585": [
		41.726404,
		-73.69151
	],
	"12586": [
		41.562764,
		-74.170102
	],
	"12589": [
		41.623791,
		-74.158771
	],
	"12590": [
		41.592556,
		-73.886853
	],
	"12592": [
		41.802075,
		-73.578626
	],
	"12594": [
		41.684461,
		-73.557676
	],
	"12601": [
		41.701921,
		-73.911519
	],
	"12603": [
		41.675868,
		-73.864484
	],
	"12604": [
		41.688259,
		-73.892171
	],
	"12701": [
		41.650829,
		-74.699907
	],
	"12719": [
		41.49825,
		-74.904285
	],
	"12720": [
		41.645919,
		-74.907759
	],
	"12721": [
		41.581723,
		-74.422422
	],
	"12722": [
		41.590634,
		-74.374304
	],
	"12723": [
		41.7531,
		-74.987694
	],
	"12724": [
		41.837621,
		-74.958711
	],
	"12725": [
		41.983183,
		-74.570105
	],
	"12726": [
		41.708209,
		-75.017203
	],
	"12729": [
		41.475792,
		-74.623499
	],
	"12732": [
		41.551487,
		-74.874606
	],
	"12733": [
		41.724768,
		-74.617933
	],
	"12734": [
		41.734585,
		-74.75046
	],
	"12736": [
		41.852843,
		-75.021754
	],
	"12737": [
		41.501481,
		-74.798632
	],
	"12738": [
		41.676246,
		-74.586211
	],
	"12740": [
		41.938832,
		-74.434026
	],
	"12741": [
		41.839141,
		-75.077725
	],
	"12742": [
		41.724328,
		-74.723518
	],
	"12743": [
		41.548548,
		-74.831025
	],
	"12745": [
		41.783433,
		-75.024648
	],
	"12746": [
		41.442335,
		-74.656785
	],
	"12747": [
		41.750928,
		-74.692894
	],
	"12748": [
		41.774642,
		-74.922609
	],
	"12749": [
		41.695254,
		-74.841166
	],
	"12750": [
		41.727825,
		-74.965854
	],
	"12751": [
		41.69573,
		-74.664485
	],
	"12752": [
		41.680039,
		-74.99419
	],
	"12754": [
		41.798195,
		-74.736889
	],
	"12758": [
		41.940283,
		-74.739118
	],
	"12759": [
		41.78173,
		-74.658853
	],
	"12760": [
		41.903935,
		-75.107847
	],
	"12762": [
		41.64796,
		-74.792011
	],
	"12763": [
		41.676348,
		-74.522774
	],
	"12764": [
		41.591553,
		-74.995556
	],
	"12765": [
		41.852341,
		-74.621165
	],
	"12766": [
		41.815208,
		-74.978854
	],
	"12767": [
		41.838093,
		-74.994415
	],
	"12768": [
		41.864443,
		-74.730022
	],
	"12769": [
		41.657942,
		-74.467272
	],
	"12770": [
		41.449118,
		-74.843117
	],
	"12771": [
		41.37438,
		-74.624279
	],
	"12775": [
		41.613617,
		-74.59336
	],
	"12776": [
		41.96339,
		-74.957793
	],
	"12777": [
		41.561783,
		-74.709708
	],
	"12778": [
		41.642678,
		-74.81755
	],
	"12779": [
		41.702466,
		-74.632195
	],
	"12780": [
		41.440142,
		-74.727343
	],
	"12781": [
		41.619674,
		-74.466383
	],
	"12783": [
		41.738633,
		-74.833724
	],
	"12784": [
		41.669877,
		-74.63824
	],
	"12785": [
		41.532393,
		-74.561271
	],
	"12786": [
		41.63871,
		-74.857609
	],
	"12787": [
		41.795394,
		-74.845029
	],
	"12788": [
		41.787539,
		-74.589314
	],
	"12789": [
		41.704524,
		-74.570951
	],
	"12790": [
		41.592057,
		-74.517419
	],
	"12791": [
		41.817275,
		-74.89287
	],
	"12792": [
		41.51392,
		-74.95982
	],
	"12801": [
		43.31116,
		-73.645286
	],
	"12803": [
		43.290078,
		-73.629363
	],
	"12804": [
		43.340954,
		-73.685911
	],
	"12808": [
		43.759975,
		-73.716367
	],
	"12809": [
		43.237078,
		-73.454506
	],
	"12810": [
		43.491968,
		-73.985954
	],
	"12811": [
		43.605457,
		-74.02833
	],
	"12812": [
		43.875794,
		-74.389767
	],
	"12814": [
		43.631894,
		-73.632551
	],
	"12815": [
		43.69599,
		-73.667887
	],
	"12816": [
		43.044236,
		-73.382032
	],
	"12817": [
		43.639585,
		-73.823628
	],
	"12819": [
		43.59087,
		-73.468547
	],
	"12821": [
		43.453564,
		-73.415995
	],
	"12822": [
		43.228592,
		-73.922202
	],
	"12823": [
		43.179961,
		-73.409117
	],
	"12824": [
		43.524756,
		-73.727177
	],
	"12827": [
		43.46389,
		-73.531368
	],
	"12828": [
		43.254993,
		-73.558355
	],
	"12831": [
		43.195329,
		-73.691811
	],
	"12832": [
		43.358467,
		-73.330271
	],
	"12833": [
		43.15,
		-73.840896
	],
	"12834": [
		43.094307,
		-73.500583
	],
	"12835": [
		43.332787,
		-74.006311
	],
	"12836": [
		43.712347,
		-73.605597
	],
	"12837": [
		43.476445,
		-73.255601
	],
	"12838": [
		43.329056,
		-73.405062
	],
	"12839": [
		43.354486,
		-73.553953
	],
	"12841": [
		43.606007,
		-73.533013
	],
	"12842": [
		43.738345,
		-74.367058
	],
	"12843": [
		43.565104,
		-73.972748
	],
	"12844": [
		43.489396,
		-73.621194
	],
	"12845": [
		43.424048,
		-73.71274
	],
	"12846": [
		43.345981,
		-73.789717
	],
	"12847": [
		44.008384,
		-74.609231
	],
	"12849": [
		43.449567,
		-73.29832
	],
	"12850": [
		43.102616,
		-73.981441
	],
	"12851": [
		43.841891,
		-74.034467
	],
	"12852": [
		43.935796,
		-74.167522
	],
	"12853": [
		43.657554,
		-74.064187
	],
	"12855": [
		44.02701,
		-73.758053
	],
	"12856": [
		43.66594,
		-74.142961
	],
	"12857": [
		43.819563,
		-73.89062
	],
	"12858": [
		43.908933,
		-73.67578
	],
	"12859": [
		43.171875,
		-73.920872
	],
	"12860": [
		43.757013,
		-73.843367
	],
	"12861": [
		43.746887,
		-73.417527
	],
	"12862": [
		43.685405,
		-73.910321
	],
	"12863": [
		43.060363,
		-73.931906
	],
	"12864": [
		43.727365,
		-74.305388
	],
	"12865": [
		43.214159,
		-73.347451
	],
	"12866": [
		43.073715,
		-73.740236
	],
	"12870": [
		43.830056,
		-73.761222
	],
	"12871": [
		43.088569,
		-73.612965
	],
	"12872": [
		43.874656,
		-73.734418
	],
	"12873": [
		43.117451,
		-73.311646
	],
	"12874": [
		43.690561,
		-73.549743
	],
	"12878": [
		43.415025,
		-74.02745
	],
	"12883": [
		43.836596,
		-73.552843
	],
	"12884": [
		43.088396,
		-73.591291
	],
	"12885": [
		43.524868,
		-73.807651
	],
	"12886": [
		43.673098,
		-73.93589
	],
	"12887": [
		43.53676,
		-73.365798
	],
	"12901": [
		44.703651,
		-73.472669
	],
	"12903": [
		44.680305,
		-73.445886
	],
	"12910": [
		44.845249,
		-73.619461
	],
	"12911": [
		44.52144,
		-73.460805
	],
	"12912": [
		44.480941,
		-73.772482
	],
	"12913": [
		44.430097,
		-74.002212
	],
	"12914": [
		44.927419,
		-74.602942
	],
	"12916": [
		44.834052,
		-74.515665
	],
	"12917": [
		44.927638,
		-74.17891
	],
	"12918": [
		44.700736,
		-73.676657
	],
	"12919": [
		44.964539,
		-73.447083
	],
	"12920": [
		44.882767,
		-74.066008
	],
	"12921": [
		44.888628,
		-73.441064
	],
	"12922": [
		44.286614,
		-74.702114
	],
	"12923": [
		44.960319,
		-73.939419
	],
	"12924": [
		44.480467,
		-73.581081
	],
	"12926": [
		44.950821,
		-74.329
	],
	"12927": [
		44.20725,
		-74.809746
	],
	"12928": [
		43.963837,
		-73.583248
	],
	"12929": [
		44.720027,
		-73.719234
	],
	"12930": [
		44.720458,
		-74.543229
	],
	"12932": [
		44.214405,
		-73.608948
	],
	"12933": [
		44.890994,
		-73.845341
	],
	"12934": [
		44.875376,
		-73.873665
	],
	"12935": [
		44.844657,
		-73.796933
	],
	"12936": [
		44.285062,
		-73.40145
	],
	"12937": [
		44.960847,
		-74.478455
	],
	"12939": [
		44.432944,
		-74.160829
	],
	"12941": [
		44.347329,
		-73.702866
	],
	"12942": [
		44.232492,
		-73.826827
	],
	"12943": [
		44.122772,
		-73.8835
	],
	"12944": [
		44.433105,
		-73.533248
	],
	"12945": [
		44.309091,
		-74.24044
	],
	"12946": [
		44.206554,
		-74.046061
	],
	"12950": [
		44.318369,
		-73.581246
	],
	"12952": [
		44.70832,
		-73.90566
	],
	"12953": [
		44.745352,
		-74.260037
	],
	"12955": [
		44.80665,
		-73.970421
	],
	"12956": [
		44.097612,
		-73.481333
	],
	"12957": [
		44.848324,
		-74.574605
	],
	"12958": [
		44.960295,
		-73.571184
	],
	"12959": [
		44.952351,
		-73.719912
	],
	"12960": [
		44.015756,
		-73.572348
	],
	"12961": [
		44.057111,
		-73.549539
	],
	"12962": [
		44.701391,
		-73.605439
	],
	"12964": [
		44.125919,
		-73.626721
	],
	"12965": [
		44.703456,
		-74.685289
	],
	"12966": [
		44.798893,
		-74.418686
	],
	"12967": [
		44.774921,
		-74.657566
	],
	"12969": [
		44.710897,
		-74.09815
	],
	"12970": [
		44.478136,
		-74.307514
	],
	"12972": [
		44.554081,
		-73.569296
	],
	"12973": [
		44.287677,
		-74.594706
	],
	"12974": [
		44.060141,
		-73.46483
	],
	"12975": [
		44.529091,
		-73.430536
	],
	"12976": [
		44.503733,
		-74.230251
	],
	"12977": [
		44.277015,
		-74.072971
	],
	"12978": [
		44.61636,
		-73.80871
	],
	"12979": [
		44.991657,
		-73.373374
	],
	"12980": [
		44.563851,
		-74.524079
	],
	"12981": [
		44.627099,
		-73.845851
	],
	"12983": [
		44.307529,
		-74.147022
	],
	"12985": [
		44.560709,
		-73.738967
	],
	"12986": [
		44.226011,
		-74.480931
	],
	"12987": [
		44.320841,
		-73.75346
	],
	"12989": [
		44.520103,
		-74.069774
	],
	"12992": [
		44.817751,
		-73.516729
	],
	"12993": [
		44.211345,
		-73.476221
	],
	"12996": [
		44.355266,
		-73.448055
	],
	"12997": [
		44.372798,
		-73.892043
	],
	"12998": [
		44.0778,
		-73.576545
	],
	"13020": [
		42.816424,
		-76.074504
	],
	"13021": [
		42.922279,
		-76.558539
	],
	"13024": [
		42.934596,
		-76.574232
	],
	"13026": [
		42.744043,
		-76.652266
	],
	"13027": [
		43.166437,
		-76.364345
	],
	"13028": [
		43.305216,
		-75.945294
	],
	"13029": [
		43.225942,
		-76.151343
	],
	"13030": [
		43.152233,
		-75.962695
	],
	"13031": [
		43.045015,
		-76.309541
	],
	"13032": [
		43.081617,
		-75.766018
	],
	"13033": [
		43.188494,
		-76.562626
	],
	"13034": [
		42.95678,
		-76.707909
	],
	"13035": [
		42.940849,
		-75.830103
	],
	"13036": [
		43.309256,
		-76.166775
	],
	"13037": [
		43.067797,
		-75.854933
	],
	"13039": [
		43.172142,
		-76.056249
	],
	"13040": [
		42.559649,
		-75.930761
	],
	"13041": [
		43.192089,
		-76.192302
	],
	"13042": [
		43.26045,
		-75.85258
	],
	"13044": [
		43.291249,
		-75.996241
	],
	"13045": [
		42.573849,
		-76.202145
	],
	"13051": [
		42.876725,
		-75.908639
	],
	"13052": [
		42.71231,
		-75.865194
	],
	"13053": [
		42.479575,
		-76.267918
	],
	"13054": [
		43.169352,
		-75.666823
	],
	"13057": [
		43.101955,
		-76.037919
	],
	"13060": [
		43.022862,
		-76.411872
	],
	"13061": [
		42.871851,
		-75.762082
	],
	"13062": [
		42.484095,
		-76.384376
	],
	"13063": [
		42.847849,
		-75.977961
	],
	"13064": [
		43.328996,
		-76.711915
	],
	"13066": [
		43.032475,
		-76.000667
	],
	"13068": [
		42.492431,
		-76.359199
	],
	"13069": [
		43.329276,
		-76.380655
	],
	"13071": [
		42.675114,
		-76.542579
	],
	"13072": [
		42.76221,
		-75.763989
	],
	"13073": [
		42.58367,
		-76.387923
	],
	"13074": [
		43.310917,
		-76.549843
	],
	"13076": [
		43.353715,
		-76.149309
	],
	"13077": [
		42.727973,
		-76.211042
	],
	"13078": [
		42.958399,
		-76.061101
	],
	"13080": [
		43.09321,
		-76.485258
	],
	"13081": [
		42.673617,
		-76.627152
	],
	"13082": [
		43.10273,
		-75.959888
	],
	"13083": [
		43.645775,
		-75.98168
	],
	"13084": [
		42.880541,
		-76.124474
	],
	"13087": [
		42.708597,
		-76.15405
	],
	"13088": [
		43.112421,
		-76.189457
	],
	"13090": [
		43.153084,
		-76.212402
	],
	"13092": [
		42.654563,
		-76.419295
	],
	"13101": [
		42.589192,
		-76.056073
	],
	"13102": [
		42.550304,
		-76.292002
	],
	"13103": [
		43.32576,
		-76.109545
	],
	"13104": [
		42.96303,
		-75.948439
	],
	"13108": [
		42.964845,
		-76.331113
	],
	"13110": [
		42.895398,
		-76.280364
	],
	"13111": [
		43.258488,
		-76.614264
	],
	"13112": [
		43.106266,
		-76.417239
	],
	"13113": [
		43.16265,
		-76.538623
	],
	"13114": [
		43.465706,
		-76.244786
	],
	"13115": [
		43.398646,
		-76.478779
	],
	"13116": [
		43.074797,
		-76.007947
	],
	"13117": [
		43.009299,
		-76.707508
	],
	"13118": [
		42.755585,
		-76.387278
	],
	"13120": [
		42.933187,
		-76.175145
	],
	"13122": [
		42.837754,
		-75.86152
	],
	"13123": [
		43.233564,
		-75.769068
	],
	"13124": [
		42.661074,
		-75.823604
	],
	"13126": [
		43.438798,
		-76.457454
	],
	"13131": [
		43.423243,
		-76.091802
	],
	"13132": [
		43.271918,
		-76.251052
	],
	"13134": [
		42.967368,
		-75.684678
	],
	"13135": [
		43.253687,
		-76.314375
	],
	"13136": [
		42.614098,
		-75.844788
	],
	"13138": [
		42.899087,
		-76.014634
	],
	"13140": [
		43.060381,
		-76.650274
	],
	"13141": [
		42.752495,
		-76.185697
	],
	"13142": [
		43.556281,
		-76.138339
	],
	"13143": [
		43.235788,
		-76.714793
	],
	"13144": [
		43.568755,
		-75.977019
	],
	"13145": [
		43.646742,
		-76.116311
	],
	"13146": [
		43.085645,
		-76.750191
	],
	"13147": [
		42.775406,
		-76.569608
	],
	"13148": [
		42.913372,
		-76.78526
	],
	"13152": [
		42.890839,
		-76.37262
	],
	"13153": [
		42.996557,
		-76.453627
	],
	"13155": [
		42.674546,
		-75.776726
	],
	"13156": [
		43.32599,
		-76.661306
	],
	"13157": [
		43.206652,
		-75.721431
	],
	"13158": [
		42.696935,
		-75.951068
	],
	"13159": [
		42.802964,
		-76.111618
	],
	"13160": [
		42.827598,
		-76.648904
	],
	"13162": [
		43.185045,
		-75.714741
	],
	"13163": [
		43.080092,
		-75.710999
	],
	"13164": [
		43.096855,
		-76.31264
	],
	"13165": [
		42.916639,
		-76.883297
	],
	"13166": [
		43.078935,
		-76.565379
	],
	"13167": [
		43.326421,
		-76.06026
	],
	"13202": [
		43.043782,
		-76.150638
	],
	"13203": [
		43.061111,
		-76.134924
	],
	"13204": [
		43.050817,
		-76.177473
	],
	"13205": [
		43.005276,
		-76.14203
	],
	"13206": [
		43.073465,
		-76.105806
	],
	"13207": [
		43.012813,
		-76.163317
	],
	"13208": [
		43.078768,
		-76.14523
	],
	"13209": [
		43.068502,
		-76.224251
	],
	"13210": [
		43.031057,
		-76.127249
	],
	"13211": [
		43.103572,
		-76.119484
	],
	"13212": [
		43.129697,
		-76.130154
	],
	"13214": [
		43.038709,
		-76.075591
	],
	"13215": [
		42.980793,
		-76.223386
	],
	"13219": [
		43.041266,
		-76.224195
	],
	"13224": [
		43.037162,
		-76.1029
	],
	"13290": [
		43.069136,
		-76.173017
	],
	"13301": [
		43.41605,
		-75.218175
	],
	"13302": [
		43.498115,
		-75.965068
	],
	"13303": [
		43.367414,
		-75.468212
	],
	"13304": [
		43.24388,
		-75.160287
	],
	"13305": [
		43.892289,
		-75.421171
	],
	"13308": [
		43.251266,
		-75.657668
	],
	"13309": [
		43.452005,
		-75.355443
	],
	"13310": [
		42.88962,
		-75.571545
	],
	"13312": [
		43.691839,
		-75.204374
	],
	"13313": [
		42.880221,
		-75.272902
	],
	"13314": [
		42.816533,
		-75.319104
	],
	"13315": [
		42.744144,
		-75.143611
	],
	"13316": [
		43.418917,
		-75.73974
	],
	"13317": [
		42.854101,
		-74.590839
	],
	"13318": [
		42.921536,
		-75.260063
	],
	"13319": [
		43.026436,
		-75.266925
	],
	"13320": [
		42.777805,
		-74.740798
	],
	"13321": [
		43.087796,
		-75.370637
	],
	"13322": [
		42.954345,
		-75.201657
	],
	"13323": [
		43.039981,
		-75.379353
	],
	"13324": [
		43.320641,
		-74.961602
	],
	"13325": [
		43.576282,
		-75.527857
	],
	"13326": [
		42.722511,
		-74.895371
	],
	"13327": [
		43.972929,
		-75.262309
	],
	"13328": [
		42.985096,
		-75.429027
	],
	"13329": [
		43.107462,
		-74.708431
	],
	"13331": [
		43.866299,
		-74.880901
	],
	"13332": [
		42.764159,
		-75.581736
	],
	"13333": [
		42.836995,
		-74.818644
	],
	"13334": [
		42.827039,
		-75.656427
	],
	"13335": [
		42.70226,
		-75.248224
	],
	"13337": [
		42.757804,
		-74.999545
	],
	"13338": [
		43.528032,
		-74.987121
	],
	"13339": [
		42.936895,
		-74.658658
	],
	"13340": [
		43.061642,
		-75.12857
	],
	"13341": [
		43.036086,
		-75.396891
	],
	"13342": [
		42.654143,
		-75.195234
	],
	"13343": [
		43.751239,
		-75.3115
	],
	"13345": [
		43.687108,
		-75.321254
	],
	"13346": [
		42.818442,
		-75.544331
	],
	"13348": [
		42.709982,
		-75.066926
	],
	"13350": [
		43.061009,
		-75.000439
	],
	"13352": [
		43.313337,
		-75.116208
	],
	"13353": [
		43.447279,
		-74.694629
	],
	"13354": [
		43.265093,
		-75.268497
	],
	"13355": [
		42.809841,
		-75.430434
	],
	"13357": [
		42.971061,
		-75.081209
	],
	"13360": [
		43.72179,
		-74.714836
	],
	"13361": [
		42.904352,
		-74.86756
	],
	"13362": [
		42.982178,
		-75.522003
	],
	"13363": [
		43.324528,
		-75.513109
	],
	"13364": [
		42.804977,
		-75.261071
	],
	"13365": [
		43.125689,
		-74.853291
	],
	"13367": [
		43.757731,
		-75.532709
	],
	"13368": [
		43.638483,
		-75.286787
	],
	"13402": [
		42.892429,
		-75.500629
	],
	"13403": [
		43.164533,
		-75.267645
	],
	"13404": [
		43.736385,
		-75.471758
	],
	"13406": [
		43.134514,
		-74.924889
	],
	"13407": [
		42.968801,
		-74.950576
	],
	"13408": [
		42.922949,
		-75.676749
	],
	"13409": [
		42.976475,
		-75.595112
	],
	"13410": [
		42.931043,
		-74.612591
	],
	"13411": [
		42.633789,
		-75.306457
	],
	"13413": [
		43.060413,
		-75.279398
	],
	"13415": [
		42.596494,
		-75.198473
	],
	"13416": [
		43.187371,
		-74.970659
	],
	"13417": [
		43.100942,
		-75.29381
	],
	"13418": [
		42.845704,
		-75.38046
	],
	"13420": [
		43.717768,
		-74.984147
	],
	"13421": [
		43.061915,
		-75.660092
	],
	"13424": [
		43.152367,
		-75.365215
	],
	"13425": [
		42.964793,
		-75.48706
	],
	"13428": [
		42.915086,
		-74.546249
	],
	"13431": [
		43.209081,
		-75.073326
	],
	"13433": [
		43.594911,
		-75.248869
	],
	"13435": [
		43.304981,
		-75.150772
	],
	"13436": [
		43.811023,
		-74.666226
	],
	"13437": [
		43.580319,
		-75.803835
	],
	"13438": [
		43.354138,
		-75.159613
	],
	"13439": [
		42.857316,
		-74.995275
	],
	"13440": [
		43.215771,
		-75.461779
	],
	"13441": [
		43.226366,
		-75.40824
	],
	"13450": [
		42.701927,
		-74.810297
	],
	"13452": [
		43.043056,
		-74.63047
	],
	"13454": [
		43.219834,
		-74.757687
	],
	"13456": [
		43.000029,
		-75.255495
	],
	"13459": [
		42.775008,
		-74.588678
	],
	"13460": [
		42.687707,
		-75.44229
	],
	"13461": [
		43.070467,
		-75.599126
	],
	"13464": [
		42.687973,
		-75.615788
	],
	"13468": [
		42.84803,
		-74.851887
	],
	"13469": [
		43.214828,
		-75.302367
	],
	"13470": [
		43.209569,
		-74.609995
	],
	"13471": [
		43.357597,
		-75.577397
	],
	"13472": [
		43.697411,
		-75.067862
	],
	"13473": [
		43.646449,
		-75.443434
	],
	"13475": [
		42.893741,
		-74.830529
	],
	"13476": [
		43.087503,
		-75.509514
	],
	"13477": [
		43.032894,
		-75.512948
	],
	"13478": [
		43.144012,
		-75.581897
	],
	"13480": [
		42.917854,
		-75.363169
	],
	"13483": [
		43.397335,
		-75.826061
	],
	"13484": [
		42.866325,
		-75.65919
	],
	"13485": [
		42.787528,
		-75.315224
	],
	"13486": [
		43.345147,
		-75.344599
	],
	"13488": [
		42.688638,
		-74.750589
	],
	"13489": [
		43.460774,
		-75.552463
	],
	"13490": [
		43.11008,
		-75.426511
	],
	"13491": [
		42.864135,
		-75.168133
	],
	"13492": [
		43.114604,
		-75.33768
	],
	"13493": [
		43.432843,
		-75.897509
	],
	"13494": [
		43.532529,
		-75.141288
	],
	"13495": [
		43.11089,
		-75.277497
	],
	"13501": [
		43.081283,
		-75.225833
	],
	"13502": [
		43.141264,
		-75.154707
	],
	"13601": [
		43.968892,
		-75.906501
	],
	"13602": [
		44.064621,
		-75.781086
	],
	"13603": [
		44.035974,
		-75.793813
	],
	"13605": [
		43.80741,
		-76.050358
	],
	"13606": [
		43.872576,
		-76.014735
	],
	"13607": [
		44.298548,
		-75.936006
	],
	"13608": [
		44.26094,
		-75.613698
	],
	"13612": [
		43.985237,
		-75.76937
	],
	"13613": [
		44.870613,
		-74.750443
	],
	"13614": [
		44.530889,
		-75.69117
	],
	"13615": [
		44.047775,
		-75.984057
	],
	"13616": [
		44.030078,
		-75.857573
	],
	"13617": [
		44.580531,
		-75.142767
	],
	"13618": [
		44.114766,
		-76.290981
	],
	"13619": [
		43.978952,
		-75.600977
	],
	"13620": [
		43.908782,
		-75.448325
	],
	"13621": [
		44.834246,
		-75.080093
	],
	"13622": [
		44.100667,
		-76.106996
	],
	"13623": [
		44.449786,
		-75.752462
	],
	"13624": [
		44.20948,
		-76.093055
	],
	"13625": [
		44.538101,
		-74.928377
	],
	"13626": [
		43.830086,
		-75.734774
	],
	"13628": [
		44.030542,
		-75.682394
	],
	"13630": [
		44.498619,
		-75.311532
	],
	"13633": [
		44.49743,
		-75.455993
	],
	"13634": [
		44.01129,
		-76.073698
	],
	"13635": [
		44.286952,
		-75.281419
	],
	"13636": [
		43.743443,
		-76.11655
	],
	"13637": [
		44.106202,
		-75.818322
	],
	"13638": [
		44.019072,
		-75.741692
	],
	"13639": [
		44.263676,
		-75.150529
	],
	"13640": [
		44.303503,
		-76.02811
	],
	"13641": [
		44.273801,
		-76.003351
	],
	"13642": [
		44.335388,
		-75.455879
	],
	"13643": [
		44.031812,
		-75.717094
	],
	"13646": [
		44.446082,
		-75.674198
	],
	"13647": [
		44.605875,
		-74.98058
	],
	"13648": [
		44.150217,
		-75.318
	],
	"13650": [
		43.81131,
		-76.216097
	],
	"13651": [
		43.866158,
		-76.176966
	],
	"13652": [
		44.432661,
		-75.186773
	],
	"13654": [
		44.577138,
		-75.436852
	],
	"13655": [
		44.981859,
		-74.65015
	],
	"13656": [
		44.192383,
		-75.955933
	],
	"13658": [
		44.747782,
		-75.271203
	],
	"13659": [
		43.738005,
		-75.86338
	],
	"13660": [
		44.773868,
		-75.160958
	],
	"13661": [
		43.70962,
		-76.098396
	],
	"13662": [
		44.932334,
		-74.883932
	],
	"13664": [
		44.584013,
		-75.64546
	],
	"13665": [
		44.04846,
		-75.434366
	],
	"13666": [
		44.218485,
		-74.926076
	],
	"13667": [
		44.837267,
		-74.960097
	],
	"13668": [
		44.75482,
		-74.986306
	],
	"13669": [
		44.672777,
		-75.482342
	],
	"13670": [
		44.167379,
		-75.116735
	],
	"13672": [
		44.470543,
		-74.660706
	],
	"13673": [
		44.164347,
		-75.718028
	],
	"13674": [
		43.738561,
		-76.04818
	],
	"13675": [
		44.281718,
		-75.846286
	],
	"13676": [
		44.65496,
		-74.926222
	],
	"13677": [
		44.512429,
		-75.179673
	],
	"13678": [
		44.813766,
		-74.992918
	],
	"13679": [
		44.319891,
		-75.770605
	],
	"13680": [
		44.595988,
		-75.323398
	],
	"13681": [
		44.428054,
		-75.373151
	],
	"13682": [
		43.843312,
		-75.901905
	],
	"13684": [
		44.356596,
		-75.013141
	],
	"13685": [
		43.925469,
		-76.085527
	],
	"13687": [
		44.439018,
		-74.838177
	],
	"13690": [
		44.097456,
		-75.007653
	],
	"13691": [
		44.231562,
		-75.770537
	],
	"13692": [
		44.288793,
		-76.026292
	],
	"13693": [
		43.985747,
		-76.246105
	],
	"13694": [
		44.868927,
		-75.134242
	],
	"13695": [
		44.102929,
		-74.922258
	],
	"13696": [
		44.694741,
		-74.888048
	],
	"13697": [
		44.754714,
		-74.810347
	],
	"13730": [
		42.223737,
		-75.532187
	],
	"13731": [
		42.12963,
		-74.787804
	],
	"13732": [
		42.049447,
		-76.167535
	],
	"13733": [
		42.301697,
		-75.478883
	],
	"13734": [
		42.069955,
		-76.409653
	],
	"13736": [
		42.324084,
		-76.202038
	],
	"13739": [
		42.349124,
		-74.789149
	],
	"13740": [
		42.273812,
		-74.756997
	],
	"13743": [
		42.211894,
		-76.338222
	],
	"13744": [
		42.243494,
		-75.907999
	],
	"13746": [
		42.268926,
		-75.884667
	],
	"13748": [
		42.042579,
		-75.822521
	],
	"13750": [
		42.471013,
		-74.857905
	],
	"13751": [
		42.454448,
		-74.901809
	],
	"13752": [
		42.190535,
		-74.896999
	],
	"13753": [
		42.30696,
		-74.926915
	],
	"13754": [
		42.088461,
		-75.447935
	],
	"13755": [
		42.055241,
		-74.96692
	],
	"13756": [
		42.004099,
		-75.10067
	],
	"13757": [
		42.410607,
		-74.891229
	],
	"13760": [
		42.133332,
		-76.084622
	],
	"13774": [
		41.960118,
		-75.149385
	],
	"13775": [
		42.327909,
		-75.134022
	],
	"13776": [
		42.470423,
		-75.331951
	],
	"13777": [
		42.258166,
		-75.989587
	],
	"13778": [
		42.359214,
		-75.759499
	],
	"13780": [
		42.422485,
		-75.476583
	],
	"13782": [
		42.170115,
		-74.991251
	],
	"13783": [
		41.993662,
		-75.266006
	],
	"13784": [
		42.426878,
		-76.221343
	],
	"13786": [
		42.44098,
		-74.693941
	],
	"13787": [
		42.212627,
		-75.671949
	],
	"13788": [
		42.339007,
		-74.666257
	],
	"13790": [
		42.165361,
		-76.001942
	],
	"13794": [
		42.393238,
		-76.01372
	],
	"13795": [
		42.056638,
		-75.778938
	],
	"13796": [
		42.557188,
		-75.13213
	],
	"13797": [
		42.333665,
		-76.040401
	],
	"13801": [
		42.505085,
		-75.77697
	],
	"13802": [
		42.242134,
		-76.041266
	],
	"13803": [
		42.456883,
		-76.067124
	],
	"13804": [
		42.225722,
		-75.384222
	],
	"13806": [
		42.379101,
		-74.957234
	],
	"13807": [
		42.60747,
		-74.988238
	],
	"13808": [
		42.525233,
		-75.2622
	],
	"13809": [
		42.403814,
		-75.395541
	],
	"13810": [
		42.606817,
		-75.108363
	],
	"13811": [
		42.234926,
		-76.164054
	],
	"13812": [
		42.03006,
		-76.354752
	],
	"13813": [
		42.163707,
		-75.551328
	],
	"13815": [
		42.547866,
		-75.530855
	],
	"13820": [
		42.483456,
		-75.036874
	],
	"13825": [
		42.435577,
		-75.204553
	],
	"13826": [
		42.09982,
		-75.638796
	],
	"13827": [
		42.117827,
		-76.249166
	],
	"13830": [
		42.437694,
		-75.627357
	],
	"13832": [
		42.65813,
		-75.672216
	],
	"13833": [
		42.198205,
		-75.768632
	],
	"13834": [
		42.530981,
		-74.965895
	],
	"13835": [
		42.383214,
		-76.178996
	],
	"13838": [
		42.285099,
		-75.388127
	],
	"13839": [
		42.262039,
		-75.252051
	],
	"13841": [
		42.40699,
		-75.842161
	],
	"13842": [
		42.3767,
		-74.723609
	],
	"13843": [
		42.503033,
		-75.382469
	],
	"13844": [
		42.608179,
		-75.668317
	],
	"13845": [
		42.053431,
		-76.354924
	],
	"13846": [
		42.363766,
		-75.054796
	],
	"13847": [
		42.186088,
		-75.291016
	],
	"13849": [
		42.350096,
		-75.309317
	],
	"13850": [
		42.049395,
		-76.017594
	],
	"13856": [
		42.171041,
		-75.183316
	],
	"13859": [
		42.372464,
		-75.245243
	],
	"13860": [
		42.453131,
		-74.932972
	],
	"13861": [
		42.50854,
		-75.151092
	],
	"13862": [
		42.330958,
		-75.931008
	],
	"13863": [
		42.455495,
		-75.898915
	],
	"13864": [
		42.27176,
		-76.388557
	],
	"13865": [
		42.032061,
		-75.615617
	],
	"13901": [
		42.183203,
		-75.876048
	],
	"13902": [
		42.088824,
		-75.968883
	],
	"13903": [
		42.04187,
		-75.889077
	],
	"13904": [
		42.134123,
		-75.820206
	],
	"13905": [
		42.170436,
		-75.943434
	],
	"14001": [
		43.036573,
		-78.510831
	],
	"14004": [
		42.891371,
		-78.503687
	],
	"14005": [
		42.920586,
		-78.250065
	],
	"14006": [
		42.63313,
		-79.021745
	],
	"14008": [
		43.312726,
		-78.623166
	],
	"14009": [
		42.593154,
		-78.397461
	],
	"14011": [
		42.830674,
		-78.299709
	],
	"14012": [
		43.332173,
		-78.532622
	],
	"14013": [
		43.08629,
		-78.397746
	],
	"14020": [
		42.99619,
		-78.213412
	],
	"14024": [
		42.581363,
		-78.245468
	],
	"14025": [
		42.622205,
		-78.727034
	],
	"14026": [
		42.942356,
		-78.687965
	],
	"14028": [
		43.31804,
		-78.717617
	],
	"14030": [
		42.564386,
		-78.507624
	],
	"14031": [
		42.983128,
		-78.614258
	],
	"14032": [
		43.046729,
		-78.630773
	],
	"14033": [
		42.654382,
		-78.692124
	],
	"14034": [
		42.500569,
		-78.865375
	],
	"14035": [
		42.490778,
		-78.848389
	],
	"14036": [
		42.973851,
		-78.389527
	],
	"14037": [
		42.802789,
		-78.453328
	],
	"14039": [
		42.85148,
		-78.173096
	],
	"14040": [
		42.890873,
		-78.376631
	],
	"14041": [
		42.398835,
		-78.971581
	],
	"14042": [
		42.475564,
		-78.488807
	],
	"14043": [
		42.901971,
		-78.703418
	],
	"14047": [
		42.687367,
		-78.986636
	],
	"14048": [
		42.484359,
		-79.317005
	],
	"14051": [
		43.042842,
		-78.699413
	],
	"14052": [
		42.772531,
		-78.584321
	],
	"14054": [
		42.919587,
		-78.126802
	],
	"14055": [
		42.562879,
		-78.600126
	],
	"14057": [
		42.646574,
		-78.874782
	],
	"14058": [
		43.102049,
		-78.168857
	],
	"14059": [
		42.833552,
		-78.634046
	],
	"14060": [
		42.450155,
		-78.296467
	],
	"14061": [
		42.593878,
		-79.079302
	],
	"14062": [
		42.438404,
		-79.143107
	],
	"14063": [
		42.40869,
		-79.331304
	],
	"14065": [
		42.484905,
		-78.312811
	],
	"14066": [
		42.629054,
		-78.185536
	],
	"14067": [
		43.213204,
		-78.568403
	],
	"14068": [
		43.027387,
		-78.756666
	],
	"14069": [
		42.615234,
		-78.642935
	],
	"14070": [
		42.419658,
		-78.917725
	],
	"14072": [
		43.017901,
		-78.962657
	],
	"14075": [
		42.712657,
		-78.834708
	],
	"14080": [
		42.648324,
		-78.548308
	],
	"14081": [
		42.563203,
		-79.067834
	],
	"14082": [
		42.656563,
		-78.385184
	],
	"14085": [
		42.717882,
		-78.921629
	],
	"14086": [
		42.909063,
		-78.629256
	],
	"14091": [
		42.538233,
		-78.893008
	],
	"14092": [
		43.17322,
		-78.993074
	],
	"14094": [
		43.157758,
		-78.701995
	],
	"14098": [
		43.334373,
		-78.380616
	],
	"14101": [
		42.392651,
		-78.538203
	],
	"14102": [
		42.837026,
		-78.557725
	],
	"14103": [
		43.211161,
		-78.37677
	],
	"14105": [
		43.199166,
		-78.483903
	],
	"14108": [
		43.263343,
		-78.72695
	],
	"14109": [
		43.137952,
		-79.034134
	],
	"14111": [
		42.580255,
		-78.904691
	],
	"14112": [
		42.697963,
		-78.939953
	],
	"14113": [
		42.671576,
		-78.339931
	],
	"14120": [
		43.079196,
		-78.842756
	],
	"14125": [
		43.084919,
		-78.274609
	],
	"14126": [
		43.335882,
		-78.728636
	],
	"14127": [
		42.752803,
		-78.739697
	],
	"14129": [
		42.481182,
		-79.017384
	],
	"14130": [
		42.555981,
		-78.147652
	],
	"14131": [
		43.238603,
		-78.899823
	],
	"14132": [
		43.14933,
		-78.877732
	],
	"14134": [
		42.527686,
		-78.523981
	],
	"14135": [
		42.487694,
		-79.2409
	],
	"14136": [
		42.517379,
		-79.174812
	],
	"14138": [
		42.379512,
		-79.036656
	],
	"14139": [
		42.718405,
		-78.541402
	],
	"14141": [
		42.524967,
		-78.712076
	],
	"14143": [
		42.972268,
		-78.064247
	],
	"14145": [
		42.729606,
		-78.434328
	],
	"14150": [
		42.998084,
		-78.878256
	],
	"14167": [
		42.74841,
		-78.323002
	],
	"14168": [
		42.520385,
		-78.990541
	],
	"14169": [
		42.766144,
		-78.523698
	],
	"14170": [
		42.700245,
		-78.674307
	],
	"14171": [
		42.424674,
		-78.649832
	],
	"14172": [
		43.272672,
		-78.812943
	],
	"14173": [
		42.525971,
		-78.473102
	],
	"14174": [
		43.249139,
		-78.998325
	],
	"14201": [
		42.89606,
		-78.886424
	],
	"14202": [
		42.881493,
		-78.877484
	],
	"14203": [
		42.868914,
		-78.869693
	],
	"14204": [
		42.882138,
		-78.861325
	],
	"14206": [
		42.880078,
		-78.810469
	],
	"14207": [
		42.951932,
		-78.898883
	],
	"14208": [
		42.91589,
		-78.853098
	],
	"14209": [
		42.91396,
		-78.866027
	],
	"14210": [
		42.862657,
		-78.828768
	],
	"14211": [
		42.906731,
		-78.819891
	],
	"14212": [
		42.894211,
		-78.820173
	],
	"14213": [
		42.918097,
		-78.892406
	],
	"14214": [
		42.939578,
		-78.840788
	],
	"14215": [
		42.935336,
		-78.810675
	],
	"14216": [
		42.949615,
		-78.861119
	],
	"14217": [
		42.971876,
		-78.876869
	],
	"14218": [
		42.819372,
		-78.830952
	],
	"14219": [
		42.788675,
		-78.826431
	],
	"14220": [
		42.845738,
		-78.822076
	],
	"14221": [
		42.984481,
		-78.722761
	],
	"14222": [
		42.919827,
		-78.876932
	],
	"14223": [
		42.973452,
		-78.846201
	],
	"14224": [
		42.837759,
		-78.747821
	],
	"14225": [
		42.928949,
		-78.750273
	],
	"14226": [
		42.971014,
		-78.796455
	],
	"14227": [
		42.886872,
		-78.730832
	],
	"14228": [
		43.044371,
		-78.777335
	],
	"14261": [
		43.007767,
		-78.791572
	],
	"14301": [
		43.095821,
		-79.040408
	],
	"14302": [
		43.093896,
		-79.049193
	],
	"14303": [
		43.084975,
		-79.038402
	],
	"14304": [
		43.099407,
		-78.951983
	],
	"14305": [
		43.122831,
		-79.023218
	],
	"14411": [
		43.235972,
		-78.216477
	],
	"14414": [
		42.890961,
		-77.743757
	],
	"14415": [
		42.755495,
		-77.017084
	],
	"14416": [
		43.082693,
		-77.980115
	],
	"14418": [
		42.60443,
		-77.216428
	],
	"14420": [
		43.211739,
		-77.934564
	],
	"14422": [
		43.084761,
		-78.066965
	],
	"14423": [
		42.933948,
		-77.821103
	],
	"14424": [
		42.856357,
		-77.303497
	],
	"14425": [
		42.991514,
		-77.33802
	],
	"14427": [
		42.621589,
		-78.053905
	],
	"14428": [
		43.080517,
		-77.853568
	],
	"14432": [
		42.957391,
		-77.143523
	],
	"14433": [
		43.082126,
		-76.877598
	],
	"14435": [
		42.712552,
		-77.663312
	],
	"14437": [
		42.570141,
		-77.733764
	],
	"14441": [
		42.68461,
		-76.957603
	],
	"14445": [
		43.113062,
		-77.490306
	],
	"14450": [
		43.092487,
		-77.420461
	],
	"14454": [
		42.797774,
		-77.774638
	],
	"14456": [
		42.847695,
		-76.998972
	],
	"14462": [
		42.686534,
		-77.751115
	],
	"14464": [
		43.327049,
		-77.932163
	],
	"14466": [
		42.776517,
		-77.581042
	],
	"14467": [
		43.036374,
		-77.612048
	],
	"14468": [
		43.293956,
		-77.802049
	],
	"14469": [
		42.877919,
		-77.471014
	],
	"14470": [
		43.205212,
		-78.057685
	],
	"14471": [
		42.753761,
		-77.492189
	],
	"14472": [
		42.966819,
		-77.575134
	],
	"14475": [
		42.937819,
		-77.498297
	],
	"14476": [
		43.329379,
		-78.0428
	],
	"14477": [
		43.333129,
		-78.140393
	],
	"14478": [
		42.577823,
		-77.126322
	],
	"14479": [
		43.236262,
		-78.313775
	],
	"14480": [
		42.838482,
		-77.710342
	],
	"14481": [
		42.761795,
		-77.921452
	],
	"14482": [
		42.978904,
		-77.971534
	],
	"14485": [
		42.882635,
		-77.601026
	],
	"14486": [
		42.89428,
		-77.921587
	],
	"14487": [
		42.811758,
		-77.636006
	],
	"14489": [
		43.089845,
		-76.994319
	],
	"14502": [
		43.096594,
		-77.335388
	],
	"14504": [
		42.968981,
		-77.231501
	],
	"14505": [
		43.159419,
		-77.168961
	],
	"14506": [
		43.005511,
		-77.516656
	],
	"14507": [
		42.684916,
		-77.254886
	],
	"14510": [
		42.68301,
		-77.869009
	],
	"14511": [
		42.999374,
		-77.89179
	],
	"14512": [
		42.645241,
		-77.39977
	],
	"14513": [
		43.086308,
		-77.092116
	],
	"14514": [
		43.109913,
		-77.814986
	],
	"14516": [
		43.201328,
		-76.919338
	],
	"14517": [
		42.592426,
		-77.895852
	],
	"14519": [
		43.233972,
		-77.314631
	],
	"14521": [
		42.676642,
		-76.805003
	],
	"14522": [
		43.061423,
		-77.220399
	],
	"14525": [
		42.877513,
		-78.013345
	],
	"14526": [
		43.151464,
		-77.444396
	],
	"14527": [
		42.665508,
		-77.066309
	],
	"14529": [
		42.539976,
		-77.6381
	],
	"14530": [
		42.73991,
		-77.998746
	],
	"14532": [
		42.964101,
		-77.032088
	],
	"14533": [
		42.838808,
		-77.888751
	],
	"14534": [
		43.05689,
		-77.521042
	],
	"14536": [
		42.543975,
		-78.083671
	],
	"14537": [
		43.035808,
		-77.163201
	],
	"14539": [
		42.834499,
		-77.874751
	],
	"14541": [
		42.765059,
		-76.848967
	],
	"14542": [
		43.147329,
		-76.860121
	],
	"14543": [
		42.983831,
		-77.678535
	],
	"14544": [
		42.756251,
		-77.243735
	],
	"14545": [
		42.664857,
		-77.701007
	],
	"14546": [
		43.032675,
		-77.780006
	],
	"14548": [
		42.976072,
		-77.24387
	],
	"14549": [
		42.700031,
		-78.017273
	],
	"14550": [
		42.679902,
		-78.093487
	],
	"14551": [
		43.218368,
		-77.049581
	],
	"14555": [
		43.260787,
		-76.97574
	],
	"14559": [
		43.18998,
		-77.819052
	],
	"14560": [
		42.683429,
		-77.565904
	],
	"14561": [
		42.820432,
		-77.131778
	],
	"14564": [
		42.986699,
		-77.43436
	],
	"14568": [
		43.161845,
		-77.281657
	],
	"14569": [
		42.735221,
		-78.171092
	],
	"14571": [
		43.341652,
		-78.251742
	],
	"14572": [
		42.564925,
		-77.562598
	],
	"14580": [
		43.217283,
		-77.444534
	],
	"14585": [
		42.906261,
		-77.553145
	],
	"14586": [
		43.041675,
		-77.689904
	],
	"14588": [
		42.680987,
		-76.870803
	],
	"14589": [
		43.249424,
		-77.174261
	],
	"14590": [
		43.242547,
		-76.826243
	],
	"14591": [
		42.832085,
		-78.107386
	],
	"14592": [
		42.872237,
		-77.895893
	],
	"14604": [
		43.156212,
		-77.604741
	],
	"14605": [
		43.168428,
		-77.602642
	],
	"14606": [
		43.171047,
		-77.697953
	],
	"14607": [
		43.150776,
		-77.586434
	],
	"14608": [
		43.154099,
		-77.62293
	],
	"14609": [
		43.177093,
		-77.554873
	],
	"14610": [
		43.142359,
		-77.545372
	],
	"14611": [
		43.148316,
		-77.646987
	],
	"14612": [
		43.26633,
		-77.676706
	],
	"14613": [
		43.182171,
		-77.640175
	],
	"14614": [
		43.157442,
		-77.615355
	],
	"14615": [
		43.201207,
		-77.654749
	],
	"14616": [
		43.234622,
		-77.657663
	],
	"14617": [
		43.225497,
		-77.593527
	],
	"14618": [
		43.114542,
		-77.554976
	],
	"14619": [
		43.136456,
		-77.649477
	],
	"14620": [
		43.128291,
		-77.605805
	],
	"14621": [
		43.189939,
		-77.603649
	],
	"14622": [
		43.214859,
		-77.552353
	],
	"14623": [
		43.087349,
		-77.641862
	],
	"14624": [
		43.1283,
		-77.731411
	],
	"14625": [
		43.150045,
		-77.505526
	],
	"14626": [
		43.21656,
		-77.710786
	],
	"14627": [
		43.128661,
		-77.629147
	],
	"14701": [
		42.08016,
		-79.25671
	],
	"14706": [
		42.113246,
		-78.533146
	],
	"14707": [
		42.07734,
		-78.06052
	],
	"14708": [
		42.019219,
		-78.063617
	],
	"14709": [
		42.356494,
		-77.982064
	],
	"14710": [
		42.08777,
		-79.419847
	],
	"14711": [
		42.326732,
		-78.119419
	],
	"14712": [
		42.183745,
		-79.361923
	],
	"14714": [
		42.296728,
		-78.233633
	],
	"14715": [
		42.07653,
		-78.14475
	],
	"14716": [
		42.390637,
		-79.445044
	],
	"14717": [
		42.361827,
		-78.179534
	],
	"14718": [
		42.345814,
		-79.287617
	],
	"14719": [
		42.341958,
		-78.875953
	],
	"14720": [
		42.108592,
		-79.281179
	],
	"14721": [
		42.013905,
		-78.266442
	],
	"14722": [
		42.209489,
		-79.468361
	],
	"14723": [
		42.317698,
		-79.157224
	],
	"14724": [
		42.046328,
		-79.66983
	],
	"14726": [
		42.253585,
		-79.020279
	],
	"14727": [
		42.206882,
		-78.297294
	],
	"14728": [
		42.263333,
		-79.423176
	],
	"14729": [
		42.408377,
		-78.743584
	],
	"14731": [
		42.307351,
		-78.655503
	],
	"14732": [
		42.231862,
		-79.116414
	],
	"14733": [
		42.160122,
		-79.172199
	],
	"14735": [
		42.45269,
		-78.096169
	],
	"14736": [
		42.140845,
		-79.746108
	],
	"14737": [
		42.32905,
		-78.428611
	],
	"14738": [
		42.055006,
		-79.084541
	],
	"14739": [
		42.192604,
		-78.146295
	],
	"14740": [
		42.223203,
		-79.181435
	],
	"14741": [
		42.219966,
		-78.611624
	],
	"14742": [
		42.120123,
		-79.306839
	],
	"14743": [
		42.211871,
		-78.396009
	],
	"14744": [
		42.4281,
		-78.206654
	],
	"14747": [
		42.153715,
		-79.094518
	],
	"14748": [
		42.157106,
		-78.643074
	],
	"14750": [
		42.079766,
		-79.329244
	],
	"14752": [
		42.351728,
		-79.319857
	],
	"14753": [
		42.036032,
		-78.664372
	],
	"14754": [
		42.021908,
		-78.201569
	],
	"14755": [
		42.233756,
		-78.804596
	],
	"14756": [
		42.198039,
		-79.421274
	],
	"14757": [
		42.237679,
		-79.504709
	],
	"14760": [
		42.077027,
		-78.418429
	],
	"14767": [
		42.057352,
		-79.514135
	],
	"14769": [
		42.367931,
		-79.472317
	],
	"14770": [
		42.037929,
		-78.300296
	],
	"14772": [
		42.15747,
		-78.952618
	],
	"14774": [
		42.088367,
		-78.149093
	],
	"14775": [
		42.228753,
		-79.699933
	],
	"14777": [
		42.38608,
		-78.273772
	],
	"14778": [
		42.077584,
		-78.483239
	],
	"14779": [
		42.081231,
		-78.777985
	],
	"14781": [
		42.161603,
		-79.601288
	],
	"14782": [
		42.265508,
		-79.263865
	],
	"14783": [
		42.082144,
		-78.887354
	],
	"14784": [
		42.311143,
		-79.385369
	],
	"14787": [
		42.31124,
		-79.565066
	],
	"14788": [
		42.061991,
		-78.380108
	],
	"14801": [
		42.104056,
		-77.292968
	],
	"14802": [
		42.253375,
		-77.789297
	],
	"14803": [
		42.273416,
		-77.745296
	],
	"14804": [
		42.317259,
		-77.847936
	],
	"14805": [
		42.352793,
		-76.713898
	],
	"14806": [
		42.171497,
		-77.772561
	],
	"14807": [
		42.420997,
		-77.711347
	],
	"14808": [
		42.559639,
		-77.46686
	],
	"14809": [
		42.424318,
		-77.448755
	],
	"14810": [
		42.349751,
		-77.343379
	],
	"14812": [
		42.300727,
		-77.005249
	],
	"14813": [
		42.252647,
		-77.995104
	],
	"14814": [
		42.155636,
		-76.9593
	],
	"14815": [
		42.374268,
		-77.08678
	],
	"14816": [
		42.197737,
		-76.735637
	],
	"14817": [
		42.357625,
		-76.335167
	],
	"14818": [
		42.454933,
		-76.818927
	],
	"14819": [
		42.224194,
		-77.441939
	],
	"14820": [
		42.19328,
		-77.3599
	],
	"14821": [
		42.241574,
		-77.219254
	],
	"14822": [
		42.424481,
		-77.851457
	],
	"14823": [
		42.248614,
		-77.554873
	],
	"14824": [
		42.259793,
		-76.699531
	],
	"14825": [
		42.056296,
		-76.618187
	],
	"14826": [
		42.491462,
		-77.497792
	],
	"14827": [
		42.180651,
		-77.142885
	],
	"14830": [
		42.128123,
		-77.031977
	],
	"14836": [
		42.53301,
		-77.869746
	],
	"14837": [
		42.490667,
		-77.026107
	],
	"14838": [
		42.188126,
		-76.662349
	],
	"14839": [
		42.119444,
		-77.640967
	],
	"14840": [
		42.441653,
		-77.194396
	],
	"14841": [
		42.525338,
		-76.840915
	],
	"14842": [
		42.60062,
		-76.981464
	],
	"14843": [
		42.320079,
		-77.646339
	],
	"14845": [
		42.215841,
		-76.8341
	],
	"14846": [
		42.53209,
		-78.001564
	],
	"14847": [
		42.6085,
		-76.734217
	],
	"14850": [
		42.432165,
		-76.497042
	],
	"14853": [
		42.449059,
		-76.477539
	],
	"14854": [
		42.505802,
		-76.614769
	],
	"14855": [
		42.1457,
		-77.497396
	],
	"14856": [
		42.376717,
		-77.366506
	],
	"14858": [
		42.02979,
		-77.134956
	],
	"14859": [
		42.114838,
		-76.538139
	],
	"14860": [
		42.59192,
		-76.831428
	],
	"14861": [
		42.088212,
		-76.686236
	],
	"14864": [
		42.275415,
		-76.840921
	],
	"14865": [
		42.34818,
		-76.833969
	],
	"14867": [
		42.34315,
		-76.618094
	],
	"14869": [
		42.36232,
		-76.768965
	],
	"14870": [
		42.160372,
		-77.127611
	],
	"14871": [
		42.039595,
		-76.911364
	],
	"14872": [
		42.243653,
		-76.874902
	],
	"14873": [
		42.522912,
		-77.298359
	],
	"14874": [
		42.530177,
		-77.175488
	],
	"14877": [
		42.05779,
		-77.680307
	],
	"14878": [
		42.450262,
		-76.943405
	],
	"14879": [
		42.321946,
		-77.187158
	],
	"14880": [
		42.177508,
		-77.970614
	],
	"14881": [
		42.399901,
		-76.358994
	],
	"14882": [
		42.579578,
		-76.553706
	],
	"14883": [
		42.237436,
		-76.475779
	],
	"14884": [
		42.479522,
		-77.893852
	],
	"14885": [
		42.046486,
		-77.570328
	],
	"14886": [
		42.505752,
		-76.684984
	],
	"14889": [
		42.234191,
		-76.579111
	],
	"14891": [
		42.377014,
		-76.946182
	],
	"14892": [
		42.046025,
		-76.529114
	],
	"14893": [
		42.467714,
		-77.107721
	],
	"14894": [
		42.019072,
		-76.777083
	],
	"14895": [
		42.08144,
		-77.940922
	],
	"14897": [
		42.020695,
		-77.792636
	],
	"14898": [
		42.053364,
		-77.4295
	],
	"14901": [
		42.087649,
		-76.746938
	],
	"14903": [
		42.131632,
		-76.871851
	],
	"14904": [
		42.070383,
		-76.80065
	],
	"14905": [
		42.087725,
		-76.843282
	],
	"15001": [
		40.595263,
		-80.322877
	],
	"15003": [
		40.60364,
		-80.216424
	],
	"15004": [
		40.345102,
		-80.381297
	],
	"15005": [
		40.64508,
		-80.186648
	],
	"15006": [
		40.63359,
		-79.876889
	],
	"15007": [
		40.652283,
		-79.93169
	],
	"15009": [
		40.697912,
		-80.365277
	],
	"15010": [
		40.770872,
		-80.351446
	],
	"15012": [
		40.155417,
		-79.812946
	],
	"15014": [
		40.608072,
		-79.740428
	],
	"15015": [
		40.637248,
		-80.081101
	],
	"15017": [
		40.342274,
		-80.122354
	],
	"15018": [
		40.265885,
		-79.797067
	],
	"15019": [
		40.406974,
		-80.328574
	],
	"15020": [
		40.233411,
		-79.950296
	],
	"15021": [
		40.388565,
		-80.441527
	],
	"15022": [
		40.124908,
		-79.939333
	],
	"15024": [
		40.58497,
		-79.847315
	],
	"15025": [
		40.297812,
		-79.923273
	],
	"15026": [
		40.504991,
		-80.353946
	],
	"15027": [
		40.666338,
		-80.240179
	],
	"15028": [
		40.311313,
		-79.78956
	],
	"15030": [
		40.591662,
		-79.782491
	],
	"15031": [
		40.348224,
		-80.161151
	],
	"15033": [
		40.179104,
		-79.864709
	],
	"15034": [
		40.350816,
		-79.890602
	],
	"15035": [
		40.384822,
		-79.807401
	],
	"15037": [
		40.258036,
		-79.85259
	],
	"15038": [
		40.250809,
		-79.925568
	],
	"15042": [
		40.690315,
		-80.204823
	],
	"15043": [
		40.551695,
		-80.487856
	],
	"15044": [
		40.637988,
		-79.947933
	],
	"15045": [
		40.325814,
		-79.885985
	],
	"15046": [
		40.555653,
		-80.228561
	],
	"15047": [
		40.315621,
		-79.793844
	],
	"15049": [
		40.556113,
		-79.805574
	],
	"15050": [
		40.563665,
		-80.434517
	],
	"15051": [
		40.562483,
		-79.867088
	],
	"15052": [
		40.658731,
		-80.430743
	],
	"15053": [
		40.381003,
		-80.359886
	],
	"15054": [
		40.362377,
		-80.407683
	],
	"15055": [
		40.306293,
		-80.123516
	],
	"15056": [
		40.56389,
		-80.216015
	],
	"15057": [
		40.358656,
		-80.243904
	],
	"15059": [
		40.677919,
		-80.485549
	],
	"15060": [
		40.36685,
		-80.292127
	],
	"15061": [
		40.659903,
		-80.319709
	],
	"15062": [
		40.148547,
		-79.8782
	],
	"15063": [
		40.191166,
		-79.922476
	],
	"15064": [
		40.356339,
		-80.149929
	],
	"15065": [
		40.644035,
		-79.725378
	],
	"15066": [
		40.747074,
		-80.256143
	],
	"15067": [
		40.20727,
		-79.962433
	],
	"15068": [
		40.557191,
		-79.725802
	],
	"15071": [
		40.412105,
		-80.187799
	],
	"15072": [
		40.139245,
		-79.85633
	],
	"15074": [
		40.734035,
		-80.208354
	],
	"15075": [
		40.586037,
		-79.826914
	],
	"15076": [
		40.607469,
		-79.834695
	],
	"15077": [
		40.625131,
		-80.415891
	],
	"15078": [
		40.355915,
		-80.384977
	],
	"15081": [
		40.575072,
		-80.236104
	],
	"15082": [
		40.377841,
		-80.212916
	],
	"15083": [
		40.262466,
		-79.785744
	],
	"15084": [
		40.62859,
		-79.803264
	],
	"15085": [
		40.385703,
		-79.722447
	],
	"15086": [
		40.674947,
		-80.106364
	],
	"15087": [
		40.189522,
		-79.853422
	],
	"15088": [
		40.272147,
		-79.89618
	],
	"15089": [
		40.225233,
		-79.748806
	],
	"15090": [
		40.625015,
		-80.067058
	],
	"15101": [
		40.580328,
		-79.955241
	],
	"15102": [
		40.321356,
		-80.036549
	],
	"15104": [
		40.403883,
		-79.862605
	],
	"15106": [
		40.410121,
		-80.114209
	],
	"15108": [
		40.500472,
		-80.201802
	],
	"15110": [
		40.373461,
		-79.850162
	],
	"15112": [
		40.404484,
		-79.837706
	],
	"15116": [
		40.526032,
		-79.932225
	],
	"15120": [
		40.395872,
		-79.907511
	],
	"15122": [
		40.361206,
		-79.895641
	],
	"15126": [
		40.462482,
		-80.284442
	],
	"15129": [
		40.293248,
		-79.996037
	],
	"15131": [
		40.338791,
		-79.796071
	],
	"15132": [
		40.339767,
		-79.842782
	],
	"15133": [
		40.326747,
		-79.866547
	],
	"15135": [
		40.310836,
		-79.812893
	],
	"15136": [
		40.463477,
		-80.106688
	],
	"15137": [
		40.375736,
		-79.808765
	],
	"15139": [
		40.522823,
		-79.836255
	],
	"15140": [
		40.407779,
		-79.776344
	],
	"15142": [
		40.382059,
		-80.118682
	],
	"15143": [
		40.568133,
		-80.146809
	],
	"15144": [
		40.548049,
		-79.777952
	],
	"15145": [
		40.41528,
		-79.824086
	],
	"15146": [
		40.426324,
		-79.761379
	],
	"15147": [
		40.497284,
		-79.83077
	],
	"15148": [
		40.393451,
		-79.79512
	],
	"15201": [
		40.47441,
		-79.950968
	],
	"15202": [
		40.504968,
		-80.067821
	],
	"15203": [
		40.426207,
		-79.975672
	],
	"15204": [
		40.456867,
		-80.06063
	],
	"15205": [
		40.43809,
		-80.099088
	],
	"15206": [
		40.472272,
		-79.913156
	],
	"15207": [
		40.403792,
		-79.928873
	],
	"15208": [
		40.453192,
		-79.899492
	],
	"15209": [
		40.498846,
		-79.969725
	],
	"15210": [
		40.406951,
		-79.984987
	],
	"15211": [
		40.430322,
		-80.015624
	],
	"15212": [
		40.456946,
		-79.990054
	],
	"15213": [
		40.444042,
		-79.955249
	],
	"15214": [
		40.486557,
		-80.013953
	],
	"15215": [
		40.501295,
		-79.912677
	],
	"15216": [
		40.402626,
		-80.034849
	],
	"15217": [
		40.430821,
		-79.920089
	],
	"15218": [
		40.42361,
		-79.889803
	],
	"15219": [
		40.443184,
		-79.983064
	],
	"15220": [
		40.419506,
		-80.047768
	],
	"15221": [
		40.435791,
		-79.86427
	],
	"15222": [
		40.447691,
		-79.993445
	],
	"15223": [
		40.505181,
		-79.952226
	],
	"15224": [
		40.464234,
		-79.944801
	],
	"15225": [
		40.50668,
		-80.113844
	],
	"15226": [
		40.395053,
		-80.013952
	],
	"15227": [
		40.375703,
		-79.970572
	],
	"15228": [
		40.370667,
		-80.044135
	],
	"15229": [
		40.520353,
		-80.037053
	],
	"15232": [
		40.452517,
		-79.931939
	],
	"15233": [
		40.460862,
		-80.034917
	],
	"15234": [
		40.36814,
		-80.017794
	],
	"15235": [
		40.459788,
		-79.82243
	],
	"15236": [
		40.347404,
		-79.97548
	],
	"15237": [
		40.549607,
		-80.043513
	],
	"15238": [
		40.537201,
		-79.879443
	],
	"15239": [
		40.483679,
		-79.738076
	],
	"15241": [
		40.333518,
		-80.081412
	],
	"15243": [
		40.375511,
		-80.072372
	],
	"15260": [
		40.443915,
		-79.953256
	],
	"15290": [
		40.457329,
		-80.019294
	],
	"15301": [
		40.153494,
		-80.253464
	],
	"15310": [
		39.792724,
		-80.482197
	],
	"15311": [
		40.045914,
		-80.183933
	],
	"15312": [
		40.251528,
		-80.440702
	],
	"15313": [
		40.06796,
		-80.023705
	],
	"15314": [
		40.146306,
		-80.016809
	],
	"15315": [
		39.758289,
		-79.982684
	],
	"15316": [
		39.724269,
		-80.252412
	],
	"15317": [
		40.276322,
		-80.171662
	],
	"15320": [
		39.876241,
		-79.990272
	],
	"15321": [
		40.323366,
		-80.187919
	],
	"15322": [
		39.98823,
		-80.053284
	],
	"15323": [
		40.112251,
		-80.405659
	],
	"15324": [
		40.100777,
		-80.065715
	],
	"15325": [
		39.949429,
		-79.963374
	],
	"15327": [
		39.744871,
		-79.960854
	],
	"15329": [
		40.027715,
		-80.279927
	],
	"15330": [
		40.179368,
		-80.089973
	],
	"15331": [
		40.10535,
		-80.022571
	],
	"15332": [
		40.240209,
		-79.993477
	],
	"15333": [
		40.030786,
		-80.01321
	],
	"15334": [
		39.808312,
		-79.967895
	],
	"15337": [
		39.952162,
		-80.378188
	],
	"15338": [
		39.786257,
		-80.002141
	],
	"15340": [
		40.283226,
		-80.317491
	],
	"15341": [
		39.8242,
		-80.343863
	],
	"15342": [
		40.244232,
		-80.221185
	],
	"15344": [
		39.915747,
		-80.061424
	],
	"15345": [
		40.022622,
		-80.105047
	],
	"15346": [
		39.935438,
		-80.075344
	],
	"15347": [
		40.220317,
		-80.221104
	],
	"15348": [
		39.985793,
		-79.996258
	],
	"15349": [
		39.762403,
		-80.093925
	],
	"15350": [
		40.293306,
		-80.200808
	],
	"15351": [
		39.884305,
		-79.930223
	],
	"15352": [
		39.752215,
		-80.382774
	],
	"15353": [
		39.962124,
		-80.310954
	],
	"15357": [
		39.941608,
		-79.980409
	],
	"15358": [
		40.055388,
		-80.003007
	],
	"15359": [
		39.876488,
		-80.275766
	],
	"15360": [
		40.084912,
		-80.082379
	],
	"15361": [
		40.329012,
		-80.258411
	],
	"15362": [
		39.772469,
		-80.213932
	],
	"15363": [
		40.251799,
		-80.19805
	],
	"15364": [
		39.946321,
		-80.30478
	],
	"15366": [
		40.159548,
		-79.973027
	],
	"15367": [
		40.261092,
		-80.055668
	],
	"15368": [
		40.013872,
		-79.989284
	],
	"15370": [
		39.880615,
		-80.171197
	],
	"15376": [
		40.108898,
		-80.478967
	],
	"15377": [
		39.988535,
		-80.449029
	],
	"15378": [
		40.278384,
		-80.275081
	],
	"15379": [
		40.243194,
		-80.425176
	],
	"15380": [
		39.867562,
		-80.467119
	],
	"15401": [
		39.899926,
		-79.745662
	],
	"15410": [
		39.911791,
		-79.901982
	],
	"15411": [
		39.74858,
		-79.346892
	],
	"15412": [
		40.088771,
		-79.859227
	],
	"15413": [
		39.985307,
		-79.871134
	],
	"15417": [
		40.008601,
		-79.918268
	],
	"15419": [
		40.046956,
		-79.894985
	],
	"15420": [
		39.960141,
		-79.865229
	],
	"15421": [
		39.845848,
		-79.597198
	],
	"15422": [
		39.981184,
		-79.811587
	],
	"15423": [
		40.089905,
		-79.932521
	],
	"15424": [
		39.81952,
		-79.35935
	],
	"15425": [
		40.029709,
		-79.54884
	],
	"15427": [
		40.069948,
		-79.974811
	],
	"15428": [
		40.084267,
		-79.682026
	],
	"15429": [
		40.002852,
		-79.938276
	],
	"15430": [
		40.039411,
		-79.654384
	],
	"15431": [
		39.949851,
		-79.596338
	],
	"15432": [
		40.113849,
		-79.859899
	],
	"15433": [
		39.982683,
		-79.948732
	],
	"15434": [
		40.081867,
		-79.887389
	],
	"15435": [
		39.942666,
		-79.849566
	],
	"15436": [
		39.817812,
		-79.724778
	],
	"15437": [
		39.780202,
		-79.612138
	],
	"15438": [
		40.073207,
		-79.85777
	],
	"15440": [
		39.735268,
		-79.616939
	],
	"15442": [
		40.019082,
		-79.839708
	],
	"15443": [
		39.919668,
		-79.880747
	],
	"15444": [
		40.011976,
		-79.908804
	],
	"15445": [
		39.876113,
		-79.667849
	],
	"15446": [
		40.030982,
		-79.402992
	],
	"15447": [
		39.943822,
		-79.936893
	],
	"15448": [
		40.136048,
		-79.732527
	],
	"15449": [
		39.964329,
		-79.783355
	],
	"15450": [
		40.001137,
		-79.974194
	],
	"15451": [
		39.736891,
		-79.83578
	],
	"15454": [
		39.863151,
		-79.871733
	],
	"15455": [
		40.0033,
		-79.642276
	],
	"15456": [
		39.926646,
		-79.652104
	],
	"15458": [
		39.890125,
		-79.851171
	],
	"15459": [
		39.78097,
		-79.485501
	],
	"15460": [
		39.807966,
		-79.907168
	],
	"15461": [
		39.842678,
		-79.899964
	],
	"15462": [
		40.064295,
		-79.378703
	],
	"15463": [
		39.965563,
		-79.899834
	],
	"15464": [
		39.930138,
		-79.436202
	],
	"15466": [
		40.074612,
		-79.891797
	],
	"15467": [
		39.784799,
		-79.926068
	],
	"15468": [
		39.950112,
		-79.83257
	],
	"15469": [
		40.009815,
		-79.418399
	],
	"15470": [
		39.867154,
		-79.532018
	],
	"15472": [
		39.919373,
		-79.716851
	],
	"15473": [
		40.043825,
		-79.790742
	],
	"15474": [
		39.751392,
		-79.893487
	],
	"15475": [
		39.951648,
		-79.877545
	],
	"15476": [
		39.86973,
		-79.920611
	],
	"15477": [
		40.078203,
		-79.863966
	],
	"15478": [
		39.787462,
		-79.804657
	],
	"15479": [
		40.151237,
		-79.707539
	],
	"15480": [
		39.985621,
		-79.773567
	],
	"15482": [
		40.061487,
		-79.766067
	],
	"15483": [
		40.08302,
		-79.850922
	],
	"15484": [
		39.892689,
		-79.783677
	],
	"15486": [
		40.025886,
		-79.711164
	],
	"15489": [
		39.966381,
		-79.696055
	],
	"15490": [
		40.072377,
		-79.454483
	],
	"15492": [
		40.118305,
		-79.764298
	],
	"15501": [
		40.039742,
		-79.12982
	],
	"15502": [
		40.041026,
		-79.24151
	],
	"15510": [
		39.966968,
		-79.040036
	],
	"15520": [
		40.106367,
		-79.060539
	],
	"15521": [
		40.208045,
		-78.630355
	],
	"15522": [
		39.941732,
		-78.548409
	],
	"15530": [
		39.940809,
		-78.924027
	],
	"15531": [
		40.183936,
		-79.082097
	],
	"15532": [
		39.762035,
		-79.060801
	],
	"15533": [
		39.981847,
		-78.241926
	],
	"15534": [
		39.899265,
		-78.691197
	],
	"15535": [
		39.821183,
		-78.444171
	],
	"15536": [
		39.954555,
		-78.203555
	],
	"15537": [
		40.000385,
		-78.366843
	],
	"15538": [
		39.863715,
		-78.834458
	],
	"15539": [
		40.128409,
		-78.59138
	],
	"15540": [
		39.797439,
		-79.239272
	],
	"15541": [
		40.043876,
		-78.971391
	],
	"15542": [
		39.875694,
		-79.071544
	],
	"15544": [
		40.135638,
		-79.093436
	],
	"15545": [
		39.802122,
		-78.752497
	],
	"15546": [
		40.136624,
		-79.047988
	],
	"15547": [
		40.162146,
		-79.071708
	],
	"15550": [
		39.978253,
		-78.649618
	],
	"15551": [
		39.868154,
		-79.284798
	],
	"15552": [
		39.79328,
		-78.990962
	],
	"15554": [
		40.122918,
		-78.621785
	],
	"15555": [
		40.092408,
		-79.082247
	],
	"15557": [
		39.927663,
		-79.218371
	],
	"15558": [
		39.74842,
		-79.110357
	],
	"15559": [
		40.060248,
		-78.691065
	],
	"15560": [
		40.016558,
		-78.907139
	],
	"15561": [
		40.095599,
		-79.087672
	],
	"15562": [
		39.739533,
		-79.134556
	],
	"15563": [
		40.097575,
		-78.92892
	],
	"15564": [
		39.729993,
		-78.837774
	],
	"15601": [
		40.314981,
		-79.534803
	],
	"15610": [
		40.146956,
		-79.417201
	],
	"15611": [
		40.306515,
		-79.65264
	],
	"15612": [
		40.137347,
		-79.599717
	],
	"15613": [
		40.546577,
		-79.561663
	],
	"15615": [
		40.365308,
		-79.734156
	],
	"15616": [
		40.222755,
		-79.553297
	],
	"15617": [
		40.268182,
		-79.655373
	],
	"15618": [
		40.571026,
		-79.439869
	],
	"15620": [
		40.323545,
		-79.338689
	],
	"15621": [
		40.213857,
		-79.483456
	],
	"15622": [
		40.049578,
		-79.32919
	],
	"15623": [
		40.367199,
		-79.620342
	],
	"15624": [
		40.364867,
		-79.470198
	],
	"15625": [
		40.269506,
		-79.679749
	],
	"15626": [
		40.406993,
		-79.57616
	],
	"15627": [
		40.351006,
		-79.300048
	],
	"15628": [
		40.100553,
		-79.373372
	],
	"15629": [
		40.597437,
		-79.562908
	],
	"15631": [
		40.087482,
		-79.585356
	],
	"15632": [
		40.439145,
		-79.600116
	],
	"15633": [
		40.357318,
		-79.523907
	],
	"15634": [
		40.323945,
		-79.604923
	],
	"15635": [
		40.347904,
		-79.501557
	],
	"15636": [
		40.36547,
		-79.657084
	],
	"15637": [
		40.264955,
		-79.711818
	],
	"15638": [
		40.264322,
		-79.398961
	],
	"15639": [
		40.203514,
		-79.593806
	],
	"15640": [
		40.224626,
		-79.729265
	],
	"15641": [
		40.631645,
		-79.589328
	],
	"15642": [
		40.318382,
		-79.723736
	],
	"15644": [
		40.347382,
		-79.611245
	],
	"15646": [
		40.082173,
		-79.326493
	],
	"15647": [
		40.342501,
		-79.729198
	],
	"15650": [
		40.277177,
		-79.392906
	],
	"15655": [
		40.190142,
		-79.160129
	],
	"15656": [
		40.656904,
		-79.629005
	],
	"15658": [
		40.247834,
		-79.230681
	],
	"15660": [
		40.244601,
		-79.77439
	],
	"15661": [
		40.322166,
		-79.360132
	],
	"15662": [
		40.334318,
		-79.478335
	],
	"15663": [
		40.251846,
		-79.679271
	],
	"15665": [
		40.339497,
		-79.660846
	],
	"15666": [
		40.161024,
		-79.509814
	],
	"15668": [
		40.460564,
		-79.670009
	],
	"15670": [
		40.407121,
		-79.443505
	],
	"15671": [
		40.356289,
		-79.3218
	],
	"15672": [
		40.243792,
		-79.621588
	],
	"15673": [
		40.593808,
		-79.556616
	],
	"15675": [
		40.335305,
		-79.637074
	],
	"15676": [
		40.240835,
		-79.465714
	],
	"15677": [
		40.143126,
		-79.23731
	],
	"15678": [
		40.287221,
		-79.726231
	],
	"15679": [
		40.175948,
		-79.653825
	],
	"15680": [
		40.520777,
		-79.499278
	],
	"15681": [
		40.500367,
		-79.439951
	],
	"15683": [
		40.107186,
		-79.608271
	],
	"15684": [
		40.460696,
		-79.520663
	],
	"15686": [
		40.623446,
		-79.431311
	],
	"15687": [
		40.136223,
		-79.316448
	],
	"15688": [
		40.168606,
		-79.584793
	],
	"15689": [
		40.221425,
		-79.49144
	],
	"15690": [
		40.64135,
		-79.549422
	],
	"15691": [
		40.295377,
		-79.686141
	],
	"15692": [
		40.331755,
		-79.678914
	],
	"15693": [
		40.253148,
		-79.407701
	],
	"15695": [
		40.197278,
		-79.693244
	],
	"15696": [
		40.280112,
		-79.366167
	],
	"15697": [
		40.241129,
		-79.579932
	],
	"15698": [
		40.214407,
		-79.688503
	],
	"15701": [
		40.628381,
		-79.150041
	],
	"15710": [
		40.642463,
		-78.87167
	],
	"15711": [
		41.018425,
		-78.95562
	],
	"15712": [
		40.790456,
		-78.847887
	],
	"15713": [
		40.569757,
		-79.26168
	],
	"15714": [
		40.651306,
		-78.825059
	],
	"15715": [
		40.970657,
		-78.877426
	],
	"15716": [
		40.465148,
		-79.186897
	],
	"15717": [
		40.457206,
		-79.243213
	],
	"15721": [
		40.816322,
		-78.792568
	],
	"15722": [
		40.595071,
		-78.724558
	],
	"15723": [
		40.698747,
		-79.158676
	],
	"15724": [
		40.735096,
		-78.813634
	],
	"15725": [
		40.518948,
		-79.348779
	],
	"15727": [
		40.558009,
		-79.309754
	],
	"15728": [
		40.675665,
		-78.97178
	],
	"15729": [
		40.706445,
		-78.915125
	],
	"15730": [
		41.057508,
		-79.094932
	],
	"15731": [
		40.503767,
		-79.17641
	],
	"15732": [
		40.727686,
		-79.211872
	],
	"15733": [
		40.988862,
		-78.959295
	],
	"15734": [
		40.724797,
		-79.001265
	],
	"15736": [
		40.70125,
		-79.366445
	],
	"15737": [
		40.601258,
		-78.75901
	],
	"15738": [
		40.691553,
		-78.785122
	],
	"15739": [
		40.674249,
		-79.168735
	],
	"15741": [
		40.802488,
		-78.891033
	],
	"15742": [
		40.816978,
		-78.864006
	],
	"15744": [
		40.922559,
		-79.084009
	],
	"15745": [
		40.623001,
		-78.915191
	],
	"15746": [
		40.758509,
		-78.889294
	],
	"15747": [
		40.775788,
		-79.145875
	],
	"15748": [
		40.523638,
		-79.08415
	],
	"15750": [
		40.48478,
		-79.180918
	],
	"15752": [
		40.540593,
		-79.283249
	],
	"15753": [
		40.803842,
		-78.645319
	],
	"15754": [
		40.55667,
		-79.151511
	],
	"15756": [
		40.566558,
		-79.297083
	],
	"15757": [
		40.903001,
		-78.731664
	],
	"15759": [
		40.773017,
		-79.031699
	],
	"15760": [
		40.648324,
		-78.800199
	],
	"15761": [
		40.632245,
		-78.889807
	],
	"15762": [
		40.594306,
		-78.829302
	],
	"15764": [
		40.992622,
		-79.02871
	],
	"15765": [
		40.599057,
		-78.987702
	],
	"15767": [
		40.962153,
		-78.968171
	],
	"15770": [
		41.008788,
		-79.136717
	],
	"15771": [
		40.831556,
		-78.989145
	],
	"15772": [
		40.870222,
		-78.898677
	],
	"15773": [
		40.626766,
		-78.735444
	],
	"15774": [
		40.65469,
		-79.323835
	],
	"15775": [
		40.632482,
		-78.788141
	],
	"15776": [
		41.010988,
		-79.111592
	],
	"15777": [
		40.69376,
		-78.965439
	],
	"15778": [
		40.969117,
		-79.195246
	],
	"15779": [
		40.390847,
		-79.214432
	],
	"15780": [
		40.913146,
		-79.071425
	],
	"15781": [
		40.963797,
		-78.986853
	],
	"15783": [
		40.609214,
		-79.343219
	],
	"15784": [
		41.024426,
		-79.141266
	],
	"15801": [
		41.125057,
		-78.722433
	],
	"15821": [
		41.350958,
		-78.368514
	],
	"15823": [
		41.259876,
		-78.71568
	],
	"15824": [
		41.250833,
		-78.841186
	],
	"15825": [
		41.174822,
		-79.034223
	],
	"15827": [
		41.319159,
		-78.521654
	],
	"15828": [
		41.385406,
		-79.123304
	],
	"15829": [
		41.169298,
		-79.202144
	],
	"15832": [
		41.356513,
		-78.197279
	],
	"15834": [
		41.50076,
		-78.322783
	],
	"15840": [
		41.171972,
		-78.822649
	],
	"15841": [
		41.262939,
		-78.529883
	],
	"15845": [
		41.494294,
		-78.689546
	],
	"15846": [
		41.319857,
		-78.580314
	],
	"15847": [
		41.090187,
		-79.032482
	],
	"15848": [
		41.024169,
		-78.730644
	],
	"15849": [
		41.164492,
		-78.582254
	],
	"15851": [
		41.102906,
		-78.910417
	],
	"15853": [
		41.392343,
		-78.791631
	],
	"15856": [
		41.082255,
		-78.614302
	],
	"15857": [
		41.455085,
		-78.520228
	],
	"15860": [
		41.334002,
		-79.020323
	],
	"15861": [
		41.306095,
		-78.066377
	],
	"15863": [
		41.014385,
		-78.839736
	],
	"15864": [
		41.103578,
		-79.197538
	],
	"15865": [
		41.044954,
		-78.828292
	],
	"15866": [
		41.023892,
		-78.791035
	],
	"15868": [
		41.300364,
		-78.327704
	],
	"15870": [
		41.594121,
		-78.567901
	],
	"15901": [
		40.328742,
		-78.914292
	],
	"15902": [
		40.323118,
		-78.883169
	],
	"15904": [
		40.311595,
		-78.840989
	],
	"15905": [
		40.290655,
		-78.969943
	],
	"15906": [
		40.379677,
		-78.955677
	],
	"15909": [
		40.409742,
		-78.869741
	],
	"15920": [
		40.4745,
		-79.047534
	],
	"15921": [
		40.317338,
		-78.70086
	],
	"15922": [
		40.517598,
		-78.876676
	],
	"15923": [
		40.35522,
		-79.158504
	],
	"15924": [
		40.103423,
		-78.762858
	],
	"15925": [
		40.408519,
		-78.640702
	],
	"15926": [
		40.026799,
		-78.816837
	],
	"15927": [
		40.539999,
		-78.778646
	],
	"15928": [
		40.239529,
		-78.918459
	],
	"15929": [
		40.468336,
		-79.008099
	],
	"15930": [
		40.294969,
		-78.71902
	],
	"15931": [
		40.50625,
		-78.757723
	],
	"15934": [
		40.279061,
		-78.803986
	],
	"15935": [
		40.208132,
		-78.965027
	],
	"15936": [
		40.16091,
		-78.892595
	],
	"15937": [
		40.205334,
		-78.984724
	],
	"15938": [
		40.418854,
		-78.611126
	],
	"15940": [
		40.517034,
		-78.625208
	],
	"15942": [
		40.398324,
		-78.811023
	],
	"15943": [
		40.474082,
		-78.838748
	],
	"15944": [
		40.363889,
		-79.079158
	],
	"15945": [
		40.358484,
		-78.867092
	],
	"15946": [
		40.372126,
		-78.633397
	],
	"15948": [
		40.489959,
		-78.764649
	],
	"15949": [
		40.396027,
		-79.116263
	],
	"15951": [
		40.333187,
		-78.770688
	],
	"15952": [
		40.303506,
		-78.776141
	],
	"15953": [
		40.208407,
		-78.8849
	],
	"15954": [
		40.424043,
		-78.998097
	],
	"15955": [
		40.322865,
		-78.697386
	],
	"15956": [
		40.350555,
		-78.795942
	],
	"15957": [
		40.557963,
		-78.904882
	],
	"15958": [
		40.387524,
		-78.730395
	],
	"15960": [
		40.497162,
		-78.884165
	],
	"15961": [
		40.471096,
		-78.941795
	],
	"15962": [
		40.38818,
		-78.715039
	],
	"15963": [
		40.227773,
		-78.759251
	],
	"16001": [
		40.910025,
		-79.945191
	],
	"16002": [
		40.815135,
		-79.855361
	],
	"16020": [
		41.115334,
		-79.898582
	],
	"16022": [
		41.05414,
		-79.733691
	],
	"16023": [
		40.785483,
		-79.750313
	],
	"16024": [
		40.742716,
		-80.038538
	],
	"16025": [
		40.939186,
		-79.760635
	],
	"16027": [
		40.820154,
		-80.019183
	],
	"16028": [
		40.951294,
		-79.635593
	],
	"16029": [
		40.879153,
		-79.846169
	],
	"16030": [
		41.136395,
		-79.796967
	],
	"16033": [
		40.783869,
		-80.051119
	],
	"16034": [
		40.862126,
		-79.733735
	],
	"16035": [
		41.108993,
		-80.014526
	],
	"16036": [
		41.134894,
		-79.666595
	],
	"16037": [
		40.842611,
		-80.133751
	],
	"16038": [
		41.164486,
		-79.953346
	],
	"16040": [
		41.09388,
		-79.840799
	],
	"16041": [
		41.005338,
		-79.714928
	],
	"16045": [
		40.852814,
		-79.916711
	],
	"16046": [
		40.702748,
		-80.023906
	],
	"16048": [
		41.053202,
		-79.818427
	],
	"16049": [
		41.094067,
		-79.671823
	],
	"16050": [
		41.044024,
		-79.761496
	],
	"16051": [
		40.944894,
		-80.138143
	],
	"16052": [
		40.899396,
		-80.061581
	],
	"16053": [
		40.811868,
		-79.983143
	],
	"16054": [
		41.153536,
		-79.663009
	],
	"16055": [
		40.716859,
		-79.749717
	],
	"16056": [
		40.728403,
		-79.841812
	],
	"16057": [
		41.034074,
		-80.0603
	],
	"16059": [
		40.707082,
		-79.927088
	],
	"16061": [
		41.005109,
		-79.88474
	],
	"16063": [
		40.762315,
		-80.1229
	],
	"16066": [
		40.709967,
		-80.105642
	],
	"16101": [
		40.983987,
		-80.29024
	],
	"16102": [
		40.960237,
		-80.424525
	],
	"16105": [
		41.057828,
		-80.340829
	],
	"16110": [
		41.505249,
		-80.380762
	],
	"16111": [
		41.520379,
		-80.282617
	],
	"16112": [
		40.960467,
		-80.498397
	],
	"16113": [
		41.280826,
		-80.424148
	],
	"16114": [
		41.402848,
		-80.183931
	],
	"16115": [
		40.796494,
		-80.463523
	],
	"16116": [
		41.044195,
		-80.449588
	],
	"16117": [
		40.871835,
		-80.256207
	],
	"16120": [
		40.885259,
		-80.479162
	],
	"16121": [
		41.211216,
		-80.497214
	],
	"16123": [
		40.821932,
		-80.196513
	],
	"16124": [
		41.33617,
		-80.276062
	],
	"16125": [
		41.406356,
		-80.372825
	],
	"16127": [
		41.173009,
		-80.072998
	],
	"16130": [
		41.444632,
		-80.222949
	],
	"16131": [
		41.550522,
		-80.37823
	],
	"16132": [
		41.005848,
		-80.505148
	],
	"16133": [
		41.267783,
		-80.114451
	],
	"16134": [
		41.524682,
		-80.478678
	],
	"16136": [
		40.834932,
		-80.323771
	],
	"16137": [
		41.23123,
		-80.238647
	],
	"16140": [
		41.095323,
		-80.51403
	],
	"16141": [
		40.868089,
		-80.398468
	],
	"16142": [
		41.145427,
		-80.333134
	],
	"16143": [
		41.10403,
		-80.444939
	],
	"16145": [
		41.380196,
		-80.078627
	],
	"16146": [
		41.234113,
		-80.499672
	],
	"16148": [
		41.228489,
		-80.417588
	],
	"16150": [
		41.285145,
		-80.45325
	],
	"16151": [
		41.4439,
		-80.206786
	],
	"16153": [
		41.32224,
		-80.086586
	],
	"16154": [
		41.325898,
		-80.420113
	],
	"16155": [
		41.067732,
		-80.510731
	],
	"16156": [
		41.088767,
		-80.216432
	],
	"16157": [
		40.888212,
		-80.333383
	],
	"16159": [
		41.153413,
		-80.475263
	],
	"16160": [
		40.930554,
		-80.356607
	],
	"16161": [
		41.19709,
		-80.495844
	],
	"16201": [
		40.805185,
		-79.469413
	],
	"16210": [
		40.895514,
		-79.51428
	],
	"16211": [
		40.794443,
		-79.202555
	],
	"16212": [
		40.754359,
		-79.583923
	],
	"16213": [
		41.125669,
		-79.557671
	],
	"16214": [
		41.203549,
		-79.360502
	],
	"16217": [
		41.331192,
		-79.17368
	],
	"16218": [
		40.933435,
		-79.590649
	],
	"16222": [
		40.873676,
		-79.257028
	],
	"16223": [
		40.975988,
		-79.363954
	],
	"16224": [
		41.06508,
		-79.29486
	],
	"16226": [
		40.711646,
		-79.486425
	],
	"16228": [
		40.760813,
		-79.535765
	],
	"16229": [
		40.717124,
		-79.642747
	],
	"16230": [
		41.020482,
		-79.283246
	],
	"16232": [
		41.213586,
		-79.551242
	],
	"16233": [
		41.36124,
		-79.271067
	],
	"16235": [
		41.322665,
		-79.352329
	],
	"16236": [
		40.787838,
		-79.522661
	],
	"16238": [
		40.787837,
		-79.520848
	],
	"16239": [
		41.496972,
		-79.137779
	],
	"16240": [
		41.036013,
		-79.225
	],
	"16242": [
		41.009881,
		-79.365745
	],
	"16244": [
		40.792176,
		-79.276658
	],
	"16245": [
		41.00672,
		-79.298366
	],
	"16246": [
		40.79172,
		-79.182154
	],
	"16248": [
		41.034002,
		-79.502977
	],
	"16249": [
		40.761947,
		-79.312139
	],
	"16250": [
		40.768512,
		-79.232968
	],
	"16253": [
		40.951168,
		-79.342756
	],
	"16254": [
		41.253396,
		-79.461389
	],
	"16255": [
		41.128813,
		-79.466757
	],
	"16256": [
		40.855267,
		-79.134458
	],
	"16258": [
		41.236936,
		-79.278339
	],
	"16259": [
		40.925711,
		-79.451859
	],
	"16260": [
		41.396463,
		-79.230763
	],
	"16262": [
		40.839032,
		-79.652206
	],
	"16263": [
		40.801717,
		-79.336609
	],
	"16301": [
		41.453285,
		-79.622427
	],
	"16311": [
		41.462167,
		-80.042383
	],
	"16312": [
		41.932135,
		-79.303214
	],
	"16313": [
		41.733693,
		-79.122409
	],
	"16314": [
		41.520675,
		-80.077069
	],
	"16316": [
		41.601773,
		-80.303633
	],
	"16317": [
		41.532556,
		-79.853702
	],
	"16319": [
		41.324204,
		-79.623458
	],
	"16321": [
		41.57106,
		-79.399591
	],
	"16322": [
		41.598847,
		-79.373564
	],
	"16323": [
		41.41192,
		-79.828317
	],
	"16326": [
		41.376158,
		-79.43174
	],
	"16327": [
		41.637082,
		-79.959566
	],
	"16328": [
		41.653227,
		-79.72554
	],
	"16329": [
		41.798643,
		-79.258874
	],
	"16331": [
		41.293731,
		-79.558676
	],
	"16332": [
		41.356717,
		-79.369545
	],
	"16333": [
		41.70521,
		-78.928483
	],
	"16334": [
		41.290554,
		-79.449351
	],
	"16335": [
		41.630953,
		-80.156056
	],
	"16340": [
		41.802378,
		-79.417668
	],
	"16341": [
		41.56608,
		-79.549355
	],
	"16342": [
		41.321886,
		-79.941498
	],
	"16343": [
		41.425982,
		-79.752686
	],
	"16344": [
		41.470393,
		-79.684546
	],
	"16345": [
		41.944404,
		-79.082916
	],
	"16346": [
		41.378502,
		-79.67197
	],
	"16347": [
		41.659517,
		-79.069365
	],
	"16350": [
		41.956923,
		-79.334404
	],
	"16351": [
		41.675353,
		-79.370344
	],
	"16352": [
		41.767268,
		-79.038364
	],
	"16353": [
		41.495354,
		-79.373115
	],
	"16354": [
		41.613725,
		-79.706464
	],
	"16360": [
		41.684105,
		-79.890935
	],
	"16361": [
		41.384113,
		-79.342388
	],
	"16362": [
		41.450497,
		-79.965179
	],
	"16364": [
		41.351416,
		-79.527305
	],
	"16365": [
		41.840224,
		-79.157385
	],
	"16370": [
		41.574811,
		-79.460024
	],
	"16371": [
		41.869947,
		-79.326122
	],
	"16372": [
		41.200007,
		-79.872631
	],
	"16373": [
		41.208469,
		-79.698409
	],
	"16374": [
		41.263498,
		-79.815085
	],
	"16401": [
		41.878476,
		-80.40516
	],
	"16402": [
		41.961661,
		-79.469604
	],
	"16403": [
		41.792998,
		-80.014121
	],
	"16404": [
		41.727006,
		-79.789388
	],
	"16405": [
		41.946042,
		-79.532738
	],
	"16406": [
		41.749512,
		-80.36214
	],
	"16407": [
		41.922164,
		-79.664251
	],
	"16410": [
		41.922751,
		-80.308509
	],
	"16411": [
		41.977956,
		-80.447072
	],
	"16412": [
		41.88493,
		-80.170371
	],
	"16415": [
		42.03752,
		-80.23032
	],
	"16416": [
		41.825729,
		-79.472696
	],
	"16417": [
		41.971081,
		-80.315029
	],
	"16420": [
		41.6963,
		-79.547259
	],
	"16421": [
		42.171262,
		-79.931855
	],
	"16422": [
		41.667548,
		-80.310188
	],
	"16423": [
		42.021099,
		-80.340132
	],
	"16424": [
		41.661408,
		-80.438957
	],
	"16426": [
		41.979331,
		-80.14208
	],
	"16427": [
		41.877373,
		-79.967907
	],
	"16428": [
		42.171464,
		-79.831488
	],
	"16433": [
		41.737079,
		-80.140914
	],
	"16434": [
		41.79672,
		-79.668697
	],
	"16435": [
		41.817035,
		-80.385386
	],
	"16436": [
		41.838888,
		-79.510429
	],
	"16438": [
		41.892299,
		-79.845314
	],
	"16440": [
		41.782549,
		-80.126018
	],
	"16441": [
		41.95849,
		-79.983551
	],
	"16442": [
		42.038485,
		-79.825705
	],
	"16443": [
		41.939645,
		-80.484235
	],
	"16444": [
		41.871224,
		-80.120756
	],
	"16501": [
		42.120958,
		-80.089762
	],
	"16502": [
		42.110702,
		-80.101358
	],
	"16503": [
		42.127036,
		-80.061065
	],
	"16504": [
		42.109077,
		-80.049033
	],
	"16505": [
		42.131338,
		-80.138303
	],
	"16506": [
		42.062345,
		-80.151707
	],
	"16507": [
		42.13907,
		-80.083681
	],
	"16508": [
		42.096812,
		-80.09403
	],
	"16509": [
		42.060022,
		-80.038141
	],
	"16510": [
		42.108991,
		-79.954821
	],
	"16511": [
		42.166262,
		-79.99017
	],
	"16546": [
		42.104924,
		-80.053445
	],
	"16563": [
		42.117333,
		-79.986486
	],
	"16601": [
		40.555264,
		-78.370416
	],
	"16602": [
		40.512662,
		-78.373929
	],
	"16611": [
		40.579889,
		-78.115672
	],
	"16613": [
		40.548031,
		-78.537565
	],
	"16616": [
		40.76762,
		-78.440215
	],
	"16617": [
		40.607302,
		-78.322633
	],
	"16619": [
		40.660938,
		-78.446887
	],
	"16620": [
		40.840687,
		-78.351837
	],
	"16621": [
		40.232247,
		-78.125214
	],
	"16622": [
		40.32864,
		-78.066403
	],
	"16623": [
		40.271681,
		-78.052188
	],
	"16624": [
		40.570425,
		-78.600475
	],
	"16625": [
		40.28255,
		-78.504283
	],
	"16627": [
		40.757881,
		-78.497822
	],
	"16630": [
		40.456176,
		-78.576441
	],
	"16631": [
		40.272766,
		-78.345602
	],
	"16633": [
		40.157386,
		-78.234926
	],
	"16634": [
		40.210954,
		-78.173077
	],
	"16635": [
		40.410853,
		-78.499413
	],
	"16636": [
		40.600253,
		-78.502014
	],
	"16637": [
		40.341102,
		-78.467242
	],
	"16638": [
		40.336605,
		-78.203622
	],
	"16639": [
		40.695498,
		-78.448137
	],
	"16640": [
		40.705732,
		-78.574484
	],
	"16641": [
		40.489794,
		-78.484985
	],
	"16645": [
		40.799177,
		-78.499092
	],
	"16646": [
		40.689706,
		-78.72665
	],
	"16647": [
		40.400594,
		-78.103809
	],
	"16648": [
		40.434448,
		-78.331
	],
	"16650": [
		40.112053,
		-78.291955
	],
	"16651": [
		40.851464,
		-78.380424
	],
	"16652": [
		40.516022,
		-77.950096
	],
	"16655": [
		40.227952,
		-78.502963
	],
	"16656": [
		40.807227,
		-78.555986
	],
	"16657": [
		40.324864,
		-78.180282
	],
	"16659": [
		40.161582,
		-78.389717
	],
	"16661": [
		40.831088,
		-78.460928
	],
	"16662": [
		40.312725,
		-78.29545
	],
	"16664": [
		40.180753,
		-78.423648
	],
	"16665": [
		40.388705,
		-78.434236
	],
	"16666": [
		40.893849,
		-78.323205
	],
	"16667": [
		40.178298,
		-78.531649
	],
	"16668": [
		40.653367,
		-78.622319
	],
	"16669": [
		40.655953,
		-77.906687
	],
	"16670": [
		40.262378,
		-78.507952
	],
	"16671": [
		40.787552,
		-78.398242
	],
	"16672": [
		40.185501,
		-78.237228
	],
	"16673": [
		40.312437,
		-78.391483
	],
	"16674": [
		40.189417,
		-78.088273
	],
	"16677": [
		40.811839,
		-78.243597
	],
	"16678": [
		40.222577,
		-78.238232
	],
	"16679": [
		40.155253,
		-78.194384
	],
	"16680": [
		40.743206,
		-78.377596
	],
	"16682": [
		40.266061,
		-78.457822
	],
	"16683": [
		40.663867,
		-78.065558
	],
	"16685": [
		40.287492,
		-78.082637
	],
	"16686": [
		40.667866,
		-78.250746
	],
	"16689": [
		40.129985,
		-78.12899
	],
	"16691": [
		40.077493,
		-78.145934
	],
	"16692": [
		40.750827,
		-78.710802
	],
	"16693": [
		40.485361,
		-78.220805
	],
	"16694": [
		40.155301,
		-78.148799
	],
	"16695": [
		40.204653,
		-78.336929
	],
	"16699": [
		40.447211,
		-78.560505
	],
	"16701": [
		41.918454,
		-78.750607
	],
	"16720": [
		41.603181,
		-78.009756
	],
	"16724": [
		41.731993,
		-78.369239
	],
	"16725": [
		41.908177,
		-78.655324
	],
	"16726": [
		41.81459,
		-78.572463
	],
	"16727": [
		41.981005,
		-78.53004
	],
	"16728": [
		41.565765,
		-78.924183
	],
	"16729": [
		41.96255,
		-78.477022
	],
	"16730": [
		41.817813,
		-78.422813
	],
	"16731": [
		41.95138,
		-78.360377
	],
	"16732": [
		41.857255,
		-78.617264
	],
	"16733": [
		41.700701,
		-78.571785
	],
	"16734": [
		41.617607,
		-78.840217
	],
	"16735": [
		41.636099,
		-78.813409
	],
	"16738": [
		41.806868,
		-78.732143
	],
	"16740": [
		41.740956,
		-78.681499
	],
	"16743": [
		41.767638,
		-78.232975
	],
	"16744": [
		41.867085,
		-78.567081
	],
	"16745": [
		41.922273,
		-78.480505
	],
	"16746": [
		41.793875,
		-78.122491
	],
	"16748": [
		41.947228,
		-78.144487
	],
	"16749": [
		41.778911,
		-78.451517
	],
	"16750": [
		41.888978,
		-78.291593
	],
	"16801": [
		40.778889,
		-77.841377
	],
	"16802": [
		40.802605,
		-77.860639
	],
	"16803": [
		40.80165,
		-77.899658
	],
	"16820": [
		40.89739,
		-77.394449
	],
	"16821": [
		40.964394,
		-78.2009
	],
	"16822": [
		41.1483,
		-77.69703
	],
	"16823": [
		40.939052,
		-77.772647
	],
	"16825": [
		40.98677,
		-78.316466
	],
	"16826": [
		41.053921,
		-77.58041
	],
	"16827": [
		40.768082,
		-77.772659
	],
	"16828": [
		40.812101,
		-77.680555
	],
	"16829": [
		41.084949,
		-77.887495
	],
	"16830": [
		41.078677,
		-78.428662
	],
	"16832": [
		40.843945,
		-77.48159
	],
	"16833": [
		40.944007,
		-78.57236
	],
	"16834": [
		41.051824,
		-78.087077
	],
	"16835": [
		40.90743,
		-77.877404
	],
	"16836": [
		41.159132,
		-78.273274
	],
	"16837": [
		40.94544,
		-78.474451
	],
	"16838": [
		41.006463,
		-78.651726
	],
	"16839": [
		41.003854,
		-78.110537
	],
	"16840": [
		40.924257,
		-78.20308
	],
	"16841": [
		41.044614,
		-77.698187
	],
	"16843": [
		41.002756,
		-78.465645
	],
	"16844": [
		40.909068,
		-77.932075
	],
	"16845": [
		41.121742,
		-78.010569
	],
	"16847": [
		40.999285,
		-78.165498
	],
	"16848": [
		41.011313,
		-77.533288
	],
	"16849": [
		40.961123,
		-78.115673
	],
	"16851": [
		40.821875,
		-77.787129
	],
	"16852": [
		40.937031,
		-77.518663
	],
	"16853": [
		40.939209,
		-77.78706
	],
	"16854": [
		40.898021,
		-77.4731
	],
	"16855": [
		40.996457,
		-78.375664
	],
	"16858": [
		41.003352,
		-78.209655
	],
	"16859": [
		41.040743,
		-78.023238
	],
	"16860": [
		40.937991,
		-78.179764
	],
	"16861": [
		40.859044,
		-78.520499
	],
	"16863": [
		40.90785,
		-78.474641
	],
	"16865": [
		40.712063,
		-77.996064
	],
	"16866": [
		40.829699,
		-78.181491
	],
	"16868": [
		40.731973,
		-77.880499
	],
	"16870": [
		40.800878,
		-78.061907
	],
	"16871": [
		41.186615,
		-78.025727
	],
	"16872": [
		40.96747,
		-77.358404
	],
	"16874": [
		40.984877,
		-77.97585
	],
	"16875": [
		40.840389,
		-77.588045
	],
	"16876": [
		40.965638,
		-78.287646
	],
	"16877": [
		40.738633,
		-78.061155
	],
	"16878": [
		40.948941,
		-78.323571
	],
	"16879": [
		40.970952,
		-78.151495
	],
	"16881": [
		41.02678,
		-78.320437
	],
	"16882": [
		40.912451,
		-77.323471
	],
	"16901": [
		41.721291,
		-77.337283
	],
	"16911": [
		41.658676,
		-77.129189
	],
	"16912": [
		41.678438,
		-77.043261
	],
	"16914": [
		41.85423,
		-76.783664
	],
	"16915": [
		41.775448,
		-77.970918
	],
	"16917": [
		41.721712,
		-77.056726
	],
	"16920": [
		41.973653,
		-77.280816
	],
	"16921": [
		41.724126,
		-77.556256
	],
	"16922": [
		41.680661,
		-77.710708
	],
	"16923": [
		41.950555,
		-77.870564
	],
	"16925": [
		41.948556,
		-76.783808
	],
	"16926": [
		41.727085,
		-76.701713
	],
	"16927": [
		41.958712,
		-77.658709
	],
	"16928": [
		41.953384,
		-77.434478
	],
	"16929": [
		41.963406,
		-77.134908
	],
	"16930": [
		41.583782,
		-77.138826
	],
	"16932": [
		41.779128,
		-76.939472
	],
	"16933": [
		41.819424,
		-77.062502
	],
	"16935": [
		41.877494,
		-77.304722
	],
	"16936": [
		41.951125,
		-76.967113
	],
	"16937": [
		41.967896,
		-77.710941
	],
	"16938": [
		41.591145,
		-77.370357
	],
	"16939": [
		41.663649,
		-77.025818
	],
	"16940": [
		41.985396,
		-77.23825
	],
	"16941": [
		41.988299,
		-77.758044
	],
	"16942": [
		41.962541,
		-77.352208
	],
	"16943": [
		41.830161,
		-77.612813
	],
	"16946": [
		41.908728,
		-77.137724
	],
	"16947": [
		41.759502,
		-76.804051
	],
	"16948": [
		41.854715,
		-77.759215
	],
	"16950": [
		41.9,
		-77.531963
	],
	"17002": [
		40.50247,
		-77.848424
	],
	"17003": [
		40.362358,
		-76.569599
	],
	"17004": [
		40.601046,
		-77.730437
	],
	"17005": [
		40.602849,
		-76.8097
	],
	"17006": [
		40.286783,
		-77.546042
	],
	"17007": [
		40.125795,
		-77.118771
	],
	"17009": [
		40.636112,
		-77.565287
	],
	"17010": [
		40.277992,
		-76.582841
	],
	"17011": [
		40.23483,
		-76.928846
	],
	"17013": [
		40.242686,
		-77.197284
	],
	"17015": [
		40.177826,
		-77.229536
	],
	"17016": [
		40.277475,
		-76.402287
	],
	"17017": [
		40.637788,
		-76.882189
	],
	"17018": [
		40.422061,
		-76.826124
	],
	"17019": [
		40.094022,
		-77.022058
	],
	"17020": [
		40.414171,
		-77.041503
	],
	"17021": [
		40.330526,
		-77.668192
	],
	"17022": [
		40.167035,
		-76.608893
	],
	"17023": [
		40.584266,
		-76.816261
	],
	"17024": [
		40.406934,
		-77.306825
	],
	"17025": [
		40.294092,
		-76.974476
	],
	"17026": [
		40.458441,
		-76.431397
	],
	"17027": [
		40.155998,
		-76.995461
	],
	"17028": [
		40.396652,
		-76.658943
	],
	"17029": [
		40.558017,
		-77.616997
	],
	"17030": [
		40.609235,
		-76.725609
	],
	"17032": [
		40.491831,
		-76.832555
	],
	"17033": [
		40.271823,
		-76.637562
	],
	"17034": [
		40.20861,
		-76.785533
	],
	"17035": [
		40.403786,
		-77.581315
	],
	"17036": [
		40.268235,
		-76.712106
	],
	"17037": [
		40.434076,
		-77.422021
	],
	"17038": [
		40.467915,
		-76.556026
	],
	"17039": [
		40.292709,
		-76.240707
	],
	"17040": [
		40.322798,
		-77.304095
	],
	"17041": [
		40.216634,
		-76.539605
	],
	"17042": [
		40.294817,
		-76.424823
	],
	"17043": [
		40.247611,
		-76.900134
	],
	"17044": [
		40.577237,
		-77.594258
	],
	"17045": [
		40.597093,
		-77.000928
	],
	"17046": [
		40.381858,
		-76.429627
	],
	"17047": [
		40.376501,
		-77.428287
	],
	"17048": [
		40.576792,
		-76.761348
	],
	"17049": [
		40.653043,
		-77.256088
	],
	"17050": [
		40.24799,
		-77.02737
	],
	"17051": [
		40.459518,
		-77.775772
	],
	"17052": [
		40.276913,
		-77.986345
	],
	"17053": [
		40.32504,
		-77.026474
	],
	"17055": [
		40.183052,
		-77.005224
	],
	"17056": [
		40.537288,
		-77.35426
	],
	"17057": [
		40.193562,
		-76.724573
	],
	"17058": [
		40.505381,
		-77.55247
	],
	"17059": [
		40.589162,
		-77.391073
	],
	"17060": [
		40.469261,
		-77.893956
	],
	"17061": [
		40.566703,
		-76.90909
	],
	"17062": [
		40.546773,
		-77.187656
	],
	"17063": [
		40.761026,
		-77.484947
	],
	"17064": [
		40.242231,
		-76.476111
	],
	"17065": [
		40.110211,
		-77.189087
	],
	"17066": [
		40.352563,
		-77.869227
	],
	"17067": [
		40.390423,
		-76.315048
	],
	"17068": [
		40.410582,
		-77.178299
	],
	"17069": [
		40.453987,
		-76.970039
	],
	"17070": [
		40.202401,
		-76.865678
	],
	"17071": [
		40.298415,
		-77.601934
	],
	"17072": [
		40.233731,
		-77.081728
	],
	"17073": [
		40.302838,
		-76.255161
	],
	"17074": [
		40.478901,
		-77.148585
	],
	"17075": [
		40.393866,
		-77.835285
	],
	"17076": [
		40.616186,
		-77.311762
	],
	"17077": [
		40.403009,
		-76.535937
	],
	"17078": [
		40.287452,
		-76.58108
	],
	"17080": [
		40.640678,
		-76.8031
	],
	"17081": [
		40.20102,
		-77.283454
	],
	"17082": [
		40.495071,
		-77.448376
	],
	"17083": [
		40.277602,
		-76.437595
	],
	"17084": [
		40.675647,
		-77.626511
	],
	"17086": [
		40.690624,
		-77.122007
	],
	"17087": [
		40.43576,
		-76.280811
	],
	"17088": [
		40.300678,
		-76.294224
	],
	"17090": [
		40.318207,
		-77.181043
	],
	"17093": [
		40.307209,
		-76.930571
	],
	"17094": [
		40.581248,
		-77.198153
	],
	"17097": [
		40.580098,
		-76.677428
	],
	"17098": [
		40.588957,
		-76.632327
	],
	"17099": [
		40.632242,
		-77.576438
	],
	"17101": [
		40.258655,
		-76.894376
	],
	"17102": [
		40.27037,
		-76.905279
	],
	"17103": [
		40.275965,
		-76.866333
	],
	"17104": [
		40.254506,
		-76.862176
	],
	"17109": [
		40.289953,
		-76.824314
	],
	"17110": [
		40.315813,
		-76.886436
	],
	"17111": [
		40.267831,
		-76.78737
	],
	"17112": [
		40.373101,
		-76.776511
	],
	"17113": [
		40.225984,
		-76.827994
	],
	"17120": [
		40.265186,
		-76.882805
	],
	"17201": [
		39.961056,
		-77.656165
	],
	"17202": [
		39.875125,
		-77.609075
	],
	"17210": [
		40.196345,
		-77.669137
	],
	"17211": [
		39.754149,
		-78.400966
	],
	"17212": [
		39.812634,
		-78.064287
	],
	"17213": [
		40.244192,
		-77.771225
	],
	"17214": [
		39.748111,
		-77.47132
	],
	"17215": [
		40.078237,
		-77.892945
	],
	"17217": [
		40.238625,
		-77.721567
	],
	"17219": [
		40.249798,
		-77.683214
	],
	"17220": [
		40.191575,
		-77.738979
	],
	"17221": [
		40.068125,
		-77.816484
	],
	"17222": [
		39.896406,
		-77.493941
	],
	"17223": [
		40.0865,
		-77.942752
	],
	"17224": [
		39.967941,
		-77.897478
	],
	"17225": [
		39.783506,
		-77.76287
	],
	"17228": [
		39.9871,
		-78.093362
	],
	"17229": [
		40.084004,
		-78.010139
	],
	"17233": [
		39.975605,
		-77.98716
	],
	"17235": [
		39.857193,
		-77.698053
	],
	"17236": [
		39.800187,
		-77.9474
	],
	"17237": [
		39.833929,
		-77.543724
	],
	"17238": [
		39.85811,
		-78.13094
	],
	"17239": [
		40.131797,
		-77.83677
	],
	"17240": [
		40.150871,
		-77.579686
	],
	"17241": [
		40.176528,
		-77.408448
	],
	"17243": [
		40.277527,
		-77.819941
	],
	"17244": [
		40.086764,
		-77.658616
	],
	"17246": [
		40.054394,
		-77.660811
	],
	"17247": [
		39.798776,
		-77.579352
	],
	"17249": [
		40.241379,
		-77.899459
	],
	"17250": [
		39.737141,
		-77.524295
	],
	"17251": [
		40.131802,
		-77.685552
	],
	"17252": [
		39.912329,
		-77.82691
	],
	"17253": [
		40.213308,
		-78.006905
	],
	"17254": [
		39.970229,
		-77.590358
	],
	"17255": [
		40.161252,
		-77.862514
	],
	"17256": [
		39.782914,
		-77.677308
	],
	"17257": [
		40.046821,
		-77.493064
	],
	"17260": [
		40.296045,
		-77.893701
	],
	"17261": [
		39.860912,
		-77.508159
	],
	"17262": [
		40.144998,
		-77.740213
	],
	"17263": [
		39.727223,
		-77.717855
	],
	"17264": [
		40.179925,
		-77.993741
	],
	"17265": [
		40.027596,
		-77.781222
	],
	"17266": [
		40.088568,
		-77.412933
	],
	"17267": [
		39.807955,
		-78.239657
	],
	"17268": [
		39.774913,
		-77.575622
	],
	"17270": [
		39.85473,
		-77.797808
	],
	"17271": [
		40.097754,
		-77.803092
	],
	"17272": [
		39.769525,
		-77.621818
	],
	"17301": [
		39.895227,
		-76.978982
	],
	"17302": [
		39.81726,
		-76.41368
	],
	"17304": [
		39.977245,
		-77.232742
	],
	"17306": [
		39.980581,
		-77.249397
	],
	"17307": [
		39.947758,
		-77.326819
	],
	"17309": [
		39.871334,
		-76.450129
	],
	"17311": [
		39.816546,
		-76.842472
	],
	"17313": [
		39.884013,
		-76.659984
	],
	"17314": [
		39.755506,
		-76.326301
	],
	"17315": [
		40.026604,
		-76.864065
	],
	"17316": [
		39.965466,
		-77.007959
	],
	"17317": [
		39.97071,
		-76.523188
	],
	"17318": [
		40.022258,
		-76.723017
	],
	"17319": [
		40.160489,
		-76.793975
	],
	"17320": [
		39.770718,
		-77.388758
	],
	"17321": [
		39.749675,
		-76.444345
	],
	"17322": [
		39.85591,
		-76.532733
	],
	"17324": [
		40.030395,
		-77.236846
	],
	"17325": [
		39.826258,
		-77.227606
	],
	"17327": [
		39.779512,
		-76.753257
	],
	"17329": [
		39.761844,
		-76.85112
	],
	"17331": [
		39.78969,
		-76.977984
	],
	"17339": [
		40.134731,
		-76.885292
	],
	"17340": [
		39.755229,
		-77.116784
	],
	"17343": [
		39.869254,
		-77.334798
	],
	"17344": [
		39.805688,
		-77.019219
	],
	"17345": [
		40.078089,
		-76.747503
	],
	"17347": [
		40.057548,
		-76.688144
	],
	"17349": [
		39.744992,
		-76.647408
	],
	"17350": [
		39.890088,
		-77.079399
	],
	"17352": [
		39.761201,
		-76.499847
	],
	"17353": [
		39.883086,
		-77.371736
	],
	"17355": [
		39.759868,
		-76.696019
	],
	"17356": [
		39.896584,
		-76.582258
	],
	"17360": [
		39.854372,
		-76.75039
	],
	"17361": [
		39.765516,
		-76.677065
	],
	"17362": [
		39.847679,
		-76.868704
	],
	"17363": [
		39.768623,
		-76.586385
	],
	"17364": [
		39.929395,
		-76.899326
	],
	"17365": [
		40.060733,
		-76.93386
	],
	"17366": [
		39.93279,
		-76.556703
	],
	"17368": [
		39.983859,
		-76.518701
	],
	"17370": [
		40.12144,
		-76.778402
	],
	"17371": [
		39.902704,
		-76.78796
	],
	"17372": [
		40.001467,
		-77.106153
	],
	"17401": [
		39.959462,
		-76.733457
	],
	"17402": [
		39.958485,
		-76.65866
	],
	"17403": [
		39.923228,
		-76.712794
	],
	"17404": [
		40.002612,
		-76.773548
	],
	"17406": [
		40.014709,
		-76.640873
	],
	"17407": [
		39.883773,
		-76.712102
	],
	"17408": [
		39.928859,
		-76.79935
	],
	"17501": [
		40.156459,
		-76.20404
	],
	"17502": [
		40.100904,
		-76.660147
	],
	"17505": [
		40.063501,
		-76.192436
	],
	"17507": [
		40.198042,
		-76.016233
	],
	"17508": [
		40.124758,
		-76.218766
	],
	"17509": [
		39.912055,
		-76.036499
	],
	"17512": [
		40.040236,
		-76.486336
	],
	"17516": [
		39.94146,
		-76.371359
	],
	"17517": [
		40.244751,
		-76.132881
	],
	"17518": [
		39.80893,
		-76.253014
	],
	"17519": [
		40.141438,
		-76.023423
	],
	"17520": [
		40.097518,
		-76.349193
	],
	"17522": [
		40.173688,
		-76.170494
	],
	"17527": [
		40.008881,
		-75.991296
	],
	"17529": [
		40.041933,
		-76.097142
	],
	"17532": [
		39.858156,
		-76.288008
	],
	"17535": [
		39.982036,
		-76.022866
	],
	"17536": [
		39.848034,
		-76.073774
	],
	"17538": [
		40.082629,
		-76.414548
	],
	"17540": [
		40.097608,
		-76.189987
	],
	"17543": [
		40.181032,
		-76.29538
	],
	"17545": [
		40.178666,
		-76.434341
	],
	"17547": [
		40.0684,
		-76.586688
	],
	"17550": [
		40.075921,
		-76.583426
	],
	"17551": [
		39.982202,
		-76.371419
	],
	"17552": [
		40.108352,
		-76.51092
	],
	"17554": [
		40.040303,
		-76.424176
	],
	"17555": [
		40.122377,
		-75.959392
	],
	"17557": [
		40.09985,
		-76.072742
	],
	"17560": [
		39.912675,
		-76.227681
	],
	"17562": [
		39.970438,
		-76.092067
	],
	"17563": [
		39.760748,
		-76.193306
	],
	"17565": [
		39.897702,
		-76.331027
	],
	"17566": [
		39.867186,
		-76.147513
	],
	"17569": [
		40.271433,
		-76.096577
	],
	"17570": [
		40.129942,
		-76.568851
	],
	"17572": [
		39.974435,
		-76.119357
	],
	"17576": [
		40.037195,
		-76.19676
	],
	"17578": [
		40.226099,
		-76.159806
	],
	"17579": [
		39.960406,
		-76.180752
	],
	"17581": [
		40.160511,
		-76.04959
	],
	"17582": [
		39.99314,
		-76.469176
	],
	"17584": [
		39.955413,
		-76.263581
	],
	"17601": [
		40.074241,
		-76.314914
	],
	"17602": [
		40.014623,
		-76.246351
	],
	"17603": [
		40.030839,
		-76.330432
	],
	"17606": [
		40.11167,
		-76.303907
	],
	"17701": [
		41.345045,
		-76.857256
	],
	"17702": [
		41.183488,
		-77.077271
	],
	"17721": [
		41.183625,
		-77.318405
	],
	"17723": [
		41.435023,
		-77.471376
	],
	"17724": [
		41.642528,
		-76.805113
	],
	"17727": [
		41.510687,
		-77.496446
	],
	"17728": [
		41.334774,
		-77.078567
	],
	"17729": [
		41.511239,
		-77.736103
	],
	"17730": [
		41.110449,
		-76.87841
	],
	"17731": [
		41.42941,
		-76.578672
	],
	"17737": [
		41.299271,
		-76.68578
	],
	"17739": [
		41.38817,
		-77.418683
	],
	"17740": [
		41.249445,
		-77.269646
	],
	"17742": [
		41.238532,
		-76.60227
	],
	"17744": [
		41.24097,
		-77.153274
	],
	"17745": [
		41.285072,
		-77.471166
	],
	"17747": [
		41.032578,
		-77.331757
	],
	"17748": [
		41.150402,
		-77.352978
	],
	"17749": [
		41.072241,
		-76.818889
	],
	"17750": [
		41.057866,
		-77.482253
	],
	"17751": [
		41.153528,
		-77.54479
	],
	"17752": [
		41.180139,
		-76.930251
	],
	"17754": [
		41.311612,
		-76.889212
	],
	"17756": [
		41.208002,
		-76.739819
	],
	"17758": [
		41.360147,
		-76.535534
	],
	"17760": [
		41.413576,
		-77.657357
	],
	"17762": [
		41.284231,
		-76.700157
	],
	"17763": [
		41.507375,
		-76.97618
	],
	"17764": [
		41.33475,
		-77.813637
	],
	"17765": [
		41.565735,
		-76.973451
	],
	"17767": [
		41.083874,
		-77.463161
	],
	"17768": [
		41.558836,
		-76.755985
	],
	"17771": [
		41.437285,
		-77.035516
	],
	"17772": [
		41.125057,
		-76.713033
	],
	"17774": [
		41.281191,
		-76.533013
	],
	"17776": [
		41.414649,
		-77.29284
	],
	"17777": [
		41.106517,
		-76.821696
	],
	"17778": [
		41.284918,
		-77.983927
	],
	"17779": [
		41.207259,
		-77.376901
	],
	"17801": [
		40.834724,
		-76.755008
	],
	"17810": [
		41.11136,
		-77.031372
	],
	"17812": [
		40.740534,
		-77.22791
	],
	"17813": [
		40.780401,
		-77.172083
	],
	"17814": [
		41.273237,
		-76.363142
	],
	"17815": [
		41.020038,
		-76.420092
	],
	"17820": [
		40.895639,
		-76.403739
	],
	"17821": [
		40.990142,
		-76.644205
	],
	"17822": [
		40.968016,
		-76.605142
	],
	"17823": [
		40.745495,
		-76.776193
	],
	"17824": [
		40.852378,
		-76.505339
	],
	"17827": [
		40.75286,
		-76.968032
	],
	"17829": [
		40.900549,
		-77.155804
	],
	"17830": [
		40.686064,
		-76.80517
	],
	"17832": [
		40.805945,
		-76.45902
	],
	"17834": [
		40.78021,
		-76.466875
	],
	"17835": [
		40.878987,
		-77.204312
	],
	"17836": [
		40.714342,
		-76.606462
	],
	"17837": [
		40.974977,
		-76.94515
	],
	"17840": [
		40.772092,
		-76.43312
	],
	"17841": [
		40.724869,
		-77.352556
	],
	"17842": [
		40.80295,
		-77.040151
	],
	"17844": [
		40.973975,
		-77.085405
	],
	"17845": [
		40.88437,
		-77.21157
	],
	"17846": [
		41.141745,
		-76.517122
	],
	"17847": [
		41.007985,
		-76.810949
	],
	"17850": [
		40.965596,
		-76.857448
	],
	"17851": [
		40.803118,
		-76.4343
	],
	"17853": [
		40.694729,
		-77.0067
	],
	"17855": [
		40.890386,
		-76.966684
	],
	"17856": [
		41.065358,
		-76.947364
	],
	"17857": [
		40.932136,
		-76.772972
	],
	"17859": [
		41.116755,
		-76.398537
	],
	"17860": [
		40.866964,
		-76.611035
	],
	"17861": [
		40.773224,
		-77.082304
	],
	"17862": [
		40.860506,
		-77.056395
	],
	"17864": [
		40.704727,
		-76.905819
	],
	"17865": [
		40.99018,
		-76.786769
	],
	"17866": [
		40.802252,
		-76.547547
	],
	"17867": [
		40.714115,
		-76.688597
	],
	"17868": [
		40.957721,
		-76.633968
	],
	"17870": [
		40.817323,
		-76.888636
	],
	"17872": [
		40.753396,
		-76.697714
	],
	"17876": [
		40.858108,
		-76.825754
	],
	"17878": [
		41.176018,
		-76.323488
	],
	"17880": [
		40.892209,
		-77.121755
	],
	"17881": [
		40.782906,
		-76.670014
	],
	"17884": [
		41.055983,
		-76.669463
	],
	"17885": [
		40.866345,
		-77.314017
	],
	"17886": [
		41.016709,
		-76.875204
	],
	"17887": [
		41.129175,
		-76.932899
	],
	"17888": [
		40.806775,
		-76.378479
	],
	"17889": [
		40.877739,
		-76.921282
	],
	"17901": [
		40.683828,
		-76.277542
	],
	"17920": [
		40.819642,
		-76.326909
	],
	"17921": [
		40.751575,
		-76.360586
	],
	"17922": [
		40.582492,
		-76.110646
	],
	"17923": [
		40.632873,
		-76.319914
	],
	"17925": [
		40.754944,
		-76.0727
	],
	"17929": [
		40.630703,
		-76.194039
	],
	"17930": [
		40.708664,
		-76.115313
	],
	"17931": [
		40.786491,
		-76.214575
	],
	"17933": [
		40.604485,
		-76.243195
	],
	"17934": [
		40.796439,
		-76.211333
	],
	"17935": [
		40.79614,
		-76.279682
	],
	"17936": [
		40.750116,
		-76.33993
	],
	"17938": [
		40.65307,
		-76.517083
	],
	"17941": [
		40.685722,
		-76.609184
	],
	"17943": [
		40.75666,
		-76.38781
	],
	"17944": [
		40.67254,
		-76.279256
	],
	"17945": [
		40.78535,
		-76.375457
	],
	"17946": [
		40.810364,
		-76.256372
	],
	"17948": [
		40.845385,
		-76.117468
	],
	"17949": [
		40.793926,
		-76.242345
	],
	"17951": [
		40.678556,
		-76.245246
	],
	"17952": [
		40.755438,
		-76.058552
	],
	"17953": [
		40.751902,
		-76.120218
	],
	"17954": [
		40.69042,
		-76.259688
	],
	"17957": [
		40.591824,
		-76.518212
	],
	"17959": [
		40.732018,
		-76.150078
	],
	"17960": [
		40.697241,
		-75.947044
	],
	"17961": [
		40.649699,
		-76.060949
	],
	"17963": [
		40.561577,
		-76.382017
	],
	"17964": [
		40.702954,
		-76.514515
	],
	"17965": [
		40.698615,
		-76.165281
	],
	"17967": [
		40.856253,
		-76.216265
	],
	"17968": [
		40.638679,
		-76.6123
	],
	"17970": [
		40.720206,
		-76.191949
	],
	"17972": [
		40.592165,
		-76.20579
	],
	"17974": [
		40.6957,
		-76.236267
	],
	"17976": [
		40.819867,
		-76.210606
	],
	"17978": [
		40.625448,
		-76.614963
	],
	"17979": [
		40.561585,
		-76.199702
	],
	"17980": [
		40.518691,
		-76.644544
	],
	"17981": [
		40.634118,
		-76.389387
	],
	"17982": [
		40.785932,
		-76.021309
	],
	"17983": [
		40.642622,
		-76.547166
	],
	"17985": [
		40.912303,
		-76.216648
	],
	"18011": [
		40.477013,
		-75.646129
	],
	"18013": [
		40.848762,
		-75.177293
	],
	"18014": [
		40.764431,
		-75.409221
	],
	"18015": [
		40.585869,
		-75.367239
	],
	"18016": [
		40.63213,
		-75.392847
	],
	"18017": [
		40.659951,
		-75.387306
	],
	"18018": [
		40.627594,
		-75.395584
	],
	"18020": [
		40.672385,
		-75.327459
	],
	"18030": [
		40.802263,
		-75.66372
	],
	"18031": [
		40.552084,
		-75.648674
	],
	"18032": [
		40.656191,
		-75.467788
	],
	"18034": [
		40.546353,
		-75.415278
	],
	"18035": [
		40.745323,
		-75.538544
	],
	"18036": [
		40.509151,
		-75.38594
	],
	"18037": [
		40.683103,
		-75.54801
	],
	"18038": [
		40.794881,
		-75.486087
	],
	"18040": [
		40.746007,
		-75.225665
	],
	"18041": [
		40.42046,
		-75.509926
	],
	"18042": [
		40.654176,
		-75.223124
	],
	"18045": [
		40.69345,
		-75.272796
	],
	"18046": [
		40.548009,
		-75.560346
	],
	"18049": [
		40.515732,
		-75.48929
	],
	"18051": [
		40.595607,
		-75.666926
	],
	"18052": [
		40.657428,
		-75.504255
	],
	"18053": [
		40.71923,
		-75.704117
	],
	"18054": [
		40.352369,
		-75.438736
	],
	"18055": [
		40.591583,
		-75.304353
	],
	"18056": [
		40.450942,
		-75.550389
	],
	"18058": [
		40.888739,
		-75.49429
	],
	"18059": [
		40.723506,
		-75.543081
	],
	"18062": [
		40.503935,
		-75.58518
	],
	"18063": [
		40.782599,
		-75.167151
	],
	"18064": [
		40.757008,
		-75.315964
	],
	"18066": [
		40.664462,
		-75.7401
	],
	"18067": [
		40.715038,
		-75.474675
	],
	"18068": [
		40.484829,
		-75.520041
	],
	"18069": [
		40.625289,
		-75.615125
	],
	"18070": [
		40.434866,
		-75.535617
	],
	"18071": [
		40.834214,
		-75.555278
	],
	"18072": [
		40.84414,
		-75.259135
	],
	"18073": [
		40.386499,
		-75.47443
	],
	"18074": [
		40.316737,
		-75.515686
	],
	"18076": [
		40.374803,
		-75.48079
	],
	"18077": [
		40.570065,
		-75.237114
	],
	"18078": [
		40.673304,
		-75.620717
	],
	"18079": [
		40.743873,
		-75.658519
	],
	"18080": [
		40.735856,
		-75.635308
	],
	"18081": [
		40.563695,
		-75.281582
	],
	"18083": [
		40.754952,
		-75.267086
	],
	"18085": [
		40.741232,
		-75.254887
	],
	"18086": [
		40.736807,
		-75.54793
	],
	"18087": [
		40.55683,
		-75.593654
	],
	"18088": [
		40.765692,
		-75.557509
	],
	"18091": [
		40.831388,
		-75.319795
	],
	"18092": [
		40.469697,
		-75.51314
	],
	"18101": [
		40.602658,
		-75.469236
	],
	"18102": [
		40.608473,
		-75.476275
	],
	"18103": [
		40.570308,
		-75.488926
	],
	"18104": [
		40.611658,
		-75.546853
	],
	"18105": [
		40.601416,
		-75.493938
	],
	"18106": [
		40.56471,
		-75.568758
	],
	"18109": [
		40.635486,
		-75.441922
	],
	"18195": [
		40.584272,
		-75.624789
	],
	"18201": [
		40.949038,
		-75.955638
	],
	"18202": [
		40.954433,
		-76.045987
	],
	"18210": [
		41.004434,
		-75.576536
	],
	"18211": [
		40.74408,
		-75.830406
	],
	"18212": [
		40.775253,
		-75.709569
	],
	"18214": [
		40.800254,
		-76.084215
	],
	"18216": [
		40.941496,
		-75.892858
	],
	"18218": [
		40.81974,
		-75.916102
	],
	"18219": [
		40.990787,
		-76.057456
	],
	"18220": [
		40.840455,
		-76.060433
	],
	"18221": [
		41.001778,
		-75.917333
	],
	"18222": [
		41.035227,
		-76.003468
	],
	"18223": [
		40.982353,
		-75.950287
	],
	"18224": [
		41.026275,
		-75.873263
	],
	"18225": [
		40.981311,
		-75.971311
	],
	"18229": [
		40.931094,
		-75.673779
	],
	"18230": [
		40.921083,
		-75.934528
	],
	"18231": [
		40.904304,
		-76.007984
	],
	"18232": [
		40.833033,
		-75.884397
	],
	"18234": [
		40.992594,
		-75.96435
	],
	"18235": [
		40.829796,
		-75.69786
	],
	"18237": [
		40.886531,
		-75.979617
	],
	"18239": [
		40.989337,
		-75.988272
	],
	"18240": [
		40.864677,
		-75.872265
	],
	"18241": [
		40.951524,
		-76.130802
	],
	"18242": [
		40.911388,
		-76.124322
	],
	"18244": [
		40.822445,
		-75.670561
	],
	"18245": [
		40.853201,
		-76.033515
	],
	"18246": [
		40.957215,
		-76.195185
	],
	"18248": [
		40.90116,
		-76.093068
	],
	"18249": [
		40.987794,
		-76.116117
	],
	"18250": [
		40.824963,
		-75.846201
	],
	"18251": [
		41.008051,
		-76.077381
	],
	"18252": [
		40.766995,
		-75.974097
	],
	"18254": [
		40.915913,
		-75.965651
	],
	"18255": [
		40.933491,
		-75.829695
	],
	"18256": [
		40.940886,
		-76.146755
	],
	"18301": [
		41.042703,
		-75.175581
	],
	"18302": [
		41.09655,
		-75.111107
	],
	"18321": [
		41.02575,
		-75.28331
	],
	"18322": [
		40.918523,
		-75.393279
	],
	"18323": [
		41.196579,
		-75.273469
	],
	"18324": [
		41.158143,
		-75.000689
	],
	"18325": [
		41.204726,
		-75.225359
	],
	"18326": [
		41.167313,
		-75.25302
	],
	"18327": [
		40.967874,
		-75.133837
	],
	"18328": [
		41.228522,
		-74.973952
	],
	"18330": [
		40.968776,
		-75.449217
	],
	"18331": [
		40.909936,
		-75.443831
	],
	"18332": [
		41.094747,
		-75.261341
	],
	"18333": [
		40.906085,
		-75.490084
	],
	"18334": [
		41.054954,
		-75.431784
	],
	"18335": [
		41.068137,
		-75.103544
	],
	"18336": [
		41.374749,
		-74.742896
	],
	"18337": [
		41.32911,
		-74.871787
	],
	"18340": [
		41.417762,
		-74.765897
	],
	"18342": [
		41.170609,
		-75.273444
	],
	"18343": [
		40.893707,
		-75.111897
	],
	"18344": [
		41.122901,
		-75.343996
	],
	"18346": [
		41.142754,
		-75.421191
	],
	"18347": [
		41.138882,
		-75.560229
	],
	"18349": [
		41.101253,
		-75.366514
	],
	"18350": [
		41.123825,
		-75.466143
	],
	"18351": [
		40.92272,
		-75.099334
	],
	"18352": [
		41.006831,
		-75.356087
	],
	"18353": [
		40.89534,
		-75.357668
	],
	"18354": [
		40.922603,
		-75.322095
	],
	"18355": [
		41.076955,
		-75.362899
	],
	"18356": [
		41.011079,
		-75.118103
	],
	"18357": [
		41.231653,
		-75.210713
	],
	"18360": [
		40.967361,
		-75.287967
	],
	"18370": [
		41.092408,
		-75.339537
	],
	"18371": [
		41.150011,
		-75.045249
	],
	"18372": [
		41.044022,
		-75.33635
	],
	"18403": [
		41.508802,
		-75.535262
	],
	"18405": [
		41.599606,
		-75.103881
	],
	"18407": [
		41.591754,
		-75.534793
	],
	"18411": [
		41.454492,
		-75.74454
	],
	"18413": [
		41.648128,
		-75.589342
	],
	"18414": [
		41.541072,
		-75.741068
	],
	"18415": [
		41.74353,
		-75.124268
	],
	"18417": [
		41.809703,
		-75.201115
	],
	"18419": [
		41.585933,
		-75.792369
	],
	"18420": [
		41.602006,
		-75.710133
	],
	"18421": [
		41.66421,
		-75.492886
	],
	"18424": [
		41.230478,
		-75.524965
	],
	"18425": [
		41.438445,
		-75.043141
	],
	"18426": [
		41.325507,
		-75.239061
	],
	"18427": [
		41.404977,
		-75.406897
	],
	"18428": [
		41.404304,
		-75.118065
	],
	"18430": [
		41.756453,
		-75.472457
	],
	"18431": [
		41.61651,
		-75.257698
	],
	"18433": [
		41.573307,
		-75.58133
	],
	"18434": [
		41.453566,
		-75.542347
	],
	"18435": [
		41.455609,
		-74.983238
	],
	"18436": [
		41.442799,
		-75.39345
	],
	"18437": [
		41.871969,
		-75.316504
	],
	"18438": [
		41.439159,
		-75.256488
	],
	"18439": [
		41.825503,
		-75.348966
	],
	"18441": [
		41.656053,
		-75.613942
	],
	"18443": [
		41.662927,
		-75.102094
	],
	"18444": [
		41.329074,
		-75.55277
	],
	"18445": [
		41.297908,
		-75.359362
	],
	"18446": [
		41.656175,
		-75.759143
	],
	"18447": [
		41.513448,
		-75.607166
	],
	"18451": [
		41.396998,
		-75.217955
	],
	"18452": [
		41.483628,
		-75.590282
	],
	"18453": [
		41.758495,
		-75.370789
	],
	"18454": [
		41.827285,
		-75.426144
	],
	"18455": [
		41.893001,
		-75.359193
	],
	"18456": [
		41.612796,
		-75.340433
	],
	"18457": [
		41.472094,
		-75.049165
	],
	"18458": [
		41.395754,
		-74.919254
	],
	"18459": [
		41.504102,
		-75.428839
	],
	"18460": [
		41.249894,
		-75.313008
	],
	"18461": [
		41.929003,
		-75.327674
	],
	"18462": [
		41.914344,
		-75.409089
	],
	"18463": [
		41.357556,
		-75.396934
	],
	"18464": [
		41.403012,
		-75.17695
	],
	"18465": [
		41.831299,
		-75.516849
	],
	"18466": [
		41.196442,
		-75.394233
	],
	"18469": [
		41.703684,
		-75.130492
	],
	"18470": [
		41.724706,
		-75.535516
	],
	"18471": [
		41.529093,
		-75.69118
	],
	"18472": [
		41.58341,
		-75.396687
	],
	"18473": [
		41.522059,
		-75.217172
	],
	"18503": [
		41.411107,
		-75.66747
	],
	"18504": [
		41.425521,
		-75.699867
	],
	"18505": [
		41.386202,
		-75.651527
	],
	"18507": [
		41.359038,
		-75.681823
	],
	"18508": [
		41.454947,
		-75.657937
	],
	"18509": [
		41.430836,
		-75.642907
	],
	"18510": [
		41.407379,
		-75.636613
	],
	"18512": [
		41.426229,
		-75.601387
	],
	"18517": [
		41.394641,
		-75.713636
	],
	"18518": [
		41.375058,
		-75.739557
	],
	"18519": [
		41.461939,
		-75.630719
	],
	"18602": [
		41.185952,
		-75.753988
	],
	"18603": [
		41.082035,
		-76.258139
	],
	"18610": [
		41.069339,
		-75.549469
	],
	"18612": [
		41.346088,
		-75.98638
	],
	"18614": [
		41.524947,
		-76.496996
	],
	"18615": [
		41.461702,
		-75.857203
	],
	"18616": [
		41.50483,
		-76.636058
	],
	"18617": [
		41.17054,
		-76.077533
	],
	"18618": [
		41.365177,
		-76.041404
	],
	"18619": [
		41.461696,
		-76.717816
	],
	"18621": [
		41.248601,
		-76.098546
	],
	"18622": [
		41.201232,
		-76.273515
	],
	"18623": [
		41.664801,
		-76.151984
	],
	"18624": [
		41.060686,
		-75.647064
	],
	"18625": [
		41.513387,
		-75.848822
	],
	"18626": [
		41.398286,
		-76.523876
	],
	"18628": [
		41.430143,
		-76.313808
	],
	"18629": [
		41.517604,
		-76.141339
	],
	"18630": [
		41.662144,
		-76.023636
	],
	"18631": [
		41.029907,
		-76.304374
	],
	"18632": [
		41.45936,
		-76.377495
	],
	"18634": [
		41.185512,
		-76.022619
	],
	"18635": [
		41.02924,
		-76.201347
	],
	"18636": [
		41.39141,
		-76.113651
	],
	"18640": [
		41.29823,
		-75.738725
	],
	"18641": [
		41.340533,
		-75.725729
	],
	"18642": [
		41.356348,
		-75.773181
	],
	"18643": [
		41.370822,
		-75.840422
	],
	"18644": [
		41.32793,
		-75.882372
	],
	"18651": [
		41.25404,
		-75.959845
	],
	"18653": [
		41.393316,
		-75.82313
	],
	"18655": [
		41.187724,
		-76.203214
	],
	"18656": [
		41.332524,
		-76.185452
	],
	"18657": [
		41.52251,
		-75.959485
	],
	"18660": [
		41.097733,
		-76.062014
	],
	"18661": [
		41.076379,
		-75.740724
	],
	"18701": [
		41.243648,
		-75.885029
	],
	"18702": [
		41.230476,
		-75.757441
	],
	"18704": [
		41.262553,
		-75.914636
	],
	"18705": [
		41.271834,
		-75.842735
	],
	"18706": [
		41.203289,
		-75.914803
	],
	"18707": [
		41.13575,
		-75.933499
	],
	"18708": [
		41.295848,
		-75.963463
	],
	"18709": [
		41.285469,
		-75.896388
	],
	"18801": [
		41.826389,
		-75.939711
	],
	"18810": [
		41.933295,
		-76.50713
	],
	"18812": [
		41.973202,
		-75.964751
	],
	"18814": [
		41.784063,
		-76.607272
	],
	"18816": [
		41.757157,
		-75.915633
	],
	"18817": [
		41.872722,
		-76.631611
	],
	"18818": [
		41.911258,
		-76.044011
	],
	"18821": [
		41.989756,
		-75.722751
	],
	"18822": [
		41.970399,
		-75.794149
	],
	"18823": [
		41.778326,
		-75.690124
	],
	"18824": [
		41.697366,
		-75.787183
	],
	"18825": [
		41.807883,
		-75.607728
	],
	"18826": [
		41.745746,
		-75.748893
	],
	"18828": [
		41.806724,
		-76.096165
	],
	"18829": [
		41.837644,
		-76.173693
	],
	"18830": [
		41.959087,
		-76.114452
	],
	"18831": [
		41.894223,
		-76.598118
	],
	"18832": [
		41.678278,
		-76.568742
	],
	"18833": [
		41.597169,
		-76.483621
	],
	"18834": [
		41.830967,
		-75.720934
	],
	"18837": [
		41.915054,
		-76.302838
	],
	"18840": [
		41.971552,
		-76.534965
	],
	"18842": [
		41.749704,
		-75.623443
	],
	"18843": [
		41.794457,
		-75.899586
	],
	"18844": [
		41.69097,
		-75.905239
	],
	"18845": [
		41.787369,
		-76.182163
	],
	"18846": [
		41.621411,
		-76.229986
	],
	"18847": [
		41.92882,
		-75.579031
	],
	"18848": [
		41.751057,
		-76.454741
	],
	"18850": [
		41.854257,
		-76.462384
	],
	"18851": [
		41.933902,
		-76.176463
	],
	"18853": [
		41.721414,
		-76.276925
	],
	"18854": [
		41.790684,
		-76.355747
	],
	"18901": [
		40.306267,
		-75.147144
	],
	"18902": [
		40.352134,
		-75.09568
	],
	"18912": [
		40.323952,
		-75.056407
	],
	"18913": [
		40.37939,
		-75.06001
	],
	"18914": [
		40.288978,
		-75.209591
	],
	"18915": [
		40.272101,
		-75.25683
	],
	"18917": [
		40.37692,
		-75.205948
	],
	"18920": [
		40.497718,
		-75.084034
	],
	"18923": [
		40.359341,
		-75.173921
	],
	"18925": [
		40.288811,
		-75.058039
	],
	"18929": [
		40.255513,
		-75.080152
	],
	"18930": [
		40.521074,
		-75.218673
	],
	"18932": [
		40.291585,
		-75.250486
	],
	"18935": [
		40.437016,
		-75.403473
	],
	"18936": [
		40.22405,
		-75.230959
	],
	"18938": [
		40.351048,
		-74.998049
	],
	"18940": [
		40.261315,
		-74.937775
	],
	"18942": [
		40.471159,
		-75.160467
	],
	"18944": [
		40.389293,
		-75.234442
	],
	"18947": [
		40.422899,
		-75.117839
	],
	"18950": [
		40.445233,
		-75.074441
	],
	"18951": [
		40.452964,
		-75.348855
	],
	"18954": [
		40.225413,
		-74.992957
	],
	"18955": [
		40.47664,
		-75.313694
	],
	"18960": [
		40.366237,
		-75.325845
	],
	"18962": [
		40.346684,
		-75.271138
	],
	"18964": [
		40.30347,
		-75.337889
	],
	"18966": [
		40.188468,
		-75.009898
	],
	"18969": [
		40.326304,
		-75.368422
	],
	"18970": [
		40.412007,
		-75.38117
	],
	"18972": [
		40.52732,
		-75.124666
	],
	"18974": [
		40.217062,
		-75.072803
	],
	"18976": [
		40.248821,
		-75.143522
	],
	"18977": [
		40.286862,
		-74.882113
	],
	"18980": [
		40.269965,
		-75.017182
	],
	"19001": [
		40.125912,
		-75.125442
	],
	"19002": [
		40.187195,
		-75.206891
	],
	"19003": [
		40.001553,
		-75.298929
	],
	"19004": [
		40.009753,
		-75.231508
	],
	"19006": [
		40.150436,
		-75.033899
	],
	"19007": [
		40.113179,
		-74.85765
	],
	"19008": [
		39.972604,
		-75.360258
	],
	"19009": [
		40.137805,
		-75.064242
	],
	"19010": [
		40.023624,
		-75.329727
	],
	"19012": [
		40.059768,
		-75.105885
	],
	"19013": [
		39.848281,
		-75.377981
	],
	"19014": [
		39.864907,
		-75.432958
	],
	"19015": [
		39.868633,
		-75.392945
	],
	"19017": [
		39.892372,
		-75.460137
	],
	"19018": [
		39.923075,
		-75.298595
	],
	"19020": [
		40.100591,
		-74.938934
	],
	"19021": [
		40.089651,
		-74.892183
	],
	"19022": [
		39.86144,
		-75.337023
	],
	"19023": [
		39.91714,
		-75.267387
	],
	"19025": [
		40.146444,
		-75.161987
	],
	"19026": [
		39.950318,
		-75.304042
	],
	"19027": [
		40.073118,
		-75.124431
	],
	"19029": [
		39.868372,
		-75.292374
	],
	"19030": [
		40.180468,
		-74.837263
	],
	"19031": [
		40.109155,
		-75.217005
	],
	"19032": [
		39.891296,
		-75.278777
	],
	"19033": [
		39.890883,
		-75.328434
	],
	"19034": [
		40.134266,
		-75.204847
	],
	"19035": [
		40.051349,
		-75.277642
	],
	"19036": [
		39.903578,
		-75.293355
	],
	"19038": [
		40.100418,
		-75.171761
	],
	"19040": [
		40.176879,
		-75.105595
	],
	"19041": [
		40.007406,
		-75.315837
	],
	"19043": [
		39.900283,
		-75.30885
	],
	"19044": [
		40.186067,
		-75.152867
	],
	"19046": [
		40.101403,
		-75.105519
	],
	"19047": [
		40.180089,
		-74.911873
	],
	"19050": [
		39.937537,
		-75.263665
	],
	"19053": [
		40.153918,
		-74.974991
	],
	"19054": [
		40.173024,
		-74.818822
	],
	"19055": [
		40.150307,
		-74.839218
	],
	"19056": [
		40.149339,
		-74.885815
	],
	"19057": [
		40.140815,
		-74.85404
	],
	"19060": [
		39.849993,
		-75.493694
	],
	"19061": [
		39.82883,
		-75.435069
	],
	"19063": [
		39.92046,
		-75.416182
	],
	"19064": [
		39.933156,
		-75.340813
	],
	"19066": [
		40.002582,
		-75.249064
	],
	"19067": [
		40.205877,
		-74.817827
	],
	"19070": [
		39.906248,
		-75.324733
	],
	"19072": [
		40.023891,
		-75.257741
	],
	"19073": [
		39.983259,
		-75.429241
	],
	"19074": [
		39.88599,
		-75.295756
	],
	"19075": [
		40.11388,
		-75.185031
	],
	"19076": [
		39.886097,
		-75.30737
	],
	"19078": [
		39.874378,
		-75.322125
	],
	"19079": [
		39.898781,
		-75.26707
	],
	"19081": [
		39.898048,
		-75.347159
	],
	"19082": [
		39.960411,
		-75.270393
	],
	"19083": [
		39.977025,
		-75.312066
	],
	"19085": [
		40.036973,
		-75.349913
	],
	"19086": [
		39.890631,
		-75.370032
	],
	"19087": [
		40.061872,
		-75.402461
	],
	"19090": [
		40.157452,
		-75.124753
	],
	"19094": [
		39.874881,
		-75.346642
	],
	"19095": [
		40.085987,
		-75.151241
	],
	"19096": [
		39.997882,
		-75.274178
	],
	"19102": [
		39.952783,
		-75.165586
	],
	"19103": [
		39.952896,
		-75.174298
	],
	"19104": [
		39.958518,
		-75.198856
	],
	"19106": [
		39.948629,
		-75.142789
	],
	"19107": [
		39.951737,
		-75.158653
	],
	"19109": [
		39.949652,
		-75.163654
	],
	"19111": [
		40.060612,
		-75.080176
	],
	"19112": [
		39.889857,
		-75.16939
	],
	"19113": [
		39.867425,
		-75.253309
	],
	"19114": [
		40.069399,
		-75.000162
	],
	"19115": [
		40.090698,
		-75.042868
	],
	"19116": [
		40.115569,
		-75.013276
	],
	"19118": [
		40.073872,
		-75.211217
	],
	"19119": [
		40.053348,
		-75.191112
	],
	"19120": [
		40.034147,
		-75.119198
	],
	"19121": [
		39.98198,
		-75.17912
	],
	"19122": [
		39.977746,
		-75.1459
	],
	"19123": [
		39.964489,
		-75.145802
	],
	"19124": [
		40.017119,
		-75.092814
	],
	"19125": [
		39.976249,
		-75.125105
	],
	"19126": [
		40.055389,
		-75.137562
	],
	"19127": [
		40.028146,
		-75.227549
	],
	"19128": [
		40.048483,
		-75.227934
	],
	"19129": [
		40.013014,
		-75.185402
	],
	"19130": [
		39.967935,
		-75.176073
	],
	"19131": [
		39.990184,
		-75.217795
	],
	"19132": [
		39.996262,
		-75.170855
	],
	"19133": [
		39.993092,
		-75.141671
	],
	"19134": [
		39.989604,
		-75.109091
	],
	"19135": [
		40.02211,
		-75.048534
	],
	"19136": [
		40.039406,
		-75.018555
	],
	"19137": [
		39.993,
		-75.072052
	],
	"19138": [
		40.056002,
		-75.159049
	],
	"19139": [
		39.961352,
		-75.229334
	],
	"19140": [
		40.012177,
		-75.145495
	],
	"19141": [
		40.037574,
		-75.145695
	],
	"19142": [
		39.921752,
		-75.233279
	],
	"19143": [
		39.942579,
		-75.225905
	],
	"19144": [
		40.033858,
		-75.174075
	],
	"19145": [
		39.909582,
		-75.198405
	],
	"19146": [
		39.939496,
		-75.184146
	],
	"19147": [
		39.935327,
		-75.152489
	],
	"19148": [
		39.911612,
		-75.151475
	],
	"19149": [
		40.037722,
		-75.065762
	],
	"19150": [
		40.072496,
		-75.171824
	],
	"19151": [
		39.97957,
		-75.257036
	],
	"19152": [
		40.060946,
		-75.046985
	],
	"19153": [
		39.893446,
		-75.229648
	],
	"19154": [
		40.096483,
		-74.983217
	],
	"19301": [
		40.040279,
		-75.480341
	],
	"19310": [
		39.93509,
		-75.972822
	],
	"19311": [
		39.821095,
		-75.771347
	],
	"19312": [
		40.031291,
		-75.454948
	],
	"19316": [
		40.054082,
		-75.833825
	],
	"19317": [
		39.8608,
		-75.599381
	],
	"19319": [
		39.924558,
		-75.520943
	],
	"19320": [
		39.962991,
		-75.832026
	],
	"19330": [
		39.868292,
		-75.913785
	],
	"19333": [
		40.041872,
		-75.423597
	],
	"19335": [
		40.022618,
		-75.721218
	],
	"19341": [
		40.039941,
		-75.640626
	],
	"19342": [
		39.904122,
		-75.499422
	],
	"19343": [
		40.100772,
		-75.754945
	],
	"19344": [
		40.083577,
		-75.881364
	],
	"19345": [
		40.029473,
		-75.565288
	],
	"19348": [
		39.87028,
		-75.712913
	],
	"19350": [
		39.760276,
		-75.796353
	],
	"19352": [
		39.775919,
		-75.889657
	],
	"19355": [
		40.046452,
		-75.532998
	],
	"19358": [
		39.963913,
		-75.805064
	],
	"19362": [
		39.750743,
		-76.070383
	],
	"19363": [
		39.79056,
		-75.968479
	],
	"19365": [
		39.966371,
		-75.925129
	],
	"19367": [
		39.962992,
		-75.884023
	],
	"19372": [
		39.998397,
		-75.758457
	],
	"19373": [
		39.901103,
		-75.533499
	],
	"19374": [
		39.824747,
		-75.759748
	],
	"19375": [
		39.900459,
		-75.740472
	],
	"19380": [
		39.987186,
		-75.603156
	],
	"19382": [
		39.927665,
		-75.613166
	],
	"19383": [
		39.951594,
		-75.601627
	],
	"19390": [
		39.836097,
		-75.842359
	],
	"19401": [
		40.13018,
		-75.331629
	],
	"19403": [
		40.148673,
		-75.375506
	],
	"19405": [
		40.103552,
		-75.341022
	],
	"19406": [
		40.093268,
		-75.383637
	],
	"19422": [
		40.15681,
		-75.279393
	],
	"19425": [
		40.101778,
		-75.651066
	],
	"19426": [
		40.191299,
		-75.437052
	],
	"19428": [
		40.080337,
		-75.300461
	],
	"19435": [
		40.327484,
		-75.569174
	],
	"19436": [
		40.20151,
		-75.247003
	],
	"19437": [
		40.182431,
		-75.258603
	],
	"19438": [
		40.268899,
		-75.390732
	],
	"19440": [
		40.285998,
		-75.291149
	],
	"19442": [
		40.129517,
		-75.583145
	],
	"19444": [
		40.087754,
		-75.253166
	],
	"19446": [
		40.232327,
		-75.303915
	],
	"19453": [
		40.140568,
		-75.497917
	],
	"19454": [
		40.226113,
		-75.243786
	],
	"19456": [
		40.133903,
		-75.461771
	],
	"19457": [
		40.206378,
		-75.590117
	],
	"19460": [
		40.126827,
		-75.530448
	],
	"19462": [
		40.115345,
		-75.28199
	],
	"19464": [
		40.258928,
		-75.615861
	],
	"19465": [
		40.19039,
		-75.684564
	],
	"19468": [
		40.207638,
		-75.532067
	],
	"19472": [
		40.336934,
		-75.573783
	],
	"19473": [
		40.256195,
		-75.48238
	],
	"19474": [
		40.223528,
		-75.404036
	],
	"19475": [
		40.172275,
		-75.600158
	],
	"19477": [
		40.183315,
		-75.231457
	],
	"19492": [
		40.28546,
		-75.491912
	],
	"19501": [
		40.244477,
		-76.064701
	],
	"19503": [
		40.406546,
		-75.571951
	],
	"19504": [
		40.416217,
		-75.588554
	],
	"19505": [
		40.379101,
		-75.62241
	],
	"19506": [
		40.454218,
		-76.12869
	],
	"19507": [
		40.50519,
		-76.270316
	],
	"19508": [
		40.2666,
		-75.838436
	],
	"19510": [
		40.445835,
		-75.874871
	],
	"19511": [
		40.485917,
		-75.74323
	],
	"19512": [
		40.348327,
		-75.680555
	],
	"19518": [
		40.2702,
		-75.752529
	],
	"19519": [
		40.320724,
		-75.734815
	],
	"19520": [
		40.16351,
		-75.793465
	],
	"19522": [
		40.447368,
		-75.820496
	],
	"19523": [
		40.200862,
		-75.850775
	],
	"19525": [
		40.305649,
		-75.585013
	],
	"19526": [
		40.547094,
		-75.996639
	],
	"19529": [
		40.631309,
		-75.864614
	],
	"19530": [
		40.539073,
		-75.781444
	],
	"19533": [
		40.425173,
		-75.992673
	],
	"19534": [
		40.573419,
		-75.874819
	],
	"19535": [
		40.34,
		-75.804034
	],
	"19536": [
		40.480578,
		-75.758948
	],
	"19538": [
		40.547528,
		-75.702562
	],
	"19539": [
		40.496319,
		-75.683546
	],
	"19540": [
		40.236277,
		-75.96661
	],
	"19541": [
		40.485961,
		-76.030235
	],
	"19542": [
		40.261199,
		-75.767191
	],
	"19543": [
		40.17554,
		-75.894751
	],
	"19544": [
		40.417447,
		-76.296237
	],
	"19545": [
		40.341524,
		-75.624067
	],
	"19547": [
		40.380048,
		-75.768603
	],
	"19549": [
		40.584518,
		-76.020034
	],
	"19550": [
		40.454939,
		-76.249432
	],
	"19551": [
		40.361788,
		-76.13732
	],
	"19554": [
		40.512877,
		-76.103735
	],
	"19555": [
		40.494381,
		-75.953921
	],
	"19559": [
		40.495223,
		-76.182401
	],
	"19560": [
		40.406182,
		-75.893801
	],
	"19562": [
		40.505379,
		-75.702653
	],
	"19564": [
		40.518731,
		-75.87831
	],
	"19565": [
		40.342505,
		-76.08824
	],
	"19567": [
		40.388389,
		-76.209785
	],
	"19601": [
		40.355405,
		-75.939977
	],
	"19602": [
		40.32874,
		-75.914976
	],
	"19604": [
		40.356825,
		-75.910242
	],
	"19605": [
		40.397908,
		-75.943191
	],
	"19606": [
		40.338694,
		-75.857308
	],
	"19607": [
		40.291483,
		-75.944791
	],
	"19608": [
		40.310798,
		-76.034772
	],
	"19609": [
		40.328313,
		-75.997285
	],
	"19610": [
		40.341535,
		-75.974921
	],
	"19611": [
		40.324674,
		-75.942857
	],
	"19701": [
		39.583171,
		-75.700899
	],
	"19702": [
		39.6182,
		-75.729724
	],
	"19703": [
		39.801513,
		-75.453853
	],
	"19706": [
		39.573245,
		-75.596191
	],
	"19707": [
		39.785594,
		-75.68364
	],
	"19709": [
		39.494582,
		-75.675004
	],
	"19710": [
		39.795167,
		-75.588092
	],
	"19711": [
		39.713598,
		-75.741073
	],
	"19713": [
		39.670784,
		-75.712296
	],
	"19716": [
		39.68956,
		-75.758391
	],
	"19717": [
		39.678464,
		-75.752273
	],
	"19720": [
		39.646922,
		-75.604852
	],
	"19730": [
		39.463828,
		-75.646933
	],
	"19731": [
		39.523585,
		-75.587574
	],
	"19732": [
		39.783897,
		-75.570042
	],
	"19733": [
		39.555826,
		-75.651088
	],
	"19734": [
		39.381644,
		-75.653322
	],
	"19735": [
		39.803172,
		-75.599718
	],
	"19736": [
		39.802479,
		-75.675916
	],
	"19801": [
		39.727715,
		-75.541154
	],
	"19802": [
		39.756608,
		-75.529079
	],
	"19803": [
		39.800665,
		-75.542415
	],
	"19804": [
		39.716862,
		-75.617677
	],
	"19805": [
		39.743799,
		-75.593842
	],
	"19806": [
		39.763305,
		-75.564142
	],
	"19807": [
		39.7965,
		-75.61284
	],
	"19808": [
		39.737615,
		-75.667057
	],
	"19809": [
		39.757786,
		-75.500953
	],
	"19810": [
		39.81878,
		-75.5064
	],
	"19901": [
		39.181546,
		-75.473517
	],
	"19902": [
		39.125248,
		-75.481818
	],
	"19904": [
		39.171273,
		-75.587663
	],
	"19930": [
		38.547335,
		-75.064161
	],
	"19931": [
		38.573968,
		-75.623043
	],
	"19933": [
		38.72866,
		-75.619669
	],
	"19934": [
		39.084727,
		-75.627355
	],
	"19936": [
		39.219138,
		-75.584133
	],
	"19938": [
		39.260878,
		-75.707605
	],
	"19939": [
		38.566739,
		-75.210612
	],
	"19940": [
		38.477562,
		-75.564931
	],
	"19941": [
		38.793658,
		-75.426062
	],
	"19943": [
		39.004436,
		-75.606986
	],
	"19944": [
		38.478535,
		-75.058146
	],
	"19945": [
		38.505064,
		-75.228872
	],
	"19946": [
		39.034802,
		-75.449585
	],
	"19947": [
		38.66649,
		-75.398202
	],
	"19950": [
		38.818451,
		-75.596743
	],
	"19951": [
		38.685257,
		-75.255154
	],
	"19952": [
		38.921424,
		-75.628425
	],
	"19953": [
		39.152487,
		-75.694133
	],
	"19954": [
		38.89701,
		-75.520457
	],
	"19955": [
		39.225855,
		-75.668556
	],
	"19956": [
		38.547715,
		-75.538158
	],
	"19958": [
		38.728722,
		-75.168469
	],
	"19960": [
		38.850913,
		-75.408716
	],
	"19962": [
		39.068862,
		-75.488123
	],
	"19963": [
		38.943253,
		-75.362567
	],
	"19964": [
		39.089325,
		-75.7205
	],
	"19966": [
		38.579422,
		-75.277196
	],
	"19967": [
		38.538675,
		-75.12245
	],
	"19968": [
		38.773914,
		-75.286878
	],
	"19970": [
		38.556507,
		-75.100246
	],
	"19971": [
		38.686005,
		-75.086681
	],
	"19973": [
		38.638912,
		-75.615903
	],
	"19975": [
		38.468315,
		-75.166975
	],
	"19977": [
		39.298946,
		-75.546122
	],
	"19979": [
		39.048818,
		-75.572566
	],
	"20001": [
		38.910353,
		-77.017739
	],
	"20002": [
		38.905026,
		-76.983607
	],
	"20003": [
		38.88184,
		-76.99094
	],
	"20004": [
		38.894885,
		-77.028638
	],
	"20005": [
		38.904674,
		-77.031578
	],
	"20006": [
		38.898609,
		-77.041461
	],
	"20007": [
		38.914363,
		-77.079339
	],
	"20008": [
		38.936238,
		-77.059981
	],
	"20009": [
		38.919144,
		-77.037381
	],
	"20010": [
		38.933366,
		-77.030312
	],
	"20011": [
		38.952514,
		-77.022991
	],
	"20012": [
		38.976873,
		-77.032609
	],
	"20015": [
		38.966889,
		-77.058323
	],
	"20016": [
		38.93693,
		-77.090014
	],
	"20017": [
		38.938188,
		-76.992126
	],
	"20018": [
		38.926576,
		-76.974446
	],
	"20019": [
		38.891412,
		-76.943575
	],
	"20020": [
		38.860413,
		-76.978933
	],
	"20024": [
		38.876122,
		-77.025374
	],
	"20032": [
		38.833719,
		-77.006591
	],
	"20036": [
		38.907017,
		-77.041569
	],
	"20037": [
		38.898889,
		-77.055456
	],
	"20045": [
		38.896731,
		-77.030798
	],
	"20052": [
		38.900126,
		-77.046981
	],
	"20053": [
		38.884122,
		-77.011224
	],
	"20057": [
		38.90912,
		-77.075735
	],
	"20064": [
		38.936354,
		-76.999167
	],
	"20105": [
		38.953188,
		-77.602719
	],
	"20106": [
		38.699354,
		-78.002203
	],
	"20109": [
		38.793641,
		-77.531024
	],
	"20110": [
		38.747172,
		-77.484536
	],
	"20111": [
		38.748968,
		-77.427873
	],
	"20112": [
		38.664571,
		-77.429326
	],
	"20115": [
		38.809947,
		-77.911841
	],
	"20117": [
		38.998822,
		-77.733937
	],
	"20118": [
		38.968339,
		-77.737005
	],
	"20119": [
		38.610391,
		-77.621615
	],
	"20120": [
		38.856401,
		-77.476371
	],
	"20121": [
		38.811067,
		-77.463306
	],
	"20124": [
		38.781332,
		-77.391333
	],
	"20129": [
		39.172018,
		-77.601254
	],
	"20130": [
		39.039434,
		-77.943893
	],
	"20132": [
		39.16721,
		-77.72057
	],
	"20135": [
		39.086486,
		-77.887228
	],
	"20136": [
		38.739468,
		-77.555635
	],
	"20137": [
		38.806579,
		-77.722437
	],
	"20139": [
		38.655682,
		-77.694159
	],
	"20141": [
		39.11239,
		-77.790704
	],
	"20143": [
		38.858949,
		-77.564996
	],
	"20144": [
		38.923018,
		-77.946976
	],
	"20147": [
		39.041947,
		-77.47813
	],
	"20148": [
		38.995993,
		-77.520774
	],
	"20151": [
		38.89568,
		-77.446483
	],
	"20152": [
		38.91916,
		-77.502417
	],
	"20155": [
		38.810114,
		-77.617789
	],
	"20158": [
		39.139588,
		-77.658155
	],
	"20164": [
		39.013299,
		-77.395067
	],
	"20165": [
		39.05754,
		-77.392013
	],
	"20166": [
		38.986137,
		-77.455694
	],
	"20169": [
		38.877064,
		-77.647606
	],
	"20170": [
		38.979842,
		-77.37975
	],
	"20171": [
		38.923848,
		-77.396501
	],
	"20175": [
		39.064414,
		-77.603967
	],
	"20176": [
		39.184709,
		-77.544113
	],
	"20180": [
		39.268562,
		-77.637664
	],
	"20181": [
		38.689126,
		-77.56961
	],
	"20184": [
		39.000671,
		-77.883754
	],
	"20186": [
		38.698141,
		-77.851425
	],
	"20187": [
		38.721847,
		-77.748187
	],
	"20190": [
		38.959322,
		-77.339298
	],
	"20191": [
		38.934645,
		-77.351702
	],
	"20194": [
		38.981041,
		-77.340785
	],
	"20197": [
		39.19521,
		-77.62801
	],
	"20198": [
		38.884182,
		-77.744644
	],
	"20202": [
		38.887071,
		-77.02101
	],
	"20204": [
		38.885559,
		-77.014429
	],
	"20228": [
		38.886412,
		-77.030282
	],
	"20230": [
		38.893794,
		-77.032798
	],
	"20240": [
		38.894456,
		-77.042605
	],
	"20245": [
		38.89334,
		-77.04446
	],
	"20260": [
		38.883669,
		-77.025035
	],
	"20307": [
		38.975685,
		-77.030133
	],
	"20317": [
		38.934841,
		-77.014387
	],
	"20319": [
		38.864838,
		-77.017003
	],
	"20373": [
		38.858625,
		-77.007865
	],
	"20390": [
		38.879019,
		-76.993695
	],
	"20405": [
		38.896377,
		-77.042588
	],
	"20418": [
		38.8928,
		-77.047764
	],
	"20427": [
		38.902057,
		-77.047558
	],
	"20506": [
		38.897071,
		-77.038728
	],
	"20510": [
		38.89278,
		-77.00689
	],
	"20520": [
		38.894759,
		-77.048407
	],
	"20535": [
		38.894467,
		-77.024844
	],
	"20540": [
		38.887929,
		-77.004713
	],
	"20551": [
		38.892802,
		-77.0458
	],
	"20553": [
		38.886946,
		-77.022968
	],
	"20560": [
		38.888233,
		-77.025919
	],
	"20565": [
		38.89063,
		-77.019211
	],
	"20566": [
		38.89557,
		-77.055127
	],
	"20593": [
		38.866713,
		-77.010187
	],
	"20601": [
		38.613372,
		-76.851612
	],
	"20602": [
		38.583248,
		-76.894703
	],
	"20603": [
		38.63039,
		-76.976583
	],
	"20606": [
		38.263046,
		-76.737309
	],
	"20607": [
		38.672666,
		-77.018549
	],
	"20608": [
		38.582405,
		-76.700998
	],
	"20609": [
		38.270012,
		-76.767747
	],
	"20611": [
		38.457813,
		-76.975118
	],
	"20612": [
		38.50506,
		-76.67721
	],
	"20613": [
		38.671168,
		-76.805304
	],
	"20615": [
		38.411433,
		-76.548803
	],
	"20616": [
		38.661948,
		-77.098458
	],
	"20617": [
		38.54386,
		-76.852511
	],
	"20618": [
		38.286438,
		-76.783071
	],
	"20619": [
		38.292385,
		-76.527783
	],
	"20620": [
		38.233918,
		-76.528932
	],
	"20621": [
		38.32615,
		-76.801054
	],
	"20622": [
		38.417472,
		-76.878176
	],
	"20623": [
		38.741615,
		-76.842456
	],
	"20624": [
		38.33808,
		-76.733499
	],
	"20625": [
		38.262475,
		-76.847422
	],
	"20626": [
		38.23124,
		-76.77114
	],
	"20628": [
		38.153,
		-76.339859
	],
	"20629": [
		38.336555,
		-76.45039
	],
	"20630": [
		38.164277,
		-76.475774
	],
	"20632": [
		38.432799,
		-76.957993
	],
	"20634": [
		38.269412,
		-76.506885
	],
	"20636": [
		38.352141,
		-76.567187
	],
	"20637": [
		38.525117,
		-76.755955
	],
	"20639": [
		38.601238,
		-76.605467
	],
	"20640": [
		38.527006,
		-77.202568
	],
	"20645": [
		38.294223,
		-76.911085
	],
	"20646": [
		38.524275,
		-77.00066
	],
	"20650": [
		38.268654,
		-76.633157
	],
	"20653": [
		38.23631,
		-76.432886
	],
	"20657": [
		38.379757,
		-76.442883
	],
	"20658": [
		38.560527,
		-77.160594
	],
	"20659": [
		38.418667,
		-76.732423
	],
	"20660": [
		38.370219,
		-76.706627
	],
	"20662": [
		38.428507,
		-77.205325
	],
	"20664": [
		38.354485,
		-76.925395
	],
	"20667": [
		38.215237,
		-76.447756
	],
	"20670": [
		38.285279,
		-76.415708
	],
	"20674": [
		38.134797,
		-76.503548
	],
	"20675": [
		38.580932,
		-77.022463
	],
	"20676": [
		38.493221,
		-76.54128
	],
	"20677": [
		38.495254,
		-77.036717
	],
	"20678": [
		38.52282,
		-76.60135
	],
	"20680": [
		38.10913,
		-76.385886
	],
	"20684": [
		38.136143,
		-76.410164
	],
	"20685": [
		38.434389,
		-76.528672
	],
	"20686": [
		38.178004,
		-76.429574
	],
	"20687": [
		38.063698,
		-76.339689
	],
	"20688": [
		38.327236,
		-76.464295
	],
	"20689": [
		38.662952,
		-76.57939
	],
	"20690": [
		38.158147,
		-76.534882
	],
	"20692": [
		38.174519,
		-76.496938
	],
	"20693": [
		38.457068,
		-77.089581
	],
	"20695": [
		38.591492,
		-76.970784
	],
	"20701": [
		39.125563,
		-76.785436
	],
	"20705": [
		39.049423,
		-76.900362
	],
	"20706": [
		38.96588,
		-76.851092
	],
	"20707": [
		39.099167,
		-76.879735
	],
	"20708": [
		39.048173,
		-76.824036
	],
	"20710": [
		38.942368,
		-76.92591
	],
	"20711": [
		38.801059,
		-76.645107
	],
	"20712": [
		38.942361,
		-76.964578
	],
	"20714": [
		38.724359,
		-76.557178
	],
	"20715": [
		38.989393,
		-76.741331
	],
	"20716": [
		38.926428,
		-76.715028
	],
	"20720": [
		38.982765,
		-76.78584
	],
	"20721": [
		38.915222,
		-76.785129
	],
	"20722": [
		38.934557,
		-76.950596
	],
	"20723": [
		39.137569,
		-76.867942
	],
	"20724": [
		39.101077,
		-76.804003
	],
	"20732": [
		38.65514,
		-76.542571
	],
	"20733": [
		38.805653,
		-76.532229
	],
	"20735": [
		38.750917,
		-76.902669
	],
	"20736": [
		38.689075,
		-76.627765
	],
	"20737": [
		38.964265,
		-76.913538
	],
	"20740": [
		39.002745,
		-76.931721
	],
	"20742": [
		38.989619,
		-76.945695
	],
	"20743": [
		38.88423,
		-76.893317
	],
	"20744": [
		38.758348,
		-76.983786
	],
	"20745": [
		38.806888,
		-76.99519
	],
	"20746": [
		38.836403,
		-76.918265
	],
	"20747": [
		38.854991,
		-76.883313
	],
	"20748": [
		38.814868,
		-76.933447
	],
	"20751": [
		38.794437,
		-76.561199
	],
	"20754": [
		38.730581,
		-76.647154
	],
	"20755": [
		39.107783,
		-76.747196
	],
	"20758": [
		38.733371,
		-76.593148
	],
	"20759": [
		39.153977,
		-76.931172
	],
	"20762": [
		38.809803,
		-76.869158
	],
	"20763": [
		39.13526,
		-76.820437
	],
	"20764": [
		38.824089,
		-76.506298
	],
	"20765": [
		38.841934,
		-76.544044
	],
	"20769": [
		38.996698,
		-76.818647
	],
	"20770": [
		39.002985,
		-76.879165
	],
	"20772": [
		38.780274,
		-76.76699
	],
	"20774": [
		38.874532,
		-76.774182
	],
	"20776": [
		38.872325,
		-76.572429
	],
	"20777": [
		39.174938,
		-76.969085
	],
	"20778": [
		38.828682,
		-76.572609
	],
	"20779": [
		38.7636,
		-76.573388
	],
	"20781": [
		38.95286,
		-76.94629
	],
	"20782": [
		38.965751,
		-76.966463
	],
	"20783": [
		38.997067,
		-76.966783
	],
	"20784": [
		38.950549,
		-76.89172
	],
	"20785": [
		38.918291,
		-76.881948
	],
	"20794": [
		39.151475,
		-76.794703
	],
	"20812": [
		38.967041,
		-77.143881
	],
	"20814": [
		39.004839,
		-77.103004
	],
	"20815": [
		38.983386,
		-77.079337
	],
	"20816": [
		38.95695,
		-77.120006
	],
	"20817": [
		38.997279,
		-77.151816
	],
	"20818": [
		38.973486,
		-77.162389
	],
	"20832": [
		39.150349,
		-77.078251
	],
	"20833": [
		39.207175,
		-77.05467
	],
	"20837": [
		39.116506,
		-77.407115
	],
	"20838": [
		39.217805,
		-77.390729
	],
	"20839": [
		39.188306,
		-77.434971
	],
	"20841": [
		39.191853,
		-77.327521
	],
	"20842": [
		39.199879,
		-77.415266
	],
	"20850": [
		39.091354,
		-77.18228
	],
	"20851": [
		39.079056,
		-77.121818
	],
	"20852": [
		39.051995,
		-77.121926
	],
	"20853": [
		39.101747,
		-77.094602
	],
	"20854": [
		39.032772,
		-77.22083
	],
	"20855": [
		39.133184,
		-77.134383
	],
	"20860": [
		39.142374,
		-77.025417
	],
	"20861": [
		39.149774,
		-76.998236
	],
	"20862": [
		39.180816,
		-77.017461
	],
	"20866": [
		39.10928,
		-76.933948
	],
	"20868": [
		39.126503,
		-76.963796
	],
	"20871": [
		39.261341,
		-77.282547
	],
	"20872": [
		39.294465,
		-77.216125
	],
	"20874": [
		39.133056,
		-77.301828
	],
	"20876": [
		39.208384,
		-77.237182
	],
	"20877": [
		39.140749,
		-77.19206
	],
	"20878": [
		39.112899,
		-77.250526
	],
	"20879": [
		39.168416,
		-77.171506
	],
	"20880": [
		39.139726,
		-77.173557
	],
	"20882": [
		39.239633,
		-77.161043
	],
	"20886": [
		39.188512,
		-77.205143
	],
	"20895": [
		39.027048,
		-77.07759
	],
	"20896": [
		39.035381,
		-77.092458
	],
	"20899": [
		39.143712,
		-77.216135
	],
	"20901": [
		39.021495,
		-77.009779
	],
	"20902": [
		39.045249,
		-77.039264
	],
	"20903": [
		39.021433,
		-76.980774
	],
	"20904": [
		39.066616,
		-76.980935
	],
	"20905": [
		39.109705,
		-76.988329
	],
	"20906": [
		39.087321,
		-77.057159
	],
	"20910": [
		39.00286,
		-77.036646
	],
	"20912": [
		38.981602,
		-77.001156
	],
	"21001": [
		39.504413,
		-76.201072
	],
	"21005": [
		39.488112,
		-76.14452
	],
	"21009": [
		39.466882,
		-76.29523
	],
	"21010": [
		39.390932,
		-76.292629
	],
	"21012": [
		39.046531,
		-76.495549
	],
	"21013": [
		39.511495,
		-76.490799
	],
	"21014": [
		39.536084,
		-76.352184
	],
	"21015": [
		39.544176,
		-76.292469
	],
	"21017": [
		39.474767,
		-76.23442
	],
	"21028": [
		39.565965,
		-76.249527
	],
	"21029": [
		39.21356,
		-76.959392
	],
	"21030": [
		39.492412,
		-76.674443
	],
	"21031": [
		39.487208,
		-76.65801
	],
	"21032": [
		39.028343,
		-76.604145
	],
	"21034": [
		39.640713,
		-76.223031
	],
	"21035": [
		38.9383,
		-76.626588
	],
	"21036": [
		39.234644,
		-77.006739
	],
	"21037": [
		38.919253,
		-76.543492
	],
	"21040": [
		39.436496,
		-76.289965
	],
	"21042": [
		39.277181,
		-76.894602
	],
	"21043": [
		39.255836,
		-76.801491
	],
	"21044": [
		39.205869,
		-76.87911
	],
	"21045": [
		39.206042,
		-76.828234
	],
	"21046": [
		39.173116,
		-76.842028
	],
	"21047": [
		39.521384,
		-76.438786
	],
	"21048": [
		39.488125,
		-76.915075
	],
	"21050": [
		39.585343,
		-76.392164
	],
	"21051": [
		39.472691,
		-76.455841
	],
	"21052": [
		39.205576,
		-76.447067
	],
	"21053": [
		39.696782,
		-76.714679
	],
	"21054": [
		39.040193,
		-76.685769
	],
	"21056": [
		39.072941,
		-76.428558
	],
	"21057": [
		39.448749,
		-76.512474
	],
	"21060": [
		39.166538,
		-76.582956
	],
	"21061": [
		39.161942,
		-76.629444
	],
	"21071": [
		39.481657,
		-76.810955
	],
	"21074": [
		39.621612,
		-76.839847
	],
	"21075": [
		39.204096,
		-76.74936
	],
	"21076": [
		39.168516,
		-76.716351
	],
	"21077": [
		39.156136,
		-76.69769
	],
	"21078": [
		39.559229,
		-76.141248
	],
	"21082": [
		39.478136,
		-76.473523
	],
	"21084": [
		39.613561,
		-76.466441
	],
	"21085": [
		39.44588,
		-76.357015
	],
	"21087": [
		39.449314,
		-76.41324
	],
	"21090": [
		39.20848,
		-76.672535
	],
	"21093": [
		39.43914,
		-76.64095
	],
	"21102": [
		39.682834,
		-76.850538
	],
	"21104": [
		39.346904,
		-76.912757
	],
	"21105": [
		39.713946,
		-76.651281
	],
	"21108": [
		39.090307,
		-76.621263
	],
	"21111": [
		39.575537,
		-76.589692
	],
	"21113": [
		39.053565,
		-76.716578
	],
	"21114": [
		39.009641,
		-76.68422
	],
	"21117": [
		39.427563,
		-76.777976
	],
	"21120": [
		39.646204,
		-76.674854
	],
	"21122": [
		39.120838,
		-76.494827
	],
	"21128": [
		39.409428,
		-76.44746
	],
	"21130": [
		39.47732,
		-76.194181
	],
	"21131": [
		39.503655,
		-76.58987
	],
	"21132": [
		39.694699,
		-76.440405
	],
	"21133": [
		39.373505,
		-76.815284
	],
	"21136": [
		39.483784,
		-76.794208
	],
	"21140": [
		38.949202,
		-76.582524
	],
	"21144": [
		39.120915,
		-76.677313
	],
	"21146": [
		39.079136,
		-76.558699
	],
	"21152": [
		39.541052,
		-76.679892
	],
	"21153": [
		39.418384,
		-76.700919
	],
	"21154": [
		39.657449,
		-76.360475
	],
	"21155": [
		39.573619,
		-76.806079
	],
	"21156": [
		39.437208,
		-76.396486
	],
	"21157": [
		39.548569,
		-76.983558
	],
	"21158": [
		39.653737,
		-77.035092
	],
	"21160": [
		39.700248,
		-76.306544
	],
	"21161": [
		39.659903,
		-76.56506
	],
	"21162": [
		39.390116,
		-76.405582
	],
	"21163": [
		39.337527,
		-76.848247
	],
	"21201": [
		39.294821,
		-76.622227
	],
	"21202": [
		39.296526,
		-76.607016
	],
	"21204": [
		39.402268,
		-76.632295
	],
	"21205": [
		39.30229,
		-76.564482
	],
	"21206": [
		39.338428,
		-76.538877
	],
	"21207": [
		39.324167,
		-76.719484
	],
	"21208": [
		39.381174,
		-76.721002
	],
	"21209": [
		39.373191,
		-76.670003
	],
	"21210": [
		39.359156,
		-76.632685
	],
	"21211": [
		39.329817,
		-76.639408
	],
	"21212": [
		39.368561,
		-76.614898
	],
	"21213": [
		39.315031,
		-76.577429
	],
	"21214": [
		39.351793,
		-76.5644
	],
	"21215": [
		39.345241,
		-76.683566
	],
	"21216": [
		39.310595,
		-76.671717
	],
	"21217": [
		39.308473,
		-76.639154
	],
	"21218": [
		39.330107,
		-76.601451
	],
	"21219": [
		39.227459,
		-76.443305
	],
	"21220": [
		39.34728,
		-76.39008
	],
	"21221": [
		39.289205,
		-76.43477
	],
	"21222": [
		39.26484,
		-76.492566
	],
	"21223": [
		39.28283,
		-76.654
	],
	"21224": [
		39.27486,
		-76.542833
	],
	"21225": [
		39.226117,
		-76.615735
	],
	"21226": [
		39.208888,
		-76.562926
	],
	"21227": [
		39.23997,
		-76.67945
	],
	"21228": [
		39.272857,
		-76.747741
	],
	"21229": [
		39.284239,
		-76.691403
	],
	"21230": [
		39.266127,
		-76.623807
	],
	"21231": [
		39.2872,
		-76.591953
	],
	"21234": [
		39.393417,
		-76.534228
	],
	"21236": [
		39.388421,
		-76.48355
	],
	"21237": [
		39.341939,
		-76.495443
	],
	"21239": [
		39.367099,
		-76.589171
	],
	"21240": [
		39.174291,
		-76.671566
	],
	"21244": [
		39.334931,
		-76.776589
	],
	"21250": [
		39.255611,
		-76.711179
	],
	"21251": [
		39.344707,
		-76.581242
	],
	"21252": [
		39.393786,
		-76.607803
	],
	"21286": [
		39.411836,
		-76.573235
	],
	"21401": [
		38.987754,
		-76.552797
	],
	"21402": [
		38.986683,
		-76.472905
	],
	"21403": [
		38.942123,
		-76.489628
	],
	"21405": [
		39.02751,
		-76.556716
	],
	"21409": [
		39.018435,
		-76.442533
	],
	"21502": [
		39.643695,
		-78.755141
	],
	"21520": [
		39.624739,
		-79.301482
	],
	"21521": [
		39.551371,
		-79.041477
	],
	"21522": [
		39.610243,
		-79.227753
	],
	"21523": [
		39.481331,
		-79.07851
	],
	"21524": [
		39.707625,
		-78.801406
	],
	"21529": [
		39.703942,
		-78.767171
	],
	"21530": [
		39.67964,
		-78.546122
	],
	"21531": [
		39.643087,
		-79.428015
	],
	"21532": [
		39.649077,
		-78.984732
	],
	"21536": [
		39.65696,
		-79.165566
	],
	"21538": [
		39.409932,
		-79.22429
	],
	"21539": [
		39.560372,
		-78.949676
	],
	"21540": [
		39.478153,
		-79.062454
	],
	"21541": [
		39.54147,
		-79.380323
	],
	"21542": [
		39.596095,
		-78.949987
	],
	"21543": [
		39.655269,
		-78.959991
	],
	"21545": [
		39.704066,
		-78.854521
	],
	"21550": [
		39.389381,
		-79.390745
	],
	"21555": [
		39.575204,
		-78.562497
	],
	"21557": [
		39.536233,
		-78.92279
	],
	"21561": [
		39.491571,
		-79.194401
	],
	"21562": [
		39.513963,
		-79.04047
	],
	"21601": [
		38.79365,
		-76.081602
	],
	"21607": [
		39.132714,
		-75.854207
	],
	"21610": [
		39.367115,
		-76.072496
	],
	"21612": [
		38.751513,
		-76.275426
	],
	"21613": [
		38.502789,
		-76.078875
	],
	"21617": [
		39.049357,
		-76.044545
	],
	"21619": [
		38.942447,
		-76.265742
	],
	"21620": [
		39.200177,
		-76.097912
	],
	"21622": [
		38.414465,
		-76.159253
	],
	"21623": [
		39.124035,
		-75.966748
	],
	"21624": [
		38.844673,
		-76.269891
	],
	"21625": [
		38.873205,
		-75.996027
	],
	"21626": [
		38.341359,
		-76.098361
	],
	"21627": [
		38.233028,
		-76.046336
	],
	"21628": [
		39.233174,
		-75.92205
	],
	"21629": [
		38.858672,
		-75.825079
	],
	"21631": [
		38.582391,
		-75.938981
	],
	"21632": [
		38.731398,
		-75.772428
	],
	"21634": [
		38.292164,
		-76.199153
	],
	"21635": [
		39.334791,
		-75.846625
	],
	"21636": [
		39.025292,
		-75.802806
	],
	"21638": [
		38.940201,
		-76.207604
	],
	"21639": [
		38.958732,
		-75.782499
	],
	"21640": [
		39.068141,
		-75.820948
	],
	"21641": [
		38.917919,
		-75.940213
	],
	"21643": [
		38.645582,
		-75.869896
	],
	"21644": [
		39.112428,
		-75.873521
	],
	"21645": [
		39.315819,
		-75.956165
	],
	"21647": [
		38.812385,
		-76.283079
	],
	"21648": [
		38.485356,
		-76.23933
	],
	"21649": [
		39.132893,
		-75.770684
	],
	"21650": [
		39.314376,
		-75.817023
	],
	"21651": [
		39.256085,
		-75.851523
	],
	"21652": [
		38.703188,
		-76.274135
	],
	"21653": [
		38.750464,
		-76.179733
	],
	"21654": [
		38.688756,
		-76.127833
	],
	"21655": [
		38.744968,
		-75.912768
	],
	"21657": [
		38.968741,
		-75.986162
	],
	"21658": [
		38.945576,
		-76.143257
	],
	"21659": [
		38.589881,
		-75.767427
	],
	"21660": [
		38.95575,
		-75.890107
	],
	"21661": [
		39.096121,
		-76.219488
	],
	"21662": [
		38.710588,
		-76.208346
	],
	"21663": [
		38.788286,
		-76.228656
	],
	"21664": [
		38.607081,
		-75.944694
	],
	"21665": [
		38.7518,
		-76.332597
	],
	"21666": [
		38.940139,
		-76.33579
	],
	"21667": [
		39.350621,
		-76.042108
	],
	"21668": [
		39.191191,
		-75.853
	],
	"21669": [
		38.460081,
		-76.285161
	],
	"21671": [
		38.695574,
		-76.335128
	],
	"21672": [
		38.271699,
		-76.052704
	],
	"21673": [
		38.642285,
		-76.043492
	],
	"21675": [
		38.288979,
		-76.0896
	],
	"21676": [
		38.773206,
		-76.353189
	],
	"21677": [
		38.472182,
		-76.173844
	],
	"21678": [
		39.309161,
		-76.098792
	],
	"21679": [
		38.920478,
		-76.094115
	],
	"21701": [
		39.443557,
		-77.332934
	],
	"21702": [
		39.479136,
		-77.442989
	],
	"21703": [
		39.367031,
		-77.473482
	],
	"21704": [
		39.354881,
		-77.3759
	],
	"21705": [
		39.40886,
		-77.410008
	],
	"21710": [
		39.307996,
		-77.432009
	],
	"21711": [
		39.668396,
		-78.019569
	],
	"21713": [
		39.529683,
		-77.675671
	],
	"21714": [
		39.419295,
		-77.504419
	],
	"21716": [
		39.314453,
		-77.620019
	],
	"21717": [
		39.338668,
		-77.43704
	],
	"21718": [
		39.393497,
		-77.627788
	],
	"21719": [
		39.707956,
		-77.494228
	],
	"21722": [
		39.66205,
		-77.919911
	],
	"21723": [
		39.329107,
		-77.002611
	],
	"21727": [
		39.68862,
		-77.329249
	],
	"21733": [
		39.549303,
		-77.758487
	],
	"21734": [
		39.607817,
		-77.707835
	],
	"21737": [
		39.24826,
		-77.027125
	],
	"21738": [
		39.279844,
		-77.026706
	],
	"21740": [
		39.631901,
		-77.743885
	],
	"21742": [
		39.678219,
		-77.65272
	],
	"21746": [
		39.565064,
		-77.711467
	],
	"21750": [
		39.662262,
		-78.235975
	],
	"21754": [
		39.332115,
		-77.316212
	],
	"21755": [
		39.359655,
		-77.568128
	],
	"21756": [
		39.462722,
		-77.70403
	],
	"21757": [
		39.593861,
		-77.258139
	],
	"21758": [
		39.353205,
		-77.656813
	],
	"21762": [
		39.48083,
		-77.247089
	],
	"21766": [
		39.670471,
		-78.38789
	],
	"21767": [
		39.697132,
		-77.747473
	],
	"21769": [
		39.442449,
		-77.568921
	],
	"21770": [
		39.350189,
		-77.25624
	],
	"21771": [
		39.394652,
		-77.163984
	],
	"21773": [
		39.542655,
		-77.551543
	],
	"21774": [
		39.410304,
		-77.268909
	],
	"21776": [
		39.517975,
		-77.099688
	],
	"21777": [
		39.27131,
		-77.519376
	],
	"21778": [
		39.615806,
		-77.328421
	],
	"21779": [
		39.426819,
		-77.651635
	],
	"21780": [
		39.677417,
		-77.465582
	],
	"21781": [
		39.571073,
		-77.759648
	],
	"21782": [
		39.456826,
		-77.762369
	],
	"21783": [
		39.651841,
		-77.553573
	],
	"21784": [
		39.401084,
		-76.973736
	],
	"21787": [
		39.67763,
		-77.172591
	],
	"21788": [
		39.589979,
		-77.413861
	],
	"21790": [
		39.260865,
		-77.484901
	],
	"21791": [
		39.533053,
		-77.18856
	],
	"21793": [
		39.493618,
		-77.344122
	],
	"21794": [
		39.298422,
		-76.966129
	],
	"21795": [
		39.580609,
		-77.823698
	],
	"21797": [
		39.328183,
		-77.071411
	],
	"21798": [
		39.536366,
		-77.302027
	],
	"21801": [
		38.380073,
		-75.63704
	],
	"21802": [
		38.344771,
		-75.582696
	],
	"21804": [
		38.314082,
		-75.532106
	],
	"21810": [
		38.299722,
		-75.707114
	],
	"21811": [
		38.318877,
		-75.216741
	],
	"21813": [
		38.424217,
		-75.155464
	],
	"21814": [
		38.293076,
		-75.899296
	],
	"21817": [
		37.981025,
		-75.836069
	],
	"21821": [
		38.164595,
		-75.91666
	],
	"21822": [
		38.280813,
		-75.636084
	],
	"21824": [
		37.980774,
		-76.036546
	],
	"21826": [
		38.31695,
		-75.626463
	],
	"21829": [
		38.097659,
		-75.371456
	],
	"21830": [
		38.402166,
		-75.737946
	],
	"21835": [
		38.531887,
		-75.948459
	],
	"21837": [
		38.454586,
		-75.766294
	],
	"21838": [
		38.017906,
		-75.73792
	],
	"21840": [
		38.248736,
		-75.900009
	],
	"21841": [
		38.246944,
		-75.295806
	],
	"21842": [
		38.350536,
		-75.12888
	],
	"21849": [
		38.377348,
		-75.462118
	],
	"21850": [
		38.361731,
		-75.397078
	],
	"21851": [
		38.079869,
		-75.542444
	],
	"21853": [
		38.20354,
		-75.720887
	],
	"21856": [
		38.330729,
		-75.794885
	],
	"21861": [
		38.53644,
		-75.727352
	],
	"21862": [
		38.398054,
		-75.226142
	],
	"21863": [
		38.187913,
		-75.399041
	],
	"21864": [
		38.031572,
		-75.405812
	],
	"21865": [
		38.287338,
		-75.841179
	],
	"21866": [
		37.967128,
		-76.021365
	],
	"21867": [
		38.109665,
		-75.793678
	],
	"21869": [
		38.438227,
		-75.896268
	],
	"21871": [
		38.093785,
		-75.735688
	],
	"21872": [
		38.41513,
		-75.29926
	],
	"21874": [
		38.391283,
		-75.351965
	],
	"21875": [
		38.439999,
		-75.544695
	],
	"21890": [
		38.157317,
		-75.704343
	],
	"21901": [
		39.585403,
		-75.958964
	],
	"21902": [
		39.551971,
		-76.063147
	],
	"21903": [
		39.573438,
		-76.039062
	],
	"21904": [
		39.61549,
		-76.067988
	],
	"21911": [
		39.695338,
		-76.032376
	],
	"21912": [
		39.419414,
		-75.818631
	],
	"21913": [
		39.404509,
		-75.867609
	],
	"21914": [
		39.572339,
		-75.978486
	],
	"21915": [
		39.496147,
		-75.848168
	],
	"21916": [
		39.641288,
		-75.861562
	],
	"21917": [
		39.671632,
		-76.097397
	],
	"21918": [
		39.678193,
		-76.175883
	],
	"21919": [
		39.418555,
		-75.933718
	],
	"21920": [
		39.657498,
		-75.828326
	],
	"21921": [
		39.627145,
		-75.859891
	],
	"21930": [
		39.37566,
		-75.887993
	],
	"22003": [
		38.829817,
		-77.215318
	],
	"22015": [
		38.787813,
		-77.278978
	],
	"22025": [
		38.597728,
		-77.339458
	],
	"22026": [
		38.560041,
		-77.296214
	],
	"22027": [
		38.894853,
		-77.223048
	],
	"22030": [
		38.837185,
		-77.34048
	],
	"22031": [
		38.858916,
		-77.260258
	],
	"22032": [
		38.817797,
		-77.290205
	],
	"22033": [
		38.875218,
		-77.384713
	],
	"22035": [
		38.854725,
		-77.356983
	],
	"22039": [
		38.755963,
		-77.314172
	],
	"22041": [
		38.849321,
		-77.141472
	],
	"22042": [
		38.865024,
		-77.197125
	],
	"22043": [
		38.900858,
		-77.19588
	],
	"22044": [
		38.862044,
		-77.154372
	],
	"22046": [
		38.886334,
		-77.180975
	],
	"22060": [
		38.693555,
		-77.153213
	],
	"22066": [
		39.012385,
		-77.301968
	],
	"22079": [
		38.674606,
		-77.209739
	],
	"22101": [
		38.940203,
		-77.164882
	],
	"22102": [
		38.95095,
		-77.229544
	],
	"22124": [
		38.894871,
		-77.329515
	],
	"22125": [
		38.681862,
		-77.26249
	],
	"22134": [
		38.521689,
		-77.385058
	],
	"22150": [
		38.772863,
		-77.186523
	],
	"22151": [
		38.804093,
		-77.207804
	],
	"22152": [
		38.774493,
		-77.232029
	],
	"22153": [
		38.744969,
		-77.23564
	],
	"22172": [
		38.565029,
		-77.370407
	],
	"22180": [
		38.895439,
		-77.256133
	],
	"22181": [
		38.906651,
		-77.293388
	],
	"22182": [
		38.938421,
		-77.27552
	],
	"22185": [
		38.874605,
		-77.304029
	],
	"22191": [
		38.622914,
		-77.262938
	],
	"22192": [
		38.683699,
		-77.314673
	],
	"22193": [
		38.644195,
		-77.352
	],
	"22201": [
		38.886565,
		-77.095231
	],
	"22202": [
		38.856868,
		-77.051492
	],
	"22203": [
		38.873718,
		-77.117325
	],
	"22204": [
		38.860791,
		-77.098972
	],
	"22205": [
		38.883501,
		-77.139537
	],
	"22206": [
		38.843919,
		-77.089398
	],
	"22207": [
		38.906665,
		-77.124238
	],
	"22209": [
		38.895023,
		-77.075464
	],
	"22211": [
		38.88011,
		-77.070778
	],
	"22213": [
		38.895087,
		-77.162511
	],
	"22214": [
		38.868818,
		-77.073967
	],
	"22301": [
		38.819893,
		-77.059582
	],
	"22302": [
		38.827888,
		-77.083132
	],
	"22303": [
		38.79438,
		-77.078837
	],
	"22304": [
		38.813169,
		-77.112139
	],
	"22305": [
		38.836463,
		-77.062098
	],
	"22306": [
		38.755738,
		-77.097779
	],
	"22307": [
		38.771996,
		-77.057275
	],
	"22308": [
		38.733509,
		-77.061076
	],
	"22309": [
		38.720336,
		-77.106155
	],
	"22310": [
		38.784071,
		-77.122823
	],
	"22311": [
		38.83362,
		-77.125462
	],
	"22312": [
		38.815789,
		-77.154271
	],
	"22314": [
		38.806853,
		-77.056374
	],
	"22315": [
		38.758337,
		-77.151192
	],
	"22401": [
		38.299272,
		-77.486658
	],
	"22405": [
		38.313604,
		-77.403928
	],
	"22406": [
		38.399766,
		-77.547312
	],
	"22407": [
		38.283474,
		-77.575684
	],
	"22408": [
		38.220271,
		-77.443653
	],
	"22427": [
		38.093146,
		-77.271122
	],
	"22432": [
		37.869524,
		-76.342347
	],
	"22433": [
		38.367057,
		-77.859386
	],
	"22435": [
		37.966791,
		-76.572106
	],
	"22436": [
		38.084168,
		-77.117456
	],
	"22437": [
		37.786258,
		-76.803286
	],
	"22438": [
		38.041022,
		-76.980741
	],
	"22443": [
		38.169514,
		-76.986805
	],
	"22448": [
		38.336332,
		-77.028442
	],
	"22454": [
		37.844032,
		-76.833646
	],
	"22460": [
		37.869283,
		-76.607359
	],
	"22469": [
		38.082265,
		-76.650303
	],
	"22473": [
		37.887476,
		-76.420749
	],
	"22476": [
		38.051097,
		-77.072623
	],
	"22480": [
		37.662536,
		-76.412242
	],
	"22482": [
		37.735631,
		-76.346113
	],
	"22485": [
		38.277049,
		-77.162769
	],
	"22488": [
		38.049455,
		-76.587481
	],
	"22503": [
		37.750474,
		-76.515326
	],
	"22504": [
		37.768923,
		-76.72068
	],
	"22508": [
		38.313187,
		-77.798472
	],
	"22509": [
		38.120518,
		-77.079949
	],
	"22511": [
		37.991033,
		-76.504028
	],
	"22514": [
		38.008001,
		-77.32938
	],
	"22520": [
		38.121783,
		-76.803458
	],
	"22529": [
		38.011551,
		-76.689548
	],
	"22530": [
		37.897826,
		-76.293047
	],
	"22534": [
		38.077216,
		-77.672105
	],
	"22535": [
		38.154753,
		-77.162537
	],
	"22538": [
		38.192176,
		-77.262184
	],
	"22539": [
		37.860613,
		-76.286036
	],
	"22542": [
		38.293517,
		-77.880863
	],
	"22546": [
		37.942668,
		-77.448666
	],
	"22548": [
		37.815803,
		-76.704785
	],
	"22551": [
		38.169838,
		-77.700023
	],
	"22553": [
		38.271202,
		-77.649295
	],
	"22554": [
		38.427352,
		-77.367672
	],
	"22556": [
		38.468925,
		-77.515244
	],
	"22560": [
		37.91585,
		-76.961086
	],
	"22567": [
		38.237857,
		-77.927575
	],
	"22572": [
		37.965301,
		-76.771067
	],
	"22576": [
		37.671046,
		-76.4557
	],
	"22578": [
		37.636571,
		-76.356134
	],
	"22579": [
		37.795598,
		-76.314938
	],
	"22580": [
		38.109182,
		-77.445683
	],
	"22601": [
		39.174468,
		-78.173406
	],
	"22602": [
		39.144249,
		-78.284807
	],
	"22603": [
		39.269354,
		-78.21327
	],
	"22610": [
		38.824656,
		-78.279143
	],
	"22611": [
		39.168882,
		-77.984613
	],
	"22620": [
		39.068186,
		-78.032279
	],
	"22623": [
		38.848927,
		-78.140664
	],
	"22624": [
		39.269784,
		-78.091841
	],
	"22625": [
		39.376805,
		-78.309326
	],
	"22627": [
		38.757918,
		-78.144569
	],
	"22630": [
		38.930914,
		-78.17648
	],
	"22637": [
		39.256917,
		-78.352305
	],
	"22639": [
		38.813779,
		-78.019064
	],
	"22640": [
		38.811028,
		-78.14057
	],
	"22641": [
		39.08546,
		-78.385706
	],
	"22642": [
		38.946949,
		-78.012043
	],
	"22643": [
		38.885375,
		-77.983519
	],
	"22644": [
		38.949772,
		-78.486478
	],
	"22645": [
		39.019181,
		-78.274706
	],
	"22646": [
		39.072518,
		-78.050929
	],
	"22650": [
		38.765084,
		-78.364632
	],
	"22652": [
		38.840091,
		-78.431748
	],
	"22654": [
		38.988131,
		-78.5724
	],
	"22655": [
		39.068321,
		-78.209535
	],
	"22656": [
		39.219255,
		-78.089345
	],
	"22657": [
		39.002622,
		-78.376111
	],
	"22660": [
		38.944124,
		-78.431478
	],
	"22663": [
		39.052545,
		-78.11232
	],
	"22664": [
		38.888919,
		-78.532453
	],
	"22701": [
		38.438777,
		-77.996261
	],
	"22709": [
		38.328731,
		-78.213737
	],
	"22711": [
		38.467129,
		-78.274978
	],
	"22712": [
		38.564008,
		-77.757247
	],
	"22713": [
		38.560716,
		-78.118816
	],
	"22714": [
		38.519671,
		-77.895419
	],
	"22715": [
		38.413954,
		-78.184695
	],
	"22716": [
		38.62999,
		-78.103016
	],
	"22718": [
		38.477181,
		-77.82746
	],
	"22719": [
		38.534889,
		-78.281252
	],
	"22720": [
		38.474956,
		-77.644107
	],
	"22722": [
		38.46625,
		-78.227059
	],
	"22723": [
		38.334605,
		-78.380361
	],
	"22724": [
		38.614645,
		-77.893981
	],
	"22726": [
		38.3982,
		-77.816535
	],
	"22727": [
		38.407594,
		-78.295292
	],
	"22728": [
		38.596544,
		-77.675692
	],
	"22729": [
		38.374194,
		-78.017758
	],
	"22730": [
		38.374423,
		-78.15846
	],
	"22731": [
		38.336564,
		-78.257331
	],
	"22732": [
		38.31463,
		-78.189884
	],
	"22733": [
		38.33326,
		-78.046145
	],
	"22734": [
		38.52618,
		-77.794566
	],
	"22735": [
		38.476865,
		-78.174258
	],
	"22736": [
		38.398165,
		-77.704567
	],
	"22737": [
		38.580891,
		-78.01412
	],
	"22738": [
		38.293931,
		-78.280931
	],
	"22740": [
		38.64569,
		-78.286953
	],
	"22741": [
		38.426443,
		-77.868389
	],
	"22742": [
		38.466332,
		-77.715072
	],
	"22743": [
		38.540055,
		-78.38142
	],
	"22747": [
		38.709056,
		-78.165674
	],
	"22749": [
		38.619655,
		-78.180235
	],
	"22801": [
		38.403645,
		-78.875125
	],
	"22802": [
		38.494378,
		-78.863123
	],
	"22807": [
		38.43397,
		-78.86787
	],
	"22810": [
		38.827091,
		-78.796534
	],
	"22811": [
		38.811318,
		-78.992036
	],
	"22812": [
		38.378179,
		-79.027051
	],
	"22815": [
		38.712509,
		-78.841209
	],
	"22820": [
		38.704836,
		-79.019048
	],
	"22821": [
		38.480717,
		-79.128767
	],
	"22824": [
		38.836074,
		-78.631822
	],
	"22827": [
		38.410693,
		-78.59644
	],
	"22830": [
		38.66726,
		-78.975031
	],
	"22831": [
		38.576502,
		-79.076242
	],
	"22832": [
		38.454916,
		-78.759702
	],
	"22834": [
		38.559256,
		-78.860046
	],
	"22835": [
		38.669963,
		-78.453689
	],
	"22840": [
		38.425444,
		-78.722824
	],
	"22841": [
		38.341793,
		-78.892489
	],
	"22842": [
		38.778048,
		-78.699661
	],
	"22843": [
		38.387148,
		-79.142634
	],
	"22844": [
		38.655841,
		-78.661856
	],
	"22845": [
		38.786332,
		-78.8164
	],
	"22846": [
		38.389348,
		-78.78624
	],
	"22847": [
		38.730637,
		-78.717385
	],
	"22849": [
		38.525324,
		-78.629627
	],
	"22850": [
		38.559676,
		-78.924344
	],
	"22851": [
		38.563053,
		-78.512907
	],
	"22853": [
		38.651705,
		-78.758708
	],
	"22901": [
		38.087705,
		-78.552744
	],
	"22902": [
		37.910276,
		-78.52212
	],
	"22903": [
		38.006972,
		-78.59506
	],
	"22904": [
		38.031957,
		-78.52403
	],
	"22911": [
		38.097005,
		-78.410147
	],
	"22920": [
		37.96879,
		-78.805505
	],
	"22922": [
		37.693701,
		-78.921765
	],
	"22923": [
		38.189313,
		-78.31668
	],
	"22931": [
		37.898913,
		-78.727451
	],
	"22932": [
		38.147507,
		-78.696458
	],
	"22935": [
		38.253952,
		-78.562665
	],
	"22936": [
		38.159998,
		-78.499128
	],
	"22937": [
		37.797229,
		-78.619207
	],
	"22938": [
		37.865862,
		-78.794527
	],
	"22939": [
		38.105779,
		-78.974031
	],
	"22940": [
		38.159742,
		-78.556161
	],
	"22942": [
		38.101443,
		-78.202129
	],
	"22943": [
		38.040171,
		-78.778343
	],
	"22946": [
		37.858585,
		-78.571382
	],
	"22947": [
		38.043989,
		-78.324721
	],
	"22948": [
		38.363165,
		-78.128968
	],
	"22949": [
		37.789079,
		-78.88344
	],
	"22952": [
		37.963562,
		-78.962741
	],
	"22958": [
		37.892769,
		-78.894292
	],
	"22959": [
		37.937275,
		-78.656588
	],
	"22960": [
		38.219183,
		-78.072698
	],
	"22963": [
		37.848104,
		-78.305112
	],
	"22964": [
		37.711767,
		-78.975773
	],
	"22967": [
		37.797305,
		-79.014082
	],
	"22968": [
		38.240602,
		-78.400888
	],
	"22969": [
		37.797482,
		-78.693383
	],
	"22971": [
		37.745121,
		-78.793177
	],
	"22972": [
		38.215776,
		-78.230285
	],
	"22973": [
		38.335895,
		-78.478685
	],
	"22974": [
		37.972582,
		-78.284455
	],
	"22976": [
		37.812764,
		-79.056685
	],
	"22980": [
		38.099858,
		-78.880549
	],
	"22989": [
		38.288665,
		-78.131074
	],
	"23002": [
		37.35106,
		-77.967875
	],
	"23004": [
		37.688288,
		-78.399202
	],
	"23005": [
		37.759696,
		-77.48187
	],
	"23009": [
		37.820938,
		-77.181166
	],
	"23011": [
		37.477354,
		-76.81245
	],
	"23015": [
		37.929812,
		-77.626248
	],
	"23021": [
		37.389948,
		-76.373522
	],
	"23022": [
		37.731004,
		-78.263155
	],
	"23023": [
		37.768958,
		-76.963729
	],
	"23024": [
		37.927752,
		-77.779274
	],
	"23025": [
		37.41516,
		-76.362416
	],
	"23027": [
		37.646476,
		-78.130174
	],
	"23030": [
		37.345958,
		-77.055314
	],
	"23032": [
		37.655782,
		-76.669215
	],
	"23035": [
		37.489338,
		-76.390866
	],
	"23038": [
		37.753464,
		-78.148789
	],
	"23039": [
		37.656565,
		-77.812465
	],
	"23040": [
		37.501366,
		-78.251847
	],
	"23043": [
		37.562083,
		-76.350276
	],
	"23045": [
		37.425348,
		-76.268808
	],
	"23047": [
		37.843384,
		-77.473917
	],
	"23050": [
		37.497944,
		-76.426325
	],
	"23055": [
		37.768214,
		-78.217011
	],
	"23056": [
		37.35648,
		-76.362611
	],
	"23059": [
		37.702234,
		-77.574005
	],
	"23060": [
		37.659706,
		-77.533888
	],
	"23061": [
		37.427731,
		-76.537584
	],
	"23062": [
		37.262931,
		-76.507489
	],
	"23063": [
		37.712553,
		-78.00613
	],
	"23064": [
		37.496862,
		-76.299383
	],
	"23065": [
		37.805959,
		-77.932428
	],
	"23066": [
		37.495638,
		-76.28658
	],
	"23068": [
		37.500686,
		-76.335139
	],
	"23069": [
		37.771537,
		-77.322377
	],
	"23070": [
		37.552199,
		-76.388985
	],
	"23071": [
		37.545428,
		-76.448594
	],
	"23072": [
		37.290444,
		-76.44779
	],
	"23075": [
		37.557879,
		-77.313138
	],
	"23076": [
		37.478376,
		-76.300342
	],
	"23079": [
		37.716884,
		-76.67474
	],
	"23083": [
		37.308039,
		-78.117329
	],
	"23084": [
		37.884931,
		-78.115047
	],
	"23085": [
		37.715457,
		-76.831989
	],
	"23086": [
		37.668573,
		-77.054414
	],
	"23089": [
		37.455795,
		-76.903501
	],
	"23091": [
		37.650958,
		-76.799018
	],
	"23092": [
		37.606769,
		-76.514748
	],
	"23093": [
		38.004167,
		-78.040057
	],
	"23102": [
		37.708119,
		-77.828654
	],
	"23103": [
		37.648034,
		-77.72364
	],
	"23106": [
		37.716107,
		-77.201511
	],
	"23108": [
		37.644741,
		-76.734614
	],
	"23109": [
		37.432741,
		-76.332514
	],
	"23110": [
		37.58282,
		-76.771108
	],
	"23111": [
		37.613551,
		-77.243019
	],
	"23112": [
		37.433405,
		-77.662862
	],
	"23113": [
		37.538846,
		-77.679628
	],
	"23114": [
		37.482226,
		-77.659771
	],
	"23115": [
		37.811023,
		-76.91442
	],
	"23116": [
		37.675649,
		-77.336708
	],
	"23117": [
		37.981999,
		-77.873976
	],
	"23119": [
		37.448174,
		-76.277178
	],
	"23120": [
		37.42208,
		-77.78137
	],
	"23123": [
		37.651834,
		-78.301142
	],
	"23124": [
		37.550924,
		-77.043956
	],
	"23125": [
		37.327127,
		-76.28083
	],
	"23126": [
		37.923461,
		-77.144316
	],
	"23128": [
		37.436067,
		-76.432958
	],
	"23129": [
		37.68163,
		-77.77042
	],
	"23130": [
		37.387286,
		-76.259439
	],
	"23138": [
		37.342651,
		-76.304324
	],
	"23139": [
		37.545988,
		-77.936728
	],
	"23140": [
		37.435013,
		-77.038311
	],
	"23141": [
		37.52869,
		-77.156144
	],
	"23146": [
		37.73149,
		-77.704529
	],
	"23148": [
		37.846428,
		-77.05464
	],
	"23149": [
		37.575671,
		-76.609283
	],
	"23150": [
		37.501141,
		-77.252581
	],
	"23153": [
		37.770805,
		-77.947259
	],
	"23156": [
		37.521141,
		-76.706618
	],
	"23160": [
		37.628163,
		-77.845916
	],
	"23161": [
		37.715706,
		-76.935229
	],
	"23163": [
		37.357691,
		-76.309595
	],
	"23168": [
		37.395757,
		-76.82511
	],
	"23169": [
		37.603451,
		-76.457239
	],
	"23173": [
		37.577676,
		-77.536969
	],
	"23175": [
		37.654869,
		-76.624357
	],
	"23176": [
		37.572941,
		-76.414976
	],
	"23177": [
		37.755009,
		-77.014493
	],
	"23180": [
		37.702428,
		-76.615265
	],
	"23181": [
		37.597491,
		-76.88906
	],
	"23185": [
		37.228498,
		-76.718509
	],
	"23187": [
		37.268856,
		-76.720941
	],
	"23188": [
		37.342936,
		-76.763853
	],
	"23192": [
		37.820363,
		-77.680814
	],
	"23219": [
		37.539769,
		-77.435528
	],
	"23220": [
		37.549349,
		-77.460606
	],
	"23221": [
		37.553306,
		-77.493558
	],
	"23222": [
		37.582968,
		-77.418907
	],
	"23223": [
		37.557767,
		-77.378886
	],
	"23224": [
		37.497603,
		-77.467429
	],
	"23225": [
		37.518624,
		-77.512937
	],
	"23226": [
		37.579912,
		-77.523347
	],
	"23227": [
		37.611292,
		-77.438188
	],
	"23228": [
		37.626617,
		-77.492834
	],
	"23229": [
		37.586772,
		-77.574165
	],
	"23230": [
		37.586639,
		-77.489122
	],
	"23231": [
		37.442204,
		-77.314931
	],
	"23233": [
		37.646431,
		-77.624235
	],
	"23234": [
		37.451423,
		-77.47066
	],
	"23235": [
		37.51457,
		-77.564758
	],
	"23236": [
		37.47581,
		-77.585285
	],
	"23237": [
		37.400878,
		-77.449054
	],
	"23238": [
		37.595612,
		-77.647606
	],
	"23250": [
		37.504727,
		-77.320875
	],
	"23294": [
		37.631281,
		-77.542534
	],
	"23301": [
		37.681259,
		-75.633464
	],
	"23302": [
		37.86567,
		-75.520915
	],
	"23303": [
		37.911355,
		-75.504972
	],
	"23304": [
		36.996135,
		-76.572107
	],
	"23306": [
		37.56107,
		-75.872026
	],
	"23307": [
		37.432039,
		-75.871157
	],
	"23308": [
		37.838625,
		-75.660124
	],
	"23310": [
		37.258993,
		-75.963657
	],
	"23313": [
		37.19973,
		-75.945635
	],
	"23314": [
		36.959049,
		-76.52428
	],
	"23315": [
		36.73739,
		-76.840511
	],
	"23316": [
		37.303123,
		-75.992964
	],
	"23320": [
		36.762288,
		-76.21165
	],
	"23321": [
		36.800398,
		-76.421152
	],
	"23322": [
		36.618712,
		-76.227046
	],
	"23323": [
		36.696975,
		-76.379925
	],
	"23324": [
		36.799721,
		-76.273447
	],
	"23325": [
		36.814548,
		-76.238429
	],
	"23336": [
		37.954605,
		-75.334522
	],
	"23337": [
		37.930411,
		-75.486091
	],
	"23347": [
		37.339243,
		-75.978024
	],
	"23350": [
		37.512705,
		-75.862593
	],
	"23354": [
		37.462861,
		-75.912247
	],
	"23356": [
		37.99079,
		-75.382405
	],
	"23357": [
		37.755646,
		-75.676028
	],
	"23358": [
		37.652659,
		-75.867953
	],
	"23359": [
		37.884947,
		-75.587982
	],
	"23389": [
		37.660513,
		-75.834778
	],
	"23395": [
		37.976304,
		-75.46059
	],
	"23398": [
		37.516128,
		-75.944072
	],
	"23401": [
		37.627492,
		-75.779396
	],
	"23405": [
		37.411724,
		-75.926597
	],
	"23407": [
		37.840957,
		-75.578774
	],
	"23408": [
		37.452913,
		-75.843474
	],
	"23409": [
		37.887621,
		-75.662907
	],
	"23410": [
		37.637853,
		-75.736907
	],
	"23413": [
		37.472853,
		-75.857763
	],
	"23414": [
		37.806814,
		-75.579897
	],
	"23415": [
		37.969553,
		-75.534703
	],
	"23416": [
		37.933768,
		-75.563351
	],
	"23417": [
		37.759052,
		-75.783815
	],
	"23418": [
		37.666868,
		-75.687162
	],
	"23420": [
		37.59907,
		-75.817482
	],
	"23421": [
		37.76478,
		-75.611768
	],
	"23422": [
		37.635389,
		-75.822735
	],
	"23423": [
		37.525301,
		-75.71431
	],
	"23426": [
		37.924102,
		-75.689541
	],
	"23427": [
		37.938929,
		-75.720538
	],
	"23430": [
		37.001261,
		-76.655932
	],
	"23432": [
		36.876452,
		-76.553978
	],
	"23433": [
		36.918069,
		-76.462863
	],
	"23434": [
		36.703003,
		-76.592105
	],
	"23435": [
		36.84134,
		-76.484232
	],
	"23436": [
		36.893756,
		-76.506917
	],
	"23437": [
		36.627115,
		-76.803197
	],
	"23438": [
		36.581493,
		-76.696545
	],
	"23440": [
		37.844418,
		-75.997694
	],
	"23441": [
		37.710268,
		-75.699685
	],
	"23442": [
		37.904756,
		-75.575437
	],
	"23451": [
		36.865133,
		-76.005825
	],
	"23452": [
		36.845756,
		-76.092807
	],
	"23453": [
		36.78349,
		-76.071207
	],
	"23454": [
		36.818071,
		-76.030845
	],
	"23455": [
		36.892997,
		-76.147108
	],
	"23456": [
		36.736954,
		-76.035987
	],
	"23457": [
		36.612747,
		-76.024139
	],
	"23459": [
		36.924655,
		-76.019226
	],
	"23460": [
		36.807977,
		-76.028412
	],
	"23461": [
		36.775402,
		-75.96325
	],
	"23462": [
		36.837313,
		-76.150514
	],
	"23464": [
		36.796917,
		-76.187631
	],
	"23480": [
		37.618711,
		-75.690711
	],
	"23486": [
		37.513168,
		-75.813784
	],
	"23487": [
		36.847368,
		-76.725048
	],
	"23488": [
		37.947613,
		-75.598459
	],
	"23502": [
		36.860941,
		-76.204908
	],
	"23503": [
		36.948786,
		-76.266459
	],
	"23504": [
		36.857302,
		-76.265612
	],
	"23505": [
		36.91422,
		-76.289405
	],
	"23507": [
		36.864564,
		-76.303218
	],
	"23508": [
		36.884888,
		-76.31027
	],
	"23509": [
		36.882372,
		-76.264066
	],
	"23510": [
		36.852122,
		-76.291682
	],
	"23511": [
		36.912232,
		-76.325805
	],
	"23513": [
		36.889714,
		-76.23886
	],
	"23517": [
		36.869679,
		-76.292569
	],
	"23518": [
		36.916118,
		-76.215375
	],
	"23523": [
		36.832389,
		-76.272082
	],
	"23551": [
		36.924048,
		-76.288625
	],
	"23601": [
		37.038265,
		-76.480498
	],
	"23602": [
		37.113416,
		-76.517947
	],
	"23603": [
		37.191057,
		-76.564535
	],
	"23604": [
		37.105026,
		-76.574792
	],
	"23605": [
		37.017949,
		-76.435781
	],
	"23606": [
		37.064408,
		-76.521638
	],
	"23607": [
		36.970515,
		-76.424339
	],
	"23608": [
		37.147813,
		-76.543036
	],
	"23651": [
		37.005711,
		-76.305389
	],
	"23661": [
		37.009301,
		-76.386177
	],
	"23662": [
		37.133319,
		-76.353027
	],
	"23663": [
		37.032292,
		-76.313646
	],
	"23664": [
		37.078374,
		-76.289825
	],
	"23665": [
		37.084498,
		-76.365498
	],
	"23666": [
		37.058141,
		-76.406646
	],
	"23669": [
		37.050311,
		-76.342814
	],
	"23690": [
		37.222401,
		-76.517104
	],
	"23691": [
		37.255253,
		-76.549418
	],
	"23692": [
		37.192438,
		-76.463582
	],
	"23693": [
		37.123066,
		-76.447129
	],
	"23696": [
		37.189119,
		-76.421079
	],
	"23701": [
		36.813708,
		-76.37034
	],
	"23702": [
		36.799047,
		-76.328977
	],
	"23703": [
		36.893339,
		-76.373292
	],
	"23704": [
		36.824187,
		-76.310161
	],
	"23707": [
		36.842301,
		-76.339628
	],
	"23708": [
		36.849529,
		-76.305158
	],
	"23709": [
		36.812752,
		-76.305457
	],
	"23801": [
		37.235444,
		-77.335337
	],
	"23803": [
		37.209279,
		-77.497239
	],
	"23805": [
		37.138544,
		-77.403475
	],
	"23806": [
		37.238612,
		-77.418238
	],
	"23821": [
		36.8832,
		-77.912944
	],
	"23824": [
		37.085581,
		-77.97218
	],
	"23827": [
		36.612313,
		-77.196878
	],
	"23828": [
		36.580854,
		-77.266933
	],
	"23829": [
		36.73267,
		-77.217351
	],
	"23830": [
		37.016961,
		-77.395057
	],
	"23831": [
		37.346253,
		-77.450566
	],
	"23832": [
		37.38785,
		-77.592108
	],
	"23833": [
		37.209429,
		-77.668917
	],
	"23834": [
		37.290584,
		-77.404112
	],
	"23836": [
		37.345226,
		-77.346743
	],
	"23837": [
		36.749583,
		-77.084152
	],
	"23838": [
		37.31921,
		-77.633166
	],
	"23839": [
		37.079815,
		-76.920618
	],
	"23840": [
		37.065325,
		-77.666008
	],
	"23841": [
		37.048042,
		-77.543937
	],
	"23842": [
		37.131685,
		-77.221949
	],
	"23843": [
		36.84515,
		-77.822447
	],
	"23844": [
		36.680032,
		-77.326525
	],
	"23845": [
		36.578823,
		-77.977561
	],
	"23846": [
		37.066603,
		-76.83402
	],
	"23847": [
		36.670258,
		-77.550253
	],
	"23850": [
		37.220129,
		-77.765249
	],
	"23851": [
		36.655848,
		-76.950841
	],
	"23856": [
		36.784009,
		-77.702347
	],
	"23857": [
		36.584651,
		-77.883799
	],
	"23860": [
		37.274749,
		-77.227407
	],
	"23866": [
		36.923676,
		-76.862401
	],
	"23867": [
		36.816602,
		-77.481624
	],
	"23868": [
		36.722009,
		-77.817381
	],
	"23872": [
		36.98943,
		-77.72029
	],
	"23874": [
		36.608956,
		-77.085713
	],
	"23875": [
		37.221381,
		-77.270466
	],
	"23876": [
		36.955753,
		-77.83361
	],
	"23878": [
		36.824772,
		-77.025432
	],
	"23879": [
		36.592274,
		-77.596837
	],
	"23881": [
		37.180741,
		-76.977829
	],
	"23882": [
		36.926173,
		-77.421687
	],
	"23883": [
		37.135962,
		-76.735892
	],
	"23884": [
		36.917234,
		-77.279442
	],
	"23885": [
		37.190287,
		-77.572659
	],
	"23887": [
		36.573362,
		-77.816917
	],
	"23888": [
		36.949958,
		-76.975042
	],
	"23889": [
		36.902933,
		-77.747246
	],
	"23890": [
		37.009176,
		-77.118319
	],
	"23891": [
		37.050821,
		-77.212429
	],
	"23893": [
		36.644073,
		-77.920776
	],
	"23894": [
		37.122207,
		-77.820822
	],
	"23897": [
		36.829008,
		-77.283615
	],
	"23898": [
		36.838263,
		-76.86187
	],
	"23899": [
		37.234417,
		-76.974083
	],
	"23901": [
		37.320924,
		-78.420892
	],
	"23909": [
		37.300584,
		-78.396639
	],
	"23915": [
		36.69314,
		-78.287418
	],
	"23917": [
		36.625554,
		-78.344856
	],
	"23919": [
		36.593409,
		-78.131154
	],
	"23920": [
		36.724517,
		-77.975253
	],
	"23921": [
		37.586321,
		-78.623535
	],
	"23922": [
		37.185512,
		-78.216385
	],
	"23923": [
		37.087148,
		-78.649692
	],
	"23924": [
		36.806576,
		-78.42203
	],
	"23927": [
		36.587497,
		-78.564584
	],
	"23930": [
		37.171003,
		-78.099611
	],
	"23934": [
		37.177152,
		-78.626705
	],
	"23936": [
		37.532518,
		-78.479244
	],
	"23937": [
		36.945141,
		-78.512503
	],
	"23938": [
		36.905314,
		-77.992026
	],
	"23942": [
		37.134366,
		-78.289196
	],
	"23943": [
		37.245457,
		-78.454144
	],
	"23944": [
		36.915939,
		-78.138611
	],
	"23947": [
		37.031087,
		-78.444724
	],
	"23950": [
		36.658762,
		-78.075874
	],
	"23952": [
		36.928703,
		-78.298588
	],
	"23954": [
		37.106333,
		-78.380108
	],
	"23958": [
		37.264893,
		-78.659633
	],
	"23959": [
		37.105192,
		-78.794749
	],
	"23960": [
		37.320962,
		-78.552064
	],
	"23962": [
		37.004656,
		-78.739335
	],
	"23963": [
		37.200974,
		-78.798552
	],
	"23964": [
		36.772427,
		-78.627089
	],
	"23966": [
		37.300262,
		-78.259116
	],
	"23967": [
		36.913125,
		-78.636604
	],
	"23968": [
		36.725263,
		-78.528509
	],
	"23970": [
		36.750501,
		-78.190761
	],
	"23974": [
		36.970455,
		-78.255276
	],
	"23976": [
		36.844428,
		-78.585307
	],
	"24011": [
		37.27085,
		-79.94149
	],
	"24012": [
		37.310464,
		-79.903046
	],
	"24013": [
		37.266503,
		-79.923095
	],
	"24014": [
		37.22286,
		-79.915191
	],
	"24015": [
		37.25676,
		-79.98133
	],
	"24016": [
		37.273437,
		-79.954687
	],
	"24017": [
		37.297643,
		-79.990971
	],
	"24018": [
		37.213055,
		-80.041739
	],
	"24019": [
		37.346523,
		-79.95358
	],
	"24020": [
		37.358216,
		-79.944179
	],
	"24053": [
		36.607227,
		-80.534076
	],
	"24054": [
		36.668892,
		-79.705426
	],
	"24055": [
		36.756169,
		-79.997554
	],
	"24058": [
		37.176663,
		-80.622252
	],
	"24059": [
		37.163726,
		-80.130484
	],
	"24060": [
		37.255477,
		-80.422534
	],
	"24064": [
		37.376305,
		-79.77038
	],
	"24065": [
		37.11704,
		-79.997325
	],
	"24066": [
		37.537053,
		-79.681003
	],
	"24067": [
		37.031804,
		-80.059897
	],
	"24069": [
		36.576886,
		-79.642566
	],
	"24070": [
		37.356114,
		-80.225834
	],
	"24072": [
		37.04199,
		-80.242381
	],
	"24073": [
		37.132343,
		-80.424778
	],
	"24076": [
		36.605192,
		-80.421039
	],
	"24077": [
		37.366211,
		-79.904022
	],
	"24078": [
		36.72117,
		-79.899591
	],
	"24079": [
		37.056632,
		-80.160939
	],
	"24082": [
		36.620086,
		-80.116523
	],
	"24083": [
		37.405171,
		-79.920188
	],
	"24084": [
		37.127959,
		-80.845882
	],
	"24085": [
		37.679371,
		-79.821548
	],
	"24086": [
		37.27558,
		-80.632246
	],
	"24087": [
		37.214011,
		-80.256774
	],
	"24088": [
		36.887904,
		-80.077927
	],
	"24089": [
		36.708518,
		-79.971555
	],
	"24090": [
		37.521699,
		-79.886553
	],
	"24091": [
		36.919948,
		-80.330525
	],
	"24092": [
		37.012031,
		-79.757851
	],
	"24093": [
		37.3838,
		-80.859621
	],
	"24095": [
		37.22321,
		-79.737268
	],
	"24101": [
		37.173555,
		-79.796387
	],
	"24102": [
		36.844404,
		-80.002271
	],
	"24104": [
		37.133611,
		-79.488635
	],
	"24105": [
		36.911577,
		-80.603687
	],
	"24112": [
		36.72117,
		-79.846927
	],
	"24120": [
		36.691636,
		-80.413917
	],
	"24121": [
		37.168916,
		-79.647411
	],
	"24122": [
		37.426197,
		-79.69213
	],
	"24124": [
		37.31632,
		-80.857538
	],
	"24127": [
		37.473603,
		-80.231051
	],
	"24128": [
		37.339994,
		-80.482544
	],
	"24130": [
		37.609758,
		-80.002393
	],
	"24131": [
		37.570649,
		-80.23287
	],
	"24132": [
		37.203776,
		-80.659247
	],
	"24133": [
		36.669702,
		-80.134431
	],
	"24134": [
		37.247923,
		-80.777561
	],
	"24136": [
		37.331794,
		-80.601598
	],
	"24137": [
		36.927552,
		-79.657504
	],
	"24138": [
		37.042837,
		-80.306411
	],
	"24139": [
		37.013166,
		-79.481073
	],
	"24141": [
		37.096142,
		-80.568655
	],
	"24142": [
		37.137955,
		-80.550901
	],
	"24147": [
		37.40151,
		-80.823626
	],
	"24148": [
		36.579801,
		-79.877967
	],
	"24149": [
		37.018582,
		-80.433581
	],
	"24150": [
		37.380708,
		-80.625557
	],
	"24151": [
		36.954022,
		-79.8652
	],
	"24153": [
		37.302506,
		-80.114325
	],
	"24161": [
		36.978085,
		-79.529113
	],
	"24162": [
		37.129449,
		-80.249715
	],
	"24165": [
		36.584897,
		-80.051923
	],
	"24167": [
		37.255259,
		-80.724536
	],
	"24168": [
		36.734753,
		-79.946456
	],
	"24171": [
		36.696637,
		-80.220827
	],
	"24174": [
		37.351716,
		-79.673095
	],
	"24175": [
		37.427996,
		-79.939687
	],
	"24176": [
		37.005545,
		-79.692495
	],
	"24179": [
		37.285565,
		-79.809835
	],
	"24184": [
		37.088543,
		-79.779243
	],
	"24185": [
		36.811592,
		-80.269238
	],
	"24201": [
		36.610715,
		-82.17005
	],
	"24202": [
		36.65631,
		-82.212219
	],
	"24210": [
		36.768935,
		-82.027531
	],
	"24211": [
		36.654088,
		-81.95507
	],
	"24216": [
		36.948303,
		-82.799398
	],
	"24217": [
		37.084842,
		-82.17854
	],
	"24219": [
		36.849443,
		-82.758491
	],
	"24220": [
		37.137298,
		-82.240182
	],
	"24221": [
		36.625323,
		-82.998722
	],
	"24224": [
		36.861431,
		-82.271754
	],
	"24225": [
		36.991715,
		-82.141851
	],
	"24226": [
		37.136902,
		-82.322989
	],
	"24228": [
		37.16675,
		-82.456233
	],
	"24230": [
		36.956532,
		-82.454034
	],
	"24236": [
		36.652364,
		-81.747659
	],
	"24237": [
		37.036159,
		-82.261943
	],
	"24239": [
		37.11767,
		-82.148525
	],
	"24243": [
		36.773058,
		-82.926016
	],
	"24244": [
		36.723868,
		-82.782184
	],
	"24245": [
		36.838011,
		-82.512802
	],
	"24246": [
		36.866585,
		-82.745568
	],
	"24248": [
		36.625711,
		-83.514425
	],
	"24250": [
		36.756733,
		-82.596526
	],
	"24251": [
		36.657167,
		-82.599488
	],
	"24256": [
		37.2159,
		-82.286741
	],
	"24258": [
		36.645372,
		-82.422038
	],
	"24260": [
		37.030751,
		-82.015022
	],
	"24263": [
		36.668226,
		-83.147399
	],
	"24265": [
		36.832663,
		-82.946461
	],
	"24266": [
		36.858754,
		-82.120965
	],
	"24269": [
		37.072772,
		-82.380679
	],
	"24270": [
		36.729615,
		-82.250664
	],
	"24271": [
		36.748739,
		-82.417259
	],
	"24272": [
		37.013892,
		-82.314775
	],
	"24273": [
		36.964701,
		-82.66148
	],
	"24277": [
		36.744851,
		-83.038438
	],
	"24279": [
		37.077737,
		-82.627401
	],
	"24280": [
		36.956077,
		-81.923315
	],
	"24281": [
		36.637323,
		-83.340226
	],
	"24282": [
		36.818761,
		-83.05431
	],
	"24283": [
		36.939807,
		-82.332961
	],
	"24290": [
		36.612701,
		-82.56794
	],
	"24292": [
		36.617691,
		-81.578136
	],
	"24293": [
		37.004345,
		-82.550814
	],
	"24301": [
		37.06771,
		-80.810743
	],
	"24311": [
		36.874202,
		-81.422004
	],
	"24312": [
		36.833014,
		-80.887021
	],
	"24313": [
		36.909535,
		-80.819941
	],
	"24314": [
		37.157244,
		-81.210414
	],
	"24315": [
		37.133631,
		-81.063229
	],
	"24316": [
		36.955705,
		-81.668988
	],
	"24317": [
		36.601166,
		-80.671347
	],
	"24318": [
		36.995958,
		-81.387124
	],
	"24319": [
		36.745414,
		-81.65621
	],
	"24322": [
		36.799014,
		-81.113662
	],
	"24323": [
		36.866254,
		-81.186396
	],
	"24324": [
		36.974112,
		-80.776478
	],
	"24325": [
		36.795414,
		-80.601603
	],
	"24326": [
		36.729845,
		-81.202199
	],
	"24328": [
		36.645356,
		-80.700836
	],
	"24330": [
		36.725798,
		-81.020688
	],
	"24333": [
		36.639811,
		-80.935081
	],
	"24340": [
		36.753252,
		-81.767904
	],
	"24343": [
		36.770452,
		-80.69092
	],
	"24347": [
		36.960871,
		-80.652471
	],
	"24348": [
		36.652229,
		-81.215324
	],
	"24350": [
		36.813319,
		-80.994209
	],
	"24351": [
		36.579431,
		-80.765127
	],
	"24352": [
		36.709011,
		-80.531193
	],
	"24354": [
		36.829354,
		-81.53971
	],
	"24360": [
		36.933276,
		-80.897565
	],
	"24361": [
		36.767265,
		-81.845258
	],
	"24363": [
		36.61663,
		-81.405048
	],
	"24366": [
		37.259482,
		-81.118583
	],
	"24368": [
		36.888029,
		-81.302492
	],
	"24370": [
		36.911415,
		-81.689789
	],
	"24374": [
		36.78376,
		-81.220305
	],
	"24375": [
		36.768944,
		-81.387144
	],
	"24377": [
		37.000269,
		-81.574692
	],
	"24378": [
		36.686691,
		-81.443367
	],
	"24380": [
		36.859701,
		-80.508764
	],
	"24381": [
		36.729989,
		-80.840655
	],
	"24382": [
		36.960016,
		-81.101367
	],
	"24401": [
		38.134387,
		-79.085564
	],
	"24411": [
		38.105128,
		-79.311238
	],
	"24412": [
		38.053722,
		-79.818136
	],
	"24413": [
		38.542454,
		-79.600289
	],
	"24415": [
		37.925,
		-79.317053
	],
	"24416": [
		37.722497,
		-79.360864
	],
	"24421": [
		38.24465,
		-79.245146
	],
	"24422": [
		37.830504,
		-79.759502
	],
	"24426": [
		37.764067,
		-80.085115
	],
	"24430": [
		38.086959,
		-79.355799
	],
	"24431": [
		38.170011,
		-78.842838
	],
	"24432": [
		38.14806,
		-79.443355
	],
	"24433": [
		38.423609,
		-79.424285
	],
	"24435": [
		37.87264,
		-79.301938
	],
	"24437": [
		38.220807,
		-78.935476
	],
	"24439": [
		37.993806,
		-79.489306
	],
	"24440": [
		37.999256,
		-79.165483
	],
	"24441": [
		38.226067,
		-78.824873
	],
	"24442": [
		38.37253,
		-79.384617
	],
	"24445": [
		37.941966,
		-79.891787
	],
	"24448": [
		37.79711,
		-79.788524
	],
	"24450": [
		37.778993,
		-79.526578
	],
	"24457": [
		37.763632,
		-79.943078
	],
	"24458": [
		38.315747,
		-79.527472
	],
	"24459": [
		38.020846,
		-79.292305
	],
	"24460": [
		38.01988,
		-79.656459
	],
	"24464": [
		37.874972,
		-79.094071
	],
	"24465": [
		38.384565,
		-79.647758
	],
	"24467": [
		38.254994,
		-78.971328
	],
	"24471": [
		38.31321,
		-78.78418
	],
	"24472": [
		37.941157,
		-79.208568
	],
	"24473": [
		37.934749,
		-79.415358
	],
	"24474": [
		37.805612,
		-79.84553
	],
	"24476": [
		37.974466,
		-79.227361
	],
	"24477": [
		38.004878,
		-79.042232
	],
	"24479": [
		38.163944,
		-79.239044
	],
	"24482": [
		38.205935,
		-78.996676
	],
	"24483": [
		37.812333,
		-79.230553
	],
	"24484": [
		38.155192,
		-79.78483
	],
	"24485": [
		38.267603,
		-79.333024
	],
	"24486": [
		38.296885,
		-78.924533
	],
	"24487": [
		38.183654,
		-79.597606
	],
	"24501": [
		37.359733,
		-79.141286
	],
	"24502": [
		37.360401,
		-79.221579
	],
	"24503": [
		37.454015,
		-79.249736
	],
	"24504": [
		37.365249,
		-79.048192
	],
	"24517": [
		37.147516,
		-79.23716
	],
	"24520": [
		36.586589,
		-79.029748
	],
	"24521": [
		37.633294,
		-79.100863
	],
	"24522": [
		37.376791,
		-78.778773
	],
	"24523": [
		37.344838,
		-79.523884
	],
	"24526": [
		37.543273,
		-79.415935
	],
	"24527": [
		36.736768,
		-79.341721
	],
	"24528": [
		37.079686,
		-78.876229
	],
	"24529": [
		36.626619,
		-78.646754
	],
	"24530": [
		36.807067,
		-79.619501
	],
	"24531": [
		36.842621,
		-79.453781
	],
	"24534": [
		36.867415,
		-78.770512
	],
	"24536": [
		37.495689,
		-79.326532
	],
	"24538": [
		37.345197,
		-78.962372
	],
	"24539": [
		36.8529,
		-78.914718
	],
	"24540": [
		36.634506,
		-79.426751
	],
	"24541": [
		36.588822,
		-79.5151
	],
	"24549": [
		36.70666,
		-79.504475
	],
	"24550": [
		37.23963,
		-79.245397
	],
	"24551": [
		37.356256,
		-79.324598
	],
	"24553": [
		37.545504,
		-78.81001
	],
	"24554": [
		37.120037,
		-79.071614
	],
	"24555": [
		37.669829,
		-79.484088
	],
	"24556": [
		37.375825,
		-79.399305
	],
	"24557": [
		36.969859,
		-79.306424
	],
	"24558": [
		36.774341,
		-78.953963
	],
	"24562": [
		37.695426,
		-78.637777
	],
	"24563": [
		37.0625,
		-79.279115
	],
	"24565": [
		36.85272,
		-79.189501
	],
	"24566": [
		36.731828,
		-79.252639
	],
	"24569": [
		37.042552,
		-79.125855
	],
	"24570": [
		37.34646,
		-79.424457
	],
	"24571": [
		37.132961,
		-79.372748
	],
	"24572": [
		37.464909,
		-79.095265
	],
	"24574": [
		37.57615,
		-79.253367
	],
	"24577": [
		36.943958,
		-78.98277
	],
	"24578": [
		37.659875,
		-79.562274
	],
	"24579": [
		37.585803,
		-79.502698
	],
	"24580": [
		36.579054,
		-78.673121
	],
	"24581": [
		37.655216,
		-78.805765
	],
	"24586": [
		36.607044,
		-79.276609
	],
	"24588": [
		37.262151,
		-79.096232
	],
	"24589": [
		36.760808,
		-78.758047
	],
	"24590": [
		37.796421,
		-78.490289
	],
	"24592": [
		36.675795,
		-78.965555
	],
	"24593": [
		37.322564,
		-78.902758
	],
	"24594": [
		36.646843,
		-79.178528
	],
	"24595": [
		37.559559,
		-79.082716
	],
	"24597": [
		36.782411,
		-79.110858
	],
	"24598": [
		36.60467,
		-78.788004
	],
	"24599": [
		37.623562,
		-78.72389
	],
	"24601": [
		37.193732,
		-81.649243
	],
	"24602": [
		37.183213,
		-81.65851
	],
	"24603": [
		37.355386,
		-82.190109
	],
	"24604": [
		37.211983,
		-81.538089
	],
	"24605": [
		37.254178,
		-81.371211
	],
	"24606": [
		37.286313,
		-81.398771
	],
	"24607": [
		37.293533,
		-82.262524
	],
	"24609": [
		37.0096,
		-81.807792
	],
	"24612": [
		37.09335,
		-81.838141
	],
	"24613": [
		37.265157,
		-81.336881
	],
	"24614": [
		37.298652,
		-82.071084
	],
	"24620": [
		37.431334,
		-82.011704
	],
	"24622": [
		37.214674,
		-81.789853
	],
	"24628": [
		37.282402,
		-82.222985
	],
	"24630": [
		37.178327,
		-81.465545
	],
	"24631": [
		37.217266,
		-81.990694
	],
	"24634": [
		37.267823,
		-81.902717
	],
	"24635": [
		37.312608,
		-81.362934
	],
	"24637": [
		37.061082,
		-81.713894
	],
	"24639": [
		37.160378,
		-81.888205
	],
	"24641": [
		37.111816,
		-81.802451
	],
	"24646": [
		37.143346,
		-82.02458
	],
	"24649": [
		37.063,
		-81.899472
	],
	"24651": [
		37.075529,
		-81.503095
	],
	"24656": [
		37.175055,
		-82.124994
	],
	"24657": [
		37.226515,
		-81.856782
	],
	"24701": [
		37.305951,
		-81.204941
	],
	"24712": [
		37.463059,
		-81.01501
	],
	"24714": [
		37.484469,
		-81.190073
	],
	"24715": [
		37.340462,
		-81.324132
	],
	"24716": [
		37.480042,
		-81.371826
	],
	"24719": [
		37.487167,
		-81.326726
	],
	"24724": [
		37.330881,
		-81.299757
	],
	"24726": [
		37.514751,
		-81.352074
	],
	"24729": [
		37.449867,
		-81.26001
	],
	"24731": [
		37.397966,
		-81.151064
	],
	"24733": [
		37.450768,
		-81.205194
	],
	"24736": [
		37.444189,
		-81.2774
	],
	"24737": [
		37.352245,
		-81.249309
	],
	"24738": [
		37.302041,
		-81.3097
	],
	"24740": [
		37.373457,
		-81.004791
	],
	"24747": [
		37.378752,
		-81.299696
	],
	"24801": [
		37.448883,
		-81.576989
	],
	"24808": [
		37.330026,
		-81.422403
	],
	"24811": [
		37.399166,
		-81.771251
	],
	"24813": [
		37.357412,
		-81.720113
	],
	"24815": [
		37.241667,
		-81.659603
	],
	"24816": [
		37.461102,
		-81.705939
	],
	"24817": [
		37.352268,
		-81.80478
	],
	"24818": [
		37.602702,
		-81.624946
	],
	"24822": [
		37.647094,
		-81.697294
	],
	"24823": [
		37.67197,
		-81.751948
	],
	"24826": [
		37.293267,
		-81.623592
	],
	"24827": [
		37.75327,
		-81.64148
	],
	"24828": [
		37.4989,
		-81.636635
	],
	"24830": [
		37.323125,
		-81.506122
	],
	"24831": [
		37.394105,
		-81.411521
	],
	"24834": [
		37.547689,
		-81.630566
	],
	"24836": [
		37.333874,
		-81.55862
	],
	"24839": [
		37.560676,
		-81.738389
	],
	"24843": [
		37.487144,
		-81.7101
	],
	"24844": [
		37.462452,
		-81.806627
	],
	"24845": [
		37.517953,
		-81.817841
	],
	"24846": [
		37.529522,
		-81.91286
	],
	"24847": [
		37.577109,
		-81.418416
	],
	"24848": [
		37.303745,
		-81.460677
	],
	"24849": [
		37.665763,
		-81.542748
	],
	"24850": [
		37.32097,
		-81.850505
	],
	"24851": [
		37.601371,
		-81.833685
	],
	"24853": [
		37.435447,
		-81.511823
	],
	"24854": [
		37.736493,
		-81.572685
	],
	"24857": [
		37.67251,
		-81.660302
	],
	"24860": [
		37.66017,
		-81.607608
	],
	"24861": [
		37.350951,
		-81.36313
	],
	"24862": [
		37.469177,
		-81.964569
	],
	"24866": [
		37.248133,
		-81.580323
	],
	"24867": [
		37.595764,
		-81.444714
	],
	"24868": [
		37.43845,
		-81.389063
	],
	"24869": [
		37.562684,
		-81.838107
	],
	"24870": [
		37.765445,
		-81.510219
	],
	"24871": [
		37.359301,
		-81.468304
	],
	"24872": [
		37.449369,
		-81.920479
	],
	"24873": [
		37.366148,
		-81.878193
	],
	"24874": [
		37.542528,
		-81.555341
	],
	"24878": [
		37.439308,
		-81.625265
	],
	"24879": [
		37.313896,
		-81.758686
	],
	"24880": [
		37.651583,
		-81.530554
	],
	"24881": [
		37.431342,
		-81.684596
	],
	"24882": [
		37.625597,
		-81.766
	],
	"24884": [
		37.23047,
		-81.604088
	],
	"24887": [
		37.373345,
		-81.404173
	],
	"24888": [
		37.392804,
		-81.483252
	],
	"24892": [
		37.32694,
		-81.687785
	],
	"24894": [
		37.274965,
		-81.713671
	],
	"24898": [
		37.593853,
		-81.610128
	],
	"24901": [
		37.855406,
		-80.451557
	],
	"24910": [
		37.750526,
		-80.648133
	],
	"24915": [
		38.465457,
		-79.77717
	],
	"24916": [
		37.828599,
		-80.581103
	],
	"24918": [
		37.522173,
		-80.74531
	],
	"24920": [
		38.580079,
		-79.704212
	],
	"24924": [
		38.201314,
		-80.16489
	],
	"24925": [
		37.714707,
		-80.376437
	],
	"24927": [
		38.375187,
		-79.957107
	],
	"24931": [
		37.919011,
		-80.588601
	],
	"24934": [
		38.333579,
		-79.891016
	],
	"24935": [
		37.56653,
		-80.808493
	],
	"24938": [
		37.893492,
		-80.387188
	],
	"24941": [
		37.588011,
		-80.346704
	],
	"24944": [
		38.389659,
		-79.78368
	],
	"24945": [
		37.541978,
		-80.677193
	],
	"24946": [
		38.18442,
		-80.262312
	],
	"24951": [
		37.484254,
		-80.643612
	],
	"24954": [
		38.224907,
		-80.056049
	],
	"24957": [
		37.885394,
		-80.425002
	],
	"24962": [
		37.662404,
		-80.718357
	],
	"24963": [
		37.436413,
		-80.758492
	],
	"24966": [
		38.078505,
		-80.362598
	],
	"24970": [
		37.728072,
		-80.474482
	],
	"24974": [
		37.641768,
		-80.448356
	],
	"24976": [
		37.656964,
		-80.511709
	],
	"24977": [
		37.897155,
		-80.687105
	],
	"24981": [
		37.629807,
		-80.735884
	],
	"24983": [
		37.57499,
		-80.518586
	],
	"24984": [
		37.49353,
		-80.40502
	],
	"24986": [
		37.921086,
		-80.145726
	],
	"24991": [
		38.021577,
		-80.497448
	],
	"25002": [
		38.135764,
		-81.24173
	],
	"25003": [
		38.252558,
		-81.784866
	],
	"25005": [
		38.583444,
		-81.256426
	],
	"25007": [
		37.82484,
		-81.430458
	],
	"25008": [
		37.947061,
		-81.34397
	],
	"25009": [
		38.202305,
		-81.684573
	],
	"25011": [
		38.508579,
		-81.839417
	],
	"25015": [
		38.246134,
		-81.497258
	],
	"25019": [
		38.371626,
		-81.068876
	],
	"25021": [
		37.922106,
		-81.679778
	],
	"25022": [
		37.858178,
		-81.812567
	],
	"25024": [
		38.159082,
		-81.623721
	],
	"25025": [
		38.31469,
		-81.411393
	],
	"25028": [
		37.947147,
		-81.725572
	],
	"25030": [
		38.453317,
		-81.225847
	],
	"25031": [
		38.148617,
		-81.275148
	],
	"25033": [
		38.612061,
		-81.924382
	],
	"25035": [
		38.165239,
		-81.52099
	],
	"25036": [
		38.214746,
		-81.258404
	],
	"25039": [
		38.234956,
		-81.36326
	],
	"25040": [
		38.126501,
		-81.235109
	],
	"25043": [
		38.425757,
		-81.003154
	],
	"25044": [
		37.911676,
		-81.368705
	],
	"25045": [
		38.447483,
		-81.329322
	],
	"25047": [
		37.920527,
		-81.767625
	],
	"25048": [
		37.945828,
		-81.437333
	],
	"25049": [
		38.115286,
		-81.558257
	],
	"25051": [
		38.156947,
		-81.709791
	],
	"25053": [
		38.036736,
		-81.878922
	],
	"25054": [
		38.11053,
		-81.48849
	],
	"25057": [
		38.120375,
		-81.253436
	],
	"25059": [
		38.220557,
		-81.20275
	],
	"25060": [
		37.94454,
		-81.427325
	],
	"25061": [
		38.174553,
		-81.439835
	],
	"25062": [
		37.880313,
		-81.432653
	],
	"25063": [
		38.570368,
		-80.929492
	],
	"25064": [
		38.377043,
		-81.749626
	],
	"25067": [
		38.201538,
		-81.442935
	],
	"25070": [
		38.545843,
		-81.931687
	],
	"25071": [
		38.462502,
		-81.466853
	],
	"25075": [
		38.060218,
		-81.405213
	],
	"25076": [
		37.865019,
		-81.942166
	],
	"25081": [
		38.075051,
		-81.754659
	],
	"25082": [
		38.604207,
		-82.031043
	],
	"25083": [
		38.069889,
		-81.367758
	],
	"25085": [
		38.172682,
		-81.20548
	],
	"25086": [
		38.203982,
		-81.41735
	],
	"25088": [
		38.398602,
		-81.208823
	],
	"25090": [
		38.155129,
		-81.221003
	],
	"25093": [
		37.98311,
		-81.669642
	],
	"25102": [
		38.191015,
		-81.374818
	],
	"25103": [
		38.180757,
		-81.381089
	],
	"25106": [
		38.788509,
		-82.111081
	],
	"25107": [
		38.229749,
		-81.621635
	],
	"25108": [
		37.973583,
		-81.881188
	],
	"25109": [
		38.526763,
		-81.851908
	],
	"25110": [
		38.21843,
		-81.314979
	],
	"25111": [
		38.352883,
		-81.128837
	],
	"25112": [
		38.380263,
		-81.767141
	],
	"25113": [
		38.553281,
		-81.046284
	],
	"25114": [
		37.987318,
		-81.786336
	],
	"25115": [
		38.122192,
		-81.182251
	],
	"25118": [
		38.11166,
		-81.305965
	],
	"25119": [
		38.041356,
		-81.276239
	],
	"25121": [
		37.916211,
		-81.897277
	],
	"25123": [
		38.730175,
		-81.900044
	],
	"25124": [
		38.62249,
		-81.778935
	],
	"25125": [
		38.311679,
		-81.21523
	],
	"25126": [
		38.202733,
		-81.372678
	],
	"25130": [
		38.032999,
		-81.752251
	],
	"25132": [
		38.293532,
		-81.344598
	],
	"25133": [
		38.477604,
		-81.142927
	],
	"25134": [
		38.16283,
		-81.490556
	],
	"25136": [
		38.150173,
		-81.327319
	],
	"25139": [
		38.137583,
		-81.291458
	],
	"25140": [
		37.839893,
		-81.498515
	],
	"25141": [
		38.626886,
		-81.025349
	],
	"25142": [
		38.153554,
		-81.729882
	],
	"25143": [
		38.417874,
		-81.819479
	],
	"25148": [
		38.045589,
		-81.56173
	],
	"25149": [
		37.949155,
		-81.771997
	],
	"25152": [
		38.058182,
		-81.250696
	],
	"25154": [
		38.120576,
		-81.713325
	],
	"25156": [
		38.183259,
		-81.336855
	],
	"25159": [
		38.523611,
		-81.788899
	],
	"25160": [
		38.282203,
		-81.272662
	],
	"25161": [
		38.052784,
		-81.318726
	],
	"25162": [
		38.207558,
		-81.387342
	],
	"25164": [
		38.509184,
		-81.204946
	],
	"25165": [
		38.146044,
		-81.649422
	],
	"25168": [
		38.560349,
		-81.87985
	],
	"25169": [
		38.175825,
		-81.78984
	],
	"25173": [
		38.091155,
		-81.229776
	],
	"25174": [
		37.86566,
		-81.410962
	],
	"25177": [
		38.367284,
		-81.848331
	],
	"25180": [
		37.790262,
		-81.436271
	],
	"25181": [
		38.04929,
		-81.6412
	],
	"25183": [
		37.914012,
		-81.790052
	],
	"25185": [
		38.235187,
		-81.238016
	],
	"25186": [
		38.182372,
		-81.271197
	],
	"25187": [
		38.724539,
		-82.029452
	],
	"25193": [
		38.03546,
		-81.507099
	],
	"25201": [
		38.335613,
		-81.490465
	],
	"25202": [
		38.316375,
		-81.859088
	],
	"25203": [
		38.015993,
		-81.882308
	],
	"25204": [
		37.925321,
		-81.61456
	],
	"25205": [
		38.019487,
		-81.793006
	],
	"25206": [
		37.997807,
		-81.695777
	],
	"25208": [
		37.836513,
		-81.639765
	],
	"25209": [
		37.952988,
		-81.519912
	],
	"25211": [
		38.46869,
		-80.888411
	],
	"25213": [
		38.512666,
		-81.913305
	],
	"25214": [
		38.185826,
		-81.542914
	],
	"25234": [
		38.811456,
		-81.138257
	],
	"25235": [
		38.669527,
		-81.0895
	],
	"25239": [
		38.83866,
		-81.846681
	],
	"25241": [
		38.787975,
		-81.810031
	],
	"25243": [
		38.686717,
		-81.479468
	],
	"25244": [
		38.767566,
		-81.550872
	],
	"25245": [
		38.69742,
		-81.755385
	],
	"25247": [
		39.005944,
		-82.006294
	],
	"25248": [
		38.644268,
		-81.613862
	],
	"25251": [
		38.620525,
		-81.236323
	],
	"25252": [
		38.950961,
		-81.511175
	],
	"25253": [
		38.921064,
		-81.96149
	],
	"25259": [
		38.673526,
		-81.251761
	],
	"25260": [
		39.003788,
		-82.031958
	],
	"25261": [
		38.821662,
		-81.080487
	],
	"25262": [
		38.907802,
		-81.826041
	],
	"25264": [
		38.859864,
		-81.893884
	],
	"25265": [
		38.986622,
		-81.957737
	],
	"25266": [
		38.605981,
		-81.162323
	],
	"25267": [
		38.833599,
		-80.940901
	],
	"25268": [
		38.717785,
		-81.074536
	],
	"25270": [
		38.864758,
		-81.424903
	],
	"25271": [
		38.78851,
		-81.692539
	],
	"25275": [
		38.921509,
		-81.610584
	],
	"25276": [
		38.78208,
		-81.328691
	],
	"25285": [
		38.539656,
		-81.101556
	],
	"25286": [
		38.615199,
		-81.407985
	],
	"25287": [
		38.954715,
		-82.051426
	],
	"25301": [
		38.350719,
		-81.630359
	],
	"25302": [
		38.393184,
		-81.59547
	],
	"25303": [
		38.359561,
		-81.68613
	],
	"25304": [
		38.306056,
		-81.593194
	],
	"25305": [
		38.337629,
		-81.612742
	],
	"25306": [
		38.312522,
		-81.499429
	],
	"25309": [
		38.308648,
		-81.749531
	],
	"25311": [
		38.366863,
		-81.557035
	],
	"25312": [
		38.448403,
		-81.659346
	],
	"25313": [
		38.419303,
		-81.766456
	],
	"25314": [
		38.308083,
		-81.640254
	],
	"25315": [
		38.222276,
		-81.56033
	],
	"25320": [
		38.539851,
		-81.633191
	],
	"25401": [
		39.457116,
		-77.972465
	],
	"25403": [
		39.47485,
		-78.011639
	],
	"25404": [
		39.483025,
		-77.890325
	],
	"25405": [
		39.409184,
		-77.961535
	],
	"25411": [
		39.548748,
		-78.22147
	],
	"25413": [
		39.310588,
		-78.055948
	],
	"25414": [
		39.242415,
		-77.865749
	],
	"25419": [
		39.58288,
		-77.885136
	],
	"25420": [
		39.381565,
		-78.115041
	],
	"25422": [
		39.544988,
		-78.354289
	],
	"25425": [
		39.306168,
		-77.773612
	],
	"25427": [
		39.520704,
		-78.085289
	],
	"25428": [
		39.380635,
		-78.02221
	],
	"25430": [
		39.327184,
		-77.937916
	],
	"25431": [
		39.483762,
		-78.574312
	],
	"25432": [
		39.305755,
		-77.78429
	],
	"25434": [
		39.439723,
		-78.46111
	],
	"25437": [
		39.427797,
		-78.570489
	],
	"25438": [
		39.323441,
		-77.864008
	],
	"25442": [
		39.370198,
		-77.832595
	],
	"25443": [
		39.43709,
		-77.814455
	],
	"25444": [
		39.412854,
		-78.523889
	],
	"25446": [
		39.241588,
		-77.953405
	],
	"25501": [
		38.153876,
		-81.969643
	],
	"25502": [
		38.656399,
		-82.117158
	],
	"25503": [
		38.612591,
		-82.120957
	],
	"25504": [
		38.376421,
		-82.270009
	],
	"25505": [
		38.012295,
		-82.03119
	],
	"25506": [
		38.20472,
		-82.18702
	],
	"25507": [
		38.395279,
		-82.563009
	],
	"25508": [
		37.96394,
		-82.021969
	],
	"25510": [
		38.382296,
		-82.082999
	],
	"25511": [
		38.051218,
		-82.33503
	],
	"25512": [
		38.184728,
		-82.327278
	],
	"25514": [
		38.10026,
		-82.528704
	],
	"25515": [
		38.756623,
		-82.146875
	],
	"25517": [
		38.108275,
		-82.443166
	],
	"25520": [
		38.561148,
		-82.182864
	],
	"25521": [
		38.219782,
		-81.999378
	],
	"25523": [
		38.278729,
		-82.049132
	],
	"25524": [
		38.021624,
		-82.117351
	],
	"25526": [
		38.394443,
		-81.991309
	],
	"25529": [
		38.152577,
		-81.846879
	],
	"25530": [
		38.35838,
		-82.576854
	],
	"25534": [
		38.084433,
		-82.274956
	],
	"25535": [
		38.308557,
		-82.434852
	],
	"25537": [
		38.533383,
		-82.281971
	],
	"25540": [
		38.182609,
		-82.156471
	],
	"25541": [
		38.480587,
		-82.130164
	],
	"25545": [
		38.458992,
		-82.21744
	],
	"25547": [
		37.916034,
		-81.965478
	],
	"25550": [
		38.863326,
		-82.067437
	],
	"25555": [
		38.213877,
		-82.549652
	],
	"25557": [
		38.105832,
		-82.171951
	],
	"25559": [
		38.324948,
		-82.229139
	],
	"25560": [
		38.445189,
		-81.899312
	],
	"25564": [
		38.272188,
		-81.901012
	],
	"25565": [
		38.102343,
		-81.964488
	],
	"25567": [
		38.215953,
		-81.870097
	],
	"25570": [
		38.218917,
		-82.425284
	],
	"25571": [
		38.313493,
		-82.155813
	],
	"25573": [
		38.23218,
		-81.941115
	],
	"25601": [
		37.862732,
		-82.009247
	],
	"25606": [
		37.764974,
		-81.819803
	],
	"25607": [
		37.784917,
		-81.784145
	],
	"25608": [
		37.574102,
		-81.889362
	],
	"25611": [
		37.688752,
		-81.840779
	],
	"25617": [
		37.719369,
		-81.802423
	],
	"25621": [
		37.626931,
		-81.941828
	],
	"25624": [
		37.899687,
		-81.981114
	],
	"25625": [
		37.81936,
		-82.081236
	],
	"25628": [
		37.768114,
		-81.862466
	],
	"25630": [
		37.788222,
		-81.691063
	],
	"25632": [
		37.729676,
		-81.92406
	],
	"25634": [
		37.739457,
		-81.847864
	],
	"25635": [
		37.707103,
		-81.885979
	],
	"25637": [
		37.861792,
		-82.029495
	],
	"25638": [
		37.758843,
		-81.990584
	],
	"25639": [
		37.881353,
		-81.958345
	],
	"25644": [
		37.704742,
		-82.022096
	],
	"25646": [
		37.847286,
		-81.883987
	],
	"25647": [
		37.78681,
		-81.984432
	],
	"25649": [
		37.875404,
		-82.09308
	],
	"25650": [
		37.670367,
		-81.819109
	],
	"25651": [
		37.601637,
		-81.987573
	],
	"25652": [
		37.790733,
		-82.045124
	],
	"25653": [
		37.828964,
		-81.998297
	],
	"25654": [
		37.795626,
		-81.873719
	],
	"25661": [
		37.736157,
		-82.273934
	],
	"25666": [
		37.926751,
		-82.248845
	],
	"25669": [
		37.932138,
		-82.391484
	],
	"25670": [
		37.721161,
		-82.158989
	],
	"25671": [
		37.883858,
		-82.191926
	],
	"25672": [
		37.581336,
		-82.113087
	],
	"25674": [
		37.868833,
		-82.351577
	],
	"25676": [
		37.837737,
		-82.193065
	],
	"25678": [
		37.590312,
		-82.065222
	],
	"25688": [
		37.621295,
		-82.119118
	],
	"25690": [
		37.68978,
		-82.124445
	],
	"25692": [
		37.63629,
		-82.109819
	],
	"25696": [
		37.679034,
		-82.115913
	],
	"25699": [
		37.961653,
		-82.33255
	],
	"25701": [
		38.365689,
		-82.40525
	],
	"25702": [
		38.434723,
		-82.314415
	],
	"25703": [
		38.424914,
		-82.418697
	],
	"25704": [
		38.30761,
		-82.487363
	],
	"25705": [
		38.404576,
		-82.360178
	],
	"25801": [
		37.822892,
		-81.266199
	],
	"25810": [
		37.596671,
		-81.349283
	],
	"25811": [
		37.562416,
		-81.296146
	],
	"25812": [
		38.181993,
		-81.122676
	],
	"25813": [
		37.761846,
		-81.101871
	],
	"25817": [
		37.758442,
		-81.397501
	],
	"25818": [
		37.860276,
		-81.191992
	],
	"25820": [
		37.515101,
		-81.162702
	],
	"25823": [
		37.661591,
		-81.210671
	],
	"25825": [
		37.644282,
		-81.082976
	],
	"25826": [
		37.574891,
		-81.356758
	],
	"25827": [
		37.739101,
		-81.254768
	],
	"25831": [
		37.959313,
		-80.930792
	],
	"25832": [
		37.715324,
		-81.118819
	],
	"25836": [
		37.774944,
		-81.278687
	],
	"25837": [
		38.048142,
		-81.011901
	],
	"25839": [
		37.778207,
		-81.387207
	],
	"25840": [
		38.042891,
		-81.122665
	],
	"25841": [
		37.560685,
		-81.09243
	],
	"25843": [
		37.609609,
		-81.118411
	],
	"25844": [
		37.800275,
		-81.383269
	],
	"25845": [
		37.695336,
		-81.525185
	],
	"25846": [
		37.906328,
		-81.132507
	],
	"25848": [
		37.718147,
		-81.428265
	],
	"25849": [
		37.729977,
		-81.279707
	],
	"25853": [
		37.640411,
		-81.312103
	],
	"25854": [
		38.136747,
		-80.979861
	],
	"25855": [
		37.936058,
		-81.156062
	],
	"25857": [
		37.64425,
		-81.281535
	],
	"25862": [
		38.085516,
		-81.061427
	],
	"25864": [
		37.876046,
		-81.036063
	],
	"25865": [
		37.71154,
		-81.362406
	],
	"25868": [
		38.086709,
		-80.958315
	],
	"25870": [
		37.630165,
		-81.389346
	],
	"25871": [
		37.769825,
		-81.210442
	],
	"25873": [
		37.750066,
		-81.213823
	],
	"25875": [
		37.679114,
		-81.460808
	],
	"25876": [
		37.631101,
		-81.449139
	],
	"25878": [
		37.715436,
		-81.229778
	],
	"25879": [
		37.982258,
		-81.105669
	],
	"25880": [
		37.878948,
		-81.207573
	],
	"25882": [
		37.632143,
		-81.393396
	],
	"25901": [
		37.950702,
		-81.11705
	],
	"25902": [
		37.569827,
		-81.217459
	],
	"25904": [
		37.928234,
		-81.283417
	],
	"25906": [
		37.836755,
		-81.114354
	],
	"25907": [
		37.856017,
		-81.086212
	],
	"25908": [
		37.67532,
		-81.247167
	],
	"25911": [
		37.758042,
		-81.167172
	],
	"25913": [
		37.714061,
		-81.489465
	],
	"25915": [
		37.590131,
		-81.29126
	],
	"25916": [
		37.675614,
		-81.498056
	],
	"25917": [
		37.991169,
		-81.218273
	],
	"25918": [
		37.7532,
		-80.995641
	],
	"25920": [
		37.688595,
		-81.33404
	],
	"25921": [
		37.672258,
		-81.31412
	],
	"25922": [
		37.465967,
		-81.105042
	],
	"25928": [
		37.558121,
		-81.332573
	],
	"25932": [
		37.752007,
		-81.299566
	],
	"25936": [
		37.923452,
		-81.039103
	],
	"25938": [
		38.153072,
		-81.046857
	],
	"25942": [
		38.017647,
		-80.995148
	],
	"25951": [
		37.662049,
		-80.866432
	],
	"25958": [
		38.022833,
		-80.75001
	],
	"25962": [
		37.985767,
		-80.799157
	],
	"25969": [
		37.617988,
		-81.001928
	],
	"25971": [
		37.477419,
		-80.977446
	],
	"25972": [
		38.035716,
		-80.746126
	],
	"25976": [
		37.848997,
		-80.842768
	],
	"25977": [
		37.798478,
		-80.903302
	],
	"25978": [
		37.620672,
		-80.945014
	],
	"25979": [
		37.510942,
		-80.913482
	],
	"25981": [
		38.097057,
		-80.711083
	],
	"25984": [
		38.029233,
		-80.597366
	],
	"25985": [
		37.783343,
		-80.813413
	],
	"25989": [
		37.680938,
		-81.069851
	],
	"26003": [
		40.070163,
		-80.647242
	],
	"26030": [
		40.220216,
		-80.656268
	],
	"26031": [
		40.009395,
		-80.729265
	],
	"26032": [
		40.192393,
		-80.54047
	],
	"26033": [
		39.83024,
		-80.578022
	],
	"26034": [
		40.598473,
		-80.552334
	],
	"26035": [
		40.3449,
		-80.553539
	],
	"26036": [
		39.97772,
		-80.554299
	],
	"26037": [
		40.335562,
		-80.584518
	],
	"26038": [
		39.964591,
		-80.724103
	],
	"26039": [
		39.799369,
		-80.674066
	],
	"26040": [
		39.988525,
		-80.715962
	],
	"26041": [
		39.887241,
		-80.705476
	],
	"26047": [
		40.520184,
		-80.589222
	],
	"26050": [
		40.607741,
		-80.607637
	],
	"26055": [
		39.7543,
		-80.782572
	],
	"26056": [
		40.531275,
		-80.577127
	],
	"26059": [
		40.057338,
		-80.605263
	],
	"26060": [
		40.110039,
		-80.557624
	],
	"26062": [
		40.42669,
		-80.560679
	],
	"26070": [
		40.259803,
		-80.580032
	],
	"26074": [
		40.159897,
		-80.595416
	],
	"26075": [
		40.194622,
		-80.662966
	],
	"26101": [
		39.240324,
		-81.575872
	],
	"26104": [
		39.276141,
		-81.480363
	],
	"26105": [
		39.329575,
		-81.514622
	],
	"26133": [
		39.123282,
		-81.672414
	],
	"26134": [
		39.368717,
		-81.290434
	],
	"26136": [
		38.959489,
		-81.137586
	],
	"26137": [
		38.995599,
		-81.049374
	],
	"26138": [
		39.023425,
		-81.206015
	],
	"26141": [
		38.933552,
		-81.24588
	],
	"26142": [
		39.205781,
		-81.449266
	],
	"26143": [
		39.056366,
		-81.372736
	],
	"26146": [
		39.457065,
		-81.036844
	],
	"26147": [
		38.904543,
		-81.07539
	],
	"26148": [
		39.058499,
		-81.182808
	],
	"26149": [
		39.483305,
		-80.825642
	],
	"26150": [
		39.157283,
		-81.535898
	],
	"26151": [
		38.879222,
		-81.172051
	],
	"26152": [
		39.010062,
		-81.195907
	],
	"26155": [
		39.630056,
		-80.763963
	],
	"26159": [
		39.598891,
		-80.921996
	],
	"26160": [
		38.981202,
		-81.412057
	],
	"26161": [
		39.180564,
		-81.2482
	],
	"26164": [
		39.0107,
		-81.701191
	],
	"26167": [
		39.538939,
		-80.743385
	],
	"26169": [
		39.072207,
		-81.571589
	],
	"26170": [
		39.358255,
		-81.167847
	],
	"26175": [
		39.537188,
		-80.974755
	],
	"26178": [
		39.058252,
		-81.038103
	],
	"26180": [
		39.194913,
		-81.3663
	],
	"26181": [
		39.209354,
		-81.664619
	],
	"26184": [
		39.294993,
		-81.35272
	],
	"26187": [
		39.37325,
		-81.447125
	],
	"26201": [
		39.001871,
		-80.197424
	],
	"26202": [
		38.210138,
		-80.629587
	],
	"26203": [
		38.548476,
		-80.58844
	],
	"26205": [
		38.326803,
		-80.650399
	],
	"26206": [
		38.442315,
		-80.532153
	],
	"26208": [
		38.325171,
		-80.498788
	],
	"26209": [
		38.428758,
		-79.988943
	],
	"26215": [
		38.707115,
		-80.374949
	],
	"26217": [
		38.611013,
		-80.446813
	],
	"26218": [
		38.844938,
		-80.266223
	],
	"26222": [
		38.660184,
		-80.343304
	],
	"26224": [
		38.74031,
		-80.182939
	],
	"26228": [
		38.754405,
		-80.370949
	],
	"26230": [
		38.671854,
		-80.175706
	],
	"26234": [
		38.773784,
		-80.31511
	],
	"26236": [
		38.744665,
		-80.234661
	],
	"26237": [
		38.845411,
		-80.15068
	],
	"26238": [
		39.108814,
		-80.174014
	],
	"26241": [
		38.932602,
		-79.788254
	],
	"26250": [
		39.033465,
		-79.962538
	],
	"26253": [
		38.781095,
		-79.867788
	],
	"26254": [
		38.880658,
		-79.662794
	],
	"26257": [
		38.91917,
		-80.003647
	],
	"26259": [
		38.8029,
		-79.896056
	],
	"26260": [
		39.08233,
		-79.424054
	],
	"26261": [
		38.202704,
		-80.545044
	],
	"26263": [
		38.94891,
		-79.437597
	],
	"26264": [
		38.575718,
		-79.827132
	],
	"26266": [
		38.412307,
		-80.475832
	],
	"26267": [
		38.947718,
		-80.091877
	],
	"26268": [
		38.748961,
		-79.738897
	],
	"26269": [
		39.10561,
		-79.620053
	],
	"26270": [
		38.863204,
		-79.578017
	],
	"26271": [
		39.034698,
		-79.558784
	],
	"26273": [
		38.624994,
		-79.967513
	],
	"26275": [
		38.976177,
		-79.951043
	],
	"26276": [
		39.025525,
		-79.772894
	],
	"26278": [
		38.825363,
		-80.030486
	],
	"26280": [
		38.729568,
		-80.029552
	],
	"26282": [
		38.521675,
		-80.16247
	],
	"26283": [
		39.062858,
		-79.81258
	],
	"26285": [
		38.912935,
		-79.937516
	],
	"26287": [
		39.166016,
		-79.687509
	],
	"26288": [
		38.512962,
		-80.347136
	],
	"26291": [
		38.394596,
		-80.154407
	],
	"26292": [
		39.141915,
		-79.533672
	],
	"26293": [
		38.782444,
		-79.93579
	],
	"26294": [
		38.531451,
		-80.034309
	],
	"26296": [
		38.764498,
		-79.553568
	],
	"26298": [
		38.471041,
		-80.253444
	],
	"26301": [
		39.301498,
		-80.393977
	],
	"26320": [
		39.404104,
		-80.812062
	],
	"26321": [
		39.046479,
		-80.674595
	],
	"26323": [
		39.262588,
		-80.29061
	],
	"26325": [
		39.098947,
		-80.904803
	],
	"26327": [
		39.122886,
		-80.94277
	],
	"26330": [
		39.285269,
		-80.220851
	],
	"26335": [
		38.843539,
		-80.684125
	],
	"26337": [
		39.230232,
		-81.160993
	],
	"26338": [
		39.076885,
		-80.619539
	],
	"26339": [
		39.422207,
		-80.613976
	],
	"26342": [
		39.033601,
		-80.85483
	],
	"26343": [
		38.82223,
		-80.421976
	],
	"26346": [
		39.29,
		-81.060074
	],
	"26347": [
		39.256558,
		-80.126099
	],
	"26348": [
		39.462415,
		-80.545251
	],
	"26349": [
		39.235703,
		-80.130286
	],
	"26351": [
		38.926224,
		-80.837517
	],
	"26354": [
		39.34813,
		-80.031779
	],
	"26361": [
		39.366746,
		-80.317599
	],
	"26362": [
		39.152149,
		-81.065351
	],
	"26366": [
		39.381255,
		-80.334489
	],
	"26369": [
		39.333961,
		-80.331754
	],
	"26372": [
		38.959136,
		-80.346572
	],
	"26374": [
		39.452313,
		-79.875295
	],
	"26376": [
		38.784372,
		-80.453871
	],
	"26377": [
		39.496261,
		-80.647037
	],
	"26378": [
		39.121091,
		-80.437639
	],
	"26384": [
		38.981938,
		-80.706771
	],
	"26385": [
		39.160459,
		-80.353915
	],
	"26386": [
		39.395847,
		-80.405822
	],
	"26404": [
		39.33584,
		-80.306513
	],
	"26405": [
		39.225164,
		-79.910422
	],
	"26408": [
		39.196594,
		-80.306444
	],
	"26410": [
		39.404974,
		-79.808333
	],
	"26411": [
		39.182862,
		-80.712694
	],
	"26412": [
		38.869257,
		-80.529818
	],
	"26415": [
		39.288299,
		-80.939205
	],
	"26416": [
		39.157139,
		-80.023725
	],
	"26419": [
		39.487693,
		-80.686388
	],
	"26421": [
		39.181955,
		-80.924287
	],
	"26422": [
		39.29449,
		-80.443881
	],
	"26424": [
		39.266882,
		-80.173598
	],
	"26425": [
		39.275651,
		-79.760271
	],
	"26426": [
		39.287032,
		-80.564431
	],
	"26430": [
		38.871117,
		-80.763586
	],
	"26431": [
		39.399028,
		-80.295345
	],
	"26435": [
		39.266587,
		-80.092281
	],
	"26436": [
		39.297278,
		-80.719427
	],
	"26437": [
		39.525975,
		-80.50893
	],
	"26438": [
		39.346605,
		-80.319108
	],
	"26440": [
		39.321695,
		-79.918717
	],
	"26443": [
		39.075944,
		-80.753162
	],
	"26444": [
		39.363716,
		-79.770661
	],
	"26447": [
		38.911775,
		-80.479076
	],
	"26448": [
		39.403007,
		-80.491282
	],
	"26451": [
		39.207743,
		-80.402248
	],
	"26452": [
		39.037157,
		-80.528154
	],
	"26456": [
		39.26294,
		-80.774047
	],
	"26501": [
		39.634091,
		-80.036839
	],
	"26505": [
		39.649517,
		-79.945258
	],
	"26508": [
		39.602633,
		-79.895396
	],
	"26519": [
		39.569166,
		-79.627057
	],
	"26520": [
		39.496998,
		-79.823625
	],
	"26521": [
		39.713283,
		-80.228143
	],
	"26525": [
		39.654026,
		-79.62581
	],
	"26534": [
		39.648779,
		-79.999178
	],
	"26537": [
		39.488133,
		-79.709884
	],
	"26541": [
		39.695015,
		-80.125243
	],
	"26542": [
		39.574651,
		-79.782809
	],
	"26543": [
		39.664624,
		-79.999859
	],
	"26547": [
		39.511738,
		-79.813851
	],
	"26554": [
		39.465392,
		-80.109845
	],
	"26559": [
		39.501274,
		-80.168209
	],
	"26560": [
		39.541991,
		-80.146976
	],
	"26562": [
		39.647266,
		-80.460604
	],
	"26563": [
		39.48238,
		-80.27357
	],
	"26568": [
		39.423924,
		-80.27807
	],
	"26570": [
		39.633955,
		-80.226835
	],
	"26571": [
		39.526563,
		-80.262027
	],
	"26572": [
		39.486629,
		-80.307759
	],
	"26574": [
		39.588251,
		-80.188592
	],
	"26575": [
		39.677768,
		-80.441399
	],
	"26576": [
		39.492501,
		-80.254748
	],
	"26581": [
		39.670691,
		-80.574747
	],
	"26582": [
		39.528793,
		-80.380088
	],
	"26585": [
		39.618451,
		-80.430782
	],
	"26586": [
		39.521959,
		-80.101624
	],
	"26587": [
		39.517883,
		-80.292761
	],
	"26588": [
		39.578871,
		-80.143989
	],
	"26590": [
		39.669082,
		-80.312306
	],
	"26591": [
		39.451607,
		-80.296284
	],
	"26601": [
		38.617423,
		-80.622737
	],
	"26610": [
		38.457591,
		-80.739509
	],
	"26611": [
		38.846104,
		-80.846298
	],
	"26615": [
		38.787252,
		-80.71919
	],
	"26617": [
		38.501096,
		-80.832446
	],
	"26619": [
		38.751656,
		-80.705437
	],
	"26621": [
		38.713341,
		-80.543405
	],
	"26623": [
		38.655505,
		-80.871607
	],
	"26624": [
		38.719427,
		-80.794832
	],
	"26627": [
		38.752473,
		-80.585064
	],
	"26629": [
		38.56367,
		-80.704268
	],
	"26631": [
		38.812867,
		-80.54048
	],
	"26636": [
		38.743911,
		-80.95825
	],
	"26638": [
		38.768006,
		-80.999466
	],
	"26651": [
		38.334344,
		-80.887038
	],
	"26656": [
		38.275784,
		-81.16267
	],
	"26660": [
		38.353505,
		-80.692042
	],
	"26662": [
		38.271503,
		-80.742058
	],
	"26676": [
		38.160011,
		-80.647778
	],
	"26678": [
		38.178882,
		-80.916062
	],
	"26679": [
		38.173997,
		-80.805128
	],
	"26680": [
		38.093333,
		-80.872973
	],
	"26681": [
		38.233199,
		-80.731681
	],
	"26684": [
		38.164963,
		-80.845681
	],
	"26690": [
		38.175264,
		-81.089305
	],
	"26691": [
		38.395337,
		-80.658321
	],
	"26704": [
		39.291551,
		-78.599287
	],
	"26705": [
		39.324555,
		-79.584376
	],
	"26707": [
		39.211453,
		-79.400613
	],
	"26710": [
		39.301767,
		-78.967619
	],
	"26711": [
		39.28347,
		-78.469379
	],
	"26714": [
		39.188475,
		-78.655159
	],
	"26716": [
		39.25273,
		-79.529486
	],
	"26717": [
		39.334155,
		-79.182508
	],
	"26719": [
		39.482791,
		-78.774834
	],
	"26720": [
		39.280293,
		-79.329586
	],
	"26722": [
		39.503126,
		-78.643193
	],
	"26726": [
		39.402845,
		-78.985452
	],
	"26731": [
		39.168595,
		-79.075355
	],
	"26739": [
		39.24835,
		-79.243252
	],
	"26743": [
		39.293949,
		-79.075293
	],
	"26750": [
		39.47667,
		-79.044691
	],
	"26753": [
		39.5632,
		-78.7915
	],
	"26755": [
		39.166376,
		-78.724626
	],
	"26757": [
		39.318195,
		-78.743841
	],
	"26761": [
		39.271397,
		-78.695001
	],
	"26763": [
		39.473037,
		-78.699175
	],
	"26764": [
		39.452071,
		-79.553425
	],
	"26767": [
		39.615903,
		-78.75716
	],
	"26801": [
		39.047799,
		-78.804288
	],
	"26802": [
		38.627463,
		-79.205234
	],
	"26804": [
		38.602696,
		-79.569209
	],
	"26807": [
		38.67445,
		-79.340617
	],
	"26808": [
		39.207894,
		-78.457442
	],
	"26810": [
		38.995071,
		-78.754368
	],
	"26812": [
		38.885776,
		-78.878013
	],
	"26814": [
		38.781086,
		-79.475798
	],
	"26815": [
		38.493516,
		-79.364475
	],
	"26817": [
		39.373773,
		-78.401579
	],
	"26818": [
		39.087625,
		-79.016499
	],
	"26823": [
		39.132607,
		-78.464071
	],
	"26833": [
		39.088814,
		-79.220549
	],
	"26836": [
		38.99824,
		-78.975114
	],
	"26845": [
		39.164519,
		-78.964204
	],
	"26847": [
		38.94914,
		-79.134534
	],
	"26851": [
		39.047099,
		-78.611026
	],
	"26852": [
		39.246727,
		-78.896354
	],
	"26855": [
		38.948051,
		-79.269009
	],
	"26865": [
		39.205938,
		-78.512135
	],
	"26866": [
		38.80061,
		-79.234329
	],
	"26884": [
		38.904902,
		-79.395514
	],
	"27006": [
		35.939004,
		-80.440264
	],
	"27007": [
		36.38972,
		-80.588467
	],
	"27009": [
		36.230931,
		-80.078657
	],
	"27011": [
		36.216506,
		-80.698517
	],
	"27012": [
		36.002457,
		-80.379291
	],
	"27013": [
		35.750492,
		-80.700075
	],
	"27014": [
		35.810049,
		-80.555744
	],
	"27016": [
		36.447462,
		-80.218816
	],
	"27017": [
		36.382016,
		-80.756218
	],
	"27018": [
		36.197106,
		-80.518235
	],
	"27019": [
		36.286886,
		-80.237725
	],
	"27020": [
		36.102925,
		-80.804054
	],
	"27021": [
		36.319389,
		-80.338592
	],
	"27022": [
		36.512166,
		-80.215604
	],
	"27023": [
		36.089784,
		-80.456712
	],
	"27024": [
		36.519237,
		-80.841179
	],
	"27025": [
		36.379051,
		-79.969387
	],
	"27027": [
		36.441759,
		-79.988878
	],
	"27028": [
		35.922771,
		-80.580443
	],
	"27030": [
		36.489802,
		-80.629164
	],
	"27040": [
		36.169312,
		-80.393045
	],
	"27041": [
		36.425262,
		-80.487201
	],
	"27042": [
		36.352819,
		-80.064203
	],
	"27043": [
		36.337252,
		-80.45183
	],
	"27045": [
		36.234398,
		-80.29607
	],
	"27046": [
		36.502219,
		-80.078264
	],
	"27047": [
		36.314134,
		-80.569112
	],
	"27048": [
		36.482514,
		-79.917678
	],
	"27050": [
		36.226442,
		-80.409707
	],
	"27051": [
		36.195946,
		-80.153401
	],
	"27052": [
		36.320755,
		-80.150453
	],
	"27053": [
		36.474276,
		-80.34785
	],
	"27054": [
		35.79254,
		-80.597888
	],
	"27055": [
		36.113832,
		-80.631099
	],
	"27101": [
		36.11085,
		-80.20043
	],
	"27103": [
		36.05823,
		-80.321496
	],
	"27104": [
		36.093687,
		-80.323532
	],
	"27105": [
		36.163377,
		-80.233787
	],
	"27106": [
		36.14391,
		-80.323157
	],
	"27107": [
		36.013158,
		-80.175491
	],
	"27109": [
		36.133928,
		-80.277635
	],
	"27110": [
		36.08926,
		-80.22496
	],
	"27127": [
		36.020708,
		-80.279817
	],
	"27201": [
		36.034172,
		-79.484829
	],
	"27203": [
		35.728464,
		-79.786527
	],
	"27205": [
		35.638259,
		-79.850866
	],
	"27207": [
		35.607613,
		-79.390517
	],
	"27208": [
		35.56323,
		-79.542928
	],
	"27209": [
		35.343102,
		-79.753442
	],
	"27212": [
		36.480967,
		-79.279856
	],
	"27214": [
		36.206055,
		-79.671126
	],
	"27215": [
		36.027099,
		-79.491799
	],
	"27217": [
		36.190945,
		-79.380185
	],
	"27229": [
		35.265632,
		-79.775733
	],
	"27231": [
		36.20772,
		-79.16942
	],
	"27233": [
		35.892512,
		-79.70498
	],
	"27235": [
		36.092028,
		-80.011443
	],
	"27239": [
		35.60066,
		-80.090226
	],
	"27242": [
		35.329657,
		-79.648955
	],
	"27243": [
		36.066916,
		-79.198148
	],
	"27244": [
		36.215377,
		-79.48637
	],
	"27248": [
		35.783296,
		-79.716331
	],
	"27249": [
		36.154141,
		-79.582389
	],
	"27252": [
		35.566614,
		-79.349758
	],
	"27253": [
		35.966166,
		-79.347361
	],
	"27258": [
		36.010802,
		-79.291198
	],
	"27260": [
		35.954467,
		-79.987882
	],
	"27262": [
		35.96313,
		-80.041667
	],
	"27263": [
		35.911522,
		-79.936799
	],
	"27265": [
		36.012305,
		-80.030949
	],
	"27278": [
		36.090195,
		-79.086929
	],
	"27281": [
		35.187442,
		-79.625115
	],
	"27282": [
		35.988957,
		-79.928282
	],
	"27283": [
		35.951474,
		-79.635418
	],
	"27284": [
		36.119333,
		-80.077342
	],
	"27288": [
		36.497645,
		-79.750015
	],
	"27291": [
		36.418316,
		-79.168428
	],
	"27292": [
		35.738325,
		-80.207547
	],
	"27295": [
		35.871767,
		-80.31018
	],
	"27298": [
		35.885115,
		-79.567545
	],
	"27299": [
		35.752324,
		-80.386149
	],
	"27301": [
		36.11351,
		-79.665656
	],
	"27302": [
		36.14203,
		-79.266181
	],
	"27305": [
		36.526805,
		-79.233755
	],
	"27306": [
		35.225229,
		-79.980186
	],
	"27310": [
		36.174072,
		-79.992233
	],
	"27311": [
		36.479651,
		-79.472563
	],
	"27312": [
		35.756405,
		-79.209789
	],
	"27313": [
		35.931448,
		-79.75805
	],
	"27314": [
		36.31036,
		-79.19625
	],
	"27315": [
		36.51019,
		-79.403541
	],
	"27316": [
		35.697013,
		-79.625793
	],
	"27317": [
		35.840737,
		-79.802499
	],
	"27320": [
		36.341643,
		-79.657526
	],
	"27325": [
		35.463087,
		-79.584091
	],
	"27326": [
		36.464116,
		-79.556845
	],
	"27330": [
		35.514408,
		-79.195453
	],
	"27332": [
		35.384704,
		-79.137215
	],
	"27340": [
		35.945873,
		-79.317167
	],
	"27341": [
		35.523759,
		-79.695909
	],
	"27343": [
		36.503728,
		-79.091478
	],
	"27344": [
		35.722265,
		-79.433691
	],
	"27349": [
		35.901313,
		-79.416062
	],
	"27350": [
		35.808253,
		-79.888213
	],
	"27355": [
		35.794966,
		-79.574007
	],
	"27356": [
		35.436865,
		-79.804272
	],
	"27357": [
		36.2666,
		-79.970625
	],
	"27358": [
		36.228232,
		-79.880061
	],
	"27360": [
		35.86058,
		-80.099288
	],
	"27370": [
		35.80928,
		-79.978025
	],
	"27371": [
		35.406855,
		-79.968144
	],
	"27376": [
		35.239166,
		-79.53506
	],
	"27377": [
		36.042699,
		-79.608686
	],
	"27379": [
		36.374099,
		-79.334513
	],
	"27401": [
		36.069144,
		-79.765156
	],
	"27403": [
		36.065973,
		-79.824383
	],
	"27405": [
		36.115383,
		-79.734643
	],
	"27406": [
		36.000455,
		-79.763939
	],
	"27407": [
		36.008599,
		-79.87816
	],
	"27408": [
		36.103667,
		-79.813712
	],
	"27409": [
		36.103729,
		-79.93983
	],
	"27410": [
		36.117523,
		-79.894239
	],
	"27455": [
		36.187426,
		-79.817439
	],
	"27501": [
		35.484941,
		-78.68457
	],
	"27502": [
		35.715326,
		-78.921094
	],
	"27503": [
		36.152948,
		-78.884485
	],
	"27504": [
		35.400309,
		-78.518278
	],
	"27505": [
		35.423475,
		-79.001029
	],
	"27507": [
		36.513542,
		-78.569494
	],
	"27508": [
		35.956874,
		-78.248144
	],
	"27509": [
		36.11864,
		-78.781001
	],
	"27510": [
		35.915783,
		-79.082604
	],
	"27511": [
		35.763414,
		-78.788528
	],
	"27513": [
		35.802102,
		-78.802719
	],
	"27514": [
		35.96674,
		-79.049419
	],
	"27516": [
		35.906197,
		-79.154855
	],
	"27517": [
		35.850468,
		-79.023121
	],
	"27518": [
		35.731139,
		-78.773206
	],
	"27519": [
		35.8087,
		-78.883121
	],
	"27520": [
		35.619726,
		-78.477017
	],
	"27521": [
		35.412121,
		-78.655865
	],
	"27522": [
		36.105618,
		-78.675202
	],
	"27523": [
		35.773618,
		-78.956926
	],
	"27524": [
		35.394563,
		-78.387595
	],
	"27525": [
		36.136091,
		-78.458099
	],
	"27526": [
		35.543859,
		-78.829784
	],
	"27527": [
		35.653948,
		-78.381715
	],
	"27529": [
		35.655802,
		-78.586493
	],
	"27530": [
		35.381174,
		-78.062514
	],
	"27531": [
		35.342994,
		-77.964411
	],
	"27534": [
		35.369273,
		-77.886872
	],
	"27536": [
		36.326731,
		-78.409125
	],
	"27537": [
		36.371801,
		-78.397878
	],
	"27539": [
		35.676537,
		-78.813444
	],
	"27540": [
		35.621983,
		-78.86309
	],
	"27541": [
		36.264862,
		-79.083217
	],
	"27542": [
		35.618293,
		-78.136838
	],
	"27544": [
		36.19973,
		-78.446559
	],
	"27545": [
		35.78372,
		-78.478238
	],
	"27546": [
		35.385317,
		-78.862107
	],
	"27549": [
		36.101663,
		-78.232233
	],
	"27551": [
		36.432843,
		-78.05017
	],
	"27553": [
		36.486498,
		-78.302798
	],
	"27555": [
		35.562683,
		-78.204133
	],
	"27556": [
		36.408318,
		-78.314832
	],
	"27557": [
		35.779135,
		-78.198512
	],
	"27559": [
		35.628213,
		-79.102818
	],
	"27560": [
		35.857892,
		-78.827698
	],
	"27562": [
		35.640431,
		-78.990017
	],
	"27563": [
		36.41571,
		-78.229388
	],
	"27565": [
		36.361651,
		-78.648952
	],
	"27568": [
		35.510124,
		-78.245099
	],
	"27569": [
		35.429065,
		-78.182749
	],
	"27571": [
		35.91949,
		-78.458036
	],
	"27572": [
		36.255106,
		-78.877494
	],
	"27573": [
		36.396597,
		-78.976099
	],
	"27574": [
		36.478361,
		-78.864911
	],
	"27576": [
		35.577524,
		-78.261311
	],
	"27577": [
		35.489638,
		-78.332894
	],
	"27581": [
		36.199608,
		-78.728985
	],
	"27582": [
		36.467324,
		-78.576588
	],
	"27583": [
		36.292958,
		-78.935362
	],
	"27587": [
		35.981382,
		-78.557584
	],
	"27589": [
		36.322541,
		-78.133484
	],
	"27591": [
		35.78417,
		-78.388983
	],
	"27592": [
		35.55738,
		-78.67227
	],
	"27596": [
		35.999902,
		-78.435089
	],
	"27597": [
		35.841015,
		-78.30268
	],
	"27601": [
		35.773632,
		-78.634457
	],
	"27603": [
		35.664418,
		-78.652751
	],
	"27604": [
		35.822789,
		-78.561648
	],
	"27605": [
		35.790611,
		-78.654596
	],
	"27606": [
		35.742323,
		-78.715478
	],
	"27607": [
		35.813106,
		-78.721175
	],
	"27608": [
		35.809046,
		-78.647228
	],
	"27609": [
		35.843765,
		-78.633643
	],
	"27610": [
		35.7444,
		-78.546278
	],
	"27612": [
		35.855753,
		-78.707038
	],
	"27613": [
		35.926102,
		-78.711414
	],
	"27614": [
		35.94593,
		-78.619494
	],
	"27615": [
		35.8985,
		-78.635485
	],
	"27616": [
		35.866516,
		-78.541308
	],
	"27617": [
		35.907875,
		-78.77296
	],
	"27701": [
		35.99924,
		-78.897944
	],
	"27703": [
		35.959253,
		-78.806827
	],
	"27704": [
		36.042446,
		-78.828771
	],
	"27705": [
		36.022136,
		-78.975659
	],
	"27707": [
		35.954525,
		-78.953317
	],
	"27709": [
		35.924393,
		-78.832764
	],
	"27712": [
		36.095476,
		-78.904083
	],
	"27713": [
		35.89504,
		-78.923747
	],
	"27801": [
		35.913446,
		-77.725699
	],
	"27803": [
		35.903051,
		-77.856172
	],
	"27804": [
		35.989169,
		-77.842709
	],
	"27805": [
		36.207748,
		-77.084268
	],
	"27806": [
		35.304999,
		-76.756067
	],
	"27807": [
		35.804514,
		-78.095537
	],
	"27808": [
		35.467089,
		-76.759752
	],
	"27809": [
		36.016777,
		-77.74162
	],
	"27810": [
		35.531809,
		-76.525397
	],
	"27812": [
		35.815609,
		-77.369254
	],
	"27813": [
		35.634699,
		-77.937717
	],
	"27814": [
		35.398663,
		-76.918808
	],
	"27816": [
		36.100287,
		-78.064366
	],
	"27817": [
		35.447982,
		-77.072002
	],
	"27818": [
		36.499725,
		-77.018505
	],
	"27819": [
		35.816005,
		-77.454949
	],
	"27820": [
		36.421515,
		-77.241567
	],
	"27821": [
		35.322066,
		-76.874087
	],
	"27822": [
		35.807012,
		-77.840457
	],
	"27823": [
		36.209653,
		-77.713733
	],
	"27824": [
		35.513209,
		-76.037172
	],
	"27825": [
		35.832804,
		-77.174424
	],
	"27826": [
		35.595477,
		-76.206246
	],
	"27827": [
		35.696636,
		-77.513239
	],
	"27828": [
		35.585152,
		-77.577194
	],
	"27829": [
		35.6839,
		-77.626357
	],
	"27830": [
		35.564168,
		-77.950309
	],
	"27831": [
		36.463087,
		-77.570553
	],
	"27832": [
		36.519809,
		-77.740128
	],
	"27834": [
		35.657296,
		-77.379187
	],
	"27837": [
		35.513865,
		-77.2046
	],
	"27839": [
		36.284912,
		-77.55688
	],
	"27840": [
		35.982689,
		-77.214599
	],
	"27841": [
		35.908501,
		-77.276319
	],
	"27842": [
		36.526749,
		-77.851988
	],
	"27843": [
		35.995534,
		-77.400001
	],
	"27844": [
		36.249497,
		-77.943156
	],
	"27845": [
		36.371267,
		-77.43999
	],
	"27846": [
		35.758568,
		-76.897527
	],
	"27847": [
		36.183169,
		-77.194668
	],
	"27849": [
		36.077306,
		-77.215025
	],
	"27850": [
		36.412391,
		-77.880191
	],
	"27851": [
		35.640083,
		-78.030678
	],
	"27852": [
		35.750459,
		-77.636931
	],
	"27853": [
		36.50858,
		-77.285626
	],
	"27855": [
		36.415557,
		-77.069339
	],
	"27856": [
		36.01368,
		-77.980574
	],
	"27857": [
		35.972793,
		-77.286253
	],
	"27858": [
		35.53175,
		-77.283888
	],
	"27860": [
		35.650061,
		-76.676197
	],
	"27861": [
		35.814875,
		-77.320114
	],
	"27862": [
		36.490175,
		-77.188291
	],
	"27863": [
		35.488144,
		-77.97173
	],
	"27864": [
		35.807034,
		-77.651372
	],
	"27865": [
		35.656239,
		-76.851605
	],
	"27866": [
		36.519869,
		-77.514565
	],
	"27869": [
		36.267105,
		-77.313433
	],
	"27870": [
		36.418933,
		-77.71576
	],
	"27871": [
		35.802069,
		-77.260565
	],
	"27872": [
		36.192755,
		-77.253865
	],
	"27873": [
		35.653592,
		-77.775232
	],
	"27874": [
		36.130108,
		-77.393225
	],
	"27875": [
		35.455706,
		-76.504667
	],
	"27876": [
		36.471995,
		-77.391332
	],
	"27878": [
		35.86688,
		-77.834929
	],
	"27879": [
		35.574391,
		-77.279486
	],
	"27880": [
		35.730736,
		-78.080589
	],
	"27881": [
		35.978414,
		-77.436573
	],
	"27882": [
		35.941655,
		-78.115598
	],
	"27883": [
		35.600536,
		-77.803696
	],
	"27884": [
		35.70352,
		-77.266635
	],
	"27885": [
		35.386414,
		-76.285856
	],
	"27886": [
		35.904533,
		-77.511658
	],
	"27888": [
		35.589277,
		-77.71595
	],
	"27889": [
		35.591373,
		-77.003693
	],
	"27890": [
		36.41418,
		-77.587745
	],
	"27891": [
		36.097735,
		-77.742789
	],
	"27892": [
		35.812319,
		-77.05163
	],
	"27893": [
		35.688948,
		-77.896676
	],
	"27896": [
		35.790766,
		-77.976733
	],
	"27897": [
		36.324998,
		-77.210706
	],
	"27909": [
		36.288605,
		-76.268734
	],
	"27910": [
		36.290066,
		-76.993185
	],
	"27915": [
		35.406176,
		-75.491989
	],
	"27916": [
		36.322012,
		-75.915131
	],
	"27917": [
		36.355145,
		-75.997481
	],
	"27919": [
		36.308171,
		-76.504283
	],
	"27920": [
		35.259518,
		-75.553269
	],
	"27921": [
		36.352062,
		-76.187929
	],
	"27922": [
		36.316755,
		-76.84221
	],
	"27923": [
		36.396245,
		-75.931116
	],
	"27924": [
		36.168447,
		-76.832521
	],
	"27925": [
		35.856141,
		-76.193837
	],
	"27926": [
		36.505115,
		-76.604925
	],
	"27927": [
		36.341317,
		-75.852565
	],
	"27928": [
		35.824539,
		-76.438656
	],
	"27929": [
		36.433134,
		-75.988221
	],
	"27932": [
		36.100786,
		-76.610814
	],
	"27935": [
		36.431079,
		-76.868092
	],
	"27936": [
		35.239423,
		-75.564581
	],
	"27937": [
		36.504334,
		-76.780733
	],
	"27938": [
		36.384296,
		-76.716
	],
	"27939": [
		36.2384,
		-75.843076
	],
	"27941": [
		36.102528,
		-75.816896
	],
	"27942": [
		36.297361,
		-76.750671
	],
	"27943": [
		35.224432,
		-75.678903
	],
	"27944": [
		36.173431,
		-76.421264
	],
	"27946": [
		36.363435,
		-76.601536
	],
	"27947": [
		36.216959,
		-75.891578
	],
	"27948": [
		36.019229,
		-75.692172
	],
	"27949": [
		36.108889,
		-75.76055
	],
	"27950": [
		36.509678,
		-75.996355
	],
	"27953": [
		35.779985,
		-75.881366
	],
	"27954": [
		35.910123,
		-75.677877
	],
	"27956": [
		36.401576,
		-76.000725
	],
	"27957": [
		36.066297,
		-76.759059
	],
	"27958": [
		36.484298,
		-76.13835
	],
	"27959": [
		35.886943,
		-75.606402
	],
	"27960": [
		35.073231,
		-75.998527
	],
	"27962": [
		35.790464,
		-76.744743
	],
	"27964": [
		36.083046,
		-75.806214
	],
	"27965": [
		36.292401,
		-75.930873
	],
	"27966": [
		36.149756,
		-75.802273
	],
	"27967": [
		36.229501,
		-76.904915
	],
	"27968": [
		35.732418,
		-75.509908
	],
	"27970": [
		35.839137,
		-76.650405
	],
	"27972": [
		35.552458,
		-75.471299
	],
	"27973": [
		36.371209,
		-76.055514
	],
	"27974": [
		36.243022,
		-75.989505
	],
	"27976": [
		36.505174,
		-76.394382
	],
	"27978": [
		35.727405,
		-75.739872
	],
	"27979": [
		36.436768,
		-76.560679
	],
	"27980": [
		36.245324,
		-76.619385
	],
	"27981": [
		35.852855,
		-75.637424
	],
	"27982": [
		35.5659,
		-75.465481
	],
	"27983": [
		35.97046,
		-76.921871
	],
	"27985": [
		36.211603,
		-76.456674
	],
	"27986": [
		36.388982,
		-76.918338
	],
	"28001": [
		35.338552,
		-80.208179
	],
	"28006": [
		35.410444,
		-81.092252
	],
	"28007": [
		35.10459,
		-80.109911
	],
	"28009": [
		35.407846,
		-80.107195
	],
	"28012": [
		35.211504,
		-81.037865
	],
	"28016": [
		35.314932,
		-81.283292
	],
	"28017": [
		35.247082,
		-81.670682
	],
	"28018": [
		35.485727,
		-81.790396
	],
	"28019": [
		35.276702,
		-81.787707
	],
	"28020": [
		35.524989,
		-81.641317
	],
	"28021": [
		35.400774,
		-81.403346
	],
	"28023": [
		35.567714,
		-80.602258
	],
	"28025": [
		35.382565,
		-80.523443
	],
	"28027": [
		35.407041,
		-80.685872
	],
	"28031": [
		35.469923,
		-80.895357
	],
	"28032": [
		35.233033,
		-81.079513
	],
	"28033": [
		35.41927,
		-81.328253
	],
	"28034": [
		35.353664,
		-81.178943
	],
	"28036": [
		35.480547,
		-80.792539
	],
	"28037": [
		35.495486,
		-81.018484
	],
	"28039": [
		35.678835,
		-80.437427
	],
	"28040": [
		35.389195,
		-81.758135
	],
	"28043": [
		35.306241,
		-81.8726
	],
	"28052": [
		35.214656,
		-81.233227
	],
	"28054": [
		35.262879,
		-81.149075
	],
	"28056": [
		35.216936,
		-81.125003
	],
	"28071": [
		35.51763,
		-80.316291
	],
	"28072": [
		35.61407,
		-80.445205
	],
	"28073": [
		35.198574,
		-81.483781
	],
	"28075": [
		35.302701,
		-80.639846
	],
	"28076": [
		35.259155,
		-81.788612
	],
	"28077": [
		35.404802,
		-81.20277
	],
	"28078": [
		35.405286,
		-80.86402
	],
	"28079": [
		35.11471,
		-80.600423
	],
	"28080": [
		35.456746,
		-81.105685
	],
	"28081": [
		35.502816,
		-80.670173
	],
	"28083": [
		35.489602,
		-80.580668
	],
	"28086": [
		35.244245,
		-81.377832
	],
	"28088": [
		35.544276,
		-80.614646
	],
	"28089": [
		35.318233,
		-81.659574
	],
	"28090": [
		35.454659,
		-81.559555
	],
	"28091": [
		34.987392,
		-79.933002
	],
	"28092": [
		35.485761,
		-81.254558
	],
	"28097": [
		35.296685,
		-80.393056
	],
	"28098": [
		35.271135,
		-81.100787
	],
	"28101": [
		35.258099,
		-81.078063
	],
	"28102": [
		34.818441,
		-79.972265
	],
	"28103": [
		34.998933,
		-80.351309
	],
	"28104": [
		35.060568,
		-80.692836
	],
	"28105": [
		35.115434,
		-80.713498
	],
	"28107": [
		35.252964,
		-80.518034
	],
	"28108": [
		34.934786,
		-80.681146
	],
	"28109": [
		35.496957,
		-80.288569
	],
	"28110": [
		35.066044,
		-80.509089
	],
	"28112": [
		34.889925,
		-80.549548
	],
	"28114": [
		35.230441,
		-81.747702
	],
	"28115": [
		35.584967,
		-80.772367
	],
	"28117": [
		35.565695,
		-80.898335
	],
	"28119": [
		34.851078,
		-80.016985
	],
	"28120": [
		35.328685,
		-81.026385
	],
	"28124": [
		35.399738,
		-80.408631
	],
	"28125": [
		35.659025,
		-80.698613
	],
	"28127": [
		35.474303,
		-80.190581
	],
	"28128": [
		35.210696,
		-80.154523
	],
	"28129": [
		35.231595,
		-80.32716
	],
	"28133": [
		34.844926,
		-80.265681
	],
	"28134": [
		35.085333,
		-80.893388
	],
	"28135": [
		35.02976,
		-80.217276
	],
	"28137": [
		35.563109,
		-80.236391
	],
	"28138": [
		35.514441,
		-80.437354
	],
	"28139": [
		35.348363,
		-81.994737
	],
	"28144": [
		35.706685,
		-80.464788
	],
	"28146": [
		35.619243,
		-80.393345
	],
	"28147": [
		35.68106,
		-80.563015
	],
	"28150": [
		35.342703,
		-81.576248
	],
	"28152": [
		35.24272,
		-81.599412
	],
	"28159": [
		35.694752,
		-80.431873
	],
	"28160": [
		35.361006,
		-81.922332
	],
	"28163": [
		35.20742,
		-80.428532
	],
	"28164": [
		35.389444,
		-81.037135
	],
	"28166": [
		35.680343,
		-80.868179
	],
	"28167": [
		35.506751,
		-81.967285
	],
	"28168": [
		35.55236,
		-81.425071
	],
	"28169": [
		35.35847,
		-81.429395
	],
	"28170": [
		34.998714,
		-80.098785
	],
	"28173": [
		34.916155,
		-80.731415
	],
	"28174": [
		34.969035,
		-80.43958
	],
	"28202": [
		35.227271,
		-80.844194
	],
	"28203": [
		35.208185,
		-80.859107
	],
	"28204": [
		35.21462,
		-80.827014
	],
	"28205": [
		35.21879,
		-80.789599
	],
	"28206": [
		35.256127,
		-80.820999
	],
	"28207": [
		35.194148,
		-80.824585
	],
	"28208": [
		35.230466,
		-80.907243
	],
	"28209": [
		35.178714,
		-80.853985
	],
	"28210": [
		35.130509,
		-80.856685
	],
	"28211": [
		35.166342,
		-80.797285
	],
	"28212": [
		35.187703,
		-80.744556
	],
	"28213": [
		35.285977,
		-80.734401
	],
	"28214": [
		35.275252,
		-80.968144
	],
	"28215": [
		35.244979,
		-80.693471
	],
	"28216": [
		35.312103,
		-80.888711
	],
	"28217": [
		35.168745,
		-80.908364
	],
	"28226": [
		35.102697,
		-80.822129
	],
	"28227": [
		35.189567,
		-80.645408
	],
	"28244": [
		35.224605,
		-80.843094
	],
	"28262": [
		35.322043,
		-80.73999
	],
	"28269": [
		35.337313,
		-80.803472
	],
	"28270": [
		35.112035,
		-80.764605
	],
	"28273": [
		35.127358,
		-80.946846
	],
	"28277": [
		35.052875,
		-80.817552
	],
	"28278": [
		35.133066,
		-81.009297
	],
	"28280": [
		35.226332,
		-80.843091
	],
	"28282": [
		35.224815,
		-80.845277
	],
	"28301": [
		35.0748,
		-78.884257
	],
	"28303": [
		35.085631,
		-78.959361
	],
	"28304": [
		35.025528,
		-78.989604
	],
	"28305": [
		35.052609,
		-78.907244
	],
	"28306": [
		34.958495,
		-78.896848
	],
	"28307": [
		35.138559,
		-78.981887
	],
	"28308": [
		35.17155,
		-79.017085
	],
	"28310": [
		35.163188,
		-79.037967
	],
	"28311": [
		35.167769,
		-78.888697
	],
	"28312": [
		34.947752,
		-78.738133
	],
	"28314": [
		35.052985,
		-79.029453
	],
	"28315": [
		35.117305,
		-79.431532
	],
	"28318": [
		35.019873,
		-78.613574
	],
	"28320": [
		34.558122,
		-78.772715
	],
	"28323": [
		35.314791,
		-78.834376
	],
	"28325": [
		35.153922,
		-78.104138
	],
	"28326": [
		35.269044,
		-79.15469
	],
	"28327": [
		35.354616,
		-79.416494
	],
	"28328": [
		35.003503,
		-78.337924
	],
	"28330": [
		34.909596,
		-79.82198
	],
	"28332": [
		34.659049,
		-78.737911
	],
	"28333": [
		35.286131,
		-78.017373
	],
	"28334": [
		35.272208,
		-78.568104
	],
	"28337": [
		34.657047,
		-78.561559
	],
	"28338": [
		35.107513,
		-79.759641
	],
	"28339": [
		35.31054,
		-78.732747
	],
	"28340": [
		34.471354,
		-79.134422
	],
	"28341": [
		35.119876,
		-78.174437
	],
	"28342": [
		35.191183,
		-78.651262
	],
	"28343": [
		34.757362,
		-79.564875
	],
	"28344": [
		35.160499,
		-78.624575
	],
	"28345": [
		34.870288,
		-79.66564
	],
	"28347": [
		35.062266,
		-79.631662
	],
	"28348": [
		34.914974,
		-78.92702
	],
	"28349": [
		34.981159,
		-77.927059
	],
	"28350": [
		35.243159,
		-79.314018
	],
	"28351": [
		34.84827,
		-79.563854
	],
	"28352": [
		34.767842,
		-79.45173
	],
	"28356": [
		35.23702,
		-78.790396
	],
	"28357": [
		34.902081,
		-79.082994
	],
	"28358": [
		34.607857,
		-78.934772
	],
	"28360": [
		34.670328,
		-79.07494
	],
	"28363": [
		34.960782,
		-79.554662
	],
	"28364": [
		34.707928,
		-79.322676
	],
	"28365": [
		35.17233,
		-78.052287
	],
	"28366": [
		35.230228,
		-78.362014
	],
	"28367": [
		35.172692,
		-79.725247
	],
	"28369": [
		34.423373,
		-79.029416
	],
	"28371": [
		34.903159,
		-78.979551
	],
	"28372": [
		34.696872,
		-79.17762
	],
	"28373": [
		35.09347,
		-79.485597
	],
	"28374": [
		35.197454,
		-79.462959
	],
	"28375": [
		34.475744,
		-79.038553
	],
	"28376": [
		34.992407,
		-79.242642
	],
	"28377": [
		34.826888,
		-79.213231
	],
	"28379": [
		34.930868,
		-79.78004
	],
	"28382": [
		34.971336,
		-78.517733
	],
	"28383": [
		34.576974,
		-79.262696
	],
	"28384": [
		34.796937,
		-78.961001
	],
	"28385": [
		35.050008,
		-78.47723
	],
	"28386": [
		34.853619,
		-79.129616
	],
	"28387": [
		35.179122,
		-79.376411
	],
	"28390": [
		35.21964,
		-78.955809
	],
	"28391": [
		35.021629,
		-78.698798
	],
	"28392": [
		34.735329,
		-78.800956
	],
	"28393": [
		34.981087,
		-78.18948
	],
	"28394": [
		35.217455,
		-79.241537
	],
	"28395": [
		35.138511,
		-78.741362
	],
	"28396": [
		34.914162,
		-79.397482
	],
	"28398": [
		34.989776,
		-78.064151
	],
	"28399": [
		34.784523,
		-78.709012
	],
	"28401": [
		34.272145,
		-77.962018
	],
	"28403": [
		34.221692,
		-77.880633
	],
	"28405": [
		34.263182,
		-77.86638
	],
	"28409": [
		34.15512,
		-77.862161
	],
	"28411": [
		34.301809,
		-77.793089
	],
	"28412": [
		34.143756,
		-77.928152
	],
	"28420": [
		34.073677,
		-78.48385
	],
	"28421": [
		34.505123,
		-78.167047
	],
	"28422": [
		34.02637,
		-78.189312
	],
	"28423": [
		34.313902,
		-78.388895
	],
	"28424": [
		34.290287,
		-78.699681
	],
	"28425": [
		34.562055,
		-77.896281
	],
	"28428": [
		34.046855,
		-77.909673
	],
	"28429": [
		34.341211,
		-77.900216
	],
	"28430": [
		34.303437,
		-78.945367
	],
	"28431": [
		34.314321,
		-78.839503
	],
	"28432": [
		34.168033,
		-78.758709
	],
	"28433": [
		34.488505,
		-78.616673
	],
	"28434": [
		34.468325,
		-78.465485
	],
	"28435": [
		34.405955,
		-78.109229
	],
	"28436": [
		34.275102,
		-78.267215
	],
	"28438": [
		34.409483,
		-78.918844
	],
	"28439": [
		34.286816,
		-79.001382
	],
	"28441": [
		34.811459,
		-78.427416
	],
	"28442": [
		34.282924,
		-78.613428
	],
	"28443": [
		34.445036,
		-77.675712
	],
	"28444": [
		34.688313,
		-78.319957
	],
	"28445": [
		34.483968,
		-77.556317
	],
	"28447": [
		34.622249,
		-78.277331
	],
	"28448": [
		34.520158,
		-78.363175
	],
	"28449": [
		33.978811,
		-77.933743
	],
	"28450": [
		34.324418,
		-78.515265
	],
	"28451": [
		34.234144,
		-78.094463
	],
	"28452": [
		33.991603,
		-78.54957
	],
	"28453": [
		34.886439,
		-78.076256
	],
	"28454": [
		34.678289,
		-77.650918
	],
	"28455": [
		34.111657,
		-78.631796
	],
	"28456": [
		34.374973,
		-78.287201
	],
	"28457": [
		34.449598,
		-77.886638
	],
	"28458": [
		34.814777,
		-78.09079
	],
	"28460": [
		34.541298,
		-77.418235
	],
	"28461": [
		33.967319,
		-78.058744
	],
	"28462": [
		34.026491,
		-78.289661
	],
	"28463": [
		34.109764,
		-78.776463
	],
	"28464": [
		34.78224,
		-78.021091
	],
	"28465": [
		33.912317,
		-78.102548
	],
	"28466": [
		34.74077,
		-77.875702
	],
	"28467": [
		33.918011,
		-78.591964
	],
	"28468": [
		33.89965,
		-78.519208
	],
	"28469": [
		33.926428,
		-78.46682
	],
	"28470": [
		33.964184,
		-78.403547
	],
	"28472": [
		34.29905,
		-78.691171
	],
	"28478": [
		34.64284,
		-78.042039
	],
	"28479": [
		34.100688,
		-78.016511
	],
	"28480": [
		34.225734,
		-77.797334
	],
	"28501": [
		35.24242,
		-77.514124
	],
	"28504": [
		35.224563,
		-77.634868
	],
	"28508": [
		35.099668,
		-77.824788
	],
	"28510": [
		34.987612,
		-76.804461
	],
	"28511": [
		34.901116,
		-76.345763
	],
	"28512": [
		34.712152,
		-76.793416
	],
	"28513": [
		35.441528,
		-77.388885
	],
	"28515": [
		35.184068,
		-76.699387
	],
	"28516": [
		34.905126,
		-76.552834
	],
	"28518": [
		34.894823,
		-77.747493
	],
	"28519": [
		35.119725,
		-77.026974
	],
	"28520": [
		34.99421,
		-76.323307
	],
	"28521": [
		34.817902,
		-77.736618
	],
	"28523": [
		35.211357,
		-77.284601
	],
	"28524": [
		34.790939,
		-76.468564
	],
	"28525": [
		35.132291,
		-77.686672
	],
	"28526": [
		35.261232,
		-77.371934
	],
	"28527": [
		35.259463,
		-77.030444
	],
	"28528": [
		34.732058,
		-76.538662
	],
	"28529": [
		35.070527,
		-76.85476
	],
	"28530": [
		35.374768,
		-77.415297
	],
	"28531": [
		34.69804,
		-76.555565
	],
	"28532": [
		34.896013,
		-76.890788
	],
	"28533": [
		34.902869,
		-76.901473
	],
	"28537": [
		35.237681,
		-76.525812
	],
	"28538": [
		35.416645,
		-77.565077
	],
	"28539": [
		34.694232,
		-77.202964
	],
	"28540": [
		34.754982,
		-77.503794
	],
	"28543": [
		34.736059,
		-77.375621
	],
	"28544": [
		34.71809,
		-77.308669
	],
	"28546": [
		34.799156,
		-77.356165
	],
	"28547": [
		34.669025,
		-77.36697
	],
	"28551": [
		35.321323,
		-77.780856
	],
	"28552": [
		35.303795,
		-76.555801
	],
	"28553": [
		34.7296,
		-76.512376
	],
	"28554": [
		35.478481,
		-77.586122
	],
	"28555": [
		34.863308,
		-77.221792
	],
	"28556": [
		35.114002,
		-76.625583
	],
	"28557": [
		34.73896,
		-76.749232
	],
	"28560": [
		35.126695,
		-76.977628
	],
	"28562": [
		35.079881,
		-77.125895
	],
	"28570": [
		34.781487,
		-76.857497
	],
	"28571": [
		35.070773,
		-76.68924
	],
	"28572": [
		35.027895,
		-77.736417
	],
	"28573": [
		34.984805,
		-77.148252
	],
	"28574": [
		34.878931,
		-77.589588
	],
	"28575": [
		34.707959,
		-76.883568
	],
	"28577": [
		34.864837,
		-76.373188
	],
	"28578": [
		35.196952,
		-77.856972
	],
	"28579": [
		34.759099,
		-76.510294
	],
	"28580": [
		35.453274,
		-77.679538
	],
	"28581": [
		34.844258,
		-76.435553
	],
	"28582": [
		34.748284,
		-77.150458
	],
	"28583": [
		35.138756,
		-76.741543
	],
	"28584": [
		34.736767,
		-77.077619
	],
	"28585": [
		35.076923,
		-77.412405
	],
	"28586": [
		35.313558,
		-77.167497
	],
	"28587": [
		35.19273,
		-76.661661
	],
	"28589": [
		34.812858,
		-76.505058
	],
	"28590": [
		35.520683,
		-77.416661
	],
	"28594": [
		34.689904,
		-76.969688
	],
	"28601": [
		35.772393,
		-81.326659
	],
	"28602": [
		35.669886,
		-81.389208
	],
	"28604": [
		36.180292,
		-81.859122
	],
	"28605": [
		36.129639,
		-81.694931
	],
	"28606": [
		36.053487,
		-81.322174
	],
	"28607": [
		36.218005,
		-81.652138
	],
	"28609": [
		35.671692,
		-81.055604
	],
	"28610": [
		35.730324,
		-81.135305
	],
	"28611": [
		36.01097,
		-81.735235
	],
	"28612": [
		35.650391,
		-81.53756
	],
	"28613": [
		35.737687,
		-81.207681
	],
	"28615": [
		36.458681,
		-81.66062
	],
	"28616": [
		36.023071,
		-81.920191
	],
	"28617": [
		36.480702,
		-81.361979
	],
	"28618": [
		36.208166,
		-81.516769
	],
	"28619": [
		35.758603,
		-81.602494
	],
	"28621": [
		36.27565,
		-80.914624
	],
	"28622": [
		36.192668,
		-81.947348
	],
	"28623": [
		36.528827,
		-80.973699
	],
	"28624": [
		36.128356,
		-81.411775
	],
	"28625": [
		35.869567,
		-80.88964
	],
	"28626": [
		36.292577,
		-81.517632
	],
	"28627": [
		36.455555,
		-81.004437
	],
	"28628": [
		35.726329,
		-81.785107
	],
	"28629": [
		36.346535,
		-81.368738
	],
	"28630": [
		35.831976,
		-81.420172
	],
	"28631": [
		36.547476,
		-81.410356
	],
	"28634": [
		35.972801,
		-80.757173
	],
	"28635": [
		36.305463,
		-81.126045
	],
	"28636": [
		35.939426,
		-81.063433
	],
	"28637": [
		35.718004,
		-81.41936
	],
	"28638": [
		35.845093,
		-81.477938
	],
	"28640": [
		36.404873,
		-81.399397
	],
	"28642": [
		36.218398,
		-80.820312
	],
	"28643": [
		36.529059,
		-81.540879
	],
	"28644": [
		36.426159,
		-81.277823
	],
	"28645": [
		35.978845,
		-81.547834
	],
	"28646": [
		36.07333,
		-81.847093
	],
	"28647": [
		35.938024,
		-81.97306
	],
	"28649": [
		36.33599,
		-81.212069
	],
	"28650": [
		35.571426,
		-81.15839
	],
	"28651": [
		36.306214,
		-81.308783
	],
	"28652": [
		36.100032,
		-81.98717
	],
	"28654": [
		36.058516,
		-81.159305
	],
	"28655": [
		35.763266,
		-81.749862
	],
	"28657": [
		36.021993,
		-81.942425
	],
	"28658": [
		35.637619,
		-81.235843
	],
	"28659": [
		36.215959,
		-81.148169
	],
	"28660": [
		35.968615,
		-80.856248
	],
	"28662": [
		36.021516,
		-81.899121
	],
	"28663": [
		36.53203,
		-81.309408
	],
	"28665": [
		36.209712,
		-81.375128
	],
	"28666": [
		35.725271,
		-81.470662
	],
	"28667": [
		35.771495,
		-81.4262
	],
	"28668": [
		36.407054,
		-80.990485
	],
	"28669": [
		36.223445,
		-80.989818
	],
	"28670": [
		36.194308,
		-80.912494
	],
	"28671": [
		35.75267,
		-81.527898
	],
	"28672": [
		36.483379,
		-81.326672
	],
	"28673": [
		35.617717,
		-80.998758
	],
	"28675": [
		36.503161,
		-81.13503
	],
	"28676": [
		36.33186,
		-80.85534
	],
	"28677": [
		35.738099,
		-80.926089
	],
	"28678": [
		35.821719,
		-81.060844
	],
	"28679": [
		36.261211,
		-81.828379
	],
	"28681": [
		35.922678,
		-81.223058
	],
	"28682": [
		35.588254,
		-80.965153
	],
	"28683": [
		36.390439,
		-80.911007
	],
	"28684": [
		36.334451,
		-81.60677
	],
	"28685": [
		36.360792,
		-81.059831
	],
	"28689": [
		36.036555,
		-80.940896
	],
	"28690": [
		35.732735,
		-81.57423
	],
	"28692": [
		36.267535,
		-81.808487
	],
	"28693": [
		36.471773,
		-81.559009
	],
	"28694": [
		36.366337,
		-81.468016
	],
	"28697": [
		36.134008,
		-81.165721
	],
	"28698": [
		36.340893,
		-81.73628
	],
	"28701": [
		35.705098,
		-82.636467
	],
	"28702": [
		35.405602,
		-83.605242
	],
	"28704": [
		35.458465,
		-82.58158
	],
	"28705": [
		36.032692,
		-82.156238
	],
	"28707": [
		35.397389,
		-83.0658
	],
	"28708": [
		35.27141,
		-82.8627
	],
	"28709": [
		35.771625,
		-82.381822
	],
	"28711": [
		35.605268,
		-82.291851
	],
	"28712": [
		35.173309,
		-82.770828
	],
	"28713": [
		35.373495,
		-83.495989
	],
	"28714": [
		35.889455,
		-82.304119
	],
	"28715": [
		35.511966,
		-82.711701
	],
	"28716": [
		35.439331,
		-82.847944
	],
	"28717": [
		35.049462,
		-83.093365
	],
	"28718": [
		35.159172,
		-82.634935
	],
	"28719": [
		35.517887,
		-83.334181
	],
	"28720": [
		35.451057,
		-82.253518
	],
	"28721": [
		35.66267,
		-82.958496
	],
	"28722": [
		35.208461,
		-82.061011
	],
	"28723": [
		35.314207,
		-83.026128
	],
	"28725": [
		35.366645,
		-83.255082
	],
	"28726": [
		35.280999,
		-82.416555
	],
	"28729": [
		35.320398,
		-82.600623
	],
	"28730": [
		35.517421,
		-82.378042
	],
	"28731": [
		35.288036,
		-82.394669
	],
	"28732": [
		35.451748,
		-82.445743
	],
	"28733": [
		35.42886,
		-83.814172
	],
	"28734": [
		35.189081,
		-83.41226
	],
	"28735": [
		35.475706,
		-82.350429
	],
	"28736": [
		35.175658,
		-83.086467
	],
	"28739": [
		35.256111,
		-82.543707
	],
	"28740": [
		36.091287,
		-82.272978
	],
	"28741": [
		35.055919,
		-83.211171
	],
	"28742": [
		35.382646,
		-82.650651
	],
	"28743": [
		35.80036,
		-82.881145
	],
	"28745": [
		35.525282,
		-82.972046
	],
	"28746": [
		35.477196,
		-82.161705
	],
	"28747": [
		35.155183,
		-82.922658
	],
	"28748": [
		35.649589,
		-82.757729
	],
	"28749": [
		35.840638,
		-82.098741
	],
	"28751": [
		35.50501,
		-83.120704
	],
	"28752": [
		35.709599,
		-82.035573
	],
	"28753": [
		35.864078,
		-82.712731
	],
	"28754": [
		35.875534,
		-82.515665
	],
	"28756": [
		35.351924,
		-82.186268
	],
	"28757": [
		35.649746,
		-82.308567
	],
	"28759": [
		35.381445,
		-82.588591
	],
	"28761": [
		35.690316,
		-81.906845
	],
	"28762": [
		35.62679,
		-82.231586
	],
	"28763": [
		35.028595,
		-83.466611
	],
	"28766": [
		35.251041,
		-82.619835
	],
	"28768": [
		35.324202,
		-82.706749
	],
	"28771": [
		35.34702,
		-83.842814
	],
	"28772": [
		35.116966,
		-82.827217
	],
	"28773": [
		35.265444,
		-82.3097
	],
	"28774": [
		35.093445,
		-82.994858
	],
	"28775": [
		35.021332,
		-83.321833
	],
	"28777": [
		35.904431,
		-82.068534
	],
	"28778": [
		35.628881,
		-82.405472
	],
	"28779": [
		35.357002,
		-83.215933
	],
	"28781": [
		35.224056,
		-83.635479
	],
	"28782": [
		35.234025,
		-82.149038
	],
	"28783": [
		35.262142,
		-83.010414
	],
	"28785": [
		35.65327,
		-83.139633
	],
	"28786": [
		35.462005,
		-82.989068
	],
	"28787": [
		35.741251,
		-82.515578
	],
	"28789": [
		35.407057,
		-83.316777
	],
	"28790": [
		35.20048,
		-82.524774
	],
	"28791": [
		35.356104,
		-82.508181
	],
	"28792": [
		35.383008,
		-82.369904
	],
	"28801": [
		35.594348,
		-82.557917
	],
	"28803": [
		35.531703,
		-82.523021
	],
	"28804": [
		35.648452,
		-82.563801
	],
	"28805": [
		35.633754,
		-82.48318
	],
	"28806": [
		35.571971,
		-82.614729
	],
	"28901": [
		35.198093,
		-83.810358
	],
	"28902": [
		35.022948,
		-83.958294
	],
	"28904": [
		35.06863,
		-83.733593
	],
	"28905": [
		35.163953,
		-83.940082
	],
	"28906": [
		35.100136,
		-84.138594
	],
	"28909": [
		35.001608,
		-83.904752
	],
	"29001": [
		33.786644,
		-80.174065
	],
	"29003": [
		33.241221,
		-81.023815
	],
	"29006": [
		33.869101,
		-81.551078
	],
	"29009": [
		34.4553,
		-80.376154
	],
	"29010": [
		34.223091,
		-80.27265
	],
	"29014": [
		34.523382,
		-81.114513
	],
	"29015": [
		34.437442,
		-81.330125
	],
	"29016": [
		34.20251,
		-80.997
	],
	"29018": [
		33.348797,
		-80.639176
	],
	"29020": [
		34.314345,
		-80.573719
	],
	"29030": [
		33.576312,
		-80.647573
	],
	"29031": [
		34.548075,
		-81.492599
	],
	"29032": [
		34.345114,
		-80.445025
	],
	"29033": [
		33.956189,
		-81.057488
	],
	"29036": [
		34.134004,
		-81.339914
	],
	"29037": [
		34.189935,
		-81.867694
	],
	"29038": [
		33.372643,
		-80.981506
	],
	"29039": [
		33.422422,
		-80.915021
	],
	"29040": [
		34.068795,
		-80.440478
	],
	"29042": [
		33.297671,
		-81.158698
	],
	"29044": [
		33.92571,
		-80.695204
	],
	"29045": [
		34.185078,
		-80.804984
	],
	"29046": [
		34.102331,
		-80.153633
	],
	"29047": [
		33.532723,
		-80.585802
	],
	"29048": [
		33.390561,
		-80.295284
	],
	"29051": [
		33.861626,
		-80.127828
	],
	"29052": [
		33.79831,
		-80.741296
	],
	"29053": [
		33.82754,
		-81.090895
	],
	"29054": [
		33.941953,
		-81.383081
	],
	"29055": [
		34.574244,
		-80.914866
	],
	"29056": [
		33.608638,
		-80.005987
	],
	"29058": [
		34.554283,
		-80.749684
	],
	"29059": [
		33.33003,
		-80.418508
	],
	"29061": [
		33.897493,
		-80.850604
	],
	"29062": [
		34.004286,
		-80.605521
	],
	"29063": [
		34.142131,
		-81.206184
	],
	"29065": [
		34.28514,
		-81.296583
	],
	"29067": [
		34.544166,
		-80.537094
	],
	"29069": [
		34.180119,
		-80.094644
	],
	"29070": [
		33.916667,
		-81.449233
	],
	"29072": [
		34.002137,
		-81.272827
	],
	"29073": [
		33.888739,
		-81.238803
	],
	"29074": [
		34.441127,
		-80.818402
	],
	"29075": [
		34.218134,
		-81.299071
	],
	"29078": [
		34.182184,
		-80.708825
	],
	"29079": [
		34.286517,
		-80.113717
	],
	"29080": [
		34.012164,
		-80.085577
	],
	"29081": [
		33.08908,
		-81.047373
	],
	"29082": [
		33.038215,
		-80.939141
	],
	"29101": [
		34.460141,
		-80.247131
	],
	"29102": [
		33.641983,
		-80.188481
	],
	"29104": [
		34.001026,
		-80.213437
	],
	"29105": [
		33.806395,
		-81.593579
	],
	"29107": [
		33.529824,
		-81.124331
	],
	"29108": [
		34.305524,
		-81.627342
	],
	"29111": [
		33.789038,
		-80.006369
	],
	"29112": [
		33.625345,
		-81.081592
	],
	"29113": [
		33.432453,
		-81.135322
	],
	"29114": [
		33.954301,
		-79.932279
	],
	"29115": [
		33.477386,
		-80.849144
	],
	"29117": [
		33.498262,
		-80.848831
	],
	"29118": [
		33.569394,
		-80.888558
	],
	"29122": [
		34.238809,
		-81.328334
	],
	"29123": [
		33.764652,
		-81.271451
	],
	"29125": [
		33.702759,
		-80.462307
	],
	"29126": [
		34.328933,
		-81.419482
	],
	"29127": [
		34.153252,
		-81.512463
	],
	"29128": [
		34.095053,
		-80.526184
	],
	"29129": [
		33.789287,
		-81.672715
	],
	"29130": [
		34.331608,
		-80.880412
	],
	"29133": [
		33.358911,
		-80.803127
	],
	"29135": [
		33.701219,
		-80.757171
	],
	"29137": [
		33.596191,
		-81.321416
	],
	"29138": [
		34.042392,
		-81.776152
	],
	"29142": [
		33.463477,
		-80.524523
	],
	"29145": [
		34.228719,
		-81.766201
	],
	"29146": [
		33.508249,
		-81.295412
	],
	"29147": [
		34.091766,
		-80.966488
	],
	"29148": [
		33.534198,
		-80.337458
	],
	"29150": [
		33.874774,
		-80.354069
	],
	"29152": [
		33.972292,
		-80.465816
	],
	"29153": [
		33.959249,
		-80.308378
	],
	"29154": [
		33.879261,
		-80.440418
	],
	"29160": [
		33.746888,
		-81.035516
	],
	"29161": [
		34.10365,
		-79.943426
	],
	"29162": [
		33.885889,
		-80.014019
	],
	"29163": [
		33.429587,
		-80.439904
	],
	"29164": [
		33.662168,
		-81.416471
	],
	"29166": [
		33.901807,
		-81.705732
	],
	"29168": [
		33.848449,
		-80.540767
	],
	"29169": [
		33.997503,
		-81.097406
	],
	"29170": [
		33.937674,
		-81.147203
	],
	"29172": [
		33.912417,
		-81.076978
	],
	"29175": [
		34.443849,
		-80.598356
	],
	"29178": [
		34.493359,
		-81.606734
	],
	"29180": [
		34.366465,
		-81.093684
	],
	"29201": [
		33.982484,
		-81.028098
	],
	"29202": [
		33.993558,
		-81.031002
	],
	"29203": [
		34.101723,
		-81.042085
	],
	"29204": [
		34.029148,
		-81.002526
	],
	"29205": [
		33.990057,
		-80.997249
	],
	"29206": [
		34.026415,
		-80.958995
	],
	"29207": [
		34.042447,
		-80.845986
	],
	"29208": [
		33.998133,
		-81.028152
	],
	"29209": [
		33.926751,
		-80.950364
	],
	"29210": [
		34.046162,
		-81.10658
	],
	"29212": [
		34.076275,
		-81.19878
	],
	"29223": [
		34.092634,
		-80.919271
	],
	"29225": [
		33.996177,
		-81.025028
	],
	"29229": [
		34.139526,
		-80.888209
	],
	"29301": [
		34.934028,
		-82.010697
	],
	"29302": [
		34.884446,
		-81.8436
	],
	"29303": [
		34.99496,
		-81.963863
	],
	"29306": [
		34.892633,
		-81.921504
	],
	"29307": [
		34.982716,
		-81.831555
	],
	"29316": [
		35.043045,
		-81.975107
	],
	"29320": [
		34.958401,
		-81.993676
	],
	"29321": [
		34.714655,
		-81.741066
	],
	"29322": [
		35.121041,
		-82.132234
	],
	"29323": [
		35.126341,
		-81.907463
	],
	"29324": [
		34.983686,
		-81.826635
	],
	"29325": [
		34.465141,
		-81.849816
	],
	"29329": [
		34.994511,
		-81.835995
	],
	"29330": [
		35.052634,
		-81.804153
	],
	"29331": [
		34.651836,
		-81.844085
	],
	"29332": [
		34.278674,
		-81.970369
	],
	"29333": [
		34.971201,
		-81.910226
	],
	"29334": [
		34.905551,
		-82.124414
	],
	"29335": [
		34.646344,
		-81.90434
	],
	"29338": [
		35.135513,
		-82.001598
	],
	"29340": [
		34.972313,
		-81.585917
	],
	"29341": [
		35.11191,
		-81.713162
	],
	"29346": [
		34.945078,
		-81.836373
	],
	"29349": [
		35.067335,
		-82.068095
	],
	"29351": [
		34.421034,
		-81.808045
	],
	"29353": [
		34.830741,
		-81.648604
	],
	"29355": [
		34.289571,
		-81.826418
	],
	"29356": [
		35.142074,
		-82.280831
	],
	"29360": [
		34.49869,
		-82.051054
	],
	"29364": [
		34.76248,
		-81.470669
	],
	"29365": [
		34.980991,
		-82.171853
	],
	"29368": [
		35.081579,
		-81.863411
	],
	"29369": [
		34.86562,
		-82.019463
	],
	"29370": [
		34.373779,
		-81.963365
	],
	"29372": [
		34.901781,
		-81.711294
	],
	"29373": [
		34.924482,
		-81.747544
	],
	"29374": [
		34.784549,
		-81.853472
	],
	"29375": [
		34.861302,
		-82.113804
	],
	"29376": [
		34.811382,
		-81.944219
	],
	"29377": [
		34.930629,
		-82.095109
	],
	"29378": [
		34.966907,
		-81.968539
	],
	"29379": [
		34.682349,
		-81.608728
	],
	"29384": [
		34.340248,
		-82.090128
	],
	"29385": [
		34.972963,
		-82.101417
	],
	"29388": [
		34.764315,
		-82.044633
	],
	"29401": [
		32.77718,
		-79.932
	],
	"29403": [
		32.8059,
		-79.94318
	],
	"29404": [
		32.898999,
		-80.049739
	],
	"29405": [
		32.856252,
		-79.981994
	],
	"29406": [
		32.937267,
		-80.035245
	],
	"29407": [
		32.79893,
		-79.997803
	],
	"29409": [
		32.796088,
		-79.960493
	],
	"29410": [
		32.93271,
		-80.002982
	],
	"29412": [
		32.711469,
		-79.952603
	],
	"29414": [
		32.839966,
		-80.089182
	],
	"29418": [
		32.909523,
		-80.094219
	],
	"29420": [
		32.931762,
		-80.100722
	],
	"29423": [
		32.97876,
		-80.071205
	],
	"29424": [
		32.783637,
		-79.937365
	],
	"29426": [
		32.797192,
		-80.370638
	],
	"29429": [
		32.973563,
		-79.650117
	],
	"29431": [
		33.278777,
		-79.882079
	],
	"29432": [
		33.231512,
		-80.808866
	],
	"29434": [
		33.140888,
		-79.843725
	],
	"29435": [
		32.972972,
		-80.466445
	],
	"29436": [
		33.315358,
		-80.18725
	],
	"29437": [
		33.139994,
		-80.431756
	],
	"29438": [
		32.564708,
		-80.32239
	],
	"29439": [
		32.647997,
		-79.960079
	],
	"29440": [
		33.38111,
		-79.32976
	],
	"29445": [
		32.997577,
		-79.966622
	],
	"29446": [
		32.630668,
		-80.55151
	],
	"29448": [
		33.255537,
		-80.452774
	],
	"29449": [
		32.700369,
		-80.287056
	],
	"29450": [
		33.065935,
		-79.784197
	],
	"29451": [
		32.822611,
		-79.754581
	],
	"29452": [
		32.677951,
		-80.461468
	],
	"29453": [
		33.225592,
		-79.642781
	],
	"29455": [
		32.624718,
		-80.040587
	],
	"29456": [
		32.985877,
		-80.11544
	],
	"29458": [
		33.093336,
		-79.461188
	],
	"29461": [
		33.159784,
		-80.007539
	],
	"29464": [
		32.816699,
		-79.858222
	],
	"29466": [
		32.877758,
		-79.792013
	],
	"29468": [
		33.429175,
		-80.056875
	],
	"29469": [
		33.257863,
		-80.05637
	],
	"29470": [
		32.826929,
		-80.253739
	],
	"29471": [
		33.192675,
		-80.670417
	],
	"29472": [
		33.045536,
		-80.326698
	],
	"29474": [
		32.884258,
		-80.523838
	],
	"29475": [
		32.957264,
		-80.80648
	],
	"29477": [
		33.163169,
		-80.56521
	],
	"29479": [
		33.380638,
		-79.890574
	],
	"29481": [
		33.108529,
		-80.800481
	],
	"29482": [
		32.764502,
		-79.854987
	],
	"29483": [
		33.058011,
		-80.182989
	],
	"29485": [
		32.947923,
		-80.189918
	],
	"29487": [
		32.657682,
		-80.183948
	],
	"29488": [
		32.906763,
		-80.672836
	],
	"29492": [
		32.903802,
		-79.911163
	],
	"29493": [
		33.034143,
		-80.842844
	],
	"29501": [
		34.205933,
		-79.82626
	],
	"29505": [
		34.130066,
		-79.688893
	],
	"29506": [
		34.221377,
		-79.650336
	],
	"29510": [
		33.454312,
		-79.613121
	],
	"29511": [
		33.975732,
		-79.122716
	],
	"29512": [
		34.619033,
		-79.718041
	],
	"29516": [
		34.437391,
		-79.628216
	],
	"29518": [
		33.788608,
		-79.847975
	],
	"29519": [
		34.018637,
		-79.359821
	],
	"29520": [
		34.679486,
		-79.927292
	],
	"29525": [
		34.552415,
		-79.540885
	],
	"29526": [
		33.847406,
		-78.947093
	],
	"29527": [
		33.785083,
		-79.140176
	],
	"29530": [
		33.996055,
		-79.740075
	],
	"29532": [
		34.280331,
		-79.869336
	],
	"29536": [
		34.419502,
		-79.373048
	],
	"29540": [
		34.377298,
		-79.846185
	],
	"29541": [
		34.064949,
		-79.74075
	],
	"29543": [
		34.287605,
		-79.265927
	],
	"29544": [
		33.926098,
		-79.255583
	],
	"29545": [
		34.16366,
		-78.966477
	],
	"29546": [
		33.883845,
		-79.349409
	],
	"29547": [
		34.496287,
		-79.334829
	],
	"29550": [
		34.399975,
		-80.082806
	],
	"29554": [
		33.70405,
		-79.381598
	],
	"29555": [
		33.845583,
		-79.483856
	],
	"29556": [
		33.668227,
		-79.763139
	],
	"29560": [
		33.827895,
		-79.742142
	],
	"29563": [
		34.353366,
		-79.208673
	],
	"29564": [
		33.449386,
		-79.848408
	],
	"29565": [
		34.358052,
		-79.499289
	],
	"29566": [
		33.873402,
		-78.666957
	],
	"29567": [
		34.560972,
		-79.432683
	],
	"29568": [
		33.913616,
		-78.750292
	],
	"29569": [
		34.032632,
		-78.911583
	],
	"29570": [
		34.667866,
		-79.562707
	],
	"29571": [
		34.135123,
		-79.425041
	],
	"29572": [
		33.772568,
		-78.785662
	],
	"29574": [
		34.165413,
		-79.260831
	],
	"29575": [
		33.629132,
		-78.970412
	],
	"29576": [
		33.56209,
		-79.061087
	],
	"29577": [
		33.698452,
		-78.902659
	],
	"29579": [
		33.753481,
		-78.916375
	],
	"29580": [
		33.653101,
		-79.551975
	],
	"29581": [
		34.195802,
		-79.113483
	],
	"29582": [
		33.838529,
		-78.660551
	],
	"29583": [
		33.977851,
		-79.571077
	],
	"29584": [
		34.583313,
		-80.065768
	],
	"29585": [
		33.520097,
		-79.135803
	],
	"29588": [
		33.671137,
		-79.02427
	],
	"29590": [
		33.56892,
		-79.848696
	],
	"29591": [
		33.937999,
		-79.76229
	],
	"29592": [
		34.264635,
		-79.483865
	],
	"29593": [
		34.493107,
		-79.856964
	],
	"29594": [
		34.640233,
		-79.57736
	],
	"29596": [
		34.744162,
		-79.830739
	],
	"29601": [
		34.847112,
		-82.402264
	],
	"29605": [
		34.774425,
		-82.37661
	],
	"29607": [
		34.81204,
		-82.330021
	],
	"29609": [
		34.912592,
		-82.38817
	],
	"29611": [
		34.830934,
		-82.458497
	],
	"29613": [
		34.924255,
		-82.440488
	],
	"29614": [
		34.873771,
		-82.363149
	],
	"29615": [
		34.856825,
		-82.296139
	],
	"29617": [
		34.911021,
		-82.468095
	],
	"29620": [
		34.182407,
		-82.425607
	],
	"29621": [
		34.506942,
		-82.604736
	],
	"29624": [
		34.435943,
		-82.624115
	],
	"29625": [
		34.555099,
		-82.765677
	],
	"29626": [
		34.460802,
		-82.756514
	],
	"29627": [
		34.518602,
		-82.476359
	],
	"29628": [
		34.089135,
		-82.559262
	],
	"29630": [
		34.738673,
		-82.799161
	],
	"29631": [
		34.681593,
		-82.817762
	],
	"29634": [
		34.675278,
		-82.835901
	],
	"29635": [
		35.077658,
		-82.626703
	],
	"29638": [
		34.363867,
		-82.338204
	],
	"29639": [
		34.303669,
		-82.428794
	],
	"29640": [
		34.87771,
		-82.575421
	],
	"29642": [
		34.776943,
		-82.563722
	],
	"29643": [
		34.516357,
		-82.996359
	],
	"29644": [
		34.668418,
		-82.190145
	],
	"29645": [
		34.587907,
		-82.127131
	],
	"29646": [
		34.136053,
		-82.14847
	],
	"29649": [
		34.238919,
		-82.145019
	],
	"29650": [
		34.898138,
		-82.258067
	],
	"29651": [
		35.02383,
		-82.279564
	],
	"29653": [
		34.306003,
		-82.232469
	],
	"29654": [
		34.460528,
		-82.361886
	],
	"29655": [
		34.264095,
		-82.640492
	],
	"29657": [
		34.767066,
		-82.686594
	],
	"29658": [
		34.760705,
		-83.284526
	],
	"29659": [
		34.20977,
		-82.646988
	],
	"29661": [
		35.147593,
		-82.529539
	],
	"29662": [
		34.778208,
		-82.301835
	],
	"29664": [
		34.860889,
		-83.157553
	],
	"29665": [
		34.724825,
		-82.914632
	],
	"29666": [
		34.113326,
		-81.979552
	],
	"29667": [
		34.764792,
		-82.75669
	],
	"29669": [
		34.638704,
		-82.412542
	],
	"29670": [
		34.643979,
		-82.723237
	],
	"29671": [
		34.934777,
		-82.728691
	],
	"29672": [
		34.751278,
		-82.934285
	],
	"29673": [
		34.715864,
		-82.45552
	],
	"29676": [
		34.950446,
		-82.983481
	],
	"29678": [
		34.63447,
		-82.937301
	],
	"29680": [
		34.685122,
		-82.288811
	],
	"29681": [
		34.767679,
		-82.225003
	],
	"29682": [
		34.836191,
		-82.853397
	],
	"29683": [
		35.029999,
		-82.494173
	],
	"29684": [
		34.379432,
		-82.718704
	],
	"29685": [
		34.991238,
		-82.842298
	],
	"29686": [
		34.958106,
		-83.053044
	],
	"29687": [
		34.986636,
		-82.327451
	],
	"29689": [
		34.534253,
		-82.868342
	],
	"29690": [
		35.059806,
		-82.417198
	],
	"29691": [
		34.783465,
		-83.083658
	],
	"29692": [
		34.41263,
		-82.219492
	],
	"29693": [
		34.644394,
		-83.152437
	],
	"29696": [
		34.781122,
		-83.008462
	],
	"29697": [
		34.625593,
		-82.548639
	],
	"29702": [
		35.116068,
		-81.473073
	],
	"29704": [
		34.83212,
		-80.909792
	],
	"29706": [
		34.715558,
		-81.23453
	],
	"29707": [
		34.974384,
		-80.862388
	],
	"29708": [
		35.048763,
		-80.986988
	],
	"29709": [
		34.720167,
		-80.098457
	],
	"29710": [
		35.106284,
		-81.221471
	],
	"29712": [
		34.797966,
		-80.975531
	],
	"29714": [
		34.712239,
		-80.915313
	],
	"29715": [
		35.009851,
		-80.928735
	],
	"29717": [
		34.95073,
		-81.448855
	],
	"29718": [
		34.624163,
		-80.331295
	],
	"29720": [
		34.740563,
		-80.732729
	],
	"29724": [
		34.773948,
		-81.011121
	],
	"29726": [
		34.860853,
		-81.236148
	],
	"29727": [
		34.719265,
		-80.264601
	],
	"29728": [
		34.764953,
		-80.400558
	],
	"29729": [
		34.689134,
		-81.00676
	],
	"29730": [
		34.889889,
		-81.017848
	],
	"29732": [
		34.971166,
		-81.081284
	],
	"29733": [
		34.939585,
		-81.031961
	],
	"29741": [
		34.725288,
		-80.195526
	],
	"29742": [
		34.869981,
		-81.392261
	],
	"29743": [
		35.012138,
		-81.390395
	],
	"29745": [
		34.990942,
		-81.214096
	],
	"29801": [
		33.588993,
		-81.697037
	],
	"29803": [
		33.490342,
		-81.762819
	],
	"29805": [
		33.647579,
		-81.604076
	],
	"29809": [
		33.418902,
		-81.69249
	],
	"29810": [
		32.986368,
		-81.37811
	],
	"29812": [
		33.231937,
		-81.428404
	],
	"29816": [
		33.500764,
		-81.871584
	],
	"29817": [
		33.370534,
		-81.273172
	],
	"29819": [
		34.044227,
		-82.227378
	],
	"29821": [
		33.643047,
		-82.107049
	],
	"29824": [
		33.819698,
		-81.99337
	],
	"29826": [
		33.385382,
		-81.359584
	],
	"29827": [
		32.963155,
		-81.253906
	],
	"29828": [
		33.522812,
		-81.828197
	],
	"29829": [
		33.57472,
		-81.857718
	],
	"29831": [
		33.297455,
		-81.799584
	],
	"29832": [
		33.838994,
		-81.803656
	],
	"29834": [
		33.51293,
		-81.856747
	],
	"29835": [
		33.919499,
		-82.288971
	],
	"29836": [
		33.126708,
		-81.557127
	],
	"29838": [
		33.747484,
		-82.15108
	],
	"29840": [
		34.007202,
		-82.521302
	],
	"29841": [
		33.526407,
		-81.939337
	],
	"29842": [
		33.457043,
		-81.86071
	],
	"29843": [
		33.182069,
		-81.179772
	],
	"29844": [
		33.769606,
		-82.241925
	],
	"29845": [
		33.817844,
		-82.201423
	],
	"29847": [
		33.704138,
		-81.847277
	],
	"29848": [
		33.970417,
		-82.075911
	],
	"29849": [
		33.103626,
		-81.238347
	],
	"29850": [
		33.609668,
		-81.816976
	],
	"29851": [
		33.507439,
		-81.811783
	],
	"29853": [
		33.403112,
		-81.422644
	],
	"29856": [
		33.485256,
		-81.511831
	],
	"29860": [
		33.614687,
		-81.984429
	],
	"29899": [
		33.928023,
		-82.250602
	],
	"29902": [
		32.334933,
		-80.684304
	],
	"29904": [
		32.457441,
		-80.717905
	],
	"29905": [
		32.351589,
		-80.682217
	],
	"29906": [
		32.445112,
		-80.752875
	],
	"29907": [
		32.474692,
		-80.599222
	],
	"29909": [
		32.336832,
		-80.847794
	],
	"29910": [
		32.219462,
		-80.898538
	],
	"29911": [
		32.94116,
		-81.141681
	],
	"29912": [
		32.584548,
		-80.928494
	],
	"29915": [
		32.122105,
		-80.856036
	],
	"29916": [
		32.718462,
		-80.967103
	],
	"29918": [
		32.744462,
		-81.247365
	],
	"29920": [
		32.364221,
		-80.553611
	],
	"29921": [
		32.682581,
		-81.172909
	],
	"29922": [
		32.625831,
		-81.277273
	],
	"29923": [
		32.859518,
		-81.246422
	],
	"29924": [
		32.876885,
		-81.111209
	],
	"29926": [
		32.238247,
		-80.740263
	],
	"29927": [
		32.226824,
		-81.057442
	],
	"29928": [
		32.163171,
		-80.755765
	],
	"29929": [
		32.927872,
		-80.938536
	],
	"29932": [
		32.818148,
		-81.348641
	],
	"29934": [
		32.591591,
		-81.107381
	],
	"29935": [
		32.383349,
		-80.693678
	],
	"29936": [
		32.482042,
		-80.971987
	],
	"29939": [
		32.672512,
		-81.244025
	],
	"29940": [
		32.545912,
		-80.713593
	],
	"29941": [
		32.550309,
		-80.806715
	],
	"29943": [
		32.479249,
		-81.192323
	],
	"29944": [
		32.795699,
		-81.034521
	],
	"29945": [
		32.673313,
		-80.765932
	],
	"30002": [
		33.773335,
		-84.261667
	],
	"30004": [
		34.145614,
		-84.291894
	],
	"30005": [
		34.08904,
		-84.217046
	],
	"30008": [
		33.900567,
		-84.590924
	],
	"30009": [
		34.079085,
		-84.305206
	],
	"30011": [
		34.019859,
		-83.837163
	],
	"30012": [
		33.717806,
		-84.002515
	],
	"30013": [
		33.64517,
		-83.972188
	],
	"30014": [
		33.580062,
		-83.823102
	],
	"30016": [
		33.517433,
		-83.928703
	],
	"30017": [
		33.890533,
		-83.961879
	],
	"30019": [
		33.97561,
		-83.883747
	],
	"30021": [
		33.806929,
		-84.237588
	],
	"30022": [
		34.029866,
		-84.239742
	],
	"30024": [
		34.062971,
		-84.09077
	],
	"30025": [
		33.655902,
		-83.696581
	],
	"30028": [
		34.29305,
		-84.176167
	],
	"30030": [
		33.771947,
		-84.29027
	],
	"30032": [
		33.740668,
		-84.264466
	],
	"30033": [
		33.811659,
		-84.28323
	],
	"30034": [
		33.690867,
		-84.248622
	],
	"30035": [
		33.724452,
		-84.204244
	],
	"30038": [
		33.66646,
		-84.139855
	],
	"30039": [
		33.799851,
		-84.035678
	],
	"30040": [
		34.210349,
		-84.187794
	],
	"30041": [
		34.198721,
		-84.101962
	],
	"30043": [
		33.999276,
		-84.009512
	],
	"30044": [
		33.922046,
		-84.065671
	],
	"30045": [
		33.936518,
		-83.927669
	],
	"30046": [
		33.948632,
		-83.995766
	],
	"30047": [
		33.871867,
		-84.112585
	],
	"30052": [
		33.815151,
		-83.893561
	],
	"30054": [
		33.67325,
		-83.871806
	],
	"30055": [
		33.497411,
		-83.749784
	],
	"30056": [
		33.50025,
		-83.659584
	],
	"30058": [
		33.73835,
		-84.107376
	],
	"30060": [
		33.925711,
		-84.541608
	],
	"30062": [
		34.005578,
		-84.468945
	],
	"30064": [
		33.940455,
		-84.609708
	],
	"30066": [
		34.032388,
		-84.505154
	],
	"30067": [
		33.934278,
		-84.462185
	],
	"30068": [
		33.968116,
		-84.431704
	],
	"30070": [
		33.574432,
		-83.894702
	],
	"30071": [
		33.940652,
		-84.206734
	],
	"30072": [
		33.79141,
		-84.204844
	],
	"30075": [
		34.052691,
		-84.391582
	],
	"30076": [
		34.028499,
		-84.311416
	],
	"30078": [
		33.861019,
		-84.017993
	],
	"30079": [
		33.792055,
		-84.257369
	],
	"30080": [
		33.86994,
		-84.498081
	],
	"30082": [
		33.854654,
		-84.536437
	],
	"30083": [
		33.797412,
		-84.197984
	],
	"30084": [
		33.854097,
		-84.216155
	],
	"30087": [
		33.805802,
		-84.126929
	],
	"30088": [
		33.756052,
		-84.182363
	],
	"30092": [
		33.972386,
		-84.231986
	],
	"30093": [
		33.908536,
		-84.177349
	],
	"30094": [
		33.612505,
		-84.051523
	],
	"30096": [
		33.974292,
		-84.145426
	],
	"30097": [
		34.026142,
		-84.145592
	],
	"30101": [
		34.034515,
		-84.707349
	],
	"30102": [
		34.110194,
		-84.631394
	],
	"30103": [
		34.366336,
		-84.917546
	],
	"30104": [
		34.087138,
		-85.056489
	],
	"30105": [
		34.432548,
		-85.172442
	],
	"30106": [
		33.839078,
		-84.62821
	],
	"30107": [
		34.336291,
		-84.345793
	],
	"30108": [
		33.5317,
		-85.262996
	],
	"30110": [
		33.744459,
		-85.135938
	],
	"30113": [
		33.850746,
		-85.205308
	],
	"30114": [
		34.247838,
		-84.524468
	],
	"30115": [
		34.204092,
		-84.400462
	],
	"30116": [
		33.54059,
		-85.003082
	],
	"30117": [
		33.581851,
		-85.132439
	],
	"30118": [
		33.572388,
		-85.10362
	],
	"30120": [
		34.167879,
		-84.852014
	],
	"30121": [
		34.209221,
		-84.778006
	],
	"30122": [
		33.766909,
		-84.641356
	],
	"30124": [
		34.133691,
		-85.345801
	],
	"30125": [
		34.000316,
		-85.276531
	],
	"30126": [
		33.815023,
		-84.553798
	],
	"30127": [
		33.874556,
		-84.694713
	],
	"30132": [
		33.988832,
		-84.858967
	],
	"30134": [
		33.777518,
		-84.781392
	],
	"30135": [
		33.67052,
		-84.73428
	],
	"30137": [
		34.126177,
		-84.761354
	],
	"30139": [
		34.432341,
		-84.705495
	],
	"30141": [
		33.86043,
		-84.769883
	],
	"30143": [
		34.459958,
		-84.431752
	],
	"30144": [
		34.036845,
		-84.591033
	],
	"30145": [
		34.24566,
		-84.985878
	],
	"30147": [
		34.150627,
		-85.208239
	],
	"30148": [
		34.458792,
		-84.258613
	],
	"30149": [
		34.309754,
		-85.226015
	],
	"30152": [
		33.989259,
		-84.645866
	],
	"30153": [
		33.959882,
		-85.054452
	],
	"30157": [
		33.884708,
		-84.871928
	],
	"30161": [
		34.242301,
		-85.171371
	],
	"30164": [
		33.396015,
		-83.834275
	],
	"30165": [
		34.302923,
		-85.269104
	],
	"30168": [
		33.783542,
		-84.588106
	],
	"30170": [
		33.429229,
		-85.169473
	],
	"30171": [
		34.343395,
		-84.726262
	],
	"30173": [
		34.133121,
		-85.153505
	],
	"30175": [
		34.534915,
		-84.526711
	],
	"30176": [
		33.766844,
		-85.301029
	],
	"30177": [
		34.411307,
		-84.377876
	],
	"30178": [
		34.095453,
		-84.971074
	],
	"30179": [
		33.779335,
		-85.013502
	],
	"30180": [
		33.717103,
		-84.918032
	],
	"30182": [
		33.655819,
		-85.248832
	],
	"30183": [
		34.338804,
		-84.602425
	],
	"30184": [
		34.252072,
		-84.741005
	],
	"30185": [
		33.519802,
		-84.918098
	],
	"30187": [
		33.662549,
		-84.847233
	],
	"30188": [
		34.123529,
		-84.457649
	],
	"30189": [
		34.124224,
		-84.570679
	],
	"30204": [
		33.05605,
		-84.121042
	],
	"30205": [
		33.267427,
		-84.475138
	],
	"30206": [
		33.096058,
		-84.458228
	],
	"30213": [
		33.589297,
		-84.636762
	],
	"30214": [
		33.490464,
		-84.485997
	],
	"30215": [
		33.391613,
		-84.456432
	],
	"30216": [
		33.228834,
		-83.884863
	],
	"30217": [
		33.281895,
		-85.133844
	],
	"30218": [
		33.129318,
		-84.587178
	],
	"30220": [
		33.225499,
		-84.823547
	],
	"30222": [
		33.044355,
		-84.743495
	],
	"30223": [
		33.288801,
		-84.279923
	],
	"30224": [
		33.204493,
		-84.239727
	],
	"30228": [
		33.404147,
		-84.30735
	],
	"30230": [
		33.16449,
		-84.920565
	],
	"30233": [
		33.292157,
		-83.969544
	],
	"30234": [
		33.323884,
		-84.030964
	],
	"30236": [
		33.524478,
		-84.325439
	],
	"30238": [
		33.493294,
		-84.37916
	],
	"30240": [
		33.036764,
		-85.120092
	],
	"30241": [
		33.022315,
		-84.949516
	],
	"30248": [
		33.351576,
		-84.105959
	],
	"30250": [
		33.436535,
		-84.314213
	],
	"30251": [
		33.198174,
		-84.698112
	],
	"30252": [
		33.473512,
		-84.057165
	],
	"30253": [
		33.448926,
		-84.18357
	],
	"30256": [
		33.007484,
		-84.3099
	],
	"30257": [
		33.143414,
		-84.18622
	],
	"30258": [
		32.972488,
		-84.4491
	],
	"30259": [
		33.266198,
		-84.737458
	],
	"30260": [
		33.584687,
		-84.327348
	],
	"30263": [
		33.388415,
		-84.858937
	],
	"30265": [
		33.418686,
		-84.713134
	],
	"30268": [
		33.54643,
		-84.722632
	],
	"30269": [
		33.391904,
		-84.570611
	],
	"30273": [
		33.583798,
		-84.271027
	],
	"30274": [
		33.554561,
		-84.399687
	],
	"30275": [
		33.437124,
		-84.874183
	],
	"30276": [
		33.26367,
		-84.570824
	],
	"30277": [
		33.375308,
		-84.649196
	],
	"30281": [
		33.567898,
		-84.193388
	],
	"30284": [
		33.342874,
		-84.288959
	],
	"30285": [
		32.987673,
		-84.258191
	],
	"30286": [
		32.879167,
		-84.330566
	],
	"30288": [
		33.652831,
		-84.327109
	],
	"30289": [
		33.322887,
		-84.63387
	],
	"30290": [
		33.476407,
		-84.589709
	],
	"30291": [
		33.575891,
		-84.543792
	],
	"30292": [
		33.168489,
		-84.393225
	],
	"30293": [
		32.976649,
		-84.611505
	],
	"30294": [
		33.639853,
		-84.26715
	],
	"30295": [
		33.090279,
		-84.310405
	],
	"30296": [
		33.563185,
		-84.441151
	],
	"30297": [
		33.615841,
		-84.373002
	],
	"30303": [
		33.753271,
		-84.389938
	],
	"30305": [
		33.835696,
		-84.389116
	],
	"30306": [
		33.78814,
		-84.352625
	],
	"30307": [
		33.771079,
		-84.3336
	],
	"30308": [
		33.771127,
		-84.378108
	],
	"30309": [
		33.799896,
		-84.3858
	],
	"30310": [
		33.726586,
		-84.425995
	],
	"30311": [
		33.723262,
		-84.475994
	],
	"30312": [
		33.744724,
		-84.375241
	],
	"30313": [
		33.764539,
		-84.397339
	],
	"30314": [
		33.757576,
		-84.432245
	],
	"30315": [
		33.702829,
		-84.382515
	],
	"30316": [
		33.711546,
		-84.331796
	],
	"30317": [
		33.747999,
		-84.315586
	],
	"30318": [
		33.792328,
		-84.447753
	],
	"30319": [
		33.875954,
		-84.334763
	],
	"30322": [
		33.793594,
		-84.326128
	],
	"30324": [
		33.818405,
		-84.358175
	],
	"30326": [
		33.849518,
		-84.363971
	],
	"30327": [
		33.869694,
		-84.4173
	],
	"30328": [
		33.932538,
		-84.385947
	],
	"30329": [
		33.827487,
		-84.323013
	],
	"30331": [
		33.707455,
		-84.544149
	],
	"30332": [
		33.778271,
		-84.404537
	],
	"30334": [
		33.748855,
		-84.387243
	],
	"30336": [
		33.738375,
		-84.5676
	],
	"30337": [
		33.640147,
		-84.450081
	],
	"30338": [
		33.946218,
		-84.318119
	],
	"30339": [
		33.876174,
		-84.462357
	],
	"30340": [
		33.897873,
		-84.252804
	],
	"30341": [
		33.888505,
		-84.289532
	],
	"30342": [
		33.882179,
		-84.375289
	],
	"30344": [
		33.676362,
		-84.460793
	],
	"30345": [
		33.851652,
		-84.283685
	],
	"30346": [
		33.924252,
		-84.338855
	],
	"30349": [
		33.622488,
		-84.523908
	],
	"30350": [
		33.980254,
		-84.330016
	],
	"30354": [
		33.661498,
		-84.386895
	],
	"30360": [
		33.933788,
		-84.272659
	],
	"30363": [
		33.791004,
		-84.398978
	],
	"30401": [
		32.599617,
		-82.352575
	],
	"30410": [
		32.188589,
		-82.51347
	],
	"30411": [
		32.128124,
		-82.79438
	],
	"30412": [
		32.078922,
		-82.490792
	],
	"30413": [
		32.88898,
		-82.510648
	],
	"30415": [
		32.324484,
		-81.603497
	],
	"30417": [
		32.170468,
		-81.920992
	],
	"30420": [
		32.288422,
		-82.152736
	],
	"30421": [
		32.179599,
		-82.107566
	],
	"30423": [
		32.148806,
		-81.830641
	],
	"30425": [
		32.682022,
		-82.094572
	],
	"30426": [
		33.035037,
		-81.628674
	],
	"30427": [
		31.922905,
		-81.962446
	],
	"30428": [
		32.224545,
		-82.71513
	],
	"30429": [
		32.165446,
		-81.936169
	],
	"30434": [
		33.025668,
		-82.383791
	],
	"30436": [
		32.154894,
		-82.293036
	],
	"30438": [
		32.165397,
		-82.020504
	],
	"30439": [
		32.407098,
		-82.078795
	],
	"30441": [
		32.79705,
		-82.224945
	],
	"30442": [
		32.799793,
		-81.983529
	],
	"30445": [
		32.163934,
		-82.588515
	],
	"30446": [
		32.563486,
		-81.463016
	],
	"30448": [
		32.48824,
		-82.363384
	],
	"30449": [
		32.515224,
		-81.561033
	],
	"30450": [
		32.562251,
		-81.923131
	],
	"30451": [
		32.390725,
		-81.952417
	],
	"30452": [
		32.325315,
		-81.888781
	],
	"30453": [
		32.011133,
		-82.121758
	],
	"30454": [
		32.436077,
		-82.730358
	],
	"30455": [
		32.690978,
		-81.802282
	],
	"30456": [
		32.980717,
		-81.79614
	],
	"30457": [
		32.400272,
		-82.567512
	],
	"30458": [
		32.399447,
		-81.82894
	],
	"30460": [
		32.418921,
		-81.781662
	],
	"30461": [
		32.511828,
		-81.718844
	],
	"30464": [
		32.437229,
		-82.224961
	],
	"30467": [
		32.753793,
		-81.603534
	],
	"30470": [
		32.313907,
		-82.561036
	],
	"30471": [
		32.543263,
		-82.18091
	],
	"30473": [
		32.016897,
		-82.46883
	],
	"30474": [
		32.238578,
		-82.417773
	],
	"30475": [
		32.224698,
		-82.368594
	],
	"30477": [
		32.861525,
		-82.401582
	],
	"30501": [
		34.319072,
		-83.814393
	],
	"30504": [
		34.268204,
		-83.893289
	],
	"30506": [
		34.346947,
		-83.895595
	],
	"30507": [
		34.247502,
		-83.77385
	],
	"30510": [
		34.444855,
		-83.570701
	],
	"30511": [
		34.449698,
		-83.486672
	],
	"30512": [
		34.856753,
		-83.967998
	],
	"30513": [
		34.821043,
		-84.322383
	],
	"30516": [
		34.380913,
		-83.030697
	],
	"30517": [
		34.130358,
		-83.797204
	],
	"30518": [
		34.130846,
		-84.027398
	],
	"30519": [
		34.087437,
		-83.944991
	],
	"30520": [
		34.34005,
		-83.082621
	],
	"30521": [
		34.362448,
		-83.292322
	],
	"30522": [
		34.796183,
		-84.341102
	],
	"30523": [
		34.716543,
		-83.552878
	],
	"30525": [
		34.907223,
		-83.369473
	],
	"30527": [
		34.480827,
		-83.781847
	],
	"30528": [
		34.621918,
		-83.79462
	],
	"30529": [
		34.217179,
		-83.482653
	],
	"30530": [
		34.222921,
		-83.393799
	],
	"30531": [
		34.512602,
		-83.592206
	],
	"30533": [
		34.56356,
		-84.020072
	],
	"30534": [
		34.4311,
		-84.144329
	],
	"30535": [
		34.573655,
		-83.574769
	],
	"30536": [
		34.652002,
		-84.359442
	],
	"30537": [
		34.976125,
		-83.320199
	],
	"30538": [
		34.500986,
		-83.263844
	],
	"30540": [
		34.728127,
		-84.543528
	],
	"30541": [
		34.912906,
		-84.539104
	],
	"30542": [
		34.178052,
		-83.909174
	],
	"30543": [
		34.290463,
		-83.649536
	],
	"30545": [
		34.762511,
		-83.762189
	],
	"30546": [
		34.898796,
		-83.696585
	],
	"30547": [
		34.361833,
		-83.455885
	],
	"30548": [
		34.09047,
		-83.767003
	],
	"30549": [
		34.10799,
		-83.577448
	],
	"30552": [
		34.770857,
		-83.443724
	],
	"30553": [
		34.443769,
		-83.084137
	],
	"30554": [
		34.398092,
		-83.661974
	],
	"30555": [
		34.971217,
		-84.436342
	],
	"30557": [
		34.479804,
		-83.18496
	],
	"30558": [
		34.264056,
		-83.566788
	],
	"30559": [
		34.957885,
		-84.274319
	],
	"30560": [
		34.876756,
		-84.204831
	],
	"30562": [
		34.921474,
		-83.381098
	],
	"30563": [
		34.567865,
		-83.454897
	],
	"30564": [
		34.471046,
		-83.887074
	],
	"30565": [
		34.086211,
		-83.411497
	],
	"30566": [
		34.236212,
		-83.89521
	],
	"30567": [
		34.18078,
		-83.676563
	],
	"30568": [
		34.959487,
		-83.432795
	],
	"30571": [
		34.707523,
		-83.694014
	],
	"30572": [
		34.735793,
		-84.072507
	],
	"30573": [
		34.749867,
		-83.416673
	],
	"30575": [
		34.207594,
		-83.713441
	],
	"30576": [
		34.834627,
		-83.452192
	],
	"30577": [
		34.552419,
		-83.325929
	],
	"30581": [
		34.795248,
		-83.423725
	],
	"30582": [
		34.958918,
		-83.900404
	],
	"30601": [
		33.999151,
		-83.346993
	],
	"30602": [
		33.944542,
		-83.372937
	],
	"30605": [
		33.905911,
		-83.323577
	],
	"30606": [
		33.937551,
		-83.424964
	],
	"30607": [
		34.017305,
		-83.447551
	],
	"30609": [
		33.949464,
		-83.382007
	],
	"30619": [
		33.855797,
		-83.244711
	],
	"30620": [
		33.929472,
		-83.758422
	],
	"30621": [
		33.791462,
		-83.492132
	],
	"30622": [
		33.924456,
		-83.517926
	],
	"30623": [
		33.726758,
		-83.541819
	],
	"30624": [
		34.186246,
		-83.044149
	],
	"30625": [
		33.520284,
		-83.33353
	],
	"30627": [
		33.972176,
		-82.963748
	],
	"30628": [
		34.028875,
		-83.213297
	],
	"30629": [
		34.076932,
		-83.110117
	],
	"30630": [
		33.913366,
		-83.147279
	],
	"30631": [
		33.559319,
		-82.875272
	],
	"30633": [
		34.180903,
		-83.249172
	],
	"30634": [
		34.195694,
		-82.945483
	],
	"30635": [
		34.105769,
		-82.793148
	],
	"30641": [
		33.778357,
		-83.574025
	],
	"30642": [
		33.554175,
		-83.194404
	],
	"30643": [
		34.363471,
		-82.908806
	],
	"30646": [
		34.085104,
		-83.299382
	],
	"30648": [
		33.879979,
		-83.052055
	],
	"30650": [
		33.583689,
		-83.473544
	],
	"30655": [
		33.781688,
		-83.696095
	],
	"30656": [
		33.862137,
		-83.716175
	],
	"30660": [
		33.789216,
		-82.951866
	],
	"30662": [
		34.267311,
		-83.1541
	],
	"30663": [
		33.615822,
		-83.600873
	],
	"30664": [
		33.556259,
		-82.798319
	],
	"30665": [
		33.54262,
		-83.062914
	],
	"30666": [
		33.962081,
		-83.584612
	],
	"30667": [
		33.776347,
		-83.14533
	],
	"30668": [
		33.895747,
		-82.697208
	],
	"30669": [
		33.672149,
		-83.120938
	],
	"30673": [
		33.710915,
		-82.713973
	],
	"30677": [
		33.783202,
		-83.373342
	],
	"30678": [
		33.453336,
		-83.065445
	],
	"30680": [
		33.996386,
		-83.69955
	],
	"30683": [
		33.946987,
		-83.25627
	],
	"30701": [
		34.492384,
		-84.958336
	],
	"30705": [
		34.744142,
		-84.731404
	],
	"30707": [
		34.771941,
		-85.359193
	],
	"30708": [
		34.961786,
		-84.664588
	],
	"30710": [
		34.953194,
		-84.911171
	],
	"30711": [
		34.921047,
		-84.711807
	],
	"30720": [
		34.733644,
		-85.000824
	],
	"30721": [
		34.788636,
		-84.916082
	],
	"30725": [
		34.924777,
		-85.352675
	],
	"30726": [
		34.976243,
		-85.139577
	],
	"30728": [
		34.684875,
		-85.22579
	],
	"30730": [
		34.348052,
		-85.417499
	],
	"30731": [
		34.587768,
		-85.477364
	],
	"30733": [
		34.414593,
		-85.050554
	],
	"30734": [
		34.532804,
		-84.714916
	],
	"30735": [
		34.602883,
		-84.882661
	],
	"30736": [
		34.904278,
		-85.135748
	],
	"30738": [
		34.796552,
		-85.480936
	],
	"30739": [
		34.805931,
		-85.215984
	],
	"30740": [
		34.757276,
		-85.072036
	],
	"30741": [
		34.952685,
		-85.281297
	],
	"30742": [
		34.950584,
		-85.243239
	],
	"30746": [
		34.577083,
		-85.027273
	],
	"30747": [
		34.502597,
		-85.302791
	],
	"30750": [
		34.941414,
		-85.388227
	],
	"30751": [
		34.984504,
		-84.73269
	],
	"30752": [
		34.914982,
		-85.537961
	],
	"30753": [
		34.58228,
		-85.2858
	],
	"30755": [
		34.86803,
		-85.04275
	],
	"30756": [
		34.89765,
		-84.977052
	],
	"30757": [
		34.935801,
		-85.441516
	],
	"30802": [
		33.601366,
		-82.299936
	],
	"30803": [
		33.133196,
		-82.549061
	],
	"30805": [
		33.279569,
		-82.191791
	],
	"30807": [
		33.457408,
		-82.648621
	],
	"30808": [
		33.384114,
		-82.391923
	],
	"30809": [
		33.558527,
		-82.171185
	],
	"30810": [
		33.235661,
		-82.589853
	],
	"30812": [
		33.367233,
		-82.028573
	],
	"30813": [
		33.471668,
		-82.220051
	],
	"30814": [
		33.440353,
		-82.299698
	],
	"30815": [
		33.287235,
		-82.088937
	],
	"30816": [
		33.156206,
		-82.166263
	],
	"30817": [
		33.778388,
		-82.430194
	],
	"30818": [
		33.276427,
		-82.338966
	],
	"30820": [
		33.217572,
		-82.709869
	],
	"30821": [
		33.492107,
		-82.737994
	],
	"30822": [
		32.926337,
		-81.852686
	],
	"30823": [
		33.226005,
		-82.45338
	],
	"30824": [
		33.512953,
		-82.514855
	],
	"30828": [
		33.368038,
		-82.656312
	],
	"30830": [
		33.079811,
		-81.975337
	],
	"30833": [
		33.19125,
		-82.353132
	],
	"30901": [
		33.437213,
		-81.956156
	],
	"30903": [
		33.490148,
		-82.162688
	],
	"30904": [
		33.478289,
		-82.014102
	],
	"30905": [
		33.41516,
		-82.142573
	],
	"30906": [
		33.346732,
		-81.967703
	],
	"30907": [
		33.523712,
		-82.085665
	],
	"30909": [
		33.470481,
		-82.083045
	],
	"30912": [
		33.47051,
		-81.988094
	],
	"31001": [
		31.976256,
		-83.339665
	],
	"31002": [
		32.554049,
		-82.595322
	],
	"31003": [
		32.606281,
		-83.212516
	],
	"31005": [
		32.544201,
		-83.597459
	],
	"31006": [
		32.580721,
		-84.250733
	],
	"31007": [
		32.188514,
		-83.927321
	],
	"31008": [
		32.665358,
		-83.786003
	],
	"31009": [
		32.281608,
		-83.019789
	],
	"31011": [
		32.129553,
		-83.074859
	],
	"31012": [
		32.394344,
		-83.173715
	],
	"31014": [
		32.415886,
		-83.349077
	],
	"31015": [
		31.935,
		-83.774945
	],
	"31016": [
		32.842251,
		-84.115961
	],
	"31017": [
		32.621094,
		-83.23222
	],
	"31018": [
		32.977092,
		-82.627586
	],
	"31019": [
		32.424244,
		-83.051342
	],
	"31020": [
		32.690507,
		-83.498578
	],
	"31021": [
		32.493466,
		-82.943074
	],
	"31022": [
		32.51154,
		-83.116631
	],
	"31023": [
		32.183213,
		-83.199454
	],
	"31024": [
		33.320918,
		-83.37549
	],
	"31025": [
		32.335837,
		-83.741003
	],
	"31027": [
		32.581117,
		-82.804219
	],
	"31028": [
		32.6312,
		-83.6963
	],
	"31029": [
		33.040249,
		-83.934522
	],
	"31030": [
		32.570683,
		-83.890124
	],
	"31031": [
		32.866286,
		-83.32834
	],
	"31032": [
		33.011683,
		-83.569169
	],
	"31033": [
		33.079307,
		-83.434007
	],
	"31035": [
		32.845795,
		-82.696035
	],
	"31036": [
		32.282069,
		-83.523212
	],
	"31037": [
		32.080832,
		-82.968592
	],
	"31038": [
		33.133747,
		-83.646996
	],
	"31039": [
		32.594332,
		-84.387121
	],
	"31041": [
		32.333518,
		-84.204238
	],
	"31042": [
		32.761346,
		-83.176859
	],
	"31044": [
		32.654991,
		-83.384798
	],
	"31045": [
		33.280835,
		-82.785442
	],
	"31046": [
		33.054336,
		-83.796088
	],
	"31047": [
		32.46728,
		-83.595342
	],
	"31049": [
		32.686436,
		-82.525311
	],
	"31050": [
		32.739657,
		-83.955974
	],
	"31051": [
		32.155877,
		-83.886797
	],
	"31052": [
		32.789015,
		-83.840075
	],
	"31054": [
		32.889861,
		-83.214067
	],
	"31055": [
		32.005073,
		-82.900735
	],
	"31057": [
		32.435,
		-83.936561
	],
	"31058": [
		32.488651,
		-84.410396
	],
	"31060": [
		31.975665,
		-83.063507
	],
	"31061": [
		33.077282,
		-83.246171
	],
	"31062": [
		33.046624,
		-83.215582
	],
	"31063": [
		32.288966,
		-83.96326
	],
	"31064": [
		33.286297,
		-83.702346
	],
	"31065": [
		32.550166,
		-83.163351
	],
	"31066": [
		32.811058,
		-84.014751
	],
	"31067": [
		32.860339,
		-82.936674
	],
	"31068": [
		32.328618,
		-84.117049
	],
	"31069": [
		32.440068,
		-83.748603
	],
	"31070": [
		32.18658,
		-83.789771
	],
	"31071": [
		32.129447,
		-83.540846
	],
	"31072": [
		31.974465,
		-83.56684
	],
	"31075": [
		32.351617,
		-82.956349
	],
	"31076": [
		32.53887,
		-84.110141
	],
	"31077": [
		31.921144,
		-83.19837
	],
	"31078": [
		32.694814,
		-84.075661
	],
	"31079": [
		31.942896,
		-83.458767
	],
	"31081": [
		32.419232,
		-84.282732
	],
	"31082": [
		32.996417,
		-82.903117
	],
	"31083": [
		32.040351,
		-82.814353
	],
	"31084": [
		31.961703,
		-83.607862
	],
	"31085": [
		33.427349,
		-83.6277
	],
	"31087": [
		33.251362,
		-83.001031
	],
	"31088": [
		32.579069,
		-83.650252
	],
	"31089": [
		32.850766,
		-82.860314
	],
	"31090": [
		32.829744,
		-83.068206
	],
	"31091": [
		32.237927,
		-83.704527
	],
	"31092": [
		32.090962,
		-83.785552
	],
	"31093": [
		32.647873,
		-83.657206
	],
	"31094": [
		33.113614,
		-82.795759
	],
	"31096": [
		32.723279,
		-82.707269
	],
	"31097": [
		32.890411,
		-84.166895
	],
	"31098": [
		32.614215,
		-83.56856
	],
	"31201": [
		32.806321,
		-83.61786
	],
	"31204": [
		32.848513,
		-83.674775
	],
	"31206": [
		32.800857,
		-83.693698
	],
	"31207": [
		32.828448,
		-83.649156
	],
	"31210": [
		32.907633,
		-83.735052
	],
	"31211": [
		32.901115,
		-83.576267
	],
	"31213": [
		32.840081,
		-83.63935
	],
	"31216": [
		32.729664,
		-83.68534
	],
	"31217": [
		32.844147,
		-83.500044
	],
	"31220": [
		32.871994,
		-83.809666
	],
	"31301": [
		31.750629,
		-81.60235
	],
	"31302": [
		32.121597,
		-81.341872
	],
	"31303": [
		32.505422,
		-81.313427
	],
	"31304": [
		31.510772,
		-81.354554
	],
	"31305": [
		31.396816,
		-81.393957
	],
	"31307": [
		32.172843,
		-81.398602
	],
	"31308": [
		32.180316,
		-81.47129
	],
	"31309": [
		31.879945,
		-81.437655
	],
	"31312": [
		32.307622,
		-81.40384
	],
	"31313": [
		31.844789,
		-81.612554
	],
	"31314": [
		31.870154,
		-81.631076
	],
	"31315": [
		31.892873,
		-81.588978
	],
	"31316": [
		31.723569,
		-81.714287
	],
	"31318": [
		32.142025,
		-81.371941
	],
	"31320": [
		31.765504,
		-81.368411
	],
	"31321": [
		32.185059,
		-81.659775
	],
	"31322": [
		32.109885,
		-81.255465
	],
	"31323": [
		31.687492,
		-81.427667
	],
	"31324": [
		31.850975,
		-81.262126
	],
	"31326": [
		32.2952,
		-81.229931
	],
	"31327": [
		31.467922,
		-81.248753
	],
	"31328": [
		32.01116,
		-80.865592
	],
	"31329": [
		32.425638,
		-81.350634
	],
	"31331": [
		31.51171,
		-81.443246
	],
	"31401": [
		32.074679,
		-81.088261
	],
	"31404": [
		32.051559,
		-81.049211
	],
	"31405": [
		32.039402,
		-81.179112
	],
	"31406": [
		31.98041,
		-81.085196
	],
	"31407": [
		32.186052,
		-81.192088
	],
	"31408": [
		32.117554,
		-81.184333
	],
	"31409": [
		32.015561,
		-81.14483
	],
	"31410": [
		32.028785,
		-80.992682
	],
	"31411": [
		31.94309,
		-81.034687
	],
	"31415": [
		32.078546,
		-81.126056
	],
	"31419": [
		31.997154,
		-81.230649
	],
	"31501": [
		31.223623,
		-82.350198
	],
	"31503": [
		31.20402,
		-82.41992
	],
	"31510": [
		31.545485,
		-82.440693
	],
	"31512": [
		31.545696,
		-83.018356
	],
	"31513": [
		31.77705,
		-82.347726
	],
	"31516": [
		31.309373,
		-82.25325
	],
	"31518": [
		31.512607,
		-82.185093
	],
	"31519": [
		31.684697,
		-82.879186
	],
	"31520": [
		31.180919,
		-81.493973
	],
	"31522": [
		31.257252,
		-81.342026
	],
	"31523": [
		31.212645,
		-81.616811
	],
	"31524": [
		31.240597,
		-81.473387
	],
	"31525": [
		31.3211,
		-81.526435
	],
	"31527": [
		31.06699,
		-81.433275
	],
	"31532": [
		31.72207,
		-82.758822
	],
	"31533": [
		31.560258,
		-82.828039
	],
	"31535": [
		31.459466,
		-82.867497
	],
	"31537": [
		30.885212,
		-82.00523
	],
	"31539": [
		31.8317,
		-82.605344
	],
	"31542": [
		31.142701,
		-82.119407
	],
	"31543": [
		31.334089,
		-81.828853
	],
	"31544": [
		31.840482,
		-82.963883
	],
	"31545": [
		31.663955,
		-81.934173
	],
	"31546": [
		31.509811,
		-81.777301
	],
	"31547": [
		30.790547,
		-81.559737
	],
	"31548": [
		30.796163,
		-81.698233
	],
	"31549": [
		31.9282,
		-82.714917
	],
	"31550": [
		31.14708,
		-82.595623
	],
	"31551": [
		31.495821,
		-82.273207
	],
	"31552": [
		31.289898,
		-82.599146
	],
	"31553": [
		31.181701,
		-81.972104
	],
	"31554": [
		31.486069,
		-82.620813
	],
	"31555": [
		31.705666,
		-82.080662
	],
	"31556": [
		31.413949,
		-82.111669
	],
	"31557": [
		31.375316,
		-82.098948
	],
	"31558": [
		30.899344,
		-81.427587
	],
	"31560": [
		31.499205,
		-82.021183
	],
	"31561": [
		31.209066,
		-81.309933
	],
	"31562": [
		30.422391,
		-82.170373
	],
	"31563": [
		31.751319,
		-82.181464
	],
	"31565": [
		31.067151,
		-81.632218
	],
	"31566": [
		31.182755,
		-81.805594
	],
	"31567": [
		31.630886,
		-82.706228
	],
	"31568": [
		31.013362,
		-81.819093
	],
	"31569": [
		30.896489,
		-81.697139
	],
	"31601": [
		30.758721,
		-83.319023
	],
	"31602": [
		30.86816,
		-83.34235
	],
	"31605": [
		30.929823,
		-83.223032
	],
	"31606": [
		30.806085,
		-83.190044
	],
	"31620": [
		31.117296,
		-83.434236
	],
	"31622": [
		31.378501,
		-83.192225
	],
	"31623": [
		31.074434,
		-82.644004
	],
	"31624": [
		31.296189,
		-82.730338
	],
	"31625": [
		30.992647,
		-83.533505
	],
	"31626": [
		30.778489,
		-83.796406
	],
	"31627": [
		31.043183,
		-83.392615
	],
	"31629": [
		30.816844,
		-83.689394
	],
	"31630": [
		30.950818,
		-82.876732
	],
	"31631": [
		30.643635,
		-82.741456
	],
	"31632": [
		30.987018,
		-83.360313
	],
	"31634": [
		31.042485,
		-82.767459
	],
	"31635": [
		31.096714,
		-83.048818
	],
	"31636": [
		30.730986,
		-83.111372
	],
	"31637": [
		31.295967,
		-83.440212
	],
	"31638": [
		30.906417,
		-83.512186
	],
	"31639": [
		31.216548,
		-83.190727
	],
	"31641": [
		30.91957,
		-83.092297
	],
	"31642": [
		31.262914,
		-82.882627
	],
	"31643": [
		30.773089,
		-83.556898
	],
	"31645": [
		31.060719,
		-83.218688
	],
	"31647": [
		31.208842,
		-83.427337
	],
	"31648": [
		30.706502,
		-83.019027
	],
	"31649": [
		30.963885,
		-82.995472
	],
	"31650": [
		31.395823,
		-83.025392
	],
	"31698": [
		30.848944,
		-83.28957
	],
	"31699": [
		30.974915,
		-83.205199
	],
	"31701": [
		31.552695,
		-84.159214
	],
	"31705": [
		31.51689,
		-84.042942
	],
	"31707": [
		31.586919,
		-84.206431
	],
	"31709": [
		32.064806,
		-84.123242
	],
	"31711": [
		32.190998,
		-84.13023
	],
	"31712": [
		31.834992,
		-83.707348
	],
	"31714": [
		31.72025,
		-83.693961
	],
	"31716": [
		31.358537,
		-84.127936
	],
	"31719": [
		32.090302,
		-84.310735
	],
	"31720": [
		30.878167,
		-83.724533
	],
	"31721": [
		31.52526,
		-84.301465
	],
	"31722": [
		31.067453,
		-83.622768
	],
	"31730": [
		31.194884,
		-84.310924
	],
	"31733": [
		31.59319,
		-83.489763
	],
	"31735": [
		31.969555,
		-83.973306
	],
	"31738": [
		31.012696,
		-83.871858
	],
	"31743": [
		31.908396,
		-83.991153
	],
	"31744": [
		31.341346,
		-83.901613
	],
	"31747": [
		31.176703,
		-83.587067
	],
	"31749": [
		31.41359,
		-83.327184
	],
	"31750": [
		31.736465,
		-83.215037
	],
	"31756": [
		31.183017,
		-83.96576
	],
	"31757": [
		30.871249,
		-83.903185
	],
	"31763": [
		31.750045,
		-84.139141
	],
	"31764": [
		31.976312,
		-84.088839
	],
	"31765": [
		31.087551,
		-84.027154
	],
	"31768": [
		31.189103,
		-83.841107
	],
	"31771": [
		31.248156,
		-83.654159
	],
	"31772": [
		31.724154,
		-83.961027
	],
	"31773": [
		30.973428,
		-84.048091
	],
	"31774": [
		31.565466,
		-83.263747
	],
	"31775": [
		31.330841,
		-83.598579
	],
	"31778": [
		30.974992,
		-83.700075
	],
	"31779": [
		31.108022,
		-84.211198
	],
	"31780": [
		32.03187,
		-84.388811
	],
	"31781": [
		31.560577,
		-83.796293
	],
	"31783": [
		31.758976,
		-83.470125
	],
	"31784": [
		31.24725,
		-84.03667
	],
	"31787": [
		31.899179,
		-84.243318
	],
	"31788": [
		31.111441,
		-83.676797
	],
	"31789": [
		31.479734,
		-83.739835
	],
	"31790": [
		31.652476,
		-83.577968
	],
	"31791": [
		31.529137,
		-83.894978
	],
	"31792": [
		30.770798,
		-84.043704
	],
	"31793": [
		31.462511,
		-83.593543
	],
	"31794": [
		31.445872,
		-83.452667
	],
	"31795": [
		31.473618,
		-83.687462
	],
	"31796": [
		31.770118,
		-83.856468
	],
	"31798": [
		31.613378,
		-83.065969
	],
	"31801": [
		32.519338,
		-84.594755
	],
	"31803": [
		32.285466,
		-84.493596
	],
	"31804": [
		32.662266,
		-84.913411
	],
	"31805": [
		32.263056,
		-84.739509
	],
	"31806": [
		32.263441,
		-84.322724
	],
	"31807": [
		32.63823,
		-84.800836
	],
	"31808": [
		32.631102,
		-85.0132
	],
	"31810": [
		32.568168,
		-84.524979
	],
	"31811": [
		32.740952,
		-84.928172
	],
	"31812": [
		32.640052,
		-84.402775
	],
	"31814": [
		32.21586,
		-84.845643
	],
	"31815": [
		32.030013,
		-84.84488
	],
	"31816": [
		32.881465,
		-84.60815
	],
	"31820": [
		32.579419,
		-84.82469
	],
	"31821": [
		32.116128,
		-84.963449
	],
	"31822": [
		32.864979,
		-84.910348
	],
	"31823": [
		32.810641,
		-84.822587
	],
	"31824": [
		32.051196,
		-84.519089
	],
	"31825": [
		32.116195,
		-84.6709
	],
	"31826": [
		32.792963,
		-84.703286
	],
	"31827": [
		32.686718,
		-84.521816
	],
	"31829": [
		32.562698,
		-84.731611
	],
	"31830": [
		32.900708,
		-84.729063
	],
	"31831": [
		32.685573,
		-84.706837
	],
	"31832": [
		31.958169,
		-84.614896
	],
	"31833": [
		32.8429,
		-85.091845
	],
	"31836": [
		32.796402,
		-84.53509
	],
	"31901": [
		32.465313,
		-84.980285
	],
	"31903": [
		32.414148,
		-84.954244
	],
	"31904": [
		32.554344,
		-85.009468
	],
	"31905": [
		32.378795,
		-84.90685
	],
	"31906": [
		32.467811,
		-84.950173
	],
	"31907": [
		32.482037,
		-84.901475
	],
	"31909": [
		32.548807,
		-84.924106
	],
	"32003": [
		30.095584,
		-81.710162
	],
	"32008": [
		29.926064,
		-82.914379
	],
	"32009": [
		30.422502,
		-81.973824
	],
	"32011": [
		30.571111,
		-81.839579
	],
	"32024": [
		30.091953,
		-82.73107
	],
	"32025": [
		30.107103,
		-82.579118
	],
	"32026": [
		30.054149,
		-82.181681
	],
	"32033": [
		29.788112,
		-81.434324
	],
	"32034": [
		30.609692,
		-81.49172
	],
	"32038": [
		29.935072,
		-82.69201
	],
	"32040": [
		30.243515,
		-82.238887
	],
	"32043": [
		29.937039,
		-81.732587
	],
	"32044": [
		29.859458,
		-82.169415
	],
	"32046": [
		30.701206,
		-81.916595
	],
	"32052": [
		30.486131,
		-82.936084
	],
	"32053": [
		30.575561,
		-83.12606
	],
	"32054": [
		30.033807,
		-82.394253
	],
	"32055": [
		30.270103,
		-82.62413
	],
	"32058": [
		30.107546,
		-82.106933
	],
	"32059": [
		30.384886,
		-83.256198
	],
	"32060": [
		30.274413,
		-83.036329
	],
	"32061": [
		30.097553,
		-82.510313
	],
	"32062": [
		30.137457,
		-82.978338
	],
	"32063": [
		30.247669,
		-82.112978
	],
	"32064": [
		30.295625,
		-82.984108
	],
	"32065": [
		30.152238,
		-81.797016
	],
	"32066": [
		30.039765,
		-83.205802
	],
	"32068": [
		30.083262,
		-81.890855
	],
	"32071": [
		30.058118,
		-82.955835
	],
	"32072": [
		30.18816,
		-82.424491
	],
	"32073": [
		30.169821,
		-81.739144
	],
	"32079": [
		29.977726,
		-81.807023
	],
	"32080": [
		29.818745,
		-81.27286
	],
	"32081": [
		30.131197,
		-81.40784
	],
	"32082": [
		30.125226,
		-81.369578
	],
	"32083": [
		30.114561,
		-82.232783
	],
	"32084": [
		29.918419,
		-81.367545
	],
	"32086": [
		29.766738,
		-81.30637
	],
	"32087": [
		30.377434,
		-82.28046
	],
	"32091": [
		29.929564,
		-82.127579
	],
	"32092": [
		29.939825,
		-81.508406
	],
	"32094": [
		30.188113,
		-82.821372
	],
	"32095": [
		30.022752,
		-81.406577
	],
	"32096": [
		30.534379,
		-82.626963
	],
	"32097": [
		30.661202,
		-81.618793
	],
	"32102": [
		29.137291,
		-81.546429
	],
	"32110": [
		29.428804,
		-81.339209
	],
	"32112": [
		29.431746,
		-81.565573
	],
	"32113": [
		29.409977,
		-82.089218
	],
	"32114": [
		29.192391,
		-81.04676
	],
	"32117": [
		29.235588,
		-81.063969
	],
	"32118": [
		29.209639,
		-81.002321
	],
	"32119": [
		29.161116,
		-81.02574
	],
	"32124": [
		29.170996,
		-81.141359
	],
	"32127": [
		29.106272,
		-80.97367
	],
	"32128": [
		29.100739,
		-81.071829
	],
	"32129": [
		29.136974,
		-81.023957
	],
	"32130": [
		29.148342,
		-81.341043
	],
	"32131": [
		29.684293,
		-81.562375
	],
	"32132": [
		28.979895,
		-80.920866
	],
	"32133": [
		29.020177,
		-81.909262
	],
	"32134": [
		29.385007,
		-81.837948
	],
	"32136": [
		29.463717,
		-81.147387
	],
	"32137": [
		29.581507,
		-81.218196
	],
	"32139": [
		29.372165,
		-81.587309
	],
	"32140": [
		29.762497,
		-81.866661
	],
	"32141": [
		28.928781,
		-80.919013
	],
	"32145": [
		29.677558,
		-81.421332
	],
	"32147": [
		29.590868,
		-81.777146
	],
	"32148": [
		29.617032,
		-81.883646
	],
	"32157": [
		29.467372,
		-81.578437
	],
	"32159": [
		28.933207,
		-81.898475
	],
	"32162": [
		28.914383,
		-81.98956
	],
	"32164": [
		29.517748,
		-81.230696
	],
	"32168": [
		28.963811,
		-81.029409
	],
	"32169": [
		28.965461,
		-80.866467
	],
	"32174": [
		29.284784,
		-81.161348
	],
	"32176": [
		29.331582,
		-81.062507
	],
	"32177": [
		29.690907,
		-81.708149
	],
	"32179": [
		29.088111,
		-81.895092
	],
	"32180": [
		29.236291,
		-81.396679
	],
	"32181": [
		29.50798,
		-81.601987
	],
	"32187": [
		29.578946,
		-81.550038
	],
	"32189": [
		29.55014,
		-81.647738
	],
	"32190": [
		29.34334,
		-81.489008
	],
	"32193": [
		29.504967,
		-81.645063
	],
	"32195": [
		28.98808,
		-81.886336
	],
	"32202": [
		30.324709,
		-81.647172
	],
	"32204": [
		30.317028,
		-81.680803
	],
	"32205": [
		30.298806,
		-81.72124
	],
	"32206": [
		30.350191,
		-81.638776
	],
	"32207": [
		30.289637,
		-81.640966
	],
	"32208": [
		30.39309,
		-81.682946
	],
	"32209": [
		30.361015,
		-81.696254
	],
	"32210": [
		30.266582,
		-81.745526
	],
	"32211": [
		30.332207,
		-81.582792
	],
	"32212": [
		30.216924,
		-81.666829
	],
	"32216": [
		30.277467,
		-81.582904
	],
	"32217": [
		30.22918,
		-81.621158
	],
	"32218": [
		30.487775,
		-81.667141
	],
	"32219": [
		30.426654,
		-81.815005
	],
	"32220": [
		30.368009,
		-81.871196
	],
	"32221": [
		30.259851,
		-81.853199
	],
	"32222": [
		30.216655,
		-81.82824
	],
	"32223": [
		30.156644,
		-81.649266
	],
	"32224": [
		30.270482,
		-81.468756
	],
	"32225": [
		30.357756,
		-81.505829
	],
	"32226": [
		30.481248,
		-81.506157
	],
	"32227": [
		30.389189,
		-81.404408
	],
	"32228": [
		30.39186,
		-81.400074
	],
	"32233": [
		30.358873,
		-81.419388
	],
	"32234": [
		30.225133,
		-81.984561
	],
	"32244": [
		30.217667,
		-81.752685
	],
	"32246": [
		30.29376,
		-81.517139
	],
	"32250": [
		30.280559,
		-81.412074
	],
	"32254": [
		30.340961,
		-81.734788
	],
	"32256": [
		30.174552,
		-81.474019
	],
	"32257": [
		30.189349,
		-81.61247
	],
	"32258": [
		30.140712,
		-81.551712
	],
	"32259": [
		30.075017,
		-81.586854
	],
	"32266": [
		30.317386,
		-81.409066
	],
	"32277": [
		30.37745,
		-81.593947
	],
	"32301": [
		30.427753,
		-84.258472
	],
	"32303": [
		30.515518,
		-84.341641
	],
	"32304": [
		30.452484,
		-84.353057
	],
	"32305": [
		30.332299,
		-84.300654
	],
	"32308": [
		30.47745,
		-84.226927
	],
	"32309": [
		30.56683,
		-84.097649
	],
	"32310": [
		30.385436,
		-84.512181
	],
	"32311": [
		30.3901,
		-84.180808
	],
	"32312": [
		30.605283,
		-84.229562
	],
	"32317": [
		30.470481,
		-84.116694
	],
	"32320": [
		29.731734,
		-85.111872
	],
	"32321": [
		30.26544,
		-84.979665
	],
	"32322": [
		29.953398,
		-84.579036
	],
	"32323": [
		29.891511,
		-84.613733
	],
	"32324": [
		30.654712,
		-84.783254
	],
	"32327": [
		30.182261,
		-84.305327
	],
	"32328": [
		29.751831,
		-84.909118
	],
	"32330": [
		30.579934,
		-84.750533
	],
	"32331": [
		30.444913,
		-83.637592
	],
	"32332": [
		30.620624,
		-84.677351
	],
	"32333": [
		30.607738,
		-84.417591
	],
	"32334": [
		30.266237,
		-84.742472
	],
	"32336": [
		30.260764,
		-83.847969
	],
	"32340": [
		30.46033,
		-83.433967
	],
	"32343": [
		30.478269,
		-84.504814
	],
	"32344": [
		30.526078,
		-83.962287
	],
	"32346": [
		29.990833,
		-84.384594
	],
	"32347": [
		30.174157,
		-83.611588
	],
	"32348": [
		29.977404,
		-83.596157
	],
	"32350": [
		30.574972,
		-83.325794
	],
	"32351": [
		30.520125,
		-84.675081
	],
	"32352": [
		30.662261,
		-84.591627
	],
	"32355": [
		30.172196,
		-84.208553
	],
	"32356": [
		29.859235,
		-83.415003
	],
	"32358": [
		30.105666,
		-84.558003
	],
	"32359": [
		29.68007,
		-83.386649
	],
	"32361": [
		30.357712,
		-83.988583
	],
	"32399": [
		30.43704,
		-84.282546
	],
	"32401": [
		30.159737,
		-85.660922
	],
	"32403": [
		30.048562,
		-85.553231
	],
	"32404": [
		30.204786,
		-85.501767
	],
	"32405": [
		30.202068,
		-85.667403
	],
	"32407": [
		30.198324,
		-85.790694
	],
	"32408": [
		30.142185,
		-85.732678
	],
	"32409": [
		30.356756,
		-85.653691
	],
	"32410": [
		29.995187,
		-85.414223
	],
	"32413": [
		30.3103,
		-85.905314
	],
	"32420": [
		30.632365,
		-85.38457
	],
	"32421": [
		30.524992,
		-85.17263
	],
	"32423": [
		30.943777,
		-85.048909
	],
	"32424": [
		30.362385,
		-85.08306
	],
	"32425": [
		30.853184,
		-85.720492
	],
	"32426": [
		30.946886,
		-85.370413
	],
	"32427": [
		30.710491,
		-85.792286
	],
	"32428": [
		30.61575,
		-85.572945
	],
	"32430": [
		30.418361,
		-85.234083
	],
	"32431": [
		30.787482,
		-85.410816
	],
	"32432": [
		30.714871,
		-85.077571
	],
	"32433": [
		30.851178,
		-86.200838
	],
	"32435": [
		30.648635,
		-86.130197
	],
	"32437": [
		30.436248,
		-85.909221
	],
	"32438": [
		30.501235,
		-85.424174
	],
	"32439": [
		30.468323,
		-86.112017
	],
	"32440": [
		30.922426,
		-85.52619
	],
	"32442": [
		30.678516,
		-85.016877
	],
	"32443": [
		30.872521,
		-85.10942
	],
	"32444": [
		30.239945,
		-85.6516
	],
	"32445": [
		30.97052,
		-85.197338
	],
	"32446": [
		30.848192,
		-85.231403
	],
	"32447": [
		30.75995,
		-85.251574
	],
	"32448": [
		30.671012,
		-85.223312
	],
	"32449": [
		30.286718,
		-85.239598
	],
	"32455": [
		30.638626,
		-85.962701
	],
	"32456": [
		29.838635,
		-85.298379
	],
	"32459": [
		30.360577,
		-86.185591
	],
	"32460": [
		30.764089,
		-84.954234
	],
	"32461": [
		30.289698,
		-86.027598
	],
	"32462": [
		30.5542,
		-85.833399
	],
	"32463": [
		30.631413,
		-85.590275
	],
	"32464": [
		30.902879,
		-85.952559
	],
	"32465": [
		30.007868,
		-85.181889
	],
	"32466": [
		30.394388,
		-85.512372
	],
	"32501": [
		30.428781,
		-87.222515
	],
	"32502": [
		30.409367,
		-87.223506
	],
	"32503": [
		30.459667,
		-87.213643
	],
	"32504": [
		30.472486,
		-87.186673
	],
	"32505": [
		30.454624,
		-87.26065
	],
	"32506": [
		30.391628,
		-87.369394
	],
	"32507": [
		30.340176,
		-87.37434
	],
	"32508": [
		30.350614,
		-87.316902
	],
	"32509": [
		30.468537,
		-87.342689
	],
	"32511": [
		30.406055,
		-87.291696
	],
	"32514": [
		30.531268,
		-87.221604
	],
	"32526": [
		30.499226,
		-87.365573
	],
	"32530": [
		30.598239,
		-87.030361
	],
	"32531": [
		30.884038,
		-86.683468
	],
	"32533": [
		30.610506,
		-87.326783
	],
	"32534": [
		30.528939,
		-87.281718
	],
	"32535": [
		30.963698,
		-87.346175
	],
	"32536": [
		30.763783,
		-86.591616
	],
	"32539": [
		30.779757,
		-86.47881
	],
	"32541": [
		30.39324,
		-86.47094
	],
	"32542": [
		30.464551,
		-86.525167
	],
	"32544": [
		30.427283,
		-86.697154
	],
	"32547": [
		30.474544,
		-86.667742
	],
	"32548": [
		30.403001,
		-86.650482
	],
	"32550": [
		30.380705,
		-86.348138
	],
	"32561": [
		30.347061,
		-87.113185
	],
	"32563": [
		30.396949,
		-87.028472
	],
	"32564": [
		30.728808,
		-86.781915
	],
	"32565": [
		30.892603,
		-87.131683
	],
	"32566": [
		30.435776,
		-86.879305
	],
	"32567": [
		30.923726,
		-86.449136
	],
	"32568": [
		30.873178,
		-87.449977
	],
	"32569": [
		30.410972,
		-86.730471
	],
	"32570": [
		30.804825,
		-86.967268
	],
	"32571": [
		30.67466,
		-87.20841
	],
	"32577": [
		30.727473,
		-87.365012
	],
	"32578": [
		30.506696,
		-86.447541
	],
	"32579": [
		30.450892,
		-86.573486
	],
	"32580": [
		30.490075,
		-86.514818
	],
	"32583": [
		30.592511,
		-86.971003
	],
	"32601": [
		29.64897,
		-82.324941
	],
	"32603": [
		29.656712,
		-82.3475
	],
	"32605": [
		29.67918,
		-82.372822
	],
	"32606": [
		29.682064,
		-82.444115
	],
	"32607": [
		29.647414,
		-82.419109
	],
	"32608": [
		29.597009,
		-82.407808
	],
	"32609": [
		29.772187,
		-82.283422
	],
	"32612": [
		29.64312,
		-82.353845
	],
	"32615": [
		29.819084,
		-82.486161
	],
	"32616": [
		29.788495,
		-82.495256
	],
	"32617": [
		29.308388,
		-82.074366
	],
	"32618": [
		29.545873,
		-82.516538
	],
	"32619": [
		29.762485,
		-82.859957
	],
	"32621": [
		29.424698,
		-82.610144
	],
	"32622": [
		29.908054,
		-82.318845
	],
	"32625": [
		29.200616,
		-83.004494
	],
	"32626": [
		29.423864,
		-82.899324
	],
	"32628": [
		29.625434,
		-83.207
	],
	"32631": [
		29.704429,
		-82.092511
	],
	"32639": [
		29.227004,
		-82.712558
	],
	"32640": [
		29.578853,
		-82.086278
	],
	"32641": [
		29.642524,
		-82.231714
	],
	"32643": [
		29.826879,
		-82.633648
	],
	"32648": [
		29.503781,
		-83.270475
	],
	"32653": [
		29.745052,
		-82.39383
	],
	"32656": [
		29.813684,
		-81.959454
	],
	"32658": [
		29.850467,
		-82.390755
	],
	"32664": [
		29.446478,
		-82.216667
	],
	"32666": [
		29.723637,
		-81.997495
	],
	"32667": [
		29.513704,
		-82.304844
	],
	"32668": [
		29.257343,
		-82.474807
	],
	"32669": [
		29.632156,
		-82.589919
	],
	"32680": [
		29.542562,
		-83.13231
	],
	"32681": [
		29.423388,
		-82.205579
	],
	"32683": [
		29.295239,
		-82.786235
	],
	"32686": [
		29.355545,
		-82.275017
	],
	"32692": [
		29.333326,
		-83.122541
	],
	"32693": [
		29.626478,
		-82.785309
	],
	"32694": [
		29.807872,
		-82.144393
	],
	"32696": [
		29.397586,
		-82.461744
	],
	"32697": [
		29.929473,
		-82.429185
	],
	"32701": [
		28.665648,
		-81.370302
	],
	"32702": [
		29.044189,
		-81.627473
	],
	"32703": [
		28.671439,
		-81.553055
	],
	"32707": [
		28.664104,
		-81.314908
	],
	"32708": [
		28.687105,
		-81.273445
	],
	"32709": [
		28.502498,
		-80.958823
	],
	"32712": [
		28.748603,
		-81.480136
	],
	"32713": [
		28.88373,
		-81.325287
	],
	"32714": [
		28.662553,
		-81.411702
	],
	"32720": [
		29.003383,
		-81.368584
	],
	"32724": [
		29.057205,
		-81.225576
	],
	"32725": [
		28.886189,
		-81.251417
	],
	"32726": [
		28.855051,
		-81.678843
	],
	"32730": [
		28.654337,
		-81.343717
	],
	"32732": [
		28.751037,
		-81.102119
	],
	"32735": [
		28.89042,
		-81.739041
	],
	"32736": [
		28.91665,
		-81.489275
	],
	"32738": [
		28.905193,
		-81.184537
	],
	"32744": [
		28.985232,
		-81.219582
	],
	"32746": [
		28.771331,
		-81.354691
	],
	"32750": [
		28.708784,
		-81.350801
	],
	"32751": [
		28.6304,
		-81.365046
	],
	"32754": [
		28.687109,
		-80.919193
	],
	"32757": [
		28.773053,
		-81.638118
	],
	"32759": [
		28.825537,
		-80.902691
	],
	"32763": [
		28.941297,
		-81.296816
	],
	"32764": [
		28.852537,
		-81.101799
	],
	"32765": [
		28.663853,
		-81.196204
	],
	"32766": [
		28.647702,
		-81.044726
	],
	"32767": [
		29.026591,
		-81.534474
	],
	"32771": [
		28.813534,
		-81.324942
	],
	"32773": [
		28.754832,
		-81.246896
	],
	"32776": [
		28.820155,
		-81.508894
	],
	"32778": [
		28.773373,
		-81.730074
	],
	"32779": [
		28.727263,
		-81.414779
	],
	"32780": [
		28.533049,
		-80.791947
	],
	"32784": [
		28.974318,
		-81.71678
	],
	"32789": [
		28.599188,
		-81.352273
	],
	"32792": [
		28.610096,
		-81.298342
	],
	"32796": [
		28.625287,
		-80.845853
	],
	"32798": [
		28.723731,
		-81.58772
	],
	"32801": [
		28.541774,
		-81.374351
	],
	"32803": [
		28.555829,
		-81.346291
	],
	"32804": [
		28.57829,
		-81.396428
	],
	"32805": [
		28.52938,
		-81.403667
	],
	"32806": [
		28.511789,
		-81.360438
	],
	"32807": [
		28.55431,
		-81.299455
	],
	"32808": [
		28.58011,
		-81.4443
	],
	"32809": [
		28.462146,
		-81.385959
	],
	"32810": [
		28.625101,
		-81.42769
	],
	"32811": [
		28.52101,
		-81.447817
	],
	"32812": [
		28.484089,
		-81.322561
	],
	"32814": [
		28.572584,
		-81.322358
	],
	"32817": [
		28.591012,
		-81.243652
	],
	"32818": [
		28.586751,
		-81.486895
	],
	"32819": [
		28.453375,
		-81.472395
	],
	"32820": [
		28.576844,
		-81.139725
	],
	"32821": [
		28.385888,
		-81.47621
	],
	"32822": [
		28.489898,
		-81.290154
	],
	"32824": [
		28.383701,
		-81.333135
	],
	"32825": [
		28.518028,
		-81.229003
	],
	"32826": [
		28.579686,
		-81.188627
	],
	"32827": [
		28.416169,
		-81.299372
	],
	"32828": [
		28.529031,
		-81.166578
	],
	"32829": [
		28.484581,
		-81.246108
	],
	"32830": [
		28.383036,
		-81.573708
	],
	"32831": [
		28.474506,
		-81.131105
	],
	"32832": [
		28.40318,
		-81.191537
	],
	"32833": [
		28.494294,
		-81.083265
	],
	"32835": [
		28.51873,
		-81.486227
	],
	"32836": [
		28.407733,
		-81.519732
	],
	"32837": [
		28.379425,
		-81.429129
	],
	"32839": [
		28.488069,
		-81.407208
	],
	"32901": [
		28.079399,
		-80.623617
	],
	"32903": [
		28.104536,
		-80.593357
	],
	"32904": [
		28.066492,
		-80.678444
	],
	"32905": [
		28.031366,
		-80.600414
	],
	"32907": [
		28.020804,
		-80.681247
	],
	"32908": [
		27.956344,
		-80.698949
	],
	"32909": [
		27.919258,
		-80.644232
	],
	"32920": [
		28.396235,
		-80.61505
	],
	"32922": [
		28.372999,
		-80.742906
	],
	"32925": [
		28.246109,
		-80.629046
	],
	"32926": [
		28.388697,
		-80.818152
	],
	"32927": [
		28.457716,
		-80.812289
	],
	"32931": [
		28.323196,
		-80.623102
	],
	"32934": [
		28.135322,
		-80.713049
	],
	"32935": [
		28.145509,
		-80.649958
	],
	"32937": [
		28.178766,
		-80.60177
	],
	"32940": [
		28.199154,
		-80.7823
	],
	"32948": [
		27.888805,
		-80.733582
	],
	"32949": [
		27.909826,
		-80.560425
	],
	"32950": [
		27.980573,
		-80.569593
	],
	"32951": [
		27.947247,
		-80.50461
	],
	"32952": [
		28.31093,
		-80.660577
	],
	"32953": [
		28.441679,
		-80.702628
	],
	"32955": [
		28.296697,
		-80.725043
	],
	"32958": [
		27.794384,
		-80.49146
	],
	"32960": [
		27.641533,
		-80.402619
	],
	"32962": [
		27.587819,
		-80.382865
	],
	"32963": [
		27.718239,
		-80.393276
	],
	"32966": [
		27.683533,
		-80.707719
	],
	"32967": [
		27.715491,
		-80.454288
	],
	"32968": [
		27.584207,
		-80.472479
	],
	"32970": [
		27.750386,
		-80.450484
	],
	"32976": [
		27.846262,
		-80.554114
	],
	"33001": [
		24.81713,
		-80.806001
	],
	"33004": [
		26.057838,
		-80.137801
	],
	"33009": [
		25.985129,
		-80.147261
	],
	"33010": [
		25.833202,
		-80.27872
	],
	"33012": [
		25.866106,
		-80.301115
	],
	"33013": [
		25.86219,
		-80.269677
	],
	"33014": [
		25.9031,
		-80.302654
	],
	"33015": [
		25.941369,
		-80.317666
	],
	"33016": [
		25.895005,
		-80.332455
	],
	"33018": [
		25.917733,
		-80.384455
	],
	"33019": [
		26.027459,
		-80.120219
	],
	"33020": [
		26.019191,
		-80.152944
	],
	"33021": [
		26.02313,
		-80.186539
	],
	"33023": [
		25.9892,
		-80.217067
	],
	"33024": [
		26.027148,
		-80.244713
	],
	"33025": [
		25.988208,
		-80.281357
	],
	"33026": [
		26.026198,
		-80.295994
	],
	"33027": [
		25.988101,
		-80.340444
	],
	"33028": [
		26.021022,
		-80.340391
	],
	"33029": [
		25.974621,
		-80.420075
	],
	"33030": [
		25.485147,
		-80.510882
	],
	"33031": [
		25.524991,
		-80.500876
	],
	"33032": [
		25.531145,
		-80.391233
	],
	"33033": [
		25.481305,
		-80.414613
	],
	"33034": [
		25.263163,
		-80.66857
	],
	"33035": [
		25.409275,
		-80.384155
	],
	"33036": [
		24.893835,
		-80.710993
	],
	"33037": [
		25.228322,
		-80.395451
	],
	"33039": [
		25.501679,
		-80.398423
	],
	"33040": [
		24.560908,
		-81.889478
	],
	"33042": [
		24.682083,
		-81.510666
	],
	"33043": [
		24.725861,
		-81.329949
	],
	"33050": [
		24.747487,
		-81.010326
	],
	"33051": [
		24.723406,
		-81.021647
	],
	"33054": [
		25.908596,
		-80.265041
	],
	"33055": [
		25.948468,
		-80.278855
	],
	"33056": [
		25.948892,
		-80.243585
	],
	"33060": [
		26.234776,
		-80.12059
	],
	"33062": [
		26.241077,
		-80.091233
	],
	"33063": [
		26.251909,
		-80.208929
	],
	"33064": [
		26.278502,
		-80.1153
	],
	"33065": [
		26.274498,
		-80.2604
	],
	"33066": [
		26.252926,
		-80.170374
	],
	"33067": [
		26.305788,
		-80.223371
	],
	"33068": [
		26.215954,
		-80.217951
	],
	"33069": [
		26.23583,
		-80.1571
	],
	"33070": [
		25.017205,
		-80.518498
	],
	"33071": [
		26.244548,
		-80.265211
	],
	"33073": [
		26.29824,
		-80.181415
	],
	"33076": [
		26.316828,
		-80.276867
	],
	"33101": [
		25.779298,
		-80.198739
	],
	"33109": [
		25.756717,
		-80.140066
	],
	"33122": [
		25.794856,
		-80.288375
	],
	"33125": [
		25.783834,
		-80.23609
	],
	"33126": [
		25.7794,
		-80.299475
	],
	"33127": [
		25.813086,
		-80.205042
	],
	"33128": [
		25.776162,
		-80.203724
	],
	"33129": [
		25.750226,
		-80.190122
	],
	"33130": [
		25.768524,
		-80.203359
	],
	"33131": [
		25.766206,
		-80.182896
	],
	"33132": [
		25.777404,
		-80.172412
	],
	"33133": [
		25.728632,
		-80.240995
	],
	"33134": [
		25.753332,
		-80.270379
	],
	"33135": [
		25.766544,
		-80.235095
	],
	"33136": [
		25.787247,
		-80.205296
	],
	"33137": [
		25.816281,
		-80.171528
	],
	"33138": [
		25.853764,
		-80.178006
	],
	"33139": [
		25.779391,
		-80.151566
	],
	"33140": [
		25.819714,
		-80.133711
	],
	"33141": [
		25.851854,
		-80.138726
	],
	"33142": [
		25.812081,
		-80.238901
	],
	"33143": [
		25.703032,
		-80.297375
	],
	"33144": [
		25.763458,
		-80.312667
	],
	"33145": [
		25.753133,
		-80.234424
	],
	"33146": [
		25.72085,
		-80.272571
	],
	"33147": [
		25.851225,
		-80.238166
	],
	"33149": [
		25.719494,
		-80.168542
	],
	"33150": [
		25.85219,
		-80.207174
	],
	"33154": [
		25.883337,
		-80.131831
	],
	"33155": [
		25.736887,
		-80.310768
	],
	"33156": [
		25.668203,
		-80.29701
	],
	"33157": [
		25.606126,
		-80.343496
	],
	"33158": [
		25.63884,
		-80.311316
	],
	"33160": [
		25.933997,
		-80.135801
	],
	"33161": [
		25.893664,
		-80.181539
	],
	"33162": [
		25.927997,
		-80.177175
	],
	"33165": [
		25.734345,
		-80.358271
	],
	"33166": [
		25.827855,
		-80.316183
	],
	"33167": [
		25.884867,
		-80.239362
	],
	"33168": [
		25.892856,
		-80.209124
	],
	"33169": [
		25.943117,
		-80.214686
	],
	"33170": [
		25.55796,
		-80.457897
	],
	"33172": [
		25.786909,
		-80.361253
	],
	"33173": [
		25.70232,
		-80.357503
	],
	"33174": [
		25.761518,
		-80.364697
	],
	"33175": [
		25.734787,
		-80.406761
	],
	"33176": [
		25.659877,
		-80.358354
	],
	"33177": [
		25.596129,
		-80.404194
	],
	"33178": [
		25.835497,
		-80.422481
	],
	"33179": [
		25.95762,
		-80.179998
	],
	"33180": [
		25.960389,
		-80.143113
	],
	"33181": [
		25.89799,
		-80.152263
	],
	"33182": [
		25.780635,
		-80.457584
	],
	"33183": [
		25.702563,
		-80.404682
	],
	"33184": [
		25.759711,
		-80.406473
	],
	"33185": [
		25.726359,
		-80.450733
	],
	"33186": [
		25.65442,
		-80.412154
	],
	"33187": [
		25.595913,
		-80.506922
	],
	"33189": [
		25.572208,
		-80.335444
	],
	"33190": [
		25.560012,
		-80.349838
	],
	"33193": [
		25.705455,
		-80.470835
	],
	"33194": [
		25.71405,
		-80.583772
	],
	"33196": [
		25.652369,
		-80.490551
	],
	"33301": [
		26.121323,
		-80.127909
	],
	"33304": [
		26.140411,
		-80.121184
	],
	"33305": [
		26.153361,
		-80.11944
	],
	"33306": [
		26.165442,
		-80.113853
	],
	"33308": [
		26.188511,
		-80.104988
	],
	"33309": [
		26.18599,
		-80.172721
	],
	"33311": [
		26.144208,
		-80.172785
	],
	"33312": [
		26.088162,
		-80.181788
	],
	"33313": [
		26.151527,
		-80.227316
	],
	"33314": [
		26.067601,
		-80.222643
	],
	"33315": [
		26.087019,
		-80.152992
	],
	"33316": [
		26.098684,
		-80.121842
	],
	"33317": [
		26.1126,
		-80.227875
	],
	"33319": [
		26.181382,
		-80.225802
	],
	"33321": [
		26.213579,
		-80.270272
	],
	"33322": [
		26.151064,
		-80.269953
	],
	"33323": [
		26.152047,
		-80.320826
	],
	"33324": [
		26.112485,
		-80.27494
	],
	"33325": [
		26.112043,
		-80.318317
	],
	"33326": [
		26.114333,
		-80.370671
	],
	"33327": [
		26.11122,
		-80.419892
	],
	"33328": [
		26.068175,
		-80.274812
	],
	"33330": [
		26.060831,
		-80.319086
	],
	"33331": [
		26.053262,
		-80.366885
	],
	"33332": [
		26.006606,
		-80.460177
	],
	"33334": [
		26.182553,
		-80.133727
	],
	"33351": [
		26.179581,
		-80.27504
	],
	"33401": [
		26.715844,
		-80.070249
	],
	"33403": [
		26.803747,
		-80.076368
	],
	"33404": [
		26.781022,
		-80.063738
	],
	"33405": [
		26.669649,
		-80.058452
	],
	"33406": [
		26.664093,
		-80.092407
	],
	"33407": [
		26.757692,
		-80.091172
	],
	"33408": [
		26.840483,
		-80.052158
	],
	"33409": [
		26.714559,
		-80.095821
	],
	"33410": [
		26.845662,
		-80.08735
	],
	"33411": [
		26.719901,
		-80.193049
	],
	"33412": [
		26.794532,
		-80.207075
	],
	"33413": [
		26.663773,
		-80.151608
	],
	"33414": [
		26.64892,
		-80.246459
	],
	"33415": [
		26.660205,
		-80.126573
	],
	"33417": [
		26.719196,
		-80.124507
	],
	"33418": [
		26.872713,
		-80.165712
	],
	"33426": [
		26.533736,
		-80.083152
	],
	"33428": [
		26.352906,
		-80.207938
	],
	"33430": [
		26.641965,
		-80.554002
	],
	"33431": [
		26.374773,
		-80.106308
	],
	"33432": [
		26.343902,
		-80.082735
	],
	"33433": [
		26.347162,
		-80.159237
	],
	"33434": [
		26.382712,
		-80.167138
	],
	"33435": [
		26.525785,
		-80.061367
	],
	"33436": [
		26.522954,
		-80.107263
	],
	"33437": [
		26.512045,
		-80.148962
	],
	"33438": [
		26.931865,
		-80.600626
	],
	"33440": [
		26.564765,
		-81.03784
	],
	"33441": [
		26.311098,
		-80.097874
	],
	"33442": [
		26.309175,
		-80.149813
	],
	"33444": [
		26.458903,
		-80.079637
	],
	"33445": [
		26.455331,
		-80.106353
	],
	"33446": [
		26.45044,
		-80.186183
	],
	"33449": [
		26.589969,
		-80.232723
	],
	"33455": [
		27.053143,
		-80.161232
	],
	"33458": [
		26.936558,
		-80.131851
	],
	"33460": [
		26.619664,
		-80.056715
	],
	"33461": [
		26.620406,
		-80.090703
	],
	"33462": [
		26.58002,
		-80.072282
	],
	"33463": [
		26.593246,
		-80.128239
	],
	"33467": [
		26.596362,
		-80.175602
	],
	"33469": [
		26.989221,
		-80.108541
	],
	"33470": [
		26.729431,
		-80.319858
	],
	"33471": [
		26.884624,
		-81.198234
	],
	"33472": [
		26.538357,
		-80.185836
	],
	"33473": [
		26.50379,
		-80.191618
	],
	"33476": [
		26.802148,
		-80.624722
	],
	"33477": [
		26.920057,
		-80.076529
	],
	"33478": [
		26.935021,
		-80.246071
	],
	"33480": [
		26.686563,
		-80.042866
	],
	"33483": [
		26.462644,
		-80.061718
	],
	"33484": [
		26.454253,
		-80.134427
	],
	"33486": [
		26.347501,
		-80.112571
	],
	"33487": [
		26.415376,
		-80.088811
	],
	"33493": [
		26.538819,
		-80.728719
	],
	"33496": [
		26.406722,
		-80.160556
	],
	"33498": [
		26.386067,
		-80.219558
	],
	"33503": [
		27.763831,
		-82.276174
	],
	"33510": [
		27.955637,
		-82.296693
	],
	"33511": [
		27.909778,
		-82.295738
	],
	"33513": [
		28.714259,
		-82.194968
	],
	"33514": [
		28.686313,
		-81.9947
	],
	"33521": [
		28.798271,
		-82.068552
	],
	"33523": [
		28.419257,
		-82.220161
	],
	"33525": [
		28.341644,
		-82.19838
	],
	"33527": [
		27.973749,
		-82.212806
	],
	"33534": [
		27.828452,
		-82.379097
	],
	"33538": [
		28.849949,
		-82.18511
	],
	"33540": [
		28.256897,
		-82.133
	],
	"33541": [
		28.234002,
		-82.22136
	],
	"33542": [
		28.23578,
		-82.177617
	],
	"33543": [
		28.212775,
		-82.296369
	],
	"33544": [
		28.254039,
		-82.366223
	],
	"33545": [
		28.27258,
		-82.296556
	],
	"33547": [
		27.789947,
		-82.135828
	],
	"33548": [
		28.146279,
		-82.482303
	],
	"33549": [
		28.137944,
		-82.446252
	],
	"33556": [
		28.134809,
		-82.591459
	],
	"33558": [
		28.165483,
		-82.511236
	],
	"33559": [
		28.161006,
		-82.414667
	],
	"33563": [
		28.017222,
		-82.124953
	],
	"33565": [
		28.085906,
		-82.148114
	],
	"33566": [
		27.977965,
		-82.095709
	],
	"33567": [
		27.920609,
		-82.116772
	],
	"33569": [
		27.846464,
		-82.28863
	],
	"33570": [
		27.6904,
		-82.460081
	],
	"33572": [
		27.761109,
		-82.40858
	],
	"33573": [
		27.72286,
		-82.356923
	],
	"33576": [
		28.335735,
		-82.337831
	],
	"33578": [
		27.8622,
		-82.350044
	],
	"33579": [
		27.796231,
		-82.293653
	],
	"33584": [
		28.005455,
		-82.294337
	],
	"33585": [
		28.730872,
		-82.086056
	],
	"33592": [
		28.101871,
		-82.283236
	],
	"33594": [
		27.940934,
		-82.242479
	],
	"33596": [
		27.887215,
		-82.22587
	],
	"33597": [
		28.545531,
		-82.080532
	],
	"33598": [
		27.693423,
		-82.284659
	],
	"33602": [
		27.95353,
		-82.457113
	],
	"33603": [
		27.985618,
		-82.464439
	],
	"33604": [
		28.017154,
		-82.45535
	],
	"33605": [
		27.951122,
		-82.42968
	],
	"33606": [
		27.917452,
		-82.452279
	],
	"33607": [
		27.962012,
		-82.492176
	],
	"33609": [
		27.944272,
		-82.517675
	],
	"33610": [
		27.998214,
		-82.378016
	],
	"33611": [
		27.891345,
		-82.505665
	],
	"33612": [
		28.050827,
		-82.449573
	],
	"33613": [
		28.083973,
		-82.450768
	],
	"33614": [
		28.004724,
		-82.506088
	],
	"33615": [
		28.005103,
		-82.580284
	],
	"33616": [
		27.865136,
		-82.535394
	],
	"33617": [
		28.035792,
		-82.391538
	],
	"33618": [
		28.074807,
		-82.498405
	],
	"33619": [
		27.935372,
		-82.37869
	],
	"33620": [
		28.061368,
		-82.412801
	],
	"33621": [
		27.841658,
		-82.493273
	],
	"33624": [
		28.080255,
		-82.528248
	],
	"33625": [
		28.066876,
		-82.561218
	],
	"33626": [
		28.067045,
		-82.620348
	],
	"33629": [
		27.921536,
		-82.509043
	],
	"33634": [
		28.009826,
		-82.547789
	],
	"33635": [
		28.027644,
		-82.619933
	],
	"33637": [
		28.039845,
		-82.367516
	],
	"33647": [
		28.126952,
		-82.354093
	],
	"33701": [
		27.770793,
		-82.632806
	],
	"33702": [
		27.846613,
		-82.62869
	],
	"33703": [
		27.817056,
		-82.61975
	],
	"33704": [
		27.796346,
		-82.628737
	],
	"33705": [
		27.734491,
		-82.643403
	],
	"33706": [
		27.740169,
		-82.751128
	],
	"33707": [
		27.754314,
		-82.72228
	],
	"33708": [
		27.817558,
		-82.801134
	],
	"33709": [
		27.816844,
		-82.731621
	],
	"33710": [
		27.790669,
		-82.730734
	],
	"33711": [
		27.738611,
		-82.68752
	],
	"33712": [
		27.734375,
		-82.667894
	],
	"33713": [
		27.788266,
		-82.677461
	],
	"33714": [
		27.815246,
		-82.677708
	],
	"33715": [
		27.66268,
		-82.722404
	],
	"33716": [
		27.87506,
		-82.648609
	],
	"33744": [
		27.807226,
		-82.773074
	],
	"33755": [
		27.979914,
		-82.780506
	],
	"33756": [
		27.945591,
		-82.793988
	],
	"33759": [
		27.975284,
		-82.701482
	],
	"33760": [
		27.907544,
		-82.714236
	],
	"33761": [
		28.033061,
		-82.724374
	],
	"33762": [
		27.899189,
		-82.679506
	],
	"33763": [
		28.002884,
		-82.743408
	],
	"33764": [
		27.934474,
		-82.740109
	],
	"33765": [
		27.974876,
		-82.745121
	],
	"33767": [
		27.974748,
		-82.826777
	],
	"33770": [
		27.915173,
		-82.804068
	],
	"33771": [
		27.906822,
		-82.758784
	],
	"33772": [
		27.844208,
		-82.796854
	],
	"33773": [
		27.882294,
		-82.75592
	],
	"33774": [
		27.883819,
		-82.827877
	],
	"33776": [
		27.850256,
		-82.825814
	],
	"33777": [
		27.853532,
		-82.759349
	],
	"33778": [
		27.888593,
		-82.798546
	],
	"33781": [
		27.838362,
		-82.714996
	],
	"33782": [
		27.859631,
		-82.708145
	],
	"33785": [
		27.891841,
		-82.849979
	],
	"33786": [
		27.927096,
		-82.833345
	],
	"33801": [
		28.035979,
		-81.899636
	],
	"33803": [
		28.009358,
		-81.932662
	],
	"33805": [
		28.1007,
		-81.908334
	],
	"33809": [
		28.221336,
		-81.973942
	],
	"33810": [
		28.1318,
		-82.030327
	],
	"33811": [
		27.984396,
		-82.015259
	],
	"33812": [
		27.971442,
		-81.894476
	],
	"33813": [
		27.965132,
		-81.939522
	],
	"33815": [
		28.041258,
		-81.99759
	],
	"33823": [
		28.085735,
		-81.813731
	],
	"33825": [
		27.620252,
		-81.458826
	],
	"33827": [
		27.815891,
		-81.508647
	],
	"33830": [
		27.87343,
		-81.812659
	],
	"33834": [
		27.620292,
		-82.001559
	],
	"33837": [
		28.194772,
		-81.58751
	],
	"33838": [
		28.019442,
		-81.614048
	],
	"33839": [
		27.976828,
		-81.750498
	],
	"33841": [
		27.741146,
		-81.754602
	],
	"33843": [
		27.720799,
		-81.532956
	],
	"33844": [
		28.089064,
		-81.589938
	],
	"33847": [
		27.802789,
		-81.822062
	],
	"33848": [
		28.283572,
		-81.506379
	],
	"33849": [
		28.226068,
		-82.068886
	],
	"33850": [
		28.122376,
		-81.73266
	],
	"33851": [
		28.044636,
		-81.623893
	],
	"33852": [
		27.239337,
		-81.373963
	],
	"33853": [
		27.900707,
		-81.58445
	],
	"33854": [
		27.85644,
		-81.410106
	],
	"33855": [
		27.795372,
		-81.35276
	],
	"33856": [
		27.856354,
		-81.428375
	],
	"33857": [
		27.336195,
		-81.189442
	],
	"33859": [
		27.872695,
		-81.626401
	],
	"33860": [
		27.762895,
		-82.025348
	],
	"33865": [
		27.433787,
		-81.963257
	],
	"33867": [
		27.77782,
		-81.195786
	],
	"33868": [
		28.240843,
		-81.826617
	],
	"33870": [
		27.506929,
		-81.408456
	],
	"33872": [
		27.505251,
		-81.545953
	],
	"33873": [
		27.570917,
		-81.781173
	],
	"33875": [
		27.392358,
		-81.510491
	],
	"33876": [
		27.412594,
		-81.35953
	],
	"33877": [
		27.985755,
		-81.612232
	],
	"33880": [
		27.979055,
		-81.779946
	],
	"33881": [
		28.056447,
		-81.711644
	],
	"33884": [
		27.97848,
		-81.672447
	],
	"33890": [
		27.432793,
		-81.699984
	],
	"33896": [
		28.256905,
		-81.58285
	],
	"33897": [
		28.285129,
		-81.688464
	],
	"33898": [
		27.840809,
		-81.372964
	],
	"33901": [
		26.621074,
		-81.878139
	],
	"33903": [
		26.679968,
		-81.90663
	],
	"33904": [
		26.576012,
		-81.944393
	],
	"33905": [
		26.667872,
		-81.760927
	],
	"33907": [
		26.563891,
		-81.870266
	],
	"33908": [
		26.515834,
		-81.979469
	],
	"33909": [
		26.693201,
		-81.945126
	],
	"33912": [
		26.534017,
		-81.826175
	],
	"33913": [
		26.514239,
		-81.696796
	],
	"33914": [
		26.554392,
		-82.020944
	],
	"33916": [
		26.636927,
		-81.838418
	],
	"33917": [
		26.738607,
		-81.844783
	],
	"33919": [
		26.556626,
		-81.901095
	],
	"33920": [
		26.742298,
		-81.63605
	],
	"33921": [
		26.772225,
		-82.252804
	],
	"33922": [
		26.638155,
		-82.162513
	],
	"33924": [
		26.617555,
		-82.209305
	],
	"33928": [
		26.398386,
		-81.7047
	],
	"33930": [
		26.567129,
		-81.406707
	],
	"33931": [
		26.433124,
		-81.902995
	],
	"33935": [
		26.760319,
		-81.432856
	],
	"33936": [
		26.623407,
		-81.601499
	],
	"33944": [
		26.994441,
		-81.29104
	],
	"33945": [
		26.602325,
		-82.220531
	],
	"33946": [
		26.849507,
		-82.283538
	],
	"33947": [
		26.88772,
		-82.265696
	],
	"33948": [
		26.985889,
		-82.151742
	],
	"33950": [
		26.902973,
		-82.046286
	],
	"33952": [
		26.986134,
		-82.097042
	],
	"33953": [
		26.999702,
		-82.212275
	],
	"33954": [
		27.024724,
		-82.122407
	],
	"33955": [
		26.816433,
		-81.993812
	],
	"33956": [
		26.546315,
		-82.143657
	],
	"33957": [
		26.46392,
		-82.093031
	],
	"33960": [
		27.044099,
		-81.402766
	],
	"33965": [
		26.463373,
		-81.773019
	],
	"33966": [
		26.59162,
		-81.830727
	],
	"33967": [
		26.471507,
		-81.81224
	],
	"33971": [
		26.639584,
		-81.699699
	],
	"33972": [
		26.64928,
		-81.616279
	],
	"33973": [
		26.607864,
		-81.724636
	],
	"33974": [
		26.562706,
		-81.601925
	],
	"33976": [
		26.591277,
		-81.68613
	],
	"33980": [
		26.983527,
		-82.043648
	],
	"33981": [
		26.918213,
		-82.219616
	],
	"33982": [
		26.910534,
		-81.767196
	],
	"33983": [
		27.009117,
		-82.017871
	],
	"33990": [
		26.62799,
		-81.944774
	],
	"33991": [
		26.625364,
		-82.026208
	],
	"33993": [
		26.692897,
		-82.034065
	],
	"34101": [
		26.032137,
		-81.761821
	],
	"34102": [
		26.137498,
		-81.799105
	],
	"34103": [
		26.193911,
		-81.806496
	],
	"34104": [
		26.149955,
		-81.741562
	],
	"34105": [
		26.190046,
		-81.764777
	],
	"34108": [
		26.246308,
		-81.808323
	],
	"34109": [
		26.240842,
		-81.763823
	],
	"34110": [
		26.300417,
		-81.78846
	],
	"34112": [
		26.12061,
		-81.741624
	],
	"34113": [
		26.043649,
		-81.732424
	],
	"34114": [
		25.934108,
		-81.539611
	],
	"34116": [
		26.189294,
		-81.710803
	],
	"34117": [
		26.180811,
		-81.605372
	],
	"34119": [
		26.268236,
		-81.71405
	],
	"34120": [
		26.326101,
		-81.570093
	],
	"34134": [
		26.353032,
		-81.82405
	],
	"34135": [
		26.355549,
		-81.754322
	],
	"34137": [
		25.942746,
		-81.383178
	],
	"34138": [
		25.816512,
		-81.368569
	],
	"34139": [
		25.830885,
		-81.403372
	],
	"34140": [
		25.925194,
		-81.662917
	],
	"34141": [
		26.02282,
		-81.081249
	],
	"34142": [
		26.34275,
		-81.313288
	],
	"34145": [
		25.904093,
		-81.675851
	],
	"34201": [
		27.400886,
		-82.468781
	],
	"34202": [
		27.40671,
		-82.389839
	],
	"34203": [
		27.440337,
		-82.509384
	],
	"34205": [
		27.484084,
		-82.581821
	],
	"34207": [
		27.438677,
		-82.579674
	],
	"34208": [
		27.487487,
		-82.515923
	],
	"34209": [
		27.500129,
		-82.651386
	],
	"34210": [
		27.439629,
		-82.620837
	],
	"34211": [
		27.454673,
		-82.383329
	],
	"34212": [
		27.497814,
		-82.408401
	],
	"34215": [
		27.471141,
		-82.685924
	],
	"34216": [
		27.536772,
		-82.732652
	],
	"34217": [
		27.491178,
		-82.705018
	],
	"34219": [
		27.576471,
		-82.299218
	],
	"34221": [
		27.581094,
		-82.554803
	],
	"34222": [
		27.538965,
		-82.507024
	],
	"34223": [
		26.982666,
		-82.3542
	],
	"34224": [
		26.917571,
		-82.30394
	],
	"34228": [
		27.402247,
		-82.638767
	],
	"34229": [
		27.192163,
		-82.485053
	],
	"34231": [
		27.266027,
		-82.516651
	],
	"34232": [
		27.324987,
		-82.471714
	],
	"34233": [
		27.280022,
		-82.476635
	],
	"34234": [
		27.368298,
		-82.543091
	],
	"34235": [
		27.369876,
		-82.476307
	],
	"34236": [
		27.316509,
		-82.553534
	],
	"34237": [
		27.338992,
		-82.512645
	],
	"34238": [
		27.235792,
		-82.470536
	],
	"34239": [
		27.310893,
		-82.521168
	],
	"34240": [
		27.364247,
		-82.319337
	],
	"34241": [
		27.250668,
		-82.377574
	],
	"34242": [
		27.260222,
		-82.540907
	],
	"34243": [
		27.401013,
		-82.527887
	],
	"34251": [
		27.377731,
		-82.171544
	],
	"34266": [
		27.192286,
		-81.820248
	],
	"34268": [
		27.149245,
		-81.895327
	],
	"34269": [
		27.067597,
		-82.013096
	],
	"34275": [
		27.151792,
		-82.422444
	],
	"34285": [
		27.094564,
		-82.440895
	],
	"34286": [
		27.080871,
		-82.181256
	],
	"34287": [
		27.052571,
		-82.244353
	],
	"34288": [
		27.051628,
		-82.114523
	],
	"34289": [
		27.079862,
		-82.132601
	],
	"34291": [
		27.094062,
		-82.240218
	],
	"34292": [
		27.101944,
		-82.341525
	],
	"34293": [
		27.025247,
		-82.346959
	],
	"34420": [
		29.052734,
		-82.036487
	],
	"34428": [
		28.956773,
		-82.647566
	],
	"34429": [
		28.850605,
		-82.667285
	],
	"34431": [
		29.14162,
		-82.529999
	],
	"34432": [
		29.088393,
		-82.381536
	],
	"34433": [
		29.002221,
		-82.524892
	],
	"34434": [
		28.995934,
		-82.439628
	],
	"34436": [
		28.72058,
		-82.29798
	],
	"34442": [
		28.937049,
		-82.386522
	],
	"34445": [
		28.96799,
		-82.420744
	],
	"34446": [
		28.74728,
		-82.522158
	],
	"34448": [
		28.767011,
		-82.625191
	],
	"34449": [
		29.07472,
		-82.679451
	],
	"34450": [
		28.830041,
		-82.266009
	],
	"34452": [
		28.816271,
		-82.343698
	],
	"34453": [
		28.87377,
		-82.334807
	],
	"34461": [
		28.866144,
		-82.494509
	],
	"34465": [
		28.929489,
		-82.489202
	],
	"34470": [
		29.198907,
		-82.087425
	],
	"34471": [
		29.160555,
		-82.130765
	],
	"34472": [
		29.109474,
		-81.997364
	],
	"34473": [
		29.005695,
		-82.18395
	],
	"34474": [
		29.156427,
		-82.209453
	],
	"34475": [
		29.258755,
		-82.167075
	],
	"34476": [
		29.081607,
		-82.19683
	],
	"34479": [
		29.255724,
		-82.109112
	],
	"34480": [
		29.102401,
		-82.096588
	],
	"34481": [
		29.125538,
		-82.309895
	],
	"34482": [
		29.244387,
		-82.275029
	],
	"34484": [
		28.945019,
		-82.097528
	],
	"34488": [
		29.22809,
		-81.938619
	],
	"34491": [
		28.995628,
		-82.055145
	],
	"34498": [
		29.031552,
		-82.736087
	],
	"34601": [
		28.588628,
		-82.351186
	],
	"34602": [
		28.502482,
		-82.282351
	],
	"34604": [
		28.476942,
		-82.434791
	],
	"34606": [
		28.468477,
		-82.595728
	],
	"34607": [
		28.486761,
		-82.633021
	],
	"34608": [
		28.482826,
		-82.552854
	],
	"34609": [
		28.479476,
		-82.507906
	],
	"34610": [
		28.369882,
		-82.51075
	],
	"34613": [
		28.579241,
		-82.568289
	],
	"34614": [
		28.644303,
		-82.535086
	],
	"34637": [
		28.307465,
		-82.464584
	],
	"34638": [
		28.256862,
		-82.512738
	],
	"34639": [
		28.26543,
		-82.423239
	],
	"34652": [
		28.23749,
		-82.737964
	],
	"34653": [
		28.24408,
		-82.688476
	],
	"34654": [
		28.294894,
		-82.628238
	],
	"34655": [
		28.203661,
		-82.61881
	],
	"34661": [
		28.604751,
		-82.245271
	],
	"34667": [
		28.39142,
		-82.662783
	],
	"34668": [
		28.300793,
		-82.708521
	],
	"34669": [
		28.356034,
		-82.610059
	],
	"34677": [
		28.037526,
		-82.67302
	],
	"34679": [
		28.432204,
		-82.66123
	],
	"34681": [
		28.082817,
		-82.775961
	],
	"34683": [
		28.087706,
		-82.761134
	],
	"34684": [
		28.080744,
		-82.726829
	],
	"34685": [
		28.093299,
		-82.689364
	],
	"34688": [
		28.147125,
		-82.678972
	],
	"34689": [
		28.148306,
		-82.759877
	],
	"34690": [
		28.193745,
		-82.725706
	],
	"34691": [
		28.198023,
		-82.816078
	],
	"34695": [
		28.008161,
		-82.688367
	],
	"34698": [
		28.037553,
		-82.78632
	],
	"34705": [
		28.699567,
		-81.718909
	],
	"34711": [
		28.530496,
		-81.753341
	],
	"34714": [
		28.403125,
		-81.77768
	],
	"34715": [
		28.631016,
		-81.726055
	],
	"34731": [
		28.864109,
		-81.898631
	],
	"34734": [
		28.537003,
		-81.515454
	],
	"34736": [
		28.556499,
		-81.899739
	],
	"34737": [
		28.692308,
		-81.796739
	],
	"34739": [
		27.93054,
		-81.117032
	],
	"34741": [
		28.306299,
		-81.426933
	],
	"34743": [
		28.329321,
		-81.355148
	],
	"34744": [
		28.300969,
		-81.329377
	],
	"34746": [
		28.238826,
		-81.445341
	],
	"34747": [
		28.311503,
		-81.595591
	],
	"34748": [
		28.768405,
		-81.882911
	],
	"34753": [
		28.577078,
		-81.885914
	],
	"34756": [
		28.583655,
		-81.684108
	],
	"34758": [
		28.192068,
		-81.485428
	],
	"34759": [
		28.103895,
		-81.419373
	],
	"34760": [
		28.554727,
		-81.632166
	],
	"34761": [
		28.578577,
		-81.534116
	],
	"34762": [
		28.757379,
		-81.92061
	],
	"34769": [
		28.244625,
		-81.290847
	],
	"34771": [
		28.284307,
		-81.17373
	],
	"34772": [
		28.163035,
		-81.264079
	],
	"34773": [
		28.159876,
		-81.007582
	],
	"34785": [
		28.837287,
		-82.040622
	],
	"34786": [
		28.487141,
		-81.551904
	],
	"34787": [
		28.484948,
		-81.6193
	],
	"34788": [
		28.895617,
		-81.808248
	],
	"34797": [
		28.730468,
		-81.826624
	],
	"34945": [
		27.437265,
		-80.55723
	],
	"34946": [
		27.503294,
		-80.36048
	],
	"34947": [
		27.453751,
		-80.373744
	],
	"34949": [
		27.467258,
		-80.299808
	],
	"34950": [
		27.443788,
		-80.330974
	],
	"34951": [
		27.532134,
		-80.418954
	],
	"34952": [
		27.296128,
		-80.299313
	],
	"34953": [
		27.243974,
		-80.38232
	],
	"34956": [
		27.094656,
		-80.498888
	],
	"34957": [
		27.280287,
		-80.238923
	],
	"34972": [
		27.509388,
		-80.929139
	],
	"34974": [
		27.145973,
		-80.949686
	],
	"34981": [
		27.395528,
		-80.377424
	],
	"34982": [
		27.373264,
		-80.308018
	],
	"34983": [
		27.324139,
		-80.350299
	],
	"34984": [
		27.248984,
		-80.330574
	],
	"34986": [
		27.327734,
		-80.401911
	],
	"34987": [
		27.290285,
		-80.49712
	],
	"34990": [
		27.137133,
		-80.346948
	],
	"34994": [
		27.200948,
		-80.257153
	],
	"34996": [
		27.192817,
		-80.189813
	],
	"34997": [
		27.055637,
		-80.270195
	],
	"35004": [
		33.603431,
		-86.493783
	],
	"35005": [
		33.59595,
		-87.000649
	],
	"35006": [
		33.422765,
		-87.20973
	],
	"35007": [
		33.215623,
		-86.797656
	],
	"35010": [
		32.916719,
		-85.940589
	],
	"35013": [
		33.902168,
		-86.517777
	],
	"35014": [
		33.355851,
		-86.261678
	],
	"35016": [
		34.32387,
		-86.502006
	],
	"35019": [
		34.302078,
		-86.634094
	],
	"35020": [
		33.402429,
		-86.951784
	],
	"35022": [
		33.322849,
		-86.971458
	],
	"35023": [
		33.467828,
		-87.088219
	],
	"35031": [
		34.097505,
		-86.555035
	],
	"35032": [
		33.264859,
		-86.336417
	],
	"35033": [
		33.926475,
		-87.031801
	],
	"35034": [
		32.911122,
		-87.271681
	],
	"35035": [
		33.043682,
		-86.968442
	],
	"35036": [
		33.643922,
		-86.919599
	],
	"35040": [
		33.102967,
		-86.728894
	],
	"35042": [
		32.957991,
		-87.103816
	],
	"35043": [
		33.314842,
		-86.659872
	],
	"35044": [
		33.243975,
		-86.380759
	],
	"35045": [
		32.799962,
		-86.676761
	],
	"35046": [
		32.931141,
		-86.534157
	],
	"35049": [
		33.961807,
		-86.612064
	],
	"35051": [
		33.205032,
		-86.618915
	],
	"35052": [
		33.590682,
		-86.409897
	],
	"35053": [
		34.054155,
		-87.073701
	],
	"35054": [
		33.502019,
		-86.337925
	],
	"35055": [
		34.151121,
		-86.758808
	],
	"35057": [
		34.180462,
		-86.934257
	],
	"35058": [
		34.228856,
		-86.737261
	],
	"35060": [
		33.55775,
		-86.951726
	],
	"35061": [
		33.472006,
		-86.95594
	],
	"35062": [
		33.72492,
		-87.010252
	],
	"35063": [
		33.818273,
		-87.020552
	],
	"35064": [
		33.476069,
		-86.92025
	],
	"35068": [
		33.607512,
		-86.831053
	],
	"35070": [
		34.00928,
		-86.757878
	],
	"35071": [
		33.695136,
		-86.848963
	],
	"35072": [
		33.093498,
		-86.066947
	],
	"35073": [
		33.651226,
		-86.986831
	],
	"35074": [
		33.222349,
		-87.12427
	],
	"35077": [
		34.021165,
		-86.832668
	],
	"35078": [
		33.32442,
		-86.444966
	],
	"35079": [
		33.93788,
		-86.758349
	],
	"35080": [
		33.260081,
		-86.911474
	],
	"35082": [
		33.158024,
		-86.153863
	],
	"35083": [
		34.199871,
		-86.59917
	],
	"35085": [
		32.976498,
		-86.739181
	],
	"35087": [
		34.306453,
		-86.584296
	],
	"35089": [
		32.945782,
		-86.081832
	],
	"35091": [
		33.779236,
		-86.789554
	],
	"35094": [
		33.530066,
		-86.553303
	],
	"35096": [
		33.620336,
		-86.107668
	],
	"35097": [
		33.892188,
		-86.627133
	],
	"35098": [
		34.1211,
		-87.04688
	],
	"35111": [
		33.284628,
		-87.094558
	],
	"35112": [
		33.691077,
		-86.470578
	],
	"35114": [
		33.224414,
		-86.879318
	],
	"35115": [
		33.142473,
		-86.891528
	],
	"35116": [
		33.731294,
		-86.769946
	],
	"35117": [
		33.667778,
		-86.892599
	],
	"35118": [
		33.527419,
		-87.034686
	],
	"35119": [
		33.646571,
		-86.77093
	],
	"35120": [
		33.666809,
		-86.423755
	],
	"35121": [
		33.941185,
		-86.455102
	],
	"35124": [
		33.32183,
		-86.742197
	],
	"35125": [
		33.633384,
		-86.288692
	],
	"35126": [
		33.730809,
		-86.654913
	],
	"35127": [
		33.491657,
		-86.976425
	],
	"35128": [
		33.5524,
		-86.337819
	],
	"35130": [
		33.633156,
		-87.136688
	],
	"35131": [
		33.727425,
		-86.196829
	],
	"35133": [
		33.82965,
		-86.596151
	],
	"35135": [
		33.616462,
		-86.199595
	],
	"35136": [
		32.879247,
		-86.286795
	],
	"35139": [
		33.714126,
		-86.973966
	],
	"35143": [
		33.10034,
		-86.542811
	],
	"35146": [
		33.79507,
		-86.453279
	],
	"35147": [
		33.415884,
		-86.530992
	],
	"35148": [
		33.755959,
		-87.045787
	],
	"35149": [
		33.24987,
		-86.187275
	],
	"35150": [
		33.189306,
		-86.238384
	],
	"35151": [
		33.081343,
		-86.392211
	],
	"35160": [
		33.356656,
		-86.052297
	],
	"35171": [
		32.88254,
		-86.740256
	],
	"35172": [
		33.845155,
		-86.695313
	],
	"35173": [
		33.655407,
		-86.563109
	],
	"35175": [
		34.435679,
		-86.511374
	],
	"35176": [
		33.485382,
		-86.498033
	],
	"35178": [
		33.419769,
		-86.398435
	],
	"35179": [
		34.273307,
		-86.96897
	],
	"35180": [
		33.820305,
		-86.840317
	],
	"35183": [
		33.016108,
		-86.35201
	],
	"35184": [
		33.114345,
		-87.136714
	],
	"35186": [
		33.256733,
		-86.510291
	],
	"35187": [
		33.080534,
		-86.885794
	],
	"35188": [
		33.180336,
		-87.163635
	],
	"35203": [
		33.518601,
		-86.809807
	],
	"35204": [
		33.52212,
		-86.839801
	],
	"35205": [
		33.494995,
		-86.808077
	],
	"35206": [
		33.569909,
		-86.712978
	],
	"35207": [
		33.565037,
		-86.823589
	],
	"35208": [
		33.496807,
		-86.879352
	],
	"35209": [
		33.466348,
		-86.811516
	],
	"35210": [
		33.541461,
		-86.669642
	],
	"35211": [
		33.455086,
		-86.856459
	],
	"35212": [
		33.547389,
		-86.75291
	],
	"35213": [
		33.506671,
		-86.744458
	],
	"35214": [
		33.576837,
		-86.893456
	],
	"35215": [
		33.649002,
		-86.707425
	],
	"35216": [
		33.419246,
		-86.789433
	],
	"35217": [
		33.607882,
		-86.760265
	],
	"35218": [
		33.507667,
		-86.893995
	],
	"35221": [
		33.449487,
		-86.898962
	],
	"35222": [
		33.523712,
		-86.770115
	],
	"35223": [
		33.488141,
		-86.734834
	],
	"35224": [
		33.517294,
		-86.943879
	],
	"35226": [
		33.399153,
		-86.845896
	],
	"35228": [
		33.456098,
		-86.920958
	],
	"35229": [
		33.465794,
		-86.788551
	],
	"35233": [
		33.508748,
		-86.801964
	],
	"35234": [
		33.540811,
		-86.802758
	],
	"35235": [
		33.624485,
		-86.647907
	],
	"35242": [
		33.425247,
		-86.672084
	],
	"35243": [
		33.440918,
		-86.741508
	],
	"35244": [
		33.352918,
		-86.825333
	],
	"35254": [
		33.516152,
		-86.857557
	],
	"35401": [
		33.170238,
		-87.616169
	],
	"35404": [
		33.215157,
		-87.483406
	],
	"35405": [
		33.120257,
		-87.53929
	],
	"35406": [
		33.338842,
		-87.467554
	],
	"35441": [
		32.852762,
		-87.750329
	],
	"35442": [
		33.077211,
		-88.202696
	],
	"35443": [
		32.755279,
		-88.000762
	],
	"35444": [
		33.328718,
		-87.292882
	],
	"35446": [
		33.207795,
		-87.751031
	],
	"35447": [
		33.251868,
		-88.157754
	],
	"35452": [
		33.278292,
		-87.680633
	],
	"35453": [
		33.163776,
		-87.389459
	],
	"35456": [
		33.063694,
		-87.41475
	],
	"35457": [
		33.304137,
		-87.773144
	],
	"35458": [
		33.410596,
		-87.80659
	],
	"35459": [
		32.791636,
		-88.275851
	],
	"35460": [
		32.713161,
		-88.153712
	],
	"35461": [
		33.417374,
		-88.213613
	],
	"35462": [
		32.920473,
		-87.967463
	],
	"35463": [
		33.064731,
		-87.682451
	],
	"35464": [
		32.80613,
		-88.15459
	],
	"35466": [
		33.248527,
		-87.919484
	],
	"35469": [
		32.973874,
		-87.781565
	],
	"35470": [
		32.561974,
		-88.066347
	],
	"35473": [
		33.270573,
		-87.581631
	],
	"35474": [
		32.940566,
		-87.5912
	],
	"35475": [
		33.43438,
		-87.593996
	],
	"35476": [
		33.22747,
		-87.591277
	],
	"35477": [
		32.956143,
		-88.240989
	],
	"35480": [
		33.078038,
		-87.819226
	],
	"35481": [
		33.394624,
		-88.037417
	],
	"35490": [
		33.218419,
		-87.238215
	],
	"35501": [
		33.81891,
		-87.292749
	],
	"35503": [
		33.936479,
		-87.305113
	],
	"35504": [
		33.894135,
		-87.170812
	],
	"35540": [
		34.234693,
		-87.20972
	],
	"35541": [
		34.081325,
		-87.174349
	],
	"35542": [
		33.719014,
		-87.675988
	],
	"35543": [
		34.211156,
		-87.758438
	],
	"35544": [
		33.959985,
		-88.017137
	],
	"35545": [
		33.651546,
		-87.93488
	],
	"35546": [
		33.619425,
		-87.542714
	],
	"35548": [
		34.056419,
		-87.750485
	],
	"35549": [
		33.851343,
		-87.544905
	],
	"35550": [
		33.745429,
		-87.160466
	],
	"35552": [
		34.072276,
		-88.142204
	],
	"35553": [
		34.126879,
		-87.383136
	],
	"35554": [
		33.885727,
		-87.671678
	],
	"35555": [
		33.658512,
		-87.815637
	],
	"35559": [
		33.905485,
		-87.728143
	],
	"35563": [
		33.977608,
		-87.903722
	],
	"35564": [
		34.258833,
		-87.84526
	],
	"35565": [
		34.23696,
		-87.563402
	],
	"35570": [
		34.16375,
		-87.993165
	],
	"35571": [
		34.368708,
		-87.944108
	],
	"35572": [
		34.201272,
		-87.28258
	],
	"35574": [
		33.567578,
		-87.949993
	],
	"35575": [
		34.036179,
		-87.588153
	],
	"35576": [
		33.575382,
		-88.143851
	],
	"35577": [
		34.102378,
		-87.620057
	],
	"35578": [
		33.980483,
		-87.466391
	],
	"35579": [
		33.636267,
		-87.360324
	],
	"35580": [
		33.673294,
		-87.255549
	],
	"35581": [
		34.359912,
		-87.713097
	],
	"35582": [
		34.4868,
		-88.112899
	],
	"35584": [
		33.819369,
		-87.088014
	],
	"35585": [
		34.420835,
		-87.832483
	],
	"35586": [
		33.8779,
		-88.134075
	],
	"35587": [
		33.795541,
		-87.456888
	],
	"35592": [
		33.746099,
		-88.084807
	],
	"35593": [
		34.339101,
		-88.095624
	],
	"35594": [
		33.932693,
		-87.774369
	],
	"35601": [
		34.608016,
		-87.011052
	],
	"35603": [
		34.535452,
		-86.971226
	],
	"35610": [
		34.954456,
		-87.245961
	],
	"35611": [
		34.773833,
		-87.084145
	],
	"35613": [
		34.820163,
		-86.882161
	],
	"35614": [
		34.853722,
		-86.990112
	],
	"35615": [
		34.662737,
		-86.875419
	],
	"35616": [
		34.739504,
		-88.019381
	],
	"35618": [
		34.641403,
		-87.304983
	],
	"35619": [
		34.382723,
		-87.152105
	],
	"35620": [
		34.930812,
		-87.020185
	],
	"35621": [
		34.348973,
		-86.729536
	],
	"35622": [
		34.34659,
		-86.898961
	],
	"35630": [
		34.82298,
		-87.661652
	],
	"35633": [
		34.875101,
		-87.798371
	],
	"35634": [
		34.91927,
		-87.614548
	],
	"35640": [
		34.440702,
		-86.943677
	],
	"35643": [
		34.672577,
		-87.201931
	],
	"35645": [
		34.903048,
		-87.500965
	],
	"35646": [
		34.677104,
		-87.523343
	],
	"35647": [
		34.967655,
		-87.117034
	],
	"35648": [
		34.95866,
		-87.387836
	],
	"35649": [
		34.617619,
		-86.869284
	],
	"35650": [
		34.447233,
		-87.308593
	],
	"35651": [
		34.469857,
		-87.495702
	],
	"35652": [
		34.846744,
		-87.310208
	],
	"35653": [
		34.518191,
		-87.871965
	],
	"35654": [
		34.497789,
		-87.632269
	],
	"35660": [
		34.755494,
		-87.701265
	],
	"35661": [
		34.768526,
		-87.562802
	],
	"35670": [
		34.455176,
		-86.729344
	],
	"35671": [
		34.685399,
		-86.93539
	],
	"35672": [
		34.648533,
		-87.406487
	],
	"35673": [
		34.576336,
		-87.137349
	],
	"35674": [
		34.66241,
		-87.781902
	],
	"35677": [
		34.955707,
		-88.026555
	],
	"35739": [
		34.968586,
		-86.791036
	],
	"35740": [
		34.965286,
		-85.777448
	],
	"35741": [
		34.718016,
		-86.479004
	],
	"35744": [
		34.610532,
		-85.909141
	],
	"35745": [
		34.943416,
		-86.180179
	],
	"35746": [
		34.828619,
		-86.005957
	],
	"35747": [
		34.494944,
		-86.298989
	],
	"35748": [
		34.721079,
		-86.389356
	],
	"35749": [
		34.822236,
		-86.75782
	],
	"35750": [
		34.956179,
		-86.589482
	],
	"35751": [
		34.811157,
		-86.27646
	],
	"35752": [
		34.7459,
		-85.946047
	],
	"35754": [
		34.525492,
		-86.604467
	],
	"35755": [
		34.488768,
		-86.150101
	],
	"35756": [
		34.6437,
		-86.818151
	],
	"35757": [
		34.784218,
		-86.745309
	],
	"35758": [
		34.71142,
		-86.746508
	],
	"35759": [
		34.868262,
		-86.545831
	],
	"35760": [
		34.543906,
		-86.383856
	],
	"35761": [
		34.916206,
		-86.409214
	],
	"35763": [
		34.622047,
		-86.461788
	],
	"35764": [
		34.726301,
		-86.310155
	],
	"35765": [
		34.690313,
		-85.814085
	],
	"35766": [
		34.867485,
		-86.299884
	],
	"35768": [
		34.768891,
		-86.104193
	],
	"35769": [
		34.597984,
		-86.104809
	],
	"35771": [
		34.538598,
		-86.005423
	],
	"35772": [
		34.937146,
		-85.948547
	],
	"35773": [
		34.891069,
		-86.707941
	],
	"35774": [
		34.765246,
		-86.226525
	],
	"35775": [
		34.542934,
		-86.705959
	],
	"35776": [
		34.659404,
		-86.239414
	],
	"35801": [
		34.725269,
		-86.560866
	],
	"35802": [
		34.668212,
		-86.558882
	],
	"35803": [
		34.563461,
		-86.519399
	],
	"35805": [
		34.709368,
		-86.62029
	],
	"35806": [
		34.760774,
		-86.685762
	],
	"35808": [
		34.633027,
		-86.659057
	],
	"35810": [
		34.803193,
		-86.601445
	],
	"35811": [
		34.795354,
		-86.509948
	],
	"35816": [
		34.739954,
		-86.630751
	],
	"35824": [
		34.644914,
		-86.752068
	],
	"35896": [
		34.754673,
		-86.654641
	],
	"35901": [
		34.049376,
		-85.934301
	],
	"35903": [
		34.02427,
		-85.863703
	],
	"35904": [
		34.07056,
		-85.990098
	],
	"35905": [
		33.9614,
		-85.922422
	],
	"35906": [
		33.927149,
		-86.095113
	],
	"35907": [
		33.890841,
		-86.01802
	],
	"35950": [
		34.24975,
		-86.261097
	],
	"35951": [
		34.339098,
		-86.162297
	],
	"35952": [
		34.052385,
		-86.310738
	],
	"35953": [
		33.809618,
		-86.229742
	],
	"35954": [
		34.089754,
		-86.057449
	],
	"35956": [
		34.146146,
		-86.146749
	],
	"35957": [
		34.196159,
		-86.196898
	],
	"35958": [
		34.916005,
		-85.645957
	],
	"35959": [
		34.242383,
		-85.607959
	],
	"35960": [
		34.124328,
		-85.570557
	],
	"35961": [
		34.303952,
		-85.846214
	],
	"35962": [
		34.303881,
		-86.036441
	],
	"35963": [
		34.359787,
		-85.9272
	],
	"35966": [
		34.786981,
		-85.674167
	],
	"35967": [
		34.407663,
		-85.694569
	],
	"35968": [
		34.551098,
		-85.738915
	],
	"35971": [
		34.455491,
		-85.945131
	],
	"35972": [
		33.993999,
		-86.24687
	],
	"35973": [
		34.344016,
		-85.551513
	],
	"35974": [
		34.362751,
		-86.010291
	],
	"35975": [
		34.436463,
		-86.060368
	],
	"35976": [
		34.345767,
		-86.330025
	],
	"35978": [
		34.642798,
		-85.728979
	],
	"35979": [
		34.832324,
		-85.609647
	],
	"35980": [
		34.172088,
		-86.389606
	],
	"35981": [
		34.722345,
		-85.648802
	],
	"35983": [
		34.172914,
		-85.7663
	],
	"35984": [
		34.536843,
		-85.563859
	],
	"35986": [
		34.500336,
		-85.835889
	],
	"35987": [
		33.91337,
		-86.242208
	],
	"35988": [
		34.557662,
		-85.79649
	],
	"35989": [
		34.613541,
		-85.619853
	],
	"35990": [
		34.06778,
		-86.304688
	],
	"36003": [
		32.451904,
		-86.723821
	],
	"36005": [
		31.888214,
		-85.7196
	],
	"36006": [
		32.64656,
		-86.722096
	],
	"36009": [
		31.594781,
		-86.301377
	],
	"36010": [
		31.659777,
		-85.798448
	],
	"36013": [
		32.284669,
		-85.985235
	],
	"36016": [
		31.850223,
		-85.414706
	],
	"36017": [
		31.679443,
		-85.55772
	],
	"36020": [
		32.479374,
		-86.322997
	],
	"36022": [
		32.623499,
		-86.405578
	],
	"36024": [
		32.671798,
		-86.025021
	],
	"36025": [
		32.544457,
		-86.324973
	],
	"36026": [
		32.77548,
		-86.130993
	],
	"36027": [
		32.060643,
		-85.116624
	],
	"36028": [
		31.49547,
		-86.392802
	],
	"36029": [
		32.181872,
		-85.933154
	],
	"36030": [
		31.870914,
		-86.87622
	],
	"36031": [
		32.245572,
		-85.734076
	],
	"36032": [
		31.99463,
		-86.568637
	],
	"36033": [
		31.671714,
		-86.770613
	],
	"36034": [
		31.621045,
		-86.111209
	],
	"36035": [
		31.788705,
		-86.126215
	],
	"36036": [
		31.97394,
		-86.161676
	],
	"36037": [
		31.799009,
		-86.628615
	],
	"36038": [
		31.435078,
		-86.491253
	],
	"36039": [
		32.298948,
		-85.83756
	],
	"36040": [
		32.173924,
		-86.684172
	],
	"36041": [
		31.9138,
		-86.319978
	],
	"36042": [
		31.868619,
		-86.459989
	],
	"36043": [
		32.201153,
		-86.420747
	],
	"36046": [
		32.023613,
		-86.333407
	],
	"36047": [
		32.075247,
		-86.517854
	],
	"36048": [
		31.804214,
		-85.592024
	],
	"36049": [
		31.768143,
		-86.277257
	],
	"36051": [
		32.685457,
		-86.50002
	],
	"36052": [
		32.184093,
		-86.048285
	],
	"36053": [
		32.02924,
		-85.443571
	],
	"36054": [
		32.481879,
		-86.366311
	],
	"36064": [
		32.296635,
		-86.077885
	],
	"36066": [
		32.4797,
		-86.42401
	],
	"36067": [
		32.516518,
		-86.561483
	],
	"36069": [
		32.094155,
		-86.149901
	],
	"36071": [
		31.706685,
		-86.397754
	],
	"36075": [
		32.378389,
		-85.9237
	],
	"36078": [
		32.546979,
		-85.942735
	],
	"36079": [
		31.766709,
		-85.998035
	],
	"36080": [
		32.711806,
		-86.284022
	],
	"36081": [
		31.903745,
		-85.898152
	],
	"36082": [
		31.802761,
		-85.954635
	],
	"36083": [
		32.38673,
		-85.684361
	],
	"36088": [
		32.415281,
		-85.720314
	],
	"36089": [
		32.151049,
		-85.698646
	],
	"36091": [
		32.750447,
		-86.508548
	],
	"36092": [
		32.617657,
		-86.200531
	],
	"36093": [
		32.494564,
		-86.133634
	],
	"36104": [
		32.403274,
		-86.326915
	],
	"36105": [
		32.209608,
		-86.288501
	],
	"36106": [
		32.35282,
		-86.257585
	],
	"36107": [
		32.383695,
		-86.279304
	],
	"36108": [
		32.3391,
		-86.401107
	],
	"36109": [
		32.388957,
		-86.242148
	],
	"36110": [
		32.446582,
		-86.255772
	],
	"36111": [
		32.336579,
		-86.271324
	],
	"36112": [
		32.380829,
		-86.349143
	],
	"36113": [
		32.380944,
		-86.363749
	],
	"36115": [
		32.406766,
		-86.246699
	],
	"36116": [
		32.269243,
		-86.201494
	],
	"36117": [
		32.378696,
		-86.145018
	],
	"36201": [
		33.64916,
		-85.879642
	],
	"36203": [
		33.58308,
		-85.834626
	],
	"36205": [
		33.717379,
		-85.794817
	],
	"36206": [
		33.733273,
		-85.809624
	],
	"36207": [
		33.680317,
		-85.709537
	],
	"36250": [
		33.765322,
		-85.901096
	],
	"36251": [
		33.222279,
		-85.872376
	],
	"36255": [
		33.168154,
		-85.73044
	],
	"36256": [
		33.046308,
		-85.704818
	],
	"36258": [
		33.477734,
		-85.717338
	],
	"36260": [
		33.581758,
		-85.995493
	],
	"36262": [
		33.806237,
		-85.479824
	],
	"36263": [
		33.466234,
		-85.35933
	],
	"36264": [
		33.596783,
		-85.551483
	],
	"36265": [
		33.847655,
		-85.784916
	],
	"36266": [
		33.349846,
		-85.734316
	],
	"36267": [
		33.197365,
		-85.948287
	],
	"36268": [
		33.494805,
		-85.929469
	],
	"36269": [
		33.739797,
		-85.383876
	],
	"36271": [
		33.78123,
		-86.01869
	],
	"36272": [
		33.942381,
		-85.595417
	],
	"36273": [
		33.545031,
		-85.378048
	],
	"36274": [
		33.172406,
		-85.363142
	],
	"36276": [
		33.132677,
		-85.570266
	],
	"36277": [
		33.757469,
		-85.818226
	],
	"36278": [
		33.332433,
		-85.523567
	],
	"36279": [
		33.872274,
		-85.889336
	],
	"36280": [
		33.376324,
		-85.388261
	],
	"36301": [
		31.140065,
		-85.398289
	],
	"36303": [
		31.266568,
		-85.401317
	],
	"36305": [
		31.204572,
		-85.496004
	],
	"36310": [
		31.595148,
		-85.208852
	],
	"36311": [
		31.609777,
		-85.685655
	],
	"36312": [
		31.170833,
		-85.236826
	],
	"36313": [
		31.178551,
		-85.793943
	],
	"36314": [
		31.018937,
		-85.772824
	],
	"36316": [
		31.175691,
		-85.863975
	],
	"36317": [
		31.643557,
		-85.404255
	],
	"36318": [
		31.169524,
		-85.950531
	],
	"36319": [
		31.331937,
		-85.148874
	],
	"36320": [
		31.049925,
		-85.319153
	],
	"36321": [
		31.21084,
		-85.29923
	],
	"36322": [
		31.257605,
		-85.735807
	],
	"36323": [
		31.428104,
		-86.072471
	],
	"36330": [
		31.305932,
		-85.864054
	],
	"36340": [
		31.051672,
		-85.890943
	],
	"36343": [
		31.060704,
		-85.120765
	],
	"36344": [
		31.09789,
		-85.708147
	],
	"36345": [
		31.366306,
		-85.310372
	],
	"36346": [
		31.560574,
		-85.930086
	],
	"36350": [
		31.350214,
		-85.495521
	],
	"36351": [
		31.425502,
		-85.9066
	],
	"36352": [
		31.264999,
		-85.609699
	],
	"36353": [
		31.478527,
		-85.348637
	],
	"36360": [
		31.467469,
		-85.61703
	],
	"36362": [
		31.350932,
		-85.679787
	],
	"36370": [
		31.142219,
		-85.158109
	],
	"36371": [
		31.31242,
		-85.551996
	],
	"36373": [
		31.541593,
		-85.097397
	],
	"36374": [
		31.578737,
		-85.49369
	],
	"36375": [
		31.071216,
		-85.544966
	],
	"36376": [
		31.251143,
		-85.269809
	],
	"36401": [
		31.480653,
		-86.940722
	],
	"36420": [
		31.172401,
		-86.565077
	],
	"36421": [
		31.324729,
		-86.506928
	],
	"36425": [
		31.76474,
		-87.195168
	],
	"36426": [
		31.140984,
		-87.071111
	],
	"36432": [
		31.293982,
		-87.030269
	],
	"36435": [
		31.869694,
		-87.451616
	],
	"36436": [
		31.785367,
		-87.649528
	],
	"36439": [
		31.419287,
		-87.345189
	],
	"36441": [
		31.039357,
		-87.255149
	],
	"36442": [
		31.073321,
		-86.359325
	],
	"36444": [
		31.676299,
		-87.440954
	],
	"36445": [
		31.444585,
		-87.453392
	],
	"36446": [
		31.79246,
		-87.719956
	],
	"36451": [
		31.700517,
		-87.803568
	],
	"36453": [
		31.191678,
		-86.149163
	],
	"36454": [
		31.328428,
		-87.200318
	],
	"36455": [
		31.013096,
		-86.351972
	],
	"36456": [
		31.568405,
		-86.806151
	],
	"36460": [
		31.518972,
		-87.304829
	],
	"36467": [
		31.281017,
		-86.256945
	],
	"36470": [
		31.515188,
		-87.565908
	],
	"36471": [
		31.616419,
		-87.248947
	],
	"36473": [
		31.307228,
		-87.202125
	],
	"36474": [
		31.42969,
		-86.626037
	],
	"36475": [
		31.387683,
		-87.219745
	],
	"36476": [
		31.362361,
		-86.549731
	],
	"36477": [
		31.097175,
		-86.061411
	],
	"36480": [
		31.325005,
		-87.599127
	],
	"36481": [
		31.771512,
		-87.382559
	],
	"36482": [
		31.639318,
		-87.6369
	],
	"36483": [
		31.047796,
		-86.674187
	],
	"36502": [
		31.147733,
		-87.494821
	],
	"36505": [
		30.94195,
		-88.015792
	],
	"36507": [
		30.858609,
		-87.742025
	],
	"36509": [
		30.39302,
		-88.270178
	],
	"36511": [
		30.315155,
		-87.747247
	],
	"36512": [
		30.998808,
		-88.018409
	],
	"36513": [
		31.173869,
		-88.005799
	],
	"36518": [
		31.459303,
		-88.28404
	],
	"36521": [
		30.964986,
		-88.17733
	],
	"36522": [
		31.090945,
		-88.275355
	],
	"36523": [
		30.370798,
		-88.190791
	],
	"36524": [
		31.802618,
		-88.010863
	],
	"36525": [
		30.890103,
		-88.018704
	],
	"36526": [
		30.611152,
		-87.859918
	],
	"36527": [
		30.702075,
		-87.881866
	],
	"36528": [
		30.2355,
		-88.236219
	],
	"36529": [
		31.275361,
		-88.228787
	],
	"36530": [
		30.40821,
		-87.555585
	],
	"36532": [
		30.480713,
		-87.861306
	],
	"36535": [
		30.383999,
		-87.727359
	],
	"36538": [
		31.657053,
		-88.143271
	],
	"36539": [
		31.348614,
		-88.380629
	],
	"36540": [
		31.448949,
		-87.675843
	],
	"36541": [
		30.489535,
		-88.344106
	],
	"36542": [
		30.269654,
		-87.750627
	],
	"36543": [
		31.221493,
		-87.466154
	],
	"36544": [
		30.479701,
		-88.230089
	],
	"36545": [
		31.488511,
		-87.871704
	],
	"36548": [
		31.48898,
		-87.967725
	],
	"36549": [
		30.411164,
		-87.451119
	],
	"36550": [
		31.24943,
		-87.730436
	],
	"36551": [
		30.647109,
		-87.753071
	],
	"36553": [
		31.243301,
		-88.067813
	],
	"36555": [
		30.396615,
		-87.783492
	],
	"36556": [
		31.197708,
		-87.976023
	],
	"36558": [
		31.608143,
		-88.316371
	],
	"36559": [
		30.567794,
		-87.908653
	],
	"36560": [
		31.097767,
		-88.040068
	],
	"36561": [
		30.288702,
		-87.571504
	],
	"36562": [
		31.037057,
		-87.670416
	],
	"36564": [
		30.483252,
		-87.934696
	],
	"36567": [
		30.623536,
		-87.55696
	],
	"36568": [
		30.511926,
		-88.27264
	],
	"36569": [
		31.542478,
		-88.091294
	],
	"36571": [
		30.854581,
		-88.109929
	],
	"36572": [
		30.857722,
		-88.061419
	],
	"36574": [
		30.50111,
		-87.478438
	],
	"36575": [
		30.769164,
		-88.273387
	],
	"36576": [
		30.522953,
		-87.763833
	],
	"36578": [
		30.749316,
		-87.77924
	],
	"36579": [
		31.106823,
		-87.796932
	],
	"36580": [
		30.478898,
		-87.703414
	],
	"36581": [
		31.375357,
		-87.965583
	],
	"36582": [
		30.509877,
		-88.173001
	],
	"36583": [
		31.367319,
		-88.195002
	],
	"36584": [
		31.199096,
		-88.388739
	],
	"36585": [
		31.387319,
		-88.079654
	],
	"36587": [
		30.844238,
		-88.351243
	],
	"36590": [
		30.531802,
		-88.174421
	],
	"36602": [
		30.693326,
		-88.045544
	],
	"36603": [
		30.673984,
		-88.026681
	],
	"36604": [
		30.682213,
		-88.068134
	],
	"36605": [
		30.604547,
		-88.087824
	],
	"36606": [
		30.668786,
		-88.105874
	],
	"36607": [
		30.69856,
		-88.105759
	],
	"36608": [
		30.681503,
		-88.300213
	],
	"36609": [
		30.660248,
		-88.163479
	],
	"36610": [
		30.736246,
		-88.073507
	],
	"36611": [
		30.769623,
		-88.080073
	],
	"36612": [
		30.752882,
		-88.113135
	],
	"36613": [
		30.809841,
		-88.187451
	],
	"36615": [
		30.63021,
		-88.069879
	],
	"36616": [
		30.724504,
		-88.081588
	],
	"36617": [
		30.716026,
		-88.095707
	],
	"36618": [
		30.736902,
		-88.169796
	],
	"36619": [
		30.596087,
		-88.196637
	],
	"36688": [
		30.696156,
		-88.182096
	],
	"36693": [
		30.625698,
		-88.149746
	],
	"36695": [
		30.628385,
		-88.280303
	],
	"36701": [
		32.483972,
		-87.054642
	],
	"36703": [
		32.427349,
		-86.912858
	],
	"36720": [
		32.158196,
		-87.344594
	],
	"36722": [
		32.094921,
		-87.571497
	],
	"36723": [
		32.05363,
		-87.274538
	],
	"36726": [
		31.963626,
		-87.295936
	],
	"36727": [
		31.910985,
		-88.03391
	],
	"36728": [
		32.161399,
		-87.476215
	],
	"36732": [
		32.429314,
		-87.914179
	],
	"36736": [
		32.060282,
		-87.776198
	],
	"36738": [
		32.42097,
		-87.624965
	],
	"36740": [
		32.626783,
		-87.836571
	],
	"36742": [
		32.467872,
		-87.729452
	],
	"36744": [
		32.695952,
		-87.599716
	],
	"36748": [
		32.267275,
		-87.780901
	],
	"36749": [
		32.550967,
		-86.849827
	],
	"36750": [
		32.789616,
		-86.849377
	],
	"36751": [
		31.824299,
		-87.545748
	],
	"36752": [
		32.298669,
		-86.631995
	],
	"36753": [
		31.807348,
		-87.076533
	],
	"36754": [
		32.154061,
		-87.700902
	],
	"36756": [
		32.683866,
		-87.27589
	],
	"36758": [
		32.638892,
		-86.88991
	],
	"36759": [
		32.416752,
		-87.277593
	],
	"36761": [
		32.106169,
		-86.978039
	],
	"36763": [
		32.276807,
		-87.980902
	],
	"36765": [
		32.588169,
		-87.522234
	],
	"36766": [
		31.955121,
		-87.086691
	],
	"36767": [
		32.259288,
		-87.191091
	],
	"36768": [
		31.912626,
		-87.019696
	],
	"36769": [
		32.007856,
		-87.547444
	],
	"36773": [
		32.258944,
		-87.357531
	],
	"36775": [
		32.175542,
		-86.979214
	],
	"36776": [
		32.735606,
		-87.741416
	],
	"36782": [
		32.116133,
		-87.912973
	],
	"36783": [
		32.24778,
		-87.597839
	],
	"36784": [
		31.926927,
		-87.787887
	],
	"36785": [
		32.260516,
		-86.84581
	],
	"36786": [
		32.431068,
		-87.482163
	],
	"36790": [
		32.733603,
		-86.893627
	],
	"36792": [
		32.925847,
		-86.906151
	],
	"36793": [
		32.821605,
		-87.027517
	],
	"36801": [
		32.694763,
		-85.395626
	],
	"36804": [
		32.534249,
		-85.347421
	],
	"36830": [
		32.53893,
		-85.492645
	],
	"36832": [
		32.582937,
		-85.585938
	],
	"36849": [
		32.60242,
		-85.487341
	],
	"36850": [
		32.783232,
		-85.658566
	],
	"36852": [
		32.757181,
		-85.292494
	],
	"36853": [
		32.816523,
		-85.76722
	],
	"36854": [
		32.751613,
		-85.189484
	],
	"36855": [
		33.028908,
		-85.308151
	],
	"36856": [
		32.274493,
		-84.997828
	],
	"36858": [
		32.328274,
		-85.330375
	],
	"36859": [
		32.235008,
		-85.011009
	],
	"36860": [
		32.274537,
		-85.424439
	],
	"36861": [
		32.890875,
		-85.850604
	],
	"36862": [
		32.903965,
		-85.455157
	],
	"36863": [
		32.889494,
		-85.26375
	],
	"36865": [
		32.602618,
		-85.589334
	],
	"36866": [
		32.565305,
		-85.712082
	],
	"36867": [
		32.495317,
		-85.024588
	],
	"36869": [
		32.420407,
		-85.064201
	],
	"36870": [
		32.482878,
		-85.120305
	],
	"36871": [
		32.178708,
		-85.157233
	],
	"36874": [
		32.564252,
		-85.198549
	],
	"36875": [
		32.336837,
		-85.166552
	],
	"36877": [
		32.573153,
		-85.101369
	],
	"36879": [
		32.727562,
		-85.558384
	],
	"36901": [
		32.421636,
		-88.14733
	],
	"36904": [
		32.100587,
		-88.260758
	],
	"36907": [
		32.426384,
		-88.346704
	],
	"36908": [
		31.870538,
		-88.391132
	],
	"36910": [
		32.204602,
		-88.146953
	],
	"36912": [
		32.230412,
		-88.302607
	],
	"36913": [
		31.960963,
		-88.44709
	],
	"36915": [
		31.955091,
		-88.358729
	],
	"36916": [
		32.209837,
		-88.059887
	],
	"36919": [
		31.769052,
		-88.282862
	],
	"36921": [
		31.93843,
		-88.18278
	],
	"36922": [
		32.300344,
		-88.141975
	],
	"36925": [
		32.432254,
		-88.183591
	],
	"37010": [
		36.571861,
		-87.108499
	],
	"37012": [
		36.07383,
		-86.001565
	],
	"37013": [
		36.052201,
		-86.632563
	],
	"37014": [
		35.875238,
		-86.632962
	],
	"37015": [
		36.279378,
		-87.075584
	],
	"37016": [
		35.957452,
		-86.100226
	],
	"37018": [
		35.6314,
		-86.210955
	],
	"37019": [
		35.392281,
		-86.709825
	],
	"37020": [
		35.634389,
		-86.407093
	],
	"37022": [
		36.514582,
		-86.317038
	],
	"37023": [
		36.592456,
		-87.782744
	],
	"37025": [
		35.948733,
		-87.307754
	],
	"37026": [
		35.696497,
		-86.105655
	],
	"37027": [
		35.999288,
		-86.785062
	],
	"37028": [
		36.627542,
		-87.862973
	],
	"37029": [
		36.042705,
		-87.263545
	],
	"37030": [
		36.271546,
		-85.94212
	],
	"37031": [
		36.366189,
		-86.29291
	],
	"37032": [
		36.524217,
		-87.017158
	],
	"37033": [
		35.744615,
		-87.557839
	],
	"37034": [
		35.651936,
		-86.690108
	],
	"37035": [
		36.381108,
		-87.133983
	],
	"37036": [
		36.234982,
		-87.261263
	],
	"37037": [
		35.703083,
		-86.351238
	],
	"37040": [
		36.522633,
		-87.334932
	],
	"37042": [
		36.568751,
		-87.416322
	],
	"37043": [
		36.489761,
		-87.237235
	],
	"37046": [
		35.781852,
		-86.70075
	],
	"37047": [
		35.317298,
		-86.835788
	],
	"37048": [
		36.491345,
		-86.595881
	],
	"37049": [
		36.557059,
		-86.673094
	],
	"37050": [
		36.374244,
		-87.630844
	],
	"37051": [
		36.304294,
		-87.410244
	],
	"37052": [
		36.378818,
		-87.401828
	],
	"37055": [
		36.077159,
		-87.442911
	],
	"37057": [
		36.418109,
		-86.029944
	],
	"37058": [
		36.444109,
		-87.876696
	],
	"37059": [
		35.984992,
		-85.90307
	],
	"37060": [
		35.745464,
		-86.63775
	],
	"37061": [
		36.287704,
		-87.635048
	],
	"37062": [
		35.990876,
		-87.135932
	],
	"37064": [
		35.884862,
		-86.954138
	],
	"37066": [
		36.398757,
		-86.45554
	],
	"37067": [
		35.91228,
		-86.780256
	],
	"37069": [
		35.987493,
		-86.903598
	],
	"37072": [
		36.35214,
		-86.746651
	],
	"37073": [
		36.432425,
		-86.816629
	],
	"37074": [
		36.426041,
		-86.1529
	],
	"37075": [
		36.339969,
		-86.607922
	],
	"37076": [
		36.145195,
		-86.576632
	],
	"37078": [
		35.910798,
		-87.746885
	],
	"37079": [
		36.464769,
		-87.648093
	],
	"37080": [
		36.332761,
		-86.916886
	],
	"37082": [
		36.094872,
		-87.115266
	],
	"37083": [
		36.535398,
		-86.011144
	],
	"37085": [
		35.954824,
		-86.280498
	],
	"37086": [
		36.022237,
		-86.559384
	],
	"37087": [
		36.263852,
		-86.269244
	],
	"37090": [
		36.11174,
		-86.299189
	],
	"37091": [
		35.489239,
		-86.767472
	],
	"37095": [
		35.964811,
		-85.959576
	],
	"37096": [
		35.612943,
		-87.87101
	],
	"37097": [
		35.779943,
		-87.823417
	],
	"37098": [
		35.872364,
		-87.319361
	],
	"37101": [
		36.060216,
		-87.629074
	],
	"37110": [
		35.64509,
		-85.741252
	],
	"37115": [
		36.253847,
		-86.69553
	],
	"37118": [
		35.93024,
		-86.190225
	],
	"37122": [
		36.178348,
		-86.48658
	],
	"37127": [
		35.781304,
		-86.327533
	],
	"37128": [
		35.78484,
		-86.487803
	],
	"37129": [
		35.932526,
		-86.442648
	],
	"37130": [
		35.881928,
		-86.318941
	],
	"37132": [
		35.849273,
		-86.364315
	],
	"37134": [
		35.992357,
		-87.948031
	],
	"37135": [
		35.915276,
		-86.67641
	],
	"37137": [
		35.884173,
		-87.505349
	],
	"37138": [
		36.244014,
		-86.609391
	],
	"37140": [
		35.859149,
		-87.652494
	],
	"37141": [
		36.614917,
		-86.701921
	],
	"37142": [
		36.410966,
		-87.509666
	],
	"37143": [
		36.127732,
		-87.031243
	],
	"37144": [
		35.305224,
		-86.660357
	],
	"37145": [
		36.380909,
		-85.917012
	],
	"37146": [
		36.402067,
		-87.032017
	],
	"37148": [
		36.566636,
		-86.495247
	],
	"37149": [
		35.804001,
		-86.192699
	],
	"37150": [
		36.541483,
		-85.81041
	],
	"37151": [
		36.309201,
		-86.04302
	],
	"37153": [
		35.763856,
		-86.554011
	],
	"37160": [
		35.455761,
		-86.484563
	],
	"37165": [
		36.292696,
		-87.470936
	],
	"37166": [
		35.917978,
		-85.786903
	],
	"37167": [
		35.959541,
		-86.53159
	],
	"37171": [
		36.361396,
		-87.295572
	],
	"37172": [
		36.532412,
		-86.862187
	],
	"37174": [
		35.719838,
		-86.898124
	],
	"37175": [
		36.32426,
		-87.892851
	],
	"37178": [
		36.323887,
		-87.790475
	],
	"37179": [
		35.811405,
		-86.924482
	],
	"37180": [
		35.606468,
		-86.586661
	],
	"37181": [
		36.244581,
		-87.469082
	],
	"37183": [
		35.494482,
		-86.303181
	],
	"37184": [
		36.082419,
		-86.144093
	],
	"37185": [
		36.064255,
		-87.857688
	],
	"37186": [
		36.596738,
		-86.221711
	],
	"37187": [
		36.144149,
		-87.197891
	],
	"37188": [
		36.480236,
		-86.681285
	],
	"37189": [
		36.298885,
		-86.834802
	],
	"37190": [
		35.816563,
		-86.021265
	],
	"37191": [
		36.500078,
		-87.529243
	],
	"37201": [
		36.165697,
		-86.777091
	],
	"37203": [
		36.149775,
		-86.789146
	],
	"37204": [
		36.106735,
		-86.774283
	],
	"37205": [
		36.113195,
		-86.870442
	],
	"37206": [
		36.179319,
		-86.731083
	],
	"37207": [
		36.233774,
		-86.775969
	],
	"37208": [
		36.177714,
		-86.808023
	],
	"37209": [
		36.1854,
		-86.94857
	],
	"37210": [
		36.149263,
		-86.732969
	],
	"37211": [
		36.067214,
		-86.723701
	],
	"37212": [
		36.133877,
		-86.801254
	],
	"37213": [
		36.166156,
		-86.767542
	],
	"37214": [
		36.162189,
		-86.670867
	],
	"37215": [
		36.081868,
		-86.834691
	],
	"37216": [
		36.21658,
		-86.726854
	],
	"37217": [
		36.108666,
		-86.656722
	],
	"37218": [
		36.164095,
		-86.889416
	],
	"37219": [
		36.166808,
		-86.783192
	],
	"37220": [
		36.068447,
		-86.793127
	],
	"37221": [
		36.051294,
		-86.968798
	],
	"37228": [
		36.19693,
		-86.803373
	],
	"37240": [
		36.144893,
		-86.805471
	],
	"37243": [
		36.165011,
		-86.782141
	],
	"37246": [
		36.159857,
		-86.791447
	],
	"37301": [
		35.416857,
		-85.794407
	],
	"37302": [
		35.008329,
		-85.019818
	],
	"37303": [
		35.442462,
		-84.640077
	],
	"37305": [
		35.46519,
		-85.694231
	],
	"37306": [
		35.096767,
		-86.191821
	],
	"37307": [
		35.174229,
		-84.621319
	],
	"37308": [
		35.342635,
		-84.993756
	],
	"37309": [
		35.301807,
		-84.741517
	],
	"37310": [
		35.252525,
		-84.710066
	],
	"37311": [
		35.113133,
		-84.928186
	],
	"37312": [
		35.232461,
		-84.879821
	],
	"37313": [
		35.357709,
		-85.7128
	],
	"37315": [
		35.048266,
		-85.05155
	],
	"37317": [
		35.031001,
		-84.443056
	],
	"37318": [
		35.177916,
		-85.99278
	],
	"37321": [
		35.502103,
		-85.008024
	],
	"37322": [
		35.501959,
		-84.82507
	],
	"37323": [
		35.096183,
		-84.816533
	],
	"37324": [
		35.239754,
		-85.987165
	],
	"37325": [
		35.251359,
		-84.591718
	],
	"37326": [
		35.040004,
		-84.384985
	],
	"37327": [
		35.437647,
		-85.415209
	],
	"37328": [
		35.036942,
		-86.357374
	],
	"37329": [
		35.394354,
		-84.461043
	],
	"37330": [
		35.279542,
		-86.130578
	],
	"37331": [
		35.319312,
		-84.529833
	],
	"37332": [
		35.598701,
		-84.971947
	],
	"37333": [
		35.153764,
		-84.335427
	],
	"37334": [
		35.166382,
		-86.581056
	],
	"37335": [
		35.068898,
		-86.403992
	],
	"37336": [
		35.308843,
		-84.931512
	],
	"37337": [
		35.787056,
		-84.850664
	],
	"37338": [
		35.429787,
		-85.209519
	],
	"37339": [
		35.379959,
		-85.63423
	],
	"37340": [
		35.034063,
		-85.517519
	],
	"37341": [
		35.224176,
		-85.073294
	],
	"37342": [
		35.391968,
		-85.948
	],
	"37343": [
		35.166669,
		-85.21228
	],
	"37345": [
		35.016807,
		-86.20302
	],
	"37347": [
		35.063468,
		-85.613418
	],
	"37348": [
		35.131615,
		-86.434051
	],
	"37350": [
		34.99392,
		-85.350184
	],
	"37351": [
		35.100285,
		-85.260363
	],
	"37352": [
		35.27752,
		-86.353027
	],
	"37353": [
		35.11501,
		-84.989096
	],
	"37354": [
		35.506329,
		-84.347385
	],
	"37355": [
		35.499787,
		-86.083833
	],
	"37356": [
		35.228878,
		-85.823694
	],
	"37357": [
		35.585288,
		-85.91734
	],
	"37359": [
		35.2042,
		-86.412877
	],
	"37360": [
		35.437596,
		-86.254339
	],
	"37361": [
		35.101471,
		-84.686645
	],
	"37362": [
		35.031281,
		-84.680851
	],
	"37363": [
		35.115688,
		-85.063804
	],
	"37365": [
		35.38253,
		-85.559742
	],
	"37366": [
		35.338856,
		-85.830003
	],
	"37367": [
		35.627262,
		-85.236162
	],
	"37369": [
		35.190807,
		-84.479592
	],
	"37370": [
		35.356625,
		-84.700173
	],
	"37373": [
		35.407459,
		-85.092816
	],
	"37374": [
		35.168804,
		-85.646536
	],
	"37375": [
		35.150468,
		-85.890399
	],
	"37376": [
		35.047765,
		-85.955825
	],
	"37377": [
		35.204919,
		-85.334972
	],
	"37379": [
		35.294758,
		-85.177356
	],
	"37380": [
		35.070937,
		-85.754605
	],
	"37381": [
		35.687217,
		-84.87701
	],
	"37385": [
		35.333158,
		-84.236984
	],
	"37387": [
		35.273286,
		-85.746581
	],
	"37388": [
		35.343672,
		-86.221295
	],
	"37391": [
		35.093228,
		-84.35394
	],
	"37394": [
		35.539396,
		-85.860045
	],
	"37396": [
		35.005799,
		-85.499729
	],
	"37397": [
		35.22556,
		-85.514664
	],
	"37398": [
		35.181209,
		-86.138387
	],
	"37402": [
		35.043722,
		-85.317871
	],
	"37403": [
		35.048259,
		-85.294362
	],
	"37404": [
		35.027911,
		-85.273662
	],
	"37405": [
		35.120403,
		-85.407828
	],
	"37406": [
		35.073134,
		-85.245571
	],
	"37407": [
		35.001943,
		-85.289724
	],
	"37408": [
		35.028634,
		-85.308554
	],
	"37409": [
		35.013749,
		-85.335346
	],
	"37410": [
		35.001899,
		-85.31422
	],
	"37411": [
		35.028764,
		-85.226165
	],
	"37412": [
		34.997526,
		-85.22743
	],
	"37415": [
		35.124725,
		-85.281199
	],
	"37416": [
		35.0976,
		-85.180301
	],
	"37419": [
		35.039708,
		-85.404109
	],
	"37421": [
		35.030496,
		-85.14578
	],
	"37601": [
		36.33825,
		-82.318084
	],
	"37604": [
		36.299587,
		-82.383194
	],
	"37614": [
		36.301387,
		-82.371242
	],
	"37615": [
		36.402425,
		-82.45718
	],
	"37616": [
		36.228473,
		-82.746798
	],
	"37617": [
		36.524578,
		-82.365576
	],
	"37618": [
		36.460339,
		-82.208744
	],
	"37620": [
		36.549613,
		-82.09404
	],
	"37640": [
		36.326824,
		-81.974686
	],
	"37641": [
		36.196373,
		-82.667344
	],
	"37642": [
		36.530987,
		-82.7268
	],
	"37643": [
		36.377345,
		-82.137118
	],
	"37645": [
		36.562152,
		-82.662199
	],
	"37650": [
		36.094488,
		-82.448079
	],
	"37656": [
		36.398802,
		-82.629857
	],
	"37657": [
		36.01758,
		-82.560128
	],
	"37658": [
		36.239034,
		-82.099448
	],
	"37659": [
		36.28021,
		-82.491063
	],
	"37660": [
		36.52686,
		-82.571968
	],
	"37663": [
		36.463012,
		-82.488726
	],
	"37664": [
		36.520428,
		-82.498988
	],
	"37665": [
		36.578779,
		-82.570554
	],
	"37680": [
		36.57929,
		-81.725417
	],
	"37681": [
		36.258014,
		-82.6206
	],
	"37682": [
		36.300986,
		-82.290892
	],
	"37683": [
		36.454726,
		-81.822075
	],
	"37686": [
		36.440209,
		-82.348811
	],
	"37687": [
		36.178723,
		-82.097005
	],
	"37688": [
		36.545442,
		-81.882882
	],
	"37690": [
		36.25012,
		-82.557584
	],
	"37691": [
		36.371676,
		-81.756726
	],
	"37692": [
		36.189856,
		-82.300857
	],
	"37694": [
		36.383788,
		-82.278722
	],
	"37701": [
		35.791709,
		-83.987225
	],
	"37705": [
		36.226872,
		-84.00972
	],
	"37708": [
		36.330556,
		-83.316869
	],
	"37709": [
		36.162997,
		-83.664552
	],
	"37710": [
		36.158632,
		-84.316134
	],
	"37711": [
		36.281355,
		-83.045426
	],
	"37713": [
		36.081454,
		-83.134295
	],
	"37714": [
		36.260336,
		-84.292968
	],
	"37715": [
		36.554225,
		-83.960518
	],
	"37716": [
		36.100883,
		-84.168691
	],
	"37719": [
		36.022415,
		-84.429381
	],
	"37721": [
		36.11842,
		-83.812584
	],
	"37722": [
		35.814831,
		-83.202702
	],
	"37723": [
		35.97043,
		-84.813656
	],
	"37724": [
		36.548535,
		-83.710257
	],
	"37725": [
		35.996089,
		-83.399118
	],
	"37726": [
		36.204182,
		-84.830473
	],
	"37727": [
		35.885101,
		-83.022989
	],
	"37729": [
		36.516651,
		-84.034443
	],
	"37730": [
		36.547348,
		-83.975538
	],
	"37731": [
		36.548667,
		-83.009063
	],
	"37732": [
		36.327039,
		-84.606364
	],
	"37733": [
		36.354076,
		-84.711232
	],
	"37737": [
		35.761367,
		-84.120426
	],
	"37738": [
		35.670232,
		-83.474908
	],
	"37742": [
		35.675844,
		-84.179246
	],
	"37743": [
		36.068721,
		-82.856467
	],
	"37745": [
		36.278036,
		-82.820587
	],
	"37748": [
		35.945607,
		-84.516324
	],
	"37752": [
		36.560697,
		-83.538079
	],
	"37753": [
		35.823135,
		-83.100397
	],
	"37754": [
		36.139099,
		-84.029801
	],
	"37755": [
		36.402394,
		-84.526705
	],
	"37756": [
		36.304566,
		-84.419801
	],
	"37757": [
		36.299009,
		-84.137299
	],
	"37760": [
		36.108387,
		-83.457779
	],
	"37762": [
		36.577304,
		-84.12617
	],
	"37763": [
		35.82023,
		-84.492265
	],
	"37764": [
		35.970376,
		-83.616621
	],
	"37765": [
		36.572344,
		-83.058614
	],
	"37766": [
		36.399701,
		-84.080824
	],
	"37769": [
		36.218671,
		-84.153543
	],
	"37770": [
		36.153311,
		-84.663293
	],
	"37771": [
		35.840726,
		-84.321728
	],
	"37772": [
		35.79114,
		-84.218553
	],
	"37774": [
		35.72913,
		-84.358961
	],
	"37777": [
		35.826849,
		-84.054192
	],
	"37779": [
		36.215139,
		-83.756079
	],
	"37801": [
		35.66392,
		-84.094594
	],
	"37803": [
		35.660842,
		-83.981389
	],
	"37804": [
		35.792055,
		-83.893164
	],
	"37806": [
		36.084693,
		-83.727986
	],
	"37807": [
		36.259656,
		-83.82599
	],
	"37809": [
		36.156693,
		-83.038092
	],
	"37810": [
		36.184525,
		-83.11549
	],
	"37811": [
		36.356119,
		-83.210715
	],
	"37813": [
		36.175136,
		-83.257024
	],
	"37814": [
		36.233317,
		-83.337823
	],
	"37818": [
		36.188793,
		-82.971098
	],
	"37819": [
		36.568255,
		-84.205753
	],
	"37820": [
		36.085171,
		-83.566057
	],
	"37821": [
		35.97517,
		-83.195566
	],
	"37825": [
		36.412427,
		-83.695838
	],
	"37826": [
		35.558276,
		-84.589665
	],
	"37828": [
		36.197924,
		-84.06901
	],
	"37829": [
		36.010201,
		-84.637685
	],
	"37830": [
		35.966483,
		-84.290549
	],
	"37840": [
		36.070308,
		-84.40931
	],
	"37841": [
		36.515751,
		-84.570647
	],
	"37843": [
		36.010713,
		-83.04836
	],
	"37845": [
		36.093372,
		-84.439498
	],
	"37846": [
		35.679251,
		-84.481817
	],
	"37847": [
		36.434173,
		-84.27895
	],
	"37848": [
		36.235726,
		-83.680116
	],
	"37849": [
		36.054314,
		-84.046043
	],
	"37851": [
		36.584059,
		-83.907579
	],
	"37852": [
		36.324146,
		-84.579513
	],
	"37853": [
		35.836719,
		-83.910713
	],
	"37854": [
		35.880918,
		-84.720011
	],
	"37857": [
		36.424289,
		-82.9414
	],
	"37860": [
		36.250455,
		-83.183736
	],
	"37861": [
		36.240743,
		-83.513713
	],
	"37862": [
		35.778008,
		-83.612572
	],
	"37863": [
		35.78596,
		-83.562211
	],
	"37865": [
		35.851094,
		-83.734853
	],
	"37866": [
		36.342062,
		-83.856572
	],
	"37869": [
		36.514755,
		-83.244996
	],
	"37870": [
		36.462895,
		-83.833801
	],
	"37871": [
		36.052076,
		-83.681001
	],
	"37872": [
		36.269532,
		-84.649496
	],
	"37873": [
		36.52627,
		-82.843047
	],
	"37874": [
		35.59833,
		-84.456484
	],
	"37876": [
		35.865101,
		-83.47897
	],
	"37877": [
		36.15113,
		-83.406846
	],
	"37878": [
		35.620642,
		-83.894011
	],
	"37879": [
		36.473294,
		-83.513649
	],
	"37880": [
		35.685695,
		-84.677934
	],
	"37881": [
		36.406476,
		-83.342508
	],
	"37882": [
		35.601221,
		-83.813069
	],
	"37885": [
		35.476426,
		-84.132339
	],
	"37886": [
		35.745588,
		-83.804718
	],
	"37887": [
		36.091638,
		-84.580889
	],
	"37888": [
		36.310172,
		-83.608265
	],
	"37890": [
		36.085274,
		-83.29873
	],
	"37891": [
		36.292068,
		-83.138109
	],
	"37892": [
		36.555696,
		-84.357644
	],
	"37902": [
		35.963643,
		-83.92061
	],
	"37909": [
		35.947567,
		-84.021418
	],
	"37912": [
		36.007549,
		-83.984876
	],
	"37914": [
		35.983165,
		-83.795796
	],
	"37915": [
		35.970813,
		-83.900432
	],
	"37916": [
		35.95273,
		-83.934186
	],
	"37917": [
		36.001185,
		-83.913706
	],
	"37918": [
		36.056171,
		-83.916841
	],
	"37919": [
		35.914748,
		-84.000169
	],
	"37920": [
		35.908783,
		-83.869205
	],
	"37921": [
		35.979767,
		-84.002156
	],
	"37922": [
		35.860496,
		-84.100535
	],
	"37923": [
		35.926395,
		-84.079528
	],
	"37924": [
		36.030261,
		-83.79877
	],
	"37931": [
		35.976144,
		-84.129965
	],
	"37932": [
		35.917299,
		-84.198787
	],
	"37934": [
		35.856771,
		-84.176643
	],
	"37938": [
		36.123918,
		-83.938623
	],
	"38001": [
		35.81629,
		-89.159971
	],
	"38002": [
		35.286355,
		-89.700274
	],
	"38004": [
		35.4116,
		-89.75961
	],
	"38006": [
		35.693723,
		-89.089657
	],
	"38007": [
		36.159498,
		-89.427052
	],
	"38008": [
		35.246459,
		-88.99718
	],
	"38011": [
		35.462176,
		-89.711687
	],
	"38012": [
		35.610611,
		-89.273232
	],
	"38015": [
		35.556935,
		-89.823415
	],
	"38016": [
		35.18086,
		-89.759838
	],
	"38017": [
		35.066971,
		-89.648939
	],
	"38018": [
		35.138613,
		-89.766424
	],
	"38019": [
		35.562373,
		-89.628878
	],
	"38021": [
		35.875848,
		-89.16475
	],
	"38023": [
		35.457109,
		-89.93833
	],
	"38024": [
		36.035542,
		-89.380814
	],
	"38028": [
		35.183099,
		-89.6322
	],
	"38029": [
		35.238741,
		-89.821895
	],
	"38030": [
		36.016378,
		-89.586052
	],
	"38034": [
		35.911414,
		-89.236962
	],
	"38036": [
		35.32022,
		-89.625825
	],
	"38037": [
		35.797359,
		-89.398895
	],
	"38039": [
		35.070591,
		-89.155715
	],
	"38040": [
		35.89239,
		-89.444872
	],
	"38041": [
		35.659289,
		-89.704618
	],
	"38042": [
		35.145159,
		-89.137403
	],
	"38044": [
		35.199316,
		-88.809933
	],
	"38046": [
		35.069904,
		-89.247931
	],
	"38047": [
		36.09053,
		-89.503405
	],
	"38049": [
		35.390333,
		-89.53821
	],
	"38050": [
		35.829629,
		-89.23307
	],
	"38052": [
		35.090254,
		-88.917801
	],
	"38053": [
		35.346626,
		-89.951498
	],
	"38054": [
		35.336356,
		-89.873398
	],
	"38057": [
		35.052974,
		-89.368397
	],
	"38058": [
		35.458093,
		-89.816297
	],
	"38059": [
		36.105685,
		-89.248757
	],
	"38060": [
		35.209347,
		-89.505468
	],
	"38061": [
		35.06839,
		-88.770907
	],
	"38063": [
		35.764057,
		-89.640503
	],
	"38066": [
		35.073387,
		-89.505031
	],
	"38067": [
		35.081609,
		-89.041788
	],
	"38068": [
		35.265556,
		-89.34517
	],
	"38069": [
		35.477856,
		-89.330284
	],
	"38070": [
		35.94356,
		-89.23701
	],
	"38075": [
		35.379076,
		-89.136127
	],
	"38076": [
		35.138706,
		-89.442078
	],
	"38077": [
		36.328075,
		-89.474394
	],
	"38079": [
		36.427748,
		-89.462502
	],
	"38080": [
		36.207086,
		-89.519208
	],
	"38103": [
		35.15305,
		-90.054979
	],
	"38104": [
		35.132549,
		-90.003728
	],
	"38105": [
		35.151419,
		-90.035468
	],
	"38106": [
		35.102064,
		-90.094687
	],
	"38107": [
		35.170165,
		-90.023442
	],
	"38108": [
		35.176666,
		-89.967917
	],
	"38109": [
		35.037886,
		-90.154242
	],
	"38111": [
		35.110521,
		-89.943501
	],
	"38112": [
		35.147662,
		-89.976392
	],
	"38114": [
		35.09648,
		-89.985854
	],
	"38115": [
		35.053175,
		-89.862635
	],
	"38116": [
		35.033181,
		-90.011396
	],
	"38117": [
		35.11518,
		-89.905344
	],
	"38118": [
		35.032631,
		-89.932532
	],
	"38119": [
		35.079511,
		-89.845385
	],
	"38120": [
		35.123633,
		-89.852645
	],
	"38122": [
		35.158933,
		-89.921214
	],
	"38125": [
		35.025913,
		-89.788637
	],
	"38126": [
		35.126968,
		-90.043659
	],
	"38127": [
		35.242751,
		-90.02679
	],
	"38128": [
		35.224574,
		-89.926689
	],
	"38131": [
		35.066359,
		-89.992094
	],
	"38132": [
		35.073171,
		-89.99483
	],
	"38133": [
		35.212885,
		-89.794298
	],
	"38134": [
		35.174957,
		-89.859879
	],
	"38135": [
		35.238915,
		-89.848589
	],
	"38138": [
		35.084828,
		-89.799332
	],
	"38139": [
		35.082886,
		-89.754836
	],
	"38141": [
		35.01365,
		-89.856938
	],
	"38152": [
		35.123648,
		-89.93139
	],
	"38201": [
		36.123507,
		-88.530333
	],
	"38220": [
		35.993575,
		-88.670909
	],
	"38221": [
		36.244754,
		-88.03501
	],
	"38222": [
		36.445536,
		-88.157903
	],
	"38224": [
		36.387017,
		-88.492197
	],
	"38225": [
		36.31885,
		-88.67074
	],
	"38226": [
		36.484448,
		-88.701518
	],
	"38229": [
		36.22313,
		-88.606426
	],
	"38230": [
		36.15523,
		-88.775865
	],
	"38231": [
		36.213058,
		-88.426137
	],
	"38232": [
		36.359026,
		-89.324185
	],
	"38233": [
		36.203444,
		-89.04908
	],
	"38235": [
		35.989374,
		-88.563893
	],
	"38236": [
		36.168109,
		-88.268062
	],
	"38237": [
		36.358391,
		-88.837992
	],
	"38240": [
		36.245091,
		-89.318119
	],
	"38241": [
		36.427772,
		-88.591844
	],
	"38242": [
		36.305579,
		-88.33112
	],
	"38251": [
		36.459872,
		-88.355856
	],
	"38253": [
		36.264479,
		-88.993346
	],
	"38254": [
		36.374904,
		-89.347404
	],
	"38255": [
		36.240718,
		-88.85913
	],
	"38256": [
		36.308521,
		-88.131502
	],
	"38257": [
		36.456709,
		-88.876526
	],
	"38258": [
		36.032792,
		-88.619287
	],
	"38259": [
		36.199152,
		-89.183658
	],
	"38260": [
		36.360777,
		-89.200363
	],
	"38261": [
		36.42886,
		-89.113506
	],
	"38301": [
		35.588164,
		-88.853395
	],
	"38305": [
		35.701654,
		-88.768058
	],
	"38310": [
		35.261666,
		-88.40857
	],
	"38311": [
		35.437098,
		-88.104204
	],
	"38313": [
		35.610339,
		-88.619827
	],
	"38315": [
		35.268316,
		-88.615654
	],
	"38316": [
		36.065982,
		-88.817584
	],
	"38317": [
		36.057937,
		-88.26381
	],
	"38318": [
		35.947414,
		-88.242002
	],
	"38320": [
		36.051656,
		-88.1126
	],
	"38321": [
		35.845504,
		-88.532266
	],
	"38326": [
		35.05466,
		-88.286193
	],
	"38327": [
		35.22441,
		-88.308574
	],
	"38328": [
		35.680535,
		-88.215686
	],
	"38329": [
		35.537576,
		-88.10779
	],
	"38330": [
		36.070503,
		-89.034414
	],
	"38332": [
		35.419091,
		-88.426456
	],
	"38333": [
		36.128104,
		-87.95446
	],
	"38334": [
		35.361284,
		-88.571718
	],
	"38337": [
		35.785275,
		-89.014026
	],
	"38339": [
		35.052272,
		-88.515023
	],
	"38340": [
		35.401322,
		-88.68325
	],
	"38341": [
		35.877577,
		-88.083895
	],
	"38342": [
		36.07174,
		-88.288871
	],
	"38343": [
		35.827399,
		-88.926409
	],
	"38344": [
		35.978164,
		-88.424138
	],
	"38345": [
		35.597455,
		-88.506055
	],
	"38347": [
		35.477766,
		-88.4986
	],
	"38348": [
		35.872744,
		-88.650963
	],
	"38351": [
		35.671109,
		-88.399952
	],
	"38352": [
		35.529461,
		-88.533849
	],
	"38355": [
		35.784009,
		-88.775061
	],
	"38356": [
		35.438397,
		-88.893792
	],
	"38357": [
		35.044826,
		-88.415338
	],
	"38358": [
		35.916675,
		-88.758664
	],
	"38359": [
		35.369853,
		-88.351362
	],
	"38361": [
		35.311301,
		-88.299924
	],
	"38362": [
		35.729072,
		-88.782978
	],
	"38363": [
		35.687843,
		-88.110764
	],
	"38365": [
		35.05425,
		-88.232127
	],
	"38366": [
		35.479,
		-88.741273
	],
	"38367": [
		35.053048,
		-88.623242
	],
	"38368": [
		35.510913,
		-88.348129
	],
	"38369": [
		36.131922,
		-88.942666
	],
	"38370": [
		35.383879,
		-88.245206
	],
	"38371": [
		35.424293,
		-88.295085
	],
	"38372": [
		35.143564,
		-88.156874
	],
	"38374": [
		35.50561,
		-88.230904
	],
	"38375": [
		35.157812,
		-88.591697
	],
	"38376": [
		35.099209,
		-88.368705
	],
	"38379": [
		35.164244,
		-88.433753
	],
	"38380": [
		35.780087,
		-88.038992
	],
	"38381": [
		35.357199,
		-88.971359
	],
	"38382": [
		35.968463,
		-88.984393
	],
	"38387": [
		35.87292,
		-88.277462
	],
	"38388": [
		35.78157,
		-88.319968
	],
	"38390": [
		35.840546,
		-88.372294
	],
	"38391": [
		35.546571,
		-88.992177
	],
	"38392": [
		35.456728,
		-89.044845
	],
	"38401": [
		35.629164,
		-87.021526
	],
	"38425": [
		35.412153,
		-87.942934
	],
	"38449": [
		35.040468,
		-86.818212
	],
	"38450": [
		35.183619,
		-87.792775
	],
	"38451": [
		35.460534,
		-86.992239
	],
	"38452": [
		35.080356,
		-87.796306
	],
	"38453": [
		35.12136,
		-86.812108
	],
	"38454": [
		35.728171,
		-87.345316
	],
	"38455": [
		35.043543,
		-86.885707
	],
	"38456": [
		35.335476,
		-87.266379
	],
	"38457": [
		35.029325,
		-87.284446
	],
	"38459": [
		35.194281,
		-86.80545
	],
	"38460": [
		35.088664,
		-87.153186
	],
	"38461": [
		35.593001,
		-87.341971
	],
	"38462": [
		35.528171,
		-87.562943
	],
	"38463": [
		35.070595,
		-87.645115
	],
	"38464": [
		35.289918,
		-87.433746
	],
	"38468": [
		35.135146,
		-87.291063
	],
	"38469": [
		35.074665,
		-87.428629
	],
	"38471": [
		35.083901,
		-87.932397
	],
	"38472": [
		35.377585,
		-87.038554
	],
	"38473": [
		35.021246,
		-87.171674
	],
	"38474": [
		35.517968,
		-87.226224
	],
	"38475": [
		35.253475,
		-88.016092
	],
	"38476": [
		35.841197,
		-87.213756
	],
	"38477": [
		35.064974,
		-86.993085
	],
	"38478": [
		35.232879,
		-87.005872
	],
	"38481": [
		35.031246,
		-87.492311
	],
	"38482": [
		35.768825,
		-87.149896
	],
	"38483": [
		35.440765,
		-87.333659
	],
	"38485": [
		35.356561,
		-87.782212
	],
	"38486": [
		35.170567,
		-87.545112
	],
	"38487": [
		35.718406,
		-87.233466
	],
	"38488": [
		35.042917,
		-86.663495
	],
	"38501": [
		36.226045,
		-85.533285
	],
	"38504": [
		36.395555,
		-84.724677
	],
	"38505": [
		36.175064,
		-85.505075
	],
	"38506": [
		36.187095,
		-85.433326
	],
	"38541": [
		36.538018,
		-85.335604
	],
	"38542": [
		36.317132,
		-85.202215
	],
	"38543": [
		36.350088,
		-85.150003
	],
	"38544": [
		36.123588,
		-85.663143
	],
	"38545": [
		36.232094,
		-85.662826
	],
	"38547": [
		36.157254,
		-86.007905
	],
	"38548": [
		36.164152,
		-85.790513
	],
	"38549": [
		36.56213,
		-85.149064
	],
	"38551": [
		36.55805,
		-85.487178
	],
	"38552": [
		36.217685,
		-85.813769
	],
	"38553": [
		36.201867,
		-85.006319
	],
	"38554": [
		36.24949,
		-85.161655
	],
	"38555": [
		35.887881,
		-84.989016
	],
	"38556": [
		36.406761,
		-84.918949
	],
	"38558": [
		36.009882,
		-84.866567
	],
	"38559": [
		35.808437,
		-85.508014
	],
	"38560": [
		36.221926,
		-85.855639
	],
	"38562": [
		36.354002,
		-85.657669
	],
	"38563": [
		36.214193,
		-86.023413
	],
	"38564": [
		36.275933,
		-85.735915
	],
	"38565": [
		36.262749,
		-85.009462
	],
	"38567": [
		36.132827,
		-85.925669
	],
	"38568": [
		36.438492,
		-85.473057
	],
	"38569": [
		36.092341,
		-85.863129
	],
	"38570": [
		36.376276,
		-85.326452
	],
	"38571": [
		36.051604,
		-85.012804
	],
	"38572": [
		35.849059,
		-85.12896
	],
	"38573": [
		36.493416,
		-85.223882
	],
	"38574": [
		36.143643,
		-85.229289
	],
	"38575": [
		36.553225,
		-85.629502
	],
	"38577": [
		36.565958,
		-84.972516
	],
	"38578": [
		35.981795,
		-85.198328
	],
	"38579": [
		35.835867,
		-85.548177
	],
	"38580": [
		36.290013,
		-85.299934
	],
	"38581": [
		35.74104,
		-85.620827
	],
	"38582": [
		36.099444,
		-85.764549
	],
	"38583": [
		35.94454,
		-85.442214
	],
	"38585": [
		35.618527,
		-85.485795
	],
	"38587": [
		35.864761,
		-85.613998
	],
	"38588": [
		36.446386,
		-85.730671
	],
	"38589": [
		36.285583,
		-85.077112
	],
	"38601": [
		34.492325,
		-89.443056
	],
	"38603": [
		34.84841,
		-89.14226
	],
	"38606": [
		34.303262,
		-89.952316
	],
	"38610": [
		34.651787,
		-89.025549
	],
	"38611": [
		34.856233,
		-89.67602
	],
	"38614": [
		34.157044,
		-90.597737
	],
	"38617": [
		34.351492,
		-90.522013
	],
	"38618": [
		34.716284,
		-89.93785
	],
	"38619": [
		34.518142,
		-89.835541
	],
	"38620": [
		34.230138,
		-89.90251
	],
	"38621": [
		34.447192,
		-90.170459
	],
	"38622": [
		34.171912,
		-90.138492
	],
	"38623": [
		34.367662,
		-90.282849
	],
	"38625": [
		34.612136,
		-88.826435
	],
	"38626": [
		34.517362,
		-90.414527
	],
	"38627": [
		34.41783,
		-89.207944
	],
	"38629": [
		34.862808,
		-89.009788
	],
	"38630": [
		34.278839,
		-90.685609
	],
	"38631": [
		34.360976,
		-90.619981
	],
	"38632": [
		34.795914,
		-90.015068
	],
	"38633": [
		34.647337,
		-89.194971
	],
	"38635": [
		34.766909,
		-89.486327
	],
	"38637": [
		34.952081,
		-90.049209
	],
	"38639": [
		34.303055,
		-90.43194
	],
	"38641": [
		34.911876,
		-90.191356
	],
	"38642": [
		34.928904,
		-89.334667
	],
	"38643": [
		34.148487,
		-90.260865
	],
	"38644": [
		34.460809,
		-90.49353
	],
	"38645": [
		34.247849,
		-90.47642
	],
	"38646": [
		34.289637,
		-90.314386
	],
	"38647": [
		34.963506,
		-89.224108
	],
	"38650": [
		34.528102,
		-89.145451
	],
	"38651": [
		34.893416,
		-90.002219
	],
	"38652": [
		34.483075,
		-88.996667
	],
	"38654": [
		34.933929,
		-89.81628
	],
	"38655": [
		34.333217,
		-89.473309
	],
	"38658": [
		34.188334,
		-89.901012
	],
	"38659": [
		34.621505,
		-89.331511
	],
	"38661": [
		34.896991,
		-89.561056
	],
	"38663": [
		34.734051,
		-88.882216
	],
	"38664": [
		34.811462,
		-90.329253
	],
	"38665": [
		34.583273,
		-90.166012
	],
	"38666": [
		34.425884,
		-89.920273
	],
	"38668": [
		34.590668,
		-89.917818
	],
	"38670": [
		34.416895,
		-90.288714
	],
	"38671": [
		34.96626,
		-89.998152
	],
	"38672": [
		34.9114,
		-89.927894
	],
	"38673": [
		34.293443,
		-89.635806
	],
	"38674": [
		34.86837,
		-88.892398
	],
	"38676": [
		34.66645,
		-90.383731
	],
	"38677": [
		34.365411,
		-89.53718
	],
	"38680": [
		34.951674,
		-90.146147
	],
	"38683": [
		34.93491,
		-88.867314
	],
	"38685": [
		34.59305,
		-89.488478
	],
	"38701": [
		33.310738,
		-91.044262
	],
	"38702": [
		33.535666,
		-91.180051
	],
	"38703": [
		33.475662,
		-91.052834
	],
	"38704": [
		33.007175,
		-91.021252
	],
	"38720": [
		34.108397,
		-90.788009
	],
	"38721": [
		32.989634,
		-90.746359
	],
	"38722": [
		33.260304,
		-90.883939
	],
	"38723": [
		33.229662,
		-91.038367
	],
	"38725": [
		33.648757,
		-91.030947
	],
	"38726": [
		33.755796,
		-90.988708
	],
	"38730": [
		33.682859,
		-90.790778
	],
	"38731": [
		33.0666,
		-91.046742
	],
	"38732": [
		33.758855,
		-90.725595
	],
	"38736": [
		33.64279,
		-90.537368
	],
	"38737": [
		33.863521,
		-90.524172
	],
	"38738": [
		33.945099,
		-90.533141
	],
	"38740": [
		34.057678,
		-90.79876
	],
	"38744": [
		33.014154,
		-91.037148
	],
	"38745": [
		32.972278,
		-90.992816
	],
	"38746": [
		33.961973,
		-90.909267
	],
	"38748": [
		33.151196,
		-90.902048
	],
	"38749": [
		33.447423,
		-90.752367
	],
	"38751": [
		33.44553,
		-90.686995
	],
	"38753": [
		33.347339,
		-90.576284
	],
	"38754": [
		33.249944,
		-90.622535
	],
	"38756": [
		33.389797,
		-90.860225
	],
	"38759": [
		33.825158,
		-90.730327
	],
	"38760": [
		33.458034,
		-90.989273
	],
	"38761": [
		33.430152,
		-90.484464
	],
	"38762": [
		33.89594,
		-90.716631
	],
	"38764": [
		33.780114,
		-90.866202
	],
	"38765": [
		33.069113,
		-90.874611
	],
	"38767": [
		34.140502,
		-90.784721
	],
	"38768": [
		33.975737,
		-90.49977
	],
	"38769": [
		33.864775,
		-90.985297
	],
	"38771": [
		33.739965,
		-90.528989
	],
	"38772": [
		33.559244,
		-91.052351
	],
	"38773": [
		33.607259,
		-90.776876
	],
	"38774": [
		33.960037,
		-90.76286
	],
	"38778": [
		33.547117,
		-90.531332
	],
	"38781": [
		33.908553,
		-90.756588
	],
	"38801": [
		34.222629,
		-88.774588
	],
	"38804": [
		34.281378,
		-88.672873
	],
	"38821": [
		33.977521,
		-88.436749
	],
	"38824": [
		34.520784,
		-88.643025
	],
	"38826": [
		34.301247,
		-88.841482
	],
	"38827": [
		34.51691,
		-88.177452
	],
	"38828": [
		34.429858,
		-88.86919
	],
	"38829": [
		34.650609,
		-88.527209
	],
	"38833": [
		34.918147,
		-88.319035
	],
	"38834": [
		34.917111,
		-88.571777
	],
	"38838": [
		34.546433,
		-88.255741
	],
	"38841": [
		34.352581,
		-89.015298
	],
	"38843": [
		34.262054,
		-88.376344
	],
	"38844": [
		33.838614,
		-88.255262
	],
	"38846": [
		34.85172,
		-88.385389
	],
	"38847": [
		34.41254,
		-88.23296
	],
	"38848": [
		33.937645,
		-88.271066
	],
	"38849": [
		34.460959,
		-88.696052
	],
	"38850": [
		34.058891,
		-89.057937
	],
	"38851": [
		33.9105,
		-88.968194
	],
	"38852": [
		34.843688,
		-88.213248
	],
	"38855": [
		34.323342,
		-88.485408
	],
	"38856": [
		34.467115,
		-88.455149
	],
	"38857": [
		34.281521,
		-88.574989
	],
	"38858": [
		34.099952,
		-88.549476
	],
	"38859": [
		34.514877,
		-88.375117
	],
	"38860": [
		33.971749,
		-88.761409
	],
	"38862": [
		34.168139,
		-88.623239
	],
	"38863": [
		34.217915,
		-89.019053
	],
	"38864": [
		34.157283,
		-89.207666
	],
	"38865": [
		34.788031,
		-88.595406
	],
	"38866": [
		34.36762,
		-88.680078
	],
	"38868": [
		34.123549,
		-88.762644
	],
	"38869": [
		34.357456,
		-88.835132
	],
	"38870": [
		34.067434,
		-88.336282
	],
	"38871": [
		34.381713,
		-89.247255
	],
	"38873": [
		34.659698,
		-88.242903
	],
	"38876": [
		34.21359,
		-88.230292
	],
	"38878": [
		33.904511,
		-89.187449
	],
	"38879": [
		34.184616,
		-88.718163
	],
	"38901": [
		33.762528,
		-89.802915
	],
	"38913": [
		34.138881,
		-89.384872
	],
	"38914": [
		33.846213,
		-89.416592
	],
	"38915": [
		34.03764,
		-89.388855
	],
	"38916": [
		33.816534,
		-89.35274
	],
	"38917": [
		33.55784,
		-90.008168
	],
	"38920": [
		33.910061,
		-89.995338
	],
	"38921": [
		33.982154,
		-90.144181
	],
	"38922": [
		33.932695,
		-89.649202
	],
	"38923": [
		33.388567,
		-89.988589
	],
	"38924": [
		33.29149,
		-90.224611
	],
	"38925": [
		33.62603,
		-89.634279
	],
	"38927": [
		34.142879,
		-90.026843
	],
	"38928": [
		33.869471,
		-90.291749
	],
	"38929": [
		33.73946,
		-89.531313
	],
	"38930": [
		33.538034,
		-90.154409
	],
	"38940": [
		33.744195,
		-90.056814
	],
	"38941": [
		33.484573,
		-90.358231
	],
	"38943": [
		33.539901,
		-89.845569
	],
	"38944": [
		33.765008,
		-90.341539
	],
	"38945": [
		33.600948,
		-90.168029
	],
	"38946": [
		33.364004,
		-90.378549
	],
	"38947": [
		33.533842,
		-89.898549
	],
	"38948": [
		34.067711,
		-89.882122
	],
	"38949": [
		34.191573,
		-89.425419
	],
	"38950": [
		33.733058,
		-90.200045
	],
	"38951": [
		33.973783,
		-89.29049
	],
	"38952": [
		33.628122,
		-90.344867
	],
	"38953": [
		33.930672,
		-89.933405
	],
	"38954": [
		33.41541,
		-90.212157
	],
	"38957": [
		33.991776,
		-90.350322
	],
	"38958": [
		33.303673,
		-90.428149
	],
	"38961": [
		33.954527,
		-89.914974
	],
	"38962": [
		33.871721,
		-90.185145
	],
	"38963": [
		34.024854,
		-90.393065
	],
	"38964": [
		34.09906,
		-90.398491
	],
	"38965": [
		34.135546,
		-89.601746
	],
	"38966": [
		33.947038,
		-90.319159
	],
	"38967": [
		33.457399,
		-89.732453
	],
	"39038": [
		33.18606,
		-90.484577
	],
	"39039": [
		32.81655,
		-90.217495
	],
	"39040": [
		32.629706,
		-90.417476
	],
	"39041": [
		32.404803,
		-90.468865
	],
	"39042": [
		32.1975,
		-89.895011
	],
	"39044": [
		32.029303,
		-89.974668
	],
	"39045": [
		32.819535,
		-89.784552
	],
	"39046": [
		32.632163,
		-89.983933
	],
	"39047": [
		32.420973,
		-89.945744
	],
	"39051": [
		32.778076,
		-89.490169
	],
	"39054": [
		32.774344,
		-90.939277
	],
	"39056": [
		32.373751,
		-90.350864
	],
	"39057": [
		32.490854,
		-89.284427
	],
	"39059": [
		31.982459,
		-90.355783
	],
	"39061": [
		33.086397,
		-90.820582
	],
	"39062": [
		31.985095,
		-89.898309
	],
	"39063": [
		33.116674,
		-89.897489
	],
	"39066": [
		32.296627,
		-90.606153
	],
	"39067": [
		33.110083,
		-89.443782
	],
	"39069": [
		31.68616,
		-91.043249
	],
	"39071": [
		32.556371,
		-90.318383
	],
	"39073": [
		32.102431,
		-90.135817
	],
	"39074": [
		32.393704,
		-89.478007
	],
	"39078": [
		31.878048,
		-90.188204
	],
	"39079": [
		32.935327,
		-89.89855
	],
	"39082": [
		31.941844,
		-90.120075
	],
	"39083": [
		31.844615,
		-90.477306
	],
	"39086": [
		31.949428,
		-90.76663
	],
	"39088": [
		32.754644,
		-90.703709
	],
	"39090": [
		33.002016,
		-89.543898
	],
	"39092": [
		32.319548,
		-89.362401
	],
	"39094": [
		32.58625,
		-89.663156
	],
	"39095": [
		33.129605,
		-90.087121
	],
	"39096": [
		31.817636,
		-91.120698
	],
	"39097": [
		32.989067,
		-90.607666
	],
	"39108": [
		33.149349,
		-89.338532
	],
	"39110": [
		32.504199,
		-90.147242
	],
	"39111": [
		31.896635,
		-89.718092
	],
	"39113": [
		32.913834,
		-91.017222
	],
	"39114": [
		31.951836,
		-89.824587
	],
	"39115": [
		33.044863,
		-90.566898
	],
	"39116": [
		31.896441,
		-89.538254
	],
	"39117": [
		32.296241,
		-89.656952
	],
	"39119": [
		31.751549,
		-89.670777
	],
	"39120": [
		31.508792,
		-91.357418
	],
	"39140": [
		31.749259,
		-90.020236
	],
	"39144": [
		31.821262,
		-90.792159
	],
	"39145": [
		32.344663,
		-89.794359
	],
	"39146": [
		32.875897,
		-89.99491
	],
	"39149": [
		31.831965,
		-90.010649
	],
	"39150": [
		32.004742,
		-90.976048
	],
	"39152": [
		32.207475,
		-89.585474
	],
	"39153": [
		32.045133,
		-89.490046
	],
	"39154": [
		32.225111,
		-90.444671
	],
	"39156": [
		32.547816,
		-90.776742
	],
	"39157": [
		32.425874,
		-90.169852
	],
	"39159": [
		32.826566,
		-90.935377
	],
	"39160": [
		32.992412,
		-89.7648
	],
	"39162": [
		32.618799,
		-90.624417
	],
	"39166": [
		33.04082,
		-90.481639
	],
	"39167": [
		32.094163,
		-90.041201
	],
	"39168": [
		31.831878,
		-89.411823
	],
	"39169": [
		33.215516,
		-90.245118
	],
	"39170": [
		32.111772,
		-90.330654
	],
	"39174": [
		32.401478,
		-90.159514
	],
	"39175": [
		32.090718,
		-90.631235
	],
	"39176": [
		33.306079,
		-89.768327
	],
	"39177": [
		32.623273,
		-90.800274
	],
	"39179": [
		32.80244,
		-90.096935
	],
	"39180": [
		32.224042,
		-90.857132
	],
	"39183": [
		32.447078,
		-90.80661
	],
	"39189": [
		32.608003,
		-89.400149
	],
	"39191": [
		31.711309,
		-90.424334
	],
	"39192": [
		33.183639,
		-89.762234
	],
	"39193": [
		32.234475,
		-90.079333
	],
	"39194": [
		32.845243,
		-90.520794
	],
	"39201": [
		32.289606,
		-90.184324
	],
	"39202": [
		32.311113,
		-90.170982
	],
	"39203": [
		32.308883,
		-90.200338
	],
	"39204": [
		32.279311,
		-90.206334
	],
	"39206": [
		32.372402,
		-90.172455
	],
	"39208": [
		32.259775,
		-90.09194
	],
	"39209": [
		32.395522,
		-90.293193
	],
	"39211": [
		32.372134,
		-90.122605
	],
	"39212": [
		32.243261,
		-90.280351
	],
	"39213": [
		32.392757,
		-90.23659
	],
	"39216": [
		32.333857,
		-90.159647
	],
	"39217": [
		32.299131,
		-90.210495
	],
	"39218": [
		32.230413,
		-90.159622
	],
	"39232": [
		32.330662,
		-90.091792
	],
	"39269": [
		32.301109,
		-90.18889
	],
	"39272": [
		32.19061,
		-90.258327
	],
	"39301": [
		32.273648,
		-88.580363
	],
	"39305": [
		32.463029,
		-88.714721
	],
	"39307": [
		32.334866,
		-88.796844
	],
	"39309": [
		32.548929,
		-88.615424
	],
	"39320": [
		32.569335,
		-88.744163
	],
	"39322": [
		31.535469,
		-88.503696
	],
	"39323": [
		32.352256,
		-88.923758
	],
	"39325": [
		32.561988,
		-88.877508
	],
	"39326": [
		32.602744,
		-88.656165
	],
	"39327": [
		32.446095,
		-89.118554
	],
	"39328": [
		32.743509,
		-88.698611
	],
	"39330": [
		32.180797,
		-88.843394
	],
	"39332": [
		32.3043,
		-88.998857
	],
	"39335": [
		32.533136,
		-88.49109
	],
	"39336": [
		32.300601,
		-89.2622
	],
	"39337": [
		32.507687,
		-88.97998
	],
	"39338": [
		32.106742,
		-89.230937
	],
	"39339": [
		33.101905,
		-89.011663
	],
	"39341": [
		33.098547,
		-88.566395
	],
	"39342": [
		32.424496,
		-88.648338
	],
	"39345": [
		32.291789,
		-89.121899
	],
	"39346": [
		32.965035,
		-89.095535
	],
	"39347": [
		32.060443,
		-88.942004
	],
	"39348": [
		32.015293,
		-89.032672
	],
	"39350": [
		32.796469,
		-89.125241
	],
	"39352": [
		32.684042,
		-88.481687
	],
	"39354": [
		32.875326,
		-88.840419
	],
	"39355": [
		32.054731,
		-88.624649
	],
	"39356": [
		32.134212,
		-89.021973
	],
	"39358": [
		32.90539,
		-88.411185
	],
	"39359": [
		32.567824,
		-89.333571
	],
	"39360": [
		31.864814,
		-88.754017
	],
	"39361": [
		32.995473,
		-88.59638
	],
	"39362": [
		31.39096,
		-88.541129
	],
	"39363": [
		32.127054,
		-88.765481
	],
	"39364": [
		32.405281,
		-88.486617
	],
	"39365": [
		32.602694,
		-89.126133
	],
	"39366": [
		31.943818,
		-88.918617
	],
	"39367": [
		31.676874,
		-88.66586
	],
	"39401": [
		31.234112,
		-89.265885
	],
	"39402": [
		31.333704,
		-89.419175
	],
	"39406": [
		31.328445,
		-89.33457
	],
	"39421": [
		31.492362,
		-89.721243
	],
	"39422": [
		31.959313,
		-89.257708
	],
	"39423": [
		31.170495,
		-88.915119
	],
	"39425": [
		31.060357,
		-89.080132
	],
	"39426": [
		30.655222,
		-89.661259
	],
	"39427": [
		31.48013,
		-89.814542
	],
	"39428": [
		31.651053,
		-89.57284
	],
	"39429": [
		31.239384,
		-89.763166
	],
	"39437": [
		31.579926,
		-89.218571
	],
	"39439": [
		31.849171,
		-89.013986
	],
	"39440": [
		31.693212,
		-89.147245
	],
	"39443": [
		31.716721,
		-89.078154
	],
	"39451": [
		31.1772,
		-88.621661
	],
	"39452": [
		30.873965,
		-88.601995
	],
	"39455": [
		31.011868,
		-89.458807
	],
	"39456": [
		31.06007,
		-88.823703
	],
	"39459": [
		31.489786,
		-89.304575
	],
	"39461": [
		31.205789,
		-88.732708
	],
	"39462": [
		31.234012,
		-89.056621
	],
	"39464": [
		31.491996,
		-89.083938
	],
	"39465": [
		31.339572,
		-89.18817
	],
	"39466": [
		30.520513,
		-89.585934
	],
	"39470": [
		30.822892,
		-89.56901
	],
	"39474": [
		31.612609,
		-89.855169
	],
	"39475": [
		31.153467,
		-89.42536
	],
	"39476": [
		31.386969,
		-88.866929
	],
	"39477": [
		31.788272,
		-89.033802
	],
	"39478": [
		31.054177,
		-89.85681
	],
	"39479": [
		31.529263,
		-89.458176
	],
	"39480": [
		31.71151,
		-89.315093
	],
	"39481": [
		31.868385,
		-89.238136
	],
	"39482": [
		31.372022,
		-89.579154
	],
	"39483": [
		31.242774,
		-89.932348
	],
	"39501": [
		30.382966,
		-89.102426
	],
	"39503": [
		30.474612,
		-89.152878
	],
	"39507": [
		30.400484,
		-89.034466
	],
	"39520": [
		30.271271,
		-89.481753
	],
	"39525": [
		30.381932,
		-89.370784
	],
	"39530": [
		30.409826,
		-88.880304
	],
	"39531": [
		30.403994,
		-88.966133
	],
	"39532": [
		30.493085,
		-88.964318
	],
	"39534": [
		30.407735,
		-88.924685
	],
	"39540": [
		30.443102,
		-88.897238
	],
	"39553": [
		30.410797,
		-88.644997
	],
	"39556": [
		30.44153,
		-89.439972
	],
	"39560": [
		30.376353,
		-89.172731
	],
	"39561": [
		30.702516,
		-89.154883
	],
	"39562": [
		30.546682,
		-88.489452
	],
	"39563": [
		30.42175,
		-88.523082
	],
	"39564": [
		30.40477,
		-88.771229
	],
	"39565": [
		30.587095,
		-88.744463
	],
	"39567": [
		30.365446,
		-88.540115
	],
	"39571": [
		30.420066,
		-89.275043
	],
	"39572": [
		30.251304,
		-89.60102
	],
	"39573": [
		30.730997,
		-89.093397
	],
	"39574": [
		30.610132,
		-89.091766
	],
	"39576": [
		30.290082,
		-89.383278
	],
	"39577": [
		30.904729,
		-89.086488
	],
	"39581": [
		30.357101,
		-88.489323
	],
	"39601": [
		31.56308,
		-90.471262
	],
	"39629": [
		31.436637,
		-90.45685
	],
	"39630": [
		31.459306,
		-90.84535
	],
	"39631": [
		31.067208,
		-91.134006
	],
	"39633": [
		31.306441,
		-91.180646
	],
	"39635": [
		31.191429,
		-90.46343
	],
	"39638": [
		31.225004,
		-90.995924
	],
	"39641": [
		31.355199,
		-90.174857
	],
	"39643": [
		31.246549,
		-90.014258
	],
	"39645": [
		31.148785,
		-90.798891
	],
	"39647": [
		31.525975,
		-90.7227
	],
	"39648": [
		31.189344,
		-90.384302
	],
	"39652": [
		31.113659,
		-90.475396
	],
	"39653": [
		31.481823,
		-90.864478
	],
	"39654": [
		31.544944,
		-90.136681
	],
	"39656": [
		31.443901,
		-89.931798
	],
	"39657": [
		31.040324,
		-90.506268
	],
	"39661": [
		31.484447,
		-91.083468
	],
	"39662": [
		31.386372,
		-90.285394
	],
	"39663": [
		31.594893,
		-90.038161
	],
	"39664": [
		31.32597,
		-90.674153
	],
	"39665": [
		31.64281,
		-90.209176
	],
	"39666": [
		31.294966,
		-90.482726
	],
	"39667": [
		31.124737,
		-90.126164
	],
	"39668": [
		31.710493,
		-90.80934
	],
	"39669": [
		31.121117,
		-91.383123
	],
	"39701": [
		33.393933,
		-88.504719
	],
	"39702": [
		33.439736,
		-88.344713
	],
	"39705": [
		33.587945,
		-88.441102
	],
	"39730": [
		33.843635,
		-88.565615
	],
	"39735": [
		33.353169,
		-89.187425
	],
	"39736": [
		33.431914,
		-88.652317
	],
	"39737": [
		33.670566,
		-89.330323
	],
	"39739": [
		33.239354,
		-88.573864
	],
	"39740": [
		33.722448,
		-88.305334
	],
	"39741": [
		33.645295,
		-88.866068
	],
	"39743": [
		33.336759,
		-88.61892
	],
	"39744": [
		33.57994,
		-89.307271
	],
	"39745": [
		33.296546,
		-89.451227
	],
	"39746": [
		33.74904,
		-88.414965
	],
	"39747": [
		33.409239,
		-89.554553
	],
	"39750": [
		33.568955,
		-89.044772
	],
	"39751": [
		33.695301,
		-89.093267
	],
	"39752": [
		33.522607,
		-89.150748
	],
	"39755": [
		33.607091,
		-88.963874
	],
	"39756": [
		33.756717,
		-88.741085
	],
	"39759": [
		33.437924,
		-88.825142
	],
	"39760": [
		33.464234,
		-88.705141
	],
	"39762": [
		33.452793,
		-88.795207
	],
	"39766": [
		33.587707,
		-88.312071
	],
	"39767": [
		33.475509,
		-89.448715
	],
	"39769": [
		33.321925,
		-89.017837
	],
	"39771": [
		33.606242,
		-89.275295
	],
	"39772": [
		33.295108,
		-89.304307
	],
	"39773": [
		33.647676,
		-88.690332
	],
	"39776": [
		33.780141,
		-89.040474
	],
	"39813": [
		31.423156,
		-84.684305
	],
	"39815": [
		30.73885,
		-84.490698
	],
	"39817": [
		30.943525,
		-84.602003
	],
	"39819": [
		30.788581,
		-84.634069
	],
	"39823": [
		31.336246,
		-84.946067
	],
	"39824": [
		31.495163,
		-84.925018
	],
	"39825": [
		30.930767,
		-84.740763
	],
	"39826": [
		31.820634,
		-84.348887
	],
	"39827": [
		30.94761,
		-84.210381
	],
	"39828": [
		30.808346,
		-84.224088
	],
	"39834": [
		30.894278,
		-84.43115
	],
	"39836": [
		31.666007,
		-84.868633
	],
	"39837": [
		31.152104,
		-84.677706
	],
	"39840": [
		31.780932,
		-84.764867
	],
	"39841": [
		31.292866,
		-84.685044
	],
	"39842": [
		31.760949,
		-84.437475
	],
	"39845": [
		30.951468,
		-84.892838
	],
	"39846": [
		31.562973,
		-84.745898
	],
	"39851": [
		31.619831,
		-84.992583
	],
	"39854": [
		31.869218,
		-85.052557
	],
	"39859": [
		30.987652,
		-84.812747
	],
	"39861": [
		31.13535,
		-84.987248
	],
	"39862": [
		31.459371,
		-84.517381
	],
	"39866": [
		31.559484,
		-84.594397
	],
	"39867": [
		31.828416,
		-84.927893
	],
	"39870": [
		31.322028,
		-84.414137
	],
	"39877": [
		31.915159,
		-84.511576
	],
	"39885": [
		31.717425,
		-84.351063
	],
	"39886": [
		31.745736,
		-84.621515
	],
	"39897": [
		30.911205,
		-84.329813
	],
	"40003": [
		38.276689,
		-85.043822
	],
	"40004": [
		37.803188,
		-85.465955
	],
	"40006": [
		38.596216,
		-85.333041
	],
	"40007": [
		38.458345,
		-84.99915
	],
	"40008": [
		37.908948,
		-85.275003
	],
	"40009": [
		37.470226,
		-85.107358
	],
	"40010": [
		38.372519,
		-85.459505
	],
	"40011": [
		38.527667,
		-85.170096
	],
	"40012": [
		37.900841,
		-85.191982
	],
	"40013": [
		37.934851,
		-85.458027
	],
	"40014": [
		38.340259,
		-85.429678
	],
	"40019": [
		38.380651,
		-85.164331
	],
	"40020": [
		37.934784,
		-85.387416
	],
	"40022": [
		38.153418,
		-85.354984
	],
	"40023": [
		38.174144,
		-85.432341
	],
	"40025": [
		38.299847,
		-85.648773
	],
	"40026": [
		38.431156,
		-85.532639
	],
	"40031": [
		38.429416,
		-85.400814
	],
	"40033": [
		37.544124,
		-85.225553
	],
	"40036": [
		38.415891,
		-84.982447
	],
	"40037": [
		37.660639,
		-85.417518
	],
	"40040": [
		37.777043,
		-85.069286
	],
	"40041": [
		38.255905,
		-85.664161
	],
	"40045": [
		38.687495,
		-85.358885
	],
	"40046": [
		38.023931,
		-85.169791
	],
	"40047": [
		38.039402,
		-85.555239
	],
	"40048": [
		37.84704,
		-85.470265
	],
	"40049": [
		37.663524,
		-85.395025
	],
	"40050": [
		38.446036,
		-85.186747
	],
	"40051": [
		37.677069,
		-85.551473
	],
	"40052": [
		37.604128,
		-85.487942
	],
	"40055": [
		38.495202,
		-85.326025
	],
	"40056": [
		38.303813,
		-85.490141
	],
	"40057": [
		38.394194,
		-85.042908
	],
	"40058": [
		38.432738,
		-85.170464
	],
	"40059": [
		38.358108,
		-85.593622
	],
	"40060": [
		37.542332,
		-85.466267
	],
	"40062": [
		37.605469,
		-85.441439
	],
	"40063": [
		37.570702,
		-85.342095
	],
	"40065": [
		38.2165,
		-85.206928
	],
	"40067": [
		38.222612,
		-85.369792
	],
	"40068": [
		38.395535,
		-85.274186
	],
	"40069": [
		37.723856,
		-85.207678
	],
	"40070": [
		38.468642,
		-85.232149
	],
	"40071": [
		38.042957,
		-85.37878
	],
	"40075": [
		38.568134,
		-85.11267
	],
	"40076": [
		38.113729,
		-85.086124
	],
	"40077": [
		38.495455,
		-85.444636
	],
	"40078": [
		37.831112,
		-85.144773
	],
	"40104": [
		38.085529,
		-86.33285
	],
	"40107": [
		37.725327,
		-85.598827
	],
	"40108": [
		37.969937,
		-86.172853
	],
	"40109": [
		38.064495,
		-85.750373
	],
	"40110": [
		37.932836,
		-85.658363
	],
	"40111": [
		37.774696,
		-86.62906
	],
	"40115": [
		37.727892,
		-86.228337
	],
	"40117": [
		37.896583,
		-86.124289
	],
	"40118": [
		38.097497,
		-85.751202
	],
	"40119": [
		37.608198,
		-86.553158
	],
	"40121": [
		37.952624,
		-85.924406
	],
	"40140": [
		37.763133,
		-86.353952
	],
	"40142": [
		37.893218,
		-86.204086
	],
	"40143": [
		37.781355,
		-86.509757
	],
	"40144": [
		37.74009,
		-86.368271
	],
	"40145": [
		37.640459,
		-86.314394
	],
	"40146": [
		37.849377,
		-86.33084
	],
	"40150": [
		37.88023,
		-85.713277
	],
	"40152": [
		37.613508,
		-86.463577
	],
	"40155": [
		37.935748,
		-85.992029
	],
	"40157": [
		38.04996,
		-86.436187
	],
	"40160": [
		37.812813,
		-85.93137
	],
	"40161": [
		38.001981,
		-86.386237
	],
	"40162": [
		37.756799,
		-86.059932
	],
	"40165": [
		37.973087,
		-85.672012
	],
	"40170": [
		37.963833,
		-86.509001
	],
	"40171": [
		37.965455,
		-86.465352
	],
	"40175": [
		37.819003,
		-86.089891
	],
	"40176": [
		37.918739,
		-86.333203
	],
	"40177": [
		38.006773,
		-85.921532
	],
	"40178": [
		37.659592,
		-86.412555
	],
	"40202": [
		38.256783,
		-85.754048
	],
	"40203": [
		38.252697,
		-85.765167
	],
	"40204": [
		38.239913,
		-85.721591
	],
	"40205": [
		38.223001,
		-85.683261
	],
	"40206": [
		38.260083,
		-85.704721
	],
	"40207": [
		38.266454,
		-85.656675
	],
	"40208": [
		38.217471,
		-85.76585
	],
	"40209": [
		38.189888,
		-85.748301
	],
	"40210": [
		38.23153,
		-85.786206
	],
	"40211": [
		38.235747,
		-85.824684
	],
	"40212": [
		38.271962,
		-85.799332
	],
	"40213": [
		38.177589,
		-85.719409
	],
	"40214": [
		38.151772,
		-85.780765
	],
	"40215": [
		38.190476,
		-85.785734
	],
	"40216": [
		38.189004,
		-85.839265
	],
	"40217": [
		38.216712,
		-85.737515
	],
	"40218": [
		38.189321,
		-85.654311
	],
	"40219": [
		38.137909,
		-85.692693
	],
	"40220": [
		38.216488,
		-85.617812
	],
	"40222": [
		38.271765,
		-85.619448
	],
	"40223": [
		38.258467,
		-85.539772
	],
	"40228": [
		38.134078,
		-85.626299
	],
	"40229": [
		38.089498,
		-85.653882
	],
	"40231": [
		38.195065,
		-85.69492
	],
	"40241": [
		38.299974,
		-85.575689
	],
	"40242": [
		38.277471,
		-85.590514
	],
	"40243": [
		38.241801,
		-85.536121
	],
	"40245": [
		38.267561,
		-85.446172
	],
	"40258": [
		38.14627,
		-85.877927
	],
	"40272": [
		38.078458,
		-85.853119
	],
	"40280": [
		38.247636,
		-85.688309
	],
	"40291": [
		38.130795,
		-85.583674
	],
	"40299": [
		38.151687,
		-85.517172
	],
	"40310": [
		37.749341,
		-84.764605
	],
	"40311": [
		38.332047,
		-83.997108
	],
	"40312": [
		37.854688,
		-83.93971
	],
	"40313": [
		38.146989,
		-83.376611
	],
	"40316": [
		37.937703,
		-83.541661
	],
	"40322": [
		37.938706,
		-83.634947
	],
	"40324": [
		38.24538,
		-84.550241
	],
	"40328": [
		37.603953,
		-85.067062
	],
	"40330": [
		37.787723,
		-84.888056
	],
	"40334": [
		38.013489,
		-83.762317
	],
	"40336": [
		37.682978,
		-83.990952
	],
	"40337": [
		37.942343,
		-83.854645
	],
	"40339": [
		37.944094,
		-84.638897
	],
	"40342": [
		37.995815,
		-84.979522
	],
	"40346": [
		37.987118,
		-83.743879
	],
	"40347": [
		38.158286,
		-84.728351
	],
	"40348": [
		38.288717,
		-84.129361
	],
	"40350": [
		38.304672,
		-83.873854
	],
	"40351": [
		38.204798,
		-83.415533
	],
	"40353": [
		38.064374,
		-83.948043
	],
	"40356": [
		37.874952,
		-84.563367
	],
	"40358": [
		38.060509,
		-83.675506
	],
	"40359": [
		38.491906,
		-84.802855
	],
	"40360": [
		38.155201,
		-83.789536
	],
	"40361": [
		38.208885,
		-84.227201
	],
	"40363": [
		38.514407,
		-85.009763
	],
	"40370": [
		38.403476,
		-84.525082
	],
	"40371": [
		38.103703,
		-83.580388
	],
	"40372": [
		37.911756,
		-84.888114
	],
	"40374": [
		38.222359,
		-83.88974
	],
	"40376": [
		37.77274,
		-83.690009
	],
	"40379": [
		38.302087,
		-84.687072
	],
	"40380": [
		37.815614,
		-83.792349
	],
	"40383": [
		38.006622,
		-84.739332
	],
	"40385": [
		37.737704,
		-84.133019
	],
	"40387": [
		37.933577,
		-83.492267
	],
	"40390": [
		37.85116,
		-84.665686
	],
	"40391": [
		37.970133,
		-84.144974
	],
	"40402": [
		37.29185,
		-83.975762
	],
	"40403": [
		37.570447,
		-84.271931
	],
	"40404": [
		37.573471,
		-84.290858
	],
	"40409": [
		37.369158,
		-84.434908
	],
	"40419": [
		37.451573,
		-84.494425
	],
	"40422": [
		37.640997,
		-84.797275
	],
	"40434": [
		37.394162,
		-83.940822
	],
	"40437": [
		37.435585,
		-84.87013
	],
	"40440": [
		37.585916,
		-84.820024
	],
	"40442": [
		37.337665,
		-84.751024
	],
	"40444": [
		37.666711,
		-84.577249
	],
	"40445": [
		37.338854,
		-84.187292
	],
	"40447": [
		37.485785,
		-84.032347
	],
	"40448": [
		37.463423,
		-84.752295
	],
	"40456": [
		37.353471,
		-84.319508
	],
	"40460": [
		37.397602,
		-84.226739
	],
	"40461": [
		37.58253,
		-84.406
	],
	"40464": [
		37.572274,
		-84.92506
	],
	"40468": [
		37.633933,
		-84.978242
	],
	"40472": [
		37.732128,
		-83.859667
	],
	"40475": [
		37.7616,
		-84.312523
	],
	"40481": [
		37.448818,
		-84.090133
	],
	"40484": [
		37.52058,
		-84.673931
	],
	"40486": [
		37.365328,
		-83.862799
	],
	"40489": [
		37.365743,
		-84.637255
	],
	"40502": [
		38.010953,
		-84.483191
	],
	"40503": [
		38.005828,
		-84.533469
	],
	"40504": [
		38.042413,
		-84.544016
	],
	"40505": [
		38.060653,
		-84.457238
	],
	"40506": [
		38.028302,
		-84.50314
	],
	"40507": [
		38.046955,
		-84.496353
	],
	"40508": [
		38.061351,
		-84.511664
	],
	"40509": [
		37.997348,
		-84.377851
	],
	"40510": [
		38.071199,
		-84.583831
	],
	"40511": [
		38.14029,
		-84.46161
	],
	"40513": [
		38.016586,
		-84.605028
	],
	"40514": [
		37.98246,
		-84.563051
	],
	"40515": [
		37.917671,
		-84.391441
	],
	"40516": [
		38.071804,
		-84.364002
	],
	"40517": [
		37.982958,
		-84.489425
	],
	"40601": [
		38.234919,
		-84.868786
	],
	"40604": [
		38.17552,
		-84.864683
	],
	"40701": [
		36.921744,
		-84.15771
	],
	"40729": [
		37.255245,
		-84.136477
	],
	"40734": [
		36.926433,
		-83.958386
	],
	"40737": [
		37.009948,
		-84.122349
	],
	"40740": [
		37.020582,
		-84.037313
	],
	"40741": [
		37.136791,
		-84.127273
	],
	"40743": [
		37.072517,
		-84.115373
	],
	"40744": [
		37.029447,
		-84.118983
	],
	"40759": [
		36.812972,
		-84.057124
	],
	"40763": [
		36.689229,
		-83.925596
	],
	"40769": [
		36.702807,
		-84.195257
	],
	"40771": [
		36.86417,
		-84.034739
	],
	"40801": [
		36.860801,
		-83.248522
	],
	"40806": [
		36.891244,
		-83.297002
	],
	"40807": [
		36.964094,
		-82.946
	],
	"40808": [
		36.996323,
		-83.203375
	],
	"40810": [
		36.906939,
		-83.374584
	],
	"40813": [
		36.709933,
		-83.591922
	],
	"40815": [
		36.784475,
		-83.219114
	],
	"40816": [
		37.013621,
		-83.295401
	],
	"40818": [
		36.821595,
		-83.243138
	],
	"40819": [
		36.804994,
		-83.446272
	],
	"40820": [
		36.743868,
		-83.196612
	],
	"40823": [
		36.958653,
		-82.990992
	],
	"40824": [
		36.825297,
		-83.375312
	],
	"40826": [
		37.046367,
		-82.764176
	],
	"40827": [
		37.037387,
		-83.51277
	],
	"40828": [
		36.879563,
		-83.123284
	],
	"40829": [
		36.7961,
		-83.302352
	],
	"40830": [
		36.760179,
		-83.328572
	],
	"40831": [
		36.766514,
		-83.354288
	],
	"40840": [
		36.90005,
		-83.440035
	],
	"40843": [
		36.891147,
		-82.991051
	],
	"40844": [
		37.057797,
		-83.341426
	],
	"40845": [
		36.798817,
		-83.51797
	],
	"40847": [
		36.850594,
		-83.174781
	],
	"40849": [
		36.893966,
		-83.131739
	],
	"40854": [
		36.845507,
		-83.353673
	],
	"40855": [
		36.929858,
		-82.885329
	],
	"40856": [
		36.738523,
		-83.527336
	],
	"40858": [
		37.004029,
		-83.410985
	],
	"40862": [
		37.018003,
		-82.855431
	],
	"40863": [
		36.727167,
		-83.430955
	],
	"40865": [
		36.920061,
		-83.211161
	],
	"40868": [
		37.077034,
		-83.497075
	],
	"40870": [
		36.923421,
		-83.144356
	],
	"40873": [
		36.818242,
		-83.409322
	],
	"40874": [
		36.997914,
		-83.469747
	],
	"40902": [
		36.882283,
		-83.580345
	],
	"40903": [
		36.799013,
		-83.810876
	],
	"40906": [
		36.872205,
		-83.881995
	],
	"40913": [
		36.925505,
		-83.567386
	],
	"40914": [
		37.142607,
		-83.567824
	],
	"40915": [
		36.887306,
		-83.807591
	],
	"40921": [
		36.763378,
		-83.894459
	],
	"40923": [
		36.919158,
		-83.844638
	],
	"40927": [
		36.873248,
		-83.063114
	],
	"40935": [
		36.919505,
		-83.722322
	],
	"40939": [
		36.811921,
		-83.696262
	],
	"40940": [
		36.602546,
		-83.939044
	],
	"40941": [
		37.124921,
		-83.732392
	],
	"40943": [
		36.970503,
		-83.861164
	],
	"40946": [
		36.974203,
		-83.807193
	],
	"40949": [
		36.876129,
		-83.871977
	],
	"40953": [
		36.937968,
		-83.801341
	],
	"40958": [
		36.809878,
		-83.596919
	],
	"40962": [
		37.145887,
		-83.745519
	],
	"40964": [
		36.772676,
		-83.312963
	],
	"40965": [
		36.646347,
		-83.720813
	],
	"40972": [
		37.259634,
		-83.577025
	],
	"40977": [
		36.700132,
		-83.772324
	],
	"40979": [
		37.005773,
		-83.511259
	],
	"40982": [
		36.932744,
		-83.690087
	],
	"40983": [
		37.330951,
		-83.754614
	],
	"40988": [
		36.866617,
		-83.516631
	],
	"40995": [
		36.761013,
		-83.815456
	],
	"40997": [
		36.894542,
		-83.662034
	],
	"41001": [
		38.917606,
		-84.40337
	],
	"41002": [
		38.742052,
		-83.973538
	],
	"41003": [
		38.52964,
		-84.390246
	],
	"41004": [
		38.644125,
		-84.087983
	],
	"41005": [
		39.006759,
		-84.760116
	],
	"41006": [
		38.78443,
		-84.345639
	],
	"41007": [
		38.892187,
		-84.294627
	],
	"41008": [
		38.663259,
		-85.168673
	],
	"41010": [
		38.499633,
		-84.608194
	],
	"41011": [
		39.067114,
		-84.532685
	],
	"41014": [
		39.06629,
		-84.505282
	],
	"41015": [
		38.97971,
		-84.478596
	],
	"41016": [
		39.088749,
		-84.548476
	],
	"41017": [
		39.029195,
		-84.562134
	],
	"41018": [
		39.014901,
		-84.602186
	],
	"41030": [
		38.788764,
		-84.589293
	],
	"41031": [
		38.417802,
		-84.288715
	],
	"41033": [
		38.769191,
		-84.445138
	],
	"41034": [
		38.723934,
		-83.891318
	],
	"41035": [
		38.719224,
		-84.654354
	],
	"41039": [
		38.414301,
		-83.871377
	],
	"41040": [
		38.650822,
		-84.331188
	],
	"41041": [
		38.407395,
		-83.720679
	],
	"41042": [
		39.000968,
		-84.651005
	],
	"41043": [
		38.761688,
		-84.20495
	],
	"41044": [
		38.610431,
		-83.972434
	],
	"41045": [
		38.717979,
		-85.035298
	],
	"41046": [
		38.717378,
		-84.803336
	],
	"41048": [
		39.098837,
		-84.706349
	],
	"41049": [
		38.268994,
		-83.639781
	],
	"41051": [
		38.935301,
		-84.550099
	],
	"41052": [
		38.677987,
		-84.768518
	],
	"41055": [
		38.525392,
		-83.866464
	],
	"41056": [
		38.594938,
		-83.778131
	],
	"41059": [
		39.013395,
		-84.35138
	],
	"41062": [
		38.70401,
		-83.92284
	],
	"41063": [
		38.84653,
		-84.495123
	],
	"41064": [
		38.513473,
		-84.06423
	],
	"41071": [
		39.071805,
		-84.485118
	],
	"41073": [
		39.101364,
		-84.478768
	],
	"41074": [
		39.110589,
		-84.462457
	],
	"41075": [
		39.081974,
		-84.453172
	],
	"41076": [
		39.013255,
		-84.453837
	],
	"41080": [
		39.05469,
		-84.824178
	],
	"41083": [
		38.666019,
		-84.96746
	],
	"41085": [
		39.03641,
		-84.393332
	],
	"41086": [
		38.689205,
		-84.87144
	],
	"41091": [
		38.910267,
		-84.736327
	],
	"41092": [
		38.815614,
		-84.688213
	],
	"41093": [
		38.387403,
		-83.558464
	],
	"41094": [
		38.882754,
		-84.624108
	],
	"41095": [
		38.773687,
		-84.747466
	],
	"41097": [
		38.621179,
		-84.581444
	],
	"41098": [
		38.58687,
		-85.008171
	],
	"41099": [
		39.035893,
		-84.468189
	],
	"41101": [
		38.473824,
		-82.647933
	],
	"41102": [
		38.427628,
		-82.730185
	],
	"41121": [
		38.439405,
		-82.833674
	],
	"41124": [
		38.064835,
		-82.869313
	],
	"41129": [
		38.320926,
		-82.656257
	],
	"41132": [
		38.272196,
		-82.812826
	],
	"41135": [
		38.344292,
		-83.301983
	],
	"41139": [
		38.514154,
		-82.726618
	],
	"41141": [
		38.556381,
		-83.15939
	],
	"41142": [
		38.277676,
		-83.073053
	],
	"41143": [
		38.334906,
		-82.975412
	],
	"41144": [
		38.540797,
		-82.942517
	],
	"41146": [
		38.279178,
		-82.896024
	],
	"41149": [
		38.098722,
		-83.076951
	],
	"41159": [
		38.010408,
		-82.975082
	],
	"41164": [
		38.288404,
		-83.1572
	],
	"41166": [
		38.637199,
		-83.093646
	],
	"41168": [
		38.30699,
		-82.751009
	],
	"41169": [
		38.535531,
		-82.73789
	],
	"41171": [
		38.088855,
		-83.106253
	],
	"41174": [
		38.706271,
		-83.007077
	],
	"41175": [
		38.648866,
		-82.972077
	],
	"41179": [
		38.552152,
		-83.376774
	],
	"41180": [
		38.150427,
		-82.884153
	],
	"41183": [
		38.553369,
		-82.737832
	],
	"41189": [
		38.547639,
		-83.562888
	],
	"41201": [
		38.074457,
		-82.738302
	],
	"41203": [
		37.840686,
		-82.459831
	],
	"41204": [
		37.829542,
		-82.672333
	],
	"41214": [
		37.801542,
		-82.627616
	],
	"41216": [
		37.732493,
		-82.803752
	],
	"41219": [
		37.926112,
		-82.905328
	],
	"41222": [
		37.755891,
		-82.858454
	],
	"41224": [
		37.805109,
		-82.545574
	],
	"41226": [
		37.981129,
		-82.952213
	],
	"41230": [
		38.043795,
		-82.672757
	],
	"41231": [
		37.813549,
		-82.406876
	],
	"41232": [
		37.941018,
		-82.729719
	],
	"41234": [
		37.790227,
		-82.741933
	],
	"41238": [
		37.84623,
		-82.961186
	],
	"41240": [
		37.823975,
		-82.796579
	],
	"41250": [
		37.71548,
		-82.455836
	],
	"41254": [
		37.887302,
		-82.715298
	],
	"41255": [
		37.907374,
		-82.825001
	],
	"41256": [
		37.840093,
		-82.896758
	],
	"41257": [
		37.918649,
		-82.794923
	],
	"41260": [
		37.825569,
		-82.752785
	],
	"41262": [
		37.845096,
		-82.630093
	],
	"41263": [
		37.856896,
		-82.75218
	],
	"41264": [
		37.92491,
		-82.681454
	],
	"41265": [
		37.748183,
		-82.707253
	],
	"41267": [
		37.878243,
		-82.441004
	],
	"41268": [
		37.788452,
		-82.78527
	],
	"41271": [
		37.822449,
		-82.723584
	],
	"41274": [
		37.86416,
		-82.810705
	],
	"41301": [
		37.728702,
		-83.492318
	],
	"41311": [
		37.58322,
		-83.710711
	],
	"41314": [
		37.425581,
		-83.640207
	],
	"41317": [
		37.445675,
		-83.153193
	],
	"41332": [
		37.800749,
		-83.389224
	],
	"41339": [
		37.506632,
		-83.28304
	],
	"41348": [
		37.409385,
		-83.301027
	],
	"41352": [
		37.822932,
		-83.33029
	],
	"41360": [
		37.801388,
		-83.614611
	],
	"41365": [
		37.706784,
		-83.628873
	],
	"41366": [
		37.595031,
		-83.21778
	],
	"41367": [
		37.415013,
		-83.227817
	],
	"41385": [
		37.663797,
		-83.31477
	],
	"41390": [
		37.409329,
		-83.376933
	],
	"41397": [
		37.689048,
		-83.673356
	],
	"41408": [
		37.772042,
		-83.275996
	],
	"41421": [
		37.989833,
		-83.197835
	],
	"41425": [
		37.889045,
		-83.389928
	],
	"41464": [
		37.658413,
		-82.952856
	],
	"41465": [
		37.706222,
		-83.09529
	],
	"41472": [
		37.944008,
		-83.24734
	],
	"41501": [
		37.514355,
		-82.508901
	],
	"41503": [
		37.664346,
		-82.287467
	],
	"41512": [
		37.253716,
		-82.476077
	],
	"41513": [
		37.34409,
		-82.343977
	],
	"41514": [
		37.668918,
		-82.318529
	],
	"41517": [
		37.195399,
		-82.578638
	],
	"41519": [
		37.584041,
		-82.321566
	],
	"41522": [
		37.29719,
		-82.389386
	],
	"41524": [
		37.417963,
		-82.231061
	],
	"41526": [
		37.433375,
		-82.510864
	],
	"41527": [
		37.632092,
		-82.289008
	],
	"41528": [
		37.548983,
		-82.139905
	],
	"41531": [
		37.592806,
		-82.232756
	],
	"41534": [
		37.277524,
		-82.476578
	],
	"41535": [
		37.596357,
		-82.27967
	],
	"41537": [
		37.222622,
		-82.613734
	],
	"41538": [
		37.31558,
		-82.590072
	],
	"41539": [
		37.506832,
		-82.327132
	],
	"41540": [
		37.390941,
		-82.334873
	],
	"41543": [
		37.547898,
		-82.285498
	],
	"41544": [
		37.593903,
		-82.17409
	],
	"41547": [
		37.536055,
		-82.090741
	],
	"41548": [
		37.400307,
		-82.279677
	],
	"41553": [
		37.477138,
		-82.163613
	],
	"41554": [
		37.43646,
		-82.289063
	],
	"41555": [
		37.538033,
		-82.258488
	],
	"41557": [
		37.486031,
		-82.410913
	],
	"41558": [
		37.53858,
		-82.209218
	],
	"41559": [
		37.374432,
		-82.383096
	],
	"41560": [
		37.395551,
		-82.578344
	],
	"41562": [
		37.398719,
		-82.463619
	],
	"41563": [
		37.232192,
		-82.536634
	],
	"41564": [
		37.607614,
		-82.364813
	],
	"41566": [
		37.403386,
		-82.201444
	],
	"41567": [
		37.575019,
		-82.283322
	],
	"41568": [
		37.49204,
		-82.097836
	],
	"41571": [
		37.627536,
		-82.435568
	],
	"41572": [
		37.313498,
		-82.643578
	],
	"41601": [
		37.600075,
		-82.72179
	],
	"41602": [
		37.74581,
		-82.754423
	],
	"41603": [
		37.570574,
		-82.704312
	],
	"41604": [
		37.383503,
		-82.660731
	],
	"41605": [
		37.550134,
		-82.624611
	],
	"41606": [
		37.336906,
		-82.734258
	],
	"41607": [
		37.625066,
		-82.856899
	],
	"41612": [
		37.354326,
		-82.723004
	],
	"41615": [
		37.53744,
		-82.692539
	],
	"41616": [
		37.561928,
		-82.879427
	],
	"41619": [
		37.479335,
		-82.733485
	],
	"41621": [
		37.626675,
		-82.731302
	],
	"41622": [
		37.522691,
		-82.816952
	],
	"41630": [
		37.467734,
		-82.798786
	],
	"41631": [
		37.47352,
		-82.655341
	],
	"41632": [
		37.564932,
		-82.951718
	],
	"41635": [
		37.4845,
		-82.626118
	],
	"41636": [
		37.399286,
		-82.731644
	],
	"41640": [
		37.475597,
		-83.009273
	],
	"41642": [
		37.592237,
		-82.648393
	],
	"41643": [
		37.460203,
		-82.832233
	],
	"41645": [
		37.523824,
		-82.795306
	],
	"41647": [
		37.442057,
		-82.717448
	],
	"41649": [
		37.570994,
		-82.776686
	],
	"41650": [
		37.354509,
		-82.683267
	],
	"41653": [
		37.654691,
		-82.757956
	],
	"41655": [
		37.507237,
		-82.735644
	],
	"41659": [
		37.579592,
		-82.621925
	],
	"41660": [
		37.414098,
		-82.631727
	],
	"41663": [
		37.565233,
		-82.659112
	],
	"41666": [
		37.439031,
		-82.807592
	],
	"41667": [
		37.321529,
		-82.687194
	],
	"41669": [
		37.331634,
		-82.715525
	],
	"41701": [
		37.29228,
		-83.189788
	],
	"41712": [
		37.363727,
		-83.127097
	],
	"41713": [
		37.219388,
		-83.276435
	],
	"41714": [
		37.143481,
		-83.51689
	],
	"41719": [
		37.306432,
		-83.258132
	],
	"41721": [
		37.30911,
		-83.473327
	],
	"41722": [
		37.369184,
		-83.115979
	],
	"41723": [
		37.264853,
		-83.31072
	],
	"41725": [
		37.339144,
		-83.035062
	],
	"41727": [
		37.377305,
		-83.278803
	],
	"41729": [
		37.264762,
		-83.215612
	],
	"41731": [
		37.094053,
		-83.079451
	],
	"41735": [
		37.01501,
		-83.1029
	],
	"41739": [
		37.330369,
		-83.118657
	],
	"41740": [
		37.364399,
		-83.072515
	],
	"41745": [
		37.34021,
		-83.433003
	],
	"41746": [
		37.213919,
		-83.090373
	],
	"41749": [
		37.205001,
		-83.448725
	],
	"41751": [
		37.210779,
		-83.138459
	],
	"41754": [
		37.295245,
		-83.318415
	],
	"41759": [
		37.217627,
		-83.014446
	],
	"41760": [
		37.205706,
		-83.076493
	],
	"41762": [
		37.273762,
		-83.474755
	],
	"41763": [
		37.066991,
		-83.150356
	],
	"41764": [
		37.116661,
		-83.253998
	],
	"41766": [
		37.179868,
		-83.465731
	],
	"41772": [
		37.424141,
		-83.053988
	],
	"41773": [
		37.231869,
		-83.026707
	],
	"41774": [
		37.142767,
		-83.139571
	],
	"41775": [
		37.088098,
		-83.34641
	],
	"41776": [
		37.168274,
		-83.29494
	],
	"41777": [
		37.072378,
		-83.25644
	],
	"41804": [
		37.151503,
		-83.002154
	],
	"41810": [
		37.185169,
		-82.673873
	],
	"41812": [
		37.254182,
		-82.745505
	],
	"41815": [
		37.160405,
		-82.798142
	],
	"41817": [
		37.347483,
		-82.929809
	],
	"41819": [
		36.987114,
		-83.107019
	],
	"41821": [
		37.059106,
		-83.01476
	],
	"41822": [
		37.32734,
		-82.981932
	],
	"41824": [
		37.191542,
		-82.87332
	],
	"41825": [
		37.231031,
		-82.705616
	],
	"41826": [
		37.16335,
		-82.912003
	],
	"41828": [
		37.288132,
		-82.787912
	],
	"41831": [
		37.387165,
		-82.953376
	],
	"41832": [
		37.148686,
		-82.959284
	],
	"41833": [
		37.026016,
		-82.985811
	],
	"41834": [
		37.254312,
		-82.96884
	],
	"41835": [
		37.221077,
		-82.667983
	],
	"41836": [
		37.233323,
		-82.900543
	],
	"41837": [
		37.125158,
		-82.758338
	],
	"41838": [
		37.203755,
		-82.756691
	],
	"41839": [
		37.396669,
		-82.905292
	],
	"41840": [
		37.198988,
		-82.720877
	],
	"41843": [
		37.283474,
		-82.845428
	],
	"41844": [
		37.314352,
		-82.872327
	],
	"41845": [
		37.141394,
		-82.901327
	],
	"41847": [
		37.202518,
		-82.968252
	],
	"41848": [
		37.093381,
		-82.94792
	],
	"41849": [
		37.175839,
		-82.734853
	],
	"41855": [
		37.190487,
		-82.784701
	],
	"41858": [
		37.136055,
		-82.854849
	],
	"41859": [
		37.387925,
		-82.771916
	],
	"41861": [
		37.405758,
		-82.821902
	],
	"41862": [
		37.335588,
		-82.778079
	],
	"42001": [
		37.030572,
		-88.7094
	],
	"42003": [
		37.004848,
		-88.577941
	],
	"42020": [
		36.692634,
		-88.289872
	],
	"42021": [
		36.82256,
		-89.027668
	],
	"42022": [
		37.144988,
		-88.944769
	],
	"42023": [
		36.872349,
		-88.990733
	],
	"42024": [
		37.077408,
		-89.050311
	],
	"42025": [
		36.856924,
		-88.334714
	],
	"42027": [
		36.916671,
		-88.627686
	],
	"42028": [
		37.23891,
		-88.336848
	],
	"42029": [
		37.006472,
		-88.39196
	],
	"42031": [
		36.685748,
		-88.991397
	],
	"42032": [
		36.775805,
		-89.108066
	],
	"42035": [
		36.900226,
		-88.840382
	],
	"42036": [
		36.711521,
		-88.214544
	],
	"42037": [
		37.172781,
		-88.187707
	],
	"42038": [
		37.047413,
		-88.027647
	],
	"42039": [
		36.788709,
		-88.825434
	],
	"42040": [
		36.625296,
		-88.497073
	],
	"42041": [
		36.550373,
		-88.877352
	],
	"42044": [
		36.957582,
		-88.263203
	],
	"42045": [
		37.063993,
		-88.263097
	],
	"42047": [
		37.295041,
		-88.399352
	],
	"42048": [
		36.765705,
		-88.228582
	],
	"42049": [
		36.521138,
		-88.333756
	],
	"42050": [
		36.555421,
		-89.219274
	],
	"42051": [
		36.850728,
		-88.647174
	],
	"42053": [
		37.112649,
		-88.877823
	],
	"42054": [
		36.714454,
		-88.433457
	],
	"42055": [
		37.075222,
		-88.174049
	],
	"42056": [
		37.107275,
		-88.986746
	],
	"42058": [
		37.058337,
		-88.465707
	],
	"42060": [
		36.965854,
		-88.82813
	],
	"42061": [
		36.882838,
		-88.766366
	],
	"42064": [
		37.357138,
		-88.089515
	],
	"42066": [
		36.732532,
		-88.639882
	],
	"42069": [
		36.918791,
		-88.756493
	],
	"42071": [
		36.624585,
		-88.284907
	],
	"42076": [
		36.571455,
		-88.106951
	],
	"42078": [
		37.277825,
		-88.286797
	],
	"42079": [
		36.567752,
		-88.588819
	],
	"42081": [
		37.226678,
		-88.416634
	],
	"42082": [
		36.919858,
		-88.500423
	],
	"42083": [
		37.161785,
		-88.288333
	],
	"42084": [
		37.434663,
		-88.245662
	],
	"42085": [
		36.569596,
		-88.800966
	],
	"42086": [
		37.088547,
		-88.771835
	],
	"42087": [
		36.973093,
		-88.994838
	],
	"42088": [
		36.621222,
		-88.747697
	],
	"42101": [
		37.058097,
		-86.463061
	],
	"42102": [
		37.003731,
		-86.418234
	],
	"42103": [
		36.945656,
		-86.281066
	],
	"42104": [
		36.876864,
		-86.45119
	],
	"42120": [
		36.672853,
		-86.262112
	],
	"42122": [
		36.85707,
		-86.353679
	],
	"42123": [
		36.817602,
		-85.982734
	],
	"42124": [
		36.87054,
		-85.643964
	],
	"42127": [
		37.113569,
		-85.918463
	],
	"42129": [
		36.989145,
		-85.585467
	],
	"42130": [
		36.925865,
		-85.786306
	],
	"42133": [
		36.726047,
		-85.956233
	],
	"42134": [
		36.724535,
		-86.564483
	],
	"42140": [
		36.656541,
		-85.828893
	],
	"42141": [
		36.947551,
		-85.918331
	],
	"42151": [
		36.649748,
		-85.553812
	],
	"42153": [
		36.6634,
		-86.066848
	],
	"42154": [
		37.041978,
		-85.726199
	],
	"42156": [
		36.851328,
		-86.053664
	],
	"42157": [
		36.781385,
		-85.81974
	],
	"42159": [
		36.994209,
		-86.247755
	],
	"42160": [
		37.119712,
		-86.004267
	],
	"42163": [
		37.07906,
		-86.134145
	],
	"42164": [
		36.775664,
		-86.181864
	],
	"42166": [
		36.880186,
		-85.708775
	],
	"42167": [
		36.720987,
		-85.674109
	],
	"42170": [
		36.840553,
		-86.576675
	],
	"42171": [
		37.036369,
		-86.174441
	],
	"42202": [
		36.682889,
		-86.844423
	],
	"42204": [
		36.684754,
		-87.076167
	],
	"42206": [
		36.886676,
		-86.743011
	],
	"42207": [
		37.293995,
		-86.266888
	],
	"42210": [
		37.206633,
		-86.252409
	],
	"42211": [
		36.817748,
		-87.833699
	],
	"42214": [
		37.138188,
		-85.683335
	],
	"42215": [
		36.996009,
		-87.667395
	],
	"42217": [
		37.040667,
		-87.458463
	],
	"42220": [
		36.893234,
		-87.178636
	],
	"42223": [
		36.628264,
		-87.462873
	],
	"42232": [
		36.864767,
		-87.643359
	],
	"42234": [
		36.721574,
		-87.178582
	],
	"42236": [
		36.71208,
		-87.613526
	],
	"42240": [
		36.880182,
		-87.463142
	],
	"42254": [
		36.661018,
		-87.654511
	],
	"42256": [
		37.000821,
		-86.937511
	],
	"42259": [
		37.243161,
		-86.148284
	],
	"42261": [
		37.217107,
		-86.671334
	],
	"42262": [
		36.679919,
		-87.449417
	],
	"42265": [
		36.739223,
		-87.004306
	],
	"42266": [
		36.744341,
		-87.357244
	],
	"42273": [
		37.215678,
		-86.838506
	],
	"42274": [
		36.950235,
		-86.598782
	],
	"42275": [
		37.216901,
		-86.457234
	],
	"42276": [
		36.856794,
		-86.879933
	],
	"42280": [
		36.956981,
		-87.099164
	],
	"42285": [
		37.264053,
		-86.297813
	],
	"42286": [
		36.729148,
		-87.2899
	],
	"42301": [
		37.735778,
		-87.249397
	],
	"42303": [
		37.757029,
		-87.050026
	],
	"42320": [
		37.332728,
		-86.867017
	],
	"42321": [
		37.165489,
		-87.055061
	],
	"42322": [
		37.613648,
		-87.395313
	],
	"42323": [
		37.173379,
		-87.035443
	],
	"42324": [
		37.134997,
		-87.004577
	],
	"42325": [
		37.327891,
		-87.274016
	],
	"42326": [
		37.22542,
		-87.005465
	],
	"42327": [
		37.58053,
		-87.297311
	],
	"42328": [
		37.430849,
		-87.045199
	],
	"42330": [
		37.321997,
		-87.115992
	],
	"42332": [
		37.250429,
		-87.088665
	],
	"42333": [
		37.363905,
		-86.752098
	],
	"42337": [
		37.198474,
		-86.949246
	],
	"42338": [
		37.543952,
		-86.80082
	],
	"42339": [
		37.09428,
		-86.974743
	],
	"42343": [
		37.652848,
		-86.693878
	],
	"42344": [
		37.270866,
		-87.317147
	],
	"42345": [
		37.135863,
		-87.183717
	],
	"42347": [
		37.525035,
		-86.882159
	],
	"42348": [
		37.830925,
		-86.774914
	],
	"42349": [
		37.43031,
		-86.677192
	],
	"42350": [
		37.455012,
		-87.186913
	],
	"42351": [
		37.898577,
		-86.866633
	],
	"42352": [
		37.514811,
		-87.0859
	],
	"42354": [
		37.377987,
		-86.930571
	],
	"42355": [
		37.85631,
		-86.993641
	],
	"42356": [
		37.693255,
		-87.324109
	],
	"42361": [
		37.517166,
		-86.683941
	],
	"42366": [
		37.722748,
		-86.938515
	],
	"42367": [
		37.239421,
		-87.159905
	],
	"42368": [
		37.702946,
		-86.754071
	],
	"42369": [
		37.358648,
		-87.003767
	],
	"42370": [
		37.44902,
		-86.738928
	],
	"42371": [
		37.510021,
		-87.289647
	],
	"42372": [
		37.406181,
		-87.269553
	],
	"42374": [
		37.325814,
		-87.154391
	],
	"42376": [
		37.617755,
		-87.085957
	],
	"42378": [
		37.667299,
		-86.863275
	],
	"42404": [
		37.474342,
		-87.838259
	],
	"42406": [
		37.762139,
		-87.73824
	],
	"42408": [
		37.179537,
		-87.692699
	],
	"42409": [
		37.538637,
		-87.692934
	],
	"42410": [
		37.278539,
		-87.511771
	],
	"42411": [
		37.198292,
		-88.010813
	],
	"42413": [
		37.448656,
		-87.467001
	],
	"42420": [
		37.810608,
		-87.515004
	],
	"42431": [
		37.334473,
		-87.481387
	],
	"42436": [
		37.37395,
		-87.575537
	],
	"42437": [
		37.666657,
		-87.93807
	],
	"42440": [
		37.240727,
		-87.464602
	],
	"42441": [
		37.362648,
		-87.668529
	],
	"42442": [
		37.167103,
		-87.488393
	],
	"42445": [
		37.133339,
		-87.85174
	],
	"42450": [
		37.39587,
		-87.763402
	],
	"42451": [
		37.884533,
		-87.390707
	],
	"42452": [
		37.686512,
		-87.531672
	],
	"42453": [
		37.157856,
		-87.590712
	],
	"42455": [
		37.593375,
		-87.542551
	],
	"42456": [
		37.507705,
		-87.496097
	],
	"42458": [
		37.839563,
		-87.420942
	],
	"42459": [
		37.566806,
		-88.019048
	],
	"42461": [
		37.797397,
		-87.889216
	],
	"42462": [
		37.743982,
		-87.801718
	],
	"42463": [
		37.47262,
		-87.869452
	],
	"42464": [
		37.181253,
		-87.356159
	],
	"42501": [
		37.056193,
		-84.450902
	],
	"42503": [
		37.16496,
		-84.519399
	],
	"42516": [
		37.222154,
		-84.786031
	],
	"42518": [
		36.94237,
		-84.632646
	],
	"42519": [
		36.955307,
		-84.53504
	],
	"42528": [
		37.181802,
		-85.023368
	],
	"42533": [
		37.072195,
		-84.592355
	],
	"42539": [
		37.309082,
		-84.950978
	],
	"42541": [
		37.358884,
		-84.794343
	],
	"42544": [
		37.029948,
		-84.815125
	],
	"42553": [
		37.156237,
		-84.697584
	],
	"42565": [
		37.158976,
		-84.889276
	],
	"42566": [
		37.278532,
		-84.783172
	],
	"42567": [
		37.265935,
		-84.604696
	],
	"42602": [
		36.739658,
		-85.110212
	],
	"42603": [
		36.782248,
		-85.029028
	],
	"42629": [
		36.912657,
		-85.13806
	],
	"42631": [
		36.740393,
		-84.480989
	],
	"42633": [
		36.802011,
		-84.83044
	],
	"42634": [
		36.873369,
		-84.442676
	],
	"42635": [
		36.680086,
		-84.396579
	],
	"42638": [
		36.674602,
		-84.470477
	],
	"42642": [
		37.058681,
		-85.035151
	],
	"42647": [
		36.681248,
		-84.627344
	],
	"42649": [
		36.619782,
		-84.430882
	],
	"42653": [
		36.781914,
		-84.454957
	],
	"42701": [
		37.703686,
		-85.837111
	],
	"42712": [
		37.518754,
		-86.108877
	],
	"42713": [
		37.38313,
		-85.883731
	],
	"42715": [
		36.954779,
		-85.389844
	],
	"42716": [
		37.479932,
		-85.606426
	],
	"42717": [
		36.788363,
		-85.378995
	],
	"42718": [
		37.385228,
		-85.373081
	],
	"42721": [
		37.42298,
		-86.499733
	],
	"42722": [
		37.276586,
		-85.716132
	],
	"42724": [
		37.675918,
		-86.070835
	],
	"42726": [
		37.425282,
		-86.141054
	],
	"42728": [
		37.117031,
		-85.29007
	],
	"42729": [
		37.306467,
		-86.096497
	],
	"42731": [
		36.847822,
		-85.557382
	],
	"42732": [
		37.588954,
		-86.133317
	],
	"42733": [
		37.343603,
		-85.18643
	],
	"42740": [
		37.586367,
		-85.948754
	],
	"42741": [
		36.999228,
		-85.238426
	],
	"42743": [
		37.228398,
		-85.532314
	],
	"42746": [
		37.212381,
		-85.732393
	],
	"42748": [
		37.566719,
		-85.694069
	],
	"42749": [
		37.18382,
		-85.877076
	],
	"42753": [
		37.21091,
		-85.199873
	],
	"42754": [
		37.472934,
		-86.316299
	],
	"42757": [
		37.402832,
		-85.719536
	],
	"42758": [
		37.374297,
		-85.198725
	],
	"42762": [
		37.455344,
		-86.39315
	],
	"42764": [
		37.429579,
		-85.620541
	],
	"42765": [
		37.33272,
		-85.933249
	],
	"42776": [
		37.514508,
		-85.927093
	],
	"42782": [
		37.336817,
		-85.643034
	],
	"42784": [
		37.451992,
		-85.932393
	],
	"42788": [
		37.529664,
		-86.027886
	],
	"43001": [
		40.088034,
		-82.61393
	],
	"43002": [
		40.062966,
		-83.170222
	],
	"43003": [
		40.412257,
		-82.979342
	],
	"43004": [
		40.017344,
		-82.798786
	],
	"43005": [
		40.286212,
		-82.276828
	],
	"43006": [
		40.459722,
		-82.149286
	],
	"43008": [
		39.93389,
		-82.480911
	],
	"43009": [
		40.171458,
		-83.639322
	],
	"43010": [
		39.999547,
		-83.622832
	],
	"43011": [
		40.303,
		-82.679665
	],
	"43013": [
		40.233019,
		-82.688345
	],
	"43014": [
		40.466757,
		-82.262513
	],
	"43015": [
		40.297786,
		-83.060181
	],
	"43016": [
		40.097462,
		-83.150204
	],
	"43017": [
		40.110682,
		-83.129049
	],
	"43019": [
		40.49294,
		-82.578515
	],
	"43021": [
		40.197671,
		-82.873674
	],
	"43022": [
		40.345039,
		-82.339811
	],
	"43023": [
		40.078944,
		-82.536411
	],
	"43025": [
		39.970889,
		-82.517382
	],
	"43026": [
		40.02085,
		-83.194413
	],
	"43028": [
		40.401712,
		-82.297266
	],
	"43029": [
		40.097477,
		-83.440642
	],
	"43030": [
		39.96145,
		-82.415841
	],
	"43031": [
		40.160847,
		-82.665164
	],
	"43032": [
		40.328624,
		-82.958823
	],
	"43033": [
		39.961234,
		-82.599664
	],
	"43035": [
		40.188543,
		-82.995118
	],
	"43036": [
		40.352201,
		-83.261098
	],
	"43037": [
		40.284431,
		-82.32319
	],
	"43040": [
		40.260352,
		-83.359084
	],
	"43044": [
		40.054862,
		-83.55081
	],
	"43045": [
		40.168381,
		-83.458675
	],
	"43046": [
		39.896382,
		-82.541954
	],
	"43050": [
		40.373976,
		-82.492721
	],
	"43054": [
		40.083073,
		-82.798908
	],
	"43055": [
		40.119897,
		-82.377784
	],
	"43056": [
		40.008493,
		-82.340989
	],
	"43060": [
		40.222353,
		-83.571542
	],
	"43061": [
		40.289506,
		-83.203052
	],
	"43062": [
		40.007079,
		-82.682268
	],
	"43064": [
		40.098393,
		-83.283538
	],
	"43065": [
		40.17754,
		-83.094187
	],
	"43066": [
		40.39129,
		-83.171969
	],
	"43067": [
		40.340482,
		-83.468152
	],
	"43068": [
		39.956185,
		-82.784665
	],
	"43070": [
		40.215778,
		-83.957945
	],
	"43071": [
		40.180695,
		-82.359463
	],
	"43072": [
		40.119674,
		-83.956704
	],
	"43074": [
		40.269531,
		-82.850655
	],
	"43076": [
		39.897004,
		-82.39875
	],
	"43077": [
		40.13705,
		-83.341267
	],
	"43078": [
		40.117639,
		-83.78379
	],
	"43080": [
		40.240719,
		-82.429257
	],
	"43081": [
		40.110443,
		-82.890646
	],
	"43082": [
		40.149186,
		-82.884872
	],
	"43084": [
		40.150137,
		-83.557264
	],
	"43085": [
		40.100924,
		-83.013402
	],
	"43101": [
		39.464497,
		-82.746107
	],
	"43102": [
		39.64092,
		-82.764982
	],
	"43103": [
		39.732375,
		-82.935708
	],
	"43105": [
		39.86676,
		-82.612369
	],
	"43106": [
		39.642318,
		-83.421179
	],
	"43107": [
		39.692825,
		-82.414529
	],
	"43109": [
		39.918164,
		-82.830546
	],
	"43110": [
		39.826682,
		-82.800074
	],
	"43111": [
		39.502067,
		-82.2427
	],
	"43112": [
		39.797808,
		-82.70462
	],
	"43113": [
		39.586593,
		-82.962246
	],
	"43115": [
		39.491747,
		-83.151142
	],
	"43116": [
		39.77156,
		-83.061385
	],
	"43117": [
		39.768789,
		-83.206122
	],
	"43119": [
		39.940928,
		-83.205719
	],
	"43123": [
		39.866719,
		-83.11557
	],
	"43125": [
		39.838052,
		-82.887941
	],
	"43126": [
		39.815503,
		-83.165765
	],
	"43127": [
		39.479923,
		-82.321355
	],
	"43128": [
		39.659722,
		-83.594024
	],
	"43130": [
		39.696463,
		-82.614717
	],
	"43135": [
		39.468184,
		-82.69342
	],
	"43136": [
		39.801317,
		-82.812481
	],
	"43137": [
		39.80884,
		-82.987481
	],
	"43138": [
		39.51834,
		-82.414097
	],
	"43140": [
		39.88011,
		-83.428572
	],
	"43142": [
		39.593715,
		-83.587259
	],
	"43143": [
		39.712424,
		-83.28872
	],
	"43144": [
		39.52988,
		-82.195044
	],
	"43145": [
		39.564982,
		-83.259898
	],
	"43146": [
		39.773521,
		-83.136925
	],
	"43147": [
		39.897782,
		-82.744035
	],
	"43148": [
		39.820316,
		-82.499992
	],
	"43149": [
		39.542974,
		-82.577874
	],
	"43150": [
		39.777096,
		-82.409813
	],
	"43151": [
		39.732952,
		-83.476424
	],
	"43152": [
		39.394275,
		-82.615932
	],
	"43153": [
		39.743989,
		-83.556692
	],
	"43154": [
		39.600986,
		-82.830089
	],
	"43155": [
		39.634641,
		-82.528905
	],
	"43156": [
		39.553791,
		-82.776293
	],
	"43157": [
		39.842653,
		-82.546206
	],
	"43158": [
		39.440581,
		-82.356058
	],
	"43160": [
		39.526516,
		-83.441323
	],
	"43162": [
		39.9494,
		-83.308385
	],
	"43164": [
		39.585282,
		-83.118394
	],
	"43201": [
		39.99083,
		-82.999946
	],
	"43202": [
		40.019812,
		-83.0151
	],
	"43203": [
		39.97308,
		-82.969053
	],
	"43204": [
		39.960662,
		-83.082542
	],
	"43205": [
		39.957342,
		-82.962019
	],
	"43206": [
		39.942452,
		-82.974175
	],
	"43207": [
		39.89559,
		-82.964068
	],
	"43209": [
		39.953588,
		-82.929524
	],
	"43210": [
		40.005435,
		-83.023227
	],
	"43211": [
		40.011814,
		-82.970532
	],
	"43212": [
		39.986564,
		-83.043198
	],
	"43213": [
		39.96687,
		-82.862134
	],
	"43214": [
		40.051734,
		-83.016269
	],
	"43215": [
		39.966856,
		-83.01296
	],
	"43217": [
		39.81638,
		-82.922726
	],
	"43219": [
		40.007373,
		-82.920654
	],
	"43220": [
		40.049153,
		-83.074244
	],
	"43221": [
		40.023112,
		-83.076127
	],
	"43222": [
		39.961192,
		-83.035484
	],
	"43223": [
		39.928446,
		-83.034658
	],
	"43224": [
		40.043925,
		-82.966265
	],
	"43227": [
		39.944059,
		-82.890437
	],
	"43228": [
		39.966129,
		-83.125346
	],
	"43229": [
		40.08587,
		-82.978198
	],
	"43230": [
		40.035763,
		-82.870875
	],
	"43231": [
		40.079392,
		-82.936858
	],
	"43232": [
		39.920951,
		-82.870492
	],
	"43235": [
		40.118363,
		-83.027626
	],
	"43240": [
		40.145121,
		-82.982819
	],
	"43302": [
		40.599237,
		-83.130298
	],
	"43310": [
		40.535325,
		-83.786442
	],
	"43311": [
		40.365633,
		-83.756432
	],
	"43314": [
		40.649151,
		-82.959413
	],
	"43315": [
		40.483968,
		-82.874359
	],
	"43316": [
		40.954177,
		-83.380698
	],
	"43317": [
		40.475145,
		-82.680931
	],
	"43318": [
		40.309682,
		-83.912297
	],
	"43319": [
		40.302682,
		-83.57512
	],
	"43320": [
		40.588536,
		-82.898039
	],
	"43321": [
		40.457343,
		-82.829783
	],
	"43322": [
		40.532181,
		-83.20784
	],
	"43323": [
		40.729579,
		-83.247986
	],
	"43324": [
		40.444543,
		-83.813798
	],
	"43326": [
		40.639365,
		-83.614912
	],
	"43330": [
		40.813493,
		-83.419408
	],
	"43331": [
		40.517943,
		-83.921643
	],
	"43332": [
		40.590903,
		-83.371544
	],
	"43333": [
		40.443022,
		-83.924616
	],
	"43334": [
		40.397947,
		-82.797304
	],
	"43336": [
		40.290835,
		-83.582336
	],
	"43337": [
		40.681312,
		-83.266637
	],
	"43338": [
		40.564167,
		-82.760333
	],
	"43340": [
		40.543906,
		-83.475995
	],
	"43341": [
		40.596414,
		-83.315297
	],
	"43342": [
		40.471236,
		-83.18398
	],
	"43343": [
		40.309159,
		-83.978712
	],
	"43344": [
		40.430934,
		-83.344615
	],
	"43345": [
		40.511207,
		-83.583821
	],
	"43347": [
		40.477854,
		-83.65958
	],
	"43348": [
		40.461177,
		-83.891374
	],
	"43351": [
		40.82548,
		-83.303252
	],
	"43356": [
		40.465076,
		-83.032615
	],
	"43357": [
		40.253547,
		-83.746793
	],
	"43358": [
		40.41459,
		-83.537606
	],
	"43359": [
		40.873493,
		-83.45488
	],
	"43360": [
		40.333139,
		-83.643525
	],
	"43402": [
		41.409701,
		-83.653419
	],
	"43403": [
		41.376979,
		-83.637118
	],
	"43406": [
		41.333897,
		-83.433071
	],
	"43407": [
		41.277832,
		-83.249407
	],
	"43408": [
		41.571832,
		-83.363462
	],
	"43410": [
		41.311868,
		-82.957583
	],
	"43412": [
		41.631291,
		-83.321889
	],
	"43413": [
		41.243222,
		-83.65159
	],
	"43416": [
		41.483937,
		-83.267229
	],
	"43420": [
		41.357927,
		-83.110237
	],
	"43430": [
		41.522189,
		-83.369834
	],
	"43431": [
		41.389954,
		-83.33774
	],
	"43432": [
		41.563259,
		-83.252471
	],
	"43433": [
		41.504694,
		-82.880261
	],
	"43434": [
		41.693022,
		-83.444689
	],
	"43435": [
		41.325312,
		-83.312858
	],
	"43437": [
		41.253686,
		-83.602309
	],
	"43438": [
		41.602607,
		-82.706506
	],
	"43439": [
		41.517665,
		-83.041286
	],
	"43440": [
		41.526239,
		-82.776776
	],
	"43442": [
		41.423266,
		-83.215767
	],
	"43443": [
		41.461331,
		-83.470237
	],
	"43445": [
		41.583459,
		-83.296408
	],
	"43446": [
		41.673836,
		-82.80989
	],
	"43447": [
		41.562886,
		-83.445582
	],
	"43449": [
		41.534376,
		-83.13557
	],
	"43450": [
		41.400871,
		-83.491254
	],
	"43451": [
		41.318301,
		-83.617493
	],
	"43452": [
		41.515792,
		-82.980945
	],
	"43456": [
		41.646844,
		-82.822664
	],
	"43457": [
		41.267327,
		-83.427464
	],
	"43458": [
		41.530446,
		-83.213365
	],
	"43460": [
		41.601192,
		-83.564999
	],
	"43462": [
		41.283785,
		-83.722865
	],
	"43463": [
		41.508665,
		-83.508034
	],
	"43464": [
		41.404879,
		-82.924109
	],
	"43465": [
		41.565472,
		-83.500302
	],
	"43466": [
		41.295359,
		-83.514821
	],
	"43467": [
		41.243203,
		-83.483841
	],
	"43468": [
		41.597867,
		-83.341493
	],
	"43469": [
		41.460369,
		-83.36455
	],
	"43501": [
		41.672655,
		-84.461796
	],
	"43502": [
		41.534554,
		-84.293787
	],
	"43504": [
		41.695773,
		-83.836749
	],
	"43505": [
		41.523946,
		-84.731263
	],
	"43506": [
		41.466211,
		-84.557133
	],
	"43511": [
		41.262559,
		-83.814726
	],
	"43512": [
		41.303378,
		-84.358279
	],
	"43515": [
		41.584215,
		-84.010615
	],
	"43516": [
		41.214903,
		-83.915242
	],
	"43517": [
		41.433947,
		-84.72855
	],
	"43518": [
		41.596488,
		-84.757748
	],
	"43519": [
		41.419359,
		-84.40707
	],
	"43521": [
		41.660489,
		-84.297994
	],
	"43522": [
		41.42031,
		-83.832402
	],
	"43523": [
		41.337065,
		-83.989254
	],
	"43524": [
		41.227122,
		-84.038444
	],
	"43525": [
		41.466582,
		-83.70445
	],
	"43526": [
		41.312806,
		-84.725309
	],
	"43527": [
		41.246109,
		-84.157502
	],
	"43528": [
		41.628855,
		-83.749575
	],
	"43529": [
		41.187605,
		-83.781585
	],
	"43531": [
		41.635044,
		-84.495666
	],
	"43532": [
		41.450496,
		-83.974967
	],
	"43533": [
		41.691884,
		-84.081557
	],
	"43534": [
		41.349611,
		-83.926981
	],
	"43535": [
		41.30728,
		-84.022034
	],
	"43536": [
		41.309794,
		-84.632895
	],
	"43537": [
		41.574794,
		-83.686701
	],
	"43540": [
		41.692846,
		-83.928025
	],
	"43541": [
		41.300755,
		-83.829536
	],
	"43542": [
		41.566665,
		-83.765032
	],
	"43543": [
		41.606489,
		-84.645346
	],
	"43545": [
		41.390884,
		-84.127337
	],
	"43547": [
		41.49216,
		-83.876316
	],
	"43548": [
		41.185334,
		-84.175116
	],
	"43549": [
		41.371203,
		-84.520754
	],
	"43551": [
		41.517951,
		-83.572004
	],
	"43553": [
		41.531227,
		-84.228836
	],
	"43554": [
		41.658421,
		-84.563491
	],
	"43555": [
		41.434129,
		-84.254322
	],
	"43556": [
		41.303304,
		-84.563729
	],
	"43557": [
		41.487386,
		-84.392466
	],
	"43558": [
		41.593972,
		-83.878653
	],
	"43560": [
		41.700591,
		-83.738852
	],
	"43565": [
		41.419971,
		-83.740107
	],
	"43566": [
		41.492653,
		-83.75339
	],
	"43567": [
		41.580345,
		-84.161065
	],
	"43569": [
		41.349767,
		-83.789426
	],
	"43570": [
		41.588117,
		-84.441141
	],
	"43571": [
		41.513316,
		-83.822816
	],
	"43604": [
		41.651526,
		-83.540954
	],
	"43605": [
		41.648026,
		-83.506863
	],
	"43606": [
		41.673136,
		-83.611414
	],
	"43607": [
		41.648634,
		-83.604132
	],
	"43608": [
		41.679889,
		-83.52855
	],
	"43609": [
		41.626694,
		-83.58088
	],
	"43610": [
		41.678023,
		-83.561364
	],
	"43611": [
		41.705139,
		-83.48503
	],
	"43612": [
		41.715635,
		-83.550946
	],
	"43613": [
		41.706245,
		-83.603731
	],
	"43614": [
		41.604201,
		-83.630091
	],
	"43615": [
		41.650277,
		-83.673822
	],
	"43616": [
		41.658372,
		-83.408909
	],
	"43617": [
		41.664632,
		-83.728269
	],
	"43619": [
		41.603711,
		-83.47049
	],
	"43620": [
		41.665184,
		-83.554272
	],
	"43623": [
		41.702956,
		-83.650077
	],
	"43701": [
		39.96922,
		-81.991033
	],
	"43711": [
		39.841356,
		-81.576903
	],
	"43713": [
		39.987894,
		-81.17459
	],
	"43716": [
		39.829224,
		-81.011909
	],
	"43717": [
		39.789724,
		-81.555673
	],
	"43718": [
		40.015007,
		-80.998096
	],
	"43719": [
		39.997343,
		-81.079098
	],
	"43720": [
		39.796093,
		-81.876456
	],
	"43721": [
		39.949992,
		-82.265042
	],
	"43722": [
		39.919184,
		-81.517572
	],
	"43723": [
		39.960601,
		-81.53949
	],
	"43724": [
		39.720894,
		-81.498682
	],
	"43725": [
		40.044987,
		-81.58933
	],
	"43727": [
		39.861371,
		-81.785141
	],
	"43728": [
		39.480162,
		-81.895132
	],
	"43730": [
		39.615287,
		-82.102278
	],
	"43731": [
		39.725343,
		-82.061172
	],
	"43732": [
		39.845125,
		-81.642737
	],
	"43733": [
		39.927407,
		-81.538067
	],
	"43734": [
		39.884547,
		-81.891027
	],
	"43735": [
		39.866627,
		-82.118414
	],
	"43736": [
		40.061242,
		-81.237909
	],
	"43738": [
		39.855551,
		-82.141299
	],
	"43739": [
		39.903133,
		-82.286312
	],
	"43740": [
		39.952193,
		-82.212908
	],
	"43746": [
		39.965416,
		-82.183858
	],
	"43747": [
		39.860809,
		-81.124896
	],
	"43748": [
		39.692383,
		-82.316294
	],
	"43749": [
		40.166779,
		-81.561488
	],
	"43750": [
		39.996874,
		-81.513176
	],
	"43754": [
		39.76085,
		-81.233983
	],
	"43755": [
		40.053294,
		-81.432364
	],
	"43756": [
		39.691749,
		-81.795492
	],
	"43758": [
		39.627898,
		-81.945549
	],
	"43759": [
		40.065535,
		-81.073453
	],
	"43760": [
		39.888265,
		-82.193224
	],
	"43761": [
		39.668339,
		-82.148289
	],
	"43762": [
		40.025878,
		-81.741187
	],
	"43764": [
		39.71333,
		-82.180619
	],
	"43766": [
		39.593198,
		-82.252839
	],
	"43767": [
		40.06427,
		-81.783664
	],
	"43768": [
		40.037789,
		-81.444869
	],
	"43771": [
		39.835562,
		-81.945402
	],
	"43772": [
		39.88606,
		-81.526625
	],
	"43773": [
		39.982044,
		-81.298757
	],
	"43777": [
		39.818733,
		-82.113868
	],
	"43778": [
		39.999291,
		-81.378862
	],
	"43779": [
		39.81957,
		-81.427766
	],
	"43780": [
		39.908671,
		-81.437954
	],
	"43782": [
		39.621795,
		-82.212467
	],
	"43783": [
		39.80448,
		-82.278581
	],
	"43786": [
		39.710464,
		-81.277012
	],
	"43787": [
		39.523964,
		-81.801822
	],
	"43788": [
		39.805526,
		-81.333948
	],
	"43793": [
		39.745151,
		-81.096099
	],
	"43802": [
		40.091161,
		-81.852057
	],
	"43804": [
		40.450792,
		-81.740962
	],
	"43805": [
		40.392968,
		-81.972565
	],
	"43811": [
		40.17986,
		-81.920852
	],
	"43812": [
		40.263768,
		-81.880904
	],
	"43821": [
		40.136752,
		-82.000512
	],
	"43822": [
		40.178846,
		-82.174029
	],
	"43824": [
		40.36391,
		-81.758449
	],
	"43830": [
		40.06282,
		-82.137472
	],
	"43832": [
		40.275813,
		-81.585655
	],
	"43836": [
		40.208723,
		-81.719748
	],
	"43837": [
		40.298396,
		-81.477934
	],
	"43840": [
		40.41072,
		-81.601443
	],
	"43842": [
		40.136917,
		-82.01276
	],
	"43843": [
		40.349011,
		-82.17561
	],
	"43844": [
		40.32539,
		-82.060739
	],
	"43845": [
		40.26491,
		-81.731281
	],
	"43901": [
		40.223552,
		-80.855797
	],
	"43902": [
		39.88285,
		-80.951993
	],
	"43903": [
		40.472134,
		-80.973297
	],
	"43905": [
		40.105373,
		-80.838929
	],
	"43906": [
		40.011095,
		-80.808695
	],
	"43907": [
		40.248449,
		-81.019659
	],
	"43908": [
		40.506269,
		-80.874019
	],
	"43910": [
		40.372682,
		-80.826332
	],
	"43912": [
		40.083356,
		-80.797021
	],
	"43913": [
		40.267432,
		-80.635947
	],
	"43914": [
		39.775225,
		-80.952806
	],
	"43915": [
		39.763457,
		-80.899372
	],
	"43917": [
		40.23351,
		-80.797688
	],
	"43920": [
		40.677229,
		-80.594289
	],
	"43925": [
		40.447629,
		-80.862322
	],
	"43926": [
		40.508061,
		-80.62161
	],
	"43927": [
		40.120516,
		-80.937165
	],
	"43928": [
		40.010409,
		-80.914802
	],
	"43930": [
		40.563211,
		-80.762834
	],
	"43931": [
		39.67334,
		-80.87263
	],
	"43932": [
		40.516991,
		-80.76074
	],
	"43933": [
		39.935227,
		-80.8958
	],
	"43934": [
		40.077846,
		-80.789223
	],
	"43935": [
		40.127765,
		-80.755389
	],
	"43938": [
		40.304495,
		-80.673326
	],
	"43939": [
		40.167153,
		-80.800019
	],
	"43940": [
		40.029027,
		-80.827269
	],
	"43942": [
		39.861027,
		-80.854883
	],
	"43943": [
		40.208931,
		-80.732289
	],
	"43944": [
		40.429176,
		-80.769041
	],
	"43945": [
		40.636835,
		-80.847982
	],
	"43946": [
		39.652234,
		-80.964792
	],
	"43947": [
		39.956153,
		-80.807501
	],
	"43948": [
		40.270127,
		-80.778261
	],
	"43950": [
		40.096889,
		-80.924669
	],
	"43951": [
		40.111902,
		-81.01163
	],
	"43952": [
		40.409046,
		-80.665259
	],
	"43953": [
		40.35242,
		-80.70249
	],
	"43961": [
		40.524994,
		-80.630282
	],
	"43962": [
		40.672033,
		-80.879925
	],
	"43963": [
		40.171369,
		-80.696907
	],
	"43964": [
		40.480902,
		-80.662475
	],
	"43967": [
		40.026455,
		-80.940094
	],
	"43968": [
		40.632407,
		-80.683847
	],
	"43970": [
		40.463201,
		-80.889127
	],
	"43971": [
		40.159103,
		-80.713361
	],
	"43972": [
		40.101752,
		-80.973716
	],
	"43973": [
		40.190266,
		-81.276328
	],
	"43974": [
		40.182236,
		-80.887526
	],
	"43976": [
		40.373557,
		-80.920847
	],
	"43977": [
		40.134853,
		-81.083446
	],
	"43983": [
		40.137143,
		-81.199035
	],
	"43985": [
		40.16538,
		-81.132412
	],
	"43986": [
		40.385195,
		-80.995648
	],
	"43988": [
		40.401128,
		-81.120838
	],
	"44001": [
		41.366331,
		-82.259924
	],
	"44003": [
		41.615736,
		-80.585942
	],
	"44004": [
		41.85594,
		-80.791866
	],
	"44010": [
		41.765276,
		-80.847485
	],
	"44011": [
		41.4451,
		-82.005109
	],
	"44012": [
		41.498342,
		-82.017368
	],
	"44017": [
		41.370548,
		-81.861757
	],
	"44021": [
		41.44326,
		-81.144465
	],
	"44022": [
		41.446269,
		-81.402969
	],
	"44023": [
		41.384807,
		-81.285741
	],
	"44024": [
		41.577765,
		-81.192433
	],
	"44026": [
		41.528147,
		-81.324706
	],
	"44028": [
		41.300523,
		-81.937418
	],
	"44030": [
		41.896637,
		-80.585178
	],
	"44032": [
		41.669245,
		-80.67011
	],
	"44035": [
		41.363571,
		-82.13786
	],
	"44039": [
		41.386,
		-82.024711
	],
	"44040": [
		41.535663,
		-81.410737
	],
	"44041": [
		41.7769,
		-80.949898
	],
	"44044": [
		41.266284,
		-82.04179
	],
	"44045": [
		41.748658,
		-81.284345
	],
	"44046": [
		41.542545,
		-81.068714
	],
	"44047": [
		41.727931,
		-80.735874
	],
	"44048": [
		41.850255,
		-80.639309
	],
	"44049": [
		41.266529,
		-82.305788
	],
	"44050": [
		41.248733,
		-82.1282
	],
	"44052": [
		41.459383,
		-82.164623
	],
	"44053": [
		41.426622,
		-82.225503
	],
	"44054": [
		41.4716,
		-82.090338
	],
	"44055": [
		41.434058,
		-82.134095
	],
	"44056": [
		41.314919,
		-81.501633
	],
	"44057": [
		41.760117,
		-81.060305
	],
	"44060": [
		41.67653,
		-81.328167
	],
	"44062": [
		41.451802,
		-81.03682
	],
	"44064": [
		41.598063,
		-81.032323
	],
	"44065": [
		41.475924,
		-81.221612
	],
	"44067": [
		41.316283,
		-81.542933
	],
	"44070": [
		41.415033,
		-81.918942
	],
	"44072": [
		41.471152,
		-81.32492
	],
	"44074": [
		41.289495,
		-82.231223
	],
	"44076": [
		41.530875,
		-80.823712
	],
	"44077": [
		41.697563,
		-81.20974
	],
	"44080": [
		41.359994,
		-81.046183
	],
	"44081": [
		41.763938,
		-81.143104
	],
	"44082": [
		41.761873,
		-80.567535
	],
	"44084": [
		41.671377,
		-80.899161
	],
	"44085": [
		41.603272,
		-80.874544
	],
	"44086": [
		41.675726,
		-81.058597
	],
	"44087": [
		41.313171,
		-81.438675
	],
	"44089": [
		41.392084,
		-82.377455
	],
	"44090": [
		41.167515,
		-82.228683
	],
	"44092": [
		41.599909,
		-81.468699
	],
	"44093": [
		41.530785,
		-80.614356
	],
	"44094": [
		41.610724,
		-81.379324
	],
	"44095": [
		41.652326,
		-81.441721
	],
	"44099": [
		41.549205,
		-80.983305
	],
	"44101": [
		41.489355,
		-81.667393
	],
	"44102": [
		41.479174,
		-81.740603
	],
	"44103": [
		41.519415,
		-81.642123
	],
	"44104": [
		41.48223,
		-81.626784
	],
	"44105": [
		41.449476,
		-81.630289
	],
	"44106": [
		41.505341,
		-81.605432
	],
	"44107": [
		41.483041,
		-81.801716
	],
	"44108": [
		41.544784,
		-81.607394
	],
	"44109": [
		41.447671,
		-81.694403
	],
	"44110": [
		41.569352,
		-81.564768
	],
	"44111": [
		41.458255,
		-81.788589
	],
	"44112": [
		41.535841,
		-81.574143
	],
	"44113": [
		41.483241,
		-81.697166
	],
	"44114": [
		41.520126,
		-81.678083
	],
	"44115": [
		41.493539,
		-81.671188
	],
	"44116": [
		41.473072,
		-81.853825
	],
	"44117": [
		41.570917,
		-81.52367
	],
	"44118": [
		41.502337,
		-81.556571
	],
	"44119": [
		41.58935,
		-81.547386
	],
	"44120": [
		41.473947,
		-81.579956
	],
	"44121": [
		41.526494,
		-81.532129
	],
	"44122": [
		41.469494,
		-81.512442
	],
	"44123": [
		41.604699,
		-81.524123
	],
	"44124": [
		41.500022,
		-81.465036
	],
	"44125": [
		41.405687,
		-81.609466
	],
	"44126": [
		41.441758,
		-81.852995
	],
	"44127": [
		41.472172,
		-81.650285
	],
	"44128": [
		41.439871,
		-81.538518
	],
	"44129": [
		41.390459,
		-81.7353
	],
	"44130": [
		41.376642,
		-81.787317
	],
	"44131": [
		41.382841,
		-81.650195
	],
	"44132": [
		41.606424,
		-81.497217
	],
	"44133": [
		41.313701,
		-81.74518
	],
	"44134": [
		41.380488,
		-81.700988
	],
	"44135": [
		41.426217,
		-81.819383
	],
	"44136": [
		41.311507,
		-81.811326
	],
	"44137": [
		41.409295,
		-81.562526
	],
	"44138": [
		41.373654,
		-81.923254
	],
	"44139": [
		41.383262,
		-81.444249
	],
	"44140": [
		41.487794,
		-81.931435
	],
	"44141": [
		41.299668,
		-81.616506
	],
	"44142": [
		41.399662,
		-81.834332
	],
	"44143": [
		41.553498,
		-81.477014
	],
	"44144": [
		41.437286,
		-81.739814
	],
	"44145": [
		41.449531,
		-81.930162
	],
	"44146": [
		41.381223,
		-81.529226
	],
	"44147": [
		41.318156,
		-81.679262
	],
	"44149": [
		41.315913,
		-81.856217
	],
	"44201": [
		41.02866,
		-81.184282
	],
	"44202": [
		41.315087,
		-81.338371
	],
	"44203": [
		41.020888,
		-81.628652
	],
	"44212": [
		41.244488,
		-81.828842
	],
	"44214": [
		40.951918,
		-81.999755
	],
	"44215": [
		41.069175,
		-81.895951
	],
	"44216": [
		40.945779,
		-81.581744
	],
	"44217": [
		40.952287,
		-81.913359
	],
	"44221": [
		41.139266,
		-81.474873
	],
	"44223": [
		41.169665,
		-81.531057
	],
	"44224": [
		41.176261,
		-81.436523
	],
	"44230": [
		40.964265,
		-81.687607
	],
	"44231": [
		41.302963,
		-81.070474
	],
	"44233": [
		41.249087,
		-81.737867
	],
	"44234": [
		41.325883,
		-81.152253
	],
	"44235": [
		41.031108,
		-82.116704
	],
	"44236": [
		41.246425,
		-81.449582
	],
	"44240": [
		41.132323,
		-81.332781
	],
	"44241": [
		41.242586,
		-81.347721
	],
	"44243": [
		41.14796,
		-81.341421
	],
	"44250": [
		41.020304,
		-81.437338
	],
	"44251": [
		41.029161,
		-81.927414
	],
	"44253": [
		41.166903,
		-82.032473
	],
	"44254": [
		41.04291,
		-82.014354
	],
	"44255": [
		41.286694,
		-81.229132
	],
	"44256": [
		41.139872,
		-81.860559
	],
	"44260": [
		41.035186,
		-81.338441
	],
	"44262": [
		41.139576,
		-81.436066
	],
	"44264": [
		41.22961,
		-81.540017
	],
	"44265": [
		41.035722,
		-81.253084
	],
	"44266": [
		41.16625,
		-81.208228
	],
	"44270": [
		40.960943,
		-81.774537
	],
	"44272": [
		41.089759,
		-81.180523
	],
	"44273": [
		41.027999,
		-81.877935
	],
	"44274": [
		41.098334,
		-81.732675
	],
	"44275": [
		41.101859,
		-82.102593
	],
	"44276": [
		40.93973,
		-81.836018
	],
	"44278": [
		41.106119,
		-81.424834
	],
	"44280": [
		41.240261,
		-81.927779
	],
	"44281": [
		41.059816,
		-81.741072
	],
	"44285": [
		41.159666,
		-81.071596
	],
	"44286": [
		41.233132,
		-81.643941
	],
	"44287": [
		40.938453,
		-82.102332
	],
	"44288": [
		41.239093,
		-81.076053
	],
	"44301": [
		41.04349,
		-81.524017
	],
	"44302": [
		41.089437,
		-81.538664
	],
	"44303": [
		41.104685,
		-81.536941
	],
	"44304": [
		41.083177,
		-81.507852
	],
	"44305": [
		41.075304,
		-81.461652
	],
	"44306": [
		41.039348,
		-81.483171
	],
	"44307": [
		41.069221,
		-81.546525
	],
	"44308": [
		41.081658,
		-81.517014
	],
	"44310": [
		41.105729,
		-81.494414
	],
	"44311": [
		41.064229,
		-81.520712
	],
	"44312": [
		41.01412,
		-81.443701
	],
	"44313": [
		41.130094,
		-81.573169
	],
	"44314": [
		41.041069,
		-81.560073
	],
	"44319": [
		40.98153,
		-81.527413
	],
	"44320": [
		41.07314,
		-81.582414
	],
	"44321": [
		41.088647,
		-81.652446
	],
	"44333": [
		41.16061,
		-81.630871
	],
	"44401": [
		41.02099,
		-80.938604
	],
	"44402": [
		41.381087,
		-80.845241
	],
	"44403": [
		41.240319,
		-80.582126
	],
	"44404": [
		41.324106,
		-80.556627
	],
	"44405": [
		41.077984,
		-80.592359
	],
	"44406": [
		41.01088,
		-80.770396
	],
	"44408": [
		40.886139,
		-80.688425
	],
	"44410": [
		41.346332,
		-80.72779
	],
	"44411": [
		41.036746,
		-81.036957
	],
	"44412": [
		41.094164,
		-81.023472
	],
	"44413": [
		40.844756,
		-80.548688
	],
	"44417": [
		41.436336,
		-80.663897
	],
	"44418": [
		41.307369,
		-80.60347
	],
	"44420": [
		41.177714,
		-80.682148
	],
	"44423": [
		40.74852,
		-80.895947
	],
	"44425": [
		41.170439,
		-80.573514
	],
	"44427": [
		40.709172,
		-80.949859
	],
	"44428": [
		41.436821,
		-80.573808
	],
	"44429": [
		41.097137,
		-80.979645
	],
	"44430": [
		41.240234,
		-80.908167
	],
	"44431": [
		40.851614,
		-80.749469
	],
	"44432": [
		40.745656,
		-80.765917
	],
	"44436": [
		41.058684,
		-80.535073
	],
	"44437": [
		41.15594,
		-80.729884
	],
	"44438": [
		41.239631,
		-80.530615
	],
	"44439": [
		41.455747,
		-80.956375
	],
	"44440": [
		41.141176,
		-80.802908
	],
	"44441": [
		40.756044,
		-80.550211
	],
	"44442": [
		40.966173,
		-80.546111
	],
	"44443": [
		40.933667,
		-80.604431
	],
	"44444": [
		41.172825,
		-80.973285
	],
	"44445": [
		40.849327,
		-80.622261
	],
	"44446": [
		41.189561,
		-80.749296
	],
	"44449": [
		40.975797,
		-81.037907
	],
	"44450": [
		41.4449,
		-80.83459
	],
	"44451": [
		41.079368,
		-80.868193
	],
	"44452": [
		40.947372,
		-80.664007
	],
	"44454": [
		40.920091,
		-80.558618
	],
	"44455": [
		40.772301,
		-80.610166
	],
	"44460": [
		40.899324,
		-80.870171
	],
	"44470": [
		41.30031,
		-80.972747
	],
	"44471": [
		41.051053,
		-80.590566
	],
	"44473": [
		41.254956,
		-80.649928
	],
	"44481": [
		41.176641,
		-80.902344
	],
	"44483": [
		41.263566,
		-80.816754
	],
	"44484": [
		41.234548,
		-80.747854
	],
	"44485": [
		41.240357,
		-80.847586
	],
	"44490": [
		40.896331,
		-80.768024
	],
	"44491": [
		41.36994,
		-80.963648
	],
	"44493": [
		40.825018,
		-80.888617
	],
	"44502": [
		41.082788,
		-80.639487
	],
	"44503": [
		41.099326,
		-80.649074
	],
	"44504": [
		41.123512,
		-80.654651
	],
	"44505": [
		41.129242,
		-80.622105
	],
	"44506": [
		41.093003,
		-80.626397
	],
	"44507": [
		41.074229,
		-80.655251
	],
	"44509": [
		41.108505,
		-80.696075
	],
	"44510": [
		41.122254,
		-80.673433
	],
	"44511": [
		41.069085,
		-80.696703
	],
	"44512": [
		41.025661,
		-80.668279
	],
	"44514": [
		41.000614,
		-80.606448
	],
	"44515": [
		41.102896,
		-80.761275
	],
	"44601": [
		40.918593,
		-81.128745
	],
	"44606": [
		40.734706,
		-81.800147
	],
	"44607": [
		40.689518,
		-81.025735
	],
	"44608": [
		40.656427,
		-81.592823
	],
	"44609": [
		40.917414,
		-80.990071
	],
	"44610": [
		40.559625,
		-81.799762
	],
	"44611": [
		40.610103,
		-82.074986
	],
	"44612": [
		40.633088,
		-81.476036
	],
	"44613": [
		40.711536,
		-81.607797
	],
	"44614": [
		40.889547,
		-81.576285
	],
	"44615": [
		40.564539,
		-81.074849
	],
	"44618": [
		40.770383,
		-81.681101
	],
	"44620": [
		40.578124,
		-81.210132
	],
	"44621": [
		40.4369,
		-81.297868
	],
	"44622": [
		40.546033,
		-81.482958
	],
	"44624": [
		40.60853,
		-81.662094
	],
	"44625": [
		40.763369,
		-81.003737
	],
	"44626": [
		40.688904,
		-81.381772
	],
	"44627": [
		40.663996,
		-81.836421
	],
	"44628": [
		40.534703,
		-82.168818
	],
	"44629": [
		40.349497,
		-81.453225
	],
	"44632": [
		40.963232,
		-81.313031
	],
	"44633": [
		40.629759,
		-81.935268
	],
	"44634": [
		40.837991,
		-81.041397
	],
	"44637": [
		40.48956,
		-82.039032
	],
	"44638": [
		40.642255,
		-82.145599
	],
	"44640": [
		40.985543,
		-81.150705
	],
	"44641": [
		40.857952,
		-81.245653
	],
	"44643": [
		40.638733,
		-81.302903
	],
	"44644": [
		40.687599,
		-81.1779
	],
	"44645": [
		40.909713,
		-81.718204
	],
	"44646": [
		40.814381,
		-81.497182
	],
	"44647": [
		40.797864,
		-81.565063
	],
	"44651": [
		40.628056,
		-80.9511
	],
	"44652": [
		40.900221,
		-81.326138
	],
	"44653": [
		40.436101,
		-81.370332
	],
	"44654": [
		40.537937,
		-81.870867
	],
	"44656": [
		40.569013,
		-81.334817
	],
	"44657": [
		40.740959,
		-81.092975
	],
	"44659": [
		40.694922,
		-81.702555
	],
	"44661": [
		40.595588,
		-82.113021
	],
	"44662": [
		40.71099,
		-81.555052
	],
	"44663": [
		40.459991,
		-81.452391
	],
	"44666": [
		40.848342,
		-81.638693
	],
	"44667": [
		40.833815,
		-81.766531
	],
	"44669": [
		40.788312,
		-81.150684
	],
	"44670": [
		40.762639,
		-81.188753
	],
	"44671": [
		40.646033,
		-81.365669
	],
	"44672": [
		40.920003,
		-81.025268
	],
	"44675": [
		40.502358,
		-81.253774
	],
	"44676": [
		40.690773,
		-82.033794
	],
	"44677": [
		40.87452,
		-81.858577
	],
	"44678": [
		40.566644,
		-81.349941
	],
	"44680": [
		40.606614,
		-81.544759
	],
	"44681": [
		40.508051,
		-81.66193
	],
	"44682": [
		40.397228,
		-81.405417
	],
	"44683": [
		40.364772,
		-81.325071
	],
	"44685": [
		40.955405,
		-81.424372
	],
	"44687": [
		40.537922,
		-81.719984
	],
	"44688": [
		40.683908,
		-81.255382
	],
	"44689": [
		40.64521,
		-81.659132
	],
	"44690": [
		40.613106,
		-81.693638
	],
	"44691": [
		40.805744,
		-81.98247
	],
	"44693": [
		40.301856,
		-81.186168
	],
	"44695": [
		40.442011,
		-81.170166
	],
	"44697": [
		40.612058,
		-81.424219
	],
	"44699": [
		40.277288,
		-81.280912
	],
	"44702": [
		40.799793,
		-81.37578
	],
	"44703": [
		40.810563,
		-81.381352
	],
	"44704": [
		40.800388,
		-81.340379
	],
	"44705": [
		40.834614,
		-81.331149
	],
	"44706": [
		40.753523,
		-81.418638
	],
	"44707": [
		40.761094,
		-81.34984
	],
	"44708": [
		40.817882,
		-81.435881
	],
	"44709": [
		40.842339,
		-81.386179
	],
	"44710": [
		40.789713,
		-81.425956
	],
	"44714": [
		40.836317,
		-81.358279
	],
	"44718": [
		40.847623,
		-81.451327
	],
	"44720": [
		40.903454,
		-81.433282
	],
	"44721": [
		40.892581,
		-81.332063
	],
	"44730": [
		40.767017,
		-81.265784
	],
	"44802": [
		41.045626,
		-83.419418
	],
	"44804": [
		41.105589,
		-83.534122
	],
	"44805": [
		40.872668,
		-82.317033
	],
	"44807": [
		41.059751,
		-82.87697
	],
	"44809": [
		41.133496,
		-83.288945
	],
	"44811": [
		41.246317,
		-82.846599
	],
	"44813": [
		40.599849,
		-82.529699
	],
	"44814": [
		41.324106,
		-82.47216
	],
	"44815": [
		41.246598,
		-83.239442
	],
	"44816": [
		41.330202,
		-82.352522
	],
	"44817": [
		41.204134,
		-83.545038
	],
	"44818": [
		40.998342,
		-82.989373
	],
	"44820": [
		40.817184,
		-82.974036
	],
	"44822": [
		40.556723,
		-82.398088
	],
	"44824": [
		41.383228,
		-82.805892
	],
	"44825": [
		40.954211,
		-82.943194
	],
	"44826": [
		41.24234,
		-82.477643
	],
	"44827": [
		40.822444,
		-82.75506
	],
	"44828": [
		41.231935,
		-82.860916
	],
	"44830": [
		41.167936,
		-83.398998
	],
	"44833": [
		40.710586,
		-82.793744
	],
	"44836": [
		41.237162,
		-83.062895
	],
	"44837": [
		41.021221,
		-82.472683
	],
	"44838": [
		40.771565,
		-82.256155
	],
	"44839": [
		41.380747,
		-82.55682
	],
	"44840": [
		40.78795,
		-82.178253
	],
	"44841": [
		41.251213,
		-83.30603
	],
	"44842": [
		40.649282,
		-82.224627
	],
	"44843": [
		40.689497,
		-82.407602
	],
	"44844": [
		40.992006,
		-83.260906
	],
	"44846": [
		41.319413,
		-82.605836
	],
	"44847": [
		41.230414,
		-82.712888
	],
	"44849": [
		40.809261,
		-83.130471
	],
	"44850": [
		41.035393,
		-82.684018
	],
	"44851": [
		41.109175,
		-82.391572
	],
	"44853": [
		41.055286,
		-83.303003
	],
	"44854": [
		40.943647,
		-82.867843
	],
	"44855": [
		41.106391,
		-82.591626
	],
	"44856": [
		40.793975,
		-82.856755
	],
	"44857": [
		41.216499,
		-82.577642
	],
	"44859": [
		41.021963,
		-82.330724
	],
	"44861": [
		41.239492,
		-83.147977
	],
	"44864": [
		40.667625,
		-82.320628
	],
	"44865": [
		40.993406,
		-82.676943
	],
	"44866": [
		40.924,
		-82.197783
	],
	"44867": [
		41.149035,
		-82.98222
	],
	"44870": [
		41.42828,
		-82.744814
	],
	"44874": [
		40.969458,
		-82.369734
	],
	"44875": [
		40.88999,
		-82.651686
	],
	"44878": [
		40.941616,
		-82.520733
	],
	"44880": [
		41.034597,
		-82.220133
	],
	"44881": [
		40.870018,
		-82.876041
	],
	"44882": [
		40.946679,
		-83.14022
	],
	"44883": [
		41.123331,
		-83.173911
	],
	"44887": [
		40.916196,
		-82.790658
	],
	"44889": [
		41.245882,
		-82.382433
	],
	"44890": [
		41.085172,
		-82.710562
	],
	"44901": [
		40.791707,
		-82.509404
	],
	"44902": [
		40.758156,
		-82.510589
	],
	"44903": [
		40.776344,
		-82.527634
	],
	"44904": [
		40.663724,
		-82.61444
	],
	"44905": [
		40.77808,
		-82.467189
	],
	"44906": [
		40.767349,
		-82.572626
	],
	"44907": [
		40.727662,
		-82.520406
	],
	"45001": [
		39.141445,
		-84.712238
	],
	"45002": [
		39.196717,
		-84.757565
	],
	"45003": [
		39.586583,
		-84.78647
	],
	"45005": [
		39.538522,
		-84.296051
	],
	"45011": [
		39.426562,
		-84.497608
	],
	"45013": [
		39.413632,
		-84.652679
	],
	"45014": [
		39.325714,
		-84.55239
	],
	"45015": [
		39.376803,
		-84.566788
	],
	"45030": [
		39.259888,
		-84.759577
	],
	"45032": [
		39.502773,
		-84.010203
	],
	"45033": [
		39.176783,
		-84.762971
	],
	"45034": [
		39.358891,
		-84.243425
	],
	"45036": [
		39.444049,
		-84.214131
	],
	"45039": [
		39.328643,
		-84.245766
	],
	"45040": [
		39.350783,
		-84.313198
	],
	"45041": [
		39.210452,
		-84.702418
	],
	"45042": [
		39.556885,
		-84.420158
	],
	"45044": [
		39.482404,
		-84.410243
	],
	"45050": [
		39.445354,
		-84.359186
	],
	"45051": [
		39.097961,
		-84.646609
	],
	"45052": [
		39.144456,
		-84.779062
	],
	"45053": [
		39.354057,
		-84.787824
	],
	"45054": [
		39.438829,
		-84.085062
	],
	"45056": [
		39.490929,
		-84.744187
	],
	"45062": [
		39.479663,
		-84.552961
	],
	"45064": [
		39.562041,
		-84.596591
	],
	"45065": [
		39.370229,
		-84.211218
	],
	"45066": [
		39.551157,
		-84.224414
	],
	"45067": [
		39.494819,
		-84.480997
	],
	"45068": [
		39.525173,
		-84.064072
	],
	"45069": [
		39.346695,
		-84.41348
	],
	"45070": [
		39.589695,
		-84.558089
	],
	"45101": [
		38.697011,
		-83.726747
	],
	"45102": [
		39.01719,
		-84.204345
	],
	"45103": [
		39.097086,
		-84.13448
	],
	"45106": [
		38.94502,
		-84.064915
	],
	"45107": [
		39.292197,
		-83.969291
	],
	"45111": [
		39.196499,
		-84.289827
	],
	"45112": [
		38.793092,
		-84.139912
	],
	"45113": [
		39.396971,
		-83.985801
	],
	"45115": [
		38.824132,
		-83.699155
	],
	"45118": [
		39.172249,
		-83.934069
	],
	"45120": [
		38.828417,
		-84.090026
	],
	"45121": [
		38.869746,
		-83.90352
	],
	"45122": [
		39.216745,
		-84.115369
	],
	"45123": [
		39.350021,
		-83.386108
	],
	"45130": [
		38.909434,
		-83.998645
	],
	"45131": [
		38.790338,
		-83.966938
	],
	"45132": [
		39.343919,
		-83.600257
	],
	"45133": [
		39.16185,
		-83.576231
	],
	"45135": [
		39.347615,
		-83.541912
	],
	"45140": [
		39.257271,
		-84.242049
	],
	"45142": [
		39.204555,
		-83.810822
	],
	"45144": [
		38.705934,
		-83.610309
	],
	"45145": [
		39.145329,
		-84.005165
	],
	"45146": [
		39.314119,
		-83.804201
	],
	"45147": [
		39.20512,
		-84.284277
	],
	"45148": [
		39.290218,
		-83.887266
	],
	"45150": [
		39.166379,
		-84.230308
	],
	"45152": [
		39.351487,
		-84.120225
	],
	"45153": [
		38.864534,
		-84.187265
	],
	"45154": [
		39.063432,
		-83.916821
	],
	"45155": [
		39.042506,
		-83.752161
	],
	"45156": [
		38.815161,
		-84.213826
	],
	"45157": [
		38.953739,
		-84.23017
	],
	"45158": [
		39.181131,
		-84.089913
	],
	"45159": [
		39.336834,
		-83.691741
	],
	"45160": [
		39.122876,
		-84.136621
	],
	"45162": [
		39.269737,
		-84.074728
	],
	"45164": [
		39.554033,
		-83.782167
	],
	"45166": [
		39.476597,
		-83.687759
	],
	"45167": [
		38.781664,
		-83.789733
	],
	"45168": [
		38.850496,
		-83.754643
	],
	"45169": [
		39.506479,
		-83.650882
	],
	"45171": [
		39.014545,
		-83.800276
	],
	"45172": [
		39.074472,
		-83.386883
	],
	"45174": [
		39.158525,
		-84.312214
	],
	"45176": [
		39.079262,
		-84.029729
	],
	"45177": [
		39.460731,
		-83.844295
	],
	"45202": [
		39.109377,
		-84.502571
	],
	"45203": [
		39.105294,
		-84.533529
	],
	"45204": [
		39.106537,
		-84.553193
	],
	"45205": [
		39.110038,
		-84.575206
	],
	"45206": [
		39.127331,
		-84.484374
	],
	"45207": [
		39.142068,
		-84.471335
	],
	"45208": [
		39.134746,
		-84.43443
	],
	"45209": [
		39.153027,
		-84.426614
	],
	"45211": [
		39.15609,
		-84.596637
	],
	"45212": [
		39.164165,
		-84.452177
	],
	"45213": [
		39.180791,
		-84.420062
	],
	"45214": [
		39.115007,
		-84.534356
	],
	"45215": [
		39.235281,
		-84.461941
	],
	"45216": [
		39.200913,
		-84.481745
	],
	"45217": [
		39.166056,
		-84.497807
	],
	"45218": [
		39.263764,
		-84.518217
	],
	"45219": [
		39.127376,
		-84.513064
	],
	"45220": [
		39.148783,
		-84.520309
	],
	"45223": [
		39.17081,
		-84.549528
	],
	"45224": [
		39.201067,
		-84.53169
	],
	"45225": [
		39.142809,
		-84.551212
	],
	"45226": [
		39.111687,
		-84.421674
	],
	"45227": [
		39.153237,
		-84.385795
	],
	"45229": [
		39.152732,
		-84.486801
	],
	"45230": [
		39.073748,
		-84.389281
	],
	"45231": [
		39.247497,
		-84.53483
	],
	"45232": [
		39.188263,
		-84.510096
	],
	"45233": [
		39.116908,
		-84.672574
	],
	"45236": [
		39.209809,
		-84.397282
	],
	"45237": [
		39.193036,
		-84.45225
	],
	"45238": [
		39.107658,
		-84.610282
	],
	"45239": [
		39.203625,
		-84.580623
	],
	"45240": [
		39.284509,
		-84.52933
	],
	"45241": [
		39.276362,
		-84.397108
	],
	"45242": [
		39.242803,
		-84.352996
	],
	"45243": [
		39.188557,
		-84.336021
	],
	"45244": [
		39.114249,
		-84.326468
	],
	"45245": [
		39.061125,
		-84.276136
	],
	"45246": [
		39.289592,
		-84.469214
	],
	"45247": [
		39.216693,
		-84.661108
	],
	"45248": [
		39.164302,
		-84.662538
	],
	"45249": [
		39.275264,
		-84.328367
	],
	"45251": [
		39.27464,
		-84.597876
	],
	"45252": [
		39.270192,
		-84.628137
	],
	"45255": [
		39.059554,
		-84.328333
	],
	"45301": [
		39.711329,
		-84.02221
	],
	"45302": [
		40.40591,
		-84.20915
	],
	"45303": [
		40.213971,
		-84.659636
	],
	"45304": [
		39.989273,
		-84.52531
	],
	"45305": [
		39.632188,
		-84.078557
	],
	"45306": [
		40.459234,
		-84.187139
	],
	"45307": [
		39.580814,
		-83.723592
	],
	"45308": [
		40.129279,
		-84.457368
	],
	"45309": [
		39.842677,
		-84.414725
	],
	"45310": [
		40.352937,
		-84.642673
	],
	"45311": [
		39.635221,
		-84.678305
	],
	"45312": [
		40.052155,
		-84.093025
	],
	"45314": [
		39.75008,
		-83.77625
	],
	"45315": [
		39.856992,
		-84.339077
	],
	"45316": [
		39.797001,
		-83.8256
	],
	"45317": [
		40.211018,
		-83.988585
	],
	"45318": [
		40.12907,
		-84.353716
	],
	"45319": [
		39.916364,
		-83.94306
	],
	"45320": [
		39.750639,
		-84.681424
	],
	"45321": [
		39.878597,
		-84.686054
	],
	"45322": [
		39.899781,
		-84.32783
	],
	"45323": [
		39.849966,
		-83.927619
	],
	"45324": [
		39.818854,
		-83.990896
	],
	"45325": [
		39.692609,
		-84.430204
	],
	"45326": [
		40.13991,
		-84.094457
	],
	"45327": [
		39.62876,
		-84.403005
	],
	"45328": [
		40.116196,
		-84.496233
	],
	"45330": [
		39.648272,
		-84.528668
	],
	"45331": [
		40.098606,
		-84.650546
	],
	"45332": [
		39.984569,
		-84.792227
	],
	"45333": [
		40.249465,
		-84.331773
	],
	"45334": [
		40.443271,
		-84.04345
	],
	"45335": [
		39.639799,
		-83.741205
	],
	"45336": [
		40.442745,
		-84.257263
	],
	"45337": [
		39.981474,
		-84.4226
	],
	"45338": [
		39.849751,
		-84.543549
	],
	"45339": [
		40.012759,
		-84.34203
	],
	"45340": [
		40.368571,
		-84.052152
	],
	"45341": [
		39.875585,
		-84.024458
	],
	"45342": [
		39.629338,
		-84.275969
	],
	"45344": [
		39.953874,
		-84.009617
	],
	"45345": [
		39.737813,
		-84.407471
	],
	"45346": [
		39.982115,
		-84.709956
	],
	"45347": [
		39.884266,
		-84.751489
	],
	"45348": [
		40.329157,
		-84.645464
	],
	"45349": [
		39.988479,
		-83.941593
	],
	"45350": [
		40.324339,
		-84.57374
	],
	"45351": [
		40.339414,
		-84.495154
	],
	"45352": [
		40.050123,
		-84.744283
	],
	"45353": [
		40.292575,
		-84.042717
	],
	"45354": [
		39.910552,
		-84.399687
	],
	"45356": [
		40.16284,
		-84.22821
	],
	"45358": [
		39.98658,
		-84.4877
	],
	"45359": [
		40.046535,
		-84.350706
	],
	"45360": [
		40.330576,
		-84.09102
	],
	"45361": [
		39.963712,
		-84.414821
	],
	"45362": [
		40.292481,
		-84.627731
	],
	"45363": [
		40.239309,
		-84.400067
	],
	"45365": [
		40.28374,
		-84.159773
	],
	"45368": [
		39.844915,
		-83.647979
	],
	"45369": [
		39.952673,
		-83.594162
	],
	"45370": [
		39.608378,
		-84.033025
	],
	"45371": [
		39.939544,
		-84.160639
	],
	"45372": [
		40.016003,
		-83.842304
	],
	"45373": [
		40.032528,
		-84.194575
	],
	"45377": [
		39.896083,
		-84.224285
	],
	"45378": [
		39.902924,
		-84.488721
	],
	"45380": [
		40.244498,
		-84.516917
	],
	"45381": [
		39.730685,
		-84.524354
	],
	"45382": [
		39.901521,
		-84.611919
	],
	"45383": [
		39.955577,
		-84.343208
	],
	"45384": [
		39.714974,
		-83.884442
	],
	"45385": [
		39.669076,
		-83.913955
	],
	"45387": [
		39.799356,
		-83.887616
	],
	"45388": [
		40.316916,
		-84.47814
	],
	"45389": [
		40.057169,
		-84.0276
	],
	"45390": [
		40.215185,
		-84.760567
	],
	"45402": [
		39.75936,
		-84.209094
	],
	"45403": [
		39.768856,
		-84.147428
	],
	"45404": [
		39.789502,
		-84.161815
	],
	"45405": [
		39.79216,
		-84.216028
	],
	"45406": [
		39.784214,
		-84.24108
	],
	"45409": [
		39.721305,
		-84.18797
	],
	"45410": [
		39.748047,
		-84.158124
	],
	"45414": [
		39.847871,
		-84.207558
	],
	"45415": [
		39.835581,
		-84.257387
	],
	"45416": [
		39.807155,
		-84.258107
	],
	"45417": [
		39.735295,
		-84.289429
	],
	"45418": [
		39.700189,
		-84.259933
	],
	"45419": [
		39.713376,
		-84.167179
	],
	"45420": [
		39.718818,
		-84.129169
	],
	"45424": [
		39.843141,
		-84.10963
	],
	"45426": [
		39.804457,
		-84.319725
	],
	"45428": [
		39.742877,
		-84.260635
	],
	"45429": [
		39.682913,
		-84.158883
	],
	"45430": [
		39.709674,
		-84.084844
	],
	"45431": [
		39.763835,
		-84.084204
	],
	"45432": [
		39.739492,
		-84.085195
	],
	"45433": [
		39.822971,
		-84.0484
	],
	"45434": [
		39.721385,
		-84.031824
	],
	"45439": [
		39.701313,
		-84.218908
	],
	"45440": [
		39.674725,
		-84.097808
	],
	"45449": [
		39.664159,
		-84.237989
	],
	"45458": [
		39.602399,
		-84.156363
	],
	"45459": [
		39.647433,
		-84.170598
	],
	"45502": [
		39.860825,
		-83.752812
	],
	"45503": [
		39.959574,
		-83.771782
	],
	"45504": [
		39.946844,
		-83.867277
	],
	"45505": [
		39.902038,
		-83.757349
	],
	"45506": [
		39.907948,
		-83.836862
	],
	"45601": [
		39.31206,
		-82.957071
	],
	"45612": [
		39.207036,
		-83.278831
	],
	"45613": [
		39.034216,
		-82.8509
	],
	"45614": [
		38.929704,
		-82.277275
	],
	"45616": [
		38.760962,
		-83.314324
	],
	"45617": [
		39.279646,
		-83.155641
	],
	"45618": [
		38.885494,
		-83.616413
	],
	"45619": [
		38.462544,
		-82.45018
	],
	"45620": [
		38.961597,
		-82.14217
	],
	"45621": [
		39.110788,
		-82.607744
	],
	"45622": [
		39.375004,
		-82.490842
	],
	"45623": [
		38.641686,
		-82.269786
	],
	"45624": [
		39.170223,
		-83.347016
	],
	"45628": [
		39.39098,
		-83.198042
	],
	"45629": [
		38.657569,
		-82.815894
	],
	"45630": [
		38.699141,
		-83.091559
	],
	"45631": [
		38.821751,
		-82.264305
	],
	"45634": [
		39.184362,
		-82.486496
	],
	"45636": [
		38.588056,
		-82.828153
	],
	"45638": [
		38.561186,
		-82.680265
	],
	"45640": [
		39.019728,
		-82.656314
	],
	"45642": [
		39.047033,
		-83.054463
	],
	"45644": [
		39.459532,
		-82.844762
	],
	"45645": [
		38.566353,
		-82.526994
	],
	"45646": [
		39.07517,
		-83.322786
	],
	"45647": [
		39.294341,
		-82.733029
	],
	"45648": [
		38.918087,
		-83.007686
	],
	"45650": [
		38.738293,
		-83.422328
	],
	"45651": [
		39.28542,
		-82.483478
	],
	"45652": [
		38.823821,
		-83.095018
	],
	"45653": [
		38.889635,
		-82.821976
	],
	"45654": [
		39.366498,
		-82.377618
	],
	"45656": [
		38.880772,
		-82.593729
	],
	"45657": [
		38.843669,
		-83.236462
	],
	"45658": [
		38.762928,
		-82.411555
	],
	"45659": [
		38.654972,
		-82.64113
	],
	"45660": [
		38.991356,
		-83.367015
	],
	"45661": [
		39.045633,
		-83.10822
	],
	"45662": [
		38.782086,
		-82.918349
	],
	"45663": [
		38.738787,
		-83.088782
	],
	"45669": [
		38.498413,
		-82.358442
	],
	"45671": [
		38.970254,
		-83.248012
	],
	"45672": [
		39.192718,
		-82.694823
	],
	"45673": [
		39.203898,
		-82.812023
	],
	"45674": [
		38.881577,
		-82.373969
	],
	"45678": [
		38.610443,
		-82.379581
	],
	"45679": [
		38.964573,
		-83.555915
	],
	"45680": [
		38.467808,
		-82.546829
	],
	"45681": [
		39.308342,
		-83.256236
	],
	"45682": [
		38.806931,
		-82.694911
	],
	"45684": [
		38.65143,
		-83.190675
	],
	"45685": [
		38.931803,
		-82.456541
	],
	"45686": [
		39.014153,
		-82.376835
	],
	"45688": [
		38.73108,
		-82.54324
	],
	"45690": [
		39.136727,
		-83.007782
	],
	"45692": [
		39.113937,
		-82.541066
	],
	"45693": [
		38.807103,
		-83.54029
	],
	"45694": [
		38.743875,
		-82.780883
	],
	"45695": [
		39.161543,
		-82.372654
	],
	"45696": [
		38.601172,
		-82.452085
	],
	"45697": [
		38.931585,
		-83.673684
	],
	"45698": [
		39.2858,
		-82.39173
	],
	"45701": [
		39.311963,
		-82.08602
	],
	"45710": [
		39.189862,
		-82.237676
	],
	"45711": [
		39.428321,
		-81.931975
	],
	"45714": [
		39.316984,
		-81.614345
	],
	"45715": [
		39.605069,
		-81.628021
	],
	"45716": [
		39.462856,
		-82.181731
	],
	"45719": [
		39.400532,
		-82.126627
	],
	"45721": [
		39.565488,
		-81.584377
	],
	"45723": [
		39.226272,
		-81.823487
	],
	"45724": [
		39.383437,
		-81.800411
	],
	"45727": [
		39.650083,
		-81.488178
	],
	"45729": [
		39.418373,
		-81.604397
	],
	"45732": [
		39.515733,
		-82.068357
	],
	"45734": [
		39.641144,
		-81.195652
	],
	"45735": [
		39.261797,
		-81.928258
	],
	"45740": [
		39.478084,
		-82.076689
	],
	"45741": [
		39.075065,
		-82.247077
	],
	"45742": [
		39.287076,
		-81.730393
	],
	"45743": [
		39.075298,
		-81.834846
	],
	"45744": [
		39.548767,
		-81.493983
	],
	"45745": [
		39.606169,
		-81.329638
	],
	"45746": [
		39.607107,
		-81.458824
	],
	"45750": [
		39.429949,
		-81.422175
	],
	"45760": [
		39.016845,
		-82.121701
	],
	"45761": [
		39.425764,
		-82.075264
	],
	"45764": [
		39.442495,
		-82.231417
	],
	"45766": [
		39.325638,
		-82.257391
	],
	"45767": [
		39.539275,
		-81.128173
	],
	"45768": [
		39.422646,
		-81.295089
	],
	"45769": [
		39.109284,
		-82.05104
	],
	"45770": [
		38.982608,
		-81.798272
	],
	"45771": [
		38.981548,
		-81.894511
	],
	"45772": [
		39.148706,
		-81.819169
	],
	"45773": [
		39.458516,
		-81.267304
	],
	"45775": [
		39.082882,
		-82.154233
	],
	"45776": [
		39.18141,
		-82.024066
	],
	"45778": [
		39.353532,
		-81.893066
	],
	"45779": [
		38.997704,
		-81.965907
	],
	"45780": [
		39.366438,
		-82.130881
	],
	"45782": [
		39.48765,
		-82.081032
	],
	"45784": [
		39.388308,
		-81.677855
	],
	"45786": [
		39.502663,
		-81.655053
	],
	"45787": [
		39.468248,
		-81.632005
	],
	"45788": [
		39.514987,
		-81.367568
	],
	"45789": [
		39.551276,
		-81.255011
	],
	"45801": [
		40.772863,
		-84.034098
	],
	"45804": [
		40.709622,
		-84.061155
	],
	"45805": [
		40.72777,
		-84.162772
	],
	"45806": [
		40.672435,
		-84.126166
	],
	"45807": [
		40.805996,
		-84.171653
	],
	"45808": [
		40.830588,
		-83.968617
	],
	"45809": [
		40.845494,
		-84.187163
	],
	"45810": [
		40.784394,
		-83.813286
	],
	"45812": [
		40.681854,
		-83.813861
	],
	"45813": [
		41.192303,
		-84.733158
	],
	"45814": [
		40.899318,
		-83.630161
	],
	"45816": [
		41.004457,
		-83.794042
	],
	"45817": [
		40.878759,
		-83.883975
	],
	"45819": [
		40.624016,
		-84.260393
	],
	"45820": [
		40.834949,
		-84.084
	],
	"45821": [
		41.225764,
		-84.560946
	],
	"45822": [
		40.555742,
		-84.598725
	],
	"45826": [
		40.436217,
		-84.493693
	],
	"45827": [
		40.998103,
		-84.298851
	],
	"45828": [
		40.483279,
		-84.671645
	],
	"45830": [
		40.90846,
		-84.095933
	],
	"45831": [
		41.11376,
		-84.254984
	],
	"45832": [
		40.926421,
		-84.730092
	],
	"45833": [
		40.834219,
		-84.348665
	],
	"45835": [
		40.754415,
		-83.699893
	],
	"45836": [
		40.792911,
		-83.639896
	],
	"45838": [
		40.742048,
		-84.477662
	],
	"45840": [
		41.025371,
		-83.651983
	],
	"45841": [
		40.873705,
		-83.741573
	],
	"45843": [
		40.771707,
		-83.544556
	],
	"45844": [
		40.910907,
		-84.282481
	],
	"45845": [
		40.331338,
		-84.382544
	],
	"45846": [
		40.411515,
		-84.74252
	],
	"45849": [
		41.013772,
		-84.446662
	],
	"45850": [
		40.704713,
		-83.918297
	],
	"45851": [
		41.032334,
		-84.600047
	],
	"45853": [
		40.985266,
		-84.1985
	],
	"45854": [
		40.757571,
		-83.952126
	],
	"45855": [
		41.087908,
		-84.584089
	],
	"45856": [
		41.111678,
		-83.999866
	],
	"45858": [
		41.106604,
		-83.804696
	],
	"45859": [
		40.683735,
		-83.778658
	],
	"45860": [
		40.40033,
		-84.517378
	],
	"45861": [
		41.082814,
		-84.426503
	],
	"45862": [
		40.67062,
		-84.51517
	],
	"45863": [
		40.908049,
		-84.444959
	],
	"45864": [
		41.097045,
		-84.146577
	],
	"45865": [
		40.39188,
		-84.368259
	],
	"45866": [
		40.490375,
		-84.551169
	],
	"45867": [
		40.897546,
		-83.526622
	],
	"45868": [
		40.966283,
		-83.849662
	],
	"45869": [
		40.457931,
		-84.40387
	],
	"45870": [
		40.556264,
		-83.951421
	],
	"45871": [
		40.493411,
		-84.300411
	],
	"45872": [
		41.18876,
		-83.686064
	],
	"45873": [
		41.117833,
		-84.390235
	],
	"45874": [
		40.788114,
		-84.672051
	],
	"45875": [
		41.022008,
		-84.061201
	],
	"45876": [
		40.927246,
		-84.340922
	],
	"45877": [
		40.959121,
		-83.933578
	],
	"45879": [
		41.128322,
		-84.563105
	],
	"45880": [
		41.071206,
		-84.732968
	],
	"45881": [
		40.946247,
		-83.780047
	],
	"45882": [
		40.683429,
		-84.677293
	],
	"45883": [
		40.410203,
		-84.622937
	],
	"45884": [
		40.554303,
		-84.082765
	],
	"45885": [
		40.569863,
		-84.390644
	],
	"45886": [
		40.9969,
		-84.620781
	],
	"45887": [
		40.710853,
		-84.365128
	],
	"45888": [
		40.602358,
		-84.08682
	],
	"45889": [
		41.152611,
		-83.638601
	],
	"45890": [
		40.975432,
		-83.489969
	],
	"45891": [
		40.874541,
		-84.574267
	],
	"45894": [
		40.759085,
		-84.461374
	],
	"45895": [
		40.577695,
		-84.154664
	],
	"45896": [
		40.607447,
		-83.929664
	],
	"45897": [
		40.831069,
		-83.656574
	],
	"45898": [
		40.743474,
		-84.769651
	],
	"45899": [
		40.800453,
		-84.773821
	],
	"46001": [
		40.251414,
		-85.658072
	],
	"46011": [
		40.129994,
		-85.760692
	],
	"46012": [
		40.15467,
		-85.619672
	],
	"46013": [
		40.047934,
		-85.681768
	],
	"46016": [
		40.097817,
		-85.681513
	],
	"46017": [
		40.069277,
		-85.60716
	],
	"46030": [
		40.159492,
		-86.009481
	],
	"46031": [
		40.210969,
		-86.018095
	],
	"46032": [
		39.962604,
		-86.174761
	],
	"46033": [
		39.979283,
		-86.085557
	],
	"46034": [
		40.127928,
		-86.046777
	],
	"46035": [
		40.190015,
		-86.677981
	],
	"46036": [
		40.295166,
		-85.831108
	],
	"46037": [
		39.960563,
		-85.947162
	],
	"46038": [
		39.966704,
		-86.017173
	],
	"46039": [
		40.369458,
		-86.312273
	],
	"46040": [
		39.927284,
		-85.834273
	],
	"46041": [
		40.295035,
		-86.493864
	],
	"46044": [
		40.211777,
		-85.792705
	],
	"46045": [
		40.288764,
		-86.14986
	],
	"46047": [
		40.28414,
		-85.947357
	],
	"46048": [
		39.955501,
		-85.801742
	],
	"46049": [
		40.294988,
		-86.221816
	],
	"46050": [
		40.204434,
		-86.348899
	],
	"46051": [
		40.057947,
		-85.837297
	],
	"46052": [
		40.042907,
		-86.456535
	],
	"46055": [
		39.888415,
		-85.90221
	],
	"46056": [
		39.97585,
		-85.611772
	],
	"46057": [
		40.336265,
		-86.377328
	],
	"46058": [
		40.361165,
		-86.647377
	],
	"46060": [
		40.064624,
		-85.915911
	],
	"46062": [
		40.061266,
		-86.056039
	],
	"46063": [
		40.270448,
		-85.723973
	],
	"46064": [
		39.981812,
		-85.73875
	],
	"46065": [
		40.427348,
		-86.610394
	],
	"46068": [
		40.376963,
		-86.115827
	],
	"46069": [
		40.138653,
		-86.23019
	],
	"46070": [
		40.335565,
		-85.662341
	],
	"46071": [
		40.119997,
		-86.60879
	],
	"46072": [
		40.286104,
		-86.067353
	],
	"46074": [
		40.036496,
		-86.176594
	],
	"46075": [
		40.020795,
		-86.330724
	],
	"46076": [
		40.356035,
		-85.928005
	],
	"46077": [
		39.984562,
		-86.282625
	],
	"46103": [
		39.688623,
		-86.613632
	],
	"46104": [
		39.65847,
		-85.60183
	],
	"46105": [
		39.764072,
		-86.810568
	],
	"46106": [
		39.513173,
		-86.205119
	],
	"46107": [
		39.716391,
		-86.091448
	],
	"46110": [
		39.551781,
		-85.92648
	],
	"46111": [
		39.538824,
		-86.369536
	],
	"46112": [
		39.86391,
		-86.382425
	],
	"46113": [
		39.636299,
		-86.302553
	],
	"46115": [
		39.738754,
		-85.566649
	],
	"46117": [
		39.814706,
		-85.615963
	],
	"46118": [
		39.662375,
		-86.518005
	],
	"46120": [
		39.511432,
		-86.789094
	],
	"46121": [
		39.679042,
		-86.678783
	],
	"46122": [
		39.773312,
		-86.551134
	],
	"46123": [
		39.764437,
		-86.403388
	],
	"46124": [
		39.370005,
		-85.927899
	],
	"46125": [
		39.521518,
		-86.641603
	],
	"46126": [
		39.618024,
		-85.88034
	],
	"46127": [
		39.711952,
		-85.312209
	],
	"46128": [
		39.658583,
		-86.742562
	],
	"46130": [
		39.672748,
		-85.835022
	],
	"46131": [
		39.473489,
		-86.043592
	],
	"46133": [
		39.595055,
		-85.310832
	],
	"46135": [
		39.654571,
		-86.893996
	],
	"46140": [
		39.801973,
		-85.772071
	],
	"46142": [
		39.62181,
		-86.175319
	],
	"46143": [
		39.59586,
		-86.116319
	],
	"46144": [
		39.655159,
		-85.647354
	],
	"46146": [
		39.585666,
		-85.568334
	],
	"46147": [
		39.971149,
		-86.622827
	],
	"46148": [
		39.8114,
		-85.512466
	],
	"46149": [
		39.883167,
		-86.553583
	],
	"46150": [
		39.545464,
		-85.602908
	],
	"46151": [
		39.457212,
		-86.43328
	],
	"46155": [
		39.743501,
		-85.429741
	],
	"46156": [
		39.489361,
		-85.49445
	],
	"46157": [
		39.55363,
		-86.528731
	],
	"46158": [
		39.579356,
		-86.373602
	],
	"46160": [
		39.351134,
		-86.268692
	],
	"46161": [
		39.670206,
		-85.696152
	],
	"46162": [
		39.555779,
		-85.953942
	],
	"46163": [
		39.730807,
		-85.900593
	],
	"46164": [
		39.32783,
		-86.126245
	],
	"46165": [
		39.849828,
		-86.640151
	],
	"46166": [
		39.432913,
		-86.587296
	],
	"46167": [
		39.876973,
		-86.467801
	],
	"46168": [
		39.685167,
		-86.392926
	],
	"46171": [
		39.525101,
		-86.960902
	],
	"46172": [
		39.827835,
		-86.818464
	],
	"46173": [
		39.60088,
		-85.430616
	],
	"46175": [
		39.815724,
		-86.966359
	],
	"46176": [
		39.527281,
		-85.774394
	],
	"46180": [
		39.592189,
		-86.618525
	],
	"46181": [
		39.372155,
		-86.171601
	],
	"46182": [
		39.458501,
		-85.669492
	],
	"46183": [
		39.652679,
		-86.281653
	],
	"46184": [
		39.561936,
		-86.072222
	],
	"46186": [
		39.894213,
		-85.644782
	],
	"46201": [
		39.774142,
		-86.1092
	],
	"46202": [
		39.784102,
		-86.163477
	],
	"46203": [
		39.737598,
		-86.096937
	],
	"46204": [
		39.771994,
		-86.156997
	],
	"46205": [
		39.829418,
		-86.134367
	],
	"46208": [
		39.819071,
		-86.171083
	],
	"46214": [
		39.792817,
		-86.291528
	],
	"46216": [
		39.871602,
		-86.011557
	],
	"46217": [
		39.674631,
		-86.191451
	],
	"46218": [
		39.807266,
		-86.09975
	],
	"46219": [
		39.782412,
		-86.042939
	],
	"46220": [
		39.867114,
		-86.108848
	],
	"46221": [
		39.691852,
		-86.238222
	],
	"46222": [
		39.790968,
		-86.21526
	],
	"46224": [
		39.795413,
		-86.25689
	],
	"46225": [
		39.740314,
		-86.163255
	],
	"46226": [
		39.838896,
		-86.052485
	],
	"46227": [
		39.674763,
		-86.132676
	],
	"46228": [
		39.848228,
		-86.200725
	],
	"46229": [
		39.788471,
		-85.977062
	],
	"46231": [
		39.715601,
		-86.320586
	],
	"46234": [
		39.813309,
		-86.326363
	],
	"46235": [
		39.836957,
		-85.974537
	],
	"46236": [
		39.895722,
		-85.967501
	],
	"46237": [
		39.671143,
		-86.07211
	],
	"46239": [
		39.721517,
		-85.999033
	],
	"46240": [
		39.906045,
		-86.124635
	],
	"46241": [
		39.729848,
		-86.285836
	],
	"46250": [
		39.898839,
		-86.05872
	],
	"46254": [
		39.849717,
		-86.271637
	],
	"46256": [
		39.908383,
		-86.013138
	],
	"46259": [
		39.650921,
		-85.981462
	],
	"46260": [
		39.898143,
		-86.177595
	],
	"46268": [
		39.898613,
		-86.233341
	],
	"46278": [
		39.892946,
		-86.29805
	],
	"46280": [
		39.932373,
		-86.13128
	],
	"46290": [
		39.938421,
		-86.163234
	],
	"46301": [
		41.691148,
		-86.978774
	],
	"46303": [
		41.373643,
		-87.479214
	],
	"46304": [
		41.613633,
		-87.046206
	],
	"46307": [
		41.403766,
		-87.326116
	],
	"46310": [
		41.179926,
		-87.2308
	],
	"46311": [
		41.465265,
		-87.508989
	],
	"46312": [
		41.646953,
		-87.453983
	],
	"46319": [
		41.525472,
		-87.422201
	],
	"46320": [
		41.691764,
		-87.510917
	],
	"46321": [
		41.54691,
		-87.504589
	],
	"46322": [
		41.546622,
		-87.457616
	],
	"46323": [
		41.589434,
		-87.453729
	],
	"46324": [
		41.583791,
		-87.501995
	],
	"46327": [
		41.62787,
		-87.498701
	],
	"46340": [
		41.382571,
		-86.770664
	],
	"46341": [
		41.309672,
		-87.214561
	],
	"46342": [
		41.518185,
		-87.244908
	],
	"46345": [
		41.52732,
		-86.698715
	],
	"46346": [
		41.472,
		-86.692637
	],
	"46347": [
		41.304956,
		-87.007329
	],
	"46348": [
		41.310322,
		-86.861894
	],
	"46349": [
		41.097944,
		-87.412468
	],
	"46350": [
		41.607057,
		-86.721724
	],
	"46356": [
		41.256618,
		-87.422184
	],
	"46360": [
		41.68934,
		-86.869265
	],
	"46365": [
		41.611548,
		-86.545465
	],
	"46366": [
		41.215648,
		-86.768059
	],
	"46368": [
		41.59082,
		-87.180707
	],
	"46371": [
		41.688094,
		-86.595221
	],
	"46373": [
		41.448355,
		-87.467901
	],
	"46374": [
		41.204502,
		-86.897332
	],
	"46375": [
		41.491818,
		-87.448746
	],
	"46376": [
		41.184664,
		-87.475764
	],
	"46377": [
		41.194734,
		-87.338678
	],
	"46379": [
		41.167886,
		-87.439972
	],
	"46381": [
		41.168551,
		-87.324634
	],
	"46382": [
		41.461306,
		-86.761986
	],
	"46383": [
		41.463197,
		-87.007503
	],
	"46385": [
		41.460462,
		-87.129717
	],
	"46390": [
		41.419466,
		-86.881518
	],
	"46391": [
		41.554106,
		-86.918985
	],
	"46392": [
		41.178401,
		-87.048317
	],
	"46393": [
		41.508211,
		-87.17762
	],
	"46394": [
		41.677695,
		-87.489493
	],
	"46402": [
		41.599334,
		-87.330662
	],
	"46403": [
		41.608093,
		-87.262233
	],
	"46404": [
		41.584047,
		-87.37403
	],
	"46405": [
		41.575007,
		-87.262305
	],
	"46406": [
		41.602997,
		-87.408048
	],
	"46407": [
		41.57846,
		-87.330184
	],
	"46408": [
		41.545938,
		-87.368484
	],
	"46409": [
		41.548363,
		-87.32423
	],
	"46410": [
		41.480207,
		-87.333065
	],
	"46501": [
		41.221645,
		-86.245803
	],
	"46502": [
		41.259415,
		-85.976238
	],
	"46504": [
		41.301061,
		-86.111272
	],
	"46506": [
		41.462622,
		-86.1724
	],
	"46507": [
		41.720973,
		-85.818067
	],
	"46508": [
		41.150407,
		-85.976783
	],
	"46510": [
		41.121661,
		-85.870707
	],
	"46511": [
		41.21942,
		-86.426977
	],
	"46514": [
		41.722641,
		-85.976908
	],
	"46516": [
		41.676594,
		-85.944127
	],
	"46517": [
		41.62729,
		-85.997855
	],
	"46524": [
		41.305641,
		-86.014116
	],
	"46526": [
		41.558788,
		-85.876651
	],
	"46528": [
		41.600525,
		-85.784864
	],
	"46530": [
		41.740931,
		-86.126918
	],
	"46531": [
		41.356985,
		-86.519382
	],
	"46532": [
		41.411435,
		-86.611346
	],
	"46534": [
		41.285345,
		-86.617818
	],
	"46536": [
		41.514551,
		-86.298011
	],
	"46537": [
		41.459879,
		-86.310197
	],
	"46538": [
		41.330237,
		-85.823415
	],
	"46539": [
		41.163149,
		-86.026511
	],
	"46540": [
		41.680015,
		-85.698192
	],
	"46542": [
		41.396628,
		-85.869691
	],
	"46543": [
		41.535194,
		-85.672121
	],
	"46544": [
		41.615082,
		-86.14782
	],
	"46545": [
		41.693766,
		-86.146824
	],
	"46550": [
		41.445994,
		-86.000647
	],
	"46552": [
		41.706315,
		-86.481879
	],
	"46553": [
		41.479524,
		-85.849219
	],
	"46554": [
		41.557413,
		-86.416992
	],
	"46555": [
		41.326506,
		-85.680481
	],
	"46556": [
		41.707119,
		-86.251338
	],
	"46561": [
		41.663978,
		-86.075352
	],
	"46562": [
		41.208342,
		-85.684898
	],
	"46563": [
		41.356728,
		-86.327261
	],
	"46565": [
		41.69485,
		-85.577499
	],
	"46567": [
		41.416491,
		-85.725422
	],
	"46570": [
		41.197926,
		-86.121792
	],
	"46571": [
		41.57559,
		-85.547199
	],
	"46573": [
		41.544364,
		-86.069668
	],
	"46574": [
		41.481951,
		-86.486629
	],
	"46580": [
		41.213832,
		-85.869547
	],
	"46582": [
		41.280602,
		-85.854448
	],
	"46590": [
		41.217143,
		-85.813135
	],
	"46595": [
		41.526336,
		-86.166605
	],
	"46601": [
		41.670274,
		-86.252661
	],
	"46613": [
		41.655494,
		-86.258431
	],
	"46614": [
		41.603188,
		-86.27921
	],
	"46615": [
		41.673953,
		-86.21171
	],
	"46616": [
		41.697826,
		-86.266028
	],
	"46617": [
		41.684553,
		-86.234758
	],
	"46619": [
		41.660941,
		-86.35375
	],
	"46628": [
		41.720236,
		-86.32023
	],
	"46635": [
		41.714357,
		-86.201743
	],
	"46637": [
		41.733701,
		-86.24147
	],
	"46701": [
		41.360791,
		-85.431238
	],
	"46702": [
		40.831378,
		-85.628114
	],
	"46703": [
		41.649589,
		-85.00655
	],
	"46704": [
		41.103975,
		-85.292577
	],
	"46705": [
		41.518921,
		-85.059705
	],
	"46706": [
		41.341594,
		-85.032655
	],
	"46710": [
		41.342351,
		-85.242144
	],
	"46711": [
		40.661951,
		-84.926879
	],
	"46714": [
		40.722652,
		-85.176526
	],
	"46721": [
		41.423097,
		-84.876651
	],
	"46723": [
		41.24553,
		-85.326545
	],
	"46725": [
		41.148544,
		-85.475768
	],
	"46730": [
		41.458442,
		-85.151597
	],
	"46731": [
		40.793538,
		-85.099634
	],
	"46732": [
		41.379566,
		-85.622389
	],
	"46733": [
		40.828228,
		-84.940039
	],
	"46737": [
		41.719282,
		-84.92983
	],
	"46738": [
		41.318908,
		-85.148865
	],
	"46740": [
		40.60428,
		-84.964762
	],
	"46741": [
		41.216995,
		-84.951172
	],
	"46742": [
		41.548594,
		-84.879092
	],
	"46743": [
		41.215359,
		-84.851125
	],
	"46745": [
		40.951657,
		-85.009422
	],
	"46746": [
		41.725354,
		-85.344932
	],
	"46747": [
		41.565687,
		-85.157978
	],
	"46748": [
		41.248585,
		-85.161149
	],
	"46750": [
		40.87846,
		-85.496399
	],
	"46755": [
		41.44922,
		-85.275147
	],
	"46759": [
		40.603927,
		-85.178498
	],
	"46760": [
		41.345491,
		-85.552692
	],
	"46761": [
		41.634364,
		-85.377512
	],
	"46763": [
		41.301427,
		-85.232689
	],
	"46764": [
		41.224389,
		-85.620412
	],
	"46765": [
		41.232447,
		-85.048745
	],
	"46766": [
		40.708823,
		-85.288636
	],
	"46767": [
		41.470845,
		-85.570409
	],
	"46770": [
		40.837684,
		-85.324251
	],
	"46771": [
		41.694296,
		-85.296149
	],
	"46772": [
		40.721508,
		-84.913716
	],
	"46773": [
		40.982149,
		-84.875605
	],
	"46774": [
		41.089207,
		-84.972367
	],
	"46776": [
		41.721181,
		-85.165915
	],
	"46777": [
		40.869136,
		-85.147577
	],
	"46779": [
		41.577275,
		-85.039486
	],
	"46781": [
		40.63238,
		-85.26889
	],
	"46783": [
		40.969261,
		-85.357314
	],
	"46784": [
		41.500464,
		-85.388423
	],
	"46785": [
		41.323197,
		-84.877756
	],
	"46786": [
		41.532044,
		-85.272374
	],
	"46787": [
		41.066251,
		-85.619724
	],
	"46788": [
		41.272928,
		-84.908026
	],
	"46791": [
		40.837816,
		-85.232101
	],
	"46792": [
		40.684316,
		-85.44333
	],
	"46793": [
		41.452285,
		-85.01529
	],
	"46794": [
		41.46219,
		-85.452201
	],
	"46795": [
		41.554014,
		-85.330806
	],
	"46797": [
		41.128395,
		-84.85898
	],
	"46798": [
		40.938582,
		-85.214712
	],
	"46799": [
		40.911504,
		-85.285755
	],
	"46802": [
		41.069304,
		-85.16516
	],
	"46803": [
		41.069874,
		-85.088544
	],
	"46804": [
		41.052918,
		-85.24165
	],
	"46805": [
		41.10011,
		-85.117711
	],
	"46806": [
		41.046823,
		-85.088361
	],
	"46807": [
		41.044893,
		-85.147602
	],
	"46808": [
		41.097775,
		-85.177021
	],
	"46809": [
		40.998405,
		-85.205235
	],
	"46814": [
		41.050882,
		-85.299234
	],
	"46815": [
		41.102735,
		-85.058629
	],
	"46816": [
		41.000785,
		-85.036179
	],
	"46818": [
		41.155856,
		-85.253014
	],
	"46819": [
		40.974587,
		-85.133593
	],
	"46825": [
		41.152413,
		-85.127091
	],
	"46835": [
		41.15298,
		-85.0408
	],
	"46845": [
		41.212,
		-85.108807
	],
	"46901": [
		40.531266,
		-86.169537
	],
	"46902": [
		40.437275,
		-86.094553
	],
	"46910": [
		41.043832,
		-86.036308
	],
	"46911": [
		40.637417,
		-85.945821
	],
	"46913": [
		40.503001,
		-86.503452
	],
	"46914": [
		40.628598,
		-86.094769
	],
	"46915": [
		40.477734,
		-86.38659
	],
	"46917": [
		40.626869,
		-86.475047
	],
	"46919": [
		40.594183,
		-85.869644
	],
	"46920": [
		40.464409,
		-86.494811
	],
	"46922": [
		41.13813,
		-86.413626
	],
	"46923": [
		40.607538,
		-86.644141
	],
	"46926": [
		40.887938,
		-86.049986
	],
	"46928": [
		40.405898,
		-85.682305
	],
	"46929": [
		40.554751,
		-86.476386
	],
	"46930": [
		40.407335,
		-85.571487
	],
	"46931": [
		40.947539,
		-86.26427
	],
	"46932": [
		40.597241,
		-86.250469
	],
	"46933": [
		40.479845,
		-85.582288
	],
	"46936": [
		40.484302,
		-85.927782
	],
	"46938": [
		40.459646,
		-85.626941
	],
	"46939": [
		40.992876,
		-86.400545
	],
	"46940": [
		40.690906,
		-85.689231
	],
	"46941": [
		40.823115,
		-85.688947
	],
	"46943": [
		40.975386,
		-85.84293
	],
	"46946": [
		41.04043,
		-85.728422
	],
	"46947": [
		40.759919,
		-86.376113
	],
	"46950": [
		40.888204,
		-86.364948
	],
	"46951": [
		40.947573,
		-86.105392
	],
	"46952": [
		40.599427,
		-85.629225
	],
	"46953": [
		40.519395,
		-85.645026
	],
	"46957": [
		40.388298,
		-85.495962
	],
	"46958": [
		40.821933,
		-86.117007
	],
	"46959": [
		40.620843,
		-86.107191
	],
	"46960": [
		41.161352,
		-86.535546
	],
	"46961": [
		40.76651,
		-86.191686
	],
	"46962": [
		40.988512,
		-85.768369
	],
	"46967": [
		40.694682,
		-86.195106
	],
	"46968": [
		41.175341,
		-86.546361
	],
	"46970": [
		40.760125,
		-86.061471
	],
	"46974": [
		40.951906,
		-85.933516
	],
	"46975": [
		41.075438,
		-86.250139
	],
	"46978": [
		40.856627,
		-86.512501
	],
	"46979": [
		40.429421,
		-86.275733
	],
	"46982": [
		41.063298,
		-85.882914
	],
	"46984": [
		40.667769,
		-85.830127
	],
	"46985": [
		40.950787,
		-86.573883
	],
	"46986": [
		40.497944,
		-85.819279
	],
	"46987": [
		40.568813,
		-85.765358
	],
	"46988": [
		40.877117,
		-86.234743
	],
	"46989": [
		40.448635,
		-85.481366
	],
	"46990": [
		40.897336,
		-85.731383
	],
	"46991": [
		40.628038,
		-85.51421
	],
	"46992": [
		40.787305,
		-85.826434
	],
	"46994": [
		40.667327,
		-86.25455
	],
	"46996": [
		41.062011,
		-86.657974
	],
	"46998": [
		40.567605,
		-86.349666
	],
	"47001": [
		39.072665,
		-84.965538
	],
	"47003": [
		39.559685,
		-84.834261
	],
	"47006": [
		39.291996,
		-85.215884
	],
	"47010": [
		39.501581,
		-84.848717
	],
	"47011": [
		38.88162,
		-85.076128
	],
	"47012": [
		39.427315,
		-84.983461
	],
	"47016": [
		39.372219,
		-84.890262
	],
	"47017": [
		38.935533,
		-85.185945
	],
	"47018": [
		38.996765,
		-85.086623
	],
	"47020": [
		38.819261,
		-84.923974
	],
	"47022": [
		39.2049,
		-84.951741
	],
	"47023": [
		39.080546,
		-85.381852
	],
	"47024": [
		39.476872,
		-85.199038
	],
	"47025": [
		39.165524,
		-84.866317
	],
	"47030": [
		39.424202,
		-85.132571
	],
	"47031": [
		39.124244,
		-85.156451
	],
	"47032": [
		39.086912,
		-85.043662
	],
	"47034": [
		39.203982,
		-85.327471
	],
	"47035": [
		39.309224,
		-84.905542
	],
	"47036": [
		39.3912,
		-85.245798
	],
	"47037": [
		39.169482,
		-85.325656
	],
	"47038": [
		38.850304,
		-84.84995
	],
	"47040": [
		38.922057,
		-84.941033
	],
	"47041": [
		39.234052,
		-85.083768
	],
	"47042": [
		39.01944,
		-85.255113
	],
	"47043": [
		38.790365,
		-85.090993
	],
	"47060": [
		39.301338,
		-84.885706
	],
	"47102": [
		38.765011,
		-85.792736
	],
	"47104": [
		38.540304,
		-85.421392
	],
	"47106": [
		38.4643,
		-85.89985
	],
	"47108": [
		38.640027,
		-86.248533
	],
	"47110": [
		38.098852,
		-86.185044
	],
	"47111": [
		38.466319,
		-85.632495
	],
	"47112": [
		38.195517,
		-86.162499
	],
	"47114": [
		38.285817,
		-86.084556
	],
	"47115": [
		38.348952,
		-86.209964
	],
	"47116": [
		38.324227,
		-86.62201
	],
	"47117": [
		38.106616,
		-85.967376
	],
	"47118": [
		38.310091,
		-86.49743
	],
	"47119": [
		38.371949,
		-85.881518
	],
	"47120": [
		38.460364,
		-86.18872
	],
	"47122": [
		38.30596,
		-85.984844
	],
	"47123": [
		38.267133,
		-86.479372
	],
	"47124": [
		38.371492,
		-86.010607
	],
	"47125": [
		38.4636,
		-86.313139
	],
	"47126": [
		38.547252,
		-85.776209
	],
	"47129": [
		38.31313,
		-85.7686
	],
	"47130": [
		38.332622,
		-85.696419
	],
	"47135": [
		38.048816,
		-86.074351
	],
	"47136": [
		38.235079,
		-85.966763
	],
	"47137": [
		38.168121,
		-86.390479
	],
	"47138": [
		38.682475,
		-85.584686
	],
	"47140": [
		38.384301,
		-86.370701
	],
	"47141": [
		38.547956,
		-85.612115
	],
	"47142": [
		38.084881,
		-86.213131
	],
	"47143": [
		38.468623,
		-85.768154
	],
	"47145": [
		38.329877,
		-86.306582
	],
	"47147": [
		38.592228,
		-85.543926
	],
	"47150": [
		38.28348,
		-85.847585
	],
	"47160": [
		38.164455,
		-86.050997
	],
	"47161": [
		38.321795,
		-86.103592
	],
	"47162": [
		38.545859,
		-85.460041
	],
	"47163": [
		38.533074,
		-85.669844
	],
	"47164": [
		38.413092,
		-86.095786
	],
	"47165": [
		38.503446,
		-86.007002
	],
	"47166": [
		38.306882,
		-86.167419
	],
	"47167": [
		38.61146,
		-86.095905
	],
	"47170": [
		38.685201,
		-85.844056
	],
	"47172": [
		38.399506,
		-85.774251
	],
	"47175": [
		38.376592,
		-86.568018
	],
	"47177": [
		38.589698,
		-85.791877
	],
	"47201": [
		39.158873,
		-85.993199
	],
	"47203": [
		39.230403,
		-85.83216
	],
	"47220": [
		38.876281,
		-86.049057
	],
	"47223": [
		39.050074,
		-85.472026
	],
	"47224": [
		38.888028,
		-85.215093
	],
	"47226": [
		39.282458,
		-85.869112
	],
	"47227": [
		38.867579,
		-85.654136
	],
	"47229": [
		38.807113,
		-85.86484
	],
	"47230": [
		38.79238,
		-85.625116
	],
	"47231": [
		38.900912,
		-85.494614
	],
	"47232": [
		39.112058,
		-85.789256
	],
	"47234": [
		39.377362,
		-85.7679
	],
	"47235": [
		38.991746,
		-86.136097
	],
	"47240": [
		39.305991,
		-85.478417
	],
	"47243": [
		38.668701,
		-85.482235
	],
	"47244": [
		39.219042,
		-85.70154
	],
	"47246": [
		39.299251,
		-85.767005
	],
	"47247": [
		39.059532,
		-85.888138
	],
	"47250": [
		38.815317,
		-85.351135
	],
	"47260": [
		38.836742,
		-86.197754
	],
	"47263": [
		39.30944,
		-85.330177
	],
	"47264": [
		38.979034,
		-86.250743
	],
	"47265": [
		39.014661,
		-85.629937
	],
	"47270": [
		38.839337,
		-85.722862
	],
	"47272": [
		39.411013,
		-85.621407
	],
	"47273": [
		39.07579,
		-85.736847
	],
	"47274": [
		38.966511,
		-85.937722
	],
	"47280": [
		39.296587,
		-85.950522
	],
	"47281": [
		38.788527,
		-86.106342
	],
	"47282": [
		38.982353,
		-85.610731
	],
	"47283": [
		39.173689,
		-85.588747
	],
	"47302": [
		40.126916,
		-85.382481
	],
	"47303": [
		40.271643,
		-85.377772
	],
	"47304": [
		40.236332,
		-85.459814
	],
	"47305": [
		40.194099,
		-85.385939
	],
	"47306": [
		40.202547,
		-85.405132
	],
	"47320": [
		40.271703,
		-85.272799
	],
	"47324": [
		39.741173,
		-84.851735
	],
	"47325": [
		39.691146,
		-85.020236
	],
	"47326": [
		40.54868,
		-84.967266
	],
	"47327": [
		39.827428,
		-85.175101
	],
	"47330": [
		39.786249,
		-85.022256
	],
	"47331": [
		39.624084,
		-85.157338
	],
	"47334": [
		40.118682,
		-85.524594
	],
	"47335": [
		39.812537,
		-85.205175
	],
	"47336": [
		40.386666,
		-85.21036
	],
	"47337": [
		39.802476,
		-85.437276
	],
	"47338": [
		40.342384,
		-85.337455
	],
	"47339": [
		39.938777,
		-85.079129
	],
	"47340": [
		40.180757,
		-85.133663
	],
	"47341": [
		39.97232,
		-84.891734
	],
	"47342": [
		40.32858,
		-85.507983
	],
	"47344": [
		39.878307,
		-85.465383
	],
	"47345": [
		39.893863,
		-85.06018
	],
	"47346": [
		39.931638,
		-85.168192
	],
	"47348": [
		40.466214,
		-85.340374
	],
	"47351": [
		39.906726,
		-85.524555
	],
	"47352": [
		39.79572,
		-85.367066
	],
	"47353": [
		39.623111,
		-84.925152
	],
	"47354": [
		40.040842,
		-85.192539
	],
	"47355": [
		40.044174,
		-84.927052
	],
	"47356": [
		40.031458,
		-85.507425
	],
	"47357": [
		39.751359,
		-85.146917
	],
	"47358": [
		40.057341,
		-85.112956
	],
	"47359": [
		40.551281,
		-85.283667
	],
	"47360": [
		40.011265,
		-85.258203
	],
	"47361": [
		40.00419,
		-85.385059
	],
	"47362": [
		39.930459,
		-85.36958
	],
	"47367": [
		40.082648,
		-85.387219
	],
	"47368": [
		40.182196,
		-85.194189
	],
	"47369": [
		40.507343,
		-85.142062
	],
	"47371": [
		40.418997,
		-84.962799
	],
	"47373": [
		40.337508,
		-85.160845
	],
	"47374": [
		39.832079,
		-84.889699
	],
	"47380": [
		40.286745,
		-85.030029
	],
	"47381": [
		40.381786,
		-84.866884
	],
	"47382": [
		40.236391,
		-84.917484
	],
	"47383": [
		40.141861,
		-85.266121
	],
	"47384": [
		39.909241,
		-85.550892
	],
	"47385": [
		39.832905,
		-85.446008
	],
	"47386": [
		40.055073,
		-85.385654
	],
	"47387": [
		39.838465,
		-85.298534
	],
	"47388": [
		40.004482,
		-85.443439
	],
	"47390": [
		40.205668,
		-84.846428
	],
	"47393": [
		39.962996,
		-85.003691
	],
	"47394": [
		40.167974,
		-84.987308
	],
	"47396": [
		40.189183,
		-85.517178
	],
	"47401": [
		39.102298,
		-86.442832
	],
	"47403": [
		39.085219,
		-86.61234
	],
	"47404": [
		39.219531,
		-86.591196
	],
	"47405": [
		39.168209,
		-86.518614
	],
	"47406": [
		39.177797,
		-86.515448
	],
	"47408": [
		39.229815,
		-86.467254
	],
	"47420": [
		38.913158,
		-86.548919
	],
	"47421": [
		38.863494,
		-86.45223
	],
	"47424": [
		39.020048,
		-86.882428
	],
	"47427": [
		39.232829,
		-87.016135
	],
	"47429": [
		39.273303,
		-86.615937
	],
	"47431": [
		39.236601,
		-86.902939
	],
	"47432": [
		38.485527,
		-86.641906
	],
	"47433": [
		39.355787,
		-86.641547
	],
	"47434": [
		39.011912,
		-86.547286
	],
	"47436": [
		38.954149,
		-86.385977
	],
	"47437": [
		38.714743,
		-86.676968
	],
	"47438": [
		39.158915,
		-87.187359
	],
	"47441": [
		39.044695,
		-87.165501
	],
	"47443": [
		38.958302,
		-87.100061
	],
	"47446": [
		38.747201,
		-86.518136
	],
	"47448": [
		39.17953,
		-86.235511
	],
	"47449": [
		38.92713,
		-87.003467
	],
	"47451": [
		38.892959,
		-86.52355
	],
	"47452": [
		38.647143,
		-86.43343
	],
	"47453": [
		38.94163,
		-86.775709
	],
	"47454": [
		38.510025,
		-86.451821
	],
	"47455": [
		39.316501,
		-86.956155
	],
	"47456": [
		39.465239,
		-86.691333
	],
	"47457": [
		38.909139,
		-86.90475
	],
	"47458": [
		39.070329,
		-86.507227
	],
	"47459": [
		39.112793,
		-86.749576
	],
	"47460": [
		39.285969,
		-86.792025
	],
	"47462": [
		38.958323,
		-86.647567
	],
	"47464": [
		39.299803,
		-86.649995
	],
	"47465": [
		39.047972,
		-87.034871
	],
	"47467": [
		38.767864,
		-86.344361
	],
	"47468": [
		39.270832,
		-86.392485
	],
	"47469": [
		38.6376,
		-86.599153
	],
	"47470": [
		38.818254,
		-86.637138
	],
	"47471": [
		39.143294,
		-87.005186
	],
	"47501": [
		38.66206,
		-87.173647
	],
	"47512": [
		38.783522,
		-87.320652
	],
	"47513": [
		38.304258,
		-86.714111
	],
	"47514": [
		38.1562,
		-86.586209
	],
	"47515": [
		38.183913,
		-86.703982
	],
	"47516": [
		38.771006,
		-87.419265
	],
	"47519": [
		38.602659,
		-86.992661
	],
	"47520": [
		37.944942,
		-86.668258
	],
	"47521": [
		38.408491,
		-86.721023
	],
	"47522": [
		38.89232,
		-86.816735
	],
	"47523": [
		38.178794,
		-87.025759
	],
	"47524": [
		38.49477,
		-87.610887
	],
	"47525": [
		38.032359,
		-86.559701
	],
	"47527": [
		38.468858,
		-86.785924
	],
	"47528": [
		38.833175,
		-87.253351
	],
	"47529": [
		38.854967,
		-87.080001
	],
	"47531": [
		38.03971,
		-86.851428
	],
	"47532": [
		38.221348,
		-86.860563
	],
	"47535": [
		38.872348,
		-87.30767
	],
	"47536": [
		38.11229,
		-86.836519
	],
	"47537": [
		38.074167,
		-87.036126
	],
	"47541": [
		38.235278,
		-87.046164
	],
	"47542": [
		38.296585,
		-86.966599
	],
	"47546": [
		38.418779,
		-86.932557
	],
	"47550": [
		38.067186,
		-86.921311
	],
	"47551": [
		38.114113,
		-86.569572
	],
	"47552": [
		38.114551,
		-86.999676
	],
	"47553": [
		38.660781,
		-86.904069
	],
	"47557": [
		38.578834,
		-87.342777
	],
	"47558": [
		38.646137,
		-87.040439
	],
	"47561": [
		38.863914,
		-87.438327
	],
	"47562": [
		38.833089,
		-86.973432
	],
	"47564": [
		38.483041,
		-87.093828
	],
	"47567": [
		38.4627,
		-87.305019
	],
	"47568": [
		38.764087,
		-87.102429
	],
	"47574": [
		37.950036,
		-86.562127
	],
	"47575": [
		38.317808,
		-86.804462
	],
	"47576": [
		38.176996,
		-86.617343
	],
	"47577": [
		38.152526,
		-86.808938
	],
	"47578": [
		38.90234,
		-87.193521
	],
	"47579": [
		38.110937,
		-86.915134
	],
	"47580": [
		38.355203,
		-86.767156
	],
	"47581": [
		38.655694,
		-86.7626
	],
	"47584": [
		38.255502,
		-87.259526
	],
	"47585": [
		38.26835,
		-87.158083
	],
	"47586": [
		38.039096,
		-86.701995
	],
	"47588": [
		38.072389,
		-86.778403
	],
	"47590": [
		38.360628,
		-87.100361
	],
	"47591": [
		38.628561,
		-87.501485
	],
	"47596": [
		38.866496,
		-87.227734
	],
	"47597": [
		38.654452,
		-87.298744
	],
	"47598": [
		38.38704,
		-87.211447
	],
	"47601": [
		38.051443,
		-87.254533
	],
	"47610": [
		38.065322,
		-87.409527
	],
	"47611": [
		38.027918,
		-87.057458
	],
	"47612": [
		38.193026,
		-87.69924
	],
	"47613": [
		38.158948,
		-87.417471
	],
	"47615": [
		37.96966,
		-86.963824
	],
	"47616": [
		38.240052,
		-87.890844
	],
	"47619": [
		38.183748,
		-87.308139
	],
	"47620": [
		37.931959,
		-87.905711
	],
	"47630": [
		37.952897,
		-87.34647
	],
	"47631": [
		38.109131,
		-87.901792
	],
	"47633": [
		38.175907,
		-87.787892
	],
	"47634": [
		37.939468,
		-87.182452
	],
	"47635": [
		37.883458,
		-87.100911
	],
	"47637": [
		38.135734,
		-87.151319
	],
	"47638": [
		38.064381,
		-87.777636
	],
	"47639": [
		38.176143,
		-87.572939
	],
	"47640": [
		38.478176,
		-87.484032
	],
	"47648": [
		38.248647,
		-87.550882
	],
	"47649": [
		38.353484,
		-87.451209
	],
	"47654": [
		38.249505,
		-87.392292
	],
	"47660": [
		38.296067,
		-87.328127
	],
	"47665": [
		38.27667,
		-87.722673
	],
	"47666": [
		38.417797,
		-87.600469
	],
	"47670": [
		38.344906,
		-87.584785
	],
	"47683": [
		38.276783,
		-87.376982
	],
	"47708": [
		37.974624,
		-87.573265
	],
	"47710": [
		38.025505,
		-87.575809
	],
	"47711": [
		38.015301,
		-87.536743
	],
	"47712": [
		37.926457,
		-87.665531
	],
	"47713": [
		37.954531,
		-87.559175
	],
	"47714": [
		37.956614,
		-87.521291
	],
	"47715": [
		37.972431,
		-87.479646
	],
	"47720": [
		38.062897,
		-87.641573
	],
	"47725": [
		38.106329,
		-87.524939
	],
	"47802": [
		39.351585,
		-87.404885
	],
	"47803": [
		39.466092,
		-87.307322
	],
	"47804": [
		39.497812,
		-87.389953
	],
	"47805": [
		39.546274,
		-87.326483
	],
	"47807": [
		39.472935,
		-87.403423
	],
	"47809": [
		39.471249,
		-87.410106
	],
	"47832": [
		39.880882,
		-87.258433
	],
	"47833": [
		39.358609,
		-86.975238
	],
	"47834": [
		39.525549,
		-87.121971
	],
	"47836": [
		39.646104,
		-87.179079
	],
	"47837": [
		39.627224,
		-87.114906
	],
	"47838": [
		38.961773,
		-87.383679
	],
	"47840": [
		39.408055,
		-87.056514
	],
	"47841": [
		39.273899,
		-87.114103
	],
	"47842": [
		39.678584,
		-87.463596
	],
	"47846": [
		39.381475,
		-87.193771
	],
	"47847": [
		39.831343,
		-87.485836
	],
	"47848": [
		39.042043,
		-87.261971
	],
	"47849": [
		39.195304,
		-87.56374
	],
	"47850": [
		39.251931,
		-87.435782
	],
	"47853": [
		39.5382,
		-87.072828
	],
	"47854": [
		39.803019,
		-87.403057
	],
	"47855": [
		39.189827,
		-87.304098
	],
	"47857": [
		39.524158,
		-87.091111
	],
	"47858": [
		39.262171,
		-87.224587
	],
	"47859": [
		39.88184,
		-87.172196
	],
	"47860": [
		39.721857,
		-87.330273
	],
	"47861": [
		39.073459,
		-87.570355
	],
	"47862": [
		39.767091,
		-87.342366
	],
	"47863": [
		39.589125,
		-87.454348
	],
	"47865": [
		39.020999,
		-87.391428
	],
	"47866": [
		39.292406,
		-87.321116
	],
	"47868": [
		39.411073,
		-86.902594
	],
	"47869": [
		39.273917,
		-87.496713
	],
	"47871": [
		39.38968,
		-87.299875
	],
	"47872": [
		39.753541,
		-87.153112
	],
	"47874": [
		39.628499,
		-87.270746
	],
	"47876": [
		39.516551,
		-87.458295
	],
	"47879": [
		39.197692,
		-87.378686
	],
	"47880": [
		39.599748,
		-87.418844
	],
	"47881": [
		39.48593,
		-87.192415
	],
	"47882": [
		39.091315,
		-87.410855
	],
	"47884": [
		39.612406,
		-87.448085
	],
	"47885": [
		39.510414,
		-87.477056
	],
	"47901": [
		40.417778,
		-86.889633
	],
	"47904": [
		40.438632,
		-86.87692
	],
	"47905": [
		40.420015,
		-86.766044
	],
	"47906": [
		40.479649,
		-86.989218
	],
	"47907": [
		40.424395,
		-86.915485
	],
	"47909": [
		40.324563,
		-86.896302
	],
	"47916": [
		39.983646,
		-87.05543
	],
	"47917": [
		40.466838,
		-87.473426
	],
	"47918": [
		40.298678,
		-87.198005
	],
	"47920": [
		40.540759,
		-86.833864
	],
	"47921": [
		40.477151,
		-87.375376
	],
	"47922": [
		40.876948,
		-87.348911
	],
	"47923": [
		40.610401,
		-86.940003
	],
	"47924": [
		40.487945,
		-86.762846
	],
	"47925": [
		40.878281,
		-86.748403
	],
	"47926": [
		40.780384,
		-86.595516
	],
	"47928": [
		39.921337,
		-87.472313
	],
	"47929": [
		40.670159,
		-86.91276
	],
	"47930": [
		40.237087,
		-86.742355
	],
	"47932": [
		40.134328,
		-87.415241
	],
	"47933": [
		40.038913,
		-86.896849
	],
	"47940": [
		40.117577,
		-86.746634
	],
	"47941": [
		40.376134,
		-86.773975
	],
	"47942": [
		40.686285,
		-87.444303
	],
	"47943": [
		41.063383,
		-87.273449
	],
	"47944": [
		40.616471,
		-87.330263
	],
	"47946": [
		40.981738,
		-86.868425
	],
	"47948": [
		40.777015,
		-87.281735
	],
	"47949": [
		40.06054,
		-87.137329
	],
	"47950": [
		40.802441,
		-86.654857
	],
	"47951": [
		40.789254,
		-87.444426
	],
	"47952": [
		39.959636,
		-87.299105
	],
	"47954": [
		39.899963,
		-86.8185
	],
	"47955": [
		40.196331,
		-86.861865
	],
	"47957": [
		41.086146,
		-86.874731
	],
	"47958": [
		40.164219,
		-87.142399
	],
	"47959": [
		40.862566,
		-86.900583
	],
	"47960": [
		40.779015,
		-86.751024
	],
	"47963": [
		40.984169,
		-87.431931
	],
	"47964": [
		40.95212,
		-87.298642
	],
	"47965": [
		39.954454,
		-86.920264
	],
	"47966": [
		39.88582,
		-87.396984
	],
	"47967": [
		40.196681,
		-87.001633
	],
	"47968": [
		39.959518,
		-86.749957
	],
	"47969": [
		40.205717,
		-87.148731
	],
	"47970": [
		40.46212,
		-87.143054
	],
	"47971": [
		40.532018,
		-87.233923
	],
	"47974": [
		40.042921,
		-87.480363
	],
	"47975": [
		40.449132,
		-87.253258
	],
	"47977": [
		40.755909,
		-87.164567
	],
	"47978": [
		40.986173,
		-87.112979
	],
	"47980": [
		40.752294,
		-86.909348
	],
	"47981": [
		40.245025,
		-86.930413
	],
	"47982": [
		40.197348,
		-87.527069
	],
	"47983": [
		40.279131,
		-86.767288
	],
	"47987": [
		40.125792,
		-87.23303
	],
	"47989": [
		39.890345,
		-87.04904
	],
	"47990": [
		40.061841,
		-87.054281
	],
	"47991": [
		40.284444,
		-87.463075
	],
	"47992": [
		40.319373,
		-87.048999
	],
	"47993": [
		40.309014,
		-87.412707
	],
	"47994": [
		40.169249,
		-87.062127
	],
	"47995": [
		40.761189,
		-87.030109
	],
	"47997": [
		40.667696,
		-86.723596
	],
	"48001": [
		42.639231,
		-82.581698
	],
	"48002": [
		42.935043,
		-82.916493
	],
	"48003": [
		42.93024,
		-83.039995
	],
	"48005": [
		42.850742,
		-82.923828
	],
	"48006": [
		43.083019,
		-82.691035
	],
	"48009": [
		42.544048,
		-83.217653
	],
	"48014": [
		43.025719,
		-82.931553
	],
	"48015": [
		42.480497,
		-83.027149
	],
	"48017": [
		42.53669,
		-83.150367
	],
	"48021": [
		42.46608,
		-82.946341
	],
	"48022": [
		43.023396,
		-82.802404
	],
	"48023": [
		42.704385,
		-82.658852
	],
	"48025": [
		42.520357,
		-83.264824
	],
	"48026": [
		42.537633,
		-82.946742
	],
	"48027": [
		42.944289,
		-82.694041
	],
	"48028": [
		42.580209,
		-82.61662
	],
	"48030": [
		42.461924,
		-83.097689
	],
	"48032": [
		43.133203,
		-82.596952
	],
	"48033": [
		42.459322,
		-83.293205
	],
	"48034": [
		42.496949,
		-83.291078
	],
	"48035": [
		42.5566,
		-82.907589
	],
	"48036": [
		42.597045,
		-82.913144
	],
	"48038": [
		42.606146,
		-82.937475
	],
	"48039": [
		42.692907,
		-82.546478
	],
	"48040": [
		42.910313,
		-82.480603
	],
	"48041": [
		42.937257,
		-82.809536
	],
	"48042": [
		42.683619,
		-82.909486
	],
	"48043": [
		42.598055,
		-82.881506
	],
	"48044": [
		42.650226,
		-82.928905
	],
	"48045": [
		42.586409,
		-82.818113
	],
	"48047": [
		42.673906,
		-82.774086
	],
	"48048": [
		42.745747,
		-82.79587
	],
	"48049": [
		43.040458,
		-82.57104
	],
	"48050": [
		42.787537,
		-82.799467
	],
	"48051": [
		42.693641,
		-82.821001
	],
	"48054": [
		42.770358,
		-82.528976
	],
	"48059": [
		43.087276,
		-82.49449
	],
	"48060": [
		42.980388,
		-82.461014
	],
	"48062": [
		42.852495,
		-82.796471
	],
	"48063": [
		42.859332,
		-82.683111
	],
	"48064": [
		42.764617,
		-82.666777
	],
	"48065": [
		42.845195,
		-83.03929
	],
	"48066": [
		42.507586,
		-82.936582
	],
	"48067": [
		42.490558,
		-83.137524
	],
	"48069": [
		42.471325,
		-83.144332
	],
	"48070": [
		42.481899,
		-83.168088
	],
	"48071": [
		42.507266,
		-83.103371
	],
	"48072": [
		42.497902,
		-83.185859
	],
	"48073": [
		42.519204,
		-83.164362
	],
	"48074": [
		42.950223,
		-82.561555
	],
	"48075": [
		42.462064,
		-83.230398
	],
	"48076": [
		42.497517,
		-83.230874
	],
	"48079": [
		42.858849,
		-82.548404
	],
	"48080": [
		42.464424,
		-82.896175
	],
	"48081": [
		42.494669,
		-82.895039
	],
	"48082": [
		42.528022,
		-82.887195
	],
	"48083": [
		42.557017,
		-83.116856
	],
	"48084": [
		42.560633,
		-83.175706
	],
	"48085": [
		42.604032,
		-83.122111
	],
	"48088": [
		42.515645,
		-82.982991
	],
	"48089": [
		42.468096,
		-82.993857
	],
	"48091": [
		42.468168,
		-83.057986
	],
	"48092": [
		42.513593,
		-83.058938
	],
	"48093": [
		42.51589,
		-83.016483
	],
	"48094": [
		42.733823,
		-83.048737
	],
	"48095": [
		42.778744,
		-83.048072
	],
	"48096": [
		42.762151,
		-82.92047
	],
	"48097": [
		43.121947,
		-82.827417
	],
	"48098": [
		42.598433,
		-83.17845
	],
	"48101": [
		42.259473,
		-83.21039
	],
	"48103": [
		42.26135,
		-83.846458
	],
	"48104": [
		42.263484,
		-83.71512
	],
	"48105": [
		42.327634,
		-83.696444
	],
	"48108": [
		42.221694,
		-83.732265
	],
	"48109": [
		42.289187,
		-83.70878
	],
	"48111": [
		42.177312,
		-83.488444
	],
	"48114": [
		42.571753,
		-83.749573
	],
	"48116": [
		42.505744,
		-83.782892
	],
	"48117": [
		42.050259,
		-83.410188
	],
	"48118": [
		42.312244,
		-84.03402
	],
	"48120": [
		42.306327,
		-83.176211
	],
	"48122": [
		42.278607,
		-83.182255
	],
	"48124": [
		42.298036,
		-83.24761
	],
	"48125": [
		42.277334,
		-83.264832
	],
	"48126": [
		42.32579,
		-83.183213
	],
	"48127": [
		42.335793,
		-83.283296
	],
	"48128": [
		42.320411,
		-83.259969
	],
	"48130": [
		42.364141,
		-83.90936
	],
	"48131": [
		41.966485,
		-83.66945
	],
	"48133": [
		41.782381,
		-83.486028
	],
	"48134": [
		42.106693,
		-83.296156
	],
	"48135": [
		42.324384,
		-83.341212
	],
	"48137": [
		42.471975,
		-84.074565
	],
	"48138": [
		42.133978,
		-83.153921
	],
	"48139": [
		42.452452,
		-83.80605
	],
	"48140": [
		41.882184,
		-83.580507
	],
	"48141": [
		42.293969,
		-83.320074
	],
	"48143": [
		42.459978,
		-83.851969
	],
	"48144": [
		41.752485,
		-83.6287
	],
	"48145": [
		41.844247,
		-83.45997
	],
	"48146": [
		42.243291,
		-83.181258
	],
	"48150": [
		42.371604,
		-83.376788
	],
	"48152": [
		42.424935,
		-83.374264
	],
	"48154": [
		42.397183,
		-83.372319
	],
	"48157": [
		41.814624,
		-83.438215
	],
	"48158": [
		42.155695,
		-84.029259
	],
	"48159": [
		42.019159,
		-83.547956
	],
	"48160": [
		42.078164,
		-83.674971
	],
	"48161": [
		41.907196,
		-83.472457
	],
	"48162": [
		41.960425,
		-83.429323
	],
	"48164": [
		42.124571,
		-83.386866
	],
	"48165": [
		42.501565,
		-83.616922
	],
	"48166": [
		41.982805,
		-83.294714
	],
	"48167": [
		42.432315,
		-83.524658
	],
	"48168": [
		42.405262,
		-83.540498
	],
	"48169": [
		42.461925,
		-83.947382
	],
	"48170": [
		42.367689,
		-83.534306
	],
	"48173": [
		42.073679,
		-83.212774
	],
	"48174": [
		42.234298,
		-83.394324
	],
	"48176": [
		42.136836,
		-83.82925
	],
	"48177": [
		41.803955,
		-83.580926
	],
	"48178": [
		42.443768,
		-83.656872
	],
	"48179": [
		42.035092,
		-83.25545
	],
	"48180": [
		42.225283,
		-83.267691
	],
	"48182": [
		41.789858,
		-83.583849
	],
	"48183": [
		42.131459,
		-83.217792
	],
	"48184": [
		42.274479,
		-83.395623
	],
	"48185": [
		42.333901,
		-83.384209
	],
	"48186": [
		42.293764,
		-83.370739
	],
	"48187": [
		42.325573,
		-83.483576
	],
	"48188": [
		42.283886,
		-83.481933
	],
	"48189": [
		42.412336,
		-83.782854
	],
	"48190": [
		42.131536,
		-83.593807
	],
	"48191": [
		42.121629,
		-83.57059
	],
	"48192": [
		42.208455,
		-83.161498
	],
	"48193": [
		42.173282,
		-83.209837
	],
	"48195": [
		42.204975,
		-83.206511
	],
	"48197": [
		42.194034,
		-83.639984
	],
	"48198": [
		42.275075,
		-83.58634
	],
	"48201": [
		42.347021,
		-83.060184
	],
	"48202": [
		42.374786,
		-83.077718
	],
	"48203": [
		42.420736,
		-83.104338
	],
	"48204": [
		42.365812,
		-83.142935
	],
	"48205": [
		42.433156,
		-82.981142
	],
	"48206": [
		42.375123,
		-83.107897
	],
	"48207": [
		42.3496,
		-83.018847
	],
	"48208": [
		42.348491,
		-83.091937
	],
	"48209": [
		42.306083,
		-83.117655
	],
	"48210": [
		42.336212,
		-83.128331
	],
	"48211": [
		42.381347,
		-83.045733
	],
	"48212": [
		42.409721,
		-83.056394
	],
	"48213": [
		42.397931,
		-82.995213
	],
	"48214": [
		42.365116,
		-82.987644
	],
	"48215": [
		42.375051,
		-82.954344
	],
	"48216": [
		42.326485,
		-83.078746
	],
	"48217": [
		42.277651,
		-83.155078
	],
	"48218": [
		42.272709,
		-83.126672
	],
	"48219": [
		42.425328,
		-83.251428
	],
	"48220": [
		42.458066,
		-83.135213
	],
	"48221": [
		42.427,
		-83.148609
	],
	"48223": [
		42.393453,
		-83.246327
	],
	"48224": [
		42.410693,
		-82.941265
	],
	"48225": [
		42.438984,
		-82.92961
	],
	"48226": [
		42.331542,
		-83.050267
	],
	"48227": [
		42.387249,
		-83.192592
	],
	"48228": [
		42.355455,
		-83.217014
	],
	"48229": [
		42.250559,
		-83.142867
	],
	"48230": [
		42.382395,
		-82.921842
	],
	"48233": [
		42.323697,
		-83.061662
	],
	"48234": [
		42.431197,
		-83.039501
	],
	"48235": [
		42.427058,
		-83.194803
	],
	"48236": [
		42.425373,
		-82.893194
	],
	"48237": [
		42.464968,
		-83.18242
	],
	"48238": [
		42.396286,
		-83.141352
	],
	"48239": [
		42.376046,
		-83.283174
	],
	"48240": [
		42.42446,
		-83.3013
	],
	"48242": [
		42.221732,
		-83.354157
	],
	"48243": [
		42.329975,
		-83.039506
	],
	"48301": [
		42.5424,
		-83.282168
	],
	"48302": [
		42.585108,
		-83.293467
	],
	"48304": [
		42.588866,
		-83.233152
	],
	"48306": [
		42.724318,
		-83.147306
	],
	"48307": [
		42.659316,
		-83.122679
	],
	"48309": [
		42.657213,
		-83.186577
	],
	"48310": [
		42.563435,
		-83.068397
	],
	"48312": [
		42.558228,
		-83.008926
	],
	"48313": [
		42.600651,
		-83.002903
	],
	"48314": [
		42.612074,
		-83.053489
	],
	"48315": [
		42.671835,
		-82.997399
	],
	"48316": [
		42.690173,
		-83.057244
	],
	"48317": [
		42.644844,
		-83.051975
	],
	"48320": [
		42.611935,
		-83.338092
	],
	"48322": [
		42.537824,
		-83.384526
	],
	"48323": [
		42.570804,
		-83.377909
	],
	"48324": [
		42.595022,
		-83.39123
	],
	"48326": [
		42.688246,
		-83.244075
	],
	"48327": [
		42.636933,
		-83.409987
	],
	"48328": [
		42.646423,
		-83.359184
	],
	"48329": [
		42.687016,
		-83.388622
	],
	"48331": [
		42.502486,
		-83.408936
	],
	"48334": [
		42.504694,
		-83.349204
	],
	"48335": [
		42.462872,
		-83.405033
	],
	"48336": [
		42.463144,
		-83.34727
	],
	"48340": [
		42.672146,
		-83.287904
	],
	"48341": [
		42.626921,
		-83.297371
	],
	"48342": [
		42.642264,
		-83.273415
	],
	"48346": [
		42.717882,
		-83.428703
	],
	"48348": [
		42.768605,
		-83.404425
	],
	"48350": [
		42.739418,
		-83.531044
	],
	"48353": [
		42.64687,
		-83.715943
	],
	"48356": [
		42.654414,
		-83.592905
	],
	"48357": [
		42.658572,
		-83.646545
	],
	"48359": [
		42.720765,
		-83.275518
	],
	"48360": [
		42.747574,
		-83.260083
	],
	"48362": [
		42.782333,
		-83.269397
	],
	"48363": [
		42.772483,
		-83.162499
	],
	"48367": [
		42.836232,
		-83.136902
	],
	"48370": [
		42.842876,
		-83.200365
	],
	"48371": [
		42.84097,
		-83.291531
	],
	"48374": [
		42.473226,
		-83.522863
	],
	"48375": [
		42.464141,
		-83.463958
	],
	"48377": [
		42.505368,
		-83.473579
	],
	"48380": [
		42.583002,
		-83.666824
	],
	"48381": [
		42.558412,
		-83.591793
	],
	"48382": [
		42.592395,
		-83.506365
	],
	"48383": [
		42.65561,
		-83.525824
	],
	"48386": [
		42.660223,
		-83.47999
	],
	"48390": [
		42.550711,
		-83.474218
	],
	"48393": [
		42.521838,
		-83.545088
	],
	"48397": [
		42.495017,
		-83.041035
	],
	"48401": [
		43.347342,
		-82.670591
	],
	"48411": [
		42.931981,
		-83.528907
	],
	"48412": [
		43.070433,
		-83.175549
	],
	"48413": [
		43.798506,
		-82.9942
	],
	"48414": [
		42.861694,
		-84.079846
	],
	"48415": [
		43.271876,
		-83.808105
	],
	"48416": [
		43.21687,
		-82.985115
	],
	"48417": [
		43.261282,
		-83.939194
	],
	"48418": [
		42.794295,
		-83.969891
	],
	"48419": [
		43.435806,
		-82.660428
	],
	"48420": [
		43.179103,
		-83.700508
	],
	"48421": [
		43.155496,
		-83.393187
	],
	"48422": [
		43.261472,
		-82.653704
	],
	"48423": [
		43.038711,
		-83.510959
	],
	"48426": [
		43.511491,
		-83.057347
	],
	"48427": [
		43.535638,
		-82.725482
	],
	"48428": [
		42.938195,
		-83.154454
	],
	"48429": [
		42.902992,
		-84.004121
	],
	"48430": [
		42.758215,
		-83.743683
	],
	"48432": [
		43.898698,
		-82.972074
	],
	"48433": [
		43.075348,
		-83.867227
	],
	"48434": [
		43.661889,
		-82.611777
	],
	"48435": [
		43.245379,
		-83.359338
	],
	"48436": [
		42.865301,
		-83.876801
	],
	"48437": [
		43.115745,
		-83.612394
	],
	"48438": [
		42.913657,
		-83.484165
	],
	"48439": [
		42.916399,
		-83.629374
	],
	"48440": [
		42.951094,
		-83.412259
	],
	"48441": [
		43.797892,
		-82.70863
	],
	"48442": [
		42.78868,
		-83.606102
	],
	"48444": [
		43.058491,
		-83.045197
	],
	"48445": [
		43.950222,
		-82.990555
	],
	"48446": [
		43.05374,
		-83.338704
	],
	"48449": [
		42.991452,
		-83.944772
	],
	"48450": [
		43.25866,
		-82.542438
	],
	"48451": [
		42.801222,
		-83.819172
	],
	"48453": [
		43.348144,
		-83.032572
	],
	"48454": [
		43.195011,
		-82.812721
	],
	"48455": [
		42.937951,
		-83.290783
	],
	"48456": [
		43.666971,
		-82.762208
	],
	"48457": [
		43.186801,
		-83.89517
	],
	"48458": [
		43.125298,
		-83.681543
	],
	"48460": [
		43.130612,
		-83.984997
	],
	"48461": [
		43.193661,
		-83.206162
	],
	"48462": [
		42.848476,
		-83.421749
	],
	"48463": [
		43.165799,
		-83.519301
	],
	"48464": [
		43.220341,
		-83.42246
	],
	"48465": [
		43.607998,
		-82.70777
	],
	"48466": [
		43.280507,
		-82.808877
	],
	"48467": [
		44.015356,
		-82.982415
	],
	"48468": [
		43.938412,
		-82.775181
	],
	"48469": [
		43.441469,
		-82.558181
	],
	"48470": [
		43.73513,
		-82.751064
	],
	"48471": [
		43.41942,
		-82.85208
	],
	"48472": [
		43.512323,
		-82.963212
	],
	"48473": [
		42.93695,
		-83.820544
	],
	"48475": [
		43.673156,
		-82.947987
	],
	"48476": [
		42.938707,
		-84.03005
	],
	"48502": [
		43.013727,
		-83.688376
	],
	"48503": [
		42.999923,
		-83.708864
	],
	"48504": [
		43.054719,
		-83.743736
	],
	"48505": [
		43.070311,
		-83.686117
	],
	"48506": [
		43.067472,
		-83.624392
	],
	"48507": [
		42.966966,
		-83.717359
	],
	"48509": [
		43.023941,
		-83.604709
	],
	"48519": [
		42.981891,
		-83.604953
	],
	"48529": [
		42.970338,
		-83.65859
	],
	"48532": [
		43.011068,
		-83.794875
	],
	"48551": [
		42.980994,
		-83.7169
	],
	"48553": [
		42.977831,
		-83.723548
	],
	"48554": [
		42.975881,
		-83.790734
	],
	"48601": [
		43.405947,
		-83.893998
	],
	"48602": [
		43.420026,
		-83.974472
	],
	"48603": [
		43.458786,
		-84.029471
	],
	"48604": [
		43.499764,
		-83.969084
	],
	"48607": [
		43.432412,
		-83.933828
	],
	"48609": [
		43.389617,
		-84.08317
	],
	"48610": [
		44.141691,
		-84.192191
	],
	"48611": [
		43.634148,
		-84.097206
	],
	"48612": [
		43.883024,
		-84.439434
	],
	"48613": [
		43.962785,
		-84.178016
	],
	"48614": [
		43.250991,
		-84.298042
	],
	"48615": [
		43.42981,
		-84.474806
	],
	"48616": [
		43.191074,
		-84.11346
	],
	"48617": [
		43.851308,
		-84.717297
	],
	"48618": [
		43.736779,
		-84.556707
	],
	"48619": [
		44.819736,
		-84.020613
	],
	"48621": [
		44.736899,
		-84.012427
	],
	"48622": [
		43.840836,
		-84.881266
	],
	"48623": [
		43.52008,
		-84.13284
	],
	"48624": [
		44.061093,
		-84.45737
	],
	"48625": [
		44.052769,
		-84.839621
	],
	"48626": [
		43.421372,
		-84.221436
	],
	"48627": [
		44.461919,
		-84.750203
	],
	"48628": [
		43.784121,
		-84.328366
	],
	"48629": [
		44.312238,
		-84.784698
	],
	"48630": [
		44.324794,
		-84.772497
	],
	"48631": [
		43.688645,
		-83.995895
	],
	"48632": [
		43.858387,
		-85.020525
	],
	"48633": [
		43.936975,
		-84.931062
	],
	"48634": [
		43.747641,
		-84.056178
	],
	"48635": [
		44.387169,
		-83.99443
	],
	"48636": [
		44.601981,
		-84.299426
	],
	"48637": [
		43.413693,
		-84.335573
	],
	"48638": [
		43.418925,
		-84.018242
	],
	"48640": [
		43.582166,
		-84.337227
	],
	"48642": [
		43.712749,
		-84.236964
	],
	"48647": [
		44.658121,
		-84.113065
	],
	"48649": [
		43.150461,
		-84.217431
	],
	"48650": [
		43.848958,
		-83.997374
	],
	"48651": [
		44.254775,
		-84.614813
	],
	"48652": [
		43.860201,
		-84.19688
	],
	"48653": [
		44.490944,
		-84.599452
	],
	"48654": [
		44.457421,
		-84.137319
	],
	"48655": [
		43.294499,
		-84.159695
	],
	"48656": [
		44.341665,
		-84.450997
	],
	"48657": [
		43.706126,
		-84.41616
	],
	"48658": [
		43.975339,
		-83.936798
	],
	"48659": [
		44.065548,
		-84.050783
	],
	"48661": [
		44.318406,
		-84.236213
	],
	"48662": [
		43.409942,
		-84.41681
	],
	"48667": [
		43.602088,
		-84.233324
	],
	"48701": [
		43.586877,
		-83.557827
	],
	"48703": [
		44.063642,
		-83.675914
	],
	"48705": [
		44.695826,
		-83.656494
	],
	"48706": [
		43.599622,
		-83.950504
	],
	"48708": [
		43.55706,
		-83.84968
	],
	"48710": [
		43.556513,
		-83.987669
	],
	"48720": [
		43.838908,
		-83.342072
	],
	"48721": [
		44.808106,
		-83.33948
	],
	"48722": [
		43.346724,
		-83.844762
	],
	"48723": [
		43.484961,
		-83.389457
	],
	"48724": [
		43.456815,
		-83.928244
	],
	"48725": [
		43.943956,
		-83.209593
	],
	"48726": [
		43.607392,
		-83.168024
	],
	"48727": [
		43.313344,
		-83.174586
	],
	"48728": [
		44.732391,
		-83.822784
	],
	"48729": [
		43.495939,
		-83.173779
	],
	"48730": [
		44.343486,
		-83.455677
	],
	"48731": [
		43.843633,
		-83.15105
	],
	"48732": [
		43.612331,
		-83.789822
	],
	"48733": [
		43.534102,
		-83.593113
	],
	"48734": [
		43.357562,
		-83.74851
	],
	"48735": [
		43.667593,
		-83.270883
	],
	"48737": [
		44.545688,
		-83.685206
	],
	"48738": [
		44.550292,
		-83.331217
	],
	"48739": [
		44.370453,
		-83.844934
	],
	"48740": [
		44.663889,
		-83.372024
	],
	"48741": [
		43.402479,
		-83.179873
	],
	"48742": [
		44.742724,
		-83.435666
	],
	"48743": [
		44.441124,
		-83.863151
	],
	"48744": [
		43.348042,
		-83.359255
	],
	"48745": [
		44.5637,
		-83.484031
	],
	"48746": [
		43.259333,
		-83.55025
	],
	"48747": [
		43.518879,
		-83.764927
	],
	"48748": [
		44.34575,
		-83.602632
	],
	"48749": [
		44.053935,
		-83.900947
	],
	"48750": [
		44.445649,
		-83.471971
	],
	"48754": [
		43.733259,
		-83.231016
	],
	"48755": [
		43.791501,
		-83.24562
	],
	"48756": [
		44.233746,
		-83.973379
	],
	"48757": [
		43.469859,
		-83.676311
	],
	"48759": [
		43.730478,
		-83.385904
	],
	"48760": [
		43.323051,
		-83.255006
	],
	"48761": [
		44.510924,
		-83.89171
	],
	"48762": [
		44.82166,
		-83.46162
	],
	"48763": [
		44.25509,
		-83.614901
	],
	"48765": [
		44.151556,
		-83.717952
	],
	"48766": [
		44.105722,
		-83.839392
	],
	"48767": [
		43.650518,
		-83.463154
	],
	"48768": [
		43.370831,
		-83.577539
	],
	"48770": [
		44.251183,
		-83.814184
	],
	"48801": [
		43.374101,
		-84.677608
	],
	"48806": [
		43.186891,
		-84.500161
	],
	"48807": [
		43.150476,
		-84.402006
	],
	"48808": [
		42.828836,
		-84.444776
	],
	"48809": [
		43.075299,
		-85.257962
	],
	"48811": [
		43.181498,
		-84.853735
	],
	"48813": [
		42.579775,
		-84.845891
	],
	"48815": [
		42.834371,
		-85.258585
	],
	"48816": [
		42.765009,
		-83.955981
	],
	"48817": [
		43.013949,
		-84.042884
	],
	"48818": [
		43.274603,
		-84.885112
	],
	"48819": [
		42.547396,
		-84.280994
	],
	"48820": [
		42.863913,
		-84.592296
	],
	"48821": [
		42.641171,
		-84.647417
	],
	"48822": [
		42.835279,
		-84.763128
	],
	"48823": [
		42.764051,
		-84.459938
	],
	"48825": [
		42.727604,
		-84.48142
	],
	"48827": [
		42.509319,
		-84.66044
	],
	"48829": [
		43.398205,
		-85.015378
	],
	"48831": [
		43.096219,
		-84.372488
	],
	"48832": [
		43.411883,
		-84.776582
	],
	"48834": [
		43.132585,
		-85.032114
	],
	"48835": [
		43.024903,
		-84.749057
	],
	"48836": [
		42.669319,
		-84.076583
	],
	"48837": [
		42.74701,
		-84.771033
	],
	"48838": [
		43.183357,
		-85.256667
	],
	"48840": [
		42.763138,
		-84.379361
	],
	"48841": [
		43.112204,
		-84.239315
	],
	"48842": [
		42.633522,
		-84.538076
	],
	"48843": [
		42.575522,
		-83.923398
	],
	"48845": [
		43.102441,
		-84.845897
	],
	"48846": [
		42.986125,
		-85.057887
	],
	"48847": [
		43.273232,
		-84.575579
	],
	"48848": [
		42.887696,
		-84.353703
	],
	"48849": [
		42.806313,
		-85.124536
	],
	"48850": [
		43.43527,
		-85.245835
	],
	"48851": [
		42.951055,
		-84.9364
	],
	"48852": [
		43.351697,
		-85.046033
	],
	"48853": [
		43.100122,
		-84.685621
	],
	"48854": [
		42.581698,
		-84.451612
	],
	"48855": [
		42.681274,
		-83.8972
	],
	"48856": [
		43.19721,
		-84.733509
	],
	"48857": [
		42.840946,
		-84.155615
	],
	"48858": [
		43.616033,
		-84.795459
	],
	"48860": [
		43.050812,
		-84.908954
	],
	"48861": [
		42.732509,
		-84.925032
	],
	"48864": [
		42.70417,
		-84.392139
	],
	"48865": [
		43.090516,
		-85.104617
	],
	"48866": [
		42.997596,
		-84.376341
	],
	"48867": [
		43.002718,
		-84.188977
	],
	"48870": [
		43.110408,
		-84.984752
	],
	"48871": [
		43.156653,
		-84.673805
	],
	"48872": [
		42.79865,
		-84.223099
	],
	"48873": [
		42.996853,
		-84.84415
	],
	"48874": [
		43.186449,
		-84.594937
	],
	"48875": [
		42.860813,
		-84.941448
	],
	"48876": [
		42.644294,
		-84.731216
	],
	"48877": [
		43.403734,
		-84.840802
	],
	"48878": [
		43.706095,
		-84.779858
	],
	"48879": [
		43.003075,
		-84.577361
	],
	"48880": [
		43.458864,
		-84.578359
	],
	"48881": [
		42.933122,
		-85.201584
	],
	"48883": [
		43.543727,
		-84.673886
	],
	"48884": [
		43.209843,
		-85.049208
	],
	"48885": [
		43.242912,
		-85.147939
	],
	"48886": [
		43.415719,
		-85.159692
	],
	"48888": [
		43.314815,
		-85.106068
	],
	"48889": [
		43.285072,
		-84.8069
	],
	"48890": [
		42.766873,
		-84.966363
	],
	"48891": [
		43.395354,
		-84.911507
	],
	"48892": [
		42.632741,
		-84.166861
	],
	"48893": [
		43.685543,
		-84.97505
	],
	"48894": [
		42.921483,
		-84.785801
	],
	"48895": [
		42.688915,
		-84.279784
	],
	"48896": [
		43.521275,
		-84.901027
	],
	"48897": [
		42.703898,
		-85.130349
	],
	"48906": [
		42.788043,
		-84.589443
	],
	"48910": [
		42.699177,
		-84.519955
	],
	"48911": [
		42.67301,
		-84.571422
	],
	"48912": [
		42.738361,
		-84.524017
	],
	"48915": [
		42.737952,
		-84.570937
	],
	"48917": [
		42.725239,
		-84.639542
	],
	"48921": [
		42.721347,
		-84.56083
	],
	"48933": [
		42.731996,
		-84.554683
	],
	"49001": [
		42.264543,
		-85.561545
	],
	"49002": [
		42.195311,
		-85.562988
	],
	"49004": [
		42.353583,
		-85.563941
	],
	"49006": [
		42.292497,
		-85.63146
	],
	"49007": [
		42.302591,
		-85.588193
	],
	"49008": [
		42.263841,
		-85.617047
	],
	"49009": [
		42.303748,
		-85.697876
	],
	"49010": [
		42.533307,
		-85.874766
	],
	"49011": [
		42.110137,
		-85.218699
	],
	"49012": [
		42.36817,
		-85.34422
	],
	"49013": [
		42.30552,
		-86.108039
	],
	"49014": [
		42.314549,
		-85.10625
	],
	"49015": [
		42.275488,
		-85.229034
	],
	"49017": [
		42.401366,
		-85.215928
	],
	"49021": [
		42.460434,
		-85.054743
	],
	"49022": [
		42.112127,
		-86.359048
	],
	"49024": [
		42.206513,
		-85.617997
	],
	"49026": [
		42.376862,
		-85.963435
	],
	"49027": [
		42.350328,
		-86.067386
	],
	"49028": [
		41.851471,
		-85.190234
	],
	"49029": [
		42.142409,
		-85.100314
	],
	"49030": [
		41.865948,
		-85.338879
	],
	"49031": [
		41.9047,
		-85.974314
	],
	"49032": [
		41.911488,
		-85.52287
	],
	"49033": [
		42.227502,
		-85.088714
	],
	"49034": [
		42.233525,
		-85.341209
	],
	"49036": [
		41.90548,
		-85.031277
	],
	"49037": [
		42.330046,
		-85.244922
	],
	"49038": [
		42.202822,
		-86.320868
	],
	"49040": [
		41.965721,
		-85.329273
	],
	"49042": [
		41.859375,
		-85.669395
	],
	"49043": [
		42.285992,
		-86.268503
	],
	"49045": [
		42.102102,
		-85.999123
	],
	"49046": [
		42.519178,
		-85.387984
	],
	"49047": [
		41.999691,
		-86.11868
	],
	"49048": [
		42.272936,
		-85.487782
	],
	"49050": [
		42.504302,
		-85.245704
	],
	"49051": [
		42.176669,
		-85.236608
	],
	"49052": [
		42.105747,
		-85.321815
	],
	"49053": [
		42.28924,
		-85.416755
	],
	"49055": [
		42.368474,
		-85.857813
	],
	"49056": [
		42.398286,
		-86.056215
	],
	"49057": [
		42.181948,
		-86.162944
	],
	"49058": [
		42.636422,
		-85.29969
	],
	"49060": [
		42.423536,
		-85.38597
	],
	"49061": [
		41.873542,
		-85.815243
	],
	"49064": [
		42.220886,
		-86.049114
	],
	"49065": [
		42.138273,
		-85.842108
	],
	"49066": [
		42.037739,
		-85.3415
	],
	"49067": [
		42.024172,
		-85.798766
	],
	"49068": [
		42.275697,
		-84.940812
	],
	"49070": [
		42.53933,
		-85.62939
	],
	"49071": [
		42.226439,
		-85.775518
	],
	"49072": [
		42.012051,
		-85.460189
	],
	"49073": [
		42.574928,
		-85.126192
	],
	"49074": [
		42.317468,
		-85.538723
	],
	"49075": [
		41.917513,
		-85.448603
	],
	"49076": [
		42.428635,
		-84.88033
	],
	"49078": [
		42.47251,
		-85.732849
	],
	"49079": [
		42.240155,
		-85.908075
	],
	"49080": [
		42.456426,
		-85.588337
	],
	"49082": [
		41.941034,
		-84.876582
	],
	"49083": [
		42.37811,
		-85.461128
	],
	"49084": [
		42.182551,
		-86.382059
	],
	"49085": [
		42.054277,
		-86.4626
	],
	"49087": [
		42.124219,
		-85.700691
	],
	"49088": [
		42.179736,
		-85.422562
	],
	"49089": [
		42.004878,
		-85.23606
	],
	"49090": [
		42.407427,
		-86.214544
	],
	"49091": [
		41.81818,
		-85.455591
	],
	"49092": [
		42.098874,
		-84.978737
	],
	"49093": [
		41.972834,
		-85.649934
	],
	"49094": [
		42.050304,
		-85.11357
	],
	"49095": [
		41.911662,
		-85.889223
	],
	"49096": [
		42.645178,
		-85.021222
	],
	"49097": [
		42.121971,
		-85.487442
	],
	"49098": [
		42.163885,
		-86.239986
	],
	"49099": [
		41.793262,
		-85.671752
	],
	"49101": [
		41.9372,
		-86.482677
	],
	"49102": [
		41.949226,
		-86.252076
	],
	"49103": [
		41.946299,
		-86.376474
	],
	"49104": [
		41.963699,
		-86.358972
	],
	"49106": [
		41.938074,
		-86.554845
	],
	"49107": [
		41.844909,
		-86.417637
	],
	"49111": [
		42.022699,
		-86.291132
	],
	"49112": [
		41.796034,
		-86.03054
	],
	"49113": [
		41.801056,
		-86.503854
	],
	"49115": [
		41.878186,
		-86.634236
	],
	"49116": [
		41.853312,
		-86.663428
	],
	"49117": [
		41.781671,
		-86.726836
	],
	"49119": [
		41.874173,
		-86.549249
	],
	"49120": [
		41.832805,
		-86.230825
	],
	"49125": [
		41.891897,
		-86.579415
	],
	"49126": [
		42.032522,
		-86.371812
	],
	"49127": [
		42.010826,
		-86.515299
	],
	"49128": [
		41.820406,
		-86.600497
	],
	"49129": [
		41.815482,
		-86.691068
	],
	"49130": [
		41.774422,
		-85.860349
	],
	"49201": [
		42.191346,
		-84.297205
	],
	"49202": [
		42.267179,
		-84.41085
	],
	"49203": [
		42.221835,
		-84.396625
	],
	"49220": [
		41.998622,
		-84.337415
	],
	"49221": [
		41.902354,
		-84.064698
	],
	"49224": [
		42.279617,
		-84.746876
	],
	"49227": [
		41.950018,
		-84.772966
	],
	"49228": [
		41.809023,
		-83.875598
	],
	"49229": [
		41.987013,
		-83.827239
	],
	"49230": [
		42.091609,
		-84.217344
	],
	"49232": [
		41.740366,
		-84.664597
	],
	"49233": [
		42.061113,
		-84.362502
	],
	"49234": [
		42.127037,
		-84.368713
	],
	"49235": [
		41.863913,
		-84.20092
	],
	"49236": [
		42.075966,
		-83.941794
	],
	"49237": [
		42.170452,
		-84.65149
	],
	"49238": [
		41.90223,
		-83.785596
	],
	"49240": [
		42.283303,
		-84.181375
	],
	"49241": [
		42.107843,
		-84.603335
	],
	"49242": [
		41.886298,
		-84.622698
	],
	"49245": [
		42.139366,
		-84.811584
	],
	"49246": [
		42.12779,
		-84.512436
	],
	"49247": [
		41.837616,
		-84.338261
	],
	"49248": [
		41.756424,
		-84.011181
	],
	"49249": [
		42.029334,
		-84.454755
	],
	"49250": [
		42.021736,
		-84.626224
	],
	"49251": [
		42.466346,
		-84.407978
	],
	"49252": [
		42.035237,
		-84.765398
	],
	"49253": [
		41.967948,
		-84.272771
	],
	"49254": [
		42.227976,
		-84.316434
	],
	"49255": [
		41.771201,
		-84.84455
	],
	"49256": [
		41.746804,
		-84.214469
	],
	"49259": [
		42.374592,
		-84.261604
	],
	"49261": [
		42.157638,
		-84.236
	],
	"49262": [
		41.963612,
		-84.46829
	],
	"49263": [
		42.158902,
		-84.184302
	],
	"49264": [
		42.446232,
		-84.555061
	],
	"49265": [
		42.006696,
		-84.175236
	],
	"49266": [
		41.83975,
		-84.546789
	],
	"49267": [
		41.757323,
		-83.719429
	],
	"49268": [
		41.868705,
		-83.929015
	],
	"49269": [
		42.287158,
		-84.593587
	],
	"49270": [
		41.873675,
		-83.680783
	],
	"49271": [
		41.831987,
		-84.453091
	],
	"49272": [
		42.393651,
		-84.348183
	],
	"49274": [
		41.846682,
		-84.759784
	],
	"49276": [
		41.794583,
		-83.776666
	],
	"49277": [
		42.388652,
		-84.469336
	],
	"49279": [
		41.780799,
		-84.103949
	],
	"49282": [
		42.034825,
		-84.402943
	],
	"49283": [
		42.207352,
		-84.550568
	],
	"49284": [
		42.391636,
		-84.688297
	],
	"49285": [
		42.476547,
		-84.213034
	],
	"49286": [
		42.010076,
		-83.927846
	],
	"49287": [
		42.02303,
		-84.073485
	],
	"49288": [
		41.733942,
		-84.429587
	],
	"49289": [
		41.768075,
		-84.107807
	],
	"49301": [
		42.973443,
		-85.476998
	],
	"49302": [
		42.821539,
		-85.402238
	],
	"49303": [
		43.271549,
		-85.860632
	],
	"49304": [
		43.907821,
		-85.872637
	],
	"49305": [
		43.752024,
		-85.151106
	],
	"49306": [
		43.075016,
		-85.565281
	],
	"49307": [
		43.699062,
		-85.489194
	],
	"49309": [
		43.759824,
		-85.876884
	],
	"49310": [
		43.513858,
		-85.047599
	],
	"49312": [
		43.685372,
		-85.806607
	],
	"49315": [
		42.803705,
		-85.742196
	],
	"49316": [
		42.793767,
		-85.550467
	],
	"49318": [
		43.227276,
		-85.820431
	],
	"49319": [
		43.230088,
		-85.527902
	],
	"49320": [
		43.753585,
		-85.275467
	],
	"49321": [
		43.073608,
		-85.681875
	],
	"49322": [
		43.355785,
		-85.351226
	],
	"49323": [
		42.728548,
		-85.790642
	],
	"49325": [
		42.760797,
		-85.301726
	],
	"49326": [
		43.246177,
		-85.317292
	],
	"49327": [
		43.323527,
		-85.845311
	],
	"49328": [
		42.63368,
		-85.758168
	],
	"49329": [
		43.406472,
		-85.484884
	],
	"49330": [
		43.241536,
		-85.736679
	],
	"49331": [
		42.950189,
		-85.351989
	],
	"49332": [
		43.623061,
		-85.249119
	],
	"49333": [
		42.699401,
		-85.461781
	],
	"49335": [
		42.738506,
		-85.668451
	],
	"49336": [
		43.508469,
		-85.435685
	],
	"49337": [
		43.423029,
		-85.718784
	],
	"49338": [
		43.771655,
		-85.602264
	],
	"49339": [
		43.331359,
		-85.496456
	],
	"49340": [
		43.61793,
		-85.110768
	],
	"49341": [
		43.124135,
		-85.490928
	],
	"49342": [
		43.690435,
		-85.315591
	],
	"49343": [
		43.297213,
		-85.535097
	],
	"49344": [
		42.589905,
		-85.591301
	],
	"49345": [
		43.15534,
		-85.703948
	],
	"49346": [
		43.594885,
		-85.421128
	],
	"49347": [
		43.316687,
		-85.347044
	],
	"49348": [
		42.685083,
		-85.610188
	],
	"49349": [
		43.575359,
		-85.748757
	],
	"49401": [
		42.975656,
		-85.939287
	],
	"49402": [
		43.933192,
		-86.02927
	],
	"49403": [
		43.140975,
		-85.857766
	],
	"49404": [
		43.063438,
		-85.952185
	],
	"49405": [
		43.914692,
		-86.191237
	],
	"49406": [
		42.642345,
		-86.202866
	],
	"49408": [
		42.571678,
		-86.116236
	],
	"49410": [
		44.032042,
		-86.12615
	],
	"49411": [
		44.100414,
		-86.251761
	],
	"49412": [
		43.468461,
		-85.948247
	],
	"49415": [
		43.150964,
		-86.114307
	],
	"49417": [
		43.019336,
		-86.157843
	],
	"49418": [
		42.877992,
		-85.767881
	],
	"49419": [
		42.679739,
		-85.980751
	],
	"49420": [
		43.719985,
		-86.282313
	],
	"49421": [
		43.599328,
		-86.069388
	],
	"49423": [
		42.743806,
		-86.083703
	],
	"49424": [
		42.843818,
		-86.134355
	],
	"49425": [
		43.428815,
		-86.089288
	],
	"49426": [
		42.86327,
		-85.887574
	],
	"49428": [
		42.920205,
		-85.838844
	],
	"49431": [
		43.985802,
		-86.406481
	],
	"49434": [
		42.769752,
		-86.218505
	],
	"49435": [
		43.024453,
		-85.835175
	],
	"49436": [
		43.678308,
		-86.466113
	],
	"49437": [
		43.46135,
		-86.386504
	],
	"49440": [
		43.23747,
		-86.253396
	],
	"49441": [
		43.182952,
		-86.282017
	],
	"49442": [
		43.241841,
		-86.135719
	],
	"49444": [
		43.178683,
		-86.199103
	],
	"49445": [
		43.292537,
		-86.293883
	],
	"49446": [
		43.551402,
		-86.37875
	],
	"49448": [
		43.094485,
		-86.071659
	],
	"49449": [
		43.793624,
		-86.388577
	],
	"49450": [
		42.484653,
		-86.082454
	],
	"49451": [
		43.213069,
		-85.967762
	],
	"49452": [
		43.506969,
		-86.260194
	],
	"49453": [
		42.659522,
		-86.172666
	],
	"49454": [
		43.946332,
		-86.285053
	],
	"49455": [
		43.610287,
		-86.378251
	],
	"49456": [
		43.089103,
		-86.20687
	],
	"49457": [
		43.352735,
		-86.146187
	],
	"49458": [
		43.921128,
		-86.095158
	],
	"49459": [
		43.741385,
		-86.112182
	],
	"49460": [
		42.933162,
		-86.145345
	],
	"49461": [
		43.376222,
		-86.319255
	],
	"49464": [
		42.844801,
		-85.984794
	],
	"49503": [
		42.96212,
		-85.659394
	],
	"49504": [
		42.981579,
		-85.7107
	],
	"49505": [
		42.996477,
		-85.637735
	],
	"49506": [
		42.945748,
		-85.613839
	],
	"49507": [
		42.93066,
		-85.655173
	],
	"49508": [
		42.875094,
		-85.619304
	],
	"49509": [
		42.897764,
		-85.693418
	],
	"49512": [
		42.883151,
		-85.527472
	],
	"49519": [
		42.895737,
		-85.718265
	],
	"49525": [
		43.021908,
		-85.5922
	],
	"49534": [
		42.964438,
		-85.787181
	],
	"49544": [
		43.038932,
		-85.74657
	],
	"49546": [
		42.927758,
		-85.530189
	],
	"49548": [
		42.870454,
		-85.662605
	],
	"49601": [
		44.245955,
		-85.510205
	],
	"49611": [
		44.973683,
		-84.974489
	],
	"49612": [
		44.864922,
		-85.239456
	],
	"49613": [
		44.50612,
		-86.206892
	],
	"49614": [
		44.435034,
		-86.114343
	],
	"49615": [
		44.964551,
		-85.206628
	],
	"49616": [
		44.579933,
		-86.090298
	],
	"49617": [
		44.643232,
		-86.031754
	],
	"49618": [
		44.293486,
		-85.607626
	],
	"49619": [
		44.293058,
		-85.991212
	],
	"49620": [
		44.523532,
		-85.691242
	],
	"49621": [
		44.86873,
		-85.770347
	],
	"49622": [
		45.07741,
		-85.260935
	],
	"49623": [
		43.908889,
		-85.691816
	],
	"49625": [
		44.433447,
		-85.88303
	],
	"49626": [
		44.239211,
		-86.290782
	],
	"49627": [
		45.08436,
		-85.344921
	],
	"49628": [
		44.615416,
		-86.244403
	],
	"49629": [
		44.918988,
		-85.390286
	],
	"49630": [
		44.818252,
		-86.009304
	],
	"49631": [
		43.912709,
		-85.262924
	],
	"49632": [
		44.239007,
		-84.967889
	],
	"49633": [
		44.558687,
		-85.206185
	],
	"49634": [
		44.214834,
		-86.290297
	],
	"49635": [
		44.617255,
		-86.192428
	],
	"49636": [
		44.855494,
		-85.963203
	],
	"49637": [
		44.621616,
		-85.709787
	],
	"49638": [
		44.286973,
		-85.755675
	],
	"49639": [
		43.84701,
		-85.408527
	],
	"49640": [
		44.715246,
		-86.04869
	],
	"49642": [
		43.8689,
		-85.761035
	],
	"49643": [
		44.639739,
		-85.828941
	],
	"49644": [
		44.098869,
		-85.910662
	],
	"49645": [
		44.362133,
		-86.029373
	],
	"49646": [
		44.724482,
		-85.055762
	],
	"49648": [
		44.996418,
		-85.33633
	],
	"49649": [
		44.563373,
		-85.525432
	],
	"49650": [
		44.739836,
		-85.887151
	],
	"49651": [
		44.390519,
		-85.104789
	],
	"49653": [
		44.973631,
		-85.723949
	],
	"49654": [
		45.146182,
		-86.051574
	],
	"49655": [
		44.024932,
		-85.43205
	],
	"49656": [
		44.067819,
		-85.692017
	],
	"49657": [
		44.212501,
		-85.169164
	],
	"49659": [
		44.895608,
		-85.019378
	],
	"49660": [
		44.22514,
		-86.210203
	],
	"49663": [
		44.435317,
		-85.390105
	],
	"49664": [
		44.887981,
		-85.898639
	],
	"49665": [
		44.095202,
		-85.118154
	],
	"49666": [
		44.622029,
		-85.554055
	],
	"49667": [
		44.363328,
		-84.914644
	],
	"49668": [
		44.405416,
		-85.702617
	],
	"49670": [
		45.126997,
		-85.662573
	],
	"49674": [
		45.055769,
		-85.578277
	],
	"49675": [
		44.384188,
		-86.225384
	],
	"49676": [
		44.825304,
		-85.288336
	],
	"49677": [
		43.894733,
		-85.552563
	],
	"49679": [
		43.875013,
		-85.145788
	],
	"49680": [
		44.646003,
		-85.262702
	],
	"49682": [
		44.978664,
		-85.627013
	],
	"49683": [
		44.540521,
		-85.926894
	],
	"49684": [
		44.762335,
		-85.703568
	],
	"49686": [
		44.713682,
		-85.557845
	],
	"49688": [
		44.117006,
		-85.450376
	],
	"49689": [
		44.213228,
		-85.902445
	],
	"49690": [
		44.788567,
		-85.399581
	],
	"49701": [
		45.771346,
		-84.739188
	],
	"49705": [
		45.355095,
		-84.460991
	],
	"49706": [
		45.438274,
		-84.779397
	],
	"49707": [
		45.094306,
		-83.476214
	],
	"49709": [
		45.015273,
		-84.158729
	],
	"49710": [
		46.276096,
		-84.176734
	],
	"49712": [
		45.209259,
		-85.009296
	],
	"49713": [
		45.210934,
		-84.842294
	],
	"49715": [
		46.39742,
		-84.708184
	],
	"49716": [
		45.517286,
		-84.748136
	],
	"49717": [
		45.434968,
		-84.691217
	],
	"49718": [
		45.734622,
		-84.861522
	],
	"49719": [
		46.005621,
		-84.324829
	],
	"49720": [
		45.280508,
		-85.245172
	],
	"49721": [
		45.582257,
		-84.460476
	],
	"49722": [
		45.427456,
		-84.862324
	],
	"49724": [
		46.32764,
		-84.390112
	],
	"49725": [
		45.978483,
		-84.020784
	],
	"49726": [
		46.003738,
		-83.615219
	],
	"49727": [
		45.125273,
		-85.105817
	],
	"49728": [
		46.411594,
		-85.028468
	],
	"49729": [
		45.166897,
		-85.292072
	],
	"49730": [
		45.044034,
		-84.867529
	],
	"49733": [
		44.806466,
		-84.696639
	],
	"49735": [
		44.997939,
		-84.670317
	],
	"49736": [
		46.082887,
		-84.07518
	],
	"49738": [
		44.698328,
		-84.609421
	],
	"49740": [
		45.524807,
		-85.008345
	],
	"49743": [
		45.266958,
		-83.893364
	],
	"49744": [
		44.993123,
		-83.657097
	],
	"49745": [
		46.03979,
		-84.522382
	],
	"49746": [
		45.062994,
		-83.951021
	],
	"49747": [
		44.849651,
		-83.65314
	],
	"49748": [
		46.374911,
		-85.212879
	],
	"49749": [
		45.425743,
		-84.567774
	],
	"49751": [
		44.982838,
		-84.430167
	],
	"49752": [
		46.254145,
		-84.434511
	],
	"49753": [
		45.017318,
		-83.777038
	],
	"49755": [
		45.634591,
		-84.801026
	],
	"49756": [
		44.822189,
		-84.282568
	],
	"49757": [
		45.856211,
		-84.62144
	],
	"49759": [
		45.417476,
		-84.096086
	],
	"49760": [
		46.04055,
		-84.902479
	],
	"49762": [
		46.106064,
		-85.336135
	],
	"49764": [
		45.424174,
		-84.827403
	],
	"49765": [
		45.328392,
		-84.24252
	],
	"49766": [
		44.908297,
		-83.432043
	],
	"49768": [
		46.654828,
		-85.117026
	],
	"49769": [
		45.570812,
		-84.861754
	],
	"49770": [
		45.331217,
		-84.897137
	],
	"49774": [
		46.162451,
		-84.315258
	],
	"49775": [
		45.770763,
		-84.477959
	],
	"49776": [
		45.232202,
		-83.680373
	],
	"49777": [
		45.30553,
		-83.507135
	],
	"49779": [
		45.407692,
		-83.863353
	],
	"49780": [
		46.21306,
		-84.728545
	],
	"49781": [
		45.884283,
		-84.797447
	],
	"49782": [
		45.674252,
		-85.542708
	],
	"49783": [
		46.416901,
		-84.289054
	],
	"49788": [
		46.265348,
		-84.465049
	],
	"49791": [
		45.486753,
		-84.595768
	],
	"49793": [
		46.202824,
		-85.0634
	],
	"49795": [
		45.160679,
		-84.579688
	],
	"49796": [
		45.262557,
		-84.959158
	],
	"49799": [
		45.262245,
		-84.580365
	],
	"49801": [
		45.960954,
		-87.976613
	],
	"49802": [
		45.80106,
		-88.077894
	],
	"49805": [
		47.367297,
		-88.351332
	],
	"49806": [
		46.452414,
		-86.901161
	],
	"49807": [
		45.773088,
		-87.343588
	],
	"49808": [
		46.823114,
		-87.85267
	],
	"49812": [
		45.591632,
		-87.50312
	],
	"49814": [
		46.565613,
		-87.905613
	],
	"49815": [
		46.185396,
		-87.96424
	],
	"49816": [
		46.285383,
		-86.895309
	],
	"49817": [
		45.961986,
		-86.458306
	],
	"49818": [
		45.95077,
		-87.338459
	],
	"49819": [
		46.108909,
		-87.456296
	],
	"49820": [
		46.190093,
		-85.654181
	],
	"49821": [
		45.529658,
		-87.631007
	],
	"49822": [
		46.433521,
		-87.024586
	],
	"49825": [
		46.346884,
		-86.994898
	],
	"49826": [
		46.323306,
		-87.052838
	],
	"49827": [
		46.177009,
		-85.560604
	],
	"49829": [
		45.765202,
		-87.131724
	],
	"49831": [
		46.012823,
		-87.866119
	],
	"49833": [
		46.292626,
		-87.327611
	],
	"49834": [
		45.945664,
		-87.768387
	],
	"49835": [
		45.735775,
		-86.562598
	],
	"49836": [
		46.201987,
		-85.903336
	],
	"49837": [
		45.868675,
		-87.079134
	],
	"49838": [
		46.031864,
		-85.737404
	],
	"49839": [
		46.618009,
		-86.108426
	],
	"49840": [
		46.103036,
		-86.010544
	],
	"49841": [
		46.275179,
		-87.465733
	],
	"49847": [
		45.704676,
		-87.636201
	],
	"49848": [
		45.378247,
		-87.636417
	],
	"49849": [
		46.432711,
		-87.756405
	],
	"49852": [
		45.786249,
		-87.816777
	],
	"49853": [
		46.368293,
		-85.750902
	],
	"49854": [
		46.061609,
		-86.304483
	],
	"49855": [
		46.578823,
		-87.455319
	],
	"49858": [
		45.219025,
		-87.578451
	],
	"49861": [
		46.481614,
		-88.243343
	],
	"49862": [
		46.394508,
		-86.695774
	],
	"49863": [
		45.613385,
		-87.551575
	],
	"49864": [
		45.871476,
		-86.672584
	],
	"49866": [
		46.521482,
		-87.580782
	],
	"49868": [
		46.510988,
		-85.517552
	],
	"49870": [
		45.867201,
		-87.878923
	],
	"49871": [
		46.430159,
		-87.542378
	],
	"49872": [
		46.021064,
		-87.084351
	],
	"49873": [
		45.890463,
		-87.578753
	],
	"49874": [
		45.714924,
		-87.473942
	],
	"49876": [
		45.80269,
		-87.98283
	],
	"49877": [
		46.148036,
		-87.705499
	],
	"49878": [
		45.945698,
		-86.860412
	],
	"49879": [
		46.358718,
		-88.038808
	],
	"49880": [
		46.110988,
		-87.222361
	],
	"49881": [
		46.07322,
		-88.047262
	],
	"49883": [
		46.431726,
		-86.000888
	],
	"49884": [
		46.419898,
		-86.329645
	],
	"49885": [
		46.33805,
		-87.19832
	],
	"49886": [
		45.739188,
		-87.527012
	],
	"49887": [
		45.42934,
		-87.550635
	],
	"49891": [
		46.241277,
		-87.022529
	],
	"49892": [
		45.81807,
		-87.785817
	],
	"49893": [
		45.297038,
		-87.605155
	],
	"49894": [
		45.786301,
		-87.075504
	],
	"49895": [
		46.165312,
		-86.665885
	],
	"49896": [
		45.677575,
		-87.389319
	],
	"49901": [
		47.307796,
		-88.395208
	],
	"49902": [
		46.043004,
		-88.379881
	],
	"49903": [
		46.332624,
		-88.445286
	],
	"49905": [
		47.121853,
		-88.722062
	],
	"49908": [
		46.768216,
		-88.557216
	],
	"49910": [
		46.613364,
		-89.608438
	],
	"49911": [
		46.489337,
		-90.05076
	],
	"49912": [
		46.496716,
		-89.194224
	],
	"49913": [
		47.243192,
		-88.458488
	],
	"49915": [
		46.065123,
		-88.622018
	],
	"49916": [
		46.984094,
		-88.586325
	],
	"49917": [
		47.281359,
		-88.359132
	],
	"49918": [
		47.435192,
		-87.851282
	],
	"49919": [
		46.471628,
		-88.441956
	],
	"49920": [
		46.138161,
		-88.30225
	],
	"49921": [
		47.092564,
		-88.582649
	],
	"49922": [
		47.100549,
		-88.483088
	],
	"49925": [
		46.544419,
		-89.374684
	],
	"49927": [
		46.030666,
		-88.535015
	],
	"49929": [
		46.781097,
		-89.149533
	],
	"49930": [
		47.16548,
		-88.539664
	],
	"49931": [
		47.084375,
		-88.572787
	],
	"49934": [
		47.178117,
		-88.437985
	],
	"49935": [
		46.175587,
		-88.752156
	],
	"49938": [
		46.584294,
		-90.131942
	],
	"49942": [
		47.275174,
		-88.401792
	],
	"49945": [
		47.180029,
		-88.314119
	],
	"49946": [
		46.720894,
		-88.321592
	],
	"49947": [
		46.385417,
		-89.616356
	],
	"49948": [
		46.711175,
		-89.020015
	],
	"49950": [
		47.386333,
		-88.133704
	],
	"49952": [
		46.701362,
		-88.784945
	],
	"49953": [
		46.803804,
		-89.371849
	],
	"49955": [
		47.006575,
		-88.694612
	],
	"49958": [
		46.828387,
		-88.668431
	],
	"49959": [
		46.470636,
		-89.998383
	],
	"49960": [
		46.711853,
		-89.258371
	],
	"49961": [
		46.52939,
		-88.731554
	],
	"49962": [
		46.839281,
		-88.131113
	],
	"49963": [
		47.041467,
		-88.689132
	],
	"49965": [
		46.955096,
		-88.859543
	],
	"49967": [
		46.506508,
		-88.966362
	],
	"49968": [
		46.490267,
		-89.887207
	],
	"49969": [
		46.251655,
		-89.210723
	],
	"49970": [
		46.547419,
		-88.600365
	],
	"49971": [
		46.70924,
		-89.705285
	],
	"50001": [
		41.362724,
		-93.433418
	],
	"50002": [
		41.514778,
		-94.648341
	],
	"50003": [
		41.611504,
		-94.043026
	],
	"50005": [
		42.131988,
		-93.034602
	],
	"50006": [
		42.508362,
		-93.401924
	],
	"50007": [
		41.806825,
		-93.602007
	],
	"50008": [
		40.679672,
		-93.380265
	],
	"50009": [
		41.644957,
		-93.45933
	],
	"50010": [
		42.030852,
		-93.5884
	],
	"50011": [
		42.024034,
		-93.636451
	],
	"50012": [
		42.026751,
		-93.645874
	],
	"50014": [
		42.046297,
		-93.694448
	],
	"50020": [
		41.438416,
		-94.747041
	],
	"50021": [
		41.724267,
		-93.56532
	],
	"50022": [
		41.414374,
		-94.996402
	],
	"50023": [
		41.730271,
		-93.634978
	],
	"50025": [
		41.757959,
		-94.923571
	],
	"50026": [
		41.858516,
		-94.44958
	],
	"50027": [
		41.482026,
		-92.469368
	],
	"50028": [
		41.80691,
		-93.154284
	],
	"50029": [
		41.828956,
		-94.555933
	],
	"50032": [
		41.666521,
		-93.542387
	],
	"50033": [
		41.363038,
		-93.792843
	],
	"50034": [
		42.521662,
		-93.661406
	],
	"50035": [
		41.723928,
		-93.458071
	],
	"50036": [
		42.085554,
		-93.864204
	],
	"50038": [
		41.525073,
		-93.903282
	],
	"50039": [
		41.814355,
		-93.996623
	],
	"50041": [
		42.638478,
		-93.248113
	],
	"50042": [
		41.533745,
		-94.905323
	],
	"50044": [
		41.202081,
		-92.882789
	],
	"50046": [
		41.893405,
		-93.523012
	],
	"50047": [
		41.463639,
		-93.47428
	],
	"50048": [
		41.512457,
		-94.520058
	],
	"50049": [
		41.034517,
		-93.295407
	],
	"50050": [
		42.158973,
		-94.503593
	],
	"50051": [
		42.135392,
		-93.141399
	],
	"50052": [
		40.64326,
		-93.444379
	],
	"50054": [
		41.690374,
		-93.233337
	],
	"50055": [
		41.878681,
		-93.296135
	],
	"50056": [
		42.013198,
		-93.296527
	],
	"50057": [
		41.179914,
		-93.134256
	],
	"50058": [
		41.85571,
		-94.690994
	],
	"50060": [
		40.751408,
		-93.31886
	],
	"50061": [
		41.485929,
		-93.784889
	],
	"50062": [
		41.235597,
		-93.245092
	],
	"50063": [
		41.695549,
		-93.940678
	],
	"50064": [
		42.107729,
		-94.23663
	],
	"50065": [
		40.613858,
		-93.781727
	],
	"50066": [
		41.798081,
		-94.233396
	],
	"50067": [
		40.717682,
		-93.861649
	],
	"50068": [
		40.948073,
		-93.466254
	],
	"50069": [
		41.520708,
		-94.030263
	],
	"50070": [
		41.445537,
		-94.232632
	],
	"50071": [
		42.64862,
		-93.504898
	],
	"50072": [
		41.471219,
		-94.122983
	],
	"50073": [
		41.793831,
		-93.525213
	],
	"50074": [
		40.865931,
		-94.080133
	],
	"50075": [
		42.332139,
		-93.550631
	],
	"50076": [
		41.592177,
		-94.841945
	],
	"50078": [
		41.93858,
		-92.863031
	],
	"50101": [
		42.667352,
		-93.634644
	],
	"50102": [
		42.245542,
		-93.400194
	],
	"50103": [
		40.79512,
		-93.609144
	],
	"50104": [
		41.486799,
		-92.386662
	],
	"50105": [
		42.110285,
		-93.637284
	],
	"50106": [
		41.881076,
		-92.805779
	],
	"50107": [
		42.036533,
		-94.219069
	],
	"50108": [
		40.8257,
		-93.952664
	],
	"50109": [
		41.77088,
		-93.800631
	],
	"50111": [
		41.691228,
		-93.804487
	],
	"50112": [
		41.730188,
		-92.715452
	],
	"50115": [
		41.68324,
		-94.561556
	],
	"50116": [
		41.179772,
		-92.97361
	],
	"50117": [
		41.670465,
		-94.848497
	],
	"50118": [
		41.466968,
		-93.378981
	],
	"50119": [
		41.313093,
		-92.939687
	],
	"50120": [
		41.933734,
		-92.982857
	],
	"50122": [
		42.305362,
		-93.311807
	],
	"50123": [
		40.833825,
		-93.513815
	],
	"50124": [
		41.885672,
		-93.604073
	],
	"50125": [
		41.335185,
		-93.584634
	],
	"50126": [
		42.494379,
		-93.2554
	],
	"50127": [
		41.77714,
		-93.205809
	],
	"50128": [
		41.855589,
		-94.300236
	],
	"50129": [
		42.014771,
		-94.376743
	],
	"50130": [
		42.303387,
		-93.669264
	],
	"50131": [
		41.69212,
		-93.715156
	],
	"50132": [
		42.391673,
		-93.691531
	],
	"50133": [
		40.713322,
		-94.068993
	],
	"50134": [
		41.939471,
		-93.671609
	],
	"50135": [
		41.750582,
		-92.887174
	],
	"50136": [
		41.469501,
		-92.292764
	],
	"50138": [
		41.300589,
		-93.105185
	],
	"50139": [
		41.198463,
		-93.369878
	],
	"50140": [
		40.64552,
		-93.986274
	],
	"50141": [
		41.867559,
		-92.949711
	],
	"50142": [
		42.006616,
		-92.775596
	],
	"50143": [
		41.341836,
		-92.804656
	],
	"50144": [
		40.73905,
		-93.7408
	],
	"50146": [
		41.684117,
		-94.243044
	],
	"50147": [
		40.631338,
		-93.551745
	],
	"50148": [
		42.181305,
		-92.992825
	],
	"50149": [
		41.150466,
		-94.070997
	],
	"50150": [
		41.125508,
		-92.975192
	],
	"50151": [
		41.081907,
		-93.51779
	],
	"50153": [
		41.573896,
		-92.807021
	],
	"50154": [
		42.172261,
		-93.39278
	],
	"50155": [
		41.211018,
		-94.199353
	],
	"50156": [
		41.89831,
		-93.801235
	],
	"50157": [
		41.739767,
		-92.563011
	],
	"50158": [
		42.049806,
		-92.900739
	],
	"50160": [
		41.373789,
		-93.738489
	],
	"50161": [
		41.84815,
		-93.40403
	],
	"50162": [
		41.928297,
		-93.072173
	],
	"50163": [
		41.222388,
		-93.241035
	],
	"50164": [
		41.499824,
		-94.425097
	],
	"50165": [
		40.843661,
		-93.283695
	],
	"50166": [
		41.282712,
		-93.430749
	],
	"50167": [
		41.742883,
		-94.041048
	],
	"50168": [
		41.788361,
		-93.278546
	],
	"50169": [
		41.655266,
		-93.35232
	],
	"50170": [
		41.530027,
		-93.124762
	],
	"50171": [
		41.585852,
		-92.525413
	],
	"50173": [
		41.964659,
		-92.713485
	],
	"50174": [
		41.033707,
		-93.982304
	],
	"50201": [
		42.041723,
		-93.434905
	],
	"50206": [
		42.245675,
		-93.202318
	],
	"50207": [
		41.431966,
		-92.63754
	],
	"50208": [
		41.711721,
		-93.033958
	],
	"50210": [
		41.195043,
		-93.698287
	],
	"50211": [
		41.45531,
		-93.705269
	],
	"50212": [
		42.036562,
		-94.066162
	],
	"50213": [
		41.031685,
		-93.766137
	],
	"50214": [
		41.469319,
		-93.055697
	],
	"50216": [
		41.697097,
		-94.354821
	],
	"50217": [
		42.183763,
		-94.251811
	],
	"50218": [
		41.348354,
		-93.880399
	],
	"50219": [
		41.420905,
		-92.896537
	],
	"50220": [
		41.836423,
		-94.121285
	],
	"50222": [
		41.215845,
		-93.959608
	],
	"50223": [
		42.173715,
		-94.03783
	],
	"50225": [
		41.384401,
		-93.268859
	],
	"50226": [
		41.796243,
		-93.701973
	],
	"50227": [
		42.597441,
		-93.427851
	],
	"50228": [
		41.576968,
		-93.24196
	],
	"50229": [
		41.379081,
		-93.775073
	],
	"50230": [
		42.303248,
		-93.453417
	],
	"50231": [
		42.237123,
		-93.602632
	],
	"50232": [
		41.556725,
		-92.96972
	],
	"50233": [
		41.612883,
		-94.21137
	],
	"50234": [
		41.893096,
		-93.181982
	],
	"50235": [
		41.931777,
		-94.224981
	],
	"50236": [
		42.178394,
		-93.490398
	],
	"50237": [
		41.545198,
		-93.370962
	],
	"50238": [
		40.964291,
		-93.167151
	],
	"50239": [
		42.142774,
		-93.202933
	],
	"50240": [
		41.29709,
		-93.792788
	],
	"50242": [
		41.561039,
		-92.693756
	],
	"50243": [
		41.872429,
		-93.696442
	],
	"50244": [
		41.857525,
		-93.652604
	],
	"50246": [
		42.274579,
		-93.786125
	],
	"50247": [
		42.017436,
		-93.164603
	],
	"50248": [
		42.191221,
		-93.614392
	],
	"50249": [
		42.275304,
		-93.903081
	],
	"50250": [
		41.482226,
		-94.347153
	],
	"50251": [
		41.56694,
		-92.869363
	],
	"50252": [
		41.466282,
		-93.303447
	],
	"50254": [
		40.991483,
		-94.075527
	],
	"50255": [
		41.455895,
		-92.332273
	],
	"50256": [
		41.259706,
		-92.905272
	],
	"50257": [
		41.189507,
		-93.84723
	],
	"50258": [
		42.224136,
		-93.073131
	],
	"50261": [
		41.475063,
		-93.915872
	],
	"50262": [
		40.860632,
		-93.808561
	],
	"50263": [
		41.59541,
		-93.872384
	],
	"50264": [
		40.905654,
		-93.697536
	],
	"50265": [
		41.555915,
		-93.744777
	],
	"50266": [
		41.570085,
		-93.798416
	],
	"50268": [
		41.404406,
		-92.362787
	],
	"50271": [
		42.482752,
		-93.541442
	],
	"50272": [
		41.095928,
		-93.255936
	],
	"50273": [
		41.329691,
		-94.054307
	],
	"50274": [
		41.383348,
		-94.860975
	],
	"50275": [
		41.037536,
		-93.589602
	],
	"50276": [
		41.862012,
		-93.926489
	],
	"50277": [
		41.784551,
		-94.357719
	],
	"50278": [
		42.136759,
		-93.299533
	],
	"50309": [
		41.584603,
		-93.620836
	],
	"50310": [
		41.627582,
		-93.67266
	],
	"50311": [
		41.601038,
		-93.672893
	],
	"50312": [
		41.582678,
		-93.67667
	],
	"50313": [
		41.654477,
		-93.62418
	],
	"50314": [
		41.604964,
		-93.6312
	],
	"50315": [
		41.545918,
		-93.622124
	],
	"50316": [
		41.608629,
		-93.599579
	],
	"50317": [
		41.617463,
		-93.546621
	],
	"50319": [
		41.590912,
		-93.604288
	],
	"50320": [
		41.527942,
		-93.567967
	],
	"50321": [
		41.535138,
		-93.665248
	],
	"50322": [
		41.634164,
		-93.73436
	],
	"50323": [
		41.625632,
		-93.79365
	],
	"50324": [
		41.604413,
		-93.712854
	],
	"50325": [
		41.613243,
		-93.797871
	],
	"50327": [
		41.586364,
		-93.487814
	],
	"50401": [
		43.153169,
		-93.19982
	],
	"50420": [
		42.804199,
		-93.4604
	],
	"50421": [
		42.843465,
		-93.618404
	],
	"50423": [
		43.118224,
		-93.814465
	],
	"50424": [
		43.39443,
		-93.933846
	],
	"50426": [
		43.415481,
		-93.017133
	],
	"50428": [
		43.136933,
		-93.397107
	],
	"50430": [
		42.981551,
		-93.953973
	],
	"50431": [
		42.737113,
		-93.368223
	],
	"50432": [
		43.223915,
		-93.797954
	],
	"50433": [
		42.923243,
		-93.050204
	],
	"50434": [
		43.257488,
		-93.448583
	],
	"50435": [
		43.158039,
		-92.767049
	],
	"50436": [
		43.266457,
		-93.67107
	],
	"50438": [
		43.111502,
		-93.618624
	],
	"50439": [
		42.944717,
		-93.626339
	],
	"50440": [
		43.333341,
		-93.071258
	],
	"50441": [
		42.74134,
		-93.220973
	],
	"50444": [
		43.297226,
		-93.38363
	],
	"50446": [
		43.340739,
		-93.446907
	],
	"50447": [
		42.9254,
		-93.797708
	],
	"50448": [
		43.349938,
		-93.240534
	],
	"50449": [
		43.002487,
		-93.566898
	],
	"50450": [
		43.421181,
		-93.522394
	],
	"50451": [
		43.381234,
		-94.077615
	],
	"50452": [
		42.781099,
		-93.367352
	],
	"50453": [
		43.363364,
		-93.64742
	],
	"50454": [
		43.381889,
		-92.737275
	],
	"50455": [
		43.456954,
		-92.649842
	],
	"50456": [
		43.291262,
		-93.216049
	],
	"50457": [
		42.916337,
		-93.493608
	],
	"50458": [
		43.158733,
		-93.012018
	],
	"50459": [
		43.457425,
		-93.250439
	],
	"50460": [
		43.227851,
		-92.688793
	],
	"50461": [
		43.306168,
		-92.818741
	],
	"50464": [
		43.2534,
		-93.080785
	],
	"50465": [
		43.48655,
		-93.912229
	],
	"50466": [
		43.386853,
		-92.538439
	],
	"50467": [
		43.21173,
		-93.086636
	],
	"50468": [
		43.032213,
		-92.947124
	],
	"50469": [
		42.999327,
		-93.197099
	],
	"50470": [
		42.74578,
		-93.560405
	],
	"50471": [
		43.166568,
		-92.876407
	],
	"50472": [
		43.406746,
		-92.935316
	],
	"50473": [
		43.465583,
		-93.687696
	],
	"50475": [
		42.881745,
		-93.218302
	],
	"50476": [
		43.446805,
		-92.764051
	],
	"50477": [
		42.989247,
		-93.327093
	],
	"50478": [
		43.407488,
		-93.783601
	],
	"50479": [
		42.939445,
		-93.409863
	],
	"50480": [
		43.250367,
		-94.058607
	],
	"50482": [
		43.113101,
		-93.486404
	],
	"50483": [
		43.112564,
		-94.000915
	],
	"50484": [
		43.230771,
		-93.915585
	],
	"50501": [
		42.492334,
		-94.192499
	],
	"50510": [
		42.759296,
		-94.985603
	],
	"50511": [
		43.074041,
		-94.219184
	],
	"50514": [
		43.415156,
		-94.47241
	],
	"50515": [
		43.022217,
		-94.863371
	],
	"50516": [
		42.623922,
		-94.136835
	],
	"50517": [
		43.305294,
		-94.234287
	],
	"50518": [
		42.514912,
		-94.386021
	],
	"50519": [
		42.901704,
		-94.262889
	],
	"50520": [
		42.80919,
		-94.397929
	],
	"50521": [
		42.346223,
		-94.102821
	],
	"50522": [
		43.192019,
		-94.194683
	],
	"50523": [
		42.367994,
		-94.295734
	],
	"50524": [
		42.616853,
		-94.353838
	],
	"50525": [
		42.736497,
		-93.747437
	],
	"50527": [
		42.96499,
		-94.785417
	],
	"50528": [
		43.133889,
		-94.540831
	],
	"50529": [
		42.719757,
		-94.196169
	],
	"50530": [
		42.270278,
		-94.039589
	],
	"50531": [
		43.454085,
		-94.609753
	],
	"50532": [
		42.460118,
		-94.000869
	],
	"50533": [
		42.651928,
		-93.911823
	],
	"50535": [
		42.453188,
		-95.162493
	],
	"50536": [
		43.118262,
		-94.705481
	],
	"50538": [
		42.274049,
		-94.439703
	],
	"50539": [
		43.236961,
		-94.419983
	],
	"50540": [
		42.598351,
		-94.839981
	],
	"50541": [
		42.710228,
		-94.452387
	],
	"50542": [
		42.782976,
		-93.942692
	],
	"50543": [
		42.274696,
		-94.304642
	],
	"50544": [
		42.250727,
		-94.170545
	],
	"50545": [
		42.797396,
		-94.080863
	],
	"50546": [
		42.83769,
		-94.702202
	],
	"50548": [
		42.714769,
		-94.225325
	],
	"50551": [
		42.479572,
		-94.751112
	],
	"50554": [
		42.845984,
		-94.84269
	],
	"50556": [
		43.45522,
		-94.196646
	],
	"50557": [
		42.360802,
		-94.043735
	],
	"50558": [
		42.861277,
		-94.16377
	],
	"50559": [
		43.208819,
		-94.329243
	],
	"50560": [
		42.960487,
		-94.107825
	],
	"50561": [
		42.425099,
		-94.850501
	],
	"50562": [
		42.961532,
		-94.641788
	],
	"50563": [
		42.527824,
		-94.525043
	],
	"50565": [
		42.857398,
		-95.000842
	],
	"50566": [
		42.43777,
		-94.323652
	],
	"50567": [
		42.525449,
		-95.101883
	],
	"50568": [
		42.62605,
		-94.984009
	],
	"50569": [
		42.403206,
		-94.134237
	],
	"50570": [
		42.896101,
		-94.37302
	],
	"50571": [
		42.630964,
		-94.578693
	],
	"50573": [
		42.876758,
		-94.623824
	],
	"50574": [
		42.71667,
		-94.69865
	],
	"50575": [
		42.560349,
		-94.700516
	],
	"50576": [
		42.803272,
		-95.175275
	],
	"50577": [
		42.858665,
		-93.977004
	],
	"50578": [
		43.306502,
		-94.549559
	],
	"50579": [
		42.39431,
		-94.638758
	],
	"50581": [
		42.842996,
		-94.549778
	],
	"50582": [
		42.793838,
		-94.295665
	],
	"50583": [
		42.432731,
		-94.985684
	],
	"50585": [
		42.91753,
		-95.141865
	],
	"50586": [
		42.411859,
		-94.425558
	],
	"50588": [
		42.654596,
		-95.161555
	],
	"50590": [
		43.407052,
		-94.314883
	],
	"50591": [
		42.676032,
		-94.055674
	],
	"50593": [
		42.657197,
		-94.898808
	],
	"50594": [
		42.585196,
		-94.040129
	],
	"50595": [
		42.461417,
		-93.822578
	],
	"50597": [
		42.97525,
		-94.451731
	],
	"50598": [
		43.081849,
		-94.417046
	],
	"50599": [
		42.579322,
		-93.823217
	],
	"50601": [
		42.567768,
		-93.060058
	],
	"50602": [
		42.741405,
		-92.805745
	],
	"50603": [
		43.187727,
		-92.459489
	],
	"50604": [
		42.601831,
		-92.896477
	],
	"50605": [
		42.831759,
		-93.020977
	],
	"50606": [
		42.747316,
		-91.691307
	],
	"50607": [
		42.61055,
		-91.749864
	],
	"50609": [
		42.228377,
		-92.809466
	],
	"50611": [
		42.815488,
		-92.908954
	],
	"50612": [
		42.283447,
		-92.386046
	],
	"50613": [
		42.53138,
		-92.485808
	],
	"50616": [
		43.080601,
		-92.658742
	],
	"50619": [
		42.809681,
		-92.658224
	],
	"50620": [
		43.158425,
		-92.590545
	],
	"50621": [
		42.251109,
		-92.921016
	],
	"50622": [
		42.672713,
		-92.334548
	],
	"50624": [
		42.467823,
		-92.658716
	],
	"50625": [
		42.748385,
		-92.988356
	],
	"50626": [
		42.587047,
		-92.175533
	],
	"50627": [
		42.350393,
		-93.093896
	],
	"50628": [
		43.27271,
		-92.394046
	],
	"50629": [
		42.648669,
		-92.071537
	],
	"50630": [
		42.95768,
		-92.213959
	],
	"50632": [
		42.0616,
		-92.699352
	],
	"50633": [
		42.671799,
		-93.128182
	],
	"50634": [
		42.418675,
		-92.214
	],
	"50635": [
		42.202061,
		-92.699322
	],
	"50636": [
		42.897382,
		-92.810733
	],
	"50638": [
		42.35674,
		-92.793956
	],
	"50641": [
		42.60655,
		-91.920033
	],
	"50642": [
		42.439542,
		-92.816432
	],
	"50643": [
		42.357981,
		-92.464157
	],
	"50644": [
		42.476151,
		-91.893691
	],
	"50645": [
		43.019546,
		-92.443649
	],
	"50647": [
		42.650931,
		-92.49703
	],
	"50648": [
		42.453205,
		-92.09323
	],
	"50650": [
		42.618248,
		-91.65604
	],
	"50651": [
		42.317063,
		-92.19674
	],
	"50652": [
		42.264292,
		-92.69376
	],
	"50653": [
		42.968595,
		-92.885717
	],
	"50654": [
		42.498698,
		-91.64283
	],
	"50655": [
		42.76558,
		-91.891692
	],
	"50658": [
		42.962781,
		-92.542513
	],
	"50659": [
		43.095838,
		-92.329051
	],
	"50660": [
		42.583567,
		-92.631544
	],
	"50662": [
		42.688662,
		-91.937486
	],
	"50664": [
		42.701249,
		-92.076193
	],
	"50665": [
		42.580363,
		-92.771879
	],
	"50666": [
		42.870965,
		-92.520109
	],
	"50667": [
		42.470226,
		-92.22642
	],
	"50668": [
		42.692945,
		-92.228866
	],
	"50669": [
		42.343165,
		-92.602298
	],
	"50670": [
		42.695374,
		-92.618753
	],
	"50671": [
		42.650429,
		-91.795819
	],
	"50672": [
		42.42604,
		-93.071556
	],
	"50673": [
		42.524945,
		-92.711273
	],
	"50674": [
		42.837805,
		-92.11543
	],
	"50675": [
		42.19782,
		-92.512092
	],
	"50676": [
		42.798888,
		-92.280177
	],
	"50677": [
		42.766935,
		-92.426212
	],
	"50680": [
		42.452094,
		-92.923033
	],
	"50681": [
		42.777619,
		-92.009382
	],
	"50682": [
		42.45245,
		-91.688455
	],
	"50701": [
		42.418259,
		-92.339821
	],
	"50702": [
		42.461502,
		-92.313745
	],
	"50703": [
		42.548059,
		-92.286431
	],
	"50707": [
		42.458164,
		-92.260032
	],
	"50801": [
		41.078671,
		-94.401822
	],
	"50830": [
		41.027101,
		-94.191097
	],
	"50833": [
		40.670545,
		-94.700888
	],
	"50835": [
		40.706299,
		-94.375485
	],
	"50836": [
		40.632285,
		-94.497484
	],
	"50837": [
		41.219823,
		-94.691439
	],
	"50839": [
		41.049661,
		-94.824003
	],
	"50840": [
		40.790337,
		-94.482663
	],
	"50841": [
		41.009072,
		-94.768812
	],
	"50842": [
		41.039887,
		-94.461833
	],
	"50843": [
		41.236842,
		-94.885233
	],
	"50845": [
		40.821491,
		-94.349675
	],
	"50846": [
		41.308993,
		-94.576117
	],
	"50847": [
		41.140269,
		-94.98297
	],
	"50848": [
		40.780922,
		-94.764274
	],
	"50849": [
		41.308278,
		-94.38657
	],
	"50851": [
		40.908584,
		-94.537032
	],
	"50853": [
		41.236843,
		-94.767896
	],
	"50854": [
		40.679375,
		-94.21277
	],
	"50857": [
		40.942592,
		-94.880965
	],
	"50858": [
		41.221263,
		-94.409669
	],
	"50859": [
		41.067099,
		-94.597342
	],
	"50860": [
		40.617459,
		-94.347944
	],
	"50861": [
		40.908431,
		-94.255922
	],
	"50862": [
		40.811094,
		-94.657541
	],
	"50863": [
		40.847781,
		-94.175734
	],
	"50864": [
		40.97037,
		-94.978111
	],
	"51001": [
		42.829942,
		-96.527233
	],
	"51002": [
		42.688436,
		-95.319027
	],
	"51003": [
		42.989594,
		-95.985959
	],
	"51004": [
		42.374863,
		-95.915342
	],
	"51005": [
		42.723603,
		-95.418791
	],
	"51006": [
		42.320792,
		-95.619612
	],
	"51007": [
		42.403949,
		-96.187064
	],
	"51008": [
		42.810891,
		-96.266831
	],
	"51009": [
		42.944357,
		-95.551533
	],
	"51010": [
		42.086146,
		-95.909504
	],
	"51011": [
		42.916316,
		-96.514451
	],
	"51012": [
		42.744137,
		-95.561849
	],
	"51014": [
		42.78764,
		-95.707313
	],
	"51016": [
		42.471834,
		-95.805254
	],
	"51018": [
		42.449661,
		-95.680771
	],
	"51019": [
		42.276752,
		-95.71986
	],
	"51020": [
		42.510109,
		-95.413547
	],
	"51022": [
		42.976982,
		-95.850025
	],
	"51023": [
		43.018658,
		-96.460404
	],
	"51024": [
		42.612142,
		-96.262983
	],
	"51025": [
		42.497646,
		-95.556107
	],
	"51026": [
		42.255339,
		-96.068143
	],
	"51027": [
		42.960313,
		-96.322232
	],
	"51028": [
		42.596655,
		-95.98764
	],
	"51029": [
		42.880551,
		-95.537847
	],
	"51030": [
		42.497741,
		-96.188321
	],
	"51031": [
		42.798547,
		-96.186217
	],
	"51033": [
		42.912628,
		-95.251445
	],
	"51034": [
		42.160754,
		-95.78962
	],
	"51035": [
		42.778851,
		-95.799368
	],
	"51036": [
		42.96972,
		-96.189483
	],
	"51037": [
		42.826671,
		-95.643137
	],
	"51038": [
		42.703191,
		-96.316957
	],
	"51039": [
		42.449218,
		-96.04956
	],
	"51040": [
		42.036236,
		-96.087049
	],
	"51041": [
		43.026086,
		-96.077904
	],
	"51044": [
		42.306211,
		-95.918126
	],
	"51046": [
		42.961834,
		-95.67802
	],
	"51047": [
		42.942362,
		-95.36954
	],
	"51048": [
		42.550952,
		-95.84131
	],
	"51049": [
		42.629125,
		-95.647492
	],
	"51050": [
		42.793616,
		-95.945925
	],
	"51051": [
		42.206091,
		-95.96496
	],
	"51052": [
		42.308234,
		-96.265987
	],
	"51053": [
		42.495057,
		-95.286548
	],
	"51054": [
		42.380126,
		-96.316111
	],
	"51055": [
		42.221916,
		-96.261066
	],
	"51056": [
		42.241293,
		-95.956396
	],
	"51058": [
		42.973945,
		-95.467315
	],
	"51060": [
		42.042383,
		-95.684393
	],
	"51061": [
		42.580726,
		-95.718471
	],
	"51062": [
		42.697865,
		-96.534926
	],
	"51063": [
		42.139159,
		-96.168318
	],
	"51101": [
		42.493688,
		-96.394184
	],
	"51103": [
		42.517086,
		-96.439937
	],
	"51104": [
		42.536156,
		-96.40468
	],
	"51105": [
		42.51194,
		-96.352258
	],
	"51106": [
		42.462983,
		-96.321502
	],
	"51108": [
		42.565982,
		-96.352506
	],
	"51109": [
		42.580903,
		-96.475226
	],
	"51111": [
		42.413553,
		-96.385435
	],
	"51201": [
		43.182318,
		-95.865703
	],
	"51230": [
		43.36033,
		-96.323632
	],
	"51231": [
		43.103129,
		-95.742199
	],
	"51232": [
		43.308625,
		-95.812663
	],
	"51234": [
		43.192205,
		-96.019335
	],
	"51235": [
		43.294539,
		-96.218369
	],
	"51237": [
		43.336066,
		-96.000764
	],
	"51238": [
		43.074388,
		-95.892427
	],
	"51239": [
		43.203917,
		-96.147481
	],
	"51240": [
		43.309361,
		-96.458419
	],
	"51241": [
		43.451232,
		-96.46175
	],
	"51242": [
		43.441122,
		-96.334856
	],
	"51243": [
		43.43974,
		-95.910459
	],
	"51244": [
		43.244783,
		-95.935475
	],
	"51245": [
		43.074701,
		-95.599948
	],
	"51246": [
		43.427963,
		-96.168032
	],
	"51247": [
		43.193752,
		-96.338127
	],
	"51248": [
		43.20554,
		-95.657879
	],
	"51249": [
		43.411232,
		-95.726614
	],
	"51250": [
		43.090933,
		-96.205811
	],
	"51301": [
		43.15317,
		-95.147654
	],
	"51331": [
		43.361009,
		-95.127454
	],
	"51333": [
		43.129376,
		-94.996651
	],
	"51334": [
		43.403965,
		-94.803685
	],
	"51338": [
		43.205366,
		-95.31875
	],
	"51341": [
		43.014277,
		-95.038748
	],
	"51342": [
		43.247877,
		-94.73688
	],
	"51343": [
		43.01851,
		-95.106025
	],
	"51345": [
		43.407697,
		-95.437473
	],
	"51346": [
		43.180463,
		-95.459451
	],
	"51347": [
		43.422425,
		-95.318451
	],
	"51350": [
		43.310963,
		-95.600833
	],
	"51351": [
		43.315064,
		-95.183646
	],
	"51354": [
		43.410626,
		-95.540813
	],
	"51355": [
		43.388151,
		-95.136734
	],
	"51357": [
		43.060774,
		-95.280618
	],
	"51358": [
		43.131532,
		-94.899551
	],
	"51360": [
		43.443563,
		-95.08703
	],
	"51363": [
		43.433689,
		-94.946743
	],
	"51364": [
		43.299552,
		-94.965445
	],
	"51365": [
		43.309619,
		-94.733283
	],
	"51366": [
		42.960703,
		-95.002954
	],
	"51401": [
		42.065661,
		-94.86966
	],
	"51430": [
		42.082258,
		-95.024722
	],
	"51431": [
		42.344843,
		-95.351693
	],
	"51433": [
		42.266648,
		-94.875329
	],
	"51436": [
		42.189157,
		-95.024273
	],
	"51439": [
		42.088789,
		-95.590386
	],
	"51440": [
		41.913329,
		-94.812977
	],
	"51441": [
		42.113305,
		-95.315427
	],
	"51442": [
		42.027498,
		-95.360635
	],
	"51443": [
		42.081884,
		-94.696842
	],
	"51444": [
		42.004839,
		-94.973118
	],
	"51445": [
		42.321415,
		-95.462213
	],
	"51446": [
		41.775094,
		-95.191827
	],
	"51447": [
		41.722094,
		-95.195981
	],
	"51448": [
		42.205359,
		-95.309789
	],
	"51449": [
		42.267823,
		-94.734406
	],
	"51450": [
		42.316397,
		-95.020737
	],
	"51451": [
		42.18408,
		-94.695158
	],
	"51453": [
		42.269723,
		-94.547338
	],
	"51454": [
		41.871279,
		-95.202731
	],
	"51455": [
		41.911565,
		-95.055142
	],
	"51458": [
		42.326375,
		-95.235308
	],
	"51459": [
		42.045221,
		-94.637957
	],
	"51461": [
		42.176055,
		-95.48536
	],
	"51462": [
		42.014377,
		-94.556522
	],
	"51463": [
		41.907466,
		-94.912733
	],
	"51465": [
		42.086886,
		-95.200725
	],
	"51466": [
		42.257168,
		-95.106732
	],
	"51467": [
		42.07266,
		-95.117995
	],
	"51501": [
		41.227277,
		-95.878439
	],
	"51503": [
		41.22322,
		-95.784481
	],
	"51510": [
		41.288533,
		-95.916872
	],
	"51520": [
		41.969542,
		-95.461432
	],
	"51521": [
		41.485499,
		-95.34468
	],
	"51523": [
		41.915211,
		-96.06771
	],
	"51525": [
		41.233852,
		-95.416285
	],
	"51526": [
		41.37389,
		-95.871784
	],
	"51527": [
		41.839897,
		-95.336506
	],
	"51528": [
		41.909086,
		-95.501099
	],
	"51529": [
		41.860476,
		-95.643463
	],
	"51530": [
		41.787452,
		-95.430485
	],
	"51531": [
		41.588685,
		-95.087216
	],
	"51532": [
		41.137981,
		-95.109116
	],
	"51533": [
		41.039454,
		-95.378172
	],
	"51534": [
		41.046593,
		-95.714836
	],
	"51535": [
		41.226455,
		-95.126689
	],
	"51536": [
		41.386619,
		-95.362195
	],
	"51537": [
		41.650131,
		-95.297511
	],
	"51540": [
		41.024264,
		-95.498872
	],
	"51541": [
		41.139051,
		-95.415922
	],
	"51542": [
		41.431517,
		-95.849085
	],
	"51543": [
		41.656752,
		-95.075931
	],
	"51544": [
		41.301861,
		-95.105354
	],
	"51545": [
		41.8446,
		-96.030365
	],
	"51546": [
		41.637077,
		-95.766074
	],
	"51548": [
		41.317852,
		-95.636978
	],
	"51549": [
		41.18583,
		-95.466707
	],
	"51550": [
		41.692141,
		-95.874194
	],
	"51551": [
		40.99082,
		-95.587501
	],
	"51552": [
		41.490756,
		-95.113519
	],
	"51553": [
		41.42445,
		-95.54616
	],
	"51554": [
		41.147388,
		-95.681849
	],
	"51555": [
		41.560102,
		-95.923061
	],
	"51556": [
		41.641709,
		-96.029262
	],
	"51557": [
		41.731738,
		-95.997557
	],
	"51558": [
		41.90169,
		-95.870563
	],
	"51559": [
		41.46633,
		-95.648897
	],
	"51560": [
		41.315294,
		-95.399855
	],
	"51561": [
		41.00789,
		-95.80619
	],
	"51562": [
		41.725074,
		-95.49332
	],
	"51563": [
		41.570675,
		-95.585585
	],
	"51564": [
		41.809589,
		-95.922824
	],
	"51565": [
		41.642949,
		-95.524429
	],
	"51566": [
		41.016459,
		-95.230901
	],
	"51570": [
		41.527719,
		-95.465469
	],
	"51571": [
		41.136915,
		-95.606141
	],
	"51572": [
		41.993144,
		-95.784281
	],
	"51573": [
		40.979559,
		-95.097052
	],
	"51575": [
		41.240054,
		-95.602157
	],
	"51576": [
		41.382876,
		-95.714924
	],
	"51577": [
		41.463613,
		-95.203768
	],
	"51578": [
		41.719356,
		-95.394557
	],
	"51579": [
		41.761735,
		-95.719133
	],
	"51601": [
		40.726129,
		-95.349564
	],
	"51630": [
		40.601018,
		-95.191338
	],
	"51631": [
		40.591418,
		-95.009999
	],
	"51632": [
		40.74569,
		-95.047167
	],
	"51636": [
		40.667282,
		-95.232559
	],
	"51637": [
		40.62486,
		-95.115683
	],
	"51638": [
		40.836198,
		-95.279939
	],
	"51639": [
		40.720122,
		-95.466403
	],
	"51640": [
		40.623488,
		-95.656223
	],
	"51645": [
		40.881893,
		-95.432524
	],
	"51646": [
		40.747685,
		-94.874449
	],
	"51647": [
		40.608873,
		-95.319718
	],
	"51648": [
		40.739475,
		-95.800397
	],
	"51649": [
		40.850406,
		-95.527041
	],
	"51650": [
		40.666385,
		-95.542483
	],
	"51652": [
		40.772515,
		-95.623138
	],
	"51653": [
		40.878427,
		-95.68233
	],
	"51654": [
		40.834885,
		-95.781549
	],
	"51656": [
		40.734708,
		-95.156343
	],
	"52001": [
		42.545527,
		-90.695841
	],
	"52002": [
		42.524772,
		-90.773208
	],
	"52003": [
		42.430701,
		-90.669682
	],
	"52030": [
		42.153216,
		-90.591931
	],
	"52031": [
		42.252564,
		-90.486421
	],
	"52032": [
		42.289646,
		-90.839534
	],
	"52033": [
		42.279037,
		-91.001217
	],
	"52035": [
		42.670738,
		-91.181213
	],
	"52037": [
		41.96724,
		-90.633754
	],
	"52038": [
		42.586686,
		-91.561477
	],
	"52039": [
		42.539164,
		-90.860977
	],
	"52040": [
		42.503666,
		-91.141684
	],
	"52041": [
		42.505553,
		-91.261385
	],
	"52042": [
		42.698093,
		-91.357515
	],
	"52043": [
		42.83402,
		-91.426319
	],
	"52044": [
		42.769019,
		-91.323506
	],
	"52045": [
		42.460825,
		-90.937541
	],
	"52046": [
		42.438356,
		-91.013113
	],
	"52047": [
		42.969264,
		-91.34182
	],
	"52048": [
		42.742126,
		-91.257204
	],
	"52049": [
		42.885565,
		-91.199378
	],
	"52050": [
		42.604314,
		-91.3299
	],
	"52052": [
		42.742443,
		-91.116701
	],
	"52053": [
		42.61115,
		-90.96105
	],
	"52054": [
		42.305364,
		-90.62711
	],
	"52057": [
		42.489481,
		-91.455885
	],
	"52060": [
		42.10602,
		-90.682756
	],
	"52064": [
		42.093574,
		-90.310826
	],
	"52065": [
		42.593678,
		-91.108655
	],
	"52066": [
		42.678326,
		-90.951844
	],
	"52068": [
		42.422872,
		-90.817179
	],
	"52069": [
		42.060763,
		-90.42999
	],
	"52070": [
		42.078979,
		-90.236813
	],
	"52072": [
		42.922014,
		-91.377806
	],
	"52073": [
		42.618877,
		-90.821666
	],
	"52074": [
		42.110483,
		-90.462429
	],
	"52076": [
		42.69982,
		-91.51015
	],
	"52077": [
		42.820999,
		-91.562518
	],
	"52078": [
		42.395826,
		-91.115713
	],
	"52079": [
		42.285473,
		-90.716232
	],
	"52101": [
		43.353426,
		-91.766355
	],
	"52132": [
		43.211156,
		-91.928147
	],
	"52133": [
		43.108907,
		-91.660586
	],
	"52134": [
		43.469554,
		-92.411225
	],
	"52135": [
		43.015824,
		-91.663225
	],
	"52136": [
		43.374077,
		-92.111673
	],
	"52140": [
		43.445644,
		-91.534572
	],
	"52141": [
		42.931147,
		-91.640926
	],
	"52142": [
		42.826016,
		-91.798289
	],
	"52144": [
		43.139153,
		-91.962362
	],
	"52146": [
		43.175923,
		-91.206021
	],
	"52147": [
		42.957479,
		-91.958474
	],
	"52151": [
		43.346405,
		-91.264794
	],
	"52154": [
		43.117969,
		-92.165246
	],
	"52155": [
		43.421657,
		-92.288542
	],
	"52156": [
		43.052512,
		-91.462345
	],
	"52157": [
		43.021895,
		-91.240309
	],
	"52158": [
		43.043969,
		-91.182403
	],
	"52159": [
		43.078775,
		-91.365594
	],
	"52160": [
		43.459653,
		-91.351712
	],
	"52161": [
		43.12953,
		-91.757125
	],
	"52162": [
		43.107544,
		-91.551627
	],
	"52163": [
		43.219766,
		-92.103094
	],
	"52164": [
		42.854706,
		-91.906611
	],
	"52165": [
		43.308542,
		-91.994305
	],
	"52166": [
		43.065843,
		-91.93329
	],
	"52168": [
		43.205528,
		-91.952413
	],
	"52169": [
		42.860729,
		-91.663085
	],
	"52170": [
		43.223874,
		-91.305191
	],
	"52171": [
		43.068229,
		-92.052943
	],
	"52172": [
		43.270781,
		-91.484427
	],
	"52175": [
		42.993945,
		-91.825624
	],
	"52201": [
		41.32966,
		-91.547062
	],
	"52202": [
		42.159359,
		-91.638281
	],
	"52203": [
		41.813857,
		-91.89159
	],
	"52205": [
		42.119724,
		-91.286273
	],
	"52206": [
		41.99158,
		-91.885466
	],
	"52207": [
		42.095059,
		-90.831678
	],
	"52208": [
		41.876782,
		-92.25691
	],
	"52209": [
		41.908989,
		-92.097513
	],
	"52210": [
		42.334017,
		-91.992953
	],
	"52211": [
		41.75389,
		-92.449753
	],
	"52212": [
		42.108797,
		-91.090273
	],
	"52213": [
		42.201852,
		-91.759632
	],
	"52214": [
		42.18789,
		-91.509279
	],
	"52215": [
		41.913527,
		-92.405288
	],
	"52216": [
		41.886489,
		-91.039637
	],
	"52217": [
		42.079987,
		-92.407882
	],
	"52218": [
		42.290268,
		-91.533585
	],
	"52219": [
		42.237735,
		-91.425836
	],
	"52220": [
		41.728234,
		-91.998369
	],
	"52221": [
		41.640929,
		-92.331699
	],
	"52222": [
		41.576405,
		-92.34065
	],
	"52223": [
		42.41258,
		-91.324368
	],
	"52224": [
		42.165911,
		-92.299761
	],
	"52225": [
		42.010822,
		-92.326845
	],
	"52227": [
		41.894397,
		-91.570227
	],
	"52228": [
		41.90229,
		-91.788702
	],
	"52229": [
		42.144629,
		-92.169234
	],
	"52231": [
		41.358831,
		-92.058629
	],
	"52232": [
		41.80436,
		-92.335802
	],
	"52233": [
		42.04677,
		-91.686869
	],
	"52235": [
		41.578672,
		-91.531602
	],
	"52236": [
		41.733573,
		-91.876568
	],
	"52237": [
		42.344382,
		-91.248693
	],
	"52240": [
		41.635728,
		-91.500622
	],
	"52241": [
		41.699578,
		-91.595951
	],
	"52242": [
		41.66188,
		-91.54594
	],
	"52245": [
		41.672878,
		-91.512105
	],
	"52246": [
		41.652313,
		-91.570407
	],
	"52247": [
		41.518674,
		-91.72329
	],
	"52248": [
		41.345772,
		-91.935346
	],
	"52249": [
		42.014152,
		-92.205426
	],
	"52251": [
		41.710291,
		-92.192601
	],
	"52253": [
		41.895347,
		-91.353372
	],
	"52254": [
		41.952101,
		-90.801178
	],
	"52255": [
		41.863616,
		-90.961247
	],
	"52257": [
		41.920953,
		-92.178222
	],
	"52301": [
		41.788511,
		-92.082501
	],
	"52302": [
		42.065415,
		-91.560853
	],
	"52305": [
		42.019197,
		-91.339225
	],
	"52306": [
		41.887089,
		-91.254211
	],
	"52307": [
		41.793107,
		-91.898692
	],
	"52308": [
		41.572284,
		-92.158723
	],
	"52309": [
		42.131684,
		-90.888642
	],
	"52310": [
		42.220372,
		-91.195364
	],
	"52312": [
		42.006028,
		-91.245872
	],
	"52313": [
		42.257377,
		-92.096977
	],
	"52314": [
		41.935711,
		-91.447891
	],
	"52315": [
		42.000913,
		-91.970072
	],
	"52316": [
		41.545573,
		-92.094822
	],
	"52317": [
		41.767125,
		-91.634508
	],
	"52318": [
		41.88928,
		-91.89273
	],
	"52320": [
		41.99915,
		-91.148391
	],
	"52321": [
		42.147226,
		-90.983228
	],
	"52322": [
		41.692718,
		-91.762785
	],
	"52323": [
		41.983656,
		-90.959012
	],
	"52324": [
		42.063907,
		-91.806141
	],
	"52325": [
		41.583907,
		-91.925884
	],
	"52326": [
		42.390661,
		-91.755826
	],
	"52327": [
		41.477136,
		-91.582989
	],
	"52328": [
		42.0716,
		-91.666092
	],
	"52329": [
		42.35824,
		-91.855634
	],
	"52330": [
		42.349445,
		-91.500496
	],
	"52332": [
		42.098613,
		-91.888293
	],
	"52333": [
		41.805879,
		-91.492386
	],
	"52334": [
		41.740139,
		-91.941137
	],
	"52335": [
		41.467961,
		-92.053796
	],
	"52336": [
		42.070516,
		-91.432362
	],
	"52337": [
		41.880203,
		-91.142058
	],
	"52338": [
		41.8179,
		-91.707501
	],
	"52339": [
		41.927944,
		-92.587091
	],
	"52340": [
		41.705634,
		-91.676831
	],
	"52341": [
		42.102854,
		-91.726179
	],
	"52342": [
		42.057671,
		-92.547483
	],
	"52345": [
		42.245556,
		-91.901472
	],
	"52346": [
		42.010028,
		-92.080653
	],
	"52347": [
		41.71254,
		-92.284493
	],
	"52348": [
		41.990137,
		-92.381481
	],
	"52349": [
		42.173246,
		-92.00963
	],
	"52351": [
		41.877931,
		-91.831726
	],
	"52352": [
		42.288221,
		-91.774837
	],
	"52353": [
		41.299352,
		-91.711487
	],
	"52354": [
		41.915981,
		-91.987759
	],
	"52355": [
		41.460617,
		-92.191832
	],
	"52356": [
		41.473717,
		-91.845147
	],
	"52358": [
		41.6914,
		-91.318432
	],
	"52359": [
		41.358506,
		-91.807482
	],
	"52361": [
		41.649114,
		-92.02988
	],
	"52362": [
		42.078991,
		-90.983415
	],
	"52401": [
		41.975486,
		-91.659172
	],
	"52402": [
		42.023172,
		-91.659613
	],
	"52403": [
		41.965959,
		-91.566054
	],
	"52404": [
		41.923056,
		-91.698866
	],
	"52405": [
		41.983384,
		-91.746369
	],
	"52411": [
		42.053802,
		-91.729225
	],
	"52501": [
		41.035705,
		-92.43137
	],
	"52530": [
		40.99343,
		-92.292791
	],
	"52531": [
		41.026364,
		-92.815135
	],
	"52533": [
		41.02123,
		-92.159365
	],
	"52534": [
		41.271952,
		-92.68193
	],
	"52535": [
		40.862944,
		-91.959572
	],
	"52536": [
		40.957466,
		-92.60891
	],
	"52537": [
		40.734988,
		-92.413618
	],
	"52540": [
		41.156205,
		-91.821579
	],
	"52542": [
		40.61985,
		-92.056237
	],
	"52543": [
		41.201977,
		-92.512669
	],
	"52544": [
		40.706642,
		-92.912272
	],
	"52548": [
		41.085835,
		-92.532981
	],
	"52549": [
		40.618642,
		-92.943113
	],
	"52550": [
		41.31031,
		-92.355076
	],
	"52551": [
		40.824773,
		-92.109395
	],
	"52552": [
		40.827093,
		-92.548748
	],
	"52553": [
		41.148432,
		-92.654929
	],
	"52554": [
		40.925319,
		-92.227697
	],
	"52555": [
		40.644326,
		-92.816175
	],
	"52556": [
		41.0242,
		-91.927545
	],
	"52557": [
		41.022148,
		-91.964773
	],
	"52560": [
		40.854846,
		-92.249246
	],
	"52561": [
		41.220285,
		-92.452262
	],
	"52563": [
		41.168346,
		-92.281811
	],
	"52565": [
		40.742079,
		-91.934492
	],
	"52566": [
		41.147999,
		-92.502542
	],
	"52567": [
		40.930193,
		-92.077955
	],
	"52569": [
		40.983043,
		-93.045561
	],
	"52570": [
		40.687411,
		-92.146225
	],
	"52571": [
		40.882043,
		-92.84061
	],
	"52572": [
		40.67049,
		-92.688437
	],
	"52573": [
		40.627569,
		-91.928849
	],
	"52574": [
		40.806745,
		-92.971933
	],
	"52576": [
		41.215153,
		-92.109419
	],
	"52577": [
		41.272983,
		-92.661641
	],
	"52580": [
		41.105218,
		-92.090331
	],
	"52581": [
		40.80122,
		-93.063949
	],
	"52583": [
		40.793886,
		-93.148924
	],
	"52584": [
		40.63767,
		-92.248193
	],
	"52585": [
		41.193215,
		-91.981001
	],
	"52586": [
		41.344968,
		-92.461377
	],
	"52588": [
		40.865116,
		-92.170367
	],
	"52590": [
		40.660221,
		-93.124967
	],
	"52591": [
		41.316641,
		-92.191374
	],
	"52593": [
		40.772293,
		-92.746226
	],
	"52594": [
		40.836021,
		-92.652405
	],
	"52595": [
		41.28863,
		-92.614973
	],
	"52601": [
		40.85605,
		-91.129717
	],
	"52619": [
		40.525346,
		-91.565024
	],
	"52620": [
		40.697841,
		-91.797219
	],
	"52621": [
		41.208542,
		-91.533756
	],
	"52623": [
		40.863483,
		-91.335673
	],
	"52624": [
		40.736419,
		-91.337723
	],
	"52625": [
		40.660782,
		-91.574196
	],
	"52626": [
		40.623515,
		-91.724296
	],
	"52627": [
		40.66626,
		-91.349158
	],
	"52630": [
		40.798743,
		-91.711455
	],
	"52632": [
		40.431939,
		-91.444612
	],
	"52635": [
		40.995562,
		-91.758587
	],
	"52637": [
		41.017544,
		-91.145949
	],
	"52638": [
		40.801453,
		-91.242327
	],
	"52639": [
		40.53271,
		-91.460387
	],
	"52640": [
		41.101237,
		-91.280466
	],
	"52641": [
		40.994585,
		-91.585772
	],
	"52644": [
		41.039995,
		-91.41498
	],
	"52645": [
		40.912216,
		-91.404227
	],
	"52646": [
		41.056576,
		-90.998123
	],
	"52647": [
		41.135101,
		-91.544658
	],
	"52649": [
		40.838567,
		-91.612149
	],
	"52650": [
		40.95121,
		-91.152038
	],
	"52651": [
		40.864144,
		-91.813729
	],
	"52653": [
		41.163699,
		-91.157419
	],
	"52654": [
		41.140702,
		-91.671739
	],
	"52655": [
		40.847271,
		-91.21391
	],
	"52656": [
		40.739814,
		-91.4555
	],
	"52657": [
		40.767833,
		-91.518819
	],
	"52658": [
		40.699404,
		-91.229654
	],
	"52659": [
		41.129203,
		-91.441022
	],
	"52660": [
		40.994596,
		-91.29937
	],
	"52701": [
		41.981968,
		-90.249117
	],
	"52720": [
		41.587724,
		-91.173386
	],
	"52721": [
		41.756923,
		-90.959696
	],
	"52722": [
		41.570324,
		-90.470131
	],
	"52726": [
		41.496325,
		-90.780378
	],
	"52727": [
		41.954788,
		-90.32594
	],
	"52728": [
		41.45389,
		-90.742306
	],
	"52729": [
		41.800183,
		-90.735691
	],
	"52730": [
		41.77567,
		-90.335349
	],
	"52731": [
		41.966975,
		-90.486426
	],
	"52732": [
		41.891044,
		-90.253005
	],
	"52737": [
		41.259277,
		-91.374611
	],
	"52738": [
		41.273663,
		-91.378479
	],
	"52739": [
		41.373418,
		-91.36748
	],
	"52742": [
		41.838263,
		-90.5197
	],
	"52745": [
		41.718602,
		-90.766483
	],
	"52746": [
		41.716455,
		-90.670392
	],
	"52747": [
		41.611037,
		-90.905677
	],
	"52748": [
		41.665776,
		-90.554924
	],
	"52749": [
		41.34563,
		-91.130747
	],
	"52750": [
		41.937024,
		-90.397049
	],
	"52751": [
		41.836435,
		-90.679785
	],
	"52752": [
		41.274726,
		-91.191222
	],
	"52753": [
		41.628548,
		-90.385928
	],
	"52754": [
		41.349702,
		-91.227417
	],
	"52755": [
		41.479379,
		-91.43425
	],
	"52756": [
		41.729401,
		-90.539115
	],
	"52757": [
		41.803854,
		-90.379055
	],
	"52758": [
		41.745914,
		-90.4396
	],
	"52760": [
		41.548655,
		-91.086807
	],
	"52761": [
		41.439931,
		-91.064259
	],
	"52765": [
		41.725473,
		-90.871502
	],
	"52766": [
		41.467543,
		-91.295421
	],
	"52767": [
		41.565852,
		-90.423456
	],
	"52768": [
		41.70068,
		-90.386997
	],
	"52769": [
		41.605804,
		-90.847235
	],
	"52772": [
		41.755167,
		-91.143672
	],
	"52773": [
		41.62154,
		-90.75276
	],
	"52774": [
		41.906849,
		-90.595121
	],
	"52776": [
		41.575264,
		-91.268626
	],
	"52777": [
		41.854006,
		-90.856109
	],
	"52778": [
		41.607831,
		-90.989686
	],
	"52801": [
		41.521038,
		-90.574849
	],
	"52802": [
		41.494514,
		-90.637187
	],
	"52803": [
		41.538947,
		-90.555977
	],
	"52804": [
		41.532458,
		-90.681249
	],
	"52806": [
		41.589689,
		-90.625888
	],
	"52807": [
		41.61069,
		-90.516843
	],
	"53001": [
		43.607877,
		-88.055245
	],
	"53002": [
		43.463948,
		-88.352067
	],
	"53003": [
		43.206569,
		-88.509682
	],
	"53004": [
		43.497835,
		-87.875646
	],
	"53005": [
		43.062401,
		-88.098804
	],
	"53006": [
		43.620098,
		-88.533555
	],
	"53007": [
		43.108448,
		-88.072232
	],
	"53010": [
		43.612528,
		-88.272017
	],
	"53011": [
		43.659584,
		-88.091389
	],
	"53012": [
		43.314732,
		-88.034639
	],
	"53013": [
		43.565318,
		-87.846917
	],
	"53014": [
		44.026076,
		-88.176312
	],
	"53015": [
		43.907689,
		-87.785999
	],
	"53016": [
		43.31024,
		-88.71013
	],
	"53017": [
		43.201014,
		-88.251366
	],
	"53018": [
		43.048165,
		-88.390515
	],
	"53019": [
		43.697925,
		-88.321723
	],
	"53020": [
		43.861777,
		-88.011415
	],
	"53021": [
		43.494647,
		-88.009318
	],
	"53022": [
		43.232179,
		-88.1158
	],
	"53023": [
		43.780438,
		-88.10667
	],
	"53024": [
		43.333613,
		-87.928329
	],
	"53027": [
		43.317984,
		-88.372522
	],
	"53029": [
		43.146603,
		-88.341
	],
	"53031": [
		43.639144,
		-87.915628
	],
	"53032": [
		43.449585,
		-88.624792
	],
	"53033": [
		43.234938,
		-88.253996
	],
	"53034": [
		43.330168,
		-88.618784
	],
	"53035": [
		43.390641,
		-88.546919
	],
	"53036": [
		43.179661,
		-88.575045
	],
	"53037": [
		43.312141,
		-88.163134
	],
	"53038": [
		43.084329,
		-88.787652
	],
	"53039": [
		43.369846,
		-88.713347
	],
	"53040": [
		43.526965,
		-88.191027
	],
	"53042": [
		43.956873,
		-87.972329
	],
	"53044": [
		43.742514,
		-87.782195
	],
	"53045": [
		43.058889,
		-88.15252
	],
	"53046": [
		43.157247,
		-88.157895
	],
	"53047": [
		43.257123,
		-88.63012
	],
	"53048": [
		43.57379,
		-88.457156
	],
	"53049": [
		43.886116,
		-88.288605
	],
	"53050": [
		43.510549,
		-88.547354
	],
	"53051": [
		43.159411,
		-88.121548
	],
	"53057": [
		43.794689,
		-88.236793
	],
	"53058": [
		43.112262,
		-88.411475
	],
	"53059": [
		43.288567,
		-88.525136
	],
	"53061": [
		43.945427,
		-88.120654
	],
	"53063": [
		43.957651,
		-87.790583
	],
	"53065": [
		43.679772,
		-88.571625
	],
	"53066": [
		43.112853,
		-88.490036
	],
	"53069": [
		43.11089,
		-88.435005
	],
	"53070": [
		43.62043,
		-87.807118
	],
	"53072": [
		43.081609,
		-88.270816
	],
	"53073": [
		43.750854,
		-87.988185
	],
	"53074": [
		43.41985,
		-87.884515
	],
	"53075": [
		43.564515,
		-87.990969
	],
	"53076": [
		43.268403,
		-88.207021
	],
	"53078": [
		43.317703,
		-88.466213
	],
	"53079": [
		43.813685,
		-88.180167
	],
	"53080": [
		43.405793,
		-87.98633
	],
	"53081": [
		43.710329,
		-87.733076
	],
	"53083": [
		43.815995,
		-87.764488
	],
	"53085": [
		43.732821,
		-87.855577
	],
	"53086": [
		43.317599,
		-88.271073
	],
	"53088": [
		44.070499,
		-88.300913
	],
	"53089": [
		43.144615,
		-88.233772
	],
	"53090": [
		43.462856,
		-88.188952
	],
	"53091": [
		43.499624,
		-88.434562
	],
	"53092": [
		43.214964,
		-87.951218
	],
	"53093": [
		43.652874,
		-87.94795
	],
	"53094": [
		43.14332,
		-88.723069
	],
	"53095": [
		43.38963,
		-88.158004
	],
	"53097": [
		43.242049,
		-88.009823
	],
	"53098": [
		43.253742,
		-88.710584
	],
	"53103": [
		42.881486,
		-88.212533
	],
	"53104": [
		42.547457,
		-88.03928
	],
	"53105": [
		42.663513,
		-88.280371
	],
	"53108": [
		42.815148,
		-87.943004
	],
	"53110": [
		42.950505,
		-87.860883
	],
	"53114": [
		42.59699,
		-88.751804
	],
	"53115": [
		42.656603,
		-88.668293
	],
	"53118": [
		42.962493,
		-88.49154
	],
	"53119": [
		42.892996,
		-88.485529
	],
	"53120": [
		42.80275,
		-88.417464
	],
	"53121": [
		42.719719,
		-88.534143
	],
	"53122": [
		43.04752,
		-88.087029
	],
	"53125": [
		42.550039,
		-88.554372
	],
	"53126": [
		42.794482,
		-87.997744
	],
	"53128": [
		42.528809,
		-88.334964
	],
	"53129": [
		42.939993,
		-88.000857
	],
	"53130": [
		42.941231,
		-88.0495
	],
	"53132": [
		42.883879,
		-88.011548
	],
	"53137": [
		43.007883,
		-88.669078
	],
	"53139": [
		42.685512,
		-88.120797
	],
	"53140": [
		42.622309,
		-87.828803
	],
	"53142": [
		42.518443,
		-87.982635
	],
	"53143": [
		42.561312,
		-87.82993
	],
	"53144": [
		42.622122,
		-87.920178
	],
	"53146": [
		42.973705,
		-88.155385
	],
	"53147": [
		42.565922,
		-88.457346
	],
	"53149": [
		42.878253,
		-88.342486
	],
	"53150": [
		42.871356,
		-88.13432
	],
	"53151": [
		42.974779,
		-88.098607
	],
	"53153": [
		42.934471,
		-88.407089
	],
	"53154": [
		42.878693,
		-87.898676
	],
	"53156": [
		42.889865,
		-88.588838
	],
	"53158": [
		42.52436,
		-87.88553
	],
	"53167": [
		42.744549,
		-88.228216
	],
	"53168": [
		42.575072,
		-88.135698
	],
	"53170": [
		42.550836,
		-88.153803
	],
	"53172": [
		42.911998,
		-87.859664
	],
	"53177": [
		42.70422,
		-87.932797
	],
	"53178": [
		43.029545,
		-88.596788
	],
	"53179": [
		42.513801,
		-88.130588
	],
	"53181": [
		42.512708,
		-88.243032
	],
	"53182": [
		42.702391,
		-88.041279
	],
	"53183": [
		43.005837,
		-88.370357
	],
	"53184": [
		42.52624,
		-88.605447
	],
	"53185": [
		42.798205,
		-88.194451
	],
	"53186": [
		43.022155,
		-88.204676
	],
	"53188": [
		43.023431,
		-88.292191
	],
	"53189": [
		42.944059,
		-88.29098
	],
	"53190": [
		42.807771,
		-88.736201
	],
	"53191": [
		42.588193,
		-88.553354
	],
	"53192": [
		42.50259,
		-88.184228
	],
	"53195": [
		42.513993,
		-88.490181
	],
	"53202": [
		43.049579,
		-87.89252
	],
	"53203": [
		43.038097,
		-87.916734
	],
	"53204": [
		43.018587,
		-87.926053
	],
	"53205": [
		43.053467,
		-87.933796
	],
	"53206": [
		43.075132,
		-87.933696
	],
	"53207": [
		42.975097,
		-87.8989
	],
	"53208": [
		43.047073,
		-87.967198
	],
	"53209": [
		43.12778,
		-87.949473
	],
	"53210": [
		43.06884,
		-87.973768
	],
	"53211": [
		43.082414,
		-87.881444
	],
	"53212": [
		43.073857,
		-87.908604
	],
	"53213": [
		43.048805,
		-88.00152
	],
	"53214": [
		43.020327,
		-88.012871
	],
	"53215": [
		42.999273,
		-87.943018
	],
	"53216": [
		43.08639,
		-87.976385
	],
	"53217": [
		43.158204,
		-87.913225
	],
	"53218": [
		43.11372,
		-87.99298
	],
	"53219": [
		42.995181,
		-87.993688
	],
	"53220": [
		42.965206,
		-87.991364
	],
	"53221": [
		42.953915,
		-87.944497
	],
	"53222": [
		43.083208,
		-88.036041
	],
	"53223": [
		43.163455,
		-87.990496
	],
	"53224": [
		43.16333,
		-88.039699
	],
	"53225": [
		43.115154,
		-88.042944
	],
	"53226": [
		43.048954,
		-88.042234
	],
	"53227": [
		42.995814,
		-88.042017
	],
	"53228": [
		42.969046,
		-88.043224
	],
	"53233": [
		43.03692,
		-87.933832
	],
	"53235": [
		42.973107,
		-87.867895
	],
	"53295": [
		43.022478,
		-87.976072
	],
	"53402": [
		42.795888,
		-87.816532
	],
	"53403": [
		42.684188,
		-87.815533
	],
	"53404": [
		42.754054,
		-87.811291
	],
	"53405": [
		42.726918,
		-87.830175
	],
	"53406": [
		42.734536,
		-87.864893
	],
	"53501": [
		42.60621,
		-89.065499
	],
	"53502": [
		42.730406,
		-89.438069
	],
	"53503": [
		43.142976,
		-89.957507
	],
	"53504": [
		42.703516,
		-89.860349
	],
	"53505": [
		42.661074,
		-88.820897
	],
	"53506": [
		43.164826,
		-90.286429
	],
	"53507": [
		42.984283,
		-89.913876
	],
	"53508": [
		42.866188,
		-89.575582
	],
	"53510": [
		42.745356,
		-90.305238
	],
	"53511": [
		42.553995,
		-89.094444
	],
	"53515": [
		43.115004,
		-89.739338
	],
	"53516": [
		42.796985,
		-89.873456
	],
	"53517": [
		43.056983,
		-89.832329
	],
	"53518": [
		43.240989,
		-90.59513
	],
	"53520": [
		42.596822,
		-89.352736
	],
	"53521": [
		42.838105,
		-89.400302
	],
	"53522": [
		42.556909,
		-89.78349
	],
	"53523": [
		42.984409,
		-89.028839
	],
	"53525": [
		42.544534,
		-88.858655
	],
	"53526": [
		42.974051,
		-90.343606
	],
	"53527": [
		43.051357,
		-89.192257
	],
	"53528": [
		43.1183,
		-89.638014
	],
	"53529": [
		43.242558,
		-89.51469
	],
	"53530": [
		42.693829,
		-90.10589
	],
	"53531": [
		43.062216,
		-89.102393
	],
	"53532": [
		43.250204,
		-89.326329
	],
	"53533": [
		42.996737,
		-90.162179
	],
	"53534": [
		42.860823,
		-89.09331
	],
	"53536": [
		42.761233,
		-89.267862
	],
	"53537": [
		42.672395,
		-89.210506
	],
	"53538": [
		42.920044,
		-88.857145
	],
	"53540": [
		43.229262,
		-90.284915
	],
	"53541": [
		42.56614,
		-90.029362
	],
	"53543": [
		43.057568,
		-90.34546
	],
	"53544": [
		42.87756,
		-89.905663
	],
	"53545": [
		42.738737,
		-89.040222
	],
	"53546": [
		42.652244,
		-88.948166
	],
	"53548": [
		42.682985,
		-89.124673
	],
	"53549": [
		42.984486,
		-88.765585
	],
	"53550": [
		42.552842,
		-89.49393
	],
	"53551": [
		43.081815,
		-88.91565
	],
	"53553": [
		42.907833,
		-90.302176
	],
	"53554": [
		42.908663,
		-90.44068
	],
	"53555": [
		43.320154,
		-89.555784
	],
	"53556": [
		43.238115,
		-90.245515
	],
	"53557": [
		43.338952,
		-88.797653
	],
	"53558": [
		42.997142,
		-89.275488
	],
	"53559": [
		43.165573,
		-89.081901
	],
	"53560": [
		43.192255,
		-89.737666
	],
	"53561": [
		43.39494,
		-89.638619
	],
	"53562": [
		43.115902,
		-89.54399
	],
	"53563": [
		42.795191,
		-88.929676
	],
	"53565": [
		42.833363,
		-90.165771
	],
	"53566": [
		42.607782,
		-89.649858
	],
	"53569": [
		42.989029,
		-90.438953
	],
	"53570": [
		42.731054,
		-89.61958
	],
	"53571": [
		43.278019,
		-89.353268
	],
	"53572": [
		42.961408,
		-89.733956
	],
	"53573": [
		43.187505,
		-90.459136
	],
	"53574": [
		42.81656,
		-89.650197
	],
	"53575": [
		42.933063,
		-89.390551
	],
	"53576": [
		42.625684,
		-89.233172
	],
	"53577": [
		43.311608,
		-90.064349
	],
	"53578": [
		43.327442,
		-89.775538
	],
	"53579": [
		43.295981,
		-88.867735
	],
	"53580": [
		42.859809,
		-90.378045
	],
	"53581": [
		43.37246,
		-90.414095
	],
	"53582": [
		43.018376,
		-89.978808
	],
	"53583": [
		43.250531,
		-89.80448
	],
	"53585": [
		42.529624,
		-88.715607
	],
	"53586": [
		42.573089,
		-90.226681
	],
	"53587": [
		42.580307,
		-89.904145
	],
	"53588": [
		43.193739,
		-90.086262
	],
	"53589": [
		42.924555,
		-89.212885
	],
	"53590": [
		43.200235,
		-89.205195
	],
	"53593": [
		42.985198,
		-89.579337
	],
	"53594": [
		43.190777,
		-88.973848
	],
	"53597": [
		43.183434,
		-89.457307
	],
	"53598": [
		43.210856,
		-89.332727
	],
	"53599": [
		42.647308,
		-89.857206
	],
	"53702": [
		43.060926,
		-88.230636
	],
	"53703": [
		43.079575,
		-89.378389
	],
	"53704": [
		43.136032,
		-89.347129
	],
	"53705": [
		43.074014,
		-89.460509
	],
	"53706": [
		43.074271,
		-89.4093
	],
	"53711": [
		43.011403,
		-89.40933
	],
	"53713": [
		43.036054,
		-89.386887
	],
	"53714": [
		43.100348,
		-89.311966
	],
	"53715": [
		43.06849,
		-89.401708
	],
	"53716": [
		43.065163,
		-89.313783
	],
	"53717": [
		43.067686,
		-89.521056
	],
	"53718": [
		43.094024,
		-89.278477
	],
	"53719": [
		43.045313,
		-89.515378
	],
	"53726": [
		43.069808,
		-89.422492
	],
	"53792": [
		43.077555,
		-89.43064
	],
	"53801": [
		42.924819,
		-91.074574
	],
	"53802": [
		42.80579,
		-90.888563
	],
	"53803": [
		42.559513,
		-90.353639
	],
	"53804": [
		42.874928,
		-90.907869
	],
	"53805": [
		43.143298,
		-90.686927
	],
	"53806": [
		42.729852,
		-90.919845
	],
	"53807": [
		42.616835,
		-90.472701
	],
	"53808": [
		42.62631,
		-90.593132
	],
	"53809": [
		42.993767,
		-90.633652
	],
	"53810": [
		42.820785,
		-91.001945
	],
	"53811": [
		42.537952,
		-90.506798
	],
	"53813": [
		42.844234,
		-90.721223
	],
	"53816": [
		42.978845,
		-90.85438
	],
	"53817": [
		42.945082,
		-90.96768
	],
	"53818": [
		42.7457,
		-90.492321
	],
	"53820": [
		42.699772,
		-90.701468
	],
	"53821": [
		43.049076,
		-91.057334
	],
	"53825": [
		42.91823,
		-90.590628
	],
	"53826": [
		43.113726,
		-90.924755
	],
	"53827": [
		43.045865,
		-90.820473
	],
	"53901": [
		43.560907,
		-89.483147
	],
	"53910": [
		43.886678,
		-89.807748
	],
	"53911": [
		43.325821,
		-89.367495
	],
	"53913": [
		43.492839,
		-89.728707
	],
	"53916": [
		43.466797,
		-88.867753
	],
	"53919": [
		43.733861,
		-88.776015
	],
	"53920": [
		43.666202,
		-89.595158
	],
	"53922": [
		43.52093,
		-88.715147
	],
	"53923": [
		43.574139,
		-89.138363
	],
	"53924": [
		43.483411,
		-90.261729
	],
	"53925": [
		43.326703,
		-89.057148
	],
	"53926": [
		43.666882,
		-89.222839
	],
	"53928": [
		43.427083,
		-89.156609
	],
	"53929": [
		43.751408,
		-90.283601
	],
	"53930": [
		43.691693,
		-89.486834
	],
	"53931": [
		43.743386,
		-88.861422
	],
	"53932": [
		43.422362,
		-89.055328
	],
	"53933": [
		43.584013,
		-88.875253
	],
	"53934": [
		43.988248,
		-89.820218
	],
	"53935": [
		43.587632,
		-89.06555
	],
	"53936": [
		43.868893,
		-89.707306
	],
	"53937": [
		43.386917,
		-90.145434
	],
	"53939": [
		43.690429,
		-89.130646
	],
	"53941": [
		43.570006,
		-90.161064
	],
	"53943": [
		43.386819,
		-90.035254
	],
	"53944": [
		43.685886,
		-89.928668
	],
	"53946": [
		43.71245,
		-89.020843
	],
	"53947": [
		43.746779,
		-89.139956
	],
	"53948": [
		43.776559,
		-90.040249
	],
	"53949": [
		43.783318,
		-89.336302
	],
	"53950": [
		43.901142,
		-90.137808
	],
	"53951": [
		43.387892,
		-89.876273
	],
	"53952": [
		43.783202,
		-89.597367
	],
	"53953": [
		43.772537,
		-89.468292
	],
	"53954": [
		43.55154,
		-89.313911
	],
	"53955": [
		43.406614,
		-89.416632
	],
	"53956": [
		43.54202,
		-89.017568
	],
	"53959": [
		43.533502,
		-89.999636
	],
	"53960": [
		43.426086,
		-89.235375
	],
	"53961": [
		43.457619,
		-89.927555
	],
	"53963": [
		43.639467,
		-88.743298
	],
	"53964": [
		43.912582,
		-89.512502
	],
	"53965": [
		43.671422,
		-89.748134
	],
	"53968": [
		43.646122,
		-90.22785
	],
	"53969": [
		43.49323,
		-89.301804
	],
	"54001": [
		45.33433,
		-92.386607
	],
	"54002": [
		44.963016,
		-92.369527
	],
	"54003": [
		44.794472,
		-92.445729
	],
	"54004": [
		45.30222,
		-92.125177
	],
	"54005": [
		45.236119,
		-92.227501
	],
	"54006": [
		45.590697,
		-92.646689
	],
	"54007": [
		45.190329,
		-92.35294
	],
	"54009": [
		45.352521,
		-92.577819
	],
	"54010": [
		44.734316,
		-92.465629
	],
	"54011": [
		44.718295,
		-92.464636
	],
	"54013": [
		45.08295,
		-92.228166
	],
	"54014": [
		44.648721,
		-92.572748
	],
	"54015": [
		44.970201,
		-92.452923
	],
	"54016": [
		44.981117,
		-92.69486
	],
	"54017": [
		45.120016,
		-92.519784
	],
	"54020": [
		45.274846,
		-92.641761
	],
	"54021": [
		44.734174,
		-92.706319
	],
	"54022": [
		44.847472,
		-92.606877
	],
	"54023": [
		44.981772,
		-92.554736
	],
	"54024": [
		45.5017,
		-92.640733
	],
	"54025": [
		45.143751,
		-92.680358
	],
	"54026": [
		45.227595,
		-92.534605
	],
	"54027": [
		44.919366,
		-92.192828
	],
	"54028": [
		44.954977,
		-92.283422
	],
	"54082": [
		45.06804,
		-92.749369
	],
	"54101": [
		44.785785,
		-88.075082
	],
	"54102": [
		45.501305,
		-87.976929
	],
	"54103": [
		45.636879,
		-88.516325
	],
	"54104": [
		45.448633,
		-88.283014
	],
	"54106": [
		44.485462,
		-88.456588
	],
	"54107": [
		44.701043,
		-88.455663
	],
	"54110": [
		44.187689,
		-88.075127
	],
	"54111": [
		44.812344,
		-88.380546
	],
	"54112": [
		45.054741,
		-88.054588
	],
	"54113": [
		44.261867,
		-88.309516
	],
	"54114": [
		45.245414,
		-88.108864
	],
	"54115": [
		44.397967,
		-88.09639
	],
	"54119": [
		45.607459,
		-88.159732
	],
	"54120": [
		45.803402,
		-88.569386
	],
	"54121": [
		45.865638,
		-88.326971
	],
	"54123": [
		44.210985,
		-88.142645
	],
	"54124": [
		44.908023,
		-88.345233
	],
	"54125": [
		45.579147,
		-88.401615
	],
	"54126": [
		44.291905,
		-88.050723
	],
	"54127": [
		44.796395,
		-88.269602
	],
	"54128": [
		44.878776,
		-88.81109
	],
	"54129": [
		44.13158,
		-88.194198
	],
	"54130": [
		44.311313,
		-88.24431
	],
	"54135": [
		44.927379,
		-88.607936
	],
	"54136": [
		44.268219,
		-88.338535
	],
	"54137": [
		44.756813,
		-88.255012
	],
	"54138": [
		45.333606,
		-88.409689
	],
	"54139": [
		44.956844,
		-88.075505
	],
	"54140": [
		44.286515,
		-88.309229
	],
	"54141": [
		44.728584,
		-87.998318
	],
	"54143": [
		45.076169,
		-87.698833
	],
	"54149": [
		45.196478,
		-88.46238
	],
	"54150": [
		44.997641,
		-88.853758
	],
	"54151": [
		45.725441,
		-87.988217
	],
	"54153": [
		44.898069,
		-87.91574
	],
	"54154": [
		44.87369,
		-88.182068
	],
	"54155": [
		44.527495,
		-88.200548
	],
	"54156": [
		45.628708,
		-88.024459
	],
	"54157": [
		45.040575,
		-87.821437
	],
	"54159": [
		45.193358,
		-87.838864
	],
	"54160": [
		44.118481,
		-88.101704
	],
	"54161": [
		45.122213,
		-88.162416
	],
	"54162": [
		44.66254,
		-88.270904
	],
	"54165": [
		44.51663,
		-88.322013
	],
	"54166": [
		44.778797,
		-88.634549
	],
	"54169": [
		44.176686,
		-88.280739
	],
	"54170": [
		44.536096,
		-88.57693
	],
	"54171": [
		44.715231,
		-88.096472
	],
	"54173": [
		44.639281,
		-88.030636
	],
	"54174": [
		45.036912,
		-88.424393
	],
	"54175": [
		45.314602,
		-88.618326
	],
	"54177": [
		45.396619,
		-87.893793
	],
	"54180": [
		44.325728,
		-88.175795
	],
	"54201": [
		44.624327,
		-87.495679
	],
	"54202": [
		45.087307,
		-87.140063
	],
	"54204": [
		44.755474,
		-87.605319
	],
	"54205": [
		44.596202,
		-87.632423
	],
	"54207": [
		44.087627,
		-87.989005
	],
	"54208": [
		44.363565,
		-87.799595
	],
	"54209": [
		45.017946,
		-87.270394
	],
	"54210": [
		45.246247,
		-87.035915
	],
	"54211": [
		45.160359,
		-87.166369
	],
	"54212": [
		45.109775,
		-87.209029
	],
	"54213": [
		44.695169,
		-87.528241
	],
	"54214": [
		44.197537,
		-87.713043
	],
	"54216": [
		44.438598,
		-87.569911
	],
	"54217": [
		44.551977,
		-87.720281
	],
	"54220": [
		44.101805,
		-87.722805
	],
	"54227": [
		44.280774,
		-87.810786
	],
	"54228": [
		44.278161,
		-87.650284
	],
	"54229": [
		44.560061,
		-87.815517
	],
	"54230": [
		44.159839,
		-87.91504
	],
	"54232": [
		44.007345,
		-87.924787
	],
	"54234": [
		45.181963,
		-87.10151
	],
	"54235": [
		44.840884,
		-87.372795
	],
	"54241": [
		44.215871,
		-87.594706
	],
	"54245": [
		44.030924,
		-87.898061
	],
	"54246": [
		45.373209,
		-86.899374
	],
	"54247": [
		44.199973,
		-87.790095
	],
	"54301": [
		44.480778,
		-88.016063
	],
	"54302": [
		44.507653,
		-87.976828
	],
	"54303": [
		44.538066,
		-88.048764
	],
	"54304": [
		44.49279,
		-88.067301
	],
	"54307": [
		44.470428,
		-88.036639
	],
	"54311": [
		44.480306,
		-87.892072
	],
	"54313": [
		44.583773,
		-88.115037
	],
	"54401": [
		44.963304,
		-89.704051
	],
	"54403": [
		45.018422,
		-89.525216
	],
	"54405": [
		44.96753,
		-90.282268
	],
	"54406": [
		44.412217,
		-89.30493
	],
	"54407": [
		44.532182,
		-89.281795
	],
	"54408": [
		45.025581,
		-89.323997
	],
	"54409": [
		45.122179,
		-89.170874
	],
	"54410": [
		44.542287,
		-90.030459
	],
	"54411": [
		45.06256,
		-90.033418
	],
	"54412": [
		44.663265,
		-89.97416
	],
	"54413": [
		44.27324,
		-90.130098
	],
	"54414": [
		44.959673,
		-89.176857
	],
	"54416": [
		44.884118,
		-88.94842
	],
	"54417": [
		45.026967,
		-89.653285
	],
	"54418": [
		45.220561,
		-88.940222
	],
	"54420": [
		44.610077,
		-90.350683
	],
	"54421": [
		44.895191,
		-90.288689
	],
	"54422": [
		44.985893,
		-90.457501
	],
	"54423": [
		44.585282,
		-89.421676
	],
	"54424": [
		45.286673,
		-89.192332
	],
	"54425": [
		45.006838,
		-90.341197
	],
	"54426": [
		44.907469,
		-90.00979
	],
	"54427": [
		44.817219,
		-89.258344
	],
	"54428": [
		45.421166,
		-89.135714
	],
	"54430": [
		45.147626,
		-88.873267
	],
	"54433": [
		45.202063,
		-90.791986
	],
	"54435": [
		45.360468,
		-89.438197
	],
	"54436": [
		44.534622,
		-90.427124
	],
	"54437": [
		44.777208,
		-90.629136
	],
	"54440": [
		44.81122,
		-89.383375
	],
	"54441": [
		44.642553,
		-90.104811
	],
	"54442": [
		45.358854,
		-89.65898
	],
	"54443": [
		44.608922,
		-89.751725
	],
	"54446": [
		44.747785,
		-90.466411
	],
	"54447": [
		45.085986,
		-90.747239
	],
	"54448": [
		44.933905,
		-89.831679
	],
	"54449": [
		44.63843,
		-90.208401
	],
	"54450": [
		45.004292,
		-89.04097
	],
	"54451": [
		45.19739,
		-90.407651
	],
	"54452": [
		45.217729,
		-89.793643
	],
	"54454": [
		44.606715,
		-89.882882
	],
	"54455": [
		44.766821,
		-89.684474
	],
	"54456": [
		44.544396,
		-90.632781
	],
	"54457": [
		44.214087,
		-89.900133
	],
	"54458": [
		44.497209,
		-89.306325
	],
	"54459": [
		45.412581,
		-90.237356
	],
	"54460": [
		44.938751,
		-90.543261
	],
	"54462": [
		45.392002,
		-89.007393
	],
	"54463": [
		45.502567,
		-89.219108
	],
	"54465": [
		45.383296,
		-88.891217
	],
	"54466": [
		44.379589,
		-90.306335
	],
	"54467": [
		44.413919,
		-89.538901
	],
	"54469": [
		44.345145,
		-89.874045
	],
	"54470": [
		45.286613,
		-90.141512
	],
	"54471": [
		44.930719,
		-89.424316
	],
	"54473": [
		44.650645,
		-89.352368
	],
	"54474": [
		44.873714,
		-89.61975
	],
	"54475": [
		44.484665,
		-89.793069
	],
	"54476": [
		44.88996,
		-89.520725
	],
	"54479": [
		44.750611,
		-90.331989
	],
	"54480": [
		45.05431,
		-90.269289
	],
	"54481": [
		44.510664,
		-89.638254
	],
	"54482": [
		44.54693,
		-89.525424
	],
	"54484": [
		44.799824,
		-90.078596
	],
	"54485": [
		45.410997,
		-89.23117
	],
	"54486": [
		44.717991,
		-89.045228
	],
	"54487": [
		45.514195,
		-89.775405
	],
	"54488": [
		44.840396,
		-90.333122
	],
	"54489": [
		44.460777,
		-90.003987
	],
	"54490": [
		45.343391,
		-90.392334
	],
	"54491": [
		45.234365,
		-88.754355
	],
	"54493": [
		44.69676,
		-90.81072
	],
	"54494": [
		44.340837,
		-89.73492
	],
	"54495": [
		44.378213,
		-89.96406
	],
	"54498": [
		45.035112,
		-90.629022
	],
	"54499": [
		44.789831,
		-89.176405
	],
	"54501": [
		45.657615,
		-89.349239
	],
	"54511": [
		45.737517,
		-88.82307
	],
	"54512": [
		46.091151,
		-89.659025
	],
	"54513": [
		45.578383,
		-90.141311
	],
	"54514": [
		46.041777,
		-90.473291
	],
	"54515": [
		45.512631,
		-90.491015
	],
	"54517": [
		46.145917,
		-90.930676
	],
	"54519": [
		46.05078,
		-89.263108
	],
	"54520": [
		45.536654,
		-88.903793
	],
	"54521": [
		45.936714,
		-89.291348
	],
	"54524": [
		45.832548,
		-90.347035
	],
	"54525": [
		46.423303,
		-90.219958
	],
	"54526": [
		45.529271,
		-90.85718
	],
	"54527": [
		46.125898,
		-90.685679
	],
	"54529": [
		45.677711,
		-89.667165
	],
	"54530": [
		45.533993,
		-90.741634
	],
	"54531": [
		45.752823,
		-89.774652
	],
	"54534": [
		46.347714,
		-90.228091
	],
	"54536": [
		46.30577,
		-90.354628
	],
	"54537": [
		45.528805,
		-90.603457
	],
	"54538": [
		45.970064,
		-89.911919
	],
	"54539": [
		45.81335,
		-89.56214
	],
	"54540": [
		46.154791,
		-89.372738
	],
	"54541": [
		45.55648,
		-88.619095
	],
	"54542": [
		45.920297,
		-88.71551
	],
	"54545": [
		46.136882,
		-89.830455
	],
	"54546": [
		46.299672,
		-90.694721
	],
	"54547": [
		46.21135,
		-90.10613
	],
	"54548": [
		45.865998,
		-89.831729
	],
	"54550": [
		46.361796,
		-90.276637
	],
	"54552": [
		45.939245,
		-90.31661
	],
	"54554": [
		46.053432,
		-89.049262
	],
	"54555": [
		45.705551,
		-90.404624
	],
	"54556": [
		45.535094,
		-90.297332
	],
	"54557": [
		46.211775,
		-89.747843
	],
	"54558": [
		45.925286,
		-89.499516
	],
	"54559": [
		46.495208,
		-90.49123
	],
	"54560": [
		46.036677,
		-89.552305
	],
	"54561": [
		46.097545,
		-89.513401
	],
	"54562": [
		45.802654,
		-89.079344
	],
	"54563": [
		45.460162,
		-90.970548
	],
	"54564": [
		45.604132,
		-89.961429
	],
	"54565": [
		46.284828,
		-90.465513
	],
	"54566": [
		45.420139,
		-88.601253
	],
	"54568": [
		45.95805,
		-89.653069
	],
	"54601": [
		43.806197,
		-91.140529
	],
	"54603": [
		43.856762,
		-91.241935
	],
	"54610": [
		44.365117,
		-91.831714
	],
	"54611": [
		44.447712,
		-90.95218
	],
	"54612": [
		44.249551,
		-91.501347
	],
	"54613": [
		44.075585,
		-89.923744
	],
	"54614": [
		43.904933,
		-90.952867
	],
	"54615": [
		44.260458,
		-90.813297
	],
	"54616": [
		44.30081,
		-91.22351
	],
	"54618": [
		43.963629,
		-90.285854
	],
	"54619": [
		43.757305,
		-90.774176
	],
	"54621": [
		43.656295,
		-91.080952
	],
	"54622": [
		44.273358,
		-91.773881
	],
	"54623": [
		43.732988,
		-91.006259
	],
	"54624": [
		43.461506,
		-91.131141
	],
	"54625": [
		44.133418,
		-91.525003
	],
	"54626": [
		43.219646,
		-91.054037
	],
	"54627": [
		44.171387,
		-91.226981
	],
	"54628": [
		43.372994,
		-91.026177
	],
	"54629": [
		44.174054,
		-91.63934
	],
	"54630": [
		44.122714,
		-91.372889
	],
	"54631": [
		43.285012,
		-90.830887
	],
	"54632": [
		43.568829,
		-91.146482
	],
	"54634": [
		43.581681,
		-90.422391
	],
	"54635": [
		44.402904,
		-91.045552
	],
	"54636": [
		44.002965,
		-91.224012
	],
	"54637": [
		43.878545,
		-90.270235
	],
	"54638": [
		43.800046,
		-90.404193
	],
	"54639": [
		43.601953,
		-90.637797
	],
	"54641": [
		44.270653,
		-90.330093
	],
	"54642": [
		44.152077,
		-91.044942
	],
	"54643": [
		44.18697,
		-90.63818
	],
	"54644": [
		44.036084,
		-91.063408
	],
	"54645": [
		43.321145,
		-90.932642
	],
	"54646": [
		44.113755,
		-90.098056
	],
	"54648": [
		43.829433,
		-90.652586
	],
	"54650": [
		43.910343,
		-91.227022
	],
	"54651": [
		43.723631,
		-90.573137
	],
	"54652": [
		43.460478,
		-90.762275
	],
	"54653": [
		43.816086,
		-90.901434
	],
	"54654": [
		43.269653,
		-90.964018
	],
	"54655": [
		43.371015,
		-90.759096
	],
	"54656": [
		43.990087,
		-90.80319
	],
	"54657": [
		43.188044,
		-90.895886
	],
	"54658": [
		43.68213,
		-91.16809
	],
	"54659": [
		44.299071,
		-91.114785
	],
	"54660": [
		43.982544,
		-90.494405
	],
	"54661": [
		44.057603,
		-91.467828
	],
	"54664": [
		43.48833,
		-90.642904
	],
	"54665": [
		43.531972,
		-90.92869
	],
	"54666": [
		44.170133,
		-90.449668
	],
	"54667": [
		43.663803,
		-90.859989
	],
	"54669": [
		43.911245,
		-91.083899
	],
	"54670": [
		43.837369,
		-90.485849
	],
	"54701": [
		44.751984,
		-91.514998
	],
	"54703": [
		44.834611,
		-91.520448
	],
	"54720": [
		44.804142,
		-91.435752
	],
	"54721": [
		44.633744,
		-92.082731
	],
	"54722": [
		44.711812,
		-91.096003
	],
	"54723": [
		44.610579,
		-92.419425
	],
	"54724": [
		45.105047,
		-91.48648
	],
	"54725": [
		45.073212,
		-91.990956
	],
	"54726": [
		44.937235,
		-91.025904
	],
	"54727": [
		44.953953,
		-91.159106
	],
	"54728": [
		45.308101,
		-91.637835
	],
	"54729": [
		44.945626,
		-91.392954
	],
	"54730": [
		45.01891,
		-91.719575
	],
	"54731": [
		45.349837,
		-91.090398
	],
	"54732": [
		45.144614,
		-91.170492
	],
	"54733": [
		45.27866,
		-91.850182
	],
	"54734": [
		45.098741,
		-92.125756
	],
	"54736": [
		44.598579,
		-91.906496
	],
	"54737": [
		44.718395,
		-91.981576
	],
	"54738": [
		44.588229,
		-91.488743
	],
	"54739": [
		44.859764,
		-91.701174
	],
	"54740": [
		44.751437,
		-92.166807
	],
	"54741": [
		44.620349,
		-90.974612
	],
	"54742": [
		44.766442,
		-91.267012
	],
	"54745": [
		45.251132,
		-91.123401
	],
	"54746": [
		44.553241,
		-90.880056
	],
	"54747": [
		44.401401,
		-91.51211
	],
	"54748": [
		45.075083,
		-91.26302
	],
	"54749": [
		44.948045,
		-92.107164
	],
	"54750": [
		44.613789,
		-92.294549
	],
	"54751": [
		44.85067,
		-91.931558
	],
	"54754": [
		44.427159,
		-90.753321
	],
	"54755": [
		44.575768,
		-91.681302
	],
	"54756": [
		44.468071,
		-91.939604
	],
	"54757": [
		45.237197,
		-91.522349
	],
	"54758": [
		44.557943,
		-91.216523
	],
	"54759": [
		44.489082,
		-92.12926
	],
	"54760": [
		44.424047,
		-91.206361
	],
	"54761": [
		44.623256,
		-92.17833
	],
	"54762": [
		45.246189,
		-91.993135
	],
	"54763": [
		45.179864,
		-91.881737
	],
	"54765": [
		45.169133,
		-91.68559
	],
	"54766": [
		45.340713,
		-90.858047
	],
	"54767": [
		44.823835,
		-92.267998
	],
	"54768": [
		44.95709,
		-90.929805
	],
	"54769": [
		44.528229,
		-92.239712
	],
	"54770": [
		44.548564,
		-91.371914
	],
	"54771": [
		44.93696,
		-90.812536
	],
	"54772": [
		45.100596,
		-91.881707
	],
	"54773": [
		44.389993,
		-91.296378
	],
	"54801": [
		45.878861,
		-91.942767
	],
	"54805": [
		45.412053,
		-92.023417
	],
	"54806": [
		46.552396,
		-90.870143
	],
	"54810": [
		45.457085,
		-92.374415
	],
	"54812": [
		45.392528,
		-91.882516
	],
	"54813": [
		45.652939,
		-92.044813
	],
	"54814": [
		46.863246,
		-90.901161
	],
	"54817": [
		45.669726,
		-91.546559
	],
	"54819": [
		45.486919,
		-91.305291
	],
	"54820": [
		46.572526,
		-91.565044
	],
	"54821": [
		46.216959,
		-91.166168
	],
	"54822": [
		45.400937,
		-91.694413
	],
	"54824": [
		45.484715,
		-92.539887
	],
	"54826": [
		45.495241,
		-92.159669
	],
	"54827": [
		46.788281,
		-91.096741
	],
	"54828": [
		45.840986,
		-91.294248
	],
	"54829": [
		45.56665,
		-92.047243
	],
	"54830": [
		46.106014,
		-92.225683
	],
	"54832": [
		46.319287,
		-91.343441
	],
	"54835": [
		45.691601,
		-91.247086
	],
	"54836": [
		46.454438,
		-92.195041
	],
	"54837": [
		45.674284,
		-92.357709
	],
	"54838": [
		46.258711,
		-91.818892
	],
	"54839": [
		46.361577,
		-91.139982
	],
	"54840": [
		45.751262,
		-92.692383
	],
	"54841": [
		45.606667,
		-91.778611
	],
	"54842": [
		46.505367,
		-91.854667
	],
	"54843": [
		46.023604,
		-91.293027
	],
	"54844": [
		46.804784,
		-91.233188
	],
	"54845": [
		45.797327,
		-92.193787
	],
	"54846": [
		46.378316,
		-90.720238
	],
	"54847": [
		46.579326,
		-91.39985
	],
	"54848": [
		45.516039,
		-91.103822
	],
	"54849": [
		46.481097,
		-91.725407
	],
	"54850": [
		46.940645,
		-90.57083
	],
	"54853": [
		45.568137,
		-92.450171
	],
	"54854": [
		46.65038,
		-91.667167
	],
	"54855": [
		46.378032,
		-90.831029
	],
	"54856": [
		46.442747,
		-91.129309
	],
	"54857": [
		45.596234,
		-91.605637
	],
	"54858": [
		45.519382,
		-92.457844
	],
	"54859": [
		46.123003,
		-91.803653
	],
	"54861": [
		46.614971,
		-90.656678
	],
	"54862": [
		45.778701,
		-91.142381
	],
	"54864": [
		46.613354,
		-91.790631
	],
	"54865": [
		46.739717,
		-91.374991
	],
	"54867": [
		45.821698,
		-91.203122
	],
	"54868": [
		45.525662,
		-91.707548
	],
	"54870": [
		45.709205,
		-91.77531
	],
	"54871": [
		45.749634,
		-92.002023
	],
	"54872": [
		45.77707,
		-92.401715
	],
	"54873": [
		46.339278,
		-91.697041
	],
	"54874": [
		46.565542,
		-91.942807
	],
	"54875": [
		45.965643,
		-91.692217
	],
	"54876": [
		45.836042,
		-91.493513
	],
	"54880": [
		46.590874,
		-92.12831
	],
	"54888": [
		45.974818,
		-91.866955
	],
	"54889": [
		45.415113,
		-92.170107
	],
	"54891": [
		46.69959,
		-90.964839
	],
	"54893": [
		45.878675,
		-92.325953
	],
	"54895": [
		45.449432,
		-91.46076
	],
	"54896": [
		45.817173,
		-90.881747
	],
	"54901": [
		44.062759,
		-88.535773
	],
	"54902": [
		43.946895,
		-88.540285
	],
	"54904": [
		44.0234,
		-88.623839
	],
	"54909": [
		44.280703,
		-89.367441
	],
	"54911": [
		44.281533,
		-88.381003
	],
	"54913": [
		44.335996,
		-88.39997
	],
	"54914": [
		44.280847,
		-88.452037
	],
	"54915": [
		44.243351,
		-88.355904
	],
	"54921": [
		44.29522,
		-89.559173
	],
	"54922": [
		44.544821,
		-88.76214
	],
	"54923": [
		43.997757,
		-88.966832
	],
	"54927": [
		44.103128,
		-88.654369
	],
	"54928": [
		44.746498,
		-88.874634
	],
	"54929": [
		44.636591,
		-88.739379
	],
	"54930": [
		44.032633,
		-89.554853
	],
	"54931": [
		44.274505,
		-88.679132
	],
	"54932": [
		43.832002,
		-88.590949
	],
	"54933": [
		44.670474,
		-88.703194
	],
	"54934": [
		44.002969,
		-88.839265
	],
	"54935": [
		43.77366,
		-88.436782
	],
	"54937": [
		43.79205,
		-88.390935
	],
	"54940": [
		44.22037,
		-88.842561
	],
	"54941": [
		43.844703,
		-88.992882
	],
	"54942": [
		44.294108,
		-88.547362
	],
	"54943": [
		44.132814,
		-89.59041
	],
	"54944": [
		44.324687,
		-88.626957
	],
	"54945": [
		44.56866,
		-89.136883
	],
	"54946": [
		44.336605,
		-89.1444
	],
	"54947": [
		44.203594,
		-88.698749
	],
	"54948": [
		44.780628,
		-88.872845
	],
	"54949": [
		44.483988,
		-88.915485
	],
	"54950": [
		44.657207,
		-88.918098
	],
	"54952": [
		44.20104,
		-88.329484
	],
	"54956": [
		44.182337,
		-88.527574
	],
	"54960": [
		43.941908,
		-89.219067
	],
	"54961": [
		44.410185,
		-88.761656
	],
	"54962": [
		44.486188,
		-89.030971
	],
	"54963": [
		44.044194,
		-88.77909
	],
	"54964": [
		43.921644,
		-88.717019
	],
	"54965": [
		44.167973,
		-89.043887
	],
	"54966": [
		44.210019,
		-89.504888
	],
	"54967": [
		44.12674,
		-88.975792
	],
	"54968": [
		43.846928,
		-89.136092
	],
	"54970": [
		44.072751,
		-89.098184
	],
	"54971": [
		43.857164,
		-88.828882
	],
	"54974": [
		43.787591,
		-88.663488
	],
	"54977": [
		44.461176,
		-89.171211
	],
	"54979": [
		43.872511,
		-88.536374
	],
	"54980": [
		43.983584,
		-88.767287
	],
	"54981": [
		44.322663,
		-89.131504
	],
	"54982": [
		44.072748,
		-89.290882
	],
	"54983": [
		44.319336,
		-88.933068
	],
	"54984": [
		44.190566,
		-89.223457
	],
	"54985": [
		44.075066,
		-88.518469
	],
	"54986": [
		44.123302,
		-88.749906
	],
	"55001": [
		44.898776,
		-92.819108
	],
	"55003": [
		45.011625,
		-92.779163
	],
	"55005": [
		45.396107,
		-93.218464
	],
	"55006": [
		45.738266,
		-93.198939
	],
	"55007": [
		45.971304,
		-93.11782
	],
	"55008": [
		45.569488,
		-93.276632
	],
	"55009": [
		44.483873,
		-92.865156
	],
	"55011": [
		45.34074,
		-93.253313
	],
	"55012": [
		45.437981,
		-92.788354
	],
	"55013": [
		45.338628,
		-92.904839
	],
	"55014": [
		45.161826,
		-93.127997
	],
	"55016": [
		44.817691,
		-92.934622
	],
	"55017": [
		45.672309,
		-93.436364
	],
	"55018": [
		44.423972,
		-92.996175
	],
	"55019": [
		44.419113,
		-93.248224
	],
	"55020": [
		44.57554,
		-93.373569
	],
	"55021": [
		44.299725,
		-93.277222
	],
	"55024": [
		44.627069,
		-93.124971
	],
	"55025": [
		45.263234,
		-93.022024
	],
	"55026": [
		44.535111,
		-92.346008
	],
	"55027": [
		44.406375,
		-92.609424
	],
	"55029": [
		45.638337,
		-93.198359
	],
	"55030": [
		45.839093,
		-93.089519
	],
	"55031": [
		44.612517,
		-92.962163
	],
	"55032": [
		45.586267,
		-92.988
	],
	"55033": [
		44.713192,
		-92.862254
	],
	"55036": [
		45.871218,
		-93.119643
	],
	"55037": [
		46.038859,
		-92.785172
	],
	"55038": [
		45.174163,
		-92.980823
	],
	"55040": [
		45.466135,
		-93.280188
	],
	"55041": [
		44.394193,
		-92.320188
	],
	"55042": [
		44.987819,
		-92.9095
	],
	"55043": [
		44.940578,
		-92.768835
	],
	"55044": [
		44.642146,
		-93.276446
	],
	"55045": [
		45.395323,
		-92.835009
	],
	"55046": [
		44.441784,
		-93.424674
	],
	"55047": [
		45.200429,
		-92.820729
	],
	"55049": [
		44.176279,
		-93.230762
	],
	"55051": [
		45.928892,
		-93.303115
	],
	"55052": [
		44.231016,
		-93.443661
	],
	"55053": [
		44.346522,
		-93.061351
	],
	"55054": [
		44.570166,
		-93.350454
	],
	"55055": [
		44.874462,
		-92.998712
	],
	"55056": [
		45.508583,
		-92.953884
	],
	"55057": [
		44.470457,
		-93.176125
	],
	"55060": [
		44.059126,
		-93.223482
	],
	"55063": [
		45.838574,
		-92.902898
	],
	"55065": [
		44.550758,
		-93.024955
	],
	"55066": [
		44.511917,
		-92.539217
	],
	"55068": [
		44.735478,
		-93.062774
	],
	"55069": [
		45.694026,
		-92.964487
	],
	"55070": [
		45.410032,
		-93.386985
	],
	"55071": [
		44.821511,
		-92.998235
	],
	"55072": [
		46.098193,
		-92.528531
	],
	"55073": [
		45.272533,
		-92.814871
	],
	"55074": [
		45.387779,
		-92.720032
	],
	"55075": [
		44.888027,
		-93.040497
	],
	"55076": [
		44.836066,
		-93.032174
	],
	"55077": [
		44.819411,
		-93.06781
	],
	"55079": [
		45.419467,
		-93.035393
	],
	"55080": [
		45.66642,
		-93.222225
	],
	"55082": [
		45.073127,
		-92.839768
	],
	"55084": [
		45.462591,
		-92.716225
	],
	"55085": [
		44.669692,
		-92.963421
	],
	"55087": [
		44.248538,
		-93.394902
	],
	"55088": [
		44.523586,
		-93.383455
	],
	"55089": [
		44.583779,
		-92.716416
	],
	"55090": [
		45.053332,
		-92.957536
	],
	"55092": [
		45.334105,
		-93.099817
	],
	"55101": [
		44.951483,
		-93.090649
	],
	"55102": [
		44.931901,
		-93.121291
	],
	"55103": [
		44.964258,
		-93.122627
	],
	"55104": [
		44.953894,
		-93.164446
	],
	"55105": [
		44.93718,
		-93.168279
	],
	"55106": [
		44.963547,
		-93.049522
	],
	"55107": [
		44.93107,
		-93.079172
	],
	"55108": [
		44.982481,
		-93.174776
	],
	"55109": [
		45.014551,
		-93.025535
	],
	"55110": [
		45.089912,
		-93.005988
	],
	"55111": [
		44.878414,
		-93.19639
	],
	"55112": [
		45.080506,
		-93.192057
	],
	"55113": [
		45.012196,
		-93.151186
	],
	"55114": [
		44.96669,
		-93.195072
	],
	"55115": [
		45.067903,
		-92.953441
	],
	"55116": [
		44.910719,
		-93.169581
	],
	"55117": [
		45.003562,
		-93.09128
	],
	"55118": [
		44.894315,
		-93.100947
	],
	"55119": [
		44.937421,
		-93.007402
	],
	"55120": [
		44.874984,
		-93.152093
	],
	"55121": [
		44.846541,
		-93.154935
	],
	"55122": [
		44.806811,
		-93.201497
	],
	"55123": [
		44.808933,
		-93.138449
	],
	"55124": [
		44.745301,
		-93.199413
	],
	"55125": [
		44.918031,
		-92.938277
	],
	"55126": [
		45.08445,
		-93.132817
	],
	"55127": [
		45.083907,
		-93.080233
	],
	"55128": [
		44.987546,
		-92.963553
	],
	"55129": [
		44.883474,
		-92.892768
	],
	"55130": [
		44.973302,
		-93.08241
	],
	"55150": [
		44.886618,
		-93.165458
	],
	"55155": [
		44.956026,
		-93.08268
	],
	"55301": [
		45.248559,
		-93.65982
	],
	"55302": [
		45.246529,
		-94.117135
	],
	"55303": [
		45.288298,
		-93.431102
	],
	"55304": [
		45.247605,
		-93.275036
	],
	"55305": [
		44.956374,
		-93.427997
	],
	"55306": [
		44.730944,
		-93.291381
	],
	"55307": [
		44.599706,
		-94.111216
	],
	"55308": [
		45.441395,
		-93.832031
	],
	"55309": [
		45.377728,
		-93.744336
	],
	"55310": [
		44.759116,
		-94.880759
	],
	"55311": [
		45.106403,
		-93.497029
	],
	"55312": [
		44.70634,
		-94.35129
	],
	"55313": [
		45.174664,
		-93.851455
	],
	"55314": [
		44.77902,
		-94.589725
	],
	"55315": [
		44.721096,
		-93.688973
	],
	"55316": [
		45.172932,
		-93.386829
	],
	"55317": [
		44.858704,
		-93.550209
	],
	"55318": [
		44.810787,
		-93.636252
	],
	"55319": [
		45.475266,
		-93.943856
	],
	"55320": [
		45.396331,
		-94.086052
	],
	"55321": [
		45.087589,
		-94.193155
	],
	"55322": [
		44.771879,
		-93.787131
	],
	"55324": [
		45.052586,
		-94.418194
	],
	"55325": [
		45.084805,
		-94.317
	],
	"55327": [
		45.195735,
		-93.475802
	],
	"55328": [
		45.031875,
		-93.811951
	],
	"55329": [
		45.304542,
		-94.558937
	],
	"55330": [
		45.334168,
		-93.568216
	],
	"55331": [
		44.895664,
		-93.607649
	],
	"55332": [
		44.520417,
		-94.699494
	],
	"55333": [
		44.562955,
		-94.860631
	],
	"55334": [
		44.535651,
		-94.188415
	],
	"55335": [
		44.53109,
		-94.553065
	],
	"55336": [
		44.777235,
		-94.198608
	],
	"55337": [
		44.778472,
		-93.272269
	],
	"55338": [
		44.66952,
		-93.995771
	],
	"55339": [
		44.723427,
		-93.956959
	],
	"55340": [
		45.078263,
		-93.572118
	],
	"55341": [
		45.157755,
		-93.66275
	],
	"55342": [
		44.74292,
		-94.739002
	],
	"55343": [
		44.914372,
		-93.416254
	],
	"55344": [
		44.863838,
		-93.430008
	],
	"55345": [
		44.915442,
		-93.48443
	],
	"55346": [
		44.880805,
		-93.482008
	],
	"55347": [
		44.827986,
		-93.462382
	],
	"55349": [
		45.058647,
		-94.074539
	],
	"55350": [
		44.900627,
		-94.391367
	],
	"55352": [
		44.651475,
		-93.592608
	],
	"55353": [
		45.329096,
		-94.324626
	],
	"55354": [
		44.880438,
		-94.061414
	],
	"55355": [
		45.101747,
		-94.539279
	],
	"55356": [
		44.994245,
		-93.58962
	],
	"55357": [
		45.103722,
		-93.674218
	],
	"55358": [
		45.253055,
		-93.991526
	],
	"55359": [
		45.007347,
		-93.692613
	],
	"55360": [
		44.91596,
		-93.919645
	],
	"55362": [
		45.292068,
		-93.838795
	],
	"55363": [
		45.037192,
		-93.91832
	],
	"55364": [
		44.93699,
		-93.677798
	],
	"55366": [
		44.67265,
		-94.232061
	],
	"55367": [
		44.895242,
		-93.976028
	],
	"55368": [
		44.740063,
		-93.899747
	],
	"55369": [
		45.12745,
		-93.445395
	],
	"55370": [
		44.777192,
		-94.036787
	],
	"55371": [
		45.578639,
		-93.592062
	],
	"55372": [
		44.682387,
		-93.413588
	],
	"55373": [
		45.088097,
		-93.721594
	],
	"55374": [
		45.175547,
		-93.575532
	],
	"55375": [
		44.908107,
		-93.721563
	],
	"55376": [
		45.211249,
		-93.687899
	],
	"55378": [
		44.757299,
		-93.366971
	],
	"55379": [
		44.753976,
		-93.514608
	],
	"55381": [
		44.930963,
		-94.199979
	],
	"55382": [
		45.30042,
		-94.199092
	],
	"55384": [
		44.937622,
		-93.635153
	],
	"55385": [
		44.739112,
		-94.489204
	],
	"55386": [
		44.863217,
		-93.666882
	],
	"55387": [
		44.869335,
		-93.77897
	],
	"55388": [
		44.955978,
		-93.840285
	],
	"55389": [
		45.297919,
		-94.442626
	],
	"55390": [
		45.065173,
		-93.979556
	],
	"55391": [
		44.956396,
		-93.539013
	],
	"55395": [
		44.953505,
		-94.071105
	],
	"55396": [
		44.546306,
		-94.367013
	],
	"55397": [
		44.823812,
		-93.937971
	],
	"55398": [
		45.464819,
		-93.612029
	],
	"55401": [
		44.984577,
		-93.269097
	],
	"55402": [
		44.976039,
		-93.271444
	],
	"55403": [
		44.969923,
		-93.284253
	],
	"55404": [
		44.961996,
		-93.261208
	],
	"55405": [
		44.972643,
		-93.301745
	],
	"55406": [
		44.938689,
		-93.221042
	],
	"55407": [
		44.935036,
		-93.253029
	],
	"55408": [
		44.940425,
		-93.292639
	],
	"55409": [
		44.930326,
		-93.281477
	],
	"55410": [
		44.911821,
		-93.319644
	],
	"55411": [
		44.999009,
		-93.298363
	],
	"55412": [
		45.027324,
		-93.303612
	],
	"55413": [
		44.999463,
		-93.241677
	],
	"55414": [
		44.979486,
		-93.227314
	],
	"55415": [
		44.9748,
		-93.257647
	],
	"55416": [
		44.950191,
		-93.336325
	],
	"55417": [
		44.90444,
		-93.230407
	],
	"55418": [
		45.021318,
		-93.242853
	],
	"55419": [
		44.905799,
		-93.287653
	],
	"55420": [
		44.835969,
		-93.277176
	],
	"55421": [
		45.0509,
		-93.253833
	],
	"55422": [
		45.009275,
		-93.341105
	],
	"55423": [
		44.87446,
		-93.282529
	],
	"55424": [
		44.905024,
		-93.344865
	],
	"55425": [
		44.851221,
		-93.225988
	],
	"55426": [
		44.958311,
		-93.374112
	],
	"55427": [
		45.005499,
		-93.37915
	],
	"55428": [
		45.06295,
		-93.381362
	],
	"55429": [
		45.063659,
		-93.341175
	],
	"55430": [
		45.067676,
		-93.302089
	],
	"55431": [
		44.824534,
		-93.312602
	],
	"55432": [
		45.096702,
		-93.253726
	],
	"55433": [
		45.160411,
		-93.314839
	],
	"55434": [
		45.163686,
		-93.250434
	],
	"55435": [
		44.873981,
		-93.335255
	],
	"55436": [
		44.90414,
		-93.373157
	],
	"55437": [
		44.824347,
		-93.342996
	],
	"55438": [
		44.823132,
		-93.38611
	],
	"55439": [
		44.87563,
		-93.374747
	],
	"55441": [
		45.006321,
		-93.424636
	],
	"55442": [
		45.04892,
		-93.426212
	],
	"55443": [
		45.117677,
		-93.338149
	],
	"55444": [
		45.104048,
		-93.301813
	],
	"55445": [
		45.122441,
		-93.379184
	],
	"55446": [
		45.03914,
		-93.489701
	],
	"55447": [
		45.001096,
		-93.489561
	],
	"55448": [
		45.193603,
		-93.300445
	],
	"55449": [
		45.17658,
		-93.181858
	],
	"55450": [
		44.87932,
		-93.225272
	],
	"55454": [
		44.969524,
		-93.241219
	],
	"55455": [
		44.971982,
		-93.233441
	],
	"55601": [
		47.235636,
		-91.365962
	],
	"55602": [
		47.349871,
		-91.886457
	],
	"55603": [
		47.546499,
		-91.251187
	],
	"55604": [
		47.979098,
		-90.599609
	],
	"55605": [
		47.965288,
		-89.737133
	],
	"55606": [
		47.934516,
		-89.988859
	],
	"55607": [
		47.563191,
		-91.417324
	],
	"55609": [
		46.970661,
		-91.780871
	],
	"55612": [
		47.769724,
		-90.701442
	],
	"55613": [
		47.581631,
		-90.922164
	],
	"55614": [
		47.368243,
		-91.375995
	],
	"55615": [
		47.653486,
		-90.820619
	],
	"55616": [
		47.170611,
		-91.642286
	],
	"55702": [
		46.957364,
		-92.637569
	],
	"55703": [
		47.730899,
		-92.750065
	],
	"55704": [
		46.219085,
		-92.751667
	],
	"55705": [
		47.451802,
		-92.207357
	],
	"55706": [
		47.72136,
		-91.961607
	],
	"55707": [
		46.555744,
		-92.629504
	],
	"55708": [
		47.571318,
		-92.347412
	],
	"55709": [
		47.42875,
		-93.373055
	],
	"55710": [
		47.629693,
		-92.708559
	],
	"55711": [
		46.818895,
		-92.690837
	],
	"55712": [
		46.2817,
		-92.520624
	],
	"55713": [
		47.500406,
		-92.746069
	],
	"55716": [
		47.321955,
		-93.264172
	],
	"55717": [
		47.068701,
		-92.387216
	],
	"55718": [
		46.620931,
		-92.486403
	],
	"55719": [
		47.541039,
		-92.86219
	],
	"55720": [
		46.750994,
		-92.533372
	],
	"55721": [
		47.223632,
		-93.688051
	],
	"55722": [
		47.278898,
		-93.441893
	],
	"55723": [
		47.839195,
		-92.916067
	],
	"55724": [
		47.166394,
		-92.355122
	],
	"55725": [
		48.252424,
		-92.165453
	],
	"55726": [
		46.674045,
		-92.829381
	],
	"55731": [
		48.007578,
		-91.65236
	],
	"55732": [
		47.672842,
		-92.208675
	],
	"55733": [
		46.713831,
		-92.360792
	],
	"55734": [
		47.352273,
		-92.444451
	],
	"55735": [
		46.210293,
		-93.010212
	],
	"55736": [
		46.955641,
		-92.940845
	],
	"55738": [
		47.264329,
		-92.660294
	],
	"55741": [
		47.462585,
		-92.398232
	],
	"55742": [
		47.204403,
		-93.136892
	],
	"55744": [
		47.234468,
		-93.506978
	],
	"55746": [
		47.361847,
		-92.955661
	],
	"55748": [
		47.014455,
		-93.621274
	],
	"55749": [
		46.439558,
		-92.443315
	],
	"55750": [
		47.53185,
		-91.963714
	],
	"55751": [
		47.397322,
		-92.659139
	],
	"55752": [
		46.950553,
		-93.285945
	],
	"55753": [
		47.395442,
		-93.081568
	],
	"55756": [
		46.361182,
		-92.584556
	],
	"55757": [
		46.51256,
		-92.950248
	],
	"55758": [
		47.50602,
		-92.720194
	],
	"55760": [
		46.642586,
		-93.257419
	],
	"55763": [
		47.347506,
		-92.155333
	],
	"55764": [
		47.331674,
		-93.291271
	],
	"55765": [
		47.103712,
		-92.756285
	],
	"55766": [
		47.268178,
		-92.458435
	],
	"55767": [
		46.450299,
		-92.760955
	],
	"55768": [
		47.486978,
		-92.684322
	],
	"55769": [
		47.479989,
		-93.18386
	],
	"55771": [
		48.133579,
		-92.811922
	],
	"55772": [
		48.112705,
		-93.130631
	],
	"55775": [
		47.320171,
		-93.17158
	],
	"55779": [
		46.908724,
		-92.4491
	],
	"55780": [
		46.688141,
		-92.699002
	],
	"55781": [
		47.679928,
		-93.047127
	],
	"55782": [
		47.832953,
		-92.206005
	],
	"55783": [
		46.396409,
		-92.892446
	],
	"55784": [
		47.058391,
		-93.165281
	],
	"55785": [
		46.921584,
		-93.731217
	],
	"55786": [
		47.322822,
		-93.381531
	],
	"55787": [
		46.678418,
		-93.102978
	],
	"55790": [
		47.927477,
		-92.252921
	],
	"55792": [
		47.597028,
		-92.479684
	],
	"55793": [
		47.116305,
		-93.28397
	],
	"55795": [
		46.298245,
		-92.882944
	],
	"55797": [
		46.5665,
		-92.362116
	],
	"55798": [
		46.723252,
		-92.967793
	],
	"55802": [
		46.740951,
		-92.049345
	],
	"55803": [
		47.053522,
		-92.068754
	],
	"55804": [
		46.931351,
		-91.936344
	],
	"55805": [
		46.800824,
		-92.095786
	],
	"55806": [
		46.768139,
		-92.127642
	],
	"55807": [
		46.735493,
		-92.168592
	],
	"55808": [
		46.676281,
		-92.241391
	],
	"55810": [
		46.756745,
		-92.269437
	],
	"55811": [
		46.842463,
		-92.221917
	],
	"55812": [
		46.808688,
		-92.070727
	],
	"55814": [
		46.833709,
		-92.197671
	],
	"55901": [
		44.069818,
		-92.506581
	],
	"55902": [
		43.971218,
		-92.507094
	],
	"55904": [
		43.959886,
		-92.400595
	],
	"55905": [
		44.055948,
		-92.525906
	],
	"55906": [
		44.0999,
		-92.408157
	],
	"55909": [
		43.562061,
		-92.733693
	],
	"55910": [
		44.12866,
		-91.971828
	],
	"55912": [
		43.682607,
		-92.98845
	],
	"55917": [
		43.88482,
		-93.075481
	],
	"55918": [
		43.740821,
		-92.846462
	],
	"55919": [
		43.620065,
		-91.299476
	],
	"55920": [
		44.013768,
		-92.62201
	],
	"55921": [
		43.628995,
		-91.458872
	],
	"55922": [
		43.558956,
		-91.900947
	],
	"55923": [
		43.851036,
		-92.186086
	],
	"55924": [
		44.029232,
		-93.027295
	],
	"55925": [
		43.912092,
		-91.458412
	],
	"55926": [
		43.743195,
		-92.706883
	],
	"55927": [
		44.036469,
		-92.870923
	],
	"55929": [
		43.976735,
		-92.139638
	],
	"55931": [
		43.508662,
		-91.385229
	],
	"55932": [
		44.152205,
		-92.298336
	],
	"55933": [
		43.646002,
		-92.680581
	],
	"55934": [
		44.003978,
		-92.264271
	],
	"55935": [
		43.74792,
		-92.129168
	],
	"55936": [
		43.717021,
		-92.577675
	],
	"55939": [
		43.543427,
		-92.091732
	],
	"55940": [
		43.898614,
		-92.809489
	],
	"55941": [
		43.724845,
		-91.349148
	],
	"55943": [
		43.782961,
		-91.582681
	],
	"55944": [
		43.989517,
		-92.718008
	],
	"55945": [
		44.266855,
		-92.052486
	],
	"55946": [
		44.273211,
		-92.96619
	],
	"55947": [
		43.82289,
		-91.36636
	],
	"55949": [
		43.710114,
		-91.928606
	],
	"55950": [
		43.747102,
		-92.964476
	],
	"55951": [
		43.529233,
		-92.482488
	],
	"55952": [
		43.943303,
		-91.843577
	],
	"55953": [
		43.526582,
		-92.966542
	],
	"55954": [
		43.557061,
		-91.780106
	],
	"55955": [
		44.08732,
		-92.74087
	],
	"55956": [
		44.286019,
		-92.527603
	],
	"55957": [
		44.245312,
		-92.260879
	],
	"55959": [
		44.117944,
		-91.799533
	],
	"55960": [
		44.140242,
		-92.535165
	],
	"55961": [
		43.608402,
		-92.473757
	],
	"55962": [
		43.762187,
		-91.845128
	],
	"55963": [
		44.190569,
		-92.656046
	],
	"55964": [
		44.160247,
		-92.158081
	],
	"55965": [
		43.623194,
		-92.128187
	],
	"55967": [
		43.795157,
		-92.513371
	],
	"55968": [
		44.397037,
		-92.089941
	],
	"55969": [
		44.082475,
		-91.877296
	],
	"55970": [
		43.595148,
		-92.831962
	],
	"55971": [
		43.815792,
		-91.754675
	],
	"55972": [
		43.995962,
		-92.048789
	],
	"55973": [
		43.806251,
		-92.772799
	],
	"55974": [
		43.577137,
		-91.647987
	],
	"55975": [
		43.677869,
		-92.364434
	],
	"55976": [
		43.864335,
		-92.487417
	],
	"55977": [
		43.555778,
		-92.648066
	],
	"55979": [
		43.920384,
		-91.950764
	],
	"55981": [
		44.35761,
		-92.049231
	],
	"55982": [
		43.815739,
		-92.884603
	],
	"55983": [
		44.291403,
		-92.806985
	],
	"55985": [
		44.158245,
		-92.904395
	],
	"55987": [
		43.994246,
		-91.625441
	],
	"55990": [
		43.732184,
		-92.261786
	],
	"55991": [
		44.261215,
		-92.418566
	],
	"55992": [
		44.3228,
		-92.682884
	],
	"56001": [
		44.128177,
		-93.978984
	],
	"56003": [
		44.219273,
		-94.090329
	],
	"56007": [
		43.660887,
		-93.324563
	],
	"56009": [
		43.661834,
		-93.546424
	],
	"56010": [
		43.886164,
		-94.179805
	],
	"56011": [
		44.602565,
		-93.772641
	],
	"56013": [
		43.62018,
		-94.103786
	],
	"56014": [
		43.583158,
		-93.817898
	],
	"56016": [
		43.762065,
		-93.343107
	],
	"56017": [
		44.30535,
		-93.819535
	],
	"56019": [
		44.115873,
		-94.888968
	],
	"56020": [
		43.607416,
		-93.538325
	],
	"56021": [
		44.289313,
		-94.316025
	],
	"56022": [
		44.053579,
		-94.839365
	],
	"56023": [
		43.782339,
		-94.013565
	],
	"56024": [
		44.143592,
		-93.838818
	],
	"56025": [
		43.753245,
		-93.917351
	],
	"56026": [
		43.885775,
		-93.290995
	],
	"56027": [
		43.516714,
		-94.116644
	],
	"56028": [
		44.226257,
		-93.71742
	],
	"56029": [
		43.530047,
		-93.522279
	],
	"56031": [
		43.622571,
		-94.468513
	],
	"56032": [
		43.763635,
		-93.556877
	],
	"56033": [
		43.56506,
		-93.938149
	],
	"56034": [
		44.028598,
		-94.181962
	],
	"56035": [
		43.819522,
		-93.272622
	],
	"56036": [
		43.551882,
		-93.221023
	],
	"56037": [
		44.016243,
		-94.051624
	],
	"56039": [
		43.663418,
		-94.323586
	],
	"56041": [
		44.161305,
		-94.533087
	],
	"56042": [
		43.804234,
		-93.483758
	],
	"56043": [
		43.649401,
		-93.222394
	],
	"56044": [
		44.564707,
		-93.956838
	],
	"56045": [
		43.757063,
		-93.214342
	],
	"56046": [
		43.964524,
		-93.271449
	],
	"56047": [
		43.732263,
		-94.233494
	],
	"56048": [
		44.092772,
		-93.721097
	],
	"56050": [
		44.266105,
		-93.945429
	],
	"56051": [
		43.537461,
		-93.710558
	],
	"56052": [
		44.327066,
		-93.558691
	],
	"56054": [
		44.435233,
		-94.373758
	],
	"56055": [
		44.128471,
		-94.23528
	],
	"56056": [
		44.072703,
		-94.579571
	],
	"56057": [
		44.390795,
		-93.711666
	],
	"56058": [
		44.441847,
		-93.914105
	],
	"56060": [
		43.92871,
		-94.441044
	],
	"56062": [
		44.046244,
		-94.414123
	],
	"56063": [
		44.21803,
		-93.815742
	],
	"56065": [
		43.942225,
		-93.92843
	],
	"56068": [
		43.865306,
		-93.806142
	],
	"56069": [
		44.412099,
		-93.542436
	],
	"56071": [
		44.534962,
		-93.579423
	],
	"56072": [
		43.899229,
		-93.517081
	],
	"56073": [
		44.30483,
		-94.464745
	],
	"56074": [
		44.326877,
		-94.196936
	],
	"56075": [
		43.735047,
		-94.436687
	],
	"56078": [
		44.005921,
		-93.760875
	],
	"56080": [
		44.080438,
		-93.854419
	],
	"56081": [
		43.991089,
		-94.629348
	],
	"56082": [
		44.357287,
		-94.036965
	],
	"56083": [
		44.200911,
		-95.134052
	],
	"56085": [
		44.294343,
		-94.737789
	],
	"56087": [
		44.240509,
		-94.975248
	],
	"56088": [
		43.824222,
		-94.443295
	],
	"56089": [
		43.561574,
		-93.431131
	],
	"56090": [
		43.956354,
		-94.24404
	],
	"56091": [
		43.927431,
		-93.681329
	],
	"56093": [
		44.062566,
		-93.519762
	],
	"56096": [
		44.244889,
		-93.603466
	],
	"56097": [
		43.720968,
		-93.713282
	],
	"56098": [
		43.793016,
		-94.181766
	],
	"56101": [
		43.879726,
		-95.133825
	],
	"56110": [
		43.62222,
		-95.945051
	],
	"56111": [
		43.639357,
		-94.882713
	],
	"56113": [
		44.395415,
		-96.153168
	],
	"56114": [
		43.976217,
		-95.593254
	],
	"56115": [
		44.209457,
		-95.905771
	],
	"56116": [
		43.614381,
		-96.386343
	],
	"56117": [
		43.523116,
		-95.687376
	],
	"56118": [
		43.950579,
		-95.02918
	],
	"56119": [
		43.713721,
		-95.462996
	],
	"56120": [
		43.962378,
		-94.792641
	],
	"56121": [
		43.534615,
		-94.584233
	],
	"56122": [
		43.898445,
		-95.956
	],
	"56123": [
		44.086937,
		-95.592414
	],
	"56125": [
		44.058188,
		-95.552866
	],
	"56127": [
		43.547487,
		-94.764716
	],
	"56128": [
		43.881542,
		-96.110303
	],
	"56129": [
		43.529203,
		-96.041896
	],
	"56131": [
		43.855847,
		-95.572539
	],
	"56132": [
		44.203451,
		-95.764941
	],
	"56134": [
		43.795694,
		-96.238401
	],
	"56136": [
		44.494914,
		-96.394646
	],
	"56137": [
		43.840366,
		-95.330695
	],
	"56138": [
		43.534582,
		-96.389525
	],
	"56139": [
		44.103929,
		-96.179427
	],
	"56140": [
		43.908773,
		-96.368005
	],
	"56141": [
		43.87708,
		-95.80388
	],
	"56142": [
		44.467605,
		-96.231076
	],
	"56143": [
		43.632603,
		-95.008681
	],
	"56144": [
		43.851392,
		-96.392004
	],
	"56145": [
		44.054734,
		-95.175721
	],
	"56146": [
		43.580062,
		-96.103432
	],
	"56147": [
		43.757406,
		-96.057684
	],
	"56149": [
		44.304157,
		-96.305564
	],
	"56150": [
		43.628218,
		-95.197159
	],
	"56151": [
		44.031451,
		-95.929422
	],
	"56152": [
		44.230302,
		-95.2761
	],
	"56153": [
		43.826655,
		-96.003104
	],
	"56155": [
		43.77245,
		-95.944787
	],
	"56156": [
		43.66156,
		-96.227152
	],
	"56157": [
		44.404175,
		-95.948377
	],
	"56158": [
		43.640634,
		-96.0785
	],
	"56159": [
		43.941177,
		-94.931905
	],
	"56160": [
		43.841157,
		-94.804734
	],
	"56161": [
		43.707031,
		-95.324827
	],
	"56162": [
		43.841703,
		-94.668743
	],
	"56164": [
		44.060521,
		-96.342684
	],
	"56165": [
		43.725343,
		-95.703057
	],
	"56166": [
		44.203001,
		-95.380986
	],
	"56167": [
		43.553927,
		-95.408728
	],
	"56168": [
		43.617488,
		-95.809489
	],
	"56169": [
		44.338334,
		-96.00651
	],
	"56170": [
		44.173678,
		-96.090554
	],
	"56171": [
		43.671285,
		-94.761789
	],
	"56172": [
		44.014163,
		-95.775513
	],
	"56173": [
		43.52472,
		-96.245976
	],
	"56174": [
		44.016336,
		-95.305092
	],
	"56175": [
		44.260701,
		-95.638506
	],
	"56176": [
		43.783287,
		-94.720493
	],
	"56177": [
		43.889133,
		-96.252875
	],
	"56178": [
		44.284488,
		-96.133226
	],
	"56180": [
		44.246204,
		-95.459592
	],
	"56181": [
		43.677795,
		-94.626602
	],
	"56183": [
		44.029019,
		-95.431132
	],
	"56185": [
		43.798534,
		-95.824238
	],
	"56186": [
		44.033228,
		-96.074258
	],
	"56187": [
		43.622823,
		-95.583204
	],
	"56201": [
		45.102185,
		-95.041816
	],
	"56207": [
		45.491698,
		-96.066223
	],
	"56208": [
		45.246719,
		-96.00477
	],
	"56209": [
		45.12725,
		-94.811966
	],
	"56210": [
		45.559899,
		-96.565383
	],
	"56211": [
		45.574189,
		-96.679837
	],
	"56212": [
		45.130873,
		-96.323833
	],
	"56214": [
		44.603693,
		-95.322637
	],
	"56215": [
		45.317716,
		-95.571952
	],
	"56216": [
		44.942501,
		-95.059379
	],
	"56218": [
		44.826953,
		-95.940466
	],
	"56219": [
		45.607655,
		-96.818277
	],
	"56220": [
		44.732106,
		-96.295236
	],
	"56221": [
		45.548133,
		-96.192863
	],
	"56222": [
		44.985399,
		-95.356764
	],
	"56223": [
		44.762144,
		-95.818773
	],
	"56224": [
		44.372829,
		-95.052125
	],
	"56225": [
		45.440977,
		-96.442672
	],
	"56226": [
		45.421616,
		-95.67812
	],
	"56227": [
		45.290841,
		-96.168828
	],
	"56228": [
		44.951226,
		-94.685184
	],
	"56229": [
		44.594036,
		-95.716384
	],
	"56230": [
		44.763464,
		-95.084058
	],
	"56231": [
		45.279446,
		-95.763206
	],
	"56232": [
		44.932605,
		-96.035217
	],
	"56235": [
		45.709727,
		-96.016509
	],
	"56236": [
		45.664584,
		-96.41613
	],
	"56237": [
		44.616613,
		-95.433459
	],
	"56239": [
		44.504193,
		-95.910436
	],
	"56240": [
		45.562563,
		-96.48365
	],
	"56241": [
		44.797885,
		-95.572929
	],
	"56243": [
		45.170242,
		-94.68649
	],
	"56244": [
		45.477723,
		-95.780133
	],
	"56245": [
		44.684043,
		-95.677203
	],
	"56248": [
		45.78621,
		-96.135808
	],
	"56249": [
		45.318732,
		-95.901563
	],
	"56251": [
		45.143785,
		-94.920192
	],
	"56252": [
		45.178247,
		-95.310129
	],
	"56253": [
		44.959973,
		-94.872524
	],
	"56255": [
		44.397066,
		-95.419313
	],
	"56256": [
		45.028691,
		-96.202421
	],
	"56257": [
		44.969258,
		-96.402151
	],
	"56258": [
		44.44607,
		-95.758167
	],
	"56260": [
		44.963275,
		-95.482997
	],
	"56262": [
		45.115071,
		-95.869707
	],
	"56263": [
		44.42148,
		-95.53248
	],
	"56264": [
		44.57019,
		-95.984801
	],
	"56265": [
		44.999823,
		-95.706482
	],
	"56266": [
		44.421057,
		-94.914522
	],
	"56267": [
		45.582463,
		-95.928793
	],
	"56270": [
		44.570415,
		-94.987374
	],
	"56271": [
		45.244754,
		-95.404995
	],
	"56273": [
		45.317879,
		-94.979933
	],
	"56274": [
		45.90222,
		-96.245728
	],
	"56276": [
		45.24643,
		-96.324208
	],
	"56277": [
		44.756023,
		-94.985496
	],
	"56278": [
		45.348003,
		-96.379955
	],
	"56279": [
		45.218831,
		-95.169843
	],
	"56280": [
		44.632607,
		-96.168267
	],
	"56281": [
		44.95323,
		-95.169268
	],
	"56282": [
		45.040131,
		-95.228467
	],
	"56283": [
		44.528007,
		-95.138858
	],
	"56284": [
		44.781881,
		-95.198354
	],
	"56285": [
		44.788702,
		-95.346058
	],
	"56287": [
		44.475752,
		-95.326447
	],
	"56288": [
		45.241207,
		-94.951432
	],
	"56289": [
		45.333188,
		-95.224451
	],
	"56291": [
		44.626742,
		-96.08191
	],
	"56292": [
		44.502071,
		-95.456501
	],
	"56293": [
		44.416511,
		-95.259903
	],
	"56294": [
		44.313224,
		-95.213576
	],
	"56295": [
		45.035813,
		-95.826677
	],
	"56296": [
		45.82683,
		-96.462462
	],
	"56297": [
		44.636634,
		-95.52937
	],
	"56301": [
		45.487084,
		-94.242777
	],
	"56303": [
		45.574017,
		-94.215271
	],
	"56304": [
		45.530416,
		-94.057176
	],
	"56307": [
		45.62681,
		-94.591029
	],
	"56308": [
		45.878391,
		-95.386055
	],
	"56309": [
		46.07926,
		-95.805971
	],
	"56310": [
		45.634286,
		-94.450242
	],
	"56311": [
		45.89747,
		-95.895594
	],
	"56312": [
		45.470123,
		-94.961846
	],
	"56313": [
		45.784022,
		-93.552745
	],
	"56314": [
		45.814701,
		-94.432957
	],
	"56315": [
		45.980087,
		-95.594053
	],
	"56316": [
		45.488301,
		-95.162659
	],
	"56318": [
		45.853038,
		-94.67453
	],
	"56319": [
		46.010823,
		-95.215688
	],
	"56320": [
		45.466522,
		-94.40353
	],
	"56321": [
		45.581117,
		-94.391288
	],
	"56323": [
		45.629632,
		-95.723921
	],
	"56324": [
		46.168955,
		-95.904155
	],
	"56325": [
		45.562815,
		-94.946854
	],
	"56326": [
		46.039558,
		-95.670809
	],
	"56327": [
		45.754477,
		-95.608226
	],
	"56328": [
		45.954758,
		-94.517536
	],
	"56329": [
		45.709067,
		-93.914815
	],
	"56330": [
		45.753241,
		-93.756384
	],
	"56331": [
		45.678998,
		-94.671722
	],
	"56332": [
		45.967416,
		-95.506404
	],
	"56334": [
		45.574381,
		-95.33678
	],
	"56335": [
		45.600289,
		-94.861632
	],
	"56336": [
		45.820691,
		-94.762637
	],
	"56338": [
		46.043097,
		-93.854214
	],
	"56339": [
		45.824978,
		-95.821155
	],
	"56340": [
		45.759467,
		-94.429019
	],
	"56342": [
		46.183805,
		-93.368993
	],
	"56343": [
		45.785919,
		-95.704969
	],
	"56345": [
		45.988419,
		-94.373531
	],
	"56347": [
		45.96669,
		-94.872044
	],
	"56349": [
		45.726139,
		-95.51296
	],
	"56350": [
		46.305029,
		-93.230407
	],
	"56352": [
		45.6418,
		-94.806359
	],
	"56353": [
		45.803664,
		-93.629079
	],
	"56354": [
		46.057207,
		-95.248616
	],
	"56355": [
	],
