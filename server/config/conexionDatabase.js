import { Sequelize } from "sequelize";


const dataBase = new Sequelize('barberia', 'root', '', {
  host: 'localhost',
  port: 3306,
  dialect: "mysql",
  define: {
    timestamps: true
  }
})

export default dataBase