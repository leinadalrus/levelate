import mongoose from 'mongoose'

const pw = encodeURIComponent('process.env.MONGO_PW')
const uri = `mongodb+srv://${process.env.MONGO_USR}:${pw}@slex.d5c4mga.mongodb.net/?retryWrites=true&w=majority&appName=SLEX`

const loadDatabase = async () => {
    try {
        // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
        await mongoose.connect(uri)
        await mongoose.connection.db?.admin().command({ ping: 1 })

        console.log(
            'Pinged your deployment. You successfully connected to MongoDB!'
        )
    } catch (err) {
        console.table(err)
    }
}

loadDatabase().catch(console.dir)
