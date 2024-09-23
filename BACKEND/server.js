const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'crud'  // Garde une seule ligne pour database
});

// Vérification de la connexion à la base de données
db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err);
        return;
    }
    console.log('Connecté à la base de données MySQL');
});

app.get('/', (req, res) => {
    res.send('Valisoa Tolotriniaina');
});

app.get('/users', (req, res) => {  // Corrigé
    const sql = "SELECT * FROM users";
    db.query(sql, (err, data) => {
        if (err) return res.json({ Message: "Error" });
        return res.json(data);
    });
});

app.listen(8081, () => {
    console.log('listening');
});
