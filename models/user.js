module.exports = (sequelize, Sequelize) => {
    
    const user = sequelize.define("user", {
      firstName: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      
    });
    return user;
  
};
  