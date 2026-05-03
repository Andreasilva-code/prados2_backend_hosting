const app = require('./app');

// Railway asigna el puerto automáticamente en process.env.PORT
const port = process.env.PORT || app.get('port') || 3000;

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor API escuchando en el puerto ${port}`);
});