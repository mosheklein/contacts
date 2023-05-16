module.exports = (sequelize, Sequelize) => {
    
    const contact = sequelize.define("contact", {
        firstName: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        region:{
            type: Sequelize.STRING
        }
    });
    
    return contact;
};
  