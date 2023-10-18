const express = require('express');
const { PORT } = require('./config');
const { databaseConnection } = require('./database');
const router = require("./routes/user.route")


// Swagger
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const SwaggerOptions = require('./swagger/swagger.json');
const swaggerDocument = swaggerJsDoc(SwaggerOptions);

const StartServer = async() => {

    const app = express();
    // <==== parse request body as JSON
    app.use(express.json())
    
    // database connection
    await databaseConnection();
    
    // Route call
    app.use('/v1',router)

    // For Swagger Documentation
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    app.listen(PORT, () => {
        console.log(`listening to port ${PORT}`);
    })
    .on('error', (err) => {
        console.log(err);
        process.exit();
    })
}

StartServer();

