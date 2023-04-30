const { buildSchema } = require('graphql');
const ps=require("prompt-sync");
const prompt=ps();
console.log("Enter your name:");
let name=prompt();
console.log("Enter your ID:");
let id=prompt();
console.log("Enter your City:");
let city=prompt();
const schema = buildSchema(`
  type Query {
    name: String
    id:Int
    city:String
  }
`);
const root = {
    name: () => `${name}`,
    id:()=>`${id}`,
    city:()=>`${city}`,
  };
  const express = require('express');
  const { graphqlHTTP } = require('express-graphql');
  
  const app = express();
  
  app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }));
  
  app.listen(3000, () => console.log('Running a GraphQL API server at port 3000'));
    