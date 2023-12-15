const ToDoModel = require("../models/ToDoModels")

exports.getTodos = async (req, res) => {
    const todos = await ToDoModel.find()
    res.send(todos)
}

exports.saveToDo =  (req, res) => {
   const todo = req.body

   ToDoModel.create(todo)
   .then(data => {
        
        res.status(201).send(data)
   })
   .catch((err) => {
    console.log(err)
    res.send({error: err, msg:"something went wrong"})
})
}

exports.updateToDo  = (req, res) => {
    const todo = req.body
    const id = req.params.id

    ToDoModel.findByIdAndUpdate(id, todo)
    .then(() =>
        res.send("updated successfully....") 
    )
    .catch((err) => {
        console.log(err)
        res.send({error: err, msg: "something went wrong"})
    })
    
    }
exports.deleteToDo =  (req, res) => {
    const {id} = req.params
 
    ToDoModel.findByIdAndDelete(id)
    .then(()=> {
         res.send("Deleted successfully...");
    })
    .catch((err) => {
        console.log(err)
        res.send({error: err, msg:"something went wrong"})
    })
}