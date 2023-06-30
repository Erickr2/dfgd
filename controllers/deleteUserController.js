const { deleteUser } = require("../database/querys");

const deleteUSerController = async(req, res) => {

    const { idUser } = req.body; 

    try {

        deleteUser(idUser);
        res.status(200).json({
            status: 'Regsitor eliminado',
            idUser
        }).end();

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            mssg: 'Hubo un error con el servidor, por favor hable con el Admin'
        })
    }
}


module.exports = {
    deleteUSerController
}