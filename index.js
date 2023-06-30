const express = require('express');
const { dbConnection } = require('./database/config');
const {  tokenMiddleware } = require('./helpers/JWT');
require('dotenv').config(); //me ayuda a acceder a mis variables de entorno env
const app = express();

app.use(express.json());

dbConnection();

app.use('/api/token', require('./routes/token'))

app.use("/api/user", tokenMiddleware, require('./routes/user'))

app.use("/api/deleteUser", tokenMiddleware, require('./routes/deleteUser'))


app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${ process.env.PORT }`)
})
