var test = require('supertest')
var assert = require('assert')
var doubleInt = require('../double')

describe("Testing doubleInt", function(){
    it('1.1 Should return 4 when I enter 2', function(){
        let result = doubleInt(2);
        assert.equal(result, 4)
    })

    it('1.2 Should return -4 when I enter -2', function(){
        let result = doubleInt(-2)
        assert.equal(result, -4)
    })

    it('1.3 Should throw an error if a string is passed', function(){
        assert.throws(function(){
            return doubleInt('jon')
        })
    })
})