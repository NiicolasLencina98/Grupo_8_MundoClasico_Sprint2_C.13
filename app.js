const express = require('express');
const path= require('path');
const app = express();
const port = 3000;

//Ruta elementos estaticos
app.use(express.static('./src/public'));
app.listen(process.env.PORT ||port, () => console.log(`Servidor Funcionando en el Puerto ${port}!`))

//Ruta index
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/views/index.html')
})
//Ruta login


app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/src/views/login.html')
})





//Ruta product cart
  app.get('/carritoDeCompras', (req, res) => {
    res.sendFile(__dirname + '/src/views/productCart.html')
  })

//Ruta product detail
  app.get('/detalleDeProducto', (req, res) => {
    res.sendFile(__dirname + '/src/views/productDetail.html')
  })

//Ruta register

app.get('/registro', (req, res) => {
    res.sendFile(__dirname + '/src/views/register.html')
  })
