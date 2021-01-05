var app = require('../app')
var test = require('supertest')

describe("Testing PUT requests", function(){
    it("3.1 should return http status of 200 when you PUT an existing todo", function(){
        let newTodo = {description: 'PUT test', isComplete: false}
        test(app)
        .post('/todos/4')
        .set('Accept', 'application/json')
        .send(newTodo)
        .expect(200)
        .expect(/test/)
        .end(function(err, result){
            test(app)
            .put(`/todos/` + result.body.id)
            .expect(200)
            .expect({
                descript: newTodo.descript, 
                id: result.body.id, 
                iscomplete: !newTodo.isComplete,
                user_id: 4
            })
        })
    })
})