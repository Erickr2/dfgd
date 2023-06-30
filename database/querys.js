const { QueryTypes } = require("sequelize");
const { sequelize } = require("./config");

const insertUser = async (idU, nombre, apellidoP, apellidoM, correo, pass) => {
  try {
    await sequelize.query(
      `INSERT INTO \`${process.env.DB_NAME}\`.CatUser (idUser, name, fathersLastName, mothersLastName, email,password) VALUES ("${idU}", "${nombre}", "${apellidoP}", "${apellidoM}", "${correo}", "${pass}")`,
      { type: QueryTypes.INSERT }
    );
  } catch (error) {
    console.log(error);
    console.log("Hubo un error con la consulta");
  }
};

const insertCatPacientProfile = async ( idCat, idU ) => {
  try {
    await sequelize.query(
      `INSERT INTO \`${process.env.DB_NAME}\`.CatPacienteProfile (idCatPacienteProfile, CatUser_idUser, hasPacientRecord, provider, idCatAddress, created_at) VALUES ("${idCat}", "${idU}", "1", "mutuus", "0", "2023-03-09 17:12:14")`,
      { type: QueryTypes.INSERT }
    );
  } catch (error) {
    console.log(error);
    console.log("Hubo un erro con la consulta");
  }
};


const deleteUser = async(idUser) => {
  try {
    await sequelize.query(
      `DELETE \`${process.env.DB_NAME}\`.CatUser, \`${process.env.DB_NAME}\`.CatPacienteProfile 
       FROM  \`${process.env.DB_NAME}\`.CatPacienteProfile
       JOIN  \`${process.env.DB_NAME}\`.CatUser 
       ON \`${process.env.DB_NAME}\`.CatUser.idUser = \`${process.env.DB_NAME}\`.CatPacienteProfile.CatUser_idUser
       WHERE idUser = "${idUser}"`,
      { type: QueryTypes.DELETE }
    );
  } catch (error) {
    console.log(error);
    console.log("Hubo un erro con la consulta");
  }
}

module.exports = {
  insertUser,
  insertCatPacientProfile,
  deleteUser
};
