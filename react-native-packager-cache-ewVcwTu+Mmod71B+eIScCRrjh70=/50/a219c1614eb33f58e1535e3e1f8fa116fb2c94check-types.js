

(function (globals) {
    'use strict';

    var messages, predicates, functions, verify, maybe, not;

    predicates = {
        like: like,
        instance: instance,
        emptyObject: emptyObject,
        nulled: nulled,
        defined: defined,
        object: object,
        length: length,
        array: array,
        date: date,
        fn: fn,
        webUrl: webUrl,
        gitUrl: gitUrl,
        email: email,
        unemptyString: unemptyString,
        string: string,
        evenNumber: evenNumber,
        oddNumber: oddNumber,
        positiveNumber: positiveNumber,
        negativeNumber: negativeNumber,
        intNumber: intNumber,
        floatNumber: floatNumber,
        number: number
    };

    messages = {
        like: 'Invalid type',
        instance: 'Invalid type',
        emptyObject: 'Invalid object',
        nulled: 'Not null',
        defined: 'Not defined',
        object: 'Invalid object',
        length: 'Invalid length',
        array: 'Invalid array',
        date: 'Invalid date',
        fn: 'Invalid function',
        webUrl: 'Invalid URL',
        gitUrl: 'Invalid git URL',
        email: 'Invalid email',
        unemptyString: 'Invalid string',
        string: 'Invalid string',
        evenNumber: 'Invalid number',
        oddNumber: 'Invalid number',
        positiveNumber: 'Invalid number',
        negativeNumber: 'Invalid number',
        intNumber: 'Invalid number',
        floatNumber: 'Invalid number',
        number: 'Invalid number'
    };

    functions = {
        map: map,
        every: every,
        any: any
    };

    functions = mixin(functions, predicates);
    verify = createModifiedPredicates(verifyModifier);
    maybe = createModifiedPredicates(maybeModifier);
    not = createModifiedPredicates(notModifier);
    verify.maybe = createModifiedFunctions(verifyModifier, maybe);
    verify.not = createModifiedFunctions(verifyModifier, not);

    exportFunctions(mixin(functions, {
        verify: verify,
        maybe: maybe,
        not: not
    }));

    function like(thing, duck) {
        var name;

        verify.object(thing);
        verify.object(duck);

        for (name in duck) {
            if (duck.hasOwnProperty(name)) {
                if (thing.hasOwnProperty(name) === false || typeof thing[name] !== typeof duck[name]) {
                    return false;
                }

                if (object(thing[name]) && like(thing[name], duck[name]) === false) {
                    return false;
                }
            }
        }

        return true;
    }

    function instance(thing, prototype) {
        if (!defined(thing) || nulled(thing)) {
            return false;
        }

        if (fn(prototype) && thing instanceof prototype) {
            return true;
        }

        return false;
    }

    function emptyObject(thing) {
        var property;

        if (object(thing)) {
            for (property in thing) {
                if (thing.hasOwnProperty(property)) {
                    return false;
                }
            }

            return true;
        }

        return false;
    }

    function nulled(thing) {
        return thing === null;
    }

    function defined(thing) {
        return thing !== void 0;
    }

    function object(thing) {
        return typeof thing === 'object' && !nulled(thing) && !array(thing) && !date(thing);
    }

    function length(thing, value) {
        return thing && thing.length === value;
    }

    function array(thing) {
        if (Array.isArray) {
            return Array.isArray(thing);
        }

        return Object.prototype.toString.call(thing) === '[object Array]';
    }

    function date(thing) {
        return Object.prototype.toString.call(thing) === '[object Date]';
    }

    function fn(thing) {
        return typeof thing === 'function';
    }

    function webUrl(thing) {
        return unemptyString(thing) && /^https?:\/\/.+/.test(thing);
    }

    function gitUrl(thing) {
        return unemptyString(thing) && /^git\+(ssh|https?):\/\/.+/.test(thing);
    }

    function email(thing) {
        return unemptyString(thing) && /\S+@\S+/.test(thing);
    }

    function unemptyString(thing) {
        return string(thing) && thing !== '';
    }

    function string(thing) {
        return typeof thing === 'string';
    }

    function oddNumber(thing) {
        return number(thing) && (thing % 2 === 1 || thing % 2 === -1);
    }

    function evenNumber(thing) {
        return number(thing) && thing % 2 === 0;
    }

    function intNumber(thing) {
        return number(thing) && thing % 1 === 0;
    }

    function floatNumber(thing) {
        return number(thing) && thing % 1 !== 0;
    }

    function positiveNumber(thing) {
        return number(thing) && thing > 0;
    }

    function negativeNumber(thing) {
        return number(thing) && thing < 0;
    }

    function number(thing) {
        return typeof thing === 'number' && isNaN(thing) === false && thing !== Number.POSITIVE_INFINITY && thing !== Number.NEGATIVE_INFINITY;
    }

    function map(things, predicates) {
        var property,
            result = {},
            predicate;

        verify.object(things);
        verify.object(predicates);

        for (property in predicates) {
            if (predicates.hasOwnProperty(property)) {
                predicate = predicates[property];

                if (fn(predicate)) {
                    result[property] = predicate(things[property]);
                } else if (object(predicate)) {
                    result[property] = map(things[property], predicate);
                }
            }
        }

        return result;
    }

    function every(predicateResults) {
        var property, value;

        verify.object(predicateResults);

        for (property in predicateResults) {
            if (predicateResults.hasOwnProperty(property)) {
                value = predicateResults[property];

                if (object(value) && every(value) === false) {
                    return false;
                }

                if (value === false) {
                    return false;
                }
            }
        }
        return true;
    }

    function any(predicateResults) {
        var property, value;

        verify.object(predicateResults);

        for (property in predicateResults) {
            if (predicateResults.hasOwnProperty(property)) {
                value = predicateResults[property];

                if (object(value) && any(value)) {
                    return true;
                }

                if (value === true) {
                    return true;
                }
            }
        }

        return false;
    }

    function mixin(target, source) {
        var property;

        for (property in source) {
            if (source.hasOwnProperty(property)) {
                target[property] = source[property];
            }
        }

        return target;
    }

    function verifyModifier(predicate, defaultMessage) {
        return function () {
            var message;

            if (predicate.apply(null, arguments) === false) {
                message = arguments[arguments.length - 1];
                throw new Error(unemptyString(message) ? message : defaultMessage);
            }
        };
    }

    function maybeModifier(predicate) {
        return function () {
            if (!defined(arguments[0]) || nulled(arguments[0])) {
                return true;
            }

            return predicate.apply(null, arguments);
        };
    }

    function notModifier(predicate) {
        return function () {
            return !predicate.apply(null, arguments);
        };
    }

    function createModifiedPredicates(modifier) {
        return createModifiedFunctions(modifier, predicates);
    }

    function createModifiedFunctions(modifier, functions) {
        var name,
            result = {};

        for (name in functions) {
            if (functions.hasOwnProperty(name)) {
                result[name] = modifier(functions[name], messages[name]);
            }
        }

        return result;
    }

    function exportFunctions(functions) {
        if (typeof define === 'function' && define.amd) {
            define(function () {
                return functions;
            });
        } else if (typeof module !== 'undefined' && module !== null && module.exports) {
            module.exports = functions;
        } else {
            globals.check = functions;
        }
    }
})(this);