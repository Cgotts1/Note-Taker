const express = require('express')
const path = require('path');
const app = express();
const PORT = 4000;









// Api routes


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));




// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, 'public/index.html'))
// );



// Gets the index html (Need to have * in place of /index)
app.get('/index', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

// Gets the notes hmtl
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

// Listens for app at port
app.listen(PORT, () =>
  console.log(`Notetaker app listening at http://localhost:${PORT}`)
);