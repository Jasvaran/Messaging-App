import 'dotenv/config'
import cors from 'cors'
import express from 'express'

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))




app.listen(3000, () => {
    console.log("App listening on port 3000")
})