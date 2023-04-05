module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("book", {
        title: {
            type: Sequelize.STRING
        },
        author: {
            type: Sequelize.STRING
        },
        description: {
          type: Sequelize.TEXT
        },
        copies: {
          type: Sequelize.INTEGER
        },
        copies_available: {
          type: Sequelize.INTEGER
        },
      category: {
        type: Sequelize.STRING
      },
      img: {
        type: Sequelize.BLOB
      }
    
    }, {
      //we can also use this command to have a name equal to the modal
      //freezeTableName:true
      tableName: 'Book',
    timestamps: false,
    },
     
    
    );
   
    return Book; 
  };
 