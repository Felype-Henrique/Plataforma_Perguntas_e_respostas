const Sequelize = require("sequelize");
const connection = require("./database");

const Resposta = connection.define("resposta",{
    corpo: {
        type: Sequelize.TEXT,
        alowNull: false
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        alowNull: false
    }
});

Resposta.sync({force: false})

module.exports = Resposta;