import express from 'express'
import { route } from './routes'

const app = express()

app.use(express.json())
app.use(route)

app.listen(3008, function(){
    console.log('Server running on port 3008')
})

