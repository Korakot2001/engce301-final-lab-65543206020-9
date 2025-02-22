const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require("body-parser");
const port = 3001;

// place holder for the data
const users = [
  {
    firstName: "ชยธร",
    lastName: "เอียดราช",
    email: "chayathon_ai65@live.rmutl.ac.th",
    position: "System Analyst (SA)"
  },
  {
    firstName: "แดนชัย",
    lastName: "สุรินทร์",
    email: "danchai_su65@live.rmutl.ac.th",
    position: "Developer"
  },
  {
    firstName: "กรกช",
    lastName: "ไตรอุโฆษ",
    email: "korakot_tr65@live.rmutl.ac.th",
    position: "Tester"
  }
];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../../htdocs/lab1/myreact/build'))); 

app.get('/api/users', (req, res) => {
  console.log('api/users called!')
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  console.log('Adding user:::::', user);
  users.push(user);
  res.json("user addedd");
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../../../htdocs/lab1/myreact/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});