const calculator = require('../calculator');
const assert = require('assert');

describe('Calculator', function() {
    describe('Add two numbers with positive scenario.', function() {
        it ('should return 5', function() {

            var valueA = 3;
            var valueB = 2;

            var result = calculator.addTwoNumbers(valueA, valueB);

            assert.strictEqual(result, 5);
        });

        it ('should add two number and return 10', function() {

            var valueA = 2;
            var valueB = 8;
            var output = calculator.addTwoNumbers(valueA, valueB);

            assert.strictEqual(output, 10);
        });
    })
});