'use strict'

const express = require('express')
const { tractors, farms } = require('./routes')
const cors = require('cors')

const PORT = 8090
const HOST = '0.0.0.0'

const app = express()

app.use(express.json());
app.use(cors());

app.use('/tractors', tractors)
app.use('/farms', farms)

app.get('/', (req, res) => {
  res.json({
      status: 'Backend is running'
  })
})

app.use((err, req, res, next) => {
    //console.log(err);
    res.status(422).send({error: err.message})
})

app.listen(PORT, HOST, () => {
    console.log(`Backend is running on http://${HOST}:${PORT}`)
})
