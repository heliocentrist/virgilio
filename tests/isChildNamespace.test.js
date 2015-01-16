/* global describe, it, beforeEach */
var format = require('util').format;
var Virgilio = require('../');

describe('Virgilio.prototype.isChildNamespace$()', function() {
    var virgilio = null;
    beforeEach(function() {
        virgilio = new Virgilio({
            logger: {
                streams: []
            }
        });
    });

    it('Can call isChildNamespace$ with a namespace object', function() {

        var foo = virgilio.namespace$('foo');
        var bar = virgilio.namespace$('foo.bar');

        bar.isChildNamespace$(foo).must.equal(true);
    });

    it('Can call isChildNamespace$ with a string path', function() {

        var foo = virgilio.namespace$('foo');
        var bar = virgilio.namespace$('foo.bar');

        bar.isChildNamespace$('virgilio.foo').must.equal(true);
    });

    it('Will return false when called on wrong parent namespace', function() {

        var foo = virgilio.namespace$('foo');
        var bar = virgilio.namespace$('baz.bar');

        bar.isChildNamespace$(foo).must.equal(false);
    });

    describe('Throws an error when called with wrong arguments', function() {
        var testCases = [
            [],
            [function() {}]
        ];
        testCases.forEach(function(args) {
            function testFunc() {
                virgilio.isChildNamespace$.apply(virgilio, args);
            }
            it('Called with ' + args.join(', '), function() {
                testFunc.must.throw(/called with invalid arguments/);
            });
        });
    });
});
