require('dotenv').config() //acceso al archivo .env
const { initializeApp, applicationDefault } = require('firebase-admi/app')
const { getFirestore } = require('firebase-admi/firestore')

initializeApp({
    credential: applicationDefault()
})

const db = getFirestore()

module.exports = { db }