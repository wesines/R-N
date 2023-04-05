const db = require("../models");
const Book = db.books;
const Op = db.Sequelize.Op;
// Retrieve all Books from the database.
exports.findAll=(req,res)=>{
    console.log("test findAll");
Book.findAll().then(data=>{
    res.send(data)
}).catch(err=>{
    res.status(500).send({message:err.message||"Some error occurred while retrieving books"})
})
}