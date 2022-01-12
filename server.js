require('dotenv').config();
const audioFileUrl = 'https://static.deepgram.com/examples/deep-learning-podcast-clip.wav';

const express = require("express");
const app = express();
app.use(express.static("public"));

const {Deepgram} = require('@deepgram/sdk')
const deepgram = new Deepgram(process.env.DG_KEY)

deepgram.transcription.preRecorded({url : audioFileUrl}).then(data => {
    console.dir(data,{depth:null})
})

const listener = app.listen(process.env.PORT, console.log("Listening at " + process.env.PORT));

