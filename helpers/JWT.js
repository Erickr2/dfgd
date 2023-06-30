const jwt = require('jsonwebtoken');


const tokenMiddleware = (req, res, next) =>  {

    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).json({ mensaje: 'Token faltante' });
    }
  
    try {
      
      jwt.verify(token, process.env.SECRET_KEY);
  
      next();
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        return res.status(401).json({ mensaje: 'Token expirado' });
      } else {
        return res.status(401).json({ mensaje: 'Token inválido' });
      }
    }
  };

const createToken = (dataUser) => {
    const token = jwt.sign(dataUser, process.env.SECRET_KEY, { expiresIn: '1h' });
    return token;
};

const validateTokenData = (req, res) => {
    const {usuario, contrasena} = req.body;
    const dataUser = {
        usuario,
        contrasena
    }

    if( usuario !== process.env.USUARIO_TOKEN || contrasena !== process.env.PASSWORD_TOKEN){
        res.status(401).json({
            error:'credenciales no validas'
        })
    }else{
        res.status(200).json({
            ok: 'credenciales correctas',
            token: createToken(dataUser)
        })
    }
  };

  module.exports = {
    createToken,
    validateTokenData, 
    tokenMiddleware
  }