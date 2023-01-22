const connectTOMongo = require("./db");
const express = require("express");

connectTOMongo();
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use("/api/heritages", require("./routes/heritages"));
app.use('/api/reviews', require('./routes/reviews'));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Backend Listening at http://localhost:${port}`);
});
