import app from "./app.js"
import mongoose from "mongoose";

const mongo_username = process.env['MONGO_USERNAME']
const mongo_password = process.env['MONGO_PASSWORD']
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@passon.rxpfci2.mongodb.net/passon?retryWrites=true&w=majority`
const port = 5000

mongoose.connect(
  uri,
  {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
  .then(async client => {
    console.log('Connected successfully to MongoDB server');
    app.listen(port, () => {
      console.log(`listening on port ${port}`)
    })
  })
