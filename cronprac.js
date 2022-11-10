const cron = require ('node-cron')
const express = require('express')
app= express()
cron.schedule('*/10 * * * * *', () => {
    console.log("running a task every 10 seconds")
})
app.listen(3000,  () => console.log("server running"))
