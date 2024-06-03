const express = require("express")
const app = express();
app.use(require("./routes/router"));


app.get('/', (req, res) => {
    res.send("Welcome to the favThings API");
  });


let port = 4501;

app.listen(port, () => {
    console.log(`Server Started At ${port}`)
})
module.exports = app;