const { MongoClient, ServerApiVersion} = require('mongodb')
const uri = 'mongodb+srv://thari123:thari123@cluster0.01zhtfo.mongodb.net/'
const client = new MongoClient(uri, {
    serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

client.connect(err => {
  if (!err) {
    console.log('MongoDB connection connected successfully')
  } else {
    console.log(err)
  }
})

module.exports = client
