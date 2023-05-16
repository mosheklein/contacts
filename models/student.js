module.exports = (sequelize, Sequelize) => {
    
    const student = sequelize.define("student", {
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      }
      
    });
    return student;
  
};
  