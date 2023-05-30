const app = require('./src/app')
const connectDB = require('./src/database');
 
connectDB()
app.listen(3001, () => {
    console.log('Listening on port 3001')
})
