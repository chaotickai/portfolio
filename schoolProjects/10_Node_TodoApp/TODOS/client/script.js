// NOTE: Original trial class code

const todoURL = `http://localhost:3000/todos`

//READ - GET
$(document).ready(function(){
    $.ajax({
        url: todoURL,
        method: "GET"
    })
    .done(function(dataObj){
        $(`ul`).empty()
        dataObj.map(function(todo){
            var completed = todo.isComplete ? "completed" : ""

            // if(todo.isComplete === true){
            //     var completed = "completed"
            // }else {
            //     var completed = ""
            // }
            $("ul").append(
                `<li data-id=${todo.id} class=${completed}>${todo.description}<span><i class='far fa-trash-alt'></i></span></li>`
            );
        })
    })
    .fail(function(error){
        console.error(`There was a GET error :( ${error}`)
    })
})

// CREATE
$("input").keypress(function (event) {
    if (event.which === 13 && $(this).val() !== "") {
        var todoItem = {
            description: $(this).val()
        }
        $.ajax({
            url: todoURL,
            method: "POST",
            data: todoItem
        })
        .done(function(dataObj){
            var completed = dataObj.isComplete ? "completed" : ""
            $("ul").append(
                `<li data-id=${dataObj.id} class=${completed}>${dataObj.description}<span><i class='far fa-trash-alt'></i></span></li>`
            );
            $("input").val("");
        })
        .fail(function(error){
            console.error(`There was a POST error :( ${error}`)
        })
    }
});

//UPDATE
$("ul").on("click", "li", function () {
    let self = this

    $.ajax({
        url: `${todoURL}/${$(self).data("id")}`,
        method: "PUT",
    })
    .done(function(dataObj){
        $(self).toggleClass("completed");
    })
    .fail(function(error){
        console.error(`There was a PUT error :( ${error}`)
    })
});

//DELETE
$("ul").on("click", "span", function (event) {
    event.stopPropagation()

    let self = this

    $.ajax({
        url: `${todoURL}/${$(self).parent().data("id")}`,
        method: "DELETE",
    })
    .done(function(dataObj){
        $(self).parent().remove();
    })
    .fail(function(error){
        console.error(`There was a DELETE error :( ${error}`)
    })
});