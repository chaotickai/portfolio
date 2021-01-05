var app = require('../app')
var test = require('supertest')

describe("Testing GET requests", function(){
    it("1.1 should return http status of 200 and data of type json", function(done){
        test(app)
        .get('/todos/4')
        .expect('Content-Type', /json/i)
        .expect(200, done)
    })
})