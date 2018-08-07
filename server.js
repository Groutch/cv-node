const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const fs = require('fs');
//Lancement serveur pour app type heroku ou port 8080
const PORT = process.env.PORT || 8080;
server = app.listen(PORT, (req, res) => {});
app.use(bodyparser.urlencoded({
    extended: false
}));
//Utilisation de ejs en template
app.set('view engine', 'ejs');
//Utilisation du css dans le dossier public
app.use(express.static('public'));

//Les différentes pages du site
app.get('/', (req, res) => {
    var obj;
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) throw err;
        obj = JSON.parse(data);
        console.log(obj);
        res.render('index', {maintitle:"", content: obj.CV.home});
    });
});

app.get('/skill', (req, res) => {
    var obj;
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) throw err;
        obj = JSON.parse(data);
        res.render('index', {maintitle:"Compétences", content: obj.CV.skill});
    });
});

app.get('/xp', (req, res) => {
    var obj;
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) throw err;
        obj = JSON.parse(data);
        res.render('index', {maintitle:"Exp<span class='d-none d-sm-inline'>érience</span> Pro<span class='d-none d-sm-inline'>fessionnelle</span>", content: obj.CV.xp});
    });
});

app.get('/training', (req, res) => {
    var obj;
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) throw err;
        obj = JSON.parse(data);
        console.log(obj);
        res.render('index', {maintitle:"Formation", content: obj.CV.training});
    });
});

app.get('/fun', (req, res) => {
    var obj;
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) throw err;
        obj = JSON.parse(data);
        console.log(obj);
        res.render('index', {maintitle:"Loisirs", content: obj.CV.fun});
    });
});

app.get('*', (req, res) => {
    res.redirect('/');
});
