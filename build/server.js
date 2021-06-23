"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const http = require('http');
const app = require('./app');
const normalizePort = (val) => {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
const errorHandler = (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
            break;
        default:
            throw error;
    }
};
const server = http.createServer(app);
server.on('error', errorHandler);
server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
    console.log('Listening on ' + bind);
});
server.listen(port);
/**
 * SCRAM
 */
mongoose_1.default
    .connect('mongodb+srv://admin:admin@cluster0.vqggq.mongodb.net/Workshop/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Workshop',
})
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));
/*  mongoose
 .connect('mongodb+srv://admin:admin@cluster0.6msgl.mongodb.net/CesiEat/', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   dbName: 'CesiEat',
 })
 .then(() => console.log('Connexion à MongoDB réussie !'))
 .catch(() => console.log('Connexion à MongoDB échouée !')); */
mongoose_1.default.connection.on('connected', function () {
    console.log('database is ready now');
});
mongoose_1.default.connection.on('disconnected', function () {
    console.log('database is disconnected');
});
//# sourceMappingURL=server.js.map