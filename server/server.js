const express = require("express");
const cors = require("cors");
// const { graphqlHTTP } = require("express-graphql");
// const schema = require("./schema/schema");
// const mongoose = require("mongoose");
// const mongoURI = require("./serverKeys");

const app = express();

app.use(cors());

// Graph
// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema,
//     graphiql: true,
//   })
// );

app.get("/", (req, res) => {
  res.send("Hi");
});

app.listen(4000, () => {
  console.log("app running on port 4000");
});
