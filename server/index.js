import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from "body-parser"
import animes from "./animes/routes.js"
import characters from "./characters/routes.js"
import genres from "./genre/routes.js"

const app = express()
app.use(cors())
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))

app.use("/animes/", animes)
app.use("/characters/", characters)
app.use("/genres/", genres)

const PORT = process.env.PORT || 5000

mongoose.connect("mongodb://localhost/qlist", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, console.log(`Listening to port ${PORT}...`)))
    .catch((err) => console.log(err.message))

mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)