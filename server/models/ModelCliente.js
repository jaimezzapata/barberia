import Sequelize from "sequelize";
import dataBase from "../config/conexionDatabase.js";

const Cliente = dataBase.define('clientes', {
  documento: {
    type: Sequelize.STRING
  },
  nombre: {
    type: Sequelize.STRING
  },
  apellido: {
    type: Sequelize.STRING
  },
  telefono: {
    type: Sequelize.INTEGER
  },
  correo: {
    type: Sequelize.DATE
  },
  barrio: {
    type: Sequelize.INTEGER
  },
  direccion: {
    type: Sequelize.INTEGER
  },
  foto: {
    type: Sequelize.INTEGER
  }
})

export default Cliente