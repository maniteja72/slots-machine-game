var assert 	= require('chai').assert;
var helper 	= require('./helpers.js');

describe('Random Generators Tests', function(){

	// Testing the application numbers
	it('generateRandomNumber Method Should return Numbers Between 0 -> 5', function(){
		assert( helper.generateRandomNumber(5, 0) >= 0 && helper.generateRandomNumber(5, 0) <= 5, 'Return Value should be greater than or equal to 0 and less than or equal to 5' );
	});

	// Testing unexpected arguments
		it('generateRandomNumber Method Should undifined', function(){
		assert.typeOf( helper.generateRandomNumber('hundered', 'two'), 'undefined' , 'Should return undifined in case of Non numeric arguments' );
	});

	// Testing unexpected arguments
		it('generateRandomNumber Method Should undifined', function(){
		assert.typeOf( helper.generateRandomNumber(), 'undefined' , 'Should return undifined in case of missing arguments' );
	});

	// Testing unexpected arguments
		it('generateRandomNumber Method Should not work with negative numbers and returns undifined', function(){
		assert.typeOf( helper.generateRandomNumber(-2, -5), 'undefined', 'Expected undifined on negative numbers' );
	});

	// Testing The bonus function with application numbers
	it('getRandomBonus Method Should return true or false ', function(){
		assert.isBoolean( helper.getRandomBonus(23, 0) , 'Application Values with normal propabilty of true and false' );
	});
	// Testing The bonus function with application numbers
	it('getRandomBonus Method Should return true or false ', function(){
		assert.isBoolean( helper.getRandomBonus(6, 5) , 'More propabilty of true value' );
	});

});

describe('Slots Array Generator Tests', function(){

	// Testing the application numbers
	it('getSlotsArray should return arrays with length 21 item', function(){
		assert( helper.getSlotsArray(5, 0, 21).slot1.length == 21, 'Length of array is 21' );
	});
	
	// Testing unexpected arguments
		it('getSlotsArray Method Should undifined', function(){
		assert.isNotTrue( helper.getSlotsArray('hundered', 'two') , 'Should return undifined in case of Non numeric arguments' );
	});

	// Testing unexpected arguments
	it('getSlotsArray Method Should return 3 arrays with 10 items length per each ', function(){
		assert( helper.getSlotsArray(5, 0).slot1.length == 10 , 'Should have arrays of length 10 items' );
	});

});
