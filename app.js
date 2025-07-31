const express = require('express');

const app = express();

const port = 3000;

// Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
app.get('/', (req , res) => {
  res.send('Server del mio blog')
})
// Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
app.use(express.static('public'));

// Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.
app.get('/bacheca', (req , res) => {
// Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
const posts = [
  {
    titolo: "arsenal",
    contenuto: "emirates stadium",
    immagine: "arsenal.png",
    tags: ["rosso", "bianco"]
  },
  {
    titolo: "chelsea",
    contenuto: "stamford bridge",
    immagine: "chelsea-logo.png",
    tags: ["blu", "bianco"]
  },
  {
    titolo: "liverpool",
    contenuto: "anfield",
    immagine: "liverpool.webp",
    tags: ["rosso", "bianco"]
  },
  {
    titolo: "newcastle",
    contenuto: "st. james' park",
    immagine: "newcastle.png",
    tags: ["bianco", "nero"]
  },
  {
    titolo: "tottenham",
    contenuto: "tottenham hotspur stadium",
    immagine: "tottenham.png",
    tags: ["bianco", "blu"]
  }
];


  res.json(posts)
})



app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`)
})

 




 

// Testare su postman

// Buon lavoro!
