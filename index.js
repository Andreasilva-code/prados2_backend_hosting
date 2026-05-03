const app = require('./app');

// Obtenemos el puerto que configuramos en app.js
const port = app.get('port');

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor API escuchando en el puerto ${port}`);
});