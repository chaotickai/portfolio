var app = require('../app')
var test = require('supertest')

describe("Testing POST requests", function(){
    it("2.1 should return http status of 200 when you POST a new todo", function(done){
        let newTodo = {description: 'complete testing project', isComplete: false}
        test(app)
        .post('/todos/4')
        .set('Accept', 'application/json')
        .send(newTodo)
        .expect(200)
        .expect(/project/, done)
    })
})