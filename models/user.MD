

module.exports = (sequelize, Sequelize) => {

    const user = sequelize.define("user", {
        major: {
            type: Sequelize.STRING
        },
        userid: {
            type: Sequelize.INTEGER
        },
        username: {
            type: Sequelize.STRING
        },
        firstName: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        gant: {
            type: Sequelize.JSON
        },
        semester: {
            type: Sequelize.STRING
        },
        year: {
            type: Sequelize.STRING
        },
        image:{
            type: Sequelize.STRING
        },
    });
    return user;
};
