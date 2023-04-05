const express=require('express')
const app= express()
const cors = require("cors");
const bodyParser = require('body-parser');

  
  app.use(cors());

  app.use(bodyParser.json());
  
  
  
  
  const db = require("./models");
  db.sequelize.sync()
  .then(() => {
      console.log("BDD synced.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });
    
    
    //books routes
    const routerBooks = require('./routes/books-routes')
    
    app.get("/", (req, res) => {
        res.json({ message: "Welcome to our application." });
    });

    
    app.get('/api/books', routerBooks);
    
   





  const PORT = process.env.PORT || 8081;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  }); 