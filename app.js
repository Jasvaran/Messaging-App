import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import router from './routes';
import mongoose from 'mongoose';

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/", router)


mongoose.set("strictQuery", false)
async function main(){
    await mongoose.connect(process.env.DB_URL)
    console.log("Successfully connected to Database")
}

mongoose.connection.on('error', err => {
    console.log(err)
})

main().catch(err => console.log(err))

app.listen(process.env.EXPRESS_PORT, () => {
    console.log("App listening on port 3000")
})