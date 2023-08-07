const express = require('express');
const app = express();
const PORT = 3030;
const path = require('path');

//Configuraciones
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'register.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});
app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'profile.html'));
});
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el http://localhost:${PORT}`);
});
