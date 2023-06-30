const bcrypt = require("bcryptjs");
const { insertUser, insertCatPacientProfile } = require("../database/querys");
const { token } = require("../helpers/generateID");
const { response } = require("express");

const crearUsuario = (req, res = response) => {

    const salt = bcrypt.genSaltSync();
    const pass = bcrypt.hashSync(process.env.PASS, salt);
    const idU = "sehg450mm" + token();
    idCat = "mgur26kav" + token();

    const { nombre, apellidoP, apellidoM, correo } = req.body; 
    //telefono 

    try {

        insertUser( idU ,nombre, apellidoP, apellidoM, correo, pass );
        insertCatPacientProfile( idCat,idU );

        res.status(200).json({
            status: 'Usuario registrado',
            correo,
            validacion: 1
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            mssg: 'Hubo un error con el servidor, por favor hable con el Admin'
        })
    }

    
}





module.exports = {
    crearUsuario
}