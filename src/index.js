import app from './App.js'
import { connectDB } from './db.js'

connectDB();
app.listen(4000)
console.log('Chi bebe chi funchiona: ', 4000)